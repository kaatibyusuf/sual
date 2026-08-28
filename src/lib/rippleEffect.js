// src/lib/rippleEffect.js
//
// Adds a Material-style "water drop" ripple to button presses across
// the whole app, via a single delegated pointerdown listener
// attached once at the root — not by importing/wiring a handler into
// every individual button component. This is the only way to
// genuinely cover "all buttons" in a codebase this size without
// touching dozens of files one at a time.
//
// Catches:
//   - every native <button> element, anywhere, including ones added
//     to the DOM after this runs (event delegation, not a one-time
//     scan)
//   - <a>/<Link> elements whose class name contains "btn" (covers
//     most link-styled CTAs seen across the app, e.g. .btn,
//     .hm-hero-btn, .spaces-pay-btn)
//
// Does NOT catch: a link/clickable element styled as a button but
// whose class name doesn't contain "btn" at all (e.g. Home.jsx's
// .hm-referral banners). There's no reliable way to detect "this is
// meant to look like a button" from markup alone without auditing
// every component individually — if there's a specific class or
// pattern you want included, add it to BUTTON_LIKE_CLASS_HINT below,
// or opt a specific element in by giving it the `sual-ripple-target`
// class directly.
//
// Any element that visually breaks because of this (most likely: a
// tooltip or dropdown anchored as a DIRECT child of the button,
// which the overflow:hidden this applies could clip) can opt out
// with a `data-no-ripple` attribute — this hasn't been exhaustively
// checked against every button+child relationship in the app, so
// treat that escape hatch as available, not just theoretical.

const BUTTON_LIKE_CLASS_HINT = /\bbtn\b/i

function findRippleTarget(startEl) {
  let node = startEl
  while (node && node !== document.body) {
    if (node.hasAttribute && node.hasAttribute('data-no-ripple')) return null
    if (node.classList && node.classList.contains('sual-ripple-target')) return node
    if (node.tagName === 'BUTTON') return node
    if (node.tagName === 'A' && typeof node.className === 'string' && BUTTON_LIKE_CLASS_HINT.test(node.className)) return node
    node = node.parentElement
  }
  return null
}

function spawnRipple(target, clientX, clientY) {
  if (target.disabled) return

  const rect = target.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height) * 2
  const x = clientX - rect.left - size / 2
  const y = clientY - rect.top - size / 2

  // Applied per-press rather than as a blanket global CSS rule on
  // every matching element all the time — so an element that never
  // gets pressed (and might rely on default overflow behavior for
  // an absolutely-positioned child) is never touched at all.
  const priorPosition = target.style.position
  const priorOverflow = target.style.overflow
  const computedPosition = window.getComputedStyle(target).position
  if (computedPosition === 'static') target.style.position = 'relative'
  target.style.overflow = 'hidden'

  const ripple = document.createElement('span')
  ripple.className = 'sual-ripple'
  ripple.style.width = `${size}px`
  ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`
  target.appendChild(ripple)

  const cleanup = () => {
    ripple.remove()
    // Restore whatever the element's own overflow/position were
    // before this ripple, in case either was intentionally set for
    // some other reason and this was only meant to be transient.
    target.style.overflow = priorOverflow
    if (computedPosition === 'static') target.style.position = priorPosition
  }
  ripple.addEventListener('animationend', cleanup)
  // Safety net: if animationend never fires for any reason (e.g. the
  // element gets removed from the DOM mid-animation), don't leave a
  // stray ripple node or altered inline styles behind forever.
  setTimeout(cleanup, 900)
}

export function initRippleEffect() {
  // pointerdown, not click — this is what makes the effect feel like
  // an immediate press response (the way a real ripple/water-drop
  // reacts the instant you touch down) rather than firing after the
  // full click gesture completes. pointerdown also unifies mouse,
  // touch, and pen under one event, so this covers both desktop
  // clicks and mobile taps without separate handling.
  document.addEventListener('pointerdown', (e) => {
    // Only the primary button/touch — ignore right-click, middle-click.
    if (e.button !== undefined && e.button !== 0) return
    const target = findRippleTarget(e.target)
    if (!target) return
    spawnRipple(target, e.clientX, e.clientY)
  })
}