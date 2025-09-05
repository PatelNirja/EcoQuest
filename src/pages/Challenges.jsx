export default function Challenges() {
  const list = [
    { title: 'Use public transport', reward: '+10 pts' },
    { title: 'Plant a sapling', reward: '+25 pts' },
    { title: 'Carry reusable bottle', reward: '+5 pts/day' },
  ]
  return (
    <section className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
      {list.map((c) => (
        <div key={c.title} className="card">
          <h3 style={{ margin: '4px 0' }}>{c.title}</h3>
          <p className="muted">Reward: {c.reward}</p>
          <button style={{ marginTop: 8 }}>Accept</button>
        </div>
      ))}
    </section>
  )
}


