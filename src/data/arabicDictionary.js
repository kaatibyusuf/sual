// src/data/arabicDictionary.js
//
// Arabic-English dictionary, organized by starting letter. Each
// entry: word, transliteration, meaning, part of speech, a synonym,
// an antonym (where one genuinely exists — not every word has a
// true opposite), and a simple example sentence showing everyday
// usage.
//
// STATUS: COMPLETE — all 28 letters of the Arabic alphabet now have
// exactly 50 words each (1,400 entries total). Original content, not
// reproduced from any existing dictionary.
//
// Recommend native-speaker review before publishing. Letters with
// inherently sparse everyday vocabulary — especially ذ, ث, and ظ —
// lean more heavily on classical, compound, religious, or
// specialized/technical terms in their later entries, since Arabic
// genuinely has far fewer common words starting with those letters
// than with letters like ا, م, or ع. This is expected, not an error,
// but is exactly the kind of thing a reviewer should sanity-check
// before this ships to end users, particularly for a
// religious/educational context.

export const ARABIC_ALPHABET = [
  'ا','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض',
  'ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي',
]

export const ARABIC_DICTIONARY = {
  'ا': [
  {
      word: 'أَب', transliteration: 'ab', meaning: 'father', pos: 'noun',
      synonym: 'وَالِد (walid)', antonym: 'أُمّ (mother)',
      example: { arabic: 'أَبِي يَعْمَلُ فِي المَدْرَسَة', transliteration: 'Abi ya\'malu fil-madrasah', translation: 'My father works at the school.' },
    },
  {
      word: 'أُمّ', transliteration: 'umm', meaning: 'mother', pos: 'noun',
      synonym: 'وَالِدَة (walidah)', antonym: 'أَب (father)',
      example: { arabic: 'أُمِّي تَطْبُخُ الطَّعَام', transliteration: 'Ummi tatbukhu at-ta\'am', translation: 'My mother cooks the food.' },
    },
  {
      word: 'أَكَلَ', transliteration: 'akala', meaning: 'he ate', pos: 'verb',
      synonym: 'تَنَاوَلَ (tanawala)', antonym: 'جَاعَ (was hungry / went without food)',
      example: { arabic: 'أَكَلَ الوَلَدُ الطَّعَامَ بِسُرْعَة', transliteration: 'Akala al-waladu at-ta\'ama bisur\'ah', translation: 'The boy ate the food quickly.' },
    },
  {
      word: 'أَبْيَض', transliteration: 'abyad', meaning: 'white', pos: 'adjective',
      synonym: null, antonym: 'أَسْوَد (black)',
      example: { arabic: 'القَمِيصُ أَبْيَض', transliteration: 'Al-qamisu abyad', translation: 'The shirt is white.' },
    },
  {
      word: 'أَخ', transliteration: 'akh', meaning: 'brother', pos: 'noun',
      synonym: null, antonym: 'أُخْت (sister)',
      example: { arabic: 'أَخِي أَكْبَرُ مِنِّي', transliteration: 'Akhi akbaru minni', translation: 'My brother is older than me.' },
    },
  {
      word: 'أُخْت', transliteration: 'ukht', meaning: 'sister', pos: 'noun',
      synonym: null, antonym: 'أَخ (brother)',
      example: { arabic: 'أُخْتِي تَدْرُسُ فِي الجَامِعَة', transliteration: 'Ukhti tadrusu fil-jami\'ah', translation: 'My sister studies at the university.' },
    },
  {
      word: 'أَمَام', transliteration: 'amam', meaning: 'in front of', pos: 'preposition',
      synonym: 'قُدَّام (quddam)', antonym: 'خَلْف (behind)',
      example: { arabic: 'البَيْتُ أَمَامَ المَسْجِد', transliteration: 'Al-baytu amama al-masjid', translation: 'The house is in front of the mosque.' },
    },
  {
      word: 'أَسْرَع', transliteration: 'asra\'a', meaning: 'faster / he hurried', pos: 'verb / comparative adjective',
      synonym: 'عَجَّلَ (ajjala)', antonym: 'أَبْطَأَ (slowed down)',
      example: { arabic: 'أَسْرَعَ فِي المَشْيِ لِلَحَاقِ الحَافِلَة', transliteration: 'Asra\'a fil-mashyi lil-lahaqi al-hafilah', translation: 'He hurried his walking to catch the bus.' },
    },
  {
      word: 'أَحْمَر', transliteration: 'ahmar', meaning: 'red', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'التُّفَّاحَةُ حَمْرَاء', transliteration: 'At-tuffahatu hamra\'', translation: 'The apple is red.' },
    },
  {
      word: 'أَرَادَ', transliteration: 'arada', meaning: 'he wanted', pos: 'verb',
      synonym: 'رَغِبَ (raghiba)', antonym: 'كَرِهَ (disliked)',
      example: { arabic: 'أَرَادَ أَنْ يَشْرَبَ المَاء', transliteration: 'Arada an yashraba al-ma\'', translation: 'He wanted to drink water.' },
    },
  {
      word: 'إِنْسَان', transliteration: 'insan', meaning: 'human being', pos: 'noun',
      synonym: 'بَشَر (bashar)', antonym: null,
      example: { arabic: 'كُلُّ إِنْسَانٍ يُخْطِئ', transliteration: 'Kullu insanin yukhti\'', translation: 'Every human being makes mistakes.' },
    },
  {
      word: 'اِبْتَسَمَ', transliteration: 'ibtasama', meaning: 'he smiled', pos: 'verb',
      synonym: null, antonym: 'عَبَسَ (frowned)',
      example: { arabic: 'اِبْتَسَمَ الطِّفْلُ عِنْدَمَا رَآنِي', transliteration: 'Ibtasama at-tiflu \'indama ra\'ani', translation: 'The child smiled when he saw me.' },
    },
  {
      word: 'أَسْوَد', transliteration: 'aswad', meaning: 'black', pos: 'adjective',
      synonym: null, antonym: 'أَبْيَض (white)',
      example: { arabic: 'القَلَمُ أَسْوَدُ اللَّوْن', transliteration: 'Al-qalamu aswadul-lawn', translation: 'The pen is black in color.' },
    },
  {
      word: 'أَخَذَ', transliteration: 'akhadha', meaning: 'he took', pos: 'verb',
      synonym: null, antonym: 'أَعْطَى (gave)',
      example: { arabic: 'أَخَذَ الكِتَابَ مِنَ المَكْتَبَة', transliteration: 'Akhadha al-kitaba minal-maktabah', translation: 'He took the book from the library.' },
    },
  {
      word: 'أَعْطَى', transliteration: 'a\'ta', meaning: 'he gave', pos: 'verb',
      synonym: 'وَهَبَ (wahaba)', antonym: 'أَخَذَ (took)',
      example: { arabic: 'أَعْطَى الفَقِيرَ بَعْضَ المَال', transliteration: 'A\'tal-faqira ba\'dal-mal', translation: 'He gave the poor man some money.' },
    },
  {
      word: 'أَغْلَى', transliteration: 'aghla', meaning: 'more expensive', pos: 'adjective (comparative)',
      synonym: null, antonym: 'أَرْخَص (cheaper)',
      example: { arabic: 'هٰذَا القَمِيصُ أَغْلَى مِنَ الآخَر', transliteration: 'Hadha al-qamisu aghla minal-akhar', translation: 'This shirt is more expensive than the other.' },
    },
  {
      word: 'أَرْخَص', transliteration: 'arkhas', meaning: 'cheaper', pos: 'adjective (comparative)',
      synonym: null, antonym: 'أَغْلَى (more expensive)',
      example: { arabic: 'السُّوقُ أَرْخَصُ مِنَ المَرْكَزِ التِّجَارِيّ', transliteration: 'As-suqu arkhasu minal-markaz at-tijari', translation: 'The market is cheaper than the mall.' },
    },
  {
      word: 'أُذُن', transliteration: 'udhun', meaning: 'ear', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تُؤْلِمُنِي أُذُنِي اليُمْنَى', transliteration: 'Tu\'limuni udhuni al-yumna', translation: 'My right ear hurts.' },
    },
  {
      word: 'أَنْف', transliteration: 'anf', meaning: 'nose', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَنْفُهُ طَوِيلٌ قَلِيلًا', transliteration: 'Anfuhu tawilun qalilan', translation: 'His nose is a bit long.' },
    },
  {
      word: 'اِسْتَيْقَظَ', transliteration: 'istayqaza', meaning: 'he woke up', pos: 'verb',
      synonym: null, antonym: 'نَامَ (slept)',
      example: { arabic: 'اِسْتَيْقَظَ مُبَكِّرًا لِصَلَاةِ الفَجْر', transliteration: 'Istayqaza mubakkiran lisalat al-fajr', translation: 'He woke up early for the Fajr prayer.' },
    },
  {
    word: 'أَسَد', transliteration: 'asad', meaning: 'lion', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الأَسَدُ مَلِكُ الغَابَة', transliteration: 'Al-asadu maliku al-ghabah', translation: 'The lion is the king of the jungle.' },
  },
  {
    word: 'أَرْض', transliteration: 'ard', meaning: 'earth / land', pos: 'noun',
    synonym: null, antonym: 'سَمَاء (sky)',
    example: { arabic: 'زَرَعَ الفَلَّاحُ الأَرْضَ بِالقَمْح', transliteration: 'Zara\'al-fallahul-arda bil-qamh', translation: 'The farmer planted the land with wheat.' },
  },
  {
    word: 'أُسْتَاذ', transliteration: 'ustadh', meaning: 'professor / teacher', pos: 'noun',
    synonym: 'مُعَلِّم (mu\'allim)', antonym: null,
    example: { arabic: 'الأُسْتَاذُ يَشْرَحُ الدَّرْسَ بِوُضُوح', transliteration: 'Al-ustadhu yashrahud-darsa biwuduh', translation: 'The professor explains the lesson clearly.' },
  },
  {
    word: 'أَمَل', transliteration: 'amal', meaning: 'hope', pos: 'noun',
    synonym: 'رَجَاء (raja\')', antonym: 'يَأْس (despair)',
    example: { arabic: 'لَا تَفْقِدِ الأَمَلَ أَبَدًا', transliteration: 'La tafqidil-amala abadan', translation: 'Never lose hope.' },
  },
  {
    word: 'أَلَم', transliteration: 'alam', meaning: 'pain', pos: 'noun',
    synonym: null, antonym: 'رَاحَة (comfort)',
    example: { arabic: 'شَعَرَ بِأَلَمٍ فِي رَأْسِهِ', transliteration: 'Sha\'ara bi\'alamin fi ra\'sih', translation: 'He felt pain in his head.' },
  },
  {
    word: 'أَجْمَل', transliteration: 'ajmal', meaning: 'more/most beautiful', pos: 'adjective (comparative)',
    synonym: null, antonym: 'أَقْبَح (uglier)',
    example: { arabic: 'هٰذَا أَجْمَلُ مَنْظَرٍ رَأَيْتُهُ', transliteration: 'Hadha ajmalu manzarin ra\'aytuh', translation: 'This is the most beautiful view I have seen.' },
  },
  {
    word: 'أَصْغَر', transliteration: 'asghar', meaning: 'smaller / younger', pos: 'adjective (comparative)',
    synonym: null, antonym: 'أَكْبَر (bigger/older)',
    example: { arabic: 'أَخِي الأَصْغَرُ فِي المَدْرَسَةِ الِابْتِدَائِيَّة', transliteration: 'Akhil-asgharu fil-madrasatil-ibtida\'iyyah', translation: 'My younger brother is in elementary school.' },
  },
  {
    word: 'أَكْبَر', transliteration: 'akbar', meaning: 'bigger / older / greatest', pos: 'adjective (comparative)',
    synonym: null, antonym: 'أَصْغَر (smaller/younger)',
    example: { arabic: 'اللَّهُ أَكْبَرُ مِنْ كُلِّ شَيْء', transliteration: 'Allahu akbaru min kulli shay\'', translation: 'Allah is greater than everything.' },
  },
  {
    word: 'أَوَّل', transliteration: 'awwal', meaning: 'first', pos: 'adjective / noun',
    synonym: null, antonym: 'آخِر (last)',
    example: { arabic: 'كَانَ أَوَّلَ الحُضُورِ فِي الِاجْتِمَاع', transliteration: 'Kana awwalal-hudur fil-ijtima\'', translation: 'He was the first to attend the meeting.' },
  },
  {
    word: 'آخِر', transliteration: 'akhir', meaning: 'last', pos: 'adjective / noun',
    synonym: null, antonym: 'أَوَّل (first)',
    example: { arabic: 'هٰذَا آخِرُ يَوْمٍ فِي الدِّرَاسَة', transliteration: 'Hadha akhiru yawmin fid-dirasah', translation: 'This is the last day of study.' },
  },
  {
    word: 'أَصْفَر', transliteration: 'asfar', meaning: 'yellow', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'المَوْزُ لَوْنُهُ أَصْفَر', transliteration: 'Al-mawzu lawnuhu asfar', translation: 'The banana is yellow.' },
  },
  {
    word: 'أَخْضَر', transliteration: 'akhdar', meaning: 'green', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'العُشْبُ أَخْضَرُ فِي الرَّبِيع', transliteration: 'Al-\'ushbu akhdaru fir-rabi\'', translation: 'The grass is green in spring.' },
  },
  {
    word: 'أَزْرَق', transliteration: 'azraq', meaning: 'blue', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'السَّمَاءُ زَرْقَاءُ اليَوْم', transliteration: 'As-sama\'u zarqa\'ul-yawm', translation: 'The sky is blue today.' },
  },
  {
    word: 'إِجَازَة', transliteration: 'ijazah', meaning: 'vacation / leave (from work)', pos: 'noun',
    synonym: 'عُطْلَة (\'utlah)', antonym: null,
    example: { arabic: 'أَخَذَ إِجَازَةً لِزِيَارَةِ أَهْلِهِ', transliteration: 'Akhadha ijazatan liziyarati ahlih', translation: 'He took leave to visit his family.' },
  },
  {
    word: 'أَمِين', transliteration: 'amin', meaning: 'trustworthy', pos: 'adjective',
    synonym: 'مُخْلِص (mukhlis)', antonym: 'خَائِن (treacherous)',
    example: { arabic: 'كَانَ الرَّسُولُ أَمِينًا قَبْلَ النُّبُوَّة', transliteration: 'Kanar-rasulu aminan qablan-nubuwwah', translation: 'The Messenger was trustworthy even before prophethood.' },
  },
  {
    word: 'أَنَانِيّ', transliteration: 'ananiyy', meaning: 'selfish', pos: 'adjective',
    synonym: null, antonym: 'إِيثَارِيّ (altruistic)',
    example: { arabic: 'لَا يُحِبُّ النَّاسُ الشَّخْصَ الأَنَانِيّ', transliteration: 'La yuhibbun-nasush-shakhsal-ananiyy', translation: 'People do not like the selfish person.' },
  },
  {
    word: 'أَحَبَّ', transliteration: 'ahabba', meaning: 'he loved', pos: 'verb',
    synonym: 'حَبَّ (habba)', antonym: 'كَرِهَ (hated)',
    example: { arabic: 'أَحَبَّ وَطَنَهُ حُبًّا عَظِيمًا', transliteration: 'Ahabba watanahu hubban \'azimam', translation: 'He loved his homeland with great love.' },
  },
  {
    word: 'أَجَابَ', transliteration: 'ajaba', meaning: 'he answered', pos: 'verb',
    synonym: null, antonym: 'سَأَلَ (asked)',
    example: { arabic: 'أَجَابَ عَنْ جَمِيعِ الأَسْئِلَة', transliteration: 'Ajaba \'an jami\'il-as\'ilah', translation: 'He answered all the questions.' },
  },
  {
    word: 'أَعْجَبَ', transliteration: 'a\'jaba', meaning: 'it pleased / amazed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'أَعْجَبَنِي أُسْلُوبُهُ فِي الكِتَابَة', transliteration: 'A\'jabani usluubuhu fil-kitabah', translation: 'His style of writing pleased me.' },
  },
  {
    word: 'أَشْرَقَ', transliteration: 'ashraqa', meaning: 'it shone / rose (sun)', pos: 'verb',
    synonym: null, antonym: 'غَرَبَ (set)',
    example: { arabic: 'أَشْرَقَتِ الشَّمْسُ بَعْدَ العَاصِفَة', transliteration: 'Ashraqatish-shamsu ba\'dal-\'asifah', translation: 'The sun shone after the storm.' },
  },
  {
    word: 'أَنْقَذَ', transliteration: 'anqadha', meaning: 'he saved / rescued', pos: 'verb',
    synonym: null, antonym: 'أَهْلَكَ (destroyed)',
    example: { arabic: 'أَنْقَذَ الطِّفْلَ مِنَ الغَرَق', transliteration: 'Anqadhat-tifla minal-gharaq', translation: 'He saved the child from drowning.' },
  },
  {
    word: 'أَسَاس', transliteration: 'asas', meaning: 'foundation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الصِّدْقُ أَسَاسُ كُلِّ عَلَاقَة', transliteration: 'As-sidqu asasu kulli \'alaqah', translation: 'Honesty is the foundation of every relationship.' },
  },
  {
    word: 'إِرَادَة', transliteration: 'iradah', meaning: 'willpower / will', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَجَحَ بِفَضْلِ إِرَادَتِهِ القَوِيَّة', transliteration: 'Najaha bifadli iradatihil-qawiyyah', translation: 'He succeeded thanks to his strong willpower.' },
  },
  {
    word: 'أَمَانَة', transliteration: 'amanah', meaning: 'trustworthiness / trust', pos: 'noun',
    synonym: null, antonym: 'خِيَانَة (betrayal)',
    example: { arabic: 'حَافَظَ عَلَى الأَمَانَةِ الَّتِي حُمِّلَهَا', transliteration: 'Hafaza \'alal-amanatillati hummilaha', translation: 'He upheld the trust he was given.' },
  },
  {
    word: 'أُسْرَة', transliteration: 'usrah', meaning: 'family', pos: 'noun',
    synonym: 'عَائِلَة (\'a\'ilah)', antonym: null,
    example: { arabic: 'أُسْرَتِي مُتَعَاوِنَةٌ وَمُتَرَابِطَة', transliteration: 'Usrati muta\'awinatun wa mutarabitah', translation: 'My family is cooperative and close-knit.' },
  },
  {
    word: 'أَلْبَسَ', transliteration: 'albasa', meaning: 'he dressed (someone)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'أَلْبَسَتِ الأُمُّ طِفْلَهَا مَلَابِسَ الشِّتَاء', transliteration: 'Albasatil-ummu tiflaha malabisash-shita\'', translation: 'The mother dressed her child in winter clothes.' },
  },
  {
    word: 'أَخِيرًا', transliteration: 'akhiran', meaning: 'finally', pos: 'adverb',
    synonym: null, antonym: null,
    example: { arabic: 'وَصَلَ أَخِيرًا بَعْدَ رِحْلَةٍ طَوِيلَة', transliteration: 'Wasala akhiran ba\'da rihlatin tawilah', translation: 'He finally arrived after a long journey.' },
  },
  {
    word: 'أَبْدًا', transliteration: 'abadan', meaning: 'never / ever (with negation)', pos: 'adverb',
    synonym: null, antonym: 'دَائِمًا (always)',
    example: { arabic: 'لَنْ أَنْسَى مَعْرُوفَكَ أَبَدًا', transliteration: 'Lan ansa ma\'rufaka abadan', translation: 'I will never forget your kindness.' },
  },
  {
    word: 'أَقْرَب', transliteration: 'aqrab', meaning: 'nearer / closer', pos: 'adjective (comparative)',
    synonym: null, antonym: 'أَبْعَد (farther)',
    example: { arabic: 'هٰذَا الطَّرِيقُ أَقْرَبُ إِلَى البَيْت', transliteration: 'Hadhat-tariqu aqrabu ilal-bayt', translation: 'This road is closer to the house.' },
  },
  {
    word: 'أَنْعَمَ', transliteration: 'an\'ama', meaning: 'He bestowed favor', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'أَنْعَمَ اللَّهُ عَلَيْنَا بِنِعَمٍ كَثِيرَة', transliteration: 'An\'amallahu \'alayna bini\'amin kathirah', translation: 'Allah bestowed upon us many blessings.' },
  },
  ],

  'ب': [
  {
      word: 'بَيْت', transliteration: 'bayt', meaning: 'house / home', pos: 'noun',
      synonym: 'مَنْزِل (manzil)', antonym: null,
      example: { arabic: 'ذَهَبْتُ إِلَى البَيْتِ بَعْدَ العَمَل', transliteration: 'Dhahabtu ilal-bayti ba\'d al-\'amal', translation: 'I went home after work.' },
    },
  {
      word: 'بَاب', transliteration: 'bab', meaning: 'door', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَغْلِقِ البَابَ مِنْ فَضْلِك', transliteration: 'Aghliq al-baba min fadlik', translation: 'Close the door, please.' },
    },
  {
      word: 'بَارِد', transliteration: 'barid', meaning: 'cold', pos: 'adjective',
      synonym: null, antonym: 'حَارّ (hot)',
      example: { arabic: 'المَاءُ بَارِدٌ جِدًّا', transliteration: 'Al-ma\'u baridun jiddan', translation: 'The water is very cold.' },
    },
  {
      word: 'بَعِيد', transliteration: 'ba\'id', meaning: 'far', pos: 'adjective',
      synonym: null, antonym: 'قَرِيب (near)',
      example: { arabic: 'المَدْرَسَةُ بَعِيدَةٌ عَنِ البَيْت', transliteration: 'Al-madrasatu ba\'idatun \'anil-bayt', translation: 'The school is far from the house.' },
    },
  {
      word: 'بَكَى', transliteration: 'baka', meaning: 'he cried', pos: 'verb',
      synonym: null, antonym: 'ضَحِكَ (laughed)',
      example: { arabic: 'بَكَى الطِّفْلُ لِأَنَّهُ جَائِع', transliteration: 'Baka at-tiflu li\'annahu ja\'i\'', translation: 'The child cried because he was hungry.' },
    },
  {
      word: 'بَحْر', transliteration: 'bahr', meaning: 'sea', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'ذَهَبْنَا إِلَى البَحْرِ فِي الصَّيْف', transliteration: 'Dhahabna ilal-bahri fis-sayf', translation: 'We went to the sea in the summer.' },
    },
  {
      word: 'بَاعَ', transliteration: 'ba\'a', meaning: 'he sold', pos: 'verb',
      synonym: null, antonym: 'اِشْتَرَى (bought)',
      example: { arabic: 'بَاعَ الرَّجُلُ سَيَّارَتَهُ القَدِيمَة', transliteration: 'Ba\'a ar-rajulu sayyaratahu al-qadimah', translation: 'The man sold his old car.' },
    },
  {
      word: 'بَطِيء', transliteration: 'bati\'', meaning: 'slow', pos: 'adjective',
      synonym: null, antonym: 'سَرِيع (fast)',
      example: { arabic: 'الِانْتِرْنِتُ بَطِيءٌ اليَوْم', transliteration: 'Al-internetu bati\'un al-yawm', translation: 'The internet is slow today.' },
    },
  {
      word: 'بَقَّال', transliteration: 'baqqal', meaning: 'grocer', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَيْتُ الخُبْزَ مِنَ البَقَّال', transliteration: 'Ishtaraytu al-khubza minal-baqqal', translation: 'I bought the bread from the grocer.' },
    },
  {
      word: 'بِسَاطَة', transliteration: 'basatah', meaning: 'simplicity', pos: 'noun',
      synonym: 'سُهُولَة (suhulah)', antonym: 'تَعْقِيد (complexity)',
      example: { arabic: 'أُحِبُّ بِسَاطَةَ هٰذَا الحَل', transliteration: 'Uhibbu basatata hadhal-hall', translation: 'I love the simplicity of this solution.' },
    },
  {
      word: 'بَرْد', transliteration: 'bard', meaning: 'cold (weather / a cold)', pos: 'noun',
      synonym: null, antonym: 'حَرّ (heat)',
      example: { arabic: 'أُصِبْتُ بِبَرْدٍ شَدِيد', transliteration: 'Usibtu bibardin shadid', translation: 'I caught a bad cold.' },
    },
  {
      word: 'بِنْت', transliteration: 'bint', meaning: 'girl / daughter', pos: 'noun',
      synonym: null, antonym: 'وَلَد (boy)',
      example: { arabic: 'بِنْتِي تَلْعَبُ فِي الحَدِيقَة', transliteration: 'Binti tal\'abu fil-hadiqah', translation: 'My daughter is playing in the garden.' },
    },
  {
      word: 'بَعْد', transliteration: 'ba\'d', meaning: 'after', pos: 'preposition',
      synonym: null, antonym: 'قَبْل (before)',
      example: { arabic: 'سَآتِي بَعْدَ صَلَاةِ المَغْرِب', transliteration: 'Sa\'ati ba\'da salatil-maghrib', translation: 'I will come after Maghrib prayer.' },
    },
  {
      word: 'بَحَثَ', transliteration: 'bahatha', meaning: 'he searched', pos: 'verb',
      synonym: 'فَتَّشَ (fattasha)', antonym: 'وَجَدَ (found) — the goal it seeks',
      example: { arabic: 'بَحَثَ عَنْ مَفَاتِيحِهِ طَوِيلًا', transliteration: 'Bahatha \'an mafatihihi tawilan', translation: 'He searched for his keys for a long time.' },
    },
  {
      word: 'بَدَأَ', transliteration: 'bada\'a', meaning: 'he began', pos: 'verb',
      synonym: null, antonym: 'اِنْتَهَى (ended)',
      example: { arabic: 'بَدَأَ الدَّرْسُ فِي التَّاسِعَة', transliteration: 'Bada\'a ad-darsu fit-tasi\'ah', translation: 'The lesson began at nine.' },
    },
  {
      word: 'بَسِيط', transliteration: 'basit', meaning: 'simple', pos: 'adjective',
      synonym: null, antonym: 'مُعَقَّد (complicated)',
      example: { arabic: 'السُّؤَالُ بَسِيطٌ جِدًّا', transliteration: 'As-su\'alu basitun jiddan', translation: 'The question is very simple.' },
    },
  {
      word: 'بُسْتَان', transliteration: 'bustan', meaning: 'garden / orchard', pos: 'noun',
      synonym: 'حَدِيقَة (hadiqah)', antonym: null,
      example: { arabic: 'يَمْلِكُ جَدِّي بُسْتَانًا كَبِيرًا', transliteration: 'Yamliku jaddi bustanan kabiran', translation: 'My grandfather owns a large orchard.' },
    },
  {
      word: 'بَقِيَ', transliteration: 'baqiya', meaning: 'he remained / stayed', pos: 'verb',
      synonym: null, antonym: 'ذَهَبَ (left)',
      example: { arabic: 'بَقِيَ فِي البَيْتِ طَوَالَ اليَوْم', transliteration: 'Baqiya fil-bayti tiwalal-yawm', translation: 'He stayed home all day.' },
    },
  {
      word: 'بَنَى', transliteration: 'bana', meaning: 'he built', pos: 'verb',
      synonym: null, antonym: 'هَدَمَ (demolished)',
      example: { arabic: 'بَنَى الرَّجُلُ بَيْتًا جَدِيدًا', transliteration: 'Bana ar-rajulu baytan jadidan', translation: 'The man built a new house.' },
    },
  {
      word: 'بَطَل', transliteration: 'batal', meaning: 'hero', pos: 'noun',
      synonym: null, antonym: 'جَبَان (coward)',
      example: { arabic: 'كَانَ جَدِّي بَطَلًا فِي الحَرْب', transliteration: 'Kana jaddi batalan fil-harb', translation: 'My grandfather was a hero in the war.' },
    },
  {
    word: 'بِطِّيخ', transliteration: 'bittikh', meaning: 'watermelon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُحِبُّ الأَطْفَالُ البِطِّيخَ فِي الصَّيْف', transliteration: 'Yuhibbul-atfalul-bittikha fis-sayf', translation: 'Children love watermelon in the summer.' },
  },
  {
    word: 'بَصَل', transliteration: 'basal', meaning: 'onion', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَضَافَتِ البَصَلَ إِلَى الطَّعَام', transliteration: 'Adafatil-basala ilat-ta\'am', translation: 'She added onion to the food.' },
  },
  {
    word: 'بَيْضَة', transliteration: 'baydah', meaning: 'egg', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَكَلَ بَيْضَةً مَسْلُوقَةً فِي الفَطُور', transliteration: 'Akala baydatan maslugatan fil-fatur', translation: 'He ate a boiled egg for breakfast.' },
  },
  {
    word: 'بَرَكَة', transliteration: 'barakah', meaning: 'blessing', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'فِي التَّبْكِيرِ بَرَكَة', transliteration: 'Fit-tabkiri barakah', translation: 'There is blessing in being early.' },
  },
  {
    word: 'بُطُولَة', transliteration: 'butulah', meaning: 'heroism / championship', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'فَازَ الفَرِيقُ بِبُطُولَةِ الدَّوْرِيّ', transliteration: 'Fazal-fariqu bibutulatid-dawriyy', translation: 'The team won the league championship.' },
  },
  {
    word: 'بَلَد', transliteration: 'balad', meaning: 'country', pos: 'noun',
    synonym: 'دَوْلَة (dawlah)', antonym: null,
    example: { arabic: 'زُرْتُ بَلَدًا جَمِيلًا العَامَ المَاضِي', transliteration: 'Zurtu baladan jamilan al-\'amal-madi', translation: 'I visited a beautiful country last year.' },
  },
  {
    word: 'بَحَّار', transliteration: 'bahhar', meaning: 'sailor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَمِلَ البَحَّارُ عَلَى السَّفِينَةِ سَنَوَات', transliteration: 'Amilal-bahharu \'alas-safinati sanawat', translation: 'The sailor worked on the ship for years.' },
  },
  {
    word: 'بِرْكَة', transliteration: 'birkah', meaning: 'pond / pool', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَبَحَ الأَوْلَادُ فِي البِرْكَة', transliteration: 'Sabahal-awladu fil-birkah', translation: 'The children swam in the pool.' },
  },
  {
    word: 'بَرْق', transliteration: 'barq', meaning: 'lightning', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَضَاءَ البَرْقُ السَّمَاءَ فَجْأَة', transliteration: 'Ada\'al-barqus-sama\'a faj\'ah', translation: 'Lightning suddenly lit up the sky.' },
  },
  {
    word: 'بَخِيل', transliteration: 'bakhil', meaning: 'stingy / miserly', pos: 'adjective',
    synonym: null, antonym: 'كَرِيم (generous)',
    example: { arabic: 'لَا يُحِبُّ النَّاسُ الرَّجُلَ البَخِيل', transliteration: 'La yuhibbun-nasur-rajulal-bakhil', translation: 'People do not like the stingy man.' },
  },
  {
    word: 'بَصِير', transliteration: 'basir', meaning: 'insightful / perceptive', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'اللَّهُ سَمِيعٌ بَصِير', transliteration: 'Allahu sami\'un basir', translation: 'Allah is All-Hearing, All-Seeing.' },
  },
  {
    word: 'بَرَّاق', transliteration: 'barraq', meaning: 'shiny / glittering', pos: 'adjective',
    synonym: null, antonym: 'بَاهِت (dull)',
    example: { arabic: 'لَبِسَتْ خَاتَمًا بَرَّاقًا', transliteration: 'Labisat khataman barraqan', translation: 'She wore a shiny ring.' },
  },
  {
    word: 'بَرَاءَة', transliteration: 'bara\'ah', meaning: 'innocence', pos: 'noun',
    synonym: null, antonym: 'ذَنْب (guilt)',
    example: { arabic: 'أَثْبَتَتِ المَحْكَمَةُ بَرَاءَتَهُ', transliteration: 'Athbatatil-mahkamatu bara\'atah', translation: 'The court proved his innocence.' },
  },
  {
    word: 'بَذَلَ', transliteration: 'badhala', meaning: 'he exerted / gave (effort)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'بَذَلَ جُهْدًا كَبِيرًا لِلنَّجَاح', transliteration: 'Badhala juhdan kabiran lin-najah', translation: 'He exerted great effort for success.' },
  },
  {
    word: 'بَارَكَ', transliteration: 'baraka', meaning: 'he blessed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'بَارَكَ اللَّهُ فِي عُمُرِهِ وَرِزْقِهِ', transliteration: 'Barakallahu fi \'umurihi wa rizqih', translation: 'May Allah bless his life and provision.' },
  },
  {
    word: 'بَلَغَ', transliteration: 'balagha', meaning: 'he reached (an age/place)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'بَلَغَ سِنَّ الرُّشْد', transliteration: 'Balagha sinnar-rushd', translation: 'He reached the age of maturity.' },
  },
  {
    word: 'بَاسِم', transliteration: 'basim', meaning: 'smiling', pos: 'adjective',
    synonym: null, antonym: 'عَابِس (frowning)',
    example: { arabic: 'اِسْتَقْبَلَنِي بِوَجْهٍ بَاسِم', transliteration: 'Istaqbalani biwajhin basim', translation: 'He received me with a smiling face.' },
  },
  {
    word: 'بِطَاقَة', transliteration: 'bitaqah', meaning: 'card', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَرْسَلَ لَهُ بِطَاقَةَ تَهْنِئَة', transliteration: 'Arsala lahu bitaqata tahni\'ah', translation: 'He sent him a congratulations card.' },
  },
  {
    word: 'بُرْج', transliteration: 'burj', meaning: 'tower', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَرْتَفِعُ البُرْجُ فَوْقَ المَدِينَة', transliteration: 'Yartafi\'ul-burju fawqal-madinah', translation: 'The tower rises above the city.' },
  },
  {
    word: 'بَصْمَة', transliteration: 'basmah', meaning: 'fingerprint', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَرَكَ بَصْمَتَهُ عَلَى البَاب', transliteration: 'Taraka basmatahu \'alal-bab', translation: 'He left his fingerprint on the door.' },
  },
  {
    word: 'بَلَاغَة', transliteration: 'balaghah', meaning: 'eloquence', pos: 'noun',
    synonym: 'فَصَاحَة (fasahah)', antonym: null,
    example: { arabic: 'اِشْتُهِرَ الخَطِيبُ بِبَلَاغَتِهِ', transliteration: 'Ishtuhiral-khatibu bibalaghatih', translation: 'The orator became famous for his eloquence.' },
  },
  {
    word: 'بَيَان', transliteration: 'bayan', meaning: 'statement / clarification', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَصْدَرَتِ الوِزَارَةُ بَيَانًا رَسْمِيًّا', transliteration: 'Asdaratil-wizaratu bayanan rasmiyyan', translation: 'The ministry issued an official statement.' },
  },
  {
    word: 'بُكَاء', transliteration: 'buka\'', meaning: 'crying', pos: 'noun',
    synonym: null, antonym: 'ضَحِك (laughter)',
    example: { arabic: 'سَمِعْتُ بُكَاءَ الطِّفْلِ مِنَ الغُرْفَةِ المُجَاوِرَة', transliteration: 'Sami\'tu buka\'at-tifli minal-ghurfatil-mujawirah', translation: 'I heard the child\'s crying from the adjacent room.' },
  },
  {
    word: 'بَرْمَجَة', transliteration: 'barmajah', meaning: 'programming', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَدْرُسُ البَرْمَجَةَ فِي الجَامِعَة', transliteration: 'Yadrusul-barmajata fil-jami\'ah', translation: 'He studies programming at university.' },
  },
  {
    word: 'بَطَّارِيَّة', transliteration: 'battariyyah', meaning: 'battery', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَفِدَتْ بَطَّارِيَّةُ الهَاتِف', transliteration: 'Nafidat battariyyatul-hatif', translation: 'The phone battery ran out.' },
  },
  {
    word: 'بِرّ', transliteration: 'birr', meaning: 'righteousness / dutifulness', pos: 'noun',
    synonym: null, antonym: 'عُقُوق (undutifulness)',
    example: { arabic: 'بِرُّ الوَالِدَيْنِ مِنْ أَحَبِّ الأَعْمَال', transliteration: 'Birrul-walidayni min ahabbil-a\'mal', translation: 'Dutifulness to parents is among the most beloved deeds.' },
  },
  {
    word: 'بَذْرَة', transliteration: 'badhrah', meaning: 'seed', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَرَعَ بَذْرَةً وَانْتَظَرَ نُمُوَّهَا', transliteration: 'Zara\'a badhratan wantazara numuwwaha', translation: 'He planted a seed and waited for it to grow.' },
  },
  {
    word: 'بَرِيء', transliteration: 'bari\'', meaning: 'innocent', pos: 'adjective',
    synonym: null, antonym: 'مُذْنِب (guilty)',
    example: { arabic: 'ثَبَتَ أَنَّهُ بَرِيءٌ مِنَ التُّهْمَة', transliteration: 'Thabata annahu bari\'un minat-tuhmah', translation: 'It was proven that he is innocent of the accusation.' },
  },
  {
    word: 'بُخَار', transliteration: 'bukhar', meaning: 'steam / vapor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَصَاعَدَ البُخَارُ مِنَ المَاءِ السَّاخِن', transliteration: 'Tasa\'adal-bukharu minal-ma\'is-sakhin', translation: 'Steam rose from the hot water.' },
  },
  {
    word: 'بَيْدَاء', transliteration: 'bayda\'', meaning: 'desert / open plain', pos: 'noun',
    synonym: 'صَحْرَاء (sahra\')', antonym: null,
    example: { arabic: 'قَطَعُوا البَيْدَاءَ فِي رِحْلَتِهِمْ الطَّوِيلَة', transliteration: 'Qata\'ul-bayda\'a fi rihlatihimut-tawilah', translation: 'They crossed the open plain on their long journey.' },
  },
  ],

  'ت': [
  {
      word: 'تَفَّاح', transliteration: 'tuffah', meaning: 'apple(s)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَكَلْتُ تُفَّاحَةً بَعْدَ الغَدَاء', transliteration: 'Akaltu tuffahatan ba\'d al-ghada\'', translation: 'I ate an apple after lunch.' },
    },
  {
      word: 'تَعِبَ', transliteration: 'ta\'iba', meaning: 'he got tired', pos: 'verb',
      synonym: 'أَرْهَقَ نَفْسَه', antonym: 'اِسْتَرَاحَ (rested)',
      example: { arabic: 'تَعِبَ العَامِلُ بَعْدَ يَوْمٍ طَوِيل', transliteration: 'Ta\'iba al-\'amilu ba\'d yawmin tawil', translation: 'The worker got tired after a long day.' },
    },
  {
      word: 'تَحْت', transliteration: 'taht', meaning: 'under / below', pos: 'preposition',
      synonym: null, antonym: 'فَوْق (above)',
      example: { arabic: 'القِطُّ نَائِمٌ تَحْتَ الطَّاوِلَة', transliteration: 'Al-qittu na\'imun tahtat-tawilah', translation: 'The cat is sleeping under the table.' },
    },
  {
      word: 'تَعَلَّمَ', transliteration: 'ta\'allama', meaning: 'he learned', pos: 'verb',
      synonym: 'دَرَسَ (darasa)', antonym: 'نَسِيَ (forgot)',
      example: { arabic: 'تَعَلَّمَ الطَّالِبُ دَرْسًا جَدِيدًا', transliteration: 'Ta\'allama at-talibu darsan jadidan', translation: 'The student learned a new lesson.' },
    },
  {
      word: 'تَاجِر', transliteration: 'tajir', meaning: 'merchant / trader', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'التَّاجِرُ يَبِيعُ الأَقْمِشَة', transliteration: 'At-tajiru yabi\'ul-aqmishah', translation: 'The merchant sells fabrics.' },
    },
  {
      word: 'تَقْرِيبًا', transliteration: 'taqriban', meaning: 'approximately / almost', pos: 'adverb',
      synonym: 'تَحْدِيدًا (exactly) — near-opposite in precision', antonym: null,
      example: { arabic: 'وَصَلْتُ تَقْرِيبًا فِي الوَقْتِ المُحَدَّد', transliteration: 'Wasaltu taqriban fil-waqt al-muhaddad', translation: 'I arrived approximately on time.' },
    },
  {
      word: 'تَحَدَّثَ', transliteration: 'tahaddatha', meaning: 'he spoke / talked', pos: 'verb',
      synonym: 'تَكَلَّمَ (takallama)', antonym: 'سَكَتَ (was silent)',
      example: { arabic: 'تَحَدَّثَ المُعَلِّمُ عَنِ التَّارِيخ', transliteration: 'Tahaddatha al-mu\'allimu \'anit-tarikh', translation: 'The teacher talked about history.' },
    },
  {
      word: 'تِلْمِيذ', transliteration: 'tilmidh', meaning: 'pupil / student', pos: 'noun',
      synonym: 'طَالِب (talib)', antonym: 'مُعَلِّم (teacher)',
      example: { arabic: 'التِّلْمِيذُ يَكْتُبُ الوَاجِب', transliteration: 'At-tilmidhu yaktubul-wajib', translation: 'The pupil is writing the homework.' },
    },
  {
      word: 'تَغَيَّرَ', transliteration: 'taghayyara', meaning: 'it changed', pos: 'verb',
      synonym: 'تَبَدَّلَ (tabaddala)', antonym: 'ثَبَتَ (stayed the same)',
      example: { arabic: 'تَغَيَّرَ الطَّقْسُ فَجْأَة', transliteration: 'Taghayyara at-taqsu faj\'ah', translation: 'The weather changed suddenly.' },
    },
  {
      word: 'تَذْكِرَة', transliteration: 'tadhkirah', meaning: 'ticket', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَيْتُ تَذْكِرَةَ الطَّائِرَة', transliteration: 'Ishtaraytu tadhkirat at-ta\'irah', translation: 'I bought the plane ticket.' },
    },
  {
      word: 'تَرَكَ', transliteration: 'taraka', meaning: 'he left (something behind)', pos: 'verb',
      synonym: null, antonym: 'أَخَذَ (took)',
      example: { arabic: 'تَرَكَ حَقِيبَتَهُ فِي الفَصْل', transliteration: 'Taraka haqibatahu fil-fasl', translation: 'He left his bag in the classroom.' },
    },
  {
      word: 'تَفَكَّرَ', transliteration: 'tafakkara', meaning: 'he thought / reflected', pos: 'verb',
      synonym: 'فَكَّرَ (fakkara)', antonym: null,
      example: { arabic: 'تَفَكَّرَ فِي خَلْقِ السَّمَاوَات', transliteration: 'Tafakkara fi khalqis-samawat', translation: 'He reflected on the creation of the heavens.' },
    },
  {
      word: 'تُرَاب', transliteration: 'turab', meaning: 'soil / dust', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'زَرَعْنَا البُذُورَ فِي التُّرَاب', transliteration: 'Zara\'nal-budhura fit-turab', translation: 'We planted the seeds in the soil.' },
    },
  {
      word: 'تِلْفَاز', transliteration: 'tilfaz', meaning: 'television', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'شَاهَدْنَا الأَخْبَارَ فِي التِّلْفَاز', transliteration: 'Shahadnal-akhbara fit-tilfaz', translation: 'We watched the news on television.' },
    },
  {
      word: 'تَعَاوَنَ', transliteration: 'ta\'awana', meaning: 'he cooperated', pos: 'verb',
      synonym: null, antonym: 'تَخَاذَلَ (failed to support)',
      example: { arabic: 'تَعَاوَنَ الطُّلَّابُ فِي المَشْرُوع', transliteration: 'Ta\'awanat-tullabu fil-mashru\'', translation: 'The students cooperated on the project.' },
    },
  {
      word: 'تَقَدَّمَ', transliteration: 'taqaddama', meaning: 'he advanced / progressed', pos: 'verb',
      synonym: null, antonym: 'تَأَخَّرَ (fell behind)',
      example: { arabic: 'تَقَدَّمَ فِي عَمَلِهِ بِسُرْعَة', transliteration: 'Taqaddama fi \'amalihi bisur\'ah', translation: 'He progressed quickly in his work.' },
    },
  {
      word: 'تَأَخَّرَ', transliteration: 'ta\'akhkhara', meaning: 'he was late / fell behind', pos: 'verb',
      synonym: null, antonym: 'تَقَدَّمَ (advanced)',
      example: { arabic: 'تَأَخَّرَ عَنِ المَوْعِدِ قَلِيلًا', transliteration: 'Ta\'akhkhara \'anil-maw\'idi qalilan', translation: 'He was a little late for the appointment.' },
    },
  {
      word: 'تِجَارَة', transliteration: 'tijarah', meaning: 'trade / commerce', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَعْمَلُ وَالِدِي فِي التِّجَارَة', transliteration: 'Ya\'malu walidi fit-tijarah', translation: 'My father works in trade.' },
    },
  {
      word: 'تَحِيَّة', transliteration: 'tahiyyah', meaning: 'greeting', pos: 'noun',
      synonym: 'سَلَام (salam)', antonym: null,
      example: { arabic: 'قَدَّمَ لَنَا تَحِيَّةً حَارَّة', transliteration: 'Qaddama lana tahiyyatan harrah', translation: 'He gave us a warm greeting.' },
    },
  {
      word: 'تَمَّ', transliteration: 'tamma', meaning: 'it was completed', pos: 'verb',
      synonym: 'اِكْتَمَلَ (iktamala)', antonym: null,
      example: { arabic: 'تَمَّ العَمَلُ عَلَى أَكْمَلِ وَجْه', transliteration: 'Tammal-\'amalu \'ala akmali wajh', translation: 'The work was completed perfectly.' },
    },
  {
    word: 'تَاج', transliteration: 'taj', meaning: 'crown', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ المَلِكُ التَّاجَ عَلَى رَأْسِهِ', transliteration: 'Wada\'al-maliku at-taja \'ala ra\'sih', translation: 'The king placed the crown on his head.' },
  },
  {
    word: 'تِمْثَال', transliteration: 'timthal', meaning: 'statue', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَقَامُوا تِمْثَالًا فِي وَسَطِ السَّاحَة', transliteration: 'Aqamu timthalan fi wasatis-sahah', translation: 'They erected a statue in the middle of the square.' },
  },
  {
    word: 'تَارِيخ', transliteration: 'tarikh', meaning: 'history / date', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُحِبُّ دِرَاسَةَ التَّارِيخِ الإِسْلَامِيّ', transliteration: 'Yuhibbu dirasatat-tarikhil-islamiyy', translation: 'He loves studying Islamic history.' },
  },
  {
    word: 'تُرَاث', transliteration: 'turath', meaning: 'heritage', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَجِبُ الحِفَاظُ عَلَى التُّرَاثِ الثَّقَافِيّ', transliteration: 'Yajibul-hifazu \'alat-turathith-thaqafiyy', translation: 'Cultural heritage must be preserved.' },
  },
  {
    word: 'تِقْنِيَّة', transliteration: 'tiqniyyah', meaning: 'technology / technique', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَطَوَّرَتِ التِّقْنِيَّةُ بِسُرْعَةٍ كَبِيرَة', transliteration: 'Tatawwaratit-tiqniyyatu bisur\'atin kabirah', translation: 'Technology has developed very quickly.' },
  },
  {
    word: 'تَوَاضُع', transliteration: 'tawadu\'', meaning: 'humility', pos: 'noun',
    synonym: null, antonym: 'كِبْر (arrogance)',
    example: { arabic: 'التَّوَاضُعُ مِنْ صِفَاتِ الأَنْبِيَاء', transliteration: 'At-tawadu\'u min sifatil-anbiya\'', translation: 'Humility is among the characteristics of the prophets.' },
  },
  {
    word: 'تَفَاؤُل', transliteration: 'tafa\'ul', meaning: 'optimism', pos: 'noun',
    synonym: null, antonym: 'تَشَاؤُم (pessimism)',
    example: { arabic: 'يُوَاجِهُ الصِّعَابَ بِتَفَاؤُل', transliteration: 'Yuwajihus-si\'aba bitafa\'ul', translation: 'He faces difficulties with optimism.' },
  },
  {
    word: 'تَشَاؤُم', transliteration: 'tasha\'um', meaning: 'pessimism', pos: 'noun',
    synonym: null, antonym: 'تَفَاؤُل (optimism)',
    example: { arabic: 'حَاوَلَ التَّخَلُّصَ مِنَ التَّشَاؤُم', transliteration: 'Hawalat-takhallusa minat-tasha\'um', translation: 'He tried to get rid of pessimism.' },
  },
  {
    word: 'تَخَرَّجَ', transliteration: 'takharraja', meaning: 'he graduated', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَخَرَّجَ مِنَ الجَامِعَةِ بِتَفَوُّق', transliteration: 'Takharraja minal-jami\'ati bitafawwuq', translation: 'He graduated from university with distinction.' },
  },
  {
    word: 'تَبَسَّمَ', transliteration: 'tabassama', meaning: 'he smiled slightly', pos: 'verb',
    synonym: 'اِبْتَسَمَ (ibtasama)', antonym: null,
    example: { arabic: 'تَبَسَّمَ عِنْدَمَا رَأَى أَصْدِقَاءَهُ', transliteration: 'Tabassama \'indama ra\'a asdiqa\'ah', translation: 'He smiled when he saw his friends.' },
  },
  {
    word: 'تَبَادَلَ', transliteration: 'tabadala', meaning: 'he exchanged', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَبَادَلَا الهَدَايَا فِي العِيد', transliteration: 'Tabadalal-hadaya fil-\'id', translation: 'They exchanged gifts on Eid.' },
  },
  {
    word: 'تَطَوَّرَ', transliteration: 'tatawwara', meaning: 'it developed / progressed', pos: 'verb',
    synonym: null, antonym: 'تَدَهْوَرَ (deteriorated)',
    example: { arabic: 'تَطَوَّرَتِ المَدِينَةُ فِي السَّنَوَاتِ الأَخِيرَة', transliteration: 'Tatawwaratil-madinatu fis-sanawatil-akhirah', translation: 'The city developed in recent years.' },
  },
  {
    word: 'تَنَاوَلَ', transliteration: 'tanawala', meaning: 'he had (food) / dealt with', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَنَاوَلَ الغَدَاءَ مَعَ عَائِلَتِهِ', transliteration: 'Tanawalal-ghada\'a ma\'a \'a\'ilatih', translation: 'He had lunch with his family.' },
  },
  {
    word: 'تَوَقَّفَ', transliteration: 'tawaqqafa', meaning: 'he stopped', pos: 'verb',
    synonym: null, antonym: 'اِسْتَمَرَّ (continued)',
    example: { arabic: 'تَوَقَّفَ السَّائِقُ عِنْدَ الإِشَارَةِ الحَمْرَاء', transliteration: 'Tawaqqafas-sa\'iqu \'indal-isharatil-hamra\'', translation: 'The driver stopped at the red light.' },
  },
  {
    word: 'تَوَازُن', transliteration: 'tawazun', meaning: 'balance', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَافَظَ عَلَى تَوَازُنِهِ عَلَى الدَّرَّاجَة', transliteration: 'Hafaza \'ala tawazunihi \'alad-darrajah', translation: 'He kept his balance on the bicycle.' },
  },
  {
    word: 'تَرْجَمَة', transliteration: 'tarjamah', meaning: 'translation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَرَأَ تَرْجَمَةَ مَعَانِي القُرْآن', transliteration: 'Qara\'a tarjamata ma\'anil-qur\'an', translation: 'He read the translation of the Qur\'an\'s meanings.' },
  },
  {
    word: 'تَصْمِيم', transliteration: 'tasmim', meaning: 'design', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَعْجَبَنِي تَصْمِيمُ المَبْنَى الجَدِيد', transliteration: 'A\'jabani tasmimul-mabnal-jadid', translation: 'I liked the design of the new building.' },
  },
  {
    word: 'تَعْلِيم', transliteration: 'ta\'lim', meaning: 'education', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'التَّعْلِيمُ حَقٌّ لِكُلِّ طِفْل', transliteration: 'At-ta\'limu haqqun likulli tifl', translation: 'Education is a right for every child.' },
  },
  {
    word: 'تَعَجَّبَ', transliteration: 'ta\'ajjaba', meaning: 'he was amazed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَجَّبَ مِنْ سُرْعَةِ إِنْجَازِه', transliteration: 'Ta\'ajjaba min sur\'ati injazih', translation: 'He was amazed at the speed of his achievement.' },
  },
  {
    word: 'تَفَاعَلَ', transliteration: 'tafa\'ala', meaning: 'he interacted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَفَاعَلَ الطُّلَّابُ مَعَ المُعَلِّمِ بِنَشَاط', transliteration: 'Tafa\'alat-tullabu ma\'al-mu\'allimi binashat', translation: 'The students interacted with the teacher actively.' },
  },
  {
    word: 'تَنَفَّسَ', transliteration: 'tanaffasa', meaning: 'he breathed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'تَنَفَّسَ الهَوَاءَ النَّقِيَّ فِي الجَبَل', transliteration: 'Tanaffasal-hawa\'an-naqiyya fil-jabal', translation: 'He breathed the fresh air in the mountain.' },
  },
  {
    word: 'تَمْر', transliteration: 'tamr', meaning: 'dates (fruit)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُفَضَّلُ الإِفْطَارُ عَلَى التَّمْر', transliteration: 'Yufaddalul-iftaru \'alat-tamr', translation: 'It is preferred to break the fast with dates.' },
  },
  {
    word: 'تُوت', transliteration: 'tut', meaning: 'berries / mulberries', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَمَعْنَا التُّوتَ مِنَ الشَّجَرَة', transliteration: 'Jama\'nat-tuta minash-shajarah', translation: 'We picked the berries from the tree.' },
  },
  {
    word: 'تِنِّين', transliteration: 'tinnin', meaning: 'dragon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَرَأَ قِصَّةً عَنِ التِّنِّينِ الأُسْطُورِيّ', transliteration: 'Qara\'a qissatan \'anit-tinninil-usturiyy', translation: 'He read a story about the legendary dragon.' },
  },
  {
    word: 'تَحْقِيق', transliteration: 'tahqiq', meaning: 'investigation / achievement', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'بَدَأَتِ الشُّرْطَةُ تَحْقِيقًا فِي الحَادِث', transliteration: 'Bada\'atish-shurtatu tahqiqan fil-hadith', translation: 'The police began an investigation into the incident.' },
  },
  {
    word: 'تَوْقِيت', transliteration: 'tawqit', meaning: 'timing', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ تَوْقِيتُ وُصُولِهِ مِثَالِيًّا', transliteration: 'Kana tawqitu wusulihi mithaliyyan', translation: 'The timing of his arrival was ideal.' },
  },
  {
    word: 'تَصْوِير', transliteration: 'taswir', meaning: 'photography / filming', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَهْوَى التَّصْوِيرَ الفُوتُوغْرَافِيّ', transliteration: 'Yahwat-taswiral-futughrafiyy', translation: 'He is passionate about photography.' },
  },
  {
    word: 'تَذَوَّقَ', transliteration: 'tadhawwaqa', meaning: 'he tasted / savored', pos: 'verb',
    synonym: 'ذَاقَ (dhaqa)', antonym: null,
    example: { arabic: 'تَذَوَّقَ الطَّبْقَةَ الجَدِيدَةَ بِإِعْجَاب', transliteration: 'Tadhawwaqat-tabqatal-jadidata bi\'ijab', translation: 'He savored the new dish with admiration.' },
  },
  {
    word: 'تُهْمَة', transliteration: 'tuhmah', meaning: 'accusation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَفَى التُّهْمَةَ المُوَجَّهَةَ إِلَيْهِ', transliteration: 'Nafat-tuhmatal-muwajjahata ilayh', translation: 'He denied the accusation directed at him.' },
  },
  {
    word: 'تِمْسَاح', transliteration: 'timsah', meaning: 'crocodile', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَعِيشُ التِّمْسَاحُ فِي النَّهْر', transliteration: 'Ya\'ishut-timsahu fin-nahr', translation: 'The crocodile lives in the river.' },
  },
  ],

  'ث': [
  {
      word: 'ثَعْلَب', transliteration: 'tha\'lab', meaning: 'fox', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'رَأَيْتُ ثَعْلَبًا فِي الغَابَة', transliteration: 'Ra\'aytu tha\'laban fil-ghabah', translation: 'I saw a fox in the forest.' },
    },
  {
      word: 'ثَقِيل', transliteration: 'thaqil', meaning: 'heavy', pos: 'adjective',
      synonym: null, antonym: 'خَفِيف (light)',
      example: { arabic: 'هٰذَا الصُّنْدُوقُ ثَقِيلٌ جِدًّا', transliteration: 'Hadha as-sunduqu thaqilun jiddan', translation: 'This box is very heavy.' },
    },
  {
      word: 'ثَمَن', transliteration: 'thaman', meaning: 'price', pos: 'noun',
      synonym: 'سِعْر (si\'r)', antonym: null,
      example: { arabic: 'مَا ثَمَنُ هٰذَا الكِتَاب؟', transliteration: 'Ma thamanu hadhal-kitab?', translation: 'What is the price of this book?' },
    },
  {
      word: 'ثَابِت', transliteration: 'thabit', meaning: 'fixed / stable', pos: 'adjective',
      synonym: 'مُسْتَقِرّ (mustaqirr)', antonym: 'مُتَغَيِّر (changing)',
      example: { arabic: 'السُّلَّمُ ثَابِتٌ عَلَى الجِدَار', transliteration: 'As-sullamu thabitun \'alal-jidar', translation: 'The ladder is fixed against the wall.' },
    },
  {
      word: 'ثَلْج', transliteration: 'thalj', meaning: 'snow / ice', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَقَطَ الثَّلْجُ فِي اللَّيْل', transliteration: 'Saqata ath-thalju fil-layl', translation: 'Snow fell during the night.' },
    },
  {
      word: 'ثَانِيَة', transliteration: 'thaniyah', meaning: 'second (unit of time)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِنْتَظِرْ ثَانِيَةً وَاحِدَة', transliteration: 'Intazir thaniyatan wahidah', translation: 'Wait one second.' },
    },
  {
      word: 'ثَرْوَة', transliteration: 'tharwah', meaning: 'wealth', pos: 'noun',
      synonym: 'مَال (mal)', antonym: 'فَقْر (poverty)',
      example: { arabic: 'الصِّحَّةُ خَيْرٌ مِنَ الثَّرْوَة', transliteration: 'As-sihhatu khayrun minath-tharwah', translation: 'Health is better than wealth.' },
    },
  {
      word: 'ثَبَتَ', transliteration: 'thabata', meaning: 'it was proven / confirmed', pos: 'verb',
      synonym: 'تَأَكَّدَ (ta\'akkada)', antonym: null,
      example: { arabic: 'ثَبَتَ أَنَّ الخَبَرَ صَحِيح', transliteration: 'Thabata anna al-khabara sahih', translation: 'It was confirmed that the news is true.' },
    },
  {
      word: 'ثَمِين', transliteration: 'thamin', meaning: 'precious / valuable', pos: 'adjective',
      synonym: 'غَالٍ (ghali)', antonym: 'رَخِيص (cheap)',
      example: { arabic: 'الوَقْتُ شَيْءٌ ثَمِين', transliteration: 'Al-waqtu shay\'un thamin', translation: 'Time is a precious thing.' },
    },
  {
      word: 'ثَمَرَة', transliteration: 'thamarah', meaning: 'fruit (as a result/outcome)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'هٰذَا النَّجَاحُ ثَمَرَةُ الجُهْدِ الطَّوِيل', transliteration: 'Hadhan-najahu thamaratul-juhdit-tawil', translation: 'This success is the fruit of long effort.' },
    },
  {
      word: 'ثُعْبَان', transliteration: 'thu\'ban', meaning: 'snake', pos: 'noun',
      synonym: 'حَيَّة (hayyah)', antonym: null,
      example: { arabic: 'رَأَيْنَا ثُعْبَانًا كَبِيرًا فِي الحَقْل', transliteration: 'Ra\'aynatu thu\'banan kabiran fil-haql', translation: 'We saw a big snake in the field.' },
    },
  {
      word: 'ثَوْب', transliteration: 'thawb', meaning: 'garment / robe', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَى ثَوْبًا جَدِيدًا لِلْعِيد', transliteration: 'Ishtara thawban jadidan lil-\'id', translation: 'He bought a new garment for Eid.' },
    },
  {
      word: 'ثَمَانِيَة', transliteration: 'thamaniyah', meaning: 'eight', pos: 'number',
      synonym: null, antonym: null,
      example: { arabic: 'فِي الصَّفِّ ثَمَانِيَةُ طُلَّاب', transliteration: 'Fis-saffi thamaniyatu tullab', translation: 'There are eight students in the class.' },
    },
  {
      word: 'ثَقَافَة', transliteration: 'thaqafah', meaning: 'culture', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لِكُلِّ بَلَدٍ ثَقَافَتُهُ الخَاصَّة', transliteration: 'Likulli baladin thaqafatuhul-khassah', translation: 'Every country has its own culture.' },
    },
  {
      word: 'ثَرْثَرَ', transliteration: 'tharthara', meaning: 'he chattered / babbled', pos: 'verb',
      synonym: null, antonym: 'صَمَتَ (was silent)',
      example: { arabic: 'ثَرْثَرَ الأَوْلَادُ طَوَالَ الرِّحْلَة', transliteration: 'Tharthara al-awladu tiwalar-rihlah', translation: 'The children chattered throughout the trip.' },
    },
  {
      word: 'ثَابَرَ', transliteration: 'thabara', meaning: 'he persevered', pos: 'verb',
      synonym: 'وَاظَبَ (wazaba)', antonym: 'اِسْتَسْلَمَ (gave up)',
      example: { arabic: 'ثَابَرَ حَتَّى نَجَحَ فِي النِّهَايَة', transliteration: 'Thabara hatta najaha fin-nihayah', translation: 'He persevered until he succeeded in the end.' },
    },
  {
      word: 'ثَغْرَة', transliteration: 'thaghrah', meaning: 'gap / breach', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَجَدُوا ثَغْرَةً فِي الخُطَّة', transliteration: 'Wajadu thaghratan fil-khuttah', translation: 'They found a gap in the plan.' },
    },
  {
      word: 'ثَرِيّ', transliteration: 'thariyy', meaning: 'rich / wealthy', pos: 'adjective',
      synonym: 'غَنِيّ (ghaniyy)', antonym: 'فَقِير (poor)',
      example: { arabic: 'أَصْبَحَ ثَرِيًّا بَعْدَ نَجَاحِ مَشْرُوعِهِ', transliteration: 'Asbaha thariyyan ba\'da najahi mashru\'ih', translation: 'He became rich after his project succeeded.' },
    },
  {
      word: 'ثَانَوِيَّة', transliteration: 'thanawiyyah', meaning: 'secondary (school)', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'أَخِي فِي المَدْرَسَةِ الثَّانَوِيَّة', transliteration: 'Akhi fil-madrasath-thanawiyyah', translation: 'My brother is in secondary school.' },
    },
  {
      word: 'ثُلُث', transliteration: 'thuluth', meaning: 'one third', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَكَلَ ثُلُثَ الكَعْكَة', transliteration: 'Akala thulthal-ka\'kah', translation: 'He ate one third of the cake.' },
    },
  {
    word: 'ثَوْرَة', transliteration: 'thawrah', meaning: 'revolution', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَامَتِ الثَّوْرَةُ ضِدَّ الظُّلْم', transliteration: 'Qamatith-thawratu diddaz-zulm', translation: 'The revolution rose against injustice.' },
  },
  {
    word: 'ثِقَة', transliteration: 'thiqah', meaning: 'trust / confidence', pos: 'noun',
    synonym: null, antonym: 'شَكّ (doubt)',
    example: { arabic: 'يَتَحَدَّثُ بِثِقَةٍ أَمَامَ الجُمْهُور', transliteration: 'Yatahaddathu bithiqatin amamal-jumhur', translation: 'He speaks with confidence in front of the audience.' },
  },
  {
    word: 'ثِقَل', transliteration: 'thiqal', meaning: 'weight / heaviness', pos: 'noun',
    synonym: null, antonym: 'خِفَّة (lightness)',
    example: { arabic: 'شَعَرَ بِثِقَلِ الحَقِيبَةِ عَلَى ظَهْرِهِ', transliteration: 'Sha\'ara bithiqalil-haqibati \'ala zahrih', translation: 'He felt the heaviness of the bag on his back.' },
  },
  {
    word: 'ثِمَار', transliteration: 'thimar', meaning: 'fruits', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'قَطَفَ ثِمَارَ عَمَلِهِ الشَّاقّ', transliteration: 'Qatafa thimara \'amalihish-shaqq', translation: 'He reaped the fruits of his hard work.' },
  },
  {
    word: 'ثَوْرِيّ', transliteration: 'thawriyy', meaning: 'revolutionary', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'قَدَّمَ حَلًّا ثَوْرِيًّا لِلْمُشْكِلَة', transliteration: 'Qaddama hallan thawriyyan lil-mushkilah', translation: 'He presented a revolutionary solution to the problem.' },
  },
  {
    word: 'ثَغْر', transliteration: 'thaghr', meaning: 'frontier / mouth (poetic)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَافَعَ الجُنُودُ عَنْ ثَغْرِ البِلَاد', transliteration: 'Dafa\'al-junudu \'an thaghril-bilad', translation: 'The soldiers defended the frontier of the country.' },
  },
  {
    word: 'ثِنَاء', transliteration: 'thana\'', meaning: 'praise', pos: 'noun',
    synonym: 'مَدْح (madh)', antonym: 'ذَمّ (blame)',
    example: { arabic: 'نَالَ ثِنَاءَ مُعَلِّمِيهِ عَلَى اجْتِهَادِه', transliteration: 'Nala thana\'a mu\'allimihi \'ala ijtihadih', translation: 'He earned his teachers\' praise for his diligence.' },
  },
  {
    word: 'ثَنَى', transliteration: 'thana', meaning: 'he folded / bent', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ثَنَى الوَرَقَةَ إِلَى نِصْفَيْن', transliteration: 'Thanal-waraqata ila nisfayn', translation: 'He folded the paper into two halves.' },
  },
  {
    word: 'ثَلَاثَة', transliteration: 'thalathah', meaning: 'three', pos: 'number',
    synonym: null, antonym: null,
    example: { arabic: 'لَدَيْهِ ثَلَاثَةُ أَوْلَاد', transliteration: 'Ladayhi thalathatu awlad', translation: 'He has three children.' },
  },
  {
    word: 'ثُلَاثِيّ', transliteration: 'thulathiyy', meaning: 'triple / tripartite', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'شَكَّلُوا فَرِيقًا ثُلَاثِيًّا لِلْمُنَافَسَة', transliteration: 'Shakkalu fariqan thulathiyyan lil-munafasah', translation: 'They formed a team of three for the competition.' },
  },
  {
    word: 'ثَرِيد', transliteration: 'tharid', meaning: 'tharid (a traditional bread-and-meat dish)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ذُكِرَ الثَّرِيدُ فِي الحَدِيثِ الشَّرِيف', transliteration: 'Dhukirath-tharidu fil-hadithish-sharif', translation: 'Tharid is mentioned in the noble hadith.' },
  },
  {
    word: 'ثَخِين', transliteration: 'thakhin', meaning: 'thick', pos: 'adjective',
    synonym: null, antonym: 'رَقِيق (thin)',
    example: { arabic: 'اِرْتَدَى مِعْطَفًا ثَخِينًا فِي الشِّتَاء', transliteration: 'Irtada mi\'tafan thakhinan fish-shita\'', translation: 'He wore a thick coat in winter.' },
  },
  {
    word: 'ثَوَاب', transliteration: 'thawab', meaning: 'reward (from Allah)', pos: 'noun',
    synonym: 'أَجْر (ajr)', antonym: 'عِقَاب (punishment)',
    example: { arabic: 'يَرْجُو الثَّوَابَ مِنَ اللَّهِ عَلَى صَدَقَتِهِ', transliteration: 'Yarjuth-thawaba minallahi \'ala sadaqatih', translation: 'He hopes for reward from Allah for his charity.' },
  },
  {
    word: 'ثَبَات', transliteration: 'thabat', meaning: 'steadfastness', pos: 'noun',
    synonym: null, antonym: 'تَذَبْذُب (wavering)',
    example: { arabic: 'دَعَا اللَّهَ بِالثَّبَاتِ عَلَى الحَقّ', transliteration: 'Da\'allaha bith-thabati \'alal-haqq', translation: 'He asked Allah for steadfastness upon the truth.' },
  },
  {
    word: 'ثَقُلَ', transliteration: 'thaqula', meaning: 'it became heavy', pos: 'verb',
    synonym: null, antonym: 'خَفَّ (became light)',
    example: { arabic: 'ثَقُلَتِ الحَقِيبَةُ بَعْدَ الشِّرَاء', transliteration: 'Thaqulatil-haqibatu ba\'dash-shira\'', translation: 'The bag became heavy after the shopping.' },
  },
  {
    word: 'ثَرَى', transliteration: 'thara', meaning: 'soil / moist earth', pos: 'noun',
    synonym: 'تُرَاب (turab)', antonym: null,
    example: { arabic: 'اِرْتَوَى الثَّرَى بَعْدَ المَطَر', transliteration: 'Irtawath-thara ba\'dal-matar', translation: 'The soil was well-watered after the rain.' },
  },
  {
    word: 'عُودُ ثِقَاب', transliteration: '\'udu thiqab', meaning: 'matchstick', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'أَشْعَلَ الشَّمْعَةَ بِعُودِ ثِقَاب', transliteration: 'Ash\'alash-sham\'ata bi\'udi thiqab', translation: 'He lit the candle with a matchstick.' },
  },
  {
    word: 'ثَانٍ', transliteration: 'thanin', meaning: 'second (ordinal)', pos: 'adjective',
    synonym: null, antonym: 'أَوَّل (first)',
    example: { arabic: 'حَصَلَ عَلَى المَرْكَزِ الثَّانِي', transliteration: 'Hasala \'alal-markazith-thani', translation: 'He got second place.' },
  },
  {
    word: 'ثَامِن', transliteration: 'thamin (ordinal)', meaning: 'eighth', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'هُوَ فِي الصَّفِّ الثَّامِن', transliteration: 'Huwa fis-saffith-thamin', translation: 'He is in the eighth grade.' },
  },
  {
    word: 'ثُلُثَان', transliteration: 'thuluthan', meaning: 'two thirds', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَنْجَزَ ثُلُثَيِ المَشْرُوع', transliteration: 'Anjaza thuluthayil-mashru\'', translation: 'He completed two thirds of the project.' },
  },
  {
    word: 'ثَرْثَار', transliteration: 'tharthar', meaning: 'talkative', pos: 'adjective',
    synonym: null, antonym: 'صَمُوت (quiet)',
    example: { arabic: 'كَانَ زَمِيلُهُ ثَرْثَارًا طَوَالَ الرِّحْلَة', transliteration: 'Kana zamiluhu tharthaman tiwalar-rihlah', translation: 'His colleague was talkative throughout the trip.' },
  },
  {
    word: 'ثُرَيَّا', transliteration: 'thurayya', meaning: 'chandelier', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عُلِّقَتِ الثُّرَيَّا فِي وَسَطِ القَاعَة', transliteration: '\'Ulliqatith-thurayya fi wasatil-qa\'ah', translation: 'The chandelier was hung in the middle of the hall.' },
  },
  {
    word: 'ثَعَالِب', transliteration: 'tha\'alib', meaning: 'foxes', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'تَعِيشُ الثَّعَالِبُ فِي الغَابَات', transliteration: 'Ta\'ishuth-tha\'alibu fil-ghabat', translation: 'Foxes live in forests.' },
  },
  {
    word: 'ثُلُوج', transliteration: 'thuluj', meaning: 'snows', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'غَطَّتِ الثُّلُوجُ قِمَّةَ الجَبَل', transliteration: 'Ghattathith-thuluju qimmatal-jabal', translation: 'Snows covered the mountain peak.' },
  },
  {
    word: 'ثَقَّفَ', transliteration: 'thaqqafa', meaning: 'he educated / cultured (someone)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ثَقَّفَ نَفْسَهُ بِالقِرَاءَةِ المُسْتَمِرَّة', transliteration: 'Thaqqafa nafsahu bil-qira\'atil-mustamirrah', translation: 'He educated himself through continuous reading.' },
  },
  {
    word: 'ثَابِر', transliteration: 'thabir', meaning: 'persistent', pos: 'adjective',
    synonym: 'مُثَابِر (muthabir)', antonym: 'مُتَقَاعِس (slacking)',
    example: { arabic: 'كَانَ ثَابِرًا رَغْمَ الصِّعَاب', transliteration: 'Kana thabiran raghmas-si\'ab', translation: 'He was persistent despite the difficulties.' },
  },
  {
    word: 'ثَقِيلَة الدَّم', transliteration: 'thaqilat ad-dam', meaning: 'unpleasant/annoying person (idiom, feminine)', pos: 'expression',
    synonym: null, antonym: 'خَفِيف الدَّم (pleasant person)',
    example: { arabic: 'يَتَجَنَّبُ النَّاسُ الشَّخْصَ ثَقِيلَ الدَّم', transliteration: 'Yatajannabun-nasush-shakhsa thaqilad-dam', translation: 'People avoid the unpleasant person.' },
  },
  {
    word: 'ثَابِتَة', transliteration: 'thabitah', meaning: 'fixed / constant (feminine)', pos: 'adjective',
    synonym: null, antonym: 'مُتَغَيِّرَة (changing)',
    example: { arabic: 'القِيَمُ الأَخْلَاقِيَّةُ ثَابِتَةٌ لَا تَتَغَيَّر', transliteration: 'Al-qiyamul-akhlaqiyyatu thabitatun la tataghayyar', translation: 'Moral values are constant and do not change.' },
  },
  {
    word: 'ثَغْرَتَان', transliteration: 'thaghratan', meaning: 'two gaps', pos: 'noun (dual)',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَدَ ثَغْرَتَيْنِ فِي خِطَّةِ العَمَل', transliteration: 'Wajada thaghratayni fi khittatil-\'amal', translation: 'He found two gaps in the work plan.' },
  },
  {
    word: 'ثِيَاب', transliteration: 'thiyab', meaning: 'clothes', pos: 'noun (plural)',
    synonym: 'مَلَابِس (malabis)', antonym: null,
    example: { arabic: 'غَسَلَتِ الثِّيَابَ صَبَاحًا', transliteration: 'Ghasalatith-thiyaba sabahan', translation: 'She washed the clothes in the morning.' },
  },
  ],

  'ج': [
  {
      word: 'جَمِيل', transliteration: 'jamil', meaning: 'beautiful', pos: 'adjective',
      synonym: 'حَسَن (hasan)', antonym: 'قَبِيح (ugly)',
      example: { arabic: 'المَنْظَرُ جَمِيلٌ جِدًّا', transliteration: 'Al-manzaru jamilun jiddan', translation: 'The view is very beautiful.' },
    },
  {
      word: 'جَلَسَ', transliteration: 'jalasa', meaning: 'he sat', pos: 'verb',
      synonym: null, antonym: 'وَقَفَ (stood)',
      example: { arabic: 'جَلَسَ عَلَى الكُرْسِيّ', transliteration: 'Jalasa \'alal-kursiyy', translation: 'He sat on the chair.' },
    },
  {
      word: 'جَدِيد', transliteration: 'jadid', meaning: 'new', pos: 'adjective',
      synonym: null, antonym: 'قَدِيم (old)',
      example: { arabic: 'اِشْتَرَيْتُ هَاتِفًا جَدِيدًا', transliteration: 'Ishtaraytu hatifan jadidan', translation: 'I bought a new phone.' },
    },
  {
      word: 'جَبَل', transliteration: 'jabal', meaning: 'mountain', pos: 'noun',
      synonym: null, antonym: 'وَادٍ (valley)',
      example: { arabic: 'تَسَلَّقْنَا الجَبَلَ فِي الصَّبَاح', transliteration: 'Tasallaqnal-jabala fis-sabah', translation: 'We climbed the mountain in the morning.' },
    },
  {
      word: 'جَاء', transliteration: 'ja\'a', meaning: 'he came', pos: 'verb',
      synonym: 'أَتَى (ata)', antonym: 'ذَهَبَ (went)',
      example: { arabic: 'جَاءَ صَدِيقِي لِزِيَارَتِي', transliteration: 'Ja\'a sadiqi liziyarati', translation: 'My friend came to visit me.' },
    },
  {
      word: 'جَوْع', transliteration: 'jaw\'', meaning: 'hunger', pos: 'noun',
      synonym: null, antonym: 'شِبَع (fullness)',
      example: { arabic: 'شَعَرْتُ بِالجَوْعِ بَعْدَ المَدْرَسَة', transliteration: 'Sha\'artu bil-jaw\'i ba\'d al-madrasah', translation: 'I felt hunger after school.' },
    },
  {
      word: 'جَرَى', transliteration: 'jara', meaning: 'he ran / it happened', pos: 'verb',
      synonym: 'رَكَضَ (rakada)', antonym: 'مَشَى (walked)',
      example: { arabic: 'جَرَى الوَلَدُ فِي المَلْعَب', transliteration: 'Jaral-waladu fil-mal\'ab', translation: 'The boy ran in the playground.' },
    },
  {
      word: 'جَامِعَة', transliteration: 'jami\'ah', meaning: 'university', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَخِي طَالِبٌ فِي الجَامِعَة', transliteration: 'Akhi talibun fil-jami\'ah', translation: 'My brother is a student at the university.' },
    },
  {
      word: 'جَاهِز', transliteration: 'jahiz', meaning: 'ready', pos: 'adjective',
      synonym: 'مُسْتَعِدّ (musta\'idd)', antonym: null,
      example: { arabic: 'الطَّعَامُ جَاهِزٌ الآن', transliteration: 'At-ta\'amu jahizun al-an', translation: 'The food is ready now.' },
    },
  {
      word: 'جَمَعَ', transliteration: 'jama\'a', meaning: 'he collected / gathered', pos: 'verb',
      synonym: null, antonym: 'فَرَّقَ (scattered)',
      example: { arabic: 'جَمَعَ الأَوْلَادُ الكُرَاتِ بَعْدَ اللَّعِب', transliteration: 'Jama\'al-awladul-kurati ba\'dal-la\'ib', translation: 'The children collected the balls after playing.' },
    },
  {
      word: 'جَاذِبِيَّة', transliteration: 'jadhibiyyah', meaning: 'attractiveness / gravity', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لِهٰذَا المَكَانِ جَاذِبِيَّةٌ خَاصَّة', transliteration: 'Lihadhal-makani jadhibiyyatun khassah', translation: 'This place has a special attractiveness.' },
    },
  {
      word: 'جَنَاح', transliteration: 'janah', meaning: 'wing', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لِلطَّائِرِ جَنَاحَانِ قَوِيَّان', transliteration: 'Littairi janahani qawiyyan', translation: 'The bird has two strong wings.' },
    },
  {
      word: 'جَرِيدَة', transliteration: 'jaridah', meaning: 'newspaper', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَرَأَ أَبِي الجَرِيدَةَ صَبَاحًا', transliteration: 'Qara\'a abil-jaridata sabahan', translation: 'My father read the newspaper in the morning.' },
    },
  {
      word: 'جَاف', transliteration: 'jaff', meaning: 'dry', pos: 'adjective',
      synonym: null, antonym: 'رَطْب (wet/humid)',
      example: { arabic: 'الجَوُّ جَافٌّ فِي الصَّحْرَاء', transliteration: 'Al-jawwu jaffun fis-sahra\'', translation: 'The weather is dry in the desert.' },
    },
  {
      word: 'جِوَار', transliteration: 'jiwar', meaning: 'neighborhood / vicinity', pos: 'noun',
      synonym: 'حَيّ (hayy)', antonym: null,
      example: { arabic: 'يَسْكُنُ صَدِيقِي فِي الجِوَار', transliteration: 'Yaskunu sadiqi fil-jiwar', translation: 'My friend lives in the neighborhood.' },
    },
  {
      word: 'جَزَاء', transliteration: 'jaza\'', meaning: 'reward / recompense', pos: 'noun',
      synonym: 'مُكَافَأَة (mukafa\'ah)', antonym: 'عِقَاب (punishment)',
      example: { arabic: 'الصَّبْرُ لَهُ جَزَاءٌ عَظِيم', transliteration: 'As-sabru lahu jaza\'un \'azim', translation: 'Patience has a great reward.' },
    },
  {
      word: 'جَبَان', transliteration: 'jaban', meaning: 'coward', pos: 'noun / adjective',
      synonym: null, antonym: 'شُجَاع (brave)',
      example: { arabic: 'لَمْ يَكُنْ جَبَانًا فِي المَعْرَكَة', transliteration: 'Lam yakun jabanan fil-ma\'rakah', translation: 'He was not a coward in the battle.' },
    },
  {
      word: 'جَوْهَر', transliteration: 'jawhar', meaning: 'essence / jewel', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الصِّدْقُ جَوْهَرُ الأَخْلَاق', transliteration: 'As-sidqu jawharul-akhlaq', translation: 'Honesty is the essence of good character.' },
    },
  {
      word: 'جَوَاب', transliteration: 'jawab', meaning: 'answer', pos: 'noun',
      synonym: 'إِجَابَة (ijabah)', antonym: 'سُؤَال (question)',
      example: { arabic: 'كَتَبَ جَوَابًا صَحِيحًا', transliteration: 'Kataba jawaban sahihan', translation: 'He wrote a correct answer.' },
    },
  {
      word: 'جُهْد', transliteration: 'juhd', meaning: 'effort', pos: 'noun',
      synonym: 'مَجْهُود (majhud)', antonym: 'كَسَل (laziness)',
      example: { arabic: 'بَذَلَ جُهْدًا كَبِيرًا فِي دِرَاسَتِهِ', transliteration: 'Badhala juhdan kabiran fi dirasatih', translation: 'He put in great effort in his studies.' },
    },
  {
    word: 'جَنَّة', transliteration: 'jannah', meaning: 'paradise', pos: 'noun',
    synonym: null, antonym: 'جَحِيم (hellfire)',
    example: { arabic: 'الجَنَّةُ دَارُ النَّعِيمِ الأَبَدِيّ', transliteration: 'Al-jannatu darun-na\'imil-abadiyy', translation: 'Paradise is the abode of eternal bliss.' },
  },
  {
    word: 'جَحِيم', transliteration: 'jahim', meaning: 'hellfire', pos: 'noun',
    synonym: 'نَار (nar)', antonym: 'جَنَّة (paradise)',
    example: { arabic: 'نَعُوذُ بِاللَّهِ مِنَ الجَحِيم', transliteration: 'Na\'udhu billahi minal-jahim', translation: 'We seek refuge in Allah from hellfire.' },
  },
  {
    word: 'جَيْش', transliteration: 'jaysh', meaning: 'army', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَافَعَ الجَيْشُ عَنِ الوَطَن', transliteration: 'Dafa\'al-jayshu \'anil-watan', translation: 'The army defended the homeland.' },
  },
  {
    word: 'جُنْدِيّ', transliteration: 'jundiyy', meaning: 'soldier', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خَدَمَ جُنْدِيًّا لِمُدَّةِ عَشْرِ سَنَوَات', transliteration: 'Khadama jundiyyan limuddati \'ashri sanawat', translation: 'He served as a soldier for ten years.' },
  },
  {
    word: 'جَزِيرَة', transliteration: 'jazirah', meaning: 'island', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زُرْنَا جَزِيرَةً جَمِيلَةً فِي البَحْر', transliteration: 'Zurna jaziratan jamilatan fil-bahr', translation: 'We visited a beautiful island in the sea.' },
  },
  {
    word: 'جِسْر', transliteration: 'jisr', meaning: 'bridge', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَبَرْنَا الجِسْرَ إِلَى الضَّفَّةِ الأُخْرَى', transliteration: '\'Abarnal-jisra ilad-daffatil-ukhra', translation: 'We crossed the bridge to the other bank.' },
  },
  {
    word: 'جِدَار', transliteration: 'jidar', meaning: 'wall', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَلَّقَ الصُّورَةَ عَلَى الجِدَار', transliteration: '\'Allaqas-surata \'alal-jidar', translation: 'He hung the picture on the wall.' },
  },
  {
    word: 'جَرْح', transliteration: 'jarh', meaning: 'wound', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ضَمَّدَ الطَّبِيبُ الجَرْحَ بِعِنَايَة', transliteration: 'Dammadat-tabibul-jarha bi\'inayah', translation: 'The doctor dressed the wound carefully.' },
  },
  {
    word: 'جِرَاحَة', transliteration: 'jirahah', meaning: 'surgery', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَجْرَى لَهُ الطَّبِيبُ جِرَاحَةً ناجِحَة', transliteration: 'Ajra lahut-tabibu jirahatan najihah', translation: 'The doctor performed a successful surgery on him.' },
  },
  {
    word: 'جَرَّاح', transliteration: 'jarrah', meaning: 'surgeon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الجَرَّاحُ مَاهِرٌ فِي عَمَلِهِ', transliteration: 'Al-jarrahu mahirun fi \'amalih', translation: 'The surgeon is skilled at his work.' },
  },
  {
    word: 'جِلْد', transliteration: 'jild', meaning: 'skin / leather', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صُنِعَتِ الحَقِيبَةُ مِنَ الجِلْدِ الطَّبِيعِيّ', transliteration: 'Suni\'atil-haqibatu minal-jildit-tabi\'iyy', translation: 'The bag was made from genuine leather.' },
  },
  {
    word: 'جَمَال', transliteration: 'jamal', meaning: 'beauty', pos: 'noun',
    synonym: 'حُسْن (husn)', antonym: 'قُبْح (ugliness)',
    example: { arabic: 'انْبَهَرَ بِجَمَالِ الطَّبِيعَة', transliteration: 'Inbahara bijamalit-tabi\'ah', translation: 'He was amazed by the beauty of nature.' },
  },
  {
    word: 'جُمْهُور', transliteration: 'jumhur', meaning: 'audience / crowd', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَفَّقَ الجُمْهُورُ بِحَرَارَة', transliteration: 'Saffaqal-jumhuru biharah', translation: 'The audience applauded warmly.' },
  },
  {
    word: 'جُمْهُورِيَّة', transliteration: 'jumhuriyyah', meaning: 'republic', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مِصْرُ جُمْهُورِيَّةٌ عَرَبِيَّة', transliteration: 'Misru jumhuriyyatun \'arabiyyah', translation: 'Egypt is an Arab republic.' },
  },
  {
    word: 'جِهَاد', transliteration: 'jihad', meaning: 'struggle / striving', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَعْظَمُ الجِهَادِ مُجَاهَدَةُ النَّفْس', transliteration: 'A\'zamul-jihadi mujahadatun-nafs', translation: 'The greatest struggle is the struggle against the self.' },
  },
  {
    word: 'جَهْل', transliteration: 'jahl', meaning: 'ignorance', pos: 'noun',
    synonym: null, antonym: 'عِلْم (knowledge)',
    example: { arabic: 'الجَهْلُ عَدُوُّ التَّقَدُّم', transliteration: 'Al-jahlu \'aduwwut-taqaddum', translation: 'Ignorance is the enemy of progress.' },
  },
  {
    word: 'جَاهِل', transliteration: 'jahil', meaning: 'ignorant person', pos: 'noun / adjective',
    synonym: null, antonym: 'عَالِم (knowledgeable person)',
    example: { arabic: 'لَا تُجَادِلِ الجَاهِلَ فَتُتْعِبَ نَفْسَك', transliteration: 'La tujadilil-jahila fatut\'iba nafsak', translation: 'Do not argue with the ignorant person, or you will exhaust yourself.' },
  },
  {
    word: 'جَوَّال', transliteration: 'jawwal', meaning: 'mobile phone', pos: 'noun',
    synonym: 'هَاتِف (hatif)', antonym: null,
    example: { arabic: 'نَسِيَ جَوَّالَهُ فِي البَيْت', transliteration: 'Nasiya jawwalahu fil-bayt', translation: 'He forgot his mobile phone at home.' },
  },
  {
    word: 'جَذْر', transliteration: 'jadhr', meaning: 'root', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعُودُ جُذُورُ الشَّجَرَةِ عَمِيقًا فِي الأَرْض', transliteration: 'Ta\'udu judhurush-shajarati \'amiqan fil-ard', translation: 'The roots of the tree go deep into the earth.' },
  },
  {
    word: 'جَرَّبَ', transliteration: 'jarraba', meaning: 'he tried / tested', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'جَرَّبَ الطَّعَامَ قَبْلَ تَقْدِيمِهِ لِلضُّيُوف', transliteration: 'Jarrabat-ta\'ama qabla taqdimihi liddyuf', translation: 'He tried the food before serving it to the guests.' },
  },
  {
    word: 'جَلَبَ', transliteration: 'jalaba', meaning: 'he brought', pos: 'verb',
    synonym: 'أَحْضَرَ (ahdara)', antonym: 'أَخَذَ (took away)',
    example: { arabic: 'جَلَبَ لَهُ هَدِيَّةً مِنَ السَّفَر', transliteration: 'Jalaba lahu hadiyyatan minas-safar', translation: 'He brought him a gift from the trip.' },
  },
  {
    word: 'جَمَاعَة', transliteration: 'jama\'ah', meaning: 'group / congregation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَلَّى المُسْلِمُونَ صَلَاةَ الجَمَاعَة', transliteration: 'Sallal-muslimuna salatal-jama\'ah', translation: 'The Muslims prayed the congregational prayer.' },
  },
  {
    word: 'جِذْع', transliteration: 'jidh\'', meaning: 'trunk (of a tree)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا حَوْلَ جِذْعِ الشَّجَرَة', transliteration: 'Jalasu hawla jidh\'ish-shajarah', translation: 'They sat around the trunk of the tree.' },
  },
  {
    word: 'جَانِب', transliteration: 'janib', meaning: 'side', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَقَفَ إِلَى جَانِبِ صَدِيقِهِ فِي المِحْنَة', transliteration: 'Waqafa ila janibi sadiqihi fil-mihnah', translation: 'He stood by his friend\'s side during hardship.' },
  },
  {
    word: 'جَوَازُ سَفَر', transliteration: 'jawaz safar', meaning: 'passport', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'تَأَكَّدْ مِنْ صَلَاحِيَّةِ جَوَازِ السَّفَر', transliteration: 'Ta\'akkad min salahiyyati jawazis-safar', translation: 'Make sure the passport is valid.' },
  },
  {
    word: 'جِرْو', transliteration: 'jirw', meaning: 'puppy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَبَنَّى جِرْوًا صَغِيرًا مِنَ المَلْجَأ', transliteration: 'Tabanna jirwan saghiran minal-malja\'', translation: 'He adopted a small puppy from the shelter.' },
  },
  {
    word: 'جَزَرَة', transliteration: 'jazarah', meaning: 'carrot', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُحِبُّ الأَرْنَبُ أَكْلَ الجَزَر', transliteration: 'Yuhibbul-arnabu aklal-jazar', translation: 'The rabbit loves eating carrots.' },
  },
  {
    word: 'جِلْبَاب', transliteration: 'jilbab', meaning: 'a loose outer garment (jilbab)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَبِسَتْ جِلْبَابًا فَضْفَاضًا', transliteration: 'Labisat jilbaban fadfadan', translation: 'She wore a loose jilbab.' },
  },
  {
    word: 'جَبِين', transliteration: 'jabin', meaning: 'forehead', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَبَّلَ الأَبُ جَبِينَ ابْنِهِ', transliteration: 'Qabbalal-abu jabina ibnih', translation: 'The father kissed his son\'s forehead.' },
  },
  {
    word: 'جَرَس', transliteration: 'jaras', meaning: 'bell', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَقَّ جَرَسُ المَدْرَسَةِ مُعْلِنًا الِاسْتِرَاحَة', transliteration: 'Daqqa jarasul-madrasati mu\'linal-istirahah', translation: 'The school bell rang, announcing recess.' },
  },
  ],

  'ح': [
  {
      word: 'حَبَّ', transliteration: 'habba', meaning: 'he loved', pos: 'verb',
      synonym: 'أَحَبَّ (ahabba)', antonym: 'كَرِهَ (hated)',
      example: { arabic: 'حَبَّ القِرَاءَةَ مُنْذُ صِغَرِهِ', transliteration: 'Habbal-qira\'ata mundhu sigharih', translation: 'He loved reading since he was young.' },
    },
  {
      word: 'حَارّ', transliteration: 'harr', meaning: 'hot', pos: 'adjective',
      synonym: null, antonym: 'بَارِد (cold)',
      example: { arabic: 'الشَّايُ حَارٌّ جِدًّا', transliteration: 'Ash-shayu harrun jiddan', translation: 'The tea is very hot.' },
    },
  {
      word: 'حَقِيبَة', transliteration: 'haqibah', meaning: 'bag / suitcase', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَضَعَ كُتُبَهُ فِي الحَقِيبَة', transliteration: 'Wada\'a kutubahu fil-haqibah', translation: 'He put his books in the bag.' },
    },
  {
      word: 'حَدِيقَة', transliteration: 'hadiqah', meaning: 'garden', pos: 'noun',
      synonym: 'بُسْتَان (bustan)', antonym: null,
      example: { arabic: 'يَلْعَبُ الأَطْفَالُ فِي الحَدِيقَة', transliteration: 'Yal\'abul-atfalu fil-hadiqah', translation: 'The children play in the garden.' },
    },
  {
      word: 'حَزِينَ', transliteration: 'hazin', meaning: 'sad', pos: 'adjective',
      synonym: null, antonym: 'سَعِيد (happy)',
      example: { arabic: 'بَدَا حَزِينًا بَعْدَ الخَبَر', transliteration: 'Bada hazinan ba\'dal-khabar', translation: 'He seemed sad after the news.' },
    },
  {
      word: 'حَقّ', transliteration: 'haqq', meaning: 'right / truth', pos: 'noun',
      synonym: 'صِدْق (sidq)', antonym: 'بَاطِل (falsehood)',
      example: { arabic: 'لِكُلِّ إِنْسَانٍ حَقٌّ فِي التَّعْلِيم', transliteration: 'Likulli insanin haqqun fit-ta\'lim', translation: 'Every person has a right to education.' },
    },
  {
      word: 'حَلِيب', transliteration: 'halib', meaning: 'milk', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَشْرَبُ الحَلِيبَ كُلَّ صَبَاح', transliteration: 'Ashrabul-haliba kulla sabah', translation: 'I drink milk every morning.' },
    },
  {
      word: 'حَاوَلَ', transliteration: 'hawala', meaning: 'he tried / attempted', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'حَاوَلَ حَلَّ المَسْأَلَةِ عِدَّةَ مَرَّات', transliteration: 'Hawala halla al-mas\'alati \'iddata marrat', translation: 'He tried to solve the problem several times.' },
    },
  {
      word: 'حَافِلَة', transliteration: 'hafilah', meaning: 'bus', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'رَكِبْتُ الحَافِلَةَ إِلَى المَدْرَسَة', transliteration: 'Rakibtul-hafilata ilal-madrasah', translation: 'I rode the bus to school.' },
    },
  {
      word: 'حَيَاة', transliteration: 'hayah', meaning: 'life', pos: 'noun',
      synonym: null, antonym: 'مَوْت (death)',
      example: { arabic: 'الحَيَاةُ مَلِيئَةٌ بِالفُرَص', transliteration: 'Al-hayatu mali\'atun bil-furas', translation: 'Life is full of opportunities.' },
    },
  {
      word: 'حَزَنَ', transliteration: 'hazana', meaning: 'he grieved / was sad', pos: 'verb',
      synonym: null, antonym: 'فَرِحَ (was happy)',
      example: { arabic: 'حَزَنَ عَلَى فِرَاقِ صَدِيقِهِ', transliteration: 'Hazana \'ala firaqi sadiqih', translation: 'He grieved over parting from his friend.' },
    },
  {
      word: 'حَفَظَ', transliteration: 'hafiza', meaning: 'he memorized / preserved', pos: 'verb',
      synonym: null, antonym: 'نَسِيَ (forgot)',
      example: { arabic: 'حَفَظَ سُورَةً جَدِيدَةً مِنَ القُرْآن', transliteration: 'Hafiza suratan jadidatan minal-qur\'an', translation: 'He memorized a new surah from the Qur\'an.' },
    },
  {
      word: 'حَرَّر', transliteration: 'harrara', meaning: 'he freed / edited', pos: 'verb',
      synonym: null, antonym: 'قَيَّدَ (restricted)',
      example: { arabic: 'حَرَّرَ الأَسِيرَ مِنَ السِّجْن', transliteration: 'Harraral-asira minas-sijn', translation: 'He freed the prisoner from jail.' },
    },
  {
      word: 'حِصَان', transliteration: 'hisan', meaning: 'horse', pos: 'noun',
      synonym: 'فَرَس (faras)', antonym: null,
      example: { arabic: 'يَرْكَبُ الفَلَّاحُ الحِصَانَ يَوْمِيًّا', transliteration: 'Yarkabul-fallahul-hisana yawmiyyan', translation: 'The farmer rides the horse daily.' },
    },
  {
      word: 'حَضَرَ', transliteration: 'hadara', meaning: 'he attended / came', pos: 'verb',
      synonym: null, antonym: 'غَابَ (was absent)',
      example: { arabic: 'حَضَرَ الِاجْتِمَاعَ فِي الوَقْتِ المُحَدَّد', transliteration: 'Hadaral-ijtima\'a fil-waqt al-muhaddad', translation: 'He attended the meeting on time.' },
    },
  {
      word: 'حَكِيم', transliteration: 'hakim', meaning: 'wise', pos: 'adjective',
      synonym: 'عَاقِل (aqil)', antonym: 'أَحْمَق (foolish)',
      example: { arabic: 'كَانَ الشَّيْخُ حَكِيمًا فِي قَرَارَاتِهِ', transliteration: 'Kanash-shaykhu hakiman fi qararatih', translation: 'The elder was wise in his decisions.' },
    },
  {
      word: 'حَقِير', transliteration: 'haqir', meaning: 'contemptible / lowly', pos: 'adjective',
      synonym: null, antonym: 'عَظِيم (great)',
      example: { arabic: 'لَا تَحْتَقِرْ أَحَدًا وَلَوْ كَانَ حَقِيرًا فِي نَظَرِك', transliteration: 'La tahtaqir ahadan wa law kana haqiran fi nazarik', translation: 'Do not despise anyone even if they seem lowly to you.' },
    },
  {
      word: 'حَبْل', transliteration: 'habl', meaning: 'rope', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'رَبَطَ الحَبْلَ حَوْلَ الصُّنْدُوق', transliteration: 'Rabatal-habla hawlas-sunduq', translation: 'He tied the rope around the box.' },
    },
  {
      word: 'حِمَايَة', transliteration: 'himayah', meaning: 'protection', pos: 'noun',
      synonym: 'حِفْظ (hifz)', antonym: null,
      example: { arabic: 'الأُمُّ فِي حِمَايَةِ أَطْفَالِهَا دَائِمًا', transliteration: 'Al-ummu fi himayati atfaliha da\'iman', translation: 'The mother is always protective of her children.' },
    },
  {
      word: 'حُلْم', transliteration: 'hulm', meaning: 'dream', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'حُلْمُهُ أَنْ يُصْبِحَ طَبِيبًا', transliteration: 'Hulmuhu an yusbiha tabiban', translation: 'His dream is to become a doctor.' },
    },
  {
    word: 'حَرْب', transliteration: 'harb', meaning: 'war', pos: 'noun',
    synonym: null, antonym: 'سَلَام (peace)',
    example: { arabic: 'دَمَّرَتِ الحَرْبُ المَدِينَةَ بِالكَامِل', transliteration: 'Dammaratil-harbul-madinata bil-kamil', translation: 'The war destroyed the city completely.' },
  },
  {
    word: 'حُبّ', transliteration: 'hubb', meaning: 'love', pos: 'noun',
    synonym: null, antonym: 'كُرْه (hatred)',
    example: { arabic: 'حُبُّ الوَطَنِ غَرِيزَةٌ فِطْرِيَّة', transliteration: 'Hubbul-watani gharizatun fitriyyah', translation: 'Love of the homeland is an innate instinct.' },
  },
  {
    word: 'حَرَارَة', transliteration: 'hararah', meaning: 'heat / temperature', pos: 'noun',
    synonym: null, antonym: 'بُرُودَة (coldness)',
    example: { arabic: 'اِرْتَفَعَتْ دَرَجَةُ الحَرَارَةِ اليَوْم', transliteration: 'Irtafa\'at darajatul-hararati al-yawm', translation: 'The temperature rose today.' },
  },
  {
    word: 'حِسَاب', transliteration: 'hisab', meaning: 'calculation / account', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كُلُّ إِنْسَانٍ سَيُحَاسَبُ عَلَى أَعْمَالِهِ', transliteration: 'Kullu insanin sayuhasabu \'ala a\'malih', translation: 'Every person will be held to account for their deeds.' },
  },
  {
    word: 'حَاسُوب', transliteration: 'hasub', meaning: 'computer', pos: 'noun',
    synonym: 'كَمْبِيُوتَر (kambiyutar)', antonym: null,
    example: { arabic: 'يَسْتَخْدِمُ الحَاسُوبَ فِي عَمَلِهِ', transliteration: 'Yastakhdimul-hasuba fi \'amalih', translation: 'He uses the computer in his work.' },
  },
  {
    word: 'حَافِظ', transliteration: 'hafiz', meaning: 'one who has memorized (the Qur\'an)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'هُوَ حَافِظٌ لِكِتَابِ اللَّه', transliteration: 'Huwa hafizun likitabillah', translation: 'He is a memorizer of the Book of Allah.' },
  },
  {
    word: 'حِفْظ', transliteration: 'hifz', meaning: 'memorization / preservation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'بَدَأَ حِفْظَ القُرْآنِ مُنْذُ الصِّغَر', transliteration: 'Bada\'a hifzal-qur\'ani mundhus-sighar', translation: 'He began memorizing the Qur\'an since childhood.' },
  },
  {
    word: 'حَقِيقَة', transliteration: 'haqiqah', meaning: 'truth / reality', pos: 'noun',
    synonym: null, antonym: 'وَهْم (illusion)',
    example: { arabic: 'كَشَفَ الحَقِيقَةَ بَعْدَ سَنَوَات', transliteration: 'Kashafal-haqiqata ba\'da sanawat', translation: 'He revealed the truth after years.' },
  },
  {
    word: 'حَقِيقِيّ', transliteration: 'haqiqiyy', meaning: 'real', pos: 'adjective',
    synonym: null, antonym: 'وَهْمِيّ (imaginary)',
    example: { arabic: 'هٰذِهِ قِصَّةٌ حَقِيقِيَّة', transliteration: 'Hadhihi qissatun haqiqiyyah', translation: 'This is a real story.' },
  },
  {
    word: 'حِكَايَة', transliteration: 'hikayah', meaning: 'tale / narrative', pos: 'noun',
    synonym: 'قِصَّة (qissah)', antonym: null,
    example: { arabic: 'حَكَتِ الجَدَّةُ حِكَايَةً قَبْلَ النَّوْم', transliteration: 'Hakatil-jaddatu hikayatan qablan-nawm', translation: 'The grandmother told a tale before sleep.' },
  },
  {
    word: 'حَكَمَ', transliteration: 'hakama', meaning: 'he judged / ruled', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'حَكَمَ القَاضِي بِالعَدْل', transliteration: 'Hakamal-qadi bil-\'adl', translation: 'The judge ruled with justice.' },
  },
  {
    word: 'حُكْم', transliteration: 'hukm', meaning: 'ruling / judgment', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَصْدَرَ القَاضِي حُكْمَهُ النِّهَائِيّ', transliteration: 'Asdaral-qadi hukmahun-niha\'iyy', translation: 'The judge issued his final ruling.' },
  },
  {
    word: 'حَاكِم', transliteration: 'hakim', meaning: 'ruler', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الحَاكِمُ العَادِلُ مَحْبُوبٌ عِنْدَ شَعْبِهِ', transliteration: 'Al-hakimul-\'adilu mahbubun \'inda sha\'bih', translation: 'The just ruler is beloved by his people.' },
  },
  {
    word: 'حَادِث', transliteration: 'hadith (event)', meaning: 'accident', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَقَعَ حَادِثٌ عَلَى الطَّرِيقِ السَّرِيع', transliteration: 'Waqa\'a hadithun \'alat-tariqis-sari\'', translation: 'An accident occurred on the highway.' },
  },
  {
    word: 'حَادِثَة', transliteration: 'hadithah', meaning: 'incident / event', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَوَى حَادِثَةً طَرِيفَةً حَصَلَتْ لَهُ', transliteration: 'Rawa hadithatan tarifatan hasalat lah', translation: 'He recounted a funny incident that happened to him.' },
  },
  {
    word: 'حَرَكَة', transliteration: 'harakah', meaning: 'movement', pos: 'noun',
    synonym: null, antonym: 'سُكُون (stillness)',
    example: { arabic: 'لَاحَظَ حَرَكَةً غَرِيبَةً فِي الظَّلَام', transliteration: 'Lahaza harakatan gharibatan fiz-zalam', translation: 'He noticed strange movement in the dark.' },
  },
  {
    word: 'حُرِّيَّة', transliteration: 'hurriyyah', meaning: 'freedom', pos: 'noun',
    synonym: null, antonym: 'عُبُودِيَّة (servitude)',
    example: { arabic: 'الحُرِّيَّةُ حَقٌّ مِنْ حُقُوقِ الإِنْسَان', transliteration: 'Al-hurriyyatu haqqun min huquqil-insan', translation: 'Freedom is one of the rights of a human being.' },
  },
  {
    word: 'حُرّ', transliteration: 'hurr', meaning: 'free (person)', pos: 'adjective',
    synonym: null, antonym: 'عَبْد (slave)',
    example: { arabic: 'وُلِدَ الإِنْسَانُ حُرًّا', transliteration: 'Wulidal-insanu hurran', translation: 'A human being is born free.' },
  },
  {
    word: 'حَسَنَة', transliteration: 'hasanah', meaning: 'good deed', pos: 'noun',
    synonym: null, antonym: 'سَيِّئَة (bad deed)',
    example: { arabic: 'الحَسَنَةُ بِعَشْرِ أَمْثَالِهَا', transliteration: 'Al-hasanatu bi\'ashri amthaliha', translation: 'A good deed is rewarded tenfold.' },
  },
  {
    word: 'حَسَد', transliteration: 'hasad', meaning: 'envy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الحَسَدُ يَأْكُلُ الحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الحَطَب', transliteration: 'Al-hasadu ya\'kulul-hasanati kama ta\'kulun-narul-hatab', translation: 'Envy consumes good deeds as fire consumes firewood.' },
  },
  {
    word: 'حَاسِد', transliteration: 'hasid', meaning: 'envier', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَوَّذْ مِنْ شَرِّ الحَاسِدِ إِذَا حَسَد', transliteration: 'Ta\'awwadh min sharril-hasidi idha hasad', translation: 'Seek refuge from the evil of the envier when he envies.' },
  },
  {
    word: 'حَشَرَة', transliteration: 'hasharah', meaning: 'insect', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَدَ حَشَرَةً صَغِيرَةً عَلَى الوَرَقَة', transliteration: 'Wajada hasharatan saghiratan \'alal-waraqah', translation: 'He found a small insect on the leaf.' },
  },
  {
    word: 'حَظّ', transliteration: 'hazz', meaning: 'luck / fortune', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَالَفَهُ الحَظُّ فِي المُسَابَقَة', transliteration: 'Halafahul-hazzu fil-musabaqah', translation: 'Luck was on his side in the competition.' },
  },
  {
    word: 'حَفْلَة', transliteration: 'haflah', meaning: 'party', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أُقِيمَتْ حَفْلَةٌ بِمُنَاسَبَةِ التَّخَرُّج', transliteration: 'Uqimat haflatun bimunasabatit-takharruj', translation: 'A party was held for the graduation.' },
  },
  {
    word: 'حَقْل', transliteration: 'haql', meaning: 'field', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِمْتَلَأَ الحَقْلُ بِالقَمْحِ الذَّهَبِيّ', transliteration: 'Imtala\'al-haqlu bil-qamhidh-dhahabiyy', translation: 'The field was filled with golden wheat.' },
  },
  {
    word: 'حِمَار', transliteration: 'himar', meaning: 'donkey', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَمَلَ الحِمَارُ الأَمْتِعَةَ الثَّقِيلَة', transliteration: 'Hamalal-himarul-amti\'atath-thaqilah', translation: 'The donkey carried the heavy luggage.' },
  },
  {
    word: 'حَنِين', transliteration: 'hanin', meaning: 'nostalgia / longing', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَعَرَ بِالحَنِينِ إِلَى وَطَنِهِ', transliteration: 'Sha\'ara bil-hanini ila watanih', translation: 'He felt a longing for his homeland.' },
  },
  {
    word: 'حَوْل', transliteration: 'hawl', meaning: 'around', pos: 'preposition',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا حَوْلَ المَائِدَة', transliteration: 'Jalasu hawlal-ma\'idah', translation: 'They sat around the table.' },
  },
  {
    word: 'حَيَوَان', transliteration: 'hayawan', meaning: 'animal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زُرْنَا حَدِيقَةَ الحَيَوَان', transliteration: 'Zurna hadiqatal-hayawan', translation: 'We visited the zoo (animal garden).' },
  },
  {
    word: 'حِيلَة', transliteration: 'hilah', meaning: 'trick / scheme', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ حِيلَةً ذَكِيَّةً لِلْهُرُوب', transliteration: 'Istakhdama hilatan dhakiyyatan lil-hurub', translation: 'He used a clever trick to escape.' },
  },
  ],

  'خ': [
  {
      word: 'خُبْز', transliteration: 'khubz', meaning: 'bread', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَيْنَا خُبْزًا طَازَجًا', transliteration: 'Ishtaraynha khubzan tazajan', translation: 'We bought fresh bread.' },
    },
  {
      word: 'خَرَجَ', transliteration: 'kharaja', meaning: 'he went out', pos: 'verb',
      synonym: null, antonym: 'دَخَلَ (entered)',
      example: { arabic: 'خَرَجَ مِنَ البَيْتِ بَاكِرًا', transliteration: 'Kharaja minal-bayti bakiran', translation: 'He went out of the house early.' },
    },
  {
      word: 'خَفِيف', transliteration: 'khafif', meaning: 'light (weight)', pos: 'adjective',
      synonym: null, antonym: 'ثَقِيل (heavy)',
      example: { arabic: 'هٰذِهِ الحَقِيبَةُ خَفِيفَة', transliteration: 'Hadhihi al-haqibatu khafifah', translation: 'This bag is light.' },
    },
  {
      word: 'خَطَأ', transliteration: 'khata\'', meaning: 'mistake / error', pos: 'noun',
      synonym: 'غَلَط (ghalat)', antonym: 'صَوَاب (correctness)',
      example: { arabic: 'اِعْتَرَفَ بِخَطَئِهِ فَوْرًا', transliteration: 'I\'tarafa bikhata\'ihi fawran', translation: 'He admitted his mistake immediately.' },
    },
  {
      word: 'خَادِم', transliteration: 'khadim', meaning: 'servant', pos: 'noun',
      synonym: null, antonym: 'سَيِّد (master)',
      example: { arabic: 'المُسْلِمُ خَادِمٌ لِدِينِهِ وَأُمَّتِهِ', transliteration: 'Al-muslimu khadimun lidinihi wa ummatih', translation: 'A Muslim is a servant of his religion and nation.' },
    },
  {
      word: 'خَجِل', transliteration: 'khajil', meaning: 'shy / embarrassed', pos: 'adjective',
      synonym: null, antonym: 'جَرِيء (bold)',
      example: { arabic: 'كَانَ خَجِلًا أَمَامَ الغُرَبَاء', transliteration: 'Kana khajilan amamal-ghuraba\'', translation: 'He was shy in front of strangers.' },
    },
  {
      word: 'خَتَمَ', transliteration: 'khatama', meaning: 'he sealed / finished', pos: 'verb',
      synonym: 'أَنْهَى (anha)', antonym: 'بَدَأَ (began)',
      example: { arabic: 'خَتَمَ القُرْآنَ فِي رَمَضَان', transliteration: 'Khatamal-qur\'ana fi ramadan', translation: 'He finished (reciting) the entire Qur\'an in Ramadan.' },
    },
  {
      word: 'خَيْمَة', transliteration: 'khaymah', meaning: 'tent', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'نَصَبْنَا الخَيْمَةَ عِنْدَ الجَبَل', transliteration: 'Nasabnal-khaymata \'indal-jabal', translation: 'We set up the tent by the mountain.' },
    },
  {
      word: 'خَبَر', transliteration: 'khabar', meaning: 'news', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَمِعْتُ خَبَرًا سَعِيدًا اليَوْم', transliteration: 'Sami\'tu khabaran sa\'idan al-yawm', translation: 'I heard happy news today.' },
    },
  {
      word: 'خَافَ', transliteration: 'khafa', meaning: 'he was afraid', pos: 'verb',
      synonym: 'فَزِعَ (fazi\'a)', antonym: 'اِطْمَأَنَّ (felt at ease)',
      example: { arabic: 'خَافَ الطِّفْلُ مِنَ الظَّلَام', transliteration: 'Khafat-tiflu minaz-zalam', translation: 'The child was afraid of the dark.' },
    },
  {
      word: 'خَضَار', transliteration: 'khudar', meaning: 'vegetables', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَنَاوَلْتُ الخُضَارَ فِي الغَدَاء', transliteration: 'Tanawaltul-khudara fil-ghada\'', translation: 'I had vegetables for lunch.' },
    },
  {
      word: 'خَطَر', transliteration: 'khatar', meaning: 'danger', pos: 'noun',
      synonym: null, antonym: 'أَمَان (safety)',
      example: { arabic: 'السِّبَاحَةُ هُنَا فِيهَا خَطَر', transliteration: 'As-sibahatu huna fiha khatar', translation: 'Swimming here is dangerous.' },
    },
  {
      word: 'خَلَقَ', transliteration: 'khalaqa', meaning: 'He created', pos: 'verb',
      synonym: null, antonym: 'دَمَّرَ (destroyed)',
      example: { arabic: 'خَلَقَ اللَّهُ السَّمَاوَاتِ وَالأَرْض', transliteration: 'Khalaqallahus-samawati wal-ard', translation: 'Allah created the heavens and the earth.' },
    },
  {
      word: 'خَرِيف', transliteration: 'kharif', meaning: 'autumn', pos: 'noun',
      synonym: null, antonym: 'رَبِيع (spring)',
      example: { arabic: 'تَتَسَاقَطُ الأَوْرَاقُ فِي الخَرِيف', transliteration: 'Tatasaqatul-awraqu fil-kharif', translation: 'The leaves fall in autumn.' },
    },
  {
      word: 'خَاصّ', transliteration: 'khass', meaning: 'private / special', pos: 'adjective',
      synonym: null, antonym: 'عَامّ (public/general)',
      example: { arabic: 'هٰذَا مَكْتَبِي الخَاصّ', transliteration: 'Hadha maktabil-khass', translation: 'This is my private office.' },
    },
  {
      word: 'خِزَانَة', transliteration: 'khizanah', meaning: 'cupboard / cabinet', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَضَعْتُ المَلَابِسَ فِي الخِزَانَة', transliteration: 'Wada\'tul-malabisa fil-khizanah', translation: 'I put the clothes in the cupboard.' },
    },
  {
      word: 'خَيْر', transliteration: 'khayr', meaning: 'good / goodness', pos: 'noun',
      synonym: null, antonym: 'شَرّ (evil)',
      example: { arabic: 'اِفْعَلِ الخَيْرَ وَلَا تَنْتَظِرِ الجَزَاء', transliteration: 'If\'alil-khayra wa la tantazir al-jaza\'', translation: 'Do good and do not expect a reward.' },
    },
  {
      word: 'خُطْبَة', transliteration: 'khutbah', meaning: 'sermon', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَلْقَى الإِمَامُ خُطْبَةً مُؤَثِّرَة', transliteration: 'Alqal-imamu khutbatan mu\'aththirah', translation: 'The imam delivered a moving sermon.' },
    },
  {
      word: 'خَشَب', transliteration: 'khashab', meaning: 'wood', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'صَنَعَ الطَّاوِلَةَ مِنَ الخَشَب', transliteration: 'Sana\'at-tawilata minal-khashab', translation: 'He made the table from wood.' },
    },
  {
      word: 'خَلْف', transliteration: 'khalf', meaning: 'behind', pos: 'preposition',
      synonym: 'وَرَاء (wara\')', antonym: 'أَمَام (in front of)',
      example: { arabic: 'الحَدِيقَةُ خَلْفَ البَيْت', transliteration: 'Al-hadiqatu khalfal-bayt', translation: 'The garden is behind the house.' },
    },
  {
    word: 'خَرِيطَة', transliteration: 'kharitah', meaning: 'map', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ الخَرِيطَةَ لِلْوُصُولِ إِلَى الفُنْدُق', transliteration: 'Istakhdamal-kharitata lil-wusuli ilal-funduq', translation: 'He used the map to reach the hotel.' },
  },
  {
    word: 'خَاتَم', transliteration: 'khatam', meaning: 'ring', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَبِسَ خَاتَمًا فِضِّيًّا', transliteration: 'Labisa khataman fiddiyyan', translation: 'He wore a silver ring.' },
  },
  {
    word: 'خَادِمَة', transliteration: 'khadimah', meaning: 'maid / female servant', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَاعَدَتِ الخَادِمَةُ فِي تَنْظِيفِ البَيْت', transliteration: 'Sa\'adatil-khadimatu fi tanzifil-bayt', translation: 'The maid helped clean the house.' },
  },
  {
    word: 'خِبْرَة', transliteration: 'khibrah', meaning: 'experience', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَمْلِكُ خِبْرَةً وَاسِعَةً فِي مَجَالِهِ', transliteration: 'Yamliku khibratan wasi\'atan fi majalih', translation: 'He has wide experience in his field.' },
  },
  {
    word: 'خَبِير', transliteration: 'khabir', meaning: 'expert', pos: 'noun / adjective',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَشَارَ خَبِيرًا اقْتِصَادِيًّا', transliteration: 'Istashara khabiran iqtisadiyyan', translation: 'He consulted an economic expert.' },
  },
  {
    word: 'خِتَام', transliteration: 'khitam', meaning: 'conclusion / closing', pos: 'noun',
    synonym: null, antonym: 'اِفْتِتَاح (opening)',
    example: { arabic: 'فِي خِتَامِ الِاجْتِمَاعِ شَكَرَ الحَاضِرِين', transliteration: 'Fi khitamil-ijtima\'i shakaral-hadirin', translation: 'At the conclusion of the meeting, he thanked the attendees.' },
  },
  {
    word: 'خَدَعَ', transliteration: 'khada\'a', meaning: 'he deceived', pos: 'verb',
    synonym: null, antonym: 'صَدَقَ (was honest)',
    example: { arabic: 'خَدَعَهُ صَدِيقُهُ فِي التِّجَارَة', transliteration: 'Khada\'ahu sadiquhu fit-tijarah', translation: 'His friend deceived him in the business deal.' },
  },
  {
    word: 'خِدَاع', transliteration: 'khida\'', meaning: 'deception', pos: 'noun',
    synonym: null, antonym: 'صِدْق (honesty)',
    example: { arabic: 'اِكْتَشَفَ الخِدَاعَ بَعْدَ فَوَاتِ الأَوَان', transliteration: 'Iktashafal-khida\'a ba\'da fawatil-awan', translation: 'He discovered the deception after it was too late.' },
  },
  {
    word: 'خَذَلَ', transliteration: 'khadhala', meaning: 'he let down / betrayed', pos: 'verb',
    synonym: null, antonym: 'نَصَرَ (supported)',
    example: { arabic: 'شَعَرَ بِأَنَّ أَصْدِقَاءَهُ خَذَلُوهُ', transliteration: 'Sha\'ara bi\'anna asdiqa\'ahu khadhaluh', translation: 'He felt that his friends had let him down.' },
  },
  {
    word: 'خُرَافَة', transliteration: 'khurafah', meaning: 'myth / superstition', pos: 'noun',
    synonym: null, antonym: 'حَقِيقَة (truth)',
    example: { arabic: 'هٰذَا مُجَرَّدُ خُرَافَةٍ لَا أَسَاسَ لَهَا', transliteration: 'Hadha mujarradu khurafatin la asasa laha', translation: 'This is merely a baseless myth.' },
  },
  {
    word: 'خُرَافِيّ', transliteration: 'khurafiyy', meaning: 'mythical', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'حَكَى قِصَّةً عَنْ مَخْلُوقٍ خُرَافِيّ', transliteration: 'Haka qissatan \'an makhluqin khurafiyy', translation: 'He told a story about a mythical creature.' },
  },
  {
    word: 'خَزَنَ', transliteration: 'khazana', meaning: 'he stored', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'خَزَنَ الحُبُوبَ لِفَصْلِ الشِّتَاء', transliteration: 'Khazanal-huhuba lifaslish-shita\'', translation: 'He stored the grains for winter.' },
  },
  {
    word: 'خِزْي', transliteration: 'khizy', meaning: 'disgrace', pos: 'noun',
    synonym: null, antonym: 'شَرَف (honor)',
    example: { arabic: 'جَلَبَ الخِزْيَ لِنَفْسِهِ بِتَصَرُّفِهِ', transliteration: 'Jalabal-khizya linafsihi bitasarrufih', translation: 'He brought disgrace upon himself with his behavior.' },
  },
  {
    word: 'خَسِرَ', transliteration: 'khasira', meaning: 'he lost', pos: 'verb',
    synonym: null, antonym: 'رَبِحَ (gained/profited)',
    example: { arabic: 'خَسِرَ الفَرِيقُ المُبَارَاةَ بِفَارِقِ هَدَف', transliteration: 'Khasiral-fariqul-mubarata bifariqi hadaf', translation: 'The team lost the match by one goal.' },
  },
  {
    word: 'خَسَارَة', transliteration: 'khasarah', meaning: 'loss', pos: 'noun',
    synonym: null, antonym: 'رِبْح (profit)',
    example: { arabic: 'تَكَبَّدَ خَسَارَةً كَبِيرَةً فِي التِّجَارَة', transliteration: 'Takabbada khasaratan kabiratan fit-tijarah', translation: 'He incurred a great loss in trade.' },
  },
  {
    word: 'خَشِيَ', transliteration: 'khashiya', meaning: 'he feared (reverentially)', pos: 'verb',
    synonym: 'خَافَ (khafa)', antonym: null,
    example: { arabic: 'خَشِيَ اللَّهَ فِي سِرِّهِ وَعَلَانِيَتِهِ', transliteration: 'Khashiyallaha fi sirrihi wa \'alaniyatih', translation: 'He feared Allah in private and in public.' },
  },
  {
    word: 'خَشْيَة', transliteration: 'khashyah', meaning: 'reverential fear (of Allah)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'بَكَى مِنْ خَشْيَةِ اللَّه', transliteration: 'Baka min khashyatillah', translation: 'He wept out of fear of Allah.' },
  },
  {
    word: 'خَصْم', transliteration: 'khasm', meaning: 'opponent / discount', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَصَلَ عَلَى خَصْمٍ كَبِيرٍ عَلَى السِّلْعَة', transliteration: 'Hasala \'ala khasmin kabirin \'alas-sil\'ah', translation: 'He got a large discount on the item.' },
  },
  {
    word: 'خَصِيب', transliteration: 'khasib', meaning: 'fertile', pos: 'adjective',
    synonym: null, antonym: 'جَدِيب (barren)',
    example: { arabic: 'الأَرْضُ خَصِيبَةٌ عِنْدَ ضَفَّةِ النَّهْر', transliteration: 'Al-ardu khasibatun \'inda daffatin-nahr', translation: 'The land is fertile by the riverbank.' },
  },
  {
    word: 'خِصَام', transliteration: 'khisam', meaning: 'dispute / quarrel', pos: 'noun',
    synonym: null, antonym: 'وِفَاق (harmony)',
    example: { arabic: 'اِنْتَهَى الخِصَامُ بِالصُّلْح', transliteration: 'Intahal-khisamu bis-sulh', translation: 'The dispute ended with reconciliation.' },
  },
  {
    word: 'خُطُوَة', transliteration: 'khutwah', meaning: 'step', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خَطَا خُطُوَةً نَحْوَ النَّجَاح', transliteration: 'Khata khutwatan nahwan-najah', translation: 'He took a step toward success.' },
  },
  {
    word: 'خَفَّفَ', transliteration: 'khaffafa', meaning: 'he lightened / reduced', pos: 'verb',
    synonym: null, antonym: 'ثَقَّلَ (made heavier)',
    example: { arabic: 'خَفَّفَ مِنْ حِمْلِهِ قَبْلَ السَّفَر', transliteration: 'Khaffafa min himlihi qablas-safar', translation: 'He lightened his load before traveling.' },
  },
  {
    word: 'خِلَاف', transliteration: 'khilaf', meaning: 'disagreement', pos: 'noun',
    synonym: null, antonym: 'اِتِّفَاق (agreement)',
    example: { arabic: 'وَقَعَ خِلَافٌ بَيْنَ الجَارَيْن', transliteration: 'Waqa\'a khilafun baynal-jarayn', translation: 'A disagreement occurred between the two neighbors.' },
  },
  {
    word: 'خِلَال', transliteration: 'khilal', meaning: 'during / through', pos: 'preposition',
    synonym: null, antonym: null,
    example: { arabic: 'سَافَرَ إِلَى الحَجِّ خِلَالَ العُطْلَة', transliteration: 'Safara ilal-hajji khilalal-\'utlah', translation: 'He traveled for Hajj during the holiday.' },
  },
  {
    word: 'خُلُق', transliteration: 'khuluq', meaning: 'character / moral trait', pos: 'noun',
    synonym: 'طَبْع (tab\')', antonym: null,
    example: { arabic: 'إِنَّكَ لَعَلَى خُلُقٍ عَظِيم', transliteration: 'Innaka la\'ala khuluqin \'azim', translation: 'Indeed, you are of a great moral character.' },
  },
  {
    word: 'خَلِيفَة', transliteration: 'khalifah', meaning: 'caliph / successor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ أَبُو بَكْرٍ أَوَّلَ خَلِيفَة', transliteration: 'Kana abu bakrin awwala khalifah', translation: 'Abu Bakr was the first caliph.' },
  },
  {
    word: 'خِيَار', transliteration: 'khiyar', meaning: 'choice / cucumber', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَمَامَكَ خِيَارَانِ فَقَط', transliteration: 'Amamaka khiyarani faqat', translation: 'You have only two choices.' },
  },
  {
    word: 'خَيَال', transliteration: 'khayal', meaning: 'imagination', pos: 'noun',
    synonym: null, antonym: 'وَاقِع (reality)',
    example: { arabic: 'لِلطِّفْلِ خَيَالٌ وَاسِعٌ فِي اللَّعِب', transliteration: 'Littifli khayalun wasi\'un fil-la\'ib', translation: 'The child has a wide imagination in play.' },
  },
  {
    word: 'خَبَّاز', transliteration: 'khabbaz', meaning: 'baker', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَخْبِزُ الخَبَّازُ الخُبْزَ كُلَّ صَبَاح', transliteration: 'Yakhbizul-khabbazul-khubza kulla sabah', translation: 'The baker bakes bread every morning.' },
  },
  {
    word: 'خَطِيب', transliteration: 'khatib', meaning: 'orator / preacher', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَلْقَى الخَطِيبُ خُطْبَةً مُؤَثِّرَة', transliteration: 'Alqal-khatibu khutbatan mu\'aththirah', translation: 'The orator delivered a moving sermon.' },
  },
  ],

  'د': [
  {
      word: 'دَرَسَ', transliteration: 'darasa', meaning: 'he studied', pos: 'verb',
      synonym: 'تَعَلَّمَ (ta\'allama)', antonym: null,
      example: { arabic: 'دَرَسَ الطَّالِبُ لِلِامْتِحَان', transliteration: 'Darasat-talibu lil-imtihan', translation: 'The student studied for the exam.' },
    },
  {
      word: 'دَخَلَ', transliteration: 'dakhala', meaning: 'he entered', pos: 'verb',
      synonym: null, antonym: 'خَرَجَ (went out)',
      example: { arabic: 'دَخَلَ الفَصْلَ بَعْدَ الجَرَس', transliteration: 'Dakhalal-fasla ba\'dal-jaras', translation: 'He entered the classroom after the bell.' },
    },
  {
      word: 'دَافِئ', transliteration: 'dafi\'', meaning: 'warm', pos: 'adjective',
      synonym: null, antonym: 'بَارِد (cold)',
      example: { arabic: 'الجَوُّ دَافِئٌ اليَوْم', transliteration: 'Al-jawwu dafi\'un al-yawm', translation: 'The weather is warm today.' },
    },
  {
      word: 'دَوَاء', transliteration: 'dawa\'', meaning: 'medicine', pos: 'noun',
      synonym: null, antonym: 'دَاء (illness)',
      example: { arabic: 'شَرِبَ الدَّوَاءَ بَعْدَ الأَكْل', transliteration: 'Sharibad-dawa\'a ba\'dal-akl', translation: 'He took the medicine after eating.' },
    },
  {
      word: 'دَقِيقَة', transliteration: 'daqiqah', meaning: 'minute', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِنْتَظِرْنِي عَشْرَ دَقَائِق', transliteration: 'Intazirni \'ashra daqa\'iq', translation: 'Wait for me ten minutes.' },
    },
  {
      word: 'دُكَّان', transliteration: 'dukkan', meaning: 'shop', pos: 'noun',
      synonym: 'مَحَلّ (mahall)', antonym: null,
      example: { arabic: 'يَمْلِكُ عَمِّي دُكَّانًا صَغِيرًا', transliteration: 'Yamliku \'ammi dukkanan saghiran', translation: 'My uncle owns a small shop.' },
    },
  {
      word: 'دِفَاع', transliteration: 'difa\'', meaning: 'defense', pos: 'noun',
      synonym: null, antonym: 'هُجُوم (attack)',
      example: { arabic: 'قَدَّمَ دِفَاعًا قَوِيًّا عَنْ رَأْيِهِ', transliteration: 'Qaddama difa\'an qawiyyan \'an ra\'yih', translation: 'He gave a strong defense of his opinion.' },
    },
  {
      word: 'دَمْع', transliteration: 'dam\'', meaning: 'tear (from eyes)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَقَطَتْ دَمْعَةٌ مِنْ عَيْنِهَا', transliteration: 'Saqatat dam\'atun min \'aynihan', translation: 'A tear fell from her eye.' },
    },
  {
      word: 'دَائِمًا', transliteration: 'da\'iman', meaning: 'always', pos: 'adverb',
      synonym: null, antonym: 'أَبَدًا / نَادِرًا (never / rarely)',
      example: { arabic: 'يَقُولُ الحَقَّ دَائِمًا', transliteration: 'Yaqulul-haqqa da\'iman', translation: 'He always tells the truth.' },
    },
  {
      word: 'دَقِيق', transliteration: 'daqiq', meaning: 'precise / flour', pos: 'adjective / noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَانَ وَصْفُهُ دَقِيقًا جِدًّا', transliteration: 'Kana wasfuhu daqiqan jiddan', translation: 'His description was very precise.' },
    },
  {
      word: 'دُخَان', transliteration: 'dukhan', meaning: 'smoke', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِرْتَفَعَ الدُّخَانُ مِنَ المَصْنَع', transliteration: 'Irtafa\'ad-dukhanu minal-masna\'', translation: 'Smoke rose from the factory.' },
    },
  {
      word: 'دَعَا', transliteration: 'da\'a', meaning: 'he invited / supplicated', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'دَعَا أَصْدِقَاءَهُ إِلَى حَفْلِهِ', transliteration: 'Da\'a asdiqa\'ahu ila haflih', translation: 'He invited his friends to his party.' },
    },
  {
      word: 'دُنْيَا', transliteration: 'dunya', meaning: 'worldly life', pos: 'noun',
      synonym: null, antonym: 'آخِرَة (hereafter)',
      example: { arabic: 'الدُّنْيَا دَارُ عَمَل', transliteration: 'Ad-dunya darun \'amal', translation: 'This worldly life is a place of work (for the hereafter).' },
    },
  {
      word: 'دَرَجَة', transliteration: 'darajah', meaning: 'degree / grade', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'حَصَلَ عَلَى دَرَجَةٍ عَالِيَة', transliteration: 'Hasala \'ala darajatin \'aliyah', translation: 'He got a high grade.' },
    },
  {
      word: 'دَوْلَة', transliteration: 'dawlah', meaning: 'state / country', pos: 'noun',
      synonym: 'بَلَد (balad)', antonym: null,
      example: { arabic: 'زُرْتُ عِدَّةَ دُوَلٍ عَرَبِيَّة', transliteration: 'Zurtu \'iddata duwalin \'arabiyyah', translation: 'I visited several Arab countries.' },
    },
  {
      word: 'دَرْب', transliteration: 'darb', meaning: 'path / way', pos: 'noun',
      synonym: 'طَرِيق (tariq)', antonym: null,
      example: { arabic: 'سَلَكَ دَرْبًا صَعْبًا لِلنَّجَاح', transliteration: 'Salaka darban sa\'ban lin-najah', translation: 'He took a difficult path to success.' },
    },
  {
      word: 'دَمّ', transliteration: 'dam', meaning: 'blood', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَبَرَّعَ بِالدَّمِ لِمُسَاعَدَةِ المَرْضَى', transliteration: 'Tabarra\'a bid-dami limusa\'adatil-marda', translation: 'He donated blood to help the sick.' },
    },
  {
      word: 'دَلِيل', transliteration: 'dalil', meaning: 'evidence / guide', pos: 'noun',
      synonym: 'بُرْهَان (burhan)', antonym: null,
      example: { arabic: 'قَدَّمَ دَلِيلًا وَاضِحًا عَلَى كَلَامِهِ', transliteration: 'Qaddama dalilan wadihan \'ala kalamih', translation: 'He presented clear evidence for his statement.' },
    },
  {
      word: 'دَمَّرَ', transliteration: 'dammara', meaning: 'he destroyed', pos: 'verb',
      synonym: 'خَرَّبَ (kharraba)', antonym: 'بَنَى (built)',
      example: { arabic: 'دَمَّرَ الزِّلْزَالُ المَبَانِيَ القَدِيمَة', transliteration: 'Dammaraz-zilzalul-mabani al-qadimah', translation: 'The earthquake destroyed the old buildings.' },
    },
  {
      word: 'دِين', transliteration: 'din', meaning: 'religion', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الإِسْلَامُ دِينُ اليُسْر', transliteration: 'Al-islamu dinul-yusr', translation: 'Islam is the religion of ease.' },
    },
  {
    word: 'دَرَّاجَة', transliteration: 'darrajah', meaning: 'bicycle', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَرْكَبُ دَرَّاجَتَهُ إِلَى المَدْرَسَة', transliteration: 'Yarkabu darrajatahu ilal-madrasah', translation: 'He rides his bicycle to school.' },
  },
  {
    word: 'دَجَاجَة', transliteration: 'dajajah', meaning: 'chicken (hen)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَبِيضُ الدَّجَاجَةُ كُلَّ يَوْم', transliteration: 'Tabidud-dajajatu kulla yawm', translation: 'The hen lays eggs every day.' },
  },
  {
    word: 'دِيك', transliteration: 'dik', meaning: 'rooster', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَصِيحُ الدِّيكُ عِنْدَ الفَجْر', transliteration: 'Yasihud-diku \'indal-fajr', translation: 'The rooster crows at dawn.' },
  },
  {
    word: 'دَقَّ', transliteration: 'daqqa', meaning: 'he knocked / struck', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'دَقَّ البَابَ ثَلَاثَ مَرَّات', transliteration: 'Daqqal-baba thalatha marrat', translation: 'He knocked on the door three times.' },
  },
  {
    word: 'دُمْيَة', transliteration: 'dumyah', meaning: 'doll', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَلْعَبُ البِنْتُ بِدُمْيَتِهَا المُفَضَّلَة', transliteration: 'Tal\'abul-bintu bidumyatihal-mufaddalah', translation: 'The girl plays with her favorite doll.' },
  },
  {
    word: 'دَوَّنَ', transliteration: 'dawwana', meaning: 'he recorded / wrote down', pos: 'verb',
    synonym: 'كَتَبَ (kataba)', antonym: null,
    example: { arabic: 'دَوَّنَ مُلَاحَظَاتِهِ أَثْنَاءَ المُحَاضَرَة', transliteration: 'Dawwana mulahazatihi athna\'al-muhadarah', translation: 'He recorded his notes during the lecture.' },
  },
  {
    word: 'دَوَام', transliteration: 'dawam', meaning: 'continuity / working hours', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَبْدَأُ دَوَامُهُ فِي السَّاعَةِ الثَّامِنَة', transliteration: 'Yabda\'u dawamuhu fis-sa\'atith-thaminah', translation: 'His working hours begin at eight o\'clock.' },
  },
  {
    word: 'دَوَّامَة', transliteration: 'dawwamah', meaning: 'vortex / spinning top', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَخَلَ القَارِبُ فِي دَوَّامَةٍ خَطِيرَة', transliteration: 'Dakhalal-qaribu fi dawwamatin khatirah', translation: 'The boat entered a dangerous vortex.' },
  },
  {
    word: 'دَاء', transliteration: 'da\'', meaning: 'disease', pos: 'noun',
    synonym: 'مَرَض (marad)', antonym: 'دَوَاء (medicine)',
    example: { arabic: 'مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ دَوَاء', transliteration: 'Ma anzalallahu da\'an illa anzala lahu dawa\'', translation: 'Allah did not send down a disease except that He sent down its cure.' },
  },
  {
    word: 'دَبَّ', transliteration: 'dabba', meaning: 'it crept / crawled', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'دَبَّ الخَوْفُ فِي قُلُوبِهِم', transliteration: 'Dabbal-khawfu fi qulubihim', translation: 'Fear crept into their hearts.' },
  },
  {
    word: 'دَبَّرَ', transliteration: 'dabbara', meaning: 'he managed / planned', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'دَبَّرَ أُمُورَهُ بِحِكْمَة', transliteration: 'Dabbara umurahu bihikmah', translation: 'He managed his affairs wisely.' },
  },
  {
    word: 'دَرْس', transliteration: 'dars', meaning: 'lesson', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَفَادَ الجَمِيعُ مِنَ الدَّرْس', transliteration: 'Istafadal-jami\'u minad-dars', translation: 'Everyone benefited from the lesson.' },
  },
  {
    word: 'دَعْوَة', transliteration: 'da\'wah', meaning: 'invitation / supplication / call (to Islam)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَّهَ لَهُ دَعْوَةً لِحُضُورِ الحَفْل', transliteration: 'Wajjaha lahu da\'watan lihuduril-hafl', translation: 'He extended him an invitation to attend the celebration.' },
  },
  {
    word: 'دَاعِيَة', transliteration: 'da\'iyah', meaning: 'preacher / caller (to Islam)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الدَّاعِيَةُ يَدْعُو النَّاسَ إِلَى الخَيْر', transliteration: 'Ad-da\'iyatu yad\'un-nasa ilal-khayr', translation: 'The preacher calls people to goodness.' },
  },
  {
    word: 'دِمَاغ', transliteration: 'dimagh', meaning: 'brain', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الدِّمَاغُ مَرْكَزُ التَّحَكُّمِ فِي الجِسْم', transliteration: 'Ad-dimaghu markazut-tahakkumi fil-jism', translation: 'The brain is the control center of the body.' },
  },
  {
    word: 'دَنِيء', transliteration: 'dani\'', meaning: 'despicable / lowly', pos: 'adjective',
    synonym: null, antonym: 'نَبِيل (noble)',
    example: { arabic: 'رَفَضَ التَّصَرُّفَ بِأُسْلُوبٍ دَنِيء', transliteration: 'Rafadat-tasarrufa bi\'uslubin dani\'', translation: 'He refused to act in a despicable manner.' },
  },
  {
    word: 'دُهْن', transliteration: 'duhn', meaning: 'fat / grease / oil', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَزَالَ الدُّهْنَ عَنِ الطَّاوِلَة', transliteration: 'Azalad-duhna \'anit-tawilah', translation: 'He removed the grease from the table.' },
  },
  {
    word: 'دِيوَان', transliteration: 'diwan', meaning: 'anthology / collection (of poetry)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَشَرَ الشَّاعِرُ دِيوَانَهُ الأَوَّل', transliteration: 'Nashaarash-shairu diwanahul-awwal', translation: 'The poet published his first anthology.' },
  },
  {
    word: 'دَيْن', transliteration: 'dayn', meaning: 'debt', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَدَّدَ دَيْنَهُ فِي مَوْعِدِهِ', transliteration: 'Saddada daynahu fi maw\'idih', translation: 'He paid off his debt on time.' },
  },
  {
    word: 'دَامَ', transliteration: 'dama', meaning: 'it lasted / continued', pos: 'verb',
    synonym: 'اِسْتَمَرَّ (istamarra)', antonym: 'اِنْتَهَى (ended)',
    example: { arabic: 'دَامَ الِاجْتِمَاعُ سَاعَتَيْن', transliteration: 'Dama al-ijtima\'u sa\'atayn', translation: 'The meeting lasted two hours.' },
  },
  {
    word: 'دَوْرَة', transliteration: 'dawrah', meaning: 'cycle / course', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِلْتَحَقَ بِدَوْرَةٍ تَدْرِيبِيَّة', transliteration: 'Iltahaqa bidawratin tadribiyyah', translation: 'He enrolled in a training course.' },
  },
  {
    word: 'دَوْرِيّ', transliteration: 'dawriyy', meaning: 'periodic / league (sports)', pos: 'adjective / noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُقَامُ فَحْصٌ دَوْرِيٌّ لِلسَّيَّارَة', transliteration: 'Yuqamu fahsun dawriyyun lissayyarah', translation: 'A periodic inspection is held for the car.' },
  },
  {
    word: 'دَلَّ', transliteration: 'dalla', meaning: 'he indicated / guided', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'دَلَّهُ عَلَى الطَّرِيقِ الصَّحِيح', transliteration: 'Dallahu \'alat-tariqis-sahih', translation: 'He guided him to the correct path.' },
  },
  {
    word: 'دِبْلُومَاسِيَّة', transliteration: 'diblumasiyyah', meaning: 'diplomacy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَلُّوا الخِلَافَ بِالدِّبْلُومَاسِيَّة', transliteration: 'Hallul-khilafa bid-diblumasiyyah', translation: 'They resolved the dispute through diplomacy.' },
  },
  {
    word: 'دُخُول', transliteration: 'dukhul', meaning: 'entry', pos: 'noun',
    synonym: null, antonym: 'خُرُوج (exit)',
    example: { arabic: 'مَمْنُوعُ الدُّخُولِ بِدُونِ إِذْن', transliteration: 'Mamnu\'ud-dukhuli bidun idhn', translation: 'Entry is forbidden without permission.' },
  },
  {
    word: 'دَوْلِيّ', transliteration: 'dawliyy', meaning: 'international', pos: 'adjective',
    synonym: null, antonym: 'مَحَلِّيّ (local)',
    example: { arabic: 'شَارَكَ فِي مُؤْتَمَرٍ دَوْلِيّ', transliteration: 'Sharaka fi mu\'tamarin dawliyy', translation: 'He participated in an international conference.' },
  },
  {
    word: 'دِيمُقْرَاطِيَّة', transliteration: 'dimuqratiyyah', meaning: 'democracy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَقُومُ الدِّيمُقْرَاطِيَّةُ عَلَى حُرِّيَّةِ الِانْتِخَاب', transliteration: 'Taqumud-dimuqratiyyatu \'ala hurriyyatil-intikhab', translation: 'Democracy is founded on freedom of election.' },
  },
  {
    word: 'دَافَعَ', transliteration: 'dafa\'a', meaning: 'he defended', pos: 'verb',
    synonym: null, antonym: 'هَاجَمَ (attacked)',
    example: { arabic: 'دَافَعَ عَنْ حُقُوقِهِ بِقُوَّة', transliteration: 'Dafa\'a \'an huquqihi biquwwah', translation: 'He defended his rights firmly.' },
  },
  {
    word: 'دُرَّة', transliteration: 'durrah', meaning: 'pearl / gem', pos: 'noun',
    synonym: 'لُؤْلُؤَة (lu\'lu\'ah)', antonym: null,
    example: { arabic: 'كَانَ حَفِيدُهُ دُرَّةَ حَيَاتِهِ', transliteration: 'Kana hafiduhu durrata hayatih', translation: 'His grandson was the gem of his life.' },
  },
  {
    word: 'دَبُّور', transliteration: 'dabbur', meaning: 'wasp / hornet', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَسَعَهُ دَبُّورٌ فِي الحَدِيقَة', transliteration: 'Lasa\'ahu dabburun fil-hadiqah', translation: 'A wasp stung him in the garden.' },
  },
  ],

  'ذ': [
  {
      word: 'ذَهَبَ', transliteration: 'dhahaba', meaning: 'he went', pos: 'verb',
      synonym: null, antonym: 'جَاءَ / رَجَعَ (came / returned)',
      example: { arabic: 'ذَهَبَ إِلَى السُّوقِ لِيَشْتَرِيَ الخُبْز', transliteration: 'Dhahaba ilas-suqi liyashtariyal-khubz', translation: 'He went to the market to buy bread.' },
    },
  {
      word: 'ذَكِيّ', transliteration: 'dhakiyy', meaning: 'intelligent', pos: 'adjective',
      synonym: 'نَبِيه (nabih)', antonym: 'غَبِيّ (unintelligent)',
      example: { arabic: 'الطَّالِبُ ذَكِيٌّ وَمُجْتَهِد', transliteration: 'At-talibu dhakiyyun wa mujtahid', translation: 'The student is intelligent and hardworking.' },
    },
  {
      word: 'ذَنْب', transliteration: 'dhanb', meaning: 'sin', pos: 'noun',
      synonym: 'خَطِيئَة (khati\'ah)', antonym: 'حَسَنَة (good deed)',
      example: { arabic: 'اِسْتَغْفَرَ اللَّهَ مِنْ ذَنْبِهِ', transliteration: 'Istaghfaral-laha min dhanbih', translation: 'He asked Allah\'s forgiveness for his sin.' },
    },
  {
      word: 'ذَاكِرَة', transliteration: 'dhakirah', meaning: 'memory', pos: 'noun',
      synonym: null, antonym: 'نِسْيَان (forgetfulness)',
      example: { arabic: 'ذَاكِرَتُهُ قَوِيَّةٌ جِدًّا', transliteration: 'Dhakiratuhu qawiyyatun jiddan', translation: 'His memory is very strong.' },
    },
  {
      word: 'ذَبَحَ', transliteration: 'dhabaha', meaning: 'he slaughtered', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'ذَبَحَ الأُضْحِيَةَ يَوْمَ العِيد', transliteration: 'Dhabahal-udhhiyata yawmal-\'id', translation: 'He slaughtered the sacrifice on the day of Eid.' },
    },
  {
      word: 'ذُبَاب', transliteration: 'dhubab', meaning: 'flies (insects)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَثُرَ الذُّبَابُ فِي الصَّيْف', transliteration: 'Kathurad-dhubabu fis-sayf', translation: 'Flies became numerous in the summer.' },
    },
  {
      word: 'ذَوْق', transliteration: 'dhawq', meaning: 'taste', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَهُ ذَوْقٌ رَفِيعٌ فِي المَلَابِس', transliteration: 'Lahu dhawqun rafi\'un fil-malabis', translation: 'He has refined taste in clothing.' },
    },
  {
      word: 'ذَلَّ', transliteration: 'dhalla', meaning: 'he was humiliated / lowly', pos: 'verb',
      synonym: null, antonym: 'عَزَّ (was mighty/honored)',
      example: { arabic: 'مَنْ عَصَى اللَّهَ ذَلَّ', transliteration: 'Man \'asal-laha dhalla', translation: 'Whoever disobeys Allah is humiliated.' },
    },
  {
      word: 'ذُرَة', transliteration: 'dhurah', meaning: 'corn / maize', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَزْرَعُ الفَلَّاحُ الذُّرَةَ فِي حَقْلِهِ', transliteration: 'Yazra\'ul-fallahudh-dhurata fi haqlih', translation: 'The farmer grows corn in his field.' },
    },
  {
      word: 'ذَقْن', transliteration: 'dhaqn', meaning: 'chin', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَهُ لِحْيَةٌ تُغَطِّي ذَقْنَهُ', transliteration: 'Lahu lihyatun tughatti dhaqnah', translation: 'He has a beard that covers his chin.' },
    },
  {
      word: 'ذُو', transliteration: 'dhu', meaning: 'possessor of / one having', pos: 'noun (construct)',
      synonym: null, antonym: null,
      example: { arabic: 'هُوَ رَجُلٌ ذُو خُلُقٍ حَسَن', transliteration: 'Huwa rajulun dhu khuluqin hasan', translation: 'He is a man of good character.' },
    },
  {
      word: 'ذِرَاع', transliteration: 'dhira\'', meaning: 'arm / forearm', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كُسِرَ ذِرَاعُهُ فِي الحَادِث', transliteration: 'Kusira dhira\'uhu fil-hadith', translation: 'His arm was broken in the accident.' },
    },
  {
      word: 'ذَاع', transliteration: 'dha\'a', meaning: 'it spread (news)', pos: 'verb',
      synonym: 'اِنْتَشَرَ (intashara)', antonym: null,
      example: { arabic: 'ذَاعَ خَبَرُ نَجَاحِهِ بَيْنَ النَّاس', transliteration: 'Dha\'a khabaru najahihi baynan-nas', translation: 'The news of his success spread among the people.' },
    },
  {
      word: 'ذَبْذَبَة', transliteration: 'dhabdhabah', meaning: 'vibration / oscillation', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'شَعَرَ بِذَبْذَبَةِ الهَاتِفِ فِي جَيْبِهِ', transliteration: 'Sha\'ara bidhabdhabatil-hatifi fi jaybih', translation: 'He felt the vibration of the phone in his pocket.' },
    },
  {
      word: 'ذَخِيرَة', transliteration: 'dhakhirah', meaning: 'ammunition / reserve', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'العِلْمُ ذَخِيرَةٌ لِلْمُسْتَقْبَل', transliteration: 'Al-\'ilmu dhakhiratun lilmustaqbal', translation: 'Knowledge is a reserve for the future.' },
    },
  {
      word: 'ذُلّ', transliteration: 'dhull', meaning: 'humiliation / disgrace', pos: 'noun',
      synonym: null, antonym: 'عِزّ (honor)',
      example: { arabic: 'لَا يَرْضَى الحُرُّ بِالذُّلّ', transliteration: 'La yarda al-hurru bidh-dhull', translation: 'A free (dignified) person does not accept humiliation.' },
    },
  {
      word: 'ذُقْت', transliteration: 'dhuqtu', meaning: 'I tasted', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'ذُقْتُ الطَّعَامَ قَبْلَ تَقْدِيمِهِ', transliteration: 'Dhuqtut-ta\'ama qabla taqdimih', translation: 'I tasted the food before serving it.' },
    },
  {
      word: 'ذَرَّة', transliteration: 'dharrah', meaning: 'atom / tiny particle', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَا يَظْلِمُ رَبُّكَ أَحَدًا مِثْقَالَ ذَرَّة', transliteration: 'La yazlimu rabbuka ahadan mithqala dharrah', translation: 'Your Lord does not wrong anyone even by an atom\'s weight.' },
    },
  {
      word: 'ذَاتِيّ', transliteration: 'dhati', meaning: 'self / personal', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'يَعْتَمِدُ عَلَى جُهْدِهِ الذَّاتِيّ', transliteration: 'Ya\'tamidu \'ala juhdihidh-dhati', translation: 'He relies on his own personal effort.' },
    },
  {
      word: 'ذُو القَرْنَيْن', transliteration: 'dhul-qarnayn', meaning: 'a righteous ruler mentioned in the Qur\'an', pos: 'proper noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَصَّ اللَّهُ عَلَيْنَا خَبَرَ ذِي القَرْنَيْن', transliteration: 'Qassallahu \'alayna khabara dhil-qarnayn', translation: 'Allah related to us the story of Dhul-Qarnayn.' },
    },
  {
    word: 'ذَاتِيَّة', transliteration: 'dhatiyyah', meaning: 'autobiography / selfhood', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَتَبَ سِيرَتَهُ الذَّاتِيَّة', transliteration: 'Kataba siratahudh-dhatiyyah', translation: 'He wrote his autobiography.' },
  },
  {
    word: 'ذَاتِيًّا', transliteration: 'dhatiyyan', meaning: 'automatically / by oneself', pos: 'adverb',
    synonym: null, antonym: null,
    example: { arabic: 'يَعْمَلُ البَابُ ذَاتِيًّا', transliteration: 'Ya\'malul-babu dhatiyyan', translation: 'The door operates automatically.' },
  },
  {
    word: 'ذَلِيل', transliteration: 'dhalil', meaning: 'humiliated / lowly', pos: 'adjective',
    synonym: null, antonym: 'عَزِيز (mighty/dear)',
    example: { arabic: 'رَفَضَ أَنْ يَعِيشَ ذَلِيلًا', transliteration: 'Rafada an ya\'isha dhalilan', translation: 'He refused to live humiliated.' },
  },
  {
    word: 'ذُنُوب', transliteration: 'dhunub', meaning: 'sins', pos: 'noun (plural)',
    synonym: null, antonym: 'حَسَنَات (good deeds)',
    example: { arabic: 'اسْتَغْفَرَ اللَّهَ مِنْ جَمِيعِ ذُنُوبِهِ', transliteration: 'Istaghfaral-laha min jami\'i dhunubih', translation: 'He asked Allah\'s forgiveness for all his sins.' },
  },
  {
    word: 'ذُو الحِجَّة', transliteration: 'dhul-hijjah', meaning: 'Dhul-Hijjah (twelfth Islamic month)', pos: 'proper noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُؤَدَّى الحَجُّ فِي شَهْرِ ذِي الحِجَّة', transliteration: 'Yu\'adda al-hajju fi shahri dhil-hijjah', translation: 'Hajj is performed in the month of Dhul-Hijjah.' },
  },
  {
    word: 'ذُو القِعْدَة', transliteration: 'dhul-qi\'dah', meaning: 'Dhul-Qi\'dah (eleventh Islamic month)', pos: 'proper noun',
    synonym: null, antonym: null,
    example: { arabic: 'ذُو القِعْدَةِ مِنَ الأَشْهُرِ الحُرُم', transliteration: 'Dhul-qi\'dati minal-ashhuril-hurum', translation: 'Dhul-Qi\'dah is one of the sacred months.' },
  },
  {
    word: 'ذِكْر', transliteration: 'dhikr', meaning: 'remembrance (of Allah)', pos: 'noun',
    synonym: null, antonym: 'غَفْلَة (heedlessness)',
    example: { arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ القُلُوب', transliteration: 'Ala bidhikrillahi tatma\'innul-qulub', translation: 'Indeed, by the remembrance of Allah do hearts find rest.' },
  },
  {
    word: 'ذِكْرَى', transliteration: 'dhikra', meaning: 'memory / anniversary', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'احْتَفَلُوا بِذِكْرَى الِاسْتِقْلَال', transliteration: 'Ihtafalu bidhikral-istiqlal', translation: 'They celebrated the anniversary of independence.' },
  },
  {
    word: 'ذَاكَرَ', transliteration: 'dhakara', meaning: 'he studied / reviewed', pos: 'verb',
    synonym: 'رَاجَعَ (raja\'a)', antonym: null,
    example: { arabic: 'ذَاكَرَ دُرُوسَهُ قَبْلَ الِامْتِحَان', transliteration: 'Dhakara durusahu qablal-imtihan', translation: 'He reviewed his lessons before the exam.' },
  },
  {
    word: 'ذَبِيحَة', transliteration: 'dhabihah', meaning: 'sacrificial animal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَدَّمَ الذَّبِيحَةَ فِي عِيدِ الأَضْحَى', transliteration: 'Qaddamadh-dhabihata fi \'idil-adha', translation: 'He offered the sacrificial animal on Eid al-Adha.' },
  },
  {
    word: 'ذَرِيعَة', transliteration: 'dhari\'ah', meaning: 'pretext / means', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِتَّخَذَ المَرَضَ ذَرِيعَةً لِلْغِيَاب', transliteration: 'Ittakhadhal-marada dhari\'atan lil-ghiyab', translation: 'He used illness as a pretext for absence.' },
  },
  {
    word: 'ذُبَابَة', transliteration: 'dhubabah', meaning: 'a fly (single insect)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'طَارَتِ الذُّبَابَةُ حَوْلَ الطَّعَام', transliteration: 'Tarat-dhubabatu hawlat-ta\'am', translation: 'The fly flew around the food.' },
  },
  {
    word: 'ذَيْل', transliteration: 'dhayl', meaning: 'tail', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَرَّكَ القِطُّ ذَيْلَهُ بِسُرْعَة', transliteration: 'Harrakal-qittu dhaylahu bisur\'ah', translation: 'The cat moved its tail quickly.' },
  },
  {
    word: 'ذُهُول', transliteration: 'dhuhul', meaning: 'astonishment', pos: 'noun',
    synonym: 'دَهْشَة (dahshah)', antonym: null,
    example: { arabic: 'أُصِيبَ بِالذُّهُولِ عِنْدَ سَمَاعِ الخَبَر', transliteration: 'Usiba bidh-dhuhuli \'inda sama\'il-khabar', translation: 'He was astonished upon hearing the news.' },
  },
  {
    word: 'ذَهِلَ', transliteration: 'dhahila', meaning: 'he was astonished', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ذَهِلَ لِمَا رَآهُ أَمَامَهُ', transliteration: 'Dhahila lima ra\'ahu amamah', translation: 'He was astonished at what he saw before him.' },
  },
  {
    word: 'ذَمّ', transliteration: 'dhamm', meaning: 'blame / disparagement', pos: 'noun',
    synonym: null, antonym: 'مَدْح (praise)',
    example: { arabic: 'لَا يَسْتَحِقُّ الذَّمَّ عَلَى مَا فَعَل', transliteration: 'La yastahiqqudh-dhamma \'ala ma fa\'al', translation: 'He does not deserve blame for what he did.' },
  },
  {
    word: 'ذَمَّ', transliteration: 'dhamma', meaning: 'he blamed / disparaged', pos: 'verb',
    synonym: null, antonym: 'مَدَحَ (praised)',
    example: { arabic: 'ذَمَّهُ النَّاسُ عَلَى سُلُوكِهِ', transliteration: 'Dhammahun-nasu \'ala sulukih', translation: 'People blamed him for his behavior.' },
  },
  {
    word: 'ذَاقَ', transliteration: 'dhaqa', meaning: 'he tasted', pos: 'verb',
    synonym: 'تَذَوَّقَ (tadhawwaqa)', antonym: null,
    example: { arabic: 'ذَاقَ طَعْمَ النَّجَاحِ لِأَوَّلِ مَرَّة', transliteration: 'Dhaqa ta\'man-najahi li\'awwali marrah', translation: 'He tasted the flavor of success for the first time.' },
  },
  {
    word: 'ذَوَبَان', transliteration: 'dhawaban', meaning: 'melting', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُسَرِّعُ الِارْتِفَاعُ الحَرَارِيُّ ذَوَبَانَ الثُّلُوج', transliteration: 'Yusarri\'ul-irtifa\'ul-hararyyu dhawabanath-thuluj', translation: 'The rise in temperature accelerates the melting of snow.' },
  },
  {
    word: 'ذَابَ', transliteration: 'dhaba', meaning: 'it melted', pos: 'verb',
    synonym: null, antonym: 'تَجَمَّدَ (froze)',
    example: { arabic: 'ذَابَ الثَّلْجُ تَحْتَ أَشِعَّةِ الشَّمْس', transliteration: 'Dhabath-thalju tahta ashi\'atish-shams', translation: 'The snow melted under the sun\'s rays.' },
  },
  {
    word: 'ذَرِيّ', transliteration: 'dharriyy', meaning: 'atomic', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'تُنْتِجُ المَحَطَّةُ طَاقَةً ذَرِّيَّة', transliteration: 'Tuntijul-mahattatu taqatan dharriyyah', translation: 'The plant produces atomic energy.' },
  },
  {
    word: 'ذِمَّة', transliteration: 'dhimmah', meaning: 'conscience / covenant / responsibility', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَدَّى الأَمَانَةَ عَنْ طِيبِ ذِمَّة', transliteration: 'Adda al-amanata \'an tibi dhimmah', translation: 'He fulfilled the trust with a clear conscience.' },
  },
  {
    word: 'ذُو رَحِمٍ', transliteration: 'dhu rahim', meaning: 'a blood relative / kin', pos: 'noun (compound)',
    synonym: 'قَرِيب (qarib)', antonym: null,
    example: { arabic: 'صِلَةُ ذَوِي الرَّحِمِ وَاجِبَةٌ فِي الإِسْلَام', transliteration: 'Silatu dhawir-rahimi wajibatun fil-islam', translation: 'Maintaining ties with blood relatives is obligatory in Islam.' },
  },
  {
    word: 'ذُو بَأْس', transliteration: 'dhu ba\'s', meaning: 'formidable / of might', pos: 'adjective (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ ذَا بَأْسٍ شَدِيدٍ فِي القِتَال', transliteration: 'Kana dha ba\'sin shadidin fil-qital', translation: 'He was formidable in battle.' },
  },
  {
    word: 'ذَاهِب', transliteration: 'dhahib', meaning: 'going / departing', pos: 'adjective (active participle)',
    synonym: null, antonym: 'عَائِد (returning)',
    example: { arabic: 'أَنَا ذَاهِبٌ إِلَى السُّوقِ الآن', transliteration: 'Ana dhahibun ilas-suqil-an', translation: 'I am going to the market now.' },
  },
  {
    word: 'ذَائِقَة', transliteration: 'dha\'iqah', meaning: 'taste / palate', pos: 'noun',
    synonym: 'ذَوْق (dhawq)', antonym: null,
    example: { arabic: 'يَخْتَلِفُ النَّاسُ فِي ذَائِقَتِهِمُ الفَنِّيَّة', transliteration: 'Yakhtalifun-nasu fi dha\'iqatihimul-fanniyyah', translation: 'People differ in their artistic taste.' },
  },
  {
    word: 'ذَاكِر', transliteration: 'dhakir', meaning: 'one who remembers (Allah)', pos: 'noun / adjective',
    synonym: null, antonym: 'غَافِل (heedless)',
    example: { arabic: 'العَبْدُ الذَّاكِرُ قَرِيبٌ مِنْ رَبِّهِ', transliteration: 'Al-\'abdudh-dhakiru qaribun min rabbih', translation: 'The remembering servant is close to his Lord.' },
  },
  {
    word: 'ذُبُول', transliteration: 'dhubul', meaning: 'withering', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَاحَظَ ذُبُولَ الوَرْدَةِ بَعْدَ يَوْمَيْن', transliteration: 'Lahaza dhubulal-wardati ba\'da yawmayn', translation: 'He noticed the withering of the rose after two days.' },
  },
  {
    word: 'ذَبَلَ', transliteration: 'dhabala', meaning: 'it withered', pos: 'verb',
    synonym: null, antonym: 'اِزْدَهَرَ (flourished)',
    example: { arabic: 'ذَبَلَتِ الزُّهُورُ لِنَقْصِ المَاء', transliteration: 'Dhabalatiz-zuhuru linaqsil-ma\'', translation: 'The flowers withered due to lack of water.' },
  },
  {
    word: 'ذُو مُرُوءَة', transliteration: 'dhu muru\'ah', meaning: 'a person of chivalry / honor', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'وُصِفَ بِأَنَّهُ ذُو مُرُوءَةٍ وَشَهَامَة', transliteration: 'Wusifa bi\'annahu dhu muru\'atin wa shahamah', translation: 'He was described as a man of chivalry and honor.' },
  },
  ],

  'ر': [
  {
      word: 'رَجُل', transliteration: 'rajul', meaning: 'man', pos: 'noun',
      synonym: null, antonym: 'اِمْرَأَة (woman)',
      example: { arabic: 'الرَّجُلُ يَعْمَلُ فِي المَصْنَع', transliteration: 'Ar-rajulu ya\'malu fil-masna\'', translation: 'The man works in the factory.' },
    },
  {
      word: 'رَأَى', transliteration: 'ra\'a', meaning: 'he saw', pos: 'verb',
      synonym: 'شَاهَدَ (shahada)', antonym: null,
      example: { arabic: 'رَأَى قَوْسَ قُزَحَ بَعْدَ المَطَر', transliteration: 'Ra\'a qawsa quzaha ba\'dal-matar', translation: 'He saw a rainbow after the rain.' },
    },
  {
      word: 'رَخِيص', transliteration: 'rakhis', meaning: 'cheap', pos: 'adjective',
      synonym: null, antonym: 'غَالٍ (expensive)',
      example: { arabic: 'هٰذَا الكِتَابُ رَخِيصُ الثَّمَن', transliteration: 'Hadhal-kitabu rakhisuth-thaman', translation: 'This book is cheap in price.' },
    },
  {
      word: 'رَاحَة', transliteration: 'rahah', meaning: 'rest / comfort', pos: 'noun',
      synonym: 'اِسْتِرَاحَة (istirahah)', antonym: 'تَعَب (fatigue)',
      example: { arabic: 'يَحْتَاجُ الجِسْمُ إِلَى الرَّاحَة', transliteration: 'Yahtajul-jismu ilar-rahah', translation: 'The body needs rest.' },
    },
  {
      word: 'رَسَالَة', transliteration: 'risalah', meaning: 'letter / message', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَتَبَتْ رِسَالَةً لِصَدِيقَتِهَا', transliteration: 'Katabat risalatan lisadiqatiha', translation: 'She wrote a letter to her friend.' },
    },
  {
      word: 'رَجَعَ', transliteration: 'raja\'a', meaning: 'he returned', pos: 'verb',
      synonym: 'عَادَ (\'ada)', antonym: 'ذَهَبَ (went)',
      example: { arabic: 'رَجَعَ إِلَى بَيْتِهِ بَعْدَ العَمَل', transliteration: 'Raja\'a ila baytihi ba\'dal-\'amal', translation: 'He returned home after work.' },
    },
  {
      word: 'رِيح', transliteration: 'rih', meaning: 'wind', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'هَبَّتِ الرِّيحُ بِقُوَّةٍ اللَّيْلَة', transliteration: 'Habbatir-rihu biquwwatin al-laylah', translation: 'The wind blew strongly tonight.' },
    },
  {
      word: 'رَفَضَ', transliteration: 'rafada', meaning: 'he refused', pos: 'verb',
      synonym: null, antonym: 'قَبِلَ (accepted)',
      example: { arabic: 'رَفَضَ العَرْضَ لِأَنَّهُ غَيْرُ مُنَاسِب', transliteration: 'Rafadal-\'arda li\'annahu ghayru munasib', translation: 'He refused the offer because it wasn\'t suitable.' },
    },
  {
      word: 'رَخَاء', transliteration: 'rakha\'', meaning: 'prosperity / ease', pos: 'noun',
      synonym: null, antonym: 'شِدَّة (hardship)',
      example: { arabic: 'عَاشَ الشَّعْبُ فِي رَخَاءٍ وَاسْتِقْرَار', transliteration: 'Asha ash-sha\'bu fi rakha\'in wastiqrar', translation: 'The people lived in prosperity and stability.' },
    },
  {
      word: 'رَسْم', transliteration: 'rasm', meaning: 'drawing', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَحَبَّتِ البِنْتُ الرَّسْمَ مُنْذُ الصِّغَر', transliteration: 'Ahabbatil-bintur-rasma mundhus-sighar', translation: 'The girl loved drawing since childhood.' },
    },
  {
      word: 'رَقِيق', transliteration: 'raqiq', meaning: 'thin / gentle', pos: 'adjective',
      synonym: 'لَطِيف (latif)', antonym: 'غَلِيظ (thick / harsh)',
      example: { arabic: 'صَوْتُهَا رَقِيقٌ وَهَادِئ', transliteration: 'Sawtuha raqiqun wa hadi\'', translation: 'Her voice is gentle and calm.' },
    },
  {
      word: 'رَتَّبَ', transliteration: 'rattaba', meaning: 'he arranged / organized', pos: 'verb',
      synonym: 'نَظَّمَ (nazzama)', antonym: 'بَعْثَرَ (scattered)',
      example: { arabic: 'رَتَّبَ كُتُبَهُ عَلَى الرَّفّ', transliteration: 'Rattaba kutubahu \'alar-raff', translation: 'He arranged his books on the shelf.' },
    },
  {
      word: 'رَحْمَة', transliteration: 'rahmah', meaning: 'mercy', pos: 'noun',
      synonym: 'شَفَقَة (shafaqah)', antonym: 'قَسْوَة (cruelty)',
      example: { arabic: 'اللَّهُ وَاسِعُ الرَّحْمَة', transliteration: 'Allahu wasi\'ur-rahmah', translation: 'Allah is vast in mercy.' },
    },
  {
      word: 'رِبْح', transliteration: 'ribh', meaning: 'profit', pos: 'noun',
      synonym: null, antonym: 'خَسَارَة (loss)',
      example: { arabic: 'حَقَّقَ التَّاجِرُ رِبْحًا جَيِّدًا', transliteration: 'Haqqaqat-tajiru ribhan jayyidan', translation: 'The merchant achieved good profit.' },
    },
  {
      word: 'رَخَّصَ', transliteration: 'rakhkhasa', meaning: 'he permitted / licensed', pos: 'verb',
      synonym: 'سَمَحَ (samaha)', antonym: 'مَنَعَ (prevented)',
      example: { arabic: 'رَخَّصَتِ الحُكُومَةُ المَشْرُوعَ الجَدِيد', transliteration: 'Rakhkhasatil-hukumatul-mashru\'al-jadid', translation: 'The government licensed the new project.' },
    },
  {
      word: 'رَغِبَ', transliteration: 'raghiba', meaning: 'he desired / wished', pos: 'verb',
      synonym: 'أَرَادَ (arada)', antonym: 'زَهِدَ (renounced desire)',
      example: { arabic: 'رَغِبَ فِي السَّفَرِ إِلَى مِصْر', transliteration: 'Raghiba fis-safari ila misr', translation: 'He wished to travel to Egypt.' },
    },
  {
      word: 'رِيَاضَة', transliteration: 'riyadah', meaning: 'sport / exercise', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'مُمَارَسَةُ الرِّيَاضَةِ مُفِيدَةٌ لِلصِّحَّة', transliteration: 'Mumarasatur-riyadati mufidatun lissihhah', translation: 'Practicing sport is beneficial for health.' },
    },
  {
      word: 'رَغِيف', transliteration: 'raghif', meaning: 'loaf (of bread)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَى رَغِيفَ خُبْزٍ طَازَج', transliteration: 'Ishtara raghifa khubzin tazaj', translation: 'He bought a loaf of fresh bread.' },
    },
  {
      word: 'رِفْقَة', transliteration: 'rifqah', meaning: 'companionship', pos: 'noun',
      synonym: 'صُحْبَة (suhbah)', antonym: null,
      example: { arabic: 'سَافَرَ فِي رِفْقَةِ أَصْدِقَائِهِ', transliteration: 'Safara fi rifqati asdiqa\'ih', translation: 'He traveled in the company of his friends.' },
    },
  {
      word: 'رَقَبَة', transliteration: 'raqabah', meaning: 'neck', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَبِسَتْ عِقْدًا حَوْلَ رَقَبَتِهَا', transliteration: 'Labisat \'iqdan hawla raqabatiha', translation: 'She wore a necklace around her neck.' },
    },
  {
    word: 'رَجَاء', transliteration: 'raja\'', meaning: 'hope / request', pos: 'noun',
    synonym: 'أَمَل (amal)', antonym: null,
    example: { arabic: 'رَجَاءً سَاعِدْنِي فِي هٰذَا الأَمْر', transliteration: 'Raja\'an sa\'idni fi hadhal-amr', translation: 'Please help me with this matter.' },
  },
  {
    word: 'رَائِع', transliteration: 'ra\'i\'', meaning: 'wonderful', pos: 'adjective',
    synonym: 'مُدْهِش (mudhish)', antonym: null,
    example: { arabic: 'كَانَ الحَفْلُ رَائِعًا', transliteration: 'Kanal-haflu ra\'i\'an', translation: 'The party was wonderful.' },
  },
  {
    word: 'رَغْبَة', transliteration: 'raghbah', meaning: 'desire', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَدَيْهِ رَغْبَةٌ قَوِيَّةٌ فِي التَّعَلُّم', transliteration: 'Ladayhi raghbatun qawiyyatun fit-ta\'allum', translation: 'He has a strong desire to learn.' },
  },
  {
    word: 'رَفِيق', transliteration: 'rafiq', meaning: 'companion', pos: 'noun',
    synonym: 'صَدِيق (sadiq)', antonym: null,
    example: { arabic: 'كَانَ رَفِيقَهُ فِي السَّفَرِ وَالحَضَر', transliteration: 'Kana rafiqahu fis-safari wal-hadar', translation: 'He was his companion in travel and residence.' },
  },
  {
    word: 'رَحَلَ', transliteration: 'rahala', meaning: 'he departed', pos: 'verb',
    synonym: null, antonym: 'أَقَامَ (stayed)',
    example: { arabic: 'رَحَلَ عَنِ القَرْيَةِ بَحْثًا عَنِ العَمَل', transliteration: 'Rahala \'anil-qaryati bahthan \'anil-\'amal', translation: 'He departed from the village in search of work.' },
  },
  {
    word: 'رَمَضَان', transliteration: 'ramadan', meaning: 'Ramadan (the fasting month)', pos: 'proper noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَصُومُ المُسْلِمُونَ شَهْرَ رَمَضَان', transliteration: 'Yasumul-muslimuna shahra ramadan', translation: 'Muslims fast the month of Ramadan.' },
  },
  {
    word: 'رَمَى', transliteration: 'rama', meaning: 'he threw', pos: 'verb',
    synonym: null, antonym: 'اِلْتَقَطَ (picked up)',
    example: { arabic: 'رَمَى الكُرَةَ إِلَى صَدِيقِهِ', transliteration: 'Rama al-kurata ila sadiqih', translation: 'He threw the ball to his friend.' },
  },
  {
    word: 'رِبَاط', transliteration: 'ribat', meaning: 'bond / tie', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الرِّبَاطُ الأُسَرِيُّ قَوِيٌّ بَيْنَهُم', transliteration: 'Ar-ribatul-usariyyu qawiyyun baynahum', translation: 'The family bond is strong among them.' },
  },
  {
    word: 'رُخْصَة', transliteration: 'rukhsah', meaning: 'permit / license', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَصَلَ عَلَى رُخْصَةِ القِيَادَة', transliteration: 'Hasala \'ala rukhsatil-qiyadah', translation: 'He got his driving license.' },
  },
  {
    word: 'رُمَّان', transliteration: 'rummon', meaning: 'pomegranate', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَحَبَّ طَعْمَ الرُّمَّانِ الحَامِض', transliteration: 'Ahabba ta\'mar-rummanil-hamid', translation: 'He liked the sour taste of pomegranate.' },
  },
  {
    word: 'رِوَايَة', transliteration: 'riwayah', meaning: 'novel / narration', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَرَأَ رِوَايَةً طَوِيلَةً هٰذَا الصَّيْف', transliteration: 'Qara\'a riwayatan tawilatan hadhas-sayf', translation: 'He read a long novel this summer.' },
  },
  {
    word: 'رِسَالَة الدُّكْتُورَاه', transliteration: 'risalat ad-duktorah', meaning: 'doctoral thesis', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'نَاقَشَ رِسَالَةَ الدُّكْتُورَاهِ أَمَامَ اللَّجْنَة', transliteration: 'Naqasha risalatad-duktorati amamal-lajnah', translation: 'He defended his doctoral thesis before the committee.' },
  },
  {
    word: 'رَصِيف', transliteration: 'rasif', meaning: 'sidewalk / platform', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مَشَى عَلَى الرَّصِيفِ إِلَى المَحَطَّة', transliteration: 'Masha \'alar-rasifi ilal-mahattah', translation: 'He walked on the sidewalk to the station.' },
  },
  {
    word: 'رَخِمَ', transliteration: 'rakhima', meaning: 'his/its voice softened (rare verb)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'رَخُمَ صَوْتُهَا وَهِيَ تَتْلُو القُرْآن', transliteration: 'Rakhuma sawtuha wa hiya tatlul-qur\'an', translation: 'Her voice softened as she recited the Qur\'an.' },
  },
  {
    word: 'رُعْب', transliteration: 'ru\'b', meaning: 'terror', pos: 'noun',
    synonym: 'خَوْف شَدِيد', antonym: null,
    example: { arabic: 'اِنْتَشَرَ الرُّعْبُ بَيْنَ السُّكَّان', transliteration: 'Intashararr-ru\'bu baynas-sukkan', translation: 'Terror spread among the residents.' },
  },
  {
    word: 'رَبِيع', transliteration: 'rabi\'', meaning: 'spring (season)', pos: 'noun',
    synonym: null, antonym: 'خَرِيف (autumn)',
    example: { arabic: 'تَتَفَتَّحُ الأَزْهَارُ فِي الرَّبِيع', transliteration: 'Tatafattahul-azharu fir-rabi\'', translation: 'Flowers bloom in spring.' },
  },
  {
    word: 'رِبْعِيّ', transliteration: 'rib\'iyy', meaning: 'quarterly', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'يُصْدِرُ تَقْرِيرًا رِبْعِيًّا عَنِ الأَدَاء', transliteration: 'Yusdiru taqriran rib\'iyyan \'anil-ada\'', translation: 'He issues a quarterly report on performance.' },
  },
  {
    word: 'رَقَمَ', transliteration: 'raqama', meaning: 'he numbered', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'رَقَّمَ صَفَحَاتِ الكِتَاب', transliteration: 'Raqqama safahatil-kitab', translation: 'He numbered the pages of the book.' },
  },
  {
    word: 'رَقْم', transliteration: 'raqm', meaning: 'number / digit', pos: 'noun',
    synonym: 'عَدَد (\'adad)', antonym: null,
    example: { arabic: 'أَعْطَاهُ رَقْمَ هَاتِفِهِ', transliteration: 'A\'tahu raqma hatifih', translation: 'He gave him his phone number.' },
  },
  {
    word: 'رَاضٍ', transliteration: 'radin', meaning: 'satisfied / content', pos: 'adjective',
    synonym: null, antonym: 'غَاضِب (angry)',
    example: { arabic: 'كَانَ رَاضِيًا عَنْ نَتِيجَةِ عَمَلِه', transliteration: 'Kana radiyan \'an natijati \'amalih', translation: 'He was satisfied with the result of his work.' },
  },
  {
    word: 'رِيَادَة', transliteration: 'riyadah (leadership)', meaning: 'entrepreneurship / leadership', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَجَّعَ الشَّبَابَ عَلَى رِيَادَةِ الأَعْمَال', transliteration: 'Shajja\'ash-shababa \'ala riyadatil-a\'mal', translation: 'He encouraged the youth toward entrepreneurship.' },
  },
  {
    word: 'رَتِيب', transliteration: 'ratib', meaning: 'monotonous', pos: 'adjective',
    synonym: null, antonym: 'مُتَنَوِّع (varied)',
    example: { arabic: 'شَعَرَ بِالمَلَلِ مِنْ رُوتِينِهِ الرَّتِيب', transliteration: 'Sha\'ara bil-malali min rutinihir-ratib', translation: 'He felt bored with his monotonous routine.' },
  },
  {
    word: 'رِعَايَة', transliteration: 'ri\'ayah', meaning: 'care / sponsorship', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَلَقَّى المَرِيضُ رِعَايَةً طِبِّيَّةً جَيِّدَة', transliteration: 'Talaqqal-maridu ri\'ayatan tibbiyyatan jayyidah', translation: 'The patient received good medical care.' },
  },
  {
    word: 'رَدَّ', transliteration: 'radda', meaning: 'he replied / returned (something)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'رَدَّ عَلَى رِسَالَتِهِ فَوْرًا', transliteration: 'Radda \'ala risalatihi fawran', translation: 'He replied to his letter immediately.' },
  },
  {
    word: 'رَغِيد', transliteration: 'raghid', meaning: 'comfortable / plentiful (life)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'عَاشَ عَيْشًا رَغِيدًا بَعْدَ التَّقَاعُد', transliteration: '\'Asha \'ayshan raghidan ba\'dat-taqa\'ud', translation: 'He lived a comfortable life after retirement.' },
  },
  {
    word: 'رِحْلَة', transliteration: 'rihlah', meaning: 'trip / journey', pos: 'noun',
    synonym: 'سَفَر (safar)', antonym: null,
    example: { arabic: 'خَطَّطُوا لِرِحْلَةٍ طَوِيلَةٍ إِلَى الجَنُوب', transliteration: 'Khattatu lirihlatin tawilatin ilal-janub', translation: 'They planned a long trip to the south.' },
  },
  {
    word: 'رَاقَبَ', transliteration: 'raqaba', meaning: 'he monitored / watched over', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'رَاقَبَ تَقَدُّمَ العَمَلِ يَوْمِيًّا', transliteration: 'Raqaba taqaddumal-\'amali yawmiyyan', translation: 'He monitored the progress of the work daily.' },
  },
  {
    word: 'رَمْل', transliteration: 'raml', meaning: 'sand', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَعِبَ الأَطْفَالُ بِالرَّمْلِ عَلَى الشَّاطِئ', transliteration: 'La\'ibal-atfalu bir-ramli \'alash-shati\'', translation: 'The children played with sand on the beach.' },
  },
  {
    word: 'رِبَحِيّ', transliteration: 'ribhiyy', meaning: 'profitable', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'أَسَّسَ مَشْرُوعًا رِبْحِيًّا نَاجِحًا', transliteration: 'Assasa mashru\'an ribhiyyan najihan', translation: 'He established a successful profitable venture.' },
  },
  {
    word: 'رِفْعَة', transliteration: 'rif\'ah', meaning: 'elevation / high rank', pos: 'noun',
    synonym: null, antonym: 'ضَعَة (lowliness)',
    example: { arabic: 'العِلْمُ يَرْفَعُ صَاحِبَهُ إِلَى الرِّفْعَة', transliteration: 'Al-\'ilmu yarfa\'u sahibahu ilar-rif\'ah', translation: 'Knowledge elevates its possessor to high rank.' },
  },
  ],

  'ز': [
  {
      word: 'زَهْرَة', transliteration: 'zahrah', meaning: 'flower', pos: 'noun',
      synonym: 'وَرْدَة (wardah)', antonym: null,
      example: { arabic: 'قَطَفْتُ زَهْرَةً جَمِيلَةً مِنَ الحَدِيقَة', transliteration: 'Qataftu zahratan jamilatan minal-hadiqah', translation: 'I picked a beautiful flower from the garden.' },
    },
  {
      word: 'زَارَ', transliteration: 'zara', meaning: 'he visited', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'زَارَ جَدَّهُ فِي القَرْيَة', transliteration: 'Zara jaddahu fil-qaryah', translation: 'He visited his grandfather in the village.' },
    },
  {
      word: 'زَمِيل', transliteration: 'zamil', meaning: 'colleague', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'زَمِيلِي فِي العَمَلِ مُتَعَاوِن', transliteration: 'Zamili fil-\'amali muta\'awin', translation: 'My colleague at work is cooperative.' },
    },
  {
      word: 'زَاد', transliteration: 'zada', meaning: 'it increased', pos: 'verb',
      synonym: null, antonym: 'نَقَصَ (decreased)',
      example: { arabic: 'زَادَ عَدَدُ الطُّلَّابِ هٰذَا العَام', transliteration: 'Zada \'adadut-tullabi hadhal-\'am', translation: 'The number of students increased this year.' },
    },
  {
      word: 'زَوْج', transliteration: 'zawj', meaning: 'husband / pair', pos: 'noun',
      synonym: null, antonym: 'زَوْجَة (wife)',
      example: { arabic: 'زَوْجُهَا يَعْمَلُ طَبِيبًا', transliteration: 'Zawjuha ya\'malu tabiban', translation: 'Her husband works as a doctor.' },
    },
  {
      word: 'زَوْجَة', transliteration: 'zawjah', meaning: 'wife', pos: 'noun',
      synonym: null, antonym: 'زَوْج (husband)',
      example: { arabic: 'زَوْجَتُهُ تُعَلِّمُ فِي المَدْرَسَة', transliteration: 'Zawjatuhu tu\'allimu fil-madrasah', translation: 'His wife teaches at the school.' },
    },
  {
      word: 'زَيْت', transliteration: 'zayt', meaning: 'oil', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِسْتَخْدَمَتِ الأُمُّ زَيْتَ الزَّيْتُونِ لِلطَّبْخ', transliteration: 'Istakhdamatil-ummu zaytaz-zaytuni littabkh', translation: 'The mother used olive oil for cooking.' },
    },
  {
      word: 'زَحْمَة', transliteration: 'zahmah', meaning: 'crowd / traffic congestion', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَانَتِ الزَّحْمَةُ شَدِيدَةً فِي الطَّرِيق', transliteration: 'Kanatiz-zahmatu shadidatan fit-tariq', translation: 'The traffic congestion was heavy on the road.' },
    },
  {
      word: 'زَرَعَ', transliteration: 'zara\'a', meaning: 'he planted', pos: 'verb',
      synonym: null, antonym: 'حَصَدَ (harvested)',
      example: { arabic: 'زَرَعَ الفَلَّاحُ القَمْحَ فِي حَقْلِهِ', transliteration: 'Zara\'al-fallahul-qamha fi haqlih', translation: 'The farmer planted wheat in his field.' },
    },
  {
      word: 'زَلْزَال', transliteration: 'zilzal', meaning: 'earthquake', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'ضَرَبَ زِلْزَالٌ قَوِيٌّ المَدِينَة', transliteration: 'Daraba zilzalun qawiyyun al-madinah', translation: 'A strong earthquake hit the city.' },
    },
  {
      word: 'زَخْرَفَة', transliteration: 'zakhrafah', meaning: 'decoration / ornamentation', pos: 'noun',
      synonym: 'زِينَة (zinah)', antonym: null,
      example: { arabic: 'اِشْتُهِرَ المَسْجِدُ بِزَخْرَفَتِهِ الجَمِيلَة', transliteration: 'Ishtuhiral-masjidu bizakhrafatihil-jamilah', translation: 'The mosque became famous for its beautiful decoration.' },
    },
  {
      word: 'زَبُون', transliteration: 'zabun', meaning: 'customer', pos: 'noun',
      synonym: 'عَمِيل (\'amil)', antonym: null,
      example: { arabic: 'رَحَّبَ البَائِعُ بِالزَّبُون', transliteration: 'Rahhabal-ba\'i\'u biz-zabun', translation: 'The seller welcomed the customer.' },
    },
  {
      word: 'زُجَاج', transliteration: 'zujaj', meaning: 'glass', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِنْكَسَرَ الزُّجَاجُ عِنْدَ السُّقُوط', transliteration: 'Inkasaraz-zujaju \'indas-suqut', translation: 'The glass broke upon falling.' },
    },
  {
      word: 'زَيَّنَ', transliteration: 'zayyana', meaning: 'he decorated / adorned', pos: 'verb',
      synonym: null, antonym: 'شَوَّهَ (disfigured)',
      example: { arabic: 'زَيَّنُوا البَيْتَ لِلْعِيد', transliteration: 'Zayyanul-bayta lil-\'id', translation: 'They decorated the house for Eid.' },
    },
  {
      word: 'زَمَن', transliteration: 'zaman', meaning: 'time / era', pos: 'noun',
      synonym: 'وَقْت (waqt)', antonym: null,
      example: { arabic: 'تَغَيَّرَتِ الحَيَاةُ عَبْرَ الزَّمَن', transliteration: 'Taghayyaratil-hayatu \'abraz-zaman', translation: 'Life has changed across time.' },
    },
  {
      word: 'زَاوِيَة', transliteration: 'zawiyah', meaning: 'corner / angle', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَضَعَ الكُرْسِيَّ فِي زَاوِيَةِ الغُرْفَة', transliteration: 'Wada\'al-kursiyya fi zawiyatil-ghurfah', translation: 'He placed the chair in the corner of the room.' },
    },
  {
      word: 'زُهْد', transliteration: 'zuhd', meaning: 'asceticism / renouncing worldly desire', pos: 'noun',
      synonym: null, antonym: 'طَمَع (greed)',
      example: { arabic: 'عُرِفَ الإِمَامُ بِزُهْدِهِ فِي الدُّنْيَا', transliteration: '\'Urifal-imamu bizuhdihi fid-dunya', translation: 'The imam was known for his asceticism regarding worldly life.' },
    },
  {
      word: 'زَلَّة', transliteration: 'zallah', meaning: 'slip / minor error', pos: 'noun',
      synonym: 'هَفْوَة (hafwah)', antonym: null,
      example: { arabic: 'اِعْتَذَرَ عَنْ زَلَّةِ لِسَانِهِ', transliteration: 'I\'tadhara \'an zallati lisanih', translation: 'He apologized for his slip of the tongue.' },
    },
  {
      word: 'زُرْقَة', transliteration: 'zurqah', meaning: 'blueness', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَعْجَبَتْنِي زُرْقَةُ السَّمَاء', transliteration: 'A\'jabatni zurqatus-sama\'', translation: 'The blueness of the sky amazed me.' },
    },
  {
      word: 'زَحَفَ', transliteration: 'zahafa', meaning: 'he crawled', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'بَدَأَ الطِّفْلُ يَزْحَفُ فِي الشَّهْرِ السَّابِع', transliteration: 'Bada\'at-tiflu yazhafu fish-shahris-sabi\'', translation: 'The baby began to crawl in the seventh month.' },
    },
  {
    word: 'زَعِيم', transliteration: 'za\'im', meaning: 'leader', pos: 'noun',
    synonym: 'قَائِد (qa\'id)', antonym: null,
    example: { arabic: 'خَطَبَ الزَّعِيمُ أَمَامَ الجَمَاهِير', transliteration: 'Khataba az-za\'imu amamal-jamahir', translation: 'The leader gave a speech before the crowds.' },
  },
  {
    word: 'زُهُور', transliteration: 'zuhur (flowers)', meaning: 'flowers (plural)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِمْتَلَأَتِ الحَدِيقَةُ بِالزُّهُور', transliteration: 'Imtala\'atil-hadiqatu biz-zuhur', translation: 'The garden was filled with flowers.' },
  },
  {
    word: 'زَبَد', transliteration: 'zabad', meaning: 'foam', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَشَكَّلَ الزَّبَدُ عَلَى سَطْحِ المَوْجَة', transliteration: 'Tashakkalaz-zabadu \'ala sathil-mawjah', translation: 'Foam formed on the surface of the wave.' },
  },
  {
    word: 'زَئِير', transliteration: 'za\'ir', meaning: 'roar (of a lion)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سُمِعَ زَئِيرُ الأَسَدِ مِنْ بَعِيد', transliteration: 'Sumi\'a za\'irul-asadi min ba\'id', translation: 'The lion\'s roar was heard from afar.' },
  },
  {
    word: 'زَيْتُون', transliteration: 'zaytun', meaning: 'olive', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَشْتَهِرُ فِلَسْطِينُ بِشَجَرِ الزَّيْتُون', transliteration: 'Tashtahiru filastinu bishajariz-zaytun', translation: 'Palestine is known for its olive trees.' },
  },
  {
    word: 'زَعْزَعَ', transliteration: 'za\'za\'a', meaning: 'he shook / destabilized', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'زَعْزَعَ الزِّلْزَالُ ثِقَةَ السُّكَّان', transliteration: 'Za\'za\'az-zilzalu thiqatas-sukkan', translation: 'The earthquake shook the residents\' confidence.' },
  },
  {
    word: 'زُبْدَة', transliteration: 'zubdah', meaning: 'butter', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَهَنَتِ الخُبْزَ بِالزُّبْدَة', transliteration: 'Dahanatil-khubza biz-zubdah', translation: 'She spread butter on the bread.' },
  },
  {
    word: 'زَغْرَدَ', transliteration: 'zaghrada', meaning: 'she ululated (celebratory sound)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'زَغْرَدَتِ النِّسَاءُ فَرَحًا بِالعُرْس', transliteration: 'Zaghradatin-nisa\'u farahan bil-\'urs', translation: 'The women ululated joyfully at the wedding.' },
  },
  {
    word: 'زَرَافَة', transliteration: 'zarafah', meaning: 'giraffe', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لِلزَّرَافَةِ رَقَبَةٌ طَوِيلَة', transliteration: 'Lizzarafati raqabatun tawilah', translation: 'The giraffe has a long neck.' },
  },
  {
    word: 'زُقَاق', transliteration: 'zuqaq', meaning: 'alley', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَلَكَ زُقَاقًا ضَيِّقًا لِيَصِلَ أَسْرَع', transliteration: 'Salaka zuqaqan dayyiqan liyasila asra\'', translation: 'He took a narrow alley to arrive faster.' },
  },
  {
    word: 'زَاحِف', transliteration: 'zahif (reptile)', meaning: 'reptile / crawling creature', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الثُّعْبَانُ زَاحِفٌ لَا أَرْجُلَ لَهُ', transliteration: 'Ath-thu\'banu zahifun la arjula lah', translation: 'The snake is a reptile with no legs.' },
  },
  {
    word: 'زُبُون', transliteration: 'zubun', meaning: 'customer (variant of زَبُون)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خَدَمَ الزُّبُونَ بِأَدَبٍ وَاحْتِرَام', transliteration: 'Khadamaz-zubuna bi\'adabin wahtiram', translation: 'He served the customer with courtesy and respect.' },
  },
  {
    word: 'زَاخِر', transliteration: 'zakhir', meaning: 'abundant / teeming', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'المَكْتَبَةُ زَاخِرَةٌ بِالكُتُبِ القَيِّمَة', transliteration: 'Al-maktabatu zakhiratun bil-kutubil-qayyimah', translation: 'The library is teeming with valuable books.' },
  },
  {
    word: 'زَاهِد', transliteration: 'zahid', meaning: 'ascetic / one who renounces worldly desire', pos: 'noun / adjective',
    synonym: null, antonym: null,
    example: { arabic: 'عَاشَ زَاهِدًا فِي مَلَذَّاتِ الدُّنْيَا', transliteration: '\'Asha zahidan fi maladhdhatid-dunya', translation: 'He lived as an ascetic, renouncing worldly pleasures.' },
  },
  {
    word: 'زُمْرَة', transliteration: 'zumrah', meaning: 'group / category', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَنْتَمِي إِلَى زُمْرَةِ العُلَمَاء', transliteration: 'Yantami ila zumratil-\'ulama\'', translation: 'He belongs to the category of scholars.' },
  },
  {
    word: 'زُخْرُف', transliteration: 'zukhruf', meaning: 'ornament / decoration (also worldly adornment)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِغْتَرَّ بِزُخْرُفِ الحَيَاةِ الدُّنْيَا', transliteration: 'Ightarra bizukhrufil-hayatid-dunya', translation: 'He was deceived by the ornament of worldly life.' },
  },
  {
    word: 'زَغَب', transliteration: 'zaghab', meaning: 'fluff / down (feathers)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'غُطِّيَ الفَرْخُ بِزَغَبٍ نَاعِم', transliteration: 'Ghutiyal-farkhu bizaghabin na\'im', translation: 'The chick was covered with soft down.' },
  },
  {
    word: 'زَفِير', transliteration: 'zafir', meaning: 'exhalation / a deep sigh', pos: 'noun',
    synonym: null, antonym: 'شَهِيق (inhalation)',
    example: { arabic: 'أَطْلَقَ زَفِيرًا طَوِيلًا مِنَ التَّعَب', transliteration: 'Atlaqa zafiran tawilan minat-ta\'ab', translation: 'He let out a long sigh from exhaustion.' },
  },
  {
    word: 'زَوَال', transliteration: 'zawal', meaning: 'passing away / demise', pos: 'noun',
    synonym: null, antonym: 'بَقَاء (permanence)',
    example: { arabic: 'الدُّنْيَا إِلَى زَوَال', transliteration: 'Ad-dunya ila zawal', translation: 'This worldly life is passing away.' },
  },
  {
    word: 'زَيْتِيّ', transliteration: 'zaytiyy', meaning: 'oily', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'بَشَرَتُهُ زَيْتِيَّةٌ فِي الصَّيْف', transliteration: 'Basharatuhu zaytiyyatun fis-sayf', translation: 'His skin is oily in the summer.' },
  },
  {
    word: 'زُخَارِف', transliteration: 'zakharif', meaning: 'decorations / ornaments (plural)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَزَيَّنَ المَسْجِدُ بِزَخَارِفَ إِسْلَامِيَّة', transliteration: 'Tazayyanal-masjidu bizakharifa islamiyyah', translation: 'The mosque was adorned with Islamic decorations.' },
  },
  {
    word: 'زُوَّار', transliteration: 'zuwwar', meaning: 'visitors', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَقْبَلَ المَتْحَفُ آلَافَ الزُّوَّار', transliteration: 'Istaqbalal-mathafu alafaz-zuwwar', translation: 'The museum received thousands of visitors.' },
  },
  {
    word: 'زَلْزَلَة', transliteration: 'zalzalah', meaning: 'shaking / quaking', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَعَرَ بِزَلْزَلَةٍ خَفِيفَةٍ فِي مَنْزِلِه', transliteration: 'Sha\'ara bizalzalatin khafifatin fi manzilih', translation: 'He felt a light shaking in his house.' },
  },
  {
    word: 'زَعْتَر', transliteration: 'za\'tar', meaning: 'thyme / za\'atar (herb blend)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَكَلَ الخُبْزَ مَعَ الزَّعْتَرِ وَالزَّيْت', transliteration: 'Akalal-khubza ma\'az-za\'tari waz-zayt', translation: 'He ate bread with za\'atar and oil.' },
  },
  {
    word: 'زُعْرُور', transliteration: 'zu\'rur', meaning: 'hawthorn (a small fruit)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَنْمُو الزُّعْرُورُ فِي المَنَاطِقِ الجَبَلِيَّة', transliteration: 'Yanmuz-zu\'ruru fil-manatiqil-jabaliyyah', translation: 'Hawthorn grows in mountainous areas.' },
  },
  {
    word: 'زُهَاء', transliteration: 'zuha\'', meaning: 'approximately / about (a quantity)', pos: 'adverb',
    synonym: 'حَوَالَي (hawali)', antonym: null,
    example: { arabic: 'حَضَرَ زُهَاءَ مِئَةِ شَخْص', transliteration: 'Hadara zuha\'a mi\'ati shakhs', translation: 'About a hundred people attended.' },
  },
  {
    word: 'زَئِيرُ الأَسَد', transliteration: 'za\'irul-asad', meaning: 'the lion\'s roar (fixed phrase)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'أَرْعَبَ زَئِيرُ الأَسَدِ الحَيَوَانَاتِ الأُخْرَى', transliteration: 'Ar\'aba za\'irul-asadil-hayawanatil-ukhra', translation: 'The lion\'s roar terrified the other animals.' },
  },
  {
    word: 'زَنْبَق', transliteration: 'zanbaq', meaning: 'lily (flower)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَرَعَتْ زَنْبَقًا أَبْيَضَ فِي حَدِيقَتِهَا', transliteration: 'Zara\'at zanbaqan abyada fi hadiqatiha', translation: 'She planted a white lily in her garden.' },
  },
  {
    word: 'زُبَالَة', transliteration: 'zubalah', meaning: 'garbage / trash', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَمَى الزُّبَالَةَ فِي الحَاوِيَة', transliteration: 'Rama az-zubalata fil-hawiyah', translation: 'He threw the garbage in the bin.' },
  },
  {
    word: 'زَكَاة', transliteration: 'zakah', meaning: 'obligatory almsgiving', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَخْرَجَ زَكَاةَ مَالِهِ فِي رَمَضَان', transliteration: 'Akhraja zakata malihi fi ramadan', translation: 'He gave the zakat on his wealth during Ramadan.' },
  },
  ],

  'س': [
  {
      word: 'سَعِيد', transliteration: 'sa\'id', meaning: 'happy', pos: 'adjective',
      synonym: 'فَرِح (farih)', antonym: 'حَزِين (sad)',
      example: { arabic: 'كَانَ سَعِيدًا بِنَجَاحِ ابْنِهِ', transliteration: 'Kana sa\'idan binajahi ibnih', translation: 'He was happy about his son\'s success.' },
    },
  {
      word: 'سَأَلَ', transliteration: 'sa\'ala', meaning: 'he asked', pos: 'verb',
      synonym: null, antonym: 'أَجَابَ (answered)',
      example: { arabic: 'سَأَلَ المُعَلِّمَ عَنِ الدَّرْس', transliteration: 'Sa\'alal-mu\'allima \'anid-dars', translation: 'He asked the teacher about the lesson.' },
    },
  {
      word: 'سَرِيع', transliteration: 'sari\'', meaning: 'fast', pos: 'adjective',
      synonym: null, antonym: 'بَطِيء (slow)',
      example: { arabic: 'القِطَارُ سَرِيعٌ جِدًّا', transliteration: 'Al-qitaru sari\'un jiddan', translation: 'The train is very fast.' },
    },
  {
      word: 'سُوق', transliteration: 'suq', meaning: 'market', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'ذَهَبْنَا إِلَى السُّوقِ لِلتَّسَوُّق', transliteration: 'Dhahabna ilas-suqi littasawwuq', translation: 'We went to the market to shop.' },
    },
  {
      word: 'سَمَاء', transliteration: 'sama\'', meaning: 'sky', pos: 'noun',
      synonym: null, antonym: 'أَرْض (earth)',
      example: { arabic: 'السَّمَاءُ صَافِيَةٌ اليَوْم', transliteration: 'As-sama\'u safiyatun al-yawm', translation: 'The sky is clear today.' },
    },
  {
      word: 'سَاعَدَ', transliteration: 'sa\'ada', meaning: 'he helped', pos: 'verb',
      synonym: 'أَعَانَ (a\'ana)', antonym: 'أَعَاقَ (hindered)',
      example: { arabic: 'سَاعَدَ جَارَهُ فِي حَمْلِ الأَغْرَاض', transliteration: 'Sa\'ada jarahu fi hamlil-aghrad', translation: 'He helped his neighbor carry the belongings.' },
    },
  {
      word: 'سِعْر', transliteration: 'si\'r', meaning: 'price', pos: 'noun',
      synonym: 'ثَمَن (thaman)', antonym: null,
      example: { arabic: 'اِرْتَفَعَ سِعْرُ اللَّحْمِ هٰذَا الشَّهْر', transliteration: 'Irtafa\'a si\'rul-lahmi hadhash-shahr', translation: 'The price of meat rose this month.' },
    },
  {
      word: 'سَمِعَ', transliteration: 'sami\'a', meaning: 'he heard', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'سَمِعَ صَوْتًا غَرِيبًا فِي اللَّيْل', transliteration: 'Sami\'a sawtan gharaban fil-layl', translation: 'He heard a strange sound at night.' },
    },
  {
      word: 'سَلَام', transliteration: 'salam', meaning: 'peace', pos: 'noun',
      synonym: null, antonym: 'حَرْب (war)',
      example: { arabic: 'يَتَمَنَّى الجَمِيعُ عَيْشَ السَّلَام', transliteration: 'Yatamannal-jami\'u \'aysh as-salam', translation: 'Everyone hopes to live in peace.' },
    },
  {
      word: 'سَافَرَ', transliteration: 'safara', meaning: 'he traveled', pos: 'verb',
      synonym: null, antonym: 'أَقَامَ (stayed / resided)',
      example: { arabic: 'سَافَرَ إِلَى مَكَّةَ لِأَدَاءِ العُمْرَة', transliteration: 'Safara ila makkata li\'ada\'il-\'umrah', translation: 'He traveled to Makkah to perform Umrah.' },
    },
  {
      word: 'سَهْل', transliteration: 'sahl', meaning: 'easy', pos: 'adjective',
      synonym: null, antonym: 'صَعْب (difficult)',
      example: { arabic: 'كَانَ الِامْتِحَانُ سَهْلًا هٰذِهِ المَرَّة', transliteration: 'Kanal-imtihanu sahlan hadhihil-marrah', translation: 'The exam was easy this time.' },
    },
  {
      word: 'سِرّ', transliteration: 'sirr', meaning: 'secret', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَخْبَرَنِي بِسِرٍّ لَا يَعْرِفُهُ أَحَد', transliteration: 'Akhbarani bisirrin la ya\'rifuhu ahad', translation: 'He told me a secret that no one else knows.' },
    },
  {
      word: 'سَكَتَ', transliteration: 'sakata', meaning: 'he became silent', pos: 'verb',
      synonym: 'صَمَتَ (samata)', antonym: 'تَحَدَّثَ (spoke)',
      example: { arabic: 'سَكَتَ عِنْدَمَا دَخَلَ المُعَلِّم', transliteration: 'Sakata \'indama dakhalal-mu\'allim', translation: 'He fell silent when the teacher entered.' },
    },
  {
      word: 'سَبَب', transliteration: 'sabab', meaning: 'reason / cause', pos: 'noun',
      synonym: null, antonym: 'نَتِيجَة (result)',
      example: { arabic: 'مَا سَبَبُ تَأَخُّرِك؟', transliteration: 'Ma sababu ta\'akhkhurik?', translation: 'What is the reason for your delay?' },
    },
  {
      word: 'سِكِّين', transliteration: 'sikkin', meaning: 'knife', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَطَّعَ الخُضَارَ بِالسِّكِّين', transliteration: 'Qatta\'al-khudara bis-sikkin', translation: 'He cut the vegetables with the knife.' },
    },
  {
      word: 'سَقَطَ', transliteration: 'saqata', meaning: 'he/it fell', pos: 'verb',
      synonym: null, antonym: 'اِرْتَفَعَ (rose)',
      example: { arabic: 'سَقَطَتِ الأَوْرَاقُ عَنِ الشَّجَرَة', transliteration: 'Saqatatil-awraqu \'anish-shajarah', translation: 'The leaves fell from the tree.' },
    },
  {
      word: 'سَاعَة', transliteration: 'sa\'ah', meaning: 'hour / clock', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِنْتَظَرْتُهُ سَاعَةً كَامِلَة', transliteration: 'Intazartuhu sa\'atan kamilah', translation: 'I waited for him a full hour.' },
    },
  {
      word: 'سِبَاق', transliteration: 'sibaq', meaning: 'race', pos: 'noun',
      synonym: 'مُسَابَقَة (musabaqah)', antonym: null,
      example: { arabic: 'فَازَ بِالسِّبَاقِ بِفَارِقٍ كَبِير', transliteration: 'Faza bis-sibaqi bifariqin kabir', translation: 'He won the race by a large margin.' },
    },
  {
      word: 'سُلْطَة', transliteration: 'sultah', meaning: 'authority / power', pos: 'noun',
      synonym: 'نُفُوذ (nufudh)', antonym: null,
      example: { arabic: 'يَتَمَتَّعُ بِسُلْطَةٍ وَاسِعَةٍ فِي عَمَلِهِ', transliteration: 'Yatamatta\'u bisultatin wasi\'atin fi \'amalih', translation: 'He enjoys wide authority in his work.' },
    },
  {
      word: 'سَبَّبَ', transliteration: 'sabbaba', meaning: 'he caused', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'سَبَّبَتِ العَاصِفَةُ أَضْرَارًا كَبِيرَة', transliteration: 'Sabbabatil-\'asifatu adraran kabirah', translation: 'The storm caused great damage.' },
    },
  {
    word: 'سَفِينَة', transliteration: 'safinah', meaning: 'ship', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَبْحَرَتِ السَّفِينَةُ فِي الصَّبَاح', transliteration: 'Abharatis-safinatu fis-sabah', translation: 'The ship set sail in the morning.' },
  },
  {
    word: 'سَمَك', transliteration: 'samak', meaning: 'fish', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِصْطَادَ الصَّيَّادُ سَمَكًا كَبِيرًا', transliteration: 'Istadas-sayyadu samakan kabiran', translation: 'The fisherman caught a big fish.' },
  },
  {
    word: 'سُكَّر', transliteration: 'sukkar', meaning: 'sugar', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَضَافَتْ مَلْعَقَةَ سُكَّرٍ لِلشَّاي', transliteration: 'Adafat mal\'aqata sukkarin lish-shay', translation: 'She added a spoonful of sugar to the tea.' },
  },
  {
    word: 'سِحْر', transliteration: 'sihr', meaning: 'magic', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَرَّمَ الإِسْلَامُ السِّحْرَ وَتَعَلُّمَه', transliteration: 'Harramal-islamus-sihra wa ta\'allumah', translation: 'Islam forbids magic and learning it.' },
  },
  {
    word: 'سَاحِر', transliteration: 'sahir', meaning: 'magician / captivating', pos: 'noun / adjective',
    synonym: null, antonym: null,
    example: { arabic: 'المَنْظَرُ سَاحِرٌ عِنْدَ الغُرُوب', transliteration: 'Al-manzaru sahirun \'indal-ghurub', translation: 'The view is captivating at sunset.' },
  },
  {
    word: 'سُلَّم', transliteration: 'sullam', meaning: 'ladder', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَعِدَ السُّلَّمَ لِيُصْلِحَ السَّقْف', transliteration: 'Sa\'idas-sullama liyuslihas-saqf', translation: 'He climbed the ladder to fix the roof.' },
  },
  {
    word: 'سَمَاحَة', transliteration: 'samahah', meaning: 'tolerance / graciousness', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَامَلَهُمْ بِسَمَاحَةٍ وَحُسْنِ خُلُق', transliteration: '\'Amalahum bisamahatin wa husni khuluq', translation: 'He treated them with graciousness and good character.' },
  },
  {
    word: 'سَاذَج', transliteration: 'sadhaj', meaning: 'naive', pos: 'adjective',
    synonym: null, antonym: 'دَاهِيَة (shrewd)',
    example: { arabic: 'كَانَ سَاذَجًا فَصَدَّقَ كُلَّ مَا قِيل', transliteration: 'Kana sadhajan fasaddaqa kulla ma qil', translation: 'He was naive so he believed everything said.' },
  },
  {
    word: 'سَبَّاق', transliteration: 'sabbaq', meaning: 'pioneer / one who precedes others', pos: 'noun / adjective',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ سَبَّاقًا فِي مَجَالِ التِّقْنِيَّة', transliteration: 'Kana sabbaqan fi majalit-tiqniyyah', translation: 'He was a pioneer in the field of technology.' },
  },
  {
    word: 'سُكُون', transliteration: 'sukun', meaning: 'stillness', pos: 'noun',
    synonym: 'هُدُوء (hudu\')', antonym: 'حَرَكَة (movement)',
    example: { arabic: 'سَادَ السُّكُونُ المَكَانَ فَجْأَة', transliteration: 'Sadas-sukunul-makana faj\'ah', translation: 'Stillness suddenly overtook the place.' },
  },
  {
    word: 'سَبِيل', transliteration: 'sabil', meaning: 'path / way', pos: 'noun',
    synonym: 'طَرِيق (tariq)', antonym: null,
    example: { arabic: 'جَاهَدَ فِي سَبِيلِ اللَّه', transliteration: 'Jahada fi sabilillah', translation: 'He strove in the path of Allah.' },
  },
  {
    word: 'سَيِّئَة', transliteration: 'sayyi\'ah', meaning: 'bad deed / sin', pos: 'noun',
    synonym: null, antonym: 'حَسَنَة (good deed)',
    example: { arabic: 'اِسْتَغْفَرَ عَنْ كُلِّ سَيِّئَةٍ اِرْتَكَبَهَا', transliteration: 'Istaghfara \'an kulli sayyi\'atin irtakabaha', translation: 'He sought forgiveness for every sin he committed.' },
  },
  {
    word: 'سَطْح', transliteration: 'sath', meaning: 'surface / rooftop', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا عَلَى سَطْحِ المَنْزِل', transliteration: 'Jalasu \'ala sathil-manzil', translation: 'They sat on the rooftop of the house.' },
  },
  {
    word: 'سُلُوك', transliteration: 'suluk', meaning: 'behavior / conduct', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَنْبَغِي أَنْ يَكُونَ سُلُوكُنَا مُوَافِقًا لِأَقْوَالِنَا', transliteration: 'Yanbaghi an yakuna sulukuna muwafiqan li\'aqwalina', translation: 'Our conduct should match our words.' },
  },
  {
    word: 'سِتَار', transliteration: 'sitar', meaning: 'curtain / veil', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَسْدَلَ السِّتَارَ عَلَى النَّافِذَة', transliteration: 'Asdalas-sitara \'alan-nafidhah', translation: 'He drew the curtain over the window.' },
  },
  {
    word: 'سَخَّرَ', transliteration: 'sakhkhara', meaning: 'he subjugated / put to use', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'سَخَّرَ وَقْتَهُ لِخِدْمَةِ مُجْتَمَعِهِ', transliteration: 'Sakhkhara waqtahu likhidmati mujtama\'ih', translation: 'He devoted his time to serving his community.' },
  },
  {
    word: 'سُمْعَة', transliteration: 'sum\'ah', meaning: 'reputation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْرِصُ عَلَى سُمْعَتِهِ الطَّيِّبَة', transliteration: 'Yahrisu \'ala sum\'atihit-tayyibah', translation: 'He is careful about his good reputation.' },
  },
  {
    word: 'سَعَة', transliteration: 'sa\'ah (capacity)', meaning: 'capacity / abundance', pos: 'noun',
    synonym: null, antonym: 'ضِيق (narrowness)',
    example: { arabic: 'أَنْفَقَ مِنْ سَعَةِ مَالِهِ عَلَى الفُقَرَاء', transliteration: 'Anfaqa min sa\'ati malihi \'alal-fuqara\'', translation: 'He spent from his abundant wealth on the poor.' },
  },
  {
    word: 'سُكَّانِيّ', transliteration: 'sukkaniyy', meaning: 'demographic / population-related', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'أَجْرَوْا إِحْصَاءً سُكَّانِيًّا شَامِلًا', transliteration: 'Ajraw ihsa\'an sukkaniyyan shamilan', translation: 'They conducted a comprehensive population census.' },
  },
  {
    word: 'سَاطِع', transliteration: 'sati\'', meaning: 'bright / radiant', pos: 'adjective',
    synonym: null, antonym: 'خَافِت (dim)',
    example: { arabic: 'أَضَاءَ ضَوْءٌ سَاطِعٌ الطَّرِيق', transliteration: 'Ada\'a daw\'un sati\'un at-tariq', translation: 'A bright light illuminated the road.' },
  },
  {
    word: 'سَحَاب', transliteration: 'sahab', meaning: 'clouds', pos: 'noun',
    synonym: 'غَيْم (ghaym)', antonym: null,
    example: { arabic: 'غَطَّى السَّحَابُ قِمَّةَ الجَبَل', transliteration: 'Ghattas-sahabu qimmatal-jabal', translation: 'Clouds covered the mountain peak.' },
  },
  {
    word: 'سَابِق', transliteration: 'sabiq', meaning: 'previous / former', pos: 'adjective',
    synonym: null, antonym: 'لَاحِق (subsequent)',
    example: { arabic: 'كَانَ رَئِيسًا سَابِقًا لِلشَّرِكَة', transliteration: 'Kana ra\'isan sabiqan lish-sharikah', translation: 'He was a former president of the company.' },
  },
  {
    word: 'سَقْف', transliteration: 'saqf', meaning: 'ceiling / roof', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَسَرَّبَ المَاءُ مِنَ السَّقْف', transliteration: 'Tasarrabal-ma\'u minas-saqf', translation: 'Water leaked from the ceiling.' },
  },
  {
    word: 'سَتَرَ', transliteration: 'satara', meaning: 'he covered / concealed', pos: 'verb',
    synonym: null, antonym: 'كَشَفَ (revealed)',
    example: { arabic: 'سَتَرَ عَيْبَ أَخِيهِ وَلَمْ يَفْضَحْهُ', transliteration: 'Satara \'ayba akhihi wa lam yafdahh', translation: 'He concealed his brother\'s fault and did not expose him.' },
  },
  {
    word: 'سِتْر', transliteration: 'sitr', meaning: 'covering / concealment', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اللَّهُ يُحِبُّ السِّتْرَ عَلَى عِبَادِه', transliteration: 'Allahu yuhibbus-sitra \'ala \'ibadih', translation: 'Allah loves to conceal (the faults) of His servants.' },
  },
  {
    word: 'سَمِين', transliteration: 'samin', meaning: 'fat / plump', pos: 'adjective',
    synonym: null, antonym: 'نَحِيف (thin)',
    example: { arabic: 'اِشْتَرَى خَرُوفًا سَمِينًا لِلْعِيد', transliteration: 'Ishtara kharufan saminan lil-\'id', translation: 'He bought a plump sheep for Eid.' },
  },
  {
    word: 'سَرِيرَة', transliteration: 'sarirah', meaning: 'inner self / hidden intention', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اللَّهُ يَعْلَمُ السَّرَائِرَ وَالخَفَايَا', transliteration: 'Allahu ya\'lamus-sara\'ira wal-khafaya', translation: 'Allah knows the innermost selves and hidden matters.' },
  },
  {
    word: 'سُوءُ الظَّنّ', transliteration: 'su\'uz-zann', meaning: 'suspicion / thinking ill of others', pos: 'expression',
    synonym: null, antonym: 'حُسْنُ الظَّنّ (thinking well of others)',
    example: { arabic: 'نَهَى الإِسْلَامُ عَنْ سُوءِ الظَّنِّ بِالنَّاس', transliteration: 'Nahal-islamu \'an su\'iz-zanni bin-nas', translation: 'Islam forbids thinking ill of people.' },
  },
  {
    word: 'سَلِيم', transliteration: 'salim', meaning: 'sound / intact', pos: 'adjective',
    synonym: null, antonym: 'مَعِيب (defective)',
    example: { arabic: 'عَادَ سَالِمًا مِنَ الحَادِث', transliteration: '\'Ada saliman minal-hadith', translation: 'He returned unharmed from the accident.' },
  },
  {
    word: 'سِبَاحَة', transliteration: 'sibahah', meaning: 'swimming', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَلَّمَ السِّبَاحَةَ فِي طُفُولَتِه', transliteration: 'Ta\'allamas-sibahata fi tufulatih', translation: 'He learned swimming in his childhood.' },
  },
  ],

  'ش': [
  {
      word: 'شَمْس', transliteration: 'shams', meaning: 'sun', pos: 'noun',
      synonym: null, antonym: 'قَمَر (moon)',
      example: { arabic: 'أَشْرَقَتِ الشَّمْسُ فِي الصَّبَاح', transliteration: 'Ashraqatish-shamsu fis-sabah', translation: 'The sun rose in the morning.' },
    },
  {
      word: 'شَجَرَة', transliteration: 'shajarah', meaning: 'tree', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'زَرَعْنَا شَجَرَةً فِي الحَدِيقَة', transliteration: 'Zara\'na shajaratan fil-hadiqah', translation: 'We planted a tree in the garden.' },
    },
  {
      word: 'شَرِبَ', transliteration: 'shariba', meaning: 'he drank', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'شَرِبَ كُوبًا مِنَ المَاء', transliteration: 'Shariba kuban minal-ma\'', translation: 'He drank a cup of water.' },
    },
  {
      word: 'شَجَاعَة', transliteration: 'shaja\'ah', meaning: 'courage', pos: 'noun',
      synonym: null, antonym: 'جُبْن (cowardice)',
      example: { arabic: 'وَاجَهَ الخَطَرَ بِشَجَاعَة', transliteration: 'Wajahal-khatara bishaja\'ah', translation: 'He faced the danger with courage.' },
    },
  {
      word: 'شِتَاء', transliteration: 'shita\'', meaning: 'winter', pos: 'noun',
      synonym: null, antonym: 'صَيْف (summer)',
      example: { arabic: 'الجَوُّ بَارِدٌ فِي الشِّتَاء', transliteration: 'Al-jawwu baridun fish-shita\'', translation: 'The weather is cold in winter.' },
    },
  {
      word: 'شَاهَدَ', transliteration: 'shahada', meaning: 'he watched / witnessed', pos: 'verb',
      synonym: 'رَأَى (ra\'a)', antonym: null,
      example: { arabic: 'شَاهَدَ المُبَارَاةَ مَعَ أَصْدِقَائِهِ', transliteration: 'Shahadal-mubarata ma\'a asdiqa\'ih', translation: 'He watched the match with his friends.' },
    },
  {
      word: 'شَكَرَ', transliteration: 'shakara', meaning: 'he thanked', pos: 'verb',
      synonym: null, antonym: 'كَفَرَ (was ungrateful)',
      example: { arabic: 'شَكَرَ اللَّهَ عَلَى نِعَمِهِ', transliteration: 'Shakarallaha \'ala ni\'amih', translation: 'He thanked Allah for His blessings.' },
    },
  {
      word: 'شَديد', transliteration: 'shadid', meaning: 'severe / intense', pos: 'adjective',
      synonym: 'قَوِيّ (qawiyy)', antonym: 'خَفِيف (mild)',
      example: { arabic: 'شَعَرَ بِأَلَمٍ شَدِيدٍ فِي ظَهْرِهِ', transliteration: 'Sha\'ara bi\'alamin shadidin fi zahrih', translation: 'He felt a severe pain in his back.' },
    },
  {
      word: 'شَبَاب', transliteration: 'shabab', meaning: 'youth', pos: 'noun',
      synonym: null, antonym: 'شَيْخُوخَة (old age)',
      example: { arabic: 'الشَّبَابُ عِمَادُ الأُمَّة', transliteration: 'Ash-shababu \'imadul-ummah', translation: 'Youth is the pillar of the nation.' },
    },
  {
      word: 'شَقَّة', transliteration: 'shaqqah', meaning: 'apartment', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِسْتَأْجَرَ شَقَّةً قَرِيبَةً مِنَ العَمَل', transliteration: 'Ista\'jara shaqqatan qaribatan minal-\'amal', translation: 'He rented an apartment near work.' },
    },
  {
      word: 'شَعْر', transliteration: 'sha\'r', meaning: 'hair / poetry', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'شَعْرُهَا طَوِيلٌ وَأَسْوَد', transliteration: 'Sha\'ruha tawilun wa aswad', translation: 'Her hair is long and black.' },
    },
  {
      word: 'شِفَاء', transliteration: 'shifa\'', meaning: 'healing / recovery', pos: 'noun',
      synonym: null, antonym: 'مَرَض (illness)',
      example: { arabic: 'دَعَوْتُ لَهُ بِالشِّفَاءِ العَاجِل', transliteration: 'Da\'awtu lahu bish-shifa\'il-\'ajil', translation: 'I prayed for his quick recovery.' },
    },
  {
      word: 'شَاطِئ', transliteration: 'shati\'', meaning: 'beach / shore', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'مَشَيْنَا عَلَى الشَّاطِئِ عِنْدَ الغُرُوب', transliteration: 'Mashayna \'alash-shati\'i \'indal-ghurub', translation: 'We walked on the beach at sunset.' },
    },
  {
      word: 'شَرِيك', transliteration: 'sharik', meaning: 'partner', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَسَّسَ الشَّرِكَةَ مَعَ شَرِيكِهِ', transliteration: 'Assasash-sharikata ma\'a sharikih', translation: 'He founded the company with his partner.' },
    },
  {
      word: 'شَتَمَ', transliteration: 'shatama', meaning: 'he insulted', pos: 'verb',
      synonym: 'أَهَانَ (ahana)', antonym: 'مَدَحَ (praised)',
      example: { arabic: 'نَهَى الإِسْلَامُ عَنْ أَنْ يَشْتُمَ المُسْلِمُ أَخَاهُ', transliteration: 'Nahal-islamu \'an an yashtumal-muslimu akhah', translation: 'Islam forbids a Muslim from insulting his brother.' },
    },
  {
      word: 'شُكْر', transliteration: 'shukr', meaning: 'gratitude / thanks', pos: 'noun',
      synonym: null, antonym: 'كُفْر (ingratitude)',
      example: { arabic: 'الشُّكْرُ يَزِيدُ النِّعْمَة', transliteration: 'Ash-shukru yazidun-ni\'mah', translation: 'Gratitude increases blessing.' },
    },
  {
      word: 'شَاقّ', transliteration: 'shaqq', meaning: 'strenuous / exhausting', pos: 'adjective',
      synonym: 'مُتْعِب (mut\'ib)', antonym: 'مُرِيح (comfortable)',
      example: { arabic: 'كَانَ العَمَلُ شَاقًّا هٰذَا الأُسْبُوع', transliteration: 'Kanal-\'amalu shaqqan hadhal-usbu\'', translation: 'The work was strenuous this week.' },
    },
  {
      word: 'شَبِيه', transliteration: 'shabih', meaning: 'similar / resembling', pos: 'adjective',
      synonym: 'مُمَاثِل (mumathil)', antonym: 'مُخْتَلِف (different)',
      example: { arabic: 'هٰذَا الوَلَدُ شَبِيهٌ بِأَبِيهِ', transliteration: 'Hadhal-waladu shabihun bi\'abih', translation: 'This boy resembles his father.' },
    },
  {
      word: 'شُهْرَة', transliteration: 'shuhrah', meaning: 'fame', pos: 'noun',
      synonym: null, antonym: 'خُمُول (obscurity)',
      example: { arabic: 'حَقَّقَ شُهْرَةً وَاسِعَةً بَعْدَ الفِلْم', transliteration: 'Haqqaqa shuhratan wasi\'atan ba\'dal-film', translation: 'He achieved wide fame after the film.' },
    },
  {
      word: 'شَعَرَ', transliteration: 'sha\'ara', meaning: 'he felt', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'شَعَرَ بِالفَرَحِ عِنْدَ رُؤْيَتِهِمْ', transliteration: 'Sha\'ara bil-farahi \'inda ru\'yatihim', translation: 'He felt joy upon seeing them.' },
    },
  {
    word: 'شَتَّى', transliteration: 'shatta', meaning: 'various / diverse', pos: 'adjective',
    synonym: 'مُتَنَوِّع (mutanawwi\')', antonym: null,
    example: { arabic: 'نَاقَشُوا مَوَاضِيعَ شَتَّى فِي الِاجْتِمَاع', transliteration: 'Naqashu mawadi\'a shatta fil-ijtima\'', translation: 'They discussed various topics in the meeting.' },
  },
  {
    word: 'شَقِيّ', transliteration: 'shaqiyy', meaning: 'mischievous', pos: 'adjective',
    synonym: null, antonym: 'مُطِيع (obedient)',
    example: { arabic: 'الوَلَدُ شَقِيٌّ وَيُحِبُّ المَرَح', transliteration: 'Al-waladu shaqiyyun wa yuhibbul-marah', translation: 'The boy is mischievous and loves fun.' },
  },
  {
    word: 'شَهْر', transliteration: 'shahr', meaning: 'month', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وُلِدَ فِي شَهْرِ رَمَضَان', transliteration: 'Wulida fi shahri ramadan', translation: 'He was born in the month of Ramadan.' },
  },
  {
    word: 'شَهِيد', transliteration: 'shahid', meaning: 'martyr', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كُرِّمَتْ عَائِلَةُ الشَّهِيدِ فِي الِاحْتِفَال', transliteration: 'Kurrimat \'a\'ilatush-shahidi fil-ihtifal', translation: 'The martyr\'s family was honored at the ceremony.' },
  },
  {
    word: 'شِعَار', transliteration: 'shi\'ar', meaning: 'slogan / emblem', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِخْتَارُوا شِعَارًا مُعَبِّرًا لِلْحَمْلَة', transliteration: 'Ikhtaru shi\'aran mu\'abbiran lil-hamlah', translation: 'They chose an expressive slogan for the campaign.' },
  },
  {
    word: 'شَامِخ', transliteration: 'shamikh', meaning: 'towering / lofty', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'يَقِفُ الجَبَلُ شَامِخًا فَوْقَ السَّحَاب', transliteration: 'Yaqiful-jabalu shamikhan fawqas-sahab', translation: 'The mountain stands lofty above the clouds.' },
  },
  {
    word: 'شَبَكَة', transliteration: 'shabakah', meaning: 'net / network', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِصْطَادَ السَّمَكَ بِالشَّبَكَة', transliteration: 'Istadas-samaka bish-shabakah', translation: 'He caught fish with the net.' },
  },
  {
    word: 'شُرْطِيّ', transliteration: 'shurtiyy', meaning: 'police officer', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَّهَ الشُّرْطِيُّ حَرَكَةَ المُرُور', transliteration: 'Wajjahash-shurtiyyu harakatal-murur', translation: 'The police officer directed the traffic.' },
  },
  {
    word: 'شَاهِد', transliteration: 'shahid (witness)', meaning: 'witness', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَدْلَى الشَّاهِدُ بِشَهَادَتِهِ أَمَامَ القَاضِي', transliteration: 'Adlash-shahidu bishahadatihi amamal-qadi', translation: 'The witness gave his testimony before the judge.' },
  },
  {
    word: 'شَغَف', transliteration: 'shaghaf', meaning: 'passion', pos: 'noun',
    synonym: 'شَغَف بِـ (passionate about)', antonym: null,
    example: { arabic: 'يَرْسُمُ بِشَغَفٍ كَبِيرٍ كُلَّ يَوْم', transliteration: 'Yarsumu bishaghafin kabirin kulla yawm', translation: 'He draws with great passion every day.' },
  },
  {
    word: 'شَاهِق', transliteration: 'shahiq', meaning: 'towering / very tall', pos: 'adjective',
    synonym: 'شَامِخ (shamikh)', antonym: null,
    example: { arabic: 'بُنِيَ بُرْجٌ شَاهِقٌ فِي وَسَطِ المَدِينَة', transliteration: 'Buniya burjun shahiqun fi wasatil-madinah', translation: 'A towering tower was built in the city center.' },
  },
  {
    word: 'شَوْق', transliteration: 'shawq', meaning: 'longing / yearning', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْتَظَرَ عَوْدَتَهُمْ بِشَوْقٍ كَبِير', transliteration: 'Intazara \'awdatahum bishawqin kabir', translation: 'He waited for their return with great longing.' },
  },
  {
    word: 'شَجَّعَ', transliteration: 'shajja\'a', meaning: 'he encouraged', pos: 'verb',
    synonym: null, antonym: 'ثَبَّطَ (discouraged)',
    example: { arabic: 'شَجَّعَ ابْنَهُ عَلَى مُتَابَعَةِ حُلْمِه', transliteration: 'Shajja\'a ibnahu \'ala mutaba\'ati hulmih', translation: 'He encouraged his son to pursue his dream.' },
  },
  {
    word: 'شِرَاء', transliteration: 'shira\'', meaning: 'purchase / buying', pos: 'noun',
    synonym: null, antonym: 'بَيْع (selling)',
    example: { arabic: 'قَرَّرَ شِرَاءَ بَيْتٍ جَدِيد', transliteration: 'Qarrara shira\'a baytin jadid', translation: 'He decided to buy a new house.' },
  },
  {
    word: 'شَاطِر', transliteration: 'shatir', meaning: 'clever / skillful (colloquial)', pos: 'adjective',
    synonym: 'مَاهِر (mahir)', antonym: null,
    example: { arabic: 'الوَلَدُ شَاطِرٌ فِي الرِّيَاضِيَّات', transliteration: 'Al-waladu shatirun fir-riyadiyyat', translation: 'The boy is clever at mathematics.' },
  },
  {
    word: 'شَحَّاذ', transliteration: 'shahhadh', meaning: 'beggar', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَصَدَّقَ عَلَى الشَّحَّاذِ عِنْدَ البَاب', transliteration: 'Tasaddaqa \'alash-shahhadhi \'indal-bab', translation: 'He gave charity to the beggar at the door.' },
  },
  {
    word: 'شَرِسّ', transliteration: 'sharis', meaning: 'fierce / vicious', pos: 'adjective',
    synonym: null, antonym: 'وَدِيع (gentle)',
    example: { arabic: 'كَانَ الكَلْبُ شَرِسًا مَعَ الغُرَبَاء', transliteration: 'Kanal-kalbu sharisan ma\'al-ghuraba\'', translation: 'The dog was fierce toward strangers.' },
  },
  {
    word: 'شَحْم', transliteration: 'shahm', meaning: 'fat (animal fat)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَزَالَ الشَّحْمَ عَنِ اللَّحْم', transliteration: 'Azalash-shahma \'anil-lahm', translation: 'He removed the fat from the meat.' },
  },
  {
    word: 'شِبْه', transliteration: 'shibh', meaning: 'resemblance / semi-', pos: 'noun / prefix',
    synonym: null, antonym: null,
    example: { arabic: 'يُوجَدُ شِبْهٌ كَبِيرٌ بَيْنَ الأَخَوَيْن', transliteration: 'Yujadu shibhun kabirun baynal-akhawayn', translation: 'There is a great resemblance between the two brothers.' },
  },
  {
    word: 'شَدَّ', transliteration: 'shadda', meaning: 'he pulled tight / tightened', pos: 'verb',
    synonym: null, antonym: 'أَرْخَى (loosened)',
    example: { arabic: 'شَدَّ الحَبْلَ لِيُثَبِّتَ الخَيْمَة', transliteration: 'Shaddal-habla liyuthabbital-khaymah', translation: 'He pulled the rope tight to secure the tent.' },
  },
  {
    word: 'شُرُود', transliteration: 'shurud', meaning: 'absent-mindedness / straying', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَاحَظَ المُعَلِّمُ شُرُودَ الطَّالِبِ فِي الدَّرْس', transliteration: 'Lahazal-mu\'allimu shurudat-talibi fid-dars', translation: 'The teacher noticed the student\'s absent-mindedness in the lesson.' },
  },
  {
    word: 'شَعِيرَة', transliteration: 'sha\'irah', meaning: 'religious rite', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الحَجُّ مِنْ أَعْظَمِ شَعَائِرِ الإِسْلَام', transliteration: 'Al-hajju min a\'zami sha\'a\'iril-islam', translation: 'Hajj is among the greatest rites of Islam.' },
  },
  {
    word: 'شَاسِع', transliteration: 'shasi\'', meaning: 'vast / extensive', pos: 'adjective',
    synonym: 'وَاسِع (wasi\')', antonym: null,
    example: { arabic: 'تَمْتَدُّ الصَّحْرَاءُ عَلَى مَسَافَاتٍ شَاسِعَة', transliteration: 'Tamtaddus-sahra\'u \'ala masafatin shasi\'ah', translation: 'The desert extends over vast distances.' },
  },
  {
    word: 'شَحَنَ', transliteration: 'shahana', meaning: 'he charged / loaded', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'شَحَنَ هَاتِفَهُ قَبْلَ النَّوْم', transliteration: 'Shahana hatifahu qablan-nawm', translation: 'He charged his phone before sleeping.' },
  },
  {
    word: 'شَاحِنَة', transliteration: 'shahinah', meaning: 'truck', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَقَلَتِ الشَّاحِنَةُ البَضَائِعَ إِلَى السُّوق', transliteration: 'Naqalatish-shahinatul-bada\'i\'a ilas-suq', translation: 'The truck transported the goods to the market.' },
  },
  {
    word: 'شَظِيَّة', transliteration: 'shaziyyah', meaning: 'splinter / fragment', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَخَلَتْ شَظِيَّةٌ صَغِيرَةٌ فِي إِصْبَعِه', transliteration: 'Dakhalat shaziyyatun saghiratun fi isba\'ih', translation: 'A small splinter entered his finger.' },
  },
  {
    word: 'شَاقُول', transliteration: 'shaqul', meaning: 'plumb line (tool)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ البَنَّاءُ الشَّاقُولَ لِلتَّأَكُّدِ مِنِ اسْتِقَامَةِ الجِدَار', transliteration: 'Istakhdamal-banna\'ush-shaqula littta\'akkudi min istiqamatil-jidar', translation: 'The builder used the plumb line to check the wall was straight.' },
  },
  {
    word: 'شَمَال', transliteration: 'shamal', meaning: 'north', pos: 'noun',
    synonym: null, antonym: 'جَنُوب (south)',
    example: { arabic: 'تَقَعُ المَدِينَةُ فِي شَمَالِ البِلَاد', transliteration: 'Taqa\'ul-madinatu fi shamalil-bilad', translation: 'The city is located in the north of the country.' },
  },
  {
    word: 'شَتْلَة', transliteration: 'shatlah', meaning: 'seedling', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَرَعَ شَتْلَةَ زَيْتُونٍ فِي حَدِيقَتِه', transliteration: 'Zara\'a shatlata zaytunin fi hadiqatih', translation: 'He planted an olive seedling in his garden.' },
  },
  {
    word: 'شِرَاع', transliteration: 'shira\' (sail)', meaning: 'sail (of a boat)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَفَعَ البَحَّارُ الشِّرَاعَ لِيَنْطَلِقَ القَارِب', transliteration: 'Rafa\'al-bahharush-shira\'a liyantaliqal-qarib', translation: 'The sailor raised the sail so the boat could set off.' },
  },
  ],

  'ص': [
  {
      word: 'صَبَاح', transliteration: 'sabah', meaning: 'morning', pos: 'noun',
      synonym: null, antonym: 'مَسَاء (evening)',
      example: { arabic: 'أَسْتَيْقِظُ كُلَّ صَبَاحٍ بَاكِرًا', transliteration: 'Astayqizu kulla sabahin bakiran', translation: 'I wake up early every morning.' },
    },
  {
      word: 'صَغِير', transliteration: 'saghir', meaning: 'small', pos: 'adjective',
      synonym: null, antonym: 'كَبِير (big)',
      example: { arabic: 'لَهُ أَخٌ صَغِيرٌ فِي الرَّابِعَة', transliteration: 'Lahu akhun saghirun fir-rabi\'ah', translation: 'He has a little brother who is four.' },
    },
  {
      word: 'صَدِيق', transliteration: 'sadiq', meaning: 'friend', pos: 'noun',
      synonym: 'رَفِيق (rafiq)', antonym: 'عَدُوّ (enemy)',
      example: { arabic: 'صَدِيقِي يُسَاعِدُنِي دَائِمًا', transliteration: 'Sadiqi yusa\'iduni da\'iman', translation: 'My friend always helps me.' },
    },
  {
      word: 'صَحّ', transliteration: 'sahh', meaning: 'correct / true', pos: 'adjective',
      synonym: 'صَحِيح (sahih)', antonym: 'خَطَأ (wrong)',
      example: { arabic: 'جَوَابُهُ صَحٌّ وَدَقِيق', transliteration: 'Jawabuhu sahhun wa daqiq', translation: 'His answer is correct and precise.' },
    },
  {
      word: 'صَبَرَ', transliteration: 'sabara', meaning: 'he was patient', pos: 'verb',
      synonym: null, antonym: 'جَزِعَ (was anxious/impatient)',
      example: { arabic: 'صَبَرَ عَلَى المَرَضِ حَتَّى شُفِيَ', transliteration: 'Sabara \'alal-maradi hatta shufiya', translation: 'He was patient through the illness until he recovered.' },
    },
  {
      word: 'صَوْت', transliteration: 'sawt', meaning: 'voice / sound', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَمِعْتُ صَوْتَهُ مِنْ بَعِيد', transliteration: 'Sami\'tu sawtahu min ba\'id', translation: 'I heard his voice from afar.' },
    },
  {
      word: 'صَعْب', transliteration: 'sa\'b', meaning: 'difficult', pos: 'adjective',
      synonym: null, antonym: 'سَهْل (easy)',
      example: { arabic: 'كَانَ السُّؤَالُ صَعْبًا عَلَى الجَمِيع', transliteration: 'Kanas-su\'alu sa\'ban \'alal-jami\'', translation: 'The question was difficult for everyone.' },
    },
  {
      word: 'صَحَّةَ', transliteration: 'sihhah', meaning: 'health', pos: 'noun',
      synonym: null, antonym: 'مَرَض (illness)',
      example: { arabic: 'الصِّحَّةُ تَاجٌ عَلَى رُءُوسِ الأَصِحَّاء', transliteration: 'As-sihhatu tajun \'ala ru\'usil-ashihha\'', translation: 'Health is a crown on the heads of the healthy.' },
    },
  {
      word: 'صَنَعَ', transliteration: 'sana\'a', meaning: 'he made / manufactured', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'صَنَعَ كُرْسِيًّا مِنَ الخَشَب', transliteration: 'Sana\'a kursiyyan minal-khashab', translation: 'He made a chair from wood.' },
    },
  {
      word: 'صُنْدُوق', transliteration: 'sunduq', meaning: 'box', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَضَعَ الأَلْعَابَ فِي الصُّنْدُوق', transliteration: 'Wada\'al-al\'aba fis-sunduq', translation: 'He put the toys in the box.' },
    },
  {
      word: 'صَافِي', transliteration: 'safi', meaning: 'clear / pure', pos: 'adjective',
      synonym: 'نَقِيّ (naqiyy)', antonym: 'كَدِر (murky)',
      example: { arabic: 'المَاءُ صَافٍ فِي هٰذِهِ البُحَيْرَة', transliteration: 'Al-ma\'u safin fi hadhihil-buhayrah', translation: 'The water is clear in this lake.' },
    },
  {
      word: 'صَيَّاد', transliteration: 'sayyad', meaning: 'hunter / fisherman', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'خَرَجَ الصَّيَّادُ فِي الصَّبَاحِ البَاكِر', transliteration: 'Kharajas-sayyadu fis-sabahil-bakir', translation: 'The fisherman went out early in the morning.' },
    },
  {
      word: 'صُورَة', transliteration: 'surah', meaning: 'picture / image', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِلْتَقَطَ صُورَةً جَمِيلَةً لِلْغُرُوب', transliteration: 'Iltaqata suratan jamilatan lilghurub', translation: 'He took a beautiful picture of the sunset.' },
    },
  {
      word: 'صَلَاح', transliteration: 'salah', meaning: 'righteousness / goodness', pos: 'noun',
      synonym: null, antonym: 'فَسَاد (corruption)',
      example: { arabic: 'دَعَا اللَّهَ لَهُ بِالصَّلَاحِ وَالتَّوْفِيق', transliteration: 'Da\'allaha lahu bis-salahi wat-tawfiq', translation: 'He prayed to Allah for righteousness and success for him.' },
    },
  {
      word: 'صَرَخَ', transliteration: 'sarakha', meaning: 'he screamed / shouted', pos: 'verb',
      synonym: null, antonym: 'هَمَسَ (whispered)',
      example: { arabic: 'صَرَخَ طَلَبًا لِلنَّجْدَة', transliteration: 'Sarakha talaban lin-najdah', translation: 'He screamed asking for help.' },
    },
  {
      word: 'صِنَاعَة', transliteration: 'sina\'ah', meaning: 'industry / craft', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَتَطَوَّرُ الصِّنَاعَةُ فِي البِلَاد', transliteration: 'Tatatawwarus-sina\'atu fil-bilad', translation: 'Industry is developing in the country.' },
    },
  {
      word: 'صَدَقَ', transliteration: 'sadaqa', meaning: 'he told the truth', pos: 'verb',
      synonym: null, antonym: 'كَذَبَ (lied)',
      example: { arabic: 'صَدَقَ فِي رِوَايَتِهِ لِلْحَادِثَة', transliteration: 'Sadaqa fi riwayatihi lil-hadithah', translation: 'He told the truth in his account of the incident.' },
    },
  {
      word: 'صَعِدَ', transliteration: 'sa\'ida', meaning: 'he climbed / went up', pos: 'verb',
      synonym: null, antonym: 'نَزَلَ (descended)',
      example: { arabic: 'صَعِدَ الدَّرَجَ إِلَى الطَّابِقِ الثَّانِي', transliteration: 'Sa\'idad-daraja ilat-tabiqith-thani', translation: 'He climbed the stairs to the second floor.' },
    },
  {
      word: 'صَيْف', transliteration: 'sayf', meaning: 'summer', pos: 'noun',
      synonym: null, antonym: 'شِتَاء (winter)',
      example: { arabic: 'نَزُورُ البَحْرَ فِي الصَّيْف', transliteration: 'Nazurul-bahra fis-sayf', translation: 'We visit the sea in summer.' },
    },
  {
      word: 'صِدْق', transliteration: 'sidq', meaning: 'honesty / truthfulness', pos: 'noun',
      synonym: 'حَقّ (haqq)', antonym: 'كَذِب (lying)',
      example: { arabic: 'الصِّدْقُ مِنْ أَعْظَمِ الأَخْلَاق', transliteration: 'As-sidqu min a\'zamil-akhlaq', translation: 'Honesty is among the greatest of characters.' },
    },
  {
    word: 'صَخْرَة', transliteration: 'sakhrah', meaning: 'rock / boulder', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسَ عَلَى صَخْرَةٍ كَبِيرَة', transliteration: 'Jalasa \'ala sakhratin kabirah', translation: 'He sat on a large boulder.' },
  },
  {
    word: 'صَامِت', transliteration: 'samit', meaning: 'silent', pos: 'adjective',
    synonym: 'سَاكِت (sakit)', antonym: 'صَاخِب (noisy)',
    example: { arabic: 'ظَلَّ صَامِتًا طَوَالَ الِاجْتِمَاع', transliteration: 'Zalla samitan tiwalal-ijtima\'', translation: 'He remained silent throughout the meeting.' },
  },
  {
    word: 'صَامِد', transliteration: 'samid', meaning: 'steadfast / resilient', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'بَقِيَ صَامِدًا رَغْمَ كُلِّ الصِّعَاب', transliteration: 'Baqiya samidan raghma kullis-si\'ab', translation: 'He remained steadfast despite all difficulties.' },
  },
  {
    word: 'صَدْر', transliteration: 'sadr', meaning: 'chest', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ يَدَهُ عَلَى صَدْرِه', transliteration: 'Wada\'a yadahu \'ala sadrih', translation: 'He put his hand on his chest.' },
  },
  {
    word: 'صِرَاع', transliteration: 'sira\'', meaning: 'conflict / struggle', pos: 'noun',
    synonym: null, antonym: 'وِئَام (harmony)',
    example: { arabic: 'اِنْتَهَى الصِّرَاعُ بَعْدَ سَنَوَاتٍ طَوِيلَة', transliteration: 'Intahas-sira\'u ba\'da sanawatin tawilah', translation: 'The conflict ended after long years.' },
  },
  {
    word: 'صَقْر', transliteration: 'saqr', meaning: 'falcon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَلَّقَ الصَّقْرُ عَالِيًا فِي السَّمَاء', transliteration: 'Hallaqas-saqru \'aliyan fis-sama\'', translation: 'The falcon soared high in the sky.' },
  },
  {
    word: 'صَنْدَل', transliteration: 'sandal', meaning: 'sandal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَبِسَ صَنْدَلًا مُرِيحًا لِلْمَشْي', transliteration: 'Labisa sandalan murihan lil-mashy', translation: 'He wore comfortable sandals for walking.' },
  },
  {
    word: 'صُعُوبَة', transliteration: 'su\'ubah', meaning: 'difficulty', pos: 'noun',
    synonym: null, antonym: 'سُهُولَة (ease)',
    example: { arabic: 'وَاجَهَ صُعُوبَةً فِي فَهْمِ الدَّرْس', transliteration: 'Wajaha su\'ubatan fi fahmid-dars', translation: 'He faced difficulty understanding the lesson.' },
  },
  {
    word: 'صُنَّاع', transliteration: 'sunna\'', meaning: 'craftsmen / makers', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'صُنَّاعُ القَرَارِ يَتَحَمَّلُونَ مَسْؤُولِيَّةً كَبِيرَة', transliteration: 'Sunna\'ul-qarari yatahammaluna mas\'uliyyatan kabirah', translation: 'Decision makers bear great responsibility.' },
  },
  {
    word: 'صَافَحَ', transliteration: 'safaha', meaning: 'he shook hands', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'صَافَحَ ضُيُوفَهُ عِنْدَ البَاب', transliteration: 'Safaha duyufahu \'indal-bab', translation: 'He shook his guests\' hands at the door.' },
  },
  {
    word: 'صَبُور', transliteration: 'sabur', meaning: 'patient (as a character trait)', pos: 'adjective',
    synonym: null, antonym: 'عَجُول (impatient)',
    example: { arabic: 'كَانَ صَبُورًا مَعَ أَطْفَالِهِ الصِّغَار', transliteration: 'Kana saburan ma\'a atfalihis-sighar', translation: 'He was patient with his young children.' },
  },
  {
    word: 'صَحْرَاء', transliteration: 'sahra\'', meaning: 'desert', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَمْتَدُّ الصَّحْرَاءُ الكُبْرَى عَبْرَ عِدَّةِ دُوَل', transliteration: 'Tamtaddus-sahra\'ul-kubra \'abra \'iddati duwal', translation: 'The great desert extends across several countries.' },
  },
  {
    word: 'صَدِئَ', transliteration: 'sadi\'a', meaning: 'it rusted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'صَدِئَتِ المِسْمَارُ بَعْدَ المَطَر', transliteration: 'Sadi\'atil-mismaru ba\'dal-matar', translation: 'The nail rusted after the rain.' },
  },
  {
    word: 'صُدُور', transliteration: 'sudur', meaning: 'chests (plural) / issuance', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْتَظَرُوا صُدُورَ القَرَارِ الرَّسْمِيّ', transliteration: 'Intazaru sudural-qarariar-rasmiyy', translation: 'They waited for the official decision to be issued.' },
  },
  {
    word: 'صِفَة', transliteration: 'sifah', meaning: 'trait / attribute', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الكَرَمُ صِفَةٌ حَمِيدَة', transliteration: 'Al-karamu sifatun hamidah', translation: 'Generosity is a praiseworthy trait.' },
  },
  {
    word: 'صَفْحَة', transliteration: 'safhah', meaning: 'page', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَرَأَ عِشْرِينَ صَفْحَةً قَبْلَ النَّوْم', transliteration: 'Qara\'a \'ishrina safhatan qablan-nawm', translation: 'He read twenty pages before sleeping.' },
  },
  {
    word: 'صُلْب', transliteration: 'sulb', meaning: 'hard / firm', pos: 'adjective',
    synonym: 'قَوِيّ (qawiyy)', antonym: 'هَشّ (fragile)',
    example: { arabic: 'المَعْدِنُ الصُّلْبُ لَا يَنْثَنِي بِسُهُولَة', transliteration: 'Al-ma\'dinus-sulbu la yanthani bisuhulah', translation: 'Hard metal does not bend easily.' },
  },
  {
    word: 'صُلْح', transliteration: 'sulh', meaning: 'reconciliation / peace settlement', pos: 'noun',
    synonym: null, antonym: 'خِصَام (dispute)',
    example: { arabic: 'تَمَّ الصُّلْحُ بَيْنَ القَبِيلَتَيْن', transliteration: 'Tammas-sulhu baynal-qabilatayn', translation: 'Reconciliation was achieved between the two tribes.' },
  },
  {
    word: 'صَمَّمَ', transliteration: 'sammama', meaning: 'he designed / resolved firmly', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'صَمَّمَ المُهَنْدِسُ خَرِيطَةَ المَبْنَى', transliteration: 'Sammamal-muhandisu kharitatal-mabna', translation: 'The engineer designed the building\'s blueprint.' },
  },
  {
    word: 'صُنْع', transliteration: 'sun\'', meaning: 'making / manufacture', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'هٰذَا المُنْتَجُ مِنْ صُنْعِ أَيْدٍ مَاهِرَة', transliteration: 'Hadhal-muntaju min sun\'i aydin mahirah', translation: 'This product is made by skilled hands.' },
  },
  {
    word: 'صَوَاب', transliteration: 'sawab', meaning: 'correctness / the right course', pos: 'noun',
    synonym: null, antonym: 'خَطَأ (error)',
    example: { arabic: 'رَجَعَ إِلَى الصَّوَابِ بَعْدَ النَّصِيحَة', transliteration: 'Raja\'a ilas-sawabi ba\'dan-nasihah', translation: 'He returned to the right course after the advice.' },
  },
  {
    word: 'صَرَاحَة', transliteration: 'sarahah', meaning: 'frankness / candor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَحَدَّثَ بِصَرَاحَةٍ عَنْ مَشَاعِرِه', transliteration: 'Tahaddatha bisarahatin \'an masha\'irih', translation: 'He spoke frankly about his feelings.' },
  },
  {
    word: 'صَرِيح', transliteration: 'sarih', meaning: 'frank / explicit', pos: 'adjective',
    synonym: null, antonym: 'مُبْهَم (vague)',
    example: { arabic: 'أَعْطَاهُ جَوَابًا صَرِيحًا', transliteration: 'A\'tahu jawaban sarihan', translation: 'He gave him a frank answer.' },
  },
  {
    word: 'صَفَاء', transliteration: 'safa\'', meaning: 'clarity / purity', pos: 'noun',
    synonym: null, antonym: 'كَدَر (murkiness)',
    example: { arabic: 'اِسْتَمَتَعَ بِصَفَاءِ السَّمَاءِ لَيْلًا', transliteration: 'Istamta\'a bisafa\'is-sama\'i laylan', translation: 'He enjoyed the clarity of the sky at night.' },
  },
  {
    word: 'صَنَم', transliteration: 'sanam', meaning: 'idol', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَطَّمَ النَّبِيُّ الأَصْنَامَ فِي الكَعْبَة', transliteration: 'Hattamamn-nabiyyul-asnama fil-ka\'bah', translation: 'The Prophet destroyed the idols in the Ka\'bah.' },
  },
  {
    word: 'صَهْر', transliteration: 'sahr', meaning: 'son-in-law', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَحَبَّ صِهْرَهُ كَأَنَّهُ اِبْنُه', transliteration: 'Ahabba sihrahu ka\'annahu ibnuh', translation: 'He loved his son-in-law as if he were his own son.' },
  },
  {
    word: 'صَمِيم', transliteration: 'samim', meaning: 'core / very heart of something', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'هٰذَا فِي صَمِيمِ اهْتِمَامَاتِه', transliteration: 'Hadha fi samimi ihtimamatih', translation: 'This is at the very core of his interests.' },
  },
  {
    word: 'صَوْلَجَان', transliteration: 'sawlajan', meaning: 'scepter', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَمَلَ المَلِكُ صَوْلَجَانَهُ الذَّهَبِيّ', transliteration: 'Hamalal-maliku sawlajanahudh-dhahabiyy', translation: 'The king carried his golden scepter.' },
  },
  {
    word: 'صِيَام', transliteration: 'siyam', meaning: 'fasting', pos: 'noun',
    synonym: 'صَوْم (sawm)', antonym: null,
    example: { arabic: 'الصِّيَامُ رُكْنٌ مِنْ أَرْكَانِ الإِسْلَام', transliteration: 'As-siyamu ruknun min arkanil-islam', translation: 'Fasting is a pillar of Islam.' },
  },
  {
    word: 'صَاعِقَة', transliteration: 'sa\'iqah', meaning: 'thunderbolt / lightning strike', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ضَرَبَتِ الصَّاعِقَةُ شَجَرَةً كَبِيرَة', transliteration: 'Darabatis-sa\'iqatu shajaratan kabirah', translation: 'The thunderbolt struck a large tree.' },
  },
  ],

  'ض': [
  {
      word: 'ضَحِكَ', transliteration: 'dahika', meaning: 'he laughed', pos: 'verb',
      synonym: null, antonym: 'بَكَى (cried)',
      example: { arabic: 'ضَحِكَ الأَطْفَالُ بِفَرَحٍ', transliteration: 'Dahikal-atfalu bifarahin', translation: 'The children laughed joyfully.' },
    },
  {
      word: 'ضَعِيف', transliteration: 'da\'if', meaning: 'weak', pos: 'adjective',
      synonym: null, antonym: 'قَوِيّ (strong)',
      example: { arabic: 'كَانَ ضَعِيفًا بَعْدَ المَرَض', transliteration: 'Kana da\'ifan ba\'dal-marad', translation: 'He was weak after the illness.' },
    },
  {
      word: 'ضَوْء', transliteration: 'daw\'', meaning: 'light', pos: 'noun',
      synonym: 'نُور (nur)', antonym: 'ظَلَام (darkness)',
      example: { arabic: 'أَضَاءَ ضَوْءُ القَمَرِ اللَّيْل', transliteration: 'Ada\'a daw\'ul-qamaril-layl', translation: 'The moonlight illuminated the night.' },
    },
  {
      word: 'ضَاعَ', transliteration: 'da\'a', meaning: 'it got lost', pos: 'verb',
      synonym: null, antonym: 'وُجِدَ (was found)',
      example: { arabic: 'ضَاعَتْ مَفَاتِيحُهُ فِي السُّوق', transliteration: 'Da\'at mafatihuhu fis-suq', translation: 'His keys got lost in the market.' },
    },
  {
      word: 'ضَرَبَ', transliteration: 'daraba', meaning: 'he hit / struck', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'ضَرَبَ الكُرَةَ بِقُوَّة', transliteration: 'Darabal-kurata biquwwah', translation: 'He struck the ball with force.' },
    },
  {
      word: 'ضِيَافَة', transliteration: 'diyafah', meaning: 'hospitality', pos: 'noun',
      synonym: 'كَرَم (karam)', antonym: null,
      example: { arabic: 'اِشْتُهِرَ العَرَبُ بِكَرَمِ الضِّيَافَة', transliteration: 'Ishtuhiral-\'arabu bikaramid-diyafah', translation: 'The Arabs became famous for generous hospitality.' },
    },
  {
      word: 'ضَخْم', transliteration: 'dakhm', meaning: 'huge / massive', pos: 'adjective',
      synonym: 'كَبِير جِدًّا', antonym: 'صَغِير (small)',
      example: { arabic: 'بَنَوْا مَبْنًى ضَخْمًا فِي وَسَطِ المَدِينَة', transliteration: 'Banaw mabnan dakhman fi wasatil-madinah', translation: 'They built a huge building in the city center.' },
    },
  {
      word: 'ضَمِير', transliteration: 'damir', meaning: 'conscience / pronoun', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَخَزَهُ ضَمِيرُهُ بَعْدَ الكَذِب', transliteration: 'Wakhazahu damiruhu ba\'dal-kadhib', translation: 'His conscience pricked him after lying.' },
    },
  {
      word: 'ضَيْف', transliteration: 'dayf', meaning: 'guest', pos: 'noun',
      synonym: null, antonym: 'مُضِيف (host)',
      example: { arabic: 'اِسْتَقْبَلَ الضَّيْفَ بِتَرْحَابٍ كَبِير', transliteration: 'Istaqbalad-dayfa bitarhabin kabir', translation: 'He welcomed the guest with great warmth.' },
    },
  {
      word: 'ضَغَطَ', transliteration: 'daghata', meaning: 'he pressed / pressured', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'ضَغَطَ عَلَى الزِّرِّ لِتَشْغِيلِ الجِهَاز', transliteration: 'Daghata \'alaz-zirri litashghilil-jihaz', translation: 'He pressed the button to turn on the device.' },
    },
  {
      word: 'ضَرُورَة', transliteration: 'darurah', meaning: 'necessity', pos: 'noun',
      synonym: 'حَاجَة (hajah)', antonym: null,
      example: { arabic: 'التَّعْلِيمُ ضَرُورَةٌ لِكُلِّ إِنْسَان', transliteration: 'At-ta\'limu darurah likulli insan', translation: 'Education is a necessity for every person.' },
    },
  {
      word: 'ضَبَابِيّ', transliteration: 'dababiyy', meaning: 'foggy / hazy', pos: 'adjective',
      synonym: null, antonym: 'صَافٍ (clear)',
      example: { arabic: 'كَانَ الطَّقْسُ ضَبَابِيًّا هٰذَا الصَّبَاح', transliteration: 'Kanat-taqsu dababiyyan hadhas-sabah', translation: 'The weather was foggy this morning.' },
    },
  {
      word: 'ضَمَانَة', transliteration: 'damanah', meaning: 'guarantee', pos: 'noun',
      synonym: 'كَفَالَة (kafalah)', antonym: null,
      example: { arabic: 'قَدَّمَ ضَمَانَةً لِإِتْمَامِ العَمَل', transliteration: 'Qaddama damanatan li\'itmamil-\'amal', translation: 'He provided a guarantee to complete the work.' },
    },
  {
      word: 'ضَجَّة', transliteration: 'dajjah', meaning: 'noise / uproar', pos: 'noun',
      synonym: 'ضَوْضَاء (dawda\')', antonym: 'هُدُوء (calm)',
      example: { arabic: 'أَحْدَثَ الأَوْلَادُ ضَجَّةً فِي الفَصْل', transliteration: 'Ahdathal-awladu dajjatan fil-fasl', translation: 'The children made noise in the classroom.' },
    },
  {
      word: 'ضَاق', transliteration: 'daqa', meaning: 'it narrowed / became tight', pos: 'verb',
      synonym: null, antonym: 'اِتَّسَعَ (widened)',
      example: { arabic: 'ضَاقَ صَدْرُهُ مِنَ الهَمّ', transliteration: 'Daqa sadruhu minal-hamm', translation: 'His chest tightened from worry.' },
    },
  {
      word: 'ضَفْدَع', transliteration: 'difda\'', meaning: 'frog', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَفَزَ الضِّفْدَعُ فِي البِرْكَة', transliteration: 'Qafazad-difda\'u fil-birkah', translation: 'The frog jumped into the pond.' },
    },
  {
      word: 'ضِدّ', transliteration: 'didd', meaning: 'against / opposite', pos: 'preposition / noun',
      synonym: null, antonym: 'مَعَ (with)',
      example: { arabic: 'لَعِبَ فَرِيقُنَا ضِدَّ فَرِيقٍ قَوِيّ', transliteration: 'La\'iba fariquna didda fariqin qawiyy', translation: 'Our team played against a strong team.' },
    },
  {
      word: 'ضَمِنَ', transliteration: 'damina', meaning: 'he guaranteed / ensured', pos: 'verb',
      synonym: 'كَفَلَ (kafala)', antonym: null,
      example: { arabic: 'ضَمِنَ لَهُ حَقَّهُ كَامِلًا', transliteration: 'Damina lahu haqqahu kamilan', translation: 'He guaranteed him his full right.' },
    },
  {
      word: 'ضِرْس', transliteration: 'dirs', meaning: 'molar (tooth)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يُؤْلِمُنِي ضِرْسِي مُنْذُ يَوْمَيْن', transliteration: 'Yu\'limuni dirsi mundhu yawmayn', translation: 'My molar has hurt for two days.' },
    },
  {
      word: 'ضَاحِيَة', transliteration: 'dahiyah', meaning: 'suburb', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَسْكُنُ فِي ضَاحِيَةٍ هَادِئَة', transliteration: 'Yaskunu fi dahiyatin hadi\'ah', translation: 'He lives in a quiet suburb.' },
    },
  {
    word: 'ضَوْضَاء', transliteration: 'dawda\'', meaning: 'noise', pos: 'noun',
    synonym: 'ضَجَّة (dajjah)', antonym: 'هُدُوء (calm)',
    example: { arabic: 'أَزْعَجَتْهُ ضَوْضَاءُ الشَّارِع', transliteration: 'Az\'ajathu dawda\'ush-shari\'', translation: 'The street noise bothered him.' },
  },
  {
    word: 'ضَحِيَّة', transliteration: 'dahiyyah', meaning: 'victim', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ ضَحِيَّةً لِخَطَأٍ لَيْسَ لَهُ فِيهِ ذَنْب', transliteration: 'Kana dahiyyatan likhata\'in laysa lahu fihi dhanb', translation: 'He was a victim of a mistake that wasn\'t his fault.' },
  },
  {
    word: 'ضِمَادَة', transliteration: 'dimadah', meaning: 'bandage', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ ضِمَادَةً عَلَى الجُرْح', transliteration: 'Wada\'a dimadatan \'alal-jurh', translation: 'He put a bandage on the wound.' },
  },
  {
    word: 'ضَبَطَ', transliteration: 'dabata', meaning: 'he regulated / caught (red-handed)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَبَطَ اللِّصَّ مُتَلَبِّسًا', transliteration: 'Dabatal-lissa mutalabbisan', translation: 'He caught the thief red-handed.' },
  },
  {
    word: 'ضَجِرَ', transliteration: 'dajira', meaning: 'he became bored / irritated', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَجِرَ مِنْ طُولِ الِانْتِظَار', transliteration: 'Dajira min tulil-intizar', translation: 'He became irritated by the long wait.' },
  },
  {
    word: 'ضِمْن', transliteration: 'dimn', meaning: 'within / among', pos: 'preposition',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ اِسْمُهُ ضِمْنَ الفَائِزِين', transliteration: 'Kana ismuhu dimnal-fa\'izin', translation: 'His name was among the winners.' },
  },
  {
    word: 'ضَغْط', transliteration: 'daght', meaning: 'pressure', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُعَانِي مِنْ ضَغْطِ العَمَل', transliteration: 'Yu\'ani min daghtil-\'amal', translation: 'He suffers from work pressure.' },
  },
  {
    word: 'ضَرِير', transliteration: 'darir', meaning: 'blind person', pos: 'noun',
    synonym: 'أَعْمَى (a\'ma)', antonym: null,
    example: { arabic: 'سَاعَدَ الرَّجُلَ الضَّرِيرَ عَلَى العُبُور', transliteration: 'Sa\'adar-rajulad-darira \'alal-\'ubur', translation: 'He helped the blind man cross.' },
  },
  {
    word: 'ضَاحِك', transliteration: 'dahik', meaning: 'laughing', pos: 'adjective',
    synonym: null, antonym: 'بَاكٍ (crying)',
    example: { arabic: 'ظَهَرَ فِي الصُّورَةِ ضَاحِكًا', transliteration: 'Zahara fis-surati dahikan', translation: 'He appeared laughing in the picture.' },
  },
  {
    word: 'ضَئِيل', transliteration: 'da\'il', meaning: 'tiny / slight', pos: 'adjective',
    synonym: null, antonym: 'كَبِير (large)',
    example: { arabic: 'الفَرْقُ بَيْنَهُمَا ضَئِيلٌ جِدًّا', transliteration: 'Al-farqu baynahuma da\'ilun jiddan', translation: 'The difference between them is very slight.' },
  },
  {
    word: 'ضَمَّ', transliteration: 'damma', meaning: 'he embraced / included', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَمَّ اِبْنَهُ بِحُبٍّ بَعْدَ الغِيَاب', transliteration: 'Damma ibnahu bihubbin ba\'dal-ghiyab', translation: 'He embraced his son lovingly after being away.' },
  },
  {
    word: 'ضَمِيمَة', transliteration: 'damimah', meaning: 'attachment / appendix', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَرْفَقَ ضَمِيمَةً بِالرِّسَالَة', transliteration: 'Arfaqa damimatan bir-risalah', translation: 'He attached an appendix to the letter.' },
  },
  {
    word: 'ضَبْط', transliteration: 'dabt', meaning: 'regulation / precision / self-control', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ضَبْطُ النَّفْسِ عِنْدَ الغَضَبِ فَضِيلَة', transliteration: 'Dabtun-nafsi \'indal-ghadabi fadilah', translation: 'Self-control during anger is a virtue.' },
  },
  {
    word: 'ضَفِيرَة', transliteration: 'dafirah', meaning: 'braid (of hair)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ضَفَرَتْ شَعْرَهَا فِي ضَفِيرَتَيْن', transliteration: 'Dafarat sha\'raha fi dafiratayn', translation: 'She braided her hair into two braids.' },
  },
  {
    word: 'ضَلَّ', transliteration: 'dalla', meaning: 'he went astray / got lost', pos: 'verb',
    synonym: null, antonym: 'اِهْتَدَى (was guided)',
    example: { arabic: 'ضَلَّ الطَّرِيقَ فِي الصَّحْرَاء', transliteration: 'Dallat-tariqa fis-sahra\'', translation: 'He lost his way in the desert.' },
  },
  {
    word: 'ضَلَال', transliteration: 'dalal', meaning: 'misguidance', pos: 'noun',
    synonym: null, antonym: 'هُدًى (guidance)',
    example: { arabic: 'اِسْتَعَاذَ بِاللَّهِ مِنَ الضَّلَال', transliteration: 'Ista\'adha billahi minad-dalal', translation: 'He sought refuge with Allah from misguidance.' },
  },
  {
    word: 'ضِيقُ الوَقْت', transliteration: 'diqul-waqt', meaning: 'shortage of time', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'اِعْتَذَرَ بِسَبَبِ ضِيقِ الوَقْت', transliteration: 'I\'tadhara bisababi diqil-waqt', translation: 'He apologized due to the shortage of time.' },
  },
  {
    word: 'ضَرَّ', transliteration: 'darra', meaning: 'it harmed', pos: 'verb',
    synonym: null, antonym: 'نَفَعَ (benefited)',
    example: { arabic: 'التَّدْخِينُ يَضُرُّ بِالصِّحَّة', transliteration: 'At-tadkhinu yadurru bis-sihhah', translation: 'Smoking harms health.' },
  },
  {
    word: 'ضَرَر', transliteration: 'darar', meaning: 'harm / damage', pos: 'noun',
    synonym: null, antonym: 'نَفْع (benefit)',
    example: { arabic: 'لَا ضَرَرَ وَلَا ضِرَارَ فِي الإِسْلَام', transliteration: 'La darara wa la dirara fil-islam', translation: 'There is no harming or reciprocating harm in Islam.' },
  },
  {
    word: 'ضَمَّدَ', transliteration: 'dammada', meaning: 'he bandaged', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَمَّدَ جُرْحَ صَدِيقِهِ بِرِفْق', transliteration: 'Dammada jurha sadiqihi birifq', translation: 'He bandaged his friend\'s wound gently.' },
  },
  {
    word: 'ضَاقَ ذَرْعًا', transliteration: 'daqa dhar\'an', meaning: 'he lost patience / became fed up', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'ضَاقَ ذَرْعًا بِتَأَخُّرِ القِطَار', transliteration: 'Daqa dhar\'an bita\'akhkhuril-qitar', translation: 'He became fed up with the train\'s delay.' },
  },
  {
    word: 'ضِرَاب', transliteration: 'dirab (rare)', meaning: 'striking / clashing (archaic/rare)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سُمِعَ صَوْتُ ضِرَابِ السُّيُوفِ فِي المَعْرَكَة', transliteration: 'Sumi\'a sawtu dirabis-suyufi fil-ma\'rakah', translation: 'The sound of clashing swords was heard in the battle.' },
  },
  {
    word: 'ضَيَّعَ', transliteration: 'dayya\'a', meaning: 'he wasted / lost (something)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَيَّعَ فُرْصَةً ثَمِينَةً لِلنَّجَاح', transliteration: 'Dayya\'a fursatan thaminatan lin-najah', translation: 'He wasted a precious opportunity for success.' },
  },
  {
    word: 'ضَئِيلَة', transliteration: 'da\'ilah', meaning: 'slight / faint (feminine)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَتْ فُرْصَتُهُ ضَئِيلَةً لَكِنَّهُ نَجَح', transliteration: 'Kanat fursatuhu da\'ilatan lakinnahu najah', translation: 'His chance was slight, but he succeeded.' },
  },
  {
    word: 'ضَامِن', transliteration: 'damin', meaning: 'guarantor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'طَلَبَ البَنْكُ ضَامِنًا لِلْقَرْض', transliteration: 'Talabal-banku daminan lil-qard', translation: 'The bank requested a guarantor for the loan.' },
  },
  {
    word: 'ضَحَّى', transliteration: 'dahha', meaning: 'he sacrificed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ضَحَّى بِرَاحَتِهِ مِنْ أَجْلِ أُسْرَتِه', transliteration: 'Dahha biraahatihi min ajli usratih', translation: 'He sacrificed his comfort for the sake of his family.' },
  },
  {
    word: 'تَضْحِيَة', transliteration: 'tadhiyah', meaning: 'sacrifice (noun)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَدَّمَ تَضْحِيَاتٍ كَبِيرَةً مِنْ أَجْلِ وَطَنِه', transliteration: 'Qaddama tadhiyatin kabiratan min ajli watanih', translation: 'He made great sacrifices for his homeland.' },
  },
  {
    word: 'ضِفَّة', transliteration: 'diffah', meaning: 'riverbank', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا عَلَى ضِفَّةِ النَّهْر', transliteration: 'Jalasu \'ala diffatin-nahr', translation: 'They sat on the riverbank.' },
  },
  {
    word: 'ضَوْئِيّ', transliteration: 'daw\'iyy', meaning: 'related to light / optical', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ كَابِلًا ضَوْئِيًّا لِلِاتِّصَال', transliteration: 'Istakhdama kabilan daw\'iyyan lil-ittisal', translation: 'He used a fiber-optic cable for the connection.' },
  },
  {
    word: 'ضَاغِط', transliteration: 'daghit', meaning: 'compressor / pressing (adj.)', pos: 'noun / adjective',
    synonym: null, antonym: null,
    example: { arabic: 'تَعْمَلُ الثَّلَّاجَةُ بِوَاسِطَةِ ضَاغِطٍ كَهْرَبَائِيّ', transliteration: 'Ta\'malulth-thallajatu biwasitati daghitin kahraba\'iyy', translation: 'The refrigerator operates using an electric compressor.' },
  },
  ],

  'ط': [
  {
      word: 'طَعَام', transliteration: 'ta\'am', meaning: 'food', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَعَدَّتِ الأُمُّ الطَّعَامَ لِلْأُسْرَة', transliteration: 'A\'addatil-ummut-ta\'ama lil-usrah', translation: 'The mother prepared food for the family.' },
    },
  {
      word: 'طَوِيل', transliteration: 'tawil', meaning: 'tall / long', pos: 'adjective',
      synonym: null, antonym: 'قَصِير (short)',
      example: { arabic: 'أَخِي طَوِيلٌ جِدًّا', transliteration: 'Akhi tawilun jiddan', translation: 'My brother is very tall.' },
    },
  {
      word: 'طَرِيق', transliteration: 'tariq', meaning: 'road / path', pos: 'noun',
      synonym: 'دَرْب (darb)', antonym: null,
      example: { arabic: 'سَلَكْنَا طَرِيقًا جَدِيدًا إِلَى المَدِينَة', transliteration: 'Salakna tariqan jadidan ilal-madinah', translation: 'We took a new road to the city.' },
    },
  {
      word: 'طَبِيب', transliteration: 'tabib', meaning: 'doctor', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'زُرْتُ الطَّبِيبَ بِسَبَبِ الحُمَّى', transliteration: 'Zurtut-tabiba bisababil-hummah', translation: 'I visited the doctor because of the fever.' },
    },
  {
      word: 'طَعِمَ', transliteration: 'ta\'ima', meaning: 'he tasted', pos: 'verb',
      synonym: 'ذَاقَ (dhaqa)', antonym: null,
      example: { arabic: 'طَعِمَ الحَلْوَى وَأُعْجِبَ بِهَا', transliteration: 'Ta\'imal-halwa wa u\'jiba biha', translation: 'He tasted the sweet and liked it.' },
    },
  {
      word: 'طَائِرَة', transliteration: 'ta\'irah', meaning: 'airplane', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَافَرْنَا بِالطَّائِرَةِ إِلَى دُبَي', transliteration: 'Safarna bit-ta\'irati ila dubay', translation: 'We traveled by plane to Dubai.' },
    },
  {
      word: 'طَيِّب', transliteration: 'tayyib', meaning: 'good / kind', pos: 'adjective',
      synonym: 'صَالِح (salih)', antonym: 'خَبِيث (wicked)',
      example: { arabic: 'هُوَ رَجُلٌ طَيِّبُ القَلْب', transliteration: 'Huwa rajulun tayyibul-qalb', translation: 'He is a kind-hearted man.' },
    },
  {
      word: 'طَلَبَ', transliteration: 'talaba', meaning: 'he requested / asked for', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'طَلَبَ مِنَ المُعَلِّمِ المُسَاعَدَة', transliteration: 'Talaba minal-mu\'allimil-musa\'adah', translation: 'He asked the teacher for help.' },
    },
  {
      word: 'طَفَل', transliteration: 'tifl', meaning: 'child / infant', pos: 'noun',
      synonym: 'وَلَد (walad)', antonym: null,
      example: { arabic: 'يَبْتَسِمُ الطِّفْلُ عِنْدَمَا يَرَى أُمَّهُ', transliteration: 'Yabtasimut-tiflu \'indama yara ummah', translation: 'The infant smiles when he sees his mother.' },
    },
  {
      word: 'طَاوِلَة', transliteration: 'tawilah', meaning: 'table', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَضَعَ الكُتُبَ عَلَى الطَّاوِلَة', transliteration: 'Wada\'al-kutuba \'alat-tawilah', translation: 'He put the books on the table.' },
    },
  {
      word: 'طَقْس', transliteration: 'taqs', meaning: 'weather', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الطَّقْسُ مُعْتَدِلٌ اليَوْم', transliteration: 'At-taqsu mu\'tadilun al-yawm', translation: 'The weather is mild today.' },
    },
  {
      word: 'طَاعَة', transliteration: 'ta\'ah', meaning: 'obedience', pos: 'noun',
      synonym: null, antonym: 'عِصْيَان (disobedience)',
      example: { arabic: 'طَاعَةُ الوَالِدَيْنِ مِنْ أَعْظَمِ الحُقُوق', transliteration: 'Ta\'atul-walidayni min a\'zamil-huquq', translation: 'Obeying one\'s parents is among the greatest rights.' },
    },
  {
      word: 'طَبَخَ', transliteration: 'tabakha', meaning: 'he cooked', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'طَبَخَتِ الأُمُّ وَجْبَةً لَذِيذَة', transliteration: 'Tabakhatil-ummu wajbatan ladhidhah', translation: 'The mother cooked a delicious meal.' },
    },
  {
      word: 'طَابُور', transliteration: 'tabur', meaning: 'queue / line', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَقَفْنَا فِي طَابُورٍ طَوِيلٍ لِلشِّرَاء', transliteration: 'Waqafna fi taburin tawilin lish-shira\'', translation: 'We stood in a long queue to buy.' },
    },
  {
      word: 'طَمُوح', transliteration: 'tamuh', meaning: 'ambition / ambitious', pos: 'noun / adjective',
      synonym: null, antonym: 'خُمُول (lethargy)',
      example: { arabic: 'لَدَيْهِ طَمُوحٌ كَبِيرٌ فِي الحَيَاة', transliteration: 'Ladayhi tamuhun kabirun fil-hayah', translation: 'He has great ambition in life.' },
    },
  {
      word: 'طَرَدَ', transliteration: 'tarada', meaning: 'he expelled / drove away', pos: 'verb',
      synonym: null, antonym: 'رَحَّبَ (welcomed)',
      example: { arabic: 'طَرَدَ الحَارِسُ القِطَّ مِنَ الحَدِيقَة', transliteration: 'Taradal-harisul-qitta minal-hadiqah', translation: 'The guard drove the cat away from the garden.' },
    },
  {
      word: 'طَبْع', transliteration: 'tab\'', meaning: 'nature / character trait', pos: 'noun',
      synonym: 'خُلُق (khuluq)', antonym: null,
      example: { arabic: 'الكَرَمُ مِنْ طَبْعِهِ', transliteration: 'Al-karamu min tab\'ih', translation: 'Generosity is part of his nature.' },
    },
  {
      word: 'طُمَأْنِينَة', transliteration: 'tuma\'ninah', meaning: 'tranquility / peace of mind', pos: 'noun',
      synonym: 'سَكِينَة (sakinah)', antonym: 'قَلَق (anxiety)',
      example: { arabic: 'وَجَدَ الطُّمَأْنِينَةَ فِي الصَّلَاة', transliteration: 'Wajadat-tuma\'ninata fis-salah', translation: 'He found tranquility in prayer.' },
    },
  {
      word: 'طُول', transliteration: 'tul', meaning: 'length / height', pos: 'noun',
      synonym: null, antonym: 'عَرْض (width) / قِصَر (shortness)',
      example: { arabic: 'طُولُ الغُرْفَةِ خَمْسَةُ أَمْتَار', transliteration: 'Tulul-ghurfati khamsatu amtar', translation: 'The length of the room is five meters.' },
    },
  {
      word: 'طَاهِر', transliteration: 'tahir', meaning: 'pure / clean', pos: 'adjective',
      synonym: 'نَقِيّ (naqiyy)', antonym: 'نَجِس (impure)',
      example: { arabic: 'يَجِبُ أَنْ يَكُونَ المَاءُ طَاهِرًا لِلْوُضُوء', transliteration: 'Yajibu an yakunal-ma\'u tahiran lil-wudu\'', translation: 'The water must be pure for ablution.' },
    },
  {
    word: 'طَبَقَة', transliteration: 'tabaqah', meaning: 'layer / social class', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ طَبَقَةً مِنَ العَسَلِ عَلَى الخُبْز', transliteration: 'Wada\'a tabaqatan minal-\'asali \'alal-khubz', translation: 'He put a layer of honey on the bread.' },
  },
  {
    word: 'طَازَج', transliteration: 'tazaj', meaning: 'fresh', pos: 'adjective',
    synonym: null, antonym: 'قَدِيم (stale/old)',
    example: { arabic: 'اِشْتَرَى خُضَارًا طَازَجًا مِنَ السُّوق', transliteration: 'Ishtara khudaran tazajan minas-suq', translation: 'He bought fresh vegetables from the market.' },
  },
  {
    word: 'طِرَاز', transliteration: 'tiraz', meaning: 'style', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'بُنِيَ المَنْزِلُ عَلَى طِرَازٍ قَدِيم', transliteration: 'Buniyal-manzilu \'ala tirazin qadim', translation: 'The house was built in an old style.' },
  },
  {
    word: 'طَبِيعَة', transliteration: 'tabi\'ah', meaning: 'nature', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَحَبَّ التَّنَزُّهَ فِي أَحْضَانِ الطَّبِيعَة', transliteration: 'Ahabbat-tanazzuha fi ahdanit-tabi\'ah', translation: 'He loved walking in the embrace of nature.' },
  },
  {
    word: 'طَبِيعِيّ', transliteration: 'tabi\'iyy', meaning: 'natural', pos: 'adjective',
    synonym: null, antonym: 'صِنَاعِيّ (artificial)',
    example: { arabic: 'يُفَضِّلُ العَصِيرَ الطَّبِيعِيَّ عَلَى المُصَنَّع', transliteration: 'Yufaddilul-\'asirat-tabi\'iyya \'alal-musanna\'', translation: 'He prefers natural juice over the manufactured kind.' },
  },
  {
    word: 'طَاقَة', transliteration: 'taqah', meaning: 'energy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تُنْتِجُ الشَّمْسُ طَاقَةً هَائِلَة', transliteration: 'Tuntijush-shamsu taqatan ha\'ilah', translation: 'The sun produces immense energy.' },
  },
  {
    word: 'طَمْأَنَ', transliteration: 'tam\'ana', meaning: 'he reassured', pos: 'verb',
    synonym: null, antonym: 'أَقْلَقَ (worried)',
    example: { arabic: 'طَمْأَنَ الطَّبِيبُ المَرِيضَ عَلَى صِحَّتِهِ', transliteration: 'Tam\'anat-tabibul-marida \'ala sihhatih', translation: 'The doctor reassured the patient about his health.' },
  },
  {
    word: 'طَبَّقَ', transliteration: 'tabbaqa', meaning: 'he applied / implemented', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'طَبَّقَ مَا تَعَلَّمَهُ فِي العَمَل', transliteration: 'Tabbaqa ma ta\'allamahu fil-\'amal', translation: 'He applied what he learned at work.' },
  },
  {
    word: 'طَرِيقَة', transliteration: 'tariqah', meaning: 'method / way', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَهُ طَرِيقَةٌ خَاصَّةٌ فِي التَّدْرِيس', transliteration: 'Lahu tariqatun khassatun fit-tadris', translation: 'He has his own special method of teaching.' },
  },
  {
    word: 'طُفُولَة', transliteration: 'tufulah', meaning: 'childhood', pos: 'noun',
    synonym: null, antonym: 'شَيْخُوخَة (old age)',
    example: { arabic: 'تَذَكَّرَ ذِكْرَيَاتِ الطُّفُولَةِ بِسَعَادَة', transliteration: 'Tadhakkara dhikrayatit-tufulati bisa\'adah', translation: 'He remembered his childhood memories happily.' },
  },
  {
    word: 'طَاقِيَّة', transliteration: 'taqiyyah', meaning: 'skullcap', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِرْتَدَى طَاقِيَّةً بَيْضَاءَ لِلصَّلَاة', transliteration: 'Irtada taqiyyatan bayda\'a lissalah', translation: 'He wore a white skullcap for prayer.' },
  },
  {
    word: 'طَبْل', transliteration: 'tabl', meaning: 'drum', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَرَعَ الطَّبْلَ فِي الِاحْتِفَال', transliteration: 'Qara\'at-tabla fil-ihtifal', translation: 'He beat the drum at the celebration.' },
  },
  {
    word: 'طُحِن', transliteration: 'tuhina', meaning: 'it was ground (passive)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'طُحِنَ القَمْحُ لِيُصْبِحَ دَقِيقًا', transliteration: 'Tuhinal-qamhu liyusbiha daqiqan', translation: 'The wheat was ground to become flour.' },
  },
  {
    word: 'طَحِين', transliteration: 'tahin', meaning: 'flour', pos: 'noun',
    synonym: 'دَقِيق (daqiq)', antonym: null,
    example: { arabic: 'خَلَطَتِ الطَّحِينَ بِالمَاءِ لِعَجْنِ الخُبْز', transliteration: 'Khalatatit-tahina bil-ma\'i li\'ajnil-khubz', translation: 'She mixed the flour with water to knead bread.' },
  },
  {
    word: 'طَرْد', transliteration: 'tard', meaning: 'expulsion / package', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَلَمَ طَرْدًا بَرِيدِيًّا اليَوْم', transliteration: 'Istalama tardan baridiyyan al-yawm', translation: 'He received a postal package today.' },
  },
  {
    word: 'طَعْن', transliteration: 'ta\'n', meaning: 'stabbing / criticism', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَرَّضَ لِلطَّعْنِ مِنْ خُصُومِه', transliteration: 'Ta\'arrada littta\'ni min khusumih', translation: 'He faced criticism from his rivals.' },
  },
  {
    word: 'طَيْف', transliteration: 'tayf', meaning: 'apparition / spectrum', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَأَى فِي مَنَامِهِ طَيْفَ صَدِيقِهِ الرَّاحِل', transliteration: 'Ra\'a fi manamihi tayfa sadiqihir-rahil', translation: 'He saw in his dream the apparition of his late friend.' },
  },
  {
    word: 'طَاهِي', transliteration: 'tahi', meaning: 'chef / cook', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَعَدَّ الطَّاهِي وَجْبَةً فَاخِرَة', transliteration: 'A\'addat-tahi wajbatan fakhirah', translation: 'The chef prepared a luxurious meal.' },
  },
  {
    word: 'طَيَّار', transliteration: 'tayyar', meaning: 'pilot', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَلَّقَ الطَّيَّارُ بِالطَّائِرَةِ بِمَهَارَة', transliteration: 'Hallaqat-tayyaru bit-ta\'irati bimaharah', translation: 'The pilot flew the plane skillfully.' },
  },
  {
    word: 'طُمُوح', transliteration: 'tumuh', meaning: 'ambition (noun, related to tamuh)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَدْفَعُهُ طُمُوحُهُ لِلْعَمَلِ بِجِدّ', transliteration: 'Yadfa\'uhu tumuhuhu lil-\'amali bijidd', translation: 'His ambition drives him to work hard.' },
  },
  {
    word: 'طُنّ', transliteration: 'tunn', meaning: 'ton (unit of weight)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَدَّرَتِ الشَّرِكَةُ طُنًّا مِنَ القَمْح', transliteration: 'Saddaratish-sharikatu tunnan minal-qamh', translation: 'The company exported a ton of wheat.' },
  },
  {
    word: 'طَوَاف', transliteration: 'tawaf', meaning: 'circumambulation (around the Ka\'bah)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَدَّى طَوَافَ الوَدَاعِ قَبْلَ مُغَادَرَةِ مَكَّة', transliteration: 'Adda tawafal-wada\'i qabla mughadarati makkah', translation: 'He performed the farewell circumambulation before leaving Makkah.' },
  },
  {
    word: 'طَبَّاخ', transliteration: 'tabbakh', meaning: 'cook (professional)', pos: 'noun',
    synonym: 'طَاهِي (tahi)', antonym: null,
    example: { arabic: 'يَعْمَلُ طَبَّاخًا فِي مَطْعَمٍ مَشْهُور', transliteration: 'Ya\'malu tabbakhan fi mat\'amin mashhur', translation: 'He works as a cook in a famous restaurant.' },
  },
  {
    word: 'طَلَاق', transliteration: 'talaq', meaning: 'divorce', pos: 'noun',
    synonym: null, antonym: 'زَوَاج (marriage)',
    example: { arabic: 'الطَّلَاقُ أَبْغَضُ الحَلَالِ عِنْدَ اللَّه', transliteration: 'At-talaqu abghadul-halali \'indallah', translation: 'Divorce is the most disliked of permissible things to Allah.' },
  },
  {
    word: 'طَعْم', transliteration: 'ta\'m', meaning: 'flavor / taste', pos: 'noun',
    synonym: 'مَذَاق (madhaq)', antonym: null,
    example: { arabic: 'طَعْمُ العَسَلِ حُلْوٌ وَلَذِيذ', transliteration: 'Ta\'mul-\'asali hulwun wa ladhidh', translation: 'The taste of honey is sweet and delicious.' },
  },
  {
    word: 'طَبَعَ', transliteration: 'taba\'a', meaning: 'he printed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'طَبَعَ الكِتَابَ فِي دَارِ نَشْرٍ مَعْرُوفَة', transliteration: 'Taba\'al-kitaba fi dari nashrin ma\'rufah', translation: 'He printed the book at a well-known publishing house.' },
  },
  {
    word: 'طِبَاعَة', transliteration: 'tiba\'ah', meaning: 'printing', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَطَوَّرَتْ صِنَاعَةُ الطِّبَاعَةِ كَثِيرًا', transliteration: 'Tatawwarat sina\'atat-tiba\'ati kathiran', translation: 'The printing industry has developed a lot.' },
  },
  {
    word: 'طَحَالِب', transliteration: 'tahalib', meaning: 'algae', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'غَطَّتِ الطَّحَالِبُ سَطْحَ البِرْكَة', transliteration: 'Ghattatit-tahalibu sathal-birkah', translation: 'Algae covered the surface of the pond.' },
  },
  {
    word: 'طُغْيَان', transliteration: 'tughyan', meaning: 'tyranny / transgression', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ثَارَ الشَّعْبُ ضِدَّ طُغْيَانِ الحَاكِم', transliteration: 'Tharash-sha\'bu didda tughyanil-hakim', translation: 'The people rose up against the ruler\'s tyranny.' },
  },
  {
    word: 'طَاغِيَة', transliteration: 'taghiyah', meaning: 'tyrant', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَقَطَ الطَّاغِيَةُ بَعْدَ سَنَوَاتٍ مِنَ الظُّلْم', transliteration: 'Saqatat-taghiyatu ba\'da sanawatin minaz-zulm', translation: 'The tyrant fell after years of oppression.' },
  },
  ],

  'ظ': [
  {
      word: 'ظُهْر', transliteration: 'zuhr', meaning: 'noon / midday', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'نُصَلِّي الظُّهْرَ فِي مُنْتَصَفِ اليَوْم', transliteration: 'Nusallidh-dhuhra fi muntasafil-yawm', translation: 'We pray Dhuhr in the middle of the day.' },
    },
  {
      word: 'ظَلَام', transliteration: 'zalam', meaning: 'darkness', pos: 'noun',
      synonym: null, antonym: 'نُور (light)',
      example: { arabic: 'خَافَ الطِّفْلُ مِنَ الظَّلَام', transliteration: 'Khafat-tiflu minaz-zalam', translation: 'The child was afraid of the darkness.' },
    },
  {
      word: 'ظَنَّ', transliteration: 'zanna', meaning: 'he thought / assumed', pos: 'verb',
      synonym: 'اِعْتَقَدَ (i\'taqada)', antonym: 'تَيَقَّنَ (was certain)',
      example: { arabic: 'ظَنَّ أَنَّهُ سَيَتَأَخَّر', transliteration: 'Zanna annahu sayata\'akhkhar', translation: 'He thought he would be late.' },
    },
  {
      word: 'ظَرِيف', transliteration: 'zarif', meaning: 'witty / charming', pos: 'adjective',
      synonym: 'لَطِيف (latif)', antonym: null,
      example: { arabic: 'صَدِيقِي ظَرِيفٌ وَخَفِيفُ الظِّلّ', transliteration: 'Sadiqi zarifun wa khafifuz-zill', translation: 'My friend is witty and light-hearted.' },
    },
  {
      word: 'ظَفَرَ', transliteration: 'zafara', meaning: 'he triumphed / succeeded', pos: 'verb',
      synonym: 'فَازَ (faza)', antonym: 'فَشِلَ (failed)',
      example: { arabic: 'ظَفَرَ بِالجَائِزَةِ الأُولَى', transliteration: 'Zafara bil-ja\'izatil-ula', translation: 'He won the first prize.' },
    },
  {
      word: 'ظِلّ', transliteration: 'zill', meaning: 'shade / shadow', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'جَلَسْنَا فِي ظِلِّ الشَّجَرَة', transliteration: 'Jalasna fi zillish-shajarah', translation: 'We sat in the shade of the tree.' },
    },
  {
      word: 'ظَهَرَ', transliteration: 'zahara', meaning: 'it appeared', pos: 'verb',
      synonym: null, antonym: 'اِخْتَفَى (disappeared)',
      example: { arabic: 'ظَهَرَ القَمَرُ بَعْدَ غُرُوبِ الشَّمْس', transliteration: 'Zaharal-qamaru ba\'da ghurubish-shams', translation: 'The moon appeared after sunset.' },
    },
  {
      word: 'ظُلْم', transliteration: 'zulm', meaning: 'injustice / oppression', pos: 'noun',
      synonym: null, antonym: 'عَدْل (justice)',
      example: { arabic: 'حَذَّرَ الإِسْلَامُ مِنَ الظُّلْم', transliteration: 'Hadhdharal-islamu minaz-zulm', translation: 'Islam warns against injustice.' },
    },
  {
      word: 'ظَفِر', transliteration: 'zufr', meaning: 'fingernail', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَصَّتْ أَظَافِرَهَا قَبْلَ الصَّلَاة', transliteration: 'Qassat azafiraha qablas-salah', translation: 'She trimmed her nails before prayer.' },
    },
  {
      word: 'ظَبْي', transliteration: 'zabi', meaning: 'gazelle / deer', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'رَأَيْنَا ظَبْيًا يَجْرِي فِي البَرِّيَّة', transliteration: 'Ra\'ayna zabyan yajri fil-barriyyah', translation: 'We saw a gazelle running in the wilderness.' },
    },
  {
      word: 'ظُهُور', transliteration: 'zuhur', meaning: 'appearance / emergence', pos: 'noun',
      synonym: null, antonym: 'اِخْتِفَاء (disappearance)',
      example: { arabic: 'كَانَ ظُهُورُهُ مُفَاجِئًا لِلْجَمِيع', transliteration: 'Kana zuhuruhu mufaji\'an lil-jami\'', translation: 'His appearance was surprising to everyone.' },
    },
  {
      word: 'ظَاهِرَة', transliteration: 'zahirah', meaning: 'phenomenon', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'دَرَسَ العُلَمَاءُ هٰذِهِ الظَّاهِرَةَ الطَّبِيعِيَّة', transliteration: 'Darasal-\'ulama\'u hadhihiz-zahiratat-tabi\'iyyah', translation: 'Scientists studied this natural phenomenon.' },
    },
  {
      word: 'ظُلْمَة', transliteration: 'zulmah', meaning: 'darkness (a state of it)', pos: 'noun',
      synonym: 'ظَلَام (zalam)', antonym: 'ضِيَاء (brightness)',
      example: { arabic: 'اِنْتَشَرَتِ الظُّلْمَةُ فِي الغُرْفَة', transliteration: 'Intasharatiz-zulmatu fil-ghurfah', translation: 'Darkness spread through the room.' },
    },
  {
      word: 'ظَرْف', transliteration: 'zarf', meaning: 'circumstance / envelope', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'مَرَّ بِظُرُوفٍ صَعْبَةٍ فِي حَيَاتِهِ', transliteration: 'Marra bizurufin sa\'batin fi hayatih', translation: 'He went through difficult circumstances in his life.' },
    },
  {
      word: 'ظَمَأ', transliteration: 'zama\'', meaning: 'thirst', pos: 'noun',
      synonym: 'عَطَش (\'atash)', antonym: 'رِيّ (quenching)',
      example: { arabic: 'شَعَرَ بِالظَّمَأِ بَعْدَ الرَّكْض', transliteration: 'Sha\'ara biz-zama\'i ba\'dar-rakd', translation: 'He felt thirst after running.' },
    },
  {
      word: 'ظَلَمَ', transliteration: 'zalama', meaning: 'he wronged / oppressed', pos: 'verb',
      synonym: null, antonym: 'عَدَلَ (was just)',
      example: { arabic: 'لَا يَجُوزُ أَنْ يَظْلِمَ الإِنْسَانُ غَيْرَهُ', transliteration: 'La yajuzu an yazlimal-insanu ghayrah', translation: 'A person must not wrong others.' },
    },
  {
      word: 'ظَافِر', transliteration: 'zafir', meaning: 'victorious / triumphant', pos: 'adjective',
      synonym: 'مُنْتَصِر (muntasir)', antonym: 'مَهْزُوم (defeated)',
      example: { arabic: 'عَادَ الجَيْشُ ظَافِرًا مِنَ المَعْرَكَة', transliteration: 'Adal-jayshu zafiran minal-ma\'rakah', translation: 'The army returned victorious from the battle.' },
    },
  {
      word: 'ظَهْر', transliteration: 'zahr', meaning: 'back (body part)', pos: 'noun',
      synonym: null, antonym: 'بَطْن (belly/front)',
      example: { arabic: 'يُؤْلِمُهُ ظَهْرُهُ مِنَ الجُلُوسِ الطَّوِيل', transliteration: 'Yu\'limuhu zahruhu minal-julusit-tawil', translation: 'His back hurts from long sitting.' },
    },
  {
      word: 'ظَنِين', transliteration: 'zanin', meaning: 'suspected / accused', pos: 'adjective',
      synonym: 'مُتَّهَم (muttaham)', antonym: 'بَرِيء (innocent)',
      example: { arabic: 'ثَبَتَتْ بَرَاءَتُهُ رَغْمَ أَنَّهُ كَانَ ظَنِينًا', transliteration: 'Thabatat bara\'atuhu raghma annahu kana zaninan', translation: 'His innocence was proven despite being suspected.' },
    },
  {
      word: 'ظِلِّيّ', transliteration: 'zilliyy', meaning: 'shadowy / relating to shade', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'جَلَسُوا فِي مَكَانٍ ظِلِّيٍّ هَادِئ', transliteration: 'Jalasu fi makanin zilliyyin hadi\'', translation: 'They sat in a quiet shady spot.' },
    },
  {
    word: 'ظَاهِر', transliteration: 'zahir', meaning: 'apparent / visible', pos: 'adjective',
    synonym: 'وَاضِح (wadih)', antonym: 'بَاطِن (hidden)',
    example: { arabic: 'السَّبَبُ الظَّاهِرُ لَيْسَ دَائِمًا الحَقِيقِيّ', transliteration: 'As-sababuz-zahiru laysa da\'iman al-haqiqiyy', translation: 'The apparent reason is not always the real one.' },
  },
  {
    word: 'ظَلِيل', transliteration: 'zalil', meaning: 'shady', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا تَحْتَ شَجَرَةٍ ظَلِيلَة', transliteration: 'Jalasu tahta shajaratin zalilah', translation: 'They sat under a shady tree.' },
  },
  {
    word: 'ظِلَال', transliteration: 'zilal', meaning: 'shades / shadows', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'اِمْتَدَّتِ الظِّلَالُ مَعَ غُرُوبِ الشَّمْس', transliteration: 'Imtaddatiz-zilalu ma\'a ghurubish-shams', translation: 'The shadows lengthened with the sunset.' },
  },
  {
    word: 'ظَمْآن', transliteration: 'zam\'an', meaning: 'thirsty', pos: 'adjective',
    synonym: 'عَطْشَان (\'atshan)', antonym: 'رَيَّان (quenched)',
    example: { arabic: 'عَادَ ظَمْآنًا مِنَ الحَقْل', transliteration: '\'Ada zam\'anan minal-haql', translation: 'He returned thirsty from the field.' },
  },
  {
    word: 'ظَرَافَة', transliteration: 'zarafah', meaning: 'wit / charm', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عُرِفَ بِظَرَافَتِهِ وَخِفَّةِ ظِلِّه', transliteration: '\'Urifa bizarafatihi wa khiffati zillih', translation: 'He was known for his wit and light-heartedness.' },
  },
  {
    word: 'ظَلَّ', transliteration: 'zalla', meaning: 'he remained / continued (doing something)', pos: 'verb',
    synonym: 'بَقِيَ (baqiya)', antonym: null,
    example: { arabic: 'ظَلَّ يَعْمَلُ حَتَّى وَقْتٍ مُتَأَخِّر', transliteration: 'Zalla ya\'malu hatta waqtin muta\'akhkhir', translation: 'He kept working until a late hour.' },
  },
  {
    word: 'ظِبَاء', transliteration: 'ziba\'', meaning: 'gazelles', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'شَاهَدُوا قَطِيعًا مِنَ الظِّبَاءِ فِي البَرِّيَّة', transliteration: 'Shahadu qati\'an minaz-ziba\'i fil-barriyyah', translation: 'They watched a herd of gazelles in the wilderness.' },
  },
  {
    word: 'ظَرْفِيّ', transliteration: 'zarfiyy', meaning: 'circumstantial', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ غِيَابُهُ لِسَبَبٍ ظَرْفِيٍّ فَقَط', transliteration: 'Kana ghiyabuhu lisababin zarfiyyin faqat', translation: 'His absence was only for a circumstantial reason.' },
  },
  {
    word: 'ظَلَامِيّ', transliteration: 'zalamiyy', meaning: 'dark / obscurantist', pos: 'adjective',
    synonym: null, antonym: 'مُسْتَنِير (enlightened)',
    example: { arabic: 'رَفَضَ الفِكْرَ الظَّلَامِيَّ المُنْغَلِق', transliteration: 'Rafadal-fikraz-zalamiyyal-munghaliq', translation: 'He rejected closed-minded, obscurantist thinking.' },
  },
  {
    word: 'ظَنِّيّ', transliteration: 'zanniyy', meaning: 'conjectural / speculative', pos: 'adjective',
    synonym: null, antonym: 'قَطْعِيّ (definitive)',
    example: { arabic: 'هٰذَا حُكْمٌ ظَنِّيٌّ لَيْسَ قَطْعِيًّا', transliteration: 'Hadha hukmun zanniyyun laysa qat\'iyyan', translation: 'This is a conjectural, not definitive, ruling.' },
  },
  {
    word: 'ظَرْفُ رِسَالَة', transliteration: 'zarf risalah', meaning: 'envelope', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ الخِطَابَ فِي ظَرْفِ رِسَالَة', transliteration: 'Wada\'al-khitaba fi zarfi risalah', translation: 'He put the letter in an envelope.' },
  },
  {
    word: 'ظَنِيَّة', transliteration: 'zanniyyah', meaning: 'conjectural (feminine)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'هٰذِهِ مَعْلُومَةٌ ظَنِّيَّةٌ غَيْرُ مُؤَكَّدَة', transliteration: 'Hadhihi ma\'lumatun zanniyyatun ghayru mu\'akkadah', translation: 'This is unconfirmed, conjectural information.' },
  },
  {
    word: 'ظَاهِرِيّ', transliteration: 'zahiriyy', meaning: 'apparent / superficial', pos: 'adjective',
    synonym: null, antonym: 'بَاطِنِيّ (inner/hidden)',
    example: { arabic: 'التَّغَيُّرُ ظَاهِرِيٌّ فَقَط وَلَيْسَ جَوْهَرِيًّا', transliteration: 'At-taghayyuru zahiriyyun faqat wa laysa jawhariyyan', translation: 'The change is only superficial, not fundamental.' },
  },
  {
    word: 'ظِلٌّ ظَلِيل', transliteration: 'zillun zalil', meaning: 'ample shade (fixed phrase)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَظَلُّوا بِظِلٍّ ظَلِيلٍ عِنْدَ الظُّهْر', transliteration: 'Istazallu bizillin zalilin \'indaz-zuhr', translation: 'They took shelter in ample shade at noon.' },
  },
  {
    word: 'ظُلْمَة اللَّيْل', transliteration: 'zulmatul-layl', meaning: 'darkness of the night', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'اِخْتَفَى فِي ظُلْمَةِ اللَّيْل', transliteration: 'Ikhtafa fi zulmatil-layl', translation: 'He disappeared into the darkness of the night.' },
  },
  {
    word: 'ظَنَّانِ', transliteration: 'zannan', meaning: 'two assumptions / suppositions (dual)', pos: 'noun (dual)',
    synonym: null, antonym: null,
    example: { arabic: 'لَدَيْهِ ظَنَّانِ حَوْلَ سَبَبِ المُشْكِلَة', transliteration: 'Ladayhi zannani hawla sababil-mushkilah', translation: 'He has two suppositions about the cause of the problem.' },
  },
  {
    word: 'ظَرْفِيَّة', transliteration: 'zarfiyyah', meaning: 'circumstantial nature (noun form)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَاعَى ظَرْفِيَّةَ المَوْقِفِ عِنْدَ اتِّخَاذِ القَرَار', transliteration: 'Ra\'a zarfiyyatal-mawqifi \'inda ittikhadhil-qarar', translation: 'He took into account the circumstantial nature of the situation when deciding.' },
  },
  {
    word: 'ظَاهِرَاتِيّ', transliteration: 'zahiratiyy', meaning: 'phenomenological (rare technical adjective)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ مَنْهَجًا ظَاهِرَاتِيًّا فِي بَحْثِهِ', transliteration: 'Istakhdama manhajan zahiratiyyan fi bahthih', translation: 'He used a phenomenological approach in his research.' },
  },
  {
    word: 'ظَلَامَة', transliteration: 'zalamah', meaning: 'a wrong / grievance suffered', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَفَعَ ظَلَامَتَهُ إِلَى القَاضِي', transliteration: 'Rafa\'a zalamatahu ilal-qadi', translation: 'He raised his grievance to the judge.' },
  },
  {
    word: 'ظَبْيَة', transliteration: 'zabyah', meaning: 'female gazelle', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَكَضَتِ الظَّبْيَةُ بِسُرْعَةٍ فِي السَّهْل', transliteration: 'Rakadatiz-zabyatu bisur\'atin fis-sahl', translation: 'The female gazelle ran quickly across the plain.' },
  },
  {
    word: 'ظَلَّلَ', transliteration: 'zallala', meaning: 'he shaded / provided shade over', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'ظَلَّلَتِ الأَشْجَارُ الطَّرِيقَ الطَّوِيل', transliteration: 'Zallalatil-ashjarut-tariqat-tawil', translation: 'The trees shaded the long road.' },
  },
  {
    word: 'مُظَلَّة', transliteration: 'muzallah', meaning: 'umbrella / canopy', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَمَلَتْ مُظَلَّةً تَحَسُّبًا لِلْمَطَر', transliteration: 'Hamalat muzallatan tahassuban lil-matar', translation: 'She carried an umbrella in anticipation of rain.' },
  },
  {
    word: 'ظُهْرِيّ', transliteration: 'zuhriyy', meaning: 'related to noon', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'أَخَذَ قَيْلُولَةً ظُهْرِيَّةً قَصِيرَة', transliteration: 'Akhadha qayluulatan zuhriyyatan qasirah', translation: 'He took a short midday nap.' },
  },
  {
    word: 'ظَرْف زَمَانِيّ', transliteration: 'zarf zamaniyy', meaning: 'adverb of time (grammar term)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'كَلِمَةُ "أَمْسِ" ظَرْفُ زَمَانٍ فِي الجُمْلَة', transliteration: 'Kalimatu "amsi" zarfu zamanin fil-jumlah', translation: 'The word "yesterday" is an adverb of time in the sentence.' },
  },
  {
    word: 'ظَاهِرَتَان', transliteration: 'zahiratan', meaning: 'two phenomena (dual)', pos: 'noun (dual)',
    synonym: null, antonym: null,
    example: { arabic: 'دَرَسَ ظَاهِرَتَيْنِ مُخْتَلِفَتَيْنِ فِي بَحْثِه', transliteration: 'Darasa zahiratayni mukhtalifatayni fi bahthih', translation: 'He studied two different phenomena in his research.' },
  },
  {
    word: 'ظَلَّامٌ', transliteration: 'zallam', meaning: 'a great oppressor (intensive form)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَصَفَهُ التَّارِيخُ بِأَنَّهُ حَاكِمٌ ظَلَّام', transliteration: 'Wasafahut-tarikhu bi\'annahu hakimun zallam', translation: 'History described him as a very oppressive ruler.' },
  },
  {
    word: 'ظِلِّيَّة الأَشْجَار', transliteration: 'zilliyyatul-ashjar', meaning: 'the shade-giving quality of trees', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَفَادُوا مِنْ ظِلِّيَّةِ الأَشْجَارِ فِي الحَرّ', transliteration: 'Istafadu min zilliyyatil-ashjari fil-harr', translation: 'They benefited from the shade of the trees in the heat.' },
  },
  {
    word: 'ظُهُورًا', transliteration: 'zuhuran', meaning: 'appearing / visibly (adverb)', pos: 'adverb',
    synonym: null, antonym: null,
    example: { arabic: 'ازْدَادَ ظُهُورًا فِي وَسَائِلِ الإِعْلَام', transliteration: 'Izdada zuhuran fi wasa\'ilil-i\'lam', translation: 'He appeared more visibly in the media.' },
  },
  {
    word: 'ظِلٌّ وَارِف', transliteration: 'zillun warif', meaning: 'lush shade (fixed phrase)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسُوا تَحْتَ ظِلٍّ وَارِفٍ عِنْدَ النَّهْر', transliteration: 'Jalasu tahta zillin warifin \'indan-nahr', translation: 'They sat under lush shade by the river.' },
  },
  {
    word: 'ظَبَاء', transliteration: 'zaba\'', meaning: 'gazelles (alternate plural form)', pos: 'noun (plural)',
    synonym: 'ظِبَاء (ziba\')', antonym: null,
    example: { arabic: 'اِنْتَشَرَتِ الظَّبَاءُ فِي أَرْجَاءِ المَحْمِيَّة', transliteration: 'Intasharatiz-zaba\'u fi arja\'il-mahmiyyah', translation: 'Gazelles spread throughout the reserve.' },
  },
  ],

  'ع': [
  {
      word: 'عِلْم', transliteration: '\'ilm', meaning: 'knowledge', pos: 'noun',
      synonym: 'مَعْرِفَة (ma\'rifah)', antonym: 'جَهْل (ignorance)',
      example: { arabic: 'طَلَبُ العِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِم', transliteration: 'Talabul-\'ilmi faridatun \'ala kulli muslim', translation: 'Seeking knowledge is obligatory on every Muslim.' },
    },
  {
      word: 'عَمَل', transliteration: '\'amal', meaning: 'work / deed', pos: 'noun',
      synonym: 'شُغْل (shughl)', antonym: 'كَسَل (laziness)',
      example: { arabic: 'ذَهَبَ إِلَى عَمَلِهِ فِي الصَّبَاح', transliteration: 'Dhahaba ila \'amalihi fis-sabah', translation: 'He went to his work in the morning.' },
    },
  {
      word: 'عَظِيم', transliteration: '\'azim', meaning: 'great / magnificent', pos: 'adjective',
      synonym: null, antonym: 'حَقِير (lowly)',
      example: { arabic: 'اللَّهُ عَظِيمٌ وَقَدِير', transliteration: 'Allahu \'azimun wa qadir', translation: 'Allah is Great and Capable.' },
    },
  {
      word: 'عَدْل', transliteration: '\'adl', meaning: 'justice', pos: 'noun',
      synonym: 'إِنْصَاف (insaf)', antonym: 'ظُلْم (injustice)',
      example: { arabic: 'العَدْلُ أَسَاسُ الحُكْم', transliteration: 'Al-\'adlu asasul-hukm', translation: 'Justice is the foundation of governance.' },
    },
  {
      word: 'عَائِلَة', transliteration: '\'a\'ilah', meaning: 'family', pos: 'noun',
      synonym: 'أُسْرَة (usrah)', antonym: null,
      example: { arabic: 'اِجْتَمَعَتِ العَائِلَةُ فِي العِيد', transliteration: 'Ijtama\'atil-\'a\'ilatu fil-\'id', translation: 'The family gathered on Eid.' },
    },
  {
      word: 'عَرَفَ', transliteration: '\'arafa', meaning: 'he knew / recognized', pos: 'verb',
      synonym: null, antonym: 'جَهِلَ (was ignorant of)',
      example: { arabic: 'عَرَفَهُ مِنْ صَوْتِهِ فَقَط', transliteration: '\'Arafahu min sawtihi faqat', translation: 'He recognized him just from his voice.' },
    },
  {
      word: 'عَدُوّ', transliteration: '\'aduww', meaning: 'enemy', pos: 'noun',
      synonym: null, antonym: 'صَدِيق (friend)',
      example: { arabic: 'الشَّيْطَانُ عَدُوٌّ لِلْإِنْسَان', transliteration: 'Ash-shaytanu \'aduwwun lil-insan', translation: 'Satan is an enemy to mankind.' },
    },
  {
      word: 'عَمِيق', transliteration: '\'amiq', meaning: 'deep', pos: 'adjective',
      synonym: null, antonym: 'ضَحْل (shallow)',
      example: { arabic: 'البِئْرُ عَمِيقَةٌ جِدًّا', transliteration: 'Al-bi\'ru \'amiqatun jiddan', translation: 'The well is very deep.' },
    },
  {
      word: 'عَطَاء', transliteration: '\'ata\'', meaning: 'giving / generosity', pos: 'noun',
      synonym: 'كَرَم (karam)', antonym: 'بُخْل (stinginess)',
      example: { arabic: 'عُرِفَ بِعَطَائِهِ لِلْفُقَرَاء', transliteration: '\'Urifa bi\'ata\'ihi lilfuqara\'', translation: 'He was known for his giving to the poor.' },
    },
  {
      word: 'عَقْل', transliteration: '\'aql', meaning: 'mind / intellect', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَجِبُ اِسْتِخْدَامُ العَقْلِ فِي التَّفْكِير', transliteration: 'Yajibu istikhdamul-\'aqli fit-tafkir', translation: 'One must use the mind in thinking.' },
    },
  {
      word: 'عَجُوز', transliteration: '\'ajuz', meaning: 'elderly person', pos: 'noun',
      synonym: null, antonym: 'شَابّ (young person)',
      example: { arabic: 'سَاعَدَ العَجُوزَ فِي عُبُورِ الشَّارِع', transliteration: 'Sa\'adal-\'ajuza fi \'uburish-shari\'', translation: 'He helped the elderly person cross the street.' },
    },
  {
      word: 'عَاصِفَة', transliteration: '\'asifah', meaning: 'storm', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'ضَرَبَتِ العَاصِفَةُ السَّاحِلَ لَيْلًا', transliteration: '\'Asafatil-\'asifatus-sahila laylan', translation: 'The storm hit the coast at night.' },
    },
  {
      word: 'عَرَبَة', transliteration: '\'arabah', meaning: 'cart / carriage', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'دَفَعَ العَرَبَةَ المُحَمَّلَةَ بِالفَاكِهَة', transliteration: 'Dafa\'al-\'arabatal-muhammalata bil-fakihah', translation: 'He pushed the cart loaded with fruit.' },
    },
  {
      word: 'عَافِيَة', transliteration: '\'afiyah', meaning: 'wellbeing / good health', pos: 'noun',
      synonym: 'صِحَّة (sihhah)', antonym: null,
      example: { arabic: 'نَسْأَلُ اللَّهَ العَفْوَ وَالعَافِيَة', transliteration: 'Nas\'alullahal-\'afwa wal-\'afiyah', translation: 'We ask Allah for pardon and wellbeing.' },
    },
  {
      word: 'عَنِيد', transliteration: '\'anid', meaning: 'stubborn', pos: 'adjective',
      synonym: 'مُتَعَصِّب (bigoted/stubborn)', antonym: 'مَرِن (flexible)',
      example: { arabic: 'كَانَ عَنِيدًا وَلَمْ يُغَيِّرْ رَأْيَهُ', transliteration: 'Kana \'anidan wa lam yughayyir ra\'yah', translation: 'He was stubborn and did not change his opinion.' },
    },
  {
      word: 'عَيْن', transliteration: '\'ayn', meaning: 'eye / spring (of water)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَهَا عَيْنَانِ جَمِيلَتَان', transliteration: 'Laha \'aynani jamilatan', translation: 'She has two beautiful eyes.' },
    },
  {
      word: 'عَاش', transliteration: '\'asha', meaning: 'he lived', pos: 'verb',
      synonym: null, antonym: 'مَاتَ (died)',
      example: { arabic: 'عَاشَ حَيَاةً سَعِيدَةً مَعَ أُسْرَتِهِ', transliteration: '\'Asha hayatan sa\'idatan ma\'a usratih', translation: 'He lived a happy life with his family.' },
    },
  {
      word: 'عِنَاد', transliteration: '\'inad', meaning: 'stubbornness', pos: 'noun',
      synonym: null, antonym: 'مُرُونَة (flexibility)',
      example: { arabic: 'أَضَرَّهُ عِنَادُهُ فِي كَثِيرٍ مِنَ المَوَاقِف', transliteration: 'Adarrahu \'inaduhu fi kathirin minal-mawaqif', translation: 'His stubbornness harmed him in many situations.' },
    },
  {
      word: 'عُطْلَة', transliteration: '\'utlah', meaning: 'holiday / vacation', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَضَيْنَا العُطْلَةَ عِنْدَ البَحْر', transliteration: 'Qadayna al-\'utlata \'indal-bahr', translation: 'We spent the holiday by the sea.' },
    },
  {
      word: 'عَظْم', transliteration: '\'azm', meaning: 'bone', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كُسِرَ عَظْمُ سَاقِهِ فِي الحَادِث', transliteration: 'Kusira \'azmu saqihi fil-hadith', translation: 'The bone of his leg was broken in the accident.' },
    },
  {
    word: 'عَادَة', transliteration: '\'adah', meaning: 'habit / custom', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الِاسْتِيقَاظُ مُبَكِّرًا عَادَةٌ صِحِّيَّة', transliteration: 'Al-istiqazu mubakkiran \'adatun sihhiyyah', translation: 'Waking up early is a healthy habit.' },
  },
  {
    word: 'عَاقِل', transliteration: '\'aqil', meaning: 'sane / rational', pos: 'adjective',
    synonym: 'حَكِيم (hakim)', antonym: 'أَحْمَق (foolish)',
    example: { arabic: 'تَصَرَّفَ بِشَكْلٍ عَاقِلٍ فِي الأَزْمَة', transliteration: 'Tasarrafa bishaklin \'aqilin fil-azmah', translation: 'He acted rationally during the crisis.' },
  },
  {
    word: 'عَاصِمَة', transliteration: '\'asimah', meaning: 'capital city', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الرِّيَاضُ عَاصِمَةُ المَمْلَكَةِ العَرَبِيَّةِ السُّعُودِيَّة', transliteration: 'Ar-riyadu \'asimatul-mamlakatil-\'arabiyyatis-su\'udiyyah', translation: 'Riyadh is the capital of Saudi Arabia.' },
  },
  {
    word: 'عَدَّ', transliteration: '\'adda', meaning: 'he counted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'عَدَّ النُّقُودَ قَبْلَ وَضْعِهَا فِي الخِزَانَة', transliteration: '\'Addan-nuquda qabla wad\'iha fil-khizanah', translation: 'He counted the money before putting it in the safe.' },
  },
  {
    word: 'عَدَد', transliteration: '\'adad', meaning: 'number', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَادَ عَدَدُ السُّكَّانِ فِي المَدِينَة', transliteration: 'Zada \'adadus-sukkani fil-madinah', translation: 'The number of residents in the city increased.' },
  },
  {
    word: 'عَرِيس', transliteration: '\'aris', meaning: 'groom', pos: 'noun',
    synonym: null, antonym: 'عَرُوس (bride)',
    example: { arabic: 'اِرْتَدَى العَرِيسُ بَدْلَةً أَنِيقَة', transliteration: 'Irtadal-\'arisu badlatan aniqah', translation: 'The groom wore an elegant suit.' },
  },
  {
    word: 'عَرُوس', transliteration: '\'arus', meaning: 'bride', pos: 'noun',
    synonym: null, antonym: 'عَرِيس (groom)',
    example: { arabic: 'كَانَتِ العَرُوسُ فِي غَايَةِ الجَمَال', transliteration: 'Kanatil-\'arusu fi ghayatil-jamal', translation: 'The bride was extremely beautiful.' },
  },
  {
    word: 'عَشَاء', transliteration: '\'asha\'', meaning: 'dinner', pos: 'noun',
    synonym: null, antonym: 'فَطُور (breakfast)',
    example: { arabic: 'تَنَاوَلْنَا العَشَاءَ مَعًا', transliteration: 'Tanawalnal-\'asha\'a ma\'an', translation: 'We had dinner together.' },
  },
  {
    word: 'عَصَبِيّ', transliteration: '\'asabiyy', meaning: 'nervous / irritable', pos: 'adjective',
    synonym: null, antonym: 'هَادِئ (calm)',
    example: { arabic: 'كَانَ عَصَبِيًّا بِسَبَبِ ضَغْطِ العَمَل', transliteration: 'Kana \'asabiyyan bisababi daghtil-\'amal', translation: 'He was irritable because of work pressure.' },
  },
  {
    word: 'عَظَمَة', transliteration: '\'azamah', meaning: 'greatness', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعْكِسُ الآثَارُ عَظَمَةَ الحَضَارَةِ القَدِيمَة', transliteration: 'Ta\'kisul-atharu \'azamatal-hadaratil-qadimah', translation: 'The ruins reflect the greatness of the ancient civilization.' },
  },
  {
    word: 'عَافَى', transliteration: '\'afa', meaning: 'He healed / restored to health', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'عَافَاهُ اللَّهُ مِنَ المَرَض', transliteration: '\'Afahullahu minal-marad', translation: 'Allah healed him from the illness.' },
  },
  {
    word: 'عِمَارَة', transliteration: '\'imarah', meaning: 'building / architecture', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَرَسَ فَنَّ العِمَارَةِ فِي الجَامِعَة', transliteration: 'Darasa fannal-\'imarati fil-jami\'ah', translation: 'He studied the art of architecture at university.' },
  },
  {
    word: 'عُنْصُر', transliteration: '\'unsur', meaning: 'element', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الصَّبْرُ عُنْصُرٌ مُهِمٌّ لِلنَّجَاح', transliteration: 'As-sabru \'unsurun muhimmun lin-najah', translation: 'Patience is an important element for success.' },
  },
  {
    word: 'عَنِيف', transliteration: '\'anif', meaning: 'violent', pos: 'adjective',
    synonym: null, antonym: 'رَقِيق (gentle)',
    example: { arabic: 'كَانَ رَدُّ فِعْلِهِ عَنِيفًا وَغَيْرَ مُتَوَقَّع', transliteration: 'Kana raddu fi\'lihi \'anifan wa ghayra mutawaqqa\'', translation: 'His reaction was violent and unexpected.' },
  },
  {
    word: 'عَهْد', transliteration: '\'ahd', meaning: 'covenant / era', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَطَعَ عَلَى نَفْسِهِ عَهْدًا بِالتَّغْيِير', transliteration: 'Qata\'a \'ala nafsihi \'ahdan bit-taghyir', translation: 'He made a covenant with himself to change.' },
  },
  {
    word: 'عَاهَدَ', transliteration: '\'ahada', meaning: 'he made a covenant with', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'عَاهَدَ نَفْسَهُ عَلَى الِاجْتِهَاد', transliteration: '\'Ahada nafsahu \'alal-ijtihad', translation: 'He made a covenant with himself to strive hard.' },
  },
  {
    word: 'عُنْوَان', transliteration: '\'unwan', meaning: 'address / title', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَتَبَ عُنْوَانَهُ عَلَى الظَّرْف', transliteration: 'Kataba \'unwanahu \'alaz-zarf', translation: 'He wrote his address on the envelope.' },
  },
  {
    word: 'عَبَرَ', transliteration: '\'abara', meaning: 'he crossed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'عَبَرَ الشَّارِعَ بِحَذَر', transliteration: '\'Abarash-shari\'a bihadhar', translation: 'He crossed the street carefully.' },
  },
  {
    word: 'عِبَادَة', transliteration: '\'ibadah', meaning: 'worship', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خُلِقَ الإِنْسَانُ لِعِبَادَةِ اللَّه', transliteration: 'Khuliqal-insanu li\'ibadatillah', translation: 'Man was created to worship Allah.' },
  },
  {
    word: 'عَابَ', transliteration: '\'aba', meaning: 'he found fault with / criticized', pos: 'verb',
    synonym: null, antonym: 'مَدَحَ (praised)',
    example: { arabic: 'عَابَ عَلَيْهِ سُلُوكَهُ فِي الِاجْتِمَاع', transliteration: '\'Aba \'alayhi sulukahu fil-ijtima\'', translation: 'He criticized his behavior in the meeting.' },
  },
  {
    word: 'عَيْب', transliteration: '\'ayb', meaning: 'flaw / fault', pos: 'noun',
    synonym: null, antonym: 'مِيزَة (advantage)',
    example: { arabic: 'لِكُلِّ إِنْسَانٍ عَيْبٌ يُخْفِيه', transliteration: 'Likulli insanin \'aybun yukhfih', translation: 'Every person has a flaw they hide.' },
  },
  {
    word: 'عَجِيب', transliteration: '\'ajib', meaning: 'strange / amazing', pos: 'adjective',
    synonym: 'غَرِيب (gharib)', antonym: null,
    example: { arabic: 'وَقَعَ حَادِثٌ عَجِيبٌ فِي القَرْيَة', transliteration: 'Waqa\'a hadithun \'ajibun fil-qaryah', translation: 'A strange incident occurred in the village.' },
  },
  {
    word: 'عَجَبٌ', transliteration: '\'ajab', meaning: 'astonishment / wonder', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَا لَلْعَجَبِ مِنْ صُنْعِ اللَّه', transliteration: 'Ya lal-\'ajabi min sun\'illah', translation: 'How amazing is the creation of Allah!' },
  },
  {
    word: 'عَقِيدَة', transliteration: '\'aqidah', meaning: 'creed / belief', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَلَّمَ أُصُولَ العَقِيدَةِ الإِسْلَامِيَّة', transliteration: 'Ta\'allama usulal-\'aqidatil-islamiyyah', translation: 'He learned the fundamentals of Islamic creed.' },
  },
  {
    word: 'عُقُوبَة', transliteration: '\'uqubah', meaning: 'punishment', pos: 'noun',
    synonym: null, antonym: 'مُكَافَأَة (reward)',
    example: { arabic: 'فَرَضَ القَانُونُ عُقُوبَةً صَارِمَة', transliteration: 'Faradal-qanunu \'uqubatan sarimah', translation: 'The law imposed a strict punishment.' },
  },
  {
    word: 'عُلُوّ', transliteration: '\'uluww', meaning: 'height / elevation (also arrogance)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَعَرَ بِالدُّوَارِ مِنْ عُلُوِّ الجَبَل', transliteration: 'Sha\'ara bid-duwari min \'uluwwil-jabal', translation: 'He felt dizzy from the height of the mountain.' },
  },
  {
    word: 'عَابِر', transliteration: '\'abir', meaning: 'passing / transient', pos: 'adjective',
    synonym: null, antonym: 'دَائِم (permanent)',
    example: { arabic: 'كَانَ حُزْنُهُ عَابِرًا وَلَمْ يَدُم', transliteration: 'Kana huznuhu \'abiran wa lam yadum', translation: 'His sadness was fleeting and did not last.' },
  },
  {
    word: 'عَوَّضَ', transliteration: '\'awwada', meaning: 'he compensated', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'عَوَّضَهُ عَنِ الخَسَارَةِ الَّتِي لَحِقَتْ بِه', transliteration: '\'Awwadahu \'anil-khasaratillati lahiqat bih', translation: 'He compensated him for the loss he suffered.' },
  },
  {
    word: 'عُنْف', transliteration: '\'unf', meaning: 'violence', pos: 'noun',
    synonym: null, antonym: 'رِفْق (gentleness)',
    example: { arabic: 'يَرْفُضُ الإِسْلَامُ العُنْفَ بِكُلِّ أَشْكَالِه', transliteration: 'Yarfudul-islamul-\'unfa bikulli ashkalih', translation: 'Islam rejects violence in all its forms.' },
  },
  {
    word: 'عِلَاج', transliteration: '\'ilaj', meaning: 'treatment / cure', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خَضَعَ لِعِلَاجٍ طَبِيعِيٍّ بَعْدَ الإِصَابَة', transliteration: 'Khada\'a li\'ilajin tabi\'iyyin ba\'dal-isabah', translation: 'He underwent physical therapy after the injury.' },
  },
  ],

  'غ': [
  {
      word: 'غَنِيّ', transliteration: 'ghaniyy', meaning: 'rich', pos: 'adjective',
      synonym: 'ثَرِيّ (thariyy)', antonym: 'فَقِير (poor)',
      example: { arabic: 'أَصْبَحَ غَنِيًّا بَعْدَ نَجَاحِ تِجَارَتِهِ', transliteration: 'Asbaha ghaniyyan ba\'da najahi tijaratih', translation: 'He became rich after his trade succeeded.' },
    },
  {
      word: 'غَدًا', transliteration: 'ghadan', meaning: 'tomorrow', pos: 'adverb',
      synonym: null, antonym: 'أَمْس (yesterday)',
      example: { arabic: 'سَنُسَافِرُ غَدًا صَبَاحًا', transliteration: 'Sanusafiru ghadan sabahan', translation: 'We will travel tomorrow morning.' },
    },
  {
      word: 'غَرِيب', transliteration: 'gharib', meaning: 'strange / stranger', pos: 'adjective / noun',
      synonym: null, antonym: 'مَأْلُوف (familiar)',
      example: { arabic: 'سَمِعَ صَوْتًا غَرِيبًا فِي الظَّلَام', transliteration: 'Sami\'a sawtan gharaban fiz-zalam', translation: 'He heard a strange sound in the dark.' },
    },
  {
      word: 'غَرَق', transliteration: 'gharaqa', meaning: 'he drowned / sank', pos: 'verb',
      synonym: null, antonym: 'طَفَا (floated)',
      example: { arabic: 'كَادَ يَغْرَقُ لَوْلَا مُسَاعَدَةُ صَدِيقِهِ', transliteration: 'Kada yaghraqu lawla musa\'adatu sadiqih', translation: 'He nearly drowned had it not been for his friend\'s help.' },
    },
  {
      word: 'غَضِبَ', transliteration: 'ghadiba', meaning: 'he became angry', pos: 'verb',
      synonym: null, antonym: 'رَضِيَ (was pleased)',
      example: { arabic: 'غَضِبَ مِنْ تَصَرُّفِهِ غَيْرِ اللَّائِق', transliteration: 'Ghadiba min tasarrufihi ghayril-la\'iq', translation: 'He became angry at his inappropriate behavior.' },
    },
  {
      word: 'غَابَة', transliteration: 'ghabah', meaning: 'forest', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَعِيشُ الحَيَوَانَاتُ فِي الغَابَة', transliteration: 'Ta\'ishul-hayawanatu fil-ghabah', translation: 'Animals live in the forest.' },
    },
  {
      word: 'غَالٍ', transliteration: 'ghali', meaning: 'expensive / dear', pos: 'adjective',
      synonym: null, antonym: 'رَخِيص (cheap)',
      example: { arabic: 'هٰذَا المَنْزِلُ غَالٍ جِدًّا', transliteration: 'Hadhal-manzilu ghalin jiddan', translation: 'This house is very expensive.' },
    },
  {
      word: 'غَسَلَ', transliteration: 'ghasala', meaning: 'he washed', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'غَسَلَ يَدَيْهِ قَبْلَ الأَكْل', transliteration: 'Ghasala yadayhi qablal-akl', translation: 'He washed his hands before eating.' },
    },
  {
      word: 'غَيْم', transliteration: 'ghaym', meaning: 'clouds', pos: 'noun',
      synonym: 'سَحَاب (sahab)', antonym: null,
      example: { arabic: 'غَطَّى الغَيْمُ السَّمَاءَ بَعْدَ الظُّهْر', transliteration: 'Ghattal-ghaymus-sama\'a ba\'daz-zuhr', translation: 'Clouds covered the sky after noon.' },
    },
  {
      word: 'غَفَرَ', transliteration: 'ghafara', meaning: 'he forgave', pos: 'verb',
      synonym: 'سَامَحَ (samaha)', antonym: 'عَاقَبَ (punished)',
      example: { arabic: 'غَفَرَ اللَّهُ لِمَنْ تَابَ', transliteration: 'Ghafarallahu liman taba', translation: 'Allah forgave whoever repented.' },
    },
  {
      word: 'غَيُور', transliteration: 'ghayur', meaning: 'jealous / protective', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'هُوَ غَيُورٌ عَلَى دِينِهِ وَأُسْرَتِهِ', transliteration: 'Huwa ghayurun \'ala dinihi wa usratih', translation: 'He is protective of his religion and family.' },
    },
  {
      word: 'غَنِيمَة', transliteration: 'ghanimah', meaning: 'spoils / gain', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِعْتَبَرَ الوَقْتَ غَنِيمَةً لَا تُعَوَّض', transliteration: 'I\'tabaral-waqta ghanimatan la tu\'awwad', translation: 'He considered time an irreplaceable gain.' },
    },
  {
      word: 'غُبَار', transliteration: 'ghubar', meaning: 'dust', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'غَطَّى الغُبَارُ سَطْحَ الطَّاوِلَة', transliteration: 'Ghattal-ghubaru sathat-tawilah', translation: 'Dust covered the surface of the table.' },
    },
  {
      word: 'غَامِض', transliteration: 'ghamid', meaning: 'mysterious / ambiguous', pos: 'adjective',
      synonym: null, antonym: 'وَاضِح (clear)',
      example: { arabic: 'كَانَتِ القِصَّةُ غَامِضَةً حَتَّى النِّهَايَة', transliteration: 'Kanatil-qissatu ghamidatan hattan-nihayah', translation: 'The story was mysterious until the end.' },
    },
  {
      word: 'غُصْن', transliteration: 'ghusn', meaning: 'branch (of a tree)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'جَلَسَ الطَّائِرُ عَلَى غُصْنِ الشَّجَرَة', transliteration: 'Jalasat-ta\'iru \'ala ghusnish-shajarah', translation: 'The bird sat on the branch of the tree.' },
    },
  {
      word: 'غَاب', transliteration: 'ghaba', meaning: 'he was absent', pos: 'verb',
      synonym: null, antonym: 'حَضَرَ (attended)',
      example: { arabic: 'غَابَ عَنِ المَدْرَسَةِ بِسَبَبِ المَرَض', transliteration: 'Ghaba \'anil-madrasati bisababil-marad', translation: 'He was absent from school due to illness.' },
    },
  {
      word: 'غَرِيزَة', transliteration: 'gharizah', meaning: 'instinct', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الأُمُومَةُ غَرِيزَةٌ فِطْرِيَّة', transliteration: 'Al-umumatu gharizatun fitriyyah', translation: 'Motherhood is a natural instinct.' },
    },
  {
      word: 'غَرْب', transliteration: 'gharb', meaning: 'west', pos: 'noun',
      synonym: null, antonym: 'شَرْق (east)',
      example: { arabic: 'تَغْرُبُ الشَّمْسُ فِي جِهَةِ الغَرْب', transliteration: 'Taghrubush-shamsu fi jihatil-gharb', translation: 'The sun sets in the direction of the west.' },
    },
  {
      word: 'غِذَاء', transliteration: 'ghidha\'', meaning: 'nourishment / food', pos: 'noun',
      synonym: 'طَعَام (ta\'am)', antonym: null,
      example: { arabic: 'الغِذَاءُ الصِّحِّيُّ ضَرُورِيّ لِلْجِسْم', transliteration: 'Al-ghidha\'us-sihhiyyu daruriyy lil-jism', translation: 'Healthy nourishment is necessary for the body.' },
    },
  {
      word: 'غَزِير', transliteration: 'ghazir', meaning: 'abundant / heavy (rain)', pos: 'adjective',
      synonym: 'كَثِير (kathir)', antonym: 'قَلِيل (little)',
      example: { arabic: 'هَطَلَ مَطَرٌ غَزِيرٌ اللَّيْلَةَ المَاضِيَة', transliteration: 'Hatala mataran ghaziran al-laylatal-madiyah', translation: 'Heavy rain fell last night.' },
    },
  {
    word: 'غَضَب', transliteration: 'ghadab', meaning: 'anger', pos: 'noun',
    synonym: null, antonym: 'رِضَا (contentment)',
    example: { arabic: 'كَظَمَ غَضَبَهُ وَلَمْ يَرُدّ', transliteration: 'Kazama ghadabahu wa lam yarudd', translation: 'He suppressed his anger and did not respond.' },
  },
  {
    word: 'غَرَّدَ', transliteration: 'gharrada', meaning: 'it chirped / tweeted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'غَرَّدَ العُصْفُورُ عَلَى الغُصْن', transliteration: 'Gharradal-\'usfuru \'alal-ghusn', translation: 'The bird chirped on the branch.' },
  },
  {
    word: 'غُرْفَة', transliteration: 'ghurfah', meaning: 'room', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَامَ فِي غُرْفَتِهِ مُبَكِّرًا', transliteration: 'Nama fi ghurfatihi mubakkiran', translation: 'He slept in his room early.' },
  },
  {
    word: 'غِنَاء', transliteration: 'ghina\'', meaning: 'singing', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَمَتَعُوا بِالغِنَاءِ فِي الحَفْلَة', transliteration: 'Istamta\'u bil-ghina\'i fil-haflah', translation: 'They enjoyed the singing at the party.' },
  },
  {
    word: 'غَنَّى', transliteration: 'ghanna', meaning: 'he sang', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'غَنَّى أُغْنِيَةً جَمِيلَةً لِلْأَطْفَال', transliteration: 'Ghanna ughniyatan jamilatan lil-atfal', translation: 'He sang a beautiful song for the children.' },
  },
  {
    word: 'غُرُوب', transliteration: 'ghurub', meaning: 'sunset', pos: 'noun',
    synonym: null, antonym: 'شُرُوق (sunrise)',
    example: { arabic: 'شَاهَدَ غُرُوبَ الشَّمْسِ عَلَى الشَّاطِئ', transliteration: 'Shahada ghuruba ash-shamsi \'alash-shati\'', translation: 'He watched the sunset on the beach.' },
  },
  {
    word: 'غَرِيم', transliteration: 'gharim', meaning: 'rival / creditor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَالَحَ غَرِيمَهُ القَدِيمَ', transliteration: 'Salaha gharimahul-qadim', translation: 'He reconciled with his old rival.' },
  },
  {
    word: 'غِلَاف', transliteration: 'ghilaf', meaning: 'cover / wrapper', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ غِلَافًا وَاقِيًا لِلْكِتَاب', transliteration: 'Wada\'a ghilafan waqiyan lil-kitab', translation: 'He put a protective cover on the book.' },
  },
  {
    word: 'غَزَا', transliteration: 'ghaza', meaning: 'he raided / invaded', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'غَزَا الجَيْشُ الأَرَاضِيَ المُجَاوِرَة', transliteration: 'Ghazal-jayshul-aradil-mujawirah', translation: 'The army invaded the neighboring lands.' },
  },
  {
    word: 'غَيْرَة', transliteration: 'ghayrah', meaning: 'jealousy / zeal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَعَرَتْ بِالغَيْرَةِ مِنْ نَجَاحِ أُخْتِهَا', transliteration: 'Sha\'arat bil-ghayrati min najahi ukhtiha', translation: 'She felt jealousy over her sister\'s success.' },
  },
  {
    word: 'غَامَرَ', transliteration: 'ghamara', meaning: 'he ventured / took a risk', pos: 'verb',
    synonym: 'جَازَفَ (jazafa)', antonym: null,
    example: { arabic: 'غَامَرَ بِرِحْلَةٍ صَعْبَةٍ فِي الجَبَل', transliteration: 'Ghamara birihlatin sa\'batin fil-jabal', translation: 'He ventured on a difficult trip in the mountains.' },
  },
  {
    word: 'غِلَاظَة', transliteration: 'ghilazah', meaning: 'harshness / coarseness', pos: 'noun',
    synonym: null, antonym: 'رِقَّة (gentleness)',
    example: { arabic: 'تَجَنَّبَ الغِلَاظَةَ فِي التَّعَامُلِ مَعَ النَّاس', transliteration: 'Tajannabal-ghilazata fit-ta\'amuli ma\'an-nas', translation: 'He avoided harshness in dealing with people.' },
  },
  {
    word: 'غَلِيظ', transliteration: 'ghaliz', meaning: 'thick / harsh', pos: 'adjective',
    synonym: null, antonym: 'رَقِيق (thin/gentle)',
    example: { arabic: 'اِسْتَخْدَمَ حَبْلًا غَلِيظًا لِرَبْطِ الأَمْتِعَة', transliteration: 'Istakhdama hablan ghalizan lirabtil-amti\'ah', translation: 'He used a thick rope to tie the luggage.' },
  },
  {
    word: 'غَرَامَة', transliteration: 'gharamah', meaning: 'fine (penalty)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'دَفَعَ غَرَامَةً بِسَبَبِ تَجَاوُزِ السُّرْعَة', transliteration: 'Dafa\'a gharamatan bisababi tajawuzis-sur\'ah', translation: 'He paid a fine for exceeding the speed limit.' },
  },
  {
    word: 'غَذَّى', transliteration: 'ghadhdha', meaning: 'he nourished / fed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'غَذَّتِ الأُمُّ طِفْلَهَا جَيِّدًا', transliteration: 'Ghadhdhatil-ummu tiflaha jayyidan', translation: 'The mother nourished her child well.' },
  },
  {
    word: 'غَرَّاء', transliteration: 'gharra\'', meaning: 'radiant / bright (feminine)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'اِبْتَسَمَتِ ابْتِسَامَتَهَا الغَرَّاء', transliteration: 'Ibtasamat ibtisamataha al-gharra\'', translation: 'She smiled her radiant smile.' },
  },
  {
    word: 'غَاشِم', transliteration: 'ghashim', meaning: 'oppressive / unjust', pos: 'adjective',
    synonym: 'ظَالِم (zalim)', antonym: null,
    example: { arabic: 'ثَارَ الشَّعْبُ عَلَى الحَاكِمِ الغَاشِم', transliteration: 'Tharash-sha\'bu \'alal-hakimil-ghashim', translation: 'The people rebelled against the oppressive ruler.' },
  },
  {
    word: 'غِرَاس', transliteration: 'ghiras', meaning: 'seedlings / young plants', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَرَعَ غِرَاسًا جَدِيدَةً فِي البُسْتَان', transliteration: 'Zara\'a ghirasan jadidatan fil-bustan', translation: 'He planted new seedlings in the orchard.' },
  },
  {
    word: 'غَرَسَ', transliteration: 'gharasa', meaning: 'he planted (a tree)', pos: 'verb',
    synonym: 'زَرَعَ (zara\'a)', antonym: null,
    example: { arabic: 'غَرَسَ شَجَرَةً فِي يَوْمِ مِيلَادِ ابْنِه', transliteration: 'Gharasa shajaratan fi yawmi miladi ibnih', translation: 'He planted a tree on his son\'s birthday.' },
  },
  {
    word: 'غِلَّة', transliteration: 'ghillah', meaning: 'harvest yield / produce', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَتْ غِلَّةُ هٰذَا العَامِ وَفِيرَة', transliteration: 'Kanat ghillatu hadhal-\'ami wafirah', translation: 'This year\'s harvest yield was abundant.' },
  },
  {
    word: 'غَرَّبَ', transliteration: 'gharraba', meaning: 'he went/headed westward', pos: 'verb',
    synonym: null, antonym: 'شَرَّقَ (headed east)',
    example: { arabic: 'غَرَّبَ فِي رِحْلَتِهِ بَحْثًا عَنِ العَمَل', transliteration: 'Gharraba fi rihlatihi bahthan \'anil-\'amal', translation: 'He headed west on his journey in search of work.' },
  },
  {
    word: 'غَيْم رَعْدِيّ', transliteration: 'ghaym ra\'diyy', meaning: 'thunderclouds', pos: 'noun (compound)',
    synonym: null, antonym: null,
    example: { arabic: 'ظَهَرَتْ غُيُومٌ رَعْدِيَّةٌ فِي الأُفُق', transliteration: 'Zaharat ghuyumun ra\'diyyatun fil-ufuq', translation: 'Thunderclouds appeared on the horizon.' },
  },
  {
    word: 'غَضَّ الطَّرْف', transliteration: 'ghadd at-tarf', meaning: 'to overlook / turn a blind eye (idiom)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'غَضَّ الطَّرْفَ عَنْ أَخْطَاءِ زُمَلَائِه', transliteration: 'Ghaddat-tarfa \'an akhta\'i zumala\'ih', translation: 'He turned a blind eye to his colleagues\' mistakes.' },
  },
  {
    word: 'غُبَاريّ', transliteration: 'ghubariyy', meaning: 'dusty (adjective)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ الطَّرِيقُ غُبَارِيًّا بَعْدَ الجَفَاف', transliteration: 'Kanat-tariqu ghubariyyan ba\'dal-jafaf', translation: 'The road was dusty after the drought.' },
  },
  {
    word: 'غَنَاء', transliteration: 'ghana\'', meaning: 'richness / self-sufficiency', pos: 'noun',
    synonym: null, antonym: 'حَاجَة (need)',
    example: { arabic: 'الغِنَى غِنَى النَّفْسِ لَا غِنَى المَال', transliteration: 'Al-ghina ghinan-nafsi la ghinal-mal', translation: 'True richness is richness of the soul, not of wealth.' },
  },
  {
    word: 'غَلَبَ', transliteration: 'ghalaba', meaning: 'he overcame / prevailed over', pos: 'verb',
    synonym: null, antonym: 'اِنْهَزَمَ (was defeated)',
    example: { arabic: 'غَلَبَ خَصْمَهُ فِي المُبَارَاةِ النِّهَائِيَّة', transliteration: 'Ghalaba khasmahu fil-mubaratin-niha\'iyyah', translation: 'He overcame his opponent in the final match.' },
  },
  {
    word: 'غَالِبِيَّة', transliteration: 'ghalibiyyah', meaning: 'majority', pos: 'noun',
    synonym: null, antonym: 'أَقَلِّيَّة (minority)',
    example: { arabic: 'وَافَقَتْ غَالِبِيَّةُ الحَاضِرِينَ عَلَى القَرَار', transliteration: 'Wafaqat ghalibiyyatul-hadirina \'alal-qarar', translation: 'The majority of attendees agreed to the decision.' },
  },
  {
    word: 'غَيْبَة', transliteration: 'ghaybah', meaning: 'backbiting / absence', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَهَى الإِسْلَامُ عَنِ الغَيْبَةِ وَالنَّمِيمَة', transliteration: 'Nahal-islamu \'anil-ghaybati wan-namimah', translation: 'Islam forbids backbiting and gossip.' },
  },
  {
    word: 'غَيَّرَ', transliteration: 'ghayyara', meaning: 'he changed (something)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'غَيَّرَ رَأْيَهُ بَعْدَ سَمَاعِ الحُجَّة', transliteration: 'Ghayyara ra\'yahu ba\'da sama\'il-hujjah', translation: 'He changed his opinion after hearing the argument.' },
  },
  {
    word: 'غَرَق النَّجَاح', transliteration: 'gharaq an-najah', meaning: 'to be overwhelmed by success (idiom, rare)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'لَمْ يَدَعْ نَفْسَهُ يَغْرَقُ فِي نَجَاحِه', transliteration: 'Lam yada\' nafsahu yaghraqu fi najahih', translation: 'He did not let himself become overwhelmed by his success.' },
  },
  ],

  'ف': [
  {
      word: 'فَرِحَ', transliteration: 'fariha', meaning: 'he was happy', pos: 'verb',
      synonym: 'سَعِدَ (sa\'ida)', antonym: 'حَزِنَ (was sad)',
      example: { arabic: 'فَرِحَ بِنَجَاحِهِ فِي الِامْتِحَان', transliteration: 'Fariha binajahihi fil-imtihan', translation: 'He was happy with his success in the exam.' },
    },
  {
      word: 'فَقِير', transliteration: 'faqir', meaning: 'poor', pos: 'adjective',
      synonym: 'مِسْكِين (miskin)', antonym: 'غَنِيّ (rich)',
      example: { arabic: 'سَاعَدَ الرَّجُلَ الفَقِير', transliteration: 'Sa\'adar-rajulal-faqir', translation: 'He helped the poor man.' },
    },
  {
      word: 'فَهِمَ', transliteration: 'fahima', meaning: 'he understood', pos: 'verb',
      synonym: 'أَدْرَكَ (adraka)', antonym: 'جَهِلَ (failed to grasp)',
      example: { arabic: 'فَهِمَ الدَّرْسَ بِسُرْعَة', transliteration: 'Fahimad-darsa bisur\'ah', translation: 'He understood the lesson quickly.' },
    },
  {
      word: 'فَصْل', transliteration: 'fasl', meaning: 'classroom / season / chapter', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الرَّبِيعُ فَصْلٌ جَمِيل', transliteration: 'Ar-rabi\'u faslun jamil', translation: 'Spring is a beautiful season.' },
    },
  {
      word: 'فَتَحَ', transliteration: 'fataha', meaning: 'he opened', pos: 'verb',
      synonym: null, antonym: 'أَغْلَقَ (closed)',
      example: { arabic: 'فَتَحَ البَابَ لِلضَّيْف', transliteration: 'Fatahal-baba lidayf', translation: 'He opened the door for the guest.' },
    },
  {
      word: 'فَاكِهَة', transliteration: 'fakihah', meaning: 'fruit', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَنَاوَلْتُ الفَاكِهَةَ بَعْدَ الغَدَاء', transliteration: 'Tanawaltul-fakihata ba\'dal-ghada\'', translation: 'I had fruit after lunch.' },
    },
  {
      word: 'فَرَح', transliteration: 'farah', meaning: 'joy', pos: 'noun',
      synonym: 'سُرُور (surur)', antonym: 'حُزْن (sadness)',
      example: { arabic: 'عَمَّ الفَرَحُ البَيْتَ يَوْمَ العُرْس', transliteration: '\'Ammal-farahul-bayta yawmal-\'urs', translation: 'Joy filled the house on the wedding day.' },
    },
  {
      word: 'فَشِلَ', transliteration: 'fashila', meaning: 'he failed', pos: 'verb',
      synonym: null, antonym: 'نَجَحَ (succeeded)',
      example: { arabic: 'فَشِلَ فِي المُحَاوَلَةِ الأُولَى', transliteration: 'Fashila fil-muhawalatil-ula', translation: 'He failed in the first attempt.' },
    },
  {
      word: 'فُنْدُق', transliteration: 'funduq', meaning: 'hotel', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَقَمْنَا فِي فُنْدُقٍ قَرِيبٍ مِنَ البَحْر', transliteration: 'Aqamna fi funduqin qaribin minal-bahr', translation: 'We stayed in a hotel near the sea.' },
    },
  {
      word: 'فَخُور', transliteration: 'fakhur', meaning: 'proud', pos: 'adjective',
      synonym: null, antonym: 'خَجِل (ashamed)',
      example: { arabic: 'أَنَا فَخُورٌ بِإِنْجَازَاتِك', transliteration: 'Ana fakhurun bi\'injazatik', translation: 'I am proud of your achievements.' },
    },
  {
      word: 'فِكْرَة', transliteration: 'fikrah', meaning: 'idea', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'لَدَيْهِ فِكْرَةٌ رَائِعَةٌ لِلْمَشْرُوع', transliteration: 'Ladayhi fikratun ra\'i\'atun lil-mashru\'', translation: 'He has a wonderful idea for the project.' },
    },
  {
      word: 'فَازَ', transliteration: 'faza', meaning: 'he won', pos: 'verb',
      synonym: null, antonym: 'خَسِرَ (lost)',
      example: { arabic: 'فَازَ فَرِيقُنَا بِالمُبَارَاة', transliteration: 'Faza fariquna bil-mubarah', translation: 'Our team won the match.' },
    },
  {
      word: 'فَاضِل', transliteration: 'fadil', meaning: 'virtuous / excellent', pos: 'adjective',
      synonym: 'كَرِيم (karim)', antonym: null,
      example: { arabic: 'هُوَ رَجُلٌ فَاضِلٌ يُحِبُّهُ النَّاس', transliteration: 'Huwa rajulun fadilun yuhibbuhun-nas', translation: 'He is a virtuous man whom people love.' },
    },
  {
      word: 'فَرَشَ', transliteration: 'farasha', meaning: 'he spread out / laid down', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'فَرَشَ السَّجَّادَةَ فِي الصَّالَة', transliteration: 'Farashas-sajjadata fis-salah', translation: 'He laid out the carpet in the hall.' },
    },
  {
      word: 'فُرْصَة', transliteration: 'fursah', meaning: 'opportunity', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'حَصَلَ عَلَى فُرْصَةِ عَمَلٍ جَيِّدَة', transliteration: 'Hasala \'ala fursati \'amalin jayyidah', translation: 'He got a good job opportunity.' },
    },
  {
      word: 'فِعْل', transliteration: 'fi\'l', meaning: 'verb / action', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الفِعْلُ أَبْلَغُ مِنَ القَوْل', transliteration: 'Al-fi\'lu ablaghu minal-qawl', translation: 'Action speaks louder than words.' },
    },
  {
      word: 'فَجْر', transliteration: 'fajr', meaning: 'dawn', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِسْتَيْقَظَ عِنْدَ الفَجْرِ لِلصَّلَاة', transliteration: 'Istayqaza \'indal-fajri lissalah', translation: 'He woke up at dawn for prayer.' },
    },
  {
      word: 'فَائِدَة', transliteration: 'fa\'idah', meaning: 'benefit', pos: 'noun',
      synonym: null, antonym: 'ضَرَر (harm)',
      example: { arabic: 'لِلرِّيَاضَةِ فَائِدَةٌ كَبِيرَةٌ لِلْجِسْم', transliteration: 'Lirriyadati fa\'idatun kabiratun lil-jism', translation: 'Sport has great benefit for the body.' },
    },
  {
      word: 'فَحْم', transliteration: 'fahm', meaning: 'coal / charcoal', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَشْعَلُوا الفَحْمَ لِلشَّوَاء', transliteration: 'Ash\'alul-fahma lish-shawa\'', translation: 'They lit the charcoal for grilling.' },
    },
  {
      word: 'فَوْق', transliteration: 'fawq', meaning: 'above / over', pos: 'preposition',
      synonym: null, antonym: 'تَحْت (under)',
      example: { arabic: 'الطَّائِرَةُ تُحَلِّقُ فَوْقَ الغُيُوم', transliteration: 'At-ta\'iratu tuhalliqu fawqal-ghuyum', translation: 'The plane flies above the clouds.' },
    },
  {
    word: 'فَصِيح', transliteration: 'fasih', meaning: 'eloquent', pos: 'adjective',
    synonym: 'بَلِيغ (baligh)', antonym: null,
    example: { arabic: 'خَطِيبٌ فَصِيحٌ يُؤَثِّرُ فِي المُسْتَمِعِين', transliteration: 'Khatibun fasihun yu\'aththiru fil-mustami\'in', translation: 'An eloquent orator who influences listeners.' },
  },
  {
    word: 'فِلْم', transliteration: 'film', meaning: 'film / movie', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَاهَدْنَا فِلْمًا وَثَائِقِيًّا مُمْتِعًا', transliteration: 'Shahadna filman watha\'iqiyyan mumti\'an', translation: 'We watched an enjoyable documentary film.' },
  },
  {
    word: 'فَنَّان', transliteration: 'fannan', meaning: 'artist', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَسَمَ الفَنَّانُ لَوْحَةً رَائِعَة', transliteration: 'Rasamal-fannanu lawhatan ra\'i\'ah', translation: 'The artist painted a wonderful picture.' },
  },
  {
    word: 'فَنّ', transliteration: 'fann', meaning: 'art', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الخَطُّ العَرَبِيُّ فَنٌّ أَصِيل', transliteration: 'Al-khattul-\'arabiyyu fannun asil', translation: 'Arabic calligraphy is an authentic art.' },
  },
  {
    word: 'فَرَاشَة', transliteration: 'farashah', meaning: 'butterfly', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَطَّتِ الفَرَاشَةُ عَلَى الزَّهْرَة', transliteration: 'Hattatil-farashatu \'alaz-zahrah', translation: 'The butterfly landed on the flower.' },
  },
  {
    word: 'فُرْن', transliteration: 'furn', meaning: 'oven', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'خَبَزَتِ الكَعْكَةَ فِي الفُرْن', transliteration: 'Khabazatil-ka\'kata fil-furn', translation: 'She baked the cake in the oven.' },
  },
  {
    word: 'فِطْرَة', transliteration: 'fitrah', meaning: 'innate nature', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حُبُّ الخَيْرِ مِنَ الفِطْرَة', transliteration: 'Hubbul-khayri minal-fitrah', translation: 'Love of good is part of innate nature.' },
  },
  {
    word: 'فَاتَ', transliteration: 'fata', meaning: 'it passed / elapsed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'فَاتَهُ القِطَارُ بِدَقِيقَتَيْن', transliteration: 'Fatahul-qitaru bidaqiqatayn', translation: 'He missed the train by two minutes.' },
  },
  {
    word: 'فَخْر', transliteration: 'fakhr', meaning: 'pride', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَدَّثَ عَنْ إِنْجَازَاتِهِ بِفَخْر', transliteration: 'Haddatha \'an injazatihi bifakhr', translation: 'He spoke about his achievements with pride.' },
  },
  {
    word: 'فَجَّرَ', transliteration: 'fajjara', meaning: 'he exploded / detonated', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'فَجَّرَ العُمَّالُ الصَّخْرَةَ لِتَمْهِيدِ الطَّرِيق', transliteration: 'Fajjaral-\'ummalus-sakhrata litamhidit-tariq', translation: 'The workers detonated the rock to clear the road.' },
  },
  {
    word: 'فَاجَأَ', transliteration: 'faja\'a', meaning: 'he surprised', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'فَاجَأَهُ بِهَدِيَّةٍ فِي عِيدِ مِيلَادِه', transliteration: 'Faja\'ahu bihadiyyatin fi \'idi miladih', translation: 'He surprised him with a gift on his birthday.' },
  },
  {
    word: 'فَرْصَة', transliteration: 'farsah (variant)', meaning: 'chance (colloquial variant of فُرْصَة)', pos: 'noun',
    synonym: 'فُرْصَة (fursah)', antonym: null,
    example: { arabic: 'أَعْطَاهُ فَرْصَةً أَخِيرَة', transliteration: 'A\'tahu farsatan akhirah', translation: 'He gave him one last chance.' },
  },
  {
    word: 'فَضِيلَة', transliteration: 'fadilah', meaning: 'virtue', pos: 'noun',
    synonym: null, antonym: 'رَذِيلَة (vice)',
    example: { arabic: 'الصِّدْقُ فَضِيلَةٌ عَظِيمَة', transliteration: 'As-sidqu fadilatun \'azimah', translation: 'Honesty is a great virtue.' },
  },
  {
    word: 'فَقَدَ', transliteration: 'faqada', meaning: 'he lost', pos: 'verb',
    synonym: null, antonym: 'وَجَدَ (found)',
    example: { arabic: 'فَقَدَ مَحْفَظَتَهُ فِي السُّوق', transliteration: 'Faqada mahfazatahu fis-suq', translation: 'He lost his wallet in the market.' },
  },
  {
    word: 'فَحَصَ', transliteration: 'fahasa', meaning: 'he examined / inspected', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'فَحَصَ الطَّبِيبُ المَرِيضَ بِعِنَايَة', transliteration: 'Fahasat-tabibul-marida bi\'inayah', translation: 'The doctor examined the patient carefully.' },
  },
  {
    word: 'فَحْص', transliteration: 'fahs', meaning: 'examination / checkup', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَجْرَى فَحْصًا طِبِّيًّا شَامِلًا', transliteration: 'Ajra fahsan tibbiyyan shamilan', translation: 'He had a comprehensive medical checkup.' },
  },
  {
    word: 'فَقَط', transliteration: 'faqat', meaning: 'only / just', pos: 'adverb',
    synonym: null, antonym: null,
    example: { arabic: 'بَقِيَ فَقَطْ عَشْرُ دَقَائِق', transliteration: 'Baqiya faqat \'ashru daqa\'iq', translation: 'Only ten minutes remain.' },
  },
  {
    word: 'فُقَرَاء', transliteration: 'fuqara\'', meaning: 'the poor (plural)', pos: 'noun',
    synonym: null, antonym: 'أَغْنِيَاء (the rich)',
    example: { arabic: 'وُزِّعَتِ الصَّدَقَاتُ عَلَى الفُقَرَاء', transliteration: 'Wuzzi\'atis-sadaqatu \'alal-fuqara\'', translation: 'The charity was distributed to the poor.' },
  },
  {
    word: 'فَتَرَة', transliteration: 'fatrah', meaning: 'period (of time)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَاشَ فَتَرَةً طَوِيلَةً فِي الخَارِج', transliteration: '\'Asha fatratan tawilatan fil-kharij', translation: 'He lived a long period abroad.' },
  },
  {
    word: 'فَتَاة', transliteration: 'fatah', meaning: 'young woman / girl', pos: 'noun',
    synonym: null, antonym: 'فَتَى (young man)',
    example: { arabic: 'كَانَتِ الفَتَاةُ مُتَفَوِّقَةً فِي دِرَاسَتِهَا', transliteration: 'Kanatil-fatatu mutafawwiqatan fi dirasatiha', translation: 'The young woman excelled in her studies.' },
  },
  {
    word: 'فَتَى', transliteration: 'fata', meaning: 'young man / youth', pos: 'noun',
    synonym: 'شَابّ (shabb)', antonym: 'فَتَاة (young woman)',
    example: { arabic: 'كَانَ فَتًى طَمُوحًا مُنْذُ صِغَرِه', transliteration: 'Kana fatan tamuhan mundhu sigharih', translation: 'He was an ambitious youth from a young age.' },
  },
  {
    word: 'فِرْقَة', transliteration: 'firqah', meaning: 'group / band / division', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْضَمَّ إِلَى فِرْقَةٍ مُوسِيقِيَّة', transliteration: 'Indamma ila firqatin musiqiyyah', translation: 'He joined a music band.' },
  },
  {
    word: 'فُصْحَى', transliteration: 'fusha', meaning: 'Classical/Standard Arabic', pos: 'proper noun',
    synonym: null, antonym: 'عَامِّيَّة (colloquial)',
    example: { arabic: 'يَتَحَدَّثُ بِالعَرَبِيَّةِ الفُصْحَى بِطَلَاقَة', transliteration: 'Yatahaddathu bil-\'arabiyyatil-fusha bitalaqah', translation: 'He speaks Classical Arabic fluently.' },
  },
  {
    word: 'فَقِيه', transliteration: 'faqih', meaning: 'jurist / scholar of Islamic law', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَأَلَ الفَقِيهَ عَنْ حُكْمِ المَسْأَلَة', transliteration: 'Sa\'alal-faqiha \'an hukmil-mas\'alah', translation: 'He asked the jurist about the ruling on the matter.' },
  },
  {
    word: 'فُتُور', transliteration: 'futur', meaning: 'lethargy / slackening', pos: 'noun',
    synonym: null, antonym: 'نَشَاط (energy)',
    example: { arabic: 'أَصَابَهُ فُتُورٌ فِي عِبَادَتِه', transliteration: 'Asabahu futurun fi \'ibadatih', translation: 'A slackening in his worship afflicted him.' },
  },
  {
    word: 'فَاحِش', transliteration: 'fahish', meaning: 'excessive / obscene', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'رَفَضَ السِّعْرَ الفَاحِشَ لِلْمَنْزِل', transliteration: 'Rafadas-si\'ral-fahisha lil-manzil', translation: 'He rejected the excessive price for the house.' },
  },
  {
    word: 'فِنَاء', transliteration: 'fina\'', meaning: 'courtyard', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَعِبَ الأَطْفَالُ فِي فِنَاءِ المَدْرَسَة', transliteration: 'La\'ibal-atfalu fi fina\'il-madrasah', translation: 'The children played in the school courtyard.' },
  },
  {
    word: 'فَنَاء', transliteration: 'fana\'', meaning: 'annihilation / perishing', pos: 'noun',
    synonym: null, antonym: 'بَقَاء (permanence)',
    example: { arabic: 'كُلُّ شَيْءٍ إِلَى فَنَاء', transliteration: 'Kullu shay\'in ila fana\'', translation: 'Everything is destined to perish.' },
  },
  {
    word: 'فَاسِد', transliteration: 'fasid', meaning: 'corrupt / spoiled', pos: 'adjective',
    synonym: null, antonym: 'صَالِح (righteous)',
    example: { arabic: 'حَارَبَتِ الحُكُومَةُ المَسْؤُولَ الفَاسِد', transliteration: 'Harabatil-hukumatul-mas\'ulal-fasid', translation: 'The government fought against the corrupt official.' },
  },
  {
    word: 'فَسَادّ', transliteration: 'fasad', meaning: 'corruption', pos: 'noun',
    synonym: null, antonym: 'صَلَاح (righteousness)',
    example: { arabic: 'يَجِبُ مُحَارَبَةُ الفَسَادِ فِي كُلِّ المُؤَسَّسَات', transliteration: 'Yajibu muharabatal-fasadi fi kullil-mu\'assasat', translation: 'Corruption must be fought in all institutions.' },
  },
  ],

  'ق': [
  {
      word: 'قَرَأَ', transliteration: 'qara\'a', meaning: 'he read', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'قَرَأَ الكِتَابَ فِي لَيْلَةٍ وَاحِدَة', transliteration: 'Qara\'al-kitaba fi laylatin wahidah', translation: 'He read the book in one night.' },
    },
  {
      word: 'قَرِيب', transliteration: 'qarib', meaning: 'near / relative', pos: 'adjective / noun',
      synonym: null, antonym: 'بَعِيد (far)',
      example: { arabic: 'بَيْتِي قَرِيبٌ مِنَ المَسْجِد', transliteration: 'Bayti qaribun minal-masjid', translation: 'My house is near the mosque.' },
    },
  {
      word: 'قَوِيّ', transliteration: 'qawiyy', meaning: 'strong', pos: 'adjective',
      synonym: null, antonym: 'ضَعِيف (weak)',
      example: { arabic: 'المُؤْمِنُ القَوِيُّ خَيْرٌ مِنَ المُؤْمِنِ الضَّعِيف', transliteration: 'Al-mu\'minul-qawiyyu khayrun minal-mu\'minid-da\'if', translation: 'The strong believer is better than the weak believer.' },
    },
  {
      word: 'قَلْب', transliteration: 'qalb', meaning: 'heart', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَلْبُهُ مَلِيءٌ بِالحُبِّ لِأُسْرَتِهِ', transliteration: 'Qalbuhu mali\'un bil-hubbi li\'usratih', translation: 'His heart is full of love for his family.' },
    },
  {
      word: 'قَمَر', transliteration: 'qamar', meaning: 'moon', pos: 'noun',
      synonym: null, antonym: 'شَمْس (sun)',
      example: { arabic: 'أَضَاءَ القَمَرُ السَّمَاءَ اللَّيْلَة', transliteration: 'Ada\'al-qamarus-sama\'a al-laylah', translation: 'The moon lit up the sky tonight.' },
    },
  {
      word: 'قَصِير', transliteration: 'qasir', meaning: 'short', pos: 'adjective',
      synonym: null, antonym: 'طَوِيل (tall/long)',
      example: { arabic: 'الطَّرِيقُ قَصِيرٌ إِلَى المَدْرَسَة', transliteration: 'At-tariqu qasirun ilal-madrasah', translation: 'The road to school is short.' },
    },
  {
      word: 'قَابَلَ', transliteration: 'qabala', meaning: 'he met', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'قَابَلَ صَدِيقَهُ القَدِيمَ فِي السُّوق', transliteration: 'Qabala sadiqahul-qadima fis-suq', translation: 'He met his old friend at the market.' },
    },
  {
      word: 'قِرَاءَة', transliteration: 'qira\'ah', meaning: 'reading', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قِرَاءَةُ القُرْآنِ عِبَادَةٌ عَظِيمَة', transliteration: 'Qira\'atul-qur\'ani \'ibadatun \'azimah', translation: 'Reading the Qur\'an is a great act of worship.' },
    },
  {
      word: 'قَدِيم', transliteration: 'qadim', meaning: 'old / ancient', pos: 'adjective',
      synonym: null, antonym: 'جَدِيد (new)',
      example: { arabic: 'هٰذَا المَسْجِدُ قَدِيمٌ جِدًّا', transliteration: 'Hadhal-masjidu qadimun jiddan', translation: 'This mosque is very old.' },
    },
  {
      word: 'قَوْل', transliteration: 'qawl', meaning: 'saying / statement', pos: 'noun',
      synonym: 'كَلَام (kalam)', antonym: 'فِعْل (action)',
      example: { arabic: 'قَوْلُهُ يُطَابِقُ فِعْلَهُ', transliteration: 'Qawluhu yutabiqu fi\'lah', translation: 'His words match his actions.' },
    },
  {
      word: 'قِمَّة', transliteration: 'qimmah', meaning: 'summit / peak', pos: 'noun',
      synonym: null, antonym: 'قَاع (bottom)',
      example: { arabic: 'وَصَلَ إِلَى قِمَّةِ الجَبَل', transliteration: 'Wasala ila qimmatil-jabal', translation: 'He reached the summit of the mountain.' },
    },
  {
      word: 'قَنَاعَة', transliteration: 'qana\'ah', meaning: 'contentment', pos: 'noun',
      synonym: 'رِضَا (rida)', antonym: 'طَمَع (greed)',
      example: { arabic: 'القَنَاعَةُ كَنْزٌ لَا يَفْنَى', transliteration: 'Al-qana\'atu kanzun la yafna', translation: 'Contentment is a treasure that never runs out.' },
    },
  {
      word: 'قَطَعَ', transliteration: 'qata\'a', meaning: 'he cut', pos: 'verb',
      synonym: null, antonym: 'وَصَلَ (connected)',
      example: { arabic: 'قَطَعَ الحَبْلَ بِالمِقَصّ', transliteration: 'Qata\'al-habla bil-miqass', translation: 'He cut the rope with scissors.' },
    },
  {
      word: 'قُوَّة', transliteration: 'quwwah', meaning: 'strength / power', pos: 'noun',
      synonym: null, antonym: 'ضَعْف (weakness)',
      example: { arabic: 'يَحْتَاجُ العَمَلُ إِلَى قُوَّةٍ وَصَبْر', transliteration: 'Yahtajul-\'amalu ila quwwatin wa sabr', translation: 'The work needs strength and patience.' },
    },
  {
      word: 'قَرَار', transliteration: 'qarar', meaning: 'decision', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِتَّخَذَ قَرَارًا صَعْبًا', transliteration: 'Ittakhadha qararan sa\'ban', translation: 'He made a difficult decision.' },
    },
  {
      word: 'قَلَق', transliteration: 'qalaq', meaning: 'anxiety / worry', pos: 'noun',
      synonym: 'خَوْف (khawf)', antonym: 'طُمَأْنِينَة (tranquility)',
      example: { arabic: 'أَصَابَهُ القَلَقُ قَبْلَ الِامْتِحَان', transliteration: 'Asabahul-qalaqu qablal-imtihan', translation: 'Anxiety struck him before the exam.' },
    },
  {
      word: 'قِصَّة', transliteration: 'qissah', meaning: 'story', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'حَكَى لَنَا قِصَّةً مُشَوِّقَة', transliteration: 'Haka lana qissatan mushawwiqah', translation: 'He told us an exciting story.' },
    },
  {
      word: 'قَبِلَ', transliteration: 'qabila', meaning: 'he accepted', pos: 'verb',
      synonym: null, antonym: 'رَفَضَ (refused)',
      example: { arabic: 'قَبِلَ الدَّعْوَةَ بِسُرُور', transliteration: 'Qabilad-da\'wata bisurur', translation: 'He accepted the invitation with pleasure.' },
    },
  {
      word: 'قَافِلَة', transliteration: 'qafilah', meaning: 'caravan', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'سَافَرَتِ القَافِلَةُ عَبْرَ الصَّحْرَاء', transliteration: 'Safaratil-qafilatu \'abras-sahra\'', translation: 'The caravan traveled across the desert.' },
    },
  {
      word: 'قَانُون', transliteration: 'qanun', meaning: 'law', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَجِبُ اِحْتِرَامُ القَانُون', transliteration: 'Yajibu ihtiramul-qanun', translation: 'The law must be respected.' },
    },
  {
    word: 'قَلَم', transliteration: 'qalam', meaning: 'pen', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَتَبَ اِسْمَهُ بِقَلَمٍ أَزْرَق', transliteration: 'Kataba ismahu biqalamin azraq', translation: 'He wrote his name with a blue pen.' },
  },
  {
    word: 'قَمِيص', transliteration: 'qamis', meaning: 'shirt', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِشْتَرَى قَمِيصًا أَبْيَض', transliteration: 'Ishtara qamisan abyad', translation: 'He bought a white shirt.' },
  },
  {
    word: 'قَاعَة', transliteration: 'qa\'ah', meaning: 'hall', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عُقِدَ الِاجْتِمَاعُ فِي القَاعَةِ الكُبْرَى', transliteration: '\'Uqidal-ijtima\'u fil-qa\'atil-kubra', translation: 'The meeting was held in the main hall.' },
  },
  {
    word: 'قَاعِدَة', transliteration: 'qa\'idah', meaning: 'rule / base', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَجِبُ اِتِّبَاعُ قَوَاعِدِ السَّلَامَة', transliteration: 'Yajibu ittiba\'u qawa\'idis-salamah', translation: 'Safety rules must be followed.' },
  },
  {
    word: 'قَبْل', transliteration: 'qabl', meaning: 'before', pos: 'preposition',
    synonym: null, antonym: 'بَعْد (after)',
    example: { arabic: 'وَصَلَ قَبْلَ المَوْعِدِ بِقَلِيل', transliteration: 'Wasala qablal-maw\'idi biqalil', translation: 'He arrived a little before the appointed time.' },
  },
  {
    word: 'قَبِيلَة', transliteration: 'qabilah', meaning: 'tribe', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَنْتَمِي إِلَى قَبِيلَةٍ عَرِيقَة', transliteration: 'Yantami ila qabilatin \'ariqah', translation: 'He belongs to an ancient tribe.' },
  },
  {
    word: 'قُدْرَة', transliteration: 'qudrah', meaning: 'ability', pos: 'noun',
    synonym: null, antonym: 'عَجْز (inability)',
    example: { arabic: 'لَدَيْهِ قُدْرَةٌ عَالِيَةٌ عَلَى التَّرْكِيز', transliteration: 'Ladayhi qudratun \'aliyatun \'alat-tarkiz', translation: 'He has a high ability to concentrate.' },
  },
  {
    word: 'قِدَم', transliteration: 'qidam', meaning: 'oldness / antiquity', pos: 'noun',
    synonym: null, antonym: 'حَدَاثَة (newness)',
    example: { arabic: 'يَظْهَرُ قِدَمُ المَبْنَى فِي طِرَازِ بِنَائِه', transliteration: 'Yazharu qidamul-mabna fi tirazi bina\'ih', translation: 'The building\'s antiquity shows in its architectural style.' },
  },
  {
    word: 'قَطْرَة', transliteration: 'qatrah', meaning: 'a drop (of liquid)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَقَطَتْ قَطْرَةُ مَطَرٍ عَلَى وَجْهِه', transliteration: 'Saqatat qatratu matarin \'ala wajhih', translation: 'A drop of rain fell on his face.' },
  },
  {
    word: 'قَلِيل', transliteration: 'qalil', meaning: 'little / few', pos: 'adjective',
    synonym: null, antonym: 'كَثِير (much/many)',
    example: { arabic: 'بَقِيَ وَقْتٌ قَلِيلٌ عَلَى المَوْعِد', transliteration: 'Baqiya waqtun qalilun \'alal-maw\'id', translation: 'Little time remains until the appointment.' },
  },
  {
    word: 'قِمَاش', transliteration: 'qimash', meaning: 'fabric / cloth', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِخْتَارَ قِمَاشًا نَاعِمًا لِلثَّوْب', transliteration: 'Ikhtara qimashan na\'iman lith-thawb', translation: 'He chose soft fabric for the garment.' },
  },
  {
    word: 'قُبَّة', transliteration: 'qubbah', meaning: 'dome', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعْلُو قُبَّةُ المَسْجِدِ الخَضْرَاء', transliteration: 'Ta\'lu qubbatul-masjidil-khadra\'', translation: 'The green dome of the mosque rises high.' },
  },
  {
    word: 'قُبْلَة', transliteration: 'qublah', meaning: 'kiss', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَعْطَتْ ابْنَهَا قُبْلَةً قَبْلَ نَوْمِه', transliteration: 'A\'tat ibnaha qublatan qabla nawmih', translation: 'She gave her son a kiss before he slept.' },
  },
  {
    word: 'قِبْلَة', transliteration: 'qiblah', meaning: 'the direction of prayer (towards the Ka\'bah)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَقْبَلَ القِبْلَةَ لِيُصَلِّي', transliteration: 'Istaqbalal-qiblata liyusalli', translation: 'He faced the qiblah to pray.' },
  },
  {
    word: 'قَتَلَ', transliteration: 'qatala', meaning: 'he killed', pos: 'verb',
    synonym: null, antonym: 'أَحْيَا (gave life)',
    example: { arabic: 'حَرَّمَ الإِسْلَامُ أَنْ يَقْتُلَ الإِنْسَانُ نَفْسًا بِغَيْرِ حَقّ', transliteration: 'Harramal-islamu an yaqtulal-insanu nafsan bighayri haqq', translation: 'Islam forbids killing a soul without just cause.' },
  },
  {
    word: 'قَتْل', transliteration: 'qatl', meaning: 'killing / murder', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حُكِمَ عَلَيْهِ بِتُهْمَةِ القَتْل', transliteration: 'Hukima \'alayhi bituhmatil-qatl', translation: 'He was sentenced on a murder charge.' },
  },
  {
    word: 'قُوت', transliteration: 'qut', meaning: 'sustenance / daily bread', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَعْمَلُ بِجِدٍّ لِيُؤَمِّنَ قُوتَ عَائِلَتِه', transliteration: 'Ya\'malu bijiddin liyu\'amina qutan \'a\'ilatih', translation: 'He works hard to secure his family\'s sustenance.' },
  },
  {
    word: 'قَنْطَرَة', transliteration: 'qantarah', meaning: 'arched bridge / arch', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'بُنِيَتِ القَنْطَرَةُ فَوْقَ الوَادِي', transliteration: 'Buniyatil-qantaratu fawqal-wadi', translation: 'The arched bridge was built over the valley.' },
  },
  {
    word: 'قَلِيلًا', transliteration: 'qalilan', meaning: 'a little / slightly', pos: 'adverb',
    synonym: null, antonym: 'كَثِيرًا (a lot)',
    example: { arabic: 'اِنْتَظِرْ قَلِيلًا مِنْ فَضْلِك', transliteration: 'Intazir qalilan min fadlik', translation: 'Please wait a little.' },
  },
  {
    word: 'قَحْط', transliteration: 'qaht', meaning: 'drought / famine', pos: 'noun',
    synonym: null, antonym: 'خِصْب (fertility/abundance)',
    example: { arabic: 'عَانَتِ المِنْطَقَةُ مِنْ قَحْطٍ شَدِيد', transliteration: '\'Anatil-mintaqatu min qahtin shadid', translation: 'The region suffered from severe drought.' },
  },
  {
    word: 'قَذَفَ', transliteration: 'qadhafa', meaning: 'he threw / hurled', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'قَذَفَ الحَجَرَ بَعِيدًا', transliteration: 'Qadhafal-hajara ba\'idan', translation: 'He hurled the stone far away.' },
  },
  {
    word: 'قَذِر', transliteration: 'qadhir', meaning: 'dirty / filthy', pos: 'adjective',
    synonym: 'وَسِخ (wasikh)', antonym: 'نَظِيف (clean)',
    example: { arabic: 'الشَّارِعُ قَذِرٌ بَعْدَ العَاصِفَة', transliteration: 'Ash-shari\'u qadhirun ba\'dal-\'asifah', translation: 'The street is dirty after the storm.' },
  },
  {
    word: 'قُرْص', transliteration: 'qurs', meaning: 'disc / pill / round loaf', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَخَذَ قُرْصَ الدَّوَاءِ بَعْدَ الأَكْل', transliteration: 'Akhadha qursad-dawa\'i ba\'dal-akl', translation: 'He took the pill after eating.' },
  },
  {
    word: 'قُرَابَة', transliteration: 'qurabah', meaning: 'kinship / relation', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَرْبِطُهُمْ قُرَابَةٌ مِنَ جِهَةِ الأُمّ', transliteration: 'Tarbituhum qurabatun min jihatil-umm', translation: 'They are related through the mother\'s side.' },
  },
  {
    word: 'قَرِيح', transliteration: 'qarih', meaning: 'sore / afflicted (also poetic talent form)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'شُفِيَتْ عَيْنُهُ القَرِيحَة', transliteration: 'Shufiyat \'aynuhul-qarihah', translation: 'His sore eye was healed.' },
  },
  {
    word: 'قَرِيحَة', transliteration: 'qarihah', meaning: 'natural talent / creative faculty', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَهُ قَرِيحَةٌ شِعْرِيَّةٌ مُتَمَيِّزَة', transliteration: 'Lahu qarihatun shi\'riyyatun mutamayyizah', translation: 'He has an exceptional poetic talent.' },
  },
  {
    word: 'قَصْد', transliteration: 'qasd', meaning: 'intention / purpose', pos: 'noun',
    synonym: 'نِيَّة (niyyah)', antonym: null,
    example: { arabic: 'فَعَلَ ذٰلِكَ عَنْ قَصْدٍ لَا عَنْ خَطَأ', transliteration: 'Fa\'ala dhalika \'an qasdin la \'an khata\'', translation: 'He did that intentionally, not by mistake.' },
  },
  {
    word: 'قَصَدَ', transliteration: 'qasada', meaning: 'he intended / aimed for', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'قَصَدَ الخَيْرَ فِي كَلَامِه', transliteration: 'Qasadal-khayra fi kalamih', translation: 'He intended good in his words.' },
  },
  {
    word: 'قِنَاع', transliteration: 'qina\'', meaning: 'mask', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِرْتَدَى قِنَاعًا وَاقِيًا فِي المُخْتَبَر', transliteration: 'Irtada qina\'an waqiyan fil-mukhtabar', translation: 'He wore a protective mask in the lab.' },
  },
  {
    word: 'قَنَعَ', transliteration: 'qana\'a', meaning: 'he was content / satisfied', pos: 'verb',
    synonym: null, antonym: 'طَمِعَ (was greedy)',
    example: { arabic: 'قَنَعَ بِمَا رَزَقَهُ اللَّهُ', transliteration: 'Qana\'a bima razaqahullah', translation: 'He was content with what Allah provided him.' },
  },
  ],

  'ك': [
  {
      word: 'كِتَاب', transliteration: 'kitab', meaning: 'book', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَيْتُ كِتَابًا جَدِيدًا', transliteration: 'Ishtaraytu kitaban jadidan', translation: 'I bought a new book.' },
    },
  {
      word: 'كَبِير', transliteration: 'kabir', meaning: 'big', pos: 'adjective',
      synonym: null, antonym: 'صَغِير (small)',
      example: { arabic: 'يَعِيشُونَ فِي بَيْتٍ كَبِير', transliteration: 'Ya\'ishuna fi baytin kabir', translation: 'They live in a big house.' },
    },
  {
      word: 'كَتَبَ', transliteration: 'kataba', meaning: 'he wrote', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'كَتَبَ رِسَالَةً لِوَالِدَيْهِ', transliteration: 'Kataba risalatan liwalidayh', translation: 'He wrote a letter to his parents.' },
    },
  {
      word: 'كَلْب', transliteration: 'kalb', meaning: 'dog', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَحْرُسُ الكَلْبُ البَيْتَ لَيْلًا', transliteration: 'Yahrusul-kalbul-bayta laylan', translation: 'The dog guards the house at night.' },
    },
  {
      word: 'كَذَبَ', transliteration: 'kadhaba', meaning: 'he lied', pos: 'verb',
      synonym: null, antonym: 'صَدَقَ (told the truth)',
      example: { arabic: 'لَا يَجُوزُ أَنْ يَكْذِبَ المُسْلِم', transliteration: 'La yajuzu an yakdhibal-muslim', translation: 'A Muslim must not lie.' },
    },
  {
      word: 'كَرِيم', transliteration: 'karim', meaning: 'generous / noble', pos: 'adjective',
      synonym: null, antonym: 'بَخِيل (stingy)',
      example: { arabic: 'اللَّهُ كَرِيمٌ يُحِبُّ الكَرَم', transliteration: 'Allahu karimun yuhibbul-karam', translation: 'Allah is Generous and loves generosity.' },
    },
  {
      word: 'كَسَل', transliteration: 'kasal', meaning: 'laziness', pos: 'noun',
      synonym: null, antonym: 'نَشَاط (activeness)',
      example: { arabic: 'الكَسَلُ عَدُوُّ النَّجَاح', transliteration: 'Al-kasalu \'aduwwun-najah', translation: 'Laziness is the enemy of success.' },
    },
  {
      word: 'كَأْس', transliteration: 'ka\'s', meaning: 'cup / glass', pos: 'noun',
      synonym: 'كُوب (kub)', antonym: null,
      example: { arabic: 'شَرِبَ كَأْسًا مِنَ العَصِير', transliteration: 'Shariba ka\'san minal-\'asir', translation: 'He drank a glass of juice.' },
    },
  {
      word: 'كَشَفَ', transliteration: 'kashafa', meaning: 'he uncovered / revealed', pos: 'verb',
      synonym: null, antonym: 'أَخْفَى (concealed)',
      example: { arabic: 'كَشَفَ الحَقِيقَةَ أَمَامَ الجَمِيع', transliteration: 'Kashafal-haqiqata amamal-jami\'', translation: 'He revealed the truth in front of everyone.' },
    },
  {
      word: 'كَرِه', transliteration: 'kariha', meaning: 'he hated / disliked', pos: 'verb',
      synonym: null, antonym: 'أَحَبَّ (loved)',
      example: { arabic: 'كَرِهَ الظُّلْمَ فِي كُلِّ صُوَرِه', transliteration: 'Kariha az-zulma fi kulli suwarih', translation: 'He hated injustice in all its forms.' },
    },
  {
      word: 'كَنْز', transliteration: 'kanz', meaning: 'treasure', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الصِّحَّةُ كَنْزٌ لَا يُقَدَّرُ بِثَمَن', transliteration: 'As-sihhatu kanzun la yuqaddaru bithaman', translation: 'Health is a priceless treasure.' },
    },
  {
      word: 'كَامِل', transliteration: 'kamil', meaning: 'complete / perfect', pos: 'adjective',
      synonym: 'تَامّ (tamm)', antonym: 'نَاقِص (incomplete)',
      example: { arabic: 'أَنْهَى العَمَلَ بِشَكْلٍ كَامِل', transliteration: 'Anhal-\'amala bishaklin kamil', translation: 'He finished the work completely.' },
    },
  {
      word: 'كُرَة', transliteration: 'kurah', meaning: 'ball', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَلْعَبُ الأَوْلَادُ بِالكُرَةِ فِي الحَيّ', transliteration: 'Yal\'abul-awladu bil-kurati fil-hayy', translation: 'The children play with the ball in the neighborhood.' },
    },
  {
      word: 'كَافَأَ', transliteration: 'kafa\'a', meaning: 'he rewarded', pos: 'verb',
      synonym: null, antonym: 'عَاقَبَ (punished)',
      example: { arabic: 'كَافَأَ المُعَلِّمُ الطَّالِبَ المُجْتَهِد', transliteration: 'Kafa\'al-mu\'allimut-talibal-mujtahid', translation: 'The teacher rewarded the hardworking student.' },
    },
  {
      word: 'كَهْف', transliteration: 'kahf', meaning: 'cave', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'دَخَلَ الكَهْفَ لِلِاسْتِكْشَاف', transliteration: 'Dakhalal-kahfa lil-istikshaf', translation: 'He entered the cave to explore.' },
    },
  {
      word: 'كُرْسِيّ', transliteration: 'kursiyy', meaning: 'chair', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'جَلَسَ عَلَى الكُرْسِيِّ يَقْرَأُ', transliteration: 'Jalasa \'alal-kursiyyi yaqra\'', translation: 'He sat on the chair reading.' },
    },
  {
      word: 'كَافَح', transliteration: 'kafaha', meaning: 'he struggled / fought hard', pos: 'verb',
      synonym: 'جَاهَدَ (jahada)', antonym: 'اِسْتَسْلَمَ (surrendered)',
      example: { arabic: 'كَافَحَ مِنْ أَجْلِ تَحْقِيقِ حُلْمِهِ', transliteration: 'Kafaha min ajli tahqiqi hulmih', translation: 'He struggled to achieve his dream.' },
    },
  {
      word: 'كَلِمَة', transliteration: 'kalimah', meaning: 'word', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كُلُّ كَلِمَةٍ لَهَا مَعْنَى', transliteration: 'Kullu kalimatin laha ma\'na', translation: 'Every word has a meaning.' },
    },
  {
      word: 'كُلّ', transliteration: 'kull', meaning: 'all / every', pos: 'determiner',
      synonym: 'جَمِيع (jami\')', antonym: 'بَعْض (some)',
      example: { arabic: 'كُلُّ إِنْسَانٍ مَسْؤُولٌ عَنْ نَفْسِهِ', transliteration: 'Kullu insanin mas\'ulun \'an nafsih', translation: 'Every person is responsible for himself.' },
    },
  {
      word: 'كَشْف', transliteration: 'kashf', meaning: 'discovery / disclosure', pos: 'noun',
      synonym: null, antonym: 'إِخْفَاء (concealment)',
      example: { arabic: 'كَانَ الكَشْفُ العِلْمِيُّ مُهِمًّا جِدًّا', transliteration: 'Kanal-kashful-\'ilmiyyu muhimman jiddan', translation: 'The scientific discovery was very important.' },
    },
  {
    word: 'كَعْك', transliteration: 'ka\'k', meaning: 'cake / cookies', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَنَعَتِ الأُمُّ كَعْكًا لِعِيدِ مِيلَادِ ابْنِهَا', transliteration: 'Sana\'atil-ummu ka\'kan li\'idi miladi ibniha', translation: 'The mother made a cake for her son\'s birthday.' },
  },
  {
    word: 'كَتِف', transliteration: 'katif', meaning: 'shoulder', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ يَدَهُ عَلَى كَتِفِ صَدِيقِهِ', transliteration: 'Wada\'a yadahu \'ala katifi sadiqih', translation: 'He put his hand on his friend\'s shoulder.' },
  },
  {
    word: 'كَثِير', transliteration: 'kathir', meaning: 'much / many', pos: 'adjective',
    synonym: null, antonym: 'قَلِيل (little/few)',
    example: { arabic: 'لَدَيْهِ كَثِيرٌ مِنَ الأَصْدِقَاء', transliteration: 'Ladayhi kathirun minal-asdiqa\'', translation: 'He has many friends.' },
  },
  {
    word: 'كَذَٰلِك', transliteration: 'kadhalik', meaning: 'likewise / thus', pos: 'adverb',
    synonym: null, antonym: null,
    example: { arabic: 'نَجَحَ فِي العَمَلِ وَكَذٰلِكَ فِي الدِّرَاسَة', transliteration: 'Najaha fil-\'amali wa kadhalika fid-dirasah', translation: 'He succeeded at work and likewise in his studies.' },
  },
  {
    word: 'كَرَاهِيَة', transliteration: 'karahiyah', meaning: 'hatred', pos: 'noun',
    synonym: null, antonym: 'مَحَبَّة (love)',
    example: { arabic: 'يَجِبُ نَبْذُ الكَرَاهِيَةِ بَيْنَ النَّاس', transliteration: 'Yajibu nabdhul-karahiyati baynan-nas', translation: 'Hatred among people must be rejected.' },
  },
  {
    word: 'كَرَامَة', transliteration: 'karamah', meaning: 'dignity / honor', pos: 'noun',
    synonym: null, antonym: 'إِهَانَة (insult)',
    example: { arabic: 'دَافَعَ عَنْ كَرَامَتِهِ أَمَامَ الجَمِيع', transliteration: 'Dafa\'a \'an karamatihi amamal-jami\'', translation: 'He defended his dignity in front of everyone.' },
  },
  {
    word: 'كَسَرَ', transliteration: 'kasara', meaning: 'he broke', pos: 'verb',
    synonym: null, antonym: 'أَصْلَحَ (fixed)',
    example: { arabic: 'كَسَرَ الزُّجَاجَ عَنْ طَرِيقِ الخَطَأ', transliteration: 'Kasaraz-zujaja \'an tariqil-khata\'', translation: 'He broke the glass by mistake.' },
  },
  {
    word: 'كَسَبَ', transliteration: 'kasaba', meaning: 'he earned / gained', pos: 'verb',
    synonym: 'رَبِحَ (rabiha)', antonym: 'خَسِرَ (lost)',
    example: { arabic: 'كَسَبَ مَالًا كَثِيرًا مِنْ تِجَارَتِهِ', transliteration: 'Kasaba malan kathiran min tijaratih', translation: 'He earned a lot of money from his trade.' },
  },
  {
    word: 'كَفَى', transliteration: 'kafa', meaning: 'it was/is sufficient', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'كَفَى مَا قُلْتَهُ مِنَ الأَعْذَار', transliteration: 'Kafa ma qultahu minal-a\'dhar', translation: 'What you\'ve said of excuses is enough.' },
  },
  {
    word: 'كَوْن', transliteration: 'kawn', meaning: 'universe / existence', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَتَأَمَّلُ فِي عَظَمَةِ الكَوْن', transliteration: 'Yata\'ammalu fi \'azamatil-kawn', translation: 'He reflects on the greatness of the universe.' },
  },
  {
    word: 'كَبُرَ', transliteration: 'kabura', meaning: 'he grew up / became big', pos: 'verb',
    synonym: null, antonym: 'صَغُرَ (became small)',
    example: { arabic: 'كَبُرَ الوَلَدُ وَأَصْبَحَ رَجُلًا', transliteration: 'Kabural-waladu wa asbaha rajulan', translation: 'The boy grew up and became a man.' },
  },
  {
    word: 'كِبْر', transliteration: 'kibr', meaning: 'arrogance', pos: 'noun',
    synonym: null, antonym: 'تَوَاضُع (humility)',
    example: { arabic: 'لَا يَدْخُلُ الجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْر', transliteration: 'La yadkhulul-jannata man kana fi qalbihi mithqalu dharratin min kibr', translation: 'One with an atom\'s weight of arrogance in his heart will not enter Paradise.' },
  },
  {
    word: 'كَتَمَ', transliteration: 'katama', meaning: 'he concealed / kept secret', pos: 'verb',
    synonym: null, antonym: 'أَظْهَرَ (revealed)',
    example: { arabic: 'كَتَمَ سِرَّهُ عَنِ الجَمِيع', transliteration: 'Katama sirrahu \'anil-jami\'', translation: 'He kept his secret from everyone.' },
  },
  {
    word: 'كَتِيبَة', transliteration: 'katibah', meaning: 'battalion / troop', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَقَدَّمَتِ الكَتِيبَةُ نَحْوَ الحُدُود', transliteration: 'Taqaddamatil-katibatu nahwal-hudud', translation: 'The battalion advanced toward the borders.' },
  },
  {
    word: 'كَثَافَة', transliteration: 'kathafah', meaning: 'density', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَزْدَادُ الكَثَافَةُ السُّكَّانِيَّةُ فِي المُدُن', transliteration: 'Tazdadul-kathafatus-sukkaniyyatu fil-mudun', translation: 'Population density increases in cities.' },
  },
  {
    word: 'كِدْح', transliteration: 'kidh', meaning: 'toil / hard labor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'إِنَّكَ كَادِحٌ إِلَى رَبِّكَ كَدْحًا', transliteration: 'Innaka kadihun ila rabbika kadhan', translation: 'Indeed, you are laboring toward your Lord with exertion.' },
  },
  {
    word: 'كَذِبَة', transliteration: 'kadhibah', meaning: 'a lie (single instance)', pos: 'noun',
    synonym: null, antonym: 'حَقِيقَة (truth)',
    example: { arabic: 'كَشَفَ كَذِبَتَهُ أَمَامَ الجَمِيع', transliteration: 'Kashafa kadhibatahu amamal-jami\'', translation: 'He exposed his lie in front of everyone.' },
  },
  {
    word: 'كُرَاسَة', transliteration: 'kurrasah', meaning: 'notebook', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَتَبَ وَاجِبَهُ فِي الكُرَّاسَة', transliteration: 'Kataba wajibahu fil-kurrasah', translation: 'He wrote his homework in the notebook.' },
  },
  {
    word: 'كَعْبَة', transliteration: 'ka\'bah', meaning: 'the Ka\'bah', pos: 'proper noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَتَّجِهُ المُسْلِمُونَ فِي صَلَاتِهِمْ نَحْوَ الكَعْبَة', transliteration: 'Yattajihul-muslimuna fi salatihim nahwal-ka\'bah', translation: 'Muslims face the Ka\'bah in their prayer.' },
  },
  {
    word: 'كَفَل', transliteration: 'kafala (verb kafala already used similarly)', meaning: 'sponsorship (noun kafalah related)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَدَّمَ كَفَالَةً لِيَتِيمٍ فِي الجَمْعِيَّة', transliteration: 'Qaddama kafalatan liyatimin fil-jam\'iyyah', translation: 'He provided sponsorship for an orphan at the association.' },
  },
  {
    word: 'كِلَا', transliteration: 'kila', meaning: 'both (masculine)', pos: 'determiner',
    synonym: null, antonym: null,
    example: { arabic: 'كِلَا الوَلَدَيْنِ مُجْتَهِدَان', transliteration: 'Kilal-waladayni mujtahidan', translation: 'Both boys are hardworking.' },
  },
  {
    word: 'كَمَال', transliteration: 'kamal', meaning: 'perfection / completeness', pos: 'noun',
    synonym: null, antonym: 'نَقْص (deficiency)',
    example: { arabic: 'الكَمَالُ للَّهِ وَحْدَه', transliteration: 'Al-kamalu lillahi wahdah', translation: 'Perfection belongs to Allah alone.' },
  },
  {
    word: 'كَمِّيَّة', transliteration: 'kammiyyah', meaning: 'quantity', pos: 'noun',
    synonym: null, antonym: 'نَوْعِيَّة (quality)',
    example: { arabic: 'اِشْتَرَى كَمِّيَّةً كَبِيرَةً مِنَ الأَرُزّ', transliteration: 'Ishtara kammiyyatan kabiratan minal-aruzz', translation: 'He bought a large quantity of rice.' },
  },
  {
    word: 'كَنِيسَة', transliteration: 'kanisah', meaning: 'church', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَقَعُ الكَنِيسَةُ فِي وَسَطِ البَلْدَة', transliteration: 'Taqa\'ul-kanisatu fi wasatil-baldah', translation: 'The church is located in the center of town.' },
  },
  {
    word: 'كَهْرَبَاء', transliteration: 'kahraba\'', meaning: 'electricity', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'انْقَطَعَتِ الكَهْرَبَاءُ فَجْأَة', transliteration: 'Inqata\'atil-kahraba\'u faj\'ah', translation: 'The electricity suddenly cut off.' },
  },
  {
    word: 'كَوْكَب', transliteration: 'kawkab', meaning: 'planet / star', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الأَرْضُ كَوْكَبٌ صَالِحٌ لِلْحَيَاة', transliteration: 'Al-ardu kawkabun salihun lil-hayah', translation: 'The Earth is a planet suitable for life.' },
  },
  {
    word: 'كَيَّفَ', transliteration: 'kayyafa', meaning: 'he adapted / air-conditioned', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'كَيَّفَ نَفْسَهُ مَعَ الوَضْعِ الجَدِيد', transliteration: 'Kayyafa nafsahu ma\'al-wad\'il-jadid', translation: 'He adapted himself to the new situation.' },
  },
  {
    word: 'كِيَان', transliteration: 'kiyan', meaning: 'entity / being', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَثَّرَ الحَدَثُ فِي كِيَانِهِ بِأَكْمَلِه', transliteration: 'Aththaral-hadathu fi kiyanihi bi\'akmalih', translation: 'The event affected his entire being.' },
  },
  {
    word: 'كَآبَة', transliteration: 'ka\'abah', meaning: 'gloom / dejection', pos: 'noun',
    synonym: null, antonym: 'بَهْجَة (joy)',
    example: { arabic: 'غَلَبَتْهُ الكَآبَةُ بَعْدَ الخَبَر', transliteration: 'Ghalabathul-ka\'abatu ba\'dal-khabar', translation: 'Gloom overcame him after the news.' },
  },
  {
    word: 'كَيْنُونَة', transliteration: 'kaynunah', meaning: 'existence / being (philosophical)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَسَاءَلَ عَنْ سِرِّ كَيْنُونَتِهِ فِي هٰذَا الكَوْن', transliteration: 'Tasa\'ala \'an sirri kaynunatihi fi hadhal-kawn', translation: 'He wondered about the secret of his existence in this universe.' },
  },
  ],

  'ل': [
  {
      word: 'لَيْل', transliteration: 'layl', meaning: 'night', pos: 'noun',
      synonym: null, antonym: 'نَهَار (day)',
      example: { arabic: 'يَعْمَلُ فِي اللَّيْلِ وَيَنَامُ فِي النَّهَار', transliteration: 'Ya\'malu fil-layli wa yanamu fin-nahar', translation: 'He works at night and sleeps during the day.' },
    },
  {
      word: 'لَعِبَ', transliteration: 'la\'iba', meaning: 'he played', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'لَعِبَ الأَوْلَادُ فِي الحَدِيقَة', transliteration: 'La\'ibal-awladu fil-hadiqah', translation: 'The children played in the garden.' },
    },
  {
      word: 'لَذِيذ', transliteration: 'ladhidh', meaning: 'delicious', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'الطَّعَامُ لَذِيذٌ جِدًّا', transliteration: 'At-ta\'amu ladhidhun jiddan', translation: 'The food is very delicious.' },
    },
  {
      word: 'لَسَان', transliteration: 'lisan', meaning: 'tongue', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَحْفَظُ لِسَانَهُ مِنَ الكَذِب', transliteration: 'Yahfazu lisanahu minal-kadhib', translation: 'He guards his tongue from lying.' },
    },
  {
      word: 'لَبِسَ', transliteration: 'labisa', meaning: 'he wore', pos: 'verb',
      synonym: null, antonym: 'خَلَعَ (took off)',
      example: { arabic: 'لَبِسَ ثَوْبًا جَدِيدًا لِلْعِيد', transliteration: 'Labisa thawban jadidan lil-\'id', translation: 'He wore a new garment for Eid.' },
    },
  {
      word: 'لُغَة', transliteration: 'lughah', meaning: 'language', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اللُّغَةُ العَرَبِيَّةُ جَمِيلَةٌ وَغَنِيَّة', transliteration: 'Al-lughatul-\'arabiyyatu jamilatun wa ghaniyyah', translation: 'The Arabic language is beautiful and rich.' },
    },
  {
      word: 'لَطِيف', transliteration: 'latif', meaning: 'gentle / kind', pos: 'adjective',
      synonym: 'رَقِيق (raqiq)', antonym: 'قَاسٍ (harsh)',
      example: { arabic: 'مُعَلِّمُنَا لَطِيفٌ وَصَبُور', transliteration: 'Mu\'allimuna latifun wa sabur', translation: 'Our teacher is kind and patient.' },
    },
  {
      word: 'لَقَاء', transliteration: 'liqa\'', meaning: 'meeting / encounter', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَانَ اللِّقَاءُ مُفِيدًا لِلطَّرَفَيْن', transliteration: 'Kanal-liqa\'u mufidan littarafayn', translation: 'The meeting was beneficial for both parties.' },
    },
  {
      word: 'لَوْن', transliteration: 'lawn', meaning: 'color', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'مَا لَوْنُ سَيَّارَتِكَ الجَدِيدَة؟', transliteration: 'Ma lawnu sayyaratikal-jadidah?', translation: 'What color is your new car?' },
    },
  {
      word: 'لَمَسَ', transliteration: 'lamasa', meaning: 'he touched', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'لَمَسَ الجِدَارَ لِيَتَأَكَّدَ مِنْ صَلَابَتِه', transliteration: 'Lamasal-jidara liyata\'akkada min salabatih', translation: 'He touched the wall to make sure of its firmness.' },
    },
  {
      word: 'لُطْف', transliteration: 'lutf', meaning: 'kindness / gentleness', pos: 'noun',
      synonym: null, antonym: 'قَسْوَة (harshness)',
      example: { arabic: 'عَامَلَنِي بِلُطْفٍ شَدِيد', transliteration: '\'Amalani bilutfin shadid', translation: 'He treated me with great kindness.' },
    },
  {
      word: 'لَيْمُون', transliteration: 'laymun', meaning: 'lemon', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَضَافَتْ عَصِيرَ اللَّيْمُونِ لِلسَّلَطَة', transliteration: 'Adafat \'asiral-laymuni lissalatah', translation: 'She added lemon juice to the salad.' },
    },
  {
      word: 'لَاحَظَ', transliteration: 'lahaza', meaning: 'he noticed / observed', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'لَاحَظَ تَغَيُّرًا فِي سُلُوكِهِ', transliteration: 'Lahaza taghayyuran fi sulukih', translation: 'He noticed a change in his behavior.' },
    },
  {
      word: 'لَيْس', transliteration: 'laysa', meaning: 'is not / are not', pos: 'verb (negation particle)',
      synonym: null, antonym: null,
      example: { arabic: 'لَيْسَ هٰذَا صَحِيحًا', transliteration: 'Laysa hadha sahihan', translation: 'This is not correct.' },
    },
  {
      word: 'لَحْم', transliteration: 'lahm', meaning: 'meat', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اِشْتَرَتِ الأُمُّ لَحْمًا طَازَجًا', transliteration: 'Ishtaratil-ummu lahman tazajan', translation: 'The mother bought fresh meat.' },
    },
  {
      word: 'لُؤْلُؤ', transliteration: 'lu\'lu\'', meaning: 'pearl', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'عِقْدُهَا مَصْنُوعٌ مِنَ اللُّؤْلُؤ', transliteration: '\'Iqduha masnu\'un minal-lu\'lu\'', translation: 'Her necklace is made of pearls.' },
    },
  {
      word: 'لُقْمَة', transliteration: 'luqmah', meaning: 'a bite/morsel of food', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَكَلَ لُقْمَةً وَاحِدَةً وَشَبِع', transliteration: 'Akala luqmatan wahidatan wa shabi\'', translation: 'He ate one bite and was full.' },
    },
  {
      word: 'لِبَاس', transliteration: 'libas', meaning: 'clothing / garment', pos: 'noun',
      synonym: 'ثِيَاب (thiyab)', antonym: null,
      example: { arabic: 'اِرْتَدَى لِبَاسًا مُنَاسِبًا لِلْمُنَاسَبَة', transliteration: 'Irtada libasan munasiban lilmunasabah', translation: 'He wore clothing suitable for the occasion.' },
    },
  {
      word: 'لَازِم', transliteration: 'lazim', meaning: 'necessary', pos: 'adjective',
      synonym: 'ضَرُورِيّ (daruriyy)', antonym: null,
      example: { arabic: 'مِنَ اللَّازِمِ أَنْ نَحْتَرِمَ بَعْضَنَا', transliteration: 'Minal-lazimi an nahtarima ba\'dana', translation: 'It is necessary that we respect one another.' },
    },
  {
      word: 'لَيْلَة', transliteration: 'laylah', meaning: 'a night (one occasion)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'قَضَيْنَا لَيْلَةً جَمِيلَةً عِنْدَ الجَدَّة', transliteration: 'Qadayna laylatan jamilatan \'indal-jaddah', translation: 'We spent a lovely night at grandmother\'s.' },
    },
  {
    word: 'لَبَن', transliteration: 'laban', meaning: 'yogurt / curdled milk', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَحَبَّ أَكْلَ اللَّبَنِ مَعَ العَسَل', transliteration: 'Ahabba aklal-labani ma\'al-\'asal', translation: 'He loved eating yogurt with honey.' },
  },
  {
    word: 'لَامَ', transliteration: 'lama', meaning: 'he blamed', pos: 'verb',
    synonym: 'عَاتَبَ (\'ataba)', antonym: 'مَدَحَ (praised)',
    example: { arabic: 'لَامَهُ عَلَى تَقْصِيرِهِ فِي العَمَل', transliteration: 'Lamahu \'ala taqsirihi fil-\'amal', translation: 'He blamed him for his negligence at work.' },
  },
  {
    word: 'لِحْيَة', transliteration: 'lihyah', meaning: 'beard', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُطِيلُ الشَّيْخُ لِحْيَتَهُ البَيْضَاء', transliteration: 'Yutilush-shaykhu lihyatahul-bayda\'', translation: 'The elder lets his white beard grow long.' },
  },
  {
    word: 'لَذَّة', transliteration: 'ladhdhah', meaning: 'pleasure / delight', pos: 'noun',
    synonym: null, antonym: 'أَلَم (pain)',
    example: { arabic: 'وَجَدَ لَذَّةً كَبِيرَةً فِي القِرَاءَة', transliteration: 'Wajada ladhdhatan kabiratan fil-qira\'ah', translation: 'He found great delight in reading.' },
  },
  {
    word: 'لَازَمَ', transliteration: 'lazama', meaning: 'he accompanied persistently', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَازَمَ شَيْخَهُ سَنَوَاتٍ طَوِيلَة', transliteration: 'Lazama shaykhahu sanawatin tawilah', translation: 'He stayed close to his teacher for many years.' },
  },
  {
    word: 'لِقَاح', transliteration: 'liqah', meaning: 'vaccine', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَخَذَ الطِّفْلُ لِقَاحَهُ فِي المَوْعِدِ المُحَدَّد', transliteration: 'Akhadhat-tiflu liqahahu fil-maw\'idil-muhaddad', translation: 'The child got his vaccine at the scheduled appointment.' },
  },
  {
    word: 'لَعْنَة', transliteration: 'la\'nah', meaning: 'curse', pos: 'noun',
    synonym: null, antonym: 'بَرَكَة (blessing)',
    example: { arabic: 'دَعَا عَلَيْهِ بِاللَّعْنَة', transliteration: 'Da\'a \'alayhi bil-la\'nah', translation: 'He invoked a curse upon him.' },
  },
  {
    word: 'لَفَظَ', transliteration: 'lafaza', meaning: 'he uttered / pronounced', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَفَظَ الكَلِمَةَ بِوُضُوح', transliteration: 'Lafazal-kalimata biwuduh', translation: 'He pronounced the word clearly.' },
  },
  {
    word: 'لَيِّن', transliteration: 'layyin', meaning: 'soft / gentle', pos: 'adjective',
    synonym: 'لَطِيف (latif)', antonym: 'قَاسٍ (harsh)',
    example: { arabic: 'تَحَدَّثَ إِلَيْهِ بِصَوْتٍ لَيِّن', transliteration: 'Tahaddatha ilayhi bisawtin layyin', translation: 'He spoke to him in a gentle voice.' },
  },
  {
    word: 'لِوَاء', transliteration: 'liwa\'', meaning: 'banner / governorate', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رُفِعَ اللِّوَاءُ فِي المُنَاسَبَاتِ الرَّسْمِيَّة', transliteration: 'Rufi\'al-liwa\'u fil-munasabatir-rasmiyyah', translation: 'The banner was raised at official occasions.' },
  },
  {
    word: 'لَبَّى', transliteration: 'labba', meaning: 'he responded / answered a call', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَبَّى نِدَاءَ صَدِيقِهِ فَوْرًا', transliteration: 'Labba nida\'a sadiqihi fawran', translation: 'He responded to his friend\'s call immediately.' },
  },
  {
    word: 'لِبَاقَة', transliteration: 'libaqah', meaning: 'tact / eloquence in manner', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَعَامَلَ مَعَ المَوْقِفِ بِلَبَاقَة', transliteration: 'Ta\'amala ma\'al-mawqifi bilabaqah', translation: 'He handled the situation with tact.' },
  },
  {
    word: 'لَجْنَة', transliteration: 'lajnah', meaning: 'committee', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شُكِّلَتْ لَجْنَةٌ لِدِرَاسَةِ المَشْرُوع', transliteration: 'Shukkilat lajnatun lidirasatil-mashru\'', translation: 'A committee was formed to study the project.' },
  },
  {
    word: 'لَجَأَ', transliteration: 'laja\'a', meaning: 'he sought refuge / resorted to', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَجَأَ إِلَى صَدِيقِهِ طَلَبًا لِلْمُسَاعَدَة', transliteration: 'Laja\'a ila sadiqihi talaban lil-musa\'adah', translation: 'He resorted to his friend seeking help.' },
  },
  {
    word: 'لُجُوء', transliteration: 'luju\'', meaning: 'refuge / asylum', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَصَلَ عَلَى حَقِّ اللُّجُوءِ فِي البَلَدِ الجَدِيد', transliteration: 'Hasala \'ala haqqil-luju\'i fil-baladil-jadid', translation: 'He obtained the right of asylum in the new country.' },
  },
  {
    word: 'لِحَاء', transliteration: 'liha\'', meaning: 'tree bark', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُسْتَخْرَجُ القِرْفَةُ مِنْ لِحَاءِ الشَّجَرَة', transliteration: 'Yustakhraju al-qirfatu min liha\'ish-shajarah', translation: 'Cinnamon is extracted from the tree bark.' },
  },
  {
    word: 'لَحَظَة', transliteration: 'lahzah', meaning: 'moment', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْتَظِرْ لَحْظَةً مِنْ فَضْلِك', transliteration: 'Intazir lahzatan min fadlik', translation: 'Please wait a moment.' },
  },
  {
    word: 'لِذَّة', transliteration: 'ladhdhah (variant spelling)', meaning: 'pleasure (variant of لَذَّة)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَدَ فِي العَمَلِ لِذَّةً حَقِيقِيَّة', transliteration: 'Wajada fil-\'amali ladhdhatan haqiqiyyah', translation: 'He found real pleasure in the work.' },
  },
  {
    word: 'لِسَان الحَال', transliteration: 'lisan al-hal', meaning: 'the state of affairs speaking for itself (idiom)', pos: 'expression',
    synonym: null, antonym: null,
    example: { arabic: 'لِسَانُ حَالِهِ يَقُولُ إِنَّهُ سَعِيد', transliteration: 'Lisanu halihi yaqulu innahu sa\'id', translation: 'His demeanor speaks for itself that he is happy.' },
  },
  {
    word: 'لَصّ', transliteration: 'lass', meaning: 'thief', pos: 'noun',
    synonym: 'سَارِق (sariq)', antonym: null,
    example: { arabic: 'قُبِضَ عَلَى اللِّصِّ مُتَلَبِّسًا', transliteration: 'Qubida \'alal-lissi mutalabbisan', translation: 'The thief was caught red-handed.' },
  },
  {
    word: 'لَعِب', transliteration: 'la\'ib', meaning: 'play / playing (noun)', pos: 'noun',
    synonym: null, antonym: 'جِدّ (seriousness)',
    example: { arabic: 'قَضَى الوَلَدُ يَوْمَهُ فِي اللَّعِب', transliteration: 'Qadal-waladu yawmahu fil-la\'ib', translation: 'The boy spent his day playing.' },
  },
  {
    word: 'لَقَّبَ', transliteration: 'laqqaba', meaning: 'he gave a nickname/title', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَقَّبُوهُ بِأَسَدِ الصَّحْرَاء', transliteration: 'Laqqabuhu bi\'asadis-sahra\'', translation: 'They nicknamed him "the lion of the desert."' },
  },
  {
    word: 'لَقَب', transliteration: 'laqab', meaning: 'nickname / title', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَمَلَ لَقَبَ البَطَلِ لِسَنَوَاتٍ عَدِيدَة', transliteration: 'Hamala laqabal-batali lisanawatin \'adidah', translation: 'He held the title of champion for many years.' },
  },
  {
    word: 'لُقْيَان', transliteration: 'luqyan (rare)', meaning: 'encounter / meeting (rare form)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ لُقْيَانُهُمَا مُفَاجِئًا فِي المَطَار', transliteration: 'Kana luqyanuhuma mufaji\'an fil-matar', translation: 'Their encounter was surprising at the airport.' },
  },
  {
    word: 'لَمَّ', transliteration: 'lamma', meaning: 'he gathered / collected (colloquial)', pos: 'verb',
    synonym: 'جَمَعَ (jama\'a)', antonym: null,
    example: { arabic: 'لَمَّ شَتَاتَ العَائِلَةِ بَعْدَ سَنَوَاتِ الفِرَاق', transliteration: 'Lamma shatatal-\'a\'ilati ba\'da sanawatil-firaq', translation: 'He reunited the scattered family after years of separation.' },
  },
  {
    word: 'لَهْفَة', transliteration: 'lahfah', meaning: 'eagerness / yearning', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْتَظَرَ عَوْدَتَهُ بِلَهْفَة', transliteration: 'Intazara \'awdatahu bilahfah', translation: 'He awaited his return with eagerness.' },
  },
  {
    word: 'لُهَاث', transliteration: 'luhath', meaning: 'panting', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَصَلَ إِلَى البَيْتِ وَهُوَ فِي لُهَاثٍ شَدِيد', transliteration: 'Wasala ilal-bayti wa huwa fi luhathin shadid', translation: 'He arrived home panting heavily.' },
  },
  {
    word: 'لَوْحَة', transliteration: 'lawhah', meaning: 'painting / board', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَلَّقَ لَوْحَةً فَنِّيَّةً فِي الصَّالَة', transliteration: '\'Allaqa lawhatan fanniyyatan fis-salah', translation: 'He hung an artistic painting in the hall.' },
  },
  {
    word: 'لَوَّحَ', transliteration: 'lawwaha', meaning: 'he waved / signaled', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَوَّحَ بِيَدِهِ مُوَدِّعًا أَصْدِقَاءَه', transliteration: 'Lawwaha biyadihi muwaddi\'an asdiqa\'ah', translation: 'He waved his hand bidding his friends farewell.' },
  },
  {
    word: 'لَيِّنَة', transliteration: 'layyinah', meaning: 'soft / gentle (feminine)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'تَحَدَّثَتْ إِلَيْهِ بِكَلِمَاتٍ لَيِّنَة', transliteration: 'Tahaddathat ilayhi bikalimatin layyinah', translation: 'She spoke to him with gentle words.' },
  },
  ],

  'م': [
  {
      word: 'مَاء', transliteration: 'ma\'', meaning: 'water', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'شَرِبْتُ كَأْسًا مِنَ المَاءِ البَارِد', transliteration: 'Sharibtu ka\'san minal-ma\'il-barid', translation: 'I drank a glass of cold water.' },
    },
  {
      word: 'مَدْرَسَة', transliteration: 'madrasah', meaning: 'school', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَذْهَبُ إِلَى المَدْرَسَةِ كُلَّ يَوْم', transliteration: 'Yadhhabu ilal-madrasati kulla yawm', translation: 'He goes to school every day.' },
    },
  {
      word: 'مُهِمّ', transliteration: 'muhimm', meaning: 'important', pos: 'adjective',
      synonym: null, antonym: 'تَافِه (trivial)',
      example: { arabic: 'التَّعْلِيمُ أَمْرٌ مُهِمٌّ فِي الحَيَاة', transliteration: 'At-ta\'limu amrun muhimmun fil-hayah', translation: 'Education is an important matter in life.' },
    },
  {
      word: 'مَطَر', transliteration: 'matar', meaning: 'rain', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'هَطَلَ المَطَرُ بِغَزَارَةٍ أَمْس', transliteration: 'Hatalal-mataru bighazaratin ams', translation: 'The rain fell heavily yesterday.' },
    },
  {
      word: 'مَرِيض', transliteration: 'marid', meaning: 'sick / patient', pos: 'adjective / noun',
      synonym: null, antonym: 'صَحِيح (healthy)',
      example: { arabic: 'زَارَ صَدِيقَهُ المَرِيضَ فِي المُسْتَشْفَى', transliteration: 'Zara sadiqahul-marida fil-mustashfa', translation: 'He visited his sick friend in the hospital.' },
    },
  {
      word: 'مُمْتَاز', transliteration: 'mumtaz', meaning: 'excellent', pos: 'adjective',
      synonym: null, antonym: 'رَدِيء (poor quality)',
      example: { arabic: 'أَدَاؤُهُ فِي العَمَلِ مُمْتَاز', transliteration: 'Ada\'uhu fil-\'amali mumtaz', translation: 'His performance at work is excellent.' },
    },
  {
      word: 'مِفْتَاح', transliteration: 'miftah', meaning: 'key', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'فَقَدَ مِفْتَاحَ البَيْت', transliteration: 'Faqada miftahal-bayt', translation: 'He lost the house key.' },
    },
  {
      word: 'مَسَاء', transliteration: 'masa\'', meaning: 'evening', pos: 'noun',
      synonym: null, antonym: 'صَبَاح (morning)',
      example: { arabic: 'نَلْتَقِي كُلَّ مَسَاءٍ لِلدِّرَاسَة', transliteration: 'Naltaqi kulla masa\'in liddirasah', translation: 'We meet every evening to study.' },
    },
  {
      word: 'مَلِك', transliteration: 'malik', meaning: 'king', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'اللَّهُ مَلِكُ المُلُوك', transliteration: 'Allahu maliku al-muluk', translation: 'Allah is the King of kings.' },
    },
  {
      word: 'مَوْت', transliteration: 'mawt', meaning: 'death', pos: 'noun',
      synonym: null, antonym: 'حَيَاة (life)',
      example: { arabic: 'المَوْتُ حَقٌّ عَلَى كُلِّ إِنْسَان', transliteration: 'Al-mawtu haqqun \'ala kulli insan', translation: 'Death is a certainty for every human.' },
    },
  {
      word: 'مُسَاعَدَة', transliteration: 'musa\'adah', meaning: 'help / assistance', pos: 'noun',
      synonym: 'عَوْن (\'awn)', antonym: null,
      example: { arabic: 'قَدَّمَ لَهُ المُسَاعَدَةَ عِنْدَ الحَاجَة', transliteration: 'Qaddama lahul-musa\'adata \'indal-hajah', translation: 'He offered him help when needed.' },
    },
  {
      word: 'مَعْرِفَة', transliteration: 'ma\'rifah', meaning: 'knowledge / acquaintance', pos: 'noun',
      synonym: 'عِلْم (\'ilm)', antonym: 'جَهْل (ignorance)',
      example: { arabic: 'مَعْرِفَةُ الحَقِّ خَيْرٌ مِنَ الجَهْلِ بِهِ', transliteration: 'Ma\'rifatul-haqqi khayrun minal-jahli bih', translation: 'Knowing the truth is better than being ignorant of it.' },
    },
  {
      word: 'مُبَكِّر', transliteration: 'mubakkir', meaning: 'early', pos: 'adjective',
      synonym: null, antonym: 'مُتَأَخِّر (late)',
      example: { arabic: 'وَصَلَ مُبَكِّرًا إِلَى الِاجْتِمَاع', transliteration: 'Wasala mubakkiran ilal-ijtima\'', translation: 'He arrived early to the meeting.' },
    },
  {
      word: 'مِثَال', transliteration: 'mithal', meaning: 'example', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'ضَرَبَ المُعَلِّمُ مِثَالًا وَاضِحًا', transliteration: 'Darabal-mu\'allimu mithalan wadihan', translation: 'The teacher gave a clear example.' },
    },
  {
      word: 'مُخْتَلِف', transliteration: 'mukhtalif', meaning: 'different', pos: 'adjective',
      synonym: null, antonym: 'مُتَشَابِه (similar)',
      example: { arabic: 'لِكُلِّ شَخْصٍ رَأْيٌ مُخْتَلِف', transliteration: 'Likulli shakhsin ra\'yun mukhtalif', translation: 'Every person has a different opinion.' },
    },
  {
      word: 'مَلَابِس', transliteration: 'malabis', meaning: 'clothes', pos: 'noun',
      synonym: 'ثِيَاب (thiyab)', antonym: null,
      example: { arabic: 'اِشْتَرَتْ مَلَابِسَ جَدِيدَةً لِلْعِيد', transliteration: 'Ishtarat malabisa jadidatan lil-\'id', translation: 'She bought new clothes for Eid.' },
    },
  {
      word: 'مَعْدِن', transliteration: 'ma\'din', meaning: 'metal / mineral', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يُسْتَخْرَجُ الحَدِيدُ مِنَ المَعَادِن', transliteration: 'Yustakhraju al-hadidu minal-ma\'adin', translation: 'Iron is extracted from minerals.' },
    },
  {
      word: 'مَعْقُول', transliteration: 'ma\'qul', meaning: 'reasonable / logical', pos: 'adjective',
      synonym: null, antonym: 'غَيْرُ مَعْقُول (unreasonable)',
      example: { arabic: 'كَانَ رَدُّهُ مَعْقُولًا وَمُقْنِعًا', transliteration: 'Kana radduhu ma\'qulan wa muqni\'an', translation: 'His response was reasonable and convincing.' },
    },
  {
      word: 'مَهَارَة', transliteration: 'maharah', meaning: 'skill', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَمْتَلِكُ مَهَارَةً عَالِيَةً فِي الرَّسْم', transliteration: 'Yamtaliku maharatan \'aliyatan fir-rasm', translation: 'He possesses high skill in drawing.' },
    },
  {
      word: 'مُحِيط', transliteration: 'muhit', meaning: 'ocean / surrounding', pos: 'noun / adjective',
      synonym: null, antonym: null,
      example: { arabic: 'يَمْتَدُّ المُحِيطُ الأَطْلَسِيُّ مَسَافَاتٍ شَاسِعَة', transliteration: 'Yamtaddul-muhitul-atlasiyyu masafatin shasi\'ah', translation: 'The Atlantic Ocean stretches vast distances.' },
    },
  {
    word: 'مَطْبَخ', transliteration: 'matbakh', meaning: 'kitchen', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَطْبُخُ الأُمُّ فِي المَطْبَخ', transliteration: 'Tatbukhul-ummu fil-matbakh', translation: 'The mother cooks in the kitchen.' },
  },
  {
    word: 'مَكْتَب', transliteration: 'maktab', meaning: 'office / desk', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَعْمَلُ فِي مَكْتَبٍ حُكُومِيّ', transliteration: 'Ya\'malu fi maktabin hukumiyy', translation: 'He works in a government office.' },
  },
  {
    word: 'مَكْتَبَة', transliteration: 'maktabah', meaning: 'library / bookstore', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَضَى وَقْتَهُ فِي المَكْتَبَةِ العَامَّة', transliteration: 'Qada waqtahu fil-maktabatil-\'ammah', translation: 'He spent his time at the public library.' },
  },
  {
    word: 'مِنْدِيل', transliteration: 'mindil', meaning: 'handkerchief / napkin', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مَسَحَ يَدَيْهِ بِالمِنْدِيل', transliteration: 'Masaha yadayhi bil-mindil', translation: 'He wiped his hands with the napkin.' },
  },
  {
    word: 'مُنَاسَبَة', transliteration: 'munasabah', meaning: 'occasion', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِجْتَمَعَتِ العَائِلَةُ فِي مُنَاسَبَةٍ سَعِيدَة', transliteration: 'Ijtama\'atil-\'a\'ilatu fi munasabatin sa\'idah', translation: 'The family gathered for a happy occasion.' },
  },
  {
    word: 'مُوسِيقَى', transliteration: 'musiqa', meaning: 'music', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَسْتَمِعُ إِلَى المُوسِيقَى أَثْنَاءَ العَمَل', transliteration: 'Yastami\'u ilal-musiqa athna\'al-\'amal', translation: 'He listens to music while working.' },
  },
  {
    word: 'مَيْدَان', transliteration: 'maydan', meaning: 'square / field', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِلْتَقَوْا فِي مَيْدَانِ المَدِينَةِ الرَّئِيسِيّ', transliteration: 'Iltaqaw fi maydanil-madinatir-ra\'isiyy', translation: 'They met in the city\'s main square.' },
  },
  {
    word: 'مَذَاق', transliteration: 'madhaq', meaning: 'taste / flavor', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لِلْفَاكِهَةِ مَذَاقٌ حُلْوٌ لَذِيذ', transliteration: 'Lilfakihati madhaqun hulwun ladhidh', translation: 'The fruit has a sweet, delicious taste.' },
  },
  {
    word: 'مُتْعَة', transliteration: 'mut\'ah', meaning: 'pleasure / enjoyment', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَجَدَ مُتْعَةً كَبِيرَةً فِي السَّفَر', transliteration: 'Wajada mut\'atan kabiratan fis-safar', translation: 'He found great enjoyment in traveling.' },
  },
  {
    word: 'مِرْآة', transliteration: 'mir\'ah', meaning: 'mirror', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'نَظَرَتْ إِلَى نَفْسِهَا فِي المِرْآة', transliteration: 'Nazarat ila nafsiha fil-mir\'ah', translation: 'She looked at herself in the mirror.' },
  },
  {
    word: 'مَاهِر', transliteration: 'mahir', meaning: 'skilled', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'هُوَ نَجَّارٌ مَاهِرٌ فِي عَمَلِه', transliteration: 'Huwa najjarun mahirun fi \'amalih', translation: 'He is a skilled carpenter at his craft.' },
  },
  {
    word: 'مَتْجَر', transliteration: 'matjar', meaning: 'store / shop', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِفْتَتَحَ مَتْجَرًا صَغِيرًا لِلْمَلَابِس', transliteration: 'Iftataha matjaran saghiran lil-malabis', translation: 'He opened a small clothing store.' },
  },
  {
    word: 'مَتِين', transliteration: 'matin', meaning: 'sturdy / firm', pos: 'adjective',
    synonym: null, antonym: 'هَشّ (fragile)',
    example: { arabic: 'بُنِيَ الجِسْرُ بِأَسَاسٍ مَتِين', transliteration: 'Buniyal-jisru bi\'asasin matin', translation: 'The bridge was built with a sturdy foundation.' },
  },
  {
    word: 'مَثَل', transliteration: 'mathal', meaning: 'proverb / example', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'ضَرَبَ لَهُمْ مَثَلًا لِلتَّوْضِيح', transliteration: 'Daraba lahum mathalan littawdih', translation: 'He gave them a proverb for clarification.' },
  },
  {
    word: 'مُجَاهَدَة', transliteration: 'mujahadah', meaning: 'striving / exertion (against desires)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'النَّجَاحُ ثَمْرَةُ مُجَاهَدَةِ النَّفْس', transliteration: 'An-najahu thamratu mujahadatin-nafs', translation: 'Success is the fruit of striving against oneself.' },
  },
  {
    word: 'مِحْنَة', transliteration: 'mihnah', meaning: 'trial / ordeal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَبَرَ فِي مِحْنَتِهِ حَتَّى فَرَّجَ اللَّهُ عَنْه', transliteration: 'Sabara fi mihnatihi hatta farrajallahu \'anh', translation: 'He remained patient in his ordeal until Allah relieved him.' },
  },
  {
    word: 'مُحِبّ', transliteration: 'muhibb', meaning: 'loving / one who loves', pos: 'adjective / noun',
    synonym: null, antonym: null,
    example: { arabic: 'هُوَ مُحِبٌّ لِلْعِلْمِ وَالمَعْرِفَة', transliteration: 'Huwa muhibbun lil-\'ilmi wal-ma\'rifah', translation: 'He is a lover of knowledge and learning.' },
  },
  {
    word: 'مَحَبَّة', transliteration: 'mahabbah', meaning: 'love / affection', pos: 'noun',
    synonym: 'حُبّ (hubb)', antonym: 'كَرَاهِيَة (hatred)',
    example: { arabic: 'عَاشُوا فِي مَحَبَّةٍ وَوِئَام', transliteration: '\'Ashu fi mahabbatin wa wi\'am', translation: 'They lived in love and harmony.' },
  },
  {
    word: 'مُخْلِص', transliteration: 'mukhlis', meaning: 'sincere / loyal', pos: 'adjective',
    synonym: null, antonym: 'مُنَافِق (hypocrite)',
    example: { arabic: 'كَانَ مُخْلِصًا فِي عَمَلِهِ وَنِيَّتِه', transliteration: 'Kana mukhlisan fi \'amalihi wa niyyatih', translation: 'He was sincere in his work and intention.' },
  },
  {
    word: 'مَدِين', transliteration: 'madin', meaning: 'indebted / owing a debt', pos: 'adjective',
    synonym: null, antonym: 'دَائِن (creditor)',
    example: { arabic: 'أَنَا مَدِينٌ لَهُ بِفَضْلٍ كَبِير', transliteration: 'Ana madinun lahu bifadlin kabir', translation: 'I am indebted to him for a great favor.' },
  },
  {
    word: 'مَرَاسِم', transliteration: 'marasim', meaning: 'ceremony / protocol', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أُقِيمَتْ مَرَاسِمُ التَّخْرِيجِ فِي القَاعَةِ الكُبْرَى', transliteration: 'Uqimat marasimut-takhriji fil-qa\'atil-kubra', translation: 'The graduation ceremony was held in the main hall.' },
  },
  {
    word: 'مَرْجِع', transliteration: 'marji\'', meaning: 'reference (source)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ الكِتَابَ كَمَرْجِعٍ فِي بَحْثِه', transliteration: 'Istakhdamal-kitaba kamarji\'in fi bahthih', translation: 'He used the book as a reference in his research.' },
  },
  {
    word: 'مَزَاج', transliteration: 'mazaj', meaning: 'mood / temperament', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مِزَاجُهُ مُتَقَلِّبٌ هٰذِهِ الأَيَّام', transliteration: 'Mizajuhu mutaqallibun hadhihil-ayyam', translation: 'His mood has been changeable these days.' },
  },
  {
    word: 'مِسَاحَة', transliteration: 'misahah', meaning: 'area / space', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَبْلُغُ مِسَاحَةُ الأَرْضِ هَكْتَارَيْن', transliteration: 'Tablughu misahatul-ardi haktarayn', translation: 'The area of the land is two hectares.' },
  },
  {
    word: 'مَسْؤُولِيَّة', transliteration: 'mas\'uliyyah', meaning: 'responsibility', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَحَمَّلَ مَسْؤُولِيَّةَ قَرَارِهِ بِكَامِلِهَا', transliteration: 'Tahammala mas\'uliyyata qararihi bikamiliha', translation: 'He bore full responsibility for his decision.' },
  },
  {
    word: 'مُصَادَفَة', transliteration: 'musadafah', meaning: 'coincidence', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِلْتَقَيَا بِمَحْضِ المُصَادَفَة', transliteration: 'Iltaqaya bimahdil-musadafah', translation: 'They met by pure coincidence.' },
  },
  {
    word: 'مُصِيبَة', transliteration: 'musibah', meaning: 'calamity / affliction', pos: 'noun',
    synonym: null, antonym: 'نِعْمَة (blessing)',
    example: { arabic: 'صَبَرَ عَلَى المُصِيبَةِ وَاحْتَسَبَ', transliteration: 'Sabara \'alal-musibati wahtasab', translation: 'He endured the calamity with patience, seeking reward.' },
  },
  {
    word: 'مَعْنَى', transliteration: 'ma\'na', meaning: 'meaning', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مَا مَعْنَى هٰذِهِ الكَلِمَة؟', transliteration: 'Ma ma\'na hadhihil-kalimah?', translation: 'What is the meaning of this word?' },
  },
  {
    word: 'مُفَاجِئ', transliteration: 'mufaji\'', meaning: 'sudden / surprising', pos: 'adjective',
    synonym: null, antonym: 'مُتَوَقَّع (expected)',
    example: { arabic: 'كَانَ قَرَارُهُ مُفَاجِئًا لِلْجَمِيع', transliteration: 'Kana qararuhu mufaji\'an lil-jami\'', translation: 'His decision was surprising to everyone.' },
  },
  {
    word: 'مُلْهِم', transliteration: 'mulhim', meaning: 'inspiring', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'كَانَ مُعَلِّمُهُ مُلْهِمًا لَهُ فِي حَيَاتِه', transliteration: 'Kana mu\'allimuhu mulhiman lahu fi hayatih', translation: 'His teacher was inspiring to him in his life.' },
  },
  ],

  'ن': [
  {
      word: 'نُور', transliteration: 'nur', meaning: 'light', pos: 'noun',
      synonym: 'ضِيَاء (diya\')', antonym: 'ظَلَام (darkness)',
      example: { arabic: 'أَنَارَ نُورُ الشَّمْعَةِ الغُرْفَة', transliteration: 'Anara nurush-sham\'atil-ghurfah', translation: 'The candlelight illuminated the room.' },
    },
  {
      word: 'نَجَحَ', transliteration: 'najaha', meaning: 'he succeeded', pos: 'verb',
      synonym: null, antonym: 'فَشِلَ (failed)',
      example: { arabic: 'نَجَحَ فِي جَمِيعِ المَوَادّ', transliteration: 'Najaha fi jami\'il-mawadd', translation: 'He succeeded in all subjects.' },
    },
  {
      word: 'نَهَار', transliteration: 'nahar', meaning: 'daytime', pos: 'noun',
      synonym: null, antonym: 'لَيْل (night)',
      example: { arabic: 'يَعْمَلُ فِي النَّهَارِ وَيَدْرُسُ لَيْلًا', transliteration: 'Ya\'malu fin-nahari wa yadrusu laylan', translation: 'He works during the day and studies at night.' },
    },
  {
      word: 'نَظِيف', transliteration: 'nazif', meaning: 'clean', pos: 'adjective',
      synonym: null, antonym: 'وَسِخ (dirty)',
      example: { arabic: 'البَيْتُ نَظِيفٌ وَمُرَتَّب', transliteration: 'Al-baytu nazifun wa murattab', translation: 'The house is clean and tidy.' },
    },
  {
      word: 'نَامَ', transliteration: 'nama', meaning: 'he slept', pos: 'verb',
      synonym: null, antonym: 'اِسْتَيْقَظَ (woke up)',
      example: { arabic: 'نَامَ مُبَكِّرًا لِيَسْتَيْقِظَ نَشِيطًا', transliteration: 'Nama mubakkiran liyastayqiza nashitan', translation: 'He slept early to wake up energetic.' },
    },
  {
      word: 'نَجْم', transliteration: 'najm', meaning: 'star', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'تَتَلَأْلَأُ النُّجُومُ فِي السَّمَاءِ الصَّافِيَة', transliteration: 'Tatala\'la\'un-nujumu fis-sama\'is-safiyah', translation: 'The stars twinkle in the clear sky.' },
    },
  {
      word: 'نَصِيحَة', transliteration: 'nasihah', meaning: 'advice', pos: 'noun',
      synonym: 'إِرْشَاد (irshad)', antonym: null,
      example: { arabic: 'قَدَّمَ لَهُ نَصِيحَةً مُفِيدَة', transliteration: 'Qaddama lahu nasihatan mufidah', translation: 'He gave him useful advice.' },
    },
  {
      word: 'نَظَرَ', transliteration: 'nazara', meaning: 'he looked', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'نَظَرَ إِلَى السَّاعَةِ بِقَلَق', transliteration: 'Nazara ilas-sa\'ati biqalaq', translation: 'He looked at the clock with worry.' },
    },
  {
      word: 'نَبِيّ', transliteration: 'nabiyy', meaning: 'prophet', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'مُحَمَّدٌ نَبِيُّ الرَّحْمَة', transliteration: 'Muhammadun nabiyyur-rahmah', translation: 'Muhammad is the Prophet of Mercy.' },
    },
  {
      word: 'نَقَصَ', transliteration: 'naqasa', meaning: 'it decreased', pos: 'verb',
      synonym: null, antonym: 'زَادَ (increased)',
      example: { arabic: 'نَقَصَ عَدَدُ الحُضُورِ هٰذَا العَام', transliteration: 'Naqasa \'adadul-hudur hadhal-\'am', translation: 'The number of attendees decreased this year.' },
    },
  {
      word: 'نَظَافَة', transliteration: 'nazafah', meaning: 'cleanliness', pos: 'noun',
      synonym: null, antonym: 'وَسَخ (dirtiness)',
      example: { arabic: 'النَّظَافَةُ مِنَ الإِيمَان', transliteration: 'An-nazafatu minal-iman', translation: 'Cleanliness is part of faith.' },
    },
  {
      word: 'نَتِيجَة', transliteration: 'natijah', meaning: 'result', pos: 'noun',
      synonym: null, antonym: 'سَبَب (cause)',
      example: { arabic: 'كَانَتِ النَّتِيجَةُ مُرْضِيَةً لِلْجَمِيع', transliteration: 'Kanatin-natijatu murdiyatan lil-jami\'', translation: 'The result was satisfactory for everyone.' },
    },
  {
      word: 'نُصْح', transliteration: 'nush', meaning: 'sincere advice / counsel', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الدِّينُ النَّصِيحَة', transliteration: 'Ad-dinun-nasihah', translation: 'Religion is sincere advice.' },
    },
  {
      word: 'نَهْر', transliteration: 'nahr', meaning: 'river', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَجْرِي النَّهْرُ عَبْرَ القَرْيَة', transliteration: 'Yajrin-nahru \'abral-qaryah', translation: 'The river flows through the village.' },
    },
  {
      word: 'نِعْمَة', transliteration: 'ni\'mah', meaning: 'blessing / favor', pos: 'noun',
      synonym: null, antonym: 'نِقْمَة (misfortune)',
      example: { arabic: 'الصِّحَّةُ نِعْمَةٌ عَظِيمَة', transliteration: 'As-sihhatu ni\'matun \'azimah', translation: 'Health is a great blessing.' },
    },
  {
      word: 'نَظَّمَ', transliteration: 'nazzama', meaning: 'he organized', pos: 'verb',
      synonym: 'رَتَّبَ (rattaba)', antonym: 'بَعْثَرَ (scattered)',
      example: { arabic: 'نَظَّمَ وَقْتَهُ بَيْنَ الدِّرَاسَةِ وَالرَّاحَة', transliteration: 'Nazzama waqtahu baynad-dirasati war-rahah', translation: 'He organized his time between studying and resting.' },
    },
  {
      word: 'نَادِرًا', transliteration: 'nadiran', meaning: 'rarely', pos: 'adverb',
      synonym: null, antonym: 'غَالِبًا (often)',
      example: { arabic: 'يَخْرُجُ نَادِرًا فِي أَيَّامِ الأُسْبُوع', transliteration: 'Yakhruju nadiran fi ayyamil-usbu\'', translation: 'He rarely goes out on weekdays.' },
    },
  {
      word: 'نَفَقَة', transliteration: 'nafaqah', meaning: 'expenditure / maintenance (financial)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَتَحَمَّلُ الزَّوْجُ نَفَقَةَ أُسْرَتِهِ', transliteration: 'Yatahammaluz-zawju nafaqata usratih', translation: 'The husband bears the expense of his family.' },
    },
  {
      word: 'نَبْض', transliteration: 'nabd', meaning: 'pulse', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'فَحَصَ الطَّبِيبُ نَبْضَ المَرِيض', transliteration: 'Fahasat-tabibu nabdal-marid', translation: 'The doctor checked the patient\'s pulse.' },
    },
  {
      word: 'نَهَى', transliteration: 'naha', meaning: 'he forbade', pos: 'verb',
      synonym: null, antonym: 'أَمَرَ (commanded)',
      example: { arabic: 'نَهَى الإِسْلَامُ عَنِ الكَذِب', transliteration: 'Nahal-islamu \'anil-kadhib', translation: 'Islam forbids lying.' },
    },
  {
    word: 'نَافِذَة', transliteration: 'nafidhah', meaning: 'window', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'فَتَحَ النَّافِذَةَ لِيَدْخُلَ الهَوَاءُ النَّقِيّ', transliteration: 'Fatahan-nafidhata liyadkhulal-hawa\'un-naqiyy', translation: 'He opened the window to let fresh air in.' },
  },
  {
    word: 'نَحْلَة', transliteration: 'nahlah', meaning: 'bee', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَنْتِجُ النَّحْلَةُ العَسَلَ', transliteration: 'Tantijun-nahlatul-\'asal', translation: 'The bee produces honey.' },
  },
  {
    word: 'نَخْلَة', transliteration: 'nakhlah', meaning: 'palm tree', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَنْتَشِرُ النَّخْلَةُ فِي الوَاحَات', transliteration: 'Tantashirun-nakhlatu fil-wahat', translation: 'The palm tree is widespread in oases.' },
  },
  {
    word: 'نَشِيط', transliteration: 'nashit', meaning: 'active / energetic', pos: 'adjective',
    synonym: null, antonym: 'كَسُول (lazy)',
    example: { arabic: 'الطِّفْلُ نَشِيطٌ وَيُحِبُّ الحَرَكَة', transliteration: 'At-tiflu nashitun wa yuhibbul-harakah', translation: 'The child is active and loves movement.' },
  },
  {
    word: 'نَظِير', transliteration: 'nazir', meaning: 'counterpart / equal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِلْتَقَى الوَزِيرُ بِنَظِيرِهِ الأَجْنَبِيّ', transliteration: 'Iltaqal-waziru binazirihil-ajnabiyy', translation: 'The minister met his foreign counterpart.' },
  },
  {
    word: 'نَفْس', transliteration: 'nafs', meaning: 'self / soul', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مُجَاهَدَةُ النَّفْسِ أَعْظَمُ الجِهَاد', transliteration: 'Mujahadatun-nafsi a\'zamul-jihad', translation: 'Struggling against one\'s self is the greatest struggle.' },
  },
  {
    word: 'نُمُوّ', transliteration: 'numuww', meaning: 'growth', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْتَاجُ النَّبَاتُ إِلَى المَاءِ لِلنُّمُوّ', transliteration: 'Yahtajun-nabatu ilal-ma\'i linnumuww', translation: 'The plant needs water to grow.' },
  },
  {
    word: 'نَوْم', transliteration: 'nawm', meaning: 'sleep', pos: 'noun',
    synonym: null, antonym: 'يَقَظَة (wakefulness)',
    example: { arabic: 'قِلَّةُ النَّوْمِ تُؤَثِّرُ عَلَى الصِّحَّة', transliteration: 'Qillatun-nawmi tu\'aththiru \'alas-sihhah', translation: 'Lack of sleep affects one\'s health.' },
  },
  {
    word: 'نِيَّة', transliteration: 'niyyah', meaning: 'intention', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'الأَعْمَالُ بِالنِّيَّات', transliteration: 'Al-a\'malu bin-niyyat', translation: 'Deeds are judged by their intentions.' },
  },
  {
    word: 'نَقَلَ', transliteration: 'naqala', meaning: 'he transported / moved', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'نَقَلَ الأَثَاثَ إِلَى البَيْتِ الجَدِيد', transliteration: 'Naqalal-athatha ilal-baytil-jadid', translation: 'He moved the furniture to the new house.' },
  },
  {
    word: 'نَاسَبَ', transliteration: 'nasaba', meaning: 'it suited / was fitting for', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'لَمْ يُنَاسِبْهُ الوَقْتُ المُحَدَّد', transliteration: 'Lam yunasibhul-waqtul-muhaddad', translation: 'The scheduled time did not suit him.' },
  },
  {
    word: 'نُبْل', transliteration: 'nubl', meaning: 'nobility (of character)', pos: 'noun',
    synonym: null, antonym: 'خِسَّة (baseness)',
    example: { arabic: 'عُرِفَ بِنُبْلِ أَخْلَاقِه', transliteration: '\'Urifa binubli akhlaqih', translation: 'He was known for the nobility of his character.' },
  },
  {
    word: 'نَبِيل', transliteration: 'nabil', meaning: 'noble', pos: 'adjective',
    synonym: null, antonym: 'وَضِيع (base)',
    example: { arabic: 'قَامَ بِعَمَلٍ نَبِيلٍ لِمُسَاعَدَةِ الفُقَرَاء', transliteration: 'Qama bi\'amalin nabilin limusa\'adatil-fuqara\'', translation: 'He did a noble deed to help the poor.' },
  },
  {
    word: 'نَتَجَ', transliteration: 'nataja', meaning: 'it resulted (from)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'نَتَجَ الفَوْزُ عَنْ عَمَلٍ جَمَاعِيٍّ مُتْقَن', transliteration: 'Natajal-fawzu \'an \'amalin jama\'iyyin mutqan', translation: 'The victory resulted from well-executed teamwork.' },
  },
  {
    word: 'نُخْبَة', transliteration: 'nukhbah', meaning: 'elite / best selection', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَضَرَ الحَفْلَ نُخْبَةٌ مِنَ العُلَمَاء', transliteration: 'Hadaral-hafla nukhbatun minal-\'ulama\'', translation: 'An elite of scholars attended the ceremony.' },
  },
  {
    word: 'نَدِمَ', transliteration: 'nadima', meaning: 'he regretted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'نَدِمَ عَلَى تَصَرُّفِهِ فِيمَا بَعْد', transliteration: 'Nadima \'ala tasarrufihi fima ba\'d', translation: 'He later regretted his behavior.' },
  },
  {
    word: 'نَدَم', transliteration: 'nadam', meaning: 'regret', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'التَّوْبَةُ تَبْدَأُ بِالنَّدَمِ عَلَى الذَّنْب', transliteration: 'At-tawbatu tabda\'u bin-nadami \'aladh-dhanb', translation: 'Repentance begins with regret over the sin.' },
  },
  {
    word: 'نُزْهَة', transliteration: 'nuzhah', meaning: 'outing / excursion', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَامُوا بِنُزْهَةٍ عَائِلِيَّةٍ فِي الحَدِيقَة', transliteration: 'Qamu binuzhatin \'a\'iliyyatin fil-hadiqah', translation: 'They went on a family outing in the park.' },
  },
  {
    word: 'نَشَاط', transliteration: 'nashat', meaning: 'activity / energy', pos: 'noun',
    synonym: null, antonym: 'كَسَل (laziness)',
    example: { arabic: 'شَارَكَ فِي نَشَاطٍ رِيَاضِيٍّ مُتَنَوِّع', transliteration: 'Sharaka fi nashatin riyadiyyin mutanawwi\'', translation: 'He took part in a varied sports activity.' },
  },
  {
    word: 'نِصْف', transliteration: 'nisf', meaning: 'half', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَكَلَ نِصْفَ التُّفَّاحَةِ فَقَط', transliteration: 'Akala nisfat-tuffahati faqat', translation: 'He ate only half of the apple.' },
  },
  {
    word: 'نَظَّارَة', transliteration: 'nazzarah', meaning: 'eyeglasses', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِرْتَدَى نَظَّارَتَهُ لِيَقْرَأَ الصَّحِيفَة', transliteration: 'Irtada nazzaratahu liyaqra\'as-sahifah', translation: 'He put on his glasses to read the newspaper.' },
  },
  {
    word: 'نَعِيم', transliteration: 'na\'im', meaning: 'bliss / delight', pos: 'noun',
    synonym: null, antonym: 'جَحِيم (torment)',
    example: { arabic: 'الجَنَّةُ دَارُ النَّعِيمِ الأَبَدِيّ', transliteration: 'Al-jannatu darun-na\'imil-abadiyy', translation: 'Paradise is the abode of eternal bliss.' },
  },
  {
    word: 'نَغَمَة', transliteration: 'naghamah', meaning: 'tune / melody', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَزَفَ نَغَمَةً حَزِينَةً عَلَى العُود', transliteration: '\'Azafa naghamatan hazinatan \'alal-\'ud', translation: 'He played a sad tune on the oud.' },
  },
  {
    word: 'نَقِيّ', transliteration: 'naqiyy', meaning: 'pure / clean', pos: 'adjective',
    synonym: 'صَافٍ (safin)', antonym: 'مُلَوَّث (polluted)',
    example: { arabic: 'الهَوَاءُ نَقِيٌّ فِي هٰذِهِ المِنْطَقَة', transliteration: 'Al-hawa\'u naqiyyun fi hadhihil-mintaqah', translation: 'The air is pure in this region.' },
  },
  {
    word: 'نَمُوذَج', transliteration: 'namudhaj', meaning: 'model / sample / form (document)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'مَلَأَ نَمُوذَجَ التَّسْجِيلِ بِعِنَايَة', transliteration: 'Mala\'a namudhajat-tasjili bi\'inayah', translation: 'He filled out the registration form carefully.' },
  },
  {
    word: 'نَهِيق', transliteration: 'nahiq', meaning: 'braying (of a donkey)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سُمِعَ نَهِيقُ الحِمَارِ مِنْ بَعِيد', transliteration: 'Sumi\'a nahiqul-himari min ba\'id', translation: 'The donkey\'s braying was heard from afar.' },
  },
  {
    word: 'نَوَافِذ', transliteration: 'nawafidh', meaning: 'windows (plural)', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'فَتَحَ جَمِيعَ النَّوَافِذِ لِتَهْوِيَةِ البَيْت', transliteration: 'Fataha jami\'an-nawafidhi litahwiyatil-bayt', translation: 'He opened all the windows to ventilate the house.' },
  },
  {
    word: 'نَوْعِيَّة', transliteration: 'naw\'iyyah', meaning: 'quality (type-related)', pos: 'noun',
    synonym: null, antonym: 'كَمِّيَّة (quantity)',
    example: { arabic: 'تَهْتَمُّ الشَّرِكَةُ بِنَوْعِيَّةِ مُنْتَجَاتِهَا', transliteration: 'Tahtammush-sharikatu binaw\'iyyati muntajatiha', translation: 'The company cares about the quality of its products.' },
  },
  {
    word: 'نَهْضَة', transliteration: 'nahdah', meaning: 'renaissance / awakening', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَهِدَتِ البِلَادُ نَهْضَةً عِلْمِيَّةً وَاسِعَة', transliteration: 'Shahidatil-biladu nahdatan \'ilmiyyatan wasi\'ah', translation: 'The country witnessed a wide scientific renaissance.' },
  },
  ],

  'ه': [
  {
      word: 'هَدِيَّة', transliteration: 'hadiyyah', meaning: 'gift', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَعْطَاهُ هَدِيَّةً جَمِيلَةً بِمُنَاسَبَةِ عِيدِ مِيلَادِهِ', transliteration: 'A\'tahu hadiyyatan jamilatan bimunasabati \'idi miladih', translation: 'He gave him a beautiful gift for his birthday.' },
    },
  {
      word: 'هَدَأَ', transliteration: 'hada\'a', meaning: 'he calmed down', pos: 'verb',
      synonym: 'سَكَنَ (sakana)', antonym: 'اِضْطَرَبَ (was agitated)',
      example: { arabic: 'هَدَأَ الطِّفْلُ بَعْدَ البُكَاء', transliteration: 'Hada\'at-tiflu ba\'dal-buka\'', translation: 'The child calmed down after crying.' },
    },
  {
      word: 'هَوَاء', transliteration: 'hawa\'', meaning: 'air', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'الهَوَاءُ نَقِيٌّ فِي القَرْيَة', transliteration: 'Al-hawa\'u naqiyyun fil-qaryah', translation: 'The air is clean in the village.' },
    },
  {
      word: 'هَدَف', transliteration: 'hadaf', meaning: 'goal / target', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَسْعَى لِتَحْقِيقِ هَدَفِهِ', transliteration: 'Yas\'a litahqiqi hadafih', translation: 'He strives to achieve his goal.' },
    },
  {
      word: 'هَرَبَ', transliteration: 'haraba', meaning: 'he fled / escaped', pos: 'verb',
      synonym: null, antonym: 'وَاجَهَ (confronted)',
      example: { arabic: 'هَرَبَ الطِّفْلُ مِنَ المَدْرَسَةِ خَوْفًا', transliteration: 'Harabat-tiflu minal-madrasati khawfan', translation: 'The child fled from school out of fear.' },
    },
  {
      word: 'هَادِئ', transliteration: 'hadi\'', meaning: 'calm / quiet', pos: 'adjective',
      synonym: null, antonym: 'صَاخِب (noisy)',
      example: { arabic: 'الجَوُّ هَادِئٌ فِي القَرْيَة', transliteration: 'Al-jawwu hadi\'un fil-qaryah', translation: 'The atmosphere is calm in the village.' },
    },
  {
      word: 'هَاجَرَ', transliteration: 'hajara', meaning: 'he emigrated', pos: 'verb',
      synonym: null, antonym: 'اِسْتَقَرَّ (settled)',
      example: { arabic: 'هَاجَرَ النَّبِيُّ إِلَى المَدِينَة', transliteration: 'Hajaran-nabiyyu ilal-madinah', translation: 'The Prophet emigrated to Madinah.' },
    },
  {
      word: 'هُدُوء', transliteration: 'hudu\'', meaning: 'calmness / quiet', pos: 'noun',
      synonym: 'سَكِينَة (sakinah)', antonym: 'ضَجَّة (noise)',
      example: { arabic: 'سَادَ الهُدُوءُ المَكَانَ لَيْلًا', transliteration: 'Sadal-hudu\'ul-makana laylan', translation: 'Calmness prevailed over the place at night.' },
    },
  {
      word: 'هَامّ', transliteration: 'hamm', meaning: 'important', pos: 'adjective',
      synonym: 'مُهِمّ (muhimm)', antonym: 'تَافِه (trivial)',
      example: { arabic: 'هٰذَا مَوْضُوعٌ هَامٌّ لِلنِّقَاش', transliteration: 'Hadha mawdu\'un hammun linniqash', translation: 'This is an important topic for discussion.' },
    },
  {
      word: 'هَبَطَ', transliteration: 'habata', meaning: 'it descended / landed', pos: 'verb',
      synonym: null, antonym: 'اِرْتَفَعَ / صَعِدَ (ascended)',
      example: { arabic: 'هَبَطَتِ الطَّائِرَةُ بِسَلَام', transliteration: 'Habatatit-ta\'iratu bisalam', translation: 'The plane landed safely.' },
    },
  {
      word: 'هِوَايَة', transliteration: 'hiwayah', meaning: 'hobby', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'هِوَايَتُهُ المُفَضَّلَةُ الرَّسْم', transliteration: 'Hiwayatuhul-mufaddalatur-rasm', translation: 'His favorite hobby is drawing.' },
    },
  {
      word: 'هَتَفَ', transliteration: 'hatafa', meaning: 'he shouted / chanted', pos: 'verb',
      synonym: null, antonym: 'هَمَسَ (whispered)',
      example: { arabic: 'هَتَفَ الجُمْهُورُ بِاسْمِ الفَرِيق', transliteration: 'Hatafal-jumhuru bismil-fariq', translation: 'The crowd chanted the team\'s name.' },
    },
  {
      word: 'هَمَسَ', transliteration: 'hamasa', meaning: 'he whispered', pos: 'verb',
      synonym: null, antonym: 'صَرَخَ (shouted)',
      example: { arabic: 'هَمَسَ فِي أُذُنِ صَدِيقِهِ', transliteration: 'Hamasa fi udhuni sadiqih', translation: 'He whispered in his friend\'s ear.' },
    },
  {
      word: 'هَيْبَة', transliteration: 'haybah', meaning: 'awe / dignified presence', pos: 'noun',
      synonym: 'وَقَار (waqar)', antonym: null,
      example: { arabic: 'دَخَلَ المَكَانَ بِهَيْبَةٍ وَوَقَار', transliteration: 'Dakhalal-makana bihaybatin wa waqar', translation: 'He entered the place with dignity and gravitas.' },
    },
  {
      word: 'هَنِيء', transliteration: 'hani\'', meaning: 'pleasant / wholesome', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'تَمَنَّيْتُ لَهُ عَيْشًا هَنِيئًا', transliteration: 'Tamannaytu lahu \'ayshan hani\'an', translation: 'I wished him a pleasant life.' },
    },
  {
      word: 'هُوِيَّة', transliteration: 'huwiyyah', meaning: 'identity', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'يَعْتَزُّ بِهُوِيَّتِهِ العَرَبِيَّةِ الإِسْلَامِيَّة', transliteration: 'Ya\'tazzu bihuwiyyatihil-\'arabiyyatil-islamiyyah', translation: 'He takes pride in his Arab-Islamic identity.' },
    },
  {
      word: 'هَضْبَة', transliteration: 'hadbah', meaning: 'plateau / hill', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'بُنِيَتِ القَرْيَةُ عَلَى هَضْبَةٍ مُرْتَفِعَة', transliteration: 'Buniyatil-qaryatu \'ala hadbatin murtafi\'ah', translation: 'The village was built on an elevated plateau.' },
    },
  {
      word: 'هَتَكَ', transliteration: 'hataka', meaning: 'he violated / exposed (a secret)', pos: 'verb',
      synonym: null, antonym: 'سَتَرَ (concealed/covered)',
      example: { arabic: 'لَا يَجُوزُ أَنْ يَهْتِكَ المَرْءُ سِتْرَ غَيْرِهِ', transliteration: 'La yajuzu an yahtikal-mar\'u sitra ghayrih', translation: 'One must not expose the private matters of others.' },
    },
  {
      word: 'هُبُوب', transliteration: 'hubub', meaning: 'blowing (of wind)', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَحْسَسْنَا بِهُبُوبِ رِيحٍ بَارِدَة', transliteration: 'Ahsasna bihububi rihin baridah', translation: 'We felt a cold wind blowing.' },
    },
  {
      word: 'هَمّ', transliteration: 'hamm', meaning: 'worry / concern', pos: 'noun',
      synonym: 'قَلَق (qalaq)', antonym: 'رَاحَة (ease)',
      example: { arabic: 'أَذْهَبَ اللَّهُ عَنْهُ هَمَّهُ', transliteration: 'Adhhaballahu \'anhu hammah', translation: 'Allah removed his worry from him.' },
    },
  {
    word: 'هِلَال', transliteration: 'hilal', meaning: 'crescent moon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'رَأَوْا هِلَالَ رَمَضَانَ فِي السَّمَاء', transliteration: 'Ra\'aw hilala ramadana fis-sama\'', translation: 'They saw the crescent moon of Ramadan in the sky.' },
  },
  {
    word: 'هَدَّأَ', transliteration: 'hadda\'a', meaning: 'he calmed (someone/something) down', pos: 'verb',
    synonym: null, antonym: 'أَثَارَ (agitated)',
    example: { arabic: 'هَدَّأَ الأُمُّ طِفْلَهَا البَاكِي', transliteration: 'Hadda\'al-ummu tiflahal-baki', translation: 'The mother calmed her crying child.' },
  },
  {
    word: 'هَجَمَ', transliteration: 'hajama', meaning: 'he attacked', pos: 'verb',
    synonym: null, antonym: 'دَافَعَ (defended)',
    example: { arabic: 'هَجَمَ الأَسَدُ عَلَى فَرِيسَتِهِ', transliteration: 'Hajamal-asadu \'ala farisatih', translation: 'The lion attacked its prey.' },
  },
  {
    word: 'هُجُوم', transliteration: 'hujum', meaning: 'attack', pos: 'noun',
    synonym: null, antonym: 'دِفَاع (defense)',
    example: { arabic: 'صَدُّوا الهُجُومَ بِنَجَاح', transliteration: 'Saddul-hujuma binajah', translation: 'They repelled the attack successfully.' },
  },
  {
    word: 'هَرَم', transliteration: 'haram', meaning: 'pyramid', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'زَارُوا الأَهْرَامَ فِي مِصْر', transliteration: 'Zarul-ahrama fi misr', translation: 'They visited the pyramids in Egypt.' },
  },
  {
    word: 'هَزَمَ', transliteration: 'hazama', meaning: 'he defeated', pos: 'verb',
    synonym: null, antonym: 'اِنْهَزَمَ (was defeated)',
    example: { arabic: 'هَزَمَ فَرِيقُنَا الخَصْمَ بِفَارِقٍ كَبِير', transliteration: 'Hazama fariquna al-khasma bifariqin kabir', translation: 'Our team defeated the opponent by a large margin.' },
  },
  {
    word: 'هَضَمَ', transliteration: 'hadama', meaning: 'he digested', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْتَاجُ الجِسْمُ وَقْتًا لِيَهْضِمَ الطَّعَام', transliteration: 'Yahtajul-jismu waqtan liyahdimat-ta\'am', translation: 'The body needs time to digest food.' },
  },
  {
    word: 'هَلَع', transliteration: 'hala\'', meaning: 'panic', pos: 'noun',
    synonym: 'ذُعْر (dhu\'r)', antonym: null,
    example: { arabic: 'أَصَابَهُ الهَلَعُ عِنْدَ سَمَاعِ الصَّوْتِ المُفَاجِئ', transliteration: 'Asabahul-hala\'u \'inda sama\'is-sawtil-mufaji\'', translation: 'Panic struck him upon hearing the sudden sound.' },
  },
  {
    word: 'هَنَاء', transliteration: 'hana\'', meaning: 'bliss / happiness', pos: 'noun',
    synonym: null, antonym: 'شَقَاء (misery)',
    example: { arabic: 'عَاشَ حَيَاةً مَلِيئَةً بِالهَنَاء', transliteration: '\'Asha hayatan mali\'atan bil-hana\'', translation: 'He lived a life full of bliss.' },
  },
  {
    word: 'هَيْئَة', transliteration: 'hay\'ah', meaning: 'organization / appearance', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أَصْدَرَتِ الهَيْئَةُ قَرَارًا جَدِيدًا', transliteration: 'Asdaratil-hay\'atu qararan jadidan', translation: 'The organization issued a new decision.' },
  },
  {
    word: 'هَاتَفَ', transliteration: 'hatafa (called)', meaning: 'he telephoned', pos: 'verb',
    synonym: 'اِتَّصَلَ (ittasala)', antonym: null,
    example: { arabic: 'هَاتَفَ صَدِيقَهُ لِيُطَمْئِنَّهُ عَلَيْه', transliteration: 'Hatafa sadiqahu liyutma\'innahu \'alayh', translation: 'He telephoned his friend to reassure him.' },
  },
  {
    word: 'هَاوِيَة', transliteration: 'hawiyah', meaning: 'abyss / chasm', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَادَ يَسْقُطُ فِي الهَاوِيَة', transliteration: 'Kada yasqutu fil-hawiyah', translation: 'He nearly fell into the abyss.' },
  },
  {
    word: 'هَبَة', transliteration: 'hibah', meaning: 'gift / grant', pos: 'noun',
    synonym: 'هَدِيَّة (hadiyyah)', antonym: null,
    example: { arabic: 'قَدَّمَ هِبَةً سَخِيَّةً لِلْمَدْرَسَة', transliteration: 'Qaddama hibatan sakhiyyatan lil-madrasah', translation: 'He gave a generous gift to the school.' },
  },
  {
    word: 'هَتَمَ', transliteration: 'hatama (rare)', meaning: 'he crushed / smashed (rare verb)', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'هَتَمَ العَدُوُّ صُفُوفَهُمْ فِي المَعْرَكَة', transliteration: 'Hatamal-\'aduwwu sufufahum fil-ma\'rakah', translation: 'The enemy shattered their ranks in the battle.' },
  },
  {
    word: 'هُجْرَة', transliteration: 'hijrah', meaning: 'migration / emigration', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'يُؤَرَّخُ التَّقْوِيمُ الإِسْلَامِيُّ بِالهِجْرَة', transliteration: 'Yu\'arrakhut-taqwimul-islamiyyu bil-hijrah', translation: 'The Islamic calendar is dated by the Hijrah (migration).' },
  },
  {
    word: 'هَدْم', transliteration: 'hadm', meaning: 'demolition', pos: 'noun',
    synonym: null, antonym: 'بِنَاء (construction)',
    example: { arabic: 'تَمَّ هَدْمُ المَبْنَى القَدِيم', transliteration: 'Tamma hadmul-mabnal-qadim', translation: 'The old building was demolished.' },
  },
  {
    word: 'هَدَمَ', transliteration: 'hadama', meaning: 'he demolished', pos: 'verb',
    synonym: null, antonym: 'بَنَى (built)',
    example: { arabic: 'هَدَمَ الجِدَارَ القَدِيمَ لِيَبْنِيَ جَدِيدًا', transliteration: 'Hadamal-jidaral-qadima liyabniya jadidan', translation: 'He demolished the old wall to build a new one.' },
  },
  {
    word: 'هَذَيَان', transliteration: 'hadhayan', meaning: 'delirium / raving', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'أُصِيبَ بِالهَذَيَانِ بِسَبَبِ الحُمَّى الشَّدِيدَة', transliteration: 'Usiba bil-hadhayani bisababil-hummash-shadidah', translation: 'He experienced delirium due to the severe fever.' },
  },
  {
    word: 'هَرَّبَ', transliteration: 'harraba', meaning: 'he smuggled', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'حَاوَلُوا أَنْ يُهَرِّبُوا البَضَائِعَ عَبْرَ الحُدُود', transliteration: 'Hawalu an yuharribul-bada\'i\'a \'abral-hudud', translation: 'They tried to smuggle goods across the border.' },
  },
  {
    word: 'هَزِيمَة', transliteration: 'hazimah', meaning: 'defeat', pos: 'noun',
    synonym: null, antonym: 'نَصْر (victory)',
    example: { arabic: 'تَقَبَّلَ الهَزِيمَةَ بِرُوحٍ رِيَاضِيَّة', transliteration: 'Taqabbalal-hazimata biruhin riyadiyyah', translation: 'He accepted the defeat with good sportsmanship.' },
  },
  {
    word: 'هَشّ', transliteration: 'hashsh', meaning: 'fragile / brittle', pos: 'adjective',
    synonym: null, antonym: 'مَتِين (sturdy)',
    example: { arabic: 'كَانَ الصُّنْدُوقُ هَشًّا فَتَكَسَّرَ بِسُهُولَة', transliteration: 'Kanas-sunduqu hashshan fatakassara bisuhulah', translation: 'The box was fragile so it broke easily.' },
  },
  {
    word: 'هَشَّمَ', transliteration: 'hashshama', meaning: 'he shattered / smashed', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'هَشَّمَ الزُّجَاجَ بِحَجَرٍ كَبِير', transliteration: 'Hashshamaz-zujaja bihajarin kabir', translation: 'He shattered the glass with a large stone.' },
  },
  {
    word: 'هُمُوم', transliteration: 'humum', meaning: 'worries (plural)', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'حَمَلَ هُمُومَ أُسْرَتِهِ عَلَى عَاتِقِه', transliteration: 'Hamala humuma usratihi \'ala \'atiqih', translation: 'He carried his family\'s worries on his shoulders.' },
  },
  {
    word: 'هِمَّة', transliteration: 'himmah', meaning: 'ambition / determination', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'صَاحِبُ الهِمَّةِ العَالِيَةِ يَصِلُ إِلَى أَهْدَافِه', transliteration: 'Sahibul-himmatil-\'aliyati yasilu ila ahdafih', translation: 'The person of high determination reaches his goals.' },
  },
  {
    word: 'هَنَّأَ', transliteration: 'hanna\'a', meaning: 'he congratulated', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'هَنَّأَهُ عَلَى نَجَاحِهِ فِي العَمَل', transliteration: 'Hanna\'ahu \'ala najahihi fil-\'amal', translation: 'He congratulated him on his success at work.' },
  },
  {
    word: 'هَوِيَ', transliteration: 'hawiya', meaning: 'he fell / plummeted', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'هَوَى مِنْ أَعْلَى السُّلَّم', transliteration: 'Hawa min a\'las-sullam', translation: 'He fell from the top of the ladder.' },
  },
  {
    word: 'هَوَس', transliteration: 'hawas', meaning: 'obsession / mania', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'لَدَيْهِ هَوَسٌ بِجَمْعِ الطَّوَابِع', transliteration: 'Ladayhi hawasun bijam\'it-tawabi\'', translation: 'He has an obsession with collecting stamps.' },
  },
  {
    word: 'هَيْمَنَة', transliteration: 'haymanah', meaning: 'domination / control', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'سَعَتِ الدَّوْلَةُ إِلَى الهَيْمَنَةِ الِاقْتِصَادِيَّة', transliteration: 'Sa\'atid-dawlatu ilal-haymanatil-iqtisadiyyah', translation: 'The state sought economic dominance.' },
  },
  {
    word: 'هَيَّأَ', transliteration: 'hayya\'a', meaning: 'he prepared / made ready', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'هَيَّأَ نَفْسَهُ لِمُوَاجَهَةِ التَّحَدِّي', transliteration: 'Hayya\'a nafsahu limuwajahatit-tahaddi', translation: 'He prepared himself to face the challenge.' },
  },
  ],

  'و': [
  {
      word: 'وَلَد', transliteration: 'walad', meaning: 'boy / child', pos: 'noun',
      synonym: null, antonym: 'بِنْت (girl)',
      example: { arabic: 'الوَلَدُ يَلْعَبُ فِي الشَّارِع', transliteration: 'Al-waladu yal\'abu fish-shari\'', translation: 'The boy is playing in the street.' },
    },
  {
      word: 'وَقْت', transliteration: 'waqt', meaning: 'time', pos: 'noun',
      synonym: 'زَمَن (zaman)', antonym: null,
      example: { arabic: 'الوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَك', transliteration: 'Al-waqtu kas-sayfi in lam taqta\'hu qata\'ak', translation: 'Time is like a sword — if you don\'t cut it, it cuts you.' },
    },
  {
      word: 'وَجَدَ', transliteration: 'wajada', meaning: 'he found', pos: 'verb',
      synonym: null, antonym: 'فَقَدَ (lost)',
      example: { arabic: 'وَجَدَ المِحْفَظَةَ عَلَى الأَرْض', transliteration: 'Wajadal-mihfazata \'alal-ard', translation: 'He found the wallet on the ground.' },
    },
  {
      word: 'وَاسِع', transliteration: 'wasi\'', meaning: 'spacious / wide', pos: 'adjective',
      synonym: null, antonym: 'ضَيِّق (narrow)',
      example: { arabic: 'المَنْزِلُ وَاسِعٌ وَمُرِيح', transliteration: 'Al-manzilu wasi\'un wa murih', translation: 'The house is spacious and comfortable.' },
    },
  {
      word: 'وَرَقَة', transliteration: 'waraqah', meaning: 'paper / leaf', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'كَتَبَ اِسْمَهُ عَلَى الوَرَقَة', transliteration: 'Kataba ismahu \'alal-waraqah', translation: 'He wrote his name on the paper.' },
    },
  {
      word: 'وَفَاء', transliteration: 'wafa\'', meaning: 'loyalty / faithfulness', pos: 'noun',
      synonym: 'إِخْلَاص (ikhlas)', antonym: 'خِيَانَة (betrayal)',
      example: { arabic: 'عُرِفَ بِوَفَائِهِ لِأَصْدِقَائِهِ', transliteration: '\'Urifa biwafa\'ihi li\'asdiqa\'ih', translation: 'He was known for his loyalty to his friends.' },
    },
  {
      word: 'وَصَلَ', transliteration: 'wasala', meaning: 'he arrived', pos: 'verb',
      synonym: null, antonym: 'غَادَرَ (departed)',
      example: { arabic: 'وَصَلَ إِلَى البَيْتِ مُتَأَخِّرًا', transliteration: 'Wasala ilal-bayti muta\'akhkhiran', translation: 'He arrived home late.' },
    },
  {
      word: 'وَحِيد', transliteration: 'wahid', meaning: 'alone / only', pos: 'adjective',
      synonym: 'مُنْفَرِد (munfarid)', antonym: null,
      example: { arabic: 'يَعِيشُ وَحِيدًا فِي شُقَّتِهِ', transliteration: 'Ya\'ishu wahidan fi shuqqatih', translation: 'He lives alone in his apartment.' },
    },
  {
      word: 'وَعَدَ', transliteration: 'wa\'ada', meaning: 'he promised', pos: 'verb',
      synonym: null, antonym: 'أَخْلَفَ (broke a promise)',
      example: { arabic: 'وَعَدَ صَدِيقَهُ بِالمُسَاعَدَة', transliteration: 'Wa\'ada sadiqahu bil-musa\'adah', translation: 'He promised his friend help.' },
    },
  {
      word: 'وَرْدَة', transliteration: 'wardah', meaning: 'rose', pos: 'noun',
      synonym: 'زَهْرَة (zahrah)', antonym: null,
      example: { arabic: 'أَهْدَاهَا وَرْدَةً حَمْرَاء', transliteration: 'Ahdaha wardatan hamra\'', translation: 'He gave her a red rose.' },
    },
  {
      word: 'وَطَن', transliteration: 'watan', meaning: 'homeland', pos: 'noun',
      synonym: 'بَلَد (balad)', antonym: null,
      example: { arabic: 'حُبُّ الوَطَنِ مِنَ الإِيمَان', transliteration: 'Hubbul-watani minal-iman', translation: 'Love of the homeland is part of faith.' },
    },
  {
      word: 'وَضَعَ', transliteration: 'wada\'a', meaning: 'he placed / put', pos: 'verb',
      synonym: null, antonym: 'رَفَعَ (removed/lifted)',
      example: { arabic: 'وَضَعَ الكِتَابَ عَلَى الرَّفّ', transliteration: 'Wada\'al-kitaba \'alar-raff', translation: 'He placed the book on the shelf.' },
    },
  {
      word: 'وَعْي', transliteration: 'wa\'y', meaning: 'awareness / consciousness', pos: 'noun',
      synonym: 'إِدْرَاك (idrak)', antonym: null,
      example: { arabic: 'يَجِبُ نَشْرُ الوَعْيِ الصِّحِّيّ', transliteration: 'Yajibu nashrul-wa\'yis-sihhiyy', translation: 'Health awareness must be spread.' },
    },
  {
      word: 'وَحْدَة', transliteration: 'wahdah', meaning: 'loneliness / unity', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'شَعَرَ بِالوَحْدَةِ بَعْدَ سَفَرِ أَصْدِقَائِه', transliteration: 'Sha\'ara bil-wahdati ba\'da safari asdiqa\'ih', translation: 'He felt loneliness after his friends traveled.' },
    },
  {
      word: 'وَقَفَ', transliteration: 'waqafa', meaning: 'he stood', pos: 'verb',
      synonym: null, antonym: 'جَلَسَ (sat)',
      example: { arabic: 'وَقَفَ فِي الطَّابُورِ يَنْتَظِرُ دَوْرَهُ', transliteration: 'Waqafa fit-taburi yantaziru dawrah', translation: 'He stood in line waiting for his turn.' },
    },
  {
      word: 'وَلِيمَة', transliteration: 'walimah', meaning: 'feast / banquet', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَقَامَ وَلِيمَةً بِمُنَاسَبَةِ زَوَاجِهِ', transliteration: 'Aqama walimatan bimunasabati zawajih', translation: 'He held a feast for his wedding.' },
    },
  {
      word: 'وَاجِب', transliteration: 'wajib', meaning: 'duty / homework', pos: 'noun / adjective',
      synonym: null, antonym: null,
      example: { arabic: 'أَنْهَى وَاجِبَهُ المَدْرَسِيَّ قَبْلَ النَّوْم', transliteration: 'Anha wajibahul-madrasiyya qablan-nawm', translation: 'He finished his homework before sleeping.' },
    },
  {
      word: 'وَحْش', transliteration: 'wahsh', meaning: 'wild beast', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'رَأَيْنَا وَحْشًا فِي الغَابَة', transliteration: 'Ra\'ayna wahshan fil-ghabah', translation: 'We saw a wild beast in the forest.' },
    },
  {
      word: 'وَزْن', transliteration: 'wazn', meaning: 'weight', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'وَزْنُهُ زَادَ بَعْدَ العِيد', transliteration: 'Waznuhu zada ba\'dal-\'id', translation: 'His weight increased after Eid.' },
    },
  {
      word: 'وَفِيّ', transliteration: 'wafiyy', meaning: 'faithful / loyal', pos: 'adjective',
      synonym: 'مُخْلِص (mukhlis)', antonym: 'خَائِن (traitorous)',
      example: { arabic: 'كَانَ صَدِيقًا وَفِيًّا طَوَالَ حَيَاتِهِ', transliteration: 'Kana sadiqan wafiyyan tiwala hayatih', translation: 'He was a loyal friend throughout his life.' },
    },
  {
    word: 'وَادٍ', transliteration: 'wadin', meaning: 'valley', pos: 'noun',
    synonym: null, antonym: 'جَبَل (mountain)',
    example: { arabic: 'يَجْرِي النَّهْرُ عَبْرَ الوَادِي', transliteration: 'Yajrin-nahru \'abral-wadi', translation: 'The river flows through the valley.' },
  },
  {
    word: 'وَاجَهَ', transliteration: 'wajaha', meaning: 'he confronted / faced', pos: 'verb',
    synonym: null, antonym: 'تَجَنَّبَ (avoided)',
    example: { arabic: 'وَاجَهَ المُشْكِلَةَ بِشَجَاعَة', transliteration: 'Wajahal-mushkilata bishaja\'ah', translation: 'He faced the problem with courage.' },
  },
  {
    word: 'وِسَادَة', transliteration: 'wisadah', meaning: 'pillow', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَضَعَ رَأْسَهُ عَلَى الوِسَادَة', transliteration: 'Wada\'a ra\'sahu \'alal-wisadah', translation: 'He put his head on the pillow.' },
  },
  {
    word: 'وَسَط', transliteration: 'wasat', meaning: 'middle', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَقَفَ فِي وَسَطِ الغُرْفَة', transliteration: 'Waqafa fi wasatil-ghurfah', translation: 'He stood in the middle of the room.' },
  },
  {
    word: 'وَسِيلَة', transliteration: 'wasilah', meaning: 'means / method', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِسْتَخْدَمَ كُلَّ وَسِيلَةٍ مُمْكِنَةٍ لِلنَّجَاح', transliteration: 'Istakhdama kulla wasilatin mumkinatin lin-najah', translation: 'He used every possible means to succeed.' },
  },
  {
    word: 'وَشَى', transliteration: 'washa', meaning: 'he informed against / betrayed a secret', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'وَشَى بِصَدِيقِهِ عِنْدَ المُدِير', transliteration: 'Washa bisadiqihi \'indal-mudir', translation: 'He informed on his friend to the manager.' },
  },
  {
    word: 'وَصْف', transliteration: 'wasf', meaning: 'description', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'قَدَّمَ وَصْفًا دَقِيقًا لِلْحَادِثَة', transliteration: 'Qaddama wasfan daqiqan lil-hadithah', translation: 'He gave a precise description of the incident.' },
  },
  {
    word: 'وَظِيفَة', transliteration: 'wazifah', meaning: 'job / function', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'حَصَلَ عَلَى وَظِيفَةٍ جَدِيدَةٍ فِي الشَّرِكَة', transliteration: 'Hasala \'ala wazifatin jadidatin fish-sharikah', translation: 'He got a new job at the company.' },
  },
  {
    word: 'وَقَاحَة', transliteration: 'waqahah', meaning: 'rudeness / impudence', pos: 'noun',
    synonym: null, antonym: 'أَدَب (politeness)',
    example: { arabic: 'رَدَّ عَلَيْهِ بِوَقَاحَةٍ لَمْ يَتَوَقَّعْهَا', transliteration: 'Radda \'alayhi biwaqahatin lam yatawaqqa\'ha', translation: 'He responded to him with rudeness he hadn\'t expected.' },
  },
  {
    word: 'وَلِيّ', transliteration: 'waliyy', meaning: 'guardian', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَقَّعَ وَلِيُّ أَمْرِ الطَّالِبِ عَلَى الِاسْتِمَارَة', transliteration: 'Waqqa\'a waliyyu amrit-talibi \'alal-istimarah', translation: 'The student\'s guardian signed the form.' },
  },
  {
    word: 'وَاعِد', transliteration: 'wa\'id', meaning: 'promising', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'هٰذَا الطَّالِبُ وَاعِدٌ وَمُجْتَهِد', transliteration: 'Hadhat-talibu wa\'idun wa mujtahid', translation: 'This student is promising and hardworking.' },
  },
  {
    word: 'وَاقِع', transliteration: 'waqi\'', meaning: 'reality', pos: 'noun',
    synonym: null, antonym: 'خَيَال (imagination)',
    example: { arabic: 'يَجِبُ أَنْ نَتَعَامَلَ مَعَ الوَاقِع', transliteration: 'Yajibu an nata\'amala ma\'al-waqi\'', translation: 'We must deal with reality.' },
  },
  {
    word: 'وَاقِعِيّ', transliteration: 'waqi\'iyy', meaning: 'realistic', pos: 'adjective',
    synonym: null, antonym: 'خَيَالِيّ (unrealistic)',
    example: { arabic: 'ضَعْ أَهْدَافًا وَاقِعِيَّةً لِنَفْسِك', transliteration: 'Da\' ahdafan waqi\'iyyatan linafsik', translation: 'Set realistic goals for yourself.' },
  },
  {
    word: 'وَتَر', transliteration: 'watar', meaning: 'string (of an instrument) / tendon', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِنْقَطَعَ وَتَرُ العُودِ فَجْأَة', transliteration: 'Inqata\'a watarul-\'udi faj\'ah', translation: 'The string of the oud suddenly snapped.' },
  },
  {
    word: 'وَثِيقَة', transliteration: 'wathiqah', meaning: 'document', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'وَقَّعَ عَلَى الوَثِيقَةِ الرَّسْمِيَّة', transliteration: 'Waqqa\'a \'alal-wathiqatir-rasmiyyah', translation: 'He signed the official document.' },
  },
  {
    word: 'وَثَبَ', transliteration: 'wathaba', meaning: 'he jumped / leaped', pos: 'verb',
    synonym: 'قَفَزَ (qafaza)', antonym: null,
    example: { arabic: 'وَثَبَ فَوْقَ الحَاجِزِ بِرَشَاقَة', transliteration: 'Wathaba fawqal-hajizi birashaqah', translation: 'He leaped over the barrier gracefully.' },
  },
  {
    word: 'وَجْبَة', transliteration: 'wajbah', meaning: 'meal', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَنَاوَلَ وَجْبَةً خَفِيفَةً قَبْلَ النَّوْم', transliteration: 'Tanawala wajbatan khafifatan qablan-nawm', translation: 'He had a light meal before sleeping.' },
  },
  {
    word: 'وَجْه', transliteration: 'wajh', meaning: 'face', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِبْتَسَمَ وَجْهُهُ عِنْدَ رُؤْيَةِ ابْنَتِه', transliteration: 'Ibtasama wajhuhu \'inda ru\'yati ibnatih', translation: 'His face smiled upon seeing his daughter.' },
  },
  {
    word: 'وَحِيدَة', transliteration: 'wahidah', meaning: 'alone / only (feminine)', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'هِيَ ابْنَتُهُ الوَحِيدَة', transliteration: 'Hiya ibnatuhul-wahidah', translation: 'She is his only daughter.' },
  },
  {
    word: 'وَخْز', transliteration: 'wakhz', meaning: 'a prick / sting', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'شَعَرَ بِوَخْزٍ خَفِيفٍ عِنْدَ أَخْذِ العَيِّنَة', transliteration: 'Sha\'ara biwakhzin khafifin \'inda akhdhil-\'ayyinah', translation: 'He felt a slight prick when the sample was taken.' },
  },
  {
    word: 'وَدَّعَ', transliteration: 'wadda\'a', meaning: 'he bid farewell', pos: 'verb',
    synonym: null, antonym: 'اِسْتَقْبَلَ (welcomed)',
    example: { arabic: 'وَدَّعَ أَصْدِقَاءَهُ قَبْلَ السَّفَر', transliteration: 'Wadda\'a asdiqa\'ahu qablas-safar', translation: 'He bid his friends farewell before traveling.' },
  },
  {
    word: 'وَدَاعَة', transliteration: 'wada\'ah', meaning: 'gentleness / meekness', pos: 'noun',
    synonym: null, antonym: 'شَرَاسَة (fierceness)',
    example: { arabic: 'عُرِفَتْ بِوَدَاعَتِهَا وَحُسْنِ خُلُقِهَا', transliteration: '\'Urifat biwada\'atiha wa husni khuluqiha', translation: 'She was known for her gentleness and good character.' },
  },
  {
    word: 'وَرَث', transliteration: 'waratha', meaning: 'he inherited', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'وَرِثَ المَتْجَرَ عَنْ وَالِدِه', transliteration: 'Waritha al-matjara \'an walidih', translation: 'He inherited the store from his father.' },
  },
  {
    word: 'وِرَاثَة', transliteration: 'wirathah', meaning: 'inheritance / heredity', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِخْتَلَفَتِ الأُسْرَةُ حَوْلَ تَقْسِيمِ الوِرَاثَة', transliteration: 'Ikhtalafatil-usratu hawla taqsimil-wirathah', translation: 'The family disagreed about dividing the inheritance.' },
  },
  {
    word: 'وَرَع', transliteration: 'wara\'', meaning: 'piety / scrupulousness', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِبْتَعَدَ عَنِ الشُّبُهَاتِ وَرَعًا', transliteration: 'Ibta\'ada \'anish-shubuhati wara\'an', translation: 'He avoided doubtful matters out of piety.' },
  },
  {
    word: 'وَزِير', transliteration: 'wazir', meaning: 'minister (government position)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِلْتَقَى وَزِيرُ التَّعْلِيمِ بِالطُّلَّاب', transliteration: 'Iltaqa waziruta-ta\'limi bit-tullab', translation: 'The Minister of Education met with the students.' },
  },
  {
    word: 'وَسَادَة', transliteration: 'wisadah (variant)', meaning: 'pillow / cushion (variant of وِسَادَة)', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'جَلَسَ عَلَى وَسَادَةٍ نَاعِمَة', transliteration: 'Jalasa \'ala wisadatin na\'imah', translation: 'He sat on a soft cushion.' },
  },
  {
    word: 'وَسِخ', transliteration: 'wasikh', meaning: 'dirty', pos: 'adjective',
    synonym: null, antonym: 'نَظِيف (clean)',
    example: { arabic: 'غَسَلَ يَدَيْهِ الوَسِخَتَيْن', transliteration: 'Ghasala yadayhil-wasikhatayn', translation: 'He washed his dirty hands.' },
  },
  {
    word: 'وَصِيَّة', transliteration: 'wasiyyah', meaning: 'will / testament / advice', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'كَتَبَ وَصِيَّتَهُ قَبْلَ السَّفَرِ الطَّوِيل', transliteration: 'Kataba wasiyyatahu qablas-safarit-tawil', translation: 'He wrote his will before the long journey.' },
  },
  {
    word: 'وَفْرَة', transliteration: 'wafrah', meaning: 'abundance', pos: 'noun',
    synonym: null, antonym: 'نُدْرَة (scarcity)',
    example: { arabic: 'شَهِدَتِ السُّوقُ وَفْرَةً فِي الخُضَار', transliteration: 'Shahidatis-suqu wafratan fil-khudar', translation: 'The market witnessed an abundance of vegetables.' },
  },
  ],

  'ي': [
  {
      word: 'يَد', transliteration: 'yad', meaning: 'hand', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'غَسَلَ يَدَيْهِ قَبْلَ الأَكْل', transliteration: 'Ghasala yadayhi qablal-akl', translation: 'He washed his hands before eating.' },
    },
  {
      word: 'يَوْم', transliteration: 'yawm', meaning: 'day', pos: 'noun',
      synonym: null, antonym: 'لَيْلَة (night)',
      example: { arabic: 'كَانَ يَوْمًا مُمْتِعًا وَمُفِيدًا', transliteration: 'Kana yawman mumti\'an wa mufidan', translation: 'It was an enjoyable and beneficial day.' },
    },
  {
      word: 'يَسِير', transliteration: 'yasir', meaning: 'easy / simple', pos: 'adjective',
      synonym: 'سَهْل (sahl)', antonym: 'عَسِير (difficult)',
      example: { arabic: 'الأَمْرُ يَسِيرٌ إِذَا صَدَقَتِ النِّيَّة', transliteration: 'Al-amru yasirun idha sadaqatin-niyyah', translation: 'The matter is easy if the intention is sincere.' },
    },
  {
      word: 'يَتِيم', transliteration: 'yatim', meaning: 'orphan', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'أَمَرَ الإِسْلَامُ بِكَفَالَةِ اليَتِيم', transliteration: 'Amaral-islamu bikafalatil-yatim', translation: 'Islam commands taking care of the orphan.' },
    },
  {
      word: 'يَقَظَة', transliteration: 'yaqazah', meaning: 'wakefulness / alertness', pos: 'noun',
      synonym: 'اِنْتِبَاه (intibah)', antonym: 'غَفْلَة (heedlessness)',
      example: { arabic: 'يَتَطَلَّبُ القِيَادَةُ يَقَظَةً تَامَّة', transliteration: 'Yatatallabul-qiyadatu yaqazatan tammah', translation: 'Driving requires complete alertness.' },
    },
  {
      word: 'يَابِس', transliteration: 'yabis', meaning: 'dry / withered', pos: 'adjective',
      synonym: 'جَافّ (jaff)', antonym: 'طَرِيّ (fresh/moist)',
      example: { arabic: 'سَقَطَتِ الأَوْرَاقُ اليَابِسَةُ عَنِ الشَّجَرَة', transliteration: 'Saqatatil-awraqul-yabisatu \'anish-shajarah', translation: 'The dry leaves fell from the tree.' },
    },
  {
      word: 'يَسَّرَ', transliteration: 'yassara', meaning: 'he made easy / facilitated', pos: 'verb',
      synonym: null, antonym: 'عَسَّرَ (made difficult)',
      example: { arabic: 'يَسَّرَ اللَّهُ لَهُ أُمُورَهُ', transliteration: 'Yassaraallahu lahu umurah', translation: 'Allah made his affairs easy for him.' },
    },
  {
      word: 'يَقِين', transliteration: 'yaqin', meaning: 'certainty', pos: 'noun',
      synonym: null, antonym: 'شَكّ (doubt)',
      example: { arabic: 'آمَنَ بِاللَّهِ يَقِينًا لَا شَكَّ فِيه', transliteration: 'Amana billahi yaqinan la shakka fih', translation: 'He believed in Allah with certainty, no doubt in it.' },
    },
  {
      word: 'يَنْبُوع', transliteration: 'yanbu\'', meaning: 'spring / fountainhead', pos: 'noun',
      synonym: 'عَيْن (\'ayn)', antonym: null,
      example: { arabic: 'تَدَفَّقَ المَاءُ مِنَ اليَنْبُوعِ الصَّافِي', transliteration: 'Tadaffaqal-ma\'u minal-yanbu\'is-safi', translation: 'The water flowed from the clear spring.' },
    },
  {
      word: 'يَمِين', transliteration: 'yamin', meaning: 'right (direction) / oath', pos: 'noun',
      synonym: null, antonym: 'يَسَار / شِمَال (left)',
      example: { arabic: 'اِنْعَطِفْ يَمِينًا عِنْدَ الإِشَارَة', transliteration: 'In\'atif yaminan \'indal-isharah', translation: 'Turn right at the traffic light.' },
    },
  {
      word: 'يَسَار', transliteration: 'yasar', meaning: 'left (direction)', pos: 'noun',
      synonym: 'شِمَال (shimal)', antonym: 'يَمِين (right)',
      example: { arabic: 'البَيْتُ عَلَى يَسَارِ الشَّارِع', transliteration: 'Al-baytu \'ala yasarish-shari\'', translation: 'The house is on the left side of the street.' },
    },
  {
      word: 'يَنْمُو', transliteration: 'yanmu', meaning: 'it grows', pos: 'verb',
      synonym: null, antonym: 'يَذْبُل (withers)',
      example: { arabic: 'يَنْمُو النَّبَاتُ بِسُرْعَةٍ فِي الرَّبِيع', transliteration: 'Yanmun-nabatu bisur\'atin fir-rabi\'', translation: 'The plant grows quickly in spring.' },
    },
  {
      word: 'يُتْم', transliteration: 'yutm', meaning: 'orphanhood', pos: 'noun',
      synonym: null, antonym: null,
      example: { arabic: 'عَانَى مِنَ اليُتْمِ مُنْذُ صِغَرِهِ', transliteration: '\'Ana minal-yutmi mundhu sigharih', translation: 'He suffered from orphanhood since childhood.' },
    },
  {
      word: 'يَافِع', transliteration: 'yafi\'', meaning: 'adolescent / youthful', pos: 'adjective',
      synonym: 'مُرَاهِق (murahiq)', antonym: null,
      example: { arabic: 'كَانَ يَافِعًا عِنْدَمَا بَدَأَ العَمَل', transliteration: 'Kana yafi\'an \'indama bada\'al-\'amal', translation: 'He was an adolescent when he started working.' },
    },
  {
      word: 'يَقَظ', transliteration: 'yaqiz', meaning: 'vigilant / alert', pos: 'adjective',
      synonym: 'مُنْتَبِه (muntabih)', antonym: 'غَافِل (heedless)',
      example: { arabic: 'كَانَ الحَارِسُ يَقِظًا طَوَالَ اللَّيْل', transliteration: 'Kanal-harisu yaqizan tiwalal-layl', translation: 'The guard was vigilant throughout the night.' },
    },
  {
      word: 'يُسْر', transliteration: 'yusr', meaning: 'ease', pos: 'noun',
      synonym: null, antonym: 'عُسْر (hardship)',
      example: { arabic: 'إِنَّ مَعَ العُسْرِ يُسْرًا', transliteration: 'Inna ma\'al-\'usri yusran', translation: 'Indeed, with hardship comes ease.' },
    },
  {
      word: 'يَنْبَغِي', transliteration: 'yanbaghi', meaning: 'it is proper / should', pos: 'verb (impersonal)',
      synonym: null, antonym: null,
      example: { arabic: 'يَنْبَغِي أَنْ نَحْتَرِمَ الكِبَار', transliteration: 'Yanbaghi an nahtaramal-kibar', translation: 'One should respect elders.' },
    },
  {
      word: 'يَقِظًا', transliteration: 'yaqizan', meaning: 'awake / alert (state)', pos: 'adjective',
      synonym: null, antonym: null,
      example: { arabic: 'ظَلَّ يَقِظًا حَتَّى وَصَلَ ضَيْفُه', transliteration: 'Zalla yaqizan hatta wasala dayfuh', translation: 'He stayed awake until his guest arrived.' },
    },
  {
      word: 'يَمِّم', transliteration: 'yammama', meaning: 'he directed himself towards / performed tayammum', pos: 'verb',
      synonym: null, antonym: null,
      example: { arabic: 'تَيَمَّمَ لِعَدَمِ وُجُودِ المَاء', transliteration: 'Tayammama li\'adami wujudil-ma\'', translation: 'He performed tayammum due to the absence of water.' },
    },
  {
      word: 'يَقِّن', transliteration: 'yaqqana', meaning: 'he made certain / confirmed', pos: 'verb',
      synonym: 'تَأَكَّدَ (ta\'akkada)', antonym: null,
      example: { arabic: 'يَقَّنَ مِنْ صِحَّةِ المَعْلُومَة قَبْلَ نَشْرِهَا', transliteration: 'Yaqqana min sihhatil-ma\'lumati qabla nashriha', translation: 'He confirmed the accuracy of the information before publishing it.' },
    },
  {
    word: 'يَافِطَة', transliteration: 'yafitah', meaning: 'sign / billboard', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'عَلَّقَ يَافِطَةً أَمَامَ مَحَلِّه', transliteration: 'Allaqa yafitatan amama mahallih', translation: 'He hung a sign in front of his shop.' },
  },
  {
    word: 'يَاقُوت', transliteration: 'yaqut', meaning: 'ruby / sapphire', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'اِشْتَرَى خَاتَمًا مُرَصَّعًا بِاليَاقُوت', transliteration: 'Ishtara khataman murassa\'an bil-yaqut', translation: 'He bought a ring studded with rubies.' },
  },
  {
    word: 'يَتَامَى', transliteration: 'yatama', meaning: 'orphans', pos: 'noun (plural)',
    synonym: null, antonym: null,
    example: { arabic: 'رَعَتِ الجَمْعِيَّةُ اليَتَامَى وَكَفَلَتْهُم', transliteration: 'Ra\'atil-jam\'iyyatul-yatama wa kafalathum', translation: 'The association cared for and sponsored the orphans.' },
  },
  {
    word: 'يَخُوض', transliteration: 'yakhud', meaning: 'he wades into / engages in', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَخُوضُ نِقَاشًا صَعْبًا حَوْلَ المَشْرُوع', transliteration: 'Yakhudu niqashan sa\'ban hawlal-mashru\'', translation: 'He is engaging in a difficult discussion about the project.' },
  },
  {
    word: 'يَرَقَة', transliteration: 'yaraqah', meaning: 'larva / caterpillar', pos: 'noun',
    synonym: null, antonym: null,
    example: { arabic: 'تَتَحَوَّلُ اليَرَقَةُ إِلَى فَرَاشَة', transliteration: 'Tatahawwalul-yaraqatu ila farashah', translation: 'The caterpillar transforms into a butterfly.' },
  },
  {
    word: 'يَقَع', transliteration: 'yaqa\'u', meaning: 'it occurs / is located', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَقَعُ البَيْتُ بِالقُرْبِ مِنَ المَسْجِد', transliteration: 'Yaqa\'ul-baytu bil-qurbi minal-masjid', translation: 'The house is located near the mosque.' },
  },
  {
    word: 'يَوْمِيّ', transliteration: 'yawmiyy', meaning: 'daily', pos: 'adjective',
    synonym: null, antonym: null,
    example: { arabic: 'يَقْرَأُ جُزْءًا مِنَ القُرْآنِ يَوْمِيًّا', transliteration: 'Yaqra\'u juz\'an minal-qur\'ani yawmiyyan', translation: 'He reads a portion of the Qur\'an daily.' },
  },
  {
    word: 'يُمْن', transliteration: 'yumn', meaning: 'blessing / good fortune', pos: 'noun',
    synonym: null, antonym: 'نَحْس (misfortune)',
    example: { arabic: 'قَدِمَ فِي وَقْتِ يُمْنٍ وَبَرَكَة', transliteration: 'Qadima fi waqti yumnin wa barakah', translation: 'He arrived at a time of blessing and fortune.' },
  },
  {
    word: 'يَنْتَظِر', transliteration: 'yantazir', meaning: 'he waits', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَنْتَظِرُ دَوْرَهُ بِصَبْر', transliteration: 'Yantaziru dawrahu bisabr', translation: 'He waits his turn patiently.' },
  },
  {
    word: 'يَبْدُو', transliteration: 'yabdu', meaning: 'it appears / seems', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَبْدُو أَنَّ الطَّقْسَ سَيَتَحَسَّنُ غَدًا', transliteration: 'Yabdu annat-taqsa sayatahassanu ghadan', translation: 'It seems the weather will improve tomorrow.' },
  },
  {
    word: 'يَابِسَة', transliteration: 'yabisah', meaning: 'dry land / mainland', pos: 'noun',
    synonym: null, antonym: 'بَحْر (sea)',
    example: { arabic: 'وَصَلَ البَحَّارَةُ إِلَى اليَابِسَةِ سَالِمِين', transliteration: 'Wasalal-bahharatu ilal-yabisati salimin', translation: 'The sailors reached dry land safely.' },
  },
  {
    word: 'يَحْصُد', transliteration: 'yahsud', meaning: 'he harvests', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْصُدُ الفَلَّاحُ القَمْحَ فِي الصَّيْف', transliteration: 'Yahsudul-fallahul-qamha fis-sayf', translation: 'The farmer harvests the wheat in summer.' },
  },
  {
    word: 'يَحْتَجّ', transliteration: 'yahtajj', meaning: 'he protests / objects', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْتَجُّ العُمَّالُ عَلَى ظُرُوفِ العَمَل', transliteration: 'Yahtajjul-\'ummalu \'ala zurufil-\'amal', translation: 'The workers protest against the working conditions.' },
  },
  {
    word: 'يَحْتَفِل', transliteration: 'yahtafil', meaning: 'he celebrates', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَحْتَفِلُ الشَّعْبُ بِعِيدِ الِاسْتِقْلَال', transliteration: 'Yahtafilush-sha\'bu bi\'idil-istiqlal', translation: 'The people celebrate Independence Day.' },
  },
  {
    word: 'يَخْتَبِر', transliteration: 'yakhtabir', meaning: 'he tests / experiments', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَخْتَبِرُ العَالِمُ فَرَضِيَّتَهُ الجَدِيدَة', transliteration: 'Yakhtabirul-\'alimu faradiyyatahul-jadidah', translation: 'The scientist is testing his new hypothesis.' },
  },
  {
    word: 'يَدَّخِر', transliteration: 'yaddakhir', meaning: 'he saves (money) / stores up', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَدَّخِرُ جُزْءًا مِنْ رَاتِبِهِ كُلَّ شَهْر', transliteration: 'Yaddakhiru juz\'an min ratibihi kulla shahr', translation: 'He saves part of his salary every month.' },
  },
  {
    word: 'يَذْكُر', transliteration: 'yadhkur', meaning: 'he mentions / remembers', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَذْكُرُ فَضْلَ مُعَلِّمِهِ دَائِمًا', transliteration: 'Yadhkuru fadla mu\'allimihi da\'iman', translation: 'He always mentions his teacher\'s favor.' },
  },
  {
    word: 'يَذُوب', transliteration: 'yadhub', meaning: 'it melts', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَذُوبُ الجَلِيدُ عِنْدَ ارْتِفَاعِ الحَرَارَة', transliteration: 'Yadhubul-jalidu \'inda irtifa\'il-hararah', translation: 'Ice melts when the temperature rises.' },
  },
  {
    word: 'يُرَاجِع', transliteration: 'yuraji\'', meaning: 'he reviews', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يُرَاجِعُ دُرُوسَهُ قَبْلَ كُلِّ اِمْتِحَان', transliteration: 'Yuraji\'u durusahu qabla kulli imtihan', translation: 'He reviews his lessons before every exam.' },
  },
  {
    word: 'يُرَبِّي', transliteration: 'yurabbi', meaning: 'he raises / brings up', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يُرَبِّي أَبْنَاءَهُ عَلَى الصِّدْقِ وَالأَمَانَة', transliteration: 'Yurabbi abna\'ahu \'alas-sidqi wal-amanah', translation: 'He raises his children upon honesty and trustworthiness.' },
  },
  {
    word: 'يَرْتَجِف', transliteration: 'yartajif', meaning: 'he shivers / trembles', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَرْتَجِفُ مِنَ البَرْدِ الشَّدِيد', transliteration: 'Yartajifu minal-bardish-shadid', translation: 'He shivers from the intense cold.' },
  },
  {
    word: 'يَزْدَهِر', transliteration: 'yazdahir', meaning: 'it flourishes / prospers', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَزْدَهِرُ الِاقْتِصَادُ فِي فَتَرَاتِ الِاسْتِقْرَار', transliteration: 'Yazdahirul-iqtisadu fi fataratil-istiqrar', translation: 'The economy flourishes during periods of stability.' },
  },
  {
    word: 'يَزُور', transliteration: 'yazur', meaning: 'he visits', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَزُورُ جَدَّتَهُ كُلَّ أُسْبُوع', transliteration: 'Yazuru jaddatahu kulla usbu\'', translation: 'He visits his grandmother every week.' },
  },
  {
    word: 'يَسْتَغْرِب', transliteration: 'yastaghrib', meaning: 'he finds strange / is surprised', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَسْتَغْرِبُ مِنْ تَصَرُّفَاتِهِ الغَرِيبَة', transliteration: 'Yastaghribu min tasarrufatihil-gharibah', translation: 'He finds his strange behaviors puzzling.' },
  },
  {
    word: 'يَسْتَقْبِل', transliteration: 'yastaqbil', meaning: 'he receives / welcomes', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَسْتَقْبِلُ ضُيُوفَهُ بِحَفَاوَة', transliteration: 'Yastaqbilu duyufahu bihafawah', translation: 'He welcomes his guests warmly.' },
  },
  {
    word: 'يَسْتَمِرّ', transliteration: 'yastamirr', meaning: 'he continues', pos: 'verb',
    synonym: null, antonym: 'يَتَوَقَّف (he stops)',
    example: { arabic: 'يَسْتَمِرُّ فِي العَمَلِ رَغْمَ التَّعَب', transliteration: 'Yastamirru fil-\'amali raghmat-ta\'ab', translation: 'He continues working despite the fatigue.' },
  },
  {
    word: 'يَشْتَاق', transliteration: 'yashtaq', meaning: 'he longs / yearns for', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَشْتَاقُ إِلَى وَطَنِهِ كَثِيرًا', transliteration: 'Yashtaqu ila watanihi kathiran', translation: 'He longs for his homeland very much.' },
  },
  {
    word: 'يَشْكُو', transliteration: 'yashku', meaning: 'he complains', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَشْكُو مِنْ أَلَمٍ فِي ظَهْرِه', transliteration: 'Yashku min alamin fi zahrih', translation: 'He complains of a pain in his back.' },
  },
  {
    word: 'يَصْطَحِب', transliteration: 'yastahib', meaning: 'he takes along / accompanies', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَصْطَحِبُ أَبْنَاءَهُ فِي رِحْلَةِ الصَّيْد', transliteration: 'Yastahibu abna\'ahu fi rihlatis-sayd', translation: 'He takes his children along on the fishing trip.' },
  },
  {
    word: 'يَعْتَذِر', transliteration: 'ya\'tadhir', meaning: 'he apologizes', pos: 'verb',
    synonym: null, antonym: null,
    example: { arabic: 'يَعْتَذِرُ دَائِمًا عِنْدَمَا يُخْطِئ', transliteration: 'Ya\'tadhiru da\'iman \'indama yukhti\'', translation: 'He always apologizes when he makes a mistake.' },
  },
  ],
}