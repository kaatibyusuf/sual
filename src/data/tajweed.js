export const TAJWEED_SECTIONS = [
  {
    id: 'tj1',
    title: 'Introduction to Tajweed',
    arabicTitle: 'مُقَدِّمَة فِي عِلْمِ التَّجْوِيد',
    icon: '📖',
    overview: 'Tajweed (تَجْوِيد) comes from the root ج-و-د meaning excellence and beauty. Technically it is the science of reciting the Quran in the manner in which it was revealed to the Prophet Muhammad, upon him be peace and blessings, and in which he recited it to the Companions. The obligation of Tajweed is established by the Quranic command: وَرَتِّلِ القُرْآنَ تَرْتِيلًا — "And recite the Quran with measured recitation." (Quran 73:4)',
    rules: [
      {
        id: 'tj1r1',
        name: 'Definition and Obligation',
        arabic: 'تَعْرِيفُ التَّجْوِيدِ وَحُكْمُهُ',
        level: 'foundation',
        explanation: `Tajweed is defined by the scholars as giving every letter its right (haqq) and its due (mustahaqq).

- The haqq of a letter refers to its inherent characteristics — the sifat that never leave it (al-sifat al-lazimah).
- The mustahaqq refers to the characteristics that arise from context — how adjacent letters affect each other (al-sifat al-aridah).

The ruling on Tajweed has two dimensions:

1. Ilman (knowledge) — learning Tajweed as a science is fard kifayah (a collective obligation): if sufficient scholars in the community master it, the obligation is fulfilled for all.
2. Amalan (practice) — applying Tajweed in the recitation of the Quran is fard ayn (an individual obligation) for every Muslim who recites.

Imam Ibn al-Jazari (d. 833 AH) — the greatest scholar of Tajweed and Qiraat in Islamic history — captured this in his famous poem:

"والأخذُ بالتجويدِ حتمٌ لازمُ — من لم يُجوِّد القرآنَ آثم"
"Taking to Tajweed is a binding obligation — whoever does not beautify the Quran is sinning."`,
        examples: [],
        source: 'Al-Muqaddimah al-Jazariyyah, Ibn al-Jazari; Al-Tibyan fi Adab Hamalat al-Quran, al-Nawawi',
      },
      {
        id: 'tj1r2',
        name: 'The Articulation Points (Makhaarij al-Huruf)',
        arabic: 'مَخَارِجُ الحُرُوف',
        level: 'foundation',
        explanation: `The makhraj (مَخْرَج — plural makhaarij) is the specific point in the vocal tract from which a letter is produced.

Scholars have identified seventeen specific articulation points organized within five general areas (jawami):

1. Al-Jawf (الجَوْف — the oral/pharyngeal cavity): produces the three long vowel letters — alif (ا), waw (و), and ya (ي) when extended. These are called al-huruf al-hawaiyyah (the air letters) because they emerge from the open cavity with no specific point of contact.

2. Al-Halq (الحَلْق — the throat): has three articulation points producing six letters —
   - Deep throat: hamzah (ء) and ha (هـ)
   - Middle throat: ayn (ع) and ha (ح)
   - Upper throat: ghayn (غ) and kha (خ)

3. Al-Lisan (اللِّسَان — the tongue): has ten articulation points producing eighteen letters — the tongue is the most active organ in Arabic speech production.

4. Al-Shafatain (الشَّفَتَيْن — the two lips): produces four letters —
   - Fa (ف): the inner lower lip against the upper teeth
   - Ba (ب), Mim (م), and Waw (و) when not extended: from both lips together

5. Al-Khayshum (الخَيْشُوم — the nasal passage): produces the ghunnah (nasal sound) of mim and nun.`,
        examples: [
          { arabic: 'ء ه', transliteration: 'Hamzah, Ha', note: 'From the deepest part of the throat (aqsa al-halq)' },
          { arabic: 'ع ح', transliteration: 'Ayn, Ha', note: 'From the middle of the throat (wasat al-halq)' },
          { arabic: 'غ خ', transliteration: 'Ghayn, Kha', note: 'From the upper throat (adna al-halq)' },
          { arabic: 'ق', transliteration: 'Qaf', note: 'From the deepest part of the tongue against the upper palate' },
          { arabic: 'ك', transliteration: 'Kaf', note: 'Slightly forward from where Qaf is produced' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari, Abd al-Fattah al-Marsafi',
      },
      {
        id: 'tj1r3',
        name: 'The Characteristics of Letters (Sifaat al-Huruf)',
        arabic: 'صِفَاتُ الحُرُوف',
        level: 'intermediate',
        explanation: `Every Arabic letter has inherent characteristics (sifat lazimah) that define its sound regardless of context. These divide into two broad categories: sifat that come in opposing pairs, and sifat that do not.

**Sifat with opposing pairs (al-sifat dhat al-addad):**

1. Al-Jahr (الجَهْر — voicing) vs. Al-Hams (الهَمْس — breathiness)
   - Jahr: the breath is held back when the letter is produced — the voiced consonants.
   - Hams: the breath flows freely — the unvoiced consonants. The ten hams letters are memorized in: فَحَثَّهُ شَخْصٌ سَكَتَ (fa, ha, tha, ha, sheen, kha, sad, kaf, seen, ta). All other letters are Jahr.

2. Al-Shiddah (الشِّدَّة — plosiveness) vs. Al-Rakhawah (الرَّخَاوَة — continuity)
   - Shiddah: airflow stops completely when the letter is produced — the plosives, memorized in: أَجِدُ قَطٍ بَكَتْ (hamzah, jim, dal, qaf, ta, ba, kaf, ta).
   - Rakhawah: airflow continues through the letter.
   - Bayniyyah (intermediate): letters between the two extremes, memorized in: عمر لن (ayn, mim, ra, lam, nun).

3. Al-Istila (الاِسْتِعْلَاء — elevation) vs. Al-Istifal (الاِسْتِفَال — lowering)
   - Istila: the back of the tongue rises toward the upper palate, producing a heavy (mufakhkham) quality. Seven letters: خُصَّ ضَغْطٍ قِظْ.
   - Istifal: all other letters are light (muraqqaq).

4. Al-Itbaq (الإِطْبَاق — contact) vs. Al-Infitah (الاِنْفِتَاح — openness)
   - Only four letters carry itbaq: sad (ص), dad (ض), ta (ط), and zha (ظ). These produce the strongest heavy sounds in Arabic.

5. Al-Idhlaq (الإِذْلَاق — fluency) vs. Al-Ismat (الإِصْمَات — restraint)
   - Six idhlaq letters flow easily from the tip of the tongue or the lips.

**Sifat without opposing pairs (al-sifat ghair dhat al-addad):**

Qalqalah, Safir, Tafashi, Istitalah, Inhiraf, Takrir, and Lin — each named for a distinct acoustic quality found in specific letters, covered in later sections of this course.`,
        examples: [],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Wafi fi Sharh al-Shatibiyyah',
      },
    ],
  },

  {
    id: 'tj2',
    title: 'Noon Saakinah and Tanween',
    arabicTitle: 'النُّون السَّاكِنَة وَالتَّنْوِين',
    icon: '🔤',
    overview: 'The rules governing Noon Saakinah (نُون سَاكِنَة — nun with sukun) and Tanween (تَنْوِين — double vowel marks producing a final nun sound) are among the most fundamental in Tajweed. These rules cover what happens to the nun sound when it is followed by any of the twenty-eight Arabic letters. There are four possible outcomes: Idgham, Ikhfa, Iqlab, and Izhar.',
    rules: [
      {
        id: 'tj2r1',
        name: 'Al-Izhar al-Halqi (الإِظْهَارُ الحَلْقِي)',
        arabic: 'الإِظْهَار الحَلْقِي',
        level: 'beginner',
        explanation: `Al-Izhar (إِظْهَار — clarity/manifestation) means pronouncing the noon saakinah or tanween clearly and distinctly, without any merging, extra nasalization, or change.

It occurs before the six throat letters (huruf al-halq): hamzah (ء), ha (هـ), ayn (ع), ha (ح), ghayn (غ), and kha (خ) — memorized in the phrase: أَخِي هَاكَ عِلْمًا حَازَهُ غَيْرُ خَاسِرٍ.

The rationale is straightforward: since the throat letters are produced far from where the noon is produced (the tip of the tongue), there is no natural tendency toward assimilation. The tongue simply holds the noon clearly before the voice moves to the throat for the next letter.

Al-Izhar is considered the default rule — clarity of the noon is its original, unmodified state, and the other three rules (Idgham, Iqlab, Ikhfa) are all departures from it under specific conditions.`,
        examples: [
          { arabic: 'مَنْ آمَنَ', transliteration: 'Man amana', note: 'Noon before Hamzah — pronounced clearly' },
          { arabic: 'مِنْ هَادٍ', transliteration: 'Min hadin', note: 'Noon before Ha — pronounced clearly' },
          { arabic: 'مَنْ عَمِلَ', transliteration: 'Man amila', note: 'Noon before Ayn — pronounced clearly' },
          { arabic: 'أَنْحَاءٍ', transliteration: 'Anhain', note: 'Noon before Ha — pronounced clearly' },
          { arabic: 'مِنْ غِلٍّ', transliteration: 'Min ghillin', note: 'Noon before Ghayn — pronounced clearly' },
          { arabic: 'مَنْ خَابَ', transliteration: 'Man khaba', note: 'Noon before Kha — pronounced clearly' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Matn al-Jazariyyah',
      },
      {
        id: 'tj2r2',
        name: 'Al-Idgham (الإِدْغَام)',
        arabic: 'الإِدْغَام',
        level: 'beginner',
        explanation: `Al-Idgham (إِدْغَام — merging/assimilation) means the noon saakinah or tanween merges completely into the following letter, producing a doubled letter with no trace of the noon remaining.

It occurs before six letters, memorized in the word يَرْمُلُونَ (ya, ra, mim, lam, waw, nun), and divides into two types based on whether ghunnah (nasalization) is retained:

1. Idgham bi-Ghunnah (with nasalization) — before ya (ي), nun (ن), mim (م), and waw (و), memorized as يَنْمُو. The noon merges, but the ghunnah of the following letter is held for two counts (harakatain).

2. Idgham bila Ghunnah (without nasalization) — before lam (ل) and ra (ر). The noon merges completely with no nasalization whatsoever — a pure, clean merge.

Critical exception: if the noon saakinah and the following letter occur within the SAME word, Idgham does not apply — the noon is instead pronounced clearly (sometimes called Izhar mutlaq, absolute clarity). This happens in only four words in the entire Quran: دُنْيَا، صِنْوَانٌ، قِنْوَانٌ، بُنْيَانٌ.`,
        examples: [
          { arabic: 'مَنْ يَقُولُ', transliteration: 'May yaqulu', note: 'Noon + Ya — Idgham bi-Ghunnah: the noon merges into ya with nasalization' },
          { arabic: 'مِنْ نِعْمَةٍ', transliteration: 'Min nimatin', note: 'Noon + Nun — Idgham bi-Ghunnah' },
          { arabic: 'مِنْ مَاءٍ', transliteration: 'Mim maain', note: 'Noon + Mim — Idgham bi-Ghunnah' },
          { arabic: 'مِنْ وَلِيٍّ', transliteration: 'Miw waliyyin', note: 'Noon + Waw — Idgham bi-Ghunnah' },
          { arabic: 'مِنْ لَدُنْهُ', transliteration: 'Mil ladunhu', note: 'Noon + Lam — Idgham bila Ghunnah: pure merge, no nasalization' },
          { arabic: 'مِنْ رَبِّهِمْ', transliteration: 'Mir rabbihim', note: 'Noon + Ra — Idgham bila Ghunnah: pure merge, no nasalization' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj2r3',
        name: 'Al-Iqlab (الإِقْلَاب)',
        arabic: 'الإِقْلَاب',
        level: 'beginner',
        explanation: `Al-Iqlab (إِقْلَاب — conversion/substitution) means converting the noon saakinah or tanween into a mim sound before the letter ba (ب), while maintaining the ghunnah (nasalization) for two counts.

This conversion happens because the noon and the ba have very different articulation points — the tongue tip versus both lips — making a direct merger impossible. The mim serves as an intermediate sound: it shares the same articulation point as ba (both lips) while still carrying the nasal quality of the original noon.

In the Uthmanic script, Iqlab is sometimes marked with a small mim written above the noon or tanween to indicate this change.

The full sequence is: noon → mim (held with ghunnah for two counts) → ba.`,
        examples: [
          { arabic: 'أَنْبِئْهُمْ', transliteration: 'Ambi-hum', note: 'Noon before Ba — converted to mim with ghunnah then ba' },
          { arabic: 'مِنْ بَعْدِ', transliteration: 'Mim badi', note: 'Noon before Ba — Iqlab with ghunnah' },
          { arabic: 'سَمِيعٌ بَصِيرٌ', transliteration: 'Samium Basir', note: 'Tanween before Ba — Iqlab' },
          { arabic: 'شَيْءٍ بَدِيعٌ', transliteration: 'Shaim Badi', note: 'Tanween before Ba — Iqlab' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Matn al-Shatibiyyah',
      },
      {
        id: 'tj2r4',
        name: 'Al-Ikhfa al-Haqiqi (الإِخْفَاء الحَقِيقِي)',
        arabic: 'الإِخْفَاء الحَقِيقِي',
        level: 'intermediate',
        explanation: `Al-Ikhfa (إِخْفَاء — concealment) sits between Izhar (clarity) and Idgham (merging): the noon is not pronounced fully clearly, but it is not merged into the following letter either. It is a partial nasalization (ghunnah) held for two counts while the mouth prepares to articulate the following letter.

Ikhfa occurs before fifteen letters: ص، ذ، ث، ك، ج، ش، ق، س، د، ط، ز، ف، ت، ض، ظ — memorized through the opening letters of this famous verse:

صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا — دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمًا

The key feature of Ikhfa is that the point of articulation shifts toward the following letter while the ghunnah is maintained — so the "color" (lawn) of the Ikhfa changes depending on which letter follows: Ikhfa before the emphatic letters (sad, dal, ta, zha) carries a heavier coloring, while Ikhfa before the lighter letters carries a lighter coloring.`,
        examples: [
          { arabic: 'مِنْ صِيَامٍ', transliteration: 'Min siyamin', note: 'Noon before Sad — Ikhfa with heavy coloring' },
          { arabic: 'مِنْ ذَهَبٍ', transliteration: 'Min dhahabin', note: 'Noon before Dhal — Ikhfa' },
          { arabic: 'مَنْ كَفَرَ', transliteration: 'Man kafara', note: 'Noon before Kaf — Ikhfa' },
          { arabic: 'مِنْ جُوعٍ', transliteration: 'Min juin', note: 'Noon before Jim — Ikhfa' },
          { arabic: 'أَنْفُسَكُمْ', transliteration: 'Anfusakum', note: 'Noon before Fa — Ikhfa' },
          { arabic: 'مُنْذُ', transliteration: 'Mundhu', note: 'Noon before Dhal — Ikhfa' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Wafi fi Sharh al-Shatibiyyah',
      },
    ],
  },

  {
    id: 'tj3',
    title: 'Meem Saakinah',
    arabicTitle: 'المِيمُ السَّاكِنَة',
    icon: 'م',
    overview: 'The rules of Meem Saakinah (مِيم سَاكِنَة — mim with sukun) govern what happens to the mim when it is followed by any letter. There are three possible outcomes: Idgham Shafawi, Ikhfa Shafawi, and Izhar Shafawi.',
    rules: [
      {
        id: 'tj3r1',
        name: 'Idgham Shafawi (إِدْغَام شَفَوِي)',
        arabic: 'إِدْغَامٌ شَفَوِيّ',
        level: 'beginner',
        explanation: `Idgham Shafawi (labial merging) occurs when meem saakinah is followed by another mim (م). The two mims merge into one doubled mim with ghunnah held for two counts.

It is called "shafawi" (labial) because it is produced at the lips — the simplest case of Idgham, since two identical letters at the same articulation point merge naturally, producing a doubled mim with clear nasalization.`,
        examples: [
          { arabic: 'لَهُمْ مَا يَشَاءُونَ', transliteration: 'Lahum ma yashaaun', note: 'Mim before Mim — merge into one doubled mim with ghunnah' },
          { arabic: 'أَمَمٌ مِمَّنْ', transliteration: 'Amamum mimman', note: 'Mim before Mim — Idgham Shafawi' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj3r2',
        name: 'Ikhfa Shafawi (إِخْفَاء شَفَوِي)',
        arabic: 'إِخْفَاءٌ شَفَوِيّ',
        level: 'beginner',
        explanation: `Ikhfa Shafawi occurs when meem saakinah is followed by ba (ب). The mim is neither pronounced fully (as in Izhar) nor merged (as in Idgham) — instead it is concealed with ghunnah for two counts while the lips prepare for the ba.

This is analogous to Iqlab in the noon rules: both involve the relationship between a nasal labial sound (mim, or noon converted to mim) and the letter ba.`,
        examples: [
          { arabic: 'وَهُمْ بِالآخِرَةِ', transliteration: 'Wahum bil-akhirati', note: 'Mim before Ba — Ikhfa Shafawi with ghunnah' },
          { arabic: 'تَرْمِيهِمْ بِحِجَارَةٍ', transliteration: 'Tarmihim bi hijara', note: 'Mim before Ba — Ikhfa Shafawi (Quran 105:4)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj3r3',
        name: 'Izhar Shafawi (إِظْهَار شَفَوِي)',
        arabic: 'إِظْهَارٌ شَفَوِيّ',
        level: 'beginner',
        explanation: `Izhar Shafawi occurs when meem saakinah is followed by any letter other than mim or ba — the remaining twenty-six letters. The mim is pronounced clearly, with no merging or added nasalization.

Special attention is required before waw (و) and fa (ف), since these are close to the mim in articulation (the lips), creating a natural tendency to merge that the reciter must resist by pronouncing the mim distinctly before moving on.`,
        examples: [
          { arabic: 'وَهُمْ فِيهَا', transliteration: 'Wahum fiha', note: 'Mim before Fa — Izhar Shafawi: must be clear, not merged' },
          { arabic: 'هُمْ وَأَزْوَاجُهُمْ', transliteration: 'Hum wa azwajuhum', note: 'Mim before Waw — Izhar Shafawi: must be clear' },
          { arabic: 'أَنْعَمْتَ عَلَيْهِمْ', transliteration: 'Anamta alayhim', note: 'Mim before Ayn — Izhar Shafawi' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah',
      },
    ],
  },

  {
    id: 'tj4',
    title: 'Al-Madd (Prolongation)',
    arabicTitle: 'المَدّ وَأَقْسَامُهُ',
    icon: '〰️',
    overview: 'Al-Madd (المَدّ — prolongation) is the extension of the natural duration of a vowel sound beyond its basic count. It is among the most important rules of Tajweed and significantly affects the beauty and meaning of Quranic recitation. The scholars have identified numerous types of madd, each with precise duration measured in harakatain (vowel counts).',
    rules: [
      {
        id: 'tj4r1',
        name: 'Al-Madd al-Tabii (المَدُّ الطَّبِيعِي — Natural Prolongation)',
        arabic: 'المَدُّ الطَّبِيعِيّ',
        level: 'beginner',
        explanation: `Al-Madd al-Tabii is the foundation of every other type of madd. It is the natural extension of a long vowel — alif, waw, or ya — for exactly two counts (harakatain, roughly two short-vowel beats).

It is called "tabii" (natural) because a reciter with a natural sense of Arabic cannot reduce it below two counts nor extend it beyond two counts without a specific reason to do so.

Its conditions are:

- An alif must be preceded by a fathah.
- A waw must be preceded by a dammah.
- A ya must be preceded by a kasrah.
- None of these may be followed by a hamzah or a sukun — if they are, a different (longer) type of madd applies instead.

Al-Madd al-Tabii is also called Madd al-Asli (the original madd), since every other madd type is simply an extension of it beyond the natural two counts, triggered by a following hamzah or sukun.`,
        examples: [
          { arabic: 'قَالَ', transliteration: 'Qala', note: 'Alif after fathah — extend for 2 counts' },
          { arabic: 'يَقُولُ', transliteration: 'Yaqulu', note: 'Waw after dammah — extend for 2 counts' },
          { arabic: 'قِيلَ', transliteration: 'Qila', note: 'Ya after kasrah — extend for 2 counts' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Tuhfat al-Atfal',
      },
      {
        id: 'tj4r2',
        name: 'Al-Madd al-Muttasil (المَدُّ الوَاجِبُ المُتَّصِل)',
        arabic: 'المَدُّ الوَاجِبُ المُتَّصِل',
        level: 'intermediate',
        explanation: `Al-Madd al-Muttasil occurs when a long vowel letter is followed by a hamzah within the SAME word.

It is called "wajib" (compulsory) because scholars of all qiraat agree it must be extended beyond the natural two counts, and "muttasil" (connected) because the long vowel and the hamzah occur together in one word.

Its duration is four to five counts under the standard reading of Hafs an Asim — both are permitted.

The reasoning behind the extension: the hamzah is the heaviest letter in Arabic, requiring significant preparation in the throat. Extending the preceding vowel gives the vocal tract time to prepare for it.`,
        examples: [
          { arabic: 'جَاءَ', transliteration: 'Jaa-a', note: 'Alif then Hamzah in same word — extend 4-5 counts' },
          { arabic: 'السَّمَاءُ', transliteration: 'As-Samaa-u', note: 'Alif then Hamzah in same word — extend 4-5 counts' },
          { arabic: 'جِيءَ', transliteration: 'Jii-a', note: 'Ya then Hamzah in same word — extend 4-5 counts (Quran 39:69)' },
          { arabic: 'سُوءَ', transliteration: 'Suu-a', note: 'Waw then Hamzah in same word — extend 4-5 counts' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Wafi fi Sharh al-Shatibiyyah',
      },
      {
        id: 'tj4r3',
        name: 'Al-Madd al-Munfasil (المَدُّ الجَائِزُ المُنْفَصِل)',
        arabic: 'المَدُّ الجَائِزُ المُنْفَصِل',
        level: 'intermediate',
        explanation: `Al-Madd al-Munfasil occurs when a long vowel at the END of one word is followed by a hamzah at the BEGINNING of the next word.

It is called "jaiz" (permissible) because scholars allow reciting it with 2, 4, or 5 counts — more flexibility than the Muttasil — and "munfasil" (separated) because the long vowel and the hamzah fall in separate words.

Under the recitation of Hafs an Asim, the Munfasil is typically extended to 4 or 5 counts. It is also extremely common — almost every page of the Quran contains several examples.`,
        examples: [
          { arabic: 'إِنَّا أَعْطَيْنَاكَ', transliteration: 'Inna aataynaka', note: 'Ya at end of inna then Hamzah of aatayna — different words, extend 4-5 counts' },
          { arabic: 'وَمَا أَدْرَاكَ', transliteration: 'Wa maa adraka', note: 'Alif at end of maa then Hamzah of adraka — Munfasil' },
          { arabic: 'قُلُوا آمَنَّا', transliteration: 'Quluu aamanna', note: 'Waw at end of quluu then Hamzah of aamanna — Munfasil' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj4r4',
        name: 'Al-Madd al-Aarid lil-Sukun (المَدُّ العَارِضُ لِلسُّكُون)',
        arabic: 'المَدُّ العَارِضُ لِلسُّكُون',
        level: 'intermediate',
        explanation: `Al-Madd al-Aarid lil-Sukun occurs when a long vowel is followed by a letter that carries a sukun only because recitation has stopped there (waqf).

In continuous recitation (wasl), that same letter would carry a vowel, and no madd beyond the natural Tabii would apply. But once the reciter stops, the final letter becomes sakin, triggering the extended madd.

It is called "aarid" (incidental) because the sukun causing it is not an original feature of the word — it arises only from the act of stopping.

Its permitted duration under Hafs is 2, 4, or 6 counts, and it is one of the most frequently encountered madds in actual recitation, since reciters stop throughout the Quran constantly.`,
        examples: [
          { arabic: 'نَسْتَعِينُ ۝', transliteration: 'Nastaaiin (waqf)', note: 'Waw before final nun which becomes sakin at stop — extend 2/4/6 counts' },
          { arabic: 'الرَّحِيمُ ۝', transliteration: 'Ar-Rahiim (waqf)', note: 'Ya before mim which becomes sakin at stop' },
          { arabic: 'تَعْلَمُونَ ۝', transliteration: 'Taalamuun (waqf)', note: 'Waw before nun which becomes sakin at stop' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj4r5',
        name: 'Al-Madd al-Lazim (المَدُّ اللَّازِم)',
        arabic: 'المَدُّ اللَّازِم',
        level: 'advanced',
        explanation: `Al-Madd al-Lazim is the strongest and longest madd, extended for SIX counts in every case — whether stopping or continuing.

It is called "lazim" (compulsory) because its duration is permanent and cannot be shortened under any circumstance. It occurs when a long vowel is followed by a letter with an ORIGINAL sukun — not one that merely arises from stopping.

There are two main types:

1. Madd Lazim Kalimi (word-based) — the sukun occurs in the same word as the long vowel:
   - Muthaqal (heavy): the sukun results from a shaddah on the following letter (i.e., the letter is doubled). Example: الضَّالِّينَ, where the lam is doubled and the ya before it is extended for 6 counts.
   - Mukhaffaf (light): the sukun is original, but the following letter is not doubled. Example: آلْآنَ (Quran 10:51, 10:91).

2. Madd Lazim Harfi (letter-based) — occurs in the individual letters that open some surahs (al-huruf al-muqattaat). Those letters whose names contain three letters with a long vowel in the middle are extended for 6 counts: ن، ق، ص، ل، س، ك، م، ع، ط، ي، ه.`,
        examples: [
          { arabic: 'وَلَا الضَّالِّينَ', transliteration: 'Wa lad-Daallin', note: 'Ya before doubled Lam (shaddah) — Madd Lazim Muthaqal, 6 counts' },
          { arabic: 'الم', transliteration: 'Alif Lam Mim', note: 'Lam letter: Lam Alif Mim — middle is alif, extend 6 counts' },
          { arabic: 'ق', transliteration: 'Qaf', note: 'Qaf letter: Qaf Alif Fa — middle is alif, extend 6 counts (Quran 50:1)' },
          { arabic: 'ص', transliteration: 'Sad', note: 'Sad letter: Sad Alif Dal — extend 6 counts (Quran 38:1)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Wafi fi Sharh al-Shatibiyyah',
      },
      {
        id: 'tj4r6',
        name: 'Madd al-Lin (مَدُّ اللِّين)',
        arabic: 'مَدُّ اللِّين',
        level: 'intermediate',
        explanation: `Madd al-Lin occurs when a waw (و) or ya (ي) carrying a sukun is preceded by a letter with a fathah — these two letters, in this position, are called huruf al-lin (letters of softness).

In continuous recitation, they produce a natural, soft glide of about two counts. But when the reciter stops (waqf) on a word ending in a letter after huruf al-lin, the extension increases to 2, 4, or 6 counts — similar in behavior to Madd Aarid lil-Sukun.

The term "lin" (softness) describes the easy, effortless quality of these two letters in this position: they require no muscular tension to produce and glide gently into the following sound.`,
        examples: [
          { arabic: 'خَوْفٌ ۝', transliteration: 'Khawf (waqf)', note: 'Waw sakin after fathah — Lin madd at stop: 2/4/6 counts' },
          { arabic: 'البَيْتِ ۝', transliteration: 'Al-Bayt (waqf)', note: 'Ya sakin after fathah — Lin madd at stop' },
          { arabic: 'قُرَيْشٍ ۝', transliteration: 'Quraysh (waqf)', note: 'Ya sakin after fathah — Lin madd at stop (Quran 106:1)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj5',
    title: 'Al-Qalqalah (Echoing)',
    arabicTitle: 'القَلْقَلَة',
    icon: '🔊',
    overview: 'Al-Qalqalah (القَلْقَلَة — echoing/vibration) is one of the most distinctive features of Quranic recitation. It refers to a slight echo or bounce produced when five specific letters carry a sukun (are vowelless). The term qalqalah literally means a disturbance or agitation, which describes the slight vibration in the voice when these letters are produced.',
    rules: [
      {
        id: 'tj5r1',
        name: 'Al-Qalqalah — Letters, Types, and Degrees',
        arabic: 'القَلْقَلَة وَأَنْوَاعُهَا وَدَرَجَاتُهَا',
        level: 'beginner',
        explanation: `The five Qalqalah letters are memorized in the phrase قُطْبُ جَدٍّ (qaf, ta, ba, jim, dal). These letters share two characteristics that together produce the qalqalah:

1. They are all jahr (voiced) — the breath is held back during their production.
2. They are all shiddah (plosive) — airflow is completely stopped when producing them.

The combination of voicing and complete closure, released while the letter carries a sukun, produces the characteristic echoing bounce.

There are three degrees of Qalqalah:

1. Al-Qalqalah al-Sughra (الصُّغْرَى — minor): the qalqalah letter falls in the middle of a word with sukun. The echo is slight. Example: يَقْطَعُونَ, where the qaf carries a sukun mid-word.

2. Al-Qalqalah al-Wusta (الوُسْطَى — middle): the qalqalah letter falls at the END of a word and recitation continues (wasl).

3. Al-Qalqalah al-Kubra (الكُبْرَى — major): the qalqalah letter falls at the END of a word and recitation STOPS there (waqf). This produces the most pronounced echo — a full bounce in the voice.`,
        examples: [
          { arabic: 'يَقْطَعُونَ', transliteration: 'Yaqtauun', note: 'Qaf with sukun in middle of word — Qalqalah Sughra (slight echo)' },
          { arabic: 'أَجْدَرُ', transliteration: 'Ajdaru', note: 'Jim and Dal with sukun — Qalqalah Sughra' },
          { arabic: 'الفَلَقِ ۝', transliteration: 'Al-Falaq (waqf)', note: 'Qaf at end of word at stop — Qalqalah Kubra (strong echo)' },
          { arabic: 'الصَّمَدُ ۝', transliteration: 'As-Samad (waqf)', note: 'Dal at end at stop — Qalqalah Kubra (Quran 112:2)' },
          { arabic: 'مِنْ شَرِّ مَا خَلَقَ ۝', transliteration: 'Khalaq (waqf)', note: 'Qaf at end at stop — Qalqalah Kubra (Quran 113:2)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari; Tuhfat al-Atfal',
      },
    ],
  },

  {
    id: 'tj6',
    title: 'Tafkheem and Tarqeeq',
    arabicTitle: 'التَّفْخِيمُ وَالتَّرْقِيق',
    icon: '🎵',
    overview: 'Tafkheem (التَّفْخِيم — heaviness/fullness) and Tarqeeq (التَّرْقِيق — lightness/thinness) refer to the quality of letters as either heavy (pronounced with the back of the tongue raised, producing a fuller sound) or light (pronounced with the back of the tongue flat, producing a thinner sound). This distinction is one of the most nuanced aspects of Tajweed and significantly affects the acoustic beauty of recitation.',
    rules: [
      {
        id: 'tj6r1',
        name: 'The Letters of Tafkheem (Istila) and Their Degrees',
        arabic: 'حُرُوفُ الاِسْتِعْلَاء وَدَرَجَاتُ التَّفْخِيم',
        level: 'intermediate',
        explanation: `The seven letters of Istila (elevation) are always pronounced with tafkheem (heaviness): خُصَّ ضَغْطٍ قِظْ (kha, sad, dad, ghayn, ta, qaf, zha). These seven letters are heavy regardless of what vowel they carry or what surrounds them.

Their degree of heaviness, however, varies with the vowel, from heaviest to lightest:

1. Heaviest: the letter carries a fathah, or is followed by an alif — e.g., صَا، قَ، طَ.
2. Second: the letter carries a dammah — e.g., صُ، قُ، طُ.
3. Third: the letter carries a sukun — e.g., صْ، قْ، طْ.
4. Lightest among Istila letters: the letter carries a kasrah — e.g., صِ، قِ، طِ.

Even at their lightest, with a kasrah, these seven letters never become fully light — they always retain some degree of heaviness, distinguishing them permanently from the remaining letters of the alphabet.`,
        examples: [
          { arabic: 'الصَّلَاة', transliteration: 'As-Salah', note: 'Sad with fathah — heaviest degree of tafkheem' },
          { arabic: 'قُلْ', transliteration: 'Qul', note: 'Qaf with dammah — second degree' },
          { arabic: 'مُخْلَصِين', transliteration: 'Mukhlasin', note: 'Sad with kasrah — lightest tafkheem but still heavy' },
        ],
        source: 'Hidayat al-Qari; Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj6r2',
        name: 'The Lam of Allah\'s Name (لَفْظُ الجَلَالَة)',
        arabic: 'لَامُ لَفْظِ الجَلَالَة',
        level: 'intermediate',
        explanation: `The lam in the name of Allah (اللَّه) is unique in Arabic: it is the only lam that alternates between tafkheem (heaviness) and tarqeeq (lightness) depending on the vowel that precedes it.

The rule is:

1. If the letter before Allah's name carries a fathah or a dammah, the lam is heavy (mufakhkham) — e.g., قَالَ اللَّهُ, رَسُولُ اللَّهِ.
2. If the letter before Allah's name carries a kasrah, the lam is light (muraqqaq) — e.g., بِسْمِ اللَّهِ, قُلِ اللَّهُمَّ (Quran 3:26).

This rule gives Allah's name a special acoustic distinction that no other single word in the Arabic language possesses.`,
        examples: [
          { arabic: 'قَالَ اللَّهُ', transliteration: 'Qalallahu', note: 'Fathah before Allah — lam is HEAVY' },
          { arabic: 'عَبْدُ اللَّهِ', transliteration: 'Abdullahi', note: 'Dammah before Allah — lam is HEAVY' },
          { arabic: 'بِسْمِ اللَّهِ', transliteration: 'Bismillahi', note: 'Kasrah before Allah — lam is LIGHT' },
          { arabic: 'قُلِ اللَّهُمَّ', transliteration: 'Qulillahuma', note: 'Kasrah before Allah — lam is LIGHT (Quran 3:26)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj6r3',
        name: 'The Ra (ر) — Heavy or Light',
        arabic: 'التَّفْخِيمُ وَالتَّرْقِيقُ فِي الرَّاء',
        level: 'advanced',
        explanation: `The ra (ر) is unusual: it belongs to the Istifal letters (naturally light), yet it alternates between heavy and light recitation depending on a set of contextual rules.

Cases when the Ra is HEAVY (tafkheem):

1. When it carries a fathah or a dammah — e.g., رَحْمَةً، رُزِقُوا.
2. When it carries a sukun and the letter before it carries a fathah or a dammah — e.g., مَرْيَمَ، بُرْهَانٌ.
3. When it carries a sukun and is preceded by a kasrah that is itself preceded by a letter of istila — e.g., قِرْطَاسٌ.

Cases when the Ra is LIGHT (tarqeeq):

1. When it carries a kasrah — e.g., رِزْقًا، رِجَالٌ.
2. When it carries a sukun and is preceded by an original kasrah — e.g., فِرْعَوْنُ, where the ra is sakin and the preceding kasrah makes it light.`,
        examples: [
          { arabic: 'رَحْمَةً', transliteration: 'Rahmatan', note: 'Ra with fathah — HEAVY' },
          { arabic: 'رِزْقًا', transliteration: 'Rizqan', note: 'Ra with kasrah — LIGHT' },
          { arabic: 'فِرْعَوْنُ', transliteration: 'Firawnu', note: 'Ra with sukun after kasrah — LIGHT' },
          { arabic: 'مَرْيَمَ', transliteration: 'Maryam', note: 'Ra with sukun after fathah — HEAVY' },
        ],
        source: 'Hidayat al-Qari; Al-Wafi fi Sharh al-Shatibiyyah',
      },
    ],
  },

  {
    id: 'tj7',
    title: 'Al-Waqf and Al-Ibtida',
    arabicTitle: 'الوَقْفُ وَالاِبْتِدَاء',
    icon: '⏸️',
    overview: 'Al-Waqf (الوَقْف — stopping/pausing) and Al-Ibtida (الاِبْتِدَاء — beginning/resuming) are among the most important sciences in Tajweed because they directly affect the meaning of the Quran. Stopping at the wrong place or beginning at the wrong word can completely alter or corrupt the intended meaning.',
    rules: [
      {
        id: 'tj7r1',
        name: 'Types of Waqf and Their Signs',
        arabic: 'أَنْوَاعُ الوَقْفِ وَعَلَامَاتُهُ',
        level: 'intermediate',
        explanation: `Waqf is categorized into four types, based on how stopping there affects the meaning:

1. Al-Waqf al-Tam (الوَقْفُ التَّامّ — complete stop): stopping at a point where the meaning is complete and the following text has no grammatical or semantic connection to what precedes. This is the best place to stop, and is sometimes marked (م) for a mandatory stop in the mushaf.

2. Al-Waqf al-Kafi (الوَقْفُ الكَافِي — sufficient stop): stopping where the meaning is largely complete, though some conceptual connection to what follows may remain. Acceptable to stop here.

3. Al-Waqf al-Hasan (الوَقْفُ الحَسَن — good stop): stopping where the words form a meaningful unit, but the sentence structure continues. Acceptable to pause, though resuming requires starting again from the same point.

4. Al-Waqf al-Qabih (الوَقْفُ القَبِيح — impermissible stop): stopping at a point that corrupts the intended meaning — for example, stopping after "لَا" in "لَا إِلَهَ إِلَّا اللَّه" would leave the meaning as pure negation of God's existence, the opposite of what the phrase intends.

The masahif use a set of standard symbols to guide reciters at each point, including:

- م (Waqf Lazim) — a mandatory stop, required for correct meaning.
- ط (Waqf Mutlaq) — an absolute stop, a good place to pause.
- ج (Waqf Jaiz) — a permissible stop; one may pause or continue.
- ز (Waqf Mujawwaz) — permitted, though continuing is preferred.
- ص (Waqf Murakhkhas) — permitted due to the length of the verse.
- لا (La Waqf) — do not stop here.
- قف (Qif) — an attention marker indicating a recommended stop.`,
        examples: [
          { arabic: 'م', transliteration: 'Waqf Lazim', note: 'Mandatory stop — stopping is required here for correct meaning' },
          { arabic: 'ط', transliteration: 'Waqf Mutlaq', note: 'Absolute stop — good place to stop' },
          { arabic: 'ج', transliteration: 'Waqf Jaiz', note: 'Permissible stop — may stop or continue' },
          { arabic: 'ز', transliteration: 'Waqf Mujawwaz', note: 'Permitted but continuing is better' },
          { arabic: 'ص', transliteration: 'Waqf Murakhkhas', note: 'Permitted due to length of verse' },
          { arabic: 'لا', transliteration: 'La Waqf', note: 'Do NOT stop here' },
          { arabic: 'قف', transliteration: 'Qif', note: 'Stop here (attention marker)' },
        ],
        source: 'Al-Tibyan fi Adab Hamalat al-Quran, al-Nawawi; Manar al-Huda fi al-Waqf wal-Ibtida',
      },
      {
        id: 'tj7r2',
        name: 'Al-Saktah (السَّكْتَة — Brief Pause)',
        arabic: 'السَّكْتَة',
        level: 'advanced',
        explanation: `Al-Saktah is a brief silence in the breath, without taking a new breath — shorter than a full waqf and without the phonological changes that accompany a waqf.

In the riwayah of Hafs an Asim, there are exactly four places where a saktah is performed:

1. عِوَجًا ۜ قَيِّمًا (Quran 18:1-2)
2. مَنْ رَاقٍ ۜ (Quran 75:27) — the pause here changes the sense of the phrase, clarifying it as "who is the healer?"
3. بَلْ ۜ رَانَ (Quran 83:14) — the pause prevents the lam and ra from merging via Idgham bila Ghunnah, a merge that would distort the intended meaning
4. وَقِيلَ مَنْ ۜ رَاقٍ — the same construction as (2)

These four saktahs are among the most precisely preserved features of the Hafs riwayah, transmitted unchanged across the generations of reciters.`,
        examples: [
          { arabic: 'عِوَجًا ۜ قَيِّمًا', transliteration: 'Iwajan (saktah) Qayyiman', note: 'Brief pause without new breath (Quran 18:1-2)' },
          { arabic: 'بَلْ ۜ رَانَ', transliteration: 'Bal (saktah) Rana', note: 'Brief pause prevents wrong merging (Quran 83:14)' },
        ],
        source: 'Al-Wafi fi Sharh al-Shatibiyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj8',
    title: 'Al-Ghunnah (Nasalization)',
    arabicTitle: 'الغُنَّة وَأَحْكَامُهَا',
    icon: '🎶',
    overview: 'Al-Ghunnah (الغُنَّة) is a nasal sound produced from the nasal passage (al-khayshum) that accompanies the letters mim (م) and nun (ن) in specific circumstances. It is not an optional embellishment — it is an integral part of these letters that must be produced correctly.',
    rules: [
      {
        id: 'tj8r1',
        name: 'The Ghunnah — Its Nature, Degrees, and Occasions',
        arabic: 'الغُنَّةُ حَقِيقَتُهَا وَدَرَجَاتُهَا وَمَوَاضِعُهَا',
        level: 'intermediate',
        explanation: `The Ghunnah is produced from the nasal passage (khayshum) — not the mouth or the throat. If you hold your nose while producing a noon or mim with ghunnah, the sound becomes distorted, confirming its nasal origin. Its standard duration is two counts (harakatain).

The degrees of Ghunnah, from strongest to weakest, are:

1. Strongest: Idgham bi-Ghunnah — the noon or tanween merges into the following letter while ghunnah is held for two counts.
2. Second: Ikhfa — the noon is concealed before fifteen letters, with ghunnah held for two counts.
3. Third: Ikhfa Shafawi — mim before ba.
4. Fourth: a noon or mim carrying a shaddah (doubled) — these always carry a full ghunnah for two counts, as in إِنَّ and أَمَّا.
5. Fifth: a noon or mim with any other vowel (not shaddah) — the ghunnah here is inherent to the letter but lighter than in the cases above.

As a general rule: wherever نّ or مّ appears in the Quran, two full counts of ghunnah are required.`,
        examples: [
          { arabic: 'إِنَّ', transliteration: 'Inna', note: 'Shaddah on noon — strong ghunnah for 2 counts' },
          { arabic: 'أَمَّا', transliteration: 'Amma', note: 'Shaddah on mim — strong ghunnah for 2 counts' },
          { arabic: 'مَنْ يَقُولُ', transliteration: 'May yaqulu', note: 'Idgham bi-Ghunnah — noon merges into ya with ghunnah' },
          { arabic: 'مِنْ ثَمَرَةٍ', transliteration: 'Min thamaratin', note: 'Ikhfa — noon concealed before tha with ghunnah' },
        ],
        source: 'Hidayat al-Qari; Al-Muqaddimah al-Jazariyyah; Tuhfat al-Atfal',
      },
    ],
  },

  {
    id: 'tj9',
    title: 'The Opening Letters (Al-Huruf al-Muqattaat)',
    arabicTitle: 'الحُرُوفُ المُقَطَّعَة',
    icon: '🔡',
    overview: 'The Huruf al-Muqattaat (الحُرُوفُ المُقَطَّعَة — the disconnected/individual letters) are the mysterious letters that appear at the beginning of twenty-nine surahs of the Quran. Their meaning belongs to the Mutashabih — the ambiguous — and Allah knows best their full significance. From the perspective of Tajweed, they have very precise rules that must be followed.',
    rules: [
      {
        id: 'tj9r1',
        name: 'Recitation Rules of the Huruf Muqattaat',
        arabic: 'أَحْكَامُ تِلَاوَةِ الحُرُوفِ المُقَطَّعَة',
        level: 'advanced',
        explanation: `The Huruf Muqattaat are always recited as individual letter names — never blended into a single word. Their Tajweed rules include:

1. Each letter is recited by its full name. In الم (Alif-Lam-Mim): the alif is simply named; the lam is pronounced as its full name Lam-Alif-Mim, carrying a Madd Lazim of 6 counts on its internal alif; the mim likewise carries a Madd Lazim of 6 counts on its own internal alif.

2. Classification by madd duration:
   - Letters with a 6-count Madd Lazim — those whose three-letter names contain a long vowel in the middle: ن، ق، ص، ل، س، ك، م، ع، ط، ي، ه.
   - Letters with a 2-count Madd Tabii — those whose names end in a long vowel: ح، ي، ط، هـ، ر.
   - Letters with no madd at all: alif.

3. Where Idgham applies between the end of one letter's name and the beginning of the next — for example, in الم (Alif-Lam-Mim), the mim ending the name of lam meets the mim beginning the name of mim — Idgham Shafawi applies between them.`,
        examples: [
          { arabic: 'الم', transliteration: 'Alif-Lam-Mim', note: 'Alif: no madd. Lam: 6 counts. Mim: 6 counts — mim of lam-name merges into mim name' },
          { arabic: 'حم', transliteration: 'Ha-Mim', note: 'Ha: 2 counts (Ha-Alif). Mim: 6 counts (Mim-Alif-Mim)' },
          { arabic: 'ق', transliteration: 'Qaf', note: 'Qaf: 6 counts (Qaf-Alif-Fa)' },
          { arabic: 'ن', transliteration: 'Nun', note: 'Nun: 6 counts (Nun-Waw-Nun) — Surah al-Qalam opens with this' },
        ],
        source: 'Al-Wafi fi Sharh al-Shatibiyyah; Hidayat al-Qari; Al-Muqaddimah al-Jazariyyah',
      },
    ],
  },

  {
    id: 'tj10',
    title: 'The Hamzah (الهَمْزَة)',
    arabicTitle: 'أَحْكَامُ الهَمْزَة',
    icon: 'ء',
    overview: 'The Hamzah (ء) is one of the most technically demanding letters in Arabic Tajweed. It is produced at the deepest part of the throat (aqsa al-halq) through a complete closure and release — a glottal stop. Its rules in Tajweed are complex, particularly regarding Hamzat al-Wasl and Hamzat al-Qat.',
    rules: [
      {
        id: 'tj10r1',
        name: 'Hamzat al-Wasl vs. Hamzat al-Qat',
        arabic: 'هَمْزَةُ الوَصْلِ وَهَمْزَةُ القَطْع',
        level: 'intermediate',
        explanation: `Arabic hamzahs divide into two fundamental types:

1. Hamzat al-Qat (هَمْزَةُ القَطْع — the cutting hamzah): always pronounced, whether it falls at the beginning of speech or in the middle of a phrase. It is written with a hamzah seat, as in أَكَلَ، إِبْرَاهِيم، أُمَّة, and must always be fully articulated from the throat.

2. Hamzat al-Wasl (هَمْزَةُ الوَصْل — the connecting hamzah): pronounced only when speech begins with it. When it falls mid-recitation, after a preceding word, it is dropped entirely, and the preceding vowel connects directly to the following letter. It is written as a plain alif with no hamzah mark (ا).

Hamzat al-Wasl appears in:

- The definite article ال (al-)
- The verb forms of Form VII, VIII, and X
- Certain command forms, such as اذْهَبْ and اقْرَأْ
- A small set of specific nouns, such as اسْمٌ، ابْنٌ، امْرَأَةٌ

When beginning recitation with a word that opens in Hamzat al-Wasl, the starting vowel depends on what follows: if the third letter of the word carries a dammah, begin with a dammah; if it carries a kasrah or a fathah, begin with a kasrah.`,
        examples: [
          { arabic: 'بِسْمِ اللَّهِ الرَّحْمٰنِ', transliteration: 'Bismillahi Ar-Rahman', note: 'The al- of Allah and Ar-Rahman are Hamzat Wasl — dropped in connection' },
          { arabic: 'قُلِ اقْرَأْ', transliteration: 'Quli-qra', note: 'Iqra begins with Hamzat Wasl — dropped after quli, connecting directly' },
          { arabic: 'أَعُوذُ', transliteration: 'Aaudhu', note: 'Hamzat Qat — always pronounced fully' },
        ],
        source: 'Hidayat al-Qari; Al-Muqaddimah al-Jazariyyah',
      },
    ],
  },

  {
    id: 'tj11',
    title: 'General Idgham (Beyond Noon Saakinah)',
    arabicTitle: 'الإِدْغَامُ العَامّ',
    icon: '🔗',
    overview: 'Beyond the Idgham rules tied specifically to noon saakinah and tanween, Tajweed identifies a broader category of merging that applies whenever two letters meet under certain conditions, whether or not a noon is involved. This general Idgham divides into three categories based on how closely related the two letters are.',
    rules: [
      {
        id: 'tj11r1',
        name: 'Idgham Mutamathilayn (Identical Letters)',
        arabic: 'إِدْغَامُ المُتَمَاثِلَيْن',
        level: 'intermediate',
        explanation: `Idgham Mutamathilayn (اِدْغَام مُتَمَاثِلَيْن) occurs when a letter with sukun is immediately followed by an identical letter carrying a vowel — the same letter, same articulation point, same characteristics.

The first letter (the sakin one) merges completely into the second, producing a single doubled letter.

This is the simplest form of Idgham, since no adjustment in articulation is needed — the letters are already identical. It occurs most frequently across word boundaries, where the last letter of one word matches the first letter of the next.

Exception: if the first letter is itself a letter of madd (alif, waw, or ya functioning as a long vowel) meeting an identical vowelled letter, the madd is observed first rather than an ordinary merge taking place.`,
        examples: [
          { arabic: 'اِذْهَب بِّكِتَابِي', transliteration: 'Idh-hab bikitabi', note: 'Ba sakin meets vowelled Ba across words — merges into one letter (Quran 27:28)' },
          { arabic: 'قُل لِّلَّذِينَ', transliteration: 'Qul-lilladhina', note: 'Lam sakin meets vowelled Lam across words — merges into doubled lam' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj11r2',
        name: 'Idgham Mutajanisayn (Same Makhraj, Different Sifat)',
        arabic: 'إِدْغَامُ المُتَجَانِسَيْن',
        level: 'intermediate',
        explanation: `Idgham Mutajanisayn (اِدْغَام مُتَجَانِسَيْن) occurs when two letters share the same makhraj (articulation point) but differ in one or more sifat (characteristics).

The most well-known cases in the Quran involve:

- Ta sakinah meeting Dal, or Dal sakinah meeting Ta — both produced at the tip of the tongue against the base of the upper teeth.
- Dhal sakinah meeting Zha — both interdental letters.
- Lam sakinah meeting Ra — both produced with the tip of the tongue, close but not identical.

In most cases the merge is complete, though the specific quality retained (such as heaviness, in the case of an emphatic letter absorbing a non-emphatic one) depends on the exact letter pair.`,
        examples: [
          { arabic: 'أَثْقَلَت دَّعَوَا', transliteration: 'Athqalat-daawa', note: 'Ta sakinah meets Dal — merges into doubled dal (Quran 7:189)' },
          { arabic: 'قَالَت طَّائِفَةٌ', transliteration: 'Qalat-taaifatun', note: 'Ta sakinah meets emphatic Ta — merges with heaviness retained' },
          { arabic: 'إِذ ظَّلَمُوا', transliteration: 'Idh-dhalamu', note: 'Dhal sakinah meets Zha — merges into doubled zha' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj11r3',
        name: 'Idgham Mutaqaribayn (Close Articulation Points)',
        arabic: 'إِدْغَامُ المُتَقَارِبَيْن',
        level: 'advanced',
        explanation: `Idgham Mutaqaribayn (اِدْغَام مُتَقَارِبَيْن) occurs when two letters are close in articulation point and share some characteristics, though they are neither identical nor as closely matched as the Mutajanisayn pairs.

The most famous example in the standard riwayah of Hafs an Asim is the lam sakinah of هَلْ or بَلْ merging into a following ra.

A rarer and celebrated case is the qaf sakinah merging into kaf in a single word — a feature found in only one verse in the entire Hafs riwayah.`,
        examples: [
          { arabic: 'هَل رَّأَيْتَ', transliteration: 'Hal-raayta', note: 'Lam sakinah meets Ra — merges (Idgham Mutaqaribayn)' },
          { arabic: 'أَلَمْ نَخْلُقكُّم', transliteration: 'Alam nakhluq-kum', note: 'Qaf sakinah meets Kaf — a unique merge found only in this verse (Quran 77:20)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj12',
    title: 'Al-Lam Shamsiyyah wal-Qamariyyah (Sun and Moon Letters)',
    arabicTitle: 'اللَّامُ الشَّمْسِيَّة وَالقَمَرِيَّة',
    icon: '🌞',
    overview: 'One of the most fundamental rules a reciter applies from the very first word of the Quran (بِسْمِ اللَّهِ) concerns the definite article ال and how it is pronounced before different letters. This is the rule of the Sun Letters (al-huruf al-shamsiyyah) and Moon Letters (al-huruf al-qamariyyah), and it also governs the correct transliteration of any Arabic word beginning with the definite article.',
    rules: [
      {
        id: 'tj12r1',
        name: 'Al-Lam Shamsiyyah (Sun Lam)',
        arabic: 'اللَّامُ الشَّمْسِيَّة',
        level: 'foundation',
        explanation: `When the definite article ال is followed by one of the fourteen Sun Letters, the lam is not pronounced at all — it is written but silent — and the following letter is doubled (carries a shaddah) instead.

The fourteen sun letters are memorized by taking the first letter of each word in the phrase:

طِبْ ثُمَّ صِلْ رَحِمًا تَفُزْ ضِفْ ذَا نِعَمٍ دَعْ سُوءَ ظَنٍّ زُرْ شَرِيفًا لِلْكَرَمِ

— yielding: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.

This is called "Shamsiyyah" (solar) after the word اَلشَّمْس (the sun) itself, whose lam is a textbook example — silent, with the following shin doubled.

This is precisely why correct transliteration writes words like as-Sahabah, ar-Rahman, and ash-Shams beginning with the sun letter's own sound rather than with "al-": the lam fully assimilates into the pronunciation of the letter that follows it.`,
        examples: [
          { arabic: 'الشَّمْس', transliteration: 'Ash-Shams', note: 'Lam is silent, shin is doubled — "the sun"' },
          { arabic: 'الرَّحْمَٰن', transliteration: 'Ar-Rahman', note: 'Lam is silent, ra is doubled — "the Most Merciful"' },
          { arabic: 'النَّاس', transliteration: 'An-Nas', note: 'Lam is silent, nun is doubled — "mankind" (closing surah of the Quran)' },
          { arabic: 'الصَّلَاة', transliteration: 'As-Salah', note: 'Lam is silent, sad is doubled — "the prayer"' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj12r2',
        name: 'Al-Lam Qamariyyah (Moon Lam)',
        arabic: 'اللَّامُ القَمَرِيَّة',
        level: 'foundation',
        explanation: `When the definite article ال is followed by one of the fourteen remaining letters — the Moon Letters — the lam is pronounced clearly and distinctly, exactly as written, with no doubling of the following letter.

The fourteen moon letters are memorized in the phrase:

اِبْغِ حَجَّكَ وَخَفْ عَقِيمَهُ

— yielding, together with the initial hamzah of the phrase itself: ء ب ج ح خ ع غ ف ق ك م ه و ي.

This is called "Qamariyyah" (lunar) after the word اَلْقَمَر (the moon) itself, whose lam is clearly pronounced — a textbook example of the moon letters.

Unlike the Sun Lam, which disappears entirely from pronunciation, the Moon Lam always carries a sukun and is fully articulated before the following letter begins.`,
        examples: [
          { arabic: 'القَمَر', transliteration: 'Al-Qamar', note: 'Lam is pronounced clearly — "the moon"' },
          { arabic: 'الكِتَاب', transliteration: 'Al-Kitab', note: 'Lam is pronounced clearly — "the book"' },
          { arabic: 'الحَمْد', transliteration: 'Al-Hamd', note: 'Lam is pronounced clearly — "the praise" (opening word of Surah al-Fatihah)' },
          { arabic: 'المُؤْمِنُون', transliteration: 'Al-Muminun', note: 'Lam is pronounced clearly — "the believers"' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah',
      },
    ],
  },

  {
    id: 'tj13',
    title: 'Further Types of Madd',
    arabicTitle: 'أَنْوَاعٌ أُخْرَى مِنَ المَدّ',
    icon: '➰',
    overview: 'Beyond the primary madd categories of Tabii, Muttasil, Munfasil, Aarid lil-Sukun, and Lazim, the science of Tajweed identifies several further subsidiary madd types, each triggered by a specific linguistic or grammatical circumstance.',
    rules: [
      {
        id: 'tj13r1',
        name: 'Madd al-Badal (مَدُّ البَدَل)',
        arabic: 'مَدُّ البَدَل',
        level: 'intermediate',
        explanation: `Madd al-Badal occurs when a hamzah precedes a letter of madd within the same syllable — the reverse order of Madd al-Muttasil, where the hamzah comes first and the long vowel follows, rather than a long vowel being followed by a hamzah.

It is called "Badal" (substitute) because many grammarians hold that the long vowel letter was originally a second hamzah, later softened into a letter of madd for ease of pronunciation.

Its duration is the standard two counts, identical to Madd Tabii, since no further hamzah or sukun follows to warrant any extension.`,
        examples: [
          { arabic: 'آمَنُوا', transliteration: 'Aamanu', note: 'Hamzah followed by alif of madd — 2 counts (originally two hamzahs, the second softened)' },
          { arabic: 'إِيمَان', transliteration: 'Iman', note: 'Hamzah followed by ya of madd — 2 counts' },
          { arabic: 'أُوتُوا', transliteration: 'Utu', note: 'Hamzah followed by waw of madd — 2 counts' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj13r2',
        name: 'Madd al-Iwad (مَدُّ العِوَض)',
        arabic: 'مَدُّ العِوَض',
        level: 'intermediate',
        explanation: `Madd al-Iwad occurs when stopping (waqf) on a word that ends in fathatayn (a double fathah, indicating tanween). At the stop, the fathatayn sound is dropped and replaced by an alif of madd extended for two counts, as a substitute ("iwad" — compensation) for the tanween sound that would otherwise be pronounced in continuous recitation.

This rule is specific to fathatayn. It does not apply to a feminine ta marbutah ending with tanween, nor to words ending in tanween on dammatayn or kasratayn, both of which are simply dropped at the stop with no compensating madd.`,
        examples: [
          { arabic: 'عَلِيمًا حَكِيمًا ۝', transliteration: 'Aliman Hakima (waqf)', note: 'The final fathatayn is pronounced as an alif madd at the stop, 2 counts' },
          { arabic: 'كَثِيرًا ۝', transliteration: 'Kathira (waqf)', note: 'Tanween becomes an alif madd at the stop, 2 counts' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj13r3',
        name: 'Madd Silah (مَدُّ الصِّلَة)',
        arabic: 'مَدُّ الصِّلَة',
        level: 'advanced',
        explanation: `Madd Silah applies to the ha of the third-person masculine singular pronoun (هُ or هِ, meaning "his" or "him") when it falls between two vowelled letters — that is, the ha itself is not sakin, and it is surrounded by moving letters on both sides.

Under these conditions, the ha is extended with a small madd:

- Silah Sughra (minor connection): two counts, when the letter following the ha is not a hamzah.
- Silah Kubra (major connection): four to five counts, when the letter following the ha is a hamzah — behaving much like Madd Munfasil.

If the ha is followed by a sakin letter, or falls at the end of a word where recitation stops, no Silah applies, and the ha is pronounced with its bare vowel only.`,
        examples: [
          { arabic: 'إِنَّهُ كَانَ', transliteration: 'Innahu kana', note: 'Ha of "innahu" followed by a non-hamzah letter — Silah Sughra, 2 counts' },
          { arabic: 'لَهُ أَجْرٌ', transliteration: 'Lahu ajrun', note: 'Ha followed by a hamzah — Silah Kubra, 4-5 counts' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj14',
    title: 'Special Recitation Features',
    arabicTitle: 'أَحْكَامٌ خَاصَّةٌ فِي الرِّوَايَة',
    icon: '✨',
    overview: 'Beyond the standard rules applied throughout the Quran, a small number of specific words carry unique phonetic features preserved precisely in the riwayah of Hafs an Asim. These features are remnants of the broader diversity found across the Seven Ahruf and the Ten Qiraat, of which Hafs an Asim represents one carefully preserved transmission.',
    rules: [
      {
        id: 'tj14r1',
        name: 'Al-Imalah (الإِمَالَة)',
        arabic: 'الإِمَالَة',
        level: 'advanced',
        explanation: `Al-Imalah means inclining the sound of a fathah toward a kasrah, and the alif that follows it toward a ya, producing a sound between the two rather than a pure fathah and pure alif.

In the riwayah of Hafs an Asim, Imalah is preserved in exactly one location in the entire Quran: the word مَجْرَاهَا (majraha, "its course") in Surah Hud, 11:41, pronounced with a leaning sound closer to "majreha."

This is a remnant of a broader dialectal feature used far more extensively in other riwayat, such as those of Hamzah and al-Kisai, but preserved by Hafs in this single, well-known instance.`,
        examples: [
          { arabic: 'مَجْرَاهَا', transliteration: 'Majreha', note: 'The sole instance of Imalah in the riwayah of Hafs an Asim (Quran 11:41)' },
        ],
        source: 'Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari',
      },
      {
        id: 'tj14r2',
        name: 'Al-Ishmam (الإِشْمَام)',
        arabic: 'الإِشْمَام',
        level: 'advanced',
        explanation: `Al-Ishmam involves rounding the lips (as if pronouncing a dammah) immediately after articulating a sakin letter that would otherwise carry no vowel, without producing any actual sound — a purely visual, labial gesture rather than an audible change.

In the riwayah of Hafs an Asim, Ishmam is applied to the final noon of لَا تَأْمَنَّا in Surah Yusuf, 12:11, as a subtle indication of the dammah understood to underlie the word's original form.

Because it produces no additional sound, Ishmam can only be learned through direct oral transmission from a qualified teacher (talaqqi), never from a written description alone.`,
        examples: [
          { arabic: 'لَا تَأْمَنَّا', transliteration: 'La tamanna', note: 'Lips round toward a dammah on the final noon with no added sound (Quran 12:11)' },
        ],
        source: 'Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari; Hidayat al-Qari',
      },
      {
        id: 'tj14r3',
        name: 'Al-Naql (النَّقْل)',
        arabic: 'النَّقْل',
        level: 'advanced',
        explanation: `Al-Naql refers to transferring the vowel of a hamzat al-wasl onto the preceding sakin letter, allowing the hamzah itself to be dropped entirely — even at the start of recitation.

In the standard riwayah of Hafs an Asim, Naql occurs in exactly one place: بِئْسَ الاِسْمُ in Surah al-Hujurat, 49:11, recited as "Bisal-ismu" — the kasrah of the hamzah in الاسم transfers onto the preceding sin, and the hamzah is dropped.

This is one of the rarest and most distinctive features unique to a single verse in the Hafs transmission.`,
        examples: [
          { arabic: 'بِئْسَ الاِسْمُ', transliteration: 'Bisal-ismu', note: 'The hamzah\'s kasrah transfers onto the preceding sin; the hamzah itself is dropped (Quran 49:11)' },
        ],
        source: 'Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari',
      },
    ],
  },

  {
    id: 'tj15',
    title: 'The Waqf Styles: Sukoon, Rawm, and Ishmam',
    arabicTitle: 'الوَقْفُ بِالسُّكُونِ وَالرَّوْمِ وَالإِشْمَام',
    icon: '🤫',
    overview: 'When a reciter comes to a stop at the end of a word, the letter that carried a vowel in continuous recitation must be handled in one of several permitted ways. Three styles are recognized, differing in how much of the original vowel, if any, remains audible or visible.',
    rules: [
      {
        id: 'tj15r1',
        name: 'Al-Waqf bis-Sukoon (الوَقْفُ بِالسُّكُون)',
        arabic: 'الوَقْفُ بِالسُّكُون',
        level: 'beginner',
        explanation: `Waqf bis-Sukoon is the default and most common way of stopping: the final letter, whatever vowel it carried in continuous recitation (fathah, dammah, or kasrah), is pronounced with a full sukun, its vowel dropped entirely.

This applies universally regardless of the letter's original vowel, and is valid at the end of every word without exception, making it the safest and most widely used stopping method for reciters at every level.`,
        examples: [
          { arabic: 'يَعْلَمُونَ ۝', transliteration: 'Yalamuun (waqf)', note: 'Dammah dropped to a full sukun at the stop' },
          { arabic: 'الْكِتَابَ ۝', transliteration: 'Al-Kitab (waqf)', note: 'Fathah dropped to a full sukun at the stop' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj15r2',
        name: 'Al-Waqf bir-Rawm (الوَقْفُ بِالرَّوْم)',
        arabic: 'الوَقْفُ بِالرَّوْم',
        level: 'intermediate',
        explanation: `Al-Rawm means pronouncing a small, quiet portion of the original vowel — roughly a third of its full sound — audible only to someone listening closely, rather than dropping it completely as in Sukoon.

Rawm applies only to letters ending in dammah or kasrah; it does not apply to fathah, since a fathah carries no vowel quality that can be partially retained in this subtle way, nor to letters carrying tanween, since the nunation is dropped at a stop regardless.

Because the vowel remnant is so faint, Rawm is typically taught and verified through direct oral transmission (talaqqi) from a qualified teacher rather than mastered from a written description alone.`,
        examples: [
          { arabic: 'نَسْتَعِينُ ۝', transliteration: 'Nastaiin (rawm)', note: 'A faint trace of the dammah is retained rather than a full sukun' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj15r3',
        name: 'Al-Waqf bil-Ishmam (الوَقْفُ بِالإِشْمَام)',
        arabic: 'الوَقْفُ بِالإِشْمَام',
        level: 'advanced',
        explanation: `Al-Ishmam, in the context of general waqf, involves rounding the lips into the shape of a dammah immediately after pronouncing the letter with full sukun, without producing any sound at all — a purely visual gesture perceptible only to someone watching the reciter's mouth, not to someone merely listening.

Ishmam applies only to letters that carried a dammah in continuous recitation; it cannot be applied to fathah or kasrah, since the lip-rounding gesture specifically signals a dammah.

Since Ishmam produces no audible difference whatsoever, it exists purely as a visual indicator of the underlying vowel and, like Rawm, can only be reliably learned through direct transmission from a teacher.`,
        examples: [
          { arabic: 'نَسْتَعِينُ ۝', transliteration: 'Nastaiin (ishmam)', note: 'Lips round into a dammah shape silently after the sukun' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj16',
    title: 'Waqf on Ta Marbutah',
    arabicTitle: 'الوَقْفُ عَلَى التَّاءِ المَرْبُوطَة',
    icon: '⭕',
    overview: 'The feminine ending ة (ta marbutah) behaves differently depending on whether recitation continues past it or stops on it — a rule every beginner must internalize early, since it appears on a large portion of Arabic nouns and adjectives.',
    rules: [
      {
        id: 'tj16r1',
        name: 'The Ta Marbutah in Wasl and Waqf',
        arabic: 'التَّاءُ المَرْبُوطَة فِي الوَصْلِ وَالوَقْف',
        level: 'beginner',
        explanation: `In continuous recitation (wasl), a word ending in ة is pronounced with its full ta sound (ت), carrying whatever vowel the grammar of the sentence requires — often with tanween.

When the reciter stops (waqf) on such a word, however, the ة is always pronounced as a plain ha (هـ) with a sukun, regardless of what vowel or tanween it carried a moment before in continuous recitation. This is a fixed convention agreed upon by all reciters and represents one of the few points where the written form (ة) and its two spoken realizations — ت in wasl, هـ in waqf — diverge visibly.

This shift is purely phonetic and carries no change in meaning; it exists simply because Arabic speech avoids ending an utterance on the sharper "t" sound of ta marbutah, preferring the softer "h" sound at a pause.`,
        examples: [
          { arabic: 'رَحْمَةٌ', transliteration: 'Rahmatun (wasl) / Rahmah (waqf)', note: 'Full ta sound in continuous recitation, plain ha at a stop' },
          { arabic: 'الْجَنَّةَ', transliteration: 'Al-Jannata (wasl) / Al-Jannah (waqf)', note: 'Same shift: ta in wasl, ha in waqf' },
        ],
        source: 'Tuhfat al-Atfal; Al-Muqaddimah al-Jazariyyah',
      },
    ],
  },

  {
    id: 'tj17',
    title: 'Madd al-Farq (The Madd of Distinction)',
    arabicTitle: 'مَدُّ الفَرْق',
    icon: '❓',
    overview: 'A rare but important madd category exists specifically to prevent ambiguity between a question and a statement, arising from the meeting of an interrogative hamzah and a hamzat al-wasl.',
    rules: [
      {
        id: 'tj17r1',
        name: 'Madd al-Farq',
        arabic: 'مَدُّ الفَرْق',
        level: 'advanced',
        explanation: `Madd al-Farq occurs when a hamzat al-istifham (the interrogative "is/are," used to ask a question) is immediately followed by a word beginning with a hamzat al-wasl attached to the definite article ال.

Normally, a hamzat al-wasl is dropped in continuous speech and its vowel is absorbed into the preceding sound. But if it were dropped here, the resulting phrase would become phonetically identical to a plain declarative statement, erasing the fact that a question was being asked. To prevent this ambiguity, the alif of the hamzat al-wasl is instead pronounced as a full madd of six counts, clearly signaling to the listener that a question is intended.

This occurs in only a handful of places in the Quran, most notably in Surah al-Anam (6:143-144), where Allah repeatedly asks the disbelievers whether it is the two males or the two females that they have forbidden — the interrogative form must be unmistakable given the weight of the rhetorical challenge being posed.`,
        examples: [
          { arabic: 'آلذَّكَرَيْنِ حَرَّمَ', transliteration: 'Aadh-dhakarayni harrama', note: 'The alif is extended 6 counts to preserve the interrogative sense (Quran 6:143)' },
          { arabic: 'آلْآنَ وَقَدْ كُنتُم', transliteration: 'Al-aana wa qad kuntum', note: 'Marks a rhetorical question, "Now?! When you had..." (Quran 10:51, 91)' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari',
      },
    ],
  },

  {
    id: 'tj18',
    title: 'Idgham Kamil and Idgham Naqis',
    arabicTitle: 'الإِدْغَامُ الكَامِل وَالإِدْغَامُ النَّاقِص',
    icon: '🔀',
    overview: 'Beyond classifying Idgham by which letters are involved — as in the Noon Saakinah rules or the Mutamathilayn/Mutajanisayn/Mutaqaribayn categories — Tajweed also classifies every instance of Idgham by how completely the first letter disappears into the second, a lens that cuts across all the earlier categories.',
    rules: [
      {
        id: 'tj18r1',
        name: 'Idgham Kamil (Complete Merging)',
        arabic: 'الإِدْغَامُ الكَامِل',
        level: 'advanced',
        explanation: `Idgham Kamil occurs when the first letter merges so completely into the second that none of its own original characteristics (sifat) remain detectable — the two letters become fully indistinguishable from a single doubled letter of the second type.

This is the case in most instances of Idgham bila Ghunnah (noon merging into lam or ra) and in Idgham Mutamathilayn, where identical letters merge with nothing left over to distinguish the first from the second.`,
        examples: [
          { arabic: 'مِنْ رَبِّهِمْ', transliteration: 'Mir rabbihim', note: 'The noon disappears entirely into the ra — nothing of it remains' },
        ],
        source: 'Al-Wafi fi Sharh al-Shatibiyyah; Hidayat al-Qari',
      },
      {
        id: 'tj18r2',
        name: 'Idgham Naqis (Incomplete Merging)',
        arabic: 'الإِدْغَامُ النَّاقِص',
        level: 'advanced',
        explanation: `Idgham Naqis occurs when the first letter merges into the second but one of its original characteristics is deliberately retained rather than fully disappearing, meaning the merge is not total.

The clearest example is Idgham bi-Ghunnah: when noon saakinah merges into ya, waw, mim, or nun, the ghunnah (nasalization) associated with the noon is retained and held for two counts even as the noon's own identity disappears — a partial rather than total merge.

Another example occurs when a light (non-emphatic) letter merges into a heavy (emphatic) one in certain Mutajanisayn cases: the resulting doubled letter retains the heaviness (tafkheem) of the second letter throughout, showing that the merge did not erase every trace of the phonetic environment.

Recognizing this distinction explains why Idgham bi-Ghunnah is never described as producing a fully "silent" noon the way Idgham bila Ghunnah does — the noon's nasal quality survives the merge even though the letter itself does not.`,
        examples: [
          { arabic: 'مَنْ يَقُولُ', transliteration: 'May yaqulu', note: 'The noon merges into ya, but its ghunnah survives for 2 counts — an incomplete merge' },
        ],
        source: 'Al-Wafi fi Sharh al-Shatibiyyah; Hidayat al-Qari',
      },
    ],
  },

  {
    id: 'tj19',
    title: 'Al-Isti\'adhah wal-Basmalah',
    arabicTitle: 'الاِسْتِعَاذَةُ وَالبَسْمَلَة وَطُرُقُ الوَصْلِ بَيْنَهُمَا',
    icon: '🕋',
    overview: 'Before beginning recitation, the reciter observes two preliminary acts — seeking refuge in Allah (isti\'adhah) and, at the start of nearly every surah, reciting the basmalah. Scholars have detailed exactly how these may be joined to the recitation that follows.',
    rules: [
      {
        id: 'tj19r1',
        name: 'The Four Ways of Joining Isti\'adhah, Basmalah, and the Surah',
        arabic: 'أَوْجُهُ الوَصْلِ بَيْنَ الاِسْتِعَاذَةِ وَالبَسْمَلَةِ وَالسُّورَة',
        level: 'intermediate',
        explanation: `Ibn al-Jazari and other scholars of Tajweed identify four permitted ways to move from the isti'adhah into the basmalah and then into the opening of the surah, each involving a different pattern of pausing or connecting:

1. Qat al-Jami (cutting all three): pausing after the isti'adhah, pausing again after the basmalah, then beginning the surah — each of the three treated as a separate, self-contained utterance.

2. Wasl al-Jami (connecting all three): reciting the isti'adhah, the basmalah, and the opening of the surah all in one continuous breath with no pause at all.

3. Qat al-Awwal wa Wasl al-Akhirayn (cutting the first, connecting the last two): pausing after the isti'adhah, then reciting the basmalah connected directly into the start of the surah without a pause.

4. Wasl al-Awwal wa Qat al-Akhir (connecting the first two, cutting the last): reciting the isti'adhah connected directly into the basmalah with no pause, then pausing before beginning the surah itself.

All four ways are valid and were transmitted from the practice of the reciters; the choice between them is a matter of style rather than a difference in correctness.`,
        examples: [],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari',
      },
      {
        id: 'tj19r2',
        name: 'The Basmalah and Surah al-Tawbah',
        arabic: 'البَسْمَلَة وَسُورَةُ التَّوْبَة',
        level: 'beginner',
        explanation: `The basmalah is recited at the beginning of every surah of the Quran with one sole exception: Surah al-Tawbah (the ninth surah), which is not preceded by the basmalah when reciting through the mushaf in order.

The most widely cited reason among the scholars is that Surah al-Tawbah opens with a declaration severing ties with treaty-breaking idolaters, a tone of severity considered incompatible with the basmalah's message of mercy and compassion — though other explanations exist, including a narration that the Companions were uncertain whether al-Tawbah was truly a separate surah from the one preceding it (al-Anfal) or a continuation of it, and left out the basmalah out of caution.

If a reciter begins reciting from the middle of Surah al-Tawbah rather than reading straight through from al-Anfal, no basmalah is required at that starting point either, since the exclusion applies to the surah as a whole.`,
        examples: [],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Itqan fi Ulum al-Quran, al-Suyuti',
      },
    ],
  },

  {
    id: 'tj20',
    title: 'Sujud at-Tilawah',
    arabicTitle: 'سُجُودُ التِّلَاوَة',
    icon: '🕌',
    overview: 'Certain verses of the Quran, upon their recitation or hearing, call for a physical prostration — a practice rooted in the immediate, embodied response the Quran calls for when describing the submission of all creation to Allah.',
    rules: [
      {
        id: 'tj20r1',
        name: 'The Verses of Sajdah and Their Ruling',
        arabic: 'آيَاتُ السَّجْدَةِ وَحُكْمُهَا',
        level: 'intermediate',
        explanation: `There are fourteen verses of sajdah recognized by the majority of scholars (some count fifteen, differing over a verse in Surah al-Hajj), spread across the Quran from Surah al-Araf to Surah al-Alaq.

The ruling on performing the prostration upon reciting or hearing one of these verses is sunnah muakkadah according to the majority of scholars (Shafii, Maliki, Hanbali), and wajib (obligatory) according to the Hanafi school for both the reciter and an attentive listener.

The method: if outside of formal prayer, the person says the takbir (Allahu Akbar), prostrates once saying a supplication such as "Subhana Rabbiyal-Ala" or the specific dua reported from the Prophet, then rises without a tashahhud or taslim, since this single prostration is not itself a prayer. If the verse is recited within formal Salah, the prostration is performed as part of that prayer, and the reciter then rises and continues the prayer as normal.

A person merely reading a verse of sajdah silently to themselves without vocalizing it, according to some scholars, is not obligated to prostrate, since the ruling is tied to actual recitation or hearing rather than silent reading — though prostrating in this case remains permissible and rewarded.`,
        examples: [
          { arabic: 'وَلِلَّهِ يَسْجُدُ ۝', transliteration: 'Surah al-Araf 7:206', note: 'The closing sajdah verse of Surah al-Araf' },
          { arabic: 'وَخَرَّ رَاكِعًا ۝', transliteration: 'Surah as-Sajdah 32:15', note: 'The sajdah verse that gives the surah its name' },
          { arabic: 'وَاسْجُدْ وَاقْتَرِب ۝', transliteration: 'Surah al-Alaq 96:19', note: 'The final sajdah verse in mushaf order' },
        ],
        source: 'Sahih al-Bukhari 1075-1079; Al-Mughni, Ibn Qudamah',
      },
    ],
  },

  {
    id: 'tj21',
    title: 'The Remaining Sifat Without Opposites',
    arabicTitle: 'الصِّفَاتُ الَّتِي لَا ضِدَّ لَهَا',
    icon: '🎼',
    overview: 'Alongside the paired characteristics introduced earlier (Jahr/Hams, Shiddah/Rakhawah, Istila/Istifal, Itbaq/Infitah, Idhlaq/Ismat), a second group of sifat belongs only to specific letters with no opposing counterpart anywhere in the alphabet. Qalqalah was treated separately due to its importance; the remaining six are gathered here.',
    rules: [
      {
        id: 'tj21r1',
        name: 'Safir, Tafashi, and Istitalah',
        arabic: 'الصَّفِير وَالتَّفَشِّي وَالاِسْتِطَالَة',
        level: 'advanced',
        explanation: `1. Al-Safir (الصَّفِير — whistling): a sharp, whistling quality produced when air is forced through a narrow channel between the tongue and the teeth. Three letters carry it: sad (ص), zay (ز), and seen (س), memorized together as the "whistling letters." Sad produces the strongest whistle, followed by zay, then seen.

2. Al-Tafashi (التَّفَشِّي — dispersion): the sound of the letter spreads widely across the mouth rather than remaining focused at one point. Only the letter shin (ش) carries this sifah, recognizable by its broad, airy hiss.

3. Al-Istitalah (الاِسْتِطَالَة — elongation): the sound stretches from the very edge of the tongue along its side all the way to the point of contact with the gums. Only the letter dad (ض) carries this sifah, which is why dad is often singled out as the most difficult letter in Arabic for non-native speakers to master — its production requires the entire side of the tongue to press along the upper molars in sequence.`,
        examples: [
          { arabic: 'ص ز س', transliteration: 'Sad, Zay, Seen', note: 'The three Safir (whistling) letters, sad being the strongest' },
          { arabic: 'ش', transliteration: 'Shin', note: 'The sole Tafashi letter — sound disperses across the mouth' },
          { arabic: 'ض', transliteration: 'Dad', note: 'The sole Istitalah letter — sound elongates along the side of the tongue' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Hidayat al-Qari',
      },
      {
        id: 'tj21r2',
        name: 'Inhiraf, Takrir, and Lin',
        arabic: 'الاِنْحِرَاف وَالتَّكْرِير وَاللِّين',
        level: 'advanced',
        explanation: `1. Al-Inhiraf (الاِنْحِرَاف — deviation): the sound of the letter is deflected away from its primary makhraj toward the makhraj of a neighboring letter. Two letters carry this sifah: lam (ل), whose sound deflects toward the tip of the tongue, and ra (ر), whose sound deflects toward the back of the tongue slightly.

2. Al-Takrir (التَّكْرِير — repetition/trilling): the tip of the tongue vibrates rapidly when producing the letter. Only ra (ر) carries this sifah. Importantly, Takrir is a sifah to be aware of in order to CONTROL and minimize — a reciter should produce only a single, clean ra rather than allowing the natural trill to multiply into what sounds like a doubled or tripled letter.

3. Al-Lin (اللِّين — softness): already introduced under Madd al-Lin, this sifah belongs to waw (و) and ya (ي) specifically when they are sakin and preceded by a fathah, producing an easy, effortless glide with no muscular strain in the throat or tongue.`,
        examples: [
          { arabic: 'ل ر', transliteration: 'Lam, Ra', note: 'The two Inhiraf letters — sound deflects toward a neighboring makhraj' },
          { arabic: 'ر', transliteration: 'Ra', note: 'The sole Takrir letter — must be controlled to avoid an audible multiple trill' },
          { arabic: 'و ي', transliteration: 'Waw, Ya (sakin after fathah)', note: 'The Lin letters — soft, effortless glide, e.g. in خَوْف and بَيْت' },
        ],
        source: 'Al-Muqaddimah al-Jazariyyah; Al-Wafi fi Sharh al-Shatibiyyah',
      },
    ],
  },

  {
    id: 'tj22',
    title: 'The Seven Ahruf and the Ten Qiraat',
    arabicTitle: 'الأَحْرُفُ السَّبْعَة وَالقِرَاءَاتُ العَشْر',
    icon: '📜',
    overview: 'The rules covered throughout this course follow the riwayah of Hafs an Asim, the most widely recited transmission of the Quran today. But Hafs an Asim is only one strand within a much larger, fully authenticated tradition of transmission that traces back to the Prophet himself — a tradition that Tajweed students benefit from understanding, even if they only ever recite according to Hafs.',
    rules: [
      {
        id: 'tj22r1',
        name: 'The Seven Ahruf (Modes of Revelation)',
        arabic: 'الأَحْرُفُ السَّبْعَة',
        level: 'intermediate',
        explanation: `The Prophet Muhammad, upon him be peace, reported that the Quran was revealed upon seven ahruf (أَحْرُف — modes or dialectal variants), a concession granted to ease recitation across the diverse Arab tribes of the time, each with slightly different dialects and speech patterns.

Scholars differ on the precise nature of these seven ahruf — proposed explanations include variations in vocabulary, in grammatical inflection, or in dialectal pronunciation — but the two points of consensus are:

1. All seven ahruf carry the same meaning and were revealed by Allah, none contradicting another.
2. During the caliphate of Uthman ibn Affan, the Companions standardized the Quran onto a single script (the Uthmanic mushaf) reflecting one harf, chosen because it was comprehensive enough to accommodate the core of the various readings, in order to preserve unity and prevent disputes as Islam spread beyond the Arabian Peninsula.

The seven Qiraat (recitations) later canonized by Ibn Mujahid are related to, but distinct from, the seven ahruf — the Qiraat are chains of transmission of the single standardized text, while the ahruf refer to the broader pre-Uthmanic revelation.`,
        examples: [],
        source: 'Sahih al-Bukhari 4991-4992; Al-Itqan fi Ulum al-Quran, al-Suyuti',
      },
      {
        id: 'tj22r2',
        name: 'The Ten Canonical Qiraat and Their Transmitters',
        arabic: 'القِرَاءَاتُ العَشْرُ وَرُوَاتُهَا',
        level: 'advanced',
        explanation: `Ibn Mujahid first canonized seven Qiraat (recitations), each traced through an unbroken chain (isnad) back to the Prophet through a specific Companion and a specific city of transmission. Ibn al-Jazari later added three more, bringing the total to ten Mutawatir (mass-transmitted, unquestionably authentic) Qiraat:

1. Nafi al-Madani (Madinah) — transmitted through Qalun and Warsh
2. Ibn Kathir al-Makki (Makkah) — transmitted through al-Bazzi and Qunbul
3. Abu Amr al-Basri (Basrah) — transmitted through al-Duri and al-Susi
4. Ibn Amir al-Dimashqi (Damascus) — transmitted through Hisham and Ibn Dhakwan
5. Asim al-Kufi (Kufah) — transmitted through Shubah and Hafs
6. Hamzah al-Kufi (Kufah) — transmitted through Khalaf and Khallad
7. Al-Kisai al-Kufi (Kufah) — transmitted through al-Duri and Abu al-Harith
8. Abu Jafar al-Madani — transmitted through Ibn Wardan and Ibn Jammaz
9. Yaqub al-Hadrami (Basrah) — transmitted through Ruways and Rawh
10. Khalaf al-Ashir (Kufah) — an independent transmission distinct from his role as a narrator of Hamzah

Each Qiraat differs from the others only in minor points — vowelling, occasional word choice, or specific Tajweed applications like Imalah — never in overall meaning. Hafs an Asim, one of the two transmissions of Asim al-Kufi, is by far the most widely recited today, especially across the Middle East, South Asia, and beyond; Warsh an Nafi is dominant across most of North and West Africa.`,
        examples: [],
        source: 'Al-Nashr fi al-Qiraat al-Ashr, Ibn al-Jazari; Kitab al-Sabah, Ibn Mujahid',
      },
    ],
  },

  {
    id: 'tj23',
    title: 'Adab al-Tilawah (Etiquettes of Recitation)',
    arabicTitle: 'آدَابُ تِلَاوَةِ القُرْآن',
    icon: '🤲',
    overview: 'Beyond the technical rules of Tajweed, the scholars — most notably Imam al-Nawawi in his dedicated treatise Al-Tibyan — set out the inward and outward etiquettes (adab) that should accompany the recitation of the Quran, since Tajweed without sincerity and reverence falls short of the full purpose of recitation.',
    rules: [
      {
        id: 'tj23r1',
        name: 'Etiquettes Before and During Recitation',
        arabic: 'آدَابُ مَا قَبْلَ التِّلَاوَةِ وَأَثْنَاءَهَا',
        level: 'foundation',
        explanation: `Scholars of Quranic etiquette outline a number of recommended practices surrounding recitation, among them:

1. Purity: it is recommended to be in a state of wudu (ritual ablution) when handling and reciting the Mushaf, out of respect for the words of Allah, though reciting from memory without wudu is permitted by the majority of scholars (touching the physical Mushaf without wudu is a separate, more restricted matter across the schools of fiqh).

2. Seeking refuge and the basmalah: beginning with the isti'adhah (أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيم) as commanded in Quran 16:98, followed by the basmalah at the start of each surah (except al-Tawbah).

3. Tartil: reciting slowly and reflectively rather than rushing, in line with the command وَرَتِّلِ القُرْآنَ تَرْتِيلًا (Quran 73:4), allowing the meaning to be contemplated rather than merely the words produced.

4. Tadabbur: reflecting on the meaning as one recites — pausing at verses of mercy to ask for mercy, at verses of warning to seek refuge, and at verses describing Allah's attributes to affirm and glorify Him.

5. A suitable state and setting: facing the qiblah where possible, sitting in a dignified manner, and reciting in a clean, appropriate place, avoiding places of impurity or heedlessness.

6. Beautifying the voice: the Prophet encouraged reciters to beautify their voices with the Quran, as reported in the hadith "Beautify the Quran with your voices" — though this must never come at the expense of correct Tajweed or cross into the exaggerated musical styles that distort the meaning.`,
        examples: [],
        source: 'Al-Tibyan fi Adab Hamalat al-Quran, al-Nawawi; Sunan Abi Dawud 1468',
      },
      {
        id: 'tj23r2',
        name: 'The Etiquette of Listening and of the Community of Reciters',
        arabic: 'آدَابُ الاِسْتِمَاعِ وَآدَابُ جَمَاعَةِ القُرَّاء',
        level: 'foundation',
        explanation: `Just as the reciter has etiquettes, so does the listener, based on the Quranic instruction: وَإِذَا قُرِئَ القُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ — "And when the Quran is recited, listen to it and remain silent, that you may receive mercy" (Quran 7:204). This includes:

1. Attentive silence: refraining from speaking, eating, or distracting activity while the Quran is being recited nearby with the intention of being heard.

2. Correcting gently: if a listener notices an error in a reciter's Tajweed or memorization, correcting them with gentleness and good manners rather than public embarrassment, ideally after the recitation rather than interrupting mid-verse unless the error changes the meaning.

3. Group recitation etiquette: in a study circle (halaqah), each student waits their turn, listens attentively to others, and refrains from correcting out of turn or competing to be heard, preserving the calm, reverential atmosphere appropriate to studying the Quran.

4. Gratitude to teachers: showing respect and gratitude toward the teacher (shaykh or shaykhah) through whom the Quran is transmitted, recognizing that the chain of oral transmission (talaqqi and musafahah) is itself part of what preserves the authenticity of the recitation across generations.`,
        examples: [],
        source: 'Al-Tibyan fi Adab Hamalat al-Quran, al-Nawawi',
      },
    ],
  },

  {
    id: 'tj24',
    title: 'Types of Waqf by Cause',
    arabicTitle: 'أَنْوَاعُ الوَقْفِ بِاعْتِبَارِ السَّبَب',
    icon: '🛑',
    overview: 'Section 7 classified Waqf by its effect on MEANING (Tam, Kafi, Hasan, Qabih). A separate and equally important classification looks instead at the CAUSE that prompts a reciter to stop — whether by choice, necessity, or for teaching purposes — since the cause determines whether resuming requires repeating any preceding words.',
    rules: [
      {
        id: 'tj24r1',
        name: 'Al-Waqf al-Ikhtiyari and Al-Waqf al-Idtirari',
        arabic: 'الوَقْفُ الاِخْتِيَارِيّ وَالوَقْفُ الاِضْطِرَارِيّ',
        level: 'intermediate',
        explanation: `1. Al-Waqf al-Ikhtiyari (الوَقْفُ الاِخْتِيَارِيّ — voluntary stop): the reciter deliberately chooses to stop at a particular point while having the ability to continue, typically at one of the recommended waqf signs (Tam, Kafi, Hasan) discussed earlier. This is the ideal and ordinary form of stopping, planned in advance by a reciter who understands the meaning of the passage.

2. Al-Waqf al-Idtirari (الوَقْفُ الاِضْطِرَارِيّ — necessary/forced stop): the reciter is compelled to stop due to a genuine need — running out of breath, coughing, sneezing, forgetting the next word, or being interrupted — regardless of whether the stopping point is grammatically or semantically ideal.

When a forced stop occurs at an otherwise poor location (a Waqf Qabih point, for instance), the reciter is not held accountable for any momentary distortion of meaning, since the interruption was unintentional; upon resuming, however, it is generally recommended to back up slightly and restart from a point that restores the correct connected meaning, rather than resuming from the exact word where the interruption occurred.`,
        examples: [],
        source: 'Manar al-Huda fi al-Waqf wal-Ibtida; Al-Muqaddimah al-Jazariyyah',
      },
      {
        id: 'tj24r2',
        name: 'Al-Waqf al-Ikhtibari and Al-Waqf al-Intizari',
        arabic: 'الوَقْفُ الاِخْتِبَارِيّ وَالوَقْفُ الاِنْتِظَارِيّ',
        level: 'advanced',
        explanation: `1. Al-Waqf al-Ikhtibari (الوَقْفُ الاِخْتِبَارِيّ — testing/examination stop): a stop made specifically for the purpose of teaching or being examined — for instance, a teacher asking a student to stop mid-verse in order to demonstrate a particular Tajweed rule (such as showing how a word behaves in waqf versus wasl) or to test the student's memorization at an arbitrary point. This type of stop is not chosen for its meaning at all, and is permitted purely for pedagogical necessity, even at a location that would otherwise be a Waqf Qabih.

2. Al-Waqf al-Intizari (الوَقْفُ الاِنْتِظَارِيّ — anticipatory stop): a stop made when a reciter is reading according to multiple riwayat or qiraat in a single sitting (a practice called al-jam, common in advanced ijazah study) and pauses at a word in order to then repeat it according to each of the different recitations before continuing on to the next shared portion of text.

Both of these categories exist primarily in advanced pedagogical settings rather than in ordinary recitation or prayer, distinguishing them clearly from the voluntary and forced stops that occur in everyday Tilawah.`,
        examples: [],
        source: 'Manar al-Huda fil Waqf wal-Ibtida; Al-Nashr fil Qiraat al-Ashr, Ibn al-Jazari',
      },
    ],
  },

  {
    id: 'tj25',
    title: 'Al-Isnad and Al-Ijazah',
    arabicTitle: 'الإِسْنَادُ وَالإِجَازَة فِي عِلْمِ القِرَاءَات',
    icon: '🔖',
    overview: 'Unlike most sciences that can be learned purely from books, Tajweed and Qiraat are fundamentally oral sciences: correct recitation must ultimately be verified and certified through direct, person-to-person transmission tracing back to the Prophet himself. This section explains how that chain of transmission works.',
    rules: [
      {
        id: 'tj25r1',
        name: 'Talaqqi, Musafahah, and the Chain of Transmission',
        arabic: 'التَّلَقِّي وَالمُشَافَهَة وَسِلْسِلَةُ الإِسْنَاد',
        level: 'intermediate',
        explanation: `Al-Talaqqi (التَّلَقِّي — direct reception) refers to learning recitation face-to-face from a qualified teacher, rather than solely from written descriptions of Tajweed rules. Since subtleties such as Ishmam, Rawm, and the precise degree of Ghunnah cannot be fully captured in writing, every serious student of Tajweed eventually requires a live teacher to correct their recitation by ear.

Al-Musafahah (المُشَافَهَة — mouth-to-mouth transmission) describes this process more specifically: the teacher recites and the student repeats back, or the student recites and the teacher listens and corrects, verse by verse, until the entire portion (or the entire Quran) has been verified.

This creates an Isnad (إِسْنَاد — chain of transmission): a documented sequence of teachers, each having received their own recitation from their own teacher, tracing back through the great scholars of Qiraat (such as Ibn al-Jazari, al-Shatibi, or Hafs himself) all the way to the Prophet Muhammad, upon him be peace, via the angel Jibril from Allah. This unbroken oral chain is considered one of the strongest forms of textual preservation in any religious tradition.`,
        examples: [],
        source: 'Al-Nashr fil Qiraat al-Ashr, Ibn al-Jazari; Manzumat al-Muqaddimah, various commentaries',
      },
      {
        id: 'tj25r2',
        name: 'Al-Ijazah (الإِجَازَة — Certification)',
        arabic: 'الإِجَازَةُ فِي القِرَاءَة',
        level: 'intermediate',
        explanation: `An Ijazah (إِجَازَة — license or certification) is a formal authorization granted by a qualified teacher to a student, certifying that the student has completed a recitation of the Quran (in whole or in part) directly to the teacher with correct Tajweed, according to a specific riwayah (such as Hafs an Asim), and is therefore authorized to transmit that same recitation to others.

An Ijazah typically documents:

1. The specific riwayah and, in more advanced cases, the specific Qiraat being certified.
2. The scope of what was recited — commonly the whole Quran (an Ijazah Ammah, "complete Ijazah") or a portion of it.
3. The full chain of narrators (sanad) connecting the teacher back through history to the Prophet.

Holding an Ijazah is distinct from simply having memorized the Quran (being a Hafiz): memorization concerns retaining the text, while an Ijazah certifies that the certified reciter's Tajweed and pronunciation have been personally verified, letter by letter, against a living, authenticated chain — the very mechanism that has preserved the precise oral character of Quranic recitation across more than fourteen centuries.`,
        examples: [],
        source: 'Al-Nashr fil Qiraat al-Ashr, Ibn al-Jazari',
      },
    ],
  },
]

export const TAJWEED_SCHOLARS = [
  {
    name: 'Ibn al-Jazari',
    arabicName: 'ابْنُ الجَزَرِيّ',
    lifespan: '751-833 AH / 1350-1429 CE',
    contribution: 'The greatest scholar of Qiraat and Tajweed in Islamic history. Author of Al-Nashr fil Qiraat al-Ashr (the most comprehensive work on the ten Qiraat), Al-Muqaddimah al-Jazariyyah (the most studied Tajweed poem), and Tayyibat al-Nashr. He authenticated and transmitted more qiraat chains than any scholar before or after him.',
  },
  {
    name: 'Imam Hafs an Asim',
    arabicName: 'حَفْصٌ عَنْ عَاصِم',
    lifespan: 'd. 180 AH',
    contribution: 'Hafs ibn Sulayman transmitted the riwayah of Asim al-Kufi — the recitation used by over 95% of Muslims worldwide today. His transmission is distinguished by its melodic clarity and the preservation of specific features like the four saktahs.',
  },
  {
    name: 'Imam ash-Shatibi',
    arabicName: 'الإِمَامُ الشَّاطِبِيّ',
    lifespan: '538-590 AH',
    contribution: 'Author of Hirz al-Amani wa Wajh al-Tahani (known as Ash-Shaatibiyyah) — the most celebrated poem on the seven Qiraat, which became the foundational curriculum for Qiraat studies across the Islamic world.',
  },
  {
    name: 'Imam Nafi al-Madani',
    arabicName: 'الإِمَامُ نَافِعٌ المَدَنِيّ',
    lifespan: '70-169 AH',
    contribution: 'One of the seven canonical reciters (al-qurra as-sabah), whose recitation was transmitted through two primary students, Qalun and Warsh. His riwayah of Warsh remains the standard recitation across most of North and West Africa today.',
  },
  {
    name: 'Imam Abu Amr al-Basri',
    arabicName: 'الإِمَامُ أَبُو عَمْرٍو البَصْرِيّ',
    lifespan: '68-154 AH',
    contribution: 'One of the seven canonical reciters, renowned for his mastery of Arabic grammar and language alongside Quranic recitation. His riwayah, transmitted primarily through al-Duri and al-Susi, remains in use in parts of Africa and Sudan today.',
  },
  {
    name: 'Imam al-Dani',
    arabicName: 'الإِمَامُ الدَّانِيّ',
    lifespan: '371-444 AH',
    contribution: 'A foundational scholar of Quranic sciences and Qiraat, author of Al-Taysir fi al-Qiraat al-Sab (later versified by al-Shatibi in Al-Shatibiyyah) and a major contributor to the study of the Uthmanic script (rasm) and Quranic orthography.',
  },
  {
    name: 'Ibn Mujahid',
    arabicName: 'ابْنُ مُجَاهِد',
    lifespan: '245-324 AH',
    contribution: 'The first scholar to formally restrict and canonize the recitations of the Quran into seven authoritative Qiraat in his work Kitab al-Sabah, establishing the framework within which later scholars such as Ibn al-Jazari would expand to ten. His work ended a period of considerable variation in accepted recitations and set the precedent still followed today.',
  },
]