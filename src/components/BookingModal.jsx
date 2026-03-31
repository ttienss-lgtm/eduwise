import { useState, useEffect } from 'react'
import { X, ChevronRight, CheckCircle2, Video, Clock, Calendar, MessageSquare } from 'lucide-react'
import { getConsultantServices, getConsultantsForService, formatPrice, ALL_SERVICES } from '../data/consultantData'

const STEPS = ['Chọn dịch vụ', 'Chọn mentor', 'Chọn thời gian', 'Xác nhận']

export default function BookingModal({ isOpen, onClose, consultant = null, preSelectedService = null }) {
    const [step, setStep] = useState(0)
    const [selectedService, setSelectedService] = useState(null)
    const [selectedConsultant, setSelectedConsultant] = useState(null)
    const [selectedSlot, setSelectedSlot] = useState(null)
    const [note, setNote] = useState('')
    const [booked, setBooked] = useState(false)

    // Sync state when modal opens with new props
    useEffect(() => {
        if (isOpen) {
            setSelectedService(preSelectedService)
            setSelectedConsultant(consultant)
            setSelectedSlot(null)
            setNote('')
            setBooked(false)
            if (preSelectedService && consultant) setStep(2)
            else if (preSelectedService) setStep(1)
            else if (consultant) setStep(0)
            else setStep(0)
        }
    }, [isOpen, preSelectedService, consultant])

    if (!isOpen) return null

    const availableServices = consultant ? getConsultantServices(consultant) : null
    const availableConsultants = selectedService ? getConsultantsForService(selectedService.id) : []

    const handleBook = () => {
        setBooked(true)
        setTimeout(() => { onClose() }, 3000)
    }

    const canNext = () => {
        if (step === 0) return !!selectedService
        if (step === 1) return !!selectedConsultant
        if (step === 2) return !!selectedSlot
        return true
    }

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={onClose} />
            <div style={{ position: 'relative', background: 'white', borderRadius: 20, width: '100%', maxWidth: 560, maxHeight: '90vh', overflow: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }}>
                {/* Header */}
                <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--N100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontWeight: 700, fontSize: 18, color: 'var(--N900)' }}>📅 Đặt lịch tư vấn</h3>
                        <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
                            {STEPS.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                    <div style={{ width: 24, height: 24, borderRadius: '50%', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', background: i <= step ? 'var(--B500)' : 'var(--N200)', color: i <= step ? 'white' : 'var(--N500)', transition: 'all 0.2s' }}>{i + 1}</div>
                                    <span style={{ fontSize: 12, color: i <= step ? 'var(--B500)' : 'var(--N400)', fontWeight: i === step ? 600 : 400, display: i === step ? 'block' : 'none' }}>{s}</span>
                                    {i < 3 && <ChevronRight size={12} style={{ color: 'var(--N300)' }} />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><X size={20} style={{ color: 'var(--N400)' }} /></button>
                </div>

                {/* Body */}
                <div style={{ padding: 24, minHeight: 300 }}>
                    {booked ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--green-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}><CheckCircle2 size={32} style={{ color: 'var(--green)' }} /></div>
                            <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--N900)', marginBottom: 8 }}>Đặt lịch thành công! 🎉</h3>
                            <p style={{ color: 'var(--N500)', fontSize: 14 }}>Link Zoom sẽ được gửi qua email trước buổi tư vấn 30 phút.</p>
                        </div>
                    ) : step === 0 ? (
                        /* Step 1: Choose Service */
                        <div>
                            <p style={{ fontSize: 14, color: 'var(--N500)', marginBottom: 16 }}>Chọn dịch vụ bạn cần:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {(availableServices || []).concat(availableServices ? [] : []).map(s => (
                                    <div key={s.id} onClick={() => setSelectedService(s)} style={{ padding: 16, border: `2px solid ${selectedService?.id === s.id ? 'var(--B500)' : 'var(--N200)'}`, borderRadius: 12, cursor: 'pointer', background: selectedService?.id === s.id ? 'var(--B50)' : 'white', transition: 'all 0.15s' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontWeight: 600, fontSize: 14 }}>{s.icon} {s.name}</span>
                                            <span style={{ fontWeight: 700, color: 'var(--B500)', fontSize: 14 }}>{s.priceLabel} VND</span>
                                        </div>
                                        <div style={{ fontSize: 13, color: 'var(--N500)', marginTop: 4 }}>{s.desc}</div>
                                        <div style={{ fontSize: 12, color: 'var(--N400)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} />{s.duration}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : step === 1 ? (
                        /* Step 2: Choose Consultant */
                        <div>
                            <div style={{ padding: '10px 14px', background: 'var(--B50)', borderRadius: 10, marginBottom: 16, fontSize: 13, color: 'var(--B500)' }}>
                                Dịch vụ: <strong>{selectedService?.icon} {selectedService?.name}</strong> · {selectedService?.priceLabel} VND
                            </div>
                            <p style={{ fontSize: 14, color: 'var(--N500)', marginBottom: 16 }}>Chọn mentor phù hợp ({availableConsultants.length} mentor có thể tư vấn):</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {availableConsultants.map(c => (
                                    <div key={c.id} onClick={() => setSelectedConsultant(c)} style={{ padding: 16, border: `2px solid ${selectedConsultant?.id === c.id ? 'var(--B500)' : 'var(--N200)'}`, borderRadius: 12, cursor: 'pointer', background: selectedConsultant?.id === c.id ? 'var(--B50)' : 'white', transition: 'all 0.15s', display: 'flex', gap: 12, alignItems: 'center' }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: c.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{c.name[0]}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--N900)' }}>{c.name}</div>
                                            <div style={{ fontSize: 12, color: 'var(--N500)' }}>{c.school}</div>
                                            <div style={{ fontSize: 12, color: 'var(--N500)' }}>{c.role}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--orange)' }}>⭐ {c.rating}</div>
                                            <div style={{ fontSize: 11, color: 'var(--N400)' }}>{c.sessions} sessions</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : step === 2 ? (
                        /* Step 3: Choose Time */
                        <div>
                            <div style={{ padding: '10px 14px', background: 'var(--B50)', borderRadius: 10, marginBottom: 16, fontSize: 13, color: 'var(--B500)' }}>
                                {selectedService?.icon} {selectedService?.name} · với <strong>{selectedConsultant?.name}</strong>
                            </div>
                            <p style={{ fontSize: 14, color: 'var(--N500)', marginBottom: 16 }}>Chọn khung giờ phù hợp (timezone Việt Nam):</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {selectedConsultant?.availability?.map(slot => (
                                    <div key={slot.day}>
                                        <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--N700)', marginBottom: 8 }}><Calendar size={14} style={{ verticalAlign: -2 }} /> {slot.day}</div>
                                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                            {slot.slots.map(time => {
                                                const slotKey = `${slot.day}-${time}`
                                                return (
                                                    <button key={time} onClick={() => setSelectedSlot(slotKey)} style={{ padding: '8px 16px', borderRadius: 8, border: `2px solid ${selectedSlot === slotKey ? 'var(--B500)' : 'var(--N200)'}`, background: selectedSlot === slotKey ? 'var(--B50)' : 'white', color: selectedSlot === slotKey ? 'var(--B500)' : 'var(--N600)', fontWeight: selectedSlot === slotKey ? 600 : 400, cursor: 'pointer', fontSize: 13, transition: 'all 0.15s' }}>{time}</button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Step 4: Confirm */
                        <div>
                            <div style={{ padding: 20, background: 'var(--N50)', borderRadius: 14, marginBottom: 16 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: selectedConsultant?.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>{selectedConsultant?.name?.[0]}</div>
                                        <div><div style={{ fontWeight: 600, fontSize: 15 }}>{selectedConsultant?.name}</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>{selectedConsultant?.school}</div></div>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--N200)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Dịch vụ</span><span style={{ fontWeight: 600 }}>{selectedService?.icon} {selectedService?.name}</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Thời lượng</span><span>{selectedService?.duration}</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Thời gian</span><span style={{ fontWeight: 600 }}>{selectedSlot?.replace('-', ' lúc ')}</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--N500)' }}>Hình thức</span><span><Video size={14} style={{ verticalAlign: -2 }} /> Online (Zoom)</span></div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--N200)', paddingTop: 8 }}><span style={{ fontWeight: 600 }}>Tổng cộng</span><span style={{ fontWeight: 700, color: 'var(--B500)', fontSize: 16 }}>{selectedService?.priceLabel} VND</span></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: 16 }}>
                                <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--N700)', marginBottom: 6, display: 'block' }}><MessageSquare size={14} style={{ verticalAlign: -2 }} /> Ghi chú cho mentor (tùy chọn)</label>
                                <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="VD: Em muốn hỏi về ngành IT tại UNSW, và cơ hội PR sau khi tốt nghiệp..." style={{ width: '100%', minHeight: 80, padding: 12, border: '1px solid var(--N200)', borderRadius: 10, fontSize: 14, resize: 'vertical', fontFamily: 'inherit' }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!booked && (
                    <div style={{ padding: '16px 24px 20px', borderTop: '1px solid var(--N100)', display: 'flex', gap: 8, justifyContent: 'space-between' }}>
                        {step > 0 ? (
                            <button onClick={() => setStep(step - 1)} className="btn btn-outline btn-sm">← Quay lại</button>
                        ) : <div />}
                        {step < 3 ? (
                            <button onClick={() => setStep(step + 1)} className="btn btn-primary btn-sm" disabled={!canNext()} style={{ opacity: canNext() ? 1 : 0.5 }}>Tiếp tục →</button>
                        ) : (
                            <button onClick={handleBook} className="btn btn-primary btn-sm" style={{ background: 'var(--green)' }}>✓ Xác nhận đặt lịch</button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
