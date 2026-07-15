import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Admin.css'

export default function Admin({ user }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const [grantEmail, setGrantEmail] = useState('')
  const [granting, setGranting] = useState(false)
  const [grantResult, setGrantResult] = useState(null)
  const [grantError, setGrantError] = useState(null)

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
    </div>
  )
}