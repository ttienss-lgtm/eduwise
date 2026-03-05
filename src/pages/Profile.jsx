import { User, Mail, Settings, Bell, Shield, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Profile({ user }) {
    const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: '', bio: '' })
    const [saved, setSaved] = useState(false)
    const up = (k, v) => { setForm({ ...form, [k]: v }); setSaved(false) }
    const completed = JSON.parse(localStorage.getItem('eduwise_completed') || '[]')
    const mbti = localStorage.getItem('eduwise_mbti') || '—'

    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="page-header"><h1 className="h1">⚙️ Hồ sơ cá nhân</h1><p className="page-subtitle">Quản lý thông tin tài khoản</p></div>
            <div className="grid grid-3" style={{ gridTemplateColumns: '1fr 2fr', gap: 24 }}>
                <div>
                    <div className="card card-padded" style={{ textAlign: 'center', marginBottom: 16 }}>
                        <div style={{ width: 80, height: 80, borderRadius: 20, background: 'linear-gradient(135deg,var(--B500),var(--purple))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, margin: '0 auto 12px' }}>{(user?.name || 'U')[0]}</div>
                        <h3 className="h3">{user?.name || 'User'}</h3>
                        <p style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{user?.email}</p>
                        <div className="badge badge-blue" style={{ marginTop: 8 }}>Student</div>
                    </div>
                    <div className="card card-padded">
                        <h3 className="h3" style={{ marginBottom: 12 }}>📊 Stats</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Tests hoàn thành</span><span style={{ fontWeight: 600 }}>{completed.length}/12</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>MBTI</span><span style={{ fontWeight: 600, color: 'var(--purple)' }}>{mbti}</span></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Member since</span><span style={{ fontWeight: 600 }}>2026</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <h3 className="h3" style={{ marginBottom: 16 }}>Thông tin cá nhân</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Họ và tên</label><input className="input" value={form.name} onChange={e => up('name', e.target.value)} /></div>
                            <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Email</label><input className="input" type="email" value={form.email} onChange={e => up('email', e.target.value)} /></div>
                            <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Số điện thoại</label><input className="input" value={form.phone} onChange={e => up('phone', e.target.value)} placeholder="0912 345 678" /></div>
                            <div><label className="caption" style={{ display: 'block', marginBottom: 4 }}>Giới thiệu bản thân</label><textarea className="input" rows={3} value={form.bio} onChange={e => up('bio', e.target.value)} placeholder="Mô tả ngắn về bản thân..." /></div>
                            <button className="btn btn-primary" onClick={() => setSaved(true)} style={{ alignSelf: 'flex-start' }}>{saved ? '✅ Đã lưu' : 'Lưu thay đổi'}</button>
                        </div>
                    </div>
                    <div className="card card-padded">
                        <h3 className="h3" style={{ marginBottom: 12 }}>🔔 Cài đặt</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {[{ icon: Bell, label: 'Thông báo email', desc: 'Nhận email khi có cập nhật' }, { icon: Shield, label: 'Bảo mật 2 lớp', desc: 'Bảo vệ tài khoản an toàn hơn' }].map(s => (
                                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--N100)' }}>
                                    <s.icon size={18} style={{ color: 'var(--N400)' }} />
                                    <div style={{ flex: 1 }}><div style={{ fontWeight: 500, fontSize: 14 }}>{s.label}</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>{s.desc}</div></div>
                                    <label style={{ position: 'relative', width: 44, height: 24 }}><input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} defaultChecked /><span style={{ position: 'absolute', cursor: 'pointer', inset: 0, background: 'var(--B500)', borderRadius: 12, transition: '0.3s' }}><span style={{ position: 'absolute', width: 18, height: 18, background: 'white', borderRadius: 50, top: 3, left: 3, transition: '0.3s' }} /></span></label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
