import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { supabase } from './lib/supabase.js'
import Sidebar from './components/Sidebar.jsx'
import Toolbar from './components/Toolbar.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import Discipline from './pages/Discipline.jsx'
import Quiz from './pages/Quiz.jsx'
import Flashcards from './pages/Flashcards.jsx'
import Stories from './pages/Stories.jsx'
import Duas from './pages/Duas.jsx'
import Calendar from './pages/Calendar.jsx'
import Tajweed from './pages/Tajweed.jsx'
import Profile from './pages/Profile.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Spaces from './pages/Spaces.jsx'
import PrayerTimes from './pages/PrayerTimes.jsx'


export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
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
          animation: 'pulse 1.5s ease-in-out infinite',
        }}>
          سُؤَال
        </div>
      </div>
    )
  }

  if (!user) {
    return <Auth onAuth={setUser} />
  }

  return (
    <div className="app-layout">
      <Sidebar onSignOut={handleSignOut} user={user} />
      <div className="main-wrapper">
        <Toolbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discipline/:id" element={<Discipline />} />
            <Route path="/quiz" element={<Quiz user={user} />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/duas" element={<Duas />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/tajweed" element={<Tajweed />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/spaces" element={<Spaces user={user} />} />
            <Route path="/prayer-times" element={<PrayerTimes />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}