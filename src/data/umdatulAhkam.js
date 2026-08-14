// src/data/umdatulAhkam.js
//
// 'Umdat al-Ahkam ("The Pillar of Rulings") — compiled by 'Abd
// al-Ghani al-Maqdisi (d. 600H). NOTE: the original file header
// attributed this to "Ibn Qudamah al-Maqdisi" — that appears to be
// a mix-up with a different, related Maqdisi-family scholar. Ibn
// Qudamah (d. 620H) authored al-Mughni and 'Umdat al-Fiqh (a fiqh
// text, not this hadith collection); 'Umdat al-Ahkam itself is
// 'Abd al-Ghani al-Maqdisi's work. CONFIRM THIS before publishing
// — attribution errors are exactly the kind of small, plausible
// mistake this file is trying to guard against.
//
// hadith drawn exclusively from Bukhari and Muslim (the great
// majority muttafaqun 'alayh, agreed upon by both), organized by
// fiqh chapter following Hanbali fiqh order (the author's own
// madhhab), from Purification through acts of worship and on to
// transactions and interactions.
//
// CORRECTION: this file's earlier draft described the collection as
// "~400 hadith." Multiple bibliographic sources describe it as
// containing just under 500 — update any size estimates elsewhere
// in the app accordingly, and confirm the exact count against your
// specific print edition (counts can vary slightly by tahqiq/edition
// due to how repeated or split narrations are counted).
//
// ============================================================
// STATUS: SAMPLE ONLY — NOT VERIFIED — NOT FOR PRODUCTION USE
// ============================================================
// UMDAT_AL_AHKAM itself is still a small, narrow starting sample (5
// hadith, Purification chapter only) added to validate the schema
// end-to-end, per an explicit decision to NOT bulk-populate the full
// ~500-hadith collection from an LLM's recall. See the reasoning
// that produced this scope limit — it still applies to any further
// additions to UMDAT_AL_AHKAM.
//
// Every hadith entry has verified: false. That flag, the chapter
// sequencing, the exact narrator chains, and even which print
// edition's numbering is being followed must all be checked against
// a physical copy of 'Umdat al-Ahkam (or a licensed/verified hadith
// database) before use. Do NOT flip verified to true, and do NOT
// extend UMDAT_AL_AHKAM, without that check — and do not treat the
// presence of 5 entries here as evidence the rest are low-risk to
// draft the same way; the sample size was kept deliberately small
// specifically because that assumption doesn't hold at scale.
//
// UMDAT_AL_AHKAM_CHAPTERS below has been expanded to the standard
// Hanbali-fiqh book order the collection follows, sourced from
// bibliographic descriptions of the work rather than drafted hadith
// content, so the accuracy bar is lower than for hadith text — but
// it is still UNCONFIRMED against a specific print edition/tahqiq.
// Chapter labels, Arabic names, exact ordering, and finer chapter
// subdivisions (e.g. Jana'iz appearing as its own chapter vs. folded
// into Salah) genuinely differ between print editions and English
// renderings. Treat this list as a reasonable draft skeleton to
// confirm and correct, not a finished, citable structure.
//
// ============================================================
// IMPORTANT, NEWLY DISCOVERED ISSUE — NUMBERING/ORDER LIKELY WRONG
// ============================================================
// A web search cross-check against a published, named scholarly
// source (Dr. Saleh As-Saleh's "Explanation of 'Umdat al-Ahkam:
// Book of Purification" lecture/topic outline) shows the REAL
// hadith order in this collection's purification chapter does not
// match the numbering below. In the actual book:
//   - Hadith #1 is "Actions are judged by intentions" ('Umar ibn
//     al-Khattab) — not currently present in this file at all.
//   - "The prayer of one in hadath is not accepted" (this file's
//     #1) is actually hadith #2.
//   - "Woe to the heels, from the Fire" (this file's #5) is
//     actually hadith #3.
//   - "Urinating in still water" (this file's #12) is actually
//     hadith #5.
//   - "Purifying a vessel licked by a dog" (this file's #6) is
//     actually hadith #6 (this one happens to match).
//   - The Prophet's ﷺ full wudu description spans two hadith (#7–8)
//     in the real ordering, not one.
//   - "Using the left hand to cleanse oneself" sits at #15, which
//     is why that position below has now been filled with that
//     specific, sourced hadith rather than left as a stub.
// This is a structural problem, not a wording problem: the `num`
// field across most entries in this file is very likely incorrect,
// independent of whether each hadith's text itself is accurate.
// Renumbering and reordering the full set was NOT done as part of
// this pass — it needs a deliberate pass against a real print
// edition or a complete verified outline, not a partial web search.
// Flagging this prominently so it isn't missed during review.
//
// Same shape convention as hadeeth42.js, plus `chapter` /
// `chapter_arabic` for the book/chapter grouping this collection is
// organized by (42 Hadith has no chapters; this one does), and a
// `verified` boolean not present in hadeeth42.js.

export const UMDAT_AL_AHKAM_CHAPTERS = [
  // Only 'purification' has any populated hadith below (5, all
  // verified: false). Every other chapter here is a structural
  // placeholder only — UNCONFIRMED, no hadith content attached yet.
  { key: 'purification', label: 'Purification', arabic: 'الطَّهَارَة' },
  { key: 'prayer', label: 'Prayer', arabic: 'الصَّلَاة' },
  { key: 'funerals', label: 'Funerals', arabic: 'الجَنَائِز' },
  { key: 'zakah', label: 'Zakah', arabic: 'الزَّكَاة' },
  { key: 'fasting', label: 'Fasting', arabic: 'الصِّيَام' },
  { key: 'hajj', label: 'Hajj', arabic: 'الحَجّ' },
  { key: 'transactions', label: 'Transactions', arabic: 'البُيُوع' },
  { key: 'marriage', label: 'Marriage', arabic: 'النِّكَاح' },
  { key: 'divorce', label: 'Divorce', arabic: 'الطَّلَاق' },
  { key: 'oaths_and_vows', label: 'Oaths & Vows', arabic: 'الأَيْمَان وَالنُّذُور' },
  { key: 'judgments_and_testimony', label: 'Judgments & Testimony', arabic: 'الأَقْضِيَة وَالشَّهَادَات' },
  { key: 'jihad', label: 'Jihad', arabic: 'الجِهَاد' },
  { key: 'hunting_and_slaughter', label: 'Hunting & Slaughter', arabic: 'الصَّيْد وَالذَّبَائِح' },
  { key: 'food_and_drink', label: 'Food & Drink', arabic: 'الأَطْعِمَة وَالأَشْرِبَة' },
  { key: 'virtues_and_manners', label: 'Virtues & Manners', arabic: 'الفَضَائِل وَالآدَاب' },
  // Chapter set, order, and exact scope UNCONFIRMED — verify against
  // your print edition; some editions merge, split, or omit chapters
  // differently than listed here (e.g. Funerals folded into Prayer,
  // or additional chapters on Punishments/Hudud, Inheritance, etc.
  // depending on how complete a given edition/completion is).
]

export const UMDAT_AL_AHKAM = [
  {
    num: 1,
    chapter: 'purification',
    verified: false,
    title: 'No Prayer Is Accepted Without Purification',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَا يَقْبَلُ اللَّهُ صَلَاةَ أَحَدِكُمْ إِذَا أَحْدَثَ حَتَّى يَتَوَضَّأَ',
    transliteration:
      "La yaqbalullahu salata ahadikum idha ahdatha hatta yatawadda'",
    translation:
      "Allah does not accept the prayer of any of you when he has broken his state of purity (wudu), until he performs wudu again.",
    lessons: [
      'Ritual purity (wudu) is a precondition for the validity of prayer, not a separate, optional formality.',
      'This hadith is traditionally placed first in Kitab at-Taharah, establishing why the chapter on purification precedes the chapter on prayer.',
      'Breaking wudu (hadath) requires renewing it before the next prayer, regardless of how minor the cause may seem to the person.',
      "The hadith's brevity and directness reflect its role as a foundational ruling rather than a detailed procedural description.",
    ],
  },
  {
    num: 2,
    chapter: 'purification',
    verified: false,
    title: 'The Encouragement to Use the Siwak',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَوْلَا أَنْ أَشُقَّ عَلَى أُمَّتِي، لَأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلَاةٍ',
    transliteration:
      "Lawla an ashuqqa 'ala ummati, la'amartuhum bis-siwaki 'inda kulli salah",
    translation:
      "Were it not that I would place a hardship on my nation, I would have commanded them to use the tooth-stick (siwak) before every prayer.",
    lessons: [
      'The siwak is a strongly encouraged (mustahabb), not obligatory, practice — the hadith itself explains why it stops short of being commanded.',
      "The Prophet's ﷺ concern for avoiding undue hardship on the community shaped this ruling directly.",
      'This hadith is used by scholars to illustrate the general principle that ease and avoidance of hardship are considered in Islamic legal rulings.',
      'Oral cleanliness before prayer connects physical preparation to the broader theme of presenting oneself well before Allah in worship.',
    ],
  },
  {
    num: 3,
    chapter: 'purification',
    verified: false,
    title: "Describing the Prophet's ﷺ Wudu",
    narrator: "Humran, the freed slave of 'Uthman ibn 'Affan, describing 'Uthman's wudu",
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ عُثْمَانَ بْنَ عَفَّانَ دَعَا بِوَضُوءٍ فَتَوَضَّأَ، فَغَسَلَ كَفَّيْهِ ثَلَاثَ مَرَّاتٍ، ثُمَّ مَضْمَضَ وَاسْتَنْشَقَ، ثُمَّ غَسَلَ وَجْهَهُ ثَلَاثًا، ثُمَّ غَسَلَ يَدَهُ الْيُمْنَى إِلَى الْمِرْفَقِ ثَلَاثًا، ثُمَّ الْيُسْرَى مِثْلَ ذَلِكَ، ثُمَّ مَسَحَ رَأْسَهُ، ثُمَّ غَسَلَ رِجْلَهُ الْيُمْنَى إِلَى الْكَعْبَيْنِ ثَلَاثًا، ثُمَّ الْيُسْرَى مِثْلَ ذَلِكَ، ثُمَّ قَالَ: رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ تَوَضَّأَ نَحْوَ وُضُوئِي هَذَا، وَقَالَ: مَنْ تَوَضَّأَ نَحْوَ وُضُوئِي هَذَا، ثُمَّ صَلَّى رَكْعَتَيْنِ لَا يُحَدِّثُ فِيهِمَا نَفْسَهُ، غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
    transliteration:
      "Anna 'Uthmana bna 'Affana da'a biwadu'in fatawadda', faghasala kaffayhi thalatha marrat, thumma madmada wastanshaqa, thumma ghasala wajhahu thalatha...",
    translation:
      "'Uthman ibn 'Affan called for water for wudu and performed it: he washed his hands three times, then rinsed his mouth and drew water into his nose and expelled it, then washed his face three times, then washed his right forearm to the elbow three times, then likewise the left, then wiped his head, then washed his right foot to the ankle three times, then likewise the left. He then said: I saw the Messenger of Allah ﷺ perform wudu just like this wudu of mine, and he said, \"Whoever performs wudu like this wudu of mine, then prays two rak'ahs without his soul being distracted during them, will have his previous sins forgiven.\"",
    lessons: [
      "This hadith provides the detailed, step-by-step procedural description of wudu that the more general rulings elsewhere assume.",
      'The threefold washing shown here is a described practice, not stated as a strict obligation — scholars discuss the ruling on repetition count separately.',
      'A companion demonstrating an act of worship and explicitly stating "I saw the Messenger of Allah ﷺ do this" is a common and highly reliable method of hadith transmission.',
      'The reward tied to this wudu is conditioned on being followed by two rak\'ahs prayed with real presence of mind, not the wudu in isolation.',
    ],
  },
  {
    num: 4,
    chapter: 'purification',
    verified: false,
    title: 'Wiping Over the Leather Socks (Khuffayn)',
    narrator: "Al-Mughirah ibn Shu'bah",
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ تَوَضَّأَ وَمَسَحَ عَلَى الْخُفَّيْنِ',
    transliteration: "Annan-Nabiyya sallallahu 'alayhi wa sallam tawadda'a wa masaha 'alal-khuffayn",
    translation:
      'The Prophet ﷺ performed wudu and wiped over his two leather socks (khuffayn) [rather than removing them to wash his feet].',
    lessons: [
      'This hadith establishes the permissibility of wiping over leather socks or similar footwear in place of washing the feet during wudu, under conditions detailed elsewhere.',
      'It reflects a broader principle in Islamic law of practical accommodation (rukhsah) alongside the default obligation.',
      'This is one of several related narrations on the topic; the fuller hadith often includes details on timing and conditions that this shorter version does not state.',
    ],
  },
  {
    num: 5,
    chapter: 'purification',
    verified: false,
    title: 'Woe to the Heels, from the Fire',
    narrator: "Abdullah ibn 'Amr ibn al-'As",
    source: 'Bukhari & Muslim',
    arabic_text: 'وَيْلٌ لِلْأَعْقَابِ مِنَ النَّارِ',
    transliteration: "Waylun lil-a'qabi minan-nar",
    translation:
      "Woe to the heels, from the Fire! [Said after the Prophet ﷺ saw a group of people performing wudu hastily, leaving dry patches on their heels.]",
    lessons: [
      'Thoroughness in wudu — fully covering every required part, including the heels — is treated as a serious matter, not a minor detail.',
      'This hadith is commonly cited as evidence that washing (not merely wiping) the feet is required in wudu, in the absence of khuffs.',
      'The severity of the warning underscores that an incomplete wudu can invalidate the purification a person believes they have completed.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 6–20 ADDED ON REQUEST, EXPANDING PAST THE ORIGINAL
  // "NARROW SAMPLE" SCOPE. Same verified:false / PLACEHOLDER
  // SAMPLE convention applies, but treat the confidence level as
  // LOWER, not equal, to entries 1–5: this batch is larger, drawn
  // more quickly, and includes several hadith where exact wording
  // varies meaningfully between Bukhari's and Muslim's versions of
  // the same report (noted per-entry where relevant) — that
  // variance is exactly the kind of detail that needs a print
  // edition to resolve correctly, not an LLM's best recollection.
  // Chapter assignment for 16–20 (moved into 'prayer') is a
  // reasonable guess at ordering, not a confirmed position within
  // that chapter.
  // ------------------------------------------------------------
  {
    num: 6,
    chapter: 'purification',
    verified: false,
    title: 'Purifying a Vessel Licked by a Dog',
    narrator: 'Abu Hurairah',
    source: 'Muslim (wording in Bukhari differs)',
    arabic_text:
      'طَهُورُ إِنَاءِ أَحَدِكُمْ إِذَا وَلَغَ فِيهِ الْكَلْبُ أَنْ يَغْسِلَهُ سَبْعَ مَرَّاتٍ أُولَاهُنَّ بِالتُّرَابِ',
    transliteration:
      "Tahuru ina'i ahadikum idha walagha fihil-kalbu an yaghsilahu sab'a marratin ulahunna bit-turab",
    translation:
      "The purification of the vessel of one of you, when a dog has licked from it, is to wash it seven times, the first of them with soil.",
    lessons: [
      'This hadith is a primary text for the ruling that a dog\'s saliva is a najasah (ritual impurity) requiring a specific, elevated method of cleaning.',
      'The inclusion of soil in the first wash is treated by many scholars as having a cleansing property beyond water alone.',
      'The number seven, specified precisely, shows that some impurities are treated with heightened caution beyond an ordinary single washing.',
    ],
  },
  {
    num: 7,
    chapter: 'purification',
    verified: false,
    title: 'Tayammum — Purification with Earth',
    narrator: "'Ammar ibn Yasir",
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ عَمَّارَ بْنَ يَاسِرٍ قَالَ لِعُمَرَ بْنِ الْخَطَّابِ: أَمَا تَذْكُرُ أَنَّا كُنَّا فِي سَفَرٍ أَنَا وَأَنْتَ فَأَمَّا أَنْتَ فَلَمْ تُصَلِّ، وَأَمَّا أَنَا فَتَمَعَّكْتُ فَصَلَّيْتُ، فَذَكَرْتُ ذَلِكَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: إِنَّمَا كَانَ يَكْفِيكَ أَنْ تَقُولَ بِيَدَيْكَ هَكَذَا، ثُمَّ ضَرَبَ بِيَدَيْهِ الْأَرْضَ ضَرْبَةً وَاحِدَةً، ثُمَّ مَسَحَ الشِّمَالَ عَلَى الْيَمِينِ وَظَاهِرَ كَفَّيْهِ وَوَجْهَهُ',
    transliteration:
      "Anna 'Ammara bna Yasirin qala li'Umara bnil-Khattab: Ama tadhkuru anna kunna fi safarin ana wa anta, fa ammaa anta falam tusalli, wa ammaa ana fatama''aktu fasallayt...",
    translation:
      "'Ammar ibn Yasir said to 'Umar ibn al-Khattab, \"Do you not remember that we were once on a journey, you and I — you did not pray [being in a state requiring purification and finding no water], while I rolled around in the dust and then prayed?\" So I mentioned that to the Prophet ﷺ, and he said, \"It would have been enough for you to do like this,\" and he struck the ground once with his hands, then wiped his left hand over his right, and the backs of his hands, and his face.",
    lessons: [
      'Tayammum (dry purification with earth) is a valid substitute for wudu or ghusl when water is unavailable or cannot be used.',
      'The Prophet\'s ﷺ correction of \'Ammar\'s overzealous method shows that tayammum has a specific, limited procedure, not an unbounded one.',
      'This hadith is a primary text for the correct method of tayammum: a single strike of the hands on the earth, wiping the hands and face.',
    ],
  },
  {
    num: 8,
    chapter: 'purification',
    verified: false,
    title: 'Leaving Prayer During Menstruation',
    narrator: "'Aishah",
    source: 'Bukhari',
    arabic_text: 'إِذَا أَقْبَلَتِ الْحَيْضَةُ فَدَعِي الصَّلَاةَ',
    transliteration: "Idha aqbalatil-haydatu fada'is-salah",
    translation:
      "When your menses comes, leave the prayer.",
    lessons: [
      'This hadith establishes that a menstruating woman is exempt from performing the prayer during her menses, rather than needing to make it up afterward.',
      'The exemption is treated in Islamic scholarship as a mercy tied to a woman\'s physical state, not a diminishment of her religious standing.',
      'This hadith is commonly paired with the parallel ruling on fasting during menstruation, which is different (missed fasts are made up later, missed prayers are not).',
    ],
  },
  {
    num: 9,
    chapter: 'purification',
    verified: false,
    title: 'Ghusl Becomes Obligatory Upon Union',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text: 'إِذَا الْتَقَى الْخِتَانَانِ فَقَدْ وَجَبَ الْغُسْلُ',
    transliteration: "Idhal-taqal-khitanani faqad wajabal-ghusl",
    translation:
      "When the two circumcised parts meet, ghusl becomes obligatory.",
    lessons: [
      'This hadith establishes that ghusl (ritual bathing) becomes obligatory upon sexual union itself, regardless of whether ejaculation occurs.',
      'This clarified an earlier point of confusion among some companions regarding exactly what triggers the obligation of ghusl.',
      'The precise, almost clinical phrasing reflects the legal, ruling-focused nature of this specific hadith collection.',
    ],
  },
  {
    num: 10,
    chapter: 'purification',
    verified: false,
    title: "Describing the Prophet's ﷺ Ghusl from Janabah",
    narrator: 'Maimunah bint al-Harith',
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اغْتَسَلَ مِنَ الْجَنَابَةِ، فَغَسَلَ يَدَيْهِ مَرَّتَيْنِ أَوْ ثَلَاثًا، ثُمَّ أَفْرَغَ بِيَمِينِهِ عَلَى شِمَالِهِ فَغَسَلَ فَرْجَهُ، ثُمَّ ضَرَبَ بِيَدِهِ الْأَرْضَ فَدَلَكَهَا دَلْكًا شَدِيدًا، ثُمَّ تَوَضَّأَ وُضُوءَهُ لِلصَّلَاةِ، ثُمَّ أَفَاضَ عَلَى رَأْسِهِ ثَلَاثَ حَفَنَاتٍ، ثُمَّ غَسَلَ سَائِرَ جَسَدِهِ، ثُمَّ تَنَحَّى فَغَسَلَ رِجْلَيْهِ',
    transliteration:
      "Anna Rasulallahi sallallahu 'alayhi wa sallamagh-tasala minal-janabah, faghasala yadayhi marratayni aw thalathan, thumma afragha biyaminihi 'ala shimalihi faghasala farjah...",
    translation:
      "The Messenger of Allah ﷺ performed ghusl from janabah [a state requiring ritual bathing]: he washed his hands twice or three times, then poured water from his right hand onto his left and washed his private parts, then struck his hand on the ground and rubbed it vigorously, then performed wudu as for prayer, then poured three handfuls of water over his head, then washed the rest of his body, then stepped aside and washed his feet.",
    lessons: [
      'This hadith provides the detailed procedural description of ghusl that shorter rulings on its obligation assume.',
      'Washing the hands before touching the rest of the body, and cleaning them further with earth after touching the private parts, shows a deliberate sequence aimed at avoiding transferring impurity.',
      'Performing a complete wudu in the middle of the ghusl procedure is a detail some schools of fiqh treat as recommended rather than a separately required step.',
    ],
  },
  {
    num: 11,
    chapter: 'purification',
    verified: false,
    title: 'Doubt Does Not Break Wudu Without Certainty',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِذَا وَجَدَ أَحَدُكُمْ فِي بَطْنِهِ شَيْئًا فَأَشْكَلَ عَلَيْهِ أَخَرَجَ مِنْهُ شَيْءٌ أَمْ لَا؟ فَلَا يَخْرُجَنَّ مِنَ الْمَسْجِدِ حَتَّى يَسْمَعَ صَوْتًا أَوْ يَجِدَ رِيحًا',
    transliteration:
      "Idha wajada ahadukum fi batnihi shay'an fa ashkala 'alayhi akharaja minhu shay'un am la? Fala yakhrujanna minal-masjidi hatta yasma'a sawtan aw yajida riha",
    translation:
      "If one of you feels something in his stomach and is unsure whether anything has come out of him or not, let him not leave [the prayer or the mosque] until he hears a sound or detects a smell.",
    lessons: [
      'This hadith establishes the legal principle that a state of certainty (wudu) is not removed by mere doubt — certainty is only overturned by certainty.',
      'This is one of the clearest foundational texts for a broader Islamic legal maxim: al-yaqin la yazulu bish-shakk ("certainty is not removed by doubt").',
      'The hadith directly addresses a common source of anxiety in worship, offering a practical, reassuring standard.',
    ],
  },
  {
    num: 12,
    chapter: 'purification',
    verified: false,
    title: 'Prohibition of Urinating in Still Water',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَا يَبُولَنَّ أَحَدُكُمْ فِي الْمَاءِ الدَّائِمِ الَّذِي لَا يَجْرِي ثُمَّ يَغْتَسِلُ فِيهِ',
    transliteration:
      "La yabulanna ahadukum fil-ma'id-da'imil-ladhi la yajri thumma yaghtasilu fih",
    translation:
      "Let none of you urinate in still, non-flowing water, and then [wish to] bathe in it.",
    lessons: [
      'This hadith establishes an early principle of water conservation and public hygiene tied directly to ritual purification.',
      'Standing water, unlike flowing water, is more easily and lastingly contaminated, which is reflected in this specific prohibition.',
      'Scholars discuss this hadith when establishing the conditions under which a body of water is no longer considered pure (tahir) or purifying (tahur).',
    ],
  },
  {
    num: 13,
    chapter: 'purification',
    verified: false,
    title: 'The Two Punished Graves',
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِنَّهُمَا لَيُعَذَّبَانِ، وَمَا يُعَذَّبَانِ فِي كَبِيرٍ، أَمَّا أَحَدُهُمَا فَكَانَ لَا يَسْتَتِرُ مِنَ الْبَوْلِ، وَأَمَّا الْآخَرُ فَكَانَ يَمْشِي بِالنَّمِيمَةِ',
    transliteration:
      "Innahuma layu'adhdhaban, wa ma yu'adhdhabani fi kabir, amma ahaduhuma fakana la yastatiru minal-bawl, wa ammal-akharu fakana yamshi bin-namimah",
    translation:
      "Truly the two of them are being punished, and they are not being punished for something [that seemed] major [to them]: as for one of them, he did not shield himself from [the splashing of] urine, and as for the other, he used to go about spreading malicious gossip.",
    lessons: [
      'This hadith is a primary text establishing that failing to guard oneself from urine impurity is treated as a serious matter in the sight of Allah.',
      'The phrase "not punished for something major" is understood by scholars to mean not major in the eyes of the two people themselves, not that the matters are minor in Allah\'s sight.',
      'This hadith pairs a purification-related sin with a social sin (gossip), showing how ritual and interpersonal conduct are treated with comparable seriousness.',
    ],
  },
  {
    num: 14,
    chapter: 'purification',
    verified: false,
    title: 'The Five Practices of Fitrah',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'الْفِطْرَةُ خَمْسٌ: الْخِتَانُ، وَالِاسْتِحْدَادُ، وَقَصُّ الشَّارِبِ، وَتَقْلِيمُ الْأَظْفَارِ، وَنَتْفُ الْإِبِطِ',
    transliteration:
      "Al-fitratu khams: al-khitan, wal-istihdad, wa qassush-sharib, wa taqlimul-azfar, wa natful-ibt",
    translation:
      "The natural disposition (fitrah) consists of five things: circumcision, shaving the pubic hair, trimming the mustache, clipping the nails, and plucking the underarm hair.",
    lessons: [
      'This hadith establishes several practices of personal grooming and hygiene as part of the natural human disposition Islam affirms and formalizes.',
      'These practices are commonly discussed alongside a recommended maximum interval (traditionally cited as forty days) for their upkeep.',
      'The word "fitrah" here connects physical cleanliness to something scholars describe as consistent with humanity\'s created, God-given nature, not an arbitrary cultural custom.',
    ],
  },
  // Entry 15: text and translation sourced from Sahih Muslim 267a/267b
  // and the parallel Sahih Bukhari narration (commonly cited as
  // Bukhari 154), cross-checked against sunnah.com and
  // hadithunlocked.com. Its position at #15 in the purification
  // chapter follows a named scholar's (Dr. Saleh As-Saleh) published
  // topic outline of this collection, not independent confirmation
  // against a print edition. Still part of the verification pass.
  {
    num: 15,
    chapter: 'purification',
    verified: false,
    title: 'Not Cleansing Oneself With the Right Hand',
    narrator: 'Abu Qatadah (from his father, in some chains; also directly attributed to Abu Qatadah)',
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا دَخَلَ أَحَدُكُمُ الْخَلَاءَ فَلَا يَمَسَّ ذَكَرَهُ بِيَمِينِهِ، وَلَا يَتَمَسَّحْ بِيَمِينِهِ',
    transliteration:
      "Idha dakhala ahadukumul-khala'a fala yamassa dhakarahu biyaminihi, wa la yatamassah biyaminihi",
    translation:
      "When any of you enters the privy, he should not touch his private part with his right hand, nor should he cleanse himself with his right hand.",
    lessons: [
      'This hadith is a primary text for the ruling that the right hand is reserved for honorable uses (eating, greeting, and similar), and the left hand for cleansing after using the toilet.',
      'A closely related version of this same narration adds a third instruction, not to breathe directly into a drinking vessel, grouping several everyday etiquette rulings together in one report.',
      'This principle extends in practice to a broader convention in many Muslim communities of generally reserving the right hand for eating and the left for personal cleansing, though the hadith itself specifically addresses the moment of cleansing after using the toilet.',
    ],
  },
  {
    num: 16,
    chapter: 'prayer',
    verified: false,
    title: 'Pray As You Have Seen Me Pray',
    narrator: 'Malik ibn al-Huwayrith',
    source: 'Bukhari',
    arabic_text: 'صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي',
    transliteration: "Sallu kama ra'aytumuni usalli",
    translation:
      "Pray as you have seen me praying.",
    lessons: [
      'This short hadith is a foundational text establishing the Prophet\'s ﷺ own practice, as observed and transmitted by the Companions, as the model for the prayer\'s form.',
      'It underlies the broader methodological principle that the details of worship (postures, wording, sequence) are to be taken from what was demonstrated and transmitted, not independently reasoned.',
      'This hadith is often cited at the opening of fiqh discussions on the described procedure of the prayer.',
    ],
  },
  {
    num: 17,
    chapter: 'prayer',
    verified: false,
    title: 'The Five Prayers as a River That Washes Away Sin',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ هَلْ يَبْقَى مِنْ دَرَنِهِ شَيْءٌ؟ قَالُوا: لَا يَبْقَى مِنْ دَرَنِهِ شَيْءٌ. قَالَ: فَذَلِكَ مَثَلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهِنَّ الْخَطَايَا',
    transliteration:
      "Ara'aytum law anna nahran bibabi ahadikum yaghtasilu fihi kulla yawmin khamsa marratin hal yabqa min daranihi shay'? Qalu: la yabqa min daranihi shay'. Qala: fadhalika mathalus-salawatil-khamsi yamhullahu bihinnal-khataya",
    translation:
      "\"Consider — if there were a river at the door of one of you, in which he bathed five times every day, would any trace of dirt remain on him?\" They said, \"No trace of dirt would remain.\" He said, \"That is the likeness of the five [daily] prayers: Allah erases sins by means of them.\"",
    lessons: [
      'This hadith teaches that the five daily prayers function as regular, repeated purification from sin, similar to how frequent washing removes physical dirt.',
      'The parable format, drawing on an everyday image, is a common Prophetic teaching method for conveying an abstract spiritual reality concretely.',
      'This hadith is frequently cited as motivation for maintaining consistency in the five daily prayers specifically, rather than sporadic extra devotion.',
    ],
  },
  {
    num: 18,
    chapter: 'prayer',
    verified: false,
    title: 'The Superiority of Congregational Prayer',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'صَلَاةُ الْجَمَاعَةِ أَفْضَلُ مِنْ صَلَاةِ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً',
    transliteration:
      "Salatul-jama'ati afdalu min salatil-fadhdhi bisab'in wa 'ishrina darajah",
    translation:
      "Prayer in congregation is more excellent than prayer performed alone by twenty-seven degrees.",
    lessons: [
      'This hadith is a primary text used to establish the strongly emphasized virtue of praying in congregation, particularly for men in the mosque.',
      'The specific figure given (twenty-seven degrees) is one of several related figures found across different narrations, which scholars discuss and reconcile.',
      'This hadith is commonly paired with rulings on the individual obligation or strong recommendation of attending congregational prayer.',
    ],
  },
  {
    num: 19,
    chapter: 'prayer',
    verified: false,
    title: "Whoever Prays Fajr Is Under Allah's Protection",
    narrator: "Jundub ibn 'Abdullah",
    source: 'Muslim',
    arabic_text: 'مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ',
    transliteration: "Man salla as-subha fahuwa fi dhimmatillah",
    translation:
      "Whoever prays the dawn (Fajr) prayer is under the protection of Allah.",
    lessons: [
      'This hadith singles out the Fajr prayer specifically for a special mention of divine protection, reflecting the particular difficulty and virtue of maintaining it.',
      'The word "dhimmah" (a covenant of protection/responsibility) is a weighty legal and theological term, used here in a spiritual sense.',
      'This hadith is often cited as motivation for the specific struggle of waking for the dawn prayer, as distinct from the other four daily prayers.',
    ],
  },
  {
    num: 20,
    chapter: 'prayer',
    verified: false,
    title: 'The Change of the Qiblah',
    narrator: "Al-Bara' ibn 'Azib",
    source: 'Bukhari & Muslim',
    arabic_text:
      'صَلَّيْنَا مَعَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَحْوَ بَيْتِ الْمَقْدِسِ سِتَّةَ عَشَرَ أَوْ سَبْعَةَ عَشَرَ شَهْرًا، ثُمَّ صُرِفْنَا نَحْوَ الْكَعْبَةِ',
    transliteration:
      "Sallayna ma'an-Nabiyyi sallallahu 'alayhi wa sallam nahwa Baytil-Maqdisi sittata 'ashara aw sab'ata 'ashara shahran, thumma surifna nahwal-Ka'bah",
    translation:
      "We prayed with the Prophet ﷺ facing Jerusalem for sixteen or seventeen months, then we were turned to face the Ka'bah.",
    lessons: [
      'This hadith documents the historical change of the direction of prayer (qiblah) from Jerusalem to the Ka\'bah in Makkah, an event also referenced in the Qur\'an (2:142-150).',
      'The Companion\'s own uncertainty in his report ("sixteen or seventeen months") is preserved rather than smoothed over, reflecting the honesty valued in hadith transmission even at the cost of apparent precision.',
      'This hadith is foundational for fiqh discussions on the ruling for prayers performed before news of a qiblah change reaches a given locality.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 21–36 ADDED ON REQUEST (16 of a requested 20). Same
  // sourcing standard as entry 15: every hadith below was located
  // via targeted search against sunnah.com, hadithunlocked.com, or
  // equivalent, not drafted from memory, and each is cross-checked
  // to Bukhari and/or Muslim specifically (a few sources surfaced
  // during research were Sunan-only or graded hasan rather than
  // sahih and were deliberately excluded to keep this file's
  // Bukhari/Muslim-only scope). Positions in the `num` sequence
  // here are NOT claimed to match this collection's real ordering
  // — unlike entry 15, these were not individually cross-referenced
  // against a named scholar's topic outline of 'Umdat al-Ahkam
  // specifically, only against the underlying hadith sources. The
  // remaining 4 of the requested 20 were not added in this pass;
  // reaching them with the same rigor needs further research.
  // Still verified: false throughout — sourcing the hadith text
  // correctly is not the same as confirming placement and wording
  // against this specific book's print edition.
  // ------------------------------------------------------------
  {
    num: 21,
    chapter: 'purification',
    verified: false,
    title: 'The Time Limit for Wiping Over the Khuff',
    narrator: "Safwan ibn 'Assal",
    source: 'Muslim (also Tirmidhi)',
    arabic_text:
      'كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَأْمُرُنَا إِذَا كُنَّا سَفْرًا أَنْ لَا نَنْزِعَ خِفَافَنَا ثَلَاثَةَ أَيَّامٍ وَلَيَالِيَهُنَّ إِلَّا مِنْ جَنَابَةٍ، وَلَكِنْ مِنْ غَائِطٍ وَبَوْلٍ وَنَوْمٍ',
    transliteration:
      "Kana Rasulullahi sallallahu 'alayhi wa sallam ya'muruna idha kunna safran an la nanzi'a khifafana thalathata ayyamin wa layalayahunna illa min janabah, wa lakin min gha'itin wa bawlin wa nawm",
    translation:
      "The Messenger of Allah ﷺ used to order us, when we were traveling, not to remove our leather socks for three days and their nights, except from janabah (major impurity), but not from defecating, urinating, or sleep.",
    lessons: [
      'This hadith establishes that the permission to wipe over leather socks instead of removing them for wudu has a time limit, rather than lasting indefinitely.',
      'Ordinary causes of wudu breaking (relieving oneself, sleep) do not require removing the khuff during the permitted window, but major impurity (janabah) does, since ghusl requires washing the feet directly.',
      'This is a companion directly reporting a standing practice of the Prophet ﷺ, a common and reliable hadith form.',
    ],
  },
  {
    num: 22,
    chapter: 'purification',
    verified: false,
    title: "The Exact Duration: Three Days for a Traveler, One for a Resident",
    narrator: "'Ali ibn Abi Talib",
    source: 'Muslim',
    arabic_text:
      'جَعَلَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ثَلَاثَةَ أَيَّامٍ وَلَيَالِيَهُنَّ لِلْمُسَافِرِ، وَيَوْمًا وَلَيْلَةً لِلْمُقِيمِ',
    transliteration:
      "Ja'ala Rasulullahi sallallahu 'alayhi wa sallam thalathata ayyamin wa layalayahunna lil-musafir, wa yawman wa laylatan lil-muqim",
    translation:
      "The Messenger of Allah ﷺ set three days and their nights for the traveler, and a day and a night for the resident [as the time limit for wiping over the khuff].",
    lessons: [
      'This hadith gives the precise figures behind the general time limit described in the previous hadith: a shorter window for someone who is home, a longer one for someone traveling.',
      'The distinction reflects a broader pattern in Islamic law of extending certain allowances for travelers, given the added difficulty of travel.',
      "'Ali reports this specifically as something he personally heard, in response to being asked by another companion who was uncertain about it, showing the careful chain of verification hadith transmission relies on.",
    ],
  },
  {
    num: 23,
    chapter: 'purification',
    verified: false,
    title: 'Madhi Requires Wudu, Not Ghusl',
    narrator: "'Ali ibn Abi Talib (via al-Miqdad ibn al-Aswad)",
    source: 'Bukhari & Muslim',
    arabic_text:
      'كُنْتُ رَجُلًا مَذَّاءً فَكُنْتُ أَسْتَحْيِي أَنْ أَسْأَلَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِمَكَانِ ابْنَتِهِ، فَأَمَرْتُ الْمِقْدَادَ فَسَأَلَهُ، فَقَالَ: يَغْسِلُ ذَكَرَهُ وَيَتَوَضَّأُ',
    transliteration:
      "Kuntu rajulan madhdha'an fakuntu astahyi an as'ala Rasulallahi sallallahu 'alayhi wa sallam limakani ibnatihi, fa'amartul-Miqdada fasa'alahu, faqala: yaghsilu dhakarahu wa yatawadda'",
    translation:
      "I was a man who frequently emitted madhi (prostatic fluid), and I was too shy to ask the Messenger of Allah ﷺ myself because of his daughter [my wife], so I asked al-Miqdad to ask him. He said: he should wash his private part and perform wudu.",
    lessons: [
      "This hadith distinguishes madhi (a thin discharge, requiring only wudu after washing the affected area) from maniyy (requiring full ghusl), a distinction with real practical consequences for daily worship.",
      "'Ali's shyness about asking the Prophet ﷺ directly, given his marriage to the Prophet's ﷺ daughter Fatimah, is preserved in the report and is often cited as an example of natural modesty around sensitive personal questions, worked around through a proxy rather than avoided entirely.",
      'This hadith is a primary reference point for the broader set of rulings distinguishing madhi from maniyy in fiqh.',
    ],
  },
  {
    num: 24,
    chapter: 'purification',
    verified: false,
    title: "Sprinkling Water on a Nursing Boy's Urine",
    narrator: 'Umm Qais bint Mihsan',
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّهَا أَتَتْ بِابْنٍ لَهَا صَغِيرٍ لَمْ يَأْكُلِ الطَّعَامَ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَبَالَ عَلَى ثَوْبِهِ، فَدَعَا بِمَاءٍ فَنَضَحَهُ عَلَيْهِ، وَلَمْ يَغْسِلْهُ',
    transliteration:
      "Annaha atat bi-ibnin laha saghirin lam ya'kulit-ta'ama ila Rasulillahi sallallahu 'alayhi wa sallam, fabala 'ala thawbihi, fada'a bima'in fanadahahu 'alayhi, wa lam yaghsilhu",
    translation:
      "She brought her young son, who had not yet begun eating food, to the Messenger of Allah ﷺ, and he urinated on his garment. He called for water and sprinkled it over the spot, and did not wash it thoroughly.",
    lessons: [
      'This hadith is a primary text for the ruling that a still-nursing baby boy\'s urine only needs to be sprinkled with water, a lighter requirement than the thorough washing normally required for urine.',
      'This lighter treatment is understood by scholars as a practical accommodation, given how frequently a nursing infant is carried and how often this would otherwise arise.',
      'This ruling applies only while the child is exclusively nursing; once he begins eating regular food, the ordinary requirement to wash the urine returns, as clarified in a related report.',
    ],
  },
  {
    num: 25,
    chapter: 'purification',
    verified: false,
    title: "Sprinkle a Boy's Urine, Wash a Girl's",
    narrator: "'Ali ibn Abi Talib",
    source: 'Tirmidhi & Ibn Majah (related content also in Bukhari & Muslim via Umm Qais)',
    arabic_text: 'يُنْضَحُ مِنْ بَوْلِ الْغُلَامِ، وَيُغْسَلُ مِنْ بَوْلِ الْجَارِيَةِ',
    transliteration: "Yunda-hu min bawlil-ghulami, wa yughsalu min bawlil-jariyah",
    translation:
      "Water should be sprinkled on the urine of a boy, and the urine of a girl should be washed.",
    lessons: [
      'This hadith states the general rule directly, distinguishing the treatment of a nursing boy\'s urine from a nursing girl\'s, whose urine requires the standard thorough washing.',
      'Qatadah, a narrator commenting on this hadith, clarified that this distinction applies only while both are still exclusively nursing and not yet eating regular food.',
      'This is one of the more commonly discussed rulings in the purification chapter precisely because it is easy for a new parent to be unaware of, and easy to apply incorrectly by treating both cases the same.',
    ],
  },
  {
    num: 26,
    chapter: 'purification',
    verified: false,
    title: 'The Bedouin Who Urinated in the Mosque',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'بَالَ أَعْرَابِيٌّ فِي الْمَسْجِدِ فَقَامَ النَّاسُ إِلَيْهِ لِيَقَعُوا بِهِ، فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: دَعُوهُ، وَأَرِيقُوا عَلَى بَوْلِهِ سَجْلًا مِنْ مَاءٍ، فَإِنَّمَا بُعِثْتُمْ مُيَسِّرِينَ وَلَمْ تُبْعَثُوا مُعَسِّرِينَ',
    transliteration:
      "Bala a'rabiyyun fil-masjidi faqaman-nasu ilayhi liyaqa'u bih, faqalan-Nabiyyu sallallahu 'alayhi wa sallam: da'uhu, wa ariqu 'ala bawlihi sajlan min ma'in, fa'innama bu'ithtum muyassirina wa lam tub'athu mu'assirin",
    translation:
      "A Bedouin urinated in the mosque, and the people rushed toward him to stop him. The Prophet ﷺ said: \"Leave him, and pour a bucket of water over his urine. You have been sent to make things easy, not to make them difficult.\"",
    lessons: [
      'The practical remedy given (pouring water over the affected spot) shows that purifying a solid surface from urine is straightforward and does not require elaborate ritual.',
      "The Prophet's ﷺ instruction to leave the man alone rather than physically stop or punish him mid-act, and to explain gently afterward, is widely cited as a model of patient, wisdom-led correction over harsh reaction.",
      'The closing phrase, that the Prophet ﷺ and his message were sent to make things easy rather than difficult, is one of the more frequently cited statements in Islamic scholarship on the general spirit of the Shari\'ah.',
    ],
  },
  {
    num: 27,
    chapter: 'purification',
    verified: false,
    title: 'Ten Things of the Fitrah',
    narrator: "'Aishah",
    source: 'Muslim',
    arabic_text:
      'عَشْرٌ مِنَ الْفِطْرَةِ: قَصُّ الشَّارِبِ، وَإِعْفَاءُ اللِّحْيَةِ، وَالسِّوَاكُ، وَاسْتِنْشَاقُ الْمَاءِ، وَقَصُّ الْأَظْفَارِ، وَغَسْلُ الْبَرَاجِمِ، وَنَتْفُ الْإِبْطِ، وَحَلْقُ الْعَانَةِ، وَانْتِقَاصُ الْمَاءِ',
    transliteration:
      "'Ashrun minal-fitrah: qassush-sharib, wa i'fa'ul-lihyah, was-siwak, wastinshaqul-ma', wa qassul-azfar, wa ghaslul-barajim, wa natful-ibt, wa halqul-'anah, wantiqasul-ma'",
    translation:
      "Ten things are from the fitrah (natural disposition): trimming the moustache, letting the beard grow, using the siwak, sniffing water into the nose, clipping the nails, washing the finger joints, plucking the armpit hair, shaving the pubic hair, and cleansing oneself with water [after using the toilet]. The narrator said: I have forgotten the tenth, unless it was rinsing the mouth.",
    lessons: [
      'This hadith gives a fuller list of grooming and hygiene practices than the shorter five-item version narrated by Abu Hurairah, and the two are generally read as complementary rather than contradictory.',
      "The narrator's own honest admission that he forgot the tenth item, rather than guessing or omitting the uncertainty, is a small but notable example of the transparency valued in hadith transmission.",
      'These practices are widely discussed alongside a recommended maximum interval, traditionally cited as forty days, for keeping up with several of them.',
    ],
  },
  {
    num: 28,
    chapter: 'purification',
    verified: false,
    title: 'The Prophet ﷺ Performing Wudu Before Sleeping While Junub',
    narrator: "'Aishah",
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ إِذَا أَرَادَ أَنْ يَنَامَ وَهُوَ جُنُبٌ غَسَلَ فَرْجَهُ وَتَوَضَّأَ وُضُوءَهُ لِلصَّلَاةِ',
    transliteration:
      "Kana idha arada an yanama wa huwa junubun ghasala farjahu wa tawadda'a wudu'ahu lis-salah",
    translation:
      "Whenever the Prophet ﷺ intended to sleep while in a state of janabah, he would wash his private parts and perform wudu as he would for prayer.",
    lessons: [
      'This hadith establishes that a person in a state of janabah is not obligated to perform ghusl immediately before sleeping, wudu is sufficient, though ghusl remains required before prayer.',
      "This is one of several related reports on the same practice; a companion separately asked 'Aishah directly whether the Prophet ﷺ used to sleep while junub, and she confirmed it, adding that he would perform wudu first.",
      'This reflects a broader theme in these rulings of genuine ease rather than an expectation of immediate, elaborate purification at every turn.',
    ],
  },
  {
    num: 29,
    chapter: 'purification',
    verified: false,
    title: 'Given Five Things Not Given to Any Prophet Before Him',
    narrator: "Jabir ibn 'Abdullah",
    source: 'Bukhari & Muslim',
    arabic_text:
      'أُعْطِيتُ خَمْسًا لَمْ يُعْطَهُنَّ أَحَدٌ قَبْلِي: نُصِرْتُ بِالرُّعْبِ مَسِيرَةَ شَهْرٍ، وَجُعِلَتْ لِيَ الْأَرْضُ مَسْجِدًا وَطَهُورًا، فَأَيُّمَا رَجُلٍ مِنْ أُمَّتِي أَدْرَكَتْهُ الصَّلَاةُ فَلْيُصَلِّ، وَأُحِلَّتْ لِيَ الْغَنَائِمُ وَلَمْ تَحِلَّ لِأَحَدٍ قَبْلِي، وَأُعْطِيتُ الشَّفَاعَةَ، وَكَانَ النَّبِيُّ يُبْعَثُ إِلَى قَوْمِهِ خَاصَّةً وَبُعِثْتُ إِلَى النَّاسِ عَامَّةً',
    transliteration:
      "U'tiytu khamsan lam yu'tahunna ahadun qabli: nusirtu bir-ru'bi masirata shahr, wa ju'ilat liyal-ardu masjidan wa tahura, fa'ayyuma rajulin min ummati adrakat-hus-salatu falyusalli, wa uhillat liyal-ghana'imu wa lam tahilla li'ahadin qabli, wa u'tiytush-shafa'ah, wa kanan-Nabiyyu yub'athu ila qawmihi khassatan wa bu'ithtu ilan-nasi 'ammah",
    translation:
      "I have been given five things which were not given to any prophet before me: I was granted victory through awe struck into my enemies from a month's distance; the earth has been made for me a place of prayer and a means of purification, so wherever the time of prayer finds any man of my nation, let him pray there; the spoils of war have been made lawful for me, which was not lawful for anyone before me; I have been given the right of intercession; and every prophet before me was sent to his own people specifically, while I have been sent to all mankind.",
    lessons: [
      'The mention of the earth being made "a means of purification" is the direct textual basis, alongside the specific tayammum verses in the Qur\'an, for the ruling permitting tayammum when water is unavailable.',
      'That prayer can now be performed anywhere clean, rather than only in a designated temple or sanctuary, is presented here as a specific mercy and ease given to this nation.',
      "This hadith is frequently cited beyond fiqh discussions specifically, as a broader statement of the Prophet's ﷺ universal mission compared to earlier prophets sent to specific peoples.",
    ],
  },
  {
    num: 30,
    chapter: 'purification',
    verified: false,
    title: 'Perfecting Wudu Despite Hardship Erases Sins',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text:
      'أَلَا أَدُلُّكُمْ عَلَى مَا يَمْحُو اللَّهُ بِهِ الْخَطَايَا، وَيَرْفَعُ بِهِ الدَّرَجَاتِ؟ قَالُوا: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: إِسْبَاغُ الْوُضُوءِ عَلَى الْمَكَارِهِ، وَكَثْرَةُ الْخُطَا إِلَى الْمَسَاجِدِ، وَانْتِظَارُ الصَّلَاةِ بَعْدَ الصَّلَاةِ، فَذَلِكُمُ الرِّبَاطُ',
    transliteration:
      "Ala adullukum 'ala ma yamhullahu bihil-khataya, wa yarfa'u bihid-darajat? Qalu: bala ya Rasulallah. Qala: isbaghul-wudu'i 'alal-makarih, wa kathratul-khuta ilal-masajid, wantizharus-salati ba'das-salah, fadhalikumur-ribat",
    translation:
      "Shall I not guide you to something by which Allah erases sins and raises ranks? They said: Yes, O Messenger of Allah. He said: Performing wudu thoroughly despite hardship, taking many steps to the mosques, and waiting for one prayer after another; that is the striving [ribat].",
    lessons: [
      'This hadith frames a habit as spiritually significant not because it is easy, but specifically because it is done despite hardship, cold water, difficulty reaching the mosque, discomfort.',
      'The word used for the reward, "ribat", ordinarily refers to guarding a frontier for the sake of Allah, and its use here elevates a routine act of worship to the level of that kind of sustained, deliberate effort.',
      'This hadith is commonly cited as motivation specifically for maintaining consistency in worship through inconvenient circumstances, not only when conditions are comfortable.',
    ],
  },
  {
    num: 31,
    chapter: 'purification',
    verified: false,
    title: 'Bright Faces and Limbs From the Traces of Wudu',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text:
      'إِنَّ أُمَّتِي يُدْعَوْنَ يَوْمَ الْقِيَامَةِ غُرًّا مُحَجَّلِينَ مِنْ آثَارِ الْوُضُوءِ، فَمَنِ اسْتَطَاعَ مِنْكُمْ أَنْ يُطِيلَ غُرَّتَهُ فَلْيَفْعَلْ',
    transliteration:
      "Inna ummati yud'awna yawmal-qiyamati ghurran muhajjalina min atharil-wudu', famanis-tata'a minkum an yutila ghurratahu falyaf'al",
    translation:
      "My nation will be called on the Day of Resurrection with bright faces, hands, and feet from the traces of wudu. So whoever among you is able to lengthen his brightness, let him do so.",
    lessons: [
      'This hadith connects the physical act of wudu to a specific, visible sign on the Day of Resurrection, giving it a significance beyond the immediate act of worship it enables.',
      'The instruction to "lengthen" the brightness is generally understood by scholars as encouragement to wash slightly beyond the bare minimum required area during wudu, within reason.',
      'This hadith is commonly recited as encouragement for maintaining wudu consistently, since the described sign is tied to habitual practice rather than a single occasion.',
    ],
  },
  {
    num: 32,
    chapter: 'purification',
    verified: false,
    title: 'The Adornment of the Believer Reaches as Far as Wudu Reaches',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text: 'تَبْلُغُ الْحِلْيَةُ مِنَ الْمُؤْمِنِ حَيْثُ يَبْلُغُ الْوُضُوءُ',
    transliteration: "Tablughul-hilyatu minal-mu'mini haythu yablughul-wudu'",
    translation:
      "The adornment of a believer [in Paradise] will reach as far as the water of wudu reaches [on his body].",
    lessons: [
      'This hadith is closely related to the previous one and is often cited alongside it, extending the theme of a visible mark tied to the parts of the body reached by wudu.',
      'It is one of several hadith scholars draw on when discussing the described spiritual benefits attached to the specific limbs washed in wudu, the face, hands, arms, and feet.',
      'This hadith is generally read as figurative or eschatological rather than describing anything observable in this worldly life.',
    ],
  },
  {
    num: 33,
    chapter: 'purification',
    verified: false,
    title: 'Sins Fall Away With a Thorough Wudu',
    narrator: "'Uthman ibn 'Affan",
    source: 'Muslim',
    arabic_text: 'مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ حَتَّى تَخْرُجَ مِنْ تَحْتِ أَظْفَارِهِ',
    transliteration:
      "Man tawadda'a fa'ahsanal-wudu'a kharajat khatayahu min jasadihi hatta takhruja min tahti azfarih",
    translation:
      "Whoever performs wudu and does it well, his sins depart from his body, even from beneath his fingernails.",
    lessons: [
      'This hadith is narrated by \'Uthman ibn \'Affan, the same companion whose detailed description of the Prophet\'s ﷺ wudu appears earlier in this collection, and the two reports are often studied together.',
      'The specific mention of "beneath the fingernails" is a vivid detail scholars point to as emphasizing genuine thoroughness, not a rushed or partial washing.',
      'This is one of several hadith in this chapter connecting the physical act of wudu directly to the removal of sin, a recurring theme across this section.',
    ],
  },
  {
    num: 34,
    chapter: 'purification',
    verified: false,
    title: 'Every Sin the Limbs Committed Is Washed Away',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text:
      'إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ فَغَسَلَ وَجْهَهُ خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ، أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ، فَإِذَا غَسَلَ يَدَيْهِ خَرَجَ مِنْ يَدَيْهِ كُلُّ خَطِيئَةٍ كَانَ بَطَشَتْهَا يَدَاهُ مَعَ الْمَاءِ، أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ، حَتَّى يَخْرُجَ نَقِيًّا مِنَ الذُّنُوبِ',
    transliteration:
      "Idha tawadda'al-'abdul-Muslimu faghasala wajhahu kharaja min wajhihi kullu khati'atin nazara ilayha bi'aynayhi ma'al-ma', aw ma'a akhiri qatril-ma', fa'idha ghasala yadayhi kharaja min yadayhi kullu khati'atin kana batashat-ha yadahu ma'al-ma', aw ma'a akhiri qatril-ma', hatta yakhruja naqiyyan minadh-dhunub",
    translation:
      "When a Muslim performs wudu and washes his face, every sin his eyes looked upon departs from his face with the water, or with the last drop of water. When he washes his hands, every sin his hands committed departs from his hands with the water, or with the last drop of water, until he emerges cleansed of sin.",
    lessons: [
      'This hadith describes the sins associated with each specific limb, sight for the eyes, action for the hands, being addressed by the corresponding step of wudu, rather than sin in a general, undifferentiated sense.',
      'This is one of the more detailed and frequently cited hadith on the spiritual significance of wudu, extending the same theme to each washed part of the body in turn.',
      'The phrase "until he emerges cleansed of sin" is generally understood by scholars to refer to minor sins specifically, not major sins, which classical scholarship treats as generally requiring sincere repentance in their own right.',
    ],
  },
  {
    num: 35,
    chapter: 'purification',
    verified: false,
    title: 'Fatimah bint Abi Hubaysh and Istihadah',
    narrator: "'Aishah",
    source: 'Bukhari',
    arabic_text:
      'إِنَّ فَاطِمَةَ بِنْتَ أَبِي حُبَيْشٍ قَالَتْ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنِّي أُسْتَحَاضُ فَلَا أَطْهُرُ، أَفَأَدَعُ الصَّلَاةَ؟ فَقَالَ: لَا، إِنَّمَا ذَلِكِ عِرْقٌ وَلَيْسَ بِحَيْضٍ، فَإِذَا أَقْبَلَتِ الْحَيْضَةُ فَدَعِي الصَّلَاةَ، وَإِذَا أَدْبَرَتْ فَاغْسِلِي عَنْكِ الدَّمَ وَصَلِّي',
    transliteration:
      "Inna Fatimata bint Abi Hubayshin qalat lin-Nabiyyi sallallahu 'alayhi wa sallam: inni ustahadu fala athuru, afa'ada'us-salah? Faqala: la, innama dhalika 'irqun wa laysa bihaydin, fa'idha aqbalatil-haydatu fada'is-salah, wa idha adbarat faghsili 'ankid-dama wa salli",
    translation:
      "Fatimah bint Abi Hubaysh said to the Prophet ﷺ: I experience istihadah (continuous, non-menstrual bleeding) and never become pure. Should I leave the prayer? He said: No, that is only a vein, not menstruation. When your menses comes, leave the prayer, and when it passes, wash the blood off yourself and pray.",
    lessons: [
      'This hadith is the foundational text distinguishing istihadah (a non-menstrual, ongoing bleeding treated as ritual purity) from hayd (menstruation, which suspends prayer), a distinction the whole later chapter on hayd and istihadah builds on.',
      'The Prophet\'s ﷺ direct, practical answer, identifying her known cycle as the marker rather than the bleeding itself, models the general approach of referring a woman to her established pattern in ambiguous cases.',
      'This hadith is commonly the opening reference point in fiqh discussions of istihadah specifically, since it is the origin case the surrounding rulings are built around.',
    ],
  },
  {
    num: 36,
    chapter: 'purification',
    verified: false,
    title: 'Purification Is Half of Faith',
    narrator: "Abu Malik al-Ash'ari",
    source: 'Muslim',
    arabic_text:
      'الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ (أَوْ تَمْلَأُ) مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ',
    transliteration:
      "At-tuhuru shatrul-iman, wal-hamdu lillahi tamla'ul-mizan, wa subhanallahi wal-hamdu lillahi tamla'ani (aw tamla'u) ma baynas-samawati wal-ard, was-salatu nur, was-sadaqatu burhan, was-sabru diya', wal-Qur'anu hujjatun laka aw 'alayk",
    translation:
      "Purification is half of faith. Al-hamdu lillah (praise be to Allah) fills the scale. Subhan Allah (glory be to Allah) and al-hamdu lillah fill up what is between the heavens and the earth. Prayer is light. Charity is proof. Patience is illumination. And the Qur'an is an argument either for you or against you.",
    lessons: [
      'This hadith opens with purification specifically before moving through a series of short, memorable statements about other acts of worship, which is part of why it is commonly placed near the start of a purification chapter.',
      'Scholars generally understand "purification" here to refer to wudu specifically (the outward, physical sense) which is then linked to faith, an inward reality, illustrating how outward acts of worship are tied to inward states in Islamic teaching.',
      'The closing line, that the Qur\'an is an argument either for or against a person, is often cited on its own as a reminder that engaging with the Qur\'an calls for sincerity and follow-through, not recitation alone.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 37–46: the requested 10 more, same sourcing standard
  // as entries 15 and 21–36. Every hadith below was located via
  // targeted search against sunnah.com, hadithunlocked.com, or
  // equivalent, not drafted from memory, and cross-checked to
  // Bukhari and/or Muslim specifically. Entry 45 (facing the
  // qiblah while relieving oneself) turned up direct confirmation
  // during research that it appears in a classical commentary
  // titled specifically on this book ("Ihkam al-Ihkam Sharh
  // 'Umdat al-Ahkam"), the strongest placement confirmation found
  // for any entry in this file so far, still short of checking an
  // actual print edition. As with prior batches, `num` values here
  // are sequential additions, not a claim about this collection's
  // real internal ordering, except where noted. Still verified:
  // false throughout.
  // ------------------------------------------------------------
  {
    num: 37,
    chapter: 'purification',
    verified: false,
    title: 'Actions Are But by Intentions',
    narrator: "'Umar ibn al-Khattab",
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا، أَوِ امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
    transliteration:
      "Innamal-a'malu bin-niyyat, wa innama likulli imri'in ma nawa, faman kanat hijratuhu ilallahi wa Rasulihi fahijratuhu ilallahi wa Rasulih, wa man kanat hijratuhu lidunya yusibuha, awimra'atin yankihuha, fahijratuhu ila ma hajara ilayh",
    translation:
      "Actions are but by intentions, and every person will have only what he intended. So whoever emigrated for Allah and His Messenger, his emigration was for Allah and His Messenger, and whoever emigrated for some worldly gain he was seeking, or for a woman he wished to marry, his emigration was for whatever he emigrated for.",
    lessons: [
      'This is widely regarded as one of the most foundational hadith in the entire body of Islamic teaching, and many scholars of the earlier generations recommended placing it at the very opening of any book of religious knowledge, which is why Imam al-Bukhari began his collection with it.',
      'A recent bibliographic cross-check found this hadith listed as the actual opening hadith of \'Umdat al-Ahkam\'s purification chapter, ahead of the hadith currently numbered 1 in this file, see the header note above for detail.',
      'The specific example given, migration undertaken outwardly for the sake of Allah but inwardly for some worldly gain, illustrates that the same outward action can carry entirely different weight before Allah depending on the intention behind it.',
    ],
  },
  {
    num: 38,
    chapter: 'purification',
    verified: false,
    title: 'The Supplication Before Entering the Toilet',
    narrator: 'Anas ibn Malik',
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَخَلَ الْخَلَاءَ قَالَ: اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration:
      "Kana Rasulullahi sallallahu 'alayhi wa sallam idha dakhalal-khala'a qal: Allahumma inni a'udhu bika minal-khubthi wal-khaba'ith",
    translation:
      "Whenever the Messenger of Allah ﷺ entered the toilet, he would say: O Allah, I seek refuge with You from male and female devils.",
    lessons: [
      'This hadith establishes the recommended practice of seeking Allah\'s protection before entering a place associated with impurity, since remembrance of Allah is not appropriate inside the toilet itself.',
      'The supplication is understood as seeking refuge specifically from harm and evil influence in a place where a person is physically exposed and their usual awareness of their surroundings is reduced.',
      'This is one of the more universally known short supplications in daily Muslim practice, taught to children from a young age alongside basic toilet etiquette.',
    ],
  },
  {
    num: 39,
    chapter: 'purification',
    verified: false,
    title: 'Starting From the Right in Wudu and Daily Affairs',
    narrator: "'Aishah",
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُحِبُّ التَّيَمُّنَ فِي طُهُورِهِ وَتَرَجُّلِهِ وَتَنَعُّلِهِ',
    transliteration:
      "Kanan-Nabiyyu sallallahu 'alayhi wa sallam yuhibbut-tayammuna fi tuhurihi wa tarajjulihi wa tana''ulih",
    translation:
      "The Prophet ﷺ used to love starting from the right side in his purification, in combing his hair, and in putting on his shoes.",
    lessons: [
      'This hadith establishes a general preference for the right side in wudu specifically, and in similar acts, extending to a broader principle applied across many areas of daily life.',
      'A fuller version of this same report from \'Aishah adds that this preference extended to all of the Prophet\'s ﷺ affairs generally, not only these three examples.',
      'This preference is understood by scholars as recommended (mustahabb) rather than a strict condition for the validity of wudu itself; performing wudu starting from the left does not invalidate it.',
    ],
  },
  {
    num: 40,
    chapter: 'purification',
    verified: false,
    title: 'Wiping Over the Forehead and Turban',
    narrator: "Al-Mughirah ibn Shu'bah",
    source: 'Muslim (also Bukhari, shorter wording)',
    arabic_text: 'أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ تَوَضَّأَ فَمَسَحَ بِنَاصِيَتِهِ وَعَلَى الْعِمَامَةِ وَعَلَى الْخُفَّيْنِ',
    transliteration:
      "Annan-Nabiyya sallallahu 'alayhi wa sallam tawadda'a famasaha binasiyatihi wa 'alal-'imamati wa 'alal-khuffayn",
    translation:
      "The Prophet ﷺ performed wudu and wiped over his forehead, over his turban, and over his leather socks.",
    lessons: [
      'This hadith is a primary text for the ruling that wiping over a turban (or similar head covering, referred to elsewhere as a khimar) can substitute for wiping the whole head directly, under the same general logic as wiping over khuffs instead of removing them.',
      'The combination of wiping the forehead directly and the turban over the rest of the head is the specific method most commonly drawn from this hadith, rather than wiping the turban alone.',
      'This ruling has real practical relevance for anyone wearing a tightly wound turban or similar head covering that would be genuinely difficult to remove and rewrap for every wudu.',
    ],
  },
  {
    num: 41,
    chapter: 'purification',
    verified: false,
    title: 'Ghusl on Friday Is Obligatory for Every Adult',
    narrator: 'Abu Sa\'eed al-Khudri',
    source: 'Bukhari & Muslim',
    arabic_text: 'الْغُسْلُ يَوْمَ الْجُمُعَةِ وَاجِبٌ عَلَى كُلِّ مُحْتَلِمٍ',
    transliteration: "Al-ghuslu yawmal-jumu'ati wajibun 'ala kulli muhtalim",
    translation:
      "Ghusl on the day of Jumu'ah (Friday) is obligatory upon every adult (literally, every one who has reached puberty).",
    lessons: [
      'Scholars differ on whether "obligatory" here is meant in the strict legal sense or as strong emphasis, and the majority view treats Friday ghusl as a strongly confirmed sunnah rather than a strict obligation whose absence would invalidate the Friday prayer.',
      'This ruling is tied specifically to attending the Friday congregational prayer, and is generally understood as directed at men who are required to attend it.',
      'This hadith is commonly paired with related instructions about using siwak and wearing perfume on Fridays, together forming a broader picture of physical presentation and cleanliness recommended for the weekly congregation.',
    ],
  },
  {
    num: 42,
    chapter: 'purification',
    verified: false,
    title: 'Each Step to the Mosque Erases a Sin and Raises a Rank',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text:
      'مَنْ تَطَهَّرَ فِي بَيْتِهِ ثُمَّ مَشَى إِلَى بَيْتٍ مِنْ بُيُوتِ اللَّهِ لِيَقْضِيَ فَرِيضَةً مِنْ فَرَائِضِ اللَّهِ كَانَتْ خَطْوَتَاهُ إِحْدَاهُمَا تَحُطُّ خَطِيئَةً وَالْأُخْرَى تَرْفَعُ دَرَجَةً',
    transliteration:
      "Man tatahhara fi baytihi thumma mashi ila baytin min buyutillahi liyaqdiya faridatan min fara'idillahi kanat khatwataha ihdahuma tahuttu khati'atan wal-ukhra tarfa'u darajah",
    translation:
      "Whoever purifies himself in his house, then walks to one of the houses of Allah to fulfil an obligation among Allah's obligations, one of his two steps will erase a sin, and the other will raise him a rank.",
    lessons: [
      'This hadith directly ties wudu performed at home, before setting out, to the reward described, rather than describing the reward of walking to the mosque in general regardless of one\'s state.',
      'This is closely connected to the "shall I not guide you" hadith earlier in this collection, both describe steps toward the mosque as spiritually significant, and are often studied together.',
      'The image of one step erasing a sin and the very next step raising a rank is often cited as encouragement that even ordinary, physically effortless acts of worship carry real weight when approached with the right intention and state.',
    ],
  },
  {
    num: 43,
    chapter: 'purification',
    verified: false,
    title: 'Carrying Water for the Prophet ﷺ When He Relieved Himself',
    narrator: 'Anas ibn Malik',
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَدْخُلُ الْخَلَاءَ، فَأَحْمِلُ أَنَا وَغُلَامٌ نَحْوِي إِدَاوَةً مِنْ مَاءٍ وَعَنَزَةً، فَيَسْتَنْجِي بِالْمَاءِ',
    transliteration:
      "Kana Rasulullahi sallallahu 'alayhi wa sallam yadkhulul-khala'a, fa'ahmilu ana wa ghulamun nahwi ida'atan min ma'in wa 'anazatan, fayastanji bil-ma'",
    translation:
      "The Messenger of Allah ﷺ used to enter the toilet, and I, along with another boy about my age, would carry a small skin container of water and a short spear, and he would cleanse himself with the water.",
    lessons: [
      'This hadith is one of the primary texts establishing that cleansing with water (istinja) after using the toilet was the Prophet\'s ﷺ regular practice, alongside the use of stones described in related reports.',
      'The mention of the spear alongside the water container reflects ordinary daily-life logistics of the time (used for privacy, marking a spot, or personal security) rather than carrying any ritual significance of its own.',
      'This is a small, everyday detail preserved by Anas ibn Malik, who served the Prophet ﷺ personally for many years and is a major source for reports describing the Prophet\'s ﷺ ordinary daily habits.',
    ],
  },
  {
    num: 44,
    chapter: 'purification',
    verified: false,
    title: 'The Quantity of Water Used for Wudu and Ghusl',
    narrator: 'Anas ibn Malik',
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَغْسِلُ، أَوْ كَانَ يَغْتَسِلُ، بِالصَّاعِ إِلَى خَمْسَةِ أَمْدَادٍ، وَيَتَوَضَّأُ بِالْمُدِّ',
    transliteration:
      "Kanan-Nabiyyu sallallahu 'alayhi wa sallam yaghsilu, aw kana yaghtasilu, bis-sa'i ila khamsati amdad, wa yatawadda'u bil-mudd",
    translation:
      "The Prophet ﷺ used to perform ghusl with one sa' up to five mudds of water, and he used to perform wudu with one mudd of water.",
    lessons: [
      'This hadith gives a specific, practical sense of how little water the Prophet ﷺ actually used for wudu and ghusl (a mudd being roughly a double handful, a sa\' being roughly four such handfuls), which scholars cite as evidence against wastefulness in water use during purification.',
      'This is one of several hadith used by scholars discussing whether there is a minimum or maximum amount of water required for valid wudu or ghusl, generally concluding that thoroughness matters more than any fixed quantity.',
      'This practical detail is often raised today specifically in discussions encouraging mindful water use during wudu, especially in places where water is scarce.',
    ],
  },
  {
    num: 45,
    chapter: 'purification',
    verified: false,
    title: 'The Prohibition on Facing or Turning Away From the Qiblah While Relieving Oneself',
    narrator: 'Abu Ayyub al-Ansari',
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِذَا أَتَيْتُمُ الْغَائِطَ فَلَا تَسْتَقْبِلُوا الْقِبْلَةَ وَلَا تَسْتَدْبِرُوهَا، بِبَوْلٍ وَلَا غَائِطٍ، وَلَكِنْ شَرِّقُوا أَوْ غَرِّبُوا',
    transliteration:
      "Idha atayumul-gha'ita fala tastaqbilul-qiblata wa la tastadbiruha, bibawlin wa la gha'itin, wa lakin sharriqu aw gharribu",
    translation:
      "When you go to relieve yourselves, do not face the qiblah, nor turn your backs to it, whether urinating or defecating, but face east or west [relative to Madinah].",
    lessons: [
      'This hadith establishes a specific mark of respect for the direction of prayer, avoided even in the most private, unrelated act of relieving oneself.',
      'The direction given, east or west, is specific to Madinah\'s geography relative to Makkah, and scholars generally explain the underlying principle as avoiding facing or backing toward the qiblah specifically, adapted to whatever directions achieve that wherever a person actually is.',
      'Abu Ayyub himself, the narrator, is reported to have described how later generations in Syria found toilets already built facing the qiblah, and would turn away from that direction and ask Allah\'s forgiveness, showing the instruction was taken seriously as a real, practical standard rather than a merely symbolic one.',
    ],
  },
  {
    num: 46,
    chapter: 'purification',
    verified: false,
    title: "Water Springing From Between the Prophet's ﷺ Fingers",
    narrator: 'Anas ibn Malik',
    source: 'Bukhari',
    arabic_text:
      'أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ دَعَا بِإِنَاءٍ مِنْ مَاءٍ، فَأُتِيَ بِقَدَحٍ رَحْرَاحٍ فِيهِ شَيْءٌ مِنْ مَاءٍ، فَوَضَعَ أَصَابِعَهُ فِيهِ، قَالَ أَنَسٌ: فَجَعَلْتُ أَنْظُرُ إِلَى الْمَاءِ يَنْبُعُ مِنْ بَيْنِ أَصَابِعِهِ، قَالَ أَنَسٌ: فَحَزَرْتُ مَنْ تَوَضَّأَ مَا بَيْنَ السَّبْعِينَ إِلَى الثَّمَانِينَ',
    transliteration:
      "Annan-Nabiyya sallallahu 'alayhi wa sallam da'a bi'ina'in min ma'in, fa'utiya biqadahin rahrahin fihi shay'un min ma'in, fawada'a asabi'ahu fih, qala Anas: faja'altu anzuru ilal-ma'i yanbu'u min bayni asabi'ih, qala Anas: fahazartu man tawadda'a ma bayna sab'ina ilath-thamanin",
    translation:
      "The Prophet ﷺ called for a vessel of water, and a wide, shallow bowl with a small amount of water in it was brought to him. He placed his fingers in it. Anas said: I began watching the water spring up from between his fingers. Anas said: I estimated that those who performed wudu with it numbered between seventy and eighty.",
    lessons: [
      'This hadith is one of several reports of a physical miracle (mu\'jizah) attributed to the Prophet ﷺ, water increasing from a small amount to enough for dozens of people, witnessed directly by the narrator.',
      'Anas ibn Malik\'s report is notable for its specificity and restraint, giving a concrete estimated headcount rather than a vague or exaggerated claim, which is part of why scholars treat this narration as carrying real evidentiary weight rather than embellished storytelling.',
      'This hadith is often discussed alongside other reports of the same general kind of event occurring on different occasions, treated collectively by scholars as part of the well-attested miracles of the Prophet ﷺ beyond the Qur\'an itself.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 47–56: the third requested batch of 10, same sourcing
  // standard as entries 15, 21–36, and 37–46. Every hadith below
  // was located via targeted search against sunnah.com or
  // equivalent, not drafted from memory, and cross-checked to
  // Bukhari and/or Muslim. Entries 47–48 are the first entries to
  // populate the 'funerals' chapter, previously a structural
  // placeholder with no hadith content, since both turned up as
  // real, well-sourced, and thematically appropriate there rather
  // than under 'purification'. Still verified: false throughout.
  // ------------------------------------------------------------
  {
    num: 47,
    chapter: 'funerals',
    verified: false,
    title: 'Washing the Deceased: Starting With the Right Side',
    narrator: "Umm 'Atiyyah",
    source: 'Bukhari & Muslim',
    arabic_text: 'قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي غَسْلِ ابْنَتِهِ: ابْدَأْنَ بِمَيَامِنِهَا وَمَوَاضِعِ الْوُضُوءِ مِنْهَا',
    transliteration:
      "Qala Rasulullahi sallallahu 'alayhi wa sallam fi ghasli ibnatih: ibda'na bimayaminiha wa mawadi'il-wudu'i minha",
    translation:
      "The Messenger of Allah ﷺ said to them, regarding washing his daughter: Begin with her right side and the places washed in wudu.",
    lessons: [
      'This hadith establishes that washing a deceased person follows a similar sequence and priority to wudu, beginning with the right side and the parts of the body normally washed in ablution.',
      'A related, fuller narration from the same companion describes washing the body an odd number of times with water and sidr (lotus leaf), finishing with a trace of camphor, giving a more complete picture of the process this specific instruction was part of.',
      'This is one of the primary hadith scholars draw on when discussing whether performing wudu for the deceased before the full ghusl is recommended, since the instruction to begin with the places of wudu is understood by many as implying a wudu-like sequence.',
    ],
  },
  {
    num: 48,
    chapter: 'funerals',
    verified: false,
    title: 'The Martyrs of Uhud Were Not Washed',
    narrator: "Jabir ibn 'Abdullah",
    source: 'Bukhari',
    arabic_text:
      'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَجْمَعُ بَيْنَ الرَّجُلَيْنِ مِنْ قَتْلَى أُحُدٍ فِي ثَوْبٍ وَاحِدٍ، ثُمَّ يَقُولُ: أَيُّهُمْ أَكْثَرُ أَخْذًا لِلْقُرْآنِ؟ فَإِذَا أُشِيرَ لَهُ إِلَى أَحَدِهِمَا قَدَّمَهُ فِي اللَّحْدِ، وَقَالَ: أَنَا شَهِيدٌ عَلَى هَؤُلَاءِ يَوْمَ الْقِيَامَةِ، وَأَمَرَ بِدَفْنِهِمْ فِي دِمَائِهِمْ وَلَمْ يُغَسَّلُوا وَلَمْ يُصَلَّ عَلَيْهِمْ',
    transliteration:
      "Kanan-Nabiyyu sallallahu 'alayhi wa sallam yajma'u baynar-rajulayni min qatla Uhudin fi thawbin wahid, thumma yaqul: ayyuhum aktharu akhdhan lil-Qur'an? Fa'idha ushira lahu ila ahadihima qaddamahu fil-lahd, wa qala: ana shahidun 'ala ha'ula'i yawmal-qiyamah, wa amara bidafnihim fi dima'ihim wa lam yughassalu wa lam yusalla 'alayhim",
    translation:
      "The Prophet ﷺ used to gather two of the martyrs of Uhud together in one cloth, then ask, \"Which of them knew more of the Qur'an?\" When one of them was pointed out to him, he would place him first into the grave, and say, \"I am a witness over these on the Day of Resurrection.\" He ordered that they be buried in their blood, and they were not washed, nor was funeral prayer offered for them.",
    lessons: [
      'This hadith establishes that a martyr killed in battle against disbelievers is, according to the majority of scholars, buried as he is, without the ghusl otherwise required for the deceased, since his blood itself is treated as a mark of honor rather than something to be removed.',
      'Knowledge of the Qur\'an is shown here as a real, practical basis for honor even in death, with more of it earning a place placed first, deeper in the grave.',
      'Scholars note that this ruling applies specifically to those killed directly in battle against an enemy; a person considered a martyr in a broader sense (dying in an epidemic, in childbirth, or similarly) is still washed and prayed over normally, since that broader status is about the reward promised, not the outward burial procedure.',
    ],
  },
  {
    num: 49,
    chapter: 'purification',
    verified: false,
    title: 'Wudu Required After Eating Camel Meat',
    narrator: 'Jabir ibn Samurah',
    source: 'Muslim',
    arabic_text:
      'أَتَوَضَّأُ مِنْ لُحُومِ الْغَنَمِ؟ قَالَ: إِنْ شِئْتَ فَتَوَضَّأْ وَإِنْ شِئْتَ فَلَا تَوَضَّأْ. قَالَ: أَتَوَضَّأُ مِنْ لُحُومِ الْإِبِلِ؟ قَالَ: نَعَمْ فَتَوَضَّأْ مِنْ لُحُومِ الْإِبِلِ',
    transliteration:
      "A'tawadda'u min luhumil-ghanam? Qala: in shi'ta fatawadda' wa in shi'ta fala tatawadda'. Qala: a'tawadda'u min luhumil-ibil? Qala: na'am fatawadda' min luhumil-ibil",
    translation:
      "[A man asked the Prophet ﷺ:] Should I perform wudu after eating mutton? He said: If you wish, perform wudu, and if you wish, do not. He asked: Should I perform wudu after eating camel meat? He said: Yes, perform wudu after eating camel meat.",
    lessons: [
      'This hadith is the primary text some scholars (notably Imam Ahmad and Ishaq ibn Rahawayh, among the classical hadith scholars) rely on for the position that eating camel meat specifically breaks wudu, unlike other meat.',
      'This is a genuinely contested ruling: the majority of later jurists, including the Hanafi, Maliki, and Shafi\'i schools, hold that this ruling was later abrogated by a broader principle that food touched by fire does not break wudu, while Hanbali fiqh and some hadith scholars maintain the camel-meat-specific ruling stands.',
      'A companion in the same narration also asked about praying in the resting places of sheep versus camels, and was told the former was fine but the latter was not, a related but distinct ruling about the location of prayer rather than wudu itself.',
    ],
  },
  {
    num: 50,
    chapter: 'purification',
    verified: false,
    title: 'Bilal\'s Best Deed: Praying After Every Wudu',
    narrator: 'Abu Hurairah, describing Bilal',
    source: 'Bukhari & Muslim',
    arabic_text:
      'قَالَ لِبِلَالٍ عِنْدَ صَلَاةِ الْفَجْرِ: يَا بِلَالُ حَدِّثْنِي بِأَرْجَى عَمَلٍ عَمِلْتَهُ فِي الْإِسْلَامِ، فَإِنِّي سَمِعْتُ دَفَّ نَعْلَيْكَ بَيْنَ يَدَيَّ فِي الْجَنَّةِ. قَالَ: مَا عَمِلْتُ عَمَلًا أَرْجَى عِنْدِي أَنِّي لَمْ أَتَطَهَّرْ طُهُورًا فِي سَاعَةِ لَيْلٍ أَوْ نَهَارٍ إِلَّا صَلَّيْتُ بِذَلِكَ الطُّهُورِ مَا كُتِبَ لِي أَنْ أُصَلِّيَ',
    transliteration:
      "Qala liBilalin 'inda salatil-fajr: ya Bilalu haddithni bi'arja 'amalin 'amiltahu fil-Islam, fa'inni sami'tu daffa na'layka bayna yadayya fil-jannah. Qala: ma 'amiltu 'amalan arja 'indi anni lam atatahhar tuhuran fi sa'ati laylin aw naharin illa sallaytu bidhalikat-tuhuri ma kutiba li an usalli",
    translation:
      "The Prophet ﷺ said to Bilal at the time of the Fajr prayer: O Bilal, tell me of the deed you have done in Islam that you are most hopeful about, for I heard the sound of your footsteps ahead of me in Paradise. He said: I have not done any deed I am more hopeful about than this: I never purified myself at any hour of the night or day without praying with that purification as much as was written for me to pray.",
    lessons: [
      'This hadith shows that Bilal himself, when asked directly by the Prophet ﷺ to name his single most hopeful deed, chose a simple, private, repeatable habit rather than anything more visibly dramatic, despite his well-known public role as the caller to prayer.',
      'The practice described, praying voluntarily right after each wudu rather than only at the five obligatory times, is the basis for the recommended practice of praying two rak\'ahs after wudu discussed elsewhere in this collection.',
      'This hadith is frequently cited as an example of how a consistent, modest, private habit can carry more weight before Allah than a person might expect, since Bilal himself did not consider it a small thing.',
    ],
  },
  {
    num: 51,
    chapter: 'purification',
    verified: false,
    title: 'Using the Siwak Upon Waking at Night',
    narrator: 'Hudhayfah ibn al-Yaman',
    source: 'Bukhari & Muslim',
    arabic_text: 'كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا قَامَ مِنَ اللَّيْلِ يَشُوصُ فَاهُ بِالسِّوَاكِ',
    transliteration: "Kanan-Nabiyyu sallallahu 'alayhi wa sallam idha qama minal-layli yashusu fahu bis-siwak",
    translation:
      "Whenever the Prophet ﷺ got up at night, he would clean his mouth thoroughly with the siwak.",
    lessons: [
      'This hadith establishes waking from sleep, specifically, as one of the recommended times to use the siwak, alongside the general recommendation to use it before every prayer discussed earlier in this collection.',
      'The word used for cleaning here (yashusu) implies a genuinely thorough scrubbing, not a light touch, reflecting how seriously this small act of hygiene was treated even in the middle of the night.',
      'This connects to a separate hadith describing the siwak as cleansing for the mouth and pleasing to the Lord, tying an ordinary hygiene practice to spiritual merit rather than treating it as purely a matter of physical cleanliness.',
    ],
  },
  {
    num: 52,
    chapter: 'prayer',
    verified: false,
    title: 'Whoever Builds a Mosque for Allah',
    narrator: "'Uthman ibn 'Affan",
    source: 'Bukhari & Muslim',
    arabic_text: 'مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ فِي الْجَنَّةِ مِثْلَهُ',
    transliteration: "Man bana masjidan lillahi bana Allahu lahu fil-jannati mithlah",
    translation:
      "Whoever builds a mosque for Allah, Allah will build for him something like it in Paradise.",
    lessons: [
      'This hadith is a primary text encouraging the building and maintenance of mosques as an act of ongoing charity (sadaqah jariyah), with a reward described as continuing rather than a one-time transaction.',
      'Scholars generally understand the reward described here to be proportional to a person\'s actual contribution and sincerity, not limited to the single wealthy individual who funds an entire building, since a related narration specifically emphasizes sincerity and warns against building for the sake of being seen or praised.',
      'This hadith is commonly cited today by anyone organizing a mosque construction or renovation project, including for encouraging smaller individual contributions rather than only large lump-sum donations.',
    ],
  },
  {
    num: 53,
    chapter: 'prayer',
    verified: false,
    title: 'Prohibition of Spitting Toward the Qiblah in the Mosque',
    narrator: 'Abu Hurairah and Abu Sa\'eed al-Khudri',
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِذَا تَنَخَّمَ أَحَدُكُمْ فَلَا يَتَنَخَّمَنَّ قِبَلَ وَجْهِهِ وَلَا عَنْ يَمِينِهِ، وَلْيَبْصُقْ عَنْ يَسَارِهِ أَوْ تَحْتَ قَدَمِهِ الْيُسْرَى',
    transliteration:
      "Idha tanakhkhama ahadukum fala yatanakhkhamanna qibala wajhihi wa la 'an yaminih, wal-yabsuq 'an yasarihi aw tahta qadamihil-yusra",
    translation:
      "If any of you needs to spit, he should not spit toward the front of him, nor to his right, but should spit to his left or beneath his left foot.",
    lessons: [
      'This hadith was prompted by the Prophet ﷺ noticing dried sputum on the wall of the mosque in the direction of the qiblah, scraping it off himself with visible displeasure, before giving this general instruction.',
      'The reasoning given elsewhere for this ruling is that a person standing in prayer is, in a sense, in private conversation with his Lord, facing the qiblah, so spitting toward it during that state is treated as a mark of real disrespect.',
      'The Prophet ﷺ is also reported to have demonstrated a further courtesy in a related narration, spitting into a corner of his own garment and folding it over, as an alternative when spitting to the side or underfoot was not practical.',
    ],
  },
  {
    num: 54,
    chapter: 'prayer',
    verified: false,
    title: 'The Three Times Prayer Is Prohibited',
    narrator: "'Uqbah ibn 'Amir",
    source: 'Muslim',
    arabic_text:
      'ثَلَاثُ سَاعَاتٍ كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَنْهَانَا أَنْ نُصَلِّيَ فِيهِنَّ أَوْ أَنْ نَقْبُرَ فِيهِنَّ مَوْتَانَا: حِينَ تَطْلُعُ الشَّمْسُ بَازِغَةً حَتَّى تَرْتَفِعَ، وَحِينَ يَقُومُ قَائِمُ الظَّهِيرَةِ حَتَّى تَمِيلَ الشَّمْسُ، وَحِينَ تَضَيَّفُ الشَّمْسُ لِلْغُرُوبِ حَتَّى تَغْرُبَ',
    transliteration:
      "Thalathu sa'atin kana Rasulullahi sallallahu 'alayhi wa sallam yanhana an nusalliya fihinna aw an naqbura fihinna mawtana: hina tatlu'ush-shamsu bazighatan hatta tartafi', wa hina yaqumu qa'imuz-zahirati hatta tamilash-shams, wa hina tadayyafush-shamsu lil-ghurubi hatta taghrub",
    translation:
      "There were three times at which the Messenger of Allah ﷺ used to forbid us to pray, or to bury our dead: when the sun is beginning to rise until it has fully risen, when the sun is at its height at midday until it passes the meridian, and when the sun is close to setting until it has fully set.",
    lessons: [
      'This hadith establishes three specific short windows during the day when voluntary prayer, and burial, are discouraged, distinct from the broader (and more debated) discouragement of prayer generally after Fajr until sunrise and after Asr until sunset.',
      'One reasoning scholars give for these three specific windows is that they were times associated with sun-worship among some pre-Islamic communities, so avoiding prayer precisely then helps avoid any resemblance to that practice.',
      'The mention of burial alongside prayer in this hadith is generally understood to specifically mean the funeral prayer, not the physical act of burial itself, which explains why it is discussed here rather than purely as a funerals-chapter ruling.',
    ],
  },
  {
    num: 55,
    chapter: 'prayer',
    verified: false,
    title: 'Two Rak\'ahs Before Sitting in the Mosque',
    narrator: 'Abu Qatadah',
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا دَخَلَ أَحَدُكُمُ الْمَسْجِدَ فَلْيَرْكَعْ رَكْعَتَيْنِ قَبْلَ أَنْ يَجْلِسَ',
    transliteration: "Idha dakhala ahadukumul-masjida falyarka' rak'atayni qabla an yajlis",
    translation:
      "When any of you enters the mosque, he should pray two rak'ahs before sitting down.",
    lessons: [
      'This hadith establishes the recommended practice known as tahiyyat al-masjid, the "greeting of the mosque", performed by praying two short rak\'ahs upon entering rather than sitting down immediately.',
      'Most scholars treat this as a strongly confirmed sunnah rather than a strict obligation, though a minority have argued for a stricter reading of the wording; a person who enters and immediately joins an already-standing congregational prayer is generally considered to have fulfilled it through that prayer.',
      'This is one of several short, situational prayers recommended in the Sunnah, tied to a specific moment or action, rather than to a specific time of day the way the five daily prayers are.',
    ],
  },
  {
    num: 56,
    chapter: 'prayer',
    verified: false,
    title: 'A Reward Prepared in Paradise for Every Trip to the Mosque',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'مَنْ غَدَا إِلَى الْمَسْجِدِ أَوْ رَاحَ أَعَدَّ اللَّهُ لَهُ فِي الْجَنَّةِ نُزُلًا كُلَّمَا غَدَا أَوْ رَاحَ',
    transliteration:
      "Man ghada ilal-masjidi aw raha a'addallahu lahu fil-jannati nuzulan kullama ghada aw rah",
    translation:
      "Whoever goes out to the mosque in the morning or the evening, Allah prepares for him a resting place in Paradise every time he goes out, morning or evening.",
    lessons: [
      'The word used for the reward here, "nuzul", specifically refers to the provisions and welcome prepared for an arriving guest, giving the image of Allah personally preparing something for a person each time they make this trip.',
      'This hadith is understood by many scholars to apply broadly to going to the mosque for any legitimate purpose, prayer, seeking knowledge, or i\'tikaf, not only for the five obligatory prayers specifically.',
      'The repetition built into the wording, "every time he goes out, morning or evening", emphasizes that this is not a one-time reward but one renewed with each trip, encouraging consistency over a single notable visit.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 57–66: the fourth requested batch of 10, same sourcing
  // standard as every batch before. Every hadith below was located
  // via targeted search against sunnah.com or equivalent, not
  // drafted from memory, and cross-checked to Bukhari and/or
  // Muslim. This batch is the first to populate the 'zakah',
  // 'fasting', and 'hajj' chapters, previously structural
  // placeholders with no hadith content, following the same
  // reasoning used for 'funerals' in the prior batch: real,
  // well-sourced, thematically appropriate hadith were found for
  // them rather than stretching 'purification' or 'prayer' further.
  // Still verified: false throughout, and `num` sequence here is
  // not a claim about this collection's real internal ordering.
  // ------------------------------------------------------------
  {
    num: 57,
    chapter: 'zakah',
    verified: false,
    title: 'Islam Is Built on Five',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ',
    transliteration:
      "Buniyal-Islamu 'ala khams: shahadati an la ilaha illallahu wa anna Muhammadan 'abduhu wa Rasuluh, wa iqamis-salah, wa ita'iz-zakah, wa hajjil-bayt, wa sawmi Ramadan",
    translation:
      "Islam is built on five: testifying that there is no god but Allah and that Muhammad is His servant and messenger, establishing prayer, giving zakah, pilgrimage to the House, and fasting Ramadan.",
    lessons: [
      'This hadith is one of the most foundational in the entire tradition, giving the structural outline that the rest of the fiqh literature, including this collection, elaborates on chapter by chapter.',
      'Zakah is placed third, immediately after the twin declaration of faith and prayer, reflecting how central it is treated within the basic structure of Islamic practice rather than as a secondary or optional matter.',
      'Scholars sometimes divide these five into categories: verbal and heartfelt (the testimony), physical (prayer and fasting), financial (zakah), and both physical and financial combined (Hajj), a framework this hadith is commonly used to introduce.',
    ],
  },
  {
    num: 58,
    chapter: 'zakah',
    verified: false,
    title: 'The Minimum Threshold for Zakah',
    narrator: "Abu Sa'eed al-Khudri",
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَيْسَ فِيمَا دُونَ خَمْسَةِ أَوْسُقٍ مِنَ التَّمْرِ صَدَقَةٌ، وَلَيْسَ فِيمَا دُونَ خَمْسِ أَوَاقٍ مِنَ الْوَرِقِ صَدَقَةٌ، وَلَيْسَ فِيمَا دُونَ خَمْسِ ذَوْدٍ مِنَ الْإِبِلِ صَدَقَةٌ',
    transliteration:
      "Laysa fima duna khamsati awsuqin minat-tamri sadaqah, wa laysa fima duna khamsi awaqin minal-wariqi sadaqah, wa laysa fima duna khamsi dhawdin minal-ibili sadaqah",
    translation:
      "There is no zakah on less than five awsuq of dates, there is no zakah on less than five awaq of silver, and there is no zakah on less than five head of camels.",
    lessons: [
      'This hadith establishes the general principle of nisab, a minimum threshold below which a given type of wealth does not become liable for zakah at all, rather than zakah being owed on any amount however small.',
      'Three separate categories are addressed here in one hadith, dates or grain (measured by the wasq), silver (measured by the awaq), and camels (counted by head), each with its own threshold, since zakah calculation differs by the type of wealth involved.',
      'This is one of the primary texts scholars draw on when working out the specific nisab figures for other categories of zakatable wealth by analogy, since the underlying principle, a wealth-specific minimum threshold, is established here rather than argued from a single blanket rule.',
    ],
  },
  {
    num: 59,
    chapter: 'fasting',
    verified: false,
    title: 'The Gates of Heaven Are Opened in Ramadan',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا دَخَلَ شَهْرُ رَمَضَانَ فُتِّحَتْ أَبْوَابُ السَّمَاءِ، وَغُلِّقَتْ أَبْوَابُ جَهَنَّمَ، وَسُلْسِلَتِ الشَّيَاطِينُ',
    transliteration:
      "Idha dakhala shahru Ramadana futtihat abwabus-sama', wa ghulliqat abwabu Jahannam, wa sulsilatish-shayatin",
    translation:
      "When the month of Ramadan begins, the gates of heaven are opened, the gates of Hell are closed, and the devils are chained.",
    lessons: [
      'Scholars generally understand this description as pointing to a real change in spiritual conditions during Ramadan, obedience becomes easier and temptation weaker, rather than describing something a person can observe directly with their senses.',
      'This hadith is commonly cited as encouragement to take advantage of Ramadan specifically for increased worship, given the more favorable spiritual conditions it describes.',
      'A related version adds that a caller announces during the month, calling those who seek good to come forward and those inclined to evil to hold back, extending the same theme of Ramadan as an especially opportune time.',
    ],
  },
  {
    num: 60,
    chapter: 'fasting',
    verified: false,
    title: 'Fasting With Faith and Sincerity Erases Past Sins',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
    transliteration: "Man sama Ramadana imanan wahtisaban ghufira lahu ma taqaddama min dhanbih",
    translation:
      "Whoever fasts Ramadan out of faith and sincerely seeking reward, his previous sins will be forgiven.",
    lessons: [
      'The two conditions named here, faith and genuine seeking of reward rather than fasting merely out of habit, social pressure, or health reasons, are what scholars generally treat as the actual condition for this reward, not the physical act of fasting on its own.',
      'A closely related hadith applies the identical wording and the identical two conditions to standing in prayer during the Night of Qadr specifically, and the two are often taught together as a pair.',
      'This hadith is commonly cited as a reminder that intention and sincerity matter throughout an act of worship, not only at its very start, since "احتسابا" implies an ongoing state of seeking reward from Allah rather than a one-time intention made and then forgotten.',
    ],
  },
  {
    num: 61,
    chapter: 'fasting',
    verified: false,
    title: 'Fasting Is a Shield, and the Two Joys of the Fasting Person',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'قَالَ اللَّهُ: كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلَّا الصِّيَامَ، فَإِنَّهُ لِي، وَأَنَا أَجْزِي بِهِ. وَالصِّيَامُ جُنَّةٌ، وَإِذَا كَانَ يَوْمُ صَوْمِ أَحَدِكُمْ فَلَا يَرْفُثْ وَلَا يَصْخَبْ، فَإِنْ سَابَّهُ أَحَدٌ أَوْ قَاتَلَهُ فَلْيَقُلْ إِنِّي امْرُؤٌ صَائِمٌ. وَالَّذِي نَفْسُ مُحَمَّدٍ بِيَدِهِ لَخُلُوفُ فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ، لِلصَّائِمِ فَرْحَتَانِ يَفْرَحُهُمَا: إِذَا أَفْطَرَ فَرِحَ، وَإِذَا لَقِيَ رَبَّهُ فَرِحَ بِصَوْمِهِ',
    transliteration:
      "Qalallahu: kullu 'amali ibni Adama lahu illas-siyam, fa'innahu li, wa ana ajzi bih. Was-siyamu junnah, wa idha kana yawmu sawmi ahadikum fala yarfuth wa la yasab, fa'in sabbahu ahadun aw qatalahu falyaqul inni imru'un sa'im. Walladhi nafsu Muhammadin biyadihi lakhulufu famis-sa'imi atyabu 'indallahi min rihil-misk, lis-sa'imi farhatani yafrahuhuma: idha aftara fariha, wa idha laqiya rabbahu fariha bisawmih",
    translation:
      "Allah said: Every deed of the son of Adam is for him, except fasting, for it is Mine, and I will reward it. Fasting is a shield. When one of you is fasting, he should not speak obscenely nor raise his voice, and if someone insults or fights him, let him say: I am fasting. By the One in Whose hand is Muhammad's soul, the change in the breath of a fasting person is more pleasant to Allah than the scent of musk. The fasting person has two joys: he is joyful when he breaks his fast, and he is joyful when he meets his Lord because of his fast.",
    lessons: [
      'This hadith describes fasting as a category of worship in a class of its own, with Allah stating He personally reserves its reward, distinct from the general rule that good deeds are multiplied a set number of times.',
      'The image of "a shield" is understood both literally, guarding a person from falling into sin during the fast, and in a further sense discussed elsewhere, as a protection from the Fire on the Day of Judgment.',
      'The specific instruction to respond to provocation with words rather than escalating, simply stating "I am fasting" instead of arguing back, is often cited as a practical model for self-restraint that extends well beyond the specific context of fasting.',
    ],
  },
  {
    num: 62,
    chapter: 'fasting',
    verified: false,
    title: 'The Blessing of the Pre-Dawn Meal',
    narrator: 'Anas ibn Malik',
    source: 'Bukhari & Muslim',
    arabic_text: 'تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً',
    transliteration: "Tasahharu fa'inna fis-sahuri barakah",
    translation:
      "Eat the pre-dawn meal (suhur), for indeed there is blessing in it.",
    lessons: [
      'This hadith establishes suhur as recommended rather than obligatory, a distinction reflected directly in how this hadith is classically titled in some collections, "the blessing of suhur, without it being required."',
      'Scholars describe the blessing here as more than nutritional, it includes following the Sunnah itself, gaining strength for the day\'s fast, and the chance to wake during the last part of the night for personal supplication before dawn.',
      'A related hadith encourages delaying suhur close to dawn rather than eating it early in the night, since eating it near the start of the fasting window is part of what gives the practice its described benefit.',
    ],
  },
  {
    num: 63,
    chapter: 'fasting',
    verified: false,
    title: 'Eating or Drinking Forgetfully While Fasting',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا نَسِيَ فَأَكَلَ وَشَرِبَ فَلْيُتِمَّ صَوْمَهُ، فَإِنَّمَا أَطْعَمَهُ اللَّهُ وَسَقَاهُ',
    transliteration: "Idha nasiya fa'akala wa shariba falyutimma sawmahu, fa'innama at'amahullahu wa saqah",
    translation:
      "If someone forgets and eats or drinks, he should complete his fast, for it was Allah who fed him and gave him drink.",
    lessons: [
      'This hadith establishes that a fast is not broken by a genuinely forgetful act of eating or drinking, since the fasting person did not intend to break the fast, a general principle in Islamic law that unintentional acts are treated with leniency.',
      'The phrasing "it was Allah who fed him and gave him drink" reframes what might feel like a personal failure as something outside the person\'s control and not held against them, rather than a lapse requiring guilt or a makeup day.',
      'This is a practical, frequently needed ruling, and scholars generally extend the same leniency to other genuinely forgetful acts that would otherwise break the fast, not only eating and drinking specifically.',
    ],
  },
  {
    num: 64,
    chapter: 'hajj',
    verified: false,
    title: 'Hajj Without Obscenity or Sin Returns One Like a Newborn',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ',
    transliteration: "Man hajja lillahi falam yarfuth wa lam yafsuq raja'a kayawmi waladathu ummuh",
    translation:
      "Whoever performs Hajj for Allah, and does not engage in obscenity (rafath) or sin, returns as he was on the day his mother bore him.",
    lessons: [
      'Scholars generally explain "rafath" here as covering both sexual relations during ihram and obscene or indecent speech more broadly, drawing on the same term as it appears in the Qur\'anic verses on Hajj (2:197).',
      'The comparison to the day one was born describes a state of being entirely free of sin, one of the most far-reaching descriptions of forgiveness attached to any single act of worship in the hadith literature.',
      'This hadith is generally understood by scholars to apply to both an obligatory and a voluntary Hajj, since the wording does not distinguish between the two.',
    ],
  },
  {
    num: 65,
    chapter: 'hajj',
    verified: false,
    title: "'Umrah to 'Umrah, and the Reward of an Accepted Hajj",
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ',
    transliteration:
      "Al-'umratu ilal-'umrati kaffaratun lima baynahuma, wal-hajjul-mabruru laysa lahu jaza'un illal-jannah",
    translation:
      "One 'Umrah to the next is an expiation for whatever occurred between them, and an accepted Hajj (Hajj Mabrur) has no reward except Paradise.",
    lessons: [
      'This hadith gives two distinct statements: repeated Umrah is described as a recurring means of expiating minor sins committed in the time between them, while an accepted Hajj is given the singular, unmatched reward of Paradise itself.',
      'Scholars discuss at length what specifically makes a Hajj "mabrur" (accepted), generally pointing to sincerity of intention, lawful spending, and avoiding sin during the pilgrimage, drawing on the previous hadith in this collection about returning free of sin.',
      'This hadith is one of the most frequently cited texts encouraging repeated Umrah specifically, distinct from Hajj, as an accessible, repeatable act of worship throughout a person\'s life.',
    ],
  },
  {
    num: 66,
    chapter: 'hajj',
    verified: false,
    title: 'The Best Jihad for Women Is an Accepted Hajj',
    narrator: "'Aishah",
    source: 'Bukhari',
    arabic_text: 'قُلْتُ يَا رَسُولَ اللَّهِ نَرَى الْجِهَادَ أَفْضَلَ الْعَمَلِ أَفَلَا نُجَاهِدُ؟ قَالَ: لَكِنَّ أَفْضَلَ الْجِهَادِ حَجٌّ مَبْرُورٌ',
    transliteration:
      "Qultu ya Rasulallahi nara al-jihada afdalal-'amali afala nujahid? Qala: lakinna afdalal-jihadi hajjun mabrur",
    translation:
      "I said: O Messenger of Allah, we regard jihad as the best of deeds, should we not join it? He said: But the best jihad for you is an accepted Hajj.",
    lessons: [
      '\'Aishah reports that upon hearing this, she resolved never to miss performing Hajj again, a detail that shows how directly this teaching shaped her own practice, not merely something she reported secondhand.',
      'This hadith does not state that women are prohibited from other forms of contribution, it specifically answers a question about armed jihad, redirecting toward an available, non-military avenue for the same category of spiritual striving and reward.',
      'This hadith is frequently cited alongside the broader ranking hadith in which the Prophet ﷺ lists belief, jihad, and an accepted Hajj as the three best deeds in that order when asked directly, showing Hajj Mabrur holds real weight in its own right, not only as a substitute offered to women.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 67–76: the fifth requested batch of 10, same sourcing
  // standard as every batch before. Every hadith below was located
  // via targeted search against sunnah.com or equivalent, not
  // drafted from memory, and cross-checked to Bukhari and/or
  // Muslim. This batch is the first to add content to the
  // 'transactions', 'marriage', 'oaths_and_vows',
  // 'judgments_and_testimony', 'jihad', 'hunting_and_slaughter',
  // 'food_and_drink', and 'virtues_and_manners' chapters, meaning
  // every chapter listed in UMDAT_AL_AHKAM_CHAPTERS now has at
  // least one real, sourced hadith. 'divorce' remains the one
  // chapter still without an entry after this batch; a genuinely
  // Bukhari/Muslim-only hadith specific to divorce (rather than
  // marriage generally) was not found with confidence in this
  // pass. Still verified: false throughout, and `num` sequence
  // here is not a claim about this collection's real ordering.
  // ------------------------------------------------------------
  {
    num: 67,
    chapter: 'transactions',
    verified: false,
    title: 'Each Party Has the Right to Cancel Until They Separate',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'إِنَّ الْمُتَبَايِعَيْنِ بِالْخِيَارِ فِي بَيْعِهِمَا مَا لَمْ يَتَفَرَّقَا، أَوْ يَكُونَ الْبَيْعُ خِيَارًا',
    transliteration:
      "Innal-mutabayi'ayni bil-khiyari fi bay'ihima ma lam yatafarraqa, aw yakunal-bay'u khiyara",
    translation:
      "The two parties to a transaction each have the option (to cancel it) as long as they have not separated, unless the sale itself was made with a stipulated option.",
    lessons: [
      'This hadith is the primary text for what fiqh calls khiyar al-majlis, the option of the meeting or session, the right either party has to back out of a sale for as long as they remain together at the place the deal was made.',
      'Ibn \'Umar\'s own reported practice illustrates the ruling in action: he would deliberately walk away quickly from a seller right after buying something he particularly liked, to close off the window in which either side could still cancel.',
      'The exception named at the end, "unless the sale itself was made with a stipulated option," refers to a separate arrangement (khiyar al-shart) where one or both parties agree in advance to a longer window for reconsidering the sale, distinct from this default rule tied to physical separation.',
    ],
  },
  {
    num: 68,
    chapter: 'transactions',
    verified: false,
    title: 'Whoever Deceives Is Not One of Us',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text:
      'مَرَّ عَلَى صُبْرَةِ طَعَامٍ فَأَدْخَلَ يَدَهُ فِيهَا فَنَالَتْ أَصَابِعُهُ بَلَلًا فَقَالَ: مَا هَذَا يَا صَاحِبَ الطَّعَامِ؟ قَالَ: أَصَابَتْهُ السَّمَاءُ يَا رَسُولَ اللَّهِ. قَالَ: أَفَلَا جَعَلْتَهُ فَوْقَ الطَّعَامِ كَيْ يَرَاهُ النَّاسُ؟ مَنْ غَشَّ فَلَيْسَ مِنِّي',
    transliteration:
      "Marra 'ala subrati ta'amin fa'adkhala yadahu fiha fanalat asabi'uhu balala faqala: ma hadha ya sahibat-ta'am? Qala: asabathus-sama'u ya Rasulallah. Qala: afala ja'altahu fawqat-ta'ami kay yarahun-nas? Man ghashsha falaysa minni",
    translation:
      "The Messenger of Allah ﷺ passed by a pile of food, put his hand into it, and his fingers felt dampness. He said: What is this, seller of the food? The man said: Rain fell on it, O Messenger of Allah. He said: Why did you not put it on top of the food so people could see it? Whoever deceives is not of me.",
    lessons: [
      'This hadith establishes a general obligation of disclosure in a transaction, hiding a defect from a buyer, even by simply not revealing it rather than actively lying, is treated as a form of deception.',
      'The Prophet\'s ﷺ method here, discovering the issue through direct physical inspection rather than taking the seller\'s word, models a kind of practical due diligence alongside the ethical instruction that follows it.',
      'The phrase "is not of me" is understood by scholars, as with similar phrases elsewhere in the hadith literature, as a strong disavowal of the described behavior as inconsistent with following the Prophet\'s ﷺ example, not a formal declaration that the person has left Islam.',
    ],
  },
  {
    num: 69,
    chapter: 'marriage',
    verified: false,
    title: 'A Woman Is Married for Four Things',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَلِجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ',
    transliteration:
      "Tunkahul-mar'atu li'arba': limaliha, wa lihasabiha, wa lijamaliha, wa lidiniha, fazfar bidhatid-dini taribat yadak",
    translation:
      "A woman is married for four things: her wealth, her lineage, her beauty, and her religion. So seek out the one who has religious commitment, may your hands be blessed.",
    lessons: [
      'This hadith names four common, real reasons people are drawn to a prospective spouse, and does not dismiss any of them as illegitimate considerations, it simply ranks religious commitment as the one that should ultimately decide the matter.',
      'The closing phrase, "taribat yadak", literally "may your hands be rubbed with dust", is an old Arabic idiom of encouragement rather than a curse, roughly equivalent to "go and prosper," and is generally translated accordingly rather than literally.',
      'This hadith is commonly cited in discussions of marriage compatibility as a caution against letting wealth, lineage, or appearance alone drive the decision, without suggesting those other factors are irrelevant or wrong to also want.',
    ],
  },
  {
    num: 70,
    chapter: 'oaths_and_vows',
    verified: false,
    title: 'Doing the Better Thing and Making Expiation for an Oath',
    narrator: "'Abdur-Rahman ibn Samurah",
    source: 'Bukhari & Muslim',
    arabic_text:
      'وَإِذَا حَلَفْتَ عَلَى يَمِينٍ، فَرَأَيْتَ غَيْرَهَا خَيْرًا مِنْهَا، فَأْتِ الَّذِي هُوَ خَيْرٌ، وَكَفِّرْ عَنْ يَمِينِكَ',
    transliteration: "Wa idha halafta 'ala yaminin, fara'ayta ghayraha khayran minha, fa'til-ladhi huwa khayr, wa kaffir 'an yaminik",
    translation:
      "And if you swear an oath to do something, and then see that something else is better than it, do the thing that is better, and make expiation for your oath.",
    lessons: [
      'This hadith establishes that an oath to do something permissible is not treated as absolutely binding when a genuinely better course of action becomes apparent afterward, the better action is taken, and the oath is separately atoned for rather than simply broken without consequence.',
      'This is one of the primary texts underlying the fiqh of kaffarat al-yamin, the expiation owed for breaking an oath, which the Qur\'an separately details as feeding or clothing ten needy people, freeing a slave, or, if unable, fasting three days.',
      'This instruction was given to \'Abdur-Rahman ibn Samurah alongside separate advice about not seeking positions of authority, and the two pieces of guidance are preserved together in the same narration, though they address distinct topics.',
    ],
  },
  {
    num: 71,
    chapter: 'oaths_and_vows',
    verified: false,
    title: 'Do Not Swear by Your Fathers',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'إِنَّ اللَّهَ يَنْهَاكُمْ أَنْ تَحْلِفُوا بِآبَائِكُمْ، مَنْ كَانَ حَالِفًا فَلْيَحْلِفْ بِاللَّهِ أَوْ لِيَصْمُتْ',
    transliteration: "Innallaha yanhakum an tahlifu bi'aba'ikum, man kana halifan falyahlif billahi aw liyasmut",
    translation:
      "Allah forbids you from swearing by your fathers. Whoever must swear, let him swear by Allah, or else remain silent.",
    lessons: [
      'This hadith was prompted by the Prophet ﷺ overhearing \'Umar ibn al-Khattab swearing by his own father while traveling, a common pre-Islamic Arab custom the Prophet ﷺ corrected directly and immediately.',
      '\'Umar\'s own later testimony, that he never again swore by his father, either as his own oath or in repeating someone else\'s, shows how seriously this specific correction was taken to heart by the very companion it was addressed to.',
      'Scholars generally treat swearing by anything other than Allah, not only one\'s father, as falling under this same prohibition, since the underlying principle is that an oath\'s seriousness is tied specifically to Allah\'s name.',
    ],
  },
  {
    num: 72,
    chapter: 'judgments_and_testimony',
    verified: false,
    title: 'The Oath Is Upon the One Who Denies the Claim',
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Muslim',
    arabic_text: 'لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ لَادَّعَى نَاسٌ دِمَاءَ رِجَالٍ وَأَمْوَالَهُمْ، وَلَكِنِ الْيَمِينُ عَلَى الْمُدَّعَى عَلَيْهِ',
    transliteration:
      "Law yu'tan-nasu bida'wahum lada'a nasun dima'a rijalin wa amwalahum, wa lakinil-yaminu 'alal-mudda'a 'alayh",
    translation:
      "If people were given whatever they claimed, some would claim the lives and property of others. But the oath is upon the one who denies the claim.",
    lessons: [
      'This hadith establishes a foundational principle of Islamic judicial procedure: a bare claim, without more, is not sufficient grounds for a judge to rule in the claimant\'s favor, since anyone could otherwise assert anything against anyone else.',
      'The practical procedure this establishes places the burden of proof on whoever is making the claim, while the person being accused can generally clear themselves with an oath if the claimant cannot produce clear evidence.',
      'Ibn Daqiq al-\'Id, a later scholar, described this hadith as one of the single most important reference points in the entire body of Islamic judicial rulings, since nearly every dispute between two parties eventually comes back to this basic allocation of proof and oath.',
    ],
  },
  {
    num: 73,
    chapter: 'jihad',
    verified: false,
    title: 'Paradise Is Under the Shades of Swords',
    narrator: "'Abdullah ibn Abi Awfa",
    source: 'Bukhari',
    arabic_text: 'وَاعْلَمُوا أَنَّ الْجَنَّةَ تَحْتَ ظِلَالِ السُّيُوفِ',
    transliteration: "Wa'lamu annal-jannata tahta zilalis-suyuf",
    translation:
      "And know that Paradise is under the shades of swords.",
    lessons: [
      'This statement was made by the Prophet ﷺ in the middle of a battle, standing among the people and encouraging patience and steadfastness rather than eagerness to seek out a fight, the fuller narration around it begins with an instruction not to wish to meet the enemy but to remain patient if the encounter does happen.',
      'The image is generally understood as pointing to the real risk and hardship of standing firm in armed defense specifically, framing that specific hardship as spiritually significant, rather than being a general statement about weapons or violence.',
      'Scholars are clear that this hadith describes the reward tied to a specific, legitimate context, defensive fighting under legitimate authority, and is not treated as a general endorsement of violence or of taking up arms outside that context.',
    ],
  },
  {
    num: 74,
    chapter: 'hunting_and_slaughter',
    verified: false,
    title: 'Excellence Even in Slaughter',
    narrator: 'Shaddad ibn Aws',
    source: 'Muslim',
    arabic_text:
      'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذَّبْحَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ فَلْيُرِحْ ذَبِيحَتَهُ',
    transliteration:
      "Innallaha kataba al-ihsana 'ala kulli shay', fa'idha qataltum fa'ahsinul-qitlah, wa idha dhabahtum fa'ahsinudh-dhabh, wal-yuhidd ahadukum shafratahu falyurih dhabihatah",
    translation:
      "Allah has prescribed excellence in everything. So when you kill, kill well, and when you slaughter, slaughter well. Let each of you sharpen his blade and put his animal at ease.",
    lessons: [
      'This hadith establishes ihsan, doing something in the best possible way, as a general principle Allah has attached to every action, applied here specifically to two of the most consequential acts a person can perform: taking a life through slaughter or through lawful killing.',
      'The specific, practical instruction to sharpen the blade beforehand is a direct, concrete application of the broader principle, minimizing an animal\'s suffering is not treated as a separate act of kindness layered on top of slaughter, it is what doing the slaughter itself well actually requires.',
      'This hadith is one of the primary texts scholars cite for the broader Islamic teaching on kindness toward animals, including at the exact moment of lawful slaughter, where cruelty might otherwise be assumed unavoidable.',
    ],
  },
  {
    num: 75,
    chapter: 'food_and_drink',
    verified: false,
    title: "Say Bismillah, Eat With Your Right Hand, Eat From What Is Nearest",
    narrator: "'Umar ibn Abi Salamah",
    source: 'Bukhari & Muslim',
    arabic_text: 'يَا غُلَامُ سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ',
    transliteration: "Ya ghulamu sammillaha, wa kul biyaminik, wa kul mimma yalik",
    translation:
      "O young man, say Allah's name, eat with your right hand, and eat from what is nearest to you.",
    lessons: [
      '\'Umar ibn Abi Salamah, the narrator, reports this as personal, direct correction given to him as a young boy whose hand kept wandering across a shared dish, and he adds that this became his lasting practice from that point on, a small, human detail that shows how directly he took the instruction.',
      'This hadith combines three separate but related pieces of everyday etiquette in a single short instruction: naming Allah before eating, using the right hand specifically, and eating from the section of a shared dish nearest to oneself rather than reaching across it.',
      'This hadith is commonly taught to children specifically, given both its content and the fact that it was originally addressed to a child, making it a natural, memorable starting point for teaching basic table manners rooted in the Sunnah.',
    ],
  },
  {
    num: 76,
    chapter: 'virtues_and_manners',
    verified: false,
    title: 'Loving for Your Brother What You Love for Yourself',
    narrator: 'Anas ibn Malik',
    source: 'Bukhari & Muslim',
    arabic_text: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    transliteration: "La yu'minu ahadukum hatta yuhibba li'akhihi ma yuhibbu linafsih",
    translation:
      "None of you truly believes until he loves for his brother what he loves for himself.",
    lessons: [
      'This hadith is one of the most widely quoted in the entire hadith literature, and is frequently cited as a concise summary of the ethical core of how a believer is meant to relate to other people.',
      'A related, fuller version of this same narration adds that this applies to "his brother, or he said, his neighbor", extending the same standard beyond only close relations to the wider circle of people around a person.',
      'The word used here, "believes" (يؤمن), functioning as it does elsewhere in comparable hadith, is generally understood by scholars to describe complete or perfected faith rather than stripping someone who falls short of this standard of faith entirely, similar in structure to other hadith that use strong language to emphasize the seriousness of a given trait without making it a strict condition for being a believer at all.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 77–83: a sixth batch, 7 of a requested 20. Same
  // sourcing standard as every prior batch. Reaching these 7 with
  // real diligence took over 30 targeted searches in this pass
  // alone, several candidate hadith turned up during research that
  // were NOT used because they came back Sunan-only (Tirmidhi, Abu
  // Dawud, Ibn Majah) rather than Bukhari/Muslim, consistent with
  // this file's stated scope (see the "do not sell what you do not
  // possess" hadith, deliberately excluded for this reason). The
  // remaining 13 of the requested 20 were not added in this pass.
  // Entry 77 is the first, and so far only, entry in the 'divorce'
  // chapter, closing the last chapter-coverage gap noted in the
  // previous batch's header. Entries 78 and 79 are excerpted from
  // longer narrative hadith (a multi-part marriage story and a
  // longer riba account); the excerpt is the core ruling statement,
  // not the full narration, consistent with how earlier entries in
  // this file (e.g. #4) trim longer hadith to a core statement.
  // Still verified: false throughout.
  // ------------------------------------------------------------
  {
    num: 77,
    chapter: 'divorce',
    verified: false,
    title: 'Divorcing a Wife While She Is Menstruating',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'مُرْهُ فَلْيُرَاجِعْهَا، ثُمَّ لِيُمْسِكْهَا حَتَّى تَطْهُرَ، ثُمَّ تَحِيضَ، ثُمَّ تَطْهُرَ، ثُمَّ إِنْ شَاءَ أَمْسَكَ بَعْدُ وَإِنْ شَاءَ طَلَّقَ قَبْلَ أَنْ يَمَسَّ، فَتِلْكَ الْعِدَّةُ الَّتِي أَمَرَ اللَّهُ أَنْ تُطَلَّقَ لَهَا النِّسَاءُ',
    transliteration:
      "Murhu falyuraji'ha, thumma liyumsikha hatta tathura, thumma tahida, thumma tathura, thumma in sha'a amsaka ba'du wa in sha'a tallaqa qabla an yamassa, fatilkal-'iddatul-lati amarallahu an tutallaqa laha an-nisa'",
    translation:
      "Tell him to take her back, then keep her until she becomes pure, then menstruates again and becomes pure again. Then, if he wishes, he may keep her, and if he wishes, he may divorce her before touching her (having relations with her). That is the waiting period Allah has commanded for divorcing women.",
    lessons: [
      'This hadith responds to a real case: Ibn \'Umar had divorced his wife while she was menstruating, and \'Umar ibn al-Khattab, his father, asked the Prophet ﷺ about it on his behalf, making this a direct, applied ruling rather than an abstract statement.',
      'This hadith is the primary text establishing that divorcing a wife during her menstrual period (or during a period of purity in which intercourse has occurred) is contrary to the Sunnah, the correct timing is a period of purity in which the couple has not had relations.',
      'Scholars differ on whether a divorce issued at the wrong time (as Ibn \'Umar\'s was) is still legally counted, Ibn \'Umar\'s own later testimony that it was counted as one valid divorce is the position most classical schools rely on, alongside a minority view associated with Ibn Taymiyyah and Ibn Hazm that such a divorce does not count at all.',
    ],
  },
  {
    num: 78,
    chapter: 'marriage',
    verified: false,
    title: 'Marrying for Even the Value of an Iron Ring',
    narrator: "Sahl ibn Sa'd",
    source: 'Bukhari & Muslim',
    arabic_text: 'انْظُرْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ',
    transliteration: "Unzur wa law khataman min hadid",
    translation:
      "Look, even if it is only an iron ring [that you can offer as a dowry].",
    lessons: [
      'This short instruction comes from a longer, well-known narration: a woman offered herself in marriage to the Prophet ﷺ, and when he did not respond, a companion asked to marry her instead, but had nothing to offer as a dowry (mahr), leading to this exchange.',
      'When the man could not find even an iron ring, the Prophet ﷺ ultimately married the woman to him in exchange for teaching her the portions of the Qur\'an he had memorized, showing that a dowry does not need to be valuable in a monetary sense at all, only genuinely offered.',
      'This hadith is commonly cited as evidence against treating financial hardship as an automatic barrier to marriage, and as one of several texts scholars draw on when discussing non-monetary forms a mahr can validly take.',
    ],
  },
  {
    num: 79,
    chapter: 'transactions',
    verified: false,
    title: 'Riba: Exchanging Like for Like, Hand to Hand',
    narrator: "'Ubadah ibn as-Samit",
    source: 'Muslim',
    arabic_text:
      'إِنِّي سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَنْهَى عَنْ بَيْعِ الذَّهَبِ بِالذَّهَبِ، وَالْفِضَّةِ بِالْفِضَّةِ، وَالْبُرِّ بِالْبُرِّ، وَالشَّعِيرِ بِالشَّعِيرِ، وَالتَّمْرِ بِالتَّمْرِ، وَالْمِلْحِ بِالْمِلْحِ، إِلَّا سَوَاءً بِسَوَاءٍ، عَيْنًا بِعَيْنٍ، فَمَنْ زَادَ أَوِ ازْدَادَ فَقَدْ أَرْبَى',
    transliteration:
      "Inni sami'tu Rasulallahi sallallahu 'alayhi wa sallam yanha 'an bay'idh-dhahabi bidh-dhahab, wal-fiddati bil-fiddah, wal-burri bil-burr, wash-sha'iri bish-sha'ir, wat-tamri bit-tamr, wal-milhi bil-milh, illa sawa'an bisawa', 'aynan bi'ayn, faman zada awizdada faqad arba",
    translation:
      "I heard the Messenger of Allah ﷺ forbidding the sale of gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, and salt for salt, except equal for equal, on the spot. Whoever gives more or takes more has engaged in riba.",
    lessons: [
      '\'Ubadah ibn as-Samit stood up to state this hadith publicly after noticing people selling a piece of captured silverware for more than its weight in coin, a real, applied dispute rather than an abstract classroom question.',
      'This hadith is the primary text establishing the six classical categories of riba-bearing goods (gold, silver, wheat, barley, dates, salt) and the two conditions for exchanging one for another of the same kind: exact equality and an immediate, hand-to-hand exchange.',
      'When \'Ubadah repeated this narration and was challenged by Mu\'awiyah, who said he had not personally heard it despite his own long companionship with the Prophet ﷺ, \'Ubadah insisted on narrating what he had heard regardless, a detail scholars cite as an example of prioritizing transmitting the Sunnah accurately over social or political pressure.',
    ],
  },
  {
    num: 80,
    chapter: 'jihad',
    verified: false,
    title: 'War Is Deceit',
    narrator: 'Jabir ibn \'Abdullah, and separately Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'الْحَرْبُ خُدْعَةٌ',
    transliteration: "Al-harbu khud'ah",
    translation:
      "War is deceit.",
    lessons: [
      'This short statement is understood by scholars as permitting legitimate tactical deception in the specific context of a declared, lawful military engagement, misleading the enemy about troop movements or intentions, for example, rather than as a general license for dishonesty.',
      'A related narration describes the Prophet ﷺ deliberately announcing a different destination than his actual one before setting out on a military expedition, illustrating the kind of practical deception this hadith is understood to permit.',
      'Scholars are clear that this narrow permission does not extend to breaking an agreed treaty, a truce, or a promise of safe conduct, which remain binding even in a state of war, the deceit permitted here is tactical, not a license to violate given commitments.',
    ],
  },
  {
    num: 81,
    chapter: 'judgments_and_testimony',
    verified: false,
    title: 'A Judge Should Not Judge While Angry',
    narrator: 'Abu Bakrah',
    source: 'Bukhari & Muslim',
    arabic_text: 'لَا يَقْضِيَنَّ حَكَمٌ بَيْنَ اثْنَيْنِ وَهْوَ غَضْبَانُ',
    transliteration: "La yaqdiyanna hakamun bayna ithnayni wa huwa ghadban",
    translation:
      "Let no judge pass judgment between two people while he is angry.",
    lessons: [
      'Abu Bakrah wrote this instruction directly to his own son, who was serving as a judge in a distant province, showing it was treated as practical, personally-transmitted guidance for anyone holding judicial responsibility, not only a general saying.',
      'Anger is singled out here specifically because of its recognized effect on a person\'s judgment and self-control, the underlying concern scholars draw from this hadith extends by analogy to any state, hunger, exhaustion, or distress, that similarly clouds a judge\'s ability to weigh a case fairly.',
      'This hadith is a primary text in the fiqh of judicial procedure and continues to be cited today, including in some contemporary Muslim-majority legal systems, as a check on decision-making under emotional strain.',
    ],
  },
  {
    num: 82,
    chapter: 'virtues_and_manners',
    verified: false,
    title: 'Modesty Is Part of Faith',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'دَعْهُ فَإِنَّ الْحَيَاءَ مِنَ الْإِيمَانِ',
    transliteration: "Da'hu fa'innal-haya'a minal-iman",
    translation:
      "Leave him be, for modesty is part of faith.",
    lessons: [
      'This instruction was given when the Prophet ﷺ overheard one man from the Ansar criticizing his brother for being "too modest," correcting the assumption that modesty was a flaw to be trained out of someone.',
      'A related, longer hadith describes faith as having over sixty branches, with modesty named as one specific branch among them, giving this short statement a fuller structural context within the broader hadith literature on faith.',
      'This hadith is commonly cited as pushing back against treating modesty as mere social shyness or a weakness, instead framing it as a genuine, positive quality tied directly to a person\'s faith.',
    ],
  },
  {
    num: 83,
    chapter: 'hunting_and_slaughter',
    verified: false,
    title: 'Do Not Make a Living Creature a Target',
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Muslim',
    arabic_text: 'لَا تَتَّخِذُوا شَيْئًا فِيهِ الرُّوحُ غَرَضًا',
    transliteration: "La tattakhidhu shay'an fihir-ruhu gharada",
    translation:
      "Do not make anything with a soul (a living creature) into a target.",
    lessons: [
      'This hadith was said when the Prophet ﷺ passed a group tying up a bird and shooting arrows at it, a practice sometimes done for target practice or entertainment in that era.',
      'A related, fuller narration describes Ibn \'Umar personally intervening when he saw boys doing the same thing with a tied hen, untying it himself and directly quoting this hadith to them, showing the ruling was taken seriously enough to act on immediately when witnessed.',
      'This hadith is one of the primary texts cited in Islamic teaching on kindness to animals, establishing that causing an animal prolonged suffering for sport or practice, as opposed to a swift, purposeful slaughter for food, is not permitted.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 84–88: 5 more of the requested 20 (12 of 20 delivered
  // across this batch and the previous one; 8 remain). Same
  // sourcing standard throughout. Still verified: false.
  // ------------------------------------------------------------
  {
    num: 84,
    chapter: 'marriage',
    verified: false,
    title: "Not Proposing Over Another's Proposal",
    narrator: "'Abdullah ibn 'Umar and Abu Hurairah",
    source: 'Bukhari & Muslim',
    arabic_text: 'وَلَا يَخْطُبُ الرَّجُلُ عَلَى خِطْبَةِ أَخِيهِ حَتَّى يَنْكِحَ أَوْ يَتْرُكَ',
    transliteration: "Wa la yakhtubur-rajulu 'ala khitbati akhihi hatta yankiha aw yatruk",
    translation:
      "A man should not propose marriage over his brother's proposal until the first man marries her or leaves off.",
    lessons: [
      'This hadith establishes a specific form of respect for a proposal already made and still pending, comparable to the earlier ruling in this collection against outbidding another person\'s already-agreed sale.',
      'The restriction applies while a proposal is genuinely pending and has not been declined, once the first suitor withdraws, is refused, or gives explicit permission, another proposal becomes permissible.',
      'Scholars generally explain the underlying concern as protecting good relations between believers and preventing the kind of rivalry and hard feeling that competing, undisclosed proposals could cause.',
    ],
  },
  {
    num: 85,
    chapter: 'marriage',
    verified: false,
    title: 'The Worst Feast Excludes the Poor',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'شَرُّ الطَّعَامِ طَعَامُ الْوَلِيمَةِ يُدْعَى لَهَا الْأَغْنِيَاءُ وَيُتْرَكُ الْفُقَرَاءُ، وَمَنْ تَرَكَ الدَّعْوَةَ فَقَدْ عَصَى اللَّهَ وَرَسُولَهُ',
    transliteration:
      "Sharrut-ta'ami ta'amul-walimah, yud'a laha al-aghniya'u wa yutrakul-fuqara', wa man tarakad-da'wata faqad 'asallaha wa Rasulah",
    translation:
      "The worst food is the food of a wedding feast to which the rich are invited and the poor are left out. And whoever refuses an invitation has disobeyed Allah and His Messenger.",
    lessons: [
      'This hadith criticizes a specific pattern, a wedding feast (walima) organized around social status rather than genuine hospitality, calling it the worst kind of food despite the occasion itself being a joyful, recommended one.',
      'The second half of the hadith, that declining a genuine invitation is itself a form of disobedience, is understood by most scholars as a strong recommendation to accept ordinary social invitations, though narrowed by other considerations, such as not attending a gathering involving clear sin.',
      'This hadith is commonly cited today in discussions of wedding costs and guest lists, as encouragement toward inclusive, generous hosting rather than exclusivity organized around wealth or status.',
    ],
  },
  {
    num: 86,
    chapter: 'food_and_drink',
    verified: false,
    title: 'Disapproval of Drinking While Standing',
    narrator: 'Anas ibn Malik',
    source: 'Muslim',
    arabic_text: 'أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ زَجَرَ عَنِ الشُّرْبِ قَائِمًا',
    transliteration: "Annan-Nabiyya sallallahu 'alayhi wa sallam zajara 'anish-shurbi qa'ima",
    translation:
      "The Prophet ﷺ disapproved of drinking while standing.",
    lessons: [
      'This is a genuinely debated area rather than a simple, settled rule, several other authentic narrations describe the Prophet ﷺ himself drinking while standing on specific occasions, including Zamzam water, so scholars differ on whether the disapproval expressed here reflects a firm prohibition or a preference for the more common practice of sitting.',
      '\'Ali ibn Abi Talib is separately reported to have drunk standing and, when people looked at him oddly, explained that he had personally seen the Prophet ﷺ do both, drink standing and drink sitting, treating either as acceptable.',
      'Given this genuine difference among authentic reports, most contemporary scholars treat sitting to drink as the preferred, more complete practice (afdal) rather than treating standing to drink as strictly forbidden.',
    ],
  },
  {
    num: 87,
    chapter: 'virtues_and_manners',
    verified: false,
    title: 'True Strength Is Self-Control',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
    transliteration: "Laysash-shadidu bis-sur'ah, innamash-shadidul-ladhi yamliku nafsahu 'indal-ghadab",
    translation:
      "The strong one is not the one who overcomes others by wrestling, rather, the strong one is the one who controls himself in anger.",
    lessons: [
      'This hadith redefines a word (shadid, strong) that would ordinarily be understood in terms of physical dominance, redirecting it toward an internal, self-directed quality instead.',
      'Ibn \'Abdul Barr, a later classical scholar, commented that this hadith shows striving against oneself is a harder and more valuable task than striving against an external opponent.',
      'This hadith is widely cited in discussions of anger management specifically, and is often paired with the more detailed practical guidance found elsewhere on what to do in the moment anger arises (changing position, seeking refuge in Allah, staying silent).',
    ],
  },
  {
    num: 88,
    chapter: 'oaths_and_vows',
    verified: false,
    title: 'A Vow Does Not Change What Is Decreed',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari',
    arabic_text: 'نَهَى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ النَّذْرِ، قَالَ: إِنَّهُ لَا يَرُدُّ شَيْئًا، وَإِنَّمَا يُسْتَخْرَجُ بِهِ مِنَ الْبَخِيلِ',
    transliteration:
      "Nahan-Nabiyyu sallallahu 'alayhi wa sallam 'anin-nadhr, qala: innahu la yaruddu shay'an, wa innama yustakhraju bihi minal-bakhil",
    translation:
      "The Prophet ﷺ forbade vowing, saying: It does not change anything, it only draws something out of a miser.",
    lessons: [
      'A related, fuller narration attributes to Allah directly the statement that a vow does not bring the son of Adam anything not already decreed for him, it may simply coincide with something already decreed, which Allah then uses as a means of drawing wealth out of a person naturally reluctant to give.',
      'This hadith is a primary text some scholars use to discourage making a conditional vow (such as "if my need is met, I will give in charity") as a fundraising or motivational device, favoring instead giving directly and unconditionally.',
      'The characterization of vowing as something that mainly benefits a miser reframes what might look like an act of devotion as, in this specific conditional form, more a workaround for one\'s own reluctance than a genuinely superior form of worship.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 89–96: the final 8 of the requested 20 (20 of 20
  // delivered across this batch and the two before it). Same
  // sourcing standard throughout, every hadith located via
  // targeted search and cross-checked to Bukhari and/or Muslim,
  // nothing drafted from memory. Still verified: false.
  // ------------------------------------------------------------
  {
    num: 89,
    chapter: 'marriage',
    verified: false,
    title: 'The Prohibition of Shighar (Exchange Marriage)',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'نَهَى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الشِّغَارِ',
    transliteration: "Nahan-Nabiyyu sallallahu 'alayhi wa sallam 'anish-shighar",
    translation:
      "The Prophet ﷺ forbade shighar.",
    lessons: [
      'Shighar, as explained by the narrators transmitting this hadith, is an arrangement where a man marries his daughter or sister to another man on condition that the other man marries his own daughter or sister to him in return, with no dowry (mahr) paid by either side.',
      'A separate narration states this even more directly: "There is no shighar in Islam," treating the arrangement as void from the outset rather than merely discouraged.',
      'This hadith connects to the broader principle, discussed earlier in this collection, that a dowry is a genuine right owed to the wife herself, an exchange arrangement where women are effectively traded for one another with no dowry paid to either treats that right as dispensable, which is precisely what this prohibition addresses.',
    ],
  },
  {
    num: 90,
    chapter: 'zakah',
    verified: false,
    title: 'The Consequence of Withholding Zakah on Gold and Silver',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'مَا مِنْ صَاحِبِ ذَهَبٍ وَلَا فِضَّةٍ لَا يُؤَدِّي مِنْهَا حَقَّهَا، إِلَّا إِذَا كَانَ يَوْمُ الْقِيَامَةِ صُفِّحَتْ لَهُ صَفَائِحُ مِنْ نَارٍ، فَأُحْمِيَ عَلَيْهَا فِي نَارِ جَهَنَّمَ، فَيُكْوَى بِهَا جَنْبُهُ وَجَبِينُهُ وَظَهْرُهُ',
    transliteration:
      "Ma min sahibi dhahabin wa la fiddatin la yu'addi minha haqqaha, illa idha kana yawmul-qiyamati suffihat lahu safa'ihu min nar, fa'uhmiya 'alayha fi nari Jahannam, fayukwa biha janbuhu wa jabinuhu wa zahruh",
    translation:
      "There is no owner of gold or silver who does not pay what is due on it, except that on the Day of Resurrection, plates of fire will be made for him, heated in the fire of Hell, and his side, forehead, and back will be branded with them.",
    lessons: [
      'A fuller version of this hadith continues with parallel descriptions for camels, cattle, and sheep, each described being made to trample or gore their former owner on the Day of Resurrection if their zakah was withheld, giving a strikingly vivid, wealth-specific image for each category discussed earlier in this collection\'s zakah entries.',
      'This hadith is one of the most serious warnings in the entire zakah literature, and is generally cited to underscore that zakah is not treated as a minor or optional matter, but as wealth that genuinely belongs, in part, to others.',
      'Scholars note this warning applies specifically to wealth on which zakah was due and knowingly withheld, not to wealth from which zakah was sincerely calculated and paid, even if some error in calculation later comes to light.',
    ],
  },
  {
    num: 91,
    chapter: 'fasting',
    verified: false,
    title: 'Fasting and Breaking the Fast by Sighting the Crescent',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا رَأَيْتُمُوهُ فَصُومُوا، وَإِذَا رَأَيْتُمُوهُ فَأَفْطِرُوا، فَإِنْ غُمَّ عَلَيْكُمْ فَاقْدُرُوا لَهُ',
    transliteration:
      "Idha ra'aytumuhu fasumu, wa idha ra'aytumuhu fa'aftiru, fa'in ghumma 'alaykum faqduru lah",
    translation:
      "When you see it (the crescent), fast, and when you see it, break your fast. If it is obscured from you, then estimate it.",
    lessons: [
      'This hadith establishes physical sighting of the new crescent moon as the standard method for determining the start and end of Ramadan, rather than fixed calculation or a set number of days each year.',
      'The instruction to "estimate it" when the crescent cannot be seen due to cloud cover is generally understood, based on parallel narrations, as completing the current month (Sha\'ban or Ramadan) to a full thirty days rather than guessing.',
      'This hadith remains at the center of a genuinely live, practical discussion among contemporary scholars and Islamic organizations over whether modern astronomical calculation can supplement or replace physical sighting, a question this collection\'s core text does not itself resolve.',
    ],
  },
  {
    num: 92,
    chapter: 'funerals',
    verified: false,
    title: 'Hasten With the Funeral',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'أَسْرِعُوا بِالْجَنَازَةِ، فَإِنْ تَكُ صَالِحَةً فَخَيْرٌ تُقَدِّمُونَهَا إِلَيْهِ، وَإِنْ تَكُ سِوَى ذَلِكَ فَشَرٌّ تَضَعُونَهُ عَنْ رِقَابِكُمْ',
    transliteration:
      "Asri'u bil-janazah, fa'in taku salihatan fakhayrun tuqaddimunaha ilayh, wa in taku siwa dhalika fasharrun tada'unahu 'an riqabikum",
    translation:
      "Hasten with the funeral, for if the deceased was righteous, then it is good you are bringing him to, and if otherwise, then it is an evil you are setting down from your necks.",
    lessons: [
      'This hadith establishes prompt burial as the general recommended practice, rather than delaying for distant relatives to arrive or for other logistical convenience, a point some contemporary scholars specifically address given how much easier long-distance travel has become since this instruction was given.',
      'A related, separate hadith describes those carrying the deceased on their shoulders as able to hear the body itself speak, saying "take me ahead" if righteous, or crying out in distress if not, a report understood by scholars as something beyond ordinary human hearing rather than an audible sound.',
      'This hadith is generally balanced against other considerations also found in the fiqh literature, such as waiting a reasonable, limited time to confirm death has genuinely occurred, or for a close family member who is already nearby to arrive, so "haste" is understood as avoiding unnecessary delay, not overriding every other legitimate consideration.',
    ],
  },
  {
    num: 93,
    chapter: 'food_and_drink',
    verified: false,
    title: 'Eating and Drinking With the Right Hand',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Muslim',
    arabic_text: 'إِذَا أَكَلَ أَحَدُكُمْ فَلْيَأْكُلْ بِيَمِينِهِ، وَلْيَشْرَبْ بِيَمِينِهِ، فَإِنَّ الشَّيْطَانَ يَأْكُلُ بِشِمَالِهِ وَيَشْرَبُ بِشِمَالِهِ',
    transliteration:
      "Idha akala ahadukum falya'kul biyaminih, wal-yashrab biyaminih, fa'innash-shaytana ya'kulu bishimalihi wa yashrabu bishimalih",
    translation:
      "When any of you eats, let him eat with his right hand, and when he drinks, let him drink with his right hand, for Shaytan eats and drinks with his left hand.",
    lessons: [
      'This hadith connects to the earlier entry in this collection on starting from the right in wudu and daily affairs, extending the same general preference specifically and explicitly to eating and drinking.',
      'A related narration, attributed to Jabir, adds a further instruction not to hand something to another person or take something from them with the left hand either, extending the underlying principle beyond eating and drinking specifically.',
      'Scholars generally treat this as applying when a person is physically able to use their right hand, someone with an injury, disability, or other genuine excuse preventing use of the right hand is not considered to be acting against this instruction.',
    ],
  },
  {
    num: 94,
    chapter: 'virtues_and_manners',
    verified: false,
    title: 'A Good Word Is Charity',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ، كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ: تَعْدِلُ بَيْنَ الِاثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ عَلَى دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيطُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ',
    transliteration:
      "Kullu sulama minan-nasi 'alayhi sadaqah, kulla yawmin tatlu'u fihish-shams: ta'dilu baynal-ithnayni sadaqah, wa tu'inur-rajula 'ala dabbatihi fatahmiluhu 'alayha aw tarfa'u lahu 'alayha mata'ahu sadaqah, wal-kalimatut-tayyibatu sadaqah, wa bikulli khutwatin tamshiha ilas-salati sadaqah, wa tumitul-adha 'anit-tariqi sadaqah",
    translation:
      "On every joint of a person there is a charity due each day the sun rises: reconciling justly between two people is charity, helping a man mount his animal or lifting his belongings onto it is charity, a good word is charity, every step taken toward prayer is charity, and removing something harmful from the road is charity.",
    lessons: [
      'This hadith redefines charity far beyond a monetary gift, listing ordinary, physically effortless acts, a kind word, a helping hand, walking to prayer, clearing debris from a path, as each carrying the same category of reward.',
      'The image of "every joint" owing a charity each day is understood by scholars as pointing to the sheer number of small, everyday opportunities a person has to do good, framed generously rather than as an impossible daily quota.',
      'This hadith is commonly cited as a corrective for anyone who feels unable to be generous because they lack money, since every example given here is available regardless of a person\'s financial means.',
    ],
  },
  {
    num: 95,
    chapter: 'jihad',
    verified: false,
    title: 'The Prohibition Against Killing Women and Children',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ رَأَى فِي بَعْضِ مَغَازِيهِ امْرَأَةً مَقْتُولَةً، فَأَنْكَرَ ذَلِكَ، وَنَهَى عَنْ قَتْلِ النِّسَاءِ وَالصِّبْيَانِ',
    transliteration:
      "Anna Rasulallahi sallallahu 'alayhi wa sallam ra'a fi ba'di maghazihi imra'atan maqtulah, fa'ankara dhalik, wa naha 'an qatlin-nisa'i was-sibyan",
    translation:
      "The Messenger of Allah ﷺ saw a woman who had been killed during one of his military expeditions, disapproved of it, and forbade the killing of women and children.",
    lessons: [
      'This hadith is grounded in a specific, real event, the Prophet ﷺ discovering a slain woman on a battlefield, and his visible disapproval, rather than an abstract rule stated without context, which scholars note gives it particular weight.',
      'An-Nawawi, the classical commentator, stated that scholars are agreed on acting according to this hadith, and that it forbids killing women and children specifically on the condition that they are not themselves engaged in combat.',
      'This hadith is one of the foundational texts in the classical Islamic law of armed conflict distinguishing combatants from non-combatants, a distinction scholars trace through this and related hadith addressing the elderly and religious clergy as well.',
    ],
  },
  {
    num: 96,
    chapter: 'transactions',
    verified: false,
    title: 'Truthfulness Blesses a Transaction, Lying Erases It',
    narrator: 'Hakim ibn Hizam',
    source: 'Bukhari & Muslim',
    arabic_text:
      'الْبَيِّعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا، فَإِنْ صَدَقَا وَبَيَّنَا بُورِكَ لَهُمَا فِي بَيْعِهِمَا، وَإِنْ كَتَمَا وَكَذَبَا مُحِقَتْ بَرَكَةُ بَيْعِهِمَا',
    transliteration:
      "Al-bayyi'ani bil-khiyari ma lam yatafarraqa, fa'in sadaqa wa bayyana burika lahuma fi bay'ihima, wa in katama wa kadhaba muhiqat barakatu bay'ihima",
    translation:
      "The buyer and seller each have the option to cancel as long as they have not separated. If they are truthful and clear about the goods, their transaction is blessed. If they conceal a defect and lie, the blessing of their transaction is erased.",
    lessons: [
      'This hadith, from the same narrator as the collection\'s earlier khiyar al-majlis hadith, adds a second, distinct principle to the same underlying scenario: not only do both parties retain a right to cancel while still together, their transaction\'s spiritual outcome, blessed or unblessed, depends directly on their honesty with each other.',
      'The specific example given, disclosing a defect rather than concealing it, connects this hadith directly to the earlier entry in this collection about the man who hid rain-dampened grain beneath dry grain to disguise it, both address transactional honesty from complementary angles.',
      'This hadith frames honesty in trade as something with real consequence beyond the immediate legal validity of the sale, a transaction can be entirely valid under fiqh while still being stripped of barakah (blessing) because of dishonesty within it.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 97–103: focused on shoring up the thinnest chapters
  // (divorce, jihad, hunting_and_slaughter), per direct request.
  // Same sourcing standard as every batch before, every hadith
  // located via targeted search and cross-checked to Bukhari
  // and/or Muslim. Entry 98 (the triple-divorce ruling) touches a
  // genuinely live, historically contested question, majority
  // scholarly opinion differs from the position some scholars
  // (including Ibn Taymiyyah and Ibn al-Qayyim) draw from this same
  // hadith, and the lessons field says so directly rather than
  // presenting one side as settled. Entry 102 (dying without
  // fighting or intending to) carries a historical note preserved
  // in the hadith's own chain, a companion's comment that the
  // ruling was understood to pertain to the Prophet's ﷺ own time,
  // not stated here as a free-floating modern obligation. Entry 103
  // is included specifically because it complicates rather than
  // simplifies the jihad chapter, showing filial duty taking
  // precedence over a specific request to fight. Still verified:
  // false throughout.
  // ------------------------------------------------------------
  {
    num: 97,
    chapter: 'divorce',
    verified: false,
    title: "Khula': The Wife of Thabit ibn Qais",
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Bukhari',
    arabic_text:
      'أَنَّ امْرَأَةَ ثَابِتِ بْنِ قَيْسٍ أَتَتِ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَتْ: يَا رَسُولَ اللَّهِ، ثَابِتُ بْنُ قَيْسٍ مَا أَعْتِبُ عَلَيْهِ فِي خُلُقٍ وَلَا دِينٍ، وَلَكِنِّي أَكْرَهُ الْكُفْرَ فِي الْإِسْلَامِ. فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَتَرُدِّينَ عَلَيْهِ حَدِيقَتَهُ؟ قَالَتْ: نَعَمْ. قَالَ: اقْبَلِ الْحَدِيقَةَ وَطَلِّقْهَا تَطْلِيقَةً',
    transliteration:
      "Anna imra'ata Thabiti bni Qaysin atatin-Nabiyya sallallahu 'alayhi wa sallam faqalat: ya Rasulallah, Thabitu bnu Qaysin ma a'tibu 'alayhi fi khuluqin wa la din, wa lakinni akrahul-kufra fil-Islam. Faqala Rasulullahi sallallahu 'alayhi wa sallam: aturaddina 'alayhi hadiqatah? Qalat: na'am. Qala: aqbalil-hadiqata wa talliqha tatliqah",
    translation:
      "The wife of Thabit ibn Qais came to the Prophet ﷺ and said: O Messenger of Allah, I do not find fault with Thabit in his character or his religion, but I fear I would fall into ingratitude toward Islam if I remained with him. The Messenger of Allah ﷺ said: Will you return his garden to him? She said: Yes. He said, to Thabit: Accept the garden, and divorce her once.",
    lessons: [
      'This hadith is the foundational text for khula\', a wife-initiated separation in which she returns the dowry (or its value) she was given, rather than a divorce initiated by the husband.',
      'The wife\'s own words are notable for what they do not claim, she explicitly states there is no fault in Thabit\'s character or religious practice, framing her request purely around her own inability to fulfil the relationship as it stood, rather than accusing him of wrongdoing.',
      'Scholars generally treat khula\' as a separation the wife can request without needing to prove mistreatment or fault on the husband\'s part, in contrast to a fault-based judicial annulment, though returning the dowry (or an agreed amount) is the condition most schools attach to it.',
    ],
  },
  {
    num: 98,
    chapter: 'divorce',
    verified: false,
    title: 'Three Divorces Pronounced Together, Counted as One',
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Muslim',
    arabic_text: 'كَانَ الطَّلَاقُ الثَّلَاثُ عَلَى عَهْدِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَبِي بَكْرٍ وَسَنَتَيْنِ مِنْ خِلَافَةِ عُمَرَ طَلَاقَ الثَّلَاثِ وَاحِدَةً',
    transliteration:
      "Kanat-talaqath-thalathu 'ala 'ahdi Rasulallahi sallallahu 'alayhi wa sallam wa Abi Bakrin wa sanatayni min khilafati 'Umara talaqath-thalathi wahidah",
    translation:
      "Three divorces (pronounced together) were counted as one during the time of the Messenger of Allah ﷺ, Abu Bakr, and two years of 'Umar's caliphate.",
    lessons: [
      'This is a genuinely contested ruling rather than a settled one, worth stating plainly rather than resolving with false confidence: the majority of later jurists, including the imams of the four main schools, hold that \'Umar\'s later decision to enforce three pronouncements as three separate, binding divorces became the standard practice and remains the majority position today.',
      'A minority of scholars, including Ibn Taymiyyah and Ibn al-Qayyim among later authorities, and reportedly several companions including \'Ali and Ibn Mas\'ud, hold that this hadith reflects the more authentic underlying ruling, that three divorces pronounced together in one sitting only ever count as one revocable divorce, and that \'Umar\'s later enforcement was a discretionary administrative decision (siyasah) suited to a specific social problem of his time, not a change to the underlying fiqh.',
      'This hadith and the disagreement built on it remain directly relevant today, particularly in communities where a man pronouncing "talaq" three times in immediate succession, whether out of anger, custom, or misunderstanding, is treated by some as an irrevocable triple divorce and by others as a single, revocable one, a genuinely consequential difference for the woman involved that is worth raising directly with a knowledgeable scholar rather than assuming either position by default.',
    ],
  },
  {
    num: 99,
    chapter: 'hunting_and_slaughter',
    verified: false,
    title: 'Game Caught by a Trained Hunting Dog',
    narrator: "'Adi ibn Hatim",
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا أَرْسَلْتَ كَلْبَكَ الْمُعَلَّمَ وَذَكَرْتَ اسْمَ اللَّهِ عَلَيْهِ فَكُلْ',
    transliteration: "Idha arsalta kalbakal-mu'allama wa dhakarta ismallahi 'alayhi fakul",
    translation:
      "When you release your trained dog and mention Allah's name over it, then eat [what it catches].",
    lessons: [
      'In the fuller narration this is drawn from, \'Adi ibn Hatim asks a series of follow-up questions, whether the ruling changes if the dog kills the game outright (it does not, it may still be eaten), and whether it changes if another, untrained dog was also present and it is unclear which dog made the catch (in that case, it should not be eaten, since Allah\'s name was only mentioned over one\'s own trained dog specifically).',
      'This hadith is the primary text establishing that a trained hunting animal, released with Allah\'s name mentioned, functions as a substitute for the hunter\'s own hand in the act of "slaughtering" game that could not otherwise be reached in time.',
      'The same narration separately addresses hunting with a mi\'rad (a blunt hunting implement): game struck and pierced by its sharp edge may be eaten, but game merely struck down by the blunt side, without piercing, may not, since it has effectively been killed by a blow rather than by a method that lets blood flow.',
    ],
  },
  {
    num: 100,
    chapter: 'hunting_and_slaughter',
    verified: false,
    title: 'The Prohibition of Fanged Predators and Taloned Birds',
    narrator: "'Abdullah ibn 'Abbas",
    source: 'Muslim',
    arabic_text: 'نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ كُلِّ ذِي نَابٍ مِنَ السِّبَاعِ وَعَنْ كُلِّ ذِي مِخْلَبٍ مِنَ الطَّيْرِ',
    transliteration:
      "Naha Rasulullahi sallallahu 'alayhi wa sallam 'an kulli dhi nabin minas-siba' wa 'an kulli dhi mikhlabin minat-tayr",
    translation:
      "The Messenger of Allah ﷺ forbade eating any fanged predatory beast, and any bird with talons.",
    lessons: [
      'This hadith establishes two general categories of animal that are not lawful to eat: land predators that hunt and kill using canine teeth (lions, wolves, dogs, and similar), and birds of prey that hunt using talons (hawks, falcons, eagles, and similar).',
      'Scholars connect the reasoning here to a broader theme in Islamic dietary law, that consuming predatory animals is avoided partly out of a general principle of not eating harmful or impure creatures, and partly, according to some commentators, out of a concern that habitually consuming predatory flesh could coarsen a person\'s own character.',
      'This ruling functions as a specific qualifier on the broader default that land animals and birds are permissible unless excluded, narrowing the general permission given elsewhere rather than standing in tension with it.',
    ],
  },
  {
    num: 101,
    chapter: 'hunting_and_slaughter',
    verified: false,
    title: 'Slaughtering With Anything That Draws Blood, Except Tooth and Nail',
    narrator: 'Rafi\' ibn Khadij',
    source: 'Bukhari',
    arabic_text: 'كُلْ مَا أَنْهَرَ الدَّمَ إِلَّا السِّنَّ وَالظُّفُرَ',
    transliteration: "Kul ma anharad-dama illas-sinna waz-zufur",
    translation:
      "Eat whatever causes the blood to flow, except with tooth or nail.",
    lessons: [
      'This ruling was given in the field, during a military expedition when the companions had run out of proper knives and asked whether they could slaughter animals with sharpened canes instead, showing it addresses a genuinely practical problem rather than a theoretical one.',
      'The Prophet ﷺ gave the specific reasoning for the two named exceptions himself in the fuller narration: a tooth is simply a bone, and a fingernail was, at that time, associated with the method used by the Abyssinians, both are excluded from valid slaughter regardless of the underlying blood-flow principle.',
      'This hadith establishes the core, general standard for valid slaughter (causing the blood to flow, with Allah\'s name mentioned) in a way flexible enough to cover urgent or improvised circumstances, while still drawing a firm line at certain methods considered specifically excluded regardless of necessity.',
    ],
  },
  {
    num: 102,
    chapter: 'jihad',
    verified: false,
    title: 'Dying Without Having Fought or Intended To',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text: 'مَنْ مَاتَ وَلَمْ يَغْزُ وَلَمْ يُحَدِّثْ نَفْسَهُ بِغَزْوٍ مَاتَ عَلَى شُعْبَةٍ مِنْ نِفَاقٍ',
    transliteration: "Man mata wa lam yaghzu wa lam yuhaddith nafsahu bighazwin mata 'ala shu'batin min nifaq",
    translation:
      "Whoever dies without having fought, and without ever having genuinely considered fighting, dies having one of the branches of hypocrisy.",
    lessons: [
      'A note is preserved directly within this hadith\'s own transmission chain: the companion \'Abdullah ibn al-Mubarak, commenting on it, said "we consider that this pertained to the time of the Messenger of Allah ﷺ," a historical qualifier worth carrying forward rather than treating this as a floating, timeless individual obligation disconnected from its original context.',
      'Scholars generally understand "hypocrisy" here in its lesser, character sense (nifaq al-\'amal, a flaw in practice) rather than the greater sense that removes a person from Islam entirely, consistent with how the term is used elsewhere in comparable hadith about traits like breaking promises or lying.',
      'Classical commentators connect this hadith to the broader principle that armed defense of the Muslim community, when it is genuinely called for and organized under legitimate authority, carries real religious weight, while stressing, as reflected in the following entry in this collection, that it does not override other standing obligations such as caring for one\'s parents.',
    ],
  },
  {
    num: 103,
    chapter: 'jihad',
    verified: false,
    title: "Strive in the Service of Your Parents",
    narrator: "'Abdullah ibn 'Amr",
    source: 'Bukhari & Muslim',
    arabic_text: 'جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَسْتَأْذِنُهُ فِي الْجِهَادِ، فَقَالَ: أَحَيٌّ وَالِدَاكَ؟ قَالَ: نَعَمْ. قَالَ: فَفِيهِمَا فَجَاهِدْ',
    transliteration:
      "Ja'a rajulun ilan-Nabiyyi sallallahu 'alayhi wa sallam yasta'dhinuhu fil-jihad, faqala: ahayyun walidak? Qala: na'am. Qala: fafihima fajahid",
    translation:
      "A man came to the Prophet ﷺ asking his permission to take part in jihad. He asked: Are your parents alive? The man said: Yes. He said: Then strive in service of them.",
    lessons: [
      'This hadith directly subordinates a specific, individual request to take part in armed struggle to an existing, standing obligation, caring for one\'s living parents, rather than treating jihad as an unconditional priority that overrides every other duty.',
      'A related narration makes the ranking even more explicit: when a man asked the Prophet ﷺ which deed Allah loves most, he was told prayer at its earliest time, then kindness to parents, then jihad in the path of Allah, in that order, with jihad named third rather than first.',
      'Classical commentary on this hadith generally distinguishes between jihad as an individual, voluntary undertaking, addressed here, and the different case where defense becomes a collective necessity for the whole community, in which the calculus concerning competing obligations, including parental care, is treated differently by scholars.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 104–110: 7 of a requested 10, focused on the next
  // thinnest chapters (funerals, judgments_and_testimony, zakah,
  // hajj). Same sourcing standard as every batch before. One
  // candidate researched for this batch, "Hajj is Arafah", was
  // deliberately excluded after search confirmed it is Sunan-only
  // (Tirmidhi, Abu Dawud, Ibn Majah, Nasa'i), not Bukhari/Muslim,
  // consistent with this file's stated scope. The remaining 3 of
  // the requested 10 were not added in this pass. Still verified:
  // false throughout.
  // ------------------------------------------------------------
  {
    num: 104,
    chapter: 'funerals',
    verified: false,
    title: 'The Reward for Attending a Funeral Through to Burial',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'مَنْ شَهِدَ الْجَنَازَةَ حَتَّى يُصَلَّى عَلَيْهَا فَلَهُ قِيرَاطٌ، وَمَنْ شَهِدَهَا حَتَّى تُدْفَنَ فَلَهُ قِيرَاطَانِ',
    transliteration:
      "Man shahidal-janazata hatta yusalla 'alayha falahu qirat, wa man shahidaha hatta tudfana falahu qiratan",
    translation:
      "Whoever attends a funeral until the prayer is offered for it has one qirat of reward, and whoever attends until it is buried has two qirats.",
    lessons: [
      'When the companions asked what a qirat actually amounts to, the Prophet ﷺ described it as being like a great mountain (in one narration specifically named as Mount Uhud), giving a vivid sense of scale to what might otherwise sound like a small, technical unit of reward.',
      'A related narration adds an important condition often omitted in casual retelling: the reward described is for someone attending out of genuine faith and sincerely seeking Allah\'s reward (imanan wahtisaban), not merely for physical attendance regardless of intention.',
      'This hadith is notable for a small, honest detail preserved alongside it: when it reached Ibn \'Umar, who had been in the habit of leaving after the funeral prayer without staying for burial, he remarked that he and others had lost out on a great many qirats, a companion openly updating his own practice upon hearing a hadith he had not previously known.',
    ],
  },
  {
    num: 105,
    chapter: 'funerals',
    verified: false,
    title: 'The Prohibition of Wailing in the Manner of Pre-Islamic Times',
    narrator: "'Abdullah ibn Mas'ud",
    source: 'Bukhari & Muslim',
    arabic_text: 'لَيْسَ مِنَّا مَنْ ضَرَبَ الْخُدُودَ، وَشَقَّ الْجُيُوبَ، وَدَعَا بِدَعْوَى الْجَاهِلِيَّةِ',
    transliteration: "Laysa minna man daraban-khudud, wa shaqqal-juyub, wa da'a bida'wal-jahiliyyah",
    translation:
      "He is not one of us who slaps his cheeks, tears his garments, or cries out with the cries of the pre-Islamic period.",
    lessons: [
      'This hadith addresses three specific outward expressions of grief common in pre-Islamic Arabia, striking the face, tearing clothing, and wailing aloud in a specific ritualized style, and marks all three as inconsistent with the character expected of the community.',
      'This is not a general prohibition on grief, sadness, or even tears themselves, which are documented in several other hadith describing the Prophet ﷺ weeping at the loss of loved ones, the concern here is specifically with theatrical, self-harming, or ritualized expressions rather than sincere sorrow itself.',
      'Scholars generally understand "he is not one of us" here, as with similar strong phrases elsewhere in the hadith literature, as a serious warning against the specific behavior rather than a declaration that someone who does this has left Islam.',
    ],
  },
  {
    num: 106,
    chapter: 'judgments_and_testimony',
    verified: false,
    title: 'False Testimony as a Major Sin',
    narrator: 'Abu Bakrah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَلَا أُنَبِّئُكُمْ بِأَكْبَرِ الْكَبَائِرِ؟ (ثَلَاثًا) قُلْنَا: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: الْإِشْرَاكُ بِاللَّهِ، وَعُقُوقُ الْوَالِدَيْنِ، وَكَانَ مُتَّكِئًا فَجَلَسَ فَقَالَ: أَلَا وَقَوْلُ الزُّورِ وَشَهَادَةُ الزُّورِ، فَمَا زَالَ يُكَرِّرُهَا حَتَّى قُلْنَا: لَيْتَهُ سَكَتَ',
    transliteration:
      "Ala unabbi'ukum bi'akbaril-kaba'ir? (thalathan) Qulna: bala ya Rasulallah. Qala: al-ishraku billah, wa 'uququl-walidayn, wa kana muttaki'an fajalasa faqala: ala wa qawluz-zur wa shahadatuz-zur, fama zala yukarriruha hatta qulna: laytahu sakat",
    translation:
      "Shall I not inform you of the gravest of major sins? (He said it three times.) We said: Yes, O Messenger of Allah. He said: Associating partners with Allah, and disobedience to parents. He had been reclining, and then sat up, and said: And beware, false speech and false testimony, and he kept repeating it until we wished he would stop.",
    lessons: [
      'The Prophet\'s ﷺ physical change in posture, sitting up from a reclining position specifically to deliver this last warning, is itself part of the message, a deliberate, visible signal that what follows deserves the audience\'s full attention.',
      'False testimony is placed here in direct company with shirk (associating partners with Allah) and disobedience to parents, among the gravest categories of sin recognized in Islamic teaching, a striking pairing for something that might otherwise be treated as a mere procedural offense.',
      'The companions\' own report that they wished he would stop repeating the warning reflects how forcefully the point was made, and is often cited by scholars as evidence of just how seriously false testimony is treated, given its power to wrongly take a person\'s property, freedom, or even life through the judicial process.',
    ],
  },
  {
    num: 107,
    chapter: 'judgments_and_testimony',
    verified: false,
    title: 'The Reward of a Judge Who Exercises Genuine Effort',
    narrator: "'Amr ibn al-'As",
    source: 'Bukhari & Muslim',
    arabic_text: 'إِذَا حَكَمَ الْحَاكِمُ فَاجْتَهَدَ ثُمَّ أَصَابَ فَلَهُ أَجْرَانِ، وَإِذَا حَكَمَ فَاجْتَهَدَ ثُمَّ أَخْطَأَ فَلَهُ أَجْرٌ',
    transliteration:
      "Idha hakamal-hakimu fajtahada thumma asaba falahu ajran, wa idha hakama fajtahada thumma akhta'a falahu ajr",
    translation:
      "When a judge rules and exercises genuine effort in reasoning (ijtihad), and is correct, he has two rewards. When he rules and exercises genuine effort, and errs, he has one reward.",
    lessons: [
      'This hadith establishes that a judge\'s sincere, diligent effort toward reaching a correct ruling is itself rewarded, separately from whether the specific conclusion reached happens to be correct, so long as the effort was genuine rather than careless or self-interested.',
      'This is one of the foundational texts behind the entire concept of ijtihad, independent legal reasoning applied by a qualified scholar to reach a ruling, and is frequently cited well beyond the courtroom, in the broader fiqh methodology used to derive rulings on new or ambiguous questions.',
      'This hadith is generally understood as applying specifically to a qualified judge or scholar genuinely equipped to exercise this kind of reasoning, not to anyone offering an uninformed opinion, since the reward described is tied to real, competent effort rather than good intentions alone.',
    ],
  },
  {
    num: 108,
    chapter: 'zakah',
    verified: false,
    title: 'Charity Does Not Decrease Wealth',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلَّا رَفَعَهُ اللَّهُ',
    transliteration:
      "Ma naqasat sadaqatun min mal, wa ma zadallahu 'abdan bi'afwin illa 'izza, wa ma tawada'a ahadun lillahi illa rafa'ahullah",
    translation:
      "Charity does not decrease wealth, no one forgives another except that Allah increases his honor, and no one humbles himself for the sake of Allah except that Allah raises his rank.",
    lessons: [
      'This hadith directly addresses a natural, intuitive worry, that giving away wealth simply leaves a person with less, by stating the opposite outcome as the actual result, though scholars are clear this is generally understood as a spiritual and providential principle (barakah, unexpected provision, protection from loss) rather than a literal arithmetic guarantee in every individual case.',
      'The hadith pairs this financial principle with two other, structurally similar statements, that forgiving others increases honor and that humbling oneself for Allah raises one\'s rank, a pattern of apparent loss actually resulting in gain that runs through all three.',
      'This is one of the most frequently cited hadith in encouraging charitable giving specifically to someone hesitant on purely financial grounds, addressing the underlying fear directly rather than only appealing to reward in the abstract.',
    ],
  },
  {
    num: 109,
    chapter: 'zakah',
    verified: false,
    title: 'The Upper Hand Is Better Than the Lower Hand',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى، فَالْيَدُ الْعُلْيَا هِيَ الْمُنْفِقَةُ، وَالسُّفْلَى هِيَ السَّائِلَةُ',
    transliteration:
      "Al-yadul-'ulya khayrun minal-yadis-sufla, fal-yadul-'ulya hiyal-munfiqah, was-sufla hiyas-sa'ilah",
    translation:
      "The upper hand is better than the lower hand: the upper hand is the one that gives, and the lower hand is the one that asks.",
    lessons: [
      'This hadith was delivered by the Prophet ﷺ from the pulpit while specifically addressing the topics of charity and abstaining from asking others for help, giving it the weight of a general, public teaching rather than advice given to one individual.',
      'A fuller version of this hadith, narrated separately from Hakim ibn Hizam, adds practical guidance alongside the principle: begin giving with one\'s own dependents first, and the most excellent charity is that given by someone who remains financially secure after giving it.',
      'This hadith is commonly cited alongside teaching on self-sufficiency and avoiding unnecessary begging, with a related narration adding that whoever genuinely seeks to abstain from asking others, Allah will help him do so, and whoever seeks independence, Allah will grant it to him.',
    ],
  },
  {
    num: 110,
    chapter: 'hajj',
    verified: false,
    title: 'What a Person in Ihram May Not Wear',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَا يَلْبَسُ الْمُحْرِمُ الْقَمِيصَ، وَلَا الْعِمَامَةَ، وَلَا السَّرَاوِيلَ، وَلَا الْبُرْنُسَ، وَلَا ثَوْبًا مَسَّهُ زَعْفَرَانٌ وَلَا وَرْسٌ، وَلَا الْخُفَّيْنِ، إِلَّا لِمَنْ لَمْ يَجِدِ النَّعْلَيْنِ، فَإِنْ لَمْ يَجِدْهُمَا فَلْيَقْطَعْهُمَا أَسْفَلَ مِنَ الْكَعْبَيْنِ',
    transliteration:
      "La yalbasul-muhrimul-qamisa, wa lal-'imamah, wa las-sarawil, wa lal-burnus, wa la thawban massahu za'faranun wa la wars, wa lal-khuffayn, illa liman lam yajidin-na'layn, fa'in lam yajidhuma falyaqta'huma asfala minal-ka'bayn",
    translation:
      "A person in ihram should not wear a shirt, a turban, trousers, a hooded cloak, or a garment touched by saffron or wars (a scented dye), nor leather socks, except for one who cannot find sandals, in which case he should cut them below the ankles.",
    lessons: [
      'This hadith is the primary text listing what a man in ihram avoids wearing, all of it tailored, form-fitting, head-covering, or scented items, in favor of the simple, unstitched garments traditionally worn during Hajj and Umrah.',
      'The specific accommodation for someone who cannot find sandals, wearing leather socks cut below the ankles rather than going without footwear entirely, is a practical, real-world exception built into the ruling itself, not a later addition.',
      'A fuller version of this same narration, as related through Bukhari specifically, adds a parallel instruction for a woman in ihram: that she should not cover her face or wear gloves, extending the same underlying principle of avoiding tailored, restrictive, or otherwise ordinary clothing during the state of ihram.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 111–114: 4 of a requested 10, same sourcing standard
  // as every batch before. The remaining 6 were not added in this
  // pass. Still verified: false throughout.
  // ------------------------------------------------------------
  {
    num: 111,
    chapter: 'divorce',
    verified: false,
    title: "Subay'ah's Iddah Ended at Childbirth",
    narrator: 'Al-Miswar ibn Makhramah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'أَنَّ سُبَيْعَةَ الْأَسْلَمِيَّةَ نُفِسَتْ بَعْدَ وَفَاةِ زَوْجِهَا بِلَيَالٍ، فَجَاءَتِ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَاسْتَأْذَنَتْهُ أَنْ تَنْكِحَ فَأَذِنَ لَهَا فَنَكَحَتْ',
    transliteration:
      "Anna Subay'atal-Aslamiyyata nufisat ba'da wafati zawjiha bilayal, faja'atin-Nabiyya sallallahu 'alayhi wa sallam fasta'dhanathu an tankiha fa'adhina laha fanakahat",
    translation:
      "Subay'ah al-Aslamiyyah gave birth a few nights after the death of her husband. She came to the Prophet ﷺ and asked his permission to remarry, and he gave her permission, and she married.",
    lessons: [
      'This hadith is a direct, applied case establishing that a pregnant widow\'s waiting period (iddah) ends at delivery, not after the standard four months and ten days observed by a widow who is not pregnant, even if delivery happens only days after her husband\'s death.',
      'A related, fuller version of this account describes a man later criticizing Subay\'ah for preparing herself to remarry so soon, and her case being brought directly to the Prophet ﷺ, who confirmed her waiting period had indeed ended and that she was free to marry.',
      'This ruling is grounded directly in the Qur\'an (65:4), which states plainly that the term for pregnant women is until they deliver, and this hadith shows that verse being applied to a real, specific, and admittedly fast-moving situation rather than left as an abstract principle.',
    ],
  },
  {
    num: 112,
    chapter: 'transactions',
    verified: false,
    title: 'The Prohibition of Najash (False Bidding)',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text: 'نَهَى النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ النَّجْشِ',
    transliteration: "Nahan-Nabiyyu sallallahu 'alayhi wa sallam 'anin-najsh",
    translation:
      "The Prophet ﷺ forbade najash.",
    lessons: [
      'Najash refers to bidding up the price of goods without any genuine intention to buy, done specifically to mislead an actual interested buyer into paying more than the item is worth.',
      'A related narration broadens the same underlying concern to a comparable practice, a city dweller selling goods on behalf of an outside seller (a bedouin, in the original context) in a way that distorts the natural market price for local buyers, both are treated as forms of market manipulation rather than honest trade.',
      'Classical commentators note near-total scholarly agreement that najash is sinful for whoever practices it, though there is more discussion over whether a sale actually completed under such conditions is void or merely tainted, since the buyer\'s own consent to the final price is still, in form, freely given.',
    ],
  },
  {
    num: 113,
    chapter: 'funerals',
    verified: false,
    title: 'Do Not Abuse the Dead',
    narrator: "'Aishah",
    source: 'Bukhari',
    arabic_text: 'لَا تَسُبُّوا الْأَمْوَاتَ، فَإِنَّهُمْ قَدْ أَفْضَوْا إِلَى مَا قَدَّمُوا',
    transliteration: "La tasubbul-amwat, fa'innahum qad afdaw ila ma qaddamu",
    translation:
      "Do not abuse the dead, for they have already arrived at the result of what they sent forth.",
    lessons: [
      'This hadith establishes that speaking ill of someone who has died is discouraged, since that person\'s deeds are now complete and already facing their consequence before Allah, whatever criticism the living might add serves no purpose for the deceased and only reflects on the speaker.',
      'Scholars generally treat this as directed at ordinary personal criticism or grudges being aired after someone\'s death, rather than as a blanket rule preventing legitimate factual warning about a person\'s publicly known harmful actions where there is a genuine need to caution others.',
      'This hadith is commonly cited as guidance for how to speak at or shortly after a funeral specifically, encouraging remembrance of the deceased\'s good qualities and leaving judgment of the rest to Allah, rather than using the occasion to relitigate old disputes.',
    ],
  },
  {
    num: 114,
    chapter: 'hajj',
    verified: false,
    title: "'Umar and the Black Stone",
    narrator: "'Umar ibn al-Khattab",
    source: 'Bukhari & Muslim',
    arabic_text:
      'إِنِّي أَعْلَمُ أَنَّكَ حَجَرٌ مَا تَنْفَعُ وَلَا تَضُرُّ، وَلَوْلَا أَنِّي رَأَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يُقَبِّلُكَ مَا قَبَّلْتُكَ',
    transliteration:
      "Inni a'lamu annaka hajarun ma tanfa'u wa la tadur, wa lawla anni ra'aytu Rasulallahi sallallahu 'alayhi wa sallam yuqabbiluka ma qabbaltuk",
    translation:
      "I know well that you are a stone, you can neither benefit nor harm. Were it not that I saw the Messenger of Allah ﷺ kiss you, I would not have kissed you.",
    lessons: [
      '\'Umar spoke these words aloud, in public, specifically so that people gathered for Hajj from many different regions would hear them and carry the point back with them, a deliberate act of teaching rather than a private remark.',
      'This hadith is one of the clearest statements in the entire hadith literature establishing that acts of worship are followed because they were commanded and demonstrated by the Prophet ﷺ, not because the specific object involved is believed to hold power of its own, guarding directly against the stone itself becoming an object of superstition.',
      'An-Nawawi, commenting on this hadith, noted that acts of worship are fundamentally tawqifi, meaning they are only legitimate insofar as they were actually prescribed by Allah and His Messenger ﷺ, and are to be followed even when the specific wisdom behind a given practice is not fully understood.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 115–118: 4 of a requested 10, same sourcing standard
  // as every batch before. The remaining 6 were not added in this
  // pass, reflecting the rising per-entry search cost flagged at
  // the end of the previous batch. Still verified: false
  // throughout.
  // ------------------------------------------------------------
  {
    num: 115,
    chapter: 'oaths_and_vows',
    verified: false,
    title: "Sulayman's Forgotten Exception",
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'قَالَ سُلَيْمَانُ: لَأَطُوفَنَّ اللَّيْلَةَ عَلَى تِسْعِينَ امْرَأَةً، كُلُّهُنَّ تَأْتِي بِفَارِسٍ يُجَاهِدُ فِي سَبِيلِ اللَّهِ، فَقَالَ لَهُ صَاحِبُهُ: قُلْ إِنْ شَاءَ اللَّهُ، فَلَمْ يَقُلْ، فَطَافَ عَلَيْهِنَّ جَمِيعًا فَلَمْ يَحْمِلْ مِنْهُنَّ إِلَّا امْرَأَةٌ وَاحِدَةٌ جَاءَتْ بِشِقِّ رَجُلٍ، وَايْمُ الَّذِي نَفْسُ مُحَمَّدٍ بِيَدِهِ، لَوْ قَالَ: إِنْ شَاءَ اللَّهُ، لَجَاهَدُوا فِي سَبِيلِ اللَّهِ فُرْسَانًا أَجْمَعُونَ',
    transliteration:
      "Qala Sulaymanu: la'atufanna al-laylata 'ala tis'ina imra'ah, kulluhunna ta'ti bifarisin yujahidu fi sabilillah, faqala lahu sahibuh: qul in sha'allah, falam yaqul, fatafa 'alayhinna jami'an falam yahmil minhunna illa imra'atun wahidatun ja'at bishiqqi rajul, wa aymul-ladhi nafsu Muhammadin biyadih, law qala: in sha'allah, lajahadu fi sabilillahi fursanan ajma'un",
    translation:
      "Sulayman said: Tonight I will go around to ninety women, each of whom will bring forth a warrior who will strive in the way of Allah. His companion said to him: Say, if Allah wills. But he did not say it. So he went around to all of them, and none of them conceived except one woman, who gave birth to a half-formed child. By the One in Whose hand is Muhammad's soul, had he said, if Allah wills, they would all have brought forth warriors striving in Allah's cause.",
    lessons: [
      'This account is narrated by the Prophet ﷺ himself as a lesson from the life of an earlier prophet, Sulayman (Solomon), rather than as a ruling about a companion\'s own conduct, and different narrations of it give slightly different numbers of women (sixty, seventy, ninety, or a hundred), a variance scholars discuss without it affecting the substance of the lesson.',
      'This hadith is one of the primary illustrations of the value of the phrase "in sha Allah" (if Allah wills) attached to a stated intention, showing through a concrete example rather than an abstract instruction why acknowledging that an outcome ultimately rests with Allah matters, not merely as a verbal habit.',
      'This account is closely connected to the general legal principle, addressed elsewhere in this collection, that adding "if Allah wills" to an oath functions as a genuine exception (istithna), releasing a person from being bound by the oath if the stated thing does not come to pass.',
    ],
  },
  {
    num: 116,
    chapter: 'food_and_drink',
    verified: false,
    title: 'Every Intoxicant Is Khamr, and Every Intoxicant Is Forbidden',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Muslim',
    arabic_text:
      'كُلُّ مُسْكِرٍ خَمْرٌ، وَكُلُّ مُسْكِرٍ حَرَامٌ، وَمَنْ شَرِبَ الْخَمْرَ فِي الدُّنْيَا فَمَاتَ وَهُوَ يُدْمِنُهَا لَمْ يَتُبْ لَمْ يَشْرَبْهَا فِي الْآخِرَةِ',
    transliteration:
      "Kullu muskirin khamr, wa kullu muskirin haram, wa man shariba al-khamra fid-dunya famata wa huwa yudminuha lam yatub lam yashrabha fil-akhirah",
    translation:
      "Every intoxicant is khamr, and every intoxicant is forbidden. Whoever drinks khamr in this world and dies persisting in it without repenting will not drink it in the Hereafter.",
    lessons: [
      'This hadith establishes the underlying principle behind the prohibition of intoxicants: the ruling is tied to the effect of intoxication itself, not to a fixed list of specific named drinks, so anything that intoxicates falls under the same ruling as wine, whatever it is made from or called.',
      'This principle is what allows scholars to apply the prohibition to substances that did not exist or were not common in seventh-century Arabia, since the test is the effect (intoxication), not the specific historical name.',
      'The second half of this hadith carries a serious warning specifically for someone who drinks habitually and dies without genuine repentance, a warning scholars are careful to note is distinct from, and more severe than, the general ruling of prohibition itself, since it concerns unrepented persistence rather than a single lapse.',
    ],
  },
  {
    num: 117,
    chapter: 'transactions',
    verified: false,
    title: 'The Prohibition of Gharar Sales',
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic_text: 'نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ بَيْعِ الْحَصَاةِ وَعَنْ بَيْعِ الْغَرَرِ',
    transliteration: "Naha Rasulullahi sallallahu 'alayhi wa sallam 'an bay'il-hasati wa 'an bay'il-gharar",
    translation:
      "The Messenger of Allah ﷺ forbade the pebble-throw sale and the gharar sale.",
    lessons: [
      'The pebble-throw sale named here refers to a pre-Islamic method of finalizing a transaction, such as agreeing that whatever a thrown stone lands on is what is being sold, or that the sale becomes binding the instant a stone is thrown, removing any real opportunity for either party to properly inspect or agree on specifics.',
      'Gharar, translated roughly as excessive uncertainty, is one of the broadest and most foundational prohibited categories in Islamic transaction law, and scholars apply this single short hadith to a wide range of specific cases: selling fish still in the sea, an unborn animal\'s future offspring, or fruit before it is far enough along to reasonably predict the harvest.',
      'A later scholar, Ibn Rushd, noted that gharar exists on a spectrum, and that some minor, customarily tolerated uncertainty (not knowing exactly how many oranges are inside a sealed crate someone is buying, for example) does not invalidate a sale, the prohibition targets uncertainty significant enough to create real potential for dispute or exploitation.',
    ],
  },
  {
    num: 118,
    chapter: 'divorce',
    verified: false,
    title: 'Being Given a Choice Is Not Itself a Divorce',
    narrator: "'Aishah",
    source: 'Bukhari & Muslim',
    arabic_text: 'خَيَّرَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَاخْتَرْنَاهُ، فَلَمْ يَعُدَّهُ عَلَيْنَا طَلَاقًا',
    transliteration:
      "Khayyarana Rasulullahi sallallahu 'alayhi wa sallam, fakhtarnahu, falam ya'uddahu 'alayna talaqa",
    translation:
      "The Messenger of Allah ﷺ gave us the choice, and we chose him, and he did not count that as a divorce against us.",
    lessons: [
      'This hadith arose from a real event: after a period of tension between the Prophet ﷺ and his wives, a Qur\'anic verse (33:28-29) instructed him to give them a choice between the life of this world or Allah, His Messenger, and the Hereafter, and every one of his wives chose to remain with him.',
      'This hadith establishes a specific fiqh principle: a husband offering his wife the choice to stay or leave is not, by itself, a pronouncement of divorce, the marriage remains intact unless and until she actually chooses separation.',
      'The majority of companions, later scholars, and jurists across the major schools hold this position, that choosing to stay results in no divorce at all, though there is more scholarly discussion over exactly what happens, and how many divorces are counted, if a wife given this choice chooses to leave rather than stay.',
    ],
  },
  // ------------------------------------------------------------
  // ENTRIES 119–122: 4 of a requested 10, same sourcing standard
  // as every batch before. The remaining 6 were not added in this
  // pass. Still verified: false throughout.
  // ------------------------------------------------------------
  {
    num: 119,
    chapter: 'hajj',
    verified: false,
    title: 'The Wording of the Talbiyah',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
    transliteration:
      "Labbayka Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
    translation:
      "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise and grace are Yours, and all sovereignty. You have no partner.",
    lessons: [
      'This is the exact wording of the talbiyah recited by the Prophet ﷺ himself from the moment he entered ihram at Dhul-Hulayfah, and it is the wording every major school traces back to him, the phrase every pilgrim recites from ihram onward.',
      'A related narration records that Ibn \'Umar himself, after reciting the Prophet\'s ﷺ exact wording, would add a further personal phrase of his own, and the Prophet ﷺ did not object to companions adding to it, which scholars cite as evidence that modest personal additions in this spirit are permitted, while the core wording itself remains the standard.',
      'The word "labbayk" itself, repeated four times in this short phrase, comes from a root meaning to respond or draw near, and is only properly said to someone one loves and is devoted to, framing the entire pilgrimage from its opening words as an act of devoted response to a call rather than a routine obligation.',
    ],
  },
  {
    num: 120,
    chapter: 'virtues_and_manners',
    verified: false,
    title: 'Whoever Believes in Allah and the Last Day',
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text:
      'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلَا يُؤْذِ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    transliteration:
      "Man kana yu'minu billahi wal-yawmil-akhiri fala yu'dhi jarah, wa man kana yu'minu billahi wal-yawmil-akhiri falyukrim dayfah, wa man kana yu'minu billahi wal-yawmil-akhiri falyaqul khayran aw liyasmut",
    translation:
      "Whoever believes in Allah and the Last Day, let him not harm his neighbor. Whoever believes in Allah and the Last Day, let him honor his guest. Whoever believes in Allah and the Last Day, let him speak good or remain silent.",
    lessons: [
      'This hadith ties three distinct, everyday areas of conduct, treatment of neighbors, hospitality to guests, and control of speech, directly to the genuineness of a person\'s belief, rather than treating them as separate matters of etiquette unrelated to faith.',
      'The repeated structure, "whoever believes in Allah and the Last Day," used as the opening for each instruction, is a common rhetorical device in the hadith literature for underscoring that a stated belief carries real, observable behavioral consequences.',
      'The final instruction, to speak good or otherwise remain silent, is frequently cited on its own as a practical, everyday filter for speech, not a call to total silence, but a standard that if what is about to be said is not good, saying nothing is the better choice.',
    ],
  },
  {
    num: 121,
    chapter: 'marriage',
    verified: false,
    title: "A Woman's Consent Is Required for Her Marriage",
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic_text: 'لَا تُنْكَحُ الْأَيِّمُ حَتَّى تُسْتَأْمَرَ، وَلَا تُنْكَحُ الْبِكْرُ حَتَّى تُسْتَأْذَنَ، قَالُوا: يَا رَسُولَ اللَّهِ وَكَيْفَ إِذْنُهَا؟ قَالَ: أَنْ تَسْكُتَ',
    transliteration:
      "La tunkahul-ayyimu hatta tusta'mar, wa la tunkahul-bikru hatta tusta'dhan, qalu: ya Rasulallahi wa kayfa idhnuha? Qala: an taskut",
    translation:
      "A previously married woman should not be married until she is consulted, and a virgin should not be married until her permission is sought. They said: O Messenger of Allah, how is her permission expressed? He said: By her silence.",
    lessons: [
      'This hadith establishes that a woman\'s own consent, in some form, is a genuine requirement for a valid marriage, not a courtesy left entirely to a guardian\'s discretion, and it distinguishes between a previously married woman, whose explicit verbal consent is sought, and a virgin, for whom silence itself is accepted as sufficient consent given natural shyness around the topic.',
      'A related, more detailed narration has \'Aishah directly asking the Prophet ﷺ whether a virgin\'s guardian is required to consult her at all, and he confirms that yes, she must be consulted, with \'Aishah adding that a virgin will typically feel too shy to say anything, which the Prophet ﷺ confirms is exactly why her silence counts as her consent.',
      'This hadith is a central text in fiqh discussions of marriage validity, and later scholars extended its underlying principle to build out the more detailed conditions under which a marriage arranged without a woman\'s genuine willingness could be challenged or annulled.',
    ],
  },
  {
    num: 122,
    chapter: 'zakah',
    verified: false,
    title: 'The Obligation of Zakat al-Fitr',
    narrator: "'Abdullah ibn 'Umar",
    source: 'Bukhari & Muslim',
    arabic_text:
      'فَرَضَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَدَقَةَ الْفِطْرِ صَاعًا مِنْ شَعِيرٍ، أَوْ صَاعًا مِنْ تَمْرٍ، عَلَى الصَّغِيرِ وَالْكَبِيرِ، وَالْحُرِّ وَالْمَمْلُوكِ',
    transliteration:
      "Farada Rasulullahi sallallahu 'alayhi wa sallam sadaqatal-fitri sa'an min sha'irin, aw sa'an min tamr, 'alas-saghiri wal-kabir, wal-hurri wal-mamluk",
    translation:
      "The Messenger of Allah ﷺ made Zakat al-Fitr obligatory, one sa' of barley or one sa' of dates, upon the young and the old, and the free and the slave.",
    lessons: [
      'Unlike the wealth-based zakah discussed earlier in this collection, Zakat al-Fitr is a fixed, per-person amount owed on behalf of every Muslim in a household, regardless of individual wealth, and a related narration adds that the Prophet ﷺ specifically ordered it be paid before people went out for the \'Eid prayer.',
      'Ibn \'Umar\'s own later practice, giving Zakat al-Fitr on behalf of his young children and even, in some reports, members of his household regardless of their own means, illustrates how this obligation is generally understood as a head-of-household responsibility rather than something each individual, including children, must arrange for themselves.',
      'The specific staple named (barley or dates) reflects what was customary food at the time, and scholars generally hold that the underlying principle is payment in a locally staple food (or, according to many contemporary scholars, its equivalent monetary value), rather than a fixed requirement to source barley or dates specifically wherever a person lives today.',
    ],
  },
]