export default function LevelProgress({ currentLevel, currentPoints, nextLevelPoints, totalPoints }) {
  const progress = (currentPoints / nextLevelPoints) * 100
  
  return (
    <div className="card-3d float" style={{
      background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.1), rgba(6, 95, 70, 0.05))',
      border: '2px solid rgba(16, 185, 129, 0.3)',
      borderRadius: 20,
      padding: 24,
      position: 'relative',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 25px 50px rgba(16, 185, 129, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
    }}>
      {/* Animated background orbs */}
      <div style={{
        position: 'absolute',
        top: -30,
        right: -30,
        width: 120,
        height: 120,
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent)',
        borderRadius: '50%',
        animation: 'pulse 3s infinite',
        filter: 'blur(20px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: -40,
        left: -40,
        width: 100,
        height: 100,
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
        borderRadius: '50%',
        animation: 'float 4s infinite',
        filter: 'blur(15px)'
      }} />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
          border: '3px solid rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: '800',
          boxShadow: '0 15px 30px rgba(16, 185, 129, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
          transform: 'translateZ(10px)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #10b981, #06b6d4, #8b5cf6, #10b981)',
            animation: 'rotate 3s linear infinite',
            zIndex: -1
          }} />
          {currentLevel}
        </div>
        <div>
          <h3 className="gradient-text" style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
            Level {currentLevel} Eco-Warrior
          </h3>
          <p style={{ margin: '4px 0 0', color: '#cbd5e1', fontWeight: 600, fontSize: 14 }}>
          <p style={{ margin: '4px 0 0', color: '#6b7280', fontWeight: 600, fontSize: 14 }}>
            {currentPoints} / {nextLevelPoints} points
          </p>
        </div>
      </div>
      
      <div className="progress-bar" style={{
        background: 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: 12,
        height: 12,
        marginBottom: 12,
        border: '1px solid rgba(255, 255, 255, 0.5)'
      }}>
        <div className="progress-fill" style={{
          background: 'linear-gradient(90deg, #10b981, #059669)',
          height: '100%',
          width: `${Math.min(progress, 100)}%`,
          borderRadius: 12,
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
          position: 'relative'
        }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#10b981', fontSize: 14, fontWeight: 600, textShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }}>
          {nextLevelPoints - currentPoints} points to next level
        </span>
        <span style={{ color: '#059669', fontSize: 14, fontWeight: 700, textShadow: '0 0 10px rgba(5, 150, 105, 0.3)' }}>
          Total: {totalPoints} pts
        </span>
      </div>
    </div>
  )
}