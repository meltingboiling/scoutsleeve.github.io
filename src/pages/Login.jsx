// src/pages/Login.jsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { login, error, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)

  // If already logged in, skip login page entirely
  useEffect(() => {
    if (!authLoading && user) {
      navigate('/dashboard', { replace: true })
    }
  }, [user, authLoading, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const success = await login(email, password)
    if (success) navigate('/dashboard', { replace: true })
    setLoading(false)
  }

  return (
    <div className="min-h-screen pitch-bg flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-grass-500/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-grass-500/10 border border-grass-500/20 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-grass-400" fill="none" stroke="currentColor" strokeWidth="1.8">
              <ellipse cx="12" cy="12" rx="10" ry="7" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-4xl uppercase tracking-wider text-white">Scout</h1>
          <p className="font-display text-lg tracking-widest text-grass-500 uppercase mt-0.5">Dashboard</p>
          <p className="text-sm text-grass-400/50 mt-3">Authorised scouts only — enter your credentials</p>
        </div>

        {/* Card */}
        <div className="panel p-8">
          <h2 className="font-display font-bold text-xl uppercase tracking-widest text-grass-400 mb-6">
            Scout Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-display tracking-widest uppercase text-grass-400/60">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="scout@club.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input-field w-full"
                autoComplete="email"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-display tracking-widest uppercase text-grass-400/60">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input-field w-full"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="bg-danger-500/10 border border-danger-500/25 rounded-lg px-4 py-3 text-sm text-danger-400 font-mono animate-fade-in">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in…
                </span>
              ) : 'Sign In →'}
            </button>
          </form>

          <p className="text-center text-xs text-grass-400/30 mt-6 leading-relaxed">
            Don't have an account? Contact your administrator.<br />
            Accounts are created in Firebase Authentication console.
          </p>
        </div>

        <p className="text-center text-xs font-mono text-grass-500/20 mt-6">
          Scout Sleeve — Biomechanical Intelligence Platform
        </p>
      </div>
    </div>
  )
}
