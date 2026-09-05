// src/data/arabiyyahClassQuizzes.js
//
// Unit-gating quizzes for Arabiyyah Class. Each unit's array holds 30
// multiple-choice questions. A learner must score at least 25/30 to
// pass a unit's quiz and unlock the next unit. Same gating pattern
// as the other four classes.
//
// STATUS: unit-1 complete (30 questions). Remaining units' quizzes
// will be added alongside their lesson content.

export const ARABIYYAHCLASS_PASS_THRESHOLD = 25; // out of 30

export const ARABIYYAHCLASS_UNIT_QUIZZES = {
  'unit-1': [
    {
      id: 'ar1q1',
      question: 'According to the lesson, an-Nahw is the science that governs:',
      options: [
        'Only Arabic vocabulary and word meanings',
        'How Arabic words change form and combine into sentences, most visibly through i\u2019rab',
        'Only the pronunciation of individual letters',
        'Only poetry and literary style',
      ],
      correctIndex: 1,
      explanation: 'I\u2019rab is the short vowel or letter appearing at the end of a word that signals its grammatical role.',
    },
    {
      id: 'ar1q2',
      question: 'According to the lesson, the incident traditionally traced as Nahw\u2019s origin involved:',
      options: [
        'A dispute over Arabic poetry',
        'A reciter mispronouncing a single final vowel in Surah at-Tawbah, changing the verse\u2019s meaning',
        'A disagreement about vocabulary between two tribes',
        'The invention of the Arabic alphabet itself',
      ],
      correctIndex: 1,
      explanation: 'This single vowel change altered the meaning of Surah at-Tawbah 9:3 in a genuinely serious way.',
    },
    {
      id: 'ar1q3',
      question: 'In the correct reading of 9:3, رَسُولُهُ carries a damma, marking it as:',
      options: [
        'Jarr, genitive, attached to "the polytheists"',
        'Raf\u2019, nominative, a second subject alongside Allah',
        'Nasb, accusative, the object of the verb',
        'Jazm, jussive',
      ],
      correctIndex: 1,
      explanation: 'This means "His Messenger" is equally disassociated from the polytheists, matching the verse\u2019s intended meaning.',
    },
    {
      id: 'ar1q4',
      question: 'In the mispronounced reading, رَسُولِهِ instead carries a kasra, marking it as:',
      options: [
        'Raf\u2019, nominative',
        'Jarr, genitive, wrongly attaching it to "the polytheists"',
        'Nasb, accusative',
        'This detail is not mentioned in the lesson',
      ],
      correctIndex: 1,
      explanation: 'This produces a reading wrongly suggesting Allah is disassociated from His own Messenger as well.',
    },
    {
      id: 'ar1q5',
      question: 'According to the lesson, upon learning of this error, \u2018Ali ibn Abi Talib is widely recorded as instructing:',
      options: [
        'The reciter to memorize the Qur\u2019an again from scratch',
        'Abu al-Aswad ad-Du\u2019ali to establish clear rules protecting the language from precisely this kind of error',
        'A complete ban on non-native speakers reciting the Qur\u2019an',
        'The creation of a new Arabic alphabet',
      ],
      correctIndex: 1,
      explanation: 'Abu al-Aswad is consistently credited as the first to systematize what would become the science of Nahw.',
    },
    {
      id: 'ar1q6',
      question: 'According to the lesson, why does this single story set the tone for this entire course?',
      options: [
        'It shows Nahw is a purely academic exercise with no real stakes',
        'It demonstrates that a single short vowel is very often the entire difference between one meaning and its near opposite',
        'It proves that Arabic grammar has no fixed rules',
        'It shows that vocabulary matters more than grammar',
      ],
      correctIndex: 1,
      explanation: 'Nahw is the specific system that makes precise, unambiguous meaning possible at all.',
    },
    {
      id: 'ar1q7',
      question: 'Arabic grammarians define al-kalam as an utterance that is:',
      options: [
        'A single word, however meaningful',
        'Composed of two or more words, conveying a complete, self-sufficient meaning, according to Arabic convention',
        'Any sound made by a speaker of Arabic',
        'Only found in the Qur\u2019an itself',
      ],
      correctIndex: 1,
      explanation: 'Every one of these conditions matters for a phrase to qualify as kalam in this technical sense.',
    },
    {
      id: 'ar1q8',
      question: 'According to the lesson, the condition of being "murakkab" means kalam must be:',
      options: [
        'Written down rather than spoken',
        'Composed of at least two actual Arabic words joined together',
        'Related to religious topics specifically',
        'Grammatically complex',
      ],
      correctIndex: 1,
      explanation: 'A single word alone, such as كِتَابٌ, does not itself qualify as kalam under this technical definition.',
    },
    {
      id: 'ar1q9',
      question: 'According to the lesson, جَاءَ مُحَمَّدٌ (Muhammad came) satisfies the condition of ifadah because:',
      options: [
        'It contains a proper name',
        'A listener understands the full statement immediately and needs nothing further',
        'It is grammatically complex',
        'It uses the definite article',
      ],
      correctIndex: 1,
      explanation: 'By contrast, إِنْ حَضَرَ مُحَمَّدٌ leaves the listener genuinely waiting for what would follow.',
    },
    {
      id: 'ar1q10',
      question: 'According to the lesson, the condition of "bil-wad\u2019" means kalam must use:',
      options: [
        'Only formal, classical vocabulary',
        'Actual Arabic words according to the language\u2019s own established conventions',
        'Only words found in the Qur\u2019an',
        'Invented sounds unique to the speaker',
      ],
      correctIndex: 1,
      explanation: 'This confirms that Nahw concerns itself specifically with genuine Arabic speech.',
    },
    {
      id: 'ar1q11',
      question: 'Every single word in Arabic belongs to exactly one of which three categories?',
      options: [
        'Ism, fi\u2019l, and harf', 'Noun, adjective, and adverb', 'Past, present, and future', 'Masculine, feminine, and neuter'
      ],
      correctIndex: 0,
      explanation: 'This same three-way division traces back to Abu al-Aswad\u2019s own original systemization.',
    },
    {
      id: 'ar1q12',
      question: 'According to the lesson, al-ism refers to a person, place, thing, quality, or concept:',
      options: [
        'While always indicating a specific time',
        'Entirely without indicating any specific time on its own',
        'Only when preceded by a preposition',
        'Only in its definite form',
      ],
      correctIndex: 1,
      explanation: 'رَجُلٌ, مَكَّةُ, and عِلْمٌ are all asmaa\u2019; none of them tells a listener when anything happened.',
    },
    {
      id: 'ar1q13',
      question: 'According to the lesson, what critically distinguishes al-fi\u2019l from al-ism?',
      options: [
        'Al-fi\u2019l always indicates a specific time frame as part of its own basic meaning',
        'Al-fi\u2019l can never be combined with a harf',
        'Al-fi\u2019l has no meaning at all on its own',
        'Al-fi\u2019l is always definite',
      ],
      correctIndex: 0,
      explanation: 'كَتَبَ indicates completed past action; يَكْتُبُ indicates present or ongoing action; اُكْتُبْ indicates a command.',
    },
    {
      id: 'ar1q14',
      question: 'According to the lesson, al-harf carries:',
      options: [
        'Independent meaning even in isolation, like an ism',
        'No independent meaning of its own at all, only becoming meaningful once joined to an ism or fi\u2019l',
        'A built-in time reference like a fi\u2019l',
        'The same grammatical behavior as an ism',
      ],
      correctIndex: 1,
      explanation: 'فِي, مِنْ, and وَ are all huruf: none of them means anything standing entirely alone.',
    },
    {
      id: 'ar1q15',
      question: 'According to the lesson, why does correctly identifying ism, fi\u2019l, or harf matter so much?',
      options: [
        'It has no real bearing on the rest of Nahw',
        'Every rule this course covers depends on first correctly identifying which of the three a given word is',
        'It only matters for reading poetry',
        'It only matters for spoken Arabic, not written',
      ],
      correctIndex: 1,
      explanation: 'This includes how a word is voweled and what role it plays in a sentence.',
    },
    {
      id: 'ar1q16',
      question: 'According to the lesson, any word that can accept اَلْ, the definite article, is necessarily:',
      options: [
        'A harf', 'An ism', 'A fi\u2019l in the past tense', 'A fi\u2019l in the present tense'
      ],
      correctIndex: 1,
      explanation: 'الكِتَابُ confirms كِتَابٌ as an ism directly, since neither a fi\u2019l nor a harf can ever accept this article.',
    },
    {
      id: 'ar1q17',
      question: 'According to the lesson, tanween is:',
      options: [
        'A future time marker for verbs',
        'A doubled final vowel mark producing an "n" sound, confirming a word as an ism',
        'A marker used only for feminine verbs',
        'A sign that a word is a harf',
      ],
      correctIndex: 1,
      explanation: 'كِتَابٌ carries tanween directly on its final letter, immediately confirming it as an ism.',
    },
    {
      id: 'ar1q18',
      question: 'According to the lesson, a word that can be directly preceded by a harf jarr, or that can serve as the second part of an idafah construct, is confirmed as:',
      options: [
        'A harf', 'An ism', 'A fi\u2019l', 'None of these categories'
      ],
      correctIndex: 1,
      explanation: 'فِي البَيْتِ and كِتَابُ الطَّالِبِ both confirm the following word as an ism through these constructions.',
    },
    {
      id: 'ar1q19',
      question: 'According to the lesson, a word that can be directly preceded by قَدْ is confirmed as:',
      options: [
        'An ism', 'A fi\u2019l', 'A harf', 'This sign applies to all three categories equally'
      ],
      correctIndex: 1,
      explanation: 'قَدْ كَتَبَ, he has indeed written, confirms كَتَبَ as a fi\u2019l, since qad attaches specifically to verbs.',
    },
    {
      id: 'ar1q20',
      question: 'According to the lesson, the future markers سَـ and سَوْفَ attach specifically to:',
      options: [
        'The past-tense (madi) verb form',
        'The present-tense (mudari\u2019) verb form',
        'Any ism',
        'Any harf',
      ],
      correctIndex: 1,
      explanation: 'سَيَكْتُبُ, he will write, confirms يَكْتُبُ as a fi\u2019l in its mudari\u2019 form.',
    },
    {
      id: 'ar1q21',
      question: 'According to the lesson, the sakinah taa marker attached to a verb\u2019s end indicates:',
      options: [
        'Future action',
        'A feminine subject, and confirms the verb as being in its past-tense (madi) form',
        'A command',
        'That the word is actually a harf',
      ],
      correctIndex: 1,
      explanation: 'كَتَبَتْ, she wrote, confirms كَتَبَ as a fi\u2019l through this specific feminine marker.',
    },
    {
      id: 'ar1q22',
      question: 'According to the lesson, how is a harf actually identified?',
      options: [
        'By a single, positive sign unique to harf alone',
        'By process of elimination, failing every one of the ism signs and every one of the fi\u2019l signs',
        'By checking whether it appears in the Qur\u2019an',
        'By its length in letters',
      ],
      correctIndex: 1,
      explanation: 'هَلْ accepts none of the ism or fi\u2019l signs, confirming it as a harf by elimination.',
    },
    {
      id: 'ar1q23',
      question: 'According to the lesson, هَلْ fails to accept:',
      options: [
        'Only the ism signs',
        'Both the definite article/tanween/preposition/idafah signs of ism, and the qad/future-marker/feminine-taa signs of fi\u2019l',
        'Only the fi\u2019l signs',
        'This word is not discussed in the lesson',
      ],
      correctIndex: 1,
      explanation: 'This confirms هَلْ as a harf by this same process of elimination.',
    },
    {
      id: 'ar1q24',
      question: 'According to the lesson, this course\u2019s second unit turns directly to:',
      options: [
        'A repeat of the three parts of speech',
        'Al-jumlah al-mufeedah, the complete, meaningful sentence, and the specific parts it is built from',
        'Kaana wa akhawatuha',
        'The Farewell Sermon',
      ],
      correctIndex: 1,
      explanation: 'This builds directly on the definition of kalam already established in this unit\u2019s second topic.',
    },
    {
      id: 'ar1q25',
      question: 'According to the lesson, the precise definition of kalam (murakkab, mufeed, bil-wad\u2019) is described as:',
      options: [
        'An interesting but ultimately unnecessary detail',
        'What this course\u2019s next unit builds on directly, since a jumlah mufeedah is essentially kalam given dedicated treatment',
        'A definition later units will contradict',
        'Only relevant to classical poetry',
      ],
      correctIndex: 1,
      explanation: 'Understanding this definition precisely is what makes the next unit\u2019s distinctions genuinely clear.',
    },
    {
      id: 'ar1q26',
      question: 'According to the lesson, رَجُلٌ, مَكَّةُ, and عِلْمٌ are given as examples of:',
      options: [
        'Huruf', 'Asmaa\u2019', 'Af\u2019aal (verbs)', 'None of the three categories'
      ],
      correctIndex: 1,
      explanation: 'None of these three words, by itself, tells a listener when anything happened.',
    },
    {
      id: 'ar1q27',
      question: 'According to the lesson, a reader encountering an unfamiliar Arabic word can apply the four ism signs:',
      options: [
        'Only after already knowing the word\u2019s meaning in advance',
        'Directly, without needing to already know the word\u2019s meaning in advance',
        'Only for words that appear in the Qur\u2019an',
        'This is not addressed in the lesson',
      ],
      correctIndex: 1,
      explanation: 'Any one of the four signs can confirm a word as an ism confidently.',
    },
    {
      id: 'ar1q28',
      question: 'According to the lesson, Abu al-Aswad ad-Du\u2019ali is credited with:',
      options: [
        'Writing the Qur\u2019an\u2019s own text for the first time',
        'Being the first to systematize what would become the science of Nahw',
        'Inventing the Arabic alphabet',
        'Translating the Qur\u2019an into other languages',
      ],
      correctIndex: 1,
      explanation: 'This began with the same three-way division of ism, fi\u2019l, and harf covered directly in this unit.',
    },
    {
      id: 'ar1q29',
      question: 'According to the lesson, mastering Nahw is what allows a reader to:',
      options: [
        'Recognize individual words without needing to understand sentences',
        'Trust that they have understood a sentence correctly, rather than merely recognized its individual words',
        'Avoid ever needing to learn vocabulary',
        'Speak Arabic without ever reading it',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as the practical value of the entire science this course studies.',
    },
    {
      id: 'ar1q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Arabic grammar has no real historical basis worth studying',
        'A single misplaced vowel in the Qur\u2019an itself prompted the systematic study of how every Arabic word divides into ism, fi\u2019l, or harf, each identifiable through specific, practical signs',
        'Only the story of Abu al-Aswad matters from this entire unit',
        'The three parts of speech have no connection to i\u2019rab',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all five topics of Unit 1 into a single foundational claim for the rest of the course.',
    },
  ],

  'unit-2': [
    {
      id: 'ar2q1',
      question: 'According to the lesson, the relationship between jumlah and kalam is stated as:',
      options: [
        'The two terms mean exactly the same thing in every case',
        'Every kalam is a jumlah, but not every jumlah is kalam',
        'Every jumlah is a kalam, but not every kalam is a jumlah',
        'The two terms are entirely unrelated',
      ],
      correctIndex: 1,
      explanation: 'This is a well known formula stated directly by Arabic grammarians.',
    },
    {
      id: 'ar2q2',
      question: 'According to the lesson, a jumlah at its most basic is any combination containing:',
      options: [
        'A harf and an ism only',
        'A musnad and a musnad ilayh joined together',
        'Exactly three words',
        'A definite article',
      ],
      correctIndex: 1,
      explanation: 'This holds regardless of whether the combination conveys a complete meaning on its own.',
    },
    {
      id: 'ar2q3',
      question: 'According to the lesson, إِنْ قُمْتَ (if you stood...) is described as:',
      options: [
        'Not a jumlah at all',
        'A genuine jumlah that is not yet mufeedah, since the listener remains waiting for what follows',
        'A jumlah mufeedah on its own',
        'An example of a jumlah fi\u2019liyyah',
      ],
      correctIndex: 1,
      explanation: 'قُمْتَ itself contains both a musnad ilayh and a musnad, but the listener needs more.',
    },
    {
      id: 'ar2q4',
      question: 'According to the lesson, al-jumlah al-mufeedah is specifically a jumlah that also satisfies:',
      options: [
        'Tanween', 'Ifadah, already covered in this course\u2019s first unit as one of kalam\u2019s own conditions', 'The definite article', 'Idafah'
      ],
      correctIndex: 1,
      explanation: 'This means it leaves the listener with a complete, self-sufficient sense.',
    },
    {
      id: 'ar2q5',
      question: 'According to the lesson, why does this course treat jumlah mufeedah as effectively equivalent to kalam?',
      options: [
        'They are never actually equivalent in any sense',
        'Once a jumlah satisfies ifadah, it satisfies every condition kalam requires, since murakkab and bil-wad\u2019 are already met by forming a genuine jumlah at all',
        'Kalam is a broader category than jumlah',
        'This equivalence is rejected by all grammarians',
      ],
      correctIndex: 1,
      explanation: 'This is why al-jumlah al-mufeedah functions as this course\u2019s actual basic unit of study.',
    },
    {
      id: 'ar2q6',
      question: 'Al-musnad ilayh is described as:',
      options: [
        'The element predicated, what is actually said about something',
        'The element something is predicated of, the party the sentence is fundamentally about',
        'Only found in verbal sentences',
        'Only found in nominal sentences',
      ],
      correctIndex: 1,
      explanation: 'Al-musnad is the element predicated, what is actually being said about that party.',
    },
    {
      id: 'ar2q7',
      question: 'According to the lesson, in a nominal sentence, musnad and musnad ilayh appear under the names:',
      options: [
        'Fi\u2019l and fa\u2019il', 'Mubtada and khabar', 'Mudaf and mudaf ilayhi', 'Ism and harf'
      ],
      correctIndex: 1,
      explanation: 'These are given full, dedicated treatment across this course\u2019s third unit.',
    },
    {
      id: 'ar2q8',
      question: 'According to the lesson, in a verbal sentence, musnad and musnad ilayh instead appear as:',
      options: [
        'Mubtada and khabar', 'Fi\u2019l and fa\u2019il', 'Na\u2019t and man\u2019ut', 'Mubtada and fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'These are given full treatment across this course\u2019s fourth unit.',
    },
    {
      id: 'ar2q9',
      question: 'According to the lesson, recognizing musnad and musnad ilayh as the shared underlying structure prevents:',
      options: [
        'A learner from ever making mistakes',
        'A common confusion where mubtada/khabar and fi\u2019l/fa\u2019il seem like two disconnected rule sets rather than one coherent grammar',
        'The need to ever learn i\u2019rab',
        'Any need to identify sentence types at all',
      ],
      correctIndex: 1,
      explanation: 'Both pairs express the same fundamental relationship in two different ways.',
    },
    {
      id: 'ar2q10',
      question: 'In زَيْدٌ قَائِمٌ (Zayd is standing), زَيْدٌ functions as:',
      options: [
        'Al-musnad', 'Al-musnad ilayh', 'A harf', 'A fi\u2019l'
      ],
      correctIndex: 1,
      explanation: 'قَائِمٌ functions as al-musnad, what is actually said about him.',
    },
    {
      id: 'ar2q11',
      question: 'Al-jumlah al-ismiyyah is defined specifically by:',
      options: [
        'Containing at least one ism anywhere within it',
        'Its own first word: any jumlah mufeedah beginning with an ism',
        'Never containing a fi\u2019l at all',
        'Ending with a definite noun',
      ],
      correctIndex: 1,
      explanation: 'This holds regardless of whether a fi\u2019l might also appear later in the same sentence.',
    },
    {
      id: 'ar2q12',
      question: 'According to the lesson, الطَّالِبُ يَكْتُبُ (the student is writing) qualifies as a jumlah ismiyyah because:',
      options: [
        'It contains no verb at all',
        'It begins with the ism الطَّالِبُ, even though a fi\u2019l appears immediately afterward',
        'It ends with a verb',
        'This example is not discussed in the lesson',
      ],
      correctIndex: 1,
      explanation: 'The first word alone determines this sentence\u2019s classification.',
    },
    {
      id: 'ar2q13',
      question: 'In مُحَمَّدٌ مُجْتَهِدٌ (Muhammad is diligent), مُجْتَهِدٌ serves as:',
      options: [
        'Al-mubtada', 'Al-khabar', 'Al-fi\u2019l', 'Al-fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'مُحَمَّدٌ serves as al-mubtada in this same sentence.',
    },
    {
      id: 'ar2q14',
      question: 'Al-jumlah al-fi\u2019liyyah is defined by:',
      options: [
        'The same logic as jumlah ismiyyah, reversed: any jumlah mufeedah beginning with a fi\u2019l',
        'Never containing any ism at all',
        'Always appearing at the end of a paragraph',
        'Containing exactly one word',
      ],
      correctIndex: 0,
      explanation: 'This holds regardless of whether an ism also appears somewhere within it.',
    },
    {
      id: 'ar2q15',
      question: 'In كَتَبَ الطَّالِبُ (the student wrote), كَتَبَ serves as:',
      options: [
        'Al-mubtada', 'Al-fi\u2019l', 'Al-khabar', 'Al-musnad ilayh only'
      ],
      correctIndex: 1,
      explanation: 'الطَّالِبُ serves as al-fa\u2019il in this same sentence.',
    },
    {
      id: 'ar2q16',
      question: 'According to the lesson, كَتَبَ الطَّالِبُ places the verb:',
      options: [
        'After its own subject, matching English word order',
        'Before its own subject, the entirely standard order for a jumlah fi\u2019liyyah in Arabic',
        'In a position considered ungrammatical',
        'Nowhere in particular; word order is irrelevant in Arabic',
      ],
      correctIndex: 1,
      explanation: 'Recognizing this as normal is essential for reading real Arabic sentences comfortably.',
    },
    {
      id: 'ar2q17',
      question: 'According to the lesson, identifying a sentence\u2019s type reduces to the question:',
      options: [
        'How many words does the sentence contain?',
        'What is the very first word?',
        'Does the sentence contain a preposition?',
        'Is the sentence definite or indefinite?',
      ],
      correctIndex: 1,
      explanation: 'If it is an ism, the sentence is ismiyyah; if a fi\u2019l, the sentence is fi\u2019liyyah.',
    },
    {
      id: 'ar2q18',
      question: 'According to the lesson, why does this classification test matter beyond mere labeling?',
      options: [
        'It has no further consequence once determined',
        'It determines which entire set of rules applies next: mubtada/khabar or fi\u2019l/fa\u2019il',
        'It only matters for spoken Arabic',
        'It only affects pronunciation, not meaning',
      ],
      correctIndex: 1,
      explanation: 'Misidentifying the sentence type leads directly to misapplying every rule that follows.',
    },
    {
      id: 'ar2q19',
      question: 'According to the lesson, in وَقَامَ زَيْدٌ (and Zayd stood), the actual first word for classification purposes is:',
      options: [
        'وَ', 'قَامَ, making this a jumlah fi\u2019liyyah', 'زَيْدٌ, making this a jumlah ismiyyah', 'This sentence cannot be classified'
      ],
      correctIndex: 1,
      explanation: 'A preceding harf such as وَ does not itself count for this specific test.',
    },
    {
      id: 'ar2q20',
      question: 'According to the lesson, زَيْدٌ قَامَ and قَامَ زَيْدٌ illustrate that:',
      options: [
        'Word order never affects sentence classification in Arabic',
        'Identical words in a different first-word order produce a different sentence type and different grammatical treatment',
        'Both examples are jumlah ismiyyah',
        'Both examples are jumlah fi\u2019liyyah',
      ],
      correctIndex: 1,
      explanation: 'This is illustrated directly through this exact contrastive pair.',
    },
    {
      id: 'ar2q21',
      question: 'According to the lesson, this course\u2019s third unit turns to:',
      options: [
        'A repeat of the two sentence types',
        'The nominal sentence\u2019s own two parts in full depth: al-mubtada and al-khabar',
        'The verbal sentence\u2019s fi\u2019l and fa\u2019il',
        'I\u2019rab and its signs',
      ],
      correctIndex: 1,
      explanation: 'This course\u2019s fourth unit does the same for the verbal sentence afterward.',
    },
    {
      id: 'ar2q22',
      question: 'According to the lesson, jumlah is described as a genuinely broader category than kalam because:',
      options: [
        'Jumlah requires ifadah while kalam does not',
        'Jumlah only requires a musnad and musnad ilayh joined together, without necessarily satisfying ifadah',
        'Kalam can exist without any words at all',
        'The two categories are actually identical in scope',
      ],
      correctIndex: 1,
      explanation: 'Kalam specifically requires the completeness condition that jumlah alone does not.',
    },
    {
      id: 'ar2q23',
      question: 'According to the lesson, قَامَ زَيْدٌ is offered as an example of:',
      options: [
        'A jumlah that is not yet mufeedah',
        'A jumlah mufeedah, complete on its own',
        'A harf', 'An ism'
      ],
      correctIndex: 1,
      explanation: 'This is contrasted directly with إِنْ قُمْتَ, which is not yet mufeedah.',
    },
    {
      id: 'ar2q24',
      question: 'According to the lesson, a learner who has only memorized "mubtada and khabar" and separately "fi\u2019l and fa\u2019il" without understanding their shared basis is left with:',
      options: [
        'A perfectly complete understanding of Nahw',
        'Two disconnected rule sets rather than one coherent grammar built on a single unifying idea',
        'No real disadvantage at all',
        'An understanding that applies only to nominal sentences',
      ],
      correctIndex: 1,
      explanation: 'This is exactly the confusion this unit\u2019s second topic aims to prevent.',
    },
    {
      id: 'ar2q25',
      question: 'According to the lesson, في a jumlah fi\u2019liyyah, could an ism ever appear within the sentence?',
      options: [
        'No, a jumlah fi\u2019liyyah can never contain any ism',
        'Yes, as long as the sentence does not begin with that ism',
        'Only if the ism is definite',
        'This is not addressed in the lesson',
      ],
      correctIndex: 1,
      explanation: 'كَتَبَ الطَّالِبُ itself contains the ism الطَّالِبُ, yet remains a jumlah fi\u2019liyyah since it begins with a fi\u2019l.',
    },
    {
      id: 'ar2q26',
      question: 'According to the lesson, the four ism-signs and fi\u2019l-signs already covered in this course\u2019s first unit are used in this unit to:',
      options: [
        'Confirm whether a sentence\u2019s first word is an ism or a fi\u2019l',
        'Determine a word\u2019s gender',
        'Determine a sentence\u2019s length',
        'This unit does not reference material from the first unit',
      ],
      correctIndex: 0,
      explanation: 'This is the practical, reliable test this unit\u2019s closing topic describes directly.',
    },
    {
      id: 'ar2q27',
      question: 'According to the lesson, the specific rules for al-mubtada and al-khabar, versus al-fi\u2019l and al-fa\u2019il, are:',
      options: [
        'Identical in every respect, with no real difference between them',
        'Genuinely different, despite both pairs expressing the same underlying musnad/musnad ilayh relationship',
        'Entirely unrelated to musnad and musnad ilayh',
        'Not covered anywhere in this course',
      ],
      correctIndex: 1,
      explanation: 'This is illustrated directly through the زَيْدٌ قَامَ / قَامَ زَيْدٌ contrastive pair.',
    },
    {
      id: 'ar2q28',
      question: 'According to the lesson, بِل-وَضْعِ (bil-wad\u2019), already covered in this course\u2019s first unit, is one of the conditions:',
      options: [
        'Unique to jumlah, not shared with kalam',
        'Shared between jumlah and kalam once a genuine Arabic jumlah is formed at all',
        'That applies only to verbal sentences',
        'That is no longer relevant in this unit',
      ],
      correctIndex: 1,
      explanation: 'This is part of why jumlah mufeedah functions as effectively equivalent to kalam in practice.',
    },
    {
      id: 'ar2q29',
      question: 'According to the lesson, this unit\u2019s overall structure moves from:',
      options: [
        'Specific rules straight to a general theory, with no clear order',
        'A precise definition of the sentence, to its shared underlying parts, to its two specific types, to a practical test distinguishing them',
        'The verbal sentence directly to i\u2019rab, skipping the nominal sentence entirely',
        'A repeat of Unit 1\u2019s content with no new material',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s five topics were actually presented.',
    },
    {
      id: 'ar2q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Jumlah and kalam are entirely unrelated concepts with no practical overlap',
        'Every Arabic sentence rests on the same musnad/musnad ilayh structure, expressed as mubtada/khabar or fi\u2019l/fa\u2019il depending on which word actually comes first',
        'Only nominal sentences matter for correct Arabic grammar',
        'Word order in Arabic carries no grammatical significance',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all five topics of Unit 2 into a single foundational claim, setting up the full treatment of each sentence type in Units 3 and 4.',
    },
  ],

  'unit-3': [
    {
      id: 'ar3q1',
      question: 'Al-mubtada is defined as the ism standing at the beginning of a jumlah ismiyyah, carrying:',
      options: [
        'Nasb case', 'Marfu\u2019 case', 'Jarr case', 'No case at all'
      ],
      correctIndex: 1,
      explanation: 'Al-mubtada is the musnad ilayh of a nominal sentence, the party the sentence is fundamentally about.',
    },
    {
      id: 'ar3q2',
      question: 'According to the lesson, the classical rule states that beginning a sentence with an indefinite noun is:',
      options: [
        'Always fully acceptable with no conditions',
        'Not permitted except with a specific justifying factor',
        'Strictly forbidden under every circumstance',
        'Only relevant to verbal sentences',
      ],
      correctIndex: 1,
      explanation: '\u0631\u064e\u062c\u064f\u0644\u064c \u0642\u064e\u0627\u0626\u0650\u0645\u064c, a man is standing, sounds genuinely incomplete on its own.',
    },
    {
      id: 'ar3q3',
      question: 'According to the lesson, one recognized exception allowing an indefinite mubtada is:',
      options: [
        'When the sentence is preceded by negation or a question',
        'When the sentence is very short',
        'Only when the mubtada is human',
        'There are no recognized exceptions at all',
      ],
      correctIndex: 0,
      explanation: 'هَلْ رَجُلٌ فِي البَيْتِ, is there a man in the house?, illustrates this directly.',
    },
    {
      id: 'ar3q4',
      question: 'According to the lesson, a second recognized exception is when the indefinite noun:',
      options: [
        'Is itself further described, supplying enough specific information to satisfy ifadah',
        'Appears at the very end of a paragraph',
        'Is preceded by a harf jarr only',
        'Is repeated twice in the same sentence',
      ],
      correctIndex: 0,
      explanation: 'رَجُلٌ كَرِيمٌ عِنْدَنَا, a generous man is with us, illustrates this directly.',
    },
    {
      id: 'ar3q5',
      question: 'According to the lesson, why does this rule matter practically?',
      options: [
        'It has no practical bearing on reading Arabic',
        'It prevents a learner from assuming every sentence-initial noun functions as mubtada regardless of definiteness',
        'It only matters for classical poetry',
        'It only applies to spoken Arabic',
      ],
      correctIndex: 1,
      explanation: 'Recognizing when an indefinite opening is genuinely justified is part of reading Arabic with real precision.',
    },
    {
      id: 'ar3q6',
      question: 'Al-khabar is described as the part of a jumlah ismiyyah that:',
      options: [
        'Merely repeats the mubtada',
        'Provides the actual information the sentence exists to convey, completing the meaning al-mubtada begins',
        'Is always optional and can be omitted freely',
        'Never carries any case marking at all',
      ],
      correctIndex: 1,
      explanation: 'In the terms from this course\u2019s second unit, al-khabar is the musnad.',
    },
    {
      id: 'ar3q7',
      question: 'According to the lesson, al-khabar carries marfu\u2019 case by default, except once:',
      options: [
        'The sentence becomes longer than five words',
        'Kaana or one of her sisters, or inna or one of her sisters, enters the sentence',
        'The mubtada becomes plural',
        'The sentence is spoken rather than written',
      ],
      correctIndex: 1,
      explanation: 'These are examined fully across this course\u2019s tenth and eleventh units respectively.',
    },
    {
      id: 'ar3q8',
      question: 'In زَيْدٌ قَائِمٌ (Zayd is standing), قَائِمٌ serves as:',
      options: [
        'Al-mubtada', 'Al-khabar', 'A harf', 'Al-fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'It carries marfu\u2019 case and provides the actual information the sentence conveys.',
    },
    {
      id: 'ar3q9',
      question: 'In مُحَمَّدٌ فِي المَسْجِدِ (Muhammad is in the mosque), فِي المَسْجِدِ is worth noting because:',
      options: [
        'It is a single word, just like قَائِمٌ',
        'It is not a single word at all, but a preposition together with its own noun',
        'It functions as al-mubtada instead',
        'It carries no grammatical function whatsoever',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s next topic turns directly to the several forms al-khabar can actually take.',
    },
    {
      id: 'ar3q10',
      question: 'According to the lesson, "mufrad" in the context of khabar mufrad specifically means:',
      options: [
        'Grammatically singular in number',
        'A single word, not necessarily grammatically singular',
        'A word carrying tanween',
        'A word preceded by a harf jarr',
      ],
      correctIndex: 1,
      explanation: 'الطَّالِبَانِ مُجْتَهِدَانِ still counts as khabar mufrad despite مُجْتَهِدَانِ being dual.',
    },
    {
      id: 'ar3q11',
      question: 'Khabar jumlah describes a khabar that is:',
      options: [
        'A single word only',
        'An entire jumlah, either ismiyyah or fi\u2019liyyah',
        'Always a preposition',
        'Never permitted in Arabic grammar',
      ],
      correctIndex: 1,
      explanation: 'زَيْدٌ أَبُوهُ كَرِيمٌ contains an entire jumlah ismiyyah functioning as khabar.',
    },
    {
      id: 'ar3q12',
      question: 'In زَيْدٌ يَكْتُبُ (Zayd is writing), يَكْتُبُ is described as:',
      options: [
        'A khabar mufrad',
        'An entire jumlah fi\u2019liyyah functioning as khabar for the mubtada زَيْدٌ',
        'A khabar shibh jumlah',
        'A harf jarr',
      ],
      correctIndex: 1,
      explanation: 'This connects directly forward to this course\u2019s fourteenth unit on mahalla l-i\u2019rab.',
    },
    {
      id: 'ar3q13',
      question: 'Khabar shibh al-jumlah describes a khabar taking the form of:',
      options: [
        'Only a single adjective',
        'Either a preposition with its noun, or a zarf (adverb of place or time)',
        'Only a complete verbal sentence',
        'Only a proper noun',
      ],
      correctIndex: 1,
      explanation: 'الكِتَابُ عَلَى الطَّاوِلَةِ illustrates the preposition type directly.',
    },
    {
      id: 'ar3q14',
      question: 'الكِتَابُ عِنْدَ زَيْدٍ (the book is with Zayd) illustrates:',
      options: [
        'Khabar mufrad', 'Khabar jumlah', 'Khabar shibh jumlah (zarf type)', 'No khabar at all'
      ],
      correctIndex: 2,
      explanation: 'This is examined further in this course\u2019s twelfth unit.',
    },
    {
      id: 'ar3q15',
      question: 'According to the lesson, despite their structural differences, mufrad, jumlah, and shibh jumlah khabar all:',
      options: [
        'Serve entirely different, unrelated functions',
        'Serve the exact same underlying function: completing the meaning al-mubtada begins',
        'Only appear in verbal sentences',
        'Never appear in the same course together',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s closing topic turns to agreement rules specifically for khabar mufrad.',
    },
    {
      id: 'ar3q16',
      question: 'When al-khabar takes the mufrad form, it must agree with al-mubtada in:',
      options: [
        'Case only, not gender or number',
        'Both gender and number',
        'Neither gender nor number',
        'Only number, never gender',
      ],
      correctIndex: 1,
      explanation: 'الطَّالِبُ مُجْتَهِدٌ pairs a masculine singular mubtada with a masculine singular khabar.',
    },
    {
      id: 'ar3q17',
      question: 'الطُّلَّابُ مُجْتَهِدُونَ (the students are diligent) illustrates:',
      options: [
        'A masculine plural mubtada (human) matched by a masculine plural khabar',
        'The non-human plural exception',
        'A feminine singular mubtada',
        'Khabar jumlah',
      ],
      correctIndex: 0,
      explanation: 'This applies the same basic agreement principle already established for singular nouns.',
    },
    {
      id: 'ar3q18',
      question: 'According to the lesson, الكُتُبُ مُفِيدَةٌ (the books are useful) illustrates:',
      options: [
        'A standard plural agreement, matching plural to plural',
        'A genuinely important exception: a non-human plural mubtada paired with a feminine singular khabar',
        'A grammatical error',
        'Khabar shibh jumlah',
      ],
      correctIndex: 1,
      explanation: 'Arabic treats non-human plurals grammatically as though they formed a single, unified group.',
    },
    {
      id: 'ar3q19',
      question: 'According to the lesson, why does الكُتُبُ مُفِيدَةٌ take a feminine singular khabar despite كُتُبٌ being a masculine-derived plural?',
      options: [
        'This is simply an error commonly made by native speakers',
        'The khabar agrees with the non-human plural as a feminine singular unit rather than with the individual items composing it',
        'All Arabic nouns are secretly feminine',
        'This rule applies only to human plurals',
      ],
      correctIndex: 1,
      explanation: 'This is described directly as a commonly surprising but genuinely important exception.',
    },
    {
      id: 'ar3q20',
      question: 'According to the lesson, when al-khabar takes the jumlah or shibh jumlah form, the direct gender/number agreement requirement:',
      options: [
        'Still applies in exactly the same way as khabar mufrad',
        'Does not apply the same way, since these do not inflect for gender or number like a single word',
        'Is replaced by a requirement for tanween',
        'Becomes stricter than for khabar mufrad',
      ],
      correctIndex: 1,
      explanation: 'Instead, a raabit, a connecting link, must refer back to al-mubtada.',
    },
    {
      id: 'ar3q21',
      question: 'According to the lesson, a raabit is:',
      options: [
        'A type of harf jarr',
        'A connecting link, ordinarily a pronoun, referring back to al-mubtada',
        'Another name for khabar mufrad',
        'A sign confirming a word is an ism',
      ],
      correctIndex: 1,
      explanation: 'In زَيْدٌ أَبُوهُ كَرِيمٌ, the pronoun هُ attached to أَبُوهُ serves as this connecting link.',
    },
    {
      id: 'ar3q22',
      question: 'According to the lesson, this course\u2019s fourth unit turns directly to:',
      options: [
        'A repeat of mubtada and khabar',
        'The verbal sentence\u2019s own two core parts: al-fi\u2019l and al-fa\u2019il',
        'I\u2019rab and its signs',
        'Harf al-jarr and al-idafah',
      ],
      correctIndex: 1,
      explanation: 'These are the exact counterparts to mubtada and khabar within a jumlah fi\u2019liyyah.',
    },
    {
      id: 'ar3q23',
      question: 'According to the lesson, al-mubtada is described in the terms of this course\u2019s second unit as:',
      options: [
        'The musnad', 'The musnad ilayh', 'A harf', 'A shibh jumlah'
      ],
      correctIndex: 1,
      explanation: 'Al-khabar, by contrast, is the musnad.',
    },
    {
      id: 'ar3q24',
      question: 'According to the lesson, الطَّالِبَةُ مُجْتَهِدَةٌ (the female student is diligent) illustrates:',
      options: [
        'A masculine singular mubtada and khabar',
        'A feminine singular mubtada matched by a feminine singular khabar',
        'The non-human plural exception',
        'Khabar jumlah',
      ],
      correctIndex: 1,
      explanation: 'This directly parallels the masculine example الطَّالِبُ مُجْتَهِدٌ already covered in the same topic.',
    },
    {
      id: 'ar3q25',
      question: 'According to the lesson, a learner who does not know the mubtada-definiteness rule might:',
      options: [
        'Never make any errors regardless',
        'Simply assume every sentence-initial noun functions as mubtada regardless of whether it is definite',
        'Automatically understand every exception without study',
        'Only struggle with verbal sentences instead',
      ],
      correctIndex: 1,
      explanation: 'This is precisely the surface-level pattern matching this unit\u2019s first topic warns against.',
    },
    {
      id: 'ar3q26',
      question: 'According to the lesson, once kaana or inna (and their sisters) enter a nominal sentence:',
      options: [
        'Nothing about the sentence changes at all',
        'Al-khabar\u2019s own case, and sometimes its very name, changes accordingly',
        'The sentence becomes a jumlah fi\u2019liyyah instead',
        'The mubtada disappears entirely',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s own treatment of khabar assumes neither has entered the sentence yet.',
    },
    {
      id: 'ar3q27',
      question: 'According to the lesson, the overall relationship between mufrad, jumlah, and shibh jumlah khabar is best described as:',
      options: [
        'Three unrelated categories with nothing in common',
        'Three genuinely different shapes serving one shared function',
        'Only mufrad is a real category; the other two are exceptions',
        'A distinction that only matters in poetry',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as this unit\u2019s third topic\u2019s closing point.',
    },
    {
      id: 'ar3q28',
      question: 'According to the lesson, الطَّالِبُ يَكْتُبُ, already covered in this course\u2019s second unit, and زَيْدٌ يَكْتُبُ, covered in this unit, share which structural feature?',
      options: [
        'Neither example contains a jumlah fi\u2019liyyah',
        'Both contain a jumlah fi\u2019liyyah embedded within a larger jumlah ismiyyah',
        'Both are examples of khabar mufrad',
        'Both lack a mubtada entirely',
      ],
      correctIndex: 1,
      explanation: 'This is the same underlying pattern examined from two different angles across these two units.',
    },
    {
      id: 'ar3q29',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Agreement rules straight to definitions, in no particular order',
        'Defining mubtada, to defining khabar, to khabar\u2019s three types, to the specific agreement rules governing khabar mufrad',
        'The verbal sentence directly to i\u2019rab, skipping mubtada and khabar entirely',
        'A repeat of Unit 2\u2019s content with no new material',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar3q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Mubtada and khabar are simple, uniform categories with no real exceptions worth noting',
        'The nominal sentence rests on a definite subject and a predicate that can take several distinct forms, each governed by its own precise, sometimes surprising rules of agreement',
        'Only khabar mufrad matters for correct Arabic grammar',
        'This unit has no connection to the sentence types already covered in this course\u2019s second unit',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 3 into a single foundational claim, setting up the verbal sentence\u2019s own treatment in Unit 4.',
    },
  ],

  'unit-4': [
    {
      id: 'ar4q1',
      question: 'According to the lesson, every Arabic verb takes exactly one of how many forms?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctIndex: 1,
      explanation: 'Each carries its own specific time reference and its own specific i\u2019rab behavior.',
    },
    {
      id: 'ar4q2',
      question: 'Al-fi\u2019l al-madi is described as:',
      options: [
        'The only verb form that takes i\u2019rab',
        'A completed action, mabni (structurally fixed) rather than taking i\u2019rab',
        'A command form existing only in the second person',
        'A form that never appears in Arabic',
      ],
      correctIndex: 1,
      explanation: 'كَتَبَ illustrates this form directly.',
    },
    {
      id: 'ar4q3',
      question: 'According to the lesson, al-fi\u2019l al-mudari\u2019 is significant because it is:',
      options: [
        'Mabni, exactly like al-madi',
        'The only one of the three verb forms that actually takes i\u2019rab',
        'Used only for commands',
        'Never used to describe present action',
      ],
      correctIndex: 1,
      explanation: 'This distinction is examined in full in this course\u2019s thirteenth unit.',
    },
    {
      id: 'ar4q4',
      question: 'Al-fi\u2019l al-amr exists only in which grammatical person?',
      options: [
        'First person', 'Second person', 'Third person', 'It applies equally to all three persons'
      ],
      correctIndex: 1,
      explanation: 'A command can only be given directly to whoever is being addressed.',
    },
    {
      id: 'ar4q5',
      question: 'Al-fa\u2019il is described, in the terms of this course\u2019s second unit, as:',
      options: [
        'The musnad of a verbal sentence',
        'The musnad ilayh of a verbal sentence, the direct counterpart to al-mubtada',
        'A type of harf',
        'Only present in nominal sentences',
      ],
      correctIndex: 1,
      explanation: 'Al-fa\u2019il carries marfu\u2019 case, exactly as al-mubtada does.',
    },
    {
      id: 'ar4q6',
      question: 'According to the lesson, standard Arabic word order places:',
      options: [
        'Al-fa\u2019il before al-fi\u2019l', 'Al-fi\u2019l before al-fa\u2019il', 'Al-maf\u2019ul bihi before al-fi\u2019l', 'There is no standard order'
      ],
      correctIndex: 1,
      explanation: 'كَتَبَ الطَّالِبُ places the verb first and the fa\u2019il second.',
    },
    {
      id: 'ar4q7',
      question: 'According to the qaidah given in the lesson, when an explicit fa\u2019il follows the fi\u2019l, the fi\u2019l:',
      options: [
        'Must agree with the fa\u2019il in both gender and number',
        'Remains singular, agreeing with the fa\u2019il only in gender',
        'Becomes plural regardless of the fa\u2019il\u2019s number',
        'Loses its own tense marking entirely',
      ],
      correctIndex: 1,
      explanation: 'This holds true regardless of the fa\u2019il\u2019s own actual number.',
    },
    {
      id: 'ar4q8',
      question: 'كَتَبَ الأَوْلَادُ (the boys wrote) keeps كَتَبَ in its singular form because:',
      options: [
        'الأَوْلَادُ is actually singular',
        'The explicit fa\u2019il follows the verb, so the verb stays singular regardless of the fa\u2019il\u2019s plural number',
        'This is a grammatical error',
        'كَتَبَ is always singular under every condition',
      ],
      correctIndex: 1,
      explanation: 'Had the same plural fa\u2019il instead preceded the verb, the verb would take full plural agreement instead.',
    },
    {
      id: 'ar4q9',
      question: 'According to the lesson, why does the fa\u2019il agreement rule matter for reading real Arabic?',
      options: [
        'It has no real practical consequence',
        'A learner unaware of it might wrongly assume a singular verb requires a singular fa\u2019il, or expect a plural verb whenever a plural noun appears nearby',
        'It only matters for classical poetry',
        'It only applies to imperative verbs',
      ],
      correctIndex: 1,
      explanation: 'Word order itself, not merely the fa\u2019il\u2019s own number, governs the verb\u2019s own form.',
    },
    {
      id: 'ar4q10',
      question: 'Al-maf\u2019ul bihi is described as present specifically when:',
      options: [
        'Any fi\u2019l appears in the sentence, without exception',
        'The specific fi\u2019l is transitive, its action passing on to something beyond the doer',
        'The sentence is a jumlah ismiyyah',
        'The fa\u2019il is plural',
      ],
      correctIndex: 1,
      explanation: 'Unlike al-fa\u2019il, al-maf\u2019ul bihi appears only when the specific verb actually requires an object.',
    },
    {
      id: 'ar4q11',
      question: 'According to the lesson, al-maf\u2019ul bihi carries which case?',
      options: [
        'Raf\u2019', 'Nasb', 'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'This distinguishes it directly from both al-fa\u2019il and al-mubtada, which each carry raf\u2019.',
    },
    {
      id: 'ar4q12',
      question: 'According to the qaidah given in the lesson, al-maf\u2019ul bihi is defined as:',
      options: [
        'A noun in the nominative case performing the action',
        'A noun in the accusative case that the doer\u2019s action falls upon',
        'A preposition governing the fa\u2019il',
        'A type of harf jarr',
      ],
      correctIndex: 1,
      explanation: 'This is the core definition given directly in this unit\u2019s third topic.',
    },
    {
      id: 'ar4q13',
      question: 'In كَتَبَ الطَّالِبُ الدَّرْسَ (the student wrote the lesson), الدَّرْسَ serves as:',
      options: [
        'Al-fi\u2019l', 'Al-fa\u2019il', 'Al-maf\u2019ul bihi', 'Al-mubtada'
      ],
      correctIndex: 2,
      explanation: 'This adds al-maf\u2019ul bihi, carrying nasb case, to the fi\u2019l and fa\u2019il already covered.',
    },
    {
      id: 'ar4q14',
      question: 'According to the lesson, unlike al-fa\u2019il\u2019s position, al-maf\u2019ul bihi\u2019s position within the sentence:',
      options: [
        'Also changes its own case marking, just like the fa\u2019il agreement rule',
        'Does not change its own case; what identifies it is its nasb marking and its semantic role',
        'Determines whether the sentence is ismiyyah or fi\u2019liyyah',
        'Must always come before the fa\u2019il',
      ],
      correctIndex: 1,
      explanation: 'This is a direct contrast with the agreement behavior already covered for al-fa\u2019il.',
    },
    {
      id: 'ar4q15',
      question: 'According to the qaidah given in this unit\u2019s closing topic, the original order of a verbal sentence is:',
      options: [
        'The doer, then the verb, then the object',
        'The verb, then the doer, then the direct object (if one is present)',
        'The object, then the verb, then the doer',
        'There is no fixed original order in Arabic',
      ],
      correctIndex: 1,
      explanation: 'This brings together this unit\u2019s first three topics into a single structural pattern.',
    },
    {
      id: 'ar4q16',
      question: 'قَامَ الرَّجُلُ (the man stood) is described as:',
      options: [
        'An incomplete sentence lacking a required element',
        'Already a genuinely complete jumlah fi\u2019liyyah with only fi\u2019l and fa\u2019il present',
        'A sentence requiring a maf\u2019ul bihi to be grammatically valid',
        'An example of khabar jumlah',
      ],
      correctIndex: 1,
      explanation: 'قَامَ, to stand, does not act upon anything beyond its own doer.',
    },
    {
      id: 'ar4q17',
      question: 'أَكَلَ الوَلَدُ التُّفَّاحَةَ (the boy ate the apple) is used in the lesson to illustrate:',
      options: [
        'A verb requiring no object at all',
        'The full three-part fi\u2019l-fa\u2019il-maf\u2019ul bihi structure, since eating genuinely requires its object',
        'An example of khabar shibh jumlah',
        'A sentence with no fa\u2019il present',
      ],
      correctIndex: 1,
      explanation: 'This illustrates the full structure this unit has built across its four topics.',
    },
    {
      id: 'ar4q18',
      question: 'According to the lesson, some Arabic verbs, generally involving giving, considering, or transforming something, can take:',
      options: [
        'No object at all', 'Two separate maf\u2019ul bihi at once, both carrying nasb case', 'A maf\u2019ul bihi in the genitive case', 'Only a khabar jumlah'
      ],
      correctIndex: 1,
      explanation: 'This is named honestly as a genuine, documented extension of the same structure, not an exception defying it.',
    },
    {
      id: 'ar4q19',
      question: 'According to the lesson, this course\u2019s fifth unit turns directly to:',
      options: [
        'A repeat of fi\u2019l, fa\u2019il, and maf\u2019ul bihi',
        'I\u2019rab itself in full depth, the case and mood system already relied on repeatedly in this unit',
        'The three types of khabar',
        'Kaana wa akhawatuha',
      ],
      correctIndex: 1,
      explanation: 'This includes marfu\u2019 for mubtada, fa\u2019il, and khabar, and mansub for maf\u2019ul bihi.',
    },
    {
      id: 'ar4q20',
      question: 'According to the lesson, unlike al-mubtada, which is normally required to be definite, al-fa\u2019il\u2019s required condition is described as:',
      options: [
        'Also normally required to be definite, with the same exceptions',
        'Carrying marfu\u2019 case, with no equivalent definiteness requirement discussed in this unit',
        'Always being plural',
        'Never appearing after the fi\u2019l',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s own definition of al-fa\u2019il focuses on its case and its role as doer, not on definiteness.',
    },
    {
      id: 'ar4q21',
      question: 'According to the lesson, al-fa\u2019il is required wherever a fi\u2019l appears, whereas al-maf\u2019ul bihi:',
      options: [
        'Is equally required in every single sentence containing a fi\u2019l',
        'Appears only when the specific verb in question actually requires an object',
        'Is never actually required in any Arabic sentence',
        'Replaces al-fa\u2019il entirely in transitive sentences',
      ],
      correctIndex: 1,
      explanation: 'This is the direct contrast drawn between these two elements in this unit\u2019s third topic.',
    },
    {
      id: 'ar4q22',
      question: 'According to the lesson, the highlighted qaidah boxes in this course are used specifically for:',
      options: [
        'Parsed Arabic example sentences alone',
        'Formal grammatical rules stated in both Arabic and English, distinct from ordinary example sentences',
        'Qur\u2019an quotations only',
        'Hadith quotations only',
      ],
      correctIndex: 1,
      explanation: 'A stated rule is content a learner needs to find again quickly when reviewing.',
    },
    {
      id: 'ar4q23',
      question: 'According to the lesson, had the fa\u2019il in كَتَبَ الأَوْلَادُ instead preceded the verb, the verb would:',
      options: [
        'Remain exactly the same, singular',
        'Take full plural agreement instead',
        'Become a fi\u2019l amr instead',
        'Lose its own gender marking',
      ],
      correctIndex: 1,
      explanation: 'This case is examined directly through the same underlying principle already covered in this unit.',
    },
    {
      id: 'ar4q24',
      question: 'According to the lesson, the maf\u2019ul bihi\u2019s defining feature that distinguishes it from fa\u2019il and mubtada is:',
      options: [
        'Its position, always at the very start of the sentence',
        'Its nasb case marking, distinct from the raf\u2019 carried by fa\u2019il and mubtada',
        'Its gender, always feminine',
        'Its number, always plural',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as the specific case distinguishing al-maf\u2019ul bihi.',
    },
    {
      id: 'ar4q25',
      question: 'According to the lesson, al-fi\u2019l al-madi\u2019s classification as mabni connects back to which earlier unit of this course?',
      options: [
        'This course\u2019s first unit, through its acceptance of the feminine taa marker',
        'This course\u2019s second unit',
        'This course\u2019s third unit',
        'No earlier unit is connected to this classification',
      ],
      correctIndex: 0,
      explanation: 'This sign was already flagged briefly in this course\u2019s first unit.',
    },
    {
      id: 'ar4q26',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'I\u2019rab directly to agreement rules, skipping the verb\u2019s own forms entirely',
        'The verb\u2019s three tenses, to the fa\u2019il and its agreement behavior, to the maf\u2019ul bihi and its case, to combining all three into a complete sentence',
        'A repeat of mubtada and khabar with no new material',
        'The nominal sentence directly, without covering the verbal sentence at all',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar4q27',
      question: 'According to the lesson, يَكْتُبُ (he writes / he is writing) illustrates:',
      options: [
        "Fi'l madi", "Fi'l mudari'", "Fi'l amr", "Al-maf'ul bihi"
      ],
      correctIndex: 1,
      explanation: 'This form describes ongoing or future action.',
    },
    {
      id: 'ar4q28',
      question: 'According to the lesson, اُكْتُبْ (write!) illustrates:',
      options: [
        "Fi'l madi, existing in all three grammatical persons",
        "Fi'l amr, existing only in the second person",
        "Fi'l mudari', taking i'rab",
        "Al-fa'il"
      ],
      correctIndex: 1,
      explanation: 'A command can only be issued directly to whoever is being addressed.',
    },
    {
      id: 'ar4q29',
      question: 'According to the lesson, recognizing that word order governs verb agreement, rather than the fa\u2019il\u2019s own number alone, is essential for:',
      options: [
        'Writing poetry specifically',
        'Parsing real sentences correctly rather than guessing from surface appearance alone',
        'Identifying whether a noun is definite',
        'Determining a noun\u2019s gender',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as the practical value of this unit\u2019s central agreement rule.',
    },
    {
      id: 'ar4q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'The verbal sentence follows no consistent rules at all',
        'The verbal sentence rests on a required doer and an optional object, governed by precise rules of case and agreement that often surprise learners expecting English-style patterns',
        'Only al-maf\u2019ul bihi matters for correct Arabic grammar',
        'This unit has no connection to the sentence types already covered in this course\u2019s second unit',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 4 into a single foundational claim, setting up i\u2019rab itself in Unit 5.',
    },
  ],

  'unit-5': [
    {
      id: 'ar5q1',
      question: 'According to the lesson, this course\u2019s own opening story about a mispronounced vowel in Surah at-Tawbah 9:3 is described as:',
      options: [
        'Unrelated to the subject of this unit',
        'Precisely the kind of change this unit now examines directly and systematically: al-i\u2019rab',
        'An example of jazm specifically',
        'A story about vocabulary, not grammar',
      ],
      correctIndex: 1,
      explanation: 'That change shifted marfu\u2019 to majrur through nothing more than a different final vowel.',
    },
    {
      id: 'ar5q2',
      question: 'Classical Nahw uses which specific term for an error in i\u2019rab?',
      options: [
        'Qaidah', 'Lahn', 'Idafah', 'Tanween'
      ],
      correctIndex: 1,
      explanation: 'This is the exact error category this course\u2019s opening story described.',
    },
    {
      id: 'ar5q3',
      question: 'According to the lesson, al-mu\u2019rab describes words whose ending:',
      options: [
        'Never changes regardless of grammatical role',
        'Does change according to context and grammatical role',
        'Is always marked with tanween',
        'Only appears in verbal sentences',
      ],
      correctIndex: 1,
      explanation: 'Al-mabni describes words structurally fixed regardless of role.',
    },
    {
      id: 'ar5q4',
      question: 'According to the lesson, which two verb forms, already covered in this course\u2019s fourth unit, are mabni?',
      options: [
        'Al-madi and al-mudari\u2019', 'Al-madi and al-amr', 'Al-amr and al-mudari\u2019', 'None of the three forms are mabni'
      ],
      correctIndex: 1,
      explanation: 'Al-mudari\u2019, by contrast, is mu\u2019rab.',
    },
    {
      id: 'ar5q5',
      question: 'According to the qaidah given in the lesson, the noun has how many possible i\u2019rab states, and the mudari\u2019 verb has how many?',
      options: [
        'Two each', 'Three each', 'Four each', 'The noun has four, the verb has two'
      ],
      correctIndex: 1,
      explanation: 'The noun takes raf\u2019, nasb, and jarr; the mudari\u2019 verb takes raf\u2019, nasb, and jazm.',
    },
    {
      id: 'ar5q6',
      question: 'According to the lesson, which two states are genuinely shared between nouns and verbs?',
      options: [
        'Jarr and jazm', 'Raf\u2019 and nasb', 'Raf\u2019 and jazm', 'Nasb and jarr'
      ],
      correctIndex: 1,
      explanation: 'Jarr belongs exclusively to nouns, and jazm belongs exclusively to the present-tense verb.',
    },
    {
      id: 'ar5q7',
      question: 'According to the lesson, recognizing that jarr and jazm are each exclusive to one word category means:',
      options: [
        'A reader gains no useful information from this fact',
        'A word in jarr is already confirmed as a noun, and a word in jazm is already confirmed as a mudari\u2019 verb, before considering meaning at all',
        'Every word in Arabic must carry both jarr and jazm simultaneously',
        'This distinction only matters for classical poetry',
      ],
      correctIndex: 1,
      explanation: 'This is described directly as a genuine diagnostic value this division provides.',
    },
    {
      id: 'ar5q8',
      question: 'Ar-raf\u2019 is described as one of the two states:',
      options: [
        'Belonging exclusively to nouns',
        'Genuinely shared between nouns and verbs, alongside an-nasb',
        'Belonging exclusively to verbs',
        'That never actually occurs in real Arabic sentences',
      ],
      correctIndex: 1,
      explanation: 'Its standard sign is damma.',
    },
    {
      id: 'ar5q9',
      question: 'According to the lesson, which three elements, already covered in this course\u2019s third and fourth units, all carry raf\u2019?',
      options: [
        'Maf\u2019ul bihi, mudaf, and mudaf ilayh',
        'Al-mubtada, al-khabar, and al-fa\u2019il',
        'Al-fa\u2019il, al-maf\u2019ul bihi, and al-khabar',
        'Only al-mubtada carries raf\u2019',
      ],
      correctIndex: 1,
      explanation: 'زَيْدٌ قَائِمٌ places mubtada and khabar in raf\u2019; كَتَبَ الطَّالِبُ places the fa\u2019il in raf\u2019 as well.',
    },
    {
      id: 'ar5q10',
      question: 'According to the qaidah given in the lesson, the mudari\u2019 verb is always in raf\u2019:',
      options: [
        'Under every circumstance without exception',
        'Unless a nasb-causing or jazm-causing particle enters upon it',
        'Only when it appears at the start of a sentence',
        'Only in the past tense',
      ],
      correctIndex: 1,
      explanation: 'This is the mudari\u2019s own default state.',
    },
    {
      id: 'ar5q11',
      question: 'In يَكْتُبُ الطَّالِبُ (the student writes), يَكْتُبُ carries raf\u2019 because:',
      options: [
        'A nasib particle is present',
        'No nasb-causing or jazm-causing particle is present to change its default state',
        'It is a fi\u2019l madi',
        'It carries tanween',
      ],
      correctIndex: 1,
      explanation: 'This illustrates the mudari\u2019s default state directly.',
    },
    {
      id: 'ar5q12',
      question: 'An-nasb is described as:',
      options: [
        'Exclusive to nouns',
        'The second state genuinely shared between nouns and verbs, with fatha as its standard sign',
        'Exclusive to verbs',
        'Identical in function to jarr',
      ],
      correctIndex: 1,
      explanation: 'This was already introduced directly through al-maf\u2019ul bihi in this course\u2019s fourth unit.',
    },
    {
      id: 'ar5q13',
      question: 'According to the lesson, this course\u2019s twelfth unit will examine further categories of noun also carrying nasb, including:',
      options: [
        'Only al-maf\u2019ul bihi',
        'Maf\u2019ul mutlaq, haal, and tamyiz',
        'Only mudaf ilayh',
        'Only khabar',
      ],
      correctIndex: 1,
      explanation: 'These all share this exact same case despite serving genuinely different grammatical functions.',
    },
    {
      id: 'ar5q14',
      question: 'In لَنْ يَذْهَبَ (he will never go), يَذْهَبَ carries nasb because:',
      options: [
        'It is a fi\u2019l madi',
        'The particle لَنْ pushes it away from its default raf\u2019 into nasb',
        'It follows a harf jarr',
        'It carries no i\u2019rab at all',
      ],
      correctIndex: 1,
      explanation: 'These particles are called nawasib, examined fully in this course\u2019s thirteenth unit.',
    },
    {
      id: 'ar5q15',
      question: 'According to the lesson, nasb applied to a noun and nasb applied to a verb:',
      options: [
        'Serve identical grammatical purposes in every respect',
        'Serve entirely different grammatical purposes while sharing the exact same underlying case and its fatha sign',
        'Never actually share the same sign',
        'Cannot both exist within the same course',
      ],
      correctIndex: 1,
      explanation: 'This reflects i\u2019rab\u2019s own consistent internal logic across otherwise different word categories.',
    },
    {
      id: 'ar5q16',
      question: 'According to the qaidah given in the lesson, jarr:',
      options: [
        'Can apply to both nouns and verbs equally',
        'Belongs exclusively to the noun and never enters upon the verb at all',
        'Belongs exclusively to the verb',
        'Is identical to nasb in function',
      ],
      correctIndex: 1,
      explanation: 'A verb can never, under any circumstance, carry jarr.',
    },
    {
      id: 'ar5q17',
      question: 'According to the lesson, a noun enters jarr in exactly which two situations?',
      options: [
        'As mubtada, or as khabar',
        'Following a harf jarr, or serving as mudaf ilayh in an idafah construct',
        'As fa\u2019il, or as maf\u2019ul bihi',
        'Only when preceded by a nasib particle',
      ],
      correctIndex: 1,
      explanation: 'Its standard sign is kasra.',
    },
    {
      id: 'ar5q18',
      question: 'كِتَابُ الطَّالِبِ (the student\u2019s book) illustrates jarr through:',
      options: [
        'A harf jarr', 'Idafah, with الطَّالِبِ serving as mudaf ilayh', 'A nasib particle', 'A jazim particle'
      ],
      correctIndex: 1,
      explanation: 'This is examined fully in this course\u2019s eighth unit.',
    },
    {
      id: 'ar5q19',
      question: 'According to the lesson, why does jarr\u2019s exclusivity to nouns carry real diagnostic value?',
      options: [
        'It has no practical use for a reader',
        'Encountering a word carrying kasra as its i\u2019rab immediately confirms that word as a noun, without needing further information',
        'It only matters for classical poetry',
        'It applies equally to verbs and nouns',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s closing topic turns to the exact mirror image of this principle, applied to verbs.',
    },
    {
      id: 'ar5q20',
      question: 'According to the qaidah given in the lesson, jazm:',
      options: [
        'Belongs exclusively to the present-tense verb and never enters upon the noun at all',
        'Belongs exclusively to nouns',
        'Applies equally to nouns and verbs',
        'Is identical in function to raf\u2019',
      ],
      correctIndex: 0,
      explanation: 'More precisely, jazm applies to al-fi\u2019l al-mudari\u2019 alone.',
    },
    {
      id: 'ar5q21',
      question: 'According to the lesson, al-madi and al-amr do not take jazm because:',
      options: [
        'They are too rarely used',
        'They are mabni, and do not take i\u2019rab of any kind in the first place',
        'They only take raf\u2019',
        'They are actually types of nouns',
      ],
      correctIndex: 1,
      explanation: 'Jazm applies specifically and only to al-fi\u2019l al-mudari\u2019.',
    },
    {
      id: 'ar5q22',
      question: 'The standard sign of jazm is:',
      options: [
        'Damma', 'Fatha', 'Kasra', 'Sukoon, the complete absence of a final vowel'
      ],
      correctIndex: 3,
      explanation: 'This is the fourth and final of the four i\u2019rab signs this unit has now covered.',
    },
    {
      id: 'ar5q23',
      question: 'According to the lesson, jazm appears most commonly in which two settings?',
      options: [
        'Idafah and na\u2019t',
        'Negating a past action through لَمْ, and forming conditional sentences through إِنْ',
        'Only in commands',
        'Only in questions',
      ],
      correctIndex: 1,
      explanation: 'These particles are called jawazim, examined fully in this course\u2019s thirteenth unit.',
    },
    {
      id: 'ar5q24',
      question: 'In إِنْ تَجْتَهِدْ تَنْجَحْ (if you strive, you will succeed):',
      options: [
        'Only the first verb carries jazm',
        'Both verbs carry jazm',
        'Neither verb carries jazm',
        'Both verbs carry raf\u2019',
      ],
      correctIndex: 1,
      explanation: 'This illustrates jazm forming a complete conditional sentence.',
    },
    {
      id: 'ar5q25',
      question: 'According to the lesson, returning to this course\u2019s opening story, the shift in Surah at-Tawbah 9:3 is now understood as:',
      options: [
        'An unrelated linguistic curiosity',
        'A shift from raf\u2019 to jarr on a single word, changing meaning specifically because Arabic relies on this exact four-state system to carry it',
        'An example of jazm specifically',
        'A shift that had no real grammatical basis',
      ],
      correctIndex: 1,
      explanation: 'This connects this unit\u2019s entire content directly back to this course\u2019s very first topic.',
    },
    {
      id: 'ar5q26',
      question: 'According to the lesson, this course\u2019s sixth unit turns directly to:',
      options: [
        'A repeat of the four i\u2019rab states',
        'The specific letters and markers, beyond the four default signs, that indicate these same states in less straightforward cases',
        'Kaana wa akhawatuha',
        'The three types of khabar',
      ],
      correctIndex: 1,
      explanation: 'This unit has only covered the four default signs: damma, fatha, kasra, and sukoon.',
    },
    {
      id: 'ar5q27',
      question: 'According to the lesson, the four states of i\u2019rab, taken together, are:',
      options: [
        'Raf\u2019, nasb, jarr, and jazm', 'Raf\u2019, nasb, idafah, and tanween', 'Mubtada, khabar, fi\u2019l, and fa\u2019il', 'Madi, mudari\u2019, amr, and harf'
      ],
      correctIndex: 0,
      explanation: 'This full map is assembled directly across this unit\u2019s five topics.',
    },
    {
      id: 'ar5q28',
      question: 'According to the lesson, the fact that raf\u2019 and nasb are shared, while jarr and jazm are exclusive, reflects:',
      options: [
        'A completely arbitrary, unexplainable pattern',
        'A structured, internally consistent system distributing the four states across noun and verb categories',
        'An error later grammarians attempted to correct',
        'A distinction with no practical bearing on reading Arabic',
      ],
      correctIndex: 1,
      explanation: 'This structure is what this unit has assembled piece by piece across its five topics.',
    },
    {
      id: 'ar5q29',
      question: 'According to the lesson, لَمْ يَذْهَبْ (he did not go) illustrates:',
      options: [
        'A mudari\u2019 verb in raf\u2019',
        'A mudari\u2019 verb in jazm, negating a past action',
        'A fi\u2019l madi',
        'A noun in jarr',
      ],
      correctIndex: 1,
      explanation: 'This is one of the two common settings where jazm actually appears.',
    },
    {
      id: 'ar5q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'I\u2019rab is an arbitrary decoration with no real function in Arabic',
        'I\u2019rab is a precise, four-state system, two states shared between nouns and verbs and two exclusive to one category each, that carries grammatical meaning through word endings alone, exactly as this course\u2019s opening story first demonstrated',
        'Only raf\u2019 matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all five topics of Unit 5 into a single foundational claim, setting up the specific signs of i\u2019rab in Unit 6.',
    },
  ],
};