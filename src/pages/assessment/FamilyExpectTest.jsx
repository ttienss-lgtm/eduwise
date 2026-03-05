import QuizPage from '../../components/assessment/QuizPage'
const QS = [
    { q: 'Bố mẹ nghĩ gì về việc bạn du học?', options: ['Rất ủng hộ', 'Ủng hộ nhưng lo lắng', 'Trung lập', 'Phản đối'] },
    { q: 'Gia đình có thể hỗ trợ tài chính không?', options: ['Toàn phần', 'Một phần lớn', 'Một phần nhỏ', 'Không thể'] },
    { q: 'Bố mẹ muốn bạn học ngành gì?', options: ['Để bạn tự chọn', 'Gợi ý nhưng tôn trọng quyết định', 'Có ý kiến mạnh', 'Bắt buộc ngành cụ thể'] },
    { q: 'Gia đình muốn bạn đi nước nào?', options: ['Để bạn tự chọn', 'Gợi ý vài nước', 'Chỉ muốn nước cụ thể', 'Không muốn đi xa'] },
    { q: 'Bạn có anh chị em hoặc họ hàng đang ở nước ngoài?', options: ['Có, sẵn sàng hỗ trợ', 'Có nhưng xa', 'Không', 'Có và muốn đoàn tụ'] },
    { q: 'Bố mẹ có kinh nghiệm về du học không?', options: ['Có, đã du học hoặc đi nước ngoài', 'Có con/cháu đã du học', 'Biết qua bạn bè', 'Không có'] },
    { q: 'Áp lực gia đình về du học:', options: ['Không áp lực', 'Nhẹ', 'Trung bình', 'Cao'] },
    { q: 'Gia đình kỳ vọng bạn sau du học:', options: ['Phát triển bản thân', 'Có việc lương cao', 'Về VN đóng góp', 'PR ở nước ngoài'] },
]
export default function FamilyExpectTest() {
    return <QuizPage id="family" icon="🏠" title="Kỳ vọng gia đình" subtitle="Mức độ phù hợp giữa mong muốn bạn và gia đình" questions={QS}
        onResult={(answers) => {
            const score = Math.round(((QS.length * 3 - answers.reduce((s, v) => s + v, 0)) / (QS.length * 3)) * 100)
            return {
                title: score >= 80 ? 'Gia đình rất ủng hộ' : score >= 60 ? 'Gia đình ủng hộ có điều kiện' : score >= 40 ? 'Cần thuyết phục gia đình' : 'Cần giải quyết mâu thuẫn', score,
                desc: score >= 80 ? 'Gia đình là nguồn hỗ trợ mạnh mẽ cho hành trình du học' : 'Nên có buổi nói chuyện nghiêm túc với gia đình về kế hoạch'
            }
        }} />
}
