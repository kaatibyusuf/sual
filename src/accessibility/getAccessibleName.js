// src/accessibility/getAccessibleName.js
//
// Computes what should be spoken when a user taps somewhere on
// screen. Walks up from the tapped node looking for the nearest
// element that's either explicitly labeled for the reader
// (data-a11y-label — used for content blocks like chat bubbles that
// aren't natively interactive) or a native interactive control
// (button, link, input, etc., which falls back to its visible text).
//
// Returns null when nothing readable is found in range, so
// decorative wrappers and spacing divs stay silent instead of the
// reader guessing at something to say.

const INTERACTIVE_SELECTOR = 'button, a, [role="button"], input, select, textarea, [role="tab"], [role="link"]'
const MAX_WALK_DEPTH = 8
const MAX_LABEL_LENGTH = 300

function labelFor(el) {
  const explicit = el.getAttribute('data-a11y-label')
  if (explicit) return explicit.trim()

  const ariaLabel = el.getAttribute('aria-label')
  if (ariaLabel) return ariaLabel.trim()

  const labelledBy = el.getAttribute('aria-labelledby')
  if (labelledBy) {
    const text = labelledBy
      .split(/\s+/)
      .map(id => document.getElementById(id)?.innerText || '')
      .join(' ')
      .trim()
    if (text) return text
  }

  if (el.tagName === 'INPUT' || el.tagName === 'SELECT' || el.tagName === 'TEXTAREA') {
    const id = el.getAttribute('id')
    const labelEl = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`) : null
    if (labelEl?.innerText) return labelEl.innerText.trim()
    if (el.placeholder) return el.placeholder.trim()
  }

  const title = el.getAttribute('title')
  if (title) return title.trim()

  const text = el.innerText
  if (text) return text.replace(/\s+/g, ' ').trim().slice(0, MAX_LABEL_LENGTH)

  return null
}

export function getAccessibleName(startEl) {
  let node = startEl
  let depth = 0
  while (node && node.nodeType === 1 && node !== document.body && depth < MAX_WALK_DEPTH) {
    if (node.hasAttribute('data-a11y-label') || node.matches(INTERACTIVE_SELECTOR)) {
      const label = labelFor(node)
      if (label) return { label, node }
    }
    node = node.parentElement
    depth++
  }
  return null
}