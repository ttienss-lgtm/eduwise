import { Heart, MessageCircle, MapPin, Calendar } from 'lucide-react'

const POSTS = [
    { user: 'Phạm Thu Hà', avatar: 'H', school: 'UoM', country: '☕ Melbourne', time: '2 giờ trước', content: 'Chi phí sinh hoạt Melbourne ~$1800/tháng nếu share phòng. Part-time job barista kiếm $23-28/giờ khá ổn. Tip: nên tìm việc qua Seek.com.au hoặc Indeed, đừng dùng Facebook group vì hay bị trả cash dưới minimum wage.', likes: 45, comments: 12, color: 'var(--pink)' },
    { user: 'Nguyễn Thảo Vy', avatar: 'V', school: 'UNSW', country: '🏙️ Sydney', time: '5 giờ trước', content: 'Mới tốt nghiệp IT ở UNSW và đã tìm được việc tech ở Atlassian. Tips: apply grad program của big tech từ tháng 3-4 (trước graduation). LinkedIn rất quan trọng ở Úc — kết nối với recruiters sớm. UNSW career fair cũng rất hữu ích.', likes: 89, comments: 23, color: 'var(--teal)' },
    { user: 'Lê Hoàng Nam', avatar: 'N', school: 'UQ', country: '🌴 Brisbane', time: '1 ngày trước', content: 'Brisbane đang phát triển cực nhanh nhờ Olympic 2032. Giá nhà/rent thấp hơn Sydney/Melbourne nhiều. UQ campus đẹp nhất Úc luôn. Cộng đồng VN ở Sunnybank rất đông, muốn ăn phở hay bún bò đều có. AMA!', likes: 156, comments: 45, color: 'var(--B500)' },
    { user: 'Trần Anh', avatar: 'A', school: 'Adelaide Uni', country: '🍷 Adelaide', time: '2 ngày trước', content: 'Adelaide là lựa chọn tuyệt vời nếu muốn PR! Chi phí sống thấp nhất (~$1400/tháng), được +5 điểm regional bonus cho PR. University of Adelaide thuộc Go8, chất lượng tốt mà học phí thấp hơn UoM/USyd. State nomination SA cũng dễ hơn nhiều.', likes: 67, comments: 18, color: 'var(--orange)' },
]

export default function Community() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">👥 Cộng đồng Du học Úc</h1><p className="page-subtitle">Chia sẻ từ du học sinh Việt Nam đang ở Australia</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <div className="tag active">Tất cả</div><div className="tag">🏙️ Sydney</div><div className="tag">☕ Melbourne</div><div className="tag">🌴 Brisbane</div><div className="tag">🍷 Adelaide</div><div className="tag">🏖️ Perth</div>
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
