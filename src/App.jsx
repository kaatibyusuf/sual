import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import Home from './pages/Home.jsx'
import Discipline from './pages/Discipline.jsx'
import Quiz from './pages/Quiz.jsx'
import Flashcards from './pages/Flashcards.jsx'

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !localStorage.getItem('sual_visited')
  })

  const handleSplashDone = () => {
    localStorage.setItem('sual_visited', 'true')
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onDone={handleSplashDone} />
  }

  return (
    <div className="app-layout">
      <Sidebar />
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
  )
}