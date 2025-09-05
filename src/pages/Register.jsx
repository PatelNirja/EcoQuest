import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    try {
      if (!username || !password) throw new Error('Fill all fields')
      register({ username, password, role })
      navigate('/student')
    } catch (err) {
      setError(err.message || 'Registration failed')
    }
  }
  return (
    <section className="card" style={{ maxWidth: 480, margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,.05)' }}>
      <h2 style={{ margin: '8px 0' }}>Create your account</h2>
      <p className="muted" style={{ marginTop: -4, marginBottom: 12 }}>Join EcoQuest and start earning eco-points.</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gap: 8 }}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" style={{ padding: 12, borderRadius: 10, border: '1px solid var(--color-border)' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{ padding: 12, borderRadius: 10, border: '1px solid var(--color-border)' }} />
          <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: 10, borderRadius: 8, border: '1px solid var(--color-border)' }}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
          <button type="submit">Sign up</button>
          <div className="muted" style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </form>
    </section>
  )
}


