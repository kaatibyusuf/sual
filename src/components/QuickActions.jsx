import React from 'react'
import { Link } from 'react-router-dom'
import './QuickActions.css'

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
  duas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-3-2.5-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-5 8.5-8 11z" />
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
  flashcards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="10" rx="2" transform="rotate(-6 12 12)" />
      <rect x="6" y="8" width="14" height="10" rx="2" />
    </svg>
  ),
  spaces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
    </svg>
  ),
  hifdh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a4.5 4.5 0 0 0-4.5 4.5c0 1.2.5 2.3 1.2 3.1A4.5 4.5 0 0 0 7.5 14a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0-1.2-3.4c.7-.8 1.2-1.9 1.2-3.1A4.5 4.5 0 0 0 12 3z" />
      <line x1="12" y1="18.5" x2="12" y2="21" />
    </svg>
  ),
  journey: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c3-1 3.5-3 5-6s2.5-8 5-8 2 5 4.5 5 3-1.5 3.5-3" />
      <circle cx="4" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="8" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  leaderboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a2 2 0 0 0 2 4h1" />
      <path d="M17 6h3a2 2 0 0 1-2 4h-1" />
    </svg>
  ),
  puzzle: (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 0-4 4c0 1 .4 1.9 1 2.6-.7.3-1.3.8-1.7 1.4H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3.3c.4.6 1 1.1 1.7 1.4-.6.7-1 1.6-1 2.6a4 4 0 0 0 8 0c0-1-.4-1.9-1-2.6.7-.3 1.3-.8 1.7-1.4H20a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-3.3c-.4-.6-1-1.1-1.7-1.4.6-.7 1-1.6 1-2.6a4 4 0 0 0-4-4z" />
  </svg>
),
}

// Palette pulled directly from the homepage hero cards (navy / gold /
// emerald / pastel-blue) instead of an arbitrary rainbow per tile —
// each tile uses a tinted variant of one of those four brand tones
// so the grid still reads as distinct at a glance, but as one
// consistent identity with the carousel above it, not a separate
// unrelated color system.
const ACTIONS = [
  {
    to: '/dashboard',
    icon: 'dashboard',
    color: '#1a3f66',
    iconColor: '#85CCFF',
    title: 'Dashboard',
    desc: 'Your progress',
  },
  {
    to: '/disciplines',
    icon: 'disciplines',
    color: '#0a2f52',
    iconColor: '#85CCFF',
    title: 'Disciplines',
    desc: 'All subjects',
  },
  {
    to: '/flashcards',
    icon: 'flashcards',
    color: '#1a3f66',
    iconColor: '#c8e0f5',
    title: 'Flashcards',
    desc: 'Key terms',
  },
  {
    to: '/quiz',
    icon: 'quiz',
    color: '#8a6420',
    iconColor: '#f8e3b0',
    title: 'Quiz',
    desc: 'Test yourself',
  },
  {
    to: '/leaderboard',
    icon: 'leaderboard',
    color: '#7a5518',
    iconColor: '#f5dfa0',
    title: 'Leaderboard',
    desc: 'This week',
  },
  {
    to: '/duas',
    icon: 'duas',
    color: '#a97a1f',
    iconColor: '#fbeecb',
    title: 'Duas',
    desc: 'Supplications',
  },
  {
    to: '/prayer-times',
    icon: 'prayerTimes',
    color: '#c8952f',
    iconColor: '#3a2600',
    title: 'Prayer Times',
    desc: 'Never miss one',
  },
  {
    to: '/calendar',
    icon: 'calendar',
    color: '#1f6b4a',
    iconColor: '#c8f0dc',
    title: 'Calendar',
    desc: 'Hijri dates',
  },
  {
    to: '/spaces',
    icon: 'spaces',
    color: '#2e8a63',
    iconColor: '#eafff4',
    title: 'Spaces',
    desc: 'Discussions',
  },
  {
    to: '/hifdh',
    icon: 'hifdh',
    color: '#1a4a38',
    iconColor: '#a8ecc9',
    title: 'Hifdh',
    desc: 'Memorization',
  },
  {
    to: '/dashboard',
    icon: 'journey',
    color: '#062038',
    iconColor: '#c8952f',
    title: 'Journey',
    desc: 'Your path',
  },
]

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions-grid">
        {ACTIONS.map(a => (
          <Link key={a.to} to={a.to} className="quick-action-card">
            <span
              className="quick-action-icon"
              style={{ background: a.color, color: a.iconColor }}
            >
              {ICONS[a.icon]}
            </span>
            <span className="quick-action-title">{a.title}</span>
            <span className="quick-action-desc">{a.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}