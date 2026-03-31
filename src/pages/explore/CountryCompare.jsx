import { useState } from 'react'
import { Check, DollarSign, Clock, Briefcase, GraduationCap } from 'lucide-react'

const CITIES = [
    { id: 'syd', flag: '🏙️', name: 'Sydney', rent: 'AUD 250-400/tuần', living: 'AUD 2,000-2,800/th', parttime: '$23-28/giờ', transport: 'Opal Card ~$50/tuần', climate: 'Ôn đới, ấm quanh năm', safety: 'Tốt', viet: '300K+', topUnis: 'UNSW, USyd, UTS, Macquarie', prBonus: 'Không có regional bonus' },
    { id: 'mel', flag: '☕', name: 'Melbourne', rent: 'AUD 220-380/tuần', living: 'AUD 1,800-2,500/th', parttime: '$23-28/giờ', transport: 'Myki Card ~$45/tuần', climate: '4 mùa trong 1 ngày', safety: 'Tốt', viet: '250K+', topUnis: 'UoM, Monash, RMIT, Deakin, La Trobe', prBonus: 'Không có regional bonus' },
    { id: 'bri', flag: '🌴', name: 'Brisbane', rent: 'AUD 200-320/tuần', living: 'AUD 1,500-2,200/th', parttime: '$23-27/giờ', transport: 'Go Card ~$35/tuần', climate: 'Subtropical, nắng ấm', safety: 'Rất tốt', viet: '80K+', topUnis: 'UQ, QUT, Griffith', prBonus: 'Không có regional bonus' },
    { id: 'per', flag: '🏖️', name: 'Perth', rent: 'AUD 180-300/tuần', living: 'AUD 1,400-2,000/th', parttime: '$23-27/giờ', transport: 'SmartRider ~$30/tuần', climate: 'Mediterranean, nắng nhiều', safety: 'Rất tốt', viet: '50K+', topUnis: 'UWA, Curtin, Murdoch, ECU', prBonus: 'Không có regional bonus' },
    { id: 'ade', flag: '🍷', name: 'Adelaide', rent: 'AUD 160-280/tuần', living: 'AUD 1,300-1,800/th', parttime: '$23-26/giờ', transport: 'Metro Card ~$25/tuần', climate: 'Mediterranean, khô ráo', safety: 'Rất tốt', viet: '30K+', topUnis: 'Adelaide, UniSA, Flinders', prBonus: '✅ Regional bonus 5 điểm PR' },
    { id: 'can', flag: '🏛️', name: 'Canberra', rent: 'AUD 200-350/tuần', living: 'AUD 1,600-2,200/th', parttime: '$23-27/giờ', transport: 'MyWay ~$30/tuần', climate: '4 mùa rõ, mùa đông lạnh', safety: 'Rất tốt', viet: '15K+', topUnis: 'ANU, UC', prBonus: '✅ Regional bonus 5 điểm PR + ACT nomination' },
]

const FIELDS = [
    { key: 'rent', label: '🏠 Thuê phòng/tuần' },
    { key: 'living', label: '💰 Sinh hoạt/tháng' },
    { key: 'parttime', label: '💼 Lương part-time' },
    { key: 'transport', label: '🚌 Đi lại' },
    { key: 'climate', label: '🌤️ Khí hậu' },
    { key: 'safety', label: '🛡️ An ninh' },
    { key: 'viet', label: '🇻🇳 Cộng đồng VN' },
    { key: 'topUnis', label: '🏆 Trường nổi bật' },
    { key: 'prBonus', label: '🛂 PR Bonus' },
]

export default function CountryCompare() {
    const [sel, setSel] = useState(['syd', 'mel', 'bri'])
    const toggle = (id) => {
        if (sel.includes(id)) { if (sel.length > 2) setSel(sel.filter(s => s !== id)) }
        else if (sel.length < 4) setSel([...sel, id])
    }
    const selected = CITIES.filter(c => sel.includes(c.id))

    return (
        <div>
            <div className="page-header"><h1 className="h1">⚖️ So sánh Thành phố Úc</h1><p className="page-subtitle">Chọn 2-4 thành phố để so sánh chi tiết</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {CITIES.map(c => (
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
                                    const highlight = f.key === 'prBonus' && val.includes('✅')
                                    return <td key={c.id} style={{ padding: '12px 16px', textAlign: 'center', color: highlight ? 'var(--green)' : 'var(--N700)', fontWeight: highlight ? 700 : 400 }}>{val}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
