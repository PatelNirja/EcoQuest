export default function EcoCard({ title, description, points, difficulty, category, onAccept, completed = false, icon = "🌱" }) {
  const difficultyColors = {
    easy: '#10b981',
    medium: '#f59e0b',
    hard: '#ef4444'
  }

  const categoryColors = {
    transport: '#3b82f6',
    waste: '#8b5cf6',
    energy: '#f59e0b',
    water: '#06b6d4',
    nature: '#10b981'
  }

  return (
    <div className="eco-card" style={{
      background: completed ? '#f0fdf4' : 'white',
      border: `2px solid ${completed ? '#10b981' : '#e5e7eb'}`,
      borderRadius: 16,
      padding: 20,
      position: 'relative',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: `${categoryColors[category] || '#10b981'}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{title}</h3>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            <span style={{
              background: `${difficultyColors[difficulty]}20`,
              color: difficultyColors[difficulty],
              padding: '2px 8px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'capitalize'
            }}>
              {difficulty}
            </span>
            <span style={{
              background: `${categoryColors[category] || '#10b981'}20`,
              color: categoryColors[category] || '#10b981',
              padding: '2px 8px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'capitalize'
            }}>
              {category}
            </span>
          </div>
        </div>
        <div style={{
          background: '#fef3c7',
          color: '#d97706',
          padding: '4px 8px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600
        }}>
          +{points} pts
        </div>
      </div>
      
      <p style={{ margin: '0 0 16px', color: '#6b7280', lineHeight: 1.5 }}>{description}</p>
      
      {!completed && (
        <button 
          onClick={onAccept}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            padding: '12px 16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-1px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          Accept Challenge
        </button>
      )}
      
      {completed && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          color: '#10b981',
          fontWeight: 600
        }}>
          <span>✅</span>
          Completed!
        </div>
      )}
    </div>
  )
}