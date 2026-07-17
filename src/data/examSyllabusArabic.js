// Real JAMB UTME Arabic syllabus, structured by section. Comprehension
// and Composition are fundamentally different in kind from the
// fact-based MCQ model used elsewhere — see the notes at the bottom
// of this file.

export const UTME_ARABIC_SYLLABUS = [
  {
    section: 'A', number: 'A', title: 'Comprehension',
    quizSuitable: 'partial', // needs a generated passage, not just syllabus facts
    detail: `A passage of seventy (70) words, with five multiple-choice questions set on it. Content should be within candidates' experience — current affairs, sports, education, politics, economy, health, culture, ethics. Themes should vary across passages.
Objectives: use appropriate words/phrases for specific thought; deduce the lesson in the passage; determine the main theme; give an appropriate title; interpret the meanings of particular words.`,
  },
  {
    section: 'B', number: 'B', title: 'Translation',
    quizSuitable: true,
    detail: `Ten questions: five on translation from English into Arabic, five from Arabic into English. Translation into English includes keywords and phrases in a sentence. Based on standard Arabic and English usage.
Objectives: use an appropriate Arabic word/phrase to convey an English word/phrase's meaning; determine an appropriate English word/phrase for an Arabic statement; interpret idiomatic expressions in both languages; transfer ideas between Arabic and English; communicate effectively in both.`,
  },
  {
    section: 'C', number: 'C1', title: 'Grammar — Pronouns, Gender, Noun Basics, Duals, Plurals',
    quizSuitable: true,
    detail: `Topics: أسماء الإشارة والموصولة (demonstrative and relative pronouns); المذكر والمؤنث (gender — masculine/feminine); علامات الاسم (characteristics of a noun); المثنى (dual); الجموع (plurals) — جمع المذكر السالم (sound masculine plural), جمع المؤنث السالم (sound feminine plural), جمع التكسير (broken plural); المضاف والمضاف إليه (construct phrases); الضمائر المنفصلة والمتصلة (separable and inseparable pronouns); التوابع (appendants) — النعت (adjective), العطف (conjunction), البدل (the permutative), التوكيد (emphasis).
Objectives: identify forms of demonstrative/relative pronouns; compare gender markers; identify the three basic characteristics of Arabic nouns; differentiate singular/dual forms; construct plural forms; identify construct phrases; differentiate separable/inseparable pronouns; identify correct usage of adjectives, conjunctions, and the permutative.`,
  },
  {
    section: 'C', number: 'C2', title: 'Grammar — Prepositions, Verb Types, Modifiers',
    quizSuitable: true,
    detail: `Topics: حروف الجر (prepositions); الفعل اللازم والفعل المتعدي (transitive and intransitive verbs); الفعل الماضي (the perfect verb); الفعل المضارع (the imperfect verb) — المرفوع (indicative), المنصوب (subjunctive), المجزوم (jussive); الفعل الأمر (the imperative verb); النواسخ (the modifiers) — كان وأخواتها (Kana and its associates), إن وأخواتها (Inna and its associates), ظن وأخواتها (Zanna and its associates).
Objectives: apply correct prepositions; differentiate transitive/intransitive verbs and use them; identify perfect, imperfect (with its three moods), and imperative verb forms; identify the kinds of modifiers and apply them correctly.`,
  },
  {
    section: 'C', number: 'C3', title: 'Grammar — Derived Verbs, Derivatives, Conditionals, Numerals, Voice, Accusative Nouns',
    quizSuitable: true,
    detail: `Topics: الفعل الثلاثي المجرد والمزيد فيه (trilateral and derived verbs); المشتقات (derivatives) — اسم التفضيل (comparative/superlative), اسم الآلة (noun of instrument), اسما الزمان والمكان (nouns of time and place), اسم النسبة (relative adjective); الجملة الشرطية (conditional sentences); العدد 1-3000 (numerals 1 to 3000); الفاعل ونائب الفاعل (active and passive voice); منصوبات الأسماء (nouns in the accusative) — المفعول به (direct object), المفعول فيه (adverb of place/time), الحال (adverb of circumstance), المستثنى بإلا (the exempted with illa), التمييز (specification), المنادى (the vocative).
Objectives: differentiate trilateral/derived verbs; identify types of derivatives; apply and construct conditional sentences; recognize and count Arabic numerals 1-3000; distinguish active/passive voice; identify and use the accusative noun categories correctly.`,
  },
  {
    section: 'D', number: 'D', title: 'Composition',
    quizSuitable: false, // essay-writing skill — not meaningfully MCQ-testable
    detail: `Five questions on subjects relating to candidates' lives and environment: education, culture, health, politics, economy, sports, current affairs.
Objectives: use appropriate words for specific thoughts; use correct idiomatic expressions in Arabic; communicate effectively; express ideas clearly; demonstrate the use of common Arabic idioms and proverbs.
NOTE: this is a writing/composition skill, not a fact set — study notes (structure, useful idioms, sample openings per theme) are appropriate here; a multiple-choice quiz is not a good fit for this section and should probably be skipped.`,
  },
  {
    section: 'E', number: 'E1', title: 'Arabic Literature — The Pre-Islamic Period (500–610 CE)',
    quizSuitable: true,
    detail: `Figures and works: Qass ibn Sa'idah and his sermon "Man 'asha mat" (من عاش مات); Tumadir al-Khansa and her elegy for her brother Sakhr an-Nadaa ("صخر الندى").
Objectives: identify pre-Islamic poetic traditions and conventions; identify and analyze figurative expressions in the given literature.`,
  },
  {
    section: 'E', number: 'E2', title: 'Arabic Literature — The Islamic Period (610–1798 CE)',
    quizSuitable: true,
    detail: `Figures and works: Al-Farazdaq and his praise poem for Zayn al-Abidin ("هذا الذي تعرف البطحاء وطأته"); Hassan ibn Thabit and his poem on the Conquest of Makkah ("عدمنا خيلنا إن لم تروها"); Jarir and his poem on the pangs of love ("لقد كتمت الهوى حتى تهيمني").
Objectives: identify and analyze figurative expressions and style in Islamic-period literature; describe aesthetic features and assess their modern cultural values.`,
  },
  {
    section: 'E', number: 'E3', title: 'Arabic Literature — The Modern Period (1798 to date)',
    quizSuitable: true,
    detail: `Figures and works: Al-Manfaluti and his book Al-'Ibarat, the story "Qissat al-Hijab" (قصة الحجاب); Ilya Abu Madi and his poem "Lam tashtaki wa taqulu innaka ma'dam" (لم تشتكِ وتقول إنك معدم).
Objectives: describe aesthetic features in modern literary texts and assess their modern cultural values.`,
  },
  {
    section: 'E', number: 'E4', title: 'Arabic Literature — Arabic Literature in West Africa',
    quizSuitable: true,
    detail: `Figures and works: Zakariyya Idris Hussein and his play "At-Tabaqah al-'Ulya" (الطبقة العليا); Jamil Abdullah al-Kanawi and his work "Idfa' bi-llati hiya ahsan" (ادفع بالتي هي أحسن).
Objectives: evaluate areas of successful use of Arabic as a medium of West African novel and drama; analyse their contents; describe their major characteristics and plots.`,
  },
]