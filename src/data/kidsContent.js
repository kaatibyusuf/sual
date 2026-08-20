// src/data/kidsContent.js
//
// Content for the Kids section (under-12 accounts, hard-gated to
// this section only — see App.jsx).

// Simple starter vocabulary — greetings, family, numbers, a few
// everyday nouns. Rendered as flip cards (front: Arabic + English
// prompt, back: transliteration + meaning) rather than the
// read-and-expand pattern the other categories use.
const ARABIYYAH_CARDS = [
  { arabic: 'مَرْحَبًا', transliteration: 'Marhaban', meaning: 'Hello' },
  { arabic: 'شُكْرًا', transliteration: 'Shukran', meaning: 'Thank you' },
  { arabic: 'نَعَمْ', transliteration: "Na'am", meaning: 'Yes' },
  { arabic: 'لَا', transliteration: 'La', meaning: 'No' },
  { arabic: 'أَب', transliteration: 'Ab', meaning: 'Father' },
  { arabic: 'أُمّ', transliteration: 'Umm', meaning: 'Mother' },
  { arabic: 'أَخ', transliteration: 'Akh', meaning: 'Brother' },
  { arabic: 'أُخْت', transliteration: 'Ukht', meaning: 'Sister' },
  { arabic: 'وَاحِد', transliteration: 'Wahid', meaning: 'One' },
  { arabic: 'اِثْنَان', transliteration: 'Ithnan', meaning: 'Two' },
  { arabic: 'ثَلَاثَة', transliteration: 'Thalatha', meaning: 'Three' },
  { arabic: 'كِتَاب', transliteration: 'Kitab', meaning: 'Book' },
  { arabic: 'بَيْت', transliteration: 'Bayt', meaning: 'House' },
  { arabic: 'مَاء', transliteration: "Ma'", meaning: 'Water' },
  { arabic: 'أَرْبَعَة', transliteration: "Arba'a", meaning: 'Four' },
  { arabic: 'خَمْسَة', transliteration: 'Khamsa', meaning: 'Five' },
  { arabic: 'سِتَّة', transliteration: 'Sittah', meaning: 'Six' },
  { arabic: 'سَبْعَة', transliteration: "Sab'ah", meaning: 'Seven' },
  { arabic: 'ثَمَانِيَة', transliteration: 'Thamaniyah', meaning: 'Eight' },
  { arabic: 'تِسْعَة', transliteration: "Tis'ah", meaning: 'Nine' },
  { arabic: 'عَشَرَة', transliteration: 'Asharah', meaning: 'Ten' },
  { arabic: 'جَدّ', transliteration: 'Jadd', meaning: 'Grandfather' },
  { arabic: 'جَدَّة', transliteration: 'Jaddah', meaning: 'Grandmother' },
  { arabic: 'عَمّ', transliteration: 'Amm', meaning: "Uncle (father's brother)" },
  { arabic: 'خَال', transliteration: 'Khal', meaning: "Uncle (mother's brother)" },
  { arabic: 'اِبْن', transliteration: 'Ibn', meaning: 'Son' },
  { arabic: 'بِنْت', transliteration: 'Bint', meaning: 'Daughter' },
  { arabic: 'أَحْمَر', transliteration: 'Ahmar', meaning: 'Red' },
  { arabic: 'أَزْرَق', transliteration: 'Azraq', meaning: 'Blue' },
  { arabic: 'أَصْفَر', transliteration: 'Asfar', meaning: 'Yellow' },
  { arabic: 'أَخْضَر', transliteration: 'Akhdar', meaning: 'Green' },
  { arabic: 'أَبْيَض', transliteration: 'Abyad', meaning: 'White' },
  { arabic: 'أَسْوَد', transliteration: 'Aswad', meaning: 'Black' },
  { arabic: 'شَمْس', transliteration: 'Shams', meaning: 'Sun' },
  { arabic: 'قَمَر', transliteration: 'Qamar', meaning: 'Moon' },
  { arabic: 'نَجْمَة', transliteration: 'Najmah', meaning: 'Star' },
  { arabic: 'شَجَرَة', transliteration: 'Shajarah', meaning: 'Tree' },
  { arabic: 'قَلَم', transliteration: 'Qalam', meaning: 'Pen' },
  { arabic: 'بَاب', transliteration: 'Bab', meaning: 'Door' },
  { arabic: 'طَاوِلَة', transliteration: 'Tawilah', meaning: 'Table' },
  { arabic: 'قِطَّة', transliteration: 'Qittah', meaning: 'Cat' },
  { arabic: 'كَلْب', transliteration: 'Kalb', meaning: 'Dog' },
  { arabic: 'طَائِر', transliteration: "Ta'ir", meaning: 'Bird' },
  { arabic: 'سَمَكَة', transliteration: 'Samakah', meaning: 'Fish' },
  { arabic: 'صَبَاح الْخَيْر', transliteration: 'Sabah al-khayr', meaning: 'Good morning' },
  { arabic: 'مَسَاء الْخَيْر', transliteration: 'Masa\' al-khayr', meaning: 'Good evening' },
  { arabic: 'مَعَ السَّلَامَة', transliteration: "Ma'a as-salamah", meaning: 'Goodbye' },
  { arabic: 'آسِف', transliteration: 'Asif', meaning: 'Sorry' },
  { arabic: 'كَبِير', transliteration: 'Kabir', meaning: 'Big' },
  { arabic: 'صَغِير', transliteration: 'Saghir', meaning: 'Small' },
]

export const KIDS_CATEGORIES = [
  {
    id: 'seerah',
    title: 'Seerah',
    arabicTitle: 'السِّيرَة',
    subtitle: 'The story of the Prophet ﷺ',
    icon: 'seerah',
    items: [
      {
        title: 'Born in Makkah',
        text: "In the Year of the Elephant, a baby boy was born in the city of Makkah. His father, Abdullah, had passed away before he was born, and his mother's name was Aminah. The baby's name was Muhammad ﷺ — one day, he would become the final Messenger of Allah.",
      },
      {
        title: 'Raised With Love',
        text: 'When Muhammad ﷺ was six years old, his mother Aminah passed away. He was cared for first by his grandfather, Abdul-Muttalib, and then by his uncle, Abu Talib, who loved and protected him like his own son.',
      },
      {
        title: 'Al-Amin, the Trustworthy',
        text: 'Long before he became a Prophet, the people of Makkah gave Muhammad ﷺ a special name: Al-Amin, "the Trustworthy One." People would leave their most valuable belongings with him, because they knew he would never lie or cheat.',
      },
      {
        title: 'The Cave of Hira',
        text: 'Muhammad ﷺ liked to visit a quiet cave called Hira, on a mountain outside Makkah, to think and reflect. It was there, when he was forty years old, that the Angel Jibreel came to him with the first words of the Qur\'an from Allah.',
      },
      {
        title: 'The Journey to Madinah',
        text: 'When life in Makkah became very hard for the Muslims, the Prophet ﷺ and his companions moved to a city called Madinah. This journey is called the Hijrah, and it became so important that Muslims later began counting their calendar from that year.',
      },
      {
        title: 'The Year of the Elephant',
        text: 'Before the Prophet ﷺ was born, an army with elephants came to attack the Kaaba. Allah sent birds that dropped stones on them, and they were defeated before they could harm the sacred house.',
      },
      {
        title: 'Marriage to Khadijah',
        text: 'When Muhammad ﷺ was twenty-five, he married a kind and successful businesswoman named Khadijah. She was the first person to believe in him when he became a Prophet, and he loved her dearly.',
      },
      {
        title: 'The First Believers',
        text: 'When the Prophet ﷺ received the message from Allah, the first people to believe in him were his wife Khadijah, his close friend Abu Bakr, his young cousin Ali, and his freed slave Zaid.',
      },
      {
        title: 'Reading the First Verses',
        text: 'The first words revealed to the Prophet ﷺ began with "Iqra" — "Read!" — reminding Muslims that seeking knowledge is important from the very start of Islam.',
      },
      {
        title: 'Preaching in Secret',
        text: 'For the first three years, the Prophet ﷺ shared the message of Islam quietly with people he trusted, before Allah commanded him to invite everyone openly.',
      },
      {
        title: 'Hard Times in Makkah',
        text: 'Many people in Makkah did not want to hear the new message and were unkind to the Prophet ﷺ and the early Muslims. The Muslims stayed patient and kept their faith strong.',
      },
      {
        title: 'The Migration to Abyssinia',
        text: 'To protect a group of early Muslims from harm, the Prophet ﷺ sent them across the sea to a kind Christian king in Abyssinia, who welcomed and protected them.',
      },
      {
        title: 'The Year of Sorrow',
        text: 'In one year, the Prophet ﷺ lost both his beloved wife Khadijah and his uncle Abu Talib, who had protected him for many years. Muslims call this the Year of Sorrow.',
      },
      {
        title: 'The Night Journey',
        text: 'One night, the Prophet ﷺ was taken on a miraculous journey from Makkah to Jerusalem, and then up through the heavens, where the five daily prayers were made obligatory.',
      },
      {
        title: 'Finding Helpers in Madinah',
        text: 'Before the Hijrah, some visitors from Madinah met the Prophet ﷺ, believed in his message, and invited the Muslims to come live safely in their city.',
      },
      {
        title: 'The Companion Who Stayed Behind',
        text: "When the Prophet ﷺ left for Madinah, his close friend Abu Bakr traveled with him, while his cousin Ali bravely stayed behind to return people's trusted belongings.",
      },
      {
        title: 'Hiding in the Cave',
        text: 'During the Hijrah, the Prophet ﷺ and Abu Bakr hid in a cave called Thawr. A spider wove a web across the entrance, and the people chasing them did not realize they were inside.',
      },
      {
        title: 'Arriving in Madinah',
        text: 'When the Prophet ﷺ finally reached Madinah, the people came out joyfully to greet him, singing songs of welcome that Muslims still remember today.',
      },
      {
        title: 'Building the First Masjid',
        text: 'One of the first things the Prophet ﷺ did in Madinah was build a simple masjid, a place where the Muslims could gather to pray and learn together.',
      },
      {
        title: 'Brothers in Faith',
        text: 'The Prophet ﷺ paired up the Muslims who had moved from Makkah with the Muslims already living in Madinah, so that they would help and support each other like brothers.',
      },
      {
        title: 'Kind to Everyone',
        text: 'The Prophet ﷺ was known for his gentle character. He was kind to children, respectful to elders, and patient even with people who treated him unkindly.',
      },
      {
        title: 'Kindness to Animals',
        text: 'The Prophet ﷺ taught his companions to be gentle with animals — to feed them, not overwork them, and never to hurt them for no reason.',
      },
      {
        title: "A Man of His Word",
        text: 'Even before he became a Prophet, Muhammad ﷺ never broke a promise. People trusted him completely because he always did what he said he would do.',
      },
      {
        title: 'The Farewell Sermon',
        text: 'Near the end of his life, the Prophet ﷺ gave a famous speech reminding Muslims to be kind to one another, treat people fairly, and hold firmly to the Qur\'an.',
      },
      {
        title: 'Completing the Message',
        text: 'By the end of his life, the message of Islam had spread across Arabia, and the Prophet ﷺ had shown the world, through his own example, how to live a good and honest life.',
      },
      {
        title: 'His Love for Prayer',
        text: 'The Prophet ﷺ loved to pray, especially at night when it was quiet. He would stand in prayer for a long time, even though Allah had already forgiven him.',
      },
      {
        title: 'Teaching Through Example',
        text: 'The Prophet ﷺ did not just tell people how to behave — he showed them, by living an honest, humble, and caring life every single day.',
      },
      {
        title: 'A Simple Life',
        text: 'Even though he was the leader of a growing community, the Prophet ﷺ lived very simply. He mended his own clothes, helped with housework, and never asked for luxury.',
      },
      {
        title: 'His Final Days',
        text: 'In the last days of his life, the Prophet ﷺ reminded the Muslims to take care of prayer and to be kind to those who worked for them.',
      },
      {
        title: 'Remembering the Prophet ﷺ',
        text: 'Muslims all over the world still learn about the life of the Prophet ﷺ today, trying to follow his kind and honest example in their own lives.',
      },
    ],
  },
  {
    id: 'adhkar',
    title: 'Adhkar',
    arabicTitle: 'الأَذْكَار',
    subtitle: 'Short duas for every day',
    icon: 'adhkar',
    items: [
      {
        title: 'Before Eating',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        text: 'It means "In the name of Allah." Say this before you start eating or drinking.',
      },
      {
        title: 'After Eating',
        arabic: 'الْحَمْدُ لِلَّهِ',
        transliteration: 'Alhamdulillah',
        text: 'It means "All praise is for Allah." Say this when you finish eating.',
      },
      {
        title: 'Before Sleeping',
        arabic: 'اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا',
        transliteration: 'Allahumma bismika amutu wa ahya',
        text: 'It means "O Allah, in Your name I die and I live." Say this as you lie down to sleep.',
      },
      {
        title: 'Waking Up',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        transliteration: 'Alhamdulillahil-lathee ahyana ba\'da ma amatana wa ilayhin-nushoor',
        text: 'It means "Praise be to Allah who gave us life after having taken it, and to Him is the return." Say this when you wake up.',
      },
      {
        title: 'Entering the House',
        arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا',
        transliteration: 'Bismillahi walajna wa bismillahi kharajna',
        text: 'It means "In the name of Allah we enter, and in the name of Allah we leave." Say this as you walk into your home.',
      },
      {
        title: 'When You Sneeze',
        arabic: 'الْحَمْدُ لِلَّهِ',
        transliteration: 'Alhamdulillah',
        text: 'When you sneeze, say this. The people around you should reply "Yarhamuk Allah" — "May Allah have mercy on you."',
      },
      {
        title: 'Leaving the House',
        arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
        transliteration: 'Bismillahi tawakkaltu \'alallah',
        text: 'It means "In the name of Allah, I place my trust in Allah." Say this as you leave your home.',
      },
      {
        title: 'Entering the Masjid',
        arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        transliteration: 'Allahumma iftah li abwaba rahmatik',
        text: 'It means "O Allah, open the doors of Your mercy for me." Say this as you step into the masjid.',
      },
      {
        title: 'Leaving the Masjid',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
        transliteration: 'Allahumma inni as\'aluka min fadlik',
        text: 'It means "O Allah, I ask You from Your bounty." Say this as you leave the masjid.',
      },
      {
        title: 'Before Wudu',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        text: 'It means "In the name of Allah." Say this right before you start making wudu.',
      },
      {
        title: 'After Wudu',
        arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ',
        transliteration: 'Ash-hadu an la ilaha illallah',
        text: 'It means "I bear witness that there is no god but Allah." Say this once you finish your wudu.',
      },
      {
        title: 'Entering the Bathroom',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ',
        transliteration: 'Allahumma inni a\'oothu bik',
        text: 'It means "O Allah, I seek refuge in You." Say this quietly before entering the bathroom.',
      },
      {
        title: 'Leaving the Bathroom',
        arabic: 'غُفْرَانَكَ',
        transliteration: 'Ghufranak',
        text: 'It means "I ask You for forgiveness." Say this when you come out.',
      },
      {
        title: 'When It Rains',
        arabic: 'اللَّهُمَّ صَيِّبًا نَافِعًا',
        transliteration: 'Allahumma sayyiban nafi\'an',
        text: 'It means "O Allah, let it be a beneficial rain." Say this when it starts to rain.',
      },
      {
        title: 'Seeing the New Moon',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        text: 'It means "Allah is the Greatest." Muslims say this when they see the new moon at the start of a month.',
      },
      {
        title: 'Before Traveling',
        arabic: 'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar (said three times)',
        text: 'It means "Allah is the Greatest." Say this when you begin a journey.',
      },
      {
        title: 'Dua for Parents',
        arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
        transliteration: 'Rabbi irhamhuma kama rabbayani saghira',
        text: 'It means "My Lord, have mercy on them as they raised me when I was small." A dua to make for your parents.',
      },
      {
        title: 'Dua for Knowledge',
        arabic: 'رَبِّ زِدْنِي عِلْمًا',
        transliteration: 'Rabbi zidni \'ilma',
        text: 'It means "My Lord, increase me in knowledge." A short dua to say before you study.',
      },
      {
        title: 'Dua for Ease',
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
        transliteration: 'Rabbi ishrah li sadri wa yassir li amri',
        text: 'It means "My Lord, open up my heart and make my task easy for me."',
      },
      {
        title: 'Dua When Worried',
        arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
        transliteration: 'Hasbunallahu wa ni\'mal wakeel',
        text: 'It means "Allah is enough for us, and He is the best One to trust." Say this when you feel worried.',
      },
      {
        title: 'Dua for Forgiveness',
        arabic: 'رَبِّ اغْفِرْ لِي',
        transliteration: 'Rabbi ighfir li',
        text: 'It means "My Lord, forgive me." A short dua you can repeat any time.',
      },
      {
        title: 'Wearing New Clothes',
        arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ',
        transliteration: 'Allahumma lakal-hamdu anta kasawtaneeh',
        text: 'It means "O Allah, praise is for You, You have clothed me with this." Say this when you wear something new.',
      },
      {
        title: 'Looking in the Mirror',
        arabic: 'اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
        transliteration: 'Allahumma kama hassanta khalqi fahassin khuluqi',
        text: 'It means "O Allah, just as You made my appearance good, make my character good too."',
      },
      {
        title: 'Feeling Sick',
        arabic: 'أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ',
        transliteration: 'Adh-hibil ba\'sa Rabban-nas',
        text: 'It means "Take away the sickness, Lord of mankind." Part of a dua to say when you don\'t feel well.',
      },
      {
        title: 'When You Feel Angry',
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        transliteration: 'A\'oothu billahi minash-shaytanir-rajeem',
        text: 'It means "I seek refuge in Allah from the accursed Shaytan." Say this when you start to feel angry.',
      },
      {
        title: 'Before Studying',
        arabic: 'رَبِّ يَسِّرْ وَلَا تُعَسِّرْ',
        transliteration: 'Rabbi yassir wa la tu\'assir',
        text: 'It means "My Lord, make things easy and do not make them hard." A good dua before schoolwork.',
      },
      {
        title: 'Morning Remembrance',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ',
        transliteration: 'Asbahna wa asbahal mulku lillah',
        text: 'It means "We have entered the morning, and with it all dominion belongs to Allah." Said in the morning.',
      },
      {
        title: 'Entering the Marketplace',
        arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
        transliteration: 'La ilaha illallahu wahdahu la sharika lah',
        text: 'It means "There is no god but Allah alone, with no partner." Said when entering a busy market.',
      },
      {
        title: 'Dua for Guidance',
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        transliteration: 'Ihdinas-siratal-mustaqim',
        text: 'It means "Guide us to the straight path." This line is from Surah Al-Fatihah, which we say in every prayer.',
      },
      {
        title: 'Ending a Gathering',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ',
        transliteration: 'Subhanaka Allahumma wa bihamdik',
        text: 'It means "Glory is to You, O Allah, and all praise." A short dua to say when a gathering or lesson ends.',
      },
    ],
  },
  {
    id: 'fiqh',
    title: 'Fiqh',
    arabicTitle: 'الفِقْه',
    subtitle: 'How we worship',
    icon: 'fiqh',
    items: [
      {
        title: 'The Steps of Wudu',
        text: '1. Say Bismillah.\n2. Wash your hands three times.\n3. Rinse your mouth and nose.\n4. Wash your face three times.\n5. Wash your arms to the elbows — right, then left.\n6. Wipe your head with wet hands.\n7. Wash your feet to the ankles — right, then left.\nNow you are ready to pray!',
      },
      {
        title: 'The Five Daily Prayers',
        text: 'Muslims pray five times every day: Fajr (before sunrise), Dhuhr (midday), Asr (afternoon), Maghrib (just after sunset), and Isha (night). Each prayer is a chance to talk to Allah.',
      },
      {
        title: 'Good Manners',
        text: 'The Prophet ﷺ taught us to say "Assalamu Alaikum" when we meet someone, to eat and drink with our right hand, and to be kind and gentle with everyone — especially those younger or weaker than us.',
      },
      {
        title: 'Why We Make Wudu',
        text: 'Before we pray, we make sure our body, clothes, and the place we pray are clean. Wudu helps us come to Allah in a state of cleanliness, ready to stand before Him.',
      },
      {
        title: 'Facing the Qiblah',
        text: 'When we pray, we face a direction called the Qiblah, towards the Kaaba in Makkah. No matter where we are in the world, we always turn to face it.',
      },
      {
        title: 'The Adhan',
        text: "The adhan is the call to prayer, said aloud to let Muslims know it's time to pray. It reminds us of the greatness of Allah and invites us to come pray.",
      },
      {
        title: 'Praying in Congregation',
        text: 'Praying together with others, like at the masjid, is called praying in jama\'ah. The Prophet ﷺ taught that praying together brings extra reward.',
      },
      {
        title: 'What We Say in Sujood',
        text: 'Sujood is when we place our forehead on the ground in prayer, showing humility before Allah. It is often said to be the closest a person can be to Allah.',
      },
      {
        title: 'Friday Prayer',
        text: "Friday is a special day for Muslims. Many go to the masjid for Jumu'ah, a prayer with a short talk (khutbah) beforehand.",
      },
      {
        title: 'Fasting in Ramadan',
        text: 'During the month of Ramadan, Muslims who are able fast from sunrise to sunset — no food or drink — to grow closer to Allah and remember those who are hungry.',
      },
      {
        title: "Who Doesn't Have to Fast",
        text: 'Young children, the sick, travelers, and some others are not required to fast, showing how fiqh is kind and considers what people are able to do.',
      },
      {
        title: 'Zakat: Giving to Others',
        text: 'Zakat means giving a portion of what you have to those in need. It teaches Muslims to be generous and to remember others less fortunate.',
      },
      {
        title: 'Hajj: The Pilgrimage',
        text: 'Hajj is a special journey to Makkah that Muslims who are able try to make once in their life, following the footsteps of the Prophet Ibrahim and his family.',
      },
      {
        title: 'Halal and Haram Food',
        text: 'Muslims eat food that is halal, meaning allowed, and avoid food that is haram, like pork or alcohol. This is one way we show obedience to Allah.',
      },
      {
        title: 'Saying Bismillah Before Meals',
        text: 'Saying Bismillah before eating reminds us that our food is a blessing from Allah, and helps us eat with gratitude rather than rushing.',
      },
      {
        title: 'Manners of the Masjid',
        text: 'When we go to the masjid, we keep our voices quiet, stay clean, and treat the space with respect since it is a house of worship.',
      },
      {
        title: 'Being a Good Guest',
        text: "Islam teaches us to be polite when we visit someone's home — to not overstay, to thank our hosts, and to be respectful of their space.",
      },
      {
        title: 'Being a Good Host',
        text: 'Just as we should be polite guests, we should also welcome guests warmly, offer them food and drink, and make them feel comfortable.',
      },
      {
        title: 'Kindness to Parents',
        text: 'One of the most important things in Islam is to be kind, respectful, and helpful to our parents, especially as they grow older.',
      },
      {
        title: 'Kindness to Neighbors',
        text: 'The Prophet ﷺ taught that being a good neighbor is a sign of true faith — checking on them, sharing food, and never causing them harm.',
      },
      {
        title: 'Telling the Truth',
        text: 'Honesty is one of the most important values in Islam. Muslims are taught to always tell the truth, even when it is hard.',
      },
      {
        title: 'Keeping Clean',
        text: 'Islam places great importance on cleanliness — keeping our bodies, clothes, and homes clean is part of being a good Muslim.',
      },
      {
        title: 'Brushing Your Teeth (Siwak)',
        text: 'The Prophet ﷺ used a small stick called a siwak to clean his teeth and encouraged Muslims to keep their mouths clean, especially before prayer.',
      },
      {
        title: 'Manners of Sleeping',
        text: 'Before bed, Muslims are taught to make wudu if they can, say their sleeping duas, and sleep on their right side, following the example of the Prophet ﷺ.',
      },
      {
        title: 'Dressing Modestly',
        text: 'Islam teaches Muslims, both boys and girls, to dress modestly, respecting their own dignity and the way Allah has asked us to present ourselves.',
      },
      {
        title: 'Greeting with Salaam',
        text: 'Saying "Assalamu Alaikum" when you meet a Muslim is a form of worship — it means "peace be upon you," and Islam encourages us to greet others often.',
      },
      {
        title: 'Respecting Elders',
        text: 'Islam teaches young people to respect and honor those older than them, listening to their advice and helping them when needed.',
      },
      {
        title: 'Charity Beyond Zakat',
        text: 'Besides Zakat, Muslims are encouraged to give extra charity, called sadaqah, whenever they can — even a smile is considered a form of charity.',
      },
      {
        title: 'Patience (Sabr)',
        text: 'Being patient during hard times is an important part of practicing Islam. Allah loves those who remain patient and trust in Him.',
      },
      {
        title: 'Gratitude to Allah',
        text: 'Being thankful for everything Allah has given us — our family, our health, our home — is an important part of being a good Muslim.',
      },
    ],
  },
  {
    id: 'hadeeth',
    title: 'Hadeeth',
    arabicTitle: 'الحَدِيث',
    subtitle: 'Sayings of the Prophet ﷺ',
    icon: 'hadeeth',
    items: [
      {
        title: 'Smiling is Charity',
        text: 'The Prophet ﷺ taught that even smiling at someone is a small act of charity (sadaqah).',
        source: 'Reported in Tirmidhi',
      },
      {
        title: 'Love for Others What You Love for Yourself',
        text: 'None of you truly believes until he loves for his brother what he loves for himself.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Cleanliness is Half of Faith',
        text: 'The Prophet ﷺ taught that being clean is a very important part of being a good Muslim.',
        source: 'Muslim',
      },
      {
        title: 'Kindness to Family',
        text: 'The best among you are those who are best to their families, and I am the best of you to my family.',
        source: 'Tirmidhi',
      },
      {
        title: 'Mercy to Others',
        text: 'Be merciful to those on earth, and the One in the heavens will be merciful to you.',
        source: 'Abu Dawud & Tirmidhi',
      },
      {
        title: 'Speak Good or Stay Silent',
        text: 'Whoever believes in Allah and the Last Day should speak good or remain silent.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Honor Your Guest',
        text: 'Whoever believes in Allah and the Last Day should be generous to their guest.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'The Strong Believer',
        text: 'The strong believer is better and more beloved to Allah than the weak believer, though there is good in both.',
        source: 'Muslim',
      },
      {
        title: 'Removing Harm from the Path',
        text: 'Removing something harmful from the road, like a rock or a thorn, is a form of charity.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Kindness to Animals',
        text: 'A man was forgiven by Allah for giving water to a thirsty dog. The Prophet ﷺ taught there is reward in kindness to every living being.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Do Not Get Angry',
        text: 'A man asked the Prophet ﷺ for advice, and he said, "Do not become angry," repeating it several times.',
        source: 'Bukhari',
      },
      {
        title: 'The Best of People',
        text: 'The best of people are those who are most beneficial to others.',
        source: 'Reported in various collections',
      },
      {
        title: 'Modesty is Part of Faith',
        text: 'Modesty (haya) is a branch of faith.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Actions Are Judged by Intentions',
        text: 'Actions are judged according to their intentions, and every person will get what they intended.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Seeking Knowledge',
        text: 'Seeking knowledge is an obligation upon every Muslim.',
        source: 'Reported in Ibn Majah',
      },
      {
        title: 'A Good Word is Charity',
        text: 'A good word is a form of charity.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Two Things Worth Envy',
        text: 'There is no envy except in two cases: a person who uses their wealth in good ways, and a person who uses their wisdom to teach and judge fairly.',
        source: 'Bukhari & Muslim',
      },
      {
        title: "Paradise Beneath Mother's Feet",
        text: 'Paradise lies at the feet of mothers — a saying that teaches how much honor and respect is owed to a mother.',
        source: 'Reported in Nasa\'i and others',
      },
      {
        title: 'The Best of You',
        text: 'The best of you are those who learn the Qur\'an and teach it to others.',
        source: 'Bukhari',
      },
      {
        title: 'Faith and Good Character',
        text: 'The most complete believers in faith are those with the best character.',
        source: 'Tirmidhi',
      },
      {
        title: 'Do Not Waste Water',
        text: 'Even when making wudu by a flowing river, do not waste water.',
        source: 'Reported in Ibn Majah',
      },
      {
        title: 'Visiting the Sick',
        text: 'Visiting a sick person is a right that one Muslim has over another.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Returning a Greeting',
        text: 'When someone greets you with salaam, it is important to return the greeting with something equal or better.',
        source: 'Reflects Qur\'an 4:86 and hadith practice',
      },
      {
        title: 'The Believers Are Like One Body',
        text: 'The believers, in their mutual love and kindness, are like one body — when one part hurts, the whole body feels it.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Ease, Do Not Make Things Difficult',
        text: 'Make things easy for people and do not make things difficult; give good news and do not push people away.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Whoever Guides to Good',
        text: 'Whoever guides someone to a good deed gets a reward like the one who does the deed.',
        source: 'Muslim',
      },
      {
        title: 'Feed the Hungry',
        text: 'Feeding others and spreading peace are among the best deeds in Islam.',
        source: 'Reported in Ibn Majah',
      },
      {
        title: 'Every Good Deed is Charity',
        text: 'Every act of goodness is a form of charity.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Patience with Trials',
        text: 'No fatigue, illness, worry, or sadness befalls a believer without Allah removing some of their sins because of it.',
        source: 'Bukhari & Muslim',
      },
      {
        title: 'Honesty Leads to Good',
        text: 'Truthfulness leads to righteousness, and righteousness leads to Paradise.',
        source: 'Bukhari & Muslim',
      },
    ],
  },
  {
    id: 'tawheed',
    title: 'Tawheed',
    arabicTitle: 'التَّوْحِيد',
    subtitle: 'Believing in One Allah',
    icon: 'tawheed',
    items: [
      {
        title: 'Allah is One',
        text: 'The most important thing we believe as Muslims is that there is only One God, and His name is Allah. He has no partner and no children, and nothing is like Him.',
      },
      {
        title: 'Allah Sees and Hears Everything',
        text: 'Even when we think no one is watching, Allah always sees and hears us. This helps us try to be good even when we are alone.',
      },
      {
        title: "Allah's Beautiful Names",
        text: "Allah has many beautiful names that describe Him, like Ar-Rahman (the Most Merciful), Al-Khaliq (the Creator), and As-Sami' (the All-Hearing).",
      },
      {
        title: 'Why We Worship Allah Alone',
        text: 'We worship only Allah because He is the One who created us, gives us everything we have, and deserves all our love and thanks.',
      },
      {
        title: 'Allah Created Everything',
        text: 'Allah created the sky, the earth, the mountains, the oceans, and every person and animal. Nothing exists except by His will.',
      },
      {
        title: 'Allah Has No Beginning or End',
        text: 'Unlike everything else, Allah has always existed and will always exist. He was never created and will never end.',
      },
      {
        title: 'Allah Needs Nothing',
        text: 'Allah does not need food, sleep, or rest like we do. He is perfect and complete, and everything else needs Him.',
      },
      {
        title: 'Allah is Ar-Rahman',
        text: "Ar-Rahman means the Most Merciful. Allah's mercy is so great that it reaches every creature, believer or not.",
      },
      {
        title: 'Allah is Ar-Raheem',
        text: "Ar-Raheem means the Especially Merciful, describing Allah's special mercy for those who believe in Him and do good.",
      },
      {
        title: 'Allah is Al-Khaliq',
        text: 'Al-Khaliq means the Creator. Everything that exists was made by Allah, from the smallest ant to the biggest star.',
      },
      {
        title: 'Allah is As-Sami\'',
        text: "As-Sami' means the All-Hearing. Allah hears every word we say, even our quietest whispers and thoughts.",
      },
      {
        title: 'Allah is Al-Baseer',
        text: 'Al-Baseer means the All-Seeing. Nothing is hidden from Allah, no matter how small or far away.',
      },
      {
        title: "Allah is Al-'Aleem",
        text: "Al-'Aleem means the All-Knowing. Allah knows everything — the past, the present, and the future.",
      },
      {
        title: 'Allah is Al-Qadir',
        text: 'Al-Qadir means the All-Powerful. Nothing is too difficult for Allah; He is able to do anything He wills.',
      },
      {
        title: 'Allah is Ar-Razzaq',
        text: 'Ar-Razzaq means the Provider. Allah gives us our food, our families, and everything we have.',
      },
      {
        title: 'Allah is Al-Wadud',
        text: 'Al-Wadud means the Most Loving. Allah loves those who are good and kind, and He wants the best for His creation.',
      },
      {
        title: 'Angels Obey Allah',
        text: 'Allah created angels who always obey Him and never disobey. They carry out His commands throughout the universe.',
      },
      {
        title: "The Qur'an is Allah's Word",
        text: "Muslims believe the Qur'an is the actual word of Allah, sent down to guide people to what is good and right.",
      },
      {
        title: 'Allah Sent Many Prophets',
        text: 'Allah sent many prophets throughout history, like Ibrahim, Musa, and Isa, to teach people about worshipping Allah alone.',
      },
      {
        title: 'Muhammad ﷺ is the Final Prophet',
        text: 'Muhammad ﷺ was the last prophet sent by Allah, bringing the final message of Islam to all of humanity.',
      },
      {
        title: 'Believing in the Unseen',
        text: 'Part of faith is believing in things we cannot see, like angels and Paradise, trusting what Allah has told us.',
      },
      {
        title: 'Turning to Allah in Dua',
        text: 'When we need help, we turn to Allah and ask Him directly through dua, because He is always listening and near.',
      },
      {
        title: 'Allah is Always Near',
        text: 'Allah tells us in the Qur\'an that He is closer to us than our own jugular vein, meaning He is always near, even when we feel alone.',
      },
      {
        title: 'Trusting Allah (Tawakkul)',
        text: "Tawakkul means putting our trust in Allah after we've done our best effort, believing He will take care of the rest.",
      },
      {
        title: "Everything Happens by Allah's Will",
        text: "Nothing happens in the universe without Allah's permission and knowledge, which helps us feel calm even during hard times.",
      },
      {
        title: 'Thanking Allah for Blessings',
        text: 'Because everything good comes from Allah, we are taught to thank Him often for our health, family, and everyday blessings.',
      },
      {
        title: 'Fearing and Loving Allah Together',
        text: 'A true believer both loves Allah deeply and has a healthy fear of disobeying Him — the two go hand in hand.',
      },
      {
        title: 'Allah Forgives Those Who Ask',
        text: 'No matter what mistakes we make, Allah loves to forgive those who sincerely turn back to Him and ask for forgiveness.',
      },
      {
        title: 'Worship in Everyday Actions',
        text: "Even simple good actions, like helping a friend or smiling, can be a form of worship when we do them for Allah's sake.",
      },
      {
        title: 'Remembering Allah Often',
        text: 'Keeping Allah in our hearts throughout the day, through small reminders and dhikr, helps keep our faith strong.',
      },
    ],
  },
  {
    id: 'prophets',
    title: 'Prophets',
    arabicTitle: 'الأَنْبِيَاء',
    subtitle: 'Stories of the messengers of Allah',
    icon: 'prophets',
    items: [
      {
        title: 'Adam — The First Human',
        text: 'Adam was the first human being that Allah created. Allah taught him the names of things and made the angels bow to him in respect. Adam and his wife Hawwa lived in Paradise before coming to live on Earth.',
      },
      {
        title: 'Nuh — The Great Flood',
        text: 'Prophet Nuh called his people to worship Allah alone for many, many years, but only a few believed him. Allah commanded him to build a huge ark. When a great flood came, Nuh and the believers were saved, while those who refused to believe were not.',
      },
      {
        title: 'Hud — Warning His People',
        text: "Prophet Hud was sent to a strong and powerful people called 'Aad. He warned them to stop worshipping idols and turn to Allah, but most of them refused and were proud of their strength.",
      },
      {
        title: 'Salih — The She-Camel',
        text: "Prophet Salih was sent to the people of Thamud. Allah gave them a special she-camel as a sign, but some of the people harmed her, disobeying Allah's command to leave her be.",
      },
      {
        title: 'Ibrahim — The Friend of Allah',
        text: 'Prophet Ibrahim grew up questioning why his people worshipped idols made of stone. He bravely taught them that only Allah deserves worship. Allah loved him so much that he is called "the Friend of Allah."',
      },
      {
        title: 'Ibrahim and the Fire',
        text: 'When Ibrahim broke the idols his people worshipped, they threw him into a huge fire to punish him. But Allah commanded the fire to become cool and safe, and Ibrahim was not harmed at all.',
      },
      {
        title: 'Ismail — The Patient Son',
        text: 'Ismail was the son of Ibrahim. When his father told him about a dream where he had to sacrifice him, young Ismail patiently agreed, trusting Allah. At the last moment, Allah replaced him with a ram instead.',
      },
      {
        title: 'Building the Kaaba',
        text: 'Ibrahim and his son Ismail built the Kaaba in Makkah together, the first house built for the worship of Allah alone. Muslims all over the world still face this direction when they pray.',
      },
      {
        title: "Ishaq and Ya'qub",
        text: "Ishaq was another son of Ibrahim, and his own son was Ya'qub, who was also a prophet. Ya'qub had twelve sons, one of whom was Yusuf.",
      },
      {
        title: 'Yusuf — Sold by His Brothers',
        text: "Yusuf's brothers were jealous of him and threw him into a well, then he was sold far from home. Even after this hardship, Yusuf remained patient and trusted Allah throughout his life.",
      },
      {
        title: 'Yusuf in Egypt',
        text: 'Yusuf eventually became a trusted leader in Egypt. Years later, his brothers came to Egypt during a famine, not recognizing him, and Yusuf forgave them with kindness instead of taking revenge.',
      },
      {
        title: 'Ayyub — Patience Through Hardship',
        text: 'Prophet Ayyub was tested with a long illness and the loss of much of what he had, yet he remained patient and never stopped thanking Allah. Because of his patience, Allah healed him and blessed him again.',
      },
      {
        title: 'Musa — Baby in the River',
        text: "When Musa was a baby, his mother placed him in a basket on the river to protect him from a cruel king. He was found and raised in that king's own palace, safe from harm.",
      },
      {
        title: 'Musa and the Staff',
        text: "Allah gave Musa a miracle: his staff could turn into a snake. He used it to show Pharaoh and his people a sign of Allah's power.",
      },
      {
        title: 'Musa Parts the Sea',
        text: "When Pharaoh's army chased Musa and his people, Allah commanded the sea to split apart, letting them cross safely, before the sea closed again behind them.",
      },
      {
        title: "Harun — Musa's Helper",
        text: 'Harun was Musa\'s brother and was also a prophet. He helped Musa speak clearly to Pharaoh and supported him throughout his mission.',
      },
      {
        title: 'Dawud — A Beautiful Voice',
        text: 'Prophet Dawud had such a beautiful voice that when he recited praises to Allah, even birds and mountains would join him. Allah also gave him great wisdom to judge fairly between people.',
      },
      {
        title: 'Sulaiman — Understanding Animals',
        text: 'Prophet Sulaiman, the son of Dawud, was given the special gift of understanding the language of animals and birds, along with great wisdom and a powerful kingdom.',
      },
      {
        title: 'Yunus — Inside the Whale',
        text: 'Prophet Yunus left his people before Allah commanded him to, and he ended up swallowed by a huge whale. Inside it, he called out to Allah in repentance, and Allah saved him.',
      },
      {
        title: 'Zakariya and Yahya',
        text: 'Prophet Zakariya prayed for a child even in his old age. Allah blessed him with a son, Yahya, who grew up to be a righteous prophet as well.',
      },
      {
        title: 'Isa — Born as a Miracle',
        text: 'Prophet Isa was born to Maryam as a miracle from Allah, without a father. He spoke to defend his mother as a baby and later taught people to worship Allah alone.',
      },
    ],
  },
  {
    // Verses below are written from memory at high confidence, but
    // this is direct Qur'anic text, not paraphrase — a categorically
    // higher accuracy bar than anything else in this file. Strongly
    // recommend checking every ayah here against a printed mushaf
    // before treating this category as final. Kept to the shortest,
    // most universally memorized surahs specifically because
    // confidence is highest on these.
    id: 'surahs',
    title: 'Short Surahs',
    arabicTitle: 'قِصَار السُّوَر',
    subtitle: 'A few short surahs to learn',
    icon: 'surahs',
    items: [
      {
        title: 'Al-Fatiha — The Opening',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾',
        transliteration: 'Al-Fatihah',
        text: 'We say this surah in every single prayer. It praises Allah and asks Him to guide us on the straight path.',
      },
      {
        title: 'Al-Ikhlas — Sincerity',
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾',
        transliteration: 'Al-Ikhlas',
        text: 'This short surah tells us that Allah is One, He has no children and was not born, and nothing is equal to Him.',
      },
      {
        title: 'Al-Falaq — The Daybreak',
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾',
        transliteration: 'Al-Falaq',
        text: 'This surah teaches us to ask Allah to protect us from harm — in the darkness, and from anyone who wishes us ill.',
      },
      {
        title: 'An-Nas — Mankind',
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾',
        transliteration: 'An-Nas',
        text: 'This surah teaches us to ask Allah, the King and God of mankind, to protect us from whispers that try to lead us astray.',
      },
      {
        title: 'Al-Kawthar — Abundance',
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾',
        transliteration: 'Al-Kawthar',
        text: 'The shortest surah in the Qur\'an. It tells the Prophet ﷺ that Allah gave him abundant good, so he should pray and be thankful.',
      },
      {
        title: 'An-Nasr — The Help',
        arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ﴿١﴾ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ﴿٢﴾ فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا ﴿٣﴾',
        transliteration: 'An-Nasr',
        text: "This surah speaks of Allah's help and victory, and reminds us to praise Allah and ask for His forgiveness.",
      },
      {
        title: 'Al-Asr — Time',
        arabic: 'وَالْعَصْرِ ﴿١﴾ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ ﴿٢﴾ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ ﴿٣﴾',
        transliteration: "Al-'Asr",
        text: 'A short but powerful surah: people lose out in life unless they believe, do good deeds, and encourage each other in truth and patience.',
      },
      {
        title: 'Quraysh',
        arabic: 'لِإِيلَافِ قُرَيْشٍ ﴿١﴾ إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ ﴿٢﴾ فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ ﴿٣﴾ الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ ﴿٤﴾',
        transliteration: 'Quraysh',
        text: 'This surah reminds the Quraysh tribe of Makkah to thank and worship Allah, who fed them and kept them safe.',
      },
      {
        title: 'Al-Fil — The Elephant',
        arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ﴿١﴾ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ﴿٢﴾ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ﴿٣﴾ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ ﴿٤﴾ فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ ﴿٥﴾',
        transliteration: 'Al-Fil',
        text: 'This surah tells the story of the army with elephants that came to attack the Kaaba, and how Allah defeated them with flocks of birds — the same event told in our Seerah lesson.',
      },
    ],
  },
  {
    id: 'arabiyyah',
    title: 'Arabiyyah',
    arabicTitle: 'العَرَبِيَّة',
    subtitle: 'Learn simple Arabic words',
    icon: 'arabiyyah',
    type: 'flashcards',
    items: ARABIYYAH_CARDS,
  },
]

export function getKidsCategory(id) {
  return KIDS_CATEGORIES.find(c => c.id === id) || null
}