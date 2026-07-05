import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './Auth.css'

const EyeIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.6 10.6 0 0 1 12 19c-7 0-11-7-11-7a20.3 20.3 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 7 11 7a20.4 20.4 0 0 1-3.22 4.19" />
        <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
  </svg>
)

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const switchMode = (next) => {
    setMode(next)
    setError(null)
    setSuccess(null)
    setConfirmPassword('')
    setShowPassword(false)
    setShowConfirm(false)
  }

  const handleSubmit = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }
    if (mode === 'signup' && !name) {
      setError('Please enter your name.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: name },
          },
        })
        if (error) throw error
        setSuccess('Account created! Please check your email to confirm your account.')
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        onAuth(data.user)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="auth-page">
      {/* Background */}
      <div className="auth-bg">
        <div className="auth-bg-arabic">سُؤَال</div>
      </div>

      <div className="auth-card">
        {/* Logo */}
        <div className="auth-logo">
          <div className="auth-logo-arabic">سُؤَال</div>
          <div className="auth-logo-latin">Sual</div>
        </div>

        <p className="auth-tagline">
          {mode === 'login'
            ? 'Welcome back — continue your journey in the Islamic sciences.'
            : 'Begin your journey in the Islamic sciences.'}
        </p>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === 'login' ? 'auth-tab--active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`}
            onClick={() => switchMode('signup')}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <div className="auth-form">
          {mode === 'signup' && (
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <input
                type="text"
                className="auth-input"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label">Email Address</label>
            <input
              type="email"
              className="auth-input"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <div className="auth-password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                className="auth-input"
                placeholder="At least 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(s => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon open={!showPassword} />
              </button>
            </div>
          </div>

          {mode === 'signup' && (
            <div className="auth-field">
              <label className="auth-label">Confirm Password</label>
              <div className="auth-password-wrap">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  className="auth-input"
                  placeholder="Type your password again"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowConfirm(s => !s)}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  title={showConfirm ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon open={!showConfirm} />
                </button>
              </div>
              {confirmPassword.length > 0 && (
                <p className={`auth-match ${password === confirmPassword ? 'auth-match--ok' : 'auth-match--no'}`}>
                  {password === confirmPassword ? '✓ Passwords match' : '✕ Passwords do not match'}
                </p>
              )}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="auth-error">
              <span>⚠️</span>
              <p>{error}</p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="auth-success">
              <span>✅</span>
              <p>{success}</p>
            </div>
          )}

          {/* Submit */}
          <button
            className="auth-submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? 'Please wait...'
              : mode === 'login' ? 'Sign In →' : 'Create Account →'}
          </button>

          {/* Forgot password */}
          {mode === 'login' && (
            <button
              className="auth-forgot"
              onClick={async () => {
                if (!email) { setError('Enter your email first.'); return }
                setLoading(true)
                const { error } = await supabase.auth.resetPasswordForEmail(email)
                setLoading(false)
                if (error) setError(error.message)
                else setSuccess('Password reset link sent to your email.')
              }}
            >
              Forgot password?
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p className="auth-hadith">
            "Whoever treads a path seeking knowledge, Allah will make easy for him a path to Paradise."
          </p>
          <p className="auth-hadith-source">Sahih Muslim 2699</p>
        </div>
      </div>
    </div>
  )
}