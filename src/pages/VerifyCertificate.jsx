// src/pages/VerifyCertificate.jsx
//
// Public certificate verification page. Deliberately requires no
// sign-in -- this is meant to work for anyone (an employer checking
// a candidate's claimed credential), not just Sual account holders.
//
// Route suggestion: /verify-certificate, reading an optional ?code=
// query param so a certificate itself (see the "Verify at
// sual.app/verify-certificate" note printed on the artwork in
// CourseCertificate.jsx) or a shared link can pre-fill the code
// rather than requiring it to be typed in by hand.
//
// Calls the verify-certificate edge function, which is the only
// thing allowed to read the otherwise fully private certificates
// table -- this page itself never touches that table directly.

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase.js';
import './VerifyCertificate.css';

export default function VerifyCertificate() {
  const [searchParams] = useSearchParams();
  const [code, setCode] = useState(searchParams.get('code') || '');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null); // { valid, recipientName?, courseLabel?, issuedAt? }
  const [error, setError] = useState(null);

  const runVerification = useCallback(async (codeToCheck) => {
    const trimmed = codeToCheck.trim();
    if (!trimmed) return;
    setChecking(true);
    setError(null);
    setResult(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('verify-certificate', {
        body: { code: trimmed },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      console.error('Certificate verification failed:', err);
      setError('Something went wrong checking that code. Please try again.');
    } finally {
      setChecking(false);
    }
  }, []);

  // Auto-run verification if a code arrived via ?code= in the URL,
  // so a shared or scanned link works without an extra click.
  useEffect(() => {
    const initial = searchParams.get('code');
    if (initial) runVerification(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    runVerification(code);
  };

  const formattedDate = (isoString) => {
    if (!isoString) return '';
    return new Date(isoString).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <div className="vc-page">
      <div className="vc-header">
        <div className="vc-title-row">
          <span className="vc-title-arabic">فُصُول</span>
          <span className="vc-title-latin">Verify a Certificate</span>
        </div>
        <p className="vc-subtitle">Check whether a Sual course completion certificate is genuine.</p>
      </div>

      <form className="vc-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="vc-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="SUAL-XXXX-XXXXXXXX"
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck="false"
        />
        <button className="vc-submit" type="submit" disabled={checking || !code.trim()}>
          {checking ? 'Checking…' : 'Verify'}
        </button>
      </form>

      {error && <div className="vc-error">{error}</div>}

      {result && (
        result.valid ? (
          <div className="vc-result vc-result--valid">
            <div className="vc-result-icon" aria-hidden="true">✓</div>
            <p className="vc-result-heading">This certificate is genuine.</p>
            <dl className="vc-result-details">
              <div className="vc-result-row">
                <dt>Recipient</dt>
                <dd>{result.recipientName}</dd>
              </div>
              <div className="vc-result-row">
                <dt>Course</dt>
                <dd>{result.courseLabel}</dd>
              </div>
              <div className="vc-result-row">
                <dt>Issued</dt>
                <dd>{formattedDate(result.issuedAt)}</dd>
              </div>
            </dl>
            <p className="vc-result-caveat">
              This confirms the certificate itself was genuinely issued by Sual for this course.
              The recipient name is exactly as entered by the learner when the certificate was
              generated and is not separately verified against a government ID or similar document.
            </p>
          </div>
        ) : (
          <div className="vc-result vc-result--invalid">
            <div className="vc-result-icon" aria-hidden="true">✕</div>
            <p className="vc-result-heading">No certificate found with this code.</p>
            <p className="vc-result-caveat">
              Double-check the code was copied correctly, including all dashes. If you believe
              this is a genuine certificate, contact the recipient to confirm the exact code.
            </p>
          </div>
        )
      )}
    </div>
  );
}