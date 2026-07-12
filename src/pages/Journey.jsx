import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { DISCIPLINES } from '../data/knowledge.js'
import { COLLECTIONS } from '../data/collections.js'
import { getAllHifdhProgress } from '../lib/hifdhProgress.js'
import { isDue } from '../lib/spacedRepetition.js'
import './Journey.css'

// Confirmed against Quiz.jsx: quiz_history has user_id, discipline,
// score, total, percentage, taken_at. There is no level column, and
// percentage is already computed on insert, so it's read directly
// rather than recomputed from score/total.
async function loadQuizHistory(userId) {
  const { data, error } = await supabase
    .from('quiz_history')
    .select('discipline, score, total, percentage, taken_at')
    .eq('user_id', userId)
    .order('taken_at', { ascending: false })
  if (error) throw error
  return data || []
}

export default function Journey({ user }) {
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [quizHistory, setQuizHistory] = useState([])
  const [userLevel, setUserLevel] = useState(null)
  const [hifdhByCollection, setHifdhByCollection] = useState({})

  useEffect(() => {
    if (!user) return
    let cancelled = false

    async function load() {
      setLoading(true)
      setLoadError(false)
      try {
        const [quizzes, levelRow, hifdh] = await Promise.all([
          loadQuizHistory(user.id).catch(err => { console.error('quiz_history load failed:', err); setLoadError(true); return [] }),
          supabase.from('user_levels').select('current_level').eq('user_id', user.id).single()
            .then(r => r.data).catch(() => null),
          getAllHifdhProgress(user),
        ])
        if (cancelled) return
        setQuizHistory(quizzes)
        setUserLevel(levelRow?.current_level || null)
        setHifdhByCollection(hifdh)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [user])

  // ── Milestones ──────────────────────────────────────────────
  const totalQuizzes = quizHistory.length
  const overallAverage = useMemo(() => {
    if (quizHistory.length === 0) return null
    const avg = quizHistory.reduce((sum, q) => sum + (q.percentage || 0), 0) / quizHistory.length
    return Math.round(avg)
  }, [quizHistory])

  const hifdhMilestones = useMemo(() => {
    return COLLECTIONS.map(c => {
      const p = hifdhByCollection[c.id] || {}
      const strong = c.items.filter(it => (p[it.key]?.box ?? 0) >= 3).length
      const due = c.items.filter(it => isDue(p[it.key])).length
      return { id: c.id, title: c.title, arabicTitle: c.arabicTitle, total: c.total, strong, due }
    })
  }, [hifdhByCollection])

  const totalHifdhDue = hifdhMilestones.reduce((sum, c) => sum + c.due, 0)
  const totalHifdhStrong = hifdhMilestones.reduce((sum, c) => sum + c.strong, 0)

  // ── Analytics / strengths & weaknesses, by discipline ───────
  const disciplineBreakdown = useMemo(() => {
    const byDiscipline = {}
    quizHistory.forEach(q => {
      if (!q.discipline) return
      if (!byDiscipline[q.discipline]) byDiscipline[q.discipline] = { attempts: 0, pctSum: 0 }
      byDiscipline[q.discipline].attempts += 1
      byDiscipline[q.discipline].pctSum += q.percentage || 0
    })
    return Object.entries(byDiscipline).map(([id, stats]) => {
      const disc = DISCIPLINES.find(d => d.id === id)
      const name = id === 'mixed' ? 'All Disciplines (Mixed)' : (disc?.name || id)
      return {
        id,
        name,
        attempts: stats.attempts,
        pct: Math.round(stats.pctSum / stats.attempts),
      }
    }).sort((a, b) => a.pct - b.pct) // weakest first
  }, [quizHistory])

  const weakest = disciplineBreakdown.length > 0 ? disciplineBreakdown[0] : null
  const strongest = disciplineBreakdown.length > 0 ? disciplineBreakdown[disciplineBreakdown.length - 1] : null
  const untried = DISCIPLINES.filter(d => !disciplineBreakdown.some(b => b.id === d.id))

  // ── Recommendations, simple rule-based ordering ─────────────
  const recommendations = useMemo(() => {
    const recs = []
    if (totalHifdhDue > 0) {
      recs.push({
        key: 'hifdh-due',
        text: `${totalHifdhDue} hifdh review${totalHifdhDue !== 1 ? 's' : ''} waiting across your collections.`,
        to: '/hifdh',
        cta: 'Review now',
      })
    }
    if (weakest && weakest.pct < 70) {
      recs.push({
        key: 'weak-discipline',
        text: `${weakest.name} is your weakest area at ${weakest.pct}% average. Another quiz would help.`,
        to: `/quiz?discipline=${weakest.id}`,
        cta: `Quiz ${weakest.name}`,
      })
    }
    if (untried.length > 0) {
      const next = untried[0]
      recs.push({
        key: 'untried-discipline',
        text: `You haven't started ${next.name} yet.`,
        to: `/discipline/${next.id}`,
        cta: `Start ${next.name}`,
      })
    }
    if (recs.length === 0) {
      recs.push({
        key: 'all-clear',
        text: 'Nothing urgent right now — everything is either strong or resting. Good position to be in.',
        to: '/disciplines',
        cta: 'Keep exploring',
      })
    }
    return recs.slice(0, 3)
  }, [totalHifdhDue, weakest, untried])

  if (!user) return null

  return (
    <div className="page-content journey-page">
      <h1 className="page-title">Journey</h1>
      <p className="page-subtitle">مَسِيرَة — Where you stand, and what's next</p>

      {loading ? (
        <div className="journey-card journey-loading"><p>Loading your journey…</p></div>
      ) : (
        <>
          {loadError && (
            <div className="journey-card journey-warning">
              <p>Quiz analytics couldn't be loaded right now — milestones and Hifdh data below are still accurate.</p>
            </div>
          )}

          {/* Milestones */}
          <section className="journey-section">
            <h2 className="journey-section-title">Milestones</h2>
            <div className="journey-stats-row">
              <div className="journey-stat card">
                <span className="journey-stat-value">{totalQuizzes}</span>
                <span className="journey-stat-label">Quizzes taken</span>
              </div>
              <div className="journey-stat card">
                <span className="journey-stat-value">{overallAverage !== null ? `${overallAverage}%` : '—'}</span>
                <span className="journey-stat-label">Overall average</span>
              </div>
              <div className="journey-stat card">
                <span className="journey-stat-value journey-stat-value--level">{userLevel || '—'}</span>
                <span className="journey-stat-label">Current level</span>
              </div>
              <div className="journey-stat card">
                <span className="journey-stat-value" style={{ color: '#2e7d32' }}>{totalHifdhStrong}</span>
                <span className="journey-stat-label">Hifdh items strong</span>
              </div>
            </div>
          </section>

          {/* Hifdh milestones per collection */}
          <section className="journey-section">
            <h2 className="journey-section-title">Hifdh Collections</h2>
            <div className="journey-hifdh-grid">
              {hifdhMilestones.map(c => (
                <Link key={c.id} to="/hifdh" className="journey-hifdh-card card">
                  <p className="journey-hifdh-title">{c.title}</p>
                  <p className="journey-hifdh-arabic arabic">{c.arabicTitle}</p>
                  <p className="journey-hifdh-stats">
                    {c.strong}/{c.total} strong
                    {c.due > 0 && <span className="journey-hifdh-due"> · {c.due} due</span>}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Strengths & weaknesses */}
          <section className="journey-section">
            <h2 className="journey-section-title">Strengths &amp; Weaknesses</h2>
            {disciplineBreakdown.length === 0 ? (
              <div className="journey-card">
                <p>No quizzes taken yet. Once you do, this section will show where you're strong and where to focus.</p>
              </div>
            ) : (
              <>
                {strongest && strongest.id !== weakest?.id && (
                  <p className="journey-strongest-note">
                    Strongest: <strong>{strongest.name}</strong> at {strongest.pct}%
                  </p>
                )}
                <div className="journey-breakdown">
                  {disciplineBreakdown.map(d => (
                    <div key={d.id} className="journey-breakdown-row">
                      <span className="journey-breakdown-name">{d.name}</span>
                      <div className="journey-breakdown-bar-track">
                        <div
                          className="journey-breakdown-bar-fill"
                          style={{
                            width: `${d.pct}%`,
                            background: d.pct >= 70 ? '#2e7d32' : '#e65100',
                          }}
                        />
                      </div>
                      <span className="journey-breakdown-pct">{d.pct}%</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Recommendations */}
          <section className="journey-section">
            <h2 className="journey-section-title">Recommended Next</h2>
            <div className="journey-recs">
              {recommendations.map(rec => (
                <div key={rec.key} className="journey-rec card">
                  <p className="journey-rec-text">{rec.text}</p>
                  <Link to={rec.to} className="btn btn-primary journey-rec-btn">{rec.cta} →</Link>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  )
}