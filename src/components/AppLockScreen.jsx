import React, { useState, useEffect } from 'react'
import { verifyBiometric, disableBiometricLock } from '../lib/biometricLock.js'
import './AppLockScreen.css'

export default function AppLockScreen({ onUnlock, onSignOut }) {
  const [status, setStatus] = useState('idle') // idle | verifying | error
  const [errorMsg, setErrorMsg] = useState('')
  const [showRecovery, setShowRecovery] = useState(false)

  const attempt = async () => {
    setStatus('verifying')
    setErrorMsg('')
    try {
      await verifyBiometric()
      onUnlock()
    } catch (err) {
      console.error('Biometric verification failed:', err)
      setStatus('error')
      setErrorMsg('Could not verify — try again, or use the option below.')
    }
  }

  // Prompt automatically on mount so the user doesn't need an extra tap.
  useEffect(() => { attempt() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDisableAndUnlock = () => {
    disableBiometricLock()
    onUnlock()
  }

  return (
    <div className="alock-overlay">
      <div className="alock-lattice" aria-hidden="true" />
      <div className="alock-content">
        <div className="arabic alock-wordmark">سُؤَال</div>

        <div className={`alock-icon ${status === 'verifying' ? 'alock-icon--pulsing' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 11a2 2 0 0 0-2 2v1a2 2 0 0 0 4 0v-1a2 2 0 0 0-2-2z" />
            <path d="M8 13a4 4 0 0 1 8 0" />
            <path d="M5 13a7 7 0 0 1 14 0" />
            <path d="M12 17.5v1.5" />
          </svg>
        </div>

        <p className="alock-title">Sual is locked</p>
        <p className="alock-sub">
          {status === 'verifying' ? 'Verifying…' : status === 'error' ? errorMsg : 'Unlock to continue'}
        </p>

        {status === 'error' && (
          <button className="alock-btn" onClick={attempt}>Try Again</button>
        )}

        <button className="alock-recovery-link" onClick={() => setShowRecovery(v => !v)}>
          Trouble unlocking?
        </button>

        {showRecovery && (
          <div className="alock-recovery-box">
            <p>This won't affect your account or your data — it only turns off the fingerprint lock on this device.</p>
            <button className="alock-btn alock-btn--secondary" onClick={handleDisableAndUnlock}>
              Turn off app lock &amp; continue
            </button>
            {onSignOut && (
              <button className="alock-btn alock-btn--ghost" onClick={onSignOut}>
                Sign out instead
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}