export default function Teacher() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div className="card">
        <h2 style={{ margin: '8px 0' }}>Assign Tasks</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <input placeholder="Task title" style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid var(--color-border)' }} />
          <button>Create</button>
        </div>
      </div>
      <div className="card">
        <h2 style={{ margin: '8px 0' }}>Pending Reviews</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Planting proof - Aarav</li>
          <li>Transport pledge - Diya</li>
        </ul>
      </div>
    </section>
  )
}


