// src/lib/shareCard.js
//
// Generates shareable PNGs for streaks and badge unlocks, drawn
// entirely client-side with the Canvas API — no server round-trip,
// no external image-generation library. Both card types share the
// same brand treatment (navy gradient + faint oversized Arabic
// watermark, matching LevelSelect.jsx/Hifdh.jsx) so they read as one
// consistent shareable-asset family, not two unrelated designs.
//
// generateBadgeCard() is deliberately generic — it takes a plain
// { name, description, icon } object and draws whatever it's given,
// rather than assuming any specific badge's content. icon is
// rendered as-is via the system emoji font (Badges.jsx renders
// badge.icon directly as JSX text, confirming it's an emoji
// character, not an SVG/image reference), so this works correctly
// for any badge in BADGES without this file needing to know that
// list's actual contents.
//
// Deliberately uses a plain system-font stack for all Latin/numeral
// text (no webfont load needed, no flash-of-missing-text risk) and
// only waits on Amiri specifically, for the Arabic wordmark — Amiri
// is already loaded app-wide for .arabic/.arabic-lg elements, so this
// just confirms it's actually ready before canvas draws it, since
// canvas text doesn't wait for webfonts the way DOM text does.
//
// NOTE: layout numbers below are a first pass, chosen by eye against
// a 1080x1080 canvas without being able to render-and-inspect the
// actual output — treat spacing/sizing as a starting point to tune
// once you've actually generated and looked at a real card, not as
// pre-verified pixel-perfect values.

const CARD_SIZE = 1080
const SANS = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'

// Path lifted directly from Home.jsx's ICONS.flame so the icon on
// the shared streak card matches the one already shown in the app.
const FLAME_PATH = 'M12 2.5c3.5 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3.5-8 7-13z'

function loadAmiri() {
  if (!document.fonts || !document.fonts.load) return Promise.resolve()
  return Promise.all([
    document.fonts.load('700 90px Amiri'),
    document.fonts.load('700 900px Amiri'),
  ]).catch(() => {
    // If Amiri fails to load for any reason, drawing continues with
    // whatever serif fallback the browser substitutes — a card with
    // a fallback Arabic glyph shape is still far better than the
    // share feature throwing and producing nothing at all.
  })
}

function drawBackground(ctx) {
  const bg = ctx.createLinearGradient(0, 0, CARD_SIZE * 0.3, CARD_SIZE)
  bg.addColorStop(0, '#062f4a')
  bg.addColorStop(0.5, '#094570')
  bg.addColorStop(1, '#0d6fa8')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, CARD_SIZE, CARD_SIZE)

  ctx.save()
  ctx.globalAlpha = 0.05
  ctx.fillStyle = '#ffffff'
  ctx.font = '700 900px Amiri, serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('سُؤَال', CARD_SIZE / 2, CARD_SIZE / 2)
  ctx.restore()
}

function drawWordmark(ctx, y) {
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = '700 70px Amiri, serif'
  ctx.fillStyle = '#ffffff'
  ctx.fillText('سُؤَال', CARD_SIZE / 2, y)

  ctx.font = `700 28px ${SANS}`
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  try { ctx.letterSpacing = '6px' } catch {}
  ctx.fillText('SUAL', CARD_SIZE / 2, y + 50)
  ctx.letterSpacing = '0px'

  ctx.font = `600 26px ${SANS}`
  ctx.fillStyle = 'rgba(255,255,255,0.6)'
  ctx.fillText('app.usesual.com', CARD_SIZE / 2, y + 110)
}

// Wraps `text` across multiple lines within maxWidth, then draws the
// whole block VERTICALLY CENTERED on centerY — so a one-line badge
// name/description and a three-line one both stay visually balanced
// in the same card region, rather than the block always starting at
// centerY and pushing further down as text gets longer. Needed here
// specifically because this file doesn't know the real max length of
// any badge's name/description ahead of time.
function wrapTextCentered(ctx, text, centerX, centerY, maxWidth, lineHeight) {
  const words = String(text || '').split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word
    if (line && ctx.measureText(testLine).width > maxWidth) {
      lines.push(line)
      line = word
    } else {
      line = testLine
    }
  }
  if (line) lines.push(line)

  const blockHeight = (lines.length - 1) * lineHeight
  const firstLineY = centerY - blockHeight / 2
  lines.forEach((l, i) => ctx.fillText(l, centerX, firstLineY + i * lineHeight))
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob)
      else reject(new Error('Canvas toBlob returned null — image generation failed'))
    }, 'image/png')
  })
}

export async function generateStreakCard(streakCount) {
  await loadAmiri()

  const canvas = document.createElement('canvas')
  canvas.width = CARD_SIZE
  canvas.height = CARD_SIZE
  const ctx = canvas.getContext('2d')

  drawBackground(ctx)

  // Flame icon, scaled up and centered above the number.
  const iconSize = 140
  const iconTop = 210
  ctx.save()
  ctx.translate(CARD_SIZE / 2 - iconSize / 2, iconTop)
  ctx.scale(iconSize / 24, iconSize / 24)
  ctx.fillStyle = '#FF8A4C'
  ctx.fill(new Path2D(FLAME_PATH))
  ctx.restore()

  // Streak number — the actual centerpiece of the card.
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#ffffff'
  ctx.font = `800 260px ${SANS}`
  ctx.fillText(String(streakCount), CARD_SIZE / 2, 560)

  // "DAY STREAK" label.
  ctx.font = `700 44px ${SANS}`
  ctx.fillStyle = '#85CCFF'
  try { ctx.letterSpacing = '8px' } catch {}
  ctx.fillText('DAY STREAK', CARD_SIZE / 2, 700)
  ctx.letterSpacing = '0px'

  drawWordmark(ctx, 860)

  return canvasToBlob(canvas)
}

// badge: { name, description, icon } — matches the shape BADGES
// entries are used with in Badges.jsx (badge.icon rendered directly
// as JSX text there, i.e. an emoji character). Works for any badge
// with this shape; this file never needs to know the full BADGES
// list's actual contents.
export async function generateBadgeCard(badge) {
  await loadAmiri()

  const canvas = document.createElement('canvas')
  canvas.width = CARD_SIZE
  canvas.height = CARD_SIZE
  const ctx = canvas.getContext('2d')

  drawBackground(ctx)

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // "BADGE UNLOCKED" label.
  ctx.font = `700 36px ${SANS}`
  ctx.fillStyle = '#85CCFF'
  try { ctx.letterSpacing = '8px' } catch {}
  ctx.fillText('BADGE UNLOCKED', CARD_SIZE / 2, 220)
  ctx.letterSpacing = '0px'

  // The badge's own emoji icon, large — system emoji font, no
  // webfont load needed, renders correctly regardless of which
  // specific emoji any given badge uses.
  ctx.font = '220px sans-serif'
  ctx.fillText(badge?.icon || '🏅', CARD_SIZE / 2, 460)

  // Badge name — wrapped and vertically centered, since names could
  // be short ("On Fire") or long, and this file has no way to know
  // the real BADGES list's actual lengths in advance.
  ctx.font = `800 84px ${SANS}`
  ctx.fillStyle = '#ffffff'
  wrapTextCentered(ctx, badge?.name || 'Achievement', CARD_SIZE / 2, 620, CARD_SIZE - 160, 96)

  // Description, smaller, also wrapped.
  ctx.font = `500 34px ${SANS}`
  ctx.fillStyle = 'rgba(255,255,255,0.75)'
  wrapTextCentered(ctx, badge?.description || '', CARD_SIZE / 2, 740, CARD_SIZE - 220, 44)

  drawWordmark(ctx, 900)

  return canvasToBlob(canvas)
}