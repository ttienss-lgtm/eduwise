import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const RESPONSES = {
    'ielts': { text: 'Du học Úc yêu cầu IELTS tùy trường:\n• Group of Eight (UoM, UNSW, USyd...): IELTS 6.5-7.0\n• Trường khác (RMIT, UTS, Deakin...): IELTS 6.0-6.5\n• Foundation/Pathway: IELTS 5.0-5.5\n\nNgoài IELTS, Úc cũng chấp nhận PTE Academic (phổ biến hơn vì thi máy, ra kết quả nhanh 2-5 ngày).\n\nBạn muốn tôi gợi ý lộ trình luyện IELTS/PTE không?' },
    'chi phí': { text: 'Chi phí du học Úc trung bình/năm:\n\n📚 Học phí:\n• Group of Eight: AUD 38-52K/năm\n• Trường khác: AUD 28-40K/năm\n\n🏠 Sinh hoạt (tùy city):\n• Sydney: AUD 24-34K/năm\n• Melbourne: AUD 22-30K/năm\n• Brisbane/Perth: AUD 18-26K/năm\n• Adelaide: AUD 16-22K/năm\n\n💡 Tips tiết kiệm:\n• Part-time: kiếm AUD 23-28/giờ (48h/2 tuần)\n• Share phòng: tiết kiệm 30-40% rent\n• Nấu ăn nhà: tiết kiệm AUD 200+/tháng\n\nBạn có budget bao nhiêu? Tôi sẽ gợi ý trường và city phù hợp!' },
    'học bổng': { text: 'Học bổng du học Úc phổ biến:\n\n🏛️ Chính phủ:\n• Australia Awards: FULL (học phí + sinh hoạt + vé bay)\n• Destination Australia: AUD 15,000/năm (trường regional)\n\n🎓 Trường:\n• Melbourne International: 50-100% học phí\n• UNSW International: AUD 5-15K/năm\n• UQ International: 25-100% học phí\n• Monash Merit: AUD 10K/năm\n• RMIT: AUD 5-10K\n• Deakin: 20-25% học phí\n\n💡 Tips:\n• Apply sớm — nhiều trường xét rolling basis\n• GPA 7.5+ và IELTS 7.0+ tăng cơ hội\n• Trường regional (Adelaide, Perth) dễ hơn Sydney/Melbourne' },
    'pr': { text: 'PR pathway tại Úc — step by step:\n\n📋 Lộ trình phổ biến:\nHọc 2+ năm → Subclass 485 (2-4 năm work) → PR\n\n🛂 Các loại PR visa:\n• Subclass 189: Independent — không cần sponsor, 65+ điểm\n• Subclass 190: State Nominated — +5 điểm, cần state sponsor\n• Subclass 491: Regional — +15 điểm, sống regional 3 năm\n\n🎯 Ngành dễ PR nhất:\nIT, Engineering, Nursing, Accounting, Teaching, Social Work\n\n📍 State dễ nomination nhất:\nSouth Australia, Tasmania, ACT (Canberra)\n\n💡 Tips tối ưu điểm:\n• IELTS 8.0 hoặc PTE 79+: +20 điểm\n• Học Master: +5 điểm\n• Học ở regional: +5 điểm\n• Kinh nghiệm làm việc Úc 1 năm: +5 điểm' },
    'thành phố': { text: 'So sánh nhanh các thành phố du học Úc:\n\n🏙️ Sydney: Sôi động, nhiều việc, đắt đỏ nhất\n☕ Melbourne: Văn hóa, livable, cộng đồng VN lớn\n🌴 Brisbane: Nắng ấm, chi phí thấp, đang phát triển nhanh\n🏖️ Perth: Yên tĩnh, mining job, ít người VN\n🍷 Adelaide: Rẻ nhất, +5 điểm PR regional bonus\n🏛️ Canberra: An toàn, ANU top, ACT nomination dễ\n\nBạn ưu tiên gì? Chi phí thấp, cơ hội PR, hay sôi động?' },
    default: { text: 'Cảm ơn câu hỏi! Tôi là EduWise AI — chuyên tư vấn du học Úc 🇦🇺\n\nTôi có thể giúp bạn về:\n• 📚 Yêu cầu ngôn ngữ (IELTS, PTE)\n• 💰 Chi phí du học & sinh hoạt tại Úc\n• 🎓 Học bổng tại Úc\n• 🛂 PR pathway & Skilled Migration\n• 🏙️ So sánh thành phố (Sydney, Melbourne, Brisbane...)\n• 📋 Visa Subclass 500, 485\n• 🏫 Chọn trường phù hợp\n\nHãy hỏi tôi bất cứ điều gì về du học Úc nhé!' },
}

const QUICK = ['IELTS cần bao nhiêu?', 'Chi phí du học Úc?', 'Học bổng nào tốt?', 'PR pathway tại Úc?', 'Nên chọn thành phố nào?']

export default function AIChatbot() {
    const [msgs, setMsgs] = useState([{ role: 'bot', text: 'Xin chào! 👋 Tôi là EduWise AI — trợ lý tư vấn du học Úc 🇦🇺\n\nHãy hỏi tôi bất cứ điều gì về du học tại Australia nhé!' }])
    const [input, setInput] = useState('')
    const endRef = useRef(null)
    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

    const send = (text) => {
        if (!text.trim()) return
        const userMsg = { role: 'user', text: text.trim() }
        setMsgs(prev => [...prev, userMsg])
        setInput('')
        setTimeout(() => {
            const key = Object.keys(RESPONSES).find(k => text.toLowerCase().includes(k)) || 'default'
            setMsgs(prev => [...prev, { role: 'bot', text: RESPONSES[key].text }])
        }, 800)
    }

    return (
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="page-header"><h1 className="h1">🤖 AI Tư vấn Du học Úc</h1><p className="page-subtitle">Hỏi đáp nhanh với EduWise AI — chuyên gia du học Australia</p></div>
            <div className="card" style={{ height: 'calc(100vh - 260px)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {msgs.map((m, i) => (
                        <div key={i} style={{ display: 'flex', gap: 10, alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', flexDirection: m.role === 'user' ? 'row-reverse' : 'row' }}>
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: m.role === 'bot' ? 'linear-gradient(135deg,var(--B500),var(--purple))' : 'var(--N200)', color: m.role === 'bot' ? 'white' : 'var(--N600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                {m.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                            </div>
                            <div style={{ padding: '10px 16px', borderRadius: 12, background: m.role === 'user' ? 'var(--B500)' : 'var(--N50)', color: m.role === 'user' ? 'white' : 'var(--N800)', fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                                {m.text}
                            </div>
                        </div>
                    ))}
                    <div ref={endRef} />
                </div>
                <div style={{ padding: '12px 16px', borderTop: '1px solid var(--N200)' }}>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                        {QUICK.map(q => <button key={q} className="tag" style={{ fontSize: 12 }} onClick={() => send(q)}><Sparkles size={12} />{q}</button>)}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                        <input className="input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send(input)} placeholder="Hỏi về du học Úc..." />
                        <button className="btn btn-primary" onClick={() => send(input)}><Send size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
