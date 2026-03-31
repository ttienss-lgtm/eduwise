import { useParams, Link } from 'react-router-dom'
import { Star, Calendar, ArrowLeft, Clock, Video, CheckCircle2, Users } from 'lucide-react'
import { useState } from 'react'
import { CONSULTANTS, getConsultantServices, SERVICE_CATEGORIES } from '../../data/consultantData'
import BookingModal from '../../components/BookingModal'

export default function ConsultantProfile() {
    const { id } = useParams()
    const c = CONSULTANTS.find(con => con.id === id) || CONSULTANTS[0]
    const services = getConsultantServices(c)
    const [bookingOpen, setBookingOpen] = useState(false)
    const [preSelectedService, setPreSelectedService] = useState(null)

    const openBookingWithService = (service) => {
        setPreSelectedService(service)
        setBookingOpen(true)
    }

    // Group services by category
    const grouped = SERVICE_CATEGORIES.map(cat => ({
        ...cat,
        services: services.filter(s => s.category === cat.key)
    })).filter(g => g.services.length > 0)

    return (
        <div>
            <Link to="/consultants" className="btn btn-ghost btn-sm" style={{ marginBottom: 16 }}><ArrowLeft size={16} />Quay lại</Link>
            <div className="grid grid-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
                {/* Left sidebar */}
                <div>
                    <div className="card card-padded" style={{ textAlign: 'center', marginBottom: 16 }}>
                        <div style={{ width: 80, height: 80, borderRadius: 20, background: c.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, margin: '0 auto 12px' }}>{c.name[0]}</div>
                        <h2 className="h2">{c.name}</h2>
                        <p style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{c.school}</p>
                        <p style={{ fontSize: 13, color: 'var(--N500)' }}>{c.role}</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 8 }}><Star size={16} style={{ color: 'var(--orange)' }} /><span style={{ fontWeight: 600 }}>{c.rating}</span><span style={{ color: 'var(--N400)' }}>({c.sessions} sessions)</span></div>
                    </div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}><h3 className="h3" style={{ marginBottom: 8 }}>📅 Lịch rảnh</h3>
                        {c.availability.map(a => <div key={a.day} style={{ padding: '6px 0', fontSize: 13, color: 'var(--N600)', display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={14} />{a.day}: {a.slots.join(', ')}</div>)}
                    </div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}><h3 className="h3" style={{ marginBottom: 8 }}>🏷️ Chuyên môn</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{c.expertise.map(e => <span className="tag" key={e} style={{ fontSize: 12, padding: '2px 8px' }}>{e}</span>)}</div>
                    </div>
                    <div className="card card-padded" style={{ background: 'var(--B50)', border: '1px solid var(--B100)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}><Video size={16} style={{ color: 'var(--B500)' }} /><span style={{ fontWeight: 600, fontSize: 14, color: 'var(--B500)' }}>Online</span></div>
                        <p style={{ fontSize: 12, color: 'var(--N500)' }}>Tất cả buổi tư vấn diễn ra online qua Zoom/Google Meet</p>
                    </div>
                </div>

                {/* Main content */}
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}><h3 className="h3" style={{ marginBottom: 8 }}>Về tôi</h3><p className="body" style={{ lineHeight: 1.7 }}>{c.bio}</p></div>

                    {/* Services grouped by category */}
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                            <h3 className="h3">💼 Dịch vụ tư vấn ({services.length})</h3>
                            <Link to="/services" style={{ fontSize: 12, color: 'var(--B500)' }}>Xem tất cả dịch vụ →</Link>
                        </div>
                        {grouped.map(group => (
                            <div key={group.key} style={{ marginBottom: 16 }}>
                                <div style={{ fontSize: 13, fontWeight: 600, color: group.color, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span style={{ padding: '2px 8px', borderRadius: 6, background: group.bg }}>{group.label}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    {group.services.map(s => (
                                        <div key={s.id} onClick={() => openBookingWithService(s)} style={{ padding: 14, border: '1px solid var(--N200)', borderRadius: 12, cursor: 'pointer', transition: 'all 0.15s' }}
                                            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--B300)'; e.currentTarget.style.background = 'var(--B50)' }}
                                            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--N200)'; e.currentTarget.style.background = 'white' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                                <span style={{ fontWeight: 600, fontSize: 14 }}>{s.icon} {s.name}</span>
                                                <span style={{ fontWeight: 700, color: 'var(--B500)', fontSize: 14 }}>{s.priceLabel} VND</span>
                                            </div>
                                            <div style={{ fontSize: 13, color: 'var(--N500)', marginBottom: 4 }}>{s.desc}</div>
                                            <div style={{ fontSize: 12, color: 'var(--N400)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} />{s.duration}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} onClick={() => setBookingOpen(true)}>
                            <Calendar size={16} />Đặt lịch với {c.name}
                        </button>
                    </div>

                    {/* Reviews */}
                    <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 12 }}>⭐ Reviews</h3>
                        {c.reviews.map((r, i) => <div key={i} style={{ padding: '12px 0', borderBottom: i < c.reviews.length - 1 ? '1px solid var(--N100)' : 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontWeight: 600, fontSize: 14 }}>{r.user}</span><span style={{ color: 'var(--orange)' }}>{'⭐'.repeat(r.rating)}</span></div>
                            <p style={{ fontSize: 14, color: 'var(--N600)' }}>{r.text}</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <BookingModal isOpen={bookingOpen} onClose={() => { setBookingOpen(false); setPreSelectedService(null) }} consultant={c} preSelectedService={preSelectedService} />
        </div>
    )
}
