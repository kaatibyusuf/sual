import React, { useState, useMemo } from 'react'
import { ARABIC_ALPHABET, ARABIC_DICTIONARY } from '../data/arabicDictionary.js'
import './ArabicDictionary.css'

export default function ArabicDictionary({ user }) {
  const [activeLetter, setActiveLetter] = useState(null)
  const [selectedWord, setSelectedWord] = useState(null)
  const [search, setSearch] = useState('')

  const allWords = useMemo(() => {
    return Object.entries(ARABIC_DICTIONARY).flatMap(([letter, words]) =>
      words.map(w => ({ ...w, letter }))
    )
  }, [])

  const searchResults = useMemo(() => {
    if (!search.trim()) return []
    const q = search.trim().toLowerCase()
    return allWords.filter(w =>
      w.word.includes(search.trim()) ||
      w.transliteration.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q)
    )
  }, [search, allWords])

  const openWord = (word) => setSelectedWord(word)
  const closeWord = () => setSelectedWord(null)

  const wordsForLetter = activeLetter ? (ARABIC_DICTIONARY[activeLetter] || []) : []
  const lettersWithContent = ARABIC_ALPHABET.filter(l => ARABIC_DICTIONARY[l]?.length > 0)
  const lettersPending = ARABIC_ALPHABET.filter(l => !ARABIC_DICTIONARY[l]?.length)

  // ── Word detail ──────────────────────────────────────────────
  if (selectedWord) {
    const w = selectedWord
    return (
      <div className="page-content ad-page">
        <button className="ad-back" onClick={closeWord}>← Back</button>

        <div className="ad-detail-header card">
          <span className="ad-detail-letter arabic">{w.letter}</span>
          <div>
            <h1 className="ad-detail-word arabic-lg">{w.word}</h1>
            <p className="ad-detail-translit">{w.transliteration}</p>
          </div>
        </div>

        <div className="ad-detail-section card">
          <h3 className="ad-detail-label">Meaning</h3>
          <p className="ad-detail-value">{w.meaning}</p>
          <span className="ad-pos-badge">{w.pos}</span>
        </div>

        {(w.synonym || w.antonym) && (
          <div className="ad-detail-grid">
            {w.synonym && (
              <div className="ad-detail-section card">
                <h3 className="ad-detail-label">Synonym</h3>
                <p className="ad-detail-value arabic-inline">{w.synonym}</p>
              </div>
            )}
            {w.antonym && (
              <div className="ad-detail-section card">
                <h3 className="ad-detail-label">Antonym</h3>
                <p className="ad-detail-value arabic-inline">{w.antonym}</p>
              </div>
            )}
          </div>
        )}

        <div className="ad-detail-section card">
          <h3 className="ad-detail-label">Everyday Usage</h3>
          <p className="ad-example-arabic arabic">{w.example.arabic}</p>
          <p className="ad-example-translit">{w.example.transliteration}</p>
          <p className="ad-example-translation">"{w.example.translation}"</p>
        </div>
      </div>
    )
  }

  // ── Letter's word list ───────────────────────────────────────
  if (activeLetter) {
    return (
      <div className="page-content ad-page">
        <button className="ad-back" onClick={() => setActiveLetter(null)}>← Back to Alphabet</button>

        <div className="ad-letter-header card">
          <span className="ad-letter-big arabic">{activeLetter}</span>
          <p className="ad-letter-count">{wordsForLetter.length} words</p>
        </div>

        {wordsForLetter.length === 0 ? (
          <div className="ad-empty card">
            <p>Words for this letter are coming soon.</p>
          </div>
        ) : (
          <div className="ad-word-list">
            {wordsForLetter.map((w, i) => (
              <button key={i} className="ad-word-card card" onClick={() => openWord({ ...w, letter: activeLetter })}>
                <span className="ad-word-arabic arabic">{w.word}</span>
                <div className="ad-word-text">
                  <p className="ad-word-translit">{w.transliteration}</p>
                  <p className="ad-word-meaning">{w.meaning}</p>
                </div>
                <span className="ad-word-arrow">→</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ── Alphabet grid + search ───────────────────────────────────
  return (
    <div className="page-content ad-page">
      <h1 className="page-title">Arabic Dictionary</h1>
      <p className="page-subtitle">قَامُوس عَرَبِيّ — Words, meanings, synonyms, antonyms, and everyday use</p>

      <div className="ad-search">
        <input
          type="text"
          className="ad-search-input"
          placeholder="Search a word, meaning, or transliteration…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && <button className="ad-search-clear" onClick={() => setSearch('')}>✕</button>}
      </div>

      {search.trim() ? (
        <div className="ad-word-list">
          {searchResults.length === 0 ? (
            <div className="ad-empty card"><p>No words found for "{search}".</p></div>
          ) : (
            searchResults.map((w, i) => (
              <button key={i} className="ad-word-card card" onClick={() => openWord(w)}>
                <span className="ad-word-arabic arabic">{w.word}</span>
                <div className="ad-word-text">
                  <p className="ad-word-translit">{w.transliteration}</p>
                  <p className="ad-word-meaning">{w.meaning}</p>
                </div>
                <span className="ad-word-arrow">→</span>
              </button>
            ))
          )}
        </div>
      ) : (
        <>
          <p className="ad-section-label">Browse by Letter</p>
          <div className="ad-alphabet-grid">
            {lettersWithContent.map(letter => (
              <button key={letter} className="ad-letter-tile" onClick={() => setActiveLetter(letter)}>
                <span className="arabic">{letter}</span>
              </button>
            ))}
          </div>

          {lettersPending.length > 0 && (
            <>
              <p className="ad-section-label ad-section-label--muted">More Letters Coming Soon</p>
              <div className="ad-alphabet-grid ad-alphabet-grid--pending">
                {lettersPending.map(letter => (
                  <div key={letter} className="ad-letter-tile ad-letter-tile--pending">
                    <span className="arabic">{letter}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}