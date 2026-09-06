// src/pages/Fusuul.jsx
//
// Fusuul (فُصُول, "chapters" or "sections"), a single hub page
// listing every structured, unit-and-quiz-gated class (Adab, Tawheed,
// Tajweed, Seerah, Arabiyyah) in one place, rather than each one
// living as its own separate top-level nav entry. As more classes
// get added, add one entry to the COURSES array below; no other
// change should be needed.
//
// Route suggestion: /fusuul
//
// Visual concept: each course is presented as a chapter plate rather
// than a generic icon-and-text list row, a solid color-blocked panel
// carrying the course's real Arabic title (its own actual heading,
// not a decorative label) alongside a lighter panel with the English
// title, tagline, and stats. The color-blocking is the one bold move
// per card; everything else stays quiet on purpose.
//
// This page is a directory, not a data source: unit/topic counts
// below are static descriptive copy, not pulled live from each
// course's own data file. If a course's structure changes, update
// its entry here to match.

import { useNavigate } from 'react-router-dom';
import './Fusuul.css';

const COURSES = [
  {
    id: 'adab',
    route: '/adab',
    arabic: 'أَدَب',
    title: 'Adab Class',
    tagline: 'Islamic manners, character, and everyday conduct',
    accent: 'adab',
  },
  {
    id: 'tawheed',
    route: '/tawheed',
    arabic: 'تَوْحِيد',
    title: 'Tawheed Class',
    tagline: "Islamic monotheism: Allah's Lordship, worship, and names and attributes",
    accent: 'tawheed',
  },
  {
    id: 'tajweedclass',
    route: '/tajweed-class',
    arabic: 'تَجْوِيد',
    title: 'Tajweed Class',
    tagline: "Correct Qur'anic recitation, from articulation points through every major rule",
    stats: '12 units \u00b7 54 topics \u00b7 360 quiz questions',
    accent: 'tajweed',
  },
  {
    id: 'seerahclass',
    route: '/seerah-class',
    arabic: 'سِيرَة',
    title: 'Seerah Class',
    tagline: 'The Prophet\u2019s \u25fe life, chronologically, from before his birth through his passing',
    stats: '14 units \u00b7 58 topics \u00b7 420 quiz questions',
    accent: 'seerah',
  },
  {
    id: 'arabiyyahclass',
    route: '/arabiyyah-class',
    arabic: 'عَرَبِيَّة',
    title: 'Arabiyyah Class',
    tagline: 'Arabic grammar (Nahw), from the sentence itself through full i\u2019rab and sentence parsing',
    stats: '14 units \u00b7 60 topics \u00b7 420 quiz questions',
    accent: 'arabiyyah',
  },
  {
  id: 'hadeethclass',
  route: '/hadeeth-class',
  arabic: 'حَدِيث',
  title: 'Hadeeth Class',
  tagline: 'The science of hadith authentication: sanad, matn, and classifying what is truly authentic',
  stats: '14 units · 58 topics · 420 quiz questions',
  accent: 'hadeeth',
},
];

export default function Fusuul() {
  const navigate = useNavigate();

  return (
    <div className="fs-page">
      <div className="fs-header">
        <div className="fs-title-row">
          <span className="fs-title-arabic">فُصُول</span>
          <span className="fs-title-latin">Fusuul</span>
        </div>
        <div className="fs-header-rule" aria-hidden="true">
          <span className="fs-header-rule-line" />
          <svg className="fs-header-rule-mark" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.6 7.2L22 12l-7.4 2.8L12 22l-2.6-7.2L2 12l7.4-2.8z" />
          </svg>
          <span className="fs-header-rule-line" />
        </div>
        <p className="fs-subtitle">Every structured, unit-by-unit class, gathered in one place.</p>
      </div>

      <div className="fs-grid">
        {COURSES.map((course) => (
          <button
            key={course.id}
            className={`fs-card fs-card--${course.accent}`}
            onClick={() => navigate(course.route)}
          >
            <div className="fs-card-plate">
              <span className="fs-card-arabic" lang="ar" dir="rtl">{course.arabic}</span>
            </div>
            <div className="fs-card-content">
              <div className="fs-card-main">
                <span className="fs-card-title">{course.title}</span>
                <p className="fs-card-tagline">{course.tagline}</p>
                {course.stats && <p className="fs-card-stats">{course.stats}</p>}
              </div>
              <span className="fs-card-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}