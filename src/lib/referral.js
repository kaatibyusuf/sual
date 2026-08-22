import { supabase } from './supabase.js'

const STORAGE_KEY = 'sual_referral_code'

// Call this once, as early as possible in App.jsx (before auth even
// resolves), so the code survives through any signup/email-confirm
// redirect that happens between clicking the link and account
// creation actually completing.
export function captureReferralFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const ref = params.get('ref')
  if (ref) {
    localStorage.setItem(STORAGE_KEY, ref.toUpperCase())
  }
}

// Call this when the sign-up form's referral code field changes.
// Writes to the SAME storage key captureReferralFromUrl uses, so a
// manually-typed code and a ?ref= link both flow through the one
// redeemStoredReferral() call below — no separate manual-code path
// to keep in sync. An empty string clears it (e.g. the user typed
// something then deleted it), rather than leaving a stale value
// that a later real link visit wouldn't otherwise get to overwrite
// in the same session.
export function setManualReferralCode(code) {
  const trimmed = code.trim().toUpperCase()
  if (trimmed) {
    localStorage.setItem(STORAGE_KEY, trimmed)
  } else {
    localStorage.removeItem(STORAGE_KEY)
  }
}

// Lets the sign-up form show whatever code is currently staged
// (e.g. pre-fill the field if the user arrived via a ?ref= link,
// so they see it was picked up instead of an empty box).
export function getStagedReferralCode() {
  return localStorage.getItem(STORAGE_KEY) || ''
}

// Call this once, right after a brand-new signup succeeds (not on a
// normal login) — it's a no-op if there's no stored code, and the
// edge function itself guards against a code being redeemed twice.
export async function redeemStoredReferral() {
  const code = localStorage.getItem(STORAGE_KEY)
  if (!code) return
  try {
    const { data, error } = await supabase.functions.invoke('redeem-referral', {
      body: { referral_code: code },
    })
    if (!error && data?.ok) {
      localStorage.removeItem(STORAGE_KEY)
    }
  } catch (err) {
    console.error('Referral redemption failed:', err)
  }
}