import { Bell, CheckCircle2, AlertTriangle, Info, Star, Calendar, MessageCircle } from 'lucide-react'

const NOTIFS = [
    { type: 'success', icon: CheckCircle2, color: 'var(--green)', bg: 'var(--green-bg)', title: 'Đã hoàn thành bài test MBTI', desc: 'Kết quả: ENFJ — Protagonist. Xem chi tiết tại Assessment Center.', time: '5 phút trước', read: false },
    { type: 'info', icon: Info, color: 'var(--B500)', bg: 'var(--B50)', title: 'Deadline sắp đến: University of Melbourne', desc: 'Còn 30 ngày để nộp hồ sơ Round 2 (31/01/2027).', time: '1 giờ trước', read: false },
    { type: 'alert', icon: AlertTriangle, color: 'var(--orange)', bg: 'var(--orange-bg)', title: 'IELTS score cần cải thiện', desc: 'Bạn cần thêm 1.0 band để đạt yêu cầu UoM (6.5). Xem Roadmap.', time: '3 giờ trước', read: false },
    { type: 'star', icon: Star, color: 'var(--purple)', bg: 'var(--purple-bg)', title: 'Consultant Trần Minh Khôi đã phản hồi', desc: 'Anh Khôi đã accept booking Coffee Chat (T4, 14:00).', time: '5 giờ trước', read: true },
    { type: 'msg', icon: MessageCircle, color: 'var(--teal)', bg: 'var(--teal-bg)', title: 'Tin nhắn mới từ cộng đồng', desc: 'Phạm Thu Hà đã reply comment của bạn về Melbourne.', time: '1 ngày trước', read: true },
    { type: 'info', icon: Calendar, color: 'var(--B500)', bg: 'var(--B50)', title: 'Nhắc nhở: Khám sức khỏe xin visa', desc: 'Bạn cần đặt lịch khám sức khỏe trước 15/12 để kịp timeline.', time: '2 ngày trước', read: true },
    { type: 'success', icon: CheckCircle2, color: 'var(--green)', bg: 'var(--green-bg)', title: 'Hoàn thành 8/12 bài test!', desc: 'Bạn đã mở khóa AI Recommendation. Xem kết quả 360° ngay.', time: '3 ngày trước', read: true },
]

export default function Notifications() {
    return (
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="page-header">
                <div className="page-header-row"><h1 className="h1">🔔 Thông báo</h1><button className="btn btn-ghost btn-sm">Đánh dấu tất cả đã đọc</button></div>
                <p className="page-subtitle">{NOTIFS.filter(n => !n.read).length} thông báo chưa đọc</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NOTIFS.map((n, i) => (
                    <div className="card card-padded" key={i} style={{ display: 'flex', gap: 14, alignItems: 'start', opacity: n.read ? 0.7 : 1, borderLeft: n.read ? 'none' : `3px solid ${n.color}` }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: n.bg, color: n.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <n.icon size={20} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <div style={{ fontWeight: n.read ? 400 : 600, fontSize: 14, color: 'var(--N800)' }}>{n.title}</div>
                                {!n.read && <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--B500)', flexShrink: 0, marginTop: 6 }} />}
                            </div>
                            <p style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{n.desc}</p>
                            <span style={{ fontSize: 12, color: 'var(--N400)', marginTop: 4, display: 'block' }}>{n.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
