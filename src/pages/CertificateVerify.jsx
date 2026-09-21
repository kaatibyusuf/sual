import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './CertificateVerify.css'

export default function CertificateVerify() {
  const { code } = useParams()
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase.rpc('verify_certificate', { code })
        if (error) throw error
        if (cancelled) return
        setResult(data && data.length > 0 ? data[0] : null)
      } catch (err) {
        console.error('Certificate verification failed:', err)
        if (!cancelled) setError('Could not verify this certificate right now.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [code])

  return (
    <div className="cert-verify-page">
      <div className="cert-verify-card">
        <div className="cert-verify-logo">سُؤَال</div>
        <p className="cert-verify-brand">SUAL MARKETPLACE</p>

        {loading ? (
          <p className="cert-verify-status">Checking certificate…</p>
        ) : error ? (
          <p className="cert-verify-status cert-verify-status--error">{error}</p>
        ) : !result ? (
          <>
            <p className="cert-verify-status cert-verify-status--error">✕ Not a valid certificate</p>
            <p className="cert-verify-sub">No certificate matches code <code>{code}</code>.</p>
          </>
        ) : (
          <>
            <p className="cert-verify-status cert-verify-status--valid">✓ Valid Certificate</p>
            <p className="cert-verify-name">{result.student_name}</p>
            <p className="cert-verify-detail">has completed</p>
            <p className="cert-verify-course">{result.course_title}</p>
            <p className="cert-verify-date">
              Issued {new Date(result.issued_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="cert-verify-code">Certificate ID: {code}</p>
          </>
        )}
      </div>
    </div>
  )
}