import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Bạn đến một thành phố hoàn toàn mới, bạn:', options: ['Háo hức khám phá ngay', 'Tìm hiểu trước qua mạng', 'Hơi lo nhưng sẵn sàng', 'Muốn có người quen đi cùng'] },
    { q: 'Thức ăn nước ngoài khác hoàn toàn, bạn:', options: ['Thử ngay, yêu thích đa dạng', 'Thử từ từ', 'Chỉ ăn quen thuộc', 'Rất khó thích nghi'] },
    { q: 'Bạn phải tự nấu ăn, giặt đồ, dọn nhà:', options: ['Đã quen, không vấn đề', 'Học nhanh thôi', 'Hơi khó nhưng sẽ cố', 'Chưa bao giờ tự làm'] },
    { q: 'Bạn bị lạc ở nước ngoài, không internet:', options: ['Hỏi người xung quanh bằng tiếng Anh', 'Tìm cách kết nối wifi', 'Đi theo bản đồ giấy', 'Rất hoảng loạn'] },
    { q: 'Bạn cô đơn khi xa nhà, bạn:', options: ['Tự tạo hoạt động mới', 'Gọi video gia đình', 'Tìm cộng đồng người Việt', 'Rất buồn, khó vượt qua'] },
    { q: 'Văn hóa mới khác mình, bạn:', options: ['Tôn trọng và học hỏi', 'Thích nghi dần', 'So sánh với VN', 'Khó chấp nhận'] },
    { q: 'Bạn quản lý tài chính cá nhân:', options: ['Có ngân sách chi tiết', 'Biết tiết kiệm', 'Chi tiêu thoải mái', 'Thường hết tiền sớm'] },
    { q: 'Phải giải quyết vấn đề hành chính (visa, ngân hàng) một mình:', options: ['Tự tin xử lý', 'Tìm hướng dẫn rồi tự làm', 'Nhờ người giúp', 'Rất ngại'] },
    { q: 'Múi giờ khác, xa bạn bè cũ:', options: ['Thích nghi nhanh', 'Cần thời gian', 'Hơi khó', 'Rất nhớ nhà'] },
    { q: 'Bạn tự đánh giá khả năng thích nghi:', options: ['Rất tốt', 'Khá tốt', 'Trung bình', 'Yếu'] },
]
export default function AdaptabilityTest() {
    return <QuizPage id="adaptability" icon="🛡️" title="Khả năng thích nghi" subtitle="Đánh giá mức sẵn sàng sống tự lập ở nước ngoài" questions={QS}
        onResult={(answers) => {
            const score = Math.round((answers.filter(a => a <= 1).length / QS.length) * 100)
            return {
                title: score >= 80 ? 'Sẵn sàng cao' : score >= 60 ? 'Khá sẵn sàng' : score >= 40 ? 'Cần chuẩn bị thêm' : 'Cần chuẩn bị nhiều', score: Math.max(score, 30),
                desc: score >= 80 ? 'Bạn có khả năng thích nghi tốt, sẵn sàng cho cuộc sống ở nước ngoài' : 'Nên tham gia các hoạt động rèn tự lập trước khi đi',
                details: [{ label: 'Tự lập', value: `${Math.min(score + 10, 100)}/100` }, { label: 'Giao tiếp xuyên văn hóa', value: `${score}/100` }, { label: 'Quản lý tài chính', value: `${Math.max(score - 5, 20)}/100` }, { label: 'Quản lý cảm xúc', value: `${Math.max(score - 10, 20)}/100` }]
            }
        }} />
}
