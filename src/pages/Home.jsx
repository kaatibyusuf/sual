import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus } from '../lib/prayerTimes.js'
import { STORIES } from '../data/stories.js'
import { DISCIPLINES } from '../data/knowledge.js'
import SpacesCTA from '../components/SpacesCTA.jsx'
import './Home.css'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 5) return 'Good night'
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  if (hour < 21) return 'Good evening'
  return 'Good night'
}

// Counts consecutive days (ending today or yesterday) with at least
// one quiz taken. Based only on quiz_history — a user who's active in
// other ways (reading, LMS) but hasn't quizzed recently won't show a
// streak here. Good enough for a light nudge, not a full activity log.
function computeQuizStreak(history) {
  if (history.length === 0) return 0
  const days = [...new Set(history.map(r => new Date(r.taken_at).toDateString()))]
    .map(d => new Date(d))
    .sort((a, b) => b - a)

  const today = new Date(); today.setHours(0, 0, 0, 0)
  const mostRecent = days[0]
  const dayDiff = Math.round((today - mostRecent) / 86400000)
  if (dayDiff > 1) return 0 // streak broken — most recent quiz wasn't today or yesterday

  let streak = 1
  for (let i = 1; i < days.length; i++) {
    const diff = Math.round((days[i - 1] - days[i]) / 86400000)
    if (diff === 1) streak++
    else break
  }
  return streak
}

function disciplineName(id) {
  if (id === 'mixed') return 'All Disciplines (Mixed)'
  const d = DISCIPLINES.find(x => x.id === id)
  return d?.name || id
}

// Icons — paths reused verbatim from BottomNav's icon set so a tile
// tapped here and the matching tab/entry elsewhere always draw the
// exact same glyph.
const ICONS = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  disciplines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  quiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  flashcards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="10" rx="2" transform="rotate(-6 12 12)" />
      <rect x="6" y="8" width="14" height="10" rx="2" />
    </svg>
  ),
  stories: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2V4z" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="14" y2="9" />
      <line x1="9" y1="13" x2="14" y2="13" />
    </svg>
  ),
  spaces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  ),
  prayerTimes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-8a8 8 0 0 1 16 0v8" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="8" y1="21" x2="8" y2="15" />
      <line x1="16" y1="21" x2="16" y2="15" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  arrowUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="6 11 12 5 18 11" />
    </svg>
  ),
}

// The tiles below the hero — same destinations as before, now
// arranged as a grid rather than a table-of-contents list.
const SERVICE_TILES = [
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/disciplines', icon: 'disciplines', label: 'Disciplines' },
  { to: '/quiz', icon: 'quiz', label: 'Quiz' },
  { to: '/flashcards', icon: 'flashcards', label: 'Flashcards' },
  { to: '/stories', icon: 'stories', label: 'Stories' },
  { to: '/spaces', icon: 'spaces', label: 'Spaces' },
  { to: '/prayer-times', icon: 'prayerTimes', label: 'Prayer Times' },
  { to: '/calendar', icon: 'calendar', label: 'Calendar' },
]

export default function Home({ user }) {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)

  const [history, setHistory] = useState([])
  const [levelData, setLevelData] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [statsLoading, setStatsLoading] = useState(true)

  // "Continue where you left off" — Stories only for now, since that's
  // the only content type with reading-progress tracking built. Slots
  // in cleanly for hadith collections later once similar tracking
  // exists for those (see story_reading_progress for the pattern).
  const [continueStories, setContinueStories] = useState([])
  const [continueLoading, setContinueLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLat(pos.coords.latitude)
          setLng(pos.coords.longitude)
          setTzOffset(-new Date().getTimezoneOffset() / 60)
        },
        () => {}
      )
    }
  }, [])

  useEffect(() => {
    if (!user) { setStatsLoading(false); return }
    const load = async () => {
      try {
        const [{ data: hist }, { data: lvl }, { data: profile }] = await Promise.all([
          supabase
            .from('quiz_history')
            .select('*')
            .eq('user_id', user.id)
            .order('taken_at', { ascending: false })
            .limit(50),
          supabase
            .from('user_levels')
            .select('*')
            .eq('user_id', user.id)
            .single(),
          supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .maybeSingle(),
        ])
        setHistory(hist || [])
        setLevelData(lvl || null)
        setFullName(profile?.full_name || null)
      } catch (err) {
        console.error('Home stats load error:', err)
      } finally {
        setStatsLoading(false)
      }
    }
    load()
  }, [user])

  useEffect(() => {
    if (!user) { setContinueLoading(false); return }
    const loadContinue = async () => {
      try {
        const { data, error } = await supabase
          .from('story_reading_progress')
          .select('story_id, progress_percent, completed, updated_at')
          .eq('user_id', user.id)
          .eq('completed', false)
          .gt('progress_percent', 0)
          .order('updated_at', { ascending: false })
          .limit(3)
        if (error) throw error
        const withStoryData = (data || [])
          .map(row => ({ ...row, story: STORIES.find(s => s.id === row.story_id) }))
          .filter(row => row.story) // drop rows whose story no longer exists in the data file
        setContinueStories(withStoryData)
      } catch (err) {
        console.error('Failed to load continue-reading stories:', err)
        setContinueStories([])
      } finally {
        setContinueLoading(false)
      }
    }
    loadContinue()
  }, [user])

  const totalQuizzes = history.length
  const avgScore = totalQuizzes > 0
    ? Math.round(history.reduce((s, r) => s + r.percentage, 0) / totalQuizzes)
    : 0
  const currentLevel = levelData?.current_level || 'beginner'
  const streak = computeQuizStreak(history)
  const firstName = fullName ? fullName.trim().split(/\s+/)[0] : null

  const { nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)
  const primaryContinue = continueStories[0] || null
  const recentQuizzes = history.slice(0, 4)

  return (
    <div className="page-content home-page">
      {/* ── Hero: standing, at a glance — the one card everything
          else on this page sits beneath, the way a balance card
          anchors a banking app. ── */}
      <div className="hm-hero">
        <p className="hm-hero-bismillah arabic">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</p>
        <div className="hm-hero-top">
          <span className="hm-hero-greeting">{getGreeting()}{firstName ? `, ${firstName}` : ''}</span>
          {streak > 0 && <span className="hm-hero-streak">{ICONS.flame} {streak}-day streak</span>}
        </div>

        <p className="hm-hero-value">
          {statsLoading ? '—' : currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
        </p>
        <p className="hm-hero-sub">
          {statsLoading
            ? 'Loading your standing…'
            : totalQuizzes > 0
              ? `${totalQuizzes} ${totalQuizzes === 1 ? 'quiz' : 'quizzes'} taken · ${avgScore}% average`
              : 'No quizzes taken yet'}
        </p>

        <div className="hm-hero-actions">
          <Link to="/quiz" className="hm-hero-btn hm-hero-btn--fill">{ICONS.quiz} Take a Quiz</Link>
          <Link to="/dashboard" className="hm-hero-btn">{ICONS.dashboard} View Progress</Link>
        </div>
      </div>

      {/* ── Explore: the same destinations as before, as a tile
          grid. ── */}
      <div className="hm-section">
        <div className="hm-section-head">
          <p className="hm-section-title">Explore <span className="arabic">اِسْتَكْشِف</span></p>
        </div>
        <div className="hm-tiles">
          {SERVICE_TILES.map(t => (
            <Link key={t.to} to={t.to} className="hm-tile">
              <span className="hm-tile-icon">{ICONS[t.icon]}</span>
              <span className="hm-tile-label">{t.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Standing: today's date/prayer, and where you left off,
          side by side. ── */}
      <div className="hm-section">
        <div className="hm-section-head">
          <p className="hm-section-title">Today <span className="arabic">اليَوْم</span></p>
        </div>
        <div className="hm-standing-grid">
          <div className="hm-standing-card">
            <span className="hm-standing-icon hm-standing-icon--gold">{ICONS.moon}</span>
            <p className="hm-standing-label">Hijri Date</p>
            <p className="hm-standing-value">{toHijriString(time)}</p>
            {nextPrayer && <p className="hm-standing-tag">{nextPrayer.arabic} in {countdown}</p>}
          </div>

          {!continueLoading && primaryContinue ? (
            <Link to="/stories" className="hm-standing-card hm-standing-card--link">
              <span className="hm-standing-icon hm-standing-icon--emerald">{ICONS.book}</span>
              <p className="hm-standing-label">Continue Reading</p>
              <p className="hm-standing-value">{primaryContinue.story.name}</p>
              <p className="hm-standing-tag hm-standing-tag--emerald">{primaryContinue.progress_percent}% done</p>
            </Link>
          ) : (
            <Link to="/stories" className="hm-standing-card hm-standing-card--link">
              <span className="hm-standing-icon hm-standing-icon--emerald">{ICONS.book}</span>
              <p className="hm-standing-label">Stories of the Salaf</p>
              <p className="hm-standing-value">Start reading</p>
              <p className="hm-standing-tag hm-standing-tag--emerald">The Prophets &amp; the Companions</p>
            </Link>
          )}
        </div>
      </div>

      {/* ── Recent activity: your last few quiz attempts. ── */}
      {recentQuizzes.length > 0 && (
        <div className="hm-section">
          <div className="hm-section-head">
            <p className="hm-section-title">Recent Activity</p>
            <Link to="/dashboard" className="hm-section-link">View All</Link>
          </div>
          <div className="hm-activity-card">
            {recentQuizzes.map((q, i) => {
              const passed = q.percentage >= 70
              const when = new Date(q.taken_at)
              return (
                <div key={i} className="hm-activity-row">
                  <span className={`hm-activity-badge ${passed ? 'hm-activity-badge--pass' : 'hm-activity-badge--low'}`}>
                    {ICONS.quiz}
                  </span>
                  <span className="hm-activity-text">
                    <span className="hm-activity-name">{disciplineName(q.discipline)}</span>
                    <span className="hm-activity-date">
                      {when.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}, {when.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </span>
                  <span className={`hm-activity-score ${passed ? 'hm-activity-score--pass' : 'hm-activity-score--low'}`}>
                    {q.score}/{q.total}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <SpacesCTA user={user} variant="default" />
    </div>
  )
}