import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const QUESTIONS = [
    { q: 'Tại một buổi tiệc, bạn thường:', o: ['Giao lưu với nhiều người, kể cả người lạ', 'Chỉ nói chuyện với người quen'], d: 'EI' },
    { q: 'Khi đối mặt vấn đề mới, bạn thường:', o: ['Tập trung vào sự kiện và chi tiết cụ thể', 'Nhìn bức tranh tổng thể và khả năng'], d: 'SN' },
    { q: 'Khi ra quyết định, bạn ưu tiên:', o: ['Logic và sự công bằng', 'Cảm xúc và giá trị con người'], d: 'TF' },
    { q: 'Bạn thích lối sống:', o: ['Có kế hoạch, ngăn nắp', 'Linh hoạt, tùy cơ ứng biến'], d: 'JP' },
    { q: 'Năng lượng của bạn đến từ:', o: ['Gặp gỡ, trò chuyện với người khác', 'Thời gian riêng tư, suy nghĩ'], d: 'EI' },
    { q: 'Bạn tin tưởng hơn vào:', o: ['Kinh nghiệm thực tế', 'Trực giác, linh cảm'], d: 'SN' },
    { q: 'Bạn đánh giá người khác dựa trên:', o: ['Năng lực và thành tích', 'Thiện chí và ý định'], d: 'TF' },
    { q: 'Cuối tuần, bạn thường:', o: ['Lên kế hoạch cụ thể', 'Để mọi thứ tự nhiên'], d: 'JP' },
    { q: 'Trong nhóm, bạn thường:', o: ['Chủ động phát biểu, dẫn dắt', 'Lắng nghe và suy nghĩ trước khi nói'], d: 'EI' },
    { q: 'Bạn thích học thông qua:', o: ['Ví dụ cụ thể, thực hành', 'Lý thuyết, mô hình, khái niệm'], d: 'SN' },
    { q: 'Khi bạn bè buồn, bạn:', o: ['Phân tích nguyên nhân, đưa giải pháp', 'Đồng cảm, lắng nghe, an ủi'], d: 'TF' },
    { q: 'Bạn thích deadline:', o: ['Rõ ràng, để hoàn thành sớm', 'Mở, để có thêm thời gian sáng tạo'], d: 'JP' },
    { q: 'Sau một ngày dài, bạn muốn:', o: ['Đi chơi cùng bạn bè', 'Ở nhà một mình nghỉ ngơi'], d: 'EI' },
    { q: 'Khi đọc sách, bạn chú ý đến:', o: ['Chi tiết, dữ kiện cụ thể', 'Ý nghĩa ẩn dụ, thông điệp lớn'], d: 'SN' },
    { q: 'Bạn bị chỉ trích, bạn:', o: ['Xem xét khách quan', 'Cảm thấy bị tổn thương'], d: 'TF' },
    { q: 'Phòng làm việc/học của bạn:', o: ['Gọn gàng, mọi thứ có chỗ', 'Hơi bừa bộn nhưng bạn biết đồ ở đâu'], d: 'JP' },
]

const TYPES = {
    ISTJ: { name: 'Logistician', desc: 'Thực tế, có trách nhiệm, đáng tin cậy' },
    ISFJ: { name: 'Defender', desc: 'Tận tâm, ấm áp, bảo vệ người thân' },
    INFJ: { name: 'Advocate', desc: 'Sâu sắc, lý tưởng, quyết tâm' },
    INTJ: { name: 'Architect', desc: 'Chiến lược, độc lập, sáng tạo' },
    ISTP: { name: 'Virtuoso', desc: 'Linh hoạt, thực tế, quan sát tốt' },
    ISFP: { name: 'Adventurer', desc: 'Nhạy cảm, nhân ái, sáng tạo' },
    INFP: { name: 'Mediator', desc: 'Lý tưởng, trung thành, giàu cảm xúc' },
    INTP: { name: 'Logician', desc: 'Logic, sáng tạo, ham học hỏi' },
    ESTP: { name: 'Entrepreneur', desc: 'Năng động, thực dụng, dám nghĩ dám làm' },
    ESFP: { name: 'Entertainer', desc: 'Vui vẻ, năng lượng, yêu đời' },
    ENFP: { name: 'Campaigner', desc: 'Nhiệt tình, sáng tạo, xã hội' },
    ENTP: { name: 'Debater', desc: 'Thông minh, sáng tạo, thích tranh luận' },
    ESTJ: { name: 'Executive', desc: 'Tổ chức, lãnh đạo, thực tế' },
    ESFJ: { name: 'Consul', desc: 'Chu đáo, hợp tác, truyền thống' },
    ENFJ: { name: 'Protagonist', desc: 'Lãnh đạo bẩm sinh, truyền cảm hứng' },
    ENTJ: { name: 'Commander', desc: 'Quyết đoán, tự tin, lãnh đạo' },
}

export default function MBTITest() {
    const nav = useNavigate()
    const [idx, setIdx] = useState(0)
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState(null)

    const select = (optIdx) => {
        const newA = [...answers]; newA[idx] = optIdx; setAnswers(newA)
        if (idx < QUESTIONS.length - 1) setTimeout(() => setIdx(idx + 1), 300)
    }

    const finish = () => {
        const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        QUESTIONS.forEach((q, i) => { const a = answers[i]; if (a !== undefined) counts[q.d[a]]++ })
        const type = (counts.E >= counts.I ? 'E' : 'I') + (counts.S >= counts.N ? 'S' : 'N') + (counts.T >= counts.F ? 'T' : 'F') + (counts.J >= counts.P ? 'J' : 'P')
        setResult(type)
        localStorage.setItem('eduwise_mbti', type)
        const c = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
        if (!c.includes('mbti')) { c.push('mbti'); localStorage.setItem('eduwise_completed', JSON.stringify(c)) }
    }

    if (result) {
        const info = TYPES[result]
        return (
            <div className="quiz-container">
                <div className="card card-padded" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>🧠</div>
                    <h2 className="h1" style={{ color: 'var(--purple)' }}>{result}</h2>
                    <h3 className="h2" style={{ marginTop: 8 }}>{info?.name}</h3>
                    <p className="body" style={{ marginTop: 8 }}>{info?.desc}</p>
                    <div style={{ marginTop: 24, display: 'flex', gap: 12, justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => nav('/assessment')}>Quay lại Assessment <ArrowRight size={16} /></button>
                    </div>
                </div>
            </div>
        )
    }

    const q = QUESTIONS[idx]
    return (
        <div className="quiz-container">
            <div className="page-header"><h1 className="h2">🧠 Trắc nghiệm MBTI</h1><p className="page-subtitle">Khám phá kiểu tính cách của bạn</p></div>
            <div className="quiz-progress">
                <div className="quiz-progress-text"><span>Câu {idx + 1}/{QUESTIONS.length}</span><span>{Math.round(((idx + 1) / QUESTIONS.length) * 100)}%</span></div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${((idx + 1) / QUESTIONS.length) * 100}%` }} /></div>
            </div>
            <div className="quiz-question">{q.q}</div>
            <div className="quiz-options">
                {q.o.map((opt, oi) => (
                    <div key={oi} className={`quiz-option${answers[idx] === oi ? ' selected' : ''}`} onClick={() => select(oi)}>
                        <div className="quiz-option-letter">{String.fromCharCode(65 + oi)}</div>{opt}
                    </div>
                ))}
            </div>
            <div className="quiz-nav">
                <button className="btn btn-outline" disabled={idx === 0} onClick={() => setIdx(idx - 1)}><ArrowLeft size={16} />Trước</button>
                {idx === QUESTIONS.length - 1 && answers.length === QUESTIONS.length ?
                    <button className="btn btn-primary" onClick={finish}>Xem kết quả <ArrowRight size={16} /></button> :
                    <button className="btn btn-outline" disabled={answers[idx] === undefined} onClick={() => setIdx(idx + 1)}>Tiếp <ArrowRight size={16} /></button>
                }
            </div>
        </div>
    )
}
