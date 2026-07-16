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

const EMPTY_CLASS_LESSON = {
  class_id: 'hadeeth',
  level: 'beginner',
  publish_date: '',
  title: '',
  arabic_text: '',
  transliteration: '',
  translation: '',
  commentary: '',
  audio_url: '',
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

  const [classLessonEntries, setClassLessonEntries] = useState([])
  const [classLessonListLoading, setClassLessonListLoading] = useState(false)
  const [classLessonForm, setClassLessonForm] = useState(EMPTY_CLASS_LESSON)
  const [classLessonSaving, setClassLessonSaving] = useState(false)
  const [classLessonError, setClassLessonError] = useState(null)
  const [classLessonSaved, setClassLessonSaved] = useState(null)
  const [editingClassLessonKey, setEditingClassLessonKey] = useState(null)

  const [audioFile, setAudioFile] = useState(null)
  const [audioUploading, setAudioUploading] = useState(false)
  const [audioUploadError, setAudioUploadError] = useState(null)

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

  // ── Class daily lessons (Arabiyyah + Hadeeth) ────────────────
  const fetchClassLessonList = async () => {
    setClassLessonListLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'list' },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setClassLessonEntries(data.entries || [])
    } catch (err) {
      console.error('Failed to load class lesson entries:', err)
    } finally {
      setClassLessonListLoading(false)
    }
  }

  const loadClassLessonIntoForm = (entry) => {
    setEditingClassLessonKey(`${entry.class_id}|${entry.level}|${entry.publish_date}`)
    setClassLessonForm({
      class_id: entry.class_id,
      level: entry.level,
      publish_date: entry.publish_date || '',
      title: entry.title || '',
      arabic_text: entry.arabic_text || '',
      transliteration: entry.transliteration || '',
      translation: entry.translation || '',
      commentary: entry.commentary || '',
      audio_url: entry.audio_url || '',
      lessons: Array.isArray(entry.lessons) && entry.lessons.length > 0 ? entry.lessons : [''],
    })
    setClassLessonSaved(null)
    setClassLessonError(null)
    setAudioFile(null)
    setAudioUploadError(null)
  }

  const resetClassLessonForm = () => {
    setEditingClassLessonKey(null)
    setClassLessonForm(EMPTY_CLASS_LESSON)
    setClassLessonSaved(null)
    setClassLessonError(null)
    setAudioFile(null)
    setAudioUploadError(null)
  }

  const updateClassLessonLesson = (idx, value) => {
    setClassLessonForm(f => {
      const lessons = [...f.lessons]
      lessons[idx] = value
      return { ...f, lessons }
    })
  }

  const addClassLessonField = () => {
    setClassLessonForm(f => ({ ...f, lessons: [...f.lessons, ''] }))
  }

  const removeClassLessonField = (idx) => {
    setClassLessonForm(f => ({ ...f, lessons: f.lessons.filter((_, i) => i !== idx) }))
  }

  const uploadAudio = async () => {
    if (!audioFile) return
    if (!classLessonForm.publish_date) {
      setAudioUploadError('Set the publish date first.')
      return
    }
    setAudioUploading(true)
    setAudioUploadError(null)
    try {
      const { data: urlData, error: urlError } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: {
          action: 'get_upload_url',
          class_id: classLessonForm.class_id,
          level: classLessonForm.level,
          publish_date: classLessonForm.publish_date,
          filename: audioFile.name,
        },
      })
      if (urlError) throw urlError
      if (urlData?.error) throw new Error(urlData.error)

      const { error: uploadError } = await supabase.storage
        .from('class-audio')
        .uploadToSignedUrl(urlData.path, urlData.token, audioFile)
      if (uploadError) throw uploadError

      setClassLessonForm(f => ({ ...f, audio_url: urlData.audioUrl }))
      setAudioFile(null)
    } catch (err) {
      console.error('Failed to upload audio:', err)
      setAudioUploadError(err.message)
    } finally {
      setAudioUploading(false)
    }
  }

  const saveClassLesson = async () => {
    setClassLessonSaving(true)
    setClassLessonError(null)
    setClassLessonSaved(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'upsert', entry: classLessonForm },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setClassLessonSaved(data.entry)
      resetClassLessonForm()
      fetchClassLessonList()
    } catch (err) {
      console.error('Failed to save class lesson entry:', err)
      setClassLessonError(err.message)
    } finally {
      setClassLessonSaving(false)
    }
  }

  const deleteClassLesson = async (entry) => {
    if (!window.confirm(`Delete the ${entry.class_id} (${entry.level}) lesson for ${entry.publish_date}?`)) return
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'delete', class_id: entry.class_id, level: entry.level, publish_date: entry.publish_date },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      const key = `${entry.class_id}|${entry.level}|${entry.publish_date}`
      if (editingClassLessonKey === key) resetClassLessonForm()
      fetchClassLessonList()
    } catch (err) {
      console.error('Failed to delete class lesson entry:', err)
      setClassLessonError(err.message)
    }
  }

  useEffect(() => {
    fetchStats()
    fetchTafseerList()
    fetchClassLessonList()
  }, [])

  if (!user) return null

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Sual — growth and activity at a glance</p>
        </div>
        <div className="admin-header-actions">
          {lastUpdated && (
            <span className="admin-updated">
              updated {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}
          <button className="admin-btn" onClick={fetchStats} disabled={loading}>
            {loading ? 'Refreshing…' : '↻ Refresh'}
          </button>
        </div>
      </div>

      {error && <div className="admin-error" style={{ marginBottom: 16 }}>Couldn't load stats: {error}</div>}

      {loading ? (
        <div className="admin-loading">Loading…</div>
      ) : stats ? (
        <div className="admin-stats-grid">
          <div className="admin-stat">
            <span className="admin-stat-label">Total Users</span>
            <span className="admin-stat-value">{stats.totalUsers}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">New — 7 Days</span>
            <span className="admin-stat-value">{stats.newLast7}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">New — 30 Days</span>
            <span className="admin-stat-value">{stats.newLast30}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">Active Spaces Subs</span>
            <span className="admin-stat-value admin-stat-value--green">{stats.activeSubscriptions}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">Quizzes Taken</span>
            <span className="admin-stat-value">{stats.totalQuizzesTaken}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">Spaces Posts</span>
            <span className="admin-stat-value">{stats.totalSpacesPosts}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">Hifdh — Active Users</span>
            <span className="admin-stat-value admin-stat-value--blue">{stats.hifdhActiveUsers}</span>
          </div>
          <div className="admin-stat">
            <span className="admin-stat-label">Hifdh — Progress Rows</span>
            <span className="admin-stat-value">{stats.hifdhTotalProgressRows}</span>
          </div>
        </div>
      ) : null}

      {/* Manual Spaces access grant */}
      <div className="admin-panel">
        <div className="admin-panel-header">
          <h3 className="admin-panel-title">🔑 Grant Spaces Access</h3>
          <p className="admin-panel-desc">
            For members who paid but can't get into Spaces. If they don't have a Sual
            account yet, one will be created and they'll be emailed a link to set a password.
          </p>
        </div>

        {grantError && <div className="admin-error" style={{ marginBottom: 12 }}>{grantError}</div>}
        {grantResult && (
          <div className="admin-success" style={{ marginBottom: 12 }}>
            Access granted for {grantResult.email}.{' '}
            {grantResult.accountCreated ? 'A new account was created and invited.' : 'Existing account activated.'}{' '}
            {grantResult.welcomeEmailSent ? 'Welcome email sent.' : 'Welcome email already sent previously.'}
          </div>
        )}

        <div className="admin-inline-row">
          <input
            type="email"
            className="admin-input"
            placeholder="member@email.com"
            value={grantEmail}
            onChange={e => setGrantEmail(e.target.value)}
            style={{ flex: '1 1 260px' }}
          />
          <button className="admin-btn" onClick={grantAccess} disabled={granting || !grantEmail.trim()}>
            {granting ? 'Granting…' : 'Grant Access'}
          </button>
        </div>
      </div>

      {/* Daily Tafseer manager */}
      <div className="admin-panel">
        <div className="admin-panel-header">
          <h3 className="admin-panel-title">📖 Daily Tafseer</h3>
          <p className="admin-panel-desc">
            {editingDate
              ? `Editing the entry for ${editingDate}.`
              : 'Set a date to create a new entry, or edit one from the list below. Setting a future date here means the automated generator will skip that day.'}
          </p>
        </div>

        {tafseerError && <div className="admin-error" style={{ marginBottom: 12 }}>{tafseerError}</div>}
        {tafseerSaved && <div className="admin-success" style={{ marginBottom: 12 }}>Saved tafseer entry for {tafseerSaved.publish_date}.</div>}

        <div className="admin-field-row">
          <div className="admin-field">
            <label className="admin-label">Publish date</label>
            <input
              type="date"
              className="admin-input"
              value={tafseerForm.publish_date}
              onChange={e => setTafseerForm(f => ({ ...f, publish_date: e.target.value }))}
              disabled={!!editingDate}
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">Surah name</label>
            <input
              type="text"
              className="admin-input"
              placeholder="Al-Baqarah"
              value={tafseerForm.surah_name}
              onChange={e => setTafseerForm(f => ({ ...f, surah_name: e.target.value }))}
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">Surah #</label>
            <input
              type="number" min="1" max="114"
              className="admin-input"
              value={tafseerForm.surah_num}
              onChange={e => setTafseerForm(f => ({ ...f, surah_num: e.target.value }))}
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">Ayah #</label>
            <input
              type="number" min="1"
              className="admin-input"
              value={tafseerForm.ayah_num}
              onChange={e => setTafseerForm(f => ({ ...f, ayah_num: e.target.value }))}
            />
          </div>
        </div>

        <div className="admin-field">
          <label className="admin-label">Arabic text</label>
          <textarea
            rows={2} dir="rtl"
            className="admin-textarea admin-textarea--arabic"
            value={tafseerForm.arabic_text}
            onChange={e => setTafseerForm(f => ({ ...f, arabic_text: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Transliteration</label>
          <textarea
            rows={2}
            className="admin-textarea"
            placeholder="Bismillahir-Rahmanir-Raheem..."
            value={tafseerForm.transliteration}
            onChange={e => setTafseerForm(f => ({ ...f, transliteration: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Translation</label>
          <textarea
            rows={2}
            className="admin-textarea"
            value={tafseerForm.translation}
            onChange={e => setTafseerForm(f => ({ ...f, translation: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Commentary (tafseer)</label>
          <textarea
            rows={5}
            className="admin-textarea"
            value={tafseerForm.tafseer_body}
            onChange={e => setTafseerForm(f => ({ ...f, tafseer_body: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Lessons</label>
          {tafseerForm.lessons.map((lesson, idx) => (
            <div key={idx} className="admin-lesson-field">
              <input
                type="text"
                className="admin-input"
                placeholder={`Lesson ${idx + 1}`}
                value={lesson}
                onChange={e => updateLesson(idx, e.target.value)}
              />
              {tafseerForm.lessons.length > 1 && (
                <button className="admin-btn-ghost" onClick={() => removeLessonField(idx)} type="button">✕</button>
              )}
            </div>
          ))}
          <button className="admin-btn-ghost" onClick={addLessonField} type="button">+ Add lesson</button>
        </div>

        <div className="admin-actions-row">
          <button
            className="admin-btn"
            onClick={saveTafseer}
            disabled={tafseerSaving || !tafseerForm.publish_date || !tafseerForm.surah_name || !tafseerForm.arabic_text || !tafseerForm.translation}
          >
            {tafseerSaving ? 'Saving…' : editingDate ? 'Update Entry' : 'Save Entry'}
          </button>
          {editingDate && (
            <button className="admin-btn-ghost" onClick={resetTafseerForm} type="button">Cancel Edit</button>
          )}
        </div>

        <div className="admin-list">
          <p className="admin-list-label">Recent entries</p>
          {tafseerListLoading ? (
            <p className="admin-empty">Loading…</p>
          ) : tafseerEntries.length === 0 ? (
            <p className="admin-empty">No entries yet.</p>
          ) : (
            tafseerEntries.map(entry => (
              <div
                key={entry.publish_date}
                className={`admin-list-item ${editingDate === entry.publish_date ? 'admin-list-item--active' : ''}`}
              >
                <span className="admin-list-item-text">
                  <strong>{entry.publish_date}</strong> — {entry.surah_name} {entry.surah_num}:{entry.ayah_num}
                </span>
                <span className="admin-list-item-actions">
                  <button className="admin-btn-ghost" onClick={() => loadEntryIntoForm(entry)} type="button">Edit</button>
                  <button className="admin-btn-ghost admin-btn-danger" onClick={() => deleteTafseer(entry.publish_date)} type="button">Delete</button>
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Daily Class Lesson manager */}
      <div className="admin-panel">
        <div className="admin-panel-header">
          <h3 className="admin-panel-title">🎧 Daily Class Lesson</h3>
          <p className="admin-panel-desc">
            {editingClassLessonKey
              ? `Editing the ${classLessonForm.class_id} (${classLessonForm.level}) entry for ${classLessonForm.publish_date}.`
              : 'One entry per class and level per day. Sits alongside the Telegram group, not instead of it.'}
          </p>
        </div>

        {classLessonError && <div className="admin-error" style={{ marginBottom: 12 }}>{classLessonError}</div>}
        {classLessonSaved && (
          <div className="admin-success" style={{ marginBottom: 12 }}>
            Saved {classLessonSaved.class_id} ({classLessonSaved.level}) entry for {classLessonSaved.publish_date}.
          </div>
        )}

        <div className="admin-field-row">
          <div className="admin-field">
            <label className="admin-label">Class</label>
            <select
              className="admin-select"
              value={classLessonForm.class_id}
              onChange={e => setClassLessonForm(f => ({ ...f, class_id: e.target.value }))}
              disabled={!!editingClassLessonKey}
            >
              <option value="hadeeth">Hadeeth</option>
              <option value="arabiyyah">Arabiyyah</option>
            </select>
          </div>
          <div className="admin-field">
            <label className="admin-label">Level</label>
            <select
              className="admin-select"
              value={classLessonForm.level}
              onChange={e => setClassLessonForm(f => ({ ...f, level: e.target.value }))}
              disabled={!!editingClassLessonKey}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="admin-field">
            <label className="admin-label">Publish date</label>
            <input
              type="date"
              className="admin-input"
              value={classLessonForm.publish_date}
              onChange={e => setClassLessonForm(f => ({ ...f, publish_date: e.target.value }))}
              disabled={!!editingClassLessonKey}
            />
          </div>
        </div>

        <div className="admin-field">
          <label className="admin-label">Title</label>
          <input
            type="text"
            className="admin-input"
            placeholder={classLessonForm.class_id === 'hadeeth' ? 'Hadith 11 — On sincerity' : 'Idafah — the possessive construction'}
            value={classLessonForm.title}
            onChange={e => setClassLessonForm(f => ({ ...f, title: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Arabic text</label>
          <textarea
            rows={2} dir="rtl"
            className="admin-textarea admin-textarea--arabic"
            value={classLessonForm.arabic_text}
            onChange={e => setClassLessonForm(f => ({ ...f, arabic_text: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Transliteration</label>
          <textarea
            rows={2}
            className="admin-textarea"
            value={classLessonForm.transliteration}
            onChange={e => setClassLessonForm(f => ({ ...f, transliteration: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Translation</label>
          <textarea
            rows={2}
            className="admin-textarea"
            value={classLessonForm.translation}
            onChange={e => setClassLessonForm(f => ({ ...f, translation: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Commentary</label>
          <textarea
            rows={5}
            className="admin-textarea"
            value={classLessonForm.commentary}
            onChange={e => setClassLessonForm(f => ({ ...f, commentary: e.target.value }))}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Class audio</label>
          {classLessonForm.audio_url && (
            <div style={{ marginBottom: 8 }}>
              <audio controls src={classLessonForm.audio_url} className="admin-audio" />
              <button
                className="admin-btn-ghost admin-btn-danger"
                type="button"
                onClick={() => setClassLessonForm(f => ({ ...f, audio_url: '' }))}
                style={{ marginTop: 6, fontSize: '0.75rem' }}
              >
                Remove audio
              </button>
            </div>
          )}
          {audioUploadError && <div className="admin-error" style={{ marginBottom: 8 }}>{audioUploadError}</div>}
          <div className="admin-inline-row">
            <input
              type="file"
              accept="audio/*"
              onChange={e => setAudioFile(e.target.files?.[0] || null)}
              style={{ fontSize: '0.82rem', color: 'var(--admin-muted)' }}
            />
            <button className="admin-btn-ghost" type="button" onClick={uploadAudio} disabled={!audioFile || audioUploading}>
              {audioUploading ? 'Uploading…' : 'Upload'}
            </button>
          </div>
        </div>

        <div className="admin-field">
          <label className="admin-label">Lessons</label>
          {classLessonForm.lessons.map((lesson, idx) => (
            <div key={idx} className="admin-lesson-field">
              <input
                type="text"
                className="admin-input"
                placeholder={`Lesson ${idx + 1}`}
                value={lesson}
                onChange={e => updateClassLessonLesson(idx, e.target.value)}
              />
              {classLessonForm.lessons.length > 1 && (
                <button className="admin-btn-ghost" onClick={() => removeClassLessonField(idx)} type="button">✕</button>
              )}
            </div>
          ))}
          <button className="admin-btn-ghost" onClick={addClassLessonField} type="button">+ Add lesson</button>
        </div>

        <div className="admin-actions-row">
          <button
            className="admin-btn"
            onClick={saveClassLesson}
            disabled={classLessonSaving || !classLessonForm.publish_date || !classLessonForm.title.trim()}
          >
            {classLessonSaving ? 'Saving…' : editingClassLessonKey ? 'Update Entry' : 'Save Entry'}
          </button>
          {editingClassLessonKey && (
            <button className="admin-btn-ghost" onClick={resetClassLessonForm} type="button">Cancel Edit</button>
          )}
        </div>

        <div className="admin-list">
          <p className="admin-list-label">Recent entries</p>
          {classLessonListLoading ? (
            <p className="admin-empty">Loading…</p>
          ) : classLessonEntries.length === 0 ? (
            <p className="admin-empty">No entries yet.</p>
          ) : (
            classLessonEntries.map(entry => {
              const key = `${entry.class_id}|${entry.level}|${entry.publish_date}`
              return (
                <div key={key} className={`admin-list-item ${editingClassLessonKey === key ? 'admin-list-item--active' : ''}`}>
                  <span className="admin-list-item-text">
                    <strong>{entry.publish_date}</strong> — {entry.class_id} · {entry.level} — {entry.title}
                    {entry.audio_url && <span style={{ marginLeft: 6 }}>🎧</span>}
                  </span>
                  <span className="admin-list-item-actions">
                    <button className="admin-btn-ghost" onClick={() => loadClassLessonIntoForm(entry)} type="button">Edit</button>
                    <button className="admin-btn-ghost admin-btn-danger" onClick={() => deleteClassLesson(entry)} type="button">Delete</button>
                  </span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}