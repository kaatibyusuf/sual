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

      {/* Original geometric lattice, drawn in CSS — an 8-point star
          motif repeated as a faint background texture, not copied
          from any existing pattern or artwork. */}
      <div className="splash-lattice" aria-hidden="true" />

      {/* Soft floating light particles */}
      <div className="splash-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`splash-particle splash-particle--${i}`} />
        ))}
      </div>

      <div className={`splash-content ${phase !== 'enter' ? 'splash-content--visible' : ''}`}>

        {/* Concentric decorative rings */}
        <div className="splash-ring splash-ring--outer" />
        <div className="splash-ring splash-ring--inner" />

        {/* Arabic word */}
        <div className="splash-arabic">
          <span className="splash-arabic-text">سُؤَال</span>
          <span className="splash-arabic-shimmer" aria-hidden="true">سُؤَال</span>
        </div>

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