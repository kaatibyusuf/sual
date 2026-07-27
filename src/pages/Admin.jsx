import React, { useState, useEffect } from 'react'
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import { supabase } from '../lib/supabase.js'
import './Admin.css'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc

const EMPTY_ENTRY = {
  publish_date: '',
  surah_name: '',
  surah_num: '',
  ayah_num: '',
  arabic_text: '',
  transliteration: '',
  translation: '',
  tafseer_body: '',
  lessons: [''],
}

const EMPTY_CLASS_LESSON = {
  class_id: 'hadeeth',
  level: 'beginner',
  publish_date: '',
  title: '',
  arabic_text: '',
  transliteration: '',
  translation: '',
  commentary: '',
  audio_url: '',
  add_to_lms: false,
  lessons: [''],
}

const EMPTY_EXAM_TOPIC = { board: 'utme', subject: 'islamic_studies', title: '', syllabus_section: '' }

const EMPTY_MCQ_QUESTION = { question_type: 'mcq', question: '', options: ['', '', '', ''], correct_index: 0, explanation: '' }
const EMPTY_THEORY_QUESTION = { question_type: 'theory', question: '', model_answer: '' }

// LMS now uses a two-level structure under each course: sections (ordered
// chapters) contain items (audio | reading | quiz | discussion), each
// individually trackable and publishable. This replaces the old flat
// "chapter" model — see admin-manage-lms edge function for the matching
// action set (list_sections, add_section, list_items, add_item, update_item,
// list_item_questions, generate_draft_notes/questions on { item }).
const EMPTY_LMS_ITEM = { item_number: '', item_type: 'reading', title: '', arabic_text: '', transliteration: '', translation: '', notes: '' }

export default function Admin({ user }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const [grantEmail, setGrantEmail] = useState('')
  const [granting, setGranting] = useState(false)
  const [grantResult, setGrantResult] = useState(null)
  const [grantError, setGrantError] = useState(null)

  const [tafseerEntries, setTafseerEntries] = useState([])
  const [tafseerListLoading, setTafseerListLoading] = useState(false)
  const [tafseerForm, setTafseerForm] = useState(EMPTY_ENTRY)
  const [tafseerSaving, setTafseerSaving] = useState(false)
  const [tafseerError, setTafseerError] = useState(null)
  const [tafseerSaved, setTafseerSaved] = useState(null)
  const [editingDate, setEditingDate] = useState(null)

  const [classLessonEntries, setClassLessonEntries] = useState([])
  const [classLessonListLoading, setClassLessonListLoading] = useState(false)
  const [classLessonForm, setClassLessonForm] = useState(EMPTY_CLASS_LESSON)
  const [classLessonSaving, setClassLessonSaving] = useState(false)
  const [classLessonError, setClassLessonError] = useState(null)
  const [classLessonSaved, setClassLessonSaved] = useState(null)
  const [classLessonLmsMsg, setClassLessonLmsMsg] = useState(null)
  const [editingClassLessonKey, setEditingClassLessonKey] = useState(null)

  const [audioFile, setAudioFile] = useState(null)
  const [audioUploading, setAudioUploading] = useState(false)
  const [audioUploadError, setAudioUploadError] = useState(null)
 
  const [majlisTitle, setMajlisTitle] = useState('')
  const [majlisBody, setMajlisBody] = useState('')
  const [postingMajlis, setPostingMajlis] = useState(false)

  // ── LMS state ─────────────────────────────────────────────────
  const [lmsCourses, setLmsCourses] = useState([])
  const [lmsCoursesLoading, setLmsCoursesLoading] = useState(false)
  const [lmsSelectedCourse, setLmsSelectedCourse] = useState(null)
  const [lmsSections, setLmsSections] = useState([])
  const [lmsSectionsLoading, setLmsSectionsLoading] = useState(false)
  const [lmsSelectedSection, setLmsSelectedSection] = useState(null)
  const [lmsItems, setLmsItems] = useState([])
  const [lmsItemsLoading, setLmsItemsLoading] = useState(false)
  const [lmsSelectedItem, setLmsSelectedItem] = useState(null)
  const [lmsItemQuestions, setLmsItemQuestions] = useState([])
  const [lmsError, setLmsError] = useState(null)
  const [lmsGenerating, setLmsGenerating] = useState(false)

  const [lmsNewCourse, setLmsNewCourse] = useState({ class_id: 'arabiyyah', level: 'beginner', title: '', arabic_title: '', description: '', teacher_name: '' })
  const [lmsSectionForm, setLmsSectionForm] = useState({ section_number: '', title: '' })
  const [lmsItemForm, setLmsItemForm] = useState(EMPTY_LMS_ITEM)
  const [lmsEditingItemId, setLmsEditingItemId] = useState(null)

  const [lmsAudioFile, setLmsAudioFile] = useState(null)
  const [lmsAudioUploading, setLmsAudioUploading] = useState(false)
  const [lmsAudioUploadError, setLmsAudioUploadError] = useState(null)

  // ── Exam Prep state ─────────────────────────────────────────
  const [examTopics, setExamTopics] = useState([])
  const [examTopicsLoading, setExamTopicsLoading] = useState(false)
  const [examSelectedTopic, setExamSelectedTopic] = useState(null)
  const [examNotes, setExamNotes] = useState([])
  const [examQuestions, setExamQuestions] = useState([])
  const [examContentLoading, setExamContentLoading] = useState(false)
  const [examError, setExamError] = useState(null)
  const [examGenerating, setExamGenerating] = useState(false)
  const [examNewTopic, setExamNewTopic] = useState(EMPTY_EXAM_TOPIC)
  const [examManualNote, setExamManualNote] = useState('')
  const [examQuestionMode, setExamQuestionMode] = useState('mcq') // mcq | theory — governs both manual form and AI generation target
  const [examManualQuestion, setExamManualQuestion] = useState(EMPTY_MCQ_QUESTION)
  const [examParsing, setExamParsing] = useState(false)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-stats')
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setStats(data)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Failed to load admin stats:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const grantAccess = async () => {
    const email = grantEmail.trim().toLowerCase()
    if (!email) return
    setGranting(true)
    setGrantError(null)
    setGrantResult(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-grant-access', {
        body: { email },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setGrantResult(data)
      setGrantEmail('')
    } catch (err) {
      console.error('Failed to grant access:', err)
      setGrantError(err.message)
    } finally {
      setGranting(false)
    }
  }
  
  const postMajlisAnnouncement = async () => {
  if (!majlisTitle.trim() || !majlisBody.trim()) return
  setPostingMajlis(true)
  try {
    const { data, error } = await supabase.functions.invoke('admin-manage-majlis', {
      body: { action: 'create_post', title: majlisTitle.trim(), body: majlisBody.trim() },
    })
    if (error) throw error
    if (data?.error) throw new Error(data.error)
    setMajlisTitle('')
    setMajlisBody('')
  } catch (err) {
    console.error('Failed to post Majlis announcement:', err)
  } finally {
    setPostingMajlis(false)
  }
}

  const fetchTafseerList = async () => {
    setTafseerListLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'list' },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setTafseerEntries(data.entries || [])
    } catch (err) {
      console.error('Failed to load tafseer entries:', err)
    } finally {
      setTafseerListLoading(false)
    }
  }

  const loadEntryIntoForm = (entry) => {
    setEditingDate(entry.publish_date)
    setTafseerForm({
      publish_date: entry.publish_date || '',
      surah_name: entry.surah_name || '',
      surah_num: entry.surah_num ?? '',
      ayah_num: entry.ayah_num ?? '',
      arabic_text: entry.arabic_text || '',
      transliteration: entry.transliteration || '',
      translation: entry.translation || '',
      tafseer_body: entry.tafseer_body || '',
      lessons: Array.isArray(entry.lessons) && entry.lessons.length > 0 ? entry.lessons : [''],
    })
    setTafseerSaved(null)
    setTafseerError(null)
  }

  const resetTafseerForm = () => {
    setEditingDate(null)
    setTafseerForm(EMPTY_ENTRY)
    setTafseerSaved(null)
    setTafseerError(null)
  }

  const updateLesson = (idx, value) => {
    setTafseerForm(f => {
      const lessons = [...f.lessons]
      lessons[idx] = value
      return { ...f, lessons }
    })
  }

  const addLessonField = () => {
    setTafseerForm(f => ({ ...f, lessons: [...f.lessons, ''] }))
  }

  const removeLessonField = (idx) => {
    setTafseerForm(f => ({ ...f, lessons: f.lessons.filter((_, i) => i !== idx) }))
  }

  const saveTafseer = async () => {
    setTafseerSaving(true)
    setTafseerError(null)
    setTafseerSaved(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'upsert', entry: tafseerForm },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setTafseerSaved(data.entry)
      resetTafseerForm()
      fetchTafseerList()
    } catch (err) {
      console.error('Failed to save tafseer entry:', err)
      setTafseerError(err.message)
    } finally {
      setTafseerSaving(false)
    }
  }

  const deleteTafseer = async (publishDate) => {
    if (!window.confirm(`Delete the tafseer entry for ${publishDate}?`)) return
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-tafseer', {
        body: { action: 'delete', publish_date: publishDate },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (editingDate === publishDate) resetTafseerForm()
      fetchTafseerList()
    } catch (err) {
      console.error('Failed to delete tafseer entry:', err)
      setTafseerError(err.message)
    }
  }

  // ── Class daily lessons (Arabiyyah + Hadeeth) ────────────────
  const fetchClassLessonList = async () => {
    setClassLessonListLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'list' },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setClassLessonEntries(data.entries || [])
    } catch (err) {
      console.error('Failed to load class lesson entries:', err)
    } finally {
      setClassLessonListLoading(false)
    }
  }

  const loadClassLessonIntoForm = (entry) => {
    setEditingClassLessonKey(`${entry.class_id}|${entry.level}|${entry.publish_date}`)
    setClassLessonForm({
      class_id: entry.class_id,
      level: entry.level,
      publish_date: entry.publish_date || '',
      title: entry.title || '',
      arabic_text: entry.arabic_text || '',
      transliteration: entry.transliteration || '',
      translation: entry.translation || '',
      commentary: entry.commentary || '',
      audio_url: entry.audio_url || '',
      add_to_lms: !!entry.lms_section_id,
      lessons: Array.isArray(entry.lessons) && entry.lessons.length > 0 ? entry.lessons : [''],
    })
    setClassLessonSaved(null)
    setClassLessonError(null)
    setClassLessonLmsMsg(null)
    setAudioFile(null)
    setAudioUploadError(null)
  }

  const resetClassLessonForm = () => {
    setEditingClassLessonKey(null)
    setClassLessonForm(EMPTY_CLASS_LESSON)
    setClassLessonSaved(null)
    setClassLessonError(null)
    setClassLessonLmsMsg(null)
    setAudioFile(null)
    setAudioUploadError(null)
  }

  const updateClassLessonLesson = (idx, value) => {
    setClassLessonForm(f => {
      const lessons = [...f.lessons]
      lessons[idx] = value
      return { ...f, lessons }
    })
  }

  const addClassLessonField = () => {
    setClassLessonForm(f => ({ ...f, lessons: [...f.lessons, ''] }))
  }

  const removeClassLessonField = (idx) => {
    setClassLessonForm(f => ({ ...f, lessons: f.lessons.filter((_, i) => i !== idx) }))
  }

  const uploadAudio = async () => {
    if (!audioFile) return
    if (!classLessonForm.publish_date) {
      setAudioUploadError('Set the publish date first.')
      return
    }
    setAudioUploading(true)
    setAudioUploadError(null)
    try {
      const { data: urlData, error: urlError } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: {
          action: 'get_upload_url',
          class_id: classLessonForm.class_id,
          level: classLessonForm.level,
          publish_date: classLessonForm.publish_date,
          filename: audioFile.name,
        },
      })
      if (urlError) throw urlError
      if (urlData?.error) throw new Error(urlData.error)

      const { error: uploadError } = await supabase.storage
        .from('class-audio')
        .uploadToSignedUrl(urlData.path, urlData.token, audioFile)
      if (uploadError) throw uploadError

      setClassLessonForm(f => ({ ...f, audio_url: urlData.audioUrl }))
      setAudioFile(null)
    } catch (err) {
      console.error('Failed to upload audio:', err)
      setAudioUploadError(err.message)
    } finally {
      setAudioUploading(false)
    }
  }

  const saveClassLesson = async () => {
    setClassLessonSaving(true)
    setClassLessonError(null)
    setClassLessonSaved(null)
    setClassLessonLmsMsg(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'upsert', entry: classLessonForm },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setClassLessonSaved(data.entry)
      if (classLessonForm.add_to_lms) {
        if (data.lms?.ok) {
          setClassLessonLmsMsg(data.lms.created
            ? 'Also added to LMS as a new section.'
            : 'Also synced to the existing LMS section.')
        } else if (data.lms) {
          setClassLessonLmsMsg(`Daily lesson saved, but LMS sync failed: ${data.lms.error}`)
        }
      }
      resetClassLessonForm()
      fetchClassLessonList()
    } catch (err) {
      console.error('Failed to save class lesson entry:', err)
      setClassLessonError(err.message)
    } finally {
      setClassLessonSaving(false)
    }
  }

  const deleteClassLesson = async (entry) => {
    if (!window.confirm(`Delete the ${entry.class_id} (${entry.level}) lesson for ${entry.publish_date}?`)) return
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-class-lessons', {
        body: { action: 'delete', class_id: entry.class_id, level: entry.level, publish_date: entry.publish_date },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      const key = `${entry.class_id}|${entry.level}|${entry.publish_date}`
      if (editingClassLessonKey === key) resetClassLessonForm()
      fetchClassLessonList()
    } catch (err) {
      console.error('Failed to delete class lesson entry:', err)
      setClassLessonError(err.message)
    }
  }

  // ── Exam Prep functions ──────────────────────────────────────
  const fetchExamTopics = async () => {
    setExamTopicsLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', { body: { action: 'list_topics' } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setExamTopics(data.topics || [])
    } catch (err) {
      console.error('Failed to load exam topics:', err)
    } finally {
      setExamTopicsLoading(false)
    }
  }

  const addExamTopic = async () => {
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'add_topic', ...examNewTopic },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setExamNewTopic(f => ({ ...EMPTY_EXAM_TOPIC, board: f.board, subject: f.subject }))
      fetchExamTopics()
    } catch (err) {
      setExamError(err.message)
    }
  }

  const openExamTopic = async (topic) => {
    setExamSelectedTopic(topic)
    setExamContentLoading(true)
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'list_content', topic_id: topic.id },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setExamNotes(data.notes || [])
      setExamQuestions(data.questions || [])
    } catch (err) {
      setExamError(err.message)
    } finally {
      setExamContentLoading(false)
    }
  }

  const generateExamNotes = async () => {
    setExamGenerating(true)
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'generate_draft_notes', topic: examSelectedTopic },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    } finally {
      setExamGenerating(false)
    }
  }

  const generateExamQuestions = async (mode) => {
    setExamGenerating(true)
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'generate_draft_questions', topic: examSelectedTopic, mode },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    } finally {
      setExamGenerating(false)
    }
  }

  const addManualExamNote = async () => {
    if (!examManualNote.trim() || !examSelectedTopic) return
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'add_note', topic_id: examSelectedTopic.id, body: examManualNote.trim() },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setExamManualNote('')
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    }
  }

  const switchExamQuestionMode = (mode) => {
    setExamQuestionMode(mode)
    setExamManualQuestion(mode === 'theory' ? EMPTY_THEORY_QUESTION : EMPTY_MCQ_QUESTION)
  }

  const addManualExamQuestion = async () => {
    if (!examManualQuestion.question.trim() || !examSelectedTopic) return
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'add_question', topic_id: examSelectedTopic.id, ...examManualQuestion },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setExamManualQuestion(examQuestionMode === 'theory' ? EMPTY_THEORY_QUESTION : EMPTY_MCQ_QUESTION)
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    }
  }

  // ── LMS functions ─────────────────────────────────────────────
  const fetchLmsCourses = async () => {
    setLmsCoursesLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'list_courses' } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsCourses(data.courses || [])
    } catch (err) {
      console.error('Failed to load LMS courses:', err)
    } finally {
      setLmsCoursesLoading(false)
    }
  }

  const addLmsCourse = async () => {
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'add_course', ...lmsNewCourse } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsNewCourse(c => ({ ...c, title: '', arabic_title: '', description: '', teacher_name: '' }))
      fetchLmsCourses()
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const openLmsCourse = async (course) => {
    setLmsSelectedCourse(course)
    setLmsSelectedSection(null)
    setLmsSelectedItem(null)
    setLmsSectionsLoading(true)
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'list_sections', course_id: course.id } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsSections(data.sections || [])
    } catch (err) {
      setLmsError(err.message)
    } finally {
      setLmsSectionsLoading(false)
    }
  }

  const addLmsSection = async () => {
    if (!lmsSelectedCourse || !lmsSectionForm.section_number || !lmsSectionForm.title.trim()) return
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', {
        body: { action: 'add_section', course_id: lmsSelectedCourse.id, section_number: Number(lmsSectionForm.section_number), title: lmsSectionForm.title },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsSectionForm({ section_number: '', title: '' })
      openLmsCourse(lmsSelectedCourse)
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const openLmsSection = async (section) => {
    setLmsSelectedSection(section)
    setLmsSelectedItem(null)
    setLmsItemsLoading(true)
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'list_items', section_id: section.id } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsItems(data.items || [])
    } catch (err) {
      setLmsError(err.message)
    } finally {
      setLmsItemsLoading(false)
    }
  }

  const addLmsItem = async () => {
    if (!lmsSelectedSection || !lmsItemForm.item_number || !lmsItemForm.item_type || !lmsItemForm.title.trim()) return
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', {
        body: { action: 'add_item', section_id: lmsSelectedSection.id, ...lmsItemForm, item_number: Number(lmsItemForm.item_number) },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsItemForm(EMPTY_LMS_ITEM)
      openLmsSection(lmsSelectedSection)
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const loadItemIntoForm = (item) => {
    setLmsEditingItemId(item.id)
    setLmsItemForm({
      item_number: item.item_number,
      item_type: item.item_type || 'reading',
      title: item.title || '',
      arabic_text: item.arabic_text || '',
      transliteration: item.transliteration || '',
      translation: item.translation || '',
      notes: item.notes || '',
    })
  }

  const saveEditedItem = async () => {
    if (!lmsEditingItemId) return
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', {
        body: { action: 'update_item', id: lmsEditingItemId, ...lmsItemForm, item_number: Number(lmsItemForm.item_number) },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsEditingItemId(null)
      setLmsItemForm(EMPTY_LMS_ITEM)
      openLmsSection(lmsSelectedSection)
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const openLmsItem = async (item) => {
    setLmsSelectedItem(item)
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'list_item_questions', item_id: item.id } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      setLmsItemQuestions(data.questions || [])
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const generateLmsNotes = async (item) => {
    setLmsGenerating(true)
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'generate_draft_notes', item } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openLmsSection(lmsSelectedSection)
    } catch (err) {
      setLmsError(err.message)
    } finally {
      setLmsGenerating(false)
    }
  }

  const generateLmsQuestions = async (item) => {
    setLmsGenerating(true)
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'generate_draft_questions', item } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openLmsItem(item)
    } catch (err) {
      setLmsError(err.message)
    } finally {
      setLmsGenerating(false)
    }
  }

  const uploadLmsAudio = async (item) => {
    if (!lmsAudioFile || !lmsSelectedSection) return
    setLmsAudioUploading(true)
    setLmsAudioUploadError(null)
    try {
      const { data: urlData, error: urlError } = await supabase.functions.invoke('admin-manage-lms', {
        body: { action: 'get_upload_url', section_id: lmsSelectedSection.id, item_number: item.item_number, filename: lmsAudioFile.name },
      })
      if (urlError) throw urlError
      if (urlData?.error) throw new Error(urlData.error)

      const { error: uploadError } = await supabase.storage.from('class-audio').uploadToSignedUrl(urlData.path, urlData.token, lmsAudioFile)
      if (uploadError) throw uploadError

      await supabase.functions.invoke('admin-manage-lms', { body: { action: 'update_item', id: item.id, audio_url: urlData.audioUrl } })
      setLmsAudioFile(null)
      openLmsSection(lmsSelectedSection)
    } catch (err) {
      setLmsAudioUploadError(err.message)
    } finally {
      setLmsAudioUploading(false)
    }
  }

  const lmsPublish = async (table, id) => {
    setLmsError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-lms', { body: { action: 'publish', table, id } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (table === 'lms_sections') openLmsCourse(lmsSelectedCourse)
      else if (table === 'lms_items') openLmsSection(lmsSelectedSection)
      else openLmsItem(lmsSelectedItem)
    } catch (err) {
      setLmsError(err.message)
    }
  }

  const lmsUnpublish = async (table, id) => {
    await supabase.functions.invoke('admin-manage-lms', { body: { action: 'unpublish', table, id } })
    if (table === 'lms_sections') openLmsCourse(lmsSelectedCourse)
    else if (table === 'lms_items') openLmsSection(lmsSelectedSection)
    else openLmsItem(lmsSelectedItem)
  }

  const lmsDelete = async (table, id) => {
    if (!window.confirm('Delete this permanently?')) return
    await supabase.functions.invoke('admin-manage-lms', { body: { action: 'delete', table, id } })
    if (table === 'lms_courses') { setLmsSelectedCourse(null); fetchLmsCourses() }
    else if (table === 'lms_sections') openLmsCourse(lmsSelectedCourse)
    else if (table === 'lms_items') openLmsSection(lmsSelectedSection)
    else openLmsItem(lmsSelectedItem)
  }

  // PDF and plain .txt only — Word .docx would need a separate
  // library (mammoth.js) not currently installed. Only produces MCQ
  // questions — past-question documents are objective by nature.
  const handleExamDocUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file || !examSelectedTopic) return
    setExamParsing(true)
    setExamError(null)
    try {
      let text = ''
      if (file.type === 'application/pdf') {
        const buffer = await file.arrayBuffer()
        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          text += content.items.map(it => it.str).join(' ') + '\n'
        }
      } else {
        text = await file.text()
      }
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', {
        body: { action: 'parse_questions_document', topic_id: examSelectedTopic.id, document_text: text },
      })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      if (data.missingAnswers > 0) {
        setExamError(`Parsed ${data.questions.length} questions, but ${data.missingAnswers} need a correct answer set manually before they can be published.`)
      }
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    } finally {
      setExamParsing(false)
    }
  }

  const examPublish = async (table, id) => {
    setExamError(null)
    try {
      const { data, error } = await supabase.functions.invoke('admin-manage-exam-prep', { body: { action: 'publish', table, id } })
      if (error) throw error
      if (data?.error) throw new Error(data.error)
      openExamTopic(examSelectedTopic)
    } catch (err) {
      setExamError(err.message)
    }
  }

  const examUnpublish = async (table, id) => {
    await supabase.functions.invoke('admin-manage-exam-prep', { body: { action: 'unpublish', table, id } })
    openExamTopic(examSelectedTopic)
  }

  const examDelete = async (table, id) => {
    if (!window.confirm('Delete this permanently?')) return
    await supabase.functions.invoke('admin-manage-exam-prep', { body: { action: 'delete', table, id } })
    openExamTopic(examSelectedTopic)
  }

  useEffect(() => {
    fetchStats()
    fetchTafseerList()
    fetchClassLessonList()
    fetchExamTopics()
  }, [])

  if (!user) return null

  return (
    <div className="page-content admin-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Growth and activity at a glance</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {lastUpdated && (
            <span style={{ fontSize: '0.8rem', color: '#8a9ab0' }}>
              Last updated: {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          )}
          <button className="btn btn-primary" onClick={fetchStats} disabled={loading}>
            {loading ? 'Refreshing…' : '↻ Refresh'}
          </button>
        </div>
      </div>

      {error && <div className="admin-error card">Couldn't load stats: {error}</div>}

      {loading ? (
        <div className="admin-loading"><p>Loading…</p></div>
      ) : stats ? (
        <div className="admin-stats-grid">
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalUsers}</span>
            <span className="admin-stat-label">Total users</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.newLast7}</span>
            <span className="admin-stat-label">New (last 7 days)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.newLast30}</span>
            <span className="admin-stat-label">New (last 30 days)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value" style={{ color: '#2e7d32' }}>{stats.activeSubscriptions}</span>
            <span className="admin-stat-label">Active Spaces subscriptions</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalQuizzesTaken}</span>
            <span className="admin-stat-label">Quizzes taken (all time)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.totalSpacesPosts}</span>
            <span className="admin-stat-label">Spaces posts (all time)</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value" style={{ color: '#094570' }}>{stats.hifdhActiveUsers}</span>
            <span className="admin-stat-label">Hifdh — active users</span>
          </div>
          <div className="admin-stat card">
            <span className="admin-stat-value">{stats.hifdhTotalProgressRows}</span>
            <span className="admin-stat-label">Hifdh — total progress rows</span>
          </div>
        </div>
      ) : null}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
  <h3 style={{ marginBottom: 6 }}>Majlis — Post an Announcement</h3>
  <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
    Posts here go straight to every Spaces subscriber's Majlis tab. Members can reply and ask questions directly on it.
  </p>
  <input
    type="text"
    placeholder="Title"
    value={majlisTitle}
    onChange={e => setMajlisTitle(e.target.value)}
    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', marginBottom: 10, fontSize: '0.9rem' }}
  />
  <textarea
    placeholder="Announcement body..."
    value={majlisBody}
    onChange={e => setMajlisBody(e.target.value)}
    rows={5}
    style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', marginBottom: 10, fontSize: '0.9rem', fontFamily: 'inherit' }}
  />
  <button className="btn btn-primary" onClick={postMajlisAnnouncement} disabled={postingMajlis || !majlisTitle.trim() || !majlisBody.trim()}>
    {postingMajlis ? 'Posting…' : 'Post to Majlis'}
  </button>
</div>
      {stats?.userGrowth && stats.userGrowth.length > 0 && (
        <div className="card" style={{ marginTop: 20, padding: 20 }}>
          <h3 style={{ marginBottom: 4 }}>User Growth</h3>
          <p style={{ fontSize: '0.8rem', color: '#6a8090', marginBottom: 16 }}>
            Monthly signups since launch, with running total.
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={stats.userGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8f0f8" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11 }} allowDecimals={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} allowDecimals={false} />
              <Tooltip contentStyle={{ fontSize: '0.8rem', borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: '0.78rem' }} />
              <Line yAxisId="left" type="monotone" dataKey="newUsers" name="New users" stroke="#e65100" strokeWidth={2} dot={{ r: 3 }} />
              <Line yAxisId="right" type="monotone" dataKey="cumulativeUsers" name="Total users" stroke="#094570" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {stats?.revenueGrowth && stats.revenueGrowth.length > 0 && (
        <div className="card" style={{ marginTop: 20, padding: 20 }}>
          <h3 style={{ marginBottom: 4 }}>Revenue Growth</h3>
          <p style={{ fontSize: '0.8rem', color: '#6a8090', marginBottom: 4 }}>
            New Spaces subscribers by signup month, and the revenue their first payment brought in.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#c0392b', marginBottom: 16 }}>
            Note: this reflects new-subscriber revenue by signup month, not total revenue collected
            each month — renewals overwrite the same subscription row rather than creating a new
            one, so recurring/renewal revenue isn't separately trackable yet.
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stats.revenueGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8f0f8" />
              <XAxis dataKey="label" tick={{ fontSize: 11 }} />
              <YAxis yAxisId="left" tick={{ fontSize: 11 }} allowDecimals={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} tickFormatter={v => `₦${v}`} />
              <Tooltip
                contentStyle={{ fontSize: '0.8rem', borderRadius: 8 }}
                formatter={(value, name) => name === 'Revenue (₦)' ? [`₦${value.toLocaleString()}`, name] : [value, name]}
              />
              <Legend wrapperStyle={{ fontSize: '0.78rem' }} />
              <Bar yAxisId="left" dataKey="newSubscribers" name="New subscribers" fill="#2e7d32" radius={[4, 4, 0, 0]} />
              <Bar yAxisId="right" dataKey="newSubscriberRevenue" name="Revenue (₦)" fill="#094570" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Manual Spaces access grant */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Grant Spaces Access</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 14 }}>
          For members who paid but can't get into Spaces. If they don't have a Sual
          account yet, one will be created and they'll be emailed a link to set a
          password.
        </p>

        {grantError && <div className="admin-error" style={{ marginBottom: 12 }}>{grantError}</div>}

        {grantResult && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              color: '#2e7d32',
              fontSize: '0.85rem',
            }}
          >
            Access granted for {grantResult.email}.{' '}
            {grantResult.accountCreated ? 'A new account was created and invited.' : 'Existing account activated.'}{' '}
            {grantResult.welcomeEmailSent ? 'Welcome email sent.' : 'Welcome email already sent previously.'}
          </div>
        )}

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input
            type="email"
            placeholder="member@email.com"
            value={grantEmail}
            onChange={e => setGrantEmail(e.target.value)}
            style={{
              flex: '1 1 260px',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #d0e0ec',
              fontSize: '0.9rem',
            }}
          />
          <button
            className="btn btn-primary"
            onClick={grantAccess}
            disabled={granting || !grantEmail.trim()}
          >
            {granting ? 'Granting…' : 'Grant Access'}
          </button>
        </div>
      </div>

      {/* Daily Tafseer manager */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Daily Tafseer</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
          {editingDate
            ? `Editing the entry for ${editingDate}.`
            : 'Set a date to create a new entry, or edit one from the list below. Setting a future date here means the automated generator will skip that day.'}
        </p>

        {tafseerError && <div className="admin-error" style={{ marginBottom: 12 }}>{tafseerError}</div>}
        {tafseerSaved && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              color: '#2e7d32',
              fontSize: '0.85rem',
            }}
          >
            Saved tafseer entry for {tafseerSaved.publish_date}.
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 12 }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Publish date</label>
            <input
              type="date"
              value={tafseerForm.publish_date}
              onChange={e => setTafseerForm(f => ({ ...f, publish_date: e.target.value }))}
              disabled={!!editingDate}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Surah name</label>
            <input
              type="text"
              placeholder="Al-Baqarah"
              value={tafseerForm.surah_name}
              onChange={e => setTafseerForm(f => ({ ...f, surah_name: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Surah #</label>
            <input
              type="number"
              min="1" max="114"
              value={tafseerForm.surah_num}
              onChange={e => setTafseerForm(f => ({ ...f, surah_num: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Ayah #</label>
            <input
              type="number"
              min="1"
              value={tafseerForm.ayah_num}
              onChange={e => setTafseerForm(f => ({ ...f, ayah_num: e.target.value }))}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Arabic text</label>
          <textarea
            rows={2}
            dir="rtl"
            value={tafseerForm.arabic_text}
            onChange={e => setTafseerForm(f => ({ ...f, arabic_text: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '1rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Transliteration</label>
          <textarea
            rows={2}
            placeholder="Bismillahir-Rahmanir-Raheem..."
            value={tafseerForm.transliteration}
            onChange={e => setTafseerForm(f => ({ ...f, transliteration: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Translation</label>
          <textarea
            rows={2}
            value={tafseerForm.translation}
            onChange={e => setTafseerForm(f => ({ ...f, translation: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Commentary (tafseer)</label>
          <textarea
            rows={5}
            value={tafseerForm.tafseer_body}
            onChange={e => setTafseerForm(f => ({ ...f, tafseer_body: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 6 }}>Lessons</label>
          {tafseerForm.lessons.map((lesson, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input
                type="text"
                placeholder={`Lesson ${idx + 1}`}
                value={lesson}
                onChange={e => updateLesson(idx, e.target.value)}
                style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
              />
              {tafseerForm.lessons.length > 1 && (
                <button className="btn btn-ghost" onClick={() => removeLessonField(idx)} type="button">✕</button>
              )}
            </div>
          ))}
          <button className="btn btn-ghost" onClick={addLessonField} type="button">+ Add lesson</button>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            className="btn btn-primary"
            onClick={saveTafseer}
            disabled={tafseerSaving || !tafseerForm.publish_date || !tafseerForm.surah_name || !tafseerForm.arabic_text || !tafseerForm.translation}
          >
            {tafseerSaving ? 'Saving…' : editingDate ? 'Update Entry' : 'Save Entry'}
          </button>
          {editingDate && (
            <button className="btn btn-ghost" onClick={resetTafseerForm} type="button">Cancel Edit</button>
          )}
        </div>

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid #e8f0f8' }}>
          <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 10 }}>Recent entries</p>
          {tafseerListLoading ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Loading…</p>
          ) : tafseerEntries.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No entries yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {tafseerEntries.map(entry => (
                <div
                  key={entry.publish_date}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: editingDate === entry.publish_date ? 'rgba(9,69,112,0.06)' : '#f5f8fb',
                    fontSize: '0.85rem',
                  }}
                >
                  <span>
                    <strong>{entry.publish_date}</strong> — {entry.surah_name} {entry.surah_num}:{entry.ayah_num}
                  </span>
                  <span style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-ghost" onClick={() => loadEntryIntoForm(entry)} type="button">Edit</button>
                    <button className="btn btn-ghost" onClick={() => deleteTafseer(entry.publish_date)} type="button" style={{ color: '#c0392b' }}>Delete</button>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Daily Class Lesson manager */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Daily Class Lesson</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
          {editingClassLessonKey
            ? `Editing the ${classLessonForm.class_id} (${classLessonForm.level}) entry for ${classLessonForm.publish_date}.`
            : 'One entry per class and level per day. Members see this in-app alongside the Telegram group, not instead of it.'}
        </p>

        {classLessonError && <div className="admin-error" style={{ marginBottom: 12 }}>{classLessonError}</div>}
        {classLessonSaved && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(46,125,50,0.08)',
              border: '1px solid rgba(46,125,50,0.25)',
              color: '#2e7d32',
              fontSize: '0.85rem',
            }}
          >
            Saved {classLessonSaved.class_id} ({classLessonSaved.level}) entry for {classLessonSaved.publish_date}.
          </div>
        )}
        {classLessonLmsMsg && (
          <div
            className="card"
            style={{
              marginBottom: 14,
              padding: '12px 16px',
              background: 'rgba(9,69,112,0.06)',
              border: '1px solid rgba(9,69,112,0.2)',
              color: '#094570',
              fontSize: '0.85rem',
            }}
          >
            {classLessonLmsMsg}
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 12 }}>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Class</label>
            <select
              value={classLessonForm.class_id}
              onChange={e => setClassLessonForm(f => ({ ...f, class_id: e.target.value }))}
              disabled={!!editingClassLessonKey}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            >
              <option value="hadeeth">Hadeeth</option>
              <option value="arabiyyah">Arabiyyah</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Level</label>
            <select
              value={classLessonForm.level}
              onChange={e => setClassLessonForm(f => ({ ...f, level: e.target.value }))}
              disabled={!!editingClassLessonKey}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Publish date</label>
            <input
              type="date"
              value={classLessonForm.publish_date}
              onChange={e => setClassLessonForm(f => ({ ...f, publish_date: e.target.value }))}
              disabled={!!editingClassLessonKey}
              style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Title</label>
          <input
            type="text"
            placeholder={classLessonForm.class_id === 'hadeeth' ? 'Hadith 11 — On sincerity' : 'Idafah — the possessive construction'}
            value={classLessonForm.title}
            onChange={e => setClassLessonForm(f => ({ ...f, title: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Arabic text</label>
          <textarea
            rows={2}
            dir="rtl"
            value={classLessonForm.arabic_text}
            onChange={e => setClassLessonForm(f => ({ ...f, arabic_text: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '1rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Transliteration</label>
          <textarea
            rows={2}
            value={classLessonForm.transliteration}
            onChange={e => setClassLessonForm(f => ({ ...f, transliteration: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Translation</label>
          <textarea
            rows={2}
            value={classLessonForm.translation}
            onChange={e => setClassLessonForm(f => ({ ...f, translation: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Commentary</label>
          <textarea
            rows={5}
            value={classLessonForm.commentary}
            onChange={e => setClassLessonForm(f => ({ ...f, commentary: e.target.value }))}
            style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem', fontFamily: 'inherit' }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 4 }}>Class audio</label>
          {classLessonForm.audio_url && (
            <div style={{ marginBottom: 8 }}>
              <audio controls src={classLessonForm.audio_url} style={{ width: '100%' }} />
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => setClassLessonForm(f => ({ ...f, audio_url: '' }))}
                style={{ marginTop: 4, fontSize: '0.78rem' }}
              >
                Remove audio
              </button>
            </div>
          )}
          {audioUploadError && <div className="admin-error" style={{ marginBottom: 8 }}>{audioUploadError}</div>}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="file"
              accept="audio/*"
              onChange={e => setAudioFile(e.target.files?.[0] || null)}
              style={{ fontSize: '0.85rem' }}
            />
            <button
              className="btn btn-ghost"
              type="button"
              onClick={uploadAudio}
              disabled={!audioFile || audioUploading}
            >
              {audioUploading ? 'Uploading…' : 'Upload'}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: '#3a4a5a' }}>
            <input
              type="checkbox"
              checked={classLessonForm.add_to_lms}
              onChange={e => setClassLessonForm(f => ({ ...f, add_to_lms: e.target.checked }))}
            />
            Also add this to the LMS course library
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: '0.78rem', color: '#6a8090', display: 'block', marginBottom: 6 }}>Lessons</label>
          {classLessonForm.lessons.map((lesson, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <input
                type="text"
                placeholder={`Lesson ${idx + 1}`}
                value={lesson}
                onChange={e => updateClassLessonLesson(idx, e.target.value)}
                style={{ flex: 1, padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec', fontSize: '0.88rem' }}
              />
              {classLessonForm.lessons.length > 1 && (
                <button className="btn btn-ghost" onClick={() => removeClassLessonField(idx)} type="button">✕</button>
              )}
            </div>
          ))}
          <button className="btn btn-ghost" onClick={addClassLessonField} type="button">+ Add lesson</button>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            className="btn btn-primary"
            onClick={saveClassLesson}
            disabled={classLessonSaving || !classLessonForm.publish_date || !classLessonForm.title.trim()}
          >
            {classLessonSaving ? 'Saving…' : editingClassLessonKey ? 'Update Entry' : 'Save Entry'}
          </button>
          {editingClassLessonKey && (
            <button className="btn btn-ghost" onClick={resetClassLessonForm} type="button">Cancel Edit</button>
          )}
        </div>

        <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid #e8f0f8' }}>
          <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 10 }}>Recent entries</p>
          {classLessonListLoading ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>Loading…</p>
          ) : classLessonEntries.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: '#8a9ab0' }}>No entries yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {classLessonEntries.map(entry => {
                const key = `${entry.class_id}|${entry.level}|${entry.publish_date}`
                return (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 12px',
                      borderRadius: 8,
                      background: editingClassLessonKey === key ? 'rgba(9,69,112,0.06)' : '#f5f8fb',
                      fontSize: '0.85rem',
                    }}
                  >
                    <span>
                      <strong>{entry.publish_date}</strong> — {entry.class_id} · {entry.level} — {entry.title}
                      {entry.audio_url && <span style={{ marginLeft: 6 }}>🎧</span>}
                      {entry.lms_section_id && <span style={{ marginLeft: 6, fontSize: '0.72rem', color: '#8a9ab0' }}>· synced to LMS</span>}
                    </span>
                    <span style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-ghost" onClick={() => loadClassLessonIntoForm(entry)} type="button">Edit</button>
                      <button className="btn btn-ghost" onClick={() => deleteClassLesson(entry)} type="button" style={{ color: '#c0392b' }}>Delete</button>
                    </span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Exam Prep manager — UTME + JUPEB, MCQ + theory */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>Exam Prep</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
          Nothing here is visible to students until published. Theory questions store a model
          answer only — they are a study aid, never auto-graded.
        </p>

        {examError && <div className="admin-error" style={{ marginBottom: 12 }}>{examError}</div>}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, marginBottom: 16 }}>
          <select value={examNewTopic.board} onChange={e => setExamNewTopic(t => ({ ...t, board: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }}>
            <option value="utme">UTME</option>
            <option value="jupeb">JUPEB</option>
          </select>
          <select value={examNewTopic.subject} onChange={e => setExamNewTopic(t => ({ ...t, subject: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }}>
            <option value="islamic_studies">Islamic Studies</option>
            <option value="arabic">Arabic</option>
          </select>
          <input type="text" placeholder="New topic title" value={examNewTopic.title} onChange={e => setExamNewTopic(t => ({ ...t, title: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <input type="text" placeholder="Syllabus section (optional)" value={examNewTopic.syllabus_section} onChange={e => setExamNewTopic(t => ({ ...t, syllabus_section: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <button className="btn btn-ghost" onClick={addExamTopic} disabled={!examNewTopic.title.trim()}>+ Add Topic</button>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 260px' }}>
            {examTopicsLoading ? <p>Loading…</p> : examTopics.map(t => (
              <button key={t.id} onClick={() => openExamTopic(t)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 10px', marginBottom: 4, borderRadius: 8, border: 'none', background: examSelectedTopic?.id === t.id ? 'rgba(9,69,112,0.08)' : 'transparent', cursor: 'pointer', fontSize: '0.82rem' }}>
                <strong>{(t.board || 'utme').toUpperCase()} · {t.subject === 'arabic' ? 'AR' : 'IS'}</strong> — {t.title}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            {!examSelectedTopic ? (
              <p style={{ color: '#8a9ab0' }}>Select a topic on the left.</p>
            ) : examContentLoading ? (
              <p>Loading…</p>
            ) : (
              <>
                <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 10 }}>
                  {(examSelectedTopic.board || 'utme').toUpperCase()} — {examSelectedTopic.title}
                </p>

                <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={generateExamNotes} disabled={examGenerating}>{examGenerating ? '…' : 'AI: Draft Notes'}</button>
                  <button className="btn btn-primary" onClick={() => generateExamQuestions('mcq')} disabled={examGenerating}>{examGenerating ? '…' : 'AI: Draft 10 MCQ'}</button>
                  <button className="btn btn-primary" onClick={() => generateExamQuestions('theory')} disabled={examGenerating}>{examGenerating ? '…' : 'AI: Draft 5 Theory'}</button>
                  <label className="btn btn-ghost" style={{ cursor: 'pointer' }}>
                    {examParsing ? 'Parsing…' : 'Upload Past Questions (MCQ)'}
                    <input type="file" accept="application/pdf,.txt" onChange={handleExamDocUpload} disabled={examParsing} style={{ display: 'none' }} />
                  </label>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <textarea placeholder="Or type a note directly…" value={examManualNote} onChange={e => setExamManualNote(e.target.value)} rows={3} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <button className="btn btn-ghost" onClick={addManualExamNote} disabled={!examManualNote.trim()}>+ Add Note Manually</button>
                </div>

                <div style={{ marginBottom: 16, padding: 12, background: '#f5f8fb', borderRadius: 8 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <button
                      className="btn btn-ghost"
                      style={examQuestionMode === 'mcq' ? { background: 'rgba(9,69,112,0.1)' } : {}}
                      onClick={() => switchExamQuestionMode('mcq')}
                    >
                      MCQ
                    </button>
                    <button
                      className="btn btn-ghost"
                      style={examQuestionMode === 'theory' ? { background: 'rgba(9,69,112,0.1)' } : {}}
                      onClick={() => switchExamQuestionMode('theory')}
                    >
                      Theory
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Question"
                    value={examManualQuestion.question}
                    onChange={e => setExamManualQuestion(q => ({ ...q, question: e.target.value }))}
                    style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }}
                  />

                  {examQuestionMode === 'mcq' ? (
                    <>
                      {examManualQuestion.options.map((opt, i) => (
                        <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                          <input type="radio" checked={examManualQuestion.correct_index === i} onChange={() => setExamManualQuestion(q => ({ ...q, correct_index: i }))} />
                          <input
                            type="text"
                            placeholder={`Option ${String.fromCharCode(65 + i)}`}
                            value={opt}
                            onChange={e => setExamManualQuestion(q => { const options = [...q.options]; options[i] = e.target.value; return { ...q, options } })}
                            style={{ flex: 1, padding: 6, borderRadius: 6, border: '1px solid #d0e0ec' }}
                          />
                        </div>
                      ))}
                      <input
                        type="text"
                        placeholder="Explanation (optional)"
                        value={examManualQuestion.explanation}
                        onChange={e => setExamManualQuestion(q => ({ ...q, explanation: e.target.value }))}
                        style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginTop: 6, marginBottom: 6 }}
                      />
                    </>
                  ) : (
                    <textarea
                      placeholder="Model answer (a strong sample answer to compare against, not a rigid scoring key)"
                      value={examManualQuestion.model_answer}
                      onChange={e => setExamManualQuestion(q => ({ ...q, model_answer: e.target.value }))}
                      rows={5}
                      style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }}
                    />
                  )}

                  <button className="btn btn-ghost" onClick={addManualExamQuestion} disabled={!examManualQuestion.question.trim()}>+ Add Question Manually</button>
                </div>

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Notes ({examNotes.length})</h4>
                {examNotes.map(n => (
                  <div key={n.id} style={{ padding: '10px 12px', marginBottom: 8, borderRadius: 8, background: n.status === 'published' ? 'rgba(46,125,50,0.06)' : '#f5f8fb' }}>
                    <p style={{ fontSize: '0.85rem', whiteSpace: 'pre-wrap', marginBottom: 8 }}>{n.body.slice(0, 300)}{n.body.length > 300 ? '…' : ''}</p>
                    <span style={{ fontSize: '0.75rem', marginRight: 10 }}>{n.status}{n.ai_generated ? ' · AI' : ''}</span>
                    {n.status === 'published' ? (
                      <button className="btn btn-ghost" onClick={() => examUnpublish('exam_prep_notes', n.id)}>Unpublish</button>
                    ) : (
                      <button className="btn btn-ghost" onClick={() => examPublish('exam_prep_notes', n.id)}>Publish</button>
                    )}
                    <button className="btn btn-ghost" onClick={() => examDelete('exam_prep_notes', n.id)} style={{ color: '#c0392b' }}>Delete</button>
                  </div>
                ))}

                <h4 style={{ fontSize: '0.9rem', marginTop: 20, marginBottom: 8 }}>Questions ({examQuestions.length})</h4>
                {examQuestions.map(q => (
                  <div key={q.id} style={{ padding: '10px 12px', marginBottom: 8, borderRadius: 8, background: q.status === 'published' ? 'rgba(46,125,50,0.06)' : '#f5f8fb' }}>
                    <p style={{ fontSize: '0.85rem', marginBottom: 6 }}>
                      <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: 4, background: q.question_type === 'theory' ? '#6a1b9a' : '#094570', color: '#fff', marginRight: 6 }}>
                        {q.question_type === 'theory' ? 'THEORY' : 'MCQ'}
                      </span>
                      {q.question}
                    </p>
                    {q.question_type === 'theory' ? (
                      <p style={{ fontSize: '0.8rem', color: '#6a8090', marginBottom: 6, whiteSpace: 'pre-wrap' }}>
                        <strong>Model answer:</strong> {q.model_answer ? q.model_answer.slice(0, 200) + (q.model_answer.length > 200 ? '…' : '') : '(none yet)'}
                      </p>
                    ) : (
                      <>
                        <ol type="A" style={{ fontSize: '0.8rem', marginBottom: 6, paddingLeft: 20 }}>
                          {(q.options || []).map((o, i) => <li key={i} style={{ fontWeight: i === q.correct_index ? 700 : 400, color: i === q.correct_index ? '#2e7d32' : 'inherit' }}>{o}</li>)}
                        </ol>
                        {q.correct_index === null && <p style={{ color: '#c0392b', fontSize: '0.78rem' }}>⚠ No confirmed answer — cannot publish</p>}
                      </>
                    )}
                    <span style={{ fontSize: '0.75rem', marginRight: 10 }}>{q.status}{q.ai_generated ? ' · AI' : ''}</span>
                    {q.status === 'published' ? (
                      <button className="btn btn-ghost" onClick={() => examUnpublish('exam_prep_questions', q.id)}>Unpublish</button>
                    ) : (
                      <button
                        className="btn btn-ghost"
                        onClick={() => examPublish('exam_prep_questions', q.id)}
                        disabled={q.question_type === 'mcq' ? q.correct_index === null : !q.model_answer}
                      >
                        Publish
                      </button>
                    )}
                    <button className="btn btn-ghost" onClick={() => examDelete('exam_prep_questions', q.id)} style={{ color: '#c0392b' }}>Delete</button>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* LMS — Structured Courses manager */}
      <div className="card" style={{ marginTop: 20, padding: 20 }}>
        <h3 style={{ marginBottom: 6 }}>LMS — Structured Courses</h3>
        <p style={{ fontSize: '0.85rem', color: '#6a8090', marginBottom: 16 }}>
          Nothing here is visible to students until published. Each course has ordered sections;
          each section holds individually-trackable items — audio, reading, quiz, or discussion.
        </p>

        {lmsError && <div className="admin-error" style={{ marginBottom: 12 }}>{lmsError}</div>}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10, marginBottom: 16 }}>
          <select value={lmsNewCourse.class_id} onChange={e => setLmsNewCourse(c => ({ ...c, class_id: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }}>
            <option value="arabiyyah">Arabiyyah</option>
            <option value="hadeeth">Hadeeth</option>
          </select>
          <select value={lmsNewCourse.level} onChange={e => setLmsNewCourse(c => ({ ...c, level: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <input type="text" placeholder="Course title" value={lmsNewCourse.title} onChange={e => setLmsNewCourse(c => ({ ...c, title: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <input type="text" placeholder="Arabic title" value={lmsNewCourse.arabic_title} onChange={e => setLmsNewCourse(c => ({ ...c, arabic_title: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <input type="text" placeholder="Teacher name" value={lmsNewCourse.teacher_name} onChange={e => setLmsNewCourse(c => ({ ...c, teacher_name: e.target.value }))} style={{ padding: '9px 12px', borderRadius: 8, border: '1px solid #d0e0ec' }} />
          <button className="btn btn-ghost" onClick={addLmsCourse} disabled={!lmsNewCourse.title.trim()}>+ Add Course</button>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 220px' }}>
            {lmsCoursesLoading ? <p>Loading…</p> : lmsCourses.map(c => (
              <button key={c.id} onClick={() => openLmsCourse(c)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 10px', marginBottom: 4, borderRadius: 8, border: 'none', background: lmsSelectedCourse?.id === c.id ? 'rgba(9,69,112,0.08)' : 'transparent', cursor: 'pointer', fontSize: '0.82rem' }}>
                <strong>{c.class_id === 'hadeeth' ? '📜' : '✍️'} {c.level}</strong> — {c.title}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 280 }}>
            {!lmsSelectedCourse ? (
              <p style={{ color: '#8a9ab0' }}>Select a course on the left.</p>
            ) : !lmsSelectedSection ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>{lmsSelectedCourse.title}</p>
                  <button className="btn btn-ghost" onClick={() => lmsDelete('lms_courses', lmsSelectedCourse.id)} style={{ color: '#c0392b' }}>Delete Course</button>
                </div>

                <div style={{ padding: 12, background: '#f5f8fb', borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>Add a section</p>
                  <input type="number" placeholder="Section #" value={lmsSectionForm.section_number} onChange={e => setLmsSectionForm(f => ({ ...f, section_number: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <input type="text" placeholder="Title (e.g. Chapter 1)" value={lmsSectionForm.title} onChange={e => setLmsSectionForm(f => ({ ...f, title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <button className="btn btn-ghost" onClick={addLmsSection}>+ Add Section</button>
                </div>

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Sections ({lmsSections.length})</h4>
                {lmsSectionsLoading ? <p>Loading…</p> : lmsSections.map(s => (
                  <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: 6, borderRadius: 8, background: s.status === 'published' ? 'rgba(46,125,50,0.06)' : '#f5f8fb' }}>
                    <span style={{ fontSize: '0.85rem' }}>
                      <strong>Section {s.section_number}</strong> — {s.title} <span style={{ fontSize: '0.72rem', color: '#8a9ab0' }}>({s.status})</span>
                    </span>
                    <span style={{ display: 'flex', gap: 6 }}>
                      <button className="btn btn-ghost" onClick={() => openLmsSection(s)}>Manage Items</button>
                      {s.status === 'published' ? (
                        <button className="btn btn-ghost" onClick={() => lmsUnpublish('lms_sections', s.id)}>Unpublish</button>
                      ) : (
                        <button className="btn btn-ghost" onClick={() => lmsPublish('lms_sections', s.id)}>Publish</button>
                      )}
                      <button className="btn btn-ghost" onClick={() => lmsDelete('lms_sections', s.id)} style={{ color: '#c0392b' }}>Delete</button>
                    </span>
                  </div>
                ))}
              </>
            ) : !lmsSelectedItem ? (
              <>
                <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setLmsSelectedSection(null)}>← Back to sections</button>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12 }}>Section {lmsSelectedSection.section_number} — {lmsSelectedSection.title}</p>

                <div style={{ padding: 12, background: '#f5f8fb', borderRadius: 8, marginBottom: 16 }}>
                  <p style={{ fontSize: '0.78rem', color: '#6a8090', marginBottom: 8 }}>{lmsEditingItemId ? 'Edit item' : 'Add an item'}</p>
                  <input type="number" placeholder="Item #" value={lmsItemForm.item_number} onChange={e => setLmsItemForm(f => ({ ...f, item_number: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <select value={lmsItemForm.item_type} onChange={e => setLmsItemForm(f => ({ ...f, item_type: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }}>
                    <option value="reading">Reading</option>
                    <option value="audio">Audio</option>
                    <option value="quiz">Quiz</option>
                    <option value="discussion">Discussion</option>
                  </select>
                  <input type="text" placeholder="Title" value={lmsItemForm.title} onChange={e => setLmsItemForm(f => ({ ...f, title: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <textarea dir="rtl" placeholder="Arabic text" value={lmsItemForm.arabic_text} onChange={e => setLmsItemForm(f => ({ ...f, arabic_text: e.target.value }))} rows={2} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <input type="text" placeholder="Transliteration" value={lmsItemForm.transliteration} onChange={e => setLmsItemForm(f => ({ ...f, transliteration: e.target.value }))} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <textarea placeholder="Translation" value={lmsItemForm.translation} onChange={e => setLmsItemForm(f => ({ ...f, translation: e.target.value }))} rows={2} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <textarea placeholder="Notes / commentary" value={lmsItemForm.notes} onChange={e => setLmsItemForm(f => ({ ...f, notes: e.target.value }))} rows={4} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #d0e0ec', marginBottom: 6 }} />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-ghost" onClick={lmsEditingItemId ? saveEditedItem : addLmsItem}>
                      {lmsEditingItemId ? 'Save Changes' : '+ Add Item'}
                    </button>
                    {lmsEditingItemId && (
                      <button className="btn btn-ghost" onClick={() => { setLmsEditingItemId(null); setLmsItemForm(EMPTY_LMS_ITEM) }}>Cancel</button>
                    )}
                  </div>
                </div>

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Items ({lmsItems.length})</h4>
                {lmsItemsLoading ? <p>Loading…</p> : lmsItems.map(it => (
                  <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', marginBottom: 6, borderRadius: 8, background: it.status === 'published' ? 'rgba(46,125,50,0.06)' : '#f5f8fb', flexWrap: 'wrap', gap: 6 }}>
                    <span style={{ fontSize: '0.85rem' }}>
                      <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: 4, background: '#094570', color: '#fff', marginRight: 6 }}>{it.item_type.toUpperCase()}</span>
                      <strong>Item {it.item_number}</strong> — {it.title} {it.audio_url && '🎧'} <span style={{ fontSize: '0.72rem', color: '#8a9ab0' }}>({it.status})</span>
                    </span>
                    <span style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
                      {it.item_type === 'quiz' && <button className="btn btn-ghost" onClick={() => openLmsItem(it)}>Manage Questions</button>}
                      {it.item_type === 'audio' && (
                        <>
                          <input type="file" accept="audio/*" onChange={e => setLmsAudioFile(e.target.files?.[0] || null)} style={{ fontSize: '0.78rem', width: 120 }} />
                          <button className="btn btn-ghost" onClick={() => uploadLmsAudio(it)} disabled={!lmsAudioFile || lmsAudioUploading}>{lmsAudioUploading ? '…' : 'Upload Audio'}</button>
                        </>
                      )}
                      <button className="btn btn-ghost" onClick={() => generateLmsNotes(it)} disabled={lmsGenerating}>{lmsGenerating ? '…' : 'AI: Notes'}</button>
                      <button className="btn btn-ghost" onClick={() => loadItemIntoForm(it)}>Edit</button>
                      {it.status === 'published' ? (
                        <button className="btn btn-ghost" onClick={() => lmsUnpublish('lms_items', it.id)}>Unpublish</button>
                      ) : (
                        <button className="btn btn-ghost" onClick={() => lmsPublish('lms_items', it.id)}>Publish</button>
                      )}
                      <button className="btn btn-ghost" onClick={() => lmsDelete('lms_items', it.id)} style={{ color: '#c0392b' }}>Delete</button>
                    </span>
                  </div>
                ))}
                {lmsAudioUploadError && <div className="admin-error" style={{ marginTop: 8 }}>{lmsAudioUploadError}</div>}
              </>
            ) : (
              <>
                <button className="btn btn-ghost" style={{ marginBottom: 12 }} onClick={() => setLmsSelectedItem(null)}>← Back to items</button>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: 12 }}>Item {lmsSelectedItem.item_number} — {lmsSelectedItem.title} (Quiz)</p>

                <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                  <button className="btn btn-primary" onClick={() => generateLmsQuestions(lmsSelectedItem)} disabled={lmsGenerating}>{lmsGenerating ? '…' : 'AI: Draft 5 Questions'}</button>
                </div>

                <h4 style={{ fontSize: '0.9rem', marginBottom: 8 }}>Questions ({lmsItemQuestions.length})</h4>
                {lmsItemQuestions.map(q => (
                  <div key={q.id} style={{ padding: '10px 12px', marginBottom: 8, borderRadius: 8, background: q.status === 'published' ? 'rgba(46,125,50,0.06)' : '#f5f8fb' }}>
                    <p style={{ fontSize: '0.85rem', marginBottom: 6 }}>{q.question}</p>
                    <ol type="A" style={{ fontSize: '0.8rem', marginBottom: 6, paddingLeft: 20 }}>
                      {(q.options || []).map((o, i) => <li key={i} style={{ fontWeight: i === q.correct_index ? 700 : 400, color: i === q.correct_index ? '#2e7d32' : 'inherit' }}>{o}</li>)}
                    </ol>
                    <span style={{ fontSize: '0.75rem', marginRight: 10 }}>{q.status}{q.ai_generated ? ' · AI' : ''}</span>
                    {q.status === 'published' ? (
                      <button className="btn btn-ghost" onClick={() => lmsUnpublish('lms_item_questions', q.id)}>Unpublish</button>
                    ) : (
                      <button className="btn btn-ghost" onClick={() => lmsPublish('lms_item_questions', q.id)}>Publish</button>
                    )}
                    <button className="btn btn-ghost" onClick={() => lmsDelete('lms_item_questions', q.id)} style={{ color: '#c0392b' }}>Delete</button>
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