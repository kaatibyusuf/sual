import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { DISCIPLINES } from '../data/knowledge.js'
import './Dashboard.css'

const LEVEL_ORDER = ['beginner', 'intermediate', 'advanced']

const LEVEL_COLOR = {
  beginner:     '#2e7d32',
  intermediate: '#e65100',
  advanced:     '#6a1b9a',
}

export default function Dashboard({ user }) {
  const [history,   setHistory]   = useState([])
  const [levelData, setLevelData] = useState(null)
  const [loading,   setLoading]   = useState(true)

  useEffect(() => {
    if (!user) return
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
        console.error('Dashboard load error:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user])

  const totalQuizzes = history.length
  const avgScore     = totalQuizzes > 0
    ? Math.round(history.reduce((s, r) => s + r.percentage, 0) / totalQuizzes)
    : 0
  const bestScore    = totalQuizzes > 0
    ? Math.max(...history.map(r => r.percentage))
    : 0
  const currentLevel  = levelData?.current_level || 'beginner'
  const levelIndex    = LEVEL_ORDER.indexOf(currentLevel)
  const levelProgress = totalQuizzes > 0
    ? Math.min(Math.round((avgScore / 70) * 100), 100)
    : 0

  const byDiscipline = DISCIPLINES.map(d => {
    const entries = history.filter(r => r.discipline === d.id)
    const avg = entries.length > 0
      ? Math.round(entries.reduce((s, r) => s + r.percentage, 0) / entries.length)
      : null
    return { ...d, quizzes: entries.length, avg }
  })

  const recent = history.slice(0, 5)

  if (loading) {
    return (
      <div className="page-content">
        <div style={{
          textAlign: 'center',
          padding: '60px 0',
          color: '#094570',
          fontFamily: 'Amiri, serif',
          fontSize: '1.5rem',
        }}>
          سُؤَال
        </div>
      </div>
    )
  }

  return (
    <div className="page-content dashboard-page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">لَوْحَةُ المُتَابَعَة — Your learning progress</p>

      {/* ── Level card ─────────────────────────────────────── */}
      <div className="dash-level-card card">
        <div className="dash-level-header">
          <div>
            <p className="dash-label">Current Level</p>
            <p className="dash-level-name" style={{ color: LEVEL_COLOR[currentLevel] }}>
              {currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
            </p>
          </div>
          <div className="dash-level-dots">
            {LEVEL_ORDER.map((lv, i) => (
              <div
                key={lv}
                className={`dash-level-dot${i <= levelIndex ? ' dash-level-dot--active' : ''}`}
                style={i <= levelIndex ? { background: LEVEL_COLOR[lv] } : {}}
                title={lv}
              />
            ))}
          </div>
        </div>

        {levelIndex < LEVEL_ORDER.length - 1 && (
          <>
            <p className="dash-unlock-hint">
              Keep your quiz average above 70% to unlock{' '}
              <strong>
                {LEVEL_ORDER[levelIndex + 1].charAt(0).toUpperCase() + LEVEL_ORDER[levelIndex + 1].slice(1)}
              </strong>
            </p>
            <div className="dash-progress-bar">
              <div
                className="dash-progress-fill"
                style={{
                  width: `${levelProgress}%`,
                  background: LEVEL_COLOR[currentLevel],
                }}
              />
            </div>
            <p className="dash-progress-label">
              Average: <strong>{avgScore}%</strong> / 70% needed
            </p>
          </>
        )}

        {levelIndex === LEVEL_ORDER.length - 1 && (
          <p className="dash-unlock-hint" style={{ color: '#6a1b9a' }}>
            🎓 Advanced level unlocked — all content available
          </p>
        )}
      </div>

      {/* ── Stats row ──────────────────────────────────────── */}
      <div className="dash-stats-row">
        <div className="dash-stat-card card">
          <p className="dash-stat-value">{totalQuizzes}</p>
          <p className="dash-stat-label">Quizzes Taken</p>
        </div>
        <div className="dash-stat-card card">
          <p
            className="dash-stat-value"
            style={{ color: avgScore >= 70 ? '#2e7d32' : '#c0392b' }}
          >
            {totalQuizzes > 0 ? `${avgScore}%` : '—'}
          </p>
          <p className="dash-stat-label">Average Score</p>
        </div>
        <div className="dash-stat-card card">
          <p className="dash-stat-value" style={{ color: '#094570' }}>
            {totalQuizzes > 0 ? `${bestScore}%` : '—'}
          </p>
          <p className="dash-stat-label">Best Score</p>
        </div>
      </div>

      {/* ── Discipline breakdown ────────────────────────────── */}
      <div className="dash-section">
        <h2 className="dash-section-title">By Discipline</h2>
        <div className="dash-discipline-list">
          {byDiscipline.map(d => (
            <Link
              key={d.id}
              to={`/discipline/${d.id}`}
              className="dash-disc-row card"
            >
              <span className="dash-disc-icon">{d.icon}</span>
              <div className="dash-disc-info">
                <span className="dash-disc-name">{d.name}</span>
                <span className="dash-disc-arabic arabic">{d.arabicName}</span>
              </div>
              <div className="dash-disc-stats">
                {d.avg !== null ? (
                  <>
                    <span
                      className="dash-disc-avg"
                      style={{ color: d.avg >= 70 ? '#2e7d32' : '#c0392b' }}
                    >
                      {d.avg}%
                    </span>
                    <span className="dash-disc-count">
                      {d.quizzes} quiz{d.quizzes !== 1 ? 'zes' : ''}
                    </span>
                  </>
                ) : (
                  <span className="dash-disc-none">Not started</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Recent activity ─────────────────────────────────── */}
      <div className="dash-section">
        <h2 className="dash-section-title">Recent Quizzes</h2>
        {recent.length === 0 ? (
          <div className="card" style={{ padding: '24px', textAlign: 'center', color: '#666' }}>
            <p style={{ margin: 0 }}>No quizzes yet.</p>
            <Link
              to="/quiz"
              className="btn btn-primary"
              style={{ marginTop: 14, display: 'inline-block' }}
            >
              Take your first quiz →
            </Link>
          </div>
        ) : (
          <div className="dash-recent-list">
            {recent.map((r, i) => {
              const disc = DISCIPLINES.find(d => d.id === r.discipline)
              const date = new Date(r.created_at).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short',
              })
              return (
                <div key={i} className="dash-recent-row card">
                  <span className="dash-recent-icon">{disc?.icon || '🎲'}</span>
                  <div className="dash-recent-info">
                    <span className="dash-recent-name">{disc?.name || 'Mixed'}</span>
                    <span className="dash-recent-date">{date}</span>
                  </div>
                  <div className="dash-recent-score-wrap">
                    <span
                      className="dash-recent-score"
                      style={{ color: r.percentage >= 70 ? '#2e7d32' : '#c0392b' }}
                    >
                      {r.score}/{r.total}
                    </span>
                    <span
                      className="dash-recent-pct"
                      style={{ color: r.percentage >= 70 ? '#2e7d32' : '#c0392b' }}
                    >
                      {r.percentage}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="dash-cta">
        <Link to="/quiz" className="btn btn-primary">Take a Quiz →</Link>
        <Link to="/"     className="btn btn-ghost">Browse Disciplines</Link>
      </div>
    </div>
  )
}