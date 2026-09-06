// src/components/CourseCertificate.jsx
//
// A reusable completion certificate, works for any course by simply
// passing different props -- no new backend function, no schema
// changes. Completion is detected client-side by comparing the
// course's own unit list (already imported wherever the course page
// itself is rendered) against which units have at least one
// passed = true row in that course's own *_quiz_attempts table,
// using the exact same RLS policy already in place for the quiz
// gate itself (users can already read their own attempts).
//
// New dependency: html2canvas (`npm install html2canvas`). Chosen
// specifically because it needs zero backend changes -- rendering a
// styled HTML template to a downloadable PNG entirely in the
// browser, avoiding Deno's awkward support for image/canvas
// rendering and Arabic font embedding server-side.
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
// This renders nothing at all until the course is actually complete
// (so it's safe to always mount it on the course page without any
// extra conditional logic at the call site).

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
  const [generating, setGenerating] = useState(false);
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

  const today = new Date();
  const dateLabel = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  // Not a cryptographic signature -- just a short, stable-looking
  // reference so the certificate doesn't feel machine-blank. Two
  // people completing the same course on the same day will get
  // different codes since it also factors in the current time.
  const referenceCode = `${courseId.slice(0, 4).toUpperCase()}-${today.getTime().toString(36).toUpperCase()}`;

  const downloadCertificate = async () => {
    if (!name.trim()) return;
    localStorage.setItem(NAME_STORAGE_KEY, name.trim());
    setGenerating(true);
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
            setGenerating(false);
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
      setGenerating(false);
    }
  };

  if (checking || !completed) return null;

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
              />
            </div>

            {/* The actual certificate artwork. Always rendered (so
                html2canvas has something real to capture) but only
                visible once a name has been entered. */}
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
                      <span className="cert-footer-value">{dateLabel}</span>
                    </div>
                    <div className="cert-footer-col cert-footer-col--right">
                      <span className="cert-footer-label">Reference</span>
                      <span className="cert-footer-value">{referenceCode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="cert-download-button"
              onClick={downloadCertificate}
              disabled={!name.trim() || generating}
            >
              {generating ? 'Preparing…' : 'Download Certificate'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}