import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { toHijriString } from '../lib/hijri.js'
import { getPrayerStatus } from '../lib/prayerTimes.js'
import QuickActions from '../components/QuickActions.jsx'
import './Home.css'

const LEVEL_COLOR = {
  beginner:     '#5DCAA5',
  intermediate: '#F0997B',
  advanced:     '#AFA9EC',
}

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

export default function Home({ user }) {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)

  const [history, setHistory] = useState([])
  const [levelData, setLevelData] = useState(null)
  const [fullName, setFullName] = useState(null)
  const [statsLoading, setStatsLoading] = useState(true)

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

  const totalQuizzes = history.length
  const avgScore = totalQuizzes > 0
    ? Math.round(history.reduce((s, r) => s + r.percentage, 0) / totalQuizzes)
    : 0
  const currentLevel = levelData?.current_level || 'beginner'
  const streak = computeQuizStreak(history)
  const firstName = fullName ? fullName.trim().split(/\s+/)[0] : null

  const { nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)

  // A returning user (someone with at least one quiz on record) gets a
  // compact, personalized hero instead of the full first-run marketing
  // banner — the full banner has already done its job of introducing
  // Sual by that point, and taking up less space surfaces Today/Next
  // Prayer/stats sooner on repeat visits.
  const isReturningUser = user && !statsLoading && totalQuizzes > 0

  return (
    <div className="page-content home-page">
      {isReturningUser ? (
        <div className="home-hero home-hero--compact">
          <span className="home-hero-mark home-hero-mark--small arabic">سُؤَال</span>
          <div>
            <p className="home-hero-greeting">
              {getGreeting()}{firstName ? `, ${firstName}` : ''}
            </p>
            <p className="home-hero-nudge">
              {streak > 0
                ? `${streak}-day quiz streak — keep it going.`
                : 'Ready to pick up where you left off?'}
            </p>
          </div>
        </div>
      ) : (
        <div className="home-hero">
          <div className="home-hero-mark">سُؤَال</div>
          <div className="home-hero-content">
            <h1 className="home-hero-title">Sual</h1>
            <p className="home-hero-subtitle">
              Your companion for the Islamic sciences — ask, learn, and test your knowledge
              in Fiqh, Seerah, Arabic, and more.
            </p>
          </div>
        </div>
      )}

      <div className="home-today-strip">
        <div className="home-today-item">
          <span className="home-today-label">Today</span>
          <span className="home-today-value">
            <span className="arabic">{toHijriString(time)}</span>
            <span className="home-today-gregorian">
              {time.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </span>
        </div>
        {nextPrayer && (
          <Link to="/prayer-times" className="home-today-item home-today-item--prayer">
            <span className="home-today-label">Next prayer</span>
            <span className="home-today-value">
              <span className="arabic">{nextPrayer.arabic}</span>
              <span className="home-today-countdown"> in {countdown}</span>
            </span>
          </Link>
        )}
      </div>

      {user && !statsLoading && (
        <div className="home-stats-row">
          <Link to="/dashboard" className="home-stat-card">
            <span className="home-stat-value">{totalQuizzes}</span>
            <span className="home-stat-label">Quizzes taken</span>
          </Link>
          <Link to="/dashboard" className="home-stat-card">
            <span className={`home-stat-value ${totalQuizzes === 0 ? 'home-stat-value--empty' : ''}`}>
              {totalQuizzes > 0 ? `${avgScore}%` : '—'}
            </span>
            <span className="home-stat-label">Average score</span>
          </Link>
          <Link to="/dashboard" className="home-stat-card">
            <span className="home-stat-value" style={{ color: LEVEL_COLOR[currentLevel] }}>
              {currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
            </span>
            <span className="home-stat-label">Level</span>
          </Link>
        </div>
      )}

      <div className="home-divider">
        <span className="home-divider-arabic">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</span>
      </div>

      <QuickActions />
    </div>
  )
}