import React, { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter | hold | exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 100)
    const t2 = setTimeout(() => setPhase('exit'), 2800)
    const t3 = setTimeout(() => onDone(), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <div className={`splash ${phase === 'exit' ? 'splash--exit' : ''}`}>
      <div className={`splash-content ${phase !== 'enter' ? 'splash-content--visible' : ''}`}>

        {/* Decorative ring */}
        <div className="splash-ring" />

        {/* Arabic word */}
        <div className="splash-arabic">سُؤَال</div>

        {/* Divider line */}
        <div className={`splash-line ${phase !== 'enter' ? 'splash-line--drawn' : ''}`} />

        {/* Latin name */}
        <div className="splash-latin">Sual</div>

        {/* Tagline */}
        <div className={`splash-tagline ${phase === 'hold' || phase === 'exit' ? 'splash-tagline--visible' : ''}`}>
          اقْرَأْ بِاسْمِ رَبِّكَ
          <span className="splash-tagline-sub">Read in the name of your Lord</span>
        </div>

      </div>

      {/* Bottom bismillah */}
      <div className={`splash-bottom ${phase !== 'enter' ? 'splash-bottom--visible' : ''}`}>
        بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم
      </div>
    </div>
  )
}