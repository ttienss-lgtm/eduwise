import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Video, ArrowRight, ChevronDown, ChevronUp, Star, CheckCircle2, FileInput, FileOutput, Calendar } from 'lucide-react'
import { ALL_SERVICES, SERVICE_CATEGORIES, getConsultantsForService } from '../../data/consultantData'
import BookingModal from '../../components/BookingModal'

export default function ServiceCatalog() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [expandedService, setExpandedService] = useState(null)
    const [bookingOpen, setBookingOpen] = useState(false)
    const [selectedService, setSelectedService] = useState(null)

    const filtered = activeCategory === 'all' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.category === activeCategory)

    const handleBook = (service) => {
        setSelectedService(service)
        setBookingOpen(true)
    }

    return (
        <div>
            <div className="page-header">
                <h1 className="h1">🎯 Dịch vụ Tư vấn Du học Úc</h1>
                <p className="page-subtitle">10 dịch vụ chuyên biệt — chọn dịch vụ phù hợp, chúng tôi match mentor cho bạn</p>
            </div>

            {/* Online banner */}
            <div style={{ padding: '12px 16px', background: 'var(--B50)', borderRadius: 12, marginBottom: 20, fontSize: 13, color: 'var(--B500)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Video size={16} />
                <span>Tất cả buổi tư vấn đều diễn ra <strong>online</strong> qua Zoom / Google Meet — linh hoạt theo timezone của bạn</span>
            </div>

            {/* How it works */}
            <div className="card card-padded" style={{ marginBottom: 24, background: 'linear-gradient(135deg, var(--N50), var(--B50))' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: 'var(--N800)', marginBottom: 12 }}>Quy trình 3 bước</h3>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    {[
                        { n: '1', icon: '🎯', title: 'Chọn dịch vụ', desc: 'Xem input/output, chọn dịch vụ cần' },
                        { n: '2', icon: '🧑‍🏫', title: 'Chọn mentor', desc: 'Hệ thống match mentor phù hợp' },
                        { n: '3', icon: '📅', title: 'Book & tư vấn', desc: 'Chọn slot, confirm, nhận link Zoom' },
                    ].map(s => (
                        <div key={s.n} style={{ flex: '1 1 160px', display: 'flex', gap: 10, alignItems: 'start' }}>
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--B500)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{s.n}</div>
                            <div><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--N800)' }}>{s.icon} {s.title}</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>{s.desc}</div></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                <div className={`tag${activeCategory === 'all' ? ' active' : ''}`} onClick={() => setActiveCategory('all')} style={{ cursor: 'pointer', fontSize: 13, padding: '6px 14px' }}>
                    Tất cả ({ALL_SERVICES.length})
                </div>
                {SERVICE_CATEGORIES.map(cat => {
                    const count = ALL_SERVICES.filter(s => s.category === cat.key).length
                    return (
                        <div key={cat.key} className={`tag${activeCategory === cat.key ? ' active' : ''}`} onClick={() => setActiveCategory(cat.key)} style={{ cursor: 'pointer', fontSize: 13, padding: '6px 14px' }}>
                            {cat.label} ({count})
                        </div>
                    )
                })}
            </div>

            {/* Service cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {filtered.map(service => {
                    const mentors = getConsultantsForService(service.id)
                    const cat = SERVICE_CATEGORIES.find(c => c.key === service.category)
                    const isExpanded = expandedService === service.id

                    return (
                        <div className="card" key={service.id} style={{ overflow: 'hidden' }}>
                            {/* Card header */}
                            <div style={{ padding: '20px 24px', cursor: 'pointer' }} onClick={() => setExpandedService(isExpanded ? null : service.id)}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                                    <div style={{ display: 'flex', gap: 12, alignItems: 'start', flex: 1 }}>
                                        <div style={{ width: 48, height: 48, borderRadius: 14, background: cat?.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{service.icon}</div>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                                                <h3 style={{ fontWeight: 700, fontSize: 17, color: 'var(--N900)' }}>{service.name}</h3>
                                                <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: 11, fontWeight: 600, background: cat?.bg, color: cat?.color }}>{cat?.label}</span>
                                            </div>
                                            <p style={{ fontSize: 14, color: 'var(--N600)', fontStyle: 'italic', marginBottom: 6 }}>{service.tagline}</p>
                                            <p style={{ fontSize: 13, color: 'var(--N500)', lineHeight: 1.6 }}>{service.desc}</p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 16 }}>
                                        <div style={{ fontWeight: 800, fontSize: 22, color: 'var(--B500)' }}>{service.priceLabel}</div>
                                        <div style={{ fontSize: 12, color: 'var(--N400)' }}>VND</div>
                                        <div style={{ fontSize: 12, color: 'var(--N400)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}><Clock size={12} />{service.duration}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ display: 'flex' }}>
                                            {mentors.slice(0, 4).map((m, i) => (
                                                <div key={m.id} style={{ width: 28, height: 28, borderRadius: '50%', background: m.color, color: 'white', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', marginLeft: i > 0 ? -8 : 0, zIndex: 4 - i }}>{m.name[0]}</div>
                                            ))}
                                        </div>
                                        <span style={{ fontSize: 12, color: 'var(--N500)' }}>{mentors.length} mentor có thể tư vấn</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--B500)', fontWeight: 600 }}>
                                        {isExpanded ? <>Thu gọn <ChevronUp size={16} /></> : <>Xem chi tiết <ChevronDown size={16} /></>}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded: Input/Output + Mentors */}
                            {isExpanded && (
                                <div style={{ borderTop: '1px solid var(--N100)', background: 'var(--N50)' }}>
                                    <div style={{ padding: '20px 24px' }}>
                                        <div className="grid grid-2" style={{ gap: 20, marginBottom: 20 }}>
                                            {/* Input */}
                                            <div style={{ padding: 16, background: 'white', borderRadius: 14, border: '1px solid var(--N200)' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                                                    <FileInput size={16} style={{ color: 'var(--orange)' }} />
                                                    <h4 style={{ fontWeight: 700, fontSize: 14, color: 'var(--N800)' }}>📥 Bạn cần chuẩn bị (Input)</h4>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                                    {service.inputs.map((inp, i) => (
                                                        <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--N600)', lineHeight: 1.5 }}>
                                                            <span style={{ color: 'var(--orange)', fontWeight: 600, flexShrink: 0 }}>•</span>
                                                            <span>{inp}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Output */}
                                            <div style={{ padding: 16, background: 'white', borderRadius: 14, border: '1px solid var(--N200)' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                                                    <FileOutput size={16} style={{ color: 'var(--green)' }} />
                                                    <h4 style={{ fontWeight: 700, fontSize: 14, color: 'var(--N800)' }}>📤 Bạn sẽ nhận được (Output)</h4>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                                    {service.outputs.map((out, i) => (
                                                        <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--N600)', lineHeight: 1.5 }}>
                                                            <CheckCircle2 size={14} style={{ color: 'var(--green)', flexShrink: 0, marginTop: 2 }} />
                                                            <span>{out}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Matched mentors */}
                                        <div style={{ marginBottom: 16 }}>
                                            <h4 style={{ fontWeight: 700, fontSize: 14, color: 'var(--N800)', marginBottom: 12 }}>🧑‍🏫 Mentor phù hợp với dịch vụ này</h4>
                                            <div className="grid grid-2" style={{ gap: 12 }}>
                                                {mentors.map(m => (
                                                    <div key={m.id} style={{ padding: 14, background: 'white', borderRadius: 12, border: '1px solid var(--N200)', display: 'flex', gap: 12, alignItems: 'center' }}>
                                                        <Link to={`/consultants/${m.id}`} style={{ textDecoration: 'none' }}>
                                                            <div style={{ width: 44, height: 44, borderRadius: 12, background: m.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{m.name[0]}</div>
                                                        </Link>
                                                        <div style={{ flex: 1, minWidth: 0 }}>
                                                            <Link to={`/consultants/${m.id}`} style={{ textDecoration: 'none' }}><div style={{ fontWeight: 600, fontSize: 14, color: 'var(--N900)' }}>{m.name}</div></Link>
                                                            <div style={{ fontSize: 12, color: 'var(--N500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.role}</div>
                                                            <div style={{ fontSize: 12, color: 'var(--orange)', marginTop: 2 }}>⭐ {m.rating} · {m.sessions} sessions</div>
                                                        </div>
                                                        <button className="btn btn-primary btn-sm" style={{ flexShrink: 0, fontSize: 12 }} onClick={(e) => { e.stopPropagation(); setSelectedService(service); setBookingOpen(true) }}>
                                                            <Calendar size={12} />Chọn
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px 0' }} onClick={() => handleBook(service)}>
                                            <Calendar size={16} />Đặt lịch dịch vụ {service.name} · {service.priceLabel} VND
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} preSelectedService={selectedService} />
        </div>
    )
}
