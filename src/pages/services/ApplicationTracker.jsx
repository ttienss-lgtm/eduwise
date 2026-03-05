import { useState } from 'react'
import { Plus, GripVertical, ExternalLink, Trash2 } from 'lucide-react'

const INITIAL = [
    { id: 1, school: 'University of Melbourne', country: '🇦🇺', program: 'Master of Management', status: 'applied', deadline: 'Jan 2027', notes: 'SOP sent' },
    { id: 2, school: 'University of Toronto', country: '🇨🇦', program: 'MSc Computer Science', status: 'preparing', deadline: 'Nov 2026', notes: 'Need GRE score' },
    { id: 3, school: 'Waseda University', country: '🇯🇵', program: 'Master of Engineering', status: 'reviewing', deadline: 'Dec 2026', notes: 'MEXT scholarship' },
]

const COLS = [
    { key: 'preparing', label: '📝 Chuẩn bị', color: 'var(--N500)', bg: 'var(--N100)' },
    { key: 'applied', label: '📤 Đã nộp', color: 'var(--B500)', bg: 'var(--B50)' },
    { key: 'reviewing', label: '🔍 Đang xét', color: 'var(--orange)', bg: 'var(--orange-bg)' },
    { key: 'offer', label: '✅ Nhận offer', color: 'var(--green)', bg: 'var(--green-bg)' },
    { key: 'accepted', label: '🎉 Chấp nhận', color: 'var(--purple)', bg: 'var(--purple-bg)' },
]

export default function ApplicationTracker() {
    const [apps, setApps] = useState(INITIAL)
    const move = (id, newStatus) => setApps(apps.map(a => a.id === id ? { ...a, status: newStatus } : a))
    const remove = (id) => setApps(apps.filter(a => a.id !== id))

    return (
        <div>
            <div className="page-header">
                <div className="page-header-row"><h1 className="h1">📂 Application Tracker</h1></div>
                <p className="page-subtitle">Theo dõi tiến độ nộp hồ sơ — Kanban style</p>
            </div>
            <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 16 }}>
                {COLS.map(col => {
                    const items = apps.filter(a => a.status === col.key)
                    return (
                        <div key={col.key} style={{ minWidth: 260, flex: '1' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, padding: '8px 12px', background: col.bg, borderRadius: 8 }}>
                                <span style={{ fontWeight: 600, fontSize: 14, color: col.color }}>{col.label}</span>
                                <span className="badge" style={{ background: col.color, color: 'white', fontSize: 11 }}>{items.length}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {items.map(app => (
                                    <div className="card card-padded" key={app.id} style={{ padding: 16 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 6 }}>
                                            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--N900)' }}>{app.country} {app.school}</div>
                                            <button className="btn btn-ghost btn-sm" style={{ padding: 4 }} onClick={() => remove(app.id)}><Trash2 size={14} /></button>
                                        </div>
                                        <div style={{ fontSize: 13, color: 'var(--N500)', marginBottom: 8 }}>{app.program}</div>
                                        <div style={{ fontSize: 12, color: 'var(--N400)', marginBottom: 8 }}>⏰ Deadline: {app.deadline}</div>
                                        {app.notes && <div style={{ fontSize: 12, padding: '4px 8px', background: 'var(--N50)', borderRadius: 4, color: 'var(--N600)' }}>{app.notes}</div>}
                                        <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
                                            {COLS.filter(c => c.key !== col.key).map(c => (
                                                <button key={c.key} className="btn btn-ghost btn-sm" style={{ fontSize: 11, padding: '2px 6px', color: c.color }} onClick={() => move(app.id, c.key)}>→ {c.label.slice(2)}</button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {items.length === 0 && <div style={{ padding: 24, textAlign: 'center', fontSize: 13, color: 'var(--N400)', border: '2px dashed var(--N200)', borderRadius: 12 }}>Kéo application vào đây</div>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
