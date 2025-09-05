import LevelProgress from '../components/LevelProgress.jsx'
import BadgeShowcase from '../components/BadgeShowcase.jsx'
import ImpactTracker from '../components/ImpactTracker.jsx'
import EcoCard from '../components/EcoCard.jsx'
import Leaderboard from '../components/Leaderboard.jsx'
import { useState } from 'react'

export default function Student() {
  const points = 80
  const level = 2
  const nextLevelPoints = 150
  const totalPoints = 280
  const [acceptedChallenges, setAcceptedChallenges] = useState([])

  const todayChallenges = [
    {
      id: 1,
      title: 'Use Public Transport',
      description: 'Take the bus, train, or metro instead of private vehicle today',
      points: 15,
      difficulty: 'easy',
      category: 'transport',
      icon: '🚌'
    },
    {
      id: 2,
      title: 'Plant a Sapling',
      description: 'Plant and water a sapling in your area. Upload a photo as proof!',
      points: 25,
      difficulty: 'medium',
      category: 'nature',
      icon: '🌱'
    },
    {
      id: 3,
      title: 'Zero Plastic Day',
      description: 'Avoid using any single-use plastic items for the entire day',
      points: 20,
      difficulty: 'hard',
      category: 'waste',
      icon: '🚫'
    }
  ]

  const handleAcceptChallenge = (challengeId) => {
    setAcceptedChallenges([...acceptedChallenges, challengeId])
  }

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
            🌟 Welcome back, Eco-Warrior!
          </h1>
          <p style={{ color: '#059669', fontSize: 16, margin: 0 }}>
            Ready to make a positive impact today?
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, marginBottom: 32 }}>
          <LevelProgress 
            currentLevel={level}
            currentPoints={points}
            nextLevelPoints={nextLevelPoints}
            totalPoints={totalPoints}
          />
          <Leaderboard />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          <BadgeShowcase />
          <ImpactTracker />
        </div>

        <div style={{ marginBottom: 32 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 700, 
            color: '#065f46',
            margin: '0 0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            🎯 Today's Eco-Challenges
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {todayChallenges.map((challenge) => (
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
        </div>

        <div style={{
          background: 'white',
          borderRadius: 20,
          padding: 24,
          border: '2px solid #e5e7eb',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ 
            margin: '0 0 16px', 
            fontSize: 18, 
            fontWeight: 700,
            color: '#111827',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            📚 Continue Learning
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {['Climate Basics', 'Biodiversity', 'Waste Management', 'Energy Conservation'].map((module) => (
              <div
                key={module}
                style={{
                  background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                  border: '2px solid #93c5fd',
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>📖</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1e40af' }}>
                  {module}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


