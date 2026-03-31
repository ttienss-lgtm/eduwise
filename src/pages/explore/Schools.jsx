import { Star, MapPin, DollarSign, TrendingUp, ExternalLink } from 'lucide-react'

const SCHOOLS = [
    { name: 'University of Melbourne', city: 'Melbourne', ranking: 14, tuition: 'AUD 38-48K/năm', compat: 87, tier: 'match', majors: ['Business', 'Engineering', 'CS', 'Medicine', 'Law'], scholarship: true, scholarshipNote: 'Melbourne International Scholarship — giảm 50-100% học phí', entry: 'IELTS 6.5+, GPA 7.0+/10', vietPop: 'Rất đông' },
    { name: 'University of Sydney', city: 'Sydney', ranking: 19, tuition: 'AUD 42-52K/năm', compat: 79, tier: 'reach', majors: ['Business', 'Law', 'Medicine', 'Data Science', 'Architecture'], scholarship: true, scholarshipNote: 'Sydney Scholars Award — AUD 6,000-40,000', entry: 'IELTS 6.5-7.0, GPA 7.5+/10', vietPop: 'Đông' },
    { name: 'UNSW Sydney', city: 'Sydney', ranking: 23, tuition: 'AUD 40-50K/năm', compat: 84, tier: 'match', majors: ['Engineering', 'CS', 'Business', 'Design', 'Renewable Energy'], scholarship: true, scholarshipNote: 'UNSW International Scholarship — giảm AUD 5,000-15,000/năm', entry: 'IELTS 6.5+, GPA 7.0+/10', vietPop: 'Rất đông' },
    { name: 'Monash University', city: 'Melbourne', ranking: 42, tuition: 'AUD 35-45K/năm', compat: 86, tier: 'match', majors: ['Pharmacy', 'Education', 'IT', 'Business', 'Engineering'], scholarship: true, scholarshipNote: 'Monash International Merit Scholarship — AUD 10,000/năm', entry: 'IELTS 6.5+, GPA 6.5+/10', vietPop: 'Rất đông' },
    { name: 'University of Queensland', city: 'Brisbane', ranking: 40, tuition: 'AUD 36-46K/năm', compat: 88, tier: 'match', majors: ['Science', 'Engineering', 'Business', 'Agriculture', 'Hospitality'], scholarship: true, scholarshipNote: 'UQ International Scholarship — 25-100% học phí', entry: 'IELTS 6.5+, GPA 6.5+/10', vietPop: 'Đông' },
    { name: 'ANU (Australian National University)', city: 'Canberra', ranking: 30, tuition: 'AUD 39-47K/năm', compat: 76, tier: 'reach', majors: ['Politics', 'CS', 'Engineering', 'Science', 'Law'], scholarship: true, scholarshipNote: 'ANU Chancellor\'s International Scholarship — 25-50% học phí', entry: 'IELTS 6.5+, GPA 7.5+/10', vietPop: 'Ít' },
    { name: 'RMIT University', city: 'Melbourne', ranking: 190, tuition: 'AUD 30-38K/năm', compat: 94, tier: 'safety', majors: ['Design', 'IT', 'Business', 'Fashion', 'Media'], scholarship: true, scholarshipNote: 'RMIT International Scholarship — AUD 5,000-10,000', entry: 'IELTS 6.0+, GPA 6.0+/10', vietPop: 'Rất đông (có campus VN)' },
    { name: 'University of Technology Sydney (UTS)', city: 'Sydney', ranking: 148, tuition: 'AUD 32-42K/năm', compat: 90, tier: 'match', majors: ['IT', 'Engineering', 'Design', 'Nursing', 'Business'], scholarship: true, scholarshipNote: 'UTS International Scholarship — AUD 5,000-20,000', entry: 'IELTS 6.0-6.5, GPA 6.0+/10', vietPop: 'Đông' },
    { name: 'Deakin University', city: 'Melbourne', ranking: 233, tuition: 'AUD 28-36K/năm', compat: 92, tier: 'safety', majors: ['Nursing', 'IT', 'Business', 'Sport Management', 'Education'], scholarship: true, scholarshipNote: 'Deakin International Scholarship — 20-25% học phí', entry: 'IELTS 6.0+, GPA 5.5+/10', vietPop: 'Đông' },
    { name: 'Curtin University', city: 'Perth', ranking: 183, tuition: 'AUD 28-35K/năm', compat: 91, tier: 'safety', majors: ['Mining', 'Engineering', 'Health', 'Business', 'IT'], scholarship: true, scholarshipNote: 'Curtin International Merit Scholarship — AUD 10,000', entry: 'IELTS 6.0+, GPA 5.5+/10', vietPop: 'Vừa' },
    { name: 'Macquarie University', city: 'Sydney', ranking: 130, tuition: 'AUD 33-40K/năm', compat: 89, tier: 'match', majors: ['Accounting', 'Finance', 'Linguistics', 'IT', 'Media'], scholarship: true, scholarshipNote: 'Vice-Chancellor\'s International Scholarship — AUD 10,000/năm', entry: 'IELTS 6.5+, GPA 6.5+/10', vietPop: 'Đông' },
    { name: 'University of Adelaide', city: 'Adelaide', ranking: 89, tuition: 'AUD 35-43K/năm', compat: 85, tier: 'match', majors: ['Wine Business', 'Engineering', 'Health', 'CS', 'Music'], scholarship: true, scholarshipNote: 'Adelaide Global Academic Excellence — 15-30% học phí + 5 điểm PR bonus vùng regional', entry: 'IELTS 6.0-6.5, GPA 6.5+/10', vietPop: 'Vừa' },
]

const TIER_COLORS = { reach: { bg: 'var(--red-bg)', color: 'var(--red)', label: '🔴 Reach' }, match: { bg: 'var(--orange-bg)', color: 'var(--orange)', label: '🟡 Match' }, safety: { bg: 'var(--green-bg)', color: 'var(--green)', label: '🟢 Safety' } }

export default function Schools() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🎓 Chọn Trường tại Úc</h1><p className="page-subtitle">Dựa trên profile của bạn, đây là các trường Úc phù hợp</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                <div className="tag active">Tất cả</div><div className="tag">🏙️ Sydney</div><div className="tag">☕ Melbourne</div><div className="tag">🌴 Brisbane</div><div className="tag">🏖️ Perth</div><div className="tag">🍷 Adelaide</div><div className="tag">🏛️ Canberra</div>
            </div>
            <div className="grid grid-2">
                {SCHOOLS.map(s => {
                    const tc = TIER_COLORS[s.tier]
                    return (
                        <div className="card card-padded card-lift" key={s.name}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--N900)' }}>🇦🇺 {s.name}</div>
                                    <div style={{ fontSize: 13, color: 'var(--N500)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={13} />{s.city}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--B500)' }}>{s.compat}%</div>
                                    <div className="badge" style={{ background: tc.bg, color: tc.color }}>{tc.label}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--N600)', marginBottom: 8, flexWrap: 'wrap' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Star size={14} style={{ color: 'var(--orange)' }} />#{s.ranking} QS</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><DollarSign size={14} style={{ color: 'var(--green)' }} />{s.tuition}</span>
                            </div>
                            <div style={{ fontSize: 12, color: 'var(--N500)', marginBottom: 8 }}>📋 Điều kiện: {s.entry}</div>
                            {s.scholarship && <div style={{ fontSize: 12, padding: '6px 10px', background: 'var(--green-bg)', borderRadius: 8, color: 'var(--green)', marginBottom: 8, fontWeight: 500 }}>🎓 {s.scholarshipNote}</div>}
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
