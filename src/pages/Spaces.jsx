import { HADEETH_42 } from '../data/hadeeth42.js'
import { UMDAT_AL_AHKAM, UMDAT_AL_AHKAM_CHAPTERS } from '../data/umdatulAhkam.js'
import { SAHIH_BUKHARI, SAHIH_BUKHARI_CHAPTERS } from '../data/sahihBukhari.js'
import { BadgeStrip } from '../components/Badges.jsx'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useAccessibility } from '../accessibility/AccessibilityContext.jsx'
import './Spaces.css'

// ── Line-art icons, matching Sidebar's icon style ────────────────
const ICONS = {
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  majlis: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21v-7a8 8 0 0 1 16 0v7" />
      <path d="M4 21h16" />
      <line x1="6" y1="4" x2="6" y2="9" />
      <line x1="18" y1="4" x2="18" y2="9" />
      <circle cx="12" cy="6" r="2" />
    </svg>
  ),
  arabiyyah: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20l4-1 10-10a2 2 0 0 0-3-3L5 16l-1 4z" />
      <path d="M13 7l3 3" />
    </svg>
  ),
  hadeeth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h11a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H6a2 2 0 0 1 0-4h11" />
      <path d="M6 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2" />
    </svg>
  ),
  accountability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="5" />
      <circle cx="15" cy="15" r="5" />
      <path d="M11 10l2 2" />
    </svg>
  ),
  circles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="3" />
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
    </svg>
  ),
  tafseer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1z" />
      <line x1="12" y1="6" x2="12" y2="19" />
    </svg>
  ),
  weeklyTests: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3v4a1 1 0 0 1-1 1H4" />
      <path d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9l4-7Z" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h11a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H6a2 2 0 0 1 0-4h11" />
      <path d="M6 4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  archive: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <path d="M4 8v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0z" />
      <path d="M19 7l-3 7a3 3 0 0 0 6 0z" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 14.6 9 22 9.3 16 14 18 21.5 12 17.3 6 21.5 8 14 2 9.3 9.4 9" />
    </svg>
  ),
}

const TabIcon = ({ name }) => <span className="spaces-tab-icon" aria-hidden="true">{ICONS[name]}</span>

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const CATEGORIES = [
  { key: 'all',       label: 'All',       arabic: 'الكُلّ',      icon: 'globe',     color: '#094570' },
  { key: 'fiqh',      label: 'Fiqh',      arabic: 'الفِقْه',     icon: 'scale',     color: '#5DCAA5' },
  { key: 'seerah',    label: 'Seerah',    arabic: 'السِّيرَة',    icon: 'moon',      color: '#AFA9EC' },
  { key: 'arabiyyah', label: 'Arabiyyah', arabic: 'العَرَبِيَّة', icon: 'arabiyyah', color: '#85B7EB' },
  { key: 'tajweed',   label: 'Tajweed',   arabic: 'التَّجْوِيد',  icon: 'mic',       color: '#F0997B' },
  { key: 'aqeedah',   label: 'Aqeedah',   arabic: 'العَقِيدَة',   icon: 'star',      color: '#FAC775' },
  { key: 'general',   label: 'General',   arabic: 'عَامّ',        icon: 'chat',      color: '#8FD9C4' },
]

// The Spaces landing list — one row per section, WhatsApp-inbox
// style, replacing the old horizontal tab strip. Colors are reused
// directly from CATEGORIES above rather than inventing new ones.
const HUB_ITEMS = [
  { key: 'community',      label: 'Community',       icon: 'chat',           color: '#094570', desc: 'Ask questions, share knowledge, get scholar answers' },
  { key: 'majlis',         label: 'Majlis',          icon: 'majlis',         color: '#FAC775', desc: 'Announcements and updates from the Sual team' },
  { key: 'arabiyyah',      label: 'Arabiyyah Class', icon: 'arabiyyah',      color: '#85B7EB', desc: 'Structured Arabic course, beginner to advanced' },
  { key: 'hadeeth',        label: 'Hadeeth Class',   icon: 'hadeeth',        color: '#8FD9C4', desc: 'From An-Nawawi to Sahih Al-Bukhari' },
  { key: 'accountability', label: 'Accountability',  icon: 'accountability', color: '#5DCAA5', desc: 'Pair up and keep each other consistent' },
  { key: 'circles',        label: 'Circles',         icon: 'circles',       color: '#AFA9EC', desc: 'Small group discussion, named after the Sahabah' },
  { key: 'tafseer',        label: 'Daily Tafseer',   icon: 'tafseer',        color: '#F0997B', desc: 'A new verse and short test every day' },
  { key: 'examportal',     label: 'Weekly Tests',    icon: 'weeklyTests',    color: '#094570', desc: 'Graded automatically, one per track per week' },
]

const CLASS_SCHEDULE = [
  { classId: 'arabiyyah', title: 'Arabiyyah Class', arabic: 'فَصْلُ العَرَبِيَّة', icon: 'arabiyyah', day: 0, hour: 21, minute: 0 },
  { classId: 'hadeeth',   title: 'Hadeeth Class',   arabic: 'فَصْلُ الحَدِيث',    icon: 'hadeeth', day: 6, hour: 21, minute: 0 },
]

const CIRCLES = [
  { id: 'abu_bakr', name: 'Halaqah Abi Bakr', arabicName: 'حَلَقَةُ أَبِي بَكْر', icon: 'award', blurb: 'Named after Abu Bakr As-Siddiq, the first Caliph and the Prophet\'s closest companion — known for his unwavering trust in Allah.' },
  { id: 'umar', name: 'Halaqah Umar', arabicName: 'حَلَقَةُ عُمَر', icon: 'award', blurb: 'Named after Umar ibn Al-Khattab, the second Caliph — known for his justice and strength in upholding the truth.' },
  { id: 'uthman', name: 'Halaqah Uthman', arabicName: 'حَلَقَةُ عُثْمَان', icon: 'tafseer', blurb: 'Named after Uthman ibn Affan, the third Caliph — known for his generosity and compiling the Quran into a single mushaf.' },
  { id: 'ali', name: 'Halaqah Ali', arabicName: 'حَلَقَةُ عَلِيّ', icon: 'award', blurb: 'Named after Ali ibn Abi Talib, the fourth Caliph — known for his knowledge and closeness to the Prophet ﷺ.' },
  { id: 'talhah', name: 'Halaqah Talhah', arabicName: 'حَلَقَةُ طَلْحَة', icon: 'award', blurb: 'Named after Talhah ibn Ubaydillah, one of the ten promised Paradise — known for his generosity and bravery at Uhud.' },
]

const CLASSES = [
  {
    id: 'arabiyyah', title: 'Arabiyyah Class', arabicTitle: 'فَصْلُ العَرَبِيَّة', icon: 'arabiyyah',
    description: 'A structured Arabic language programme from absolute beginner to mastery of the classical sciences.',
    color: '#094570',
    levels: [
      { key: 'beginner', label: 'Beginner', arabic: 'مُبْتَدِئ', color: '#2e7d32', icon: 'chat',
        title: 'Duruus Lughahtil-Arabiyyah', arabicTitle: 'دُرُوسُ اللُّغَةِ العَرَبِيَّة',
        description: 'Complete study of the three volumes of Duruus Al-Lughah Al-Arabiyyah by Dr V. Abdur Raheem — the gold standard for learning Arabic from scratch. Covers reading, writing, vocabulary, basic grammar, and simple conversation.',
        curriculum: ['Volume 1 — Arabic alphabet, vowels, basic nouns and verbs, simple sentences', 'Volume 2 — Expanded grammar, verb conjugation, common expressions', 'Volume 3 — Intermediate grammar, reading comprehension, composition', 'Weekly vocabulary memorization and dictation tests', 'Simple Arabic composition exercises from Week 8'],
        outcome: 'Read Arabic text with vowels fluently, understand basic Quranic vocabulary, and write simple Arabic sentences.', duration: '6 months', commitment: '5 hours per week' },
      { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', icon: 'scroll',
        title: 'Nahw, Sarf and Insha', arabicTitle: 'النَّحْو وَالصَّرْف وَالإِنْشَاء',
        description: 'Systematic study of Arabic grammar (Nahw), morphology (Sarf), and Arabic composition (Insha). Students move from passive reading to active command of the language structures used in Islamic scholarship.',
        curriculum: ["Nahw — Al-Ajrumiyyah with full i'rab practice on Quranic verses", 'Nahw — Qatr An-Nada by Ibn Hisham with commentary', 'Sarf — Shudha Al-Urf by Al-Hamlawi, all verb forms and patterns', 'Insha — Guided Arabic composition, letter writing, and paragraph construction', "Weekly i'rab exercises on selected Quranic passages", 'Monthly composition assignments reviewed and corrected'],
        outcome: "Perform full i'rab of Quranic verses, understand the morphological structure of any Arabic word, and write correct Arabic prose.", duration: '8 months', commitment: '7 hours per week' },
      { key: 'advanced', label: 'Advanced', arabic: 'مُتَقَدِّم', color: '#6a1b9a', icon: 'award',
        title: 'Classical Sciences — Alfiyyah, Sarf, Balaghah', arabicTitle: 'الأَلْفِيَّة وَالصَّرْف وَالبَلَاغَة',
        description: 'Study of the classical Arabic sciences at the level of the traditional Madrasah curriculum. This level produces scholars capable of reading unvowelled classical texts independently.',
        curriculum: ['Alfiyyah Ibn Malik — the 1,000-line poem covering all of Arabic grammar with commentary of Ibn Aqil', 'Advanced Sarf — Maqsud fi Al-Sarf and Al-Kaylani with all derived forms', 'Balaghah — Al-Balaghatul-Wadihah', 'Reading of classical unvowelled texts', 'Weekly memorization of Alfiyyah verses with i\'rab', 'Independent reading and translation of classical Arabic texts'],
        outcome: "Read unvowelled classical Arabic texts independently, understand Alfiyyah Ibn Malik, and apply Balaghah principles to Quranic analysis.", duration: '12 months', commitment: '10 hours per week' },
    ],
  },
  {
    id: 'hadeeth', title: 'Hadeeth Class', arabicTitle: 'فَصْلُ الحَدِيث', icon: 'hadeeth',
    description: 'A structured Hadeeth study programme — the 42 Hadith of An-Nawawi, Umdat al-Ahkam, and Sahih al-Bukhari, each hadith with a 20-question test immediately after it.',
    color: '#7b3f00',
    levels: [
      { key: 'beginner', label: 'Beginner', arabic: 'مُبْتَدِئ', color: '#2e7d32', icon: 'chat',
        title: "Al-Arba'oon An-Nawawiyyah", arabicTitle: 'الأَرْبَعُونَ النَّوَوِيَّة',
        description: 'Complete study of the 42 Hadith of Imam An-Nawawi — the foundational text of Islamic learning for over seven centuries. Every hadith is presented with its Arabic text, transliteration, translation, and the lessons drawn from it.',
        curriculum: ['Study of all 42 hadith with Arabic text and narrator', "Transliteration and translation for each hadith", 'Lessons and rulings extracted from each hadith', 'A 20-question test immediately after each hadith', 'Self-paced — work through the collection at your own pace'],
        outcome: 'Understand all 42 hadith of An-Nawawi, their meanings, and the lessons and rulings scholars have drawn from them.', duration: 'Self-paced', commitment: 'At your own pace' },
      { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', icon: 'scroll',
        title: 'Umdat Al-Ahkam', arabicTitle: 'عُمْدَةُ الأَحْكَام',
        description: 'Hadith on rulings drawn exclusively from Bukhari and Muslim, organized by fiqh chapter — the backbone of legal-hadith study in traditional Islamic scholarship.',
        curriculum: ['Hadith organized by chapter — Purification, Prayer, Zakah, Fasting, Hajj, Transactions, and more', 'Each hadith presented with Arabic text, transliteration, translation, and lessons', 'A 20-question test immediately after each hadith', 'Self-paced — work through chapters at your own pace'],
        outcome: 'Understand the core legal hadith of Umdat al-Ahkam and the rulings scholars derive from them.', duration: 'Self-paced', commitment: 'At your own pace' },
      { key: 'advanced', label: 'Advanced', arabic: 'مُتَقَدِّم', color: '#6a1b9a', icon: 'award',
        title: 'Sahih Al-Bukhari', arabicTitle: 'صَحِيح البُخَارِي',
        description: 'The most authentic hadith collection after the Qur\'an, organized by book and chapter. Each hadith presented with Arabic text, transliteration, translation, and lessons drawn from it.',
        curriculum: ["Hadith organized by book and chapter, following the traditional structure of Sahih Al-Bukhari", 'Each hadith presented with Arabic text, transliteration, translation, and lessons', 'A 20-question test immediately after each hadith', 'Self-paced — work through chapters at your own pace'],
        outcome: 'Understand the hadith of Sahih Al-Bukhari and the lessons and rulings scholars have drawn from them.', duration: 'Self-paced', commitment: 'At your own pace' },
    ],
  },
]

function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function msgKey(m) {
  return m.id ?? `${m.user_id}-${m.created_at}`
}

function nextSession(schedule) {
  const now = new Date()
  const next = new Date(now)
  next.setHours(schedule.hour, schedule.minute, 0, 0)
  let daysAhead = (schedule.day - now.getDay() + 7) % 7
  if (daysAhead === 0 && next <= now) daysAhead = 7
  next.setDate(next.getDate() + daysAhead)
  return next
}

function countdownTo(date) {
  const ms = date.getTime() - Date.now()
  const totalMinutes = Math.max(0, Math.floor(ms / 60000))
  const days = Math.floor(totalMinutes / 1440)
  const hours = Math.floor((totalMinutes % 1440) / 60)
  const minutes = totalMinutes % 60
  if (days > 0) return `in ${days}d ${hours}h`
  if (hours > 0) return `in ${hours}h ${minutes}m`
  return `in ${minutes}m`
}

function liveStatus(schedule, durationMinutes = 60) {
  const now = new Date()
  if (now.getDay() !== schedule.day) return false
  const start = new Date(now)
  start.setHours(schedule.hour, schedule.minute, 0, 0)
  const end = new Date(start.getTime() + durationMinutes * 60000)
  return now >= start && now < end
}

function tfWords(text) {
  return (text || '').split(/\s+/).filter(Boolean)
}

function shuffleArr(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildTafseerQuestions(recentEntries, distractorPool) {
  const raw = []

  recentEntries.forEach(entry => {
    const others = distractorPool.filter(e => e.id !== entry.id)

    if (others.length >= 3) {
      const wrongLabels = shuffleArr(others).slice(0, 3).map(e => `${e.surah_name} ${e.surah_num}:${e.ayah_num}`)
      raw.push({
        question: `Which surah and ayah is this verse from: "${(entry.translation || '').slice(0, 70)}..."?`,
        optionPool: [`${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}`, ...wrongLabels],
        correctText: `${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}`,
      })
    }

    const allOtherLessons = others.flatMap(e => Array.isArray(e.lessons) ? e.lessons : [])
    const lessons = Array.isArray(entry.lessons) ? entry.lessons : []
    lessons.forEach(lesson => {
      const wrong = shuffleArr(allOtherLessons.filter(l => l !== lesson)).slice(0, 3)
      if (wrong.length < 3) return
      raw.push({
        question: `Which of these is a lesson drawn from ${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}?`,
        optionPool: [lesson, ...wrong],
        correctText: lesson,
      })
    })

    const sentences = (entry.tafseer_body || '').split(/(?<=[.!?])\s+/).filter(s => tfWords(s).length >= 5)
    if (sentences.length > 0) {
      const sentence = sentences[Math.floor(Math.random() * sentences.length)]
      const words = tfWords(sentence)
      const candidates = words.map((w, i) => ({ w, i })).filter(({ w }) => w.replace(/[.,!?]/g, '').length >= 5)
      if (candidates.length > 0) {
        const target = candidates[Math.floor(Math.random() * candidates.length)]
        const blanked = words.map((w, i) => (i === target.i ? '______' : w)).join(' ')
        const otherWords = others.flatMap(e => tfWords(e.tafseer_body)).filter(w => w.length >= 5 && w !== target.w)
        const distractors = [...new Set(shuffleArr(otherWords))].slice(0, 3)
        if (distractors.length === 3) {
          raw.push({
            question: `Which word completes this line from ${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}?`,
            context: blanked,
            optionPool: [target.w, ...distractors],
            correctText: target.w,
          })
        }
      }
    }
  })

  return shuffleArr(raw).slice(0, 20).map(q => {
    const options = shuffleArr(q.optionPool)
    return {
      question: q.question,
      context: q.context || null,
      options,
      correct: options.indexOf(q.correctText),
    }
  })
}

function pickLengthMatchedDistractors(correctText, pool) {
  const target = correctText.length
  const candidates = [...new Set(pool)].filter(p => p && p !== correctText)
  candidates.sort((a, b) => Math.abs(a.length - target) - Math.abs(b.length - target))
  return candidates.slice(0, 3)
}

function buildHadithQuiz(entry, allEntries) {
  if (!entry) return []
  const others = (allEntries || []).filter(e => e.num !== entry.num)
  const raw = []

  const otherNarrators = others.map(e => e.narrator).filter(Boolean)
  const narratorDistractors = pickLengthMatchedDistractors(entry.narrator, otherNarrators)
  if (entry.narrator && narratorDistractors.length === 3) {
    raw.push({
      question: `Who narrated the hadith titled "${entry.title}"?`,
      optionPool: [entry.narrator, ...narratorDistractors],
      correctText: entry.narrator,
    })
  }

  const otherTitles = others.map(e => e.title).filter(Boolean)
  const titleDistractors = pickLengthMatchedDistractors(entry.title, otherTitles)
  if (titleDistractors.length === 3) {
    raw.push({
      question: `What is the title of hadith number ${entry.num}?`,
      optionPool: [entry.title, ...titleDistractors],
      correctText: entry.title,
    })
  }

  const lessons = Array.isArray(entry.lessons) ? entry.lessons : []
  lessons.forEach(lesson => {
    const distractors = pickLengthMatchedDistractors(entry.title, otherTitles)
    if (distractors.length === 3) {
      raw.push({
        question: `Which hadith teaches the following lesson: "${lesson}"?`,
        optionPool: [entry.title, ...distractors],
        correctText: entry.title,
      })
    }
  })

  const allOtherLessons = others.flatMap(e => Array.isArray(e.lessons) ? e.lessons : [])
  lessons.forEach(lesson => {
    const distractors = pickLengthMatchedDistractors(lesson, allOtherLessons.filter(l => l !== lesson))
    if (distractors.length === 3) {
      raw.push({
        question: `Which of these is a genuine lesson drawn from "${entry.title}"?`,
        optionPool: [lesson, ...distractors],
        correctText: lesson,
      })
    }
  })

  const sentences = (entry.translation || '').split(/(?<=[.!?])\s+/).filter(s => tfWords(s).length >= 6)
  sentences.forEach(sentence => {
    const words = tfWords(sentence)
    const candidates = words.map((w, i) => ({ w, i })).filter(({ w }) => w.replace(/[.,!?;:"']/g, '').length >= 5)
    candidates.forEach(({ w, i }) => {
      const blanked = words.map((ww, ii) => (ii === i ? '______' : ww)).join(' ')
      const otherWords = others.flatMap(e => tfWords(e.translation || '')).filter(ow => ow.length >= 5 && ow !== w)
      const distractors = pickLengthMatchedDistractors(w, otherWords)
      if (distractors.length === 3) {
        raw.push({
          question: `Which word completes this line from "${entry.title}"?`,
          context: blanked,
          optionPool: [w, ...distractors],
          correctText: w,
        })
      }
    })
  })

  const otherSources = others.map(e => e.source).filter(s => s && s !== entry.source)
  const sourceDistractors = pickLengthMatchedDistractors(entry.source, otherSources)
  if (entry.source && sourceDistractors.length === 3) {
    raw.push({
      question: `Which collection records the hadith "${entry.title}"?`,
      optionPool: [entry.source, ...sourceDistractors],
      correctText: entry.source,
    })
  }

  const built = shuffleArr(raw).slice(0, 20).map(q => {
    const options = shuffleArr(q.optionPool)
    return {
      question: q.question,
      context: q.context || null,
      options,
      correct: options.indexOf(q.correctText),
    }
  })

  for (let i = 1; i < built.length; i++) {
    let attempts = 0
    while (built[i].correct === built[i - 1].correct && attempts < 20) {
      const correctText = built[i].options[built[i].correct]
      const reshuffled = shuffleArr(built[i].options)
      built[i] = { ...built[i], options: reshuffled, correct: reshuffled.indexOf(correctText) }
      attempts++
    }
  }

  return built
}

export default function Spaces({ user }) {
  const { announce } = useAccessibility()
  const [searchParams, setSearchParams] = useSearchParams()
  const [subscription,   setSubscription]   = useState(null)
  const [subLoading,     setSubLoading]     = useState(true)
  const [confirmingPayment, setConfirmingPayment] = useState(false)
  const [posts,          setPosts]          = useState([])
  const [postsLoading,   setPostsLoading]   = useState(false)
  const [postsError,     setPostsError]     = useState(null)
  const [category,       setCategory]       = useState('all')
  const [activePost,     setActivePost]     = useState(null)
  const [replies,        setReplies]        = useState([])
  const [newPost,        setNewPost]        = useState({ title: '', body: '', category: 'general' })
  const [newReply,       setNewReply]       = useState('')
  const [showNewPost,    setShowNewPost]    = useState(false)
  const [showWelcomePrompt, setShowWelcomePrompt] = useState(false)
  const [posting,        setPosting]        = useState(false)
  const [error,          setError]          = useState(null)
  const [activeTab,      setActiveTab]      = useState(null) // null = hub list; a key = inside that section
  const [hubSearch,      setHubSearch]      = useState('')
  // A student's own level (from user_levels, same source Quiz/Home/
  // Journey already read), used to pick which Arabiyyah/Hadeeth Class
  // content to show automatically — no manual level picker.
  const [userLevel,      setUserLevel]      = useState('beginner')
  const [featured,       setFeatured]       = useState(null)
  const [memberCount,    setMemberCount]    = useState(null)
  const [justJoined,     setJustJoined]     = useState(false)
  const [hasReferralAccess, setHasReferralAccess] = useState(false)
  const [lastVisit]                          = useState(() => {
    const prev = localStorage.getItem('sual-spaces-last-visit')
    localStorage.setItem('sual-spaces-last-visit', new Date().toISOString())
    return prev ? new Date(prev) : null
  })

  const [myPair, setMyPair] = useState(null)
  const [myGender, setMyGender] = useState(null)
  const [pairMessages, setPairMessages] = useState([])
  const [pairMsgInput, setPairMsgInput] = useState('')
  const [postingPairMsg, setPostingPairMsg] = useState(false)
  const [availableMembers, setAvailableMembers] = useState([])
  const [lastPair, setLastPair] = useState(null) // most recently-ended pair, shown only while currently unpaired
  const [roster, setRoster] = useState([])
  const [accountabilityLoading, setAccountabilityLoading] = useState(false)
  const [accountabilityError, setAccountabilityError] = useState(null)
  const [pairing, setPairing] = useState(false)
  const [unpairing, setUnpairing] = useState(false)

  const [myMatchRequest, setMyMatchRequest] = useState(null)
  const [matchRequests, setMatchRequests] = useState([])
  const [matchRequestForm, setMatchRequestForm] = useState({ interests: '', improve_on: '', seeking: '' })
  const [postingMatchRequest, setPostingMatchRequest] = useState(false)
  const [showMatchRequestForm, setShowMatchRequestForm] = useState(false)

  const [myCircle, setMyCircle] = useState(null)
  const [circleCounts, setCircleCounts] = useState({})
  const [circleMessages, setCircleMessages] = useState([])
  const [circleMsgInput, setCircleMsgInput] = useState('')
  const [circlesLoading, setCirclesLoading] = useState(false)
  const [circlesError, setCirclesError] = useState(null)
  const [joiningCircle, setJoiningCircle] = useState(false)
  const [postingCircleMsg, setPostingCircleMsg] = useState(false)
  const [switchingCircleMode, setSwitchingCircleMode] = useState(false)

  const [todayTafseer, setTodayTafseer] = useState(null)
  const [tafseerLoading, setTafseerLoading] = useState(false)
  const [tafseerQuestions, setTafseerQuestions] = useState([])
  const [tafseerPhase, setTafseerPhase] = useState('view')
  const [tafseerQIndex, setTafseerQIndex] = useState(0)
  const [tafseerChosen, setTafseerChosen] = useState(null)
  const [tafseerRevealed, setTafseerRevealed] = useState(false)
  const [tafseerScore, setTafseerScore] = useState(0)
  const [tafseerAlreadyDone, setTafseerAlreadyDone] = useState(false)
  const [tafseerPastScore, setTafseerPastScore] = useState('')

  const [tafseerArchive, setTafseerArchive] = useState([])
  const [tafseerArchiveLoading, setTafseerArchiveLoading] = useState(false)
  const [showTafseerArchive, setShowTafseerArchive] = useState(false)
  const [selectedArchiveTafseer, setSelectedArchiveTafseer] = useState(null)

  const [classLesson, setClassLesson] = useState(null)
  const [classLessonLoading, setClassLessonLoading] = useState(false)

  const [classLessonArchive, setClassLessonArchive] = useState([])
  const [classLessonArchiveLoading, setClassLessonArchiveLoading] = useState(false)
  const [showClassLessonArchive, setShowClassLessonArchive] = useState(false)
  const [selectedArchiveLesson, setSelectedArchiveLesson] = useState(null)

  const [activeHadithNum, setActiveHadithNum] = useState(null)
  const [activeUmdahNum, setActiveUmdahNum] = useState(null)
  const [activeUmdahChapter, setActiveUmdahChapter] = useState(null)
  const [activeBukhariNum, setActiveBukhariNum] = useState(null)
  const [activeBukhariChapter, setActiveBukhariChapter] = useState(null)

  // The level picker used to clear these on manual switch; now that
  // the Hadeeth Class collection (42 Hadith / Umdah / Bukhari) is
  // picked automatically from userLevel, this guards the same edge
  // case — e.g. leveling up mid-session — without needing a click.
  useEffect(() => {
    setActiveHadithNum(null)
    setActiveUmdahNum(null)
    setActiveUmdahChapter(null)
    setActiveBukhariNum(null)
    setActiveBukhariChapter(null)
  }, [userLevel])

  const [hadithQuizIndex, setHadithQuizIndex] = useState(0)
  const [hadithQuizChosen, setHadithQuizChosen] = useState(null)
  const [hadithQuizRevealed, setHadithQuizRevealed] = useState(false)
  const [hadithQuizScore, setHadithQuizScore] = useState(0)
  const [hadithQuizDone, setHadithQuizDone] = useState(false)

  const [majlisPosts, setMajlisPosts] = useState([])
  const [majlisLoading, setMajlisLoading] = useState(false)
  const [activeMajlisPost, setActiveMajlisPost] = useState(null)
  const [majlisReplies, setMajlisReplies] = useState([])
  const [newMajlisReply, setNewMajlisReply] = useState('')
  const [postingMajlisReply, setPostingMajlisReply] = useState(false)

  const [weeklyTrack, setWeeklyTrack] = useState('arabiyyah')
  const [weeklyTests, setWeeklyTests] = useState([])
  const [weeklyTestsLoading, setWeeklyTestsLoading] = useState(false)
  const [weeklySelectedTest, setWeeklySelectedTest] = useState(null)
  const [weeklyPhase, setWeeklyPhase] = useState('select')
  const [weeklyAttemptId, setWeeklyAttemptId] = useState(null)
  const [weeklyQuestions, setWeeklyQuestions] = useState([])
  const [weeklyAnswers, setWeeklyAnswers] = useState({})
  const [weeklyStarting, setWeeklyStarting] = useState(false)
  const [weeklyError, setWeeklyError] = useState(null)
  const [weeklyResult, setWeeklyResult] = useState(null)

  const [, setClock] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const checkSubscription = useCallback(async () => {
    if (!user) return
    setSubLoading(true)
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single()
      setSubscription(data)
    } catch {
      setSubscription(null)
    } finally {
      setSubLoading(false)
    }
  }, [user])

  const checkReferralAccess = useCallback(async () => {
    if (!user) return
    const { data } = await supabase
      .from('referral_free_access')
      .select('expires_at')
      .eq('user_id', user.id)
      .gt('expires_at', new Date().toISOString())
      .order('expires_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    setHasReferralAccess(!!data)
  }, [user])

  // Same source Quiz/Home/Journey already read from — used here only
  // to auto-pick which Arabiyyah/Hadeeth Class content to show, with
  // no manual level picker in the UI.
  const fetchUserLevel = useCallback(async () => {
    if (!user) return
    try {
      const { data } = await supabase
        .from('user_levels')
        .select('current_level')
        .eq('user_id', user.id)
        .maybeSingle()
      setUserLevel(data?.current_level || 'beginner')
    } catch (err) {
      console.error('Failed to load user level:', err)
    }
  }, [user])

  const fetchPosts = useCallback(async () => {
    if (!user) return
    setPostsLoading(true)
    setPostsError(null)
    try {
      let query = supabase
        .from('spaces_posts')
        .select('*, spaces_replies(count)')
        .order('created_at', { ascending: false })
      if (category !== 'all') query = query.eq('category', category)
      const { data, error } = await query

      if (error) {
        console.error('fetchPosts failed:', error)
        setPostsError(error.message || 'Failed to load posts.')
        setPosts([])
        return
      }

      const rows = data || []

      const userIds = [...new Set(rows.map(p => p.user_id).filter(Boolean))]
      const badgeMap = {}
      if (userIds.length > 0) {
        const { data: profileRows, error: profileError } = await supabase
          .from('profiles')
          .select('id, badge_ids')
          .in('id', userIds)
        if (profileError) {
          console.error('Failed to load author badges:', profileError)
        } else {
          (profileRows || []).forEach(p => { badgeMap[p.id] = p.badge_ids || [] })
        }
      }

      const enriched = rows.map(post => ({
        ...post,
        author_badge_ids: badgeMap[post.user_id] || [],
        reply_count: post.spaces_replies?.[0]?.count ?? 0,
      }))
      setPosts(enriched)
    } catch (err) {
      console.error('fetchPosts threw:', err)
      setPostsError(err.message || 'Failed to load posts.')
      setPosts([])
    } finally {
      setPostsLoading(false)
    }
  }, [user, category])

  const fetchFeatured = useCallback(async () => {
    try {
      const { data: reply } = await supabase
        .from('spaces_replies')
        .select('post_id, body, created_at')
        .eq('is_scholar_answer', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      if (!reply) { setFeatured(null); return }
      const { data: post } = await supabase
        .from('spaces_posts')
        .select('*')
        .eq('id', reply.post_id)
        .single()
      if (post) setFeatured({ post, reply })
    } catch {
      setFeatured(null)
    }
  }, [])

  const fetchMemberCount = useCallback(async () => {
    try {
      const { data, error } = await supabase.rpc('get_spaces_member_count')
      if (error) throw error
      setMemberCount(data)
    } catch (err) {
      console.error('Failed to load member count:', err)
    }
  }, [])

  const fetchMatchRequests = useCallback(async () => {
    try {
      const { data, error } = await supabase.rpc('list_accountability_match_requests')
      if (error) throw error
      setMatchRequests(data || [])
    } catch (err) {
      console.error('Failed to load match requests:', err)
      setMatchRequests([])
    }
  }, [])

  const fetchAccountability = useCallback(async () => {
    setAccountabilityLoading(true)
    setAccountabilityError(null)
    try {
      await supabase.rpc('release_lapsed_accountability_pairs')

      const { data: myProfile } = await supabase
        .from('profiles')
        .select('gender')
        .eq('id', user.id)
        .maybeSingle()
      setMyGender(myProfile?.gender || null)

      const { data: pairData } = await supabase.rpc('get_my_accountability_pair')
      const pair = Array.isArray(pairData) ? pairData[0] : pairData
      setMyPair(pair || null)

      if (!pair) {
        const { data: avail } = await supabase.rpc('get_available_accountability_members')
        setAvailableMembers(avail || [])
        setPairMessages([])

        const { data: lastPairData, error: lastPairError } = await supabase.rpc('get_my_last_accountability_pair')
        if (lastPairError) {
          console.error('Failed to load last accountability pair:', lastPairError)
          setLastPair(null)
        } else {
          setLastPair(Array.isArray(lastPairData) ? (lastPairData[0] || null) : (lastPairData || null))
        }
      } else {
        setAvailableMembers([])
        setLastPair(null)
        fetchPairMessages(pair.pair_id)
      }

      const { data: rosterData, error: rosterError } = await supabase.rpc('get_accountability_roster')
      if (rosterError) {
        console.error('Failed to load accountability roster:', rosterError)
        setRoster([])
      } else {
        setRoster(rosterData || [])
      }

      await fetchMatchRequests()
    } catch (err) {
      setAccountabilityError(err.message)
    } finally {
      setAccountabilityLoading(false)
    }
  }, [user, fetchMatchRequests])

  const fetchPairMessages = async (pairId) => {
    try {
      const { data, error } = await supabase
        .from('accountability_messages')
        .select('*')
        .eq('pair_id', pairId)
        .order('created_at', { ascending: true })
      if (error) throw error
      setPairMessages(data || [])
    } catch (err) {
      console.error('Failed to load accountability messages:', err)
      setPairMessages([])
    }
  }

  const submitPairMessage = async () => {
    if (!pairMsgInput.trim() || !myPair?.pair_id) return
    setPostingPairMsg(true)
    try {
      const { error } = await supabase.from('accountability_messages').insert({
        pair_id: myPair.pair_id,
        user_id: user.id,
        body: pairMsgInput.trim(),
      })
      if (error) throw error
      setPairMsgInput('')
      fetchPairMessages(myPair.pair_id)
    } catch (err) {
      setAccountabilityError(err.message)
    } finally {
      setPostingPairMsg(false)
    }
  }

  const pairWith = async (otherUserId) => {
    setPairing(true)
    setAccountabilityError(null)
    try {
      const { error: rpcError } = await supabase.rpc('pair_accountability_partners', { other_user_id: otherUserId })
      if (rpcError) throw rpcError
      fetchAccountability()
    } catch (err) {
      setAccountabilityError(err.message)
    } finally {
      setPairing(false)
    }
  }

  const unpair = async () => {
    if (!window.confirm('Unpair from your accountability partner? This cannot be undone from here.')) return
    setUnpairing(true)
    setAccountabilityError(null)
    try {
      const { error } = await supabase.rpc('unpair_accountability_partners')
      if (error) throw error
      setMyPair(null)
      fetchAccountability()
    } catch (err) {
      setAccountabilityError(err.message)
    } finally {
      setUnpairing(false)
    }
  }

  const postMatchRequest = async () => {
    setPostingMatchRequest(true)
    setAccountabilityError(null)
    try {
      const { error } = await supabase.rpc('post_accountability_match_request', {
        p_interests: matchRequestForm.interests.trim(),
        p_improve_on: matchRequestForm.improve_on.trim(),
        p_seeking: matchRequestForm.seeking.trim(),
      })
      if (error) throw error
      setMyMatchRequest({ ...matchRequestForm })
      setShowMatchRequestForm(false)
    } catch (err) {
      setAccountabilityError(err.message)
    } finally {
      setPostingMatchRequest(false)
    }
  }

  const withdrawMatchRequest = async () => {
    try {
      const { error } = await supabase.rpc('withdraw_accountability_match_request')
      if (error) throw error
      setMyMatchRequest(null)
      setMatchRequestForm({ interests: '', improve_on: '', seeking: '' })
    } catch (err) {
      setAccountabilityError(err.message)
    }
  }

  const fetchCircles = useCallback(async () => {
    if (!user) return
    setCirclesLoading(true)
    setCirclesError(null)
    try {
      const { data: all } = await supabase.from('circle_memberships').select('user_id, circle_id')
      const counts = {}
      ;(all || []).forEach(row => { counts[row.circle_id] = (counts[row.circle_id] || 0) + 1 })
      setCircleCounts(counts)

      const mine = (all || []).find(row => row.user_id === user.id)
      setMyCircle(mine ? mine.circle_id : null)

      if (mine) {
        const { data: msgs } = await supabase
          .from('circle_messages')
          .select('*')
          .eq('circle_id', mine.circle_id)
          .order('created_at', { ascending: true })
        setCircleMessages(msgs || [])
      } else {
        setCircleMessages([])
      }
    } catch (err) {
      setCirclesError(err.message)
    } finally {
      setCirclesLoading(false)
    }
  }, [user])

  const joinCircle = async (circleId) => {
    setJoiningCircle(true)
    setCirclesError(null)
    try {
      const { error: insertError } = await supabase
        .from('circle_memberships')
        .insert({ user_id: user.id, circle_id: circleId })
      if (insertError) throw insertError
      fetchCircles()
    } catch (err) {
      setCirclesError(err.message)
    } finally {
      setJoiningCircle(false)
    }
  }

  const switchCircle = async (newCircleId) => {
    if (newCircleId === myCircle) { setSwitchingCircleMode(false); return }
    setJoiningCircle(true)
    setCirclesError(null)
    try {
      const { error: delError } = await supabase
        .from('circle_memberships')
        .delete()
        .eq('user_id', user.id)
      if (delError) throw delError

      const { error: insertError } = await supabase
        .from('circle_memberships')
        .insert({ user_id: user.id, circle_id: newCircleId })
      if (insertError) throw insertError

      setSwitchingCircleMode(false)
      fetchCircles()
    } catch (err) {
      setCirclesError(err.message)
    } finally {
      setJoiningCircle(false)
    }
  }

  const submitCircleMessage = async () => {
    if (!circleMsgInput.trim() || !myCircle) return
    setPostingCircleMsg(true)
    try {
      const { error: insertError } = await supabase.from('circle_messages').insert({
        circle_id: myCircle,
        user_id: user.id,
        body: circleMsgInput.trim(),
      })
      if (insertError) throw insertError
      setCircleMsgInput('')
      fetchCircles()
    } catch (err) {
      setCirclesError(err.message)
    } finally {
      setPostingCircleMsg(false)
    }
  }

  const fetchTafseer = useCallback(async () => {
    if (!user) return
    setTafseerLoading(true)
    try {
      const todayStr = new Date().toISOString().slice(0, 10)
      const { data: entry } = await supabase
        .from('daily_tafseer')
        .select('*')
        .eq('publish_date', todayStr)
        .maybeSingle()
      setTodayTafseer(entry || null)

      const { data: history } = await supabase
        .from('daily_tafseer')
        .select('*')
        .order('publish_date', { ascending: false })
        .limit(20)

      setTafseerPhase('view')
      setTafseerQIndex(0)
      setTafseerChosen(null)
      setTafseerRevealed(false)
      setTafseerScore(0)

      if (entry) {
        const RECENT_WINDOW = 7
        const recentEntries = (history || []).slice(0, RECENT_WINDOW)
        const built = buildTafseerQuestions(recentEntries, history || [])
        setTafseerQuestions(built)

        const { data: prog } = await supabase
          .from('daily_tafseer_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('tafseer_id', entry.id)
          .maybeSingle()
        if (prog) {
          setTafseerAlreadyDone(true)
          setTafseerPastScore(`${prog.score} / ${prog.total}`)
        } else {
          setTafseerAlreadyDone(false)
          setTafseerPastScore('')
        }
      } else {
        setTafseerQuestions([])
        setTafseerAlreadyDone(false)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setTafseerLoading(false)
    }
  }, [user])

  const fetchTafseerArchive = useCallback(async () => {
    setTafseerArchiveLoading(true)
    try {
      const { data, error } = await supabase
        .from('daily_tafseer')
        .select('*')
        .order('publish_date', { ascending: false })
        .limit(60)
      if (error) throw error
      setTafseerArchive(data || [])
    } catch (err) {
      console.error('Failed to load tafseer archive:', err)
      setTafseerArchive([])
    } finally {
      setTafseerArchiveLoading(false)
    }
  }, [])

  const startTafseerQuiz = () => {
    setTafseerPhase('quiz')
    setTafseerQIndex(0)
    setTafseerChosen(null)
    setTafseerRevealed(false)
    setTafseerScore(0)
  }

  const selectTafseerAnswer = (idx) => {
    if (tafseerRevealed) return
    setTafseerChosen(idx)
    setTafseerRevealed(true)
    const q = tafseerQuestions[tafseerQIndex]
    if (idx === q.correct) setTafseerScore(s => s + 1)
  }

  const nextTafseerQuestion = () => {
    const isLast = tafseerQIndex + 1 >= tafseerQuestions.length
    if (isLast) {
      const finalScore = tafseerChosen === tafseerQuestions[tafseerQIndex].correct ? tafseerScore : tafseerScore
      supabase.from('daily_tafseer_progress').upsert({
        user_id: user.id,
        tafseer_id: todayTafseer.id,
        score: finalScore,
        total: tafseerQuestions.length,
      }, { onConflict: 'user_id,tafseer_id' }).then(() => {
        setTafseerAlreadyDone(true)
        setTafseerPastScore(`${finalScore} / ${tafseerQuestions.length}`)
      })
      setTafseerPhase('result')
    } else {
      setTafseerQIndex(i => i + 1)
      setTafseerChosen(null)
      setTafseerRevealed(false)
    }
  }

  const fetchClassLesson = useCallback(async (classId, level) => {
    setClassLessonLoading(true)
    try {
      const todayStr = new Date().toISOString().slice(0, 10)
      const { data, error } = await supabase
        .from('class_daily_lessons')
        .select('*')
        .eq('class_id', classId)
        .eq('level', level)
        .eq('publish_date', todayStr)
        .maybeSingle()
      if (error) throw error
      setClassLesson(data || null)
    } catch (err) {
      console.error('Failed to load class daily lesson:', err)
      setClassLesson(null)
    } finally {
      setClassLessonLoading(false)
    }
  }, [])

  const fetchClassLessonArchive = useCallback(async (classId, level) => {
    setClassLessonArchiveLoading(true)
    try {
      const { data, error } = await supabase
        .from('class_daily_lessons')
        .select('*')
        .eq('class_id', classId)
        .eq('level', level)
        .order('publish_date', { ascending: false })
        .limit(60)
      if (error) throw error
      setClassLessonArchive(data || [])
    } catch (err) {
      console.error('Failed to load class lesson archive:', err)
      setClassLessonArchive([])
    } finally {
      setClassLessonArchiveLoading(false)
    }
  }, [])

  const fetchMajlisPosts = useCallback(async () => {
    setMajlisLoading(true)
    try {
      const { data, error } = await supabase
        .from('majlis_posts')
        .select('*')
        .order('pinned', { ascending: false })
        .order('created_at', { ascending: false })
      if (error) throw error
      setMajlisPosts(data || [])
    } catch (err) {
      console.error('Failed to load Majlis posts:', err)
      setMajlisPosts([])
    } finally {
      setMajlisLoading(false)
    }
  }, [])

  const openMajlisPost = async (post) => {
    setActiveMajlisPost(post)
    try {
      const { data, error } = await supabase
        .from('majlis_replies')
        .select('*')
        .eq('post_id', post.id)
        .order('created_at', { ascending: true })
      if (error) throw error
      setMajlisReplies(data || [])
    } catch (err) {
      console.error('Failed to load Majlis replies:', err)
      setMajlisReplies([])
    }
  }

  const submitMajlisReply = async () => {
    if (!newMajlisReply.trim() || !user) return
    setPostingMajlisReply(true)
    try {
      const { error } = await supabase.from('majlis_replies').insert({
        post_id: activeMajlisPost.id,
        user_id: user.id,
        body: newMajlisReply.trim(),
      })
      if (error) throw error
      setNewMajlisReply('')
      openMajlisPost(activeMajlisPost)
    } catch (err) {
      console.error('Failed to post Majlis reply:', err)
    } finally {
      setPostingMajlisReply(false)
    }
  }

  const weeklyCallFn = useCallback(async (payload) => {
    const { data, error } = await supabase.functions.invoke('exam-portal', { body: payload })
    if (error) throw error
    if (data?.error) throw new Error(data.error)
    return data
  }, [])

  const fetchWeeklyTests = useCallback(async () => {
    setWeeklyTestsLoading(true)
    setWeeklyError(null)
    try {
      const data = await weeklyCallFn({ action: 'list_tests' })
      setWeeklyTests((data.tests || []).filter(t => t.track === weeklyTrack))
    } catch (err) {
      setWeeklyError(err.message)
    } finally {
      setWeeklyTestsLoading(false)
    }
  }, [weeklyCallFn, weeklyTrack])

  const startWeeklyTest = async (test) => {
    setWeeklyStarting(true)
    setWeeklyError(null)
    try {
      const data = await weeklyCallFn({ action: 'start_attempt', test_id: test.id })
      setWeeklySelectedTest(test)
      setWeeklyAttemptId(data.attempt_id)
      setWeeklyQuestions(data.questions)
      setWeeklyAnswers({})
      setWeeklyPhase('active')
    } catch (err) {
      setWeeklyError(err.message)
    } finally {
      setWeeklyStarting(false)
    }
  }

  const setWeeklyAnswer = (questionId, value) => {
    setWeeklyAnswers(a => ({ ...a, [questionId]: value }))
  }

  const submitWeeklyTest = async () => {
    setWeeklyPhase('grading')
    setWeeklyError(null)
    try {
      const payload = weeklyQuestions.map(q => ({
        question_id: q.id,
        chosen_index: q.question_type === 'mcq' ? weeklyAnswers[q.id] : undefined,
        answer_text: q.question_type === 'theory' ? (weeklyAnswers[q.id] || '') : undefined,
      }))
      const data = await weeklyCallFn({ action: 'submit_attempt', attempt_id: weeklyAttemptId, answers: payload })
      setWeeklyResult(data)
      setWeeklyPhase('result')
    } catch (err) {
      setWeeklyError(err.message)
      setWeeklyPhase('active')
    }
  }

  const weeklyAllAnswered = weeklyQuestions.every(q => {
    const a = weeklyAnswers[q.id]
    return q.question_type === 'mcq' ? a !== undefined : (a && a.trim())
  })

  useEffect(() => {
    if (!user) return
    checkSubscription()
    checkReferralAccess()
    fetchUserLevel()

    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success') {
      window.history.replaceState({}, '', '/spaces')
      setConfirmingPayment(true)
      let attempts = 0
      const poll = setInterval(async () => {
        attempts++
        const { data } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle()
        if (data?.status === 'active') {
          setSubscription(data)
          setConfirmingPayment(false)
          setJustJoined(true)
          clearInterval(poll)
        } else if (attempts >= 8) {
          setConfirmingPayment(false)
          clearInterval(poll)
        }
      }, 5000)
      return () => clearInterval(poll)
    }
  }, [user, checkSubscription, checkReferralAccess, fetchUserLevel])

  const isPaid = useMemo(() => {
    if (subscription?.status === 'active' && subscription?.plan === 'spaces_lifetime') {
      return true
    }
    const subActive =
      subscription?.status === 'active' &&
      subscription?.expires_at &&
      new Date(subscription.expires_at) > new Date()
    return subActive || hasReferralAccess
  }, [subscription, hasReferralAccess])

  useEffect(() => {
    if (isPaid) {
      fetchPosts()
      fetchFeatured()
      fetchMemberCount()
    }
  }, [isPaid, fetchPosts, fetchFeatured, fetchMemberCount])

  useEffect(() => {
    if (justJoined && isPaid) {
      setActiveTab('community')
      setNewPost({
        title: "Assalamu alaikum, I'm new here",
        body: "Assalamu alaikum everyone, I'm new here. ",
        category: 'general',
      })
      setShowNewPost(true)
      setShowWelcomePrompt(true)
      setJustJoined(false)
    }
  }, [justJoined, isPaid])

  useEffect(() => {
    if (!isPaid) return
    if (activeTab === 'accountability') fetchAccountability()
    if (activeTab === 'circles') fetchCircles()
    if (activeTab === 'tafseer') { fetchTafseer(); fetchTafseerArchive() }
    if (activeTab === 'arabiyyah') { fetchClassLesson('arabiyyah', userLevel); fetchClassLessonArchive('arabiyyah', userLevel) }
    if (activeTab === 'hadeeth') { fetchClassLesson('hadeeth', userLevel); fetchClassLessonArchive('hadeeth', userLevel) }
    if (activeTab === 'majlis') fetchMajlisPosts()
    if (activeTab === 'examportal' && weeklyPhase === 'select') fetchWeeklyTests()
  }, [activeTab, isPaid, fetchAccountability, fetchCircles, fetchTafseer, fetchTafseerArchive, fetchClassLesson, fetchClassLessonArchive, fetchMajlisPosts, userLevel, weeklyPhase, fetchWeeklyTests])

  useEffect(() => {
    if (activeTab === 'examportal' && isPaid && weeklyPhase === 'select') fetchWeeklyTests()
  }, [weeklyTrack, activeTab, isPaid, weeklyPhase, fetchWeeklyTests])

  useEffect(() => {
    if (!myPair?.pair_id) return
    const channel = supabase
      .channel(`accountability_messages:${myPair.pair_id}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'accountability_messages', filter: `pair_id=eq.${myPair.pair_id}` },
        (payload) => {
          setPairMessages(prev => prev.some(m => msgKey(m) === msgKey(payload.new)) ? prev : [...prev, payload.new])
          if (payload.new.user_id !== user.id) {
            announce(`New message from your accountability partner: ${payload.new.body}`)
          }
        }
      )
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [myPair?.pair_id])

  useEffect(() => {
    if (!myCircle) return
    const channel = supabase
      .channel(`circle_messages:${myCircle}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'circle_messages', filter: `circle_id=eq.${myCircle}` },
        (payload) => {
          setCircleMessages(prev => prev.some(m => msgKey(m) === msgKey(payload.new)) ? prev : [...prev, payload.new])
          if (payload.new.user_id !== user.id) {
            announce(`New message in your circle: ${payload.new.body}`)
          }
        }
      )
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [myCircle])

  useEffect(() => {
    if (!activeMajlisPost?.id) return
    const channel = supabase
      .channel(`majlis_replies:${activeMajlisPost.id}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'majlis_replies', filter: `post_id=eq.${activeMajlisPost.id}` },
        (payload) => {
          setMajlisReplies(prev => prev.some(r => msgKey(r) === msgKey(payload.new)) ? prev : [...prev, payload.new])
        }
      )
      .subscribe()
    return () => { supabase.removeChannel(channel) }
  }, [activeMajlisPost?.id])

  useEffect(() => {
    if (subLoading || !isPaid) return
    const postId = searchParams.get('post')
    if (!postId) return
    openPostById(postId)
    const next = new URLSearchParams(searchParams)
    next.delete('post')
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subLoading, isPaid, searchParams])

  const activeHadithEntry = useMemo(() => {
    if (activeHadithNum != null) return { collection: 'hadeeth42', entry: HADEETH_42.find(h => h.num === activeHadithNum) || null, all: HADEETH_42 }
    if (activeUmdahNum != null) return { collection: 'umdah', entry: UMDAT_AL_AHKAM.find(h => h.num === activeUmdahNum) || null, all: UMDAT_AL_AHKAM }
    if (activeBukhariNum != null) return { collection: 'bukhari', entry: SAHIH_BUKHARI.find(h => h.num === activeBukhariNum) || null, all: SAHIH_BUKHARI }
    return null
  }, [activeHadithNum, activeUmdahNum, activeBukhariNum])

  const hadithQuizQuestions = useMemo(() => {
    if (!activeHadithEntry?.entry) return []
    return buildHadithQuiz(activeHadithEntry.entry, activeHadithEntry.all)
  }, [activeHadithEntry])

  useEffect(() => {
    setHadithQuizIndex(0)
    setHadithQuizChosen(null)
    setHadithQuizRevealed(false)
    setHadithQuizScore(0)
    setHadithQuizDone(false)
  }, [activeHadithEntry?.collection, activeHadithEntry?.entry?.num])

  const selectHadithQuizAnswer = (idx) => {
    if (hadithQuizRevealed) return
    setHadithQuizChosen(idx)
    setHadithQuizRevealed(true)
    const q = hadithQuizQuestions[hadithQuizIndex]
    if (idx === q.correct) setHadithQuizScore(s => s + 1)
  }

  const nextHadithQuizQuestion = () => {
    const isLast = hadithQuizIndex + 1 >= hadithQuizQuestions.length
    if (isLast) {
      setHadithQuizDone(true)
    } else {
      setHadithQuizIndex(i => i + 1)
      setHadithQuizChosen(null)
      setHadithQuizRevealed(false)
    }
  }

  if (!user) return null

  const fetchReplies = async (postId) => {
    const { data, error } = await supabase
      .from('spaces_replies')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (error) {
      console.error('fetchReplies failed:', error)
      setReplies([])
      return
    }

    const rows = data || []
    const userIds = [...new Set(rows.map(r => r.user_id).filter(Boolean))]
    const badgeMap = {}
    if (userIds.length > 0) {
      const { data: profileRows, error: profileError } = await supabase
        .from('profiles')
        .select('id, badge_ids')
        .in('id', userIds)
      if (profileError) {
        console.error('Failed to load reply author badges:', profileError)
      } else {
        (profileRows || []).forEach(p => { badgeMap[p.id] = p.badge_ids || [] })
      }
    }

    const enriched = rows.map(r => ({
      ...r,
      author_badge_ids: badgeMap[r.user_id] || [],
    }))
    setReplies(enriched)
  }

  const openPost = async (post) => {
    setActivePost(post)
    setActiveTab('community')
    await fetchReplies(post.id)
  }

  const openPostById = async (postId) => {
    const existing = posts.find(p => p.id === postId)
    if (existing) { openPost(existing); return }
    const { data } = await supabase.from('spaces_posts').select('*').eq('id', postId).single()
    if (data) openPost(data)
  }

  const closeNewPostModal = () => {
    setShowNewPost(false)
    setShowWelcomePrompt(false)
  }

  const submitPost = async () => {
    if (!newPost.title.trim() || !newPost.body.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setPosting(true)
    setError(null)
    try {
      const { error } = await supabase.from('spaces_posts').insert({
        user_id: user.id,
        title: newPost.title.trim(),
        body: newPost.body.trim(),
        category: newPost.category,
      })
      if (error) throw error
      setNewPost({ title: '', body: '', category: 'general' })
      closeNewPostModal()
      fetchPosts()
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const submitReply = async () => {
    if (!newReply.trim()) return
    setPosting(true)
    try {
      const { error } = await supabase.from('spaces_replies').insert({
        post_id: activePost.id,
        user_id: user.id,
        body: newReply.trim(),
      })
      if (error) throw error
      setNewReply('')
      fetchReplies(activePost.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const handlePaystack = async (plan) => {
    setError(null)
    try {
      const { data, error } = await supabase.functions.invoke('initialize-payment', {
        body: { product: 'spaces', plan },
      })
      if (error || data?.error) throw new Error(data?.error || error.message)
      window.location.href = data.authorization_url
    } catch (err) {
      setError(err.message)
    }
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  const getInitials = (str) => str ? str[0].toUpperCase() : 'U'
  const catOf = (key) => CATEGORIES.find(c => c.key === key)

  const filteredHubItems = HUB_ITEMS.filter(item =>
    hubSearch.trim() === '' || item.label.toLowerCase().includes(hubSearch.trim().toLowerCase())
  )

  // The Spaces landing screen — a WhatsApp-inbox-style list of
  // sections instead of the old horizontal tab strip. Tapping a row
  // drills into that section; a back button (rendered in the main
  // return, once, rather than duplicated per section) returns here.
  const renderHub = () => (
    <>
      <div className="spaces-hub-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="spaces-hub-search-input"
          placeholder="Search Spaces"
          value={hubSearch}
          onChange={e => setHubSearch(e.target.value)}
        />
      </div>

      <div className="spaces-hub-list">
        {filteredHubItems.map(item => (
          <button
            key={item.key}
            className="spaces-hub-row"
            onClick={() => setActiveTab(item.key)}
            data-a11y-label={`${item.label}. ${item.desc}`}
          >
            <span className="spaces-hub-avatar" style={{ background: item.color }} aria-hidden="true">
              {ICONS[item.icon]}
            </span>
            <span className="spaces-hub-text">
              <span className="spaces-hub-title">{item.label}</span>
              <span className="spaces-hub-desc">{item.desc}</span>
            </span>
            {item.key === 'community' && memberCount !== null && (
              <span className="spaces-hub-meta">{memberCount.toLocaleString()} members</span>
            )}
          </button>
        ))}
        {filteredHubItems.length === 0 && (
          <p className="spaces-hub-empty">No section matches "{hubSearch}".</p>
        )}
      </div>
    </>
  )

  const renderSchedule = () => (
    <div className="spaces-schedule">
      {CLASS_SCHEDULE.map(s => {
        const next = nextSession(s)
        const live = liveStatus(s)
        return (
          <button
            key={s.classId}
            className="spaces-schedule-card"
            onClick={() => { if (isPaid) setActiveTab(s.classId) }}
            style={{ cursor: isPaid ? 'pointer' : 'default' }}
          >
            <span className="spaces-schedule-icon"><TabIcon name={s.icon} /></span>
            <span className="spaces-schedule-text">
              <span className="spaces-schedule-title">{s.title}</span>
              <span className="spaces-schedule-when">
                {next.toLocaleDateString('en-GB', { weekday: 'long' })} · {next.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </span>
            {live ? (
              <span className="spaces-schedule-live">● Live now</span>
            ) : (
              <span className="spaces-schedule-countdown">{countdownTo(next)}</span>
            )}
          </button>
        )
      })}
    </div>
  )

  const renderAccountability = () => (
    <div className="spaces-accountability">
      <div className="spaces-section-intro card">
        <h3 className="spaces-section-intro-title">Accountability Partners</h3>
        <p className="spaces-section-intro-text">
          Pair up with another member to keep each other accountable in your learning.
          Once paired, you get a private message thread right here to actually coordinate.
          You can unpair at any time if it's no longer working out.
        </p>
      </div>

      {accountabilityError && <div className="spaces-error">{accountabilityError}</div>}

      {accountabilityLoading ? (
        <div className="spaces-loading"><div className="spaces-spinner" /></div>
      ) : !myGender && !myPair ? (
        <div className="spaces-empty card">
          <p className="spaces-empty-text">Set your gender in Profile first</p>
          <p className="spaces-empty-sub">
            Accountability pairing only ever matches members of the same gender —
            <a href="/profile"> head to your Profile</a> to set it, then come back here.
          </p>
        </div>
      ) : myPair ? (
        <>
          <div className="spaces-pair-card card">
            <span className="spaces-pair-badge"><TabIcon name="check" /> Paired</span>
            <div className="spaces-pair-member">
              <div className="spaces-post-avatar">{getInitials(myPair.full_name || 'M')}</div>
              <div>
                <p className="spaces-pair-name">
                  {myPair.full_name || 'A member'}
                  {myPair.gender && (
                    <span style={{ marginLeft: 8, fontSize: '0.78rem', fontWeight: 600, color: '#6a8090', textTransform: 'capitalize' }}>
                      {myPair.gender === 'male' ? '♂' : '♀'} {myPair.gender}
                    </span>
                  )}
                </p>
                <BadgeStrip earnedIds={myPair.badge_ids || []} />
              </div>
            </div>
            <p className="spaces-pair-since">Paired since {formatDate(myPair.paired_at)}</p>
            <button className="btn btn-ghost" onClick={unpair} disabled={unpairing} style={{ marginTop: 10, color: '#c0392b' }}>
              {unpairing ? 'Unpairing…' : 'Unpair'}
            </button>
          </div>

          <div className="spaces-chat-thread">
            {pairMessages.length === 0 ? (
              <div className="spaces-no-replies">No messages yet. Say salaam and set your first check-in.</div>
            ) : pairMessages.map((m) => {
              const isOwn = m.user_id === user.id
              return (
                <div
                  key={msgKey(m)}
                  className={`spaces-chat-row ${isOwn ? 'own' : 'other'}`}
                  data-a11y-label={`${isOwn ? 'You' : 'Your partner'} said: ${m.body}. ${timeAgo(m.created_at)}.`}
                >
                  <div className={`spaces-chat-bubble ${isOwn ? 'own' : 'other'}`}>
                    <p className="spaces-chat-bubble-text">{m.body}</p>
                    <span className="spaces-chat-bubble-time">{timeAgo(m.created_at)}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="spaces-chat-input-bar">
            <textarea
              className="spaces-chat-textarea"
              placeholder="Message your accountability partner..."
              value={pairMsgInput}
              onChange={e => setPairMsgInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  if (pairMsgInput.trim() && !postingPairMsg) submitPairMessage()
                }
              }}
              rows={1}
            />
            <button
              className="spaces-chat-send-btn"
              onClick={submitPairMessage}
              disabled={postingPairMsg || !pairMsgInput.trim()}
              aria-label="Send message"
              type="button"
            >
              <SendIcon />
            </button>
          </div>
        </>
      ) : (
        <>
          {lastPair && (
            <div
              className="spaces-section-intro card"
              style={{ borderLeftColor: '#8a9ab0', marginBottom: 16 }}
              data-a11y-label={`Previously paired with ${lastPair.full_name || 'a member'}${lastPair.gender ? `, ${lastPair.gender}` : ''}. ${
                lastPair.end_reason === 'subscription_lapsed' ? 'Ended because their subscription lapsed.'
                : lastPair.end_reason === 'gender_policy' ? 'Ended for a policy correction.'
                : 'Ended when you unpaired.'
              }${availableMembers.some(m => m.user_id === lastPair.partner_id) ? ' They are available again — you can pair up below.' : ''}`}
            >
              <h3 className="spaces-section-intro-title">Previously Paired</h3>
              <p className="spaces-section-intro-text">
                You were paired with{' '}
                <strong>{lastPair.full_name || 'a member'}</strong>
                {lastPair.gender && (
                  <span style={{ textTransform: 'capitalize' }}> ({lastPair.gender})</span>
                )} —{' '}
                {lastPair.end_reason === 'subscription_lapsed'
                  ? 'ended because their subscription lapsed.'
                  : lastPair.end_reason === 'gender_policy'
                    ? 'ended for a policy correction.'
                    : 'ended when you unpaired.'}
                {availableMembers.some(m => m.user_id === lastPair.partner_id) && (
                  <> They're available again — you can pair up below.</>
                )}
              </p>
            </div>
          )}

          <p className="spaces-available-label">Members without a partner — choose one to pair up</p>
          {availableMembers.length === 0 ? (
            <div className="spaces-empty card">
              <p className="spaces-empty-text">No unpaired members right now</p>
              <p className="spaces-empty-sub">Check back soon.</p>
            </div>
          ) : (
            <div className="spaces-available-list">
  {availableMembers.map(m => (
    <div key={m.user_id} className="spaces-available-item card" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      <div className="spaces-pair-member">
        <div className="spaces-post-avatar">{getInitials(m.full_name || 'M')}</div>
        <div>
          <p className="spaces-pair-name">
            {m.full_name || 'A member'}
            {m.gender && (
              <span style={{ marginLeft: 8, fontSize: '0.78rem', fontWeight: 600, color: '#6a8090', textTransform: 'capitalize' }}>
                {m.gender === 'male' ? '♂' : '♀'} {m.gender}
              </span>
            )}
          </p>
          <BadgeStrip earnedIds={m.badge_ids || []} />
        </div>
      </div>

      {(m.accountability_about || m.accountability_focus || m.accountability_interests || m.accountability_hobbies) && (
        <div style={{ background: '#f7fafc', borderRadius: 10, padding: '12px 14px', margin: '10px 0', fontSize: '0.85rem', color: '#3a4a5a' }}>
          {m.accountability_about && <p style={{ marginBottom: 6 }}>{m.accountability_about}</p>}
          {m.accountability_focus && <p style={{ marginBottom: 4 }}><strong>Focus:</strong> {m.accountability_focus}</p>}
          {m.accountability_interests && <p style={{ marginBottom: 4 }}><strong>Interests:</strong> {m.accountability_interests}</p>}
          {m.accountability_hobbies && <p><strong>Hobbies:</strong> {m.accountability_hobbies}</p>}
        </div>
      )}

      <button
        className="spaces-submit-btn"
        onClick={() => pairWith(m.user_id)}
        disabled={pairing}
      >
        {pairing ? 'Pairing...' : 'Pair Up →'}
      </button>
    </div>
  ))}
</div>
          )}
        </>
      )}

      <div className="spaces-section-intro card" style={{ marginTop: 24 }}>
        <h3 className="spaces-section-intro-title">Match Requests</h3>
        <p className="spaces-section-intro-text">
          Post what you're looking for in a partner, or browse others' requests directly.
        </p>
        {myMatchRequest ? (
          <button className="btn btn-ghost" onClick={withdrawMatchRequest} style={{ color: '#c0392b' }}>
            Withdraw My Request
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setShowMatchRequestForm(v => !v)}>
            {showMatchRequestForm ? 'Cancel' : '+ Post a Match Request'}
          </button>
        )}
      </div>

      {showMatchRequestForm && !myMatchRequest && (
        <div className="card" style={{ padding: 16, marginBottom: 16 }}>
          <textarea
            className="spaces-textarea"
            placeholder="Your interests..."
            rows={2}
            value={matchRequestForm.interests}
            onChange={e => setMatchRequestForm(f => ({ ...f, interests: e.target.value }))}
          />
          <textarea
            className="spaces-textarea"
            placeholder="What you want to improve..."
            rows={2}
            style={{ marginTop: 8 }}
            value={matchRequestForm.improve_on}
            onChange={e => setMatchRequestForm(f => ({ ...f, improve_on: e.target.value }))}
          />
          <textarea
            className="spaces-textarea"
            placeholder="What you're looking for in a partner..."
            rows={2}
            style={{ marginTop: 8 }}
            value={matchRequestForm.seeking}
            onChange={e => setMatchRequestForm(f => ({ ...f, seeking: e.target.value }))}
          />
          <button className="spaces-submit-btn" onClick={postMatchRequest} disabled={postingMatchRequest} style={{ marginTop: 10 }}>
            {postingMatchRequest ? 'Posting…' : 'Post Request →'}
          </button>
        </div>
      )}

      {matchRequests.length === 0 ? (
        <div className="spaces-empty card">
          <p className="spaces-empty-text">No match requests posted yet.</p>
        </div>
      ) : (
        <div className="spaces-available-list">
          {matchRequests.map(r => (
            <div key={r.user_id} className="spaces-available-item card" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <p className="spaces-pair-name">{r.full_name || 'A member'}</p>
              {r.interests && <p style={{ fontSize: '0.85rem', marginTop: 4 }}><strong>Interests:</strong> {r.interests}</p>}
              {r.improve_on && <p style={{ fontSize: '0.85rem', marginTop: 4 }}><strong>Working on:</strong> {r.improve_on}</p>}
              {r.seeking && <p style={{ fontSize: '0.85rem', marginTop: 4 }}><strong>Looking for:</strong> {r.seeking}</p>}
              {!myPair && (
                <button className="spaces-submit-btn" onClick={() => pairWith(r.user_id)} disabled={pairing} style={{ marginTop: 8 }}>
                  {pairing ? 'Pairing...' : 'Pair Up →'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="spaces-section-intro card" style={{ marginTop: 24 }}>
        <h3 className="spaces-section-intro-title">Who's Paired, Who's Seeking</h3>
      </div>

      {(() => {
        const seenIds = new Set()
        const rosterPairs = []
        roster.filter(r => r.status === 'paired').forEach(r => {
          if (seenIds.has(r.member_id)) return
          seenIds.add(r.member_id)
          seenIds.add(r.partner_id)
          rosterPairs.push(r)
        })
        const seekingMembers = roster.filter(r => r.status === 'seeking')

        if (roster.length === 0) {
          return (
            <div className="spaces-empty card">
              <p className="spaces-empty-text">No active members to show yet.</p>
            </div>
          )
        }

        return (
          <>
            {rosterPairs.length > 0 && (
              <>
                <p className="spaces-available-label">Paired ({rosterPairs.length})</p>
                <div className="spaces-available-list" style={{ marginBottom: 20 }}>
                  {rosterPairs.map(r => (
                    <div key={r.member_id} className="spaces-available-item card">
                      <p className="spaces-pair-name">
                        {r.full_name || 'A member'}
                        {r.gender && (
                          <span style={{ marginLeft: 8, fontSize: '0.78rem', fontWeight: 600, color: '#6a8090', textTransform: 'capitalize' }}>
                            {r.gender === 'male' ? '♂' : '♀'} {r.gender} pair
                          </span>
                        )}
                      </p>
                      <p className="spaces-pair-since">Since {formatDate(r.paired_at)}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {seekingMembers.length > 0 && (
              <>
                <p className="spaces-available-label">Seeking a partner ({seekingMembers.length})</p>
                <div className="spaces-available-list">
                  {seekingMembers.map(r => (
                    <div key={r.member_id} className="spaces-available-item card">
                      <p className="spaces-pair-name">
                        {r.full_name || 'A member'}
                        {r.gender && (
                          <span style={{ marginLeft: 8, fontSize: '0.78rem', fontWeight: 600, color: '#6a8090', textTransform: 'capitalize' }}>
                            {r.gender === 'male' ? '♂' : '♀'} {r.gender}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )
      })()}
    </div>
  )

  const renderCircles = () => (
    <div className="spaces-circles">
      <div className="spaces-section-intro card">
        <h3 className="spaces-section-intro-title">Sahaabah Circles</h3>
        <p className="spaces-section-intro-text">
          Join one of five circles named after prominent companions of the Prophet ﷺ —
          a small group discussion thread to boost your accountability. You may join
          one circle only.
        </p>
      </div>

      {circlesError && <div className="spaces-error">{circlesError}</div>}

      {circlesLoading ? (
        <div className="spaces-loading"><div className="spaces-spinner" /></div>
      ) : !myCircle || switchingCircleMode ? (
        <>
          {switchingCircleMode && (
            <p className="spaces-available-label">
              Choose a new circle — you'll leave {CIRCLES.find(c => c.id === myCircle)?.name || 'your current circle'}.
            </p>
          )}
          <div className="spaces-circle-list">
            {CIRCLES.map(c => (
              <button
                key={c.id}
                className="spaces-circle-topic-card card"
                onClick={() => switchingCircleMode ? switchCircle(c.id) : joinCircle(c.id)}
                disabled={joiningCircle || c.id === myCircle}
              >
                <span className="spaces-circle-topic-icon"><TabIcon name={c.icon} /></span>
                <div className="spaces-circle-topic-text">
                  <h4 className="spaces-circle-topic-name">{c.name}</h4>
                  <p className="spaces-circle-topic-arabic arabic">{c.arabicName}</p>
                  <p className="spaces-circle-topic-desc">
                    {c.blurb} <span className="spaces-circle-topic-count">· {circleCounts[c.id] || 0} members{c.id === myCircle ? ' · current' : ''}</span>
                  </p>
                </div>
                <span className="spaces-circle-topic-arrow">→</span>
              </button>
            ))}
          </div>
          {switchingCircleMode && (
            <button
              className="btn btn-ghost"
              style={{ marginTop: 12 }}
              onClick={() => setSwitchingCircleMode(false)}
            >
              Cancel
            </button>
          )}
        </>
      ) : (
        <>
          <div className="spaces-circle-detail-header card">
            <span className="spaces-circle-detail-icon"><TabIcon name={CIRCLES.find(c => c.id === myCircle)?.icon} /></span>
            <div>
              <h3 className="spaces-circle-detail-name">{CIRCLES.find(c => c.id === myCircle)?.name}</h3>
              <p className="spaces-circle-detail-arabic arabic">{CIRCLES.find(c => c.id === myCircle)?.arabicName}</p>
            </div>
            <button
              className="btn btn-ghost"
              style={{ marginLeft: 'auto' }}
              onClick={() => setSwitchingCircleMode(true)}
            >
              Switch Circle
            </button>
          </div>

          <div className="spaces-chat-thread">
            {circleMessages.length === 0 ? (
              <div className="spaces-no-replies">No messages yet. Start the conversation.</div>
            ) : circleMessages.map((m) => {
              const isOwn = m.user_id === user.id
              return (
                <div
                  key={msgKey(m)}
                  className={`spaces-chat-row ${isOwn ? 'own' : 'other'}`}
                  data-a11y-label={`${isOwn ? 'You' : 'A circle member'} said: ${m.body}. ${timeAgo(m.created_at)}.`}
                >
                  <div className={`spaces-chat-bubble ${isOwn ? 'own' : 'other'}`}>
                    {!isOwn && <span className="spaces-chat-bubble-label">Member</span>}
                    <p className="spaces-chat-bubble-text">{m.body}</p>
                    <span className="spaces-chat-bubble-time">{timeAgo(m.created_at)}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="spaces-chat-input-bar">
            <textarea
              className="spaces-chat-textarea"
              placeholder="Share something with your circle..."
              value={circleMsgInput}
              onChange={e => setCircleMsgInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  if (circleMsgInput.trim() && !postingCircleMsg) submitCircleMessage()
                }
              }}
              rows={1}
            />
            <button
              className="spaces-chat-send-btn"
              onClick={submitCircleMessage}
              disabled={postingCircleMsg || !circleMsgInput.trim()}
              aria-label="Send message"
              type="button"
            >
              <SendIcon />
            </button>
          </div>
        </>
      )}
    </div>
  )

  const renderLessonContent = (lesson) => (
    <div className="spaces-tafseer-card card">
      <h4 className="spaces-class-section-title">{lesson.title}</h4>
      {lesson.arabic_text && <p className="spaces-tafseer-arabic arabic-lg">{lesson.arabic_text}</p>}
      {lesson.transliteration && (
        <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginTop: 8 }}>
          {lesson.transliteration}
        </p>
      )}
      {lesson.translation && <p className="spaces-tafseer-translation">"{lesson.translation}"</p>}
      {lesson.commentary && (
        <p className="spaces-tafseer-body" style={{ marginTop: 12 }}>{lesson.commentary}</p>
      )}
      {lesson.audio_url && (
        <audio controls src={lesson.audio_url} style={{ width: '100%', marginTop: 12 }} />
      )}
      {Array.isArray(lesson.lessons) && lesson.lessons.length > 0 && (
        <ul className="spaces-class-curriculum" style={{ marginTop: 12 }}>
          {lesson.lessons.map((l, i) => (
            <li key={i} className="spaces-class-curriculum-item">
              <span className="spaces-class-curriculum-num">{i + 1}</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const renderTafseerReadOnly = (entry) => (
    <>
      <div className="spaces-tafseer-card card">
        <p className="spaces-tafseer-ref">{entry.surah_name} · {entry.surah_num}:{entry.ayah_num}</p>
        <p className="spaces-tafseer-arabic arabic-lg">{entry.arabic_text}</p>
        {entry.transliteration && (
          <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginTop: 8 }}>
            {entry.transliteration}
          </p>
        )}
        <p className="spaces-tafseer-translation">"{entry.translation}"</p>
      </div>
      <div className="spaces-tafseer-card card">
        <h4 className="spaces-class-section-title">Tafseer</h4>
        <p className="spaces-tafseer-body">{entry.tafseer_body}</p>
      </div>
      {Array.isArray(entry.lessons) && entry.lessons.length > 0 && (
        <div className="spaces-tafseer-card card">
          <h4 className="spaces-class-section-title">Lessons</h4>
          <ul className="spaces-class-curriculum">
            {entry.lessons.map((l, i) => (
              <li key={i} className="spaces-class-curriculum-item">
                <span className="spaces-class-curriculum-num">{i + 1}</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )

  const renderTafseer = () => {
    if (tafseerLoading) {
      return <div className="spaces-loading"><div className="spaces-spinner" /></div>
    }

    if (tafseerPhase === 'quiz' && tafseerQuestions.length > 0) {
      const q = tafseerQuestions[tafseerQIndex]
      return (
        <div className="spaces-tafseer-quiz">
          <div className="quiz-progress-header">
            <span className="quiz-progress-label">Question {tafseerQIndex + 1} of {tafseerQuestions.length}</span>
            <span className="quiz-score-badge badge badge-regal">Score: {tafseerScore}</span>
          </div>
          <div className="quiz-question-card card">
            {q.context && <p className="spaces-tafseer-quiz-context arabic">{q.context}</p>}
            <p className="quiz-question-text">{q.question}</p>
            <div className="quiz-options">
              {q.options.map((opt, idx) => {
                let cls = 'quiz-option'
                if (tafseerRevealed) {
                  if (idx === q.correct) cls += ' quiz-option--correct'
                  else if (idx === tafseerChosen && idx !== q.correct) cls += ' quiz-option--wrong'
                } else if (tafseerChosen === idx) {
                  cls += ' quiz-option--selected'
                }
                return (
                  <button key={idx} className={cls} onClick={() => selectTafseerAnswer(idx)} disabled={tafseerRevealed}>
                    <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span>{opt}</span>
                  </button>
                )
              })}
            </div>
            {tafseerRevealed && (
              <div className="quiz-next-row">
                <button className="btn btn-primary" onClick={nextTafseerQuestion}>
                  {tafseerQIndex + 1 < tafseerQuestions.length ? 'Next Question →' : 'See Result →'}
                </button>
              </div>
            )}
          </div>
        </div>
      )
    }

    if (tafseerPhase === 'result') {
      const pct = Math.round((tafseerScore / tafseerQuestions.length) * 100)
      return (
        <div className="quiz-result-card card">
          <div className="quiz-result-header">
            <span className="quiz-result-icon"><TabIcon name="target" /></span>
            <h2 className="quiz-result-title">Today's Tafseer Test Complete</h2>
            <div className="quiz-result-score">{tafseerScore} / {tafseerQuestions.length}</div>
            <div className="quiz-result-percent">{pct}%</div>
          </div>
          <div className="spaces-result-actions">
            <button className="btn btn-ghost" onClick={() => setTafseerPhase('view')}>Back to Verse</button>
          </div>
        </div>
      )
    }

    return (
      <div className="spaces-tafseer-view">
        {todayTafseer ? (
          <>
            {renderTafseerReadOnly(todayTafseer)}

            {tafseerAlreadyDone ? (
              <div className="spaces-alldone card"><TabIcon name="check" /> You've completed today's test — {tafseerPastScore}</div>
            ) : tafseerQuestions.length > 0 ? (
              <button className="spaces-submit-btn spaces-tafseer-start" onClick={startTafseerQuiz}>
                Take Today's Test →
              </button>
            ) : (
              <p className="spaces-tafseer-note">A test will be available once there's enough tafseer history to build one.</p>
            )}
          </>
        ) : (
          <div className="spaces-empty card">
            <p className="spaces-empty-text">No tafseer posted yet today</p>
            <p className="spaces-empty-sub">Check back later — a new verse is shared daily. In the meantime, browse past entries below.</p>
          </div>
        )}

        <button
          className="btn btn-ghost"
          style={{ marginTop: 16 }}
          onClick={() => { setShowTafseerArchive(v => !v); setSelectedArchiveTafseer(null) }}
        >
          <TabIcon name="archive" /> {showTafseerArchive ? 'Hide' : 'Browse'} Past Tafseer Entries
        </button>

        {showTafseerArchive && (
          <div className="card" style={{ padding: 16, marginTop: 12 }}>
            {tafseerArchiveLoading ? (
              <p>Loading…</p>
            ) : tafseerArchive.length === 0 ? (
              <p style={{ color: '#8a9ab0', fontSize: '0.85rem' }}>No past entries yet.</p>
            ) : selectedArchiveTafseer ? (
              <>
                <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setSelectedArchiveTafseer(null)}>← Back to list</button>
                {renderTafseerReadOnly(selectedArchiveTafseer)}
              </>
            ) : (
              <div className="spaces-archive-list">
                {tafseerArchive.map(t => (
                  <button
                    key={t.publish_date}
                    className="spaces-archive-card"
                    onClick={() => setSelectedArchiveTafseer(t)}
                  >
                    <span className="spaces-archive-icon"><TabIcon name="tafseer" /></span>
                    <div className="spaces-archive-text">
                      <h4 className="spaces-archive-title">{t.surah_name} — {t.surah_num}:{t.ayah_num}</h4>
                      <p className="spaces-archive-desc">{t.publish_date}</p>
                    </div>
                    <span className="spaces-archive-arrow">→</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const renderMajlis = () => {
    if (activeMajlisPost) {
      return (
        <div className="spaces-class-section card">
          <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => { setActiveMajlisPost(null); setMajlisReplies([]) }}>← Back to Majlis</button>
          {activeMajlisPost.pinned && <span className="spaces-cat-badge" style={{ marginBottom: 10 }}><TabIcon name="pin" /> Pinned</span>}
          <h3 style={{ color: '#094570', marginBottom: 6 }}>{activeMajlisPost.title}</h3>
          <p style={{ fontSize: '0.78rem', color: '#8a9ab0', marginBottom: 16 }}>{formatDate(activeMajlisPost.created_at)}</p>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: 24 }}>{activeMajlisPost.body}</p>

          <h4 style={{ fontSize: '0.95rem', marginBottom: 12 }}>Questions &amp; Discussion ({majlisReplies.length})</h4>

          <div className="spaces-chat-thread">
            {majlisReplies.length === 0 ? (
              <p style={{ color: '#8a9ab0', fontSize: '0.85rem' }}>No questions yet. Ask below if anything's unclear.</p>
            ) : majlisReplies.map(r => {
              const isOwn = r.user_id === user.id
              const bubbleClass = r.is_admin_reply
                ? 'spaces-chat-bubble spaces-chat-bubble--admin'
                : `spaces-chat-bubble ${isOwn ? 'own' : 'other'}`
              return (
                <div
                  key={msgKey(r)}
                  className={`spaces-chat-row ${isOwn && !r.is_admin_reply ? 'own' : 'other'}`}
                  data-a11y-label={`${r.is_admin_reply ? 'Admin' : isOwn ? 'You' : 'A member'} replied: ${r.body}. ${timeAgo(r.created_at)}.`}
                >
                  <div className={bubbleClass}>
                    <span className="spaces-chat-bubble-label">{r.is_admin_reply ? 'Admin' : isOwn ? 'You' : 'Member'}</span>
                    <p className="spaces-chat-bubble-text" style={{ whiteSpace: 'pre-wrap' }}>{r.body}</p>
                    <span className="spaces-chat-bubble-time">{timeAgo(r.created_at)}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="spaces-chat-input-bar" style={{ marginTop: 16 }}>
            <textarea
              className="spaces-chat-textarea"
              placeholder="Ask a question about this announcement..."
              value={newMajlisReply}
              onChange={e => setNewMajlisReply(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  if (newMajlisReply.trim() && !postingMajlisReply) submitMajlisReply()
                }
              }}
              rows={1}
            />
            <button
              className="spaces-chat-send-btn"
              onClick={submitMajlisReply}
              disabled={postingMajlisReply || !newMajlisReply.trim()}
              aria-label="Ask a question"
              type="button"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="spaces-class-section card">
        <div className="spaces-section-intro card" style={{ marginBottom: 20 }}>
          <h3 className="spaces-section-intro-title">Majlis</h3>
          <p className="spaces-section-intro-text">
            The general meeting hall, updates, announcements, and important things from the Sual team.
            Ask a question on anything that isn't clear, right on the post itself.
          </p>
        </div>

        {majlisLoading ? (
          <div className="spaces-loading"><div className="spaces-spinner" /></div>
        ) : majlisPosts.length === 0 ? (
          <div className="spaces-empty card">
            <p className="spaces-empty-text">No announcements yet.</p>
          </div>
        ) : (
          <div className="spaces-posts">
            {majlisPosts.map(post => (
              <button key={post.id} className="spaces-post-card card" onClick={() => openMajlisPost(post)}>
                <div className="spaces-post-top">
                  {post.pinned && <span className="spaces-cat-badge"><TabIcon name="pin" /> Pinned</span>}
                  <span className="spaces-post-date">{timeAgo(post.created_at)}</span>
                </div>
                <h3 className="spaces-post-title">{post.title}</h3>
                <p className="spaces-post-preview">
                  {post.body.length > 140 ? post.body.slice(0, 140) + '...' : post.body}
                </p>
                <span className="spaces-post-read">Read &amp; Ask →</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  const TRACK_LABELS = { arabiyyah: 'Arabiyyah', tafseer: 'Tafseer', hadeeth: 'Hadeeth' }

  const renderExamPortal = () => {
    if (weeklyPhase === 'select') {
      return (
        <div className="spaces-class-section card">
          <div className="spaces-section-intro card" style={{ marginBottom: 20 }}>
            <h3 className="spaces-section-intro-title">Weekly Tests</h3>
            <p className="spaces-section-intro-text">
              One test per track per week. MCQ is graded instantly; theory answers are graded
              automatically against a model answer with feedback.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {Object.keys(TRACK_LABELS).map(t => (
              <button
                key={t}
                className={`spaces-class-level-btn ${weeklyTrack === t ? 'spaces-class-level-btn--active' : ''}`}
                onClick={() => setWeeklyTrack(t)}
              >
                {TRACK_LABELS[t]}
              </button>
            ))}
          </div>

          {weeklyError && <div className="spaces-error">{weeklyError}</div>}

          {weeklyTestsLoading ? (
            <div className="spaces-loading"><div className="spaces-spinner" /></div>
          ) : weeklyTests.length === 0 ? (
            <div className="spaces-empty card">
              <p className="spaces-empty-text">No {TRACK_LABELS[weeklyTrack]} test posted yet</p>
              <p className="spaces-empty-sub">Check back once this week's test is published.</p>
            </div>
          ) : (
            <div className="spaces-posts">
              {weeklyTests.map(t => (
                <button
                  key={t.id}
                  className="spaces-post-card card"
                  onClick={() => t.my_attempt?.status !== 'completed' && startWeeklyTest(t)}
                  disabled={weeklyStarting || t.my_attempt?.status === 'completed'}
                >
                  <div className="spaces-post-top">
                    <span className="spaces-post-date">{t.publish_date}</span>
                  </div>
                  <h3 className="spaces-post-title">{t.title}</h3>
                  {t.description && <p className="spaces-post-preview">{t.description}</p>}
                  {t.my_attempt?.status === 'completed' ? (
                    <span className="spaces-post-read">
                      <TabIcon name="check" /> Completed — MCQ {t.my_attempt.mcq_score}/{t.my_attempt.mcq_total}
                      {t.my_attempt.theory_total > 0 && `, Theory ${t.my_attempt.theory_score}%`}
                    </span>
                  ) : t.my_attempt?.status === 'in_progress' ? (
                    <span className="spaces-post-read">{weeklyStarting ? 'Resuming…' : 'Resume Test →'}</span>
                  ) : (
                    <span className="spaces-post-read">{weeklyStarting ? 'Starting…' : 'Start Test →'}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }

    if (weeklyPhase === 'active' || weeklyPhase === 'grading') {
      return (
        <div className="spaces-class-section card">
          <h3 style={{ color: '#094570', marginBottom: 6 }}>{weeklySelectedTest.title}</h3>
          <p style={{ fontSize: '0.85rem', color: '#8a9ab0', marginBottom: 20 }}>
            {weeklyQuestions.length} questions — answer all before submitting
          </p>

          {weeklyError && <div className="spaces-error" style={{ marginBottom: 16 }}>{weeklyError}</div>}

          {weeklyQuestions.map((q, idx) => (
            <div key={q.id} className="quiz-question-card card" style={{ marginBottom: 16 }}>
              <p className="quiz-question-text">
                {idx + 1}. {q.question} {q.question_type === 'theory' && <span style={{ fontSize: '0.75rem', color: '#8a9ab0' }}>(Theory)</span>}
              </p>
              {q.question_type === 'mcq' ? (
                <div className="quiz-options">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      className={`quiz-option ${weeklyAnswers[q.id] === i ? 'quiz-option--selected' : ''}`}
                      onClick={() => setWeeklyAnswer(q.id, i)}
                      disabled={weeklyPhase === 'grading'}
                    >
                      <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                      <span>{opt}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <textarea
                  className="spaces-textarea"
                  placeholder="Write your answer..."
                  value={weeklyAnswers[q.id] || ''}
                  onChange={e => setWeeklyAnswer(q.id, e.target.value)}
                  rows={5}
                  disabled={weeklyPhase === 'grading'}
                  style={{ marginTop: 10 }}
                />
              )}
            </div>
          ))}

          <button className="spaces-submit-btn" onClick={submitWeeklyTest} disabled={!weeklyAllAnswered || weeklyPhase === 'grading'}>
            {weeklyPhase === 'grading' ? 'Grading…' : 'Submit Test →'}
          </button>
        </div>
      )
    }

    const mcqPercent = weeklyResult.mcq_total > 0 ? Math.round((weeklyResult.mcq_score / weeklyResult.mcq_total) * 100) : null

    return (
      <div className="quiz-result-card card">
        <h2 className="quiz-result-title">Test Complete — {weeklySelectedTest.title}</h2>

        {weeklyResult.mcq_total > 0 && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 700 }}>MCQ: {weeklyResult.mcq_score} / {weeklyResult.mcq_total} ({mcqPercent}%)</p>
          </div>
        )}
        {weeklyResult.theory_total > 0 && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontWeight: 700 }}>
              Theory: {weeklyResult.theory_score_percent !== null ? `${weeklyResult.theory_score_percent}%` : 'Some answers need manual review'}
            </p>
          </div>
        )}

        <div className="quiz-review">
          <h3 className="quiz-review-title">Review</h3>
          {weeklyResult.results.map((r, i) => (
            <div key={i} className={`quiz-review-item ${r.question_type === 'mcq' ? (r.is_correct ? 'quiz-review-item--correct' : 'quiz-review-item--wrong') : ''}`}>
              <div className="quiz-review-q"><strong>Q{i + 1}</strong> ({r.question_type === 'mcq' ? 'MCQ' : 'Theory'})</div>
              {r.question_type === 'mcq' ? (
                <>
                  <div className="quiz-review-ans">
                    {r.is_correct ? <><TabIcon name="check" /> Correct</> : <><TabIcon name="cross" /> Incorrect</>}
                  </div>
                  {r.explanation && <div className="quiz-review-exp">{r.explanation}</div>}
                </>
              ) : (
                <>
                  <div className="quiz-review-ans">Score: {r.ai_score !== null ? `${r.ai_score}/100` : 'Needs manual review'}</div>
                  <div className="quiz-review-exp">{r.ai_feedback}</div>
                </>
              )}
            </div>
          ))}
        </div>

        <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => { setWeeklyPhase('select'); setWeeklySelectedTest(null); fetchWeeklyTests() }}>
          Back to Weekly Tests
        </button>
      </div>
    )
  }

  if (subLoading) {
    return (
      <div className="page-content spaces-page">
        <div className="spaces-loading">
          <div className="spaces-spinner" />
          <p>Loading Spaces...</p>
        </div>
      </div>
    )
  }

  if (activePost) {
    const cat = catOf(activePost.category)
    return (
      <div className="page-content spaces-page">
        <button className="spaces-back" onClick={() => { setActivePost(null); setReplies([]) }}>
          ← Back to Spaces
        </button>

        <div className="spaces-post-detail card">
          <div className="spaces-post-top">
            <span className="spaces-cat-badge">
              <span className="spaces-cat-dot" style={{ background: cat?.color }} />
              <TabIcon name={cat?.icon} /> {activePost.category}
            </span>
            <span className="spaces-post-date">{formatDate(activePost.created_at)}</span>
          </div>
          <h2 className="spaces-post-detail-title">{activePost.title}</h2>
          <div className="spaces-post-author">
            <div className="spaces-post-avatar">{getInitials(activePost.user_id)}</div>
            <span className="spaces-post-author-name">Member</span>
            <BadgeStrip earnedIds={activePost.author_badge_ids || []} />
          </div>
          <p className="spaces-post-detail-body">{activePost.body}</p>
        </div>

        <div className="spaces-replies">
          <h3 className="spaces-replies-title">
            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
          </h3>
          {replies.length === 0 && (
            <div className="spaces-no-replies">No replies yet. Be the first to respond.</div>
          )}
          {replies.map((r, i) => (
            <div key={i} className={`spaces-reply card ${r.is_scholar_answer ? 'spaces-reply--scholar' : ''}`}>
              {!r.is_scholar_answer && <BadgeStrip earnedIds={r.author_badge_ids || []} />}
              <div className="spaces-reply-header">
                <div className="spaces-reply-avatar" style={{ background: r.is_scholar_answer ? '#094570' : '#e8f0f8' }}>
                  <span style={{ color: r.is_scholar_answer ? '#ffffff' : '#094570' }}>
                    {r.is_scholar_answer ? <TabIcon name="award" /> : getInitials(r.user_id)}
                  </span>
                </div>
                <div>
                  <p className="spaces-reply-author">
                    {r.is_scholar_answer ? 'Scholar Response' : 'Member'}
                    {r.is_scholar_answer && <span className="spaces-scholar-badge">Scholar</span>}
                  </p>
                  <p className="spaces-reply-date">{formatDate(r.created_at)}</p>
                </div>
              </div>
              <p className="spaces-reply-body">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="spaces-reply-input card">
          <h3 className="spaces-reply-input-title">Add a Reply</h3>
          {error && <div className="spaces-error">{error}</div>}
          <textarea
            className="spaces-textarea"
            placeholder="Share your knowledge or ask a follow-up question..."
            value={newReply}
            onChange={e => setNewReply(e.target.value)}
            rows={4}
          />
          <button className="spaces-submit-btn" onClick={submitReply} disabled={posting || !newReply.trim()}>
            {posting ? 'Posting...' : 'Post Reply →'}
          </button>
        </div>
      </div>
    )
  }

  if (!isPaid) {
    return (
      <div className="page-content spaces-page">
        <h1 className="page-title">Spaces</h1>
        <p className="page-subtitle">فَضَاءَات — A community for serious students of Islamic knowledge</p>
        {memberCount !== null && (
          <p style={{ fontSize: '0.85rem', color: '#6a8090', marginTop: -8, marginBottom: 16 }}>
            <TabIcon name="people" /> {memberCount.toLocaleString()} members
          </p>
        )}

        {confirmingPayment && (
          <div className="card" style={{
            padding: '14px 18px',
            marginBottom: 16,
            background: 'rgba(9,69,112,0.06)',
            border: '1px solid rgba(9,69,112,0.2)',
            borderRadius: 10,
            color: '#094570',
            fontSize: '0.9rem',
          }}>
            Confirming your payment — this can take up to a minute. No need to refresh or pay again.
          </div>
        )}

        <div className="spaces-paywall">
          <div className="spaces-paywall-icon"><TabIcon name="majlis" /></div>
          <h2 className="spaces-paywall-title">Members Only</h2>
          <p className="spaces-paywall-desc">
            Spaces is an exclusive community for paid members. Ask questions, share knowledge,
            get scholar answers, and take structured Arabic and Hadeeth courses.
          </p>
          <div className="spaces-features">
            {[
              { icon: 'award', text: 'Direct answers from a qualified scholar' },
              { icon: 'arabiyyah', text: 'Structured Arabiyyah courses — Beginner to Advanced' },
              { icon: 'hadeeth', text: 'The 42 Hadith, Umdat al-Ahkam, and Sahih al-Bukhari — each with an instant 20-question test per hadith' },
              { icon: 'chat', text: 'Threaded community discussions' },
              { icon: 'majlis', text: 'Majlis — announcements and updates from the Sual team' },
              { icon: 'accountability', text: 'Accountability partners and Sahaabah circles' },
              { icon: 'tafseer', text: 'A new tafseer verse and short test every day' },
              { icon: 'weeklyTests', text: 'Weekly tests for Arabiyyah, Tafseer, and Hadeeth — graded automatically' },
            ].map((f, i) => (
              <div key={i} className="spaces-feature-item">
                <span><TabIcon name={f.icon} /></span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div className="spaces-plans">
            <div className="spaces-plan-card">
              <p className="spaces-plan-name">Monthly</p>
              <div className="spaces-plan-price">
                <span className="spaces-currency">₦</span>
                <span className="spaces-amount">2,500</span>
                <span className="spaces-period">/month</span>
              </div>
              <p className="spaces-plan-note">Cancel anytime</p>
              <button className="spaces-pay-btn spaces-pay-btn--secondary" onClick={() => handlePaystack('monthly')}>
                Subscribe →
              </button>
            </div>

            <div className="spaces-plan-card spaces-plan-card--featured">
              <span className="spaces-plan-badge">Best Value</span>
              <p className="spaces-plan-name">Annual</p>
              <div className="spaces-plan-price">
                <span className="spaces-currency">₦</span>
                <span className="spaces-amount">20,000</span>
                <span className="spaces-period">/year</span>
              </div>
              <p className="spaces-plan-note">₦1,667/month · save ₦10,000 a year</p>
              <button className="spaces-pay-btn" onClick={() => handlePaystack('annual')}>
                Subscribe →
              </button>
            </div>

            <div className="spaces-plan-card">
              <p className="spaces-plan-name">Lifetime</p>
              <div className="spaces-plan-price">
                <span className="spaces-currency">₦</span>
                <span className="spaces-amount">100,000</span>
                <span className="spaces-period">once</span>
              </div>
              <p className="spaces-plan-note">Pay once, member forever</p>
              <button className="spaces-pay-btn spaces-pay-btn--secondary" onClick={() => handlePaystack('lifetime')}>
                Subscribe →
              </button>
            </div>
          </div>
          {error && <div className="spaces-error" style={{ marginTop: 12 }}>{error}</div>}
          <p className="spaces-paywall-hadith">
            "Whoever Allah wants good for, He gives him understanding of the religion."
            <br /><span>Sahih Bukhari 71</span>
          </p>
        </div>
      </div>
    )
  }

  const renderHadithQuiz = () => {
    if (hadithQuizQuestions.length === 0) {
      return (
        <div className="spaces-empty card" style={{ marginTop: 14 }}>
          <p className="spaces-empty-text">No test available for this hadith yet</p>
          <p className="spaces-empty-sub">A test needs at least a narrator, title, and lessons on this hadith to generate from.</p>
        </div>
      )
    }

    if (hadithQuizDone) {
      const pct = Math.round((hadithQuizScore / hadithQuizQuestions.length) * 100)
      return (
        <div className="quiz-result-card card" style={{ marginTop: 14 }}>
          <div className="quiz-result-header">
            <span className="quiz-result-icon"><TabIcon name="target" /></span>
            <h2 className="quiz-result-title">Test Complete</h2>
            <div className="quiz-result-score">{hadithQuizScore} / {hadithQuizQuestions.length}</div>
            <div className="quiz-result-percent">{pct}%</div>
          </div>
        </div>
      )
    }

    const q = hadithQuizQuestions[hadithQuizIndex]
    return (
      <div className="spaces-tafseer-quiz" style={{ marginTop: 14 }}>
        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {hadithQuizIndex + 1} of {hadithQuizQuestions.length}</span>
          <span className="quiz-score-badge badge badge-regal">Score: {hadithQuizScore}</span>
        </div>
        <div className="quiz-question-card card">
          {q.context && <p className="spaces-tafseer-quiz-context">{q.context}</p>}
          <p className="quiz-question-text">{q.question}</p>
          <div className="quiz-options">
            {q.options.map((opt, idx) => {
              let cls = 'quiz-option'
              if (hadithQuizRevealed) {
                if (idx === q.correct) cls += ' quiz-option--correct'
                else if (idx === hadithQuizChosen && idx !== q.correct) cls += ' quiz-option--wrong'
              } else if (hadithQuizChosen === idx) {
                cls += ' quiz-option--selected'
              }
              return (
                <button key={idx} className={cls} onClick={() => selectHadithQuizAnswer(idx)} disabled={hadithQuizRevealed}>
                  <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span>{opt}</span>
                </button>
              )
            })}
          </div>
          {hadithQuizRevealed && (
            <div className="quiz-next-row">
              <button className="btn btn-primary" onClick={nextHadithQuizQuestion}>
                {hadithQuizIndex + 1 < hadithQuizQuestions.length ? 'Next Question →' : 'See Result →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderHadeeth42List = () => (
    <div className="spaces-archive-list" style={{ marginTop: 8 }}>
      {HADEETH_42.map(h => (
        <button
          key={h.num}
          className="spaces-archive-card"
          onClick={() => setActiveHadithNum(h.num)}
        >
          <span className="spaces-archive-icon" style={{ borderRadius: '50%', fontSize: '0.75rem', fontWeight: 700 }}>
            {h.num}
          </span>
          <div className="spaces-archive-text">
            <h4 className="spaces-archive-title">{h.title}</h4>
            <p className="spaces-archive-desc">{h.narrator} · {h.source}</p>
          </div>
          <span className="spaces-archive-arrow">→</span>
        </button>
      ))}
    </div>
  )

  const renderHadeeth42Detail = () => {
    const h = HADEETH_42.find(x => x.num === activeHadithNum)
    if (!h) return null
    return (
      <>
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={() => setActiveHadithNum(null)}>← Back to all 42</button>

        <div className="spaces-hadith-detail-header card">
          <span className="spaces-hadith-detail-num">{h.num}</span>
          <div>
            <h2 className="spaces-hadith-detail-title">{h.title}</h2>
            <p className="spaces-hadith-detail-source">{h.narrator} · {h.source}</p>
          </div>
        </div>

        <div className="spaces-tafseer-card card">
          <p className="spaces-tafseer-arabic arabic-lg">{h.arabic_text}</p>
          {h.transliteration && (
            <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginTop: 8 }}>
              {h.transliteration}
            </p>
          )}
          <p className="spaces-tafseer-translation">"{h.translation}"</p>
        </div>

        {Array.isArray(h.lessons) && h.lessons.length > 0 && (
          <div className="spaces-tafseer-card card">
            <h4 className="spaces-class-section-title">Lessons</h4>
            <ul className="spaces-class-curriculum">
              {h.lessons.map((l, i) => (
                <li key={i} className="spaces-class-curriculum-item">
                  <span className="spaces-class-curriculum-num">{i + 1}</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="spaces-section-intro card" style={{ marginTop: 14 }}>
          <h3 className="spaces-section-intro-title">Test Yourself</h3>
          <p className="spaces-section-intro-text">20 questions on this hadith, generated on the spot.</p>
        </div>
        {renderHadithQuiz()}
      </>
    )
  }

  const renderUmdahChapterList = () => (
    <div className="spaces-archive-list" style={{ marginTop: 8 }}>
      {UMDAT_AL_AHKAM_CHAPTERS.map(c => {
        const count = UMDAT_AL_AHKAM.filter(h => h.chapter === c.key).length
        return (
          <button
            key={c.key}
            className="spaces-archive-card"
            onClick={() => setActiveUmdahChapter(c.key)}
          >
            <span className="spaces-archive-icon"><TabIcon name="scroll" /></span>
            <div className="spaces-archive-text">
              <h4 className="spaces-archive-title">{c.label}</h4>
              <p className="spaces-archive-desc">{c.arabic} · {count} hadith</p>
            </div>
            <span className="spaces-archive-arrow">→</span>
          </button>
        )
      })}
    </div>
  )

  const renderUmdahHadithList = () => {
    const chapter = UMDAT_AL_AHKAM_CHAPTERS.find(c => c.key === activeUmdahChapter)
    const hadiths = UMDAT_AL_AHKAM.filter(h => h.chapter === activeUmdahChapter)
    return (
      <>
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={() => setActiveUmdahChapter(null)}>← Back to chapters</button>
        <div className="spaces-section-intro card">
          <h3 className="spaces-section-intro-title">{chapter?.label}</h3>
          <p className="spaces-section-intro-text arabic">{chapter?.arabic}</p>
        </div>
        {hadiths.length === 0 ? (
          <div className="spaces-empty card">
            <p className="spaces-empty-text">No hadith added to this chapter yet</p>
            <p className="spaces-empty-sub">Check back once this chapter's content is published.</p>
          </div>
        ) : (
          <div className="spaces-archive-list">
            {hadiths.map(h => (
              <button
                key={h.num}
                className="spaces-archive-card"
                onClick={() => setActiveUmdahNum(h.num)}
              >
                <span className="spaces-archive-icon" style={{ borderRadius: '50%', fontSize: '0.75rem', fontWeight: 700 }}>
                  {h.num}
                </span>
                <div className="spaces-archive-text">
                  <h4 className="spaces-archive-title">{h.title}</h4>
                  <p className="spaces-archive-desc">{h.narrator} · {h.source}</p>
                </div>
                <span className="spaces-archive-arrow">→</span>
              </button>
            ))}
          </div>
        )}
      </>
    )
  }

  const renderUmdahDetail = () => {
    const h = UMDAT_AL_AHKAM.find(x => x.num === activeUmdahNum)
    if (!h) return null
    return (
      <>
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={() => setActiveUmdahNum(null)}>← Back to chapter</button>

        <div className="spaces-hadith-detail-header card">
          <span className="spaces-hadith-detail-num">{h.num}</span>
          <div>
            <h2 className="spaces-hadith-detail-title">{h.title}</h2>
            <p className="spaces-hadith-detail-source">{h.narrator} · {h.source}</p>
          </div>
        </div>

        <div className="spaces-tafseer-card card">
          <p className="spaces-tafseer-arabic arabic-lg">{h.arabic_text}</p>
          {h.transliteration && (
            <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginTop: 8 }}>
              {h.transliteration}
            </p>
          )}
          <p className="spaces-tafseer-translation">"{h.translation}"</p>
        </div>

        {Array.isArray(h.lessons) && h.lessons.length > 0 && (
          <div className="spaces-tafseer-card card">
            <h4 className="spaces-class-section-title">Lessons</h4>
            <ul className="spaces-class-curriculum">
              {h.lessons.map((l, i) => (
                <li key={i} className="spaces-class-curriculum-item">
                  <span className="spaces-class-curriculum-num">{i + 1}</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="spaces-section-intro card" style={{ marginTop: 14 }}>
          <h3 className="spaces-section-intro-title">Test Yourself</h3>
          <p className="spaces-section-intro-text">20 questions on this hadith, generated on the spot.</p>
        </div>
        {renderHadithQuiz()}
      </>
    )
  }

  const renderBukhariChapterList = () => (
    <div className="spaces-archive-list" style={{ marginTop: 8 }}>
      {SAHIH_BUKHARI_CHAPTERS.map(c => {
        const count = SAHIH_BUKHARI.filter(h => h.chapter === c.key).length
        return (
          <button
            key={c.key}
            className="spaces-archive-card"
            onClick={() => setActiveBukhariChapter(c.key)}
          >
            <span className="spaces-archive-icon"><TabIcon name="award" /></span>
            <div className="spaces-archive-text">
              <h4 className="spaces-archive-title">{c.label}</h4>
              <p className="spaces-archive-desc">{c.arabic} · {count} hadith</p>
            </div>
            <span className="spaces-archive-arrow">→</span>
          </button>
        )
      })}
    </div>
  )

  const renderBukhariHadithList = () => {
    const chapter = SAHIH_BUKHARI_CHAPTERS.find(c => c.key === activeBukhariChapter)
    const hadiths = SAHIH_BUKHARI.filter(h => h.chapter === activeBukhariChapter)
    return (
      <>
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={() => setActiveBukhariChapter(null)}>← Back to chapters</button>
        <div className="spaces-section-intro card">
          <h3 className="spaces-section-intro-title">{chapter?.label}</h3>
          <p className="spaces-section-intro-text arabic">{chapter?.arabic}</p>
        </div>
        {hadiths.length === 0 ? (
          <div className="spaces-empty card">
            <p className="spaces-empty-text">No hadith added to this chapter yet</p>
            <p className="spaces-empty-sub">Check back once this chapter's content is published.</p>
          </div>
        ) : (
          <div className="spaces-archive-list">
            {hadiths.map(h => (
              <button
                key={h.num}
                className="spaces-archive-card"
                onClick={() => setActiveBukhariNum(h.num)}
              >
                <span className="spaces-archive-icon" style={{ borderRadius: '50%', fontSize: '0.75rem', fontWeight: 700 }}>
                  {h.num}
                </span>
                <div className="spaces-archive-text">
                  <h4 className="spaces-archive-title">{h.title}</h4>
                  <p className="spaces-archive-desc">{h.narrator} · {h.source}</p>
                </div>
                <span className="spaces-archive-arrow">→</span>
              </button>
            ))}
          </div>
        )}
      </>
    )
  }

  const renderBukhariDetail = () => {
    const h = SAHIH_BUKHARI.find(x => x.num === activeBukhariNum)
    if (!h) return null
    return (
      <>
        <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={() => setActiveBukhariNum(null)}>← Back to chapter</button>

        <div className="spaces-hadith-detail-header card">
          <span className="spaces-hadith-detail-num">{h.num}</span>
          <div>
            <h2 className="spaces-hadith-detail-title">{h.title}</h2>
            <p className="spaces-hadith-detail-source">{h.narrator} · {h.source}</p>
          </div>
        </div>

        <div className="spaces-tafseer-card card">
          <p className="spaces-tafseer-arabic arabic-lg">{h.arabic_text}</p>
          {h.transliteration && (
            <p style={{ fontStyle: 'italic', color: '#6a8090', fontSize: '0.9rem', marginTop: 8 }}>
              {h.transliteration}
            </p>
          )}
          <p className="spaces-tafseer-translation">"{h.translation}"</p>
        </div>

        {Array.isArray(h.lessons) && h.lessons.length > 0 && (
          <div className="spaces-tafseer-card card">
            <h4 className="spaces-class-section-title">Lessons</h4>
            <ul className="spaces-class-curriculum">
              {h.lessons.map((l, i) => (
                <li key={i} className="spaces-class-curriculum-item">
                  <span className="spaces-class-curriculum-num">{i + 1}</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="spaces-section-intro card" style={{ marginTop: 14 }}>
          <h3 className="spaces-section-intro-title">Test Yourself</h3>
          <p className="spaces-section-intro-text">20 questions on this hadith, generated on the spot.</p>
        </div>
        {renderHadithQuiz()}
      </>
    )
  }

  const renderClass = (cls) => {
    // Auto-fit — the student's own account level picks which content
    // shows, same as everywhere else in the app; no in-page picker.
    const currentLevelKey = userLevel
    const currentLevel    = cls.levels.find(l => l.key === currentLevelKey)
    const isHadeeth42 = cls.id === 'hadeeth' && currentLevelKey === 'beginner'
    const isUmdah = cls.id === 'hadeeth' && currentLevelKey === 'intermediate'
    const isBukhari = cls.id === 'hadeeth' && currentLevelKey === 'advanced'

    return (
      <div className="spaces-class-page">

        <div className="spaces-class-header" style={{ borderColor: cls.color }}>
          <span className="spaces-class-icon"><TabIcon name={cls.icon} /></span>
          <div>
            <h2 className="spaces-class-title">{cls.title}</h2>
            <p className="spaces-class-arabic arabic">{cls.arabicTitle}</p>
            <p className="spaces-class-desc">{cls.description}</p>
          </div>
        </div>

        {currentLevel && (
          <div className="spaces-class-content">

            <div className="spaces-class-content-header card" style={{ borderLeft: `4px solid ${currentLevel.color}` }}>
              <div className="spaces-class-content-meta">
                <span className="spaces-class-level-badge" style={{ background: currentLevel.color }}>
                  <TabIcon name={currentLevel.icon} /> {currentLevel.label}
                </span>
                <span className="spaces-class-duration">⏱ {currentLevel.duration}</span>
                <span className="spaces-class-commitment">📅 {currentLevel.commitment}</span>
              </div>
              <h3 className="spaces-class-content-title">{currentLevel.title}</h3>
              <p className="spaces-class-content-arabic arabic">{currentLevel.arabicTitle}</p>
              <p className="spaces-class-content-desc">{currentLevel.description}</p>
            </div>

            {isHadeeth42 ? (
              activeHadithNum ? renderHadeeth42Detail() : (
                <>
                  <div className="spaces-section-intro card">
                    <h3 className="spaces-section-intro-title">All 42 Hadith</h3>
                    <p className="spaces-section-intro-text">
                      Tap any hadith to read the full Arabic text, transliteration, translation, lessons, and take a 20-question test on it.
                    </p>
                  </div>
                  {renderHadeeth42List()}
                </>
              )
            ) : isUmdah ? (
              activeUmdahNum ? renderUmdahDetail() : activeUmdahChapter ? renderUmdahHadithList() : (
                <>
                  <div className="spaces-section-intro card">
                    <h3 className="spaces-section-intro-title">Umdat al-Ahkam</h3>
                    <p className="spaces-section-intro-text">
                      Hadith on rulings, organized by chapter. Browse a chapter to see its hadith.
                    </p>
                  </div>
                  {UMDAT_AL_AHKAM_CHAPTERS.length === 0 ? (
                    <div className="spaces-empty card">
                      <p className="spaces-empty-text">Content coming soon</p>
                      <p className="spaces-empty-sub">This collection is being added chapter by chapter.</p>
                    </div>
                  ) : (
                    renderUmdahChapterList()
                  )}
                </>
              )
            ) : isBukhari ? (
              activeBukhariNum ? renderBukhariDetail() : activeBukhariChapter ? renderBukhariHadithList() : (
                <>
                  <div className="spaces-section-intro card">
                    <h3 className="spaces-section-intro-title">Sahih al-Bukhari</h3>
                    <p className="spaces-section-intro-text">
                      Hadith organized by book. Browse a book to see its chapters and hadith.
                    </p>
                  </div>
                  {SAHIH_BUKHARI_CHAPTERS.length === 0 ? (
                    <div className="spaces-empty card">
                      <p className="spaces-empty-text">Content coming soon</p>
                      <p className="spaces-empty-sub">This collection is being added book by book, verified before publishing.</p>
                    </div>
                  ) : (
                    renderBukhariChapterList()
                  )}
                </>
              )
            ) : (
              <>
                {classLessonLoading ? (
                  <div className="spaces-loading"><div className="spaces-spinner" /></div>
                ) : classLesson ? (
                  renderLessonContent(classLesson)
                ) : (
                  <div className="spaces-empty card">
                    <p className="spaces-empty-text">No lesson posted yet today for this level</p>
                    <p className="spaces-empty-sub">Check back once today's lesson is posted.</p>
                  </div>
                )}

                <button
                  className="btn btn-ghost"
                  style={{ marginBottom: 16 }}
                  onClick={() => { setShowClassLessonArchive(v => !v); setSelectedArchiveLesson(null) }}
                >
                  <TabIcon name="archive" /> {showClassLessonArchive ? 'Hide' : 'Browse'} Past Lessons
                </button>

                {showClassLessonArchive && (
                  <div className="card" style={{ padding: 16, marginBottom: 16 }}>
                    {classLessonArchiveLoading ? (
                      <p>Loading…</p>
                    ) : classLessonArchive.length === 0 ? (
                      <p style={{ color: '#8a9ab0', fontSize: '0.85rem' }}>No past lessons yet for this level.</p>
                    ) : selectedArchiveLesson ? (
                      <>
                        <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setSelectedArchiveLesson(null)}>← Back to list</button>
                        {renderLessonContent(selectedArchiveLesson)}
                      </>
                    ) : (
                      <div className="spaces-archive-list">
                        {classLessonArchive.map(l => (
                          <button
                            key={l.publish_date}
                            className="spaces-archive-card"
                            onClick={() => setSelectedArchiveLesson(l)}
                          >
                            <span className="spaces-archive-icon"><TabIcon name={cls.icon} /></span>
                            <div className="spaces-archive-text">
                              <h4 className="spaces-archive-title">{l.title}</h4>
                              <p className="spaces-archive-desc">{l.publish_date}</p>
                            </div>
                            <span className="spaces-archive-arrow">→</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            <div className="spaces-class-section card spaces-class-outcome-card">
              <h4 className="spaces-class-section-title">🎯 Learning Outcome</h4>
              <p className="spaces-class-outcome-text">{currentLevel.outcome}</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="page-content spaces-page">

      <div className="spaces-header">
        {activeTab === null ? (
          <div>
            <h1 className="page-title">Spaces</h1>
            <p className="page-subtitle">فَضَاءَات — Community for serious students</p>
            {memberCount !== null && (
              <p style={{ fontSize: '0.85rem', color: '#6a8090', marginTop: 4 }}>
                <TabIcon name="people" /> {memberCount.toLocaleString()} members
              </p>
            )}
          </div>
        ) : (
          <button
            className="spaces-hub-back"
            onClick={() => setActiveTab(null)}
            data-a11y-label="Back to Spaces"
          >
            ← Spaces
          </button>
        )}
        {activeTab === 'community' && (
          <button className="spaces-new-btn" onClick={() => setShowNewPost(true)} data-a11y-label="Create a new post">
            + New Post
          </button>
        )}
      </div>

      {activeTab === null && renderHub()}

      {activeTab === 'majlis' && renderMajlis()}
      {activeTab === 'arabiyyah' && renderClass(CLASSES[0])}
      {activeTab === 'hadeeth' && renderClass(CLASSES[1])}
      {activeTab === 'accountability' && renderAccountability()}
      {activeTab === 'circles' && renderCircles()}
      {activeTab === 'tafseer' && renderTafseer()}
      {activeTab === 'examportal' && renderExamPortal()}

      {activeTab === 'community' && (
        <>

          {featured && (
            <button className="spaces-featured card" onClick={() => openPostById(featured.post.id)}>
              <div className="spaces-featured-head">
                <span className="spaces-featured-tag"><TabIcon name="award" /> Scholar Answered</span>
                <span className="spaces-post-date">{timeAgo(featured.reply.created_at)}</span>
              </div>
              <h3 className="spaces-featured-title">{featured.post.title}</h3>
              <p className="spaces-featured-answer">
                {featured.reply.body.length > 150 ? featured.reply.body.slice(0, 150) + '...' : featured.reply.body}
              </p>
              <span className="spaces-post-read">Read the full answer →</span>
            </button>
          )}

          {showNewPost && (
            <div className="spaces-modal-overlay" onClick={closeNewPostModal}>
              <div className="spaces-modal card" onClick={e => e.stopPropagation()}>
                <h3 className="spaces-modal-title">
                  {showWelcomePrompt ? "You're in — introduce yourself" : 'New Post'}
                </h3>
                {showWelcomePrompt && (
                  <p style={{ fontSize: '0.88rem', color: '#6a8090', marginBottom: 14 }}>
                    Your subscription is active. Before anything else, say salaam to the community and share what you're here to learn.
                  </p>
                )}
                {error && <div className="spaces-error">{error}</div>}
                <div className="spaces-field">
                  <label className="spaces-label">Category</label>
                  <select
                    className="spaces-select"
                    value={newPost.category}
                    onChange={e => setNewPost({ ...newPost, category: e.target.value })}
                  >
                    {CATEGORIES.filter(c => c.key !== 'all').map(c => (
                      <option key={c.key} value={c.key}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div className="spaces-field">
                  <label className="spaces-label">Title</label>
                  <input
                    type="text"
                    className="spaces-input"
                    placeholder="Your question or topic..."
                    value={newPost.title}
                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="spaces-field">
                  <label className="spaces-label">Body</label>
                  <textarea
                    className="spaces-textarea"
                    placeholder="Explain in detail..."
                    value={newPost.body}
                    onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                    rows={5}
                  />
                </div>
                <div className="spaces-modal-actions">
                  <button className="spaces-cancel-btn" onClick={closeNewPostModal}>Cancel</button>
                  <button className="spaces-submit-btn" onClick={submitPost} disabled={posting}>
                    {posting ? 'Posting...' : 'Post →'}
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="spaces-categories">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`spaces-cat-btn ${category === c.key ? 'spaces-cat-btn--active' : ''}`}
                onClick={() => setCategory(c.key)}
              >
                <span className="spaces-cat-dot" style={{ background: c.color }} />
                <TabIcon name={c.icon} /> {c.label}
              </button>
            ))}
          </div>

          {postsLoading ? (
            <div className="spaces-loading"><div className="spaces-spinner" /></div>
          ) : postsError ? (
            <div className="spaces-error card" style={{ padding: 20 }}>
              Couldn't load posts: {postsError}
            </div>
          ) : posts.length === 0 ? (
            <div className="spaces-empty card">
              <p className="spaces-empty-text">No posts yet in this category.</p>
              <p className="spaces-empty-sub">Be the first to start a discussion.</p>
            </div>
          ) : (
            <div className="spaces-posts">
              {posts.map(post => {
                const cat = catOf(post.category)
                const isNew = lastVisit && new Date(post.created_at) > lastVisit
                return (
                  <button
                    key={post.id}
                    className="spaces-post-card card"
                    onClick={() => openPost(post)}
                    data-a11y-label={`${post.title}. ${post.category} category, ${post.reply_count} ${post.reply_count === 1 ? 'reply' : 'replies'}.`}
                  >
                    <div className="spaces-post-top">
                      <span className="spaces-cat-badge">
                        <span className="spaces-cat-dot" style={{ background: cat?.color }} />
                        <TabIcon name={cat?.icon} /> {post.category}
                      </span>
                      <span className="spaces-post-date">
                        {isNew && <span className="spaces-new-dot" title="New since your last visit" />}
                        {timeAgo(post.created_at)}
                      </span>
                    </div>
                    <h3 className="spaces-post-title">{post.title}</h3>
                    <p className="spaces-post-preview">
                      {post.body.length > 120 ? post.body.slice(0, 120) + '...' : post.body}
                    </p>
                    <div className="spaces-post-footer">
                      <span className="spaces-post-replies">
                        <TabIcon name="chat" /> {post.reply_count} {post.reply_count === 1 ? 'reply' : 'replies'}
                      </span>
                      <span className="spaces-post-read">Read Discussion →</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}