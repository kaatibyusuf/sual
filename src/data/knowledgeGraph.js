// src/data/knowledgeGraph.js
//
// Data layer for the Knowledge Graph feature. This does not duplicate
// lesson content — it links to it. Lesson-type nodes point at real
// topic IDs already defined in tawheed.js and adab.js; verse/hadith
// nodes carry their own short Arabic/English/source, reused from
// content already verified when Tawheed Class and Adab Class were
// built, not re-derived here.
//
// STATUS: this is a genuine, accurate starting graph, not a full
// map of every one of the 140 topics across both courses. It covers
// Tawheed Class's core conceptual spine in real depth (Rububiyyah,
// Uluhiyyah, Asma wa's-Sifaat, Shirk, Taghut, plus a few related
// concepts like Tawakkul and Ikhlas), and links out to Adab Class at
// the unit level wherever a genuine, accurate cross-discipline
// connection exists. Expanding this file unit by unit, the same way
// the two courses themselves were built, is the natural next step.
//
// NODE SHAPE
// {
//   id: string (unique),
//   type: 'concept' | 'lesson' | 'verse' | 'hadith',
//   title: string,
//   subtitle?: string,           // concept nodes: short tagline
//   summary?: string,            // concept nodes: 1-2 sentence description
//   course?: 'tawheed' | 'adab', // lesson nodes, and concepts anchored to one course
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