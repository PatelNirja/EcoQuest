export default function Modules() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
      {["Climate Basics", "Biodiversity", "Waste Segregation"].map((title) => (
        <div key={title} className="card">
          <h3 style={{ margin: '4px 0 8px' }}>{title}</h3>
          <p className="muted">Short interactive lessons with quick knowledge checks.</p>
          <button style={{ marginTop: 8 }}>Start</button>
        </div>
      ))}
    </section>
  )
}


