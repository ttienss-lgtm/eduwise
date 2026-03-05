import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const QS = [
    { q: 'Bạn thích sửa chữa đồ vật, máy móc?', c: 'R' }, { q: 'Bạn thích nghiên cứu, phân tích dữ liệu?', c: 'I' },
    { q: 'Bạn thích vẽ, thiết kế, sáng tạo nghệ thuật?', c: 'A' }, { q: 'Bạn thích giúp đỡ, dạy dỗ người khác?', c: 'S' },
    { q: 'Bạn thích thuyết phục, bán hàng, lãnh đạo?', c: 'E' }, { q: 'Bạn thích quản lý sổ sách, dữ liệu có tổ chức?', c: 'C' },
    { q: 'Bạn thích làm việc ngoài trời?', c: 'R' }, { q: 'Bạn thích giải quyết bài toán, câu đố logic?', c: 'I' },
    { q: 'Bạn thích viết lách, biểu diễn, ca hát?', c: 'A' }, { q: 'Bạn thích lắng nghe, tư vấn cho người khác?', c: 'S' },
    { q: 'Bạn thích quản lý dự án, ra quyết định?', c: 'E' }, { q: 'Bạn thích làm theo quy trình, chính xác?', c: 'C' },
    { q: 'Bạn thích lắp ráp, xây dựng?', c: 'R' }, { q: 'Bạn thích thí nghiệm khoa học?', c: 'I' },
    { q: 'Bạn thích chụp ảnh, làm phim?', c: 'A' }, { q: 'Bạn thích tổ chức hoạt động cộng đồng?', c: 'S' },
    { q: 'Bạn thích thương lượng, đàm phán?', c: 'E' }, { q: 'Bạn thích nhập liệu, kế toán?', c: 'C' },
]

const LABELS = { R: 'Realistic (Thực tế)', I: 'Investigative (Nghiên cứu)', A: 'Artistic (Nghệ thuật)', S: 'Social (Xã hội)', E: 'Enterprising (Kinh doanh)', C: 'Conventional (Quy chuẩn)' }
const CAREERS = { R: ['Kỹ sư', 'Kiến trúc sư', 'Nông nghiệp'], I: ['Khoa học', 'Y dược', 'Công nghệ'], A: ['Thiết kế', 'Truyền thông', 'Nghệ thuật'], S: ['Giáo dục', 'Y tế', 'Tâm lý'], E: ['Kinh doanh', 'Marketing', 'Quản trị'], C: ['Kế toán', 'Tài chính', 'Hành chính'] }
const COLORS = { R: 'var(--red)', I: 'var(--B500)', A: 'var(--purple)', S: 'var(--green)', E: 'var(--orange)', C: 'var(--teal)' }

export default function RIASECTest() {
    const nav = useNavigate()
    const [idx, setIdx] = useState(0)
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState(null)

    const select = (val) => {
        const a = [...answers]; a[idx] = val; setAnswers(a)
        if (idx < QS.length - 1) setTimeout(() => setIdx(idx + 1), 200)
    }

    const finish = () => {
        const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
        QS.forEach((q, i) => { if (answers[i]) scores[q.c] += answers[i] })
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1])
        setResult(sorted)
        localStorage.setItem('eduwise_riasec', JSON.stringify(sorted))
        const c = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
        if (!c.includes('riasec')) { c.push('riasec'); localStorage.setItem('eduwise_completed', JSON.stringify(c)) }
    }

    if (result) {
        const top3 = result.slice(0, 3)
        return (
            <div className="quiz-container">
                <div className="card card-padded" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>🧭</div>
                    <h2 className="h1">Kết quả RIASEC</h2>
                    <p className="body" style={{ marginTop: 8 }}>Mã Holland Code: <strong>{top3.map(t => t[0]).join('')}</strong></p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, textAlign: 'left' }}>
                        {top3.map(([code, score], i) => (
                            <div key={code} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS[code] + '20', color: COLORS[code], display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16 }}>{i + 1}</div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, color: 'var(--N800)' }}>{LABELS[code]}</div>
                                    <div style={{ fontSize: 12, color: 'var(--N500)' }}>Ngành phù hợp: {CAREERS[code].join(', ')}</div>
                                </div>
                                <div className="badge" style={{ background: COLORS[code] + '20', color: COLORS[code] }}>{score} điểm</div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: 24 }} onClick={() => nav('/assessment')}>Quay lại <ArrowRight size={16} /></button>
                </div>
            </div>
        )
    }

    return (
        <div className="quiz-container">
            <div className="page-header"><h1 className="h2">🧭 Sở thích nghề RIASEC</h1><p className="page-subtitle">Đánh giá mức độ yêu thích từ 1-5</p></div>
            <div className="quiz-progress">
                <div className="quiz-progress-text"><span>Câu {idx + 1}/{QS.length}</span><span>{Math.round(((idx + 1) / QS.length) * 100)}%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${((idx + 1) / QS.length) * 100}%` }} /></div>
            </div>
            <div className="quiz-question">{QS[idx].q}</div>
            <div className="quiz-options">
                {[1, 2, 3, 4, 5].map(v => (
                    <div key={v} className={`quiz-option${answers[idx] === v ? ' selected' : ''}`} onClick={() => select(v)}>
                        <div className="quiz-option-letter">{v}</div>{['Rất không thích', 'Không thích', 'Bình thường', 'Thích', 'Rất thích'][v - 1]}
                    </div>
                ))}
            </div>
            <div className="quiz-nav">
                <button className="btn btn-outline" disabled={idx === 0} onClick={() => setIdx(idx - 1)}><ArrowLeft size={16} />Trước</button>
                {idx === QS.length - 1 && answers.filter(Boolean).length === QS.length ?
                    <button className="btn btn-primary" onClick={finish}>Xem kết quả <ArrowRight size={16} /></button> :
                    <button className="btn btn-outline" disabled={!answers[idx]} onClick={() => setIdx(idx + 1)}>Tiếp <ArrowRight size={16} /></button>
                }
            </div>
        </div>
    )
}
