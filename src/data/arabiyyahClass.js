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
  // UNIT 6 - SIGNS OF I'RAB (full content, expanded)
  //
  // The five nouns' exact list and their governing conditions
  // (singular, mudaf to something other than ya al-mutakallim, not
  // diminutive), the dual and sound masculine plural's letter-based
  // markers, and the sound feminine plural's kasra-for-nasb
  // substitution checked against multiple current Nahw references
  // before writing.
  // -----------------------------------------------------------
  'signs-1': {
    id: 'signs-1',
    unit: 'unit-6',
    title: "The Original Signs of I'rab",
    summary: 'The default vowel markers for each of the four grammatical states.',
    content: [
      {
        heading: "The four default signs, already established",
        body: `This course's fifth unit already named the standard sign for each of the four i'rab states: damma for raf', fatha for nasb, kasra for jarr, and sukoon for jazm. These are called al-alaamaat al-asliyyah, the original signs, and they apply to the overwhelming majority of Arabic nouns and verbs without any modification at all.`,
      },
      {
        heading: 'Why some categories need substitute signs instead',
        body: `A specific, limited number of noun categories do not follow these original signs, using instead al-alaamaat al-far'iyyah, substitute signs, letters or different vowels standing in for damma, fatha, and kasra. This is not an inconsistency in the system, but a recognition that certain word shapes cannot comfortably carry these short vowels the way an ordinary singular noun does.`,
      },
      {
        heading: "Four categories this unit examines directly",
        body: `This unit's remaining four topics examine exactly these categories in turn: al-asmaa' al-khamsah, five specific nouns using entire letters rather than short vowels; al-muthanna, the dual, and jam' al-mudhakkar as-salim, the sound masculine plural, both also using letters; and jam' al-mu'annath as-salim, the sound feminine plural, which keeps its short vowels but substitutes one of them for another in one specific state.`,
      },
      {
        heading: 'Why learning these substitutions matters practically',
        body: `A reader unfamiliar with these substitute signs might see a word ending in ya or waw, or carrying an unexpected kasra, and wrongly conclude the word's i'rab has broken down or become irregular, when in fact it is following one of these several well defined, entirely predictable patterns. This unit's remaining topics give each pattern its own direct, careful treatment.`,
      },
    ],
  },

  'signs-2': {
    id: 'signs-2',
    unit: 'unit-6',
    title: "Al-Asmaa' al-Khamsah: The Five Nouns",
    summary: 'Five specific nouns that follow a different i\u2019rab pattern entirely.',
    content: [
      {
        heading: 'Five specific, named nouns',
        body: `Al-asmaa' al-khamsah are exactly five nouns: أَب (ab, father), أَخ (akh, brother), حَم (ham, father-in-law), فَم or فُو (fam or fu, mouth), and ذُو (dhu, possessor of). These five, and only these five, follow the specific pattern this topic describes.`,
      },
      {
        heading: 'Letters replacing short vowels entirely',
        body: `Rather than carrying damma, fatha, or kasra, these five nouns use entire letters instead: waw for raf', alif for nasb, and ya for jarr.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'الأَسْمَاءُ الخَمْسَةُ تُرْفَعُ بِالوَاوِ، وَتُنْصَبُ بِالأَلِفِ، وَتُجَرُّ بِالْيَاءِ',
            transliteration: "al-asmā\u2019u l-khamsatu turfa\u2019u bi l-wāw, wa tunsabu bi l-alif, wa tujarru bi l-yā\u2019",
            english: 'The five nouns take raf\u2019 with waw, nasb with alif, and jarr with ya.',
            source: "The core i'rab pattern of al-asmaa' al-khamsah",
          },
        ],
      },
      {
        heading: 'A worked example across all three states',
        body: `أَبُوكَ (abūka), your father, appears in raf' with waw. أَبَاكَ (abāka), your father, appears in nasb with alif. أَبِيكَ (abīka), your father, appears in jarr with ya.`,
        verses: [
          {
            type: 'example',
            arabic: 'أَبُوكَ',
            transliteration: 'abūka',
            english: 'Your father (raf\u2019).',
            source: "Al-asmaa' al-khamsah in raf', marked with waw",
          },
          {
            type: 'example',
            arabic: 'أَبَاكَ',
            transliteration: 'abāka',
            english: 'Your father (nasb).',
            source: "Al-asmaa' al-khamsah in nasb, marked with alif",
          },
          {
            type: 'example',
            arabic: 'أَبِيكَ',
            transliteration: 'abīka',
            english: 'Your father (jarr).',
            source: "Al-asmaa' al-khamsah in jarr, marked with ya",
          },
        ],
      },
      {
        heading: 'Three specific conditions, all required at once',
        body: `This pattern applies only when all three of the following hold: the noun is singular, it is mudaf, entering the idafah construct examined fully in this course's eighth unit, to something other than the speaker's own attached pronoun "my" (ya al-mutakallim), and it is not in a diminutive form. If any single one of these conditions fails, the noun reverts entirely to ordinary damma/fatha/kasra declension instead.`,
      },
      {
        heading: 'Why this specific limitation is worth remembering directly',
        body: `A learner who memorizes only "these five nouns use waw/alif/ya" without also learning these governing conditions risks misapplying the pattern to أَبِي (abī), my father, where the noun is mudaf specifically to ya al-mutakallim, and therefore does not follow this special pattern at all. Precision about the conditions matters just as much as memorizing the five nouns themselves.`,
      },
    ],
  },

  'signs-3': {
    id: 'signs-3',
    unit: 'unit-6',
    title: 'Al-Muthanna: The Dual',
    summary: 'How Arabic marks exactly two of something.',
    content: [
      {
        heading: "Arabic's distinct grammatical number for exactly two",
        body: `Unlike English, which marks only singular and plural, Arabic maintains a separate grammatical number, al-muthanna, the dual, for referring to exactly two of something, marked with its own specific i'rab pattern rather than the original signs already covered in this unit's first topic.`,
      },
      {
        heading: "The dual's own two-way pattern",
        body: `The dual adds اَنِ (-āni) to a singular noun for raf', and يْنِ (-ayni) for both nasb and jarr, the two remaining states sharing an identical marker rather than each receiving its own distinct sign.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'المُثَنَّى يُرْفَعُ بِالأَلِفِ، وَيُنْصَبُ وَيُجَرُّ بِالْيَاءِ',
            transliteration: "al-muthannā yurfa\u2019u bi l-alif, wa yunsabu wa yujarru bi l-yā\u2019",
            english: 'The dual takes raf\u2019 with alif, and takes both nasb and jarr with ya.',
            source: "The dual's i'rab pattern",
          },
        ],
      },
      {
        heading: 'A worked example',
        body: `الطَّالِبَانِ (at-tālibāni), the two students, appears in raf', while الطَّالِبَيْنِ (at-tālibayni), the two students, appears in nasb or jarr, the exact same form serving both of these remaining states.`,
        verses: [
          {
            type: 'example',
            arabic: 'الطَّالِبَانِ',
            transliteration: 'at-tālibāni',
            english: 'The two students (raf\u2019).',
            source: 'Dual in raf\u2019, marked with alif and nun',
          },
          {
            type: 'example',
            arabic: 'الطَّالِبَيْنِ',
            transliteration: 'at-tālibayni',
            english: 'The two students (nasb or jarr).',
            source: 'Dual in nasb or jarr, marked with ya and nun',
          },
        ],
      },
      {
        heading: 'Why nasb and jarr collapsing into one form matters',
        body: `Unlike al-asmaa' al-khamsah, already covered directly in this unit's previous topic, where each of the three states received its own distinct letter, the dual's own pattern gives nasb and jarr an identical form. A reader distinguishing between these two states for a dual noun must therefore rely on surrounding context, such as whether a harf jarr or a transitive verb's object position is present, rather than on the word's own ending alone.`,
      },
    ],
  },

  'signs-4': {
    id: 'signs-4',
    unit: 'unit-6',
    title: "Jam' al-Mudhakkar as-Salim: The Sound Masculine Plural",
    summary: 'One of two regular plural patterns in Arabic.',
    content: [
      {
        heading: 'A regular, predictable masculine plural',
        body: `Jam' al-mudhakkar as-salim, the sound masculine plural, is called "sound" specifically because it adds a regular suffix to the singular noun without altering the noun's own internal structure, unlike jam' at-taksir, the broken plural examined directly in this course's seventh unit, which does restructure the word internally.`,
      },
      {
        heading: "This plural's own i'rab pattern",
        body: `This plural follows a pattern closely resembling the dual already covered directly in this unit's previous topic, though using different letters: وْنَ (-ūna) for raf', and يْنَ (-īna) for both nasb and jarr together.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'جَمْعُ المُذَكَّرِ السَّالِمُ يُرْفَعُ بِالوَاوِ، وَيُنْصَبُ وَيُجَرُّ بِالْيَاءِ',
            transliteration: "jam\u2019u l-mudhakkari s-sālimu yurfa\u2019u bi l-wāw, wa yunsabu wa yujarru bi l-yā\u2019",
            english: 'The sound masculine plural takes raf\u2019 with waw, and takes both nasb and jarr with ya.',
            source: "The sound masculine plural's i'rab pattern",
          },
        ],
      },
      {
        heading: 'A worked example',
        body: `المُسْلِمُونَ (al-muslimūna), the Muslims, appears in raf', while المُسْلِمِينَ (al-muslimīna), the Muslims, appears in nasb or jarr, exactly paralleling the dual's own nasb/jarr collapse already covered directly in this unit's third topic.`,
        verses: [
          {
            type: 'example',
            arabic: 'المُسْلِمُونَ',
            transliteration: 'al-muslimūna',
            english: 'The Muslims (raf\u2019).',
            source: 'Sound masculine plural in raf\u2019, marked with waw and nun',
          },
          {
            type: 'example',
            arabic: 'المُسْلِمِينَ',
            transliteration: 'al-muslimīna',
            english: 'The Muslims (nasb or jarr).',
            source: 'Sound masculine plural in nasb or jarr, marked with ya and nun',
          },
        ],
      },
      {
        heading: 'A brief, honest forward reference worth naming now',
        body: `When this specific plural functions as al-mudaf, the first part of an idafah construct examined fully in this course's eighth unit, its final نَ is dropped entirely. This detail belongs properly to that later unit's own full treatment of idafah, but is worth flagging honestly here so a learner encountering a form such as مُعَلِّمُو المَدْرَسَةِ, the school's teachers, recognizes it as this exact same plural rather than an unrelated word shape.`,
      },
    ],
  },

  'signs-5': {
    id: 'signs-5',
    unit: 'unit-6',
    title: "Jam' al-Mu'annath as-Salim: The Sound Feminine Plural",
    summary: 'The regular feminine plural pattern.',
    content: [
      {
        heading: 'A different kind of substitution from this unit\u2019s previous three topics',
        body: `Jam' al-mu'annath as-salim, the sound feminine plural, formed by adding اتٌ (-ātun) to a feminine singular noun, differs from al-asmaa' al-khamsah, the dual, and the sound masculine plural, all already covered directly across this unit's earlier topics, in one important respect: it keeps ordinary short vowels for its i'rab rather than switching to entire letters. Its own irregularity is narrower and, for many learners, genuinely more surprising.`,
      },
      {
        heading: 'A single substitution, easy to overlook',
        body: `This plural takes damma for raf' and kasra for jarr, exactly as an ordinary noun would. In nasb, however, it takes kasra as well, substituting for the fatha an ordinary noun would carry in this same position.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'جَمْعُ المُؤَنَّثِ السَّالِمُ يُنْصَبُ بِالكَسْرَةِ نِيَابَةً عَنِ الفَتْحَةِ',
            transliteration: "jam\u2019u l-mu\u2019annathi s-sālimu yunsabu bi l-kasrati niyābatan \u2019ani l-fathah",
            english: 'The sound feminine plural takes nasb with kasra, standing in for fatha.',
            source: "The sound feminine plural's one distinctive substitution",
          },
        ],
      },
      {
        heading: 'A concrete example, contrasted directly with the expected pattern',
        body: `رَأَيْتُ مُسْلِمَاتٍ (ra\u2019aytu muslimātin), I saw Muslim women, carries kasra on مُسْلِمَاتٍ despite this noun clearly functioning as maf'ul bihi, already established directly in this course's fourth unit as a nasb-carrying role. A learner expecting fatha here, by analogy with an ordinary singular noun, would produce a genuine, identifiable error.`,
        verses: [
          {
            type: 'example',
            arabic: 'رَأَيْتُ مُسْلِمَاتٍ',
            transliteration: 'ra\u2019aytu muslimātin',
            english: 'I saw Muslim women.',
            source: 'Maf\u2019ul bihi in nasb, marked with kasra rather than fatha',
          },
        ],
      },
      {
        heading: 'Closing this unit: four patterns, one underlying purpose',
        body: `This unit has now covered four distinct substitute patterns: al-asmaa' al-khamsah and its three governing conditions, the dual's alif/ya distribution, the sound masculine plural's closely parallel waw/ya distribution, and the sound feminine plural's single, easily overlooked kasra-for-nasb substitution. Every one of these patterns still expresses exactly the same four states already established directly in this course's fifth unit, raf', nasb, jarr, and jazm, simply through different specific markers. This course's seventh unit turns directly to a broader set of categories governing nouns generally, definiteness, gender, and number, building on the specific plural and dual forms this unit has already introduced.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 7 - AL-ISM: CATEGORIES OF THE NOUN (full content, expanded)
  //
  // The six core categories of ma'rifah, and the lafzi/ma'nawi
  // feminine distinction (including the exception of masculine
  // proper names carrying a taa marbuta), checked against multiple
  // current Nahw references before writing.
  // -----------------------------------------------------------
  'ism-1': {
    id: 'ism-1',
    unit: 'unit-7',
    title: "Al-Ma'rifah wan-Nakirah: Definite and Indefinite",
    summary: 'The distinction underlying nearly every other noun category.',
    content: [
      {
        heading: "Returning directly to this course's third unit",
        body: `This course's third unit already established that al-mubtada is normally required to be definite, ma'rifah, with only specific, recognized exceptions permitting an indefinite, nakirah, mubtada instead. This unit now gives this exact distinction its own full, systematic treatment.`,
      },
      {
        heading: 'Nakirah as the default, unmarked state',
        body: `An-nakirah refers to something general and unspecified, and functions as the default state a noun belongs to unless it falls into one of the specific categories examined in this topic's remaining sections. رَجُلٌ (rajulun), a man, is nakirah, referring to no particular, identifiable man at all.`,
      },
      {
        heading: 'Six recognized paths to definiteness',
        body: `A noun becomes ma'rifah through exactly one of six recognized categories.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'أَقْسَامُ المَعْرِفَةِ سِتَّةٌ: الضَّمِيرُ، وَالعَلَمُ، وَاسْمُ الإِشَارَةِ، وَالاِسْمُ المَوْصُولُ، وَالمُعَرَّفُ بِأَلْ، وَالمُضَافُ إِلَى مَعْرِفَةٍ',
            transliteration: "aqsāmu l-ma\u2019rifati sittah: ad-damīr, wa l-\u2019alam, wa smu l-ishārah, wa l-ismu l-mawsūl, wa l-mu\u2019arrafu bi-al, wa l-mudāfu ilā ma\u2019rifah",
            english: 'The categories of the definite noun are six: the pronoun, the proper noun, the demonstrative noun, the relative noun, the noun carrying "al-", and a noun mudaf to something already definite.',
            source: "The six categories of ma'rifah",
          },
        ],
      },
      {
        heading: 'Each category illustrated directly',
        body: `هُوَ (huwa), he, illustrates a pronoun, always definite. زَيْدٌ (Zaydun), Zayd, already familiar throughout this course, illustrates a proper noun. هَذَا (hādhā), this, illustrates a demonstrative noun. الَّذِي (alladhī), the one who, illustrates a relative noun. الكِتَابُ (al-kitābu), the book, illustrates the definite article. كِتَابُ زَيْدٍ (kitābu Zaydin), Zayd's book, already covered directly in this course's fifth unit through idafah, illustrates the sixth category, since زَيْدٍ, itself a proper noun, transfers its own definiteness onto the whole construct.`,
      },
      {
        heading: 'Why this six-part map matters beyond the mubtada rule alone',
        body: `Definiteness governs considerably more than the mubtada rule already covered in this course's third unit. This course's ninth unit, examining an-na't, the adjective, will show directly that an adjective must agree with its noun in definiteness as well as gender and number, making this exact six-category map a genuine prerequisite for that later unit's own treatment.`,
      },
    ],
  },

  'ism-2': {
    id: 'ism-2',
    unit: 'unit-7',
    title: "Al-Mudhakkar wal-Mu'annath: Masculine and Feminine",
    summary: 'Grammatical gender and its most common markers.',
    content: [
      {
        heading: 'Masculine as the default, unmarked category',
        body: `Every Arabic noun carries grammatical gender, and al-mudhakkar, masculine, functions as the default category a noun belongs to unless it carries a specific feminine marker or is understood as feminine by its own meaning.`,
      },
      {
        heading: "Al-mu'annath al-lafzi: feminine marked visibly",
        body: `Al-mu'annath al-lafzi describes a feminine noun carrying one of three visible markers: taa marbuta (ة), alif maqsura (ى), or alif mamduda (اء). طَالِبَةٌ (tālibatun), a female student, illustrates taa marbuta, already familiar from this course's third unit.`,
      },
      {
        heading: "Al-mu'annath al-ma'nawi: feminine without any visible marker",
        body: `Al-mu'annath al-ma'nawi describes a noun understood as feminine by its own meaning despite carrying no visible marker at all. أُمّ (umm), mother, is feminine by meaning alone, requiring feminine agreement in khabar, na't, and elsewhere despite its own bare, unmarked form.`,
        verses: [
          {
            type: 'example',
            arabic: 'أُمّ',
            transliteration: 'umm',
            english: 'Mother.',
            source: "Mu'annath ma'nawi: feminine by meaning, with no visible marker",
          },
        ],
      },
      {
        heading: 'An honest exception worth naming directly',
        body: `The presence of taa marbuta does not guarantee feminine gender without exception. Certain masculine proper names, طَلْحَة (Talhah) among them, carry this same marker while remaining grammatically masculine, since these are established, well documented exceptions rather than genuine feminine nouns. Encountering an unfamiliar name carrying taa marbuta is therefore a useful first clue toward feminine gender, but not an absolute, infallible guarantee.`,
      },
      {
        heading: "Connecting directly back to this course's third unit",
        body: `This entire gender system underlies the specific khabar agreement rules already covered directly in this course's third unit, الطَّالِبُ مُجْتَهِدٌ against الطَّالِبَةُ مُجْتَهِدَةٌ, and the genuinely important non-human plural exception, الكُتُبُ مُفِيدَةٌ, where a khabar takes feminine singular form specifically because Arabic treats non-human plurals as a single, unified group. This unit's next topic turns to number, the third major noun category alongside definiteness and gender.`,
      },
    ],
  },

  'ism-3': {
    id: 'ism-3',
    unit: 'unit-7',
    title: "Number: Mufrad, Muthanna, and Jam'",
    summary: 'The three-way distinction of singular, dual, and plural.',
    content: [
      {
        heading: 'A three-way system, not merely singular and plural',
        body: `Alongside definiteness and gender, already covered directly across this unit's first two topics, every Arabic noun also carries a specific number: al-mufrad, singular, al-muthanna, the dual already examined in full across this course's sixth unit, or al-jam', plural.`,
      },
      {
        heading: "Why the dual deserves genuine, separate status",
        body: `Unlike English, which collapses everything beyond one into an undifferentiated plural, Arabic treats exactly two of something as its own distinct grammatical category, carrying the specific alif/ya pattern already covered directly in this course's sixth unit, rather than folding this meaning into the ordinary plural form.`,
      },
      {
        heading: 'Two genuinely different kinds of plural',
        body: `Al-jam' itself divides into two categories requiring entirely different treatment. Jam' as-salim, the sound plural, already covered across this course's sixth unit in both its masculine and feminine forms, adds a regular, predictable suffix without disturbing the singular noun's own internal structure. Jam' at-taksir, the broken plural, restructures the noun's own internal pattern instead, and receives this unit's own closing, dedicated treatment.`,
      },
      {
        heading: "Setting up this unit's closing topic directly",
        body: `Understanding that plural itself is not one single, uniform category, but splits into these two genuinely different formation strategies, is essential preparation for this unit's closing topic, which turns to the considerably more common, and considerably less predictable, of these two plural types.`,
      },
    ],
  },

  'ism-4': {
    id: 'ism-4',
    unit: 'unit-7',
    title: "Jam' at-Taksir: The Broken Plural",
    summary: 'The irregular, pattern-based plural most Arabic nouns actually use.',
    content: [
      {
        heading: 'The more common plural type, despite receiving less attention so far',
        body: `Jam' at-taksir, the broken plural, already named directly in this course's sixth unit as the contrasting case explaining why sound plurals are called "sound," is in fact the more common plural type across the Arabic language as a whole. Most Arabic nouns, when made plural, take a broken rather than sound form.`,
      },
      {
        heading: 'No single suffix, but a wide range of internal patterns',
        body: `Unlike the sound plurals already covered directly in this course's sixth unit, jam' at-taksir does not add one predictable suffix at all, instead restructuring the singular noun's own internal vowel pattern according to one of a considerable number of established templates. كِتَابٌ (kitābun), a book, becomes كُتُبٌ (kutubun), books. رَجُلٌ (rajulun), a man, becomes رِجَالٌ (rijālun), men. قَلَمٌ (qalamun), a pen, becomes أَقْلَامٌ (aqlāmun), pens, three entirely different internal transformations rather than one shared pattern applied consistently.`,
        verses: [
          {
            type: 'example',
            arabic: 'كِتَابٌ \u2190 كُتُبٌ',
            transliteration: 'kitābun \u2192 kutubun',
            english: 'A book \u2192 books.',
            source: "Jam' at-taksir: internal restructuring, no added suffix",
          },
          {
            type: 'example',
            arabic: 'رَجُلٌ \u2190 رِجَالٌ',
            transliteration: 'rajulun \u2192 rijālun',
            english: 'A man \u2192 men.',
            source: "Jam' at-taksir: a genuinely different internal pattern",
          },
        ],
      },
      {
        heading: 'Declining with ordinary, original i\u2019rab signs',
        body: `Despite this internal irregularity in its own formation, jam' at-taksir declines using the ordinary, original i'rab signs already covered directly in this course's fifth unit, damma for raf', fatha for nasb, and kasra for jarr, rather than the special letter-based markers governing the sound masculine plural and the dual, both already covered across this course's sixth unit.`,
      },
      {
        heading: 'A direct, specific callback worth naming plainly',
        body: `This course's third unit already used الكُتُبُ مُفِيدَةٌ, the books are useful, to illustrate the genuinely important rule that non-human plurals take feminine singular khabar agreement. الكُتُبُ is itself precisely the jam' at-taksir this topic has just introduced, meaning that memorable example from three units ago was, from the very beginning, a real instance of exactly this same broken plural category.`,
      },
      {
        heading: "Closing this unit and turning outward from the noun itself",
        body: `This unit has now covered the six paths to definiteness, the masculine default and the two forms feminine marking can take, the three-way number system, and the broken plural's own genuinely irregular but still ordinarily declining formation. This course's eighth unit turns outward from the noun's own internal categories to how nouns relate to one another and to prepositions, through huruf al-jarr and al-idafah, both already referenced repeatedly across this course's earlier units without yet receiving their own full, dedicated treatment.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 8 - HARF AL-JARR AND AL-IDAFAH (full content, expanded)
  //
  // The core huruf al-jarr list, and the mudaf/mudaf ilayh rules
  // (mudaf never takes tanween or al-, drops its final noon if dual
  // or sound masculine plural, and takes whatever i'rab its
  // sentence role requires; mudaf ilayh always jarr) checked
  // against multiple current Nahw references before writing.
  // -----------------------------------------------------------
  'jarr-1': {
    id: 'jarr-1',
    unit: 'unit-8',
    title: 'Huruf al-Jarr: Prepositions and Their Meanings',
    summary: 'The core set of Arabic prepositions and what each one means.',
    content: [
      {
        heading: "Returning to a category already named in this course's first unit",
        body: `This course's first unit already identified being preceded by a harf jarr as one of the four reliable signs confirming a word as an ism. This unit now examines huruf al-jarr, prepositions, directly, both what they mean individually and, in this unit's second topic, exactly what grammatical effect they have on the noun following them.`,
      },
      {
        heading: 'A core set of commonly used prepositions',
        body: `Among the most frequently used huruf al-jarr are مِنْ (min, from), إِلَى (ilā, to), عَنْ ('an, about or from), عَلَى ('alā, on), فِي (fī, in), بِـ (bi, with or by), كَـ (ka, like or as), لِـ (li, for or belonging to), and حَتَّى (hattā, until).`,
      },
      {
        heading: 'A structural detail worth noting directly',
        body: `Three of these, بِـ, كَـ, and لِـ, attach directly to the following word rather than standing as separate words, while the remainder appear as independent words in their own right. This distinction affects only how each preposition is written, not the underlying grammatical effect examined directly in this unit's next topic.`,
      },
      {
        heading: 'Meaning matters alongside grammar',
        body: `Each harf jarr carries its own specific meaning, and this meaning is not always predictable from a single English equivalent. عَنْ, generally rendered "about" or "from," and مِنْ, generally rendered "from," overlap in English translation while marking genuinely distinct relationships in Arabic itself, one indicating separation or origin, the other indicating a subject being discussed or moved away from.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Beyond this core, commonly used set, classical grammarians recognize a considerably longer list of huruf al-jarr, including rarer particles used in oaths and specific classical constructions. This unit's own scope remains focused on the set genuinely encountered most often in ordinary reading, since this unit's next topic turns to what every one of these particles, common or rare, does to the noun that follows it.`,
      },
    ],
  },

  'jarr-2': {
    id: 'jarr-2',
    unit: 'unit-8',
    title: 'The Effect of Harf al-Jarr on the Noun',
    summary: 'Why a preposition forces the following noun into jarr.',
    content: [
      {
        heading: "Confirming a rule already established directly",
        body: `This course's fifth unit already established jarr as one of the exact two triggers placing a noun into this specific case: immediately following a harf jarr. This topic now examines this same mechanism directly.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'كُلُّ اسْمٍ وَقَعَ بَعْدَ حَرْفِ جَرٍّ فَهُوَ مَجْرُورٌ',
            transliteration: "kullu ismin waqa\u2019a ba\u2019da harfi jarrin fa-huwa majrūr",
            english: 'Every noun falling immediately after a harf jarr is majrur (in the state of jarr).',
            source: "The governing rule of harf al-jarr",
          },
        ],
      },
      {
        heading: 'The preposition itself takes no i\u2019rab at all',
        body: `Harf al-jarr, like every other harf already covered directly in this course's first unit, is mabni, structurally fixed, taking no i'rab of its own regardless of context. The entire grammatical effect falls exclusively on the following noun, not on the preposition itself.`,
      },
      {
        heading: "A term reintroduced from this course's third unit",
        body: `A harf jarr together with its own majrur noun is called jarr wa majrur, and this exact combination is precisely what this course's third unit already introduced as shibh al-jumlah, a quasi-sentence, one of the three forms al-khabar can actually take. فِي المَسْجِدِ (fi l-masjidi), in the mosque, already used directly in that same unit, is jarr wa majrur functioning as khabar.`,
        verses: [
          {
            type: 'example',
            arabic: 'فِي المَسْجِدِ',
            transliteration: 'fi l-masjidi',
            english: 'In the mosque.',
            source: "Harf jarr (fi) + majrur noun (al-masjidi), forming jarr wa majrur",
          },
        ],
      },
      {
        heading: 'A brief, honest note on huruf al-jarr zaa\u2019idah',
        body: `A small number of huruf al-jarr can function as zaa'idah, augmenting particles adding emphasis rather than genuinely new meaning to a sentence, while still causing the following noun to enter jarr grammatically despite this reduced semantic role. This detail is worth naming honestly rather than presenting every harf jarr as always carrying equally weighty independent meaning.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Harf al-jarr is only one of the two triggers for jarr case already identified directly in this course's fifth unit. This unit's remaining two topics turn to the second trigger, al-idafah, the possessive construct already referenced repeatedly across this course's first, fifth, and sixth units without yet receiving its own full, dedicated treatment.`,
      },
    ],
  },

  'jarr-3': {
    id: 'jarr-3',
    unit: 'unit-8',
    title: "Al-Idafah: The Possessive Construct",
    summary: 'How Arabic expresses possession without a separate word for "of."',
    content: [
      {
        heading: "Arabic's own way of expressing possession",
        body: `Al-idafah joins two nouns directly together to express possession or a closely related relationship, entirely without any separate word corresponding to English "of" or the possessive "'s". كِتَابُ الطَّالِبِ (kitābu t-tālibi), the student's book, already introduced directly in this course's fifth unit, illustrates this construct precisely: كِتَابُ and الطَّالِبِ sit directly adjacent to one another, with the relationship between them carried entirely by their own respective grammatical forms rather than by any additional connecting word.`,
      },
      {
        heading: 'Two named parts, already used informally across this course',
        body: `The first noun in this construct is called al-mudaf, the annexed, and the second is called al-mudaf ilayh, that to which annexation occurs. Both terms have already appeared informally across this course's earlier units, in the discussion of the five nouns' own governing conditions in this course's sixth unit and the sound masculine plural's noon-dropping when mudaf, also flagged directly in that same unit.`,
      },
      {
        heading: 'Fulfilling a promise made two units ago',
        body: `This course's sixth unit specifically flagged, without full explanation at the time, that the sound masculine plural drops its final نَ when functioning as mudaf. مُعَلِّمُو المَدْرَسَةِ (mu\u2019allimū l-madrasati), the school's teachers, illustrates this directly: مُعَلِّمُونَ, the ordinary sound masculine plural form, loses its final نَ once it becomes mudaf to المَدْرَسَةِ.`,
        verses: [
          {
            type: 'example',
            arabic: 'مُعَلِّمُو المَدْرَسَةِ',
            transliteration: "mu\u2019allimū l-madrasati",
            english: "The school's teachers.",
            source: "Sound masculine plural as mudaf, final noon dropped",
          },
        ],
      },
      {
        heading: 'Chains of idafah, briefly noted',
        body: `Idafah can extend across more than two nouns at once, each middle noun functioning simultaneously as mudaf ilayh to the noun before it and mudaf to the noun after it. بَابُ بَيْتِ المُدِيرِ (bābu bayti l-mudīri), the door of the manager's house, illustrates this directly, with بَيْتِ serving both roles at once within this same chain.`,
      },
      {
        heading: "Setting up this unit's closing topic directly",
        body: `Both al-mudaf and al-mudaf ilayh follow their own specific, distinct rules, already touched upon in passing across this course's earlier units but not yet given full, direct treatment. This unit's closing topic turns to exactly these rules.`,
      },
    ],
  },

  'jarr-4': {
    id: 'jarr-4',
    unit: 'unit-8',
    title: 'Al-Mudaf and Al-Mudaf Ilayhi',
    summary: 'The two halves of every idafah construct and their specific rules.',
    content: [
      {
        heading: "Al-mudaf's own three defining rules",
        body: `Al-mudaf follows three specific rules distinguishing it from an ordinary noun standing alone.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'المُضَافُ لَا يُنَوَّنُ، وَلَا يَدْخُلُ عَلَيْهِ أَلْ، وَإِعْرَابُهُ بِحَسَبِ مَوْقِعِهِ فِي الجُمْلَةِ',
            transliteration: "al-mudāfu lā yunawwan, wa lā yadkhulu \u2019alayhi al, wa i\u2019rābuhu bi-hasabi mawqi\u2019ihi fi l-jumlah",
            english: 'The mudaf never carries tanween, never takes "al-", and its i\u2019rab follows entirely from its own role within the sentence.',
            source: "The three governing rules of al-mudaf",
          },
        ],
      },
      {
        heading: 'A definiteness the mudaf borrows rather than shows directly',
        body: `Despite never carrying "al-" itself, al-mudaf becomes definite by position specifically when its own mudaf ilayh is definite, drawing directly on the six categories of ma'rifah already covered in full across this course's seventh unit. كِتَابُ الطَّالِبِ is definite as a whole precisely because الطَّالِبِ itself carries the definite article, even though كِتَابُ never displays this definiteness directly on its own form.`,
      },
      {
        heading: "Al-mudaf ilayh's own single, consistent rule",
        body: `Al-mudaf ilayh follows one consistent rule regardless of context: it always carries jarr case, unlike al-mudaf, whose own case shifts freely according to its role elsewhere in the sentence.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'المُضَافُ إِلَيْهِ مَجْرُورٌ دَائِمًا',
            transliteration: "al-mudāfu ilayhi majrūrun dā\u2019iman",
            english: 'The mudaf ilayh is always in the state of jarr.',
            source: 'The single governing rule of al-mudaf ilayh',
          },
        ],
      },
      {
        heading: 'A worked example showing both rules operating together',
        body: `In رَأَيْتُ كِتَابَ الطَّالِبِ (ra\u2019aytu kitāba t-tālibi), I saw the student's book, كِتَابَ carries nasb, functioning as maf'ul bihi already covered directly in this course's fourth unit, while الطَّالِبِ carries jarr regardless, exactly as al-mudaf ilayh always does.`,
        verses: [
          {
            type: 'example',
            arabic: 'رَأَيْتُ كِتَابَ الطَّالِبِ',
            transliteration: "ra\u2019aytu kitāba t-tālibi",
            english: "I saw the student's book.",
            source: "Mudaf (kitāba) in nasb per its own sentence role; mudaf ilayh (at-tālibi) in jarr regardless",
          },
        ],
      },
      {
        heading: "Closing this unit and turning to the noun's own dependents",
        body: `This unit has now covered the core meanings of the most common huruf al-jarr, the mechanism by which they place a following noun into jarr, al-idafah's own basic structure, and the specific, distinct rules governing both al-mudaf and al-mudaf ilayh. This course's ninth unit turns directly to at-tawabi', a set of elements that follow and depend directly on a noun already present in the sentence, beginning with an-na't, the adjective.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 9 - AT-TAWABI': THE DEPENDENTS (full content, expanded)
  //
  // The four-way na't agreement rule and the na't-versus-khabar
  // distinguishing example (Abbas is a rich merchant), and the
  // tawkid ma'nawi word list, checked against multiple current Nahw
  // references before writing.
  // -----------------------------------------------------------
  'tawabi-1': {
    id: 'tawabi-1',
    unit: 'unit-9',
    title: "An-Na't: The Adjective",
    summary: 'How Arabic adjectives agree with the nouns they describe.',
    content: [
      {
        heading: "A new, unifying category: at-tawabi'",
        body: `This unit introduces at-tawabi', the dependents, a name drawn directly from the Arabic root meaning "to follow." All four elements this unit examines, an-na't, al-'atf, at-tawkid, and al-badal, share one defining mechanical trait: each takes its own i'rab entirely from a preceding noun already present in the sentence, rather than having its case independently assigned by its own grammatical role.`,
      },
      {
        heading: "An-na't: the adjective, and its four-way agreement",
        body: `An-na't describes and follows a preceding noun, called al-man'ut, and must agree with it in exactly four distinct categories at once.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'يُطَابِقُ النَّعْتُ مَنْعُوتَهُ فِي أَرْبَعَةِ أَشْيَاءَ: الإِعْرَابِ، وَالتَّعْرِيفِ وَالتَّنْكِيرِ، وَالنَّوْعِ، وَالعَدَدِ',
            transliteration: "yutābiqu n-na\u2019tu man\u2019ūtahu fī arba\u2019ati ashyā\u2019: al-i\u2019rāb, wa t-ta\u2019rīfi wa t-tankīr, wa n-naw\u2019, wa l-\u2019adad",
            english: "The adjective must match the noun it describes in four things: case, definiteness, gender, and number.",
            source: "The four-way na't agreement rule",
          },
        ],
      },
      {
        heading: 'A worked example distinguishing na\u2019t from khabar directly',
        body: `عَبَّاسٌ تَاجِرٌ غَنِيٌّ ('Abbāsun tājirun ghaniyyun), Abbas is a rich merchant, illustrates both structures at once within a single sentence. تَاجِرٌ functions as al-khabar, already covered directly in this course's third unit, requiring agreement with عَبَّاسٌ only in gender and number. غَنِيٌّ, by contrast, functions as an-na't describing تَاجِرٌ specifically, and must therefore match تَاجِرٌ in all four categories at once: both indefinite, both masculine, both singular, and both marfu'.`,
        verses: [
          {
            type: 'example',
            arabic: 'عَبَّاسٌ تَاجِرٌ غَنِيٌّ',
            transliteration: "'Abbāsun tājirun ghaniyyun",
            english: 'Abbas is a rich merchant.',
            source: 'Khabar (tājirun, two-way agreement) and na\u2019t (ghaniyyun, four-way agreement) in the same sentence',
          },
        ],
      },
      {
        heading: 'Why this distinction genuinely matters for reading Arabic accurately',
        body: `A learner who confuses na't with khabar risks misreading an entire sentence's structure. الطَّالِبُ المُجْتَهِدُ (at-tālibu l-mujtahidu), the diligent student, with both words definite, is not yet a complete sentence at all, since المُجْتَهِدُ here functions as na't, merely describing الطَّالِبُ, and the whole phrase still requires its own khabar to become a genuine jumlah mufeedah, already covered directly in this course's second unit.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's remaining three topics examine three further dependents, each also taking its own i'rab from a preceding noun, though through mechanisms genuinely different from na't's own four-way agreement requirement.`,
      },
    ],
  },

  'tawabi-2': {
    id: 'tawabi-2',
    unit: 'unit-9',
    title: "Al-'Atf: Conjunction",
    summary: 'Joining words or phrases together with wa and its sisters.',
    content: [
      {
        heading: "Joining two nouns with a specific set of particles",
        body: `Al-'atf joins a noun, called al-ma'tuf, to a preceding noun, called al-ma'tuf 'alayhi, using one of the huruf al-'atf, conjunction particles, most commonly وَ (wa, and), فَ (fa, so or then), ثُمَّ (thumma, then, implying some delay), and أَوْ (aw, or).`,
      },
      {
        heading: "A single rule, considerably narrower than an-na't's own requirement",
        body: `Unlike an-na't, already covered directly in this unit's previous topic through its four-way agreement requirement, al-'atf requires matching in exactly one respect only: i'rab.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'المَعْطُوفُ يَتْبَعُ المَعْطُوفَ عَلَيْهِ فِي الإِعْرَابِ فَقَطْ',
            transliteration: "al-ma\u2019tūfu yatba\u2019u l-ma\u2019tūfa \u2019alayhi fi l-i\u2019rābi faqat",
            english: 'The conjoined noun follows the noun it is conjoined to in case alone.',
            source: "Al-'atf's single governing rule",
          },
        ],
      },
      {
        heading: 'A worked example showing this narrower requirement directly',
        body: `جَاءَ زَيْدٌ وَعَمْرٌو (jā\u2019a Zaydun wa 'Amrun), Zayd and 'Amr came, places both نs in raf', matching their shared role as fa'il, already covered directly in this course's fourth unit, despite these being two entirely separate proper nouns with no requirement to share gender, number, or definiteness beyond this single matching case.`,
        verses: [
          {
            type: 'example',
            arabic: 'جَاءَ زَيْدٌ وَعَمْرٌو',
            transliteration: "jā\u2019a Zaydun wa 'Amrun",
            english: "Zayd and 'Amr came.",
            source: "Ma'tuf ('Amrun) matches ma'tuf 'alayhi (Zaydun) in case alone",
          },
        ],
      },
      {
        heading: "Why this narrower rule genuinely makes sense",
        body: `Unlike an-na't, which describes a single noun and therefore must resemble it closely across every category, al-'atf simply links two independent items sharing the same grammatical role within the sentence, items that may otherwise differ freely in gender, number, or definiteness, precisely as زَيْدٌ and عَمْرٌو do here as two entirely distinct individuals.`,
      },
    ],
  },

  'tawabi-3': {
    id: 'tawabi-3',
    unit: 'unit-9',
    title: 'At-Tawkid: Emphasis',
    summary: "Reinforcing a noun's meaning through specific emphasis words.",
    content: [
      {
        heading: 'Two genuinely different ways to emphasize',
        body: `At-tawkid reinforces a preceding noun's meaning, removing any ambiguity about who or what is actually intended. It takes two forms: at-tawkid al-lafzi, verbal emphasis, achieved simply by repeating the original word itself, and at-tawkid al-ma'nawi, semantic emphasis, achieved instead through a specific, limited set of dedicated emphasis words.`,
      },
      {
        heading: "The core words of at-tawkid al-ma'nawi",
        body: `The most common tawkid ma'nawi words are نَفْس (nafs) and عَيْن ('ayn), both meaning roughly "itself," and كُلّ (kull), meaning "all" or "every." Each of these words must be mudaf, already covered directly in this course's eighth unit, to a pronoun referring back to the exact noun being emphasized.`,
      },
      {
        heading: 'A worked example',
        body: `جَاءَ الأَمِيرُ نَفْسُهُ (jā\u2019a l-amīru nafsuhu), the prince himself came, uses نَفْسُهُ, nafs mudaf to the pronoun هُ referring back to الأَمِيرُ, to emphasize directly that the prince personally came, rather than merely sending a representative.`,
        verses: [
          {
            type: 'example',
            arabic: 'جَاءَ الأَمِيرُ نَفْسُهُ',
            transliteration: "jā\u2019a l-amīru nafsuhu",
            english: 'The prince himself came.',
            source: "Tawkid ma'nawi (nafsuhu) matching al-amīru in case",
          },
        ],
      },
      {
        heading: "Tawkid's own case rule",
        body: `Exactly like al-'atf already covered directly in this unit's previous topic, at-tawkid takes the same i'rab as the noun it emphasizes, without any further requirement to match gender, number, or definiteness beyond this shared case.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'يَتْبَعُ التَّوْكِيدُ المُؤَكَّدَ فِي إِعْرَابِهِ',
            transliteration: "yatba\u2019u t-tawkīdu l-mu\u2019akkada fī i\u2019rābihi",
            english: 'The emphasis word follows the emphasized word in its own case.',
            source: "At-tawkid's governing rule",
          },
        ],
      },
    ],
  },

  'tawabi-4': {
    id: 'tawabi-4',
    unit: 'unit-9',
    title: 'Al-Badal: Substitution',
    summary: 'Replacing one noun with a more specific one immediately after it.',
    content: [
      {
        heading: 'A noun restating and clarifying the one before it',
        body: `Al-badal follows a preceding noun, called al-mubdal minhu, and restates it with greater specificity, functioning almost as though the first noun were simply a preliminary gesture toward the more precise meaning the badal itself actually supplies.`,
      },
      {
        heading: "Sharing this unit's now-familiar single case rule",
        body: `Like both al-'atf and at-tawkid, already covered directly across this unit's second and third topics, al-badal follows its mubdal minhu in case alone.`,
      },
      {
        heading: 'A worked example',
        body: `زَارَنِي الأَمِيرُ خَالِدٌ (zāranī l-amīru Khālidun), the prince, Khalid, visited me, uses خَالِدٌ as badal for الأَمِيرُ, specifying exactly which prince is meant, with both nouns sharing raf' as fa'il.`,
        verses: [
          {
            type: 'example',
            arabic: 'زَارَنِي الأَمِيرُ خَالِدٌ',
            transliteration: "zāranī l-amīru Khālidun",
            english: 'The prince, Khalid, visited me.',
            source: 'Badal (Khālidun) matching mubdal minhu (al-amīru) in case',
          },
        ],
      },
      {
        heading: "A brief, honest note on further categories",
        body: `Classical Nahw recognizes several distinct categories of badal beyond the straightforward substitution already illustrated directly in this topic, including badal covering only part of the original noun and badal referring to something closely associated with it rather than identical to it. This unit's own scope covers only the clearest, most direct form, sufficient for recognizing badal's basic mechanism when encountered in real text.`,
      },
      {
        heading: 'Closing this unit: four dependents, one shared mechanism',
        body: `This unit has now covered all four tawabi', an-na't's genuinely demanding four-way agreement, and al-'atf, at-tawkid, and al-badal, each requiring only matching case. Every one of these four elements, despite their real functional differences, describing, joining, emphasizing, or restating, shares the exact same underlying mechanism this unit opened with: taking i'rab from a preceding noun rather than having it independently assigned. This course's tenth unit turns to something genuinely different, kaana wa akhawatuha, a group of verbs that actively change the rules governing the nominal sentence itself.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 10 - KAANA WA AKHAWATUHA (full content, expanded)
  //
  // The complete sisters list, the core raf'/nasb mechanism, and
  // laysa's distinguishing morphological restriction (fixed in one
  // form only, unlike the seven "full" sisters) checked against
  // multiple current Nahw references before writing.
  // -----------------------------------------------------------
  'kaana-1': {
    id: 'kaana-1',
    unit: 'unit-10',
    title: 'Kaana and Her Sisters: Defective Verbs',
    summary: 'A group of verbs that change the rules of the nominal sentence.',
    content: [
      {
        heading: "Why these verbs are called 'defective'",
        body: `Kaana wa akhawatuha belongs to a group Nahw calls al-af'al an-naqisah, the defective verbs, named specifically because, unlike an ordinary fi'l already covered directly across this course's fourth unit, they cannot convey complete meaning through action and doer alone. Instead, they require a khabar to complete their meaning, much as al-mubtada itself does.`,
      },
      {
        heading: 'Kaana herself, and her recognized sisters',
        body: `The core list includes كَانَ (kaana, was), صَارَ (sāra, became or turned into), أَصْبَحَ (asbaha, became, associated with morning), أَضْحَى (adhā, became, associated with forenoon), أَمْسَى (amsā, became, associated with evening), بَاتَ (bāta, became, associated with night), ظَلَّ (zalla, remained), لَيْسَ (laysa, is not), مَا زَالَ (mā zāla, continued to or still), and مَا دَامَ (mā dāma, as long as).`,
      },
      {
        heading: 'A genuinely distinguishing detail about laysa',
        body: `Unlike kaana and the six sisters sharing her own full range of conjugation across past, present, and command forms, لَيْسَ exists only in this one fixed shape, carrying present-tense negation despite its own past-tense appearance, with no corresponding mudari' or amr form of its own at all.`,
      },
      {
        heading: 'A brief, honest note on the mā zāla family',
        body: `مَا زَالَ and several closely related verbs sharing this same effect, مَا بَرِحَ, مَا فَتِئَ, and مَا انْفَكَّ, all specifically require this preceding negation particle to carry their "continued to" meaning at all, a genuine grammatical requirement rather than a stylistic preference.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns directly to the specific grammatical effect every one of these verbs has in common once it enters a jumlah ismiyyah, already introduced in outline across this course's third unit through the noted exception to khabar's own default raf' case.`,
      },
    ],
  },

  'kaana-2': {
    id: 'kaana-2',
    unit: 'unit-10',
    title: 'Their Effect on the Nominal Sentence',
    summary: 'How kaana and her sisters change mubtada and khabar\u2019s own i\u2019rab.',
    content: [
      {
        heading: "Confirming a rule already flagged directly in this course's third unit",
        body: `This course's third unit already noted directly that khabar's default raf' case changes specifically once kaana or one of her sisters enters the sentence. This topic now examines exactly what that change actually is.`,
      },
      {
        heading: 'One noun untouched, one noun shifted',
        body: `Once kaana or a sister verb enters a jumlah ismiyyah, the first noun, already established as al-mubtada, keeps its own raf' case entirely unchanged, while the second noun, already established as al-khabar, shifts specifically into nasb.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'تَدْخُلُ كَانَ وَأَخَوَاتُهَا عَلَى الجُمْلَةِ الاِسْمِيَّةِ فَتَرْفَعُ المُبْتَدَأَ وَتَنْصِبُ الخَبَرَ',
            transliteration: "tadkhulu kāna wa akhawātuhā \u2019ala l-jumlati l-ismiyyah fa-tarfa\u2019u l-mubtada\u2019a wa tansibu l-khabar",
            english: 'Kaana and her sisters enter the nominal sentence, keeping the mubtada in raf\u2019 and pushing the khabar into nasb.',
            source: "The core effect of kaana and her sisters",
          },
        ],
      },
      {
        heading: 'A direct, worked contrast',
        body: `الجَوُّ جَمِيلٌ (al-jawwu jamīlun), the weather is beautiful, is an ordinary jumlah ismiyyah with both mubtada and khabar in raf'. كَانَ الجَوُّ جَمِيلًا (kāna l-jawwu jamīlan), the weather was beautiful, shows الجَوُّ retaining its own raf' unchanged while جَمِيلًا shifts directly into nasb, carrying fatha in place of the damma it carried before kaana entered.`,
        verses: [
          {
            type: 'example',
            arabic: 'الجَوُّ جَمِيلٌ',
            transliteration: 'al-jawwu jamīlun',
            english: 'The weather is beautiful.',
            source: 'An ordinary jumlah ismiyyah, before kaana enters',
          },
          {
            type: 'example',
            arabic: 'كَانَ الجَوُّ جَمِيلًا',
            transliteration: 'kāna l-jawwu jamīlan',
            english: 'The weather was beautiful.',
            source: 'The same sentence, mubtada unchanged in raf\u2019, khabar shifted to nasb',
          },
        ],
      },
      {
        heading: 'Why this narrow, precise effect matters',
        body: `Kaana and her sisters change only one specific noun's case, leaving the other entirely untouched, rather than altering the sentence's overall structure in some broader, less predictable way. This precision is exactly what allows this course's next topic to give these two now-changed elements their own specific, dedicated names.`,
      },
    ],
  },

  'kaana-3': {
    id: 'kaana-3',
    unit: 'unit-10',
    title: 'Ism Kaana and Khabar Kaana',
    summary: 'The new names these same two parts take once kaana enters.',
    content: [
      {
        heading: 'New names for the same two underlying roles',
        body: `Once kaana or one of her sisters enters a sentence, al-mubtada, already covered directly across this course's third unit, is renamed ism kaana, and al-khabar is renamed khabar kaana, the exact terminology adjusting to reflect this specific verb's own governance over the sentence, using whichever sister actually appears in a given case, ism asbaha or khabar sāra, for instance.`,
      },
      {
        heading: "Khabar kaana can still take any of the three forms already established",
        body: `This course's third unit already established that khabar can take one of three forms: mufrad, jumlah, or shibh jumlah. Khabar kaana, despite its new name and its shifted nasb case, can still take any of these same three forms.`,
      },
      {
        heading: 'A worked example using a different sister',
        body: `أَصْبَحَ الجَوُّ بَارِدًا (asbaha l-jawwu bāridan), the weather became cold, illustrates this same structure using أَصْبَحَ rather than كَانَ itself. الجَوُّ functions as ism asbaha, retaining raf', while بَارِدًا functions as khabar asbaha, carrying nasb.`,
        verses: [
          {
            type: 'example',
            arabic: 'أَصْبَحَ الجَوُّ بَارِدًا',
            transliteration: 'asbaha l-jawwu bāridan',
            english: 'The weather became cold.',
            source: "Ism asbaha (al-jawwu) in raf'; khabar asbaha (bāridan) in nasb",
          },
        ],
      },
      {
        heading: 'A shibh jumlah example, showing continuity with earlier material',
        body: `كَانَ الكِتَابُ عَلَى الطَّاوِلَةِ (kāna l-kitābu \u2018ala t-tāwilati), the book was on the table, uses عَلَى الطَّاوِلَةِ, a shibh jumlah already familiar directly from this course's third and eighth units, as khabar kaana, confirming that kaana's own effect on case does not restrict which specific form khabar itself may still take.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `Having now covered kaana's sisters individually, the specific case-shifting effect they share, and the new terminology this effect produces, this unit's closing topic turns to where learners most often go wrong when actually applying this rule.`,
      },
    ],
  },

  'kaana-4': {
    id: 'kaana-4',
    unit: 'unit-10',
    title: 'Common Mistakes in Applying Kaana\u2019s Sisters',
    summary: 'Where learners most often misapply this specific rule.',
    content: [
      {
        heading: 'The single most common error',
        body: `By far the most frequent mistake is leaving khabar kaana in raf', its own ordinary default case already established across this course's third unit, out of habit or simple oversight, rather than correctly shifting it into nasb once kaana or a sister has actually entered the sentence. كَانَ الجَوُّ جَمِيلٌ, leaving جَمِيلٌ unchanged in raf', is a genuine, identifiable error, the correct form already established directly in this unit's second topic being كَانَ الجَوُّ جَمِيلًا instead.`,
      },
      {
        heading: 'Why this specific mistake is so easy to make',
        body: `A learner who has already internalized khabar's ordinary raf' case through extensive practice across this course's third unit may continue applying that same habit automatically, even once kaana has entered the sentence and genuinely changed the underlying rule. Recognizing kaana's own presence as the specific trigger requiring this shift is what actually prevents this error, rather than memorizing the correct form for any single example in isolation.`,
      },
      {
        heading: "A second, related error worth naming directly",
        body: `A learner may also correctly shift khabar into nasb while mistakenly also shifting the ism, treating both nouns as equally affected by kaana's entry. كَانَ الجَوَّ جَمِيلًا, incorrectly placing الجَوَّ in nasb as well, misapplies a rule that, already established directly in this unit's second topic, changes only the khabar and leaves the ism entirely untouched.`,
      },
      {
        heading: 'A practical habit worth adopting directly',
        body: `Before assigning case to either noun in a sentence containing kaana or a sister, a reader benefits from first confirming which noun is actually functioning as ism and which as khabar, then applying raf' and nasb specifically according to that identified role, rather than assuming both nouns must automatically match one another the way al-'atf, already covered directly in this course's ninth unit, would actually require.`,
      },
      {
        heading: "Closing this unit and turning to a genuinely parallel structure",
        body: `This unit has now covered kaana and her sisters as a defined group of defective verbs, their shared effect of keeping the ism in raf' while shifting khabar into nasb, the new terminology this effect produces, and the specific mistakes most worth guarding against when applying this rule. This course's eleventh unit turns to a structurally related but genuinely distinct group, inna wa akhawatuha, particles that also change the nominal sentence's own i'rab, though through the exact reverse case assignment.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 11 - INNA WA AKHAWATUHA (full content, expanded)
  //
  // Inna's sisters and their meanings, the exact reverse case
  // mechanism, and laa an-nafiyah lil-jins's four governing
  // conditions checked against multiple current Nahw references
  // before writing.
  // -----------------------------------------------------------
  'inna-1': {
    id: 'inna-1',
    unit: 'unit-11',
    title: 'Inna and Her Sisters: Emphasis Particles',
    summary: 'A group of particles that also change the nominal sentence\u2019s i\u2019rab.',
    content: [
      {
        heading: 'Particles, not verbs, unlike kaana\u2019s own group',
        body: `Unlike kaana and her sisters, already covered directly across this course's tenth unit as genuine verbs, inna wa akhawatuha are huruf, particles, already established across this course's first unit as mabni and carrying no independent i'rab of their own. Despite this difference, they share kaana's own basic capacity to enter a jumlah ismiyyah and change its underlying i'rab.`,
      },
      {
        heading: 'Inna and her recognized sisters',
        body: `The six recognized sisters are إِنَّ (inna, indeed, for emphasis), أَنَّ (anna, that, used within embedded clauses), لَكِنَّ (lakinna, but, for correction or contrast), كَأَنَّ (ka'anna, as if, for comparison), لَيْتَ (layta, would that, expressing wish or regret), and لَعَلَّ (la'alla, perhaps, expressing hope or expectation).`,
      },
      {
        heading: 'Each carrying its own specific, distinct meaning',
        body: `Just as kaana's own sisters each carried a specific nuance beyond simple past tense, already covered directly in this course's tenth unit, inna's sisters each add their own specific shade of meaning: إِنَّ and أَنَّ for straightforward affirmation, لَكِنَّ for genuine contrast, كَأَنَّ for likeness, لَيْتَ for a wish the speaker may know is unlikely, and لَعَلَّ for a hope the speaker considers genuinely possible.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns directly to the specific grammatical effect every one of these six particles shares once it enters a jumlah ismiyyah, an effect already described in outline directly at the close of this course's tenth unit as kaana's own exact reverse.`,
      },
    ],
  },

  'inna-2': {
    id: 'inna-2',
    unit: 'unit-11',
    title: 'Their Effect on the Nominal Sentence',
    summary: 'How inna and her sisters reverse the usual i\u2019rab of mubtada and khabar.',
    content: [
      {
        heading: "Kaana's mirror image, exactly as promised",
        body: `This course's tenth unit already promised directly that inna and her sisters would apply kaana's own effect in reverse. This topic now confirms precisely what that reversal actually is.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'تَدْخُلُ إِنَّ وَأَخَوَاتُهَا عَلَى الجُمْلَةِ الاِسْمِيَّةِ فَتَنْصِبُ المُبْتَدَأَ وَتَرْفَعُ الخَبَرَ',
            transliteration: "tadkhulu inna wa akhawātuhā \u2019ala l-jumlati l-ismiyyah fa-tansibu l-mubtada\u2019a wa tarfa\u2019u l-khabar",
            english: 'Inna and her sisters enter the nominal sentence, pushing the mubtada into nasb while keeping the khabar in raf\u2019.',
            source: 'The core effect of inna and her sisters',
          },
        ],
      },
      {
        heading: 'A direct, worked comparison with kaana',
        body: `اللَّهُ غَفُورٌ (Allāhu ghafūrun), Allah is forgiving, is an ordinary jumlah ismiyyah with both nouns in raf'. إِنَّ اللَّهَ غَفُورٌ (inna Allāha ghafūrun), indeed Allah is forgiving, shifts اللَّهَ into nasb specifically, while غَفُورٌ remains entirely unchanged in raf', the exact reverse of what this course's tenth unit already showed kaana doing to this same two-noun structure.`,
        verses: [
          {
            type: 'example',
            arabic: 'اللَّهُ غَفُورٌ',
            transliteration: 'Allāhu ghafūrun',
            english: 'Allah is forgiving.',
            source: 'An ordinary jumlah ismiyyah, before inna enters',
          },
          {
            type: 'example',
            arabic: 'إِنَّ اللَّهَ غَفُورٌ',
            transliteration: 'inna Allāha ghafūrun',
            english: 'Indeed, Allah is forgiving.',
            source: 'The mubtada shifted to nasb; the khabar remains in raf\u2019, unlike kaana',
          },
        ],
      },
      {
        heading: 'A single memory anchor covering both units at once',
        body: `Kaana keeps the first noun in raf' and shifts the second into nasb; inna shifts the first noun into nasb and keeps the second in raf'. Genuinely remembering either one of this course's tenth and eleventh units correctly makes the other immediately available by simple reversal, rather than requiring two entirely separate rules to be memorized independently.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Just as kaana's own effect produced new terminology already covered directly in this course's tenth unit, inna's own reversed effect produces its own parallel terminology, examined directly in this unit's next topic.`,
      },
    ],
  },

  'inna-3': {
    id: 'inna-3',
    unit: 'unit-11',
    title: 'Ism Inna and Khabar Inna',
    summary: 'The new names mubtada and khabar take under inna\u2019s own influence.',
    content: [
      {
        heading: "Parallel terminology, precisely mirroring kaana's own",
        body: `Once inna or one of her sisters enters a sentence, al-mubtada is renamed ism inna, and al-khabar is renamed khabar inna, using whichever specific sister actually appears, ism la'alla or khabar lakinna, for instance, exactly paralleling kaana's own terminology already covered directly in this course's tenth unit.`,
      },
      {
        heading: "Khabar inna can still take the same three forms already established",
        body: `Exactly as khabar kaana could still take any of the three forms already covered directly in this course's third unit, mufrad, jumlah, or shibh jumlah, khabar inna retains this same flexibility despite its own new name and unchanged raf' case.`,
      },
      {
        heading: 'A worked example using a different sister',
        body: `لَعَلَّ الجَوَّ جَمِيلٌ (la'alla l-jawwa jamīlun), perhaps the weather is beautiful, illustrates this same structure using لَعَلَّ rather than إِنَّ itself. الجَوَّ functions as ism la'alla, carrying nasb, while جَمِيلٌ functions as khabar la'alla, retaining raf'.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَعَلَّ الجَوَّ جَمِيلٌ',
            transliteration: "la'alla l-jawwa jamīlun",
            english: 'Perhaps the weather is beautiful.',
            source: "Ism la'alla (al-jawwa) in nasb; khabar la'alla (jamīlun) in raf'",
          },
        ],
      },
      {
        heading: 'A single table worth holding in mind together',
        body: `Kaana: ism in raf', khabar in nasb. Inna: ism in nasb, khabar in raf'. This exact contrast, already established directly across this unit's second topic, is what makes correctly identifying which specific group has entered a given sentence, kaana's family or inna's family, the single most important first step before assigning case to either noun.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `This unit's closing topic turns to a specific, narrower member of inna's own family, لَا, used not for simple negation but for a considerably stronger, categorical claim.`,
      },
    ],
  },

  'inna-4': {
    id: 'inna-4',
    unit: 'unit-11',
    title: "Laa an-Nafiyah lil-Jins",
    summary: 'A specific member of this same family used for categorical negation.',
    content: [
      {
        heading: 'A stronger claim than ordinary negation',
        body: `لَا an-nafiyah lil-jins, laa negating an entire category, makes a considerably stronger claim than ordinary negation. Rather than denying one specific instance, it denies the existence of an entire kind or category altogether, admitting no exception whatsoever.`,
      },
      {
        heading: 'Four specific conditions this exact usage requires',
        body: `This categorical reading of لَا applies only when four conditions hold together: the noun following لَا must be indefinite, nothing may separate لَا from this same noun, the khabar must also be indefinite, and لَا itself must not repeat. Meeting all four conditions confirms this specific reading rather than ordinary negation.`,
      },
      {
        heading: "Sharing inna's own basic mechanism",
        body: `Once these conditions are met, لَا behaves exactly like inna and her other sisters already covered across this unit's earlier topics: it pushes its own ism into nasb while leaving khabar in raf'. When the ism itself is a single, unmodified word, it is mabni on fatha rather than carrying ordinary tanween-marked nasb, a specific structural detail distinguishing this exact construction from an ordinary indefinite noun elsewhere in a sentence.`,
      },
      {
        heading: 'A directly Qur\u2019anic, widely known example',
        body: `لَا إِكْرَاهَ فِي الدِّينِ (lā ikrāha fi d-dīni), there is no compulsion in religion, illustrates this exact construction directly. إِكْرَاهَ, compulsion, is mabni on fatha as ism laa, indefinite and immediately following لَا with nothing separating them, denying not merely a single specific instance of compulsion but the entire category of compulsion in matters of religious belief altogether.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَا إِكْرَاهَ فِي الدِّينِ',
            transliteration: 'lā ikrāha fi d-dīni',
            english: 'There is no compulsion in religion.',
            source: 'Surah al-Baqarah, 2:256',
          },
        ],
      },
      {
        heading: "Closing this unit and turning to the object's further categories",
        body: `This unit has now covered inna and her sisters as a group of particles rather than verbs, their exact reversal of kaana's own effect, the resulting ism inna and khabar inna terminology, and لَا an-nafiyah lil-jins as a specific, conditioned member of this same family used for genuinely categorical negation. This course's twelfth unit turns to a different subject entirely: al-maf'ulat, several further categories of noun that, like al-maf'ul bihi already covered directly across this course's fourth unit, carry nasb case despite serving genuinely different grammatical functions from a direct object.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 12 - AL-MAF'ULAT: OTHER OBJECTS OF THE VERB (full content,
  // expanded)
  //
  // The maf'ul mutlaq's three purposes, and the haal-versus-tamyiz
  // distinction, checked against multiple current Nahw references
  // before writing.
  // -----------------------------------------------------------
  'mafool-1': {
    id: 'mafool-1',
    unit: 'unit-12',
    title: "Al-Maf'ul al-Mutlaq: The Absolute Object",
    summary: 'A noun derived from the verb itself, used for emphasis or description.',
    content: [
      {
        heading: 'Nasb belonging to more than al-maf\u2019ul bihi alone',
        body: `This course's fourth unit already established al-maf'ul bihi as one specific noun carrying nasb case. This unit examines several further categories of noun that also carry nasb, despite serving genuinely different grammatical functions from a direct object, beginning with al-maf'ul al-mutlaq, the absolute object.`,
      },
      {
        heading: 'A masdar drawn from the verb\u2019s own root',
        body: `Al-maf'ul al-mutlaq is a masdar, a verbal noun, sharing the exact same root as the verb already present in the sentence, placed in nasb specifically to serve one of three distinct purposes.`,
      },
      {
        heading: 'Purpose one: at-tawkid, pure emphasis',
        body: `حَفِظْتُ الدَّرْسَ حِفْظًا (hafiztu d-darsa hifzan), I memorized the lesson, a genuine memorization, uses حِفْظًا simply to reinforce that the memorizing genuinely, definitely occurred, adding no further descriptive detail beyond this emphasis itself.`,
        verses: [
          {
            type: 'example',
            arabic: 'حَفِظْتُ الدَّرْسَ حِفْظًا',
            transliteration: 'hafiztu d-darsa hifzan',
            english: 'I memorized the lesson, a genuine memorization.',
            source: "Maf'ul mutlaq for tawkid: pure emphasis",
          },
        ],
      },
      {
        heading: 'Purpose two: bayan an-naw\u2019, specifying manner',
        body: `ضَرَبْتُ ضَرْبًا شَدِيدًا (darabtu darban shadīdan), I struck a severe strike, adds شَدِيدًا describing the strike further, specifying its own particular manner rather than simply confirming that striking occurred at all.`,
        verses: [
          {
            type: 'example',
            arabic: 'ضَرَبْتُ ضَرْبًا شَدِيدًا',
            transliteration: 'darabtu darban shadīdan',
            english: 'I struck a severe strike.',
            source: "Maf'ul mutlaq for bayan an-naw': specifying manner",
          },
        ],
      },
      {
        heading: 'Purpose three: bayan al-\u2019adad, specifying number',
        body: `ضَرَبْتُ ضَرْبَتَيْنِ (darabtu darbatayni), I struck two strikes, uses the dual form of the same masdar specifically to state how many times the action occurred, rather than describing its manner or simply emphasizing it.`,
        verses: [
          {
            type: 'example',
            arabic: 'ضَرَبْتُ ضَرْبَتَيْنِ',
            transliteration: 'darabtu darbatayni',
            english: 'I struck two strikes.',
            source: "Maf'ul mutlaq for bayan al-'adad: specifying number",
          },
        ],
      },
    ],
  },

  'mafool-2': {
    id: 'mafool-2',
    unit: 'unit-12',
    title: "Al-Maf'ul li Ajlihi: The Object of Reason",
    summary: 'A noun explaining why an action was actually done.',
    content: [
      {
        heading: 'A masdar answering a genuinely different question',
        body: `Al-maf'ul li ajlihi is also a masdar carrying nasb, but unlike al-maf'ul al-mutlaq, already covered directly in this unit's previous topic, it does not share the main verb's own root. Instead, it answers a specific question the main verb itself leaves open: why did this action actually happen.`,
      },
      {
        heading: 'A worked example',
        body: `قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ (qumtu ijlālan lil-ustādhi), I stood out of respect for the teacher, uses إِجْلَالًا, respect, to explain directly why the standing occurred, a genuine motivating cause rather than a description of the standing's own manner or number.`,
        verses: [
          {
            type: 'example',
            arabic: 'قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ',
            transliteration: 'qumtu ijlālan lil-ustādhi',
            english: 'I stood out of respect for the teacher.',
            source: "Maf'ul li ajlihi: explaining why the action occurred",
          },
        ],
      },
      {
        heading: 'A genuine requirement worth naming directly',
        body: `Al-maf'ul li ajlihi must share the exact same doer as the main verb itself. In this same example, the same person both stood and held this respect, a requirement distinguishing this specific category from a masdar that might otherwise simply appear elsewhere in a sentence without actually explaining the main verb's own motivation.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `This unit's next topic turns to al-maf'ul fihi, a further nasb-carrying category answering neither why an action occurred nor in what manner, but specifically when or where.`,
      },
    ],
  },

  'mafool-3': {
    id: 'mafool-3',
    unit: 'unit-12',
    title: "Al-Maf'ul Fihi: Time and Place",
    summary: 'Adverbial nouns expressing when or where an action occurred.',
    content: [
      {
        heading: 'Also called az-zarf, the adverbial container',
        body: `Al-maf'ul fihi, also called az-zarf, carries nasb case while expressing either the specific time or the specific place in which an action occurred, dividing accordingly into zarf zaman, an adverb of time, and zarf makan, an adverb of place.`,
      },
      {
        heading: 'A worked example of zarf zaman',
        body: `سَافَرْتُ صَبَاحًا (sāfartu sabāhan), I traveled in the morning, uses صَبَاحًا to specify exactly when the traveling occurred.`,
        verses: [
          {
            type: 'example',
            arabic: 'سَافَرْتُ صَبَاحًا',
            transliteration: 'sāfartu sabāhan',
            english: 'I traveled in the morning.',
            source: 'Zarf zaman: specifying when the action occurred',
          },
        ],
      },
      {
        heading: 'A worked example of zarf makan',
        body: `جَلَسْتُ أَمَامَ البَيْتِ (jalastu amāma l-bayti), I sat in front of the house, uses أَمَامَ البَيْتِ, itself an idafah construct already covered directly across this course's eighth unit, to specify exactly where the sitting occurred.`,
        verses: [
          {
            type: 'example',
            arabic: 'جَلَسْتُ أَمَامَ البَيْتِ',
            transliteration: 'jalastu amāma l-bayti',
            english: 'I sat in front of the house.',
            source: 'Zarf makan: specifying where the action occurred',
          },
        ],
      },
      {
        heading: "Three genuinely different questions, three genuinely different answers",
        body: `Al-maf'ul al-mutlaq, al-maf'ul li ajlihi, and al-maf'ul fihi, covered respectively across this unit's first three topics, all carry the exact same nasb case while answering three entirely different questions about the same underlying action: how or how much, why, and when or where.`,
      },
    ],
  },

  'mafool-4': {
    id: 'mafool-4',
    unit: 'unit-12',
    title: 'Al-Haal and At-Tamyiz',
    summary: 'Describing circumstance and resolving ambiguity, in two distinct ways.',
    content: [
      {
        heading: 'Al-haal: describing a known entity\u2019s state',
        body: `Al-haal describes the temporary state or condition of an entity already identified in the sentence, called sahib al-haal, specifically at the moment the action occurs. Al-haal itself must be indefinite and carries nasb, while its own sahib al-haal must be definite.`,
      },
      {
        heading: 'A worked example',
        body: `جَاءَ زَيْدٌ رَاكِبًا (jā\u2019a Zaydun rākiban), Zayd came riding, uses رَاكِبًا, indefinite and in nasb, to describe زَيْدٌ, definite, specifically in his temporary condition of riding at the moment of arrival, rather than as a permanent characteristic of who he is.`,
        verses: [
          {
            type: 'example',
            arabic: 'جَاءَ زَيْدٌ رَاكِبًا',
            transliteration: "jā\u2019a Zaydun rākiban",
            english: 'Zayd came riding.',
            source: 'Haal (rākiban) describing sahib al-haal (Zaydun)',
          },
        ],
      },
      {
        heading: 'At-tamyiz: resolving genuine ambiguity',
        body: `At-tamyiz is a different category entirely, a single, indefinite noun in nasb that resolves genuine ambiguity in a preceding word, most commonly a number or measurement whose own referent would otherwise remain unclear.`,
      },
      {
        heading: 'A worked example',
        body: `عِنْدِي عِشْرُونَ كِتَابًا ('indi 'ishrūna kitāban), I have twenty books, uses كِتَابًا to resolve exactly what "twenty" actually refers to, since the number alone leaves this genuinely unclear without it.`,
        verses: [
          {
            type: 'example',
            arabic: 'عِنْدِي عِشْرُونَ كِتَابًا',
            transliteration: "'indi 'ishrūna kitāban",
            english: 'I have twenty books.',
            source: "Tamyiz (kitāban) resolving the ambiguity of 'ishrūna",
          },
        ],
      },
      {
        heading: 'A precise, direct contrast worth holding in mind together',
        body: `Al-haal clarifies the actual situation or manner of an already known, identified entity, while at-tamyiz clarifies what an otherwise ambiguous preceding word genuinely refers to in the first place. رَاكِبًا tells a reader something new about زَيْدٌ, already fully identified; كِتَابًا tells a reader what عِشْرُونَ itself actually means, information the number alone could never supply.`,
      },
      {
        heading: "Closing this unit and turning to the mudari' verb's own governors",
        body: `This unit has now covered five further categories of noun carrying nasb, al-maf'ul al-mutlaq, al-maf'ul li ajlihi, al-maf'ul fihi, al-haal, and at-tamyiz, each answering a genuinely different question despite sharing this exact same case. This course's thirteenth unit turns directly to the mudari' verb's own i'rab in full depth, examining exactly which specific particles push it into nasb or jazm, already introduced in outline across this course's fifth unit.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 13 - AL-FI'L AL-MUDARI' AND ITS GOVERNORS (full content,
  // expanded)
  //
  // The four core nawasib, the four core single-verb jawazim, the
  // conditional structure, and the five verbs' fixed-nun mechanism
  // checked against multiple current Nahw references before
  // writing.
  // -----------------------------------------------------------
  'mudari-1': {
    id: 'mudari-1',
    unit: 'unit-13',
    title: "I'rab of the Mudari' Verb",
    summary: "Why the present-tense verb, unlike the past tense, actually takes i'rab.",
    content: [
      {
        heading: "Returning directly to this course's fifth unit",
        body: `This course's fifth unit already established al-fi'l al-mudari' as the only one of the three verb forms actually taking i'rab, remaining in its own default raf' state unless a specific particle intervenes. This unit now examines exactly which particles cause that intervention, and how.`,
      },
      {
        heading: 'The ordinary sign of raf\u2019 for the mudari\u2019 verb',
        body: `An ordinary mudari' verb signals raf' through damma, يَكْتُبُ (yaktubu), he writes, already used directly in this course's fifth unit as the clearest example of this default state.`,
      },
      {
        heading: "A specific group requiring its own separate treatment",
        body: `A specific group of mudari' forms, called al-af'al al-khamsah, the five verbs, carries an attached pronoun suffix, و الجماعة (the "they/you all" waw), يَاء المُخَاطَبَة (the "you, feminine" ya), or أَلِف الاثنين (the "you/they two" alif). يَفْعَلُونَ (yaf'alūna), they do, and تَفْعَلِينَ (taf'alīna), you (feminine) do, both illustrate this group directly.`,
      },
      {
        heading: 'A different sign entirely for this specific group',
        body: `Rather than damma, these five specific forms signal their own raf' through a fixed, retained نَ at the very end of the word. Once nasb or jazm applies instead, examined directly across this unit's next two topics, this same نَ is dropped entirely, a pattern genuinely parallel to the sound masculine plural's own noon-dropping already covered directly across this course's sixth and eighth units.`,
      },
      {
        heading: "Setting up this unit's remaining topics",
        body: `Having now established both the ordinary default raf' state and this specific five-verb exception, this unit's next topic turns directly to the particles genuinely capable of pushing an ordinary mudari' verb out of raf' entirely, into nasb instead.`,
      },
    ],
  },

  'mudari-2': {
    id: 'mudari-2',
    unit: 'unit-13',
    title: "Nawasib al-Fi'l al-Mudari'",
    summary: 'The specific particles that push a present-tense verb into nasb.',
    content: [
      {
        heading: 'Four core particles causing nasb',
        body: `Four particles are consistently recognized as nawasib, nasb-causers: أَنْ (an, to, introducing a subordinate action), لَنْ (lan, will never, already used directly in this course's fifth unit), كَيْ (kay, in order to), and إِذَنْ (idhan, then, in that case).`,
      },
      {
        heading: 'A direct callback to material already covered',
        body: `لَنْ أَذْهَبَ (lan adhhaba), I will never go, already introduced directly in this course's fifth unit, illustrates لَنْ pushing يَذْهَبَ out of its default raf' and into nasb, marked here through fatha.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَنْ أَذْهَبَ',
            transliteration: 'lan adhhaba',
            english: 'I will never go.',
            source: "Lan pushing the mudari' verb into nasb",
          },
        ],
      },
      {
        heading: 'A second example using أَنْ',
        body: `أُرِيدُ أَنْ أَتَعَلَّمَ (urīdu an ata\u2019allama), I want to learn, uses أَنْ to introduce a subordinate action, the learning itself, pushing أَتَعَلَّمَ into nasb in the exact same way لَنْ already did in this topic's previous example.`,
        verses: [
          {
            type: 'example',
            arabic: 'أُرِيدُ أَنْ أَتَعَلَّمَ',
            transliteration: "urīdu an ata\u2019allama",
            english: 'I want to learn.',
            source: "An introducing a subordinate action, pushing the mudari' verb into nasb",
          },
        ],
      },
      {
        heading: 'How this sign shifts for the five verbs',
        body: `For an ordinary mudari' verb, nasb is marked through fatha. For al-af'al al-khamsah, already introduced directly in this unit's first topic, nasb is instead marked by dropping the same fixed نَ that otherwise signals their own raf' state.`,
      },
      {
        heading: "Setting up this unit's next topic",
        body: `Having now covered the particles pushing a mudari' verb into nasb, this unit's next topic turns to a parallel, but genuinely distinct, set of particles pushing it into jazm instead.`,
      },
    ],
  },

  'mudari-3': {
    id: 'mudari-3',
    unit: 'unit-13',
    title: "Jawazim al-Fi'l al-Mudari'",
    summary: 'The specific particles that push a present-tense verb into jazm.',
    content: [
      {
        heading: 'Four core particles affecting a single verb',
        body: `Four particles are consistently recognized as jawazim affecting a single mudari' verb: لَمْ (lam, did not, already used directly in this course's fifth unit), لَمَّا (lammā, not yet), لَام الأَمْر (lam al-amr, the lam of command, for third-person commands), and لَا النَّاهِيَة (lā an-nāhiyah, the lā of prohibition, for direct negative commands).`,
      },
      {
        heading: 'A direct callback to material already covered',
        body: `لَمْ يَذْهَبْ (lam yadhhab), he did not go, already introduced directly in this course's fifth unit, illustrates لَمْ pushing يَذْهَبْ into jazm, marked here through sukoon, the complete absence of a final vowel.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَمْ يَذْهَبْ',
            transliteration: 'lam yadhhab',
            english: 'He did not go.',
            source: "Lam pushing the mudari' verb into jazm",
          },
        ],
      },
      {
        heading: 'A second example using لَا النَّاهِيَة',
        body: `لَا تَكْذِبْ (lā takdhib), do not lie, uses لَا specifically for direct prohibition, pushing تَكْذِبْ into jazm in the exact same way لَمْ already did in this topic's previous example.`,
        verses: [
          {
            type: 'example',
            arabic: 'لَا تَكْذِبْ',
            transliteration: 'lā takdhib',
            english: 'Do not lie.',
            source: "Laa an-nahiyah pushing the mudari' verb into jazm",
          },
        ],
      },
      {
        heading: 'A distinction worth naming directly',
        body: `This لَا, causing jazm through direct prohibition, is an entirely different word from لَا an-nafiyah lil-jins, already covered directly across this course's eleventh unit for categorical negation of a noun. The same three letters serve two genuinely distinct grammatical functions depending on whether a noun or a mudari' verb follows.`,
      },
      {
        heading: "Setting up this unit's closing topic",
        body: `Beyond these four particles, each affecting only a single verb, a further category of jazm-causing particles affects two verbs at once, examined directly in this unit's closing topic on conditional sentences.`,
      },
    ],
  },

  'mudari-4': {
    id: 'mudari-4',
    unit: 'unit-13',
    title: 'Ash-Shart: Conditional Sentences',
    summary: 'How Arabic builds if-then sentences using jazm.',
    content: [
      {
        heading: 'A jazm-causer affecting two verbs at once',
        body: `Unlike the four jazm-causers already covered directly in this unit's previous topic, each affecting a single verb, إِنْ (in, if), the primary conditional particle, places two separate mudari' verbs into jazm within one single sentence: al-fi'l ash-shart, the condition itself, and jawab ash-shart, the response or consequence.`,
      },
      {
        heading: 'A direct callback to material already covered',
        body: `إِنْ تَجْتَهِدْ تَنْجَحْ (in tajtahid tanjah), if you strive, you will succeed, already introduced directly in this course's fifth unit, illustrates this exact structure: تَجْتَهِدْ, the condition, and تَنْجَحْ, the response, both carrying jazm because of the single إِنْ governing them together.`,
        verses: [
          {
            type: 'example',
            arabic: 'إِنْ تَجْتَهِدْ تَنْجَحْ',
            transliteration: 'in tajtahid tanjah',
            english: 'If you strive, you will succeed.',
            source: "In placing both the condition and response into jazm",
          },
        ],
      },
      {
        heading: 'A brief, honest note on further conditional words',
        body: `Beyond إِنْ itself, classical Nahw recognizes several further conditional words sharing this exact same two-verb jazm effect, مَنْ (man, whoever, for rational beings) and مَا (mā, whatever, for non-rational things) among them. This unit's own scope covers إِنْ specifically as the clearest, most fundamental case of this shared structure.`,
      },
      {
        heading: "Closing this unit and closing this course's own treatment of i'rab itself",
        body: `This unit has now covered the mudari' verb's own i'rab, including the five verbs' distinct fixed-nun pattern, the specific particles causing nasb, the specific particles causing jazm, both for a single verb and, through ash-shart, for two verbs at once. This completes this course's full treatment of i'rab across every word category examined since this course's fifth unit. This course's fourteenth and final unit turns to several remaining sentence structures genuinely worth knowing, before closing with real, connected Arabic text drawing on everything this entire course has covered.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 14 - BEYOND THE BASICS (full content, expanded)
  //
  // The munada's two governing patterns (mabni on damma for a
  // single specific name; genuine mansub for a mudaf construction)
  // checked against multiple current Nahw references before
  // writing. This unit's closing topic is a genuine synthesis,
  // parsing a short original sentence using rules drawn from across
  // this entire fourteen-unit course, rather than introducing
  // further new material.
  // -----------------------------------------------------------
  'beyond-1': {
    id: 'beyond-1',
    unit: 'unit-14',
    title: "Sentences with a Grammatical Position (Mahalla l-I\u2019rab)",
    summary: 'How an entire sentence can itself function as a single grammatical part.',
    content: [
      {
        heading: "Returning directly to a structure this course has already used repeatedly",
        body: `This course's third unit already showed a full jumlah functioning as khabar, and its ninth and twelfth units showed sentences serving other roles as well. A jumlah itself carries no i'rab of its own, yet it can still occupy mahalla min al-i'rab, a grammatical position, exactly as though it were a single, ordinary word carrying that specific case.`,
      },
      {
        heading: 'A worked example, already familiar from this course\u2019s second and third units',
        body: `زَيْدٌ يَكْتُبُ (Zaydun yaktubu), Zayd is writing, already introduced directly across this course's second and third units, contains يَكْتُبُ, a complete jumlah fi'liyyah in its own right, occupying the position of khabar. Grammarians describe this precisely as jumlah fi'liyyah fi mahalli raf' khabar, a verbal sentence in the position of raf', functioning as khabar.`,
        verses: [
          {
            type: 'qaidah',
            arabic: 'الجُمْلَةُ الوَاقِعَةُ خَبَرًا تَكُونُ فِي مَحَلِّ رَفْعٍ',
            transliteration: "al-jumlatu l-wāqi\u2019atu khabaran takūnu fī mahalli raf\u2019",
            english: 'A sentence functioning as khabar occupies the position of raf\u2019.',
            source: "Mahalla l-i'rab applied to khabar jumlah",
          },
        ],
      },
      {
        heading: 'The same principle applied to a different role',
        body: `جَاءَ زَيْدٌ يَضْحَكُ (jā\u2019a Zaydun yadhaku), Zayd came laughing, contains يَضْحَكُ, again a complete jumlah fi'liyyah, this time occupying the position of al-haal, already covered directly across this course's twelfth unit. Here it is described as jumlah fi'liyyah fi mahalli nasb haal.`,
        verses: [
          {
            type: 'example',
            arabic: 'جَاءَ زَيْدٌ يَضْحَكُ',
            transliteration: "jā\u2019a Zaydun yadhaku",
            english: 'Zayd came laughing.',
            source: "Jumlah fi mahalli nasb haal",
          },
        ],
      },
      {
        heading: 'Why naming this concept explicitly matters, even this late in the course',
        body: `A reader who has already correctly identified khabar jumlah or haal jumlah in practice, as this course's third and twelfth units already demonstrated, gains real precision from also knowing the formal term describing what is actually happening: a sentence, though itself mabni in this specific sense, still participates fully in the surrounding sentence's own i'rab structure through the specific position it occupies.`,
      },
    ],
  },

  'beyond-2': {
    id: 'beyond-2',
    unit: 'unit-14',
    title: "An-Nida': The Vocative",
    summary: 'The specific grammar of directly addressing someone or something.',
    content: [
      {
        heading: 'Directly addressing someone or something',
        body: `An-nida' uses a dedicated particle, most commonly يَا (yā, O), to address someone or something directly, the noun addressed called al-munada.`,
      },
      {
        heading: 'A single, specific name: mabni on damma',
        body: `When al-munada is a single, specific name or title, it drops any tanween it would otherwise carry and takes damma alone, technically described as mabni on this damma rather than genuinely inflecting. يَا زَيْدُ (yā Zaydu), O Zayd, illustrates this directly: زَيْدٌ, ordinarily carrying tanween, loses it entirely once addressed this way.`,
        verses: [
          {
            type: 'example',
            arabic: 'يَا زَيْدُ',
            transliteration: 'yā Zaydu',
            english: 'O Zayd!',
            source: 'Munada mufrad, mabni on damma',
          },
        ],
      },
      {
        heading: 'A mudaf munada: genuine nasb instead',
        body: `When al-munada is itself mudaf, already covered directly across this course's eighth unit, it takes genuine nasb instead, marked through fatha exactly as an ordinary mudaf would elsewhere in a sentence. يَا عَبْدَ اللَّهِ (yā \u2019Abda Allāhi), O Abdullah, illustrates this directly: عَبْدَ, mudaf to اللَّهِ, carries real nasb rather than the simple damma already seen in this topic's previous example.`,
        verses: [
          {
            type: 'example',
            arabic: 'يَا عَبْدَ اللَّهِ',
            transliteration: "yā \u2019Abda Allāhi",
            english: 'O Abdullah!',
            source: 'Munada mudaf, genuine nasb',
          },
        ],
      },
      {
        heading: 'A widely recognized example worth naming directly',
        body: `يَا رَبِّ (yā Rabbi), O my Lord, remains one of the most widely recognized instances of nida' across Islamic devotional language, رَبِّ here carrying an attached pronoun referring to the speaker, "my Lord" specifically.`,
      },
      {
        heading: "Why this two-way distinction matters practically",
        body: `Correctly identifying whether a specific munada is a simple, single name or a mudaf construction determines directly which of these two patterns actually applies, exactly the same kind of structural identification this course has required throughout, most recently in distinguishing kaana's family from inna's family across this course's tenth and eleventh units.`,
      },
    ],
  },

  'beyond-3': {
    id: 'beyond-3',
    unit: 'unit-14',
    title: "Al-Istifham: Interrogative Structures",
    summary: 'How Arabic actually forms different kinds of questions.',
    content: [
      {
        heading: "Two particles for yes-or-no questions",
        body: `هَلْ (hal), already introduced directly in this course's first unit as an example of a harf, and أَ (the hamzat al-istifham), both introduce a straightforward yes-or-no question. أَ carries one further capacity هَلْ does not: offering a direct choice between two named options, أَزَيْدٌ عِنْدَكَ أَمْ عَمْرٌو (is Zayd with you, or 'Amr).`,
      },
      {
        heading: "A set of specific question words for specific information",
        body: `Beyond simple yes-or-no questions, Arabic uses several dedicated words for specific kinds of information: مَنْ (man, who), مَا (mā, what), مَتَى (matā, when), أَيْنَ (ayna, where), كَيْفَ (kayfa, how), and لِمَاذَا (limādhā, why).`,
      },
      {
        heading: 'A direct callback to this course\u2019s twelfth unit',
        body: `كَمْ (kam, how many) requires its own tamyiz to follow, already covered directly across this course's twelfth unit, exactly paralleling عِشْرُونَ كِتَابًا from that same unit. كَمْ كِتَابًا عِنْدَكَ (kam kitāban 'indaka), how many books do you have, uses كِتَابًا to resolve precisely what كَمْ itself is actually asking about.`,
        verses: [
          {
            type: 'example',
            arabic: 'كَمْ كِتَابًا عِنْدَكَ',
            transliteration: "kam kitāban 'indaka",
            english: 'How many books do you have?',
            source: "Kam requiring tamyiz, exactly paralleling this course's twelfth unit",
          },
        ],
      },
      {
        heading: 'A single grammatical thread running through this entire unit',
        body: `Mahalla l-i'rab, already covered directly in this unit's first topic, nida', and istifham each extend a structure or rule this course has already established elsewhere, sentences occupying positions, mudaf constructions, and tamyiz respectively, rather than introducing entirely disconnected new material.`,
      },
    ],
  },

  'beyond-4': {
    id: 'beyond-4',
    unit: 'unit-14',
    title: 'Reading and Parsing: Putting It All Together',
    summary: 'Applying every rule this course has covered to real, connected Arabic text.',
    content: [
      {
        heading: 'A closing topic, not a new lesson',
        body: `This closing topic introduces no new rules of its own. Instead, it walks through a single, connected short passage, parsing it piece by piece using rules drawn from across this entire course, exactly the skill every one of this course's fourteen units has been building toward.`,
      },
      {
        heading: 'The passage itself',
        body: `إِنَّ الطَّالِبَ الَّذِي يَجْتَهِدُ فِي دُرُوسِهِ سَيَنْجَحُ، وَكَانَ أَبُوهُ سَعِيدًا بِذَلِكَ, inna t-tāliba lladhī yajtahidu fī durūsihi sa-yanjahu, wa kāna abūhu sa\u2019īdan bidhālika, indeed the student who strives in his lessons will succeed, and his father was happy about that.`,
        verses: [
          {
            type: 'example',
            arabic: 'إِنَّ الطَّالِبَ الَّذِي يَجْتَهِدُ فِي دُرُوسِهِ سَيَنْجَحُ، وَكَانَ أَبُوهُ سَعِيدًا بِذَلِكَ',
            transliteration: "inna t-tāliba lladhī yajtahidu fī durūsihi sa-yanjahu, wa kāna abūhu sa\u2019īdan bidhālika",
            english: 'Indeed, the student who strives in his lessons will succeed, and his father was happy about that.',
            source: 'A constructed passage drawing on rules from across this entire course',
          },
        ],
      },
      {
        heading: 'Parsing the first half, piece by piece',
        body: `إِنَّ, already covered across this course's eleventh unit, pushes الطَّالِبَ into nasb as ism inna. الَّذِي, already covered directly in this course's seventh unit as one of the six categories of ma'rifah, introduces a relative clause functioning as na't, already covered across this course's ninth unit, describing الطَّالِبَ. Within that clause, يَجْتَهِدُ is an ordinary mudari' verb in its default raf', already established in this course's fifth and thirteenth units, with فِي دُرُوسِهِ, a shibh jumlah already covered across this course's third and eighth units, specifying where this striving occurs. سَيَنْجَحُ, carrying the future marker already covered in this course's first unit, functions as khabar inna, remaining in raf' exactly as this course's eleventh unit established.`,
      },
      {
        heading: 'Parsing the second half',
        body: `وَ, a harf al-'atf already covered directly across this course's ninth unit, joins this second clause to the first. كَانَ, already covered across this course's tenth unit, keeps أَبُوهُ, its own ism, in raf', while shifting سَعِيدًا, its khabar, into nasb, exactly the pattern that unit established. بِذَلِكَ, a harf jarr together with its own majrur noun, already covered across this course's eighth unit, completes the sentence as a further shibh jumlah.`,
      },
      {
        heading: 'What this single passage actually demonstrates',
        body: `Nearly every major structure this course has covered appears within these two connected clauses: inna's reversed case assignment, a relative clause functioning as na't, mudari' verbs in their default state, shibh jumlah as an adverbial complement, al-'atf joining two clauses, and kaana's own case assignment. None of these rules were memorized in isolation; each became available specifically because this course built them in sequence, one genuinely depending on the last.`,
      },
      {
        heading: 'Closing this course',
        body: `This course opened, back in its very first unit, with a single misplaced vowel changing a Qur'anic verse's meaning, the exact reason Nahw was systematized at all. Fourteen units later, having traced the sentence itself, its every part, its case system and the specific signs marking it, and the further structures extending it, this same precision is now available directly: not as isolated facts to recall, but as a single, connected system capable of resolving real Arabic text with genuine confidence rather than guesswork.`,
      },
    ],
  },
};