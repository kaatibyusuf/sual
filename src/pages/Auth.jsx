import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './Auth.css'

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
      setError(err.message || 'Something went wrong. Please try again.')
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

    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      if (data.user && !data.session) {
        setInfo('Check your email to confirm your account.')
      } else {
        onAuth(data.user)
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
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
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Reset confirm-password state whenever the user switches tabs,
  // so a stale mismatch error doesn't linger across modes.
  const switchMode = (nextMode) => {
    setMode(nextMode)
    setConfirmPassword('')
    setShowConfirmPassword(false)
    setError(null)
    setInfo(null)
  }

  const passwordsMismatch =
    mode === 'signup' && confirmPassword.length > 0 && password !== confirmPassword

  return (
    <div className="auth-page">
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

        <div className="auth-tabs">
          <button className={`auth-tab ${mode === 'signin' ? 'auth-tab--active' : ''}`} onClick={() => switchMode('signin')}>
            Sign In
          </button>
          <button className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`} onClick={() => switchMode('signup')}>
            Create Account
          </button>
        </div>

        <div className="auth-field">
          <label className="auth-label">Email Address</label>
          <input type="email" className="auth-input" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>
          <div className="auth-input-wrap">
            <input
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
          <div className="auth-field">
            <label className="auth-label">Confirm Password</label>
            <div className="auth-input-wrap">
              <input
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
        )}

        {error && (
          <div className="auth-error">
            <span>⚠️</span>
            <p>{error}</p>
          </div>
        )}

        {info && (
          <div className="auth-info">
            <span>✅</span>
            <p>{info}</p>
          </div>
        )}

        <button
          className="auth-submit-btn"
          onClick={mode === 'signin' ? handleSignIn : handleSignUp}
          disabled={loading || (mode === 'signup' && confirmPassword.length > 0 && password !== confirmPassword)}
        >
          {mode === 'signin' ? 'Sign In →' : 'Create Account →'}
        </button>

        {mode === 'signin' && (
          <button className="auth-forgot-link" onClick={handleForgotPassword}>
            Forgot password?
          </button>
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