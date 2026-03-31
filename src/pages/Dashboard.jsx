import { Link } from 'react-router-dom'
import { ClipboardCheck, Globe, GraduationCap, Users, Map, TrendingUp, ArrowRight } from 'lucide-react'

const QUICK_STATS = [
    { icon: ClipboardCheck, label: 'Bài test', value: '4/12', color: 'var(--teal)', bg: 'var(--teal-bg)' },
    { icon: Globe, label: 'Thành phố Úc', value: '6', color: 'var(--B500)', bg: 'var(--B50)' },
    { icon: GraduationCap, label: 'Trường phù hợp', value: '—', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { icon: Users, label: 'Tư vấn viên', value: '50+', color: 'var(--orange)', bg: 'var(--orange-bg)' },
]

const ACTIONS = [
    { to: '/assessment', icon: ClipboardCheck, title: 'Tiếp tục Assessment', desc: 'Hoàn thành 12 bài test để nhận hồ sơ 360°', color: 'var(--teal)', bg: 'var(--teal-bg)' },
    { to: '/countries', icon: Globe, title: 'Khám phá Thành phố Úc', desc: 'Tìm hiểu 6 thành phố du học tại Australia', color: 'var(--B500)', bg: 'var(--B50)' },
    { to: '/consultants', icon: Users, title: 'Book Tư vấn viên', desc: 'Kết nối cựu du học sinh tại Úc', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { to: '/roadmap', icon: Map, title: 'Xem Roadmap', desc: 'Lộ trình du học Úc cá nhân hóa', color: 'var(--green)', bg: 'var(--green-bg)' },
]

export default function Dashboard({ user }) {
    return (
        <div>
            <div className="page-header">
                <h1 className="h1">Xin chào, {user?.name || 'bạn'} 👋</h1>
                <p className="page-subtitle">Hãy bắt đầu hành trình du học Úc của bạn</p>
            </div>

            <div className="grid grid-4" style={{ marginBottom: 28 }}>
                {QUICK_STATS.map(s => (
                    <div className="card stat-card" key={s.label}>
                        <div className="stat-icon" style={{ background: s.bg, color: s.color }}><s.icon size={24} /></div>
                        <div><div className="stat-value">{s.value}</div><div className="stat-label">{s.label}</div></div>
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: 28 }}>
                <div className="card card-padded" style={{ background: 'linear-gradient(135deg, var(--B500), var(--purple))', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                        <TrendingUp size={22} />
                        <h3 style={{ fontWeight: 600, fontSize: 16 }}>Hoàn thành Assessment để mở khóa AI Tư vấn</h3>
                    </div>
                    <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 16 }}>Bạn đã hoàn thành 0/12 bài test. Hoàn thành tối thiểu 8 bài để nhận gợi ý trường Úc cá nhân hóa.</p>
                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.2)' }}>
                        <div className="progress-fill" style={{ width: '0%', background: 'white' }} />
                    </div>
                </div>
            </div>

            <h2 className="h2" style={{ marginBottom: 16 }}>Hành động nhanh</h2>
            <div className="grid grid-2">
                {ACTIONS.map(a => (
                    <Link to={a.to} key={a.to} style={{ textDecoration: 'none' }}>
                        <div className="card card-lift card-padded" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div style={{ width: 48, height: 48, borderRadius: 12, background: a.bg, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <a.icon size={24} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--N800)' }}>{a.title}</div>
                                <div style={{ fontSize: 13, color: 'var(--N500)', marginTop: 2 }}>{a.desc}</div>
                            </div>
                            <ArrowRight size={18} style={{ color: 'var(--N300)' }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
