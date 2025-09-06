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
    <div className="particles" style={{ 
      minHeight: '100vh',
      padding: '20px 0',
      position: 'relative',
      background: 'linear-gradient(135deg, #fefefe 0%, #f8fafc 25%, #f0f9ff 50%, #ecfdf5 75%, #f0fdf4 100%)'
    }}>
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 className="gradient-text float" style={{ 
            fontSize: 32, 
            fontWeight: 900, 
            margin: '0 0 8px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textShadow: '0 0 30px rgba(16, 185, 129, 0.3)'
          }}>
            🌟 Welcome back, Eco-Warrior!
          </h1>
          <p style={{ color: '#6b7280', fontSize: 16, margin: 0, fontWeight: 500 }}>
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
          <h2 className="gradient-text" style={{ 
            fontSize: 24, 
            fontWeight: 800, 
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

        <div className="card-3d" style={{
          borderRadius: 20,
          padding: 24,
        }}>
          <h3 className="gradient-text" style={{ 
            margin: '0 0 16px', 
            fontSize: 18, 
            fontWeight: 800,
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
                className="glass"
                style={{
                  background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(29, 78, 216, 0.05))',
                  border: '2px solid rgba(59, 130, 246, 0.2)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: '0 8px 20px rgba(59, 130, 246, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.1)'
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8, textShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}>📖</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#3b82f6' }}>
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


