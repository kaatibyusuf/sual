import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import './MarketplaceCatalog.css'

const FILTERS = [
  { key: 'all', label: 'All Courses' },
  { key: 'arabic', label: 'Arabic' },
  { key: 'islamic_studies', label: 'Islamic Studies' },
]

function formatDuration(totalSeconds) {
  if (!totalSeconds) return null
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.round((totalSeconds % 3600) / 60)
  if (hours === 0) return `${minutes}m`
  if (minutes === 0) return `${hours}h`
  return `${hours}h ${minutes}m`
}

function formatPrice(kobo, currency) {
  const major = kobo / 100
  const symbol = currency === 'NGN' ? '₦' : currency + ' '
  return `${symbol}${major.toLocaleString()}`
}

export default function MarketplaceCatalog({ user }) {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  const [cartCourseIds, setCartCourseIds] = useState(new Set())
  const [ownedCourseIds, setOwnedCourseIds] = useState(new Set())
  const [cartBusyId, setCartBusyId] = useState(null)

  const loadCourses = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.rpc('get_public_marketplace_courses')
      if (error) throw error
      setCourses(data || [])
    } catch (err) {
      console.error('Failed to load marketplace courses:', err)
      setError('Could not load courses right now.')
    } finally {
      setLoading(false)
    }
  }

  const loadCartAndOwnership = async () => {
    if (!user) return
    const [{ data: cartRows }, { data: enrollmentRows }] = await Promise.all([
      supabase.from('marketplace_cart_items').select('course_id').eq('user_id', user.id),
      supabase.from('marketplace_enrollments').select('course_id').eq('user_id', user.id),
    ])
    setCartCourseIds(new Set((cartRows || []).map(r => r.course_id)))
    setOwnedCourseIds(new Set((enrollmentRows || []).map(r => r.course_id)))
  }

  useEffect(() => {
    loadCourses()
    loadCartAndOwnership()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const filtered = useMemo(
    () => (filter === 'all' ? courses : courses.filter(c => c.subject === filter)),
    [courses, filter]
  )

  const toggleCart = async (courseId) => {
    if (!user) return
    setCartBusyId(courseId)
    try {
      if (cartCourseIds.has(courseId)) {
        await supabase.from('marketplace_cart_items').delete().eq('user_id', user.id).eq('course_id', courseId)
        setCartCourseIds(prev => {
          const next = new Set(prev)
          next.delete(courseId)
          return next
        })
      } else {
        await supabase.from('marketplace_cart_items').insert({ user_id: user.id, course_id: courseId })
        setCartCourseIds(prev => new Set(prev).add(courseId))
      }
    } catch (err) {
      console.error('Failed to update cart:', err)
    } finally {
      setCartBusyId(null)
    }
  }

  return (
    <div className="page-content marketplace-page">
      <div className="marketplace-header-row">
        <div>
          <h1 className="page-title">Sual Marketplace</h1>
          <p className="page-subtitle">Arabic and Islamic courses from Sual's teachers, at your own pace.</p>
        </div>
        {user && (
          <Link to="/marketplace/cart" className="btn btn-primary marketplace-cart-link">
            🛒 Cart {cartCourseIds.size > 0 && <span className="marketplace-cart-badge">{cartCourseIds.size}</span>}
          </Link>
        )}
      </div>

      <div className="marketplace-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`marketplace-filter-btn ${filter === f.key ? 'marketplace-filter-btn--active' : ''}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="marketplace-empty card"><p>Loading…</p></div>
      ) : error ? (
        <div className="marketplace-empty card"><p>{error}</p></div>
      ) : filtered.length === 0 ? (
        <div className="marketplace-empty card"><p>No courses here yet — check back soon.</p></div>
      ) : (
        <div className="marketplace-grid">
          {filtered.map(course => {
            const owned = ownedCourseIds.has(course.id)
            const inCart = cartCourseIds.has(course.id)
            const duration = formatDuration(course.total_duration_seconds)
            return (
              <div key={course.id} className="marketplace-card">
                <Link to={`/marketplace/course/${course.slug}`} className="marketplace-card-thumb-link">
                  {course.thumbnail_url ? (
                    <img src={course.thumbnail_url} alt={course.title} className="marketplace-card-thumb" />
                  ) : (
                    <div className="marketplace-card-thumb marketplace-card-thumb--placeholder">
                      <span>{course.subject === 'arabic' ? '✍️' : '📖'}</span>
                    </div>
                  )}
                </Link>
                <div className="marketplace-card-body">
                  <span className={`marketplace-level-badge marketplace-level-badge--${course.level}`}>
                    {course.level}
                  </span>
                  <Link to={`/marketplace/course/${course.slug}`} className="marketplace-card-title">
                    {course.title}
                  </Link>
                  <p className="marketplace-card-creator">By {course.creator_name}</p>
                  <p className="marketplace-card-meta">
                    {course.lesson_count} lesson{course.lesson_count === 1 ? '' : 's'}
                    {duration && <> · {duration}</>}
                  </p>
                  <div className="marketplace-card-footer">
                    <span className="marketplace-card-price">{formatPrice(course.price_kobo, course.currency)}</span>
                    {owned ? (
                      <Link to={`/marketplace/learn/${course.slug}`} className="btn btn-primary">Go to Course</Link>
                    ) : user ? (
                      <button
                        className={`btn ${inCart ? 'btn-ghost' : 'btn-primary'}`}
                        onClick={() => toggleCart(course.id)}
                        disabled={cartBusyId === course.id}
                      >
                        {cartBusyId === course.id ? '…' : inCart ? 'Remove' : 'Add to Cart'}
                      </button>
                    ) : (
                      <Link to={`/marketplace/course/${course.slug}`} className="btn btn-primary">View Course</Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}