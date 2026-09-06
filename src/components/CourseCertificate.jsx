// src/components/CourseCertificate.jsx
//
// A reusable, genuinely verifiable completion certificate, works for
// any course by simply passing different props. Two things happen
// on generation, in order:
//
// 1. Calls the issue-certificate edge function, which re-verifies
//    completion SERVER-SIDE (never trusts this component's own
//    client-side completion check for the actual issued code -- see
//    the note below) and returns a real, logged reference code.
// 2. Only once that real code is back and rendered does this
//    component capture the certificate as an image, so the code
//    printed on the certificate is always the one actually logged
//    in the certificates table and checkable at the verification
//    page.
//
// The client-side completion check below (comparing units against
// *_quiz_attempts) still runs, but only decides whether to show the
// "claim your certificate" trigger card at all -- it is a UI
// convenience, not the security boundary. The issue-certificate
// function performs its own, independent, authoritative check
// before ever logging a code, so this component cannot be tricked
// via browser dev tools into printing a code for a course that
// wasn't actually completed.
//
// New dependency: html2canvas (`npm install html2canvas`).
//
// The signer's name is deliberately NOT read from any existing
// profile table, since it isn't known whether this app stores a
// display name anywhere versus just an email. Instead this
// component asks once, remembers the answer in localStorage under
// a course-independent key so it's only ever asked the first time
// across any course, and lets the user edit it before generating.
//
// USAGE (drop this in wherever a course's own completion state is
// already visible, e.g. the course overview page, once all units
// are unlocked):
//
//   <CourseCertificate
//     courseId="hadeethclass"
//     quizAttemptsTable="hadeethclass_quiz_attempts"
//     units={HADEETHCLASS_UNITS}
//     courseLabel="Hadeeth Class"
//     courseArabic="حَدِيث"
//     courseStats="14 units · 58 topics · 420 quiz questions"
//   />
//
// This renders nothing at all until the client-side check thinks
// the course is complete (so it's safe to always mount it on the
// course page without any extra conditional logic at the call
// site). Note that courseId must match one of the keys configured
// in issue-certificate's own COURSE_CONFIG, or generation will fail
// with a clear error even though the trigger card appears -- as of
// this writing that's tajweedclass, seerahclass, arabiyyahclass, and
// hadeethclass; adab and tawheed still need their real total unit
// counts confirmed before they can be added there.

import { useState, useEffect, useCallback, useRef } from 'react';
import html2canvas from 'html2canvas';
import { supabase } from '../lib/supabase.js';
import './CourseCertificate.css';

const NAME_STORAGE_KEY = 'sual_certificate_name';

export default function CourseCertificate({
  courseId,
  quizAttemptsTable,
  units,
  courseLabel,
  courseArabic,
  courseStats,
}) {
  const [checking, setChecking] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(() => localStorage.getItem(NAME_STORAGE_KEY) || '');
  const [issuing, setIssuing] = useState(false);
  const [issueError, setIssueError] = useState(null);
  const [serverCert, setServerCert] = useState(null); // { referenceCode, issuedAt }
  const [pendingCapture, setPendingCapture] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const certificateRef = useRef(null);

  const totalUnits = units?.length ?? 0;

  useEffect(() => {
    let cancelled = false;

    async function checkCompletion() {
      setChecking(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          if (!cancelled) { setCompleted(false); setChecking(false); }
          return;
        }

        const { data, error } = await supabase
          .from(quizAttemptsTable)
          .select('unit_id, passed')
          .eq('user_id', user.id)
          .eq('passed', true);

        if (error) throw error;

        const passedUnitIds = new Set((data || []).map((row) => row.unit_id));
        const allUnitIds = (units || []).map((u) => u.id);
        const everyUnitPassed = allUnitIds.length > 0 && allUnitIds.every((id) => passedUnitIds.has(id));

        if (!cancelled) setCompleted(everyUnitPassed);
      } catch (err) {
        console.error(`Failed to check ${courseId} completion:`, err);
        if (!cancelled) setCompleted(false);
      } finally {
        if (!cancelled) setChecking(false);
      }
    }

    checkCompletion();
    return () => { cancelled = true; };
  }, [courseId, quizAttemptsTable, units]);

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const dateLabel = (isoString) => {
    if (!isoString) return '';
    return new Date(isoString).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Step 1: ask the server to actually issue (or re-fetch, if this
  // course was already certified for this user) a real, logged
  // certificate. Only on success do we move to capturing an image.
  const requestCertificate = async () => {
    if (!name.trim()) return;
    localStorage.setItem(NAME_STORAGE_KEY, name.trim());
    setIssueError(null);
    setIssuing(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('You need to be signed in to generate a certificate.');

      const { data, error } = await supabase.functions.invoke('issue-certificate', {
        body: { courseId, recipientName: name.trim() },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      setServerCert({ referenceCode: data.referenceCode, issuedAt: data.issuedAt });
      setPendingCapture(true); // triggers the capture effect below, once this has rendered
    } catch (err) {
      console.error('Failed to issue certificate:', err);
      setIssueError(err.message || 'Something went wrong issuing your certificate.');
    } finally {
      setIssuing(false);
    }
  };

  // Step 2: only runs once serverCert is actually set AND the
  // certificate DOM has re-rendered with that real code visible --
  // guaranteeing the image never captures a stale or placeholder
  // code.
  useEffect(() => {
    if (!pendingCapture || !serverCert) return;

    async function captureAndDeliver() {
      setCapturing(true);
      try {
        const canvas = await html2canvas(certificateRef.current, {
          scale: 2, // real, print-worthy resolution rather than a blurry screen capture
          backgroundColor: '#faf6ee',
          useCORS: true,
        });
        const dataUrl = canvas.toDataURL('image/png');
        const filename = `sual-${courseId}-certificate.png`;

        if (navigator.canShare && navigator.canShare({ files: [] })) {
          try {
            const blob = await (await fetch(dataUrl)).blob();
            const file = new File([blob], filename, { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
              await navigator.share({
                files: [file],
                title: `${courseLabel}: Certificate of Completion`,
              });
              return;
            }
          } catch (shareErr) {
            // Fall through to plain download if sharing is cancelled or unsupported.
          }
        }

        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        link.click();
      } catch (err) {
        console.error('Failed to generate certificate image:', err);
      } finally {
        setCapturing(false);
        setPendingCapture(false);
      }
    }

    captureAndDeliver();
  }, [pendingCapture, serverCert, courseId, courseLabel]);

  // Once a real code has already been issued this session, further
  // clicks just re-capture and re-download the same certificate
  // rather than calling issue-certificate again (it would return the
  // same code anyway, since issuance is idempotent per user/course,
  // but there's no reason to round-trip for it twice).
  const handleGenerateClick = () => {
    if (serverCert) {
      setPendingCapture(true);
    } else {
      requestCertificate();
    }
  };

  if (checking || !completed) return null;

  const busy = issuing || capturing;
  const displayCode = serverCert?.referenceCode ?? '\u2014';
  const displayDate = serverCert ? dateLabel(serverCert.issuedAt) : dateLabel(new Date().toISOString());

  return (
    <div className="cert-trigger-card">
      <div className="cert-trigger-text">
        <span className="cert-trigger-title">You've completed {courseLabel}!</span>
        <span className="cert-trigger-subtitle">Every unit passed, {totalUnits} of {totalUnits}. Claim your certificate.</span>
      </div>
      <button className="cert-trigger-button" onClick={openModal}>Get Certificate</button>

      {showModal && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal} aria-label="Close">×</button>

            <div className="cert-modal-form">
              <label className="cert-name-label" htmlFor="cert-name-input">Name to print on the certificate</label>
              <input
                id="cert-name-input"
                type="text"
                className="cert-name-input"
                value={name}
                onChange={handleNameChange}
                placeholder="Your full name"
                autoFocus
                disabled={!!serverCert}
              />
              {serverCert && (
                <p className="cert-name-locked-note">
                  This certificate has already been issued with this name. To change it, contact support.
                </p>
              )}
            </div>

            {issueError && <div className="cert-error">{issueError}</div>}

            {/* The actual certificate artwork. Always rendered (so
                html2canvas has something real to capture) but only
                visible once a name has been entered. The reference
                code only ever shows a real, server-issued value --
                never a placeholder that could be mistaken for one. */}
            <div className={`cert-preview-wrap ${name.trim() ? '' : 'cert-preview-wrap--empty'}`}>
              <div className="cert-plate" ref={certificateRef}>
                <div className="cert-border">
                  <div className="cert-header">
                    <span className="cert-brand-arabic">فُصُول</span>
                    <span className="cert-brand-latin">Fusuul · Sual</span>
                  </div>

                  <div className="cert-rule" aria-hidden="true">
                    <span className="cert-rule-line" />
                    <svg className="cert-rule-mark" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.6 7.2L22 12l-7.4 2.8L12 22l-2.6-7.2L2 12l7.4-2.8z" />
                    </svg>
                    <span className="cert-rule-line" />
                  </div>

                  <p className="cert-eyebrow">Certificate of Completion</p>
                  <p className="cert-lead">This is to certify that</p>
                  <p className="cert-name">{name.trim() || '\u00A0'}</p>
                  <p className="cert-lead">has successfully completed</p>

                  <div className="cert-course-block">
                    <span className="cert-course-arabic" lang="ar" dir="rtl">{courseArabic}</span>
                    <span className="cert-course-title">{courseLabel}</span>
                    {courseStats && <span className="cert-course-stats">{courseStats}</span>}
                  </div>

                  <div className="cert-footer">
                    <div className="cert-footer-col">
                      <span className="cert-footer-label">Date</span>
                      <span className="cert-footer-value">{displayDate}</span>
                    </div>
                    <div className="cert-footer-col cert-footer-col--right">
                      <span className="cert-footer-label">Reference</span>
                      <span className="cert-footer-value">{displayCode}</span>
                    </div>
                  </div>

                  {serverCert && (
                    <p className="cert-verify-note">Verify at sual.app/verify-certificate</p>
                  )}
                </div>
              </div>
            </div>

            <button
              className="cert-download-button"
              onClick={handleGenerateClick}
              disabled={!name.trim() || busy}
            >
              {issuing ? 'Issuing certificate…' : capturing ? 'Preparing image…' : serverCert ? 'Download Again' : 'Generate Certificate'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}