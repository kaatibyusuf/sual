// src/data/hadeethClass.js
//
// Hadeeth Class -- a comprehensive course on Mustalah al-Hadith
// (the science of hadith authentication and classification), built
// the way classical hadith-sciences primers are traditionally
// sequenced: from basic terminology through sanad and matn
// evaluation, classification by authenticity and by transmission,
// narrator criticism, the major collections, and practical
// application. Deliberately named and structured separately from
// any existing hadith-related content elsewhere in this app -- own
// route, own data files, own DB tables, own payment product
// ('hadeethclass'), nothing here collides with anything else.
//
// STATUS: Unit 1 has full lesson content. All other units currently
// have title + summary only (placeholder content) -- to be filled in
// unit-by-unit, same pattern as the other five classes.
//
// Original content, not reproduced from any existing source.
// Terminology, definitions, and the hadith qudsi example checked
// against standard classical and contemporary Mustalah al-Hadith
// references before writing. Recommend a qualified hadith teacher's
// review before publishing, given how much precision this specific
// subject requires.

export const HADEETHCLASS_UNITS = [
  {
    id: 'unit-1',
    title: 'Foundations: What Is the Science of Hadith',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'The Sanad: Chain of Narration',
    topics: ['sanad-1', 'sanad-2', 'sanad-3', 'sanad-4'],
  },
  {
    id: 'unit-3',
    title: 'Sahih and Hasan',
    topics: ['sahih-1', 'sahih-2', 'sahih-3', 'sahih-4'],
  },
  {
    id: 'unit-4',
    title: "Da'if and Mawdu'",
    topics: ['daif-1', 'daif-2', 'daif-3', 'daif-4'],
  },
  {
    id: 'unit-5',
    title: 'Classification by Number of Narrators',
    topics: ['adad-1', 'adad-2', 'adad-3'],
  },
  {
    id: 'unit-6',
    title: 'Connected and Disconnected Chains',
    topics: ['ittisal-1', 'ittisal-2', 'ittisal-3', 'ittisal-4', 'ittisal-5'],
  },
  {
    id: 'unit-7',
    title: 'Hidden and Subtle Defects',
    topics: ['illah-1', 'illah-2', 'illah-3', 'illah-4', 'illah-5'],
  },
  {
    id: 'unit-8',
    title: "'Ilm ar-Rijal: The Science of Narrator Criticism",
    topics: ['rijal-1', 'rijal-2', 'rijal-3', 'rijal-4'],
  },
  {
    id: 'unit-9',
    title: 'The Generations of Narrators',
    topics: ['tabaqat-1', 'tabaqat-2', 'tabaqat-3', 'tabaqat-4'],
  },
  {
    id: 'unit-10',
    title: 'Methods of Receiving and Transmitting Hadith',
    topics: ['tahammul-1', 'tahammul-2', 'tahammul-3', 'tahammul-4'],
  },
  {
    id: 'unit-11',
    title: 'The Major Hadith Collections',
    topics: ['kutub-1', 'kutub-2', 'kutub-3', 'kutub-4'],
  },
  {
    id: 'unit-12',
    title: 'Studying the Matn: The Text Itself',
    topics: ['matn-1', 'matn-2', 'matn-3', 'matn-4'],
  },
  {
    id: 'unit-13',
    title: 'Practical Application',
    topics: ['amal-1', 'amal-2', 'amal-3', 'amal-4'],
  },
  {
    id: 'unit-14',
    title: 'Closing: Preservation and Legacy',
    topics: ['legacy-1', 'legacy-2', 'legacy-3', 'legacy-4'],
  },
];

export const HADEETHCLASS_TOPIC_ORDER = HADEETHCLASS_UNITS.flatMap((u) => u.topics);

export const HADEETHCLASS_TOPICS = {
  // -----------------------------------------------------------
  // UNIT 1 - FOUNDATIONS: WHAT IS THE SCIENCE OF HADITH (full
  // content)
  //
  // Terminology (hadith/khabar/athar/sunnah), the sanad+matn
  // structure, and the hadith qudsi example (Sahih Muslim 2577, the
  // wahy matluw/ghayr matluw distinction) checked against multiple
  // current Mustalah al-Hadith references before writing.
  // -----------------------------------------------------------
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'Defining Hadith, Sunnah, Khabar, and Athar',
    summary: 'Four closely related terms, and the real distinctions between them.',
    content: [
      {
        heading: 'A precise technical definition',
        body: `Al-hadith refers technically to a report of something the Prophet \ufdfa said, did, or tacitly approved of, including his own physical description and biographical detail. The classical hadith specialist Ibn Hajar al-\u2018Asqalani described this as specifically what is attributed to the Prophet \ufdfa, as distinct from the Qur'an itself, a distinction this course returns to directly in this unit's closing topic.`,
      },
      {
        heading: 'Khabar: a broader, sometimes overlapping term',
        body: `Al-khabar literally means a report or piece of news, and scholars use it in two related but distinct ways. Some treat it as a genuine synonym for hadith. Others reserve hadith specifically for reports about the Prophet \ufdfa, using khabar instead for reports about the Companions and those who came after them, a distinction reflected directly in the traditional title muhaddith, a specialist in the Prophet's \ufdfa own reports, as opposed to ikhbari, a specialist in historical reports more broadly.`,
      },
      {
        heading: 'Athar: typically the sayings of those who came after',
        body: `Al-athar, literally a trace or vestige, most commonly refers to the sayings, rulings, and precedents of the Companions and the generation following them, though it is occasionally used for reports about the Prophet \ufdfa as well. This course generally follows the more common usage: athar for the Companions and their successors, hadith for the Prophet \ufdfa himself.`,
      },
      {
        heading: "As-Sunnah: a term reaching beyond individual reports",
        body: `As-sunnah refers to the normative custom or practice, either of the Prophet \ufdfa personally or of the earliest Muslim community more broadly. While closely related to hadith, sunnah describes an established practice itself, whereas hadith describes the specific reports through which that practice becomes known.`,
      },
      {
        heading: 'Why these distinctions are worth holding precisely',
        body: `These four terms overlap enough in ordinary usage that treating them as fully interchangeable rarely causes real confusion in daily conversation. Studying this science properly, however, requires knowing exactly which term a given scholar intends in a specific technical context, since this same course will draw on hadith, khabar, and athar as genuinely distinct categories in later units, particularly when classifying reports by their own number of narrators.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'Why This Science Exists: Protecting the Prophetic Legacy',
    summary: 'The genuine need that gave rise to a formal science of hadith criticism.',
    content: [
      {
        heading: 'A problem created by success itself',
        body: `As Islam spread rapidly beyond Arabia and the generation who had personally known the Prophet \ufdfa began to pass away, a genuine, practical problem emerged: distinguishing what could be reliably traced back to him from reports that were mistaken, exaggerated, or, in some documented cases, deliberately invented.`,
      },
      {
        heading: "'Ilm al-hadith: a specific, defined discipline in response",
        body: `'Ilm al-hadith, the science of hadith, developed specifically to meet this need. It is defined as the knowledge of the principles by which a narrator and a specific narration are evaluated, so that what is authentically traceable to the Prophet \ufdfa can be identified with real confidence.`,
      },
      {
        heading: 'A goal stated plainly by the scholars themselves',
        body: `This science's own stated goal is direct: to distinguish authentic reports from unreliable ones, so that what Allah actually revealed to His Messenger \ufdfa, whether through the Qur'an or through his own genuine teaching, can be known and acted upon with real confidence rather than guesswork.`,
      },
      {
        heading: 'A discipline built on real scrutiny, not blind acceptance',
        body: `Precisely because fabrication and honest error were both genuine risks, scholars developed specific, rigorous criteria examined throughout this entire course: standards for a narrator's own character and precision, standards for an unbroken chain of transmission, and standards for a text free of contradiction or irregularity. None of these standards were arbitrary; each answers a specific, documented way a report could otherwise mislead its audience about the Prophet's \ufdfa own actual teaching.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns directly to the two structural components every single hadith is actually built from, the components this entire science exists specifically to scrutinize.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'The Two Pillars of Every Hadith: Sanad and Matn',
    summary: 'Chain of narration and text, evaluated independently of one another.',
    content: [
      {
        heading: "Every hadith's own two-part structure",
        body: `Every hadith consists of exactly two components: al-isnad, also called as-sanad, the chain of narrators each reporting from the person before them back to the original source, and al-matn, the actual text or content being transmitted through that chain.`,
      },
      {
        heading: 'Why both halves require separate scrutiny',
        body: `A hadith's overall grading depends on examining sanad and matn as genuinely distinct questions. A specific chain might be judged weak while the very same wording is also transmitted through an entirely different, sound chain elsewhere, meaning the content itself may still be reliably established even though this one specific sanad carrying it is not.`,
      },
      {
        heading: "'Ilm al-hadith's own working definition, restated precisely",
        body: `This course's previous topic already introduced 'ilm al-hadith as the knowledge of principles governing narrator and narration evaluation. Stated more precisely now that sanad and matn have both been introduced directly, this same science examines the narrators making up a given sanad and the wording making up a given matn, applying separate, specific standards to each.`,
      },
      {
        heading: 'A structure this entire course is built around',
        body: `Nearly every unit remaining in this course examines either the sanad side of this structure, the specific qualities required of individual narrators, the connectedness of the chain joining them, and the number of independent chains reporting the same content, or the matn side, the specific qualities required of the wording itself, examined directly in this course's twelfth unit. Holding this basic two-part structure in mind is what makes every later, more specific rule genuinely make sense rather than feeling like an arbitrary, disconnected list.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'Hadith Qudsi: A Special Category',
    summary: "A narration in which the Prophet \ufdfa relates Allah's own words in his own phrasing.",
    content: [
      {
        heading: 'Words from Allah, in the Prophet\u2019s \ufdfa own phrasing',
        body: `Al-hadith al-qudsi, sacred hadith, is a specific category in which the Prophet \ufdfa relates something Allah Himself said, while the actual wording used to convey it is the Prophet's \ufdfa own, not a verbatim quotation received directly as revealed speech the way the Qur'an itself was received.`,
      },
      {
        heading: "A distinction stated precisely: wahy matluw and wahy ghayr matluw",
        body: `The Qur'an is described as wahy matluw, recited revelation, in which both the exact wording and the meaning come directly from Allah, transmitted verbatim through the angel Jibril and recited as an act of worship in its own right. Hadith qudsi, by contrast, is wahy ghayr matluw, non-recited revelation, in which Allah inspired the underlying meaning while the Prophet \ufdfa himself supplied the specific words conveying it.`,
      },
      {
        heading: 'A genuine, well authenticated example',
        body: `Abu Dharr reported that the Prophet \ufdfa said that Allah, exalted is He, said: "O My servants, I have forbidden oppression for Myself and have made it forbidden among you, so do not oppress one another."`,
        verses: [
          {
            type: 'hadith',
            arabic: 'يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا',
            english: 'O My servants, I have forbidden oppression for Myself and have made it forbidden among you, so do not oppress one another.',
            source: 'Sahih Muslim, 2577, a hadith qudsi narrated by Abu Dharr',
          },
        ],
      },
      {
        heading: 'Subject to the exact same scrutiny as any other hadith',
        body: `Despite conveying Allah's own words, a hadith qudsi is not treated as automatically authentic simply because of its elevated subject matter. It remains subject to the identical sanad and matn evaluation already introduced directly in this unit's third topic, and specific hadith qudsi reports can therefore be graded sahih, hasan, or da'if, exactly like any other hadith, categories this course examines directly across its next three units.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: 'The Qur\u2019an and Hadith Together',
    summary: 'Why authentic hadith is necessary for understanding and applying the Qur\u2019an itself.',
    content: [
      {
        heading: "A distinction already established, now put to practical use",
        body: `This unit's fourth topic already distinguished the Qur'an, revealed verbatim and recited in worship, from hadith qudsi's own non-recited revelation. This same basic distinction extends to ordinary hadith as well: the Qur'an supplies Islam's primary text, while authentic hadith supplies the detailed explanation and practical demonstration the Qur'an's own more general statements often require.`,
      },
      {
        heading: 'A concrete example of this same relationship',
        body: `The Qur'an commands prayer directly and repeatedly, yet does not itself specify prayer's exact number of units, its specific movements, or its precise wording. The Prophet's \ufdfa own detailed practice, transmitted through hadith, supplies exactly this missing practical detail, without which the Qur'an's own command would remain genuinely difficult to carry out with any real precision or consistency.`,
      },
      {
        heading: 'Neither functioning properly without the other',
        body: `This relationship runs in both directions. The Qur'an establishes Islam's core content and legal principles, while authentic hadith explains, details, and, at times, further specifies what the Qur'an itself states in broader terms. Neither source realistically functions as a complete, self-sufficient guide to practice entirely on its own, a conclusion the wider Muslim scholarly tradition has held consistently.`,
      },
      {
        heading: 'Why this relationship raises the stakes for this entire science',
        body: `Given how directly hadith shapes the actual practice of Islam, the consequences of accepting an unreliable report, or rejecting a genuinely authentic one, extend well beyond abstract historical interest. This is precisely why the rigorous standards already introduced across this unit, and examined in full detail across this course's remaining thirteen units, exist and are applied with real, sustained care.`,
      },
      {
        heading: "Closing this unit and opening the study of the sanad itself",
        body: `This unit has now covered the precise terminology distinguishing hadith, khabar, athar, and sunnah, the genuine historical need that gave rise to this science, the sanad and matn structure underlying every hadith, hadith qudsi as a specific category, and the Qur'an and hadith's own necessary, complementary relationship. This course's second unit turns directly to the sanad itself in full depth, examining exactly what standards a chain of narration must actually meet.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 2 - THE SANAD: CHAIN OF NARRATION (full content, expanded)
  //
  // The specific conditions of 'adalah (mukallaf, free from fisq,
  // muru'ah), the two kinds of dabt, and the documented Bukhari-
  // versus-Muslim distinction on proven meeting versus mere
  // possibility of meeting, checked against multiple current
  // Mustalah al-Hadith references before writing.
  // -----------------------------------------------------------
  'sanad-1': {
    id: 'sanad-1',
    unit: 'unit-2',
    title: 'What Makes a Sanad Valid',
    summary: 'The overall standard a chain of narration must meet.',
    content: [
      {
        heading: "Returning directly to this course's own first unit",
        body: `This course's first unit already introduced al-isnad, the chain of narrators, as one of the two structural pillars every hadith is built from. This unit now examines exactly what makes a specific sanad genuinely acceptable, rather than merely present.`,
      },
      {
        heading: 'Three requirements, examined across this unit',
        body: `A sound sanad requires three things at once: every individual narrator making up the chain must possess al-'adalah, uprightness of character, and ad-dabt, precision and accuracy in transmission, and the chain connecting these narrators to one another must itself be genuinely unbroken, a condition called al-ittisal.`,
      },
      {
        heading: 'Why all three conditions must hold simultaneously',
        body: `A chain failing even one of these three requirements is compromised, regardless of how well it satisfies the other two. A perfectly connected chain of narrators lacking genuine uprightness offers no real assurance, and an unbroken chain of upright narrators whose memory or written record cannot be trusted offers little more.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's remaining three topics examine each of these three requirements directly in turn: al-'adalah, ad-dabt, and finally al-ittisal, the specific connectedness requirement distinguishing a genuinely sound chain from one merely appearing complete on the page.`,
      },
    ],
  },

  'sanad-2': {
    id: 'sanad-2',
    unit: 'unit-2',
    title: "Al-'Adalah: Uprightness of the Narrator",
    summary: 'The moral and religious integrity a narrator must demonstrate.',
    content: [
      {
        heading: 'Three specific conditions, not a vague general impression',
        body: `Al-'adalah is defined through three specific, examinable conditions rather than a loose overall sense of good character: being mukallaf, free from fisq, and free from anything damaging one's own muru'ah.`,
      },
      {
        heading: 'Al-taklif: being sane and having reached maturity',
        body: `Being mukallaf means a narrator must be 'aqil, of sound mind, and baligh, having reached the age of religious accountability. A report from someone lacking either of these two qualities does not meet this basic threshold at all.`,
      },
      {
        heading: 'Freedom from fisq: no pattern of open, serious sin',
        body: `A narrator must be free from fisq, openly committing major sins or persisting in them without genuine restraint. This condition concerns a narrator's own demonstrated religious commitment, since a pattern of open disregard for one's own obligations reasonably raises doubt about the same person's care in transmitting something as significant as the Prophet's \ufdfa own words.`,
      },
      {
        heading: 'Muru\u2019ah: avoiding what damages one\u2019s own standing',
        body: `A narrator must also avoid khawarim al-muru'ah, behavior damaging one's own basic sense of dignity and social standing, even where this behavior falls short of outright sin. Imam al-Bukhari is reported to have declined to accept hadith from a man observed eating in the street, not because eating itself is sinful, but because this specific act was judged, within that time and place, to reflect a lapse in the ordinary dignity expected of someone whose reports would be relied upon so heavily.`,
      },
      {
        heading: "Setting up this unit's next topic",
        body: `'Adalah alone, however, only addresses a narrator's own character. This unit's next topic turns to ad-dabt, the second, entirely separate requirement concerning a narrator's actual capacity to transmit what they received accurately.`,
      },
    ],
  },

  'sanad-3': {
    id: 'sanad-3',
    unit: 'unit-2',
    title: 'Ad-Dabt: Precision and Accuracy',
    summary: 'The intellectual and memorial reliability a narrator must demonstrate.',
    content: [
      {
        heading: 'A separate question from character entirely',
        body: `Ad-dabt concerns a narrator's actual capacity to receive, retain, and accurately reproduce what they were taught, a genuinely separate question from al-'adalah, already covered directly in this unit's previous topic. A person of impeccable character who simply cannot reliably remember or record what they heard still fails this second, independent requirement.`,
      },
      {
        heading: "Dabt as-sadr: precision of memory",
        body: `Dabt as-sadr describes a narrator who has genuinely memorized a hadith with real precision, retains it faithfully from the moment of first hearing it until the moment of narrating it, and can produce it accurately whenever asked, without needing to reconstruct or guess at its content.`,
      },
      {
        heading: "Dabt al-kitab: precision of the written record",
        body: `Dabt al-kitab describes a narrator who instead relies on an accurately written record, correctly transcribed at the time and carefully preserved afterward against corruption, error, or later tampering. A narrator satisfying either form of dabt, memory or written preservation, meets this same overall requirement.`,
      },
      {
        heading: 'A genuine, practical consequence worth naming directly',
        body: `This precise standard carries real, direct consequences examined further in this course's third unit: a hadith whose narrators satisfy 'adalah fully but whose dabt is judged slightly weaker than the highest standard is generally graded hasan rather than sahih, a real but comparatively modest difference, since hasan hadith remains fully usable for practice according to the overwhelming majority of scholars.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `With both 'adalah and dabt now covered as requirements placed on each individual narrator, this unit's closing topic turns to al-ittisal, a requirement placed instead on the chain connecting these narrators to one another.`,
      },
    ],
  },

  'sanad-4': {
    id: 'sanad-4',
    unit: 'unit-2',
    title: 'Al-Ittisal: Connectedness of the Chain',
    summary: 'Why every link in a sanad must be genuinely unbroken.',
    content: [
      {
        heading: "A requirement placed on the chain itself, not any single narrator",
        body: `Al-ittisal requires that each narrator in a sanad actually received the hadith directly from the person immediately before them in that same chain, with no missing or merely assumed link anywhere along its length.`,
      },
      {
        heading: 'A genuinely fascinating point of scholarly precision',
        body: `Imam Muslim and Imam al-Bukhari, the two scholars behind what this course's eleventh unit will cover as as-Sahihayn, the two most rigorously regarded collections, applied genuinely different standards for confirming this exact connectedness.`,
      },
      {
        heading: "Muslim's own stated condition",
        body: `Imam Muslim considered a chain sufficiently connected once two consecutive narrators were established as contemporaries, alive during the same period, with a realistic possibility that they could have met, even without direct documented proof that an actual meeting took place.`,
      },
      {
        heading: "Al-Bukhari's own stricter condition",
        body: `Imam al-Bukhari required considerably more: documented proof that two consecutive narrators had genuinely met at least once, not merely that such a meeting was possible given their shared lifetimes. This specific difference is a major reason Sahih al-Bukhari is often regarded as marginally more stringent even than Sahih Muslim, despite both standing together at the very top of hadith reliability.`,
      },
      {
        heading: "Closing this unit: three requirements, one complete standard",
        body: `This unit has now covered all three requirements a sound sanad must satisfy: al-'adalah, examined through taklif, freedom from fisq, and muru'ah, ad-dabt, examined through both memory and written preservation, and al-ittisal, examined through this genuinely instructive difference between two of the most careful scholars this science ever produced. This course's third unit turns directly to sahih and hasan, the two gradings a hadith actually earns once these same requirements have been properly verified.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 3 - SAHIH AND HASAN (full content, expanded)
  //
  // The five conditions of sahih, and the precise mechanism of
  // sahih li-ghayrihi (specifically a hasan li-dhatihi hadith
  // elevated through corroboration, not any weak hadith generally)
  // checked against multiple current Mustalah al-Hadith references
  // before writing.
  // -----------------------------------------------------------
  'sahih-1': {
    id: 'sahih-1',
    unit: 'unit-3',
    title: 'Conditions of Sahih Hadith',
    summary: 'The five specific conditions a hadith must meet to be graded authentic.',
    content: [
      {
        heading: "Three conditions already covered, two still remaining",
        body: `A hadith earns the grading sahih, authentic, once it satisfies exactly five conditions. This course's second unit already covered the first three directly: al-ittisal, a genuinely unbroken chain, al-'adalah, upright narrators, and ad-dabt, precise and accurate narrators.`,
      },
      {
        heading: "The fourth condition: 'adam ash-shudhudh",
        body: `The fourth condition, 'adam ash-shudhudh, freedom from irregularity, requires that the hadith not contradict a narration transmitted by narrators more reliable than the ones in this specific chain. A report meeting every other requirement can still fail this specific test if a more trustworthy chain reports the same event differently.`,
      },
      {
        heading: "The fifth condition: 'adam al-'illah al-qadihah",
        body: `The fifth condition, 'adam al-'illah al-qadihah, freedom from a hidden, discrediting defect, requires the complete absence of a subtle flaw undermining an otherwise apparently sound chain, a flaw detectable only through the kind of specialized scrutiny this course's seventh unit examines directly.`,
      },
      {
        heading: 'All five conditions brought together for the first time',
        body: `A hadith is graded sahih specifically once all five of these conditions are genuinely satisfied together: ittisal, 'adalah, and dabt, already covered directly across this course's second unit, together with 'adam ash-shudhudh and 'adam al-'illah al-qadihah, examined here for the first time and given their own full, dedicated treatment across this course's seventh unit.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns to hasan, a grading meeting this same overall standard with one specific, limited exception.`,
      },
    ],
  },

  'sahih-2': {
    id: 'sahih-2',
    unit: 'unit-3',
    title: 'Hasan Hadith: One Step Below Sahih',
    summary: 'A grading still fully acceptable for practice, differing in narrator precision.',
    content: [
      {
        heading: 'A single, specific difference from sahih',
        body: `A hasan hadith satisfies every one of the five conditions already covered directly in this unit's previous topic, with exactly one exception: its narrators' dabt, precision, is genuinely lighter than the standard sahih requires, though still well within an acceptable, reliable range rather than approaching genuine unreliability.`,
      },
      {
        heading: 'Not a rejected or seriously doubted grading',
        body: `This single difference does not place hasan hadith anywhere near rejection. The overwhelming majority of jurists and hadith specialists accept hasan hadith as genuine evidence, usable for establishing rulings in essentially the same way sahih hadith is used, precisely because 'adalah, ittisal, freedom from shudhudh, and freedom from 'illah qadihah all remain fully intact.`,
      },
      {
        heading: "A grading distinguished by degree, not by kind",
        body: `Sahih and hasan are best understood as sitting on the same underlying scale rather than as two fundamentally different categories, both satisfying the same core structural requirements, differing only in exactly how strong one specific narrator quality, dabt, happens to be within an already generally reliable chain.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's remaining two topics turn to a further, genuinely important refinement within both sahih and hasan alike: whether a specific hadith reaches its own grading entirely through its own single chain, or instead reaches that grading with real help from another, independent chain reporting the same content.`,
      },
    ],
  },

  'sahih-3': {
    id: 'sahih-3',
    unit: 'unit-3',
    title: 'Sahih li-Dhatihi and Sahih li-Ghayrihi',
    summary: 'Authentic in its own right, versus authentic through supporting chains.',
    content: [
      {
        heading: 'Sahih li-dhatihi: authenticity requiring no outside help',
        body: `Sahih li-dhatihi, authentic in itself, describes a hadith reaching the full sahih standard, already covered directly across this unit's first topic, entirely through its own single chain, with no need whatsoever for any additional, corroborating narration to support it.`,
      },
      {
        heading: 'A specific, narrower path to the same overall grading',
        body: `Sahih li-ghayrihi, authentic due to another, describes something more specific than simply any weak hadith becoming strong through repetition. It refers specifically to a hadith that was already hasan li-dhatihi, examined directly in this unit's closing topic, on the strength of its own single chain alone, and is then elevated specifically to sahih once an independent, separate chain of similar or greater strength reports the same content.`,
      },
      {
        heading: 'Why this elevation genuinely makes sense',
        body: `A hadith's only shortfall from full sahih status was its narrators' comparatively lighter dabt, already covered directly in this unit's second topic, not any deeper problem with their character or the chain's own connectedness. An independent chain reporting the identical content meaningfully reduces the realistic likelihood that this specific piece of content was affected by that narrower memory limitation, since two genuinely separate chains converging on the same wording is considerably harder to attribute to a shared, coincidental error.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `This same underlying logic, corroboration compensating for an otherwise narrower shortfall, applies one grade further down as well, examined directly in this unit's closing topic.`,
      },
    ],
  },

  'sahih-4': {
    id: 'sahih-4',
    unit: 'unit-3',
    title: 'Hasan li-Dhatihi and Hasan li-Ghayrihi',
    summary: 'The same distinction applied one grade further down.',
    content: [
      {
        heading: "Hasan li-dhatihi: already covered directly",
        body: `Hasan li-dhatihi, good in itself, is simply the hasan grading already covered directly across this unit's second topic, reached entirely through a hadith's own single chain, without requiring any outside corroboration at all.`,
      },
      {
        heading: 'Hasan li-ghayrihi: a genuinely different starting point',
        body: `Hasan li-ghayrihi, good due to another, begins from a considerably weaker starting point than sahih li-ghayrihi did in this unit's previous topic. Rather than starting from an already hasan hadith, hasan li-ghayrihi begins from a da'if hadith, a weak hadith already introduced briefly in this course's first unit and examined fully across this course's fourth unit, carrying only a comparatively minor weakness rather than a severe, disqualifying one.`,
      },
      {
        heading: 'How corroboration elevates this specific kind of weakness',
        body: `When this same content is also reported through one or more further chains of similar or greater strength, this convergence can elevate the overall hadith from da'if specifically to hasan li-ghayrihi, though notably not all the way to sahih, since the underlying weakness being compensated for here is more serious than the narrower dabt shortfall already covered in this unit's third topic regarding sahih li-ghayrihi.`,
      },
      {
        heading: 'Why this specific limit matters, and what it sets up directly',
        body: `Corroboration genuinely helps, but it does not erase every kind of weakness equally. A minor weakness can be meaningfully offset through independent support; a more serious one, examined directly across this course's fourth unit, generally cannot be repaired this same way, however many additional chains happen to report it.`,
      },
      {
        heading: "Closing this unit and turning to weakness and fabrication directly",
        body: `This unit has now covered all five conditions of sahih, hasan as a grading differing from sahih by exactly one specific measure, and the li-dhatihi and li-ghayrihi distinction applied at both levels, corroboration elevating an already hasan hadith to sahih, and corroboration elevating a mildly weak hadith to hasan. This course's fourth unit turns directly to da'if and mawdu', examining exactly what causes a hadith to fall short of even these more modest standards, and where, if anywhere, corroboration of this same kind genuinely reaches its own limits.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 4 - DA'IF AND MAWDU' (full content, expanded)
  //
  // Ibn Hajar al-'Asqalani's three conditions for using da'if
  // hadith, the genuine scholarly disagreement surrounding this
  // (Imam Ahmad, Ibn Hazm), and the well-documented fabrication
  // confession of Nuh ibn Abi Maryam, checked against multiple
  // current Mustalah al-Hadith references before writing.
  // -----------------------------------------------------------
  'daif-1': {
    id: 'daif-1',
    unit: 'unit-4',
    title: 'Causes of Weakness in a Hadith',
    summary: 'The specific defects that prevent a hadith from reaching hasan.',
    content: [
      {
        heading: "A definition stated by elimination",
        body: `Ibn as-Salah defined al-hadith ad-da'if, the weak hadith, simply as any narration failing to meet the conditions of either hasan or sahih, already covered fully across this course's third unit. A hadith requires only one genuine failure among these conditions to fall into this category, regardless of how well it satisfies every other requirement.`,
      },
      {
        heading: 'Weakness located in the sanad',
        body: `Weakness frequently arises within the sanad itself, either through a specific narrator failing 'adalah or dabt, already covered directly across this course's second unit, or through a genuine break somewhere in the chain's own connectedness, a category this course's sixth unit examines in real detail through its several specific named forms.`,
      },
      {
        heading: 'Weakness located in the matn',
        body: `Weakness can instead, or additionally, arise within the matn, the hadith's own text, through shudhudh, contradicting more reliable narrators, or through a genuinely hidden 'illah, both already introduced directly across this course's third unit and examined in further depth across this course's seventh unit.`,
      },
      {
        heading: 'Not every weakness is equally serious',
        body: `Da'if hadith themselves vary considerably in how weak they actually are. A narrator with a documented but relatively minor memory lapse produces a genuinely different situation from a narrator known to fabricate material outright, even though both technically fall short of hasan. This distinction, minor weakness against severe weakness, becomes directly important across this unit's remaining topics.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns to a genuinely significant, actively debated question this distinction makes possible: whether, and under what conditions, a da'if hadith might still be used at all.`,
      },
    ],
  },

  'daif-2': {
    id: 'daif-2',
    unit: 'unit-4',
    title: 'The Ruling on Acting Upon Da\u2019if Hadith',
    summary: 'Where scholars genuinely differ, and the conditions often attached.',
    content: [
      {
        heading: 'A near-consensus on legal rulings and creed',
        body: `Scholars broadly agree that da'if hadith should not be used to establish legal rulings or matters of creed, both of which require the firmer footing already covered directly across this course's third unit, sahih or hasan.`,
      },
      {
        heading: 'A genuinely different question for virtuous deeds',
        body: `A separate, more actively discussed question concerns fada'il al-a'mal, the virtues of good deeds, encouragement toward recommended acts, and warning against discouraged ones. A considerable number of scholars, including Sufyan ath-Thawri, Ibn al-Mubarak, and Ahmad ibn Hanbal according to some of his own reported positions, permitted using da'if hadith specifically within this narrower scope.`,
      },
      {
        heading: 'Three conditions attached to this specific permission',
        body: `Ibn Hajar al-'Asqalani formulated three conditions governing this exact permission: the weakness must not be severe, excluding any narration involving a known liar or someone accused of serious fabrication, the hadith's own content must already be supported by an established general principle elsewhere in Islamic teaching, rather than introducing something genuinely new, and a person acting upon it must not hold firm conviction that the Prophet \ufdfa definitely said these exact words.`,
      },
      {
        heading: 'A genuine, honest disagreement worth naming directly',
        body: `Not every scholar accepted even this limited permission. Ibn Hazm, along with a report attributed to Imam Ahmad himself in some transmissions, rejected using da'if hadith altogether, including for virtuous deeds, holding that only sahih and hasan material should ever be presented as reflecting the Prophet's \ufdfa own genuine teaching.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Whatever position a scholar holds on this specific question, every position agrees on one further point without exception: this entire discussion concerns da'if hadith specifically, and does not extend even slightly to this unit's next, considerably more serious category.`,
      },
    ],
  },

  'daif-3': {
    id: 'daif-3',
    unit: 'unit-4',
    title: "Al-Mawdu': The Fabricated Hadith",
    summary: 'A report falsely invented and attributed to the Prophet \ufdfa.',
    content: [
      {
        heading: 'A category fundamentally different from weakness',
        body: `Al-hadith al-mawdu' describes a report deliberately invented and falsely attributed to the Prophet \ufdfa, something he never actually said, did, or approved of at all. This differs fundamentally from da'if, already covered directly across this unit's earlier topics, which concerns a genuine transmission of something real, imperfectly preserved, rather than an outright invention with no real connection to him whatsoever.`,
      },
      {
        heading: 'Why some scholars question calling it "hadith" at all',
        body: `Precisely because a mawdu' report has no actual connection to the Prophet \ufdfa, a number of scholars have questioned whether it should even be classified as a genuine category of hadith in the first place, since the entire science this course studies exists specifically to evaluate reports that might genuinely trace back to him, not statements invented and attached to his name after the fact.`,
      },
      {
        heading: 'A firm, essentially unanimous ruling',
        body: `Scholars hold an essentially unanimous position that mawdu' material must never be presented as the Prophet's \ufdfa own genuine teaching under any circumstance, including for virtuous deeds, a specific exception this unit's previous topic already showed some scholars extending even to da'if material. Where fabricated material must be mentioned at all, it must be identified plainly and directly as fabricated.`,
      },
      {
        heading: 'A firm line worth restating directly',
        body: `The considerable scholarly disagreement already covered directly in this unit's previous topic concerns only da'if hadith. No comparable disagreement exists regarding mawdu' material: every position discussed across this entire course treats fabrication as categorically excluded from genuine practice or belief.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `Given how seriously fabrication is treated, this unit's closing topic turns to a genuinely difficult historical question: why fabrication occurred at all, and how scholars actually managed to detect and catalog it.`,
      },
    ],
  },

  'daif-4': {
    id: 'daif-4',
    unit: 'unit-4',
    title: 'Why Fabrication Occurred and How Scholars Detected It',
    summary: 'The historical motives behind fabrication and the tools used against it.',
    content: [
      {
        heading: 'Several genuinely different motives, not one single cause',
        body: `Fabrication arose from several genuinely different motives: outright hostility toward Islam from certain opponents seeking to damage it from within, personal or tribal rivalry, seeking favor from a specific ruler or faction, and, perhaps most unsettling of all, a genuinely misguided sense of piety.`,
      },
      {
        heading: 'A documented, honest confession illustrating this last motive directly',
        body: `Nuh ibn Abi Maryam, when asked directly where he obtained a specific set of narrations describing rewards for reciting each individual chapter of the Qur'an, reportedly confessed openly: he had observed people neglecting the Qur'an itself in favor of Abu Hanifah's legal rulings and Ibn Ishaq's accounts of military campaigns, and fabricated these specific narrations hoping to draw people back toward the Qur'an.`,
      },
      {
        heading: 'Why this specific account matters so directly',
        body: `This account is recorded as containing the fabricator's own further, deeply troubling justification: that he was "lying for the Prophet \ufdfa, not against him." This distinction offered no genuine protection whatsoever, since fabricating any statement and attributing it to the Prophet \ufdfa remains a serious falsehood regardless of the fabricator's own stated intention, however sincerely that intention might have been held.`,
      },
      {
        heading: 'Tools scholars developed specifically in response',
        body: `Scholars developed several specific tools to detect exactly this kind of material: 'ilm ar-rijal, examined in full across this course's eighth unit, allowing a fabricator's own documented unreliability to be identified directly, careful comparison against the Qur'an and already established, reliably authenticated sunnah, and attention to a text's own internal content for anachronism, exaggeration, or open contradiction with known fact.`,
      },
      {
        heading: "Closing this unit and turning to number-based classification",
        body: `Entire works were compiled specifically cataloging fabricated material and identifying known fabricators directly, Ibn al-Jawzi's Kitab al-Mawdu'at foremost among them. This unit has now covered the specific causes of ordinary weakness, the genuine scholarly disagreement over using da'if hadith for virtuous deeds, mawdu' as a categorically different and firmly rejected class, and the real historical motives behind fabrication alongside the tools developed against it. This course's fifth unit turns to a different question entirely: classifying hadith not by their own reliability, but by how many independent narrators actually transmitted them.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 5 - CLASSIFICATION BY NUMBER OF NARRATORS (full content,
  // expanded)
  //
  // The mutawatir lafzi/ma'nawi distinction with real examples, the
  // honest scholarly debate over whether true tawatur is ever fully
  // achieved in practice, and the mashhur/'aziz/gharib subdivisions
  // (including the rule that a chain's weakest point determines its
  // classification) checked against multiple current Mustalah
  // al-Hadith references before writing.
  // -----------------------------------------------------------
  'adad-1': {
    id: 'adad-1',
    unit: 'unit-5',
    title: 'Al-Mutawatir: The Mass-Transmitted Hadith',
    summary: 'A report transmitted by so many independent narrators that collusion on a lie becomes inconceivable.',
    content: [
      {
        heading: 'A genuinely different question from everything covered so far',
        body: `This course's second, third, and fourth units all examined a hadith's reliability through its own individual narrators and their own individual chain. This unit turns to a genuinely different question entirely: how many separate, independent narrators actually transmitted a given report at each stage of its own history.`,
      },
      {
        heading: 'A definition centered on collusion becoming inconceivable',
        body: `Al-mutawatir describes a report transmitted, at every single generation from the Prophet \ufdfa onward, by a group of narrators so large and so genuinely independent of one another that their collectively agreeing upon a shared lie becomes practically inconceivable.`,
      },
      {
        heading: 'No single, universally fixed minimum number',
        body: `Scholars have not settled on one specific, universally agreed minimum count of narrators required for tawatur. What matters instead is whether the actual scale and independence of transmission genuinely rules out coordinated fabrication in a given case, a standard depending on real circumstance rather than a fixed arithmetic threshold.`,
      },
      {
        heading: 'Two recognized forms of mutawatir',
        body: `Mutawatir lafzi describes a report transmitted through numerous independent chains all agreeing on identical wording, such as the widely narrated statement warning against deliberately attributing a false statement to the Prophet \ufdfa, reported through several dozen separate chains of companions. Mutawatir ma'nawi describes a report transmitted through numerous chains that differ in their specific wording while still converging on the same underlying meaning, such as the general, broadly attested practice of the daily prayers themselves.`,
      },
      {
        heading: 'An honest note on how rare this actually is',
        body: `Reports genuinely meeting this full standard are considerably rarer than casual usage of the term sometimes suggests. Some scholars, Ibn Hibban among them, have gone so far as to question whether any hadith fully satisfies every strict condition of tawatur at all, while most others acknowledge the category exists in principle while agreeing that relatively few specific hadith actually reach it. Mutawatir hadith, where genuinely established, yields certain knowledge and does not require the same individual chain-by-chain scrutiny this course's second and third units already examined in depth.`,
      },
    ],
  },

  'adad-2': {
    id: 'adad-2',
    unit: 'unit-5',
    title: 'Al-Ahad: The Solitary Report',
    summary: 'Any hadith not reaching the threshold of tawatur.',
    content: [
      {
        heading: 'The category nearly everything studied so far actually belongs to',
        body: `Al-ahad, also called khabar al-wahid, describes any hadith failing to reach the mutawatir threshold already covered directly in this unit's previous topic. Given how rare genuine tawatur actually is, the overwhelming majority of hadith, including virtually every specific example already used across this entire course, fall within this same broader category.`,
      },
      {
        heading: 'Why this connects directly back to this course\u2019s earlier units',
        body: `Ahad hadith is precisely the category requiring the individual sanad scrutiny this course's second, third, and fourth units examined in such depth, 'adalah, dabt, ittisal, and the resulting sahih, hasan, and da'if gradings. Mutawatir hadith, by contrast, achieves certainty through sheer independent volume alone, without needing this same individual chain-by-chain evaluation.`,
      },
      {
        heading: 'A genuine, honest difference over the resulting certainty',
        body: `The majority position, held by Ibn Hajar al-'Asqalani among others, holds that ahad hadith yields only probable rather than absolute certainty, unless independently corroborated to an unusually strong degree, though sahih ahad hadith remains fully actionable for practice regardless. A minority position, associated with Dawud az-Zahiri and Ibn Hazm, held that sound ahad hadith can achieve genuine certainty as well.`,
      },
      {
        heading: 'A specific, practical form this same corroboration can take',
        body: `Even a report technically ahad, or even gharib specifically, examined directly in this unit's closing topic, at some point in its chain, can still reach a genuinely elevated practical standing through talaqqi al-ummah bi al-qabul, the wider Muslim community's own broad, sustained acceptance without serious objection, a real factor in why material found within Sahih al-Bukhari and Sahih Muslim, examined directly across this course's eleventh unit, is generally treated with such strong assurance despite many individual hadith within them being technically ahad in their own chains.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `This unit's closing topic turns to three further, more specific categories existing entirely within ahad itself, distinguishing solitary reports from one another according to exactly how many narrators transmitted them at each stage.`,
      },
    ],
  },

  'adad-3': {
    id: 'adad-3',
    unit: 'unit-5',
    title: "Subdivisions of Ahad: Mashhur, 'Aziz, Gharib",
    summary: 'Three further categories distinguishing solitary reports from one another.',
    content: [
      {
        heading: "Al-mashhur: three or more, at every generation",
        body: `Al-mashhur, well known, describes an ahad hadith narrated by three or more separate narrators at every single generation of its chain, while still genuinely falling short of the far larger scale already covered directly in this unit's first topic as mutawatir.`,
      },
      {
        heading: "Al-'aziz: exactly two, at minimum, at every generation",
        body: `Al-'aziz, rare or mighty, describes an ahad hadith in which at least two narrators are found at every generation of its chain, more than the single narrator defining gharib, examined directly next in this same topic, but not reaching mashhur's own three-narrator threshold.`,
      },
      {
        heading: 'Al-gharib: a single narrator at some point, despite the name',
        body: `Al-gharib, strange or solitary, describes an ahad hadith in which only a single narrator is found at some specific point in its chain, even if other points along that same chain happen to include several narrators. Despite its name suggesting rarity of content, gharib is, in practice, the single most common of these three subdivisions, since a chain narrowing to one narrator at even a single generation is a genuinely common occurrence.`,
      },
      {
        heading: "A specific rule worth stating directly: the weakest point decides",
        body: `A chain's own classification among these three categories is determined by its single weakest generation, not by its strongest or its average. A chain with three narrators at every generation except one, where only a single narrator appears, is classified as gharib overall, not mashhur, since that one narrow point governs the entire chain's classification.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'العِبْرَةُ فِي تَصْنِيفِ السَّنَدِ بِأَضْعَفِ طَبَقَاتِهِ لَا بِأَقْوَاهَا',
            transliteration: "al-\u2018ibratu fi tasnifi s-sanadi bi-ad\u2018afi tabaqatihi la bi-aqwaha",
            english: "A chain's classification is determined by its weakest generation, not its strongest.",
            source: 'The governing rule for classifying mashhur, \u2018aziz, and gharib',
          },
        ],
      },
      {
        heading: "Closing this unit and turning to the chain's own connectedness",
        body: `This unit has now covered mutawatir as the rare, certainty-producing category achieved purely through overwhelming independent volume, ahad as the far more common category this entire course's earlier scrutiny actually applies to, and mashhur, 'aziz, and gharib as three further subdivisions distinguishing ahad reports by their own specific narrator count at each generation. This course's sixth unit turns directly to a different structural question already flagged briefly across this course's first and fourth units: whether a chain is genuinely connected at all, and the several specific, named ways it can instead fall short.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 6 - CONNECTED AND DISCONNECTED CHAINS (full content,
  // expanded)
  //
  // The precise, distinct definitions of munqati' (single break,
  // anywhere), mu'dal (two or more consecutive breaks), mursal
  // (missing Companion specifically), and mu'allaq (missing from
  // the chain's own start), including the real Bukhari mu'allaq
  // example and the Maliki/Hanafi leniency toward mursal from
  // specific trusted narrators, checked against multiple current
  // Mustalah al-Hadith references before writing.
  // -----------------------------------------------------------
  'ittisal-1': {
    id: 'ittisal-1',
    unit: 'unit-6',
    title: 'Al-Muttasil: The Connected Chain',
    summary: 'A sanad with no missing link from beginning to end.',
    content: [
      {
        heading: "Returning to a standard already established",
        body: `Al-muttasil, the connected chain, describes a sanad already meeting al-ittisal, the third requirement covered directly across this course's second unit: every narrator genuinely received the hadith directly from the person immediately before them, with no missing or merely assumed link anywhere along the chain's own length.`,
      },
      {
        heading: 'A single positive standard, several distinct ways to fail it',
        body: `This unit's remaining four topics each examine a specific, precisely named way a chain can fail to reach this same muttasil standard. These four categories are genuinely distinct from one another, differing in exactly how many narrators are missing, and precisely where in the chain that gap actually occurs.`,
      },
      {
        heading: "A recalled distinction worth keeping in mind throughout",
        body: `This course's second unit already showed that even scholars as careful as Imam al-Bukhari and Imam Muslim applied different standards for confirming genuine connection between two consecutive narrators. The categories examined across this unit's remaining topics describe chains failing this same connection requirement outright, rather than differing only in how strictly that requirement was verified.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns to al-munqati', the single most general term for a chain failing this standard, before this unit's remaining three topics examine three further, considerably more specific categories.`,
      },
    ],
  },

  'ittisal-2': {
    id: 'ittisal-2',
    unit: 'unit-6',
    title: "Al-Munqati': A Broken Link",
    summary: 'A chain missing one narrator at any point other than its very start.',
    content: [
      {
        heading: 'The most general term for a genuine break',
        body: `Al-munqati', literally disconnected, describes a chain missing exactly one narrator at some specific point, wherever that single point happens to occur along the chain's own length, distinct from the more specific categories this unit's remaining topics examine.`,
      },
      {
        heading: 'A single missing link, not a consecutive gap',
        body: `This category specifically concerns a single missing narrator at any one location. Where two or more consecutive narrators are missing together, the chain instead falls under a different, more specific category, examined directly in this unit's next topic.`,
      },
      {
        heading: 'Why this category functions as the general umbrella term',
        body: `Munqati' serves as the broadest, most general label for a genuine break in connectivity, while mu'dal, mursal, and mu'allaq, examined directly across this unit's remaining three topics, each describe a specific, more precisely defined variety of this same underlying problem, distinguished by exactly how many narrators are missing and precisely where.`,
      },
      {
        heading: "Setting up this unit's next topic",
        body: `This unit's next topic turns to mu'dal, the specific category reserved for a chain missing two or more narrators consecutively, a more serious gap than munqati's own single missing link.`,
      },
    ],
  },

  'ittisal-3': {
    id: 'ittisal-3',
    unit: 'unit-6',
    title: "Al-Mu'dal: Two or More Consecutive Missing Links",
    summary: 'A more serious break than munqati\u2019, with consecutive narrators missing.',
    content: [
      {
        heading: 'A more serious gap than munqati\u2019 specifically',
        body: `Al-mu'dal, literally difficult or severely broken, describes a chain missing two or more consecutive narrators at the same point, distinguished directly from munqati', already covered in this unit's previous topic, specifically by this consecutive quality rather than by the missing narrators' own total count.`,
      },
      {
        heading: 'A genuine, specific exception worth naming honestly',
        body: `A later jurist simply stating, "the Prophet \ufdfa said," while drawing on or citing an established point rather than genuinely claiming to transmit a direct chain of narration, is not considered mu'dal at all. This specific situation reflects citation and argument, not an actual, failed attempt at transmission, and is therefore excluded from this category entirely.`,
      },
      {
        heading: 'Why the consecutive quality specifically matters',
        body: `Two narrators missing consecutively removes an entire, uninterrupted stretch of the chain's own verification at once, a more serious gap than two separate, single missing narrators occurring at different, unconnected points, which would instead be described using munqati' at each of those separate locations.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's remaining two topics turn to two further categories, distinguished not by how many narrators are missing, but by precisely where in the chain that specific gap occurs.`,
      },
    ],
  },

  'ittisal-4': {
    id: 'ittisal-4',
    unit: 'unit-6',
    title: "Al-Mursal: When a Tabi'i Narrates Directly from the Prophet \ufdfa",
    summary: 'A chain skipping the Companion generation entirely.',
    content: [
      {
        heading: 'A gap at one specific, named location',
        body: `Al-mursal describes a chain in which a tabi'i, a Successor, already introduced directly across this course's first unit, narrates directly from the Prophet \ufdfa, entirely omitting the specific Companion this same Successor would ordinarily have heard the report from.`,
      },
      {
        heading: 'A useful way to remember this specific location',
        body: `Mursal is missing its link at the end of the chain, nearest the Prophet \ufdfa himself, the exact opposite end from mu'allaq, examined directly in this unit's closing topic, which instead goes missing at the chain's own beginning, nearest the person actually compiling the hadith.`,
      },
      {
        heading: 'A genuine, documented reason for real leniency',
        body: `Several scholars, including Malik ibn Anas and Abu Hanifah, treated mursal reports with real leniency, particularly when transmitted by a widely trusted Successor such as Sa'id ibn al-Musayyib, reasoning that the specific missing narrator would almost certainly have been a Companion, a category already understood as carrying strong, general uprightness by virtue of direct contact with the Prophet \ufdfa himself.`,
      },
      {
        heading: "A stricter position, held just as genuinely",
        body: `Imam ash-Shafi'i and a considerable number of dedicated hadith specialists held a stricter position, generally treating mursal as da'if unless independently supported by further evidence, since a missing narrator, whoever they may have actually been, still represents a genuine, unverified gap in the chain's own documented connection.`,
      },
    ],
  },

  'ittisal-5': {
    id: 'ittisal-5',
    unit: 'unit-6',
    title: "Al-Mu'allaq: A Chain Missing from the Start",
    summary: 'A chain dropped from its own beginning rather than elsewhere.',
    content: [
      {
        heading: 'The opposite end from mursal, exactly as already noted',
        body: `Al-mu'allaq, literally hanging or suspended, describes a chain missing one or more narrators from its own very beginning, the end nearest whoever is actually compiling or citing the hadith, rather than the end nearest the Prophet \ufdfa already covered directly in this unit's previous topic through mursal.`,
      },
      {
        heading: 'A concrete, real example',
        body: `Imam al-Bukhari occasionally wrote something equivalent to, "it is narrated from Ibn Abbas that...", without stating his own specific chain connecting himself back to Ibn Abbas at that exact point, precisely the structure defining mu'allaq.`,
      },
      {
        heading: 'Why this does not automatically weaken Sahih al-Bukhari itself',
        body: `Most mu'allaq narrations within Sahih al-Bukhari are still considered sahih, since Bukhari himself had already verified and connected these same reports through a complete chain elsewhere, either later in that same book or within his own other works, shortening this specific citation deliberately rather than genuinely losing track of the chain.`,
      },
      {
        heading: 'A useful point of contrast worth naming directly',
        body: `Sahih Muslim, by contrast, contains only a single mu'allaq hadith, and Imam Muslim himself did not consider this specific report part of his own actual collection in the fullest sense, illustrating how differently even two scholars working within the same overall standard of rigor handled this exact same structural situation.`,
      },
      {
        heading: "Closing this unit and turning to hidden defects directly",
        body: `This unit has now covered muttasil as the positive standard already established directly across this course's second unit, and four specific, precisely distinguished ways a chain can fail to reach it: munqati's single, generic break, mu'dal's consecutive double break, mursal's specific gap at the Companion generation, and mu'allaq's specific gap at the chain's own beginning. This course's seventh unit turns to a considerably more difficult category still: hidden defects undermining a chain that, on its own surface, appears to be genuinely, fully connected.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 7 - HIDDEN AND SUBTLE DEFECTS (full content, expanded)
  //
  // The shadh-versus-munkar distinction (reliable versus weak
  // narrator contradicting more reliable narrators), the distinct
  // concept of ziyadat ath-thiqah (an accepted, non-contradicting
  // addition), a real documented mudraj example (Abu Hurairah's own
  // commentary merged into a hadith text), and the maqlub/mudtarib
  // definitions checked against multiple current Mustalah al-Hadith
  // references before writing.
  // -----------------------------------------------------------
  'illah-1': {
    id: 'illah-1',
    unit: 'unit-7',
    title: "Al-'Illah: The Hidden Defect",
    summary: 'A subtle flaw undermining an otherwise apparently sound hadith.',
    content: [
      {
        heading: "Returning directly to this course's third unit",
        body: `This course's third unit already named 'adam al-'illah al-qadihah, freedom from a hidden, discrediting defect, as the fifth condition of sahih. This unit now examines exactly what this specific kind of defect actually is, and how specialists actually go about detecting it.`,
      },
      {
        heading: 'A defect invisible on the chain\u2019s own surface',
        body: `Al-'illah describes a subtle flaw undermining a hadith's authenticity despite its chain appearing, on first inspection, to fully satisfy every ordinary requirement already covered across this course's second and third units. Detecting it requires comparing multiple separate transmission routes for the same report against one another, rather than examining any single chain in isolation.`,
      },
      {
        heading: 'A documented, genuinely instructive example',
        body: `The well known hadith stating that actions are judged according to intentions was, for several early generations, transmitted through an unusually narrow chain, passing through only a single specific narrator at each of its earliest stages before finally widening considerably. Specialists in this exact science studied this narrow transmission pattern with real, direct scrutiny precisely because of how seriously this science treats such patterns, ultimately still affirming the hadith's own authenticity despite this unusual structure.`,
      },
      {
        heading: 'A specialty requiring truly exceptional expertise',
        body: `Detecting genuine 'ilal is widely regarded as among the most demanding subdisciplines within the entire science of hadith, historically mastered by only a small number of specialists, Ali ibn al-Madini, Ahmad ibn Hanbal, Imam al-Bukhari, and ad-Daraqutni prominent among them, each requiring an almost encyclopedic command of narrators, their specific teachers, and the full range of documented transmission routes for a truly vast number of individual reports.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's remaining four topics examine several specific, named categories of defect this same broader science of 'ilal actually works to uncover, beginning directly with shadh, already named alongside 'illah in this course's third unit.`,
      },
    ],
  },

  'illah-2': {
    id: 'illah-2',
    unit: 'unit-7',
    title: 'Ash-Shadh: The Irregular Narration',
    summary: 'A reliable narrator contradicting narrators more reliable than himself.',
    content: [
      {
        heading: 'A defect that does not require an unreliable narrator at all',
        body: `Ash-shadh, already named directly in this course's third unit, describes a specific situation in which a genuinely reliable narrator's own report contradicts a report transmitted by narrators who are more reliable than himself, whether through greater individual precision or through considerably greater number.`,
      },
      {
        heading: "The narrator's own reliability is not actually the problem",
        body: `This is a genuinely important point worth stating directly: shadh does not indicate that this specific narrator is himself unreliable. The defect lies entirely in the comparison itself, since even a genuinely trustworthy narrator can occasionally report something conflicting with what more reliable narrators reported regarding that exact same event.`,
      },
      {
        heading: 'Al-mahfuz: naming the version actually preferred',
        body: `The specific version ultimately preferred in such a contradiction, transmitted by these more reliable narrators, is called al-mahfuz, the preserved, correct version, standing directly opposite the rejected shadh version in this exact comparison.`,
      },
      {
        heading: 'A related concept worth distinguishing directly',
        body: `Shadh must be distinguished carefully from ziyadat ath-thiqah, an addition made by a reliable narrator that does not actually contradict other narrators, merely supplying extra genuine detail they happened to omit. Such an addition is generally accepted rather than rejected, precisely because no real contradiction exists in this specific case, unlike shadh, which by definition involves a genuine, direct conflict.`,
      },
    ],
  },

  'illah-3': {
    id: 'illah-3',
    unit: 'unit-7',
    title: 'Al-Munkar: Contradicting More Reliable Narrators',
    summary: 'A weak narrator contradicting more reliable narrators.',
    content: [
      {
        heading: 'The same basic structure, one crucial difference',
        body: `Al-munkar shares shadh's own basic structure, already covered directly in this unit's previous topic, a report contradicting one transmitted by more reliable narrators, differing specifically in that the contradicting narrator here is himself already known to be weak, rather than genuinely reliable.`,
      },
      {
        heading: 'Two distinct defects compounding at once',
        body: `Munkar is generally considered more seriously weak than shadh precisely because it compounds two separate problems simultaneously: the narrator's own already established unreliability, and this specific contradiction with more trustworthy material, whereas shadh involves only the second of these two problems.`,
      },
      {
        heading: "Al-ma'ruf: this category's own preferred version",
        body: `The specific version ultimately preferred in this exact comparison, transmitted by the more reliable narrators, is called al-ma'ruf, the recognized, correct version, functioning as munkar's own direct counterpart, exactly as al-mahfuz already functions for shadh in this unit's previous topic.`,
      },
      {
        heading: "The single distinguishing factor worth holding in mind",
        body: `Comparing this unit's second and third topics directly: shadh and munkar share an identical underlying structure, contradiction with more reliable narrators, differing only in whether the contradicting narrator is himself reliable, shadh, or already known to be weak, munkar. This single distinction is what actually separates these two otherwise closely related categories.`,
      },
    ],
  },

  'illah-4': {
    id: 'illah-4',
    unit: 'unit-7',
    title: 'Al-Mudraj: An Insertion Into the Text',
    summary: "Words added into a hadith's own text, not originally part of it.",
    content: [
      {
        heading: 'Material entering a hadith that was never actually part of it',
        body: `Al-mudraj describes a hadith in which specific words or phrases have become inserted into either its text or its chain, material genuinely absent from the Prophet's \ufdfa own original statement, typically originating instead as a narrator's own explanatory comment later merged, whether accidentally or otherwise, into the main body of the report itself.`,
      },
      {
        heading: 'A real, documented example',
        body: `In one well known instance, Abu Hurairah's own personal advice encouraging thorough completion of ablution appears within the same narration as the Prophet's \ufdfa own separate warning against neglecting the feet during this exact same act, later transmitters merging these two genuinely distinct statements into what then appeared to be one single, continuous hadith.`,
      },
      {
        heading: 'How this specific insertion is actually detected',
        body: `Mudraj is identified specifically by comparing multiple independent narrations of what is presented as the same hadith, and noticing that a specific phrase or addition appears in only some versions rather than consistently across all of them, alongside any explicit clarification a narrator themselves later offered distinguishing their own commentary from the Prophet's \ufdfa own actual words.`,
      },
      {
        heading: 'Why this specific defect matters so directly',
        body: `Left undetected, mudraj risks attributing to the Prophet \ufdfa words he never actually said, even when the surrounding material genuinely does trace back to him. This is precisely the kind of subtle textual problem the broader science of 'ilal, already covered directly across this unit's first topic, exists specifically to uncover.`,
      },
    ],
  },

  'illah-5': {
    id: 'illah-5',
    unit: 'unit-7',
    title: 'Al-Maqlub and Al-Mudtarib: Reversed and Confused Narrations',
    summary: 'Two further, specific categories of narrator error.',
    content: [
      {
        heading: 'Al-maqlub: names or wording genuinely reversed',
        body: `Al-maqlub describes a hadith in which specific words or the order of events within its own text have been swapped or reversed, or in which specific names within its own chain have been altered, such as exchanging a narrator's own name with his father's name. Some documented instances of this specific reversal occurred deliberately, a narrator hoping to make an otherwise familiar chain appear unique or personally impressive by presenting it in this altered form.`,
      },
      {
        heading: 'Al-mudtarib: genuinely irreconcilable versions',
        body: `Al-mudtarib describes a hadith transmitted in multiple ways, whether differing in sanad or in matn, that genuinely cannot be reconciled with one another and cannot be resolved by simply preferring one version over the rest.`,
      },
      {
        heading: 'A specific condition worth stating directly',
        body: `Mudtarib applies specifically when the conflicting versions are roughly equal in their own overall strength. Where one specific version is clearly stronger than the others, that version is simply preferred outright, and the report is not considered mudtarib at all, a distinction worth holding in mind directly rather than applying this label to any report with multiple differing narrations.`,
      },
      {
        heading: "Closing this unit and turning to narrator biography directly",
        body: `This unit has now covered al-'illah as the broader hidden-defect science this course's third unit already anticipated, ash-shadh and al-munkar as closely related but genuinely distinct forms of contradiction, al-mudraj as material inserted into a hadith's own text or chain, and al-maqlub and al-mudtarib as reversal and genuine irreconcilability. Detecting essentially every one of these defects depends directly on deep, specific knowledge of individual narrators themselves, exactly the subject this course's eighth unit turns to next.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 8 - 'ILM AR-RIJAL (full content, expanded)
  //
  // The paired jarh/ta'dil discipline, the graded terminology scale
  // (from superlatives through saduq to maqbul/layyin, with a
  // parallel graded scale of criticism), and the specific chain of
  // reference works (Ibn Abi Hatim, al-Mizzi, Ibn Hajar's two
  // Tahdhib works, adh-Dhahabi's Mizan al-I'tidal) checked against
  // multiple current Mustalah al-Hadith references before writing.
  // -----------------------------------------------------------
  'rijal-1': {
    id: 'rijal-1',
    unit: 'unit-8',
    title: 'Why Narrators Themselves Are Studied',
    summary: 'The rationale behind an entire science devoted to individual biography.',
    content: [
      {
        heading: 'The foundation everything already covered actually depends on',
        body: `This course's second unit established al-'adalah and ad-dabt as required qualities of every individual narrator, and its later units built extensively upon this same foundation. None of this evaluation is practically possible without a genuine, documented body of biographical knowledge about who each specific narrator actually was.`,
      },
      {
        heading: 'Specific, concrete questions this discipline actually answers',
        body: `'Ilm ar-rijal, the science of narrator biography, developed specifically to answer direct, practical questions about each individual transmitter: who exactly was this person, during which period did they live, under which specific teachers did they study, which students transmitted from them in turn, and what did other, contemporary scholars who personally knew or investigated them actually say about their honesty and precision.`,
      },
      {
        heading: 'Turning abstract standards into genuinely checkable facts',
        body: `Without this documented record, 'adalah and dabt would remain abstract standards with no real, practical way to verify whether any specific narrator actually satisfied them. 'Ilm ar-rijal turns these standards into checkable historical fact, a documented record scholars could consult directly rather than relying on unverifiable impression alone.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns directly to the specific, paired discipline scholars developed to actually record and weigh this documented information: al-jarh wa't-ta'dil, criticism and validation.`,
      },
    ],
  },

  'rijal-2': {
    id: 'rijal-2',
    unit: 'unit-8',
    title: "Al-Jarh wa't-Ta'dil: Criticism and Validation",
    summary: 'The paired discipline of validating and criticizing individual narrators.',
    content: [
      {
        heading: 'Two directions of the same underlying discipline',
        body: `Al-jarh wa't-ta'dil, literally wounding and correcting, names the paired discipline of at-ta'dil, formally validating a narrator as upright and reliable, and al-jarh, formally identifying a specific flaw or weakness in a narrator, together forming a single, unified critical discipline scholars applied to every historically documented hadith narrator.`,
      },
      {
        heading: 'A genuine, working principle for resolving conflicting assessments',
        body: `When scholars disagreed about a specific narrator, one offering general praise while another offered criticism, a specific, explained criticism, jarh mufassar, is generally given more weight than unexplained general praise, since it comes with actual, stated reasoning a later reader can independently evaluate rather than a bare impression alone.`,
      },
      {
        heading: 'A genuine limitation on this same principle',
        body: `This preference for explained criticism does not apply without qualification. Vague, unexplained criticism, jarh mubham, giving no specific reasoning at all, generally carries considerably less weight than a clearly explained validation, since an unexplained accusation offers no actual basis a later scholar could independently assess or verify.`,
      },
      {
        heading: "Setting up this unit's next topic",
        body: `Neither ta'dil nor jarh functions as a simple, binary verdict. This unit's next topic turns directly to the genuine, graded scale of specific terminology scholars actually used to express exactly how strong a given validation or criticism truly was.`,
      },
    ],
  },

  'rijal-3': {
    id: 'rijal-3',
    unit: 'unit-8',
    title: 'Ranks of Ta\u2019dil and Jarh',
    summary: 'The graded scale scholars use rather than a simple accept-or-reject verdict.',
    content: [
      {
        heading: 'A genuinely graded scale, not a simple binary',
        body: `Scholars developed a specific, graded scale of terminology for both ta'dil and jarh, allowing considerably more precision than a simple accepted-or-rejected verdict could ever actually express.`,
      },
      {
        heading: "Ta'dil's own graded terms, from highest to lowest",
        body: `At the very top, terms such as awthaq an-nas, the most reliable of people, or a repeated adjective such as thiqah thiqah, reliable, reliable, mark the very highest possible validation. Below this, thiqah alone, reliable, marks strong, standard acceptance. Below this again, saduq, truthful, describes a narrator generally honest but occasionally prone to minor error, a specific level already connected directly to this course's third unit, since narrators at this exact level are precisely the ones whose hadith is often graded hasan rather than sahih. At the lowest still-usable level, maqbul or layyin, acceptable or soft, describes a narrator whose material is generally usable primarily in a supporting, corroborating role rather than standing entirely on its own.`,
      },
      {
        heading: "Jarh's own graded terms, from mildest to most severe",
        body: `Criticism follows a similarly graded scale in the opposite direction. Milder terms such as layyin al-hadith, soft in hadith, indicate a narrator whose material is treated with real caution, while considerably more severe terms such as kadhdhab, liar, or wadi' al-hadith, fabricator, indicate a narrator whose material is rejected outright and entirely, regardless of any other consideration.`,
      },
      {
        heading: 'Why this precise terminology matters so directly',
        body: `The exact specific term a recognized scholar of narrator criticism actually used carries real, practical consequences for how a given hadith is ultimately graded, connecting this unit's own subject matter directly back to sahih, hasan, and da'if, already covered fully across this course's third and fourth units. A narrator described as saduq produces a genuinely different outcome than one described as thiqah, despite both terms falling generally within ta'dil's own overall validating direction.`,
      },
    ],
  },

  'rijal-4': {
    id: 'rijal-4',
    unit: 'unit-8',
    title: 'Books Dedicated to Narrator Biography',
    summary: 'The reference works this entire discipline is actually recorded in.',
    content: [
      {
        heading: 'A discipline requiring its own dedicated reference literature',
        body: `Given the sheer number of individual narrators this science needed to document, scholars produced entire dedicated reference works recording exactly this kind of biographical and critical information, allowing later students to look up a specific narrator's own documented standing directly rather than needing to independently reconstruct it each time.`,
      },
      {
        heading: 'Foundational early works',
        body: `Al-Jarh wa't-Ta'dil by Ibn Abi Hatim ar-Razi stands among the earliest and most foundational works of exactly this kind, a substantial biographical dictionary recording detailed critical assessments across a truly vast number of individual narrators.`,
      },
      {
        heading: 'A chain of later works, each building on the one before it',
        body: `Al-Mizzi's Tahdhib al-Kamal later gathered detailed biographical information specifically on narrators found within the six major hadith collections, examined directly across this course's eleventh unit. Ibn Hajar al-'Asqalani subsequently condensed this same material into his own Tahdhib at-Tahdhib, and condensed that same work still further into Taqrib at-Tahdhib, a considerably shorter, genuinely practical reference still widely used today for quickly checking a specific narrator's own documented grading.`,
      },
      {
        heading: 'A work focused specifically on weakness',
        body: `Adh-Dhahabi's Mizan al-I'tidal focuses specifically on narrators who received genuine criticism, gathering this same kind of documented material together in one place specifically for identifying and studying weakness.`,
      },
      {
        heading: "Closing this unit and turning to narrators' own historical generations",
        body: `This unit has now covered why narrators themselves require this kind of dedicated, documented study, the paired jarh and ta'dil discipline scholars developed for this exact purpose, the genuinely graded terminology this discipline actually uses, and the specific reference works recording all of this material for later use. This course's ninth unit turns directly to the specific historical generations these same narrators actually belonged to, already used as terminology throughout this entire course, examined now on their own terms.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 9 - THE GENERATIONS OF NARRATORS (full content, expanded)
  //
  // Ibn Hajar's own precise definition of Sahabi (with its exact
  // Arabic), the majority position on the Companions' collective
  // uprightness, the senior/junior division within the Tabi'un, and
  // Ibn Sa'd's Kitab at-Tabaqat al-Kubra as a concrete reference
  // work organized around this exact generational structure, all
  // checked against multiple current Mustalah al-Hadith references
  // before writing.
  // -----------------------------------------------------------
  'tabaqat-1': {
    id: 'tabaqat-1',
    unit: 'unit-9',
    title: 'As-Sahabah: The Companions',
    summary: 'Those who met the Prophet \ufdfa personally as believers.',
    content: [
      {
        heading: 'A precise definition, not a loose popular notion',
        body: `Ibn Hajar al-'Asqalani offered what remains the most widely accepted definition of as-sahabah, the Companions: anyone who met the Prophet \ufdfa while believing in him, and who died as a Muslim.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'أَصَحُّ مَا وَقَفْتُ عَلَيْهِ مِنْ ذَلِكَ أَنَّ الصَّحَابِيَّ مَنْ لَقِيَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مُؤْمِنًا بِهِ وَمَاتَ عَلَى الْإِسْلَامِ',
            transliteration: "asahhu mā waqaftu 'alayhi min dhālika anna s-sahābiyya man laqiya n-nabiyya sallallāhu 'alayhi wa sallam mu'minan bihi wa māta 'ala l-islām",
            english: 'The most correct view I came across is that a Companion is one who met the Prophet \ufdfa, believing in him, and passed away as a Muslim.',
            source: "Ibn Hajar al-'Asqalani's own definition of sahabi",
          },
        ],
      },
      {
        heading: 'A genuinely inclusive standard',
        body: `This definition includes anyone meeting this basic standard regardless of how long they actually spent with the Prophet \ufdfa, whether they personally narrated any hadith at all, and whether their own encounter was extensive or as brief as a single sighting.`,
      },
      {
        heading: "The majority position on their collective standing",
        body: `The scholarly tradition this course has drawn on throughout holds that the Companions, as a group, are treated as collectively upright, without requiring the same individual 'adalah investigation already covered directly across this course's second and eighth units for narrators from later generations, a position resting specifically on their unique historical proximity to revelation itself.`,
      },
      {
        heading: 'A small number of especially prolific narrators',
        body: `While many thousands of Companions existed, a comparatively small number transmitted the majority of hadith actually recorded, Abu Hurairah, 'Aishah, Ibn 'Abbas, Ibn 'Umar, Anas ibn Malik, and Jabir ibn 'Abdullah prominent among them.`,
      },
    ],
  },

  'tabaqat-2': {
    id: 'tabaqat-2',
    unit: 'unit-9',
    title: "At-Tabi'un: The Successors",
    summary: 'Those who met at least one Companion but not the Prophet \ufdfa himself.',
    content: [
      {
        heading: 'A generation defined by what it did not personally witness',
        body: `At-tabi'un, the Successors, already introduced briefly across this course's sixth unit, refers to anyone who met at least one Companion as a believer without ever personally meeting the Prophet \ufdfa himself.`,
      },
      {
        heading: 'Real internal seniority within this same generation',
        body: `Classical biographers divided the Tabi'un into several distinct layers based on relative seniority, distinguishing those who met numerous senior Companions over an extended period from those meeting only a smaller number, or more junior, Companions later in this same generation's own overall span.`,
      },
      {
        heading: 'A specific example already familiar from this course',
        body: `Sa'id ibn al-Musayyib, already named directly across this course's sixth unit as a widely trusted narrator whose mursal reports several scholars treated with genuine leniency, is himself a well known example of a senior Tabi'i, having personally met a considerable number of senior Companions.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns to the third generation in this same sequence, before this unit's closing topic examines directly why this entire generational structure actually matters for evaluating a hadith's own sanad.`,
      },
    ],
  },

  'tabaqat-3': {
    id: 'tabaqat-3',
    unit: 'unit-9',
    title: "Tabi' at-Tabi'in: The Successors of the Successors",
    summary: 'The third generation in this same chain of personal transmission.',
    content: [
      {
        heading: 'Continuing the same defining logic one generation further',
        body: `Tabi' at-tabi'in, the Successors of the Successors, refers to anyone who met at least one member of the Tabi'un, already covered directly in this unit's previous topic, without personally meeting any Companion at all.`,
      },
      {
        heading: 'A generation containing the earliest systematic scholarship',
        body: `This third generation includes several of the earliest scholars who began the kind of systematic collection and critical evaluation this entire course has examined throughout, work that would later mature into the developed science this course studies in its fullest, later form.`,
      },
      {
        heading: 'Why generational boundaries are not always perfectly sharp',
        body: `Precisely dating any specific individual's own generational placement can genuinely vary between biographers, particularly for narrators living near the boundary separating two adjacent generations. This course's own use of these three broad categories reflects the general, widely recognized structure rather than resolving every specific individual case with absolute precision.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `With all three core generations now introduced, sahabah, tabi'un, and tabi' at-tabi'in, this unit's closing topic turns directly to why this same generational framework actually matters so directly for studying a hadith's own sanad.`,
      },
    ],
  },

  'tabaqat-4': {
    id: 'tabaqat-4',
    unit: 'unit-9',
    title: 'How a Narrator\u2019s Generation Affects a Hadith\u2019s Study',
    summary: "Why this specific dating matters directly for sanad evaluation.",
    content: [
      {
        heading: 'A direct connection to this course\u2019s second unit',
        body: `This course's second unit already showed that confirming genuine connection between two consecutive narrators, the specific standard distinguishing Imam al-Bukhari's own stricter requirement from Imam Muslim's, depends directly on knowing whether these two narrators genuinely could have met at all, a question resolved specifically through knowing their own respective generations and approximate lifespans.`,
      },
      {
        heading: 'A direct connection to this course\u2019s sixth unit',
        body: `Al-mursal, already covered directly across this course's sixth unit, is itself defined entirely in generational terms: a member of the Tabi'un narrating directly from the Prophet \ufdfa, skipping the Companion generation specifically. Recognizing mursal at all depends entirely on first knowing precisely which generation a given narrator actually belonged to.`,
      },
      {
        heading: 'A direct connection to this course\u2019s eighth unit',
        body: `The reference works already covered directly across this course's eighth unit are frequently organized specifically around this same generational structure. Ibn Sa'd's Kitab at-Tabaqat al-Kubra, one of the earliest major biographical works of exactly this kind, arranges its own subjects generation by generation, precisely the structure this unit has now covered in full.`,
      },
      {
        heading: 'Closing this unit and turning to how hadith actually changed hands',
        body: `This unit has now covered the Sahabah's own precise definition and unique collective standing, the Tabi'un's own internal seniority, Tabi' at-Tabi'in as the third generation in this same sequence, and the direct, practical ways this generational structure connects to material already covered across this course's second, sixth, and eighth units. This course's tenth unit turns to a related but genuinely different question: not which generation a narrator belonged to, but the specific, named methods by which a hadith was actually received and passed on from one narrator to the next.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 10 - METHODS OF RECEIVING AND TRANSMITTING HADITH
  // (placeholders)
  // -----------------------------------------------------------
  'tahammul-1': { id: 'tahammul-1', unit: 'unit-10', title: "As-Sama': Hearing Directly from the Teacher", summary: 'The strongest, most direct method of receiving a hadith.' },
  'tahammul-2': { id: 'tahammul-2', unit: 'unit-10', title: "Al-Qira'ah: Reading Before the Teacher", summary: 'A student reciting back to the teacher for direct confirmation.' },
  'tahammul-3': { id: 'tahammul-3', unit: 'unit-10', title: "Al-Ijazah: Granted Permission to Narrate", summary: 'Formal authorization to transmit a teacher\u2019s own material.' },
  'tahammul-4': { id: 'tahammul-4', unit: 'unit-10', title: 'Other Recognized Methods', summary: 'Several further, more specific transmission methods classical scholars named.' },

  // -----------------------------------------------------------
  // UNIT 11 - THE MAJOR HADITH COLLECTIONS (placeholders)
  // -----------------------------------------------------------
  'kutub-1': { id: 'kutub-1', unit: 'unit-11', title: 'Sahih al-Bukhari', summary: 'Widely regarded as the most rigorously compiled hadith collection.' },
  'kutub-2': { id: 'kutub-2', unit: 'unit-11', title: 'Sahih Muslim', summary: 'The second of the two collections known together as as-Sahihayn.' },
  'kutub-3': { id: 'kutub-3', unit: 'unit-11', title: 'The Remaining Four of the Sihah Sittah', summary: 'Abu Dawud, at-Tirmidhi, an-Nasa\u2019i, and Ibn Majah.' },
  'kutub-4': { id: 'kutub-4', unit: 'unit-11', title: 'Al-Muwatta and Musnad Ahmad', summary: 'Two further foundational collections outside the six.' },

  // -----------------------------------------------------------
  // UNIT 12 - STUDYING THE MATN (placeholders)
  // -----------------------------------------------------------
  'matn-1': { id: 'matn-1', unit: 'unit-12', title: 'Conditions for a Sound Matn', summary: 'What the text of a hadith itself must satisfy, beyond its own sanad.' },
  'matn-2': { id: 'matn-2', unit: 'unit-12', title: 'Detecting Contradiction in Text', summary: 'How scholars identify a matn conflicting with more reliable material.' },
  'matn-3': { id: 'matn-3', unit: 'unit-12', title: 'Narration by Meaning Versus Exact Wording', summary: 'A genuine, recognized practice among early narrators, and its own conditions.' },
  'matn-4': { id: 'matn-4', unit: 'unit-12', title: 'Abrogation Within Hadith', summary: 'When a later report supersedes an earlier one\u2019s specific ruling.' },

  // -----------------------------------------------------------
  // UNIT 13 - PRACTICAL APPLICATION (placeholders)
  // -----------------------------------------------------------
  'amal-1': { id: 'amal-1', unit: 'unit-13', title: 'How Scholars Grade a Hadith Today', summary: 'Applying this entire science\u2019s cumulative standards in practice.' },
  'amal-2': { id: 'amal-2', unit: 'unit-13', title: 'Following Qualified Scholarship Versus Self-Verification', summary: 'Why this specific science is not typically a do-it-yourself undertaking.' },
  'amal-3': { id: 'amal-3', unit: 'unit-13', title: 'Common Mistakes in Citing Hadith', summary: 'Where casual, non-specialist citation most often goes wrong.' },
  'amal-4': { id: 'amal-4', unit: 'unit-13', title: 'The Role of Hadith in Deriving Rulings', summary: 'How authenticated hadith actually functions within Islamic legal reasoning.' },

  // -----------------------------------------------------------
  // UNIT 14 - CLOSING: PRESERVATION AND LEGACY (placeholders)
  // -----------------------------------------------------------
  'legacy-1': { id: 'legacy-1', unit: 'unit-14', title: 'The Isnad as a Unique Historiographical Achievement', summary: 'Why this specific system of source-tracing has few real historical parallels.' },
  'legacy-2': { id: 'legacy-2', unit: 'unit-14', title: 'The Muhaddithun: Lives of Dedication', summary: 'The real, personal cost this science\u2019s preservation actually required.' },
  'legacy-3': { id: 'legacy-3', unit: 'unit-14', title: 'Why This Science Still Matters Today', summary: 'The practical relevance of this entire subject beyond historical interest alone.' },
  'legacy-4': { id: 'legacy-4', unit: 'unit-14', title: 'Closing Reflections', summary: 'From basic terminology to a genuine, working understanding.' },
};