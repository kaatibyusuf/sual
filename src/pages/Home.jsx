import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus } from '../lib/prayerTimes.js'
import { STORIES } from '../data/stories.js'
import SpacesCTA from '../components/SpacesCTA.jsx'
import QuickActions from '../components/QuickActions.jsx'
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

// ── Swipeable hero card carousel ──────────────────────────────
function HeroCardCarousel({ cards }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.firstChild?.offsetWidth || 1
    const gap = 12
    const index = Math.round(track.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(index, cards.length - 1))
  }, [cards.length])

  const goToCard = (i) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.firstChild?.offsetWidth || 1
    const gap = 12
    track.scrollTo({ left: i * (cardWidth + gap), behavior: 'smooth' })
  }

  if (cards.length === 0) return null

  return (
    <div className="home-carousel">
      <div className="home-carousel-track" ref={trackRef} onScroll={handleScroll}>
        {cards.map((c) => (
          <div key={c.key} className={`home-account-card home-account-card--${c.tone || 'navy'}`}>
            {c.badge && <span className="home-account-badge">{c.badge}</span>}
            <p className="home-account-label">{c.label}</p>
            <p className="home-account-value">{c.value}</p>
            {c.sub && <p className="home-account-sub">{c.sub}</p>}
            <div className="home-account-actions">
              {c.actions.map((a, j) => (
                <Link
                  key={j}
                  to={a.to}
                  className={`home-account-btn ${j === 0 ? 'home-account-btn--primary' : ''}`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {cards.length > 1 && (
        <div className="home-carousel-dots">
          {cards.map((c, i) => (
            <button
              key={c.key}
              className={`home-carousel-dot ${i === activeIndex ? 'home-carousel-dot--active' : ''}`}
              onClick={() => goToCard(i)}
              aria-label={`Go to ${c.label}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

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

  // Everyone — brand new or long-time — sees the same carousel-first
  // homepage. A new user with zero quizzes just sees "Beginner" and
  // "0 quizzes taken" on the progress card instead of a separate
  // introductory banner; the carousel itself still tells them what's
  // here (View Progress, Take a Quiz, Prayer Times, etc.) without
  // needing a dedicated "what is Sual" pitch first.
  const heroCards = [
    {
      key: 'progress',
      tone: 'navy',
      badge: streak > 0 ? `${streak}-day streak` : 'Welcome',
      label: getGreeting() + (firstName ? `, ${firstName}` : ''),
      value: statsLoading ? '—' : currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1),
      sub: statsLoading ? '' : `${totalQuizzes} quizzes taken · ${totalQuizzes > 0 ? `${avgScore}% average` : 'no scores yet'}`,
      actions: [
        { to: '/dashboard', label: 'View Progress' },
        { to: '/quiz', label: 'Take a Quiz' },
      ],
    },
    {
      key: 'today',
      tone: 'gold',
      badge: nextPrayer ? `${nextPrayer.arabic} in ${countdown}` : null,
      label: 'Today',
      value: toHijriString(time),
      sub: time.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      actions: [
        { to: '/prayer-times', label: 'Prayer Times' },
        { to: '/calendar', label: 'Calendar' },
      ],
    },
    ...(continueStories.length > 0 ? [{
      key: 'continue',
      tone: 'emerald',
      badge: `${continueStories[0].progress_percent}% done`,
      label: 'Continue Reading',
      value: continueStories[0].story.name,
      sub: continueStories[0].story.title,
      actions: [
        { to: '/stories', label: 'Continue' },
      ],
    }] : []),
  ]

  return (
    <div className="page-content home-page">
      <HeroCardCarousel cards={heroCards} />

      {!continueLoading && continueStories.length > 1 && (
        <div className="home-continue">
          <p className="home-section-label">More to Continue</p>
          <div className="home-continue-list">
            {continueStories.slice(1).map(row => (
              <Link key={row.story_id} to="/stories" className="home-continue-card">
                <span className="home-continue-icon">{row.story.image}</span>
                <div className="home-continue-text">
                  <span className="home-continue-name">{row.story.name}</span>
                  <span className="home-continue-title">{row.story.title}</span>
                </div>
                <div className="home-continue-progress">
                  <div className="home-continue-track">
                    <div className="home-continue-fill" style={{ width: `${row.progress_percent}%` }} />
                  </div>
                  <span className="home-continue-percent">{row.progress_percent}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="home-divider">
        <span className="home-divider-arabic">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</span>
      </div>

      <QuickActions />

      <SpacesCTA user={user} variant="default" />
    </div>
  )
}