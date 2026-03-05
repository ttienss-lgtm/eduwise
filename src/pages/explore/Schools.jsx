import { Star, MapPin, DollarSign, TrendingUp } from 'lucide-react'

const SCHOOLS = [
    { name: 'University of Melbourne', country: '🇦🇺', city: 'Melbourne', ranking: 33, tuition: 'AUD 38K/năm', compat: 87, tier: 'match', majors: ['Business', 'Engineering', 'CS'], scholarship: true },
    { name: 'University of Toronto', country: '🇨🇦', city: 'Toronto', ranking: 21, tuition: 'CAD 45K/năm', compat: 82, tier: 'reach', majors: ['CS', 'Business', 'Medicine'], scholarship: true },
    { name: 'University of British Columbia', country: '🇨🇦', city: 'Vancouver', ranking: 35, tuition: 'CAD 40K/năm', compat: 85, tier: 'match', majors: ['Engineering', 'Science', 'Arts'], scholarship: true },
    { name: 'University of Sydney', country: '🇦🇺', city: 'Sydney', ranking: 19, tuition: 'AUD 42K/năm', compat: 79, tier: 'reach', majors: ['Business', 'Law', 'Medicine'], scholarship: false },
    { name: 'Waseda University', country: '🇯🇵', city: 'Tokyo', ranking: 98, tuition: '¥1.2M/năm', compat: 91, tier: 'match', majors: ['International Relations', 'CS', 'Business'], scholarship: true },
    { name: 'Technische Universität München', country: '🇩🇪', city: 'Munich', ranking: 37, tuition: 'Miễn phí', compat: 75, tier: 'reach', majors: ['Engineering', 'CS', 'Physics'], scholarship: false },
    { name: 'RMIT University', country: '🇦🇺', city: 'Melbourne', ranking: 190, tuition: 'AUD 32K/năm', compat: 94, tier: 'safety', majors: ['Design', 'IT', 'Business'], scholarship: true },
    { name: 'Yonsei University', country: '🇰🇷', city: 'Seoul', ranking: 76, tuition: '₩8M/kỳ', compat: 88, tier: 'match', majors: ['Business', 'Engineering', 'Korean Studies'], scholarship: true },
]

const TIER_COLORS = { reach: { bg: 'var(--red-bg)', color: 'var(--red)', label: '🔴 Reach' }, match: { bg: 'var(--orange-bg)', color: 'var(--orange)', label: '🟡 Match' }, safety: { bg: 'var(--green-bg)', color: 'var(--green)', label: '🟢 Safety' } }

export default function Schools() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🎓 Chọn Trường</h1><p className="page-subtitle">Dựa trên profile của bạn, đây là các trường phù hợp</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                <div className="tag active">Tất cả</div><div className="tag">🇦🇺 Australia</div><div className="tag">🇨🇦 Canada</div><div className="tag">🇯🇵 Nhật</div><div className="tag">🇰🇷 Hàn</div><div className="tag">🇩🇪 Đức</div>
            </div>
            <div className="grid grid-2">
                {SCHOOLS.map(s => {
                    const tc = TIER_COLORS[s.tier]
                    return (
                        <div className="card card-padded card-lift" key={s.name}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--N900)' }}>{s.country} {s.name}</div>
                                    <div style={{ fontSize: 13, color: 'var(--N500)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={13} />{s.city}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--B500)' }}>{s.compat}%</div>
                                    <div className="badge" style={{ background: tc.bg, color: tc.color }}>{tc.label}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--N600)', marginBottom: 12 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Star size={14} style={{ color: 'var(--orange)' }} />#{s.ranking}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><DollarSign size={14} style={{ color: 'var(--green)' }} />{s.tuition}</span>
                                {s.scholarship && <span className="badge badge-green">Có học bổng</span>}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                {s.majors.map(m => <span className="tag" key={m} style={{ fontSize: 12, padding: '2px 8px' }}>{m}</span>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
