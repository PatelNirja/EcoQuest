export default function ImpactTracker({ stats }) {
  const defaultStats = {
    co2Saved: 45.2,
    treesPlanted: 12,
    wasteReduced: 8.5,
    energySaved: 120
  }

  const impactStats = stats || defaultStats

  const statItems = [
    {
      icon: '🌍',
      value: `${impactStats.co2Saved} kg`,
      label: 'CO₂ Reduced',
      color: '#10b981',
      bgColor: '#f0fdf4'
    },
    {
      icon: '🌳',
      value: impactStats.treesPlanted,
      label: 'Trees Planted',
      color: '#059669',
      bgColor: '#ecfdf5'
    },
    {
      icon: '♻️',
      value: `${impactStats.wasteReduced} kg`,
      label: 'Waste Reduced',
      color: '#0ea5e9',
      bgColor: '#f0f9ff'
    },
    {
      icon: '⚡',
      value: `${impactStats.energySaved} kWh`,
      label: 'Energy Saved',
      color: '#f59e0b',
      bgColor: '#fffbeb'
    }
  ]

  return (
    <div className="card-3d pulse" style={{
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
        📊 Your Environmental Impact
      </h3>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 16
      }}>
        {statItems.map((item, index) => (
          <div
            key={index}
            className="glass"
            style={{
              background: `linear-gradient(145deg, ${item.color}30, ${item.color}20)`,
              border: `2px solid ${item.color}40`,
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
              borderRadius: 16,
              padding: 16,
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: `0 10px 25px ${item.color}20`,
              transform: 'translateZ(0)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
              e.currentTarget.style.boxShadow = `0 20px 40px ${item.color}30`
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = `0 10px 25px ${item.color}20`
            }}
          >
            <div style={{ 
              fontSize: 28, 
              marginBottom: 8,
              textShadow: `0 0 15px ${item.color}60`
            }}>
              {item.icon}
            </div>
            <div style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#f8fafc',
              textShadow: `0 0 10px ${item.color}`,
              marginBottom: 4
            }}>
              {item.value}
            </div>
            <div style={{
              fontSize: 12,
              color: '#cbd5e1',
              fontWeight: 600
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: 20,
        padding: 16,
        background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.2), rgba(6, 95, 70, 0.1))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: 12,
        border: '1px solid rgba(16, 185, 129, 0.3)',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(16, 185, 129, 0.2)'
      }}>
        <div style={{ fontSize: 16, marginBottom: 4 }}>🎉</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#10b981', textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>
          Amazing work! You're making a real difference for our planet.
        </div>
      </div>
    </div>
  )
}