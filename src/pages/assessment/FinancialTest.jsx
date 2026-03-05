import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Thu nhập hàng tháng của gia đình bạn (triệu VND):', options: ['Dưới 20 triệu', '20-50 triệu', '50-100 triệu', 'Trên 100 triệu'] },
    { q: 'Gia đình có sẵn tiết kiệm cho du học không?', options: ['Chưa có', 'Dưới 500 triệu', '500 triệu - 1 tỷ', 'Trên 1 tỷ'] },
    { q: 'Gia đình có bất động sản có thể thế chấp?', options: ['Không', 'Có 1 bất động sản', 'Có nhiều bất động sản', 'Có và sẵn sàng thế chấp'] },
    { q: 'Bạn có kế hoạch xin học bổng không?', options: ['Không', 'Có, học bổng một phần', 'Có, nhắm full scholarship', 'Đã có học bổng'] },
    { q: 'Bạn có thể làm part-time khi du học?', options: ['Không muốn', 'Có thể, nếu cần', 'Chắc chắn, để giảm gánh nặng', 'Đã có kinh nghiệm part-time'] },
    { q: 'Mức học phí bạn chấp nhận được (USD/năm):', options: ['Dưới $5K (miễn phí/thấp)', '$5K-15K', '$15K-30K', 'Trên $30K'] },
    { q: 'Chi phí sinh hoạt bạn chấp nhận (USD/tháng):', options: ['Dưới $500', '$500-1000', '$1000-1500', 'Trên $1500'] },
    { q: 'Bạn có người bảo lãnh tài chính không?', options: ['Không', 'Bố mẹ', 'Họ hàng', 'Có tổ chức/quỹ hỗ trợ'] },
]
const TIERS = [{ min: 0, l: '💚 Ngân sách thấp', d: 'Nên tập trung: Đức (miễn phí), học bổng GKS Hàn Quốc, MEXT Nhật' }, { min: 35, l: '💛 Ngân sách trung bình', d: 'Phù hợp: Canada, Australia với học bổng một phần' }, { min: 65, l: '🧡 Ngân sách khá', d: 'Có thể chọn: UK, Australia, Canada không cần học bổng' }, { min: 85, l: '💰 Ngân sách cao', d: 'Tự do chọn bất kỳ quốc gia, tập trung chất lượng trường' }]
export default function FinancialTest() {
    return <QuizPage id="financial" icon="💰" title="Năng lực tài chính" subtitle="Xác định budget tier du học" questions={QS}
        onResult={(answers) => {
            const score = Math.round((answers.reduce((s, v) => s + v, 0) / (QS.length * 3)) * 100)
            const tier = [...TIERS].reverse().find(t => score >= t.min)
            return { title: tier.l, score, desc: tier.d }
        }} />
}
