
export const BADGES = [
  {
    id: 'first_step',
    name: 'First Step',
    icon: '🌱',
    description: 'Completed your first quiz',
  },
  {
    id: 'sharp_mind',
    name: 'Sharp Mind',
    icon: '🎯',
    description: 'Scored 100% on any quiz',
  },
  {
    id: 'on_fire',
    name: 'On Fire',
    icon: '🔥',
    description: 'Took 3 quizzes in one day',
  },
  {
    id: 'rising_scholar',
    name: 'Rising Scholar',
    icon: '⭐',
    description: 'Reached Intermediate in any discipline',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: '🏆',
    description: 'Reached Advanced in any discipline',
  },
  {
    id: 'explorer',
    name: 'Explorer',
    icon: '📚',
    description: 'Studied all 7 disciplines',
  },
  {
    id: 'dedicated',
    name: 'Dedicated',
    icon: '💎',
    description: 'Took 25 quizzes total',
  },
  {
    id: 'devoted',
    name: 'Devoted',
    icon: '🕌',
    description: 'Took 50 quizzes total',
  },
  {
    id: 'collector',
    name: 'Collector',
    icon: '🔖',
    description: 'Bookmarked 10 Q&As',
  },
  {
    id: 'community_member',
    name: 'Community Member',
    icon: '🤝',
    description: 'Subscribed to Spaces',
  },
  {
    id: 'night_scholar',
    name: 'Night Scholar',
    icon: '🌙',
    description: 'Took a quiz after 10pm',
  },
  {
    id: 'master',
    name: 'Master',
    icon: '👑',
    description: 'Reached Advanced in all 7 disciplines',
  },
]

const DISCIPLINES = ['fiqh', 'nahw', 'sarf', 'tafseer', 'usul', 'arabiyyah', 'seerah']

// Calculate which badges are earned from user data
export function calculateEarnedBadges({ quizHistory = [], userLevel = {}, bookmarks = [], subscription = null }) {
  const earned = new Set()

  // 🌱 First Step — took at least one quiz
  if (quizHistory.length >= 1) earned.add('first_step')

  // 🎯 Sharp Mind — scored 100% on any quiz
  if (quizHistory.some(q => q.percentage === 100)) earned.add('sharp_mind')

  // 🔥 On Fire — 3 quizzes in one day
  const quizzesByDay = {}
  quizHistory.forEach(q => {
    const day = new Date(q.taken_at || q.created_at).toDateString()
    quizzesByDay[day] = (quizzesByDay[day] || 0) + 1
  })
  if (Object.values(quizzesByDay).some(count => count >= 3)) earned.add('on_fire')

  // ⭐ Rising Scholar — intermediate or advanced in any discipline
  const level = userLevel?.current_level || 'beginner'
  if (level === 'intermediate' || level === 'advanced') earned.add('rising_scholar')

  // 🏆 Advanced — advanced in any discipline
  if (level === 'advanced') earned.add('advanced')

  // 📚 Explorer — has quiz history in all 7 disciplines
  const studiedDisciplines = new Set(quizHistory.map(q => q.discipline))
  if (DISCIPLINES.every(d => studiedDisciplines.has(d))) earned.add('explorer')

  // 💎 Dedicated — 25+ quizzes
  if (quizHistory.length >= 25) earned.add('dedicated')

  // 🕌 Devoted — 50+ quizzes
  if (quizHistory.length >= 50) earned.add('devoted')

  // 🔖 Collector — 10+ bookmarks
  if (bookmarks.length >= 10) earned.add('collector')

  // 🤝 Community Member — active subscription
  if (subscription?.status === 'active') earned.add('community_member')

  // 🌙 Night Scholar — took a quiz after 10pm
  const hasNightQuiz = quizHistory.some(q => {
    const hour = new Date(q.taken_at || q.created_at).getHours()
    return hour >= 22
  })
  if (hasNightQuiz) earned.add('night_scholar')

  // 👑 Master — advanced level (simplified — extend when per-discipline levels exist)
  // For now: 50+ quizzes with 80%+ average across all disciplines
  if (quizHistory.length >= 50) {
    const avg = quizHistory.reduce((s, q) => s + q.percentage, 0) / quizHistory.length
    if (avg >= 80 && studiedDisciplines.size === 7) earned.add('master')
  }

  return earned
}

// Get newly earned badges by comparing old and new sets
export function getNewlyEarned(previousIds = [], currentEarned = new Set()) {
  return [...currentEarned].filter(id => !previousIds.includes(id))
}