import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './Leaderboard.css'

// Ranks by quiz ATTEMPTS in the current calendar week only — not
// score or accuracy. The whole leaderboard is "automatic" in the
// sense that matters here: nothing resets it, nothing schedules it.
// get_weekly_quiz_leaderboard() filters quiz_history to this week
// every time it's called, so a new week starting is just the query's
// own date_trunc('week', now()) naturally moving forward — no cron
// job, no snapshot to maintain.
export default function Leaderboard({ user }) {
  const [entries, setEntries] = useState([])
  const [myRank, setMyRank] = useState(null)
  const [myUsername, setMyUsername] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const [{ data: board, error: boardError }, myRankResult, myProfileResult] = await Promise.all([
          supabase.rpc('get_weekly_quiz_leaderboard'),
          user
            ? supabase.rpc('get_my_weekly_quiz_rank')
            : Promise.resolve({ data: null, error: null }),
          user
            ? supabase.from('profiles').select('username').eq('id', user.id).maybeSingle()
            : Promise.resolve({ data: null, error: null }),
        ])
        if (boardError) throw boardError
        if (cancelled) return

        setEntries(board || [])

        const rankRow = Array.isArray(myRankResult.data) ? myRankResult.data[0] : myRankResult.data
        setMyRank(rankRow || null)
        setMyUsername(myProfileResult.data?.username || null)
      } catch (err) {
        console.error('Failed to load weekly leaderboard:', err)
        if (!cancelled) setError('Could not load the leaderboard right now.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [user])

  const iAmInTop = user && entries.some(e => e.user_id === user.id)

  return (
    <div className="page-content leaderboard-page">
      <h1 className="page-title">Weekly Leaderboard</h1>
      <p className="page-subtitle">
        لَوْحَةُ الصَّدَارَة الأُسْبُوعِيَّة — Most quiz attempts this week. Resets every Monday.
      </p>

      {loading ? (
        <div className="leaderboard-empty card"><p>Loading this week's leaderboard…</p></div>
      ) : error ? (
        <div className="leaderboard-empty card"><p>{error}</p></div>
      ) : entries.length === 0 ? (
        <div className="leaderboard-empty card">
          <p>No one with a username has taken a quiz this week yet. Set a username in your Profile and take one to be the first.</p>
        </div>
      ) : (
        <>
          <div className="leaderboard-list">
            {entries.map((e, i) => {
              const rank = i + 1
              const isMe = user && e.user_id === user.id
              return (
                <div
                  key={e.user_id}
                  className={`leaderboard-row card ${isMe ? 'leaderboard-row--me' : ''}`}
                  data-a11y-label={`Rank ${rank}. ${e.username}. ${e.attempts} quiz attempts this week.${isMe ? ' This is you.' : ''}`}
                >
                  <span className={`leaderboard-rank ${rank <= 3 ? `leaderboard-rank--${rank}` : ''}`}>
                    {rank}
                  </span>
                  <span className="leaderboard-name">
                    {e.username}
                    {isMe && <span className="leaderboard-you-tag">You</span>}
                  </span>
                  <span className="leaderboard-attempts">{e.attempts} attempt{e.attempts !== 1 ? 's' : ''}</span>
                </div>
              )
            })}
          </div>

          {user && myRank && !iAmInTop && (
            <div className="leaderboard-myrank card">
              <p>
                Your rank this week: <strong>#{myRank.rank}</strong> with {myRank.attempts} attempt{myRank.attempts !== 1 ? 's' : ''}.
                {!myUsername && ' Set a username in your Profile to appear on the list above with everyone else.'}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}