// src/data/tawheed.js
//
// Tawheed Class: a sequential course on Islamic monotheism.
// Units 1-5 build the conceptual foundation (Rububiyyah, Uluhiyyah,
// Asma wa Sifat, Shirk). Units 6-12 work through Usul Thalaathah
// (The Three Fundamental Principles) by Shaykh Muhammad ibn
// Abdul-Wahhab in the book's own chapter order. Unit 13 covers the
// Nullifiers of Islam, traditionally studied alongside it. Unit 14
// closes with practical application.
//
// STATUS: Unit 1 has full lesson content. All other units currently
// have title + summary only (placeholder content), to be filled in
// unit-by-unit, same pattern as Adab Class.
//
// Original content, not reproduced from any existing source.
// Recommend scholarly review before publishing. This treats
// matters of Islamic creed directly, and should be checked for
// accuracy, appropriate hadith/ayah citation, and correct
// theological framing before being published to end users.

export const TAWHEED_UNITS = [
  {
    id: 'unit-1',
    title: 'Foundations of Tawheed',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'Tawheed al-Rububiyyah (Oneness of Lordship)',
    topics: ['rub-1', 'rub-2', 'rub-3', 'rub-4', 'rub-5'],
  },
  {
    id: 'unit-3',
    title: 'Tawheed al-Uluhiyyah (Oneness of Worship)',
    topics: ['uluh-1', 'uluh-2', 'uluh-3', 'uluh-4', 'uluh-5', 'uluh-6'],
  },
  {
    id: 'unit-4',
    title: "Tawheed al-Asma wa's-Sifaat (Names and Attributes)",
    topics: ['asma-1', 'asma-2', 'asma-3', 'asma-4', 'asma-5'],
  },
  {
    id: 'unit-5',
    title: 'Shirk: Its Types and Dangers',
    topics: ['shirk-1', 'shirk-2', 'shirk-3', 'shirk-4', 'shirk-5'],
  },
  {
    id: 'unit-6',
    title: 'Usul Thalaathah: Introduction and the Four Matters',
    topics: ['ut1-1', 'ut1-2', 'ut1-3', 'ut1-4', 'ut1-5'],
  },
  {
    id: 'unit-7',
    title: 'Usul Thalaathah: The Three Principles',
    topics: ['ut2-1', 'ut2-2', 'ut2-3', 'ut2-4', 'ut2-5'],
  },
  {
    id: 'unit-8',
    title: 'Usul Thalaathah: Types of Worship in the Text',
    topics: ['ut3-1', 'ut3-2', 'ut3-3', 'ut3-4', 'ut3-5', 'ut3-6'],
  },
  {
    id: 'unit-9',
    title: 'Usul Thalaathah: Islam and Its Levels',
    topics: ['ut4-1', 'ut4-2', 'ut4-3', 'ut4-4', 'ut4-5'],
  },
  {
    id: 'unit-10',
    title: 'Usul Thalaathah: The Prophet Muhammad ﷺ',
    topics: ['ut5-1', 'ut5-2', 'ut5-3', 'ut5-4', 'ut5-5'],
  },
  {
    id: 'unit-11',
    title: 'Usul Thalaathah: Resurrection and the Sending of Messengers',
    topics: ['ut6-1', 'ut6-2', 'ut6-3', 'ut6-4'],
  },
  {
    id: 'unit-12',
    title: 'Usul Thalaathah: Taghut and Disbelief in It',
    topics: ['ut7-1', 'ut7-2', 'ut7-3', 'ut7-4'],
  },
  {
    id: 'unit-13',
    title: 'Nullifiers of Islam (Nawaqid al-Islam)',
    topics: ['naw-1', 'naw-2', 'naw-3', 'naw-4', 'naw-5', 'naw-6'],
  },
  {
    id: 'unit-14',
    title: 'Living Tawheed Today',
    topics: ['live-1', 'live-2', 'live-3', 'live-4'],
  },
];

export const TAWHEED_TOPIC_ORDER = TAWHEED_UNITS.flatMap((u) => u.topics);

export const TAWHEED_TOPICS = {
  // ─────────────────────────────────────────────────────────
  // UNIT 1 - FOUNDATIONS OF TAWHEED (full content)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Ibn Kathir, Qurtubi via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'What is Tawheed? Definition and Central Importance',
    summary: 'The meaning of Islamic monotheism and why it sits at the center of the entire religion.',
    content: [
      {
        heading: 'Tawheed as the single word behind the entire religion',
        body: `Tawheed comes from the Arabic root meaning "to make one" or "to single out." In Islamic theology, it refers to affirming Allah's absolute oneness in His Lordship, in the worship He alone deserves, and in His names and attributes. It is not simply one belief among many that a Muslim holds; it is the belief every other belief and every act of worship is built upon and judged against.

The testimony of faith itself, "la ilaha illallah" (there is no god but Allah), is a declaration of Tawheed in its shortest possible form. Every prayer, every fast, every act of charity, and every other pillar of Islam is only accepted from a person who has first established this single foundation correctly.`,
      },
      {
        heading: 'Why this subject comes before every other subject',
        body: `Islamic scholarship has historically placed the study of Tawheed before the study of Fiqh (rulings), Seerah (biography), or any other Islamic science, precisely because it addresses the most foundational question a person can ask: who or what actually deserves worship, obedience, and ultimate reliance. Every other question in the religion assumes an answer to this one has already been settled correctly.

A person could perform every ritual with technical precision (correct wudu, correct prayer movements, correct fasting hours) and still have the entire structure collapse if the object of that worship is not Allah alone, or if it is directed to Allah alongside something else. This is why Tawheed is treated not as a topic among topics, but as the doorway every other topic in Islam passes through.`,
      },
      {
        heading: 'The opposite of Tawheed: Shirk',
        body: `Tawheed's necessary counterpart is Shirk, associating partners with Allah in His Lordship, His right to be worshipped, or His names and attributes. Shirk is described in the Qur'an as the one sin Allah does not forgive if a person dies upon it without repenting, while every other sin remains subject to His forgiveness. This single distinction communicates how seriously this specific matter is treated compared to every other matter of the religion.

Understanding Tawheed properly, then, is inseparable from understanding what Shirk actually is, a theme this course will return to directly in its fifth unit, and implicitly throughout nearly every unit that follows.`,
      },
      {
        heading: 'A subject for the heart, not only the intellect',
        body: `While Tawheed involves clear definitions and categories that can be studied intellectually, it is ultimately meant to reshape how a person actually lives: where they turn in fear, where they place their hope, whom they call upon in a moment of real need, and what they believe controls the outcome of their efforts. A person can recite the correct definitions of Tawheed and still, in practice, fear a person's harm more than Allah's decree, or place their hope in wealth or status more than in Allah's mercy.

This course treats Tawheed as both a body of knowledge to be learned correctly and a lived orientation of the heart to be examined honestly. The two are not separable, and genuine study of this subject should produce a visible difference in how a person actually navigates daily life, not only what they can define on a test.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'Tawheed as the Message of Every Prophet',
    summary: 'How every messenger sent by Allah delivered the exact same core message.',
    content: [
      {
        heading: 'One message, sent through every messenger',
        body: `A remarkable and often overlooked feature of the Qur'an is its insistence that every single prophet sent throughout human history delivered the same foundational message, regardless of the era, language, or specific laws given to their particular community.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ',
            english: 'And We did not send any messenger before you except that We revealed to him: there is no god but Me, so worship Me alone.',
            source: 'Surah al-Anbiya, 21:25',
          },
        ],
      },
      {
        heading: 'Different laws, one theology',
        body: `The tafsir literature draws a specific and important distinction from this verse: the detailed laws (shara'i) given to different prophets varied considerably: the Torah, the Gospel, and the Qur'an each contain different specific rulings suited to their communities and circumstances. But underneath this variation in law sits a single, unchanging theological core: worship belongs to Allah alone, without partner.

This means Tawheed is not a distinctly "Islamic" invention layered onto an otherwise different set of older religions. It is presented as the original, universal message every community actually received, with the variation between religions today reflecting historical distortion, addition, and departure from that original core rather than a genuine plurality of correct starting points.`,
      },
      {
        heading: 'Every nation, without exception',
        body: `The Qur'an reinforces this pattern in multiple places, stating directly that a messenger was raised among every nation carrying the same instruction: worship Allah and avoid false objects of worship (Taghut). This universal claim means that no community in human history was left without access to this core message at some point in its history, even if that message was later corrupted, forgotten, or deliberately rejected by later generations.

This detail matters for how Tawheed is understood: it is not being introduced to humanity for the first time through the Qur'an, but being restored and finalized in its clearest, most complete, and permanently preserved form.`,
      },
      {
        heading: 'What this shared history means for the Muslim today',
        body: `Recognizing that every prophet taught the same essential Tawheed gives a Muslim studying this subject a sense of continuity rather than isolation. The specific words "la ilaha illallah" are relatively recent in their exact Arabic phrasing, but the underlying conviction they express is described as the oldest and most consistently repeated message in human religious history.

This also sharpens the seriousness of Shirk: a person falling into Shirk is not simply making an isolated theological mistake, but departing from the single message every prophet, across every era and civilization, was specifically sent to establish and protect.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'The Three Categories of Tawheed (Overview)',
    summary: 'A first look at the three-part framework used throughout this course.',
    content: [
      {
        heading: 'Why scholars divided Tawheed into three categories',
        body: `While Tawheed is a single, unified concept, scholars of Islamic creed found it useful to divide it into three distinct categories for the purpose of teaching and analysis, not because Allah's oneness is actually divided into separate parts, but because doing so helps identify precisely where a person's understanding or practice might go wrong. A person can affirm one category correctly while failing badly at another, and this framework makes it possible to diagnose that specific failure clearly.

This three-part structure, though systematized more explicitly by later scholars, is drawn directly from patterns already present throughout the Qur'an's own way of addressing belief in Allah.`,
      },
      {
        heading: 'Tawheed al-Rububiyyah: Oneness of Lordship',
        body: `The first category concerns belief that Allah alone is the Creator, Sustainer, and Controller of the universe: that He alone brings life and death, provides sustenance, and governs the outcome of all things. This category will be covered in full in this course's second unit, but it is worth noting here that this specific category was, historically, the one even the pagans the Qur'an addressed already accepted without much argument.`,
      },
      {
        heading: 'Tawheed al-Uluhiyyah: Oneness of Worship',
        body: `The second category concerns directing every act of worship (prayer, supplication, sacrifice, vows, fear, hope, and reliance) to Allah alone, without directing any of it toward another being, whether that being is a prophet, an angel, a saint, or any created thing whatsoever. This category, covered in this course's third unit, is where the actual historical conflict between the prophets and their disbelieving nations consistently centered, since acknowledging Allah as Creator (Rububiyyah) did not automatically translate into worshipping Him exclusively (Uluhiyyah).`,
      },
      {
        heading: 'Tawheed al-Asma wa\'s-Sifaat: Oneness of Names and Attributes',
        body: `The third category concerns affirming the names and attributes Allah has described for Himself in the Qur'an and that the Prophet ﷺ described for Him in authentic hadith, without denying them, distorting their meaning, comparing them to the attributes of creation, or asking "how" they operate. This category, covered in this course's fourth unit, addresses a more subtle and easily overlooked way Tawheed can be compromised, not through worshipping something other than Allah, but through mischaracterizing who Allah actually is in the first place.

Together, these three categories form the complete picture this course will build out unit by unit. A person's Tawheed is only sound when all three are correctly understood and lived out, not merely one or two of the three.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'Why Allah Created Jinn and Mankind',
    summary: 'The Qur\'an\'s own stated purpose behind human and jinn existence.',
    content: [
      {
        heading: 'A stated purpose, not a guess',
        body: `Unlike many philosophical questions about the purpose of human existence that different traditions have debated at length, the Qur'an answers this question directly and without ambiguity, stating plainly why jinn and humans were brought into existence at all.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
            english: 'And I did not create jinn and mankind except to worship Me.',
            source: 'Surah adh-Dhariyat, 51:56',
          },
        ],
      },
      {
        heading: 'Worship understood broadly, not narrowly',
        body: `The word used here, "liya'budun" (to worship Me), refers to worship in its complete sense: not only formal rituals like prayer and fasting, but the entire orientation of a life submitted to Allah, including belief, obedience, gratitude, and every act performed sincerely for His sake. This corrects a narrow reading that would treat this verse as describing only what happens inside a masjid, rather than the entire shape of a person's existence.

Understood this way, the verse does not describe worship as one activity competing for space alongside work, family, and daily life. It describes worship as the underlying purpose that everything else, done with the right intention, can become an expression of.`,
      },
      {
        heading: 'Allah\'s independence from this purpose',
        body: `A companion once asked why Allah would need to be worshipped at all, given that He lacks nothing. The scholarly response to this question, drawn from other verses describing Allah's complete self-sufficiency, is that Allah does not benefit from human worship in any way that fills a lack in Him. The benefit of worship flows entirely toward the one worshipping, not toward Allah, who remains free of any need whatsoever.

This distinction matters for how this verse is understood: humans and jinn were not created to fulfill some requirement of Allah's, but were given the immense honor and purpose of worship because it is precisely what elevates and fulfills their own existence, not His.`,
      },
      {
        heading: 'A verse that reframes daily life entirely',
        body: `Taken seriously, this verse asks a person to view their entire existence, not just their explicitly religious moments, through the lens of this stated purpose. A person going to work, raising children, studying, or resting is not stepping outside the purpose described in this verse, provided these activities are approached with sincerity and within the boundaries Allah has set; they are living out the very purpose the verse describes, in the ordinary texture of daily life rather than only in isolated ritual moments.

This reframing is a natural entry point into everything the rest of this course covers. If worship is the entire purpose of existence, then understanding what true worship actually requires, and what threatens to corrupt it, becomes the single most important subject a person could study.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: 'The Virtue and Reward of Tawheed',
    summary: 'What Allah has promised those who establish sincere Tawheed.',
    content: [
      {
        heading: 'The single right owed by servants to their Lord',
        body: `The Prophet ﷺ once asked his companion Mu'adh ibn Jabal directly whether he knew what right Allah holds over His servants, and after Mu'adh admitted he did not know, gave him the answer directly, in the simplest possible terms.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'حَقُّ اللَّهِ عَلَى الْعِبَادِ أَنْ يَعْبُدُوهُ وَلَا يُشْرِكُوا بِهِ شَيْئًا',
            english: '"Allah\'s right upon His servants is that they worship Him and not associate any partner with Him."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'A matching right owed in return',
        body: `The same hadith continues with a second question, what right servants hold over Allah if they fulfill the first right correctly, and the Prophet ﷺ answered that Allah will not punish anyone who worships Him alone without associating partners with Him. He then cautioned Mu'adh against spreading this news too widely at first, out of concern people might rely on it and grow lax in their good deeds, though it was eventually shared more openly once that risk had passed.

This second half of the hadith is significant: sincere Tawheed is presented not merely as one requirement among many for salvation, but as carrying its own specific, direct promise of protection from punishment, a promise tied to this single matter more directly than to any other individual act of worship.`,
      },
      {
        heading: 'Sins forgiven, provided Shirk is avoided',
        body: `Beyond protection from punishment in a general sense, sincere Tawheed is described as the one thing that keeps the door to forgiveness open no matter how numerous a person's other sins may be. The specific sin Allah does not forgive without repentance, as already noted earlier in this unit, is Shirk, meaning every other sin, however serious, remains within the scope of Allah's forgiveness for someone who died upon sincere Tawheed, while Shirk alone stands outside that scope unless repented from before death.

This framing is not meant to encourage complacency about sin generally (every sin still carries real consequence and should be taken seriously), but it does highlight how uniquely central this one matter is to a person's ultimate standing before Allah, distinct from every other matter of the religion.`,
      },
      {
        heading: 'A course built to protect and deepen this single foundation',
        body: `Given everything covered in this unit (Tawheed as the core message of every prophet, the three categories used to study it properly, the stated purpose behind human existence, and the unique weight of reward and protection tied to it), the remainder of this course is structured to build out each of these categories in real depth, before moving into a direct, sequential study of one of the most widely taught classical texts on this subject, Usul Thalaathah.

The goal of this structure is not simply accumulating definitions, but building a foundation solid enough to recognize, in real daily life, where Tawheed is being lived out correctly and where it may quietly be compromised, the central task this entire course exists to support.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 2 - TAWHEED AL-RUBUBIYYAH (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Qurtubi via quran.com and quran.ksu.edu.sa)
  // before writing. English renderings are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // ─────────────────────────────────────────────────────────
  'rub-1': {
    id: 'rub-1',
    unit: 'unit-2',
    title: 'Definition of Rububiyyah',
    summary: 'What it means to affirm Allah alone as Lord, Creator, and Sustainer.',
    content: [
      {
        heading: 'What Rububiyyah actually means',
        body: `Rububiyyah comes from the word "Rabb," usually translated as Lord, but carrying a fuller meaning than that single English word suggests. A Rabb is one who creates, owns, and manages the affairs of something completely. Tawheed al-Rububiyyah is the belief that Allah alone holds this role over the entire universe, with no partner, no assistant, and no rival sharing any part of it with Him.

This category asks a specific question: who actually creates, owns, and runs everything that exists. The answer given throughout the Qur'an is direct and repeated: Allah alone, without exception, and without any created being sharing in this role in even the smallest matter.`,
      },
      {
        heading: 'Three components held together',
        body: `Scholars typically break Rububiyyah into three connected parts that must all be affirmed together. The first is creation (khalq): Allah alone brought everything into existence from nothing. The second is ownership (mulk): everything that exists belongs to Him completely, not in a shared or partial sense. The third is management (tadbir): He alone runs, directs, and decides the affairs of everything He has created and owns.

A simple example makes the connection between these three clear. Consider a factory. The person who designed and built the factory (creation) is usually also the one who legally owns it (ownership), and is the one making the daily decisions about how it runs (management). If someone else showed up and started making decisions about the factory without any of these three roles, everyone would recognize that as an intrusion. Rububiyyah teaches that no created being holds even a fraction of these three roles over the universe. Allah alone made it, Allah alone owns it, and Allah alone runs it.`,
      },
      {
        heading: 'The category most people already accept',
        body: `Compared to the other two categories of Tawheed covered later in this course, Rububiyyah is usually the easiest for people to accept, even outside of Islam. Most human beings, across nearly every culture and era, have believed in some kind of creator or ultimate power behind the universe. Very few people throughout history have seriously denied that the world had an origin outside of itself.

This point matters because it shows that accepting Rububiyyah, on its own, does not make someone a believer in the full Islamic sense. A later topic in this unit will look closely at why this is the case, using the example of the very people the Qur'an was first revealed to.`,
      },
      {
        heading: 'Why this category is studied first',
        body: `This course studies Rububiyyah before Uluhiyyah and before the names and attributes of Allah for a specific reason. Recognizing Allah as the sole Creator, Owner, and Manager of everything is the natural starting point that should lead a person toward the next question: if Allah alone holds this role, why would worship be directed to anyone else at all.

In other words, Rububiyyah is not the finish line of Tawheed. It is the doorway into it. A person who stops at Rububiyyah, accepting that Allah created everything but then directing prayer, hope, fear, or reliance toward something else, has taken the first step correctly but has not yet arrived anywhere close to complete Tawheed.`,
      },
    ],
  },

  'rub-2': {
    id: 'rub-2',
    unit: 'unit-2',
    title: 'Evidence from Creation and the Universe',
    summary: 'How the natural world itself points to a single Creator.',
    content: [
      {
        heading: 'A question with only one honest answer',
        body: `The Qur'an frequently uses direct, almost confrontational questions to make the case for Rububiyyah, rather than lengthy philosophical arguments. One short passage lays out the possibilities so plainly that there is very little room left to avoid the conclusion.`,
        verses: [
          {
            type: 'quran',
            arabic: 'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',
            english: 'Were they created out of nothing, or are they themselves the creators?',
            source: 'Surah at-Tur, 52:35',
          },
        ],
      },
      {
        heading: 'A single verse that changed a man\'s heart',
        body: `The effect of this verse on a listener who genuinely reflects on it is preserved in a well known account. Jubair ibn Mut'im traveled to Madinah after the Battle of Badr while he was still a disbeliever, seeking to negotiate the release of prisoners of war. He heard the Prophet ﷺ reciting Surah at-Tur during the Maghrib prayer, and described his own reaction when the recitation reached this exact verse.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'سَمِعْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقْرَأُ فِي الْمَغْرِبِ بِالطُّورِ، فَلَمَّا بَلَغَ هَذِهِ الْآيَةَ: أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ، كَادَ قَلْبِي أَنْ يَطِيرَ',
            english: '"I heard the Prophet ﷺ reciting Surah at-Tur in the Maghrib prayer, and when he reached this verse, my heart nearly flew out of my chest."',
            source: 'Sahih al-Bukhari (narrated by Jubair ibn Mut\'im)',
          },
        ],
      },
      {
        heading: 'Why this specific question is so effective',
        body: `The verse leaves only three possible answers, and Jubair's reaction shows how quickly the mind runs out of options once it is asked directly. Either a person came into existence from absolutely nothing, with no cause at all, which contradicts the most basic reasoning anyone applies to everyday life. Or a person created themselves, which is a plain contradiction, since something cannot exist before itself in order to bring itself into being. Or there exists a Creator responsible for their existence.

Only the third option survives basic scrutiny, and Jubair, still an idolater at the time he heard it, felt the weight of that logic immediately, even before he had formally accepted Islam. This account is later reported to be one of the reasons that eventually led him to embrace the religion.`,
      },
      {
        heading: 'The same logic applied to everyday design',
        body: `The reasoning behind this verse extends naturally to something as ordinary as a house or a piece of furniture. No one who walks into a well built house assumes it assembled itself by accident, or that the materials simply arranged themselves into walls, doors, and a roof without anyone designing or building it. The presence of clear order, function, and purpose is treated, correctly, as proof of a builder.

The universe displays this same order on a vastly larger scale: the precise distance of the earth from the sun that allows life to exist, the cycle of day and night, the water cycle that sustains crops and rivers, and the intricate design of the human body itself, down to a single cell carrying out thousands of coordinated processes every second. If a house cannot reasonably be assumed to have built itself, the far greater complexity of the universe cannot reasonably be assumed to have arranged itself either.`,
      },
      {
        heading: 'Signs described throughout the Qur\'an',
        body: `The Qur'an repeatedly directs attention to specific, observable features of creation as signs (ayat) pointing to their Creator: the alternation of night and day, the descent of rain that revives dead land, the variety of languages and skin colors among people who share the same origin, and the precise orbits followed by the sun and moon. None of these are presented as abstract philosophical arguments reserved for scholars. They are presented as evidence available to any person willing to observe the world around them honestly.

The Adab of this evidence, if it can be called that, is that it does not ask for blind acceptance. It asks a person to look carefully at what is already directly observable and to draw the same conclusion that a fair examination of a well built house, a well written book, or a well organized system would already lead them to draw.`,
      },
    ],
  },

  'rub-3': {
    id: 'rub-3',
    unit: 'unit-2',
    title: 'Allah\'s Sole Control Over Sustenance and Life',
    summary: 'Provision, life, and death as matters no creation shares control over.',
    content: [
      {
        heading: 'A question about provision with no honest reply',
        body: `Beyond the question of who created the universe, the Qur'an presses further into a second, closely related area: who actually provides sustenance to every living creature, and what would happen if that provision were withdrawn.`,
        verses: [
          {
            type: 'quran',
            arabic: 'أَمَّنْ هَٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ',
            english: 'Or who is it that could provide for you if He withheld His provision?',
            source: 'Surah al-Mulk, 67:21',
          },
        ],
      },
      {
        heading: 'The illusion of self sufficiency',
        body: `Modern life makes it easy to feel that provision comes from a job, a salary, a business, or a bank account, rather than from Allah directly. A person can trace their food back to a supermarket, the supermarket back to a supplier, and the supplier back to a farm, and feel that human effort alone explains where their next meal comes from.

Rububiyyah asks a person to trace this chain one step further. The farmer did not create the soil, the rain that waters the crop, the sunlight that allows it to grow, or the biological processes that turn a seed into food. Every link in the chain of provision rests on natural processes no human being designed, controls, or could replace if they suddenly stopped. A single widespread drought, something entirely outside of human control, is enough to demonstrate how fragile the illusion of self sufficient provision actually is.`,
      },
      {
        heading: 'Life and death as a closed matter',
        body: `The same principle applies to life and death themselves. Doctors can treat illness, extend life through medicine, and delay death in many cases, but no human being can create life from nothing or prevent death indefinitely once it has been decreed. A skilled surgeon can save a patient from one specific danger, yet has no power at all to guarantee that same patient will not die from an entirely different cause the very next day.

This distinction matters for correct Rububiyyah: gratitude toward doctors, scientists, and the means Allah has placed in the world is appropriate and encouraged, but recognizing that these are means rather than the ultimate source of life, death, and provision is the actual substance of this category of Tawheed.`,
      },
      {
        heading: 'No creator besides Allah, and no partner in provision',
        body: `The Qur'an repeatedly closes off any alternative explanation for creation or provision, asking directly whether any creator other than Allah exists who could be responsible for what people see around them, and answering that no such alternative exists. This is not framed as one opinion among several plausible options. It is framed as a settled matter, open to anyone willing to examine it honestly, in the same way the earlier verse about self creation left no honest alternative once properly considered.

The Adab drawn from this is gratitude directed correctly. A person who receives their salary and thanks their employer, without any thought of the One who ultimately allowed the job, the health to work it, and the entire chain of provision behind it to exist at all, has stopped their gratitude at the nearest visible link in the chain rather than tracing it back to where it actually begins.`,
      },
      {
        heading: 'A concrete daily example',
        body: `Consider something as ordinary as a glass of clean drinking water. A person did not create the hydrogen and oxygen that make up water, did not design the water cycle that moves it from ocean to cloud to rain to river, did not create the kidneys and biological systems that allow the human body to use it, and did not guarantee that any particular day would pass without their access to it being suddenly cut off by illness, disaster, or scarcity.

Every single link in that chain rests on something no human being controls. This is precisely the kind of ordinary, easily overlooked example the Qur'an repeatedly points toward: not distant or abstract phenomena, but the very glass of water sitting in front of a person at any given moment.`,
      },
    ],
  },

  'rub-4': {
    id: 'rub-4',
    unit: 'unit-2',
    title: 'Why Rububiyyah Alone Is Not Sufficient',
    summary: 'How even the Prophet\'s ﷺ pagan opponents affirmed this category, yet remained disbelievers.',
    content: [
      {
        heading: 'The disbelievers who already agreed',
        body: `One of the most important verses for understanding the limits of Rububiyyah on its own describes the very people the Prophet ﷺ was sent to, people who worshipped idols alongside Allah, yet who did not actually deny that Allah was the Creator of the heavens and the earth.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلَئِن سَأَلْتَهُم مَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ لَيَقُولُنَّ اللَّهُ',
            english: 'And if you ask them who created the heavens and the earth, they will surely say, Allah.',
            source: 'Surah Luqman, 31:25',
          },
        ],
      },
      {
        heading: 'The gap this verse exposes',
        body: `This is a striking admission. The very people the Qur'an repeatedly argues against, calls disbelievers, and describes as committing Shirk, already agreed with the entire content of the previous two topics in this unit. They accepted that Allah alone created the heavens and the earth. They did not need to be convinced of Rububiyyah at all.

Their failure was not a failure of Rububiyyah. It was a failure of Uluhiyyah, the second category of Tawheed covered in this course's next unit. They acknowledged Allah as Creator with their tongues, yet continued to direct prayer, sacrifice, vows, and hope toward stone idols they had carved with their own hands. The tafsir literature notes the irony directly: they confessed the truth of who created them, yet worshipped something that could not create so much as a fly.`,
      },
      {
        heading: 'Why an intellectual admission is not enough',
        body: `This gap between admitting a Creator exists and actually worshipping that Creator alone is the exact reason Islamic scholarship refuses to treat Rububiyyah as sufficient on its own. A person can pass every intellectual test regarding who made the universe and still fail the far more demanding test of who that person actually turns to in fear, in hope, in a moment of desperate need, or in gratitude when something good happens.

This is why the Qur'an spends comparatively little time arguing with the pagans about whether Allah exists or created the world. It spends the overwhelming majority of its energy addressing the second question: given that you already admit this, why do you still worship something else alongside Him.`,
      },
      {
        heading: 'A modern version of the same gap',
        body: `This exact pattern has an easily recognizable modern equivalent. Many people today, across very different cultures, will readily say they believe in God, a higher power, or some kind of creative force behind the universe, without much hesitation. Very few of these same people organize their fear, hope, worship, and reliance around that belief in any consistent way.

A person might say they believe the universe was created by God, while placing their actual hope for security in wealth, their actual fear in the opinion of other people rather than in Allah, and their actual daily habits around superstition, horoscopes, or trust in luck rather than around sincere worship of the very Creator they claim to believe in. This is, in substance, the same gap the Qur'an identified in the pagans of Makkah fourteen centuries ago, simply wearing modern clothing.`,
      },
      {
        heading: 'Setting up the next category',
        body: `This topic closes Unit 2 with a deliberate incompleteness. Everything covered so far, the definition of Rububiyyah, the evidence from creation, and the evidence from provision and life, establishes only the first of the three categories introduced in this course's opening unit. The next unit turns directly to Tawheed al-Uluhiyyah, the category the pagans of Makkah actually failed at, and the category where the real, practical work of correcting a person's worship must take place.`,
      },
    ],
  },

  'rub-5': {
    id: 'rub-5',
    unit: 'unit-2',
    title: 'Al-Qadar (Divine Decree) as Part of Rububiyyah',
    summary: 'Belief in Allah\'s decree as an extension of belief in His Lordship.',
    content: [
      {
        heading: 'Everything created according to a measure',
        body: `Belief in al-Qadar, Allah's decree and foreordainment, is treated by scholars as a natural extension of Rububiyyah rather than a separate, unrelated belief. If Allah alone creates, owns, and manages everything, it follows directly that everything occurring within His creation happens according to His knowledge and decree, not by pure chance or outside His control.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ',
            english: 'Indeed, We have created everything according to a precise decree.',
            source: 'Surah al-Qamar, 54:49',
          },
        ],
      },
      {
        heading: 'The occasion behind this verse',
        body: `The tafsir literature records that this verse was revealed in response to a group who came to argue with the Prophet ﷺ about the very concept of divine decree, unwilling to accept that events they disliked could still occur within Allah's knowledge and plan. The verse settles the matter directly: absolutely nothing, whether pleasant or difficult, falls outside the scope of a measure and decree already established by Allah.

This connects directly to Rububiyyah as already defined earlier in this unit. A Rabb who genuinely creates, owns, and manages everything cannot logically be excluded from the outcomes of what He has created. If Allah's management of the universe were incomplete or left certain events to pure randomness outside His knowledge, His Rububiyyah itself would be incomplete, which the entirety of the Qur'an rejects.`,
      },
      {
        heading: 'Qadar is not an excuse to abandon effort',
        body: `A serious and common misunderstanding treats belief in Qadar as a reason to stop making any effort at all, since the outcome is already decreed regardless of what a person does. This misunderstanding gets the relationship between decree and effort backward. A person does not know in advance what has been decreed for them, and is instructed throughout the Qur'an and Sunnah to strive, plan, and work exactly as though their effort matters, precisely because it genuinely does within the means Allah has established.

A concrete example makes this clear. A student preparing for an important exam does not skip studying on the reasoning that their result is already decreed. They study with full effort, because the studying itself is part of the very means through which the decreed outcome, whatever it turns out to be, actually comes about. The farmer plants the seed rather than waiting passively for a decreed harvest to appear on its own, because planting is the means Allah has placed between effort and outcome.`,
      },
      {
        heading: 'Qadar as comfort rather than fatalism',
        body: `Correctly understood, belief in Qadar is meant to produce comfort and stability rather than passivity. A person who genuinely believes that every hardship they face passed through Allah's knowledge and wisdom before reaching them is protected from a specific kind of despair that afflicts someone who believes their suffering is pure, meaningless accident with no purpose or oversight behind it at all.

This does not mean a person should feel nothing when hardship strikes, or pretend difficult events are not genuinely difficult. It means that after honest effort has been made and genuine emotion has been felt, a believer's heart settles on the knowledge that nothing has occurred outside of Allah's complete knowledge, wisdom, and management, the very qualities this entire unit has been describing under the name Rububiyyah.`,
      },
      {
        heading: 'Bringing the unit to a close',
        body: `Taken together, this unit has built a complete picture of Tawheed al-Rububiyyah: a Lord who alone creates, owns, and manages everything that exists, whose fingerprints are visible throughout the design of the universe, who alone provides sustenance and controls life and death, whose Lordship was never seriously in dispute even among history's most committed idol worshippers, and whose management of the universe extends down to the smallest decreed detail of a person's life.

The lesson this unit closes on is the same lesson its fourth topic already introduced directly: none of this, however completely understood and accepted, is sufficient on its own. The following unit turns to the category of Tawheed where genuine worship, not mere intellectual agreement, is actually put into practice.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 3 - TAWHEED AL-ULUHIYYAH (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Qurtubi via quran.com and quran.ksu.edu.sa)
  // before writing. English renderings are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // -----------------------------------------------------------
  'uluh-1': {
    id: 'uluh-1',
    unit: 'unit-3',
    title: 'Definition and Central Role of Uluhiyyah',
    summary: 'Why this category is the actual point of every act of worship.',
    content: [
      {
        heading: 'What Uluhiyyah actually means',
        body: `Uluhiyyah comes from the word "Ilah," meaning god or object of worship. Tawheed al-Uluhiyyah is the belief that Allah alone deserves every single act of worship, and that none of that worship may be given to anyone or anything else, no matter how great that being might otherwise appear. This category is also sometimes called Tawheed al-Ibadah, the oneness of worship, since it addresses exactly the same question from a slightly different angle.

Where Rububiyyah, covered in the previous unit, asks who created and manages the universe, Uluhiyyah asks a different question entirely: who deserves to be prayed to, feared, hoped in, relied upon, and obeyed. As the closing topic of the previous unit already showed, these two questions do not automatically have the same answer in a person's actual daily practice, even when they have the same correct answer in theory.`,
      },
      {
        heading: 'The opening of every recited prayer',
        body: `Every Muslim who has prayed even a single rak'ah has already recited the clearest possible statement of Uluhiyyah, whether or not they paused to reflect on its meaning. Surah al-Fatihah, recited in every unit of every prayer, contains a direct declaration addressed to Allah alone.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
            english: 'You alone we worship, and You alone we ask for help.',
            source: 'Surah al-Fatihah, 1:5',
          },
        ],
      },
      {
        heading: 'Why this single verse is called the secret of the Qur\'an',
        body: `Some early scholars described this verse as the secret contained within the entire Fatihah, and the Fatihah itself as the secret contained within the entire Qur'an. The reasoning behind this description is worth sitting with. The first half of the verse, worshipping Allah alone, frees a person from Shirk. The second half, seeking help from Allah alone, frees a person from relying on their own strength and ability as though it operates independently of Him.

Notice the grammatical structure as well. In Arabic, placing the object "You alone" before the verb "we worship" carries a meaning of exclusivity that a plain word order would not communicate as strongly. It is the difference between saying "we worship you" and saying "it is You, and only You, whom we worship." Every single praying Muslim repeats this exclusive declaration multiple times a day, which is precisely why Uluhiyyah is not an abstract theological category reserved for scholars. It sits at the center of the most basic, most frequently repeated act of worship in the entire religion.`,
      },
      {
        heading: 'Uluhiyyah as the actual content of every act of worship',
        body: `Every act of worship covered throughout the remainder of this unit, supplication, fear, hope, reliance, sacrifice, and vows, is simply Uluhiyyah expressed in a particular form. None of these acts are separate categories sitting alongside Uluhiyyah. They are Uluhiyyah itself, examined one piece at a time so that a person can recognize clearly where their own practice might be correct in one area and compromised in another.

A simple example makes this concrete. A person who never bows to an idol, yet regularly wears a charm or amulet believing it wards off harm independently of Allah's permission, has not committed the most obvious, dramatic form of Shirk, but has still misplaced a portion of the trust that belongs to Uluhiyyah onto an object with no actual power of its own. The remaining topics in this unit exist to help identify exactly this kind of subtle misplacement, not only the most obvious historical examples involving carved stone idols.`,
      },
      {
        heading: 'Why this category demands the most attention in daily life',
        body: `Because Rububiyyah is rarely disputed even by open disbelievers, and because Asma wa Sifaat, covered in the unit after this one, concerns correctly describing Allah rather than the daily direction of worship, Uluhiyyah is the category most directly tested in the actual texture of ordinary life. It is tested every time a person is afraid and must decide where that fear is ultimately directed. It is tested every time something good happens and a person decides where their gratitude and hope actually settle. It is tested every time a difficulty arises and a person decides who they turn to first.

This is why the remainder of this unit moves through the specific acts of worship one at a time, rather than staying at the level of definition alone. Correct Uluhiyyah is demonstrated far more convincingly through these ordinary, repeated moments than through a correctly recited definition on its own.`,
      },
    ],
  },

  'uluh-2': {
    id: 'uluh-2',
    unit: 'unit-3',
    title: 'Dua as an Act of Worship',
    summary: 'Why supplication directed to other than Allah is a direct violation of Uluhiyyah.',
    content: [
      {
        heading: 'A direct invitation, and a direct warning',
        body: `Allah does not simply permit dua. He commands it directly, and attaches a specific consequence to refusing it out of arrogance.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ',
            english: 'And your Lord has said, call upon Me and I will answer you. Indeed, those who are too arrogant to worship Me will enter Hell, utterly humbled.',
            source: 'Surah Ghafir, 40:60',
          },
        ],
      },
      {
        heading: 'Why the verse itself equates dua with worship',
        body: `Notice the structure of this verse closely. Allah commands "call upon Me," and then, in the very next sentence, describes those who refuse as being "too arrogant to worship Me." The verse moves directly from calling upon Allah to worshipping Him, treating the two as the same act described from two angles. This is exactly the textual basis behind a well known hadith graded authentic by scholars of hadith.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الدُّعَاءُ هُوَ الْعِبَادَةُ',
            english: '"Dua is worship itself."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'What this means in practice',
        body: `If dua is worship, then directing dua toward anyone other than Allah, whether a deceased saint, an angel, a spirit, or any other created being, is not a minor cultural custom or a harmless additional layer of piety. It is placing an act of worship, in the most literal sense, in front of someone other than the only being who deserves it.

This matters even when the person offering such a dua insists they still believe Allah is the ultimate Creator. As the previous unit already established through the example of the pagans of Makkah, believing Allah created the universe while directing worship, in this case supplication, toward something else entirely, is exactly the gap between Rububiyyah and Uluhiyyah this course has been building toward. A person calling out to a deceased holy figure asking for healing or provision is, in the very act of calling, doing something the Qur'an describes as belonging to Allah and Allah alone.`,
      },
      {
        heading: 'Everyday dua as ordinary worship, not a special occasion',
        body: `A helpful way to internalize this topic is to notice how often dua already happens without being labeled as such. A parent whispering a request for their child's safety while watching them cross a street, a student silently asking for ease before an exam, a traveler asking for a safe journey before starting the car: each of these is dua, and each is an act of worship belonging entirely to Allah, whether or not the person pauses to name it that way in the moment.

Recognizing this turns Uluhiyyah from an abstract category into something a person can notice dozens of times in an ordinary day. Every one of these small, easily overlooked moments is an opportunity to direct genuine worship correctly, and, if misdirected even quietly toward luck, superstition, or something other than Allah, an opportunity for that same worship to be misplaced.`,
      },
      {
        heading: 'Asking created beings for help is not the same as dua to them',
        body: `A distinction worth making clearly, since it is often confused, is the difference between asking a living person for help within their actual ability, and directing worship-level supplication toward a being with no such ability. Asking a doctor to treat an illness, asking a friend to lend money, or asking a teacher to explain a lesson are not acts of Shirk. These are ordinary requests directed at people who possess a real, observable ability to help, using means Allah Himself has placed in the world.

The line is crossed when a request is directed toward a being with no actual, observable ability to grant it, relying instead on some unseen or supernatural power assumed to belong to that being independently of Allah's permission and action. Asking a deceased person, however righteous they were in life, to grant provision or healing directly falls on the wrong side of this line, since the deceased possess no actual means through which such requests could be fulfilled outside of Allah's own action.`,
      },
    ],
  },

  'uluh-3': {
    id: 'uluh-3',
    unit: 'unit-3',
    title: 'Fear, Hope, and Love: the Three Pillars of Worship',
    summary: 'The inner postures of the heart that must be directed to Allah alone.',
    content: [
      {
        heading: 'Worship is not only outward action',
        body: `Up to this point, this unit has focused mostly on outward acts, dua being the clearest example. But scholars of Tawheed consistently emphasize that worship includes inward states of the heart just as much as outward actions, and three of these inward states receive the most attention: fear (khawf), hope (raja), and love (mahabbah). Correct Uluhiyyah requires all three of these to be directed to Allah in a way that exceeds and outweighs how they are directed toward anything else.`,
      },
      {
        heading: 'Fear and hope held together, not separately',
        body: `The Qur'an frequently pairs fear and hope together rather than describing either one alone, since an imbalance toward either extreme creates a real spiritual problem. Excessive fear alone, with no accompanying hope, can lead to despair of Allah's mercy, which the Qur'an names as a serious error in its own right. Excessive hope alone, with no accompanying fear, can lead to complacency about sin, assuming forgiveness regardless of conduct. The healthy believer holds both together, much like a bird flies using two wings rather than one.

A concrete example helps here. Consider a student who has studied seriously for an important exam. They hope for a good result, but this hope does not stop them from also fearing the possibility of failure enough to keep preparing seriously until the very last moment. Neither emotion cancels the other out. Together, they produce sustained, serious effort. Fear and hope of Allah are meant to work the same way, together producing sustained, serious worship, rather than either one alone producing either paralysis or carelessness.`,
      },
      {
        heading: 'Love as the animating force behind worship',
        body: `Love for Allah is described in the Qur'an as something believers hold more intensely than any other love, including the ordinary loves of family, wealth, or status that occupy most people's hearts by default. This is not a demand to feel nothing for family or possessions. It is a demand that whatever love exists for these things remains subordinate to a greater, more central love for Allah, one that would never lead a person to disobey Him for the sake of something loved less.

Fear and hope without love can produce worship that feels like an obligation grudgingly fulfilled, similar to how a person might follow workplace rules purely out of fear of being fired, without any genuine attachment to the organization itself. Love is what transforms worship from reluctant compliance into something closer to how a person naturally wants to please someone they deeply love, checking in on them, thinking of them often, and feeling genuine joy in doing things that please them.`,
      },
      {
        heading: 'Misdirecting these three postures toward other than Allah',
        body: `Just as dua can be misdirected, so can fear, hope, and love. A person who fears a supposed curse from an offended relative more than they fear disobeying Allah has misplaced fear. A person whose entire sense of hope and security rests on a bank balance rather than on Allah's provision, to the point that losing that wealth would collapse their sense of security entirely, has misplaced hope. A person whose love for a public figure, a relationship, or a habit has grown to the point where they would compromise their religious obligations rather than risk losing it, has misplaced love.

None of these examples require bowing to a statue to qualify as a real compromise of Uluhiyyah. They show how these three inward postures can be quietly redirected in ordinary modern life, often without the person involved ever recognizing what has happened, which is precisely why this topic asks for regular, honest self examination rather than a one time theological checklist.`,
      },
      {
        heading: 'A daily practice for checking the heart',
        body: `A simple, practical exercise can help apply this topic concretely. At the end of a day, a person might ask themselves three short questions. What did I fear most today, and was Allah genuinely first on that list. What did I hope for most today, and did that hope rest ultimately on Allah's provision and mercy. What did I love enough today that it shaped my choices, and would that love ever be allowed to override obedience to Allah if the two came into real conflict.

These questions are not meant to produce guilt for having ordinary human emotions about family, work, or health. They are meant to produce honest awareness of where these three postures actually sit in relation to Allah, which is the entire substance of what this topic has been describing.`,
      },
    ],
  },

  'uluh-4': {
    id: 'uluh-4',
    unit: 'unit-3',
    title: 'Reliance (Tawakkul) and Seeking Help (Isti\'anah)',
    summary: 'Placing ultimate trust and reliance in Allah alone.',
    content: [
      {
        heading: 'Sufficiency promised to whoever relies on Allah',
        body: `Tawakkul, placing complete reliance and trust in Allah regarding outcomes, is given a direct and unconditional promise in the Qur'an.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            english: 'And whoever relies upon Allah, then He is sufficient for him.',
            source: 'Surah at-Talaq, 65:3',
          },
        ],
      },
      {
        heading: 'Reliance and effort working together, not against each other',
        body: `A frequent misunderstanding treats tawakkul as passivity, sitting back and waiting for outcomes to arrive without any effort, on the reasoning that Allah will provide regardless. This misunderstanding was already addressed once in the previous unit regarding Qadar, and the same correction applies here directly. A famous exchange preserved in the hadith literature makes the correct balance explicit. A man asked the Prophet ﷺ whether he should tie his camel first and then place his trust in Allah, or simply leave it untied and trust Allah to protect it. The Prophet ﷺ instructed him to tie the camel first, and then place his trust in Allah.

This single instruction captures the entire relationship between effort and reliance. Tying the camel represents the means a person is responsible for using: studying for an exam, applying for a job, taking reasonable precautions for safety, or seeking appropriate medical treatment. Placing trust in Allah afterward represents the recognition that the actual outcome, despite the effort made, ultimately rests in Allah's hands, not in the person's own hands alone. Neither half of this instruction is optional. Skipping the effort and calling it tawakkul is negligence dressed up as piety. Making the effort while trusting entirely in one's own competence, with no reliance on Allah at all, is the exact failure of Uluhiyyah this entire unit has been describing.`,
      },
      {
        heading: 'Seeking help as an act reserved for Allah',
        body: `Isti'anah, seeking help, was already encountered directly in this unit's first topic, within the verse "You alone we worship, and You alone we ask for help." The specific kind of help meant here is help with matters genuinely beyond human capability: guidance of the heart, success in a matter entirely outside human control, protection from unseen harm, or forgiveness of sin. Asking Allah for this kind of help is asking the only being capable of actually granting it.

A well known piece of advice the Prophet ﷺ gave to a young companion captures this same principle in memorable, practical language, worth teaching to children specifically because of how simply it is phrased.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ',
            english: '"If you ask, ask Allah, and if you seek help, seek help from Allah."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Ordinary help from ordinary people remains permitted',
        body: `As with dua in the previous topic, a clear distinction protects this discussion from being misunderstood. Asking a friend to help carry something heavy, asking a colleague to help finish a task, or asking a mechanic to help fix a car are not acts of isti'anah in the religious sense this topic addresses. These are ordinary requests for assistance within a person's actual, observable ability, using means Allah has placed in the world for people to help one another.

The isti'anah that belongs to Allah alone concerns help with matters no created being can actually deliver regardless of effort or intention: the ultimate outcome of an illness, the true guidance of a heart toward faith, protection from matters entirely unseen, or forgiveness for sin. A friend can hand you a tool. No friend can guarantee the outcome of a surgery, however much they might sincerely wish to help.`,
      },
      {
        heading: 'What genuine tawakkul feels like in daily life',
        body: `A person with genuine tawakkul is not someone who feels no anxiety at all, since anxiety is a natural human response to uncertainty and is not, by itself, a failure of faith. Genuine tawakkul is visible in what a person does with that anxiety. Rather than spiraling into despair, obsessively controlling every variable in a desperate attempt to guarantee an outcome, or placing ultimate hope in a single worldly plan with no backup at all, a person with tawakkul makes the reasonable effort available to them, then genuinely settles their heart on the fact that the actual result belongs to Allah, whatever that result turns out to be.

This is precisely the quality the camel hadith was teaching: not the absence of a plan, but the presence of a plan held loosely enough that its outcome does not become the sole foundation of a person's peace of mind.`,
      },
    ],
  },

  'uluh-5': {
    id: 'uluh-5',
    unit: 'unit-3',
    title: 'Sacrifice (Dhabh) and Vows (Nadhr) Belonging to Allah Alone',
    summary: 'Why these specific acts of worship cannot be directed to anyone else.',
    content: [
      {
        heading: 'Every ritual act named as belonging to Allah alone',
        body: `The Qur'an instructs the Prophet ﷺ to declare a comprehensive statement covering not only ritual acts of worship but the entirety of life and death, naming Allah as the sole recipient of every one of them.`,
        verses: [
          {
            type: 'quran',
            arabic: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',
            english: 'Say, indeed my prayer, my sacrifice, my living, and my dying all belong to Allah, Lord of all the worlds.',
            source: 'Surah al-An\'am, 6:162',
          },
        ],
      },
      {
        heading: 'Why sacrifice specifically was named',
        body: `The tafsir literature notes that the word translated here as sacrifice, nusuk, is understood by many of the earliest commentators specifically as ritual slaughter, the animal offerings made during Hajj and Eid al-Adha. The verse names this act specifically, alongside prayer, because sacrifice was, in the pre-Islamic environment the Qur'an first addressed, one of the most commonly offered acts of devotion to false gods, offered to idols in the hope of securing their favor or protection.

By naming prayer and sacrifice together in a single declaration, the verse closes off any possibility of treating sacrifice as a lesser or more flexible category than prayer itself. Slaughtering an animal in the name of anyone other than Allah, whether an idol, a deceased ancestor, or a spirit believed to require appeasement, is treated with the same seriousness as directing prayer itself toward that same being.`,
      },
      {
        heading: 'A concrete example of misdirected sacrifice',
        body: `Consider a practice found in some cultures where an animal is slaughtered at a grave site, or at the threshold of a new house, specifically to ward off harm from a spirit or ancestor believed to require this offering. The person performing this act may sincerely believe in Allah as Creator, may pray five times a day, and may consider themselves a committed Muslim in every other respect. Yet this single act of slaughter, if performed with the intention of pleasing or appeasing a being other than Allah, directly contradicts the declaration in this verse, since sacrifice has been named explicitly as belonging to Allah alone, with no exception carved out for a lesser being believed to also deserve a share of it.

The correct practice, familiar to any Muslim who has taken part in Eid al-Adha, is to slaughter while explicitly mentioning Allah's name and intending the sacrifice purely for Him, precisely because the act itself, not only the words spoken during it, is being classified in this verse as an act of worship.`,
      },
      {
        heading: 'Vows as a form of self imposed worship',
        body: `Nadhr, a vow, is a promise a person makes to perform some act of worship or charity if a particular outcome occurs, such as promising to fast for a week if a specific hardship is resolved. Once made sincerely for Allah's sake, a vow becomes something the person is religiously obligated to fulfill, since they have voluntarily attached an act of worship to Allah's name.

The same principle governing sacrifice applies directly here. A vow made in the name of anyone other than Allah, such as promising an offering to a shrine, a saint, or a spirit in exchange for a favorable outcome, redirects an act that is fundamentally a form of worship toward a being with no right to receive it. The correct practice is a vow made and fulfilled entirely in Allah's name, and scholars have noted that even making unnecessary vows to Allah Himself is discouraged as a general habit, since a person's ordinary voluntary worship should already be sufficient without needing to be conditioned on a specific outcome first.`,
      },
      {
        heading: 'The underlying pattern across this entire unit',
        body: `Sacrifice and vows complete a pattern this unit has been tracing from its first topic onward. Dua, fear, hope, love, reliance, seeking help, sacrifice, and vows are not eight separate rules to memorize independently. They are eight specific expressions of a single underlying principle: every act that qualifies as worship, in whatever form it takes, belongs to Allah alone, and directing even one of these acts toward another being, however small or culturally normalized that act might seem, is a real compromise of Uluhiyyah, regardless of how correctly a person otherwise affirms Allah's Lordship.`,
      },
    ],
  },

  'uluh-6': {
    id: 'uluh-6',
    unit: 'unit-3',
    title: 'Why This Category Was the Point of Conflict with Every Nation',
    summary: 'How acknowledging a Creator never stopped nations from worshipping others.',
    content: [
      {
        heading: 'The same instruction repeated to every nation',
        body: `The pattern already introduced in this course's opening unit, that every prophet delivered the same core message, is stated even more specifically in a verse naming exactly what that message required of every nation that received it.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَّسُولًا أَنِ اعْبُدُوا اللَّهَ وَاجْتَنِبُوا الطَّاغُوتَ',
            english: 'And We certainly sent into every nation a messenger, saying, worship Allah and avoid false objects of worship.',
            source: 'Surah an-Nahl, 16:36',
          },
        ],
      },
      {
        heading: 'Two instructions, not one',
        body: `Notice that this instruction has two connected parts, not one. Worship Allah, and avoid Taghut, meaning avoid every false object of worship. It was not sufficient for a nation to simply add Allah to a list of beings they already worshipped alongside their idols. The instruction specifically required abandoning worship of everything else entirely, which is exactly the demand every disbelieving nation in the Qur'an's accounts consistently resisted.

This two part structure will return directly in this course's later study of Usul Thalaathah, where the concept of Taghut receives its own dedicated unit. For now, it is enough to notice that this same two part instruction, worship Allah alone and reject every alternative, was never a uniquely Islamic demand invented for the seventh century audience of the Qur'an. It was the consistent content of every single prophetic mission described in the Qur'an, across every nation and era.`,
      },
      {
        heading: 'Why Rububiyyah alone never caused conflict',
        body: `As this unit's opening topic and the previous unit's closing topic both established, Rububiyyah was rarely, if ever, the actual point of dispute between a prophet and his people. The pagans of Makkah, the people of Nuh, the people of Ibrahim, and nearly every nation described in the Qur'an already held some concept of a supreme creator god above their various idols. Ibrahim's own father and community worshipped idols while still, in most accounts, acknowledging a greater god above them.

If Rububiyyah alone had been the actual problem, these conflicts would have been resolved quickly through simple philosophical argument about the existence of a creator, a conversation these nations were generally already prepared to agree with. The conflicts instead lasted lifetimes, sometimes centuries, precisely because the actual demand, abandoning worship of everything except Allah, struck directly at inherited custom, social status, economic interests tied to idol worship, and generational identity in a way that abstract agreement about a creator never did.`,
      },
      {
        heading: 'Real historical costs paid over this single category',
        body: `The Qur'an and seerah record real, severe costs paid specifically over this issue of exclusive worship, not over disagreement about Allah's existence. Ibrahim was thrown into a fire by his own people for rejecting their idols. The Prophet ﷺ and his early companions were boycotted, tortured, and exiled from their own city, not because they denied a creator existed, since the Makkans already accepted this, but because they insisted worship belonged to Allah alone and refused to compromise even slightly by allowing a single additional idol to remain acceptable alongside Him.

This history demonstrates something important about Uluhiyyah that a purely academic study of the category might miss: correctly understanding and living out this category has, throughout history, been the actual cost of genuine faith, not merely its intellectual content. A person's Uluhiyyah is rarely tested by whether they can define the term correctly. It is tested by what they are willing to give up, socially, financially, or personally, in order to keep their worship directed to Allah alone.`,
      },
      {
        heading: 'Bringing the unit to its conclusion',
        body: `This unit has moved from a single definition to a complete picture: worship (in the sense of dua, fear, hope, love, reliance, seeking help, sacrifice, and vows) belongs to Allah alone, and this single requirement, simple to state, has been the actual point of conflict between every prophet and the nation they were sent to across all of human history. The next unit turns to the third and final category of Tawheed, Allah's names and attributes, examining not who deserves worship, but how Allah is to be correctly described and understood in the first place.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 4 - TAWHEED AL-ASMA WA'S-SIFAAT (full content, expanded)
  //
  // This unit presents the methodology held by the majority of
  // early Sunni scholarship (the Salaf): affirming Allah's names
  // and attributes as revealed, without distorting their meaning,
  // denying them, resembling them to creation, or speculating on
  // their nature. Imam Malik's well known statement on Istawa is
  // presented as a scholarly athar (a saying attributed to him,
  // recorded by al-Bayhaqi), not as a hadith of the Prophet, and is
  // therefore given in prose rather than in a highlighted verse
  // block reserved for Qur'an and Prophetic hadith. Qur'anic Arabic
  // checked against primary tafsir sources (Ibn Kathir, Tabari,
  // Qurtubi, Baghawi via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // -----------------------------------------------------------
  'asma-1': {
    id: 'asma-1',
    unit: 'unit-4',
    title: 'Definition and Foundational Principles',
    summary: 'How to correctly affirm what Allah has described of Himself.',
    content: [
      {
        heading: 'What this final category actually addresses',
        body: `Tawheed al-Asma wa's-Sifaat concerns correctly affirming the names and attributes Allah has described for Himself in the Qur'an, and that the Prophet ﷺ described for Him in authentic hadith, without denying them, distorting their meaning, comparing them to the attributes of creation, or speculating about their exact nature. Where Rububiyyah asked who creates and manages the universe, and Uluhiyyah asked who deserves worship, this final category asks a more basic question underneath both: who exactly is this Allah being described, and how do we correctly understand what He has told us about Himself.`,
      },
      {
        heading: 'A direct command to call upon Allah by His own names',
        body: `The Qur'an does not leave Allah's names as a private matter of theology reserved for scholars. It commands ordinary believers to use these names actively, in worship and supplication, while warning against a specific misuse of them.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ',
            english: 'And to Allah belong the most beautiful names, so call upon Him by them, and leave alone those who distort His names.',
            source: 'Surah al-A\'raf, 7:180',
          },
        ],
      },
      {
        heading: 'Names and attributes as two closely connected ideas',
        body: `A name (ism) and an attribute (sifah) are closely related but not identical. A name is the actual title used to call upon Allah, such as Ar-Rahman, the Most Merciful, or Al-'Alim, the All-Knowing. An attribute is the quality or characteristic the name points to, such as mercy or knowledge itself. Every one of Allah's revealed names points to a real attribute, and this is precisely why the tafsir literature describes His names as "husna," meaning beautiful or perfect, since each one testifies to an attribute of complete perfection with no defect of any kind.

This is different from human names, which often carry no descriptive meaning at all, or a meaning entirely disconnected from the person carrying it. A person named Salim, meaning safe or sound, may not actually be particularly safe or sound in any special sense. Every one of Allah's names, by contrast, genuinely and completely describes Him, without exception and without falling short in any respect.`,
      },
      {
        heading: 'The general methodology in a single sentence',
        body: `The approach followed by the majority of early Muslim scholarship toward these names and attributes can be summarized in a single guiding sentence: affirm what Allah and His Messenger ﷺ have affirmed of Himself, and deny only what Allah and His Messenger ﷺ have denied of Him, without adding distortion, without stripping away meaning, without comparing Him to creation, and without asking how His attributes actually operate.

This single sentence contains four distinct safeguards, each protecting against a different possible error, and each of the remaining topics in this unit examines one or more of these safeguards in closer detail: affirming without distortion of meaning, affirming without resemblance to creation, accepting without demanding to know the exact nature of an attribute, and avoiding the two opposite extremes that have historically tempted different groups within Islamic theological history.`,
      },
      {
        heading: 'Why this category receives less everyday attention than it deserves',
        body: `Compared to Rububiyyah and Uluhiyyah, this final category rarely comes up in ordinary daily conversation or ordinary daily worship. A person does not usually pause mid-prayer to reflect on the precise methodology behind affirming Allah's attribute of hearing. Yet this category carries real practical weight, since a person's entire mental picture of who Allah actually is, whether they realize it or not, rests on decisions made at this level: is Allah imagined as something like a very powerful human being, is He imagined as an abstract force with no real qualities at all, or is He correctly understood as utterly unique, described accurately through His own revealed words without either extreme.

A useful example makes the stakes clear. Two employees might both claim to know their company's chief executive well. One describes the executive using only vague, generic language that could apply to almost anyone, effectively saying nothing specific at all. The other describes the executive in specific, confident detail, but has actually confused them with someone else entirely, describing a person who does not exist. Correct knowledge requires neither vague emptiness nor confident but mistaken detail. It requires accurate description matching the real person. This unit is concerned with exactly this kind of accuracy, applied to the most important subject a person could ever describe.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `The remaining four topics in this unit build out each piece of the single guiding sentence introduced above. The next topic examines affirming without resemblance to creation. The topic after that examines accepting revealed descriptions without demanding to know their exact nature. The fourth topic names the two historical extremes this methodology guards against directly. The final topic turns from methodology to content, looking closely at several of Allah's actual revealed names and what they mean for a believer's daily relationship with Him.`,
      },
    ],
  },

  'asma-2': {
    id: 'asma-2',
    unit: 'unit-4',
    title: 'Affirming Without Resemblance (Bila Tashbih)',
    summary: 'Why Allah\'s attributes are affirmed without being compared to creation.',
    content: [
      {
        heading: 'One verse answering two opposite errors at once',
        body: `A single verse in the Qur'an is frequently cited by scholars as the clearest possible statement of this entire unit's methodology, since it manages to correct two completely opposite mistakes in the space of a few words.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ',
            english: 'There is nothing whatsoever like Him, and He is the All-Hearing, the All-Seeing.',
            source: 'Surah ash-Shura, 42:11',
          },
        ],
      },
      {
        heading: 'Reading the verse in its two connected halves',
        body: `Notice the structure carefully. The first half, "there is nothing whatsoever like Him," rejects any comparison between Allah and His creation. The second half, "and He is the All-Hearing, the All-Seeing," affirms that Allah genuinely possesses real attributes of hearing and seeing, not merely symbolic or metaphorical ones. The verse holds both truths together in a single sentence rather than presenting them as being in tension with each other.

This matters because a person could easily take only the first half of this verse and conclude that Allah must have no attributes at all, since attributes seem to imply comparison to created beings who also possess hearing and seeing. The second half of the very same verse rules this conclusion out directly. Allah does possess real hearing and real seeing. What is denied is not the attribute itself, but any resemblance between how Allah possesses that attribute and how a created being possesses it.`,
      },
      {
        heading: 'What tashbih actually means',
        body: `Tashbih means comparing or likening Allah's attributes to the attributes of His creation, imagining that Allah's hearing works the way human hearing works, that Allah's hand resembles a human hand, or that Allah's anger resembles human anger, complete with the same limitations, mechanisms, and imperfections. A small number of groups across Islamic history leaned toward this error, sometimes called the Mushabbihah, imagining Allah's attributes in terms drawn too directly and too literally from human experience, effectively reducing Allah to something like an extremely powerful version of a human being.

The verse above closes off this entire direction firmly. Whatever mental image a person's mind naturally produces when it hears the word "hand" or "hearing," drawn as it inevitably will be from human experience, must be immediately corrected by the opening half of this verse: whatever Allah's attribute of hand or hearing actually is, it is not like that image at all, since nothing whatsoever is like Him.`,
      },
      {
        heading: 'Why resemblance undermines Allah\'s transcendence',
        body: `Resemblance is a serious theological problem, not merely a matter of imprecise language, because it quietly reduces Allah's greatness down to the scale of something familiar and limited. A human hand can only touch one thing at a time, becomes tired, ages, and is limited to a single physical location. If Allah's hand were genuinely comparable to this, Allah Himself would share in these same limitations, which directly contradicts the perfection and completeness His revealed names already establish, such as Al-Qadir, the All-Powerful, and Al-'Aziz, the Almighty.

This is precisely why the Qur'an pairs the denial of resemblance with the affirmation of specific perfect attributes in the same verse. Denying resemblance protects Allah's transcendence. Affirming the attribute itself protects the actual, specific meaning of what Allah has revealed about Himself. Removing either half of this balance produces a distorted picture, either an Allah reduced to human scale, or an Allah so abstract that His own revealed words about Himself become meaningless.`,
      },
      {
        heading: 'A modern illustration of the same mistake',
        body: `Tashbih is not only an ancient theological error confined to early historical disputes. A modern equivalent occurs whenever someone imagines Allah literally sitting somewhere the way a person sits in a chair, literally becoming angry the way a person loses emotional control, or literally forgetting something the way human memory fails. Each of these mental pictures, however unintentional, quietly imports human limitation into a description that Allah Himself has told us carries no such limitation.

The correction is not to deny that Allah is described using words also used for human qualities, since the Qur'an and Sunnah plainly use such words. The correction is to hold firmly to the first half of the verse covered in this topic every single time such a description is encountered: whatever this attribute actually is, in its true, complete, perfect reality, nothing whatsoever resembles it.`,
      },
      {
        heading: 'What this asks of an ordinary believer',
        body: `A person does not need advanced theological training to apply this correctly. The practical instruction is simple to state, even if it takes real discipline to maintain consistently: when encountering a verse or hadith describing an attribute of Allah, affirm the attribute as genuinely real and true, and simultaneously refuse to let the mind picture it in the same terms as the equivalent human quality. Both halves matter. Affirming the attribute without this refusal drifts toward tashbih. Refusing the mental image while also refusing to affirm the attribute itself drifts toward the opposite error, covered directly in this unit's fourth topic.`,
      },
    ],
  },

  'asma-3': {
    id: 'asma-3',
    unit: 'unit-4',
    title: 'Accepting Without Asking "How" (Bila Takyif)',
    summary: 'The discipline of accepting revealed descriptions without speculating on their nature.',
    content: [
      {
        heading: 'A verse that has generated more discussion than almost any other',
        body: `Few verses in the Qur'an have generated as much theological discussion across Islamic history as a short description of Allah's relationship to His Throne, one that appears in several places in the Qur'an using the same word.`,
        verses: [
          {
            type: 'quran',
            arabic: 'الرَّحْمَٰنُ عَلَى الْعَرْشِ اسْتَوَىٰ',
            english: 'The Most Merciful rose above the Throne.',
            source: 'Surah Ta-Ha, 20:5',
          },
        ],
      },
      {
        heading: 'A famous exchange that settled the correct response',
        body: `A well known account, recorded across multiple early sources, describes a man asking Imam Malik ibn Anas, one of the great early jurists, exactly how Allah rose above the Throne, meaning what the physical or mechanical nature of this rising actually looked like. Imam Malik is reported to have lowered his head for a long moment, visibly troubled by the question, before responding in a single, carefully constructed sentence that has been repeated by scholars ever since: the rising itself is known, meaning its meaning in the Arabic language is understood, but its exact nature (its "how") is unknown, belief in it is obligatory, and asking about its exact nature is an innovation. He then reportedly instructed that the man be removed from his company, considering the very question itself to reflect a harmful innovation in how Allah's attributes were being approached.`,
      },
      {
        heading: 'What takyif actually means',
        body: `Takyif refers to asking or speculating about the exact mode, mechanism, or nature of one of Allah's attributes, essentially demanding to know "how" it works in a way that could be visualized or fully comprehended by a finite human mind. Imam Malik's response identifies exactly why this question is inappropriate: the meaning of the word "rose" is understood linguistically, but the manner in which Allah, who is utterly unlike creation, actually does this rising is something no human being has the capacity to know or picture, since human experience of "rising" is entirely drawn from limited, physical, created movement.

This is not evasion or a refusal to engage with the question honestly. It is an honest acknowledgment of the actual limits of human knowledge. A finite mind, built entirely from experience within a created, physical universe, has no tools available to comprehend the exact nature of an attribute belonging to the uncreated Creator of that same universe.`,
      },
      {
        heading: 'An everyday comparison that makes the limit understandable',
        body: `A helpful, though imperfect, comparison can make this limit easier to accept. Consider trying to fully explain the exact nature of human love to someone who has never experienced any emotion at all. Even between two human beings who both experience love constantly, the exact internal nature of that experience resists full description in words. A person can describe love's effects, its outward behavior, and even attempt poetic descriptions of it, without ever fully capturing its precise internal reality in language, even though both the speaker and listener share the same basic human nature.

If the exact "how" of an ordinary human emotion already resists full description between two similar human beings, the exact "how" of an attribute belonging to a Being utterly unlike anything in creation should be expected to resist description and comprehension far more completely, not less. Imam Malik's answer accepts this limit honestly rather than pretending a satisfying, fully comprehensible answer exists somewhere if only the right words could be found.`,
      },
      {
        heading: 'Why asking "how" is treated as an innovation',
        body: `Imam Malik's description of the question itself as an innovation, rather than simply an unanswerable question, reflects a deeper concern among early scholars. The Prophet ﷺ and his companions, who understood the Arabic language and the revealed text more completely than any generation since, never asked this kind of question about Allah's attributes, despite having every opportunity and every reason to do so if such a question were considered appropriate or beneficial. Introducing a new category of question they deliberately did not ask, treating it as though it were a necessary and overlooked line of inquiry, itself reflects a kind of dissatisfaction with how they left the matter, which is precisely what the term innovation, in this context, is meant to describe.

The correct posture modeled by the earliest generations was acceptance without inquiry into mechanism: hearing a description of Allah's attribute, affirming its truth and its meaning in the Arabic language, and moving on without treating the absence of a mechanical explanation as an unresolved problem requiring further investigation.`,
      },
      {
        heading: 'Applying this principle consistently across every attribute',
        body: `Scholars extended Imam Malik's specific answer regarding Istawa to every other attribute described for Allah in the Qur'an and Sunnah: His hearing, His seeing, His hand, His pleasure, His anger, and every other revealed description follows the same pattern. Each is real and true in meaning. Each is affirmed sincerely. And the exact nature or mechanism of each is left entirely to Allah's own knowledge, since demanding to know it exceeds what any created mind is actually capable of grasping.

This consistency matters. A person cannot reasonably apply "bila takyif" to one attribute while demanding a mechanical explanation for another. The same honest acceptance of human limitation that Imam Malik modeled regarding Istawa is the same acceptance this entire unit asks a believer to extend to every single description Allah has given of Himself.`,
      },
    ],
  },

  'asma-4': {
    id: 'asma-4',
    unit: 'unit-4',
    title: 'The Twin Dangers of Ta\'til and Tashbih',
    summary: 'The two opposite errors this category of Tawheed protects against.',
    content: [
      {
        heading: 'A single path between two opposite cliffs',
        body: `Everything covered so far in this unit can be pictured as a narrow, correct path running between two opposite cliffs, each representing a serious theological error. On one side sits tashbih, already covered directly in this unit's second topic, comparing Allah's attributes too closely to the attributes of creation. On the other side sits an equally serious but opposite error: ta'til, denying or stripping away Allah's attributes entirely, or emptying them of any real meaning through excessive reinterpretation.`,
      },
      {
        heading: 'What ta\'til actually means',
        body: `Ta'til comes from a root meaning to disable, empty out, or leave vacant. In this context, it refers to denying that Allah truly possesses the attributes He has described for Himself, either by rejecting them outright, or by reinterpreting them so heavily that their plain, intended meaning is effectively removed while a technically different word is left standing in its place. Historically, groups such as the Jahmiyyah and, in certain matters, segments of the Mu'tazilah leaned toward this error, driven partly by a sincere desire to protect Allah's transcendence from any hint of resemblance to creation, but overcorrecting so far in that direction that the actual, plain meaning of Allah's own revealed words about Himself was sacrificed instead.

A concrete example of this overcorrection is treating Allah's attribute of "hand," mentioned in several verses, as nothing more than a figurative reference to power or blessing, with no real attribute called "hand" existing at all. While avoiding this specific word out of excessive caution regarding resemblance might seem protective at first glance, it comes at the direct cost of denying something Allah chose to reveal about Himself in exactly this wording, treating His own chosen words as requiring correction or replacement.`,
      },
      {
        heading: 'Why ta\'til, despite good intentions, still causes real harm',
        body: `Groups drawn toward ta'til are often motivated by a genuinely sincere concern: protecting Allah from being reduced to something resembling creation. This concern is not wrong in itself, since this exact concern is precisely what the first half of the verse covered in this unit's second topic already addresses directly. The error is not the concern itself, but the specific method chosen to address it, emptying out revealed meaning entirely rather than affirming the attribute while simultaneously denying resemblance, which is the balance the Qur'an's own wording already models without needing any reinterpretation at all.

The practical harm of ta'til is that it treats Allah's own chosen words about Himself as a problem requiring a solution, rather than trusting that Allah, who knows Himself perfectly and chooses His own words with complete precision, described Himself exactly as He intended to be understood.`,
      },
      {
        heading: 'The balanced position stated plainly',
        body: `Commenting on this exact tension, one early scholar offered a compact description of correct Tawheed in this area that has been repeated often since: it is affirming an essence and attributes that are not resembled by anything in creation, and are not emptied of their real meaning either. This single sentence captures both halves of the balance this entire unit has been building toward. Reject resemblance. Reject emptying. Hold both rejections together at the same time, exactly as the wording of Surah ash-Shura 42:11 already does within a single short verse.`,
      },
      {
        heading: 'Three responses to a single verse, only one of them correct',
        body: `A concrete comparison makes the difference between all three positions clear at once. Consider the verse mentioning Allah's Hand. A person leaning toward tashbih imagines a hand with fingers, joints, and physical limitations resembling a human hand, simply on a larger or more powerful scale. A person leaning toward ta'til denies that any actual attribute called "hand" exists at all, treating the word as pure metaphor for power with no real referent behind it. The balanced position affirms that Allah genuinely possesses an attribute called Hand, real and true in whatever manner befits Him, while firmly rejecting any picture of it resembling a created hand in shape, limitation, or mechanism, and declining to speculate further on its exact nature, exactly as covered in the previous topic on bila takyif.

Of these three responses, only the third one takes the entirety of the Qur'an's own wording seriously: affirming what Allah affirmed of Himself, in the exact words He chose, while rejecting resemblance, exactly as instructed in a single verse already covered in this unit.`,
      },
      {
        heading: 'Why maintaining this balance actually matters',
        body: `This balance is not a minor technical dispute of interest only to specialists. How a person answers this question shapes their entire relationship with Allah. Someone who drifts toward tashbih risks worshipping a mental image closer to an extremely powerful created being than to the actual transcendent Creator, which can quietly open the door to forms of disrespect or overfamiliarity unsuited to Allah's true greatness. Someone who drifts toward ta'til risks worshipping an abstract, distant force stripped of the very qualities, mercy, hearing, closeness, and response to dua, that make a genuine relationship with Allah meaningful in the first place, potentially weakening their sense that Allah truly hears them, truly sees them, and truly responds to them.

The balanced position this unit has described protects both halves of what a healthy relationship with Allah actually requires: a Being great and transcendent enough to deserve complete worship, and a Being genuinely attentive and near enough for that worship, and the dua that accompanies it, to feel meaningful rather than directed into an empty void.`,
      },
    ],
  },

  'asma-5': {
    id: 'asma-5',
    unit: 'unit-4',
    title: 'Examples of Allah\'s Beautiful Names and Their Meanings',
    summary: 'A closer look at several of Allah\'s ninety-nine names.',
    content: [
      {
        heading: 'A specific number, and a specific promise',
        body: `Having covered the correct methodology for approaching Allah's names and attributes across this unit's first four topics, this final topic turns from method to content, beginning with a hadith that gives both a specific number of names and a specific reward attached to engaging with them properly.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ',
            english: '"Allah has ninety-nine names, one hundred minus one, whoever encompasses them will enter Paradise."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'What "encompassing" these names actually requires',
        body: `Scholars commenting on this hadith clarify that the word translated here as "encompasses" (ahsaha) means something considerably deeper than simple memorization. It includes memorizing the names, correctly understanding their meanings, believing in them sincerely, and living in a way shaped by that understanding, calling upon Allah using the specific name most fitting to a specific need, rather than treating the list as a piece of trivia to be recited without reflection.

This matters directly for how the rest of this topic should be read. The goal of examining a handful of Allah's names closely is not simply informational. It is meant to change how a person actually calls upon Allah in different situations, connecting directly back to the instruction covered in this unit's first topic: "call upon Him by them."`,
      },
      {
        heading: 'Names describing knowledge and awareness',
        body: `Al-'Alim, the All-Knowing, and Al-Khabir, the All-Aware, describe Allah's complete and total knowledge of everything, including matters entirely hidden from any created being: private thoughts never spoken aloud, actions performed in complete solitude, and events yet to occur. A person struggling with a private difficulty they feel unable to share with anyone finds real comfort in calling upon Al-'Alim specifically, since this name carries the direct implication that nothing about their situation is actually hidden from Allah, even if it feels entirely hidden from everyone else.

As-Sami', the All-Hearing, and Al-Basir, the All-Seeing, already encountered directly in this unit's second topic, describe Allah's genuine hearing of every sound, including a dua whispered so quietly no other human being could possibly hear it, and His genuine seeing of every situation, including one occurring in complete darkness or complete privacy. Calling upon these two names specifically during a moment when a person feels entirely alone and unheard directly addresses that exact feeling with its precise theological correction.`,
      },
      {
        heading: 'Names describing mercy and provision',
        body: `Ar-Rahman and Ar-Rahim, both derived from the same root meaning mercy, are placed at the very opening of nearly every surah in the Qur'an, and scholars note a meaningful distinction between them: Ar-Rahman describes mercy so vast it encompasses all of creation, believer and disbeliever alike, in this worldly life, while Ar-Rahim describes a mercy specifically directed toward believers, particularly in the Hereafter. A person overwhelmed by the weight of their own sins finds real, specific comfort in reflecting on both these names together, recognizing a mercy broad enough to have sustained them despite their shortcomings, and specific enough to be available to them directly through sincere repentance.

Ar-Razzaq, the Provider, describes Allah as the sole source of sustenance already covered in detail in this course's second unit. Calling upon Ar-Razzaq specifically during genuine financial hardship connects a person's immediate, practical worry directly to the correct theological source of its resolution, rather than leaving that worry to be processed through worry alone.`,
      },
      {
        heading: 'Names describing forgiveness and steadfastness',
        body: `Al-Ghafur and At-Tawwab, the Perpetually Forgiving and the Ever-Returning, describe Allah's specific willingness to forgive sin repeatedly, no matter how many times a person returns seeking forgiveness after falling back into the same error. This connects directly to a theme already covered in this course's earlier unit on Adab: the door to repentance is never closed while a person is still alive, and these two names describe exactly the quality of Allah that makes this true.

Al-Hayy and Al-Qayyum, the Ever-Living and the Sustainer of All Existence, appear together at the opening of Ayat al-Kursi, already touched upon in this course's second unit on Rububiyyah. These two names describe a life that never began and will never end, and a sustaining of all existence that never grows tired or requires rest, directly answering a person's natural anxiety about the fragility and impermanence of everything else they depend on, since the One who sustains them is subject to neither fragility nor impermanence at all.`,
      },
      {
        heading: 'Bringing this unit, and this course\'s three categories, to a close',
        body: `This closing topic completes not only Unit 4 but the full three-part structure introduced at the very start of this course. Rububiyyah established who alone creates, owns, and manages the universe. Uluhiyyah established who alone deserves worship, in every form that worship takes. Asma wa's-Sifaat has now established how Allah is to be correctly described and understood, affirmed without resemblance, accepted without demanding to know an exact mechanism, and protected from both the error of comparing Him to creation and the error of emptying His revealed words of their meaning.

These three categories are not three separate religions or three separate beliefs to be memorized independently. They describe a single, complete relationship with a single Being, correctly understood as Lord, correctly worshipped as the only true God, and correctly described using the very words He chose to describe Himself. The next unit turns from this positive foundation to its direct opposite, examining Shirk in real detail, precisely because understanding Tawheed clearly, as this course has now done across four full units, is the necessary preparation for recognizing exactly where and how it can be compromised.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 5 - SHIRK: ITS TYPES AND DANGERS (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Qurtubi, Baghawi, as-Sa'di via quran.com and
  // quran.ksu.edu.sa) before writing. English renderings are an
  // original paraphrase of the meaning, not copied from a single
  // named published translation.
  // -----------------------------------------------------------
  'shirk-1': {
    id: 'shirk-1',
    unit: 'unit-5',
    title: 'Definition of Shirk and Why It Is the Greatest Sin',
    summary: 'Understanding the one sin the Qur\'an says will not be forgiven without repentance.',
    content: [
      {
        heading: 'A definition drawn directly from the previous four units',
        body: `Shirk means associating a partner with Allah in any of the three categories of Tawheed already covered across this course: giving something or someone a share in Allah's Lordship, directing an act of worship to something or someone besides Allah, or describing Allah's names and attributes in a way that compromises His uniqueness. Having spent four full units building a positive, detailed picture of correct Tawheed, this unit now turns to its direct opposite, since recognizing Shirk clearly requires first knowing, in real detail, exactly what it stands in contrast to.`,
      },
      {
        heading: 'The one sin left outside the scope of automatic forgiveness',
        body: `Among every sin a person could commit, the Qur'an singles out Shirk with a distinction given to no other sin whatsoever.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ',
            english: 'Indeed, Allah does not forgive that partners be associated with Him, but He forgives what is less than that for whomever He wills.',
            source: 'Surah an-Nisa, 4:48',
          },
        ],
      },
      {
        heading: 'Reading this verse with the correct scope',
        body: `This verse requires a precise reading. It describes a person who dies while still holding onto Shirk, without ever having repented from it during their life. Repentance from Shirk, made sincerely before death, is accepted just as repentance from any other sin is accepted, since Allah's mercy extends to every sin a person turns back from genuinely. What this verse actually closes off is a different scenario entirely: dying still attached to Shirk, having never repented from it at all.

Understood this way, the verse is not a statement that Shirk can never be forgiven under any circumstance. It is a statement about the seriousness of allowing Shirk to remain unaddressed until death, since every other sin remains within the general scope of Allah's forgiveness even without repentance, subject to His will, while Shirk specifically requires that repentance to fall within that same scope.`,
      },
      {
        heading: 'Why Shirk specifically receives this unique severity',
        body: `Every other sin, however serious, remains a wrong committed by a creature who still correctly recognizes Allah as the only Lord and only true God. Shirk is different in kind, not only in degree. It attacks the very foundation every other act of obedience or disobedience is built upon, placing a created being, an idea, or an object in a position that belongs to Allah alone. A person who steals has wronged another person while still acknowledging Allah's sole right to worship. A person who commits Shirk has misdirected the very worship their entire existence, as covered in this course's opening unit, was created to provide.

A useful comparison illustrates the difference in kind. A single wrong decision within a company, even a serious one, is different from an employee who quietly begins reporting to and taking direction from a rival company while still appearing to work for the original one. The first is a mistake within a relationship that remains fundamentally intact. The second corrupts the very foundation of the relationship itself. Shirk is this second kind of wrong, applied to the single most important relationship a person has.`,
      },
      {
        heading: 'A serious matter, not a reason for despair',
        body: `Given the severity described in this topic, it is worth stating plainly what this unit is not asking of its reader. It is not asking anyone to despair of Allah's mercy, since the door to repentance from Shirk, like the door to repentance from any sin, remains genuinely open throughout a person's life, as this course's earlier unit on repentance already established. It is asking for the specific seriousness this matter deserves: taking real, honest inventory of one's own beliefs and practices, rather than assuming Shirk is a problem belonging only to distant historical idol worshippers with no possible relevance to a practicing Muslim today.

The remainder of this unit exists precisely to make that honest inventory possible, moving from Shirk's most obvious, dramatic forms toward its most subtle and easily overlooked ones.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `The next topic examines Major Shirk, the forms serious enough to remove a person from Islam entirely. The topic after that examines Minor Shirk, smaller but still genuinely serious violations that can enter ordinary speech and habit without a person fully realizing it. The fourth topic examines Hidden Shirk, the specific danger of performing sincere-looking worship for the sake of being seen rather than for Allah alone. The final topic closes this unit by examining the actual consequences of Shirk, both in this life and the next, completing the picture this course's first unit opened with a brief mention of, now explored in full depth.`,
      },
    ],
  },

  'shirk-2': {
    id: 'shirk-2',
    unit: 'unit-5',
    title: 'Major Shirk (Shirk Akbar) and Its Categories',
    summary: 'The forms of Shirk that remove a person from Islam entirely.',
    content: [
      {
        heading: 'What qualifies as Major Shirk',
        body: `Major Shirk (Shirk Akbar) refers to directing a genuine act of worship, of the kind already catalogued in detail in this course's third unit, to something or someone other than Allah. This includes praying to other than Allah, sacrificing to other than Allah, making vows to other than Allah, or believing that another being shares in Allah's Lordship or attributes at the level already covered in this course's second and fourth units. This category of Shirk removes a person from Islam entirely, regardless of what else that person otherwise believes or practices correctly.`,
      },
      {
        heading: 'How idol worship first began, according to the Qur\'an',
        body: `The Qur'an traces the very first instance of widespread idol worship to a specific, historically documented origin, described in the account of the people of Nuh (peace be upon him). Several righteous men from an earlier generation died, and their communities, grieving deeply, erected statues in their honor simply to remember them and to be reminded of their good example, statues later named Wadd, Suwa', Yaghuth, Ya'uq, and Nasr. Over time, as the generation that remembered these men as ordinary righteous people passed away, later generations who no longer knew this original context began venerating the statues themselves, and eventually worshipping them outright.

This origin story is genuinely instructive for how easily Major Shirk can develop gradually rather than beginning as a deliberate rejection of Allah. It began, according to the tafsir literature, with a sincere and understandable impulse: honoring good people. It ended, generations later, in worship directed toward stone. The distance between honoring a memory and worshipping an object turned out to be much shorter than the original community likely imagined.`,
      },
      {
        heading: 'The intermediary excuse, then and now',
        body: `The Qur'an records the specific justification the pagans of Makkah gave for worshipping their idols, an excuse that turns out to be strikingly relevant well beyond its original historical setting.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ',
            english: 'And those who take protectors besides Him say, we only worship them so that they may bring us nearer to Allah.',
            source: 'Surah az-Zumar, 39:3',
          },
        ],
      },
      {
        heading: 'Why the intermediary excuse does not remove the Shirk',
        body: `This verse reveals something important about the psychology of Major Shirk that a purely historical study might miss: the Makkans were not claiming their idols were themselves the ultimate Creator, competing directly with Allah. They openly acknowledged Allah as the supreme Creator, exactly as covered in this course's second unit. Their claim was more subtle: the idols were merely intermediaries, worshipped specifically to gain closer access to Allah, similar to approaching a powerful ruler through a trusted advisor rather than presuming to approach the ruler directly.

The Qur'an rejects this reasoning entirely, treating it as Shirk regardless of the sincere intention behind it. The act of worship itself, whatever the intended purpose behind performing it, belongs to Allah alone, and directing it toward an intermediary does not transform it into something other than worship. This same reasoning applies directly to modern practices such as praying to a deceased saint specifically to intercede with Allah, or believing a particular shrine holds special power to convey requests more effectively than direct dua. The stated intention (bringing a person closer to Allah) does not change what is actually being done (directing worship to other than Allah).`,
      },
      {
        heading: 'Categories of Major Shirk recognized by scholars',
        body: `Scholars typically organize Major Shirk into several recognizable categories, each corresponding to a different act of worship already covered in this course's third unit misdirected toward other than Allah: Shirk in dua, calling upon someone or something besides Allah for matters only Allah can grant; Shirk in intention and purpose, performing an outwardly Islamic act, such as prayer or charity, entirely for show or worldly gain rather than for Allah at all; Shirk in obedience, following a religious or legal authority in clearly permitting what Allah has forbidden or forbidding what Allah has permitted, treated as equivalent to worshipping that authority; and Shirk in love, loving someone or something with the specific kind of complete, submissive love that belongs to Allah alone, of the sort already covered in this course's third unit.

Each of these categories returns directly to material already covered earlier in this course, confirming a pattern worth noticing: Major Shirk is not a separate, unrelated subject requiring entirely new concepts. It is precisely what happens when any of the specific acts of worship already studied in detail are misdirected away from Allah.`,
      },
      {
        heading: 'A modern example combining several categories at once',
        body: `Consider a person who visits a grave believed to hold special spiritual power, asks the deceased occupant directly for healing from an illness, promises an offering at the site if the request is granted, and defends this practice by insisting it merely helps them feel closer to Allah. This single scenario combines Shirk in dua (asking the deceased for something only Allah can grant), Shirk through vows (promising an offering to something other than Allah), and the exact intermediary justification already addressed directly in this topic. The sincerity of the person's underlying desire for healing, and even their sincere belief that this practice honors rather than opposes their faith, does not change the actual classification of what is being done, which is precisely why this unit places such emphasis on correct definition rather than assumed good intention alone.`,
      },
    ],
  },

  'shirk-3': {
    id: 'shirk-3',
    unit: 'unit-5',
    title: 'Minor Shirk (Shirk Asghar) and Everyday Examples',
    summary: 'Smaller but still serious forms of Shirk that can enter ordinary speech and habits.',
    content: [
      {
        heading: 'A category between correct Tawheed and Major Shirk',
        body: `Minor Shirk (Shirk Asghar) does not remove a person from Islam the way Major Shirk does, but it remains a genuinely serious matter, described by the Prophet ﷺ himself as something to be actively feared and guarded against, precisely because it can enter a person's ordinary speech and habits without triggering the same alarm that an obvious act of idol worship would.`,
      },
      {
        heading: 'Swearing by other than Allah',
        body: `A specific, concrete example the Prophet ﷺ addressed directly concerns the ordinary habit of swearing oaths by something other than Allah.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ حَلَفَ بِغَيْرِ اللَّهِ فَقَدْ كَفَرَ أَوْ أَشْرَكَ',
            english: '"Whoever swears by other than Allah has committed disbelief or associated a partner with Allah."',
            source: 'Jami\' at-Tirmidhi and Sunan Abi Dawud',
          },
        ],
      },
      {
        heading: 'Why an oath specifically counts as this kind of Shirk',
        body: `An oath, by its very nature, invokes something considered great enough to add real weight and seriousness to a statement. Swearing "by my honor," "by my mother's life," or "by the Ka'bah" places that thing, even briefly and perhaps unconsciously, in a position of reverence that belongs to Allah alone. This is precisely why Ibn Umar, upon hearing a man swear "by the Ka'bah," corrected him immediately rather than treating it as a harmless figure of speech, citing this exact hadith as his reasoning.

The Prophet ﷺ gave a simple, practical alternative that avoids this issue entirely: "Whoever must swear an oath, let him swear by Allah, or else remain silent." This is a habit worth building deliberately, since expressions invoking something other than Allah for emphasis are common enough in ordinary speech across many cultures and languages that they can easily go unnoticed as anything worth correcting.`,
      },
      {
        heading: 'The phrase corrected by the Prophet ﷺ himself',
        body: `A well documented incident shows the Prophet ﷺ personally correcting a companion's ordinary, well intentioned speech for exactly this reason. A man once said to him, "Whatever Allah wills, and you will," intending only sincere praise and respect. The Prophet ﷺ corrected him directly, asking whether he had made him an equal to Allah, and instructing him instead to say simply, "Whatever Allah wills alone."

This incident is worth sitting with, since the man's intention was clearly reverent, not rebellious. He had no interest in actually claiming the Prophet ﷺ shared Allah's power. Yet the specific phrasing itself, joining Allah's will and a created being's will together with the same connecting word without qualification, was corrected immediately, showing that even well intentioned speech carries real weight in this category, and that good intention alone does not automatically make a phrase theologically sound.`,
      },
      {
        heading: 'Everyday phrases worth examining',
        body: `The same underlying principle extends to modern expressions common in everyday speech across many languages and cultures: attributing an outcome to luck, fate, or a lucky object as though it holds independent power alongside Allah's decree; saying "if it weren't for so-and-so, this would never have happened" in a way that places a created being's role above rather than alongside Allah's actual decree, already covered in detail in this course's second unit; or treating a particular ritual, number, or object as bringing protection or good fortune on its own, independent of Allah's permission.

None of these examples typically reflect a deliberate intention to worship something besides Allah, which is exactly why they fall under Minor rather than Major Shirk. But the Prophet's ﷺ correction of the "Allah wills, and you will" phrase demonstrates that unintentional, casually spoken Shirk still matters enough to be corrected directly, rather than dismissed simply because no disrespect toward Allah was actually intended.`,
      },
      {
        heading: 'Building the habit of noticing these moments',
        body: `The practical task this topic sets is not memorizing an exhaustive list of forbidden phrases, since new expressions carrying the same underlying error will always continue to appear in changing languages and cultures. It is developing a general habit of attentiveness to one's own speech: noticing when an oath is about to invoke something other than Allah, noticing when credit for an outcome is being placed somewhere other than, or alongside without proper qualification, Allah's decree, and gently correcting the habit once noticed, exactly as the Prophet ﷺ modeled directly with his own companion.`,
      },
    ],
  },

  'shirk-4': {
    id: 'shirk-4',
    unit: 'unit-5',
    title: 'Hidden Shirk (Shirk Khafi): Riya and Its Dangers',
    summary: 'The subtle danger of performing worship to be seen by others.',
    content: [
      {
        heading: 'The specific fear the Prophet ﷺ named for his own community',
        body: `Among every danger the Prophet ﷺ warned his companions about, one specific concern was named as more feared for his own community than even the trial of the false messiah (Dajjal).`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِنَّ أَخْوَفَ مَا أَخَافُ عَلَيْكُمُ الشِّرْكُ الْأَصْغَرُ، الرِّيَاءُ',
            english: '"Indeed, the thing I fear most for you is minor shirk, riya (showing off in worship)."',
            source: 'Musnad Ahmad',
          },
        ],
      },
      {
        heading: 'What riya actually means',
        body: `Riya refers to performing an act of worship, whether prayer, charity, recitation of the Qur'an, or any other good deed, with the intention, even partially, of being seen and praised by other people rather than performed sincerely for Allah alone. This does not mean every good deed performed in public is automatically riya, since public worship (praying in congregation, giving charity openly to encourage others) carries its own real virtue when the underlying intention remains sincere. Riya specifically concerns the presence of a competing motivation: a portion of the reward being sought from people's approval and attention rather than entirely from Allah.

This category is described as a form of Shirk because it divides an act that belongs entirely to Allah between Allah and the audience of onlookers, exactly the same underlying error covered throughout this unit, now located inside a person's own heart and intention rather than in an external object of worship.`,
      },
      {
        heading: 'Why it is described as more hidden than an ant\'s footsteps',
        body: `Scholars have long described this specific danger using a memorable image: Shirk of this kind is more hidden, in this community specifically, than the sound of a black ant crawling across a black rock on a moonless night. The comparison is deliberately extreme, since every added detail (a black ant, on a black rock, in complete darkness) makes the thing being described progressively more impossible to detect, precisely mirroring how difficult riya can be to detect within one's own heart, especially since the outward action performed with riya can look completely identical to the same action performed with full sincerity.

A concrete example makes this vivid. Two people might give an identical amount of charity, in an identical public setting, using identical words. From the outside, no observer, however careful, could distinguish whose charity was purely for Allah's sake and whose carried a hidden hope of being noticed and praised for their generosity. Only the person giving the charity, examining their own heart honestly, has any real access to that distinction at all, and even they may struggle to see it clearly without deliberate self examination.`,
      },
      {
        heading: 'A dua the Prophet ﷺ specifically taught for this danger',
        body: `Precisely because riya is so difficult to detect through self examination alone, the Prophet ﷺ taught a specific dua asking Allah's direct help in identifying and removing it, when companions asked how they could possibly guard against something this hidden: "O Allah, we seek refuge in You from associating any partner with You that we are aware of, and we seek Your forgiveness for that which we are not aware of." This dua explicitly acknowledges the limits of self awareness already described in the previous section, asking Allah to cover the specific blind spot a person's own self examination cannot fully reach on its own.`,
      },
      {
        heading: 'Practical steps for guarding against riya',
        body: `Beyond this specific dua, scholars recommend several practical habits for guarding against riya: performing at least some acts of worship, particularly voluntary ones, in complete privacy specifically to strengthen the habit of sincerity away from any audience at all; pausing briefly before a public act of worship to silently renew the intention that it is for Allah alone, a habit already encouraged in this course's very first unit; and resisting the urge to publicize every good deed performed, allowing some acts of worship to remain known only to Allah, which itself becomes a small, deliberate exercise in sincerity.

None of these habits guarantee complete freedom from riya, given how genuinely hidden this danger is described as being. But they represent the same kind of honest, ongoing self examination this unit has asked for throughout, applied specifically to the single danger the Prophet ﷺ feared most for his own community.`,
      },
      {
        heading: 'Riya as a warning, not a reason to abandon visible worship',
        body: `A final clarification protects this topic from being misapplied. The correct response to learning about riya is not abandoning visible, public acts of worship altogether out of fear of impure intention, since this would remove real, legitimate goods, such as encouraging others through visible good example, that the Sunnah itself endorses. The correct response is the ongoing, honest self examination this topic has described: continuing to perform visible worship where it is genuinely beneficial, while regularly checking the intention behind it, and turning to Allah directly, through the specific dua already covered, for help with the portion of that intention no self examination alone can fully see.`,
      },
    ],
  },

  'shirk-5': {
    id: 'shirk-5',
    unit: 'unit-5',
    title: 'The Consequences of Shirk in This Life and the Next',
    summary: 'What Shirk costs a person, both now and in the Hereafter.',
    content: [
      {
        heading: 'A specific, named consequence in the Hereafter',
        body: `Having covered Shirk's definition and its major, minor, and hidden forms across this unit, this final topic turns to what the Qur'an states directly about its actual cost, beginning with one of the most explicit statements of consequence found anywhere in the Qur'an.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّهُ مَن يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ',
            english: 'Indeed, whoever associates partners with Allah, Allah has forbidden Paradise for him, and his refuge is the Fire.',
            source: 'Surah al-Ma\'idah, 5:72',
          },
        ],
      },
      {
        heading: 'The context this verse was originally revealed within',
        body: `This verse appears in the Qur'an's discussion of a specific historical form of Shirk: the claim that Allah Himself is identical to the Messiah, Isa (Jesus), son of Maryam. The verse quotes Isa's own recorded teaching to correct this claim directly, describing him instructing his people to worship Allah, his Lord and their Lord, rather than himself, before this same severe warning about Shirk's consequence is stated.

The tafsir literature draws out a broader implication from this specific example: the warning is not limited only to this particular historical claim about Isa, but applies to associating any created being, whether a prophet, an angel, or any other creation whatsoever, with Allah in the specific ways covered throughout this unit. The general principle, as several classical commentators note directly, applies to Shirk in any of its forms, using this particular historical instance as its illustration.`,
      },
      {
        heading: 'Deeds nullified, not merely unrewarded',
        body: `Beyond the specific consequence in the Hereafter, the Qur'an describes a further cost that applies even within this worldly life: Shirk does not merely fail to earn reward alongside a person's other good deeds. It actively nullifies them.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَئِنْ أَشْرَكْتَ لَيَحْبَطَنَّ عَمَلُكَ وَلَتَكُونَنَّ مِنَ الْخَاسِرِينَ',
            english: 'If you were to associate partners with Allah, your deeds would surely be nullified, and you would certainly be among the losers.',
            source: 'Surah az-Zumar, 39:65',
          },
        ],
      },
      {
        heading: 'Why nullification is a distinct and additional cost',
        body: `This verse, addressed hypothetically even to the Prophet ﷺ himself as a form of emphasis, since he was protected from ever actually committing Shirk, establishes a principle that goes beyond simply failing to earn reward for Shirk itself. It describes an entire record of otherwise good deeds, prayer, charity, kindness, and honesty, being rendered void specifically because of Shirk, as though none of it had ever been performed at all.

A concrete image makes this cost easier to grasp. Consider spending years carefully building up a large savings account through consistent, disciplined effort, only to have the entire account emptied in a single moment through one catastrophic decision. The years of careful saving do not simply stop counting from that point forward. They are erased entirely, as though they had never happened. This is the scale of cost this verse describes: not merely a missed opportunity for future reward, but the loss of an entire accumulated record of good.`,
      },
      {
        heading: 'Consequences visible already in this worldly life',
        body: `Beyond the Hereafter, Shirk carries real, observable costs within ordinary daily life as well, extending directly from principles already covered throughout this course. A person who places their ultimate hope and security in wealth, status, or another person, rather than in Allah, as already covered in this course's third unit on Uluhiyyah, experiences real psychological instability whenever that object of misplaced hope becomes threatened or lost, since it was never actually capable of bearing the weight being placed on it. A person who fears a supposed curse or unseen harm from another creature more than they fear displeasing Allah lives with a form of anxiety this course's earlier units have already shown to be misdirected, chasing protection from a source with no actual power to grant it.

These worldly costs are not separate from the theological consequences already described. They are the natural, observable outworking of misplacing trust, hope, and fear onto something genuinely incapable of bearing them, exactly as this course's second and third units already explained regarding Rububiyyah and Uluhiyyah.`,
      },
      {
        heading: 'Closing this unit, and returning to this course\'s central purpose',
        body: `This unit closes the first half of this course's structure: four units building a detailed, positive picture of correct Tawheed, and one unit examining its opposite in equal detail, from its most dramatic historical forms to its most quietly hidden ones. The severity described throughout this final topic is not meant to produce despair, but the same honest, active vigilance this entire unit has asked for throughout: recognizing Shirk clearly enough to actually guard against it, in its major, minor, and hidden forms alike, rather than assuming it belongs only to distant history with no bearing on a believer's own daily life and speech.

Having now built a complete foundation across five full units, this course turns next to a direct, sequential study of one of the most widely taught classical texts summarizing everything covered so far: Usul Thalaathah, by Shaykh Muhammad ibn Abdul-Wahhab, beginning with an introduction to the text itself and its author.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 6 - USUL THALAATHAH: INTRODUCTION AND THE FOUR MATTERS
  // (full content, expanded)
  //
  // This unit begins direct study of the actual text of Usul
  // Thalaathah. Shaykh Muhammad ibn Abdul-Wahhab's own words from
  // the primer are quoted in prose with clear attribution, not
  // placed in the highlighted Qur'an/Hadith verse blocks, since he
  // is neither. Those blocks are reserved for the Qur'an itself and
  // for authentic Prophetic hadith, exactly as this book itself
  // cites them as evidence. Basic biographical facts about the
  // author were checked against standard reference sources.
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Baghawi via quran.com and quran.ksu.edu.sa)
  // before writing. English renderings of Qur'anic verses are an
  // original paraphrase of the meaning, not copied from a single
  // named published translation.
  // -----------------------------------------------------------
  'ut1-1': {
    id: 'ut1-1',
    unit: 'unit-6',
    title: 'Who Was Shaykh Muhammad ibn Abdul-Wahhab?',
    summary: 'A brief introduction to the author of Usul Thalaathah.',
    content: [
      {
        heading: 'Family, birthplace, and early education',
        body: `Muhammad ibn Abdul-Wahhab was born in 1703 CE (1115 AH) in the town of Uyaynah, in the Najd region of central Arabia, into a family already well established in Islamic scholarship. His father, grandfather, and several other relatives served as judges (qadis) and teachers of Hanbali jurisprudence, the same legal school Ahmad ibn Hanbal founded centuries earlier. He memorized the Qur'an as a young child and began his formal study of jurisprudence, tafsir, and hadith directly under his father before he had even reached adulthood.`,
      },
      {
        heading: 'Travels in search of knowledge',
        body: `Following a pattern common among serious students of that era, Ibn Abdul-Wahhab left Najd in his early twenties specifically to seek further knowledge beyond what his hometown could offer. He performed Hajj and spent time studying in Makkah and Madinah, and later traveled to Basra, in present day Iraq, where he continued studying hadith and jurisprudence for several years. Among the scholars who influenced his thinking most directly were the writings of Ibn Taymiyyah and his student Ibn al-Qayyim, two earlier Hanbali scholars whose works on Tawheed and the correction of religious practice left a deep and lasting impression on him.`,
      },
      {
        heading: 'His central concern and most famous work',
        body: `Upon returning to Najd, Ibn Abdul-Wahhab became increasingly concerned by religious practices he observed in his region that he considered clear violations of Tawheed as covered throughout this course, particularly practices connected to visiting graves: calling upon the deceased for help, seeking blessings from specific trees or stones believed to hold special power, and other customs he understood as forms of the Shirk this course's fifth unit examined in detail. He began teaching and writing against these practices, producing several works on Tawheed, the most well known being Kitab at-Tawhid, a longer and more detailed treatment of the same subject this shorter primer, Usul Thalaathah, introduces in a more concise, foundational form.`,
      },
      {
        heading: 'The alliance that spread his teaching widely',
        body: `In 1744, Ibn Abdul-Wahhab formed an alliance with Muhammad ibn Saud, the ruler of the nearby town of Diriyah, combining religious teaching with political support in a way that allowed his call for a return to what he understood as authentic Tawheed to spread considerably further than his own individual teaching alone could have achieved. This alliance is the historical foundation later Saudi rule in Arabia would build upon, and it is the reason his specific formulation of Tawheed became especially influential and widely taught across the region and, in later centuries, well beyond it.

This combination of scholarly teaching and political backing was not entirely without precedent in Islamic history, where reform-minded scholars had at various points sought the support of local rulers to give their teaching wider reach than preaching alone could accomplish. What distinguished this particular alliance was its lasting durability. Where many earlier such partnerships between a scholar and a ruler faded within a single generation, this one produced institutions, a line of religious scholarship within the Al ash-Sheikh family descended from Ibn Abdul-Wahhab himself, and a body of written work that continued to be taught and expanded upon for centuries afterward, well past the lifetimes of either founding figure.

His own followers historically referred to themselves as Muwahhidun, meaning those upholding Tawheed, a name emphasizing the movement's own self understanding of its central concern, while outside observers and later historical writing more commonly refer to the broader movement using his name.`,
      },
      {
        heading: 'Why this specific short text is studied so widely',
        body: `Among Ibn Abdul-Wahhab's several works, Usul Thalaathah became one of the most widely memorized and taught, precisely because of its brevity and its clear, structured approach to the most foundational matters a new or young student of Islam needs first. Rather than beginning with extended argument or lengthy citation, it moves directly and efficiently through exactly what its title promises: three foundational principles every person will eventually be asked about, explained plainly enough for a beginning student to genuinely grasp, while still resting on direct Qur'anic and hadith evidence throughout.

This combination, brevity paired with genuine substance, is precisely why this course has chosen to study it directly and sequentially across its remaining units, after first building the broader conceptual foundation covered in this course's first five units.`,
      },
      {
        heading: 'Reading a text with awareness of its author and context',
        body: `Understanding who wrote a text, and under what circumstances, is not a distraction from studying its actual content. It sharpens a reader's understanding of specific emphases within the text itself. Ibn Abdul-Wahhab's particular concern with practices connected to grave visitation, already mentioned in this topic, explains why several sections of Usul Thalaathah, covered directly in this course's later units, give particular attention to correctly understood worship (Uluhiyyah) and to the specific concept of Taghut, false objects of worship, rather than spending equal space on every conceivable topic in Islamic theology. This is not a flaw in the text. It reflects a text written with a specific, urgent teaching purpose in mind, by an author responding to specific concerns he observed directly in his own community.`,
      },
    ],
  },

  'ut1-2': {
    id: 'ut1-2',
    unit: 'unit-6',
    title: 'The Structure and Purpose of Usul Thalaathah',
    summary: 'Why this short text became one of the most widely taught works on Tawheed.',
    content: [
      {
        heading: 'What the title itself promises',
        body: `Usul Thalaathah means "The Three Fundamental Principles," and the text is organized almost entirely around delivering exactly what this title promises: three specific matters, introduced directly in this course's next unit, that the text states every person will be asked about after death. Everything covered before and after this central section exists to support a student's genuine understanding of these three principles, rather than functioning as a loosely connected collection of separate topics.`,
      },
      {
        heading: 'A primer meant for genuine beginners',
        body: `The text is deliberately written at a level accessible to a genuine beginner, whether a child just starting formal religious education or an adult new to structured Islamic learning. Its sentences are short and direct. Its structure moves in clear, numbered steps rather than flowing argumentative prose. Its evidence is quoted directly and briefly rather than extensively analyzed. This is a deliberate pedagogical choice, not a limitation, since a text intended to be one of the very first pieces of structured Islamic knowledge a student encounters needs to prioritize clarity and memorability over comprehensive depth, which more advanced texts are left to provide later in a student's education.`,
      },
      {
        heading: 'Its place within a broader traditional curriculum',
        body: `In traditional settings, Usul Thalaathah is typically the first or among the first texts a young student memorizes, before progressing to longer, more detailed works on the same subject, including Ibn Abdul-Wahhab's own more extensive Kitab at-Tawhid, and eventually to still more advanced classical works of Islamic creed written centuries earlier. This course's own structure mirrors this traditional progression in miniature: five units building the conceptual vocabulary and categories (Rububiyyah, Uluhiyyah, Asma wa's-Sifaat, and Shirk) that this shorter primer assumes some familiarity with, followed now by direct engagement with the primer text itself.`,
      },
      {
        heading: 'How the text organizes its actual content',
        body: `Following its opening discussion of the Four Matters, covered directly later in this unit, the text moves through several connected sections in sequence: the Three Principles themselves and their supporting evidence, a detailed catalogue of specific acts of worship belonging to Allah alone, a discussion of Islam's three levels, a concise account of the Prophet Muhammad's ﷺ life and mission, a discussion of resurrection and the sending of messengers, and a closing discussion of Taghut and the conditions of the testimony of faith. This course's Units 7 through 12 follow this exact sequence, unit by unit, matching the text's own progression rather than reorganizing its material into a different order.`,
      },
      {
        heading: 'Why memorization was the traditional starting method',
        body: `Texts of this length and structure were traditionally memorized in full before being explained in detail, a method that can seem unusual to a modern learner more accustomed to reading material once and moving on. The reasoning behind this traditional method is worth understanding: a memorized text becomes permanently available for reflection throughout a person's life, recalled and re-examined at different stages of maturity and understanding, rather than encountered once and largely forgotten. A student who memorizes this text as a child may find its specific wording returning to mind years later in moments where its content becomes newly relevant, a benefit a text only read once cannot provide in the same way.

This traditional sequence, memorize first, then have the meaning explained by a teacher in stages, also reflects a practical reality of pre-modern education: books were expensive and not always available for a student to keep and consult freely, while a memorized text traveled with the student wherever they went, needing no physical copy at all. Even where this practical constraint no longer applies today, the underlying educational benefit, a foundational text carried permanently in memory rather than left on a shelf, is part of why this method persisted long after cheap printing made books widely available.

This course does not require memorization to proceed, but understanding why this method was traditionally used helps explain the text's own deliberately memorable, concise style, examined directly in the previous topic.`,
      },
      {
        heading: 'What this course\'s remaining units will cover',
        body: `Having introduced the author and the text's overall structure, this unit's remaining topics turn to the text's actual opening content: its insistence that knowledge must precede both action and calling others to that same knowledge, and the specific Four Matters it identifies as obligatory upon every person. From there, this course's following units will move sequentially through the Three Principles, the catalogue of worship, the levels of Islam, the Prophet's ﷺ life, resurrection and prophethood, and finally Taghut, before a closing unit on the Nullifiers of Islam traditionally studied alongside this same text.`,
      },
    ],
  },

  'ut1-3': {
    id: 'ut1-3',
    unit: 'unit-6',
    title: 'The Obligation of Knowledge Before Action',
    summary: 'The text\'s opening emphasis on learning before doing.',
    content: [
      {
        heading: 'A principle established before the text\'s actual content begins',
        body: `Before introducing any of its actual subject matter, Usul Thalaathah establishes a methodological principle its entire structure depends upon: knowledge must come before action. This is not simply a study tip offered in passing. It is presented as the very reason the text proceeds in the order it does, and it draws directly on a principle Imam al-Bukhari himself established through how he organized his own great hadith collection.`,
      },
      {
        heading: 'Imam Bukhari\'s chapter title, cited directly in the text',
        body: `Ibn Abdul-Wahhab draws attention specifically to a chapter heading Imam al-Bukhari used in Sahih al-Bukhari: "The Chapter of Knowledge Before Speech and Action," a title Bukhari supported with a specific piece of Qur'anic evidence.`,
        verses: [
          {
            type: 'quran',
            arabic: 'فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاسْتَغْفِرْ لِذَنبِكَ',
            english: 'So know that there is no god but Allah, and seek forgiveness for your sin.',
            source: 'Surah Muhammad, 47:19',
          },
        ],
      },
      {
        heading: 'Why the order of the verse itself matters',
        body: `Notice the sequence within this single verse: the command to know comes before the command to act (seeking forgiveness is itself an action). Bukhari's placement of this verse as evidence for an entire chapter on knowledge preceding speech and action is a deliberate, structural argument, not simply an isolated citation. The verse itself models the very principle being taught: correct knowledge is the necessary foundation an action is built upon, not something that can be assumed, skipped, or added in afterward.

Ibn Abdul-Wahhab's decision to open his own primer by citing this exact same principle, through this exact same scholarly reference, signals from the very first lines of his text that everything which follows is meant to be learned and understood correctly before being acted upon, rather than practiced first and understood later, if at all.`,
      },
      {
        heading: 'Why this order matters logically, not only traditionally',
        body: `The logical case for this order is straightforward once stated directly: a person cannot sincerely and correctly direct an act of worship toward Allah without first knowing, at least at a basic level, who Allah is, what He has commanded, and what would actually please or displease Him. Worship performed without this prior knowledge risks becoming worship built on assumption, cultural habit, or imitation of others rather than genuine, informed sincerity.

A concrete example makes this clear. A person could stand, bow, and prostrate in a manner outwardly resembling Islamic prayer without knowing that this specific sequence of movements is meant to be an act of worship directed exclusively to Allah, without any partner. The outward form would be present, but the informed sincerity this course's earlier units have emphasized throughout would be entirely absent, precisely because the necessary knowledge was never actually acquired first.`,
      },
      {
        heading: 'Knowledge and sincerity as connected, not separate, requirements',
        body: `This principle connects directly to material already covered in this course's earlier units: an act of worship is only genuinely an act of Tawheed when performed with correct understanding of who it is directed toward and why. Knowledge is not a separate, optional enhancement layered on top of worship that would otherwise be acceptable without it. It is the very thing that makes sincere, correctly directed worship possible in the first place, which is precisely why Ibn Abdul-Wahhab, following Bukhari's example, places this principle before any other content in his own text.`,
      },
      {
        heading: 'What this means for how this course itself should be approached',
        body: `This same principle applies directly to how a student should approach this course and the text it now begins studying in earnest. The goal of the remaining units is not simply completing content or passing quiz gates, useful as these structures are for maintaining pace and retention. It is genuinely acquiring the specific knowledge Ibn Abdul-Wahhab identifies as obligatory, precisely so that the worship and daily practice this knowledge is meant to inform can actually rest on a correctly understood foundation, exactly as this opening principle, and the verse it rests upon, instructs.`,
      },
    ],
  },

  'ut1-4': {
    id: 'ut1-4',
    unit: 'unit-6',
    title: 'The Four Matters Every Muslim Must Know',
    summary: 'Knowledge, acting upon it, calling to it, and patience upon harm faced for it.',
    content: [
      {
        heading: 'The text\'s own opening words',
        body: `Having established that knowledge must come first, Ibn Abdul-Wahhab opens the actual content of his primer with these words, addressed directly and warmly to the student: "Know, may Allah have mercy on you, that it is obligatory upon us to learn four matters." He then lists them directly: the first is knowledge, meaning knowledge of Allah, knowledge of His Prophet, and knowledge of the religion of Islam, each supported with evidence rather than accepted on assumption alone. The second is acting upon that knowledge. The third is calling others to it. The fourth is patience in facing whatever harm may come as a result of holding to it.`,
      },
      {
        heading: 'Why these four, and why in this specific order',
        body: `The order of these four matters is deliberate and cumulative, each one building directly on the one before it. Knowledge must come first, for the reasons already covered in this unit's previous topic. Action follows naturally from genuine knowledge, since a person who truly understands a truth is expected to live according to it, not merely acknowledge it intellectually. Calling others to this same knowledge and practice follows action, since a person who has genuinely come to know and live by something true naturally desires the same benefit for others, echoing themes of sincere concern for others already covered throughout this course. Patience comes last because it is the quality specifically required to sustain the first three matters when they meet real resistance or hardship, which the text assumes, realistically, they eventually will.`,
      },
      {
        heading: 'The evidence the text itself provides',
        body: `Rather than simply asserting these four matters, Ibn Abdul-Wahhab immediately grounds them in a specific piece of Qur'anic evidence, quoting the short surah this course has already encountered directly in an earlier unit.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
            english: 'By time, indeed mankind is in loss, except for those who believe, do righteous deeds, and advise one another to truth and advise one another to patience.',
            source: 'Surah al-\'Asr, 103:1-3',
          },
        ],
      },
      {
        heading: 'How this short surah maps directly onto the Four Matters',
        body: `Ibn Abdul-Wahhab's choice of this specific surah as evidence is precise, not general. Each phrase of the surah corresponds directly to one of the Four Matters just introduced. "Those who believe" corresponds to the first matter, knowledge, since genuine belief rests on correct understanding. "And do righteous deeds" corresponds to the second matter, acting upon that knowledge. "And advise one another to truth" corresponds to the third matter, calling others to it. "And advise one another to patience" corresponds directly to the fourth matter, patience in facing harm.

This mapping shows that Ibn Abdul-Wahhab did not simply attach a loosely related verse to support a list he constructed independently. He drew the entire structure of his Four Matters directly from the internal structure of this one short surah, which is precisely why he places it immediately after introducing them.`,
      },
      {
        heading: 'This entire principle in a single, compact obligation',
        body: `Read together, the text's opening lines and its supporting evidence establish a compact but genuinely comprehensive picture of what a complete, living faith actually requires: not private belief alone, not correct action alone, not concern for others alone, and not mere endurance alone, but all four held together as a single, integrated obligation. Removing any one piece leaves an incomplete picture. A person who knows correctly but never acts has stopped short of what is required. A person who acts and calls others but abandons the effort at the first sign of difficulty has left the fourth matter unfulfilled.

This is why Ibn Abdul-Wahhab places this framework before any other content in his primer. Everything the remainder of the text goes on to teach, examined across this course's coming units, is meant to be received, understood, and lived out according to exactly this four part structure, not as isolated information to be studied and then set aside.`,
      },
      {
        heading: 'A framework meant to be checked against, not only memorized',
        body: `Beyond serving as an opening summary, the Four Matters function throughout the rest of the text, and throughout the rest of this course, as a kind of checklist a student can return to at any point. Encountering any new piece of content in the units ahead, a student can reasonably ask which of the four matters it primarily serves: is this establishing knowledge, describing what acting on that knowledge looks like, modeling how it might be shared with others, or addressing the patience required to sustain it. Most content will touch more than one of the four at once, but the framework itself remains a useful lens for organizing what might otherwise feel like a long, undifferentiated list of religious facts to absorb.`,
      },
      {
        heading: 'Setting up the next topic',
        body: `Having introduced all four matters together in this topic, this unit's final topic looks more closely at the second and third of them specifically, acting upon knowledge and calling others to it, examining why the text treats these two matters as connected rather than as separate, independent obligations.`,
      },
    ],
  },

  'ut1-5': {
    id: 'ut1-5',
    unit: 'unit-6',
    title: 'Acting Upon Knowledge and Calling Others to It',
    summary: 'Why knowledge alone, without action and da\'wah, is incomplete.',
    content: [
      {
        heading: 'A scholar\'s testimony to this short surah\'s sufficiency',
        body: `Immediately after quoting Surah al-'Asr as evidence for the Four Matters, Ibn Abdul-Wahhab includes a striking statement from Imam ash-Shafi'i, one of the four great Sunni jurists, testifying to just how comprehensive this short surah actually is: "If Allah had not revealed any evidence to His creation besides this surah, it would have been sufficient for them." This is a remarkable claim to make about a surah only three verses long, and it is worth pausing on directly, since it explains why Ibn Abdul-Wahhab chose it specifically as the foundation for his entire opening framework.`,
      },
      {
        heading: 'Why such a short surah could carry this much weight',
        body: `Imam ash-Shafi'i's statement reflects the same mapping already covered in this unit's previous topic: within three short verses, the surah addresses the human condition (loss, as the default state), the remedy (correct belief), the necessary follow through (righteous action), the social obligation this creates (calling others to truth), and the endurance required to sustain all of it (patience). A surah covering this much ground in this little space genuinely could, as Shafi'i suggests, serve as a complete summary of what a person needs to know to live a rightly guided life, even if every other piece of Qur'anic guidance were somehow unavailable.

This is precisely why memorizing and reflecting on this specific surah, something many Muslims already do simply because of its brevity, carries far more weight than its short length might suggest at first glance.`,
      },
      {
        heading: 'Acting upon knowledge as knowledge\'s natural completion',
        body: `Returning to the second of the Four Matters directly, acting upon knowledge is presented throughout this text, and throughout this course's earlier units, as the natural and necessary completion of genuine knowledge rather than a separate, optional add-on. A person who has genuinely come to know that Allah alone deserves worship, exactly as covered across this course's second and third units, and who continues directing any portion of their fear, hope, or dua elsewhere regardless, has not yet actually completed what that knowledge requires of them. The knowledge remains real, but it remains incomplete without the action it was always meant to produce.`,
      },
      {
        heading: 'Why calling others follows naturally from acting on knowledge',
        body: `The third matter, calling others to this same truth (da'wah), is presented as following naturally rather than as a separate, additional burden placed on top of personal practice. A person who has genuinely benefited from correct knowledge and sincere practice, and who has witnessed firsthand how this knowledge reshapes their relationship with Allah, is described throughout the Islamic tradition as naturally desiring the same benefit for others, particularly those closest to them.

This does not require formal religious training or public preaching. Da'wah, at its most basic and universally applicable level, is as simple as a parent teaching a child correct Tawheed, a friend gently sharing something genuinely helpful they have learned, or a person living visibly and consistently by what they claim to believe, allowing their own example to speak on behalf of the knowledge they hold. The scale of the calling matters far less than its sincerity and its grounding in the same correct knowledge already covered as the first of the Four Matters.`,
      },
      {
        heading: 'Why patience specifically accompanies these two matters',
        body: `The text's pairing of da'wah with patience, rather than presenting patience as an entirely separate, unrelated matter, reflects a realistic expectation built directly into the structure of the Four Matters themselves: acting upon correct knowledge and calling others to it will, at some point, meet resistance, whether through mockery, social friction, family disagreement, or more serious harm, exactly as covered throughout the history of every prophet's mission examined earlier in this course. The text does not treat this resistance as an unexpected failure of the first three matters. It treats patience in facing it as itself one of the four matters obligatory upon every person who takes the first three seriously.

A person who correctly knows, sincerely acts, and genuinely calls others, but abandons this effort entirely at the first sign of pushback or discomfort, has fulfilled three of the four matters while leaving the fourth incomplete, precisely the incompleteness this text's opening framework was structured to prevent.`,
      },
      {
        heading: 'Closing this unit and opening the text\'s central content',
        body: `This unit has introduced the author of Usul Thalaathah, the structure and purpose of the text itself, and its opening framework of Four Matters, knowledge, action, calling others, and patience, that the remainder of the text, and this course's coming units, are meant to be received through. Having established this foundation, the next unit turns directly to the text's central content: the Three Principles themselves, the specific matters the text states every person will be asked about after death, beginning with the question of knowing one's Lord.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 7 - USUL THALAATHAH: THE THREE PRINCIPLES (full content,
  // expanded)
  //
  // This unit quotes Ibn Abdul-Wahhab's own primer text directly,
  // in prose with clear attribution, since his words are neither
  // Qur'an nor hadith and are not placed in the highlighted verse
  // blocks reserved for those two sources. Qur'anic Arabic checked
  // against primary tafsir sources (Ibn Kathir, Tabari, Baghawi,
  // Qurtubi via quran.com and quran.ksu.edu.sa) before writing. The
  // grave-questioning hadith was checked against Sunan at-Tirmidhi.
  // English renderings of Qur'anic verses are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // -----------------------------------------------------------
  'ut2-1': {
    id: 'ut2-1',
    unit: 'unit-7',
    title: 'The Three Questions of the Grave',
    summary: 'The questions the text says every person will be asked after death.',
    content: [
      {
        heading: 'A verse explained by the Prophet ﷺ himself',
        body: `A verse describing how Allah keeps believers firm through a steadfast word, both in this life and in the life to come, receives a specific, direct explanation from the Prophet ﷺ regarding exactly what that steadfastness means after death.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'يُثَبِّتُ اللَّهُ الَّذِينَ آمَنُوا بِالْقَوْلِ الثَّابِتِ فِي الْحَيَاةِ الدُّنْيَا وَفِي الْآخِرَةِ، قَالَ: فِي الْقَبْرِ، إِذَا قِيلَ لَهُ: مَنْ رَبُّكَ، وَمَا دِينُكَ، وَمَنْ نَبِيُّكَ',
            english: 'Regarding the verse "Allah keeps firm those who believe, with the firm word, in worldly life and in the Hereafter," the Prophet ﷺ said: this refers to the grave, when a person is asked, who is your Lord, what is your religion, and who is your Prophet.',
            source: 'Jami\' at-Tirmidhi (graded authentic), explaining Surah Ibrahim, 14:27',
          },
        ],
      },
      {
        heading: 'Two angels, and two very different outcomes',
        body: `Other authentic hadith describe this encounter in more detail: two angels come to a person in their grave and sit them upright to ask exactly these three questions. A believer who genuinely knew and lived by correct answers to these questions responds clearly: my Lord is Allah, my religion is Islam, and my Prophet is Muhammad ﷺ. A person who never genuinely held this knowledge, despite whatever outward religious identity they may have carried through life, responds with confusion and uncertainty, unable to answer questions that should have been the most basic and settled convictions of their entire life.

The consequences described for each response differ sharply and immediately: the one who answers correctly is shown their place in Paradise even before the Final Judgment and given comfort in the grave, while the one who cannot answer faces a very different, distressing outcome. This is not framed as a distant, abstract theological curiosity. It is framed as something every single person, without exception, will personally face.`,
      },
      {
        heading: 'Why this hadith frames the entire remainder of this course',
        body: `This hadith is the reason Usul Thalaathah is structured the way it is. Ibn Abdul-Wahhab is not introducing three abstract categories he personally selected as theologically interesting. He is directly preparing his readers for three specific questions every one of them will actually be asked, regardless of how they lived, what they believed, or how carefully they otherwise practiced Islam's outward rituals. This reframes the remainder of this course's coming units from academic study into direct, personal preparation.

A useful comparison makes the stakes concrete. Studying for a specific exam whose exact questions have already been disclosed in advance carries a very different weight than studying a subject in a general, open ended way. Ibn Abdul-Wahhab's text functions like the first kind of study: the questions are already known, disclosed directly through authentic hadith, and the text exists specifically to make sure its reader can answer them correctly and sincerely, not merely recite a memorized response without genuine understanding behind it.`,
      },
      {
        heading: 'From three questions to three principles',
        body: `Having established the urgency behind these three questions, Ibn Abdul-Wahhab formalizes them into the structure his text's title directly refers to. He poses the question directly to his reader: "If it is said to you, what are the three foundations which you must know? Then say: the servant's knowledge of his Lord, his religion, and his Prophet, Muhammad ﷺ." Each of the three grave questions maps directly onto one of these three foundations, in the exact same order: knowing one's Lord corresponds to "who is your Lord," knowing one's religion corresponds to "what is your religion," and knowing one's Prophet corresponds to "who is your Prophet."

This is why the text's title, Usul Thalaathah, "The Three Fundamental Principles," is not simply a convenient organizational label. It names precisely the three matters a person's eternal outcome, according to this hadith, will directly hinge upon.`,
      },
      {
        heading: 'Knowledge sufficient to answer, not merely to recite',
        body: `A crucial distinction runs beneath this entire framework, one this course's earlier unit on knowledge before action already prepared its reader to recognize: the grave scenario does not reward a person who can recite the correct answers as memorized facts without ever having genuinely understood or lived by them. The believer who answers correctly is described as doing so because they actually knew these truths, not because they had once memorized the right words to say under pressure. This is precisely why Ibn Abdul-Wahhab's text does not simply supply the three answers and move on. It spends its remaining sections explaining each principle with real supporting evidence, examined directly across this unit's coming topics, so that a genuine, evidence based understanding, not a rehearsed script, is what a reader actually carries away from studying it.`,
      },
      {
        heading: 'A test that applies regardless of how someone lived',
        body: `The hadith describing this encounter is explicit that both the believer and the disbeliever are questioned, not only those who lived visibly religious lives. This detail matters for how the entire remainder of this course should be understood: the three principles are not a specialized curriculum for the unusually devout, set apart from an ordinary standard the average person is not expected to meet. They describe the single, universal test every person, regardless of background, culture, or how seriously they took religious matters during their life, will personally face. A person cannot opt out of this question by living a life that avoided the subject, any more than a student can avoid an exam by simply not attending class. The exam still occurs, on its own fixed schedule, whether or not the student chose to prepare for it.`,
      },
      {
        heading: 'How this unit will proceed',
        body: `Having established why these three principles matter and where they originate, this unit's remaining topics take each one in turn, following the text's own order: knowing one's Lord, with its supporting evidence from creation and provision, and a brief introduction to knowing one's religion and knowing one's Prophet, the fuller treatment of which this course's Units 9 and 10 will cover in complete detail, following the text's own later, expanded discussion of each.`,
      },
    ],
  },

  'ut2-2': {
    id: 'ut2-2',
    unit: 'unit-7',
    title: 'Principle One: Knowing Your Lord',
    summary: 'The text\'s explanation of the first and most fundamental question.',
    content: [
      {
        heading: 'The text\'s own answer to the first question',
        body: `Ibn Abdul-Wahhab poses the first question directly, then supplies the exact answer his reader should give: "If it is said to you, who is your Lord? Then say: my Lord is Allah, who has nurtured me and nurtured all the worlds with His favors, and He is my object of worship, I have no god besides Him." This single sentence packs together several ideas already covered across this course's earlier units, now stated in the specific, memorable form this primer is known for.`,
      },
      {
        heading: 'Why "nurtured" is the specific word chosen',
        body: `The Arabic word rabbani, translated here as "has nurtured me," comes from the same root as Rabb itself, meaning Lord. This is a deliberate linguistic choice, not incidental phrasing. It ties the very concept of Lordship directly to the specific quality of nurturing, sustaining, and bringing something to completion through ongoing care, exactly the fuller meaning of Rabb already introduced in this course's second unit on Rububiyyah. A Rabb is not simply a distant ruler issuing commands from afar. The word itself carries the sense of one who actively sustains and develops what belongs to Him, precisely the picture this course's earlier unit painted through its discussion of creation, ownership, and management held together.`,
      },
      {
        heading: 'The evidence the text supplies immediately',
        body: `Rather than leaving this answer unsupported, Ibn Abdul-Wahhab immediately grounds it in the opening words of the Qur'an itself, recited in every unit of every prayer.`,
        verses: [
          {
            type: 'quran',
            arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
            english: 'All praise belongs to Allah, Lord of all the worlds.',
            source: 'Surah al-Fatihah, 1:2',
          },
        ],
      },
      {
        heading: 'A brief but significant clarification the text adds',
        body: `Ibn Abdul-Wahhab adds a short but important clarification immediately after citing this verse: "and everything besides Allah is 'the worlds' (al-'alameen), and I am one individual among that world." This small addition does real work. It prevents "Lord of all the worlds" from being read as a vague, distant abstraction, and instead places the reader directly and personally inside the very category the verse describes. Allah is not simply Lord of some far away collection of worlds unrelated to the reader. The reader themselves is one specific, individual member of the exact "worlds" this opening verse of the Qur'an describes Allah as Lord over, making the verse's declaration of Lordship immediately and unavoidably personal rather than abstract.`,
      },
      {
        heading: 'Worship named directly within the answer itself',
        body: `Notice that the text's answer does not stop at describing Allah as Lord and nurturer. It continues directly into "He is my object of worship, I have no god besides Him," moving in a single sentence from Rububiyyah into Uluhiyyah exactly as this course's own earlier structure already modeled. This is not incidental. It reflects the same connection this course's third unit established directly: correctly recognizing Allah's Lordship is meant to lead naturally and immediately into correctly directing all worship to Him alone, not remaining a separate, disconnected intellectual fact. Ibn Abdul-Wahhab's brief answer compresses both categories of Tawheed this course spent two full units unpacking into a single, memorable line meant to be given as a direct, personal answer, not merely studied as abstract theology.`,
      },
      {
        heading: 'Why this brief answer carries the full weight of the first question',
        body: `Read together, this short answer and its supporting evidence accomplish everything the first of the three grave questions actually requires: identifying Allah specifically as Lord (not a vague higher power), grounding this specifically in His role as nurturer and sustainer (not merely a distant creator with no ongoing relationship to creation), placing the reader personally within the scope of that Lordship (not treating it as an abstract fact about the universe generally), and connecting this Lordship directly to exclusive worship (not stopping at intellectual acknowledgment alone, precisely the incompleteness this course's earlier unit on Rububiyyah warned against directly). This is why such a short passage is treated as sufficient preparation for one of the three questions upon which, according to the hadith already covered in this unit's first topic, a person's entire eternal outcome depends.`,
      },
    ],
  },

  'ut2-3': {
    id: 'ut2-3',
    unit: 'unit-7',
    title: 'Evidence of Lordship from Creation and Provision',
    summary: 'The specific proofs the text brings for Allah\'s Lordship.',
    content: [
      {
        heading: 'A second question the text anticipates directly',
        body: `Having established the correct answer to "who is your Lord," Ibn Abdul-Wahhab anticipates a natural follow up question and answers it directly: "If it is said to you, how did you come to know your Lord? Then say: by His signs and His creations." This single line divides the evidence for Allah's Lordship into two connected categories, each explored with specific examples in the text's own words.`,
      },
      {
        heading: 'Signs named directly in the text',
        body: `Among Allah's signs (ayat), the text specifically names the night and the day, and the sun and the moon, phenomena every single person observes directly and constantly without needing any specialized knowledge to notice. These are not obscure or rare occurrences requiring rare access to verify. They are the most ordinary, universally shared experiences of every human life, which is precisely their evidential power: no person, regardless of education, location, or era, lacks direct access to this specific evidence.`,
      },
      {
        heading: 'The Qur\'anic passage expanding on these signs',
        body: `The text's brief mention of night, day, sun, and moon draws directly on a fuller Qur'anic passage describing these same phenomena as evidence of Allah's Lordship in considerably more detail.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ يُغْشِي اللَّيْلَ النَّهَارَ يَطْلُبُهُ حَثِيثًا وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ ۗ أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ ۗ تَبَارَكَ اللَّهُ رَبُّ الْعَالَمِينَ',
            english: 'Indeed your Lord is Allah, who created the heavens and the earth in six days, then established Himself above the Throne. He causes the night to cover the day, each pursuing the other in rapid succession, and the sun, moon, and stars are made subject to His command. Unquestionably, His alone is the creation and the command. Blessed is Allah, Lord of all the worlds.',
            source: 'Surah al-A\'raf, 7:54',
          },
        ],
      },
      {
        heading: 'Creations named directly in the text',
        body: `Alongside signs, the text names Allah's creations specifically as the seven heavens and the seven earths and everything within them and between them. Where signs point to Allah's Lordship through observable pattern and phenomena (the sun rising, the moon changing shape, day following night with perfect regularity), creations point to His Lordship simply through their sheer existence: something this vast, ordered, and complete did not bring itself into being, a reasoning this course's second unit already developed at length using this exact same underlying logic.`,
      },
      {
        heading: 'A direct command to worship, grounded in these same proofs',
        body: `The text's discussion of Lordship connects directly forward into a Qur'anic command tying recognition of Allah's creative power to the actual obligation this recognition produces.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
            english: 'O mankind, worship your Lord, who created you and those before you, so that you may attain taqwa.',
            source: 'Surah al-Baqarah, 2:21',
          },
        ],
      },
      {
        heading: 'Why the text pairs evidence with obligation, not evidence alone',
        body: `Notice that this verse, like the text's own brief answer covered in the previous topic, does not stop at simply establishing that Allah created everything. It moves directly from that established fact into a command: worship Him. This same passage continues by describing the earth made habitable and rain bringing forth provision, then closes with a direct warning against setting up rivals to Allah despite already knowing all of this. This mirrors exactly the pattern already identified in this unit's second topic: Rububiyyah, once genuinely established through this specific evidence, is never presented in this text as an endpoint in itself. It is presented as the foundation an obligation to worship Allah alone is built directly upon, precisely the connection between this course's second and third units that this Usul Thalaathah passage compresses into a single short Qur'anic citation.`,
      },
    ],
  },

  'ut2-4': {
    id: 'ut2-4',
    unit: 'unit-7',
    title: 'Principle Two: Knowing Your Religion',
    summary: 'The text\'s explanation of Islam as complete submission to Allah.',
    content: [
      {
        heading: 'The text\'s own answer to the second question',
        body: `Turning to the second of the three grave questions, Ibn Abdul-Wahhab supplies a direct answer: "If it is said to you, what is your religion? Then say: my religion is Islam, which is submission to Allah through Tawheed, compliance to Him through obedience, and disavowal of Shirk and its people." This compact definition brings together several threads already covered throughout this course into a single, memorable formulation.`,
      },
      {
        heading: 'Three components held together in a single definition',
        body: `Notice the definition's three connected parts, each corresponding to material already covered in earlier units of this course. Submission through Tawheed points directly to this course's second, third, and fourth units, correctly understanding and worshipping Allah alone according to His Lordship, His exclusive right to worship, and His names and attributes. Compliance through obedience points to actually living according to what this correct understanding requires, the same theme this course's sixth unit already developed regarding action following genuine knowledge. Disavowal of Shirk and its people points directly back to this course's fifth unit, recognizing and actively rejecting the very error the remainder of this course has spent considerable time examining in detail.

This definition, in other words, is not introducing new content unfamiliar to a student who has followed this course from its first unit onward. It is compressing the entire course covered so far into a single working definition of what "Islam" actually names.`,
      },
      {
        heading: 'Why this topic gives only a brief introduction here',
        body: `Ibn Abdul-Wahhab's own text, having given this compact definition, goes on to describe Islam's three levels, Islam, Iman, and Ihsan, along with the specific pillars belonging to each, in considerably more depth than this brief introductory topic covers. This course follows the text's own structure directly, reserving the fuller treatment of these levels and pillars for its ninth unit, which corresponds to this same later section of the primer. This topic's purpose is narrower: establishing the basic definition the text gives when the second grave question is first introduced, before the text itself expands on it later.`,
      },
      {
        heading: 'A definition that names what it rejects, not only what it affirms',
        body: `A detail worth noticing in this definition is its final clause: disavowal of Shirk and its people, not merely disavowal of Shirk as an abstract concept. This specific phrasing matters. It describes Islam as involving a genuine, active distancing not only from a wrong belief in the abstract, but from the actual practice of Shirk wherever it is genuinely encountered, echoing this course's own emphasis throughout its fifth unit that Shirk is not merely a theoretical error to be defined correctly on a test, but a real pattern of conduct and belief to be actively recognized and rejected in practice.`,
      },
      {
        heading: 'How this brief principle already answers the question it addresses',
        body: `Even in this compressed form, the definition genuinely satisfies what the second grave question requires: identifying the religion by name (Islam, not a vague general spirituality), explaining what that name actually means (submission, obedience, and disavowal, not simply an inherited cultural label), and connecting it directly back to the correct Tawheed already established as the answer to the first question. A person who can only recite the word "Islam" without any of this underlying understanding has not actually answered what this second principle asks for, echoing this course's sixth unit theme that a memorized answer without genuine understanding falls short of what is actually required.`,
      },
      {
        heading: 'Looking ahead to the third principle',
        body: `Having introduced the text's basic definition of religion, this unit's final topic turns to the third and final of the grave questions, knowing one's Prophet, before this course's later units take up both the fuller treatment of Islam's levels and pillars, and the fuller account of the Prophet's ﷺ life and mission, exactly as the primer's own structure proceeds from this point forward.`,
      },
    ],
  },

  'ut2-5': {
    id: 'ut2-5',
    unit: 'unit-7',
    title: 'Principle Three: Knowing Your Prophet ﷺ',
    summary: 'The text\'s explanation of who the Prophet ﷺ is and why he was sent.',
    content: [
      {
        heading: 'The text\'s own answer to the third question',
        body: `Completing the three grave questions, Ibn Abdul-Wahhab addresses the third directly: "If it is said to you, who is your Prophet? Then say: Muhammad, son of Abdullah, son of Abdul-Muttalib, son of Hashim." The text continues by tracing his lineage further back through Hashim's tribe, Quraysh, and through the Arabs generally to their descent from Ismail, son of Ibrahim. This detailed lineage, examined more fully in this course's later, dedicated unit on the Prophet's ﷺ life, is given here in its briefest introductory form, immediately at the point this third question is first raised.`,
      },
      {
        heading: 'Why lineage is treated as part of the required answer',
        body: `At first glance, reciting a chain of ancestors might seem like a strange thing to require as part of answering "who is your Prophet." The reasoning becomes clearer when placed alongside this course's earlier unit on the Prophet's ﷺ life, examined more fully later: correctly knowing the Prophet ﷺ is not simply knowing his first name, but knowing him as an actual historical person, situated within a real, verifiable line of descent, sent to a real place, at a real point in history, rather than as a vague, symbolic religious figure disconnected from any concrete historical reality. The lineage anchors him in genuine history, the same historical concreteness this course's tenth unit will develop considerably further.`,
      },
      {
        heading: 'A brief preview of what the fuller answer includes',
        body: `Beyond lineage, Ibn Abdul-Wahhab's fuller treatment of this third principle, covered directly in this course's tenth unit, addresses his age at the start of his prophethood, the specific manner revelation began, the core message he called his people to first, his eventual migration to Madinah, and his death after having completed his mission. None of this fuller detail is introduced yet at this stage of the text, where the third question is simply being named and given its briefest possible answer, mirroring exactly how the second principle, knowing one's religion, was likewise introduced briefly in this unit's previous topic before its own fuller treatment later in the text.`,
      },
      {
        heading: 'Why knowing the Prophet ﷺ completes, rather than adds to, the first two principles',
        body: `Knowing the Prophet ﷺ is not a fourth, separate matter loosely appended to knowing one's Lord and knowing one's religion. It completes them directly. Correct knowledge of Allah, as covered in this unit's second and third topics, and correct knowledge of Islam, as covered in the previous topic, both rest entirely on what the Prophet ﷺ actually conveyed from Allah. Without genuine, accurate knowledge of who he was and what he actually taught, a person's professed knowledge of Allah and of Islam has no reliable source to rest upon at all. This is why the three principles are presented together as a single, connected set rather than as three unrelated, independently sufficient facts.`,
      },
      {
        heading: 'The three principles, restated together',
        body: `Having now covered all three principles, even where the second and third received only their brief introductory treatment, it is worth restating them together exactly as the grave questions themselves pose them: who is your Lord, Allah, who nurtured you and all the worlds, and who alone deserves worship; what is your religion, Islam, submission to Allah through Tawheed, obedience to Him, and disavowal of Shirk; and who is your Prophet, Muhammad ﷺ, son of Abdullah, sent by Allah as the final messenger, whose life and teaching this course's later units will examine in full.`,
      },
      {
        heading: 'Closing this unit and looking ahead',
        body: `This unit has covered the actual center of Usul Thalaathah, the three principles its title refers to, directly connected to a specific, authentic hadith describing what every person will personally be asked after death. Having established these three principles, the text itself turns next to a detailed catalogue of the specific acts of worship belonging to Allah alone, already introduced in broader terms across this course's third unit on Uluhiyyah. This course's next unit follows the text directly into this catalogue, examining each specific act of worship in the primer's own words and its own supporting evidence.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 8 - USUL THALAATHAH: TYPES OF WORSHIP IN THE TEXT (full
  // content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Qurtubi, Baghawi via quran.com and
  // quran.ksu.edu.sa) before writing. English renderings are an
  // original paraphrase of the meaning, not copied from a single
  // named published translation.
  // -----------------------------------------------------------
  'ut3-1': {
    id: 'ut3-1',
    unit: 'unit-8',
    title: 'Introduction to the Text\'s List of Worship Types',
    summary: 'Why the text lists specific acts of worship by name.',
    content: [
      {
        heading: 'From a single command to a detailed list',
        body: `Having established, in this course's previous unit, that Allah alone deserves worship as the direct consequence of correctly knowing Him as Lord, Ibn Abdul-Wahhab's text does something a shorter primer might have skipped entirely: rather than leaving "worship" as a single, general word left open to interpretation, it lists specific named acts of worship one by one, stating plainly that every one of them belongs to Allah alone and to no one else.`,
      },
      {
        heading: 'The text\'s own list, given in full',
        body: `Ibn Abdul-Wahhab writes: "And the types of worship which Allah has commanded, and forbidden that any of them be directed to other than Him, include: Islam, Iman, and Ihsan; and among them are dua, khawf, raja, tawakkul, raghbah, rahbah, khushu', khashyah, inabah, isti'anah, isti'adhah, istighathah, dhabh, and nadhr, along with other types of worship which Allah has commanded, all of which belong to Allah, the Exalted." This single sentence names fourteen distinct terms in addition to the three levels of religion already introduced briefly in this course's previous unit and reserved for fuller treatment in the unit after this one.`,
      },
      {
        heading: 'Why such an exhaustive list matters',
        body: `A shorter, more general statement, simply saying "worship belongs to Allah alone," leaves considerable room for a reader to unconsciously exempt specific acts they had not thought to categorize as worship at all. Naming each term individually closes this loophole directly. A person cannot claim ignorance that seeking refuge (isti'adhah) or making a vow (nadhr) counts as worship requiring Allah's exclusivity, once the text has named it specifically and explicitly as one of the acts this exclusivity covers.

This same logic already appeared in this course's third unit on Uluhiyyah, which examined several of these exact acts of worship in detail. What this unit adds is direct engagement with the primer's own specific wording and its own chosen supporting evidence for each term, following the text closely rather than the broader thematic treatment this course's earlier unit provided.`,
      },
      {
        heading: 'Fourteen terms, six coming topics',
        body: `Given the number of terms involved, this unit groups them into pairs and triples across its remaining five topics, following roughly the order the text itself presents them in: dua, isti'anah, and isti'adhah together; khawf, raja, and tawakkul together; raghbah, rahbah, and khushu' together; khashyah, inabah, and istighathah together; and dhabh and nadhr closing the unit, revisiting acts already introduced in this course's third unit but now anchored directly in the primer's own specific evidence.`,
      },
      {
        heading: 'A closing phrase easy to skip past too quickly',
        body: `The list's closing words, "along with other types of worship which Allah has commanded, all of which belong to Allah," deserve attention in their own right. This is not simply a stylistic flourish rounding off the sentence. It explicitly signals that the fourteen named terms are illustrative rather than exhaustive in the strictest sense; any other act genuinely qualifying as worship, whether or not it happens to be named specifically in this list, falls under the same exclusive requirement. The named list gives concrete, memorable anchors, but the underlying principle, established in full across this course's third unit, extends beyond any single finite list of terms.`,
      },
      {
        heading: 'How this list functions as a practical checklist',
        body: `Read together, these terms give a student something this course's earlier, more thematic treatment of Uluhiyyah could reasonably be checked against directly: a specific, nameable list to run through when examining one's own practice for signs of misdirected worship. Rather than asking only the broad question "am I worshipping Allah alone," a student can ask more specifically: where is my dua actually directed, where does my genuine fear settle, where does my hope rest, whom do I actually rely upon, and so through each remaining term this unit's coming topics examine individually. This is precisely the kind of concrete, checkable specificity this primer is known for, and precisely why it remains so widely taught centuries after it was written.`,
      },
    ],
  },

  'ut3-2': {
    id: 'ut3-2',
    unit: 'unit-8',
    title: 'Dua, Isti\'anah, and Isti\'adhah',
    summary: 'Supplication, seeking help, and seeking refuge, as explained in the text.',
    content: [
      {
        heading: 'Dua, already anchored in this course\'s earlier unit',
        body: `Dua, supplication, was already examined at length in this course's third unit, including the direct hadith equating it with worship itself and the Qur'anic command to call upon Allah, who promises to answer.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',
            english: 'And your Lord has said, call upon Me and I will answer you.',
            source: 'Surah Ghafir, 40:60',
          },
        ],
      },
      {
        heading: 'Isti\'anah, seeking help, drawn from the opening of every prayer',
        body: `Isti'anah, seeking help, appears within the very same verse recited in every unit of every prayer, already covered directly in this course's third unit as one of the clearest possible statements of Uluhiyyah.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
            english: 'You alone we worship, and You alone we ask for help.',
            source: 'Surah al-Fatihah, 1:5',
          },
        ],
      },
      {
        heading: 'Isti\'adhah, seeking refuge, and its dedicated surah',
        body: `Isti'adhah, seeking refuge, receives its own dedicated short surah in the Qur'an, opening with a direct instruction to seek refuge specifically in Allah from harm.`,
        verses: [
          {
            type: 'quran',
            arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
            english: 'Say, I seek refuge in the Lord of daybreak.',
            source: 'Surah al-Falaq, 113:1',
          },
        ],
      },
      {
        heading: 'Why the text groups these three together',
        body: `Dua, isti'anah, and isti'adhah share an underlying structure: each involves turning outward, in words or in heart, toward a source believed capable of granting what is genuinely beyond a person's own power. This is precisely why the text treats them as acts of worship rather than neutral, everyday requests. Directing any of these three specifically toward another created being, whether asking a deceased person for something only Allah can grant, seeking help from an object believed to hold independent power, or seeking refuge in an amulet or charm rather than in Allah, repeats exactly the error already examined at length in this course's third and fifth units, now identified by its specific, named form.`,
      },
      {
        heading: 'A concrete distinction worth restating here',
        body: `As already established in this course's third unit, these three specifically religious acts are distinct from ordinary requests for help directed at people within their genuine, observable ability: asking a friend for a loan, asking a doctor for treatment, or asking a locksmith to open a door. The distinction runs along the same line already drawn earlier in this course: whether the request concerns a matter genuinely within human capability using ordinary means Allah has placed in the world, or a matter reaching beyond any created being's actual power to grant, which is where dua, isti'anah, and isti'adhah in their specifically religious sense belong to Allah alone.`,
      },
      {
        heading: 'Bringing this pairing back to daily practice',
        body: `Practically, this topic asks the same self examination this unit's opening topic already recommended, applied specifically to these three related acts: when genuinely afraid of something beyond ordinary human protection, does refuge get sought from Allah directly, or from a charm, a superstition, or an unseen intermediary believed to hold independent power? When facing a matter no person could actually resolve, does the request for help go to Allah, or does it quietly drift toward some other source assumed, even briefly, to hold real power of its own? These are not abstract questions reserved for theologians. They are the exact, practical substance this primer's specific naming of these three terms was designed to make impossible to overlook.`,
      },
    ],
  },

  'ut3-3': {
    id: 'ut3-3',
    unit: 'unit-8',
    title: 'Khawf, Raja, and Tawakkul',
    summary: 'Fear, hope, and reliance, as explained in the text.',
    content: [
      {
        heading: 'Khawf, fear reserved for Allah',
        body: `Khawf, fear of the specific kind belonging to worship, describes a reverential, submissive fear of Allah's power and judgment, distinct from the ordinary, instinctive fear of ordinary danger every person naturally experiences. The Qur'an repeatedly instructs believers to direct this specific quality of fear toward Allah rather than toward people, using language that pairs a command against fearing others with a direct command to fear Him instead, echoing the same balance already covered in this course's third unit regarding fear as one of the three central pillars of worship.`,
      },
      {
        heading: 'Raja, hope held together with righteous action',
        body: `Raja, hope, receives direct Qur'anic treatment in a verse already encountered in this course's earlier unit, which pairs the hope of meeting Allah with a direct condition attached to it.`,
        verses: [
          {
            type: 'quran',
            arabic: 'فَمَن كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا',
            english: 'So whoever hopes for the meeting with his Lord, let him do righteous work and not associate anyone in the worship of his Lord.',
            source: 'Surah al-Kahf, 18:110',
          },
        ],
      },
      {
        heading: 'A verse that ties raja directly back to correct Uluhiyyah',
        body: `Notice how this verse does not describe hope as a private, disconnected feeling. It ties hope directly to two conditions: righteous action, echoing this course's earlier theme of action following genuine knowledge, and avoiding Shirk specifically in worship, directly connecting raja back to the very subject this entire unit examines. Genuine hope in meeting Allah, according to this verse, cannot coexist with worship quietly shared with another being, precisely the same principle already established regarding dua, isti'anah, and isti'adhah in this unit's previous topic.`,
      },
      {
        heading: 'Tawakkul, reliance already examined directly',
        body: `Tawakkul, complete reliance on Allah regarding outcomes, was already covered at length in this course's third unit, including the direct promise of sufficiency attached to it.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
            english: 'And whoever relies upon Allah, then He is sufficient for him.',
            source: 'Surah at-Talaq, 65:3',
          },
        ],
      },
      {
        heading: 'Why these three form a natural sequence',
        body: `Fear, hope, and reliance form a natural progression rather than three unrelated feelings loosely grouped together. Fear of Allah's judgment provides the reason to take one's conduct seriously. Hope in Allah's mercy prevents that fear from collapsing into despair. Reliance on Allah, once fear and hope are both correctly directed, is what allows a person to act with genuine peace rather than either anxious overcontrol or careless indifference, precisely the balance this course's earlier unit on Uluhiyyah already described using the image of a bird flying with two wings held together, now joined by tawakkul as the settled posture this balance is meant to produce.`,
      },
      {
        heading: 'Misdirecting any one of the three',
        body: `As with every term covered in this unit, misdirecting fear, hope, or reliance toward other than Allah repeats familiar patterns already examined across this course: fearing a supposed curse more than displeasing Allah, placing ultimate hope in wealth or status rather than Allah's mercy, or relying entirely on one's own competence or another person's power with no genuine reliance on Allah at all. None of these require an obvious act of idol worship to qualify as a real compromise of these specific, named acts of worship this text insists belong to Allah exclusively.`,
      },
    ],
  },

  'ut3-4': {
    id: 'ut3-4',
    unit: 'unit-8',
    title: 'Raghbah, Rahbah, and Khushu\'',
    summary: 'Desire, dread, and humble submission, as explained in the text.',
    content: [
      {
        heading: 'Three qualities named together in a single verse',
        body: `Rather than needing three separate citations, the text's next three terms, raghbah, rahbah, and khushu', can each be grounded in a single Qur'anic verse describing the prophet Zakariyya and his family, praised specifically for possessing all three qualities together.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ وَيَدْعُونَنَا رَغَبًا وَرَهَبًا وَكَانُوا لَنَا خَاشِعِينَ',
            english: 'Indeed, they used to hasten to good deeds and call upon Us with desire and fear, and they were humbly submissive to Us.',
            source: 'Surah al-Anbiya, 21:90',
          },
        ],
      },
      {
        heading: 'Raghbah, eager desire directed toward Allah',
        body: `Raghbah describes an eager, hopeful longing for what Allah possesses, distinct from raja's more general hope in the sense that raghbah carries a stronger sense of active yearning and attraction toward Allah's reward and mercy specifically, the kind of eagerness that pulls a person actively toward good deeds rather than merely holding a passive expectation of a favorable outcome.`,
      },
      {
        heading: 'Rahbah, dread paired directly with raghbah',
        body: `Rahbah describes dread of Allah's punishment, paired directly with raghbah in this verse precisely because the tafsir literature notes these two qualities are naturally linked, much like the pairing of khawf and raja already covered in this unit's previous topic. A person drawn toward Allah's reward without any corresponding dread of His punishment risks the same complacency already warned against earlier in this course, while dread without corresponding desire risks tipping into the despair this course's earlier units have consistently cautioned against.`,
      },
      {
        heading: 'Khushu\', humble submission as the resulting posture',
        body: `Khushu' describes a humble, submissive stillness of the heart before Allah, the settled posture that raghbah and rahbah, held together correctly, naturally produce. This same term appears elsewhere in the Qur'an describing the specific quality of successful believers in prayer, tying this third term directly to the lived, embodied experience of worship rather than leaving it as an abstract inner state disconnected from actual practice.`,
      },
      {
        heading: 'Why these three, specifically, are grouped as worship',
        body: `The text names these three alongside dua, khawf, and the others precisely because, like every term in this unit's list, they describe genuine inward postures a person's heart can only correctly hold toward Allah. A person can eagerly desire, genuinely dread, and humbly submit toward another created being, whether a public figure, an employer, or a feared authority, without this necessarily constituting Shirk, provided these postures remain proportionate and do not rise to the specific, complete, worship level intensity this text describes as belonging to Allah alone. The concern this unit raises is specifically when any of these three postures toward a created being begins to rival or exceed what is reserved for Allah, echoing the same proportionality concern already discussed in this course's third unit regarding love, fear, and hope generally.`,
      },
      {
        heading: 'A brief example distinguishing proportionate from disproportionate desire and dread',
        body: `Consider an employee who genuinely desires their employer's approval and genuinely dreads their employer's displeasure. This ordinary workplace dynamic does not, by itself, constitute the kind of raghbah and rahbah this text reserves for Allah. The concern arises specifically if that same employee would compromise a clear religious obligation, lie, or act unjustly purely to secure that approval or avoid that displeasure, at which point the desire and dread involved have begun to rival, in practical weight, what this text insists belongs to Allah alone, precisely the kind of ordinary, easily overlooked drift this entire unit has been built to help a reader notice.`,
      },
    ],
  },

  'ut3-5': {
    id: 'ut3-5',
    unit: 'unit-8',
    title: 'Khashyah, Inabah, and Istighathah',
    summary: 'Awe, repentant turning, and seeking rescue, as explained in the text.',
    content: [
      {
        heading: 'Khashyah, a fear rooted in genuine knowledge',
        body: `Khashyah is often distinguished from the more general khawf already covered earlier in this unit by its specific connection to genuine knowledge of what is feared. Where khawf can describe fear of something only vaguely understood, khashyah describes a deeper, more informed reverential awe, arising specifically from truly knowing Allah's greatness and power, rather than a more generic apprehension. This distinction connects directly to this course's earlier emphasis on knowledge preceding sincere practice: genuine khashyah is presented as growing precisely out of correct knowledge of Allah, not existing independently of it.`,
      },
      {
        heading: 'Inabah, turning back to Allah in repentance',
        body: `Inabah describes a repentant, wholehearted turning back toward Allah, directly commanded in a verse pairing this turning with complete submission.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَأَنِيبُوا إِلَىٰ رَبِّكُمْ وَأَسْلِمُوا لَهُ',
            english: 'And turn back to your Lord in repentance, and submit to Him.',
            source: 'Surah az-Zumar, 39:54',
          },
        ],
      },
      {
        heading: 'Why inabah is grouped with worship rather than treated as a separate matter',
        body: `Inabah might initially seem more like a general life orientation than a specific, nameable act of worship alongside dua or dhabh. The text's inclusion of it here makes a direct point: the very act of turning back toward Allah in genuine repentance is itself an act of worship belonging to Him exclusively, not a preliminary step outside worship that merely leads toward it. A person who genuinely turns in repentant humility toward another being, seeking that being's approval or forgiveness in the same complete, submissive sense reserved for Allah, has misdirected inabah in exactly the way this unit's other terms warn against.`,
      },
      {
        heading: 'Istighathah, seeking rescue in genuine crisis',
        body: `Istighathah, seeking rescue or urgent help in a moment of real crisis, receives a specific historical example directly from the Qur'an, describing the Prophet ﷺ's own urgent plea to Allah before the Battle of Badr.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ',
            english: 'When you sought urgent help from your Lord, and He answered you.',
            source: 'Surah al-Anfal, 8:9',
          },
        ],
      },
      {
        heading: 'Why this specific example matters',
        body: `This verse commemorates a real, historically documented moment: the Prophet ﷺ, facing a vastly outnumbered army at Badr, is reported to have raised his hands toward the qiblah and pleaded urgently with Allah for victory, so intensely that his cloak slipped from his shoulders, until Abu Bakr gently reassured him that Allah would fulfill His promise. This is istighathah in its most vivid, concrete form: genuine crisis, genuine urgency, and a plea directed entirely and exclusively to Allah, answered directly with the sending of angelic reinforcement described in the verse's continuation.

The Adab drawn from this example connects directly to what this unit has emphasized throughout: in a person's own moments of genuine crisis, whatever form that crisis takes, the model this verse provides is urgent, exclusive turning to Allah, not to an intermediary, a superstition, or any other source believed capable of providing rescue independently of Him.`,
      },
      {
        heading: 'Closing this topic\'s three terms together',
        body: `Khashyah, inabah, and istighathah complete a picture already built throughout this unit: a person's deepest fear grounded in genuine knowledge, their deepest repentance directed in complete submission, and their most urgent cry for rescue in genuine crisis all belong to Allah alone, exactly as the text's opening list in this unit's first topic already stated directly. This unit's final topic now turns to the two remaining terms, dhabh and nadhr, already introduced in this course's third unit but examined here directly through the primer's own specific wording and evidence.`,
      },
    ],
  },

  'ut3-6': {
    id: 'ut3-6',
    unit: 'unit-8',
    title: 'Dhabh and Nadhr, Revisited in the Text\'s Own Words',
    summary: 'Sacrifice and vows, as the text specifically explains them.',
    content: [
      {
        heading: 'Dhabh, sacrifice, grounded in a short but direct surah',
        body: `Dhabh, ritual sacrifice, already covered in detail in this course's third unit, receives direct grounding in one of the shortest surahs in the Qur'an, revealed specifically to correct those who directed their sacrifices elsewhere.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ فَصَلِّ لِرَبِّكَ وَانْحَرْ',
            english: 'Indeed, We have given you abundant good, so pray to your Lord and sacrifice.',
            source: 'Surah al-Kawthar, 108:1-2',
          },
        ],
      },
      {
        heading: 'The occasion behind this surah',
        body: `The tafsir literature records that this surah was revealed after a disbeliever mocked the Prophet ﷺ, following the death of his infant son, calling him "cut off" or without lasting legacy. The surah's response pairs a promise of abundant good with a direct instruction: pray and sacrifice, specifically for Allah, in contrast with the disbelievers of that era who prayed and sacrificed for their idols. This historical context sharpens the verse's point considerably: even in a moment of personal grief being used against him, the Prophet ﷺ is instructed to respond not with retaliation but with worship, and worship directed correctly and exclusively to Allah, exactly the standard this entire unit has been building toward.`,
      },
      {
        heading: 'Why sacrifice and prayer are named together again',
        body: `As already noted in this course's third unit, pairing sacrifice directly alongside prayer, rather than treating it as a lesser or separate category, closes off any suggestion that sacrifice might be treated more casually than prayer regarding who it is directed toward. This same pairing appears again in the verse this course's third unit already examined directly, tying prayer, sacrifice, life, and death together as belonging to Allah alone. Two separate Qur'anic passages reinforcing the same specific pairing signals how seriously this particular act of worship is treated throughout the Qur'an as a whole, not merely in one isolated verse.`,
      },
      {
        heading: 'Nadhr, vows, as a self imposed act of worship',
        body: `Nadhr, a vow made to perform some act of worship or charity contingent on a specific outcome, was already examined in this course's third unit as an act that becomes religiously binding once made sincerely for Allah's sake. The Qur'an describes those who genuinely fulfill their vows as among the praiseworthy qualities of sincere believers, describing them as people who remain mindful of a day whose difficulty will be widespread, tying faithful vow keeping directly to genuine awareness of accountability before Allah.`,
      },
      {
        heading: 'Why vows made to other than Allah repeat the same error',
        body: `A vow directed toward anyone other than Allah, whether promising an offering to a shrine, a saint, or any other being in exchange for a hoped for outcome, repeats precisely the same misdirection already examined throughout this unit: an act genuinely qualifying as worship, in this case a voluntary, self imposed act of devotion, directed toward a being with no actual right to receive it. This is true regardless of how sincerely the person making the vow believes their intention to be good, or how culturally normalized the specific practice might be in their particular community, echoing the exact reasoning already applied to sacrifice, dua, and every other term this unit has covered.`,
      },
      {
        heading: 'Closing this unit\'s complete catalogue',
        body: `Having now examined all fourteen named terms from the text's opening list across this unit's six topics, along with the three levels of religion already briefly introduced in the previous unit, a complete and specific picture of Uluhiyyah has now been built directly from the primer's own wording and evidence, supplementing the broader, more thematic treatment this course's third unit already provided. This course's next unit turns to those same three levels, Islam, Iman, and Ihsan, in the fuller detail the text itself provides, along with the specific pillars belonging to each, following the primer's own progression directly from this point forward.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 9 - USUL THALAATHAH: ISLAM AND ITS LEVELS (full content,
  // expanded)
  //
  // The Hadith of Jibril quoted across this unit was checked against
  // its full wording as narrated by Umar ibn al-Khattab in Sahih
  // Muslim. Qur'anic Arabic checked against primary tafsir sources
  // before writing. English renderings are an original paraphrase of
  // the meaning, not copied from a single named published
  // translation.
  // -----------------------------------------------------------
  'ut4-1': {
    id: 'ut4-1',
    unit: 'unit-9',
    title: 'Islam as the Religion of Every Prophet',
    summary: 'The text\'s explanation of Islam\'s continuity across all messengers.',
    content: [
      {
        heading: 'Returning to the definition already introduced',
        body: `This course's previous unit on the second grave question already introduced the text's basic definition of religion: Islam, described as submission to Allah through Tawheed, compliance to Him through obedience, and disavowal of Shirk and its people. This unit now returns to that same definition to develop it fully, exactly following the primer's own structure, which first states the definition briefly when introducing the second principle, then expands on it considerably later.`,
      },
      {
        heading: 'Not a religion beginning with the Prophet ﷺ',
        body: `A point already established in this course's very first unit deserves restating directly here: Islam, in the sense this text describes it, sincere submission to Allah alone, was never presented as a religion beginning with the Prophet Muhammad ﷺ in the seventh century. Every prophet before him, from Nuh to Ibrahim to Musa to Isa, called their people to this exact same submission, worship Allah alone and reject every false object of worship, exactly as this course's first unit already established through the Qur'an's own repeated testimony.

What the Prophet ﷺ brought was the final, complete, and permanently preserved expression of this same submission, along with the specific law suited to his own community, not a newly invented religion unrelated to what came before it.`,
      },
      {
        heading: 'Why this continuity matters for understanding "levels"',
        body: `Understanding Islam as a continuous, universal submission rather than a religion invented from scratch matters directly for this unit's coming topics on Islam's three levels. If Islam simply meant a specific set of seventh century Arabian customs, describing deeper "levels" within it might seem like an odd addition. But because Islam names the underlying reality of sincere submission to Allah shared across every prophet's mission, it makes complete sense that this submission can be held with varying degrees of depth: outward compliance, inward conviction, and finally a heightened, constant awareness of Allah's presence, the three levels this unit examines directly.`,
      },
      {
        heading: 'A single religion, examined from three angles',
        body: `The three levels this unit covers, Islam, Iman, and Ihsan, are not three separate religions or three separate paths a person chooses between. They describe the same submission to Allah examined from three progressively deeper angles: Islam describes its outward pillars and visible practice, Iman describes the inward convictions this practice rests upon, and Ihsan describes the quality of awareness and sincerity that should accompany both. A person can perform every outward pillar of Islam correctly while still needing to examine whether genuine Iman underlies that practice, and can hold correct Iman while still needing to examine whether their worship carries the constant awareness of Allah that Ihsan describes.`,
      },
      {
        heading: 'Why the text presents these three levels in this specific order',
        body: `The sequence Islam, then Iman, then Ihsan is not arbitrary. It mirrors a realistic path most people actually travel in their own religious development: outward practice is often the first, most visible entry point, learned and performed even before its full inward meaning is completely grasped, particularly for children raised within Muslim households or new Muslims still building their understanding. Genuine conviction (Iman) typically deepens alongside and after this outward practice, as understanding grows through continued learning and lived experience. Ihsan, the constant, felt awareness this unit's fourth topic describes, tends to represent the furthest, most mature point along this same path, reached only after both correct practice and correct conviction are already genuinely present.

This ordering does not mean a person must achieve perfect Islam before any Iman is possible, or perfect Iman before any Ihsan can be experienced. All three typically develop together, unevenly and gradually, throughout a person's life. The order instead reflects which dimension tends to be most visible and most commonly addressed first, both for a new student of this subject and for this course's own unit by unit structure.`,
      },
      {
        heading: 'Where the fullest evidence for all three levels comes from',
        body: `While the primer states each of these three levels briefly in its own words, its actual supporting evidence for all three, given together in a single connected account, comes from one of the most significant hadith in the entire Islamic tradition, known as the Hadith of Jibril. This unit's remaining topics examine the text's brief definition of each level in turn, before this unit's final topic turns to the full account of this hadith directly, the single source from which the primer draws its evidence for all three levels together.`,
      },
    ],
  },

  'ut4-2': {
    id: 'ut4-2',
    unit: 'unit-9',
    title: 'The Five Pillars of Islam',
    summary: 'The outward acts the text identifies as pillars of the religion.',
    content: [
      {
        heading: 'The text\'s own statement of the pillars',
        body: `Following its definition of Islam as submission, obedience, and disavowal of Shirk, Ibn Abdul-Wahhab's text names five specific pillars this submission is built upon, drawing this list directly from the Hadith of Jibril examined fully in this unit's final topic.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَتُقِيمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا',
            english: 'Islam is that you testify there is no god but Allah and that Muhammad is the Messenger of Allah, establish prayer, give zakat, fast Ramadan, and make pilgrimage to the House if you are able to find a way to it.',
            source: 'Sahih Muslim, from the Hadith of Jibril, narrated by Umar ibn al-Khattab',
          },
        ],
      },
      {
        heading: 'The first pillar as the foundation of every other pillar',
        body: `The testimony of faith (shahadah), that there is no god but Allah and that Muhammad is His Messenger, is not simply the first item on a numbered list. It is the foundation every other pillar depends upon entirely, since prayer, zakat, fasting, and pilgrimage performed without this underlying testimony would have no genuine Islamic meaning at all. This single testimony compresses the entire subject of this course, correct Tawheed and correct knowledge of the Prophet ﷺ, into the specific words a person actually speaks to enter Islam formally.`,
      },
      {
        heading: 'Prayer, zakat, and fasting as regular, embodied practice',
        body: `The second, third, and fourth pillars, establishing prayer, giving zakat, and fasting Ramadan, translate the testimony of faith into regular, embodied practice repeated at fixed times: five times daily for prayer, once yearly for zakat and fasting. This regularity matters directly for a theme already covered throughout this course: correct belief is not meant to remain a private, occasional conviction, but is meant to structure the actual rhythm of daily and yearly life, exactly the connection between knowledge and action this course's sixth unit already established.`,
      },
      {
        heading: 'Pilgrimage and its specific qualifying condition',
        body: `The fifth pillar, pilgrimage to the House (Hajj), carries a specific qualifying condition attached directly within the hadith itself: for whoever is able to undertake the journey. Unlike the first four pillars, which apply to every capable adult Muslim without this kind of conditional qualifier, Hajj is tied explicitly to genuine capability, whether financial, physical, or otherwise. This detail reflects a broader principle already touched upon in this course's earlier units: Islam's obligations are demanding but not unreasonable, calibrated to what a person can genuinely undertake rather than imposed without regard for real capacity.`,
      },
      {
        heading: 'Why these five, specifically, were chosen as pillars',
        body: `A pillar, architecturally, is a structural support the rest of a building rests upon, and this metaphor is precise for how these five acts function within Islam as a whole. Each addresses a distinct dimension of a person's life: the shahadah addresses belief and identity, prayer addresses the regular, direct relationship between a servant and Allah, zakat addresses a person's relationship to wealth and to the poor, fasting addresses self discipline and restraint, and Hajj addresses a once in a lifetime physical and spiritual culmination shared across the entire global Muslim community. Together, these five pillars touch nearly every dimension of a person's practical existence, which is precisely why they were selected as the foundational structure Islam's outward practice rests upon, rather than an arbitrary or incomplete selection.`,
      },
      {
        heading: 'Pillars as necessary but not sufficient on their own',
        body: `This topic closes with a point this unit's next two topics will develop directly: performing these five pillars correctly, while genuinely necessary, is not by itself the complete picture Usul Thalaathah describes. A person can perform every one of these five pillars with technical precision while still lacking the genuine inward conviction (Iman) these pillars are meant to rest upon, or the heightened awareness of Allah's presence (Ihsan) that should accompany performing them. This is precisely why the text presents Islam as the first of three levels, not the entirety of what a complete, living faith requires.`,
      },
    ],
  },

  'ut4-3': {
    id: 'ut4-3',
    unit: 'unit-9',
    title: 'The Six Pillars of Iman',
    summary: 'The matters of belief the text identifies as pillars of faith.',
    content: [
      {
        heading: 'The text\'s own statement of the pillars',
        body: `Turning from outward practice to inward conviction, Ibn Abdul-Wahhab's text names six specific matters of belief, again drawn directly from the Hadith of Jibril.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَنْ تُؤْمِنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ',
            english: 'That you believe in Allah, His angels, His books, His messengers, and the Last Day, and that you believe in divine decree, its good and its bad.',
            source: 'Sahih Muslim, from the Hadith of Jibril, narrated by Umar ibn al-Khattab',
          },
        ],
      },
      {
        heading: 'Belief in Allah, already the subject of this entire course',
        body: `The first pillar of Iman, belief in Allah, names the exact subject this course has spent its first four units examining in careful detail: correct belief in Allah's Lordship, His exclusive right to worship, and His names and attributes. This single word in the hadith, condensed as it appears, actually contains everything this course's foundational units have unpacked at length, a useful reminder that the brief, memorable statements this primer is known for often compress considerable depth into deceptively simple language.`,
      },
      {
        heading: 'Belief in angels, books, and messengers',
        body: `The second, third, and fourth pillars, belief in Allah's angels, His revealed books, and His messengers, extend belief in Allah outward into belief in the specific means through which Allah has communicated with and governed His creation: angels as obedient, unseen beings carrying out Allah's commands, including the very angel Jibril who appears directly in the hadith this unit examines fully in its final topic; books as the various scriptures revealed to different prophets, culminating in the Qur'an; and messengers as the specific human beings chosen to deliver these revelations, already covered directly in this course's first unit regarding the consistent core message every one of them carried.`,
      },
      {
        heading: 'Belief in the Last Day',
        body: `The fifth pillar, belief in the Last Day, addresses a subject this course will examine in complete detail in its later unit on resurrection and the sending of messengers: genuine conviction that death is not the end of accountability, but is followed by resurrection, judgment, and a final, permanent outcome in Paradise or the Fire. This belief gives the other five pillars their ultimate weight and consequence, since a life lived according to correct Tawheed and correct practice is understood to matter precisely because it leads toward this final accounting, not because it produces only worldly benefit in the present life alone.`,
      },
      {
        heading: 'Belief in divine decree, already examined directly',
        body: `The sixth and final pillar, belief in Qadar, including both what a person perceives as good and what they perceive as difficult, was already examined at length in this course's second unit, including the direct correction against treating belief in decree as an excuse to abandon genuine effort. Its inclusion here as one of the six foundational pillars of belief confirms how central this specific matter is considered, standing alongside belief in Allah Himself, His angels, His books, His messengers, and the Last Day as one of the six essential convictions Iman is built upon.`,
      },
      {
        heading: 'Why Iman is described as the inward counterpart to Islam',
        body: `Where the five pillars of Islam covered in this unit's previous topic describe outward, observable acts, the six pillars of Iman describe convictions held within the heart, not directly observable by anyone else. This distinction matters practically: a person could, in principle, recite the testimony of faith and perform the outward pillars of Islam without genuinely holding these six convictions in their heart, which is precisely the situation the Qur'an describes among certain groups who outwardly professed Islam without corresponding inward belief. Iman is what these outward pillars are meant to genuinely rest upon, not a separate, optional addition to them.`,
      },
    ],
  },

  'ut4-4': {
    id: 'ut4-4',
    unit: 'unit-9',
    title: 'The Level of Ihsan',
    summary: 'The text\'s explanation of worshipping Allah as though you see Him.',
    content: [
      {
        heading: 'The shortest, and arguably most demanding, of the three levels',
        body: `Compared to the five pillars of Islam and the six pillars of Iman, the definition of Ihsan given directly in the Hadith of Jibril is remarkably brief, a single sentence rather than a numbered list, yet it is often treated as describing the deepest and most demanding of the three levels this unit has covered.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
            english: 'That you worship Allah as though you see Him, and if you do not see Him, then indeed He sees you.',
            source: 'Sahih Muslim, from the Hadith of Jibril, narrated by Umar ibn al-Khattab',
          },
        ],
      },
      {
        heading: 'Two levels within a single sentence',
        body: `Scholars commenting on this definition note that it actually describes two connected levels of Ihsan rather than one. The first and higher level, worshipping Allah as though you see Him, describes a state of such vivid, constant awareness of Allah that worship is performed with the same attentiveness a person would naturally bring if Allah were visibly present before them. The second level, offered as a fallback for those who cannot yet reach the first, is awareness that Allah sees you even though you do not see Him, a form of mindfulness grounded in being observed rather than in directly perceiving the One observing.

Both levels describe genuine Ihsan, but the hadith's own structure suggests a kind of aspiration built into the definition itself: begin, at minimum, with genuine awareness of being seen, while working toward the deeper awareness of worshipping as though seeing.`,
      },
      {
        heading: 'Why Ihsan is the natural completion of Islam and Iman',
        body: `Ihsan does not introduce new pillars or new acts alongside the five pillars of Islam and six pillars of Iman already covered in this unit. It describes the quality and sincerity with which those same pillars and convictions are held and performed. A person could technically perform every pillar of Islam and hold every conviction of Iman while still praying distractedly, giving charity carelessly, or believing correctly without any felt sense of Allah's nearness. Ihsan asks for something beyond technical correctness: a lived, felt awareness that transforms outward compliance and inward conviction into something approaching genuine closeness with Allah.

This connects directly to a theme already covered throughout this course, particularly in the unit on sincerity behind ordinary acts of worship: correct action and correct belief, without this accompanying awareness, remain incomplete, exactly the incompleteness this course's earlier units have consistently warned against at each stage of Tawheed already covered.`,
      },
      {
        heading: 'A practical example of the difference Ihsan makes',
        body: `Consider two people performing the exact same prayer, with identical outward movements and identical correct belief underlying it. One recites the words while mentally reviewing an unrelated errand list, technically fulfilling the pillar of prayer and holding correct Iman, yet largely absent in attention. The other recites the same words while genuinely aware, even briefly, that Allah is near and observing this exact moment, bringing a quality of presence the first person's technically correct prayer lacked entirely. Both may have fulfilled the outward pillar. Only the second has approached what this hadith describes as Ihsan.`,
      },
      {
        heading: 'Ihsan as a lifelong pursuit, not a single achievement',
        body: `Given how demanding the first, higher level of this definition genuinely is, worshipping with the vividness of actually seeing Allah, Ihsan is best understood as a lifelong direction to grow toward rather than a fixed achievement a person either possesses completely or lacks entirely. Even the second, more accessible level, awareness of being seen, requires ongoing, repeated effort to maintain consistently across an entire life of worship, rather than being mastered once and left unattended afterward. This unit's final topic now turns to the complete account of the Hadith of Jibril itself, the single source from which all three of these levels, Islam, Iman, and Ihsan, are drawn together in one connected narrative.`,
      },
    ],
  },

  'ut4-5': {
    id: 'ut4-5',
    unit: 'unit-9',
    title: 'Evidence for Each Level from the Hadith of Jibril',
    summary: 'The famous hadith the text draws these three levels from.',
    content: [
      {
        heading: 'A mysterious visitor no one recognized',
        body: `Umar ibn al-Khattab narrates a remarkable scene: while sitting with the Prophet ﷺ and his companions one day, a man appeared among them wearing strikingly white clothing and possessing strikingly black hair, showing no sign of travel despite his sudden, unexplained appearance, and recognized by none of those present. He sat directly in front of the Prophet ﷺ, placing his knees against the Prophet's ﷺ knees and his hands on his own thighs, an unusually direct and formal posture for a stranger to assume.`,
      },
      {
        heading: 'The first question, and the answer already covered in this unit',
        body: `The stranger asked directly: "O Muhammad, tell me about Islam." The Prophet ﷺ answered exactly as covered in this unit's second topic: the testimony of faith, establishing prayer, giving zakat, fasting Ramadan, and Hajj for whoever is able. The stranger responded simply, "you have spoken truthfully," which struck the companions present as strange, since a person would not normally both ask a question and then confirm the accuracy of the answer given, as though he already knew it before asking.`,
      },
      {
        heading: 'The second and third questions',
        body: `The stranger continued, asking about Iman, and received the six pillar answer already covered in this unit's third topic, again responding "you have spoken truthfully." He then asked about Ihsan, and received the single sentence definition already covered directly in this unit's fourth topic, worshipping Allah as though seeing Him, or at minimum with awareness of being seen by Him.`,
      },
      {
        heading: 'A fourth question, extending beyond the three levels',
        body: `The stranger then asked a further question, extending beyond the three levels this unit has focused on: "tell me about the Hour." The Prophet ﷺ gave a striking response: "the one being asked about it knows no more than the one asking," a direct acknowledgment that precise knowledge of when the Day of Judgment will occur belongs to Allah alone, not even to His own Prophet ﷺ. The stranger then asked for its signs instead, and received a description of specific social conditions: a slave woman giving birth to her own mistress, and formerly poor, barefoot shepherds competing to build increasingly tall structures, both understood as describing significant, recognizable shifts in social conditions preceding this final Hour.`,
      },
      {
        heading: 'The reveal, and why it matters',
        body: `The stranger then departed as suddenly as he had arrived. After some time had passed, the Prophet ﷺ asked Umar directly whether he knew who the questioner had been. Umar answered that Allah and His Messenger knew best, to which the Prophet ﷺ revealed: "that was Jibril, who came to teach you your religion."

This closing revelation reframes the entire preceding exchange. Every question, and every answer, had been carefully structured by the angel Jibril himself, at Allah's direction, specifically to teach the companions, and through their preserved account, every subsequent generation of Muslims, the complete structure of their religion in a single, memorable conversation: its outward pillars (Islam), its inward convictions (Iman), its accompanying quality of sincerity (Ihsan), and the reminder that the timing of final accountability belongs to Allah's knowledge alone.`,
      },
      {
        heading: 'Why this single hadith carries the weight this unit has placed on it',
        body: `This account explains directly why Usul Thalaathah, and this course's own structure following it, draws its evidence for all three levels from one single, connected narrative rather than three separate, unrelated citations. The three levels were never meant to be studied as disconnected categories. They were taught together, in a single sitting, through a single divinely orchestrated exchange, precisely so that a student would grasp their unity: one complete religion, examined through outward practice, inward conviction, and the sincerity that should accompany both, exactly the picture this entire unit has built topic by topic. Having now covered this complete picture, this course's next unit turns to the Prophet ﷺ himself, the very person Jibril addressed directly throughout this remarkable exchange, examining his life and mission in the detail the text's third principle deserves.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 10 - USUL THALAATHAH: THE PROPHET MUHAMMAD ﷺ (full
  // content, expanded)
  //
  // Biographical details checked against the primer's own text and
  // standard reference sources for the seerah. Qur'anic Arabic
  // checked against primary tafsir sources (Ibn Kathir, Tabari,
  // Qurtubi, Baghawi via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // -----------------------------------------------------------
  'ut5-1': {
    id: 'ut5-1',
    unit: 'unit-10',
    title: 'His Lineage and Life Before Prophethood',
    summary: 'What the text says of his family line and early life.',
    content: [
      {
        heading: 'Returning to the lineage already introduced',
        body: `This course's earlier unit on the third grave question already introduced the text's answer regarding the Prophet's ﷺ identity: Muhammad, son of Abdullah, son of Abdul-Muttalib, son of Hashim, with Hashim descending from Quraysh, Quraysh from the Arabs generally, and the Arabs from the line of Ismail, son of Ibrahim. This unit now returns to that same lineage to build out the fuller account the primer provides once this third principle is developed in complete detail.`,
      },
      {
        heading: 'A specific, memorable breakdown of his age',
        body: `The text gives a precise, memorable breakdown of the Prophet's ﷺ total lifespan: sixty three years in total, forty of them before prophethood began, and twenty three afterward as a prophet and messenger. This precision is characteristic of the primer's overall style, already noted throughout this course: rather than leaving a general impression, it supplies exact, checkable figures a student can hold onto and recall clearly.`,
      },
      {
        heading: 'Forty years before any revelation came',
        body: `The first forty years of this breakdown cover his life before receiving any revelation at all: born in Makkah, orphaned of his father before birth and his mother in early childhood, raised first by his grandfather Abdul-Muttalib and then by his uncle Abu Talib, and known throughout his community, even among those who would later oppose him, for his honesty and trustworthiness, earning him the title al-Amin, the trustworthy one, well before any claim to prophethood was ever made. This detail matters directly for how the beginning of his mission is understood: his character was already established and widely recognized among his own people for decades before revelation began, which is precisely why his sudden claim to prophethood could not credibly be dismissed by those who had known him personally throughout this earlier period.`,
      },
      {
        heading: 'A habit of withdrawal already present before revelation began',
        body: `In the years immediately preceding the start of revelation, he is reported to have developed a habit of periodically withdrawing to a cave on Mount Hira, outside Makkah, for extended solitary reflection, a practice that continued for some time before the first revelation actually arrived there. This detail shows that his eventual prophethood did not interrupt an otherwise ordinary, unreflective life. It arrived during a period already marked by serious, sustained contemplation, even though the content and nature of what would follow remained entirely unknown to him until the moment it actually began.`,
      },
      {
        heading: 'Why this earlier life matters for the principle this unit examines',
        body: `As already noted in this course's earlier unit on the third grave question, correctly knowing the Prophet ﷺ requires knowing him as a genuine historical person, not a vague symbolic figure. This topic's details, his lineage, his exact age, his character before revelation, and his habit of reflection, all serve this same purpose: grounding the third principle in specific, verifiable history rather than leaving it as an abstract title. This unit's remaining topics now turn to the moment this ordinary, well regarded life was interrupted by the beginning of revelation itself.`,
      },
    ],
  },

  'ut5-2': {
    id: 'ut5-2',
    unit: 'unit-10',
    title: 'The Beginning of Revelation',
    summary: 'The text\'s account of how his prophethood began.',
    content: [
      {
        heading: 'The text\'s own marker for the start of prophethood',
        body: `Ibn Abdul-Wahhab's text names the specific surah marking the beginning of his prophethood directly: "he was made a prophet with (Recite), and made a messenger with (The Cloaked One)." This single sentence draws a precise distinction between two related but technically distinct moments, prophethood (nubuwwah) and messengership (risalah), each marked by a different specific revelation.`,
      },
      {
        heading: '\'Iqra\', the first words of revelation',
        body: `While in his cave on Mount Hira, during one of his periods of solitary reflection already described in this unit's previous topic, he received the first words of what would become the Qur'an, opening with the command to recite, alongside a description of Allah as the one who created humankind and taught by the pen what was not previously known. This moment marks the beginning of his prophethood specifically, the point at which he began personally receiving revelation from Allah, even before he was instructed to convey this revelation publicly to others.`,
      },
      {
        heading: 'A period before public commissioning',
        body: `Between this first experience of revelation and the specific instruction to begin warning others publicly, a period passed during which no further revelation came, a gap the seerah literature describes as a time of considerable uncertainty and even distress for him, before revelation resumed and his public mission was formally commissioned. This gap matters for understanding the distinction the text draws between prophethood and messengership: prophethood began with that first private experience on Mount Hira, while messengership, carrying with it the specific responsibility to convey the message publicly, began only once this second, distinct revelation arrived.`,
      },
      {
        heading: 'Why this distinction is worth preserving carefully',
        body: `A person might reasonably ask why this technical distinction between prophethood and messengership matters enough for a short primer to preserve it specifically. The answer connects directly to the broader precision already noted throughout this unit: Ibn Abdul-Wahhab's text consistently favors exact, specific detail over vague generalization, and this distinction is a genuine, recognized feature of classical scholarship regarding prophethood generally, not a detail invented for this text alone. Preserving it here reflects the same commitment to precision already seen in the text's treatment of his exact age and exact lineage.`,
      },
      {
        heading: 'Setting up the public phase of his mission',
        body: `Having covered the private beginning of revelation in this topic, this unit's next topic turns to the specific content of his public commissioning, the second revelation named directly in the text, and the core message this commissioning instructed him to deliver first, before any other aspect of the religion had yet been revealed.`,
      },
    ],
  },

  'ut5-3': {
    id: 'ut5-3',
    unit: 'unit-10',
    title: 'The Call to Tawheed and the Meccan Period',
    summary: 'The core message he called his people to first.',
    content: [
      {
        heading: 'The commission to warn, given in four short verses',
        body: `The specific revelation the text names as marking his messengership opens with a direct, four part instruction, examined closely across the tafsir literature for the precise content each of its four commands carries.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الْمُدَّثِّرُ قُمْ فَأَنذِرْ وَرَبَّكَ فَكَبِّرْ وَثِيَابَكَ فَطَهِّرْ وَالرُّجْزَ فَاهْجُرْ',
            english: 'O you who are wrapped in a cloak, arise and warn, and magnify your Lord, and purify your garments, and abandon impurity.',
            source: 'Surah al-Muddaththir, 74:1-5',
          },
        ],
      },
      {
        heading: 'Four commands, each carrying specific meaning',
        body: `Classical commentary explains each of these four short commands as carrying content directly relevant to the very subject this entire course has examined: "arise and warn" means warn specifically against Shirk and call people to Tawheed. "Magnify your Lord" means honor and exalt Allah specifically through correct Tawheed, not through any other form of veneration. "Purify your garments" is understood by many early commentators as purifying one's actions and character from Shirk, extending beyond literal clothing into the deeper sense of purified conduct. "Abandon impurity" refers specifically to abandoning idols, understood here as the "impurity" named directly, meaning leaving them behind entirely, along with disavowing both the idols themselves and those who continue worshipping them.

Read together, these four short commands compress an entire program into a single revelation: identify the core problem (Shirk), state the core solution (Tawheed), align personal conduct with that solution, and cut all remaining ties to the specific practice being corrected. This is, in miniature, the same structure this entire course has followed across its own units.`,
      },
      {
        heading: 'Thirteen years focused specifically on this message',
        body: `Following this commission, his public mission in Makkah continued for approximately thirteen years, during which the call remained focused specifically and consistently on Tawheed, correcting the widespread Shirk already described throughout this course's earlier units, well before other specific obligations, such as the additional details of zakat, fasting, or Hajj, were revealed in their fuller, later forms. This sequencing is itself instructive, echoing a theme already covered in this course's own structure: correct foundational belief was established first, over an extended period, before the specific practices built upon that foundation were introduced in detail, mirroring exactly the sequence this course itself has followed from its own first unit onward.`,
      },
      {
        heading: 'The night journey and the five daily prayers',
        body: `Toward the end of this Makkan period, roughly ten years after his public mission began, he experienced the night journey and ascension (al-Isra wal-Mi'raj), a miraculous journey from Makkah to Jerusalem and then through the heavens, during which the five daily prayers, already covered in this course's previous unit as the second pillar of Islam, were made obligatory. This detail places one of Islam's central pillars within this specific historical moment near the close of the Makkan period, connecting this unit's biographical account directly back to material this course has already covered in depth.`,
      },
      {
        heading: 'Persecution intensifying toward the period\'s end',
        body: `Throughout this Makkan period, opposition to his message grew increasingly severe, particularly as more people accepted Islam and the established social and religious order in Makkah felt genuinely threatened by the specific demand this course has examined throughout: abandoning inherited idol worship entirely rather than merely adding Allah to an existing set of objects of worship, exactly the same costly demand this course's earlier unit on Uluhiyyah already identified as the actual historical point of conflict between every prophet and his people. Early converts from among the poorer and less protected members of Makkan society bore the brunt of this persecution most directly, some suffering severe physical torment for their refusal to renounce their newly held Tawheed, a pattern of costly conviction already touched upon in this course's earlier discussion of the price genuine Uluhiyyah has historically demanded of those who hold to it sincerely.`,
      },
      {
        heading: 'A brief period of respite before the final move',
        body: `Before the Hijrah to Madinah examined in this unit's next topic, a smaller group of early Muslims had already migrated temporarily to Abyssinia, seeking refuge under a Christian ruler known for his justice, after persecution in Makkah had become severe enough to warrant leaving the city altogether even before the larger, permanent migration to Madinah was arranged. This earlier migration illustrates that seeking safety from persecution, when a person's ability to practice correct Tawheed is genuinely threatened, was itself part of the Prophet's ﷺ own guided response to hardship, not a departure from faithful practice but an application of the same patience and wisdom this course's earlier units on Adab and trials have already described.`,
      },
    ],
  },

  'ut5-4': {
    id: 'ut5-4',
    unit: 'unit-10',
    title: 'The Hijrah and Establishment of the Religion',
    summary: 'The text\'s account of the migration to Madinah and what followed.',
    content: [
      {
        heading: 'A migration driven by necessity, not choice',
        body: `As persecution in Makkah intensified beyond what remained sustainable, particularly after the death of his uncle Abu Talib removed a significant source of tribal protection, he was eventually instructed to migrate to Madinah, where a growing number of new converts had already pledged their support and protection. This migration, the Hijrah, marks such a significant turning point in Islamic history that it was later adopted as the starting point of the Islamic calendar itself, a testament to how thoroughly this single event reshaped the trajectory of the entire mission that had begun thirteen years earlier in Makkah.`,
      },
      {
        heading: 'From a persecuted minority to an established community',
        body: `Once settled in Madinah, his circumstances changed fundamentally. Rather than operating as a persecuted minority within a hostile city, he now led an increasingly established Muslim community with genuine social and political standing, a transformation that made possible the revelation and implementation of religious obligations that would have been far harder to establish under the conditions of the earlier Makkan period.`,
      },
      {
        heading: 'The remaining laws of Islam established in Madinah',
        body: `The text describes this Madinan period as the point at which the remaining laws of Islam were established: zakat, the fast of Ramadan, Hajj, the call to prayer (adhan), jihad, and the command to enjoin good and forbid wrong, along with the other specific laws that complete Islam's practical structure. Notice the pattern this confirms directly: Tawheed, covered exhaustively in the thirteen year Makkan period, came first, and the specific legal and ritual structure built upon that foundation came only afterward, once the foundation itself had been thoroughly established.`,
      },
      {
        heading: 'A mission described as extending to every people',
        body: `While established first in Madinah, his mission was never described as limited to Madinah or to the Arabs specifically. The Qur'an describes him as sent to address all of humanity directly.`,
        verses: [
          {
            type: 'quran',
            arabic: 'قُلْ يَا أَيُّهَا النَّاسُ إِنِّي رَسُولُ اللَّهِ إِلَيْكُمْ جَمِيعًا',
            english: 'Say, O mankind, indeed I am the Messenger of Allah to you all.',
            source: 'Surah al-A\'raf, 7:158',
          },
        ],
      },
      {
        heading: 'Ten years in Madinah, completing the mission\'s structure',
        body: `This Madinan period continued for approximately ten years, during which the religion's practical and legal structure was completed alongside its already established theological foundation. Taken together with the thirteen Makkan years already covered in this unit's previous topic, this gives the twenty three years already introduced in this unit's first topic as the total span of his prophethood and messengership, from the first private revelation on Mount Hira to the completion of his mission shortly before his death, examined directly in this unit's final topic.`,
      },
    ],
  },

  'ut5-5': {
    id: 'ut5-5',
    unit: 'unit-10',
    title: 'His Death and the Completion of the Message',
    summary: 'The text\'s closing account of his passing and the religion\'s completion.',
    content: [
      {
        heading: 'A declaration of completeness before his passing',
        body: `Shortly before his death, a specific verse was revealed declaring the religion complete, a moment the tafsir literature connects directly to the final months of his life.`,
        verses: [
          {
            type: 'quran',
            arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا',
            english: 'This day I have completed for you your religion, and completed My favor upon you, and have approved Islam as your religion.',
            source: 'Surah al-Ma\'idah, 5:3',
          },
        ],
      },
      {
        heading: 'What "completion" means in light of this entire course',
        body: `This declaration of completeness connects directly to everything this course has covered across its ten units so far: correct Tawheed in all three of its categories, correct understanding of Shirk in its major, minor, and hidden forms, and now, in this specific unit, correct knowledge of the very Prophet ﷺ through whom this complete religion was delivered. Nothing essential to guidance was left unrevealed by the time of his death, which is precisely why no further scripture or prophet came after him, a point this course's later unit on the Nullifiers of Islam will return to directly when addressing claims that other guidance might supplement or surpass what he delivered.`,
      },
      {
        heading: 'His death, and the verse that confirmed it',
        body: `The text names a specific verse as evidence of his death, addressing him directly alongside the rest of humanity.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّكَ مَيِّتٌ وَإِنَّهُم مَّيِّتُونَ',
            english: 'Indeed, you will die, and indeed, they will die.',
            source: 'Surah az-Zumar, 39:30',
          },
        ],
      },
      {
        heading: 'The moment this verse was actually put to use',
        body: `This verse carries a specific, documented historical significance beyond its general meaning. When the Prophet ﷺ passed away, some companions, Umar ibn al-Khattab among them, initially found themselves unable to accept that he had genuinely died, in the shock and grief of the moment. Abu Bakr, addressing the community directly, is reported to have recited this exact verse, along with a related verse affirming that Muhammad was a messenger like those who came before him, whose own deaths did not invalidate their message. This recitation is credited with settling the community's grief and confusion, reorienting their focus toward the permanence of the message itself rather than the person who had delivered it.

This historical episode matters directly for how this entire course should be understood. The religion this course has spent ten units examining was never meant to rest on the Prophet's ﷺ continued physical presence. It rests on the truth of what he conveyed, exactly the distinction Abu Bakr's recitation of this verse was specifically meant to draw at the precise moment his community most needed to hear it.`,
      },
      {
        heading: 'Closing this unit, and this course\'s treatment of the third principle',
        body: `This unit completes the third and final principle this course introduced back in its seventh unit: knowing one's Prophet ﷺ, now examined through his lineage, his character before revelation, the specific beginning of his prophethood and messengership, the core message he called his people to across thirteen years in Makkah, the establishment of Islam's remaining structure across ten years in Madinah, and finally his death alongside the completion of the message he was sent to deliver. Having now covered all three principles in full depth, knowing one's Lord, knowing one's religion, and knowing one's Prophet, this course's next unit turns to a subject the text addresses directly alongside these three principles: the resurrection after death and the reason messengers were sent to every nation in the first place.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 11 - USUL THALAATHAH: RESURRECTION AND THE SENDING OF
  // MESSENGERS (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Tabari, Qurtubi, Baghawi via quran.com and
  // quran.ksu.edu.sa) before writing. English renderings are an
  // original paraphrase of the meaning, not copied from a single
  // named published translation.
  // -----------------------------------------------------------
  'ut6-1': {
    id: 'ut6-1',
    unit: 'unit-11',
    title: 'Evidence for Life After Death',
    summary: 'The text\'s proofs for resurrection after death.',
    content: [
      {
        heading: 'A direct oath answering direct denial',
        body: `Having covered the Prophet ﷺ's own death in this course's previous unit, this unit turns to a subject his death makes directly relevant: what actually happens after death. The Qur'an addresses those who deny resurrection outright with an unusually direct response, instructing the Prophet ﷺ to answer their denial with a sworn oath.`,
        verses: [
          {
            type: 'quran',
            arabic: 'زَعَمَ الَّذِينَ كَفَرُوا أَن لَّن يُبْعَثُوا ۚ قُلْ بَلَىٰ وَرَبِّي لَتُبْعَثُنَّ ثُمَّ لَتُنَبَّؤُنَّ بِمَا عَمِلْتُمْ ۚ وَذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ',
            english: 'Those who disbelieve claim that they will never be resurrected. Say, yes, by my Lord, you will surely be resurrected, then you will surely be informed of what you did, and that is easy for Allah.',
            source: 'Surah at-Taghabun, 64:7',
          },
        ],
      },
      {
        heading: 'A mocking challenge, and the Qur\'an\'s direct answer',
        body: `The tafsir literature records a specific, vivid historical incident behind a related verse addressing resurrection: a disbelieving opponent of the Prophet ﷺ, holding a decayed, crumbling bone in his hand, is reported to have crushed it and scattered its dust while mockingly asking who could possibly bring such a thing back to life. The Qur'an's response addresses this exact challenge directly.`,
        verses: [
          {
            type: 'quran',
            arabic: 'مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ',
            english: 'He asks, who will give life to the bones once they have decayed? Say, He who created them the first time will give them life, and He has full knowledge of every creation.',
            source: 'Surah Ya-Sin, 36:78-79',
          },
        ],
      },
      {
        heading: 'The logic embedded in this specific answer',
        body: `Notice the precise form of this answer: it does not simply assert resurrection will happen. It points to something the questioner himself was already forced to admit, that these very bones were created once already, from nothing, and reasons directly from that admission: the same One who accomplished the more remarkable feat of original creation is fully capable of the comparatively lesser feat of recreation from existing material.

This is exactly the kind of argument this course's second unit already introduced regarding Rububiyyah: a person cannot reasonably deny an ability while already admitting, even in the same breath, to something requiring an even greater version of that same ability. The mocking opponent, without realizing it, had already conceded the far harder case (original creation) while denying only the easier one (resurrection).`,
      },
      {
        heading: 'A visible, repeated sign in the natural world itself',
        body: `Beyond this specific rational argument, the Qur'an also points to an ordinary, repeated natural phenomenon as a direct, observable sign of the same underlying principle.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً فَإِذَا أَنزَلْنَا عَلَيْهَا الْمَاءَ اهْتَزَّتْ وَرَبَتْ ۚ إِنَّ الَّذِي أَحْيَاهَا لَمُحْيِي الْمَوْتَىٰ',
            english: 'And among His signs is that you see the earth barren and still, but when We send down rain upon it, it stirs and swells with growth. Indeed, the One who gave it life is surely the One who gives life to the dead.',
            source: 'Surah Fussilat, 41:39',
          },
        ],
      },
      {
        heading: 'Why this sign is repeated rather than singular',
        body: `Unlike the original creation of the heavens and earth, witnessed by no living person and requiring the historical, argumentative reasoning already covered in this topic, dry land visibly and repeatedly returning to life after rainfall is something every single person, in nearly every region of the world, has directly and personally observed, often many times across their own lifetime. This is precisely why the Qur'an points to it specifically: resurrection is not being asked to be accepted purely on the strength of abstract argument alone, but is being illustrated through a pattern already directly witnessed and already accepted without hesitation in its smaller, everyday form.`,
      },
      {
        heading: 'Why belief in resurrection anchors everything already covered in this course',
        body: `Belief in resurrection is not a peripheral detail loosely attached to the rest of Tawheed. It is the reason every category and topic this course has covered carries genuine, lasting weight rather than merely shaping a person's present, temporary experience of life. Correct Tawheed, correct rejection of Shirk, and correct knowledge of the Prophet ﷺ matter specifically because they are understood to be assessed and accounted for on a day that genuinely comes, not because they happen to produce pleasant feelings or social benefit in the meantime alone. This is precisely why belief in the Last Day was already named as one of the six pillars of Iman in this course's ninth unit, standing alongside belief in Allah Himself as one of the essential convictions the entire structure of correct practice depends upon.`,
      },
    ],
  },

  'ut6-2': {
    id: 'ut6-2',
    unit: 'unit-11',
    title: 'Why Allah Sent Messengers to Every Nation',
    summary: 'The stated purpose behind every messenger being sent.',
    content: [
      {
        heading: 'A stated reason, not left to speculation',
        body: `Having already established in this course's first unit that every prophet carried the same essential message, this unit now examines the specific reason the Qur'an gives for why messengers were sent at all, rather than leaving humanity to work out matters of belief and worship entirely on its own.`,
        verses: [
          {
            type: 'quran',
            arabic: 'رُّسُلًا مُّبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى اللَّهِ حُجَّةٌ بَعْدَ الرُّسُلِ',
            english: 'Messengers bringing good news and giving warning, so that mankind would have no argument against Allah after the messengers were sent.',
            source: 'Surah an-Nisa, 4:165',
          },
        ],
      },
      {
        heading: 'Removing every possible excuse',
        body: `This verse names a specific legal and moral principle: accountability requires that a person genuinely knew, or had a genuine opportunity to know, what was being asked of them. By sending messengers to deliver this knowledge clearly and directly, Allah removes in advance the excuse a person might otherwise raise on the Day of Judgment, claiming they were never actually informed, never warned, and never given a genuine opportunity to respond correctly. This connects directly to this course's earlier unit establishing that every nation received a messenger carrying the same core instruction: worship Allah and reject every false object of worship. No nation, according to this framework, was left entirely without access to this message at some point in its history.`,
      },
      {
        heading: 'Two functions held together: glad tidings and warning',
        body: `The verse names two connected functions carried by every messenger: bearing good news (tabshir) for those who respond correctly, and giving warning (indhar) to those who do not. Neither function alone would accomplish what accountability actually requires. Good news alone, without warning, might leave people complacent about the real consequences of rejecting the message. Warning alone, without good news, might leave people believing correct response carries no real reward worth pursuing. Together, these two functions give a complete, balanced picture: genuine consequence attached to genuine choice, in both directions.`,
      },
      {
        heading: 'From Nuh to Muhammad ﷺ, a continuous chain',
        body: `This course has already established, across multiple earlier units, that this chain of messengers begins with Nuh, described in the Qur'an as among the earliest prophets sent to correct a community that had fallen into idol worship, and concludes with Muhammad ﷺ, already examined in detail in this course's previous unit as the final messenger through whom Allah completed His revealed guidance entirely. Every messenger between these two endpoints carried forward the same essential purpose already named directly in this topic: delivering the message clearly enough that no genuine excuse could remain for rejecting it.`,
      },
      {
        heading: 'Why this matters for how the message is received today',
        body: `This principle carries a direct implication for anyone encountering this course's own content: having now received a clear, evidence based presentation of Tawheed, its categories, its opposite in Shirk, and the Prophet ﷺ through whom this complete message was delivered, the same principle named in this unit's opening verse applies personally and directly. The purpose of messengers being sent to remove every excuse extends, in a very real sense, to every occasion genuine knowledge of this message reaches a person, including through careful study of a course exactly like this one.`,
      },
    ],
  },

  'ut6-3': {
    id: 'ut6-3',
    unit: 'unit-11',
    title: 'The Response of Nations to Their Messengers',
    summary: 'How different nations received the same core message.',
    content: [
      {
        heading: 'A consistent pattern already traced across this course',
        body: `This course has already documented, across several of its earlier units, a remarkably consistent historical pattern: nation after nation, receiving essentially the same message of exclusive worship of Allah, responded with resistance rather than ready acceptance. This topic draws together what this pattern actually reveals about how messengers were received, and why.`,
      },
      {
        heading: 'Acceptance of Rububiyyah, resistance to Uluhiyyah',
        body: `As this course's second and third units already established in detail, the specific point of resistance was rarely a denial that Allah created the universe. It was resistance to the specific, costly demand that worship be redirected entirely away from inherited idols and toward Allah alone. This pattern repeats across the accounts of Nuh's people, the people addressed by Ibrahim, and the Makkan pagans the Prophet ﷺ himself was sent to, already examined directly in this course's tenth unit.`,
      },
      {
        heading: 'Real costs paid for accepting the message',
        body: `Those who did respond correctly to their messengers frequently paid genuine, severe costs for doing so, already documented in this course's earlier units: Ibrahim thrown into a fire by his own people, early Muslims tortured and persecuted in Makkah, some driven to temporary exile in Abyssinia before the larger migration to Madinah covered in this course's previous unit. This pattern shows that correctly responding to a messenger's call was rarely, across history, the socially comfortable or costless choice. It consistently demanded real sacrifice, precisely because the message itself demanded abandoning deeply entrenched inherited custom.`,
      },
      {
        heading: 'Two groups, a division already established in this course',
        body: `Regardless of the specific nation or era, the response to every messenger's call ultimately produced the same basic division already covered throughout this course: those who accepted correct Tawheed and directed worship to Allah alone, and those who rejected this call, whether through open denial or through a Shirk-tinged partial acceptance already examined in detail in this course's fifth unit. This division carries directly into the consequence already covered in that same unit: genuine reward for the first group, and the severe consequence already described for the second, precisely the division the resurrection covered in this unit's first topic ultimately makes final and permanent.`,
      },
      {
        heading: 'What this consistent pattern confirms about the message itself',
        body: `The consistency of this pattern across radically different eras, languages, and cultures is itself significant. If the demand for exclusive worship of Allah were merely a passing cultural preference of one particular time or place, resistance to it would likely have varied considerably depending on local custom. Instead, the same basic resistance to the same basic demand appears repeatedly across every documented account this course has examined, suggesting the difficulty lies not in any particular culture's specific customs, but in a more universal human tendency to resist relinquishing inherited practice, however clearly and repeatedly it is shown to be mistaken.`,
      },
    ],
  },

  'ut6-4': {
    id: 'ut6-4',
    unit: 'unit-11',
    title: 'Belief in the Unseen as a Foundation of Faith',
    summary: 'Why accepting matters beyond direct observation is central to faith.',
    content: [
      {
        heading: 'A quality named at the very opening of the Qur\'an\'s second surah',
        body: `Immediately following the Fatihah, the Qur'an opens its next surah by naming a specific quality that defines those who genuinely benefit from its guidance.`,
        verses: [
          {
            type: 'quran',
            arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ',
            english: 'This is the Book about which there is no doubt, a guidance for those mindful of Allah, who believe in the unseen.',
            source: 'Surah al-Baqarah, 2:2-3',
          },
        ],
      },
      {
        heading: 'What "the unseen" actually covers',
        body: `Belief in the unseen (al-ghayb) covers exactly the range of matters this course's later units have examined directly: Allah Himself, His angels, resurrection and the Last Day already covered in this unit's first topic, and the specific decree already examined in this course's second unit. None of these matters can be directly observed, measured, or empirically verified through ordinary human senses in the way a visible object or a repeatable physical experiment can be. Genuine faith, as this verse frames it, specifically requires accepting these matters on the strength of Allah's own revealed testimony and the evidence already surveyed throughout this course, rather than requiring direct sensory confirmation before acceptance.`,
      },
      {
        heading: 'Why this is presented as a strength, not a weakness',
        body: `A modern instinct might treat belief in anything beyond direct empirical verification as inherently less credible or less rigorous than belief grounded purely in observable evidence. The Qur'an's own framing runs in the opposite direction: belief in the unseen, held specifically by those already described as mindful of Allah, is presented as the very quality that makes genuine guidance possible in the first place, not a concession made despite a lack of evidence. As this unit's first topic already demonstrated regarding resurrection specifically, genuine evidence, both rational argument and observable natural pattern, does exist and has already been surveyed throughout this unit. Belief in the unseen does not mean believing without any evidence at all. It means accepting matters that cannot be directly, physically observed, on the strength of evidence that remains genuinely available in other, equally legitimate forms.`,
      },
      {
        heading: 'A distinction worth holding carefully',
        body: `This is not a claim that every unverifiable assertion deserves equal acceptance, nor that evidence and argument become irrelevant once a matter is labeled unseen. The evidence already surveyed throughout this course, rational argument, observable natural pattern, historical consistency, and direct textual revelation preserved and transmitted with genuine historical reliability, all remain the actual grounds this course has consistently appealed to. What belief in the unseen specifically asks for is a willingness to accept genuinely well evidenced conclusions about matters that happen not to be directly observable by the senses, precisely the category resurrection, angels, and decree all fall into.`,
      },
      {
        heading: 'Closing this unit and completing the picture of accountability',
        body: `This unit closes a picture this course has built steadily across its recent units: messengers were sent to remove every excuse, nations responded across history with a consistent pattern of resistance despite this clear message, resurrection ensures this response is genuinely and finally accounted for, and belief in exactly this kind of unseen reality is what genuine faith, as the Qur'an itself defines it, actually requires. Having now covered this complete structure of accountability, this course's next unit turns to a concept already touched upon repeatedly throughout this course but never yet examined directly in its own right: Taghut, the false objects of worship every messenger's call specifically instructed their people to reject.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 12 - USUL THALAATHAH: TAGHUT AND DISBELIEF IN IT (full
  // content, expanded)
  //
  // The definition and five categories of Taghut examined in this
  // unit are quoted by Ibn Abdul-Wahhab from an earlier scholar,
  // Ibn al-Qayyim, and are presented here in prose with that
  // attribution preserved, not placed in the highlighted Qur'an or
  // Hadith blocks reserved for those two sources specifically. The
  // classical conditions of the testimony of faith discussed in
  // this unit's final topic represent standard scholarly
  // elaboration commonly taught alongside this primer, presented
  // here as such rather than as the primer's own original wording.
  // Qur'anic Arabic checked against primary tafsir sources before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // -----------------------------------------------------------
  'ut7-1': {
    id: 'ut7-1',
    unit: 'unit-12',
    title: 'Definition of Taghut',
    summary: 'What the text identifies as anything worshipped besides Allah that is pleased with it.',
    content: [
      {
        heading: 'A term this course has used throughout, now defined directly',
        body: `Taghut has already appeared repeatedly across this course, most directly in this course's third unit through the verse instructing every nation to worship Allah and avoid Taghut. Having covered messengers, resurrection, and accountability in this course's previous unit, Usul Thalaathah now turns to define this term directly and precisely, rather than leaving it as a general reference to "false gods" without further specification.`,
      },
      {
        heading: 'The definition the text preserves from an earlier scholar',
        body: `Ibn Abdul-Wahhab incorporates into his text a definition given earlier by Ibn al-Qayyim, one of the classical scholars already noted in this course's sixth unit as a significant influence on his own thinking: "Taghut is anything by which a servant exceeds his proper limit, whether as an object of worship, one who is followed, or one who is obeyed." This definition is worth reading slowly, since its breadth is deliberate and considerably wider than a narrower definition limited only to carved idols.`,
      },
      {
        heading: 'Three distinct ways a limit can be exceeded',
        body: `Notice that this definition names three separate categories, not one: an object of worship (ma'bud), one who is followed (matbu'), and one who is obeyed (muta'). A carved idol clearly fits the first category. But the definition's breadth means Taghut is not limited to physical objects of worship at all. A person followed with the same uncritical devotion normally reserved for Allah's revealed guidance, or an authority obeyed in matters clearly forbidden by Allah, can equally fall under this same term, depending on the specific nature and degree of that following or obedience.`,
      },
      {
        heading: 'The key phrase: "exceeds his proper limit"',
        body: `The definition's operative phrase is not simply following or obeying, since both following legitimate guidance and obeying legitimate authority are commanded throughout the Qur'an and Sunnah, already covered in this course's earlier units on correct Adab toward scholars, elders, and rightful authority. Taghut specifically describes exceeding the proper limit of these otherwise legitimate categories, following or obeying to the point of granting a created being the specific kind of complete deference that belongs to Allah alone, exactly the same distinction already drawn throughout this course's third unit between ordinary human interaction and worship-level devotion reserved exclusively for Allah.`,
      },
      {
        heading: 'Why this broad definition matters for this unit\'s coming topics',
        body: `This deliberately broad definition sets up the specific categories examined directly in this unit's next topic. Rather than leaving Taghut as an abstract, easily dismissed concept, the primer proceeds to name five specific, concrete manifestations this general definition takes in practice, precisely so that a student can recognize this concept in its actual, lived forms rather than only in its dictionary definition.`,
      },
    ],
  },

  'ut7-2': {
    id: 'ut7-2',
    unit: 'unit-12',
    title: 'The Major Categories of Taghut',
    summary: 'The main categories the text and scholars identify under this term.',
    content: [
      {
        heading: 'Five specific heads, named directly',
        body: `Following the general definition already covered in this unit's previous topic, the text continues with the same scholarly source's further explanation: "Taghuts are many, but their chiefs are five: Iblis, may Allah curse him; whoever is worshipped and is pleased with it; whoever calls people to worship himself; whoever claims something of the knowledge of the unseen; and whoever judges by other than what Allah has revealed."`,
      },
      {
        heading: 'The first head: Iblis',
        body: `Iblis (Shaytan) is named first and treated as the foundational Taghut behind every other manifestation this list names, since it is Shaytan's specific whispering and temptation that historically leads people toward every other form of misdirected worship, following, and obedience this list goes on to describe. Placing Iblis at the head of this list reflects a consistent theme in Islamic teaching: behind every specific historical instance of Shirk sits the same underlying source of temptation, already introduced in this course's earlier discussion of Shirk's various forms.`,
      },
      {
        heading: 'The second head: one worshipped who is pleased with it',
        body: `This category specifically requires the crucial qualifier already embedded in its wording: pleased with it. Prophets such as Isa, wrongly worshipped by later followers who distorted his actual teaching, are not themselves Taghut in this specific sense, since they neither sought nor approved of this worship directed toward them. This qualifier matters directly: the Taghut classification in this specific category depends on the willing consent of the one being worshipped, not merely on the fact that worship happened to be directed toward them by others without their approval or knowledge.`,
      },
      {
        heading: 'The third head: whoever calls people to worship himself',
        body: `Unlike the second category, which requires only passive approval of worship already being offered, this category describes someone actively initiating and promoting their own worship, historical examples including the Pharaoh who claimed to be his people's highest lord, already referenced in this course's earlier discussion of prophets sent to correct their nations, and various other historical and contemporary figures who have actively cultivated worship or worship-adjacent devotion directed toward themselves specifically.`,
      },
      {
        heading: 'The fourth head: whoever claims knowledge of the unseen',
        body: `This category connects directly to this course's previous unit on belief in the unseen (al-ghayb) as a matter belonging to Allah's knowledge alone. Fortune tellers, astrologers claiming to read the future through celestial patterns, and anyone else claiming genuine access to knowledge Allah has reserved for Himself fall under this specific category, since this claim itself represents a person exceeding their proper limit by asserting an ability that belongs exclusively to Allah's own unique knowledge.`,
      },
      {
        heading: 'The fifth head: whoever judges by other than what Allah has revealed',
        body: `This final category concerns legislative and judicial authority specifically: establishing or enforcing laws that directly contradict what Allah has clearly revealed, particularly where this is done with the deliberate intention of replacing divine guidance entirely rather than working within its framework, or with the belief that human judgment in such matters is inherently superior to what Allah has already legislated. This category connects to Rububiyyah as covered in this course's second unit, since legislating with ultimate authority is itself an aspect of Lordship this category recognizes belongs to Allah alone.`,
      },
      {
        heading: 'Why naming these five specifically protects against a false sense of safety',
        body: `A person could easily assume Taghut belongs entirely to ancient history, carved idols long since abandoned by any modern, educated society. This specific, concrete list of five categories closes off that false sense of safety directly, showing that Taghut takes forms considerably broader and more contemporary than physical idol worship alone, several of which remain genuinely present in various forms across the modern world, precisely the same corrective this course's earlier unit on Shirk already provided regarding its major, minor, and hidden forms.`,
      },
    ],
  },

  'ut7-3': {
    id: 'ut7-3',
    unit: 'unit-12',
    title: 'Why Disbelief in Taghut Precedes Faith in Allah',
    summary: 'The text\'s emphasis on rejecting false objects of worship first.',
    content: [
      {
        heading: 'The specific verse cited as evidence',
        body: `Having named Taghut's definition and its five specific categories, the text grounds the necessity of rejecting it in a specific verse addressing the relationship between disbelief in Taghut and belief in Allah directly.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَا إِكْرَاهَ فِي الدِّينِ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ فَمَن يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِن بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انفِصَامَ لَهَا',
            english: 'There is no compulsion in religion. The right path has become distinct from error. So whoever disbelieves in false objects of worship and believes in Allah has grasped the most trustworthy handhold, which will never break.',
            source: 'Surah al-Baqarah, 2:256',
          },
        ],
      },
      {
        heading: 'The precise order named in this verse',
        body: `Notice the exact sequence this verse names: disbelief in Taghut comes first, and belief in Allah follows. This is not simply a matter of writing convenience or grammatical convention. The text explicitly states that this specific sequence is the actual meaning contained within the testimony of faith itself, "la ilaha illallah," a phrase already encountered throughout this course but not yet examined at this specific level of structural detail.`,
      },
      {
        heading: 'Two halves of a single testimony',
        body: `"La ilaha illallah" divides naturally into two connected halves. The first half, "la ilaha" (there is no god), is a negation, clearing away every false claim to worship, exactly the disbelief in Taghut this unit's opening verse names directly. The second half, "illallah" (except Allah), is an affirmation, establishing Allah as the sole legitimate object of worship remaining once every false claim has been cleared away. The negation genuinely must come first, both grammatically within the phrase itself and logically in what it accomplishes: a person cannot meaningfully affirm Allah's exclusive right to worship while simultaneously leaving other claims to that same worship still standing unaddressed.`,
      },
      {
        heading: 'A practical illustration of why the order matters',
        body: `Consider clearing space in a room already filled with furniture before attempting to place a single, large piece of new furniture correctly in its proper position. Attempting to place the new piece first, around and between the existing clutter, produces an awkward, incomplete arrangement at best. Clearing the room first, then placing the new piece in the now empty space, produces the arrangement actually intended. Disbelief in Taghut functions as this necessary clearing, removing every false claim to worship before Allah's exclusive right to that same worship can be genuinely and completely established in the space those false claims previously occupied.`,
      },
      {
        heading: 'Why this connects directly to genuine security, not merely correct doctrine',
        body: `The verse's own closing image, grasping the most trustworthy handhold that will never break, deserves attention in its own right. This is not simply a poetic flourish attached to an otherwise dry theological point. It describes genuine security and stability as the actual, felt outcome of correctly ordering disbelief in Taghut before belief in Allah, echoing this course's much earlier discussion of misplaced trust and reliance in its third unit. A person who has not genuinely cleared away competing claims to worship, whatever those claims specifically are, holds onto something considerably less secure than this trustworthy handhold, however sincerely they may otherwise profess belief in Allah alongside those still-standing competing claims.`,
      },
    ],
  },

  'ut7-4': {
    id: 'ut7-4',
    unit: 'unit-12',
    title: 'The Testimony of Faith and Its Conditions',
    summary: 'What "la ilaha illallah" actually requires to be valid.',
    content: [
      {
        heading: 'A hadith placing this testimony at the very center',
        body: `A hadith frequently cited alongside this closing section of the primer positions the testimony of faith, and the practice built upon it, within a specific, memorable image.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ، وَذِرْوَةُ سَنَامِهِ الْجِهَادُ فِي سَبِيلِ اللَّهِ',
            english: 'The head of the matter is Islam, its pillar is prayer, and the peak of its hump is striving in the path of Allah.',
            source: 'Jami\' at-Tirmidhi, from the hadith of Mu\'adh ibn Jabal',
          },
        ],
      },
      {
        heading: 'What this image communicates',
        body: `The image drawn here, of a camel's head, central supporting pillar, and raised hump, gives a structured picture of Islam's relative priorities: Islam itself, resting on the testimony of faith already examined throughout this unit, is the head directing everything else, prayer is the central pillar without which the entire structure would collapse, and striving in Allah's path represents the elevated, visible peak built upon this foundation, not something separate from or prior to it. This ordering reflects a pattern already established throughout this course: correct testimony and foundational practice come first, with everything else, however important, built upon that already secured foundation.`,
      },
      {
        heading: 'The testimony as more than a phrase spoken aloud',
        body: `Scholarly tradition surrounding this testimony, developed and taught extensively alongside primers exactly like this one, identifies several conditions that must genuinely accompany the spoken words themselves for the testimony to carry its actual, intended weight: genuine knowledge of what the phrase actually means, rather than reciting unfamiliar syllables without comprehension; certainty free of doubt about its content; sincere acceptance rather than reluctant, merely verbal compliance; genuine submission to what it requires in practice; truthfulness in stating it, matched by the heart's actual conviction; sincerity of intention, directing the testimony purely toward Allah rather than toward social convenience or family expectation; and love for what the testimony affirms, rather than indifferent or resentful compliance.`,
      },
      {
        heading: 'Why these conditions matter, given everything this course has covered',
        body: `These conditions are not an arbitrary checklist added onto an otherwise simple phrase. Each one addresses a specific way a person could technically speak these exact words while still falling short of what this entire course has examined: knowledge addresses the theme covered in this course's sixth unit on knowledge preceding action; certainty and sincerity address the theme of correctly directed intention covered throughout this course's earlier units; acceptance and submission address the theme of acting upon knowledge already covered directly; and love connects to this course's third unit on the inward postures, fear, hope, and love, that correct Uluhiyyah requires. A testimony spoken without these conditions genuinely present is, in a real sense, the outward form already warned against throughout this course, without the substance this entire course has been built to establish.`,
      },
      {
        heading: 'Closing this unit and this course\'s core doctrinal content',
        body: `This unit closes the primer's core theological content, examined sequentially across this course's units six through twelve: the Four Matters, the Three Principles, the catalogue of worship, Islam's three levels, the Prophet's ﷺ life, resurrection and messengers, and now Taghut and the testimony that rejects it while affirming Allah alone. This course's next unit turns to a closely related subject traditionally studied alongside this same primer: the Nullifiers of Islam, specific matters that, if genuinely present, undo the very testimony this unit has just examined in careful detail.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 13 - NULLIFIERS OF ISLAM (full content, expanded)
  //
  // A note on this unit specifically: this subject (takfir, judging
  // a person to have left Islam) has a documented history of
  // serious misuse, including by movements that have used it to
  // justify violence against other Muslims. This unit presents the
  // treatise's actual content accurately, while foregrounding, not
  // burying, the scholarly safeguards that govern how (and whether)
  // any of this is ever applied to a real, named individual. This
  // framing is not an editorial add-on; it reflects how mainstream
  // Sunni scholarship has always required this subject to be
  // handled. Arabic texts checked against primary sources for
  // Nawaqid al-Islam and against the relevant hadith collections
  // before writing. English renderings are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // -----------------------------------------------------------
  'naw-1': {
    id: 'naw-1',
    unit: 'unit-13',
    title: 'Introduction to the Ten Nullifiers',
    summary: 'An overview of the matters that can remove a person from Islam.',
    content: [
      {
        heading: 'A short treatise studied alongside Usul Thalaathah',
        body: `Nawaqid al-Islam (The Nullifiers of Islam) is a separate, very short treatise by the same author already studied throughout this course's recent units, traditionally taught immediately after Usul Thalaathah since it addresses a closely related question from the opposite direction: rather than describing what correct Tawheed requires, it names ten specific matters that, if genuinely present in a person's belief, undo the testimony of faith already examined in this course's twelfth unit.`,
      },
      {
        heading: 'A subject requiring unusual care before proceeding further',
        body: `Before examining the ten nullifiers themselves, this topic must address something more important than any single item on that list: how this kind of material is meant to be used, and how it has, at times in history, been badly misused. This is not a checklist for judging other people. Every mainstream Sunni scholar who has taught this treatise has taught it alongside a specific, serious warning about declaring any actual, named individual to have left Islam, a warning this unit places first, not last, precisely because burying it at the end would risk the exact misuse it exists to prevent.`,
      },
      {
        heading: 'A direct warning from the Prophet ﷺ himself about this exact danger',
        body: `The Prophet ﷺ addressed the specific danger of one Muslim carelessly calling another a disbeliever directly and starkly.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَيُّمَا امْرِئٍ قَالَ لِأَخِيهِ يَا كَافِرُ فَقَدْ بَاءَ بِهَا أَحَدُهُمَا، إِنْ كَانَ كَمَا قَالَ وَإِلَّا رَجَعَتْ عَلَيْهِ',
            english: '"Whenever a man says to his brother, O disbeliever, it settles upon one of the two of them. If the accusation was true, it applies to the one accused; if not, it returns upon the one who said it."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'A general ruling and a judgment about a specific person are not the same thing',
        body: `Islamic scholarship draws a firm, load-bearing distinction this entire unit depends upon: describing an action or belief as disbelief in general (takfir al-mutlaq) is a different matter entirely from declaring a specific, named individual to actually be a disbeliever (takfir al-mu'ayyan). The ten nullifiers examined in this unit describe the first kind of statement, matters that, in principle and in the abstract, are recognized as nullifying Islam. Whether any particular person has actually fallen into one of them, in a way that removes them from Islam specifically and personally, is an entirely separate question, one that qualified scholars insist depends on additional conditions being genuinely met.`,
      },
      {
        heading: 'The conditions that must be met before judging any actual individual',
        body: `Scholars specify at least two major barriers (mawani') that must be absent before a specific person can be judged to have actually left Islam through one of these matters: genuine ignorance, meaning the person did not know, and had no reasonable way of knowing, that what they said or did was disbelief, particularly where this remains a genuinely obscure matter in their environment; and genuine error, meaning the person did not actually intend what their words or actions technically implied. A hadith illustrates this second barrier vividly: a man overwhelmed with sudden, extreme joy at unexpectedly recovering his lost camel and provisions in the desert misspoke in his excitement, saying words that technically constituted a severe theological error, yet was not held accountable for it, since the mistake was clearly a slip of overwhelming emotion rather than genuine intended belief. Beyond these two barriers, scholars also require that clear proof of the matter has genuinely been established against the specific person (iqamat al-hujjah) before judgment is passed, and that the judgment itself is made by those with genuine scholarly qualification to make it, not by any individual acting on personal certainty alone.`,
      },
      {
        heading: 'How this unit should actually be used',
        body: `With this framing firmly in place, this unit's remaining topics examine the ten nullifiers themselves, exactly as the treatise presents them, since this content carries genuine value: it sharpens a person's own understanding of what Tawheed requires and helps a sincere Muslim examine their own beliefs and conduct honestly. The correct use of this material is self examination, precisely the same posture this course has encouraged throughout its earlier units on Shirk and Taghut, not the construction of a checklist for judging the standing of other people, a task this unit has already shown belongs to qualified scholarship operating under strict, deliberately demanding conditions, not to casual personal judgment.`,
      },
    ],
  },

  'naw-2': {
    id: 'naw-2',
    unit: 'unit-13',
    title: 'Shirk in Worship and Placing Intermediaries Between Allah and Creation',
    summary: 'The first and most direct nullifiers.',
    content: [
      {
        heading: 'The first nullifier: Shirk in worshipping Allah',
        body: `The treatise opens with the matter this course has already examined in the greatest depth: "Shirk in the worship of Allah alone, without partner," grounded in the same verse already covered directly in this course's fifth unit regarding Shirk's unique severity among all sins. The author specifically names sacrificing to other than Allah as an example, whether to jinn or at the domes and shrines sometimes built over graves, connecting this first nullifier directly to the specific act of worship (dhabh) already examined in this course's third and eighth units.`,
      },
      {
        heading: 'The second nullifier: placing intermediaries between oneself and Allah',
        body: `The treatise's second matter concerns "whoever places intermediaries between himself and Allah, calling upon them and asking them for intercession," described as disbelief by scholarly consensus (ijma'). This connects directly to the intermediary justification already examined in this course's fifth unit, where the Makkan pagans defended their idol worship by claiming it merely brought them closer to Allah. This nullifier confirms that this exact justification, however sincerely offered, does not soften the classification of what is actually being done.`,
      },
      {
        heading: 'Why these two matters open the list',
        body: `Placing these two matters first is not incidental ordering. They describe the most direct possible violation of Uluhiyyah already examined at length across this course's third and eighth units, misdirecting the specific acts of worship, dua and dhabh among them, that belong to Allah exclusively. Beginning the list here signals that everything else this treatise goes on to name should be understood as extending outward from this same central concern, not as a series of unrelated, independent matters.`,
      },
      {
        heading: 'Applying the safeguards already established in this unit\'s first topic',
        body: `Even for a matter as serious and clearly stated as these first two nullifiers, the safeguards already covered in this unit's opening topic remain fully in force. A person raised in an environment where visiting graves for blessings or intercession is deeply normalized, having never genuinely encountered clear teaching correcting this practice, is judged differently by qualified scholars than someone who has received clear knowledge and continues regardless. This is not a loophole weakening the seriousness of the matter itself. It is the same careful, conditions-based approach this entire unit insists must accompany any of the ten matters it examines.`,
      },
      {
        heading: 'The constructive purpose these first two nullifiers actually serve',
        body: `Read correctly, these opening two matters function as a direct invitation to honest self examination regarding one's own practice: does any habit, however culturally familiar or long-standing, involve calling upon, or seeking intercession from, anyone other than Allah directly. This question, asked honestly of oneself, is precisely what this material is meant to prompt, echoing this course's earlier emphasis on recognizing Shirk's major, minor, and hidden forms in one's own life rather than treating the subject as relevant only to distant historical idol worshippers or to other people entirely.`,
      },
    ],
  },

  'naw-3': {
    id: 'naw-3',
    unit: 'unit-13',
    title: 'Failing to Declare Clear Disbelief as Disbelief, or Doubting It',
    summary: 'Why refusing to recognize open disbelief is itself serious.',
    content: [
      {
        heading: 'The third nullifier, stated directly',
        body: `The treatise's third matter reads: "whoever does not declare the polytheists disbelievers, or doubts their disbelief, or considers their way correct, has disbelieved, by consensus." Of every matter examined in this unit, this one most urgently requires the careful framing already established in this unit's opening topic, since it is precisely the kind of statement most easily distorted into a license for judging other people carelessly.`,
      },
      {
        heading: 'What this matter is actually addressing',
        body: `This nullifier addresses a specific intellectual and theological failure: refusing to acknowledge, as a general category, that clear, unmistakable, and already well-established forms of disbelief genuinely constitute disbelief, or treating such clearly established disbelief as though it were an equally valid alternative path. It does not address disagreement over genuinely disputed religious questions, differences between sincere Muslims on matters of jurisprudence already covered in this course's ninth unit on legitimate scholarly disagreement, or hesitation about a specific individual's actual standing where real ambiguity or the barriers already covered in this unit's first topic genuinely apply.`,
      },
      {
        heading: 'The difference between a category and a specific person, restated here directly',
        body: `The distinction already introduced in this unit's opening topic bears direct, specific weight on this third nullifier more than any other. Affirming, as a general theological matter, that explicit, knowing worship of idols alongside full awareness of Islam's message constitutes disbelief is a statement about a category of belief and action. Declaring that a specific person standing in front of you has definitely, personally fallen into this category, with all the serious consequences that judgment carries, requires everything already covered in this unit's opening topic: established proof, absence of ignorance or error as genuine barriers, and the qualification of genuine scholarship to make that specific determination.`,
      },
      {
        heading: 'Why doubt about already well-established matters is treated seriously',
        body: `The second and third clauses of this nullifier, doubting the disbelief of the already clearly disbelieving, or considering their way correct, address a different failure than the first: not confusion about ambiguous or disputed matters, but a wavering or validating stance toward what has already been clearly and unmistakably established. This reflects a theme already covered throughout this course regarding correct Tawheed: genuine conviction is expected to hold firm once a matter has been clearly established through sound evidence, rather than treating settled matters as perpetually open for reconsideration simply because reconsidering them might feel more socially comfortable.`,
      },
      {
        heading: 'Holding both truths together, without collapsing either into the other',
        body: `This topic asks for something genuinely demanding: taking this nullifier seriously as a real matter of correct belief, while refusing to let it become an excuse for the careless, individual-targeting misuse this unit's opening topic warned against directly, including through the Prophet's ﷺ own words about the danger returning upon whoever levels it wrongly. Both things are true at once. Clear, established disbelief genuinely is disbelief, and calling it anything else is a real failure this nullifier correctly identifies. And determining that a specific, actual person has personally and knowingly fallen into this category is a serious judgment requiring exactly the safeguards this unit has placed first, not last, in its treatment of this entire subject.`,
      },
    ],
  },

  'naw-4': {
    id: 'naw-4',
    unit: 'unit-13',
    title: 'Believing Other Guidance Is More Complete Than the Prophet\'s ﷺ',
    summary: 'The nullifier concerning preferring another way over his guidance.',
    content: [
      {
        heading: 'The fourth nullifier, stated directly',
        body: `The treatise's fourth matter concerns "whoever believes that guidance other than the Prophet's ﷺ is more complete than his guidance, or that another's judgment is better than his judgment, such as those who prefer the judgment of Taghut over his judgment." This connects directly to the fifth category of Taghut already examined in this course's twelfth unit: judging by other than what Allah has revealed.`,
      },
      {
        heading: 'What this specifically targets',
        body: `This nullifier does not describe ordinary disagreement over how a specific ruling should be correctly understood or applied, a matter already addressed with real nuance in this course's ninth unit on legitimate scholarly disagreement. It describes a specific belief: that the Prophet's ﷺ guidance, considered as a complete system, has been genuinely surpassed by some alternative source of guidance or judgment, treated as superior in principle rather than merely differently applied in a specific disputed case.`,
      },
      {
        heading: 'The ninth nullifier, closely related',
        body: `A closely related matter, the ninth nullifier, concerns "whoever believes that some people are permitted to step outside the Sharia of Muhammad ﷺ," a belief that a specific category of person, whether due to claimed spiritual attainment or any other reason, is exempt from the guidance binding on everyone else. This connects directly back to this unit's first topic on the universal scope of his message, already examined in this course's tenth unit as extending to all of humanity without exception or special carve-out for any particular group.`,
      },
      {
        heading: 'Why belief, specifically, is the operative concern here',
        body: `Both of these nullifiers concern genuine belief, not merely outward failure to implement a specific ruling in a specific circumstance. A society or individual falling short of fully implementing every specific detail of Islamic guidance, for whatever mixture of reasons, is a different matter from actually believing that some other complete system of guidance is genuinely superior in principle. This distinction matters directly for how these two nullifiers should be applied to any specific real situation, exactly the same caution already established throughout this unit regarding the difference between a general category and a specific, individual judgment.`,
      },
      {
        heading: 'Connecting back to the completeness already established in this course',
        body: `This nullifier gains its full weight specifically because of what this course's tenth unit already established: the religion was declared complete before the Prophet's ﷺ death, with nothing essential left unrevealed. Believing some other guidance surpasses this already completed message is not a neutral intellectual position within an ongoing, open-ended conversation. It directly contradicts the specific, evidenced claim of completeness this course has already examined in detail, which is precisely why this belief is treated with this level of seriousness rather than as one reasonable option among several equally valid alternatives.`,
      },
    ],
  },

  'naw-5': {
    id: 'naw-5',
    unit: 'unit-13',
    title: 'Mockery of the Religion, Magic, and Supporting Disbelievers Against Muslims',
    summary: 'Several distinct nullifiers grouped together in the text.',
    content: [
      {
        heading: 'The fifth nullifier: religious hatred of what the Messenger ﷺ brought',
        body: `The treatise's fifth matter concerns "whoever hates something the Messenger ﷺ brought, even if he still acts according to it." Scholars explaining this nullifier are careful to specify precisely what kind of hatred is meant: a religious, principled rejection that views a specific teaching as inherently wrong or distasteful in itself, not the ordinary, natural human reluctance a person might feel toward a difficult obligation, such as finding fasting genuinely hard on a long summer day while still fully affirming its rightness and continuing to observe it sincerely. The distinction lies in whether the difficulty is experienced as a personal struggle within an affirmed good, or as genuine rejection of the good itself.`,
      },
      {
        heading: 'The sixth nullifier: mockery of the religion',
        body: `The treatise's sixth matter concerns "whoever mocks something of the Messenger's ﷺ religion, or Allah's reward, or His punishment." This nullifier is grounded in a Qur'anic account of specific companions of the Prophet ﷺ who mocked the Qur'an reciters accompanying him during a difficult expedition, prompting a direct revelation confirming that their claim to have merely been joking did not soften the seriousness of what they had actually done, since genuine mockery of matters connected to Allah and His religion carries weight regardless of the tone in which it was delivered.`,
      },
      {
        heading: 'The seventh nullifier: magic',
        body: `The treatise's seventh matter concerns magic (sihr), specifically the kind of sorcery scholars have long distinguished from mere illusion or trickery, involving genuine reliance on and cooperation with unseen forces to cause real harm, such as creating discord between a husband and wife, an example the Qur'an itself names directly. Both practicing this kind of magic and, according to the treatise, being genuinely pleased with it being practiced, fall under this nullifier, since it involves a form of reliance on power outside Allah's sanctioned means, directly connected to the misplaced reliance already examined throughout this course's earlier units on Uluhiyyah.`,
      },
      {
        heading: 'The eighth nullifier: supporting disbelievers against Muslims',
        body: `The treatise's eighth matter concerns "supporting and assisting disbelievers against Muslims," grounded directly in a specific Qur'anic warning.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَن يَتَوَلَّهُم مِّنكُمْ فَإِنَّهُ مِنْهُمْ',
            english: 'And whoever among you allies with them, then indeed, he is one of them.',
            source: 'Surah al-Ma\'idah, 5:51',
          },
        ],
      },
      {
        heading: 'A necessary distinction within this eighth nullifier',
        body: `Scholars addressing this specific nullifier draw a careful distinction between genuine, active alliance against Muslims specifically because of their faith, actively assisting harm against them out of hostility to Islam itself, and the ordinary, permissible interactions already covered in this course's unit on Adab toward non-Muslims: fair business dealings, neighborly kindness, and reasonable civil cooperation in matters unrelated to active harm against fellow Muslims. This nullifier addresses the former specifically, not the latter, a distinction this unit's opening topic's safeguards apply to directly when considering whether any specific real situation actually meets this nullifier's demanding threshold.`,
      },
    ],
  },

  'naw-6': {
    id: 'naw-6',
    unit: 'unit-13',
    title: 'The Weight of These Matters and the Exemption for Genuine Compulsion',
    summary: 'How seriously these are treated, and the exception scholars make for compulsion.',
    content: [
      {
        heading: 'The tenth and final nullifier',
        body: `The treatise's tenth and closing matter concerns "turning away from the religion of Allah entirely, neither learning it nor acting upon it." Unlike the previous nine matters, each addressing a specific belief or action, this final matter describes a complete, total disengagement: a person who makes no genuine effort to learn what Islam actually requires and makes no genuine effort to practice any of it, treating the entire matter with total indifference rather than active belief or active rejection.`,
      },
      {
        heading: 'Why total indifference is treated as seriously as active rejection',
        body: `This tenth matter reflects a principle already covered throughout this course, particularly in its sixth unit on knowledge preceding action and its seventh unit's account of the eternal weight resting on these very same three principles: a person cannot remain neutral regarding matters this consequential. Someone who never genuinely engages with what correct belief requires, neither affirming it through sincere learning and practice nor actively denying it, has not found a safe, comfortable middle position. Complete disengagement from a matter this course has shown carries genuinely eternal weight is itself treated as a serious failure, not a harmless default state.`,
      },
      {
        heading: 'The author\'s own closing clarification',
        body: `Ibn Abdul-Wahhab closes this treatise with a clarification governing all ten matters together, one final safeguard this unit has been building toward throughout.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ',
            english: 'Except one who is compelled while his heart remains at peace with faith.',
            source: 'Surah an-Nahl, 16:106',
          },
        ],
      },
      {
        heading: 'What this final exception establishes',
        body: `The author states directly that there is no difference across all ten nullifiers between someone who commits them jokingly, seriously, or out of ordinary fear, except specifically for someone under genuine compulsion, meaning real, severe coercion where the heart itself remains inwardly firm in true belief despite outward words or actions forced under that coercion. This exception, grounded in a verse revealed regarding a companion forced under torture to outwardly renounce his faith while his heart remained genuinely unmoved, sits alongside the barriers already covered in this unit's opening topic, ignorance and error, as one more carefully bounded, evidence-based safeguard this subject has always carried within mainstream scholarship, not an invention added defensively by this course.`,
      },
      {
        heading: 'Closing this unit, and this course\'s treatment of Usul Thalaathah',
        body: `This unit closes this course's direct engagement with the classical texts it set out to study, back in its sixth unit, following Usul Thalaathah's own sequence through the Four Matters, the Three Principles, the catalogue of worship, Islam's levels, the Prophet's ﷺ life, resurrection and messengers, Taghut, and now the matters traditionally studied alongside it that undo the very testimony this entire sequence has been building toward. The author's own closing words, quoted directly in this unit's opening topic, remain the right note to end on: these matters are genuinely serious and worth real, honest self-examination, approached with the same care, humility, and reluctance to judge others that this unit's safeguards have modeled throughout. This course's final unit now turns from this classical text to a direct, practical question: what living correct Tawheed actually looks like in ordinary life today.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 14 - LIVING TAWHEED TODAY (full content, expanded)
  //
  // This closing unit deliberately does not introduce new doctrine.
  // Every section applies principles already established across
  // this course's first thirteen units to ordinary modern life, the
  // same approach this course's companion Adab Class took in its
  // own closing unit. Qur'anic Arabic and hadith checked against
  // primary sources before writing. English renderings are an
  // original paraphrase of the meaning, not copied from a single
  // named published translation.
  // -----------------------------------------------------------
  'live-1': {
    id: 'live-1',
    unit: 'unit-14',
    title: 'Tawheed in Daily Speech and Habits',
    summary: 'How ordinary daily language can reflect sound or unsound Tawheed.',
    content: [
      {
        heading: 'Returning to a theme already covered, now applied broadly',
        body: `This course's fifth unit already examined Minor Shirk in ordinary speech directly, covering swearing oaths by other than Allah and the Prophet's ﷺ own correction of a companion's well-meaning but imprecise phrase. This closing topic extends that same principle across the full range of ordinary daily habits and expressions a person actually uses, rather than treating it as a matter confined to formal oaths alone.`,
      },
      {
        heading: 'Everyday phrases worth examining honestly',
        body: `Modern speech across many languages and cultures carries expressions that quietly attribute independent power to luck, objects, or coincidence: knocking on wood to avoid tempting fate, treating a specific number as inherently lucky or unlucky independent of Allah's decree, or saying an outcome was "meant to be" in a way that implies fate operates as some force separate from Allah's own decree already examined in this course's second unit. None of these typically reflect deliberate intention to worship something besides Allah, which is exactly why this falls under Minor rather than Major Shirk, but the same principle already established in this course's fifth unit applies directly: unintentional, casually spoken Shirk still matters enough to notice and correct.`,
      },
      {
        heading: 'Sound expressions built directly into daily speech',
        body: `Islamic daily speech already contains built-in correctives to exactly this tendency. Saying "insha'Allah" (if Allah wills) when discussing future plans keeps a person's language honestly aligned with the reality that outcomes rest with Allah, not with human certainty alone. Saying "alhamdulillah" (praise be to Allah) upon receiving good news directs gratitude to its actual source rather than stopping at the nearest visible cause, exactly the pattern already covered in this course's second unit regarding tracing gratitude back to where it actually begins. Saying "bismillah" before beginning a task renews, in a small, repeated way, the same sincerity of intention this course has emphasized from its very first unit onward.`,
      },
      {
        heading: 'Why the words alone are not the entire point',
        body: `These phrases can, like anything repeated often enough, become empty verbal habits detached from genuine reflection, exactly the same risk this course's earlier unit on knowledge before action already warned against regarding any religious practice performed without understanding. Saying "insha'Allah" while genuinely treating an outcome as fully guaranteed regardless of Allah's will misses the phrase's actual point just as surely as never saying it at all. The goal this topic asks for is not simply correct vocabulary, but words that genuinely track an honest, ongoing awareness of where control, gratitude, and intention actually belong.`,
      },
      {
        heading: 'A practical habit worth building',
        body: `A simple, sustainable practice for applying this topic directly: periodically noticing one's own casual speech across an ordinary day and asking, honestly, whether a given phrase quietly attributes independent power to something other than Allah, or whether it correctly reflects the reality this entire course has spent thirteen units establishing. This is not a demand for constant, anxious self-monitoring of every syllable, but the same kind of honest, periodic self-examination already modeled throughout this course's units on Shirk and Taghut, now applied to the specific, ordinary texture of daily conversation.`,
      },
    ],
  },

  'live-2': {
    id: 'live-2',
    unit: 'unit-14',
    title: 'Guarding the Heart from Modern Shirk',
    summary: 'Materialism, celebrity worship, and superstition as modern challenges to Tawheed.',
    content: [
      {
        heading: 'A hadith describing a very modern pattern',
        body: `The Prophet ﷺ described a specific spiritual condition using language that reads as strikingly relevant to modern material culture.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'تَعِسَ عَبْدُ الدِّينَارِ وَعَبْدُ الدِّرْهَمِ وَعَبْدُ الْخَمِيصَةِ، إِنْ أُعْطِيَ رَضِيَ وَإِنْ لَمْ يُعْطَ سَخِطَ',
            english: '"Wretched is the slave of gold, the slave of silver, and the slave of fine clothing. If he is given, he is pleased, and if he is not given, he is resentful."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'What this hadith actually diagnoses',
        body: `This hadith does not condemn wealth or nice possessions themselves, already permitted throughout this course's earlier discussion of Allah's provision. It diagnoses a specific inward condition: a person's entire mood, sense of worth, and satisfaction governed entirely by whether material gain arrives or is withheld, precisely the kind of complete, worship-level devotion this course's third unit reserved for Allah alone. A person in this condition has not necessarily bowed to any physical object, but has structured their inner life around something incapable of bearing the weight this course has consistently shown only Allah can actually hold.`,
      },
      {
        heading: 'Following without question as a modern pattern',
        body: `This course's twelfth unit examined Taghut partly in terms of someone followed with devotion exceeding proper limit. A recognizable modern version of this pattern appears in uncritical devotion to public figures, whether celebrities, influencers, or public personalities, where their stated opinions and lifestyle choices are absorbed and imitated with the kind of unquestioning deference this course has reserved specifically for revealed guidance. This does not describe ordinary admiration or reasonable interest in a public figure's work. It describes the specific point already identified in this course's earlier unit on worship types, where following crosses from ordinary human interest into something approaching the complete deference this course has consistently reserved for Allah and His revealed guidance alone.`,
      },
      {
        heading: 'Claiming or trusting knowledge of the unseen in modern form',
        body: `This course's twelfth unit named claiming knowledge of the unseen (al-ghayb) as one of the five specific categories of Taghut. Horoscopes, astrology, and similar practices claiming to reveal future events or personality through celestial or symbolic patterns fall under this same category, regardless of how casually or entertainingly they are often presented in modern media. Treating these as genuinely informative about one's future or character, rather than as the empty entertainment they are sometimes claimed to be, repeats the exact error this course's eleventh unit already established: belief in the unseen belongs specifically and exclusively to what Allah has revealed, not to claims of access He has reserved for Himself alone.`,
      },
      {
        heading: 'A closing note on how this topic should actually be used',
        body: `Every example in this topic is offered for the same purpose already established throughout this course's units on Shirk and Taghut: honest self examination, not a checklist for evaluating other people's habits or purchases. A person can enjoy nice things, follow public figures with reasonable interest, and encounter horoscope content in ordinary media without any of this constituting the specific, worship-level devotion this topic actually describes. The question this topic asks is the same one this course has asked from its very first unit onward: where does a person's genuine, complete devotion actually rest, examined honestly rather than assumed to be correctly placed by default.`,
      },
    ],
  },

  'live-3': {
    id: 'live-3',
    unit: 'unit-14',
    title: 'Tawheed and Trust in Allah\'s Plan',
    summary: 'How sound Tawheed shapes a person\'s response to hardship and uncertainty.',
    content: [
      {
        heading: 'A promise directly relevant to ordinary modern uncertainty',
        body: `Modern life presents genuine sources of uncertainty already familiar to every era, job security, health, relationships, and unresolved circumstances of every kind. The Qur'an offers a direct promise to those who maintain correct awareness of Allah precisely in the midst of this ordinary uncertainty.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
            english: 'And whoever is mindful of Allah, He will make for him a way out.',
            source: 'Surah at-Talaq, 65:2',
          },
        ],
      },
      {
        heading: 'How this connects directly to Qadar, already covered in depth',
        body: `This promise rests entirely on the correct understanding of divine decree already established in this course's second unit: a way out is promised specifically because every circumstance, however uncertain it currently feels, remains within Allah's complete knowledge and management, not because the specific difficulty is guaranteed to resolve in exactly the way a person might currently hope. This distinction matters directly for how this promise should actually be understood, avoiding the same error this course's second unit already corrected regarding Qadar generally: trust in Allah's plan is not a guarantee that every specific outcome will match a person's preferred result, but confidence that whatever does occur remains within a wisdom and knowledge genuinely worth trusting.`,
      },
      {
        heading: 'Effort and reliance held together, once more',
        body: `This course's third unit already corrected the misunderstanding that treats tawakkul as passivity, using the image of tying one's camel before placing trust in Allah. This same balance applies directly to modern uncertainty: taking the reasonable steps genuinely available, preparing for a difficult exam, seeking appropriate medical care, pursuing employment opportunities through honest effort, while genuinely settling the heart on the fact that the actual outcome, despite this effort, ultimately rests with Allah. Neither half of this balance is optional, exactly as this course's third unit already established at length.`,
      },
      {
        heading: 'A distinction worth restating clearly here',
        body: `Correct Tawheed applied to hardship and uncertainty is not a claim that difficulty should not be felt, or that genuine effort to improve one's circumstances is somehow lacking in trust. This course's eleventh unit on Adab already covered the model of the Prophet ﷺ weeping at genuine loss while still affirming acceptance of Allah's decree in the same breath. Correct trust in Allah's plan operates alongside honest emotion and genuine effort, not as their replacement, precisely the same balance this course has modeled consistently across its treatment of Qadar, Tawakkul, and the emotional honesty already covered regarding grief and hardship.`,
      },
      {
        heading: 'Why this matters as a closing application of this entire course',
        body: `Nothing in this topic introduces content beyond what this course has already covered in depth across its second and third units. What this closing application adds is the deliberate, direct connection between that already-established theology and the ordinary, unremarkable uncertainty every person actually faces: an unanswered job application, an uncertain diagnosis, a strained relationship, or any other circumstance whose outcome genuinely cannot yet be known. Correct Tawheed, this topic argues, is not merely a correct answer given during formal study, but the actual framework a person genuinely reaches for in these ordinary, unscripted moments of real uncertainty.`,
      },
    ],
  },

  'live-4': {
    id: 'live-4',
    unit: 'unit-14',
    title: 'Teaching Tawheed to the Next Generation',
    summary: 'Practical ways to pass this foundation on to children.',
    content: [
      {
        heading: 'A father\'s advice preserved directly in the Qur\'an',
        body: `The Qur'an preserves a specific father's advice to his son, offered as a model worth studying directly for how this exact subject should be introduced to the next generation.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ ۖ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ',
            english: 'And remember when Luqman said to his son, while advising him, "O my son, do not associate partners with Allah. Indeed, association with Him is a great injustice."',
            source: 'Surah Luqman, 31:13',
          },
        ],
      },
      {
        heading: 'Why this specific instruction came first',
        body: `Commentators on this verse note a deliberate choice in Luqman's advice: of everything a father might teach a child, this specific instruction, avoiding Shirk, was given first, precisely because it is more foundational than anything else that could follow. This mirrors exactly this course's own structure, beginning with Tawheed and Shirk across its first five units before turning to the specific text of Usul Thalaathah, and confirms a principle worth carrying directly into how this subject is taught to children: correct Tawheed is not one lesson among many equally weighted lessons, but the foundation every other piece of religious instruction depends upon.`,
      },
      {
        heading: 'A hadith describing what children already carry',
        body: `The Prophet ﷺ described every child as entering the world already oriented toward this same foundation, before any outside influence has had the chance to redirect them.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'كُلُّ مَوْلُودٍ يُولَدُ عَلَى الْفِطْرَةِ، فَأَبَوَاهُ يُهَوِّدَانِهِ أَوْ يُنَصِّرَانِهِ أَوْ يُمَجِّسَانِهِ',
            english: '"Every child is born upon natural disposition (fitrah); it is his parents who then make him a Jew, a Christian, or a Zoroastrian."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'What this hadith implies about the actual task of teaching Tawheed',
        body: `This hadith reframes the task described throughout this closing unit in an encouraging direction. Teaching a child correct Tawheed is not planting something entirely foreign into a blank, indifferent starting point. It is nurturing and protecting an inclination the child already carries by nature, while outside influences of every kind, some subtle, some direct, constantly work to redirect that inclination elsewhere. This does not make the task effortless, but it does mean a parent or teacher is working with a child's own natural disposition, not against it entirely from scratch.`,
      },
      {
        heading: 'Practical connections to what this course has already covered',
        body: `Teaching Tawheed to a child does not require inventing new content beyond what this course has already established. The same three principles examined in this course's seventh unit, knowing one's Lord, one's religion, and one's Prophet ﷺ, are precisely what a child will eventually be personally asked about, according to the same hadith already covered directly in that unit. Introducing these three principles early, in age-appropriate language, using the same evidence-based approach this entire course has modeled rather than bare assertion alone, gives a child the same genuine, evidence-grounded foundation this course has spent fourteen units building for its own reader, rather than a set of unexplained rules to simply memorize and repeat.`,
      },
      {
        heading: 'A closing reflection for this entire course',
        body: `This unit, and this course, opened with a claim worth returning to directly: Tawheed is not one topic among many equally weighted Islamic subjects, but the foundation every other act of worship and every other piece of religious knowledge depends upon. Fourteen units later, having moved from the three categories of Tawheed, through Shirk in its major, minor, and hidden forms, through a complete sequential study of Usul Thalaathah and the matters that nullify its central testimony, and now to this subject's practical application in ordinary daily life, that opening claim should now stand not merely as an assertion accepted at the beginning, but as a conclusion genuinely earned through the evidence and reasoning this entire course has carefully built, one unit at a time. Passing this same foundation on to the next generation, with the same patience, evidence, and care this course has attempted to model throughout, is the task this closing unit leaves its reader with, the same task every prophet examined across this course was ultimately sent to accomplish.`,
      },
    ],
  },
};