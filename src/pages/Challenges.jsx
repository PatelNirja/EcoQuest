import EcoCard from '../components/EcoCard.jsx'
import { useState } from 'react'

export default function Challenges() {
  const [acceptedChallenges, setAcceptedChallenges] = useState([])
  const [filter, setFilter] = useState('all')

  const challenges = [
    {
      id: 1,
      title: 'Use Public Transport',
      description: 'Take the bus, train, or metro instead of private vehicle for a week',
      points: 50,
      difficulty: 'easy',
      category: 'transport',
      icon: '🚌'
    },
    {
      id: 2,
      title: 'Plant a Tree',
      description: 'Plant and nurture a sapling. Upload photos of planting and weekly progress',
      points: 100,
      difficulty: 'medium',
      category: 'nature',
      icon: '🌳'
    },
    {
      id: 3,
      title: 'Zero Waste Week',
      description: 'Produce minimal waste for 7 days. Document your waste reduction journey',
      points: 75,
      difficulty: 'hard',
      category: 'waste',
      icon: '♻️'
    },
    {
      id: 4,
      title: 'Energy Conservation',
      description: 'Reduce electricity usage by 20% this month. Track your consumption',
      points: 80,
      difficulty: 'medium',
      category: 'energy',
      icon: '⚡'
    },
    {
      id: 5,
      title: 'Water Warrior',
      description: 'Implement water-saving techniques and reduce usage by 15%',
      points: 60,
      difficulty: 'easy',
      category: 'water',
      icon: '💧'
    },
    {
      id: 6,
      title: 'Plastic-Free Month',
      description: 'Avoid single-use plastics for 30 days. Find sustainable alternatives',
      points: 120,
      difficulty: 'hard',
      category: 'waste',
      icon: '🚫'
    }
  ]

  const handleAcceptChallenge = (challengeId) => {
    setAcceptedChallenges([...acceptedChallenges, challengeId])
  }

  const filteredChallenges = filter === 'all' 
    ? challenges 
    : challenges.filter(c => c.category === filter)

  const categories = ['all', 'transport', 'nature', 'waste', 'energy', 'water']
  const categoryIcons = {
    all: '🌍',
    transport: '🚌',
    nature: '🌳',
    waste: '♻️',
    energy: '⚡',
    water: '💧'
  }

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 25%, #f0f9ff 50%, #ecfdf5 75%, #f0fdf4 100%)',
      minHeight: '100vh',
      padding: '20px 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ 
            fontSize: 32, 
            fontWeight: 800, 
            color: '#1f2937',
            margin: '0 0 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            🎯 Eco-Challenges
          </h1>
          <p style={{ color: '#6b7280', fontSize: 16, margin: 0 }}>
            Take on real-world challenges to make a positive environmental impact
          </p>
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
                    : 'rgba(255, 255, 255, 0.8)',
                  color: filter === category ? 'white' : '#6b7280',
                  border: `2px solid ${filter === category ? '#10b981' : 'rgba(0, 0, 0, 0.08)'}`,
                  borderRadius: 12,
                  padding: '8px 16px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                <span>{categoryIcons[category]}</span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: 24 
        }}>
          {filteredChallenges.map((challenge) => (
            <EcoCard
              key={challenge.id}
              title={challenge.title}
              description={challenge.description}
              points={challenge.points}
              difficulty={challenge.difficulty}
              category={challenge.category}
              icon={challenge.icon}
              completed={acceptedChallenges.includes(challenge.id)}
              onAccept={() => handleAcceptChallenge(challenge.id)}
            />
          ))}
        </div>

        {acceptedChallenges.length > 0 && (
          <div style={{
            marginTop: 32,
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 20,
            padding: 24,
            border: '2px solid #10b981',
            boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
          }}>
            <h3 style={{ 
              margin: '0 0 16px', 
              fontSize: 18, 
              fontWeight: 700,
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              ✅ Your Active Challenges ({acceptedChallenges.length})
            </h3>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Great job! You've accepted {acceptedChallenges.length} challenge{acceptedChallenges.length !== 1 ? 's' : ''}. 
              Complete them to earn points and badges!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


