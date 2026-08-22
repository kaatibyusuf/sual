import ReferralProgress from '../components/ReferralProgress.jsx'
import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase.js'
import './Profile.css'
import { BadgesSection } from '../components/Badges.jsx'
import { isPushSupported, getPushPermissionState, subscribeToPush, unsubscribeFromPush } from '../lib/pushNotifications.js'
import AccountabilityProfileEditor from '../components/AccountabilityProfileEditor.jsx'
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
    return <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Notifications aren't supported in this browser. On iPhone, make sure Sual is added to your Home Screen first.</p>
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <button className="btn btn-primary" onClick={handleToggle} disabled={loading}>
        {loading ? '…' : permission === 'granted' ? '🔔 Notifications on — tap to turn off' : '🔕 Turn on daily reminders'}
      </button>
      {error && <p style={{ color: '#c0392b', fontSize: '0.82rem', marginTop: 6 }}>{error}</p>}
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

  // Username — powers the weekly leaderboard specifically. Shown
  // there ONLY for members who've set one (see
  // get_weekly_quiz_leaderboard), so leaving this blank just means
  // not appearing on that list, nothing else breaks.
  const [username, setUsernameState] = useState(null)
  const [usernameInput, setUsernameInput] = useState('')
  const [usernameLoading, setUsernameLoading] = useState(false)

  // Coins — earned automatically per quiz question (see the
  // award_quiz_coins trigger on quiz_history), never spent or reset.
  // merchCode is null until the running total first crosses 5,000,
  // at which point the same trigger generates it once, permanently.
  const [coinBalance, setCoinBalance] = useState(0)
  const [merchCode, setMerchCode] = useState(null)
  const [coinsLoading, setCoinsLoading] = useState(true)
  const [codeCopied, setCodeCopied] = useState(false)

  // Coin history — lazy-loaded only when the person actually expands
  // it, not on every Profile page load, since most visits won't need
  // it.
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

  // All hooks are declared above this line, unconditionally, before
  // any early return — required so this component stays safe to
  // render even if a future change ever calls it before `user` is
  // guaranteed to exist.
  if (!user) return null

  // Success/error text renders as a plain banner div, which a native
  // screen reader will happily pick up in DOM order — but for
  // touch-explore, and for anyone not actively re-scanning the
  // screen, these outcomes need to be spoken proactively the moment
  // they happen, the same way the chat/quiz pages announce their own
  // state changes.
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
      const { data } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .maybeSingle()
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

  // Delegates format/uniqueness validation to set_my_username itself
  // (server-side, defense in depth) rather than duplicating those
  // rules here — the RPC raises a specific, friendly error message
  // for either failure, which lands in err.message the same way
  // every other RPC error in this file already does.
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

  // Required before Accountability pairing works at all — the
  // matching functions filter and enforce by this, server-side, not
  // just in the UI. See accountability_gender_migration.sql.
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

  // Fully open switch, on purpose — undoing a mistaken level pick
  // shouldn't be harder than making it. This never touches quiz
  // history or badges, and if someone drops down but their existing
  // quiz average still qualifies them for a higher level, the
  // existing auto-upgrade logic in Quiz.jsx will simply bump them
  // back up the moment they pass another quiz, so nothing about the
  // earned-progression system is undermined by allowing this.
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

  return (
    <div className="page-content profile-page">
      <h1 className="page-title">My Profile</h1>
      <p className="page-subtitle">حِسَابِي — Manage your account and settings</p>

      {/* Avatar section */}
      <div className="profile-hero card" data-a11y-label={`${name || user?.email}. ${user?.email}. Member since ${memberSince}.`}>
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

      {/* Badges — previously declared as a bare expression outside
          the returned JSX, so it never actually rendered. Fixed here. */}
      <BadgesSection user={user} />

      {/* Subscription card */}
      <div
        className={`profile-sub-card ${isPaid ? 'profile-sub-card--active' : 'profile-sub-card--inactive'}`}
        data-a11y-label={isPaid
          ? `Spaces Membership: Active. Subscribed ${subStart}. Renews ${subEnd}. ${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} left.`
          : 'Spaces Membership: Not subscribed.'}
      >
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

      {/* Username — powers the weekly quiz leaderboard specifically.
          Set once, changeable anytime; leaving it blank just means
          not appearing on that one list, nothing else in the app
          depends on it. */}
      <div className="card" style={{ padding: '22px 24px', marginBottom: '20px' }}>
        <p style={{
          fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: '#4a6080', marginBottom: 6,
        }}>
          Username
        </p>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16, lineHeight: 1.5 }}>
          {username
            ? 'Shown on the weekly leaderboard instead of your name.'
            : 'Set a username to appear on the weekly leaderboard. 3-20 characters — letters, numbers, and underscores only.'}
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            className="profile-input"
            value={usernameInput}
            onChange={e => setUsernameInput(e.target.value)}
            placeholder="e.g. student_of_ilm"
            maxLength={20}
            style={{ flex: 1 }}
          />
          <button
            className="profile-save-btn"
            onClick={handleSetUsername}
            disabled={usernameLoading || !usernameInput.trim() || usernameInput.trim() === username}
            style={{ flexShrink: 0 }}
          >
            {usernameLoading ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>

      {/* Coins — 1 per question attempted in a quiz, awarded
          automatically via a database trigger the moment a quiz
          completes. Never spent or reset; crossing 5,000 once
          permanently unlocks a redemption code below. */}
      <div className="card" style={{ padding: '22px 24px', marginBottom: '20px' }}>
        <p style={{
          fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: '#4a6080', marginBottom: 6,
        }}>
          Coins
        </p>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16, lineHeight: 1.5 }}>
          Earned automatically — 1 coin per quiz question. Reach 5,000 to unlock a
          merchandise redemption code, no shipping needed, just send us the code.
        </p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: '#094570' }}>
            {coinsLoading ? '—' : coinBalance.toLocaleString()}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>/ 5,000 coins</span>
        </div>

        <div style={{ height: 8, borderRadius: 100, background: '#eef1f4', overflow: 'hidden', marginBottom: 16 }}>
          <div style={{
            height: '100%',
            width: `${Math.min(100, (coinBalance / 5000) * 100)}%`,
            background: merchCode ? '#2e7d32' : '#094570',
            borderRadius: 100,
            transition: 'width 0.3s ease',
          }} />
        </div>

        {merchCode ? (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
            padding: '12px 16px', borderRadius: 10, background: 'rgba(46,125,50,0.08)',
            border: '1.5px solid rgba(46,125,50,0.25)',
          }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2e7d32', letterSpacing: '0.04em' }}>
              {merchCode}
            </span>
            <button
              onClick={handleCopyCode}
              style={{
                padding: '6px 14px', borderRadius: 100, border: '1.5px solid #2e7d32',
                background: '#ffffff', color: '#2e7d32', fontWeight: 700, fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              {codeCopied ? '✓ Copied' : 'Copy code'}
            </button>
          </div>
        ) : !coinsLoading && (
          <p style={{ fontSize: '0.8rem', color: '#8a9ab0' }}>
            {(5000 - coinBalance).toLocaleString()} coins to go.
          </p>
        )}

        {coinBalance > 0 && (
          <div style={{ marginTop: 14 }}>
            <button
              onClick={toggleCoinHistory}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                fontSize: '0.8rem', fontWeight: 700, color: '#094570', textDecoration: 'underline',
              }}
            >
              {showCoinHistory ? 'Hide history' : 'View history'}
            </button>

            {showCoinHistory && (
              <div style={{ marginTop: 10 }}>
                {coinHistoryLoading ? (
                  <p style={{ fontSize: '0.8rem', color: '#8a9ab0' }}>Loading…</p>
                ) : coinHistory.length === 0 ? (
                  <p style={{ fontSize: '0.8rem', color: '#8a9ab0' }}>No history yet.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {coinHistory.map(row => (
                      <div
                        key={row.id}
                        style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          padding: '8px 12px', borderRadius: 8, background: '#f5f8fb',
                          fontSize: '0.8rem',
                        }}
                      >
                        <span style={{ color: '#4a6080' }}>
                          {row.discipline
                            ? `${row.discipline.charAt(0).toUpperCase() + row.discipline.slice(1)} quiz`
                            : 'Quiz attempt'}
                          <span style={{ color: '#8a9ab0', marginLeft: 8 }}>
                            {new Date(row.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                          </span>
                        </span>
                        <span style={{ fontWeight: 700, color: '#2e7d32' }}>+{row.amount}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Gender — required before Accountability pairing works.
          Self-declared, same as name and email; there's no
          verification mechanism, and every comparable platform
          handles it the same way. Used to keep pairing single-gender,
          enforced server-side in pair_accountability_partners. */}
      <div className="card" style={{ padding: '22px 24px', marginBottom: '20px' }}>
        <p style={{
          fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: '#4a6080', marginBottom: 6,
        }}>
          Gender
        </p>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16, lineHeight: 1.5 }}>
          Required to see or use Accountability Partners in Spaces — pairing only ever
          matches members of the same gender.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          {['male', 'female'].map(g => {
            const active = gender === g
            return (
              <button
                key={g}
                onClick={() => handleSetGender(g)}
                disabled={genderLoading || active}
                data-a11y-label={`${g}${active ? ', currently selected' : ''}`}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: active ? '2px solid #094570' : '2px solid #c8d8e8',
                  background: active ? '#ffffff' : '#f5f8fb',
                  color: active ? '#094570' : '#6a8090',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: active ? 'default' : 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {active ? '✓ ' : ''}{g}
              </button>
            )
          })}
        </div>
      </div>

      {/* Learning Level card */}
      <div className="card" style={{ padding: '22px 24px', marginBottom: '20px' }}>
        <p style={{
          fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.06em', color: '#4a6080', marginBottom: 6,
        }}>
          Learning Level
        </p>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16, lineHeight: 1.5 }}>
          Switch anytime, including back down if you picked the wrong one by mistake.
          This only changes your default level — quiz performance still unlocks higher
          levels the normal way.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {LEVELS.map(lv => {
            const active = userLevel === lv.key
            return (
              <button
                key={lv.key}
                onClick={() => handleChangeLevel(lv.key)}
                disabled={levelLoading || active}
                data-a11y-label={`${lv.label}${active ? ', currently selected' : ''}`}
                style={{
                  flex: '1 1 140px',
                  padding: '10px 14px',
                  borderRadius: 10,
                  border: active ? `2px solid ${lv.color}` : '2px solid #c8d8e8',
                  background: active ? '#ffffff' : '#f5f8fb',
                  color: active ? lv.color : '#6a8090',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: active ? 'default' : 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  opacity: levelLoading && !active ? 0.6 : 1,
                }}
              >
                <span>{active ? '✓ ' : ''}{lv.label}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{lv.arabic}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Display card — text size used to live as A-/A/A+ buttons in
          the top toolbar on every page; moved here since it's a
          set-once-and-forget preference, not something that needs
          reaching from everywhere. */}
      {typeof fontSize !== 'undefined' && setFontSize && (
        <div className="card" style={{ padding: '22px 24px', marginBottom: '20px' }}>
          <p style={{
            fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.06em', color: '#4a6080', marginBottom: 6,
          }}>
            Display
          </p>
          <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16, lineHeight: 1.5 }}>
            Text size across the whole app.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FONT_SIZES.map(fs => {
              const active = fontSize === fs.key
              return (
                <button
                  key={fs.key}
                  onClick={() => setFontSize(fs.key)}
                  disabled={active}
                  data-a11y-label={`${fs.label} text size${active ? ', currently selected' : ''}`}
                  style={{
                    flex: '1 1 110px',
                    padding: '10px 14px',
                    borderRadius: 10,
                    border: active ? '2px solid #094570' : '2px solid #c8d8e8',
                    background: active ? '#ffffff' : '#f5f8fb',
                    color: active ? '#094570' : '#6a8090',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: active ? 'default' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <span style={{
                    fontSize: fs.key === 'small' ? '0.9rem' : fs.key === 'medium' ? '1.1rem' : fs.key === 'large' ? '1.3rem' : '1.5rem',
                    fontWeight: 800,
                  }}>
                    {active ? '✓ ' : ''}{fs.sample}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 500 }}>{fs.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

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
      <AccountabilityProfileEditor user={user} />
    </div>
  )
}