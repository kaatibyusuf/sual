import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'
import './Admin.css'

export default function Admin({ user }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

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
    </div>
  )
}