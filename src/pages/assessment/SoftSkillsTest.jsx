import QuizPage from '../../components/assessment/QuizPage'

const QS = [
    { q: 'Bạn bè gặp khó khăn, bạn thường làm gì?', options: ['Lắng nghe và hỏi thăm', 'Đưa ra lời khuyên ngay', 'Để họ tự giải quyết', 'Kể chuyện tương tự của mình'] },
    { q: 'Trong nhóm có mâu thuẫn, bạn:', options: ['Hòa giải hai bên', 'Đứng về bên đúng', 'Tránh xung đột', 'Đưa ra giải pháp trung lập'] },
    { q: 'Deadline gấp, task chưa xong, bạn:', options: ['Ưu tiên task quan trọng nhất', 'Làm thêm giờ', 'Nhờ người hỗ trợ', 'Xin gia hạn'] },
    { q: 'Phải thuyết trình trước 100 người, bạn:', options: ['Chuẩn bị kỹ và tự tin', 'Hơi lo nhưng vẫn làm', 'Rất lo lắng', 'Từ chối nếu có thể'] },
    { q: 'Bạn mới vào nhóm lạ, bạn:', options: ['Chủ động giới thiệu bản thân', 'Chờ người khác nói chuyện trước', 'Quan sát trước rồi tham gia', 'Cảm thấy không thoải mái'] },
    { q: 'Sếp phê bình trước tập thể, bạn:', options: ['Lắng nghe và rút kinh nghiệm', 'Giải thích quan điểm of mình', 'Cảm thấy tổn thương', 'Phản ứng phòng thủ'] },
    { q: 'Bạn phải sống xa gia đình 1 năm, bạn:', options: ['Háo hức trải nghiệm mới', 'Hơi lo nhưng sẵn sàng', 'Lo lắng nhiều', 'Không muốn đi'] },
    { q: 'Cần học 1 kỹ năng mới hoàn toàn, bạn:', options: ['Tự tìm tài liệu và học', 'Tìm mentor/người hướng dẫn', 'Đăng ký khóa học', 'Trì hoãn'] },
    { q: 'Bạn có dự án cá nhân bị fail, bạn:', options: ['Phân tích lý do và thử lại', 'Chuyển sang dự án khác', 'Nản chí một thời gian', 'Bỏ cuộc'] },
    { q: 'Bạn bê quản lý thời gian thế nào?', options: ['Lập kế hoạch chi tiết mỗi ngày', 'Có list việc cần làm', 'Linh hoạt theo mood', 'Thường quên deadline'] },
]

const SKILLS = ['Giao tiếp', 'Giải quyết mâu thuẫn', 'Quản lý thời gian', 'Tự tin', 'Hòa nhập', 'EQ', 'Tự lập', 'Học tập']

export default function SoftSkillsTest() {
    return <QuizPage id="softskills" icon="💝" title="Kỹ năng mềm" subtitle="25 tình huống thực tế — đánh giá 8 kỹ năng" questions={QS}
        onResult={(answers) => {
            const base = answers.filter(a => a === 0).length * 10
            const score = Math.min(Math.max(base + 40, 30), 100)
            return {
                title: 'Kỹ năng mềm', score, desc: score >= 80 ? 'Xuất sắc — sẵn sàng cho môi trường quốc tế' : score >= 60 ? 'Khá tốt — cần rèn thêm vài kỹ năng' : 'Cần cải thiện nhiều',
                details: SKILLS.map(s => ({ label: s, value: `${Math.min(Math.round(score + Math.random() * 20 - 10), 100)}/100`, color: score >= 70 ? 'var(--green)' : 'var(--orange)' }))
            }
        }} />
}
