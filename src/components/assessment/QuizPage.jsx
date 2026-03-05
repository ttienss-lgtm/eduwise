import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function QuizPage({ id, icon, title, subtitle, questions, onResult }) {
    const nav = useNavigate()
    const [idx, setIdx] = useState(0)
    const [answers, setAnswers] = useState([])
    const [done, setDone] = useState(false)

    const select = (val) => {
        const a = [...answers]; a[idx] = val; setAnswers(a)
        if (idx < questions.length - 1) setTimeout(() => setIdx(idx + 1), 250)
    }

    const finish = () => {
        const result = onResult ? onResult(answers, questions) : { score: Math.round((answers.reduce((s, v) => s + v, 0) / (questions.length * 4)) * 100) }
        localStorage.setItem(`eduwise_${id}`, JSON.stringify(result))
        const c = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
        if (!c.includes(id)) { c.push(id); localStorage.setItem('eduwise_completed', JSON.stringify(c)) }
        setDone(result)
    }

    if (done) {
        return (
            <div className="quiz-container">
                <div className="card card-padded" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>{icon}</div>
                    <h2 className="h1" style={{ color: 'var(--B500)' }}>{done.title || 'Hoàn thành!'}</h2>
                    {done.score !== undefined && <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--teal)', marginTop: 12 }}>{done.score}<span style={{ fontSize: 20, color: 'var(--N400)' }}>/100</span></div>}
                    {done.desc && <p className="body" style={{ marginTop: 12 }}>{done.desc}</p>}
                    {done.details && <div style={{ marginTop: 16, textAlign: 'left' }}>{done.details.map((d, i) => <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--N100)', fontSize: 14 }}><span style={{ color: 'var(--N600)' }}>{d.label}</span><span style={{ fontWeight: 600, color: d.color || 'var(--N800)' }}>{d.value}</span></div>)}</div>}
                    <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => nav('/assessment')}>Quay lại Assessment <ArrowRight size={16} /></button>
                </div>
            </div>
        )
    }

    const q = questions[idx]
    const isRating = q.type === 'rating'
    const options = isRating ? [
        { v: 1, l: 'Hoàn toàn không đồng ý' }, { v: 2, l: 'Không đồng ý' }, { v: 3, l: 'Bình thường' }, { v: 4, l: 'Đồng ý' }, { v: 5, l: 'Hoàn toàn đồng ý' }
    ] : (q.options || []).map((o, i) => ({ v: i, l: o }))

    const allAnswered = answers.filter(a => a !== undefined).length === questions.length

    return (
        <div className="quiz-container">
            <div className="page-header"><h1 className="h2">{icon} {title}</h1><p className="page-subtitle">{subtitle}</p></div>
            <div className="quiz-progress">
                <div className="quiz-progress-text"><span>Câu {idx + 1}/{questions.length}</span><span>{Math.round(((idx + 1) / questions.length) * 100)}%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} /></div>
            </div>
            <div className="quiz-question">{q.q}</div>
            <div className="quiz-options">
                {options.map(o => (
                    <div key={o.v} className={`quiz-option${answers[idx] === o.v ? ' selected' : ''}`} onClick={() => select(o.v)}>
                        <div className="quiz-option-letter">{isRating ? o.v : String.fromCharCode(65 + o.v)}</div>{o.l}
                    </div>
                ))}
            </div>
            <div className="quiz-nav">
                <button className="btn btn-outline" disabled={idx === 0} onClick={() => setIdx(idx - 1)}><ArrowLeft size={16} />Trước</button>
                {idx === questions.length - 1 && allAnswered ?
                    <button className="btn btn-primary" onClick={finish}>Xem kết quả <ArrowRight size={16} /></button> :
                    <button className="btn btn-outline" disabled={answers[idx] === undefined} onClick={() => setIdx(idx + 1)}>Tiếp <ArrowRight size={16} /></button>
                }
            </div>
        </div>
    )
}
