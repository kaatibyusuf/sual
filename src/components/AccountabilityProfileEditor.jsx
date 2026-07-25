import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

export default function AccountabilityProfileEditor({ user }) {
  const [form, setForm] = useState({ about: '', focus: '', interests: '', hobbies: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!user) return
    supabase
      .from('profiles')
      .select('accountability_about, accountability_focus, accountability_interests, accountability_hobbies')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setForm({
            about: data.accountability_about || '',
            focus: data.accountability_focus || '',
            interests: data.accountability_interests || '',
            hobbies: data.accountability_hobbies || '',
          })
        }
        setLoading(false)
      })
  }, [user])

  const save = async () => {
    setSaving(true)
    setSaved(false)
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          accountability_about: form.about.trim(),
          accountability_focus: form.focus.trim(),
          accountability_interests: form.interests.trim(),
          accountability_hobbies: form.hobbies.trim(),
        })
        .eq('id', user.id)
      if (error) throw error
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    } catch (err) {
      console.error('Failed to save accountability profile:', err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) return null

  const inputStyle = {
    width: '100%', padding: '10px 12px', borderRadius: 8,
    border: '1px solid #dceafb', fontSize: '0.9rem', fontFamily: 'inherit', marginBottom: 12,
  }
  const labelStyle = { fontSize: '0.82rem', fontWeight: 700, color: '#094570', marginBottom: 4, display: 'block' }

  return (
    <div style={{ background: '#fff', border: '1px solid #dceafb', borderRadius: 16, padding: 22, marginBottom: 20 }}>
      <h3 style={{ fontSize: '1.05rem', color: '#094570', marginBottom: 6 }}>Accountability Partner Profile</h3>
      <p style={{ fontSize: '0.85rem', color: '#56728a', marginBottom: 16 }}>
        Shown only to other unpaired members browsing for an accountability partner in Spaces, not shown publicly anywhere else.
      </p>

      <label style={labelStyle}>About you</label>
      <textarea
        style={{ ...inputStyle, resize: 'vertical' }}
        rows={3}
        placeholder="A little about yourself, your journey, what you're working on..."
        value={form.about}
        onChange={e => setForm(f => ({ ...f, about: e.target.value }))}
      />

      <label style={labelStyle}>Current focus / course</label>
      <input
        type="text"
        style={inputStyle}
        placeholder="e.g. Intermediate Arabiyyah, memorizing Juz 30"
        value={form.focus}
        onChange={e => setForm(f => ({ ...f, focus: e.target.value }))}
      />

      <label style={labelStyle}>Interests</label>
      <input
        type="text"
        style={inputStyle}
        placeholder="e.g. Fiqh, Seerah, Arabic poetry"
        value={form.interests}
        onChange={e => setForm(f => ({ ...f, interests: e.target.value }))}
      />

      <label style={labelStyle}>Hobbies</label>
      <input
        type="text"
        style={{ ...inputStyle, marginBottom: 16 }}
        placeholder="e.g. reading, football, calligraphy"
        value={form.hobbies}
        onChange={e => setForm(f => ({ ...f, hobbies: e.target.value }))}
      />

      <button
        onClick={save}
        disabled={saving}
        style={{ background: '#094570', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer' }}
      >
        {saving ? 'Saving...' : saved ? '✓ Saved' : 'Save Profile'}
      </button>
    </div>
  )
}