import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Rewards.css'

const MILESTONE = 5000

function ProgressRing({ value, max }) {
  const pct = Math.min(1, value / max)
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct)
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" className="rewards-ring">
      <circle cx="70" cy="70" r={radius} className="rewards-ring-track" strokeWidth="10" fill="none" />
      <circle
        cx="70" cy="70" r={radius}
        className="rewards-ring-progress"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 70 70)"
      />
    </svg>
  )
}

export default function Rewards({ user }) {
  const [tab, setTab] = useState('coins') // 'coins' | 'referrals' | 'leaderboard'

  // ── Coins ──────────────────────────────────────────────────
  const [balance, setBalance] = useState(0)
  const [merchCode, setMerchCode] = useState(null)
  const [coinsLoading, setCoinsLoading] = useState(true)
  const [history, setHistory] = useState([])
  const [historyLoading, setHistoryLoading] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  // ── Referrals ──────────────────────────────────────────────
  const [referralStats, setReferralStats] = useState(null)
  const [referralLoading, setReferralLoading] = useState(true)
  const [copiedReferral, setCopiedReferral] = useState(false)

  // ── Leaderboard ────────────────────────────────────────────
  const [leaderboard, setLeaderboard] = useState([])
  const [leaderboardLoading, setLeaderboardLoading] = useState(true)

  const fetchCoins = async () => {
    setCoinsLoading(true)
    try {
      const { data, error } = await supabase.rpc('get_my_coins_and_code')
      if (error) throw error
      const row = Array.isArray(data) ? data[0] : data
      setBalance(row?.balance ?? 0)
      setMerchCode(row?.merch_code ?? null)
    } catch (err) {
      console.error('Failed to load coin balance:', err)
    } finally {
      setCoinsLoading(false)
    }
  }

  const fetchHistory = async () => {
    setHistoryLoading(true)
    try {
      const { data, error } = await supabase.rpc('get_my_coin_history', { limit_count: 20 })
      if (error) throw error
      setHistory(data || [])
    } catch (err) {
      console.error('Failed to load coin history:', err)
    } finally {
      setHistoryLoading(false)
    }
  }

  const fetchReferralStats = async () => {
    setReferralLoading(true)
    try {
      const { data, error } = await supabase.rpc('get_my_referral_stats')
      if (error) throw error
      const row = Array.isArray(data) ? data[0] : data
      setReferralStats(row || null)
    } catch (err) {
      console.error('Failed to load referral stats:', err)
    } finally {
      setReferralLoading(false)
    }
  }

  const fetchLeaderboard = async () => {
    setLeaderboardLoading(true)
    try {
      // Reuses the same get_weekly_quiz_leaderboard() RPC that backs
      // Leaderboard.jsx, so there is exactly one leaderboard
      // implementation, not two. It returns entries with no rank
      // field — rank is the entry's position in the list, same
      // convention Leaderboard.jsx already uses.
      const { data, error } = await supabase.rpc('get_weekly_quiz_leaderboard')
      if (error) throw error
      setLeaderboard(data || [])
    } catch (err) {
      console.error('Failed to load leaderboard:', err)
    } finally {
      setLeaderboardLoading(false)
    }
  }

  useEffect(() => {
    fetchCoins()
    fetchHistory()
    fetchReferralStats()
    fetchLeaderboard()
  }, [])

  const copyToClipboard = async (text, setFlag) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for browsers/contexts where the Clipboard API is
      // unavailable (matches the fix already drafted for
      // ReferralProgress.jsx's Copy button).
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setFlag(true)
    setTimeout(() => setFlag(false), 2000)
  }

  const shareReferral = async (code) => {
    const shareText = `Join me on Sual — an Islamic knowledge app. Use my code ${code} when you sign up.`
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText })
        return
      } catch {
        // user cancelled or share failed — fall through to copy
      }
    }
    copyToClipboard(shareText, setCopiedReferral)
  }

  const progressPct = Math.min(100, Math.round((balance / MILESTONE) * 100))
  const coinsToGo = Math.max(0, MILESTONE - balance)

  return (
    <div className="page-content rewards-page">
      <h1 className="page-title">Rewards</h1>
      <p className="page-subtitle">Earn coins, invite friends, and climb the weekly leaderboard</p>

      <div className="rewards-tabs">
        <button className={`rewards-tab ${tab === 'coins' ? 'active' : ''}`} onClick={() => setTab('coins')}>
          Coins
        </button>
        <button className={`rewards-tab ${tab === 'referrals' ? 'active' : ''}`} onClick={() => setTab('referrals')}>
          Referrals
        </button>
        <button className={`rewards-tab ${tab === 'leaderboard' ? 'active' : ''}`} onClick={() => setTab('leaderboard')}>
          Leaderboard
        </button>
      </div>

      {tab === 'coins' && (
        <div className="rewards-tab-panel">
          <div className="rewards-card rewards-balance-card">
            {coinsLoading ? (
              <p className="rewards-muted">Loading…</p>
            ) : (
              <>
                <div className="rewards-ring-wrap">
                  <ProgressRing value={balance} max={MILESTONE} />
                  <div className="rewards-ring-center">
                    <span className="rewards-ring-value">{balance.toLocaleString()}</span>
                    <span className="rewards-ring-label">coins</span>
                  </div>
                </div>

                {merchCode ? (
                  <div className="rewards-milestone-reached">
                    <p className="rewards-milestone-title">You've earned a merch code</p>
                    <div className="rewards-code-row">
                      <code className="rewards-code">{merchCode}</code>
                      <button className="rewards-btn-ghost" onClick={() => copyToClipboard(merchCode, setCopiedCode)}>
                        {copiedCode ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <p className="rewards-hint">Send this code to the Sual team to redeem your merchandise.</p>
                  </div>
                ) : (
                  <p className="rewards-hint">{coinsToGo.toLocaleString()} coins to your first merch code · {progressPct}% there</p>
                )}
              </>
            )}
          </div>

          <div className="rewards-card">
            <h3 className="rewards-card-title">Ways to earn</h3>
            <ul className="rewards-earn-list">
              <li><span className="rewards-earn-icon">◆</span> 1 coin per question in any quiz you complete</li>
              <li><span className="rewards-earn-icon">◆</span> Up to 200 coins a day from quizzes</li>

            </ul>
          </div>

          <div className="rewards-card">
            <h3 className="rewards-card-title">Recent activity</h3>
            {historyLoading ? (
              <p className="rewards-muted">Loading…</p>
            ) : history.length === 0 ? (
              <p className="rewards-muted">No coin activity yet — take a quiz to get started.</p>
            ) : (
              <div className="rewards-history-list">
                {history.map(h => (
                  <div key={h.id} className="rewards-history-row">
                    <span>
                      {h.reason === 'referral'
                        ? 'Referral bonus'
                        : h.discipline
                          ? `${h.discipline} quiz`
                          : 'Quiz'}
                    </span>
                    <span className="rewards-history-amount">+{h.amount}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {tab === 'referrals' && (
        <div className="rewards-tab-panel">
          <div className="rewards-card">
            {referralLoading ? (
              <p className="rewards-muted">Loading…</p>
            ) : (
              <>
                <p className="rewards-card-title">Your referral code</p>
                <div className="rewards-code-row">
                  <code className="rewards-code">{referralStats?.referral_code || '—'}</code>
                  {referralStats?.referral_code && (
                    <>
                      <button className="rewards-btn-ghost" onClick={() => copyToClipboard(referralStats.referral_code, setCopiedReferral)}>
                        {copiedReferral ? 'Copied' : 'Copy'}
                      </button>
                      <button className="rewards-btn-primary" onClick={() => shareReferral(referralStats.referral_code)}>
                        Share
                      </button>
                    </>
                  )}
                </div>

                <div className="rewards-stats-row">
                  <div className="rewards-stat">
                    <span className="rewards-stat-value">{referralStats?.referred_count ?? 0}</span>
                    <span className="rewards-stat-label">friends joined</span>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="rewards-card">
            <h3 className="rewards-card-title">Free month milestone</h3>
            {referralLoading ? (
              <p className="rewards-muted">Loading…</p>
            ) : referralStats?.free_access_expires_at ? (
              <p className="rewards-body-text">
                You earned a free month of Spaces access from referrals, active until{' '}
                {new Date(referralStats.free_access_expires_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}.
              </p>
            ) : (
              <>
                <div className="rewards-milestone-bar">
                  <div
                    className="rewards-milestone-bar-fill"
                    style={{ width: `${Math.min(100, Math.round(((referralStats?.referred_count ?? 0) / 30) * 100))}%` }}
                  />
                </div>
                <p className="rewards-hint rewards-hint-dark">
                  {referralStats?.referred_count ?? 0} of 30 friends referred — refer 30 to earn a free month of Spaces.
                </p>
              </>
            )}
          </div>

          <div className="rewards-card">
            <h3 className="rewards-card-title">How it works</h3>
            <p className="rewards-body-text">
              Share your code with a friend. When they sign up on Sual using it, it counts toward your 30-referral
              milestone — no limit on how many friends you can refer, and every one still counts even after the
              milestone is reached.
            </p>
          </div>
        </div>
      )}

      {tab === 'leaderboard' && (
        <div className="rewards-tab-panel">
          <div className="rewards-card">
            <div className="rewards-leaderboard-header">
              <h3 className="rewards-card-title">This week</h3>
              <span className="rewards-hint">Resets Monday</span>
            </div>
            {leaderboardLoading ? (
              <p className="rewards-muted">Loading…</p>
            ) : leaderboard.length === 0 ? (
              <p className="rewards-muted">No one with a username has taken a quiz this week yet. Set a username in your Profile and take one to be the first.</p>
            ) : (
              <div className="rewards-leaderboard-list">
                {leaderboard.slice(0, 10).map((row, i) => (
                  <div key={row.user_id} className={`rewards-leaderboard-row ${row.user_id === user?.id ? 'is-me' : ''}`}>
                    <span className="rewards-leaderboard-rank">{i + 1}</span>
                    <span className="rewards-leaderboard-name">{row.username}</span>
                    <span className="rewards-leaderboard-attempts">{row.attempts} attempt{row.attempts !== 1 ? 's' : ''}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}