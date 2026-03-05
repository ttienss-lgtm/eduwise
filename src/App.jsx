import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import AIChatbot from './pages/AIChatbot'
import AssessmentHub from './pages/assessment/AssessmentHub'
import PersonalInfo from './pages/assessment/PersonalInfo'
import MBTITest from './pages/assessment/MBTITest'
import RIASECTest from './pages/assessment/RIASECTest'
import AcademicTest from './pages/assessment/AcademicTest'
import LanguageTest from './pages/assessment/LanguageTest'
import SoftSkillsTest from './pages/assessment/SoftSkillsTest'
import FinancialTest from './pages/assessment/FinancialTest'
import LifeGoalsTest from './pages/assessment/LifeGoalsTest'
import AdaptabilityTest from './pages/assessment/AdaptabilityTest'
import ReadinessTest from './pages/assessment/ReadinessTest'
import LearningStyleTest from './pages/assessment/LearningStyleTest'
import FamilyExpectTest from './pages/assessment/FamilyExpectTest'
import Results360 from './pages/assessment/Results360'
import Countries from './pages/explore/Countries'
import CountryCompare from './pages/explore/CountryCompare'
import Schools from './pages/explore/Schools'
import SchoolDetail from './pages/explore/SchoolDetail'
import SchoolCompare from './pages/explore/SchoolCompare'
import ConsultantList from './pages/consultants/ConsultantList'
import ConsultantProfile from './pages/consultants/ConsultantProfile'
import Community from './pages/community/Community'
import SchoolReviews from './pages/community/SchoolReviews'
import Roadmap from './pages/plan/Roadmap'
import VisaGuide from './pages/services/VisaGuide'
import ApplicationTracker from './pages/services/ApplicationTracker'
import DocumentTemplates from './pages/services/DocumentTemplates'

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('eduwise_user')
    return saved ? JSON.parse(saved) : null
  })
  const login = (u) => { setUser(u); localStorage.setItem('eduwise_user', JSON.stringify(u)) }
  const logout = () => { setUser(null); localStorage.removeItem('eduwise_user') }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth onLogin={login} />} />
      <Route element={<AppShell user={user} onLogout={logout} />}>
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/ai" element={<AIChatbot />} />
        <Route path="/assessment" element={<AssessmentHub />} />
        <Route path="/assessment/personal" element={<PersonalInfo />} />
        <Route path="/assessment/mbti" element={<MBTITest />} />
        <Route path="/assessment/riasec" element={<RIASECTest />} />
        <Route path="/assessment/academic" element={<AcademicTest />} />
        <Route path="/assessment/language" element={<LanguageTest />} />
        <Route path="/assessment/softskills" element={<SoftSkillsTest />} />
        <Route path="/assessment/financial" element={<FinancialTest />} />
        <Route path="/assessment/lifegoals" element={<LifeGoalsTest />} />
        <Route path="/assessment/adaptability" element={<AdaptabilityTest />} />
        <Route path="/assessment/readiness" element={<ReadinessTest />} />
        <Route path="/assessment/learnstyle" element={<LearningStyleTest />} />
        <Route path="/assessment/family" element={<FamilyExpectTest />} />
        <Route path="/assessment/results" element={<Results360 />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/compare" element={<CountryCompare />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/schools/compare" element={<SchoolCompare />} />
        <Route path="/schools/:id" element={<SchoolDetail />} />
        <Route path="/consultants" element={<ConsultantList />} />
        <Route path="/consultants/:id" element={<ConsultantProfile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/reviews" element={<SchoolReviews />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/visa" element={<VisaGuide />} />
        <Route path="/applications" element={<ApplicationTracker />} />
        <Route path="/documents" element={<DocumentTemplates />} />
      </Route>
    </Routes>
  )
}
