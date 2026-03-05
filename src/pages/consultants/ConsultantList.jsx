import { Star, Calendar, MessageCircle } from 'lucide-react'

const CONSULTANTS = [
    {
        name: 'Trần Minh Khôi', school: 'MBA - University of Melbourne', role: 'Product Manager @ Google VN', rating: 4.9, sessions: 230, tags: ['🇦🇺 Australia', 'Business', 'MBA', 'PR tips'],
        services: [{ name: '☕ Coffee Chat (30\')', price: '200K VND' }, { name: '📋 Profile Review (60\')', price: '500K VND' }, { name: '🎯 Full Mentoring (4 tuần)', price: '2M VND' }],
        color: 'linear-gradient(135deg,var(--B500),var(--purple))'
    },
    {
        name: 'Phạm Thu Hà', school: 'MSc - UCL London', role: 'Data Scientist @ Shopee', rating: 4.8, sessions: 156, tags: ['🇬🇧 UK', 'Data Science', 'Scholarship'],
        services: [{ name: '☕ Coffee Chat (30\')', price: '150K VND' }, { name: '📋 SOP Review', price: '400K VND' }, { name: '🎯 Application Guide', price: '1.5M VND' }],
        color: 'linear-gradient(135deg,var(--pink),var(--purple))'
    },
    {
        name: 'Lê Đức Minh', school: 'PhD - University of Tokyo', role: 'AI Researcher', rating: 4.9, sessions: 89, tags: ['🇯🇵 Nhật', 'CS', 'MEXT', 'Research'],
        services: [{ name: '☕ Coffee Chat (30\')', price: '200K VND' }, { name: '📋 Research Plan Review', price: '600K VND' }, { name: '🎯 MEXT Scholarship Guide', price: '2.5M VND' }],
        color: 'linear-gradient(135deg,var(--teal),var(--B500))'
    },
    {
        name: 'Nguyễn Hải Yến', school: 'BBA - National University of Singapore', role: 'Strategy Consultant @ McKinsey', rating: 4.7, sessions: 312, tags: ['🇸🇬 Singapore', 'Business', 'Consulting'],
        services: [{ name: '☕ Coffee Chat (30\')', price: '250K VND' }, { name: '📋 Career Planning', price: '500K VND' }, { name: '🎯 Full Package', price: '3M VND' }],
        color: 'linear-gradient(135deg,var(--orange),var(--red))'
    },
]

export default function ConsultantList() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🧑‍🏫 Tư vấn viên</h1><p className="page-subtitle">Kết nối với cựu du học sinh thành công</p></div>
            <div className="grid grid-2">
                {CONSULTANTS.map(c => (
                    <div className="card consultant-card card-lift" key={c.name}>
                        <div className="consultant-header">
                            <div className="consultant-avatar" style={{ background: c.color }}>{c.name[0]}</div>
                            <div>
                                <div className="consultant-name">{c.name}</div>
                                <div className="consultant-school">{c.school}</div>
                                <div style={{ fontSize: 12, color: 'var(--N500)' }}>{c.role}</div>
                                <div className="consultant-rating"><Star size={14} />{c.rating} ({c.sessions} sessions)</div>
                            </div>
                        </div>
                        <div className="consultant-tags">{c.tags.map(t => <span className="tag" key={t} style={{ fontSize: 12, padding: '2px 8px' }}>{t}</span>)}</div>
                        <div className="consultant-services">
                            {c.services.map(s => <div className="consultant-service" key={s.name}><span>{s.name}</span><span className="consultant-price">{s.price}</span></div>)}
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                            <button className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}><Calendar size={14} />Đặt lịch</button>
                            <button className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}><MessageCircle size={14} />Nhắn tin</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
