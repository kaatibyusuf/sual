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
  // Add further entries here one at a time, each following the same
  // verify-before-write pattern: Arabic text supplied or sourced,
  // translation and metadata checked live against sunnah.com (or
  // another verified database/printed edition), narrator chain
  // included where reasonably available, and lessons kept to plain
  // description rather than speculative commentary.
];