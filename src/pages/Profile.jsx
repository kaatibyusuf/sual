import ReferralProgress from '../components/ReferralProgress.jsx'
import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase.js'
import './Profile.css'
import { BadgesSection } from '../components/Badges.jsx'
import { isPushSupported, getPushPermissionState, subscribeToPush, unsubscribeFromPush } from '../lib/pushNotifications.js'
import AccountabilityProfileEditor from '../components/AccountabilityProfileEditor.jsx'
import BiometricLockToggle from '../components/BiometricLockToggle.jsx'
import { useAccessibility } from '../accessibility/AccessibilityContext.jsx'

function NotificationToggle({ user }) {
  const [supported, setSupported] = useState(true)
  const [permission, setPermission] = useState('default')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setSupported(isPushSupported())
    getPushPermissionState().then(setPermission)
  }, [])

  const handleToggle = async () => {
    setLoading(true)
    setError(null)
    if (permission === 'granted') {
      await unsubscribeFromPush(user)
      setPermission('default')
    } else {
      const result = await subscribeToPush(user)
      if (result.ok) {
        setPermission('granted')
      } else {
        setError(result.error)
      }
    }
    setLoading(false)
  }

  if (!supported) {
    return <p className="profile-note">Notifications aren't supported in this browser. On iPhone, make sure Sual is added to your Home Screen first.</p>
  }

  return (
    <div className="profile-notif-toggle">
      <button className="btn btn-primary" onClick={handleToggle} disabled={loading}>
        {loading ? '…' : permission === 'granted' ? '🔔 Notifications on — tap to turn off' : '🔕 Turn on daily reminders'}
      </button>
      {error && <p className="profile-inline-error">{error}</p>}
    </div>
  )
}

const LEVELS = [
  { key: 'beginner',     label: 'Beginner',     arabic: 'مُبْتَدِئ',  color: '#2e7d32' },
  { key: 'intermediate', label: 'Intermediate', arabic: 'مُتَوَسِّط', color: '#e65100' },
  { key: 'advanced',     label: 'Advanced',     arabic: 'مُتَقَدِّم', color: '#6a1b9a' },
]

const FONT_SIZES = [
  { key: 'small',  label: 'Small',  sample: 'A' },
  { key: 'medium', label: 'Medium', sample: 'A' },
  { key: 'large',  label: 'Large',  sample: 'A' },
  { key: 'xlarge', label: 'X-Large', sample: 'A' },
]

export default function Profile({ user, userLevel, setUserLevel, fontSize, setFontSize }) {
  const { announce } = useAccessibility()
  const [name, setName] = useState(user?.user_metadata?.full_name || '')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [gender, setGenderState] = useState(null)
  const [genderLoading, setGenderLoading] = useState(false)
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [levelLoading, setLevelLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('profile')
  const [subscription, setSubscription] = useState(null)
  const [subLoading, setSubLoading] = useState(true)
  const fileRef = useRef()

  const [username, setUsernameState] = useState(null)
  const [usernameInput, setUsernameInput] = useState('')
  const [usernameLoading, setUsernameLoading] = useState(false)

  const [coinBalance, setCoinBalance] = useState(0)
  const [merchCode, setMerchCode] = useState(null)
  const [coinsLoading, setCoinsLoading] = useState(true)
  const [codeCopied, setCodeCopied] = useState(false)

  const [showCoinHistory, setShowCoinHistory] = useState(false)
  const [coinHistory, setCoinHistory] = useState([])
  const [coinHistoryLoading, setCoinHistoryLoading] = useState(false)
  const [coinHistoryLoaded, setCoinHistoryLoaded] = useState(false)

  useEffect(() => {
    if (!user) return
    fetchAvatar()
    fetchSubscription()
    fetchGender()
    fetchUsername()
    fetchCoins()
  }, [user])

  if (!user) return null

  const flashSuccess = (msg) => { setSuccess(msg); setError(null); announce(msg) }
  const flashError = (msg) => { setError(msg); setSuccess(null); announce(msg) }

  const fetchAvatar = async () => {
    if (!user) return
    const { data } = supabase.storage.from('avatars').getPublicUrl(`${user.id}/avatar`)
    if (data?.publicUrl) {
      const res = await fetch(data.publicUrl, { method: 'HEAD' }).catch(() => null)
      if (res?.ok) setAvatarUrl(data.publicUrl + '?t=' + Date.now())
    }
  }

  const fetchGender = async () => {
    try {
      const { data } = await supabase
        .from('profiles')
        .select('gender')
        .eq('id', user.id)
        .maybeSingle()
      setGenderState(data?.gender || null)
    } catch (err) {
      console.error('Failed to load gender:', err)
    }
  }

  const fetchUsername = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .maybeSingle()
      if (error) throw error
      setUsernameState(data?.username || null)
      setUsernameInput(data?.username || '')
    } catch (err) {
      console.error('Failed to load username:', err)
    }
  }

  const fetchCoins = async () => {
    setCoinsLoading(true)
    try {
      const { data, error } = await supabase.rpc('get_my_coins_and_code')
      if (error) throw error
      const row = Array.isArray(data) ? data[0] : data
      setCoinBalance(row?.balance || 0)
      setMerchCode(row?.merch_code || null)
    } catch (err) {
      console.error('Failed to load coin balance:', err)
    } finally {
      setCoinsLoading(false)
    }
  }

  const fetchCoinHistory = async () => {
    setCoinHistoryLoading(true)
    try {
      const { data, error } = await supabase.rpc('get_my_coin_history', { limit_count: 30 })
      if (error) throw error
      setCoinHistory(data || [])
      setCoinHistoryLoaded(true)
    } catch (err) {
      console.error('Failed to load coin history:', err)
    } finally {
      setCoinHistoryLoading(false)
    }
  }

  const toggleCoinHistory = () => {
    const opening = !showCoinHistory
    setShowCoinHistory(opening)
    if (opening && !coinHistoryLoaded) fetchCoinHistory()
  }

  const handleCopyCode = () => {
    if (!merchCode) return
    navigator.clipboard.writeText(merchCode)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  const handleSetUsername = async () => {
    const trimmed = usernameInput.trim()
    if (!trimmed || trimmed === username || usernameLoading) return
    setUsernameLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase.rpc('set_my_username', { new_username: trimmed })
      if (error) throw error
      setUsernameState(trimmed)
      flashSuccess('Username saved.')
    } catch (err) {
      flashError(err.message)
    } finally {
      setUsernameLoading(false)
    }
  }

  const handleSetGender = async (value) => {
    if (value === gender || genderLoading) return
    setGenderLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({ id: user.id, gender: value }, { onConflict: 'id' })
      if (error) throw error
      setGenderState(value)
      flashSuccess('Saved.')
    } catch (err) {
      flashError(err.message)
    } finally {
      setGenderLoading(false)
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
    if (file.size > 2 * 1024 * 1024) { flashError('Image must be under 2MB.'); return }
    setAvatarLoading(true)
    setError(null)
    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(`${user.id}/avatar`, file, { upsert: true, contentType: file.type })
      if (uploadError) throw uploadError
      await fetchAvatar()
      flashSuccess('Profile picture updated.')
    } catch (err) {
      flashError(err.message)
    } finally {
      setAvatarLoading(false)
    }
  }

  const handleUpdateProfile = async () => {
    if (!name.trim()) { flashError('Name cannot be empty.'); return }
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase.auth.updateUser({ data: { full_name: name.trim() } })
      if (error) throw error
      flashSuccess('Profile updated successfully.')
    } catch (err) {
      flashError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) { flashError('Please fill in all password fields.'); return }
    if (newPassword.length < 6) { flashError('Password must be at least 6 characters.'); return }
    if (newPassword !== confirmPassword) { flashError('Passwords do not match.'); return }
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) throw error
      flashSuccess('Password changed successfully.')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      flashError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChangeLevel = async (newLevel) => {
    if (newLevel === userLevel || levelLoading) return
    setLevelLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const { error } = await supabase
        .from('user_levels')
        .update({ current_level: newLevel, level_selected: true })
        .eq('user_id', user.id)
      if (error) throw error
      setUserLevel?.(newLevel)
      flashSuccess(`Level switched to ${newLevel.charAt(0).toUpperCase() + newLevel.slice(1)}.`)
    } catch (err) {
      flashError(err.message)
    } finally {
      setLevelLoading(false)
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

  const currentLevelMeta = LEVELS.find(l => l.key === userLevel)

  return (
    <div className="page-content profile-page">
      {/* ── Hero ── */}
      <div
        className="profile-hero"
        data-a11y-label={`${name || user?.email}. ${user?.email}. Member since ${memberSince}.`}
      >
        <div className="profile-hero-top">
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
            <h1 className="profile-display-name">{name || user?.email}</h1>
            <p className="profile-email">{user?.email}</p>
            <p className="profile-member-since">Member since {memberSince}</p>
          </div>
        </div>
        <button
          className="profile-avatar-btn"
          onClick={() => fileRef.current.click()}
          disabled={avatarLoading}
        >
          {avatarLoading ? 'Uploading...' : '📷 Change Photo'}
        </button>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
      </div>

      {/* ── Quick-glance stat strip ── */}
      <div className="profile-stat-strip">
        <div className="profile-stat-chip">
          <span className="profile-stat-chip-label">Level</span>
          <span className="profile-stat-chip-value" style={{ color: currentLevelMeta?.color }}>
            {currentLevelMeta?.label || 'Beginner'}
          </span>
        </div>
        <div className="profile-stat-chip">
          <span className="profile-stat-chip-label">Coins</span>
          <span className="profile-stat-chip-value">{coinsLoading ? '—' : coinBalance.toLocaleString()}</span>
        </div>
        <div className="profile-stat-chip">
          <span className="profile-stat-chip-label">Spaces</span>
          <span className={`profile-stat-chip-value ${isPaid ? 'profile-stat-chip-value--good' : 'profile-stat-chip-value--muted'}`}>
            {isPaid ? 'Active' : 'Free'}
          </span>
        </div>
      </div>

      <BadgesSection user={user} />

      {/* ── Subscription ── */}
      <div
        className={`profile-sub-card ${isPaid ? 'profile-sub-card--active' : 'profile-sub-card--inactive'}`}
        data-a11y-label={isPaid
          ? `Spaces Membership: Active. Subscribed ${subStart}. Renews ${subEnd}. ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left.`
          : 'Spaces Membership: Not subscribed.'}
      >
        <div className="profile-sub-top">
          <div>
            <p className="profile-sub-label">Spaces Membership</p>
            <p className="profile-sub-status">{isPaid ? '✅ Active' : '⭕ Inactive'}</p>
          </div>
          <div className={`profile-sub-badge ${isPaid ? 'profile-sub-badge--active' : 'profile-sub-badge--inactive'}`}>
            {isPaid ? 'Subscribed' : 'Not Subscribed'}
          </div>
        </div>

        <ReferralProgress user={user} />

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
              <p className={`profile-sub-detail-value ${daysLeft <= 5 ? 'profile-sub-detail-value--warn' : 'profile-sub-detail-value--good'}`}>
                {daysLeft} {daysLeft === 1 ? 'day' : 'days'}
              </p>
            </div>
          </div>
        )}

        {isPaid && (
          <div className="profile-sub-bar-wrapper">
            <div className="profile-sub-bar" style={{ width: Math.min(100, (daysLeft / 30) * 100) + '%' }} />
          </div>
        )}

        {!isPaid && (
          <div className="profile-sub-cta">
            <p className="profile-sub-cta-text">
              Join Spaces to access the exclusive community, ask scholars, and learn with serious students.
            </p>
            <a href="/spaces" className="profile-sub-cta-btn">Subscribe for ₦2,500/month →</a>
          </div>
        )}
      </div>

      {/* ── Account section: username + gender ── */}
      <div className="profile-section">
        <p className="profile-section-title">Account</p>

        <div className="profile-settings-card">
          <div className="profile-setting-row profile-setting-row--stack">
            <div className="profile-setting-copy">
              <p className="profile-setting-label">Username</p>
              <p className="profile-setting-desc">
                {username
                  ? 'Shown on the leaderboard instead of your name.'
                  : 'Set a username to appear on the leaderboard. 3-20 characters — letters, numbers, underscores only.'}
              </p>
            </div>
            <div className="profile-setting-input-row">
              <input
                type="text"
                className="profile-input"
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                placeholder="e.g. student_of_ilm"
                maxLength={20}
              />
              <button
                className="profile-inline-btn"
                onClick={handleSetUsername}
                disabled={usernameLoading || !usernameInput.trim() || usernameInput.trim() === username}
              >
                {usernameLoading ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>

          <div className="profile-setting-divider" />

          <div className="profile-setting-row profile-setting-row--stack">
            <div className="profile-setting-copy">
              <p className="profile-setting-label">Gender</p>
              <p className="profile-setting-desc">
                Required for Accountability Partners in Spaces — pairing only ever matches the same gender.
              </p>
            </div>
            <div className="profile-choice-row">
              {['male', 'female'].map(g => {
                const active = gender === g
                return (
                  <button
                    key={g}
                    className={`profile-choice-btn ${active ? 'profile-choice-btn--active' : ''}`}
                    onClick={() => handleSetGender(g)}
                    disabled={genderLoading || active}
                    data-a11y-label={`${g}${active ? ', currently selected' : ''}`}
                  >
                    {active ? '✓ ' : ''}{g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Learning section ── */}
      <div className="profile-section">
        <p className="profile-section-title">Learning</p>
        <div className="profile-settings-card">
          <div className="profile-setting-row profile-setting-row--stack">
            <div className="profile-setting-copy">
              <p className="profile-setting-label">Level</p>
              <p className="profile-setting-desc">
                Switch anytime, including back down. Quiz performance still unlocks higher levels the normal way.
              </p>
            </div>
            <div className="profile-level-row">
              {LEVELS.map(lv => {
                const active = userLevel === lv.key
                return (
                  <button
                    key={lv.key}
                    className={`profile-level-btn ${active ? 'profile-level-btn--active' : ''}`}
                    onClick={() => handleChangeLevel(lv.key)}
                    disabled={levelLoading || active}
                    data-a11y-label={`${lv.label}${active ? ', currently selected' : ''}`}
                    style={active ? { borderColor: lv.color, color: lv.color } : {}}
                  >
                    <span>{active ? '✓ ' : ''}{lv.label}</span>
                    <span className="profile-level-arabic arabic">{lv.arabic}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Rewards section: coins ── */}
      <div className="profile-section">
        <p className="profile-section-title">Rewards</p>
        <div className="profile-settings-card">
          <p className="profile-setting-desc" style={{ marginBottom: 16 }}>
            Earned automatically — 1 coin per quiz question. Reach 5,000 to unlock a merchandise
            redemption code, no shipping needed, just send us the code.
          </p>

          <div className="profile-coin-row">
            <span className="profile-coin-value">{coinsLoading ? '—' : coinBalance.toLocaleString()}</span>
            <span className="profile-coin-max">/ 5,000 coins</span>
          </div>

          <div className="profile-coin-track">
            <div
              className={`profile-coin-fill ${merchCode ? 'profile-coin-fill--done' : ''}`}
              style={{ width: `${Math.min(100, (coinBalance / 5000) * 100)}%` }}
            />
          </div>

          {merchCode ? (
            <div className="profile-merch-code">
              <span className="profile-merch-code-text">{merchCode}</span>
              <button className="profile-inline-btn profile-inline-btn--outline" onClick={handleCopyCode}>
                {codeCopied ? '✓ Copied' : 'Copy code'}
              </button>
            </div>
          ) : !coinsLoading && (
            <p className="profile-note">{(5000 - coinBalance).toLocaleString()} coins to go.</p>
          )}

          {coinBalance > 0 && (
            <div className="profile-coin-history-wrap">
              <button className="profile-text-link" onClick={toggleCoinHistory}>
                {showCoinHistory ? 'Hide history' : 'View history'}
              </button>

              {showCoinHistory && (
                <div className="profile-coin-history-list">
                  {coinHistoryLoading ? (
                    <p className="profile-note">Loading…</p>
                  ) : coinHistory.length === 0 ? (
                    <p className="profile-note">No history yet.</p>
                  ) : (
                    coinHistory.map(row => (
                      <div key={row.id} className="profile-coin-history-row">
                        <span className="profile-coin-history-label">
                          {row.discipline
                            ? `${row.discipline.charAt(0).toUpperCase() + row.discipline.slice(1)} quiz`
                            : 'Quiz attempt'}
                          <span className="profile-coin-history-date">
                            {new Date(row.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </span>
                        </span>
                        <span className="profile-coin-history-amount">+{row.amount}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Preferences section: security + display ── */}
      <div className="profile-section">
        <p className="profile-section-title">Preferences</p>
        <div className="profile-settings-card">
          <div className="profile-setting-row profile-setting-row--stack">
            <p className="profile-setting-label">Security</p>
            <BiometricLockToggle user={user} />
          </div>

          {typeof fontSize !== 'undefined' && setFontSize && (
            <>
              <div className="profile-setting-divider" />
              <div className="profile-setting-row profile-setting-row--stack">
                <div className="profile-setting-copy">
                  <p className="profile-setting-label">Text Size</p>
                  <p className="profile-setting-desc">Adjusts text size across the whole app.</p>
                </div>
                <div className="profile-fontsize-row">
                  {FONT_SIZES.map(fs => {
                    const active = fontSize === fs.key
                    return (
                      <button
                        key={fs.key}
                        className={`profile-fontsize-btn ${active ? 'profile-fontsize-btn--active' : ''}`}
                        onClick={() => setFontSize(fs.key)}
                        disabled={active}
                        data-a11y-label={`${fs.label} text size${active ? ', currently selected' : ''}`}
                      >
                        <span
                          className="profile-fontsize-sample"
                          style={{ fontSize: fs.key === 'small' ? '0.9rem' : fs.key === 'medium' ? '1.1rem' : fs.key === 'large' ? '1.3rem' : '1.5rem' }}
                        >
                          {active ? '✓ ' : ''}{fs.sample}
                        </span>
                        <span className="profile-fontsize-label">{fs.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Edit Profile / Change Password ── */}
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

      {error && <div className="profile-error"><span>⚠️</span><p>{error}</p></div>}
      {success && <div className="profile-success"><span>✅</span><p>{success}</p></div>}

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
            <input type="email" className="profile-input profile-input--disabled" value={user?.email} disabled />
            <p className="profile-field-note">Email cannot be changed.</p>
          </div>
          <button className="profile-save-btn" onClick={handleUpdateProfile} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      )}

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

      <AccountabilityProfileEditor user={user} />
    </div>
  )
}