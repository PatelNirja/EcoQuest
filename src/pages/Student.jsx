import ProgressBar from '../components/ProgressBar.jsx'
import Leaderboard from '../components/Leaderboard.jsx'

export default function Student() {
  const points = 80
  const level = 2
  const nextLevelPoints = 150
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16 }}>
      <div>
        <h2 style={{ margin: '8px 0' }}>Student Dashboard</h2>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <h3 style={{ margin: '0 0 8px' }}>Your Progress</h3>
          <p style={{ margin: '4px 0' }}><strong>Eco-points:</strong> {points}</p>
          <p style={{ margin: '4px 0' }}><strong>Level:</strong> {level}</p>
          <ProgressBar value={points} max={nextLevelPoints} />
          <p style={{ margin: '8px 0 0', color: '#6b7280' }}>Earn {nextLevelPoints - points} more points to reach Level {level + 1}.</p>
        </div>
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 12 }}>
          <h3 style={{ margin: '0 0 8px' }}>Eco-challenges</h3>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>Use public transport today</li>
            <li>Plant 1 sapling this week</li>
            <li>Carry a reusable bottle for 3 days</li>
          </ul>
        </div>
      </div>
      <div>
        <Leaderboard />
      </div>
    </section>
  )
}


