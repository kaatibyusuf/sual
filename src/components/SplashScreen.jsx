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

      {/* Faint, fully static geometric texture — same treatment as
          before, never competes with the actual motion. */}
      <div className="splash-lattice" aria-hidden="true" />

      <div className={`splash-content ${phase !== 'enter' ? 'splash-content--visible' : ''}`}>

        {/* Two rings — this time they genuinely contract inward from
            an oversized start rather than pulsing in place, arriving
            at their resting size right as the glow behind the
            wordmark peaks. This is the actual "coalescing" motion the
            concept is built around, not ambient decoration. */}
        <div className="splash-ring splash-ring--outer" />
        <div className="splash-ring splash-ring--inner" />

        {/* Crescent + star — each path now animates in from its own
            separate starting point and settles into place, so the
            mark reads as assembling rather than simply fading in
            where it already sits. */}
        <svg className="splash-mark" viewBox="0 0 100 100" aria-hidden="true">
          <path
            className="splash-mark-crescent"
            d="M58 20a32 32 0 1 0 0 60 26 26 0 1 1 0-60z"
          />
          <path
            className="splash-mark-star"
            d="M78 38l3.2 7.8L89 49l-7.8 3.2L78 60l-3.2-7.8L67 49l7.8-3.2z"
          />
        </svg>

        {/* Arabic word — the wordmark resolves out of a soft glow
            growing from the center, rather than being drawn stroke
            by stroke. Blur and scale clear as the glow behind it
            peaks, so the two motions genuinely meet at the moment
            the word becomes legible. */}
        <div className="splash-arabic-wrap">
          <div className="splash-glow" aria-hidden="true" />
          <div className="splash-arabic">
            <span className="splash-arabic-text">سُؤَال</span>
          </div>
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