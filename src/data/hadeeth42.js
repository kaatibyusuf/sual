// src/data/hadeeth42.js
//
// The 42 Hadith collection — Imam an-Nawawi's classical Forty
// Hadith (hadith 1–40) plus the two additions traditionally
// appended by Ibn Rajab al-Hanbali (hadith 41–42). Static content,
// matching the Women's Fiqh pattern: reviewed once via PR, not
// admin-managed or AI-generated at runtime.
//
// UPDATE: arabic_text now contains the FULL hadith text (not an
// excerpt), reconstructed from memory of the standard Arba'un
// an-Nawawiyyah wording. translation is a full, own-words English
// rendering (not lifted from any single specific published
// edition, to avoid reproducing copyrighted translation text) —
// it aims to be faithful and complete rather than literal
// word-for-word. lessons has been expanded per hadith.
//
// STATUS: draft — given the length and number of texts involved,
// this MUST be checked line-by-line against a printed Arba'un
// Nawawiyyah (e.g. the standard Dar al-Minhaj / Dar Ibn Kathir
// print) or sunnah.com before being treated as final or shown
// publicly. Small transcription errors are a real risk across 42
// full texts reconstructed from memory, and this content is
// widely memorized and recited, so precision matters more here
// than almost anywhere else in the app.

export const HADEETH_42 = [
  {
    num: 1,
    title: "Actions Are by Intentions",
    narrator: "Umar ibn al-Khattab",
    source: "Bukhari & Muslim",
    arabic_text:
      "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    transliteration:
      "Innamal-a'malu bin-niyyat, wa innama likulli imri'in ma nawa, faman kanat hijratuhu ilallahi wa rasoolihi fahijratuhu ilallahi wa rasoolih, wa man kanat hijratuhu lidunya yusibuha awimra'atin yankihuha fahijratuhu ila ma hajara ilayh",
    translation:
      "Actions are judged only by intentions, and every person will have only what he intended. So the one whose migration was to Allah and His Messenger, his migration is to Allah and His Messenger. And the one whose migration was for some worldly gain he might attain, or a woman he might marry, his migration is to that which he migrated for.",
    lessons: [
      "The sincerity behind an act, not the act alone, determines its reward with Allah.",
      "The same outward action can carry very different value depending on intention.",
      "Imam ash-Shafi'i considered this hadith to be one-third of all Islamic knowledge.",
      "A believer should regularly examine and renew their intention before acts of worship.",
      "Hijrah (migration) itself is not inherently rewarded — its value depends entirely on what it was undertaken for.",
      "This hadith is traditionally placed first in hadith collections as the gateway condition for every deed that follows.",
      "A person is never credited with an intention they did not actually hold, no matter how the act appears outwardly.",
      "Because intentions are known only to Allah, this hadith teaches humility in judging the apparent piety of others.",
    ],
  },
  {
    num: 2,
    title: "The Hadith of Jibreel — Islam, Iman, Ihsan",
    narrator: "Umar ibn al-Khattab",
    source: "Muslim",
    arabic_text:
      "بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعَرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ، وَقَالَ: يَا مُحَمَّدُ، أَخْبِرْنِي عَنِ الْإِسْلَامِ. فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَتُقِيمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا. قَالَ: صَدَقْتَ. فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِيمَانِ. قَالَ: أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْتَ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِحْسَانِ. قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ. قَالَ: فَأَخْبِرْنِي عَنِ السَّاعَةِ. قَالَ: مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ. قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا. قَالَ: أَنْ تَلِدَ الْأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ. ثُمَّ انْطَلَقَ، فَلَبِثْتُ مَلِيًّا، ثُمَّ قَالَ: يَا عُمَرُ، أَتَدْرِي مَنِ السَّائِلُ؟ قُلْتُ: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ",
    transliteration:
      "Baynama nahnu 'inda Rasulillahi sallallahu 'alayhi wa sallam dhata yawmin idh tala'a 'alayna rajulun shadidu bayadith-thiyab, shadidu sawadish-sha'r, la yura 'alayhi atharus-safar, wa la ya'rifuhu minna ahad, hatta jalasa ilan-Nabiyyi sallallahu 'alayhi wa sallam fa asnada rukbatayhi ila rukbatayhi wa wada'a kaffayhi 'ala fakhidhayhi, wa qal: Ya Muhammad, akhbirni 'anil-Islam...",
    translation:
      "One day while we were sitting with the Messenger of Allah ﷺ, a man in extremely white clothing and with extremely black hair suddenly appeared before us. No sign of travel could be seen on him, and none of us recognized him. He sat down facing the Prophet ﷺ, set his knees against the Prophet's ﷺ knees, placed his hands on his own thighs, and said, \"O Muhammad, tell me about Islam.\" The Messenger of Allah ﷺ said, \"Islam is to testify that there is no god but Allah and that Muhammad is the Messenger of Allah, to establish the prayer, to give zakah, to fast Ramadan, and to make pilgrimage to the House if you are able.\" He said, \"You have spoken truly.\" We were amazed that he would ask and then confirm the answer. He said, \"Tell me about Iman.\" The Prophet ﷺ said, \"It is to believe in Allah, His angels, His Books, His messengers, and the Last Day, and to believe in divine decree, its good and its bad.\" He said, \"You have spoken truly.\" He said, \"Tell me about Ihsan.\" The Prophet ﷺ said, \"It is to worship Allah as though you see Him, and if you do not see Him, then indeed He sees you.\" He said, \"Tell me about the Hour.\" The Prophet ﷺ said, \"The one asked about it knows no more than the one asking.\" He said, \"Then tell me about its signs.\" The Prophet ﷺ said, \"That the slave-girl will give birth to her mistress, and that you will see the barefoot, naked, destitute shepherds competing with one another in constructing tall buildings.\" Then the man left, and I stayed a while, until the Prophet ﷺ said, \"O 'Umar, do you know who the questioner was?\" I said, \"Allah and His Messenger know best.\" He said, \"That was Jibreel; he came to teach you your religion.\"",
    lessons: [
      "The religion is structured in three ascending levels: submission (Islam), belief (Iman), and excellence (Ihsan).",
      "Ihsan — worshipping as though seeing Allah — is the highest station a believer can reach.",
      "It is permissible to ask questions on behalf of others, as Jibreel did for the Companions.",
      "Knowledge of the exact timing of the Hour belongs to Allah alone, not even to the greatest of created beings.",
      "The signs of the Hour given here point to widespread social inversion and sudden, disorienting worldly change.",
      "A learned questioner may confirm a correct answer aloud, as a teaching method for those listening.",
      "The unusual appearance of the stranger — spotless despite apparent travel — was itself a sign meant to draw attention.",
      "This single encounter is described by the Prophet ﷺ as Jibreel teaching the people their entire religion, showing how comprehensively these three categories define the whole of Islam.",
    ],
  },
  {
    num: 3,
    title: "Islam Is Built on Five",
    narrator: "Abdullah ibn Umar",
    source: "Bukhari & Muslim",
    arabic_text:
      "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ",
    transliteration:
      "Buniyal-Islamu 'ala khams: shahadati an la ilaha illallahu wa anna Muhammadar-rasulullah, wa iqamis-salah, wa ita'iz-zakah, wa hajjil-bayt, wa sawmi Ramadan",
    translation:
      "Islam is built upon five [pillars]: testifying that there is no god but Allah and that Muhammad is the Messenger of Allah, establishing the prayer, giving zakah, making pilgrimage to the House, and fasting Ramadan.",
    lessons: [
      "These five acts form the structural foundation the rest of religious practice is built upon.",
      "The shahadah (testimony of faith) is the entry point and foundation of the other four.",
      "Neglecting one pillar weakens the structure of a person's religious life as a whole, as the metaphor of \"building\" implies.",
      "The pillars combine belief, worship, wealth, physical devotion, and self-restraint into a single framework.",
      "Listing Hajj before the fast of Ramadan in this specific narration is a known point of discussion among the hadith commentators regarding sequence versus importance.",
      "The metaphor of a building (bunyan) implies these five are load-bearing, not merely five items on a list of equal, interchangeable weight.",
      "This hadith is frequently paired with the Hadith of Jibreel, since it gives, in shorter form, the same definition of Islam found there.",
    ],
  },
  {
    num: 4,
    title: "The Stages of Creation",
    narrator: "Abdullah ibn Mas'ud",
    source: "Bukhari & Muslim",
    arabic_text:
      "إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ. فَوَاللَّهِ الَّذِي لَا إِلَهَ غَيْرُهُ، إِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ فَيَدْخُلُهَا، وَإِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ فَيَدْخُلُهَا",
    transliteration:
      "Inna ahadakum yujma'u khalquhu fi batni ummihi arba'ina yawman nutfah, thumma yakunu 'alaqatan mithla dhalik, thumma yakunu mudghatan mithla dhalik, thumma yursalu ilayhil-malaku fa yanfukhu fihir-ruh, wa yu'maru bi arba'i kalimat: bi katbi rizqihi, wa ajalihi, wa 'amalihi, wa shaqiyyun aw sa'eed...",
    translation:
      "Each of you is gathered together in his mother's womb for forty days as a drop of fluid, then he is a clinging clot for a similar period, then a lump of flesh for a similar period. Then the angel is sent to him and breathes the soul into him, and is commanded with four matters: to write down his provision, his lifespan, his deeds, and whether he will be wretched or blessed. By Allah, besides whom there is no god, one of you may do the deeds of the people of Paradise until there is nothing between him and it but an arm's length, and then what has been written overtakes him, so he does the deeds of the people of the Fire and enters it. And one of you may do the deeds of the people of the Fire until there is nothing between him and it but an arm's length, and then what has been written overtakes him, so he does the deeds of the people of Paradise and enters it.",
    lessons: [
      "A person's major life outcomes are decreed by Allah before birth, within His knowledge and wisdom.",
      "Belief in divine decree (qadar) does not remove human responsibility for one's choices and deeds.",
      "Outcomes are not always as they outwardly appear until the very end of a person's life.",
      "This hadith is a foundational text for the Islamic understanding of embryology and the ensoulment of the fetus.",
      "The four decreed matters — provision, lifespan, deeds, and final state — cover the complete arc of a human life before it has even begun.",
      "No one is shown their own written decree in advance, which is why continual striving and never feeling secure from a bad ending are both required.",
      "The oath \"by Allah, besides whom there is no god\" preceding the closing example signals how serious and sobering this particular teaching is meant to be taken.",
      "This hadith is often paired with the Prophet's ﷺ supplications for a good ending (husnul-khaatimah), since it shows how quickly a life's trajectory can be sealed.",
    ],
  },
  {
    num: 5,
    title: "Rejected Innovations",
    narrator: "A'ishah",
    source: "Bukhari & Muslim",
    arabic_text:
      "مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ",
    transliteration:
      "Man ahdatha fi amrina hadha ma laysa minhu fahuwa radd",
    translation:
      "Whoever introduces into this matter of ours [Islam] something that does not belong to it will have it rejected. [In a wording recorded by Muslim: Whoever performs an act that our affair does not sanction will have it rejected.]",
    lessons: [
      "Acts of worship must be grounded in what the Prophet ﷺ taught, not invented independently.",
      "This is a foundational principle against religious innovation (bid'ah) in matters of worship.",
      "A deed done with good intention is still rejected if it has no basis in the Sunnah.",
      "This complements Hadith 1 — sincerity alone does not validate an act; it must also match the Sunnah.",
      "The word \"radd\" (rejected) is absolute — the hadith does not describe a discounted or partial reward for an innovated act, but its complete non-acceptance.",
      "The wording recorded by Muslim broadens the ruling from newly introduced acts specifically to any act lacking the Prophet's ﷺ sanction, whether new or old.",
      "This hadith is frequently cited alongside Hadith 28's warning that \"every innovation is misguidance,\" as two expressions of the same principle.",
    ],
  },
  {
    num: 6,
    title: "The Halal Is Clear and the Haram Is Clear",
    narrator: "An-Nu'man ibn Bashir",
    source: "Bukhari & Muslim",
    arabic_text:
      "إِنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ فَقَدِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ، أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللَّهِ مَحَارِمُهُ، أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ",
    transliteration:
      "Innal-halala bayyin, wa innal-harama bayyin, wa baynahuma umurun mushtabihatun la ya'lamuhunna kathirun minan-nas, famanit-taqash-shubuhati faqadis-tabra'a lideenihi wa 'irdih, wa man waqa'a fish-shubuhati waqa'a fil-haram, kar-ra'i yar'a hawlal-hima yushiku an yarta'a fih...",
    translation:
      "The lawful is clear, and the unlawful is clear, and between the two are ambiguous matters that many people do not know [how to judge]. So whoever avoids the ambiguous matters has cleared himself, for the sake of his religion and his honor, [of any blame]. But whoever falls into the ambiguous matters falls into the unlawful — like a shepherd who grazes his flock around a protected pasture, all but grazing within it. Truly every king has a protected sanctuary, and truly Allah's sanctuary is what He has made unlawful. Truly in the body there is a piece of flesh which, if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. Truly, it is the heart.",
    lessons: [
      "Caution around doubtful matters protects a person from sliding into what is clearly prohibited.",
      "The heart is likened to the body's ruling organ — its corruption corrupts the whole person.",
      "Piety often means voluntarily staying well clear of the boundary, not just avoiding what is certainly haram.",
      "This hadith establishes the category of \"mushtabihat\" (ambiguous matters) as a distinct area of Islamic jurisprudence.",
      "The image of a shepherd grazing near a fenced sanctuary illustrates how proximity to doubtful matters gradually erodes caution over time.",
      "\"Istibra'\" — clearing oneself for the sake of religion and honor — links personal piety directly to one's public standing and reputation.",
      "The closing declaration that the heart governs the entire body ties outward conduct on doubtful matters back to the unseen condition of the heart.",
    ],
  },
  {
    num: 7,
    title: "The Religion Is Sincere Advice",
    narrator: "Tamim ad-Dari",
    source: "Muslim",
    arabic_text: "الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ",
    transliteration:
      "Ad-dinu an-nasihah. Qulna: liman? Qala: Lillahi, wa likitabihi, wa lirasulihi, wa li a'immatil-Muslimina wa 'ammatihim",
    translation:
      "The religion is sincere advice/sincerity (an-naseehah). We said: To whom? He said: To Allah, to His Book, to His Messenger, to the leaders of the Muslims, and to their common folk.",
    lessons: [
      "Sincere advice is owed at every level: to Allah, His scripture, His messenger, leaders, and the community.",
      "Advising leaders is meant to be constructive and respectful, not merely public criticism.",
      "Caring genuinely for the wellbeing of fellow Muslims is a core part of religious practice.",
      "This hadith is considered, alongside Hadith 1, to encapsulate a vast portion of the religion in a few words.",
      "\"Naseehah\" toward Allah is understood by scholars as sincere devotion and obedience, not literally advising Allah Himself.",
      "\"Naseehah\" toward the Qur'an includes learning it, acting upon it, and defending it from distortion.",
      "Naseehah toward the common Muslims includes wanting for them what one wants for oneself — directly echoing Hadith 13.",
    ],
  },
  {
    num: 8,
    title: "Fighting Until the Testimony of Faith",
    narrator: "Abdullah ibn Umar",
    source: "Bukhari & Muslim",
    arabic_text:
      "أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى",
    transliteration:
      "Umirtu an uqatilan-nasa hatta yashhadu an la ilaha illallahu wa anna Muhammadar-rasulullah, wa yuqimus-salah, wa yu'tuz-zakah, fa idha fa'alu dhalika 'asamu minni dima'ahum wa amwalahum illa bihaqqil-Islam, wa hisabuhum 'alallahi ta'ala",
    translation:
      "I have been commanded to fight the people until they testify that there is no god but Allah and that Muhammad is the Messenger of Allah, establish the prayer, and pay the zakah. If they do that, they have protected their blood and their wealth from me, except by the right of Islam, and their reckoning is with Allah, the Exalted.",
    lessons: [
      "This hadith concerns the specific historical context of the early Muslim community's conflicts, not a general license for aggression.",
      "Once someone outwardly professes Islam and its basic obligations, their life and property become protected under Islamic law.",
      "Judgment of a person's inner sincerity is left to Allah, not to other people.",
      "The \"right of Islam\" refers to due legal process under established rulings, not arbitrary treatment.",
      "Prayer and zakah are named here, alongside the testimony of faith, as the outward markers by which a person's protection under Islamic law is established.",
      "This hadith is a foundational text scholars turn to when discussing the legal boundaries between combatants and protected non-combatants in Islamic jurisprudence.",
    ],
  },
  {
    num: 9,
    title: "Do What You Are Able",
    narrator: "Abu Hurairah",
    source: "Bukhari & Muslim",
    arabic_text:
      "مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ، وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ",
    transliteration:
      "Ma nahaytukum 'anhu fajtanibuh, wa ma amartukum bihi fa'tu minhu mastata'tum, fa innama ahlakal-ladhina min qablikum kathratu masa'ilihim, wakhtilafuhum 'ala anbiya'ihim",
    translation:
      "Whatever I have forbidden you, avoid it. Whatever I have commanded you, do as much of it as you are able. It was only the abundance of their questions and their disputing with their prophets that destroyed those who came before you.",
    lessons: [
      "Prohibitions require complete avoidance; commands are to be fulfilled to the best of one's ability.",
      "Islam does not burden a person beyond their genuine capacity.",
      "Excessive, unnecessary questioning of religious rulings can lead a community astray.",
      "Obedience to what the Prophet ﷺ commanded is central, but proportional to real ability, not absolute perfection.",
      "The asymmetry between the two instructions is deliberate: avoidance of harm is treated as more urgent and less negotiable than the pursuit of every possible good.",
      "This hadith is often cited as a caution against unnecessary hypothetical questioning that manufactures difficulty where none previously existed.",
      "The example of earlier nations destroyed by excessive questioning links this teaching directly to accountability and the fate of past communities.",
    ],
  },
  {
    num: 10,
    title: "Allah Is Pure and Accepts Only What Is Pure",
    narrator: "Abu Hurairah",
    source: "Muslim",
    arabic_text:
      "إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ، فَقَالَ تَعَالَى: {يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا}، وَقَالَ تَعَالَى: {يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ}، ثُمَّ ذَكَرَ الرَّجُلَ يُطِيلُ السَّفَرَ أَشْعَثَ أَغْبَرَ يَمُدُّ يَدَيْهِ إِلَى السَّمَاءِ: يَا رَبِّ يَا رَبِّ، وَمَطْعَمُهُ حَرَامٌ، وَمَشْرَبُهُ حَرَامٌ، وَمَلْبَسُهُ حَرَامٌ، وَغُذِيَ بِالْحَرَامِ، فَأَنَّى يُسْتَجَابُ لِذَلِكَ؟",
    transliteration:
      "Innallaha ta'ala tayyibun la yaqbalu illa tayyiba, wa innallaha amaral-mu'minina bima amara bihil-mursalin, fa qala ta'ala: ya ayyuhar-rusulu kulu minat-tayyibati wa'malu saliha, wa qala ta'ala: ya ayyuhal-ladhina amanu kulu min tayyibati ma razaqnakum, thumma dhakarar-rajula yutilus-safara ash'atha aghbara yamuddu yadayhi ilas-sama'...",
    translation:
      "Allah is pure and accepts only what is pure. And Allah has commanded the believers with what He commanded the messengers, saying, \"O messengers, eat of the good, lawful things and act righteously,\" and, \"O you who believe, eat of the good, lawful things We have provided you.\" Then he mentioned a man who, after a long journey, is disheveled and covered in dust, raising his hands to the sky and saying, \"O Lord, O Lord!\" — while his food is unlawful, his drink is unlawful, his clothing is unlawful, and he has been nourished on the unlawful. So how could such a person's supplication possibly be answered?",
    lessons: [
      "Consuming lawful (halal) sustenance is directly linked to whether a person's worship and du'a are accepted.",
      "Outward signs of devotion, like raised hands in supplication, do not guarantee acceptance if the means of one's provision are impure.",
      "Believers are held to the same standard of purity in provision as the prophets were, according to the two verses cited.",
      "This hadith links ethics in earning a livelihood directly to spiritual outcomes.",
      "The vivid image of the disheveled, weary traveler is deliberately chosen — every visible sign suggests a supplication that should be accepted, except the source of his sustenance.",
      "This hadith is a foundational text for the Islamic principle that the means by which something is acquired affects the spiritual value of what is done with it afterward.",
    ],
  },
  {
    num: 11,
    title: "Leave What Makes You Doubt",
    narrator: "Al-Hasan ibn Ali",
    source: "Tirmidhi",
    arabic_text: "دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ",
    transliteration: "Da' ma yaribuka ila ma la yaribuk",
    translation:
      "Leave what makes you uneasy for what does not make you uneasy.",
    lessons: [
      "When uncertain between two options, choose the one that leaves no unease in the heart.",
      "This is a short, memorable expansion of the caution taught in Hadith 6 about doubtful matters.",
      "Certainty and peace of mind in a decision are signs it aligns with what is correct.",
      "This principle is widely applied in personal, financial, and worship-related decisions.",
      "The hadith is phrased as direct personal counsel, memorized word-for-word by al-Hasan ibn 'Ali from the Prophet ﷺ, giving it a particularly intimate, practical tone.",
      "This short saying is often paired with the Prophet's ﷺ broader teaching that the heart itself can sense what is not right, even before a clear ruling is known.",
    ],
  },
  {
    num: 12,
    title: "Leaving What Does Not Concern You",
    narrator: "Abu Hurairah",
    source: "Tirmidhi",
    arabic_text: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    transliteration: "Min husni islamil-mar'i tarkuhu ma la ya'nih",
    translation:
      "Part of the excellence of a person's Islam is his leaving alone what does not concern him.",
    lessons: [
      "A believer's time and attention are best spent on matters of genuine relevance to them.",
      "Avoiding unnecessary interference in others' affairs reflects maturity and good character.",
      "This includes idle speech, gossip, and preoccupation with matters outside one's responsibility.",
      "Focusing on one's own religious and worldly obligations is itself a sign of good faith.",
      "The hadith frames this restraint not as a minor social nicety but as part of the \"husn\" — the excellence and completeness — of a person's Islam.",
      "This principle complements Hadith 15's teaching to \"speak good or remain silent,\" since much unnecessary speech arises from meddling in what does not concern oneself.",
    ],
  },
  {
    num: 13,
    title: "Loving for Your Brother What You Love for Yourself",
    narrator: "Anas ibn Malik",
    source: "Bukhari & Muslim",
    arabic_text:
      "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    transliteration:
      "La yu'minu ahadukum hatta yuhibba li akhihi ma yuhibbu linafsih",
    translation:
      "None of you [truly] believes until he loves for his brother what he loves for himself.",
    lessons: [
      "Genuine faith is reflected outwardly in how a person treats and wishes for others.",
      "Envy and selfish rivalry stand in direct opposition to this standard of brotherhood.",
      "The bond of faith is meant to override narrow self-interest in one's dealings with others.",
      "This principle applies to worldly good (rizq, success) as much as to religious good.",
      "The negation \"la yu'minu\" (he does not [truly] believe) is a strong rhetorical device used elsewhere in the Sunnah to describe a deficiency in complete faith, not an exit from Islam altogether.",
      "This hadith is frequently linked with Hadith 35's list of prohibited social ills — envy, hatred, contempt — as its practical opposite and antidote.",
    ],
  },
  {
    num: 14,
    title: "The Sanctity of a Muslim's Blood",
    narrator: "Abdullah ibn Mas'ud",
    source: "Bukhari & Muslim",
    arabic_text:
      "لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ",
    transliteration:
      "La yahillu damu imri'in Muslimin yashhadu an la ilaha illallahu wa anni rasulullahi illa bi ihda thalath: ath-thayyibuz-zani, wan-nafsu bin-nafs, wat-tariku lideenihil-mufariqu lil-jama'ah",
    translation:
      "It is not lawful to take the life of a Muslim who testifies that there is no god but Allah and that I am the Messenger of Allah, except in one of three cases: a previously-married person who commits adultery, a life for a life, or one who abandons his religion and separates from the community.",
    lessons: [
      "Human life in Islam carries great sanctity, protected except under specific, legally defined circumstances.",
      "These matters fall under the authority of proper Islamic legal process, not private vigilante action.",
      "This hadith outlines the classical categories under which capital punishment applies in Islamic law.",
      "Understanding this hadith requires its proper legal, judicial, and historical context, not a surface reading.",
      "That only three narrow, clearly defined exceptions are named underscores how comprehensively Islam protects the default sanctity of a believing life.",
      "The application of any of these three categories in practice requires establishment through a recognized Islamic legal authority, not individual interpretation.",
    ],
  },
  {
    num: 15,
    title: "Speak Good or Remain Silent",
    narrator: "Abu Hurairah",
    source: "Bukhari & Muslim",
    arabic_text:
      "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    transliteration:
      "Man kana yu'minu billahi wal-yawmil-akhiri falyaqul khayran aw liyasmut, wa man kana yu'minu billahi wal-yawmil-akhiri falyukrim jarah, wa man kana yu'minu billahi wal-yawmil-akhiri falyukrim dayfah",
    translation:
      "Whoever believes in Allah and the Last Day, let him speak good or remain silent. Whoever believes in Allah and the Last Day, let him honor his neighbor. Whoever believes in Allah and the Last Day, let him honor his guest.",
    lessons: [
      "Belief in Allah and the Hereafter should visibly shape everyday speech and conduct.",
      "Silence is preferable to speech that carries no benefit or that causes harm.",
      "Honoring guests and neighbors is directly tied to the strength of one's faith.",
      "This hadith links three distinct social manners to the same root: genuine belief.",
      "Each of the three instructions is prefaced by the same conditional clause, deliberately repeated, to tie every act of good manners directly back to a person's professed faith.",
      "The pairing of speech, neighborliness, and hospitality shows that Islamic character is measured as much in the home and street as in the mosque.",
    ],
  },
  {
    num: 16,
    title: "Do Not Become Angry",
    narrator: "Abu Hurairah",
    source: "Bukhari",
    arabic_text:
      "لَا تَغْضَبْ. فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ",
    transliteration:
      "La taghdab. Fa raddada miraran, qala: la taghdab",
    translation:
      "A man asked the Prophet ﷺ for advice, and he said, \"Do not become angry.\" The man repeated his request several times, and each time he said, \"Do not become angry.\"",
    lessons: [
      "Controlling anger is treated as comprehensive, foundational advice covering much of good character.",
      "The repetition of the same answer emphasizes how central this single trait is.",
      "Anger management is not merely a personality trait — it is a matter of religious discipline.",
      "Strength, in the Prophetic sense, is control over oneself in moments of anger, not physical dominance.",
      "That the man kept asking for more advice and kept receiving the same single answer shows the Prophet ﷺ judged this one trait sufficient to address the root of the man's concern.",
      "Commentators note that \"do not become angry\" is best understood as controlling the response to anger, since the initial feeling itself is a natural human reaction outside full control.",
    ],
  },
  {
    num: 17,
    title: "Excellence in All Things",
    narrator: "Shaddad ibn Aws",
    source: "Muslim",
    arabic_text:
      "إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ",
    transliteration:
      "Innallaha kataba al-ihsana 'ala kulli shay', fa idha qataltum fa ahsinul-qitlah, wa idha dhabahtum fa ahsinudh-dhibhah, wal yuhidd ahadukum shafratahu wal yurih dhabihatah",
    translation:
      "Truly Allah has prescribed excellence (ihsan) in all things. So if you kill, kill well; and if you slaughter, slaughter well. Let each of you sharpen his blade, and let him spare his slaughtered animal any unnecessary suffering.",
    lessons: [
      "Excellence and care are expected even in matters that may seem harsh, like slaughtering an animal.",
      "This hadith is a foundational text for Islamic teachings on animal welfare.",
      "Ihsan (doing things well and with excellence) is a standard meant to apply broadly, not narrowly to worship alone.",
      "Mercy and consideration should accompany even necessary and permissible acts.",
      "That ihsan is applied to something as severe as the taking of life shows the scope of the principle — if excellence is required even here, it is required everywhere.",
      "The specific instruction to sharpen the blade beforehand is a practical, actionable expression of mercy, not merely an abstract sentiment.",
    ],
  },
  {
    num: 18,
    title: "Fear Allah Wherever You Are",
    narrator: "Abu Dharr and Mu'adh ibn Jabal",
    source: "Tirmidhi",
    arabic_text:
      "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    transliteration:
      "Ittaqillaha haythuma kunt, wa atbi'is-sayyi'atal-hasanata tamhuha, wa khaliqin-nasa bikhuluqin hasan",
    translation:
      "Fear Allah wherever you are. Follow up a bad deed with a good deed, and it will erase it. And treat people with good character.",
    lessons: [
      "Taqwa (God-consciousness) is meant to be constant, in every place and circumstance.",
      "A sincere good deed can outweigh or erase the effect of a previous bad deed.",
      "Good character towards other people is placed alongside taqwa and repentance as core advice.",
      "This hadith combines three pieces of concise, practical guidance for daily life.",
      "\"Wherever you are\" specifically counters the tendency to relax one's God-consciousness when alone or unseen by others.",
      "The three instructions move outward in scope: from the private relationship with Allah, to correcting one's own record, to one's public treatment of others.",
    ],
  },
  {
    num: 19,
    title: "Be Mindful of Allah, and He Will Protect You",
    narrator: "Abdullah ibn Abbas",
    source: "Tirmidhi",
    arabic_text:
      "يَا غُلَامُ، إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ، وَاعْلَمْ أَنَّ الْأُمَّةَ لَوِ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَكَ، وَلَوِ اجْتَمَعُوا عَلَى أَنْ يَضُرُّوكَ بِشَيْءٍ لَمْ يَضُرُّوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ عَلَيْكَ، رُفِعَتِ الْأَقْلَامُ وَجَفَّتِ الصُّحُفُ",
    transliteration:
      "Ya ghulam, inni u'allimuka kalimat: ihfazillaha yahfazk, ihfazillaha tajidhu tujahak, idha sa'alta fas'alillah, wa idhas-ta'anta fasta'in billah, wa'lam annal-ummata lawij-tama'at 'ala an yanfa'uka bishay'in lam yanfa'uka illa bishay'in qad katabahullahu lak...",
    translation:
      "O young man, I will teach you some words: Be mindful of Allah, and He will protect you. Be mindful of Allah, and you will find Him before you. If you ask, ask of Allah; and if you seek help, seek help from Allah. And know that if the whole nation gathered together to benefit you with something, they could not benefit you except with something Allah had already written for you; and if they gathered together to harm you with something, they could not harm you except with something Allah had already written against you. The pens have been lifted and the pages have dried.",
    lessons: [
      "A person's relationship with Allah directly shapes the protection and support they experience.",
      "All requests for help and provision should ultimately be directed to Allah.",
      "True reliance (tawakkul) on Allah frees the heart from excessive fear of other people's power.",
      "What is decreed for a person cannot be altered by the collective effort of all creation.",
      "The phrase \"the pens have been lifted and the pages have dried\" refers to the finality of the divine decree already recorded, used here to instill calm certainty rather than anxious striving against fate.",
      "That this counsel was given to a young companion (Ibn 'Abbas) shows the Prophet's ﷺ concern for grounding the youth early in matters of tawakkul and reliance on Allah alone.",
      "The instruction to \"be mindful of Allah\" twice, before either promise is stated, teaches that the servant's own mindfulness comes first, and Allah's protection and nearness follow it.",
    ],
  },
  {
    num: 20,
    title: "If You Feel No Shame, Do As You Wish",
    narrator: "Abu Mas'ud al-Ansari",
    source: "Bukhari",
    arabic_text:
      "إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحْيِ فَاصْنَعْ مَا شِئْتَ",
    transliteration:
      "Inna mimma adrakan-nasu min kalamin-nubuwwatil-ula: idha lam tastahi fasna' ma shi't",
    translation:
      "Among what people have retained from the words of earlier prophethood is: \"If you feel no shame, then do as you wish.\"",
    lessons: [
      "Haya (modesty and shame before wrongdoing) acts as an internal restraint on bad conduct.",
      "The statement functions as both a warning and, read carefully, as encouragement toward modesty.",
      "Loss of natural shame often precedes a decline in overall good character.",
      "This teaching is described as common to earlier prophetic traditions as well as Islam.",
      "Scholars explain the statement two ways: as a stern warning (whoever has no shame will indeed do whatever he wishes, unrestrained), or as an implicit command (if an act would not embarrass you before Allah or people, it is permissible) — both readings reinforce haya as the internal gatekeeper of conduct.",
      "That this saying is attributed to \"earlier prophethood\" underscores that modesty as a moral restraint is not unique to this final message but a continuous thread across revealed religion.",
    ],
  },
  {
    num: 21,
    title: 'Say "I Believe," Then Be Steadfast',
    narrator: "Sufyan ibn Abdullah",
    source: "Muslim",
    arabic_text: "قُلْ: آمَنْتُ بِاللَّهِ، ثُمَّ اسْتَقِمْ",
    transliteration: "Qul: amantu billahi, thummas-taqim",
    translation:
      'Say, "I believe in Allah," then remain steadfast.',
    lessons: [
      "Belief is only the starting point — consistency in practice is what completes it.",
      "Steadfastness (istiqamah) is often harder, and more valuable, than the initial declaration of faith.",
      "This hadith was given as a comprehensive piece of advice the Companion could hold onto for life.",
      "Consistency over time matters more than short bursts of intense but temporary devotion.",
      "The Companion specifically asked for a single, all-encompassing statement he would never need to ask anyone else about again — showing the Prophet ﷺ judged istiqamah sufficient to cover a lifetime of guidance.",
      "This short hadith is often read alongside the Qur'anic verse describing the angels' reassurance to those who say \"Our Lord is Allah\" and then remain steadfast (Fussilat, 41:30).",
    ],
  },
  {
    num: 22,
    title: "The Man Who Asked About Salvation",
    narrator: "Abu Abdullah Jabir (also given as Abu Amr/Abu Amrah) ibn Abdullah",
    source: "Muslim",
    arabic_text:
      "أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ",
    transliteration:
      "Ara'ayta idha sallaytul-maktubat, wa sumtu Ramadan, wa ahlaltul-halal, wa harramtul-haram, wa lam azid 'ala dhalika shay'an, a'adkhulul-jannah? Qala: na'am",
    translation:
      'A man asked the Prophet ﷺ: "Tell me — if I pray the five obligatory prayers, fast Ramadan, treat what is lawful as lawful and what is unlawful as unlawful, and add nothing further to that, will I enter Paradise?" The Prophet ﷺ said, "Yes."',
    lessons: [
      "Fulfilling the core obligations of Islam sincerely is, by itself, sufficient for salvation.",
      "Extra voluntary acts of worship add virtue but are not strictly required for entering Paradise.",
      "This hadith offers reassurance and simplicity against unnecessary religious anxiety.",
      "Respecting the boundary between halal and haram is treated as a core, non-negotiable obligation.",
      "The man's phrasing — treating the lawful as lawful and the unlawful as unlawful — makes correct belief about halal and haram itself, not only outward practice, part of the standard being asked about.",
      "This hadith is often cited to counter religious scrupulousness that treats only extensive voluntary worship as a marker of true faith.",
    ],
  },
  {
    num: 23,
    title: "Purity Is Half of Faith",
    narrator: "Abu Malik al-Harith ibn Asim al-Ash'ari",
    source: "Muslim",
    arabic_text:
      "الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ - أَوْ تَمْلَأُ - مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ، كُلُّ النَّاسِ يَغْدُو، فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا",
    transliteration:
      "At-tuhuru shatrul-iman, wal-hamdu lillahi tamla'ul-mizan, wa subhanallahi wal-hamdu lillahi tamla'ani - aw tamla'u - ma baynas-samawati wal-ard, was-salatu nur, was-sadaqatu burhan, was-sabru diya', wal-Qur'anu hujjatun laka aw 'alayk, kullun-nasi yaghdu, fa bai'un nafsahu fa mu'tiquha aw mubiquha",
    translation:
      "Purity is half of faith. \"Al-hamdu lillah\" fills the scale, and \"SubhanAllah\" together with \"Al-hamdu lillah\" fill up what is between the heavens and the earth. Prayer is a light; charity is a proof; patience is a radiance; and the Qur'an is either an argument for you or against you. Every person goes out in the morning and sells himself, either freeing it or ruining it.",
    lessons: [
      "Physical and spiritual purity are closely linked in the practice of faith.",
      "Simple remembrance phrases (dhikr) carry immense weight in the sight of Allah.",
      "The Qur'an is a source of guidance that will either testify for or against a person on the Day of Judgment.",
      "Patience is described as a source of light, reflecting its central role in the believer's character.",
      "Charity is described as a \"burhan,\" proof — because giving away wealth one loves is itself tangible evidence of the sincerity of one's faith.",
      "The closing image of every person \"selling himself\" each morning frames each day as a fresh transaction in which a person either purchases their own freedom through good deeds or their own ruin through neglect.",
    ],
  },
  {
    num: 24,
    title: "Allah Has Forbidden Oppression for Himself",
    narrator: "Abu Dharr, from the Prophet ﷺ, who related it from Allah (hadith qudsi)",
    source: "Muslim",
    arabic_text:
      "يَا عِبَادِي، إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي، وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا، يَا عِبَادِي، كُلُّكُمْ ضَالٌّ إِلَّا مَنْ هَدَيْتُهُ، فَاسْتَهْدُونِي أَهْدِكُمْ، يَا عِبَادِي، كُلُّكُمْ جَائِعٌ إِلَّا مَنْ أَطْعَمْتُهُ، فَاسْتَطْعِمُونِي أُطْعِمْكُمْ، يَا عِبَادِي، كُلُّكُمْ عَارٍ إِلَّا مَنْ كَسَوْتُهُ، فَاسْتَكْسُونِي أَكْسُكُمْ، يَا عِبَادِي، إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ، يَا عِبَادِي، إِنَّكُمْ لَنْ تَبْلُغُوا ضَرِّي فَتَضُرُّونِي، وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي، يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا، يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا، يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ فَسَأَلُونِي فَأَعْطَيْتُ كُلَّ إِنْسَانٍ مَسْأَلَتَهُ مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إِلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ، يَا عِبَادِي، إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ ثُمَّ أُوَفِّيكُمْ إِيَّاهَا، فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدِ اللَّهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ",
    transliteration:
      "Ya 'ibadi, inni harramtudh-dhulma 'ala nafsi, wa ja'altuhu baynakum muharraman fala tazalamu, ya 'ibadi, kullukum dallun illa man hadaytuhu, fastahduni ahdikum, ya 'ibadi, kullukum ja'i'un illa man at'amtuhu, fastat'imuni ut'imkum...",
    translation:
      "O My servants, I have forbidden oppression for Myself, and I have made it forbidden among you, so do not oppress one another. O My servants, all of you are astray except those I have guided, so seek guidance from Me and I will guide you. O My servants, all of you are hungry except those I have fed, so seek food from Me and I will feed you. O My servants, all of you are naked except those I have clothed, so seek clothing from Me and I will clothe you. O My servants, you sin by night and by day, and I forgive all sins, so seek forgiveness from Me and I will forgive you. O My servants, you will never reach a point of harming Me, so as to harm Me, nor will you ever reach a point of benefiting Me, so as to benefit Me. O My servants, if the first of you and the last of you, your humans and your jinn, were all as pious as the most pious heart of any single one of you, that would not increase My dominion in the slightest. O My servants, if the first of you and the last of you, your humans and your jinn, were all as wicked as the most wicked heart of any single one of you, that would not decrease My dominion in the slightest. O My servants, if the first of you and the last of you, your humans and your jinn, were to stand together upon one plain and ask of Me, and I gave every person what he asked, that would not decrease what I possess, any more than a needle decreases the sea when dipped into it. O My servants, it is only your deeds that I record for you, and then repay you for in full — so let whoever finds good praise Allah, and let whoever finds other than that blame no one but himself.",
    lessons: [
      "This lengthy hadith qudsi (a statement of Allah conveyed through the Prophet ﷺ, distinct from the Qur'an) covers many core beliefs at once.",
      "Oppression between people is something Allah has expressly forbidden and taken seriously, having forbidden it for Himself first.",
      "All guidance, sustenance, clothing, and forgiveness ultimately come from Allah alone, and are to be sought from Him directly.",
      "Human deeds, however great in number or severity, do not diminish Allah's dominion or add to it in the slightest.",
      "The image of a needle dipped into the sea illustrates the vast, incomparable scale of Allah's giving relative to any conceivable human request.",
      "The closing statement — that a person finding good should praise Allah, and one finding otherwise should blame only himself — places ultimate responsibility for outcomes squarely on human deeds recorded and repaid, not on any deficiency in Allah's generosity.",
      "The repeated address \"O My servants\" across each statement reflects a tone of direct, personal address from Allah to His creation, unusual in its intimacy even among the hadith qudsi.",
    ],
  },
  {
    num: 25,
    title: "Every Good Deed Is Charity",
    narrator: "Abu Dharr",
    source: "Muslim",
    arabic_text:
      "قَالُوا: يَا رَسُولَ اللَّهِ، ذَهَبَ أَهْلُ الدُّثُورِ بِالْأُجُورِ، يُصَلُّونَ كَمَا نُصَلِّي، وَيَصُومُونَ كَمَا نَصُومُ، وَيَتَصَدَّقُونَ بِفُضُولِ أَمْوَالِهِمْ. قَالَ: أَوَلَيْسَ قَدْ جَعَلَ اللَّهُ لَكُمْ مَا تَصَّدَّقُونَ؟ إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً، وَأَمْرٌ بِالْمَعْرُوفِ صَدَقَةٌ، وَنَهْيٌ عَنِ الْمُنْكَرِ صَدَقَةٌ، وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ. قَالُوا: يَا رَسُولَ اللَّهِ، أَيَأْتِي أَحَدُنَا شَهْوَتَهُ وَيَكُونُ لَهُ فِيهَا أَجْرٌ؟ قَالَ: أَرَأَيْتُمْ لَوْ وَضَعَهَا فِي حَرَامٍ، أَكَانَ عَلَيْهِ فِيهَا وِزْرٌ؟ فَكَذَلِكَ إِذَا وَضَعَهَا فِي الْحَلَالِ كَانَ لَهُ أَجْرٌ",
    transliteration:
      "Qalu: Ya Rasulallah, dhahaba ahlud-duthuri bil-ujur, yusalluna kama nusalli, wa yasumuna kama nasum, wa yatasaddaquna bi fuduli amwalihim. Qala: awalaysa qad ja'alallahu lakum ma tassaddaqun? Inna bikulli tasbihatin sadaqah...",
    translation:
      'The Companions said, "O Messenger of Allah, the wealthy have taken all the reward — they pray as we pray, they fast as we fast, and they give charity from the surplus of their wealth." He said, "Has Allah not appointed for you means by which you too can give charity? Truly, every tasbeeh is a charity, every takbeer is a charity, every tahmeed is a charity, every tahleel is a charity, enjoining good is a charity, forbidding wrong is a charity, and in the intimate relations of one of you [with his spouse] there is a charity." They said, "O Messenger of Allah, does one of us fulfill his desire and still be rewarded for it?" He said, "Consider — if he were to place it in something unlawful, would he not be sinning? So likewise, if he places it in what is lawful, he has a reward."',
    lessons: [
      "Charity is not limited to money — words, actions, and even permissible pleasures can carry the reward of charity.",
      "This teaching removes any excuse a person without wealth might have for missing out on this virtue.",
      "Even lawful marital intimacy is described as a rewarded act when approached with the right intention and within what Allah has made lawful.",
      "Simple remembrance of Allah throughout the day is accessible to everyone, regardless of means.",
      "The Companions' concern reflects a natural human worry about fairness in reward — the Prophet's ﷺ answer reframes wealth as only one of many paths to the same reward, not a privileged shortcut.",
      "The logic used to justify reward for lawful desire — that its unlawful counterpart carries sin — establishes a broader principle: actions take their moral value from whether they are placed in what is lawful or unlawful.",
    ],
  },
  {
    num: 26,
    title: "Every Joint Owes a Charity",
    narrator: "Abu Hurairah",
    source: "Bukhari & Muslim",
    arabic_text:
      "كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ، كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ: تَعْدِلُ بَيْنَ اثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيطُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ",
    transliteration:
      "Kullu sulama minan-nasi 'alayhi sadaqah, kulla yawmin tatlu'u fihish-shams: ta'dilu bayna ithnayni sadaqah, wa tu'inur-rajula fi dabbatihi fatahmiluhu 'alayha aw tarfa'u lahu 'alayha mata'ahu sadaqah, wal-kalimatut-tayyibatu sadaqah, wa bikulli khutwatin tamshiha ilas-salati sadaqah, wa tumitul-adha 'anit-tariqi sadaqah",
    translation:
      "Every joint of a person owes a charity, on every day the sun rises: judging justly between two people is a charity; helping a man with his mount — lifting him onto it, or lifting his belongings onto it — is a charity; a good word is a charity; every step you take towards the prayer is a charity; and removing a harmful object from the road is a charity.",
    lessons: [
      "Every part of the body has a form of \"charity\" it can perform daily, even without money.",
      "Small, everyday acts of kindness and courtesy are all counted as forms of reward-bearing charity.",
      "Removing harm from a public path is explicitly praised, showing the value of communal responsibility.",
      "Justice in resolving disputes between people is elevated to the status of an act of charity.",
      "The phrase \"every day the sun rises\" establishes this as a daily, recurring obligation upon every joint of the body, not a one-time act.",
      "This hadith is closely related to Hadith 25, both teaching that acts of charity extend far beyond financial giving into ordinary daily conduct.",
    ],
  },
  {
    num: 27,
    title: "Righteousness Is Good Character",
    narrator: "An-Nawwas ibn Sam'an",
    source: "Muslim",
    arabic_text:
      "الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
    transliteration:
      "Al-birru husnul-khuluq, wal-ithmu ma haka fi sadrika wa karihta an yattali'a 'alayhin-nas",
    translation:
      "Righteousness is good character, and sin is what wavers in your heart and which you dislike people finding out about.",
    lessons: [
      "Good character is placed at the very center of what defines righteousness.",
      "A believer's own conscience often signals when something is wrong, even before a ruling is sought.",
      "Discomfort about others discovering an action can itself be a sign the action is sinful.",
      "This is a practical, self-reflective standard a person can apply to their own conduct daily.",
      "The word \"haka\" (wavers/churns) describes an unsettled feeling in the chest, connecting this hadith directly to the same restless unease described by the word \"rayb\" elsewhere in the Sunnah.",
      "This concise definition of birr (righteousness) sits alongside the far more detailed one in Surat al-Baqarah (2:177), the two complementing each other as short and expanded statements of the same standard.",
    ],
  },
  {
    num: 28,
    title: "Hold Fast to the Sunnah",
    narrator: "Al-Irbad ibn Sariyah",
    source: "Abu Dawud & Tirmidhi",
    arabic_text:
      "وَعَظَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَوْعِظَةً وَجِلَتْ مِنْهَا الْقُلُوبُ، وَذَرَفَتْ مِنْهَا الْعُيُونُ، فَقُلْنَا: يَا رَسُولَ اللَّهِ، كَأَنَّ هَذِهِ مَوْعِظَةُ مُوَدِّعٍ فَأَوْصِنَا. قَالَ: أُوصِيكُمْ بِتَقْوَى اللَّهِ، وَالسَّمْعِ وَالطَّاعَةِ، وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ، فَإِنَّهُ مَنْ يَعِشْ مِنْكُمْ فَسَيَرَى اخْتِلَافًا كَثِيرًا، فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُورِ، فَإِنَّ كُلَّ بِدْعَةٍ ضَلَالَةٌ",
    transliteration:
      "Wa'azana Rasulullahi sallallahu 'alayhi wa sallam maw'izatan wajilat minhal-qulub, wa dharafat minhal-'uyun, fa qulna: Ya Rasulallah, ka'anna hadhihi maw'izatu muwaddi'in fa awsina. Qala: usikum bitaqwallahi was-sam'i wat-ta'ah, wa in ta'ammara 'alaykum 'abd...",
    translation:
      'The Messenger of Allah ﷺ gave us a sermon that made our hearts fearful and our eyes tearful, so we said, "O Messenger of Allah, it is as though this is a farewell sermon, so counsel us." He said, "I counsel you to fear Allah, and to hear and obey, even if a slave is placed in authority over you, for whoever among you lives long will see great disagreement. So hold fast to my Sunnah and the Sunnah of the rightly-guided caliphs after me — cling to it and bite onto it firmly with your molars. And beware of newly invented matters, for every innovation is misguidance."',
    lessons: [
      "Following legitimate leadership, whatever their social status, is emphasized alongside taqwa.",
      "The Prophet ﷺ predicted future disagreement within the Muslim community, preparing them for it in advance.",
      "The Sunnah of the Prophet ﷺ and his rightly-guided successors is the reference point during confusion.",
      "This hadith reinforces the warning against religious innovation already introduced in Hadith 5.",
      "The image of \"biting onto it with the molars\" conveys the firmest possible grip — not casual familiarity with the Sunnah but tenacious, deliberate holding on to it under pressure.",
      "The Companions' visible emotional reaction — fearful hearts and tearful eyes — shows how seriously the early community received warnings of future division and the importance placed on this counsel.",
      "This hadith establishes obedience to legitimate rulers as compatible with, and even required alongside, personal piety, rather than in tension with it.",
    ],
  },
  {
    num: 29,
    title: "Deeds That Lead to Paradise",
    narrator: "Mu'adh ibn Jabal",
    source: "Tirmidhi",
    arabic_text:
      "قُلْتُ: يَا رَسُولَ اللَّهِ، أَخْبِرْنِي بِعَمَلٍ يُدْخِلُنِي الْجَنَّةَ، وَيُبَاعِدُنِي عَنِ النَّارِ. قَالَ: لَقَدْ سَأَلْتَ عَنْ عَظِيمٍ، وَإِنَّهُ لَيَسِيرٌ عَلَى مَنْ يَسَّرَهُ اللَّهُ عَلَيْهِ: تَعْبُدُ اللَّهَ لَا تُشْرِكُ بِهِ شَيْئًا، وَتُقِيمُ الصَّلَاةَ، وَتُؤْتِي الزَّكَاةَ، وَتَصُومُ رَمَضَانَ، وَتَحُجُّ الْبَيْتَ. ثُمَّ قَالَ: أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ مِنْ جَوْفِ اللَّيْلِ. ثُمَّ تَلَا: {تَتَجَافَى جُنُوبُهُمْ عَنِ الْمَضَاجِعِ} حَتَّى بَلَغَ {يَعْمَلُونَ}. ثُمَّ قَالَ: أَلَا أُخْبِرُكَ بِرَأْسِ الْأَمْرِ، وَعَمُودِهِ، وَذِرْوَةِ سَنَامِهِ؟ قُلْتُ: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ، وَذِرْوَةُ سَنَامِهِ الْجِهَادُ. ثُمَّ قَالَ: أَلَا أُخْبِرُكَ بِمِلَاكِ ذَلِكَ كُلِّهِ؟ قُلْتُ: بَلَى يَا رَسُولَ اللَّهِ. فَأَخَذَ بِلِسَانِهِ، قَالَ: كُفَّ عَلَيْكَ هَذَا. فَقُلْتُ: يَا نَبِيَّ اللَّهِ، وَإِنَّا لَمُؤَاخَذُونَ بِمَا نَتَكَلَّمُ بِهِ؟ فَقَالَ: ثَكِلَتْكَ أُمُّكَ يَا مُعَاذُ، وَهَلْ يَكُبُّ النَّاسَ فِي النَّارِ عَلَى وُجُوهِهِمْ - أَوْ عَلَى مَنَاخِرِهِمْ - إِلَّا حَصَائِدُ أَلْسِنَتِهِمْ؟",
    transliteration:
      "Qultu: Ya Rasulallah, akhbirni bi'amalin yudkhiluni al-jannata wa yuba'iduni 'anin-nar. Qala: laqad sa'alta 'an 'azim, wa innahu la yasirun 'ala man yassarahullahu 'alayh: ta'budullaha la tushriku bihi shay'a, wa tuqimus-salah, wa tu'tiz-zakah, wa tasumu Ramadan, wa tahujjul-bayt...",
    translation:
      'I said, "O Messenger of Allah, tell me of an act that will admit me to Paradise and keep me far from the Fire." He said, "You have asked about something great, yet it is easy for the one for whom Allah makes it easy: worship Allah, not associating anything with Him; establish the prayer; give the zakah; fast Ramadan; and make pilgrimage to the House." Then he said, "Shall I not guide you to the gates of goodness? Fasting is a shield; charity extinguishes sin as water extinguishes fire; and a man\'s prayer in the depths of the night [is also a gate of goodness]." Then he recited, "Their sides forsake their beds..." up to "...they used to do" [Qur\'an, as-Sajdah 32:16-17]. Then he said, "Shall I not tell you of the head of the matter, its pillar, and its highest point?" I said, "Yes indeed, O Messenger of Allah." He said, "The head of the matter is Islam; its pillar is the prayer; and its highest point is jihad." Then he said, "Shall I not tell you of that which governs all of this?" I said, "Yes indeed, O Messenger of Allah." So he took hold of his own tongue and said, "Restrain this." I said, "O Prophet of Allah, will we really be held accountable for what we say?" He said, "May your mother be bereft of you, Mu\'adh! Is there anything that topples people face-first — or on their noses — into the Fire, other than the harvests of their own tongues?"',
    lessons: [
      "Prayer is described as the structural \"pillar\" holding up the entire practice of Islam.",
      "Controlling one's speech is highlighted as unusually significant for a person's ultimate fate.",
      "Jihad, in its fullest sense of struggle and striving, is placed at the peak of religious excellence.",
      "The hadith moves from general worship, to specific gates of extra goodness, to the structural framework of the religion, and finally to a single practical warning about the tongue.",
      "The metaphor of Islam as a tent — head, central pillar, and highest point — gives a vivid, structural image for how the different levels of the religion relate to one another.",
      "The Prophet's ﷺ closing rebuke to Mu'adh (\"may your mother be bereft of you\") is an idiomatic expression of astonishment, not a literal curse, used to emphasize the gravity of underestimating the tongue's danger.",
      "The recited verse from Surat as-Sajdah, describing those who rise from their beds at night to worship, directly illustrates the \"gate of goodness\" of voluntary night prayer just mentioned.",
    ],
  },
  {
    num: 30,
    title: "The Boundaries Allah Has Set",
    narrator: "Abu Tha'labah al-Khushani",
    source: "Daraqutni",
    arabic_text:
      "إِنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوا عَنْهَا",
    transliteration:
      "Innallaha ta'ala farada fara'ida fala tudayyi'uha, wa hadda hududan fala ta'taduha, wa harrama ashya'a fala tantahikuha, wa sakata 'an ashya'a rahmatan lakum ghayra nisyanin fala tabhathu 'anha",
    translation:
      "Truly Allah has laid down obligatory duties, so do not neglect them; He has set boundaries, so do not overstep them; He has forbidden certain things, so do not violate them; and He has remained silent about certain other things, out of mercy for you, not through forgetfulness — so do not go searching into them.",
    lessons: [
      "The religion consists of clear obligations, clear boundaries, and clear prohibitions.",
      "Areas of silence in the texts are treated as a deliberate mercy, not an oversight.",
      "Excessively probing into matters left unaddressed can create unnecessary hardship.",
      "This hadith gives a framework for understanding the scope and limits of religious obligation.",
      "The explicit clarification \"not through forgetfulness\" preempts any assumption that Allah's silence on a matter reflects incompleteness in revelation rather than deliberate mercy.",
      "This hadith is often cited alongside Hadith 9's warning against excessive questioning, both cautioning against manufacturing unnecessary religious hardship.",
    ],
  },
  {
    num: 31,
    title: "Renounce the World and Allah Will Love You",
    narrator: "Sahl ibn Sa'd",
    source: "Ibn Majah",
    arabic_text:
      "جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللَّهِ، دُلَّنِي عَلَى عَمَلٍ إِذَا عَمِلْتُهُ أَحَبَّنِي اللَّهُ وَأَحَبَّنِي النَّاسُ. فَقَالَ: ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ",
    transliteration:
      "Ja'a rajulun ilan-Nabiyyi sallallahu 'alayhi wa sallam faqala: Ya Rasulallah, dulni 'ala 'amalin idha 'amiltuhu ahabbanillahu wa ahabbanin-nas. Faqala: izhad fid-dunya yuhibbakallah, wazhad fima 'indan-nasi yuhibbakan-nas",
    translation:
      'A man came to the Prophet ﷺ and said, "O Messenger of Allah, guide me to an act which, if I do it, Allah will love me and people will love me." He said, "Renounce the world, and Allah will love you; renounce what people possess, and people will love you."',
    lessons: [
      "Detachment from excessive worldly attachment draws a person closer to Allah's love.",
      "Not coveting what other people own tends to earn their respect and goodwill as well.",
      "Zuhd (asceticism) does not mean abandoning the world, but not being enslaved to it.",
      "This hadith links a single internal attitude to both divine and human relationships.",
      "The man's request for a single, comprehensive act — desiring both Allah's love and people's love — shows how thoroughly zuhd was regarded as answering both concerns at once.",
      "This hadith is closely connected to Hadith 40's counsel to live in this world \"as a stranger,\" both drawing from the same underlying theme of detachment.",
    ],
  },
  {
    num: 32,
    title: "No Harm and No Reciprocating Harm",
    narrator: "Abu Sa'id al-Khudri (and Ibn Abbas)",
    source: "Ibn Majah",
    arabic_text: "لَا ضَرَرَ وَلَا ضِرَارَ",
    transliteration: "La darara wa la dirar",
    translation:
      "There should be no harming of others, and no returning of harm with harm.",
    lessons: [
      "Causing harm to others is prohibited, as is retaliating with harm beyond what is just.",
      "This short principle became a major foundation in Islamic jurisprudence for civil disputes.",
      "It underlies rulings on neighborly relations, property rights, and communal responsibilities.",
      "Even a wronged party is not permitted to respond with disproportionate or unjust harm.",
      "The two words \"darar\" and \"dirar\" are understood by scholars to distinguish initiating harm from retaliating with harm, closing off both directions in a single, economical phrase.",
      "This hadith, despite its brevity, is treated as one of the five or six great legal maxims (al-qawa'id al-fiqhiyyah al-kubra) around which large areas of Islamic law are organized.",
    ],
  },
  {
    num: 33,
    title: "The Burden of Proof",
    narrator: "Abdullah ibn Abbas",
    source: "Bayhaqi",
    arabic_text:
      "لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ لَادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، وَلَكِنِ الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ",
    transliteration:
      "Law yu'tan-nasu bida'wahum lad-da'a rijalun amwala qawmin wa dima'ahum, wa lakinil-bayyinatu 'alal-mudda'i, wal-yaminu 'ala man ankar",
    translation:
      "If people were given [everything] according to their claims, some would claim the wealth and the lives of others. But the burden of proof is upon the claimant, and the oath is upon the one who denies.",
    lessons: [
      "Legal claims cannot simply be accepted at face value — evidence is required from the claimant.",
      "The default position favors the one being accused, unless proven otherwise.",
      "This principle is foundational to Islamic legal procedure and civil justice.",
      "It protects individuals from unfounded accusations regarding wealth or serious matters.",
      "The hadith directly anticipates the abuse that would result without an evidentiary standard, naming the seizure of wealth and life specifically as the risk being guarded against.",
      "This principle mirrors legal doctrines found in other legal traditions, and is one of the clearest examples of an established, transferable Islamic legal maxim in the collection.",
    ],
  },
  {
    num: 34,
    title: "Changing Wrong with Hand, Tongue, or Heart",
    narrator: "Abu Sa'id al-Khudri",
    source: "Muslim",
    arabic_text:
      "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ",
    transliteration:
      "Man ra'a minkum munkaran falyughayyirhu biyadih, fa in lam yastati' fabilisanih, fa in lam yastati' fabiqalbih, wa dhalika ad'aful-iman",
    translation:
      "Whoever among you sees a wrong, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart — and that is the weakest degree of faith.",
    lessons: [
      "Responding to wrongdoing has different levels, appropriate to a person's ability and authority.",
      "At minimum, disliking wrongdoing in one's heart is required even when unable to act or speak against it.",
      "This hadith establishes a graded framework for the duty of \"enjoining good and forbidding evil.\"",
      "Complete inward acceptance of wrongdoing, without even inner disapproval, is a sign of weak faith.",
      "The three levels — hand, tongue, heart — descend in directness of action but not in obligation: even the weakest level remains a required minimum, not optional.",
      "This hadith is frequently cited in discussions of the limits of individual authority to intervene physically against wrongdoing, reserving that level for those with actual capacity and standing to do so.",
    ],
  },
  {
    num: 35,
    title: "Brotherhood Between Muslims",
    narrator: "Abu Hurairah",
    source: "Muslim",
    arabic_text:
      "لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا، وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا، الْمُسْلِمُ أَخُو الْمُسْلِمِ: لَا يَظْلِمُهُ، وَلَا يَخْذُلُهُ، وَلَا يَكْذِبُهُ، وَلَا يَحْقِرُهُ، التَّقْوَى هَاهُنَا - وَيُشِيرُ إِلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ - بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ، كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ، وَمَالُهُ، وَعِرْضُهُ",
    transliteration:
      "La tahasadu, wa la tanajashu, wa la tabaghadu, wa la tadabaru, wa la yabi' ba'dukum 'ala bay'i ba'din, wa kunu 'ibadallahi ikhwana, al-Muslimu akhul-Muslim: la yazlimuhu, wa la yakhdhuluhu, wa la yakdhibuhu, wa la yahqiruh...",
    translation:
      "Do not envy one another; do not artificially inflate prices against one another; do not hate one another; do not turn away from one another; and let none of you undercut the sale of another. Be, O servants of Allah, brothers. The Muslim is the brother of the Muslim: he does not wrong him, nor abandon him, nor lie to him, nor hold him in contempt. Taqwa is here — and he pointed to his chest three times. It is evil enough for a man to hold his Muslim brother in contempt. The whole of a Muslim is inviolable to another Muslim: his blood, his wealth, and his honor.",
    lessons: [
      "A long list of specific social and commercial harms are prohibited in one hadith, all rooted in brotherhood.",
      "Honesty and fairness in trade are treated as inseparable from good faith and character.",
      "Contempt for a fellow believer is singled out as a serious matter, connected to the state of the heart.",
      "Islamic brotherhood is meant to be lived out practically, not just felt emotionally.",
      "Pointing to the chest while saying \"taqwa is here\" three times physically locates piety in the unseen heart, tying the entire list of outward prohibitions back to an inward root.",
      "The closing declaration — blood, wealth, and honor all inviolable together — gives a comprehensive summary of what brotherhood protects, spanning life, property, and reputation at once.",
      "This hadith is one of the most frequently cited texts in Islamic teaching on interpersonal ethics, given how many distinct social harms it addresses in a single narration.",
    ],
  },
  {
    num: 36,
    title: "Relieving the Distress of a Believer",
    narrator: "Abu Hurairah",
    source: "Muslim",
    arabic_text:
      "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ، وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ، وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ، وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ إِلَّا نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ، وَغَشِيَتْهُمُ الرَّحْمَةُ، وَحَفَّتْهُمُ الْمَلَائِكَةُ، وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ، وَمَنْ بَطَّأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ نَسَبُهُ",
    transliteration:
      "Man naffasa 'an mu'minin kurbatan min kurabid-dunya naffasallahu 'anhu kurbatan min kurabi yawmil-qiyamah, wa man yassara 'ala mu'sirin yassarallahu 'alayhi fid-dunya wal-akhirah, wa man satara Musliman sistarahullahu fid-dunya wal-akhirah...",
    translation:
      "Whoever relieves a believer of some distress of this world, Allah will relieve him of some distress on the Day of Resurrection. Whoever eases [the hardship of] one in difficulty, Allah will ease his way in this world and the next. Whoever conceals [the faults of] a Muslim, Allah will conceal him in this world and the next. Allah is in the aid of a servant so long as the servant is in the aid of his brother. Whoever follows a path in search of knowledge, Allah makes easy for him a path to Paradise. No people gather together in one of the houses of Allah, reciting the Book of Allah and studying it together, except that tranquility descends upon them, mercy envelops them, the angels surround them, and Allah mentions them among those who are with Him. And whoever is slowed down by his deeds will not be hastened forward by his lineage.",
    lessons: [
      "Helping others in this world results in Allah's help for the one who helps, both now and in the Hereafter.",
      "Concealing others' faults, rather than exposing them, is directly rewarded by Allah concealing one's own.",
      "Acquiring beneficial knowledge is described as a path made easy toward Paradise.",
      "Communal gatherings for remembrance of Allah and studying His Book bring peace, mercy, and angelic presence.",
      "The recurring structure — worldly relief answered with a matching relief in the Hereafter — teaches that Allah's reward mirrors the kind of good a person does, not merely its general goodness.",
      "The closing line, that lineage cannot make up for a shortfall in deeds, is a pointed reminder against relying on family status or heritage in place of personal righteousness.",
      "This hadith connects individual kindness, communal gatherings of knowledge, and personal striving as three related paths that all lead toward the same reward.",
    ],
  },
  {
    num: 37,
    title: "Good Deeds Multiplied, Bad Deeds Not",
    narrator: "Abdullah ibn Abbas",
    source: "Bukhari & Muslim",
    arabic_text:
      "إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ، ثُمَّ بَيَّنَ ذَلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، فَإِنْ هُوَ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ إِلَى أَضْعَافٍ كَثِيرَةٍ، وَمَنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، فَإِنْ هُوَ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً",
    transliteration:
      "Innallaha kataba al-hasanati was-sayyi'at, thumma bayyana dhalik, faman hamma bihasanatin falam ya'malha katabahallahu 'indahu hasanatan kamilah, fa in huwa hamma biha fa'amilaha katabahallahu 'indahu 'ashra hasanatin ila sab'imi'ati di'fin ila ad'afin kathirah...",
    translation:
      "Truly Allah has recorded the good deeds and the bad deeds, then made that clear: whoever intends a good deed and does not carry it out, Allah records it with Himself as a complete good deed; and if he intends it and carries it out, Allah records it with Himself as ten good deeds, up to seven hundredfold, up to many multiples beyond that. And whoever intends a bad deed and does not carry it out, Allah records it with Himself as a complete good deed; and if he intends it and carries it out, Allah records it as a single bad deed.",
    lessons: [
      "Allah's mercy is reflected in how generously good intentions and deeds are rewarded.",
      "Even the mere sincere intention to do good — without carrying it out — is fully rewarded.",
      "Bad deeds are recorded only once, while good deeds can be multiplied many times over.",
      "Refraining from a bad deed one intended to do is itself counted as a good deed.",
      "The open-ended phrase \"up to many multiples beyond\" leaves the ceiling of reward for good deeds deliberately unspecified, in contrast to the single fixed record for a bad deed carried out.",
      "This hadith is often read together with Hadith 1, since both center the believer's inner intention as decisive in how Allah records and rewards human action.",
    ],
  },
  {
    num: 38,
    title: "Whoever Shows Enmity to a Friend of Allah",
    narrator: "Abu Hurairah, from the Prophet ﷺ, who related it from Allah (hadith qudsi)",
    source: "Bukhari",
    arabic_text:
      "إِنَّ اللَّهَ قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُهُ عَلَيْهِ، وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَإِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنِ اسْتَعَاذَنِي لَأُعِيذَنَّهُ",
    transliteration:
      "Innallaha qala: man 'ada li waliyyan faqad adhantuhu bil-harb, wa ma taqarraba ilayya 'abdi bishay'in ahabba ilayya mimmaf-taradtuhu 'alayh, wa ma yazalu 'abdi yataqarrabu ilayya bin-nawafili hatta uhibbah...",
    translation:
      "Truly Allah has said: Whoever shows enmity to a friend of Mine, I declare war upon him. My servant does not draw near to Me with anything more beloved to Me than what I have made obligatory upon him. My servant continues to draw near to Me through voluntary acts until I love him. And when I love him, I become his hearing with which he hears, his sight with which he sees, his hand with which he strikes, and his foot with which he walks. Were he to ask of Me, I would surely give him; and were he to seek refuge in Me, I would surely grant him refuge.",
    lessons: [
      "Obligatory acts of worship are described as the most beloved way of drawing near to Allah.",
      "Voluntary good deeds, added on top of the obligations, can lead to a special closeness with Allah.",
      "This hadith is a central text in Islamic spirituality on the concept of divine closeness (wilayah).",
      "A person especially close to Allah has their prayers and requests answered in a particularly direct way.",
      "That obligatory deeds are named more beloved to Allah than voluntary ones establishes a clear order of priority: fulfilling what is required comes before pursuing what is extra.",
      "The imagery of Allah becoming the servant's hearing, sight, hand, and foot is understood by mainstream scholars as a metaphor for divine assistance and guidance in these faculties, not a literal union, consistent with Islam's core teaching on Allah's transcendence.",
      "The severe opening warning — a declaration of war against whoever shows enmity to Allah's close friends — underscores how seriously Allah regards the honor and protection of the sincere believer.",
    ],
  },
  {
    num: 39,
    title: "Forgiveness for Mistakes, Forgetfulness, and Coercion",
    narrator: "Abdullah ibn Abbas",
    source: "Ibn Majah",
    arabic_text:
      "إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ",
    transliteration:
      "Innallaha tajawaza li 'an ummatil-khata'a wan-nisyana wa mastukrihu 'alayh",
    translation:
      "Truly Allah has overlooked, for my sake, [sins committed by] my nation by mistake, through forgetfulness, and what they were compelled to do.",
    lessons: [
      "Genuine mistakes, forgetfulness, and actions done under coercion are excused from sin, unlike deliberate wrongdoing.",
      "This is a source of considerable relief for believers regarding unintentional errors in worship or conduct.",
      "It does not excuse negligence — only genuine, unavoidable error, forgetfulness, or coercion.",
      "This principle is widely applied in Islamic jurisprudence when assessing intention and liability.",
      "That this exemption is described as granted specifically \"for my sake\" (li) — for the sake of the Prophet ﷺ — reflects a particular honor given uniquely to this nation among the communities of the prophets.",
      "This hadith works alongside Hadith 1 to complete the picture of accountability: reward and blame both hinge on genuine intention, and its absence in error, forgetfulness, or compulsion removes liability altogether.",
    ],
  },
  {
    num: 40,
    title: "Be in This World as a Stranger",
    narrator: "Abdullah ibn Umar",
    source: "Bukhari",
    arabic_text:
      "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ. وَكَانَ ابْنُ عُمَرَ يَقُولُ: إِذَا أَمْسَيْتَ فَلَا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ",
    transliteration:
      "Kun fid-dunya ka'annaka ghareebun aw 'abiru sabeel. Wa kana Ibnu 'Umara yaqul: idha amsayta fala tantaziris-sabah, wa idha asbahta fala tantaziril-masa', wa khudh min sihhatika limaradik, wa min hayatika limawtik",
    translation:
      "Be in this world as though you were a stranger or a traveler passing through. Ibn 'Umar used to say: When evening comes, do not expect to reach morning, and when morning comes, do not expect to reach evening. Take from your health for your illness, and from your life for your death.",
    lessons: [
      "A detached, temporary view of worldly life helps keep a person's priorities focused on the Hereafter.",
      "Awareness of the uncertainty of one's remaining lifespan encourages urgency in doing good.",
      "Preparing for illness and death while still healthy and alive is practical, forward-looking wisdom.",
      "This hadith echoes the theme of zuhd (detachment from worldly attachment) found in Hadith 31.",
      "Ibn 'Umar's own added practice, appended after the Prophet's ﷺ statement, shows how a Companion internalized this teaching into a personal daily habit of urgency.",
      "The pairing of \"stranger\" and \"traveler passing through\" gives two related but distinct images: a stranger lacks lasting attachment to a place, while a traveler is actively moving toward a destination — together capturing both detachment and purposeful direction.",
    ],
  },
  {
    num: 41,
    title: "True Belief Follows What the Prophet ﷺ Brought",
    narrator: "Abdullah ibn Amr ibn al-As",
    source:
      "An-Nawawi's addition (its chain has been discussed by scholars of hadith, and it is generally treated as a weaker addition compared to the original forty)",
    arabic_text:
      "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ",
    transliteration:
      "La yu'minu ahadukum hatta yakuna hawahu taba'an lima ji'tu bih",
    translation:
      "None of you [truly] believes until his desire follows what I have brought.",
    lessons: [
      "Complete faith requires aligning one's personal desires and preferences with the guidance the Prophet ﷺ brought.",
      "This is a high standard, and scholars discuss it as an ideal to strive toward rather than a simple binary test.",
      "It builds on the same theme as Hadith 13 — that genuine faith reshapes a person's inner inclinations.",
      "This hadith is one of the two later additions appended to an-Nawawi's original forty by Ibn Rajab al-Hanbali.",
      "The structure of this hadith mirrors Hadith 13's \"none of you [truly] believes...\" formula, part of a small family of hadith using this same rhetorical pattern to describe deficiencies in complete faith.",
      "Scholars of hadith have noted this narration's chain is comparatively weaker than the other forty, which is part of why it is treated as a later, supplementary addition rather than part of an-Nawawi's original core selection.",
    ],
  },
  {
    num: 42,
    title: "The Vastness of Allah's Forgiveness",
    narrator: "Anas ibn Malik, from the Prophet ﷺ, who related it from Allah (hadith qudsi)",
    source: "Tirmidhi",
    arabic_text:
      "يَا ابْنَ آدَمَ، إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ مِنْكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ، لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ، يَا ابْنَ آدَمَ، إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الْأَرْضِ خَطَايَا ثُمَّ لَقِيتَنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُكَ بِقُرَابِهَا مَغْفِرَةً",
    transliteration:
      "Ya ibna Adam, innaka ma da'awtani wa rajawtani ghafartu laka 'ala ma kana minka wa la ubali, ya ibna Adam, law balaghat dhunubuka 'ananas-sama'i thummastaghfartani ghafartu lak, ya ibna Adam, innaka law ataytani biqurabil-ardi khataya thumma laqitani la tushriku bi shay'an la ataytuka biqurabiha maghfirah",
    translation:
      "O son of Adam, so long as you call upon Me and place your hope in Me, I have forgiven you for what you have done, and I do not mind. O son of Adam, were your sins to reach the very clouds of the sky, and you then sought My forgiveness, I would forgive you. O son of Adam, were you to come to Me with sins nearly filling the earth, and you then met Me without associating anything with Me [in worship], I would come to you with forgiveness nearly filling it.",
    lessons: [
      "Allah's mercy and readiness to forgive are described as vastly exceeding the scale of human sin.",
      "Sincere repentance and calling upon Allah are met with forgiveness regardless of how great the sin was.",
      "Avoiding shirk (associating partners with Allah in worship) is the one condition emphasized above all else.",
      "This hadith, closing the collection, ends on a note of profound hope rather than fear.",
      "The three escalating images — sins reaching the clouds, then nearly filling the earth — build in scale specifically to demonstrate that no magnitude of sin outpaces Allah's capacity and willingness to forgive.",
      "That shirk is the sole named exception, standing apart from every other sin no matter how vast, reflects the unique severity Islam attributes to associating partners with Allah in worship.",
      "Ending the forty-two hadith on this note is a deliberate editorial choice by the collection's compilers, closing an entire curriculum of obligation and discipline with a final emphasis on hope and divine mercy.",
    ],
  },
]