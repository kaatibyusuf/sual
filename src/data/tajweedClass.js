// src/data/tajweedClass.js
//
// Tajweed Class -- a sequential course on the science of correct
// Qur'anic recitation. Deliberately named and structured separately
// from any existing Tajweed page/product in this app (see this
// course's own migrations and payment product name, 'tajweedclass',
// distinct from any existing 'tajweed' product) -- nothing here
// touches that existing feature.
//
// STATUS: Unit 1 has full lesson content. All other units currently
// have title + summary only (placeholder content) -- to be filled in
// unit-by-unit, same pattern as Adab Class and Tawheed Class.
//
// Original content, not reproduced from any existing source.
// Recommend scholarly/qari review before publishing -- this teaches
// specific articulation and recitation rules, and should be checked
// by someone qualified in tajweed before end users learn from it.

export const TAJWEEDCLASS_UNITS = [
  {
    id: 'unit-1',
    title: 'Foundations of Tajweed',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'Makharij al-Huruf: The Articulation Points',
    topics: ['makh-1', 'makh-2', 'makh-3', 'makh-4', 'makh-5', 'makh-6'],
  },
  {
    id: 'unit-3',
    title: 'Sifaat al-Huruf: Characteristics of the Letters',
    topics: ['sifat-1', 'sifat-2', 'sifat-3', 'sifat-4', 'sifat-5', 'sifat-6'],
  },
  {
    id: 'unit-4',
    title: 'Rules of Noon Sakinah and Tanween',
    topics: ['noon-1', 'noon-2', 'noon-3', 'noon-4', 'noon-5'],
  },
  {
    id: 'unit-5',
    title: 'Rules of Meem Sakinah and the Ghunnah',
    topics: ['meem-1', 'meem-2', 'meem-3', 'meem-4'],
  },
  {
    id: 'unit-6',
    title: 'The Laam Rules',
    topics: ['laam-1', 'laam-2', 'laam-3', 'laam-4'],
  },
  {
    id: 'unit-7',
    title: 'Al-Madd: Elongation, Part One',
    topics: ['madd1-1', 'madd1-2', 'madd1-3'],
  },
  {
    id: 'unit-8',
    title: 'Al-Madd: Elongation, Part Two',
    topics: ['madd2-1', 'madd2-2', 'madd2-3', 'madd2-4', 'madd2-5'],
  },
  {
    id: 'unit-9',
    title: "Ra' and Qalqalah",
    topics: ['ra-1', 'ra-2', 'ra-3', 'ra-4', 'ra-5'],
  },
  {
    id: 'unit-10',
    title: 'Waqf and Ibtida: Stopping and Starting',
    topics: ['waqf-1', 'waqf-2', 'waqf-3', 'waqf-4'],
  },
  {
    id: 'unit-11',
    title: 'Common Mistakes in Recitation',
    topics: ['lahn-1', 'lahn-2', 'lahn-3'],
  },
  {
    id: 'unit-12',
    title: 'Living Tajweed: Practice and Application',
    topics: ['live-1', 'live-2', 'live-3', 'live-4'],
  },
];

export const TAJWEEDCLASS_TOPIC_ORDER = TAJWEEDCLASS_UNITS.flatMap((u) => u.topics);

export const TAJWEEDCLASS_TOPICS = {
  // -----------------------------------------------------------
  // UNIT 1 - FOUNDATIONS OF TAJWEED (full content)
  //
  // Qur'anic Arabic and hadith checked against primary tafsir and
  // hadith sources before writing. Ibn al-Jazari's couplet is quoted
  // in prose with clear attribution, not placed in the highlighted
  // Qur'an/Hadith blocks, since it is neither. English renderings
  // of Qur'anic verses are an original paraphrase of the meaning,
  // not copied from a single named published translation.
  // -----------------------------------------------------------
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'What is Tajweed and Why It Matters',
    summary: 'An introduction to the science of correct Qur\'anic recitation and why it exists at all.',
    content: [
      {
        heading: 'A science built around a single, specific text',
        body: `Tajweed is the science concerned with reciting the Qur'an correctly: giving every letter its precise articulation point, its correct characteristics, and its correct relationship to the letters around it. Unlike most sciences built to describe language in general, tajweed exists specifically for one text, the Qur'an, and this is not incidental. The Qur'an is preserved not only in its written form but in its spoken form, recited essentially the same way today as it was recited fourteen centuries ago, and tajweed is the specific body of knowledge that keeps that spoken preservation intact.`,
      },
      {
        heading: 'Why small differences in pronunciation genuinely matter',
        body: `A natural question worth addressing directly at the very start of this course: why does exact pronunciation matter this much, when ordinary spoken language tolerates considerable variation without anyone treating it as a serious problem. The Qur'an is different from ordinary speech in a specific, relevant way. Arabic contains pairs of letters distinguished only by subtle differences in articulation point or characteristic, and in many cases, mispronouncing one letter as another changes the actual meaning of a word rather than merely producing an accent. A famous example illustrating this point: the letters ha (ه) and ha (ح) sound similar to an untrained ear but come from entirely different articulation points, and confusing them in certain words changes their meaning outright. Tajweed exists precisely to prevent this kind of change, protecting not just the sound of the Qur'an but its actual meaning.`,
      },
      {
        heading: 'A direct command within the Qur\'an itself',
        body: `The Qur'an does not leave the manner of its own recitation to be worked out afterward by later scholars alone. It instructs the Prophet ﷺ directly regarding how it should be recited.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
            english: 'And recite the Qur\'an in a slow, measured, well-articulated manner.',
            source: 'Surah al-Muzzammil, 73:4',
          },
        ],
      },
      {
        heading: 'What tartil actually asks for',
        body: `The word used in this verse, tartil, describes reciting slowly and clearly, giving each letter its due weight, rather than rushing through the words as quickly as possible. Early commentators explain this instruction as being specifically about clarity and correct articulation, not merely about speed. A person could recite slowly while still mispronouncing letters, and a person could, in principle, recite with technically correct pronunciation at a brisker pace. What tartil asks for is the deliberate, unhurried attentiveness that correct articulation actually requires, which is precisely why this verse is treated throughout the tajweed tradition as its primary textual foundation.`,
      },
      {
        heading: 'What this course will cover, unit by unit',
        body: `This course moves from the physical mechanics of recitation to its more advanced technical rules, then finally to how these rules are actually lived out in daily practice. After this foundational unit, the course covers the articulation points (makharij) and characteristics (sifaat) of every Arabic letter, since every other rule in tajweed is really just a specific consequence of how letters interact given their articulation points and characteristics. From there, the course moves through the major rule categories, noon sakinah and tanween, meem sakinah, the laam rules, and the various categories of madd (elongation), before covering the ra', qalqalah, and the rules of stopping and starting a recitation. The course closes by naming common mistakes directly and by turning to the practical question every learner eventually faces: how correct recitation is actually built and maintained over a lifetime, not simply learned once.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'The Linguistic and Technical Definition of Tajweed',
    summary: 'How scholars precisely define this science, in both its literal and specialized sense.',
    content: [
      {
        heading: 'The word itself, before its specialized meaning',
        body: `Tajweed comes from the Arabic root meaning to make something good, to improve it, or to do it well. In ordinary language, a person could describe any skillfully performed task as having been done "bi tajweed," with excellence. This general meaning matters for understanding the specialized one: tajweed as a technical science did not invent an unrelated new word. It took an ordinary word already meaning "doing something excellently" and applied it specifically to the excellent performance of Qur'anic recitation.`,
      },
      {
        heading: 'The classical technical definition',
        body: `Scholars of this science define tajweed technically as giving every letter its right (haqq) and its due (mustahaqq): its right referring to the letter's own fixed articulation point and characteristics, which never change regardless of context, and its due referring to the characteristics that do change depending on the letter's position and its neighbors, such as when a letter is elongated, softened, or given a particular quality because of what comes before or after it. This two-part definition matters directly for how this course is structured. This course's second and third units cover a letter's fixed rights, its articulation point and inherent characteristics, while the remaining units cover the many specific rules governing what a letter is due depending on its surrounding context.`,
      },
      {
        heading: 'A skill of the tongue, verified by the ear',
        body: `Tajweed is fundamentally a practical, physical skill rather than a purely theoretical one, closer to learning correct posture in a physical discipline than to memorizing abstract facts. A person can understand every rule covered in this course intellectually and still need real, guided practice to apply them correctly, since the actual test of tajweed is not whether a rule can be recited from memory but whether it can be heard correctly in someone's actual recitation. This is why the tradition of learning tajweed has always centered on listening to a qualified teacher and being corrected directly, a theme this course will return to directly in its closing unit.`,
      },
      {
        heading: 'Ilm and \'amal: knowing the rules and applying them',
        body: `Scholars commonly distinguish between two related but distinct things: 'ilm at-tajweed, theoretical knowledge of the rules, and 'amal bit-tajweed, actually applying them correctly in recitation. A person can study every rule this course covers, in principle, without yet being able to apply all of them fluently and correctly in live recitation, and conversely, a person raised reciting correctly from childhood may apply many of these rules accurately by ear and habit without having formally studied their names or technical explanations. Both matter, and this course aims at both together: understanding the reasoning behind each rule specifically so that the correct sound it produces is not simply imitated but genuinely understood.`,
      },
      {
        heading: 'Why this definition sets realistic expectations for a course like this one',
        body: `Being clear about this two-part nature, theoretical knowledge paired with a practical, ear-trained skill, matters for how a learner should approach this course honestly. This course can teach the rules, their reasoning, and their evidence thoroughly and accurately. It cannot, on its own, fully replace listening to correct recitation and receiving direct correction from someone qualified to give it, exactly the same limitation any purely written material has when teaching a skill ultimately verified by the ear. This course's own closing unit addresses this limitation directly rather than leaving it unstated, since a course honest about what it can and cannot do is more useful than one that overstates its own sufficiency.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'The Ruling on Learning and Applying Tajweed',
    summary: 'What scholars say about the obligation behind this science, and where genuine differences remain.',
    content: [
      {
        heading: 'A famous couplet stating the matter plainly',
        body: `Ibn al-Jazari, one of the most significant scholars in the history of this science, opens his short, widely memorized primer on tajweed with a direct statement on its ruling: "Taking up tajweed is an absolute necessity; whoever does not apply tajweed to the Qur'an is sinful, because Allah revealed it with tajweed, and thus it has reached us from Him in the same way." This is one of the most frequently quoted lines in the entire tajweed tradition, and it states its position about as directly as a scholarly couplet can.`,
      },
      {
        heading: 'Why this specific ruling deserves a fair, careful presentation',
        body: `This course aims to present this ruling accurately rather than oversimplify a genuinely nuanced scholarly discussion. Ibn al-Jazari's statement represents a real and influential position, particularly strong among scholars specializing in the recitation sciences themselves, but it exists alongside a broader, commonly cited scholarly distinction between the general knowledge of tajweed's rules (considered by many scholars a communal obligation, fard kifayah, meaning the community as a whole must have people who know it, though not literally every individual) and the specific, narrower obligation to avoid errors serious enough to change a word's actual meaning, generally treated as a stronger, more individually binding obligation given what is actually at stake in altering revealed meaning.`,
      },
      {
        heading: 'Two categories of error worth distinguishing clearly',
        body: `This distinction becomes clearer through the categories scholars use for recitation errors, examined again in detail in this course's eleventh unit: al-lahn al-jali, a clear error serious enough to be noticed even by someone without specialist training, sometimes changing the actual meaning of a word, and al-lahn al-khafi, a more subtle deviation from the full technical rules of tajweed that a trained ear would notice but that does not typically change meaning. Avoiding the first category is treated with real seriousness across essentially the entire scholarly tradition. Achieving complete mastery of the second category, the full technical refinement this course teaches in detail, is where the specific individual obligation Ibn al-Jazari describes is understood differently by different scholars, some treating it with the same binding weight he gives it, others treating it as a strongly encouraged excellence beyond a narrower core obligation.`,
      },
      {
        heading: 'Why this course teaches the complete system regardless of this specific debate',
        body: `Regardless of exactly where a person's own understanding settles within this scholarly discussion, the practical value of learning tajweed thoroughly does not depend on resolving it first. Every scholar across this entire range of opinion agrees that reciting the Qur'an well is virtuous, that clear errors changing meaning should genuinely be avoided, and that the specific system of rules this course teaches represents how the Qur'an has actually been transmitted, recitation by recitation, since it was first revealed. This course teaches that complete system in full, exactly as Ibn al-Jazari and the broader tradition following him describe it, while remaining honest that a specific fiqh question about its exact individual obligation is a genuine point of scholarly discussion rather than a matter of total, unanimous agreement.`,
      },
      {
        heading: 'A reward held out for genuine effort, not only for mastery',
        body: `Whatever a learner's current level, the tradition offers real encouragement rather than only warning, examined directly in this unit's next topic through a specific hadith addressing exactly this concern: the person still struggling to recite correctly.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'The Reward and Virtue of Reciting the Qur\'an Well',
    summary: 'What Allah has promised those who recite skillfully, and those still learning to.',
    content: [
      {
        heading: 'A promise for the skilled reciter, and a promise for the one still struggling',
        body: `The Prophet ﷺ addressed both ends of the learning journey directly in a single hadith, refusing to leave a beginner feeling that only mastery carries reward.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ، وَالَّذِي يَقْرَأُ الْقُرْآنَ وَيَتَتَعْتَعُ فِيهِ وَهُوَ عَلَيْهِ شَاقٌّ لَهُ أَجْرَانِ',
            english: '"The one skilled in the Qur\'an is with the noble, righteous scribes (the angels), and the one who recites the Qur\'an haltingly, finding it difficult, will have two rewards."',
            source: 'Sahih Muslim, narrated by Aisha',
          },
        ],
      },
      {
        heading: 'Why the struggling reciter is described as receiving two rewards',
        body: `Commentators explain the second reward specifically: one reward for the recitation itself, and a second reward for the genuine effort and difficulty involved in pushing through unfamiliarity and hesitation rather than giving up. This is not a consolation prize offered instead of the first description's honor. It is a distinct, real reward tied specifically to the honest struggle of learning, meaning a person working carefully through this very course, sounding out an unfamiliar articulation point or correcting a habit built over years, is described in this hadith as actively earning something for that specific effort, not merely marking time until eventual mastery.`,
      },
      {
        heading: 'Why mastery is still described as the fuller station',
        body: `This hadith does not present both descriptions as equally complete, and honesty about this matters as much as the encouragement already given. The one described as skilled is placed in the company of the noble, righteous scribes, understood by commentators as angels who convey Allah's revealed books, a description of company and station that the sincere but still-struggling reciter has not yet reached, however genuine and rewarded their present effort is. This course exists precisely to help move a learner from the second description toward the first, and it would misrepresent the hadith itself to suggest struggle and mastery describe the same rewarded outcome.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: 'An Overview of What This Course Will Cover',
    summary: 'The complete map of this course, from mechanics to daily practice.',
    content: [
      {
        heading: 'From the mouth outward: articulation and characteristics first',
        body: `Every specific rule taught later in this course, without exception, is really a description of how one or more letters behave given their fixed articulation point and characteristics, already introduced in this unit's second topic as a letter's unchanging "right." This is why this course's second and third units, covering the makharij (articulation points) and sifaat (characteristics) of every Arabic letter, come immediately after this foundational unit, before any of the specific named rules are introduced. A learner who genuinely understands where and how each letter is produced will find every rule that follows easier to understand as a logical consequence, rather than as an arbitrary fact to be separately memorized.`,
      },
      {
        heading: 'The major rule categories, covered unit by unit',
        body: `Following the articulation points and characteristics, this course moves through the specific rule categories in roughly the order a structured tajweed curriculum traditionally covers them: the rules of noon sakinah and tanween, the rules of meem sakinah, the laam rules, and then two full units dedicated to madd, the elongation of certain letters under specific conditions, since this single category alone contains several distinct types worth separating into their own careful treatment. After this, the course turns to the ra', a letter with its own specific rules for when it is pronounced heavy or light, and to qalqalah, a distinct bouncing quality certain letters carry under specific conditions.`,
      },
      {
        heading: 'Stopping, starting, and the mistakes worth naming directly',
        body: `Correct recitation is not only about individual letters and words in isolation. This course's tenth unit covers waqf and ibtida, the rules governing where a recitation may or must stop, and how a recitation should correctly resume afterward, since stopping at the wrong point can genuinely distort meaning in a way already introduced in this unit's first topic. The course then names common recitation mistakes directly and specifically in its eleventh unit, both the clear errors that change meaning and the more subtle ones a trained ear would still notice, precisely because naming a mistake clearly is often the first real step toward correcting it.`,
      },
      {
        heading: 'Closing with what this course cannot do alone',
        body: `This course's final unit turns from technical rules to practical, honest application: how a genuine daily recitation practice is actually built and sustained, and a direct, unflinching acknowledgment of this unit's second topic already introduced, that a written course, however thorough, cannot fully replace listening to correct recitation and receiving real correction from someone qualified to give it. This closing unit treats that limitation as the honest final word this course leaves its reader with, not an inconvenient admission to be minimized.`,
      },
      {
        heading: 'How to actually use this course as you move through it',
        body: `Given everything covered in this unit, this course is best used the way its own definition of tajweed in this unit's second topic already implied: as theoretical knowledge that still needs to be tested against actual, spoken recitation, ideally alongside a qualified teacher or reciter rather than in place of one. Reading each unit carefully, understanding the reasoning behind each rule, and then actively listening for that exact rule in real recitation, whether an imam's, a recording's, or one's own, is what will make the specific, technical content in the units ahead genuinely take root rather than remaining a list of facts read once and set aside.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 2 - MAKHARIJ AL-HURUF (full content, expanded)
  //
  // This unit describes the physical articulation points of Arabic
  // letters, following the majority classical scheme (17 points
  // across 5 regions, per Ibn al-Jazari and the tradition built on
  // his Muqaddimah). This is descriptive phonetic fact rather than
  // Qur'an or hadith, so no verse blocks appear in this unit; letter
  // groupings and terminology were checked against multiple current
  // tajweed references before writing, and content is still
  // recommended for a qualified qari's review before publishing,
  // since correct articulation is ultimately verified by ear.
  // -----------------------------------------------------------
  'makh-1': {
    id: 'makh-1',
    unit: 'unit-2',
    title: 'What is a Makhraj? The Five General Regions',
    summary: 'The overall map of where Arabic letters are produced in the mouth and throat.',
    content: [
      {
        heading: 'What the word makhraj actually means',
        body: `Makhraj literally means an exit or a way out. In this science, it refers to the precise physical location in the mouth, throat, or nasal passage where a specific letter's sound is produced, the exact point that gives that letter its distinct identity and separates it from every other letter in the language. Every Arabic letter has one, and knowing it precisely is what this entire unit is built to teach.`,
      },
      {
        heading: 'Five general regions, and how many specific points within them',
        body: `Scholars organize the full set of articulation points under five general regions, moving from the deepest part of the throat toward the front of the mouth and nose: al-jawf, the open cavity of the mouth and throat; al-halq, the throat itself; al-lisan, the tongue; ash-shafatan, the two lips; and al-khayshum, the nasal passage. The majority of scholars, following Ibn al-Jazari, count seventeen specific points across these five regions: one for al-jawf, three for al-halq, ten for al-lisan, two for ash-shafatan, and one for al-khayshum. A smaller number of earlier scholars counted sixteen or fourteen, differing mainly in how certain tongue positions are grouped, but seventeen is the count this course follows, since it is the count most widely taught today and the one this unit's remaining topics are organized around directly.`,
      },
      {
        heading: 'Why the tongue carries by far the heaviest load',
        body: `Of these five regions, al-lisan, the tongue, is responsible for ten of the seventeen total points and eighteen of the twenty-eight Arabic letters, making it both the most active articulator in the language and the region this unit will spend the most time on, across two full topics rather than one. This is worth knowing in advance simply so the uneven attention this unit gives to the tongue does not feel like an accident of organization. It reflects how much of Arabic pronunciation genuinely depends on precise, varied tongue placement, from the very back of the mouth to the very tip of the front teeth.`,
      },
      {
        heading: 'A single word that shows exactly what is at stake',
        body: `The seriousness of getting a makhraj right, rather than merely close, is easiest to see through a specific, well known example. The word qalb (قلب), meaning heart, uses qaf, articulated from the very back of the tongue against the soft palate. Move that same sound slightly forward, to where kaf is actually produced, and the word becomes kalb (كلب), meaning dog. The two sounds feel similar to an untrained ear, and the physical distance between their two articulation points is small, yet the difference in meaning between reciting about the heart and reciting about a dog is total. This is precisely why this unit exists before any of the specific named tajweed rules are introduced: those rules assume a reciter can already correctly locate every one of these seventeen points, and a rule applied correctly to a mispronounced letter does not rescue the recitation.`,
      },
      {
        heading: 'Why some of these points are hardest specifically for new learners',
        body: `Certain articulation points, particularly several of the throat letters covered in this unit's third topic, are consistently difficult for learners whose native language has no equivalent sound, and difficult in a specific, frustrating way: the ear cannot always catch the error on its own, since a learner's own brain tends to hear the sound it intended to produce rather than the sound it actually produced. This is not a discouraging fact to end this topic on, but a genuinely useful one, since it explains directly why this course's earlier unit already insisted that a written course alone cannot fully replace listening to correct recitation and receiving real correction from someone qualified to give it. Makharij specifically, more than almost any other part of tajweed, are where that limitation matters most.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `This unit now moves through each of the five regions in order, from the deepest to the frontmost: al-jawf and its three madd letters, al-halq and its three throat points, al-lisan across two full topics covering all ten of its points, and finally ash-shafatan and al-khayshum together, closing the unit exactly where the next unit on the characteristics of letters (sifaat al-huruf) will pick up, since articulation point and characteristic together are what fully describe any single Arabic letter.`,
      },
    ],
  },

  'makh-2': {
    id: 'makh-2',
    unit: 'unit-2',
    title: 'Al-Jawf: The Oral Cavity and the Madd Letters',
    summary: 'The open cavity of the mouth and throat, and the three letters produced there.',
    content: [
      {
        heading: 'A makhraj defined by the absence of contact',
        body: `Al-jawf is unlike every other region covered in this unit in one specific, defining way: it is not a point where one organ touches another. It is the open, empty space running through the mouth and throat, and the sound produced here flows freely through that space without being shaped by contact between the tongue, lips, teeth, or throat at any single point. This is why al-jawf is generally listed first among the five regions despite being, in a sense, the absence of a specific point rather than a specific point itself.`,
      },
      {
        heading: 'The three letters that live here',
        body: `Exactly three letters are produced from al-jawf, and all three are already familiar from this course's earlier discussion of madd in its very first unit: alif, when preceded by a letter carrying a fatha, as in qala (قَالَ), waw sakinah, when preceded by a letter carrying a damma, as in yasoomu (يَصُومُ), and ya sakinah, when preceded by a letter carrying a kasra, as in nastaeen (نَسْتَعِينُ). Each of these three, in this specific vowel-matched condition, is pronounced by simply letting the sound continue through the open cavity, extended for a measured duration, rather than being stopped or shaped at a specific point the way every other letter in the language is.`,
      },
      {
        heading: 'Why "no contact" is itself a useful diagnostic',
        body: `This absence of contact gives a practical way to check whether a sound genuinely belongs to al-jawf: if the mouth can remain open and relatively unchanged in shape while the sound continues, with no part of the tongue, lips, or throat closing in on another part, the sound is very likely coming from this region. This stands in direct contrast to nearly every letter covered in the rest of this unit, each of which requires a specific, identifiable point of contact or near-contact to produce correctly.`,
      },
      {
        heading: 'The same three letters, in a different role entirely',
        body: `It is worth noting directly that waw and ya each have a second, entirely different identity elsewhere in the language: as ordinary consonants, waw and ya are produced from ash-shafatan and al-lisan respectively, covered later in this unit, with completely different articulation points from the ones described here. Only the specific madd condition described in this topic, a sakinah waw or ya immediately preceded by its matching short vowel, places them in al-jawf. This distinction matters directly, since confusing a consonant waw or ya with a madd waw or ya, or the reverse, is a genuine and understandable early mistake.`,
      },
      {
        heading: 'Why this topic matters well beyond this unit alone',
        body: `Al-jawf and its three letters are not only relevant to correct pronunciation in isolation. They are the entire foundation of madd, elongation, examined in full detail across this course's seventh and eighth units, since every category of madd covered there, natural and secondary alike, is built directly on top of these same three letters and the specific conditions under which they appear. Understanding al-jawf correctly here is what will make every later distinction between the different types of madd genuinely make sense, rather than each one needing to be memorized as an unrelated new fact.`,
      },
    ],
  },

  'makh-3': {
    id: 'makh-3',
    unit: 'unit-2',
    title: 'Al-Halq: The Three Points of the Throat',
    summary: 'The deepest, middle, and closest points of the throat, and their letters.',
    content: [
      {
        heading: 'Three points, moving from deepest to nearest',
        body: `Al-halq, the throat, contains three distinct articulation points, and six letters divided evenly between them, two letters per point. These three points are consistently described moving in one direction: from the deepest part of the throat, closest to the chest, outward toward the mouth.`,
      },
      {
        heading: 'Aqsa al-halq: the deepest point',
        body: `The deepest of the three throat points, aqsa al-halq, produces hamza (ء) and ha (ه). This is the point farthest from the lips, located at the very back of the throat, and both letters produced here involve the least amount of shaping by the throat's muscles compared to the other two throat points, closer to a simple release of breath and voice than to the more constricted sounds produced closer to the mouth.`,
      },
      {
        heading: 'Wasat al-halq: the middle point',
        body: `The middle throat point, wasat al-halq, produces ain (ع) and ha (ح), the second ha in Arabic, distinct in both spelling and sound from the ha already covered in the previous section. These two letters involve a genuine constriction partway down the throat, and this specific point is often the one non-native learners find hardest to isolate correctly, since the throat muscles involved are not used in a comparable way in many other languages.`,
      },
      {
        heading: 'Adna al-halq: the nearest point',
        body: `The nearest throat point to the mouth, adna al-halq, produces ghain (غ) and kha (خ). Being closest to the mouth among the three throat points, these two letters are sometimes mistakenly softened toward a more mouth-based sound by learners still adjusting to where the throat's involvement should actually begin and end, rather than being given their genuine throat-based articulation.`,
      },
      {
        heading: 'Why these six letters are worth learning as a distinct group now',
        body: `Beyond correct pronunciation in isolation, these exact six letters, hamza, ha, ain, ha, ghain, and kha, reappear together as a single named group in this course's fourth unit, where they form the specific condition requiring izhar halqi, clear pronunciation of noon sakinah, rather than any of the three other rules that noon sakinah can otherwise take. Recognizing these six letters confidently as "the throat letters" now, rather than encountering them as an unexplained list later, is exactly the kind of foundation this unit's opening topic already promised: every later rule in this course rests on correctly knowing where letters like these actually come from.`,
      },
      {
        heading: 'A practical note on learning these six letters by ear',
        body: `Because these six letters are widely reported as among the hardest for a self-taught learner to correct without outside help, this is a natural point in the course to practice the specific habit this course's first unit already recommended: reading this topic's description carefully, and then actively listening for exactly these six letters, and only these six, in a recording of correct recitation, ideally slowing the recording down and repeating the same short passage several times, focused entirely on the throat rather than on meaning or on any other part of the recitation for the moment.`,
      },
    ],
  },

  'makh-4': {
    id: 'makh-4',
    unit: 'unit-2',
    title: 'Al-Lisan: The Tongue and Its Points (Part 1)',
    summary: 'The deepest tongue points, from the back of the tongue toward the middle.',
    content: [
      {
        heading: 'The busiest region in the entire system, taken in two parts',
        body: `Al-lisan, the tongue, is responsible for ten of the seventeen total articulation points and eighteen letters, more than a third of the entire Arabic alphabet from a single organ. This unit's opening topic already flagged this in advance. This topic covers the first four of these ten points, moving from the very back of the tongue toward its middle and one of its edges; the next topic covers the remaining six, moving from the tongue's edges to its very tip.`,
      },
      {
        heading: 'Aqsa al-lisan: the back of the tongue, in two closely related points',
        body: `The very back of the tongue produces qaf (ق), where the extreme back of the tongue rises to meet the soft palate, the softer tissue at the very back of the roof of the mouth. Just slightly forward of this same position, and without the tongue needing to rise as fully, the back of the tongue meets the hard palate to produce kaf (ك). These two points sit close enough together that distinguishing them clearly is exactly the skill the qalb and kalb example in this unit's opening topic was built around: qaf pronounced correctly reaches further back and produces a noticeably fuller, heavier sound than kaf, which remains comparatively light.`,
      },
      {
        heading: 'Wasat al-lisan: the middle of the tongue, producing three letters at once',
        body: `Moving forward from qaf and kaf, the middle of the tongue rises to meet the middle portion of the roof of the mouth directly opposite it, producing three letters from this single point together: jeem (ج), sheen (ش), and ya (ي), specifically the consonant ya, distinct from the madd ya already covered in this unit's second topic. These three are sometimes remembered together using the mnemonic "jaish," formed from their three letters in sequence, precisely because they share this exact single articulation point despite sounding quite different from one another, a difference produced by the distinct characteristics covered directly in this course's next unit, not by any difference in where they are articulated.`,
      },
      {
        heading: 'Hafat al-lisan: the edge of the tongue, and the letter often called hardest in the language',
        body: `One further point belongs naturally within this topic's back-to-middle progression: the edge of the tongue, pressed against the upper molars on one side, either the right, the left, or occasionally both together, produces dad (ض). This letter is frequently singled out as the most difficult in Arabic to pronounce correctly, distinctive enough that classical Arabic itself was sometimes called "the language of dad" specifically because of how uniquely this sound is formed compared to every other letter in the language, or in most other languages a learner is likely to already speak.`,
      },
      {
        heading: 'Why dad deserves this much individual attention',
        body: `Dad's difficulty is not incidental to this course's purpose. It is one of the clearest possible illustrations of why makharij must be learned by ear and correction, not from written description alone, exactly as this unit's opening topic already stated directly. A learner attempting dad for the first time often produces something closer to a plain dal, the letter covered in this unit's next topic, since dal's tip-of-tongue articulation is far more familiar and comfortable to reach for by default. The two letters are genuinely distinct, both in articulation point and in the specific quality this course's next unit will describe as isti'la, and confusing them is one of the single most common articulation errors reported among learners of Arabic.`,
      },
      {
        heading: 'Setting up the remaining six points',
        body: `Having covered the back and middle of the tongue, along with dad at the edge, this unit's next topic completes al-lisan by moving through its remaining six points, all located progressively closer to the very tip of the tongue, where the largest concentration of individual articulation points in the entire system is found.`,
      },
    ],
  },

  'makh-5': {
    id: 'makh-5',
    unit: 'unit-2',
    title: 'Al-Lisan: The Tongue and Its Points (Part 2)',
    summary: 'The remaining tongue points, from the sides and tip of the tongue.',
    content: [
      {
        heading: 'Continuing forward from where the previous topic ended',
        body: `Having covered qaf, kaf, the jeem-sheen-ya group, and dad in this unit's previous topic, this topic completes al-lisan's remaining six points and fourteen letters, all clustered toward the front of the tongue, finishing with the very tip.`,
      },
      {
        heading: 'Lam: the edge of the tongue, just forward of dad',
        body: `Moving forward from dad's position at the edge of the tongue, lam (ل) is produced where the edge and front of the tongue meet the gums of the upper front teeth. This point sits close enough to dad's own edge-of-tongue articulation that the two are grouped together in some classical descriptions as a single broader region of the tongue's edge, even though they are treated as two separate points producing two entirely distinct letters.`,
      },
      {
        heading: 'Noon and ra: two points at the very tip, close together but genuinely distinct',
        body: `Just past lam, the tip of the tongue itself produces noon (ن) against the gum ridge, and immediately behind noon's position, still at the tip but reaching slightly further back, ra (ر) is produced with a distinct striking or flapping quality against that same gum area. These two letters sit close enough together that they are frequently confused by new learners, and the specific difference in quality between them, noon's steadier tone against ra's brief flap, connects directly to the characteristic of takrir (repetition) covered in this course's next unit, which belongs specifically to ra and to no other letter in the language.`,
      },
      {
        heading: 'An-nati\'ah: three letters sharing the base of the front teeth',
        body: `The tip of the tongue, pressed against the base or root of the two upper front incisors, exactly where the gum meets the teeth, produces three letters together: ta with a heavy quality (ط), dal (د), and ta (ت). These three are classically grouped under the name an-nati'ah, and among them, the heavy ta reaches slightly more firmly against the teeth than the other two, a small but genuine difference in pressure that accompanies the additional characteristic this letter carries, covered directly in this course's next unit.`,
      },
      {
        heading: 'The whistling letters: tip of the tongue near the lower teeth',
        body: `Moving to a position near the lower front teeth rather than the upper ones, the tip of the tongue, held with a small gap rather than full contact, produces seen (س), sad (ص), and zay (ز), with the sound passing just above the two lower front incisors through that small gap. These three share a distinctive whistling quality that gives this specific group its common name, and this same small-gap technique, rather than full contact, is exactly what distinguishes this point from the full-contact points already covered in this topic.`,
      },
      {
        heading: 'The interdental letters: tip of the tongue at the very edge of the upper teeth',
        body: `The final point completes al-lisan at the very edges of the two upper front teeth, where the tip of the tongue touches those edges directly, producing tha (ث), dhal (ذ), and dha (ظ). Because the tongue is visibly placed between the upper and lower teeth to produce this group correctly, they are commonly called the interdental letters, and this visible placement makes them one of the easier tongue groups for a learner to self-correct simply by watching their own mouth in a mirror while practicing, unlike several of the points already covered in this unit that are entirely hidden from view.`,
      },
      {
        heading: 'Ten points, eighteen letters, one organ',
        body: `Taken together across this topic and the previous one, al-lisan's ten points, qaf, kaf, the jeem-sheen-ya group, dad, lam, noon, ra, the an-nati'ah group, the whistling letters, and the interdental letters, account for eighteen of the Arabic alphabet's twenty-eight letters. No other single region covered in this unit comes close to this range, which is exactly why this course devoted two full topics to a single organ rather than one, and why the tongue will likely require more of a learner's own deliberate practice time than any other region this unit describes.`,
      },
    ],
  },

  'makh-6': {
    id: 'makh-6',
    unit: 'unit-2',
    title: 'Ash-Shafatayn and Al-Khayshum: The Lips and the Nasal Passage',
    summary: 'The lip letters and the nasal passage responsible for ghunnah.',
    content: [
      {
        heading: 'Completing the journey from throat to lips',
        body: `Having moved through al-jawf, al-halq, and al-lisan, this unit's final topic reaches the frontmost region of the mouth, the two lips, before closing with a region that sits apart from the mouth entirely: the nasal passage.`,
      },
      {
        heading: 'The first lip point: inner lower lip against the upper teeth',
        body: `The first of ash-shafatan's two points produces a single letter, fa (ف), where the inner, moist edge of the lower lip meets the tips of the upper front teeth. This is the only letter in the entire system produced by a lip meeting a tooth rather than meeting the other lip, which makes it a useful, distinctive landmark within this final region.`,
      },
      {
        heading: 'The second lip point: the two lips meeting each other',
        body: `The second point brings the two lips together directly, and produces three letters, each with a slightly different specific quality of contact. Ba (ب) is produced with the moist, inner parts of both lips meeting fully. Meem (م) is produced with the drier, outer parts of both lips meeting, and carries the added nasal resonance covered directly in this topic's next section. Waw (و), in its ordinary consonant role, distinct from the madd waw already covered in this unit's second topic, is produced with the lips brought close together and rounded, without the full closure that ba and meem both require.`,
      },
      {
        heading: 'Al-khayshum: a region defined by resonance rather than contact',
        body: `The fifth and final region, al-khayshum, the nasal passage, does not produce a distinct letter in the way every other region in this unit has. It is the source of ghunnah, a specific nasal resonance that accompanies noon and meem under particular conditions, most clearly whenever either letter carries a shaddah, doubling its sound. This resonance is measured in duration, held for a specific length rather than pronounced as a fixed point the way the other sixteen articulation points in this unit are.`,
      },
      {
        heading: 'Why al-khayshum is introduced here but explained fully later',
        body: `This unit introduces al-khayshum only briefly, by design, since ghunnah's full behavior depends directly on the specific rule categories this course's fourth and fifth units cover in complete detail: the rules of noon sakinah and tanween, and the rules of meem sakinah. Ghunnah's duration and quality actually shift depending on which specific rule applies in a given case, which is precisely the kind of context-dependent detail this course's very first unit already distinguished as a letter's due, ready to be covered once the relevant rule itself is introduced, rather than here alongside the sixteen fixed articulation points that never change regardless of context.`,
      },
      {
        heading: 'Closing this unit and opening the next',
        body: `This unit has now covered all seventeen articulation points across all five regions: the open space of al-jawf, the three throat points of al-halq, the ten points of al-lisan across two full topics, and the two lip points and single nasal source of ash-shafatan and al-khayshum. Every specific rule this course covers from this point forward, the four rules of noon sakinah, the three rules of meem sakinah, the laam rules, every category of madd, and the ra's own specific rules, is built directly on top of the seventeen points just covered. This course's next unit turns to the second half of what makes a letter what it is: not where it is produced, already covered in full here, but the specific characteristics, sifaat, that distinguish letters sharing the very same articulation point from one another, exactly the question this unit's fourth topic already raised directly regarding jeem, sheen, and ya.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 3 - SIFAAT AL-HURUF (full content, expanded)
  //
  // This unit describes the second half of what defines an Arabic
  // letter: not where it is produced (already covered in Unit 2),
  // but the specific manner in which it is produced. This is
  // descriptive phonetic fact rather than Qur'an or hadith, so no
  // verse blocks appear in this unit; letter groupings and classical
  // mnemonics were checked against multiple current tajweed
  // references before writing, and content is still recommended for
  // a qualified qari's review before publishing.
  // -----------------------------------------------------------
  'sifat-1': {
    id: 'sifat-1',
    unit: 'unit-3',
    title: 'Why Characteristics Matter Beyond the Articulation Point',
    summary: 'Why two letters sharing a makhraj can still sound completely different.',
    content: [
      {
        heading: 'A question this course has already raised without answering',
        body: `This course's previous unit noted directly that jeem, sheen, and the consonant ya all share a single articulation point, the middle of the tongue meeting the middle of the roof of the mouth, yet these three letters sound clearly distinct from one another to any listener. That unit deferred the actual explanation to this one. Sifah, plural sifaat, means characteristic, and it describes the specific manner in which a letter is produced: how the breath, the vocal cords, and the tongue's overall posture behave during articulation, distinct from where in the mouth that articulation physically happens.`,
      },
      {
        heading: 'Makhraj and sifah as two halves of a single complete description',
        body: `Neither articulation point nor characteristic alone fully describes an Arabic letter. Makhraj, covered in full in this course's previous unit, answers where. Sifah, covered in this unit, answers how. A letter is only completely and correctly described once both are known together, which is exactly why jeem, sheen, and ya, sharing the same where, are still fully distinguishable once their different hows are added: jeem carries a specific fullness of sound, sheen carries a distinctive spreading quality across the mouth, and the consonant ya remains comparatively light and fluent, differences this unit's remaining topics will name precisely rather than only describe impressionistically.`,
      },
      {
        heading: 'Two broad categories of characteristic',
        body: `Scholars divide the full set of letter characteristics into two categories. The first, sifaat allati laha didd, characteristics that have an opposite, consists of five paired qualities, meaning every single Arabic letter carries exactly one quality from each of these five pairs, ten possible qualities in total, four covered in this unit's own dedicated topics and the fifth covered in this unit's closing topic. The second, sifaat allati la didd laha, characteristics without an opposite, consists of several additional qualities that only specific individual letters carry, with no matching opposite quality assigned to the remaining alphabet. A letter can carry several of these individual qualities at once, or none at all.`,
      },
      {
        heading: 'Why the paired characteristics come first in this unit',
        body: `This unit covers the five paired characteristics before the unpaired ones specifically because every single letter in the alphabet carries a value on all five, making them the more foundational, universally applicable half of this unit's subject. The unpaired characteristics that follow are genuinely important, several of them are directly responsible for specific tajweed rules covered later in this course, but they apply selectively rather than universally, which is why this unit's structure moves from the five paired qualities every letter shares in some form, to the smaller set of individual qualities only some letters carry.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `The next three topics cover three of the five paired characteristics directly: hams and jahr, concerning whether breath escapes freely during articulation; shiddah, tawassut, and rakhawah, concerning how completely airflow is stopped; and isti'la and istifal, concerning whether the back of the tongue rises during articulation. This unit's fifth topic covers itbaq and infitah, closely related to isti'la and building directly on it. This unit's sixth and closing topic covers the fifth paired characteristic, idhlaq and ismat, together with the full set of individual, unpaired characteristics, including qalqalah and safeer, both already touched upon briefly in this course's previous unit and given their complete explanation here.`,
      },
    ],
  },

  'sifat-2': {
    id: 'sifat-2',
    unit: 'unit-3',
    title: 'Hams and Jahr: Whispered and Voiced Letters',
    summary: 'Which letters carry audible breath and which rely on the voice alone.',
    content: [
      {
        heading: 'Hams: letters that release a continuing flow of breath',
        body: `Hams describes a letter pronounced with a continuing, audible flow of breath escaping alongside the sound itself, a quality most noticeable when the letter carries a sukoon, no vowel of its own. Ten letters carry this quality, collected in the memorable phrase fahathahu shakhsun sakata, containing every one of them in sequence: fa (ف), ha (ح), tha (ث), ha (ه), sheen (ش), kha (خ), sad (ص), seen (س), kaf (ك), and ta (ت).`,
      },
      {
        heading: 'Jahr: letters produced without that same escaping breath',
        body: `Jahr describes the remaining eighteen letters of the alphabet, where the vocal cords come together more fully during articulation and noticeably less breath escapes alongside the sound. This produces a fuller, more resonant quality compared to hams letters, since the sound relies more on voicing itself and less on audible airflow accompanying it.`,
      },
      {
        heading: 'A simple physical test for telling the two apart',
        body: `A practical way to feel this distinction directly: hold a hand or a small piece of paper close to the mouth while pronouncing a hams letter with a sukoon, such as the fa in a word like tafsir, and a clearly noticeable puff of air should be felt or seen moving the paper. Producing a jahr letter with a sukoon under the same test, such as the ba in a word like yaktub, should produce far less noticeable airflow, since the sound is carried mainly by the voice rather than by escaping breath.`,
      },
      {
        heading: 'Why this specific characteristic matters for accurate recitation',
        body: `Failing to give a hams letter its genuine breath, or conversely adding unnecessary breath to a jahr letter, produces a recognizably incorrect quality even when the articulation point itself is technically correct. This is precisely the kind of subtle deviation this course's earlier unit named as al-lahn al-khafi, a hidden error a trained ear would notice even though it does not usually change a word's actual meaning. Getting hams and jahr right is part of what separates recitation that merely uses the correct letters from recitation that genuinely sounds correct.`,
      },
      {
        heading: 'Connecting this back to a letter already discussed directly',
        body: `Dad, already covered in this course's previous unit as widely considered the most difficult letter in Arabic, is a jahr letter, meaning it should be produced with full voicing and comparatively little escaping breath, which is one further reason it is so often mispronounced by learners reaching instead for something closer to a hams-like, breathier quality out of unfamiliarity with its genuine articulation point at the edge of the tongue.`,
      },
    ],
  },

  'sifat-3': {
    id: 'sifat-3',
    unit: 'unit-3',
    title: 'Shiddah, Tawassut, and Rakhawah: Strength of Airflow',
    summary: 'How fully the airflow is stopped, partially stopped, or allowed to flow freely.',
    content: [
      {
        heading: 'Shiddah: a complete stop of sound at the articulation point',
        body: `Shiddah describes a letter whose sound is completely stopped at its articulation point before being released, since the specific point of contact fully blocks the passage of air for a brief instant. Eight letters carry this quality, collected in the phrase ajida qattin bakat: hamza (أ), jeem (ج), dal (د), qaf (ق), ta heavy (ط), ba (ب), kaf (ك), and ta (ت). A shiddah letter carrying a sukoon produces a distinctly clipped, stopped quality rather than any continuing sound.`,
      },
      {
        heading: 'Rakhawah: sound that continues flowing freely',
        body: `Rakhawah describes the opposite condition: a letter whose sound continues flowing freely at its articulation point, without the same complete blockage shiddah letters produce. This quality belongs to most of the remaining alphabet, specifically every letter not already classified under shiddah or the middle category covered next, and produces a noticeably more sustained, continuous quality when the letter carries a sukoon compared to the abrupt stop of a shiddah letter.`,
      },
      {
        heading: 'Tawassut: a genuine middle ground between the two',
        body: `Five letters occupy a middle position between shiddah's complete stop and rakhawah's free flow, collected in the phrase lin umara: lam (ل), noon (ن), ain (ع), meem (م), and ra (ر). These letters, sometimes called bayniyyah, in-between letters, allow the sound to continue briefly rather than stopping completely, but without the same fully free, sustained flow that genuine rakhawah letters produce. This middle category exists because neither of the other two descriptions accurately captures what happens physically when these five specific letters are pronounced.`,
      },
      {
        heading: 'Why this characteristic shapes how a sukoon actually sounds',
        body: `This entire characteristic becomes most audible specifically when a letter carries a sukoon, since a vowel naturally carries its own sound regardless of the consonant's own airflow quality, while a sukoon leaves that quality fully exposed. A shiddah letter with a sukoon, such as the ba in yaktub, should sound genuinely stopped and clipped. A rakhawah letter with a sukoon, such as the seen in yastamiu, should sound genuinely continuous, capable in principle of being sustained for as long as breath allows. Confusing these two qualities, giving a rakhawah letter an unnaturally abrupt stop or a shiddah letter an unnaturally extended release, produces exactly the same kind of subtle but real deviation already discussed in this unit's previous topic.`,
      },
      {
        heading: 'A brief connection to material already covered',
        body: `Ra, one of the five tawassut letters, already received attention in this course's previous unit regarding its distinct striking or flapping quality at the tip of the tongue, and this course's ninth unit will return to ra directly for its own specific set of rules governing when it is pronounced heavy or light. Its tawassut characteristic, a partial rather than complete stop of sound, is part of what gives ra its distinctive quality compared to noon, produced at a very similar tip-of-tongue position but without ra's own flapping release.`,
      },
    ],
  },

  'sifat-4': {
    id: 'sifat-4',
    unit: 'unit-3',
    title: 'Isti\'la and Istifal: Elevation and Its Absence',
    summary: 'The letters that raise the back of the tongue, and why this changes their sound.',
    content: [
      {
        heading: 'Isti\'la: letters produced with the back of the tongue raised',
        body: `Isti'la describes a letter produced with the back of the tongue rising toward the roof of the mouth during articulation, which fills the mouth's cavity more fully with sound and produces a noticeably heavier, thicker quality. Seven letters carry this quality, collected in the phrase khusa daghtin qaza: kha (خ), sad (ص), dad (ض), ghain (غ), ta heavy (ط), qaf (ق), and dha (ظ).`,
      },
      {
        heading: 'Istifal: letters produced with the tongue kept low',
        body: `Istifal describes the remaining twenty-one letters of the alphabet, produced with the back of the tongue kept low, close to the floor of the mouth, allowing the sound to travel more directly and thinly through the mouth's cavity rather than filling it. This produces the noticeably lighter, thinner quality that characterizes the majority of Arabic letters compared to the seven isti'la letters.`,
      },
      {
        heading: 'Why this specific pair matters more than almost any other',
        body: `Isti'la and istifal are the direct foundation of what is commonly described in everyday tajweed instruction as heavy letters and light letters, a distinction this course will return to directly and repeatedly: the laam of Allah's own name, covered in this course's sixth unit, is pronounced heavy specifically under certain conditions connected to this same quality, and the ra', covered in this course's ninth unit, shifts between heavy and light pronunciation according to rules that likewise trace back to this same underlying tongue posture. Genuinely understanding isti'la now, rather than only memorizing the word "heavy" as an unexplained label, is what will make both of those later units make sense as applications of a single underlying principle rather than two unrelated new topics.`,
      },
      {
        heading: 'A practical way to feel the difference directly',
        body: `Isti'la's heavier quality can be felt directly by alternating between an isti'la letter and a similar istifal letter produced at a nearby articulation point, noticing how the mouth's cavity seems to fill more fully and the sound resonates more deeply for the isti'la letter. Comparing ta heavy (ط), an isti'la letter, against ta (ت), an istifal letter produced from a closely related tip-of-tongue position already covered in this course's previous unit, makes this difference in fullness and depth of sound directly and immediately audible, even though both letters share a similar general area of articulation.`,
      },
      {
        heading: 'Setting up the next, closely related topic',
        body: `Four of these same seven isti'la letters carry an additional, even stronger characteristic covered directly in this unit's next topic, itbaq, which intensifies this same heaviness even further. This is not a coincidence or an overlap to be confused by. It reflects a genuine nested relationship between these two characteristics, examined directly and explained fully in the topic that follows.`,
      },
    ],
  },

  'sifat-5': {
    id: 'sifat-5',
    unit: 'unit-3',
    title: 'Itbaq and Infitah: Enclosure of the Tongue',
    summary: 'The four letters pronounced with the tongue pressed close to the roof of the mouth.',
    content: [
      {
        heading: 'Itbaq: the tongue pressed fully against the roof of the mouth',
        body: `Itbaq describes a letter produced with a broad portion of the tongue pressed upward, close against the roof of the mouth, trapping the sound within this enclosed space before its release. Exactly four letters carry this quality: ta heavy (ط), sad (ص), dad (ض), and dha (ظ).`,
      },
      {
        heading: 'A genuine nested relationship with isti\'la, not a coincidence',
        body: `Every one of these four itbaq letters is also one of the seven isti'la letters already covered in this unit's previous topic, meaning itbaq does not describe a separate set of letters alongside isti'la, but rather a smaller subset of the isti'la letters carrying an additional, more intense degree of the same underlying heaviness. The remaining three isti'la letters, kha, ghain, and qaf, raise the back of the tongue without this same fuller pressing enclosure, making them heavy but not to the same maximal degree as the four itbaq letters.`,
      },
      {
        heading: 'Infitah: every letter without this enclosure',
        body: `Infitah describes the remaining twenty-four letters of the alphabet, produced without this same broad pressing contact between the tongue and the roof of the mouth, regardless of whether that letter also happens to carry isti'la. Kha, ghain, and qaf, despite carrying isti'la's elevated tongue posture, are still classified under infitah rather than itbaq, since they lack this additional enclosing contact specifically.`,
      },
      {
        heading: 'Why these four specific letters carry the heaviest sound in the entire alphabet',
        body: `Combining isti'la's elevated tongue with itbaq's fuller enclosure makes ta heavy, sad, dad, and dha the four heaviest, thickest sounding letters in the entire Arabic alphabet, a genuinely useful fact to hold onto directly, since these four letters will reappear repeatedly across this course's remaining units wherever a discussion of heaviness, thickness, or emphatic pronunciation becomes relevant, including the laam and ra' rules already mentioned in this unit's previous topic.`,
      },
      {
        heading: 'A concrete pair worth comparing directly',
        body: `Dal (د) and dad (ض) make a particularly useful comparison for feeling itbaq directly, since both are produced with the tongue reaching toward a broadly similar area of the mouth, yet dal carries neither isti'la nor itbaq while dad carries both. Alternating between these two letters, noticing how much fuller and heavier dad feels compared to dal's comparatively light, quick articulation, is one of the more effective ways to internalize exactly what itbaq's enclosing quality actually adds on top of an already elevated tongue position.`,
      },
    ],
  },

  'sifat-6': {
    id: 'sifat-6',
    unit: 'unit-3',
    title: 'The Remaining Distinctive Characteristics',
    summary: 'Qalqalah, safeer, and the other characteristics belonging to individual letters.',
    content: [
      {
        heading: 'The fifth and final paired characteristic: idhlaq and ismat',
        body: `Before turning to the characteristics without opposites, this unit closes its coverage of the five paired characteristics with idhlaq and ismat. Idhlaq describes letters produced fluently and easily, specifically from the tip of the tongue or the lips, articulators capable of quick, light movement. Six letters carry this quality, collected in the phrase farra min lubb: fa (ف), ra (ر), meem (م), noon (ن), lam (ل), and ba (ب). Ismat describes the remaining twenty-two letters, produced with comparatively more articulatory effort, a quality most noticeable in words containing several ismat letters clustered together, which tend to demand more deliberate effort to pronounce smoothly than words built mainly from the six fluent idhlaq letters.`,
      },
      {
        heading: 'Qalqalah: a distinctive bounce introduced briefly here',
        body: `Qalqalah describes a brief, echoing bounce of sound that occurs specifically when one of five particular letters carries a sukoon, produced by a slight, controlled release of built-up pressure at the articulation point rather than a plain, flat stop. Five letters carry this quality, collected in the phrase qutbu jadd: qaf (ق), ta heavy (ط), ba (ب), jeem (ج), and dal (د). This course's ninth unit returns to qalqalah in complete detail, including the distinction between its minor and major forms, so this topic introduces it only briefly, in its proper place alongside every other characteristic covered in this unit.`,
      },
      {
        heading: 'Safeer: the whistling quality already encountered directly',
        body: `Safeer describes a distinctive whistling quality carried by exactly three letters, already named directly in this course's previous unit as the whistling letters produced from a small gap near the lower front teeth: sad (ص), zay (ز), and seen (س). This characteristic and that articulation point work together directly, the small gap already described is precisely what produces the whistling quality this characteristic names.`,
      },
      {
        heading: 'Leen: softness in a specific, limited condition',
        body: `Leen describes a specific softness carried by waw and ya, precisely when each is sakinah and immediately preceded by a letter carrying a fatha, as in words like qawl and khayr. This differs from the madd condition covered in this course's second unit, where waw and ya are preceded by their matching vowel, damma or kasra respectively, rather than by a fatha. This course's seventh unit, covering the letters of madd and layyin together, returns to this exact condition in full detail, so it is introduced only briefly here.`,
      },
      {
        heading: 'Inhiraf, takrir, and tafashi: three qualities already touched upon',
        body: `Inhiraf, meaning deviation, describes lam and ra, both produced with the sound deviating slightly toward a nearby part of the mouth rather than emerging in a single direct line, connected to why both letters have already been described in this course's previous unit as sharing a broadly similar tip-of-tongue region despite being fully distinct letters. Takrir, meaning repetition, belongs specifically and only to ra, describing the same brief flapping or striking quality this course's previous unit already used to distinguish ra from its close neighbor noon. Tafashi, meaning spreading, belongs specifically and only to sheen, describing how its sound spreads more broadly across the mouth compared to any other letter, precisely the distinctive quality that helps separate sheen from jeem and the consonant ya despite all three sharing a single articulation point, the very question this unit opened with in its first topic.`,
      },
      {
        heading: 'Istitalah: the quality that makes dad genuinely unique',
        body: `Istitalah, meaning elongation, belongs specifically and only to dad, describing how its sound stretches along the full edge of the tongue against the upper molars rather than emerging from a single fixed point the way most other letters do. Combined with dad's jahr, isti'la, and itbaq already covered across this unit, istitalah completes the full picture of exactly why this single letter is so consistently singled out, across this entire course, as uniquely demanding among every letter in the Arabic alphabet.`,
      },
      {
        heading: 'Closing this unit: makhraj and sifah together, at last complete',
        body: `Between this course's second and third units, every Arabic letter has now been described completely: its precise articulation point, and the full set of characteristics, paired and unpaired, that shape exactly how that point produces its distinctive sound. This complete description is not academic detail collected for its own sake. It is the direct foundation this course's remaining units are built upon, since every specific rule still to come, the four rules of noon sakinah, the three rules of meem sakinah, the laam rules, every category of madd, and the ra's own heavy and light conditions, is really just a specific, named consequence of the makharij and sifaat this course has now covered in full. This course's next unit turns to the first of these specific rule categories directly: what happens when a silent noon or tanween meets the letter that follows it.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 4 - RULES OF NOON SAKINAH AND TANWEEN (full content,
  // expanded)
  //
  // This unit describes the first rule category built directly on
  // Units 2 and 3. Letter groupings, the four exception words
  // (dunya, sinwan, qinwan, bunyan), the huruf muqatta'at exception,
  // and Quranic examples were checked against multiple current
  // tajweed references before writing. This is descriptive
  // phonetic/recitation fact rather than Qur'an or hadith content
  // in itself, so no verse blocks appear in this unit; content is
  // still recommended for a qualified qari's review before
  // publishing.
  // -----------------------------------------------------------
  'noon-1': {
    id: 'noon-1',
    unit: 'unit-4',
    title: 'Introduction to the Four Rules',
    summary: 'An overview of what happens when a silent noon or tanween meets the next letter.',
    content: [
      {
        heading: 'Two sounds treated as one and the same for these rules',
        body: `Noon sakinah is a noon carrying a sukoon, no vowel of its own, already covered in this course's second unit at its own specific articulation point, the tip of the tongue against the gum ridge. Tanween is the doubled vowel mark, fathatayn, dammatayn, or kasratayn, appearing at the end of many indefinite nouns, and functioning phonetically as an unwritten noon sakinah tacked onto the end of the word, even though no actual noon letter appears in the spelling. Because tanween behaves exactly like a noon sakinah in practice, every rule this unit covers applies identically to both, which is why they are always treated together as a single subject rather than as two separate topics.`,
      },
      {
        heading: 'Why what comes next determines everything',
        body: `A noon sakinah or tanween is never pronounced in isolation. Its actual sound depends entirely on the specific letter that immediately follows it, and Arabic scholars identified exactly four distinct outcomes depending on which letter that is: the noon can be pronounced with complete clarity, it can merge into the following letter, it can convert into an entirely different sound, or it can be partially concealed. These four outcomes are named izhar, idgham, iqlab, and ikhfa respectively, and together they account for every single letter in the Arabic alphabet, with no letter left unaccounted for and no letter belonging to more than one category.`,
      },
      {
        heading: 'The letter counts, given here as a map before the details',
        body: `Izhar applies before six specific letters, all of them the throat letters already covered directly in this course's second unit. Idgham applies before six further letters, itself split into two distinct forms depending on which of those six is involved. Iqlab applies before exactly one letter. Ikhfa applies before the remaining fifteen letters, the largest single group of the four. Six plus six plus one plus fifteen accounts for all twenty-eight letters of the Arabic alphabet, confirming that these four rules genuinely cover every possible case a noon sakinah or tanween could ever encounter.`,
      },
      {
        heading: 'Why this categorization is not arbitrary',
        body: `These four outcomes are not an arbitrary list to memorize without reason. Each one reflects a genuine relationship between the noon's own articulation point, already covered in this course's second unit, and the articulation point of whatever letter follows it. Letters produced far from the noon's own tip-of-tongue position, the throat letters, allow the noon to remain fully clear, since there is no risk of the two sounds blending together. Letters produced at or very near the noon's own position invite a genuine merging. A single letter close enough to invite blending but different enough to resist a full merge produces the specific conversion of iqlab. Everything else falls into the partial, in-between concealment of ikhfa. Every one of the four rules this unit covers is, in this sense, already predicted by the makharij this course's second unit established, not an unrelated new set of facts layered on top of it.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `This unit takes each of the four rules in turn: izhar halqi and its six throat letters, idgham and its two distinct forms, iqlab and its single letter, and ikhfa haqiqi and its remaining fifteen letters, the term haqiqi, true or real, distinguishing this specific ikhfa from a related but separate rule covering meem sakinah, examined directly in this course's next unit.`,
      },
    ],
  },

  'noon-2': {
    id: 'noon-2',
    unit: 'unit-4',
    title: 'Izhar Halqi: Clear Pronunciation',
    summary: 'The six throat letters that require the noon to be pronounced clearly.',
    content: [
      {
        heading: 'The same six letters already learned in this course\'s second unit',
        body: `Izhar halqi, throat clarity, applies whenever a noon sakinah or tanween is immediately followed by one of exactly six letters: hamza (ء), ha (ه), ain (ع), ha (ح), ghain (غ), and kha (خ). These are precisely the six throat letters this course's second unit already covered in detail as al-halq, meaning a student who genuinely learned that earlier topic already knows this rule's entire letter list without needing to memorize it separately here.`,
      },
      {
        heading: 'What izhar actually requires',
        body: `When one of these six letters follows a noon sakinah or tanween, the noon is pronounced fully and clearly from its own genuine articulation point, with no merging into the following letter, no conversion into a different sound, and no partial concealment. The noon simply sounds exactly as it would on its own, followed distinctly by the throat letter that comes next.`,
      },
      {
        heading: 'Why distance between articulation points is the entire explanation',
        body: `This course's opening topic already explained the underlying logic directly: the noon is produced from the tip of the tongue, while all six izhar letters are produced from the throat, at three points already covered in detail in this course's second unit. This is the greatest possible distance between any two articulation points covered anywhere in this course, and that physical distance is precisely why no blending occurs. The two sounds are simply too far apart in the mouth and throat to influence each other the way letters produced closer together naturally do.`,
      },
      {
        heading: 'A concrete example',
        body: `The word man aamana (مَنْ آمَنَ), whoever believes, places noon sakinah directly before hamza, one of the six izhar letters. The noon here is pronounced with its full, ordinary clarity, exactly as it would be pronounced in complete isolation, with the hamza following distinctly afterward, no different in principle from how these two sounds would be pronounced if they simply happened to appear next to each other in any ordinary context.`,
      },
      {
        heading: 'Why this is often considered the most straightforward of the four rules',
        body: `Of the four rules this unit covers, izhar halqi generally requires the least active adjustment from a reciter, since it essentially asks for the noon to be pronounced the same way it would be pronounced on its own, without any of the specific technique the remaining three rules require. This does not make it unimportant. A reciter who does not know this rule exists might mistakenly apply concealment or an unnecessary nasal quality here out of general habit, which is itself a real error, simply a different one from confusing izhar with one of the other three categories.`,
      },
    ],
  },

  'noon-3': {
    id: 'noon-3',
    unit: 'unit-4',
    title: 'Idgham: Merging, With and Without Ghunnah',
    summary: 'The letters that cause the noon to merge into what follows it.',
    content: [
      {
        heading: 'Six letters, collected in a single memorable word',
        body: `Idgham, merging, applies when a noon sakinah or tanween is followed by one of six letters: ya (ي), ra (ر), meem (م), lam (ل), waw (و), and noon (ن), traditionally collected into the single word yarmaluna for easy memorization. Rather than being pronounced as two separate, distinct sounds, the noon merges directly into whichever of these six letters follows it, producing what sounds like a single, doubled letter rather than two separate ones.`,
      },
      {
        heading: 'Splitting these six letters into two genuinely different outcomes',
        body: `These six letters do not all produce identical results. Four of them, ya, noon, meem, and waw, collected in the word yanmu, produce idgham accompanied by ghunnah, the nasal resonance already introduced in this course's second unit, held for a measured duration during the merge. The remaining two, lam and ra, produce idgham with no ghunnah at all, a complete, clean merge with no nasal quality accompanying it whatsoever.`,
      },
      {
        heading: 'Two concrete examples showing the difference directly',
        body: `Man yaqoolu (مَنْ يَقُولُ), whoever says, merges its noon into the following ya with ghunnah retained, producing a sound closer to "may-yaqoolu" with a genuine nasal hum carried through the merge. Min rabbihim (مِنْ رَبِّهِمْ), from their Lord, merges its noon into the following ra with no ghunnah at all, producing a clean, complete merge closer to "mirabbihim" with no nasal quality present.`,
      },
      {
        heading: 'A genuine exception: when idgham does not apply at all',
        body: `Idgham specifically requires the noon sakinah and the idgham letter that follows it to belong to two separate words. When both occur within a single word, idgham is not applied, and the noon is instead pronounced with full clarity, a specific situation called izhar mutlaq, absolute clarity, to distinguish it from izhar halqi already covered in this unit's previous topic, since no throat letter is actually involved here. This exact situation occurs in exactly four words found in the Qur'an: dunya (دنيا), sinwan (صنوان), qinwan (قنوان), and bunyan (بنيان), each containing a noon sakinah immediately followed by ya or waw within that same single word.`,
      },
      {
        heading: 'A further, more specific exception worth knowing',
        body: `A related situation appears at the opening of certain surahs formed from disconnected letters, huruf muqatta'at. In Surah Yasin, the letter-name Yasin is immediately followed by wal-quran, beginning with waw, and in Surah al-Qalam, the letter-name Nun is immediately followed by wal-qalam, also beginning with waw, both technically satisfying idgham's usual conditions across two separate words. In the widely transmitted recitation of Hafs, the noon in each of these specific cases is nonetheless still pronounced clearly rather than merged, preserving the distinct identity of each letter-name as it opens its surah rather than blending it immediately into the word that follows.`,
      },
      {
        heading: 'Why the split between ghunnah and no ghunnah matters practically',
        body: `Applying ghunnah where it does not belong, or omitting it where it does, is exactly the kind of subtle deviation this course's earlier unit named al-lahn al-khafi, since the underlying letters and general merging are still correct even when this specific detail is missed. Learning yanmu and its two remaining letters, lam and ra, as two clearly separated groups rather than one undifferentiated list of six is what actually prevents this specific, common mistake.`,
      },
    ],
  },

  'noon-4': {
    id: 'noon-4',
    unit: 'unit-4',
    title: 'Iqlab: Conversion to Meem',
    summary: 'The single letter that converts a silent noon into a meem sound.',
    content: [
      {
        heading: 'The simplest rule to identify, involving a single letter',
        body: `Iqlab, conversion, applies whenever a noon sakinah or tanween is immediately followed by exactly one letter in the entire Arabic alphabet: ba (ب). Because only one letter triggers this rule, it is often considered the easiest of the four to recognize on sight, requiring no list of six or fifteen letters to hold in memory, only this single one.`,
      },
      {
        heading: 'What actually happens to the noon\'s sound',
        body: `Rather than being pronounced as a noon at all, the sound is converted into a meem, already covered in this course's second unit as sharing ash-shafatan, the lips, with ba itself, produced with a genuine nasal ghunnah held for a measured duration, then followed by the ba. This conversion exists precisely because noon and ba are produced at articulation points too different to merge cleanly the way idgham's letters do, yet close enough in overall vocal behavior that a plain, unaltered noon would sound noticeably awkward directly before a lip-produced letter like ba.`,
      },
      {
        heading: 'A visual marker unique to this one rule',
        body: `Iqlab is the only one of the four rules covered in this unit given its own dedicated visual marker in a standard Qur'anic mushaf: a small letter meem written directly above the noon or tanween wherever iqlab applies, a direct, printed reminder for any reciter reading the actual text rather than reciting purely from memory.`,
      },
      {
        heading: 'A concrete example',
        body: `Min ba'd (مِنْ بَعْدِ), after, converts its noon sakinah into a nasalized meem sound before the ba, producing something closer to "mim ba'd" in actual pronunciation, even though the word remains spelled with its original noon throughout, since Arabic spelling preserves the letter noon regardless of how iqlab actually changes its spoken sound.`,
      },
      {
        heading: 'Why this rule exists as its own separate category at all',
        body: `A reasonable question worth addressing directly: why does ba receive an entire rule of its own rather than being folded into ikhfa, the concealment rule covered in this unit's final topic, especially since both rules involve a noon that is neither fully clear nor fully merged. The answer lies in the specific, genuine change of sound involved. Ikhfa conceals a noon while still keeping it recognizably a nasalized noon-like sound. Iqlab does not merely conceal the noon, it actually replaces it with a different letter's sound entirely, meem rather than noon, which is a distinct enough phonetic event to warrant its own separate name and its own separate rule.`,
      },
    ],
  },

  'noon-5': {
    id: 'noon-5',
    unit: 'unit-4',
    title: 'Ikhfa Haqiqi: True Concealment',
    summary: 'The remaining letters that partially conceal the noon between two extremes.',
    content: [
      {
        heading: 'Everything left over, once the other three rules are known',
        body: `Ikhfa haqiqi, true concealment, applies to the fifteen letters remaining once izhar's six throat letters, idgham's six yarmaluna letters, and iqlab's single ba are all set aside: ta (ت), tha (ث), jeem (ج), dal (د), dhal (ذ), zay (ز), seen (س), sheen (ش), sad (ص), dad (ض), ta heavy (ط), dha (ظ), fa (ف), qaf (ق), and kaf (ك). This is by a wide margin the largest of the four categories, and one practical way to recognize it is precisely by elimination: any letter not already accounted for by the other three rules belongs here.`,
      },
      {
        heading: 'A genuine middle ground between izhar and idgham',
        body: `Ikhfa describes a noon pronounced neither with izhar's full clarity nor with idgham's complete merge, but in a genuine middle position between the two. The tongue moves toward the articulation point of the following letter without fully reaching or touching it, while the noon's nasal ghunnah is held throughout, producing a sound that is recognizably still a noon, yet noticeably softened and concealed compared to izhar's fully clear pronunciation.`,
      },
      {
        heading: 'A concrete example, felt directly in the mouth',
        body: `Antum (أَنْتُمْ), you, places noon sakinah directly before ta, one of the fifteen ikhfa letters. Reciting this correctly, the tongue moves toward ta's own tip-of-tongue articulation point, already covered in this course's second unit, without the tongue actually completing full contact there the way a plain, ordinary noon or a genuine idgham merge would require, while a nasal hum continues through the transition between the two letters.`,
      },
      {
        heading: 'Why haqiqi, true or real, is part of this rule\'s full name',
        body: `This unit's opening topic already flagged that this specific rule is called ikhfa haqiqi rather than simply ikhfa, and the reason becomes directly relevant in this course's very next unit: meem sakinah has its own separate concealment rule, ikhfa shafawi, lip concealment, covering a genuinely different situation involving a different letter entirely. Ikhfa haqiqi's own name specifically marks it as the true, original concealment rule belonging to noon sakinah and tanween, distinguishing it clearly from its related but separate counterpart covered next.`,
      },
      {
        heading: 'Closing this unit and looking to the next',
        body: `This unit has now covered all four rules governing noon sakinah and tanween, izhar halqi, idgham with its two forms, iqlab, and ikhfa haqiqi, together accounting for every letter a noon sakinah or tanween could ever meet. Every one of these four rules, exactly as this unit's opening topic predicted, traced directly back to the specific articulation points this course's second unit already established. This course's next unit turns to a closely related but distinct subject: meem sakinah, a silent meem, which carries its own three rules, two of which share real conceptual overlap with material already covered in this unit, and one of which, ikhfa shafawi, is the specific counterpart to ikhfa haqiqi already introduced directly in this unit's closing topic.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 5 - RULES OF MEEM SAKINAH (full content, expanded)
  //
  // This unit describes the direct meem-focused counterpart to
  // Unit 4's noon sakinah rules. Letter groupings, terminology, and
  // the classical caution around fa and waw in izhar shafawi were
  // checked against multiple current tajweed references before
  // writing. This is descriptive phonetic/recitation fact rather
  // than Qur'an or hadith content in itself, so no verse blocks
  // appear in this unit; content is still recommended for a
  // qualified qari's review before publishing.
  // -----------------------------------------------------------
  'meem-1': {
    id: 'meem-1',
    unit: 'unit-5',
    title: 'The Three Rules of Meem Sakinah',
    summary: 'How a silent meem is treated depending on the letter that follows it.',
    content: [
      {
        heading: 'The same underlying question, now asked of a different letter',
        body: `Meem sakinah, a meem carrying a sukoon, follows exactly the same underlying logic this course's previous unit already established for noon sakinah: its actual pronunciation depends entirely on the specific letter that comes immediately after it. What changes here is the letter itself, meem rather than noon, and, as a direct consequence, the specific set of outcomes that logic actually produces.`,
      },
      {
        heading: 'Three rules rather than four',
        body: `Where noon sakinah produced four distinct outcomes, meem sakinah produces only three: ikhfa shafawi, concealment, when followed by ba; idgham shafawi, merging, when followed by another meem; and izhar shafawi, clarity, when followed by any of the remaining twenty-six letters. Every single letter in the Arabic alphabet is accounted for across these three categories, with ba and meem itself each receiving their own dedicated rule, and every other letter falling under the third.`,
      },
      {
        heading: 'Why "shafawi" describes all three rules together',
        body: `Shafawi means labial, relating to the lips, and every one of meem sakinah's three rules carries this same name specifically because meem itself is produced from ash-shafatan, the lips, already covered in this course's second unit. This is a direct parallel to how noon sakinah's own rules, halqi and haqiqi among them, took their names from noon's specific articulation context. Naming these rules after the lips signals directly that meem's own articulation point is what actually drives every one of the three outcomes this unit covers.`,
      },
      {
        heading: 'Why meem produces fewer outcomes than noon',
        body: `Noon sakinah's four rules exist because a wide range of articulation points, from the deep throat letters to letters immediately adjacent to noon's own position, each produce a genuinely different relationship to noon. Meem, produced specifically at the lips, has a much narrower set of letters positioned closely enough to interact with it in a comparably varied way. Only ba, also produced at the lips as already covered in this course's second unit, sits close enough to meem to warrant its own specific concealment rule, and only another meem is, by definition, identical to meem itself, warranting a genuine merge. Every other letter in the alphabet, regardless of its own specific articulation point, is simply distant enough from meem's lip-based position to require nothing more than meem's own ordinary, clear pronunciation.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `This unit's next topic covers ikhfa shafawi and idgham shafawi together, since both involve a genuine adjustment to meem's plain pronunciation, before this unit's third topic covers izhar shafawi, the far more common default case, and this unit's closing topic returns to ghunnah itself, examining its single strongest, most complete form: any noon or meem carrying a shaddah, regardless of what follows it at all.`,
      },
    ],
  },

  'meem-2': {
    id: 'meem-2',
    unit: 'unit-5',
    title: 'Ikhfa Shafawi and Idgham Shafawi',
    summary: 'Concealment and merging, specific to the meem and its own articulation point.',
    content: [
      {
        heading: 'Ikhfa shafawi: a single letter, and a genuine parallel to iqlab',
        body: `Ikhfa shafawi applies in exactly one situation: a meem sakinah immediately followed by ba. The lips come together only lightly, without the fuller pressure a plain, complete meem would require, while a nasal ghunnah is held for a measured duration, roughly two counts, before the lips fully close for the following ba. This produces a sound genuinely similar to noon sakinah's own iqlab, already covered in this course's previous unit, since both situations involve a nasalized sound bridging into a following ba, though ikhfa shafawi conceals an already-present meem rather than converting a noon into one.`,
      },
      {
        heading: 'A concrete example of ikhfa shafawi',
        body: `Tarmeehim bi hijaratin (تَرْمِيهِم بِحِجَارَةٍ), from Surah al-Fil, striking them with stones, places meem sakinah directly before ba. The meem here is lightly concealed rather than fully, clearly pronounced, with the nasal ghunnah carrying through the transition into the ba that follows.`,
      },
      {
        heading: 'Idgham shafawi: merging with an identical letter',
        body: `Idgham shafawi applies when a meem sakinah is immediately followed by another meem, a situation scholars also describe using the more general term idgham mithlayn, merging of two identical letters, since this is simply the specific instance of that broader principle involving meem. The two meems merge into a single, doubled sound, held with ghunnah for a measured duration, roughly two counts, functioning in practice like one meem carrying a shaddah rather than two separate, sequential meems.`,
      },
      {
        heading: 'A concrete example of idgham shafawi',
        body: `Hum muflihoon (هُمْ مُفْلِحُونَ), from Surah al-Baqarah, they are the successful ones, places meem sakinah directly before another meem. Rather than pronouncing two separate meem sounds in sequence, the two merge into one sustained, doubled meem carried with ghunnah, exactly as this rule requires.`,
      },
      {
        heading: 'Why both rules carry ghunnah, unlike izhar shafawi covered next',
        body: `Both ikhfa shafawi and idgham shafawi share genuine ghunnah as part of their correct pronunciation, distinguishing them directly from izhar shafawi, covered in this unit's next topic, which carries no added ghunnah at all. This mirrors a pattern already familiar from this course's previous unit: rules involving a genuine adjustment away from a letter's plain, ordinary pronunciation, whether concealment, conversion, or merging, tend to retain or add ghunnah, while a rule asking for nothing more than clear, ordinary pronunciation does not.`,
      },
    ],
  },

  'meem-3': {
    id: 'meem-3',
    unit: 'unit-5',
    title: 'Izhar Shafawi',
    summary: 'The remaining letters that require the silent meem to be pronounced clearly.',
    content: [
      {
        heading: 'The most frequently occurring of the three rules',
        body: `Izhar shafawi applies whenever a meem sakinah is followed by any of the twenty-six letters that are neither ba nor meem itself, making it by far the most common of the three rules covered in this unit, simply because it covers the overwhelming majority of the alphabet. The meem is pronounced with its full, ordinary clarity, complete closure and release of the lips, exactly as it would sound produced entirely on its own.`,
      },
      {
        heading: 'No dedicated letter list required',
        body: `Unlike several rules already covered in this course, izhar shafawi requires no specific list to memorize at all. Once ba is recognized as triggering ikhfa shafawi and meem itself as triggering idgham shafawi, every remaining letter in the alphabet automatically falls under izhar shafawi by simple elimination, precisely the same practical shortcut this course's previous unit already recommended for identifying ikhfa haqiqi's own fifteen letters.`,
      },
      {
        heading: 'A specific, genuinely important caution: fa and waw',
        body: `Despite izhar shafawi's simple definition, classical scholars specifically singled out two letters within it for deliberate extra care: fa and waw. Both share genuine articulatory proximity to meem, fa produced by the lower lip against the upper teeth and waw produced by the lips themselves, both already covered directly in this course's second unit as belonging to or closely bordering ash-shafatan. This physical closeness creates a real, well documented tendency for a reciter, especially one who has already grown comfortable with ikhfa shafawi's lighter treatment of meem before ba, to unconsciously carry that same softened habit into meem before fa or waw as well, producing an unintentional partial concealment where full, complete clarity is actually required.`,
      },
      {
        heading: 'Why this specific caution matters practically',
        body: `This is exactly the kind of subtle, easily overlooked mistake this course has named directly in earlier units: technically using the correct rule in name, izhar rather than ikhfa, while still allowing the underlying habit of concealment to creep into the actual sound produced. A reciter who has specifically learned to expect this tendency before fa and waw is far better positioned to catch it in their own recitation than one who assumes izhar shafawi is uniformly simple and therefore requires no particular attention at all.`,
      },
      {
        heading: 'A concrete example',
        body: `Antum fee (أَنتُمْ فِي), you are in, places meem sakinah directly before fa, precisely the situation this topic has just flagged for deliberate care. Correct recitation gives the meem its full, complete closure and release, exactly as izhar shafawi requires, resisting any tendency to soften or lightly conceal it the way ikhfa shafawi would treat a meem before ba instead.`,
      },
    ],
  },

  'meem-4': {
    id: 'meem-4',
    unit: 'unit-5',
    title: 'Ghunnah in the Doubled Noon and Meem',
    summary: 'The obligatory nasal sound whenever noon or meem carries a shaddah.',
    content: [
      {
        heading: 'Returning to a subject introduced early in this course',
        body: `This course's second unit introduced al-khayshum, the nasal passage, as the source of ghunnah, the nasal resonance accompanying noon and meem under particular conditions, promising a fuller explanation once the relevant rules themselves had been covered. Having now examined ghunnah's role across noon sakinah's idgham and iqlab, and meem sakinah's ikhfa shafawi and idgham shafawi, this closing topic turns to ghunnah's single strongest and most straightforward form.`,
      },
      {
        heading: 'Ghunnah mushaddadah: the purest case of all',
        body: `Whenever a noon or a meem carries a shaddah, doubling its sound, ghunnah is held in its fullest, most complete form, for a measured duration of roughly two counts, regardless of context, regardless of what letter comes before or after, and regardless of any of the specific rule categories covered across this course's fourth and fifth units. This condition, called ghunnah mushaddadah, doubled ghunnah, requires no analysis of a following letter at all, unlike every rule covered so far in these two units. A doubled noon or meem simply, always, carries this full ghunnah.`,
      },
      {
        heading: 'A concrete example',
        body: `Inna (إِنَّ), indeed, carries a doubled noon, and this noon is held with full ghunnah for its complete duration before continuing into the rest of the word, precisely because it satisfies this single, simple condition directly, independent of anything covered in this course's previous unit regarding noon sakinah specifically, since this noon is not sakinah at all, it carries a fatha, but doubled by its own shaddah instead.`,
      },
      {
        heading: 'Ranking ghunnah\'s strength across every context now covered',
        body: `Having now covered every situation in which ghunnah appears across this course's fourth and fifth units, it is worth holding them together in a single ranking, from strongest to weakest. Ghunnah mushaddadah, just covered directly, and idgham with ghunnah, already covered in this course's previous unit, represent ghunnah at its fullest strength. Ikhfa haqiqi, ikhfa shafawi, and iqlab represent a genuine but comparatively lighter degree of the same nasal quality. Izhar, whether halqi or shafawi, carries no emphasized ghunnah at all, since a plainly, clearly pronounced noon or meem still carries the ordinary, unemphasized nasal quality inherent to any nasal consonant, without the specific, deliberate holding this unit and the previous one have described in every other context.`,
      },
      {
        heading: 'Closing this unit, and the two units it has completed',
        body: `Between this course's fourth and fifth units, every situation a noon sakinah, a tanween, or a meem sakinah could encounter has now been covered completely, along with ghunnah's own full range, from its complete absence in izhar through its lighter presence in ikhfa and iqlab to its fullest strength in idgham with ghunnah and in the doubled noon or meem just covered directly. This course's next unit turns to a different letter entirely, the laam, examining specifically when the laam in Allah's own name is pronounced heavy or light, and the well known distinction between the sun letters and moon letters governing the definite article.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 6 - THE LAAM RULES (full content, expanded)
  //
  // Letter groupings, classical mnemonics, and the laam-type
  // classification in this unit's closing topic were checked
  // against multiple current tajweed references before writing.
  // This is descriptive phonetic/recitation fact rather than
  // Qur'an or hadith content in itself, so no verse blocks appear
  // in this unit; content is still recommended for a qualified
  // qari's review before publishing.
  // -----------------------------------------------------------
  'laam-1': {
    id: 'laam-1',
    unit: 'unit-6',
    title: 'The Laam of the Name of Allah: Tafkhim and Tarqiq',
    summary: 'When the laam in "Allah" is pronounced heavy, and when it is pronounced light.',
    content: [
      {
        heading: 'A genuine exception to a rule already established',
        body: `This course's third unit already classified laam under istifal and infitah, meaning laam is, by default, always pronounced light. This unit opens with the one specific, well documented exception to that default: the laam within the name Allah itself, which alternates between a heavy and a light pronunciation depending entirely on what comes immediately before it. No other laam anywhere in the Arabic language behaves this way. This alternation belongs exclusively to this one specific word.`,
      },
      {
        heading: 'The rule, stated directly',
        body: `The laam in Allah is pronounced heavy, tafkhim, whenever the letter immediately preceding it carries a fatha or a damma. It is pronounced light, tarqiq, whenever the letter immediately preceding it carries a kasra. This single rule covers every occurrence of this word anywhere in the Qur'an, with the preceding vowel alone determining which pronunciation applies, regardless of what the word means in that specific verse or what grammatical role it plays.`,
      },
      {
        heading: 'Concrete examples of each',
        body: `Qaalallahu (قَالَ اللَّهُ), Allah said, carries a fatha on the laam of qaala immediately before Allah, producing a heavy laam. Rasoolullahi (رَسُولُ اللَّهِ), the Messenger of Allah, carries a damma on the laam of rasoolu immediately before Allah, also producing a heavy laam. Bismillahi (بِسْمِ اللَّهِ), in the name of Allah, the opening words of the Qur'an's very first surah, carries a kasra on the seen of bismi immediately before Allah, producing a light laam instead.`,
      },
      {
        heading: 'A well documented mistake worth naming directly',
        body: `Because Allah's name naturally carries such reverence, many learners develop a tendency to pronounce its laam heavily every single time, out of an understandable but mistaken sense that a heavier, fuller sound better honors the word. This is a genuine, frequently observed error. The correct rule depends entirely on the preceding vowel, not on the word's own significance, and a reciter who applies heaviness regardless of context, particularly in extremely common phrases like bismillah, where a kasra correctly calls for lightness, is technically misapplying a rule that carries, as multiple scholars across the tradition affirm, unanimous agreement on exactly how it should work.`,
      },
      {
        heading: 'Why this rule sits at the very start of this unit',
        body: `Placing this specific exception first, before the two definite-article rules covered in this unit's next two topics, reflects a deliberate choice: a learner should understand clearly, from the outset, that laam is not simply "sometimes heavy" in some general, loosely applied sense. It is light by default, exactly as this course's third unit already established, with this one specific word as its only genuine exception. Holding this distinction clearly in mind is what prevents the heaviness described here from being mistakenly generalized to laam in general, an error this unit's remaining topics, covering laam in entirely different contexts, will implicitly depend on the reader not making.`,
      },
    ],
  },

  'laam-2': {
    id: 'laam-2',
    unit: 'unit-6',
    title: 'Laam Shamsiyyah: The Sun Letters',
    summary: 'The fourteen letters that absorb the laam of the definite article entirely.',
    content: [
      {
        heading: 'A completely different laam from the one just covered',
        body: `This topic turns to an entirely different laam: the laam attached to the beginning of a noun to make it definite, equivalent in function to the English word "the." This laam, together with the alif before it, forms the definite article al-, and its own pronunciation depends not on any preceding vowel, already covered in this unit's previous topic regarding an entirely different laam, but on the specific letter that immediately follows it.`,
      },
      {
        heading: 'The fourteen sun letters',
        body: `When the definite article's laam is immediately followed by one of fourteen specific letters, it is fully absorbed into that following letter rather than being pronounced at all. These fourteen letters, called huruf shamsiyyah, sun letters, are: ta (ت), tha (ث), dal (د), dhal (ذ), ra (ر), zay (ز), seen (س), sheen (ش), sad (ص), dad (ض), ta heavy (ط), dha (ظ), lam (ل), and noon (ن), traditionally collected into a memorable line of poetry in which each word begins with one of these fourteen letters in sequence.`,
      },
      {
        heading: 'What actually happens to the laam',
        body: `The laam is written in the text exactly as usual, but it is not pronounced at all. The following letter is instead doubled, carrying a shaddah, and the sound moves directly from the vowel before the laam into this doubled letter, skipping the laam's own sound entirely. Ash-shams (الشمس), the sun, the very word this category is named after, is a direct illustration: written with the laam still present, but pronounced ash-shams, with the laam's own sound entirely absent and the sheen doubled in its place.`,
      },
      {
        heading: 'A detail worth noticing: laam is itself a sun letter',
        body: `Among the fourteen sun letters listed above sits lam itself, meaning that when the definite article precedes a word beginning with laam, the definite article's own laam merges into that word's laam. Al-layl (الليل), the night, is pronounced allayl, with a single, doubled laam sound rather than any trace of two separate laam sounds occurring in sequence, exactly the same underlying principle already covered directly in this course's fifth unit regarding idgham shafawi and identical letters merging together.`,
      },
      {
        heading: 'How the mushaf itself marks this rule visually',
        body: `A standard Qur'anic mushaf reflects this rule directly in its own printed text: the definite article's laam before a sun letter carries no sukoon of its own, and the following letter is printed with a visible shaddah, a direct visual signal, independent of memorizing the full list of fourteen letters, that this specific laam should not be pronounced at all.`,
      },
    ],
  },

  'laam-3': {
    id: 'laam-3',
    unit: 'unit-6',
    title: 'Laam Qamariyyah: The Moon Letters',
    summary: 'The remaining fourteen letters that leave the laam clearly pronounced.',
    content: [
      {
        heading: 'The remaining fourteen letters',
        body: `When the definite article's laam is immediately followed by any of the fourteen letters not already covered in this unit's previous topic, it is pronounced fully and clearly, with no absorption into the following letter at all. These fourteen letters, called huruf qamariyyah, moon letters, are: hamza (ء), ba (ب), jeem (ج), ha (ح), kha (خ), ain (ع), ghain (غ), fa (ف), qaf (ق), kaf (ك), meem (م), ha (ه), waw (و), and ya (ي), traditionally collected into the memorable phrase ibghi hajjaka wakhaf aqeemahu, containing every one of these fourteen letters.`,
      },
      {
        heading: 'What actually happens to the laam here',
        body: `Unlike the sun letters covered in this unit's previous topic, the laam here is pronounced exactly as it sounds in isolation, with the following letter also pronounced normally afterward, no absorption and no doubling involved. Al-qamar (القمر), the moon, the word this category itself is named after, is pronounced with the laam fully audible, followed distinctly by the qaf that comes after it.`,
      },
      {
        heading: 'Why these categories are named after the sun and the moon specifically',
        body: `The names themselves come directly from the two words used as each category's own defining example: ash-shams, the sun, whose own laam is absorbed, giving the entire category of absorbed-laam letters its name, and al-qamar, the moon, whose own laam remains clear, giving the entire category of clear-laam letters its name. Neither the sun nor the moon carries any deeper symbolic connection to this specific rule beyond having supplied its two most convenient, commonly cited examples.`,
      },
      {
        heading: 'How the mushaf marks this rule, directly contrasted with the previous topic',
        body: `Where a sun-letter laam appears with no sukoon and a doubled following letter, a moon-letter laam is printed with a visible sukoon directly above it, the ordinary marking for any letter carrying no vowel of its own, and the following letter carries no shaddah at all. A reciter who has learned to recognize these two printed patterns, sukoon on the laam itself versus a shaddah on the letter after it, can correctly apply this entire rule by sight alone, even before recalling either the sun or moon letters from memory.`,
      },
      {
        heading: 'Twenty-eight letters, no exceptions',
        body: `Fourteen sun letters and fourteen moon letters together account for the entire Arabic alphabet, meaning every single word beginning with the definite article falls into exactly one of these two categories, with no third possibility and no letter belonging to both lists at once. This mirrors a pattern already familiar from this course's fourth and fifth units: a complete, mutually exclusive division of the alphabet governing exactly how a specific letter's pronunciation actually unfolds.`,
      },
    ],
  },

  'laam-4': {
    id: 'laam-4',
    unit: 'unit-6',
    title: 'Distinguishing the Definite-Article Laam from Other Laams',
    summary: 'Why not every laam in the Qur\'an follows the sun and moon letter rule.',
    content: [
      {
        heading: 'A caution worth stating plainly before closing this unit',
        body: `Having now covered two entirely different sets of laam rules, the tafkhim and tarqiq of Allah's own name and the sun and moon letters governing the definite article, it would be a genuine mistake to assume every laam encountered in the Qur'an must fall under one of these two categories. Several other kinds of laam exist, each following its own distinct treatment, and correctly identifying which kind of laam is actually present is the necessary first step before applying any rule at all.`,
      },
      {
        heading: 'Laam al-ism: laam as part of a word\'s own root',
        body: `Some words simply contain laam as one of their own original root letters, entirely unrelated to the definite article or to Allah's own name. Sultan (سُلْطَان), authority, contains a laam that is simply part of the word's own structure, always appearing in the middle of the word rather than attached to its beginning, and never removable the way a definite article can be removed to leave the underlying noun intact. This laam follows no special rule at all. It is simply pronounced light, exactly as this course's third unit already established as laam's own default characteristic, with no exception of any kind applying to it.`,
      },
      {
        heading: 'Laam al-fi\'l and laam al-amr: laam within verbs',
        body: `Laam can also appear as part of a verb's own structure, called laam al-fi'l, or as a specific grammatical marker attached to a present-tense verb to form a command, called laam al-amr. Both of these follow the same simple treatment as laam al-ism: ordinary, clear pronunciation, light by default, held for the single beat appropriate to any consonant carrying a sukoon, with no absorption, no doubling, and no alternation between heavy and light involved.`,
      },
      {
        heading: 'A practical method for identifying which laam is actually present',
        body: `Given these several distinct categories, a reliable, practical approach is to ask a short sequence of questions whenever a laam appears in the text. First, is the word actually Allah itself? If so, this unit's first topic applies directly, and the preceding vowel determines heaviness or lightness. Second, does the word begin with the definite article al-, attached to an otherwise complete, independent noun? If so, this unit's second and third topics apply, and the following letter determines whether the laam is absorbed or pronounced clearly. If neither condition is met, the laam in question is simply an ordinary laam, whether part of a noun's root, a verb's structure, or a command marker, and it is pronounced light by default, exactly as this course's third unit already established for laam in general.`,
      },
      {
        heading: 'Closing this unit and looking to the next',
        body: `This unit has now covered every distinct treatment laam can receive: the specific tafkhim and tarqiq alternation unique to Allah's own name, the sun and moon letters governing the definite article, and the simple, ordinary light pronunciation governing every other laam encountered anywhere else. This course's next two units turn to a substantially larger subject, madd, the elongation of specific letters under specific conditions, already introduced briefly in this course's second unit through al-jawf and its three letters, and now examined across two full units given how many distinct categories this single subject actually contains.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 7 - AL-MADD, PART ONE (full content, expanded)
  //
  // Letter conditions, the classical teaching example nuhiha, and
  // the counter-example yawmakum were checked against multiple
  // current tajweed references before writing. This is descriptive
  // phonetic/recitation fact rather than Qur'an or hadith content
  // in itself, so no verse blocks appear in this unit; content is
  // still recommended for a qualified qari's review before
  // publishing.
  // -----------------------------------------------------------
  'madd1-1': {
    id: 'madd1-1',
    unit: 'unit-7',
    title: 'What is Madd and Why Elongation Matters',
    summary: 'Why certain letters are held longer than others, and what changes if they are not.',
    content: [
      {
        heading: 'What madd actually means',
        body: `Madd means to stretch or extend, and in this science it describes holding a specific vowel sound for a measured duration beyond its ordinary, brief length, under precise conditions this unit and the next will define in full. This is not a decorative flourish left to a reciter's personal taste or sense of melody. It is a fixed, rule-governed system, with exact conditions determining when elongation applies and exactly how long it should last in each specific case.`,
      },
      {
        heading: 'The harakah as the basic unit of timing',
        body: `Every duration in this subject is measured in harakat, a word already familiar from this course's earlier units as the general term for a letter's short vowel. As a unit of time, one harakah is roughly the duration it takes to open or close a single finger at a steady, unhurried pace, and every specific madd type covered across this unit and the next is measured as a specific number of these harakat, most commonly two, four, five, or six.`,
      },
      {
        heading: 'Two broad categories, one built on top of the other',
        body: `Scholars divide madd into two broad categories. Al-madd al-asli, also called al-madd at-tabi'i, natural or original madd, is the baseline: exactly two harakat, occurring whenever a madd letter appears in its standard condition with nothing else affecting it. Al-madd al-far'i, secondary or branching madd, covered in full in this course's next unit, describes every situation where some additional cause, specifically a hamzah or a sukoon appearing near the madd letter, extends this baseline further, anywhere from four to six harakat depending on the specific cause involved.`,
      },
      {
        heading: 'Why mastering the baseline matters before anything else',
        body: `Every single category of secondary madd covered in this course's next unit is, at its core, this same two-count natural madd with something specific added on top of it. A reciter who has not genuinely internalized the natural, two-count baseline covered in this unit has no stable foundation to recognize when and how that baseline is actually being extended further. This is precisely why this course devotes an entire unit to natural madd on its own, before introducing any of its more elaborate secondary forms.`,
      },
      {
        heading: 'A common and genuinely consequential mistake',
        body: `Rushing through or shortening natural madd, treating its two-count duration as an approximate suggestion rather than a fixed requirement, is a widely documented error, and not a merely cosmetic one. Consistently correct timing at this most basic level is what gives Qur'anic recitation its distinctive rhythm and flow, and a reciter who is careless with this two-count baseline will find every more elaborate madd type covered in this course's next unit affected by the same underlying carelessness, since each of them depends on this exact baseline as their own starting point.`,
      },
    ],
  },

  'madd1-2': {
    id: 'madd1-2',
    unit: 'unit-7',
    title: 'The Letters of Madd and Layyin',
    summary: 'The three letters of elongation and the two letters of softness.',
    content: [
      {
        heading: 'Three letters, each requiring one specific, matching vowel',
        body: `This course's second unit already introduced the three letters capable of producing madd, produced from al-jawf, the open cavity of the mouth and throat: alif, waw, and ya, sometimes referred to collectively in Arabic scholarship as waa-yi, a term simply combining the names of these three letters. Each functions as a madd letter only under one exact condition: alif when immediately preceded by a fatha, waw when sakinah and immediately preceded by a damma, and ya when sakinah and immediately preceded by a kasra. Outside these exact conditions, none of these three letters produces madd at all.`,
      },
      {
        heading: 'A single word demonstrating all three at once',
        body: `Nuhiha (نُوحِيهَا), from Surah Hud, meaning we revealed it, is widely used across the tajweed tradition specifically because it contains all three madd letters in their correct conditions within one single word: waw sakinah preceded by damma, ya sakinah preceded by kasra, and alif preceded by fatha, one immediately following the other. This makes it an especially efficient single example for confirming that all three conditions have genuinely been understood together, rather than only one or two of them in isolation.`,
      },
      {
        heading: 'A counter-example showing exactly when the condition fails',
        body: `Yawmakum (يَوْمَكُمْ), your day, contains a waw immediately preceded by a fatha rather than a damma. Because the required condition is not met, this waw does not function as a madd letter at all here, and produces no elongation whatsoever, remaining instead an ordinary consonant. This single contrast, waw functioning as a madd letter in nuhiha but not in yawmakum, makes clear that memorizing the three letters alone is never sufficient. The specific, matching vowel condition immediately before each one is just as essential as the letter itself.`,
      },
      {
        heading: 'Why alif is structurally different from waw and ya',
        body: `Alif carries a genuine structural distinction worth noting directly: alif can never carry a vowel of its own anywhere in the Arabic language, meaning it is, by its very nature, always without a vowel wherever it appears. Waw and ya, by contrast, can each carry their own vowel in other words or other positions, functioning there as ordinary consonants entirely unrelated to madd, which is exactly why the specific requirement that they be sakinah, without their own vowel, has to be stated explicitly for these two letters in a way it never needs to be for alif.`,
      },
      {
        heading: 'Layyin: a related but genuinely distinct pair',
        body: `This course's third unit already introduced layyin briefly: waw or ya, sakinah, immediately preceded specifically by a fatha, as in qawl (قَوْل) or khayr (خَيْر). This is a deliberately mismatched pairing compared to madd's own matched pairing, fatha before waw or ya rather than the damma or kasra madd itself requires, and this mismatch is precisely why layyin does not produce ordinary madd at all under normal conditions. Layyin describes a genuine softness in how these two letters are pronounced in this specific condition, distinct from the elongation this unit's remaining topic describes, though this course's next unit will return to layyin directly, since it becomes relevant to a specific category of secondary madd triggered by stopping at the end of a word.`,
      },
    ],
  },

  'madd1-3': {
    id: 'madd1-3',
    unit: 'unit-7',
    title: 'Al-Madd At-Tabi\'i: The Natural Madd',
    summary: 'The baseline elongation present whenever no additional cause extends it further.',
    content: [
      {
        heading: 'The definition, stated precisely',
        body: `Al-madd at-tabi'i, natural madd, occurs whenever one of the three letters and conditions already covered in this unit's previous topic appears with nothing else affecting it: no hamzah immediately following the madd letter, and no sukoon immediately following it either, both of which would instead trigger one of the specific secondary madd categories covered in this course's next unit. Under these plain, unaffected conditions, the vowel is held for exactly two harakat, no more and no less.`,
      },
      {
        heading: 'Why "natural" and "original" both describe this same category',
        body: `This category is called both al-madd at-tabi'i, natural madd, and al-madd al-asli, original madd, for two closely related reasons. It is natural in the sense that it requires no special external cause at all, occurring simply and automatically whenever the letter and vowel conditions already covered are present. It is original in the sense that it is the foundational form every other type of madd, covered in full in this course's next unit, is ultimately built from, adding some further specific cause on top of this exact same two-count starting point.`,
      },
      {
        heading: 'Three concrete examples',
        body: `Qaala (قَالَ), he said, holds its alif, preceded by fatha, for exactly two harakat. Yaqoolu (يَقُولُ), he says, holds its waw, sakinah and preceded by damma, for exactly two harakat. Fee (فِي), in, holds its ya, sakinah and preceded by kasra, for exactly two harakat. In each case, nothing follows the madd letter that would extend this duration any further, keeping all three examples squarely within this unit's own baseline category.`,
      },
      {
        heading: 'A fixed duration that never changes, regardless of context',
        body: `Unlike ghunnah, already covered across this course's fourth and fifth units, whose strength varies across several different rule categories, natural madd carries exactly one duration in every single instance it occurs, whether the reciter is continuing directly into the next word or pausing immediately afterward. This consistency is itself part of why this baseline is worth mastering with real precision: once it becomes fully reliable and automatic, a reciter is free to focus their attention on correctly identifying and applying whichever secondary madd category actually applies whenever the plain conditions described in this topic are not the ones actually present.`,
      },
      {
        heading: 'Closing this unit and opening the next',
        body: `This unit has established madd's basic definition, the three letters and their exact required conditions, the closely related but genuinely distinct category of layyin, and the two-count natural madd that results whenever no further cause is present. This course's next unit turns directly to what happens when a further cause is present: a hamzah or a sukoon appearing near a madd letter, producing the several distinct categories of secondary madd, muttasil, munfasil, aridh lis-sukoon, laazim, badal, iwad, and silah, each extending this same two-count baseline according to its own specific, named condition.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 8 - AL-MADD, PART TWO (full content, expanded)
  //
  // This is the most technically dense unit in the course. Letter
  // conditions, harakat counts, the four types of madd laazim, the
  // eight harfi muqatta'at letters, and every named example were
  // checked against multiple current tajweed references before
  // writing. This is descriptive phonetic/recitation fact rather
  // than Qur'an or hadith content in itself, so no verse blocks
  // appear in this unit; content is still recommended for a
  // qualified qari's review before publishing, given both the
  // technical density here and the genuine minor variation across
  // recitation traditions on some of these specific counts.
  // -----------------------------------------------------------
  'madd2-1': {
    id: 'madd2-1',
    unit: 'unit-8',
    title: 'Madd Muttasil: The Connected Madd',
    summary: 'When a madd letter and its hamzah cause meet within the same word.',
    content: [
      {
        heading: 'The first genuine extension beyond the natural baseline',
        body: `This course's previous unit established natural madd's fixed two-count baseline, occurring whenever a madd letter appears with nothing else affecting it. This unit begins covering exactly what happens when something does affect it. Madd muttasil, connected madd, occurs when a madd letter is immediately followed by a hamzah within that same single word.`,
      },
      {
        heading: 'Why this specific madd is called obligatory',
        body: `Madd muttasil is also known as madd wajib muttasil, obligatory connected madd, and this name reflects a genuine point of unanimous agreement across every authenticated recitation tradition: no narration permits shortening this specific madd back down to the ordinary two-count baseline. Every reciter, regardless of which specific transmission they follow, extends it beyond natural madd's own duration.`,
      },
      {
        heading: 'The specific duration',
        body: `Under the Hafs 'an 'Asim recitation this course follows, madd muttasil is held for four or five harakat, with four being the more commonly practiced of the two among reciters today. Some other authenticated recitation traditions extend it even further, up to six harakat, but the underlying agreement that it must exceed the natural two-count minimum holds across every tradition without exception.`,
      },
      {
        heading: 'A concrete example',
        body: `Jaa'a (جَاءَ), he came, contains an alif, preceded by fatha, immediately followed by a hamzah within this same single word. This alif is held for four or five harakat rather than the two harakat it would receive if no hamzah followed it at all, precisely the extension this entire topic describes.`,
      },
      {
        heading: 'Why "connected" describes exactly what makes this madd obligatory',
        body: `The name muttasil, connected, points directly to why this specific madd carries no flexibility at all: the hamzah triggering it can never be separated from the madd letter, since both exist permanently within the same single word. There is no possible way to recite this word without eventually encountering this exact hamzah immediately after this exact madd letter, which is precisely why every recitation tradition agrees on extending it, in contrast to the genuine flexibility this unit's next topic will introduce for a closely related but structurally different situation.`,
      },
    ],
  },

  'madd2-2': {
    id: 'madd2-2',
    unit: 'unit-8',
    title: 'Madd Munfasil: The Separated Madd',
    summary: 'When a madd letter ends one word and a hamzah begins the next.',
    content: [
      {
        heading: 'The same trigger, a genuinely different structural situation',
        body: `Madd munfasil, separated madd, shares its underlying cause with madd muttasil already covered in this unit's previous topic, a hamzah appearing immediately after a madd letter, but in a structurally different arrangement: here, the madd letter ends one word, and the hamzah begins an entirely separate word immediately following it, rather than both existing together within a single word.`,
      },
      {
        heading: 'Why this single structural difference changes everything about its ruling',
        body: `Because the hamzah here belongs to a genuinely separate word, its presence immediately after the madd letter depends entirely on continuing directly into that next word during recitation. A reciter who pauses between the two words removes the hamzah from its position immediately following the madd letter entirely, something structurally impossible in madd muttasil's own single-word arrangement. This single difference is precisely why madd munfasil is classified as jaiz, permissible, rather than wajib, obligatory: several authenticated recitation traditions, including those transmitted through reciters such as Ibn Kathir and Abu Ja'far, shorten this specific madd back down to the ordinary two-count baseline entirely.`,
      },
      {
        heading: 'The specific duration under Hafs \'an \'Asim',
        body: `Under the Hafs 'an 'Asim recitation this course follows, madd munfasil is most commonly extended to four or five harakat when continuing directly between the two words, matching the same duration already covered for madd muttasil, though shortening to the plain two-count baseline remains a genuinely valid alternative within this same broader tradition.`,
      },
      {
        heading: 'A concrete example',
        body: `Fee anfusikum (فِي أَنفُسِكُمْ), within yourselves, ends its first word with ya, sakinah and preceded by kasra, immediately followed by the hamzah opening the next word, anfusikum. Continuing directly between these two words extends this ya to four or five harakat, exactly the situation this topic describes.`,
      },
      {
        heading: 'A practical warning worth carrying directly from this unit\'s previous topic',
        body: `A specific, commonly observed mistake among newer reciters is accidentally extending madd munfasil to the same length reserved for madd laazim, covered later in this unit at a full six harakat, well beyond what this specific madd actually calls for. A further point of genuine consistency matters here as well: whichever specific duration a reciter chooses for madd muttasil and madd munfasil, that same duration should be applied consistently to every instance of that same madd type throughout a given recitation, rather than varying unpredictably from one occurrence to the next.`,
      },
    ],
  },

  'madd2-3': {
    id: 'madd2-3',
    unit: 'unit-8',
    title: 'Madd \'Aridh lis-Sukoon: The Temporary Madd Before a Stop',
    summary: 'The extra elongation that appears specifically because a recitation is stopping.',
    content: [
      {
        heading: 'A madd caused by stopping itself, not by any surrounding letter',
        body: `Every madd category covered so far in this course, natural madd and the two hamzah-triggered categories just covered in this unit, is caused by something inherent to the letters themselves. Madd 'aridh lis-sukoon, temporary madd due to a sukoon, is different: it is caused entirely by the act of stopping. When a madd letter is the second-to-last letter of a word and a reciter chooses to pause there, the word's final letter, which would otherwise carry its own vowel while continuing, temporarily becomes sakinah purely because of that pause.`,
      },
      {
        heading: 'Why "temporary," "aridh," describes this condition precisely',
        body: `The word aridh means temporary or incidental, and this describes the sukoon at the heart of this madd exactly: it is not a permanent feature of the word's own structure, the way the sukoon triggering madd laazim, covered in this unit's next topic, always is. It exists only because a reciter happened to stop at this specific point. Continuing directly into the next word instead removes this sukoon entirely, and with it, this entire madd category, leaving only the ordinary natural madd already covered in this course's previous unit.`,
      },
      {
        heading: 'A flexible duration, a reciter\'s own choice',
        body: `Unlike every other secondary madd category covered in this unit, madd 'aridh lis-sukoon offers a reciter genuine choice: two, four, or six harakat, any of which is considered correct. The only real requirement is consistency, applying whichever specific duration is chosen uniformly across an entire recitation, rather than switching unpredictably between different lengths from one pause to the next.`,
      },
      {
        heading: 'A concrete example',
        body: `Al-'aalameen (الْعَالَمِينَ), continuing directly into the rest of a verse, carries an ordinary short vowel on its final noon. Stopping on this same word instead leaves that final noon without any vowel at all, and the ya immediately before it, already sakinah and preceded by kasra under this course's second unit's own madd conditions, is now extended for two, four, or six harakat specifically because of this stop, rather than the two harakat it would otherwise receive as ordinary natural madd.`,
      },
      {
        heading: 'Madd leen: the same flexible principle, applied to layyin instead',
        body: `This course's seventh unit specifically flagged layyin, waw or ya sakinah preceded by fatha, for a return in this exact unit, and this is that return. When a word ends in a layyin letter and a reciter stops on it, the exact same flexible two, four, or six harakat choice already covered in this topic applies, under the specific name madd leen. Khawf (خَوْفٍ), fear, and al-bayt (الْبَيْتِ), the house, both illustrate this directly when stopped upon, extending their respective layyin letters, waw and ya, each preceded by fatha, for this same flexible duration, precisely because madd leen functions as a specific instance of the same underlying principle covered throughout this topic, applied to layyin's own distinct letter and vowel condition rather than to an ordinary madd letter.`,
      },
    ],
  },

  'madd2-4': {
    id: 'madd2-4',
    unit: 'unit-8',
    title: 'Madd Laazim: The Necessary Madd and Its Four Types',
    summary: 'The longest, most fixed category of madd, and its four distinct forms.',
    content: [
      {
        heading: 'The longest and most fixed of every madd category covered in this course',
        body: `Madd laazim, necessary madd, occurs when a madd letter is followed by a permanent sukoon within the same word or, as this topic's later sections will cover, within one of the disconnected letters opening certain surahs. Unlike the sukoon triggering madd 'aridh lis-sukoon in this unit's previous topic, this sukoon is permanent, present identically whether a reciter continues past it or stops directly on it. Madd laazim is held for exactly six harakat in every single one of its four distinct forms, with no permitted variation of any kind, making it the longest and most rigidly fixed madd category this course covers.`,
      },
      {
        heading: 'The first division: kalimi or harfi',
        body: `Madd laazim divides first according to where its triggering sukoon actually occurs. Kalimi, word-based, describes a sukoon occurring within an ordinary word. Harfi, letter-based, describes a sukoon occurring specifically within one of the disconnected letters, huruf muqatta'at, that open certain surahs, where the letter's own spoken name, rather than an ordinary word, contains the relevant madd letter and sukoon.`,
      },
      {
        heading: 'The second division: muthaqqal or mukhaffaf',
        body: `Each of these two categories divides further according to whether the triggering sukoon carries a shaddah. Muthaqqal, heavy, describes a sukoon accompanied by a shaddah on the following letter, doubling its sound. Mukhaffaf, light, describes a plain sukoon with no accompanying shaddah at all. Together, these two divisions produce exactly four distinct types: kalimi muthaqqal, kalimi mukhaffaf, harfi muthaqqal, and harfi mukhaffaf.`,
      },
      {
        heading: 'Kalimi muthaqqal and kalimi mukhaffaf, with their examples',
        body: `Wa la ad-daaalleen (وَلَا الضَّالِّينَ), from Surah al-Fatihah, contains one of the most widely cited examples of madd laazim kalimi muthaqqal: the alif in daaalleen is immediately followed by laam carrying a shaddah, within this single word, held for the full six harakat this entire category requires. Kalimi mukhaffaf is, by contrast, exceptionally rare, occurring in only two places in the entire Qur'an, both in Surah Yunus, in the word aal'aana (آلْآنَ), where a madd letter is followed by a plain sukoon with no shaddah at all, still held for the same six harakat despite this rarity.`,
      },
      {
        heading: 'Harfi muthaqqal and harfi mukhaffaf, and the eight letters involved',
        body: `Among the disconnected letters opening various surahs, only eight, collected in the phrase naqas asalukum, noon, qaf, sad, ain, seen, lam, kaf, and meem, contain a madd letter followed by a sukoon when pronounced by their own spoken names, and therefore actually trigger madd laazim harfi in one of its two forms. Harfi mukhaffaf occurs when that letter's own name ends in a plain sukoon with nothing merging into it, as in qaf (ق) opening Surah Qaf, or noon (ن) opening Surah al-Qalam. Harfi muthaqqal occurs when that letter's own sukoon merges into whatever immediately follows it, producing the same doubling effect already described for kalimi muthaqqal. This is, admittedly, the most technically demanding corner of this entire subject, and genuinely benefits from hearing it demonstrated directly by a qualified reciter rather than only reading its description here.`,
      },
      {
        heading: 'A brief, honest note on the letter ain specifically',
        body: `The letter ain, appearing among the disconnected letters opening Surah Maryam and Surah ash-Shura, carries a specific, well documented exception worth naming directly: classical scholarship, including Imam ash-Shatibi's own recorded transmission, records two valid lengths for this specific letter, four harakat or the full six harakat otherwise required throughout this entire category, with six considered preferable by the majority of scholars while four remains a genuinely accepted alternative. This is a useful, concrete reminder that even within a category as rigidly fixed as madd laazim, specific, well documented points of minor variation still exist, exactly the same kind of honest scholarly nuance this course has flagged directly at several points across its earlier units.`,
      },
    ],
  },

  'madd2-5': {
    id: 'madd2-5',
    unit: 'unit-8',
    title: 'Madd Badal, \'Iwad, and Silah',
    summary: 'Three further named categories of madd, each with its own specific condition.',
    content: [
      {
        heading: 'Madd badal: when the hamzah comes first instead',
        body: `Every hamzah-triggered madd covered so far in this unit involves a hamzah immediately following a madd letter. Madd badal, substitute madd, reverses this exact order: a hamzah comes first, immediately followed by a madd letter, within the same word, with no further hamzah or sukoon following afterward. The name badal, substitute, reflects a real historical process: many scholars explain that such words originally contained two hamzahs in direct sequence, and Arabic pronunciation naturally softened the second of these two hamzahs into its corresponding madd letter, substituting a smoother sound for a sequence that would otherwise be genuinely difficult to pronounce cleanly.`,
      },
      {
        heading: 'Why madd badal is held for only two harakat despite technically belonging to madd far\'i',
        body: `Despite arising from a hamzah, exactly the same trigger already covered in this unit's first two topics, madd badal is held for only two harakat, identical to ordinary natural madd, rather than the extended durations already covered for madd muttasil and madd munfasil. This reflects the substitution already described directly: the madd letter here is not genuinely extending anything beyond its own ordinary length. It is simply standing in for a hamzah that Arabic pronunciation naturally smoothed away, producing a sound that, once smoothed, behaves exactly like any other instance of natural madd.`,
      },
      {
        heading: 'A concrete example',
        body: `Aamana (آمَنَ), he believed, marked in the Qur'anic text with a specific elongated madda sign directly over its alif, opens with a hamzah immediately followed by this same alif, with nothing else following that would extend the duration any further. This alif is held for the ordinary two harakat this entire category requires.`,
      },
      {
        heading: 'Madd \'iwad: a specific compensation for a specific vowel, upon stopping',
        body: `Madd 'iwad, compensatory madd, applies specifically when stopping on a word ending in fathatayn, doubled fatha, tanween. The tanween sound itself is dropped entirely when stopping, and a plain, ordinary two-count alif madd replaces it in compensation. This specific compensation applies only to fathatayn tanween. Words ending in dammatayn or kasratayn tanween simply become sakinah when stopped upon, with no compensatory madd of any kind replacing them.`,
      },
      {
        heading: 'A concrete example, and one notable exception',
        body: `Kitaaban (كِتَابًا), a book, continuing directly into further speech, carries its ordinary fathatayn sound in full. Stopping on this same word instead replaces that fathatayn with a plain two-count alif madd, producing kitaabaa. One further detail worth noting: words ending in ta marbuta together with fathatayn do not receive this same compensatory madd. They are instead pronounced with a plain ha sakinah when stopped upon, an entirely different, unrelated outcome from the alif compensation this topic otherwise describes.`,
      },
      {
        heading: 'Madd silah: elongating the pronoun haa, under two specific conditions',
        body: `Madd silah, connecting madd, applies to the third person pronoun haa, meaning his, him, or it, attached to the end of many words, specifically when this haa is genuinely preceded by a vowel and carries a vowel of its own, rather than a sukoon on either side. Under these conditions, a small additional waw or ya sound is added directly after the haa, matching whichever vowel the haa itself carries.`,
      },
      {
        heading: 'Silah sughra and silah kubra, and their two different durations',
        body: `When this pronoun haa is not immediately followed by a hamzah, silah sughra, minor connecting madd, applies, held for two harakat, effectively identical in duration to ordinary natural madd. Lahu (لَهُ), for him, illustrates this directly. When the pronoun haa is immediately followed by a hamzah in the next word, silah kubra, major connecting madd, applies instead, held for the same four or five harakat already covered for madd munfasil in this unit's second topic, since the underlying structure, a vowel followed immediately by a hamzah beginning the next word, is genuinely the same situation. Feehi ahad (فِيهِ أَحَدٌ), in it, anyone, illustrates silah kubra directly, with the haa's own vowel extended into this longer duration specifically because a hamzah immediately follows.`,
      },
      {
        heading: 'Closing this unit and the two-unit study of madd as a whole',
        body: `Between this course's seventh and eighth units, every category of madd has now been covered: the two-count natural baseline, the two hamzah-triggered categories of muttasil and munfasil, the flexible temporary madd of 'aridh lis-sukoon and its layyin-based counterpart madd leen, the fixed six-count madd laazim in all four of its forms, and the three further named categories of badal, 'iwad, and silah. This course's ninth unit turns to a different subject entirely, the specific rules governing the letter ra', when it is pronounced heavy or light, along with qalqalah, the distinctive bouncing quality already introduced briefly in this course's third unit and now examined in complete detail.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 9 - RA' AND QALQALAH (full content, expanded)
  //
  // The isti'la exception, the specific example firqin, and the
  // qalqalah minor/major distinction were checked against multiple
  // current tajweed references before writing. This is descriptive
  // phonetic/recitation fact rather than Qur'an or hadith content
  // in itself, so no verse blocks appear in this unit; content is
  // still recommended for a qualified qari's review before
  // publishing, given the genuine minor variation across recitation
  // traditions on some of these specific points.
  // -----------------------------------------------------------
  'ra-1': {
    id: 'ra-1',
    unit: 'unit-9',
    title: 'Tafkhim of the Ra\': When It Is Heavy',
    summary: 'The specific conditions under which the ra\' is pronounced with a heavy quality.',
    content: [
      {
        heading: "Neither permanently heavy nor permanently light",
        body: `This course's third unit already covered isti'la, the seven letters permanently and unconditionally heavy regardless of their vowel or position. Ra' is not one of these seven letters, yet it is also not permanently light the way most of the alphabet is. Ra's own weight shifts between heavy and light depending entirely on its specific vowel and, in one important condition, on the letter immediately following it.`,
      },
      {
        heading: "The first condition: ra' carrying its own fatha or damma",
        body: `Whenever ra' itself carries a fatha or a damma, it is pronounced heavy. Rasool (رَسُول), messenger, and rusul (رُسُل), messengers, both illustrate this directly, the first with ra' carrying fatha, the second with ra' carrying damma.`,
      },
      {
        heading: "The second condition: ra' sakinah preceded by fatha or damma",
        body: `Whenever ra' is sakinah, carrying no vowel of its own, and immediately preceded by a fatha or a damma, it is also pronounced heavy. Yarhamu (يَرْحَمُ), he has mercy, illustrates ra' sakinah preceded by fatha, while qur'an (قُرْآن) illustrates ra' sakinah preceded by damma.`,
      },
      {
        heading: "The third condition: a genuine exception overriding kasra itself",
        body: `This course's next topic will establish that ra' sakinah preceded by a genuine, original kasra is ordinarily light. A specific, narrow exception overrides this: when such a ra' is immediately followed, within that same single word, by one of the seven isti'la letters carrying a fatha, the isti'la letter's own heaviness overrides the kasra's usual lightening effect, and the ra' is pronounced heavy instead. This precise condition occurs in exactly five specific words across the entire Qur'an, memorized individually by serious students of this subject precisely because the underlying general rule would otherwise predict the opposite result.`,
      },
      {
        heading: "Why this exception matters enough to memorize directly",
        body: `A reciter who has only learned the general rule, kasra produces lightness, without also learning this specific exception, will apply tarqiq incorrectly in exactly these five words, producing a real, identifiable error rather than a harmless stylistic variation. This is precisely the kind of narrow, easily overlooked detail this course has flagged directly at several points across its earlier units: a correct general rule, applied without its documented exceptions, still produces genuine mistakes.`,
      },
    ],
  },

  'ra-2': {
    id: 'ra-2',
    unit: 'unit-9',
    title: 'Tarqiq of the Ra\': When It Is Light',
    summary: 'The specific conditions under which the ra\' is pronounced with a light quality.',
    content: [
      {
        heading: "The first condition: ra' carrying its own kasra",
        body: `Whenever ra' itself carries a kasra, it is pronounced light. Rijaal (رِجَال), men, illustrates this directly, with ra' itself carrying kasra throughout.`,
      },
      {
        heading: "The second condition: ra' sakinah preceded by an original kasra",
        body: `Whenever ra' is sakinah, preceded by a genuine, original kasra, and not followed within that same word by one of the seven isti'la letters carrying a fatha, already covered as the specific exception in this unit's previous topic, it is pronounced light. Ash-shirk (الشِّرْكِ), already familiar from this course's fifth unit, illustrates this directly: ra' sakinah, preceded by kasra, followed by kaf, which is not an isti'la letter, producing a light ra' throughout.`,
      },
      {
        heading: "The third condition: ra' sakinah preceded by ya sakinah",
        body: `Whenever ra' is sakinah and immediately preceded by ya, itself sakinah, it is pronounced light regardless of what vowel appears earlier in the word. Khayr (خَيْر), good, illustrates this directly, with ra' sakinah immediately preceded by a sakinah ya.`,
      },
      {
        heading: "A related condition: the isti'la exception does not cross word boundaries",
        body: `The specific exception already covered in this unit's previous topic, where an isti'la letter carrying fatha overrides an original kasra's usual lightening effect, applies only within a single word. When a ra' sakinah preceded by original kasra is followed by an isti'la letter beginning an entirely separate word, tarqiq still applies, since the exception's own condition, both letters existing together within one word, is not met.`,
      },
      {
        heading: "Why tarqiq deserves the same careful attention as tafkhim",
        body: `Given how often ra' actually appears throughout the Qur'an, correctly distinguishing when it is genuinely light rather than defaulting to a heavier sound out of habit or uncertainty matters just as much as correctly identifying the conditions for tafkhim already covered in this unit's previous topic. A ra' pronounced heavy where tarqiq is actually required produces exactly the same category of subtle, real error this course has already named directly in several of its earlier units.`,
      },
    ],
  },

  'ra-3': {
    id: 'ra-3',
    unit: 'unit-9',
    title: 'The Ra\' with Two Correct Ways of Recitation',
    summary: 'The handful of specific words where both a heavy and light ra\' are authentically transmitted.',
    content: [
      {
        heading: "A single word carrying genuine, documented flexibility",
        body: `Firqin (فِرْقٍ), from Surah ash-Shu'ara 26:63, part of the phrase describing each part of the parted sea standing like a great mountain, is the single most consistently cited example across the tajweed tradition of a word where both tafkhim and tarqiq of its ra' are authentically transmitted and equally correct.`,
      },
      {
        heading: "Why this specific word creates genuine ambiguity",
        body: `Firqin contains a ra' sakinah, immediately preceded by an original kasra, and immediately followed, within this same word, by qaf, one of the seven isti'la letters. This closely resembles the specific exception already covered in this unit's first topic, except for one crucial difference: the qaf here itself carries a kasra rather than a fatha. This weakens the isti'la letter's own pull toward heaviness considerably compared to the clean, five-word exception already covered, without eliminating it entirely, producing a genuinely contested case rather than a clearly settled one.`,
      },
      {
        heading: "How scholars have resolved this genuine tension",
        body: `Scholars who give greater weight to the immediately preceding original kasra recite this ra' with tarqiq. Scholars who give greater weight to the following isti'la letter, regardless of its own weakened vowel, recite this same ra' with tafkhim instead. Both readings are genuinely, authentically transmitted, which is precisely why this single word is treated as a distinct topic in its own right rather than being folded into either of this unit's first two topics as a simple example of one settled rule or the other.`,
      },
      {
        heading: "Why a course like this one names this kind of case directly",
        body: `A learner encountering only the clean, general rules covered in this unit's first two topics might reasonably assume every ra' in the Qur'an resolves cleanly into one of two fixed categories. Firqin demonstrates that a small number of genuine, documented exceptions to this expectation exist, authenticated by real scholarly transmission rather than careless inconsistency. Naming this case directly, rather than letting a learner discover it confusingly on their own, is part of the same honest, evidence-based approach this course has taken throughout its treatment of every genuinely contested point.`,
      },
      {
        heading: "Closing the ra' rules and turning to a different subject",
        body: `Having now covered ra's specific conditions for heaviness, lightness, and the rare genuine exception where both are correct, this unit turns in its remaining two topics to an entirely different subject already introduced briefly in this course's second and third units: qalqalah, the distinctive bouncing quality carried by five specific letters.`,
      },
    ],
  },

  'ra-4': {
    id: 'ra-4',
    unit: 'unit-9',
    title: 'Qalqalah: Definition and the Five Letters',
    summary: 'The distinct bouncing sound five specific letters carry under certain conditions.',
    content: [
      {
        heading: "Returning to a characteristic already named twice before",
        body: `This course's second unit named qalqalah briefly as one of dad's distinguishing qualities, and this course's third unit named it again as one of the unpaired characteristics, promising its full treatment here. Qalqalah describes a brief, controlled, echoing bounce produced at a letter's own articulation point, specifically when that letter carries a sukoon, rather than the plain, flat stop an ordinary sakinah consonant would otherwise receive.`,
      },
      {
        heading: "The five letters, and their memorable collection",
        body: `Exactly five letters carry this quality: qaf (ق), ta heavy (ط), ba (ب), jeem (ج), and dal (د), collected in the memorable phrase qutbu jadd. Any one of these five letters, whenever it carries a sukoon, requires this specific bouncing treatment rather than an ordinary, silent stop.`,
      },
      {
        heading: "Why qalqalah is treated as a required characteristic, not an optional flourish",
        body: `Scholars classify qalqalah as a sifah laazimah, a required, permanent characteristic belonging to these five letters specifically, not a stylistic embellishment left to a reciter's personal taste. Omitting this bounce entirely, allowing one of these five letters to simply stop flatly and silently the way most other sakinah consonants do, is treated as a genuine deviation from correct pronunciation, precisely the same seriousness this course has already applied to every other required characteristic covered in its earlier units.`,
      },
      {
        heading: "What qalqalah actually sounds like, and what it is not",
        body: `The bounce this rule describes is a brief, clean, neutral echo released directly from the letter's own articulation point, not a full added vowel of any kind. A common and genuinely documented mistake among newer reciters is adding what amounts to a faint fatha, kasra, or damma after the sakinah letter, effectively giving it a vowel it does not actually carry. Correct qalqalah remains a controlled rebound rather than a disguised extra syllable.`,
      },
      {
        heading: "A concrete example",
        body: `Yaqta'oona (يَقْطَعُونَ), they cut, contains a ta heavy carrying a sukoon in the middle of the word, one of the five qalqalah letters in exactly the condition this topic describes. Rather than a plain, silent stop, this ta heavy receives the brief, controlled bounce this entire topic has been describing.`,
      },
    ],
  },

  'ra-5': {
    id: 'ra-5',
    unit: 'unit-9',
    title: 'Minor and Major Qalqalah',
    summary: 'Why the same five letters produce a stronger or lighter bounce depending on position.',
    content: [
      {
        heading: "Qalqalah sughra: the lighter bounce, mid-word",
        body: `Qalqalah sughra, minor qalqalah, occurs when one of the five letters already covered in this unit's previous topic carries a sukoon in the middle of a word, with the recitation continuing directly afterward rather than stopping. The bounce here is light and quick, present but not heavily emphasized, since the recitation's own forward momentum naturally limits how much the sound can resonate before moving on. Yabtaghoona (يَبْتَغُونَ), they seek, illustrates this directly, with ba carrying a sukoon in the middle of the word.`,
      },
      {
        heading: "Qalqalah kubra: the stronger bounce, at a stop",
        body: `Qalqalah kubra, major qalqalah, occurs when one of the same five letters falls at the very end of a word and a reciter stops there, meaning the letter carries a sukoon specifically because of that stop, exactly the same kind of stopping-caused sukoon this course's eighth unit already covered directly regarding madd 'aridh lis-sukoon. Because nothing follows to interrupt or soften the sound, this bounce is noticeably stronger and more pronounced than qalqalah sughra. Al-falaq (الْفَلَقِ), the daybreak, illustrates this directly when stopped upon, with qaf carrying a sukoon caused entirely by the pause and receiving a correspondingly stronger bounce.`,
      },
      {
        heading: "A brief, honest note on a further refinement some scholars add",
        body: `Some scholars describe a third, even stronger level, sometimes called qalqalah akbar, occurring specifically when one of the five letters carries both a shaddah and a stop together, as in tabba (تَبَّ) at the very opening of Surah al-Masad, where the doubled ba is stopped upon directly. This represents the strongest possible expression of the bounce this entire unit has described, since a doubled letter already carries more emphasis than an ordinary single letter even before the additional effect of stopping is applied. Most learners are taught the two-level distinction, sughra and kubra, already covered as this topic's primary content, with this further refinement offered here as the same kind of honest, additional nuance this course has flagged directly at several points in its earlier units, rather than as a third category demanding separate memorization from the outset.`,
      },
      {
        heading: "Why position, not the letter itself, determines the bounce's strength",
        body: `A single qalqalah letter can appear in both mid-word and stopping positions across different words throughout the Qur'an, receiving the lighter sughra bounce in one occurrence and the stronger kubra bounce in another, depending entirely on where that specific occurrence falls and whether a reciter happens to stop there. The letter's own identity as one of the five qalqalah letters never changes. What changes is the specific position it occupies in each individual instance, exactly the same kind of context-dependent behavior this course has already covered regarding several other characteristics and rules across its earlier units.`,
      },
      {
        heading: "Closing this unit and looking to the next",
        body: `This unit has now covered ra's specific conditions for heaviness and lightness, the genuine exception where both are authentically correct, and qalqalah's own distinctive bounce across its lighter and stronger forms. This course's tenth unit turns to a different kind of subject entirely: waqf and ibtida, the rules governing where a recitation may or must stop, and how it should correctly resume, a subject already touched upon indirectly across this unit's own discussion of stopping-caused conditions in both ra' and qalqalah kubra.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 10 - WAQF AND IBTIDA (full content, expanded)
  //
  // The mushaf stop-sign symbols and their two named Qur'anic
  // examples (Al-An'am 6:36 and Al-Baqarah 2:26) were checked
  // against multiple current tajweed references before writing.
  // This is descriptive phonetic/recitation fact rather than
  // Qur'an or hadith content in itself, so no verse blocks appear
  // in this unit; content is still recommended for a qualified
  // qari's review before publishing.
  // -----------------------------------------------------------
  'waqf-1': {
    id: 'waqf-1',
    unit: 'unit-10',
    title: 'Why Where You Stop Can Change What You Mean',
    summary: "How the placement of a pause can genuinely alter a verse's meaning.",
    content: [
      {
        heading: "A skill made necessary by how Arabic script itself works",
        body: `Waqf means stopping, and ibtida means starting again afterward. Neither is a minor technical footnote to correct recitation. Qur'anic Arabic script does not use the punctuation modern writing relies on, no periods, no commas, no paragraph breaks marking where one complete thought ends and another begins. Knowing where a pause can safely occur, where it should occur, and where it must never occur is therefore a specific, necessary skill in its own right, not something a reciter can simply infer from the text's appearance alone.`,
      },
      {
        heading: "A real example showing exactly what is at stake",
        body: `Surah al-Baqarah 2:26 states that Allah is not shy to present a parable, even one as small as a mosquito. Stopping immediately after yastahyi, is shy, before continuing to what Allah is not shy to do, would leave standing, even briefly, a statement suggesting Allah experiences shyness as a standalone trait, precisely the opposite of what the verse actually establishes. Continuing directly to the rest of the sentence is what makes the verse's actual meaning, that Allah is not shy to use even the smallest example to convey truth, clear and complete.`,
      },
      {
        heading: "Two broad categories: chosen and forced",
        body: `Al-waqf al-ikhtiyari, voluntary stopping, describes a pause a reciter deliberately chooses, with no physical necessity forcing it. Al-waqf al-idtirari, necessary stopping, describes a pause forced by something outside a reciter's control entirely, running out of breath, coughing, or a similar genuine interruption. This distinction matters directly for this unit's closing topic on ibtida, since a forced stop landing at an imperfect point creates a specific responsibility when resuming that a deliberately chosen stop would not.`,
      },
      {
        heading: "Four categories describing how complete the meaning actually is",
        body: `Scholars classify voluntary stopping points into four categories based on how complete the meaning is at that specific point. Waqf taamm, complete stopping, describes a point where the meaning is fully finished with no remaining connection, grammatical or otherwise, to what follows. Waqf kaafi, sufficient stopping, describes a point where the meaning is complete but a thematic connection to what follows still exists. Waqf hasan, good stopping, describes a point where the meaning is complete but a direct grammatical connection to what follows remains, such as stopping immediately before a conjunction. Waqf qabih, poor stopping, describes a point where the meaning is genuinely incomplete, and stopping there risks the exact kind of distortion already illustrated in this topic's opening example.`,
      },
      {
        heading: "How this unit will proceed",
        body: `Given how much genuinely rests on getting this right, scholars developed a specific system of small symbols printed directly within a standard mushaf, guiding a reciter toward safe and appropriate stopping points without requiring each one to be independently reasoned out from scratch every time. This unit's next two topics cover this symbol system directly, before its closing topic turns to ibtida, correctly resuming a recitation once a stop, whether chosen or forced, has already occurred.`,
      },
    ],
  },

  'waqf-2': {
    id: 'waqf-2',
    unit: 'unit-10',
    title: 'Waqf Lazim and the Stop Signs in the Mushaf',
    summary: 'The mandatory stops and the specific symbols printed in the text to mark them.',
    content: [
      {
        heading: "A scholarly addition, not part of the revealed text itself",
        body: `The small letter symbols marking stopping guidance throughout a standard mushaf were introduced by later scholars, tracing largely to the framework developed by Imam as-Sajawandi, specifically to help reciters, particularly those less immediately familiar with the language's own rhythms, recognize safe and appropriate stopping points without needing to work out the underlying grammar and meaning independently each time. These symbols themselves are not part of the Qur'an's own revealed text. They are a later, genuinely useful teaching aid layered on top of it.`,
      },
      {
        heading: "Waqf laazim: the strongest possible instruction to stop",
        body: `A small meem (مـ) printed above a word marks waqf laazim, a compulsory stop. This is the strongest instruction this entire system provides in the direction of stopping: continuing directly past this specific point would produce a genuinely mistaken meaning, not merely an awkward or less elegant reading.`,
      },
      {
        heading: "A real example showing exactly why this stop is compulsory",
        body: `Surah al-An'am 6:36 states that only those who genuinely hear will respond, before continuing to describe how Allah will resurrect the dead. A waqf laazim mark appears directly after yasmaoon, those who hear. Continuing past this point without pausing would grammatically connect those who hear directly to the dead being resurrected, producing a confused, mistaken reading entirely different from the verse's actual, intended contrast between the two groups. Stopping here is what keeps this contrast clear.`,
      },
      {
        heading: "Waqf mamnoo: the strongest possible instruction against stopping",
        body: `A small laa (لا) printed above a word marks waqf mamnoo, a prohibited stop, the direct opposite instruction from waqf laazim. Stopping at this specific point would itself produce the mistaken meaning, precisely the situation this unit's opening topic already illustrated directly using Surah al-Baqarah 2:26: a laa mark appears immediately after yastahyi, is shy, specifically because stopping there would leave standing a statement suggesting Allah experiences shyness as an isolated trait, rather than continuing into the verse's actual point about using even the smallest example to convey truth.`,
      },
      {
        heading: "Why these two symbols bookend the entire system",
        body: `Waqf laazim and waqf mamnoo represent the two strongest, most decisive instructions this entire symbol system provides, one insisting a reciter must stop, the other insisting a reciter must not. Every other symbol covered in this unit's next topic falls somewhere between these two firm poles, offering genuine choice rather than a strict requirement in either direction, which is exactly why this unit covers these two symbols first, before turning to the more flexible categories that make up the majority of the system.`,
      },
    ],
  },

  'waqf-3': {
    id: 'waqf-3',
    unit: 'unit-10',
    title: 'Waqf Jaiz and Its Varieties',
    summary: 'The permissible stops, and why some are preferred over others.',
    content: [
      {
        heading: "Waqf jaiz: a genuinely equal choice",
        body: `A small jeem (ج) marks waqf jaiz, a permissible stop, where stopping and continuing are considered equally valid, with no meaningful preference between them in either direction. A reciter encountering this mark may pause to take a breath or continue directly, entirely according to their own comfort in that specific moment, without either choice affecting the meaning conveyed.`,
      },
      {
        heading: "Waqf mujawwaz: permitted, with a mild preference to continue",
        body: `A small za (ز) marks al-waqf al-mujawwaz, permitted stopping, where stopping is genuinely allowed but continuing is considered slightly preferable. This differs from waqf jaiz specifically in carrying this mild lean toward continuation, rather than the fully neutral balance waqf jaiz describes.`,
      },
      {
        heading: "Qila: a genuine preference toward stopping",
        body: `The combined symbol qaf-laam-alif (قلى) marks al-waqf al-awla, sometimes called al-madd al-mutlaq in this specific context, where stopping is considered the better of the two available choices, though continuing remains genuinely permitted rather than discouraged outright.`,
      },
      {
        heading: "Al-wasl awla: a genuine preference toward continuing",
        body: `The combined symbol sad-laam-ya (صلى) marks al-waslu awla, where continuing is considered the better of the two available choices, the direct mirror image of qila already covered in this topic. Surah Ghafir 40:20 illustrates this directly: continuing past this mark connects a statement about Allah judging with truth directly to a contrasting statement about false objects of worship judging with nothing at all, and this direct contrast is considered more powerfully conveyed by continuing than by pausing between the two halves.`,
      },
      {
        heading: "Mu'anaqah: choosing exactly one of two nearby points",
        body: `A distinctive symbol consisting of three small dots, appearing twice in close succession, marks mu'anaqah, linked pause points. This specific symbol instructs a reciter to stop at exactly one of these two nearby points, never both together. Choosing to stop at the first effectively means continuing straight through the second, and choosing to stop at the second means having continued straight through the first, since stopping at both in immediate succession would interrupt the passage's flow in a way this specific pairing is designed to prevent.`,
      },
    ],
  },

  'waqf-4': {
    id: 'waqf-4',
    unit: 'unit-10',
    title: 'Rules of Starting (Ibtida) After a Stop',
    summary: 'Why resuming a recitation correctly matters as much as stopping correctly.',
    content: [
      {
        heading: "A crucial asymmetry between stopping and starting",
        body: `This unit's opening topic already distinguished voluntary stopping from stopping forced by genuine necessity, running out of breath being the clearest example. No equivalent forced category exists for ibtida, starting again. A reciter can be genuinely compelled to stop at an imperfect point by circumstances outside their control, but resuming afterward is always, without exception, a deliberate choice, which places the full responsibility for choosing a correct, meaning-preserving starting point entirely on the reciter themselves.`,
      },
      {
        heading: "The core principle governing every correct starting point",
        body: `A correct starting point must never misrepresent the meaning of what follows if that starting point were understood entirely on its own terms. This applies with particular force to any word or phrase that only makes proper sense as part of a larger structure, such as an exception clause following a preceding negation. Beginning recitation directly on the exception alone, without the negation that gives it its actual meaning, would present something closer to the opposite of what the fuller passage actually intends.`,
      },
      {
        heading: "What a forced, imperfect stop actually requires when resuming",
        body: `When circumstances force a stop at a point classified as waqf qabih, poor stopping, already covered in this unit's opening topic, or interrupt a recitation mid-phrase entirely, correctly resuming does not simply mean continuing from the exact word where the interruption occurred. It means returning to a genuine, appropriate starting point, even if this requires re-reciting a portion of what had already been covered before the interruption, specifically so that the resumed recitation itself begins somewhere that preserves correct, complete meaning rather than compounding an already imperfect stop with an equally imperfect restart.`,
      },
      {
        heading: "Why this responsibility cannot simply be marked in a mushaf the way waqf is",
        body: `The stop-sign system covered across this unit's second and third topics helps a reciter identify appropriate stopping points directly, printed visibly within the text itself. No equivalent, comprehensive symbol system exists for every possible resumption point, since the correct starting point after any given stop depends on the specific words and structure surrounding that exact location, genuinely too variable to mark exhaustively in advance. This is precisely why ibtida is taught as a set of guiding principles to actively apply with real understanding, rather than as a fixed symbol list to simply recognize on sight the way waqf itself largely can be.`,
      },
      {
        heading: "Closing this unit and looking to the next",
        body: `This unit has covered why stopping placement genuinely matters, the two strongest mushaf symbols marking compulsory and prohibited stops, the range of genuinely permissible stopping options between these two poles, and the real, ongoing responsibility a reciter carries when resuming after any stop, chosen or forced. This course's eleventh unit turns directly to naming common recitation mistakes, both the clear errors already distinguished in this course's very first unit and the more subtle ones a trained ear would still notice, precisely the kind of mistake incorrect waqf or ibtida can itself produce if this unit's own material is not genuinely internalized.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 11 - COMMON MISTAKES IN RECITATION (full content,
  // expanded)
  //
  // This unit deliberately synthesizes material already covered
  // across this course rather than introducing new technical rules,
  // naming lahn jali and lahn khafi systematically and revisiting
  // specific errors already established in earlier units as concrete
  // case studies. The scholarly ruling on each category and the
  // latusalunna/laa tasalunna example were checked against multiple
  // current tajweed references before writing. This is descriptive
  // recitation fact rather than Qur'an or hadith content in itself,
  // so no verse blocks appear in this unit; content is still
  // recommended for a qualified qari's review before publishing.
  // -----------------------------------------------------------
  'lahn-1': {
    id: 'lahn-1',
    unit: 'unit-11',
    title: 'Al-Lahn Al-Jali: Clear Errors',
    summary: 'Mistakes serious enough to be noticed without specialist training.',
    content: [
      {
        heading: "Returning to a distinction this course introduced early",
        body: `This course's very first unit already distinguished al-lahn al-jali, a clear error serious enough to be noticed even without specialist training, sometimes changing a word's actual meaning, from al-lahn al-khafi, a subtler deviation a trained ear would still notice, examined directly in this unit's next topic. Having now covered every specific rule this distinction assumes, this unit gives both categories the full, systematic treatment they deserve.`,
      },
      {
        heading: "Why lahn jali carries the weight it does",
        body: `Lahn jali is treated with real seriousness across essentially the entire scholarly tradition specifically because it risks distorting the actual words Allah revealed, not merely how pleasantly or precisely those words are pronounced. This is why avoiding it is treated as a matter every reciter is expected to take seriously, in sharp contrast to the more flexible, ongoing refinement this unit's next topic describes regarding lahn khafi.`,
      },
      {
        heading: "A single example showing exactly how devastating this category can be",
        body: `Mispronouncing latusalunna (لَتُسْأَلُنَّ), you will surely be questioned, as laa tasalunna (لَا تُسْأَلُنَّ), you will not be questioned, produces a complete reversal of meaning from a genuinely small change in sound. This is precisely the kind of case this course's very first unit had in mind when it distinguished lahn jali from an error that merely sounds imprecise: the actual content of what is being conveyed has been inverted entirely, not simply roughened at the edges.`,
      },
      {
        heading: "Revisiting two examples already established across this course",
        body: `This course's second unit already introduced qalb (قَلْب), heart, becoming kalb (كَلْب), dog, through confusing qaf and kaf, two articulation points close enough in the mouth to invite exactly this kind of error. That same unit and this course's third unit also established dad as widely considered the most difficult letter in Arabic, frequently collapsed into dal by learners reaching for a more familiar, comfortable articulation. Both examples, revisited here directly, are genuine instances of lahn jali: errors a listener with no specialist tajweed training would still notice, since they cross from one recognizable letter into an entirely different one.`,
      },
      {
        heading: "Two broad forms this category takes",
        body: `Lahn jali generally takes one of two forms: an error in the letter itself, substituting one recognizable Arabic letter's sound for another, as in every example already covered in this topic, or an error in a vowel or grammatical ending, changing a short vowel entirely rather than merely its emphasis, which can just as easily alter a word's actual grammatical role or meaning as a substituted letter can. Both forms share the same defining quality this unit's opening topic already established: noticeable to any listener, not only one trained in this specific science.`,
      },
    ],
  },

  'lahn-2': {
    id: 'lahn-2',
    unit: 'unit-11',
    title: 'Al-Lahn Al-Khafi: Hidden Errors',
    summary: 'Subtler deviations a trained ear would catch, even without changing meaning.',
    content: [
      {
        heading: "A different category, a different weight",
        body: `Al-lahn al-khafi describes an error that leaves a word's actual meaning intact while still deviating from the full, precise technical rules this course has covered in complete detail. Where lahn jali risks distorting Allah's own words, lahn khafi affects only the beauty, precision, and full technical correctness of how those same words are delivered, which is why it is treated with real seriousness but a genuinely different weight than lahn jali already covered in this unit's previous topic.`,
      },
      {
        heading: "A direct callback to this course's own eighth unit",
        body: `This course's eighth unit named ad-daaalleen, from Surah al-Fatihah, as the standard example of madd laazim kalimi muthaqqal, requiring a full six harakat without exception. A reciter who shortens this specific madd to four counts or fewer, out of habit, uncertainty, or simple carelessness, has not changed the word's meaning at all. They have, however, committed a genuine, identifiable instance of lahn khafi, precisely because the full six-count requirement is a real, specific technical rule this course has already established directly, not a matter of personal preference.`,
      },
      {
        heading: "A catalog of further examples already established across this course",
        body: `Several other rules already covered in detail throughout this course produce exactly this same category of error when applied imprecisely. Omitting or shortening ghunnah where this course's fourth and fifth units require it, whether in idgham with ghunnah, ikhfa, iqlab, or the doubled noon and meem, leaves meaning intact while still falling short of correct technical delivery. Failing to produce qalqalah's distinctive bounce on one of the five letters already covered in this course's ninth unit, allowing the letter to simply stop flatly instead, produces the same category of error. Applying tafkhim to the laam of Allah's name regardless of the preceding vowel, already named directly in this course's sixth unit as a well documented, common mistake, and misapplying tafkhim or tarqiq to the ra' according to conditions already covered in this course's ninth unit, both belong here as well.`,
      },
      {
        heading: "Why this category is genuinely harder to catch in one's own recitation",
        body: `This course's second unit already explained directly why certain errors resist a reciter's own self-detection: the brain tends to hear the sound it intended to produce rather than the sound actually produced. This applies with particular force to lahn khafi specifically, since these errors, by definition, do not disrupt a word's basic recognizability the way lahn jali does. A shortened madd or a missing ghunnah still sounds like the correct word, simply delivered slightly less precisely, which is exactly why these specific errors can persist undetected in a reciter's own practice far longer than the more obvious errors already covered in this unit's previous topic.`,
      },
      {
        heading: "Why naming these specific examples directly matters here",
        body: `Rather than leaving lahn khafi as an abstract category, this topic has deliberately revisited specific rules already covered in full technical detail across this course's earlier units, precisely so that this unit functions as a genuine review of where imprecision is actually most likely to creep in, not merely a restatement of a definition already given in this course's first unit. Every example named in this topic is a real, specific point this course has already asked its reader to master, now reframed as exactly the kind of place careless recitation most commonly falls short.`,
      },
    ],
  },

  'lahn-3': {
    id: 'lahn-3',
    unit: 'unit-11',
    title: 'Self-Correction: Learning to Hear Your Own Recitation',
    summary: 'Practical habits for noticing your own mistakes rather than only someone else\'s.',
    content: [
      {
        heading: "Returning to a limitation this course has never hidden",
        body: `This course's very first unit already stated plainly that a written course, however thorough, cannot fully replace listening to correct recitation and receiving direct correction from someone qualified to give it. Having now covered every specific rule this entire course addresses, in full technical detail, this closing topic turns to what a learner can genuinely do on their own, in between sessions with a qualified teacher, to narrow the specific gap this course's opening unit already named directly.`,
      },
      {
        heading: "Recording and listening back, deliberately",
        body: `A recording of one's own recitation, played back and compared honestly against a known, correct standard, partially addresses the exact limitation this course's second unit already identified: a reciter's own brain, in the moment of speaking, tends to hear the sound intended rather than the sound actually produced. Listening back afterward, once the moment of production has passed, offers a genuinely different vantage point, one considerably more likely to catch a shortened madd, a missing ghunnah, or an unintentionally heavy laam than the reciter's own ear could catch live.`,
      },
      {
        heading: "Isolating one rule at a time",
        body: `Given the sheer number of specific, named rules this course has covered, attempting to monitor every one of them simultaneously in ordinary recitation is genuinely unrealistic, particularly for a learner still building fluency. A more effective approach is deliberately isolating one specific rule at a time, this week's practice focused entirely on ghunnah duration, for example, next week's focused entirely on ra's heavy and light conditions, allowing focused, honest attention on one genuinely masterable target before adding the next.`,
      },
      {
        heading: "Comparing directly against a qualified reciter",
        body: `Listening closely to a specific, short passage recited by a reciter known for precise, correct tajweed, then attempting the exact same passage oneself and comparing the two recordings side by side, offers a considerably more concrete standard than attempting to apply this course's written descriptions entirely from memory. This is not a replacement for the direct, live correction this course's first unit already named as irreplaceable, but a genuinely useful complement to it, available between actual sessions with a qualified teacher.`,
      },
      {
        heading: "Closing this unit and this course's technical content",
        body: `This unit completes this course's full treatment of correct and incorrect recitation, from lahn jali's clear, meaning-altering errors through lahn khafi's subtler technical imprecisions to the practical habits that genuinely help narrow the gap between knowing a rule and consistently applying it correctly. This course's twelfth and final unit turns from technical correctness to a broader, practical question this closing topic has already begun to open: how correct recitation is actually lived out and sustained over an entire lifetime, not mastered once and then left unattended.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 12 - LIVING TAJWEED (full content, expanded)
  //
  // This closing unit deliberately introduces no new technical
  // rules. Every section applies material this course has already
  // established, the same approach this course's opening unit
  // signaled its closing unit would eventually take.
  // -----------------------------------------------------------
  'live-1': {
    id: 'live-1',
    unit: 'unit-12',
    title: 'Building a Daily Recitation Practice',
    summary: 'Practical structure for making correct recitation an ordinary daily habit.',
    content: [
      {
        heading: "Where 'ilm becomes 'amal",
        body: `This course's first unit distinguished 'ilm at-tajweed, theoretical knowledge of the rules, from 'amal bit-tajweed, actually applying them correctly in recitation. Every unit since has built the 'ilm half of this pairing in full technical detail. Daily practice is where that knowledge either becomes genuine 'amal or remains permanently theoretical, and this closing unit's opening topic addresses exactly how that transition actually happens.`,
      },
      {
        heading: "Consistency over intensity",
        body: `A short, genuinely consistent daily recitation, even a small handful of verses, reviewed with real attention, builds correct habit more reliably than an occasional lengthy session recited carelessly. This mirrors a principle already familiar from ordinary skill-building generally: steady, repeated, attentive practice reshapes habit in a way infrequent bursts of larger effort rarely do, regardless of how much total time each approach eventually adds up to.`,
      },
      {
        heading: "Applying this course's own self-correction habits directly",
        body: `This course's eleventh unit already recommended isolating one specific rule per practice session, recording one's own recitation for honest playback, and comparing directly against a reciter known for precision. A genuine daily practice is exactly where these three habits actually belong, not as occasional exercises but as the ordinary structure of daily review itself: today's short passage recited with deliberate attention to ghunnah, tomorrow's with attention to ra', each session building on real, already-mastered ground rather than attempting everything at once.`,
      },
      {
        heading: "A hadith worth returning to directly",
        body: `This course's very first unit already covered the hadith describing the one who recites haltingly, finding it genuinely difficult, as earning a real, distinct reward for that specific struggle. A daily practice built honestly around this closing unit's recommendations will, for most learners, involve real ongoing difficulty for a considerable stretch of time, exactly the condition that hadith addresses directly. Consistent, humble daily effort, imperfect as it may remain for some time, is not a lesser substitute for eventual mastery. It is, according to that same hadith, already a rewarded practice in its own right.`,
      },
      {
        heading: "What a realistic daily structure actually looks like",
        body: `A sustainable daily practice generally includes three brief elements: reciting a short, manageable passage with full attention, focusing that attention on one specific rule or category already covered across this course rather than attempting comprehensive perfection at once, and honestly reviewing the result, whether through recording, a teacher, or careful self-reflection, before moving to the next day's passage. This structure is deliberately modest, precisely because a genuinely sustainable daily habit matters considerably more, over the length of an actual lifetime, than an ambitious routine abandoned within its first few weeks.`,
      },
    ],
  },

  'live-2': {
    id: 'live-2',
    unit: 'unit-12',
    title: 'Why Self-Study Has Real Limits, and How to Use a Teacher Well',
    summary: 'What a course like this one cannot do alone, and what to look for in a teacher.',
    content: [
      {
        heading: "A limitation this course has never hidden",
        body: `This course's first unit stated plainly that a written course, however thorough, cannot fully replace listening to correct recitation and receiving direct correction from someone qualified to give it. Having now covered this entire subject's full technical content, this topic addresses directly what a genuinely qualified teacher actually provides that this course, by its very nature as a written text, cannot.`,
      },
      {
        heading: "Talaqqi: the traditional method this entire science was built around",
        body: `The Qur'an has always been transmitted primarily through talaqqi, direct oral reception from a qualified teacher, rather than through written description alone, from the very earliest generations onward. This is not an incidental historical detail. It reflects the same limitation this course has acknowledged from its own opening unit: correct pronunciation is a skill genuinely verified by the ear, and talaqqi is the traditional structure built specifically around that exact requirement.`,
      },
      {
        heading: "What actually qualifies someone to teach this subject",
        body: `A genuinely qualified tajweed teacher is, ideally, someone whose own recitation has itself been verified through a documented chain reaching back through a continuous line of teachers, a sanad or ijazah, rather than someone who has simply studied the written rules independently. This does not mean a knowledgeable teacher without a formally documented chain has nothing valuable to offer. It means the single most important quality to look for in a teacher is verified, corrected recitation ability, not merely fluent explanation of the rules this course has already covered in full.`,
      },
      {
        heading: "What a genuinely useful teaching session actually looks like",
        body: `A productive session with a qualified teacher centers on the reciter's own live recitation being heard and corrected directly, in real time, rather than on re-explaining rules and definitions a course like this one has already covered thoroughly. A learner who arrives already understanding a rule intellectually, having studied it directly in a unit like this course's fourth or ninth, can spend that session's actual time on live correction and refinement, rather than on first-time explanation, making written study and live teaching genuine complements rather than competing, redundant approaches to the same material.`,
      },
      {
        heading: "Bringing this course's own content directly into a teaching session",
        body: `A learner preparing for a session with a qualified teacher can productively arrive already able to name the specific rule they most want corrected, ghunnah duration in idgham, the isti'la exception covered in this course's ninth unit, or any other specific point already studied here in detail, rather than presenting an entire passage for open-ended review. This kind of focused preparation is precisely what turns this course's own written detail into genuinely productive use of a teacher's limited time and attention.`,
      },
    ],
  },

  'live-3': {
    id: 'live-3',
    unit: 'unit-12',
    title: 'Tajweed and Tadabbur: Rules in the Service of Meaning',
    summary: 'Why correct recitation is meant to deepen reflection, not compete with it.',
    content: [
      {
        heading: "A real risk worth naming directly",
        body: `A learner who has now studied seventeen articulation points, dozens of named rules, and the precise conditions governing each one could reasonably begin treating correct recitation as a purely technical exercise, a checklist of sounds to produce correctly with no accompanying reflection on what those sounds actually mean. This is a genuine, understandable risk after this much technical study, and this closing unit's third topic addresses it directly rather than leaving it unaddressed.`,
      },
      {
        heading: "Returning to this course's own founding verse",
        body: `This course opened with Surah al-Muzzammil 73:4, instructing recitation in a slow, measured, well-articulated manner, and this course's first unit already explained tartil as being specifically about clarity and correct articulation, not merely about pace. That same slow, measured pace this verse commands is precisely what creates the space genuine reflection, tadabbur, actually requires. Correct tajweed and genuine tadabbur are not competing priorities pulling a reciter in two directions. The same unhurried attentiveness tartil demands is what makes real reflection on meaning possible in the first place.`,
      },
      {
        heading: "How correct waqf serves reflection directly, not only grammar",
        body: `This course's tenth unit established that correct stopping placement protects a passage's actual meaning from genuine distortion. The same correct stopping points that protect meaning also naturally create the pauses where a reciter's own reflection on that meaning has room to actually occur. A recitation rushed past every stopping point without pause protects meaning technically while still leaving no space for a reciter to actually dwell on it, which is precisely why this course has treated waqf as more than a purely mechanical rule throughout its tenth unit.`,
      },
      {
        heading: "Why every rule in this course ultimately serves this same purpose",
        body: `This course's very first unit illustrated tajweed's stakes directly through qalb becoming kalb, heart becoming dog, a single mispronunciation capable of replacing actual meaning with something else entirely. Every rule covered since, from the seventeen articulation points through madd's several categories to the waqf symbols just covered, exists for this same underlying reason: protecting the actual, intended meaning of revealed speech from exactly this kind of distortion. Correct tajweed, understood this way, is not a rival discipline competing with reflection on meaning. It is the specific discipline that keeps that meaning intact and available for reflection to actually engage with in the first place.`,
      },
      {
        heading: "A practical implication for daily practice",
        body: `Given this direct connection, the daily practice already recommended in this unit's first topic is best approached not as two separate tasks, correct technical recitation and separate reflection on meaning, performed one after the other, but as a single unified act. Reciting a short passage with genuine technical care, and then sitting with what that passage actually means, are two halves of the exact same practice this course has been building toward across all twelve of its units, not two competing demands on a learner's limited time and attention.`,
      },
    ],
  },

  'live-4': {
    id: 'live-4',
    unit: 'unit-12',
    title: 'Closing Reflections: A Lifetime Craft',
    summary: 'Why tajweed is a skill maintained for life, not a subject completed once.',
    content: [
      {
        heading: "An opening claim, now genuinely earned rather than simply asserted",
        body: `This course opened by describing tajweed as the specific body of knowledge that keeps the Qur'an's spoken preservation intact, essentially unchanged in its actual sound across fourteen centuries. Twelve units later, having moved through every articulation point, every characteristic, every named rule governing noon, meem, laam, madd, ra', qalqalah, and the correct placement of every stop, that opening claim should now stand as a conclusion genuinely earned through real, cumulative evidence, not merely a claim accepted on trust back at this course's very first page.`,
      },
      {
        heading: "Returning one final time to the hadith this course opened with",
        body: `This course's first unit described both the one skilled in the Qur'an, placed among the noble, righteous scribes, and the one still reciting haltingly, genuinely struggling, earning real reward specifically for that struggle. Every reader of this course sits somewhere along the real distance between these two descriptions, and this closing unit's own first topic already stated directly that consistent, honest daily effort is what actually closes that distance over time, not a single completed course or a single moment of arrival.`,
      },
      {
        heading: "A craft maintained, not a subject finished",
        body: `Correct tajweed is not a body of knowledge a person completes once and then sets aside as settled, the way one might finish a single book and move permanently on to the next. It is a physical, ear-verified skill, exactly as this course's second unit described from its very first page, requiring the same kind of ongoing maintenance any physical skill genuinely requires, continued daily practice, continued honest self-correction, and continued access to correction from someone qualified to give it, for as long as a person continues reciting at all.`,
      },
      {
        heading: "What this course leaves its reader actually holding",
        body: `This course has provided the complete 'ilm, the theoretical knowledge, this subject requires: every articulation point, every characteristic, every rule, and the evidence and reasoning behind each one. What it cannot provide directly is the 'amal, the lived, ear-verified application this course's own first unit already identified as tajweed's other essential half. That remaining half belongs to daily practice, to a qualified teacher's direct correction, and to the reader's own sustained, honest effort, carried forward well beyond this course's own final page.`,
      },
      {
        heading: "A closing word",
        body: `Whatever specific point a reader has reached by this course's final page, whether closer to the skilled reciter this course's first unit described or still genuinely struggling through unfamiliar articulation points, both are described directly in that same opening hadith as rewarded, sincere effort, and both are equally invited to carry this same craft forward, into daily practice, into a genuine teacher relationship, into reflection on meaning, and eventually, for many readers, into teaching this same foundation to someone else exactly as it was taught here, evidence and reasoning offered alongside the rules themselves, not memorization demanded without it.`,
      },
    ],
  },
};