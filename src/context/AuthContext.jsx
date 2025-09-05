import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('ecoquest_user')
      if (raw) setUser(JSON.parse(raw))
    } catch {}
  }, [])

  function getUserStore() {
    try {
      const raw = localStorage.getItem('ecoquest_users')
      return raw ? JSON.parse(raw) : []
    } catch { return [] }
  }

  function setUserStore(users) {
    localStorage.setItem('ecoquest_users', JSON.stringify(users))
  }

  function login({ username, password }) {
    const users = getUserStore()
    const found = users.find(u => u.username === username)
    if (!found) throw new Error('User not found')
    if (found.password !== password) throw new Error('Invalid password')
    const next = { username: found.username, role: found.role }
    setUser(next)
    localStorage.setItem('ecoquest_user', JSON.stringify(next))
  }

  function register({ username, password, role }) {
    const users = getUserStore()
    if (users.some(u => u.username === username)) throw new Error('Username already exists')
    const newUser = { username, password, role }
    const nextUsers = [...users, newUser]
    setUserStore(nextUsers)
    login({ username, password })
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('ecoquest_user')
  }

  const value = useMemo(() => ({ user, login, register, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


