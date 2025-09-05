export default function Leaderboard({ title = '🏆 Leaderboard', entries = [] }) {
  const defaultEntries = entries.length ? entries : [
    { name: 'Aarav', points: 220, avatar: '👨🏽‍🎓', level: 3 },
    { name: 'Diya', points: 190, avatar: '👩🏻‍🎓', level: 2 },
    { name: 'Kabir', points: 175, avatar: '👨🏻‍🎓', level: 2 },
    { name: 'Priya', points: 165, avatar: '👩🏽‍🎓', level: 2 },
    { name: 'You', points: 80, avatar: '🧑🏽‍🎓', level: 2, isCurrentUser: true }
  ]

  const getRankIcon = (index) => {
    if (index === 0) return '🥇'
    if (index === 1) return '🥈'
    if (index === 2) return '🥉'
    return `${index + 1}.`
  }

  return (
    <div style={{
      background: 'white',
      borderRadius: 20,
      padding: 24,
      border: '2px solid #e5e7eb',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      height: 'fit-content'
    }}>
      <h3 style={{ 
        margin: '0 0 20px', 
        fontSize: 18, 
        fontWeight: 700,
        color: '#111827'
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {defaultEntries.map((entry, index) => (
          <div 
            key={entry.name} 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 12,
              padding: 12,
              borderRadius: 12,
              background: entry.isCurrentUser ? 'linear-gradient(135deg, #fef3c7, #fde68a)' : '#f9fafb',
              border: entry.isCurrentUser ? '2px solid #d97706' : '1px solid #e5e7eb',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ 
              fontSize: 16, 
              fontWeight: 700,
              minWidth: 24,
              textAlign: 'center',
              color: index < 3 ? '#d97706' : '#6b7280'
            }}>
              {getRankIcon(index)}
            </div>
            <div style={{ fontSize: 24 }}>{entry.avatar}</div>
            <div style={{ flex: 1 }}>
              <div style={{ 
                fontWeight: 600, 
                color: entry.isCurrentUser ? '#92400e' : '#111827',
                fontSize: 14
              }}>
                {entry.name}
              </div>
              <div style={{ 
                fontSize: 12, 
                color: entry.isCurrentUser ? '#a16207' : '#6b7280'
              }}>
                Level {entry.level}
              </div>
            </div>
            <div style={{
              fontWeight: 700,
              color: entry.isCurrentUser ? '#92400e' : '#10b981',
              fontSize: 14
            }}>
              {entry.points} pts
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: 16,
        padding: 12,
        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
        borderRadius: 12,
        textAlign: 'center'
      }}>
        <div style={{ fontSize: 12, color: '#1e40af', fontWeight: 500 }}>
          🎯 Climb higher by completing more challenges!
        </div>
      </div>
    </div>
  )
}


