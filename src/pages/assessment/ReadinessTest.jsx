import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Bạn đã tìm hiểu về quốc gia muốn du học chưa?', options: ['Rất kỹ', 'Khá nhiều', 'Một chút', 'Chưa'] },
    { q: 'Bạn có chứng chỉ ngôn ngữ (IELTS/TOEFL) chưa?', options: ['Có, đạt yêu cầu', 'Có nhưng chưa đủ', 'Đang học', 'Chưa bắt đầu'] },
    { q: 'Bạn đã chọn được ngành học chưa?', options: ['Đã chọn rõ ràng', 'Đang phân vân 2-3 ngành', 'Chưa biết ngành nào', 'Hoàn toàn chưa'] },
    { q: 'Gia đình ủng hộ du học không?', options: ['Hoàn toàn ủng hộ', 'Ủng hộ nhưng lo lắng', 'Chưa đồng ý', 'Phản đối'] },
    { q: 'Bạn có kế hoạch tài chính rõ ràng chưa?', options: ['Có, chi tiết', 'Có sơ bộ', 'Chưa tính kỹ', 'Chưa có'] },
    { q: 'Bạn biết deadline nộp hồ sơ trường chưa?', options: ['Biết rõ', 'Biết đại khái', 'Chưa tìm hiểu', 'Không biết'] },
    { q: 'Bạn có mentor/người hướng dẫn du học chưa?', options: ['Có', 'Có biết ai nhưng chưa liên hệ', 'Đang tìm', 'Chưa'] },
    { q: 'Bạn đã chuẩn bị hồ sơ (SOP, CV) chưa?', options: ['Xong rồi', 'Đang viết', 'Biết cần nhưng chưa bắt đầu', 'Không biết cần gì'] },
    { q: 'Bạn có kinh nghiệm sống xa nhà chưa?', options: ['Có, > 6 tháng', 'Có, vài tuần', 'Rất ít', 'Chưa bao giờ'] },
    { q: 'Bạn tự đánh giá, bao lâu nữa sẵn sàng đi?', options: ['Dưới 6 tháng', '6-12 tháng', '12-18 tháng', 'Trên 18 tháng'] },
]
export default function ReadinessTest() {
    return <QuizPage id="readiness" icon="✅" title="Mức độ sẵn sàng" subtitle="Bạn đã sẵn sàng cho hành trình du học chưa?" questions={QS}
        onResult={(answers) => {
            const score = Math.round(((QS.length * 3 - answers.reduce((s, v) => s + v, 0)) / (QS.length * 3)) * 100)
            return {
                title: score >= 80 ? '🟢 Sẵn sàng' : score >= 60 ? '🟡 Gần sẵn sàng' : score >= 40 ? '🟠 Cần chuẩn bị thêm' : '🔴 Cần chuẩn bị nhiều', score,
                desc: `Timeline ước tính: ${score >= 80 ? '3-6 tháng' : score >= 60 ? '6-12 tháng' : score >= 40 ? '12-18 tháng' : '18-24 tháng'} trước khi apply`
            }
        }} />
}
