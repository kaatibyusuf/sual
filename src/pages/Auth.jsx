import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import { getStagedReferralCode, setManualReferralCode } from '../lib/referral.js'
import './Auth.css'

// Raw browser-level network errors (offline, DNS failure, CORS block,
// blocked by an extension, server unreachable) all surface from fetch()
// as the literal string "Failed to fetch" — not a Supabase error at
// all. Showing that verbatim to a user is confusing and looks broken
// even when it's just their connection. This maps it to something
// they can actually act on, while leaving every other error message
// (wrong password, rate limited, etc.) exactly as Supabase sends it.
function friendlyAuthError(err) {
  const msg = err?.message || ''
  if (msg === 'Failed to fetch' || msg.includes('NetworkError') || msg.includes('fetch failed')) {
    return "Couldn't reach the server. Check your internet connection and try again."
  }
  return msg || 'Something went wrong. Please try again.'
}

// Standard English short-form country names, alphabetical. Used for
// the signup country dropdown.
const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
  'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
  'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 'Congo (DRC)', 'Costa Rica', 'Croatia', 'Cuba',
  'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
  'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
  'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
  'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
  'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
  'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
  'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
  'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
  'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain',
  'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
  'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
  'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay',
  'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe',
]

// Today's date in YYYY-MM-DD, for capping the date-of-birth input so
// nobody can pick a birthdate in the future.
const TODAY_STR = new Date().toISOString().slice(0, 10)

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  // Pre-filled from localStorage if the person arrived via a ?ref=
  // link (captureReferralFromUrl already ran in App.jsx before this
  // component ever mounts) — otherwise starts empty for a manually
  // typed code.
  const [referralCode, setReferralCode] = useState(() => getStagedReferralCode())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [info, setInfo] = useState(null)

  const handleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      onAuth(data.user)
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async () => {
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!dateOfBirth || !age || !gender || !country) {
      setError('Please fill in date of birth, age, gender, and country.')
      return
    }

    if (dateOfBirth > TODAY_STR) {
      setError('Date of birth cannot be in the future.')
      return
    }

    const ageNum = Number(age)
    if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
      setError('Please enter a valid age.')
      return
    }

    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            date_of_birth: dateOfBirth,
            age: ageNum,
            gender,
            country,
          },
        },
      })
      if (error) throw error
      if (data.user && !data.session) {
        setInfo('Check your email to confirm your account.')
      } else {
        onAuth(data.user)
      }
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Enter your email above first.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email)
      if (error) throw error
      setInfo('Password reset link sent — check your email.')
    } catch (err) {
      // A real message here, instead of an empty {}, is what turns
      // Supabase's recover 500 from a dead end into something
      // actually diagnosable.
      setError(friendlyAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  // Reset signup-only state whenever the user switches tabs, so a
  // stale mismatch error or half-filled field doesn't linger across
  // modes. Referral code is re-read from localStorage rather than
  // cleared — a manually typed code (or one picked up from a ?ref=
  // link) should still be there if the user taps Sign In then comes
  // back to Create Account.
  const switchMode = (nextMode) => {
    if (nextMode === mode) return
    setMode(nextMode)
    setConfirmPassword('')
    setShowConfirmPassword(false)
    setDateOfBirth('')
    setAge('')
    setGender('')
    setCountry('')
    setReferralCode(getStagedReferralCode())
    setError(null)
    setInfo(null)
  }

  const handleReferralCodeChange = (value) => {
    setReferralCode(value)
    setManualReferralCode(value)
  }

  const passwordsMismatch =
    mode === 'signup' && confirmPassword.length > 0 && password !== confirmPassword

  return (
    <div className="auth-page">
      <div className="auth-bg-arabic" aria-hidden="true">سُؤَال</div>

      <div className="auth-card">
        <div className="auth-logo">
          <span className="auth-logo-arabic arabic">سُؤَال</span>
          <span className="auth-logo-latin">SUAL</span>
        </div>
        <p className="auth-tagline">
          {mode === 'signin'
            ? 'Welcome back — continue your journey in the Islamic sciences.'
            : 'Create your account and begin your journey in the Islamic sciences.'}
        </p>

        <div className="auth-tabs" role="tablist">
          <span className={`auth-tabs-indicator ${mode === 'signup' ? 'auth-tabs-indicator--right' : ''}`} aria-hidden="true" />
          <button
            role="tab"
            aria-selected={mode === 'signin'}
            className={`auth-tab ${mode === 'signin' ? 'auth-tab--active' : ''}`}
            onClick={() => switchMode('signin')}
          >
            Sign In
          </button>
          <button
            role="tab"
            aria-selected={mode === 'signup'}
            className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            Create Account
          </button>
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="auth-email">Email Address</label>
          <input
            id="auth-email"
            type="email"
            className="auth-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="auth-password">Password</label>
          <div className="auth-input-wrap">
            <input
              id="auth-password"
              type={showPassword ? 'text' : 'password'}
              className="auth-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
            />
            <button
              type="button"
              className="auth-eye-btn"
              onClick={() => setShowPassword(s => !s)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              tabIndex={-1}
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </div>

        {mode === 'signup' && (
          <>
            <div className="auth-field">
              <label className="auth-label" htmlFor="auth-confirm-password">Confirm Password</label>
              <div className="auth-input-wrap">
                <input
                  id="auth-confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`auth-input ${passwordsMismatch ? 'auth-input--error' : ''}`}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowConfirmPassword(s => !s)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  <EyeIcon open={showConfirmPassword} />
                </button>
              </div>
              {passwordsMismatch && (
                <p className="auth-field-hint auth-field-hint--error">Passwords don't match.</p>
              )}
            </div>

            <div className="auth-section-label">A little about you</div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label className="auth-label" htmlFor="auth-dob">Date of Birth</label>
                <input
                  id="auth-dob"
                  type="date"
                  className="auth-input"
                  value={dateOfBirth}
                  max={TODAY_STR}
                  onChange={e => setDateOfBirth(e.target.value)}
                />
              </div>

              <div className="auth-field">
                <label className="auth-label" htmlFor="auth-age">Age</label>
                <input
                  id="auth-age"
                  type="number"
                  className="auth-input"
                  value={age}
                  min={1}
                  max={120}
                  placeholder="e.g. 24"
                  onChange={e => setAge(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-field-row">
              <div className="auth-field">
                <label className="auth-label" htmlFor="auth-gender">Gender</label>
                <select id="auth-gender" className="auth-select" value={gender} onChange={e => setGender(e.target.value)}>
                  <option value="" disabled>Select…</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="auth-field">
                <label className="auth-label" htmlFor="auth-country">Country</label>
                <select id="auth-country" className="auth-select" value={country} onChange={e => setCountry(e.target.value)}>
                  <option value="" disabled>Select…</option>
                  {COUNTRIES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="auth-referral">Referral Code (optional)</label>
              <input
                id="auth-referral"
                type="text"
                className="auth-input"
                style={{ textTransform: 'uppercase' }}
                value={referralCode}
                onChange={e => handleReferralCodeChange(e.target.value)}
                placeholder="e.g. WEOW822"
                autoCapitalize="characters"
              />
            </div>
          </>
        )}

        {error && (
          <div className="auth-error">
            <AlertIcon />
            <p>{error}</p>
          </div>
        )}

        {info && (
          <div className="auth-info">
            <CheckIcon />
            <p>{info}</p>
          </div>
        )}

        <button
          className="auth-submit-btn"
          onClick={mode === 'signin' ? handleSignIn : handleSignUp}
          disabled={loading || (mode === 'signup' && confirmPassword.length > 0 && password !== confirmPassword)}
        >
          {loading ? (
            <span className="auth-submit-spinner" aria-hidden="true" />
          ) : (
            <>
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
              <ArrowIcon />
            </>
          )}
        </button>

        {mode === 'signin' ? (
          <button className="auth-forgot-link" onClick={handleForgotPassword}>
            Forgot password?
          </button>
        ) : (
          <p className="auth-switch-line">
            Already have an account?{' '}
            <button type="button" className="auth-switch-link" onClick={() => switchMode('signin')}>
              Sign in
            </button>
          </p>
        )}

        <div className="auth-quote">
          <p className="auth-quote-text">
            "Whoever treads a path seeking knowledge, Allah will make easy for him a path to Paradise."
          </p>
          <p className="auth-quote-source">Sahih Muslim 2699</p>
        </div>
      </div>
    </div>
  )
}

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-banner-icon">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-banner-icon">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}