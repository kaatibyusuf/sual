import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import { DISCIPLINES } from '../data/knowledge.js'
import './Dashboard.css'

const LEVEL_THRESHOLDS = [
  { min: 0,   label: 'Beginner',     arabic: 'مُبْتَدِئ',    color: '#8a9ab0' },
  { min: 20,  label: 'Student',      arabic: 'طَالِب',       color: '#2e7d32' },
  { min: 40,  label: 'Intermediate', arabic: 'مُتَوَسِّط',   color: '#e65100' },
  { min: 60,  label: 'Advanced',     arabic: 'مُتَقَدِّم',   color: '#1565c0' },
  { min: 80,  label: 'Scholar',      arabic: 'عَالِم',       color: '#6a1b9a' },
]

function getLevel(avgScore) {
  let level = LEVEL_THRESHOLDS[0]
  for (const t of LEVEL_THRESHOLDS) {
    if (avgScore >= t.min) level = t
  }
  return level
}

export default function Dashboard({ user }) {
  const [quizHistory, setQuizHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    fetchData()
  }, [user])

  const fetchData = async () => {
    setLoading(true)
    try {
      const { data: qh } = await supabase
        .from('quiz_history')
        .select('*')
        .eq('user_id', user.id)
        .order('taken_at', { ascending: false })
      setQuizHistory(qh || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // Compute stats
  const totalQuizzes = quizHistory.length
  const avgScore = totalQuizzes > 0
    ? Math.round(quizHistory.reduce((a, b) => a + b.percentage, 0) / totalQuizzes)
    : 0
  const bestScore = totalQuizzes > 0
    ? Math.max(...quizHistory.map(q => q.percentage))
    : 0
  const level = getLevel(avgScore)

  // Per discipline stats
  const disciplineStats = DISCIPLINES.map(d => {
    const dQuizzes = quizHistory.filter(q => q.discipline === d.id || q.discipline === 'mixed')
    const dAvg = dQuizzes.length > 0
      ? Math.round(dQuizzes.reduce((a, b) => a + b.percentage, 0) / dQuizzes.length)
      : 0
    return { ...d, quizzes: dQuizzes.length, avg: dAvg }
  })

  const recentQuizzes = quizHistory.slice(0, 10)

  const name = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Student'

  if (loading) {
    return (
      <div className="page-content dashboard-page">
        <div className="dashboard-loading">
          <div className="dashboard-spinner" />
          <p>Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content dashboard-page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">لَوْحَةُ التَّحَكُّم — Track your knowledge journey</p>

      {/* Welcome banner */}
      <div className="dashboard-banner">
        <div className="dashboard-banner-left">
          <p className="dashboard-welcome">مَرْحَبًا،</p>
          <h2 className="dashboard-name">{name}</h2>
          <p className="dashboard-hadith">
            "Whoever treads a path seeking knowledge, Allah will make easy for him a path to Paradise."
          </p>
        </div>
        <div className="dashboard-level-badge" style={{ borderColor: level.color }}>
          <p className="dashboard-level-arabic arabic" style={{ color: level.color }}>{level.arabic}</p>
          <p className="dashboard-level-label" style={{ color: level.color }}>{level.label}</p>
          <p className="dashboard-level-score">{avgScore}% avg</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        {['overview', 'disciplines', 'history'].map(tab => (
          <button
            key={tab}
            className={`dashboard-tab ${activeTab === tab ? 'dashboard-tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' ? 'Overview' : tab === 'disciplines' ? 'Disciplines' : 'Quiz History'}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="dashboard-overview">
          {/* Stats grid */}
          <div className="dashboard-stats">
            <div className="dashboard-stat card">
              <div className="dashboard-stat-num">{totalQuizzes}</div>
              <div className="dashboard-stat-label">Quizzes Taken</div>
            </div>
            <div className="dashboard-stat card">
              <div className="dashboard-stat-num">{avgScore}%</div>
              <div className="dashboard-stat-label">Average Score</div>
            </div>
            <div className="dashboard-stat card">
              <div className="dashboard-stat-num">{bestScore}%</div>
              <div className="dashboard-stat-label">Best Score</div>
            </div>
            <div className="dashboard-stat card">
              <div className="dashboard-stat-num">{disciplineStats.filter(d => d.quizzes > 0).length}</div>
              <div className="dashboard-stat-label">Disciplines Studied</div>
            </div>
          </div>

          {/* Level progress */}
          <div className="dashboard-progress-card card">
            <h3 className="dashboard-section-title">Your Level</h3>
            <div className="dashboard-level-row">
              {LEVEL_THRESHOLDS.map((t, i) => (
                <div
                  key={i}
                  className={`dashboard-level-step ${avgScore >= t.min ? 'dashboard-level-step--active' : ''}`}
                  style={{ '--level-color': t.color }}
                >
                  <div className="dashboard-level-step-dot" style={{ background: avgScore >= t.min ? t.color : '#e8f0f8' }} />
                  <p className="dashboard-level-step-label arabic" style={{ color: avgScore >= t.min ? t.color : '#c8d8e8' }}>{t.arabic}</p>
                </div>
              ))}
            </div>
            <div className="dashboard-progress-bar-wrapper">
              <div className="dashboard-progress-bar" style={{ width: avgScore + '%', background: level.color }} />
            </div>
            <p className="dashboard-progress-note">
              {avgScore < 80
                ? `${80 - avgScore}% more to reach Scholar level`
                : 'You have reached Scholar level — مَاشَاءَ اللَّه'}
            </p>
          </div>

          {/* Recent activity */}
          {recentQuizzes.length > 0 ? (
            <div className="dashboard-recent card">
              <h3 className="dashboard-section-title">Recent Quizzes</h3>
              <div className="dashboard-recent-list">
                {recentQuizzes.slice(0, 5).map((q, i) => (
                  <div key={i} className="dashboard-recent-item">
                    <div>
                      <p className="dashboard-recent-discipline">
                        {q.discipline === 'mixed' ? 'Mixed Quiz' : DISCIPLINES.find(d => d.id === q.discipline)?.name || q.discipline}
                      </p>
                      <p className="dashboard-recent-date">
                        {new Date(q.taken_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="dashboard-recent-score" style={{
                      color: q.percentage >= 70 ? '#1e8449' : q.percentage >= 50 ? '#e65100' : '#c0392b',
                      background: q.percentage >= 70 ? 'rgba(39,174,96,0.1)' : q.percentage >= 50 ? 'rgba(230,81,0,0.1)' : 'rgba(192,57,43,0.1)',
                    }}>
                      {q.score}/{q.total} — {q.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="dashboard-empty card">
              <p className="dashboard-empty-icon">🎯</p>
              <p className="dashboard-empty-text">No quizzes taken yet.</p>
              <p className="dashboard-empty-sub">Start a quiz to track your progress here.</p>
            </div>
          )}
        </div>
      )}

      {/* Disciplines Tab */}
      {activeTab === 'disciplines' && (
        <div className="dashboard-disciplines">
          {disciplineStats.map(d => (
            <div key={d.id} className="dashboard-disc-card card">
              <div className="dashboard-disc-header">
                <span className="dashboard-disc-icon">{d.icon}</span>
                <div>
                  <h3 className="dashboard-disc-name">{d.name}</h3>
                  <p className="dashboard-disc-arabic arabic">{d.arabicName}</p>
                </div>
                <div className="dashboard-disc-stats">
                  <span className="dashboard-disc-quizzes">{d.quizzes} quizzes</span>
                  <span
                    className="dashboard-disc-avg"
                    style={{
                      color: d.avg >= 70 ? '#1e8449' : d.avg >= 50 ? '#e65100' : d.avg > 0 ? '#c0392b' : '#8a9ab0',
                    }}
                  >
                    {d.avg > 0 ? d.avg + '%' : '—'}
                  </span>
                </div>
              </div>
              <div className="dashboard-disc-bar-wrapper">
                <div
                  className="dashboard-disc-bar"
                  style={{
                    width: d.avg + '%',
                    background: d.avg >= 70 ? '#1e8449' : d.avg >= 50 ? '#e65100' : d.avg > 0 ? '#c0392b' : '#e8f0f8',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="dashboard-history">
          {quizHistory.length === 0 ? (
            <div className="dashboard-empty card">
              <p className="dashboard-empty-icon">📋</p>
              <p className="dashboard-empty-text">No quiz history yet.</p>
            </div>
          ) : (
            <div className="dashboard-history-list">
              {quizHistory.map((q, i) => (
                <div key={i} className="dashboard-history-item card">
                  <div className="dashboard-history-left">
                    <p className="dashboard-history-discipline">
                      {q.discipline === 'mixed' ? '🎯 Mixed Quiz' : DISCIPLINES.find(d => d.id === q.discipline)?.icon + ' ' + (DISCIPLINES.find(d => d.id === q.discipline)?.name || q.discipline)}
                    </p>
                    <p className="dashboard-history-date">
                      {new Date(q.taken_at).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                  <div className="dashboard-history-right">
                    <div
                      className="dashboard-history-score"
                      style={{
                        color: q.percentage >= 70 ? '#1e8449' : q.percentage >= 50 ? '#e65100' : '#c0392b',
                        background: q.percentage >= 70 ? 'rgba(39,174,96,0.08)' : q.percentage >= 50 ? 'rgba(230,81,0,0.08)' : 'rgba(192,57,43,0.08)',
                        border: `1px solid ${q.percentage >= 70 ? 'rgba(39,174,96,0.2)' : q.percentage >= 50 ? 'rgba(230,81,0,0.2)' : 'rgba(192,57,43,0.2)'}`,
                      }}
                    >
                      {q.score}/{q.total}
                    </div>
                    <div className="dashboard-history-pct">{q.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}