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
    <div className="card-3d" style={{
      borderRadius: 20,
      padding: 24,
    }}>
      <h3 style={{ 
        margin: '0 0 20px', 
        fontSize: 18, 
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }} className="gradient-text">
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
            className="glass float"
            style={{
              textAlign: 'center',
              padding: 16,
              borderRadius: 16,
              background: badge.earned 
                ? 'linear-gradient(145deg, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.2))' 
                : 'rgba(255, 255, 255, 0.05)',
              border: `2px solid ${badge.earned ? 'rgba(245, 158, 11, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
              opacity: badge.earned ? 1 : 0.6,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: badge.earned 
                ? '0 10px 25px rgba(245, 158, 11, 0.3)' 
                : '0 5px 15px rgba(0, 0, 0, 0.1)',
              transform: 'translateZ(0)',
              animationDelay: `${badge.id * 0.1}s`
            }}
            title={badge.description}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
              e.currentTarget.style.boxShadow = badge.earned 
                ? '0 20px 40px rgba(245, 158, 11, 0.4)' 
                : '0 15px 30px rgba(0, 0, 0, 0.2)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = badge.earned 
                ? '0 10px 25px rgba(245, 158, 11, 0.3)' 
                : '0 5px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
              fontSize: 32,
              marginBottom: 8,
              filter: badge.earned ? 'none' : 'grayscale(100%)',
              textShadow: badge.earned ? '0 0 20px rgba(245, 158, 11, 0.5)' : 'none'
            }}>
              {badge.icon}
            </div>
            <div style={{
              fontSize: 12,
              fontWeight: 700,
              color: badge.earned ? '#fbbf24' : '#9ca3af',
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
        background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.2), rgba(29, 78, 216, 0.1))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: 12,
        border: '1px solid rgba(59, 130, 246, 0.3)',
        boxShadow: '0 8px 20px rgba(59, 130, 246, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{ fontSize: 16 }}>🎯</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#60a5fa' }}>
            Progress: {badgeList.filter(b => b.earned).length} / {badgeList.length} badges earned
          </span>
        </div>
        <div className="progress-bar" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 8,
          height: 8
        }}>
          <div className="progress-fill" style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            height: '100%',
            width: `${(badgeList.filter(b => b.earned).length / badgeList.length) * 100}%`,
            borderRadius: 8
          }} />
        </div>
      </div>
    </div>
  )
}