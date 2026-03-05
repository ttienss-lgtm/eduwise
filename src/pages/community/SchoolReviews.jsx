import { Star, ThumbsUp } from 'lucide-react'

const REVIEWS = [
    { school: 'University of Melbourne', country: '🇦🇺', user: 'Phạm Thu Hà', year: '2024', rating: 5, pros: 'Campus đẹp, support tốt, ngành Business mạnh', cons: 'Học phí cao, Melbourne lạnh', text: 'Mình rất hài lòng với UoM. Giáo viên chuyên nghiệp, facilities hiện đại. Support cho international students rất tốt.', likes: 45 },
    { school: 'University of Toronto', country: '🇨🇦', user: 'Nguyễn Minh', year: '2023', rating: 5, pros: 'Research mạnh, multicultural, cơ hội PR', cons: 'Mùa đông rất lạnh, competitive', text: 'UofT là trường top, đòi hỏi cao nhưng đáng giá. Toronto đa dạng văn hóa, dễ hòa nhập.', likes: 67 },
    { school: 'Waseda University', country: '🇯🇵', user: 'Lê Đức', year: '2024', rating: 4, pros: 'Học bổng MEXT tốt, Tokyo thú vị', cons: 'Cần biết tiếng Nhật, culture shock', text: 'Chương trình English track tốt. Nhưng nên học N3 tiếng Nhật để sinh hoạt dễ hơn.', likes: 89 },
    { school: 'RMIT University', country: '🇦🇺', user: 'Trần Anh', year: '2024', rating: 4, pros: 'Design mạnh, campus ở center Melbourne', cons: 'Ranking không cao bằng Go8', text: 'RMIT phù hợp cho ai thích design/IT. Vị trí trung tâm rất tiện. Cơ hội part-time nhiều.', likes: 34 },
    { school: 'TU München', country: '🇩🇪', user: 'Trần Linh', year: '2023', rating: 5, pros: 'MIỄN PHÍ, chất lượng top engineering', cons: 'Cần B2 Đức, bureaucracy chậm', text: 'Không tốn học phí là lợi thế quá lớn. Munich an toàn, giao thông tốt. Nên chuẩn bị blocked account €11K.', likes: 112 },
]

export default function SchoolReviews() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">⭐ School Reviews</h1><p className="page-subtitle">Đánh giá thực tế từ du học sinh Việt Nam</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <div className="tag active">Tất cả</div><div className="tag">🇦🇺 Úc</div><div className="tag">🇨🇦 Canada</div><div className="tag">🇯🇵 Nhật</div><div className="tag">🇩🇪 Đức</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {REVIEWS.map((r, i) => (
                    <div className="card card-padded" key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                            <div><div style={{ fontWeight: 600, fontSize: 16, color: 'var(--N900)' }}>{r.country} {r.school}</div><div style={{ fontSize: 13, color: 'var(--N500)' }}>Review bởi {r.user} · {r.year}</div></div>
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
