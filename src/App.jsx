import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import Discipline from './pages/Discipline.jsx'
import Quiz from './pages/Quiz.jsx'

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discipline/:id" element={<Discipline />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}