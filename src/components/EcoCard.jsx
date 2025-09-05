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
    <div className="eco-card card-3d neon-glow" style={{
      background: completed 
        ? 'linear-gradient(145deg, rgba(16, 185, 129, 0.2), rgba(6, 95, 70, 0.1))' 
        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
      border: `2px solid ${completed ? 'rgba(16, 185, 129, 0.5)' : 'rgba(255, 255, 255, 0.2)'}`,
      borderRadius: 16,
      padding: 20,
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      boxShadow: completed 
        ? '0 20px 40px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
        : '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transformStyle: 'preserve-3d'
    }}>
      {/* Floating particles effect */}
      <div className="particles">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${categoryColors[category] || '#10b981'}40, ${categoryColors[category] || '#10b981'}20)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${categoryColors[category] || '#10b981'}60`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          boxShadow: `0 8px 20px ${categoryColors[category] || '#10b981'}30`,
          transform: 'translateZ(10px)'
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 className="gradient-text" style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>{title}</h3>
          <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
            <span style={{
              background: `linear-gradient(135deg, ${difficultyColors[difficulty]}30, ${difficultyColors[difficulty]}20)`,
              color: '#f8fafc',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${difficultyColors[difficulty]}40`,
              padding: '2px 8px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'capitalize',
              boxShadow: `0 4px 10px ${difficultyColors[difficulty]}20`
            }}>
              {difficulty}
            </span>
            <span style={{
              background: `linear-gradient(135deg, ${categoryColors[category] || '#10b981'}30, ${categoryColors[category] || '#10b981'}20)`,
              color: '#f8fafc',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${categoryColors[category] || '#10b981'}40`,
              padding: '2px 8px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500,
              textTransform: 'capitalize',
              boxShadow: `0 4px 10px ${categoryColors[category] || '#10b981'}20`
            }}>
              {category}
            </span>
          </div>
        </div>
        <div style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.2))',
          color: '#fbbf24',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          padding: '4px 8px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 700,
          boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
          transform: 'translateZ(5px)'
        }}>
          +{points} pts
        </div>
      </div>
      
      <p style={{ margin: '0 0 16px', color: '#cbd5e1', lineHeight: 1.6, fontSize: 14 }}>{description}</p>
      
      {!completed && (
        <button 
          onClick={onAccept}
          className="holographic"
          style={{
            width: '100%',
            color: 'white',
            border: 'none',
            borderRadius: 16,
            padding: '12px 16px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
            transform: 'translateZ(10px)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateZ(15px) translateY(-2px) scale(1.02)'
            e.target.style.boxShadow = '0 15px 35px rgba(16, 185, 129, 0.5)'
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateZ(10px)'
            e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)'
          }}
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
          fontWeight: 700,
          fontSize: 16,
          textShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
          transform: 'translateZ(5px)'
        }}>
          <span>✅</span>
          Completed!
        </div>
      )}
    </div>
  )
}