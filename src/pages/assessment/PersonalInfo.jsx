import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, ArrowRight, ArrowLeft } from 'lucide-react'

export default function PersonalInfo() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ fullName: '', age: '', education: '', major: '', country: '', motivation: '' })
    const up = (k, v) => setForm({ ...form, [k]: v })
    const save = () => {
        localStorage.setItem('eduwise_personal', JSON.stringify(form))
        const c = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
        if (!c.includes('personal')) { c.push('personal'); localStorage.setItem('eduwise_completed', JSON.stringify(c)) }
        navigate('/assessment')
    }
    return (
        <div className="quiz-container">
            <div className="page-header"><h1 className="h2">👤 Thông tin cá nhân</h1><p className="page-subtitle">Giúp chúng tôi hiểu bạn hơn</p></div>
            <div className="card card-padded" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Họ và tên</label><input className="input" value={form.fullName} onChange={e => up('fullName', e.target.value)} placeholder="Nguyễn Văn A" /></div>
                <div className="grid grid-2">
                    <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Tuổi</label><input className="input" type="number" value={form.age} onChange={e => up('age', e.target.value)} placeholder="18" /></div>
                    <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Trình độ</label>
                        <select className="input" value={form.education} onChange={e => up('education', e.target.value)}>
                            <option value="">Chọn...</option><option>THPT</option><option>Đại học (đang học)</option><option>Đại học (tốt nghiệp)</option><option>Đi làm</option>
                        </select>
                    </div>
                </div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Ngành học quan tâm</label><input className="input" value={form.major} onChange={e => up('major', e.target.value)} placeholder="Business, IT, Design..." /></div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Quốc gia mong muốn</label><input className="input" value={form.country} onChange={e => up('country', e.target.value)} placeholder="Australia, Canada..." /></div>
                <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Tại sao bạn muốn du học?</label><textarea className="input" rows={3} value={form.motivation} onChange={e => up('motivation', e.target.value)} placeholder="Chia sẻ động lực của bạn..." /></div>
            </div>
            <div className="quiz-nav">
                <button className="btn btn-outline" onClick={() => navigate('/assessment')}><ArrowLeft size={16} />Quay lại</button>
                <button className="btn btn-primary" onClick={save}>Hoàn thành <ArrowRight size={16} /></button>
            </div>
        </div>
    )
}
