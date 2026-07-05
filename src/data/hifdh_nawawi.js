// src/data/hifdh_nawawi.js
// Hifdh Simulator dataset — Al-Arba'oon An-Nawawiyyah.
//
// Currently contains the first 10 hadith. Extend to all 42 by following
// the same shape. The `arabic` field carries the core matn; for very long
// hadith (e.g. #2, the hadith of Jibril) a central segment is used so
// drills stay practical.
//
// IMPORTANT: verify every Arabic text against a printed copy of the
// Arba'in before shipping — a hifdh tool must never drill a wrong text.

export const NAWAWI_HADITH = [
  {
    num: 1,
    narrator: 'Umar ibn al-Khattab',
    source: 'Bukhari & Muslim',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ',
    translation: 'Actions are only by intentions, and every person shall have only what he intended...',
  },
  {
    num: 2,
    narrator: 'Umar ibn al-Khattab',
    source: 'Muslim',
    arabic: 'الإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلَاةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا',
    translation: 'Islam is that you testify that there is no god but Allah and that Muhammad is the Messenger of Allah...',
  },
  {
    num: 3,
    narrator: 'Abdullah ibn Umar',
    source: 'Bukhari & Muslim',
    arabic: 'بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلَاةِ وَإِيتَاءِ الزَّكَاةِ وَحَجِّ الْبَيْتِ وَصَوْمِ رَمَضَانَ',
    translation: 'Islam was built upon five: the testimony that there is no god but Allah...',
  },
  {
    num: 4,
    narrator: 'Abdullah ibn Mas\'ud',
    source: 'Bukhari & Muslim',
    arabic: 'إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ',
    translation: 'The creation of each of you is gathered in his mother\'s womb for forty days as a drop...',
  },
  {
    num: 5,
    narrator: 'Aisha',
    source: 'Bukhari & Muslim',
    arabic: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ',
    translation: 'Whoever introduces into this affair of ours that which is not of it, it is rejected.',
  },
  {
    num: 6,
    narrator: 'An-Nu\'man ibn Bashir',
    source: 'Bukhari & Muslim',
    arabic: 'إِنَّ الْحَلَالَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ فَمَنِ اتَّقَى الشُّبُهَاتِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ',
    translation: 'The halal is clear and the haram is clear, and between them are doubtful matters...',
  },
  {
    num: 7,
    narrator: 'Tamim ad-Dari',
    source: 'Muslim',
    arabic: 'الدِّينُ النَّصِيحَةُ قُلْنَا لِمَنْ قَالَ لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ',
    translation: 'The religion is sincere advice. We said: to whom? He said: to Allah, His Book, His Messenger...',
  },
  {
    num: 8,
    narrator: 'Abdullah ibn Umar',
    source: 'Bukhari & Muslim',
    arabic: 'أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الإِسْلَامِ وَحِسَابُهُمْ عَلَى اللَّهِ',
    translation: 'I have been commanded to fight the people until they testify that there is no god but Allah...',
  },
  {
    num: 9,
    narrator: 'Abu Hurairah',
    source: 'Bukhari & Muslim',
    arabic: 'مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ',
    translation: 'Whatever I have forbidden you, avoid it, and whatever I have commanded you, do of it what you can...',
  },
  {
    num: 10,
    narrator: 'Abu Hurairah',
    source: 'Muslim',
    arabic: 'إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ',
    translation: 'Allah is pure and accepts only what is pure, and Allah commanded the believers with what He commanded the Messengers...',
  },
]

export const NAWAWI_TOTAL = 42