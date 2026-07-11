export const TAWHEED_SECTIONS = [
  {
    id: 'tw1',
    title: 'The Four Matters Every Muslim Must Know',
    arabicTitle: 'الأُمُورُ الأَرْبَعَةُ الوَاجِبُ تَعَلُّمُهَا',
    icon: '🕋',
    overview: 'Shaykh Muhammad ibn Abdul-Wahhab opens Al-Usul ath-Thalathah (The Three Fundamental Principles) not with Tawheed directly, but with a broader statement of what is obligatory upon every Muslim to learn before anything else: knowledge, action upon that knowledge, calling others to it, and patience upon the harm that may follow. This opening frames everything that follows in the treatise as a matter of practical religious obligation, not abstract theory.',
    rules: [
      {
        id: 'tw1r1',
        name: 'The Four Matters and the Evidence of Surah al-Asr',
        arabic: 'الأُمُورُ الأَرْبَعَة وَدَلِيلُهَا مِنْ سُورَةِ العَصْر',
        level: 'foundation',
        explanation: `The Shaykh begins: "Know, may Allah have mercy on you, that it is obligatory upon us to learn four matters:

1. Al-'Ilm (العِلْم — Knowledge): knowledge of Allah, knowledge of His Prophet ﷺ, and knowledge of the religion of Islam, each together with its evidence.
2. Al-'Amal (العَمَل — Action): acting upon this knowledge once it is attained.
3. Ad-Da'wah (الدَّعْوَة — Calling others): inviting others to this same knowledge and action.
4. As-Sabr (الصَّبْر — Patience): bearing patiently whatever harm is encountered along this path.

The evidence for these four matters is Surah al-Asr in its entirety: 'By time. Indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.' (Quran 103:1-3)

Imam ash-Shafi'i, rahimahullah, said regarding this surah: 'If Allah had not revealed as an argument against His creation except this surah, it would have been sufficient for them.' The reasoning scholars draw from this statement is that the surah, in only three verses, accounts for every possible category of person: those who neither believe nor act (in loss), those who believe and act correctly for themselves but do not call others or endure patiently (still incomplete), and finally those who combine all four matters — belief, righteous action, calling others to truth, and patience upon the difficulty of that calling. Only this last group is described as saved from loss.`,
        examples: [
          { arabic: 'وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ', transliteration: 'Wal-Asr, innal-insana lafi khusr, illal-ladhina aamanu wa amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr', note: 'Surah al-Asr (103:1-3), cited by the Shaykh as containing all four obligatory matters' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab, opening passage",
      },
      {
        id: 'tw1r2',
        name: 'The Three Matters Obligatory upon Every Muslim',
        arabic: 'الثَّلَاثُ مَسَائِلَ الوَاجِبِ تَعَلُّمُهَا عَلَى كُلِّ مُسْلِم',
        level: 'foundation',
        explanation: `Before introducing the Three Fundamental Principles themselves, the Shaykh sets out three preliminary matters he states are obligatory upon every male and female Muslim to know and act upon:

First: Allah created us, provided sustenance for us, and did not leave us without purpose — rather He sent to us a Messenger. Whoever obeys this Messenger enters Paradise, and whoever disobeys him enters the Fire. The evidence: "Indeed, We have sent to you a Messenger as a witness over you, just as We sent to Pharaoh a messenger. But Pharaoh disobeyed the messenger, so We seized him with a ruinous seizure." (Quran 73:15-16)

Second: Allah is not pleased that anyone be associated with Him in worship — not a angel brought near, nor a prophet sent. The evidence: "And the mosques are for Allah, so do not invoke anyone along with Allah." (Quran 72:18)

Third: Whoever obeys the Messenger ﷺ and single out Allah alone in worship (achieving Tawheed) is not permitted to take as an ally (wala) anyone who opposes Allah and His Messenger, even if that person is one's nearest relative. The evidence: "You will not find a people who believe in Allah and the Last Day having affection for those who oppose Allah and His Messenger, even if they were their fathers, their sons, their brothers, or their kindred." (Quran 58:22)

These three matters establish, before any technical discussion of Tawheed begins, the basic relationship between the created being and Allah: dependence on Him, exclusive devotion to Him in worship, and loyalty defined by that devotion rather than by blood or tribe.`,
        examples: [
          { arabic: 'إِنَّا أَرْسَلْنَا إِلَيْكُمْ رَسُولًا شَاهِدًا عَلَيْكُمْ', transliteration: "Inna arsalna ilaykum rasulan shahidan alaykum", note: 'Quran 73:15 — evidence for the first matter' },
          { arabic: 'وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا', transliteration: 'Wa annal-masajida lillahi fala tadu maallahi ahada', note: 'Quran 72:18 — evidence for the second matter' },
          { arabic: 'لَّا تَجِدُ قَوْمًا يُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ يُوَادُّونَ مَنْ حَادَّ اللَّهَ وَرَسُولَهُ', transliteration: "La tajidu qawman yuminuna billahi wal-yawmil-akhiri yuwadduna man haddallaha wa rasulah", note: 'Quran 58:22 — evidence for the third matter' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
    ],
  },

  {
    id: 'tw2',
    title: 'The Purpose of Creation, and the Greatest Command and Prohibition',
    arabicTitle: 'الغَايَةُ مِنَ الخَلْقِ وَأَعْظَمُ مَا أَمَرَ اللَّهُ بِهِ وَأَعْظَمُ مَا نَهَى عَنْهُ',
    icon: '⭐',
    overview: 'Before naming the Three Fundamental Principles, the Shaykh establishes why Tawheed sits at the very center of the religion: it is nothing less than the purpose for which mankind and the jinn were created, the substance of the hanifiyyah (upright, monotheistic) way of Ibrahim, alayhis-salam, and the single greatest thing Allah has commanded — just as its opposite, shirk, is the single greatest thing He has forbidden.',
    rules: [
      {
        id: 'tw2r1',
        name: "The Hanifiyyah Millah of Ibrahim and the Purpose of Creation",
        arabic: 'الحَنِيفِيَّة مِلَّةُ إِبْرَاهِيمَ وَالغَايَةُ مِنَ الخَلْق',
        level: 'foundation',
        explanation: `The Shaykh writes: "Know, may Allah guide you to His obedience, that the hanifiyyah — the way of Ibrahim — is that you worship Allah alone, making the religion sincerely for Him. This is what Allah has commanded all of mankind with, and it is the purpose for which He created them."

The evidence for this being the purpose of creation is Allah's statement: "And I did not create the jinn and mankind except to worship Me." (Quran 51:56)

The word "worship" (li-ya'budun) here is understood by the mufassirun (exegetes) to mean "to single Me out in worship" — that is, Tawheed — rather than worship in some general, undefined sense, since even the polytheists the Quran addresses performed acts they called worship; what was missing was the singling out of Allah alone within that worship.

This single verse is treated in the treatise as establishing that Tawheed is not one obligation among many equally weighted obligations, but the very reason for existence itself — the axis around which every other command and prohibition in the religion turns.`,
        examples: [
          { arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ', transliteration: 'Wa ma khalaqtul-jinna wal-insa illa liyabudun', note: 'Quran 51:56 — the purpose of creation, cited as the foundational verse of the entire treatise' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw2r2',
        name: 'The Greatest Command (Tawheed) and the Greatest Prohibition (Shirk)',
        arabic: 'أَعْظَمُ مَا أَمَرَ اللَّهُ بِهِ التَّوْحِيدُ وَأَعْظَمُ مَا نَهَى عَنْهُ الشِّرْك',
        level: 'foundation',
        explanation: `Having established that Tawheed is the purpose of creation, the Shaykh states directly: "The greatest thing Allah has commanded is Tawheed — which is to single Allah out in worship. And the greatest thing Allah has forbidden is Shirk — which is to call upon, or direct any act of worship to, anyone besides Him."

The evidence brought for this is: "Worship Allah and do not associate anything with Him." (Quran 4:36), a verse that opens with the positive command (worship Allah) and immediately follows it with the corresponding prohibition (do not associate anything with Him) — establishing the two as inseparable: Tawheed cannot be achieved without the simultaneous rejection of shirk, and avoiding shirk in name only, without actively directing worship to Allah alone, does not itself constitute Tawheed.

This pairing — the greatest command set directly against the greatest prohibition — is the organizing principle behind nearly every subsequent section of the treatise, which repeatedly defines correct belief and practice by holding it up against its precise opposite.`,
        examples: [
          { arabic: 'وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا', transliteration: "Wabudullaha wa la tushriku bihi shay'a", note: 'Quran 4:36 — the command to worship Allah paired directly with the prohibition of shirk' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
    ],
  },

  {
    id: 'tw3',
    title: 'The First Principle: Knowledge of Allah (Ma\'rifatullah)',
    arabicTitle: 'الأَصْلُ الأَوَّل: مَعْرِفَةُ اللَّهِ',
    icon: '☀️',
    overview: 'The first of the Three Fundamental Principles is knowledge of Allah Himself: recognizing Him through the evidence of His creation and His signs, understanding that this recognition necessarily entails that He alone is deserving of worship (Rububiyyah necessitating Uluhiyyah), and knowing the specific acts of worship that must be directed to Him alone, upon pain of falling into the very shirk that nullifies Tawheed.',
    rules: [
      {
        id: 'tw3r1',
        name: "Knowing Allah Through His Signs and Creation",
        arabic: 'مَعْرِفَةُ اللَّهِ بِآيَاتِهِ وَمَخْلُوقَاتِهِ',
        level: 'foundation',
        explanation: `The Shaykh introduces the first principle by directing attention outward, to what can be observed: "If it is said to you: 'By what do you know your Lord?' say: 'By His signs and His creation.' Among His signs are the night, the day, the sun, and the moon; and among His creation are the seven heavens, the seven earths, and whatever is within them and between them."

The evidence: "And of His signs are the night and the day, and the sun and the moon. Do not prostrate to the sun or to the moon, but prostrate to Allah, who created them, if it is Him you worship." (Quran 41:37)

And: "Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne... Blessed is Allah, Lord of the worlds." (Quran 7:54)

The Shaykh's method here is characteristic of the entire treatise: rather than beginning with abstract philosophical proofs, he begins with the observable order of the universe, and notes that the same verse which points to the sun and moon as signs of Allah's creative power immediately forbids prostrating to the sun and moon themselves — establishing from the very first evidence offered that recognizing Allah as Creator (Rububiyyah) is inseparable from the obligation to worship Him alone (Uluhiyyah), and that failing to draw that connection, as the sun-worshippers had failed to, is precisely the error the verse warns against.

Ar-Rabb (الرَّبّ) — "the Lord" — is defined as the One who creates, who owns, and who directs the affairs of all that exists; and it is precisely because He is al-Khaliq (the Creator) that He alone is al-Ma'bud (the One deserving worship), a logical connection the Shaykh draws from: "O mankind, worship your Lord, who created you and those before you, that you may become righteous — who made the earth a bed for you and the sky a ceiling and sent down rain from the sky and brought forth thereby fruits as provision for you. So do not set up rivals to Allah while you know [that He alone created all of this]." (Quran 2:21-22)`,
        examples: [
          { arabic: 'وَمِنْ آيَاتِهِ اللَّيْلُ وَالنَّهَارُ وَالشَّمْسُ وَالْقَمَرُ ۚ لَا تَسْجُدُوا لِلشَّمْسِ وَلَا لِلْقَمَرِ وَاسْجُدُوا لِلَّهِ الَّذِي خَلَقَهُنَّ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ', transliteration: 'Wa min ayatihil-laylu wan-naharu wash-shamsu wal-qamar, la tasjudu lish-shamsi wa la lil-qamari was-judu lillahil-ladhi khalaqahunna in kuntum iyyahu tabudun', note: 'Quran 41:37 — creation as sign, immediately paired with the command to worship the Creator alone' },
          { arabic: 'يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ', transliteration: "Ya ayyuhan-nasu-budu rabbakumul-ladhi khalaqakum wal-ladhina min qablikum laallakum tattaqun", note: 'Quran 2:21-22 — the logical link from creation (Rububiyyah) to the obligation of worship (Uluhiyyah)' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw3r2',
        name: 'The Types of Worship That Must Be Directed to Allah Alone',
        arabic: 'أَنْوَاعُ العِبَادَةِ الَّتِي يَجِبُ إِخْلَاصُهَا لِلَّهِ',
        level: 'intermediate',
        explanation: `Having established that Allah alone deserves worship, the Shaykh lists specific categories of worship that must not be directed to anyone besides Him, stating plainly that directing any single one of these to other than Allah constitutes shirk that expels a person from the fold of Islam:

Among the types of worship named: Du'a (supplication/calling upon), Khawf (fear), Raja (hope), Tawakkul (reliance), Raghbah (desire/hopeful longing), Rahbah (dread), Khushu (humble submission), Khashyah (awe-filled fear), Inabah (turning in repentance), Isti'anah (seeking help), Isti'adhah (seeking refuge), Istighathah (seeking rescue), Dhabh (slaughtering as an act of devotion), and Nadhr (vowing) — along with every other act of worship Allah has commanded.

The evidence brought together for these categories: "And the mosques are for Allah, so do not invoke anyone along with Allah." (Quran 72:18) — for du'a; "So do not fear them, but fear Me." (Quran 3:175) — for khawf; "So whoever hopes for the meeting with his Lord, let him do righteous work and associate none in the worship of his Lord." (Quran 18:110) — for raja; "And upon Allah rely, if you are believers." (Quran 5:23) — for tawakkul; and "Say: Indeed my prayer, my rites of sacrifice, my living, and my dying are for Allah, Lord of the worlds. No partner has He." (Quran 6:162-163) — for dhabh, establishing that even an act as seemingly mundane as slaughtering an animal becomes an act of worship when performed with devotional intent, and must therefore be performed in Allah's name alone, never as an offering to a grave, a jinn, or any other entity.

The Shaykh's underlying point in enumerating these specific acts, rather than leaving "worship" as an undefined general term, is practical: shirk in the real world does not usually announce itself as an abstract philosophical error, but takes the concrete form of one of these very acts — a supplication directed at a deceased saint, a vow made to a shrine, a slaughter performed at a grave — and recognizing Tawheed therefore requires being able to recognize precisely which acts fall under the category of worship in the first place.`,
        examples: [
          { arabic: 'وَأَنَّ الْمَسَاجِدَ لِلَّهِ فَلَا تَدْعُوا مَعَ اللَّهِ أَحَدًا', transliteration: "Wa annal-masajida lillahi fala tadu maallahi ahada", note: 'Quran 72:18 — evidence that Du\'a (supplication) must be for Allah alone' },
          { arabic: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ ۝ لَا شَرِيكَ لَهُ', transliteration: 'Qul inna salati wa nusuki wa mahyaya wa mamati lillahi rabbil-alamin, la sharika lah', note: 'Quran 6:162-163 — evidence that ritual sacrifice (dhabh) and one\'s whole devotional life must be for Allah alone' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw3r3',
        name: 'The Three Categories of Tawheed as Later Systematized',
        arabic: 'أَقْسَامُ التَّوْحِيدِ الثَّلَاثَة',
        level: 'intermediate',
        explanation: `While Al-Usul ath-Thalathah itself does not use the later systematized threefold terminology as a formal heading, the distinctions it draws throughout — between recognizing Allah as Creator and directing worship to Him alone — correspond directly to the threefold division of Tawheed that Shaykh Muhammad ibn Abdul-Wahhab set out more fully in his companion work Kitab at-Tawhid and that has become the standard framework for teaching this subject:

1. Tawheed ar-Rububiyyah (تَوْحِيدُ الرُّبُوبِيَّة — Oneness of Lordship): affirming that Allah alone is the Creator, Sustainer, Owner, and Controller of all that exists, with no partner in these matters. The Shaykh notes, citing the Quran repeatedly, that even the pagan Arabs the Prophet ﷺ was sent to already affirmed this category of Tawheed — "If you asked them, 'Who created the heavens and the earth?' they would surely say, 'Allah'" (Quran 31:25) — and yet this affirmation alone did not make them Muslims, since they simultaneously violated the second category.

2. Tawheed al-Uluhiyyah (تَوْحِيدُ الأُلُوهِيَّة — Oneness of Worship), also called Tawheed al-Ibadah: directing every act of worship — the very types enumerated in the section above — to Allah alone, with no act of worship given to any other being, however righteous. This is the category the mushrikun (polytheists) of the Prophet's ﷺ time violated, since they directed du'a, sacrifice, and vows to idols and intermediaries even while affirming Allah as sole Creator, and it is this category the entire treatise is most urgently concerned with establishing.

3. Tawheed al-Asma was-Sifat (تَوْحِيدُ الأَسْمَاءِ وَالصِّفَات — Oneness of Names and Attributes): affirming for Allah the names and attributes He has affirmed for Himself in the Quran and that His Messenger ﷺ affirmed for Him in authentic hadith, without distortion (tahrif), denial (ta'til), asking "how" (takyif), or likening Him to creation (tamthil), following the guiding principle of Quran 42:11: "There is nothing like unto Him, and He is the All-Hearing, the All-Seeing."

The Shaykh's broader argument, running throughout the treatise, is that the first category (Rububiyyah) without the second (Uluhiyyah) is insufficient for Islam — a point he returns to repeatedly by noting that the very people the Quran calls mushrikun already believed in Allah as Creator, which is precisely why the Quran does not spend its effort primarily arguing for Allah's existence, but overwhelmingly for directing worship to Him alone.`,
        examples: [
          { arabic: 'وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ اللَّهُ', transliteration: 'Wa lain saaltahum man khalaqas-samawati wal-arda layaqulunnallah', note: 'Quran 31:25 — even the mushrikun affirmed Tawheed ar-Rububiyyah' },
          { arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ', transliteration: "Laysa kamithlihi shay'un wa huwas-samiul-basir", note: 'Quran 42:11 — the guiding principle for Tawheed al-Asma was-Sifat' },
        ],
        source: "Al-Usul ath-Thalathah and Kitab at-Tawhid, Shaykh Muhammad ibn Abdul-Wahhab",
      },
    ],
  },

  {
    id: 'tw4',
    title: 'The Second Principle: Knowledge of the Religion of Islam',
    arabicTitle: 'الأَصْلُ الثَّانِي: مَعْرِفَةُ دِينِ الإِسْلَامِ بِالأَدِلَّة',
    icon: '🕌',
    overview: 'The second fundamental principle is knowledge of the religion of Islam itself, together with its evidences. The Shaykh explains that this religion has three ascending levels — Islam, Iman, and Ihsan — each with its own defined pillars, drawn directly from the well-known hadith of Jibril, alayhis-salam, in which the angel questioned the Prophet ﷺ before the assembled Companions to teach them their religion.',
    rules: [
      {
        id: 'tw4r1',
        name: 'Defining Islam and Its Five Pillars',
        arabic: 'تَعْرِيفُ الإِسْلَامِ وَأَرْكَانُهُ الخَمْسَة',
        level: 'foundation',
        explanation: `The Shaykh defines Islam as: "Submission to Allah with Tawheed, subservience to Him with obedience, and disassociation from shirk and its people."

Islam rests upon five pillars, as reported in the well-known hadith: "Islam is built upon five: testifying that there is no god worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving zakah, fasting Ramadan, and performing Hajj to the House for whoever is able to find a way to it."

The Shaykh treats each of these five with its Quranic evidence:

The testimony of faith (shahadatayn): "Allah bears witness that there is no god worthy of worship but Him, and [so do] the angels and those of knowledge, maintaining [His creation] in justice. There is no god but Him, the Exalted in Might, the Wise." (Quran 3:18)

The prayer (salah) and zakah: "And they were not commanded except to worship Allah, sincere to Him in religion, inclining to truth, and to establish prayer and give zakah. And that is the correct religion." (Quran 98:5)

Fasting (sawm): "O you who have believed, decreed upon you is fasting as it was decreed upon those before you, that you may become righteous." (Quran 2:183)

Hajj: "And [due] to Allah from the people is a pilgrimage to the House — for whoever is able to find thereto a way." (Quran 3:97)

The Shaykh's consistent method — pairing every single ruling with its textual evidence rather than stating it as a bare assertion — is itself a deliberate pedagogical feature of the treatise, teaching the student from the outset that religious knowledge in this tradition is not accepted on authority alone but must be traceable to the Quran or authentic Sunnah.`,
        examples: [
          { arabic: 'بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ', transliteration: "Buniyal-Islamu ala khams", note: "Opening of the hadith of the five pillars, narrated by Ibn Umar, in Sahih al-Bukhari and Sahih Muslim" },
          { arabic: 'شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ', transliteration: "Shahidallahu annahu la ilaha illa huwa wal-malaikatu wa ulul-ilmi qaiman bil-qist", note: 'Quran 3:18 — evidence for the shahadah' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab; Sahih al-Bukhari 8, Sahih Muslim 16",
      },
      {
        id: 'tw4r2',
        name: 'Defining Iman and Its Six Pillars',
        arabic: 'تَعْرِيفُ الإِيمَانِ وَأَرْكَانُهُ السِّتَّة',
        level: 'foundation',
        explanation: `The second level, Iman, has six pillars, drawn from the same hadith of Jibril, in which he asked the Prophet ﷺ, "Inform me about Iman," and the Prophet ﷺ replied: "That you believe in Allah, His angels, His Books, His Messengers, the Last Day, and that you believe in divine decree (al-qadar), the good of it and the evil of it."

1. Belief in Allah: affirming His existence, His Lordship, His right to be worshipped, and His names and attributes.
2. Belief in the angels: that Allah created them from light, that they are honored servants who never disobey Him, and that among them are Jibril, entrusted with revelation, and others entrusted with other tasks.
3. Belief in the Books: that Allah revealed scriptures to His messengers, culminating in the Quran, which abrogates and supersedes what came before it.
4. Belief in the Messengers: that Allah sent messengers to every nation, the first being Nuh and the last being Muhammad ﷺ, all of them conveying the same fundamental call to Tawheed.
5. Belief in the Last Day: the reality of death, the resurrection, the gathering, the reckoning, and the eternal abodes of Paradise and the Fire.
6. Belief in al-Qadar (divine decree), its good and its evil: that whatever occurs, whether pleasant or difficult from the human perspective, occurs by Allah's prior knowledge, writing, will, and creation, without this negating human responsibility for one's own choices and actions.

The evidence the Shaykh cites for the combined statement of belief: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His Books and His messengers, [saying], 'We make no distinction between any of His messengers.'" (Quran 2:285)`,
        examples: [
          { arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ', transliteration: 'Aamanar-rasulu bima unzila ilayhi mir-rabbihi wal-muminun, kullun aamana billahi wa malaikatihi wa kutubihi wa rusulih', note: 'Quran 2:285 — evidence combining several of the six pillars of Iman' },
          { arabic: 'أَن تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ', transliteration: "An tu'mina billahi wa malaikatihi wa kutubihi wa rusulihi wal-yawmil-akhiri wa tumina bil-qadari khayrihi wa sharrih", note: 'The Prophet\'s ﷺ reply defining Iman in the hadith of Jibril, Sahih Muslim 8' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab; Sahih Muslim 8, the hadith of Jibril",
      },
      {
        id: 'tw4r3',
        name: 'Defining Ihsan and Its Single Pillar',
        arabic: 'تَعْرِيفُ الإِحْسَانِ وَرُكْنُهُ الوَاحِد',
        level: 'foundation',
        explanation: `The third and highest level, Ihsan, has a single pillar, and it is the one Jibril asked about last in the same hadith: "Inform me about Ihsan." The Prophet ﷺ replied: "That you worship Allah as though you see Him, and though you do not see Him, [know that] He surely sees you."

This single statement is treated by the Shaykh, and by the wider scholarly tradition, as the summit of the entire religion: it does not add a new ritual requirement beyond the pillars of Islam and Iman, but rather describes the quality of consciousness — muraqabah, a continual awareness of Allah's watchfulness — that should accompany the performance of everything already commanded. A prayer performed with Ihsan and the identical prayer performed without it are outwardly the same movements, yet the treatise's framework treats them as different in their essential reality before Allah.

The evidence cited connects this awareness to the broader Quranic description of Allah's nearness and knowledge of the believer's state: "And He is with you wherever you are, and Allah is Seeing of what you do." (Quran 57:4), and: "Indeed, my Lord is ever, over all things, encompassing." (Quran 41:54)

Taken together, the three levels — Islam (outward submission through the five pillars), Iman (inward belief in the six matters), and Ihsan (the perfection of consciousness that should suffuse both) — form a single integrated structure in which each level presupposes and completes the one before it, rather than three separate or competing paths.`,
        examples: [
          { arabic: 'أَن تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِن لَّمْ تَكُن تَرَاهُ فَإِنَّهُ يَرَاكَ', transliteration: "An tabudallaha ka-annaka tarahu, fa-in lam takun tarahu fa-innahu yarak", note: "The Prophet's ﷺ definition of Ihsan in the hadith of Jibril, Sahih Muslim 8" },
          { arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ', transliteration: "Wa huwa maakum ayna ma kuntum wallahu bima tamaluna basir", note: 'Quran 57:4 — Allah\'s continual awareness of the believer, underlying the reality of Ihsan' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab; Sahih Muslim 8, the hadith of Jibril",
      },
    ],
  },

  {
    id: 'tw5',
    title: 'The Evidence for the Resurrection and the Sending of Messengers',
    arabicTitle: 'الدَّلِيلُ عَلَى البَعْثِ وَإِرْسَالِ الرُّسُل',
    icon: '⏳',
    overview: 'Having covered belief in the Last Day as one of the pillars of Iman, the Shaykh pauses to establish, with dedicated evidence, two matters he treats as foundational rather than incidental: the reality of the Resurrection (al-Ba\'th), and the fact that Allah sent a messenger to every nation carrying the same essential call.',
    rules: [
      {
        id: 'tw5r1',
        name: "The Evidence for al-Ba'th (the Resurrection)",
        arabic: 'الدَّلِيلُ عَلَى البَعْث',
        level: 'intermediate',
        explanation: `The Shaykh states plainly that belief in the Resurrection is obligatory, and that whoever denies it has disbelieved, citing two verses that address the matter from different angles:

The first affirms the Resurrection directly as a promise from Allah: "The disbelievers claim that they will never be resurrected. Say: Yes, by my Lord, you will surely be resurrected; then you will surely be informed of what you did. And that, for Allah, is easy." (Quran 64:7)

The second answers the objection that a body reduced to dust and bone could ever be restored to life, by pointing to the precedent of the original creation itself: "And he presents for Us an example and forgets his own creation. He says, 'Who will give life to bones while they are disintegrated?' Say, 'He will give them life who produced them the first time; and He is, of all creation, Knowing.'" (Quran 36:78-79)

The Shaykh's underlying logic, characteristic of the Quran's own argumentative style that the treatise draws on repeatedly, is that the same power capable of an original, unprecedented act of creation is, if anything, more evidently capable of a second act of restoration — making denial of the Resurrection a position the Quran treats as intellectually, not merely doctrinally, untenable.`,
        examples: [
          { arabic: 'زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا ۚ قُلْ بَلَىٰ وَرَبِّي لَتُبْعَثُنَّ', transliteration: "Zaamal-ladhina kafaru al-lay-yuba'athu, qul bala wa rabbi latuba'athunna", note: 'Quran 64:7 — the direct affirmation of the Resurrection' },
          { arabic: 'قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ ۝ قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ', transliteration: "Qala may-yuhyil-idhama wa hiya ramim, qul yuhyihal-ladhi anshaaha awwala marrah", note: 'Quran 36:78-79 — the argument from original creation to the possibility of resurrection' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab",
      },
      {
        id: 'tw5r2',
        name: 'The Evidence That Allah Sent a Messenger to Every Nation',
        arabic: 'الدَّلِيلُ عَلَى إِرْسَالِ اللَّهِ رَسُولًا لِكُلِّ أُمَّة',
        level: 'intermediate',
        explanation: `Allah did not leave any nation of mankind without sending to it a messenger explaining the way to worship Him correctly. The evidence: "And We have certainly sent into every nation a messenger, [saying], 'Worship Allah and avoid taghut.'" (Quran 16:36)

The messengers, though many and though addressing different peoples across different eras, are consistently described in the Quran as bringing one and the same essential message, since: "We did not send any messenger before you except that We revealed to him that, 'There is no deity except Me, so worship Me.'" (Quran 21:25)

The Shaykh treats this as one of the treatise's central proofs against the idea that Tawheed is a narrow, sectarian, or historically contingent teaching: rather, every prophet from Nuh to Muhammad ﷺ, across every nation and every era, is presented as having called their people to the identical foundation — the worship of Allah alone and the rejection of taghut — meaning that the call to pure Tawheed is not a later addition to the religion of any given prophet, but the constant, unchanging core of every revealed message from the very beginning.`,
        examples: [
          { arabic: 'وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ', transliteration: "Wa laqad ba'athna fi kulli ummatir-rasulan ani-buduallaha wajtanibut-taghut", note: 'Quran 16:36 — evidence that every nation received a messenger with the same core call' },
          { arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ', transliteration: "Wa ma arsalna min qablika mir-rasulin illa nuhi ilayhi annahu la ilaha illa ana fabudun", note: 'Quran 21:25 — the unifying content of every prophetic message across history' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab",
      },
    ],
  },

  {
    id: 'tw6',
    title: "At-Taghut: Its Definition and Its Five Foremost Heads",
    arabicTitle: 'الطَّاغُوتُ: تَعْرِيفُهُ وَرُؤُوسُهُ الخَمْسَة',
    icon: '⚠️',
    overview: 'Since the previous section established that every messenger called his people to "worship Allah and avoid at-taghut," the Shaykh treats a clear understanding of taghut as inseparable from a correct understanding of Tawheed itself: one cannot truly achieve la ilaha illallah without first knowing precisely what is being negated by the word "la" (no/there is not).',
    rules: [
      {
        id: 'tw6r1',
        name: 'The Definition of Taghut and Its Five Foremost Categories',
        arabic: 'تَعْرِيفُ الطَّاغُوتِ وَأَنْوَاعُهُ الخَمْسَة',
        level: 'intermediate',
        explanation: `The Shaykh defines taghut (الطَّاغُوت) broadly as: "everything by which a servant is led beyond his proper bounds — whether an object worshipped, a figure followed, or an authority obeyed [in defiance of Allah]." He then narrows this general definition to five foremost, most consequential categories:

1. Iblis (Shaytan), may Allah curse him — the archetype of taghut, who calls mankind to disobedience and to shirk.
2. Whoever is worshipped besides Allah and is pleased with that worship — this excludes righteous individuals such as Isa (Jesus), alayhis-salam, who is worshipped by some yet was not himself pleased with it, as the Quran itself records him disavowing on the Day of Judgment (Quran 5:116-117).
3. Whoever calls people to worship himself, even if he himself is not actually worshipped by anyone, such as a false claimant to divinity.
4. Whoever claims some knowledge of the unseen (al-ghayb) that belongs exclusively to Allah.
5. Whoever rules by other than what Allah has revealed and is pleased for people to accept that ruling in place of Allah's law.

The evidence the Shaykh uses to unify these categories under the term "avoiding taghut" as the necessary complement to Tawheed is: "There is no compulsion in religion. Truth stands out clearly from falsehood. So whoever disbelieves in taghut and believes in Allah has grasped the most trustworthy handhold, without any break in it. And Allah is Hearing and Knowing." (Quran 2:256)

This verse, and specifically the phrase "man yakfur bit-taghuti wa yumin billah" (whoever disbelieves in taghut and believes in Allah), is treated by the Shaykh as containing, in a single line, the full meaning of la ilaha illallah: the negation (disbelief in taghut, i.e., in everything worshipped besides Allah) paired with the affirmation (belief in Allah alone), with the order of the two halves in the verse itself — negation before affirmation — mirroring the grammatical structure of the shahadah, in which "la ilaha" (no god) precedes "illallah" (except Allah).`,
        examples: [
          { arabic: 'فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا', transliteration: "Faman yakfur bit-taghuti wa yumim billahi faqadis-tamsaka bil-urwatil-wuthqa lan-fisama laha", note: 'Quran 2:256 — the verse the Shaykh treats as containing the full meaning of la ilaha illallah' },
        ],
        source: "Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab",
      },
    ],
  },

  {
    id: 'tw7',
    title: 'The Third Principle: Knowledge of the Prophet Muhammad ﷺ',
    arabicTitle: 'الأَصْلُ الثَّالِث: مَعْرِفَةُ نَبِيِّكُم مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّم',
    icon: '🌙',
    overview: 'The third fundamental principle is knowledge of the Prophet Muhammad ﷺ himself: his lineage, his homeland, his age at the onset of prophethood, the distinction between his being a Prophet and his being a Messenger, the stages of his mission from Makkah to Madinah, and the completeness of the religion he left behind.',
    rules: [
      {
        id: 'tw7r1',
        name: 'His Lineage, Homeland, and the Span of His Life',
        arabic: 'نَسَبُهُ وَبَلَدُهُ وَمُدَّةُ عُمُرِهِ',
        level: 'foundation',
        explanation: `The Shaykh identifies the Prophet ﷺ by name and lineage: he is Muhammad, son of Abdullah, son of Abdul-Muttalib, son of Hashim. Hashim descends from the tribe of Quraysh; Quraysh descends from the Arabs; and the Arabs descend from the offspring of Isma'il, son of Ibrahim, alayhimas-salam (upon both of them be peace).

He lived sixty-three years: forty years before prophethood, and twenty-three years as a Prophet and Messenger — the first of these twenty-three spent as a Prophet who received revelation without yet being commanded to convey it publicly, and the remainder as a Messenger commanded to openly call people to the message.

His homeland was Makkah, and he later migrated (made hijrah) to Madinah, a city he settled and died in.

The Shaykh's careful specification of both his human lineage — tracing back through recognized Arab tribal descent to Isma'il — and the precise structure of his mission underscores a recurring theme of the treatise: the Prophet ﷺ, while the recipient of divine revelation, remained fully human, with a known genealogy, a known homeland, and a known, datable historical mission, rather than a figure of myth or ambiguous origin.`,
        examples: [],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw7r2',
        name: 'The Distinction Between Nabi and Rasul, and the Beginning of Revelation',
        arabic: 'الفَرْقُ بَيْنَ النَّبِيِّ وَالرَّسُولِ وَبِدَايَةُ الوَحْي',
        level: 'intermediate',
        explanation: `The Shaykh explains that he became a Nabi (Prophet) with the revelation of the opening verses of Surah al-Alaq — "Recite, in the name of your Lord who created" (Quran 96:1) — and became a Rasul (Messenger) with the subsequent revelation of Surah al-Muddaththir: "O you who covers himself [with a garment], arise and warn." (Quran 74:1-2)

The scholarly distinction generally drawn between the two terms — a distinction the Shaykh's structuring of these two revelations reflects — is that a Nabi is one who receives revelation, while a Rasul is one commanded, in addition, to actively convey that revelation to a people, whether that people had previously received a messenger or not. On this understanding, every Rasul is also a Nabi, but not every Nabi was necessarily commanded with the same scope of public conveyance a Rasul was given.

Surah al-Muddaththir's opening command — "arise and warn" — is treated as the formal beginning of the Prophet's ﷺ public mission, marking the transition from private revelation to the active, outward calling of people to Tawheed that would occupy the rest of his life.`,
        examples: [
          { arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', transliteration: 'Iqra bismi rabbikal-ladhi khalaq', note: 'Quran 96:1 — the first revelation, marking the start of Prophethood (Nubuwwah)' },
          { arabic: 'يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ', transliteration: 'Ya ayyuhal-muddaththir, qum fa andhir', note: 'Quran 74:1-2 — the revelation marking the start of Messengership (Risalah) and public conveyance' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw7r3',
        name: 'The Stages of His Mission: Ten Years Calling to Tawheed, Then the Rest of the Sharia',
        arabic: 'مَرَاحِلُ دَعْوَتِهِ: عَشْرُ سِنِينَ لِلتَّوْحِيدِ ثُمَّ سَائِرُ الشَّرِيعَة',
        level: 'intermediate',
        explanation: `The Shaykh outlines the practical sequence of the Prophet's ﷺ mission in a way that carries a deliberate pedagogical implication for how Islam itself should be taught and prioritized: he spent ten years in Makkah after the start of his mission calling people specifically and exclusively to Tawheed — singling Allah out in worship and abandoning shirk — before any of the remaining pillars and legislative rulings of Islam were revealed.

Only after this decade, upon the occasion of al-Isra wal-Mi'raj (the Night Journey and Ascension), was he commanded with the five daily prayers, which he then practiced in Makkah for approximately three more years before the hijrah to Madinah.

After settling in Madinah, he was commanded with the remainder of the Sharia: zakah, fasting, Hajj, the call to prayer (adhan), jihad, enjoining what is right and forbidding what is wrong, and the rest of the legal rulings governing transactions, family law, and the wider structure of Islamic society. He remained in Madinah for ten years before passing away, sallallahu alayhi wa sallam.

The Shaykh draws out this sequence deliberately: the fact that a full decade of the Prophet's ﷺ mission was devoted purely to establishing Tawheed, before even the obligatory prayer was legislated, is presented in the treatise as evidence for the correct order of priorities in calling people to Islam — Tawheed first, as the foundation upon which every subsequent obligation is built, rather than treating it as one item on a longer list of equally weighted rulings.`,
        examples: [],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw7r4',
        name: 'His Universal Mission and the Completion of the Religion',
        arabic: 'عُمُومُ رِسَالَتِهِ وَإِكْمَالُ الدِّين',
        level: 'foundation',
        explanation: `The Shaykh establishes that the Prophet's ﷺ mission was not confined to the Arabs alone, but was sent to the whole of mankind and jinn: "Say, 'O mankind, indeed I am the Messenger of Allah to you all.'" (Quran 7:158), and: "And We have not sent you except comprehensively to mankind as a bringer of good tidings and a warner." (Quran 34:28)

Through him, the religion of Islam was brought to completion, an event the Quran itself marks explicitly: "This day I have perfected for you your religion and completed My favor upon you and have approved for you Islam as religion." (Quran 5:3) — a verse revealed, according to the well-known accounts, during the Prophet's ﷺ Farewell Pilgrimage shortly before his death.

The Shaykh closes this account of the Prophet's ﷺ mission with the statement: "His religion remains — there is no good except that which he guided [us] to, and no evil except that which he warned [us] against. The good he guided to is Tawheed and everything Allah loves and is pleased with; and the evil he warned against is shirk and everything Allah hates and is displeased with." This formulation ties the entire treatise's conclusion about the Prophet's ﷺ mission directly back to its opening theme: the whole of revealed religion, in the Shaykh's presentation, ultimately resolves into the single axis of Tawheed sought and shirk avoided.`,
        examples: [
          { arabic: 'قُلْ يَا أَيُّهَا النَّاسُ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ جَمِيعًا', transliteration: 'Qul ya ayyuhan-nasu inni rasulullahi ilaykum jamian', note: 'Quran 7:158 — evidence for the universality of the Prophet\'s ﷺ mission' },
          { arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا', transliteration: "Al-yawma akmaltu lakum dinakum wa atmamtu alaykum nimati wa raditu lakumul-Islama dina", note: 'Quran 5:3 — the completion of the religion, revealed near the end of the Prophet\'s ﷺ life' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
    ],
  },

  {
    id: 'tw8',
    title: 'The Fate of Those Who Die Upon Tawheed and Those Who Die Upon Shirk',
    arabicTitle: 'مَآلُ مَنْ مَاتَ عَلَى التَّوْحِيدِ وَمَنْ مَاتَ عَلَى الشِّرْك',
    icon: '⚖️',
    overview: 'The treatise closes by returning to the theme with which it began — that Allah did not create mankind without purpose, and that the consequences of fulfilling or abandoning that purpose are eternal — now stated in terms of the Prophet\'s ﷺ own death, the certainty of the general Resurrection, and the sharply divergent outcomes awaiting those who die upon Tawheed as against those who die upon shirk.',
    rules: [
      {
        id: 'tw8r1',
        name: "The Prophet's ﷺ Death and the Certainty of the General Resurrection",
        arabic: 'وَفَاةُ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَحَتْمِيَّةُ البَعْثِ العَام',
        level: 'foundation',
        explanation: `The Shaykh affirms, against any who might elevate the Prophet ﷺ beyond his human station, that he died as every human being dies: "Indeed, you will die, and indeed, they will die. Then indeed you, on the Day of Resurrection, before your Lord, will dispute." (Quran 39:30-31)

And that, following this death, all of mankind will without exception be raised again and brought forth from their graves: "From it [the earth] We created you, and into it We will return you, and from it We will extract you another time." (Quran 20:55) — and: "Then indeed you, after that, will surely die. Then indeed you, on the Day of Resurrection, will be resurrected." (Quran 23:15-16)

The Shaykh's inclusion of the Prophet's ﷺ own death within this discussion of the general Resurrection carries a specific doctrinal purpose: it forecloses any notion that the Prophet ﷺ, however honored his station, is somehow exempt from the same reality that awaits every other human being, since even he, sallallahu alayhi wa sallam, will be raised and brought to account like the rest of creation on that Day.`,
        examples: [
          { arabic: 'إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ', transliteration: 'Innaka mayyitun wa innahum mayyitun', note: 'Quran 39:30 — the Prophet\'s ﷺ own mortality affirmed directly' },
          { arabic: 'مِنْهَا خَلَقْنَاكُمْ وَفِيهَا نُعِيدُكُمْ وَمِنْهَا نُخْرِجُكُمْ تَارَةً أُخْرَىٰ', transliteration: 'Minha khalaqnakum wa fiha nuidukum wa minha nukhrijukum taratan ukhra', note: 'Quran 20:55 — the certainty of resurrection from the earth for all mankind' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab',
      },
      {
        id: 'tw8r2',
        name: 'The Divergent Fates of the Mushrik and the Muwahhid',
        arabic: 'مَآلُ المُشْرِكِ وَمَآلُ المُوَحِّد',
        level: 'foundation',
        explanation: `The treatise concludes with the sharpest possible statement of the stakes involved in the whole of what precedes it: "Whoever dies upon shirk, associating partners with Allah, enters the Fire eternally; and whoever dies upon Tawheed, sincere devotion to Allah alone, enters Paradise — even if he committed sins along the way."

The evidence brought for the fate of the one who dies upon shirk: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills." (Quran 4:48) — and: "Indeed, whoever associates others with Allah — Allah has forbidden him Paradise, and his refuge is the Fire, and for the wrongdoers there are no helpers." (Quran 5:72)

And the evidence for the fate of the sincere believer in Tawheed, notwithstanding whatever sins he may have committed short of shirk: "Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills." (Quran 4:48, repeated in the treatise for its double bearing on both outcomes) — and: "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'" (Quran 39:53)

The Shaykh's closing juxtaposition of these two fates — set directly against each other in a single, final passage — returns the entire treatise to its opening logic: that Tawheed is not one obligation weighed equally against others, but the single dividing line upon which eternal destiny turns, making the four matters named at the very start of the work (knowledge, action, calling others, and patience) matters of the gravest possible consequence rather than routine religious instruction.`,
        examples: [
          { arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ', transliteration: 'Innallaha la yaghfiru ay-yushraka bihi wa yaghfiru ma duna dhalika limay-yasha', note: 'Quran 4:48 — the categorical distinction between the unforgivability of shirk and the forgivability of all lesser sins' },
          { arabic: 'إِنَّهُ مَن يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ', transliteration: 'Innahu may-yushrik billahi faqad harramallahu alayhil-jannata wa mawahun-nar', note: 'Quran 5:72 — the fate of the one who dies upon shirk' },
        ],
        source: 'Al-Usul ath-Thalathah, Shaykh Muhammad ibn Abdul-Wahhab, closing passage',
      },
    ],
  },
]

export const TAWHEED_SCHOLARS = [
  {
    name: 'Shaykh Muhammad ibn Abdul-Wahhab',
    arabicName: 'الشَّيْخُ مُحَمَّدُ بْنُ عَبْدِ الوَهَّاب',
    lifespan: '1115-1206 AH / 1703-1792 CE',
    contribution: "A Hanbali scholar of Najd, in central Arabia, and author of Al-Usul ath-Thalathah (The Three Fundamental Principles), Kitab at-Tawhid, Al-Qawaid al-Arba (The Four Foundational Rules), and Kashf ash-Shubuhat, among other works. His writings, concise and heavily evidence-based, became the foundational curriculum for teaching Tawheed across much of the later Sunni world, particularly in the Arabian Peninsula, and are still among the first texts assigned to beginning students of Islamic creed today.",
  },
  {
    name: 'Ibn Taymiyyah',
    arabicName: 'ابْنُ تَيْمِيَّة',
    lifespan: '661-728 AH / 1263-1328 CE',
    contribution: "A Hanbali scholar of Damascus whose extensive writings on Tawheed, shirk, and the correct understanding of Allah's names and attributes — particularly in works such as Al-Aqidah al-Wasitiyyah — form the direct methodological and doctrinal foundation upon which Shaykh Muhammad ibn Abdul-Wahhab's own later treatises, including Al-Usul ath-Thalathah, were built some four centuries afterward.",
  },
  {
    name: 'Ibn al-Qayyim',
    arabicName: 'ابْنُ القَيِّم',
    lifespan: '691-751 AH / 1292-1350 CE',
    contribution: "The foremost student of Ibn Taymiyyah, whose own works on Tawheed, the reality of shirk, and the states of the heart in worship — including Madarij as-Salikin and Ighathat al-Lahfan — further systematized and extended his teacher's approach to Tawheed into the areas of practical spirituality that later treatises in this tradition, including Al-Usul ath-Thalathah, continued to draw upon.",
  },
  {
    name: "Shaykh Abdur-Rahman ibn Hasan Aal ash-Shaykh",
    arabicName: 'عَبْدُ الرَّحْمَنِ بْنُ حَسَنٍ آل الشَّيْخ',
    lifespan: '1193-1285 AH / 1780-1869 CE',
    contribution: "A grandson of Shaykh Muhammad ibn Abdul-Wahhab and author of Fath al-Majid, one of the most widely studied classical commentaries on his grandfather's Kitab at-Tawhid, expanding on the evidences and scholarly discussions underlying the same core material summarized more concisely in Al-Usul ath-Thalathah.",
  },
  {
    name: 'Shaykh Muhammad ibn Salih al-Uthaymin',
    arabicName: 'مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِين',
    lifespan: '1347-1421 AH / 1929-2001 CE',
    contribution: "A twentieth-century scholar of Saudi Arabia whose line-by-line explanation (sharh) of Al-Usul ath-Thalathah became one of the most widely used and translated commentaries on the treatise in the modern era, rendering the Shaykh's concise original text accessible to contemporary students of Tawheed across the world.",
  },
]