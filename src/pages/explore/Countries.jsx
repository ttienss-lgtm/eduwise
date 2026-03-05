import { Globe, DollarSign, Clock, Briefcase, Languages } from 'lucide-react'

const COUNTRIES = [
    { flag: '🇺🇸', name: 'Mỹ (USA)', tuition: '$20K-60K/năm', living: '$1000-2500/tháng', duration: '4 năm (Bachelor), 2 năm (Master)', lang: 'TOEFL 80+ / IELTS 6.5+', pr: 'OPT 1-3 năm', bg: 'linear-gradient(135deg,#dbeafe,#eff6ff)' },
    { flag: '🇬🇧', name: 'Anh (UK)', tuition: '£12K-38K/năm', living: '£800-1500/tháng', duration: '3 năm (Bachelor), 1 năm (Master)', lang: 'IELTS 6.0-7.0', pr: 'Graduate visa 2 năm', bg: 'linear-gradient(135deg,#fce4ec,#fef2f2)' },
    { flag: '🇦🇺', name: 'Úc (Australia)', tuition: 'AUD 20K-45K/năm', living: 'AUD 1500-2500/tháng', duration: '3 năm (Bachelor), 1.5-2 năm (Master)', lang: 'IELTS 6.0-6.5', pr: 'Post-study work 2-4 năm, dễ PR', bg: 'linear-gradient(135deg,#ecfdf5,#f0fdfa)' },
    { flag: '🇨🇦', name: 'Canada', tuition: 'CAD 15K-35K/năm', living: 'CAD 1000-2000/tháng', duration: '4 năm (Bachelor), 1-2 năm (Master)', lang: 'IELTS 6.0-6.5', pr: 'PGWP 1-3 năm, CRS PR pathway', bg: 'linear-gradient(135deg,#fef2f2,#fffbeb)' },
    { flag: '🇯🇵', name: 'Nhật Bản', tuition: '¥500K-1.5M/năm', living: '¥80-120K/tháng', duration: '4 năm (Bachelor), 2 năm (Master)', lang: 'JLPT N2+ hoặc IELTS', pr: 'Visa thay đổi status', bg: 'linear-gradient(135deg,#fdf2f8,#f5f3ff)' },
    { flag: '🇰🇷', name: 'Hàn Quốc', tuition: '₩4-10M/kỳ', living: '₩600K-1M/tháng', duration: '4 năm (Bachelor), 2 năm (Master)', lang: 'TOPIK 3+ hoặc IELTS', pr: 'D-10 visa tìm việc', bg: 'linear-gradient(135deg,#eff6ff,#ecfdf5)' },
    { flag: '🇩🇪', name: 'Đức (Germany)', tuition: 'Miễn phí (public)', living: '€800-1200/tháng', duration: '3 năm (Bachelor), 2 năm (Master)', lang: 'TestDaF B2+ hoặc IELTS (chương trình EN)', pr: '18 tháng tìm việc sau tốt nghiệp', bg: 'linear-gradient(135deg,#fffbeb,#fef2f2)' },
]

export default function Countries() {
    return (
        <div>
            <div className="page-header"><h1 className="h1">🌏 Khám phá Quốc gia</h1><p className="page-subtitle">So sánh 7 quốc gia du học phổ biến nhất</p></div>
            <div className="grid grid-2">
                {COUNTRIES.map(c => (
                    <div className="card country-card card-lift" key={c.name}>
                        <div className="country-flag" style={{ background: c.bg }}>{c.flag}</div>
                        <div className="country-info">
                            <div className="country-name">{c.name}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><DollarSign size={15} style={{ color: 'var(--green)' }} /><span>Học phí: {c.tuition}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><DollarSign size={15} style={{ color: 'var(--orange)' }} /><span>Sinh hoạt: {c.living}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Clock size={15} style={{ color: 'var(--B500)' }} /><span>{c.duration}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Languages size={15} style={{ color: 'var(--purple)' }} /><span>{c.lang}</span></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--N600)' }}><Briefcase size={15} style={{ color: 'var(--teal)' }} /><span>{c.pr}</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
