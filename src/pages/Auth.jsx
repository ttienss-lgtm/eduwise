import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BookOpen, Mail, Lock, User } from 'lucide-react'

export default function Auth({ onLogin }) {
    const [searchParams] = useSearchParams()
    const [isRegister, setIsRegister] = useState(searchParams.get('register') === 'true')
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin({ name: form.name || form.email.split('@')[0], email: form.email })
        navigate('/dashboard')
    }

    return (
        <div className="auth-page">
            <div className="card auth-card">
                <div className="auth-header">
                    <div className="landing-logo" style={{ justifyContent: 'center' }}>
                        <div className="landing-logo-icon"><BookOpen size={20} /></div>
                        <span className="landing-logo-text">EduWise</span>
                    </div>
                    <h1>{isRegister ? 'Tạo tài khoản' : 'Đăng nhập'}</h1>
                    <p>{isRegister ? 'Bắt đầu hành trình du học của bạn' : 'Chào mừng trở lại'}</p>
                </div>
                <form className="auth-form" onSubmit={handleSubmit}>
                    {isRegister && (
                        <div>
                            <label>Họ và tên</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: 12, top: 11, color: 'var(--N400)' }} />
                                <input className="input" style={{ paddingLeft: 40 }} placeholder="Nguyễn Văn A" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                        </div>
                    )}
                    <div>
                        <label>Email</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: 12, top: 11, color: 'var(--N400)' }} />
                            <input className="input" type="email" style={{ paddingLeft: 40 }} placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                        </div>
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: 12, top: 11, color: 'var(--N400)' }} />
                            <input className="input" type="password" style={{ paddingLeft: 40 }} placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                        {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                    </button>
                </form>
                <div className="auth-footer">
                    {isRegister ? 'Đã có tài khoản? ' : 'Chưa có tài khoản? '}
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsRegister(!isRegister) }}>
                        {isRegister ? 'Đăng nhập' : 'Đăng ký miễn phí'}
                    </a>
                </div>
            </div>
        </div>
    )
}
