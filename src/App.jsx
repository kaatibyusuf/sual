import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import './Spaces.css'

const CATEGORIES = [
  { key: 'all',        label: 'All',       arabic: 'الكُلّ',      icon: '🌐' },
  { key: 'fiqh',      label: 'Fiqh',      arabic: 'الفِقْه',     icon: '⚖️' },
  { key: 'seerah',    label: 'Seerah',    arabic: 'السِّيرَة',    icon: '🌙' },
  { key: 'arabiyyah', label: 'Arabiyyah', arabic: 'العَرَبِيَّة', icon: '✍️' },
  { key: 'tajweed',   label: 'Tajweed',   arabic: 'التَّجْوِيد',  icon: '🎙️' },
  { key: 'aqeedah',   label: 'Aqeedah',   arabic: 'العَقِيدَة',   icon: '☪️' },
  { key: 'general',   label: 'General',   arabic: 'عَامّ',        icon: '💬' },
]

export default function Spaces({ user }) {
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(false)
  const [category, setCategory] = useState('all')
  const [activePost, setActivePost] = useState(null)
  const [replies, setReplies] = useState([])
  const [newPost, setNewPost] = useState({ title: '', body: '', category: 'general' })
  const [newReply, setNewReply] = useState('')
  const [showNewPost, setShowNewPost] = useState(false)
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState(null)

  const checkSubscription = useCallback(async () => {
    if (!user) return
    setSubLoading(true)
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single()
      setSubscription(data)
    } catch {
      setSubscription(null)
    } finally {
      setSubLoading(false)
    }
  }, [user])

  const fetchPosts = useCallback(async () => {
    if (!user) return
    setPostsLoading(true)
    try {
      let query = supabase
        .from('spaces_posts')
        .select('*')
        .order('created_at', { ascending: false })
      if (category !== 'all') query = query.eq('category', category)
      const { data } = await query
      setPosts(data || [])
    } catch (err) {
      console.error(err)
    } finally {
      setPostsLoading(false)
    }
  }, [user, category])

  useEffect(() => {
    if (!user) return
    checkSubscription()
    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success') {
      const ref = params.get('ref') || 'manual_' + Date.now()
      supabase.from('subscriptions').upsert({
        user_id: user.id,
        status: 'active',
        paystack_customer_code: ref,
        started_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      }, { onConflict: 'user_id' }).then(() => {
        window.history.replaceState({}, '', '/spaces')
        checkSubscription()
      })
    }
  }, [user, checkSubscription])

  useEffect(() => {
    if (subscription?.status === 'active') fetchPosts()
  }, [subscription, fetchPosts])

  if (!user) return null

  const fetchReplies = async (postId) => {
    const { data } = await supabase
      .from('spaces_replies')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })
    setReplies(data || [])
  }

  const openPost = async (post) => {
    setActivePost(post)
    await fetchReplies(post.id)
  }

  const submitPost = async () => {
    if (!newPost.title.trim() || !newPost.body.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setPosting(true)
    setError(null)
    try {
      const { error } = await supabase.from('spaces_posts').insert({
        user_id: user.id,
        title: newPost.title.trim(),
        body: newPost.body.trim(),
        category: newPost.category,
      })
      if (error) throw error
      setNewPost({ title: '', body: '', category: 'general' })
      setShowNewPost(false)
      fetchPosts()
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const submitReply = async () => {
    if (!newReply.trim()) return
    setPosting(true)
    try {
      const { error } = await supabase.from('spaces_replies').insert({
        post_id: activePost.id,
        user_id: user.id,
        body: newReply.trim(),
      })
      if (error) throw error
      setNewReply('')
      fetchReplies(activePost.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const handlePaystack = () => {
    const ref = 'sual_' + user.id.slice(0, 8) + '_' + Date.now()
    window.location.href = 'https://paystack.com/buy/sual-spaces-vcvfks?email=' +
      encodeURIComponent(user.email) + '&ref=' + ref
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  const getInitials = (str) => str ? str[0].toUpperCase() : 'U'
  const isPaid = subscription?.status === 'active'

  if (subLoading) {
    return (
      <div className="page-content spaces-page">
        <div className="spaces-loading">
          <div className="spaces-spinner" />
          <p>Loading Spaces...</p>
        </div>
      </div>
    )
  }

  if (activePost) {
    return (
      <div className="page-content spaces-page">
        <button className="spaces-back" onClick={() => { setActivePost(null); setReplies([]) }}>
          ← Back to Spaces
        </button>
        <div className="spaces-post-detail card">
          <div className="spaces-post-detail-header">
            <span className="spaces-cat-badge">
              {CATEGORIES.find(c => c.key === activePost.category)?.icon} {activePost.category}
            </span>
            <h2 className="spaces-post-detail-title">{activePost.title}</h2>
            <p className="spaces-post-detail-date">{formatDate(activePost.created_at)}</p>
          </div>
          <p className="spaces-post-detail-body">{activePost.body}</p>
        </div>
        <div className="spaces-replies">
          <h3 className="spaces-replies-title">
            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
          </h3>
          {replies.length === 0 && (
            <div className="spaces-no-replies">No replies yet. Be the first to respond.</div>
          )}
          {replies.map((r, i) => (
            <div key={i} className={`spaces-reply card ${r.is_scholar_answer ? 'spaces-reply--scholar' : ''}`}>
              <div className="spaces-reply-header">
                <div className="spaces-reply-avatar" style={{ background: r.is_scholar_answer ? '#094570' : '#e8f0f8' }}>
                  <span style={{ color: r.is_scholar_answer ? '#ffffff' : '#094570' }}>
                    {r.is_scholar_answer ? '🎓' : getInitials(r.user_id)}
                  </span>
                </div>
                <div>
                  <p className="spaces-reply-author">
                    {r.is_scholar_answer ? 'Scholar Response' : 'Member'}
                    {r.is_scholar_answer && <span className="spaces-scholar-badge">Scholar</span>}
                  </p>
                  <p className="spaces-reply-date">{formatDate(r.created_at)}</p>
                </div>
              </div>
              <p className="spaces-reply-body">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="spaces-reply-input card">
          <h3 className="spaces-reply-input-title">Add a Reply</h3>
          {error && <div className="spaces-error">{error}</div>}
          <textarea
            className="spaces-textarea"
            placeholder="Share your knowledge or ask a follow-up question..."
            value={newReply}
            onChange={e => setNewReply(e.target.value)}
            rows={4}
          />
          <button className="spaces-submit-btn" onClick={submitReply} disabled={posting || !newReply.trim()}>
            {posting ? 'Posting...' : 'Post Reply →'}
          </button>
        </div>
      </div>
    )
  }

  if (!isPaid) {
    return (
      <div className="page-content spaces-page">
        <h1 className="page-title">Spaces</h1>
        <p className="page-subtitle">فَضَاءَات — A community for serious students of Islamic knowledge</p>
        <div className="spaces-paywall">
          <div className="spaces-paywall-icon">🕌</div>
          <h2 className="spaces-paywall-title">Members Only</h2>
          <p className="spaces-paywall-desc">
            Spaces is an exclusive community for paid members. Ask questions, share knowledge,
            and get direct answers from a scholar — all in one place.
          </p>
          <div className="spaces-features">
            {[
              { icon: '🎓', text: 'Direct answers from a qualified scholar' },
              { icon: '💬', text: 'Threaded discussions across six categories' },
              { icon: '👥', text: 'Community of serious students' },
              { icon: '📚', text: 'Searchable knowledge archive' },
              { icon: '⭐', text: 'Scholar-verified answers highlighted' },
              { icon: '🔒', text: 'Private and moderated environment' },
            ].map((f, i) => (
              <div key={i} className="spaces-feature-item">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div className="spaces-price-card">
            <div className="spaces-price">
              <span className="spaces-currency">₦</span>
              <span className="spaces-amount">2,500</span>
              <span className="spaces-period">/month</span>
            </div>
            <p className="spaces-price-note">Cancel anytime. Billed monthly.</p>
            {error && <div className="spaces-error" style={{ marginBottom: 12 }}>{error}</div>}
            <button className="spaces-pay-btn" onClick={handlePaystack}>
              Subscribe to Spaces →
            </button>
          </div>
          <p className="spaces-paywall-hadith">
            "Whoever Allah wants good for, He gives him understanding of the religion."
            <br /><span>Sahih Bukhari 71</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content spaces-page">
      <div className="spaces-header">
        <div>
          <h1 className="page-title">Spaces</h1>
          <p className="page-subtitle">فَضَاءَات — Community for serious students</p>
        </div>
        <button className="spaces-new-btn" onClick={() => setShowNewPost(true)}>
          + New Post
        </button>
      </div>
      {showNewPost && (
        <div className="spaces-modal-overlay" onClick={() => setShowNewPost(false)}>
          <div className="spaces-modal card" onClick={e => e.stopPropagation()}>
            <h3 className="spaces-modal-title">New Post</h3>
            {error && <div className="spaces-error">{error}</div>}
            <div className="spaces-field">
              <label className="spaces-label">Category</label>
              <select
                className="spaces-select"
                value={newPost.category}
                onChange={e => setNewPost({ ...newPost, category: e.target.value })}
              >
                {CATEGORIES.filter(c => c.key !== 'all').map(c => (
                  <option key={c.key} value={c.key}>{c.icon} {c.label}</option>
                ))}
              </select>
            </div>
            <div className="spaces-field">
              <label className="spaces-label">Title</label>
              <input
                type="text"
                className="spaces-input"
                placeholder="Your question or topic..."
                value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
              />
            </div>
            <div className="spaces-field">
              <label className="spaces-label">Body</label>
              <textarea
                className="spaces-textarea"
                placeholder="Explain in detail..."
                value={newPost.body}
                onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                rows={5}
              />
            </div>
            <div className="spaces-modal-actions">
              <button className="spaces-cancel-btn" onClick={() => setShowNewPost(false)}>Cancel</button>
              <button className="spaces-submit-btn" onClick={submitPost} disabled={posting}>
                {posting ? 'Posting...' : 'Post →'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="spaces-categories">
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`spaces-cat-btn ${category === c.key ? 'spaces-cat-btn--active' : ''}`}
            onClick={() => setCategory(c.key)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>
      {postsLoading ? (
        <div className="spaces-loading"><div className="spaces-spinner" /></div>
      ) : posts.length === 0 ? (
        <div className="spaces-empty card">
          <p className="spaces-empty-icon">💬</p>
          <p className="spaces-empty-text">No posts yet in this category.</p>
          <p className="spaces-empty-sub">Be the first to start a discussion.</p>
        </div>
      ) : (
        <div className="spaces-posts">
          {posts.map(post => (
            <button key={post.id} className="spaces-post-card card" onClick={() => openPost(post)}>
              <div className="spaces-post-top">
                <span className="spaces-cat-badge">
                  {CATEGORIES.find(c => c.key === post.category)?.icon} {post.category}
                </span>
                <span className="spaces-post-date">{formatDate(post.created_at)}</span>
              </div>
              <h3 className="spaces-post-title">{post.title}</h3>
              <p className="spaces-post-preview">
                {post.body.length > 120 ? post.body.slice(0, 120) + '...' : post.body}
              </p>
              <div className="spaces-post-footer">
                <span className="spaces-post-read">Read Discussion →</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}