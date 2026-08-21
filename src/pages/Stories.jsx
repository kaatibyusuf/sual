import React, { useState, useEffect, useCallback, useRef } from 'react'
import { STORIES } from '../data/stories.js'
import { supabase } from '../lib/supabase.js'
import './Stories.css'

// Saved locally in public/images/stories/ — no longer hotlinked to
// Unsplash's CDN.
const STORIES_BG = '/images/stories/stories-bg.jpg'

// Filter buttons correspond directly to a story's `era` field.
const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'prophets', label: 'Prophets' },
  { key: 'sahabah', label: 'Sahabah' },
  { key: 'tabieen', label: "Tabii'een" },
  { key: 'tabi-tabieen', label: "Tabi' Tabi'een" },
  { key: 'ulul-azm', label: "Ulul 'Azm" },
  { key: 'battles', label: 'Battles' },
]

const ERA_BADGE_LABEL = {
  prophets: 'Prophets',
  sahabah: 'Sahabah',
  tabieen: "Tabii'een",
  'tabi-tabieen': "Tabi' Tabi'een",
  'ulul-azm': "Ulul 'Azm",
  battles: 'Battle',
}

// A story counts as finished once scroll reaches this far down the
// page — kept a little short of 100% since the sources/footer area
// at the very bottom isn't really "the story" itself.
const COMPLETE_THRESHOLD = 92
const SAVE_DEBOUNCE_MS = 800

export default function Stories({ user }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [progressMap, setProgressMap] = useState({}) // story_id -> { progress_percent, completed }
  const saveTimeoutRef = useRef(null)
  const latestProgressRef = useRef(0) // avoids stale closures inside the scroll listener
  const restoreTargetRef = useRef(null) // percent to scroll to on open, or null for a fresh story

  const fetchProgress = useCallback(async () => {
    if (!user) return
    try {
      const { data, error } = await supabase
        .from('story_reading_progress')
        .select('story_id, progress_percent, completed')
        .eq('user_id', user.id)
      if (error) throw error
      const map = {}
      ;(data || []).forEach(row => { map[row.story_id] = row })
      setProgressMap(map)
    } catch (err) {
      console.error('Failed to load reading progress:', err)
    }
  }, [user])

  useEffect(() => { fetchProgress() }, [fetchProgress])

  const saveProgress = useCallback(async (storyId, percent) => {
    if (!user) return
    const completed = percent >= COMPLETE_THRESHOLD
    try {
      const { error } = await supabase.from('story_reading_progress').upsert({
        user_id: user.id,
        story_id: storyId,
        progress_percent: completed ? 100 : percent,
        completed,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,story_id' })
      if (error) throw error
      setProgressMap(prev => ({
        ...prev,
        [storyId]: { story_id: storyId, progress_percent: completed ? 100 : percent, completed },
      }))
    } catch (err) {
      console.error('Failed to save reading progress:', err)
    }
  }, [user])

  // Debounced save — only writes to Supabase after scrolling settles,
  // rather than on every scroll event. Always flushes the most recent
  // value, even if several scroll events fired since the last save.
  const scheduleSave = useCallback((storyId, percent) => {
    latestProgressRef.current = percent
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => {
      saveProgress(storyId, latestProgressRef.current)
    }, SAVE_DEBOUNCE_MS)
  }, [saveProgress])

  // Track scroll position while a story is open, converting it into a
  // 0–100 percent of the full page height. Flushes any pending save
  // immediately when leaving the story (closing or unmounting), so a
  // quick visit isn't lost to the debounce timer.
  //
  // FIX: this previously called handleScroll() synchronously right
  // after mount, before any restore happened — since openStory forced
  // scrollTo(0, 0) first, that call read scrollY as 0 and immediately
  // scheduled a save of 0% over whatever progress was actually
  // stored. That's the real bug behind "closing and reopening a story
  // restarts it" — it wasn't just failing to resume, it was actively
  // overwriting the saved progress back to 0 on every reopen. Now the
  // saved position (captured by openStory into restoreTargetRef) is
  // restored first, via requestAnimationFrame so the story's content
  // has actually painted before we compute scrollHeight, and only
  // THEN does scroll tracking/saving begin.
  useEffect(() => {
    if (!selected) return

    const target = restoreTargetRef.current
    latestProgressRef.current = target || 0

    const restoreFrame = requestAnimationFrame(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (target && docHeight > 0) {
        window.scrollTo(0, Math.round((target / 100) * docHeight))
      } else {
        window.scrollTo(0, 0)
      }
    })

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 100
      setProgressMap(prev => {
        const existing = prev[selected.id]
        // Never let scroll-tracking silently un-complete a story that
        // was already marked finished on an earlier visit.
        if (existing?.completed) return prev
        return { ...prev, [selected.id]: { story_id: selected.id, progress_percent: percent, completed: percent >= COMPLETE_THRESHOLD } }
      })
      scheduleSave(selected.id, percent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      cancelAnimationFrame(restoreFrame)
      window.removeEventListener('scroll', handleScroll)
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
        saveProgress(selected.id, latestProgressRef.current)
      }
    }
  }, [selected, scheduleSave, saveProgress])

  const openStory = (s) => {
    const existing = progressMap[s.id]
    restoreTargetRef.current = (existing && !existing.completed && existing.progress_percent > 0)
      ? existing.progress_percent
      : null
    setSelected(s)
  }

  const closeStory = () => {
    setSelected(null)
    window.scrollTo(0, 0)
  }

  const filtered = STORIES.filter(s => {
    const matchEra = filter === 'all' || s.era === filter
    const matchSearch = search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.arabicName.includes(search) ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
    return matchEra && matchSearch
  })

  const renderCardProgress = (storyId) => {
    const p = progressMap[storyId]
    if (!p) return null
    if (p.completed) {
      return <span className="story-progress-badge story-progress-badge--done">✓ Completed</span>
    }
    if (p.progress_percent > 0) {
      return (
        <div className="story-progress-track" aria-label={`${p.progress_percent}% read`}>
          <div className="story-progress-fill" style={{ width: `${p.progress_percent}%` }} />
        </div>
      )
    }
    return null
  }

  if (selected) {
    const s = selected
    const p = progressMap[s.id]
    return (
      <div className="page-content stories-page">
        <div
          className="stories-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(6,47,74,0.55), rgba(9,69,112,0.5)), url(${STORIES_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />

        {user && (
          <div className="story-reading-bar" aria-hidden="true">
            <div className="story-reading-bar-fill" style={{ width: `${p?.progress_percent ?? 0}%` }} />
          </div>
        )}

        <button className="stories-back" onClick={closeStory}>
          ← Back to Stories
        </button>

        <div className="story-detail">
          {/* Header */}
          <div
            className="story-detail-header card"
            data-a11y-label={`${s.name}. ${s.title}. ${s.lifespan}. ${s.summary}`}
          >
            <div className="story-detail-icon">{s.image}</div>
            <div className="story-detail-meta">
              <span className={`stories-badge badge-${s.era}`}>
                {ERA_BADGE_LABEL[s.era] || s.era}
              </span>
              <span className="stories-badge badge-category">{s.category}</span>
              {p?.completed && (
                <span className="story-progress-badge story-progress-badge--done">✓ Completed</span>
              )}
            </div>
            <h1 className="story-detail-name">{s.name}</h1>
            <p className="story-detail-arabic arabic">{s.arabicName}</p>
            <p className="story-detail-title">{s.title}</p>
            <p className="story-detail-lifespan">{s.lifespan}</p>
            <p className="story-detail-summary">{s.summary}</p>
          </div>

          {/* Full Story */}
          <div className="story-detail-body card">
            <h2 className="story-section-title">📜 Biography</h2>
            {s.story.split('\n\n').map((para, i) => (
              // Each paragraph carries its own label so a reader can
              // tap through the biography one paragraph at a time,
              // rather than only being able to hear the whole card's
              // combined summary at once.
              <p key={i} className="story-para" data-a11y-label={para}>{para}</p>
            ))}
          </div>

          {p?.completed && (
            <div className="story-complete-banner card" data-a11y-label="You've finished this story.">
              <span>✓ You've finished this story.</span>
            </div>
          )}

          {/* Lessons */}
          <div className="story-detail-lessons card">
            <h2 className="story-section-title">💡 Lessons</h2>
            <ul className="story-lessons-list">
              {s.lessons.map((lesson, i) => (
                <li key={i} className="story-lesson-item" data-a11y-label={`Lesson ${i + 1}: ${lesson}`}>
                  <span className="story-lesson-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{lesson}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div className="story-detail-sources card">
            <h2 className="story-section-title">📚 Primary Sources</h2>
            <div
              className="story-sources-list"
              data-a11y-label={`Primary sources: ${s.sources.join(', ')}.`}
            >
              {s.sources.map((src, i) => (
                <span key={i} className="story-source-chip">{src}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content stories-page">
      <div
        className="stories-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(6,47,74,0.55), rgba(9,69,112,0.5)), url(${STORIES_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />

      <h1 className="page-title">Stories of the Salaf</h1>
      <p className="page-subtitle">سِيَر السَّلَف الصَّالِح — The lives of the Prophets, the Companions, and their Successors</p>

      {/* Filters */}
      <div className="stories-filters">
        <div className="stories-filter-group">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`stories-filter-btn ${filter === f.key ? 'stories-filter-btn--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="stories-search">
          <input
            type="text"
            className="stories-search-input"
            placeholder="Search by name, era, or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button
              className="stories-search-clear"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <p className="stories-count">{filtered.length} {filtered.length === 1 ? 'story' : 'stories'}</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="stories-empty">
          <p>No stories found for your search.</p>
        </div>
      ) : (
        <div className="stories-grid">
          {filtered.map(s => {
            const p = progressMap[s.id]
            const progressNote = p?.completed
              ? ' Completed.'
              : p?.progress_percent > 0
                ? ` ${p.progress_percent} percent read.`
                : ''
            return (
              <button
                key={s.id}
                className="story-card card"
                onClick={() => openStory(s)}
                data-a11y-label={`${s.name}, ${ERA_BADGE_LABEL[s.era] || s.era}. ${s.title}. ${s.lifespan}.${progressNote}`}
              >
                <div className="story-card-top">
                  <div className="story-card-icon">{s.image}</div>
                  <div className="story-card-badges">
                    <span className={`stories-badge badge-${s.era}`}>
                      {ERA_BADGE_LABEL[s.era] || s.era}
                    </span>
                  </div>
                </div>
                <h3 className="story-card-name">{s.name}</h3>
                <p className="story-card-arabic arabic">{s.arabicName}</p>
                <p className="story-card-title">{s.title}</p>
                {user && renderCardProgress(s.id)}
                <div className="story-card-footer">
                  <span className="story-card-read">Read Story →</span>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}