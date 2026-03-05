---
name: sa-system
description: "Study Abroad System — Kiến trúc hệ thống EduWise. Bao gồm: Auth, Assessment Engine, School Matching, Consultant Marketplace, Community, Commission Tracking, Roadmap Builder."
---

# Study Abroad System — L1

> Skill này chứa kiến trúc tổng thể cho EduWise platform.
> Khi dev bất kỳ phần nào, đọc skill này để nắm tổng thể.

## Tổng quan

EduWise = Nền tảng du học thông minh, kết hợp:
- 🧪 **Assessment** — 12 bài test đánh giá toàn diện
- 🤖 **AI Matching** — Gợi ý quốc gia, ngành, trường
- 🧑‍🏫 **Marketplace** — Kết nối với consultants (cựu du học sinh)
- 👥 **Community** — Chia sẻ từ du học sinh đang ở nước ngoài
- 📋 **Roadmap** — Kế hoạch cá nhân hóa + gap analysis
- 🏢 **Services** — Gói dịch vụ trọn gói + commission từ trường

## Business Model: 3-Sided Marketplace

- **Students** (Free): Dùng assessment, nhận AI recommendation
- **Consultants** (Partner): Bán gói tư vấn, EduWise lấy 15-25% fee
- **Schools** (B2B): Trả commission $500-3000/student enrolled

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite 7 |
| Styling | Vanilla CSS (Lark-inspired Design System) |
| Icons | Lucide React |
| Backend | Supabase (Auth + DB + Storage) |
| Hosting | Vercel |
| Font | Inter (Google Fonts) |

## User Roles

| Role | Quyền |
|---|---|
| Student | Assessment, view schools, book consultant, community |
| Consultant | Profile, services, calendar, earnings, chat |
| Admin | Full platform management, analytics, commission |

## User Flow (10 Steps)

1. Landing → Register
2. Onboarding (thông tin cơ bản)
3. Assessment Center (12 tests)
4. Results 360° (radar chart + AI recommendation)
5. Country + School Explorer
6. Gap Analysis + Roadmap
7. Consultant Marketplace (book sessions)
8. Community (connect with students abroad)
9. Application + Visa Guide
10. EduWise Final Service (commission)

## Database Schema (Supabase)

- `users` — id, email, role, profile
- `assessments` — id, user_id, test_type, answers, score
- `assessment_results` — id, user_id, radar_data, ai_recommendation
- `consultants` — id, user_id, bio, school, expertise, rating
- `consultant_services` — id, consultant_id, name, duration, price
- `bookings` — id, student_id, consultant_id, service_id, status
- `reviews` — id, booking_id, rating, comment
- `schools` — id, name, country, ranking, tuition, requirements
- `user_school_matches` — id, user_id, school_id, compatibility_score
- `roadmaps` — id, user_id, milestones, tasks, timeline
- `community_posts` — id, user_id, country, content, likes
- `commissions` — id, school_id, student_id, amount, status

## Khi nào dùng skill này?

- Khi dev bất kỳ phần nào của EduWise
- Khi thiết kế database schema cho features mới
- Khi cần hiểu user flow / business model
- Khi cần review kiến trúc hệ thống tổng

## Kết hợp với skill khác

- **sa-app** (L2) — Framework build app, components, design system
- **ielts** (L3) — Domain: IELTS Prep course
- **writing** (L3) — Domain: Academic Writing course
