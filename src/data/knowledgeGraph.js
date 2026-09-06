// src/data/knowledgeGraph.js
//
// Data layer for the Knowledge Graph feature. This does not duplicate
// lesson content — it links to it. Lesson-type nodes point at real
// topic IDs already defined in tawheed.js, adab.js, tajweedClass.js,
// seerahClass.js, and arabiyyahClass.js; verse/hadith nodes carry
// their own short Arabic/English/source, reused from content already
// verified when each course was built, not re-derived here.
//
// STATUS: this is a genuine, accurate starting graph, not a full map
// of every topic across all five courses. It covers Tawheed Class's
// core conceptual spine in real depth (Rububiyyah, Uluhiyyah, Asma
// wa's-Sifaat, Shirk, Taghut, plus related concepts like Tawakkul and
// Ikhlas), links out to Adab Class at the unit level wherever a
// genuine cross-discipline connection exists, and now adds a first,
// honest pass at Tajweed Class, Seerah Class, and Arabiyyah Class:
// their own core conceptual spines, real topic-id-level lesson nodes
// wherever that id is known with certainty, and only the cross-course
// connections that are genuinely accurate rather than forced for
// coverage's sake (Arabiyyah's Nahw, for instance, is a language
// discipline with no real conceptual overlap with Tawheed's theology,
// so no edge connects them here, since a graph is only useful if its
// absence of a link is as trustworthy as its presence of one).
// Expanding this file unit by unit, the same way the courses
// themselves were built, is the natural next step.
//
// A namespacing note: Seerah Class and Arabiyyah Class each reuse
// short topic-id prefixes internally (both happen to use "found-1"
// for their own opening topic, in their own separate data files,
// which is fine there). Since this file's GRAPH_NODES object is
// shared across every course, lesson-node keys below are prefixed by
// course (lesson-srh-*, lesson-arb-*, lesson-twj-*) to guarantee
// uniqueness here, while the topicId field inside each node still holds
// the real, unprefixed id used for navigation in that course's own
// file.
//
// NODE SHAPE
// {
//   id: string (unique),
//   type: 'concept' | 'lesson' | 'verse' | 'hadith',
//   title: string,
//   subtitle?: string,           // concept nodes: short tagline
//   summary?: string,            // concept nodes: 1-2 sentence description
//   course?: 'tawheed' | 'adab' | 'tajweedclass' | 'seerahclass' | 'arabiyyahclass',
//                                 // lesson nodes, and concepts anchored to one course
//   unit?: string,               // lesson nodes: unit id in that course's data file
//   topicId?: string,            // lesson nodes: exact topic id, when known with certainty
//   arabic?: string,             // verse/hadith nodes
//   english?: string,            // verse/hadith nodes
//   source?: string,             // verse/hadith nodes
// }
//
// EDGE SHAPE
// { a: nodeId, b: nodeId, relation: 'prerequisite' | 'advanced' | 'related' | 'evidence' | 'lesson' }
//
// Edges are stored once, in one direction, with the relation
// describing what `b` is relative to `a`. getNeighbors() below
// resolves both directions, inverting prerequisite/advanced when
// traversed backward (if A is a prerequisite of B, then viewed from
// B, A is naturally "the foundation beneath this", and viewed from
// A, B is naturally "where this leads next").

export const GRAPH_NODES = {
  // ── Core Tawheed concepts ──────────────────────────────────
  tawheed: {
    id: 'tawheed',
    type: 'concept',
    title: 'Tawheed',
    subtitle: 'Islamic Monotheism',
    summary: 'The oneness of Allah in Lordship, worship, and names and attributes. The foundation every other act of worship and knowledge depends upon.',
    course: 'tawheed',
  },
  rububiyyah: {
    id: 'rububiyyah',
    type: 'concept',
    title: 'Tawheed al-Rububiyyah',
    subtitle: 'Oneness of Lordship',
    summary: 'Affirming Allah alone as Creator, Owner, and Manager of everything that exists.',
    course: 'tawheed',
  },
  uluhiyyah: {
    id: 'uluhiyyah',
    type: 'concept',
    title: 'Tawheed al-Uluhiyyah',
    subtitle: 'Oneness of Worship',
    summary: 'Directing every act of worship, dua, fear, hope, reliance, sacrifice, and vows, to Allah alone.',
    course: 'tawheed',
  },
  'asma-sifaat': {
    id: 'asma-sifaat',
    type: 'concept',
    title: "Asma wa's-Sifaat",
    subtitle: 'Names and Attributes',
    summary: "Affirming Allah's revealed names and attributes without resemblance, denial, or asking how.",
    course: 'tawheed',
  },
  shirk: {
    id: 'shirk',
    type: 'concept',
    title: 'Shirk',
    subtitle: 'Associating partners with Allah',
    summary: 'The direct opposite of Tawheed, in its major, minor, and hidden forms.',
    course: 'tawheed',
  },
  'shirk-major': {
    id: 'shirk-major',
    type: 'concept',
    title: 'Major Shirk',
    subtitle: 'Shirk Akbar',
    summary: 'Directing a genuine act of worship to other than Allah. Removes a person from Islam entirely.',
    course: 'tawheed',
  },
  'shirk-minor': {
    id: 'shirk-minor',
    type: 'concept',
    title: 'Minor Shirk',
    subtitle: 'Shirk Asghar',
    summary: 'Smaller but still serious violations that can enter ordinary speech and habit.',
    course: 'tawheed',
  },
  'shirk-hidden': {
    id: 'shirk-hidden',
    type: 'concept',
    title: 'Hidden Shirk',
    subtitle: 'Riya',
    summary: 'Performing worship, even partially, to be seen and praised by people rather than for Allah alone.',
    course: 'tawheed',
  },
  taghut: {
    id: 'taghut',
    type: 'concept',
    title: 'Taghut',
    subtitle: 'False objects of worship',
    summary: 'Anything by which a servant exceeds his proper limit as an object of worship, one followed, or one obeyed.',
    course: 'tawheed',
  },
  tawakkul: {
    id: 'tawakkul',
    type: 'concept',
    title: 'Tawakkul',
    subtitle: 'Reliance on Allah',
    summary: 'Placing complete trust in Allah regarding outcomes, held together with genuine effort, not instead of it.',
    course: 'tawheed',
  },
  qadar: {
    id: 'qadar',
    type: 'concept',
    title: 'Al-Qadar',
    subtitle: 'Divine decree',
    summary: "Belief that everything occurring within creation happens according to Allah's knowledge and decree.",
    course: 'tawheed',
  },
  dua: {
    id: 'dua',
    type: 'concept',
    title: 'Dua',
    subtitle: 'Supplication',
    summary: 'Calling upon Allah, described directly in hadith as worship itself.',
    course: 'tawheed',
  },
  ikhlas: {
    id: 'ikhlas',
    type: 'concept',
    title: 'Ikhlas',
    subtitle: 'Sincerity of intention',
    summary: 'Directing an act of worship purely for Allah, the quality that separates genuine worship from its outward form alone.',
    course: null, // deliberately cross-cutting: anchors both courses, not owned by one
  },

  // ── Tawheed Class lesson nodes (topicId verified against the ──
  // ── actual tawheed.js file built earlier this session) ──────
  'lesson-found-1': { id: 'lesson-found-1', type: 'lesson', title: 'What is Tawheed?', course: 'tawheed', unit: 'unit-1', topicId: 'found-1' },
  'lesson-found-4': { id: 'lesson-found-4', type: 'lesson', title: 'Why Allah Created Jinn and Mankind', course: 'tawheed', unit: 'unit-1', topicId: 'found-4' },
  'lesson-rub-1': { id: 'lesson-rub-1', type: 'lesson', title: 'Definition of Rububiyyah', course: 'tawheed', unit: 'unit-2', topicId: 'rub-1' },
  'lesson-rub-4': { id: 'lesson-rub-4', type: 'lesson', title: 'Why Rububiyyah Alone Is Not Sufficient', course: 'tawheed', unit: 'unit-2', topicId: 'rub-4' },
  'lesson-rub-5': { id: 'lesson-rub-5', type: 'lesson', title: 'Al-Qadar as Part of Rububiyyah', course: 'tawheed', unit: 'unit-2', topicId: 'rub-5' },
  'lesson-uluh-1': { id: 'lesson-uluh-1', type: 'lesson', title: 'Definition and Central Role of Uluhiyyah', course: 'tawheed', unit: 'unit-3', topicId: 'uluh-1' },
  'lesson-uluh-2': { id: 'lesson-uluh-2', type: 'lesson', title: 'Dua as an Act of Worship', course: 'tawheed', unit: 'unit-3', topicId: 'uluh-2' },
  'lesson-uluh-4': { id: 'lesson-uluh-4', type: 'lesson', title: "Reliance (Tawakkul) and Seeking Help", course: 'tawheed', unit: 'unit-3', topicId: 'uluh-4' },
  'lesson-asma-1': { id: 'lesson-asma-1', type: 'lesson', title: 'Definition and Foundational Principles', course: 'tawheed', unit: 'unit-4', topicId: 'asma-1' },
  'lesson-shirk-1': { id: 'lesson-shirk-1', type: 'lesson', title: 'Definition of Shirk', course: 'tawheed', unit: 'unit-5', topicId: 'shirk-1' },
  'lesson-shirk-2': { id: 'lesson-shirk-2', type: 'lesson', title: 'Major Shirk and Its Categories', course: 'tawheed', unit: 'unit-5', topicId: 'shirk-2' },
  'lesson-shirk-3': { id: 'lesson-shirk-3', type: 'lesson', title: 'Minor Shirk and Everyday Examples', course: 'tawheed', unit: 'unit-5', topicId: 'shirk-3' },
  'lesson-shirk-4': { id: 'lesson-shirk-4', type: 'lesson', title: 'Hidden Shirk: Riya and Its Dangers', course: 'tawheed', unit: 'unit-5', topicId: 'shirk-4' },
  'lesson-ut7-1': { id: 'lesson-ut7-1', type: 'lesson', title: 'Definition of Taghut', course: 'tawheed', unit: 'unit-12', topicId: 'ut7-1' },
  'lesson-ut7-3': { id: 'lesson-ut7-3', type: 'lesson', title: 'Why Disbelief in Taghut Precedes Faith', course: 'tawheed', unit: 'unit-12', topicId: 'ut7-3' },

  // ── Adab Class links (unit-level only — safe, since exact ────
  // ── topic ids within each unit were not re-verified here) ───
  'lesson-adab-unit1': { id: 'lesson-adab-unit1', type: 'lesson', title: 'Adab Class: Foundations of Adab', course: 'adab', unit: 'unit-1' },
  'lesson-adab-unit2': { id: 'lesson-adab-unit2', type: 'lesson', title: 'Adab Class: Adab Toward Allah', course: 'adab', unit: 'unit-2' },
  'lesson-adab-unit6': { id: 'lesson-adab-unit6', type: 'lesson', title: 'Adab Class: Adab of Speech', course: 'adab', unit: 'unit-6' },

  // ── Core Tajweed Class concepts ─────────────────────────────
  tajweed: {
    id: 'tajweed',
    type: 'concept',
    title: 'Tajweed',
    subtitle: 'Correct Qur\u2019anic recitation',
    summary: 'The science of pronouncing every letter of the Qur\u2019an correctly, from its precise articulation point through the specific rules governing how letters interact.',
    course: 'tajweedclass',
  },
  'noon-sakinah-rules': {
    id: 'noon-sakinah-rules',
    type: 'concept',
    title: 'Noon Sakinah and Tanween Rules',
    subtitle: 'Izhar, idgham, iqlab, ikhfa',
    summary: 'The four distinct rules governing how a silent noon or tanween is pronounced depending on the letter that follows it.',
    course: 'tajweedclass',
  },
  ghunnah: {
    id: 'ghunnah',
    type: 'concept',
    title: 'Ghunnah',
    subtitle: 'Nasalization',
    summary: 'The nasal sound produced specifically through the noon and meem, appearing with varying strength across several tajweed rules.',
    course: 'tajweedclass',
  },
  madd: {
    id: 'madd',
    type: 'concept',
    title: 'Al-Madd',
    subtitle: 'Elongation',
    summary: 'Lengthening a vowel sound for a specific, rule-governed duration, from the natural baseline through several secondary categories.',
    course: 'tajweedclass',
  },
  qalqalah: {
    id: 'qalqalah',
    type: 'concept',
    title: 'Al-Qalqalah',
    subtitle: 'The echoing bounce',
    summary: 'A distinct bouncing sound produced on five specific letters when they carry sukoon, remembered through the mnemonic qutbu jadd.',
    course: 'tajweedclass',
  },
  waqf: {
    id: 'waqf',
    type: 'concept',
    title: 'Al-Waqf',
    subtitle: 'Stopping in recitation',
    summary: 'The rules governing where a reciter may, should, or must not pause while reciting, marked by specific symbols within the mushaf itself.',
    course: 'tajweedclass',
  },

  // ── Tajweed Class lesson nodes. Units 5-12's topic ids are ───
  // ── known with certainty; Units 1-4 predate this session's ──
  // ── visible build detail, so those stay unit-level only, ────
  // ── exactly the same honest limitation already applied to ───
  // ── Adab Class above. ────────────────────────────────────────
  'lesson-twj-unit1': { id: 'lesson-twj-unit1', type: 'lesson', title: 'Tajweed Class: Makharij al-Huruf', course: 'tajweedclass', unit: 'unit-1' },
  'lesson-twj-meem-1': { id: 'lesson-twj-meem-1', type: 'lesson', title: 'Meem Sakinah and the Ghunnah Hierarchy', course: 'tajweedclass', unit: 'unit-5', topicId: 'meem-1' },
  'lesson-twj-laam-2': { id: 'lesson-twj-laam-2', type: 'lesson', title: "Allah's Name: Heavy and Light Laam", course: 'tajweedclass', unit: 'unit-6', topicId: 'laam-2' },
  'lesson-twj-madd1-1': { id: 'lesson-twj-madd1-1', type: 'lesson', title: 'Natural Madd: The Baseline Two Counts', course: 'tajweedclass', unit: 'unit-7', topicId: 'madd1-1' },
  'lesson-twj-madd2-3': { id: 'lesson-twj-madd2-3', type: 'lesson', title: "Madd 'Aridh lis-Sukoon and Madd Leen", course: 'tajweedclass', unit: 'unit-8', topicId: 'madd2-3' },
  'lesson-twj-ra-4': { id: 'lesson-twj-ra-4', type: 'lesson', title: 'Qalqalah: Sughra and Kubra', course: 'tajweedclass', unit: 'unit-9', topicId: 'ra-4' },
  'lesson-twj-waqf-1': { id: 'lesson-twj-waqf-1', type: 'lesson', title: 'The Four Categories of Voluntary Stopping', course: 'tajweedclass', unit: 'unit-10', topicId: 'waqf-1' },
  'lesson-twj-lahn-1': { id: 'lesson-twj-lahn-1', type: 'lesson', title: 'Lahn Jali: Meaning-Altering Mistakes', course: 'tajweedclass', unit: 'unit-11', topicId: 'lahn-1' },

  // ── Core Seerah Class concepts ──────────────────────────────
  seerah: {
    id: 'seerah',
    type: 'concept',
    title: 'The Seerah',
    subtitle: "The Prophet's \u25fe life",
    summary: 'The chronological, evidence-based account of the Prophet Muhammad\u2019s \u25fe life, from before his birth through his death, studied as a genuinely followable example.',
    course: 'seerahclass',
  },
  jahiliyyah: {
    id: 'jahiliyyah',
    type: 'concept',
    title: 'Al-Jahiliyyah',
    subtitle: 'Pre-Islamic ignorance',
    summary: "Arabia's social and religious conditions before Islam: widespread idol worship, tribal hierarchy, and documented social evils, alongside genuine tribal strengths.",
    course: 'seerahclass',
  },
  hijrah: {
    id: 'hijrah',
    type: 'concept',
    title: 'The Hijrah',
    subtitle: 'The migration to Madinah',
    summary: 'The Prophet\u2019s \u25fe migration from Makkah to Madinah, made possible by the second Pledge of Aqabah and prompted by a discovered assassination plot.',
    course: 'seerahclass',
  },
  'seerah-battles': {
    id: 'seerah-battles',
    type: 'concept',
    title: 'The Major Battles',
    subtitle: 'Badr, Uhud, the Trench',
    summary: 'Three battles across five years, each testing the young Muslim community differently: reliance on Allah, the cost of abandoned discipline, and the value of counsel.',
    course: 'seerahclass',
  },
  hudaybiyyah: {
    id: 'hudaybiyyah',
    type: 'concept',
    title: 'The Treaty of Hudaybiyyah',
    subtitle: 'A treaty that appeared unfavorable',
    summary: 'A ten-year truce with outwardly lopsided terms, declared a clear victory in Surah al-Fath, since it opened two years of unprecedented growth for the young community.',
    course: 'seerahclass',
  },

  // ── Seerah Class lesson nodes. This entire course was built ──
  // ── directly in this session, so every topic id below is ────
  // ── known with full certainty. ───────────────────────────────
  'lesson-srh-found-5': { id: 'lesson-srh-found-5', type: 'lesson', title: 'Jahiliyyah Conditions Before Islam', course: 'seerahclass', unit: 'unit-1', topicId: 'found-5' },
  'lesson-srh-wahy-4': { id: 'lesson-srh-wahy-4', type: 'lesson', title: 'The Nature of Prophethood: Restoration, Not a New Religion', course: 'seerahclass', unit: 'unit-4', topicId: 'wahy-4' },
  'lesson-srh-hijrah-4': { id: 'lesson-srh-hijrah-4', type: 'lesson', title: 'The Hijrah Itself', course: 'seerahclass', unit: 'unit-8', topicId: 'hijrah-4' },
  'lesson-srh-battle-1': { id: 'lesson-srh-battle-1', type: 'lesson', title: 'The Battle of Badr', course: 'seerahclass', unit: 'unit-10', topicId: 'battle-1' },
  'lesson-srh-treaty-1': { id: 'lesson-srh-treaty-1', type: 'lesson', title: 'The Treaty of Hudaybiyyah', course: 'seerahclass', unit: 'unit-11', topicId: 'treaty-1' },
  'lesson-srh-fath-1': { id: 'lesson-srh-fath-1', type: 'lesson', title: 'The Conquest of Makkah', course: 'seerahclass', unit: 'unit-12', topicId: 'fath-1' },
  'lesson-srh-legacy-3': { id: 'lesson-srh-legacy-3', type: 'lesson', title: 'His \u25fe Character in Leadership and Justice', course: 'seerahclass', unit: 'unit-14', topicId: 'legacy-3' },

  // ── Core Arabiyyah Class concepts ───────────────────────────
  nahw: {
    id: 'nahw',
    type: 'concept',
    title: 'An-Nahw',
    subtitle: 'Arabic grammar and syntax',
    summary: 'The science governing how Arabic words change form and combine into sentences, most visibly through i\u2019rab, the case-marking system this course traces in full.',
    course: 'arabiyyahclass',
  },
  'jumlah-mufeedah': {
    id: 'jumlah-mufeedah',
    type: 'concept',
    title: 'Al-Jumlah al-Mufeedah',
    subtitle: 'The complete, meaningful sentence',
    summary: 'The basic working unit of Arabic grammar: a jumlah that also conveys a complete, self-sufficient meaning, dividing into nominal and verbal sentence types.',
    course: 'arabiyyahclass',
  },
  irab: {
    id: 'irab',
    type: 'concept',
    title: "Al-I'rab",
    subtitle: 'Case and mood',
    summary: 'The four-state system, raf\u2019, nasb, jarr, and jazm, that carries grammatical meaning through a word\u2019s own ending.',
    course: 'arabiyyahclass',
  },
  'mubtada-khabar': {
    id: 'mubtada-khabar',
    type: 'concept',
    title: 'Al-Mubtada wal-Khabar',
    subtitle: 'Subject and predicate',
    summary: 'The two core parts of a nominal sentence, a definite subject and a predicate that can itself take three genuinely different forms.',
    course: 'arabiyyahclass',
  },
  'kaana-inna': {
    id: 'kaana-inna',
    type: 'concept',
    title: 'Kaana and Inna Families',
    subtitle: 'Verbs and particles that reverse each other',
    summary: 'Two groups entering the nominal sentence with exactly opposite case effects: kaana keeps the subject in raf\u2019 and shifts the predicate to nasb; inna does the reverse.',
    course: 'arabiyyahclass',
  },

  // ── Arabiyyah Class lesson nodes. This entire course was ─────
  // ── built directly in this session, so every topic id below ──
  // ── is known with full certainty. ────────────────────────────
  'lesson-arb-found-1': { id: 'lesson-arb-found-1', type: 'lesson', title: 'What is Nahw and Why It Matters', course: 'arabiyyahclass', unit: 'unit-1', topicId: 'found-1' },
  'lesson-arb-jumlah-1': { id: 'lesson-arb-jumlah-1', type: 'lesson', title: 'Al-Jumlah al-Mufeedah: The Complete, Meaningful Sentence', course: 'arabiyyahclass', unit: 'unit-2', topicId: 'jumlah-1' },
  'lesson-arb-mubtada-1': { id: 'lesson-arb-mubtada-1', type: 'lesson', title: 'Al-Mubtada: Defining the Subject', course: 'arabiyyahclass', unit: 'unit-3', topicId: 'mubtada-1' },
  'lesson-arb-irab-1': { id: 'lesson-arb-irab-1', type: 'lesson', title: "What Is I'rab and Why Arabic Uses It", course: 'arabiyyahclass', unit: 'unit-5', topicId: 'irab-1' },
  'lesson-arb-kaana-2': { id: 'lesson-arb-kaana-2', type: 'lesson', title: 'Their Effect on the Nominal Sentence', course: 'arabiyyahclass', unit: 'unit-10', topicId: 'kaana-2' },
  'lesson-arb-inna-2': { id: 'lesson-arb-inna-2', type: 'lesson', title: 'Their Effect on the Nominal Sentence (Inna)', course: 'arabiyyahclass', unit: 'unit-11', topicId: 'inna-2' },
  'lesson-arb-beyond-4': { id: 'lesson-arb-beyond-4', type: 'lesson', title: 'Reading and Parsing: Putting It All Together', course: 'arabiyyahclass', unit: 'unit-14', topicId: 'beyond-4' },

  // ── Verses and hadith (all reused from content verified ──────
  // ── against tafsir/hadith sources earlier in this build) ────
  'verse-anbiya-2125': {
    id: 'verse-anbiya-2125', type: 'verse',
    title: "Surah al-Anbiya, 21:25",
    arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ',
    english: 'And We did not send any messenger before you except that We revealed to him: there is no god but Me, so worship Me alone.',
    source: 'Surah al-Anbiya, 21:25',
  },
  'verse-fatiha-15': {
    id: 'verse-fatiha-15', type: 'verse',
    title: 'Surah al-Fatihah, 1:5',
    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
    english: 'You alone we worship, and You alone we ask for help.',
    source: 'Surah al-Fatihah, 1:5',
  },
  'verse-nisa-448': {
    id: 'verse-nisa-448', type: 'verse',
    title: 'Surah an-Nisa, 4:48',
    arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ',
    english: 'Indeed, Allah does not forgive that partners be associated with Him, but He forgives what is less than that for whomever He wills.',
    source: 'Surah an-Nisa, 4:48',
  },
  'verse-shura-4211': {
    id: 'verse-shura-4211', type: 'verse',
    title: 'Surah ash-Shura, 42:11',
    arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ',
    english: 'There is nothing whatsoever like Him, and He is the All-Hearing, the All-Seeing.',
    source: 'Surah ash-Shura, 42:11',
  },
  'verse-nahl-1636': {
    id: 'verse-nahl-1636', type: 'verse',
    title: 'Surah an-Nahl, 16:36',
    arabic: 'وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ',
    english: 'And We certainly sent into every nation a messenger, saying, worship Allah and avoid false objects of worship.',
    source: 'Surah an-Nahl, 16:36',
  },
  'verse-talaq-653': {
    id: 'verse-talaq-653', type: 'verse',
    title: 'Surah at-Talaq, 65:3',
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    english: 'And whoever relies upon Allah, then He is sufficient for him.',
    source: 'Surah at-Talaq, 65:3',
  },
  'hadith-muadh': {
    id: 'hadith-muadh', type: 'hadith',
    title: "Allah's right upon His servants",
    arabic: 'حَقُّ اللَّهِ عَلَى الْعِبَادِ أَنْ يَعْبُدُوهُ وَلَا يُشْرِكُوا بِهِ شَيْئًا',
    english: "Allah's right upon His servants is that they worship Him and not associate any partner with Him.",
    source: 'Sahih al-Bukhari and Sahih Muslim',
  },
  'hadith-riya': {
    id: 'hadith-riya', type: 'hadith',
    title: 'The fear of minor shirk',
    arabic: 'إِنَّ أَخْوَفَ مَا أَخَافُ عَلَيْكُمُ الشِّرْكُ الْأَصْغَرُ، الرِّيَاءُ',
    english: '"Indeed, the thing I fear most for you is minor shirk, riya (showing off in worship)."',
    source: 'Musnad Ahmad',
  },
  'hadith-camel': {
    id: 'hadith-camel', type: 'hadith',
    title: 'Tie your camel, then trust Allah',
    arabic: 'اعْقِلْهَا وَتَوَكَّلْ',
    english: '"Tie it, and then place your trust in Allah."',
    source: "The Prophet's ﷺ instruction to a companion who asked whether to tie his camel or simply trust Allah to protect it",
  },

  // ── Verses added for Seerah Class and Arabiyyah Class, reused ─
  // ── directly from the exact wording verified when those two ──
  // ── courses were built. ───────────────────────────────────────
  'verse-tawbah-93': {
    id: 'verse-tawbah-93', type: 'verse',
    title: 'Surah at-Tawbah, 9:3',
    arabic: 'أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ وَرَسُولُهُ',
    english: 'That Allah is disassociated from the polytheists, and so is His Messenger.',
    source: 'Surah at-Tawbah, 9:3, the exact verse whose single-vowel misrecitation prompted Nahw\u2019s own systematization',
  },
  'verse-yusuf-1292': {
    id: 'verse-yusuf-1292', type: 'verse',
    title: 'Surah Yusuf, 12:92',
    arabic: 'لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ يَغْفِرُ اللَّهُ لَكُمْ وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
    english: 'There is no blame upon you today. Allah will forgive you, and He is the most merciful of the merciful.',
    source: 'Surah Yusuf, 12:92, the words the Prophet \u25fe used addressing Makkah at its conquest',
  },
  'verse-fath-481': {
    id: 'verse-fath-481', type: 'verse',
    title: 'Surah al-Fath, 48:1',
    arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
    english: 'Indeed, We have granted you a clear victory.',
    source: 'Surah al-Fath, 48:1, revealed following the Treaty of Hudaybiyyah',
  },
};

export const GRAPH_EDGES = [
  // Tawheed's three categories are the foundation Tawheed itself rests on
  { a: 'tawheed', b: 'rububiyyah', relation: 'prerequisite' },
  { a: 'tawheed', b: 'uluhiyyah', relation: 'prerequisite' },
  { a: 'tawheed', b: 'asma-sifaat', relation: 'prerequisite' },

  // Shirk is Tawheed's direct opposite, studied once Tawheed itself is understood
  { a: 'tawheed', b: 'shirk', relation: 'advanced' },
  { a: 'shirk', b: 'shirk-major', relation: 'advanced' },
  { a: 'shirk', b: 'shirk-minor', relation: 'advanced' },
  { a: 'shirk', b: 'shirk-hidden', relation: 'advanced' },
  { a: 'shirk', b: 'taghut', relation: 'advanced' },

  // Related concepts, lateral rather than strictly prerequisite/advanced
  { a: 'uluhiyyah', b: 'dua', relation: 'related' },
  { a: 'uluhiyyah', b: 'tawakkul', relation: 'related' },
  { a: 'uluhiyyah', b: 'ikhlas', relation: 'related' },
  { a: 'rububiyyah', b: 'qadar', relation: 'related' },
  { a: 'shirk-hidden', b: 'ikhlas', relation: 'related' },
  { a: 'tawakkul', b: 'qadar', relation: 'related' },

  // Cross-discipline: Ikhlas is a genuine hinge between the two courses
  { a: 'ikhlas', b: 'lesson-adab-unit2', relation: 'lesson' },
  { a: 'tawheed', b: 'lesson-adab-unit2', relation: 'related' },
  { a: 'shirk-minor', b: 'lesson-adab-unit6', relation: 'related' },
  { a: 'tawheed', b: 'lesson-adab-unit1', relation: 'related' },

  // Concept -> lesson (evidence trail into the real course content)
  { a: 'tawheed', b: 'lesson-found-1', relation: 'lesson' },
  { a: 'tawheed', b: 'lesson-found-4', relation: 'lesson' },
  { a: 'rububiyyah', b: 'lesson-rub-1', relation: 'lesson' },
  { a: 'rububiyyah', b: 'lesson-rub-4', relation: 'lesson' },
  { a: 'qadar', b: 'lesson-rub-5', relation: 'lesson' },
  { a: 'uluhiyyah', b: 'lesson-uluh-1', relation: 'lesson' },
  { a: 'dua', b: 'lesson-uluh-2', relation: 'lesson' },
  { a: 'tawakkul', b: 'lesson-uluh-4', relation: 'lesson' },
  { a: 'asma-sifaat', b: 'lesson-asma-1', relation: 'lesson' },
  { a: 'shirk', b: 'lesson-shirk-1', relation: 'lesson' },
  { a: 'shirk-major', b: 'lesson-shirk-2', relation: 'lesson' },
  { a: 'shirk-minor', b: 'lesson-shirk-3', relation: 'lesson' },
  { a: 'shirk-hidden', b: 'lesson-shirk-4', relation: 'lesson' },
  { a: 'taghut', b: 'lesson-ut7-1', relation: 'lesson' },
  { a: 'taghut', b: 'lesson-ut7-3', relation: 'lesson' },

  // Concept -> verse/hadith (the actual evidence each concept rests on)
  { a: 'tawheed', b: 'verse-anbiya-2125', relation: 'evidence' },
  { a: 'uluhiyyah', b: 'verse-fatiha-15', relation: 'evidence' },
  { a: 'shirk', b: 'verse-nisa-448', relation: 'evidence' },
  { a: 'asma-sifaat', b: 'verse-shura-4211', relation: 'evidence' },
  { a: 'taghut', b: 'verse-nahl-1636', relation: 'evidence' },
  { a: 'tawakkul', b: 'verse-talaq-653', relation: 'evidence' },
  { a: 'tawakkul', b: 'hadith-camel', relation: 'evidence' },
  { a: 'shirk-hidden', b: 'hadith-riya', relation: 'evidence' },
  { a: 'tawheed', b: 'hadith-muadh', relation: 'evidence' },

  // ── Tajweed Class: internal structure ────────────────────────
  // Tajweed rests on the makharij foundation (unit 1) before its
  // remaining rule categories branch out from it.
  { a: 'tajweed', b: 'noon-sakinah-rules', relation: 'prerequisite' },
  { a: 'tajweed', b: 'ghunnah', relation: 'prerequisite' },
  { a: 'noon-sakinah-rules', b: 'ghunnah', relation: 'related' },
  { a: 'tajweed', b: 'madd', relation: 'advanced' },
  { a: 'tajweed', b: 'qalqalah', relation: 'advanced' },
  { a: 'tajweed', b: 'waqf', relation: 'advanced' },

  { a: 'tajweed', b: 'lesson-twj-unit1', relation: 'lesson' },
  { a: 'noon-sakinah-rules', b: 'lesson-twj-meem-1', relation: 'lesson' },
  { a: 'ghunnah', b: 'lesson-twj-laam-2', relation: 'lesson' },
  { a: 'madd', b: 'lesson-twj-madd1-1', relation: 'lesson' },
  { a: 'madd', b: 'lesson-twj-madd2-3', relation: 'lesson' },
  { a: 'qalqalah', b: 'lesson-twj-ra-4', relation: 'lesson' },
  { a: 'waqf', b: 'lesson-twj-waqf-1', relation: 'lesson' },
  { a: 'waqf', b: 'lesson-twj-lahn-1', relation: 'related' },

  // ── Seerah Class: internal structure ─────────────────────────
  { a: 'seerah', b: 'jahiliyyah', relation: 'prerequisite' },
  { a: 'seerah', b: 'hijrah', relation: 'advanced' },
  { a: 'hijrah', b: 'seerah-battles', relation: 'advanced' },
  { a: 'seerah-battles', b: 'hudaybiyyah', relation: 'advanced' },

  { a: 'seerah', b: 'lesson-srh-found-5', relation: 'lesson' },
  { a: 'jahiliyyah', b: 'lesson-srh-found-5', relation: 'lesson' },
  { a: 'seerah', b: 'lesson-srh-wahy-4', relation: 'lesson' },
  { a: 'hijrah', b: 'lesson-srh-hijrah-4', relation: 'lesson' },
  { a: 'seerah-battles', b: 'lesson-srh-battle-1', relation: 'lesson' },
  { a: 'hudaybiyyah', b: 'lesson-srh-treaty-1', relation: 'lesson' },
  { a: 'seerah', b: 'lesson-srh-fath-1', relation: 'lesson' },
  { a: 'seerah', b: 'lesson-srh-legacy-3', relation: 'lesson' },

  { a: 'hudaybiyyah', b: 'verse-fath-481', relation: 'evidence' },
  { a: 'seerah', b: 'verse-yusuf-1292', relation: 'evidence' },

  // Cross-discipline: genuine, not forced. Jahiliyyah's idol worship
  // is the concrete historical referent Tawheed Class's own Shirk
  // unit describes in the abstract, and the Seerah's own account of
  // prophethood (wahy-4) makes the identical Tawheed-restoration
  // claim the Tawheed concept itself rests on.
  { a: 'shirk', b: 'jahiliyyah', relation: 'related' },
  { a: 'tawheed', b: 'lesson-srh-wahy-4', relation: 'related' },

  // ── Arabiyyah Class: internal structure ──────────────────────
  { a: 'nahw', b: 'jumlah-mufeedah', relation: 'prerequisite' },
  { a: 'jumlah-mufeedah', b: 'mubtada-khabar', relation: 'prerequisite' },
  { a: 'mubtada-khabar', b: 'irab', relation: 'related' },
  { a: 'irab', b: 'kaana-inna', relation: 'advanced' },

  { a: 'nahw', b: 'lesson-arb-found-1', relation: 'lesson' },
  { a: 'jumlah-mufeedah', b: 'lesson-arb-jumlah-1', relation: 'lesson' },
  { a: 'mubtada-khabar', b: 'lesson-arb-mubtada-1', relation: 'lesson' },
  { a: 'irab', b: 'lesson-arb-irab-1', relation: 'lesson' },
  { a: 'kaana-inna', b: 'lesson-arb-kaana-2', relation: 'lesson' },
  { a: 'kaana-inna', b: 'lesson-arb-inna-2', relation: 'lesson' },
  { a: 'nahw', b: 'lesson-arb-beyond-4', relation: 'lesson' },

  { a: 'nahw', b: 'verse-tawbah-93', relation: 'evidence' },
  { a: 'irab', b: 'verse-tawbah-93', relation: 'evidence' },

  // Deliberately no edge between nahw/irab and any Tawheed concept:
  // Nahw is a language discipline and Tawheed is theology. The two
  // courses don't share a genuine conceptual dependency, only the
  // same underlying language the Qur'an itself is written in, which
  // is too general a link to be a useful graph edge. Leaving this
  // absent is intentional, not an oversight.
];

const INVERT = { prerequisite: 'advanced', advanced: 'prerequisite', related: 'related' };

// Returns this node's neighbors, categorized for rendering:
// { prerequisites, advanced, related, lessons, evidence }
// Each entry is { node, relation }.
export function getNeighbors(nodeId) {
  const result = { prerequisites: [], advanced: [], related: [], lessons: [], evidence: [] };

  for (const edge of GRAPH_EDGES) {
    let otherId = null;
    let relation = null;

    if (edge.a === nodeId) {
      otherId = edge.b;
      relation = edge.relation;
    } else if (edge.b === nodeId) {
      otherId = edge.a;
      relation = edge.relation === 'lesson' || edge.relation === 'evidence' ? null : (INVERT[edge.relation] || edge.relation);
      // lesson/evidence edges only make sense concept -> content, never inverted
      if (relation === null) continue;
    } else {
      continue;
    }

    const node = GRAPH_NODES[otherId];
    if (!node) continue;

    if (node.type === 'lesson') {
      result.lessons.push({ node, relation: 'lesson' });
    } else if (node.type === 'verse' || node.type === 'hadith') {
      result.evidence.push({ node, relation: 'evidence' });
    } else if (relation === 'prerequisite') {
      result.prerequisites.push({ node, relation });
    } else if (relation === 'advanced') {
      result.advanced.push({ node, relation });
    } else {
      result.related.push({ node, relation: 'related' });
    }
  }

  return result;
}

export function searchConcepts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return Object.values(GRAPH_NODES)
    .filter((n) => n.type === 'concept' && n.title.toLowerCase().includes(q))
    .slice(0, 8);
}