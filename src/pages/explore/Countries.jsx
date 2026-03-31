import { DollarSign, GraduationCap, Users, Sun, Shield } from 'lucide-react'

const CITIES = [
    { flag: '🏙️', name: 'Sydney (NSW)', living: 'AUD 2,000-2,800/tháng', universities: '6 trường lớn (UNSW, USyd, UTS, Macquarie...)', fields: 'Business, Finance, IT, Law', viet: '300K+ người Việt', livability: '⭐⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#dbeafe,#eff6ff)' },
    { flag: '☕', name: 'Melbourne (VIC)', living: 'AUD 1,800-2,500/tháng', universities: '8 trường lớn (UoM, Monash, RMIT, Deakin...)', fields: 'Engineering, Design, Arts, Medicine', viet: '250K+ người Việt', livability: '⭐⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#ecfdf5,#f0fdfa)' },
    { flag: '🌴', name: 'Brisbane (QLD)', living: 'AUD 1,500-2,200/tháng', universities: '3 trường lớn (UQ, QUT, Griffith)', fields: 'Science, Engineering, Hospitality', viet: '80K+ người Việt', livability: '⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#fef9c3,#fffbeb)' },
    { flag: '🏖️', name: 'Perth (WA)', living: 'AUD 1,400-2,000/tháng', universities: '4 trường lớn (UWA, Curtin, Murdoch, ECU)', fields: 'Mining, Engineering, Marine Science', viet: '50K+ người Việt', livability: '⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#fce4ec,#fef2f2)' },
    { flag: '🍷', name: 'Adelaide (SA)', living: 'AUD 1,300-1,800/tháng', universities: '3 trường lớn (Adelaide, UniSA, Flinders)', fields: 'Wine, Health, Defence, Space', viet: '30K+ người Việt', livability: '⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#f5f3ff,#fdf2f8)' },
    { flag: '🏛️', name: 'Canberra (ACT)', living: 'AUD 1,600-2,200/tháng', universities: '2 trường lớn (ANU, UC)', fields: 'Politics, Research, Policy, Cyber Security', viet: '15K+ người Việt', livability: '⭐⭐⭐⭐', bg: 'linear-gradient(135deg,#ecfdf5,#dbeafe)' },
]

export default function Countries() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🇦🇺 Khám phá Thành phố tại Úc</h1><p className="page-subtitle">So sánh 6 thành phố du học phổ biến nhất tại Australia</p></div>
            <div className="grid grid-2">
                {CITIES.map(c => (
                    <div className="card country-card card-lift" key={c.name}>
                        <div className="country-flag" style={{ background: c.bg }}>{c.flag}</div>
                        <div className="country-info">
                            <div className="country-name">{c.name}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><DollarSign size={15} style={{ color: 'var(--orange)' }} /><span>Sinh hoạt: {c.living}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><GraduationCap size={15} style={{ color: 'var(--B500)' }} /><span>{c.universities}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Shield size={15} style={{ color: 'var(--teal)' }} /><span>Ngành mạnh: {c.fields}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Users size={15} style={{ color: 'var(--purple)' }} /><span>Cộng đồng VN: {c.viet}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Sun size={15} style={{ color: 'var(--green)' }} /><span>Livability: {c.livability}</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
