import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AppLayout({ children }) {
  const { user, logout } = useAuth()
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', borderRadius: '0 0 var(--radius) var(--radius)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span role="img" aria-label="leaf">🌿</span>
          <strong style={{ color: '#065f46' }}>EcoQuest</strong>
        </Link>
        <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Home</Link>
          <Link to="/student" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Student</Link>
          <Link to="/student/modules" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Modules</Link>
          <Link to="/student/quizzes" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Quizzes</Link>
          <Link to="/student/challenges" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Challenges</Link>
          <Link to="/student/badges" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Badges</Link>
          <Link to="/student/profile" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Profile</Link>
          <span style={{ width: 12, borderLeft: '1px solid var(--color-border)', margin: '0 8px' }} />
          <Link to="/teacher" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Teacher</Link>
          <Link to="/admin" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Admin</Link>
          <span style={{ width: 12, borderLeft: '1px solid var(--color-border)', margin: '0 8px' }} />
          {!user ? (
            <>
              <Link to="/login" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Sign in</Link>
              <Link to="/register" style={{ color: 'var(--color-primary-600)', textDecoration: 'none' }}>Create account</Link>
            </>
          ) : (
            <>
              <span className="muted">Hi, {user.name} ({user.role})</span>
              <button onClick={logout} style={{ background: 'white', color: 'var(--color-primary)', border: '1px solid var(--color-primary-600)' }}>Logout</button>
            </>
          )}
        </nav>
      </header>
      <main style={{ padding: '16px' }}>
        {children}
      </main>
      <footer style={{ padding: '16px', borderTop: '1px solid var(--color-border)', color: 'var(--color-muted)', fontSize: 12 }}>
        © {new Date().getFullYear()} EcoQuest. Learn. Act. Compete.
      </footer>
    </div>
  )
}


