---
name: sa-app
description: "Study Abroad App — Framework xây dựng app EduWise. Bao gồm: Component library, Assessment Engine, Design System (Lark-inspired), Quiz system, Routing, Deploy."
---

# Study Abroad App — L2

> Skill này chứa framework để build app EduWise.
> Đọc skill này khi cần build page/component mới.

## 1. Tech Stack

| Thành phần | Công nghệ |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Vanilla CSS (Lark-inspired) |
| Icons | Lucide React |
| Routing | React Router DOM v7 |
| State | useState + localStorage |
| Font | Inter (Google Fonts) |

## 2. Design System (Lark-inspired)

### Colors
```css
--N50: #f8f9fc;  --N100: #f0f1f5;  --N200: #e1e3ea;
--N300: #c4c8d4;  --N400: #8f96a8;  --N500: #6b7280;
--N600: #4b5563;  --N800: #1f2937;  --N900: #111827;
--B400: #3b82f6;  --B500: #2563eb;  --B50: #eff6ff;
--green: #10b981;  --orange: #f59e0b;  --red: #ef4444;
--purple: #8b5cf6;  --teal: #14b8a6;
--sidebar-bg: #1e293b;  --card-radius: 12px;
```

### Typography
- Font: Inter, system-ui, sans-serif
- H1: 600 24px/32px | H2: 600 18px/26px | H3: 600 15px/22px
- Body: 400 14px/22px | Caption: 400 12px/18px

## 3. Folder Structure

```
apps/web/src/
├── App.jsx            # Router + Layout
├── index.css          # Design tokens
├── pages/             # Page components
├── components/        # Reusable components
│   ├── layout/        # Sidebar, TopBar
│   ├── assessment/    # QuizEngine, RadarChart
│   ├── common/        # Button, Card, Modal, Tag
│   └── ...
├── data/              # Static data (tests, countries, schools)
└── hooks/             # Custom hooks
```

## 4. Assessment Engine

### Quiz Component Pattern
```jsx
// Each test exports: questions[], scoring(), resultType
// QuizEngine renders questions, tracks answers, calculates score
<QuizEngine
  questions={mbtiQuestions}
  onComplete={(answers) => saveResult('mbti', answers)}
/>
```

### 12 Tests
1. Personal Info (form) → Demographics
2. MBTI (40 MC) → 16 types
3. RIASEC (30 rating) → Career interests
4. Academic (form) → Score /100
5. Language (input/test) → Level A1→C2
6. Soft Skills (25 situational) → 8-axis radar
7. Financial (10 MC) → Budget tier
8. Life Goals (20 ranking) → Priorities
9. Adaptability (15 scenario) → Readiness /100
10. Readiness (15 checklist) → Level
11. Learning Style (20 pref) → VARK
12. Family (10 MC) → Support score

## 5. UI Components

| Component | Dùng cho |
|---|---|
| `Sidebar` | Dark nav, collapsible sections |
| `TopBar` | Breadcrumb, user avatar |
| `Card` | Content containers |
| `Button` | Primary, outline, ghost variants |
| `Badge` | Status indicators |
| `Progress` | Linear + circular progress |
| `RadarChart` | Assessment results |
| `QuizEngine` | Assessment questions |
| `Modal` | Overlays |
| `Tag` | Categories, filters |
