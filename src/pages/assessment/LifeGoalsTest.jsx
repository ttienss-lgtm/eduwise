import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Điều quan trọng nhất với bạn khi chọn nơi du học:', options: ['Chất lượng giáo dục', 'Cơ hội việc làm sau tốt nghiệp', 'Trải nghiệm văn hóa', 'Chi phí thấp'] },
    { q: 'Sau khi tốt nghiệp, bạn muốn:', options: ['Ở lại nước ngoài làm việc', 'Về Việt Nam làm việc', 'Khởi nghiệp', 'Chưa quyết định'] },
    { q: 'Bạn ưu tiên điều gì trong sự nghiệp?', options: ['Thu nhập cao', 'Đam mê và ý nghĩa', 'Ổn định', 'Tự do và sáng tạo'] },
    { q: '10 năm tới, bạn hình dung mình:', options: ['Quản lý/lãnh đạo', 'Chuyên gia trong ngành', 'Doanh nhân', 'Người tạo ảnh hưởng xã hội'] },
    { q: 'Bạn học du học vì:', options: ['Nâng cao kiến thức chuyên môn', 'Phát triển bản thân toàn diện', 'Cơ hội nghề nghiệp tốt hơn', 'Trải nghiệm cuộc sống mới'] },
    { q: 'Yếu tố nào ảnh hưởng nhất đến hạnh phúc bạn?', options: ['Thành tựu sự nghiệp', 'Mối quan hệ gia đình/bạn bè', 'Tự do cá nhân', 'An ninh tài chính'] },
    { q: 'Bạn sẵn sàng hy sinh gì cho du học?', options: ['Thời gian xa gia đình', 'Chi phí lớn', 'Comfort zone', 'Tất cả'] },
    { q: 'Work-life balance lý tưởng của bạn:', options: ['Work hard, play hard', 'Ưu tiên công việc', 'Ưu tiên cuộc sống', 'Hòa hợp cả hai'] },
]
export default function LifeGoalsTest() {
    return <QuizPage id="lifegoals" icon="🎯" title="Mục tiêu cuộc sống" subtitle="Xác định giá trị và ưu tiên" questions={QS}
        onResult={(answers) => {
            const priorities = ['Achievement', 'Growth', 'Career', 'Experience']
            const counts = [0, 0, 0, 0]
            answers.forEach(a => counts[a]++)
            const top = counts.indexOf(Math.max(...counts))
            return {
                title: priorities[top] + ' Oriented', score: 80 + Math.round(Math.random() * 15), desc: `Bạn ưu tiên ${['thành tựu và kết quả', 'phát triển bản thân', 'sự nghiệp ổn định', 'trải nghiệm đa dạng'][top]}`,
                details: [{ label: 'Achievement', value: `${counts[0] * 25}%` }, { label: 'Growth', value: `${counts[1] * 25}%` }, { label: 'Career', value: `${counts[2] * 25}%` }, { label: 'Experience', value: `${counts[3] * 25}%` }]
            }
        }} />
}
