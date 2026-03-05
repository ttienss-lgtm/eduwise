import { useParams, Link } from 'react-router-dom'
import { Star, Calendar, MessageCircle, ArrowLeft, CheckCircle2, Clock, Video } from 'lucide-react'
import { useState } from 'react'

const DATA = {
    'khoi': {
        name: 'Trần Minh Khôi', school: 'MBA - University of Melbourne', role: 'Product Manager @ Google VN', rating: 4.9, sessions: 230,
        bio: 'Tốt nghiệp MBA tại UoM năm 2020. Hiện tại là PM tại Google Vietnam. Đã tư vấn cho 230+ học sinh thành công du học Úc.',
        expertise: ['Australia', 'Business', 'MBA', 'PR pathway', 'Scholarship'],
        color: 'linear-gradient(135deg,var(--B500),var(--purple))',
        services: [{ name: '☕ Coffee Chat', dur: '30 phút', price: '200K VND', desc: 'Trao đổi nhanh về du học Úc, ngành Business' }, { name: '📋 Profile Review', dur: '60 phút', price: '500K VND', desc: 'Đánh giá hồ sơ, góp ý SOP/CV chi tiết' }, { name: '🎯 Full Mentoring', dur: '4 tuần', price: '2M VND', desc: 'Theo dõi sát, hỗ trợ từ A-Z: chọn trường → apply → visa' }],
        availability: ['T2 09:00-12:00', 'T4 14:00-17:00', 'T6 09:00-11:00', 'T7 10:00-12:00'],
        reviews: [{ user: 'Nguyễn A', rating: 5, text: 'Anh Khôi tư vấn rất tận tình, giúp em chọn đúng trường và apply thành công UoM!' }, { user: 'Trần B', rating: 5, text: 'Full mentoring rất đáng tiền, anh review SOP 3 lần!' }, { user: 'Lê C', rating: 4, text: 'Coffee chat hữu ích, biết được nhiều tips PR Australia.' }]
    },
}

export default function ConsultantProfile() {
    const { id } = useParams()
    const c = DATA[id] || DATA['khoi']
    const [selectedService, setSelectedService] = useState(null)
    const [booked, setBooked] = useState(false)

    return (
        <div>
            <Link to="/consultants" className="btn btn-ghost btn-sm" style={{ marginBottom: 16 }}><ArrowLeft size={16} />Quay lại</Link>
            <div className="grid grid-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
                <div>
                    <div className="card card-padded" style={{ textAlign: 'center', marginBottom: 16 }}>
                        <div style={{ width: 80, height: 80, borderRadius: 20, background: c.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, margin: '0 auto 12px' }}>{c.name[0]}</div>
                        <h2 className="h2">{c.name}</h2>
                        <p style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{c.school}</p>
                        <p style={{ fontSize: 13, color: 'var(--N500)' }}>{c.role}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 8 }}><Star size={16} style={{ color: 'var(--orange)' }} /><span style={{ fontWeight: 600 }}>{c.rating}</span><span style={{ color: 'var(--N400)' }}>({c.sessions} sessions)</span></div>
                    </div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}><h3 className="h3" style={{ marginBottom: 8 }}>📅 Lịch rảnh</h3>
                        {c.availability.map(a => <div key={a} style={{ padding: '6px 0', fontSize: 13, color: 'var(--N600)', display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14} />{a}</div>)}
                    </div>
                    <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 8 }}>🏷️ Chuyên môn</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{c.expertise.map(e => <span className="tag" key={e} style={{ fontSize: 12, padding: '2px 8px' }}>{e}</span>)}</div>
                    </div>
                </div>
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}><h3 className="h3" style={{ marginBottom: 8 }}>Về tôi</h3><p className="body">{c.bio}</p></div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <h3 className="h3" style={{ marginBottom: 12 }}>💼 Gói tư vấn</h3>
                        {c.services.map((s, i) => (
                            <div key={i} onClick={() => setSelectedService(i)} style={{ padding: 16, border: `2px solid ${selectedService === i ? 'var(--B500)' : 'var(--N200)'}`, borderRadius: 12, marginBottom: 8, cursor: 'pointer', background: selectedService === i ? 'var(--B50)' : 'white', transition: 'all 0.15s' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontWeight: 600 }}>{s.name}</span><span style={{ fontWeight: 700, color: 'var(--B500)' }}>{s.price}</span></div>
                                <p style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{s.desc} · {s.dur}</p>
                            </div>
                        ))}
                        {booked ? <div style={{ padding: 16, background: 'var(--green-bg)', borderRadius: 12, fontSize: 14, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 8 }}><CheckCircle2 size={18} />Đã đặt lịch thành công! Bạn sẽ nhận email xác nhận.</div> :
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} disabled={selectedService === null} onClick={() => setBooked(true)}><Video size={16} />Đặt lịch ngay</button>}
                    </div>
                    <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 12 }}>⭐ Reviews</h3>
                        {c.reviews.map((r, i) => <div key={i} style={{ padding: '12px 0', borderBottom: i < c.reviews.length - 1 ? '1px solid var(--N100)' : 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontWeight: 600, fontSize: 14 }}>{r.user}</span><span style={{ color: 'var(--orange)' }}>{'⭐'.repeat(r.rating)}</span></div>
                            <p style={{ fontSize: 14, color: 'var(--N600)' }}>{r.text}</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
