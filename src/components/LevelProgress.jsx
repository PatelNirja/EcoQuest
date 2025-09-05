export default function LevelProgress({ currentLevel, currentPoints, nextLevelPoints, totalPoints }) {
  const progress = (currentPoints / nextLevelPoints) * 100
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
      border: '2px solid #10b981',
      borderRadius: 20,
      padding: 24,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: -20,
        right: -20,
        width: 80,
        height: 80,
        background: 'linear-gradient(135deg, #10b981, #059669)',
        borderRadius: '50%',
        opacity: 0.1
      }} />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <div style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
        }}>
          {currentLevel}
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#065f46' }}>
            Level {currentLevel} Eco-Warrior
          </h3>
          <p style={{ margin: '4px 0 0', color: '#059669', fontWeight: 500 }}>
            {currentPoints} / {nextLevelPoints} points
          </p>
        </div>
      </div>
      
      <div style={{
        background: 'rgba(16, 185, 129, 0.2)',
        borderRadius: 12,
        height: 12,
        overflow: 'hidden',
        marginBottom: 8
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #10b981, #059669)',
          height: '100%',
          width: `${Math.min(progress, 100)}%`,
          borderRadius: 12,
          transition: 'width 0.5s ease'
        }} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#059669', fontSize: 14, fontWeight: 500 }}>
          {nextLevelPoints - currentPoints} points to next level
        </span>
        <span style={{ color: '#065f46', fontSize: 14, fontWeight: 600 }}>
          Total: {totalPoints} pts
        </span>
      </div>
    </div>
  )
}