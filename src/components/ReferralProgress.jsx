import React, { useState, useEffect } from 'react'
import { fetchReferralStatus, markCongratsSeen } from '../lib/referralStatus.js'

export default function ReferralProgress({ user }) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!user) return
    fetchReferralStatus(user.id).then(setStatus)
  }, [user])

  const dismissCongrats = async () => {
    await markCongratsSeen(user.id)
    setStatus(s => ({ ...s, shouldShowCongrats: false }))
  }

  if (!status) return null

  const referralLink = status.referralCode ? `https://app.usesual.com/?ref=${status.referralCode}` : null
  const progress = Math.min(status.referralCount, 30)

  return (
    <div style={{ background: '#fff', border: '1px solid var(--border, #dceafb)', borderRadius: 16, padding: 24, marginBottom: 20 }}>
      {status.shouldShowCongrats && (
        <div style={{ background: 'rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.25)', borderRadius: 10, padding: '14px 18px', marginBottom: 16, color: '#1b5e20' }}>
          <p style={{ fontWeight: 700, marginBottom: 4 }}>🎉 Mabrook! You've referred 30 people.</p>
          <p style={{ fontSize: '0.88rem', marginBottom: 10 }}>You've been granted a free month of Spaces, enjoy it.</p>
          <button onClick={dismissCongrats} style={{ background: 'none', border: 'none', color: '#1b5e20', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
            Got it
          </button>
        </div>
      )}

      <h3 style={{ fontSize: '1.05rem', marginBottom: 6, color: '#094570' }}>Your Referrals</h3>
      <p style={{ fontSize: '0.88rem', color: '#56728a', marginBottom: 14 }}>
        {status.rewardClaimed
          ? 'You\'ve already earned your one-time free month for reaching 30 referrals.'
          : `Refer 30 people to earn a free month of Spaces. ${30 - status.referralCount} to go.`}
      </p>

      <div style={{ height: 10, background: '#f0f8ff', borderRadius: 999, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ height: '100%', width: `${(progress / 30) * 100}%`, background: 'linear-gradient(90deg, #85ccff, #094570)', borderRadius: 999 }} />
      </div>
      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#094570', marginBottom: 16 }}>{status.referralCount} / 30 referred</p>

      {referralLink && !status.rewardClaimed && (
        <div style={{ display: 'flex', gap: 8 }}>
          <input readOnly value={referralLink} style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #dceafb', fontSize: '0.82rem', color: '#56728a' }} />
          <button
            onClick={() => navigator.clipboard.writeText(referralLink)}
            style={{ background: '#094570', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer' }}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  )
}