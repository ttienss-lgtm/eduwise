import { useState } from 'react'
import { Check, Star, DollarSign, MapPin } from 'lucide-react'

const SCHOOLS = [
    { id: 'uom', name: 'University of Melbourne', city: 'Melbourne', ranking: 14, tuition: 'AUD 38-48K', compat: 87, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Business', 'Engineering', 'CS', 'Medicine'] },
    { id: 'usyd', name: 'University of Sydney', city: 'Sydney', ranking: 19, tuition: 'AUD 42-52K', compat: 79, ielts: '6.5-7.0', scholarship: true, housing: true, internship: true, online: false, majors: ['Business', 'Law', 'Medicine', 'Data Science'] },
    { id: 'unsw', name: 'UNSW Sydney', city: 'Sydney', ranking: 23, tuition: 'AUD 40-50K', compat: 84, ielts: '6.5', scholarship: true, housing: true, internship: true, online: true, majors: ['Engineering', 'CS', 'Business', 'Design'] },
    { id: 'anu', name: 'ANU', city: 'Canberra', ranking: 30, tuition: 'AUD 39-47K', compat: 76, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Politics', 'CS', 'Science', 'Law'] },
    { id: 'uq', name: 'University of Queensland', city: 'Brisbane', ranking: 40, tuition: 'AUD 36-46K', compat: 88, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Science', 'Engineering', 'Business'] },
    { id: 'monash', name: 'Monash University', city: 'Melbourne', ranking: 42, tuition: 'AUD 35-45K', compat: 86, ielts: '6.5', scholarship: true, housing: true, internship: true, online: true, majors: ['Pharmacy', 'IT', 'Business', 'Education'] },
    { id: 'adelaide', name: 'University of Adelaide', city: 'Adelaide', ranking: 89, tuition: 'AUD 35-43K', compat: 85, ielts: '6.0-6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Engineering', 'Health', 'Wine', 'CS'] },
    { id: 'uts', name: 'UTS', city: 'Sydney', ranking: 148, tuition: 'AUD 32-42K', compat: 90, ielts: '6.0-6.5', scholarship: true, housing: true, internship: true, online: true, majors: ['IT', 'Engineering', 'Design', 'Nursing'] },
    { id: 'rmit', name: 'RMIT University', city: 'Melbourne', ranking: 190, tuition: 'AUD 30-38K', compat: 94, ielts: '6.0', scholarship: true, housing: true, internship: true, online: true, majors: ['Design', 'IT', 'Business', 'Fashion'] },
    { id: 'macquarie', name: 'Macquarie University', city: 'Sydney', ranking: 130, tuition: 'AUD 33-40K', compat: 89, ielts: '6.5', scholarship: true, housing: true, internship: true, online: false, majors: ['Accounting', 'Finance', 'Linguistics', 'IT'] },
    { id: 'deakin', name: 'Deakin University', city: 'Melbourne', ranking: 233, tuition: 'AUD 28-36K', compat: 92, ielts: '6.0', scholarship: true, housing: true, internship: true, online: true, majors: ['Nursing', 'IT', 'Sport', 'Education'] },
    { id: 'curtin', name: 'Curtin University', city: 'Perth', ranking: 183, tuition: 'AUD 28-35K', compat: 91, ielts: '6.0', scholarship: true, housing: true, internship: true, online: false, majors: ['Mining', 'Engineering', 'Health', 'Business'] },
]

const FIELDS = [
    { key: 'city', label: 'Thành phố' },
    { key: 'ranking', label: 'QS Ranking', fmt: v => `#${v}` },
    { key: 'tuition', label: 'Học phí/năm' },
    { key: 'compat', label: 'Phù hợp', fmt: v => `${v}%` },
    { key: 'ielts', label: 'IELTS tối thiểu' },
    { key: 'scholarship', label: 'Học bổng', bool: true },
    { key: 'housing', label: 'Ký túc xá', bool: true },
    { key: 'internship', label: 'Internship support', bool: true },
    { key: 'online', label: 'Chương trình online', bool: true },
]

export default function SchoolCompare() {
    const [sel, setSel] = useState(['uom', 'unsw', 'rmit'])
    const toggle = (id) => {
        if (sel.includes(id)) { if (sel.length > 2) setSel(sel.filter(s => s !== id)) }
        else if (sel.length < 4) setSel([...sel, id])
    }
    const selected = SCHOOLS.filter(s => sel.includes(s.id))

    return (
        <div>
            <div className="page-header"><h1 className="h1">🏫 So sánh Trường tại Úc</h1><p className="page-subtitle">Chọn 2-4 trường Úc để so sánh side-by-side</p></div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
                {SCHOOLS.map(s => (
                    <div key={s.id} className={`tag${sel.includes(s.id) ? ' active' : ''}`} onClick={() => toggle(s.id)} style={{ cursor: 'pointer', fontSize: 12 }}>
                        {sel.includes(s.id) && <Check size={12} />}🇦🇺 {s.name}
                    </div>
                ))}
            </div>
            <div className="card" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead><tr style={{ borderBottom: '2px solid var(--N200)' }}>
                        <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--N500)', width: 160, position: 'sticky', left: 0, background: 'white' }}>Tiêu chí</th>
                        {selected.map(s => <th key={s.id} style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, minWidth: 180 }}>🇦🇺 {s.name}</th>)}
                    </tr></thead>
                    <tbody>
                        {FIELDS.map((f, i) => (
                            <tr key={f.key} style={{ borderBottom: '1px solid var(--N100)', background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: 500, color: 'var(--N700)', position: 'sticky', left: 0, background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>{f.label}</td>
                                {selected.map(s => {
                                    const v = s[f.key]
                                    if (f.bool) return <td key={s.id} style={{ padding: '12px 16px', textAlign: 'center', fontSize: 18 }}>{v ? '✅' : '❌'}</td>
                                    const display = f.fmt ? f.fmt(v) : v
                                    const color = f.key === 'compat' ? (v >= 90 ? 'var(--green)' : v >= 80 ? 'var(--B500)' : 'var(--orange)') : 'var(--N700)'
                                    return <td key={s.id} style={{ padding: '12px 16px', textAlign: 'center', color, fontWeight: f.key === 'compat' ? 700 : 400 }}>{display}</td>
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
