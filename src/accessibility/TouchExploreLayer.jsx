// src/accessibility/TouchExploreLayer.jsx
//
// Mount this once, near the root of whatever tree should support
// touch-explore (for a single-page rollout that's inside that page;
// for the whole app, it belongs in App.jsx above the router).
//
// Behavior mirrors TalkBack/VoiceOver's touch-explore model, which is
// what visually impaired users already know from every other app on
// their phone:
//   - First tap on an element: SPEAK it, highlight it, don't activate it.
//   - Second tap on the SAME element within DOUBLE_TAP_MS: let the
//     click through normally (real activation).
//   - Tapping a DIFFERENT element always re-starts at "speak, don't
//     activate" for that new element.
//
// Only intercepts anything while the reader is switched on — with it
// off, every page behaves exactly as it did before this was added.

import { useEffect, useRef } from 'react'
import { useAccessibility } from './AccessibilityContext.jsx'
import { getAccessibleName } from './getAccessibleName.js'
import './accessibility.css'

const DOUBLE_TAP_MS = 550

export default function TouchExploreLayer() {
  const { enabled, speak } = useAccessibility()
  const lastRef = useRef({ node: null, time: 0 })
  const highlightedRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    const clearHighlight = () => {
      highlightedRef.current?.classList.remove('a11y-explore-highlight')
      highlightedRef.current = null
    }

    const onPointerDown = (e) => {
      const found = getAccessibleName(e.target)
      const now = Date.now()
      const { node: lastNode, time: lastTime } = lastRef.current

      const isSecondTapOnSameElement =
        found && found.node === lastNode && (now - lastTime) < DOUBLE_TAP_MS

      if (isSecondTapOnSameElement) {
        // Real activation — let this click proceed untouched.
        lastRef.current = { node: null, time: 0 }
        clearHighlight()
        return
      }

      lastRef.current = { node: found ? found.node : null, time: now }

      if (!found) {
        clearHighlight()
        return
      }

      clearHighlight()
      found.node.classList.add('a11y-explore-highlight')
      highlightedRef.current = found.node
      speak(found.label)

      // Eat the click this touch/mouse-down is about to produce, so
      // a first tap never both speaks AND activates.
      const eatNextClick = (clickEvent) => {
        clickEvent.preventDefault()
        clickEvent.stopPropagation()
      }
      window.addEventListener('click', eatNextClick, { capture: true, once: true })
      // Safety cleanup in case the touch turns into a scroll instead
      // of a click — don't leave a stray listener eating some later,
      // unrelated click.
      setTimeout(() => {
        window.removeEventListener('click', eatNextClick, { capture: true })
      }, 1000)
    }

    document.addEventListener('pointerdown', onPointerDown, true)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true)
      clearHighlight()
    }
  }, [enabled, speak])

  return null
}