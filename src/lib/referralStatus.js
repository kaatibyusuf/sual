import { supabase } from './supabase.js'

// Fetches everything a user needs to see about their own referral
// progress: how many people they've referred, whether they've hit
// the 30-referral milestone, and whether the congratulations message
// still needs to be shown (shown once, then marked seen).
export async function fetchReferralStatus(userId) {
  const [{ count }, { data: profile }] = await Promise.all([
    supabase.from('referrals').select('id', { count: 'exact', head: true }).eq('referrer_id', userId),
    supabase.from('profiles').select('referral_code, referral_reward_claimed, referral_reward_notified').eq('id', userId).maybeSingle(),
  ])

  return {
    referralCount: count ?? 0,
    referralCode: profile?.referral_code ?? null,
    rewardClaimed: profile?.referral_reward_claimed ?? false,
    shouldShowCongrats: (profile?.referral_reward_claimed ?? false) && !(profile?.referral_reward_notified ?? false),
  }
}

// Call this right after showing the congratulations message, so it
// never appears again on a future visit.
export async function markCongratsSeen(userId) {
  await supabase.from('profiles').update({ referral_reward_notified: true }).eq('id', userId)
}