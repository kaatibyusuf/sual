import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

// Sual Feedback — admin panel.
// Pulled into its own file rather than added inline to Admin.jsx, since
// that file already covers nine other admin surfaces. Mounted from
// Admin.jsx via:
//
//   import AdminFeedback from './AdminFeedback.jsx'
//   ...
//   <AdminFeedback />
//
// Talks to the `admin-manage-feedback` edge function (list / get /
// update_status). Column names below are confirmed against the real
// sual_feedback_schema.sql: feedback_items has no ticket_number or
// category column (ticket label is computed as SF-{id}; type is
// 'bug'/'feature'), and feedback_attachments has no filename column.

const STATUS_LABELS = {
  new: 'New',
  triaged: 'Triaged',
  in_progress: 'In Progress',
  fixed: 'Fixed',
  wont_fix: "Won't Fix",
  duplicate: 'Duplicate',
}

const STATUS_COLORS = {
  new: '#094570',
  triaged: '#7b3f00',
  in_progress: '#6a1b9a',
  fixed: '#2e7d32',
  wont_fix: '#6a8090',
  duplicate: '#6a8090',
}

function StatusBadge({ status }) {
  return (
    <span
      style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        color: '#fff',
        background: STATUS_COLORS[status] || '#6a8090',
        padding: '3px 10px',
        borderRadius: 100,
      }}
    >
      {STATUS_LABELS[status] || status}
    </span>
  )
}

function TypeBadge({ type }) {
  return (
    <span
      style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        color: type === 'bug' ? '#c0392b' : '#094570',
        background: type === 'bug' ? 'rgba(192,57,43,0.1)' : 'rgba(9,69,112,0.08)',
        padding: '3px 10px',
        borderRadius: 100,
        textTransform: 'uppercase',
        letterSpacing: '0.03em',
      }}
    >
      {type === 'bug' ? 'Bug' : 'Feature'}
    </span>
  )
}

export default function AdminFeedback() {
  const [items, setItems] = useState([])
  const [itemsLoading, setItemsLoading] = useState(false)
  const [listError, setListError] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')

  const [selectedId, setSelectedId] = useState(null)
  const [detail, setDetail] = useState(null)
  const [attachments, setAttachments] = useState([])
  const [detailLoading, setDetailLoading] = useState(false)
  const [detailError, setDetailError] = useState(null)

  const [statusUpdating, setStatusUpdating] = useState(false)

  const fetchItems = async () => {
    setItemsLoading(true)
    setListError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-feedback', {
        body: { action: 'list' },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setItems(data.items || [])
    } catch (err) {
      console.error('Failed to load feedback items:', err)
      setListError(err.message)
    } finally {
      setItemsLoading(false)
    }
  }

  const openItem = async (item) => {
    setSelectedId(item.id)
    setDetail(null)
    setAttachments([])
    setDetailLoading(true)
    setDetailError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-feedback', {
        body: { action: 'get', item_id: item.id },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setDetail(data.item)
      setAttachments(data.attachments || [])
    } catch (err) {
      setDetailError(err.message)
    } finally {
      setDetailLoading(false)
    }
  }

  const updateStatus = async (newStatus) => {
    if (!detail) return
    setStatusUpdating(true)
    setDetailError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-feedback', {
        body: { action: 'update_status', item_id: detail.id, status: newStatus },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setDetail(data.item)
      fetchItems()
    } catch (err) {
      setDetailError(err.message)
    } finally {
      setStatusUpdating(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const filteredItems = items.filter(i => statusFilter === 'all' || i.status === statusFilter)

  return (
    <div className="card" style={{ marginTop: 20, padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 6 }}>
        <h3>Sual Feedback</h3>
        <button className="btn btn-ghost" onClick={fetchItems} disabled={itemsLoading}>
          {itemsLoading ? 'Refreshing…' : '↻ Refresh'}
        </button>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
        Items triaged from emailed feedback. A commit message containing
        "Fixes SF-&#123;id&#125;" (or Closes/Resolves) auto-marks an item fixed and
        emails the submitter — status can also be changed manually here.
      </p>

      {listError && <div className="admin-error" style={{ marginBottom: 12 }}>{listError}</div>}

      <div style={{ marginBottom: 14 }}>
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          style={{ padding: '7px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.82rem' }}
        >
          <option value="all">All statuses</option>
          {STATUSES_FOR_FILTER.map(s => (
            <option key={s} value={s}>{STATUS_LABELS[s]}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 300px' }}>
          {itemsLoading ? (
            <p style={{ color: '#8a9ab0', fontSize: '0.85rem' }}>Loading…</p>
          ) : filteredItems.length === 0 ? (
            <p style={{ color: '#8a9ab0', fontSize: '0.85rem' }}>No feedback items yet.</p>
          ) : (
            filteredItems.map(item => (
              <button
                key={item.id}
                onClick={() => openItem(item)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px 10px',
                  marginBottom: 4,
                  borderRadius: 8,
                  border: 'none',
                  background: selectedId === item.id ? 'rgba(9,69,112,0.08)' : 'transparent',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                }}
              >
                <strong>SF-{item.id}</strong> — {item.title || '(untitled)'}
                <br />
                <span style={{ fontSize: '0.72rem', color: '#8a9ab0' }}>
                  {item.submitter_email} · {new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <div style={{ marginTop: 4, display: 'flex', gap: 6 }}>
                  <TypeBadge type={item.type} />
                  <StatusBadge status={item.status} />
                </div>
              </button>
            ))
          )}
        </div>

        <div style={{ flex: 1, minWidth: 280 }}>
          {!selectedId ? (
            <p style={{ color: '#8a9ab0' }}>Select an item on the left.</p>
          ) : detailLoading ? (
            <p>Loading…</p>
          ) : detailError ? (
            <div className="admin-error">{detailError}</div>
          ) : detail ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                  SF-{detail.id} — {detail.title || '(untitled)'}
                </p>
                <span style={{ display: 'flex', gap: 6 }}>
                  <TypeBadge type={detail.type} />
                  <StatusBadge status={detail.status} />
                </span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#6a8090', marginBottom: 12 }}>
                {detail.submitter_name ? `${detail.submitter_name} · ` : ''}{detail.submitter_email} · {new Date(detail.created_at).toLocaleString('en-GB')}
              </p>

              <p style={{ fontSize: '0.88rem', whiteSpace: 'pre-wrap', marginBottom: 16 }}>
                {detail.description}
              </p>

              {attachments.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>Screenshots</p>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {attachments.map((a, i) => (
                      a.url ? (
                        <a key={a.id} href={a.url} target="_blank" rel="noreferrer">
                          <img src={a.url} alt={`Screenshot ${i + 1}`} style={{ width: 140, height: 100, objectFit: 'cover', borderRadius: 8, border: '1px solid #d0e0ec' }} />
                        </a>
                      ) : (
                        <span key={a.id} style={{ fontSize: '0.78rem', color: '#c0392b' }}>
                          Screenshot {i + 1} (couldn't load: {a.signError})
                        </span>
                      )
                    ))}
                  </div>
                </div>
              )}

              {detail.fixed_commit_sha && (
                <p style={{ fontSize: '0.78rem', color: '#2e7d32', marginBottom: 16 }}>
                  ✓ Auto-fixed by commit {detail.fixed_commit_sha.slice(0, 7)}
                  {detail.fixed_at && <> on {new Date(detail.fixed_at).toLocaleDateString('en-GB')}</>}
                </p>
              )}

              <div style={{ marginTop: 8, paddingTop: 16, borderTop: '1px solid #e8f0f8' }}>
                <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>Change status</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {STATUSES_FOR_FILTER.map(s => (
                    <button
                      key={s}
                      className="btn btn-ghost"
                      onClick={() => updateStatus(s)}
                      disabled={statusUpdating || detail.status === s}
                      style={detail.status === s ? { background: 'rgba(9,69,112,0.1)' } : {}}
                    >
                      {STATUS_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

const STATUSES_FOR_FILTER = ['new', 'triaged', 'in_progress', 'fixed', 'wont_fix', 'duplicate']