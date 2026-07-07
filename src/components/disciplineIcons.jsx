// src/components/disciplineIcons.jsx
// Shared icon set for the seven disciplines, keyed the same way as
// DISCIPLINES[].icon in src/data/knowledge.js. Import DISCIPLINE_ICONS
// wherever a discipline's icon needs to render, e.g.:
//
//   import { DISCIPLINE_ICONS } from '../components/disciplineIcons.jsx'
//   <span className="...">{DISCIPLINE_ICONS[discipline.icon]}</span>

import React from 'react'

export const DISCIPLINE_ICONS = {
  fiqh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
      <path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6z" />
      <line x1="4" y1="7" x2="20" y2="7" />
      <path d="M7 21h10" />
    </svg>
  ),
  seerah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  arabiyyah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3l4 4L9 19l-5 1 1-5L17 3z" />
    </svg>
  ),
  usul: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-11 6 11" />
      <line x1="5.5" y1="12.5" x2="12.5" y2="12.5" />
      <line x1="15" y1="17" x2="21" y2="17" />
      <line x1="18" y1="6" x2="18" y2="17" />
    </svg>
  ),
  sarf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16" />
      <path d="M4 12h10" />
      <path d="M4 17h13" />
      <circle cx="20" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  nahw: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19h16" />
      <path d="M6 15V9a2 2 0 0 1 2-2h2" />
      <path d="M14 15V9a2 2 0 0 1 2-2h2" />
      <line x1="6" y1="15" x2="18" y2="15" />
    </svg>
  ),
  tafseer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
}