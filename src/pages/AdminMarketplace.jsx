import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

// Sual Marketplace — admin panel.
// Pulled into its own file rather than added inline to Admin.jsx,
// same reasoning as AdminFeedback.jsx: that file already covers many
// admin surfaces. Import and render from Admin.jsx with:
//
//   import AdminMarketplace from './AdminMarketplace.jsx'
//   ...
//   <AdminMarketplace />
//
// Talks to the admin-manage-marketplace edge function exclusively —
// no direct table writes from here, matching every other admin
// manager in this app.
//
// Only admins can add creators (no public "become a creator" flow,
// per the confirmed scoping decision) — add_creator requires the
// person already have a Sual account; this doesn't create one.

const EMPTY_CREATOR = { email: '', display_name: '', bio: '' }
const EMPTY_COURSE = {
  creator_id: '',
  title: '',
  arabic_title: '',
  subject: 'islamic_studies',
  level: 'beginner',
  description: '',
  what_you_will_learn: '',
  price_naira: '',
}
const EMPTY_SECTION = { section_number: '', title: '' }
const EMPTY_LESSON = { lesson_number: '', title: '', description: '', is_preview: false }

function koboToNaira(kobo) {
  return (kobo / 100).toLocaleString()
}

export default function AdminMarketplace() {
  const [creators, setCreators] = useState([])
  const [creatorsLoading, setCreatorsLoading] = useState(false)
  const [creatorForm, setCreatorForm] = useState(EMPTY_CREATOR)
  const [creatorSaving, setCreatorSaving] = useState(false)
  const [creatorError, setCreatorError] = useState(null)

  const [courses, setCourses] = useState([])
  const [coursesLoading, setCoursesLoading] = useState(false)
  const [courseForm, setCourseForm] = useState(EMPTY_COURSE)
  const [courseSaving, setCourseSaving] = useState(false)
  const [courseError, setCourseError] = useState(null)

  const [selectedCourse, setSelectedCourse] = useState(null)
  const [sections, setSections] = useState([])
  const [sectionsLoading, setSectionsLoading] = useState(false)
  const [sectionForm, setSectionForm] = useState(EMPTY_SECTION)

  const [selectedSection, setSelectedSection] = useState(null)
  const [lessons, setLessons] = useState([])
  const [lessonsLoading, setLessonsLoading] = useState(false)
  const [lessonForm, setLessonForm] = useState(EMPTY_LESSON)

  const [videoFile, setVideoFile] = useState(null)
  const [videoUploadingId, setVideoUploadingId] = useState(null)
  const [videoUploadError, setVideoUploadError] = useState(null)

  const [thumbnailFile, setThumbnailFile] = useState(null)
  const [thumbnailUploading, setThumbnailUploading] = useState(false)

  const [enrollments, setEnrollments] = useState([])
  const [enrollmentsLoading, setEnrollmentsLoading] = useState(false)

  const invoke = (body) => supabase.functions.invoke('admin-manage-marketplace', { body })

  // ── Creators ──────────────────────────────────────────────
  const fetchCreators = async () => {
    setCreatorsLoading(true)
    try {
      const { data, error } = await invoke({ action: 'list_creators' })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setCreators(data.creators || [])
    } catch (err) {
      console.error('Failed to load creators:', err)
    } finally {
      setCreatorsLoading(false)
    }
  }

  const addCreator = async () => {
    if (!creatorForm.email.trim() || !creatorForm.display_name.trim()) return
    setCreatorSaving(true)
    setCreatorError(null)
    try {
      const { data, error } = await invoke({
        action: 'add_creator',
        email: creatorForm.email.trim(),
        display_name: creatorForm.display_name.trim(),
        bio: creatorForm.bio.trim() || undefined,
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setCreatorForm(EMPTY_CREATOR)
      fetchCreators()
    } catch (err) {
      setCreatorError(err.message)
    } finally {
      setCreatorSaving(false)
    }
  }

  const deleteCreator = async (id) => {
    if (!window.confirm('Remove this creator? This only works if they have no courses.')) return
    try {
      const { data, error } = await invoke({ action: 'delete_creator', id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      fetchCreators()
    } catch (err) {
      alert(`Could not remove creator: ${err.message}`)
    }
  }

  // ── Courses ───────────────────────────────────────────────
  const fetchCourses = async () => {
    setCoursesLoading(true)
    try {
      const { data, error } = await invoke({ action: 'list_courses' })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setCourses(data.courses || [])
    } catch (err) {
      console.error('Failed to load courses:', err)
    } finally {
      setCoursesLoading(false)
    }
  }

  const addCourse = async () => {
    const { creator_id, title, subject, description, price_naira } = courseForm
    if (!creator_id || !title.trim() || !description.trim() || !price_naira) return
    setCourseSaving(true)
    setCourseError(null)
    try {
      const { data, error } = await invoke({
        action: 'add_course',
        creator_id: Number(creator_id),
        title: title.trim(),
        arabic_title: courseForm.arabic_title.trim() || undefined,
        subject,
        level: courseForm.level,
        description: description.trim(),
        what_you_will_learn: courseForm.what_you_will_learn
          .split('\n')
          .map(l => l.trim())
          .filter(Boolean),
        price_kobo: Math.round(Number(price_naira) * 100),
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setCourseForm(EMPTY_COURSE)
      fetchCourses()
    } catch (err) {
      setCourseError(err.message)
    } finally {
      setCourseSaving(false)
    }
  }

  const togglePublish = async (course) => {
    try {
      const { data, error } = await invoke({
        action: course.status === 'published' ? 'unpublish' : 'publish',
        table: 'marketplace_courses',
        id: course.id,
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      fetchCourses()
      if (selectedCourse?.id === course.id) setSelectedCourse(data.course)
    } catch (err) {
      alert(`Could not update course status: ${err.message}`)
    }
  }

  const deleteCourse = async (course) => {
    if (!window.confirm(`Delete "${course.title}" permanently? This deletes all its sections and lessons too.`)) return
    try {
      const { data, error } = await invoke({ action: 'delete', table: 'marketplace_courses', id: course.id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (selectedCourse?.id === course.id) setSelectedCourse(null)
      fetchCourses()
    } catch (err) {
      alert(`Could not delete course: ${err.message}`)
    }
  }

  const uploadThumbnail = async () => {
    if (!thumbnailFile || !selectedCourse) return
    setThumbnailUploading(true)
    try {
      const { data: urlData, error: urlError } = await invoke({
        action: 'get_thumbnail_upload_url',
        course_id: selectedCourse.id,
        filename: thumbnailFile.name,
      })
      if (urlError) throw urlError
      if (urlData?.error) throw new Error(urlData.error)

      const { error: uploadError } = await supabase.storage
        .from('marketplace-thumbnails')
        .uploadToSignedUrl(urlData.path, urlData.token, thumbnailFile)
      if (uploadError) throw uploadError

      setThumbnailFile(null)
      setSelectedCourse(c => ({ ...c, thumbnail_url: urlData.publicUrl }))
      fetchCourses()
    } catch (err) {
      alert(`Thumbnail upload failed: ${err.message}`)
    } finally {
      setThumbnailUploading(false)
    }
  }

  // ── Sections ──────────────────────────────────────────────
  const openCourse = async (course) => {
    setSelectedCourse(course)
    setSelectedSection(null)
    setLessons([])
    setEnrollments([])
    setSectionsLoading(true)
    try {
      const { data, error } = await invoke({ action: 'list_sections', course_id: course.id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setSections(data.sections || [])
    } catch (err) {
      console.error('Failed to load sections:', err)
    } finally {
      setSectionsLoading(false)
    }
  }

  const addSection = async () => {
    if (!selectedCourse || !sectionForm.section_number || !sectionForm.title.trim()) return
    try {
      const { data, error } = await invoke({
        action: 'add_section',
        course_id: selectedCourse.id,
        section_number: Number(sectionForm.section_number),
        title: sectionForm.title.trim(),
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setSectionForm(EMPTY_SECTION)
      openCourse(selectedCourse)
    } catch (err) {
      alert(`Could not add section: ${err.message}`)
    }
  }

  // ── Lessons ───────────────────────────────────────────────
  const openSection = async (section) => {
    setSelectedSection(section)
    setLessonsLoading(true)
    try {
      const { data, error } = await invoke({ action: 'list_lessons', section_id: section.id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLessons(data.lessons || [])
    } catch (err) {
      console.error('Failed to load lessons:', err)
    } finally {
      setLessonsLoading(false)
    }
  }

  const addLesson = async () => {
    if (!selectedSection || !lessonForm.lesson_number || !lessonForm.title.trim()) return
    try {
      const { data, error } = await invoke({
        action: 'add_lesson',
        section_id: selectedSection.id,
        lesson_number: Number(lessonForm.lesson_number),
        title: lessonForm.title.trim(),
        description: lessonForm.description.trim() || undefined,
        is_preview: lessonForm.is_preview,
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLessonForm(EMPTY_LESSON)
      openSection(selectedSection)
    } catch (err) {
      alert(`Could not add lesson: ${err.message}`)
    }
  }

  const togglePreview = async (lesson) => {
    try {
      const { data, error } = await invoke({ action: 'update_lesson', id: lesson.id, is_preview: !lesson.is_preview })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openSection(selectedSection)
    } catch (err) {
      alert(`Could not update lesson: ${err.message}`)
    }
  }

  const deleteLesson = async (lesson) => {
    if (!window.confirm(`Delete "${lesson.title}"?`)) return
    try {
      const { data, error } = await invoke({ action: 'delete', table: 'marketplace_lessons', id: lesson.id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openSection(selectedSection)
    } catch (err) {
      alert(`Could not delete lesson: ${err.message}`)
    }
  }

  const uploadVideo = async (lesson) => {
    if (!videoFile) return
    setVideoUploadingId(lesson.id)
    setVideoUploadError(null)
    try {
      const { data: urlData, error: urlError } = await invoke({
        action: 'get_video_upload_url',
        lesson_id: lesson.id,
        filename: videoFile.name,
      })
      if (urlError) throw urlError
      if (urlData?.error) throw new Error(urlData.error)

      const { error: uploadError } = await supabase.storage
        .from('marketplace-videos')
        .uploadToSignedUrl(urlData.path, urlData.token, videoFile)
      if (uploadError) throw uploadError

      setVideoFile(null)
      openSection(selectedSection)
    } catch (err) {
      setVideoUploadError(err.message)
    } finally {
      setVideoUploadingId(null)
    }
  }

  // ── Enrollments ───────────────────────────────────────────
  const fetchEnrollments = async () => {
    if (!selectedCourse) return
    setEnrollmentsLoading(true)
    try {
      const { data, error } = await invoke({ action: 'list_enrollments', course_id: selectedCourse.id })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setEnrollments(data.enrollments || [])
    } catch (err) {
      console.error('Failed to load enrollments:', err)
    } finally {
      setEnrollmentsLoading(false)
    }
  }

  useEffect(() => {
    fetchCreators()
    fetchCourses()
  }, [])

  return (
    <div className="card" style={{ marginTop: 20, padding: 20 }}>
      <h3 style={{ marginBottom: 6 }}>Sual Marketplace</h3>
      <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 20 }}>
        Manage creators, courses, curriculum, and video uploads. Nothing here is buyable until a
        course is published.
      </p>

      {/* Creators */}
      <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #e8f0f8' }}>
        <h4 style={{ fontSize: '0.92rem', marginBottom: 10 }}>Creators</h4>
        {creatorError && <div className="admin-error" style={{ marginBottom: 10 }}>{creatorError}</div>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8, marginBottom: 10 }}>
          <input type="email" placeholder="Creator's Sual account email" value={creatorForm.email} onChange={e => setCreatorForm(f => ({ ...f, email: e.target.value }))} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <input type="text" placeholder="Display name" value={creatorForm.display_name} onChange={e => setCreatorForm(f => ({ ...f, display_name: e.target.value }))} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <input type="text" placeholder="Bio (optional)" value={creatorForm.bio} onChange={e => setCreatorForm(f => ({ ...f, bio: e.target.value }))} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <button className="btn btn-ghost" onClick={addCreator} disabled={creatorSaving}>{creatorSaving ? '…' : '+ Add Creator'}</button>
        </div>
        <p style={{ fontSize: '0.75rem', color: '#8a9ab0', marginBottom: 10 }}>
          The creator must already have a Sual account under this email — this doesn't create one.
        </p>
        {creatorsLoading ? <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Loading…</p> : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {creators.map(c => (
              <span key={c.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 100, background: '#f5f8fb', fontSize: '0.8rem' }}>
                {c.display_name}
                <button onClick={() => deleteCreator(c.id)} style={{ background: 'none', border: 'none', color: '#c0392b', cursor: 'pointer', fontSize: '0.8rem' }}>✕</button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Courses + curriculum */}
      <div style={{ marginBottom: 10 }}>
        <h4 style={{ fontSize: '0.92rem', marginBottom: 10 }}>Courses</h4>
        {courseError && <div className="admin-error" style={{ marginBottom: 10 }}>{courseError}</div>}
        <div style={{ padding: 12, background: '#f5f8fb', borderRadius: 8, marginBottom: 16 }}>
          <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>New course</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8, marginBottom: 8 }}>
            <select value={courseForm.creator_id} onChange={e => setCourseForm(f => ({ ...f, creator_id: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #d0e0ec' }}>
              <option value="">Select creator…</option>
              {creators.map(c => <option key={c.id} value={c.id}>{c.display_name}</option>)}
            </select>
            <select value={courseForm.subject} onChange={e => setCourseForm(f => ({ ...f, subject: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #d0e0ec' }}>
              <option value="islamic_studies">Islamic Studies</option>
              <option value="arabic">Arabic</option>
            </select>
            <select value={courseForm.level} onChange={e => setCourseForm(f => ({ ...f, level: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #d0e0ec' }}>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <input type="number" placeholder="Price (₦)" value={courseForm.price_naira} onChange={e => setCourseForm(f => ({ ...f, price_naira: e.target.value }))} style={{ padding: 8, borderRadius: 6, border: '1px solid #d0e0ec' }} />
          </div>
          <input type="text" placeholder="Course title" value={courseForm.title} onChange={e => setCourseForm(f => ({ ...f, title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 8 }} />
          <input type="text" placeholder="Arabic title (optional)" value={courseForm.arabic_title} onChange={e => setCourseForm(f => ({ ...f, arabic_title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 8 }} />
          <textarea placeholder="Description" value={courseForm.description} onChange={e => setCourseForm(f => ({ ...f, description: e.target.value }))} rows={3} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 8 }} />
          <textarea placeholder={'What you\'ll learn — one point per line'} value={courseForm.what_you_will_learn} onChange={e => setCourseForm(f => ({ ...f, what_you_will_learn: e.target.value }))} rows={3} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 8 }} />
          <button className="btn btn-primary" onClick={addCourse} disabled={courseSaving}>{courseSaving ? 'Saving…' : '+ Add Course'}</button>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 260px' }}>
            {coursesLoading ? <p>Loading…</p> : courses.map(c => (
              <button
                key={c.id}
                onClick={() => openCourse(c)}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 10px', marginBottom: 4, borderRadius: 8, border: 'none', background: selectedCourse?.id === c.id ? 'rgba(9,69,112,0.08)' : 'transparent', cursor: 'pointer', fontSize: '0.82rem' }}
              >
                <strong>{c.title}</strong> — {c.marketplace_creators?.display_name}
                <br />
                <span style={{ fontSize: '0.72rem', color: c.status === 'published' ? '#2e7d32' : '#8a9ab0' }}>
                  {c.status} · ₦{koboToNaira(c.price_kobo)}
                </span>
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            {!selectedCourse ? (
              <p style={{ color: '#8a9ab0' }}>Select a course on the left.</p>
            ) : !selectedSection ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>{selectedCourse.title}</p>
                  <span style={{ display: 'flex', gap: 6 }}>
                    {selectedCourse.status === 'published' ? (
                      <button className="btn btn-ghost" onClick={() => togglePublish(selectedCourse)}>Unpublish</button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => togglePublish(selectedCourse)}>Publish</button>
                    )}
                    <button className="btn btn-ghost" onClick={() => deleteCourse(selectedCourse)} style={{ color: '#c0392b' }}>Delete</button>
                  </span>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 6 }}>Thumbnail</p>
                  {selectedCourse.thumbnail_url && (
                    <img src={selectedCourse.thumbnail_url} alt="" style={{ width: 160, borderRadius: 8, marginBottom: 8, display: 'block' }} />
                  )}
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input type="file" accept="image/*" onChange={e => setThumbnailFile(e.target.files?.[0] || null)} style={{ fontSize: '0.82rem' }} />
                    <button className="btn btn-ghost" onClick={uploadThumbnail} disabled={!thumbnailFile || thumbnailUploading}>{thumbnailUploading ? 'Uploading…' : 'Upload'}</button>
                  </div>
                </div>

                <div style={{ padding: 12, background: '#f5f8fb', borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>Add a section</p>
                  <input type="number" placeholder="Section #" value={sectionForm.section_number} onChange={e => setSectionForm(f => ({ ...f, section_number: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <input type="text" placeholder="Title" value={sectionForm.title} onChange={e => setSectionForm(f => ({ ...f, title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <button className="btn btn-ghost" onClick={addSection}>+ Add Section</button>
                </div>

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Sections ({sections.length})</h4>
                {sectionsLoading ? <p>Loading…</p> : sections.map(s => (
                  <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: 6, borderRadius: 8, background: '#f5f8fb' }}>
                    <span style={{ fontSize: '0.85rem' }}><strong>Section {s.section_number}</strong> — {s.title}</span>
                    <button className="btn btn-ghost" onClick={() => openSection(s)}>Manage Lessons</button>
                  </div>
                ))}

                <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e8f0f8' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <p style={{ fontSize: '0.78rem', color: '#6a8090' }}>Enrollments</p>
                    <button className="btn btn-ghost" onClick={fetchEnrollments}>{enrollmentsLoading ? '…' : 'Load'}</button>
                  </div>
                  {enrollments.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {enrollments.map(e => (
                        <span key={e.id} style={{ fontSize: '0.8rem', color: '#3a4a5a' }}>
                          {e.profiles?.full_name || 'Student'} — enrolled {new Date(e.enrolled_at).toLocaleDateString('en-GB')}
                          {e.completed_at && ' · completed'}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setSelectedSection(null)}>← Back to sections</button>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12 }}>Section {selectedSection.section_number} — {selectedSection.title}</p>

                <div style={{ padding: 12, background: '#f5f8fb', borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>Add a lesson</p>
                  <input type="number" placeholder="Lesson #" value={lessonForm.lesson_number} onChange={e => setLessonForm(f => ({ ...f, lesson_number: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <input type="text" placeholder="Title" value={lessonForm.title} onChange={e => setLessonForm(f => ({ ...f, title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <textarea placeholder="Description (optional)" value={lessonForm.description} onChange={e => setLessonForm(f => ({ ...f, description: e.target.value }))} rows={2} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.82rem', marginBottom: 8 }}>
                    <input type="checkbox" checked={lessonForm.is_preview} onChange={e => setLessonForm(f => ({ ...f, is_preview: e.target.checked }))} />
                    Free preview (playable before purchase)
                  </label>
                  <button className="btn btn-ghost" onClick={addLesson}>+ Add Lesson</button>
                </div>

                {videoUploadError && <div className="admin-error" style={{ marginBottom: 10 }}>{videoUploadError}</div>}

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Lessons ({lessons.length})</h4>
                {lessonsLoading ? <p>Loading…</p> : lessons.map(l => (
                  <div key={l.id} style={{ padding: '10px 12px', marginBottom: 8, borderRadius: 8, background: '#f5f8fb' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
                      <span style={{ fontSize: '0.85rem' }}>
                        <strong>{l.lesson_number}. {l.title}</strong>
                        {l.video_storage_path && <span style={{ marginLeft: 6 }}>🎬</span>}
                        {l.is_preview && <span style={{ marginLeft: 6, fontSize: '0.72rem', color: '#2e7d32' }}>· preview</span>}
                      </span>
                      <span style={{ display: 'flex', gap: 6 }}>
                        <button className="btn btn-ghost" onClick={() => togglePreview(l)}>{l.is_preview ? 'Unmark Preview' : 'Mark Preview'}</button>
                        <button className="btn btn-ghost" onClick={() => deleteLesson(l)} style={{ color: '#c0392b' }}>Delete</button>
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files?.[0] || null)} style={{ fontSize: '0.78rem', width: 200 }} />
                      <button className="btn btn-ghost" onClick={() => uploadVideo(l)} disabled={!videoFile || videoUploadingId === l.id}>
                        {videoUploadingId === l.id ? 'Uploading…' : l.video_storage_path ? 'Replace Video' : 'Upload Video'}
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}