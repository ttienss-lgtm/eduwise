import { Star, Calendar, MessageCircle, Video } from 'lucide-react'

const CONSULTANTS = [
    {
        name: 'Trần Minh Khôi', school: 'MBA — University of Melbourne', role: 'Product Manager @ Canva (Sydney)', rating: 4.9, sessions: 230, tags: ['🇦🇺 Melbourne', 'Business', 'MBA', 'PR tips'],
        services: [
            { name: '☕ Coffee Chat (30\') — Online via Zoom', price: '200K VND', desc: 'Hỏi đáp nhanh về du học Úc, kinh nghiệm học MBA, cuộc sống Melbourne' },
            { name: '📋 Profile Review (60\') — Online', price: '500K VND', desc: 'Review hồ sơ, SOP, CV. Đánh giá chance vào Go8. Gợi ý trường phù hợp' },
            { name: '🎯 Full Mentoring (4 tuần) — Online', price: '2M VND', desc: '4 buổi 1-on-1: chọn trường, viết SOP, chuẩn bị hồ sơ, luyện phỏng vấn scholarship' },
        ],
        color: 'linear-gradient(135deg,var(--B500),var(--purple))'
    },
    {
        name: 'Nguyễn Thảo Vy', school: 'Master IT — UNSW Sydney', role: 'Software Engineer @ Atlassian', rating: 4.8, sessions: 178, tags: ['🇦🇺 Sydney', 'IT', 'Tech Career', 'PR pathway'],
        services: [
            { name: '☕ Coffee Chat (30\') — Online via Google Meet', price: '200K VND', desc: 'Chia sẻ kinh nghiệm học IT tại UNSW, tìm việc tech ở Sydney, PR qua ngành IT' },
            { name: '📋 Career Planning (60\') — Online', price: '500K VND', desc: 'Lộ trình từ du học sinh IT → tech job → PR. Review CV, LinkedIn, portfolio' },
            { name: '🎯 Tech Career Package (4 tuần) — Online', price: '2.5M VND', desc: '4 buổi: chọn trường IT, chuẩn bị hồ sơ, mock interview tech, networking strategy' },
        ],
        color: 'linear-gradient(135deg,var(--teal),var(--B500))'
    },
    {
        name: 'Lê Hoàng Nam', school: 'Bachelor Engineering — UQ Brisbane', role: 'Civil Engineer @ AECOM', rating: 4.9, sessions: 145, tags: ['🇦🇺 Brisbane', 'Engineering', 'Scholarship', 'Regional PR'],
        services: [
            { name: '☕ Coffee Chat (30\') — Online via Zoom', price: '150K VND', desc: 'Hỏi đáp về du học Brisbane, ngành Engineering, cuộc sống Queensland' },
            { name: '📋 Scholarship Guide (60\') — Online', price: '400K VND', desc: 'Hướng dẫn apply học bổng UQ, QUT. Review application essay. Tips viết motivation letter' },
            { name: '🎯 Full Mentoring (4 tuần) — Online', price: '1.8M VND', desc: '4 buổi: chọn trường Engineering, apply học bổng, visa guide, chuẩn bị pre-departure' },
        ],
        color: 'linear-gradient(135deg,var(--green),var(--teal))'
    },
    {
        name: 'Phạm Thu Hà', school: 'Master Nursing — Deakin Melbourne', role: 'Registered Nurse @ Austin Health', rating: 4.7, sessions: 98, tags: ['🇦🇺 Melbourne', 'Nursing', 'Health', 'PR đã xong'],
        services: [
            { name: '☕ Coffee Chat (30\') — Online via Zoom', price: '200K VND', desc: 'Kinh nghiệm học Nursing tại Úc, lộ trình PR qua ngành y tế' },
            { name: '📋 Nursing Pathway Review (60\') — Online', price: '500K VND', desc: 'Tư vấn chi tiết: chọn trường Nursing, AHPRA registration, tìm placement' },
            { name: '🎯 Nursing Career Package (4 tuần) — Online', price: '2M VND', desc: 'Lộ trình hoàn chỉnh: từ VN student → Úc Nursing student → RN → PR' },
        ],
        color: 'linear-gradient(135deg,var(--pink),var(--purple))'
    },
]

export default function ConsultantList() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🧑‍🏫 Tư vấn viên tại Úc</h1><p className="page-subtitle">Kết nối với cựu du học sinh Việt Nam đang sống và làm việc tại Úc</p></div>
            <div style={{ padding: '12px 16px', background: 'var(--B50)', borderRadius: 12, marginBottom: 20, fontSize: 13, color: 'var(--B500)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Video size={16} />
                <span>Tất cả buổi tư vấn đều diễn ra <strong>online</strong> qua Zoom / Google Meet — linh hoạt theo timezone của bạn</span>
            </div>
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
                            {c.services.map(s => (
                                <div className="consultant-service" key={s.name} style={{ flexDirection: 'column', alignItems: 'stretch', gap: 4 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span>{s.name}</span>
                                        <span className="consultant-price">{s.price}</span>
                                    </div>
                                    <div style={{ fontSize: 12, color: 'var(--N400)', lineHeight: 1.5 }}>{s.desc}</div>
                                </div>
                            ))}
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
