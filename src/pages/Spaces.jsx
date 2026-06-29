import { BadgeStrip } from '../components/Badges.jsx'
import React, { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase.js'
import './Spaces.css'

const CATEGORIES = [
  { key: 'all',        label: 'All',       arabic: 'الكُلّ',      icon: '🌐' },
  { key: 'fiqh',      label: 'Fiqh',      arabic: 'الفِقْه',     icon: '⚖️' },
  { key: 'seerah',    label: 'Seerah',    arabic: 'السِّيرَة',    icon: '🌙' },
  { key: 'arabiyyah', label: 'Arabiyyah', arabic: 'العَرَبِيَّة', icon: '✍️' },
  { key: 'tajweed',   label: 'Tajweed',   arabic: 'التَّجْوِيد',  icon: '🎙️' },
  { key: 'aqeedah',   label: 'Aqeedah',   arabic: 'العَقِيدَة',   icon: '☪️' },
  { key: 'general',   label: 'General',   arabic: 'عَامّ',        icon: '💬' },
]

const CLASSES = [
  {
    id: 'arabiyyah',
    title: 'Arabiyyah Class',
    arabicTitle: 'فَصْلُ العَرَبِيَّة',
    icon: '✍️',
    description: 'A structured Arabic language programme from absolute beginner to mastery of the classical sciences.',
    color: '#094570',
    levels: [
      {
        key: 'beginner',
        label: 'Beginner',
        arabic: 'مُبْتَدِئ',
        color: '#2e7d32',
        icon: '🌱',
        title: 'Duruus Lughahtil-Arabiyyah',
        arabicTitle: 'دُرُوسُ اللُّغَةِ العَرَبِيَّة',
        description: 'Complete study of the three volumes of Duruus Al-Lughah Al-Arabiyyah by Dr V. Abdur Raheem — the gold standard for learning Arabic from scratch. Covers reading, writing, vocabulary, basic grammar, and simple conversation.',
        curriculum: [
          'Volume 1 — Arabic alphabet, vowels, basic nouns and verbs, simple sentences',
          'Volume 2 — Expanded grammar, verb conjugation, common expressions',
          'Volume 3 — Intermediate grammar, reading comprehension, composition',
          'Weekly vocabulary memorization and dictation tests',
          'Simple Arabic composition exercises from Week 8',
        ],
        outcome: 'Read Arabic text with vowels fluently, understand basic Quranic vocabulary, and write simple Arabic sentences.',
        duration: '6 months',
        commitment: '5 hours per week',
      },
      {
        key: 'intermediate',
        label: 'Intermediate',
        arabic: 'مُتَوَسِّط',
        color: '#e65100',
        icon: '📖',
        title: 'Nahw, Sarf and Insha',
        arabicTitle: 'النَّحْو وَالصَّرْف وَالإِنْشَاء',
        description: 'Systematic study of Arabic grammar (Nahw), morphology (Sarf), and Arabic composition (Insha). Students move from passive reading to active command of the language structures used in Islamic scholarship.',
        curriculum: [
          'Nahw — Al-Ajrumiyyah with full i\'rab practice on Quranic verses',
          'Nahw — Qatr An-Nada by Ibn Hisham with commentary',
          'Sarf — Shudha Al-Urf by Al-Hamlawi, all verb forms and patterns',
          'Insha — Guided Arabic composition, letter writing, and paragraph construction',
          'Weekly i\'rab exercises on selected Quranic passages',
          'Monthly composition assignments reviewed and corrected',
        ],
        outcome: 'Perform full i\'rab of Quranic verses, understand the morphological structure of any Arabic word, and write correct Arabic prose.',
        duration: '8 months',
        commitment: '7 hours per week',
      },
      {
        key: 'advanced',
        label: 'Advanced',
        arabic: 'مُتَقَدِّم',
        color: '#6a1b9a',
        icon: '🏛️',
        title: 'Classical Sciences — Alfiyyah, Sarf, Balaghah',
        arabicTitle: 'الأَلْفِيَّة وَالصَّرْف وَالبَلَاغَة',
        description: 'Study of the classical Arabic sciences at the level of the traditional Madrasah curriculum. This level produces scholars capable of reading unvowelled classical texts independently.',
        curriculum: [
          'Alfiyyah Ibn Malik — the 1,000-line poem covering all of Arabic grammar with commentary of Ibn Aqil',
          'Advanced Sarf — Maqsud fi Al-Sarf and Al-Kaylani with all derived forms',
          'Balaghah — Al-Balaghatul-Wadihah',
          'Reading of classical unvowelled texts',
          'Weekly memorization of Alfiyyah verses with i\'rab',
          'Independent reading and translation of classical Arabic texts',
        ],
        outcome: 'Read unvowelled classical Arabic texts independently, understand Alfiyyah Ibn Malik, and apply Balaghah principles to Quranic analysis.',
        duration: '12 months',
        commitment: '10 hours per week',
      },
    ],
  },
  {
    id: 'hadeeth',
    title: 'Hadeeth Class',
    arabicTitle: 'فَصْلُ الحَدِيث',
    icon: '📜',
    description: 'A structured Hadeeth memorization and study programme — from the Forty of An-Nawawi to the great collections of the Sunnah.',
    color: '#7b3f00',
    levels: [
      {
        key: 'beginner',
        label: 'Beginner',
        arabic: 'مُبْتَدِئ',
        color: '#2e7d32',
        icon: '🌱',
        title: 'Al-Arba\'oon An-Nawawiyyah',
        arabicTitle: 'الأَرْبَعُونَ النَّوَوِيَّة',
        description: 'Complete memorization and study of the Forty Hadith of Imam An-Nawawi — the foundational text of Islamic learning for over seven centuries. Every hadith is memorized in Arabic with its chain, studied for its meanings, and applied to daily life.',
        curriculum: [
          'Memorization of all 42 hadith with Arabic text and sanad',
          'Study of Imam An-Nawawi\'s commentary on each hadith',
          'Understanding the fiqh and aqeedah derived from each hadith',
          'Weekly recitation test — 2 hadith per week minimum',
          'Final examination — recite all 42 from memory',
        ],
        outcome: 'Memorize all 42 hadith of An-Nawawi with their Arabic text, understand their meanings and scholarly commentary, and extract basic Islamic rulings from them.',
        duration: '6 months',
        commitment: '3 hours per week',
        hadiths: [
          { num: 1,  text: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّات', translation: 'Actions are by intentions' },
          { num: 2,  text: 'الإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّه', translation: 'Islam is that you testify there is no god but Allah' },
          { num: 3,  text: 'بُنِيَ الإِسْلَامُ عَلَى خَمْس', translation: 'Islam was built on five' },
          { num: 4,  text: 'إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّه', translation: 'The creation of each of you is gathered in his mother\'s womb' },
          { num: 5,  text: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْه', translation: 'Whoever introduces into this affair of ours that which is not of it' },
          { num: 6,  text: 'الحَلَالُ بَيِّنٌ وَالحَرَامُ بَيِّن', translation: 'The halal is clear and the haram is clear' },
          { num: 7,  text: 'الدِّينُ النَّصِيحَة', translation: 'The religion is sincere advice' },
          { num: 8,  text: 'أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا', translation: 'I was commanded to fight the people until they testify' },
          { num: 9,  text: 'مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوه', translation: 'Whatever I have forbidden you, avoid it' },
          { num: 10, text: 'إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا', translation: 'Allah is pure and accepts only what is pure' },
        ],
      },
      {
        key: 'intermediate',
        label: 'Intermediate',
        arabic: 'مُتَوَسِّط',
        color: '#e65100',
        icon: '📖',
        title: 'Bulugh Al-Maram and Umdat Al-Ahkam',
        arabicTitle: 'بُلُوغُ المَرَام وَعُمْدَةُ الأَحْكَام',
        description: 'Memorization and study of the two greatest collections of legal hadith — Bulugh Al-Maram by Ibn Hajar Al-Asqalani and Umdatul-Ahkam by Ibn Qudamah. These books form the backbone of fiqh al-hadith study in traditional Islamic scholarship.',
        curriculum: [
          'Umdatul-Ahkam — 414 hadith on acts of worship and transactions, memorization and study',
          'Bulughul-Maram — systematic study of all chapters',
          'Weekly memorization target — 5 hadith per week minimum',
          'Monthly written examination on chapters covered',
        ],
        outcome: 'Memorize core legal hadith from both texts, understand how scholars derive fiqh rulings from hadith, and read Ibn Hajar\'s Arabic commentary.',
        duration: '10 months',
        commitment: '6 hours per week',
      },
      {
        key: 'advanced',
        label: 'Advanced',
        arabic: 'مُتَقَدِّم',
        color: '#6a1b9a',
        icon: '🏛️',
        title: 'Sahih Bukhari Memorization',
        arabicTitle: 'حِفْظُ صَحِيح البُخَارِي',
        description: 'The pinnacle of hadith study — systematic memorization and deep study of Sahih Al-Bukhari, the most authentic book after the Quran. Students study with Fath Al-Bari, the greatest commentary on Al-Bukhari by Ibn Hajar Al-Asqalani.',
        curriculum: [
          'Memorization of selected hadith from each chapter of Sahih Bukhari (Kitab Al-Iman through Kitab Al-Jami\')',
          'Study of Fath Al-Bari by Ibn Hajar Al-Asqalani — chapter by chapter',
          'Hadith sciences (Mustalahul-Hadith) — understanding chains, narrators, and authentication',
          'Independent research assignments on specific hadith and their commentaries',
        ],
        outcome: 'Memorize 200+ hadith from Sahih Al-Bukhari, read and understand hadith sciences at an advanced level.',
        duration: '18 months',
        commitment: '12 hours per week',
      },
    ],
  },
]

export default function Spaces({ user }) {
  const [subscription,   setSubscription]   = useState(null)
  const [subLoading,     setSubLoading]     = useState(true)
  const [posts,          setPosts]          = useState([])
  const [postsLoading,   setPostsLoading]   = useState(false)
  const [category,       setCategory]       = useState('all')
  const [activePost,     setActivePost]     = useState(null)
  const [replies,        setReplies]        = useState([])
  const [newPost,        setNewPost]        = useState({ title: '', body: '', category: 'general' })
  const [newReply,       setNewReply]       = useState('')
  const [showNewPost,    setShowNewPost]    = useState(false)
  const [posting,        setPosting]        = useState(false)
  const [error,          setError]          = useState(null)
  const [activeTab,      setActiveTab]      = useState('community') // 'community' | 'arabiyyah' | 'hadeeth'
  const [classLevel,     setClassLevel]     = useState({ arabiyyah: 'beginner', hadeeth: 'beginner' })

  const checkSubscription = useCallback(async () => {
    if (!user) return
    setSubLoading(true)
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single()
      setSubscription(data)
    } catch {
      setSubscription(null)
    } finally {
      setSubLoading(false)
    }
  }, [user])

  const fetchPosts = useCallback(async () => {
  if (!user) return
  setPostsLoading(true)
  try {
    let query = supabase
      .from('spaces_posts')
      .select('*, profiles(badge_ids)')
      .order('created_at', { ascending: false })
    if (category !== 'all') query = query.eq('category', category)
    const { data } = await query
    
    // Flatten badge_ids onto each post
    const enriched = (data || []).map(post => ({
      ...post,
      author_badge_ids: post.profiles?.badge_ids || [],
    }))
    setPosts(enriched)
  } catch (err) {
    console.error(err)
  } finally {
    setPostsLoading(false)
  }
}, [user, category])

  useEffect(() => {
    if (!user) return
    checkSubscription()
    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success') {
      const ref = params.get('ref') || 'manual_' + Date.now()
      supabase.from('subscriptions').upsert({
        user_id: user.id,
        status: 'active',
        paystack_customer_code: ref,
        started_at: new Date().toISOString(),
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      }, { onConflict: 'user_id' }).then(() => {
        window.history.replaceState({}, '', '/spaces')
        checkSubscription()
      })
    }
  }, [user, checkSubscription])

  useEffect(() => {
    if (subscription?.status === 'active') fetchPosts()
  }, [subscription, fetchPosts])

  if (!user) return null

  const fetchReplies = async (postId) => {
  const { data } = await supabase
    .from('spaces_replies')
    .select('*, profiles(badge_ids)')
    .eq('post_id', postId)
    .order('created_at', { ascending: true })
  
  const enriched = (data || []).map(r => ({
    ...r,
    author_badge_ids: r.profiles?.badge_ids || [],
  }))
  setReplies(enriched)
}

  const openPost = async (post) => {
    setActivePost(post)
    await fetchReplies(post.id)
  }

  const submitPost = async () => {
    if (!newPost.title.trim() || !newPost.body.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setPosting(true)
    setError(null)
    try {
      const { error } = await supabase.from('spaces_posts').insert({
        user_id: user.id,
        title: newPost.title.trim(),
        body: newPost.body.trim(),
        category: newPost.category,
      })
      if (error) throw error
      setNewPost({ title: '', body: '', category: 'general' })
      setShowNewPost(false)
      fetchPosts()
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const submitReply = async () => {
    if (!newReply.trim()) return
    setPosting(true)
    try {
      const { error } = await supabase.from('spaces_replies').insert({
        post_id: activePost.id,
        user_id: user.id,
        body: newReply.trim(),
      })
      if (error) throw error
      setNewReply('')
      fetchReplies(activePost.id)
    } catch (err) {
      setError(err.message)
    } finally {
      setPosting(false)
    }
  }

  const handlePaystack = () => {
    const ref = 'sual_' + user.id.slice(0, 8) + '_' + Date.now()
    window.location.href = 'https://paystack.com/buy/sual-spaces-vcvfks?email=' +
      encodeURIComponent(user.email) + '&ref=' + ref
  }

  const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })

  const getInitials = (str) => str ? str[0].toUpperCase() : 'U'
  const isPaid = subscription?.status === 'active'

  if (subLoading) {
    return (
      <div className="page-content spaces-page">
        <div className="spaces-loading">
          <div className="spaces-spinner" />
          <p>Loading Spaces...</p>
        </div>
      </div>
    )
  }

  // ── Post detail view ──────────────────────────────────────────
  if (activePost) {
    return (
      <div className="page-content spaces-page">
        <button className="spaces-back" onClick={() => { setActivePost(null); setReplies([]) }}>
          ← Back to Spaces
        </button>
        <div className="spaces-post-top">
  <span className="spaces-cat-badge">
    {CATEGORIES.find(c => c.key === post.category)?.icon} {post.category}
  </span>
  <span className="spaces-post-date">{formatDate(post.created_at)}</span>
</div>
<div className="spaces-post-author">
  <div className="spaces-post-avatar">
    {getInitials(post.user_id)}
  </div>
  <span className="spaces-post-author-name">Member</span>
  <BadgeStrip earnedIds={post.author_badge_ids || []} />
</div>

        <div className="spaces-replies">
          <h3 className="spaces-replies-title">
            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
          </h3>
          {replies.length === 0 && (
            <div className="spaces-no-replies">No replies yet. Be the first to respond.</div>
          )}
          {replies.map((r, i) => (
            <div key={i} className={`spaces-reply card ${r.is_scholar_answer ? 'spaces-reply--scholar' : ''}`}>
              {!r.is_scholar_answer && <BadgeStrip earnedIds={r.author_badge_ids || []} />}
              <div className="spaces-reply-header">
                <div className="spaces-reply-avatar" style={{ background: r.is_scholar_answer ? '#094570' : '#e8f0f8' }}>
                  <span style={{ color: r.is_scholar_answer ? '#ffffff' : '#094570' }}>
                    {r.is_scholar_answer ? '🎓' : getInitials(r.user_id)}
                  </span>
                </div>
                <div>
                  <p className="spaces-reply-author">
                    {r.is_scholar_answer ? 'Scholar Response' : 'Member'}
                    {r.is_scholar_answer && <span className="spaces-scholar-badge">Scholar</span>}
                  </p>
                  <p className="spaces-reply-date">{formatDate(r.created_at)}</p>
                </div>
              </div>
              <p className="spaces-reply-body">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="spaces-reply-input card">
          <h3 className="spaces-reply-input-title">Add a Reply</h3>
          {error && <div className="spaces-error">{error}</div>}
          <textarea
            className="spaces-textarea"
            placeholder="Share your knowledge or ask a follow-up question..."
            value={newReply}
            onChange={e => setNewReply(e.target.value)}
            rows={4}
          />
          <button className="spaces-submit-btn" onClick={submitReply} disabled={posting || !newReply.trim()}>
            {posting ? 'Posting...' : 'Post Reply →'}
          </button>
        </div>
      </div>
    )
  }

  // ── Paywall ───────────────────────────────────────────────────
  if (!isPaid) {
    return (
      <div className="page-content spaces-page">
        <h1 className="page-title">Spaces</h1>
        <p className="page-subtitle">فَضَاءَات — A community for serious students of Islamic knowledge</p>
        <div className="spaces-paywall">
          <div className="spaces-paywall-icon">🕌</div>
          <h2 className="spaces-paywall-title">Members Only</h2>
          <p className="spaces-paywall-desc">
            Spaces is an exclusive community for paid members. Ask questions, share knowledge,
            get scholar answers, and join structured Arabic and Hadeeth classes.
          </p>
          <div className="spaces-features">
            {[
              { icon: '🎓', text: 'Direct answers from a qualified scholar' },
              { icon: '✍️', text: 'Structured Arabiyyah class — Beginner to Advanced' },
              { icon: '📜', text: 'Structured Hadeeth class — An-Nawawi to Sahih Al-Bukhari' },
              { icon: '💬', text: 'Threaded community discussions' },
              { icon: '👥', text: 'Community of serious students' },
              { icon: '🔒', text: 'Private and moderated environment' },
            ].map((f, i) => (
              <div key={i} className="spaces-feature-item">
                <span>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div className="spaces-price-card">
            <div className="spaces-price">
              <span className="spaces-currency">₦</span>
              <span className="spaces-amount">2,500</span>
              <span className="spaces-period">/month</span>
            </div>
            <p className="spaces-price-note">Cancel anytime. Billed monthly.</p>
            {error && <div className="spaces-error" style={{ marginBottom: 12 }}>{error}</div>}
            <button className="spaces-pay-btn" onClick={handlePaystack}>
              Subscribe to Spaces →
            </button>
          </div>
          <p className="spaces-paywall-hadith">
            "Whoever Allah wants good for, He gives him understanding of the religion."
            <br /><span>Sahih Bukhari 71</span>
          </p>
        </div>
      </div>
    )
  }

  // ── Class view renderer ───────────────────────────────────────
  const renderClass = (cls) => {
    const currentLevelKey = classLevel[cls.id]
    const currentLevel    = cls.levels.find(l => l.key === currentLevelKey)

    return (
      <div className="spaces-class-page">

        {/* Class header */}
        <div className="spaces-class-header" style={{ borderColor: cls.color }}>
          <span className="spaces-class-icon">{cls.icon}</span>
          <div>
            <h2 className="spaces-class-title">{cls.title}</h2>
            <p className="spaces-class-arabic arabic">{cls.arabicTitle}</p>
            <p className="spaces-class-desc">{cls.description}</p>
          </div>
        </div>

        {/* Level tabs */}
        <div className="spaces-class-levels">
          {cls.levels.map(lv => (
            <button
              key={lv.key}
              className={`spaces-class-level-btn ${currentLevelKey === lv.key ? 'spaces-class-level-btn--active' : ''}`}
              style={currentLevelKey === lv.key ? { borderColor: lv.color, color: lv.color, background: '#fff' } : {}}
              onClick={() => setClassLevel(prev => ({ ...prev, [cls.id]: lv.key }))}
            >
              {lv.icon} {lv.label}
              <span className="spaces-class-level-arabic arabic">{lv.arabic}</span>
            </button>
          ))}
        </div>

        {/* Level content */}
        {currentLevel && (
          <div className="spaces-class-content">

            {/* Title card */}
            <div className="spaces-class-content-header card" style={{ borderLeft: `4px solid ${currentLevel.color}` }}>
              <div className="spaces-class-content-meta">
                <span className="spaces-class-level-badge" style={{ background: currentLevel.color }}>
                  {currentLevel.icon} {currentLevel.label}
                </span>
                <span className="spaces-class-duration">⏱ {currentLevel.duration}</span>
                <span className="spaces-class-commitment">📅 {currentLevel.commitment}</span>
              </div>
              <h3 className="spaces-class-content-title">{currentLevel.title}</h3>
              <p className="spaces-class-content-arabic arabic">{currentLevel.arabicTitle}</p>
              <p className="spaces-class-content-desc">{currentLevel.description}</p>
            </div>

            {/* Curriculum */}
            <div className="spaces-class-section card">
              <h4 className="spaces-class-section-title">📋 Curriculum</h4>
              <ul className="spaces-class-curriculum">
                {currentLevel.curriculum.map((item, i) => (
                  <li key={i} className="spaces-class-curriculum-item">
                    <span className="spaces-class-curriculum-num">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="spaces-class-section card spaces-class-outcome-card">
              <h4 className="spaces-class-section-title">🎯 Learning Outcome</h4>
              <p className="spaces-class-outcome-text">{currentLevel.outcome}</p>
            </div>

            {/* Sample hadith for beginner hadeeth */}
            {currentLevel.hadiths && (
              <div className="spaces-class-section card">
                <h4 className="spaces-class-section-title">📜 Sample Hadith — First Ten</h4>
                <p className="spaces-class-hadith-note">
                  Below are the first ten hadith of the Arba'oon An-Nawawiyyah. All 42 will be memorized by end of programme.
                </p>
                <div className="spaces-hadith-list">
                  {currentLevel.hadiths.map(h => (
                    <div key={h.num} className="spaces-hadith-item">
                      <span className="spaces-hadith-num">{h.num}</span>
                      <div>
                        <p className="spaces-hadith-arabic arabic">{h.text}</p>
                        <p className="spaces-hadith-translation">{h.translation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

           {/* Join CTA */}
            <div className="spaces-class-cta card">
              <p className="spaces-class-cta-text">
                Ready to join the {currentLevel.label} {cls.title}?
                Click the button below to join the dedicated Telegram group for your level.
                All classes are conducted and coordinated through Telegram.
              </p>
              
              <a
                className="spaces-submit-btn spaces-telegram-btn"
                href={
                  currentLevel.key === 'beginner'
                    ? 'https://t.me/+mCqRMQQ4qmA5ZjI0'
                    : currentLevel.key === 'intermediate'
                    ? 'https://t.me/+E_jr7Ojha9RiNzc0'
                    : 'https://t.me/+IuJuOAz3FkUyNGQ8'
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 Join {currentLevel.label} Telegram Group →
              </a>
              <p className="spaces-class-cta-note">
                The same Telegram group serves both the Arabiyyah Class and the Hadeeth Class at each level.
                Introduce yourself when you join and mention which class you are enrolling in.
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── Main paid view ────────────────────────────────────────────
  return (
    <div className="page-content spaces-page">

      {/* Header */}
      <div className="spaces-header">
        <div>
          <h1 className="page-title">Spaces</h1>
          <p className="page-subtitle">فَضَاءَات — Community for serious students</p>
        </div>
        {activeTab === 'community' && (
          <button className="spaces-new-btn" onClick={() => setShowNewPost(true)}>
            + New Post
          </button>
        )}
      </div>

      {/* Main tabs */}
      <div className="spaces-main-tabs">
        {[
          { key: 'community', label: 'Community',      icon: '💬' },
          { key: 'arabiyyah', label: 'Arabiyyah Class', icon: '✍️' },
          { key: 'hadeeth',   label: 'Hadeeth Class',   icon: '📜' },
        ].map(t => (
          <button
            key={t.key}
            className={`spaces-main-tab ${activeTab === t.key ? 'spaces-main-tab--active' : ''}`}
            onClick={() => setActiveTab(t.key)}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* ── Arabiyyah class ── */}
      {activeTab === 'arabiyyah' && renderClass(CLASSES[0])}

      {/* ── Hadeeth class ── */}
      {activeTab === 'hadeeth' && renderClass(CLASSES[1])}

      {/* ── Community tab ── */}
      {activeTab === 'community' && (
        <>
          {/* New post modal */}
          {showNewPost && (
            <div className="spaces-modal-overlay" onClick={() => setShowNewPost(false)}>
              <div className="spaces-modal card" onClick={e => e.stopPropagation()}>
                <h3 className="spaces-modal-title">New Post</h3>
                {error && <div className="spaces-error">{error}</div>}
                <div className="spaces-field">
                  <label className="spaces-label">Category</label>
                  <select
                    className="spaces-select"
                    value={newPost.category}
                    onChange={e => setNewPost({ ...newPost, category: e.target.value })}
                  >
                    {CATEGORIES.filter(c => c.key !== 'all').map(c => (
                      <option key={c.key} value={c.key}>{c.icon} {c.label}</option>
                    ))}
                  </select>
                </div>
                <div className="spaces-field">
                  <label className="spaces-label">Title</label>
                  <input
                    type="text"
                    className="spaces-input"
                    placeholder="Your question or topic..."
                    value={newPost.title}
                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="spaces-field">
                  <label className="spaces-label">Body</label>
                  <textarea
                    className="spaces-textarea"
                    placeholder="Explain in detail..."
                    value={newPost.body}
                    onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                    rows={5}
                  />
                </div>
                <div className="spaces-modal-actions">
                  <button className="spaces-cancel-btn" onClick={() => setShowNewPost(false)}>Cancel</button>
                  <button className="spaces-submit-btn" onClick={submitPost} disabled={posting}>
                    {posting ? 'Posting...' : 'Post →'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Category filter */}
          <div className="spaces-categories">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`spaces-cat-btn ${category === c.key ? 'spaces-cat-btn--active' : ''}`}
                onClick={() => setCategory(c.key)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          {/* Posts */}
          {postsLoading ? (
            <div className="spaces-loading"><div className="spaces-spinner" /></div>
          ) : posts.length === 0 ? (
            <div className="spaces-empty card">
              <p className="spaces-empty-icon">💬</p>
              <p className="spaces-empty-text">No posts yet in this category.</p>
              <p className="spaces-empty-sub">Be the first to start a discussion.</p>
            </div>
          ) : (
            <div className="spaces-posts">
              {posts.map(post => (
                <button key={post.id} className="spaces-post-card card" onClick={() => openPost(post)}>
                  <div className="spaces-post-top">
                    <span className="spaces-cat-badge">
                      {CATEGORIES.find(c => c.key === post.category)?.icon} {post.category}
                    </span>
                    <span className="spaces-post-date">{formatDate(post.created_at)}</span>
                  </div>
                  <h3 className="spaces-post-title">{post.title}</h3>
                  <p className="spaces-post-preview">
                    {post.body.length > 120 ? post.body.slice(0, 120) + '...' : post.body}
                  </p>
                  <div className="spaces-post-footer">
                    <span className="spaces-post-read">Read Discussion →</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}