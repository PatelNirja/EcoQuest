import BadgeShowcase from '../components/BadgeShowcase.jsx'
import { useState } from 'react'

export default function Badges() {
  const allBadges = [
    { id: 1, name: 'Water Saver', icon: '💧', earned: true, description: 'Completed 5 water conservation tasks', category: 'water', rarity: 'common' },
    { id: 2, name: 'Tree Guardian', icon: '🌳', earned: true, description: 'Planted or cared for 3 trees', category: 'nature', rarity: 'common' },
    { id: 3, name: 'Waste Warrior', icon: '♻️', earned: false, description: 'Complete 10 waste management tasks', category: 'waste', rarity: 'common' },
    { id: 4, name: 'Energy Saver', icon: '⚡', earned: false, description: 'Save energy for 7 consecutive days', category: 'energy', rarity: 'common' },
    { id: 5, name: 'Transport Hero', icon: '🚲', earned: true, description: 'Use eco-friendly transport 15 times', category: 'transport', rarity: 'common' },
    { id: 6, name: 'Plastic Fighter', icon: '🚫', earned: false, description: 'Go plastic-free for 30 days', category: 'waste', rarity: 'rare' },
    { id: 7, name: 'Climate Champion', icon: '🌍', earned: false, description: 'Complete 50 eco-challenges', category: 'general', rarity: 'epic' },
    { id: 8, name: 'Eco Educator', icon: '📚', earned: false, description: 'Complete all learning modules', category: 'education', rarity: 'rare' },
    { id: 9, name: 'Green Influencer', icon: '📢', earned: false, description: 'Inspire 10 friends to join EcoQuest', category: 'social', rarity: 'rare' },
    { id: 10, name: 'Planet Protector', icon: '🛡️', earned: false, description: 'Maintain top 10 leaderboard for 30 days', category: 'achievement', rarity: 'legendary' },
    { id: 11, name: 'Carbon Neutral', icon: '🌿', earned: false, description: 'Offset 100kg of CO₂ through actions', category: 'impact', rarity: 'epic' },
    { id: 12, name: 'Sustainability Master', icon: '👑', earned: false, description: 'Earn all other badges', category: 'master', rarity: 'legendary' }
  ]

  const rarityColors = {
    common: { bg: '#f0fdf4', border: '#10b981', text: '#065f46' },
    rare: { bg: '#eff6ff', border: '#3b82f6', text: '#1e40af' },
    epic: { bg: '#fef3c7', border: '#f59e0b', text: '#92400e' },
    legendary: { bg: '#fdf2f8', border: '#ec4899', text: '#be185d' }
  }

  const categories = ['all', 'water', 'nature', 'waste', 'energy', 'transport', 'general', 'education', 'social', 'achievement', 'impact', 'master']
  const [filter, setFilter] = useState('all')

  const filteredBadges = filter === 'all' 
    ? allBadges 
    : allBadges.filter(b => b.category === filter)

  const earnedCount = allBadges.filter(b => b.earned).length

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%)',
      minHeight: '100vh',
      padding: '20px 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ 
            fontSize: 32, 
            fontWeight: 800, 
            color: '#065f46',
            margin: '0 0 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            🏆 Badge Collection
          </h1>
          <p style={{ color: '#059669', fontSize: 16, margin: 0 }}>
            Earn badges by completing challenges and learning modules
          </p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <div style={{
            background: 'white',
            borderRadius: 20,
            padding: 24,
            border: '2px solid #e5e7eb',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 24, fontWeight: 700, color: '#111827' }}>
              Your Progress
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#10b981' }}>{earnedCount}</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>Badges Earned</div>
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#6b7280' }}>{allBadges.length - earnedCount}</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>To Unlock</div>
              </div>
              <div>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#f59e0b' }}>{Math.round((earnedCount / allBadges.length) * 100)}%</div>
                <div style={{ fontSize: 14, color: '#6b7280' }}>Complete</div>
              </div>
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.2)',
              borderRadius: 12,
              height: 12,
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #10b981, #059669)',
                height: '100%',
                width: `${(earnedCount / allBadges.length) * 100}%`,
                borderRadius: 12,
                transition: 'width 0.5s ease'
              }} />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                style={{
                  background: filter === category 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'white',
                  color: filter === category ? 'white' : '#6b7280',
                  border: `2px solid ${filter === category ? '#10b981' : '#e5e7eb'}`,
                  borderRadius: 12,
                  padding: '8px 16px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20
        }}>
          {filteredBadges.map((badge) => {
            const colors = rarityColors[badge.rarity]
            return (
              <div
                key={badge.id}
                style={{
                  background: badge.earned ? colors.bg : '#f9fafb',
                  border: `2px solid ${badge.earned ? colors.border : '#e5e7eb'}`,
                  borderRadius: 20,
                  padding: 24,
                  textAlign: 'center',
                  opacity: badge.earned ? 1 : 0.7,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {badge.rarity === 'legendary' && (
                  <div style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    background: 'linear-gradient(45deg, #ec4899, #be185d)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '0 0 0 12px',
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    Legendary
                  </div>
                )}
                
                <div style={{
                  fontSize: 48,
                  marginBottom: 16,
                  filter: badge.earned ? 'none' : 'grayscale(100%)'
                }}>
                  {badge.icon}
                </div>
                
                <h3 style={{
                  margin: '0 0 8px',
                  fontSize: 18,
                  fontWeight: 700,
                  color: badge.earned ? colors.text : '#6b7280'
                }}>
                  {badge.name}
                </h3>
                
                <p style={{
                  margin: '0 0 16px',
                  fontSize: 14,
                  color: badge.earned ? colors.text : '#9ca3af',
                  lineHeight: 1.4
                }}>
                  {badge.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 8
                }}>
                  <span style={{
                    background: badge.earned ? `${colors.border}20` : '#f3f4f6',
                    color: badge.earned ? colors.border : '#6b7280',
                    padding: '4px 8px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {badge.rarity}
                  </span>
                  <span style={{
                    background: badge.earned ? `${colors.border}20` : '#f3f4f6',
                    color: badge.earned ? colors.border : '#6b7280',
                    padding: '4px 8px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'capitalize'
                  }}>
                    {badge.category}
                  </span>
                </div>
                
                {badge.earned && (
                  <div style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    background: colors.border,
                    color: 'white',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12
                  }}>
                    ✓
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


