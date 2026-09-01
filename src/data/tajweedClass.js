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
  // UNIT 4 - RULES OF NOON SAKINAH AND TANWEEN (placeholders)
  // -----------------------------------------------------------
  'noon-1': { id: 'noon-1', unit: 'unit-4', title: 'Introduction to the Four Rules', summary: 'An overview of what happens when a silent noon or tanween meets the next letter.' },
  'noon-2': { id: 'noon-2', unit: 'unit-4', title: 'Izhar Halqi: Clear Pronunciation', summary: 'The six throat letters that require the noon to be pronounced clearly.' },
  'noon-3': { id: 'noon-3', unit: 'unit-4', title: 'Idgham: Merging, With and Without Ghunnah', summary: 'The letters that cause the noon to merge into what follows it.' },
  'noon-4': { id: 'noon-4', unit: 'unit-4', title: 'Iqlab: Conversion to Meem', summary: 'The single letter that converts a silent noon into a meem sound.' },
  'noon-5': { id: 'noon-5', unit: 'unit-4', title: 'Ikhfa Haqiqi: True Concealment', summary: 'The remaining letters that partially conceal the noon between two extremes.' },

  // -----------------------------------------------------------
  // UNIT 5 - RULES OF MEEM SAKINAH (placeholders)
  // -----------------------------------------------------------
  'meem-1': { id: 'meem-1', unit: 'unit-5', title: 'The Three Rules of Meem Sakinah', summary: 'How a silent meem is treated depending on the letter that follows it.' },
  'meem-2': { id: 'meem-2', unit: 'unit-5', title: 'Ikhfa Shafawi and Idgham Shafawi', summary: 'Concealment and merging, specific to the meem and its own articulation point.' },
  'meem-3': { id: 'meem-3', unit: 'unit-5', title: 'Izhar Shafawi', summary: 'The remaining letters that require the silent meem to be pronounced clearly.' },
  'meem-4': { id: 'meem-4', unit: 'unit-5', title: 'Ghunnah in the Doubled Noon and Meem', summary: 'The obligatory nasal sound whenever noon or meem carries a shaddah.' },

  // -----------------------------------------------------------
  // UNIT 6 - THE LAAM RULES (placeholders)
  // -----------------------------------------------------------
  'laam-1': { id: 'laam-1', unit: 'unit-6', title: 'The Laam of the Name of Allah: Tafkhim and Tarqiq', summary: 'When the laam in "Allah" is pronounced heavy, and when it is pronounced light.' },
  'laam-2': { id: 'laam-2', unit: 'unit-6', title: 'Laam Shamsiyyah: The Sun Letters', summary: 'The fourteen letters that absorb the laam of the definite article entirely.' },
  'laam-3': { id: 'laam-3', unit: 'unit-6', title: 'Laam Qamariyyah: The Moon Letters', summary: 'The remaining fourteen letters that leave the laam clearly pronounced.' },
  'laam-4': { id: 'laam-4', unit: 'unit-6', title: 'Distinguishing the Definite-Article Laam from Other Laams', summary: 'Why not every laam in the Qur\'an follows the sun and moon letter rule.' },

  // -----------------------------------------------------------
  // UNIT 7 - AL-MADD, PART ONE (placeholders)
  // -----------------------------------------------------------
  'madd1-1': { id: 'madd1-1', unit: 'unit-7', title: 'What is Madd and Why Elongation Matters', summary: 'Why certain letters are held longer than others, and what changes if they are not.' },
  'madd1-2': { id: 'madd1-2', unit: 'unit-7', title: 'The Letters of Madd and Layyin', summary: 'The three letters of elongation and the two letters of softness.' },
  'madd1-3': { id: 'madd1-3', unit: 'unit-7', title: 'Al-Madd At-Tabi\'i: The Natural Madd', summary: 'The baseline elongation present whenever no additional cause extends it further.' },

  // -----------------------------------------------------------
  // UNIT 8 - AL-MADD, PART TWO (placeholders)
  // -----------------------------------------------------------
  'madd2-1': { id: 'madd2-1', unit: 'unit-8', title: 'Madd Muttasil: The Connected Madd', summary: 'When a madd letter and its hamzah cause meet within the same word.' },
  'madd2-2': { id: 'madd2-2', unit: 'unit-8', title: 'Madd Munfasil: The Separated Madd', summary: 'When a madd letter ends one word and a hamzah begins the next.' },
  'madd2-3': { id: 'madd2-3', unit: 'unit-8', title: 'Madd \'Aridh lis-Sukoon: The Temporary Madd Before a Stop', summary: 'The extra elongation that appears specifically because a recitation is stopping.' },
  'madd2-4': { id: 'madd2-4', unit: 'unit-8', title: 'Madd Laazim: The Necessary Madd and Its Four Types', summary: 'The longest, most fixed category of madd, and its four distinct forms.' },
  'madd2-5': { id: 'madd2-5', unit: 'unit-8', title: 'Madd Badal, \'Iwad, and Silah', summary: 'Three further named categories of madd, each with its own specific condition.' },

  // -----------------------------------------------------------
  // UNIT 9 - RA' AND QALQALAH (placeholders)
  // -----------------------------------------------------------
  'ra-1': { id: 'ra-1', unit: 'unit-9', title: 'Tafkhim of the Ra\': When It Is Heavy', summary: 'The specific conditions under which the ra\' is pronounced with a heavy quality.' },
  'ra-2': { id: 'ra-2', unit: 'unit-9', title: 'Tarqiq of the Ra\': When It Is Light', summary: 'The specific conditions under which the ra\' is pronounced with a light quality.' },
  'ra-3': { id: 'ra-3', unit: 'unit-9', title: 'The Ra\' with Two Correct Ways of Recitation', summary: 'The handful of specific words where both a heavy and light ra\' are authentically transmitted.' },
  'ra-4': { id: 'ra-4', unit: 'unit-9', title: 'Qalqalah: Definition and the Five Letters', summary: 'The distinct bouncing sound five specific letters carry under certain conditions.' },
  'ra-5': { id: 'ra-5', unit: 'unit-9', title: 'Minor and Major Qalqalah', summary: 'Why the same five letters produce a stronger or lighter bounce depending on position.' },

  // -----------------------------------------------------------
  // UNIT 10 - WAQF AND IBTIDA (placeholders)
  // -----------------------------------------------------------
  'waqf-1': { id: 'waqf-1', unit: 'unit-10', title: 'Why Where You Stop Can Change What You Mean', summary: 'How the placement of a pause can genuinely alter a verse\'s meaning.' },
  'waqf-2': { id: 'waqf-2', unit: 'unit-10', title: 'Waqf Lazim and the Stop Signs in the Mushaf', summary: 'The mandatory stops and the specific symbols printed in the text to mark them.' },
  'waqf-3': { id: 'waqf-3', unit: 'unit-10', title: 'Waqf Jaiz and Its Varieties', summary: 'The permissible stops, and why some are preferred over others.' },
  'waqf-4': { id: 'waqf-4', unit: 'unit-10', title: 'Rules of Starting (Ibtida) After a Stop', summary: 'Why resuming a recitation correctly matters as much as stopping correctly.' },

  // -----------------------------------------------------------
  // UNIT 11 - COMMON MISTAKES IN RECITATION (placeholders)
  // -----------------------------------------------------------
  'lahn-1': { id: 'lahn-1', unit: 'unit-11', title: 'Al-Lahn Al-Jali: Clear Errors', summary: 'Mistakes serious enough to be noticed without specialist training.' },
  'lahn-2': { id: 'lahn-2', unit: 'unit-11', title: 'Al-Lahn Al-Khafi: Hidden Errors', summary: 'Subtler deviations a trained ear would catch, even without changing meaning.' },
  'lahn-3': { id: 'lahn-3', unit: 'unit-11', title: 'Self-Correction: Learning to Hear Your Own Recitation', summary: 'Practical habits for noticing your own mistakes rather than only someone else\'s.' },

  // -----------------------------------------------------------
  // UNIT 12 - LIVING TAJWEED (placeholders)
  // -----------------------------------------------------------
  'live-1': { id: 'live-1', unit: 'unit-12', title: 'Building a Daily Recitation Practice', summary: 'Practical structure for making correct recitation an ordinary daily habit.' },
  'live-2': { id: 'live-2', unit: 'unit-12', title: 'Why Self-Study Has Real Limits, and How to Use a Teacher Well', summary: 'What a course like this one cannot do alone, and what to look for in a teacher.' },
  'live-3': { id: 'live-3', unit: 'unit-12', title: 'Tajweed and Tadabbur: Rules in the Service of Meaning', summary: 'Why correct recitation is meant to deepen reflection, not compete with it.' },
  'live-4': { id: 'live-4', unit: 'unit-12', title: 'Closing Reflections: A Lifetime Craft', summary: 'Why tajweed is a skill maintained for life, not a subject completed once.' },
};