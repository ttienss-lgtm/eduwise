import { useState } from 'react'
import { FileText, AlertTriangle } from 'lucide-react'

const VISA_TYPES = {
    '🎓 Subclass 500 — Student Visa': {
        time: '1-3 tháng', interview: false, cost: 'AUD 710',
        steps: ['Nhận CoE (Confirmation of Enrolment) từ trường', 'Mua OSHC — bảo hiểm sức khỏe bắt buộc', 'Tạo ImmiAccount trên immi.homeaffairs.gov.au', 'Nộp đơn online (Form 157A)', 'Viết GTE Statement (Genuine Temporary Entrant)', 'Khám sức khỏe tại bệnh viện được chỉ định', 'Xin lý lịch tư pháp (Police Clearance)', 'Chờ kết quả (4-12 tuần)'],
        docs: ['CoE (Confirmation of Enrolment)', 'GTE Statement — giải thích tại sao chọn Úc', 'OSHC — bảo hiểm sức khỏe sinh viên', 'Hộ chiếu (còn hạn >6 tháng)', 'IELTS/TOEFL/PTE score report', 'Chứng minh tài chính (AUD 24,505/năm + học phí + vé máy bay)', 'Giấy khám sức khỏe (HAP ID)', 'Lý lịch tư pháp (Police Clearance)', 'Bằng TN / Bảng điểm gốc có công chứng', 'Ảnh hộ chiếu', 'Thư bảo lãnh tài chính (nếu có người sponsor)'],
        tips: ['GTE Statement rất quan trọng — viết kỹ tại sao chọn Úc và sẽ quay về VN', 'Tiền trong bank tối thiểu 3 tháng trước khi nộp', 'Khám sức khỏe tại: BV Quốc tế (HCM), BV Hồng Ngọc (HN)', 'OSHC phổ biến: Medibank, Allianz, Bupa (~AUD 500-600/năm)', 'Có thể include dependent (vợ/chồng, con) trong application', 'Được phép làm việc 48 giờ/2 tuần khi học']
    },
    '🔧 Subclass 485 — Post-study Work': {
        time: '2-4 tháng', interview: false, cost: 'AUD 1,895',
        steps: ['Hoàn thành bằng cấp tại Úc (ít nhất 2 năm CRICOS)', 'Kiểm tra điều kiện: tuổi <50, IELTS 6.0 overall', 'Tạo ImmiAccount', 'Nộp đơn online trong vòng 6 tháng sau tốt nghiệp', 'Đính kèm hồ sơ yêu cầu', 'Khám sức khỏe + Police Clearance', 'Chờ kết quả'],
        docs: ['Completion Letter từ trường', 'Bằng cấp Úc (Bachelor/Master/PhD)', 'IELTS 6.0 overall (hoặc PTE 50)', 'Hộ chiếu', 'Police Clearance (VN + Úc)', 'Khám sức khoẻ', 'Bảo hiểm sức khỏe'],
        tips: ['Graduate Work stream: 18 tháng (nếu ngành trong SOL)', 'Post-study Work stream: 2-4 năm tùy bằng cấp', 'Bachelor: 2 năm | Master (coursework): 3 năm | Master (research)/PhD: 4 năm', 'Học ở regional (Adelaide, Perth, Gold Coast...): +1-2 năm extra', 'Nộp trong vòng 6 tháng sau graduation — ĐỪNG TRỄ!']
    },
    '🛂 PR Pathway — Skilled Migration': {
        time: '6-18 tháng', interview: false, cost: 'AUD 4,640+',
        steps: ['Kiểm tra ngành có trong SOL (Skilled Occupation List)', 'Đánh giá bằng cấp qua assessing body (ACS, EA, VETASSESS...)', 'Thi IELTS/PTE đạt yêu cầu (thường 7.0+/65+)', 'Tính điểm SkillSelect (tối thiểu 65 điểm)', 'Nộp EOI (Expression of Interest)', 'Chờ ITA (Invitation to Apply)', 'Nộp hồ sơ PR chính thức', 'Chờ kết quả (6-12 tháng)'],
        docs: ['Skills Assessment result', 'IELTS 7.0+ hoặc PTE 65+ (mỗi band)', 'Bằng cấp Úc có công chứng', 'Experience letters từ employer', 'Police Clearance (tất cả nước đã ở >12 tháng)', 'Khám sức khỏe', 'Form 80 (Personal Particulars)'],
        tips: ['Subclass 189 (Independent): Không cần sponsor, 65+ điểm', 'Subclass 190 (State Nominated): +5 điểm từ state nomination', 'Subclass 491 (Regional): +15 điểm, sống vùng regional 3 năm', 'Ngành dễ PR: IT, Engineering, Nursing, Accounting, Teaching', 'Adelaide, Tasmania, Canberra: nomination dễ hơn Sydney/Melbourne', 'Điểm IELTS 8.0 = +20 điểm; PTE 79 = +20 điểm — đáng đầu tư!']
    },
}

export default function VisaGuide() {
    const [selected, setSelected] = useState(Object.keys(VISA_TYPES)[0])
    const visa = VISA_TYPES[selected]

    return (
        <div>
            <div className="page-header"><h1 className="h1">📝 Visa & PR Guide — Úc</h1><p className="page-subtitle">Hướng dẫn visa du học, post-study work và PR pathway tại Australia</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {Object.keys(VISA_TYPES).map(c => (
                    <div key={c} className={`tag${c === selected ? ' active' : ''}`} onClick={() => setSelected(c)}>{c}</div>
                ))}
            </div>
            <div className="grid grid-2">
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                            <h3 className="h3">Quy trình</h3>
                            <div className="badge badge-blue">⏱ {visa.time}</div>
                            {visa.interview && <div className="badge badge-orange">🎤 Có phỏng vấn</div>}
                            <div className="badge badge-purple">💰 {visa.cost}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
                            {visa.steps.map((s, i) => (
                                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--N700)', cursor: 'pointer' }}>
                                    <input type="checkbox" style={{ width: 18, height: 18, accentColor: 'var(--B500)' }} />
                                    <span style={{ fontWeight: 500, color: 'var(--B500)', minWidth: 20 }}>{i + 1}.</span>{s}
                                </label>
                            ))}
                        </div>
                    </div>
                    {visa.tips && <div className="card card-padded" style={{ background: 'var(--orange-bg)', border: '1px solid rgba(245,158,11,0.2)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}><AlertTriangle size={16} style={{ color: 'var(--orange)' }} /><h3 style={{ fontWeight: 600, fontSize: 14, color: 'var(--orange)' }}>Lưu ý quan trọng</h3></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {visa.tips.map((t, i) => <div key={i} style={{ fontSize: 13, color: 'var(--N700)', paddingLeft: 8, borderLeft: '2px solid var(--orange)' }}>• {t}</div>)}
                        </div>
                    </div>}
                </div>
                <div className="card card-padded">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><FileText size={18} style={{ color: 'var(--B500)' }} /><h3 className="h3">Checklist giấy tờ ({visa.docs.length})</h3></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {visa.docs.map((d, i) => (
                            <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--N700)', cursor: 'pointer', padding: '8px 0', borderBottom: '1px solid var(--N100)' }}>
                                <input type="checkbox" style={{ width: 16, height: 16, accentColor: 'var(--green)' }} />{d}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
