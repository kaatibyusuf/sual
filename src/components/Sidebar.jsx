import React from 'react'
import { NavLink } from 'react-router-dom'
import { DISCIPLINES } from '../data/knowledge.js'
import { DISCIPLINE_ICONS } from './disciplineIcons.jsx'
import './Sidebar.css'

const ICONS = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  quiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  flashcards: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="7" width="14" height="10" rx="2" transform="rotate(-6 12 12)" />
      <rect x="6" y="8" width="14" height="10" rx="2" />
    </svg>
  ),
  bookQuiz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
      <path d="M9 8h7" />
      <path d="M9 12h4" />
      <circle cx="17.5" cy="15.5" r="2.2" />
      <path d="M19 17l1.5 1.5" />
    </svg>
  ),
  stories: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h9a3 3 0 0 1 3 3v13H8a2 2 0 0 1-2-2V4z" />
      <path d="M6 4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2" />
      <line x1="9" y1="9" x2="14" y2="9" />
      <line x1="9" y1="13" x2="14" y2="13" />
    </svg>
  ),
  duas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-3-2.5-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-5 8.5-8 11z" />
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
  tajweed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  fiqh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="4" y1="7" x2="20" y2="7" />
      <path d="M4 7 2 12a3 3 0 0 0 6 0L6 7" />
      <path d="M20 7 18 12a3 3 0 0 0 6 0l-2-5" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  spaces: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
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
  hifdh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a4.5 4.5 0 0 0-4.5 4.5c0 1.2.5 2.3 1.2 3.1A4.5 4.5 0 0 0 7.5 14a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0-1.2-3.4c.7-.8 1.2-1.9 1.2-3.1A4.5 4.5 0 0 0 12 3z" />
      <line x1="12" y1="18.5" x2="12" y2="21" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  tawheed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="none" />
    </svg>
  ),
}

// ── Six-pillar grouping ───────────────────────────────────────
// Home stays outside any group, at the very top, since it's the
// entry point rather than a pillar. Everything else now belongs
// to exactly one group, so the sidebar reads as a map of the app
// rather than a flat list of fourteen equal-weight links.
//
// Disciplines (Fiqh, Tawheed, etc. from DISCIPLINES data) are
// appended to the Learn group below, right after Stories, so all
// "things to read and study" live in one place.

const HOME_ITEM = { path: '/', label: 'Home', icon: 'home' }

const NAV_GROUPS = [
  {
    label: 'Learn',
    items: [
      { path: '/disciplines', label: 'Disciplines', icon: 'fiqh' },
      { path: '/stories', label: 'Stories', icon: 'stories' },
      { path: '/tajweed', label: 'Tajweed', icon: 'tajweed' },
      { path: '/tawheed', label: 'Tawheed', icon: 'tawheed' },
    ],
  },
  {
    label: 'Practice',
    items: [
      { path: '/quiz', label: 'Quiz', icon: 'quiz' },
      { path: '/flashcards', label: 'Flashcards', icon: 'flashcards' },
      { path: '/book-quiz', label: 'Book Quiz', icon: 'bookQuiz' },
    ],
  },
  {
    label: 'Memorise',
    items: [
      { path: '/hifdh', label: 'Hifdh', icon: 'hifdh' },
    ],
  },
  {
    label: 'Worship',
    items: [
      { path: '/prayer-times', label: 'Prayer Times', icon: 'prayerTimes' },
      { path: '/duas', label: 'Duas', icon: 'duas' },
      { path: '/calendar', label: 'Calendar', icon: 'calendar' },
    ],
  },
  {
    label: 'Community',
    items: [
      { path: '/spaces', label: 'Spaces', icon: 'spaces' },
    ],
  },
  {
    label: 'Journey',
    items: [
      { path: '/dashboard', label: 'Journey', icon: 'dashboard' },
    ],
  },
  {
    label: 'Account',
    items: [
      { path: '/profile', label: 'Profile', icon: 'profile' },
    ],
  },
]

const WA_LINK = 'https://whatsapp.com/channel/0029Vb8gbnB5PO0ysEFozQ46'

function NavItem({ item }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
    >
      <span className="sidebar-link-icon">{ICONS[item.icon]}</span>
      <span className="sidebar-link-text">
        <span className="sidebar-link-latin">{item.label}</span>
      </span>
    </NavLink>
  )
}

export default function Sidebar({ onSignOut, user }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-arabic">سُؤَال</span>
        <span className="sidebar-logo-latin">Sual</span>
      </div>

      <nav className="sidebar-nav">
        <NavItem item={HOME_ITEM} />

        {NAV_GROUPS.map(group => (
          <React.Fragment key={group.label}>
            <p className="sidebar-section-label" style={{ marginTop: '20px' }}>{group.label}</p>
            {group.items.map(item => (
              <NavItem key={item.path} item={item} />
            ))}
            {group.label === 'Learn' && DISCIPLINES.map(d => (
              <NavLink
                key={d.id}
                to={`/discipline/${d.id}`}
                className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
              >
                <span className="sidebar-link-icon">{DISCIPLINE_ICONS[d.icon]}</span>
                <span className="sidebar-link-text">
                  <span className="sidebar-link-latin">{d.name}</span>
                </span>
              </NavLink>
            ))}
          </React.Fragment>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-wa-btn"
        >
          <span className="sidebar-wa-icon">{ICONS.chat}</span>
          <span>Join Community</span>
        </a>
        {user && (
          <div className="sidebar-user">
            <p className="sidebar-user-name">{user.user_metadata?.full_name || user.email}</p>
            <button className="sidebar-signout" onClick={onSignOut}>Sign Out</button>
          </div>
        )}
        <p className="sidebar-footer-text">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</p>
        <p className="sidebar-footer-sub">In the name of Allah</p>
      </div>
    </aside>
  )
}