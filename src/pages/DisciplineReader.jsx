import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { DISCIPLINES } from '../data/knowledge.js'
import { supabase } from '../lib/supabase.js'
import { getLevelMap } from './Discipline.jsx'
import './Discipline.css'

const ICONS = {
  source: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  bookmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  ),
  bookmarkFilled: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  ),
}

const IconInline = ({ name }) => (
  <span className="icon-inline">{ICONS[name]}</span>
)

export default function DisciplineReader({ user = null }) {
  const { id, level, qid } = useParams()
  const [bookmarked,       setBookmarked]       = useState(false)
  const [bookmarkLoading,  setBookmarkLoading]  = useState(false)

  const discipline = DISCIPLINES.find(d => d.id === id)
  const levelMap = discipline ? getLevelMap(id) : null
  const list = levelMap ? (levelMap[level] || []) : []

  // qid is either a stable qa.id or a numeric fallback index — match
  // whichever the list page used when building the link.
  const index = list.findIndex((qa, i) => String(qa.id ?? i) === qid)
  const qa = index >= 0 ? list[index] : null

  useEffect(() => {
    if (!user || !qa) return
    const key = qa.id ?? qid
    const check = async () => {
      try {
        const { data } = await supabase
          .from('bookmarks')
          .select('qa_id')
          .eq('user_id', user.id)
          .eq('qa_id', key)
          .maybeSingle()
        setBookmarked(!!data)
      } catch (err) {
        console.error('Failed to load bookmark state:', err)
      }
    }
    check()
  }, [user, qa, qid])

  const toggleBookmark = useCallback(async () => {
    if (!user || bookmarkLoading || !qa) return
    setBookmarkLoading(true)
    const key = qa.id ?? qid
    const wasBookmarked = bookmarked
    setBookmarked(!wasBookmarked)

    try {
      if (wasBookmarked) {
        await supabase.from('bookmarks').delete().eq('user_id', user.id).eq('qa_id', key)
      } else {
        await supabase.from('bookmarks').insert({ user_id: user.id, discipline: id, qa_id: key })
      }
    } catch (err) {
      console.error('Bookmark failed:', err)
      setBookmarked(wasBookmarked)
    } finally {
      setBookmarkLoading(false)
    }
  }, [user, id, qa, qid, bookmarked, bookmarkLoading])

  if (!discipline) return <Navigate to="/disciplines" replace />
  if (!qa) return <Navigate to={`/discipline/${id}`} replace />

  const prevQa = index > 0 ? list[index - 1] : null
  const nextQa = index < list.length - 1 ? list[index + 1] : null
  const linkFor = (item, i) => `/discipline/${id}/${level}/${item.id ?? i}`

  return (
    <div className="page-content discipline-page reader-page">

      <Link to={`/discipline/${id}`} className="discipline-back">
        ← Back to {discipline.name}
      </Link>

      <article className="reader-article">
        <p className="reader-eyebrow">
          {discipline.name} · {level.charAt(0).toUpperCase() + level.slice(1)} · Question {index + 1} of {list.length}
        </p>

        <h1 className="reader-question">{qa.question}</h1>

        <div className="reader-answer reader-translation">
          <p>{qa.answer}</p>
        </div>

        {qa.source && (
          <p className="qa-source">
            <span className="qa-source-label"><IconInline name="source" /> Source:</span>
            {qa.source}
          </p>
        )}

        {qa.tags?.length > 0 && (
          <div className="qa-tags">
            {qa.tags.map(t => (
              <span key={t} className="qa-tag">{t}</span>
            ))}
          </div>
        )}

        {user && (
          <button
            className={`qa-bookmark-btn ${bookmarked ? 'qa-bookmark-btn--active' : ''}`}
            onClick={toggleBookmark}
          >
            <IconInline name={bookmarked ? 'bookmarkFilled' : 'bookmark'} /> {bookmarked ? 'Saved' : 'Save'}
          </button>
        )}

        <div className="reader-quiz-link">
          <Link to={`/quiz?discipline=${id}`} className="btn btn-primary">
            Test yourself on {discipline.name} →
          </Link>
        </div>
      </article>

      <div className="reader-pager">
        {prevQa ? (
          <Link to={linkFor(prevQa, index - 1)} className="reader-pager-link reader-pager-link--prev">
            ← Previous question
          </Link>
        ) : <span />}
        {nextQa ? (
          <Link to={linkFor(nextQa, index + 1)} className="reader-pager-link reader-pager-link--next">
            Next question →
          </Link>
        ) : <span />}
      </div>

    </div>
  )
}