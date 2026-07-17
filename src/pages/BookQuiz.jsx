import React, { useState, useEffect, useRef } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { supabase } from '../lib/supabase.js'
import './Quiz.css'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc

const WORDS_PER_SECTION = 2200
const FREE_LIFETIME_GENERATIONS = 2
const MAX_SCANNED_PAGES = 60 // browser memory/time bound for rendering page images
const IMAGES_PER_SECTION = 4
const IMAGES_PER_UPLOAD_GROUP = 6

function words(text) {
  return (text || '').split(/\s+/).filter(Boolean)
}

function normalizeArabic(str) {
  return (str || '')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/\s+/g, ' ')
    .trim()
}

// Some PDFs embed fonts with custom glyph-index mappings and no real
// ToUnicode table — the file still displays correctly in a viewer
// (glyph shapes get drawn fine), but text extraction pulls out
// meaningless codepoints instead of real characters. This checks
// what fraction of a chunk's non-whitespace characters are actually
// recognizable Arabic/Latin/digits/punctuation, so a garbled chunk
// can be flagged and blocked before anyone wastes a generation.
function textQualityRatio(text) {
  const chars = [...text].filter(c => !/\s/.test(c))
  if (chars.length === 0) return 0
  const recognized = chars.filter(c =>
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0660-\u0669a-zA-Z0-9.,!?؛،؟\-()'"]/.test(c)
  )
  return recognized.length / chars.length
}

// Corrupted font glyph-mappings can produce genuinely invalid
// Unicode — lone surrogate halves, stray control characters — that
// look fine in the browser's preview but break JSON encoding/decoding
// downstream. Stripped right after extraction so a corrupted section
// either reads cleanly afterward or gets caught by the garbled-text
// detection above.
function sanitizeExtractedText(text) {
  return text
    .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/g, '')
    .replace(/(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
}

function splitIntoSections(fullText) {
  const w = words(fullText)
  const sections = []
  for (let i = 0; i < w.length; i += WORDS_PER_SECTION) {
    const chunk = w.slice(i, i + WORDS_PER_SECTION).join(' ')
    sections.push({
      index: sections.length,
      type: 'text',
      text: chunk,
      preview: chunk.slice(0, 120) + (chunk.length > 120 ? '…' : ''),
      wordCount: Math.min(WORDS_PER_SECTION, w.length - i),
      garbled: textQualityRatio(chunk) < 0.7,
    })
  }
  return sections
}

async function renderPageToImage(page, scale = 1.5) {
  const viewport = page.getViewport({ scale })
  const canvas = document.createElement('canvas')
  canvas.width = viewport.width
  canvas.height = viewport.height
  await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
  return canvas.toDataURL('image/jpeg', 0.85).split(',')[1]
}

// Reads a PDF and decides, per-file, whether it's text-based (normal
// extraction path) or effectively scanned (very little real text per
// page) — in which case pages are rendered to images instead, grouped
// into sections by page range, to be transcribed via vision AI only
// when a section is actually selected for quiz generation.
async function processPdf(file) {
  const buffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise

  let fullText = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    fullText += content.items.map(it => it.str).join(' ') + '\n'
  }
  fullText = sanitizeExtractedText(fullText)
  const avgWordsPerPage = words(fullText).length / pdf.numPages

  if (avgWordsPerPage >= 15) {
    return { kind: 'text', sections: splitIntoSections(fullText) }
  }

  const pageCount = Math.min(pdf.numPages, MAX_SCANNED_PAGES)
  const sections = []
  for (let start = 1; start <= pageCount; start += IMAGES_PER_SECTION) {
    const end = Math.min(start + IMAGES_PER_SECTION - 1, pageCount)
    const images = []
    for (let p = start; p <= end; p++) {
      images.push(await renderPageToImage(await pdf.getPage(p)))
    }
    sections.push({
      index: sections.length,
      type: 'image',
      images,
      pageRange: end > start ? `Pages ${start}–${end}` : `Page ${start}`,
    })
  }
  return { kind: 'image', sections, truncated: pdf.numPages > MAX_SCANNED_PAGES }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(String(reader.result).split(',')[1] || '')
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

async function processImageFiles(files) {
  const images = []
  for (const f of files) images.push(await fileToBase64(f))
  const sections = []
  for (let i = 0; i < images.length; i += IMAGES_PER_UPLOAD_GROUP) {
    const group = images.slice(i, i + IMAGES_PER_UPLOAD_GROUP)
    sections.push({
      index: sections.length,
      type: 'image',
      images: group,
      pageRange: group.length > 1 ? `Photos ${i + 1}–${i + group.length}` : `Photo ${i + 1}`,
    })
  }
  return sections
}

export default function BookQuiz({ user }) {
  const [phase, setPhase] = useState('upload') // upload | sections | generating | quiz | result
  const [bookTitle, setBookTitle] = useState('')
  const [extracting, setExtracting] = useState(false)
  const [extractError, setExtractError] = useState(null)
  const [sections, setSections] = useState([])
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(null)
  const [generateError, setGenerateError] = useState(null)
  const [paywallMsg, setPaywallMsg] = useState(null)

  const [activeQuiz, setActiveQuiz] = useState(null) // { id, questions, book_title, section_label, source_type }
  const [qIndex, setQIndex] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)

  const [pastQuizzes, setPastQuizzes] = useState([])
  const [pastLoading, setPastLoading] = useState(false)

  // Book Quiz subscription — fully separate product/table from Spaces'
  // `subscriptions`, so a person can hold either, both, or neither.
  const [bookQuizSub, setBookQuizSub] = useState(null)
  const [checkingAccess, setCheckingAccess] = useState(true)

  const fileInputRef = useRef(null)

  const loadPastQuizzes = async () => {
    if (!user) return
    setPastLoading(true)
    try {
      const { data, error } = await supabase
        .from('book_quizzes')
        .select('id, book_title, section_label, questions, source_type, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(30)
      if (error) throw error
      setPastQuizzes(data || [])
    } catch (err) {
      console.error('Failed to load past book quizzes:', err)
    } finally {
      setPastLoading(false)
    }
  }

  useEffect(() => {
    loadPastQuizzes()
    if (!user) return
    supabase
      .from('book_quiz_subscriptions')
      .select('status, expires_at')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        setBookQuizSub(data || null)
        setCheckingAccess(false)
      })
  }, [user])

  const hasActiveSub = bookQuizSub?.status === 'active'
    && (!bookQuizSub.expires_at || new Date(bookQuizSub.expires_at) > new Date())

  const freeGenerationsUsed = pastQuizzes.length
  const freeGenerationsLeft = Math.max(0, FREE_LIFETIME_GENERATIONS - freeGenerationsUsed)

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return
    setExtractError(null)
    setExtracting(true)
    try {
      if (files[0].type === 'application/pdf') {
        const result = await processPdf(files[0])
        if (!bookTitle) setBookTitle(files[0].name.replace(/\.pdf$/i, ''))
        if (result.sections.length === 0) {
          setExtractError('No readable pages found in this PDF.')
          setExtracting(false)
          return
        }
        setSections(result.sections)
        setPhase('sections')
      } else {
        const imgSections = await processImageFiles(files)
        if (!bookTitle) setBookTitle('Uploaded pages')
        setSections(imgSections)
        setPhase('sections')
      }
    } catch (err) {
      console.error('File processing failed:', err)
      setExtractError('Could not process this file. Try a different PDF or clearer photos.')
    } finally {
      setExtracting(false)
    }
  }

  // Reference embeds the plan and the FULL Supabase user id, matching
  // the format paystack-webhook's parseReference() expects:
  // bookquiz_<plan>_<uuid>_<epoch ms>
  const handlePaystack = (plan) => {
    const ref = `bookquiz_${plan}_${user.id}_${Date.now()}`
    const code = plan === 'annual' ? '7agvj5i4cl' : '254xl0pgx1'
    window.location.href = `https://paystack.shop/pay/${code}?email=${encodeURIComponent(user.email)}&ref=${ref}`
  }

  const generateQuiz = async () => {
    const section = sections[selectedSectionIdx]
    if (!section) return
    setPhase('generating')
    setGenerateError(null)
    setPaywallMsg(null)
    try {
      const requestBody = section.type === 'image'
        ? { book_title: bookTitle, section_label: section.pageRange, section_images: section.images }
        : { book_title: bookTitle, section_label: `Section ${section.index + 1}`, section_text: section.text }

      const { data, error } = await supabase.functions.invoke('generate-book-quiz', {
        body: requestBody,
      })

      if (error) {
        // supabase-js treats ANY non-2xx response as `error`, not
        // `data` — including our 402 paywall response — so the
        // paywall case has to be detected here too, not just in the
        // `data?.error === 'paywall'` check below. Previously this
        // branch fell straight to "message = errBody.error", which
        // set the literal string "paywall" as the displayed error
        // instead of routing to the proper upsell card.
        let errBody = null
        try {
          errBody = await error.context.json()
        } catch {
          // Response body wasn't readable/valid JSON — errBody stays null.
        }

        if (errBody?.error === 'paywall') {
          setPaywallMsg(errBody.message || 'You\'ve used your free Book Quiz generations. Subscribe to keep generating quizzes from your books.')
          setPhase('sections')
          return
        }

        // Any other non-2xx error: use the server's message if it's a
        // real readable string, otherwise fall back to a friendly
        // generic message rather than surfacing something raw.
        const message = (errBody?.error && typeof errBody.error === 'string')
          ? errBody.error
          : 'Something went wrong generating this quiz. Try a different section.'
        throw new Error(message)
      }

      if (data?.error === 'paywall') {
        setPaywallMsg(data.message)
        setPhase('sections')
        return
      }
      if (data?.error) throw new Error(data.error)
      startQuiz(data.quiz)
      loadPastQuizzes()
    } catch (err) {
      console.error('Failed to generate quiz:', err)
      setGenerateError(err.message)
      setPhase('sections')
    }
  }

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz)
    setQIndex(0)
    setChosen(null)
    setTypedAnswer('')
    setRevealed(false)
    setScore(0)
    setPhase('quiz')
  }

  const currentQ = activeQuiz ? activeQuiz.questions[qIndex] : null

  const pickMcq = (idx) => {
    if (revealed) return
    setChosen(idx)
    setRevealed(true)
    if (idx === currentQ.correctIndex) setScore(s => s + 1)
  }

  const submitFillBlank = () => {
    if (revealed) return
    const correct = normalizeArabic(typedAnswer) === normalizeArabic(currentQ.answer)
    setRevealed(true)
    if (correct) setScore(s => s + 1)
  }

  const nextQ = () => {
    if (qIndex + 1 < activeQuiz.questions.length) {
      setQIndex(i => i + 1)
      setChosen(null)
      setTypedAnswer('')
      setRevealed(false)
    } else {
      setPhase('result')
    }
  }

  const reset = () => {
    setPhase('upload')
    setBookTitle('')
    setSections([])
    setSelectedSectionIdx(null)
    setActiveQuiz(null)
    setPaywallMsg(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  if (!user) return null

  // ── Upload ──────────────────────────────────────────────────
  if (phase === 'upload') {
    return (
      <div className="page-content quiz-page">
        <h1 className="page-title">Book Quiz</h1>
        <p className="page-subtitle">Upload a book, test yourself on it</p>

        {!checkingAccess && (
          <p className="book-quiz-status">
            {hasActiveSub
              ? '✅ Book Quiz subscription active — unlimited generations.'
              : `${freeGenerationsLeft} of ${FREE_LIFETIME_GENERATIONS} free generations remaining.`}
          </p>
        )}

        <div className="quiz-select-card card">
          <h2 className="quiz-select-title">Upload a book</h2>
          <p className="book-quiz-status">
            Text-based PDFs, scanned/photographed PDFs, and photos of pages (JPG/PNG) are
            all supported. Your file is processed in your browser; only the section you
            choose to quiz on is ever sent anywhere.
          </p>

          {extractError && <div className="book-quiz-error">{extractError}</div>}

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf,image/*"
            multiple
            onChange={handleFileChange}
            disabled={extracting}
            style={{ marginBottom: 12 }}
          />
          {extracting && <p className="book-quiz-status">Reading your file…</p>}

          {pastQuizzes.length > 0 && (
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 10, color: 'var(--regal-blue)' }}>Your past book quizzes</h3>
              {pastLoading ? (
                <p className="book-quiz-status">Loading…</p>
              ) : (
                <div className="book-quiz-past-list">
                  {pastQuizzes.map(q => (
                    <button
                      key={q.id}
                      className="quiz-disc-btn book-quiz-past-btn"
                      onClick={() => startQuiz(q)}
                    >
                      <strong>{q.book_title}</strong> — {q.section_label} · {q.questions.length} questions
                      {q.source_type === 'image_ocr' && <span style={{ marginLeft: 6 }}>📷</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Section picker ──────────────────────────────────────────
  if (phase === 'sections') {
    return (
      <div className="page-content quiz-page">
        <h1 className="page-title">Book Quiz</h1>
        <p className="page-subtitle">Choose a section to be quizzed on</p>

        <div className="quiz-select-card card">
          <div className="book-quiz-field">
            <label className="book-quiz-label">Book title</label>
            <input
              type="text"
              className="book-quiz-input"
              value={bookTitle}
              onChange={e => setBookTitle(e.target.value)}
            />
          </div>

          {generateError && <div className="book-quiz-error">{generateError}</div>}

          {paywallMsg && (
            <div className="book-quiz-paywall">
              <p>{paywallMsg}</p>
              <div className="book-quiz-paywall-actions">
                <button className="btn btn-primary" onClick={() => handlePaystack('monthly')}>₦2,000 / month →</button>
                <button className="btn btn-primary" onClick={() => handlePaystack('annual')}>₦20,000 / year →</button>
              </div>
            </div>
          )}

          <div className="book-quiz-past-list" style={{ marginBottom: 16 }}>
            {sections.map(s => (
              <button
                key={s.index}
                className={`quiz-disc-btn book-quiz-section-btn ${selectedSectionIdx === s.index ? 'quiz-disc-btn--active' : ''} ${s.garbled ? 'book-quiz-section-btn--garbled' : ''}`}
                onClick={() => !s.garbled && setSelectedSectionIdx(s.index)}
                disabled={s.garbled}
              >
                {s.type === 'image' ? (
                  <>
                    <strong>{s.pageRange}</strong>
                    <div className="book-quiz-section-preview">
                      📷 Will be read with our system transcription when generating
                    </div>
                  </>
                ) : (
                  <>
                    <strong>Section {s.index + 1}</strong> — {s.wordCount} words
                    {s.garbled ? (
                      <div className="book-quiz-section-warning">
                        ⚠️ Text couldn't be read reliably from this part of the file
                      </div>
                    ) : (
                      <div className="arabic book-quiz-section-preview">{s.preview}</div>
                    )}
                  </>
                )}
              </button>
            ))}
          </div>

          <div className="book-quiz-actions-row">
            <button className="btn btn-primary" onClick={generateQuiz} disabled={selectedSectionIdx === null}>
              Generate Quiz →
            </button>
            <button className="btn btn-ghost" onClick={reset}>Upload a different book</button>
          </div>
        </div>
      </div>
    )
  }

  // ── Generating ──────────────────────────────────────────────
  if (phase === 'generating') {
    return (
      <div className="page-content quiz-page">
        <div className="quiz-select-card card book-quiz-generating">
          <p>Generating your quiz from this section…</p>
        </div>
      </div>
    )
  }

  // ── Active quiz ─────────────────────────────────────────────
  if (phase === 'quiz' && currentQ) {
    const progress = (qIndex / activeQuiz.questions.length) * 100
    return (
      <div className="page-content quiz-page">
        {activeQuiz.source_type === 'image_ocr' && (
          <p style={{ fontSize: '0.8rem', color: '#e65100', marginBottom: 12 }}>
            ⚠️ Generated from a scanned/photographed page.
          </p>
        )}

        <div className="quiz-progress-header">
          <span className="quiz-progress-label">Question {qIndex + 1} of {activeQuiz.questions.length}</span>
          <span className="quiz-score-badge badge badge-regal">Score: {score}</span>
        </div>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="quiz-question-card card">
          {currentQ.type === 'mcq' ? (
            <>
              <p className="quiz-question-text arabic">{currentQ.question}</p>
              <div className="quiz-options">
                {currentQ.options.map((opt, idx) => {
                  let cls = 'quiz-option'
                  if (revealed) {
                    if (idx === currentQ.correctIndex) cls += ' quiz-option--correct'
                    else if (idx === chosen) cls += ' quiz-option--wrong'
                  } else if (chosen === idx) cls += ' quiz-option--selected'
                  return (
                    <button key={idx} className={cls} onClick={() => pickMcq(idx)} disabled={revealed}>
                      <span className="quiz-option-letter">{String.fromCharCode(65 + idx)}</span>
                      <span className="arabic">{opt}</span>
                    </button>
                  )
                })}
              </div>
              {revealed && <div className="quiz-explanation quiz-explanation--correct"><p className="arabic">{currentQ.explanation}</p></div>}
            </>
          ) : (
            <>
              <p className="quiz-question-text">Fill in the missing word (quoted directly from the book):</p>
              <p className="quiz-question-text arabic" style={{ fontSize: '1.1rem' }}>{currentQ.sentence}</p>
              <input
                type="text"
                className="arabic book-quiz-fillblank-input"
                dir="rtl"
                value={typedAnswer}
                onChange={e => setTypedAnswer(e.target.value)}
                disabled={revealed}
              />
              {!revealed ? (
                <button className="btn btn-primary" style={{ marginTop: 10 }} onClick={submitFillBlank} disabled={!typedAnswer.trim()}>Check</button>
              ) : (
                <div className={`quiz-explanation ${normalizeArabic(typedAnswer) === normalizeArabic(currentQ.answer) ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
                  <p>Correct answer: <span className="arabic">{currentQ.answer}</span></p>
                </div>
              )}
            </>
          )}

          {revealed && (
            <div className="quiz-next-row">
              <button className="btn btn-primary" onClick={nextQ}>
                {qIndex + 1 < activeQuiz.questions.length ? 'Next Question →' : 'See Results →'}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ── Result ──────────────────────────────────────────────────
  if (phase === 'result') {
    const percent = Math.round((score / activeQuiz.questions.length) * 100)
    return (
      <div className="page-content quiz-page">
        <div className="quiz-result-card card">
          <div className="quiz-result-header">
            <h2 className="quiz-result-title">{activeQuiz.book_title} — {activeQuiz.section_label}</h2>
            <div className="quiz-result-score">{score} / {activeQuiz.questions.length}</div>
            <div className="quiz-result-percent">{percent}%</div>
          </div>
          <div className="quiz-result-actions">
            <button className="btn btn-primary" onClick={() => startQuiz(activeQuiz)}>Retry This Quiz</button>
            <button className="btn btn-ghost" onClick={reset}>Upload Another Book</button>
          </div>
        </div>
      </div>
    )
  }

  return null
}