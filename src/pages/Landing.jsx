import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Globe, GraduationCap, Users, Map, ArrowRight, Star, Sparkles, Shield } from 'lucide-react'

const FEATURES = [
    { icon: ClipboardCheck, title: '12 Bài Test Đánh giá', desc: 'Từ tính cách MBTI, sở thích RIASEC đến tài chính, kỹ năng mềm — hiểu bản thân 360°', color: 'var(--teal)', bg: 'var(--teal-bg)' },
    { icon: Sparkles, title: 'AI Tư vấn Thông minh', desc: 'Gợi ý quốc gia, ngành học, trường phù hợp dựa trên profile cá nhân hóa', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { icon: GraduationCap, title: 'Chọn Trường Chính xác', desc: 'Database 500+ trường, phân tầng Reach/Match/Safety, so sánh side-by-side', color: 'var(--B500)', bg: 'var(--B50)' },
    { icon: Users, title: 'Tư vấn viên Chuyên nghiệp', desc: 'Kết nối cựu du học sinh thành công, đặt lịch 1-1, gói mentoring linh hoạt', color: 'var(--orange)', bg: 'var(--orange-bg)' },
    { icon: Map, title: 'Roadmap Cá nhân hóa', desc: 'Gap analysis, timeline 6-24 tháng, milestones cụ thể, task hàng tuần', color: 'var(--green)', bg: 'var(--green-bg)' },
    { icon: Shield, title: 'Visa & Hồ sơ Trọn gói', desc: 'Step-by-step cho 7+ quốc gia, checklist giấy tờ, luyện phỏng vấn visa', color: 'var(--red)', bg: 'var(--red-bg)' },
]

const STATS = [
    { number: '500+', label: 'Trường quốc tế' },
    { number: '50+', label: 'Tư vấn viên' },
    { number: '7', label: 'Quốc gia' },
    { number: '12', label: 'Bài test đánh giá' },
]

export default function Landing() {
    return (
        <div className="landing">
            <nav className="landing-nav">
                <div className="landing-logo">
                    <div className="landing-logo-icon"><BookOpen size={20} /></div>
                    <span className="landing-logo-text">EduWise</span>
                </div>
                <div className="landing-nav-links">
                    <a href="#features">Tính năng</a>
                    <a href="#stats">Về chúng tôi</a>
                    <a href="#cta">Liên hệ</a>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <Link to="/auth" className="btn btn-outline btn-sm">Đăng nhập</Link>
                    <Link to="/auth?register=true" className="btn btn-primary btn-sm">Bắt đầu miễn phí</Link>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <div className="hero-badge"><Star size={14} />Nền tảng du học #1 Việt Nam</div>
                    <h1 className="hero-title">Hiểu bản thân.<br /><span>Chọn đúng trường.</span><br />Đi đúng đường.</h1>
                    <p className="hero-desc">EduWise giúp bạn đánh giá năng lực toàn diện, kết nối với chuyên gia tư vấn, và lên kế hoạch du học cá nhân hóa — hoàn toàn miễn phí.</p>
                    <div className="hero-actions">
                        <Link to="/auth?register=true" className="btn btn-primary btn-lg">Bắt đầu đánh giá <ArrowRight size={18} /></Link>
                        <Link to="#features" className="btn btn-outline btn-lg">Tìm hiểu thêm</Link>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-visual-inner">
                        <div className="hero-visual-card">
                            <ClipboardCheck size={20} style={{ color: 'var(--teal)' }} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>MBTI: ENFJ</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>Protagonist — Lãnh đạo bẩm sinh</div></div>
                        </div>
                        <div className="hero-visual-card">
                            <GraduationCap size={20} style={{ color: 'var(--B500)' }} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>Top Match: UoM 87%</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>University of Melbourne</div></div>
                        </div>
                        <div className="hero-visual-card">
                            <Map size={20} style={{ color: 'var(--green)' }} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>Roadmap: 18 tháng</div><div style={{ fontSize: 12, color: 'var(--N500)' }}>IELTS 6.5 → Apply → Visa</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing-section alt" id="stats">
                <div className="stats-row">
                    {STATS.map(s => <div className="stats-item" key={s.label}><div className="stats-number">{s.number}</div><div className="stats-label">{s.label}</div></div>)}
                </div>
            </section>

            <section className="landing-section" id="features">
                <div className="section-header">
                    <h2>Tất cả những gì bạn cần cho hành trình du học</h2>
                    <p>Từ đánh giá năng lực đến kết nối trường quốc tế — EduWise đồng hành cùng bạn từng bước</p>
                </div>
                <div className="feature-grid">
                    {FEATURES.map(f => (
                        <div className="card card-lift card-padded feature-card" key={f.title}>
                            <div className="feature-icon" style={{ background: f.bg, color: f.color }}><f.icon size={28} /></div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="landing-cta" id="cta">
                <h2>Sẵn sàng khám phá tiềm năng của bạn?</h2>
                <p>Bắt đầu với 12 bài test miễn phí và nhận tư vấn cá nhân hóa ngay hôm nay</p>
                <Link to="/auth?register=true" className="btn btn-primary btn-lg" style={{ background: 'white', color: 'var(--B500)' }}>Đăng ký miễn phí <ArrowRight size={18} /></Link>
            </section>

            <footer className="landing-footer">© 2026 EduWise. All rights reserved. — Hiểu bản thân. Chọn đúng trường. Đi đúng đường.</footer>
        </div>
    )
}
