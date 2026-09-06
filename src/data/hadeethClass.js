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
  // UNIT 5 - CLASSIFICATION BY NUMBER OF NARRATORS (placeholders)
  // -----------------------------------------------------------
  'adad-1': { id: 'adad-1', unit: 'unit-5', title: 'Al-Mutawatir: The Mass-Transmitted Hadith', summary: 'A report transmitted by so many independent narrators that collusion on a lie becomes inconceivable.' },
  'adad-2': { id: 'adad-2', unit: 'unit-5', title: 'Al-Ahad: The Solitary Report', summary: 'Any hadith not reaching the threshold of tawatur.' },
  'adad-3': { id: 'adad-3', unit: 'unit-5', title: "Subdivisions of Ahad: Mashhur, 'Aziz, Gharib", summary: 'Three further categories distinguishing solitary reports from one another.' },

  // -----------------------------------------------------------
  // UNIT 6 - CONNECTED AND DISCONNECTED CHAINS (placeholders)
  // -----------------------------------------------------------
  'ittisal-1': { id: 'ittisal-1', unit: 'unit-6', title: 'Al-Muttasil: The Connected Chain', summary: 'A sanad with no missing link from beginning to end.' },
  'ittisal-2': { id: 'ittisal-2', unit: 'unit-6', title: "Al-Munqati': A Broken Link", summary: 'A chain missing one narrator at any point other than its very start.' },
  'ittisal-3': { id: 'ittisal-3', unit: 'unit-6', title: "Al-Mu'dal: Two or More Consecutive Missing Links", summary: 'A more serious break than munqati\u2019, with consecutive narrators missing.' },
  'ittisal-4': { id: 'ittisal-4', unit: 'unit-6', title: "Al-Mursal: When a Tabi'i Narrates Directly from the Prophet \ufdfa", summary: 'A chain skipping the Companion generation entirely.' },
  'ittisal-5': { id: 'ittisal-5', unit: 'unit-6', title: "Al-Mu'allaq: A Chain Missing from the Start", summary: 'A chain dropped from its own beginning rather than elsewhere.' },

  // -----------------------------------------------------------
  // UNIT 7 - HIDDEN AND SUBTLE DEFECTS (placeholders)
  // -----------------------------------------------------------
  'illah-1': { id: 'illah-1', unit: 'unit-7', title: "Al-'Illah: The Hidden Defect", summary: 'A subtle flaw undermining an otherwise apparently sound hadith.' },
  'illah-2': { id: 'illah-2', unit: 'unit-7', title: 'Ash-Shadh: The Irregular Narration', summary: 'A reliable narrator contradicting narrators more reliable than himself.' },
  'illah-3': { id: 'illah-3', unit: 'unit-7', title: 'Al-Munkar: Contradicting More Reliable Narrators', summary: 'A weak narrator contradicting more reliable narrators.' },
  'illah-4': { id: 'illah-4', unit: 'unit-7', title: 'Al-Mudraj: An Insertion Into the Text', summary: 'Words added into a hadith\u2019s own text, not originally part of it.' },
  'illah-5': { id: 'illah-5', unit: 'unit-7', title: 'Al-Maqlub and Al-Mudtarib: Reversed and Confused Narrations', summary: 'Two further, specific categories of narrator error.' },

  // -----------------------------------------------------------
  // UNIT 8 - 'ILM AR-RIJAL (placeholders)
  // -----------------------------------------------------------
  'rijal-1': { id: 'rijal-1', unit: 'unit-8', title: 'Why Narrators Themselves Are Studied', summary: 'The rationale behind an entire science devoted to individual biography.' },
  'rijal-2': { id: 'rijal-2', unit: 'unit-8', title: "Al-Jarh wa't-Ta'dil: Criticism and Validation", summary: 'The paired discipline of validating and criticizing individual narrators.' },
  'rijal-3': { id: 'rijal-3', unit: 'unit-8', title: 'Ranks of Ta\u2019dil and Jarh', summary: 'The graded scale scholars use rather than a simple accept-or-reject verdict.' },
  'rijal-4': { id: 'rijal-4', unit: 'unit-8', title: 'Books Dedicated to Narrator Biography', summary: 'The reference works this entire discipline is actually recorded in.' },

  // -----------------------------------------------------------
  // UNIT 9 - THE GENERATIONS OF NARRATORS (placeholders)
  // -----------------------------------------------------------
  'tabaqat-1': { id: 'tabaqat-1', unit: 'unit-9', title: 'As-Sahabah: The Companions', summary: 'Those who met the Prophet \ufdfa personally as believers.' },
  'tabaqat-2': { id: 'tabaqat-2', unit: 'unit-9', title: "At-Tabi'un: The Successors", summary: 'Those who met at least one Companion but not the Prophet \ufdfa himself.' },
  'tabaqat-3': { id: 'tabaqat-3', unit: 'unit-9', title: "Tabi' at-Tabi'in: The Successors of the Successors", summary: 'The third generation in this same chain of personal transmission.' },
  'tabaqat-4': { id: 'tabaqat-4', unit: 'unit-9', title: 'How a Narrator\u2019s Generation Affects a Hadith\u2019s Study', summary: 'Why this specific dating matters directly for sanad evaluation.' },

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