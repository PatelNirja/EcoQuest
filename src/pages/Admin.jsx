export default function Admin() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div className="card">
        <h2 style={{ margin: '8px 0' }}>Content Management</h2>
        <p className="muted">Create and publish modules and challenges.</p>
        <button style={{ marginTop: 8 }}>New Module</button>
      </div>
      <div className="card">
        <h2 style={{ margin: '8px 0' }}>Verify Eco-Tasks</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Tree guardian badge - pending</li>
          <li>Plastic-free week - approved</li>
        </ul>
      </div>
    </section>
  )
}


