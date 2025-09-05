export default function BadgeShowcase({ badges = [] }) {
  const defaultBadges = [
    { id: 1, name: 'Water Saver', icon: '💧', earned: true, description: 'Completed 5 water conservation tasks' },
    { id: 2, name: 'Tree Guardian', icon: '🌳', earned: true, description: 'Planted or cared for 3 trees' },
    { id: 3, name: 'Waste Warrior', icon: '♻️', earned: false, description: 'Complete 10 waste management tasks' },
    { id: 4, name: 'Energy Saver', icon: '⚡', earned: false, description: 'Save energy for 7 consecutive days' },
    { id: 5, name: 'Transport Hero', icon: '🚲', earned: true, description: 'Use eco-friendly transport 15 times' },
    { id: 6, name: 'Plastic Fighter', icon: '🚫', earned: false, description: 'Go plastic-free for 30 days' }
  ]

  const badgeList = badges.length ? badges : defaultBadges

  return (
    <div style={{
      background: 'white',
      borderRadius: 20,
      padding: 24,
      border: '2px solid #e5e7eb',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
    }}>
      <h3 style={{ 
        margin: '0 0 20px', 
        fontSize: 18, 
        fontWeight: 700,
        color: '#111827',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        🏆 Your Badges
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 16
      }}>
        {badgeList.map((badge) => (
          <div
            key={badge.id}
            style={{
              textAlign: 'center',
              padding: 16,
              borderRadius: 16,
              background: badge.earned ? 'linear-gradient(135deg, #fef3c7, #fde68a)' : '#f9fafb',
              border: `2px solid ${badge.earned ? '#d97706' : '#e5e7eb'}`,
              opacity: badge.earned ? 1 : 0.6,
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            title={badge.description}
          >
            <div style={{
              fontSize: 32,
              marginBottom: 8,
              filter: badge.earned ? 'none' : 'grayscale(100%)'
            }}>
              {badge.icon}
            </div>
            <div style={{
              fontSize: 12,
              fontWeight: 600,
              color: badge.earned ? '#92400e' : '#6b7280',
              lineHeight: 1.3
            }}>
              {badge.name}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: 20,
        padding: 16,
        background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
        borderRadius: 12,
        border: '1px solid #93c5fd'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 16 }}>🎯</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1e40af' }}>
            Progress: {badgeList.filter(b => b.earned).length} / {badgeList.length} badges earned
          </span>
        </div>
        <div style={{
          background: 'rgba(59, 130, 246, 0.2)',
          borderRadius: 8,
          height: 8,
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
            height: '100%',
            width: `${(badgeList.filter(b => b.earned).length / badgeList.length) * 100}%`,
            borderRadius: 8,
            transition: 'width 0.5s ease'
          }} />
        </div>
      </div>
    </div>
  )
}