import React, { useState, useEffect } from 'react'
import {
  isBiometricSupported, isLockEnabled, enableBiometricLock, disableBiometricLock,
} from '../lib/biometricLock.js'
import './BiometricLockToggle.css'

export default function BiometricLockToggle({ user }) {
  const [supported, setSupported] = useState(null) // null = checking
  const [enabled, setEnabled] = useState(isLockEnabled())
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    isBiometricSupported().then(setSupported)
  }, [])

  const handleToggle = async () => {
    setError(null)
    setBusy(true)
    try {
      if (enabled) {
        disableBiometricLock()
        setEnabled(false)
      } else {
        await enableBiometricLock(user?.id, user?.email)
        setEnabled(true)
      }
    } catch (err) {
      console.error('Biometric lock toggle failed:', err)
      setError('Could not set that up — your device may have cancelled or doesn\'t support this.')
    } finally {
      setBusy(false)
    }
  }

  if (supported === null) return null // still checking, avoid a flash of "unsupported"

  if (!supported) {
    return (
      <div className="blt-row blt-row--unsupported">
        <div>
          <p className="blt-title">Fingerprint / Face Unlock</p>
          <p className="blt-sub">Not available on this device or browser.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blt-row">
      <div>
        <p className="blt-title">Fingerprint / Face Unlock</p>
        <p className="blt-sub">Require your fingerprint or face to open Sual on this device.</p>
        {error && <p className="blt-error">{error}</p>}
      </div>
      <button
        className={`blt-switch ${enabled ? 'blt-switch--on' : ''}`}
        onClick={handleToggle}
        disabled={busy}
        role="switch"
        aria-checked={enabled}
      >
        <span className="blt-switch-knob" />
      </button>
    </div>
  )
}