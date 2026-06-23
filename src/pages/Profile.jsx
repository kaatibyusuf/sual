import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase.js'
import './Profile.css'

export default function Profile({ user }) {
  if (!user) return null

  const [name, setName] = useState(user?.user_metadata?.full_name || '')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('profile')
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const fileRef = useRef()

  useEffect(() => {
    fetchAvatar()
    fetchSubscription()
  }, [user])

  const fetchAvatar = async () => {
    if (!user) return
    const { data } = supabase.storage.from('avatars').getPublicUrl(`${user.id}/avatar`)
    if (data?.publicUrl) {
      const res = await fetch(data.publicUrl, { method: 'HEAD' }).catch(() => null)
      if (res?.ok) setAvatarUrl(data.publicUrl + '?t=' + Date.now())
    }
  }

  const fetchSubscription = async () => {
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
  }

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { setError('Image must be under 2MB.'); return }
    setAvatarLoading(true)
    setError(null)
    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(`${user.id}/avatar`, file, { upsert: true, contentType: file.type })
      if (uploadError) throw uploadError
      await fetchAvatar()
      setSuccess('Profile picture updated.')
    } catch (err) {
      setError(err.message)
    } finally {
      setAvatarLoading(false)
    }
  }

  const handleUpdateProfile = async () => {
    if (!name.trim()) { setError('Name cannot be empty.'); return }
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase.auth.updateUser({ data: { full_name: name.trim() } })
      if (error) throw error
      setSuccess('Profile updated successfully.')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) { setError('Please fill in all password fields.'); return }
    if (newPassword.length < 6) { setError('Password must be at least 6 characters.'); return }
    if (newPassword !== confirmPassword) { setError('Passwords do not match.'); return }
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) throw error
      setSuccess('Password changed successfully.')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : user?.email?.[0]?.toUpperCase() || 'U'

  const isPaid = subscription?.status === 'active'
  const memberSince = new Date(user?.created_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
  const subStart = subscription?.started_at
    ? new Date(subscription.started_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  const subEnd = subscription?.expires_at
    ? new Date(subscription.expires_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : null
  const daysLeft = subscription?.expires_at
    ? Math.max(0, Math.ceil((new Date(subscription.expires_at) - new Date()) / (1000 * 60 * 60 * 24)))
    : 0

  return (
    <div className="page-content profile-page">
      <h1 className="page-title">My Profile</h1>
      <p className="page-subtitle">حِسَابِي — Manage your account and settings</p>

      {/* Avatar section */}
      <div className="profile-hero card">
        <div className="profile-avatar-wrapper">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Profile" className="profile-avatar-img" />
          ) : (
            <div className="profile-avatar-initials">{initials}</div>
          )}
          {avatarLoading && (
            <div className="profile-avatar-loading">
              <div className="profile-spinner" />
            </div>
          )}
        </div>
        <div className="profile-hero-info">
          <h2 className="profile-display-name">{name || user?.email}</h2>
          <p className="profile-email">{user?.email}</p>
          <p className="profile-member-since">Member since {memberSince}</p>
          <button
            className="profile-avatar-btn"
            onClick={() => fileRef.current.click()}
            disabled={avatarLoading}
          >
            {avatarLoading ? 'Uploading...' : '📷 Change Photo'}
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
        </div>
      </div>

      {/* Subscription card */}
      <div className={`profile-sub-card ${isPaid ? 'profile-sub-card--active' : 'profile-sub-card--inactive'}`}>
        <div className="profile-sub-top">
          <div>
            <p className="profile-sub-label">Spaces Membership</p>
            <p className="profile-sub-status">
              {isPaid ? '✅ Active' : '⭕ Inactive'}
            </p>
          </div>
          <div className="profile-sub-badge" style={{ background: isPaid ? 'rgba(13,110,74,0.15)' : 'rgba(192,57,43,0.1)', color: isPaid ? '#0d6e4a' : '#c0392b' }}>
            {isPaid ? 'Subscribed' : 'Not Subscribed'}
          </div>
        </div>

        {isPaid && !subLoading && (
          <div className="profile-sub-details">
            <div className="profile-sub-detail-item">
              <p className="profile-sub-detail-label">Subscribed On</p>
              <p className="profile-sub-detail-value">{subStart}</p>
            </div>
            <div className="profile-sub-detail-item">
              <p className="profile-sub-detail-label">Renews On</p>
              <p className="profile-sub-detail-value">{subEnd}</p>
            </div>
            <div className="profile-sub-detail-item">
              <p className="profile-sub-detail-label">Days Left</p>
              <p className="profile-sub-detail-value" style={{ color: daysLeft <= 5 ? '#c0392b' : '#0d6e4a' }}>
                {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
              </p>
            </div>
          </div>
        )}

        {isPaid && (
          <div className="profile-sub-bar-wrapper">
            <div
              className="profile-sub-bar"
              style={{ width: Math.min(100, (daysLeft / 30) * 100) + '%' }}
            />
          </div>
        )}

        {!isPaid && (
          <div className="profile-sub-cta">
            <p className="profile-sub-cta-text">
              Join Spaces to access the exclusive community, ask scholars, and learn with serious students.
            </p>
            <a href="/spaces" className="profile-sub-cta-btn">
              Subscribe for ₦2,500/month →
            </a>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        {['profile', 'password'].map(tab => (
          <button
            key={tab}
            className={`profile-tab ${activeTab === tab ? 'profile-tab--active' : ''}`}
            onClick={() => { setActiveTab(tab); setError(null); setSuccess(null) }}
          >
            {tab === 'profile' ? 'Edit Profile' : 'Change Password'}
          </button>
        ))}
      </div>

      {/* Messages */}
      {error && <div className="profile-error"><span>⚠️</span><p>{error}</p></div>}
      {success && <div className="profile-success"><span>✅</span><p>{success}</p></div>}

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="profile-form card">
          <h3 className="profile-form-title">Personal Information</h3>
          <div className="profile-field">
            <label className="profile-label">Full Name</label>
            <input
              type="text"
              className="profile-input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Email Address</label>
            <input
              type="email"
              className="profile-input profile-input--disabled"
              value={user?.email}
              disabled
            />
            <p className="profile-field-note">Email cannot be changed.</p>
          </div>
          <button className="profile-save-btn" onClick={handleUpdateProfile} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}

      {/* Password Tab */}
      {activeTab === 'password' && (
        <div className="profile-form card">
          <h3 className="profile-form-title">Change Password</h3>
          <div className="profile-field">
            <label className="profile-label">New Password</label>
            <input
              type="password"
              className="profile-input"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="At least 6 characters"
            />
          </div>
          <div className="profile-field">
            <label className="profile-label">Confirm New Password</label>
            <input
              type="password"
              className="profile-input"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Repeat new password"
            />
          </div>
          <div className="profile-password-rules">
            <p className={`profile-rule ${newPassword.length >= 6 ? 'profile-rule--met' : ''}`}>
              {newPassword.length >= 6 ? '✓' : '○'} At least 6 characters
            </p>
            <p className={`profile-rule ${newPassword && newPassword === confirmPassword ? 'profile-rule--met' : ''}`}>
              {newPassword && newPassword === confirmPassword ? '✓' : '○'} Passwords match
            </p>
          </div>
          <button className="profile-save-btn" onClick={handleChangePassword} disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </div>
      )}
    </div>
  )
}