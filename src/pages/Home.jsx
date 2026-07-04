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

export default function Home({ user }) {
  const [time, setTime] = useState(new Date())
  const [lat, setLat] = useState(6.5244)
  const [lng, setLng] = useState(3.3792)
  const [tzOffset, setTzOffset] = useState(1)

  const [history, setHistory] = useState([])
  const [levelData, setLevelData] = useState(null)
  const [statsLoading, setStatsLoading] = useState(true)

  // Keep the next-prayer countdown live without needing a full clock UI
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
        const [{ data: hist }, { data: lvl }] = await Promise.all([
          supabase
            .from('quiz_history')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false })
            .limit(50),
          supabase
            .from('user_levels')
            .select('*')
            .eq('user_id', user.id)
            .single(),
        ])
        setHistory(hist || [])
        setLevelData(lvl || null)
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

  const { nextPrayer, countdown } = getPrayerStatus(time, lat, lng, tzOffset)

  return (
    <div className="page-content home-page">
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

      {/* Today strip — Hijri date + next prayer, using the shared lib so it
          always agrees with the Calendar and Prayer Times pages */}
      <div className="home-today-strip">
        <div className="home-today-item">
          <span className="home-today-label">Today</span>
          <span className="home-today-value arabic">{toHijriString(time)}</span>
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

      {/* Stats row — mirrors the exact fields Dashboard computes, so this
          never shows a number that disagrees with the Dashboard page */}
      {user && !statsLoading && (
        <div className="home-stats-row">
          <Link to="/dashboard" className="home-stat-card">
            <span className="home-stat-value">{totalQuizzes}</span>
            <span className="home-stat-label">Quizzes taken</span>
          </Link>
          <Link to="/dashboard" className="home-stat-card">
            <span className="home-stat-value">{totalQuizzes > 0 ? `${avgScore}%` : '—'}</span>
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