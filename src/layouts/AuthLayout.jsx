import { Link } from 'react-router-dom'

export default function AuthLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: '1fr auto', background: 'radial-gradient(24rem 24rem at 20% 20%, rgba(14,165,163,0.08), transparent 40%), radial-gradient(28rem 28rem at 80% 30%, rgba(16,185,129,0.08), transparent 45%), linear-gradient(180deg, #fbfefd, #f5fdfa)' }}>
      <main style={{ display: 'grid', placeItems: 'center', padding: 16 }}>
        <div style={{ width: '100%', maxWidth: 520 }}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-grid', placeItems: 'center', gap: 8 }}>
              <div style={{ width: 104, height: 104, borderRadius: '50%', background: 'linear-gradient(180deg, #ffffff, #f7fbf8)', border: '1px solid var(--color-border)', display: 'grid', placeItems: 'center', boxShadow: '0 16px 40px rgba(0,0,0,.06)' }}>
                <span role="img" aria-label="leaf" style={{ fontSize: 48, lineHeight: 1 }}>🌿</span>
              </div>
              <strong style={{ color: 'var(--color-primary-600)', fontSize: 22, marginTop: 6, letterSpacing: .2 }}>EcoQuest</strong>
            </Link>
          </div>
          {children}
        </div>
      </main>
      <footer style={{ padding: 16, textAlign: 'center', color: 'var(--color-muted)', fontSize: 12 }}>
        © {new Date().getFullYear()} EcoQuest
      </footer>
    </div>
  )
}


