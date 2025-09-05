export default function Leaderboard({ title = 'Leaderboard', entries = [] }) {
  const defaultEntries = entries.length ? entries : [
    { name: 'Aarav', points: 220 },
    { name: 'Diya', points: 190 },
    { name: 'Kabir', points: 175 },
  ]
  return (
    <section style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
      <h3 style={{ margin: '4px 0 8px' }}>{title}</h3>
      <ol style={{ margin: 0, paddingLeft: 20 }}>
        {defaultEntries.map((e, i) => (
          <li key={e.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
            <span>{i + 1}. {e.name}</span>
            <strong>{e.points} pts</strong>
          </li>
        ))}
      </ol>
    </section>
  )
}


