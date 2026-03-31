import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Calendar, MessageCircle, Video, ChevronDown, ChevronUp } from 'lucide-react'
import { CONSULTANTS, getConsultantServices } from '../../data/consultantData'
import BookingModal from '../../components/BookingModal'

export default function ConsultantList() {
    const [expanded, setExpanded] = useState({})
    const [bookingOpen, setBookingOpen] = useState(false)
    const [bookingConsultant, setBookingConsultant] = useState(null)

    const toggleExpand = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

    const openBooking = (consultant) => {
        setBookingConsultant(consultant)
        setBookingOpen(true)
    }

    return (
        <div>
            <div className="page-header"><h1 className="h1">🧑‍🏫 Tư vấn viên tại Úc</h1><p className="page-subtitle">Kết nối với cựu du học sinh Việt Nam đang sống và làm việc tại Úc</p></div>
            <div style={{ padding: '12px 16px', background: 'var(--B50)', borderRadius: 12, marginBottom: 12, fontSize: 13, color: 'var(--B500)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Video size={16} />
                <span>Tất cả buổi tư vấn đều diễn ra <strong>online</strong> qua Zoom / Google Meet — linh hoạt theo timezone của bạn</span>
            </div>
            <div style={{ padding: '10px 16px', background: 'var(--purple-bg)', borderRadius: 12, marginBottom: 20, fontSize: 13, color: 'var(--purple)', display: 'flex', alignItems: 'center', gap: 8 }}>
                💡 <span>Muốn tìm theo dịch vụ? → <Link to="/services" style={{ fontWeight: 600, color: 'var(--B500)', textDecoration: 'underline' }}>Xem Catalog Dịch vụ</Link></span>
            </div>
            <div className="grid grid-2">
                {CONSULTANTS.map(c => {
                    const services = getConsultantServices(c)
                    const isExpanded = expanded[c.id]
                    const displayServices = isExpanded ? services : services.slice(0, 3)
                    return (
                        <div className="card consultant-card card-lift" key={c.id}>
                            <div className="consultant-header">
                                <Link to={`/consultants/${c.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="consultant-avatar" style={{ background: c.color }}>{c.name[0]}</div>
                                </Link>
                                <div>
                                    <Link to={`/consultants/${c.id}`} style={{ textDecoration: 'none' }}><div className="consultant-name">{c.name}</div></Link>
                                    <div className="consultant-school">{c.school}</div>
                                    <div style={{ fontSize: 12, color: 'var(--N500)' }}>{c.role}</div>
                                    <div className="consultant-rating"><Star size={14} />{c.rating} ({c.sessions} sessions)</div>
                                </div>
                            </div>
                            <div className="consultant-tags">{c.tags.map(t => <span className="tag" key={t} style={{ fontSize: 12, padding: '2px 8px' }}>{t}</span>)}</div>
                            <div className="consultant-services">
                                {displayServices.map(s => (
                                    <div className="consultant-service" key={s.id} style={{ flexDirection: 'column', alignItems: 'stretch', gap: 4 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: 13 }}>{s.icon} {s.name} ({s.duration})</span>
                                            <span className="consultant-price">{s.priceLabel} VND</span>
                                        </div>
                                        <div style={{ fontSize: 12, color: 'var(--N400)', lineHeight: 1.5 }}>{s.desc}</div>
                                    </div>
                                ))}
                            </div>
                            {services.length > 3 && (
                                <button onClick={() => toggleExpand(c.id)} className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center', fontSize: 12, color: 'var(--B500)', marginTop: 4 }}>
                                    {isExpanded ? <><ChevronUp size={14} />Ẩn bớt</> : <><ChevronDown size={14} />Xem thêm {services.length - 3} dịch vụ</>}
                                </button>
                            )}
                            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                                <button className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }} onClick={() => openBooking(c)}><Calendar size={14} />Đặt lịch</button>
                                <Link to={`/consultants/${c.id}`} className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center', textDecoration: 'none' }}>Xem profile →</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} consultant={bookingConsultant} />
        </div>
    )
}
