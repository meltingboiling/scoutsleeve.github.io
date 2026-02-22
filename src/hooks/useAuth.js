// src/hooks/useAuth.js
import { useState, useEffect } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../services/firebase'

export function useAuth() {
  const [user,    setUser]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const login = async (email, password) => {
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      return true
    } catch (err) {
      const messages = {
        'auth/user-not-found':  'No account found with this email.',
        'auth/wrong-password':  'Incorrect password.',
        'auth/invalid-email':   'Invalid email address.',
        'auth/too-many-requests': 'Too many attempts. Try again later.',
        'auth/invalid-credential': 'Invalid email or password.',
      }
      setError(messages[err.code] || 'Login failed. Check your credentials.')
      return false
    }
  }

  const logout = () => signOut(auth)

  return { user, loading, error, login, logout }
}