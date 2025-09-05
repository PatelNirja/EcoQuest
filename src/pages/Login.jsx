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
    <section className="card" style={{ maxWidth: 480, margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,.05)' }}>
      <h2 style={{ margin: '8px 0' }}>Welcome back</h2>
      <p className="muted" style={{ marginTop: -4, marginBottom: 12 }}>Sign in to continue your EcoQuest.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 8 }}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ padding: 12, borderRadius: 10, border: '1px solid var(--color-border)' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: 12, borderRadius: 10, border: '1px solid var(--color-border)' }} />
          {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
          <button type="submit">Continue</button>
          <div className="muted" style={{ textAlign: 'center' }}>
            New here? <Link to="/register">Create an account</Link>
          </div>
        </div>
      </form>
    </section>
  )
}


