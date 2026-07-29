import { BadgeStrip } from '../components/Badges.jsx'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './Spaces.css'

// ── Line-art icons, matching Sidebar's icon style ────────────────
// Used for the main tab bar and schedule cards — the two spots where
// emoji were sitting right alongside the sidebar's clean stroke icons
// and looked visually inconsistent.
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
}

const TabIcon = ({ name }) => <span className="spaces-tab-icon" aria-hidden="true">{ICONS[name]}</span>

const CATEGORIES = [
  { key: 'all',       label: 'All',       arabic: 'الكُلّ',      icon: '🌐', color: '#094570' },
  { key: 'fiqh',      label: 'Fiqh',      arabic: 'الفِقْه',     icon: '⚖️', color: '#5DCAA5' },
  { key: 'seerah',    label: 'Seerah',    arabic: 'السِّيرَة',    icon: '🌙', color: '#AFA9EC' },
  { key: 'arabiyyah', label: 'Arabiyyah', arabic: 'العَرَبِيَّة', icon: '✍️', color: '#85B7EB' },
  { key: 'tajweed',   label: 'Tajweed',   arabic: 'التَّجْوِيد',  icon: '🎙️', color: '#F0997B' },
  { key: 'aqeedah',   label: 'Aqeedah',   arabic: 'العَقِيدَة',   icon: '☪️', color: '#FAC775' },
  { key: 'general',   label: 'General',   arabic: 'عَامّ',        icon: '💬', color: '#8FD9C4' },
]

const CLASS_SCHEDULE = [
  { classId: 'arabiyyah', title: 'Arabiyyah Class', arabic: 'فَصْلُ العَرَبِيَّة', icon: 'arabiyyah', day: 0, hour: 21, minute: 0 },
  { classId: 'hadeeth',   title: 'Hadeeth Class',   arabic: 'فَصْلُ الحَدِيث',    icon: 'hadeeth', day: 6, hour: 21, minute: 0 },
]

const CIRCLES = [
  { id: 'abu_bakr', name: 'Halaqah Abi Bakr', arabicName: 'حَلَقَةُ أَبِي بَكْر', icon: '🕊️', blurb: 'Named after Abu Bakr As-Siddiq, the first Caliph and the Prophet\'s closest companion — known for his unwavering trust in Allah.' },
  { id: 'umar', name: 'Halaqah Umar', arabicName: 'حَلَقَةُ عُمَر', icon: '⚔️', blurb: 'Named after Umar ibn Al-Khattab, the second Caliph — known for his justice and strength in upholding the truth.' },
  { id: 'uthman', name: 'Halaqah Uthman', arabicName: 'حَلَقَةُ عُثْمَان', icon: '📖', blurb: 'Named after Uthman ibn Affan, the third Caliph — known for his generosity and compiling the Quran into a single mushaf.' },
  { id: 'ali', name: 'Halaqah Ali', arabicName: 'حَلَقَةُ عَلِيّ', icon: '🗡️', blurb: 'Named after Ali ibn Abi Talib, the fourth Caliph — known for his knowledge and closeness to the Prophet ﷺ.' },
  { id: 'talhah', name: 'Halaqah Talhah', arabicName: 'حَلَقَةُ طَلْحَة', icon: '🌿', blurb: 'Named after Talhah ibn Ubaydillah, one of the ten promised Paradise — known for his generosity and bravery at Uhud.' },
]

const CLASSES = [
  {
    id: 'arabiyyah', title: 'Arabiyyah Class', arabicTitle: 'فَصْلُ العَرَبِيَّة', icon: '✍️',
    description: 'A structured Arabic language programme from absolute beginner to mastery of the classical sciences.',
    color: '#094570',
    levels: [
      { key: 'beginner', label: 'Beginner', arabic: 'مُبْتَدِئ', color: '#2e7d32', icon: '🌱',
        title: 'Duruus Lughahtil-Arabiyyah', arabicTitle: 'دُرُوسُ اللُّغَةِ العَرَبِيَّة',
        description: 'Complete study of the three volumes of Duruus Al-Lughah Al-Arabiyyah by Dr V. Abdur Raheem — the gold standard for learning Arabic from scratch. Covers reading, writing, vocabulary, basic grammar, and simple conversation.',
        curriculum: ['Volume 1 — Arabic alphabet, vowels, basic nouns and verbs, simple sentences', 'Volume 2 — Expanded grammar, verb conjugation, common expressions', 'Volume 3 — Intermediate grammar, reading comprehension, composition', 'Weekly vocabulary memorization and dictation tests', 'Simple Arabic composition exercises from Week 8'],
        outcome: 'Read Arabic text with vowels fluently, understand basic Quranic vocabulary, and write simple Arabic sentences.', duration: '6 months', commitment: '5 hours per week' },
      { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', icon: '📖',
        title: 'Nahw, Sarf and Insha', arabicTitle: 'النَّحْو وَالصَّرْف وَالإِنْشَاء',
        description: 'Systematic study of Arabic grammar (Nahw), morphology (Sarf), and Arabic composition (Insha). Students move from passive reading to active command of the language structures used in Islamic scholarship.',
        curriculum: ["Nahw — Al-Ajrumiyyah with full i'rab practice on Quranic verses", 'Nahw — Qatr An-Nada by Ibn Hisham with commentary', 'Sarf — Shudha Al-Urf by Al-Hamlawi, all verb forms and patterns', 'Insha — Guided Arabic composition, letter writing, and paragraph construction', "Weekly i'rab exercises on selected Quranic passages", 'Monthly composition assignments reviewed and corrected'],
        outcome: "Perform full i'rab of Quranic verses, understand the morphological structure of any Arabic word, and write correct Arabic prose.", duration: '8 months', commitment: '7 hours per week' },
      { key: 'advanced', label: 'Advanced', arabic: 'مُتَقَدِّم', color: '#6a1b9a', icon: '🏛️',
        title: 'Classical Sciences — Alfiyyah, Sarf, Balaghah', arabicTitle: 'الأَلْفِيَّة وَالصَّرْف وَالبَلَاغَة',
        description: 'Study of the classical Arabic sciences at the level of the traditional Madrasah curriculum. This level produces scholars capable of reading unvowelled classical texts independently.',
        curriculum: ['Alfiyyah Ibn Malik — the 1,000-line poem covering all of Arabic grammar with commentary of Ibn Aqil', 'Advanced Sarf — Maqsud fi Al-Sarf and Al-Kaylani with all derived forms', 'Balaghah — Al-Balaghatul-Wadihah', 'Reading of classical unvowelled texts', 'Weekly memorization of Alfiyyah verses with i\'rab', 'Independent reading and translation of classical Arabic texts'],
        outcome: "Read unvowelled classical Arabic texts independently, understand Alfiyyah Ibn Malik, and apply Balaghah principles to Quranic analysis.", duration: '12 months', commitment: '10 hours per week' },
    ],
  },
  {
    id: 'hadeeth', title: 'Hadeeth Class', arabicTitle: 'فَصْلُ الحَدِيث', icon: '📜',
    description: 'A structured Hadeeth memorization and study programme — from the Forty of An-Nawawi to the great collections of the Sunnah.',
    color: '#7b3f00',
    levels: [
      { key: 'beginner', label: 'Beginner', arabic: 'مُبْتَدِئ', color: '#2e7d32', icon: '🌱',
        title: "Al-Arba'oon An-Nawawiyyah", arabicTitle: 'الأَرْبَعُونَ النَّوَوِيَّة',
        description: 'Complete memorization and study of the Forty Hadith of Imam An-Nawawi — the foundational text of Islamic learning for over seven centuries. Every hadith is memorized in Arabic with its chain, studied for its meanings, and applied to daily life.',
        curriculum: ['Memorization of all 42 hadith with Arabic text and sanad', "Study of Imam An-Nawawi's commentary on each hadith", 'Understanding the fiqh and aqeedah derived from each hadith', 'Weekly recitation test — 2 hadith per week minimum', 'Final examination — recite all 42 from memory'],
        outcome: 'Memorize all 42 hadith of An-Nawawi with their Arabic text, understand their meanings and scholarly commentary, and extract basic Islamic rulings from them.', duration: '6 months', commitment: '3 hours per week',
        hadiths: [
          { num: 1,  text: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّات', translation: 'Actions are by intentions' },
          { num: 2,  text: 'الإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّه', translation: 'Islam is that you testify there is no god but Allah' },
          { num: 3,  text: 'بُنِيَ الإِسْلَامُ عَلَى خَمْس', translation: 'Islam was built on five' },
          { num: 4,  text: 'إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّه', translation: "The creation of each of you is gathered in his mother's womb" },
          { num: 5,  text: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْه', translation: 'Whoever introduces into this affair of ours that which is not of it' },
          { num: 6,  text: 'الحَلَالُ بَيِّنٌ وَالحَرَامُ بَيِّن', translation: 'The halal is clear and the haram is clear' },
          { num: 7,  text: 'الدِّينُ النَّصِيحَة', translation: 'The religion is sincere advice' },
          { num: 8,  text: 'أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا', translation: 'I was commanded to fight the people until they testify' },
          { num: 9,  text: 'مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوه', translation: 'Whatever I have forbidden you, avoid it' },
          { num: 10, text: 'إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا', translation: 'Allah is pure and accepts only what is pure' },
        ] },
      { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100', icon: '📖',
        title: 'Bulugh Al-Maram and Umdat Al-Ahkam', arabicTitle: 'بُلُوغُ المَرَام وَعُمْدَةُ الأَحْكَام',
        description: 'Memorization and study of the two greatest collections of legal hadith — Bulugh Al-Maram by Ibn Hajar Al-Asqalani and Umdatul-Ahkam by Ibn Qudamah. These books form the backbone of fiqh al-hadith study in traditional Islamic scholarship.',
        curriculum: ['Umdatul-Ahkam — 414 hadith on acts of worship and transactions, memorization and study', 'Bulughul-Maram — systematic study of all chapters', 'Weekly memorization target — 5 hadith per week minimum', 'Monthly written examination on chapters covered'],
        outcome: "Memorize core legal hadith from both texts, understand how scholars derive fiqh rulings from hadith, and read Ibn Hajar's Arabic commentary.", duration: '10 months', commitment: '6 hours per week' },
      { key: 'advanced', label: 'Advanced', arabic: 'مُتَقَدِّم', color: '#6a1b9a', icon: '🏛️',
        title: 'Sahih Bukhari Memorization', arabicTitle: 'حِفْظُ صَحِيح البُخَارِي',
        description: 'The pinnacle of hadith study — systematic memorization and deep study of Sahih Al-Bukhari, the most authentic book after the Quran. Students study with Fath Al-Bari, the greatest commentary on Al-Bukhari by Ibn Hajar Al-Asqalani.',
        curriculum: ["Memorization of selected hadith from each chapter of Sahih Bukhari (Kitab Al-Iman through Kitab Al-Jami')", 'Study of Fath Al-Bari by Ibn Hajar Al-Asqalani — chapter by chapter', 'Hadith sciences (Mustalahul-Hadith) — understanding chains, narrators, and authentication', 'Independent research assignments on specific hadith and their commentaries'],
        outcome: 'Memorize 200+ hadith from Sahih Al-Bukhari, read and understand hadith sciences at an advanced level.', duration: '18 months', commitment: '12 hours per week' },
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

    // Surah/ayah identification — quotes a snippet of the translation
    // so it's clear which day's verse is being asked about, now that
    // a single test can span several different days' entries.
    if (others.length >= 3) {
      const wrongLabels = shuffleArr(others).slice(0, 3).map(e => `${e.surah_name} ${e.surah_num}:${e.ayah_num}`)
      raw.push({
        question: `Which surah and ayah is this verse from: "${(entry.translation || '').slice(0, 70)}..."?`,
        optionPool: [`${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}`, ...wrongLabels],
        correctText: `${entry.surah_name} ${entry.surah_num}:${entry.ayah_num}`,
      })
    }

    // Lesson-based questions, one per lesson in this entry
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

    // Fallback fill-in-the-blank if this entry didn't yield enough
    // lesson-based questions on its own
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

  // Shuffle across ALL days' candidate questions together, then cap
  // at 20 — this is what makes it a genuine mixed review rather than
  // just today's entry repeated in different phrasings.
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

export default function Spaces({ user }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
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
  const [activeTab,      setActiveTab]      = useState('community')
  const [classLevel,     setClassLevel]     = useState({ arabiyyah: 'beginner', hadeeth: 'beginner' })
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
  const [roster, setRoster] = useState([])
  const [accountabilityLoading, setAccountabilityLoading] = useState(false)
  const [accountabilityError, setAccountabilityError] = useState(null)
  const [pairing, setPairing] = useState(false)
  const [unpairing, setUnpairing] = useState(false)

  // ── Match request state ──────────────────────────────────────
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

  const [majlisPosts, setMajlisPosts] = useState([])
  const [majlisLoading, setMajlisLoading] = useState(false)
  const [activeMajlisPost, setActiveMajlisPost] = useState(null)
  const [majlisReplies, setMajlisReplies] = useState([])
  const [newMajlisReply, setNewMajlisReply] = useState('')
  const [postingMajlisReply, setPostingMajlisReply] = useState(false)

  // ── Weekly Tests state (Arabiyyah / Tafseer / Hadeeth) ────────
  const [weeklyTrack, setWeeklyTrack] = useState('arabiyyah')
  const [weeklyTests, setWeeklyTests] = useState([])
  const [weeklyTestsLoading, setWeeklyTestsLoading] = useState(false)
  const [weeklySelectedTest, setWeeklySelectedTest] = useState(null)
  const [weeklyPhase, setWeeklyPhase] = useState('select') // select | active | grading | result
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
      } else {
        setAvailableMembers([])
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

  // ── Weekly Tests functions ────────────────────────────────────
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
  }, [user, checkSubscription, checkReferralAccess])

  const isPaid = useMemo(
    () => subscription?.status === 'active' || hasReferralAccess,
    [subscription, hasReferralAccess]
  )

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
    if (activeTab === 'arabiyyah') { fetchClassLesson('arabiyyah', classLevel.arabiyyah); fetchClassLessonArchive('arabiyyah', classLevel.arabiyyah) }
    if (activeTab === 'hadeeth') { fetchClassLesson('hadeeth', classLevel.hadeeth); fetchClassLessonArchive('hadeeth', classLevel.hadeeth) }
    if (activeTab === 'majlis') fetchMajlisPosts()
    if (activeTab === 'examportal' && weeklyPhase === 'select') fetchWeeklyTests()
  }, [activeTab, isPaid, fetchAccountability, fetchCircles, fetchTafseer, fetchTafseerArchive, fetchClassLesson, fetchClassLessonArchive, fetchMajlisPosts, classLevel, weeklyPhase, fetchWeeklyTests])

  // Refetch when the track switches while on the select screen
  useEffect(() => {
    if (activeTab === 'examportal' && isPaid && weeklyPhase === 'select') fetchWeeklyTests()
  }, [weeklyTrack, activeTab, isPaid, weeklyPhase, fetchWeeklyTests])

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

  const handlePaystack = async () => {
  try {
    const { data, error } = await supabase.functions.invoke('initialize-payment', {
      body: { product: 'spaces' },
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
        <h3 className="spaces-section-intro-title">🤝 Accountability Partners</h3>
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
          <p className="spaces-empty-icon">🤝</p>
          <p className="spaces-empty-text">Set your gender in Profile first</p>
          <p className="spaces-empty-sub">
            Accountability pairing only ever matches members of the same gender —
            <a href="/profile"> head to your Profile</a> to set it, then come back here.
          </p>
        </div>
      ) : myPair ? (
        <>
          <div className="spaces-pair-card card">
            <span className="spaces-pair-badge">✅ Paired</span>
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

          <div className="spaces-circle-messages">
            {pairMessages.length === 0 ? (
              <div className="spaces-no-replies">No messages yet. Say salaam and set your first check-in.</div>
            ) : pairMessages.map((m) => (
              <div
                key={m.id}
                className="spaces-reply card"
                style={m.user_id === user.id ? { borderLeft: '3px solid #094570' } : undefined}
              >
                <div className="spaces-reply-header">
                  <div className="spaces-reply-avatar" style={{ background: '#e8f0f8' }}>
                    <span style={{ color: '#094570' }}>{getInitials(m.user_id)}</span>
                  </div>
                  <div>
                    <p className="spaces-reply-author">{m.user_id === user.id ? 'You' : 'Your Partner'}</p>
                    <p className="spaces-reply-date">{timeAgo(m.created_at)}</p>
                  </div>
                </div>
                <p className="spaces-reply-body">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="spaces-reply-input card">
            <textarea
              className="spaces-textarea"
              placeholder="Message your accountability partner..."
              value={pairMsgInput}
              onChange={e => setPairMsgInput(e.target.value)}
              rows={3}
            />
            <button
              className="spaces-submit-btn"
              onClick={submitPairMessage}
              disabled={postingPairMsg || !pairMsgInput.trim()}
            >
              {postingPairMsg ? 'Sending...' : 'Send →'}
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="spaces-available-label">Members without a partner — choose one to pair up</p>
          {availableMembers.length === 0 ? (
            <div className="spaces-empty card">
              <p className="spaces-empty-icon">🤝</p>
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
        <h3 className="spaces-section-intro-title">📢 Match Requests</h3>
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
        <h3 className="spaces-section-intro-title">📋 Who's Paired, Who's Seeking</h3>
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
        <h3 className="spaces-section-intro-title">🕌 Sahaabah Circles</h3>
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
          <div className="spaces-circle-grid">
            {CIRCLES.map(c => (
              <button
                key={c.id}
                className="spaces-circle-card card"
                onClick={() => switchingCircleMode ? switchCircle(c.id) : joinCircle(c.id)}
                disabled={joiningCircle || c.id === myCircle}
              >
                <span className="spaces-circle-icon">{c.icon}</span>
                <h4 className="spaces-circle-name">{c.name}</h4>
                <p className="spaces-circle-arabic arabic">{c.arabicName}</p>
                <p className="spaces-circle-blurb">{c.blurb}</p>
                <span className="spaces-circle-count">
                  {circleCounts[c.id] || 0} members{c.id === myCircle ? ' · current' : ''}
                </span>
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
          <div className="spaces-circle-header card">
            <span className="spaces-circle-icon">{CIRCLES.find(c => c.id === myCircle)?.icon}</span>
            <div style={{ flex: 1 }}>
              <h3 className="spaces-circle-name">{CIRCLES.find(c => c.id === myCircle)?.name}</h3>
              <p className="spaces-circle-arabic arabic">{CIRCLES.find(c => c.id === myCircle)?.arabicName}</p>
            </div>
            <button
              className="btn btn-ghost"
              onClick={() => setSwitchingCircleMode(true)}
            >
              Switch Circle
            </button>
          </div>

          <div className="spaces-circle-messages">
            {circleMessages.length === 0 ? (
              <div className="spaces-no-replies">No messages yet. Start the conversation.</div>
            ) : circleMessages.map((m, i) => (
              <div key={i} className="spaces-reply card">
                <div className="spaces-reply-header">
                  <div className="spaces-reply-avatar" style={{ background: '#e8f0f8' }}>
                    <span style={{ color: '#094570' }}>{getInitials(m.user_id)}</span>
                  </div>
                  <div>
                    <p className="spaces-reply-author">Member</p>
                    <p className="spaces-reply-date">{timeAgo(m.created_at)}</p>
                  </div>
                </div>
                <p className="spaces-reply-body">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="spaces-reply-input card">
            <textarea
              className="spaces-textarea"
              placeholder="Share something with your circle..."
              value={circleMsgInput}
              onChange={e => setCircleMsgInput(e.target.value)}
              rows={3}
            />
            <button
              className="spaces-submit-btn"
              onClick={submitCircleMessage}
              disabled={postingCircleMsg || !circleMsgInput.trim()}
            >
              {postingCircleMsg ? 'Posting...' : 'Post →'}
            </button>
          </div>
        </>
      )}
    </div>
  )

  const renderLessonContent = (lesson) => (
    <div className="spaces-tafseer-card card">
      <h4 className="spaces-class-section-title">📖 {lesson.title}</h4>
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
        <h4 className="spaces-class-section-title">📖 Tafseer</h4>
        <p className="spaces-tafseer-body">{entry.tafseer_body}</p>
      </div>
      {Array.isArray(entry.lessons) && entry.lessons.length > 0 && (
        <div className="spaces-tafseer-card card">
          <h4 className="spaces-class-section-title">💡 Lessons</h4>
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
            <span className="quiz-result-icon">🎯</span>
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

    // ── "view" phase from here on — today's entry (if any) + archive ──
    return (
      <div className="spaces-tafseer-view">
        {todayTafseer ? (
          <>
            {renderTafseerReadOnly(todayTafseer)}

            {tafseerAlreadyDone ? (
              <div className="spaces-alldone card">✅ You've completed today's test — {tafseerPastScore}</div>
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
            <p className="spaces-empty-icon">📖</p>
            <p className="spaces-empty-text">No tafseer posted yet today</p>
            <p className="spaces-empty-sub">Check back later — a new verse is shared daily. In the meantime, browse past entries below.</p>
          </div>
        )}

        <button
          className="btn btn-ghost"
          style={{ marginTop: 16 }}
          onClick={() => { setShowTafseerArchive(v => !v); setSelectedArchiveTafseer(null) }}
        >
          📚 {showTafseerArchive ? 'Hide' : 'Browse'} Past Tafseer Entries
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {tafseerArchive.map(t => (
                  <button
                    key={t.publish_date}
                    className="spaces-disc-btn"
                    style={{ textAlign: 'left', padding: '10px 14px' }}
                    onClick={() => setSelectedArchiveTafseer(t)}
                  >
                    <strong>{t.publish_date}</strong> — {t.surah_name} {t.surah_num}:{t.ayah_num}
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
          {activeMajlisPost.pinned && <span className="spaces-cat-badge" style={{ marginBottom: 10 }}>📌 Pinned</span>}
          <h3 style={{ color: '#094570', marginBottom: 6 }}>{activeMajlisPost.title}</h3>
          <p style={{ fontSize: '0.78rem', color: '#8a9ab0', marginBottom: 16 }}>{formatDate(activeMajlisPost.created_at)}</p>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: 24 }}>{activeMajlisPost.body}</p>

          <h4 style={{ fontSize: '0.95rem', marginBottom: 12 }}>Questions &amp; Discussion ({majlisReplies.length})</h4>
          {majlisReplies.length === 0 ? (
            <p style={{ color: '#8a9ab0', fontSize: '0.85rem', marginBottom: 16 }}>No questions yet. Ask below if anything's unclear.</p>
          ) : majlisReplies.map(r => (
            <div key={r.id} className={`spaces-reply card ${r.is_admin_reply ? 'spaces-reply--scholar' : ''}`} style={{ marginBottom: 10 }}>
              {r.is_admin_reply && <span className="spaces-scholar-badge">Admin</span>}
              <p className="spaces-reply-body" style={{ whiteSpace: 'pre-wrap' }}>{r.body}</p>
            </div>
          ))}

          <textarea
            className="spaces-textarea"
            placeholder="Ask a question about this announcement..."
            value={newMajlisReply}
            onChange={e => setNewMajlisReply(e.target.value)}
            rows={3}
            style={{ marginTop: 16 }}
          />
          <button className="spaces-submit-btn" onClick={submitMajlisReply} disabled={postingMajlisReply || !newMajlisReply.trim()}>
            {postingMajlisReply ? 'Posting...' : 'Ask →'}
          </button>
        </div>
      )
    }

    return (
      <div className="spaces-class-section card">
        <div className="spaces-section-intro card" style={{ marginBottom: 20 }}>
          <h3 className="spaces-section-intro-title">🕌 Majlis</h3>
          <p className="spaces-section-intro-text">
            The general meeting hall, updates, announcements, and important things from the Sual team.
            Ask a question on anything that isn't clear, right on the post itself.
          </p>
        </div>

        {majlisLoading ? (
          <div className="spaces-loading"><div className="spaces-spinner" /></div>
        ) : majlisPosts.length === 0 ? (
          <div className="spaces-empty card">
            <p className="spaces-empty-icon">🕌</p>
            <p className="spaces-empty-text">No announcements yet.</p>
          </div>
        ) : (
          <div className="spaces-posts">
            {majlisPosts.map(post => (
              <button key={post.id} className="spaces-post-card card" onClick={() => openMajlisPost(post)}>
                <div className="spaces-post-top">
                  {post.pinned && <span className="spaces-cat-badge">📌 Pinned</span>}
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

  const TRACK_LABELS = { arabiyyah: '✍️ Arabiyyah', tafseer: '📖 Tafseer', hadeeth: '📜 Hadeeth' }

  const renderExamPortal = () => {
    if (weeklyPhase === 'select') {
      return (
        <div className="spaces-class-section card">
          <div className="spaces-section-intro card" style={{ marginBottom: 20 }}>
            <h3 className="spaces-section-intro-title">📝 Weekly Tests</h3>
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
              <p className="spaces-empty-icon">📝</p>
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
                      ✅ Completed — MCQ {t.my_attempt.mcq_score}/{t.my_attempt.mcq_total}
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

    // ── result ─────────────────────────────────────────────────
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
                  <div className="quiz-review-ans">{r.is_correct ? '✅ Correct' : '❌ Incorrect'}</div>
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
              {cat?.icon} {activePost.category}
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
                    {r.is_scholar_answer ? '🎓' : getInitials(r.user_id)}
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
            👥 {memberCount.toLocaleString()} members
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

        <p className="spaces-schedule-label">This week in Spaces</p>
        {renderSchedule()}

        <div className="spaces-paywall">
          <div className="spaces-paywall-icon">🕌</div>
          <h2 className="spaces-paywall-title">Members Only</h2>
          <p className="spaces-paywall-desc">
            Spaces is an exclusive community for paid members. Ask questions, share knowledge,
            get scholar answers, and take structured Arabic and Hadeeth courses.
          </p>
          <div className="spaces-features">
            {[
              { icon: '🎓', text: 'Direct answers from a qualified scholar' },
              { icon: '✍️', text: 'Structured Arabiyyah courses — Beginner to Advanced' },
              { icon: '📜', text: 'Structured Hadeeth courses — An-Nawawi to Sahih Al-Bukhari' },
              { icon: '💬', text: 'Threaded community discussions' },
              { icon: '🕌', text: 'Majlis — announcements and updates from the Sual team' },
              { icon: '🤝', text: 'Accountability partners and Sahaabah circles' },
              { icon: '📖', text: 'A new tafseer verse and short test every day' },
              { icon: '📝', text: 'Weekly tests for Arabiyyah, Tafseer, and Hadeeth — graded automatically' },
            ].map((f, i) => (
              <div key={i} className="spaces-feature-item">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div className="spaces-price-card">
            <div className="spaces-price">
              <span className="spaces-currency">₦</span>
              <span className="spaces-amount">2,500</span>
              <span className="spaces-period">/month</span>
            </div>
            <p className="spaces-price-note">Cancel anytime. Billed monthly.</p>
            {error && <div className="spaces-error" style={{ marginBottom: 12 }}>{error}</div>}
            <button className="spaces-pay-btn" onClick={handlePaystack}>
              Subscribe to Spaces →
            </button>
          </div>
          <p className="spaces-paywall-hadith">
            "Whoever Allah wants good for, He gives him understanding of the religion."
            <br /><span>Sahih Bukhari 71</span>
          </p>
        </div>
      </div>
    )
  }

  const renderClass = (cls) => {
    const currentLevelKey = classLevel[cls.id]
    const currentLevel    = cls.levels.find(l => l.key === currentLevelKey)

    return (
      <div className="spaces-class-page">

        <div className="spaces-class-header" style={{ borderColor: cls.color }}>
          <span className="spaces-class-icon">{cls.icon}</span>
          <div>
            <h2 className="spaces-class-title">{cls.title}</h2>
            <p className="spaces-class-arabic arabic">{cls.arabicTitle}</p>
            <p className="spaces-class-desc">{cls.description}</p>
          </div>
        </div>

        <div className="spaces-class-levels">
          {cls.levels.map(lv => (
            <button
              key={lv.key}
              className={`spaces-class-level-btn ${currentLevelKey === lv.key ? 'spaces-class-level-btn--active' : ''}`}
              style={currentLevelKey === lv.key ? { borderColor: lv.color, color: lv.color, background: '#fff' } : {}}
              onClick={() => setClassLevel(prev => ({ ...prev, [cls.id]: lv.key }))}
            >
              {lv.icon} {lv.label}
              <span className="spaces-class-level-arabic arabic">{lv.arabic}</span>
            </button>
          ))}
        </div>

        {currentLevel && (
          <div className="spaces-class-content">

            <div className="spaces-class-content-header card" style={{ borderLeft: `4px solid ${currentLevel.color}` }}>
              <div className="spaces-class-content-meta">
                <span className="spaces-class-level-badge" style={{ background: currentLevel.color }}>
                  {currentLevel.icon} {currentLevel.label}
                </span>
                <span className="spaces-class-duration">⏱ {currentLevel.duration}</span>
                <span className="spaces-class-commitment">📅 {currentLevel.commitment}</span>
              </div>
              <h3 className="spaces-class-content-title">{currentLevel.title}</h3>
              <p className="spaces-class-content-arabic arabic">{currentLevel.arabicTitle}</p>
              <p className="spaces-class-content-desc">{currentLevel.description}</p>
            </div>

            {classLessonLoading ? (
              <div className="spaces-loading"><div className="spaces-spinner" /></div>
            ) : classLesson ? (
              renderLessonContent(classLesson)
            ) : (
              <div className="spaces-empty card">
                <p className="spaces-empty-icon">📖</p>
                <p className="spaces-empty-text">No lesson posted yet today for this level</p>
                <p className="spaces-empty-sub">Check My Courses for structured, self-paced chapters in the meantime.</p>
              </div>
            )}

            <button
              className="btn btn-ghost"
              style={{ marginBottom: 16 }}
              onClick={() => { setShowClassLessonArchive(v => !v); setSelectedArchiveLesson(null) }}
            >
              📚 {showClassLessonArchive ? 'Hide' : 'Browse'} Past Lessons
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {classLessonArchive.map(l => (
                      <button
                        key={l.publish_date}
                        className="spaces-disc-btn"
                        style={{ textAlign: 'left', padding: '10px 14px' }}
                        onClick={() => setSelectedArchiveLesson(l)}
                      >
                        <strong>{l.publish_date}</strong> — {l.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="spaces-class-section card">
              <h4 className="spaces-class-section-title">📋 Curriculum</h4>
              <ul className="spaces-class-curriculum">
                {currentLevel.curriculum.map((item, i) => (
                  <li key={i} className="spaces-class-curriculum-item">
                    <span className="spaces-class-curriculum-num">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spaces-class-section card spaces-class-outcome-card">
              <h4 className="spaces-class-section-title">🎯 Learning Outcome</h4>
              <p className="spaces-class-outcome-text">{currentLevel.outcome}</p>
            </div>

            {currentLevel.hadiths && (
              <div className="spaces-class-section card">
                <h4 className="spaces-class-section-title">📜 Sample Hadith — First Ten</h4>
                <p className="spaces-class-hadith-note">
                  Below are the first ten hadith of the Arba'oon An-Nawawiyyah. All 42 will be memorized by end of programme.
                </p>
                <div className="spaces-hadith-list">
                  {currentLevel.hadiths.map(h => (
                    <div key={h.num} className="spaces-hadith-item">
                      <span className="spaces-hadith-num">{h.num}</span>
                      <div>
                        <p className="spaces-hadith-arabic arabic">{h.text}</p>
                        <p className="spaces-hadith-translation">{h.translation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="spaces-class-cta card">
              <p className="spaces-class-cta-text">
                Want to work through this level at your own pace, chapter by chapter, with progress tracked automatically?
              </p>
              <button className="spaces-submit-btn" onClick={() => navigate('/lms')}>
                Go to My Courses →
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="page-content spaces-page">

      <div className="spaces-header">
        <div>
          <h1 className="page-title">Spaces</h1>
          <p className="page-subtitle">فَضَاءَات — Community for serious students</p>
          {memberCount !== null && (
            <p style={{ fontSize: '0.85rem', color: '#6a8090', marginTop: 4 }}>
              👥 {memberCount.toLocaleString()} members
            </p>
          )}
        </div>
        {activeTab === 'community' && (
          <button className="spaces-new-btn" onClick={() => setShowNewPost(true)}>
            + New Post
          </button>
        )}
      </div>

      <div className="spaces-main-tabs">
        {[
          { key: 'community',      label: 'Community',      icon: 'chat' },
          { key: 'majlis',         label: 'Majlis',         icon: 'majlis' },
          { key: 'arabiyyah',      label: 'Arabiyyah Class', icon: 'arabiyyah' },
          { key: 'hadeeth',        label: 'Hadeeth Class',   icon: 'hadeeth' },
          { key: 'accountability', label: 'Accountability',  icon: 'accountability' },
          { key: 'circles',        label: 'Circles',         icon: 'circles' },
          { key: 'tafseer',        label: 'Daily Tafseer',   icon: 'tafseer' },
          { key: 'examportal',     label: 'Weekly Tests',    icon: 'weeklyTests' },
        ].map(t => (
          <button
            key={t.key}
            className={`spaces-main-tab ${activeTab === t.key ? 'spaces-main-tab--active' : ''}`}
            onClick={() => setActiveTab(t.key)}
          >
            <TabIcon name={t.icon} /> {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'majlis' && renderMajlis()}
      {activeTab === 'arabiyyah' && renderClass(CLASSES[0])}
      {activeTab === 'hadeeth' && renderClass(CLASSES[1])}
      {activeTab === 'accountability' && renderAccountability()}
      {activeTab === 'circles' && renderCircles()}
      {activeTab === 'tafseer' && renderTafseer()}
      {activeTab === 'examportal' && renderExamPortal()}

      {activeTab === 'community' && (
        <>
          {renderSchedule()}

          {featured && (
            <button className="spaces-featured card" onClick={() => openPostById(featured.post.id)}>
              <div className="spaces-featured-head">
                <span className="spaces-featured-tag">🎓 Scholar Answered</span>
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
                      <option key={c.key} value={c.key}>{c.icon} {c.label}</option>
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
                {c.icon} {c.label}
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
              <p className="spaces-empty-icon">💬</p>
              <p className="spaces-empty-text">No posts yet in this category.</p>
              <p className="spaces-empty-sub">Be the first to start a discussion.</p>
            </div>
          ) : (
            <div className="spaces-posts">
              {posts.map(post => {
                const cat = catOf(post.category)
                const isNew = lastVisit && new Date(post.created_at) > lastVisit
                return (
                  <button key={post.id} className="spaces-post-card card" onClick={() => openPost(post)}>
                    <div className="spaces-post-top">
                      <span className="spaces-cat-badge">
                        <span className="spaces-cat-dot" style={{ background: cat?.color }} />
                        {cat?.icon} {post.category}
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
                        💬 {post.reply_count} {post.reply_count === 1 ? 'reply' : 'replies'}
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