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
  { arabic: 'إِنَّ مَعَ العُسْرِ يُسْرًا', text: 'With every hardship comes ease. Whatever you\'re carrying today, relief is near.', source: 'Qur\'an 94:6' },
  { arabic: 'مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ', text: 'Saying "SubhanAllahi wa bihamdih" a hundred times in a day wipes away sins, even if they were as much as sea foam.', source: 'Sahih al-Bukhari' },
  { arabic: 'وَبَشِّرِ الصَّابِرِينَ', text: 'Give glad tidings to those who remain patient. Your patience today is not unseen.', source: 'Qur\'an 2:155' },
  { arabic: 'الدُّعَاءُ هُوَ العِبَادَة', text: 'Supplication is itself an act of worship. Ask Allah for what\'s on your heart today.', source: 'Sunan Abi Dawud' },
  { arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ', text: 'None of you truly believes until he loves for his brother what he loves for himself. Carry this into how you treat someone today.', source: 'Sahih al-Bukhari & Muslim' },
  { arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا', text: 'Whoever is mindful of Allah — He makes a way out for them. Trust that today, even in uncertainty.', source: 'Qur\'an 65:2' },
  { arabic: 'أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ', text: 'The most beloved deeds to Allah are the ones done consistently, even if small. Consistency over intensity, today and always.', source: 'Sahih al-Bukhari & Muslim' },
  { arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ', text: 'Remember Me, and I will remember you. A moment of dhikr today is never wasted.', source: 'Qur\'an 2:152' },
  { arabic: 'التَّبَسُّمُ فِي وَجْهِ أَخِيكَ صَدَقَةٌ', text: 'Smiling at your brother is charity. Something this simple could be your good deed today.', source: 'Jami\' at-Tirmidhi' },
  { arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', text: 'And say: My Lord, increase me in knowledge. Let that be your quiet prayer as you learn today.', source: 'Qur\'an 20:114' },
  { arabic: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ', text: 'The best of people are those most beneficial to others. Look for one way to be useful to someone today.', source: 'Reported by al-Tabarani' },
  { arabic: 'لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا', text: 'Do not grieve — Allah is with us. Whatever weighs on you today, you are not carrying it alone.', source: 'Qur\'an 9:40' },
  { arabic: 'الطُّهُورُ شَطْرُ الإِيمَانِ', text: 'Purification is half of faith. A small act like wudu can be a genuine reset for the heart today.', source: 'Sahih Muslim' },
  { arabic: 'مَنْ حَسُنَ إِسْلَامُهُ', text: 'Part of the excellence of a person\'s faith is leaving what doesn\'t concern them. A little less noise today.', source: 'Jami\' at-Tirmidhi' },
  { arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ', text: 'I only created jinn and mankind to worship Me. Let today\'s small acts of worship carry that purpose.', source: 'Qur\'an 51:56' },
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

      {/* Order below is deliberate: date/greeting, then the verse
          card, then the CTAs — CTAs must always be the LAST thing in
          this flex column so they render visually below the verse,
          not floated or absolutely positioned elsewhere in CSS. */}
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