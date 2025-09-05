export default function Home() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '1.2fr .8fr' }}>
      <div className="card">
        <h2 style={{ margin: '8px 0' }}>Welcome to EcoQuest</h2>
        <p className="muted">Learn sustainability, complete eco-challenges, and climb the leaderboard.</p>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button>Get Started</button>
          <button style={{ background: 'white', color: 'var(--color-primary)', border: '1px solid var(--color-primary-600)' }}>View Challenges</button>
        </div>
      </div>
      <div className="card">
        <h3 style={{ margin: '4px 0 8px' }}>Highlights</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-muted)' }}>
          <li>Daily eco-challenges to build habits</li>
          <li>Gamified points, levels, and badges</li>
          <li>Compete with friends and schools</li>
        </ul>
      </div>
    </section>
  )
}


