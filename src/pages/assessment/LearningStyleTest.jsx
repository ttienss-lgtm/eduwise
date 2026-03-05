import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Khi học bài mới, bạn thích:', options: ['Xem hình ảnh, biểu đồ, video', 'Nghe giảng hoặc thảo luận', 'Thực hành, làm bài tập ngay', 'Đọc tài liệu chi tiết'] },
    { q: 'Bạn nhớ lâu nhất khi:', options: ['Nhìn thấy (hình, màu sắc)', 'Nghe thấy (giọng nói, nhạc)', 'Làm thử (tay chân, thực hành)', 'Viết ra (ghi chú)'] },
    { q: 'Khi lắp ráp đồ, bạn:', options: ['Xem hình hướng dẫn', 'Nghe video hướng dẫn', 'Tự mò, thử sai', 'Đọc manual'] },
    { q: 'Trong lớp học, bạn thích:', options: ['Slide đẹp, nhiều hình', 'Thầy cô giảng hay', 'Hoạt động nhóm, workshop', 'Đề cương chi tiết'] },
    { q: 'Khi ôn thi, bạn thường:', options: ['Vẽ mind map, dùng highlight', 'Đọc to, tự giảng lại', 'Làm đề thi, bài tập', 'Ghi chú tóm tắt'] },
    { q: 'Bạn tập trung tốt nhất khi:', options: ['Phòng sáng, gọn gàng', 'Nghe nhạc, có tiếng ồn nhẹ', 'Đi lại, thay đổi vị trí', 'Yên tĩnh hoàn toàn'] },
    { q: 'Bạn giải thích vấn đề bằng:', options: ['Vẽ sơ đồ', 'Nói, kể chuyện', 'Demo, làm mẫu', 'Viết email/tin nhắn'] },
    { q: 'Khi nhớ đường, bạn dựa vào:', options: ['Bản đồ, hình ảnh', 'Hỏi đường bằng lời', 'Đi thử rồi nhớ', 'Ghi địa chỉ cụ thể'] },
]
const STYLES = ['Visual (Thị giác)', 'Auditory (Thính giác)', 'Kinesthetic (Vận động)', 'Read/Write (Đọc/Viết)']
const COLORS = ['var(--B500)', 'var(--purple)', 'var(--green)', 'var(--orange)']
export default function LearningStyleTest() {
    return <QuizPage id="learnstyle" icon="💡" title="Phong cách học tập" subtitle="VARK — bạn học hiệu quả nhất bằng cách nào?" questions={QS}
        onResult={(answers) => {
            const counts = [0, 0, 0, 0]
            answers.forEach(a => counts[a]++)
            const top = counts.indexOf(Math.max(...counts))
            return {
                title: STYLES[top], score: Math.round((counts[top] / QS.length) * 100 + 30),
                desc: `Bạn học tốt nhất qua ${['hình ảnh, biểu đồ, video', 'nghe giảng, thảo luận, podcast', 'thực hành, hoạt động, workshop', 'đọc tài liệu, viết ghi chú'][top]}`,
                details: STYLES.map((s, i) => ({ label: s, value: `${Math.round((counts[i] / QS.length) * 100)}%`, color: COLORS[i] }))
            }
        }} />
}
