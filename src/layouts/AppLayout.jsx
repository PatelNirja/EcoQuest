import { Link } from 'react-router-dom'

export default function AppLayout({ children }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span role="img" aria-label="leaf">🌿</span>
          <strong style={{ color: '#065f46' }}>EcoQuest</strong>
        </Link>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/" style={{ color: '#111827', textDecoration: 'none' }}>Home</Link>
          <Link to="/student" style={{ color: '#111827', textDecoration: 'none' }}>Student</Link>
          <Link to="/teacher" style={{ color: '#111827', textDecoration: 'none' }}>Teacher</Link>
          <Link to="/admin" style={{ color: '#111827', textDecoration: 'none' }}>Admin</Link>
        </nav>
      </header>
      <main style={{ padding: '16px' }}>
        {children}
      </main>
      <footer style={{ padding: '16px', borderTop: '1px solid #e5e7eb', color: '#6b7280', fontSize: 12 }}>
        © {new Date().getFullYear()} EcoQuest. Learn. Act. Compete.
      </footer>
    </div>
  )
}


