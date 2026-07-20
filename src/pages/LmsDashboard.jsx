import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './Lms.css'

const CLASS_META = {
  arabiyyah: { label: 'Arabiyyah', icon: '✍️' },
  hadeeth: { label: 'Hadeeth', icon: '📜' },
}

export default function LmsDashboard({ user }) {
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])
  const [progressByCourse, setProgressByCourse] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const { data: courseData, error } = await supabase.from('lms_courses').select('*').order('class_id').order('level').order('sort_order')
        if (error) throw error
        setCourses(courseData || [])

        if (user && courseData?.length > 0) {
          const { data: sections } = await supabase.from('lms_sections').select('id, course_id').eq('status', 'published')
          const { data: items } = await supabase.from('lms_items').select('id, section_id').eq('status', 'published')
          const sectionToCourse = Object.fromEntries((sections || []).map(s => [s.id, s.course_id]))
          const itemToCourse = Object.fromEntries((items || []).map(i => [i.id, sectionToCourse[i.section_id]]))
          const itemIds = (items || []).map(i => i.id)

          const { data: progress } = itemIds.length > 0
            ? await supabase.from('lms_item_progress').select('item_id, completed_at').eq('user_id', user.id).in('item_id', itemIds)
            : { data: [] }

          const totals = {}
          const completed = {}
          ;(items || []).forEach(i => {
            const courseId = itemToCourse[i.id]
            totals[courseId] = (totals[courseId] || 0) + 1
          })
          ;(progress || []).filter(p => p.completed_at).forEach(p => {
            const courseId = itemToCourse[p.item_id]
            completed[courseId] = (completed[courseId] || 0) + 1
          })

          const map = {}
          Object.keys(totals).forEach(courseId => {
            map[courseId] = { total: totals[courseId], completed: completed[courseId] || 0 }
          })
          setProgressByCourse(map)
        }
      } catch (err) {
        console.error('Failed to load LMS dashboard:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user])

  const filtered = courses.filter(c => filter === 'all' || c.class_id === filter)

  if (!user) return null

  return (
    <div className="page-content">
      <h1 className="page-title">My Courses</h1>
      <p className="page-subtitle">دَوْرَاتِي — Structured, self-paced courses in Arabiyyah and Hadeeth</p>

      <div className="quiz-level-row" style={{ marginTop: 16, marginBottom: 8 }}>
        {['all', 'arabiyyah', 'hadeeth'].map(f => (
          <button
            key={f}
            className={`quiz-level-btn ${filter === f ? 'quiz-level-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All' : CLASS_META[f].label}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-secondary)' }}>Loading…</p>
      ) : filtered.length === 0 ? (
        <div className="quiz-select-card card" style={{ marginTop: 20 }}>
          <p>No courses published yet{filter !== 'all' ? ` for ${CLASS_META[filter].label}` : ''}.</p>
        </div>
      ) : (
        <div className="lms-course-grid">
          {filtered.map(c => {
            const prog = progressByCourse[c.id]
            const percent = prog && prog.total > 0 ? Math.round((prog.completed / prog.total) * 100) : 0
            return (
              <button key={c.id} className="lms-course-card" onClick={() => navigate(`/lms/${c.id}`)}>
                <div className="lms-course-cover">
                  {CLASS_META[c.class_id]?.icon || '📘'}
                  <span className="lms-course-level-badge">{c.level}</span>
                </div>
                <div className="lms-course-body">
                  <span className="lms-course-class-tag">{CLASS_META[c.class_id]?.label || c.class_id}</span>
                  <p className="lms-course-title">{c.title}</p>
                  {c.teacher_name && <p className="lms-course-teacher">Taught by {c.teacher_name}</p>}
                  <div className="lms-progress-bar-track">
                    <div className="lms-progress-bar-fill" style={{ width: `${percent}%` }} />
                  </div>
                  <span className="lms-progress-label">
                    {prog ? `${percent}% complete` : 'Not started'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}