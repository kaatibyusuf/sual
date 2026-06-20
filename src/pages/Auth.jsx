import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './Auth.css'

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

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
            onClick={() => { setMode('login'); setError(null); setSuccess(null) }}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`}
            onClick={() => { setMode('signup'); setError(null); setSuccess(null) }}
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
            <input
              type="password"
              className="auth-input"
              placeholder="At least 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

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