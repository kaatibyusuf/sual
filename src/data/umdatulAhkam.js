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
      'PLACEHOLDER SAMPLE — confirm exact wording, full narrator chain, and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording, full narrator chain, and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — this is one of the longer, more detail-sensitive hadith in the chapter; confirm exact wording, sequence, and numbering against a printed copy with particular care before use.',
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
      'PLACEHOLDER SAMPLE — this entry in particular is trimmed to a shorter core statement; confirm the fuller wording, conditions, and exact numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — the fuller narration includes surrounding context (the occasion/setting) that this shortened core statement omits; confirm full wording and numbering against a printed copy before use.',
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
      "PLACEHOLDER SAMPLE — Bukhari's version of this narration differs in wording from Muslim's; confirm which exact version 'Umdat al-Ahkam cites before use.",
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
      'PLACEHOLDER SAMPLE — the exact wording of this hadith is known to differ somewhat between Bukhari\'s and Muslim\'s narrations; confirm the specific version before use.',
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
      'PLACEHOLDER SAMPLE — confirm the fuller context of this narration (it was part of a longer set of instructions given to Fatimah bint Abi Hubaysh) before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and whether this specific version (versus a related narration with similar meaning) is the one cited in \'Umdat al-Ahkam.',
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
      'PLACEHOLDER SAMPLE — this is a longer, detail-sensitive hadith; confirm exact sequence and wording against a printed copy with particular care before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording, the surrounding narrative context (the Prophet ﷺ passing two graves), and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and numbering against a printed copy before use.',
    ],
  },
  {
    num: 15,
    chapter: 'purification',
    verified: false,
    title: 'Sending Someone to Guard Water from a Dog',
    narrator: "PLACEHOLDER — narrator uncertain, do not rely on this field",
    source: 'PLACEHOLDER — collection/authenticity uncertain, do not rely on this field',
    arabic_text: 'PLACEHOLDER — do not rely on this field',
    transliteration: 'PLACEHOLDER — do not rely on this field',
    translation:
      "PLACEHOLDER — this entry is intentionally left as a stub. I was not confident enough in a specific hadith here to responsibly present it as real content, even flagged. Replace this stub with a verified hadith rather than filling it from memory.",
    lessons: [
      'This stub exists to keep the numbering sequential (1–20) without papering over a case where confidence was genuinely too low to responsibly draft even a flagged placeholder with fabricated-sounding specifics.',
      'This is itself an illustration of the underlying concern: at a certain point in unaided recall, the honest answer is "I don\'t know," not a plausible-sounding guess.',
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
      'PLACEHOLDER SAMPLE — confirm the fuller surrounding narration and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording, the specific figure cited, and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording, the fuller surrounding narration, and numbering against a printed copy before use.',
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
      'PLACEHOLDER SAMPLE — confirm exact wording and numbering against a printed copy before use.',
    ],
  },
]