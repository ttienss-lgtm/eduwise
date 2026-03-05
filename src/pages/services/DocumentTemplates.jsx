import { useState } from 'react'
import { FileText, Download, Copy, CheckCircle2, Eye } from 'lucide-react'

const TEMPLATES = [
    {
        id: 'sop', title: '📝 Statement of Purpose (SOP)', desc: 'Mẫu SOP cho application trường quốc tế',
        content: `Dear Admissions Committee,

I am writing to express my strong interest in the [Program Name] at [University Name]. As a [Year] student majoring in [Major] at [Current University], I have developed a deep passion for [Field] and believe that your program offers the ideal environment to further my academic and professional growth.

[Paragraph 2: Academic Background]
During my undergraduate studies, I maintained a GPA of [X/10] while actively engaging in [relevant coursework/research]. My academic journey has been shaped by [key experiences], which have reinforced my desire to pursue advanced studies in [field].

[Paragraph 3: Professional/Research Experience]
Beyond the classroom, I have gained practical experience through [internships/projects/research]. At [Company/Lab], I [key achievement], which taught me [lesson learned]. This experience solidified my understanding of [topic] and motivated me to seek deeper knowledge.

[Paragraph 4: Why This Program]
I am particularly drawn to [University]'s [Program] because of [specific reasons: faculty, research groups, curriculum, facilities]. Professor [Name]'s research on [topic] aligns perfectly with my interests in [area].

[Paragraph 5: Future Goals]
Upon completing my studies, I plan to [career goals]. I believe the education and experiences at [University] will provide me with the skills and network necessary to achieve these goals and contribute meaningfully to [field/society].

Thank you for considering my application. I look forward to the opportunity to contribute to and grow within your academic community.

Sincerely,
[Your Full Name]`,
        tips: ['Tối đa 800-1000 từ', 'Cá nhân hóa cho từng trường', 'Kết nối kinh nghiệm với mục tiêu', 'Nêu cụ thể tại sao trường này', 'Không lặp CV — kể câu chuyện']
    },
    {
        id: 'cv', title: '📄 Academic CV', desc: 'Mẫu CV cho du học sinh',
        content: `[YOUR FULL NAME]
[Email] | [Phone] | [LinkedIn] | [City, Country]

═══ EDUCATION ═══
[University Name]                                    [Start - End]
[Degree], [Major]                                    GPA: [X/10]
• Relevant coursework: [List 4-6 courses]
• Thesis: [Title] (if applicable)

═══ RESEARCH EXPERIENCE ═══
[Lab/Group Name], [University]                       [Start - End]
Research Assistant
• [Describe research project and your role]
• [Key findings or contributions]
• [Tools/methods used]

═══ WORK EXPERIENCE ═══
[Company Name]                                       [Start - End]
[Position]
• [Achievement with quantifiable result]
• [Key responsibility]
• [Impact made]

═══ SKILLS ═══
Languages: Vietnamese (Native), English (IELTS [Score])
Technical: [Software, Programming, Tools]
Soft: [Leadership, Communication, Project Management]

═══ EXTRACURRICULAR ACTIVITIES ═══
• [Activity 1]: [Role], [Achievement]
• [Activity 2]: [Role], [Achievement]

═══ AWARDS & ACHIEVEMENTS ═══
• [Award Name], [Year]
• [Scholarship], [Year]

═══ PUBLICATIONS (if any) ═══
• [Author(s), "Title," Journal, Year]`,
        tips: ['Tối đa 2 trang', 'Dùng action verbs: Led, Developed, Achieved', 'Thêm số liệu cụ thể', 'Tùy chỉnh cho từng trường', 'Dùng font chuyên nghiệp (Inter, Calibri)']
    },
    {
        id: 'lor', title: '📬 Letter of Recommendation (LOR)', desc: 'Mẫu thư giới thiệu từ giáo viên/sếp',
        content: `[Date]

To the Admissions Committee,
[University Name]
[Department/Program]

Dear Committee Members,

I am writing to strongly recommend [Student Name] for admission to the [Program Name] at your esteemed institution. I have had the privilege of knowing [him/her] for [X years] in my capacity as [your title] at [your institution/company].

[Paragraph 2: Academic Performance]
[Student Name] was a student in my [Course Name] class during [semester/year]. [He/She] consistently demonstrated exceptional [qualities] and earned [grade/ranking]. Among the [number] students I have taught, [he/she] ranks in the top [X]%.

[Paragraph 3: Character & Skills]
What sets [Student Name] apart is [his/her] [specific qualities]. I recall [specific anecdote that demonstrates the student's abilities]. This experience showed [his/her] capacity for [skill/quality].

[Paragraph 4: Conclusion]
I believe [Student Name] possesses the academic ability, motivation, and character to excel in your program. I give [him/her] my highest recommendation without reservation.

Please do not hesitate to contact me if you require any additional information.

Sincerely,
[Your Name]
[Title, Department]
[Institution]
[Email] | [Phone]`,
        tips: ['Nhờ GV/sếp biết bạn rõ nhất', 'Cung cấp bản nháp cho họ tham khảo', 'Gửi request sớm (trước deadline 1 tháng)', 'Kèm CV và SOP để GV hiểu context', 'Nhờ 2-3 LOR từ nguồn khác nhau']
    },
    {
        id: 'essay', title: '✍️ Motivation Essay', desc: 'Bài luận động lực cho scholarship',
        content: `Title: Why I Want to Study Abroad

Growing up in [City, Vietnam], I always dreamed of [aspiration]. The turning point came when [pivotal experience that sparked interest in studying abroad].

[Paragraph 2: Challenge or Problem]
In Vietnam, I observed that [challenge in your field]. This motivated me to seek education abroad where I could [learn/develop/access] what is not readily available in my home country.

[Paragraph 3: Your Journey So Far]
To prepare for this journey, I have [steps taken: studied hard, learned language, gained experience]. My involvement in [activity] taught me [lesson], while my work at [company/project] showed me [insight].

[Paragraph 4: Why This Country/Program]
[Country/University] offers [specific advantages]. The [program feature] aligns with my goal to [objective]. I am inspired by [specific aspect of the program/country].

[Paragraph 5: Impact & Giving Back]
After completing my studies, I plan to return to Vietnam and [specific plan to contribute]. I envision [impact you want to make], leveraging the knowledge and experience gained abroad.

[Conclusion]
Studying abroad is not just about earning a degree — it is about becoming a global citizen who can bridge [your country] and the world. I am ready for this transformative journey.`,
        tips: ['Kể câu chuyện cá nhân thật', 'Cụ thể, không chung chung', 'Nêu rõ kế hoạch sau tốt nghiệp', 'Thể hiện passion thật sự', '500-1000 từ tùy yêu cầu']
    },
]

export default function DocumentTemplates() {
    const [active, setActive] = useState('sop')
    const [copied, setCopied] = useState(false)
    const t = TEMPLATES.find(t => t.id === active)

    const copy = () => {
        navigator.clipboard.writeText(t.content)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div>
            <div className="page-header"><h1 className="h1">📑 Document Templates</h1><p className="page-subtitle">Mẫu SOP, CV, LOR, Essay — sẵn sàng chỉnh sửa</p></div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                {TEMPLATES.map(t => <div key={t.id} className={`tag${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>{t.title}</div>)}
            </div>
            <div className="grid grid-3" style={{ gridTemplateColumns: '2fr 1fr' }}>
                <div className="card card-padded">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <h3 className="h3">{t.title}</h3>
                        <button className="btn btn-primary btn-sm" onClick={copy}>{copied ? <><CheckCircle2 size={14} />Đã copy</> : <><Copy size={14} />Copy mẫu</>}</button>
                    </div>
                    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'var(--font)', fontSize: 13, lineHeight: 1.8, color: 'var(--N700)', padding: 20, background: 'var(--N50)', borderRadius: 12, border: '1px solid var(--N200)', maxHeight: 600, overflow: 'auto' }}>{t.content}</pre>
                </div>
                <div>
                    <div className="card card-padded" style={{ marginBottom: 16 }}>
                        <h3 className="h3" style={{ marginBottom: 12 }}>💡 Tips viết {t.id.toUpperCase()}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {t.tips.map((tip, i) => <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--N600)' }}><CheckCircle2 size={16} style={{ color: 'var(--green)', flexShrink: 0, marginTop: 1 }} />{tip}</div>)}
                        </div>
                    </div>
                    <div className="card card-padded" style={{ background: 'var(--B50)', border: '1px solid var(--B100)' }}>
                        <h3 className="h3" style={{ marginBottom: 8 }}>🧑‍🏫 Cần review?</h3>
                        <p style={{ fontSize: 13, color: 'var(--N600)', marginBottom: 12 }}>Book consultant để nhận feedback chuyên sâu cho hồ sơ của bạn</p>
                        <a href="/consultants" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Book Review Session</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
