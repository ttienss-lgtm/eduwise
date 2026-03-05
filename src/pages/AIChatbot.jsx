import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Sparkles } from 'lucide-react'

const RESPONSES = {
    'ielts': { text: 'Để du học, bạn cần IELTS tối thiểu:\n• Úc/Canada: 6.0-6.5\n• Anh: 6.5-7.0\n• Mỹ: thường dùng TOEFL 80+\n• Nhật/Hàn: có thể dùng JLPT/TOPIK thay thế\n\nNên đăng ký thi sớm, luyện 3-6 tháng. Bạn muốn tôi gợi ý lộ trình luyện IELTS không?' },
    'chi phí': { text: 'Chi phí du học trung bình/năm:\n\n🇩🇪 Đức: MIỄN PHÍ + €10K sinh hoạt\n🇯🇵 Nhật: ¥800K-1.5M + ¥1.2M sinh hoạt\n🇰🇷 Hàn: ₩4-10M + ₩7-12M sinh hoạt\n🇨🇦 Canada: CAD 15-35K + CAD 12-24K sinh hoạt\n🇦🇺 Úc: AUD 20-45K + AUD 18-30K sinh hoạt\n🇬🇧 Anh: £12-38K + £10-18K sinh hoạt\n🇺🇸 Mỹ: $20-60K + $12-30K sinh hoạt\n\nBạn có budget bao nhiêu? Tôi sẽ gợi ý quốc gia phù hợp!' },
    'học bổng': { text: 'Các học bổng phổ biến:\n\n🇯🇵 MEXT: Full (học phí + sinh hoạt ¥143K/tháng)\n🇰🇷 GKS/KGSP: Full (học phí + ₩900K/tháng)\n🇩🇪 DAAD: Partial (€934/tháng)\n🇦🇺 Australia Awards: Full\n🇬🇧 Chevening: Full\n🇺🇸 Fulbright: Full\n🇨🇦 Vanier: $50K/năm (PhD)\n\nDeadline thường sớm hơn admission 6-12 tháng. Bạn muốn tìm hiểu học bổng nào?' },
    'pr': { text: 'Con đường PR (thường trú) sau du học:\n\n🇨🇦 Canada: Dễ nhất! PGWP → 1 năm WE → CRS PR\n🇦🇺 Úc: PSW 2-4 năm → PR qua skilled migration\n🇩🇪 Đức: 18 tháng tìm việc → Blue Card\n🇯🇵 Nhật: Đổi visa work → nhưng cần tiếng Nhật tốt\n🇰🇷 Hàn: D-10 → E-7 (khó hơn)\n🇬🇧 Anh: Graduate visa 2 năm → Skilled Worker\n🇺🇸 Mỹ: OPT → H1B lottery (khó nhất)\n\nNếu PR là ưu tiên, nên chọn Canada hoặc Úc!' },
    default: { text: 'Cảm ơn câu hỏi! Tôi có thể giúp bạn về:\n\n• 📚 Yêu cầu ngôn ngữ (IELTS, TOEFL)\n• 💰 Chi phí du học từng nước\n• 🎓 Học bổng phổ biến\n• 🛂 Con đường PR/định cư\n• 📋 Hồ sơ cần chuẩn bị\n• 🏫 Chọn trường phù hợp\n\nHãy hỏi tôi bất cứ điều gì về du học nhé!' },
}

const QUICK = ['IELTS cần bao nhiêu?', 'Chi phí du học bao nhiêu?', 'Học bổng nào phổ biến?', 'Nước nào dễ PR nhất?']

export default function AIChatbot() {
    const [msgs, setMsgs] = useState([{ role: 'bot', text: 'Xin chào! 👋 Tôi là EduWise AI — trợ lý tư vấn du học. Hãy hỏi tôi bất cứ điều gì về du học nhé!' }])
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
            <div className="page-header"><h1 className="h1">🤖 AI Tư vấn Du học</h1><p className="page-subtitle">Hỏi đáp nhanh với EduWise AI</p></div>
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
                        <input className="input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send(input)} placeholder="Hỏi về du học..." />
                        <button className="btn btn-primary" onClick={() => send(input)}><Send size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
