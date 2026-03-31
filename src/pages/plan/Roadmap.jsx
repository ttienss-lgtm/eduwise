import { CheckCircle2, Circle, Clock, AlertTriangle } from 'lucide-react'

const MILESTONES = [
    { title: 'Đánh giá năng lực', status: 'done', date: 'Tháng 1-2', tasks: ['Hoàn thành 12 bài test trên EduWise', 'Nhận hồ sơ 360°', 'Xác định gap (IELTS, GPA, ngoại khóa)'] },
    { title: 'Nâng cao ngôn ngữ', status: 'current', date: 'Tháng 3-6', tasks: ['Đăng ký lớp IELTS hoặc PTE Academic', 'Luyện đề mỗi tuần (target: IELTS 6.5 / PTE 58)', 'Thi IELTS/PTE lần 1', 'Nếu chưa đạt → luyện thêm và thi lần 2'] },
    { title: 'Chọn trường & Chuẩn bị hồ sơ', status: 'upcoming', date: 'Tháng 7-9', tasks: ['Shortlist 5-8 trường Úc (Reach/Match/Safety)', 'Viết SOP (Statement of Purpose)', 'Chuẩn bị CV, bảng điểm, bằng TN', 'Xin 2-3 thư giới thiệu (LOR)'] },
    { title: 'Nộp Application', status: 'upcoming', date: 'Tháng 10-12', tasks: ['Nộp application online qua trường hoặc agent', 'Apply học bổng (nếu có)', 'Nhận Offer Letter → chấp nhận CoE'] },
    { title: 'Xin Visa Subclass 500', status: 'upcoming', date: 'Tháng 13-15', tasks: ['Mua OSHC (bảo hiểm sức khỏe bắt buộc)', 'Viết GTE Statement', 'Chuẩn bị chứng minh tài chính (AUD 24,505/năm)', 'Khám sức khỏe + Lý lịch tư pháp', 'Nộp visa online qua ImmiAccount'] },
    { title: 'Pre-departure — Bay đi Úc! ✈️', status: 'upcoming', date: 'Tháng 16-18', tasks: ['Đặt vé máy bay (VN → Sydney/Melbourne/Brisbane)', 'Tìm chỗ ở (Student accommodation hoặc share house)', 'Đăng ký Airport Pickup từ trường', 'Chuẩn bị đồ dùng cá nhân', 'Orientation Week tại trường!'] },
]

const STATUS = { done: { icon: CheckCircle2, color: 'var(--green)', bg: 'var(--green-bg)', label: 'Hoàn thành' }, current: { icon: Clock, color: 'var(--B500)', bg: 'var(--B50)', label: 'Đang thực hiện' }, upcoming: { icon: Circle, color: 'var(--N400)', bg: 'var(--N100)', label: 'Sắp tới' } }

export default function Roadmap() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">📋 Roadmap Du học Úc</h1><p className="page-subtitle">Lộ trình 18 tháng cá nhân hóa cho hành trình du học Australia</p></div>
            <div className="card card-padded" style={{ marginBottom: 24, background: 'linear-gradient(135deg,var(--B50),var(--purple-bg))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><AlertTriangle size={18} style={{ color: 'var(--orange)' }} /><span style={{ fontWeight: 600, color: 'var(--N800)' }}>Gap cần cải thiện</span></div>
                <div className="grid grid-3">
                    <div style={{ textAlign: 'center' }}><div style={{ fontSize: 13, color: 'var(--N500)' }}>IELTS / PTE</div><div style={{ fontWeight: 700, color: 'var(--red)' }}>5.5 → 6.5</div><div style={{ fontSize: 12, color: 'var(--N400)' }}>Cần +1.0 IELTS</div></div>
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
