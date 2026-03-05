import { useState } from 'react'
import { FileText, AlertTriangle } from 'lucide-react'

const COUNTRIES_VISA = {
    '🇺🇸 Mỹ (F-1)': {
        time: '2-3 tháng', interview: true, cost: '$160 + SEVIS $350',
        steps: ['Nhận I-20 từ trường', 'Đóng phí SEVIS ($350)', 'Điền form DS-160 online', 'Đặt lịch phỏng vấn tại ĐSQ', 'Chuẩn bị hồ sơ tài chính', 'Phỏng vấn visa', 'Nhận passport + visa'],
        docs: ['I-20', 'DS-160 confirmation', 'Biên lai SEVIS', 'Hộ chiếu (còn hạn >6 tháng)', 'Ảnh 5x5cm', 'Sổ tiết kiệm / Bank statement', 'Giấy chứng nhận thu nhập bố mẹ', 'Bằng TN / bảng điểm gốc', 'IELTS/TOEFL score report'],
        tips: ['Phỏng vấn bằng tiếng Anh, trả lời ngắn gọn', 'Chứng minh "non-immigrant intent" rõ ràng', 'Chuẩn bị giải thích funding source', 'Document tài chính càng nhiều càng tốt']
    },
    '🇬🇧 Anh (Tier 4)': {
        time: '3-4 tuần', interview: false, cost: '£490 + IHS £776/năm',
        steps: ['Nhận CAS từ trường', 'Mua IHS (Immigration Health Surcharge)', 'Nộp đơn online qua GOV.UK', 'Cung cấp biometrics tại VFS Global', 'Gửi hộ chiếu', 'Chờ kết quả (15 ngày làm việc)', 'Nhận visa và BRP letter'],
        docs: ['CAS letter', 'Hộ chiếu', 'IELTS/TOEFL', 'Bank statement (28 ngày liên tục)', 'Giấy chứng nhận tài chính', 'Kết quả TB phổi (nếu ở VN >6 tháng)', 'Ảnh ICAO'],
        tips: ['Bank statement phải cover £1334/tháng (London) hoặc £1023 (ngoài London)', 'Đăng ký biometrics sớm', 'Có thể dùng priority service (thêm £500)']
    },
    '🇦🇺 Úc (Subclass 500)': {
        time: '1-3 tháng', interview: false, cost: 'AUD 710',
        steps: ['Nhận CoE từ trường', 'Mua OSHC (bảo hiểm sức khỏe)', 'Tạo ImmiAccount', 'Nộp đơn online', 'Viết GTE Statement', 'Khám sức khỏe', 'Chờ kết quả'],
        docs: ['CoE', 'GTE Statement', 'OSHC', 'Hộ chiếu', 'IELTS/TOEFL', 'Chứng minh tài chính (AUD 24,505/năm)', 'Giấy khám sức khỏe', 'Lý lịch tư pháp'],
        tips: ['GTE rất quan trọng — viết kỹ tại sao chọn Úc', 'Tiền trong bank 3 tháng trước khi nộp', 'Khám sức khỏe tại bệnh viện được chỉ định']
    },
    '🇨🇦 Canada (Study Permit)': {
        time: '8-12 tuần', interview: false, cost: 'CAD 150',
        steps: ['Nhận LOA từ trường', 'Tạo tài khoản GIC ($10K CAD)', 'Nộp đơn online qua IRCC', 'Cung cấp biometrics', 'Khám sức khỏe', 'Chờ kết quả', 'Nhận POE Letter'],
        docs: ['LOA (Letter of Acceptance)', 'GIC receipt', 'Hộ chiếu', 'IELTS', 'Chứng minh tài chính', 'Study plan', 'Lý lịch tư pháp', 'Ảnh ICAO'],
        tips: ['GIC bắt buộc cho VN students', 'Apply SDS track để nhanh hơn', 'Biometrics tại VAC Hà Nội hoặc TP.HCM']
    },
    '🇯🇵 Nhật (Student Visa)': {
        time: '1-3 tháng', interview: true, cost: '¥3,000',
        steps: ['Nhận CoE (Certificate of Eligibility) từ trường', 'Nộp đơn tại ĐSQ Nhật', 'Nộp hồ sơ + CoE', 'Phỏng vấn (nếu cần)', 'Chờ xử lý (5-10 ngày)', 'Nhận visa dán passport'],
        docs: ['CoE gốc', 'Hộ chiếu (còn hạn)', 'Đơn xin visa', 'Ảnh 4.5x3.5cm', 'Bằng TN / bảng điểm', 'JLPT certificate (nếu có)', 'Giấy bảo lãnh tài chính', 'Sổ tiết kiệm người bảo lãnh'],
        tips: ['CoE do trường xin từ Immigration — mất 1-3 tháng', 'Nếu xin MEXT, không cần CoE', 'Chuẩn bị tiếng Nhật cơ bản cho phỏng vấn']
    },
    '🇰🇷 Hàn Quốc (D-2 Visa)': {
        time: '2-4 tuần', interview: true, cost: '$50',
        steps: ['Nhận Admission Letter từ trường', 'Chuẩn bị hồ sơ visa', 'Nộp tại ĐSQ/LSQ Hàn Quốc', 'Phỏng vấn', 'Chờ kết quả (7-10 ngày)', 'Nhận visa'],
        docs: ['Admission Letter', 'Hộ chiếu', 'Đơn xin visa (form)', 'Ảnh 3.5x4.5cm', 'Bằng TN / bảng điểm', 'TOPIK certificate (nếu có)', 'Chứng minh tài chính ($10K+)', 'Bảo hiểm sức khỏe', 'Study plan'],
        tips: ['TOPIK level 3+ cho chương trình tiếng Hàn', 'Có thể apply trong nước hoặc online', 'Visa D-2 cho phép part-time 20h/tuần']
    },
    '🇩🇪 Đức (National Visa)': {
        time: '6-12 tuần', interview: true, cost: '€75',
        steps: ['Nhận Admission Letter từ trường', 'Mở Blocked Account (€11,208/năm)', 'Mua bảo hiểm sức khỏe', 'Đặt lịch hẹn tại ĐSQ Đức', 'Nộp hồ sơ + phỏng vấn', 'Chờ kết quả (6-12 tuần)', 'Nhận visa'],
        docs: ['Admission Letter / Zulassung', 'Blocked Account confirmation', 'Bảo hiểm sức khỏe', 'Hộ chiếu', 'Ảnh biometric', 'Bằng TN + bảng điểm (apostille)', 'Chứng chỉ ngôn ngữ (TestDaF/IELTS)', 'Motivation letter', 'CV (Lebenslauf)'],
        tips: ['Blocked Account bắt buộc — mở tại Expatrio hoặc Deutsche Bank', 'Nếu học bằng tiếng Đức: cần TestDaF B2', 'Appointment tại ĐSQ rất khó — đặt sớm 2-3 tháng', 'Sau khi sang cần đăng ký Anmeldung trong 2 tuần']
    },
}

export default function VisaGuide() {
    const [selected, setSelected] = useState(Object.keys(COUNTRIES_VISA)[0])
    const visa = COUNTRIES_VISA[selected]

    return (
        <div>
            <div className="page-header"><h1 className="h1">📝 Visa Guide</h1><p className="page-subtitle">Hướng dẫn xin visa step-by-step — 7 quốc gia</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {Object.keys(COUNTRIES_VISA).map(c => (
                    <div key={c} className={`tag${c === selected ? ' active' : ''}`} onClick={() => setSelected(c)}>{c}</div>
                ))}
            </div>
            <div className="grid grid-2">
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                            <h3 className="h3">Quy trình xin visa</h3>
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
