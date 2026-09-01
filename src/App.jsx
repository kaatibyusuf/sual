import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { captureReferralFromUrl, redeemStoredReferral } from './lib/referral.js'
import { supabase } from './lib/supabase.js'
import Sidebar from './components/Sidebar.jsx'
import Toolbar from './components/Toolbar.jsx'
import BottomNav from './components/BottomNav.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import NotificationBell from './components/NotificationBell.jsx'
import AppLockScreen from './components/AppLockScreen.jsx'
import { shouldShowLockScreen, trackVisibilityForRelock } from './lib/biometricLock.js'
import { AccessibilityProvider } from './accessibility/AccessibilityContext.jsx'
import TouchExploreLayer from './accessibility/TouchExploreLayer.jsx'
import AccessibilityToggle from './accessibility/AccessibilityToggle.jsx'

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
const Kids                  = lazy(() => import('./pages/Kids.jsx'))
const Qiwaamah = lazy(() => import('./pages/Qiwaamah.jsx'))
const Zakaat = lazy(() => import('./pages/Zakaat.jsx'))
const Leaderboard = lazy(() => import('./pages/Leaderboard.jsx'))
const Rewards = lazy(() => import('./pages/Rewards.jsx'))
const NewMuslim = lazy(() => import('./pages/NewMuslim.jsx'))
const ArabicDictionary = lazy(() => import('./pages/ArabicDictionary.jsx'))
const Adab = lazy(() => import('./pages/Adab.jsx'))
const KnowledgeGraph = lazy(() => import('./pages/KnowledgeGraph.jsx'))
const TajweedClass = lazy(() => import('./pages/TajweedClass.jsx'))

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

// The entire previous App() body, unchanged, just renamed — it now
// renders INSIDE the accessibility provider mounted by the default
// export below, instead of being the default export itself.
function AppInner() {
  const [showSplash, setShowSplash] = useState(true)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [userLevel, setUserLevel] = useState(null)
  const [levelLoading, setLevelLoading] = useState(false)
  const [levelSelected, setLevelSelected] = useState(false)
  const [isKid, setIsKid] = useState(false)
  const [kidCheckDone, setKidCheckDone] = useState(false)
  const [locked, setLocked] = useState(false)
  // Both attributes are applied here, synchronously, inside the
  // lazy initializer — not in a useEffect. useEffect only runs AFTER
  // the browser's first paint, so with the old effect-based version
  // there was a real window on every load/reload where the page
  // rendered at the CSS default (font-size: 16px / light theme)
  // before snapping to whatever was actually saved — visible as the
  // whole app suddenly resizing or re-tinting itself a beat after
  // it first appeared, for anyone whose saved preference wasn't the
  // default. Setting the attribute here runs during the initial
  // render, before that first paint, so the correct size/theme is
  // what actually gets painted the first time.
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('sual-darkmode') === 'true'
    document.documentElement.setAttribute('data-theme', stored ? 'dark' : 'light')
    return stored
  })
  const [fontSize, setFontSize] = useState(() => {
    const stored = localStorage.getItem('sual-fontsize') || 'medium'
    document.documentElement.setAttribute('data-fontsize', stored)
    return stored
  })

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

  // Determines whether this account is hard-gated to the Kids
  // section. Runs independently of the userLevel fetch above (kids
  // never go through LevelSelect at all — see the render fork below,
  // which checks isKid before levelSelected). Age is preferred over
  // date_of_birth when both exist, since it's already the exact
  // number rather than something to compute; date_of_birth is the
  // fallback for accounts that only have that.
  useEffect(() => {
    if (!user) {
      setIsKid(false)
      setKidCheckDone(false)
      return
    }
    let cancelled = false
    supabase
      .from('profiles')
      .select('age, date_of_birth')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (cancelled) return
        if (error) {
          console.error('Failed to load age for kids-section check:', error)
          setIsKid(false)
          setKidCheckDone(true)
          return
        }
        let computedAge = data?.age ?? null
        if (computedAge == null && data?.date_of_birth) {
          const dob = new Date(data.date_of_birth)
          const now = new Date()
          computedAge = now.getFullYear() - dob.getFullYear()
          const hadBirthdayThisYear =
            now.getMonth() > dob.getMonth() ||
            (now.getMonth() === dob.getMonth() && now.getDate() >= dob.getDate())
          if (!hadBirthdayThisYear) computedAge -= 1
        }
        setIsKid(computedAge != null && computedAge < 12)
        setKidCheckDone(true)
      })
    return () => { cancelled = true }
  }, [user])

  // Biometric app-lock: checks whether this device session needs to
  // be re-verified, and re-arms the lock if the app was backgrounded
  // past RELOCK_AFTER_MS even within the same browser session. Only
  // active once a user is known — a signed-out visitor never sees
  // this, since there's nothing of theirs to protect yet.
  useEffect(() => {
    if (!user) return
    setLocked(shouldShowLockScreen())

    const handleVisibility = () => {
      trackVisibilityForRelock()
      if (shouldShowLockScreen()) setLocked(true)
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [user])

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

  if (!kidCheckDone) {
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

  // Biometric lock check happens after auth/kid-check resolve, but
  // before anything else renders — this is a local device gate, not
  // part of the actual auth boundary, so it doesn't affect
  // authLoading/kidCheckDone timing at all, it just sits in front of
  // the app's content once we know who's signed in.
  if (locked) {
    return <AppLockScreen onUnlock={() => setLocked(false)} onSignOut={handleSignOut} />
  }

  // Hard gate: an under-12 account only ever sees the Kids section,
  // full stop — no Disciplines, Spaces, Quiz, or anything else, and
  // no Sidebar/Toolbar/BottomNav/NotificationBell chrome either.
  // Checked before levelLoading/LevelSelect on purpose: a kid account
  // skips the adult level-selection onboarding entirely, not just the
  // main app afterward.
  if (isKid) {
    return (
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/kids" element={<Kids user={user} onSignOut={handleSignOut} />} />
          <Route path="*" element={<Navigate to="/kids" replace />} />
        </Routes>
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
              <Route path="/duas" element={<Duas user={user} />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/fiqh" element={<Fiqh />} />
              <Route path="/tawheed" element={<Tawheed user={user} />} />
              <Route path="/profile" element={<Profile user={user} userLevel={userLevel} setUserLevel={setUserLevel} fontSize={fontSize} setFontSize={setFontSize} />} />
              <Route path="/dashboard" element={<Journey user={user} />} />
              <Route path="/spaces" element={<Spaces user={user} />} />
              <Route path="/prayer-times" element={<PrayerTimes />} />
              <Route path="/hifdh" element={<Hifdh user={user} />} />
              <Route path="/admin" element={<Admin user={user} />} />
              <Route path="/admin/class-lessons" element={<AdminClassLessons user={user} />} />
              <Route path="/add-to-home-screen" element={<AddToHomeScreen />} />
              <Route path="/qiwaamah" element={<Qiwaamah user={user} />} />
              <Route path="/zakaat" element={<Zakaat user={user} />} />
      
              <Route path="/womens-fiqh" element={<WomensFiqh user={user} />} />
              <Route path="*" element={<Home user={user} />} />
              <Route path="/stories" element={<Stories user={user} />} />
              <Route path="/leaderboard" element={<Leaderboard user={user} />} />
              <Route path="/rewards" element={<Rewards user={user} />} />
              <Route path="/new-muslim" element={<NewMuslim user={user} />} />
              <Route path="/arabic-dictionary" element={<ArabicDictionary user={user} />} />
              <Route path="/adab" element={<Adab user={user} />} />
              <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
              <Route path="/tajweed-class" element={<TajweedClass user={user} />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}

// Mounted once, above absolutely everything — including the splash
// screen and sign-in flow, so the reader is available to someone
// before they even have an account. TouchExploreLayer and the toggle
// don't change anything about how the app behaves or renders until
// someone actually turns the reader on.
export default function App() {
  return (
    <AccessibilityProvider>
      <TouchExploreLayer />
      <AccessibilityToggle />
      <AppInner />
    </AccessibilityProvider>
  )
}