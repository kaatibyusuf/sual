import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toHijriString } from '../lib/hijri.js'
import './DailyReminder.css'

const REMINDERS = [
  { arabic: 'وَرَتِّلِ القُرْآنَ تَرْتِيلًا', text: 'Recite the Qur\'an slowly and reflectively today — even a few minutes counts.', source: 'Qur\'an 73:4' },
  { arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا', text: 'Whoever walks a path seeking knowledge — Allah eases their way to Paradise.', source: 'Sahih Muslim 2699' },
  { arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', text: 'Start today with intention. A small act done sincerely outweighs a large one done carelessly.', source: 'Bukhari & Muslim' },
  { arabic: 'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا', text: 'Those who strive for Us — We guide them to Our paths. Show up today, even imperfectly.', source: 'Qur\'an 29:69' },
  { arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ', text: 'The best among you are those who learn the Qur\'an and teach it. Learn something small today.', source: 'Sahih al-Bukhari' },
]

const STORAGE_KEY = 'sual-daily-reminder-seen'

function getTodayKey() {
  return new Date().toDateString()
}

export function useDailyReminderVisible() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY)
    if (seen !== getTodayKey()) setVisible(true)
  }, [])
  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, getTodayKey())
    setVisible(false)
  }
  return { visible, dismiss }
}

export default function DailyReminder({ onDismiss, firstName }) {
  const navigate = useNavigate()
  const [reminder] = useState(() => REMINDERS[Math.floor(Math.random() * REMINDERS.length)])
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    setTimeout(onDismiss, 350)
  }

  const goAndClose = (path) => {
    setClosing(true)
    setTimeout(() => { onDismiss(); navigate(path) }, 350)
  }

  return (
    <div className={`dr-overlay ${closing ? 'dr-overlay--closing' : ''}`}>
      <div className="dr-lattice" aria-hidden="true" />
      <div className="dr-particles" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => <span key={i} className={`dr-particle dr-particle--${i}`} />)}
      </div>

      <button className="dr-close" onClick={close} aria-label="Dismiss">✕</button>

      <div className="dr-content">
        <p className="dr-date">{toHijriString(new Date())}</p>
        <p className="dr-greeting">{firstName ? `Assalamu alaikum, ${firstName}` : 'Assalamu alaikum'}</p>

        <div className="dr-card">
          <p className="dr-arabic arabic">{reminder.arabic}</p>
          <p className="dr-text">{reminder.text}</p>
          <p className="dr-source">{reminder.source}</p>
        </div>

        <div className="dr-actions">
          <button className="dr-btn dr-btn--fill" onClick={() => goAndClose('/quiz')}>Start with a Quiz →</button>
          <button className="dr-btn" onClick={close}>Not now</button>
        </div>
      </div>
    </div>
  )
}