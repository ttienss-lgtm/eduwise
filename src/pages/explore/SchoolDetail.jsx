import { useParams, Link } from 'react-router-dom'
import { MapPin, DollarSign, Star, Globe, Calendar, Users, ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react'

const SCHOOLS_DATA = {
    'uom': {
        name: 'University of Melbourne', country: '🇦🇺 Australia', city: 'Melbourne', ranking: 33, tuition: 'AUD 38,000/năm', compat: 87, tier: 'match',
        desc: 'University of Melbourne là trường đại học hàng đầu Australia, nổi tiếng với chất lượng nghiên cứu và danh tiếng quốc tế.',
        programs: ['Bachelor of Commerce', 'Master of Management', 'Master of Engineering', 'Master of IT'],
        requirements: { gpa: 'GPA 7.5/10 (thang 10)', ielts: 'IELTS 6.5 (không band nào dưới 6.0)', other: 'SOP, CV, 2 LOR' },
        deadlines: [{ round: 'Early', date: '30/09/2026' }, { round: 'Regular', date: '31/01/2027' }, { round: 'Late', date: '30/04/2027' }],
        scholarship: 'Melbourne International Scholarship: Giảm 25-100% học phí',
        reviews: [{ user: 'Phạm Thu Hà', rating: 5, text: 'Trường rất tốt, campus đẹp, support international students nhiều.' }, { user: 'Nguyễn Minh', rating: 4, text: 'Học nặng nhưng đáng giá. Melbourne sống dễ chịu.' }]
    },
    'utoronto': {
        name: 'University of Toronto', country: '🇨🇦 Canada', city: 'Toronto', ranking: 21, tuition: 'CAD 45,000/năm', compat: 82, tier: 'reach',
        desc: 'University of Toronto là trường top 1 Canada, nghiên cứu mạnh, đặc biệt CS và Business.',
        programs: ['Bachelor of Commerce', 'Master of Science in CS', 'MBA Rotman', 'Master of Engineering'],
        requirements: { gpa: 'GPA 8.0/10', ielts: 'IELTS 7.0 (không band nào dưới 6.5)', other: 'SOP, CV, 3 LOR, GRE (optional)' },
        deadlines: [{ round: 'Round 1', date: '15/11/2026' }, { round: 'Round 2', date: '15/01/2027' }, { round: 'Round 3', date: '01/04/2027' }],
        scholarship: 'University of Toronto Scholars Program: Full tuition + living',
        reviews: [{ user: 'Lê Đức', rating: 5, text: 'Top research university. Toronto multicultural, rất thích hợp cho VN students.' }]
    },
}

export default function SchoolDetail() {
    const { id } = useParams()
    const s = SCHOOLS_DATA[id] || SCHOOLS_DATA['uom']
    const tierColors = { reach: { bg: 'var(--red-bg)', color: 'var(--red)' }, match: { bg: 'var(--orange-bg)', color: 'var(--orange)' }, safety: { bg: 'var(--green-bg)', color: 'var(--green)' } }
    const tc = tierColors[s.tier]
    return (
        <div>
            <Link to="/schools" className="btn btn-ghost btn-sm" style={{ marginBottom: 16 }}><ArrowLeft size={16} />Quay lại</Link>
            <div className="card card-padded" style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div><h1 className="h1">{s.country} {s.name}</h1><p style={{ color: 'var(--N500)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={15} />{s.city} · <Star size={15} style={{ color: 'var(--orange)' }} />#{s.ranking} World</p></div>
                    <div style={{ textAlign: 'right' }}><div style={{ fontSize: 40, fontWeight: 800, color: 'var(--B500)' }}>{s.compat}%</div><div className="badge" style={{ background: tc.bg, color: tc.color }}>{s.tier.toUpperCase()}</div></div>
                </div>
                <p className="body" style={{ marginTop: 12 }}>{s.desc}</p>
            </div>
            <div className="grid grid-2" style={{ marginBottom: 20 }}>
                <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 12 }}>📋 Yêu cầu đầu vào</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{Object.entries(s.requirements).map(([k, v]) => <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '6px 0', borderBottom: '1px solid var(--N100)' }}><span style={{ color: 'var(--N500)', textTransform: 'uppercase', fontSize: 12, fontWeight: 600 }}>{k}</span><span style={{ fontWeight: 500 }}>{v}</span></div>)}</div>
                </div>
                <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 12 }}>📅 Deadlines</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{s.deadlines.map(d => <div key={d.round} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '8px 12px', background: 'var(--N50)', borderRadius: 8 }}><span>{d.round}</span><span className="badge badge-blue">{d.date}</span></div>)}</div>
                    {s.scholarship && <div style={{ marginTop: 12, padding: 12, background: 'var(--green-bg)', borderRadius: 8, fontSize: 13, color: 'var(--green)' }}><CheckCircle2 size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> {s.scholarship}</div>}
                </div>
            </div>
            <div className="card card-padded" style={{ marginBottom: 20 }}><h3 className="h3" style={{ marginBottom: 12 }}>🎓 Chương trình học</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{s.programs.map(p => <span className="tag" key={p}>{p}</span>)}</div>
            </div>
            <div className="card card-padded"><h3 className="h3" style={{ marginBottom: 12 }}>⭐ Reviews từ du học sinh</h3>
                {s.reviews.map((r, i) => <div key={i} style={{ padding: '12px 0', borderBottom: i < s.reviews.length - 1 ? '1px solid var(--N100)' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontWeight: 600, fontSize: 14 }}>{r.user}</span><span style={{ color: 'var(--orange)' }}>{'⭐'.repeat(r.rating)}</span></div>
                    <p style={{ fontSize: 14, color: 'var(--N600)' }}>{r.text}</p>
                </div>)}
            </div>
        </div>
    )
}
