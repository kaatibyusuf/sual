// src/data/arabiyyahClass.js
//
// Arabiyyah Class -- a comprehensive Nahw (Arabic grammar/syntax)
// course, built the way classical Arabic grammar primers such as
// Al-Ajurrumiyyah are traditionally sequenced: from the sentence
// itself through its parts, case marking, and the major sentence
// structures of intermediate Nahw. Deliberately named and structured
// separately from the existing Arabiyyah discipline already present
// in this app's Q&A-style Disciplines feature (see this course's own
// migrations and payment product name, 'arabiyyahclass', distinct
// from anything used there) -- nothing here touches that existing
// feature.
//
// This course is deliberately heavier in Arabic than the other
// classes: every topic works through real Arabic example sentences,
// parsed word by word, alongside the English explanation, since
// parsing (i'rab) is the actual subject matter of Nahw itself.
//
// STATUS: Unit 1 has full lesson content. All other units currently
// have title + summary only (placeholder content) -- to be filled in
// unit-by-unit, same pattern as the other four classes.
//
// Original content, not reproduced from any existing source.
// Grammatical rules, terminology, and the founding history of Nahw
// checked against standard classical and contemporary Arabic
// grammar references before writing. Recommend a qualified Arabic
// teacher's review before publishing, given how much precision this
// specific subject requires.

export const ARABIYYAHCLASS_UNITS = [
  {
    id: 'unit-1',
    title: 'Foundations: Al-Kalam and Its Parts',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'Al-Jumlah: The Sentence',
    topics: ['jumlah-1', 'jumlah-2', 'jumlah-3', 'jumlah-4', 'jumlah-5'],
  },
  {
    id: 'unit-3',
    title: 'Al-Mubtada wal-Khabar: Subject and Predicate',
    topics: ['mubtada-1', 'mubtada-2', 'mubtada-3', 'mubtada-4'],
  },
  {
    id: 'unit-4',
    title: "Al-Fi'l, Al-Fa'il, and Al-Maf'ul Bihi",
    topics: ['fill-1', 'fill-2', 'fill-3', 'fill-4'],
  },
  {
    id: 'unit-5',
    title: "Al-I'rab: Case and Mood",
    topics: ['irab-1', 'irab-2', 'irab-3', 'irab-4', 'irab-5'],
  },
  {
    id: 'unit-6',
    title: "Signs of I'rab",
    topics: ['signs-1', 'signs-2', 'signs-3', 'signs-4', 'signs-5'],
  },
  {
    id: 'unit-7',
    title: 'Al-Ism: Categories of the Noun',
    topics: ['ism-1', 'ism-2', 'ism-3', 'ism-4'],
  },
  {
    id: 'unit-8',
    title: 'Harf al-Jarr and Al-Idafah',
    topics: ['jarr-1', 'jarr-2', 'jarr-3', 'jarr-4'],
  },
  {
    id: 'unit-9',
    title: "At-Tawabi': The Dependents",
    topics: ['tawabi-1', 'tawabi-2', 'tawabi-3', 'tawabi-4'],
  },
  {
    id: 'unit-10',
    title: 'Kaana wa Akhawatuha',
    topics: ['kaana-1', 'kaana-2', 'kaana-3', 'kaana-4'],
  },
  {
    id: 'unit-11',
    title: 'Inna wa Akhawatuha',
    topics: ['inna-1', 'inna-2', 'inna-3', 'inna-4'],
  },
  {
    id: 'unit-12',
    title: "Al-Maf'ulat: Other Objects of the Verb",
    topics: ['mafool-1', 'mafool-2', 'mafool-3', 'mafool-4'],
  },
  {
    id: 'unit-13',
    title: "Al-Fi'l al-Mudari' and Its Governors",
    topics: ['mudari-1', 'mudari-2', 'mudari-3', 'mudari-4'],
  },
  {
    id: 'unit-14',
    title: 'Beyond the Basics',
    topics: ['beyond-1', 'beyond-2', 'beyond-3', 'beyond-4'],
  },
];

export const ARABIYYAHCLASS_TOPIC_ORDER = ARABIYYAHCLASS_UNITS.flatMap((u) => u.topics);

export const ARABIYYAHCLASS_TOPICS = {
  // -----------------------------------------------------------
  // UNIT 1 - FOUNDATIONS: AL-KALAM AND ITS PARTS (full content)
  //
  // The founding history of Nahw (Abu al-Aswad al-Du'ali, the
  // Qur'anic misrecitation at 9:3 that prompted it) checked against
  // multiple current classical and contemporary references before
  // writing. Grammatical terminology and example sentences
  // constructed and checked directly against standard Nahw
  // references. This course presents Arabic examples with harakat
  // (short vowel marks) included throughout, since the vowel ending
  // itself is very often the entire grammatical point being taught.
  // -----------------------------------------------------------
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'What is Nahw and Why It Matters',
    summary: 'The origin of Arabic grammar, and the single vowel that started it.',
    content: [
      {
        heading: 'النحو: a science built to protect meaning',
        body: `An-Nahw (النَّحْو) is the science governing how Arabic words change form and combine into sentences, most visibly through i'rab, the short vowel or letter appearing at the end of a word that signals its specific grammatical role. This course studies Nahw from its very first building block, the sentence itself, through to the structures that govern more advanced Arabic reading and writing.`,
      },
      {
        heading: 'A single misplaced vowel, and what it actually did',
        body: `Tradition consistently traces Nahw's origin to a specific, documented incident. A reciter reading Surah at-Tawbah aloud pronounced one word with the wrong final vowel, changing the verse's own meaning in a genuinely serious way.`,
        verses: [
          {
            type: 'example',
            arabic: 'أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ وَرَسُولُهُ',
            transliteration: 'anna Allāha barī\u02be\u02be mina l-mushrikīna wa rasūluhū',
            english: 'That Allah is disassociated from the polytheists, and so is His Messenger.',
            source: 'Surah at-Tawbah, 9:3, correct reading',
          },
          {
            type: 'example',
            arabic: 'أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ وَرَسُولِهِ',
            transliteration: 'anna Allāha barī\u02be\u02be mina l-mushrikīna wa rasūlihī',
            english: 'That Allah is disassociated from the polytheists, and from His Messenger.',
            source: 'The mispronounced reading (single vowel changed)',
          },
        ],
      },
      {
        heading: 'What actually changed between these two readings',
        body: `The only difference between these two readings is the final vowel on the word "رَسُول," messenger: a damma (رَسُولُهُ) in the correct reading, marking it as raf', nominative, meaning "His Messenger" stands as a second subject alongside Allah, equally disassociated from the polytheists. A kasra (رَسُولِهِ) in the mispronounced reading instead marks it as jarr, genitive, attaching it to "the polytheists" instead, producing a reading that wrongly suggests Allah is disassociated from His own Messenger as well, an entirely different and deeply mistaken meaning from a single vowel.`,
      },
      {
        heading: "'Ali ibn Abi Talib's instruction, and Abu al-Aswad's response",
        body: `Upon learning of this exact error, 'Ali ibn Abi Talib, already concerned about growing mispronunciation as Arabic spread among new, non-native speakers, is widely recorded as instructing Abu al-Aswad ad-Du'ali to establish clear rules protecting the language from precisely this kind of error. Abu al-Aswad is consistently credited across the tradition as the first to systematize what would become the science of Nahw, beginning with the same three-way division of every Arabic word into ism, fi'l, and harf that this unit's own third topic examines directly.`,
      },
      {
        heading: 'Why this single story sets the tone for this entire course',
        body: `This incident demonstrates directly what this entire course will keep returning to: in Arabic, a single short vowel is very often the entire difference between one meaning and its near opposite. Nahw is not a decorative or optional layer added on top of vocabulary. It is the specific system that makes precise, unambiguous meaning possible at all, and mastering it is what allows a reader to trust that they have understood a sentence correctly rather than merely recognized its individual words.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'Al-Kalam: Speech and Its Definition',
    summary: 'What Arabic grammarians actually mean by "speech," and why the definition is so specific.',
    content: [
      {
        heading: 'A precise, technical definition',
        body: `Arabic grammarians define al-kalam (الكَلَام) very specifically: an utterance composed of two or more words, conveying a mufeed, complete and self-sufficient, meaning, according to Arabic linguistic convention. Every one of these conditions matters, and a phrase failing to meet even one of them is not considered kalam in this technical sense, however much it might resemble ordinary speech.`,
      },
      {
        heading: 'The condition of being murakkab: composed of real words',
        body: `Kalam must be murakkab, composed of at least two actual Arabic words joined together. A single word alone, however meaningful, such as كِتَابٌ (kitābun, a book), does not itself qualify as kalam under this technical definition, since it is not yet combined with anything else.`,
      },
      {
        heading: 'The condition of ifadah: a complete, self-sufficient meaning',
        body: `Kalam must also be mufeed, meaning it leaves the listener with a complete sense, satisfied and requiring no further clarification, once they hear it. جَاءَ مُحَمَّدٌ (jā\u02be a Muhammadun), Muhammad came, satisfies this condition directly: a listener understands the full statement immediately and needs nothing further. By contrast, إِنْ حَضَرَ مُحَمَّدٌ (in hadara Muhammadun), if Muhammad were present..., leaves the listener genuinely waiting for what would follow, and therefore does not, on its own, qualify as kalam in this technical sense.`,
      },
      {
        heading: 'The condition of wad\u2019: speech within Arabic\u2019s own convention',
        body: `Kalam must finally be bil-wad', meaning it uses actual Arabic words according to the language's own established conventions, rather than invented sounds or words borrowed unassimilated from another language entirely. This condition simply confirms that the science of Nahw concerns itself specifically with genuine Arabic speech.`,
      },
      {
        heading: 'Why this precise definition matters for everything that follows',
        body: `This exact definition, murakkab, mufeed, and bil-wad' together, is what this course's own next unit builds on directly: al-jumlah al-mufeedah, the complete, meaningful sentence, is essentially kalam given its own dedicated treatment as the basic working unit of Arabic grammar. Understanding this definition precisely now is what makes that next unit's own distinctions genuinely clear rather than merely memorized.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'The Three Parts of Speech: Ism, Fi\u2019l, and Harf',
    summary: 'Every word in Arabic falls into exactly one of three categories.',
    content: [
      {
        heading: 'A three-way division covering the entire language',
        body: `Every single word in the Arabic language belongs to exactly one of three categories: al-ism (الاِسْم), the noun, al-fi'l (الفِعْل), the verb, and al-harf (الحَرْف), the particle. This same three-way division, already introduced directly in this unit's first topic as part of Abu al-Aswad's own original systemization, remains the very first distinction every subsequent unit of this course depends on.`,
      },
      {
        heading: 'Al-Ism: naming without indicating time',
        body: `Al-ism refers to a person, place, thing, quality, or concept, entirely without indicating any specific time on its own. رَجُلٌ (rajulun, a man), مَكَّةُ (Makkatu, Makkah), and عِلْمٌ ('ilmun, knowledge) are all asmaa': none of them, by itself, tells a listener when anything happened.`,
      },
      {
        heading: "Al-Fi'l: action bound to a specific time",
        body: `Al-fi'l refers to an action or occurrence, and, critically, always indicates a specific time frame as part of its own basic meaning: past, present, or command. كَتَبَ (kataba, he wrote) indicates a completed past action; يَكْتُبُ (yaktubu, he writes/is writing) indicates present or ongoing action; اُكْتُبْ (uktub, write!) indicates a command. This built-in time reference is exactly what distinguishes a fi'l from an ism.`,
      },
      {
        heading: 'Al-Harf: meaning only in combination',
        body: `Al-harf carries no independent meaning of its own at all, only becoming meaningful once joined to an ism or fi'l. فِي (fī, in), مِنْ (min, from), and وَ (wa, and) are all huruf: none of them means anything standing entirely alone, unlike ism and fi'l, which each carry genuine independent meaning even in isolation.`,
      },
      {
        heading: 'Why this three-way test comes before everything else',
        body: `Every rule this course covers from this point forward, how a word is voweled, what role it plays in a sentence, which further rules apply to it, depends on first correctly identifying whether that specific word is an ism, a fi'l, or a harf. This unit's remaining two topics turn directly to the specific, practical signs that let a reader make this identification correctly and quickly, rather than relying on guesswork or memorized vocabulary lists alone.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'Distinguishing Signs of the Ism',
    summary: 'Four practical tests that reliably identify a noun.',
    content: [
      {
        heading: 'Why practical signs matter more than definitions alone',
        body: `Knowing that an ism names something without indicating time, already covered directly in this unit's third topic, is useful conceptually, but a reader working through real Arabic text needs faster, more mechanical tests. Arabic grammarians identified four specific, reliable signs (alaamaat) that mark a word as an ism.`,
      },
      {
        heading: "Sign one: accepting al-ta'rif, the definite article",
        body: `Any word that can accept اَلْ (al-), the definite article, is necessarily an ism. الكِتَابُ (al-kitābu, the book) confirms كِتَابٌ as an ism directly, since neither a fi'l nor a harf can ever accept this same definite article.`,
      },
      {
        heading: 'Sign two: accepting tanween, nunation',
        body: `Any word that can carry tanween, the doubled final vowel mark producing an "n" sound (ـٌ, ـً, ـٍ), is an ism. كِتَابٌ (kitābun), a book, carries tanween directly on its final letter, immediately confirming it as an ism.`,
      },
      {
        heading: 'Sign three: being preceded by a harf jarr, a preposition',
        body: `Any word that can be directly preceded by one of the huruf al-jarr, already introduced briefly in this unit's third topic and covered fully in this course's eighth unit, is an ism. فِي البَيْتِ (fī l-bayti), in the house, confirms البَيْت as an ism, since only an ism can follow a harf jarr in this specific way.`,
      },
      {
        heading: 'Sign four: entering into idafah, the possessive construct',
        body: `Any word that can function as the second part of an idafah construct, examined fully in this course's eighth unit, is an ism. كِتَابُ الطَّالِبِ (kitābu t-tālibi), the student's book, confirms الطَّالِب as an ism through this specific construction. A reader encountering an unfamiliar word can apply any one of these four signs directly, without needing to already know the word's meaning in advance, to confirm confidently that it is functioning as an ism.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: "Distinguishing Signs of the Fi'l and Harf",
    summary: 'Practical tests for verbs, and how particles are identified by elimination.',
    content: [
      {
        heading: "Sign one for the fi'l: accepting qad",
        body: `A word that can be directly preceded by قَدْ (qad), a particle adding a sense of certainty or completion, is a fi'l. قَدْ كَتَبَ (qad kataba), he has indeed written, confirms كَتَبَ as a fi'l directly, since qad attaches specifically and only to verbs.`,
      },
      {
        heading: "Sign two for the fi'l: accepting sa- or sawfa",
        body: `A word that can accept the future markers سَـ (sa-) or سَوْفَ (sawfa), attached specifically to indicate future action, is a fi'l in its present-tense (mudari') form. سَيَكْتُبُ (sa-yaktubu), he will write, confirms يَكْتُبُ as a fi'l, since these two future markers attach only to the mudari' verb form and nothing else.`,
      },
      {
        heading: "Sign three for the fi'l: accepting the feminine taa marker",
        body: `A word that can accept تْ (a sakinah, vowelless taa) attached to its end specifically to indicate a feminine subject, is a fi'l in its past-tense (madi) form. كَتَبَتْ (katabat), she wrote, confirms كَتَبَ as a fi'l, since this specific feminine marker attaches only to past-tense verbs.`,
      },
      {
        heading: 'Al-Harf: identified by process of elimination',
        body: `Unlike ism and fi'l, harf has no positive sign of its own to test for directly. A word is instead confirmed as a harf specifically because it fails every one of the ism signs already covered in this unit's previous topic, and every one of the fi'l signs already covered in this same topic. هَلْ (hal, a question particle), for instance, accepts neither the definite article, nor tanween, nor any preposition before it, nor qad, nor the future markers, nor the feminine taa marker, confirming it as a harf by this same process of elimination.`,
      },
      {
        heading: 'Closing this unit and opening the study of the sentence itself',
        body: `This unit has now covered why Nahw exists at all, the precise technical definition of kalam, the three-way division of every Arabic word, and the specific, practical signs that let a reader correctly identify which category any given word belongs to. This course's second unit turns directly to what happens once these individual words are actually combined together: al-jumlah al-mufeedah, the complete, meaningful sentence, and the specific parts every such sentence is built from.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 2 - AL-JUMLAH: THE SENTENCE (full content, expanded)
  //
  // The classical distinction between jumlah and kalam (every kalam
  // is a jumlah, but not every jumlah is kalam) checked against
  // standard Nahw references before writing, since simplified
  // courses often collapse this distinction. Example sentences
  // constructed and checked directly against standard Nahw
  // references.
  // -----------------------------------------------------------
  'jumlah-1': {
    id: 'jumlah-1',
    unit: 'unit-2',
    title: 'Al-Jumlah al-Mufeedah: The Complete, Meaningful Sentence',
    summary: 'The basic working unit of Arabic grammar, defined precisely.',
    content: [
      {
        heading: 'A term worth distinguishing carefully from kalam',
        body: `This course's first unit already defined al-kalam precisely: an utterance, murakkab, mufeed, and bil-wad'. Al-jumlah (الجُمْلَة), the sentence, is a closely related but technically distinct term, and Arabic grammarians state their relationship directly through a well known formula: كُلُّ كَلَامٍ جُمْلَةٌ وَلَيْسَ كُلُّ جُمْلَةٍ كَلَامًا, every kalam is a jumlah, but not every jumlah is kalam.`,
      },
      {
        heading: "Jumlah defined on its own terms: musnad and musnad ilayh",
        body: `A jumlah, at its most basic, is any combination containing a musnad (مُسْنَد), something predicated, and a musnad ilayh (مُسْنَدٌ إِلَيْهِ), something predicated of, joined together, regardless of whether this combination happens to convey a complete, self-sufficient meaning on its own. This is a genuinely broader category than kalam.`,
      },
      {
        heading: 'A jumlah that is not yet mufeedah',
        body: `إِنْ قُمْتَ (in qumta), if you stood..., is a genuine jumlah: قُمْتَ itself contains a musnad ilayh, the "you" built into the verb's own form, and a musnad, the standing itself. Yet a listener hearing only these two words remains genuinely waiting for what would follow.`,
        verses: [
          {
            type: 'example',
            arabic: 'إِنْ قُمْتَ',
            transliteration: 'in qumta',
            english: 'If you stood...',
            source: 'A jumlah that is not yet mufeedah (a conditional clause alone)',
          },
        ],
      },
      {
        heading: 'What actually makes a jumlah into al-jumlah al-mufeedah',
        body: `Al-jumlah al-mufeedah, the sentence this entire course studies as its basic working unit, is specifically a jumlah that also satisfies ifadah, already covered directly in this course's first unit as one of kalam's own three conditions: it leaves the listener with a complete, self-sufficient sense, requiring nothing further.`,
        verses: [
          {
            type: 'example',
            arabic: 'قَامَ زَيْدٌ',
            transliteration: 'qāma Zaydun',
            english: 'Zayd stood.',
            source: 'A jumlah mufeedah: complete on its own',
          },
        ],
      },
      {
        heading: 'Why this course treats jumlah mufeedah as effectively equivalent to kalam',
        body: `In ordinary practice, once a jumlah satisfies ifadah, it satisfies every condition kalam itself requires, murakkab and bil-wad' having already been met simply by forming a genuine Arabic jumlah at all. This is why al-jumlah al-mufeedah functions, for the entire remainder of this course, as the actual basic unit under study: this course's next topic turns directly to the specific parts every such sentence is actually built from.`,
      },
    ],
  },

  'jumlah-2': {
    id: 'jumlah-2',
    unit: 'unit-2',
    title: "Ajzaa'u l-Jumlah: The Parts of a Sentence",
    summary: 'What every complete Arabic sentence is actually built from.',
    content: [
      {
        heading: 'Two roles present in every single jumlah',
        body: `Already introduced directly in this unit's first topic, al-musnad and al-musnad ilayh are the two roles present in absolutely every jumlah, regardless of its specific type. Al-musnad ilayh is the element something is predicated of, the party the sentence is fundamentally about. Al-musnad is the element predicated, what is actually being said about that party.`,
      },
      {
        heading: 'The same two roles, dressed differently depending on sentence type',
        body: `These two roles do not appear under identical names in every sentence. In a nominal sentence, examined directly in this unit's third topic, they appear as al-mubtada and al-khabar, given full, dedicated treatment across this course's third unit. In a verbal sentence, examined directly in this unit's fourth topic, they appear instead as al-fi'l and al-fa'il, given full treatment across this course's fourth unit.`,
      },
      {
        heading: 'Why understanding this shared underlying structure matters',
        body: `Recognizing musnad and musnad ilayh as the single underlying structure beneath both sentence types prevents a common confusion: a learner who has only memorized "mubtada and khabar" and separately "fi'l and fa'il," without understanding that these are the same fundamental relationship expressed two different ways, is left with two disconnected rule sets rather than one coherent grammar built on a single, unifying idea.`,
      },
      {
        heading: 'A worked example showing both roles at once',
        body: `In زَيْدٌ قَائِمٌ (Zaydun qā\u2019imun), Zayd is standing, زَيْدٌ (Zaydun) functions as al-musnad ilayh, the party the sentence is about, while قَائِمٌ (qā\u2019imun) functions as al-musnad, what is actually said about him.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ قَائِمٌ',
            transliteration: 'Zaydun qā\u2019imun',
            english: 'Zayd is standing.',
            source: 'Musnad ilayh (Zaydun) + musnad (qā\u2019imun)',
          },
        ],
      },
      {
        heading: 'Setting up this unit\u2019s remaining topics directly',
        body: `Every Arabic sentence this course examines from this point forward will, at its foundation, still be built from exactly these same two roles, however their specific names and specific rules change depending on whether that sentence begins with an ism or a fi'l, the exact distinction this unit's next two topics examine in turn.`,
      },
    ],
  },

  'jumlah-3': {
    id: 'jumlah-3',
    unit: 'unit-2',
    title: 'Al-Jumlah al-Ismiyyah: The Nominal Sentence',
    summary: 'The sentence type beginning with a noun.',
    content: [
      {
        heading: 'Defined by what it begins with',
        body: `Al-jumlah al-ismiyyah, the nominal sentence, is defined specifically by its own first word: any jumlah mufeedah beginning with an ism is classified as ismiyyah, regardless of whether a fi'l might also appear somewhere later within that same sentence.`,
      },
      {
        heading: 'Its two core parts, named for this specific sentence type',
        body: `In this specific sentence type, the musnad ilayh and musnad already introduced directly in this unit's second topic take the names al-mubtada, the subject, and al-khabar, the predicate, examined in full across this course's entire third unit.`,
      },
      {
        heading: 'A first, simple example',
        body: `مُحَمَّدٌ مُجْتَهِدٌ (Muhammadun mujtahidun), Muhammad is diligent, begins with the ism مُحَمَّدٌ, immediately confirming this as a jumlah ismiyyah, with مُحَمَّدٌ serving as al-mubtada and مُجْتَهِدٌ serving as al-khabar.`,
        verses: [
          {
            type: 'example',
            arabic: 'مُحَمَّدٌ مُجْتَهِدٌ',
            transliteration: 'Muhammadun mujtahidun',
            english: 'Muhammad is diligent.',
            source: 'Jumlah ismiyyah: mubtada (Muhammadun) + khabar (mujtahidun)',
          },
        ],
      },
      {
        heading: 'A slightly less obvious example, worth noticing directly',
        body: `الطَّالِبُ يَكْتُبُ (at-tālibu yaktubu), the student is writing, still qualifies as a jumlah ismiyyah, since it begins with the ism الطَّالِبُ, even though a fi'l, يَكْتُبُ, appears immediately afterward. The first word alone determines this sentence's classification, not whether a verb happens to appear anywhere within it.`,
        verses: [
          {
            type: 'example',
            arabic: 'الطَّالِبُ يَكْتُبُ',
            transliteration: 'at-tālibu yaktubu',
            english: 'The student is writing.',
            source: 'Still jumlah ismiyyah, despite the verb appearing second',
          },
        ],
      },
      {
        heading: 'Setting up a direct comparison',
        body: `This unit's next topic turns to al-jumlah al-fi'liyyah, the verbal sentence, defined by the exact same logic applied to the opposite starting word, before this unit's closing topic draws the two definitions directly together into one practical, reliable test.`,
      },
    ],
  },

  'jumlah-4': {
    id: 'jumlah-4',
    unit: 'unit-2',
    title: 'Al-Jumlah al-Fi\u2019liyyah: The Verbal Sentence',
    summary: 'The sentence type beginning with a verb.',
    content: [
      {
        heading: 'The mirror image of this unit\u2019s previous topic',
        body: `Al-jumlah al-fi'liyyah, the verbal sentence, is defined by the exact same logic already applied directly in this unit's third topic, simply reversed: any jumlah mufeedah beginning with a fi'l is classified as fi'liyyah, regardless of whether an ism also appears somewhere within it.`,
      },
      {
        heading: 'Its two core parts, named for this specific sentence type',
        body: `In this sentence type, the same musnad and musnad ilayh introduced directly in this unit's second topic instead take the names al-fi'l, the verb itself, and al-fa'il, the doer of the verb's action, examined in full detail across this course's fourth unit.`,
      },
      {
        heading: 'A first, simple example',
        body: `كَتَبَ الطَّالِبُ (kataba t-tālibu), the student wrote, begins with the fi'l كَتَبَ, immediately confirming this as a jumlah fi'liyyah, with كَتَبَ serving as al-fi'l and الطَّالِبُ serving as al-fa'il.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَتَبَ الطَّالِبُ',
            transliteration: 'kataba t-tālibu',
            english: 'The student wrote.',
            source: "Jumlah fi'liyyah: fi'l (kataba) + fa'il (at-tālibu)",
          },
        ],
      },
      {
        heading: 'Word order Arabic and English treat very differently',
        body: `This example is worth pausing on directly: كَتَبَ الطَّالِبُ places the verb before its own subject, an order that reads awkwardly if translated word for word into English, wrote the student, yet is the entirely standard, expected order for a jumlah fi'liyyah in Arabic. Recognizing this pattern as normal, rather than as some kind of inversion needing correction, is essential for reading real Arabic sentences comfortably.`,
      },
      {
        heading: 'Two definitions now sitting side by side',
        body: `This unit has now defined both sentence types entirely by their own first word: ismiyyah when that first word is an ism, fi'liyyah when it is a fi'l. This unit's closing topic turns directly to applying this exact distinction quickly and reliably, including a small number of cases genuinely worth double-checking.`,
      },
    ],
  },

  'jumlah-5': {
    id: 'jumlah-5',
    unit: 'unit-2',
    title: 'Distinguishing Between the Two Sentence Types',
    summary: 'How to quickly tell which of the two sentence types you are reading.',
    content: [
      {
        heading: 'One single, reliable test',
        body: `Given everything already established across this unit's previous four topics, identifying a sentence's type reduces to one direct question: what is the very first word? If it is an ism, confirmed using the four signs already covered in this course's first unit, the sentence is ismiyyah. If it is a fi'l, confirmed using the signs also already covered in that same unit, the sentence is fi'liyyah.`,
      },
      {
        heading: 'Why this test matters beyond mere classification',
        body: `This is not simply a labeling exercise. Correctly identifying which sentence type is actually present determines which entire set of rules applies next: mubtada and khabar, examined across this course's third unit, for a jumlah ismiyyah, or fi'l and fa'il, examined across this course's fourth unit, for a jumlah fi'liyyah. Misidentifying the sentence type at this first step leads directly to misapplying every rule that follows it.`,
      },
      {
        heading: 'A case genuinely worth double-checking',
        body: `Occasionally, a sentence's true first word is not immediately the first word visible on the page, since a harf such as وَ (wa, and) or فَ (fa, so/then) may precede it without itself counting for this specific test. In وَقَامَ زَيْدٌ (wa qāma Zaydun), and Zayd stood, the actual first word for classification purposes is قَامَ, a fi'l, making this a jumlah fi'liyyah despite وَ technically appearing before it.`,
        verses: [
          {
            type: 'example',
            arabic: 'وَقَامَ زَيْدٌ',
            transliteration: 'wa qāma Zaydun',
            english: 'And Zayd stood.',
            source: "Still jumlah fi'liyyah: the harf wa is set aside for this test",
          },
        ],
      },
      {
        heading: 'A quick contrastive pair worth holding in mind together',
        body: `Comparing زَيْدٌ قَامَ (Zaydun qāma), Zayd, he stood, against قَامَ زَيْدٌ (qāma Zaydun), Zayd stood, illustrates this entire test cleanly: identical words, different first word, different sentence type, and, as this course's third and fourth units will each show in their own right, genuinely different grammatical treatment applied to the exact same underlying event.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ قَامَ',
            transliteration: 'Zaydun qāma',
            english: 'Zayd, he stood.',
            source: 'Jumlah ismiyyah: begins with the ism Zaydun',
          },
          {
            type: 'example',
            arabic: 'قَامَ زَيْدٌ',
            transliteration: 'qāma Zaydun',
            english: 'Zayd stood.',
            source: "Jumlah fi'liyyah: begins with the fi'l qāma",
          },
        ],
      },
      {
        heading: 'Closing this unit and opening a full unit on each sentence type',
        body: `This unit has now defined al-jumlah al-mufeedah precisely, distinguished it from the broader term jumlah, established the shared musnad and musnad ilayh structure beneath every sentence, and given a reliable, practical test for identifying which of the two sentence types is actually present. This course's third unit turns directly to the nominal sentence's own two parts in full depth, al-mubtada and al-khabar, before this course's fourth unit does the same for the verbal sentence's al-fi'l and al-fa'il.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 3 - AL-MUBTADA WAL-KHABAR (full content, expanded)
  //
  // The rule requiring mubtada to be definite (with its well-known
  // exceptions), and the non-human plural / feminine singular khabar
  // agreement rule, checked against standard Nahw references before
  // writing. Example sentences constructed and checked directly
  // against standard Nahw references.
  // -----------------------------------------------------------
  'mubtada-1': {
    id: 'mubtada-1',
    unit: 'unit-3',
    title: 'Al-Mubtada: Defining the Subject',
    summary: 'The noun a nominal sentence actually begins with.',
    content: [
      {
        heading: 'A precise definition, building directly on this course\u2019s second unit',
        body: `Al-mubtada (المُبْتَدَأ) is the ism standing at the beginning of a jumlah ismiyyah, already defined directly in this course's second unit, carrying marfu' case, the specific i'rab this course's fifth unit examines in full. In the language already introduced in that same second unit, al-mubtada is the musnad ilayh of a nominal sentence, the party the sentence is fundamentally about.`,
      },
      {
        heading: 'A genuinely important rule: al-mubtada is normally definite',
        body: `Classical Nahw states this condition directly: الابتداء بالنكرة لا يجوز إلا بمسوغ, beginning a sentence with an indefinite noun is not permitted except with a specific justifying factor. زَيْدٌ قَائِمٌ (Zaydun qā\u2019imun), Zayd is standing, works cleanly because زَيْدٌ is definite, a specific, known person. A bare indefinite opening such as رَجُلٌ قَائِمٌ (rajulun qā\u2019imun), a man is standing, sounds genuinely incomplete in Arabic on its own, since an unspecified "a man" leaves the listener without the definite subject a sentence normally requires.`,
      },
      {
        heading: 'Two common, well recognized exceptions',
        body: `Grammarians recognize several specific situations where an indefinite mubtada is genuinely acceptable, since the indefiniteness itself no longer prevents useful meaning. When the sentence is preceded by negation or a question, هَلْ رَجُلٌ فِي البَيْتِ (hal rajulun fi l-bayti), is there a man in the house?, the indefinite رَجُلٌ works cleanly. When the indefinite noun is itself further described, رَجُلٌ كَرِيمٌ عِنْدَنَا (rajulun karīmun \u2018indanā), a generous man is with us, the added description كَرِيمٌ supplies enough specific information for the sentence to genuinely satisfy ifadah, already covered directly in this course's second unit.`,
      },
      {
        heading: 'Why this rule matters practically, not just theoretically',
        body: `A learner unaware of this rule might read an indefinite noun opening a sentence and simply assume it functions as mubtada regardless, missing that Arabic itself treats this construction as marked and specifically conditioned. Recognizing when an indefinite opening is genuinely justified, rather than treating every sentence-initial noun identically, is part of reading Arabic with real precision rather than surface-level pattern matching.`,
      },
      {
        heading: 'Setting up this unit\u2019s remaining topics',
        body: `Having established what al-mubtada actually is and the specific condition normally governing it, this unit's next topic turns directly to al-khabar, the second half of every jumlah ismiyyah, the part that actually completes the meaning al-mubtada begins.`,
      },
    ],
  },

  'mubtada-2': {
    id: 'mubtada-2',
    unit: 'unit-3',
    title: 'Al-Khabar: Defining the Predicate',
    summary: 'What completes the meaning the mubtada begins.',
    content: [
      {
        heading: 'The element that actually completes the sentence',
        body: `Al-khabar (الخَبَر) is the part of a jumlah ismiyyah that provides the actual information the sentence exists to convey, completing the meaning al-mubtada, already covered directly in this unit's previous topic, only begins. In the terms already introduced in this course's second unit, al-khabar is the musnad, what is actually said about the party al-mubtada identifies.`,
      },
      {
        heading: 'Marfu\u2019 by default, with a genuinely important exception noted honestly',
        body: `Under ordinary circumstances, al-khabar carries marfu' case exactly as al-mubtada itself does. This default changes specifically once kaana or one of her sisters, examined fully across this course's tenth unit, or inna or one of her sisters, examined fully across this course's eleventh unit, enters the sentence, at which point al-khabar's own case, and sometimes its very name, changes accordingly. This unit's own treatment assumes neither of these has entered the sentence yet.`,
      },
      {
        heading: 'A worked example, continuing directly from this unit\u2019s previous topic',
        body: `In زَيْدٌ قَائِمٌ (Zaydun qā\u2019imun), Zayd is standing, already introduced directly in this unit's previous topic, قَائِمٌ serves as al-khabar, carrying marfu' case and providing the actual information the sentence conveys: that Zayd, already identified by al-mubtada, is standing.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ قَائِمٌ',
            transliteration: 'Zaydun qā\u2019imun',
            english: 'Zayd is standing.',
            source: 'Mubtada (Zaydun) + khabar (qā\u2019imun)',
          },
        ],
      },
      {
        heading: 'A second example, showing khabar carrying genuinely new information',
        body: `مُحَمَّدٌ فِي المَسْجِدِ (Muhammadun fi l-masjidi), Muhammad is in the mosque, similarly places al-mubtada, مُحَمَّدٌ, already a known, definite party, alongside al-khabar, فِي المَسْجِدِ, which supplies genuinely new information about that same party's specific location.`,
        verses: [
          {
            type: 'example',
            arabic: 'مُحَمَّدٌ فِي المَسْجِدِ',
            transliteration: 'Muhammadun fi l-masjidi',
            english: 'Muhammad is in the mosque.',
            source: 'Mubtada (Muhammadun) + khabar (fi l-masjidi)',
          },
        ],
      },
      {
        heading: 'A khabar that is not always a single word',
        body: `This second example is worth pausing on directly: unlike قَائِمٌ in this unit's first example, فِي المَسْجِدِ is not a single word at all, but a preposition together with its own noun. This unit's next topic turns directly to this exact point, the several genuinely different forms al-khabar can actually take.`,
      },
    ],
  },

  'mubtada-3': {
    id: 'mubtada-3',
    unit: 'unit-3',
    title: 'Types of Khabar: Mufrad, Jumlah, and Shibh Jumlah',
    summary: 'The three different forms a khabar can actually take.',
    content: [
      {
        heading: 'Khabar mufrad: a single word, not necessarily a singular one',
        body: `Al-khabar al-mufrad describes a khabar consisting of a single word rather than an entire sentence or phrase, exactly like قَائِمٌ in زَيْدٌ قَائِمٌ, already covered directly in this unit's second topic. A genuinely important terminological note is worth stating directly here: mufrad in this specific context means "a single word," not "grammatically singular in number." A khabar mufrad can itself be dual or plural, الطَّالِبَانِ مُجْتَهِدَانِ (at-tālibāni mujtahidāni), the two students are diligent, still counts as khabar mufrad despite مُجْتَهِدَانِ being dual, since it remains one single word rather than an entire sentence or phrase.`,
      },
      {
        heading: 'Khabar jumlah: an entire sentence functioning as the predicate',
        body: `Al-khabar al-jumlah describes a khabar that is itself an entire jumlah, either ismiyyah or fi'liyyah, already distinguished directly in this course's second unit. زَيْدٌ أَبُوهُ كَرِيمٌ (Zaydun abūhu karīmun), Zayd, his father is generous, contains an entire jumlah ismiyyah, أَبُوهُ كَرِيمٌ, functioning as khabar for the outer mubtada زَيْدٌ.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ أَبُوهُ كَرِيمٌ',
            transliteration: 'Zaydun abūhu karīmun',
            english: "Zayd, his father is generous.",
            source: 'Khabar jumlah (ismiyyah): abūhu karīmun functions as khabar for Zaydun',
          },
        ],
      },
      {
        heading: 'A verbal sentence functioning the same way',
        body: `زَيْدٌ يَكْتُبُ (Zaydun yaktubu), Zayd is writing, similarly contains an entire jumlah fi'liyyah, يَكْتُبُ, itself already a complete sentence by the standards of this course's second unit, functioning here as khabar for the mubtada زَيْدٌ. This connects directly forward to this course's fourteenth unit, which examines sentences occupying a grammatical position, mahalla l-i'rab, exactly this kind of situation.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ يَكْتُبُ',
            transliteration: 'Zaydun yaktubu',
            english: 'Zayd is writing.',
            source: "Khabar jumlah (fi'liyyah): yaktubu functions as khabar for Zaydun",
          },
        ],
      },
      {
        heading: 'Khabar shibh jumlah: a quasi-sentence',
        body: `Al-khabar shibh al-jumlah describes a khabar taking the form of either a preposition with its noun, already seen directly in this unit's second topic through فِي المَسْجِدِ, or a zarf, an adverb of place or time, examined further in this course's twelfth unit. الكِتَابُ عَلَى الطَّاوِلَةِ (al-kitābu \u2018ala t-tāwilati), the book is on the table, illustrates the preposition type directly, while الكِتَابُ عِنْدَ زَيْدٍ (al-kitābu \u2018inda Zaydin), the book is with Zayd, illustrates the zarf type.`,
        verses: [
          {
            type: 'example',
            arabic: 'الكِتَابُ عَلَى الطَّاوِلَةِ',
            transliteration: 'al-kitābu \u2018ala t-tāwilati',
            english: 'The book is on the table.',
            source: 'Khabar shibh jumlah: preposition (\u2018ala) + noun (at-tāwilati)',
          },
        ],
      },
      {
        heading: 'Three genuinely different shapes, one shared function',
        body: `Despite these real structural differences, mufrad, jumlah, and shibh jumlah all serve the exact same underlying function already established across this unit's first two topics: completing the meaning al-mubtada begins. This unit's closing topic turns to a rule applying specifically to the first of these three types, khabar mufrad, governing how it must agree with its own mubtada.`,
      },
    ],
  },

  'mubtada-4': {
    id: 'mubtada-4',
    unit: 'unit-3',
    title: 'Agreement Between Mubtada and Khabar',
    summary: 'How the two must match in gender and number.',
    content: [
      {
        heading: 'The basic agreement rule for khabar mufrad',
        body: `When al-khabar takes the mufrad form already covered directly in this unit's third topic, it must agree with its own al-mubtada in both gender and number. الطَّالِبُ مُجْتَهِدٌ (at-tālibu mujtahidun), the male student is diligent, pairs a masculine singular mubtada with a masculine singular khabar, while الطَّالِبَةُ مُجْتَهِدَةٌ (at-tālibatu mujtahidatun), the female student is diligent, pairs a feminine singular mubtada with a feminine singular khabar.`,
        verses: [
          {
            type: 'example',
            arabic: 'الطَّالِبُ مُجْتَهِدٌ',
            transliteration: 'at-tālibu mujtahidun',
            english: 'The (male) student is diligent.',
            source: 'Masculine singular mubtada + masculine singular khabar',
          },
          {
            type: 'example',
            arabic: 'الطَّالِبَةُ مُجْتَهِدَةٌ',
            transliteration: 'at-tālibatu mujtahidatun',
            english: 'The (female) student is diligent.',
            source: 'Feminine singular mubtada + feminine singular khabar',
          },
        ],
      },
      {
        heading: 'Extending this same agreement into the plural',
        body: `الطُّلَّابُ مُجْتَهِدُونَ (at-tullābu mujtahidūna), the students are diligent, applies this exact same principle to a masculine plural mubtada referring to people, matched by a masculine plural khabar.`,
        verses: [
          {
            type: 'example',
            arabic: 'الطُّلَّابُ مُجْتَهِدُونَ',
            transliteration: 'at-tullābu mujtahidūna',
            english: 'The (male) students are diligent.',
            source: 'Masculine plural mubtada (human) + masculine plural khabar',
          },
        ],
      },
      {
        heading: 'A genuinely important exception: non-human plurals',
        body: `A specific, commonly surprising exception applies when al-mubtada is a plural noun referring to something non-human. الكُتُبُ مُفِيدَةٌ (al-kutubu mufīdatun), the books are useful, pairs a plural mubtada, كُتُبٌ, with a khabar that is feminine singular, مُفِيدَةٌ, not plural, despite كُتُبٌ itself being a masculine-derived plural noun. Arabic treats non-human plurals grammatically as though they formed a single, unified group, and the khabar agrees with that group as a feminine singular unit rather than with the individual items composing it.`,
        verses: [
          {
            type: 'example',
            arabic: 'الكُتُبُ مُفِيدَةٌ',
            transliteration: 'al-kutubu mufīdatun',
            english: 'The books are useful.',
            source: 'Non-human plural mubtada + feminine singular khabar (not plural)',
          },
        ],
      },
      {
        heading: 'How this same requirement changes for jumlah and shibh jumlah khabar',
        body: `This direct agreement requirement applies specifically to khabar mufrad. When al-khabar instead takes the jumlah or shibh jumlah form, already covered directly in this unit's third topic, it does not inflect for gender or number the way a single word does. It must instead contain a raabit, a connecting link, ordinarily a pronoun, referring back to al-mubtada. In زَيْدٌ أَبُوهُ كَرِيمٌ, already introduced in this unit's third topic, the pronoun هُ attached to أَبُوهُ serves as exactly this connecting link back to زَيْدٌ.`,
      },
      {
        heading: 'Closing this unit and turning to the verbal sentence in full',
        body: `This unit has now covered al-mubtada's own definition and its usual requirement of definiteness, al-khabar's role in completing the sentence's meaning, the three distinct forms al-khabar can actually take, and the specific agreement rules, including the genuinely important non-human plural exception, governing khabar mufrad. This course's fourth unit turns directly to the verbal sentence's own two core parts in the same depth, al-fi'l and al-fa'il, the exact counterparts to mubtada and khabar within a jumlah fi'liyyah.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 4 - AL-FI'L, AL-FA'IL, AND AL-MAF'UL BIHI (full content,
  // expanded)
  //
  // The verb-agreement rule (a verb stays singular, agreeing only in
  // gender, when its fa'il is an explicit noun following it) checked
  // against multiple current Nahw references before writing. Every
  // formally stated rule in this unit is given its own highlighted
  // qaidah box (Arabic + English together), distinct from the
  // parsed-sentence example boxes, per this course's own visual
  // convention for rules a learner needs to find again quickly.
  // -----------------------------------------------------------
  'fill-1': {
    id: 'fill-1',
    unit: 'unit-4',
    title: "Al-Fi'l: The Three Tenses (Madi, Mudari', Amr)",
    summary: 'The three forms every Arabic verb takes.',
    content: [
      {
        heading: "A single root, three distinct forms",
        body: `This course's first unit already established that al-fi'l is distinguished from al-ism specifically by its built-in reference to time. Every Arabic verb takes exactly one of three forms, each carrying its own specific time reference and its own specific i'rab behavior, examined fully in this course's thirteenth unit.`,
      },
      {
        heading: "Al-madi: the past tense",
        body: `Al-fi'l al-madi describes a completed action, and is mabni, structurally fixed rather than taking i'rab, already flagged briefly in this course's first unit through its acceptance of the feminine taa marker. كَتَبَ (kataba), he wrote, illustrates this form directly.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَتَبَ',
            transliteration: 'kataba',
            english: 'He wrote.',
            source: "Fi'l madi: a completed, past action",
          },
        ],
      },
      {
        heading: "Al-mudari': the present tense, and the only verb form that takes i'rab",
        body: `Al-fi'l al-mudari' describes an ongoing or future action, and is the only one of the three verb forms that actually takes i'rab, a genuinely important distinction this course's thirteenth unit examines in full. يَكْتُبُ (yaktubu), he writes or he is writing, illustrates this form.`,
        verses: [
          {
            type: 'example',
            arabic: 'يَكْتُبُ',
            transliteration: 'yaktubu',
            english: 'He writes / he is writing.',
            source: "Fi'l mudari': present or ongoing action",
          },
        ],
      },
      {
        heading: "Al-amr: the command form",
        body: `Al-fi'l al-amr issues a direct command, is also mabni, and exists only in the second person, since a command can only be given directly to whoever is being addressed. اُكْتُبْ (uktub), write!, illustrates this form.`,
        verses: [
          {
            type: 'example',
            arabic: 'اُكْتُبْ',
            transliteration: 'uktub',
            english: 'Write!',
            source: "Fi'l amr: a direct command, second person only",
          },
        ],
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Regardless of which of these three forms a specific fi'l takes, it requires a fa'il, the doer of its action, to form a complete jumlah fi'liyyah. This unit's next topic turns directly to al-fa'il itself.`,
      },
    ],
  },

  'fill-2': {
    id: 'fill-2',
    unit: 'unit-4',
    title: "Al-Fa'il: The Doer of the Action",
    summary: "Identifying who or what performs the verb's action.",
    content: [
      {
        heading: "A definition building directly on this course's second unit",
        body: `Al-fa'il (الفَاعِل) is the ism performing a fi'l's action, carrying marfu' case, exactly as al-mubtada does. In the terms already introduced in this course's second unit, al-fa'il is the musnad ilayh of a verbal sentence, the direct counterpart to al-mubtada within a jumlah ismiyyah.`,
      },
      {
        heading: "Standard word order: the fi'l comes first",
        body: `Already noted directly in this course's second unit, standard Arabic word order places al-fi'l before al-fa'il, an order that reads awkwardly translated word for word into English but is entirely ordinary in Arabic. كَتَبَ الطَّالِبُ (kataba t-tālibu), the student wrote, places كَتَبَ first and الطَّالِبُ, the fa'il, second.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَتَبَ الطَّالِبُ',
            transliteration: 'kataba t-tālibu',
            english: 'The student wrote.',
            source: "Fi'l (kataba) + fa'il (at-tālibu)",
          },
        ],
      },
      {
        heading: 'A genuinely important, distinctive agreement rule',
        body: `A rule surprising to many learners coming from English governs exactly how the fi'l agrees with an explicit fa'il following it.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'إِذَا تَأَخَّرَ الفَاعِلُ الظَّاهِرُ عَنِ الفِعْلِ، بَقِيَ الفِعْلُ مُفْرَدًا وَطَابَقَهُ فِي النَّوْعِ فَقَطْ',
            transliteration: "idhā ta\u2019akhkhara l-fā\u2019ilu z-zāhiru \u2019ani l-fi\u2019l, baqiya l-fi\u2019lu mufradan wa tābaqahu fi n-naw\u2019i faqat",
            english: 'When an explicit fa\u2019il follows the fi\u2019l, the fi\u2019l remains singular, agreeing with it only in gender, regardless of the fa\u2019il\u2019s own actual number.',
            source: 'Core rule of fi\u2019l/fa\u2019il agreement in standard word order',
          },
        ],
      },
      {
        heading: 'What this rule looks like in practice',
        body: `كَتَبَ الأَوْلَادُ (kataba l-awlādu), the boys wrote, keeps كَتَبَ in its singular form despite الأَوْلَادُ being plural, precisely because the explicit fa'il follows the verb. Had the same plural fa'il instead preceded the verb, the verb would take full plural agreement instead, a specific case examined directly in this unit's next topic through the same underlying principle.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَتَبَ الأَوْلَادُ',
            transliteration: 'kataba l-awlādu',
            english: 'The boys wrote.',
            source: "The verb stays singular despite the plural fa'il following it",
          },
        ],
      },
      {
        heading: 'Why this rule matters for reading real Arabic accurately',
        body: `A learner unaware of this rule might see a singular verb and wrongly assume its fa'il must also be singular, or might expect a plural verb once they notice a plural noun nearby. Recognizing that word order itself, not merely the fa'il's own number, governs the verb's own form is essential for parsing real sentences correctly rather than guessing from surface appearance alone.`,
      },
    ],
  },

  'fill-3': {
    id: 'fill-3',
    unit: 'unit-4',
    title: "Al-Maf'ul Bihi: The Direct Object",
    summary: "Identifying what receives the verb's action.",
    content: [
      {
        heading: 'A third, genuinely optional element',
        body: `Al-maf'ul bihi (المَفْعُول بِهِ) is the ism receiving a fi'l's action, present specifically when that fi'l is a transitive verb, one whose action passes on to something beyond the doer itself. Unlike al-fa'il, already covered directly in this unit's previous topic as a required element wherever a fi'l appears, al-maf'ul bihi appears only when the specific verb in question actually requires an object.`,
      },
      {
        heading: 'A defining case marking: nasb',
        body: `Al-maf'ul bihi carries nasb case, examined in full detail across this course's fifth unit, the specific case distinguishing it directly from both al-fa'il and al-mubtada, which each carry raf'.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'المَفْعُولُ بِهِ اسْمٌ مَنْصُوبٌ وَقَعَ عَلَيْهِ فِعْلُ الفَاعِلِ',
            transliteration: "al-maf\u2019ūlu bihi ismun mansūbun waqa\u2019a \u2019alayhi fi\u2019lu l-fā\u2019il",
            english: 'The direct object is a noun in the accusative case that the doer\u2019s action falls upon.',
            source: "Core definition of al-maf'ul bihi",
          },
        ],
      },
      {
        heading: 'A complete example, showing all three elements together',
        body: `كَتَبَ الطَّالِبُ الدَّرْسَ (kataba t-tālibu d-darsa), the student wrote the lesson, adds الدَّرْسَ, carrying nasb case, to the fi'l and fa'il already covered directly in this unit's previous two topics.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَتَبَ الطَّالِبُ الدَّرْسَ',
            transliteration: 'kataba t-tālibu d-darsa',
            english: 'The student wrote the lesson.',
            source: "Fi'l (kataba) + fa'il (at-tālibu) + maf'ul bihi (ad-darsa)",
          },
        ],
      },
      {
        heading: 'Why order matters less here than gender agreement did for fa\u2019il',
        body: `Unlike al-fa'il, whose position relative to the fi'l genuinely changed the verb's own agreement, already covered directly in this unit's second topic, al-maf'ul bihi's specific position within the sentence, whether immediately after the fa'il or elsewhere, does not change its own case. What identifies it is its nasb marking and its own semantic role as the receiver of the action, not strictly its position.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `With al-fi'l, al-fa'il, and al-maf'ul bihi all now covered individually, this unit's closing topic turns to combining these three elements correctly, including what happens when a single verb takes more than one object at once.`,
      },
    ],
  },

  'fill-4': {
    id: 'fill-4',
    unit: 'unit-4',
    title: 'Building Complete Verbal Sentences',
    summary: "Putting fi'l, fa'il, and maf'ul bihi together correctly.",
    content: [
      {
        heading: 'The standard order, stated as a single rule',
        body: `Bringing together this unit's first three topics produces a single, reliable structural pattern for a complete jumlah fi'liyyah.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'التَّرْتِيبُ الأَصْلِيُّ لِلْجُمْلَةِ الفِعْلِيَّةِ: الفِعْلُ، ثُمَّ الفَاعِلُ، ثُمَّ المَفْعُولُ بِهِ (إِنْ وُجِدَ)',
            transliteration: "at-tartību l-asliyyu li l-jumlati l-fi\u2019liyyah: al-fi\u2019l, thumma l-fā\u2019il, thumma l-maf\u2019ūlu bihi (in wujida)",
            english: 'The original order of a verbal sentence: the verb, then the doer, then the direct object (if one is present).',
            source: 'The standard fi\u2019l-fa\u2019il-maf\u2019ul bihi structure',
          },
        ],
      },
      {
        heading: 'This same structure with an intransitive verb',
        body: `Not every fi'l requires a maf'ul bihi at all. قَامَ الرَّجُلُ (qāma r-rajulu), the man stood, is already a genuinely complete jumlah fi'liyyah with only fi'l and fa'il present, since قَامَ, to stand, does not act upon anything beyond its own doer.`,
        verses: [
          {
            type: 'example',
            arabic: 'قَامَ الرَّجُلُ',
            transliteration: 'qāma r-rajulu',
            english: 'The man stood.',
            source: "Complete jumlah fi'liyyah with no maf'ul bihi required",
          },
        ],
      },
      {
        heading: 'A verb genuinely requiring an object',
        body: `أَكَلَ الوَلَدُ التُّفَّاحَةَ (akala l-waladu t-tuffāhata), the boy ate the apple, by contrast, requires its object to convey complete meaning, illustrating the full three-part structure this unit has built across its four topics.`,
        verses: [
          {
            type: 'example',
            arabic: 'أَكَلَ الوَلَدُ التُّفَّاحَةَ',
            transliteration: 'akala l-waladu t-tuffāhata',
            english: 'The boy ate the apple.',
            source: "Fi'l + fa'il + maf'ul bihi, all three present",
          },
        ],
      },
      {
        heading: 'A brief, honest note on some verbs taking two objects',
        body: `A small number of Arabic verbs, generally those involving giving, considering, or transforming something, take two separate maf'ul bihi at once, both carrying nasb case. This falls outside this unit's own core scope, but is worth naming honestly here so a learner encountering such a sentence later recognizes it as a genuine, documented extension of this same fi'l-fa'il-maf'ul bihi structure rather than an exception defying it.`,
      },
      {
        heading: 'Closing this unit and turning to i\u2019rab itself',
        body: `This unit has now covered the verb's three tenses, the fa'il's own definition and its distinctive agreement behavior, the maf'ul bihi's role and its defining nasb case, and the standard order combining all three into a complete jumlah fi'liyyah. This course's fifth unit turns directly to i'rab itself in full depth, the case and mood system this unit has already relied on repeatedly, marfu' for mubtada, fa'il, and khabar, mansub for maf'ul bihi, examined now on its own terms.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 5 - AL-I'RAB: CASE AND MOOD (full content, expanded)
  //
  // The precise noun/verb state distribution (nouns: raf'/nasb/jarr;
  // verbs: raf'/nasb/jazm; jarr exclusive to nouns, jazm exclusive
  // to verbs) and mudari's default raf' state checked against
  // multiple current Nahw references before writing. Every formally
  // stated rule is given its own highlighted qaidah box, per this
  // course's established convention.
  // -----------------------------------------------------------
  'irab-1': {
    id: 'irab-1',
    unit: 'unit-5',
    title: "What Is I'rab and Why Arabic Uses It",
    summary: 'The system of word-ending changes that carries grammatical meaning.',
    content: [
      {
        heading: "Returning directly to this course's own opening story",
        body: `This course's first unit opened with a real, documented incident: a reciter's single mispronounced vowel at the end of رَسُول in Surah at-Tawbah 9:3, changing "and His Messenger" from a second subject alongside Allah into something wrongly attached to the disbelievers instead. That exact change, marfu' shifted to majrur through nothing more than a different final vowel, is precisely what this unit now examines directly and systematically: al-i'rab, the change occurring at a word's own ending according to its grammatical role.`,
      },
      {
        heading: 'A technical term worth naming directly',
        body: `Classical Nahw has a specific name for exactly the error this course's opening story described: lahn, an error in i'rab. Every unit this course has covered since, mubtada and khabar carrying raf', maf'ul bihi carrying nasb, has been building toward this exact system, now given its own full, direct treatment.`,
      },
      {
        heading: "Mu'rab and mabni: which words actually take i'rab",
        body: `Not every Arabic word changes its ending according to context. Al-mu'rab describes words whose ending does change this way, while al-mabni describes words structurally fixed regardless of their grammatical role, already flagged directly in this course's fourth unit through al-fi'l al-madi and al-fi'l al-amr, both mabni, contrasted with al-fi'l al-mudari', which is mu'rab.`,
      },
      {
        heading: "The complete map: four states, unevenly shared",
        body: `I'rab has exactly four possible states, but nouns and verbs do not share all four equally.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'لِلاسْمِ ثَلَاثَةُ أَحْوَالٍ: الرَّفْعُ وَالنَّصْبُ وَالجَرُّ، وَلِلْفِعْلِ المُضَارِعِ ثَلَاثَةُ أَحْوَالٍ: الرَّفْعُ وَالنَّصْبُ وَالجَزْمُ',
            transliteration: "li l-ismi thalāthatu ahwāl: ar-raf\u2019u wa n-nasbu wa l-jarr, wa li l-fi\u2019li l-mudāri\u2019i thalāthatu ahwāl: ar-raf\u2019u wa n-nasbu wa l-jazm",
            english: 'The noun has three possible states: raf\u2019, nasb, and jarr. The present-tense verb has three possible states: raf\u2019, nasb, and jazm.',
            source: 'The complete distribution of i\u2019rab across nouns and verbs',
          },
        ],
      },
      {
        heading: 'Why this specific division matters for reading Arabic accurately',
        body: `Raf' and nasb are genuinely shared between nouns and verbs, but jarr belongs exclusively to nouns, and jazm belongs exclusively to the present-tense verb, a point this unit's fourth and fifth topics each examine directly in turn. Recognizing this division means a reader encountering a word in jarr already knows it must be a noun, and a word in jazm already knows it must be a mudari' verb, before even considering the word's own meaning.`,
      },
    ],
  },

  'irab-2': {
    id: 'irab-2',
    unit: 'unit-5',
    title: "Ar-Raf': The Nominative Case",
    summary: "The case marking a word's role as subject.",
    content: [
      {
        heading: 'The shared starting point for both nouns and verbs',
        body: `Ar-raf' is one of the two states, alongside an-nasb, examined directly in this unit's next topic, that nouns and verbs genuinely share. Its standard sign is damma, already encountered repeatedly across this course's third and fourth units without yet being named as part of this larger, systematic framework.`,
      },
      {
        heading: "Raf' for nouns: mubtada, khabar, and fa'il",
        body: `Al-mubtada, al-khabar, and al-fa'il, already covered directly across this course's third and fourth units, all carry raf' case. زَيْدٌ قَائِمٌ places both مubtada and khabar in raf', while كَتَبَ الطَّالِبُ places the fa'il, الطَّالِبُ, in raf' as well.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَيْدٌ قَائِمٌ',
            transliteration: 'Zaydun qā\u2019imun',
            english: 'Zayd is standing.',
            source: 'Both mubtada and khabar in raf\u2019',
          },
        ],
      },
      {
        heading: "Raf' for verbs: the mudari's own default state",
        body: `Al-fi'l al-mudari', already introduced directly in this course's fourth unit, carries raf' by default, remaining in this state unless a specific particle forces it into nasb or jazm instead, examined directly across this course's thirteenth unit.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'الفِعْلُ المُضَارِعُ مَرْفُوعٌ دَائِمًا إِلَّا إِذَا دَخَلَ عَلَيْهِ نَاصِبٌ أَوْ جَازِمٌ',
            transliteration: "al-fi\u2019lu l-mudāri\u2019u marfū\u2019un dā\u2019iman illā idhā dakhala \u2019alayhi nāsibun aw jāzim",
            english: 'The present-tense verb is always in raf\u2019 unless a nasb-causing or jazm-causing particle enters upon it.',
            source: "The mudari's default state",
          },
        ],
      },
      {
        heading: 'A concrete example',
        body: `يَكْتُبُ الطَّالِبُ (yaktubu t-tālibu), the student writes, shows يَكْتُبُ carrying raf' precisely because no such particle is present to change this default state.`,
        verses: [
          {
            type: 'example',
            arabic: 'يَكْتُبُ الطَّالِبُ',
            transliteration: 'yaktubu t-tālibu',
            english: 'The student writes.',
            source: "Mudari' verb in its default raf' state",
          },
        ],
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Having established raf' as this shared, default state for both nouns and verbs, this unit's next topic turns to an-nasb, the second state genuinely shared between them, before this unit's closing two topics examine the two states belonging exclusively to one category or the other.`,
      },
    ],
  },

  'irab-3': {
    id: 'irab-3',
    unit: 'unit-5',
    title: "An-Nasb: The Accusative Case",
    summary: 'The case marking a role as object, among other uses.',
    content: [
      {
        heading: 'The second state genuinely shared between nouns and verbs',
        body: `An-nasb, already introduced directly in this course's fourth unit through al-maf'ul bihi, is the second of the two states nouns and verbs genuinely share. Its standard sign is fatha.`,
      },
      {
        heading: "Nasb for nouns: maf'ul bihi, and further categories to come",
        body: `Al-maf'ul bihi carries nasb, already established directly in this course's fourth unit. رَأَيْتُ زَيْدًا (ra\u2019aytu Zaydan), I saw Zayd, illustrates this directly. This course's twelfth unit examines several further categories of noun also carrying nasb, maf'ul mutlaq, haal, and tamyiz among them, all sharing this exact same case despite serving genuinely different grammatical functions.`,
        verses: [
          {
            type: 'example',
            arabic: 'رَأَيْتُ زَيْدًا',
            transliteration: 'ra\u2019aytu Zaydan',
            english: 'I saw Zayd.',
            source: "Maf'ul bihi in nasb",
          },
        ],
      },
      {
        heading: "Nasb for verbs: the mudari' pushed away from its default state",
        body: `Al-fi'l al-mudari' shifts from its default raf', already covered directly in this unit's previous topic, into nasb specifically when preceded by one of a defined set of particles called nawasib, examined fully in this course's thirteenth unit. لَنْ يَذْهَبَ (lan yadhhaba), he will never go, shows يَذْهَبَ carrying nasb, its final vowel changed from the raf' it would otherwise default to, specifically because of لَنْ preceding it.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَنْ يَذْهَبَ',
            transliteration: 'lan yadhhaba',
            english: 'He will never go.',
            source: "Mudari' verb pushed into nasb by the particle lan",
          },
        ],
      },
      {
        heading: 'One case, genuinely different functions across nouns and verbs',
        body: `Nasb applied to a noun and nasb applied to a verb serve entirely different grammatical purposes, marking an object in the first instance and marking a shift away from default present-tense meaning in the second, yet both instances share this exact same underlying case and its same fatha sign, reflecting i'rab's own consistent internal logic across otherwise different word categories.`,
      },
    ],
  },

  'irab-4': {
    id: 'irab-4',
    unit: 'unit-5',
    title: "Al-Jarr: The Genitive Case",
    summary: 'The case following prepositions and in idafah.',
    content: [
      {
        heading: 'The state belonging exclusively to nouns',
        body: `Al-jarr is the first of the two states already flagged directly in this unit's first topic as belonging exclusively to one word category. A verb can never, under any circumstance, carry jarr.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'الجَرُّ يَخْتَصُّ بِالِاسْمِ، فَلَا يَدْخُلُ عَلَى الفِعْلِ أَبَدًا',
            transliteration: "al-jarru yakhtassu bi l-ism, falā yadkhulu \u2019ala l-fi\u2019li abadan",
            english: 'Jarr belongs exclusively to the noun; it never enters upon the verb at all.',
            source: 'The exclusivity of jarr to nouns',
          },
        ],
      },
      {
        heading: 'Two specific triggers, both already introduced in earlier units',
        body: `A noun enters jarr in exactly two situations: immediately following a harf jarr, already introduced directly in this course's first unit and examined fully in this course's eighth unit, or serving as al-mudaf ilayh, the second part of an idafah construct, also examined fully in that same eighth unit. Its standard sign is kasra.`,
      },
      {
        heading: 'A concrete example of each trigger',
        body: `فِي البَيْتِ (fi l-bayti), in the house, illustrates jarr following a harf jarr directly, while كِتَابُ الطَّالِبِ (kitābu t-tālibi), the student's book, illustrates jarr through idafah, with الطَّالِبِ serving as mudaf ilayh.`,
        verses: [
          {
            type: 'example',
            arabic: 'فِي البَيْتِ',
            transliteration: 'fi l-bayti',
            english: 'In the house.',
            source: 'Jarr following a harf jarr',
          },
          {
            type: 'example',
            arabic: 'كِتَابُ الطَّالِبِ',
            transliteration: 'kitābu t-tālibi',
            english: "The student's book.",
            source: 'Jarr through idafah (mudaf ilayh)',
          },
        ],
      },
      {
        heading: "Why jarr's exclusivity itself carries real diagnostic value",
        body: `Precisely because jarr never applies to verbs, encountering a word carrying kasra as its i'rab immediately confirms that word as a noun, without needing any further information about its specific meaning. This unit's closing topic turns to the exact mirror image of this same principle, applied to verbs instead.`,
      },
    ],
  },

  'irab-5': {
    id: 'irab-5',
    unit: 'unit-5',
    title: "Al-Jazm: The Jussive Mood",
    summary: 'The mood applying specifically to certain present-tense verbs.',
    content: [
      {
        heading: 'The mirror image of this unit\u2019s previous topic',
        body: `Al-jazm is the second of the two states belonging exclusively to one word category, this time verbs specifically, and more precisely, al-fi'l al-mudari' alone, since al-madi and al-amr, already established as mabni in this course's fourth unit, do not take i'rab of any kind in the first place.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'الجَزْمُ يَخْتَصُّ بِالفِعْلِ المُضَارِعِ، فَلَا يَدْخُلُ عَلَى الِاسْمِ أَبَدًا',
            transliteration: "al-jazmu yakhtassu bi l-fi\u2019li l-mudāri\u2019, falā yadkhulu \u2019ala l-ismi abadan",
            english: 'Jazm belongs exclusively to the present-tense verb; it never enters upon the noun at all.',
            source: 'The exclusivity of jazm to the mudari\u2019 verb',
          },
        ],
      },
      {
        heading: 'A defined set of triggering particles',
        body: `A mudari' verb shifts from its default raf', already covered directly in this unit's second topic, into jazm specifically when preceded by one of a defined set of particles called jawazim, examined fully in this course's thirteenth unit. Its standard sign is sukoon, the complete absence of a final vowel.`,
      },
      {
        heading: 'Two common contexts where jazm actually appears',
        body: `Jazm appears most commonly in two settings: negating a past action through لَمْ, and forming conditional sentences through إِنْ, examined directly in this course's thirteenth unit. لَمْ يَذْهَبْ (lam yadhhab), he did not go, illustrates the first, while إِنْ تَجْتَهِدْ تَنْجَحْ (in tajtahid tanjah), if you strive, you will succeed, illustrates the second, with both verbs in this sentence carrying jazm.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَمْ يَذْهَبْ',
            transliteration: 'lam yadhhab',
            english: 'He did not go.',
            source: "Mudari' verb in jazm, negating a past action",
          },
          {
            type: 'example',
            arabic: 'إِنْ تَجْتَهِدْ تَنْجَحْ',
            transliteration: 'in tajtahid tanjah',
            english: 'If you strive, you will succeed.',
            source: "Both verbs in jazm, forming a conditional sentence",
          },
        ],
      },
      {
        heading: 'Closing this unit: the complete map assembled',
        body: `This unit has now covered all four states of i'rab directly: raf' and nasb, genuinely shared between nouns and verbs, and jarr and jazm, each belonging exclusively to one category or the other. Returning one final time to this course's own opening story, a reciter's shift from raf' to jarr on a single word in Surah at-Tawbah 9:3 is now visible for exactly what it was: a shift from one of these four precise, well defined states into another, changing meaning specifically because Arabic relies on this exact system to carry it. This course's sixth unit turns directly to the specific letters and markers, beyond the four default signs already named across this unit, that indicate these same four states in less straightforward cases.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 6 - SIGNS OF I'RAB (placeholders)
  // -----------------------------------------------------------
  'signs-1': { id: 'signs-1', unit: 'unit-6', title: "The Original Signs of I'rab", summary: 'The default vowel markers for each of the four grammatical states.' },
  'signs-2': { id: 'signs-2', unit: 'unit-6', title: "Al-Asmaa' al-Khamsah: The Five Nouns", summary: 'Five specific nouns that follow a different i\u2019rab pattern entirely.' },
  'signs-3': { id: 'signs-3', unit: 'unit-6', title: 'Al-Muthanna: The Dual', summary: 'How Arabic marks exactly two of something.' },
  'signs-4': { id: 'signs-4', unit: 'unit-6', title: "Jam' al-Mudhakkar as-Salim: The Sound Masculine Plural", summary: 'One of two regular plural patterns in Arabic.' },
  'signs-5': { id: 'signs-5', unit: 'unit-6', title: "Jam' al-Mu'annath as-Salim: The Sound Feminine Plural", summary: 'The regular feminine plural pattern.' },

  // -----------------------------------------------------------
  // UNIT 7 - AL-ISM: CATEGORIES OF THE NOUN (placeholders)
  // -----------------------------------------------------------
  'ism-1': { id: 'ism-1', unit: 'unit-7', title: "Al-Ma'rifah wan-Nakirah: Definite and Indefinite", summary: 'The distinction underlying nearly every other noun category.' },
  'ism-2': { id: 'ism-2', unit: 'unit-7', title: "Al-Mudhakkar wal-Mu'annath: Masculine and Feminine", summary: 'Grammatical gender and its most common markers.' },
  'ism-3': { id: 'ism-3', unit: 'unit-7', title: "Number: Mufrad, Muthanna, and Jam'", summary: 'The three-way distinction of singular, dual, and plural.' },
  'ism-4': { id: 'ism-4', unit: 'unit-7', title: "Jam' at-Taksir: The Broken Plural", summary: 'The irregular, pattern-based plural most Arabic nouns actually use.' },

  // -----------------------------------------------------------
  // UNIT 8 - HARF AL-JARR AND AL-IDAFAH (placeholders)
  // -----------------------------------------------------------
  'jarr-1': { id: 'jarr-1', unit: 'unit-8', title: 'Huruf al-Jarr: Prepositions and Their Meanings', summary: 'The core set of Arabic prepositions and what each one means.' },
  'jarr-2': { id: 'jarr-2', unit: 'unit-8', title: 'The Effect of Harf al-Jarr on the Noun', summary: 'Why a preposition forces the following noun into jarr.' },
  'jarr-3': { id: 'jarr-3', unit: 'unit-8', title: "Al-Idafah: The Possessive Construct", summary: 'How Arabic expresses possession without a separate word for "of."' },
  'jarr-4': { id: 'jarr-4', unit: 'unit-8', title: 'Al-Mudaf and Al-Mudaf Ilayhi', summary: 'The two halves of every idafah construct and their specific rules.' },

  // -----------------------------------------------------------
  // UNIT 9 - AT-TAWABI': THE DEPENDENTS (placeholders)
  // -----------------------------------------------------------
  'tawabi-1': { id: 'tawabi-1', unit: 'unit-9', title: "An-Na't: The Adjective", summary: 'How Arabic adjectives agree with the nouns they describe.' },
  'tawabi-2': { id: 'tawabi-2', unit: 'unit-9', title: "Al-'Atf: Conjunction", summary: 'Joining words or phrases together with wa and its sisters.' },
  'tawabi-3': { id: 'tawabi-3', unit: 'unit-9', title: 'At-Tawkid: Emphasis', summary: 'Reinforcing a noun\u2019s meaning through specific emphasis words.' },
  'tawabi-4': { id: 'tawabi-4', unit: 'unit-9', title: 'Al-Badal: Substitution', summary: 'Replacing one noun with a more specific one immediately after it.' },

  // -----------------------------------------------------------
  // UNIT 10 - KAANA WA AKHAWATUHA (placeholders)
  // -----------------------------------------------------------
  'kaana-1': { id: 'kaana-1', unit: 'unit-10', title: 'Kaana and Her Sisters: Defective Verbs', summary: 'A group of verbs that change the rules of the nominal sentence.' },
  'kaana-2': { id: 'kaana-2', unit: 'unit-10', title: 'Their Effect on the Nominal Sentence', summary: 'How kaana and her sisters change mubtada and khabar\u2019s own i\u2019rab.' },
  'kaana-3': { id: 'kaana-3', unit: 'unit-10', title: 'Ism Kaana and Khabar Kaana', summary: 'The new names these same two parts take once kaana enters.' },
  'kaana-4': { id: 'kaana-4', unit: 'unit-10', title: 'Common Mistakes in Applying Kaana\u2019s Sisters', summary: 'Where learners most often misapply this specific rule.' },

  // -----------------------------------------------------------
  // UNIT 11 - INNA WA AKHAWATUHA (placeholders)
  // -----------------------------------------------------------
  'inna-1': { id: 'inna-1', unit: 'unit-11', title: 'Inna and Her Sisters: Emphasis Particles', summary: 'A group of particles that also change the nominal sentence\u2019s i\u2019rab.' },
  'inna-2': { id: 'inna-2', unit: 'unit-11', title: 'Their Effect on the Nominal Sentence', summary: 'How inna and her sisters reverse the usual i\u2019rab of mubtada and khabar.' },
  'inna-3': { id: 'inna-3', unit: 'unit-11', title: 'Ism Inna and Khabar Inna', summary: 'The new names mubtada and khabar take under inna\u2019s own influence.' },
  'inna-4': { id: 'inna-4', unit: 'unit-11', title: "Laa an-Nafiyah lil-Jins", summary: 'A specific member of this same family used for categorical negation.' },

  // -----------------------------------------------------------
  // UNIT 12 - AL-MAF'ULAT: OTHER OBJECTS OF THE VERB (placeholders)
  // -----------------------------------------------------------
  'mafool-1': { id: 'mafool-1', unit: 'unit-12', title: "Al-Maf'ul al-Mutlaq: The Absolute Object", summary: 'A noun derived from the verb itself, used for emphasis or description.' },
  'mafool-2': { id: 'mafool-2', unit: 'unit-12', title: "Al-Maf'ul li Ajlihi: The Object of Reason", summary: 'A noun explaining why an action was actually done.' },
  'mafool-3': { id: 'mafool-3', unit: 'unit-12', title: "Al-Maf'ul Fihi: Time and Place", summary: 'Adverbial nouns expressing when or where an action occurred.' },
  'mafool-4': { id: 'mafool-4', unit: 'unit-12', title: 'Al-Haal and At-Tamyiz', summary: 'Describing circumstance and resolving ambiguity, in two distinct ways.' },

  // -----------------------------------------------------------
  // UNIT 13 - AL-FI'L AL-MUDARI' AND ITS GOVERNORS (placeholders)
  // -----------------------------------------------------------
  'mudari-1': { id: 'mudari-1', unit: 'unit-13', title: "I'rab of the Mudari' Verb", summary: 'Why the present-tense verb, unlike the past tense, actually takes i\u2019rab.' },
  'mudari-2': { id: 'mudari-2', unit: 'unit-13', title: "Nawasib al-Fi'l al-Mudari'", summary: 'The specific particles that push a present-tense verb into nasb.' },
  'mudari-3': { id: 'mudari-3', unit: 'unit-13', title: "Jawazim al-Fi'l al-Mudari'", summary: 'The specific particles that push a present-tense verb into jazm.' },
  'mudari-4': { id: 'mudari-4', unit: 'unit-13', title: 'Ash-Shart: Conditional Sentences', summary: 'How Arabic builds if-then sentences using jazm.' },

  // -----------------------------------------------------------
  // UNIT 14 - BEYOND THE BASICS (placeholders)
  // -----------------------------------------------------------
  'beyond-1': { id: 'beyond-1', unit: 'unit-14', title: 'Sentences with a Grammatical Position (Mahalla l-I\u2019rab)', summary: 'How an entire sentence can itself function as a single grammatical part.' },
  'beyond-2': { id: 'beyond-2', unit: 'unit-14', title: "An-Nida': The Vocative", summary: 'The specific grammar of directly addressing someone or something.' },
  'beyond-3': { id: 'beyond-3', unit: 'unit-14', title: "Al-Istifham: Interrogative Structures", summary: 'How Arabic actually forms different kinds of questions.' },
  'beyond-4': { id: 'beyond-4', unit: 'unit-14', title: 'Reading and Parsing: Putting It All Together', summary: 'Applying every rule this course has covered to real, connected Arabic text.' },
};