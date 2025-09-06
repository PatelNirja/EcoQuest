import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AppLayout({ children }) {
  const { user, logout } = useAuth()
  return (
    <div style={{ 
      fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      background: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 25%, #f0f9ff 50%, #ecfdf5 75%, #f0fdf4 100%)',
      minHeight: '100vh'
    }}>
      <header className="glass" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '16px 24px', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '0 0 24px 24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span role="img" aria-label="leaf" style={{ fontSize: 24, textShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}>🌿</span>
          <strong className="gradient-text" style={{ fontSize: 20, fontWeight: 800 }}>EcoQuest</strong>
        </Link>
        <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/" style={{ color: '#1f2937', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }}>Home</Link>
          <Link to="/student" style={{ color: '#1f2937', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }}>Student</Link>
          <Link to="/student/modules" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}>Modules</Link>
          <Link to="/student/quizzes" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}>Quizzes</Link>
          <Link to="/student/challenges" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}>Challenges</Link>
          <Link to="/student/badges" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}>Badges</Link>
          <Link to="/student/profile" style={{ color: '#6b7280', textDecoration: 'none', fontWeight: 500, transition: 'all 0.3s ease' }}>Profile</Link>
          <span style={{ width: 12, borderLeft: '1px solid rgba(0, 0, 0, 0.1)', margin: '0 8px' }} />
          <Link to="/teacher" style={{ color: '#1f2937', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }}>Teacher</Link>
          <Link to="/admin" style={{ color: '#1f2937', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }}>Admin</Link>
          <span style={{ width: 12, borderLeft: '1px solid rgba(0, 0, 0, 0.1)', margin: '0 8px' }} />
          {!user ? (
            <>
              <Link to="/login" style={{ color: '#1f2937', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
              <Link to="/register" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 700 }}>Create account</Link>
            </>
          ) : (
            <>
              <span style={{ color: '#6b7280', fontWeight: 500 }}>Hi, {user.username} ({user.role})</span>
              <button onClick={logout} className="glass" style={{ 
                background: 'rgba(255, 255, 255, 0.8)', 
                color: '#10b981', 
                border: '1px solid rgba(16, 185, 129, 0.5)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                Logout
              </button>
            </>
          )}
        </nav>
      </header>
      <main style={{ padding: '16px' }}>
        {children}
      </main>
      <footer className="glass" style={{ 
        padding: '20px', 
        borderTop: '1px solid rgba(0, 0, 0, 0.08)', 
        color: '#6b7280', 
        fontSize: 12,
        textAlign: 'center',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        © {new Date().getFullYear()} EcoQuest. Learn. Act. Compete.
      </footer>
    </div>
  )
}


