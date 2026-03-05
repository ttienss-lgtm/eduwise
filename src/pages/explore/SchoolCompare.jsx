import { useState } from 'react'
import { Check, Star, DollarSign, MapPin } from 'lucide-react'

const SCHOOLS = [
    { id: 'uom', name: 'University of Melbourne', country: '🇦🇺', city: 'Melbourne', ranking: 33, tuition: 'AUD 38K', compat: 87, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Business', 'Engineering', 'CS'] },
    { id: 'utoronto', name: 'University of Toronto', country: '🇨🇦', city: 'Toronto', ranking: 21, tuition: 'CAD 45K', compat: 82, ielts: '7.0', scholarship: true, housing: true, internship: true, online: true, majors: ['CS', 'Business', 'Medicine'] },
    { id: 'ubc', name: 'UBC', country: '🇨🇦', city: 'Vancouver', ranking: 35, tuition: 'CAD 40K', compat: 85, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Engineering', 'Science', 'Arts'] },
    { id: 'usyd', name: 'University of Sydney', country: '🇦🇺', city: 'Sydney', ranking: 19, tuition: 'AUD 42K', compat: 79, ielts: '7.0', scholarship: false, housing: true, internship: true, online: false, majors: ['Business', 'Law', 'Medicine'] },
    { id: 'waseda', name: 'Waseda University', country: '🇯🇵', city: 'Tokyo', ranking: 98, tuition: '¥1.2M', compat: 91, ielts: '6.0', scholarship: true, housing: true, internship: false, online: false, majors: ['IR', 'CS', 'Business'] },
    { id: 'tum', name: 'TU München', country: '🇩🇪', city: 'Munich', ranking: 37, tuition: 'FREE', compat: 75, ielts: '6.5', scholarship: false, housing: false, internship: true, online: true, majors: ['Engineering', 'CS', 'Physics'] },
    { id: 'rmit', name: 'RMIT University', country: '🇦🇺', city: 'Melbourne', ranking: 190, tuition: 'AUD 32K', compat: 94, ielts: '6.0', scholarship: true, housing: true, internship: true, online: true, majors: ['Design', 'IT', 'Business'] },
    { id: 'yonsei', name: 'Yonsei University', country: '🇰🇷', city: 'Seoul', ranking: 76, tuition: '₩8M/kỳ', compat: 88, ielts: '6.0', scholarship: true, housing: true, internship: false, online: false, majors: ['Business', 'Engineering', 'Korean'] },
]

const FIELDS = [
    { key: 'country', label: 'Quốc gia' }, { key: 'city', label: 'Thành phố' }, { key: 'ranking', label: 'QS Ranking', fmt: v => `#${v}` },
    { key: 'tuition', label: 'Học phí/năm' }, { key: 'compat', label: 'Phù hợp', fmt: v => `${v}%` }, { key: 'ielts', label: 'IELTS tối thiểu' },
    { key: 'scholarship', label: 'Học bổng', bool: true }, { key: 'housing', label: 'Ký túc xá', bool: true }, { key: 'internship', label: 'Internship support', bool: true }, { key: 'online', label: 'Chương trình online', bool: true },
]

export default function SchoolCompare() {
    const [sel, setSel] = useState(['uom', 'utoronto', 'tum'])
    const toggle = (id) => {
        if (sel.includes(id)) { if (sel.length > 2) setSel(sel.filter(s => s !== id)) }
        else if (sel.length < 4) setSel([...sel, id])
    }
    const selected = SCHOOLS.filter(s => sel.includes(s.id))

    return (
        <div>
            <div className="page-header"><h1 className="h1">🏫 So sánh Trường</h1><p className="page-subtitle">Chọn 2-4 trường để so sánh side-by-side</p></div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
                {SCHOOLS.map(s => (
                    <div key={s.id} className={`tag${sel.includes(s.id) ? ' active' : ''}`} onClick={() => toggle(s.id)} style={{ cursor: 'pointer', fontSize: 12 }}>
                        {sel.includes(s.id) && <Check size={12} />}{s.country} {s.name}
                    </div>
                ))}
            </div>
            <div className="card" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead><tr style={{ borderBottom: '2px solid var(--N200)' }}>
                        <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--N500)', width: 160, position: 'sticky', left: 0, background: 'white' }}>Tiêu chí</th>
                        {selected.map(s => <th key={s.id} style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, minWidth: 180 }}>{s.country} {s.name}</th>)}
                    </tr></thead>
                    <tbody>
                        {FIELDS.map((f, i) => (
                            <tr key={f.key} style={{ borderBottom: '1px solid var(--N100)', background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: 500, color: 'var(--N700)', position: 'sticky', left: 0, background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>{f.label}</td>
                                {selected.map(s => {
                                    const v = s[f.key]
                                    if (f.bool) return <td key={s.id} style={{ padding: '12px 16px', textAlign: 'center', fontSize: 18 }}>{v ? '✅' : '❌'}</td>
                                    const display = f.fmt ? f.fmt(v) : v
                                    const color = f.key === 'compat' ? (v >= 90 ? 'var(--green)' : v >= 80 ? 'var(--B500)' : 'var(--orange)') : f.key === 'tuition' && v === 'FREE' ? 'var(--green)' : 'var(--N700)'
                                    return <td key={s.id} style={{ padding: '12px 16px', textAlign: 'center', color, fontWeight: f.key === 'compat' || v === 'FREE' ? 700 : 400 }}>{display}</td>
                                })}
                            </tr>
                        ))}
                        <tr style={{ borderBottom: '1px solid var(--N100)' }}>
                            <td style={{ padding: '12px 16px', fontWeight: 500, color: 'var(--N700)', position: 'sticky', left: 0, background: 'white' }}>Ngành mạnh</td>
                            {selected.map(s => <td key={s.id} style={{ padding: '12px 16px', textAlign: 'center' }}><div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>{s.majors.map(m => <span className="tag" key={m} style={{ fontSize: 11, padding: '1px 6px' }}>{m}</span>)}</div></td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
