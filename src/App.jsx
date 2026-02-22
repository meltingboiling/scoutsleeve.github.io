// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import Layout from './components/layout/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Leaderboard from './pages/Leaderboard'
import AthleteDetail from './pages/AthleteDetail'
import LiveDemo from './pages/LiveDemo'

// ─── Protected Route ──────────────────────────────────────────
function Protected({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen pitch-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-grass-500/30 border-t-grass-500 rounded-full animate-spin" />
          <p className="font-mono text-xs text-grass-500/50">Authenticating…</p>
        </div>
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/"      element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Protected dashboard routes */}
        <Route path="/dashboard" element={
          <Protected><Layout /></Protected>
        }>
          <Route index             element={<Leaderboard />} />
          <Route path="athlete/:id"  element={<AthleteDetail />} />
          <Route path="live"         element={<LiveDemo />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
