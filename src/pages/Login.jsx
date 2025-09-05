import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    try {
      login({ username, password })
      navigate('/student')
    } catch (err) {
      setError(err.message || 'Login failed')
    }
  }
  return (
    <section className="card" style={{ maxWidth: 520, margin: '0 auto', boxShadow: '0 18px 50px rgba(6,95,70,.08)', borderRadius: 14, borderColor: 'rgba(13,148,136,.15)' }}>
      <h2 style={{ margin: '8px 0', textAlign: 'center' }}>Welcome back</h2>
      <p className="muted" style={{ marginTop: -4, marginBottom: 16, textAlign: 'center' }}>Sign in to continue your EcoQuest.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 8 }}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
          <button type="submit" style={{ height: 44, borderRadius: 12 }}>Continue</button>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/forgot-password" className="muted">Forgot password?</Link>
            <div className="muted">
              New here? <Link to="/register">Create an account</Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}


