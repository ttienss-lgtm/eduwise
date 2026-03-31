import { Star, ThumbsUp } from 'lucide-react'

const REVIEWS = [
    { school: 'University of Melbourne', city: '☕ Melbourne', user: 'Phạm Thu Hà', year: '2024', rating: 5, pros: 'Campus đẹp, support tốt, ngành Business mạnh, Go8 danh tiếng', cons: 'Học phí cao nhất Úc, Melbourne thời tiết thất thường', text: 'Mình rất hài lòng với UoM. Giáo viên chuyên nghiệp, facilities hiện đại. Support cho international students rất tốt, có riêng Student Connect giải đáp mọi thứ.', likes: 45 },
    { school: 'UNSW Sydney', city: '🏙️ Sydney', user: 'Nguyễn Thảo Vy', year: '2024', rating: 5, pros: 'Ngành Engineering/IT top Úc, gần city, cơ hội networking tech', cons: 'Sydney đắt đỏ, competitive, parking khó', text: 'UNSW là lựa chọn tuyệt vời cho ai muốn học IT/Engineering. Career fair nhiều big tech tham gia. Campus mới renovate rất đẹp. Trimester system nên hơi nhanh nhưng flexible.', likes: 78 },
    { school: 'University of Queensland', city: '🌴 Brisbane', user: 'Lê Hoàng Nam', year: '2024', rating: 5, pros: 'Campus đẹp nhất Úc, Brisbane chi phí thấp, thời tiết tuyệt', cons: 'Brisbane ít sôi động bằng Sydney/Melbourne, giao thông chưa tốt lắm', text: 'UQ campus ở St Lucia đẹp như resort. Go8 mà học phí thấp hơn UoM/USyd. Brisbane đang phát triển nhanh nhờ Olympic 2032. Rất recommend!', likes: 92 },
    { school: 'RMIT University', city: '☕ Melbourne', user: 'Trần Anh', year: '2024', rating: 4, pros: 'Design/IT mạnh, campus ở center Melbourne, cộng đồng VN rất đông', cons: 'Ranking không cao bằng Go8, một số ngành chưa mạnh', text: 'RMIT phù hợp cho ai thích Design, IT, Business. Vị trí trung tâm CBD rất tiện — đi làm part-time dễ. RMIT có campus ở VN nên nhiều bạn VN quen thuộc.', likes: 34 },
    { school: 'University of Adelaide', city: '🍷 Adelaide', user: 'Hoàng Minh', year: '2023', rating: 5, pros: 'Go8 mà học phí rẻ hơn, +5 điểm PR regional, state nomination dễ', cons: 'Adelaide khá yên tĩnh, ít entertainment, cộng đồng VN nhỏ hơn', text: 'Nếu mục tiêu là PR thì Adelaide là best choice! Go8 quality, học phí thấp hơn 20-30% so với Melbourne/Sydney. SA state nomination rất friendly với international graduates. Mình đã PR thành công sau 2 năm!', likes: 112 },
    { school: 'Deakin University', city: '☕ Melbourne', user: 'Phạm Linh', year: '2024', rating: 4, pros: 'Nursing/Education top, support tốt, campus Burwood đẹp', cons: 'Ranking vừa, campus xa CBD', text: 'Deakin rất phù hợp cho ai muốn học Nursing hoặc Education. Entry requirement dễ thở hơn Go8. Scholarship 20-25% học phí khá tốt. Work placement program giúp kiếm experience cho PR.', likes: 56 },
]

export default function SchoolReviews() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">⭐ School Reviews — Úc</h1><p className="page-subtitle">Đánh giá thực tế từ du học sinh Việt Nam tại Australia</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <div className="tag active">Tất cả</div><div className="tag">🏙️ Sydney</div><div className="tag">☕ Melbourne</div><div className="tag">🌴 Brisbane</div><div className="tag">🍷 Adelaide</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {REVIEWS.map((r, i) => (
                    <div className="card card-padded" key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                            <div><div style={{ fontWeight: 600, fontSize: 16, color: 'var(--N900)' }}>🇦🇺 {r.school}</div><div style={{ fontSize: 13, color: 'var(--N500)' }}>Review bởi {r.user} · {r.year} · {r.city}</div></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--orange)' }}><Star size={16} fill="var(--orange)" /><span style={{ fontWeight: 600 }}>{r.rating}/5</span></div>
                        </div>
                        <p style={{ fontSize: 14, color: 'var(--N700)', lineHeight: 1.7, marginBottom: 12 }}>{r.text}</p>
                        <div className="grid grid-2" style={{ gap: 12, marginBottom: 12 }}>
                            <div style={{ padding: 10, background: 'var(--green-bg)', borderRadius: 8, fontSize: 13 }}><span style={{ fontWeight: 600, color: 'var(--green)' }}>👍 Ưu điểm:</span> {r.pros}</div>
                            <div style={{ padding: 10, background: 'var(--orange-bg)', borderRadius: 8, fontSize: 13 }}><span style={{ fontWeight: 600, color: 'var(--orange)' }}>⚠️ Lưu ý:</span> {r.cons}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--N400)' }}><ThumbsUp size={14} />{r.likes} người thấy hữu ích</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
