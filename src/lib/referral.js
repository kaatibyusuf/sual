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