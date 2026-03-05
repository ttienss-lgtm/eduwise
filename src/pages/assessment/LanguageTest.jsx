import QuizPage from '../../components/assessment/QuizPage'

const QS = [
    { q: 'Bạn có thể đọc hiểu một bài báo tiếng Anh không?', type: 'rating' },
    { q: 'Bạn có thể xem phim không phụ đề tiếng Việt?', type: 'rating' },
    { q: 'Bạn tự tin nói tiếng Anh trước đám đông?', type: 'rating' },
    { q: 'Bạn có thể viết email chuyên nghiệp bằng tiếng Anh?', type: 'rating' },
    { q: 'Bạn hiểu khi người bản xứ nói chuyện tốc độ bình thường?', type: 'rating' },
    { q: 'Bạn có thể thuyết trình bằng tiếng Anh trong 5 phút?', type: 'rating' },
    { q: 'Bạn có thể đọc hiểu tài liệu học thuật tiếng Anh?', type: 'rating' },
    { q: 'Bạn tự tin viết bài luận 500 từ bằng tiếng Anh?', type: 'rating' },
    { q: 'Bạn có thể phỏng vấn xin việc bằng tiếng Anh?', type: 'rating' },
    { q: 'Bạn thường xuyên sử dụng tiếng Anh trong cuộc sống?', type: 'rating' },
    { q: 'Bạn có thể ghi chú lecture bằng tiếng Anh?', type: 'rating' },
    { q: 'Bạn hiểu humor/slang tiếng Anh?', type: 'rating' },
]

const LEVELS = [{ min: 0, l: 'A1 — Beginner', c: 'var(--red)' }, { min: 30, l: 'A2 — Elementary', c: 'var(--orange)' }, { min: 45, l: 'B1 — Intermediate', c: 'var(--orange)' }, { min: 60, l: 'B2 — Upper Intermediate', c: 'var(--B500)' }, { min: 75, l: 'C1 — Advanced', c: 'var(--green)' }, { min: 90, l: 'C2 — Proficient', c: 'var(--teal)' }]

export default function LanguageTest() {
    return <QuizPage id="language" icon="🌐" title="Trình độ ngôn ngữ" subtitle="Tự đánh giá khả năng tiếng Anh" questions={QS}
        onResult={(answers) => {
            const score = Math.round((answers.reduce((s, v) => s + v, 0) / (QS.length * 5)) * 100)
            const level = [...LEVELS].reverse().find(l => score >= l.min)
            return {
                title: level.l, score, desc: `Ước tính IELTS: ${score >= 90 ? '7.5+' : score >= 75 ? '6.5-7.0' : score >= 60 ? '5.5-6.0' : score >= 45 ? '4.5-5.0' : '< 4.5'}`,
                details: [{ label: 'Reading', value: `${Math.min(score + 5, 100)}/100`, color: level.c }, { label: 'Listening', value: `${score}/100`, color: level.c }, { label: 'Speaking', value: `${Math.max(score - 10, 0)}/100`, color: level.c }, { label: 'Writing', value: `${Math.max(score - 5, 0)}/100`, color: level.c }]
            }
        }} />
}
