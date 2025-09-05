import { Link } from 'react-router-dom'

export default function AuthLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto', background: 'linear-gradient(135deg, #f7fbf8, #e6fffb)' }}>
      <header style={{ padding: '20px 16px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span role="img" aria-label="leaf" style={{ fontSize: 20 }}>🌿</span>
          <strong style={{ color: 'var(--color-primary-600)', fontSize: 18 }}>EcoQuest</strong>
        </Link>
      </header>
      <main style={{ display: 'grid', placeItems: 'center', padding: 16 }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          {children}
        </div>
      </main>
      <footer style={{ padding: 16, textAlign: 'center', color: 'var(--color-muted)', fontSize: 12 }}>
        © {new Date().getFullYear()} EcoQuest
      </footer>
    </div>
  )
}


