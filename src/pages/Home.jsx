import React from 'react'
import { Link } from 'react-router-dom'
import { DISCIPLINES } from '../data/knowledge.js'
import './Home.css'

export default function Home() {
  return (
    <div className="page-content home-page">
      <div className="home-hero">
        <div className="home-hero-mark">سُؤَال</div>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Sual</h1>
          <p className="home-hero-subtitle">
            Your companion for the Islamic sciences — ask, learn, and test your knowledge
            in Fiqh, Seerah, Arabic, and more.
          </p>
          <div className="home-hero-actions">
            <Link to="/discipline/fiqh" className="btn btn-primary">Begin Learning</Link>
            <Link to="/quiz" className="btn btn-secondary">Take a Quiz</Link>
          </div>
        </div>
      </div>

      <div className="home-divider">
        <span className="home-divider-arabic">بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم</span>
      </div>

      <section>
        <h2 className="home-section-title">Choose a Discipline</h2>
        <p className="home-section-sub">Select a science to explore curated Q&A and deepen your understanding.</p>
        <div className="disciplines-grid">
          {DISCIPLINES.map(d => (
            <Link key={d.id} to={`/discipline/${d.id}`} className="discipline-card card">
              <div className="discipline-card-icon">{d.icon}</div>
              <div className="discipline-card-body">
                <h3 className="discipline-card-name">{d.name}</h3>
                <p className="discipline-card-arabic arabic">{d.arabicName}</p>
                <p className="discipline-card-desc">{d.description}</p>
              </div>
              <div className="discipline-card-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-quiz-cta">
        <div className="home-quiz-cta-inner">
          <span className="home-quiz-cta-icon">🎯</span>
          <div>
            <h3 className="home-quiz-cta-title">Test Your Knowledge</h3>
            <p className="home-quiz-cta-desc">
              Challenge yourself with questions spanning all disciplines or focus on one.
            </p>
          </div>
          <Link to="/quiz" className="btn btn-primary home-quiz-cta-btn">Start Quiz</Link>
        </div>
      </section>
    </div>
  )
}