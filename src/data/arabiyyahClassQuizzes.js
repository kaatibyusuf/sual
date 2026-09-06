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

  'unit-6': [
    {
      id: 'ar6q1',
      question: 'Al-alaamaat al-asliyyah, the original signs, refer to:',
      options: [
        'Only signs used by the five nouns',
        'The standard sign for each i\u2019rab state (damma, fatha, kasra, sukoon), already established in this course\u2019s fifth unit',
        'Only signs used by verbs',
        'A set of signs no longer used in modern Arabic',
      ],
      correctIndex: 1,
      explanation: 'These apply to the overwhelming majority of Arabic nouns and verbs without modification.',
    },
    {
      id: 'ar6q2',
      question: 'According to the lesson, al-alaamaat al-far\u2019iyyah, substitute signs, exist because:',
      options: [
        'Arabic grammar is genuinely inconsistent',
        'Certain word shapes cannot comfortably carry the standard short vowels the way an ordinary singular noun does',
        'They apply to every single Arabic word without exception',
        'They replaced the original signs entirely at some point in history',
      ],
      correctIndex: 1,
      explanation: 'This is not an inconsistency in the system, but a recognition of specific word shapes.',
    },
    {
      id: 'ar6q3',
      question: 'According to the lesson, why does learning these substitute signs matter practically?',
      options: [
        'It has no real practical value',
        'A reader unfamiliar with them might wrongly conclude a word\u2019s i\u2019rab has broken down, when it is actually following a well defined pattern',
        'It only matters for classical poetry',
        'Substitute signs only appear in the Qur\u2019an',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s remaining topics give each pattern its own direct treatment.',
    },
    {
      id: 'ar6q4',
      question: 'Al-asmaa\u2019 al-khamsah are exactly which five nouns?',
      options: [
        'Ab, akh, ham, fam/fu, and dhu',
        'Zayd, \u2018Amr, Bakr, Khalid, and Sa\u2019d',
        'Any five nouns chosen at random',
        'The five nouns used in the Qur\u2019an most frequently',
      ],
      correctIndex: 0,
      explanation: 'These five, and only these five, follow the pattern this topic describes.',
    },
    {
      id: 'ar6q5',
      question: 'According to the qaidah given in the lesson, the five nouns take raf\u2019, nasb, and jarr with:',
      options: [
        'Damma, fatha, and kasra respectively, exactly like ordinary nouns',
        'Waw, alif, and ya respectively',
        'Sukoon in every state',
        'Tanween in every state',
      ],
      correctIndex: 1,
      explanation: 'أَبُوكَ, أَبَاكَ, and أَبِيكَ illustrate this pattern directly.',
    },
    {
      id: 'ar6q6',
      question: 'According to the lesson, this special pattern for the five nouns applies only when:',
      options: [
        'The noun is plural',
        'The noun is singular, mudaf to something other than ya al-mutakallim, and not diminutive',
        'The noun follows a harf jarr',
        'The noun is definite',
      ],
      correctIndex: 1,
      explanation: 'If any single one of these conditions fails, the noun reverts to ordinary declension instead.',
    },
    {
      id: 'ar6q7',
      question: 'According to the lesson, أَبِي (my father) does not follow the special five-nouns pattern because:',
      options: [
        'أَب is not one of the five nouns',
        'The noun is mudaf specifically to ya al-mutakallim, failing one of the three required conditions',
        'The noun is plural',
        'The noun is diminutive',
      ],
      correctIndex: 1,
      explanation: 'Precision about the conditions matters just as much as memorizing the five nouns themselves.',
    },
    {
      id: 'ar6q8',
      question: 'Al-muthanna, the dual, is used specifically to refer to:',
      options: [
        'Exactly one of something', 'Exactly two of something', 'Three or more of something', 'An indefinite quantity'
      ],
      correctIndex: 1,
      explanation: 'This is a separate grammatical number Arabic maintains, unlike English.',
    },
    {
      id: 'ar6q9',
      question: 'According to the qaidah given in the lesson, the dual takes raf\u2019 with:',
      options: [
        'Waw', 'Alif', 'Ya', 'Damma'
      ],
      correctIndex: 1,
      explanation: 'Both nasb and jarr instead take ya, sharing an identical marker.',
    },
    {
      id: 'ar6q10',
      question: 'In الطَّالِبَيْنِ (the two students), the ending marks:',
      options: [
        'Raf\u2019 only', 'Both nasb and jarr, sharing an identical form', 'Only jazm', 'Only raf\u2019 and jazm'
      ],
      correctIndex: 1,
      explanation: 'This contrasts with الطَّالِبَانِ, which marks raf\u2019 specifically.',
    },
    {
      id: 'ar6q11',
      question: 'According to the lesson, since the dual\u2019s nasb and jarr forms are identical, a reader must:',
      options: [
        'Give up trying to distinguish the two states entirely',
        'Rely on surrounding context, such as the presence of a harf jarr or a transitive verb\u2019s object position',
        'Assume the word is always in jarr',
        'Assume the word is always in nasb',
      ],
      correctIndex: 1,
      explanation: 'This is a direct contrast with al-asmaa\u2019 al-khamsah, where each state received its own distinct letter.',
    },
    {
      id: 'ar6q12',
      question: 'Jam\u2019 al-mudhakkar as-salim is called "sound" specifically because:',
      options: [
        'It sounds different from other plurals when spoken aloud',
        'It adds a regular suffix without altering the noun\u2019s own internal structure, unlike jam\u2019 at-taksir',
        'It only applies to sound-related vocabulary',
        'It is the only plural form that exists in Arabic',
      ],
      correctIndex: 1,
      explanation: 'Jam\u2019 at-taksir, the broken plural, is examined directly in this course\u2019s seventh unit.',
    },
    {
      id: 'ar6q13',
      question: 'According to the qaidah given in the lesson, the sound masculine plural takes raf\u2019 with:',
      options: [
        'Waw', 'Alif', 'Ya alone', 'Kasra'
      ],
      correctIndex: 0,
      explanation: 'Both nasb and jarr instead take ya, closely paralleling the dual\u2019s own pattern.',
    },
    {
      id: 'ar6q14',
      question: 'المُسْلِمُونَ (the Muslims) illustrates:',
      options: [
        'The sound masculine plural in raf\u2019', 'The sound masculine plural in nasb or jarr', 'The dual', 'The sound feminine plural'
      ],
      correctIndex: 0,
      explanation: 'المُسْلِمِينَ illustrates this same plural in nasb or jarr instead.',
    },
    {
      id: 'ar6q15',
      question: 'According to the lesson, when the sound masculine plural functions as mudaf:',
      options: [
        'Nothing about its form changes at all',
        'Its final نَ is dropped entirely, a detail belonging properly to this course\u2019s eighth unit on idafah',
        'It reverts to the singular form',
        'It becomes a broken plural instead',
      ],
      correctIndex: 1,
      explanation: 'This is flagged honestly here so a learner recognizes مُعَلِّمُو المَدْرَسَةِ as this same plural.',
    },
    {
      id: 'ar6q16',
      question: 'Jam\u2019 al-mu\u2019annath as-salim is formed by adding which suffix to a feminine singular noun?',
      options: [
        'وْنَ', 'اتٌ', 'يْنِ', 'انِ'
      ],
      correctIndex: 1,
      explanation: 'طَالِبَةٌ becomes طَالِبَاتٌ following this pattern.',
    },
    {
      id: 'ar6q17',
      question: 'According to the lesson, how does the sound feminine plural\u2019s irregularity differ from the three patterns already covered earlier in this unit?',
      options: [
        'It also switches entirely to letters instead of vowels',
        'It keeps ordinary short vowels, with only one specific substitution, making its irregularity narrower',
        'It has no irregularity at all',
        'It follows the exact same pattern as the five nouns',
      ],
      correctIndex: 1,
      explanation: 'This narrower irregularity is, for many learners, genuinely more surprising precisely because it is easy to overlook.',
    },
    {
      id: 'ar6q18',
      question: 'According to the qaidah given in the lesson, the sound feminine plural takes nasb with:',
      options: [
        'Fatha, exactly like an ordinary noun',
        'Kasra, standing in for fatha',
        'Waw',
        'Sukoon',
      ],
      correctIndex: 1,
      explanation: 'Raf\u2019 and jarr both follow the ordinary damma and kasra pattern instead.',
    },
    {
      id: 'ar6q19',
      question: 'In رَأَيْتُ مُسْلِمَاتٍ (I saw Muslim women), مُسْلِمَاتٍ carries kasra despite functioning as:',
      options: [
        'Al-mubtada', "Al-maf'ul bihi, already established as a nasb-carrying role in this course's fourth unit", 'Al-fa\u2019il', 'Al-khabar'
      ],
      correctIndex: 1,
      explanation: 'A learner expecting fatha here, by analogy with an ordinary noun, would produce a genuine, identifiable error.',
    },
    {
      id: 'ar6q20',
      question: 'According to the lesson, all four patterns covered in this unit still express:',
      options: [
        'An entirely separate system unrelated to raf\u2019, nasb, jarr, and jazm',
        'Exactly the same four states already established in this course\u2019s fifth unit, simply through different specific markers',
        'Only two of the four states',
        'A system that has replaced the four states entirely',
      ],
      correctIndex: 1,
      explanation: 'This unifies every pattern covered in this unit under the same underlying framework.',
    },
    {
      id: 'ar6q21',
      question: 'According to the lesson, this course\u2019s seventh unit turns directly to:',
      options: [
        'A repeat of the four substitute patterns',
        'A broader set of categories governing nouns generally: definiteness, gender, and number',
        'Kaana wa akhawatuha',
        'Harf al-jarr and idafah',
      ],
      correctIndex: 1,
      explanation: 'This builds on the specific plural and dual forms already introduced in this unit.',
    },
    {
      id: 'ar6q22',
      question: 'According to the lesson, the five nouns\u2019, the dual\u2019s, and the sound masculine plural\u2019s patterns share which common feature?',
      options: [
        'None; they are entirely unrelated patterns',
        'All three replace short vowels with entire letters, unlike the sound feminine plural',
        'All three use the exact same three letters in the exact same order',
        'All three apply only to feminine nouns',
      ],
      correctIndex: 1,
      explanation: 'The sound feminine plural instead keeps short vowels with just one specific substitution.',
    },
    {
      id: 'ar6q23',
      question: 'According to the lesson, ذُو (possessor of) is used almost exclusively:',
      options: [
        'As a standalone word with no further construction',
        'In idafah constructions, meaning possessor or owner of something specific',
        'Only in the plural',
        'Only in the dual',
      ],
      correctIndex: 1,
      explanation: 'This is one of the five nouns already listed directly in this unit\u2019s second topic.',
    },
    {
      id: 'ar6q24',
      question: 'According to the lesson, the dual and the sound masculine plural both share:',
      options: [
        'An identical i\u2019rab pattern in every respect, using the exact same letters',
        'A closely parallel structure, raf\u2019 marked one way and nasb/jarr collapsed into a single shared form, though using different specific letters',
        'No structural similarity at all',
        'The exact same suffix, -ātun',
      ],
      correctIndex: 1,
      explanation: 'This parallel is named directly when the sound masculine plural is introduced in this unit\u2019s fourth topic.',
    },
    {
      id: 'ar6q25',
      question: 'According to the lesson, a learner who has only memorized the five nouns\u2019 letters without their governing conditions risks:',
      options: [
        'No real risk at all',
        'Misapplying the pattern to a word like أَبِي, my father, which does not meet all three required conditions',
        'Confusing the five nouns with the sound feminine plural',
        'Forgetting the four original signs entirely',
      ],
      correctIndex: 1,
      explanation: 'This is why this unit stresses the conditions as carefully as the letters themselves.',
    },
    {
      id: 'ar6q26',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'The sound feminine plural directly to the original signs, in reverse order',
        'The original default signs, to the five nouns, to the dual, to the sound masculine plural, to the sound feminine plural',
        'A repeat of Unit 5\u2019s content with no new material',
        'Idafah directly to harf al-jarr, skipping the substitute signs entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s five topics were actually presented.',
    },
    {
      id: 'ar6q27',
      question: 'According to the lesson, jam\u2019 at-taksir, the broken plural, is described as:',
      options: [
        'Identical to jam\u2019 al-mudhakkar as-salim',
        'A plural that restructures the word internally, examined directly in this course\u2019s seventh unit',
        'A plural only used for feminine nouns',
        'Not a real category in Arabic grammar',
      ],
      correctIndex: 1,
      explanation: 'This is the direct contrast drawn when introducing why the sound masculine plural is called "sound."',
    },
    {
      id: 'ar6q28',
      question: 'According to the lesson, if any one of the five nouns\u2019 three required conditions is not met:',
      options: [
        'The noun still follows the special waw/alif/ya pattern regardless',
        'The noun reverts entirely to ordinary damma/fatha/kasra declension',
        'The noun becomes ungrammatical entirely',
        'The noun automatically becomes plural',
      ],
      correctIndex: 1,
      explanation: 'All three conditions, singular, mudaf to something other than ya al-mutakallim, and not diminutive, must hold at once.',
    },
    {
      id: 'ar6q29',
      question: 'According to the lesson, the sound feminine plural\u2019s single substitution is described as:',
      options: [
        'Obvious and rarely a source of confusion',
        'Genuinely more surprising for many learners precisely because it is easy to overlook',
        'Identical to the substitutions used by the five nouns',
        'Not actually a real feature of Arabic grammar',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly when this pattern is first introduced in this unit\u2019s closing topic.',
    },
    {
      id: 'ar6q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Substitute signs are rare exceptions with no real system behind them',
        'Four distinct, well defined patterns handle specific noun categories that cannot carry the standard short vowels, each still expressing the same four i\u2019rab states through its own particular markers',
        'Only the five nouns matter for correct Arabic grammar',
        'This unit has no connection to the i\u2019rab system already covered in this course\u2019s fifth unit',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all five topics of Unit 6 into a single foundational claim, setting up the broader noun categories covered in Unit 7.',
    },
  ],

  'unit-7': [
    {
      id: 'ar7q1',
      question: 'According to the lesson, this course\u2019s third unit already established that al-mubtada is normally required to be:',
      options: [
        'Plural', 'Definite (ma\u2019rifah)', 'Feminine', 'In jarr case'
      ],
      correctIndex: 1,
      explanation: 'This unit gives this exact distinction its own full, systematic treatment.',
    },
    {
      id: 'ar7q2',
      question: 'An-nakirah is described as:',
      options: [
        'A rare, exceptional category',
        'The default, unmarked state a noun belongs to unless it falls into one of the recognized definite categories',
        'Only used for proper nouns',
        'A category that never carries tanween',
      ],
      correctIndex: 1,
      explanation: 'رَجُلٌ, a man, is nakirah, referring to no particular, identifiable man.',
    },
    {
      id: 'ar7q3',
      question: 'According to the qaidah given in the lesson, how many recognized categories of ma\u2019rifah are there?',
      options: ['Three', 'Four', 'Six', 'Ten'],
      correctIndex: 2,
      explanation: 'The pronoun, the proper noun, the demonstrative noun, the relative noun, the noun carrying "al-", and a noun mudaf to something definite.',
    },
    {
      id: 'ar7q4',
      question: 'كِتَابُ زَيْدٍ (Zayd\u2019s book) becomes definite through which category?',
      options: [
        'The definite article directly',
        'Being mudaf to something already definite (زَيْدٍ, a proper noun)',
        'Being a demonstrative noun',
        'Being a pronoun',
      ],
      correctIndex: 1,
      explanation: 'This is already covered directly in this course\u2019s fifth unit through idafah.',
    },
    {
      id: 'ar7q5',
      question: 'According to the lesson, this six-category map of definiteness matters beyond the mubtada rule because:',
      options: [
        'It has no further application in this course',
        'This course\u2019s ninth unit will show that an adjective (na\u2019t) must agree with its noun in definiteness as well as gender and number',
        'It only applies to pronouns',
        'It replaces the need to learn i\u2019rab',
      ],
      correctIndex: 1,
      explanation: 'This six-category map is a genuine prerequisite for that later unit\u2019s own treatment.',
    },
    {
      id: 'ar7q6',
      question: 'According to the lesson, al-mudhakkar, masculine, functions as:',
      options: [
        'A rare, marked category',
        'The default category a noun belongs to unless it carries a specific feminine marker or is understood as feminine by meaning',
        'Only relevant to human nouns',
        'A category that never takes i\u2019rab',
      ],
      correctIndex: 1,
      explanation: 'Every Arabic noun carries grammatical gender.',
    },
    {
      id: 'ar7q7',
      question: 'Al-mu\u2019annath al-lafzi describes a feminine noun that:',
      options: [
        'Has no visible marker at all',
        'Carries one of three visible markers: taa marbuta, alif maqsura, or alif mamduda',
        'Is always a proper name',
        'Is always plural',
      ],
      correctIndex: 1,
      explanation: 'طَالِبَةٌ illustrates taa marbuta directly.',
    },
    {
      id: 'ar7q8',
      question: 'أُمّ (mother) is described in the lesson as an example of:',
      options: [
        'Mu\u2019annath lafzi', 'Mu\u2019annath ma\u2019nawi: feminine by meaning, with no visible marker', 'A masculine noun', 'A broken plural'
      ],
      correctIndex: 1,
      explanation: 'This still requires feminine agreement in khabar, na\u2019t, and elsewhere.',
    },
    {
      id: 'ar7q9',
      question: 'According to the lesson, طَلْحَة (Talhah) is significant because it:',
      options: [
        'Is a feminine noun with no exceptions',
        'Is a masculine proper name that carries taa marbuta anyway, an established exception to the usual marker',
        'Never actually appears in Arabic',
        'Is an example of jam\u2019 at-taksir',
      ],
      correctIndex: 1,
      explanation: 'Taa marbuta is therefore a useful first clue toward feminine gender, but not an absolute guarantee.',
    },
    {
      id: 'ar7q10',
      question: 'According to the lesson, this gender system underlies which specific rule already covered in this course\u2019s third unit?',
      options: [
        'The definiteness rule for mubtada',
        'The khabar agreement rules, including the non-human plural exception (الكُتُبُ مُفِيدَةٌ)',
        'The five nouns\u2019 special pattern',
        'The rules of idafah',
      ],
      correctIndex: 1,
      explanation: 'Arabic treats non-human plurals as a single, unified group for this specific agreement purpose.',
    },
    {
      id: 'ar7q11',
      question: 'According to the lesson, every Arabic noun, alongside definiteness and gender, also carries:',
      options: [
        'A fixed color category',
        'A specific number: mufrad, muthanna, or jam\u2019',
        'A fixed tense',
        'A fixed harf jarr',
      ],
      correctIndex: 1,
      explanation: 'Al-muthanna, the dual, was already examined in full across this course\u2019s sixth unit.',
    },
    {
      id: 'ar7q12',
      question: 'According to the lesson, why does the dual deserve genuine, separate status in Arabic?',
      options: [
        'It does not; it is identical to the plural',
        'Unlike English, Arabic treats exactly two of something as its own distinct grammatical category',
        'It only applies to feminine nouns',
        'It is only used in classical poetry',
      ],
      correctIndex: 1,
      explanation: 'This carries the specific alif/ya pattern already covered directly in this course\u2019s sixth unit.',
    },
    {
      id: 'ar7q13',
      question: 'According to the lesson, al-jam\u2019 itself divides into which two categories?',
      options: [
        'Masculine and feminine only',
        'Jam\u2019 as-salim (sound) and jam\u2019 at-taksir (broken)',
        'Definite and indefinite',
        'Raf\u2019 and nasb',
      ],
      correctIndex: 1,
      explanation: 'These require entirely different treatment from one another.',
    },
    {
      id: 'ar7q14',
      question: 'According to the lesson, jam\u2019 as-salim adds a regular suffix, while jam\u2019 at-taksir:',
      options: [
        'Also simply adds a regular suffix',
        'Restructures the noun\u2019s own internal pattern instead',
        'Never actually occurs in real Arabic',
        'Only applies to verbs',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s closing topic turns to this considerably more common plural type.',
    },
    {
      id: 'ar7q15',
      question: 'According to the lesson, jam\u2019 at-taksir is, across the Arabic language as a whole:',
      options: [
        'Rarer than the sound plural',
        'The more common plural type; most Arabic nouns take a broken rather than sound form',
        'Used exclusively for feminine nouns',
        'No longer used in modern Arabic',
      ],
      correctIndex: 1,
      explanation: 'This is worth stating directly since many learners assume sound plurals are the more typical case.',
    },
    {
      id: 'ar7q16',
      question: 'كِتَابٌ becomes كُتُبٌ (books) through:',
      options: [
        'Adding a regular suffix, like the sound plural',
        'An internal restructuring of the singular noun\u2019s own vowel pattern',
        'Adding waw and nun',
        'Adding taa marbuta',
      ],
      correctIndex: 1,
      explanation: 'رَجُلٌ becoming رِجَالٌ illustrates a genuinely different internal pattern for a different word.',
    },
    {
      id: 'ar7q17',
      question: 'According to the lesson, despite jam\u2019 at-taksir\u2019s internal irregularity in formation, it declines using:',
      options: [
        'The special letter-based markers used by the sound masculine plural and the dual',
        'The ordinary, original i\u2019rab signs: damma, fatha, and kasra',
        'No i\u2019rab at all',
        'Only sukoon in every state',
      ],
      correctIndex: 1,
      explanation: 'This distinguishes it from the letter-based patterns already covered across this course\u2019s sixth unit.',
    },
    {
      id: 'ar7q18',
      question: 'According to the lesson, الكُتُبُ, already used in this course\u2019s third unit to illustrate the non-human plural khabar rule, is itself:',
      options: [
        'A sound masculine plural',
        'An instance of jam\u2019 at-taksir, the broken plural this unit has just introduced',
        'A dual noun',
        'A proper noun',
      ],
      correctIndex: 1,
      explanation: 'This means that memorable example from three units ago was, from the very beginning, a real instance of this same category.',
    },
    {
      id: 'ar7q19',
      question: 'According to the lesson, this course\u2019s eighth unit turns to:',
      options: [
        'A repeat of the broken plural',
        'Huruf al-jarr and al-idafah, how nouns relate to one another and to prepositions',
        'Kaana wa akhawatuha',
        'The three types of khabar',
      ],
      correctIndex: 1,
      explanation: 'Both have already been referenced repeatedly across this course\u2019s earlier units without yet receiving full treatment.',
    },
    {
      id: 'ar7q20',
      question: 'According to the lesson, هُوَ (he) illustrates which category of ma\u2019rifah?',
      options: [
        'The proper noun', 'The pronoun', 'The demonstrative noun', 'The relative noun'
      ],
      correctIndex: 1,
      explanation: 'Pronouns are always definite.',
    },
    {
      id: 'ar7q21',
      question: 'الَّذِي (the one who) illustrates which category of ma\u2019rifah?',
      options: [
        'The definite article', 'The relative noun', 'The pronoun', 'The proper noun'
      ],
      correctIndex: 1,
      explanation: 'This is one of the six recognized categories covered directly in this unit\u2019s first topic.',
    },
    {
      id: 'ar7q22',
      question: 'According to the lesson, an unfamiliar name carrying taa marbuta should be treated as:',
      options: [
        'Definitely feminine with no exceptions possible',
        'Likely feminine, but not an absolute, infallible guarantee, given documented exceptions',
        'Definitely masculine',
        'Impossible to classify at all',
      ],
      correctIndex: 1,
      explanation: 'This reflects the honest exception named directly through طَلْحَة.',
    },
    {
      id: 'ar7q23',
      question: 'According to the lesson, understanding that plural splits into two genuinely different formation strategies is:',
      options: [
        'An unnecessary complication with no practical use',
        'Essential preparation for this unit\u2019s closing topic on the broken plural',
        'Only relevant to sound plurals',
        'Already fully covered in this course\u2019s sixth unit with nothing left to add',
      ],
      correctIndex: 1,
      explanation: 'This distinction is drawn directly in this unit\u2019s third topic before the closing topic examines jam\u2019 at-taksir.',
    },
    {
      id: 'ar7q24',
      question: 'According to the lesson, three examples of jam\u2019 at-taksir given directly are:',
      options: [
        'كِتَابٌ\u2192كُتُبٌ, رَجُلٌ\u2192رِجَالٌ, and قَلَمٌ\u2192أَقْلَامٌ',
        'الطَّالِبَانِ, المُسْلِمُونَ, and المُسْلِمَاتُ',
        'أَبٌ, أَخٌ, and حَمٌ',
        'This unit gives no concrete examples',
      ],
      correctIndex: 0,
      explanation: 'These illustrate three entirely different internal transformations rather than one shared pattern.',
    },
    {
      id: 'ar7q25',
      question: 'According to the lesson, the six categories of ma\u2019rifah and the two categories of mu\u2019annath both illustrate:',
      options: [
        'Arbitrary lists with no underlying logic',
        'Systematic frameworks this course draws on directly in its treatment of agreement rules in earlier and later units',
        'Concepts entirely unrelated to i\u2019rab or agreement',
        'Rules that apply only to proper nouns',
      ],
      correctIndex: 1,
      explanation: 'Both connect directly to rules already covered in this course\u2019s third unit and rules still to come in later units.',
    },
    {
      id: 'ar7q26',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'The broken plural directly to definiteness, in reverse order',
        'Definiteness, to gender, to the three-way number system, to the broken plural specifically',
        'A repeat of Unit 6\u2019s content with no new material',
        'Idafah directly to harf al-jarr, skipping noun categories entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar7q27',
      question: 'According to the lesson, feminine geographic names and paired body parts are examples of:',
      options: [
        'Mu\u2019annath lafzi', 'A further category of mu\u2019annath ma\u2019nawi beyond umm alone', 'Masculine nouns', 'Broken plurals'
      ],
      correctIndex: 1,
      explanation: 'These carry no visible marker yet are still treated as grammatically feminine.',
    },
    {
      id: 'ar7q28',
      question: 'According to the lesson, jam\u2019 as-salim, already covered in this course\u2019s sixth unit, is characterized by:',
      options: [
        'Internal restructuring of the singular noun',
        'A regular, predictable suffix added without disturbing the singular noun\u2019s own internal structure',
        'No fixed pattern of any kind',
        'Being rarer than jam\u2019 at-taksir',
      ],
      correctIndex: 1,
      explanation: 'This is the direct contrast drawn against jam\u2019 at-taksir in this unit\u2019s third and fourth topics.',
    },
    {
      id: 'ar7q29',
      question: 'According to the lesson, هَذَا (this) illustrates which category of ma\u2019rifah?',
      options: [
        'The demonstrative noun', 'The relative noun', 'The definite article', 'The pronoun'
      ],
      correctIndex: 0,
      explanation: 'This is one of the six categories listed directly in this unit\u2019s opening qaidah.',
    },
    {
      id: 'ar7q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Nouns in Arabic carry no meaningful internal categories beyond their basic meaning',
        'Every Arabic noun carries three layered categories, definiteness, gender, and number, each governed by specific, learnable rules that connect directly to agreement patterns already introduced earlier in this course',
        'Only definiteness matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 7 into a single foundational claim, setting up harf al-jarr and idafah in Unit 8.',
    },
  ],

  'unit-8': [
    {
      id: 'ar8q1',
      question: 'According to the lesson, this course\u2019s first unit already identified being preceded by a harf jarr as:',
      options: [
        'A sign confirming a word as a fi\u2019l',
        'One of the four reliable signs confirming a word as an ism',
        'A sign confirming a word as a harf itself',
        'Not relevant to identifying word categories',
      ],
      correctIndex: 1,
      explanation: 'This unit now examines huruf al-jarr directly, both their meanings and their grammatical effect.',
    },
    {
      id: 'ar8q2',
      question: 'Which of the following is listed in the lesson among the most commonly used huruf al-jarr?',
      options: [
        'هَلْ', 'مِنْ', 'قَدْ', 'لَنْ'
      ],
      correctIndex: 1,
      explanation: 'مِنْ means "from."',
    },
    {
      id: 'ar8q3',
      question: 'According to the lesson, which three huruf al-jarr attach directly to the following word rather than standing separately?',
      options: [
        'مِنْ، إِلَى، عَنْ', 'بِـ، كَـ، لِـ', 'فِي، عَلَى، حَتَّى', 'None; all huruf al-jarr stand as separate words'
      ],
      correctIndex: 1,
      explanation: 'This distinction affects only how each preposition is written, not its underlying grammatical effect.',
    },
    {
      id: 'ar8q4',
      question: 'According to the lesson, عَنْ and مِنْ:',
      options: [
        'Mean exactly the same thing with no distinction at all',
        'Overlap in English translation while marking genuinely distinct relationships in Arabic itself',
        'Are not actually huruf al-jarr',
        'Never appear in the same text',
      ],
      correctIndex: 1,
      explanation: 'This shows that meaning is not always predictable from a single English equivalent.',
    },
    {
      id: 'ar8q5',
      question: 'According to the qaidah given in the lesson, every noun falling immediately after a harf jarr is:',
      options: [
        'Marfu\u2019', 'Mansub', 'Majrur (in the state of jarr)', 'Majzum'
      ],
      correctIndex: 2,
      explanation: 'This confirms directly the rule already established in this course\u2019s fifth unit.',
    },
    {
      id: 'ar8q6',
      question: 'According to the lesson, harf al-jarr itself:',
      options: [
        'Takes i\u2019rab depending on context',
        'Is mabni, taking no i\u2019rab of its own regardless of context',
        'Always carries raf\u2019',
        'Always carries jarr, exactly like the noun it governs',
      ],
      correctIndex: 1,
      explanation: 'The entire grammatical effect falls exclusively on the following noun.',
    },
    {
      id: 'ar8q7',
      question: 'According to the lesson, jarr wa majrur is precisely what this course\u2019s third unit already introduced as:',
      options: [
        'Khabar mufrad', 'Shibh al-jumlah, one of the three forms al-khabar can take', 'Al-mubtada', 'Al-fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'فِي المَسْجِدِ, already used in that same unit, is jarr wa majrur functioning as khabar.',
    },
    {
      id: 'ar8q8',
      question: 'According to the lesson, huruf al-jarr zaa\u2019idah are described as:',
      options: [
        'Particles that never actually cause jarr',
        'Augmenting particles adding emphasis rather than genuinely new meaning, while still causing jarr grammatically',
        'A category that does not actually exist in Arabic',
        'Particles used exclusively in questions',
      ],
      correctIndex: 1,
      explanation: 'This is named honestly rather than presenting every harf jarr as always carrying equally weighty meaning.',
    },
    {
      id: 'ar8q9',
      question: 'According to the lesson, harf al-jarr is only one of how many triggers for jarr case already identified in this course\u2019s fifth unit?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctIndex: 1,
      explanation: 'This unit\u2019s remaining two topics turn to the second trigger, al-idafah.',
    },
    {
      id: 'ar8q10',
      question: 'Al-idafah is described as:',
      options: [
        'A construct requiring a separate word for "of"',
        'Arabic\u2019s own way of expressing possession by joining two nouns directly, with no separate connecting word',
        'A category that only applies to proper nouns',
        'Identical in structure to a harf jarr and its noun',
      ],
      correctIndex: 1,
      explanation: 'كِتَابُ الطَّالِبِ illustrates this construct precisely.',
    },
    {
      id: 'ar8q11',
      question: 'The first noun in an idafah construct is called:',
      options: [
        'Al-mudaf ilayh', 'Al-mudaf', 'Al-khabar', 'Al-fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'The second noun is called al-mudaf ilayh.',
    },
    {
      id: 'ar8q12',
      question: 'مُعَلِّمُو المَدْرَسَةِ (the school\u2019s teachers) directly fulfills a forward reference from which earlier unit of this course?',
      options: [
        'This course\u2019s fifth unit', 'This course\u2019s sixth unit, regarding the sound masculine plural dropping its final noon when mudaf', 'This course\u2019s third unit', 'This course\u2019s first unit'
      ],
      correctIndex: 1,
      explanation: 'مُعَلِّمُونَ loses its final نَ once it becomes mudaf.',
    },
    {
      id: 'ar8q13',
      question: 'According to the lesson, idafah chains extending across more than two nouns work by:',
      options: [
        'Only the first noun in the chain functioning as mudaf',
        'Each middle noun functioning simultaneously as mudaf ilayh to the noun before it and mudaf to the noun after it',
        'Repeating the definite article on every noun in the chain',
        'This is not possible in Arabic grammar',
      ],
      correctIndex: 1,
      explanation: 'بَابُ بَيْتِ المُدِيرِ illustrates this directly, with بَيْتِ serving both roles at once.',
    },
    {
      id: 'ar8q14',
      question: 'According to the qaidah given in the lesson, al-mudaf:',
      options: [
        'Always carries tanween',
        'Never carries tanween, never takes "al-", and its i\u2019rab follows entirely from its own role in the sentence',
        'Always carries jarr regardless of context',
        'Always takes the definite article directly',
      ],
      correctIndex: 1,
      explanation: 'These are the three governing rules of al-mudaf.',
    },
    {
      id: 'ar8q15',
      question: 'According to the lesson, al-mudaf becomes definite by position specifically when:',
      options: [
        'It carries tanween',
        'Its own mudaf ilayh is definite, drawing on the six categories of ma\u2019rifah from this course\u2019s seventh unit',
        'It is plural',
        'It is preceded by a harf jarr',
      ],
      correctIndex: 1,
      explanation: 'كِتَابُ الطَّالِبِ is definite as a whole precisely because الطَّالِبِ carries the definite article.',
    },
    {
      id: 'ar8q16',
      question: 'According to the qaidah given in the lesson, al-mudaf ilayh:',
      options: [
        'Is always in the state of jarr, regardless of context',
        'Shifts case depending on its own role in the sentence, exactly like al-mudaf',
        'Never carries tanween or "al-"',
        'Is always in the state of raf\u2019',
      ],
      correctIndex: 0,
      explanation: 'This is one consistent rule that never changes, unlike al-mudaf\u2019s own shifting case.',
    },
    {
      id: 'ar8q17',
      question: 'In رَأَيْتُ كِتَابَ الطَّالِبِ (I saw the student\u2019s book), كِتَابَ carries nasb because:',
      options: [
        'It is always in nasb regardless of context',
        'It functions as maf\u2019ul bihi, already covered directly in this course\u2019s fourth unit',
        'It is the mudaf ilayh',
        'It follows a harf jarr',
      ],
      correctIndex: 1,
      explanation: 'الطَّالِبِ carries jarr regardless, exactly as al-mudaf ilayh always does.',
    },
    {
      id: 'ar8q18',
      question: 'According to the lesson, this course\u2019s ninth unit turns directly to:',
      options: [
        'A repeat of harf al-jarr and idafah',
        'At-tawabi\u2019, elements that follow and depend directly on a noun already present in the sentence, beginning with an-na\u2019t',
        'Kaana wa akhawatuha',
        'The three types of khabar',
      ],
      correctIndex: 1,
      explanation: 'This is a genuinely new set of categories building on the noun material already covered across this course.',
    },
    {
      id: 'ar8q19',
      question: 'According to the lesson, despite never carrying "al-" itself, al-mudaf can still be understood as definite because:',
      options: [
        'It always carries tanween instead',
        'It borrows its definiteness from its own mudaf ilayh, when that mudaf ilayh is itself definite',
        'All mudaf nouns are automatically definite regardless of the mudaf ilayh',
        'Definiteness is irrelevant to idafah constructs entirely',
      ],
      correctIndex: 1,
      explanation: 'كِتَابُ never displays this definiteness directly on its own form, yet the whole construct is still definite.',
    },
    {
      id: 'ar8q20',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Al-mudaf directly to huruf al-jarr, in reverse order',
        'The meanings of common prepositions, to their grammatical effect, to idafah\u2019s basic structure, to the specific rules of mudaf and mudaf ilayh',
        'A repeat of Unit 7\u2019s content with no new material',
        'At-tawabi\u2019 directly, skipping harf al-jarr and idafah entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar8q21',
      question: 'According to the lesson, classical grammarians recognize:',
      options: [
        'Only the small set of huruf al-jarr covered directly in this unit, with no others existing',
        'A considerably longer list of huruf al-jarr beyond this unit\u2019s core set, including rarer particles used in oaths and classical constructions',
        'No fixed list of huruf al-jarr at all',
        'Exactly one hundred huruf al-jarr',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s own scope remains focused on the set encountered most often in ordinary reading.',
    },
    {
      id: 'ar8q22',
      question: 'According to the lesson, بَابُ بَيْتِ المُدِيرِ (the door of the manager\u2019s house) shows بَيْتِ functioning as:',
      options: [
        'Only a mudaf, with no other role',
        'Both mudaf ilayh to the noun before it and mudaf to the noun after it, simultaneously',
        'Only a mudaf ilayh, with no other role',
        'Neither mudaf nor mudaf ilayh',
      ],
      correctIndex: 1,
      explanation: 'Only the final noun in such a chain can carry "al-" directly.',
    },
    {
      id: 'ar8q23',
      question: 'According to the lesson, the distinction between huruf al-jarr that attach directly and those that stand separately affects:',
      options: [
        'Their underlying grammatical effect on the following noun',
        'Only how each preposition is written',
        'Whether they cause jarr at all',
        'Their basic meaning entirely',
      ],
      correctIndex: 1,
      explanation: 'The grammatical effect (causing jarr) remains identical regardless of this written distinction.',
    },
    {
      id: 'ar8q24',
      question: 'According to the lesson, mudaf ilayh differs from mudaf specifically in that:',
      options: [
        'Mudaf ilayh can carry tanween or "al-", while mudaf can carry neither',
        'Mudaf ilayh never carries tanween while mudaf always does',
        'Both follow identical rules with no distinction',
        'Mudaf ilayh\u2019s case shifts with sentence role while mudaf\u2019s never does',
      ],
      correctIndex: 0,
      explanation: 'This directly reverses the specific restrictions placed on al-mudaf.',
    },
    {
      id: 'ar8q25',
      question: 'According to the lesson, this unit connects to material from how many of this course\u2019s earlier units?',
      options: [
        'None; this unit introduces entirely new, unconnected material',
        'Several, including the first, third, fourth, fifth, sixth, and seventh units',
        'Only the fifth unit',
        'Only the first unit',
      ],
      correctIndex: 1,
      explanation: 'This unit consolidates and directly fulfills several forward references made throughout this course.',
    },
    {
      id: 'ar8q26',
      question: 'According to the lesson, why is it worth naming huruf al-jarr zaa\u2019idah honestly rather than omitting them?',
      options: [
        'They are extremely rare and never actually appear',
        'This avoids presenting every harf jarr as always carrying equally weighty independent meaning',
        'They contradict the core rule of harf al-jarr entirely',
        'This detail has no practical value for a reader',
      ],
      correctIndex: 1,
      explanation: 'This reflects the same honest calibration this course has applied to other genuine nuances throughout.',
    },
    {
      id: 'ar8q27',
      question: 'According to the lesson, في السَّاعَةِ الخَامِسَةِ style time expressions in Arabic rely overwhelmingly on which single preposition, according to broader usage patterns discussed in this unit\u2019s first topic?',
      options: [
        'عَلَى', 'فِي', 'مِنْ', 'حَتَّى'
      ],
      correctIndex: 1,
      explanation: 'Arabic relies heavily on a single preposition for many time expressions where English shifts between several.',
    },
    {
      id: 'ar8q28',
      question: 'According to the lesson, the relationship between huruf al-jarr and idafah as two triggers for jarr is:',
      options: [
        'Entirely unrelated categories with no shared feature',
        'Two structurally different mechanisms that both place a noun into the exact same jarr case already established in this course\u2019s fifth unit',
        'Identical mechanisms with no real distinction between them',
        'A distinction that only applies to proper nouns',
      ],
      correctIndex: 1,
      explanation: 'This unit examines both mechanisms directly, one through prepositions, the other through idafah.',
    },
    {
      id: 'ar8q29',
      question: 'According to the lesson, understanding al-mudaf and al-mudaf ilayh\u2019s distinct rules matters because:',
      options: [
        'They are identical and interchangeable in every respect',
        'Confusing which noun follows which rule would lead to genuine, identifiable errors in both case marking and definiteness',
        'These rules have no bearing on reading real Arabic text',
        'Only al-mudaf ilayh actually matters; al-mudaf\u2019s rules are optional',
      ],
      correctIndex: 1,
      explanation: 'This is precisely why this unit gives each set of rules its own direct, dedicated treatment.',
    },
    {
      id: 'ar8q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Prepositions and possession in Arabic follow no learnable, consistent system',
        'Two distinct mechanisms, prepositions and idafah, both place a noun into jarr case, each governed by its own precise, learnable rules that this course has been building toward across several earlier units',
        'Only huruf al-jarr matter for correct Arabic grammar',
        'This unit has no connection to the i\u2019rab system already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 8 into a single foundational claim, setting up at-tawabi\u2019 in Unit 9.',
    },
  ],

  'unit-9': [
    {
      id: 'ar9q1',
      question: 'According to the lesson, all four elements of at-tawabi\u2019 share which defining mechanical trait?',
      options: [
        'Each has its own case independently assigned by its own grammatical role',
        'Each takes its own i\u2019rab entirely from a preceding noun already present in the sentence',
        'Each is always mabni, taking no i\u2019rab at all',
        'Each must always be plural',
      ],
      correctIndex: 1,
      explanation: 'This is the shared mechanism this unit opens with and returns to at its close.',
    },
    {
      id: 'ar9q2',
      question: 'According to the qaidah given in the lesson, an-na\u2019t must match its man\u2019ut (the noun it describes) in how many categories?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctIndex: 2,
      explanation: 'Case, definiteness, gender, and number.',
    },
    {
      id: 'ar9q3',
      question: 'In عَبَّاسٌ تَاجِرٌ غَنِيٌّ (Abbas is a rich merchant), تَاجِرٌ functions as:',
      options: [
        'An-na\u2019t, requiring four-way agreement',
        'Al-khabar, already covered in this course\u2019s third unit, requiring agreement only in gender and number',
        'Al-badal', 'Al-mudaf'
      ],
      correctIndex: 1,
      explanation: 'غَنِيٌّ, by contrast, functions as an-na\u2019t describing تَاجِرٌ specifically.',
    },
    {
      id: 'ar9q4',
      question: 'In that same example, غَنِيٌّ must match تَاجِرٌ in:',
      options: [
        'Only gender and number, exactly like khabar',
        'All four categories: case, definiteness, gender, and number',
        'Only case', 'No categories at all'
      ],
      correctIndex: 1,
      explanation: 'Both are indefinite, both masculine, both singular, and both marfu\u2019.',
    },
    {
      id: 'ar9q5',
      question: 'According to the lesson, الطَّالِبُ المُجْتَهِدُ (the diligent student), with both words definite, is:',
      options: [
        'Already a complete sentence on its own',
        'Not yet a complete sentence, since المُجْتَهِدُ functions as na\u2019t and the phrase still requires its own khabar',
        'An example of al-\u2019atf',
        'An example of al-badal',
      ],
      correctIndex: 1,
      explanation: 'This connects directly back to jumlah mufeedah, already covered in this course\u2019s second unit.',
    },
    {
      id: 'ar9q6',
      question: 'According to the lesson, confusing na\u2019t with khabar risks:',
      options: [
        'No real consequence for reading Arabic',
        'Misreading an entire sentence\u2019s structure',
        'Only affecting pronunciation',
        'Only affecting definiteness, nothing else',
      ],
      correctIndex: 1,
      explanation: 'This is why this unit stresses the four-way versus two-way agreement distinction so directly.',
    },
    {
      id: 'ar9q7',
      question: 'Al-\u2019atf joins al-ma\u2019tuf to al-ma\u2019tuf \u2019alayhi using which kind of particle?',
      options: [
        'Huruf al-jarr', 'Huruf al-\u2019atf, such as وَ، فَ، ثُمَّ، and أَوْ', 'Huruf an-nasb', 'Huruf al-jazm'
      ],
      correctIndex: 1,
      explanation: 'These particles include wa (and), fa (so/then), thumma (then), and aw (or).',
    },
    {
      id: 'ar9q8',
      question: 'According to the qaidah given in the lesson, al-\u2019atf requires matching in:',
      options: [
        'Four categories, exactly like na\u2019t',
        'I\u2019rab (case) alone',
        'Gender and number only',
        'No categories at all',
      ],
      correctIndex: 1,
      explanation: 'This is considerably narrower than an-na\u2019t\u2019s own four-way requirement.',
    },
    {
      id: 'ar9q9',
      question: 'In جَاءَ زَيْدٌ وَعَمْرٌو (Zayd and \u2018Amr came), both nouns share raf\u2019 because:',
      options: [
        'They share the same gender',
        'They share the same fa\u2019il role already covered in this course\u2019s fourth unit',
        'They are both definite',
        'They are both feminine',
      ],
      correctIndex: 1,
      explanation: 'Zayd and \u2018Amr may otherwise differ freely in gender, number, or definiteness.',
    },
    {
      id: 'ar9q10',
      question: 'According to the lesson, why does al-\u2019atf\u2019s narrower rule genuinely make sense?',
      options: [
        'It links two independent items sharing the same grammatical role, unlike na\u2019t which describes a single noun closely',
        'It has no real underlying logic at all',
        'It is actually identical to na\u2019t in every respect',
        'It only applies to feminine nouns',
      ],
      correctIndex: 0,
      explanation: 'This is the direct contrast drawn against na\u2019t in this unit\u2019s second topic.',
    },
    {
      id: 'ar9q11',
      question: 'At-tawkid al-lafzi, verbal emphasis, is achieved by:',
      options: [
        'Using a dedicated set of emphasis words',
        'Simply repeating the original word itself',
        'Adding a harf jarr',
        'Adding tanween',
      ],
      correctIndex: 1,
      explanation: 'At-tawkid al-ma\u2019nawi, by contrast, uses specific dedicated words instead.',
    },
    {
      id: 'ar9q12',
      question: 'According to the lesson, which words are named as the most common tawkid ma\u2019nawi words?',
      options: [
        'نَفْس، عَيْن، and كُلّ', 'مِنْ، إِلَى، and عَنْ', 'هَذَا، تِلْكَ، and أُولَٰئِكَ', 'الَّذِي and الَّتِي'
      ],
      correctIndex: 0,
      explanation: 'نَفْس and عَيْن both roughly mean "itself"; كُلّ means "all" or "every."',
    },
    {
      id: 'ar9q13',
      question: 'According to the lesson, each tawkid ma\u2019nawi word must be:',
      options: [
        'Preceded by a harf jarr',
        'Mudaf to a pronoun referring back to the exact noun being emphasized',
        'Always indefinite',
        'Always plural',
      ],
      correctIndex: 1,
      explanation: 'This draws directly on idafah, already covered in this course\u2019s eighth unit.',
    },
    {
      id: 'ar9q14',
      question: 'In جَاءَ الأَمِيرُ نَفْسُهُ (the prince himself came), نَفْسُهُ emphasizes that:',
      options: [
        'A representative of the prince came instead',
        'The prince personally came, rather than merely sending a representative',
        'Two princes came together',
        'The prince did not actually come',
      ],
      correctIndex: 1,
      explanation: 'نَفْسُهُ is nafs mudaf to the pronoun هُ referring back to الأَمِيرُ.',
    },
    {
      id: 'ar9q15',
      question: 'According to the qaidah given in the lesson, at-tawkid follows the emphasized word in:',
      options: [
        'Four categories, exactly like na\u2019t',
        'Its own case alone, exactly like al-\u2019atf',
        'Gender only',
        'No categories at all',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the same narrower rule already established for al-\u2019atf in this unit\u2019s second topic.',
    },
    {
      id: 'ar9q16',
      question: 'Al-badal follows a preceding noun, called al-mubdal minhu, and:',
      options: [
        'Simply repeats it verbatim',
        'Restates it with greater specificity, functioning as though the first noun were a preliminary gesture toward the more precise meaning',
        'Contradicts its meaning entirely',
        'Joins it using a harf al-\u2019atf',
      ],
      correctIndex: 1,
      explanation: 'This is genuinely different from both al-\u2019atf and at-tawkid in its underlying function.',
    },
    {
      id: 'ar9q17',
      question: 'According to the lesson, al-badal follows its mubdal minhu in:',
      options: [
        'Four categories', 'Case alone, like al-\u2019atf and at-tawkid', 'Gender and number only', 'No categories at all'
      ],
      correctIndex: 1,
      explanation: 'This is the same narrower rule shared by three of this unit\u2019s four dependents.',
    },
    {
      id: 'ar9q18',
      question: 'In زَارَنِي الأَمِيرُ خَالِدٌ (the prince, Khalid, visited me), خَالِدٌ functions as:',
      options: [
        'Na\u2019t for الأَمِيرُ', 'Badal for الأَمِيرُ, specifying exactly which prince is meant', 'Khabar', 'Mudaf ilayh'
      ],
      correctIndex: 1,
      explanation: 'Both nouns share raf\u2019 as fa\u2019il.',
    },
    {
      id: 'ar9q19',
      question: 'According to the lesson, classical Nahw recognizes, beyond the straightforward substitution covered directly in this unit:',
      options: [
        'No further categories of badal at all',
        'Several further categories, including badal covering only part of the original noun',
        'Only one further category, identical to na\u2019t',
        'Categories that apply only to verbs',
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s own scope covers only the clearest, most direct form.',
    },
    {
      id: 'ar9q20',
      question: 'According to the lesson, which three of the four tawabi\u2019 share the exact same "case alone" agreement rule?',
      options: [
        'An-na\u2019t, al-\u2019atf, and at-tawkid',
        'Al-\u2019atf, at-tawkid, and al-badal',
        'An-na\u2019t, at-tawkid, and al-badal',
        'All four share the four-way rule equally',
      ],
      correctIndex: 1,
      explanation: 'An-na\u2019t alone requires the more demanding four-way agreement.',
    },
    {
      id: 'ar9q21',
      question: 'According to the lesson, this course\u2019s tenth unit turns to:',
      options: [
        'A repeat of at-tawabi\u2019',
        'Kaana wa akhawatuha, a group of verbs that actively change the rules governing the nominal sentence',
        'Harf al-jarr and idafah',
        'The three types of khabar',
      ],
      correctIndex: 1,
      explanation: 'This is described as something genuinely different from the material covered across this unit.',
    },
    {
      id: 'ar9q22',
      question: 'According to the lesson, the name "at-tawabi\u2019" is drawn directly from:',
      options: [
        'A place name in Arabia',
        'An Arabic root meaning "to follow"',
        'The name of a classical grammarian',
        'A term unrelated to the category\u2019s actual function',
      ],
      correctIndex: 1,
      explanation: 'This reflects the shared mechanical trait uniting all four elements this unit covers.',
    },
    {
      id: 'ar9q23',
      question: 'According to the lesson, ثُمَّ, one of the huruf al-\u2019atf, specifically implies:',
      options: [
        'Simultaneous action with no delay', 'Some delay between the two joined items', 'A negative meaning', 'A question'
      ],
      correctIndex: 1,
      explanation: 'This is distinguished directly from فَ, which does not carry this same implication of delay.',
    },
    {
      id: 'ar9q24',
      question: 'According to the lesson, at-tawkid removes ambiguity by:',
      options: [
        'Introducing a completely new, unrelated idea',
        'Reinforcing a preceding noun\u2019s meaning so that who or what is actually intended becomes unmistakably clear',
        'Replacing the preceding noun entirely',
        'Joining two unrelated nouns together',
      ],
      correctIndex: 1,
      explanation: 'This distinguishes at-tawkid\u2019s function directly from al-badal\u2019s own restating function.',
    },
    {
      id: 'ar9q25',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Al-badal directly to an-na\u2019t, in reverse order',
        'An-na\u2019t\u2019s demanding four-way agreement, to al-\u2019atf, at-tawkid, and al-badal, each requiring only matching case',
        'A repeat of Unit 8\u2019s content with no new material',
        'Kaana wa akhawatuha directly, skipping at-tawabi\u2019 entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar9q26',
      question: 'According to the lesson, al-badal and al-\u2019atf differ in their underlying function in that:',
      options: [
        'Al-badal restates a single noun with greater specificity, while al-\u2019atf joins two genuinely separate, independent items',
        'They are functionally identical with no real distinction',
        'Al-\u2019atf restates a single noun while al-badal joins separate items',
        'Neither actually shares the "case alone" agreement rule',
      ],
      correctIndex: 0,
      explanation: 'Despite this functional difference, both still share the exact same case-only agreement rule.',
    },
    {
      id: 'ar9q27',
      question: 'According to the lesson, why is it important to state honestly that further categories of badal exist beyond this unit\u2019s coverage?',
      options: [
        'To discourage further study of the topic',
        'To avoid presenting the clearest, most direct form as though it were the only form badal ever takes',
        'These further categories contradict the rule already given',
        'This detail has no practical value',
      ],
      correctIndex: 1,
      explanation: 'This reflects the same honest calibration this course has applied to other genuine nuances throughout.',
    },
    {
      id: 'ar9q28',
      question: 'According to the lesson, in جَاءَ الأَمِيرُ نَفْسُهُ, نَفْسُهُ carries which case?',
      options: [
        'Nasb', 'The same case as الأَمِيرُ, since it matches the emphasized word', 'Jarr regardless of context', 'No case at all'
      ],
      correctIndex: 1,
      explanation: 'الأَمِيرُ is fa\u2019il here, carrying raf\u2019, which نَفْسُهُ then matches.',
    },
    {
      id: 'ar9q29',
      question: 'According to the lesson, the shared mechanism uniting all four tawabi\u2019 is best understood as:',
      options: [
        'A coincidental similarity with no real conceptual unity',
        'A single underlying principle, dependents drawing their i\u2019rab from a preceding noun, expressed through four functionally different structures',
        'A rule that applies to only one of the four elements',
        'Something entirely unrelated to i\u2019rab',
      ],
      correctIndex: 1,
      explanation: 'This is the unifying claim this unit opens and closes with.',
    },
    {
      id: 'ar9q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Description, conjunction, emphasis, and substitution follow entirely unrelated, arbitrary rules',
        'Four genuinely different ways of extending a noun, description, joining, emphasis, and restatement, are unified by the single mechanism of drawing i\u2019rab from what precedes them',
        'Only an-na\u2019t matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 9 into a single foundational claim, setting up kaana wa akhawatuha in Unit 10.',
    },
  ],

  'unit-10': [
    {
      id: 'ar10q1',
      question: 'According to the lesson, al-af\u2019al an-naqisah are called "defective" because:',
      options: [
        'They are rarely used in Arabic',
        'Unlike an ordinary fi\u2019l, they cannot convey complete meaning through action and doer alone, requiring a khabar instead',
        'They have no i\u2019rab at all',
        'They only appear in poetry',
      ],
      correctIndex: 1,
      explanation: 'They require a khabar to complete their meaning, much as al-mubtada itself does.',
    },
    {
      id: 'ar10q2',
      question: 'Which of the following is listed in the lesson as one of kaana\u2019s sisters?',
      options: [
        'هَلْ', 'أَصْبَحَ', 'قَدْ', 'إِنَّ'
      ],
      correctIndex: 1,
      explanation: 'أَصْبَحَ means "became," associated with morning.',
    },
    {
      id: 'ar10q3',
      question: 'According to the lesson, لَيْسَ is distinguished from kaana and her other sisters because:',
      options: [
        'It conjugates across past, present, and command forms exactly like kaana',
        'It exists only in one fixed shape, carrying present-tense negation despite its own past-tense appearance',
        'It never actually appears with a khabar',
        'It is not actually considered one of kaana\u2019s sisters',
      ],
      correctIndex: 1,
      explanation: 'It has no corresponding mudari\u2019 or amr form of its own at all.',
    },
    {
      id: 'ar10q4',
      question: 'According to the lesson, مَا زَالَ and its closely related family of verbs:',
      options: [
        'Never require any preceding particle at all',
        'Specifically require a preceding negation particle to carry their "continued to" meaning, a genuine grammatical requirement',
        'Only function as ordinary transitive verbs',
        'Are identical in every respect to laysa',
      ],
      correctIndex: 1,
      explanation: 'This includes مَا بَرِحَ, مَا فَتِئَ, and مَا انْفَكَّ.',
    },
    {
      id: 'ar10q5',
      question: 'According to the lesson, this course\u2019s third unit already noted that khabar\u2019s default raf\u2019 case changes specifically once:',
      options: [
        'A harf jarr enters the sentence',
        'Kaana or one of her sisters enters the sentence',
        'The sentence becomes plural',
        'An adjective is added',
      ],
      correctIndex: 1,
      explanation: 'This unit examines exactly what that change actually is.',
    },
    {
      id: 'ar10q6',
      question: 'According to the qaidah given in the lesson, once kaana or a sister enters a jumlah ismiyyah:',
      options: [
        'Both nouns shift into nasb',
        'The mubtada keeps raf\u2019 while the khabar shifts into nasb',
        'The mubtada shifts into nasb while the khabar keeps raf\u2019',
        'Both nouns remain entirely unchanged',
      ],
      correctIndex: 1,
      explanation: 'This is the core, defining effect of kaana and her sisters.',
    },
    {
      id: 'ar10q7',
      question: 'In كَانَ الجَوُّ جَمِيلًا (the weather was beautiful), جَمِيلًا carries:',
      options: [
        'Raf\u2019, exactly as it did before kaana entered',
        'Nasb, carrying fatha in place of the damma it carried before kaana entered',
        'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'الجَوُّ retains its own raf\u2019 entirely unchanged.',
    },
    {
      id: 'ar10q8',
      question: 'According to the lesson, why does kaana\u2019s narrow, precise effect matter?',
      options: [
        'It alters the sentence\u2019s overall structure unpredictably',
        'It changes only one specific noun\u2019s case, leaving the other entirely untouched, which allows these two elements to receive their own specific names',
        'It has no real practical consequence',
        'It eliminates the need for i\u2019rab entirely',
      ],
      correctIndex: 1,
      explanation: 'This precision is what allows this unit\u2019s next topic to name these elements directly.',
    },
    {
      id: 'ar10q9',
      question: 'Once kaana or a sister enters a sentence, al-mubtada is renamed:',
      options: [
        'Khabar kaana', 'Ism kaana', 'Al-fa\u2019il', 'Al-maf\u2019ul bihi'
      ],
      correctIndex: 1,
      explanation: 'Al-khabar is renamed khabar kaana.',
    },
    {
      id: 'ar10q10',
      question: 'According to the lesson, khabar kaana can still take:',
      options: [
        'Only the mufrad form',
        'Any of the three forms already established in this course\u2019s third unit: mufrad, jumlah, or shibh jumlah',
        'Only the jumlah form',
        'No specific form at all',
      ],
      correctIndex: 1,
      explanation: 'This holds despite khabar kaana\u2019s new name and shifted nasb case.',
    },
    {
      id: 'ar10q11',
      question: 'In أَصْبَحَ الجَوُّ بَارِدًا (the weather became cold), الجَوُّ functions as:',
      options: [
        'Khabar asbaha', 'Ism asbaha, retaining raf\u2019', 'Al-fa\u2019il', 'Al-mudaf'
      ],
      correctIndex: 1,
      explanation: 'بَارِدًا functions as khabar asbaha, carrying nasb.',
    },
    {
      id: 'ar10q12',
      question: 'According to the lesson, كَانَ الكِتَابُ عَلَى الطَّاوِلَةِ (the book was on the table) uses عَلَى الطَّاوِلَةِ, a shibh jumlah, to confirm that:',
      options: [
        'Kaana\u2019s effect restricts khabar to the mufrad form only',
        'Kaana\u2019s effect on case does not restrict which specific form khabar itself may still take',
        'Shibh jumlah can never function as khabar kaana',
        'This construction is ungrammatical',
      ],
      correctIndex: 1,
      explanation: 'This is already familiar from this course\u2019s third and eighth units.',
    },
    {
      id: 'ar10q13',
      question: 'According to the lesson, the single most frequent mistake when applying kaana\u2019s sisters is:',
      options: [
        'Shifting the ism into nasb instead of the khabar',
        'Leaving khabar kaana in raf\u2019, its own ordinary default case, out of habit rather than correctly shifting it into nasb',
        'Forgetting to include an ism at all',
        'Using the wrong preposition',
      ],
      correctIndex: 1,
      explanation: 'كَانَ الجَوُّ جَمِيلٌ, leaving جَمِيلٌ unchanged, is a genuine, identifiable error.',
    },
    {
      id: 'ar10q14',
      question: 'According to the lesson, why is this specific mistake so easy to make?',
      options: [
        'Khabar\u2019s ordinary raf\u2019 case is never actually taught',
        'A learner who has internalized khabar\u2019s ordinary raf\u2019 case through extensive practice may continue that habit automatically even once kaana has genuinely changed the rule',
        'This mistake is actually impossible to make',
        'Kaana never actually appears in real Arabic sentences',
      ],
      correctIndex: 1,
      explanation: 'Recognizing kaana\u2019s own presence as the trigger is what actually prevents this error.',
    },
    {
      id: 'ar10q15',
      question: 'According to the lesson, a second related error involves:',
      options: [
        'Never shifting either noun at all',
        'Mistakenly shifting the ism into nasb as well, treating both nouns as equally affected by kaana\u2019s entry',
        'Using kaana in a sentence with no khabar at all',
        'Confusing kaana with a harf jarr',
      ],
      correctIndex: 1,
      explanation: 'كَانَ الجَوَّ جَمِيلًا, incorrectly placing الجَوَّ in nasb, misapplies a rule that changes only the khabar.',
    },
    {
      id: 'ar10q16',
      question: 'According to the lesson, a practical habit worth adopting is to:',
      options: [
        'Assume both nouns in a kaana sentence must always match each other, exactly as al-\u2019atf would require',
        'First confirm which noun is functioning as ism and which as khabar, then apply raf\u2019 and nasb according to that identified role',
        'Never attempt to identify ism or khabar at all',
        'Always place the second noun in raf\u2019 regardless of context',
      ],
      correctIndex: 1,
      explanation: 'This is contrasted directly with al-\u2019atf\u2019s own matching requirement, already covered in this course\u2019s ninth unit.',
    },
    {
      id: 'ar10q17',
      question: 'According to the lesson, this course\u2019s eleventh unit turns to:',
      options: [
        'A repeat of kaana and her sisters',
        'Inna wa akhawatuha, particles that also change the nominal sentence\u2019s i\u2019rab, though through the exact reverse case assignment',
        'Harf al-jarr and idafah',
        'At-tawabi\u2019',
      ],
      correctIndex: 1,
      explanation: 'This is described as a structurally related but genuinely distinct group.',
    },
    {
      id: 'ar10q18',
      question: 'According to the lesson, صَارَ specifically means:',
      options: [
        'Remained', 'Became or turned into', 'Is not', 'As long as'
      ],
      correctIndex: 1,
      explanation: 'This is listed directly among the core sisters in this unit\u2019s first topic.',
    },
    {
      id: 'ar10q19',
      question: 'According to the lesson, ظَلَّ specifically means:',
      options: [
        'Remained', 'Became, associated with evening', 'Became, associated with night', 'As long as'
      ],
      correctIndex: 0,
      explanation: 'This is distinguished directly from أَمْسَى (evening) and بَاتَ (night) among the sisters.',
    },
    {
      id: 'ar10q20',
      question: 'According to the lesson, مَا دَامَ specifically means:',
      options: [
        'Became', 'As long as', 'Is not', 'Remained'
      ],
      correctIndex: 1,
      explanation: 'This is listed directly among the core sisters in this unit\u2019s first topic.',
    },
    {
      id: 'ar10q21',
      question: 'According to the lesson, the seven sisters sharing kaana\u2019s full range of conjugation across all tenses are contrasted directly with:',
      options: [
        'An-na\u2019t and al-\u2019atf',
        'Laysa, which exists only in one fixed shape',
        'Al-mudaf and al-mudaf ilayh',
        'The five nouns from this course\u2019s sixth unit',
      ],
      correctIndex: 1,
      explanation: 'This is a genuinely distinguishing morphological detail about laysa specifically.',
    },
    {
      id: 'ar10q22',
      question: 'According to the lesson, the ordinary jumlah ismiyyah الجَوُّ جَمِيلٌ, before any sister verb enters, has:',
      options: [
        'Both mubtada and khabar in nasb',
        'Both mubtada and khabar in raf\u2019',
        'Mubtada in nasb and khabar in raf\u2019',
        'No i\u2019rab at all',
      ],
      correctIndex: 1,
      explanation: 'This is the ordinary baseline already established across this course\u2019s third unit, before kaana enters.',
    },
    {
      id: 'ar10q23',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Common mistakes directly to the sisters list, in reverse order',
        'Identifying kaana and her sisters, to their shared case-shifting effect, to the new ism/khabar terminology, to common mistakes in application',
        'A repeat of Unit 9\u2019s content with no new material',
        'Inna wa akhawatuha directly, skipping kaana entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar10q24',
      question: 'According to the lesson, kaana and her sisters require a khabar to complete their meaning in a way that parallels:',
      options: [
        'Al-fa\u2019il\u2019s own requirement', 'Al-mubtada\u2019s own requirement, already covered across this course\u2019s third unit', 'Al-maf\u2019ul bihi\u2019s own requirement', 'Al-badal\u2019s own requirement'
      ],
      correctIndex: 1,
      explanation: 'This is the specific reason these verbs are called "defective."',
    },
    {
      id: 'ar10q25',
      question: 'According to the lesson, once a sister verb other than kaana itself is used, the terminology adjusts to reflect this by using:',
      options: [
        'The exact same terms, ism kaana and khabar kaana, regardless of which sister appears',
        'Terms reflecting the specific sister actually used, such as ism asbaha or khabar sāra',
        'No specific terminology at all',
        'The terms mubtada and khabar unchanged',
      ],
      correctIndex: 1,
      explanation: 'This reflects that specific verb\u2019s own governance over the sentence.',
    },
    {
      id: 'ar10q26',
      question: 'According to the lesson, this unit\u2019s treatment of laysa and the mā zāla family reflects:',
      options: [
        'An attempt to avoid discussing genuine complexity within this topic',
        'The same honest naming of genuine grammatical nuance this course has applied throughout',
        'A rejection of these words as genuine sisters of kaana',
        'A claim that these words never actually appear in real Arabic',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the same calibrated honesty already applied to other genuine nuances across this course.',
    },
    {
      id: 'ar10q27',
      question: 'According to the lesson, recognizing kaana\u2019s own presence as a trigger, rather than memorizing individual correct forms, is what actually:',
      options: [
        'Has no practical value at all',
        'Prevents the single most common mistake this unit names directly',
        'Only helps with laysa specifically',
        'Only matters for advanced learners',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as the practical takeaway from this unit\u2019s closing topic.',
    },
    {
      id: 'ar10q28',
      question: 'According to the lesson, the correct form of the earlier example, avoiding the identified common mistake, is:',
      options: [
        'كَانَ الجَوُّ جَمِيلٌ', 'كَانَ الجَوُّ جَمِيلًا', 'كَانَ الجَوَّ جَمِيلًا', 'كَانَ الجَوَّ جَمِيلٌ'
      ],
      correctIndex: 1,
      explanation: 'This keeps الجَوُّ in raf\u2019 and correctly shifts جَمِيلًا into nasb.',
    },
    {
      id: 'ar10q29',
      question: 'According to the lesson, kaana and her sisters entering a sentence is described as changing:',
      options: [
        'The sentence\u2019s overall word order entirely',
        'Only the case of one specific noun, the khabar, while leaving the mubtada\u2019s case untouched',
        'Both nouns\u2019 gender and number',
        'The sentence type from ismiyyah to fi\u2019liyyah',
      ],
      correctIndex: 1,
      explanation: 'This precise, narrow effect is what this unit has traced across all four of its topics.',
    },
    {
      id: 'ar10q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Kaana and her sisters have no consistent, learnable effect on the nominal sentence',
        'A defined group of defective verbs enters the nominal sentence and applies one precise, consistent effect, keeping the ism in raf\u2019 and shifting the khabar into nasb, a rule with genuine, identifiable pitfalls worth guarding against directly',
        'Only kaana itself matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 10 into a single foundational claim, setting up inna wa akhawatuha in Unit 11.',
    },
  ],

  'unit-11': [
    {
      id: 'ar11q1',
      question: 'According to the lesson, inna wa akhawatuha differ from kaana wa akhawatuha in that:',
      options: [
        'Inna and her sisters are genuine verbs, while kaana and her sisters are particles',
        'Inna and her sisters are huruf, mabni and carrying no independent i\u2019rab, unlike kaana and her sisters, which are genuine verbs',
        'There is no real difference between the two groups',
        'Inna and her sisters cannot enter a jumlah ismiyyah at all',
      ],
      correctIndex: 1,
      explanation: 'Despite this difference, both groups share the basic capacity to change a nominal sentence\u2019s underlying i\u2019rab.',
    },
    {
      id: 'ar11q2',
      question: 'Which of the following is listed among inna\u2019s six recognized sisters?',
      options: [
        'أَصْبَحَ', 'لَكِنَّ', 'ظَلَّ', 'بَاتَ'
      ],
      correctIndex: 1,
      explanation: 'لَكِنَّ means "but," used for correction or contrast.',
    },
    {
      id: 'ar11q3',
      question: 'According to the lesson, لَيْتَ specifically expresses:',
      options: [
        'Straightforward affirmation',
        'A wish the speaker may know is unlikely',
        'Genuine contrast', 'Likeness or comparison'
      ],
      correctIndex: 1,
      explanation: 'لَعَلَّ, by contrast, expresses a hope the speaker considers genuinely possible.',
    },
    {
      id: 'ar11q4',
      question: 'According to the lesson, this course\u2019s tenth unit already promised that inna and her sisters would apply:',
      options: [
        'The exact same effect as kaana and her sisters',
        'Kaana\u2019s own effect in reverse',
        'No effect at all on the nominal sentence',
        'An effect only relevant to verbal sentences',
      ],
      correctIndex: 1,
      explanation: 'This unit confirms precisely what that reversal actually is.',
    },
    {
      id: 'ar11q5',
      question: 'According to the qaidah given in the lesson, inna and her sisters enter the nominal sentence and:',
      options: [
        'Keep the mubtada in raf\u2019 while shifting the khabar into nasb',
        'Push the mubtada into nasb while keeping the khabar in raf\u2019',
        'Shift both nouns into nasb',
        'Leave both nouns entirely unchanged',
      ],
      correctIndex: 1,
      explanation: 'This is the exact reverse of kaana\u2019s own effect already covered in this course\u2019s tenth unit.',
    },
    {
      id: 'ar11q6',
      question: 'In إِنَّ اللَّهَ غَفُورٌ (indeed, Allah is forgiving), اللَّهَ carries:',
      options: [
        'Raf\u2019, exactly as it did before inna entered',
        'Nasb, shifted from its original raf\u2019',
        'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'غَفُورٌ remains entirely unchanged in raf\u2019.',
    },
    {
      id: 'ar11q7',
      question: 'According to the lesson, remembering either kaana\u2019s or inna\u2019s effect correctly:',
      options: [
        'Provides no help in remembering the other',
        'Makes the other immediately available by simple reversal',
        'Requires memorizing two entirely unrelated rules',
        'Only applies to laysa specifically',
      ],
      correctIndex: 1,
      explanation: 'Kaana keeps the first noun in raf\u2019 and shifts the second into nasb; inna does the exact opposite.',
    },
    {
      id: 'ar11q8',
      question: 'Once inna or a sister enters a sentence, al-mubtada is renamed:',
      options: [
        'Khabar inna', 'Ism inna', 'Al-fa\u2019il', 'Al-maf\u2019ul bihi'
      ],
      correctIndex: 1,
      explanation: 'Al-khabar is renamed khabar inna.',
    },
    {
      id: 'ar11q9',
      question: 'According to the lesson, khabar inna:',
      options: [
        'Can only take the mufrad form',
        'Retains the same flexibility already established for khabar kaana: mufrad, jumlah, or shibh jumlah',
        'Can never take the jumlah form',
        'Loses its own i\u2019rab entirely',
      ],
      correctIndex: 1,
      explanation: 'This holds despite khabar inna\u2019s own new name and unchanged raf\u2019 case.',
    },
    {
      id: 'ar11q10',
      question: 'In لَعَلَّ الجَوَّ جَمِيلٌ (perhaps the weather is beautiful), الجَوَّ functions as:',
      options: [
        'Khabar la\u2019alla', 'Ism la\u2019alla, carrying nasb', 'Al-fa\u2019il', 'Al-mudaf'
      ],
      correctIndex: 1,
      explanation: 'جَمِيلٌ functions as khabar la\u2019alla, retaining raf\u2019.',
    },
    {
      id: 'ar11q11',
      question: 'According to the lesson, correctly identifying which specific group has entered a sentence, kaana\u2019s family or inna\u2019s family, is:',
      options: [
        'Unnecessary, since both groups behave identically',
        'The single most important first step before assigning case to either noun',
        'Only relevant to advanced learners',
        'Irrelevant to i\u2019rab entirely',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly given the two groups\u2019 exactly opposite effects.',
    },
    {
      id: 'ar11q12',
      question: 'According to the lesson, لَا an-nafiyah lil-jins makes a claim that is:',
      options: [
        'Weaker than ordinary negation',
        'Considerably stronger than ordinary negation, denying an entire category with no exception',
        'Identical to ordinary negation in every respect',
        'Only used in poetry',
      ],
      correctIndex: 1,
      explanation: 'Rather than denying one specific instance, it denies the existence of an entire kind altogether.',
    },
    {
      id: 'ar11q13',
      question: 'According to the lesson, this categorical reading of لَا requires which four conditions together?',
      options: [
        'The noun must be definite, separated from لَا, with a definite khabar, and لَا repeated',
        'The noun following لَا must be indefinite, nothing separates them, the khabar is also indefinite, and لَا does not repeat',
        'Only that the noun be indefinite; no other conditions apply',
        'Only that لَا appears at the start of a sentence',
      ],
      correctIndex: 1,
      explanation: 'Meeting all four conditions together confirms this specific categorical reading.',
    },
    {
      id: 'ar11q14',
      question: 'According to the lesson, once these conditions are met, لَا behaves:',
      options: [
        'Nothing like inna and her sisters',
        'Exactly like inna and her sisters, pushing its own ism into nasb while leaving khabar in raf\u2019',
        'Exactly like kaana and her sisters instead',
        'Like an ordinary harf jarr',
      ],
      correctIndex: 1,
      explanation: 'This is why لَا an-nafiyah lil-jins belongs within this same broader family this unit examines.',
    },
    {
      id: 'ar11q15',
      question: 'According to the lesson, when the ism of لَا an-nafiyah lil-jins is a single, unmodified word, it is:',
      options: [
        'Marked with ordinary tanween exactly like any other indefinite noun',
        'Mabni on fatha, rather than carrying ordinary tanween-marked nasb',
        'Left entirely without any case marking',
        'Always definite',
      ],
      correctIndex: 1,
      explanation: 'This is a specific structural detail distinguishing this construction from an ordinary indefinite noun.',
    },
    {
      id: 'ar11q16',
      question: 'In لَا إِكْرَاهَ فِي الدِّينِ (there is no compulsion in religion), إِكْرَاهَ:',
      options: [
        'Is definite and carries ordinary raf\u2019',
        'Is indefinite, mabni on fatha as ism laa, immediately following لَا with nothing separating them',
        'Is separated from لَا by an intervening word',
        'Carries jarr case',
      ],
      correctIndex: 1,
      explanation: 'This denies not one specific instance but the entire category of compulsion in religious belief altogether.',
    },
    {
      id: 'ar11q17',
      question: 'This verse is found in which surah, according to the lesson?',
      options: [
        'Surah al-Fatihah', 'Surah al-Baqarah, 2:256', 'Surah Yasin', 'Surah al-Ikhlas'
      ],
      correctIndex: 1,
      explanation: 'This is a widely known, directly Qur\u2019anic example of this exact construction.',
    },
    {
      id: 'ar11q18',
      question: 'According to the lesson, this course\u2019s twelfth unit turns to:',
      options: [
        'A repeat of inna wa akhawatuha',
        'Al-maf\u2019ulat, further categories of noun carrying nasb despite serving genuinely different functions from a direct object',
        'Kaana wa akhawatuha again',
        'Harf al-jarr and idafah',
      ],
      correctIndex: 1,
      explanation: 'This connects directly to al-maf\u2019ul bihi, already covered across this course\u2019s fourth unit.',
    },
    {
      id: 'ar11q19',
      question: 'According to the lesson, إِنَّ and أَنَّ are both used for:',
      options: [
        'Genuine contrast', 'Straightforward affirmation', 'Wish or regret', 'Hope or expectation'
      ],
      correctIndex: 1,
      explanation: 'أَنَّ is specifically used within embedded clauses.',
    },
    {
      id: 'ar11q20',
      question: 'According to the lesson, كَأَنَّ specifically expresses:',
      options: [
        'Likeness or comparison', 'Correction', 'A wish', 'Hope'
      ],
      correctIndex: 0,
      explanation: 'This is listed directly among the six recognized sisters in this unit\u2019s first topic.',
    },
    {
      id: 'ar11q21',
      question: 'According to the lesson, the ordinary jumlah ismiyyah اللَّهُ غَفُورٌ, before inna enters, has:',
      options: [
        'Both nouns in nasb',
        'Both nouns in raf\u2019',
        'The first noun in nasb and the second in raf\u2019',
        'No i\u2019rab at all',
      ],
      correctIndex: 1,
      explanation: 'This is the ordinary baseline before إِنَّ enters and shifts the first noun into nasb.',
    },
    {
      id: 'ar11q22',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Laa an-nafiyah lil-jins directly to identifying the sisters, in reverse order',
        'Identifying inna and her sisters, to their reversed case effect, to the new ism/khabar terminology, to laa an-nafiyah lil-jins as a specific family member',
        'A repeat of Unit 10\u2019s content with no new material',
        'Al-maf\u2019ulat directly, skipping inna wa akhawatuha entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar11q23',
      question: 'According to the lesson, if the noun following لَا is separated from it by an intervening word, or is definite:',
      options: [
        'The categorical negation reading still applies without issue',
        'This specific categorical reading does not apply, since the required conditions are not met',
        'لَا becomes ungrammatical entirely',
        'This has no effect on which reading applies',
      ],
      correctIndex: 1,
      explanation: 'All four conditions must hold together for this specific reading to be confirmed.',
    },
    {
      id: 'ar11q24',
      question: 'According to the lesson, لَا an-nafiyah lil-jins is grouped within the broader inna family specifically because:',
      options: [
        'It shares no real similarity with inna at all',
        'Once its conditions are met, it shares inna\u2019s own basic mechanism of pushing its ism into nasb while leaving khabar in raf\u2019',
        'It is actually a defective verb like kaana',
        'It only applies to verbal sentences',
      ],
      correctIndex: 1,
      explanation: 'This is the same underlying mechanism already established across this unit\u2019s second and third topics.',
    },
    {
      id: 'ar11q25',
      question: 'According to the lesson, correctly distinguishing كَانَ from إِنَّ family verbs and particles at the start of a sentence is important because:',
      options: [
        'They have no real bearing on the rest of the sentence',
        'They apply exactly opposite case assignments to the same two-noun structure',
        'They are actually interchangeable in every respect',
        'Only kaana affects i\u2019rab; inna does not',
      ],
      correctIndex: 1,
      explanation: 'This is the direct contrast this unit builds from its second topic onward.',
    },
    {
      id: 'ar11q26',
      question: 'According to the lesson, لَكِنَّ specifically differs from إِنَّ in that it:',
      options: [
        'Expresses correction or contrast rather than straightforward affirmation',
        'Does not affect i\u2019rab at all',
        'Only applies to verbal sentences',
        'Is not actually one of inna\u2019s sisters',
      ],
      correctIndex: 0,
      explanation: 'Each of inna\u2019s sisters carries its own specific shade of meaning beyond the shared grammatical effect.',
    },
    {
      id: 'ar11q27',
      question: 'According to the lesson, the table contrasting kaana (ism raf\u2019, khabar nasb) against inna (ism nasb, khabar raf\u2019) is described as:',
      options: [
        'An unnecessary complication with no practical value',
        'A useful memory anchor for correctly applying either rule',
        'Evidence that the two rules are actually identical',
        'Only relevant to laysa specifically',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as a genuinely useful way to hold both rules in mind together.',
    },
    {
      id: 'ar11q28',
      question: 'According to the lesson, لَا إِكْرَاهَ فِي الدِّينِ is significant as an example because it is:',
      options: [
        'An invented sentence with no real-world source',
        'A widely known, directly Qur\u2019anic instance of this exact grammatical construction',
        'An example of kaana wa akhawatuha instead',
        'An example of ordinary, non-categorical negation',
      ],
      correctIndex: 1,
      explanation: 'This connects the grammatical rule directly to a real, well known verse.',
    },
    {
      id: 'ar11q29',
      question: 'According to the lesson, ism laa being mabni on fatha rather than carrying ordinary tanween-marked nasb is described as:',
      options: [
        'Identical to how any other indefinite noun is marked elsewhere in a sentence',
        'A specific structural detail distinguishing this exact construction',
        'A sign that the sentence is ungrammatical',
        'Something that only applies to definite nouns',
      ],
      correctIndex: 1,
      explanation: 'This is named directly as a distinguishing feature of ism laa specifically.',
    },
    {
      id: 'ar11q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Inna and her sisters have no real relationship to kaana and her sisters',
        'A group of particles applies kaana\u2019s own effect in exact reverse, and one specific member of this same family, لَا, extends this mechanism into a considerably stronger, categorical form of negation under precisely defined conditions',
        'Only إِنَّ itself matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 11 into a single foundational claim, setting up al-maf\u2019ulat in Unit 12.',
    },
  ],

  'unit-12': [
    {
      id: 'ar12q1',
      question: 'According to the lesson, al-maf\u2019ul al-mutlaq is:',
      options: [
        'An ordinary noun unrelated to the verb',
        'A masdar sharing the exact same root as the verb already present in the sentence, placed in nasb',
        'A preposition governing a following noun',
        'Always plural',
      ],
      correctIndex: 1,
      explanation: 'It serves one of three distinct purposes once placed in this position.',
    },
    {
      id: 'ar12q2',
      question: 'حَفِظْتُ الدَّرْسَ حِفْظًا illustrates which purpose of al-maf\u2019ul al-mutlaq?',
      options: [
        'Bayan an-naw\u2019, specifying manner', 'At-tawkid, pure emphasis', 'Bayan al-\u2019adad, specifying number', 'None of these purposes'
      ],
      correctIndex: 1,
      explanation: 'حِفْظًا simply reinforces that the memorizing genuinely, definitely occurred.',
    },
    {
      id: 'ar12q3',
      question: 'ضَرَبْتُ ضَرْبًا شَدِيدًا illustrates which purpose of al-maf\u2019ul al-mutlaq?',
      options: [
        'At-tawkid alone', 'Bayan an-naw\u2019, specifying manner', 'Bayan al-\u2019adad, specifying number', 'This is not a valid maf\u2019ul mutlaq example'
      ],
      correctIndex: 1,
      explanation: 'شَدِيدًا describes the strike\u2019s own particular manner.',
    },
    {
      id: 'ar12q4',
      question: 'ضَرَبْتُ ضَرْبَتَيْنِ illustrates which purpose of al-maf\u2019ul al-mutlaq?',
      options: [
        'At-tawkid', 'Bayan an-naw\u2019', 'Bayan al-\u2019adad, specifying number', 'None of these'
      ],
      correctIndex: 2,
      explanation: 'The dual form states how many times the action occurred.',
    },
    {
      id: 'ar12q5',
      question: 'According to the lesson, al-maf\u2019ul li ajlihi differs from al-maf\u2019ul al-mutlaq in that it:',
      options: [
        'Shares the main verb\u2019s own root',
        'Does not share the main verb\u2019s root, and answers why the action occurred rather than describing its manner or number',
        'Never carries nasb case',
        'Is never a masdar',
      ],
      correctIndex: 1,
      explanation: 'This is a genuinely different question from what al-maf\u2019ul al-mutlaq answers.',
    },
    {
      id: 'ar12q6',
      question: 'In قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ (I stood out of respect for the teacher), إِجْلَالًا explains:',
      options: [
        'How the standing occurred', 'Why the standing occurred', 'When the standing occurred', 'Where the standing occurred'
      ],
      correctIndex: 1,
      explanation: 'This is a genuine motivating cause rather than a description of manner or number.',
    },
    {
      id: 'ar12q7',
      question: 'According to the lesson, al-maf\u2019ul li ajlihi must:',
      options: [
        'Belong to a different doer than the main verb',
        'Share the exact same doer as the main verb itself',
        'Always be plural',
        'Always be definite',
      ],
      correctIndex: 1,
      explanation: 'This distinguishes it from a masdar that might simply appear elsewhere without explaining the main verb\u2019s motivation.',
    },
    {
      id: 'ar12q8',
      question: 'Al-maf\u2019ul fihi, also called az-zarf, expresses:',
      options: [
        'Why an action occurred', 'Either the specific time or the specific place in which an action occurred', 'How many times an action occurred', 'The manner of an action'
      ],
      correctIndex: 1,
      explanation: 'This divides into zarf zaman and zarf makan.',
    },
    {
      id: 'ar12q9',
      question: 'سَافَرْتُ صَبَاحًا (I traveled in the morning) illustrates:',
      options: [
        'Zarf makan', 'Zarf zaman, specifying when the action occurred', 'Al-haal', 'At-tamyiz'
      ],
      correctIndex: 1,
      explanation: 'صَبَاحًا specifies exactly when the traveling occurred.',
    },
    {
      id: 'ar12q10',
      question: 'جَلَسْتُ أَمَامَ البَيْتِ (I sat in front of the house) illustrates:',
      options: [
        'Zarf zaman', 'Zarf makan, specifying where the action occurred', 'Al-maf\u2019ul li ajlihi', 'Al-maf\u2019ul al-mutlaq'
      ],
      correctIndex: 1,
      explanation: 'أَمَامَ البَيْتِ is itself an idafah construct already covered in this course\u2019s eighth unit.',
    },
    {
      id: 'ar12q11',
      question: 'According to the lesson, al-maf\u2019ul al-mutlaq, al-maf\u2019ul li ajlihi, and al-maf\u2019ul fihi all share:',
      options: [
        'The exact same question they answer about the action',
        'The exact same nasb case, while answering three entirely different questions',
        'No real relationship to one another',
        'The requirement of being a masdar in every case',
      ],
      correctIndex: 1,
      explanation: 'These questions are how or how much, why, and when or where.',
    },
    {
      id: 'ar12q12',
      question: 'Al-haal describes:',
      options: [
        'A permanent characteristic of an entity',
        'The temporary state or condition of an already-identified entity, specifically at the moment the action occurs',
        'The reason an action occurred',
        'The number of times an action occurred',
      ],
      correctIndex: 1,
      explanation: 'This entity is called sahib al-haal.',
    },
    {
      id: 'ar12q13',
      question: 'According to the lesson, al-haal itself must be:',
      options: [
        'Definite, while its sahib al-haal must be indefinite',
        'Indefinite, while its sahib al-haal must be definite',
        'Both definite',
        'Both indefinite',
      ],
      correctIndex: 1,
      explanation: 'This is one of the specific conditions distinguishing al-haal.',
    },
    {
      id: 'ar12q14',
      question: 'In جَاءَ زَيْدٌ رَاكِبًا (Zayd came riding), رَاكِبًا describes:',
      options: [
        'A permanent characteristic of Zayd',
        'زَيْدٌ\u2019s temporary condition of riding at the moment of arrival',
        'The reason Zayd came',
        'The number of times Zayd came',
      ],
      correctIndex: 1,
      explanation: 'زَيْدٌ, definite, is the sahib al-haal here.',
    },
    {
      id: 'ar12q15',
      question: 'At-tamyiz is described as:',
      options: [
        'A definite noun describing a temporary state',
        'A single, indefinite noun in nasb that resolves genuine ambiguity in a preceding word',
        'A masdar sharing the main verb\u2019s root',
        'An adverb of time or place',
      ],
      correctIndex: 1,
      explanation: 'This most commonly resolves ambiguity in a number or measurement.',
    },
    {
      id: 'ar12q16',
      question: 'In عِنْدِي عِشْرُونَ كِتَابًا (I have twenty books), كِتَابًا resolves:',
      options: [
        'The manner in which the books were obtained',
        'Exactly what "twenty" actually refers to, since the number alone leaves this unclear',
        'The reason for having books',
        'The location of the books',
      ],
      correctIndex: 1,
      explanation: 'This is a classic, commonly cited example of tamyiz resolving numerical ambiguity.',
    },
    {
      id: 'ar12q17',
      question: 'According to the lesson, the precise distinction between al-haal and at-tamyiz is that:',
      options: [
        'They are functionally identical with no real distinction',
        'Al-haal clarifies the situation of an already known entity, while at-tamyiz clarifies what an ambiguous preceding word actually refers to',
        'At-tamyiz describes temporary states while al-haal resolves numerical ambiguity',
        'Only al-haal ever carries nasb case',
      ],
      correctIndex: 1,
      explanation: 'رَاكِبًا tells us something new about زَيْدٌ; كِتَابًا tells us what عِشْرُونَ itself means.',
    },
    {
      id: 'ar12q18',
      question: 'According to the lesson, this course\u2019s thirteenth unit turns to:',
      options: [
        'A repeat of al-maf\u2019ulat',
        'The mudari\u2019 verb\u2019s own i\u2019rab in full depth, examining which particles push it into nasb or jazm',
        'Kaana wa akhawatuha again',
        'Harf al-jarr and idafah',
      ],
      correctIndex: 1,
      explanation: 'This was already introduced in outline across this course\u2019s fifth unit.',
    },
    {
      id: 'ar12q19',
      question: 'According to the lesson, this course\u2019s fourth unit already established which noun as carrying nasb case?',
      options: [
        'Al-mubtada', 'Al-maf\u2019ul bihi', 'Al-khabar', 'Al-fa\u2019il'
      ],
      correctIndex: 1,
      explanation: 'This unit examines several further categories of noun that also carry nasb.',
    },
    {
      id: 'ar12q20',
      question: 'According to the lesson, the five categories covered across this unit, despite sharing the same case, each:',
      options: [
        'Answer the exact same question about the action',
        'Answer a genuinely different question despite sharing this exact same nasb case',
        'Require being a masdar',
        'Only apply to intransitive verbs',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as this unit\u2019s closing synthesis.',
    },
    {
      id: 'ar12q21',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'At-tamyiz directly to al-maf\u2019ul al-mutlaq, in reverse order',
        'Al-maf\u2019ul al-mutlaq, to al-maf\u2019ul li ajlihi, to al-maf\u2019ul fihi, to al-haal and at-tamyiz together',
        'A repeat of Unit 11\u2019s content with no new material',
        'The mudari\u2019 verb\u2019s governors directly, skipping al-maf\u2019ulat entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar12q22',
      question: 'According to the lesson, zarf zaman and zarf makan are two divisions of:',
      options: [
        'Al-maf\u2019ul al-mutlaq', 'Al-maf\u2019ul fihi, also called az-zarf', 'At-tamyiz', 'Al-haal'
      ],
      correctIndex: 1,
      explanation: 'These express time and place respectively.',
    },
    {
      id: 'ar12q23',
      question: 'According to the lesson, why must al-maf\u2019ul li ajlihi share the same doer as the main verb?',
      options: [
        'This requirement does not actually exist',
        'To distinguish it from a masdar that might otherwise appear elsewhere without genuinely explaining the main verb\u2019s own motivation',
        'Because it must always be plural',
        'Because it must always be a proper noun',
      ],
      correctIndex: 1,
      explanation: 'In the example given, the same person both stood and held the respect explaining that action.',
    },
    {
      id: 'ar12q24',
      question: 'According to the lesson, disambiguating a number like "twenty" is most commonly the job of:',
      options: [
        'Al-haal', 'At-tamyiz', 'Al-maf\u2019ul fihi', 'Al-maf\u2019ul li ajlihi'
      ],
      correctIndex: 1,
      explanation: 'This is one of the most common triggers for at-tamyiz specifically.',
    },
    {
      id: 'ar12q25',
      question: 'According to the lesson, if the sahib al-haal in a sentence were itself indefinite, this would:',
      options: [
        'Have no bearing on whether al-haal\u2019s conditions are met',
        'Fail one of al-haal\u2019s specific governing conditions, since sahib al-haal must be definite',
        'Automatically make the following word at-tamyiz instead',
        'Be entirely irrelevant to Arabic grammar',
      ],
      correctIndex: 1,
      explanation: 'This is one of the specific conditions distinguishing al-haal already covered directly in this unit.',
    },
    {
      id: 'ar12q26',
      question: 'According to the lesson, all five categories covered in this unit connect back to which earlier material in this course?',
      options: [
        'This course\u2019s fourth unit, where al-maf\u2019ul bihi was first established as a nasb-carrying noun',
        'This course\u2019s first unit alone',
        'No earlier material in this course',
        'Only this course\u2019s eighth unit on idafah',
      ],
      correctIndex: 0,
      explanation: 'This unit extends that same case across several genuinely different functions.',
    },
    {
      id: 'ar12q27',
      question: 'According to the lesson, ضَرَبْتُ ضَرْبَتَيْنِ uses which grammatical number for the masdar itself?',
      options: [
        'Singular', 'Dual', 'Broken plural', 'Sound plural'
      ],
      correctIndex: 1,
      explanation: 'This dual form directly states that the action occurred exactly twice.',
    },
    {
      id: 'ar12q28',
      question: 'According to the lesson, في المَسْجِدِ, a shibh jumlah already covered in this course\u2019s third and eighth units, is structurally distinct from al-maf\u2019ul fihi in that al-maf\u2019ul fihi:',
      options: [
        'Also always requires a harf jarr',
        'Is a single noun carrying nasb directly, such as صَبَاحًا, rather than a preposition-plus-noun combination',
        'Is identical in every respect to shibh jumlah',
        'Never expresses location at all',
      ],
      correctIndex: 1,
      explanation: 'أَمَامَ البَيْتِ does use idafah, but the zarf itself (أَمَامَ) carries nasb directly rather than following a harf jarr.',
    },
    {
      id: 'ar12q29',
      question: 'According to the lesson, this unit\u2019s treatment of five distinct nasb categories reflects:',
      options: [
        'A single, uniform function nasb always serves in Arabic',
        'The genuine diversity of functions a single case can serve, each requiring its own specific recognition rather than a single blanket rule',
        'An error in classical Nahw that modern grammarians have since corrected',
        'A category with no real practical relevance to reading Arabic',
      ],
      correctIndex: 1,
      explanation: 'This is the unifying insight this unit\u2019s closing topic draws directly.',
    },
    {
      id: 'ar12q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'Nasb case always signals a direct object with no further nuance',
        'Nasb case marks five genuinely distinct grammatical functions, emphasis or description of a verb, reason, time or place, temporary state, and disambiguation, each recognizable through its own specific structure and purpose',
        'Only al-maf\u2019ul al-mutlaq matters for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 12 into a single foundational claim, setting up the mudari\u2019 verb\u2019s own governors in Unit 13.',
    },
  ],

  'unit-13': [
    {
      id: 'ar13q1',
      question: 'According to the lesson, this course\u2019s fifth unit already established that al-fi\u2019l al-mudari\u2019:',
      options: [
        'Never takes i\u2019rab at all',
        'Is the only one of the three verb forms actually taking i\u2019rab, remaining in raf\u2019 unless a specific particle intervenes',
        'Always carries jarr case',
        'Is identical to al-fi\u2019l al-madi in every respect',
      ],
      correctIndex: 1,
      explanation: 'This unit examines exactly which particles cause that intervention.',
    },
    {
      id: 'ar13q2',
      question: 'An ordinary mudari\u2019 verb signals raf\u2019 through:',
      options: [
        'Fatha', 'Damma', 'Kasra', 'Sukoon'
      ],
      correctIndex: 1,
      explanation: 'يَكْتُبُ, already used in this course\u2019s fifth unit, illustrates this default state.',
    },
    {
      id: 'ar13q3',
      question: 'Al-af\u2019al al-khamsah, the five verbs, are described as mudari\u2019 forms carrying:',
      options: [
        'No pronoun of any kind',
        'An attached pronoun suffix: و الجماعة, يَاء المُخَاطَبَة, or أَلِف الاثنين',
        'Only the past-tense feminine marker',
        'A harf jarr attached directly',
      ],
      correctIndex: 1,
      explanation: 'يَفْعَلُونَ and تَفْعَلِينَ both illustrate this group directly.',
    },
    {
      id: 'ar13q4',
      question: 'According to the lesson, al-af\u2019al al-khamsah signal their own raf\u2019 through:',
      options: [
        'Damma, exactly like an ordinary mudari\u2019 verb',
        'A fixed, retained نَ at the very end of the word',
        'Fatha', 'Sukoon'
      ],
      correctIndex: 1,
      explanation: 'This نَ is dropped entirely once nasb or jazm applies instead.',
    },
    {
      id: 'ar13q5',
      question: 'According to the lesson, the five verbs\u2019 noon-dropping pattern is described as genuinely parallel to:',
      options: [
        'The dual\u2019s own pattern',
        'The sound masculine plural\u2019s own noon-dropping already covered in this course\u2019s sixth and eighth units',
        'The broken plural\u2019s pattern',
        'No earlier pattern in this course',
      ],
      correctIndex: 1,
      explanation: 'This connects directly back to idafah\u2019s effect on the sound masculine plural.',
    },
    {
      id: 'ar13q6',
      question: 'Which four particles are listed in the lesson as the core nawasib?',
      options: [
        'لَمْ، لَمَّا، لَا، إِنْ', 'أَنْ، لَنْ، كَيْ، إِذَنْ', 'مِنْ، إِلَى، عَنْ، عَلَى', 'هَلْ، قَدْ، سَـ، سَوْفَ'
      ],
      correctIndex: 1,
      explanation: 'Each of these particles pushes a mudari\u2019 verb into nasb.',
    },
    {
      id: 'ar13q7',
      question: 'In لَنْ أَذْهَبَ (I will never go), already covered in this course\u2019s fifth unit, أَذْهَبَ carries:',
      options: [
        'Raf\u2019', 'Nasb, marked through fatha', 'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'لَنْ pushes the verb out of its default raf\u2019 state.',
    },
    {
      id: 'ar13q8',
      question: 'In أُرِيدُ أَنْ أَتَعَلَّمَ (I want to learn), أَنْ functions to:',
      options: [
        'Negate the sentence entirely',
        'Introduce a subordinate action, pushing أَتَعَلَّمَ into nasb',
        'Cause jazm instead of nasb',
        'Have no grammatical effect at all',
      ],
      correctIndex: 1,
      explanation: 'This works in the exact same way لَنْ does with a different verb.',
    },
    {
      id: 'ar13q9',
      question: 'According to the lesson, for al-af\u2019al al-khamsah, nasb is marked by:',
      options: [
        'Fatha, exactly like an ordinary mudari\u2019 verb',
        'Dropping the same fixed نَ that otherwise signals their raf\u2019',
        'Kasra', 'No marking at all'
      ],
      correctIndex: 1,
      explanation: 'This parallels the same mechanism already described for their raf\u2019 state.',
    },
    {
      id: 'ar13q10',
      question: 'Which four particles are listed in the lesson as jawazim affecting a single verb?',
      options: [
        'أَنْ، لَنْ، كَيْ، إِذَنْ',
        'لَمْ، لَمَّا، لَام الأَمْر، لَا النَّاهِيَة',
        'مِنْ، إِلَى، عَنْ، عَلَى',
        'هَلْ، قَدْ، سَـ، سَوْفَ',
      ],
      correctIndex: 1,
      explanation: 'Each of these particles pushes a mudari\u2019 verb into jazm.',
    },
    {
      id: 'ar13q11',
      question: 'In لَمْ يَذْهَبْ (he did not go), already covered in this course\u2019s fifth unit, يَذْهَبْ carries:',
      options: [
        'Raf\u2019', 'Nasb', 'Jazm, marked through sukoon', 'Jarr'
      ],
      correctIndex: 2,
      explanation: 'Sukoon is the complete absence of a final vowel.',
    },
    {
      id: 'ar13q12',
      question: 'لَا تَكْذِبْ (do not lie) illustrates:',
      options: [
        'Laa an-nafiyah lil-jins, already covered in this course\u2019s eleventh unit',
        'Laa an-nahiyah, causing jazm through direct prohibition',
        'A nasib particle',
        'An ordinary harf jarr',
      ],
      correctIndex: 1,
      explanation: 'This pushes تَكْذِبْ into jazm.',
    },
    {
      id: 'ar13q13',
      question: 'According to the lesson, the same three letters, لَا, serve:',
      options: [
        'Only one grammatical function in Arabic',
        'Two genuinely distinct grammatical functions depending on whether a noun or a mudari\u2019 verb follows',
        'No grammatical function at all',
        'Only the function already covered in this course\u2019s eleventh unit',
      ],
      correctIndex: 1,
      explanation: 'One causes categorical negation of a noun; the other causes jazm on a following verb through prohibition.',
    },
    {
      id: 'ar13q14',
      question: 'According to the lesson, beyond the four single-verb jazm-causers, a further category:',
      options: [
        'Does not exist in Arabic grammar',
        'Affects two verbs at once, examined directly through conditional sentences',
        'Only affects nouns',
        'Only applies to the five verbs',
      ],
      correctIndex: 1,
      explanation: 'This is examined directly in this unit\u2019s closing topic.',
    },
    {
      id: 'ar13q15',
      question: 'إِنْ, the primary conditional particle, places how many mudari\u2019 verbs into jazm within one sentence?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctIndex: 1,
      explanation: 'These are called al-fi\u2019l ash-shart and jawab ash-shart.',
    },
    {
      id: 'ar13q16',
      question: 'In إِنْ تَجْتَهِدْ تَنْجَحْ (if you strive, you will succeed), already covered in this course\u2019s fifth unit:',
      options: [
        'Only تَجْتَهِدْ carries jazm',
        'Both تَجْتَهِدْ and تَنْجَحْ carry jazm because of the single إِنْ governing them together',
        'Neither verb carries jazm',
        'Both verbs carry raf\u2019',
      ],
      correctIndex: 1,
      explanation: 'تَجْتَهِدْ is the condition; تَنْجَحْ is the response.',
    },
    {
      id: 'ar13q17',
      question: 'According to the lesson, beyond إِنْ itself, classical Nahw recognizes further conditional words sharing this same effect, including:',
      options: [
        'لَنْ and كَيْ', 'مَنْ (whoever) and مَا (whatever)', 'أَنْ and إِذَنْ', 'لَام الأَمْر and لَا النَّاهِيَة'
      ],
      correctIndex: 1,
      explanation: 'This unit\u2019s own scope covers إِنْ specifically as the clearest, most fundamental case.',
    },
    {
      id: 'ar13q18',
      question: 'According to the lesson, this unit\u2019s closing topic states that this unit completes:',
      options: [
        'Only the treatment of nouns in this course',
        'This course\u2019s full treatment of i\u2019rab across every word category examined since this course\u2019s fifth unit',
        'Nothing of particular significance',
        'Only the treatment of kaana and inna',
      ],
      correctIndex: 1,
      explanation: 'This course\u2019s fourteenth and final unit turns to remaining sentence structures and connected reading.',
    },
    {
      id: 'ar13q19',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Conditional sentences directly to the mudari\u2019 verb\u2019s basic i\u2019rab, in reverse order',
        'The mudari\u2019 verb\u2019s basic i\u2019rab and the five verbs, to nawasib, to jawazim, to conditional sentences',
        'A repeat of Unit 12\u2019s content with no new material',
        'This course\u2019s fourteenth unit directly, skipping the mudari\u2019 verb\u2019s governors entirely',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar13q20',
      question: 'According to the lesson, كَيْ means:',
      options: [
        'Will never', 'In order to', 'Then, in that case', 'Did not'
      ],
      correctIndex: 1,
      explanation: 'This is listed directly among the four core nawasib.',
    },
    {
      id: 'ar13q21',
      question: 'According to the lesson, لَمَّا means:',
      options: [
        'Not yet', 'In order to', 'Whoever', 'Perhaps'
      ],
      correctIndex: 0,
      explanation: 'This is listed directly among the four core jawazim affecting a single verb.',
    },
    {
      id: 'ar13q22',
      question: 'According to the lesson, لَام الأَمْر is used specifically for:',
      options: [
        'First-person statements', 'Third-person commands', 'Categorical negation of a noun', 'Conditional sentences'
      ],
      correctIndex: 1,
      explanation: 'This is distinguished directly from لَا النَّاهِيَة, used for direct second-person prohibition.',
    },
    {
      id: 'ar13q23',
      question: 'According to the lesson, recognizing which specific particle has entered a sentence, a nasib or a jazim, is important because:',
      options: [
        'It has no bearing on how the following verb should be marked',
        'It determines the specific sign, fatha or sukoon (or dropped noon for the five verbs), the following mudari\u2019 verb should carry',
        'Only nouns are affected by such particles',
        'All particles produce identical grammatical effects',
      ],
      correctIndex: 1,
      explanation: 'This is the practical payoff of learning these two distinct particle groups.',
    },
    {
      id: 'ar13q24',
      question: 'According to the lesson, the four core nawasib and the four core single-verb jawazim together illustrate:',
      options: [
        'Two identical categories with no real distinction between them',
        'Two genuinely distinct sets of particles producing two genuinely distinct i\u2019rab outcomes on the same verb form',
        'A single category with no internal divisions',
        'Categories that apply only to nouns, not verbs',
      ],
      correctIndex: 1,
      explanation: 'This unit examines each set directly across its second and third topics.',
    },
    {
      id: 'ar13q25',
      question: 'According to the lesson, يَفْعَلُونَ and تَفْعَلِينَ are given as examples of:',
      options: [
        'An ordinary mudari\u2019 verb carrying damma', 'Al-af\u2019al al-khamsah', 'A fi\u2019l madi', 'A fi\u2019l amr'
      ],
      correctIndex: 1,
      explanation: 'Both carry an attached pronoun suffix marking them as part of this specific group.',
    },
    {
      id: 'ar13q26',
      question: 'According to the lesson, this course\u2019s eleventh unit already covered which specific use of لَا?',
      options: [
        'Laa an-nahiyah, for prohibition', 'Laa an-nafiyah lil-jins, for categorical negation of a noun', 'Laa as a nasib particle', 'Laa as a harf jarr'
      ],
      correctIndex: 1,
      explanation: 'This unit distinguishes that use directly from laa an-nahiyah, covered here for the first time.',
    },
    {
      id: 'ar13q27',
      question: 'According to the lesson, al-fi\u2019l ash-shart and jawab ash-shart together form:',
      options: [
        'Two entirely unrelated sentences',
        'A single conditional sentence, both verbs placed in jazm by the same governing particle',
        'A khabar jumlah structure',
        'An idafah construct',
      ],
      correctIndex: 1,
      explanation: 'This is the structure إِنْ specifically produces.',
    },
    {
      id: 'ar13q28',
      question: 'According to the lesson, why is it worth naming further conditional words beyond إِنْ honestly, even briefly?',
      options: [
        'To suggest إِنْ is not actually a valid conditional particle',
        'To avoid presenting إِنْ as though it were the only word in Arabic capable of this two-verb jazm effect',
        'These further words actually behave completely differently from إِنْ',
        'This detail has no practical value for a reader',
      ],
      correctIndex: 1,
      explanation: 'This reflects the same honest calibration this course has applied to other genuine nuances throughout.',
    },
    {
      id: 'ar13q29',
      question: 'According to the lesson, this unit\u2019s treatment of the mudari\u2019 verb\u2019s governors is described as:',
      options: [
        'Entirely disconnected from material covered earlier in this course',
        'Directly completing this course\u2019s full treatment of i\u2019rab, building on the fifth unit\u2019s own introduction of raf\u2019, nasb, and jazm',
        'A repeat of the noun categories already covered',
        'Unrelated to the four i\u2019rab states established earlier',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly in this unit\u2019s closing topic.',
    },
    {
      id: 'ar13q30',
      question: 'Taken together, this unit\u2019s overarching theme is best summarized as:',
      options: [
        'The mudari\u2019 verb\u2019s case is entirely unpredictable and follows no learnable pattern',
        'A defined default raf\u2019 state, a specific exception for the five verbs, and two distinct sets of governing particles, one causing nasb and one causing jazm, together fully account for the mudari\u2019 verb\u2019s own i\u2019rab, completing this course\u2019s treatment of the subject first opened in Unit 5',
        'Only the four nawasib matter for correct Arabic grammar',
        'This unit has no connection to material already covered earlier in this course',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 13 into a single foundational claim, setting up this course\u2019s final unit.',
    },
  ],

  'unit-14': [
    {
      id: 'ar14q1',
      question: 'According to the lesson, a jumlah itself carries no i\u2019rab of its own, yet it can still:',
      options: [
        'Have no grammatical relevance to the surrounding sentence at all',
        'Occupy mahalla min al-i\u2019rab, a grammatical position, exactly as though it were a single word carrying that case',
        'Only ever function as a mubtada',
        'Never appear within a larger sentence',
      ],
      correctIndex: 1,
      explanation: 'This course\u2019s third, ninth, and twelfth units already showed sentences serving several such roles.',
    },
    {
      id: 'ar14q2',
      question: 'In زَيْدٌ يَكْتُبُ, already familiar from this course\u2019s second and third units, يَكْتُبُ is described as:',
      options: [
        'A single word with no grammatical position',
        'A jumlah fi\u2019liyyah fi mahalli raf\u2019 khabar',
        'A jumlah fi mahalli nasb haal',
        'Al-mudaf',
      ],
      correctIndex: 1,
      explanation: 'A sentence functioning as khabar occupies the position of raf\u2019.',
    },
    {
      id: 'ar14q3',
      question: 'In جَاءَ زَيْدٌ يَضْحَكُ (Zayd came laughing), يَضْحَكُ occupies:',
      options: [
        'The position of raf\u2019 as khabar', 'The position of nasb as haal, already covered in this course\u2019s twelfth unit', 'The position of jarr', 'No position at all'
      ],
      correctIndex: 1,
      explanation: 'This is described as jumlah fi\u2019liyyah fi mahalli nasb haal.',
    },
    {
      id: 'ar14q4',
      question: 'According to the lesson, why does naming mahalla l-i\u2019rab explicitly matter, even this late in the course?',
      options: [
        'It has no real value once a reader already recognizes khabar jumlah or haal jumlah in practice',
        'It gives real precision to a pattern already used in practice, showing exactly how a sentence still participates in the surrounding i\u2019rab structure',
        'It contradicts what this course established earlier',
        'It only applies to poetry',
      ],
      correctIndex: 1,
      explanation: 'A sentence is mabni in this specific sense, yet still occupies a genuine grammatical position.',
    },
    {
      id: 'ar14q5',
      question: 'An-nida\u2019 uses a dedicated particle, most commonly:',
      options: [
        'هَلْ', 'يَا', 'إِنَّ', 'لَنْ'
      ],
      correctIndex: 1,
      explanation: 'The noun addressed is called al-munada.',
    },
    {
      id: 'ar14q6',
      question: 'In يَا زَيْدُ (O Zayd!), زَيْدُ:',
      options: [
        'Carries genuine nasb',
        'Drops its tanween and takes damma alone, technically mabni on this damma',
        'Carries jarr',
        'Remains entirely unchanged from زَيْدٌ',
      ],
      correctIndex: 1,
      explanation: 'This applies specifically when al-munada is a single, specific name or title.',
    },
    {
      id: 'ar14q7',
      question: 'In يَا عَبْدَ اللَّهِ (O Abdullah!), عَبْدَ carries:',
      options: [
        'Mabni damma, exactly like يَا زَيْدُ',
        'Genuine nasb, marked through fatha, since it is mudaf',
        'Jarr', 'No case marking at all'
      ],
      correctIndex: 1,
      explanation: 'This connects directly to idafah, already covered across this course\u2019s eighth unit.',
    },
    {
      id: 'ar14q8',
      question: 'According to the lesson, correctly identifying whether a munada is a simple name or a mudaf construction:',
      options: [
        'Has no bearing on which pattern applies',
        'Determines directly which of the two governing patterns actually applies',
        'Only matters for classical poetry',
        'Is always obvious with no need for analysis',
      ],
      correctIndex: 1,
      explanation: 'This is compared directly to identifying kaana\u2019s family versus inna\u2019s family in this course\u2019s tenth and eleventh units.',
    },
    {
      id: 'ar14q9',
      question: 'According to the lesson, أَ carries one further capacity that هَلْ does not:',
      options: [
        'Forming yes-or-no questions at all',
        'Offering a direct choice between two named options',
        'Causing jazm on a following verb',
        'Attaching to a following noun as a harf jarr',
      ],
      correctIndex: 1,
      explanation: 'أَزَيْدٌ عِنْدَكَ أَمْ عَمْرٌو illustrates this directly.',
    },
    {
      id: 'ar14q10',
      question: 'According to the lesson, كَمْ (how many) requires:',
      options: [
        'No further word to follow it',
        'Its own tamyiz to follow, exactly paralleling material already covered in this course\u2019s twelfth unit',
        'A harf jarr to follow it',
        'A khabar jumlah to follow it',
      ],
      correctIndex: 1,
      explanation: 'كَمْ كِتَابًا عِنْدَكَ uses كِتَابًا to resolve what كَمْ is actually asking about.',
    },
    {
      id: 'ar14q11',
      question: 'According to the lesson, هَلْ was first introduced in this course as an example of:',
      options: [
        'An ism', 'A harf, in this course\u2019s first unit', 'A fi\u2019l', 'A nasib particle'
      ],
      correctIndex: 1,
      explanation: 'This unit now returns to it specifically in its role forming yes-or-no questions.',
    },
    {
      id: 'ar14q12',
      question: 'According to the lesson, mahalla l-i\u2019rab, nida\u2019, and istifham together illustrate that this unit:',
      options: [
        'Introduces entirely disconnected new material with no relation to earlier units',
        'Each extend a structure or rule this course has already established elsewhere, rather than introducing disconnected material',
        'Contradicts rules already established earlier in this course',
        'Only concerns verbal sentences',
      ],
      correctIndex: 1,
      explanation: 'These connect respectively to sentence positions, idafah, and tamyiz.',
    },
    {
      id: 'ar14q13',
      question: 'According to the lesson, this course\u2019s closing topic:',
      options: [
        'Introduces several new grammatical rules not covered elsewhere',
        'Introduces no new rules of its own, instead parsing a passage using material from across the entire course',
        'Repeats Unit 1\u2019s content verbatim',
        'Focuses exclusively on vocabulary rather than grammar',
      ],
      correctIndex: 1,
      explanation: 'This is exactly the skill every unit of this course has been building toward.',
    },
    {
      id: 'ar14q14',
      question: 'In the closing passage\u2019s first clause, إِنَّ pushes الطَّالِبَ into:',
      options: [
        'Raf\u2019, exactly as an ordinary mubtada', 'Nasb, as ism inna', 'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'This is the effect already established directly across this course\u2019s eleventh unit.',
    },
    {
      id: 'ar14q15',
      question: 'According to the lesson, الَّذِي in this closing passage introduces a relative clause functioning as:',
      options: [
        'Al-badal', 'An-na\u2019t, describing الطَّالِبَ', 'Khabar inna directly', 'Al-maf\u2019ul bihi'
      ],
      correctIndex: 1,
      explanation: 'الَّذِي itself is one of the six categories of ma\u2019rifah already covered in this course\u2019s seventh unit.',
    },
    {
      id: 'ar14q16',
      question: 'According to the lesson, يَجْتَهِدُ within this relative clause is described as:',
      options: [
        'A fi\u2019l madi', 'An ordinary mudari\u2019 verb in its default raf\u2019', 'A verb in jazm', 'A verb in nasb'
      ],
      correctIndex: 1,
      explanation: 'This state was already established across this course\u2019s fifth and thirteenth units.',
    },
    {
      id: 'ar14q17',
      question: 'According to the lesson, فِي دُرُوسِهِ within this same clause is identified as:',
      options: [
        'Al-maf\u2019ul bihi', 'A shibh jumlah, already covered across this course\u2019s third and eighth units', 'Ism inna', 'A munada'
      ],
      correctIndex: 1,
      explanation: 'This specifies where the striving described by يَجْتَهِدُ actually occurs.',
    },
    {
      id: 'ar14q18',
      question: 'According to the lesson, سَيَنْجَحُ functions as:',
      options: [
        'Ism inna', 'Khabar inna, remaining in raf\u2019', 'Al-fa\u2019il', 'A munada'
      ],
      correctIndex: 1,
      explanation: 'This carries the future marker already covered directly in this course\u2019s first unit.',
    },
    {
      id: 'ar14q19',
      question: 'In the passage\u2019s second clause, وَ is identified as:',
      options: [
        'A nasib particle', 'A harf al-\u2019atf, already covered across this course\u2019s ninth unit, joining the two clauses', 'A jazim particle', 'A vocative particle'
      ],
      correctIndex: 1,
      explanation: 'This joins the second clause to the first.',
    },
    {
      id: 'ar14q20',
      question: 'According to the lesson, كَانَ in this second clause keeps أَبُوهُ in:',
      options: [
        'Nasb, while shifting سَعِيدًا into raf\u2019',
        'Raf\u2019, while shifting سَعِيدًا, its khabar, into nasb',
        'Jarr', 'Jazm'
      ],
      correctIndex: 1,
      explanation: 'This is exactly the pattern already established across this course\u2019s tenth unit.',
    },
    {
      id: 'ar14q21',
      question: 'According to the lesson, بِذَلِكَ at the close of this passage is identified as:',
      options: [
        'A munada',
        'A harf jarr together with its own majrur noun, forming a further shibh jumlah',
        'Ism kaana',
        'A relative clause',
      ],
      correctIndex: 1,
      explanation: 'This is already covered directly across this course\u2019s eighth unit.',
    },
    {
      id: 'ar14q22',
      question: 'According to the lesson, this closing passage demonstrates that these rules:',
      options: [
        'Were memorized in isolation from one another',
        'Became available specifically because this course built them in sequence, one genuinely depending on the last',
        'Have no real relationship to one another despite appearing in the same course',
        'Only apply to constructed, artificial sentences',
      ],
      correctIndex: 1,
      explanation: 'Nearly every major structure this course has covered appears within these two connected clauses.',
    },
    {
      id: 'ar14q23',
      question: 'According to the lesson, this course opened, in its very first unit, with:',
      options: [
        'A discussion of Arabic poetry',
        'A single misplaced vowel changing a Qur\u2019anic verse\u2019s meaning, the exact reason Nahw was systematized at all',
        'A list of Arabic vocabulary',
        'A history of the Arabic alphabet',
      ],
      correctIndex: 1,
      explanation: 'This course\u2019s closing topic returns directly to this same founding story.',
    },
    {
      id: 'ar14q24',
      question: 'According to the lesson, this course\u2019s closing claim is that the precision this course has built is now available:',
      options: [
        'Only as isolated facts to recall individually',
        'As a single, connected system capable of resolving real Arabic text with genuine confidence rather than guesswork',
        'Only for reciting the Qur\u2019an, with no wider application',
        'Only to advanced native speakers',
      ],
      correctIndex: 1,
      explanation: 'This is the practical payoff this entire fourteen-unit course has been building toward.',
    },
    {
      id: 'ar14q25',
      question: 'According to the lesson, يَا رَبِّ (O my Lord) is described as:',
      options: [
        'A rare, obscure construction with no real usage',
        'One of the most widely recognized instances of nida\u2019 across Islamic devotional language',
        'An example of laa an-nafiyah lil-jins',
        'An example of a mudari\u2019 verb in jazm',
      ],
      correctIndex: 1,
      explanation: 'رَبِّ here carries an attached pronoun referring to the speaker.',
    },
    {
      id: 'ar14q26',
      question: 'According to the lesson, this unit\u2019s overall progression moves from:',
      options: [
        'Parsing a full passage directly to mahalla l-i\u2019rab, in reverse order',
        'Mahalla l-i\u2019rab, to nida\u2019, to istifham, to a full synthesis parsing a connected passage',
        'A repeat of Unit 13\u2019s content with no new material',
        'Only new, disconnected material with no relation to the rest of this course',
      ],
      correctIndex: 1,
      explanation: 'This mirrors the order in which this unit\u2019s four topics were actually presented.',
    },
    {
      id: 'ar14q27',
      question: 'According to the lesson, this course\u2019s treatment of هَلْ across two different units illustrates:',
      options: [
        'Two entirely unrelated, contradictory uses of the same word',
        'A single word returned to twice, first as an example of harf, later in its actual functional role forming questions',
        'An error in this course\u2019s own consistency',
        'That هَلْ has no real grammatical function at all',
      ],
      correctIndex: 1,
      explanation: 'This is a deliberate structural choice connecting this course\u2019s first and final units.',
    },
    {
      id: 'ar14q28',
      question: 'According to the lesson, correctly parsing the closing passage required knowledge from how many of this course\u2019s earlier units, according to the specific citations given?',
      options: [
        'Only one earlier unit',
        'Several, spanning this course\u2019s first, third, fifth, seventh, eighth, ninth, tenth, eleventh, and thirteenth units',
        'None; the passage required entirely new rules',
        'Only this course\u2019s eleventh unit',
      ],
      correctIndex: 1,
      explanation: 'This is stated directly as demonstrating the cumulative, interdependent nature of everything this course has covered.',
    },
    {
      id: 'ar14q29',
      question: 'According to the lesson, mahalla l-i\u2019rab specifically resolves a tension between:',
      options: [
        'Nasb and jarr',
        'A jumlah\u2019s own lack of independent i\u2019rab and its genuine participation in a surrounding sentence\u2019s grammatical structure',
        'Raf\u2019 and jazm',
        'Definite and indefinite nouns',
      ],
      correctIndex: 1,
      explanation: 'This is the precise concept this unit\u2019s first topic introduces and names directly.',
    },
    {
      id: 'ar14q30',
      question: 'Taken together, this final unit\u2019s, and this entire course\u2019s, overarching theme is best summarized as:',
      options: [
        'Arabic grammar consists of disconnected rules with no real relationship to one another',
        'A sentence\u2019s parts, its case system, and several further extending structures together form one coherent, learnable system, demonstrated concretely by successfully parsing real, connected Arabic text using material drawn from across this entire fourteen-unit course',
        'Only the final unit\u2019s own material carries any real significance',
        'This course\u2019s closing unit has no connection to the units that preceded it',
      ],
      correctIndex: 1,
      explanation: 'This synthesizes all four topics of Unit 14, and the entire fourteen-unit course, into a single closing claim.',
    },
  ],
};