import { useState } from 'react'

const sampleQuiz = [
  { q: 'Which gas is the primary driver of climate change?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'], a: 2 },
  { q: 'Best practice for plastic bottles?', options: ['Burn', 'Landfill', 'Recycle', 'Dump in river'], a: 2 },
]

export default function Quizzes() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const current = sampleQuiz[index]
  function submit() {
    if (selected === null) return
    if (selected === current.a) setScore(score + 1)
    if (index + 1 < sampleQuiz.length) {
      setIndex(index + 1)
      setSelected(null)
    }
  }
  const finished = index >= sampleQuiz.length - 1 && selected !== null
  return (
    <section className="card">
      <h2 style={{ margin: '8px 0' }}>Quick Quiz</h2>
      {!finished ? (
        <div>
          <p style={{ fontWeight: 600 }}>{current.q}</p>
          <div>
            {current.options.map((opt, i) => (
              <label key={opt} style={{ display: 'block', margin: '6px 0' }}>
                <input type="radio" name="quiz" checked={selected === i} onChange={() => setSelected(i)} />{' '}
                {opt}
              </label>
            ))}
          </div>
          <button onClick={submit} style={{ marginTop: 8 }}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Your score: {selected === current.a ? score + 1 : score} / {sampleQuiz.length}</p>
          <button onClick={() => { setIndex(0); setSelected(null); setScore(0) }} style={{ marginTop: 8 }}>Retake</button>
        </div>
      )}
    </section>
  )
}


