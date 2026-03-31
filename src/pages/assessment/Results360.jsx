import { useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

const AXES = ['Học lực', 'Ngôn ngữ', 'Kỹ năng mềm', 'Tài chính', 'Thích nghi', 'Sẵn sàng', 'Mục tiêu', 'Gia đình']
const DEMO = [75, 60, 85, 70, 80, 72, 90, 65]

function RadarChart({ data, labels, size = 320 }) {
    const cx = size / 2, cy = size / 2, r = size / 2 - 40, n = labels.length
    const angle = (i) => (Math.PI * 2 * i / n) - Math.PI / 2
    const point = (i, v) => ({ x: cx + r * (v / 100) * Math.cos(angle(i)), y: cy + r * (v / 100) * Math.sin(angle(i)) })
    const levels = [20, 40, 60, 80, 100]
    return (
        <svg viewBox={`0 0 ${size} ${size}`} style={{ width: '100%', maxWidth: size }}>
            {levels.map(lv => (
                <polygon key={lv} points={labels.map((_, i) => `${cx + r * (lv / 100) * Math.cos(angle(i))},${cy + r * (lv / 100) * Math.sin(angle(i))}`).join(' ')} fill="none" stroke="var(--N200)" strokeWidth={lv === 100 ? 1.5 : 0.8} />
            ))}
            {labels.map((_, i) => <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(angle(i))} y2={cy + r * Math.sin(angle(i))} stroke="var(--N200)" strokeWidth={0.8} />)}
            <polygon points={data.map((v, i) => { const p = point(i, v); return `${p.x},${p.y}` }).join(' ')} fill="rgba(59,130,246,0.15)" stroke="var(--B500)" strokeWidth={2} />
            {data.map((v, i) => { const p = point(i, v); return <circle key={i} cx={p.x} cy={p.y} r={4} fill="var(--B500)" /> })}
            {labels.map((l, i) => { const p = point(i, 115); return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={11} fill="var(--N600)" fontWeight={500}>{l}</text> })}
        </svg>
    )
}

export default function Results360() {
    const nav = useNavigate()
    const completed = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
    const mbti = localStorage.getItem('eduwise_mbti') || '—'
    const riasec = JSON.parse(localStorage.getItem('eduwise_riasec') || 'null')
    const hollandCode = riasec ? riasec.slice(0, 3).map(r => r[0]).join('') : '—'
    const overallScore = 72

    return (
        <div>
            <div className="page-header"><h1 className="h1">📊 Hồ sơ 360°</h1><p className="page-subtitle">Tổng hợp kết quả từ tất cả bài đánh giá</p></div>
            <div className="grid grid-2" style={{ marginBottom: 24 }}>
                <div className="card card-padded" style={{ textAlign: 'center' }}>
                    <h3 className="h3" style={{ marginBottom: 16 }}>Radar Chart năng lực</h3>
                    <RadarChart data={DEMO} labels={AXES} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div className="card card-padded">
                        <div className="overline" style={{ marginBottom: 8 }}>Điểm tổng</div>
                        <div style={{ fontSize: 48, fontWeight: 800, color: 'var(--B500)' }}>{overallScore}<span style={{ fontSize: 20, color: 'var(--N400)' }}>/100</span></div>
                        <div className="badge badge-blue" style={{ marginTop: 8 }}>🟡 Cần chuẩn bị thêm</div>
                    </div>
                    <div className="card card-padded">
                        <div className="overline" style={{ marginBottom: 8 }}>MBTI</div>
                        <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--purple)' }}>{mbti}</div>
                    </div>
                    <div className="card card-padded">
                        <div className="overline" style={{ marginBottom: 8 }}>Holland Code</div>
                        <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--teal)' }}>{hollandCode}</div>
                    </div>
                </div>
            </div>
            <div className="card card-padded" style={{ background: 'linear-gradient(135deg,var(--B50),var(--purple-bg))', border: '1px solid var(--B100)', marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}><Sparkles size={20} style={{ color: 'var(--B500)' }} /><h3 className="h3">AI Recommendation</h3></div>
                <p className="body" style={{ lineHeight: 1.8 }}>Dựa trên profile của bạn (MBTI: {mbti}, RIASEC: {hollandCode}, Readiness: {overallScore}/100), bạn phù hợp với ngành <strong>Business / International Relations</strong>. Gợi ý: 🇦🇺 Melbourne hoặc Sydney — nhiều trường Go8 mạnh ngành Business, chi phí hợp lý, cơ hội PR cao.</p>
            </div>
            <div className="grid grid-3">
                <button className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }} onClick={() => nav('/countries')}>🇦🇺 Khám phá Thành phố Úc</button>
                <button className="btn btn-outline btn-lg" style={{ justifyContent: 'center' }} onClick={() => nav('/schools')}>🎓 Chọn Trường</button>
                <button className="btn btn-outline btn-lg" style={{ justifyContent: 'center' }} onClick={() => nav('/consultants')}>🧑‍🏫 Book Consultant</button>
            </div>
        </div>
    )
}
