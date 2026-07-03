import React from 'react'
import { Link } from 'react-router-dom'
import './QuickActions.css'

const ACTIONS = [
  {
    to: '/dashboard',
    icon: '📊',
    title: 'Dashboard',
    desc: 'Track your learning progress',
  },
  {
    to: '/',
    icon: '📚',
    title: 'Disciplines',
    desc: 'Explore all Islamic subjects',
  },
  {
    to: '/quiz',
    icon: '🎯',
    title: 'Quiz',
    desc: 'Test your knowledge',
  },
  {
    to: '/duas',
    icon: '🤲',
    title: 'Duas',
    desc: 'Learn essential supplications',
  },
  {
    to: '/prayer-times',
    icon: '🕌',
    title: 'Prayer Times',
    desc: 'Never miss a prayer',
    wide: true,
  },
]

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <h2 className="quick-actions-title">Quick Actions</h2>
      <div className="quick-actions-grid">
        {ACTIONS.map(a => (
          <Link
            key={a.to}
            to={a.to}
            className={`quick-action-card${a.wide ? ' quick-action-card--wide' : ''}`}
          >
            <span className="quick-action-icon">{a.icon}</span>
            <span className="quick-action-title">{a.title}</span>
            <span className="quick-action-desc">{a.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}