import { Heart, MessageCircle, MapPin, Calendar } from 'lucide-react'

const POSTS = [
    { user: 'Phạm Thu Hà', avatar: 'H', school: 'UoM', country: '🇦🇺 Melbourne', time: '2 giờ trước', content: 'Chi phí sinh hoạt Melbourne ~$1800/tháng nếu share phòng. Part-time job barista kiếm $22/giờ khá ổn. Tip: nên tìm việc qua Seek.com, đừng dùng Indeed.', likes: 45, comments: 12, color: 'var(--pink)' },
    { user: 'Lê Đức', avatar: 'Đ', school: 'Waseda', country: '🇯🇵 Tokyo', time: '5 giờ trước', content: 'Học bổng MEXT cover tuition + 143K yen/tháng. Đủ sống nếu nấu ăn tự. Tip: Apply sớm 1 năm, chuẩn bị Research Plan kỹ.', likes: 89, comments: 23, color: 'var(--teal)' },
    { user: 'Nguyễn Anh', avatar: 'A', school: 'UBC', country: '🇨🇦 Vancouver', time: '1 ngày trước', content: 'Canada PR pathway rất clear: 1 năm PGWP → 1 năm work exp → CRS 470+ → PR. Mình từ du học sinh thành PR chỉ mất 3 năm. AMA!', likes: 156, comments: 45, color: 'var(--B500)' },
    { user: 'Trần Linh', avatar: 'L', school: 'TUM', country: '🇩🇪 Munich', time: '2 ngày trước', content: 'Học miễn phí ở Đức nhưng cần chứng minh €11208/năm trong blocked account. Sinh hoạt Munich ~€1000/tháng. Nên học B1 Đức trước khi qua.', likes: 67, comments: 18, color: 'var(--orange)' },
]

export default function Community() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">👥 Cộng đồng Du học</h1><p className="page-subtitle">Chia sẻ từ du học sinh đang ở nước ngoài</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                <div className="tag active">Tất cả</div><div className="tag">🇦🇺 Úc</div><div className="tag">🇯🇵 Nhật</div><div className="tag">🇨🇦 Canada</div><div className="tag">🇩🇪 Đức</div><div className="tag">🇬🇧 Anh</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {POSTS.map((p, i) => (
                    <div className="card card-padded" key={i}>
                        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{p.avatar}</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--N900)' }}>{p.user} <span style={{ fontWeight: 400, color: 'var(--N400)' }}>· {p.school}</span></div>
                                <div style={{ fontSize: 12, color: 'var(--N500)', display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={12} />{p.country} · <Calendar size={12} />{p.time}</div>
                            </div>
                        </div>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--N700)', marginBottom: 12 }}>{p.content}</p>
                        <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--N400)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}><Heart size={16} />  {p.likes}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}><MessageCircle size={16} /> {p.comments}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
