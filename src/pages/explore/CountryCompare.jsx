import { useState } from 'react'
import { ArrowLeftRight, Check, X, DollarSign, Clock, Briefcase, Languages, GraduationCap } from 'lucide-react'

const COUNTRIES = [
    { id: 'us', flag: '🇺🇸', name: 'Mỹ', tuition: '$20K-60K', living: '$1000-2500/th', duration: '4 năm (BS), 2 năm (MS)', lang: 'TOEFL 80+ / IELTS 6.5+', pr: 'OPT 1-3 năm', workStudy: '20h/tuần', freeEdu: false, postGrad: 'H1B lottery', safety: 'Tốt (theo vùng)', climate: 'Đa dạng', viet: '500K+', ranking: 'MIT, Stanford, Harvard' },
    { id: 'uk', flag: '🇬🇧', name: 'Anh', tuition: '£12K-38K', living: '£800-1500/th', duration: '3 năm (BS), 1 năm (MS)', lang: 'IELTS 6.0-7.0', pr: 'Graduate visa 2 năm', workStudy: '20h/tuần', freeEdu: false, postGrad: 'Skilled Worker visa', safety: 'Tốt', climate: 'Ôn đới, mưa nhiều', viet: '100K+', ranking: 'Oxford, Cambridge, Imperial' },
    { id: 'au', flag: '🇦🇺', name: 'Úc', tuition: 'AUD 20K-45K', living: 'AUD 1500-2500/th', duration: '3 năm (BS), 1.5-2 năm (MS)', lang: 'IELTS 6.0-6.5', pr: 'PSW 2-4 năm, dễ PR', workStudy: '48h/2 tuần', freeEdu: false, postGrad: 'PR pathway rõ ràng', safety: 'Rất tốt', climate: 'Nhiệt đới → ôn đới', viet: '300K+', ranking: 'UoM, UNSW, ANU' },
    { id: 'ca', flag: '🇨🇦', name: 'Canada', tuition: 'CAD 15K-35K', living: 'CAD 1000-2000/th', duration: '4 năm (BS), 1-2 năm (MS)', lang: 'IELTS 6.0-6.5', pr: 'PGWP 1-3 năm → CRS PR', workStudy: '20h/tuần', freeEdu: false, postGrad: 'Express Entry PR', safety: 'Rất tốt', climate: 'Lạnh, mùa đông dài', viet: '200K+', ranking: 'UofT, UBC, McGill' },
    { id: 'jp', flag: '🇯🇵', name: 'Nhật', tuition: '¥500K-1.5M', living: '¥80-120K/th', duration: '4 năm (BS), 2 năm (MS)', lang: 'JLPT N2+ hoặc IELTS', pr: 'Đổi visa work', workStudy: '28h/tuần', freeEdu: false, postGrad: 'Designated Activities visa', safety: 'Rất tốt', climate: '4 mùa rõ rệt', viet: '450K+', ranking: 'UTokyo, Waseda, Keio' },
    { id: 'kr', flag: '🇰🇷', name: 'Hàn Quốc', tuition: '₩4-10M/kỳ', living: '₩600K-1M/th', duration: '4 năm (BS), 2 năm (MS)', lang: 'TOPIK 3+ hoặc IELTS', pr: 'D-10 tìm việc', workStudy: '20h/tuần', freeEdu: false, postGrad: 'E-7 visa', safety: 'Rất tốt', climate: '4 mùa, mùa đông lạnh', viet: '70K+', ranking: 'SNU, KAIST, Yonsei' },
    { id: 'de', flag: '🇩🇪', name: 'Đức', tuition: 'MIỄN PHÍ (public)', living: '€800-1200/th', duration: '3 năm (BS), 2 năm (MS)', lang: 'TestDaF B2+ / IELTS', pr: '18 tháng tìm việc', workStudy: '120 ngày full/năm', freeEdu: true, postGrad: 'Blue Card EU', safety: 'Rất tốt', climate: 'Ôn đới, mùa đông lạnh', viet: '10K+', ranking: 'TUM, LMU, Heidelberg' },
]

const FIELDS = [
    { key: 'tuition', label: '💰 Học phí/năm', icon: DollarSign },
    { key: 'living', label: '🏠 Sinh hoạt', icon: DollarSign },
    { key: 'duration', label: '⏱ Thời gian học', icon: Clock },
    { key: 'lang', label: '🌐 Yêu cầu ngôn ngữ', icon: Languages },
    { key: 'workStudy', label: '💼 Đi làm khi học', icon: Briefcase },
    { key: 'pr', label: '🛂 Con đường PR', icon: Briefcase },
    { key: 'postGrad', label: '🎯 Sau tốt nghiệp', icon: GraduationCap },
    { key: 'safety', label: '🛡️ An ninh', icon: null },
    { key: 'climate', label: '🌤️ Khí hậu', icon: null },
    { key: 'viet', label: '🇻🇳 Cộng đồng VN', icon: null },
    { key: 'ranking', label: '🏆 Trường nổi bật', icon: null },
]

export default function CountryCompare() {
    const [sel, setSel] = useState(['us', 'au', 'ca'])
    const toggle = (id) => {
        if (sel.includes(id)) { if (sel.length > 2) setSel(sel.filter(s => s !== id)) }
        else if (sel.length < 4) setSel([...sel, id])
    }
    const selected = COUNTRIES.filter(c => sel.includes(c.id))

    return (
        <div>
            <div className="page-header"><h1 className="h1">⚖️ So sánh Quốc gia</h1><p className="page-subtitle">Chọn 2-4 quốc gia để so sánh chi tiết</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {COUNTRIES.map(c => (
                    <div key={c.id} className={`tag${sel.includes(c.id) ? ' active' : ''}`} onClick={() => toggle(c.id)} style={{ cursor: 'pointer' }}>
                        {sel.includes(c.id) && <Check size={14} />}{c.flag} {c.name}
                    </div>
                ))}
            </div>
            <div className="card" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--N200)' }}>
                            <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 600, color: 'var(--N500)', width: 180, position: 'sticky', left: 0, background: 'white' }}>Tiêu chí</th>
                            {selected.map(c => <th key={c.id} style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 700, fontSize: 16, minWidth: 200 }}>{c.flag} {c.name}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {FIELDS.map((f, i) => (
                            <tr key={f.key} style={{ borderBottom: '1px solid var(--N100)', background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: 500, color: 'var(--N700)', position: 'sticky', left: 0, background: i % 2 === 0 ? 'white' : 'var(--N50)' }}>{f.label}</td>
                                {selected.map(c => {
                                    const val = c[f.key]
                                    const highlight = f.key === 'tuition' && c.freeEdu
                                    return <td key={c.id} style={{ padding: '12px 16px', textAlign: 'center', color: highlight ? 'var(--green)' : 'var(--N700)', fontWeight: highlight ? 700 : 400 }}>{val === true ? '✅' : val === false ? '❌' : val}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
