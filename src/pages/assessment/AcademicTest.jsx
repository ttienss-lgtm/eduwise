import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export default function AcademicTest() {
    const nav = useNavigate()
    const [form, setForm] = useState({ gpa: '', scale: '10', achievements: '', extracurricular: '', awards: '' })
    const up = (k, v) => setForm({ ...form, [k]: v })
    const save = () => {
        localStorage.setItem('eduwise_academic', JSON.stringify(form))
        const c = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
        if (!c.includes('academic')) { c.push('academic'); localStorage.setItem('eduwise_completed', JSON.stringify(c)) }
        nav('/assessment')
    }
    return (
        <div className="quiz-container">
            <div className="page-header"><h1 className="h2">📚 Năng lực học tập</h1><p className="page-subtitle">Đánh giá nền tảng học vấn của bạn</p></div>
            <div className="card card-padded" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="grid grid-2">
                    <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>GPA</label><input className="input" type="number" step="0.1" value={form.gpa} onChange={e => up('gpa', e.target.value)} placeholder="7.5" /></div>
                    <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Thang điểm</label>
                        <select className="input" value={form.scale} onChange={e => up('scale', e.target.value)}>
                            <option value="4">Thang 4.0</option><option value="10">Thang 10</option><option value="100">Thang 100</option>
                        </select>
                    </div>
                </div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Thành tích nổi bật</label><textarea className="input" rows={2} value={form.achievements} onChange={e => up('achievements', e.target.value)} placeholder="Ví dụ: Học sinh giỏi 3 năm liền, Đạt IELTS 6.5..." /></div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Hoạt động ngoại khóa</label><textarea className="input" rows={2} value={form.extracurricular} onChange={e => up('extracurricular', e.target.value)} placeholder="CLB, tình nguyện, thể thao..." /></div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Giải thưởng</label><textarea className="input" rows={2} value={form.awards} onChange={e => up('awards', e.target.value)} placeholder="Giải HSG, cuộc thi khoa học..." /></div>
            </div>
            <div className="quiz-nav">
                <button className="btn btn-outline" onClick={() => nav('/assessment')}><ArrowLeft size={16} />Quay lại</button>
                <button className="btn btn-primary" onClick={save}>Hoàn thành <ArrowRight size={16} /></button>
            </div>
        </div>
    )
}
