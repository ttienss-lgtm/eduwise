// Shared data for consultants and services across the app

export const SERVICE_CATEGORIES = [
    { key: 'starter', label: '☕ Khám phá', color: 'var(--teal)', bg: 'var(--teal-bg)', desc: 'Buổi chat ngắn để tìm hiểu nhanh' },
    { key: 'review', label: '📋 Review & Đánh giá', color: 'var(--B500)', bg: 'var(--B50)', desc: 'Mentor review hồ sơ, SOP, CV' },
    { key: 'planning', label: '🎯 Tư vấn Chiến lược', color: 'var(--purple)', bg: 'var(--purple-bg)', desc: 'Lập kế hoạch chi tiết' },
    { key: 'package', label: '🚀 Gói Đồng hành', color: 'var(--orange)', bg: 'var(--orange-bg)', desc: 'Mentor hỗ trợ dài hạn từ A-Z' },
]

export const ALL_SERVICES = [
    // === 1. COFFEE CHAT ===
    {
        id: 'coffee-chat',
        name: 'Coffee Chat',
        icon: '☕',
        category: 'starter',
        duration: '30 phút',
        price: 200000,
        priceLabel: '200K',
        tagline: 'Hỏi đáp nhanh 1-1 với mentor',
        desc: 'Buổi trò chuyện ngắn để hỏi bất kỳ điều gì về du học Úc. Phù hợp nếu bạn mới bắt đầu tìm hiểu và muốn nghe chia sẻ thực tế.',
        inputs: [
            'Danh sách câu hỏi bạn muốn hỏi (gửi trước 24h)',
            'Thông tin cơ bản: ngành học hiện tại, GPA, trình độ tiếng Anh',
        ],
        outputs: [
            'Giải đáp thắc mắc về cuộc sống, chi phí, học tập tại Úc',
            'Lời khuyên ban đầu về hướng đi phù hợp',
            'Gợi ý tài liệu/nguồn tham khảo để tìm hiểu thêm',
        ],
    },
    // === 2. PROFILE REVIEW ===
    {
        id: 'profile-review',
        name: 'Profile Review',
        icon: '📋',
        category: 'review',
        duration: '60 phút',
        price: 500000,
        priceLabel: '500K',
        tagline: 'Đánh giá hồ sơ & chance vào trường Úc',
        desc: 'Mentor đánh giá toàn diện hồ sơ du học của bạn: bảng điểm, CV, ngoại khóa. Cho ý kiến về chance vào Go8 và gợi ý trường phù hợp.',
        inputs: [
            'Bảng điểm đại học / THPT (scan hoặc ảnh chụp)',
            'CV hiện tại (nếu có)',
            'Điểm IELTS/PTE (nếu đã thi)',
            'Danh sách 3-5 trường mục tiêu',
        ],
        outputs: [
            'Báo cáo đánh giá hồ sơ: điểm mạnh, điểm cần cải thiện',
            'Đánh giá chance (%) vào từng trường mục tiêu',
            'Danh sách 5-8 trường Reach/Match/Safety phù hợp',
            'Action plan cụ thể để nâng cao hồ sơ',
        ],
    },
    // === 3. SOP / ESSAY REVIEW ===
    {
        id: 'sop-review',
        name: 'SOP / Essay Review',
        icon: '✍️',
        category: 'review',
        duration: '60 phút',
        price: 500000,
        priceLabel: '500K',
        tagline: 'Review & feedback Statement of Purpose',
        desc: 'Mentor review chi tiết SOP, Personal Statement hoặc Motivation Letter. Góp ý về structure, nội dung, và cách highlight điểm mạnh.',
        inputs: [
            'Bản nháp SOP hoặc Personal Statement (gửi trước 48h)',
            'Thông tin trường/chương trình đang apply',
            'Background: kinh nghiệm làm việc, ngoại khóa, mục tiêu',
        ],
        outputs: [
            'SOP được review với comments chi tiết (track changes)',
            'Gợi ý cải thiện cấu trúc và nội dung',
            'Tips viết SOP cho từng trường Úc cụ thể',
            '1 lần review bản chỉnh sửa (gửi lại trong 7 ngày)',
        ],
    },
    // === 4. SCHOLARSHIP STRATEGY ===
    {
        id: 'scholarship-strategy',
        name: 'Scholarship Strategy',
        icon: '🎓',
        category: 'review',
        duration: '60 phút',
        price: 500000,
        priceLabel: '500K',
        tagline: 'Tìm & lên chiến lược apply học bổng',
        desc: 'Mentor giúp bạn tìm học bổng phù hợp, lên timeline apply, và review scholarship essays. Tập trung vào học bổng trường Úc và bên ngoài.',
        inputs: [
            'Bảng điểm + GPA',
            'CV và list hoạt động ngoại khóa',
            'Danh sách trường đang quan tâm',
            'Tình hình tài chính (ngân sách dự kiến)',
        ],
        outputs: [
            'Danh sách 10-15 học bổng phù hợp (deadline, yêu cầu, giá trị)',
            'Timeline apply học bổng chi tiết',
            'Review scholarship essay/application',
            'Tips tăng chance được học bổng từ người đã nhận',
        ],
    },
    // === 5. CAREER PATHWAY ===
    {
        id: 'career-pathway',
        name: 'Career Pathway',
        icon: '🗺️',
        category: 'planning',
        duration: '90 phút',
        price: 800000,
        priceLabel: '800K',
        tagline: 'Lộ trình nghề nghiệp & PR tại Úc',
        desc: 'Lập lộ trình dài hạn: chọn ngành → trường → graduate job → PR. Phân tích SOL list, state nomination, và cơ hội việc làm theo ngành.',
        inputs: [
            'Ngành học hiện tại hoặc mong muốn',
            'Mục tiêu dài hạn: định cư hay trải nghiệm?',
            'Kinh nghiệm làm việc (nếu có)',
            'Kết quả Assessment trên EduWise (nếu đã làm)',
        ],
        outputs: [
            'Career roadmap 5 năm cá nhân hóa (PDF)',
            'Phân tích ngành trên SOL/MLTSSL list',
            'Gợi ý trường + chương trình phù hợp mục tiêu career',
            'Lộ trình PR cụ thể: visa 500 → 485 → 189/190/491',
            'Tips networking và tìm việc tại Úc',
        ],
    },
    // === 6. VISA & PR CONSULTATION ===
    {
        id: 'visa-pr',
        name: 'Visa & PR Consultation',
        icon: '🛂',
        category: 'planning',
        duration: '60 phút',
        price: 600000,
        priceLabel: '600K',
        tagline: 'Tư vấn visa du học & lộ trình PR',
        desc: 'Tư vấn chi tiết Visa Subclass 500 (student), 485 (post-study work), và PR pathway. Bao gồm checklist giấy tờ, GTE Statement, và financial proof.',
        inputs: [
            'CoE (Confirmation of Enrolment) hoặc Offer Letter',
            'Tình hình tài chính gia đình',
            'Lịch sử visa (nếu đã apply trước)',
            'Mục tiêu: chỉ du học hay muốn PR?',
        ],
        outputs: [
            'Checklist giấy tờ visa Subclass 500 (11 mục)',
            'Template GTE Statement được customize',
            'Hướng dẫn chứng minh tài chính (AUD 24,505/năm)',
            'Lộ trình PR chi tiết: điểm số, state nomination, timeline',
            'Q&A giải đáp case cá nhân',
        ],
    },
    // === 7. FINANCIAL PLANNING ===
    {
        id: 'financial-plan',
        name: 'Financial Planning',
        icon: '💰',
        category: 'planning',
        duration: '60 phút',
        price: 400000,
        priceLabel: '400K',
        tagline: 'Lập budget du học Úc chi tiết',
        desc: 'Lên kế hoạch tài chính: so sánh học phí theo trường/thành phố, chi phí sinh hoạt, nguồn thu nhập part-time, và chiến lược tiết kiệm.',
        inputs: [
            'Ngân sách gia đình có thể hỗ trợ',
            'Danh sách trường đang quan tâm',
            'Thành phố muốn sống (Sydney/Melbourne/Brisbane/...)',
            'Có muốn đi làm part-time không?',
        ],
        outputs: [
            'Bảng tính chi phí du học 2-3 năm (Excel)',
            'So sánh chi phí giữa các thành phố Úc',
            'Chiến lược tiết kiệm & part-time income',
            'Hướng dẫn viết GTE financial section',
            'Gợi ý học bổng/fee waiver nếu budget thấp',
        ],
    },
    // === 8. SCHOOL SELECTION ===
    {
        id: 'school-selection',
        name: 'School Selection Strategy',
        icon: '🏫',
        category: 'planning',
        duration: '60 phút',
        price: 500000,
        priceLabel: '500K',
        tagline: 'Phân tích & chọn trường phù hợp nhất',
        desc: 'Phân tích deep các trường Úc theo tiêu chí cá nhân: ranking, học phí, scholarship, placement, PR-friendly, cộng đồng VN.',
        inputs: [
            'Profile: GPA, IELTS, ngành học',
            'Ưu tiên cá nhân: ranking? chi phí? PR? location?',
            'Budget dự kiến',
            'Kết quả Assessment trên EduWise',
        ],
        outputs: [
            'Shortlist 5-8 trường Reach/Match/Safety (PDF)',
            'So sánh chi tiết từng trường theo 8 tiêu chí',
            'Phân tích scholarship availability',
            'Timeline apply tối ưu cho từng trường',
        ],
    },
    // === 9. FULL MENTORING ===
    {
        id: 'full-mentoring',
        name: 'Full Mentoring',
        icon: '🎯',
        category: 'package',
        duration: '4 tuần (4×60 phút)',
        price: 2000000,
        priceLabel: '2M',
        tagline: 'Đồng hành 4 tuần từ chọn trường đến apply',
        desc: '4 buổi 1-on-1 trải dài 4 tuần. Mentor hỗ trợ chọn trường, viết SOP, chuẩn bị hồ sơ, và luyện phỏng vấn scholarship. Bao gồm review không giới hạn qua chat.',
        inputs: [
            'Toàn bộ hồ sơ: bảng điểm, CV, IELTS/PTE',
            'Mục tiêu du học và career goal',
            'Budget tài chính',
            'Cam kết tham gia đủ 4 buổi + hoàn thành bài tập',
        ],
        outputs: [
            'Buổi 1: Đánh giá hồ sơ + Shortlist trường',
            'Buổi 2: Viết SOP/Personal Statement (review 2 lần)',
            'Buổi 3: Chuẩn bị hồ sơ apply + Scholarship essays',
            'Buổi 4: Mock interview scholarship + Pre-departure checklist',
            'Chat support không giới hạn trong 4 tuần',
            'Tổng kết: Application Package hoàn chỉnh',
        ],
    },
    // === 10. VIP ALL-IN-ONE ===
    {
        id: 'vip-all-in-one',
        name: 'VIP All-in-One',
        icon: '👑',
        category: 'package',
        duration: '8 tuần (8×60 phút)',
        price: 5000000,
        priceLabel: '5M',
        tagline: 'Trọn gói từ Assessment → Offer → Bay đi Úc',
        desc: 'Gói premium nhất: mentor đồng hành full journey từ đánh giá năng lực → chọn trường → apply → scholarship → visa → pre-departure. Bao gồm tất cả dịch vụ khác.',
        inputs: [
            'Toàn bộ giấy tờ cá nhân và học tập',
            'GTE draft + Financial documents',
            'Thông tin gia đình (cho visa application)',
            'Cam kết 8 tuần + hoàn thành bài tập',
        ],
        outputs: [
            'Buổi 1-2: Assessment toàn diện + Career roadmap',
            'Buổi 3-4: Chọn trường + Viết SOP (review 3 lần)',
            'Buổi 5: Apply trường + Scholarship strategy',
            'Buổi 6: Visa preparation + GTE Statement',
            'Buổi 7: Financial planning + Accommodation',
            'Buổi 8: Pre-departure checklist + Q&A',
            'Chat support không giới hạn trong 8 tuần',
            'Priority support: trả lời trong 4 giờ',
            'Bonus: kết nối với alumni network tại Úc',
        ],
    },
]

export const CONSULTANTS = [
    {
        id: 'khoi',
        name: 'Trần Minh Khôi',
        school: 'MBA — University of Melbourne',
        role: 'Product Manager @ Canva (Sydney)',
        rating: 4.9,
        sessions: 230,
        tags: ['🇦🇺 Melbourne', 'Business', 'MBA', 'PR tips'],
        bio: 'Tốt nghiệp MBA tại UoM năm 2020. Hiện tại là PM tại Canva Sydney. Đã tư vấn cho 230+ học sinh thành công du học Úc. Chuyên ngành Business, MBA, và PR pathway.',
        expertise: ['Business', 'MBA', 'PR pathway', 'Scholarship', 'Go8'],
        serviceIds: ['coffee-chat', 'profile-review', 'sop-review', 'scholarship-strategy', 'career-pathway', 'school-selection', 'financial-plan', 'full-mentoring', 'vip-all-in-one'],
        availability: [
            { day: 'Thứ 2', slots: ['09:00', '10:00', '11:00'] },
            { day: 'Thứ 4', slots: ['14:00', '15:00', '16:00'] },
            { day: 'Thứ 6', slots: ['09:00', '10:00'] },
            { day: 'Thứ 7', slots: ['10:00', '11:00'] },
        ],
        reviews: [
            { user: 'Nguyễn A', rating: 5, text: 'Anh Khôi tư vấn rất tận tình, giúp em chọn đúng trường và apply thành công UoM!' },
            { user: 'Trần B', rating: 5, text: 'Full mentoring rất đáng tiền, anh review SOP 3 lần!' },
            { user: 'Lê C', rating: 4, text: 'Coffee chat hữu ích, biết được nhiều tips PR Australia.' },
        ],
        color: 'linear-gradient(135deg,var(--B500),var(--purple))'
    },
    {
        id: 'vy',
        name: 'Nguyễn Thảo Vy',
        school: 'Master IT — UNSW Sydney',
        role: 'Software Engineer @ Atlassian',
        rating: 4.8,
        sessions: 178,
        tags: ['🇦🇺 Sydney', 'IT', 'Tech Career', 'PR pathway'],
        bio: 'SWE tại Atlassian, tốt nghiệp UNSW 2021. Chuyên tư vấn du học ngành IT/CS, tìm việc tech và PR qua skilled occupation. Đã giúp 50+ bạn land tech job tại Úc.',
        expertise: ['IT', 'Computer Science', 'Tech Career', 'PR pathway', 'Sydney'],
        serviceIds: ['coffee-chat', 'profile-review', 'sop-review', 'career-pathway', 'visa-pr', 'school-selection', 'full-mentoring', 'vip-all-in-one'],
        availability: [
            { day: 'Thứ 3', slots: ['18:00', '19:00', '20:00'] },
            { day: 'Thứ 5', slots: ['18:00', '19:00'] },
            { day: 'Chủ nhật', slots: ['09:00', '10:00', '11:00'] },
        ],
        reviews: [
            { user: 'Hoàng D', rating: 5, text: 'Chị Vy hướng dẫn career pathway cho IT rất thực tế, em đã pass được grad program Atlassian!' },
            { user: 'Phạm E', rating: 5, text: 'Profile review giúp em rất nhiều. Biết được mình match trường nào nhất.' },
        ],
        color: 'linear-gradient(135deg,var(--teal),var(--B500))'
    },
    {
        id: 'nam',
        name: 'Lê Hoàng Nam',
        school: 'Bachelor Engineering — UQ Brisbane',
        role: 'Civil Engineer @ AECOM',
        rating: 4.9,
        sessions: 145,
        tags: ['🇦🇺 Brisbane', 'Engineering', 'Scholarship', 'Regional PR'],
        bio: 'Civil Engineer tại AECOM Brisbane. Đã PR thành công qua regional pathway (Subclass 491). Từng nhận học bổng UQ International. Chuyên tư vấn Engineering và regional PR.',
        expertise: ['Engineering', 'Scholarship', 'Regional PR', 'Brisbane', 'Skills Assessment'],
        serviceIds: ['coffee-chat', 'profile-review', 'sop-review', 'scholarship-strategy', 'career-pathway', 'visa-pr', 'financial-plan', 'full-mentoring'],
        availability: [
            { day: 'Thứ 2', slots: ['18:00', '19:00'] },
            { day: 'Thứ 4', slots: ['18:00', '19:00'] },
            { day: 'Thứ 7', slots: ['09:00', '10:00', '11:00'] },
        ],
        reviews: [
            { user: 'Trịnh F', rating: 5, text: 'Anh Nam giúp em apply UQ scholarship thành công! Rất am hiểu về regional PR.' },
            { user: 'Vũ G', rating: 5, text: 'Visa consultation rất chi tiết, anh giải thích rõ từng step.' },
        ],
        color: 'linear-gradient(135deg,var(--green),var(--teal))'
    },
    {
        id: 'ha',
        name: 'Phạm Thu Hà',
        school: 'Master Nursing — Deakin Melbourne',
        role: 'Registered Nurse @ Austin Health',
        rating: 4.7,
        sessions: 98,
        tags: ['🇦🇺 Melbourne', 'Nursing', 'Health', 'PR đã xong'],
        bio: 'RN tại Austin Health Melbourne, đã PR thành công qua ngành Nursing. Chuyên tư vấn lộ trình Nursing từ VN đến Úc, AHPRA registration, và clinical placement.',
        expertise: ['Nursing', 'Health Science', 'AHPRA', 'PR pathway', 'Melbourne'],
        serviceIds: ['coffee-chat', 'profile-review', 'sop-review', 'career-pathway', 'visa-pr', 'financial-plan', 'school-selection', 'full-mentoring', 'vip-all-in-one'],
        availability: [
            { day: 'Thứ 3', slots: ['08:00', '09:00'] },
            { day: 'Thứ 6', slots: ['14:00', '15:00', '16:00'] },
            { day: 'Chủ nhật', slots: ['10:00', '11:00'] },
        ],
        reviews: [
            { user: 'Mai H', rating: 5, text: 'Chị Hà hướng dẫn AHPRA registration rất chi tiết, tiết kiệm em rất nhiều thời gian!' },
            { user: 'Đặng I', rating: 4, text: 'Career pathway cho Nursing rất rõ ràng, biết chính xác cần làm gì.' },
        ],
        color: 'linear-gradient(135deg,var(--pink),var(--purple))'
    },
]

export function getServiceById(id) {
    return ALL_SERVICES.find(s => s.id === id)
}

export function getServicesByCategory(category) {
    return ALL_SERVICES.filter(s => s.category === category)
}

export function getConsultantServices(consultant) {
    return consultant.serviceIds.map(id => getServiceById(id)).filter(Boolean)
}

export function getConsultantsForService(serviceId) {
    return CONSULTANTS.filter(c => c.serviceIds.includes(serviceId))
}

export function formatPrice(price) {
    if (price >= 1000000) return `${price / 1000000}M VND`
    return `${price / 1000}K VND`
}
