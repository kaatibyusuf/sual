import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './FeedbackBoard.css'

const STATUS_LABELS = {
  new: 'New',
  triaged: 'Under Review',
  in_progress: 'In Progress',
  fixed: 'Live',
  wont_fix: "Won't Fix",
  duplicate: 'Duplicate',
}

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'bug', label: 'Bugs' },
  { key: 'feature', label: 'Features' },
]

export default function FeedbackBoard() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error } = await supabase.rpc('get_public_feedback_board')
        if (error) throw error
        if (!cancelled) setItems(data || [])
      } catch (err) {
        console.error('Failed to load feedback board:', err)
        if (!cancelled) setError('Could not load the feedback board right now.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const filtered = filter === 'all' ? items : items.filter(i => i.type === filter)

  return (
    <div className="page-content feedback-board-page">
      <h1 className="page-title">Sual Feedback</h1>
      <p className="page-subtitle">
        سُؤَال فِيدْبَاك — Every bug and feature request the community has sent us, and where it stands.
      </p>

      <div className="feedback-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`feedback-filter-btn ${filter === f.key ? 'feedback-filter-btn--active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="feedback-empty card"><p>Loading…</p></div>
      ) : error ? (
        <div className="feedback-empty card"><p>{error}</p></div>
      ) : filtered.length === 0 ? (
        <div className="feedback-empty card"><p>Nothing here yet.</p></div>
      ) : (
        <div className="feedback-list">
          {filtered.map(item => (
            <div
              key={item.id}
              className="feedback-item card"
              data-a11y-label={`SF-${item.id}. ${item.type}. Status: ${STATUS_LABELS[item.status] || item.status}. ${item.public_title}. ${item.public_description}`}
            >
              <div className="feedback-item-top">
                <span className="feedback-ticket">SF-{item.id}</span>
                <span className={`feedback-type-badge feedback-type-badge--${item.type}`}>
                  {item.type === 'bug' ? 'Bug' : 'Feature'}
                </span>
                <span className={`feedback-status-badge feedback-status-badge--${item.status}`}>
                  {STATUS_LABELS[item.status] || item.status}
                </span>
              </div>
              <h3 className="feedback-item-title">{item.public_title}</h3>
              <p className="feedback-item-desc">{item.public_description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}