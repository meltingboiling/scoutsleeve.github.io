// src/components/layout/Header.jsx
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function Header() {
  const { pathname } = useLocation()
  const { user, logout } = useAuth()

  const navLink = (to, label) => {
    const active = pathname === to || (to !== '/' && pathname.startsWith(to))
    return (
      <Link
        to={to}
        className={`relative font-display font-semibold uppercase tracking-widest text-sm transition-all duration-200
          ${active ? 'text-grass-400' : 'text-grass-400/50 hover:text-grass-400/80'}`}
      >
        {label}
        {active && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-grass-500 rounded-full" />}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-grass-500/10 bg-pitch-950/90 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-grass-500 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative flex items-center justify-center w-full h-full">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-grass-400" fill="none" stroke="currentColor" strokeWidth="1.8">
                <ellipse cx="12" cy="12" rx="10" ry="7" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </div>
          </div>
          <div>
            <div className="font-display font-bold text-lg tracking-wider text-white leading-none">SCOUT</div>
            <div className="font-mono text-[10px] text-grass-500/70 tracking-widest leading-none">DASHBOARD</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLink('/dashboard', 'Leaderboard')}
          {navLink('/dashboard/live', 'Live Demo')}
        </nav>

        {/* Right side — user info + logout */}
        <div className="flex items-center gap-4">
          {/* Live indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-grass-500/60">
            <span className="w-2 h-2 rounded-full bg-grass-500 animate-pulse-slow" />
            Live
          </div>

          {/* Logged-in user */}
          {user && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-semibold text-white/70 leading-none">{user.email?.split('@')[0]}</span>
                <span className="text-[10px] font-mono text-grass-500/40 leading-none mt-0.5">Scout</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 text-xs font-mono text-grass-400/50 hover:text-danger-400 transition-colors px-2 py-1 rounded-lg hover:bg-danger-500/10 border border-transparent hover:border-danger-500/20"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
