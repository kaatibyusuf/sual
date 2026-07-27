import Puzzle from './pages/Puzzle.jsx'
import { captureReferralFromUrl, redeemStoredReferral } from './lib/referral.js'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './lib/supabase.js'
import Sidebar from './components/Sidebar.jsx'
import Toolbar from './components/Toolbar.jsx'
import BottomNav from './components/BottomNav.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import Auth from './pages/Auth.jsx'
import LevelSelect from './pages/LevelSelect.jsx'
import Home from './pages/Home.jsx'
import Discipline from './pages/Discipline.jsx'
import DisciplineReader from './pages/DisciplineReader.jsx'
import Quiz from './pages/Quiz.jsx'
import Flashcards from './pages/Flashcards.jsx'
import Stories from './pages/Stories.jsx'
import Duas from './pages/Duas.jsx'
import Calendar from './pages/Calendar.jsx'
import Tajweed from './pages/Tajweed.jsx'
import Fiqh from './pages/fiqh.jsx'
import Tawheed from './pages/Tawheed.jsx'
import Profile from './pages/Profile.jsx'
import Journey from './pages/Journey.jsx'
import NotificationBell from './components/NotificationBell.jsx'
import Spaces from './pages/Spaces.jsx'
import PrayerTimes from './pages/PrayerTimes.jsx'
import Disciplines from './pages/Disciplines.jsx'
import Hifdh from './pages/Hifdh.jsx'
import Admin from './pages/Admin.jsx'
import BookQuiz from './pages/BookQuiz.jsx'
import ExamPrep from './pages/ExamPrep.jsx'
import AddToHomeScreen from './components/AddToHomeScreen.jsx'
import LmsDashboard from './pages/LmsDashboard.jsx'
import LmsCourseDetail from './pages/LmsCourseDetail.jsx'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [userLevel, setUserLevel] = useState(null)
  const [levelLoading, setLevelLoading] = useState(false)
  const [levelSelected, setLevelSelected] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('sual-darkmode') === 'true'
  })
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('sual-fontsize') || 'medium'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-fontsize', fontSize)
  }, [])

  useEffect(() => {
    localStorage.setItem('sual-darkmode', darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('sual-fontsize', fontSize)
    document.documentElement.setAttribute('data-fontsize', fontSize)
  }, [fontSize])

  // Capture a ?ref=CODE from the URL as early as possible, so it
  // survives whatever redirect happens between clicking a referral
  // link and finishing signup — stored in localStorage, redeemed
  // later, once, only for a brand-new account (see !levelSelected
  // below).
  useEffect(() => {
    captureReferralFromUrl()
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        setLevelLoading(true)
        try {
          const { data } = await supabase
            .from('user_levels')
            .select('*')
            .eq('user_id', u.id)
            .single()
          if (data?.level_selected) {
            setUserLevel(data.current_level)
            setLevelSelected(true)
          } else {
            setUserLevel('beginner')
            setLevelSelected(false)
          }
        } catch {
          setUserLevel('beginner')
          setLevelSelected(false)
        } finally {
          setLevelLoading(false)
        }
      }
      setAuthLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />
  }

  if (authLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #062f4a, #094570)',
      }}>
        <div style={{
          fontFamily: 'Amiri, serif',
          fontSize: '3rem',
          color: '#ffffff',
        }}>
          سُؤَال
        </div>
      </div>
    )
  }

  if (!user) {
    return <Auth onAuth={setUser} />
  }

  if (levelLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #062f4a, #094570)',
      }}>
        <div style={{ fontFamily: 'Amiri, serif', fontSize: '3rem', color: '#ffffff' }}>
          سُؤَال
        </div>
      </div>
    )
  }

  if (!levelSelected) {
    return (
      <LevelSelect
        user={user}
        onLevelSelected={(level) => {
          setUserLevel(level)
          setLevelSelected(true)
          // This branch only ever renders for an account that hasn't
          // finished onboarding — for all practical purposes, a brand
          // new signup. Redeeming here, once, is what credits the
          // referrer without any risk of a returning user re-triggering
          // it on a later login (this component simply never renders
          // again for them once levelSelected is true).
          redeemStoredReferral()
        }}
      />
    )
  }

  return (
    <div className="app-layout">
      <Sidebar onSignOut={handleSignOut} user={user} />
      <NotificationBell user={user} />
      <div className="main-wrapper">
        <Toolbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/disciplines" element={<Disciplines />} />
            <Route path="/discipline/:id" element={<Discipline userLevel={userLevel} user={user} />} />
            <Route path="/discipline/:id/:level/:qid" element={<DisciplineReader user={user} />} />
            <Route path="/quiz" element={<Quiz user={user} userLevel={userLevel} />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/book-quiz" element={<BookQuiz user={user} />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/duas" element={<Duas />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tajweed" element={<Tajweed />} />
            <Route path="/fiqh" element={<Fiqh />} />
            <Route path="/tawheed" element={<Tawheed />} />
            <Route path="/profile" element={<Profile user={user} userLevel={userLevel} setUserLevel={setUserLevel} />} />
            <Route path="/dashboard" element={<Journey user={user} />} />
            <Route path="/spaces" element={<Spaces user={user} />} />
            <Route path="/prayer-times" element={<PrayerTimes />} />
            <Route path="/hifdh" element={<Hifdh user={user} />} />
            <Route path="/admin" element={<Admin user={user} />} />
            <Route path="/exam-prep" element={<ExamPrep user={user} />} />
            <Route path="/add-to-home-screen" element={<AddToHomeScreen />} />
            <Route path="/lms" element={<LmsDashboard user={user} />} />
            <Route path="/lms/:courseId" element={<LmsCourseDetail user={user} />} />
            <Route path="*" element={<Home user={user} />} />
            <Route path="/puzzle" element={<Puzzle />} />
          </Routes>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}