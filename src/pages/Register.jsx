import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (!username || !email || !password) throw new Error('Fill all fields')
      register({ username, email, password, role })
      navigate('/student')
    } catch (err) {
      setError(err.message || 'Registration failed')
    }
  }
  return (
    <section className="card" style={{ maxWidth: 520, margin: '0 auto', boxShadow: '0 18px 50px rgba(6,95,70,.08)', borderRadius: 14, borderColor: 'rgba(13,148,136,.15)' }}>
      <h2 style={{ margin: '8px 0', textAlign: 'center' }}>Create your account</h2>
      <p className="muted" style={{ marginTop: -4, marginBottom: 16, textAlign: 'center' }}>Join EcoQuest and start earning eco-points.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 8 }}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--color-border)' }}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
          <button type="submit" style={{ height: 44, borderRadius: 12 }}>Sign up</button>
          <div className="muted" style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </form>
    </section>
  )
}


