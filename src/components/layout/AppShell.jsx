import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, ClipboardCheck, Globe, GraduationCap, Users, MessageCircle, Map, FileCheck, BookOpen, LogOut, Sparkles, FolderOpen, Star, User, ArrowLeftRight, FileText, Bot, Bell } from 'lucide-react'

const NAV = [
    {
        section: 'Tổng quan', items: [
            { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
            { to: '/profile', icon: User, label: 'Hồ sơ cá nhân' },
            { to: '/notifications', icon: Bell, label: 'Thông báo', badge: '3' },
            { to: '/ai', icon: Bot, label: 'AI Tư vấn' },
        ]
    },
    {
        section: 'Đánh giá', items: [
            { to: '/assessment', icon: ClipboardCheck, label: 'Assessment Center', badge: '12' },
            { to: '/assessment/results', icon: Sparkles, label: 'Kết quả 360°' },
        ]
    },
    {
        section: 'Khám phá', items: [
            { to: '/countries', icon: Globe, label: 'Thành phố Úc' },
            { to: '/countries/compare', icon: ArrowLeftRight, label: 'So sánh Thành phố' },
            { to: '/schools', icon: GraduationCap, label: 'Trường tại Úc' },
            { to: '/schools/compare', icon: ArrowLeftRight, label: 'So sánh Trường' },
            { to: '/community/reviews', icon: Star, label: 'School Reviews' },
        ]
    },
    {
        section: 'Kết nối', items: [
            { to: '/consultants', icon: Users, label: 'Tư vấn viên' },
            { to: '/community', icon: MessageCircle, label: 'Cộng đồng' },
        ]
    },
    {
        section: 'Kế hoạch', items: [
            { to: '/roadmap', icon: Map, label: 'Roadmap' },
            { to: '/applications', icon: FolderOpen, label: 'Application Tracker' },
            { to: '/visa', icon: FileCheck, label: 'Visa Guide' },
            { to: '/documents', icon: FileText, label: 'Document Templates' },
        ]
    },
]

export default function AppShell({ user, onLogout }) {
    const location = useLocation()
    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <div className="sidebar-brand-icon"><BookOpen size={20} /></div>
                    <div>
                        <div className="sidebar-brand-text">EduWise</div>
                        <div className="sidebar-brand-tag">Study in Australia 🇦🇺</div>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    {NAV.map(section => (
                        <div className="sidebar-section" key={section.section}>
                            <div className="sidebar-section-label">{section.section}</div>
                            {section.items.map(item => (
                                <NavLink key={item.to} to={item.to} className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}>
                                    <item.icon size={20} />
                                    {item.label}
                                    {item.badge && <span className="sidebar-item-badge">{item.badge}</span>}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>
                <div style={{ padding: '12px 10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="sidebar-item" onClick={onLogout} style={{ color: '#ef4444' }}>
                        <LogOut size={20} />Đăng xuất
                    </div>
                </div>
            </aside>
            <main className="main-content">
                <header className="topbar">
                    <div className="topbar-left">
                        <div className="topbar-title">{NAV.flatMap(s => s.items).find(i => location.pathname.startsWith(i.to))?.label || 'EduWise'}</div>
                    </div>
                    <div className="topbar-right">
                        <NavLink to="/notifications" style={{ position: 'relative', cursor: 'pointer' }}>
                            <Bell size={20} style={{ color: 'var(--N400)' }} />
                            <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, borderRadius: 50, background: 'var(--red)' }} />
                        </NavLink>
                        <NavLink to="/profile"><div className="topbar-avatar">{(user?.name || 'U')[0]}</div></NavLink>
                    </div>
                </header>
                <div className="page-content fade-in">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
