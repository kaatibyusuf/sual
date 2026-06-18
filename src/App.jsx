import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Toolbar from './components/Toolbar.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import Home from './pages/Home.jsx'
import Discipline from './pages/Discipline.jsx'
import Quiz from './pages/Quiz.jsx'
import Flashcards from './pages/Flashcards.jsx'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('sual-darkmode') === 'true'
  })
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('sual-fontsize') || 'medium'
  })

  useEffect(() => {
    localStorage.setItem('sual-darkmode', darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('sual-fontsize', fontSize)
    document.documentElement.setAttribute('data-fontsize', fontSize)
  }, [fontSize])

// Apply on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('data-fontsize', fontSize)
  }, [])

  if (showSplash) {
    return <SplashScreen onDone={() => setShowSplash(false)} />
  }

  return (
    <div className="app-layout">
      <Sidebar />
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
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}