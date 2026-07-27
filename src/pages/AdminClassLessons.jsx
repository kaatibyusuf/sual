import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import './Spaces.css'

const CLASS_IDS = ['arabiyyah', 'hadeeth']
const LEVELS = ['beginner', 'intermediate', 'advanced']

export default function AdminClassLessons() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const [lmsMsg, setLmsMsg] = useState(null)

  const [form, setForm] = useState({
    class_id: 'arabiyyah',
    level: 'beginner',
    publish_date: new Date().toISOString().slice(0, 10),
    title: '',
    arabic_text: '',
    transliteration: '',
    translation: '',
    commentary: '',
    audio_url: '',
    add_to_lms: false,
  })

  const callFn = useCallback(async (payload) => {
    const { data: { session } } = await supabase.auth.getSession()
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-manage-class-lessons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.access_token}`,
      },
      body: JSON.stringify(payload),
    })
    const json = await res.json()
    if (!res.ok) throw new Error(json.error || 'Request failed')
    return json
  }, [])

  const loadEntries = useCallback(async () => {
    setLoading(true)
    try {
      const json = await callFn({ action: 'list' })
      setEntries(json.entries || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [callFn])

  useEffect(() => { loadEntries() }, [loadEntries])

  const updateField = (key, value) => setForm(f => ({ ...f, [key]: value }))

  const handleAudioUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError(null)
    try {
      const uploadInfo = await callFn({
        action: 'get_upload_url',
        class_id: form.class_id,
        level: form.level,
        publish_date: form.publish_date,
        filename: file.name,
      })
      const uploadRes = await fetch(uploadInfo.signedUrl, {
        method: 'PUT',
        headers: { 'Content-Type': file.type || 'audio/mpeg' },
        body: file,
      })
      if (!uploadRes.ok) throw new Error('Audio upload failed')
      updateField('audio_url', uploadInfo.audioUrl)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setError(null)
    setLmsMsg(null)
    try {
      const json = await callFn({ action: 'upsert', entry: form })
      if (form.add_to_lms) {
        if (json.lms?.ok) {
          setLmsMsg(json.lms.created
            ? 'Also added to LMS as a new section.'
            : 'Also synced to the existing LMS section.')
        } else if (json.lms) {
          setLmsMsg(`Daily lesson saved, but LMS sync failed: ${json.lms.error}`)
        }
      }
      await loadEntries()
      setForm(f => ({
        ...f,
        title: '', arabic_text: '', transliteration: '', translation: '',
        commentary: '', audio_url: '',
      }))
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (entry) => {
    if (!confirm(`Delete the ${entry.publish_date} entry for ${entry.class_id}/${entry.level}?`)) return
    try {
      await callFn({ action: 'delete', class_id: entry.class_id, level: entry.level, publish_date: entry.publish_date })
      await loadEntries()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="page-content spaces-page">
      <h1 className="page-title">Class Daily Lessons</h1>
      <p className="page-subtitle">Post today's Arabiyyah / Hadeeth lesson for each level.</p>

      {error && <div className="spaces-error">{error}</div>}
      {lmsMsg && (
        <div className="card" style={{ padding: '10px 14px', marginBottom: 16, background: 'rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.25)', borderRadius: 10, fontSize: '0.85rem' }}>
          {lmsMsg}
        </div>
      )}

      <div className="spaces-modal card" style={{ marginBottom: 24, maxWidth: 'none' }}>
        <div className="spaces-field">
          <label className="spaces-label">Class</label>
          <select className="spaces-select" value={form.class_id} onChange={e => updateField('class_id', e.target.value)}>
            {CLASS_IDS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Level</label>
          <select className="spaces-select" value={form.level} onChange={e => updateField('level', e.target.value)}>
            {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Date</label>
          <input type="date" className="spaces-input" value={form.publish_date} onChange={e => updateField('publish_date', e.target.value)} />
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Title</label>
          <input type="text" className="spaces-input" value={form.title} onChange={e => updateField('title', e.target.value)} />
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Arabic Text</label>
          <textarea className="spaces-textarea arabic" dir="rtl" value={form.arabic_text} onChange={e => updateField('arabic_text', e.target.value)} rows={3} />
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Transliteration</label>
          <textarea className="spaces-textarea" value={form.transliteration} onChange={e => updateField('transliteration', e.target.value)} rows={2} />
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Translation</label>
          <textarea className="spaces-textarea" value={form.translation} onChange={e => updateField('translation', e.target.value)} rows={3} />
        </div>
        <div className="spaces-field">
          <label className="spaces-label">Commentary</label>
          <textarea className="spaces-textarea" value={form.commentary} onChange={e => updateField('commentary', e.target.value)} rows={5} />
        </div>

        <div className="spaces-field">
          <label className="spaces-label">Audio (optional)</label>
          <input type="file" accept="audio/*" onChange={handleAudioUpload} disabled={uploading} />
          {uploading && <span style={{ marginLeft: 8, fontSize: '0.85rem' }}>Uploading…</span>}
          {form.audio_url && !uploading && (
            <audio controls src={form.audio_url} style={{ display: 'block', marginTop: 8, width: '100%' }} />
          )}
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0', fontSize: '0.9rem' }}>
          <input type="checkbox" checked={form.add_to_lms} onChange={e => updateField('add_to_lms', e.target.checked)} />
          Also add this to the LMS course library
        </label>

        <button className="spaces-submit-btn" onClick={handleSave} disabled={saving || !form.title.trim()}>
          {saving ? 'Saving...' : 'Publish Lesson →'}
        </button>
      </div>

      <h3 className="spaces-section-intro-title" style={{ marginBottom: 12 }}>Recent Entries</h3>
      {loading ? (
        <div className="spaces-loading"><div className="spaces-spinner" /></div>
      ) : entries.length === 0 ? (
        <div className="spaces-empty card"><p className="spaces-empty-text">No entries yet.</p></div>
      ) : (
        <div className="spaces-posts">
          {entries.map(entry => (
            <div key={entry.id} className="spaces-post-card card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p className="spaces-post-title" style={{ marginBottom: 2 }}>{entry.title}</p>
                <p className="spaces-post-date">
                  {entry.class_id} · {entry.level} · {entry.publish_date}
                  {entry.lms_section_id && <span style={{ marginLeft: 8 }}>· synced to LMS</span>}
                </p>
              </div>
              <button className="spaces-cancel-btn" onClick={() => handleDelete(entry)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}