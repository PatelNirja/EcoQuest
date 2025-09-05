import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function ForgotPassword() {
  const { sendPasswordByEmail } = useAuth()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    try {
      if (!email) throw new Error('Enter your email')
      const password = sendPasswordByEmail({ email })
      setSuccess('We have sent your password to your email (demo).')
      // Demo: briefly show the password to confirm flow
      console.log('Demo password for', email, 'is', password)
      setTimeout(() => navigate('/login'), 1200)
    } catch (err) {
      setError(err.message || 'Could not reset password')
    }
  }

  return (
    <section className="card" style={{ maxWidth: 520, margin: '0 auto', boxShadow: '0 18px 50px rgba(6,95,70,.08)', borderRadius: 14, borderColor: 'rgba(13,148,136,.15)' }}>
      <h2 style={{ margin: '8px 0', textAlign: 'center' }}>Forgot password</h2>
      <p className="muted" style={{ marginTop: -4, marginBottom: 16, textAlign: 'center' }}>Enter your email; we’ll send your password.</p>
      <form onSubmit={submit}>
        <div style={{ display: 'grid', gap: 8 }}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(13,148,136,.25)' }} />
          {error && <div style={{ color: '#b91c1c', fontSize: 14 }}>{error}</div>}
          {success && <div style={{ color: '#065f46', fontSize: 14 }}>{success}</div>}
          <button type="submit" style={{ height: 44, borderRadius: 12 }}>Send</button>
          <div className="muted" style={{ textAlign: 'center' }}>
            Remembered it? <Link to="/login">Back to sign in</Link>
          </div>
        </div>
      </form>
    </section>
  )
}


