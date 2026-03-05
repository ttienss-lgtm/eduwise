import { Link } from 'react-router-dom'
import { User, Brain, Compass, BookOpen, Languages, Heart, Wallet, Target, Shield, Lightbulb, GraduationCap, Home, CheckCircle2, Lock, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const TESTS = [
    { id: 'personal', icon: User, title: 'Thông tin cá nhân', desc: 'Tuổi, học vấn, mục tiêu cơ bản', time: '3 phút', color: 'var(--B500)', bg: 'var(--B50)' },
    { id: 'mbti', icon: Brain, title: 'Tính cách MBTI', desc: '40 câu hỏi — xác định 1 trong 16 kiểu tính cách', time: '10 phút', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { id: 'riasec', icon: Compass, title: 'Sở thích nghề RIASEC', desc: '30 câu — top 5 ngành phù hợp', time: '8 phút', color: 'var(--teal)', bg: 'var(--teal-bg)' },
    { id: 'academic', icon: BookOpen, title: 'Năng lực học tập', desc: 'GPA, thành tích, achievements', time: '5 phút', color: 'var(--green)', bg: 'var(--green-bg)' },
    { id: 'language', icon: Languages, title: 'Trình độ ngôn ngữ', desc: 'IELTS/TOEFL/JLPT hoặc mini-test', time: '5-15 phút', color: 'var(--orange)', bg: 'var(--orange-bg)' },
    { id: 'softskills', icon: Heart, title: 'Kỹ năng mềm', desc: '25 tình huống — giao tiếp, tự lập, lãnh đạo', time: '8 phút', color: 'var(--pink)', bg: 'var(--pink-bg)' },
    { id: 'financial', icon: Wallet, title: 'Năng lực tài chính', desc: '10 câu — xác định budget tier', time: '5 phút', color: 'var(--green)', bg: 'var(--green-bg)' },
    { id: 'lifegoals', icon: Target, title: 'Mục tiêu cuộc sống', desc: '20 câu — giá trị sống & ưu tiên', time: '8 phút', color: 'var(--B500)', bg: 'var(--B50)' },
    { id: 'adaptability', icon: Shield, title: 'Khả năng thích nghi', desc: '15 tình huống — readiness score', time: '6 phút', color: 'var(--red)', bg: 'var(--red-bg)' },
    { id: 'readiness', icon: CheckCircle2, title: 'Mức độ sẵn sàng', desc: '15 checklist — overall level', time: '5 phút', color: 'var(--teal)', bg: 'var(--teal-bg)' },
    { id: 'learnstyle', icon: Lightbulb, title: 'Phong cách học tập', desc: '20 câu — Visual/Auditory/Kinesthetic', time: '5 phút', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { id: 'family', icon: Home, title: 'Kỳ vọng gia đình', desc: '10 câu — alignment score', time: '5 phút', color: 'var(--orange)', bg: 'var(--orange-bg)' },
]

export default function AssessmentHub() {
    const [completed, setCompleted] = useState(() => {
        const saved = localStorage.getItem('eduwise_completed')
        return saved ? JSON.parse(saved) : []
    })
    const progress = Math.round((completed.length / TESTS.length) * 100)
    const available = TESTS.map(t => t.id)

    return (
        <div>
            <div className="page-header">
                <h1 className="h1">🧪 Assessment Center</h1>
                <p className="page-subtitle">Hoàn thành 12 bài test để hiểu bản thân toàn diện</p>
            </div>
            <div className="card card-padded" style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontWeight: 600, color: 'var(--N800)' }}>Tiến độ: {completed.length}/12 bài test</span>
                    <span className="badge badge-blue">{progress}%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
                <p style={{ fontSize: 13, color: 'var(--N400)', marginTop: 8 }}>🔓 Hoàn thành 8/12 để mở khóa kết quả 360° và AI Tư vấn</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {TESTS.map((t, i) => {
                    const done = completed.includes(t.id)
                    const unlocked = available.includes(t.id) || done
                    return (
                        <Link to={unlocked ? `/assessment/${t.id}` : '#'} key={t.id} style={{ textDecoration: 'none', opacity: unlocked ? 1 : 0.5, pointerEvents: unlocked ? 'auto' : 'none' }}>
                            <div className="card assess-card card-lift">
                                <div className="assess-icon" style={{ background: t.bg, color: t.color }}>
                                    {done ? <CheckCircle2 size={22} /> : unlocked ? <t.icon size={22} /> : <Lock size={22} />}
                                </div>
                                <div className="assess-info">
                                    <div className="assess-title">{t.title}</div>
                                    <div className="assess-desc">{t.desc}</div>
                                    <div className="assess-meta">
                                        <span className="badge" style={{ background: done ? 'var(--green-bg)' : 'var(--N100)', color: done ? 'var(--green)' : 'var(--N500)' }}>
                                            {done ? '✅ Hoàn thành' : unlocked ? `⏱ ${t.time}` : '🔒 Chưa mở'}
                                        </span>
                                    </div>
                                </div>
                                {unlocked && !done && <ArrowRight size={18} style={{ color: 'var(--N300)' }} />}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
