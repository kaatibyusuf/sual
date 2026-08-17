import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { captureReferralFromUrl, redeemStoredReferral } from './lib/referral.js'
import { supabase } from './lib/supabase.js'
import Sidebar from './components/Sidebar.jsx'
import Toolbar from './components/Toolbar.jsx'
import BottomNav from './components/BottomNav.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import NotificationBell from './components/NotificationBell.jsx'

// Every route below is lazy-loaded: only the code for the page a
// user actually visits gets downloaded, instead of the entire app's
// JS on first load. Auth, LevelSelect, Home and the shell components
// above stay eager since they're needed immediately on every visit.
const Auth               = lazy(() => import('./pages/Auth.jsx'))
const LevelSelect         = lazy(() => import('./pages/LevelSelect.jsx'))
const Home                = lazy(() => import('./pages/Home.jsx'))
const Discipline          = lazy(() => import('./pages/Discipline.jsx'))
const DisciplineReader    = lazy(() => import('./pages/DisciplineReader.jsx'))
const Quiz                = lazy(() => import('./pages/Quiz.jsx'))
const Flashcards          = lazy(() => import('./pages/Flashcards.jsx'))
const Stories             = lazy(() => import('./pages/Stories.jsx'))
const Duas                = lazy(() => import('./pages/Duas.jsx'))
const Calendar            = lazy(() => import('./pages/Calendar.jsx'))
const Tajweed             = lazy(() => import('./pages/Tajweed.jsx'))
const Fiqh                = lazy(() => import('./pages/fiqh.jsx'))
const Tawheed              = lazy(() => import('./pages/Tawheed.jsx'))
const Profile              = lazy(() => import('./pages/Profile.jsx'))
const Journey              = lazy(() => import('./pages/Journey.jsx'))
const Spaces               = lazy(() => import('./pages/Spaces.jsx'))
const PrayerTimes          = lazy(() => import('./pages/PrayerTimes.jsx'))
const Disciplines          = lazy(() => import('./pages/Disciplines.jsx'))
const Hifdh                = lazy(() => import('./pages/Hifdh.jsx'))
const Admin                = lazy(() => import('./pages/Admin.jsx'))
const AddToHomeScreen      = lazy(() => import('./components/AddToHomeScreen.jsx'))
const AdminClassLessons = lazy(() => import('./pages/AdminClassLessons.jsx'))
const WomensFiqh           = lazy(() => import('./pages/WomensFiqh.jsx'))
const Qiwaamah = lazy(() => import('./pages/Qiwaamah.jsx'))
const Zakaat = lazy(() => import('./pages/Zakaat.jsx'))

function RouteFallback() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ fontFamily: 'Amiri, serif', fontSize: '2rem', color: '#094570', opacity: 0.5 }}>
        سُؤَال
      </div>
    </div>
  )
}

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
    return (
      <Suspense fallback={<RouteFallback />}>
        <Auth onAuth={setUser} />
      </Suspense>
    )
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
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
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
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/disciplines" element={<Disciplines />} />
              <Route path="/discipline/:id" element={<Discipline userLevel={userLevel} user={user} />} />
              <Route path="/discipline/:id/:level/:qid" element={<DisciplineReader user={user} />} />
              <Route path="/quiz" element={<Quiz user={user} userLevel={userLevel} />} />
              <Route path="/flashcards" element={<Flashcards />} />
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
              <Route path="/admin/class-lessons" element={<AdminClassLessons user={user} />} />
              <Route path="/add-to-home-screen" element={<AddToHomeScreen />} />
              <Route path="/qiwaamah" element={<Qiwaamah user={user} />} />
              <Route path="/zakaat" element={<Zakaat user={user} />} />
              <Route path="/tajweed" element={<Tajweed user={user} />} />
      
              <Route path="/womens-fiqh" element={<WomensFiqh user={user} />} />
              <Route path="*" element={<Home user={user} />} />
              <Route path="/stories" element={<Stories user={user} />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}