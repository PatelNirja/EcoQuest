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
            style={{
              background: item.bgColor,
              border: `2px solid ${item.color}20`,
              borderRadius: 16,
              padding: 16,
              textAlign: 'center',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
            <div style={{
              fontSize: 20,
              fontWeight: 700,
              color: item.color,
              marginBottom: 4
            }}>
              {item.value}
            </div>
            <div style={{
              fontSize: 12,
              color: '#6b7280',
              fontWeight: 500
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{
        marginTop: 20,
        padding: 16,
        background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
        borderRadius: 12,
        border: '1px solid #10b981',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: 16, marginBottom: 4 }}>🎉</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#065f46' }}>
          Amazing work! You're making a real difference for our planet.
        </div>
      </div>
    </div>
  )
}