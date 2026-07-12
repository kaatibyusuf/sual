import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './NotificationBell.css'

const POLL_INTERVAL_MS = 45000
const PREVIEW_LIMIT = 5

export default function NotificationBell({ user }) {
  const [unreadCount, setUnreadCount] = useState(0)
  const [preview,     setPreview]     = useState([])
  const [open,        setOpen]        = useState(false)
  const [lastSeenAt,  setLastSeenAt]  = useState(null)
  const [loading,     setLoading]     = useState(false)

  // First time we ever see this user, baseline them to "now" rather
  // than showing every historical post as unread.
  const ensureActivityRow = useCallback(async () => {
    const { data } = await supabase
      .from('user_spaces_activity')
      .select('last_seen_at')
      .eq('user_id', user.id)
      .maybeSingle()

    if (data?.last_seen_at) return data.last_seen_at

    const now = new Date().toISOString()
    await supabase.from('user_spaces_activity').upsert({ user_id: user.id, last_seen_at: now })
    return now
  }, [user])

  const refreshUnread = useCallback(async () => {
    if (!user) return
    const seen = await ensureActivityRow()
    setLastSeenAt(seen)
    const { count } = await supabase
      .from('spaces_posts')
      .select('id', { count: 'exact', head: true })
      .gt('created_at', seen)
      .neq('user_id', user.id) // don't notify people of their own post
    setUnreadCount(count || 0)
  }, [user, ensureActivityRow])

  useEffect(() => {
    if (!user) return
    refreshUnread()
    const interval = setInterval(refreshUnread, POLL_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [user, refreshUnread])

  const togglePanel = async () => {
    const willOpen = !open
    setOpen(willOpen)
    if (!willOpen) return

    if (unreadCount === 0) {
      setPreview([])
      return
    }

    setLoading(true)
    const { data } = await supabase
      .from('spaces_posts')
      .select('id, title, category, created_at, user_id')
      .gt('created_at', lastSeenAt)
      .neq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(PREVIEW_LIMIT)
    setPreview(data || [])
    setLoading(false)

    // Opening the panel counts as catching up, same as the app's
    // existing "new since last visit" convention on the Spaces page.
    const now = new Date().toISOString()
    await supabase.from('user_spaces_activity').upsert({ user_id: user.id, last_seen_at: now })
    setLastSeenAt(now)
    setUnreadCount(0)
  }

  if (!user) return null

  return (
    <div className="notif-bell-wrapper">
      <button className="notif-bell-btn" onClick={togglePanel} aria-label="Spaces notifications">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span className="notif-bell-badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
        )}
      </button>

      {open && (
        <div className="notif-bell-panel">
          <p className="notif-bell-panel-title">New in Spaces</p>
          {loading ? (
            <p className="notif-bell-empty">Loading…</p>
          ) : preview.length === 0 ? (
            <p className="notif-bell-empty">You're all caught up.</p>
          ) : (
            preview.map(p => (
              <Link
                key={p.id}
                to={`/spaces?post=${p.id}`}
                className="notif-bell-item"
                onClick={() => setOpen(false)}
              >
                <span className="notif-bell-item-cat">{p.category}</span>
                <span className="notif-bell-item-title">{p.title}</span>
              </Link>
            ))
          )}
          <Link to="/spaces" className="notif-bell-viewall" onClick={() => setOpen(false)}>
            View all in Spaces →
          </Link>
        </div>
      )}
    </div>
  )
}