import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import './Admin.css'

export default function Admin({ user }) {
  const [checking, setChecking] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [tab, setTab] = useState('overview') // 'overview' | 'moderation'
  const [stats, setStats] = useState(null)
  const [statsError, setStatsError] = useState(null)
  const [posts, setPosts] = useState([])
  const [expandedId, setExpandedId] = useState(null)
  const [repliesByPost, setRepliesByPost] = useState({})
  const [loadingPosts, setLoadingPosts] = useState(false)

  useEffect(() => {
    if (!user) { setChecking(false); return }
    supabase
      .from('admins')
      .select('user_id')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        setIsAdmin(!!data)
        setChecking(false)
      })
  }, [user])

  const loadStats = useCallback(async () => {
    setStatsError(null)
    try {
      const { data: sessionData } = await supabase.auth.getSession()
      const token = sessionData?.session?.access_token
      const { data, error } = await supabase.functions.invoke('admin-stats', {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (error) throw error
      setStats(data)
    } catch (err) {
      setStatsError(err.message || 'Failed to load stats')
    }
  }, [])

  useEffect(() => {
    if (isAdmin && tab === 'overview') loadStats()
  }, [isAdmin, tab, loadStats])

  const loadPosts = useCallback(async () => {
    setLoadingPosts(true)
    const { data } = await supabase
      .from('spaces_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)
    setPosts(data || [])
    setLoadingPosts(false)
  }, [])

  useEffect(() => {
    if (isAdmin && tab === 'moderation') loadPosts()
  }, [isAdmin, tab, loadPosts])

  const toggleExpand = async (postId) => {
    if (expandedId === postId) { setExpandedId(null); return }
    setExpandedId(postId)
    if (!repliesByPost[postId]) {
      const { data } = await supabase
        .from('spaces_replies')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true })
      setRepliesByPost(prev => ({ ...prev, [postId]: data || [] }))
    }
  }

  const markScholarAnswer = async (reply) => {
    const { error } = await supabase
      .from('spaces_replies')
      .update({ is_scholar_answer: !reply.is_scholar_answer })
      .eq('id', reply.id)
    if (!error) {
      setRepliesByPost(prev => ({
        ...prev,
        [reply.post_id]: prev[reply.post_id].map(r =>
          r.id === reply.id ? { ...r, is_scholar_answer: !r.is_scholar_answer } : r
        ),
      }))
    }
  }

  const deleteReply = async (reply) => {
    if (!window.confirm('Delete this reply permanently?')) return
    const { error } = await supabase.from('spaces_replies').delete().eq('id', reply.id)
    if (!error) {
      setRepliesByPost(prev => ({
        ...prev,
        [reply.post_id]: prev[reply.post_id].filter(r => r.id !== reply.id),
      }))
    }
  }

  const deletePost = async (post) => {
    if (!window.confirm(`Delete "${post.title}" and all its replies permanently?`)) return
    const { error } = await supabase.from('spaces_posts').delete().eq('id', post.id)
    if (!error) {
      setPosts(prev => prev.filter(p => p.id !== post.id))
    }
  }

  if (!user) return null

  if (checking) {
    return (
      <div className="page-content admin-page">
        <div className="admin-loading">Checking access...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="page-content admin-page">
        <div className="admin-denied card">
          <p>You don't have access to this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content admin-page">
      <h1 className="page-title">Admin</h1>
      <p className="page-subtitle">Growth metrics and Spaces moderation</p>

      <div className="admin-tabs">
        <button
          className={`admin-tab ${tab === 'overview' ? 'admin-tab--active' : ''}`}
          onClick={() => setTab('overview')}
        >
          📊 Overview
        </button>
        <button
          className={`admin-tab ${tab === 'moderation' ? 'admin-tab--active' : ''}`}
          onClick={() => setTab('moderation')}
        >
          💬 Spaces Moderation
        </button>
      </div>

      {tab === 'overview' && (
        <>
          {statsError && <div className="admin-error">{statsError}</div>}
          {!stats && !statsError && <div className="admin-loading">Loading stats...</div>}
          {stats && (
            <div className="admin-stats-grid">
              <div className="admin-stat card">
                <span className="admin-stat-value">{stats.totalUsers}</span>
                <span className="admin-stat-label">Total users</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value" style={{ color: '#2e7d32' }}>+{stats.newLast7}</span>
                <span className="admin-stat-label">New — last 7 days</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value" style={{ color: '#2e7d32' }}>+{stats.newLast30}</span>
                <span className="admin-stat-label">New — last 30 days</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value" style={{ color: '#094570' }}>{stats.activeSubscriptions}</span>
                <span className="admin-stat-label">Active Spaces subscriptions</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value">{stats.totalQuizzesTaken}</span>
                <span className="admin-stat-label">Quizzes taken (all-time)</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value">{stats.totalSpacesPosts}</span>
                <span className="admin-stat-label">Spaces discussions started</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value">{stats.hifdhActiveUsers}</span>
                <span className="admin-stat-label">Users with hifdh progress</span>
              </div>
              <div className="admin-stat card">
                <span className="admin-stat-value">{stats.hifdhTotalProgressRows}</span>
                <span className="admin-stat-label">Hifdh items tracked</span>
              </div>
            </div>
          )}
        </>
      )}

      {tab === 'moderation' && (
        <div className="admin-moderation">
          {loadingPosts ? (
            <div className="admin-loading">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="admin-loading">No posts yet.</div>
          ) : (
            posts.map(post => (
              <div key={post.id} className="admin-post card">
                <button className="admin-post-head" onClick={() => toggleExpand(post.id)}>
                  <div>
                    <span className="admin-post-cat">{post.category}</span>
                    <p className="admin-post-title">{post.title}</p>
                  </div>
                  <span className="admin-post-toggle">{expandedId === post.id ? '▲' : '▼'}</span>
                </button>

                {expandedId === post.id && (
                  <div className="admin-post-body">
                    <p className="admin-post-text">{post.body}</p>
                    <button className="admin-delete-btn" onClick={() => deletePost(post)}>
                      🗑 Delete this post
                    </button>

                    <div className="admin-replies">
                      <p className="admin-replies-label">
                        {(repliesByPost[post.id] || []).length} replies
                      </p>
                      {(repliesByPost[post.id] || []).map(reply => (
                        <div key={reply.id} className={`admin-reply ${reply.is_scholar_answer ? 'admin-reply--scholar' : ''}`}>
                          <p className="admin-reply-body">{reply.body}</p>
                          <div className="admin-reply-actions">
                            <button
                              className={`admin-scholar-btn ${reply.is_scholar_answer ? 'admin-scholar-btn--active' : ''}`}
                              onClick={() => markScholarAnswer(reply)}
                            >
                              🎓 {reply.is_scholar_answer ? 'Unmark Scholar Answer' : 'Mark as Scholar Answer'}
                            </button>
                            <button className="admin-delete-btn admin-delete-btn--small" onClick={() => deleteReply(reply)}>
                              🗑 Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}