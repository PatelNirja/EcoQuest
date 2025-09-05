const badges = [
  { name: 'Water Saver', desc: 'Completed 3 water-saving challenges', emoji: '💧' },
  { name: 'Tree Guardian', desc: 'Planted or cared for 5 saplings', emoji: '🌳' },
  { name: 'Waste Warrior', desc: 'Sorted waste correctly for 7 days', emoji: '🗑️' },
]

export default function Badges() {
  return (
    <section className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
      {badges.map((b) => (
        <div key={b.name} className="card">
          <h3 style={{ margin: '4px 0' }}>{b.emoji} {b.name}</h3>
          <p className="muted">{b.desc}</p>
        </div>
      ))}
    </section>
  )
}


