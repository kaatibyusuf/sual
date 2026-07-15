import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Admin.css'

const EMPTY_ENTRY = {
  publish_date: '',
  surah_name: '',
  surah_num: '',
  ayah_num: '',
  arabic_text: '',
  transliteration: '',
  translation: '',
  tafseer_body: '',
  lessons: [''],
}

export default function Admin({ user }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const [grantEmail, setGrantEmail] = useState('')
  const [granting, setGranting] = useState(false)
  const [grantResult, setGrantResult] = useState(null)
  const [grantError, setGrantError] = useState(null)

  const [tafseerEntries, setTafseerEntries] = useState([])
  const [tafseerListLoading, setTafseerListLoading] = useState(false)
  const [tafseerForm, setTafseerForm] = useState(EMPTY_ENTRY)
  const [tafseerSaving, setTafseerSaving] = useState(false)
  const [tafseerError, setTafseerError] = useState(null)
  const [tafseerSaved, setTafseerSaved] = useState(null)
  const [editingDate, setEditingDate] = useState(null)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-stats')
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setStats(data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Failed to load admin stats:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const grantAccess = async () => {
    const email = grantEmail.trim().toLowerCase()
    if (!email) return
    setGranting(true)
    setGrantError(null)
    setGrantResult(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-grant-access', {
        body: { email },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setGrantResult(data)
      setGrantEmail('')
    } catch (err) {
      console.error('Failed to grant access:', err)
      setGrantError(err.message)
    } finally {
      setGranting(false)
    }
  }

  const fetchTafseerList = async () => {
    setTafseerListLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'list' },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setTafseerEntries(data.entries || [])
    } catch (err) {
      console.error('Failed to load tafseer entries:', err)
    } finally {
      setTafseerListLoading(false)
    }
  }

  const loadEntryIntoForm = (entry) => {
    setEditingDate(entry.publish_date)
    setTafseerForm({
      publish_date: entry.publish_date || '',
      surah_name: entry.surah_name || '',
      surah_num: entry.surah_num ?? '',
      ayah_num: entry.ayah_num ?? '',
      arabic_text: entry.arabic_text || '',
      transliteration: entry.transliteration || '',
      translation: entry.translation || '',
      tafseer_body: entry.tafseer_body || '',
      lessons: Array.isArray(entry.lessons) && entry.lessons.length > 0 ? entry.lessons : [''],
    })
    setTafseerSaved(null)
    setTafseerError(null)
  }

  const resetTafseerForm = () => {
    setEditingDate(null)
    setTafseerForm(EMPTY_ENTRY)
    setTafseerSaved(null)
    setTafseerError(null)
  }

  const updateLesson = (idx, value) => {
    setTafseerForm(f => {
      const lessons = [...f.lessons]
      lessons[idx] = value
      return { ...f, lessons }
    })
  }

  const addLessonField = () => {
    setTafseerForm(f => ({ ...f, lessons: [...f.lessons, ''] }))
  }

  const removeLessonField = (idx) => {
    setTafseerForm(f => ({ ...f, lessons: f.lessons.filter((_, i) => i !== idx) }))
  }

  const saveTafseer = async () => {
    setTafseerSaving(true)
    setTafseerError(null)
    setTafseerSaved(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'upsert', entry: tafseerForm },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setTafseerSaved(data.entry)
      resetTafseerForm()
      fetchTafseerList()
    } catch (err) {
      console.error('Failed to save tafseer entry:', err)
      setTafseerError(err.message)
    } finally {
      setTafseerSaving(false)
    }
  }

  const deleteTafseer = async (publishDate) => {
    if (!window.confirm(`Delete the tafseer entry for ${publishDate}?`)) return
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'delete', publish_date: publishDate },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (editingDate === publishDate) resetTafseerForm()
      fetchTafseerList()
    } catch (err) {
      console.error('Failed to delete tafseer entry:', err)
      setTafseerError(err.message)
    }
  }

  // FIX: this previously only ran the fetch inline inside useEffect
  // with an empty dependency array — meaning it fired once, the very
  // first time this component ever mounted in the browser session,
  // and never again. In a router-based single-page app, navigating
  // away from /admin and back doesn't reload the page, so the numbers
  // looked permanently frozen even as real subscriptions and Hifdh
  // activity kept changing underneath. Pulling fetchStats out to its
  // own function lets a manual refresh call the identical logic.
  useEffect(() => {
    fetchStats()
    fetchTafseerList()
  }, [])

  if (!user) return null

  return (
    <div className="page-content admin-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Growth and activity at a glance</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {lastUpdated && (
            <span style={{ fontSize: '0.8rem', color: '#8a9ab0' }}>
              Last updated: {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}
          <button className="btn btn-primary" onClick={fetchStats} disabled={loading}>
            {loading ? 'Refreshing…' : '↻ Refresh'}
          </button>
        </div>
      </div>

      {error && <div className="admin-error card">Couldn't load stats: {error}</div>}

      {loading ? (
        <div className="admin-loading"><p>Loading…</p></div>
      ) : stats ? (
        <div className="admin-stats-grid">
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalUsers}</span>
            <span className="admin-stat-label">Total users</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.newLast7}</span>
            <span className="admin-stat-label">New (last 7 days)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.newLast30}</span>
            <span className="admin-stat-label">New (last 30 days)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value" style={{ color: '#2e7d32' }}>{stats.activeSubscriptions}</span>
            <span className="admin-stat-label">Active Spaces subscriptions</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalQuizzesTaken}</span>
            <span className="admin-stat-label">Quizzes taken (all time)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalSpacesPosts}</span>
            <span className="admin-stat-label">Spaces posts (all time)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value" style={{ color: '#094570' }}>{stats.hifdhActiveUsers}</span>
            <span className="admin-stat-label">Hifdh — active users</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.hifdhTotalProgressRows}</span>
            <span className="admin-stat-label">Hifdh — total progress rows</span>
          </div>
        </div>
      ) : null}

      {/* Manual Spaces access grant — for members who paid but are
          stuck without access. Writes to `subscriptions` the same
          way the Paystack webhook does on a real successful charge,
          so a manually-granted member is indistinguishable from one
          who paid normally. If the email has no existing Sual
          account, one is created and invited automatically. */}
      <div className="card" style={{ marginTop: 28, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Grant Spaces Access</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 14 }}>
          For members who paid but can't get into Spaces. If they don't have a Sual
          account yet, one will be created and they'll be emailed a link to set a
          password.
        </p>

        {grantError && <div className="admin-error" style={{ marginBottom: 12 }}>{grantError}</div>}

        {grantResult && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              color: '#2e7d32',
              fontSize: '0.85rem',
            }}
          >
            Access granted for {grantResult.email}.{' '}
            {grantResult.accountCreated ? 'A new account was created and invited.' : 'Existing account activated.'}{' '}
            {grantResult.welcomeEmailSent ? 'Welcome email sent.' : 'Welcome email already sent previously.'}
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="member@email.com"
            value={grantEmail}
            onChange={e => setGrantEmail(e.target.value)}
            style={{
              flex: '1 1 260px',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #d0e0ec',
              fontSize: '0.9rem',
            }}
          />
          <button
            className="btn btn-primary"
            onClick={grantAccess}
            disabled={granting || !grantEmail.trim()}
          >
            {granting ? 'Granting…' : 'Grant Access'}
          </button>
        </div>
      </div>

      {/* Daily Tafseer manager — create ahead of time, override a bad
          automated pick, or add lessons/transliteration the generator
          doesn't fetch. Upserts on publish_date, so setting a future
          date here means daily-tafseer-generator will find that row
          already exists and skip it automatically on its own. */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Daily Tafseer</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
          {editingDate
            ? `Editing the entry for ${editingDate}.`
            : 'Set a date to create a new entry, or edit one from the list below. Setting a future date here means the automated generator will skip that day.'}
        </p>

        {tafseerError && <div className="admin-error" style={{ marginBottom: 12 }}>{tafseerError}</div>}
        {tafseerSaved && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              color: '#2e7d32',
              fontSize: '0.85rem',
            }}
          >
            Saved tafseer entry for {tafseerSaved.publish_date}.
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 12 }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Publish date</label>
            <input
              type="date"
              value={tafseerForm.publish_date}
              onChange={e => setTafseerForm(f => ({ ...f, publish_date: e.target.value }))}
              disabled={!!editingDate}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Surah name</label>
            <input
              type="text"
              placeholder="Al-Baqarah"
              value={tafseerForm.surah_name}
              onChange={e => setTafseerForm(f => ({ ...f, surah_name: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Surah #</label>
            <input
              type="number"
              min="1" max="114"
              value={tafseerForm.surah_num}
              onChange={e => setTafseerForm(f => ({ ...f, surah_num: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Ayah #</label>
            <input
              type="number"
              min="1"
              value={tafseerForm.ayah_num}
              onChange={e => setTafseerForm(f => ({ ...f, ayah_num: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Arabic text</label>
          <textarea
            rows={2}
            dir="rtl"
            value={tafseerForm.arabic_text}
            onChange={e => setTafseerForm(f => ({ ...f, arabic_text: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '1rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Transliteration</label>
          <textarea
            rows={2}
            placeholder="Bismillahir-Rahmanir-Raheem..."
            value={tafseerForm.transliteration}
            onChange={e => setTafseerForm(f => ({ ...f, transliteration: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Translation</label>
          <textarea
            rows={2}
            value={tafseerForm.translation}
            onChange={e => setTafseerForm(f => ({ ...f, translation: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Commentary (tafseer)</label>
          <textarea
            rows={5}
            value={tafseerForm.tafseer_body}
            onChange={e => setTafseerForm(f => ({ ...f, tafseer_body: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 6 }}>Lessons</label>
          {tafseerForm.lessons.map((lesson, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input
                type="text"
                placeholder={`Lesson ${idx + 1}`}
                value={lesson}
                onChange={e => updateLesson(idx, e.target.value)}
                style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
              />
              {tafseerForm.lessons.length > 1 && (
                <button className="btn btn-ghost" onClick={() => removeLessonField(idx)} type="button">✕</button>
              )}
            </div>
          ))}
          <button className="btn btn-ghost" onClick={addLessonField} type="button">+ Add lesson</button>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            className="btn btn-primary"
            onClick={saveTafseer}
            disabled={tafseerSaving || !tafseerForm.publish_date || !tafseerForm.surah_name || !tafseerForm.arabic_text || !tafseerForm.translation}
          >
            {tafseerSaving ? 'Saving…' : editingDate ? 'Update Entry' : 'Save Entry'}
          </button>
          {editingDate && (
            <button className="btn btn-ghost" onClick={resetTafseerForm} type="button">Cancel Edit</button>
          )}
        </div>

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid #e8f0f8' }}>
          <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 10 }}>Recent entries</p>
          {tafseerListLoading ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Loading…</p>
          ) : tafseerEntries.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No entries yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {tafseerEntries.map(entry => (
                <div
                  key={entry.publish_date}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: editingDate === entry.publish_date ? 'rgba(9,69,112,0.06)' : '#f5f8fb',
                    fontSize: '0.85rem',
                  }}
                >
                  <span>
                    <strong>{entry.publish_date}</strong> — {entry.surah_name} {entry.surah_num}:{entry.ayah_num}
                  </span>
                  <span style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-ghost" onClick={() => loadEntryIntoForm(entry)} type="button">Edit</button>
                    <button className="btn btn-ghost" onClick={() => deleteTafseer(entry.publish_date)} type="button" style={{ color: '#c0392b' }}>Delete</button>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}