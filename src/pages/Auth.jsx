import React, { useState } from 'react'
import { supabase } from '../lib/supabase.js'
import './Auth.css'

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    setLoading(true)
    setError(null)
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
          <button className={`auth-tab ${mode === 'signin' ? 'auth-tab--active' : ''}`} onClick={() => setMode('signin')}>
            Sign In
          </button>
          <button className={`auth-tab ${mode === 'signup' ? 'auth-tab--active' : ''}`} onClick={() => setMode('signup')}>
            Create Account
          </button>
        </div>

        <div className="auth-field">
          <label className="auth-label">Email Address</label>
          <input type="email" className="auth-input" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="auth-field">
          <label className="auth-label">Password</label>
          <input type="password" className="auth-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 6 characters" />
        </div>

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

        <button className="auth-submit-btn" onClick={mode === 'signin' ? handleSignIn : handleSignUp} disabled={loading}>
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