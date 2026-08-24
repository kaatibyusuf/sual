// src/data/newMuslim.js
//
// New Muslim / Revert Starter Path — a guided on-ramp covering
// belief, worship, daily practice, and the real social/emotional
// challenges specific to reverts. Static content, same convention
// as the rest of Sual's Islamic-knowledge features: reviewed once
// via PR, not admin-managed or AI-generated at runtime.
//
// STATUS: draft — pending scholar sign-off before publishing. This
// is someone's literal introduction to their new religion — treat
// every ruling and description below as provisional until reviewed,
// especially anything touching aqeedah (belief) and the mechanics
// of prayer.
//
// Scope note: this is a comprehensive STARTER path, not an attempt
// to be exhaustive — it closes by pointing toward Sual's Disciplines,
// Tajweed course, Qiwaamah/Women's Fiqh, and (most importantly) a
// real local teacher/community, rather than presenting itself as a
// complete substitute for ongoing study and in-person guidance.

export const NEW_MUSLIM_CONTENT = {
  welcome_shahada: {
    title: 'The Shahada & Your New Beginning',
    arabic_title: 'الشَّهَادَة وَبِدَايَتُكَ الجَدِيدَة',
    quick_fact: 'What you just declared, and what genuinely changes',
    definition:
      'The Shahada — "Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan rasulullah" ("I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah") — is the single declaration that makes someone a Muslim. It has no ceremony requirement, no witnesses strictly required (though many choose to say it in front of others, often at a mosque, for the joy and support of community), and no waiting period. The moment it is said sincerely, with understanding of its meaning and belief in it, a person is Muslim — fully, completely, with nothing lesser about someone who said it five minutes ago compared to someone born into the religion.',
    scope:
      'This covers what the Shahada actually means (submission to Allah alone, and accepting Muhammad ﷺ as His final messenger), what practically changes the moment you say it, and — importantly — what does NOT change instantly: you are not expected to have memorized the Qur\'an, mastered Arabic, or perfected every practice by tomorrow. Islam is a lived, growing relationship with Allah, not a certification exam you pass in one sitting.',
    rulings:
      'A widely cited hadith states that when a person becomes Muslim, their previous sins are forgiven — a fresh start, not a probationary one. Scholars are unanimous that no one — not a scholar, not an imam, not a family member — has the authority to say your Islam "doesn\'t count" because of how or when you said it, what mistakes you make afterward, or how much you don\'t yet know. Islam does not require perfection to begin; it asks for sincerity, and grows from there.',
    cases: [
      {
        title: 'Saying the Shahada alone, with no one else present',
        scenario:
          'Someone comes to conviction privately — reading, reflecting, praying for guidance — and says the Shahada alone in their room, with no mosque, no imam, no witnesses.',
        ruling:
          'This is fully valid. The Shahada requires sincere belief and utterance, not a formal ceremony or witnesses. Many people later choose to also say it publicly at a mosque for community and support — a beautiful and encouraged step, but not a requirement for the conversion itself to be valid.',
      },
      {
        title: 'Doubting whether it "really happened" because there was no ceremony',
        scenario:
          'A new Muslim who converted privately worries that their conversion "doesn\'t feel official" without a formal event.',
        ruling:
          'The feeling is understandable, but the reality is settled: sincere belief and utterance of the Shahada is what makes someone Muslim — nothing more is required for validity. A ceremony can add meaning and community, but its absence changes nothing about the reality of what happened.',
      },
    ],
    faq: [
      {
        question: 'Do I need to change my name?',
        answer:
          'No, unless your current name has a meaning that directly contradicts Islamic belief (for example, a name meaning "servant of" a false deity). Most names are entirely fine to keep — many Muslims around the world have names with no Arabic or explicitly "Islamic" origin at all. Adopting a new name is a personal choice, not a requirement.',
      },
      {
        question: 'Do I need to be circumcised, or make other physical changes, immediately?',
        answer:
          'Circumcision (for men) is recommended in Islam but is not a condition for the validity of your Shahada or your standing as a Muslim — it can be addressed later, at your own pace and in consultation with a doctor and knowledgeable person, not treated as an urgent prerequisite.',
      },
      {
        question: 'What do I say if someone asks me to "prove" my conversion?',
        answer:
          'No one is owed proof beyond your own sincere declaration. If you\'d like a record for personal or family reasons, many mosques offer a certificate of conversion — but this is for your own comfort, never a religious requirement for your Islam to be genuine.',
      },
    ],
  },

  iman_pillars: {
    title: 'The Six Pillars of Faith',
    arabic_title: 'أَرْكَانُ الإِيمَانِ السِّتَّة',
    quick_fact: 'What a Muslim actually believes, in six points',
    definition:
      'The six pillars of iman (faith) are the core beliefs every Muslim holds: belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree (qadr — both the good and the difficult that Allah allows). These aren\'t abstract theology detached from daily life — they shape how a Muslim understands purpose, morality, hardship, and death.',
    scope:
      'Belief in Allah means accepting His absolute oneness (tawheed) — no partners, no equals, nothing deserving worship alongside Him. Belief in angels means accepting the existence of beings created from light who carry out Allah\'s commands (recording deeds, delivering revelation, and more), without needing to understand every detail of their nature. Belief in the books means accepting that Allah revealed scripture to guide humanity across history — the Qur\'an being the final, complete, and preserved revelation. Belief in the messengers means accepting the line of prophets sent to every nation, from Adam through Muhammad ﷺ, the final messenger. Belief in the Last Day means accepting that this life ends, followed by resurrection and accountability before Allah. Belief in qadr means trusting that everything that happens — the ease and the hardship — occurs within Allah\'s knowledge and wisdom, without this belief removing personal responsibility for one\'s own choices.',
    rulings:
      'These six form the theological foundation everything else in Islam rests on — the five pillars (worship) are the practice; these six are the belief underneath it. A new Muslim isn\'t expected to have deep scholarly understanding of each point immediately; sincere acceptance of them is what matters at the start, with understanding deepening naturally through continued learning.',
    cases: [
      {
        title: 'Struggling to fully "feel" belief in the unseen',
        scenario:
          'A new Muslim genuinely believes but sometimes struggles to emotionally connect with concepts like angels or the Last Day, since they can\'t be seen or verified directly.',
        ruling:
          'This is a normal part of faith, not a defect in it — belief in the unseen (al-ghayb) is explicitly part of what the Qur\'an describes as characteristic of believers, precisely because it isn\'t something proven by direct observation. Continued learning, reflection, and worship tend to deepen this over time; struggling with it doesn\'t undermine the sincerity of one\'s belief.',
      },
      {
        title: 'Understanding qadr without feeling fatalistic',
        scenario:
          'A new Muslim wonders if believing everything is decreed by Allah means their own choices and effort don\'t matter.',
        ruling:
          'Islamic theology holds both together: Allah\'s knowledge and decree encompass all things, and a person is still genuinely responsible for their choices and will be held accountable for them. This isn\'t treated as a contradiction to resolve intellectually before moving on — it\'s a balance many scholars have written about at length, and something that becomes more comfortable to hold with continued study.',
      },
    ],
    faq: [
      {
        question: 'Do I need to memorize all six pillars word for word?',
        answer:
          'Understanding and sincerely believing them matters far more than reciting them from memory in a specific order — though many find it helpful to know the list, since it comes up often in learning and conversation.',
      },
      {
        question: 'What if I have doubts about one of these?',
        answer:
          'Doubts are a normal and common part of faith, for born Muslims and reverts alike — they don\'t automatically undo your Islam. Bringing doubts to a knowledgeable, patient teacher rather than sitting with them alone in silence is the healthiest path forward; see the "Doubts & Where to Turn" section for more.',
      },
    ],
  },

  islam_pillars: {
    title: 'The Five Pillars of Islam',
    arabic_title: 'أَرْكَانُ الإِسْلَامِ الخَمْسَة',
    quick_fact: 'The framework your practice is built on',
    definition:
      'The five pillars of Islam are the core acts of worship every Muslim is obligated to perform: the Shahada (already covered), Salah (the five daily prayers), Zakah (obligatory charity, once wealth reaches a threshold — see Sual\'s "Everything Zakaat" feature for the full picture), Sawm (fasting Ramadan), and Hajj (pilgrimage to Makkah, once in a lifetime, for those physically and financially able).',
    scope:
      'This topic gives the overview; Salah gets its own dedicated, practical topic next in this path, since it\'s the pillar a new Muslim needs to start learning immediately and hands-on. Zakah only becomes obligatory once your wealth reaches a specific threshold (nisab) held for a full lunar year — most new Muslims aren\'t immediately affected by it, though it\'s worth understanding early. Sawm (fasting Ramadan) and Hajj follow their own specific conditions and timing, and are not urgent to master in your first weeks — they\'ll come naturally as the calendar reaches them and as your knowledge grows.',
    rulings:
      'Scholars generally agree that a new Muslim is not expected to instantly perform every pillar perfectly — genuine ignorance of the how is treated with patience, not blame, while the intention to learn and the sincerity to practice as understanding grows is what matters most in these early days. Salah is the pillar to prioritize learning immediately and practically; the others can be learned at a steady, unhurried pace.',
    cases: [
      {
        title: 'Feeling overwhelmed trying to "do everything at once"',
        scenario:
          'A new Muslim feels pressure to immediately master prayer, start fasting extra days, calculate zakah, and plan for Hajj, all within their first month.',
        ruling:
          'This pressure isn\'t coming from the religion itself — Islam was revealed gradually over 23 years for exactly this reason: sustainable, gradual growth over instant, overwhelming perfection. Prioritizing learning Salah well, and letting the rest follow at a steady pace, reflects sound practice, not spiritual shortcoming.',
      },
    ],
    faq: [
      {
        question: 'Which pillar should I focus on learning first?',
        answer:
          'Salah (prayer) — it\'s the most immediate, frequent, and practical pillar, and the one you\'ll be doing (or working toward doing) five times a day from very early on. The next topic in this path walks through it step by step.',
      },
      {
        question: 'What if I can\'t afford to give zakah or perform Hajj right now?',
        answer:
          'Neither is obligatory until specific conditions are met — zakah only once your wealth reaches the nisab threshold, and Hajj only once you\'re financially and physically able. Neither is something to worry about as an immediate pressure in your early days as a Muslim.',
      },
    ],
  },

  purification: {
    title: 'Purification — Taharah, Wudu & Ghusl',
    arabic_title: 'الطَّهَارَة وَالوُضُوء وَالغُسْل',
    quick_fact: 'The physical preparation before prayer',
    definition:
      'Taharah (purification) is a prerequisite for prayer and other acts of worship. Wudu (ablution) is the routine washing performed before each prayer; ghusl (full-body ritual washing) is required after specific events — most commonly after intimacy, and for women, after the end of a menstrual or postpartum bleeding period.',
    scope:
      'Wudu, in order: intend purification, say "Bismillah," wash hands to the wrists three times, rinse the mouth and nose, wash the face three times, wash the arms to the elbows three times (right then left), wipe the head once with wet hands, wipe the ears, and wash the feet to the ankles three times (right then left). Wudu is broken by using the toilet, passing gas, deep sleep, and a few other specific things — it does not need to be redone for every single prayer if it hasn\'t been broken since the last one. Ghusl involves the same intention and Bismillah, then ensuring water reaches every part of the body, including the scalp (hair does not need to be undone if water can reach the scalp through it) — see Sual\'s Women\'s Fiqh feature for the fuller detail on ghusl specific to hayd/nifas.',
    rulings:
      'If water is genuinely unavailable or would cause harm (illness, extreme cold with no way to warm water), tayammum (dry purification using clean earth or a dust-covered surface, wiping the hands and face) is a valid substitute — Islam does not intend to create hardship. Learning the physical mechanics of wudu is straightforward and typically takes only a short time to feel natural; a short video demonstration alongside written steps, or practicing alongside a knowledgeable friend, tends to help far more than reading alone.',
    cases: [
      {
        title: 'Unsure whether wudu broke',
        scenario:
          'A new Muslim isn\'t sure if something that happened (light doubt, unclear sensation) actually broke their wudu.',
        ruling:
          'The general principle is that certainty is not removed by mere doubt — if you were certain you had wudu and are now only uncertain whether something broke it, you\'re considered still in a state of wudu unless you\'re genuinely certain it broke. This principle brings real relief from obsessive doubt, which some new Muslims experience early on.',
      },
    ],
    faq: [
      {
        question: 'Do I need to redo my wudu for every single prayer?',
        answer:
          'No — wudu remains valid across multiple prayers as long as nothing has broken it in between. Many people do refresh it as a matter of habit or extra reward, but it isn\'t required unless it\'s actually been broken.',
      },
      {
        question: 'What if I make a mistake in the order of wudu?',
        answer:
          'The order matters and is worth learning correctly, but an honest mistake made while genuinely learning is treated with understanding, not harshness — simply correct it and continue practicing. This becomes automatic with repetition.',
      },
    ],
  },

  how_to_pray: {
    title: 'Learning Salah, Step by Step',
    arabic_title: 'تَعَلُّمُ الصَّلَاةِ خُطْوَةً بِخُطْوَة',
    quick_fact: 'The single most important practical skill to learn first',
    definition:
      'Salah is the five daily prayers, performed at set times throughout the day (Fajr, Dhuhr, Asr, Maghrib, Isha — see Sual\'s Prayer Times feature for exact local timings). Each prayer consists of a set number of units called rak\'ahs, each following the same basic sequence of standing, bowing, prostrating, and sitting, accompanied by specific recitations.',
    scope:
      'A single rak\'ah, in sequence: stand and recite the opening (Al-Fatihah, the Qur\'an\'s first surah — this is the one piece of Arabic every Muslim needs to learn early, since it\'s recited in every single rak\'ah of every prayer), optionally recite another short surah, bow (ruku) saying "Subhana Rabbiyal-Adheem" (Glory to my Lord, the Magnificent), rise and say "Sami Allahu liman hamidah, Rabbana lakal-hamd," prostrate (sujud) saying "Subhana Rabbiyal-A\'la" (Glory to my Lord, the Most High), sit briefly, prostrate a second time, then rise (or sit, depending on the rak\'ah) to begin the next unit. After the final rak\'ah of any prayer, the tashahhud (a seated recitation) is said, followed by salam (turning the head right then left, saying "Assalamu alaikum wa rahmatullah") to end the prayer.',
    rulings:
      'Learning Al-Fatihah in Arabic is the single most urgent piece of memorization for a new Muslim — everything else in the prayer can be learned gradually, but this surah is recited in every rak\'ah of every prayer, so it\'s worth prioritizing above all else in the first days and weeks. It is entirely acceptable, and expected, for a new Muslim to pray from a transliteration or with visible notes while memorizing — this is not looked down upon, and scholars generally agree genuine effort during the learning period is what matters, not instant mastery. Praying alongside someone else, or watching a careful step-by-step video demonstration, dramatically speeds up learning the physical movements compared to reading text alone.',
    cases: [
      {
        title: 'Not knowing Al-Fatihah yet',
        scenario:
          'A brand-new Muslim wants to start praying immediately but hasn\'t yet memorized Al-Fatihah in Arabic.',
        ruling:
          'Scholars generally hold that a person genuinely unable to recite the required Arabic (due to being new to the religion or the language) is not sinful for using what they\'re able to — reciting from memory in translation temporarily, or reading along, while actively working to memorize the Arabic as quickly as reasonably possible. This is treated as a genuine learning process, not a failure.',
      },
      {
        title: 'Forgetting the sequence mid-prayer',
        scenario:
          'A new Muslim loses track of which rak\'ah they\'re on, or forgets a step, while praying.',
        ruling:
          'This happens to born Muslims too, not just new ones — there are established, simple ways to handle mistakes mid-prayer (continuing from where you realize the error, or performing sujud as-sahw, the "prostration of forgetfulness," at the end). It doesn\'t invalidate genuine effort, and becomes far less frequent with practice.',
      },
    ],
    faq: [
      {
        question: 'How long will it take before praying feels natural?',
        answer:
          'This varies significantly person to person, but most people describe the physical movements feeling comfortable within a few weeks of regular practice, with the Arabic recitation continuing to deepen and become more fluent over months. Consistency matters far more than speed.',
      },
      {
        question: 'What if I miss a prayer time because I genuinely didn\'t know it yet?',
        answer:
          'A missed prayer due to genuine unawareness — rather than deliberate neglect — is treated with understanding. Make it up as soon as you realize (praying it as soon as possible, even outside its normal window, called qada), and focus on building consistency going forward rather than dwelling heavily on the early days.',
      },
      {
        question: 'Can I use a transliteration app or written notes during prayer while I\'m learning?',
        answer:
          'Yes — this is a completely normal and accepted part of the learning process for a new Muslim, not something to feel embarrassed about. The goal is genuine, growing familiarity with the Arabic over time, not instant perfection.',
      },
    ],
  },

  quran_basics: {
    title: 'Starting with the Qur\'an',
    arabic_title: 'البِدَايَةُ مَعَ القُرْآن',
    quick_fact: 'Read the meaning first, the Arabic follows',
    definition:
      'The Qur\'an is the literal, preserved word of Allah, revealed to the Prophet Muhammad ﷺ over 23 years. For a new Muslim, engaging with the Qur\'an happens on two separate, complementary tracks: understanding its meaning (through a good translation) and learning to recite it in Arabic (which takes longer and develops gradually).',
    scope:
      'Reading a reputable English (or your native language) translation cover to cover, or working through it with a study companion or short daily reflections, is one of the fastest ways to build a real relationship with the text\'s meaning without waiting years for Arabic fluency. Learning to read Arabic script (starting with the alphabet, then basic tajweed rules) is a separate, longer-term skill — Sual\'s full Tajweed course exists specifically for this, and is worth starting once Al-Fatihah and the basics of prayer feel comfortable, not necessarily in the very first week.',
    rulings:
      'There is no requirement to have read the entire Qur\'an, in Arabic or translation, within any specific timeframe as a new Muslim — this is lifelong engagement, not a deadline. Scholars generally encourage starting with understanding (translation, tafsir, reflection) alongside gradually building Arabic recitation skill, rather than delaying meaning until Arabic is mastered, since that could take years and meaning matters from day one.',
    cases: [
      {
        title: 'Feeling like reciting Arabic they don\'t understand is pointless',
        scenario:
          'A new Muslim wonders whether reciting Qur\'anic Arabic they can\'t yet fully understand is meaningful, versus just reading the translation.',
        ruling:
          'Both matter, and neither replaces the other — reciting the actual preserved Arabic carries its own spiritual weight and is what\'s used in prayer itself, while understanding the meaning (through translation and study) is what builds comprehension and reflection. Pursuing both together, rather than choosing one over the other, is the generally encouraged path.',
      },
    ],
    faq: [
      {
        question: 'Which translation should I start with?',
        answer:
          'Any translation from a reputable, mainstream Islamic publishing source works well as a starting point — the specific choice matters less than simply beginning consistently. Asking a local mosque or knowledgeable Muslim friend for a recommendation is a good practical first step.',
      },
      {
        question: 'How quickly should I start learning to read Arabic?',
        answer:
          'There\'s no fixed timeline — many new Muslims begin with just Al-Fatihah and a few short surahs needed for prayer, then gradually expand into fuller Arabic literacy over months, often through a structured course. Sual\'s Tajweed course is built for exactly this next step once the basics of prayer are comfortable.',
      },
    ],
  },

  daily_duas: {
    title: 'Essential Duas & Adhkar for Daily Life',
    arabic_title: 'الأَدْعِيَةُ وَالأَذْكَارُ اليَوْمِيَّة',
    quick_fact: 'Small phrases that carry a Muslim through the day',
    definition:
      'Beyond the formal prayer, Islam is woven through everyday moments with short supplications (dua) and remembrances (dhikr) — before eating, upon waking, before sleeping, entering and leaving the home, and more. These aren\'t obligatory the way Salah is, but they\'re deeply encouraged and give daily life a constant thread of connection to Allah.',
    scope:
      'A few genuinely essential ones to learn early: "Bismillah" before eating or starting any task, "Alhamdulillah" after eating and in general gratitude, "SubhanAllah," "Alhamdulillah," and "Allahu Akbar" as general remembrance phrases usable anytime, a short dua before sleeping and upon waking, and "Astaghfirullah" (seeking Allah\'s forgiveness) usable anytime one feels regret or wants to turn back to Allah. Sual\'s dedicated Duas feature has a fuller, organized collection once these basics feel comfortable.',
    rulings:
      'None of these carry the strict obligation Salah does — missing them isn\'t sinful the way missing prayer is — but scholars widely encourage building the habit early, since they\'re genuinely easy to learn (short, often just a few words) and have an outsized effect on how present faith feels in ordinary moments, not just during formal worship.',
    cases: [
      {
        title: 'Forgetting to say Bismillah before eating',
        scenario:
          'A new Muslim, still building the habit, sometimes starts eating before remembering to say Bismillah.',
        ruling:
          'A widely known teaching offers a simple remedy: if you remember partway through, you can say "Bismillahi awwalahu wa akhirahu" ("In the name of Allah, at its beginning and its end") — a gentle, forgiving allowance rather than treating the missed moment as a failure requiring anything more.',
      },
    ],
    faq: [
      {
        question: 'Do I need to memorize these in Arabic right away?',
        answer:
          'No — understanding the meaning and saying them sincerely, even in your own language at first while gradually picking up the Arabic phrases through repetition, is a perfectly good starting point. The short, common ones tend to be memorized quickly just through regular use.',
      },
      {
        question: 'Is it okay to make dua in my own words, in my own language?',
        answer:
          'Yes, absolutely — personal dua (asking Allah for anything on your heart, in whatever language feels natural) is encouraged and doesn\'t need to be in formal Arabic phrasing at all. The Arabic adhkar mentioned here are specific, transmitted phrases with their own virtue, but personal, heartfelt dua in your own words is a beautiful and constant part of a Muslim\'s life too.',
      },
    ],
  },

  halal_haram: {
    title: 'Halal, Haram & Everyday Lifestyle',
    arabic_title: 'الحَلَالُ وَالحَرَامُ وَنَمَطُ الحَيَاةِ اليَوْمِيّ',
    quick_fact: 'What actually changes in daily life, and what doesn\'t',
    definition:
      'Halal means permissible; haram means prohibited. For a new Muslim, this most immediately touches food and drink (pork and its by-products, alcohol, and meat not slaughtered according to Islamic method are the most common changes), along with broader lifestyle matters like modesty in dress and conduct, and avoiding interest-based financial dealings where reasonably possible.',
    scope:
      'Food: pork (in any form, including gelatin and many processed ingredients derived from it) and alcohol are clearly prohibited; meat should ideally be from animals slaughtered according to Islamic method (halal-certified, or the "people of the book" exception some scholars extend to certain non-Muslim sources under specific conditions — worth learning the details of the position you follow). Dress and conduct: general modesty is encouraged for both men and women, with specifics (like hijab for women) being a genuine personal journey many new Muslim women navigate at their own pace, not something expected to change overnight. Finance: avoiding interest (riba) is a genuine Islamic principle, though scholars widely recognize this is a gradual transition for many converts (an existing mortgage, for instance, isn\'t expected to be unwound instantly) — moving toward Islamically sound alternatives over time, with sincerity and effort, is the realistic and encouraged approach.',
    rulings:
      'None of these lifestyle changes are expected to happen instantly and perfectly the moment someone says the Shahada — Islam recognizes that unlearning old habits and building new ones takes real time, and treats genuine, sincere effort with patience rather than demanding immediate perfection. Prioritizing the clearest, most serious prohibitions first (pork, alcohol) while working gradually on subtler or more complex areas (finance, full wardrobe changes) is a reasonable and common approach.',
    cases: [
      {
        title: 'An existing job involves something now understood as haram',
        scenario:
          'A new Muslim works in a role connected to alcohol sales, interest-based finance, or something else now understood to be religiously problematic.',
        ruling:
          'This is treated as a genuine, serious matter worth addressing — but not something requiring an instant, panicked resignation the day after taking Shahada. Speaking with a knowledgeable person about a realistic transition plan, while making sincere effort to move toward permissible income, reflects sound practice; Allah is described in the Qur\'an and hadith as understanding and merciful toward genuine difficulty and gradual change.',
      },
      {
        title: 'Family meals containing pork or alcohol',
        scenario:
          'A new Muslim\'s family regularly cooks meals containing pork or serves alcohol at gatherings, and they\'re unsure how to navigate this without causing family conflict.',
        ruling:
          'You are not obligated to consume what\'s prohibited, but you can absolutely still attend family meals and gatherings, simply choosing what you eat and drink accordingly, and communicating your needs calmly and without judgment toward family members. Many new Muslims find bringing their own dish, or eating beforehand, eases the social tension considerably. See the "Family & Social Challenges" topic for more on this.',
      },
    ],
    faq: [
      {
        question: 'How do I know if meat at a restaurant or store is halal?',
        answer:
          'Look for halal certification where available, ask directly at restaurants, or choose vegetarian/seafood options when uncertain. Many communities have halal-specific grocery stores or restaurant guides — a local mosque or Muslim community group is often the fastest way to find reliable local options.',
      },
      {
        question: 'Do I have to give up alcohol immediately, even socially?',
        answer:
          'Yes — alcohol is clearly and unambiguously prohibited, and this is one of the changes generally expected to happen right away, unlike some of the more gradual transitions (like finance) discussed above. Many new Muslims find this one of the more immediately freeing changes, even if socially adjusting to it takes some navigating.',
      },
    ],
  },

  family_social: {
    title: 'Family, Friends & Social Challenges',
    arabic_title: 'التَّحَدِّيَاتُ الأُسَرِيَّةُ وَالاِجْتِمَاعِيَّة',
    quick_fact: 'The part most resources skip — and shouldn\'t',
    definition:
      'Converting to Islam is rarely just a private, internal shift — it often reshapes relationships with family, friends, and community in real, sometimes painful ways. This is one of the most under-addressed parts of the revert experience, and deserves honest, direct attention rather than being glossed over.',
    scope:
      'This covers navigating family reactions (ranging from full support to confusion, disappointment, or even estrangement), maintaining old friendships that may not understand or respect the changes, handling holidays and family traditions that now feel more complicated, and the loneliness that can come from feeling caught between an old life and a new one before a new community has fully formed.',
    rulings:
      'Islamic teaching places real weight on maintaining family ties (silat ar-rahim) even when family members are non-Muslim or disapprove of the conversion — kindness, patience, and continued connection with parents and family are strongly encouraged, short of anything that would require actually disobeying Allah. This isn\'t a minor footnote; scholars treat honoring parents as one of the more emphasized obligations in Islam, explicitly even when parents don\'t share the same faith.',
    cases: [
      {
        title: 'Parents who strongly disapprove of the conversion',
        scenario:
          'A new Muslim\'s parents are hurt, confused, or angry about their conversion, and family gatherings have become tense.',
        ruling:
          'Continuing to show kindness, patience, and respect toward parents remains a genuine Islamic obligation even in this painful situation — this doesn\'t mean compromising core beliefs or practices, but it does mean actively working to preserve the relationship rather than letting bitterness grow on either side. Many new Muslims find that consistent good character, more than arguments or explanations, is what gradually eases family tension over time.',
      },
      {
        title: 'Feeling isolated between an old social circle and a not-yet-formed new one',
        scenario:
          'A new Muslim feels distant from old friends whose lifestyle no longer fits, but hasn\'t yet found a new community to belong to.',
        ruling:
          'This is an extremely common and real experience, not a sign anything is wrong — actively seeking out a local mosque, a new-Muslim support group, or an online community (many of which exist specifically for reverts) is one of the most protective things a new Muslim can do in this stage. See the "Finding Community" topic — this gap tends to close much faster than it feels like it will in the early weeks.',
      },
      {
        title: 'Being pressured to hide or downplay the conversion around certain people',
        scenario:
          'A new Muslim feels pressure from family or friends to keep their conversion quiet, or to not visibly practice around them.',
        ruling:
          'This is a genuinely difficult, personal situation with no single universal answer — safety and family harmony are real, legitimate considerations, and it isn\'t a failure of faith to navigate this thoughtfully and gradually rather than confronting it all at once. Speaking with a trusted, knowledgeable person (an imam, a revert support group, or a mature Muslim friend) about your specific situation is far more useful than trying to figure it out entirely alone.',
      },
    ],
    faq: [
      {
        question: 'Is it okay to still attend non-Muslim family holidays or celebrations?',
        answer:
          'This is a genuinely nuanced area with a range of scholarly views, generally depending on the specific nature of the event and what participation would actually involve (attending a family dinner is very different from participating in a religious ritual of another faith). This is worth discussing with a knowledgeable local scholar who understands your specific family situation.',
      },
      {
        question: 'What if I feel guilty or torn about my old friendships?',
        answer:
          'These feelings are completely normal and don\'t reflect weak faith — genuine friendships and family bonds don\'t simply disappear because your beliefs changed. Islam doesn\'t require abandoning good people in your life; it asks that your own conduct and choices align with your new practice, while continuing to treat others with kindness.',
      },
    ],
  },

  doubts_challenges: {
    title: 'Doubts, Loneliness & Where to Turn',
    arabic_title: 'الشُّكُوكُ وَالوَحْدَةُ وَإِلَى أَيْنَ تَتَّجِه',
    quick_fact: 'You are not the first person to feel this, and it does not mean you\'ve failed',
    definition:
      'Doubt, loneliness, overwhelm, and moments of genuinely questioning the decision are common — even expected — parts of the revert journey, not signs that something has gone wrong. This topic addresses them directly, rather than pretending a new Muslim\'s path should feel constantly certain and joyful.',
    scope:
      'This covers intellectual doubts (questions about specific beliefs or rulings that feel unresolved), emotional overwhelm (feeling like there\'s simply too much to learn and do), spiritual dryness (periods where worship feels mechanical rather than meaningful — something born Muslims experience too, not unique to reverts), and practical loneliness (not yet having a support network that understands the journey).',
    rulings:
      'Islam does not treat honest doubt as automatic disbelief — bringing genuine questions to a knowledgeable, patient teacher is treated as a sign of taking one\'s faith seriously, not as a spiritual failing. Scholars across history have written extensively addressing common doubts and difficult questions; a new Muslim experiencing them is walking a well-trodden path, not stumbling somewhere entirely unprecedented.',
    cases: [
      {
        title: 'Doubting a specific ruling or belief that feels hard to accept',
        scenario:
          'A new Muslim encounters a specific Islamic ruling or belief that genuinely troubles them, and isn\'t sure what to do with that discomfort.',
        ruling:
          'Bringing the specific doubt directly to a knowledgeable, trustworthy teacher — rather than silently carrying it, or searching for answers from unreliable or hostile sources online — is by far the healthiest and most effective path. Many difficult questions have genuinely thoughtful answers that simply aren\'t obvious without the right context or guidance, and a good teacher can meet the specific concern rather than a generic response.',
      },
      {
        title: 'Feeling like worship has become mechanical or empty',
        scenario:
          'After the initial excitement of converting, a new Muslim finds prayer and other worship starting to feel routine rather than deeply meaningful.',
        ruling:
          'This is an extremely common experience for Muslims of every background, not unique to reverts, and doesn\'t indicate anything is religiously wrong. Varying one\'s worship (learning the meaning of what\'s being recited, adding personal dua, engaging with Qur\'anic reflection) tends to help restore a sense of connection — this ebb and flow is a normal part of a lifelong spiritual journey, not a permanent state.',
      },
    ],
    faq: [
      {
        question: 'Is it normal to sometimes miss my old life or old habits?',
        answer:
          'Yes — this is a completely human, common experience and doesn\'t mean you regret your decision or that your faith is weak. Adjustment takes real time, and moments of nostalgia for the familiar don\'t undo the genuine conviction that led you to Islam.',
      },
      {
        question: 'Who should I actually talk to when I have doubts or feel overwhelmed?',
        answer:
          'A knowledgeable local imam or teacher, a structured new-Muslim support program (many mosques run these specifically), or a trusted, mature Muslim friend are all far better than searching alone online, where misinformation and bad-faith content are common. The next topic, "Finding Community," is specifically about building this support network.',
      },
    ],
  },

  community: {
    title: 'Finding & Building Community',
    arabic_title: 'إِيجَادُ وَبِنَاءُ المُجْتَمَع',
    quick_fact: 'The single biggest factor in long-term thriving',
    definition:
      'Consistently, the strongest predictor of a new Muslim thriving long-term — practically, emotionally, and spiritually — is finding a genuine, supportive community, not simply consuming more content or information alone. This topic is about actively building that, rather than waiting for it to happen.',
    scope:
      'This includes finding a local mosque and attending regularly (even before feeling "ready" or knowledgeable), seeking out any new-Muslim specific programs or support groups (many mosques run these, often with mentorship pairing a new Muslim with an experienced one), connecting with online revert communities for the moments in-person community feels distant, and — importantly — being patient with the process, since finding the right community sometimes takes visiting a few different places before one feels like home.',
    rulings:
      'The Prophet ﷺ emphasized the Muslim community (ummah) as one body, where believers support and strengthen one another — this isn\'t a poetic idea alone, but a genuinely practical description of how Islam is meant to be lived, in connection with others, not in isolation. Attending congregational prayer (especially Jumu\'ah, the Friday prayer) is itself both an act of worship and one of the most natural, built-in ways to begin forming community connections.',
    cases: [
      {
        title: 'Feeling too new or unknowledgeable to go to the mosque yet',
        scenario:
          'A new Muslim wants to visit a local mosque but feels embarrassed about not knowing enough yet, or worries about doing something "wrong" in front of others.',
        ruling:
          'This hesitation is extremely common but not something to wait out — mosques and their communities are generally warm toward new Muslims specifically, and most people there remember being new themselves at some point. Going before feeling "ready" is usually the right call; comfort and knowledge tend to grow naturally through the very act of showing up, not before it.',
      },
      {
        title: 'The local mosque doesn\'t feel like a good fit',
        scenario:
          'A new Muslim visits a local mosque but doesn\'t feel a strong sense of belonging or connection there.',
        ruling:
          'It\'s entirely reasonable to visit more than one mosque or community before finding the right fit — communities genuinely vary in culture, language, and warmth toward newcomers, and there\'s no religious requirement to commit to the very first place visited. Continuing to search, rather than giving up on in-person community entirely, is worth the effort given how much it tends to matter long-term.',
      },
    ],
    faq: [
      {
        question: 'What should I expect on my first visit to a mosque?',
        answer:
          'Generally: removing shoes before entering the prayer area, a designated space for women (sometimes separate, sometimes a partitioned section), and a warm welcome in most communities toward visibly new faces. It\'s completely fine to simply observe the first time, ask questions of anyone nearby, or introduce yourself to the imam or another attendee as a new Muslim looking to connect.',
      },
      {
        question: 'What if there\'s no mosque near me at all?',
        answer:
          'Online communities specifically for new Muslims (many active, warm, and well-moderated ones exist) can meaningfully fill this gap, alongside connecting with any Muslims you may know personally, even if they don\'t attend a formal mosque themselves. Community can take different shapes depending on where you live — the goal is genuine connection, not one specific format.',
      },
    ],
  },
}