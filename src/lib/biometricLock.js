// src/lib/biometricLock.js
//
// Local device-lock using WebAuthn's platform authenticator (Face
// ID / fingerprint / device PIN, whatever the device offers). This
// is a LOCAL GATE, not a server-verified auth flow — it protects
// against someone picking up an already-signed-in phone and opening
// the app, but does not replace or strengthen Supabase auth itself,
// which remains the real security boundary for the user's data.
//
// The credential is registered once per device and stored in
// localStorage — WebAuthn platform credentials are inherently
// device-bound anyway, so there's no meaningful gain from storing
// this server-side, and keeping it local means the lock works
// entirely offline.

const ENABLED_KEY = 'sual-biolock-enabled'
const CREDENTIAL_KEY = 'sual-biolock-credential-id'
const UNLOCKED_SESSION_KEY = 'sual-biolock-unlocked'
const LAST_HIDDEN_KEY = 'sual-biolock-last-hidden'

// Re-lock if the app was backgrounded for longer than this — a
// quick tab-switch shouldn't re-prompt, but leaving the app for a
// while should.
export const RELOCK_AFTER_MS = 60 * 1000

export async function isBiometricSupported() {
  if (!window.PublicKeyCredential) return false
  try {
    return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
  } catch {
    return false
  }
}

export function isLockEnabled() {
  return localStorage.getItem(ENABLED_KEY) === 'true'
}

function bufferToBase64(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
}

function base64ToBuffer(base64) {
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer
}

// Registers a new platform credential and enables the lock. Call
// this from a settings toggle, after confirming isBiometricSupported().
export async function enableBiometricLock(userId, userEmail) {
  const challenge = crypto.getRandomValues(new Uint8Array(32))

  const credential = await navigator.credentials.create({
    publicKey: {
      challenge,
      rp: { name: 'Sual', id: window.location.hostname },
      user: {
        id: new TextEncoder().encode(userId),
        name: userEmail || 'sual-user',
        displayName: userEmail || 'Sual User',
      },
      pubKeyCredParams: [
        { alg: -7, type: 'public-key' },   // ES256
        { alg: -257, type: 'public-key' }, // RS256
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        userVerification: 'required',
        residentKey: 'preferred',
      },
      timeout: 60000,
      attestation: 'none',
    },
  })

  if (!credential) throw new Error('Could not register biometric credential')

  localStorage.setItem(CREDENTIAL_KEY, bufferToBase64(credential.rawId))
  localStorage.setItem(ENABLED_KEY, 'true')
  sessionStorage.setItem(UNLOCKED_SESSION_KEY, 'true') // don't immediately re-prompt right after enabling
  return true
}

export function disableBiometricLock() {
  localStorage.removeItem(CREDENTIAL_KEY)
  localStorage.removeItem(ENABLED_KEY)
  sessionStorage.removeItem(UNLOCKED_SESSION_KEY)
}

// Prompts the platform authenticator (fingerprint/Face ID/PIN
// sheet). Resolves true on success, throws on cancellation/failure
// so the caller can show a retry state.
export async function verifyBiometric() {
  const credentialId = localStorage.getItem(CREDENTIAL_KEY)
  if (!credentialId) throw new Error('No biometric credential registered on this device')

  const challenge = crypto.getRandomValues(new Uint8Array(32))

  const assertion = await navigator.credentials.get({
    publicKey: {
      challenge,
      allowCredentials: [{ id: base64ToBuffer(credentialId), type: 'public-key' }],
      userVerification: 'required',
      timeout: 60000,
    },
  })

  if (!assertion) throw new Error('Verification failed')
  sessionStorage.setItem(UNLOCKED_SESSION_KEY, 'true')
  return true
}

// Determines whether the lock screen should show right now — true
// only if the lock is enabled AND this browser session hasn't been
// unlocked yet (a fresh app launch clears sessionStorage naturally).
export function shouldShowLockScreen() {
  if (!isLockEnabled()) return false
  return sessionStorage.getItem(UNLOCKED_SESSION_KEY) !== 'true'
}

// Call on document visibility change. Tracks how long the app was
// backgrounded and forces a re-lock if it exceeds RELOCK_AFTER_MS,
// even within the same browser session.
export function trackVisibilityForRelock() {
  if (!isLockEnabled()) return
  if (document.visibilityState === 'hidden') {
    sessionStorage.setItem(LAST_HIDDEN_KEY, String(Date.now()))
  } else if (document.visibilityState === 'visible') {
    const lastHidden = Number(sessionStorage.getItem(LAST_HIDDEN_KEY) || 0)
    if (lastHidden && Date.now() - lastHidden > RELOCK_AFTER_MS) {
      sessionStorage.removeItem(UNLOCKED_SESSION_KEY)
    }
  }
}