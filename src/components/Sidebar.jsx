import React from 'react'
import { NavLink } from 'react-router-dom'
import { DISCIPLINES } from '../data/knowledge.js'
import './Sidebar.css'

const NAV_ITEMS = [
  { path: '/', label: 'Home', arabicLabel: 'الرَّئِيسِيَّة', icon: '🏠' },
  { path: '/quiz', label: 'Quiz', arabicLabel: 'الاِخْتِبَار', icon: '🎯' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-arabic">سُؤَال</span>
        <span className="sidebar-logo-latin">Sual</span>
      </div>

      <nav className="sidebar-nav">
        <p className="sidebar-section-label">Navigate</p>
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            <span className="sidebar-link-text">
              <span className="sidebar-link-latin">{item.label}</span>
              <span className="sidebar-link-arabic">{item.arabicLabel}</span>
            </span>
          </NavLink>
        ))}

        <p className="sidebar-section-label" style={{ marginTop: '20px' }}>Disciplines</p>
        {DISCIPLINES.map(d => (
          <NavLink
            key={d.id}
            to={`/discipline/${d.id}`}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
          >
            <span className="sidebar-link-icon">{d.icon}</span>
            <span className="sidebar-link-text">
              <span className="sidebar-link-latin">{d.name}</span>
              <span className="sidebar-link-arabic">{d.arabicName}</span>
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-footer-text">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</p>
        <p className="sidebar-footer-sub">In the name of Allah</p>
      </div>
    </aside>
  )
}