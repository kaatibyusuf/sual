export const FIQH_SECTIONS = [
  {
    id: 'fq1',
    title: 'Introduction to Fiqh',
    arabicTitle: 'مُقَدِّمَة فِي عِلْمِ الفِقْه',
    icon: '⚖️',
    overview: 'Fiqh (فِقْه) linguistically means deep understanding. Technically, it is the science of the practical rulings of Sharia derived from their detailed evidences. Where Aqidah concerns belief and Tajweed concerns recitation, Fiqh concerns action — how a Muslim worships, transacts, marries, and lives. Fiqh is built on Usul al-Fiqh (its methodology and sources) and is traditionally organized into two broad halves: Ibadat (acts of worship) and Muamalat (worldly dealings, including family law, commerce, and criminal law).',
    rules: [
      {
        id: 'fq1r1',
        name: 'Definition and Scope of Fiqh',
        arabic: 'تَعْرِيفُ الفِقْهِ وَمَوْضُوعُهُ',
        level: 'foundation',
        explanation: `Classical scholars define Fiqh as: "Knowledge of the practical rulings of Sharia acquired through detailed evidences" (العِلْمُ بِالأَحْكَامِ الشَّرْعِيَّةِ العَمَلِيَّةِ المُكْتَسَبُ مِنْ أَدِلَّتِهَا التَّفْصِيلِيَّة).

Several things follow from this definition:

1. Fiqh concerns practical, action-based rulings (amaliyyah) — prayer, fasting, sales, marriage — not creedal matters (which belong to Aqidah/Tawhid) or the inward states of the heart (which belong to Tazkiyah/Ihsan), though all three branches of Islamic knowledge are meant to work together.
2. Fiqh is "acquired" (muktasab) — meaning it involves human effort, reasoning, and derivation (ijtihad) from the primary texts, distinguishing it from the direct, infallible knowledge of the Prophet, upon him be peace, regarding revelation itself.
3. The word Sharia is broader than Fiqh: Sharia refers to the complete, divinely revealed way of life, while Fiqh is the human scholarly discipline that understands and articulates the rulings within it. This is why scholars may differ in Fiqh — because ijtihad is a human process — while the Sharia itself, as revealed, is one.

Fiqh is traditionally divided into two great branches:

- Ibadat (عِبَادَات — acts of worship): Taharah, Salah, Zakah, Sawm, Hajj, and related matters, governing the relationship between the servant and Allah.
- Muamalat (مُعَامَلَات — worldly dealings): contracts, marriage, divorce, inheritance, criminal law, and governance, governing relationships between people.`,
        examples: [],
        source: 'Al-Waraqat, al-Juwayni; Usul al-Fiqh al-Islami, Wahbah al-Zuhayli',
      },
      {
        id: 'fq1r2',
        name: 'The Five Rulings (Al-Ahkam al-Khamsah)',
        arabic: 'الأَحْكَامُ التَّكْلِيفِيَّةُ الخَمْسَة',
        level: 'foundation',
        explanation: `Every human action, from the perspective of Fiqh, falls under one of five categories of ruling (al-ahkam al-taklifiyyah):

1. Wajib / Fard (وَاجِب / فَرْض — obligatory): an act whose performance is rewarded and whose abandonment is sinful and punishable, such as the five daily prayers. Some scholars (notably the Hanafis) distinguish Fard (established by decisive, qati evidence) from Wajib (established by evidence open to some interpretation, zanni), though most other schools use the two terms interchangeably.

2. Mandub / Mustahabb / Sunnah (مَنْدُوب / مُسْتَحَبّ / سُنَّة — recommended): an act whose performance is rewarded but whose abandonment carries no sin, such as voluntary night prayers.

3. Mubah (مُبَاح — permissible): an act that is religiously neutral — neither rewarded nor punished by default, such as choosing what to eat among permissible foods.

4. Makruh (مَكْرُوه — disliked): an act whose abandonment is rewarded but whose performance is not sinful, merely discouraged, such as excessive worldly talk in the mosque.

5. Haram (حَرَام — forbidden): an act whose abandonment is rewarded and whose performance is sinful and punishable, such as consuming intoxicants or interest (riba).

Scholars also identify Fard Kifayah (a communal obligation fulfilled if enough members of the community perform it, such as the funeral prayer) as distinct from Fard Ayn (an individual obligation binding on every accountable Muslim, such as the five daily prayers).`,
        examples: [
          { arabic: 'الصَّلَاةُ', transliteration: 'As-Salah', note: 'Fard Ayn — obligatory upon every individual Muslim' },
          { arabic: 'صَلَاةُ الجَنَازَة', transliteration: 'Salat al-Janazah', note: 'Fard Kifayah — obligation lifted once sufficiently fulfilled by some' },
          { arabic: 'السِّوَاك', transliteration: 'As-Siwak', note: 'Mustahabb — recommended, rewarded but not sinful to omit' },
          { arabic: 'الرِّبَا', transliteration: 'Ar-Riba', note: 'Haram — forbidden, sinful to engage in' },
        ],
        source: 'Al-Waraqat, al-Juwayni; Al-Mustasfa, al-Ghazali',
      },
      {
        id: 'fq1r3',
        name: 'The Four Sunni Schools of Fiqh (Al-Madhahib)',
        arabic: 'المَذَاهِبُ الفِقْهِيَّةُ الأَرْبَعَة',
        level: 'foundation',
        explanation: `Following the era of the Companions and their Successors, four major schools of Fiqh crystallized among Sunni Muslims, each named after its founding jurist and each fully valid and mutually respected:

1. Al-Madhhab al-Hanafi — founded by Imam Abu Hanifah (d. 150 AH) in Kufa, later systematized by his students Abu Yusuf and Muhammad al-Shaybani. Historically dominant in the Ottoman lands, South Asia, and Central Asia. Known for its extensive use of qiyas (analogy) and istihsan (juristic preference).

2. Al-Madhhab al-Maliki — founded by Imam Malik ibn Anas (d. 179 AH) in Madinah, whose Al-Muwatta is among the earliest works of hadith and fiqh combined. Historically dominant across North and West Africa. Known for giving special weight to the practice (amal) of the people of Madinah.

3. Al-Madhhab al-Shafii — founded by Imam Muhammad ibn Idris al-Shafii (d. 204 AH), a student of both Malik and the Hanafi tradition, and the first to systematize Usul al-Fiqh as an independent discipline in his Al-Risalah. Historically dominant in East Africa, Yemen, and Southeast Asia.

4. Al-Madhhab al-Hanbali — founded by Imam Ahmad ibn Hanbal (d. 241 AH), renowned above all for his vast knowledge of hadith. Historically dominant in the Arabian Peninsula today. Known for placing the least reliance on qiyas relative to direct textual evidence.

Differences between the madhahib are, overwhelmingly, differences of ijtihad on secondary matters (furu) rather than the foundational articles of faith, and scholars across all four traditionally regard following any one of them as valid. A layperson unable to derive rulings independently is generally advised to follow a qualified scholar or school (taqlid) rather than picking piecemeal between opinions to suit personal convenience (talfiq motivated by desire).`,
        examples: [],
        source: 'Al-Madkhal ila Dirasat al-Madhahib al-Fiqhiyyah, Umar Sulayman al-Ashqar',
      },
    ],
  },

  {
    id: 'fq2',
    title: 'Usul al-Fiqh (Sources of Islamic Law)',
    arabicTitle: 'أُصُولُ الفِقْه',
    icon: '📚',
    overview: 'Usul al-Fiqh (أُصُولُ الفِقْه — the roots/foundations of Fiqh) is the methodology by which scholars derive specific rulings from the primary sources of Islam. Understanding these sources explains why scholars sometimes differ, and clarifies the disciplined, evidence-based nature of Islamic legal reasoning rather than mere personal opinion.',
    rules: [
      {
        id: 'fq2r1',
        name: 'The Quran and Sunnah as Primary Sources',
        arabic: 'القُرْآنُ وَالسُّنَّةُ أَصْلَا التَّشْرِيع',
        level: 'foundation',
        explanation: `The Quran is the first and highest source of Sharia, containing both explicit legal rulings (such as the shares of inheritance) and general principles from which detailed rulings are derived (such as the command to justice and the prohibition of corruption).

The Sunnah — the sayings, actions, and tacit approvals of the Prophet Muhammad, upon him be peace — is the second primary source, and functions in three main ways relative to the Quran:

1. Confirming a Quranic ruling (muqarrirah), as in the Sunnah's repeated affirmation of the obligation of prayer.
2. Explaining and detailing a general Quranic command (mubayyinah), as in the Sunnah's detailed description of how to perform the prayer, since the Quran commands prayer without specifying its exact movements.
3. Independently establishing a ruling not explicitly stated in the Quran (mustaqillah), such as certain prohibitions on particular animals for food.

Because the Sunnah plays this explanatory and independent legislative role, scholars insist that the Quran cannot be correctly understood or applied in isolation from it — the two sources function as a unified whole, with the Sunnah as the practical, prophetic implementation of Quranic guidance.`,
        examples: [],
        source: 'Al-Risalah, al-Shafii; Al-Muwafaqat, al-Shatibi',
      },
      {
        id: 'fq2r2',
        name: 'Ijma and Qiyas',
        arabic: 'الإِجْمَاعُ وَالقِيَاس',
        level: 'intermediate',
        explanation: `Beyond the Quran and Sunnah, two further sources are agreed upon by the overwhelming majority of scholars across the four schools:

1. Al-Ijma (الإِجْمَاع — consensus): the unanimous agreement of the qualified scholars (mujtahidun) of the Muslim Ummah in a particular era on a specific ruling. Once genuine Ijma is established on a matter, it becomes binding, and reopening it is not permitted, since the Ummah's collective agreement is protected from consolidated error according to hadith such as the Prophet's statement that his Ummah would never unite upon misguidance. Clear historical examples include the Ijma on compiling the Quran into a single mushaf and the Ijma on the obligatory status of the five daily prayers.

2. Al-Qiyas (القِيَاس — analogical reasoning): extending the ruling of an established case (asl) to a new, unaddressed case (far) because they share the same underlying effective cause (illah). For example, the Quran explicitly prohibits khamr (grape wine) due to its intoxicating effect (illah); scholars apply Qiyas to extend this prohibition to other intoxicants, such as modern distilled spirits, because they share that same intoxicating effective cause, even though the texts do not name them individually.

Valid Qiyas requires four elements: the original ruling (asl), the new case (far), the effective cause shared between them (illah), and the ruling itself being transferred (hukm). Scholars differ on the precise scope and conditions of valid Qiyas, which is a significant source of the secondary differences (ikhtilaf) between the madhahib.`,
        examples: [],
        source: 'Al-Risalah, al-Shafii; Irshad al-Fuhul, al-Shawkani',
      },
      {
        id: 'fq2r3',
        name: 'Secondary Sources: Istihsan, Maslahah, and Urf',
        arabic: 'الأَدِلَّةُ التَّبَعِيَّة: الاِسْتِحْسَان وَالمَصْلَحَة وَالعُرْف',
        level: 'advanced',
        explanation: `Beyond the four primary sources, jurists across the schools also draw — with varying degrees of acceptance — on several secondary tools of derivation:

1. Al-Istihsan (الاِسْتِحْسَان — juristic preference): departing from a strict analogy (qiyas) in favor of a different ruling because of a stronger, more contextually appropriate consideration, often to avoid hardship or an unintended harsh outcome. Particularly emphasized by the Hanafi school.

2. Al-Maslahah al-Mursalah (المَصْلَحَةُ المُرْسَلَة — unrestricted public interest): deriving a ruling based on a genuine, weighty public benefit that the texts neither explicitly endorse nor explicitly forbid, provided it does not contradict an established text or principle. Particularly emphasized by the Maliki school, and foundational to how Islamic law addresses genuinely new circumstances (nawazil) not directly envisioned by earlier jurists.

3. Al-Urf (العُرْف — custom): recognizing the established, non-sinful customary practice of a society as a factor in applying certain rulings, especially in commercial transactions where the texts leave contractual details to mutual agreement. The legal maxim العَادَةُ مُحَكَّمَة ("custom is a governing authority") captures this principle, though custom can never override an explicit, unambiguous text.

4. Sadd al-Dharai (سَدُّ الذَّرَائِع — blocking the means): prohibiting an action that is not sinful in itself but that reliably leads to a forbidden outcome, out of precaution. Particularly emphasized by the Maliki and Hanbali schools.

These tools illustrate that Islamic law is not a rigid, static list of texts but a living methodology capable of engaging genuinely new situations while remaining anchored to its primary sources.`,
        examples: [],
        source: 'Al-Muwafaqat, al-Shatibi; Ilm Usul al-Fiqh, Abd al-Wahhab Khallaf',
      },
      {
        id: 'fq2r4',
        name: 'Maqasid al-Sharia (The Higher Objectives of Islamic Law)',
        arabic: 'مَقَاصِدُ الشَّرِيعَة',
        level: 'advanced',
        explanation: `Later scholars, most systematically Imam al-Shatibi (d. 790 AH) in Al-Muwafaqat, identified that the entire body of Sharia rulings serves a set of overarching objectives (maqasid) aimed at securing human wellbeing in this life and the next. Five essential necessities (al-daruriyyat al-khams) are traditionally identified as protected by the Sharia:

1. Hifz al-Din (حِفْظُ الدِّين — protection of religion)
2. Hifz al-Nafs (حِفْظُ النَّفْس — protection of life)
3. Hifz al-Aql (حِفْظُ العَقْل — protection of the intellect)
4. Hifz al-Nasl (حِفْظُ النَّسْل — protection of lineage/family)
5. Hifz al-Mal (حِفْظُ المَال — protection of property/wealth)

Each individual ruling in Fiqh can typically be traced back to safeguarding one or more of these five necessities — for example, the prohibition of intoxicants protects the intellect, the laws of Qisas (retribution) protect life, and the prohibition of theft protects property.

Beyond the essential necessities, scholars also identify a second tier, al-hajiyyat (needs that remove hardship, such as certain trade concessions), and a third tier, al-tahsiniyyat (embellishments that perfect good character and etiquette, such as recommended manners at mealtimes). Understanding Maqasid al-Sharia helps a student of Fiqh see the wisdom and coherence underlying the detailed rulings, rather than experiencing them as an arbitrary list of do's and don'ts.`,
        examples: [],
        source: 'Al-Muwafaqat, al-Shatibi; Maqasid al-Shariah al-Islamiyyah, Ibn Ashur',
      },
    ],
  },

  {
    id: 'fq3',
    title: 'Taharah: Water and Najasah',
    arabicTitle: 'الطَّهَارَةُ: المِيَاهُ وَالنَّجَاسَات',
    icon: '💧',
    overview: 'Taharah (طَهَارَة — ritual purity) is the gateway to acts of worship in Islam, most famously captured in the hadith that "cleanliness is half of faith." Fiqh dedicates extensive detail to what water may be used for purification, and how to identify and remove impurities (najasah) from the body, clothing, and place of prayer.',
    rules: [
      {
        id: 'fq3r1',
        name: 'Categories of Water for Purification',
        arabic: 'أَقْسَامُ المِيَاهِ فِي التَّطْهِير',
        level: 'foundation',
        explanation: `Jurists classify water relevant to purification into three broad categories:

1. Tahur (طَهُور — purifying, pure in itself and able to purify others): water in its natural, unaltered state — rainwater, sea water, river water, well water — which may be used both to remove impurity and to perform wudu and ghusl. This is the default and most common category.

2. Tahir ghayr Mutahhir (طَاهِرٌ غَيْرُ مُطَهِّر — pure but not purifying): water that has become mixed with a pure substance in a way that changes its taste, color, or smell significantly, such as water mixed with fruit juice or a large quantity of soap. This water is clean to drink but the majority view holds it may not be used to perform wudu or ghusl, since it is no longer considered "pure water" (ma mutlaq) in the strict sense.

3. Najis (نَجِس — impure): water that has come into contact with an impurity in a quantity small enough (less than roughly two qullah, an amount jurists estimate around 190-200 liters combined, per the well-known hadith on qullatayn) that a change occurred in its taste, color, or smell — or, according to the Hanafi school, water in a small, still container of any kind that any impurity has touched, regardless of visible change. Such water may not be used for purification.

A well-known principle across the schools is that flowing or abundant water (such as a running stream or the sea) is far more resistant to becoming impure than a small, still quantity, since the hadith states that the sea's water is "purifying, and its dead [creatures] are lawful [to eat]."`,
        examples: [],
        source: 'Sunan Abi Dawud 83; Sunan al-Tirmidhi 69; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq3r2',
        name: 'Najasah: Categories and Removal',
        arabic: 'أَنْوَاعُ النَّجَاسَةِ وَكَيْفِيَّةُ إِزَالَتِهَا',
        level: 'intermediate',
        explanation: `Najasah (نَجَاسَة) refers to a ritual impurity that must be removed from the body, clothing, and place of prayer before Salah is valid. Commonly recognized najasat include:

1. Urine and feces of humans and of animals whose meat is not eaten.
2. Blood that flows from a wound (beyond a negligible trace).
3. Vomit in significant quantity.
4. The carcass (maytah) of any land animal that dies without being properly slaughtered, with certain exceptions (such as fish and locusts, which are lawful without ritual slaughter).
5. Alcohol/khamr, according to the majority view, though a minority of later scholars (including some contemporary Hanafi and Maliki jurists) held modern intoxicants such as grain alcohol to be religiously prohibited to consume but not ritually najis in the physical sense — a distinction relevant mainly to matters like handling hand sanitizer.
6. The saliva and any wet contact of a dog, according to the majority of schools (with the Maliki school holding a more lenient position on the dog's saliva itself, while still requiring general cleanliness).

The general method of removal (izalat al-najasah) is to wash the affected area with water until the impurity's substance, color, smell, and taste (where applicable) are gone. Certain najasah have specific rulings: the urine of a male infant who has not yet eaten solid food may be purified merely by sprinkling water over it, per an authentic hadith, while the urine of a female infant in the same stage requires actual washing according to the majority — a distinction some later scholars attribute to differing absorption and composition rather than any lesser status of either child.`,
        examples: [
          { arabic: 'بَوْلُ الغُلَامِ الرَّضِيع', transliteration: 'Bawl al-ghulam ar-radi', note: 'Urine of a nursing male infant — purified by sprinkling water (Sahih al-Bukhari 223)' },
          { arabic: 'وُلُوغُ الكَلْب', transliteration: 'Wuluugh al-kalb', note: 'A dog drinking from a vessel — majority view requires washing the vessel seven times, once with soil' },
        ],
        source: 'Sahih al-Bukhari 223, 225; Sahih Muslim 279; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq3r3',
        name: 'Al-Istinja and Al-Istijmar',
        arabic: 'الاِسْتِنْجَاءُ وَالاِسْتِجْمَار',
        level: 'beginner',
        explanation: `After using the bathroom, a Muslim is required to clean the private parts of any remaining impurity before proceeding to wudu or prayer. Two valid methods are recognized:

1. Al-Istinja (الاِسْتِنْجَاء — cleaning with water): washing the area with water until it is clean. This is considered the most thorough method and is preferred where available.

2. Al-Istijmar (الاِسْتِجْمَار — cleaning with solid material): using clean solid material, such as tissue or stones (historically), to wipe the area, provided at least three wipes are used and the area is rendered clean, per the Prophet's instruction. Combining Istijmar followed by Istinja is considered the most complete practice.

Certain etiquettes accompany relieving oneself, drawn from the Sunnah: entering with the left foot and a supplication seeking Allah's protection, avoiding facing or turning one's back to the qiblah while doing so (particularly in open areas, with somewhat more leniency indoors according to some scholars), and not using the right hand for cleaning, since the right hand is reserved for other, cleaner uses according to prophetic guidance.`,
        examples: [],
        source: 'Sahih al-Bukhari 150-155; Sahih Muslim 262-268',
      },
    ],
  },

  {
    id: 'fq4',
    title: 'Wudu (Ablution)',
    arabicTitle: 'أَحْكَامُ الوُضُوء',
    icon: '🚰',
    overview: 'Wudu (وُضُوء) is the minor ritual ablution required before Salah and other acts of worship. Its obligation is established directly in the Quran (5:6), and its precise steps, obligatory elements, and nullifiers are among the most foundational topics every Muslim learns early in their study of Fiqh.',
    rules: [
      {
        id: 'fq4r1',
        name: 'The Obligatory Elements (Fara\'id) of Wudu',
        arabic: 'فُرُوضُ الوُضُوء',
        level: 'foundation',
        explanation: `Allah describes the core actions of wudu directly in the Quran: "O you who believe, when you rise for prayer, wash your faces and your forearms to the elbows, wipe your heads, and wash your feet to the ankles" (Quran 5:6). From this verse, jurists derive four core obligatory elements, agreed upon (with some variation in detail) across the schools:

1. Washing the face — from the hairline to the chin, and from ear to ear, including rinsing the mouth and nose, which the majority consider obligatory or at least strongly emphasized as part of washing the face.

2. Washing the forearms to (and including) the elbows.

3. Wiping the head — the Hanafi and Maliki schools require wiping at least a portion or the majority of the head, while the Shafii school considers wiping even a small portion sufficient to fulfill the obligation, and the Hanbali school requires wiping the entire head including the ears.

4. Washing the feet to (and including) the ankles.

Additionally, Niyyah (نِيَّة — intention) is required by the majority of schools (the Hanafi school treats it as a strongly recommended condition for full reward rather than a strict pillar, though even they require the general intention of worship), and Tartib (سِلْسِلَة — performing the steps in the Quranic order) along with Muwalah (continuity, performing the steps without significant delay between them) are required by the Maliki and Hanbali schools as conditions of validity, while treated as recommended (not obligatory) by the Hanafi and Shafii schools.`,
        examples: [],
        source: 'Quran 5:6; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq4r2',
        name: 'The Sunan (Recommended Acts) of Wudu',
        arabic: 'سُنَنُ الوُضُوء',
        level: 'beginner',
        explanation: `Beyond the obligatory elements, the Prophet's own practice, as narrated in numerous hadith, establishes a full set of recommended acts that perfect the wudu and increase its reward, including:

1. Beginning with the intention and the basmalah (بِسْمِ اللَّهِ).
2. Washing the hands up to the wrists three times at the start.
3. Rinsing the mouth (madmadah) and nose (istinshaq/istinthar) three times each.
4. Washing each limb three times (though once is sufficient for the obligation to be fulfilled).
5. Beginning with the right side before the left for the hands and feet.
6. Wiping the ears (inner and outer) as part of, or immediately following, wiping the head, using fresh water according to some schools.
7. Al-Khilal (خِلَال — running the fingers through a thick beard and between the fingers/toes) to ensure water reaches the skin.
8. Not being wasteful with water, even if performing wudu at a large body of water, following the Prophet's guidance to his Companion Sa'd when he saw him being excessive.
9. Concluding with the Shahadah supplication, for which the Prophet promised that the eight gates of Paradise are opened for whoever says it after wudu.`,
        examples: [
          { arabic: 'إِذَا تَوَضَّأَ العَبْدُ المُسْلِمُ...', transliteration: 'When the Muslim servant performs wudu...', note: 'Hadith describing how sins depart with the water from each washed limb (Sahih Muslim 244)' },
        ],
        source: 'Sahih Muslim 234, 244; Sunan al-Tirmidhi 55',
      },
      {
        id: 'fq4r3',
        name: 'The Nullifiers of Wudu (Nawaqid al-Wudu)',
        arabic: 'نَوَاقِضُ الوُضُوء',
        level: 'intermediate',
        explanation: `A number of occurrences break wudu, requiring it to be performed again before the next prayer. The most widely agreed-upon nullifiers include:

1. Anything that exits from the two private passages — urine, feces, gas, or other discharge.
2. Deep sleep that removes awareness of one's surroundings, though a brief doze while sitting firmly (without lying down) is not considered nullifying by the majority, based on reports of the Companions dozing while waiting for prayer.
3. Loss of consciousness, whether from fainting, intoxication, or mental illness.
4. Touching one's own private parts directly with the bare palm, according to the Shafii school specifically (based on a hadith to that effect), while the Hanafi school does not consider this nullifying at all, holding a more restrictive interpretation of the relevant hadith's authenticity and wording.
5. Direct skin-to-skin contact between a man and woman who are not mahram to each other with desire, according to the Shafii school, while the Hanafi school holds that such contact does not nullify wudu unless actual sexual fluid is discharged, and the Maliki and Hanbali schools hold intermediate positions tied to whether desire (shahwah) was present.

Because the schools differ meaningfully on items 4 and 5, a student of Fiqh should recognize these as genuine areas of scholarly difference (ikhtilaf), typically resolved by following one's own school or a local scholar's guidance, rather than as settled matters of universal agreement.`,
        examples: [],
        source: 'Al-Mughni, Ibn Qudamah; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq4r4',
        name: 'Al-Mash ala al-Khuffayn (Wiping Over Socks/Leather Footwear)',
        arabic: 'المَسْحُ عَلَى الخُفَّيْن',
        level: 'intermediate',
        explanation: `As a concession (rukhsah) firmly established through numerous authentic hadith, a person who put on socks or leather footwear (khuffayn) while already in a state of wudu is permitted to wipe over them, rather than removing them and washing the bare feet, for a limited period:

1. One day and one night (24 hours) for a resident (muqim).
2. Three days and three nights (72 hours) for a traveler (musafir).

The period begins from the first time wudu is broken after putting on the footwear, not from the moment the footwear was put on. The wiping itself is performed by passing a wet hand once over the top of each foot from the toes toward the shin, without needing to wipe underneath.

Conditions for the concession to apply, according to the majority, include that the footwear was put on while in a state of complete wudu (having already washed both feet), and that the footwear covers the area normally required to be washed. Many contemporary scholars extend this concession to ordinary thick socks (jawrab) that would be impractical to remove repeatedly, following the position held by a number of Companions and later jurists, alongside the traditional ruling on leather khuffayn specifically.`,
        examples: [],
        source: 'Sahih Muslim 276; Sunan al-Tirmidhi 96',
      },
    ],
  },

  {
    id: 'fq5',
    title: 'Ghusl and Tayammum',
    arabicTitle: 'الغُسْلُ وَالتَّيَمُّم',
    icon: '🛁',
    overview: 'Beyond the minor ablution of wudu, Fiqh addresses Ghusl (الغُسْل — the major ritual bath, required after specific states) and Tayammum (التَّيَمُّم — dry ablution with clean earth, a concession when water is unavailable or harmful to use).',
    rules: [
      {
        id: 'fq5r1',
        name: 'The Causes Requiring Ghusl',
        arabic: 'مُوجِبَاتُ الغُسْل',
        level: 'foundation',
        explanation: `A number of specific states place a person in a condition of major ritual impurity (janabah or its equivalent), requiring a full ghusl before Salah, touching the mushaf, or entering a mosque (with some exceptions for brief passage) becomes valid again. These include, for both men and women:

1. Sexual intercourse, whether or not ejaculation occurs, based on the hadith "when the two circumcised parts meet, ghusl becomes obligatory."
2. The release of sexual fluid (mani) with desire, whether while awake or in a wet dream (ihtilam), even without intercourse.
3. Entering Islam (a new Muslim performing ghusl as part of, though not strictly a pillar of, their entry into the faith, per the majority view, though scholars differ on whether it is obligatory or simply recommended).

For women specifically, ghusl is additionally required at the end of:

4. Menstruation (haidh).
5. Post-natal bleeding (nifas).

Death also requires that the deceased Muslim's body be given ghusl by the community (a collective obligation, fard kifayah) before burial, following the Prophet's own instructions regarding the washing of the dead.`,
        examples: [],
        source: 'Sahih Muslim 348, 350; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq5r2',
        name: 'The Method of Ghusl',
        arabic: 'كَيْفِيَّةُ الغُسْل',
        level: 'beginner',
        explanation: `The obligatory elements of a valid ghusl, agreed upon in essence across the schools, are:

1. The intention (niyyah) of removing major impurity.
2. Water covering every part of the external body, including the roots of the hair, with no dry patch remaining (a stray unwashed area, such as under a ring or behind the ear, invalidates the ghusl until also washed).

Rinsing the mouth and nose are treated as obligatory parts of ghusl by the Hanafi school (as they are technically part of the "face" reached by the water), while the Shafii school treats them as strongly recommended rather than strictly obligatory.

The complete, most excellent method (following the description of Aisha, may Allah be pleased with her, of the Prophet's own practice) proceeds as follows: washing the hands, then washing the private parts, then performing a complete wudu (delaying the feet until the end according to some narrations), then pouring water over the head three times working it into the roots of the hair, then pouring water over the right side of the body, then the left side, ensuring the entire body is covered, and finally washing the feet if they were delayed.`,
        examples: [],
        source: 'Sahih al-Bukhari 248; Sahih Muslim 316',
      },
      {
        id: 'fq5r3',
        name: 'Tayammum (Dry Ablution)',
        arabic: 'أَحْكَامُ التَّيَمُّم',
        level: 'intermediate',
        explanation: `Tayammum is a divinely granted concession (rukhsah) allowing a Muslim to purify with clean earth or dust instead of water, established in the Quran: "If you do not find water, then seek clean earth and wipe your faces and hands with it" (Quran 5:6).

Tayammum becomes permissible under any of the following circumstances:

1. Water is genuinely unavailable, or available only in a quantity needed for drinking (for oneself, one's animals, or dependents).
2. Using water would cause harm — for example, illness that water would worsen, or extreme cold with no means of warming the water, where credible medical concern exists.
3. Water is available but inaccessible without danger, or the only water present is impure and cannot be purified.

The method of tayammum is simpler than wudu: striking both palms once on clean earth or a dust-bearing surface, then wiping the face once, then wiping the hands (the Hanafi school extends this to the forearms similar to wudu, while the Shafii and Hanbali schools require wiping only to the wrists, using a second strike of the palms for the hands specifically).

A single tayammum, according to the majority, remains valid for as long as the underlying excuse persists and no separate nullifier of wudu occurs, and it takes the full place of wudu or ghusl (including for major impurity) for as long as the excuse remains — it is not merely a partial substitute.`,
        examples: [
          { arabic: 'فَتَيَمَّمُوا صَعِيدًا طَيِّبًا', transliteration: 'Fatayammamu saidan tayyiban', note: 'Quranic command to perform tayammum with clean earth (Quran 5:6, 4:43)' },
        ],
        source: 'Quran 5:6; Sahih al-Bukhari 338; Sahih Muslim 368',
      },
    ],
  },

  {
    id: 'fq6',
    title: 'Salah: Conditions and Times',
    arabicTitle: 'شُرُوطُ الصَّلَاةِ وَمَوَاقِيتُهَا',
    icon: '🕋',
    overview: 'Salah (الصَّلَاة) is the second pillar of Islam and the most repeated act of worship in a Muslim\'s daily life. Fiqh distinguishes between the conditions that must be met before prayer begins, and the internal structure of the prayer itself — treated in the following section.',
    rules: [
      {
        id: 'fq6r1',
        name: 'The Conditions for the Validity of Salah (Shurut al-Salah)',
        arabic: 'شُرُوطُ صِحَّةِ الصَّلَاة',
        level: 'foundation',
        explanation: `Before Salah can even begin, a set of conditions (shurut) must be met, distinct from the internal pillars performed during the prayer itself:

1. Islam — Salah is a duty specific to Muslims.
2. Sanity ('aql) and reaching puberty (bulugh) for obligation to apply, though children are encouraged and, per hadith, are to be instructed to pray from age seven and lightly disciplined regarding it from age ten, to build the habit before adulthood.
3. Taharah — both from minor impurity (via wudu) and major impurity (via ghusl, when applicable), as well as purity of the body, clothing, and place of prayer from najasah.
4. Covering the awrah (عَوْرَة — the parts of the body required to be covered in prayer): for men, from the navel to the knee at minimum, though covering the shoulders is also recommended; for women, the entire body except the face and hands, according to the majority position, though the schools differ on minor details such as the feet.
5. Facing the Qiblah — the direction of the Kabah in Makkah — to the best of one's ability and knowledge, with exceptions made for genuine inability (such as being unable to determine the direction, or being in extreme danger).
6. The entry of the prescribed prayer time — a prayer performed before its time has begun is not valid, though a prayer may be delayed within its window for a valid reason.
7. Intention (niyyah) — a firm resolve in the heart to perform that specific prayer, which does not require verbal utterance according to the majority of scholars, though some later jurists in certain schools recommended a quiet verbal statement as an aid to the heart's intention.`,
        examples: [],
        source: 'Sunan Abi Dawud 495; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq6r2',
        name: 'The Five Daily Prayer Times',
        arabic: 'أَوْقَاتُ الصَّلَوَاتِ الخَمْس',
        level: 'foundation',
        explanation: `The five obligatory daily prayers and their windows of time, as established in the Sunnah, are:

1. Fajr (الفَجْر — dawn): begins at true dawn (al-fajr al-sadiq, when light spreads across the horizon) and ends at sunrise.
2. Dhuhr (الظُّهْر — midday): begins once the sun passes its zenith (declines from its highest point) and ends when the shadow of an object equals its own length (in addition to the shadow present at zenith), according to the majority (the Hanafi school traditionally extended this slightly further, to when the shadow equals twice the object's length, for the end of the preferred time, though even Hanafi scholars agree the prayer remains valid, if less preferred, before Asr begins under the majority calculation).
3. Asr (العَصْر — afternoon): begins when Dhuhr's time ends and extends until sunset, though delaying it until the sun visibly yellows and weakens is discouraged (makruh) without valid reason.
4. Maghrib (المَغْرِب — sunset): begins immediately at sunset and extends, according to the majority, until the red twilight (al-shafaq al-ahmar) disappears from the horizon.
5. Isha (العِشَاء — night): begins when Maghrib's time ends (the red twilight disappears) and extends until midnight according to some scholars, or until the true dawn according to others, based on differing interpretations of the relevant hadith, though delaying it without reason past midnight is discouraged.

Two prayer windows in which beginning a voluntary prayer is generally discouraged (though making up a missed obligatory prayer, or praying an obligatory prayer whose time has arrived, is still valid) are: from Fajr until sunrise is complete, and from Asr until sunset is complete — a precaution against practices resembling sun worship at those specific transitional times.`,
        examples: [],
        source: 'Sahih Muslim 612; Sunan al-Tirmidhi 149-151',
      },
      {
        id: 'fq6r3',
        name: 'Combining and Shortening Prayers (Al-Jam wal-Qasr)',
        arabic: 'الجَمْعُ وَالقَصْرُ فِي السَّفَر',
        level: 'intermediate',
        explanation: `Islamic law grants travelers (musafir) two related concessions, established by both the Quran and the Prophet's consistent practice:

1. Al-Qasr (القَصْر — shortening): the four-rakah prayers (Dhuhr, Asr, and Isha) are shortened to two rakahs each while traveling, based on Quran 4:101 and the Prophet's own consistent practice on every journey, which the majority hold to be a strongly emphasized Sunnah, while some scholars considered it obligatory for a genuine traveler. Fajr and Maghrib are never shortened.

2. Al-Jam (الجَمْع — combining): Dhuhr and Asr, or Maghrib and Isha, may be combined and prayed together at the time of either one (jam taqdim, combining at the earlier prayer's time, or jam takhir, combining at the later prayer's time), based on authentic hadith of the Prophet doing so while traveling, and in certain other circumstances of genuine hardship such as severe illness, heavy rain (a concession the Hanafi school does not extend to combining in the same way the other schools do, differing on this specific point), or urgent necessity, according to the majority of later jurists extending the original travel-based concession by analogy to comparable hardship.

The distance or duration that qualifies a person as a "traveler" for these purposes is a matter of some difference among the schools — ranging from roughly 48 miles in the Hanafi school's classical calculation to shorter distances in others — though all agree the concessions apply once a person has left the boundaries of their home town or city with the intention of a genuine journey.`,
        examples: [
          { arabic: 'فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا مِنَ الصَّلَاة', transliteration: '"There is no blame upon you for shortening the prayer" — Quran 4:101', note: 'The Quranic basis for Qasr while traveling' },
        ],
        source: 'Quran 4:101; Sahih Muslim 685-706',
      },
    ],
  },

  {
    id: 'fq7',
    title: 'Salah: Pillars and Structure',
    arabicTitle: 'أَرْكَانُ الصَّلَاةِ وَوَاجِبَاتُهَا',
    icon: '🤲',
    overview: 'Once the conditions for Salah are met, the prayer itself is composed of pillars (arkan, whose omission invalidates the prayer entirely and cannot be compensated), obligatory acts (wajibat, whose accidental omission is compensated by the prostration of forgetfulness), and recommended acts (sunan, which perfect the prayer\'s reward without affecting its validity).',
    rules: [
      {
        id: 'fq7r1',
        name: 'The Pillars of Salah (Arkan al-Salah)',
        arabic: 'أَرْكَانُ الصَّلَاة',
        level: 'foundation',
        explanation: `The pillars are the essential, non-negotiable components of the prayer — omitting even one, whether deliberately or forgetfully, invalidates that rakah (unit of prayer) unless corrected before proceeding. According to the Shafii and Hanbali schools, they include:

1. Standing (al-qiyam) for one who is able, for the obligatory prayers.
2. The opening Takbir (تَكْبِيرَةُ الإِحْرَام — "Allahu Akbar," entering the state of prayer).
3. Reciting Surah al-Fatihah in every rakah.
4. Bowing (ruku).
5. Rising from bowing (i'tidal, standing straight again).
6. Prostration (sujud) on the seven bodily points (forehead with nose, both palms, both knees, and the toes of both feet).
7. Sitting between the two prostrations.
8. The final sitting (al-tashahhud al-akhir) along with reciting it.
9. Sending blessings upon the Prophet (al-salah ala al-nabi) in the final tashahhud, according to the Shafii school specifically, while other schools consider this a strongly emphasized obligation (wajib) rather than a strict pillar.
10. The concluding Tasleem (تَسْلِيم — turning to say "Assalamu alaykum wa rahmatullah" to conclude the prayer).
11. Performing these pillars in the correct order (tartib).
12. Tranquility (tuma'ninah) — pausing briefly and calmly in each posture rather than rushing through the movements, based on the Prophet's correction of a man who prayed too quickly, telling him "go back and pray, for you have not prayed."

The Hanafi school treats a somewhat shorter list as strict pillars (fard), classifying several of the above — such as reciting al-Fatihah specifically, the final tashahhud's exact wording, and the tasleem — as wajib (obligatory but compensable by the prostration of forgetfulness if missed unintentionally) rather than fard, reflecting a difference in the strength of the textual evidence each school assigns to these elements.`,
        examples: [],
        source: 'Sahih al-Bukhari 757; Sahih Muslim 397; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq7r2',
        name: 'Sujud al-Sahw (The Prostration of Forgetfulness)',
        arabic: 'سُجُودُ السَّهْو',
        level: 'intermediate',
        explanation: `Because human beings are prone to forgetfulness, the Sharia provides a corrective mechanism for minor, unintentional errors during prayer: two extra prostrations performed either before or after the final tasleem, depending on the nature of the error.

Sujud al-Sahw is generally prescribed in three situations:

1. Ziyadah (زِيَادَة — an unintentional addition): performing an extra rakah, ruku, or sujud by mistake. The correction is typically performed after the tasleem.

2. Naqs (نَقْص — an unintentional omission): forgetting an obligatory act (wajib), such as a portion of the tashahhud in schools that classify it as wajib rather than fard. The correction is typically performed before the tasleem, and if the missed element is remembered while still in a position to return to it before moving further, it should be performed then instead.

3. Shakk (شَكّ — doubt): being genuinely uncertain about the number of rakahs prayed. The general guidance from the Prophet is to act upon the lower, more certain number, complete the prayer accordingly, and then perform the prostration after the tasleem as a precaution.

If a pillar (rukn) of the prayer — rather than merely a wajib or sunnah — is omitted entirely and not corrected before the prayer concludes, the prayer itself must be repeated; Sujud al-Sahw is a remedy for lesser errors, not a substitute for a missing pillar.`,
        examples: [],
        source: 'Sahih al-Bukhari 401, 1226-1230; Sahih Muslim 571-572',
      },
      {
        id: 'fq7r3',
        name: 'Nullifiers of the Prayer (Mubtilat al-Salah)',
        arabic: 'مُبْطِلَاتُ الصَّلَاة',
        level: 'intermediate',
        explanation: `A number of actions, if performed deliberately and knowingly during Salah, invalidate the prayer, requiring it to be restarted:

1. Speaking words unrelated to the prayer, deliberately and with knowledge of the ruling — accidental or forgetful speech, or speech due to genuine ignorance of the ruling, is generally excused according to the majority, based on the incident of a Companion who spoke during prayer out of ignorance and was gently corrected rather than told to repeat the prayer.

2. Eating or drinking, even a small amount, deliberately.

3. Excessive, non-prayer-related movement (amal kathir) that would lead an onlooker to conclude the person is no longer praying — a few small movements, such as adjusting clothing or dealing with a minor distraction, do not invalidate the prayer.

4. Losing wudu (through any of its nullifiers) during the prayer.

5. Exposing the awrah in a way that is not immediately and briefly corrected.

6. Turning the chest deliberately away from the direction of the Qiblah without valid excuse.

7. Laughing audibly (qahqahah) — according to the majority, this both breaks the prayer and, in the Hanafi school's specific classical position, was held to break wudu as well, a minority position not held by the other schools regarding wudu specifically.

Because these matters involve real differences in scope and detail between the schools — especially regarding what counts as "excessive movement" or which forgetful acts are excused — a student of Fiqh benefits from studying the specific positions of their own school or consulting a qualified local scholar for exact application.`,
        examples: [],
        source: 'Sahih Muslim 537; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq7r4',
        name: 'Salat al-Jamaah (Congregational Prayer) and Jumuah',
        arabic: 'صَلَاةُ الجَمَاعَةِ وَالجُمُعَة',
        level: 'intermediate',
        explanation: `Praying in congregation carries immense virtue in Islam, with the Prophet stating that it is twenty-five (in some narrations, twenty-seven) times greater in reward than praying alone. Scholars differ on its precise ruling for men praying the five daily prayers: the Hanbali school and a position within the Shafii school hold it to be a strict individual obligation (fard ayn) for men who are able, while the Hanafi and Maliki schools, along with another position in the Shafii school, hold it to be a strongly emphasized communal obligation (fard kifayah or sunnah muakkadah) — all schools, however, strongly encourage it and consider abandoning it habitually without excuse to be blameworthy.

Salat al-Jumuah (صَلَاةُ الجُمُعَة — the Friday prayer) replaces Dhuhr on Fridays and is obligatory upon adult, free, resident, sane Muslim men who are not legitimately excused (such as by illness or necessary travel), based on Quran 62:9. It consists of two rakahs preceded by a sermon (khutbah) delivered by the imam in two parts, and requires a minimum number of attendees for validity — a number the schools differ on, ranging from as few as three beyond the imam in some views to forty in others, reflecting different readings of the relevant reports and the underlying purpose of communal gathering.

Women are not obligated to attend Jumuah or congregational prayer, though they are permitted and, historically, some did attend during the Prophet's time, and it remains recommended and rewarded for them to do so if convenient and comfortable, particularly at home congregational prayer with family.`,
        examples: [],
        source: 'Quran 62:9; Sahih al-Bukhari 645; Sahih Muslim 650',
      },
    ],
  },

  {
    id: 'fq8',
    title: 'Voluntary Prayers and Special Prayers',
    arabicTitle: 'صَلَاةُ النَّوَافِلِ وَالصَّلَوَاتُ الخَاصَّة',
    icon: '🌙',
    overview: 'Beyond the five obligatory daily prayers, the Sunnah establishes a rich tradition of voluntary prayers (nawafil) that increase reward and draw the servant closer to Allah, alongside special prayers tied to particular occasions or circumstances.',
    rules: [
      {
        id: 'fq8r1',
        name: 'Al-Sunan al-Rawatib (The Regular Voluntary Prayers)',
        arabic: 'السُّنَنُ الرَّوَاتِب',
        level: 'beginner',
        explanation: `Al-Sunan al-Rawatib are the fixed voluntary prayers regularly attached before or after specific obligatory prayers, most strongly emphasized among all voluntary prayers. Based on the well-known hadith of Umm Habibah, the Prophet described twelve such rakahs as guaranteeing a house built for the reciter in Paradise:

1. Two rakahs before Fajr (considered the most emphasized of all the rawatib, described by the Prophet as "better than the world and everything in it").
2. Four rakahs before Dhuhr and two after (some narrations mention four before and four after).
3. Two rakahs after Maghrib.
4. Two rakahs after Isha.

Beyond the twelve rakahs of the well-known hadith, four rakahs before Asr are also recorded as a practice the Prophet encouraged, though with somewhat less emphasis than the core twelve.

These prayers are distinguished from Salat al-Duha (the mid-morning prayer, performed any time after sunrise has fully risen until just before Dhuhr) and Salat al-Tahajjud/Qiyam al-Layl (voluntary night prayer, especially emphasized in the last third of the night), both of which are separately and strongly recommended but not tied to a specific obligatory prayer.`,
        examples: [],
        source: 'Sahih Muslim 728; Sunan al-Tirmidhi 414',
      },
      {
        id: 'fq8r2',
        name: 'Salat al-Witr and Qiyam al-Layl',
        arabic: 'صَلَاةُ الوِتْرِ وَقِيَامُ اللَّيْل',
        level: 'beginner',
        explanation: `Salat al-Witr (صَلَاةُ الوِتْر — the "odd" prayer) is a voluntary prayer performed after Isha and before Fajr, consisting of an odd number of rakahs (one, three, five, seven, or more), and closing the night's voluntary prayers. Its precise ruling is a point of difference: the Hanafi school holds it to be wajib (obligatory, though of a lesser degree than fard), while the majority of the other schools hold it to be a strongly emphasized sunnah, based on the weight each school assigns to the various hadith describing the Prophet's own consistent, near-unbroken practice of it.

Qiyam al-Layl (قِيَامُ اللَّيْل — standing/praying in the night), also called Tahajjud, refers to voluntary prayer performed after waking from sleep during the night, especially emphasized in the last third of the night, when the Prophet described Allah as descending (in a manner befitting His majesty, without resembling creation) to respond to the supplications of those who call upon Him. During Ramadan specifically, this same category of night prayer is performed in congregation and is popularly known as Salat al-Tarawih.

The Witr prayer is typically concluded with the Qunut supplication in its final rakah, particularly emphasized in the Hanafi and Shafii schools as a regular practice, while other schools treat it as occasional or tied to specific circumstances such as a calamity befalling the Muslim community (Qunut al-Nazilah).`,
        examples: [],
        source: 'Sahih al-Bukhari 998, 1145; Sunan al-Tirmidhi 453',
      },
      {
        id: 'fq8r3',
        name: 'Salat al-Janazah (The Funeral Prayer)',
        arabic: 'صَلَاةُ الجَنَازَة',
        level: 'intermediate',
        explanation: `Salat al-Janazah is a communal obligation (fard kifayah) performed for a deceased Muslim, distinguished from the ordinary daily prayers by having no ruku, sujud, or sitting — it consists entirely of standing, with four Takbirs, interspersed with specific supplications:

1. First Takbir: followed by reciting Surah al-Fatihah (and, according to some scholars, a short additional surah).
2. Second Takbir: followed by sending blessings upon the Prophet, typically the same wording as in the tashahhud (al-salah al-ibrahimiyyah).
3. Third Takbir: followed by a supplication for the deceased, asking Allah for forgiveness, mercy, and a good outcome — a well-known example being the supplication reported from the Prophet beginning "Allahumma-ghfir lahu warhamh..."
4. Fourth Takbir: followed by a brief pause and then the concluding Tasleem, turning to the right (and, according to some schools, also to the left).

The prayer is generally performed standing outside the mosque or in a designated area, though performing it inside the mosque is also valid according to the majority. If the deceased is a child who died before reaching puberty, the supplication after the third Takbir shifts to asking Allah to make the child a means of intercession, reward, and comfort for the parents rather than a plea for the child's own forgiveness, since a child who has not reached the age of accountability is not subject to sin in the same way.`,
        examples: [],
        source: 'Sahih Muslim 963; Sunan Abi Dawud 3199',
      },
    ],
  },

  {
    id: 'fq9',
    title: 'Zakah (Obligatory Charity)',
    arabicTitle: 'أَحْكَامُ الزَّكَاة',
    icon: '💰',
    overview: 'Zakah (زَكَاة) is the third pillar of Islam, an obligatory annual purification of wealth paid by those who meet a minimum threshold (nisab), redistributed to specific categories of recipients defined in the Quran. It is distinct from voluntary charity (sadaqah) in being a fixed, calculated religious duty rather than an optional act of generosity.',
    rules: [
      {
        id: 'fq9r1',
        name: 'The Categories of Zakatable Wealth and Nisab',
        arabic: 'أَنْوَاعُ المَالِ الزَّكَوِيّ وَالنِّصَاب',
        level: 'foundation',
        explanation: `Zakah becomes obligatory once wealth of a zakatable category reaches its nisab (نِصَاب — minimum threshold) and has been held for a full lunar year (hawl) — with certain categories, such as agricultural produce, being exempt from the hawl requirement and instead due at the time of harvest. The main categories are:

1. Gold and silver, and cash/bank savings by analogy: the nisab for gold is approximately 85 grams, and for silver approximately 595 grams (figures vary slightly by scholarly calculation methods); the zakah due is 2.5% of the total value held for a full year above the nisab.

2. Livestock (grazing animals such as camels, cattle, sheep, and goats raised primarily for growth/trade rather than personal labor), with detailed, specific nisab thresholds and corresponding amounts due for each type and quantity, laid out extensively in the hadith literature.

3. Agricultural produce (crops and fruits that are stored and measured, such as grains and dates): the nisab is roughly 653 kg, with 10% due if the land was rain-irrigated (requiring no extra labor/cost for watering) or 5% due if it was irrigated through paid labor or machinery, based on the Prophet's statement distinguishing the two cases.

4. Trade goods ('urud al-tijarah): merchandise held for the purpose of buying and selling is valued at its current market price at the end of the zakah year, and 2.5% of that total value is due, treated similarly to cash for nisab purposes.

5. Buried treasure (rikaz) and mined minerals: zakah on found treasure is due immediately upon discovery at a rate of 20% (khums), distinct from the standard 2.5%, based on its resemblance to a windfall gain rather than accumulated wealth.

Zakah is due only on wealth that is fully owned, in excess of one's basic needs and debts, and has been held for the qualifying period — someone whose wealth does not reach the nisab, or whose debts exceed their zakatable assets, is not obligated to pay.`,
        examples: [],
        source: 'Sahih al-Bukhari 1454-1483; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq9r2',
        name: 'The Eight Categories of Zakah Recipients',
        arabic: 'مَصَارِفُ الزَّكَاةِ الثَّمَانِيَة',
        level: 'foundation',
        explanation: `The Quran explicitly enumerates the eight categories eligible to receive Zakah, closing the verse with the statement that this is "an obligation from Allah" (Quran 9:60), leaving no room for personal reallocation beyond these groups:

1. Al-Fuqara (الفُقَرَاء — the poor): those with very little or no means of sustenance.
2. Al-Masakin (المَسَاكِين — the needy): those with some means but insufficient to meet their basic needs, generally considered in a slightly less dire situation than the fuqara, though scholars differ on the precise distinction between the two terms.
3. Al-Amilina Alayha (العَامِلِينَ عَلَيْهَا — those who administer/collect it): individuals appointed to collect and distribute zakah on behalf of the community or state, compensated from the zakah funds for their work.
4. Al-Muallafati Qulubuhum (المُؤَلَّفَةِ قُلُوبُهُم — those whose hearts are to be reconciled): new Muslims, or those inclined toward Islam, whose support strengthens the standing of the faith or the Muslim community.
5. Fi al-Riqab (فِي الرِّقَاب — freeing those in bondage): historically applied to freeing slaves; contemporary scholars discuss its application to analogous situations of captivity or bonded servitude where relevant.
6. Al-Gharimin (الغَارِمِين — those in debt): individuals burdened by legitimate debt they cannot repay, whether incurred for personal necessity or for reconciling disputes between others.
7. Fi Sabilillah (فِي سَبِيلِ اللَّه — in the path of Allah): scholars discuss the precise scope of this category, with the classical majority applying it primarily to those engaged in legitimate defensive struggle, while some later and contemporary scholars extend it, by analogy, to broader efforts serving the interest of Islam and the Muslim community, such as Islamic education — a matter of continued scholarly discussion.
8. Ibn al-Sabil (اِبْنِ السَّبِيل — the stranded traveler): a traveler who has run out of means to continue or return home, even if wealthy in their own country.`,
        examples: [
          { arabic: 'إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالمَسَاكِينِ...', transliteration: 'Innamas-sadaqatu lil-fuqara\'i wal-masakin...', note: 'Opening of the verse enumerating the eight categories (Quran 9:60)' },
        ],
        source: 'Quran 9:60; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq9r3',
        name: 'Zakat al-Fitr',
        arabic: 'زَكَاةُ الفِطْر',
        level: 'beginner',
        explanation: `Zakat al-Fitr is distinct from the annual Zakah on wealth: it is a fixed, small obligatory charity due from every Muslim, paid before the Eid al-Fitr prayer at the conclusion of Ramadan, regardless of whether a person otherwise meets the nisab for wealth-based Zakah, so long as they possess more than their basic needs for that day and night.

Its purpose, as described in hadith, is twofold: purification for the fasting person from any idle or indecent speech committed during Ramadan, and provision for the poor so that they too may partake in the joy of Eid.

The head of a household pays it on behalf of themselves and their dependents (spouse, children, and others they financially support), and the amount is traditionally set at one sa' (a volume measure, roughly 2.5-3 kg depending on the staple food and school of calculation) of the staple food of the land — such as dates, wheat, rice, or barley — though many contemporary scholars also permit paying its cash equivalent, particularly where in-kind distribution is impractical, a position especially associated with the Hanafi school even in classical times.

It must be paid before the Eid prayer for full reward; if delayed past the prayer without valid excuse, it is still owed but counted merely as ordinary charity (sadaqah) rather than fulfilling the specific obligation of Zakat al-Fitr.`,
        examples: [],
        source: 'Sunan Abi Dawud 1609; Sahih al-Bukhari 1503-1512',
      },
    ],
  },

  {
    id: 'fq10',
    title: 'Sawm (Fasting)',
    arabicTitle: 'أَحْكَامُ الصِّيَام',
    icon: '🌙',
    overview: 'Sawm (صِيَام — fasting), particularly the obligatory fast of Ramadan, is the fourth pillar of Islam, established directly in the Quran (2:183). Fiqh addresses who is obligated to fast, what invalidates the fast, and the various categories of voluntary and expiatory fasting beyond Ramadan.',
    rules: [
      {
        id: 'fq10r1',
        name: 'The Obligation and Definition of Fasting',
        arabic: 'حُكْمُ الصِّيَامِ وَتَعْرِيفُهُ',
        level: 'foundation',
        explanation: `Fasting is defined in Fiqh as abstaining, with the intention of worship, from food, drink, and marital intimacy from the true dawn (al-fajr al-sadiq) until sunset. The obligation of fasting the month of Ramadan is established directly in the Quran: "O you who believe, fasting has been prescribed for you as it was prescribed for those before you, that you may attain taqwa" (Quran 2:183).

Fasting Ramadan is obligatory upon every Muslim who is sane, has reached puberty, and is physically able, with the following categories exempted or granted concessions:

1. A traveler (musafir) making a genuine journey may break the fast and make up the missed days later, based on the same Quranic verse that grants this concession explicitly.
2. A person who is ill, where fasting would cause genuine harm or significantly worsen their condition, may likewise break the fast and make up the days later once recovered.
3. A menstruating or post-natal bleeding woman is required to break her fast during that state (fasting in such a state is not valid) and make up the missed days afterward.
4. A pregnant or nursing woman who fears harm to herself or her child from fasting may break the fast; scholars differ on whether she owes only make-up days later, or make-up days plus fidyah (feeding a poor person for each day), depending on whether her concern is for herself or specifically for the child's wellbeing.
5. An elderly person or someone with a chronic illness with no reasonable hope of recovery is exempted from fasting itself and instead pays fidyah — feeding one poor person for each day missed — rather than making up the days later, since they are not expected to regain the ability to fast.

A child below puberty is not obligated but is encouraged to practice fasting gradually as preparation, similar to the gradual introduction of prayer.`,
        examples: [],
        source: 'Quran 2:183-185; Sahih al-Bukhari 1791-1795',
      },
      {
        id: 'fq10r2',
        name: 'Nullifiers of the Fast (Muftirat al-Sawm)',
        arabic: 'مُفْطِرَاتُ الصِّيَام',
        level: 'intermediate',
        explanation: `A number of matters break the fast if done deliberately, knowingly, and by one's own choice during the fasting hours:

1. Eating or drinking anything, deliberately.
2. Deliberate vomiting (accidental vomiting does not break the fast, per the hadith "whoever is overcome by vomiting owes no make-up, but whoever induces vomiting deliberately must make up the day").
3. Sexual intercourse, which additionally requires a severe expiation (kaffarah) beyond simply making up the day — traditionally, freeing a slave, or if unable, fasting sixty consecutive days, or if unable, feeding sixty poor people — based on the well-known hadith of the man who came to the Prophet in evident distress after breaking his fast in Ramadan in this way.
4. Menstruation or post-natal bleeding beginning during the fasting day, even moments before sunset.
5. Injecting nutritive substances intravenously, according to the majority of contemporary scholars, since this provides nourishment in a manner analogous to eating, while non-nutritive medical injections (such as vaccines or medication that does not nourish the body) are generally not considered to break the fast.

Matters that do NOT break the fast, contrary to some popular misconceptions, include: forgetfully eating or drinking (the Prophet stated such a person should simply complete their fast, "for Allah has fed him and given him drink"), an involuntary emission or wet dream, having a blood test or non-nutritive injection, using eye drops or ear drops according to the majority, and swallowing one's own saliva.`,
        examples: [
          { arabic: 'مَنْ نَسِيَ وَهُوَ صَائِمٌ فَأَكَلَ أَوْ شَرِبَ...', transliteration: 'Whoever forgets while fasting and eats or drinks...', note: 'Hadith establishing that forgetful eating/drinking does not break the fast (Sahih al-Bukhari 1933)' },
        ],
        source: 'Sahih al-Bukhari 1933, 1936; Sahih Muslim 1111',
      },
      {
        id: 'fq10r3',
        name: 'Voluntary Fasting and Its Recommended Times',
        arabic: 'صِيَامُ التَّطَوُّعِ وَأَوْقَاتُهُ المُسْتَحَبَّة',
        level: 'beginner',
        explanation: `Beyond the obligatory fast of Ramadan and make-up fasting, the Sunnah encourages numerous voluntary fasts throughout the year, among the most emphasized being:

1. Six days of Shawwal (following immediately after Eid al-Fitr): the Prophet stated that fasting Ramadan followed by six days of Shawwal is equivalent in reward to fasting the entire year, based on the principle that a good deed is rewarded tenfold.

2. The Day of Arafah (9th of Dhul-Hijjah), for those not performing Hajj: the Prophet stated this fast expiates the sins of the previous year and the coming year.

3. The Day of Ashura (10th of Muharram), ideally paired with fasting the 9th (Tasu'a) as well to distinguish the practice from that of the Jewish community's fast on that day alone, historically observed before this instruction, per the Prophet's own stated intention.

4. Mondays and Thursdays of each week, since deeds are presented to Allah on these days, and the Prophet loved for his deeds to be presented while he was fasting.

5. The three "White Days" (Ayyam al-Bid) of each lunar month — the 13th, 14th, and 15th — when the moon is full.

6. Fasting on alternate days (Sawm Dawud, the "fast of Dawud"), described by the Prophet as the most beloved form of voluntary fasting to Allah.

Fasting is discouraged or prohibited on specific days: the two days of Eid (Eid al-Fitr and Eid al-Adha) are unanimously forbidden to fast, and singling out only Friday for a voluntary fast (without fasting the day before or after) is discouraged according to hadith, out of concern for treating that day with undue exclusivity.`,
        examples: [],
        source: 'Sahih Muslim 1162, 1164; Sunan Abi Dawud 2437',
      },
    ],
  },

  {
    id: 'fq11',
    title: 'Hajj and Umrah',
    arabicTitle: 'أَحْكَامُ الحَجِّ وَالعُمْرَة',
    icon: '🕋',
    overview: 'Hajj (الحَجّ — the pilgrimage to Makkah) is the fifth pillar of Islam, obligatory once in a lifetime upon every Muslim who is physically and financially able. Umrah (العُمْرَة — the "lesser pilgrimage") shares many of the same rites but can be performed at any time of year and is not tied to the specific days of Hajj.',
    rules: [
      {
        id: 'fq11r1',
        name: 'The Obligation and Conditions of Hajj',
        arabic: 'حُكْمُ الحَجِّ وَشُرُوطُهُ',
        level: 'foundation',
        explanation: `Hajj is established as obligatory in the Quran: "And [due] to Allah from the people is a pilgrimage to the House — for whoever is able to find thereto a way" (Quran 3:97). It is obligatory once in a lifetime, with any additional performances counted as voluntary.

The conditions (shurut) for Hajj to become obligatory upon a person are:

1. Islam.
2. Sanity ('aql).
3. Reaching puberty (bulugh) — a child who performs Hajj before puberty has a valid, rewarded Hajj, but it does not fulfill the later obligation once they reach adulthood; they must perform it again if able.
4. Freedom (in the historical context of slavery, not being enslaved).
5. Physical ability (istitaah badaniyyah): being physically capable of undertaking the journey and the rites; a person permanently unable due to old age or chronic illness may, according to the majority, send someone else to perform Hajj on their behalf (Hajj al-Badal), provided that representative has already performed their own obligatory Hajj first.
6. Financial ability (istitaah maliyyah): possessing sufficient wealth to cover the costs of the journey and the pilgrimage, beyond one's basic needs and the needs of one's dependents, and without incurring impermissible debt to do so.
7. For a woman, according to the majority of scholars, being accompanied by a mahram (a husband or an unmarriageable close relative) for the journey, reflecting concern for a woman's safety on what was historically an arduous and lengthy journey — though scholars discuss modern contexts of organized, secure group travel, and some contemporary jurists permit a woman to travel with a trustworthy group of other women in the absence of a mahram, particularly the Hanafi school's position when a safe group is verified, though this remains a point of continued discussion.`,
        examples: [],
        source: 'Quran 3:97; Sahih al-Bukhari 1513; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq11r2',
        name: 'The Pillars of Hajj (Arkan al-Hajj)',
        arabic: 'أَرْكَانُ الحَجّ',
        level: 'intermediate',
        explanation: `The pillars of Hajj are essential components whose omission invalidates the Hajj entirely and cannot be compensated by an expiatory offering (unlike the obligatory acts, discussed separately, whose omission is compensated by a sacrifice):

1. Ihram (الإِحْرَام — the sacred state entered with intention, at or before the designated boundary points called Miqat): though some classify Ihram as a condition rather than a pillar, all agree the Hajj cannot proceed validly without it.

2. Wuquf bi-Arafah (الوُقُوف بِعَرَفَة — standing at the plain of Arafah): present for any portion of time between the afternoon of the 9th of Dhul-Hijjah and the dawn of the 10th. The Prophet's statement "Hajj is Arafah" underscores that missing this single pillar means the Hajj itself has been missed for that year, with no possible substitution.

3. Tawaf al-Ifadah (طَوَافُ الإِفَاضَة — the pilgrimage circumambulation): circling the Kabah seven times, performed after returning from Arafah and Muzdalifah, typically on the 10th of Dhul-Hijjah or the days following.

4. Sa'i (السَّعْي — walking between Safa and Marwah): walking seven times between the two hills of Safa and Marwah, commemorating Hajar's search for water for her son Ismail, upon them be peace.

Beyond these pillars, a set of obligatory acts (wajibat) — including spending the night at Muzdalifah, stoning the Jamarat, shaving or trimming the hair, and staying overnight at Mina during the Days of Tashriq — must also be performed; omitting one of these, unlike a pillar, is compensated by an expiatory sacrifice (dam) rather than invalidating the Hajj.`,
        examples: [],
        source: 'Sunan al-Tirmidhi 889; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq11r3',
        name: 'The Three Forms of Hajj: Ifrad, Tamattu, and Qiran',
        arabic: 'أَنْسَاكُ الحَجّ: الإِفْرَادُ وَالتَّمَتُّعُ وَالقِرَان',
        level: 'advanced',
        explanation: `A pilgrim intending Hajj chooses among three valid forms (ansuk) at the time of entering Ihram, each with slightly different requirements:

1. Al-Ifrad (الإِفْرَاد — performing Hajj alone): the pilgrim enters Ihram with the intention of Hajj only, performs all its rites, and does not perform Umrah separately during the same trip (or performs it afterward, outside the Hajj rites). No sacrificial offering (hady) is obligatory for this form specifically.

2. Al-Tamattu (التَّمَتُّع — "enjoyment," combining Umrah and Hajj with a release in between): the pilgrim enters Ihram with the intention of Umrah first during the Hajj season, completes Umrah's rites and exits Ihram entirely, then re-enters a fresh Ihram for Hajj alone later within the same season. This form requires a sacrificial offering (hady) as gratitude for the concession of exiting Ihram in between.

3. Al-Qiran (القِرَان — "combining"): the pilgrim enters Ihram with the combined intention of both Umrah and Hajj together from the start, and remains in the single, unbroken state of Ihram until all the rites of both are completed together. This form also requires a sacrificial offering (hady), similar to Tamattu.

The majority of the Companions and later scholars considered Tamattu the most straightforward and commonly recommended form for those coming from outside Makkah without bringing a sacrificial animal along with them from home, though all three forms are valid and were practiced or approved by the Prophet and his Companions.`,
        examples: [],
        source: 'Sahih al-Bukhari 1562-1571; Sahih Muslim 1211',
      },
      {
        id: 'fq11r4',
        name: 'Umrah and Its Rites',
        arabic: 'أَحْكَامُ العُمْرَة',
        level: 'beginner',
        explanation: `Umrah (العُمْرَة — the "lesser pilgrimage") consists of a smaller set of rites than Hajj and may be performed at any time of the year, though performing it during Ramadan carries special virtue, described by the Prophet as equivalent in reward to performing Hajj (though not fulfilling the actual obligation of Hajj itself).

The rites of Umrah are:

1. Entering Ihram with the intention of Umrah at or before the designated Miqat boundary.
2. Tawaf: circling the Kabah seven times.
3. Sa'i: walking seven times between Safa and Marwah.
4. Halq or Taqsir: shaving the head completely (halq) or trimming the hair (taqsir), with shaving generally considered more virtuous for men, while women trim only a small portion of their hair rather than shaving.

Once these steps are complete, the state of Ihram ends and all restrictions associated with it (avoiding perfume, cutting hair or nails, hunting, marital intimacy, and certain clothing restrictions for men) are lifted.

Scholars differ on whether Umrah itself is obligatory at least once in a lifetime (a position held by the Shafii and Hanbali schools, based on Quran 2:196 reading the command to "complete the Hajj and Umrah for Allah" as establishing both as obligatory) or merely a strongly recommended sunnah (the position of the Hanafi and Maliki schools, who read the same verse as addressing how to complete Hajj and Umrah once undertaken, rather than establishing Umrah's own independent obligation).`,
        examples: [],
        source: 'Quran 2:196; Sahih al-Bukhari 1773; Sahih Muslim 1256',
      },
    ],
  },

  {
    id: 'fq12',
    title: 'Nikah (Marriage)',
    arabicTitle: 'أَحْكَامُ النِّكَاح',
    icon: '💍',
    overview: 'Nikah (النِّكَاح — marriage) is described in the Quran as a solemn covenant (mithaqan ghalizhan) and is the foundation of family life in Islam. Fiqh addresses the conditions for a valid marriage contract, the rights and responsibilities it establishes, and the categories of people who may not marry each other.',
    rules: [
      {
        id: 'fq12r1',
        name: 'The Pillars and Conditions of a Valid Marriage Contract',
        arabic: 'أَرْكَانُ عَقْدِ النِّكَاحِ وَشُرُوطُهُ',
        level: 'foundation',
        explanation: `A valid Nikah contract requires the following elements, agreed upon in essence across the schools with some variation in detail:

1. Al-Ijab wal-Qabul (الإِيجَابُ وَالقَبُول — offer and acceptance): a clear verbal offer of marriage from the woman's guardian (wali) or her authorized representative, and a clear acceptance from the groom, in the same sitting or without significant separation between the two statements.

2. Al-Wali (الوَلِيّ — the guardian): the presence and consent of the bride's legal guardian (typically her father, or another qualified male relative in his absence) is required for validity according to the majority of schools (Shafii, Maliki, and Hanbali), based on the hadith "There is no marriage without a guardian." The Hanafi school holds that a mature, sane adult woman may contract her own marriage without a guardian's involvement, though even the Hanafi school considers it recommended and grants the guardian a right of objection in cases of clear unsuitability (kafa'ah).

3. Two Witnesses (al-shahidan): the majority of schools require the marriage to be witnessed by two adult, sane, upright male witnesses (or, according to some scholars, one man and two women), based on the hadith "There is no marriage except with a guardian and two witnesses of good character." The Maliki school's classical position placed emphasis on public announcement (ilan) rather than strictly requiring formal witnesses at the contract session itself, though publicizing the marriage is unanimously recommended.

4. Al-Mahr (المَهْر — the dowry): a mandatory gift from the groom to the bride, of any mutually agreed value, which becomes the bride's exclusive property. While specifying it at the time of the contract is strongly recommended, a marriage remains valid even if the amount was not specified, with a "fair dowry" (mahr al-mithl, comparable to what similar women in her family/society receive) then owed.

5. Absence of a prohibiting factor: neither party may be within a degree of relation (nasab, radaah, or affinity) that permanently or temporarily prohibits marriage between them, discussed further below.`,
        examples: [],
        source: 'Sunan Abi Dawud 2085; Sunan al-Tirmidhi 1101; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq12r2',
        name: 'The Permanently and Temporarily Prohibited Categories (Al-Muharramat)',
        arabic: 'المُحَرَّمَاتُ مِنَ النِّسَاءِ فِي النِّكَاح',
        level: 'intermediate',
        explanation: `The Quran, primarily in Surah al-Nisa (4:22-24), enumerates the women a man is permanently forbidden to marry, divided into three categories:

1. Prohibited by lineage (nasab): mothers (and grandmothers upward), daughters (and granddaughters downward), sisters, paternal and maternal aunts, and nieces (brothers' and sisters' daughters, and their descendants).

2. Prohibited by breastfeeding (radaah): a woman who nursed a child within the recognized period (generally the first two years of life, per the majority) becomes that child's foster mother, and the same prohibited categories of lineage apply by analogy to the foster relationship, based on the hadith "What is prohibited by lineage is prohibited by breastfeeding."

3. Prohibited by marital affinity (musaharah): a man's mother-in-law (permanently prohibited upon consummation of marriage to her daughter, and according to some scholars upon the contract alone), his stepdaughter (if he has consummated marriage with her mother), his son's wife (daughter-in-law), and his father's wife (stepmother), the latter two prohibited immediately upon the contract, without need for consummation.

Beyond these permanent prohibitions, certain combinations are temporarily prohibited — such as marrying a woman and her sister simultaneously (though not sequentially, after a valid divorce or the sister's death), or marrying a fifth wife while already validly married to four, or marrying a woman who is already validly married to another man, or a woman still in her waiting period (iddah) from a previous marriage. A Muslim man is also permitted, per the Quran, to marry a chaste woman from the People of the Book (Jews and Christians), while a Muslim woman is not permitted to marry outside Islam, a position of near-universal scholarly consensus rooted in the differing roles and responsibilities the Sharia assigns within the marriage regarding religious guardianship of the household.`,
        examples: [],
        source: 'Quran 4:22-24; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq12r3',
        name: 'The Mutual Rights and Responsibilities of Spouses',
        arabic: 'حُقُوقُ الزَّوْجَيْنِ وَوَاجِبَاتُهُمَا',
        level: 'foundation',
        explanation: `Islamic law establishes a framework of reciprocal rights and duties between husband and wife, grounded in the Quranic description of spouses as "garments for one another" (Quran 2:187) and the principle that women have rights similar to their obligations in a just and honorable manner (Quran 2:228).

Rights of the wife, obligatory upon the husband, include:

1. Nafaqah (نَفَقَة — financial maintenance): food, clothing, and suitable housing, commensurate with the husband's means and local custom, regardless of the wife's own personal wealth, which remains entirely her own property that she is not obligated to spend on the household.
2. Good treatment and companionship, based on the Quranic command to "live with them in kindness" (Quran 4:19) and the Prophet's statement that the best of believers are those best in character to their wives.
3. Fair and equal treatment among co-wives, in cases of polygynous marriage, particularly regarding material provisions, housing, and time, though the Quran acknowledges that perfect equality of the heart's inclination is beyond human control (Quran 4:129).
4. Not being harmed physically or verbally, and the right to seek judicial dissolution of the marriage (khula or faskh) in cases of genuine harm, according to the procedures recognized by her school of Fiqh.

Rights of the husband, obligatory upon the wife, include:

1. Obedience in matters that are lawful and reasonable, particularly regarding the intimate relationship and not leaving the home without valid reason or his knowledge, within the framework of the marriage as a partnership of mutual respect.
2. Safeguarding the household and the husband's property and honor in his absence.

Both spouses share the duty of mutual consultation (shura) in family matters, and Islamic Fiqh emphasizes that a harmonious, respectful marriage — not merely the technical fulfillment of these legal duties — is the true objective the Sharia seeks to establish through the institution of Nikah.`,
        examples: [],
        source: 'Quran 2:187, 2:228, 4:19, 4:129; Sunan al-Tirmidhi 1162',
      },
    ],
  },

  {
    id: 'fq13',
    title: 'Talaq and Iddah (Divorce and Waiting Period)',
    arabicTitle: 'أَحْكَامُ الطَّلَاقِ وَالعِدَّة',
    icon: '📜',
    overview: 'While marriage is deeply encouraged and protected in Islam, the Sharia also provides a structured, regulated path for its dissolution when a marriage cannot continue in a healthy, honorable way — famously described in a hadith as "the most disliked of permissible things in the sight of Allah," reflecting that divorce, while lawful, is approached with utmost seriousness and only as a last resort.',
    rules: [
      {
        id: 'fq13r1',
        name: 'The Categories and Method of Talaq',
        arabic: 'أَنْوَاعُ الطَّلَاقِ وَكَيْفِيَّتُهُ',
        level: 'intermediate',
        explanation: `Talaq (الطَّلَاق) refers to the husband's unilateral right to dissolve the marriage by pronouncement. Jurists classify it along two main lenses:

By manner of pronouncement:

1. Talaq al-Sunnah (طَلَاقُ السُّنَّة — the prescribed manner): pronouncing a single divorce while the wife is in a state of purity (not menstruating) during which no intercourse has occurred since her last menstrual cycle, then allowing the iddah (waiting period) to run its course without further pronouncements — this is the method aligned with the Quranic guidance and the Prophet's correction of his Companion Ibn Umar when he divorced his wife during her menstruation.

2. Talaq al-Bidah (طَلَاقُ البِدْعَة — the innovated/disapproved manner): pronouncing divorce during menstruation, or pronouncing three divorces at once in a single utterance. While the majority of scholars hold that such a divorce is religiously discouraged (haram to perform this way) yet still legally takes effect (a position associated with the majority through history), a significant number of classical and many contemporary scholars — following a narration from Ibn Abbas and adopted notably by Ibn Taymiyyah and Ibn al-Qayyim — hold that pronouncing three divorces in one utterance counts legally as only a single revocable divorce, since it contravenes the graduated, deliberate process the Sharia establishes for divorce.

By legal effect:

3. Talaq Rajii (طَلَاقٌ رَجْعِيّ — revocable divorce): the first and second pronouncements of divorce, after which the husband retains the right to take his wife back during her iddah without a new marriage contract, simply by resuming the marital relationship or clearly stating his intention to reconcile.

4. Talaq Bain (طَلَاقٌ بَائِن — irrevocable divorce): the third and final pronouncement, after which the couple may not remarry each other unless the wife first validly marries another man in a genuine marriage (not one contrived merely to permit remarriage to the first husband, which the Prophet explicitly cursed both parties to such an arrangement for), and that subsequent marriage ends naturally through death or divorce.`,
        examples: [],
        source: 'Quran 2:229-230; Sahih al-Bukhari 5251-5252; Sahih Muslim 1471',
      },
      {
        id: 'fq13r2',
        name: 'Al-Iddah (The Waiting Period)',
        arabic: 'أَحْكَامُ العِدَّة',
        level: 'intermediate',
        explanation: `Al-Iddah (العِدَّة) is a mandatory waiting period observed by a woman after divorce or the death of her husband, before she may remarry. Its purposes, as understood by scholars, include establishing certainty regarding any pregnancy (protecting lineage, one of the five essential objectives of Sharia), and providing a structured window for potential reconciliation in the case of revocable divorce. Its length varies by circumstance:

1. For a divorced woman who menstruates: three menstrual cycles (or three periods of purity, according to differing scholarly interpretations of the Quranic term quru in 2:228), based on Quran 2:228.

2. For a divorced woman who does not menstruate (whether due to young age, menopause, or a medical condition): three lunar months, based on Quran 65:4.

3. For a pregnant woman, whether divorced or widowed: her iddah concludes upon giving birth, even if this occurs very shortly after the divorce or death, based on Quran 65:4.

4. For a widow: four months and ten days, based on Quran 2:234, regardless of whether the marriage was consummated (unlike divorce, where a marriage that was never consummated carries no iddah requirement at all, per Quran 33:49).

During the iddah of a revocable divorce, the wife generally remains in the marital home, maintained financially by the husband as during the marriage, since the marriage bond, while suspended, has not yet fully ended. During the iddah of an irrevocable divorce or widowhood, scholars differ on the extent of continued financial maintenance, with the majority holding that a widow's iddah is funded from her inheritance share rather than ongoing spousal maintenance, since the marriage has ended definitively through death.`,
        examples: [],
        source: 'Quran 2:228, 2:234, 33:49, 65:4; Al-Mughni, Ibn Qudamah',
      },
      {
        id: 'fq13r3',
        name: 'Khula and Faskh (Wife-Initiated Separation)',
        arabic: 'الخُلْعُ وَالفَسْخ',
        level: 'intermediate',
        explanation: `While Talaq is primarily the husband's unilateral right, Islamic law equally provides avenues for a wife who wishes to end an unhealthy marriage:

1. Al-Khula (الخُلْع — divorce by mutual release, typically wife-initiated with compensation): the wife requests separation and, in exchange, returns her mahr (dowry) or another agreed compensation to the husband, who then releases her from the marriage. This is explicitly established by the case of the wife of Thabit ibn Qays, who came to the Prophet stating she found no fault in her husband's character or religion but could not continue living with him, upon which the Prophet instructed Thabit to accept the return of the garden he had given her as mahr and release her.

2. Al-Faskh (الفَسْخ — judicial annulment): a wife may petition an Islamic judge (qadi) to dissolve the marriage without her consent being required from the husband, in cases such as: the husband's failure to provide financial maintenance despite being able to, proven harm (darar) such as abuse, a husband's long-term absence or imprisonment without valid reason, impotence preventing consummation, or the discovery of a concealed defect that would have prevented her consent had she known.

The key distinction between Khula and ordinary Talaq is that Khula, in the majority view, is generally treated as a single irrevocable separation from the outset (not counted against the husband's three-Talaq allowance in the same way, according to a number of jurists, since it originates from the wife's initiative and involves compensation), though scholars differ on some of the precise legal characteristics, and Faskh through a judge does not require the husband's agreement at all, since the underlying justification (harm, non-provision, or a defect in the contract) is established independently of his consent.`,
        examples: [],
        source: 'Sahih al-Bukhari 5273; Sunan Abi Dawud 2226',
      },
    ],
  },

  {
    id: 'fq14',
    title: 'Muamalat: Business and Financial Transactions',
    arabicTitle: 'أَحْكَامُ المُعَامَلَاتِ المَالِيَّة',
    icon: '🤝',
    overview: 'Islamic Fiqh regulates commerce and financial dealings extensively, rooted in the Quranic principle: "Allah has permitted trade and forbidden riba (interest)" (Quran 2:275). This branch of Fiqh addresses valid sale contracts, the prohibition of riba and gharar, and the broader framework governing lawful earning.',
    rules: [
      {
        id: 'fq14r1',
        name: 'The Pillars and Conditions of a Valid Sale (Bay)',
        arabic: 'أَرْكَانُ البَيْعِ وَشُرُوطُهُ',
        level: 'foundation',
        explanation: `A valid sale contract (bay) in Fiqh requires the following pillars:

1. The two contracting parties (al-aqidan): both must be of sound mind and legal capacity to transact — a young child or a person of unsound mind generally cannot independently conclude a binding sale.

2. The offer and acceptance (al-sighah): a clear expression of mutual consent, whether verbal, written, or through customary conduct clearly understood to constitute a sale (such as taking an item to a cashier and paying the marked price, recognized as bay al-muatah, "the sale of mutual handing over").

3. The subject matter (al-mabi): the item sold must be something lawful to own and trade (not, for example, pork, alcohol, or an already-stolen item), must actually exist or be reliably deliverable (barring valid exceptions like Salam, discussed elsewhere), and must be known/specified to both parties to avoid excessive uncertainty.

4. The price (al-thaman): must be known and agreed upon by both parties at the time of the contract.

Central Quranic and prophetic principles governing sale include mutual consent — "do not consume one another's wealth unjustly, except that it be a trade based on mutual consent" (Quran 4:29) — and the seller's obligation to disclose any known defect in the item sold, since concealing a defect is considered a form of cheating explicitly condemned by the Prophet, who stated "whoever cheats is not of us."

The buyer also traditionally has a khiyar (خِيَار — option to cancel) in specific circumstances, such as Khiyar al-Majlis (the option to cancel while still in the contract session, per the Shafii and Hanbali schools' reading of the relevant hadith) or Khiyar al-Ayb (the option to cancel or seek a reduction upon discovering an undisclosed defect after the sale).`,
        examples: [],
        source: 'Quran 4:29, 2:275; Sahih Muslim 102; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq14r2',
        name: 'Riba (Interest/Usury) and Its Prohibition',
        arabic: 'أَحْكَامُ الرِّبَا',
        level: 'intermediate',
        explanation: `Riba (الرِّبَا) is unambiguously and severely prohibited in Islam, with the Quran describing it as tantamount to a declaration of war against Allah and His Messenger for those who persist in it (Quran 2:278-279). Jurists identify two main categories:

1. Riba al-Nasiah (رِبَا النَّسِيئَة — the riba of delay/lending): the classical, most well-known form — any predetermined excess charged on a loan in exchange for the extension of time, as in conventional interest-bearing loans and bonds. This is what most contemporary discussions of "interest" refer to, and it is prohibited without exception across all schools regardless of the amount or the purpose of the loan.

2. Riba al-Fadl (رِبَا الفَضْل — the riba of excess in direct exchange): established through a specific hadith listing six commodities — gold, silver, wheat, barley, dates, and salt — which, when exchanged for the same commodity, must be equal in quantity and exchanged hand-to-hand (immediate, without deferred delivery on either side); any excess or delay in such same-category exchanges constitutes riba. Jurists extend this list by analogy (qiyas) to modern equivalents such as currency (analogous to gold and silver as a medium of exchange and store of value) and staple foods.

The wisdom behind the prohibition, as widely discussed by scholars, includes protecting the economically vulnerable from exploitation, discouraging wealth concentration through risk-free, effort-free gain, and directing economic activity toward genuine trade, partnership, and shared risk (as in Islamic finance structures like Mudarabah and Musharakah) rather than guaranteed returns detached from real productive activity or risk-sharing.`,
        examples: [
          { arabic: 'وَأَحَلَّ اللَّهُ البَيْعَ وَحَرَّمَ الرِّبَا', transliteration: 'Wa ahallallahul-baya wa harramar-riba', note: '"Allah has permitted trade and forbidden riba" (Quran 2:275)' },
        ],
        source: 'Quran 2:275-279; Sahih Muslim 1587; Al-Fiqh al-Islami wa Adillatuh, al-Zuhayli',
      },
      {
        id: 'fq14r3',
        name: 'Gharar and Prohibited Sale Structures',
        arabic: 'الغَرَرُ وَصُوَرُ البُيُوعِ المُحَرَّمَة',
        level: 'advanced',
        explanation: `Al-Gharar (الغَرَر — excessive uncertainty or ambiguity) is prohibited in transactions because it introduces a speculative element resembling gambling, where one or both parties may be seriously harmed by information neither can control or verify at the time of contracting. The Prophet explicitly forbade "the sale of gharar" (bay al-gharar) as a general category, from which jurists derive numerous specific prohibited structures, including:

1. Bay al-Majhul (selling an unknown or unspecified item): such as selling "whatever is in this sealed box" without either party knowing its contents.

2. Bay al-Ma'dum (selling something that does not yet exist and is not reliably deliverable): such as selling the unborn offspring of an unborn animal (a practice specifically named and forbidden in hadith, habal al-habalah), though certain forward-sale exceptions like Salam (paying in advance for a described, deliverable future crop) and Istisna (commissioning a manufactured item to specification) are explicitly permitted as regulated exceptions due to their genuine economic necessity and the specificity built into their conditions.

3. Bay al-Hasah / Bay al-Munabadhah (sale by throwing a pebble or tossing an item, historically practiced in pre-Islamic Arabia to randomly determine the item or price): forbidden due to the randomness replacing genuine, informed mutual consent.

4. Two sales in one (bay atayn fi bayah): a single transaction bundling two different sale conditions or prices in a way that leaves genuine ambiguity as to which applies, forbidden per an explicit hadith.

5. Selling something one does not yet own or possess (bay ma la tamlik): forbidden per the hadith instructing a Companion not to sell what he did not have, since the seller cannot guarantee delivery of something not yet in his possession or control.

Modern Islamic finance scholarship devotes considerable attention to applying these classical principles (alongside the prohibition of riba) to contemporary financial instruments such as derivatives, short selling, and certain insurance structures, an active and evolving area of contemporary Fiqh (fiqh al-muamalat al-maliyyah al-muasirah).`,
        examples: [],
        source: 'Sahih Muslim 1513, 1531; Sunan Abi Dawud 3376',
      },
    ],
  },

  {
    id: 'fq15',
    title: 'Mawarith (Inheritance)',
    arabicTitle: 'أَحْكَامُ المَوَارِيث',
    icon: '📊',
    overview: 'Ilm al-Mawarith (عِلْمُ المَوَارِيث), also called Ilm al-Fara\'id, is the highly precise science of distributing a deceased Muslim\'s estate among their heirs according to fixed shares established directly in the Quran, primarily in Surah al-Nisa (4:11-12, 4:176) — considered among the most mathematically detailed and rigorously defined areas of Fiqh.',
    rules: [
      {
        id: 'fq15r1',
        name: 'The Preliminary Steps Before Distribution',
        arabic: 'الحُقُوقُ المُقَدَّمَةُ عَلَى قِسْمَةِ التَّرِكَة',
        level: 'foundation',
        explanation: `Before any inheritance shares are calculated and distributed, Fiqh requires that four matters be settled first, in the following order of priority, from the total estate (tarikah) left by the deceased:

1. Funeral expenses (mu'an al-tajhiz): the reasonable costs of washing, shrouding, and burying the deceased are taken from the estate before anything else.

2. Outstanding debts (al-duyun): any debts owed by the deceased — whether to Allah, such as unpaid Zakah or an unfulfilled vow, or to other people, such as loans or unpaid wages — must be settled from the estate before inheritance is distributed, based on the Quranic phrasing in the inheritance verses themselves, which mention debts explicitly (Quran 4:11-12).

3. Fulfillment of any valid bequest (al-wasiyyah): a Muslim may will up to one-third of their net estate to a person or cause that is NOT already an inheriting heir (a bequest to an existing heir is not valid unless the other heirs unanimously consent after the death, since Allah has already assigned that heir a specific share, and the Prophet stated "There is no bequest for an heir").

4. Only after these three steps is the remainder distributed among the rightful heirs according to their fixed Quranic shares (fara'id) and residual shares (asabah).

This ordered structure reflects the Sharia's broader concern for settling worldly obligations (financial and otherwise) with precision and fairness before addressing the emotionally significant matter of inheritance distribution among surviving family.`,
        examples: [],
        source: 'Quran 4:11-12; Sahih al-Bukhari 2738',
      },
      {
        id: 'fq15r2',
        name: 'The Fixed Quranic Shares (Al-Furud al-Muqaddarah)',
        arabic: 'الفُرُوضُ المُقَدَّرَةُ فِي القُرْآن',
        level: 'advanced',
        explanation: `The Quran specifies six fixed fractional shares (al-furud al-muqaddarah) that particular relatives receive under particular conditions, forming the mathematical backbone of Islamic inheritance law:

1. Half (1/2): due to a single daughter (in the absence of a son), a husband (in the absence of children or grandchildren of the deceased), or a single full or paternal sister (under specific conditions relating to the absence of the deceased's father, son, or brother).

2. Quarter (1/4): due to a husband (if the deceased has children or grandchildren), or a wife/wives collectively (if the deceased has no children or grandchildren).

3. Eighth (1/8): due to a wife/wives collectively (if the deceased has children or grandchildren).

4. Two-thirds (2/3): due to two or more daughters (in the absence of a son), or two or more full or paternal sisters (under conditions similar to the single sister's share).

5. Third (1/3): due to the mother (if the deceased has no children, grandchildren, or two or more siblings), or divided among two or more maternal siblings collectively (under specific conditions).

6. Sixth (1/6): due to the mother (if the deceased has children, grandchildren, or two or more siblings), the father (if the deceased has a son or son's son), a single maternal sibling (under specific conditions), or a grandmother (in the absence of the mother), among other specific configurations.

The famous rule regarding sons and daughters together — that a son receives twice the share of a daughter (Quran 4:11) — reflects the broader Islamic financial framework in which men bear the obligation of financial maintenance (nafaqah) for wives, children, and often extended family, while a woman's inherited wealth remains entirely her own with no equivalent maintenance obligation imposed upon her; scholars note this distinction is about differing financial responsibilities within the family structure rather than differing worth of the individuals themselves. After the fixed-share heirs (ashab al-furud) receive their portions, any remainder passes to the closest male relatives through the paternal line (al-asabah), and if no fixed-share or residual heir exists at all, the estate may pass to more distant relatives (dhawu al-arham) according to some schools, or to the public treasury (bayt al-mal) according to others.`,
        examples: [],
        source: 'Quran 4:11-12, 4:176; Al-Rahbiyyah fil-Fara\'id, al-Rahbi',
      },
    ],
  },

  {
    id: 'fq16',
    title: 'Food, Drink, and Halal/Haram',
    arabicTitle: 'أَحْكَامُ الأَطْعِمَةِ وَالأَشْرِبَةِ',
    icon: '🍽️',
    overview: 'Islamic Fiqh establishes clear guidance on what foods and drinks are lawful (halal) and unlawful (haram), rooted in the Quranic principle that the general default for all created things is permissibility, with specific categories excluded by clear textual evidence.',
    rules: [
      {
        id: 'fq16r1',
        name: 'The General Principle and Categories of Prohibited Food',
        arabic: 'الأَصْلُ فِي الأَطْعِمَةِ وَأَنْوَاعُ المُحَرَّمَاتِ',
        level: 'foundation',
        explanation: `The foundational legal maxim governing food (and, more broadly, all matters outside of worship) is: الأَصْلُ فِي الأَشْيَاءِ الإِبَاحَةُ ("the default ruling for things is permissibility"), derived from Quran 2:29, which describes Allah as having created everything on earth for humanity's benefit. Prohibition therefore requires specific, clear evidence, rather than permissibility needing to be individually proven for every item.

The Quran explicitly names the following categories as prohibited (Quran 2:173, 5:3, 6:145):

1. Maytah (مَيْتَة — carrion): any animal that dies without proper Islamic slaughter (dhabh), whether from natural causes, strangulation, a violent blow, a fall, or being gored, with two explicit exceptions established in hadith: fish/seafood and locusts, both lawful without ritual slaughter.

2. Blood (الدَّم — specifically flowing/poured-out blood, al-dam al-masfuh): the residual blood remaining within the tissue of a properly slaughtered animal's meat is not included in this prohibition, since it is not "poured out."

3. Swine/pork (لَحْمُ الخِنْزِير) and all its by-products.

4. That which has been dedicated or slaughtered in the name of other than Allah (مَا أُهِلَّ لِغَيْرِ اللَّهِ بِهِ): meat slaughtered as part of a ritual dedicating it to an idol, deity, or anyone other than Allah.

5. Intoxicants (khamr and, by analogy/qiyas, all substances that intoxicate the mind, whether derived from grapes or otherwise) — established primarily through Quran 5:90-91 and extensive hadith, grounded in the objective of protecting the intellect (hifz al-aql), one of the five essential necessities of Sharia.

Additionally, the majority of scholars, based on hadith, prohibit the meat of predatory animals with fangs used to catch prey (such as lions, wolves, and dogs) and birds of prey with talons (such as eagles and hawks), along with a small number of other specifically named animals discussed in the hadith literature and differed upon in minor detail between the schools (such as domesticated donkeys, explicitly prohibited by the Prophet at the Battle of Khaybar).`,
        examples: [],
        source: 'Quran 2:29, 2:173, 5:3, 5:90-91; Sahih Muslim 1934',
      },
      {
        id: 'fq16r2',
        name: 'The Requirements of Islamic Slaughter (Dhabh)',
        arabic: 'شُرُوطُ الذَّبْحِ الشَّرْعِيّ',
        level: 'intermediate',
        explanation: `For meat from a land animal (other than fish and locusts) to be lawful, it must be slaughtered according to the requirements of Dhabh (ذَبْح), which include:

1. The slaughterer must be a Muslim, or a Jew or Christian (from the People of the Book), based on Quran 5:5, which explicitly permits the food of the People of the Book to Muslims (understood by the classical majority to particularly refer to their properly slaughtered meat, given the surrounding context of the verse), though a slaughterer who deliberately dedicates the animal to something other than Allah, regardless of their religious background, renders the meat unlawful under category four above.

2. The name of Allah should be pronounced at the time of slaughter (تَسْمِيَة — Tasmiyah, saying "Bismillah"), which the majority consider a strongly recommended condition (sunnah muakkadah) rather than an absolute requirement for validity if forgotten (though the Maliki school and a position among the Hanbalis hold it to be a stricter condition, excused only for genuine forgetfulness, not deliberate omission).

3. A sharp instrument must be used to sever, in a single continuous motion, the trachea (windpipe), esophagus (food pipe), and the two jugular veins (or the majority thereof, according to differing schools' precise requirements) at the front of the neck, allowing the blood to drain out completely, based on the hadith: "Whatever causes blood to flow, and over which the name of Allah has been mentioned, eat of it."

4. The animal must be alive (or presumed alive with residual life signs, such as movement or blinking, in the case of an animal that had been stunned) at the moment of slaughter — an animal that has already died from a prior cause cannot be rendered lawful by subsequent slaughter.

Regarding modern mechanized and pre-stunning slaughter practices used in some contemporary meat industries, scholars differ based on the specific method and whether the stunning genuinely risks killing the animal before the cut is made — a matter of detailed contemporary fiqhi and veterinary discussion (fiqh al-nawazil) rather than a single, universally agreed position across all modern contexts.`,
        examples: [
          { arabic: 'إِنَّ مَا أَنْهَرَ الدَّمَ وَذُكِرَ اسْمُ اللَّهِ عَلَيْهِ فَكُلُوهُ', transliteration: 'Inna ma anharad-dama wa dhukira ismullahi alayhi fakuluh', note: 'Hadith on the core requirements of valid slaughter (Sahih al-Bukhari 5498)' },
        ],
        source: 'Quran 5:5; Sahih al-Bukhari 5498-5500; Sahih Muslim 1968',
      },
    ],
  },

  {
    id: 'fq17',
    title: 'Aymaan, Nudhur, and Kaffarah (Oaths, Vows, and Expiation)',
    arabicTitle: 'الأَيْمَانُ وَالنُّذُورُ وَالكَفَّارَات',
    icon: '🖐️',
    overview: 'Fiqh addresses the serious weight Islam places on oaths sworn by Allah\'s name and vows made to Allah, along with the specific expiations (kaffarah) prescribed when an oath is broken or a particular sin is committed, reflecting the Sharia\'s broader concern for truthfulness and the sanctity of one\'s word.',
    rules: [
      {
        id: 'fq17r1',
        name: 'Categories of Oaths (Al-Yamin) and Their Expiation',
        arabic: 'أَنْوَاعُ اليَمِينِ وَكَفَّارَتُهَا',
        level: 'intermediate',
        explanation: `A Yamin (يَمِين — oath), specifically one sworn by Allah's name or an attribute of His, carries real legal and religious weight in Fiqh. Jurists identify three categories:

1. Yamin Laghw (يَمِينُ اللَّغْو — the idle/unintentional oath): an oath uttered casually in ordinary speech without genuine intention to swear, such as habitually saying "by Allah" in conversation without deliberate intent to make a binding vow. The Quran explicitly excuses this category from any consequence: "Allah does not take you to task for what is unintentional in your oaths" (Quran 2:225).

2. Yamin Mun'aqidah (يَمِينٌ مُنْعَقِدَة — the binding oath): a deliberate oath sworn about a future matter, such as "By Allah, I will not speak to him" or "By Allah, I will do such-and-such." If this oath is subsequently broken, an expiation (kaffarah) becomes obligatory, as detailed in Quran 5:89. In many cases, if breaking the oath serves a greater good (such as reconciling with someone one swore never to speak to), doing so is actually recommended, with the expiation paid as the required consequence, based on the Prophet's guidance to choose the better option and expiate for the oath.

3. Yamin Ghamus (يَمِينٌ غَمُوس — the "plunging" oath): a deliberate false oath about a past or present matter, sworn knowingly to deceive, such as falsely swearing in a dispute or a court of law. This is considered among the gravest of sins — the Prophet listed it among the major sins, describing it as an oath that "plunges" the swearer into the Hellfire — and the majority of scholars hold that no worldly expiation removes its sin (though it still requires sincere repentance); it is a matter between the sinner and Allah, distinct from the binding oath discussed above.

The prescribed Kaffarah for breaking a binding oath (Yamin Mun'aqidah), per Quran 5:89, is: feeding ten poor people (at the average standard of one's own household), or clothing ten poor people, or freeing a slave (historically) — and if none of these is possible, fasting three days instead.`,
        examples: [],
        source: 'Quran 2:225, 5:89; Sahih al-Bukhari 6675',
      },
      {
        id: 'fq17r2',
        name: 'Al-Nadhr (The Vow) and Its Rulings',
        arabic: 'أَحْكَامُ النَّذْر',
        level: 'intermediate',
        explanation: `An-Nadhr (النَّذْر — a vow) is a person's voluntary commitment to perform an act of worship or good deed as an obligation upon themselves, not originally required by the Sharia, such as vowing "If Allah cures my illness, I will fast three days" or "I vow to give this amount in charity."

Once validly made, a nadhr for an act of obedience (such as prayer, fasting, or charity) becomes binding and must be fulfilled, based on the hadith "Whoever vows to obey Allah, let him obey Him." The Prophet, however, generally discouraged initiating vows in the first place — stating that a vow does not bring forward anything not already decreed, and is often merely a means by which a miserly person extracts something from themselves that they otherwise would not have given — recommending that voluntary good deeds simply be performed directly rather than conditioned upon a vow.

Specific categories of nadhr and their rulings include:

1. A vow to perform an act of obedience: must be fulfilled as specified.
2. A vow to perform a sinful act (such as vowing to harm someone): must NOT be fulfilled, since obedience to Allah's prohibition of that sin takes precedence, and instead the person owes the same expiation (kaffarah) as for a broken oath, based on the hadith "There is no fulfillment of a vow in that which involves disobedience to Allah, and its expiation is the expiation of an oath."
3. A vow conditioned on something outside one's direct control (a "nadhr of gratitude/response," nadhr mujazah, such as the healing example above): must be fulfilled once the condition occurs, since the person voluntarily bound themselves to it in advance.
4. A vague or unspecified vow (such as simply saying "I vow to Allah" without specifying an act): the majority hold this is treated with the expiation of an oath, since no specific act was determined.`,
        examples: [],
        source: 'Sahih al-Bukhari 6696, 6700; Sahih Muslim 1639-1641',
      },
    ],
  },

  {
    id: 'fq18',
    title: 'General Legal Maxims of Fiqh (Al-Qawaid al-Fiqhiyyah)',
    arabicTitle: 'القَوَاعِدُ الفِقْهِيَّةُ الكُبْرَى',
    icon: '🧭',
    overview: 'Beyond the detailed rulings of specific chapters, later jurists distilled a small number of overarching legal maxims (qawaid) that summarize broad, recurring principles running throughout the entire body of Fiqh, functioning almost like the "axioms" underlying the entire legal system, and helping a student see the coherent logic connecting seemingly unrelated rulings across every chapter of this course.',
    rules: [
      {
        id: 'fq18r1',
        name: 'The Five Great Maxims (Al-Qawaid al-Khams al-Kubra)',
        arabic: 'القَوَاعِدُ الخَمْسُ الكُبْرَى',
        level: 'advanced',
        explanation: `Later jurists across the schools distilled the entirety of Fiqh's detailed rulings into five overarching maxims, considered so foundational that they are traditionally described as encompassing roughly two-thirds of all substantive Fiqh:

1. الأُمُورُ بِمَقَاصِدِهَا (Al-umuru bi-maqasidiha — "Matters are judged by their objectives/intentions"): derived directly from the hadith "Actions are but by intentions." This maxim underlies why the same physical action (such as touching water to one's face) can be an act of worship (wudu, with the intention of purification for prayer) or an entirely mundane act (simply washing one's face), and why intention determines the categorization and reward of an action throughout Fiqh, from prayer to transactions to oaths.

2. اليَقِينُ لَا يَزُولُ بِالشَّكِّ (Al-yaqinu la yazulu bish-shakk — "Certainty is not removed by doubt"): a person who is certain they performed wudu, but later doubts whether they broke it, is considered to still be in a state of purity, since the original certain state is not overturned by a mere subsequent doubt; only a new certainty (or, in some applications, a stronger likelihood) can overturn an established certain state. This maxim underlies the guidance on doubt during prayer (acting on the lower, certain number of rakahs) and numerous similar situations throughout Fiqh.

3. المَشَقَّةُ تَجْلِبُ التَّيْسِير (Al-mashaqqatu tajlibu al-taysir — "Hardship begets ease"): this maxim underlies the entire system of concessions (rukhas) throughout Fiqh — tayammum replacing wudu when water causes harm, shortening and combining prayers while traveling, breaking the fast when ill, and countless similar accommodations grounded in the Quranic principle "Allah intends ease for you and does not intend hardship" (Quran 2:185).

4. الضَّرَرُ يُزَال (Ad-dararu yuzal — "Harm must be removed"): this maxim underlies rulings such as a wife's right to seek judicial dissolution (faskh) of a harmful marriage, a neighbor's right to prevent genuine harm from an adjoining property, and the broader principle that removing an established harm takes precedence in legal reasoning, paired with a well-known corollary maxim, "harm is not eliminated by an equivalent harm" (الضَّرَرُ لَا يُزَالُ بِمِثْلِهِ), meaning one harm cannot simply be traded for an identical one elsewhere.

5. العَادَةُ مُحَكَّمَة (Al-adatu muhakkamah — "Custom is a governing authority"): this maxim underlies why Fiqh often defers to the recognized, non-sinful customs (urf) of a given society in matters the primary texts leave open — such as what constitutes a "reasonable" dowry, standard trade practices, or appropriate clothing customs — recognizing that many secondary details of worldly dealings were deliberately left flexible by the Sharia to accommodate legitimate cultural and contextual variation across times and places.`,
        examples: [],
        source: 'Al-Ashbah wan-Nazair, al-Suyuti; Al-Ashbah wan-Nazair, Ibn Nujaym; Sharh al-Qawaid al-Fiqhiyyah, Ahmad al-Zarqa',
      },
    ],
  },
]

export const FIQH_SCHOLARS = [
  {
    name: 'Imam Abu Hanifah',
    arabicName: 'الإِمَامُ أَبُو حَنِيفَة',
    lifespan: '80-150 AH / 699-767 CE',
    contribution: 'Founder of the Hanafi school, the most widely followed Sunni madhhab today, historically dominant across the Ottoman lands, South Asia, and Central Asia. Renowned for his systematic use of qiyas (analogy) and istihsan (juristic preference), his legal methodology was later compiled and elaborated by his prominent students Abu Yusuf and Muhammad al-Shaybani.',
  },
  {
    name: 'Imam Malik ibn Anas',
    arabicName: 'الإِمَامُ مَالِكُ بْنُ أَنَس',
    lifespan: '93-179 AH / 711-795 CE',
    contribution: 'Founder of the Maliki school, historically dominant across North and West Africa. Author of Al-Muwatta, among the earliest surviving works combining hadith and fiqh. Distinguished by giving special evidentiary weight to the established practice (amal) of the people of Madinah, reasoning that their collective practice preserved a living transmission of the Prophet\'s own guidance.',
  },
  {
    name: 'Imam al-Shafii',
    arabicName: 'الإِمَامُ الشَّافِعِيّ',
    lifespan: '150-204 AH / 767-820 CE',
    contribution: 'Founder of the Shafii school, historically dominant in East Africa, Yemen, and much of Southeast Asia. Studied under both Imam Malik and the Hanafi tradition, and was the first scholar to systematize Usul al-Fiqh as an independent field of study in his landmark work Al-Risalah, establishing the methodological framework later jurists across all schools would build upon.',
  },
  {
    name: 'Imam Ahmad ibn Hanbal',
    arabicName: 'الإِمَامُ أَحْمَدُ بْنُ حَنْبَل',
    lifespan: '164-241 AH / 780-855 CE',
    contribution: 'Founder of the Hanbali school, historically dominant in the Arabian Peninsula today. Renowned above all for his encyclopedic knowledge of hadith, compiled in his Musnad, and for his steadfastness during the Mihnah (Inquisition) under the Abbasid caliphate, refusing under severe persecution to affirm the doctrine that the Quran was created.',
  },
  {
    name: 'Ibn Qudamah al-Maqdisi',
    arabicName: 'ابْنُ قُدَامَة المَقْدِسِيّ',
    lifespan: '541-620 AH / 1147-1223 CE',
    contribution: 'A towering scholar of the Hanbali school, author of Al-Mughni, one of the most comprehensive works of comparative Fiqh ever written, methodically presenting the Hanbali position alongside the views and evidences of the other schools on nearly every legal issue.',
  },
  {
    name: 'Ibn Taymiyyah',
    arabicName: 'ابْنُ تَيْمِيَّة',
    lifespan: '661-728 AH / 1263-1328 CE',
    contribution: 'A highly influential Hanbali jurist and theologian known for his extensive fatawa (legal rulings) collected in Majmu al-Fatawa, and for his willingness to engage in independent legal reasoning (ijtihad) across madhhab lines on numerous issues, including his well-known position on the triple talaq pronounced in a single utterance.',
  },
  {
    name: 'Al-Shatibi',
    arabicName: 'الإِمَامُ الشَّاطِبِيّ',
    lifespan: 'd. 790 AH / 1388 CE',
    contribution: 'A Maliki jurist celebrated for his work Al-Muwafaqat fi Usul al-Sharia, which systematically developed the theory of Maqasid al-Sharia (the higher objectives of Islamic law), profoundly shaping how later and contemporary scholars understand the underlying wisdom and coherence connecting the detailed rulings of Fiqh.',
  },
]