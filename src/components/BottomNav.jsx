import React from 'react'
import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const NAV_ITEMS = [
  { to: '/dashboard',     icon: '📊', label: 'Dashboard',   arabic: 'لَوْحَتِي' },
  { to: '/',               icon: '📚', label: 'Disciplines', arabic: 'المَوَادّ',   end: true },
  { to: '/flashcards',     icon: '🗂️', label: 'Flashcards',  arabic: 'البِطَاقَات' },
  { to: '/quiz',           icon: '🎯', label: 'Quiz',        arabic: 'الإِخْتِبَار' },
  { to: '/stories',        icon: '📖', label: 'Stories',     arabic: 'قِصَص' },
  { to: '/duas',           icon: '🤲', label: 'Duas',        arabic: 'الدُعَاء' },
  { to: '/prayer-times',   icon: '🕌', label: 'Prayer',      arabic: 'مَوَاقِيت' },
  { to: '/profile',        icon: '👤', label: 'Profile',     arabic: 'حِسَابِي' },

]

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {NAV_ITEMS.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `bottom-nav-card${isActive ? ' bottom-nav-card--active' : ''}`
          }
        >
          <span className="bottom-nav-icon">{item.icon}</span>
          <span className="bottom-nav-label">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}