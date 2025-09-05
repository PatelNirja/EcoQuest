export default function Profile() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '320px 1fr' }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <div style={{ width: 96, height: 96, borderRadius: '50%', margin: '0 auto 8px', background: '#e6fffb', display: 'grid', placeItems: 'center', color: '#0ea5a3', fontSize: 32 }}>🧑🏽‍🎓</div>
        <h3 style={{ margin: '4px 0' }}>Student Name</h3>
        <p className="muted">Level 2 • 80 pts</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card">
          <h3 style={{ margin: '4px 0' }}>Recent Activity</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Completed quiz on climate basics</li>
            <li>Accepted challenge: reusable bottle</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ margin: '4px 0' }}>Badges</h3>
          <p className="muted">Water Saver • Tree Guardian</p>
        </div>
      </div>
    </section>
  )
}


