export default function ProgressBar({ value = 0, max = 100 }) {
  const pct = Math.max(0, Math.min(100, Math.round((value / max) * 100)))
  return (
    <div style={{ width: '100%', background: '#f3f4f6', borderRadius: 8, height: 10, overflow: 'hidden' }}>
      <div style={{ width: pct + '%', background: '#10b981', height: '100%' }} />
    </div>
  )
}


