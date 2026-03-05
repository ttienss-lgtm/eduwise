import { CheckCircle2, Circle, Clock, AlertTriangle, ArrowUpRight } from 'lucide-react'

const MILESTONES = [
    { title: 'Đánh giá năng lực', status: 'done', date: 'Tháng 1-2', tasks: ['Hoàn thành 12 bài test', 'Nhận hồ sơ 360°', 'Xác định gap'] },
    { title: 'Nâng cao ngôn ngữ', status: 'current', date: 'Tháng 3-6', tasks: ['Đăng ký lớp IELTS', 'Luyện đề mỗi tuần', 'Thi IELTS lần 1 (target 6.5)'] },
    { title: 'Nâng cao hồ sơ', status: 'upcoming', date: 'Tháng 4-8', tasks: ['Tham gia CLB ngoại khóa', 'Viết blog cá nhân', 'Thực tập ngành liên quan'] },
    { title: 'Chọn trường & Apply', status: 'upcoming', date: 'Tháng 9-11', tasks: ['Shortlist 5-8 trường', 'Viết SOP và CV', 'Xin thư giới thiệu', 'Nộp application'] },
    { title: 'Xin Visa', status: 'upcoming', date: 'Tháng 12-14', tasks: ['Chuẩn bị chứng minh tài chính', 'Điền form xin visa', 'Luyện phỏng vấn'] },
    { title: 'Pre-departure', status: 'upcoming', date: 'Tháng 15-18', tasks: ['Đặt vé máy bay', 'Tìm chỗ ở', 'Mua bảo hiểm', 'Bay!✈️'] },
]

const STATUS = { done: { icon: CheckCircle2, color: 'var(--green)', bg: 'var(--green-bg)', label: 'Hoàn thành' }, current: { icon: Clock, color: 'var(--B500)', bg: 'var(--B50)', label: 'Đang thực hiện' }, upcoming: { icon: Circle, color: 'var(--N400)', bg: 'var(--N100)', label: 'Sắp tới' } }

export default function Roadmap() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">📋 Roadmap Du học</h1><p className="page-subtitle">Lộ trình 18 tháng cá nhân hóa cho bạn</p></div>
            <div className="card card-padded" style={{ marginBottom: 24, background: 'linear-gradient(135deg,var(--B50),var(--purple-bg))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><AlertTriangle size={18} style={{ color: 'var(--orange)' }} /><span style={{ fontWeight: 600, color: 'var(--N800)' }}>Gap cần cải thiện</span></div>
                <div className="grid grid-3">
                    <div style={{ textAlign: 'center' }}><div style={{ fontSize: 13, color: 'var(--N500)' }}>IELTS</div><div style={{ fontWeight: 700, color: 'var(--red)' }}>5.5 → 6.5</div><div style={{ fontSize: 12, color: 'var(--N400)' }}>Cần +1.0</div></div>
                    <div style={{ textAlign: 'center' }}><div style={{ fontSize: 13, color: 'var(--N500)' }}>GPA</div><div style={{ fontWeight: 700, color: 'var(--orange)' }}>7.5 → 8.0</div><div style={{ fontSize: 12, color: 'var(--N400)' }}>Cần +0.5</div></div>
                    <div style={{ textAlign: 'center' }}><div style={{ fontSize: 13, color: 'var(--N500)' }}>Ngoại khóa</div><div style={{ fontWeight: 700, color: 'var(--red)' }}>Thiếu</div><div style={{ fontSize: 12, color: 'var(--N400)' }}>Cần 2-3 hoạt động</div></div>
                </div>
            </div>
            <div style={{ position: 'relative', paddingLeft: 32 }}>
                <div style={{ position: 'absolute', left: 15, top: 0, bottom: 0, width: 2, background: 'var(--N200)' }} />
                {MILESTONES.map((m, i) => {
                    const s = STATUS[m.status]
                    return (
                        <div key={i} style={{ position: 'relative', marginBottom: 24 }}>
                            <div style={{ position: 'absolute', left: -32, top: 2, width: 32, height: 32, borderRadius: 8, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}><s.icon size={18} /></div>
                            <div className="card card-padded" style={{ borderLeft: `3px solid ${s.color}` }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                    <h3 className="h3">{m.title}</h3>
                                    <div className="badge" style={{ background: s.bg, color: s.color }}>{m.date}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    {m.tasks.map((t, ti) => (
                                        <label key={ti} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--N600)', cursor: 'pointer' }}>
                                            <input type="checkbox" defaultChecked={m.status === 'done'} style={{ width: 16, height: 16, accentColor: 'var(--B500)' }} />{t}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
