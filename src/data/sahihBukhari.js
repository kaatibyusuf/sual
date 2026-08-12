// src/data/sahihBukhari.js
//
// Sahih Al-Bukhari — the most authentic hadith collection after the
// Qur'an, organized traditionally into 97 books (Kitab al-Iman,
// Kitab al-Ilm, Kitab as-Salah, etc), totaling roughly 7,563 hadith
// numbers (fewer distinct narrations once repetitions are merged).
//
// SAHIH_BUKHARI_CHAPTERS below was pulled live from sunnah.com/bukhari
// on the date this file was written, not reconstructed from memory —
// each key/label/arabic/range is copied directly from that page. If
// you edit or re-generate this list later, re-fetch from sunnah.com
// (or another verified source) rather than trusting a prior version
// or an LLM's recall of "the 97 books," since exact book numbering
// and hadith ranges do vary slightly between print editions and
// digital databases.
//
// SAHIH_BUKHARI holds the actual hadith entries. This stays empty
// except for entries that were verified against a real source at
// the time they were added — do not populate this from memory, an
// LLM, or any unverified source. Populate incrementally, hadith by
// hadith or book by book, with each batch reviewed before
// publishing. There is no need to have all of it before this
// becomes useful to students; a small, verified set beats a large,
// unverified one.
//
// Workflow used for hadith 1 below, intended as the template for
// future entries: the Arabic text was supplied directly by a human
// (not generated), and everything else — translation, narrator,
// chapter/book placement, source citation — was cross-checked
// live against sunnah.com's Khan translation rather than recalled.
// Grading/authenticity commentary is deliberately left minimal
// (Bukhari's own inclusion is the operative grading here) rather
// than adding takhrij-style detail that would need its own
// verification pass.
//
// Hadith 3-7 (completing the Revelation book, 1-7) were added the
// same way: Arabic text supplied directly by a human, translation
// composed fresh and checked for meaning against sunnah.com search
// results for each hadith number rather than lifted verbatim from
// any single source, narrator chains reconstructed from the isnad
// given in the Arabic, and additional corroborating/parallel chains
// mentioned in the Arabic (the "tabi'ahu" and "ح" transfer-of-chain
// notices) summarized in `notes` rather than folded into the main
// translation.
//
// STATUS: draft — pending scholar sign-off before this is presented
// to users as final, same as every other file in src/data. Verified
// sourcing reduces the risk of misattribution; it doesn't replace a
// qualified reviewer reading the final translations and any added
// commentary/lessons before students see them.

export const SAHIH_BUKHARI_CHAPTERS = [
  { key: 'revelation', num: 1, label: 'Revelation', arabic: 'كِتَابُ بَدْءِ الْوَحْىِ', hadith_range: [1, 7] },
  { key: 'belief', num: 2, label: 'Belief', arabic: 'كِتَابُ الْإِيمَانِ', hadith_range: [8, 58] },
  { key: 'knowledge', num: 3, label: 'Knowledge', arabic: 'كِتَابُ الْعِلْمِ', hadith_range: [59, 134] },
  { key: 'ablutions', num: 4, label: "Ablutions (Wudu')", arabic: 'كِتَابُ الْوُضُوءِ', hadith_range: [135, 247] },
  { key: 'bathing', num: 5, label: 'Bathing (Ghusl)', arabic: 'كِتَابُ الْغُسْلِ', hadith_range: [248, 293] },
  { key: 'menstrual_periods', num: 6, label: 'Menstrual Periods', arabic: 'كِتَابُ الْحَيْضِ', hadith_range: [294, 333] },
  { key: 'tayammum', num: 7, label: 'Rubbing hands and feet with dust (Tayammum)', arabic: 'كِتَابُ التَّيَمُّمِ', hadith_range: [334, 348] },
  { key: 'prayers', num: 8, label: 'Prayers (Salat)', arabic: 'كِتَابُ الصَّلَاةِ', hadith_range: [349, 520] },
  { key: 'times_of_prayer', num: 9, label: 'Times of the Prayers', arabic: 'كِتَابُ مَوَاقِيتِ الصَّلَاةِ', hadith_range: [521, 602] },
  { key: 'adhaan', num: 10, label: 'Call to Prayers (Adhaan)', arabic: 'كِتَابُ الْأَذَانِ', hadith_range: [603, 875] },
  { key: 'friday_prayer', num: 11, label: 'Friday Prayer', arabic: 'كِتَابُ الْجُمُعَةِ', hadith_range: [876, 941] },
  { key: 'fear_prayer', num: 12, label: 'Fear Prayer', arabic: 'كِتَابُ صَلَاةِ الْخَوْفِ', hadith_range: [942, 947] },
  { key: 'two_festivals', num: 13, label: 'The Two Festivals (Eids)', arabic: 'كِتَابُ الْعِيدَيْنِ', hadith_range: [948, 989] },
  { key: 'witr', num: 14, label: 'Witr Prayer', arabic: 'كِتَابُ الْوِتْرِ', hadith_range: [990, 1004] },
  { key: 'istisqaa', num: 15, label: 'Invoking Allah for Rain (Istisqaa)', arabic: 'كِتَابُ الِاسْتِسْقَاءِ', hadith_range: [1005, 1039] },
  { key: 'eclipses', num: 16, label: 'Eclipses', arabic: 'كِتَابُ الْكُسُوفِ', hadith_range: [1040, 1065] },
  { key: 'prostration_of_quran', num: 17, label: "Prostration During Recital of Qur'an", arabic: 'كِتَابُ سُجُودِ الْقُرْآنِ', hadith_range: [1067, 1079] },
  { key: 'shortening_prayers', num: 18, label: 'Shortening the Prayers (At-Taqseer)', arabic: 'كِتَابُ التَّقْصِيرِ', hadith_range: [1080, 1119] },
  { key: 'tahajjud', num: 19, label: 'Prayer at Night (Tahajjud)', arabic: 'كِتَابُ التَّهَجُّدِ', hadith_range: [1120, 1187] },
  { key: 'virtues_masjid_makkah_madinah', num: 20, label: 'Virtues of Prayer at Masjid Makkah and Madinah', arabic: 'كِتَابُ فَضْلِ الصَّلَاةِ فِي مَسْجِدِ مَكَّةَ وَالْمَدِينَةِ', hadith_range: [1188, 1197] },
  { key: 'actions_in_prayer', num: 21, label: 'Actions while Praying', arabic: 'كِتَابُ الْعَمَلِ فِي الصَّلَاةِ', hadith_range: [1198, 1223] },
  { key: 'forgetfulness_in_prayer', num: 22, label: 'Forgetfulness in Prayer', arabic: 'كِتَابُ السَّهْوِ', hadith_range: [1224, 1236] },
  { key: 'funerals', num: 23, label: "Funerals (Al-Janaa'iz)", arabic: 'كِتَابُ الْجَنَائِزِ', hadith_range: [1237, 1394] },
  { key: 'zakat', num: 24, label: 'Obligatory Charity Tax (Zakat)', arabic: 'كِتَابُ الزَّكَاةِ', hadith_range: [1395, 1512] },
  { key: 'hajj', num: 25, label: 'Hajj (Pilgrimage)', arabic: 'كِتَابُ الْحَجِّ', hadith_range: [1513, 1771] },
  { key: 'umrah', num: 26, label: "`Umrah (Minor pilgrimage)", arabic: 'كِتَابُ الْعُمْرَةِ', hadith_range: [1773, 1805] },
  { key: 'muhsar', num: 27, label: 'Pilgrims Prevented from Completing the Pilgrimage', arabic: 'كِتَابُ الْمُحْصَرِ', hadith_range: [1806, 1820] },
  { key: 'penalty_of_hunting_in_ihram', num: 28, label: 'Penalty of Hunting while on Pilgrimage', arabic: 'كِتَابُ جَزَاءِ الصَّيْدِ', hadith_range: [1821, 1866] },
  { key: 'virtues_of_madinah', num: 29, label: 'Virtues of Madinah', arabic: 'كِتَابُ فَضَائِلِ الْمَدِينَةِ', hadith_range: [1867, 1890] },
  { key: 'fasting', num: 30, label: 'Fasting', arabic: 'كِتَابُ الصَّوْمِ', hadith_range: [1891, 2007] },
  { key: 'taraweeh', num: 31, label: 'Praying at Night in Ramadaan (Taraweeh)', arabic: 'كِتَابُ صَلَاةِ التَّرَاوِيحِ', hadith_range: [2008, 2013] },
  { key: 'laylat_al_qadr', num: 32, label: 'Virtues of the Night of Qadr', arabic: 'كِتَابُ فَضْلِ لَيْلَةِ الْقَدْرِ', hadith_range: [2014, 2024] },
  { key: 'itikaf', num: 33, label: "Retiring to a Mosque for Remembrance of Allah (I'tikaf)", arabic: 'كِتَابُ الِاعْتِكَافِ', hadith_range: [2025, 2046] },
  { key: 'sales_and_trade', num: 34, label: 'Sales and Trade', arabic: 'كِتَابُ الْبُيُوعِ', hadith_range: [2047, 2238] },
  { key: 'salam', num: 35, label: 'Sales in which a Price is paid for Goods to be Delivered Later (As-Salam)', arabic: 'كِتَابُ السَّلَمِ', hadith_range: [2239, 2256] },
  { key: 'shufaa', num: 36, label: "Shuf'a", arabic: 'كِتَابُ الشُّفْعَةِ', hadith_range: [2257, 2259] },
  { key: 'hiring', num: 37, label: 'Hiring', arabic: 'كِتَابُ الْإِجَارَةِ', hadith_range: [2260, 2285] },
  { key: 'hawaala', num: 38, label: 'Transferance of a Debt from One Person to Another (Al-Hawaala)', arabic: 'كِتَابُ الْحَوَالَاتِ', hadith_range: [2287, 2289] },
  { key: 'kafalah', num: 39, label: 'Kafalah', arabic: 'كِتَابُ الْكَفَالَةِ', hadith_range: [2290, 2298] },
  { key: 'representation', num: 40, label: 'Representation, Authorization, Business by Proxy', arabic: 'كِتَابُ الْوَكَالَةِ', hadith_range: [2299, 2319] },
  { key: 'agriculture', num: 41, label: 'Agriculture', arabic: 'كِتَابُ الْمُزَارَعَةِ', hadith_range: [2320, 2350] },
  { key: 'distribution_of_water', num: 42, label: 'Distribution of Water', arabic: 'كِتَابُ الْمُسَاقَاةِ', hadith_range: [2351, 2383] },
  { key: 'loans', num: 43, label: 'Loans, Payment of Loans, Freezing of Property, Bankruptcy', arabic: 'كِتَابٌ فِي الِاسْتِقْرَاضِ', hadith_range: [2385, 2409] },
  { key: 'khusoomaat', num: 44, label: 'Khusoomaat', arabic: 'كِتَابُ الْخُصُومَاتِ', hadith_range: [2410, 2425] },
  { key: 'luqatah', num: 45, label: 'Lost Things Picked up by Someone (Luqatah)', arabic: 'كِتَابٌ فِي اللُّقَطَةِ', hadith_range: [2426, 2439] },
  { key: 'oppressions', num: 46, label: 'Oppressions', arabic: 'كِتَابُ الْمَظَالِمِ', hadith_range: [2440, 2482] },
  { key: 'partnership', num: 47, label: 'Partnership', arabic: 'كِتَابُ الشَّرِكَةِ', hadith_range: [2483, 2507] },
  { key: 'mortgaging', num: 48, label: 'Mortgaging', arabic: 'كِتَابُ الرَّهْنِ', hadith_range: [2508, 2515] },
  { key: 'manumission', num: 49, label: 'Manumission of Slaves', arabic: 'كِتَابُ الْعِتْقِ', hadith_range: [2517, 2559] },
  { key: 'makaatib', num: 50, label: 'Makaatib', arabic: 'كِتَابُ الْمُكَاتَبِ', hadith_range: [2560, 2565] },
  { key: 'gifts', num: 51, label: 'Gifts', arabic: 'كِتَابُ الْهِبَةِ وَفَضْلِهَا وَالتَّحْرِيضِ عَلَيْهَا', hadith_range: [2566, 2636] },
  { key: 'witnesses', num: 52, label: 'Witnesses', arabic: 'كِتَابُ الشَّهَادَاتِ', hadith_range: [2637, 2689] },
  { key: 'peacemaking', num: 53, label: 'Peacemaking', arabic: 'كِتَابُ الصُّلْحِ', hadith_range: [2690, 2710] },
  { key: 'conditions', num: 54, label: 'Conditions', arabic: 'كِتَابُ الشُّرُوطِ', hadith_range: [2711, 2737] },
  { key: 'wills', num: 55, label: 'Wills and Testaments (Wasaayaa)', arabic: 'كِتَابُ الْوَصَايَا', hadith_range: [2738, 2781] },
  { key: 'jihad', num: 56, label: 'Fighting for the Cause of Allah (Jihaad)', arabic: 'كِتَابُ الْجِهَادِ وَالسِّيَرِ', hadith_range: [2782, 3090] },
  { key: 'khumus', num: 57, label: 'One-fifth of Booty to the Cause of Allah (Khumus)', arabic: 'كِتَابُ فَرْضِ الْخُمُسِ', hadith_range: [3091, 3155] },
  { key: 'jizyah', num: 58, label: "Jizyah and Mawaada'ah", arabic: 'كِتَابُ الْجِزْيَةِ وَالْمُوَادَعَةِ', hadith_range: [3156, 3189] },
  { key: 'beginning_of_creation', num: 59, label: 'Beginning of Creation', arabic: 'كِتَابُ بَدْءِ الْخَلْقِ', hadith_range: [3190, 3325] },
  { key: 'prophets', num: 60, label: 'Prophets', arabic: 'كِتَابُ أَحَادِيثِ الْأَنْبِيَاءِ', hadith_range: [3326, 3488] },
  { key: 'virtues_of_prophet_and_companions', num: 61, label: 'Virtues and Merits of the Prophet (pbuh) and his Companions', arabic: 'كِتَابُ الْمَنَاقِبِ', hadith_range: [3489, 3648] },
  { key: 'companions', num: 62, label: 'Companions of the Prophet', arabic: 'كِتَابُ فَضَائِلِ أَصْحَابِ النَّبِيِّ صلى الله عليه وسلم', hadith_range: [3649, 3775] },
  { key: 'ansaar', num: 63, label: 'Merits of the Helpers in Madinah (Ansaar)', arabic: 'كِتَابُ مَنَاقِبِ الْأَنْصَارِ', hadith_range: [3776, 3948] },
  { key: 'maghaazi', num: 64, label: 'Military Expeditions led by the Prophet (pbuh) (Al-Maghaazi)', arabic: 'كِتَابُ الْمَغَازِي', hadith_range: [3949, 4473] },
  { key: 'tafseer', num: 65, label: "Prophetic Commentary on the Qur'an (Tafseer of the Prophet (pbuh))", arabic: 'كِتَابُ التَّفْسِيرِ', hadith_range: [4474, 4977] },
  { key: 'virtues_of_quran', num: 66, label: "Virtues of the Qur'an", arabic: 'كِتَابُ فَضَائِلِ الْقُرْآنِ', hadith_range: [4978, 5062] },
  { key: 'nikaah', num: 67, label: 'Wedlock, Marriage (Nikaah)', arabic: 'كِتَابُ النِّكَاحِ', hadith_range: [5063, 5250] },
  { key: 'divorce', num: 68, label: 'Divorce', arabic: 'كِتَابُ الطَّلَاقِ', hadith_range: [5251, 5350] },
  { key: 'supporting_family', num: 69, label: 'Supporting the Family', arabic: 'كِتَابُ النَّفَقَاتِ', hadith_range: [5351, 5372] },
  { key: 'food', num: 70, label: 'Food, Meals', arabic: 'كِتَابُ الْأَطْعِمَةِ', hadith_range: [5373, 5466] },
  { key: 'aqiqa', num: 71, label: 'Sacrifice on Occasion of Birth (`Aqiqa)', arabic: 'كِتَابُ الْعَقِيقَةِ', hadith_range: [5467, 5474] },
  { key: 'hunting_slaughtering', num: 72, label: 'Hunting, Slaughtering', arabic: 'كِتَابُ الذَّبَائِحِ وَالصَّيْدِ', hadith_range: [5475, 5544] },
  { key: 'adaahi', num: 73, label: 'Al-Adha Festival Sacrifice (Adaahi)', arabic: 'كِتَابُ الْأَضَاحِي', hadith_range: [5545, 5574] },
  { key: 'drinks', num: 74, label: 'Drinks', arabic: 'كِتَابُ الْأَشْرِبَةِ', hadith_range: [5575, 5639] },
  { key: 'patients', num: 75, label: 'Patients', arabic: 'كِتَابُ الْمَرْضَى', hadith_range: [5640, 5677] },
  { key: 'medicine', num: 76, label: 'Medicine', arabic: 'كِتَابُ الطِّبِّ', hadith_range: [5678, 5782] },
  { key: 'dress', num: 77, label: 'Dress', arabic: 'كِتَابُ اللِّبَاسِ', hadith_range: [5783, 5969] },
  { key: 'good_manners', num: 78, label: 'Good Manners and Form (Al-Adab)', arabic: 'كِتَابُ الْأَدَبِ', hadith_range: [5970, 6226] },
  { key: 'asking_permission', num: 79, label: 'Asking Permission', arabic: 'كِتَابُ الِاسْتِئْذَانِ', hadith_range: [6227, 6303] },
  { key: 'invocations', num: 80, label: 'Invocations', arabic: 'كِتَابُ الدَّعَوَاتِ', hadith_range: [6304, 6411] },
  { key: 'riqaq', num: 81, label: 'To make the Heart Tender (Ar-Riqaq)', arabic: 'كِتَابُ الرِّقَاقِ', hadith_range: [6412, 6593] },
  { key: 'qadar', num: 82, label: 'Divine Will (Al-Qadar)', arabic: 'كِتَابُ الْقَدَرِ', hadith_range: [6594, 6620] },
  { key: 'oaths_and_vows', num: 83, label: 'Oaths and Vows', arabic: 'كِتَابُ الْأَيْمَانِ وَالنُّذُورِ', hadith_range: [6621, 6707] },
  { key: 'expiation_of_oaths', num: 84, label: 'Expiation for Unfulfilled Oaths', arabic: 'كِتَابُ كَفَّارَاتِ الْأَيْمَانِ', hadith_range: [6708, 6722] },
  { key: 'inheritance', num: 85, label: "Laws of Inheritance (Al-Faraa'id)", arabic: 'كِتَابُ الْفَرَائِضِ', hadith_range: [6723, 6771] },
  { key: 'hudood', num: 86, label: 'Limits and Punishments set by Allah (Hudood)', arabic: 'كِتَابُ الْحُدُودِ', hadith_range: [6772, 6859] },
  { key: 'diyat', num: 87, label: 'Blood Money (Ad-Diyat)', arabic: 'كِتَابُ الدِّيَاتِ', hadith_range: [6861, 6917] },
  { key: 'apostates', num: 88, label: 'Apostates', arabic: 'كِتَابُ اسْتِتَابَةِ الْمُرْتَدِّينَ وَالْمُعَانِدِينَ وَقِتَالِهِمْ', hadith_range: [6918, 6939] },
  { key: 'coercion', num: 89, label: '(Statements made under) Coercion', arabic: 'كِتَابُ الْإِكْرَاهِ', hadith_range: [6940, 6952] },
  { key: 'tricks', num: 90, label: 'Tricks', arabic: 'كِتَابُ الْحِيَلِ', hadith_range: [6953, 6981] },
  { key: 'interpretation_of_dreams', num: 91, label: 'Interpretation of Dreams', arabic: 'كِتَابُ التَّعْبِيرِ', hadith_range: [6982, 7047] },
  { key: 'afflictions', num: 92, label: 'Afflictions and the End of the World', arabic: 'كِتَابُ الْفِتَنِ', hadith_range: [7048, 7136] },
  { key: 'judgments', num: 93, label: 'Judgments (Ahkaam)', arabic: 'كِتَابُ الْأَحْكَامِ', hadith_range: [7137, 7225] },
  { key: 'wishes', num: 94, label: 'Wishes', arabic: 'كِتَابُ التَّمَنِّي', hadith_range: [7226, 7245] },
  { key: 'accepting_info_from_truthful_person', num: 95, label: 'Accepting Information Given by a Truthful Person', arabic: 'كِتَابُ أَخْبَارِ الْآحَادِ', hadith_range: [7246, 7267] },
  { key: 'holding_fast_to_quran_and_sunnah', num: 96, label: 'Holding Fast to the Qur\'an and Sunnah', arabic: 'كِتَابُ الِاعْتِصَامِ بِالْكِتَابِ وَالسُّنَّةِ', hadith_range: [7268, 7370] },
  { key: 'tawheed', num: 97, label: 'Oneness, Uniqueness of Allah (Tawheed)', arabic: 'كِتَابُ التَّوْحِيدِ', hadith_range: [7371, 7563] },
];

export const SAHIH_BUKHARI = [
  {
    num: 1,
    chapter: 'revelation',
    chapter_heading: "How the Divine Revelation started being revealed to Allah's Messenger",
    chapter_heading_arabic: 'بَابُ كَيْفَ كَانَ بَدْءُ الْوَحْىِ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم',
    narrator: "'Umar bin Al-Khattab",
    source: 'Sahih al-Bukhari 1',
    also_collected_in: 'Sahih Muslim 1907',
    arabic_text:
      'حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏"‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ ‏"',
    isnad_chain: [
      'Al-Humaydi \u2018Abdullah bin al-Zubayr',
      'Sufyan (bin \u2018Uyaynah)',
      'Yahya bin Sa\u2018id al-Ansari',
      'Muhammad bin Ibrahim al-Taymi',
      '\u2018Alqamah bin Waqqas al-Laythi',
      "'Umar bin Al-Khattab (Companion, from the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam)",
    ],
    translation:
      "Narrated 'Umar bin Al-Khattab: I heard Allah's Messenger (\u25f7) saying, \"The reward of deeds depends upon the intentions, and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for.\"",
    // Translation cross-checked live against sunnah.com/bukhari:1 (Khan translation) at time of writing.
    notes:
      "This is the opening hadith of Sahih al-Bukhari, and by long-standing scholarly convention (following Imam al-Bukhari's own placement of it, and remarks by later scholars such as Ibn Rajab and Ibn Hajar) it is treated as foundational to the entire collection: every chapter of fiqh and practice that follows presupposes that an action's standing before Allah turns on the intention behind it. It is agreed upon by both Bukhari and Muslim (muttafaqun 'alayh). The reference to emigrating (hijrah) 'for worldly benefit or a woman to marry' is understood as an illustrative example rather than the point of the hadith: the general principle is that outward acts, even identical ones, are judged by what the person doing them intended.",
    lessons: [
      "Acts of worship, and arguably all deliberate human acts, are evaluated by the intention behind them, not by their outward form alone.",
      "Two people can perform the same visible action and receive entirely different standing before Allah depending on what they intended by it.",
      "The specific historical illustration given (hijrah to Madinah) does not narrow the ruling to migration alone; it is the reason scholars placed this hadith first, as a lens for reading everything after it.",
    ],
  },
  {
    num: 2,
    chapter: 'revelation',
    chapter_heading: null,
    // sunnah.com lists this simply as "Chapter (2)" with no separate
    // descriptive bab title beyond that, unlike hadith 1's named bab.
    // Left null rather than inventing a title for it.
    narrator: "'Aisha (Umm al-Mu'minin)",
    source: 'Sahih al-Bukhari 2',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَنْ هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ ـ رضى الله عنها ـ أَنَّ الْحَارِثَ بْنَ هِشَامٍ ـ رضى الله عنه ـ سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ كَيْفَ يَأْتِيكَ الْوَحْىُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ أَحْيَانًا يَأْتِينِي مِثْلَ صَلْصَلَةِ الْجَرَسِ ـ وَهُوَ أَشَدُّهُ عَلَىَّ ـ فَيُفْصَمُ عَنِّي وَقَدْ وَعَيْتُ عَنْهُ مَا قَالَ، وَأَحْيَانًا يَتَمَثَّلُ لِيَ الْمَلَكُ رَجُلاً فَيُكَلِّمُنِي فَأَعِي مَا يَقُولُ ‏"‏‏.‏ قَالَتْ عَائِشَةُ رضى الله عنها وَلَقَدْ رَأَيْتُهُ يَنْزِلُ عَلَيْهِ الْوَحْىُ فِي الْيَوْمِ الشَّدِيدِ الْبَرْدِ، فَيَفْصِمُ عَنْهُ وَإِنَّ جَبِينَهُ لَيَتَفَصَّدُ عَرَقًا',
    isnad_chain: [
      "'Abdullah bin Yusuf",
      'Malik (bin Anas)',
      "Hisham bin 'Urwah",
      "his father, 'Urwah bin al-Zubayr",
      "'Aisha (Companion and wife of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam, from the incident itself)",
    ],
    translation:
      "Narrated 'Aisha (the mother of the faithful believers): Al-Harith bin Hisham asked Allah's Messenger (\u25f7), \"O Allah's Messenger! How is the Divine Inspiration revealed to you?\" Allah's Messenger (\u25f7) replied, \"Sometimes it is (revealed) like the ringing of a bell, this form of Inspiration is the hardest of all, and then this state passes off after I have grasped what is inspired. Sometimes the Angel comes in the form of a man and talks to me, and I grasp whatever he says.\" 'Aisha added: Verily I saw the Prophet (\u25f7) being inspired divinely on a very cold day and noticed the sweat dropping from his forehead (as the Inspiration was over).",
    // Translation cross-checked live against sunnah.com/bukhari:2 (Khan translation) at time of writing.
    notes:
      "This chain runs through Imam Malik bin Anas, whose narrations from Hisham bin 'Urwah, from his father 'Urwah bin al-Zubayr, from 'Aisha, are counted among the most trusted chains in the whole science of hadith (often referred to as one of the 'golden chains,' silsilat al-dhahab). Al-Harith bin Hisham was a Makkan Companion; the incident he asks about (how revelation felt to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam) is placed second in the collection, immediately after the hadith on intentions, as Imam al-Bukhari begins the book of Revelation by describing the nature of revelation itself before moving into its history.",
    lessons: [
      'Revelation came to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam in more than one form: sometimes as an intense, bell-like sound the Prophet described as the hardest form for him to bear, and sometimes as an angel appearing in human form and speaking to him directly.',
      "'Aisha's own eyewitness addition (sweat on his forehead even on a cold day) is offered as physical testimony to how demanding receiving revelation was for the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam, not as speculation.",
      "The hadith is transmitted through 'Urwah bin al-Zubayr, who narrates a very large amount of what is known about \u2018Aisha\u2019s testimony generally, since he was her nephew and a student close to her.",
    ],
  },
  {
    num: 3,
    chapter: 'revelation',
    chapter_heading: null,
    // sunnah.com likewise lists this as "Chapter (3)" with no separate
    // descriptive bab title of its own. Left null, same reasoning as hadith 2.
    narrator: "'Aisha (Umm al-Mu'minin)",
    source: 'Sahih al-Bukhari 3',
    also_collected_in: 'Sahih Muslim 160',
    arabic_text:
      'حَدَّثَنَا يَحْيَى بْنُ بُكَيْرٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ عُقَيْلٍ، عَنِ ابْنِ شِهَابٍ، عَنْ عُرْوَةَ بْنِ الزُّبَيْرِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ، أَنَّهَا قَالَتْ أَوَّلُ مَا بُدِئَ بِهِ رَسُولُ اللَّهِ صلى الله عليه وسلم مِنَ الْوَحْىِ الرُّؤْيَا الصَّالِحَةُ فِي النَّوْمِ، فَكَانَ لاَ يَرَى رُؤْيَا إِلاَّ جَاءَتْ مِثْلَ فَلَقِ الصُّبْحِ، ثُمَّ حُبِّبَ إِلَيْهِ الْخَلاَءُ، وَكَانَ يَخْلُو بِغَارِ حِرَاءٍ فَيَتَحَنَّثُ فِيهِ ـ وَهُوَ التَّعَبُّدُ ـ اللَّيَالِيَ ذَوَاتِ الْعَدَدِ قَبْلَ أَنْ يَنْزِعَ إِلَى أَهْلِهِ، وَيَتَزَوَّدُ لِذَلِكَ، ثُمَّ يَرْجِعُ إِلَى خَدِيجَةَ، فَيَتَزَوَّدُ لِمِثْلِهَا، حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ، فَجَاءَهُ الْمَلَكُ فَقَالَ اقْرَأْ‏.‏ قَالَ ‏"‏ مَا أَنَا بِقَارِئٍ ‏"‏‏.‏ قَالَ ‏"‏ فَأَخَذَنِي فَغَطَّنِي حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ قُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّانِيَةَ حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ فَقُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّالِثَةَ، ثُمَّ أَرْسَلَنِي فَقَالَ ‏{‏اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ * خَلَقَ الإِنْسَانَ مِنْ عَلَقٍ * اقْرَأْ وَرَبُّكَ الأَكْرَمُ‏}‏ ‏"‏‏.‏ فَرَجَعَ بِهَا رَسُولُ اللَّهِ صلى الله عليه وسلم يَرْجُفُ فُؤَادُهُ، فَدَخَلَ عَلَى خَدِيجَةَ بِنْتِ خُوَيْلِدٍ رضى الله عنها فَقَالَ ‏"‏ زَمِّلُونِي زَمِّلُونِي ‏"‏‏.‏ فَزَمَّلُوهُ حَتَّى ذَهَبَ عَنْهُ الرَّوْعُ، فَقَالَ لِخَدِيجَةَ وَأَخْبَرَهَا الْخَبَرَ ‏"‏ لَقَدْ خَشِيتُ عَلَى نَفْسِي ‏"‏‏.‏ فَقَالَتْ خَدِيجَةُ كَلاَّ وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا، إِنَّكَ لَتَصِلُ الرَّحِمَ، وَتَحْمِلُ الْكَلَّ، وَتَكْسِبُ الْمَعْدُومَ، وَتَقْرِي الضَّيْفَ، وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ‏.‏ فَانْطَلَقَتْ بِهِ خَدِيجَةُ حَتَّى أَتَتْ بِهِ وَرَقَةَ بْنَ نَوْفَلِ بْنِ أَسَدِ بْنِ عَبْدِ الْعُزَّى ابْنَ عَمِّ خَدِيجَةَ ـ وَكَانَ امْرَأً تَنَصَّرَ فِي الْجَاهِلِيَّةِ، وَكَانَ يَكْتُبُ الْكِتَابَ الْعِبْرَانِيَّ، فَيَكْتُبُ مِنَ الإِنْجِيلِ بِالْعِبْرَانِيَّةِ مَا شَاءَ اللَّهُ أَنْ يَكْتُبَ، وَكَانَ شَيْخًا كَبِيرًا قَدْ عَمِيَ ـ فَقَالَتْ لَهُ خَدِيجَةُ يَا ابْنَ عَمِّ اسْمَعْ مِنَ ابْنِ أَخِيكَ‏.‏ فَقَالَ لَهُ وَرَقَةُ يَا ابْنَ أَخِي مَاذَا تَرَى فَأَخْبَرَهُ رَسُولُ اللَّهِ صلى الله عليه وسلم خَبَرَ مَا رَأَى‏.‏ فَقَالَ لَهُ وَرَقَةُ هَذَا النَّامُوسُ الَّذِي نَزَّلَ اللَّهُ عَلَى مُوسَى صلى الله عليه وسلم يَا لَيْتَنِي فِيهَا جَذَعًا، لَيْتَنِي أَكُونُ حَيًّا إِذْ يُخْرِجُكَ قَوْمُكَ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ أَوَمُخْرِجِيَّ هُمْ ‏"‏‏.‏ قَالَ نَعَمْ، لَمْ يَأْتِ رَجُلٌ قَطُّ بِمِثْلِ مَا جِئْتَ بِهِ إِلاَّ عُودِيَ، وَإِنْ يُدْرِكْنِي يَوْمُكَ أَنْصُرْكَ نَصْرًا مُؤَزَّرًا‏.‏ ثُمَّ لَمْ يَنْشَبْ وَرَقَةُ أَنْ تُوُفِّيَ وَفَتَرَ الْوَحْىُ',
    isnad_chain: [
      'Yahya bin Bukayr',
      'Al-Layth (bin Sa\u2018d)',
      "'Uqayl (bin Khalid)",
      'Ibn Shihab (al-Zuhri)',
      "'Urwah bin al-Zubayr",
      "'Aisha (Companion and wife of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam, from the events themselves)",
    ],
    translation:
      "Narrated 'Aisha (the mother of the faithful believers): The first stage of revelation to Allah's Messenger (\u25f7) began with true dreams in his sleep; he never saw a dream but it came true like the brightness of daybreak. Then solitude was made dear to him, and he used to go into seclusion in the cave of Hira, devoting himself there to worship for a number of nights before returning to his family, taking provisions with him for that purpose each time; he would then return to Khadijah and take provisions for a similar stay \u2014 until the Truth came upon him suddenly while he was in the cave of Hira. The angel came to him and said, \"Read!\" He said, \"I am not one who reads.\" He (the Prophet \u25f7) said, \"He took hold of me and pressed me until I reached the limit of my endurance, then released me and said, 'Read!' I said, 'I am not one who reads.' So he took hold of me and pressed me a second time until I reached the limit of my endurance, then released me and said, 'Read!' I said, 'I am not one who reads.' So he took hold of me and pressed me a third time, then released me and said: 'Read, in the name of your Lord who created \u2014 created man from a clinging clot. Read, and your Lord is the Most Generous.'\" Allah's Messenger (\u25f7) returned with it, his heart trembling, and went in to Khadijah bint Khuwaylid and said, \"Wrap me up! Wrap me up!\" So they wrapped him until his fear left him. He then told Khadijah what had happened and said, \"I fear for myself.\" Khadijah said, \"Never! By Allah, Allah will never disgrace you. You uphold the ties of kinship, bear the burden of the weak, provide for those who have nothing, are generous to your guests, and help against the calamities that afflict people.\" Khadijah then took him to Waraqah bin Nawfal bin Asad bin 'Abd al-'Uzza, her cousin, who had become a Christian in the pre-Islamic period of ignorance and used to write in the Hebrew script, writing from the Gospel in Hebrew as much as Allah willed him to write, and who was by then a very old man who had lost his sight. Khadijah said to him, \"O cousin, listen to what your nephew has to say.\" Waraqah said to him, \"O my nephew, what have you seen?\" So Allah's Messenger (\u25f7) told him what he had seen. Waraqah said to him, \"This is the Namus (the one who keeps the secrets, i.e. the angel Gabriel) whom Allah sent down to Musa. I wish I were young enough, and could live until the time when your people drive you out.\" Allah's Messenger (\u25f7) said, \"Will they really drive me out?\" He said, \"Yes; never has a man come with anything like what you have brought but was met with hostility, and if I live to see your day, I will support you strongly.\" But not long after, Waraqah died, and revelation paused for a while.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:3 and related sunnah.com search results at time of writing.
    notes:
      "This is the longer, more detailed companion to hadith 2 on how revelation began, and is the account most commonly cited when people describe the story of the first revelation at the cave of Hira. Waraqah bin Nawfal was Khadijah's older cousin, a pre-Islamic Arabian Christian familiar with earlier scripture, whose recognition of the angel as the same one who came to Musa (Moses) 'alayhi al-salam is treated by commentators as early external corroboration from someone versed in earlier revealed tradition, not as a doctrinal source in its own right. The 'pause' (fatrah) mentioned at the end of Waraqah's death is picked up again in the next hadith.",
    lessons: [
      "Revelation to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam did not begin abruptly with Gabriel's visit at Hira; it was preceded by a period of true dreams and a growing love of solitude, so the full experience unfolded gradually rather than all at once.",
      "The Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam first reaction to the encounter at Hira was fear and distress, not confidence, and Khadijah's response \u2014 grounding her reassurance in his known character (kindness to kin, honesty, generosity) rather than in the content of the revelation itself \u2014 is treated by scholars as an early model for recognizing sincerity through a person's established conduct.",
      "Waraqah bin Nawfal, though he died before Islam was formally established, is treated respectfully in the tradition for his honest and immediate recognition of what was happening, based on his own prior knowledge of revealed scripture.",
    ],
  },
  {
    num: 4,
    chapter: 'revelation',
    chapter_heading: null,
    // sunnah.com lists this as a continuation without a distinct bab
    // heading of its own, following directly from hadith 3's narrative.
    narrator: "Jabir bin 'Abdullah Al-Ansari",
    source: 'Sahih al-Bukhari 4',
    also_collected_in: 'Sahih Muslim 161',
    arabic_text:
      'قَالَ ابْنُ شِهَابٍ وَأَخْبَرَنِي أَبُو سَلَمَةَ بْنُ عَبْدِ الرَّحْمَنِ، أَنَّ جَابِرَ بْنَ عَبْدِ اللَّهِ الأَنْصَارِيَّ، قَالَ ـ وَهُوَ يُحَدِّثُ عَنْ فَتْرَةِ الْوَحْىِ، فَقَالَ ـ فِي حَدِيثِهِ " بَيْنَا أَنَا أَمْشِي، إِذْ سَمِعْتُ صَوْتًا، مِنَ السَّمَاءِ، فَرَفَعْتُ بَصَرِي فَإِذَا الْمَلَكُ الَّذِي جَاءَنِي بِحِرَاءٍ جَالِسٌ عَلَى كُرْسِيٍّ بَيْنَ السَّمَاءِ وَالأَرْضِ، فَرُعِبْتُ مِنْهُ، فَرَجَعْتُ فَقُلْتُ زَمِّلُونِي. فَأَنْزَلَ اللَّهُ تَعَالَى {يَا أَيُّهَا الْمُدَّثِّرُ * قُمْ فَأَنْذِرْ} إِلَى قَوْلِهِ {وَالرُّجْزَ فَاهْجُرْ} فَحَمِيَ الْوَحْىُ وَتَتَابَعَ ". تَابَعَهُ عَبْدُ اللَّهِ بْنُ يُوسُفَ وَأَبُو صَالِحٍ. وَتَابَعَهُ هِلاَلُ بْنُ رَدَّادٍ عَنِ الزُّهْرِيِّ. وَقَالَ يُونُسُ وَمَعْمَرٌ " بَوَادِرُهُ "',
    isnad_chain: [
      'Ibn Shihab (al-Zuhri)',
      "Abu Salama bin 'Abd al-Rahman",
      "Jabir bin 'Abdullah al-Ansari (Companion, from the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam)",
    ],
    translation:
      "Ibn Shihab said, and Abu Salama bin 'Abd al-Rahman informed me, that Jabir bin 'Abdullah al-Ansari said, while speaking about the pause in revelation (fatrat al-wahy), relating what the Prophet (\u25f7) said: \"While I was walking, I suddenly heard a voice from the sky. I raised my eyes, and there was the angel who had come to me at Hira, sitting on a chair between heaven and earth. I was struck with fear on account of him, and I went back and said, 'Wrap me up! Wrap me up!' Then Allah, the Exalted, revealed: 'O you wrapped in your cloak! Arise and warn!' up to His saying, 'And keep away from idols.' After that revelation grew intense and followed on without a break.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:4 and related sunnah.com search results at time of writing.
    notes:
      "The Arabic carries a short chain-of-transmission notice after the main text (tab\u0101bu\u2018 / corroboration), naming 'Abdullah bin Yusuf and Abu Salih as having narrated the same report by another route, and Hilal bin Raddad as narrating it likewise from al-Zuhri, with Yunus and Ma'mar reportedly using the word 'baw\u0101diruh' (roughly, 'his collarbones/shoulders trembled') at the point where this version has 'I was struck with fear.' These are standard Bukhari-style corroboration notes rather than separate hadith, included here for completeness rather than folded into the main translation. This hadith continues directly from where hadith 3 ends (Waraqah's death and the pause in revelation): it describes the second, decisive revelation (Surah al-Muddaththir, 'The Cloaked One') that ended that pause.",
    lessons: [
      "The 'pause' in revelation mentioned at the end of hadith 3 was not the end of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam prophethood but an interval before revelation resumed and then became frequent and continuous.",
      "The Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam instinctive response to the angel's reappearance \u2014 fear, and asking to be wrapped \u2014 mirrors his reaction at Hira in hadith 3, showing this was a genuine, involuntary human reaction rather than something he had grown used to.",
      "The verses revealed here (the opening of Surah al-Muddaththir) command the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam to 'arise and warn,' which scholars mark as the beginning of open, public prophethood, distinct from the private confirmation of Iqra' at Hira in hadith 3.",
    ],
  },
  {
    num: 5,
    chapter: 'revelation',
    chapter_heading: null,
    // Part of the same narrative arc as 3-4-6-7; sunnah.com does not
    // give this its own descriptive bab title within Kitab Bad' al-Wahy.
    narrator: "Ibn 'Abbas",
    source: 'Sahih al-Bukhari 5',
    arabic_text:
      'حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، قَالَ حَدَّثَنَا أَبُو عَوَانَةَ، قَالَ حَدَّثَنَا مُوسَى بْنُ أَبِي عَائِشَةَ، قَالَ حَدَّثَنَا سَعِيدُ بْنُ جُبَيْرٍ، عَنِ ابْنِ عَبَّاسٍ، فِي قَوْلِهِ تَعَالَى {لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ} قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُعَالِجُ مِنَ التَّنْزِيلِ شِدَّةً، وَكَانَ مِمَّا يُحَرِّكُ شَفَتَيْهِ ـ فَقَالَ ابْنُ عَبَّاسٍ فَأَنَا أُحَرِّكُهُمَا لَكُمْ كَمَا كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُحَرِّكُهُمَا. وَقَالَ سَعِيدٌ أَنَا أُحَرِّكُهُمَا كَمَا رَأَيْتُ ابْنَ عَبَّاسٍ يُحَرِّكُهُمَا. فَحَرَّكَ شَفَتَيْهِ ـ فَأَنْزَلَ اللَّهُ تَعَالَى {لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ* إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ} قَالَ جَمْعُهُ لَهُ فِي صَدْرِكَ، وَتَقْرَأَهُ {فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ} قَالَ فَاسْتَمِعْ لَهُ وَأَنْصِتْ {ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ} ثُمَّ إِنَّ عَلَيْنَا أَنْ تَقْرَأَهُ. فَكَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم بَعْدَ ذَلِكَ إِذَا أَتَاهُ جِبْرِيلُ اسْتَمَعَ، فَإِذَا انْطَلَقَ جِبْرِيلُ قَرَأَهُ النَّبِيُّ صلى الله عليه وسلم كَمَا قَرَأَهُ',
    isnad_chain: [
      'Musa bin Isma\u2018il',
      "Abu 'Awana",
      "Musa bin Abi 'Aisha",
      'Sa\u2018id bin Jubayr',
      "Ibn 'Abbas (Companion)",
    ],
    translation:
      "Narrated Sa'id bin Jubayr, from Ibn 'Abbas, regarding the saying of Allah the Exalted, \"Move not your tongue concerning (the Qur'an) to hasten with it\": He said, Allah's Messenger (\u25f7) used to experience great difficulty with the revelation, and he used to move his lips (quickly, trying to hold onto it). Ibn 'Abbas said, \"I am moving them for you as Allah's Messenger (\u25f7) used to move his.\" And Sa'id said, \"I am moving them as I saw Ibn 'Abbas move his\" \u2014 and he moved his lips. Then Allah the Exalted revealed: \"Move not your tongue concerning (the Qur'an) to hasten with it. Indeed, upon Us is its collection and its recitation.\" He (Ibn 'Abbas) said: (that means) its collection in your chest, and that you recite it. \"So when We have recited it, follow its recitation.\" He said: (that means) listen to it and be silent. \"Then upon Us is its clarification\" \u2014 then it is upon Us to make you recite it clearly. So after that, whenever Gabriel came to him, Allah's Messenger (\u25f7) would listen attentively, and when Gabriel had left, the Prophet (\u25f7) would recite it just as Gabriel had recited it.",
    // Translation composed fresh and checked for meaning against sunnah.com search results for this hadith and its parallel narration (Bukhari 4929/7524) at time of writing.
    notes:
      "This hadith explains the occasion of revelation ('sabab al-nuzul') for the opening verses of Surah al-Qiyamah (75:16-19). It shows the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam anxiously trying to move his lips along with Gabriel's recitation out of concern that he might forget or lose part of what was being revealed, after which Allah reassured him that its preservation in his memory and its correct recitation afterward were guaranteed. Sa'id bin Jubayr demonstrating the lip movement he had seen from Ibn 'Abbas, who in turn was demonstrating what he had seen the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam do, is a notable example within the isnad itself of a physical action being transmitted hand-to-hand across three generations, not just a verbal report.",
    lessons: [
      "The Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam eagerness to move his lips along with the revelation came from care and concern for preserving the Qur'an accurately, not from doubt or impatience.",
      "Allah's reassurance \u2014 that collecting the Qur'an in the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam memory and its correct recitation were both guaranteed \u2014 is treated by scholars as an early promise regarding the preservation of the Qur'an, distinct from the more general verse on the Qur'an's preservation (15:9).",
      "The instruction to 'listen and be silent' while revelation was being delivered, then follow its recitation afterward, is cited as a general principle for how a listener should receive the Qur'an being recited to them.",
    ],
  },
  {
    num: 6,
    chapter: 'revelation',
    chapter_heading: null,
    // Continues the same run of narrations without its own separate bab title.
    narrator: "Ibn 'Abbas",
    source: 'Sahih al-Bukhari 6',
    also_collected_in: 'Sahih al-Bukhari 1902, 3554, 4997 (same report narrated elsewhere in the collection, in the Books of Fasting, Merits, and Virtues of the Qur\u2019an)',
    arabic_text:
      'حَدَّثَنَا عَبْدَانُ، قَالَ أَخْبَرَنَا عَبْدُ اللَّهِ، قَالَ أَخْبَرَنَا يُونُسُ، عَنِ الزُّهْرِيِّ، ح وَحَدَّثَنَا بِشْرُ بْنُ مُحَمَّدٍ، قَالَ أَخْبَرَنَا عَبْدُ اللَّهِ، قَالَ أَخْبَرَنَا يُونُسُ، وَمَعْمَرٌ، عَنِ الزُّهْرِيِّ، نَحْوَهُ قَالَ أَخْبَرَنِي عُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ، عَنِ ابْنِ عَبَّاسٍ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ صلى الله عليه وسلم أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ',
    isnad_chain: [
      "\u2018Abdan, and (a parallel chain) Bishr bin Muhammad",
      "'Abdullah (bin al-Mubarak)",
      'Yunus (bin Yazid), and (in the parallel chain) also Ma\u2018mar',
      'Al-Zuhri',
      "'Ubaydullah bin 'Abdullah (bin 'Utbah bin Mas'ud)",
      "Ibn 'Abbas (Companion)",
    ],
    translation:
      "Narrated Ibn 'Abbas: Allah's Messenger (\u25f7) was the most generous of all the people, and he was at his most generous in Ramadan, when Gabriel used to meet him. Gabriel met him every night of Ramadan and went through the Qur'an with him. So Allah's Messenger (\u25f7) was more generous in doing good than the freely blowing wind.",
    // Translation composed fresh and checked for meaning against sunnah.com's several narrations of this report (bukhari:6, 1902, 3554, 4997) at time of writing.
    notes:
      "Bukhari records this same report from Ibn 'Abbas in more than one place in the collection (see also_collected_in); here at the start of the Book of Revelation it is placed to illustrate Gabriel's yearly practice of reviewing the Qur'an with the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam during Ramadan ('mudarasah'), which later became the basis for the tradition of extra Qur'an review each Ramadan. The Arabic text shows two parallel chains merged with a 'ha' (\u062d) transfer mark, a standard convention in hadith literature indicating the narrator is switching between two routes that meet at the same point (here, at al-Zuhri).",
    lessons: [
      "The Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam generosity, already the greatest among people, increased further during Ramadan, tying generosity directly to the presence of revelation and the practice of reviewing the Qur'an.",
      "Gabriel's practice of meeting the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam every night of Ramadan to review the Qur'an together (mudarasah) is the origin scholars point to for the tradition of increased Qur'an recitation and review during Ramadan.",
      "The comparison to 'the freely blowing wind' is a well-known Arabic idiom for something that reaches everywhere without being held back, used here to describe the reach and speed of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam generosity.",
    ],
  },
  {
    num: 7,
    chapter: 'revelation',
    chapter_heading: null,
    // Closes out the Book of Revelation (hadith range 1-7); no separate
    // bab title distinct from the long narration itself on sunnah.com.
    narrator: "'Abdullah bin 'Abbas, narrating from Abu Sufyan bin Harb",
    source: 'Sahih al-Bukhari 7',
    also_collected_in: 'Sahih Muslim 1773',
    arabic_text:
      'حَدَّثَنَا أَبُو الْيَمَانِ الْحَكَمُ بْنُ نَافِعٍ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي عُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ عُتْبَةَ بْنِ مَسْعُودٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عَبَّاسٍ، أَخْبَرَهُ أَنَّ أَبَا سُفْيَانَ بْنَ حَرْبٍ أَخْبَرَهُ أَنَّ هِرَقْلَ أَرْسَلَ إِلَيْهِ فِي رَكْبٍ مِنْ قُرَيْشٍ ـ وَكَانُوا تُجَّارًا بِالشَّأْمِ ـ فِي الْمُدَّةِ الَّتِي كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم مَادَّ فِيهَا أَبَا سُفْيَانَ وَكُفَّارَ قُرَيْشٍ، فَأَتَوْهُ وَهُمْ بِإِيلِيَاءَ فَدَعَاهُمْ فِي مَجْلِسِهِ، وَحَوْلَهُ عُظَمَاءُ الرُّومِ ثُمَّ دَعَاهُمْ وَدَعَا بِتَرْجُمَانِهِ فَقَالَ أَيُّكُمْ أَقْرَبُ نَسَبًا بِهَذَا الرَّجُلِ الَّذِي يَزْعُمُ أَنَّهُ نَبِيٌّ فَقَالَ أَبُو سُفْيَانَ فَقُلْتُ أَنَا أَقْرَبُهُمْ نَسَبًا‏.‏ فَقَالَ أَدْنُوهُ مِنِّي، وَقَرِّبُوا أَصْحَابَهُ، فَاجْعَلُوهُمْ عِنْدَ ظَهْرِهِ‏.‏ ثُمَّ قَالَ لِتَرْجُمَانِهِ قُلْ لَهُمْ إِنِّي سَائِلٌ هَذَا عَنْ هَذَا الرَّجُلِ، فَإِنْ كَذَبَنِي فَكَذِّبُوهُ‏.‏ فَوَاللَّهِ لَوْلاَ الْحَيَاءُ مِنْ أَنْ يَأْثِرُوا عَلَىَّ كَذِبًا لَكَذَبْتُ عَنْهُ، ثُمَّ كَانَ أَوَّلَ مَا سَأَلَنِي عَنْهُ أَنْ قَالَ كَيْفَ نَسَبُهُ فِيكُمْ قُلْتُ هُوَ فِينَا ذُو نَسَبٍ‏.‏ قَالَ فَهَلْ قَالَ هَذَا الْقَوْلَ مِنْكُمْ أَحَدٌ قَطُّ قَبْلَهُ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ لاَ‏.‏ قَالَ فَأَشْرَافُ النَّاسِ يَتَّبِعُونَهُ أَمْ ضُعَفَاؤُهُمْ فَقُلْتُ بَلْ ضُعَفَاؤُهُمْ‏.‏ قَالَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ قُلْتُ بَلْ يَزِيدُونَ‏.‏ قَالَ فَهَلْ يَرْتَدُّ أَحَدٌ مِنْهُمْ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ يَغْدِرُ قُلْتُ لاَ، وَنَحْنُ مِنْهُ فِي مُدَّةٍ لاَ نَدْرِي مَا هُوَ فَاعِلٌ فِيهَا‏.‏ قَالَ وَلَمْ تُمْكِنِّي كَلِمَةٌ أُدْخِلُ فِيهَا شَيْئًا غَيْرُ هَذِهِ الْكَلِمَةِ‏.‏ قَالَ فَهَلْ قَاتَلْتُمُوهُ قُلْتُ نَعَمْ‏.‏ قَالَ فَكَيْفَ كَانَ قِتَالُكُمْ إِيَّاهُ قُلْتُ الْحَرْبُ بَيْنَنَا وَبَيْنَهُ سِجَالٌ، يَنَالُ مِنَّا وَنَنَالُ مِنْهُ‏.‏ قَالَ مَاذَا يَأْمُرُكُمْ قُلْتُ يَقُولُ اعْبُدُوا اللَّهَ وَحْدَهُ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَاتْرُكُوا مَا يَقُولُ آبَاؤُكُمْ، وَيَأْمُرُنَا بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ وَالصِّلَةِ‏.‏ فَقَالَ لِلتَّرْجُمَانِ قُلْ لَهُ سَأَلْتُكَ عَنْ نَسَبِهِ، فَذَكَرْتَ أَنَّهُ فِيكُمْ ذُو نَسَبٍ، فَكَذَلِكَ الرُّسُلُ تُبْعَثُ فِي نَسَبِ قَوْمِهَا، وَسَأَلْتُكَ هَلْ قَالَ أَحَدٌ مِنْكُمْ هَذَا الْقَوْلَ فَذَكَرْتَ أَنْ لاَ، فَقُلْتُ لَوْ كَانَ أَحَدٌ قَالَ هَذَا الْقَوْلَ قَبْلَهُ لَقُلْتُ رَجُلٌ يَأْتَسِي بِقَوْلٍ قِيلَ قَبْلَهُ، وَسَأَلْتُكَ هَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ فَذَكَرْتَ أَنْ لاَ، قُلْتُ فَلَوْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ رَجُلٌ يَطْلُبُ مُلْكَ أَبِيهِ، وَسَأَلْتُكَ هَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ فَذَكَرْتَ أَنْ لاَ، فَقَدْ أَعْرِفُ أَنَّهُ لَمْ يَكُنْ لِيَذَرَ الْكَذِبَ عَلَى النَّاسِ وَيَكْذِبَ عَلَى اللَّهِ، وَسَأَلْتُكَ أَشْرَافُ النَّاسِ اتَّبَعُوهُ أَمْ ضُعَفَاؤُهُمْ فَذَكَرْتَ أَنَّ ضُعَفَاءَهُمُ اتَّبَعُوهُ، وَهُمْ أَتْبَاعُ الرُّسُلِ، وَسَأَلْتُكَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ فَذَكَرْتَ أَنَّهُمْ يَزِيدُونَ، وَكَذَلِكَ أَمْرُ الإِيمَانِ حَتَّى يَتِمَّ، وَسَأَلْتُكَ أَيَرْتَدُّ أَحَدٌ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ فَذَكَرْتَ أَنْ لاَ، وَكَذَلِكَ الإِيمَانُ حِينَ تُخَالِطُ بَشَاشَتُهُ الْقُلُوبَ، وَسَأَلْتُكَ هَلْ يَغْدِرُ فَذَكَرْتَ أَنْ لاَ، وَكَذَلِكَ الرُّسُلُ لاَ تَغْدِرُ، وَسَأَلْتُكَ بِمَا يَأْمُرُكُمْ، فَذَكَرْتَ أَنَّهُ يَأْمُرُكُمْ أَنْ تَعْبُدُوا اللَّهَ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَيَنْهَاكُمْ عَنْ عِبَادَةِ الأَوْثَانِ، وَيَأْمُرُكُمْ بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ‏.‏ فَإِنْ كَانَ مَا تَقُولُ حَقًّا فَسَيَمْلِكُ مَوْضِعَ قَدَمَىَّ هَاتَيْنِ، وَقَدْ كُنْتُ أَعْلَمُ أَنَّهُ خَارِجٌ، لَمْ أَكُنْ أَظُنُّ أَنَّهُ مِنْكُمْ، فَلَوْ أَنِّي أَعْلَمُ أَنِّي أَخْلُصُ إِلَيْهِ لَتَجَشَّمْتُ لِقَاءَهُ، وَلَوْ كُنْتُ عِنْدَهُ لَغَسَلْتُ عَنْ قَدَمِهِ‏.‏ ثُمَّ دَعَا بِكِتَابِ رَسُولِ اللَّهِ صلى الله عليه وسلم الَّذِي بَعَثَ بِهِ دِحْيَةُ إِلَى عَظِيمِ بُصْرَى، فَدَفَعَهُ إِلَى هِرَقْلَ فَقَرَأَهُ فَإِذَا فِيهِ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ‏.‏ مِنْ مُحَمَّدٍ عَبْدِ اللَّهِ وَرَسُولِهِ إِلَى هِرَقْلَ عَظِيمِ الرُّومِ‏.‏ سَلاَمٌ عَلَى مَنِ اتَّبَعَ الْهُدَى، أَمَّا بَعْدُ فَإِنِّي أَدْعُوكَ بِدِعَايَةِ الإِسْلاَمِ، أَسْلِمْ تَسْلَمْ، يُؤْتِكَ اللَّهُ أَجْرَكَ مَرَّتَيْنِ، فَإِنْ تَوَلَّيْتَ فَإِنَّ عَلَيْكَ إِثْمَ الأَرِيسِيِّينَ وَ‏{‏يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَى كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَنْ لاَ نَعْبُدَ إِلاَّ اللَّهَ وَلاَ نُشْرِكَ بِهِ شَيْئًا وَلاَ يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِنْ دُونِ اللَّهِ فَإِنْ تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ‏}‏ قَالَ أَبُو سُفْيَانَ فَلَمَّا قَالَ مَا قَالَ، وَفَرَغَ مِنْ قِرَاءَةِ الْكِتَابِ كَثُرَ عِنْدَهُ الصَّخَبُ، وَارْتَفَعَتِ الأَصْوَاتُ وَأُخْرِجْنَا، فَقُلْتُ لأَصْحَابِي حِينَ أُخْرِجْنَا لَقَدْ أَمِرَ أَمْرُ ابْنِ أَبِي كَبْشَةَ، إِنَّهُ يَخَافُهُ مَلِكُ بَنِي الأَصْفَرِ‏.‏ فَمَا زِلْتُ مُوقِنًا أَنَّهُ سَيَظْهَرُ حَتَّى أَدْخَلَ اللَّهُ عَلَىَّ الإِسْلاَمَ‏.‏ وَكَانَ ابْنُ النَّاظُورِ صَاحِبُ إِيلِيَاءَ وَهِرَقْلَ سُقُفًّا عَلَى نَصَارَى الشَّأْمِ، يُحَدِّثُ أَنَّ هِرَقْلَ حِينَ قَدِمَ إِيلِيَاءَ أَصْبَحَ يَوْمًا خَبِيثَ النَّفْسِ، فَقَالَ بَعْضُ بَطَارِقَتِهِ قَدِ اسْتَنْكَرْنَا هَيْئَتَكَ‏.‏ قَالَ ابْنُ النَّاظُورِ وَكَانَ هِرَقْلُ حَزَّاءً يَنْظُرُ فِي النُّجُومِ، فَقَالَ لَهُمْ حِينَ سَأَلُوهُ إِنِّي رَأَيْتُ اللَّيْلَةَ حِينَ نَظَرْتُ فِي النُّجُومِ مَلِكَ الْخِتَانِ قَدْ ظَهَرَ، فَمَنْ يَخْتَتِنُ مِنْ هَذِهِ الأُمَّةِ قَالُوا لَيْسَ يَخْتَتِنُ إِلاَّ الْيَهُودُ فَلاَ يُهِمَّنَّكَ شَأْنُهُمْ وَاكْتُبْ إِلَى مَدَايِنِ مُلْكِكَ، فَيَقْتُلُوا مَنْ فِيهِمْ مِنَ الْيَهُودِ‏.‏ فَبَيْنَمَا هُمْ عَلَى أَمْرِهِمْ أُتِيَ هِرَقْلُ بِرَجُلٍ أَرْسَلَ بِهِ مَلِكُ غَسَّانَ، يُخْبِرُ عَنْ خَبَرِ رَسُولِ اللَّهِ صلى الله عليه وسلم فَلَمَّا اسْتَخْبَرَهُ هِرَقْلُ قَالَ اذْهَبُوا فَانْظُرُوا أَمُخْتَتِنٌ هُوَ أَمْ لاَ‏.‏ فَنَظَرُوا إِلَيْهِ، فَحَدَّثُوهُ أَنَّهُ مُخْتَتِنٌ، وَسَأَلَهُ عَنِ الْعَرَبِ فَقَالَ هُمْ يَخْتَتِنُونَ‏.‏ فَقَالَ هِرَقْلُ هَذَا مَلِكُ هَذِهِ الأُمَّةِ قَدْ ظَهَرَ‏.‏ ثُمَّ كَتَبَ هِرَقْلُ إِلَى صَاحِبٍ لَهُ بِرُومِيَةَ، وَكَانَ نَظِيرَهُ فِي الْعِلْمِ، وَسَارَ هِرَقْلُ إِلَى حِمْصَ، فَلَمْ يَرِمْ حِمْصَ حَتَّى أَتَاهُ كِتَابٌ مِنْ صَاحِبِهِ يُوَافِقُ رَأْىَ هِرَقْلَ عَلَى خُرُوجِ النَّبِيِّ صلى الله عليه وسلم وَأَنَّهُ نَبِيٌّ، فَأَذِنَ هِرَقْلُ لِعُظَمَاءِ الرُّومِ فِي دَسْكَرَةٍ لَهُ بِحِمْصَ ثُمَّ أَمَرَ بِأَبْوَابِهَا فَغُلِّقَتْ، ثُمَّ اطَّلَعَ فَقَالَ يَا مَعْشَرَ الرُّومِ، هَلْ لَكُمْ فِي الْفَلاَحِ وَالرُّشْدِ وَأَنْ يَثْبُتَ مُلْكُكُمْ فَتُبَايِعُوا هَذَا النَّبِيَّ، فَحَاصُوا حَيْصَةَ حُمُرِ الْوَحْشِ إِلَى الأَبْوَابِ، فَوَجَدُوهَا قَدْ غُلِّقَتْ، فَلَمَّا رَأَى هِرَقْلُ نَفْرَتَهُمْ، وَأَيِسَ مِنَ الإِيمَانِ قَالَ رُدُّوهُمْ عَلَىَّ‏.‏ وَقَالَ إِنِّي قُلْتُ مَقَالَتِي آنِفًا أَخْتَبِرُ بِهَا شِدَّتَكُمْ عَلَى دِينِكُمْ، فَقَدْ رَأَيْتُ‏.‏ فَسَجَدُوا لَهُ وَرَضُوا عَنْهُ، فَكَانَ ذَلِكَ آخِرَ شَأْنِ هِرَقْلَ‏.‏ رَوَاهُ صَالِحُ بْنُ كَيْسَانَ وَيُونُسُ وَمَعْمَرٌ عَنِ الزُّهْرِيِّ',
    isnad_chain: [
      'Abu al-Yaman al-Hakam bin Nafi\u2018',
      "Shu'ayb (bin Abi Hamza)",
      'Al-Zuhri',
      "'Ubaydullah bin 'Abdullah bin 'Utbah bin Mas'ud",
      "'Abdullah bin 'Abbas",
      "Abu Sufyan bin Harb (Companion, eyewitness to the meeting with Heraclius)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Abbas: Abu Sufyan bin Harb informed him that Heraclius had sent for him while he was with a caravan of Quraysh \u2014 they were merchants trading in Syria \u2014 during the period when Allah's Messenger (\u25f7) had a truce with Abu Sufyan and the disbelievers of Quraysh. They came to him while he was in Jerusalem. He summoned them to his court, with the great men of Byzantium around him, then called for them and called for his interpreter, and said, \"Which of you is nearest in kinship to this man who claims to be a prophet?\" Abu Sufyan said: I said, \"I am the nearest of them in kinship.\" He said, \"Bring him close to me, and bring his companions near and place them behind him.\" Then he said to his interpreter, \"Tell them I am going to ask this man about that man; if he lies to me, contradict him.\" Abu Sufyan said: By Allah, had it not been for the shame of being remembered as a liar, I would have lied about him. Then the first thing he asked me about him was, \"What is his lineage among you?\" I said, \"He is of noble lineage among us.\" He said, \"Has anyone among you ever said this saying before him?\" I said, \"No.\" He said, \"Was any of his forefathers a king?\" I said, \"No.\" He said, \"Do the noble among the people follow him, or the weak?\" I said, \"Rather the weak.\" He said, \"Are they increasing or decreasing?\" I said, \"They are increasing.\" He said, \"Does anyone among them turn back from his religion out of displeasure with it, after entering it?\" I said, \"No.\" He said, \"Did you accuse him of lying before he said what he said?\" I said, \"No.\" He said, \"Does he ever betray his word?\" I said, \"No; we are now in a truce with him and do not know what he will do in it.\" Abu Sufyan said: I could not find a way to insert anything against him except that statement. He said, \"Have you fought him?\" I said, \"Yes.\" He said, \"How did your fighting with him go?\" I said, \"The war between us goes back and forth; he gains from us and we gain from him.\" He said, \"What does he command you to do?\" I said, \"He says: worship Allah alone, do not associate anything with Him, abandon what your forefathers used to say, and he commands us to pray, to speak the truth, to be chaste, and to keep ties of kinship.\" Then he said to the interpreter, \"Say to him: I asked you about his lineage, and you said he is of noble lineage among you \u2014 and messengers are indeed sent from the noble lineage of their people. I asked whether anyone had said this saying before him, and you said no \u2014 for if anyone had, I would have thought him a man following an earlier saying. I asked whether any of his forefathers was a king, and you said no \u2014 for if so, I would have thought him a man seeking his father's kingdom. I asked whether you accused him of lying before he said what he said, and you said no \u2014 so I know he would not leave off lying about men only to lie about Allah. I asked whether the noble or the weak among the people follow him, and you said the weak \u2014 and they are the followers of the messengers. I asked whether they are increasing or decreasing, and you said increasing \u2014 such is faith until it is complete. I asked whether anyone turns back from his religion after entering it, and you said no \u2014 such is faith, once its sweetness mixes with the heart. I asked whether he ever betrays, and you said no \u2014 thus are the messengers, they do not betray. I asked what he commands you, and you said he commands you to worship Allah alone and forbids the worship of idols, and commands prayer, truthfulness, and chastity. If what you say is true, he will indeed come to possess the ground beneath these two feet of mine. I knew that he was to appear, but I did not think he would be from among you; and if I knew I could reach him, I would go to great trouble to meet him, and were I with him, I would wash his feet.\" Then he called for the letter of Allah's Messenger (\u25f7) that had been sent with Dihyah to the governor of Busra, who passed it to Heraclius, and he read it: \"In the name of Allah, the Most Gracious, the Most Merciful. From Muhammad, the slave of Allah and His Messenger, to Heraclius, the ruler of Byzantium. Peace be upon whoever follows the guidance. To proceed: I invite you with the invitation of Islam \u2014 submit and you will be safe, and Allah will give you your reward twice over; but if you turn away, upon you will be the sin of your subjects. 'O People of the Scripture! Come to a word common between us and you: that we worship none but Allah, that we associate nothing with Him, and that none of us take others as lords besides Allah.' Then if they turn away, say: bear witness that we are Muslims.\" Abu Sufyan said: When he had finished reading the letter, there was a great uproar around him and raised voices, and we were put out. When we were put out, I said to my companions, \"The affair of the son of Abu Kabsha (i.e. the Prophet) has become great; the king of the Byzantines fears him.\" And I did not cease to be certain that his cause would prevail, until Allah caused Islam to enter my heart. Ibn al-Natur, the governor of Jerusalem and a close companion of Heraclius, used to relate that Heraclius, when he came to Jerusalem, woke up one morning troubled in spirit. Some of his patricians said, \"We find your state displeasing.\" Ibn al-Natur said: Heraclius was a reader of the stars, and he said to them when they asked him, \"I saw last night, when I looked at the stars, that the king of the circumcised had appeared; who among this nation practises circumcision?\" They said, \"None but the Jews practise circumcision; do not let them trouble you \u2014 write to the cities of your kingdom that they kill the Jews who are among them.\" While they were engaged in that matter, a man was brought to Heraclius, sent by the king of Ghassan, bringing news of Allah's Messenger (\u25f7). When Heraclius questioned him, he said, \"Go and see whether he is circumcised or not.\" They looked and reported that he was circumcised. He asked him about the Arabs, and he said, \"They practise circumcision.\" Heraclius said, \"This is the king of this nation who has appeared.\" Then Heraclius wrote to a friend of his in Rome, his equal in knowledge, and set out for Homs. He had not left Homs before a letter came from his friend agreeing with Heraclius's view about the Prophet's (\u25f7) appearance and that he was indeed a prophet. Then Heraclius gave permission for the great men of Byzantium to assemble in one of his halls at Homs, and ordered its doors closed. Then he came forward and said, \"O assembly of Byzantines! Do you wish for success and right guidance, and that your kingdom remain firm, so that you give allegiance to this prophet?\" At that they bolted like wild donkeys toward the doors, but found them closed. When Heraclius saw their aversion and lost hope of their believing, he said, \"Bring them back to me,\" and said, \"I said what I said only to test how firm you were in your religion, and now I have seen it.\" So they prostrated to him and were content with him. And that was the last opportunity concerning Heraclius (i.e. his last chance to accept Islam). This was (also) narrated by Salih bin Kaysan, Yunus, and Ma'mar, from al-Zuhri.",
    // Translation composed fresh and checked for meaning against sunnah.com search results for the Heraclius narration (bukhari:7 and surrounding context) at time of writing; the treaty letter's wording is one of the most widely attested texts in the seerah literature.
    notes:
      "This is by far the longest hadith in the Book of Revelation, and closes it out. It is famous both for being an eyewitness account from Abu Sufyan \u2014 who at the time of the events described was still an opponent of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam and only accepted Islam years later \u2014 and for preserving the text of one of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam letters inviting a foreign ruler to Islam. Heraclius's methodical cross-examination of Abu Sufyan is often cited by scholars as an early, structured 'test' for recognizing a true prophet by his lineage, followers, message, and personal conduct, argued from someone with no motive to flatter the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam at the time. The reference to 'the son of Abu Kabsha' was a disparaging nickname the Quraysh used for the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam before Abu Sufyan's own conversion; it is left as spoken, without softening, since it is part of Abu Sufyan's own reported words at that time.",
    lessons: [
      "Heraclius's line of questioning \u2014 lineage, precedent, social status of followers, growth or decline of the movement, apostasy rates, honesty, trustworthiness, and the content of the message \u2014 is treated by scholars as a template for evaluating claims to prophethood on evidence rather than on the claimant's own say-so.",
      "Abu Sufyan's admission that shame alone (not sincerity) kept him from lying about the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam is preserved deliberately: it shows the testimony came from a hostile, not a friendly, witness, which scholars treat as strengthening its value as evidence.",
      "The Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam letter to Heraclius is one of several such letters sent to contemporary rulers, and its wording (the invitation to Islam, the warning about the sin of one's followers, and the Qur'anic verse quoted at the end) became a model cited in later Islamic diplomatic and da'wah writing.",
      "Heraclius personally recognized the truth of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam claim through astronomy, corroborating testimony, and direct questioning, yet did not act on that recognition when his own nobles resisted \u2014 the hadith presents this as a case of a person perceiving the truth but being unwilling to risk his position for it.",
    ],
  },
  {
    num: 8,
    chapter: 'belief',
    chapter_heading: "Belief, and the Prophet's saying: Islam is built on five",
    chapter_heading_arabic: 'بَابُ الإِيمَانِ وَقَوْلِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ»',
    narrator: "Ibn 'Umar",
    source: 'Sahih al-Bukhari 8',
    also_collected_in: 'Sahih Muslim 16',
    arabic_text:
      'حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُوسَى، قَالَ أَخْبَرَنَا حَنْظَلَةُ بْنُ أَبِي سُفْيَانَ، عَنْ عِكْرِمَةَ بْنِ خَالِدٍ، عَنِ ابْنِ عُمَرَ ـ رضى الله عنهما ـ قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ ‏"',
    isnad_chain: [
      "'Ubaydullah bin Musa",
      'Hanzala bin Abi Sufyan',
      "'Ikrimah bin Khalid",
      "Ibn 'Umar (Companion)",
    ],
    translation:
      "Narrated Ibn 'Umar: Allah's Messenger (\u25f7) said, \"Islam is built on five: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying zakat, Hajj, and fasting Ramadan.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:8 at time of writing.
    notes:
      "This is the opening hadith of the Book of Belief (Kitab al-Iman), the second book of Sahih al-Bukhari, and is one of the most frequently cited hadith in all of Islamic teaching \u2014 it is also the third hadith in Imam al-Nawawi's Forty Hadith. Bukhari's own chapter heading pairs this hadith with an editorial remark of his (not part of the hadith text itself) that 'belief is both saying and acting, and it increases and decreases,' which scholars read as Bukhari signaling his position, against some early theological groups, that iman is not belief alone but belief joined to speech and action. The order of the five items given here (testimony, prayer, zakat, Hajj, then fasting Ramadan) differs slightly from the more commonly quoted ordering (testimony, prayer, zakat, fasting, then Hajj) found in some other narrations of the same hadith; both orderings are authentically transmitted, and scholars do not treat the sequence as doctrinally significant.",
    lessons: [
      "Islam is described here as a structure built on five foundations, a metaphor scholars read as meaning the religion cannot stand firmly if any of the five is missing, even though other acts of worship exist beyond these five.",
      "The two testimonies (that there is no god but Allah, and that Muhammad is His Messenger) are counted as a single pillar rather than two, since affirming one without the other is considered incomplete.",
      "The hadith names one verbal/heart pillar (the testimony), two physical pillars (prayer and fasting), one financial pillar (zakat), and one pillar that combines both body and wealth (Hajj) \u2014 a categorization later scholars developed from this hadith to explain why these five specifically were chosen as the foundation.",
    ],
  },
  {
    num: 9,
    chapter: 'belief',
    chapter_heading: "What is said regarding the deeds of faith",
    chapter_heading_arabic: 'بَابُ أُمُورِ الإِيمَانِ',
    narrator: "Abu Huraira",
    source: 'Sahih al-Bukhari 9',
    also_collected_in: 'Sahih Muslim 35',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ، قَالَ حَدَّثَنَا أَبُو عَامِرٍ الْعَقَدِيُّ، قَالَ حَدَّثَنَا سُلَيْمَانُ بْنُ بِلاَلٍ، عَنْ عَبْدِ اللَّهِ بْنِ دِينَارٍ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ ‏"',
    isnad_chain: [
      "'Abdullah bin Muhammad",
      "Abu 'Amir al-'Aqadi",
      'Sulayman bin Bilal',
      "'Abdullah bin Dinar",
      'Abu Salih',
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: The Prophet (\u25f7) said, \"Faith has over sixty branches, and modesty (haya) is one of those branches.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:9 at time of writing.
    notes:
      "Bukhari's own chapter heading here quotes Qur'an 2:177 and 23:1 on the marks of true piety, tying this hadith to the idea that faith is expressed through a wide range of concrete acts and qualities, not one single thing. 'Branches' (shu'ab) became the basis for later scholarly works that tried to enumerate faith's individual components (e.g. al-Bayhaqi's Shu'ab al-Iman). Haya is a broad term covering modesty, self-respect, and a sense of shame that restrains a person from wrongdoing; the Arabic word resists a single-word English translation, which is why this term is often left transliterated or rendered with several English words together.",
    lessons: [
      "Faith is described as having many distinct branches rather than being a single indivisible state, which scholars take to mean that a believer's faith is expressed through a wide range of concrete beliefs and actions.",
      "Modesty (haya) is singled out by name as one specific branch of faith, showing that an inward quality of character, not only ritual worship, counts as part of iman.",
      "The hadith is treated as an early foundation for later scholarly attempts to catalogue and enumerate the specific branches of faith in detail.",
    ],
  },
  {
    num: 10,
    chapter: 'belief',
    chapter_heading: "A Muslim is the one who avoids harming Muslims with his tongue and hands",
    chapter_heading_arabic: 'بَابُ الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ',
    narrator: "'Abdullah bin 'Amr",
    source: 'Sahih al-Bukhari 10',
    arabic_text:
      'حَدَّثَنَا آدَمُ بْنُ أَبِي إِيَاسٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ عَبْدِ اللَّهِ بْنِ أَبِي السَّفَرِ، وَإِسْمَاعِيلَ، عَنِ الشَّعْبِيِّ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ ‏"‏‏.‏ قَالَ أَبُو عَبْدِ اللَّهِ وَقَالَ أَبُو مُعَاوِيَةَ حَدَّثَنَا دَاوُدُ عَنْ عَامِرٍ قَالَ سَمِعْتُ عَبْدَ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏ وَقَالَ عَبْدُ الأَعْلَى عَنْ دَاوُدَ عَنْ عَامِرٍ عَنْ عَبْدِ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم',
    isnad_chain: [
      'Adam bin Abi Iyas',
      "Shu'ba",
      "'Abdullah bin Abi al-Safar, and (a parallel narrator) Isma'il",
      "al-Sha'bi",
      "'Abdullah bin 'Amr (Companion)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Amr: The Prophet (\u25f7) said, \"The Muslim is the one from whose tongue and hand other Muslims are safe, and the Muhajir (emigrant) is the one who gives up what Allah has forbidden.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:10 at time of writing.
    notes:
      "The Arabic carries a short note after the main text naming two further narrators (Abu Mu'awiyah and 'Abd al-A'la) who transmitted the same report from Dawud, from 'Amir (al-Sha'bi), from 'Abdullah bin 'Amr, with minor differences in how the chain is phrased \u2014 a standard Bukhari-style corroboration note rather than a separate hadith. This hadith gives two working definitions at once: what makes someone a (true, complete) Muslim, and what makes someone a Muhajir (one who emigrated for Allah's sake), redefining both terms around inner conduct rather than only the outward acts (professing Islam, physically emigrating) the words literally describe.",
    lessons: [
      "The hadith defines a 'complete' Muslim by the harm he does not cause \u2014 to other people's safety and wellbeing via tongue and hand \u2014 rather than only by ritual practice.",
      "The word 'Muhajir' (emigrant), which literally refers to someone who physically left Makkah for Madinah, is here redefined to include anyone who abandons what Allah has forbidden, extending the term beyond the historical migration.",
      "Harm 'by the tongue' is placed on equal footing with harm 'by the hand,' treating verbal harm (backbiting, insults, lies) as seriously as physical harm.",
    ],
  },
  {
    num: 11,
    chapter: 'belief',
    chapter_heading: "Whose Islam is the best (who is the best Muslim)?",
    chapter_heading_arabic: 'بَابُ أَىُّ الإِسْلاَمِ أَفْضَلُ',
    narrator: 'Abu Musa',
    source: 'Sahih al-Bukhari 11',
    also_collected_in: 'Sahih Muslim 42',
    arabic_text:
      'حَدَّثَنَا سَعِيدُ بْنُ يَحْيَى بْنِ سَعِيدٍ الْقُرَشِيِّ، قَالَ حَدَّثَنَا أَبِي قَالَ، حَدَّثَنَا أَبُو بُرْدَةَ بْنُ عَبْدِ اللَّهِ بْنِ أَبِي بُرْدَةَ، عَنْ أَبِي بُرْدَةَ، عَنْ أَبِي مُوسَى ـ رضى الله عنه ـ قَالَ قَالُوا يَا رَسُولَ اللَّهِ أَىُّ الإِسْلاَمِ أَفْضَلُ قَالَ ‏"‏ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ ‏"',
    isnad_chain: [
      'Sa\u2018id bin Yahya bin Sa\u2018id al-Qurashi',
      'his father, Yahya bin Sa\u2018id al-Umawi',
      "Abu Burda bin 'Abdullah bin Abi Burda",
      'Abu Burda',
      'Abu Musa (Companion)',
    ],
    translation:
      "Narrated Abu Musa: They asked, \"O Messenger of Allah, whose Islam is best?\" He (\u25f7) said, \"The one from whose tongue and hand the Muslims are safe.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:11 at time of writing.
    notes:
      "This hadith gives the same substance as hadith 10 but reframed as a direct answer to a direct question ('whose Islam is best'), from a different Companion (Abu Musa al-Ash'ari) and a separate chain. Scholars note the two hadith reinforce each other: hadith 10 defines what a Muslim is, and this one identifies the best kind of Muslim by that same standard.",
    lessons: [
      "When asked to identify the best kind of Muslim, the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam pointed to restraint from harming others rather than to any specific additional ritual or achievement.",
      "The repetition of this idea (see also hadith 10) across separate Companions and chains is read by scholars as underlining how central this standard was considered.",
      "The measure given is a negative one \u2014 what a person refrains from doing to others \u2014 rather than a positive list of extra deeds, making it a baseline test applicable to everyone regardless of their other circumstances.",
    ],
  },
  {
    num: 12,
    chapter: 'belief',
    chapter_heading: "To feed (others) is a part of Islam",
    chapter_heading_arabic: 'بَابُ إِطْعَامُ الطَّعَامِ مِنَ الإِسْلاَمِ',
    narrator: "'Abdullah bin 'Amr",
    source: 'Sahih al-Bukhari 12',
    arabic_text:
      'حَدَّثَنَا عَمْرُو بْنُ خَالِدٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ يَزِيدَ، عَنْ أَبِي الْخَيْرِ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ أَنَّ رَجُلاً، سَأَلَ النَّبِيَّ صلى الله عليه وسلم أَىُّ الإِسْلاَمِ خَيْرٌ قَالَ ‏"‏ تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ ‏',
    isnad_chain: [
      "'Amr bin Khalid",
      'al-Layth (bin Sa\u2018d)',
      'Yazid bin Abi Habib',
      'Abu al-Khayr',
      "'Abdullah bin 'Amr (Companion)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Amr: A man asked the Prophet (\u25f7), \"Which quality of Islam is best?\" He (\u25f7) said, \"That you feed others and give greetings of peace to those you know and those you do not know.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:12 at time of writing.
    notes:
      "Commentators note the wording of the question shifts here from 'afdal' (hadith 11, roughly 'most rewarding in quantity') to 'khayr' (this hadith, roughly 'best in quality/benefit'), a distinction some scholars of the language draw out even though both are usually translated simply as 'best.' The two acts named \u2014 feeding others and greeting strangers as readily as acquaintances \u2014 are treated as complementary: one addresses material need, the other addresses social distance and unfamiliarity.",
    lessons: [
      "Feeding others is named as a defining quality of good Islam, not merely a recommended act of charity on the side.",
      "Greeting people you don't know, and not only those already familiar to you, is specifically highlighted \u2014 read by scholars as instruction against limiting kindness to one's existing social circle.",
      "Both acts named are simple and available to nearly everyone, in contrast to answers built around wealth, status, or rare achievement.",
    ],
  },
  {
    num: 13,
    chapter: 'belief',
    chapter_heading: "To like for one's (Muslim) brother what one likes for oneself is a part of faith",
    chapter_heading_arabic: 'بَابُ مِنَ الإِيمَانِ أَنْ يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    narrator: 'Anas',
    source: 'Sahih al-Bukhari 13',
    also_collected_in: 'Sahih Muslim 45',
    arabic_text:
      'حَدَّثَنَا مُسَدَّدٌ، قَالَ حَدَّثَنَا يَحْيَى، عَنْ شُعْبَةَ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ ـ رضى الله عنه ـ عََنِ النَّبِيِّ صلى الله عليه وسلم‏.‏ وَعَنْ حُسَيْنٍ الْمُعَلِّمِ، قَالَ حَدَّثَنَا قَتَادَةُ، عَنْ أَنَسٍ، ععَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ ‏"',
    isnad_chain: [
      'Musaddad',
      'Yahya (bin Sa\u2018id al-Qattan)',
      "Shu'ba, and (a parallel chain) Husayn al-Mu'allim",
      'Qatada',
      'Anas (Companion)',
    ],
    translation:
      "Narrated Anas: The Prophet (\u25f7) said, \"None of you truly believes until he loves for his brother what he loves for himself.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:13 at time of writing.
    notes:
      "This is one of the most widely quoted hadith in Islamic teaching (it is also the 13th hadith in Imam al-Nawawi's Forty Hadith collection). The Arabic gives two parallel routes to the same wording, both through Qatada from Anas \u2014 a standard way Bukhari strengthens a report by citing more than one chain reaching the same narrator. Commentators (e.g. Ibn Rajab) explain the hadith as calling for a believer to want for other believers the same good they want for themselves, and to dislike for them what they dislike for themselves, rather than as a claim that faith is entirely absent without this quality.",
    lessons: [
      "The hadith ties the completeness of one's faith to genuine goodwill toward others, not only to private acts of worship.",
      "The standard given ('what he loves for himself') is self-referential and does not depend on wealth, status, or ability \u2014 it applies at whatever level of good a person already wants for their own life.",
      "'Brother' here is understood by scholars in its broad sense of a fellow believer generally, not only a literal sibling or close friend.",
    ],
  },
  {
    num: 14,
    chapter: 'belief',
    chapter_heading: "To love the Messenger (\u25f7) is a part of faith",
    chapter_heading_arabic: 'بَابُ حُبُّ الرَّسُولِ صلى الله عليه وسلم مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 14',
    arabic_text:
      'حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، قَالَ حَدَّثَنَا أَبُو الزِّنَادِ، عَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ ـ رضى الله عنه ـ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ فَوَالَّذِي نَفْسِي بِيَدِهِ لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ ‏"',
    isnad_chain: [
      'Abu al-Yaman',
      "Shu'ayb",
      'Abu al-Zinad',
      "al-A'raj",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"By Him in Whose hand my soul is, none of you truly believes until I am dearer to him than his father and his child.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:14 at time of writing.
    notes:
      "This hadith opens the chapter Bukhari titles 'Love of the Messenger is part of faith,' and is followed immediately (hadith 15) by a fuller version of the same statement from Anas that extends the comparison to 'all mankind.' Scholars read love for the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam here as love of following and honoring what he taught, not a claim that ordinary familial love is wrong \u2014 it concerns priority when the two would conflict.",
    lessons: [
      "Love for the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam is presented as a condition of complete faith, placed above even the natural love for one's parent or child.",
      "The oath formula ('by Him in Whose hand my soul is') is used by the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam elsewhere in Bukhari to underline a statement of particular importance.",
      "This hadith and hadith 15 are read together as a pair, with hadith 15 broadening the same principle to include love for the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam over 'all mankind,' not only one's immediate family.",
    ],
  },
  {
    num: 15,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation of hadith 14 under the same chapter ("To love the
    // Messenger is a part of faith"); no separate bab title of its own.
    narrator: 'Anas',
    source: 'Sahih al-Bukhari 15',
    arabic_text:
      'حَدَّثَنَا يَعْقُوبُ بْنُ إِبْرَاهِيمَ، قَالَ حَدَّثَنَا ابْنُ عُلَيَّةَ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم ح وَحَدَّثَنَا آدَمُ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم ‏"‏ لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ ‏"',
    isnad_chain: [
      "Ya'qub bin Ibrahim",
      "Ibn 'Ulayyah, from 'Abd al-'Aziz bin Suhayb, from Anas (chain 1); and (parallel chain) Adam, from Shu'ba, from Qatada, from Anas (chain 2)",
      'Anas (Companion)',
    ],
    translation:
      "Narrated Anas: The Prophet (\u25f7) said, \"None of you truly believes until I am dearer to him than his father, his child, and all mankind.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:15 at time of writing.
    notes:
      "This hadith broadens hadith 14 (from Abu Huraira, comparing only to 'his father and his children') by adding 'and all mankind,' and is narrated here through two merged chains both ending at Anas \u2014 the 'ha' (\u062d) mark in the Arabic signals Bukhari switching between the two routes. Read together, hadith 14 and 15 are treated by scholars as the same principle stated at two different scopes: family first, then humanity as a whole.",
    lessons: [
      "The comparison in this version is widened from immediate family (hadith 14) to 'all mankind,' making the standard for complete faith even more comprehensive.",
      "Two separate narrators (Abu Huraira in hadith 14, Anas here) independently report versions of the same core statement, which scholars take as multiple-chain corroboration of its authenticity.",
      "As with hadith 14, this is understood as a matter of priority in case of conflict between loves, not a call to withhold ordinary love for one's family or people generally.",
    ],
  },
  {
    num: 17,
    chapter: 'belief',
    chapter_heading: "To love the Ansar is a sign of faith",
    chapter_heading_arabic: 'بَابُ عَلاَمَةُ الإِيمَانِ حُبُّ الأَنْصَارِ',
    narrator: 'Anas',
    source: 'Sahih al-Bukhari 17',
    also_collected_in: 'Sahih Muslim 75',
    arabic_text:
      'حَدَّثَنَا أَبُو الْوَلِيدِ، قَالَ حَدَّثَنَا شُعْبَةُ، قَالَ أَخْبَرَنِي عَبْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ جَبْرٍ، قَالَ سَمِعْتُ أَنَسًا، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ آيَةُ الإِيمَانِ حُبُّ الأَنْصَارِ، وَآيَةُ النِّفَاقِ بُغْضُ الأَنْصَارِ ‏"',
    isnad_chain: [
      'Abu al-Walid',
      "Shu'ba",
      "'Abdullah bin 'Abdullah bin Jabr",
      'Anas (Companion)',
    ],
    translation:
      "Narrated Anas: The Prophet (\u25f7) said, \"Love of the Ansar is a sign of faith, and hatred of the Ansar is a sign of hypocrisy.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:17 at time of writing.
    notes:
      "The Ansar ('Helpers') were the Muslims of Madinah who sheltered and supported the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam and the Muhajirun (Makkan emigrants) after the hijrah. This hadith is placed here as a specific, historically grounded case of the broader principle from hadith 16 (the sweetness of faith) \u2014 loving a particular group of people purely because of what they did for the sake of Allah and His Messenger \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam is treated as observable evidence of genuine faith.",
    lessons: [
      "A person's attitude toward the Ansar specifically \u2014 not people in general \u2014 is given here as a concrete, checkable sign of the state of their faith or hypocrisy.",
      "Because the Ansar's defining contribution was material and personal sacrifice for the sake of Islam, love or hatred of them functions as an indirect measure of one's own commitment to the same cause.",
      "This hadith is one of several in the collection singling out love of a particular group (see also love of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam in hadith 14\u201315) as a diagnostic test of faith rather than treating faith only as a private, unobservable state.",
    ],
  },
  {
    num: 18,
    chapter: 'belief',
    chapter_heading: null,
    // sunnah.com lists this chapter simply as "Chapter:" with no
    // descriptive bab title given (باب with nothing following it).
    // Left null rather than inventing one.
    narrator: "'Ubada bin As-Samit",
    source: 'Sahih al-Bukhari 18',
    also_collected_in: 'Sahih Muslim 1709',
    arabic_text:
      'حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي أَبُو إِدْرِيسَ، عَائِذُ اللَّهِ بْنُ عَبْدِ اللَّهِ أَنَّ عُبَادَةَ بْنَ الصَّامِتِ ـ رضى الله عنه ـ وَكَانَ شَهِدَ بَدْرًا، وَهُوَ أَحَدُ النُّقَبَاءِ لَيْلَةَ الْعَقَبَةِ ـ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ وَحَوْلَهُ عِصَابَةٌ مِنْ أَصْحَابِهِ ‏"‏ بَايِعُونِي عَلَى أَنْ لاَ تُشْرِكُوا بِاللَّهِ شَيْئًا، وَلاَ تَسْرِقُوا، وَلاَ تَزْنُوا، وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ، وَلاَ تَأْتُوا بِبُهْتَانٍ تَفْتَرُونَهُ بَيْنَ أَيْدِيكُمْ وَأَرْجُلِكُمْ، وَلاَ تَعْصُوا فِي مَعْرُوفٍ، فَمَنْ وَفَى مِنْكُمْ فَأَجْرُهُ عَلَى اللَّهِ، وَمَنْ أَصَابَ مِنْ ذَلِكَ شَيْئًا فَعُوقِبَ فِي الدُّنْيَا فَهُوَ كَفَّارَةٌ لَهُ، وَمَنْ أَصَابَ مِنْ ذَلِكَ شَيْئًا ثُمَّ سَتَرَهُ اللَّهُ، فَهُوَ إِلَى اللَّهِ إِنْ شَاءَ عَفَا عَنْهُ، وَإِنْ شَاءَ عَاقَبَهُ ‏"‏‏.‏ فَبَايَعْنَاهُ عَلَى ذَلِكَ',
    isnad_chain: [
      'Abu al-Yaman',
      "Shu'ayb",
      'Al-Zuhri',
      "Abu Idris, 'A'idhullah bin 'Abdullah",
      "'Ubada bin As-Samit (Companion, present at Badr and one of the twelve leaders (naqibs) chosen the night of the pledge at al-'Aqabah)",
    ],
    translation:
      "Narrated 'Ubada bin As-Samit, who was present at Badr and was one of the naqibs (leaders) on the night of the pledge at al-'Aqabah: Allah's Messenger (\u25f7) said, with a group of his companions around him, \"Pledge to me that you will not associate anything with Allah, not steal, not commit unlawful sexual intercourse, not kill your children, not bring forth a slander that you have invented between your hands and feet, and not disobey me in what is right. Whoever among you fulfills this, his reward is upon Allah. Whoever commits any of these and is punished for it in this world, that punishment is an expiation for it. And whoever commits any of these and Allah conceals it, his matter rests with Allah \u2014 if He wills, He forgives him, and if He wills, He punishes him.\" So we pledged to him on that.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:18 at time of writing.
    notes:
      "This is the pledge of al-'Aqabah, given by a delegation of Madinan Muslims to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam before the hijrah. 'Ubada bin As-Samit was one of the twelve chosen as a naqib (leader/representative) of his people that night, and later fought at Badr. The phrase 'a slander invented between your hands and feet' is a well-known Arabic idiom scholars explain as referring to falsely attributing a child to oneself or one's spouse (i.e. paternity fraud) rather than slander in general, since the surrounding items in the pledge are all major sins with serious social consequences.",
    lessons: [
      "The pledge lists six specific prohibitions taken together as a single foundational commitment, rather than as separate optional promises.",
      "Worldly punishment for one of these sins is described as wiping out its record before Allah (an expiation), while a sin Allah conceals is left entirely to His judgment \u2014 giving two distinct outcomes depending on whether the sin becomes known and punished in this life or not.",
      "This pledge, given before the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam migration to Madinah, is treated in the seerah as a foundational moment establishing the Ansar's commitment to Islam ahead of the hijrah itself.",
    ],
  },
  {
    num: 19,
    chapter: 'belief',
    chapter_heading: "To flee from Al-Fitan (afflictions and trials) is part of religion",
    chapter_heading_arabic: 'بَابُ مِنَ الدِّينِ الْفِرَارُ مِنَ الْفِتَنِ',
    narrator: 'Abu Sa\u2018id Al-Khudri',
    source: 'Sahih al-Bukhari 19',
    also_collected_in: 'Sahih al-Bukhari 3300, 7088 (same report narrated elsewhere in the collection)',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، عَنْ مَالِكٍ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَبْدِ اللَّهِ بْنِ عَبْدِ الرَّحْمَنِ بْنِ أَبِي صَعْصَعَةَ، عَنْ أَبِيهِ، عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، أَنَّهُ قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ يُوشِكُ أَنْ يَكُونَ خَيْرَ مَالِ الْمُسْلِمِ غَنَمٌ يَتْبَعُ بِهَا شَعَفَ الْجِبَالِ وَمَوَاقِعَ الْقَطْرِ، يَفِرُّ بِدِينِهِ مِنَ الْفِتَنِ ‏"',
    isnad_chain: [
      "'Abdullah bin Maslama",
      'Malik (bin Anas)',
      "'Abd al-Rahman bin 'Abdullah bin 'Abd al-Rahman bin Abi Sa\u2018sa\u2018a",
      'his father',
      'Abu Sa\u2018id Al-Khudri (Companion)',
    ],
    translation:
      "Narrated Abu Sa'id Al-Khudri: Allah's Messenger (\u25f7) said, \"A time is coming soon when the best wealth of a Muslim will be sheep, which he follows up to the mountaintops and the places where rain falls, fleeing with his religion from trials.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:19 at time of writing.
    notes:
      "This narration appears more than once elsewhere in Bukhari's collection (see also_collected_in), including in the Book of Afflictions, where the chapter heading explicitly names withdrawing to live among the Bedouin during widespread fitnah. Commentators generally treat this as describing a specific future scenario \u2014 conditions of severe social and religious upheaval \u2014 rather than as blanket advice to withdraw from society at all times; it is one hadith among many in the tradition that must be read against others encouraging community, congregation, and engagement with people.",
    lessons: [
      "The hadith describes withdrawal from society (choosing a simple pastoral life away from population centers) as a foreseeable, legitimate response to a future time of severe religious trial (fitnah), not as an ideal under ordinary circumstances.",
      "Wealth here is redefined by its usefulness for preserving one's religion rather than by its market value \u2014 sheep are named as 'the best wealth' specifically because they support a mobile, self-sufficient life away from turmoil.",
      "This is one of several hadith in Sahih al-Bukhari understood by scholars as prophetic foretelling of difficult future conditions the early Muslim community had not yet experienced.",
    ],
  },
  {
    num: 20,
    chapter: 'belief',
    chapter_heading: "The statement of the Prophet (\u25f7): \"I know Allah better than all of you do\"",
    chapter_heading_arabic: 'بَابُ قَوْلِ النَّبِيِّ صلى الله عليه وسلم «أَنَا أَعْلَمُكُمْ بِاللَّهِ»',
    narrator: "'Aisha",
    source: 'Sahih al-Bukhari 20',
    arabic_text:
      'حَدَّثَنَا مُحَمَّدُ بْنُ سَلاَمٍ الْبِيكَنْدِيُّ ، قَالَ أَخْبَرَنَا عَبْدَةُ، عَنْ هِشَامٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، قَالَتْ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِذَا أَمَرَهُمْ أَمَرَهُمْ مِنَ الأَعْمَالِ بِمَا يُطِيقُونَ قَالُوا إِنَّا لَسْنَا كَهَيْئَتِكَ يَا رَسُولَ اللَّهِ، إِنَّ اللَّهَ قَدْ غَفَرَ لَكَ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ‏.‏ فَيَغْضَبُ حَتَّى يُعْرَفَ الْغَضَبُ فِي وَجْهِهِ ثُمَّ يَقُولُ ‏"‏ إِنَّ أَتْقَاكُمْ وَأَعْلَمَكُمْ بِاللَّهِ أَنَا ‏"',
    isnad_chain: [
      "Muhammad bin Salam al-Bikandi",
      "'Abda (bin Sulayman)",
      'Hisham (bin \u2018Urwah)',
      "his father, 'Urwah bin al-Zubayr",
      "'Aisha (Companion and wife of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam)",
    ],
    translation:
      "Narrated 'Aisha: Whenever Allah's Messenger (\u25f7) commanded the people to do something, he would command them with deeds that were within their ability. They said, \"O Messenger of Allah, we are not like you \u2014 Allah has already forgiven your past and future sins.\" At that he would become angry, until the anger could be seen on his face, and he would say, \"I am the most God-fearing among you, and I know Allah better than any of you.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:20 at time of writing.
    notes:
      "Bukhari's chapter heading pairs this hadith with a short note that knowledge is 'an act of the heart,' citing Qur'an 2:225 on being held to account for what the heart has earned. The Companions' comment ('we are not like you \u2014 you're already forgiven') was meant kindly, encouraging the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam to ease off strenuous devotional practice, but he corrected the reasoning behind it: his forgiven status was not a reason for less worship, and his depth of God-consciousness and knowledge of Allah, not his sinlessness, was the true source of his tireless devotion.",
    lessons: [
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam consistently commanded only what people were realistically able to sustain, showing concern for what is practically achievable rather than demanding maximal effort regardless of capacity.",
      "His anger here is a rare example in the hadith literature of visible displeasure, triggered by a seemingly well-meaning remark that implied his worship was only about erasing sin rather than expressing knowledge of and closeness to Allah.",
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam explicitly names knowledge of Allah, not merely the level of one's sin, as the true driver of devotion \u2014 an idea scholars connect to Bukhari's chapter framing of knowledge as an act of the heart.",
    ],
  },
  {
    num: 21,
    chapter: 'belief',
    chapter_heading: "Whoever hates to revert to disbelief as he hates to be thrown in the fire, this is part of faith",
    chapter_heading_arabic: 'بَابُ مَنْ كَرِهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُلْقَى فِي النَّارِ مِنَ الإِيمَانِ',
    narrator: 'Anas',
    source: 'Sahih al-Bukhari 21',
    arabic_text:
      'حَدَّثَنَا سُلَيْمَانُ بْنُ حَرْبٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاَوَةَ الإِيمَانِ مَنْ كَانَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَمَنْ أَحَبَّ عَبْدًا لاَ يُحِبُّهُ إِلاَّ لِلَّهِ، وَمَنْ يَكْرَهُ أَنْ يَعُودَ فِي الْكُفْرِ بَعْدَ إِذْ أَنْقَذَهُ اللَّهُ، كَمَا يَكْرَهُ أَنْ يُلْقَى فِي النَّارِ ‏"',
    isnad_chain: [
      'Sulayman bin Harb',
      "Shu'ba",
      'Qatada',
      'Anas (Companion)',
    ],
    translation:
      "Narrated Anas: The Prophet (\u25f7) said, \"Three things: whoever has them will find the sweetness of faith \u2014 the one for whom Allah and His Messenger are dearer than anything else; the one who loves another person only for Allah's sake; and the one who hates to return to disbelief after Allah has saved him from it, as he hates being thrown into the Fire.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:21 at time of writing.
    notes:
      "This hadith closely parallels hadith 16, an earlier narration of the same three qualities from Anas by a different route (through Abu Qilaba) under Bukhari's chapter 'The sweetness of faith'; this version, transmitted through Qatada, is placed under its own chapter emphasizing the third quality specifically (hatred of returning to disbelief). Scholars treat the two versions as the same core teaching reported through separate chains, a common feature of Bukhari's arrangement where he repeats a hadith at more than one point to draw out a different implication each time.",
    lessons: [
      "'Sweetness of faith' is presented as an experiential, felt quality \u2014 something a believer can find or notice in themselves \u2014 rather than only an abstract doctrinal state.",
      "Loving another person purely for Allah's sake, without any worldly benefit motivating the friendship, is named as one of the three qualities that produce this sweetness.",
      "The comparison of hatred for disbelief to hatred of being thrown into fire is a vivid, physical image scholars read as showing how visceral and immediate this aversion should be, not a mild preference.",
    ],
  },
  {
    num: 22,
    chapter: 'belief',
    chapter_heading: "The grades in superiority of believers according to their good deeds",
    chapter_heading_arabic: 'بَابُ تَفَاضُلِ أَهْلِ الإِيمَانِ فِي الأَعْمَالِ',
    narrator: 'Abu Sa\u2018id Al-Khudri',
    source: 'Sahih al-Bukhari 22',
    arabic_text:
      'حَدَّثَنَا إِسْمَاعِيلُ، قَالَ حَدَّثَنِي مَالِكٌ، عَنْ عَمْرِو بْنِ يَحْيَى الْمَازِنِيِّ، عَنْ أَبِيهِ، عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ يَدْخُلُ أَهْلُ الْجَنَّةِ الْجَنَّةَ، وَأَهْلُ النَّارِ النَّارَ، ثُمَّ يَقُولُ اللَّهُ تَعَالَى أَخْرِجُوا مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ حَبَّةٍ مِنْ خَرْدَلٍ مِنْ إِيمَانٍ‏.‏ فَيُخْرَجُونَ مِنْهَا قَدِ اسْوَدُّوا فَيُلْقَوْنَ فِي نَهَرِ الْحَيَا ـ أَوِ الْحَيَاةِ، شَكَّ مَالِكٌ ـ فَيَنْبُتُونَ كَمَا تَنْبُتُ الْحِبَّةُ فِي جَانِبِ السَّيْلِ، أَلَمْ تَرَ أَنَّهَا تَخْرُجُ صَفْرَاءَ مُلْتَوِيَةً ‏"‏‏.‏ قَالَ وُهَيْبٌ حَدَّثَنَا عَمْرٌو ‏"‏ الْحَيَاةِ ‏"‏‏.‏ وَقَالَ ‏"‏ خَرْدَلٍ مِنْ خَيْرٍ ‏"',
    isnad_chain: [
      "Isma'il (bin Abi Uways)",
      'Malik (bin Anas)',
      "'Amr bin Yahya al-Mazini",
      'his father',
      'Abu Sa\u2018id Al-Khudri (Companion)',
    ],
    translation:
      "Narrated Abu Sa'id Al-Khudri: The Prophet (\u25f7) said, \"The people of Paradise will enter Paradise, and the people of the Fire will enter the Fire. Then Allah the Exalted will say, 'Take out whoever has in his heart the weight of a mustard seed of faith.' So they will be taken out of it, blackened, and they will be thrown into the river of vitality \u2014 or life, Malik was unsure which word \u2014 and they will grow back the way a seed grows on the bank of a flood channel. Have you not seen how it comes out yellow and curled?\" Wuhayb, narrating from 'Amr, said 'life' (with certainty), and said 'a mustard seed's weight of good' (in place of 'faith').",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:22 at time of writing.
    notes:
      "The Arabic notes a narrator's own uncertainty (Malik was unsure whether the word was 'al-haya' [vitality/rain] or 'al-hayat' [life]) and records a variant wording from another narrator (Wuhayb, via 'Amr), a level of transparency about minor wording differences that is characteristic of how Bukhari preserves multiple transmissions of the same report. The hadith is widely cited in discussions of intercession (shafa'ah) and the fate of sinning believers: it describes people who committed major sins being punished in the Fire yet ultimately removed from it because even the smallest trace of genuine faith remained in their hearts.",
    lessons: [
      "Even the smallest measurable amount of faith \u2014 likened here to the weight of a single mustard seed \u2014 is enough to eventually secure someone's removal from the Fire, according to this hadith.",
      "The image of the punished person being revived like a seed sprouting by a flood channel is used to describe restoration after harm, not merely release from confinement.",
      "The hadith is one of the texts scholars draw on when discussing the fate of believers who die with unforgiven major sins, distinguishing their eventual outcome from that of those with no faith at all.",
    ],
  },
  {
    num: 23,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 22 (grades of
    // believers), no separate bab title of its own on sunnah.com.
    narrator: 'Abu Sa\u2018id Al-Khudri',
    source: 'Sahih al-Bukhari 23',
    also_collected_in: 'Sahih Muslim 2390',
    arabic_text:
      'حَدَّثَنَا مُحَمَّدُ بْنُ عُبَيْدِ اللَّهِ، قَالَ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدٍ، عَنْ صَالِحٍ، عَنِ ابْنِ شِهَابٍ، عَنْ أَبِي أُمَامَةَ بْنِ سَهْلٍ، أَنَّهُ سَمِعَ أَبَا سَعِيدٍ الْخُدْرِيَّ، يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ بَيْنَا أَنَا نَائِمٌ رَأَيْتُ النَّاسَ يُعْرَضُونَ عَلَىَّ، وَعَلَيْهِمْ قُمُصٌ مِنْهَا مَا يَبْلُغُ الثُّدِيَّ، وَمِنْهَا مَا دُونَ ذَلِكَ، وَعُرِضَ عَلَىَّ عُمَرُ بْنُ الْخَطَّابِ وَعَلَيْهِ قَمِيصٌ يَجُرُّهُ ‏"‏‏.‏ قَالُوا فَمَا أَوَّلْتَ ذَلِكَ يَا رَسُولَ اللَّهِ قَالَ ‏"‏ الدِّينَ ‏"',
    isnad_chain: [
      "Muhammad bin 'Ubaydullah",
      'Ibrahim bin Sa\u2018d',
      'Salih (bin Kaysan)',
      'Ibn Shihab (al-Zuhri)',
      'Abu Umama bin Sahl',
      'Abu Sa\u2018id Al-Khudri (Companion)',
    ],
    translation:
      "Narrated Abu Sa'id Al-Khudri: Allah's Messenger (\u25f7) said, \"While I was sleeping, I saw people being presented to me wearing shirts \u2014 some reaching only to the chest, and some shorter than that. 'Umar bin al-Khattab was presented to me wearing a shirt he was dragging along.\" They asked, \"How do you interpret that, O Messenger of Allah?\" He said, \"Religion.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:23 at time of writing.
    notes:
      "This is a dream-vision hadith placed under the chapter on the differing grades of believers: the length of each man's shirt in the dream is understood by the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam himself to represent the extent of that person's religion, with 'Umar's unusually long, trailing shirt read by commentators as foretelling the exceptional breadth of his knowledge, practice, and later achievements as caliph.",
    lessons: [
      "Prophetic dreams recorded in the hadith literature are treated as carrying real symbolic meaning, with the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam himself supplying the interpretation rather than leaving it open.",
      "The varying shirt lengths in the vision are read as representing differing levels or completeness of religion among different people, tying this hadith to the surrounding chapter's theme of graded superiority in faith.",
      "'Umar bin al-Khattab's unusually long shirt is understood by later commentators as a foreshadowing of the exceptional role he would go on to play.",
    ],
  },
  {
    num: 24,
    chapter: 'belief',
    chapter_heading: "Al-Haya (modesty, self-respect, bashfulness) is a part of faith",
    chapter_heading_arabic: 'بَابُ الْحَيَاءُ مِنَ الإِيمَانِ',
    narrator: "'Abdullah bin 'Umar",
    source: 'Sahih al-Bukhari 24',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكُ بْنُ أَنَسٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَالِمِ بْنِ عَبْدِ اللَّهِ، عَنْ أَبِيهِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم مَرَّ عَلَى رَجُلٍ مِنَ الأَنْصَارِ وَهُوَ يَعِظُ أَخَاهُ فِي الْحَيَاءِ، فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ دَعْهُ فَإِنَّ الْحَيَاءَ مِنَ الإِيمَانِ ‏"',
    isnad_chain: [
      "'Abdullah bin Yusuf",
      'Malik bin Anas',
      'Ibn Shihab (al-Zuhri)',
      "Salim bin 'Abdullah",
      "his father, 'Abdullah bin 'Umar (Companion)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Umar: Allah's Messenger (\u25f7) passed by a man from the Ansar who was rebuking his brother for being too modest (haya'). Allah's Messenger (\u25f7) said, \"Leave him, for modesty is part of faith.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:24 at time of writing.
    notes:
      "This hadith is cross-referenced by sunnah.com back to hadith 9, where the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam first stated that haya is one of the branches of faith; here that general statement is shown being applied in a concrete social situation, where the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam corrects a man who was treating another's modesty as a flaw to be argued out of him.",
    lessons: [
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam intervened to defend modesty as a virtue at the exact moment someone was being pressured to abandon it, rather than only stating the principle in the abstract.",
      "Haya is treated here not as shyness that holds someone back from good, but as a positive trait connected to faith that should be encouraged rather than corrected.",
      "This is an example within the hadith literature of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam directly correcting a Companion's social conduct toward another Companion in real time.",
    ],
  },
  {
    num: 25,
    chapter: 'belief',
    chapter_heading: "(Regarding the Statement of Allah) \"But if they repent and establish prayer and give zakat, then leave their way free\"",
    chapter_heading_arabic: 'بَابُ: {فَإِنْ تَابُوا وَأَقَامُوا الصَّلاَةَ وَآتَوُا الزَّكَاةَ فَخَلُّوا سَبِيلَهُمْ}',
    narrator: "Ibn 'Umar",
    source: 'Sahih al-Bukhari 25',
    also_collected_in: 'Sahih Muslim 22',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ الْمُسْنَدِيُّ، قَالَ حَدَّثَنَا أَبُو رَوْحٍ الْحَرَمِيُّ بْنُ عُمَارَةَ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ وَاقِدِ بْنِ مُحَمَّدٍ، قَالَ سَمِعْتُ أَبِي يُحَدِّثُ، عَنِ ابْنِ عُمَرَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلاَةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلاَّ بِحَقِّ الإِسْلاَمِ، وَحِسَابُهُمْ عَلَى اللَّهِ ‏"',
    isnad_chain: [
      "'Abdullah bin Muhammad al-Musnadi",
      'Abu Rawh al-Harami bin \u2018Umara',
      "Shu'ba",
      'Waqid bin Muhammad',
      'his father, Muhammad bin Zayd',
      "Ibn 'Umar (Companion)",
    ],
    translation:
      "Narrated Ibn 'Umar: Allah's Messenger (\u25f7) said, \"I have been commanded to fight the people until they testify that there is no god but Allah and that Muhammad is the Messenger of Allah, establish the prayer, and give zakat. If they do that, they have protected their blood and their wealth from me, except by the right of Islam, and their reckoning is with Allah.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:25 at time of writing.
    notes:
      "Bukhari places this hadith under a chapter naming a specific Qur'anic verse (9:5) about ceasing hostilities against those who repent, pray, and give zakat, framing this hadith as the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam own statement of that same standard. Scholars stress the phrase 'except by the right of Islam' as an important qualifier: it means specific legal rights and obligations (such as retribution for a crime, or debts owed) remain enforceable even once someone has professed the testimony of faith \u2014 the protection described is not a blanket immunity from all consequences.",
    lessons: [
      "The three conditions named \u2014 testifying to the two testimonies, establishing prayer, and giving zakat \u2014 are presented together as the threshold at which a person's life and property become protected in Islamic law.",
      "The phrase 'except by the right of Islam' is treated by scholars as an important qualifier limiting the protection described: specific legal obligations or liabilities are not erased simply by professing faith.",
      "The final clause, 'their reckoning is with Allah,' marks a clear division between what falls under human legal jurisdiction (outward compliance) and what is left entirely to Allah's judgment (inward sincerity).",
    ],
  },
  {
    num: 26,
    chapter: 'belief',
    chapter_heading: "Whoever says that faith is action (good deeds)",
    chapter_heading_arabic: 'بَابُ مَنْ قَالَ إِنَّ الإِيمَانَ هُوَ الْعَمَلُ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 26',
    arabic_text:
      'حَدَّثَنَا أَحْمَدُ بْنُ يُونُسَ، وَمُوسَى بْنُ إِسْمَاعِيلَ، قَالاَ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدٍ، قَالَ حَدَّثَنَا ابْنُ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم سُئِلَ أَىُّ الْعَمَلِ أَفْضَلُ فَقَالَ ‏"‏ إِيمَانٌ بِاللَّهِ وَرَسُولِهِ ‏"‏‏.‏ قِيلَ ثُمَّ مَاذَا قَالَ ‏"‏ الْجِهَادُ فِي سَبِيلِ اللَّهِ ‏"‏‏.‏ قِيلَ ثُمَّ مَاذَا قَالَ ‏"‏ حَجٌّ مَبْرُورٌ ‏"',
    isnad_chain: [
      'Ahmad bin Yunus, and Musa bin Isma\u2018il',
      'Ibrahim bin Sa\u2018d',
      'Ibn Shihab (al-Zuhri)',
      'Sa\u2018id bin al-Musayyab',
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) was asked, \"Which deed is best?\" He said, \"Belief in Allah and His Messenger.\" It was asked, \"Then what?\" He said, \"Jihad in the path of Allah.\" It was asked, \"Then what?\" He said, \"An accepted Hajj (Hajj Mabrur).\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:26 at time of writing.
    notes:
      "Bukhari's chapter heading here explicitly frames belief itself as a form of 'amal (action/deed), drawing on this hadith placing 'belief in Allah and His Messenger' at the head of a list of deeds. This is part of Bukhari's broader argument across the Book of Belief that faith is inseparable from action, not a purely internal state.",
    lessons: [
      "Belief in Allah and His Messenger is placed at the very top of a ranked list of deeds, ahead of jihad and Hajj, showing that in this hadith belief itself is classified as an act, not only an inward state.",
      "'Hajj Mabrur' (an accepted Hajj) is described elsewhere in the hadith literature as one performed sincerely and without sin; its place at the end of this ranked list does not diminish its value but reflects the order in which the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam answered the follow-up questions.",
      "The pattern of the question being asked three times, each producing a different top-ranked deed, recurs elsewhere in the hadith literature and shows the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam tailoring rankings to context rather than giving one fixed universal list.",
    ],
  },
  {
    num: 27,
    chapter: 'belief',
    chapter_heading: "If one does not embrace Islam truly but does so out of surrender or fear of being killed",
    chapter_heading_arabic: 'بَابُ إِذَا لَمْ يَكُنِ الإِسْلاَمُ عَلَى الْحَقِيقَةِ وَكَانَ عَلَى الاِسْتِسْلاَمِ أَوِ الْخَوْفِ مِنَ الْقَتْلِ',
    narrator: "Sa'd bin Abi Waqqas",
    source: 'Sahih al-Bukhari 27',
    also_collected_in: 'Sahih Muslim 150',
    arabic_text:
      'حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي عَامِرُ بْنُ سَعْدِ بْنِ أَبِي وَقَّاصٍ، عَنْ سَعْدٍ، رضى الله عنه أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم أَعْطَى رَهْطًا وَسَعْدٌ جَالِسٌ، فَتَرَكَ رَسُولُ اللَّهِ صلى الله عليه وسلم رَجُلاً هُوَ أَعْجَبُهُمْ إِلَىَّ فَقُلْتُ يَا رَسُولَ اللَّهِ مَا لَكَ عَنْ فُلاَنٍ فَوَاللَّهِ إِنِّي لأَرَاهُ مُؤْمِنًا‏.‏ فَقَالَ ‏"‏ أَوْ مُسْلِمًا ‏"‏‏.‏ فَسَكَتُّ قَلِيلاً، ثُمَّ غَلَبَنِي مَا أَعْلَمُ مِنْهُ فَعُدْتُ لِمَقَالَتِي فَقُلْتُ مَا لَكَ عَنْ فُلاَنٍ فَوَاللَّهِ إِنِّي لأَرَاهُ مُؤْمِنًا فَقَالَ ‏"‏ أَوْ مُسْلِمًا ‏"‏‏.‏ ثُمَّ غَلَبَنِي مَا أَعْلَمُ مِنْهُ فَعُدْتُ لِمَقَالَتِي وَعَادَ رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ قَالَ ‏"‏ يَا سَعْدُ، إِنِّي لأُعْطِي الرَّجُلَ وَغَيْرُهُ أَحَبُّ إِلَىَّ مِنْهُ، خَشْيَةَ أَنْ يَكُبَّهُ اللَّهُ فِي النَّارِ ‏"‏‏.‏ وَرَوَاهُ يُونُسُ وَصَالِحٌ وَمَعْمَرٌ وَابْنُ أَخِي الزُّهْرِيِّ عَنِ الزُّهْرِيِّ',
    isnad_chain: [
      'Abu al-Yaman',
      "Shu'ayb",
      'Al-Zuhri',
      "'Amir bin Sa'd bin Abi Waqqas",
      "Sa'd bin Abi Waqqas (Companion)",
    ],
    translation:
      "Narrated Sa'd bin Abi Waqqas: Allah's Messenger (\u25f7) gave to a group of people while Sa'd was sitting there, and Allah's Messenger (\u25f7) left out a man whom I thought the best of them. I said, \"O Messenger of Allah, why have you passed over so-and-so? By Allah, I regard him as a believer.\" He said, \"Or a Muslim.\" I stayed quiet a while, but what I knew of him got the better of me, so I returned to what I had said: \"Why have you passed over so-and-so? By Allah, I regard him as a believer.\" He said, \"Or a Muslim.\" What I knew of him got the better of me again, so I returned to what I had said, and Allah's Messenger (\u25f7) returned to what he had said, then he said, \"O Sa'd, I give to a man while another is dearer to me than him, out of fear that Allah will throw him face-down into the Fire.\" This was also narrated by Yunus, Salih, Ma'mar, and al-Zuhri's nephew, from al-Zuhri.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:27 at time of writing.
    notes:
      "This hadith is placed under a chapter on people whose acceptance of Islam is not yet complete conviction but outward surrender, drawing on the same distinction the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam repeatedly draws in this narration between 'believer' (mu'min, someone with settled inner conviction) and 'Muslim' (someone who has outwardly submitted). The man being discussed is generally understood by commentators to be someone recently reconciled to Islam whose heart the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam was still winning over (see also the concept of al-mu'allafah qulubuhum, 'those whose hearts are to be reconciled,' among the recipients of zakat).",
    lessons: [
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam repeatedly declines to confirm Sa'd's confident label of 'believer' for someone whose faith might still be developing, preferring the more cautious and outward term 'Muslim.'",
      "Withholding a gift from someone despite personal fondness for them, out of concern for their standing before Allah rather than any wrongdoing on their part, is presented here as a form of care, not neglect.",
      "The corroboration note naming four additional narrators of the same report from al-Zuhri (Yunus, Salih, Ma'mar, and al-Zuhri's nephew) is Bukhari's standard way of showing a report is well-attested through multiple independent routes.",
    ],
  },
  {
    num: 28,
    chapter: 'belief',
    chapter_heading: "To greet is a part of Islam",
    chapter_heading_arabic: 'بَابُ إِفْشَاءُ السَّلاَمِ مِنَ الإِسْلاَمِ',
    narrator: "'Abdullah bin 'Amr",
    source: 'Sahih al-Bukhari 28',
    arabic_text:
      'حَدَّثَنَا قُتَيْبَةُ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ يَزِيدَ بْنِ أَبِي حَبِيبٍ، عَنْ أَبِي الْخَيْرِ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو، أَنَّ رَجُلاً، سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم أَىُّ الإِسْلاَمِ خَيْرٌ قَالَ ‏"‏ تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ ‏"',
    isnad_chain: [
      'Qutayba',
      'al-Layth (bin Sa\u2018d)',
      'Yazid bin Abi Habib',
      'Abu al-Khayr',
      "'Abdullah bin 'Amr (Companion)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Amr: A man asked Allah's Messenger (\u25f7), \"Which quality of Islam is best?\" He said, \"That you feed others, and give greetings of peace to those you know and those you do not know.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:28 at time of writing.
    notes:
      "This is the same report as hadith 12, transmitted here through a separate chain and placed under a chapter specifically about greeting others with salam. Bukhari's chapter heading here also quotes a statement attributed to 'Ammar bin Yasir naming three qualities that together amount to complete faith: fairness toward oneself, spreading greetings of peace to everyone, and spending in charity even while poor.",
    lessons: [
      "Greeting people with salam, whether or not you already know them, is again singled out (as in hadith 12) as one of the best qualities a Muslim can have.",
      "'Ammar's added statement (in Bukhari's chapter heading) groups spreading greetings alongside fairness to oneself and generosity despite poverty as three qualities that together constitute complete faith.",
      "That this same core report (feeding and greeting) appears at least twice in the Book of Belief, via separate chains, is treated by scholars as reinforcing how emphatically it was transmitted.",
    ],
  },
  {
    num: 29,
    chapter: 'belief',
    chapter_heading: "Ingratitude toward one's husband; and disbelief has different, lesser and greater, degrees",
    chapter_heading_arabic: 'بَابُ كُفْرَانِ الْعَشِيرِ وَكُفْرٍ دُونَ كُفْرٍ',
    narrator: "Ibn 'Abbas",
    source: 'Sahih al-Bukhari 29',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، عَنْ عَطَاءِ بْنِ يَسَارٍ، عَنِ ابْنِ عَبَّاسٍ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم ‏"‏ أُرِيتُ النَّارَ فَإِذَا أَكْثَرُ أَهْلِهَا النِّسَاءُ يَكْفُرْنَ ‏"‏‏.‏ قِيلَ أَيَكْفُرْنَ بِاللَّهِ قَالَ ‏"‏ يَكْفُرْنَ الْعَشِيرَ، وَيَكْفُرْنَ الإِحْسَانَ، لَوْ أَحْسَنْتَ إِلَى إِحْدَاهُنَّ الدَّهْرَ ثُمَّ رَأَتْ مِنْكَ شَيْئًا قَالَتْ مَا رَأَيْتُ مِنْكَ خَيْرًا قَطُّ ‏"',
    isnad_chain: [
      "'Abdullah bin Maslama",
      'Malik (bin Anas)',
      'Zayd bin Aslam',
      "'Ata' bin Yasar",
      "Ibn 'Abbas (Companion)",
    ],
    translation:
      "Narrated Ibn 'Abbas: The Prophet (\u25f7) said, \"I was shown the Fire, and most of its people were women who were ungrateful.\" It was asked, \"Do they disbelieve in Allah?\" He said, \"They are ungrateful toward their husbands and ungrateful for kindness. If you are good to one of them her whole life and then she sees something from you she dislikes, she will say, 'I have never seen any good from you at all.'\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:29 at time of writing.
    notes:
      "Bukhari's chapter heading explicitly frames this hadith around the concept of 'kufr' (translated here as disbelief/ingratitude) having different grades \u2014 kufr al-ni'mah (ingratitude for a blessing or a spouse's kindness) is a lesser form of the word than kufr as rejection of Allah, and commentators stress the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam directly clarifies this distinction in the hadith itself by answering 'they are ungrateful to their husbands,' not 'they reject Allah.' The hadith is describing a specific behavior pattern (dismissing a lifetime of good treatment over one recent grievance), not making a categorical statement about women's faith in general.",
    lessons: [
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam is asked to clarify his own statement and does so immediately, distinguishing ingratitude toward a spouse from disbelief in Allah \u2014 a distinction scholars treat as central to correctly understanding the hadith.",
      "The specific behavior described \u2014 erasing an entire history of good treatment because of one recent disappointment \u2014 is presented as the object of criticism, not gender itself.",
      "This hadith is one of several places in the hadith literature where the Arabic word 'kufr' is used in a narrower, non-theological sense (ingratitude) rather than its primary sense of disbelief in Allah, which scholars flag as an important point of vocabulary when reading the wider hadith corpus.",
    ],
  },
  {
    num: 30,
    chapter: 'belief',
    chapter_heading: "Sins stem from pre-Islamic ignorance, and a sinner is not a disbeliever unless he associates partners with Allah",
    chapter_heading_arabic: 'بَابُ الْمَعَاصِي مِنْ أَمْرِ الْجَاهِلِيَّةِ',
    narrator: 'Al-Ma\u2018rur (bin Suwayd)',
    source: 'Sahih al-Bukhari 30',
    arabic_text:
      'حَدَّثَنَا سُلَيْمَانُ بْنُ حَرْبٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ وَاصِلٍ الأَحْدَبِ، عَنِ الْمَعْرُورِ، قَالَ لَقِيتُ أَبَا ذَرٍّ بِالرَّبَذَةِ، وَعَلَيْهِ حُلَّةٌ، وَعَلَى غُلاَمِهِ حُلَّةٌ، فَسَأَلْتُهُ عَنْ ذَلِكَ، فَقَالَ إِنِّي سَابَبْتُ رَجُلاً، فَعَيَّرْتُهُ بِأُمِّهِ، فَقَالَ لِيَ النَّبِيُّ صلى الله عليه وسلم ‏"‏ يَا أَبَا ذَرٍّ أَعَيَّرْتَهُ بِأُمِّهِ إِنَّكَ امْرُؤٌ فِيكَ جَاهِلِيَّةٌ، إِخْوَانُكُمْ خَوَلُكُمْ، جَعَلَهُمُ اللَّهُ تَحْتَ أَيْدِيكُمْ، فَمَنْ كَانَ أَخُوهُ تَحْتَ يَدِهِ فَلْيُطْعِمْهُ مِمَّا يَأْكُلُ، وَلْيُلْبِسْهُ مِمَّا يَلْبَسُ، وَلاَ تُكَلِّفُوهُمْ مَا يَغْلِبُهُمْ، فَإِنْ كَلَّفْتُمُوهُمْ فَأَعِينُوهُمْ ‏"',
    isnad_chain: [
      'Sulayman bin Harb',
      "Shu'ba",
      'Wasil al-Ahdab',
      'Al-Ma\u2018rur (bin Suwayd)',
      'Abu Dharr (Companion, quoting the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam)',
    ],
    translation:
      "Narrated Al-Ma'rur: I met Abu Dharr at al-Rabadha, wearing a fine cloak, with his slave wearing an identical one. I asked him about it, and he said: I insulted a man and taunted him about his mother. The Prophet (\u25f7) said to me, \"O Abu Dharr, did you taunt him about his mother? You are a man who still has some pre-Islamic ignorance (jahiliyyah) in him. Your brothers (slaves) are your dependents, whom Allah has placed under your authority; whoever has a brother under his authority should feed him from what he eats and clothe him from what he wears, and you should not burden them with more than they can bear \u2014 and if you do, then help them.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:30 at time of writing.
    notes:
      "Abu Dharr's dressing his slave identically to himself, decades after the incident, is presented in the narration itself as his own lasting act of atonement for the insult the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam corrected him for. Bukhari's chapter heading uses this hadith to establish a broader principle: committing a sin such as this insult does not make someone a disbeliever, only someone still carrying a trace of pre-Islamic ('jahili') conduct, a distinction scholars treat as central to the Sunni position that major sins short of shirk do not remove a person from the fold of Islam.",
    lessons: [
      "Insulting someone by demeaning their mother or lineage is identified by the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam as a specifically pre-Islamic ('jahili') form of conduct, even when committed by a respected Companion.",
      "The instructions given regarding slaves \u2014 feeding and clothing them as one's self, not overburdening them, and helping with difficult tasks \u2014 established a standard of humane treatment that later scholars point to as part of Islam's broader trajectory toward manumission and equal human dignity.",
      "Abu Dharr's practice of dressing his slave identically to himself for the rest of his life is treated by commentators as a model of a Companion internalizing a correction and acting on it visibly and permanently.",
    ],
  },
  {
    num: 31,
    chapter: 'belief',
    chapter_heading: "\"And if two parties among the believers fall to fighting, then make peace between them\" \u2014 Allah named them believers",
    chapter_heading_arabic: 'بَابُ: {وَإِنْ طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا} فَسَمَّاهُمُ الْمُؤْمِنِينَ',
    narrator: 'Al-Ahnaf bin Qais',
    source: 'Sahih al-Bukhari 31',
    also_collected_in: 'Sahih Muslim 2888',
    arabic_text:
      'حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ الْمُبَارَكِ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، حَدَّثَنَا أَيُّوبُ، وَيُونُسُ، عَنِ الْحَسَنِ، عَنِ الأَحْنَفِ بْنِ قَيْسٍ، قَالَ ذَهَبْتُ لأَنْصُرَ هَذَا الرَّجُلَ، فَلَقِيَنِي أَبُو بَكْرَةَ فَقَالَ أَيْنَ تُرِيدُ قُلْتُ أَنْصُرُ هَذَا الرَّجُلَ‏.‏ قَالَ ارْجِعْ فَإِنِّي سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏"‏ إِذَا الْتَقَى الْمُسْلِمَانِ بِسَيْفَيْهِمَا فَالْقَاتِلُ وَالْمَقْتُولُ فِي النَّارِ ‏"‏‏.‏ فَقُلْتُ يَا رَسُولَ اللَّهِ هَذَا الْقَاتِلُ فَمَا بَالُ الْمَقْتُولِ قَالَ ‏"‏ إِنَّهُ كَانَ حَرِيصًا عَلَى قَتْلِ صَاحِبِهِ ‏"',
    isnad_chain: [
      "'Abd al-Rahman bin al-Mubarak",
      'Hammad bin Zayd',
      'Ayyub, and Yunus',
      'Al-Hasan (al-Basri)',
      'Al-Ahnaf bin Qais',
    ],
    translation:
      "Narrated Al-Ahnaf bin Qais: I set out to go and help this man ('Ali), when Abu Bakra met me and asked, \"Where are you headed?\" I said, \"To help this man.\" He said, \"Go back, for I heard Allah's Messenger (\u25f7) say, 'When two Muslims meet with their swords (to fight one another), both the killer and the one killed are in the Fire.'\" I said, \"O Messenger of Allah, that is understandable for the killer, but what about the one who was killed?\" He said, \"He was eager to kill his companion.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:31 at time of writing.
    notes:
      "The historical background is the civil conflict following the caliphate of 'Uthman, when Al-Ahnaf bin Qais was on his way to join one side (referred to only as 'this man,' understood by commentators to be 'Ali) before Abu Bakra's warning turned him back. Bukhari's chapter heading pairs this hadith with Qur'an 49:9, which calls two fighting groups of Muslims 'believers' even while they are fighting \u2014 establishing that engaging in such fighting, while a grave sin, does not by itself remove someone from the fold of faith, even as this hadith warns both combatants may still face the Fire for their intent.",
    lessons: [
      "The warning of the Fire applies to intent and eagerness to kill, not only to the outcome \u2014 the person killed is included because of his own readiness to kill his opponent, not merely because he fought.",
      "This hadith is used by scholars alongside the Qur'anic verse Bukhari cites in the chapter heading to hold two ideas together: internal Muslim-on-Muslim fighting is a severe sin, yet those involved are not automatically read out of the faith by it.",
      "Abu Bakra's intervention, redirecting Al-Ahnaf away from joining a factional fight by citing a hadith, is an example within the collection of a Companion applying prophetic teaching to steer someone away from involvement in civil conflict.",
    ],
  },
  {
    num: 32,
    chapter: 'belief',
    chapter_heading: "Wrongdoing (dhulm) can be of a greater or lesser degree than other wrongdoing",
    chapter_heading_arabic: 'بَابُ ظُلْمٌ دُونَ ظُلْمٍ',
    narrator: "'Abdullah (bin Mas'ud)",
    source: 'Sahih al-Bukhari 32',
    also_collected_in: 'Sahih Muslim 124',
    arabic_text:
      'حَدَّثَنَا أَبُو الْوَلِيدِ، قَالَ حَدَّثَنَا شُعْبَةُ، ح‏.‏ قَالَ وَحَدَّثَنِي بِشْرٌ، قَالَ حَدَّثَنَا مُحَمَّدٌ، عَنْ شُعْبَةَ، عَنْ سُلَيْمَانَ، عَنْ إِبْرَاهِيمَ، عَنْ عَلْقَمَةَ، عَنْ عَبْدِ اللَّهِ، قَالَ لَمَّا نَزَلَتِ ‏{‏الَّذِينَ آمَنُوا وَلَمْ يَلْبِسُوا إِيمَانَهُمْ بِظُلْمٍ‏}‏ قَالَ أَصْحَابُ رَسُولِ اللَّهِ صلى الله عليه وسلم أَيُّنَا لَمْ يَظْلِمْ فَأَنْزَلَ اللَّهُ ‏{‏إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ‏}',
    isnad_chain: [
      'Abu al-Walid, and (a parallel chain) Bishr',
      "Shu'ba, and (in the parallel chain) Muhammad",
      "Sulayman (al-A'mash)",
      'Ibrahim (al-Nakha\u2018i)',
      "'Alqama (bin Qais)",
      "'Abdullah bin Mas'ud (Companion)",
    ],
    translation:
      "Narrated 'Abdullah (bin Mas'ud): When \"Those who believe and do not mix their faith with wrongdoing\" was revealed, the Companions of Allah's Messenger (\u25f7) said, \"Which of us has not wronged himself?\" So Allah revealed, \"Indeed, associating partners with Allah is a great wrongdoing.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:32 at time of writing.
    notes:
      "The verse in question is Qur'an 6:82, and the Companions' initial worry \u2014 that no one is entirely free of wrongdoing, so how could the verse's promise apply to anyone \u2014 was resolved by the second verse the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam cited, Qur'an 31:13, which clarifies that the 'wrongdoing' (dhulm) meant in the first verse specifically refers to shirk (associating partners with Allah), not wrongdoing of any kind whatsoever. This exchange is the direct source of Bukhari's chapter title that dhulm exists in different, non-equal degrees.",
    lessons: [
      "The Companions' spontaneous worry on hearing this verse shows they took its wording at face value before being given the clarifying context, illustrating how understanding a single verse in isolation can lead to a mistaken conclusion.",
      "The Arabic word 'dhulm' (wrongdoing/injustice) is shown here to have a spectrum of meanings in the Qur'an \u2014 from everyday wrongs a person might commit against themselves to the singularly grave wrong of shirk \u2014 and the same word must be read in its specific context each time.",
      "This hadith is a key reference point for the broader principle that ordinary sins do not carry the same weight, or the same consequence for faith, as associating partners with Allah.",
    ],
  },
  {
    num: 34,
    chapter: 'belief',
    chapter_heading: "The signs of a hypocrite",
    chapter_heading_arabic: 'بَابُ عَلاَمَةِ الْمُنَافِقِ',
    narrator: "'Abdullah bin 'Amr",
    source: 'Sahih al-Bukhari 34',
    arabic_text:
      'حَدَّثَنَا قَبِيصَةُ بْنُ عُقْبَةَ، قَالَ حَدَّثَنَا سُفْيَانُ، عَنِ الأَعْمَشِ، عَنْ عَبْدِ اللَّهِ بْنِ مُرَّةَ، عَنْ مَسْرُوقٍ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو، أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ ‏"‏ أَرْبَعٌ مَنْ كُنَّ فِيهِ كَانَ مُنَافِقًا خَالِصًا، وَمَنْ كَانَتْ فِيهِ خَصْلَةٌ مِنْهُنَّ كَانَتْ فِيهِ خَصْلَةٌ مِنَ النِّفَاقِ حَتَّى يَدَعَهَا إِذَا اؤْتُمِنَ خَانَ وَإِذَا حَدَّثَ كَذَبَ وَإِذَا عَاهَدَ غَدَرَ، وَإِذَا خَاصَمَ فَجَرَ ‏"‏‏.‏ تَابَعَهُ شُعْبَةُ عَنِ الأَعْمَشِ',
    isnad_chain: [
      "Qabisa bin 'Uqba",
      'Sufyan (al-Thawri)',
      "Al-A'mash",
      "'Abdullah bin Murra",
      'Masruq',
      "'Abdullah bin 'Amr (Companion)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Amr: The Prophet (\u25f7) said, \"Whoever has four qualities is a pure hypocrite, and whoever has one of them has a trait of hypocrisy until he abandons it: when entrusted, he betrays the trust; when he speaks, he lies; when he makes an agreement, he breaks it; and when he disputes, he crosses all bounds.\" This was corroborated by Shu'ba, from al-A'mash.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:34 at time of writing.
    notes:
      "This hadith extends the shorter three-sign version found elsewhere in the collection (Bukhari 33, narrated by Abu Huraira \u2014 not yet added to this file) by adding a fourth quality (crossing bounds in disputes) and by explicitly distinguishing between someone who is a 'pure hypocrite' (having all four) and someone who merely carries 'a trait of hypocrisy' (having only one), a distinction scholars use to separate practical/moral hypocrisy (nifaq 'amali), which does not remove someone from Islam, from doctrinal hypocrisy (nifaq i'tiqadi), which does.",
    lessons: [
      "The hadith distinguishes between full ('pure') hypocrisy, requiring all four traits, and carrying merely one trait of hypocrisy \u2014 a distinction scholars use to explain how an otherwise believing Muslim can still exhibit hypocritical behavior without being a hypocrite in the full theological sense.",
      "All four traits named (betraying trust, lying, breaking agreements, crossing bounds in disputes) concern honesty and reliability in dealings with other people, not private ritual observance.",
      "The phrase 'until he abandons it' frames each trait as something a person can actively work to give up, rather than describing a fixed, unchangeable character type.",
    ],
  },
  {
    num: 35,
    chapter: 'belief',
    chapter_heading: "Establishing the (voluntary) prayers on the Night of Qadr is part of faith",
    chapter_heading_arabic: 'بَابُ قِيَامُ لَيْلَةِ الْقَدْرِ مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 35',
    arabic_text:
      'حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، قَالَ حَدَّثَنَا أَبُو الزِّنَادِ، عَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ مَنْ يَقُمْ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ ‏"',
    isnad_chain: [
      'Abu al-Yaman',
      "Shu'ayb",
      'Abu al-Zinad',
      "al-A'raj",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"Whoever stands in prayer on the Night of Decree (Laylat al-Qadr) out of faith and seeking Allah's reward will have his past sins forgiven.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:35 at time of writing.
    notes:
      "Laylat al-Qadr (the Night of Decree/Power) is the night in Ramadan on which the Qur'an's revelation is described as having begun, referenced in Surah al-Qadr (97). The phrase 'iman wa ihtisab' ('out of faith and seeking reward') recurs in several hadith in this chapter of the Book of Belief (see also hadith 37, 38) and is understood by scholars as requiring both sincere belief and a genuine intention of earning Allah's reward, not merely going through the motions of an act of worship.",
    lessons: [
      "The forgiveness described is conditioned on two things together \u2014 faith and sincere intention for reward \u2014 not on the act of praying by itself.",
      "This hadith is the primary textual basis for the widespread practice of increased voluntary night prayer specifically during the last part of Ramadan, when Laylat al-Qadr is sought.",
      "The forgiveness promised is for past sins, distinguishing this hadith's scope from guarantees about future conduct.",
    ],
  },
  {
    num: 36,
    chapter: 'belief',
    chapter_heading: "Jihad (fighting in Allah's Cause) is part of faith",
    chapter_heading_arabic: 'بَابُ الْجِهَادُ مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 36',
    arabic_text:
      'حَدَّثَنَا حَرَمِيُّ بْنُ حَفْصٍ، قَالَ حَدَّثَنَا عَبْدُ الْوَاحِدِ، قَالَ حَدَّثَنَا عُمَارَةُ، قَالَ حَدَّثَنَا أَبُو زُرْعَةَ بْنُ عَمْرِو بْنِ جَرِيرٍ، قَالَ سَمِعْتُ أَبَا هُرَيْرَةَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ انْتَدَبَ اللَّهُ لِمَنْ خَرَجَ فِي سَبِيلِهِ لاَ يُخْرِجُهُ إِلاَّ إِيمَانٌ بِي وَتَصْدِيقٌ بِرُسُلِي أَنْ أُرْجِعَهُ بِمَا نَالَ مِنْ أَجْرٍ أَوْ غَنِيمَةٍ، أَوْ أُدْخِلَهُ الْجَنَّةَ، وَلَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي مَا قَعَدْتُ خَلْفَ سَرِيَّةٍ، وَلَوَدِدْتُ أَنِّي أُقْتَلُ فِي سَبِيلِ اللَّهِ ثُمَّ أُحْيَا، ثُمَّ أُقْتَلُ ثُمَّ أُحْيَا، ثُمَّ أُقْتَلُ ‏"',
    isnad_chain: [
      'Harami bin Hafs',
      "'Abd al-Wahid",
      "'Umara",
      "Abu Zur'a bin 'Amr bin Jarir",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: The Prophet (\u25f7) said, \"Allah has taken it upon Himself, for the one who goes out in His cause driven by nothing but faith in Me and belief in My messengers, that He will bring him back with whatever reward or spoils he has earned, or admit him to Paradise. Were it not that it would be a hardship on my nation, I would not remain behind any expedition going out for jihad, and I would love to be killed in Allah's cause, then brought back to life, then killed again, then brought back to life, then killed again.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:36 at time of writing.
    notes:
      "This hadith frames the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam wish to be repeatedly martyred as an expression of his own desire, one he explains he does not act on only out of consideration for the hardship it would place on his followers if he were absent from ordinary community life. The condition 'driven by nothing but faith in Me and belief in My messengers' is stressed by commentators as key: the guaranteed outcome described applies specifically to those going out for sincerely religious motives, not mixed or worldly ones.",
    lessons: [
      "The guarantee described \u2014 return with reward or spoils, or entry into Paradise \u2014 is conditioned entirely on the sincerity of the motive (faith alone), not on the outcome of the expedition itself.",
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam explicitly names concern for his community's wellbeing as the reason he did not personally join every expedition, modeling a leader weighing personal desire for reward against communal responsibility.",
      "The wish to be killed and brought back to life repeatedly is understood by scholars as figurative and hyperbolic, expressing the intensity of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam devotion rather than describing an expected literal event.",
    ],
  },
  {
    num: 37,
    chapter: 'belief',
    chapter_heading: "Establishing the voluntary (Tarawih) prayers during the nights of Ramadan is part of faith",
    chapter_heading_arabic: 'بَابُ تَطَوُّعُ قِيَامِ رَمَضَانَ مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 37',
    arabic_text:
      'حَدَّثَنَا إِسْمَاعِيلُ، قَالَ حَدَّثَنِي مَالِكٌ، عَنِ ابْنِ شِهَابٍ، عَنْ حُمَيْدِ بْنِ عَبْدِ الرَّحْمَنِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ ‏"',
    isnad_chain: [
      "Isma'il (bin Abi Uways)",
      'Malik (bin Anas)',
      'Ibn Shihab (al-Zuhri)',
      "Humayd bin 'Abd al-Rahman",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"Whoever stands in prayer during Ramadan out of faith and seeking Allah's reward will have his past sins forgiven.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:37 at time of writing.
    notes:
      "This is the general version of the same forgiveness formula applied specifically to the whole month of Ramadan's night prayers, distinct from hadith 35's narrower application to Laylat al-Qadr specifically. It is the primary textual basis cited for the practice of Tarawih (nightly voluntary Ramadan prayers).",
    lessons: [
      "The same forgiveness condition seen in hadith 35 (faith and sincere seeking of reward) is applied here to consistent night prayer across the whole month, not only a single special night.",
      "This hadith is the main scriptural basis scholars cite for the recommended practice of Tarawih prayers throughout Ramadan.",
      "The repetition of the 'iman wa ihtisab' (faith and seeking reward) condition across several hadith in this part of the Book of Belief underscores that the outward act of praying is treated as incomplete without the corresponding inward sincerity.",
    ],
  },
  {
    num: 38,
    chapter: 'belief',
    chapter_heading: "Fasting Ramadan sincerely, seeking only Allah's reward, is part of faith",
    chapter_heading_arabic: 'بَابُ صَوْمُ رَمَضَانَ احْتِسَابًا مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 38',
    arabic_text:
      'حَدَّثَنَا ابْنُ سَلاَمٍ، قَالَ أَخْبَرَنَا مُحَمَّدُ بْنُ فُضَيْلٍ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنْ أَبِي سَلَمَةَ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ ‏"',
    isnad_chain: [
      'Ibn Salam (Muhammad bin Salam al-Bikandi)',
      'Muhammad bin Fudayl',
      "Yahya bin Sa'id",
      'Abu Salama',
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"Whoever fasts Ramadan out of faith and seeking Allah's reward will have his past sins forgiven.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:38 at time of writing.
    notes:
      "This hadith completes a set of three near-identical 'iman wa ihtisab' (faith and seeking reward) formulas in this part of the Book of Belief, applied respectively to night prayer on Laylat al-Qadr (hadith 35), night prayer throughout Ramadan (hadith 37), and here to the obligatory daytime fast of Ramadan itself \u2014 together covering the month's central acts of worship.",
    lessons: [
      "Fasting Ramadan, like the two preceding hadith on night prayer, is described as bringing forgiveness of past sins only when done out of genuine faith and sincere seeking of reward, not merely out of habit or social expectation.",
      "Placing this hadith about the obligatory fast alongside two about voluntary night prayers signals that the same standard of sincerity applies to both obligatory and voluntary acts of worship.",
      "Read together, hadith 35, 37, and 38 form a small set covering the principal devotional acts associated with the month of Ramadan.",
    ],
  },
  {
    num: 39,
    chapter: 'belief',
    chapter_heading: "Religion is ease",
    chapter_heading_arabic: 'بَابُ الدِّينُ يُسْرٌ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 39',
    arabic_text:
      'حَدَّثَنَا عَبْدُ السَّلاَمِ بْنُ مُطَهَّرٍ، قَالَ حَدَّثَنَا عُمَرُ بْنُ عَلِيٍّ، عَنْ مَعْنِ بْنِ مُحَمَّدٍ الْغِفَارِيِّ، عَنْ سَعِيدِ بْنِ أَبِي سَعِيدٍ الْمَقْبُرِيِّ، عَنْ أَبِي هُرَيْرَةَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلاَّ غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا، وَاسْتَعِينُوا بِالْغَدْوَةِ وَالرَّوْحَةِ وَشَىْءٍ مِنَ الدُّلْجَةِ ‏"',
    isnad_chain: [
      "'Abd al-Salam bin Mutahhar",
      "'Umar bin 'Ali",
      "Ma'n bin Muhammad al-Ghifari",
      "Sa'id bin Abi Sa'id al-Maqburi",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: The Prophet (\u25f7) said, \"Religion is ease, and no one makes religion a struggle against himself except that it overcomes him. So aim straight, come near (to the ideal), and receive good tidings, and seek help through the early morning, the evening, and a portion of the night.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:39 at time of writing.
    notes:
      "Bukhari's chapter heading pairs this hadith with a separate statement attributed to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam that 'the most beloved religion to Allah is the tolerant, upright way (al-hanifiyyah al-samhah).' Commentators explain the middle instruction ('aim straight, come near') as guidance to pursue the ideal standard of practice without demanding perfection of oneself in every instance, and the final phrase as encouraging worship at the times of day when a person is naturally freshest (early morning, evening, part of the night) rather than forcing continuous exertion.",
    lessons: [
      "Religion is explicitly described as inherently easy, with the warning that treating it as a contest of endurance against oneself leads to being overwhelmed by it, not to greater piety.",
      "The instruction to 'aim straight and come near' is understood as balancing striving for the ideal with realistic self-assessment, rather than either perfectionism or complacency.",
      "Timing sustained worship around the times a person is naturally most energetic (morning, evening, part of the night) is given as a practical strategy for sustaining religious practice long-term, rather than relying on constant, undifferentiated effort.",
    ],
  },
  // Note: Bukhari 16 ("Sweetness of faith" / باب حَلاَوَةِ الإِيمَانِ, narrated by
  // Anas via Abu Qilaba: "Muhammad bin al-Muthanna -> 'Abd al-Wahhab
  // al-Thaqafi -> Ayyub -> Abu Qilaba -> Anas") sits between hadith 15 and
  // 17 has not been added yet, since its Arabic has not been supplied
  // directly for verification.
  //
  // Note: Bukhari 33 ("The signs of a hypocrite" / باب عَلاَمَةِ الْمُنَافِقِ,
  // narrated by Abu Huraira via "Sulayman Abu al-Rabi' -> Isma'il bin
  // Ja'far -> Nafi' bin Malik Abu Suhail -> his father -> Abu Huraira":
  // the three-sign version of the hypocrite hadith, corroborated for
  // Bukhari 34 above) has not been added yet, since its Arabic has not
  // been supplied directly for verification. Add it the same way as the
  // others once the Arabic text is provided.
  //
  {
    num: 40,
    chapter: 'belief',
    chapter_heading: "The prayer (salat) is a part of faith",
    chapter_heading_arabic: 'بَابُ الصَّلاَةُ مِنَ الإِيمَانِ',
    narrator: "Al-Bara' (bin 'Azib)",
    source: 'Sahih al-Bukhari 40',
    arabic_text:
      'حَدَّثَنَا عَمْرُو بْنُ خَالِدٍ، قَالَ حَدَّثَنَا زُهَيْرٌ، قَالَ حَدَّثَنَا أَبُو إِسْحَاقَ، عَنِ الْبَرَاءِ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ أَوَّلَ مَا قَدِمَ الْمَدِينَةَ نَزَلَ عَلَى أَجْدَادِهِ ـ أَوْ قَالَ أَخْوَالِهِ ـ مِنَ الأَنْصَارِ، وَأَنَّهُ صَلَّى قِبَلَ بَيْتِ الْمَقْدِسِ سِتَّةَ عَشَرَ شَهْرًا، أَوْ سَبْعَةَ عَشَرَ شَهْرًا، وَكَانَ يُعْجِبُهُ أَنْ تَكُونَ قِبْلَتُهُ قِبَلَ الْبَيْتِ، وَأَنَّهُ صَلَّى أَوَّلَ صَلاَةٍ صَلاَّهَا صَلاَةَ الْعَصْرِ، وَصَلَّى مَعَهُ قَوْمٌ، فَخَرَجَ رَجُلٌ مِمَّنْ صَلَّى مَعَهُ، فَمَرَّ عَلَى أَهْلِ مَسْجِدٍ، وَهُمْ رَاكِعُونَ فَقَالَ أَشْهَدُ بِاللَّهِ لَقَدْ صَلَّيْتُ مَعَ رَسُولِ اللَّهِ صلى الله عليه وسلم قِبَلَ مَكَّةَ، فَدَارُوا كَمَا هُمْ قِبَلَ الْبَيْتِ، وَكَانَتِ الْيَهُودُ قَدْ أَعْجَبَهُمْ إِذْ كَانَ يُصَلِّي قِبَلَ بَيْتِ الْمَقْدِسِ، وَأَهْلُ الْكِتَابِ، فَلَمَّا وَلَّى وَجْهَهُ قِبَلَ الْبَيْتِ أَنْكَرُوا ذَلِكَ‏.‏ قَالَ زُهَيْرٌ حَدَّثَنَا أَبُو إِسْحَاقَ عَنِ الْبَرَاءِ فِي حَدِيثِهِ هَذَا أَنَّهُ مَاتَ عَلَى الْقِبْلَةِ قَبْلَ أَنْ تُحَوَّلَ رِجَالٌ وَقُتِلُوا، فَلَمْ نَدْرِ مَا نَقُولُ فِيهِمْ، فَأَنْزَلَ اللَّهُ تَعَالَى ‏{‏وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ‏}',
    isnad_chain: [
      "'Amr bin Khalid",
      'Zuhayr (bin Mu\u2018awiya)',
      "Abu Ishaq (al-Sabi\u2018i)",
      "Al-Bara' bin 'Azib (Companion)",
    ],
    translation:
      "Narrated Al-Bara' (bin 'Azib): When the Prophet (\u25f7) first came to Madinah, he stayed with his grandfathers \u2014 or he said, his maternal uncles \u2014 from the Ansar. He prayed facing Bayt al-Maqdis (Jerusalem) for sixteen or seventeen months, though he loved for his qiblah to be toward the House (the Ka'bah). The first prayer he prayed [facing the Ka'bah] was 'Asr, and a group prayed with him. Then a man who had prayed with him went out and passed by people at a mosque who were bowing [still facing Jerusalem], and said, \"I testify by Allah, I have prayed with Allah's Messenger (\u25f7) facing Makkah.\" So they turned, as they were, toward the House. The Jews and the People of the Book had been pleased while he prayed facing Bayt al-Maqdis; but when he turned his face toward the House, they disapproved of it. Al-Bara' added: Before we turned toward the Ka'bah, some men had died or been killed, and we did not know what to say about them. So Allah the Exalted revealed, \"And Allah would never let your faith be lost.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:40 at time of writing.
    notes:
      "This hadith recounts the change of the qiblah (direction of prayer) from Jerusalem to the Ka'bah in Makkah, roughly sixteen to seventeen months after the hijrah. The Qur'anic verse cited at the end (2:143) was revealed to reassure the Companions that the prayers they had already offered facing Jerusalem, and the record of Muslims who died before the change, were not invalidated by the later change in direction \u2014 Bukhari's chapter placement (\"the prayer is a part of faith\") reads the word 'iman' in that verse as referring to those earlier prayers themselves.",
    lessons: [
      "The change of the qiblah is described as gradual news, spreading even mid-prayer, as shown by the man who redirected an entire congregation after hearing of it secondhand.",
      "The Qur'anic reassurance that faith (understood here as the earlier prayers) would not be 'lost' addressed a real anxiety among early Muslims about the standing of those who died or were killed before the qiblah changed.",
      "The differing reactions of the Jews and People of the Book \u2014 approving while the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam prayed toward Jerusalem, disapproving once he turned to the Ka'bah \u2014 situates the qiblah change within the wider historical relations between the early Muslim community and the People of the Book in Madinah.",
    ],
  },
  {
    num: 41,
    chapter: 'belief',
    chapter_heading: "The superiority of one who embraces Islam sincerely",
    chapter_heading_arabic: 'بَابُ حُسْنِ إِسْلاَمِ الْمَرْءِ',
    narrator: 'Abu Sa\u2018id Al-Khudri',
    source: 'Sahih al-Bukhari 41',
    arabic_text:
      'قَالَ مَالِكٌ أَخْبَرَنِي زَيْدُ بْنُ أَسْلَمَ، أَنَّ عَطَاءَ بْنَ يَسَارٍ، أَخْبَرَهُ أَنَّ أَبَا سَعِيدٍ الْخُدْرِيَّ أَخْبَرَهُ أَنَّهُ، سَمِعَ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ "‏ إِذَا أَسْلَمَ الْعَبْدُ فَحَسُنَ إِسْلاَمُهُ يُكَفِّرُ اللَّهُ عَنْهُ كُلَّ سَيِّئَةٍ كَانَ زَلَفَهَا، وَكَانَ بَعْدَ ذَلِكَ الْقِصَاصُ، الْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، وَالسَّيِّئَةُ بِمِثْلِهَا إِلاَّ أَنْ يَتَجَاوَزَ اللَّهُ عَنْهَا ‏"',
    isnad_chain: [
      'Malik bin Anas',
      'Zayd bin Aslam',
      "'Ata' bin Yasar",
      'Abu Sa\u2018id Al-Khudri (Companion)',
    ],
    translation:
      "Malik said: Zayd bin Aslam informed me, that 'Ata' bin Yasar informed him, that Abu Sa'id Al-Khudri informed him that he heard Allah's Messenger (\u25f7) say, \"When a servant embraces Islam and his Islam becomes good, Allah forgives him every evil deed he had put forward before; then after that comes the settling of accounts \u2014 a good deed is written as ten times its like, up to seven hundred times, and an evil deed is written as its like, unless Allah overlooks it.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:41 at time of writing.
    notes:
      "The Arabic text here begins directly with 'Malik said,' continuing the isnad from the end of the previous chapter without repeating the full chain to Isma'il bin Abi Uways given for surrounding hadith \u2014 a common feature in Bukhari's arrangement when consecutive hadith share their earlier links. The phrase 'his Islam becomes good' (hasuna islamuhu) is understood by commentators as sincere, sustained practice following one's initial acceptance of Islam, not the moment of conversion by itself.",
    lessons: [
      "Forgiveness of past sins upon becoming Muslim is conditioned on the quality of one's Islam going forward ('husn al-islam'), not solely on the act of converting.",
      "The 10-to-700-times multiplier for good deeds, against a strict one-to-one reckoning for evil deeds (itself subject to Allah's pardon), establishes an asymmetry in Allah's mercy that recurs across several hadith in this part of the Book of Belief.",
      "This hadith and the one following it (hadith 42) state the same reward principle from two different Companions, reinforcing it through separate transmission.",
    ],
  },
  {
    num: 42,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 41 ("The
    // superiority of one who embraces Islam sincerely"), stating the
    // same principle via a separate narrator and chain.
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 42',
    arabic_text:
      'حَدَّثَنَا إِسْحَاقُ بْنُ مَنْصُورٍ، قَالَ حَدَّثَنَا عَبْدُ الرَّزَّاقِ، قَالَ أَخْبَرَنَا مَعْمَرٌ، عَنْ هَمَّامٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ إِذَا أَحْسَنَ أَحَدُكُمْ إِسْلاَمَهُ، فَكُلُّ حَسَنَةٍ يَعْمَلُهَا تُكْتَبُ لَهُ بِعَشْرِ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ، وَكُلُّ سَيِّئَةٍ يَعْمَلُهَا تُكْتَبُ لَهُ بِمِثْلِهَا ‏"',
    isnad_chain: [
      'Ishaq bin Mansur',
      "'Abd al-Razzaq",
      "Ma'mar",
      'Hammam',
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"When one of you makes his Islam good, then every good deed he does is written for him as ten times its like, up to seven hundred times, and every evil deed he does is written for him as its like.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:42 at time of writing.
    notes:
      "This is the same core principle as hadith 41, transmitted from a different Companion (Abu Huraira rather than Abu Sa'id Al-Khudri) through an entirely separate chain, and worded slightly more generally (about ongoing good and evil deeds rather than specifically the moment of embracing Islam).",
    lessons: [
      "The multiplied reward for good deeds is framed here as an ongoing feature of a well-practiced Islam, not a one-time bonus tied only to the moment of conversion.",
      "Evil deeds are recorded on a strict one-for-one basis, in clear contrast to the up-to-sevenhundredfold multiplication applied to good deeds.",
      "The near-identical wording of hadith 41 and 42 from two separate Companions is treated by scholars as mutual corroboration of the same well-known principle.",
    ],
  },
  {
    num: 43,
    chapter: 'belief',
    chapter_heading: "The deed (act of worship) most beloved to Allah is the one done most consistently",
    chapter_heading_arabic: 'بَابُ أَحَبُّ الدِّينِ إِلَى اللَّهِ أَدْوَمُهُ',
    narrator: "'Aisha",
    source: 'Sahih al-Bukhari 43',
    also_collected_in: 'Sahih al-Bukhari 6465',
    arabic_text:
      'حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى، حَدَّثَنَا يَحْيَى، عَنْ هِشَامٍ، قَالَ أَخْبَرَنِي أَبِي، عَنْ عَائِشَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم دَخَلَ عَلَيْهَا وَعِنْدَهَا امْرَأَةٌ قَالَ ‏"‏ مَنْ هَذِهِ ‏"‏‏.‏ قَالَتْ فُلاَنَةُ‏.‏ تَذْكُرُ مِنْ صَلاَتِهَا‏.‏ قَالَ ‏"‏ مَهْ، عَلَيْكُمْ بِمَا تُطِيقُونَ، فَوَاللَّهِ لاَ يَمَلُّ اللَّهُ حَتَّى تَمَلُّوا ‏"‏‏.‏ وَكَانَ أَحَبَّ الدِّينِ إِلَيْهِ مَا دَامَ عَلَيْهِ صَاحِبُهُ',
    isnad_chain: [
      "Muhammad bin al-Muthanna",
      "Yahya (bin Sa'id al-Qattan)",
      "Hisham (bin 'Urwah)",
      "his father, 'Urwah bin al-Zubayr",
      "'Aisha (Companion and wife of the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam)",
    ],
    translation:
      "Narrated 'Aisha: The Prophet (\u25f7) entered upon her while a woman was sitting there. He asked, \"Who is this?\" She said, \"So-and-so,\" mentioning something of her [extensive] prayer. He said, \"Enough! Take on only what you are able to sustain, for by Allah, Allah does not tire until you tire.\" And the religious practice most beloved to him was whatever its doer kept up consistently.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:43 at time of writing.
    notes:
      "This hadith closely parallels others elsewhere in Bukhari's collection on the same theme (see also hadith 6464\u20136465 in the Book of Ar-Riqaq), all making the same point: consistency in a modest amount of worship is valued over an intense burst of devotion that cannot be sustained. The phrase 'Allah does not tire until you tire' is understood by scholars as figurative, describing that Allah's reward keeps flowing for as long as the worshipper keeps up the practice, not literally attributing fatigue to Allah.",
    lessons: [
      "The Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam discouraged excessive, unsustainable worship in favor of a moderate practice a person can keep up indefinitely.",
      "The measure of a beloved act of worship given here is its consistency over time, not its intensity in any single instance.",
      "This hadith is frequently cited alongside similar ones (e.g. Bukhari 6465) as part of a broader prophetic teaching against religious extremism and burnout in personal practice.",
    ],
  },
  {
    num: 44,
    chapter: 'belief',
    chapter_heading: "Faith increases and decreases",
    chapter_heading_arabic: 'بَابُ زِيَادَةِ الإِيمَانِ وَنُقْصَانِهِ',
    narrator: 'Anas',
    source: 'Sahih al-Bukhari 44',
    arabic_text:
      'حَدَّثَنَا مُسْلِمُ بْنُ إِبْرَاهِيمَ، قَالَ حَدَّثَنَا هِشَامٌ، قَالَ حَدَّثَنَا قَتَادَةُ، عَنْ أَنَسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ يَخْرُجُ مِنَ النَّارِ مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ، وَفِي قَلْبِهِ وَزْنُ شَعِيرَةٍ مِنْ خَيْرٍ، وَيَخْرُجُ مِنَ النَّارِ مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ، وَفِي قَلْبِهِ وَزْنُ بُرَّةٍ مِنْ خَيْرٍ، وَيَخْرُجُ مِنَ النَّارِ مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ، وَفِي قَلْبِهِ وَزْنُ ذَرَّةٍ مِنْ خَيْرٍ ‏"‏‏.‏ قَالَ أَبُو عَبْدِ اللَّهِ قَالَ أَبَانُ حَدَّثَنَا قَتَادَةُ حَدَّثَنَا أَنَسٌ عَنِ النَّبِيِّ صلى الله عليه وسلم ‏"‏ مِنْ إِيمَانٍ ‏"‏‏.‏ مَكَانَ ‏"‏ مِنْ خَيْرٍ ‏"',
    isnad_chain: [
      'Muslim bin Ibrahim',
      'Hisham (bin Abi \u2018Abdillah al-Dastuwa\u2019i)',
      'Qatada',
      'Anas (Companion)',
    ],
    translation:
      "Narrated Anas: The Prophet (\u25f7) said, \"Whoever said, 'there is no god but Allah,' and has in his heart the weight of a barley grain of good, will come out of the Fire. And whoever said, 'there is no god but Allah,' and has in his heart the weight of a wheat grain of good, will come out of the Fire. And whoever said, 'there is no god but Allah,' and has in his heart the weight of an atom of good, will come out of the Fire.\" Abu 'Abdullah (al-Bukhari) said: Aban narrated, from Qatada, from Anas, from the Prophet (\u25f7), \"of faith\" in place of \"of good.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:44 at time of writing.
    notes:
      "Bukhari's chapter heading ('faith increases and decreases') places this hadith as evidence that faith is not a single fixed quantity: the progressively smaller measures given here (barley grain, wheat grain, atom/dharrah) describe people at very different levels of accumulated faith, all of whom are ultimately released from the Fire. The variant wording noted at the end ('of faith' instead of 'of good,' from a different narrator, Aban, transmitting the same chain) is one of several places in the Book of Belief where Bukhari records that the two words were used interchangeably by different narrators of the same report.",
    lessons: [
      "Faith is described here as something measurable in degree \u2014 down to an amount as small as a single atom \u2014 rather than as an all-or-nothing state.",
      "Even the smallest described amount of faith is enough to eventually secure release from the Fire, reinforcing the point made earlier in hadith 22 about a mustard seed's weight of faith.",
      "The noted variant ('of faith' vs. 'of good') is preserved by Bukhari rather than silently resolved, illustrating his practice of recording minor wording differences between narrators rather than picking one as definitive.",
    ],
  },
  {
    num: 45,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 44 ("Faith
    // increases and decreases"); illustrates the verse on the
    // completion of religion mentioned there.
    narrator: "'Umar bin Al-Khattab",
    source: 'Sahih al-Bukhari 45',
    arabic_text:
      'حَدَّثَنَا الْحَسَنُ بْنُ الصَّبَّاحِ، سَمِعَ جَعْفَرَ بْنَ عَوْنٍ، حَدَّثَنَا أَبُو الْعُمَيْسِ، أَخْبَرَنَا قَيْسُ بْنُ مُسْلِمٍ، عَنْ طَارِقِ بْنِ شِهَابٍ، عَنْ عُمَرَ بْنِ الْخَطَّابِ، أَنَّ رَجُلاً، مِنَ الْيَهُودِ قَالَ لَهُ يَا أَمِيرَ الْمُؤْمِنِينَ، آيَةٌ فِي كِتَابِكُمْ تَقْرَءُونَهَا لَوْ عَلَيْنَا مَعْشَرَ الْيَهُودِ نَزَلَتْ لاَتَّخَذْنَا ذَلِكَ الْيَوْمَ عِيدًا‏.‏ قَالَ أَىُّ آيَةٍ قَالَ ‏{‏الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الإِسْلاَمَ دِينًا‏}‏‏.‏ قَالَ عُمَرُ قَدْ عَرَفْنَا ذَلِكَ الْيَوْمَ وَالْمَكَانَ الَّذِي نَزَلَتْ فِيهِ عَلَى النَّبِيِّ صلى الله عليه وسلم وَهُوَ قَائِمٌ بِعَرَفَةَ يَوْمَ جُمُعَةٍ',
    isnad_chain: [
      'Al-Hasan bin al-Sabbah',
      "Ja'far bin 'Awn",
      "Abu al-'Umays",
      'Qais bin Muslim',
      'Tariq bin Shihab',
      "'Umar bin Al-Khattab (Companion)",
    ],
    translation:
      "Narrated 'Umar bin Al-Khattab: A Jewish man said to him, \"O Commander of the Believers, there is a verse in your Book that you recite \u2014 had it been revealed to us Jews, we would have taken that day as a festival.\" 'Umar said, \"Which verse?\" He said, \"'This day I have perfected your religion for you, completed My favor upon you, and chosen Islam as your religion.'\" 'Umar said, \"We know that day, and the place where it was revealed to the Prophet (\u25f7) \u2014 he was standing at 'Arafah, on a Friday.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:45 at time of writing.
    notes:
      "The verse quoted is Qur'an 5:3, revealed during the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam Farewell Pilgrimage. Bukhari places this hadith directly after hadith 44 under the chapter on faith increasing and decreasing because the verse speaks of religion being made complete ('this day I have perfected your religion'), tying the theme of completeness of faith to a specific, dateable historical moment.",
    lessons: [
      "The Jewish man's remark is preserved as an outside observer's recognition of the significance of a specific Qur'anic verse, offered without prompting from a Muslim.",
      "'Umar's reply anchors the verse to a precise time and place \u2014 standing at 'Arafah on a Friday during the Farewell Pilgrimage \u2014 grounding a theological statement (the completion of religion) in a specific historical event rather than treating it only abstractly.",
      "This exchange is frequently cited by later scholars as evidence for identifying the exact occasion (sabab al-nuzul) of Qur'an 5:3.",
    ],
  },
  {
    num: 46,
    chapter: 'belief',
    chapter_heading: "Zakat is a part of Islam",
    chapter_heading_arabic: 'بَابُ الزَّكَاةُ مِنَ الإِسْلاَمِ',
    narrator: "Talha bin 'Ubaydullah",
    source: 'Sahih al-Bukhari 46',
    also_collected_in: 'Sahih Muslim 11',
    arabic_text:
      'حَدَّثَنَا إِسْمَاعِيلُ، قَالَ حَدَّثَنِي مَالِكُ بْنُ أَنَسٍ، عَنْ عَمِّهِ أَبِي سُهَيْلِ بْنِ مَالِكٍ، عَنْ أَبِيهِ، أَنَّهُ سَمِعَ طَلْحَةَ بْنَ عُبَيْدِ اللَّهِ، يَقُولُ جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم مِنْ أَهْلِ نَجْدٍ، ثَائِرُ الرَّأْسِ، يُسْمَعُ دَوِيُّ صَوْتِهِ، وَلاَ يُفْقَهُ مَا يَقُولُ حَتَّى دَنَا، فَإِذَا هُوَ يَسْأَلُ عَنِ الإِسْلاَمِ فَقَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ‏"‏ خَمْسُ صَلَوَاتٍ فِي الْيَوْمِ وَاللَّيْلَةِ ‏"‏‏.‏ فَقَالَ هَلْ عَلَىَّ غَيْرُهَا قَالَ ‏"‏ لاَ، إِلاَّ أَنْ تَطَوَّعَ ‏"‏‏.‏ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ وَصِيَامُ رَمَضَانَ ‏"‏‏.‏ قَالَ هَلْ عَلَىَّ غَيْرُهُ قَالَ ‏"‏ لاَ، إِلاَّ أَنْ تَطَوَّعَ ‏"‏‏.‏ قَالَ وَذَكَرَ لَهُ رَسُولُ اللَّهِ صلى الله عليه وسلم الزَّكَاةَ‏.‏ قَالَ هَلْ عَلَىَّ غَيْرُهَا قَالَ ‏"‏ لاَ، إِلاَّ أَنْ تَطَوَّعَ ‏"‏‏.‏ قَالَ فَأَدْبَرَ الرَّجُلُ وَهُوَ يَقُولُ وَاللَّهِ لاَ أَزِيدُ عَلَى هَذَا وَلاَ أَنْقُصُ‏.‏ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏"‏ أَفْلَحَ إِنْ صَدَقَ ‏"',
    isnad_chain: [
      "Isma'il (bin Abi Uways)",
      'Malik bin Anas',
      'his uncle, Abu Suhail bin Malik',
      'his father, Malik bin Abi \u2018Amir',
      "Talha bin 'Ubaydullah (Companion)",
    ],
    translation:
      "Narrated Talha bin 'Ubaydullah: A disheveled-haired man from the people of Najd came to Allah's Messenger (\u25f7); we could hear the low rumble of his voice but could not make out what he was saying, until he came close, and it turned out he was asking about Islam. Allah's Messenger (\u25f7) said, \"Five prayers in a day and a night.\" He asked, \"Is there anything else upon me?\" He said, \"No, unless you volunteer.\" Allah's Messenger (\u25f7) said, \"And fasting Ramadan.\" He asked, \"Is there anything else?\" He said, \"No, unless you volunteer.\" And Allah's Messenger (\u25f7) mentioned zakat to him. He asked, \"Is there anything else upon me?\" He said, \"No, unless you volunteer.\" Then the man turned away, saying, \"By Allah, I will not add to this, nor will I subtract from it.\" Allah's Messenger (\u25f7) said, \"He will succeed, if he is truthful.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:46 at time of writing.
    notes:
      "This is one of several well-known hadith establishing the precise boundary between what is obligatory in Islam and what is merely recommended, with the man's blunt, unpolished manner of asking preserved in the narration as a detail that lends the account vividness and credibility. Commentators note the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam final remark ('he will succeed, if he is truthful') as significant: succeeding in Islam is presented as attainable through sincerely fulfilling only the obligatory minimum, without needing to add voluntary extras.",
    lessons: [
      "The obligatory core of Islamic practice \u2014 five daily prayers, fasting Ramadan, and zakat \u2014 is explicitly confirmed here as sufficient for salvation, with anything beyond it left entirely voluntary.",
      "The man's resolve to do exactly what is required, no more and no less, is affirmed rather than criticized by the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam, who ties success not to volume of extra worship but to sincerity ('if he is truthful').",
      "The narration's physical detail about the man's appearance and voice is typical of how some hadith preserve eyewitness color alongside the legal content being transmitted.",
    ],
  },
  {
    num: 47,
    chapter: 'belief',
    chapter_heading: "Accompanying funeral processions is a part of faith",
    chapter_heading_arabic: 'بَابُ اتِّبَاعُ الْجَنَائِزِ مِنَ الإِيمَانِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 47',
    arabic_text:
      'حَدَّثَنَا أَحْمَدُ بْنُ عَبْدِ اللَّهِ بْنِ عَلِيٍّ الْمَنْجُوفِيُّ، قَالَ حَدَّثَنَا رَوْحٌ، قَالَ حَدَّثَنَا عَوْفٌ، عَنِ الْحَسَنِ، وَمُحَمَّدٍ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ مَنِ اتَّبَعَ جَنَازَةَ مُسْلِمٍ إِيمَانًا وَاحْتِسَابًا، وَكَانَ مَعَهُ حَتَّى يُصَلَّى عَلَيْهَا، وَيَفْرُغَ مِنْ دَفْنِهَا، فَإِنَّهُ يَرْجِعُ مِنَ الأَجْرِ بِقِيرَاطَيْنِ، كُلُّ قِيرَاطٍ مِثْلُ أُحُدٍ، وَمَنْ صَلَّى عَلَيْهَا ثُمَّ رَجَعَ قَبْلَ أَنْ تُدْفَنَ فَإِنَّهُ يَرْجِعُ بِقِيرَاطٍ ‏"‏‏.‏ تَابَعَهُ عُثْمَانُ الْمُؤَذِّنُ قَالَ حَدَّثَنَا عَوْفٌ عَنْ مُحَمَّدٍ عَنْ أَبِي هُرَيْرَةَ عَنِ النَّبِيِّ صلى الله عليه وسلم نَحْوَهُ',
    isnad_chain: [
      "Ahmad bin 'Abdullah bin 'Ali al-Manjufi",
      'Rawh (bin \u2018Ubada)',
      "'Awf (bin Abi Jamila)",
      'Al-Hasan (al-Basri), and Muhammad (bin Sirin)',
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: Allah's Messenger (\u25f7) said, \"Whoever follows the funeral procession of a Muslim out of faith and seeking Allah's reward, and stays with it until the funeral prayer is offered and the burial is complete, returns with a reward of two qirats, each qirat like [the mountain of] Uhud. And whoever prays the funeral prayer over it but returns before it is buried returns with one qirat.\" This was corroborated by 'Uthman al-Mu'adhdhin, from 'Awf, from Muhammad, from Abu Huraira, from the Prophet (\u25f7), with similar wording.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:47 at time of writing.
    notes:
      "'Qirat' is a unit of weight or value used elsewhere in Islamic legal and commercial contexts; here its size is described by comparison to Mount Uhud near Madinah, a comparison scholars treat as emphasizing the immensity of the reward rather than a literal weight. The corroboration note at the end (naming 'Uthman al-Mu'adhdhin as another transmitter of the same report) is a standard Bukhari-style addition showing the hadith reached him through more than one route.",
    lessons: [
      "Two distinct, separately rewarded stages of the funeral rite are identified: staying through burial earns a greater reward (two qirats) than praying the funeral prayer alone and then leaving (one qirat).",
      "Sincerity of intention ('iman wa ihtisab') is again named as a condition for the reward described, consistent with the pattern seen throughout this part of the Book of Belief.",
      "The comparison of a single qirat's reward to the size of Mount Uhud is used rhetorically to convey the scale of the reward rather than to specify an exact quantity.",
    ],
  },
  {
    num: 48,
    chapter: 'belief',
    chapter_heading: "(What is feared regarding) a believer's good deeds being nullified without his realizing it",
    chapter_heading_arabic: 'بَابُ خَوْفِ الْمُؤْمِنِ مِنْ أَنْ يَحْبَطَ عَمَلُهُ وَهُوَ لاَ يَشْعُرُ',
    narrator: "'Abdullah (bin Mas'ud)",
    source: 'Sahih al-Bukhari 48',
    also_collected_in: 'Sahih Muslim 64',
    arabic_text:
      'حَدَّثَنَا مُحَمَّدُ بْنُ عَرْعَرَةَ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ زُبَيْدٍ، قَالَ سَأَلْتُ أَبَا وَائِلٍ عَنِ الْمُرْجِئَةِ،، فَقَالَ حَدَّثَنِي عَبْدُ اللَّهِ، أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ ‏"‏ سِبَابُ الْمُسْلِمِ فُسُوقٌ، وَقِتَالُهُ كُفْرٌ ‏"',
    isnad_chain: [
      "Muhammad bin 'Ar'ara",
      "Shu'ba",
      'Zubayd',
      "Abu Wa'il",
      "'Abdullah bin Mas'ud (Companion)",
    ],
    translation:
      "Narrated 'Abdullah (bin Mas'ud): The Prophet (\u25f7) said, \"Insulting a Muslim is corruption (fisq), and fighting him is disbelief (kufr).\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:48 at time of writing.
    notes:
      "The Arabic preserves the context in which Zubayd asked Abu Wa'il about the Murji'ah (an early theological group associated with the view that sinful acts do not affect one's standing as a believer at all); Abu Wa'il answered by citing this hadith from Ibn Mas'ud rather than commenting directly, letting the hadith's stern language on insulting and fighting a fellow Muslim speak against a lax view of sin. As with hadith 32, 'kufr' here is understood by mainstream scholars in its lesser, non-theological sense (an act characteristic of disbelief) rather than as removing the person from Islam outright, consistent with Bukhari's broader chapter theme that a believer's deeds can be gravely harmed by sin without their necessarily leaving the faith.",
    lessons: [
      "Insulting a fellow Muslim and fighting one are both described in severe terms (fisq and kufr respectively), signaling how seriously these acts are treated even though they do not equate to leaving the faith.",
      "The hadith is invoked here specifically in response to a question about the Murji'ah's minimizing view of sin, using its severe language as an implicit corrective.",
      "This hadith belongs to a cluster of similarly worded reports in Bukhari using strong theological language ('kufr,' 'fisq') for serious sins against other Muslims, which scholars read carefully within their technical, non-absolute sense.",
    ],
  },
  {
    num: 49,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 48; illustrates
    // how a believer's good deed (informing others of Laylat al-Qadr)
    // can be affected by another's conduct.
    narrator: "'Ubada bin As-Samit (via Anas)",
    source: 'Sahih al-Bukhari 49',
    arabic_text:
      'أَخْبَرَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، حَدَّثَنَا إِسْمَاعِيلُ بْنُ جَعْفَرٍ، عَنْ حُمَيْدٍ، عَنْ أَنَسٍ، قَالَ أَخْبَرَنِي عُبَادَةُ بْنُ الصَّامِتِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم خَرَجَ يُخْبِرُ بِلَيْلَةِ الْقَدْرِ، فَتَلاَحَى رَجُلاَنِ مِنَ الْمُسْلِمِينَ فَقَالَ ‏"‏ إِنِّي خَرَجْتُ لأُخْبِرَكُمْ بِلَيْلَةِ الْقَدْرِ، وَإِنَّهُ تَلاَحَى فُلاَنٌ وَفُلاَنٌ فَرُفِعَتْ وَعَسَى أَنْ يَكُونَ خَيْرًا لَكُمُ الْتَمِسُوهَا فِي السَّبْعِ وَالتِّسْعِ وَالْخَمْسِ ‏"',
    isnad_chain: [
      'Qutayba bin Sa\u2018id',
      "Isma'il bin Ja\u2018far",
      'Humayd',
      'Anas',
      "'Ubada bin As-Samit (Companion)",
    ],
    translation:
      "Narrated 'Ubada bin As-Samit: Allah's Messenger (\u25f7) went out to inform [the people] of the night of Laylat al-Qadr, but two Muslim men were quarreling, so he said, \"I went out to inform you of the Night of Decree, but so-and-so and so-and-so were quarreling, and so [knowledge of] it was lifted from me \u2014 and perhaps that is better for you. Seek it in the seventh, ninth, and fifth [of the last ten nights].\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:49 at time of writing.
    notes:
      "Bukhari places this hadith directly after hadith 48 to illustrate its chapter theme (a believer's good deed being affected without his realizing it): the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam intention to publicly announce the exact date of Laylat al-Qadr was disrupted by the disputing of two other Muslims, and the specific knowledge was withdrawn as a consequence \u2014 read by scholars as an example of how the conduct of some can affect a benefit intended for the whole community.",
    lessons: [
      "The exact date of Laylat al-Qadr was withdrawn from common knowledge as a direct consequence of a dispute between two Muslims, which the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam treats as a real, not merely coincidental, cause.",
      "Rather than treating the loss of this knowledge as pure misfortune, the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam suggests it 'may be better for you,' redirecting the Companions toward broader effort (seeking it across several likely nights) instead of relying on a single certain date.",
      "The instruction to search the seventh, ninth, and fifth nights (counting from the end of Ramadan) is one of several hadith giving practical guidance on when to seek Laylat al-Qadr.",
    ],
  },
  {
    num: 50,
    chapter: 'belief',
    chapter_heading: "The angel Jibril's questioning of the Prophet (\u25f7) about Iman, Islam, Ihsan, and knowledge of the Hour",
    chapter_heading_arabic: 'بَابُ سُؤَالِ جِبْرِيلَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الإِيمَانِ وَالإِسْلاَمِ وَالإِحْسَانِ وَعِلْمِ السَّاعَةِ',
    narrator: 'Abu Huraira',
    source: 'Sahih al-Bukhari 50',
    also_collected_in: 'Sahih Muslim 9',
    arabic_text:
      'حَدَّثَنَا مُسَدَّدٌ، قَالَ حَدَّثَنَا إِسْمَاعِيلُ بْنُ إِبْرَاهِيمَ، أَخْبَرَنَا أَبُو حَيَّانَ التَّيْمِيُّ، عَنْ أَبِي زُرْعَةَ، عَنْ أَبِي هُرَيْرَةَ، قَالَ كَانَ النَّبِيُّ صلى الله عليه وسلم بَارِزًا يَوْمًا لِلنَّاسِ، فَأَتَاهُ جِبْرِيلُ فَقَالَ مَا الإِيمَانُ قَالَ ‏"‏ الإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَبِلِقَائِهِ وَرُسُلِهِ، وَتُؤْمِنَ بِالْبَعْثِ ‏"‏‏.‏ قَالَ مَا الإِسْلاَمُ قَالَ ‏"‏ الإِسْلاَمُ أَنْ تَعْبُدَ اللَّهَ وَلاَ تُشْرِكَ بِهِ، وَتُقِيمَ الصَّلاَةَ، وَتُؤَدِّيَ الزَّكَاةَ الْمَفْرُوضَةَ، وَتَصُومَ رَمَضَانَ ‏"‏‏.‏ قَالَ مَا الإِحْسَانُ قَالَ ‏"‏ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ ‏"‏‏.‏ قَالَ مَتَى السَّاعَةُ قَالَ ‏"‏ مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ، وَسَأُخْبِرُكَ عَنْ أَشْرَاطِهَا إِذَا وَلَدَتِ الأَمَةُ رَبَّهَا، وَإِذَا تَطَاوَلَ رُعَاةُ الإِبِلِ الْبُهْمُ فِي الْبُنْيَانِ، فِي خَمْسٍ لاَ يَعْلَمُهُنَّ إِلاَّ اللَّهُ ‏"‏‏.‏ ثُمَّ تَلاَ النَّبِيُّ صلى الله عليه وسلم ‏{‏إِنَّ اللَّهَ عِنْدَهُ عِلْمُ السَّاعَةِ‏}‏ الآيَةَ‏.‏ ثُمَّ أَدْبَرَ فَقَالَ ‏"‏ رُدُّوهُ ‏"‏‏.‏ فَلَمْ يَرَوْا شَيْئًا‏.‏ فَقَالَ ‏"‏ هَذَا جِبْرِيلُ جَاءَ يُعَلِّمُ النَّاسَ دِينَهُمْ ‏"‏‏.‏ قَالَ أَبُو عَبْدِ اللَّهِ جَعَلَ ذَلِكَ كُلَّهُ مِنَ الإِيمَانِ',
    isnad_chain: [
      'Musaddad',
      "Isma'il bin Ibrahim (Ibn 'Ulayyah)",
      'Abu Hayyan al-Taymi',
      "Abu Zur'a",
      'Abu Huraira (Companion)',
    ],
    translation:
      "Narrated Abu Huraira: The Prophet (\u25f7) was sitting openly among the people one day, when Jibril came to him and asked, \"What is Iman (faith)?\" He said, \"Iman is that you believe in Allah, His angels, meeting Him, His messengers, and that you believe in the resurrection.\" He asked, \"What is Islam?\" He said, \"Islam is that you worship Allah and not associate anything with Him, establish the prayer, pay the obligatory zakat, and fast Ramadan.\" He asked, \"What is Ihsan?\" He said, \"That you worship Allah as though you see Him, and though you do not see Him, He surely sees you.\" He asked, \"When is the Hour?\" He said, \"The one asked about it knows no more than the one asking. But I will tell you its signs: when the slave-girl gives birth to her mistress, and when barefoot, naked, destitute herdsmen compete in building tall structures \u2014 [it is one] of five things that none knows except Allah.\" Then the Prophet (\u25f7) recited, \"Indeed, with Allah alone is knowledge of the Hour\u2014\" [the verse]. Then he (Jibril) left, and the Prophet (\u25f7) said, \"Bring him back,\" but they saw nothing. He said, \"That was Jibril, who came to teach the people their religion.\" Abu 'Abdullah (al-Bukhari) said: He (the Prophet) counted all of that as part of faith.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:50 at time of writing.
    notes:
      "This is one of the most foundational hadith in the entire collection, often called 'Hadith Jibril,' since it lays out the three-part structure (Islam, Iman, Ihsan) that later scholarship builds on to organize the whole of Islamic religious practice: outward submission, inward belief, and excellence/God-consciousness in worship. Bukhari's closing note ('he counted all of that as part of faith') is his own editorial remark tying this structural hadith back to the Book of Belief's broader argument that faith, Islam, and excellence in worship are inseparable rather than entirely separate categories.",
    lessons: [
      "This single hadith supplies concise, authoritative definitions of three foundational terms \u2014 Iman, Islam, and Ihsan \u2014 that later scholarship treats as the organizing structure of the entire religion.",
      "Ihsan is defined here as worshipping with the awareness of being seen by Allah even when one cannot see Him, establishing a standard of sincerity and mindfulness beyond mere outward compliance.",
      "Knowledge of exactly when the Hour (Qiyamah) will occur is explicitly placed beyond human knowledge, while its signs (such as social inversion and extravagant building by once-destitute people) are given as recognizable indicators rather than a specific date.",
    ],
  },
  {
    num: 51,
    chapter: 'belief',
    chapter_heading: null,
    // sunnah.com lists this chapter simply as "Chapter:" with no
    // descriptive bab title given (باب with nothing following it),
    // same pattern as hadith 18. Left null rather than inventing one.
    narrator: "'Abdullah bin 'Abbas (via Abu Sufyan)",
    source: 'Sahih al-Bukhari 51',
    arabic_text:
      'حَدَّثَنَا إِبْرَاهِيمُ بْنُ حَمْزَةَ، قَالَ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدٍ، عَنْ صَالِحٍ، عَنِ ابْنِ شِهَابٍ، عَنْ عُبَيْدِ اللَّهِ بْنِ عَبْدِ اللَّهِ، أَنَّ عَبْدَ اللَّهِ بْنَ عَبَّاسٍ، أَخْبَرَهُ قَالَ أَخْبَرَنِي أَبُو سُفْيَانَ، أَنَّ هِرَقْلَ، قَالَ لَهُ سَأَلْتُكَ هَلْ يَزِيدُونَ أَمْ يَنْقُصُونَ، فَزَعَمْتَ أَنَّهُمْ يَزِيدُونَ، وَكَذَلِكَ الإِيمَانُ حَتَّى يَتِمَّ‏.‏ وَسَأَلْتُكَ هَلْ يَرْتَدُّ أَحَدٌ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ، فَزَعَمْتَ أَنْ لاَ، وَكَذَلِكَ الإِيمَانُ حِينَ تُخَالِطُ بَشَاشَتُهُ الْقُلُوبَ، لاَ يَسْخَطُهُ أَحَدٌ',
    isnad_chain: [
      'Ibrahim bin Hamza',
      'Ibrahim bin Sa\u2018d',
      'Salih (bin Kaysan)',
      'Ibn Shihab (al-Zuhri)',
      "'Ubaydullah bin 'Abdullah",
      "'Abdullah bin 'Abbas",
      "Abu Sufyan bin Harb (Companion, eyewitness to the meeting with Heraclius)",
    ],
    translation:
      "Narrated 'Abdullah bin 'Abbas: Abu Sufyan informed me that Heraclius said to him, \"I asked you whether they [the followers of Muhammad] were increasing or decreasing, and you claimed they were increasing \u2014 and such is faith, until it is complete. And I asked you whether anyone ever turns back out of displeasure with his religion after entering it, and you claimed no \u2014 and such is faith, once its warmth mixes into hearts: no one turns away from it in displeasure.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:51 at time of writing.
    notes:
      "This is an excerpt from the long Heraclius narration recorded in full at hadith 7 (Book of Revelation); here Bukhari extracts just the portion concerning the growth of the early Muslim community and the absence of apostasy, placing it in the Book of Belief specifically because Heraclius's reasoning ties observable community growth and lack of defection directly to the nature and completeness of faith itself.",
    lessons: [
      "The same evidence Heraclius used to evaluate the truth of the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam claim to prophethood (community growth, absence of apostasy) is reused here to illustrate general principles about the nature of faith once it takes root.",
      "Heraclius's observation that faith's 'warmth' or sweetness, once it mixes into a heart, prevents people from abandoning it, echoes the earlier hadith on the 'sweetness of faith' (hadith 16/21) from within the Muslim community itself.",
      "Bukhari's practice of excerpting a portion of a much longer hadith and re-placing it under a different, thematically relevant chapter (as with this excerpt from hadith 7) is a recurring feature of how the collection is organized.",
    ],
  },
  {
    num: 52,
    chapter: 'belief',
    chapter_heading: "The superiority of one who avoids doubtful matters for the sake of his religion",
    chapter_heading_arabic: 'بَابُ فَضْلِ مَنِ اسْتَبْرَأَ لِدِينِهِ',
    narrator: "Al-Nu'man bin Bashir",
    source: 'Sahih al-Bukhari 52',
    also_collected_in: 'Sahih Muslim 1599 (also the 6th hadith in An-Nawawi\u2019s Forty Hadith)',
    arabic_text:
      'حَدَّثَنَا أَبُو نُعَيْمٍ، حَدَّثَنَا زَكَرِيَّاءُ، عَنْ عَامِرٍ، قَالَ سَمِعْتُ النُّعْمَانَ بْنَ بَشِيرٍ، يَقُولُ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏"‏ الْحَلاَلُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ، وَبَيْنَهُمَا مُشَبَّهَاتٌ لاَ يَعْلَمُهَا كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الْمُشَبَّهَاتِ اسْتَبْرَأَ لِدِيِنِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ كَرَاعٍ يَرْعَى حَوْلَ الْحِمَى، يُوشِكُ أَنْ يُوَاقِعَهُ‏.‏ أَلاَ وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلاَ إِنَّ حِمَى اللَّهِ فِي أَرْضِهِ مَحَارِمُهُ، أَلاَ وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ‏.‏ أَلاَ وَهِيَ الْقَلْبُ ‏"',
    isnad_chain: [
      'Abu Nu\u2018aym',
      "Zakariyya (bin Abi Za'ida)",
      "'Amir (al-Sha'bi)",
      "Al-Nu'man bin Bashir (Companion)",
    ],
    translation:
      "Narrated Al-Nu'man bin Bashir: I heard Allah's Messenger (\u25f7) say, \"The lawful is clear, and the unlawful is clear, and between them are doubtful matters that many people do not know. So whoever avoids the doubtful matters has cleared himself for the sake of his religion and honor, and whoever falls into doubtful matters is like a shepherd grazing around a private pasture, likely to fall into it. Every king has a private pasture, and Allah's private pasture on His earth is what He has made unlawful. And indeed, in the body there is a piece of flesh: if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. It is the heart.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:52 at time of writing.
    notes:
      "This is one of the most widely cited hadith in Islamic ethics and law (it is also the sixth hadith in Imam al-Nawawi's Forty Hadith), central to the concept of 'wara'' (scrupulousness) \u2014 deliberately staying well clear of ambiguous matters rather than testing exactly where a forbidden boundary lies. The closing image of the heart as the part of the body that, if sound, keeps the whole body sound, is treated by scholars as tying outward legal caution (avoiding doubtful transactions or acts) back to an inward spiritual root.",
    lessons: [
      "Islamic law is described as having a broad, clearly lawful zone and a clearly unlawful zone, with a genuine gray area of doubtful matters in between that most people are not equipped to navigate confidently.",
      "Deliberately staying away from the doubtful zone, rather than approaching its edge, is presented as the wiser and safer course, using the image of a shepherd grazing near, but not inside, a protected private pasture.",
      "The hadith's closing statement about the heart is frequently cited as the textual foundation for the broader Islamic principle that outward conduct and inward spiritual soundness are directly linked.",
    ],
  },
  {
    num: 53,
    chapter: 'belief',
    chapter_heading: "Paying the khumus (one-fifth of war spoils) is part of faith",
    chapter_heading_arabic: 'بَابُ أَدَاءُ الْخُمُسِ مِنَ الإِيمَانِ',
    narrator: "Abu Jamra (relating from Ibn 'Abbas)",
    source: 'Sahih al-Bukhari 53',
    also_collected_in: 'Sahih Muslim 17',
    arabic_text:
      'حَدَّثَنَا عَلِيُّ بْنُ الْجَعْدِ، قَالَ أَخْبَرَنَا شُعْبَةُ، عَنْ أَبِي جَمْرَةَ، قَالَ كُنْتُ أَقْعُدُ مَعَ ابْنِ عَبَّاسٍ، يُجْلِسُنِي عَلَى سَرِيرِهِ فَقَالَ أَقِمْ عِنْدِي حَتَّى أَجْعَلَ لَكَ سَهْمًا مِنْ مَالِي، فَأَقَمْتُ مَعَهُ شَهْرَيْنِ، ثُمَّ قَالَ إِنَّ وَفْدَ عَبْدِ الْقَيْسِ لَمَّا أَتَوُا النَّبِيَّ صلى الله عليه وسلم قَالَ ‏"‏ مَنِ الْقَوْمُ أَوْ مَنِ الْوَفْدُ ‏"‏‏.‏ قَالُوا رَبِيعَةُ‏.‏ قَالَ ‏"‏ مَرْحَبًا بِالْقَوْمِ ـ أَوْ بِالْوَفْدِ ـ غَيْرَ خَزَايَا وَلاَ نَدَامَى ‏"‏‏.‏ فَقَالُوا يَا رَسُولَ اللَّهِ، إِنَّا لاَ نَسْتَطِيعُ أَنْ نَأْتِيَكَ إِلاَّ فِي شَهْرِ الْحَرَامِ، وَبَيْنَنَا وَبَيْنَكَ هَذَا الْحَىُّ مِنْ كُفَّارِ مُضَرَ، فَمُرْنَا بِأَمْرٍ فَصْلٍ، نُخْبِرْ بِهِ مَنْ وَرَاءَنَا، وَنَدْخُلْ بِهِ الْجَنَّةَ‏.‏ وَسَأَلُوهُ عَنِ الأَشْرِبَةِ‏.‏ فَأَمَرَهُمْ بِأَرْبَعٍ، وَنَهَاهُمْ عَنْ أَرْبَعٍ، أَمَرَهُمْ بِالإِيمَانِ بِاللَّهِ وَحْدَهُ‏.‏ قَالَ ‏"‏ أَتَدْرُونَ مَا الإِيمَانُ بِاللَّهِ وَحْدَهُ ‏"‏‏.‏ قَالُوا اللَّهُ وَرَسُولُهُ أَعْلَمُ‏.‏ قَالَ ‏"‏ شَهَادَةُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامُ الصَّلاَةِ، وَإِيتَاءُ الزَّكَاةِ، وَصِيَامُ رَمَضَانَ، وَأَنْ تُعْطُوا مِنَ الْمَغْنَمِ الْخُمُسَ ‏"‏‏.‏ وَنَهَاهُمْ عَنْ أَرْبَعٍ عَنِ الْحَنْتَمِ وَالدُّبَّاءِ وَالنَّقِيرِ وَالْمُزَفَّتِ‏.‏ وَرُبَّمَا قَالَ الْمُقَيَّرِ‏.‏ وَقَالَ ‏"‏ احْفَظُوهُنَّ وَأَخْبِرُوا بِهِنَّ مَنْ وَرَاءَكُمْ ‏"',
    isnad_chain: [
      "'Ali bin al-Ja'd",
      "Shu'ba",
      'Abu Jamra',
      "Ibn 'Abbas (Companion)",
    ],
    translation:
      "Narrated Abu Jamra: I used to sit with Ibn 'Abbas, and he would seat me on his own couch. He said, \"Stay with me so that I may give you a share of my wealth,\" so I stayed with him for two months. Then he said: When the delegation of 'Abd al-Qais came to the Prophet (\u25f7), he asked, \"Who are the people\" \u2014 or \"who is the delegation?\" They said, \"Rabi'ah.\" He said, \"Welcome to the people\" \u2014 or \"the delegation \u2014 neither disgraced nor regretful.\" They said, \"O Messenger of Allah, we can only come to you during the sacred month, and between us and you is this tribe of disbelieving Mudar. So command us with something decisive, that we may tell those we left behind, and by which we may enter Paradise.\" And they asked him about drinks. So he commanded them with four things and forbade them four things. He commanded them to believe in Allah alone, and asked, \"Do you know what belief in Allah alone means?\" They said, \"Allah and His Messenger know best.\" He said, \"It is testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying zakat, fasting Ramadan, and giving one-fifth of the war spoils.\" And he forbade them four things: al-hantam, al-dubba', al-naqir, and al-muzaffat \u2014 and he sometimes said al-muqayyar (these being names of vessels in which alcoholic drinks were made). And he said, \"Remember these, and tell them to those you left behind.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:53 at time of writing.
    notes:
      "The delegation of 'Abd al-Qais (from the Rabi'ah confederation in eastern Arabia) is a well-known episode in the seerah, notable for the tribe's difficulty in reaching Madinah safely due to hostile territory in between, which shaped their request for concise, memorable instructions to carry home. The four forbidden vessel types named are all containers historically used to ferment alcoholic drinks; the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam prohibition addressed the vessels associated with the practice as much as the drink itself, at least at this early stage.",
    lessons: [
      "The delegation explicitly requested concise, decisive instruction precisely because their difficult and infrequent access to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam meant they needed something easy to remember and relay accurately to their people.",
      "'Belief in Allah alone' is here defined by the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam with a specific list of five components, including \u2014 notably, given the context of a delegation seeking guidance shortly after fighting \u2014 the payment of khumus (one-fifth of war spoils), a specifically wartime obligation.",
      "Ibn 'Abbas's request that Abu Jamra stay with him in exchange for a share of his wealth, preserved at the start of the narration, shows how some hadith transmission happened through sustained personal relationships between a senior Companion and a student, not only brief encounters.",
    ],
  },
  {
    num: 54,
    chapter: 'belief',
    chapter_heading: "What has been said about deeds being judged by intention and seeking [Allah's reward], and every person having only what he intended",
    chapter_heading_arabic: 'بَابُ مَا جَاءَ أَنَّ الأَعْمَالَ بِالنِّيَّةِ وَالْحِسْبَةِ وَلِكُلِّ امْرِئٍ مَا نَوَى',
    narrator: "'Umar bin Al-Khattab",
    source: 'Sahih al-Bukhari 54',
    also_collected_in: 'Sahih Muslim 1907 (a second, differently-worded narration of the same hadith as Sahih al-Bukhari 1)',
    arabic_text:
      'حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَنْ يَحْيَى بْنِ سَعِيدٍ، عَنْ مُحَمَّدِ بْنِ إِبْرَاهِيمَ، عَنْ عَلْقَمَةَ بْنِ وَقَّاصٍ، عَنْ عُمَرَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ الأَعْمَالُ بِالنِّيَّةِ، وَلِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا، أَوِ امْرَأَةٍ يَتَزَوَّجُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ ‏"',
    isnad_chain: [
      "'Abdullah bin Maslama",
      'Malik (bin Anas)',
      "Yahya bin Sa'id",
      "Muhammad bin Ibrahim (al-Taymi)",
      "'Alqama bin Waqqas",
      "'Umar bin Al-Khattab (Companion)",
    ],
    translation:
      "Narrated 'Umar bin Al-Khattab: Allah's Messenger (\u25f7) said, \"Deeds are by intention, and every person has only what he intended. So whoever's emigration was to Allah and His Messenger, his emigration was to Allah and His Messenger; and whoever's emigration was for worldly gain he sought, or a woman he sought to marry, his emigration was to that which he emigrated for.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:54 at time of writing.
    notes:
      "This is the same hadith as hadith 1, the opening hadith of the entire collection, transmitted here through the identical isnad but with slightly different wording (the phrasing 'to Allah and His Messenger' is made explicit here rather than left implicit as in hadith 1). Bukhari deliberately repeats this hadith at the close of the Book of Belief, under a chapter heading again naming intention explicitly, which commentators read as a structural bookend: the collection opens with intention as the standard for judging deeds, and the Book of Belief closes by restating the same principle before moving to the Book of Knowledge.",
    lessons: [
      "Bukhari's decision to place this same hadith at both the very start of the collection (hadith 1) and again at the close of the Book of Belief signals how central he considered the principle of intention to be, treating it as foundational to both revelation and belief.",
      "The minor wording differences between this version and hadith 1 (both authentically transmitted through the same chain) are preserved rather than harmonized into one 'correct' version, consistent with Bukhari's broader practice throughout the collection.",
      "As with hadith 1, the specific example given (emigrating to Madinah for worldly gain or marriage rather than for the sake of Allah and His Messenger) functions as an illustration of the general principle, not a limitation of it to migration alone.",
    ],
  },
  {
    num: 55,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 54 (deeds judged
    // by intention); no separate bab title of its own.
    narrator: "Abu Mas'ud",
    source: 'Sahih al-Bukhari 55',
    arabic_text:
      'حَدَّثَنَا حَجَّاجُ بْنُ مِنْهَالٍ، قَالَ حَدَّثَنَا شُعْبَةُ، قَالَ أَخْبَرَنِي عَدِيُّ بْنُ ثَابِتٍ، قَالَ سَمِعْتُ عَبْدَ اللَّهِ بْنَ يَزِيدَ، عَنْ أَبِي مَسْعُودٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏"‏ إِذَا أَنْفَقَ الرَّجُلُ عَلَى أَهْلِهِ يَحْتَسِبُهَا فَهُوَ لَهُ صَدَقَةٌ ‏"',
    isnad_chain: [
      'Hajjaj bin Minhal',
      "Shu'ba",
      "'Adi bin Thabit",
      "'Abdullah bin Yazid",
      "Abu Mas'ud (Companion)",
    ],
    translation:
      "Narrated Abu Mas'ud: The Prophet (\u25f7) said, \"When a man spends on his family, seeking Allah's reward in doing so, it is charity (sadaqah) for him.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:55 at time of writing.
    notes:
      "This hadith continues the chapter's theme of intention transforming the standing of a deed: ordinary financial support of one's own family, which might otherwise be considered simply an obligation, is elevated to the status of charity specifically through the intention of seeking reward from Allah in doing it.",
    lessons: [
      "Financial support of one's own family, ordinarily an obligation rather than optional generosity, is described here as counting as charity when done with the intention of seeking Allah's reward.",
      "This hadith broadens the meaning of 'sadaqah' beyond giving to strangers or the poor outside one's household, to include one's own dependents.",
      "As an illustration of the chapter's theme (deeds judged by intention), this hadith shows the same outward act \u2014 spending on one's family \u2014 gaining or lacking reward status depending purely on the intention behind it.",
    ],
  },
  {
    num: 56,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 54-55; no
    // separate bab title of its own.
    narrator: "Sa'd bin Abi Waqqas",
    source: 'Sahih al-Bukhari 56',
    also_collected_in: 'Sahih al-Bukhari 56 also appears, in fuller form with additional context, at Sahih al-Bukhari 1295 and elsewhere',
    arabic_text:
      'حَدَّثَنَا الْحَكَمُ بْنُ نَافِعٍ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ حَدَّثَنِي عَامِرُ بْنُ سَعْدٍ، عَنْ سَعْدِ بْنِ أَبِي وَقَّاصٍ، أَنَّهُ أَخْبَرَهُ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏"‏ إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلاَّ أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فِي امْرَأَتِكَ ‏"',
    isnad_chain: [
      'Al-Hakam bin Nafi\u2018 (Abu al-Yaman)',
      "Shu'ayb",
      'Al-Zuhri',
      "'Amir bin Sa'd",
      "Sa'd bin Abi Waqqas (Companion)",
    ],
    translation:
      "Narrated Sa'd bin Abi Waqqas: Allah's Messenger (\u25f7) said, \"You will never spend anything seeking Allah's pleasure by it without being rewarded for it, even down to what you place in your wife's mouth.\"",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:56 at time of writing.
    notes:
      "This narration is a shorter excerpt of a longer hadith about Sa'd bin Abi Waqqas's illness during the Farewell Pilgrimage, in which the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam reassured him about the disposition of his wealth after death; the fuller version appears elsewhere in Bukhari's collection with that surrounding context. Here, only the general principle about spending being rewarded is retained, fitting the chapter's theme of deeds being judged by intention.",
    lessons: [
      "The reward for spending 'seeking Allah's pleasure' is described as covering even the smallest, most ordinary domestic acts, exemplified by feeding one's own spouse.",
      "As with hadith 55, this hadith illustrates how an everyday, seemingly unremarkable act gains the status of a rewarded deed through the intention behind it.",
      "This is one of several hadith in the collection where a small excerpt is placed under a particular chapter for its relevant principle, separate from the fuller narrative it originally belonged to.",
    ],
  },
  {
    num: 57,
    chapter: 'belief',
    chapter_heading: "The Prophet's (\u25f7) statement: \"Religion is sincerity (nasihah) to Allah, His Messenger, the Muslim leaders, and the common believers\"",
    chapter_heading_arabic: 'بَابُ قَوْلِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «الدِّينُ النَّصِيحَةُ لِلَّهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ»',
    narrator: "Jarir bin 'Abdullah",
    source: 'Sahih al-Bukhari 57',
    also_collected_in: 'Sahih Muslim 56',
    arabic_text:
      'حَدَّثَنَا مُسَدَّدٌ، قَالَ حَدَّثَنَا يَحْيَى، عَنْ إِسْمَاعِيلَ، قَالَ حَدَّثَنِي قَيْسُ بْنُ أَبِي حَازِمٍ، عَنْ جَرِيرِ بْنِ عَبْدِ اللَّهِ، قال بَايَعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى إِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالنُّصْحِ لِكُلِّ مُسْلِمٍ',
    isnad_chain: [
      'Musaddad',
      "Yahya (bin Sa'id al-Qattan)",
      "Isma'il (bin Abi Khalid)",
      'Qais bin Abi Hazim',
      "Jarir bin 'Abdullah (Companion)",
    ],
    translation:
      "Narrated Jarir bin 'Abdullah: I pledged allegiance to Allah's Messenger (\u25f7) on establishing the prayer, paying zakat, and being sincere and true to every Muslim.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:57 at time of writing.
    notes:
      "Jarir bin 'Abdullah was among the later Companions, from the tribe of Bajila, who accepted Islam not long before the Prophet's \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam death; the pledge described here \u2014 combining ritual obligations (prayer, zakat) with a broad ethical one (sincerity/nasihah toward every Muslim) \u2014 reflects Bukhari's chapter theme that 'the religion is nasihah,' a term encompassing sincere goodwill, honest counsel, and loyalty, not merely well-wishing in a passive sense.",
    lessons: [
      "Sincerity toward every Muslim is placed on the same level as the two named ritual obligations (prayer and zakat) within a single pledge of allegiance, showing it was treated as a core, not peripheral, commitment.",
      "Nasihah (sincerity/sincere counsel) as used here is broader than simple honesty; commentators explain it as encompassing goodwill in speech, action, and intention toward fellow Muslims generally.",
      "This hadith, together with the next (hadith 58), forms a pair illustrating how this particular pledge was both taken and later publicly reaffirmed by the same Companion, Jarir bin 'Abdullah.",
    ],
  },
  {
    num: 58,
    chapter: 'belief',
    chapter_heading: null,
    // Continuation under the same chapter as hadith 57, giving a
    // fuller account by the same Companion of the same pledge.
    narrator: "Ziyad bin 'Ilaqa (relating from Jarir bin 'Abdullah)",
    source: 'Sahih al-Bukhari 58',
    arabic_text:
      'حَدَّثَنَا أَبُو النُّعْمَانِ، قَالَ حَدَّثَنَا أَبُو عَوَانَةَ، عَنْ زِيَادِ بْنِ عِلاَقَةَ، قَالَ سَمِعْتُ جَرِيرَ بْنَ عَبْدِ اللَّهِ، يَقُولُ يَوْمَ مَاتَ الْمُغِيرَةُ بْنُ شُعْبَةَ قَامَ فَحَمِدَ اللَّهَ وَأَثْنَى عَلَيْهِ وَقَالَ عَلَيْكُمْ بِاتِّقَاءِ اللَّهِ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَالْوَقَارِ وَالسَّكِينَةِ حَتَّى يَأْتِيَكُمْ أَمِيرٌ، فَإِنَّمَا يَأْتِيكُمُ الآنَ، ثُمَّ قَالَ اسْتَعْفُوا لأَمِيرِكُمْ، فَإِنَّهُ كَانَ يُحِبُّ الْعَفْوَ‏.‏ ثُمَّ قَالَ أَمَّا بَعْدُ، فَإِنِّي أَتَيْتُ النَّبِيَّ صلى الله عليه وسلم قُلْتُ أُبَايِعُكَ عَلَى الإِسْلاَمِ‏.‏ فَشَرَطَ عَلَىَّ وَالنُّصْحِ لِكُلِّ مُسْلِمٍ‏.‏ فَبَايَعْتُهُ عَلَى هَذَا، وَرَبِّ هَذَا الْمَسْجِدِ إِنِّي لَنَاصِحٌ لَكُمْ‏.‏ ثُمَّ اسْتَغْفَرَ وَنَزَلَ',
    isnad_chain: [
      "Abu al-Nu'man",
      "Abu 'Awana",
      "Ziyad bin 'Ilaqa",
      "Jarir bin 'Abdullah (Companion)",
    ],
    translation:
      "Narrated Ziyad bin 'Ilaqa: I heard Jarir bin 'Abdullah say, on the day Al-Mughira bin Shu'ba died: He stood, praised and glorified Allah, and said, \"Fear Allah alone, who has no partner, and maintain dignity and calm until a governor comes to you \u2014 he is coming to you very soon.\" Then he said, \"Ask forgiveness for your [late] governor, for he loved to pardon.\" Then he said, \"To proceed: I came to the Prophet (\u25f7) and said, 'I pledge allegiance to you for Islam.' He set a condition on me: sincerity to every Muslim. So I pledged allegiance to him on that. By the Lord of this mosque, I am sincere and true to you.\" Then he asked forgiveness [of Allah] and stepped down.",
    // Translation composed fresh and checked for meaning against sunnah.com/bukhari:58 at time of writing.
    notes:
      "This hadith gives the historical setting for hadith 57: Jarir bin 'Abdullah publicly recalled his pledge of allegiance to the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam upon the death of Al-Mughira bin Shu'ba, a Companion who had served as a governor. Jarir's opening remarks \u2014 counseling calm obedience and forgiveness for the deceased governor rather than any disorder \u2014 model the very sincerity and loyalty toward fellow Muslims that the pledge he then recounts obligated him to.",
    lessons: [
      "Jarir bin 'Abdullah's public conduct at a moment of transition in local leadership (urging calm, dignity, and forgiveness for the deceased governor) is presented as a real-world demonstration of the sincerity he had pledged decades earlier.",
      "The condition the Prophet \u1e63all\u0101 All\u0101hu \u2018alayhi wa sallam attached to Jarir's pledge \u2014 sincerity to every Muslim \u2014 is shown here still guiding his conduct as an old man addressing his community, illustrating a pledge lived out over a lifetime rather than a one-time formality.",
      "This hadith closes the Book of Belief on the same theme its final chapter opened with (hadith 57): that sincere goodwill toward fellow Muslims is inseparable from the practice of the religion itself.",
    ],
  },
  // Book of Belief (Kitab al-Iman) is now complete except for the two
  // still-unverified gaps noted above (hadith 16 and hadith 33); every
  // other hadith in the range 8-58 has been added.
  //
  // Add further entries here one at a time, each following the same
  // verify-before-write pattern: Arabic text supplied or sourced,
  // translation and metadata checked live against sunnah.com (or
  // another verified database/printed edition), narrator chain
  // included where reasonably available, and lessons kept to plain
  // description rather than speculative commentary.
];