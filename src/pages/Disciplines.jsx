import React from 'react'
import { Link } from 'react-router-dom'
import { DISCIPLINES, KNOWLEDGE_BASE } from '../data/knowledge.js'
import { DISCIPLINE_ICONS } from '../components/disciplineIcons.jsx'
import './Disciplines.css'

export default function Disciplines() {
  return (
    <div className="page-content disciplines-page">

      <div className="disciplines-header">
        <h1 className="page-title">Disciplines</h1>
        <p className="page-subtitle">
          The Islamic sciences, each a door to understanding the deen.
          Choose a discipline to begin.
        </p>
      </div>

      <div className="disciplines-grid">
        {DISCIPLINES.map(d => {
          const qaCount = (KNOWLEDGE_BASE[d.id] || []).length
          return (
            <Link key={d.id} to={`/discipline/${d.id}`} className="disciplines-card">
              <div className="disciplines-card-top">
                <span className="disciplines-card-icon">{DISCIPLINE_ICONS[d.icon]}</span>
                <span className="disciplines-card-arabic arabic">{d.arabicName}</span>
              </div>
              <h2 className="disciplines-card-name">{d.name}</h2>
              <p className="disciplines-card-desc">{d.description}</p>
              {qaCount > 0 && (
                <span className="disciplines-card-count">{qaCount} Q&amp;As</span>
              )}
            </Link>
          )
        })}
      </div>

    </div>
  )
}