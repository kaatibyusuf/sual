// src/data/adab.js
//
// Adab Class — a sequential course on Islamic manners and etiquette.
// ADAB_UNITS defines the 12 units and the order of topics within
// each. ADAB_TOPICS holds the full lesson content, keyed by topic id.
//
// STATUS: Unit 1 (Foundations of Adab) has full lesson content.
// All other units currently have title + summary only (placeholder
// content) — to be filled in unit-by-unit. The Adab.jsx component
// checks `topic.content` and shows a "coming soon" state when it's
// missing, so the course renders correctly at every stage of being
// filled in.
//
// Original content, not reproduced from any existing source.

export const ADAB_UNITS = [
  {
    id: 'unit-1',
    title: 'Foundations of Adab',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'Adab Toward Allah',
    topics: ['allah-1', 'allah-2', 'allah-3', 'allah-4', 'allah-5'],
  },
  {
    id: 'unit-3',
    title: 'Adab of Worship',
    topics: ['worship-1', 'worship-2', 'worship-3', 'worship-4', 'worship-5'],
  },
  {
    id: 'unit-4',
    title: 'Adab Toward the Prophet ﷺ',
    topics: ['prophet-1', 'prophet-2', 'prophet-3'],
  },
  {
    id: 'unit-5',
    title: 'Adab Within the Family',
    topics: ['family-1', 'family-2', 'family-3', 'family-4', 'family-5'],
  },
  {
    id: 'unit-6',
    title: 'Adab of Speech',
    topics: ['speech-1', 'speech-2', 'speech-3', 'speech-4', 'speech-5'],
  },
  {
    id: 'unit-7',
    title: 'Adab of Daily Life',
    topics: ['daily-1', 'daily-2', 'daily-3', 'daily-4', 'daily-5', 'daily-6'],
  },
  {
    id: 'unit-8',
    title: 'Adab Toward Others',
    topics: ['others-1', 'others-2', 'others-3', 'others-4', 'others-5', 'others-6', 'others-7'],
  },
  {
    id: 'unit-9',
    title: 'Adab of Knowledge',
    topics: ['knowledge-1', 'knowledge-2', 'knowledge-3', 'knowledge-4'],
  },
  {
    id: 'unit-10',
    title: 'Adab in Society',
    topics: ['society-1', 'society-2', 'society-3', 'society-4', 'society-5'],
  },
  {
    id: 'unit-11',
    title: "Adab of Life's Difficult Moments",
    topics: ['difficult-1', 'difficult-2', 'difficult-3', 'difficult-4'],
  },
  {
    id: 'unit-12',
    title: 'Adab in the Modern World',
    topics: ['modern-1', 'modern-2', 'modern-3'],
  },
];

// Flat helper: ordered list of every topic id across all units, in
// course sequence. Used for "next/previous topic" and progress %.
export const ADAB_TOPIC_ORDER = ADAB_UNITS.flatMap((u) => u.topics);

export const ADAB_TOPICS = {
  // ─────────────────────────────────────────────────────────
  // UNIT 1 — FOUNDATIONS OF ADAB (full content)
  // ─────────────────────────────────────────────────────────
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'What is Adab?',
    summary: 'Understanding the meaning of Adab and how it differs from Akhlaq and Fiqh.',
    content: [
      {
        heading: 'The meaning of Adab',
        body: `Adab is an Arabic word usually translated as "manners," "etiquette," or "proper conduct," but the word carries more than any single English word can capture. Adab refers to knowing the right way to do something — the correct order, tone, timing, and spirit — in every situation a person faces, whether with Allah, with other people, or alone.

Where a rule tells you *what* to do, Adab tells you *how* to do it well. Two people can perform the same outwardly correct action — greeting a guest, eating a meal, disagreeing with someone — and one does it with Adab while the other does not, because Adab lives in the manner, not just the action.`,
      },
      {
        heading: 'Adab, Akhlaq, and Fiqh — how they relate',
        body: `These three words are often used together, but they are not the same thing:

Fiqh is the science of rulings — what is obligatory, recommended, disliked, or forbidden. Fiqh tells you the wudu is valid or invalid, the prayer is complete or incomplete.

Akhlaq refers to a person's inner character traits — honesty, patience, generosity, humility. Akhlaq is about who a person is on the inside.

Adab is the practical, situational expression of good character — the specific, learned conduct appropriate to a specific moment. A person with good Akhlaq (inner generosity) shows it through the Adab of how they host a guest (specific words, specific order of actions, specific attentiveness).

Adab is often described as the fruit of both knowledge and character combined into visible, practical behavior.`,
      },
      {
        heading: 'Why the scholars taught Adab before knowledge',
        body: `A well-known principle among the early scholars was to learn Adab before learning knowledge (ilm). Ibn al-Mubarak, a great scholar of hadith, is reported to have studied Adab for thirty years and Islamic knowledge for twenty years — because he understood that knowledge without Adab produces someone who is learned but harmful, arrogant, or difficult, while Adab without much knowledge still produces someone beneficial to be around.

This does not mean knowledge is unimportant — it means Adab is the soil in which knowledge should grow. Without it, knowledge can become a source of pride rather than benefit.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'Why Adab Matters in Islam',
    summary: 'The weight Islam places on character and conduct, not just correct rulings.',
    content: [
      {
        heading: 'The Prophet ﷺ was sent to perfect character',
        body: `The Prophet ﷺ said: "I have only been sent to perfect good character." This hadith frames the entire mission of the Prophet ﷺ — not only to deliver rulings and rituals, but to perfect how people treat one another, speak to one another, and carry themselves.

This is why so much of the Sunnah is not made up of legal rulings at all, but of recorded moments of the Prophet's ﷺ conduct: how he greeted people, how he ate, how he responded to insults, how he treated children, animals, and even his enemies.`,
      },
      {
        heading: 'Adab as a sign of complete faith',
        body: `The Prophet ﷺ said: "The most complete of the believers in faith are those with the best character." Good character and Adab are not presented in Islam as a nice extra layer on top of "real" religion — they are treated as a direct measure of a person's faith.

This is a reminder that a person's prayer, fasting, and knowledge are not the full picture of their religion. How they speak to their mother, how they treat a difficult neighbor, how they behave when no one is watching — these are also weighed.`,
      },
      {
        heading: 'Weight on the Scale',
        body: `The Prophet ﷺ said: "Nothing is heavier on the Scale of the believer on the Day of Judgment than good character." This hadith places good character — expressed through Adab — as something with real, weighed value in the akhirah, comparable in weight to acts of worship.

This should reshape how a person thinks about small daily moments of Adab: a gentle word, a patient response, a courteous greeting are not minor details. They are being placed on a scale that matters eternally.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'The Prophet ﷺ as the Perfect Model of Adab',
    summary: 'How the seerah shows Adab lived out in real situations, not just described.',
    content: [
      {
        heading: '"You are of a great moral character"',
        body: `Allah describes the Prophet ﷺ in the Qur'an: "And indeed, you are of a great moral character" (Surah al-Qalam, 68:4). This is one of the very few personal descriptions of the Prophet's ﷺ character given directly by Allah in the Qur'an, and it centers entirely on character, not on miracles or knowledge.

When Aisha (may Allah be pleased with her) was asked to describe the Prophet's ﷺ character, she said: "His character was the Qur'an" — meaning his daily conduct was a living demonstration of the Qur'an's teachings, not separate from them.`,
      },
      {
        heading: 'Adab shown in ordinary moments',
        body: `The seerah is filled with small, ordinary moments that show Adab far more than grand events do:

He would not eat while reclining, out of humility. He would patch his own sandals and mend his own clothes. He answered the call of whoever invited him, even a poor person or a slave. He greeted children he passed in the street. He was described as never being rude in the marketplace, never returning harm with harm, and always being the first to forgive.

These are not exceptional acts of worship — they are Adab, lived consistently in the smallest details of daily life. This is precisely why he is called the best example (uswah hasanah) for believers (Surah al-Ahzab, 33:21) — not because of miracles alone, but because his conduct is something every person can study and try to emulate in their own ordinary life.`,
      },
      {
        heading: 'Learning Adab by studying his responses',
        body: `One of the most valuable ways to learn Adab is to study how the Prophet ﷺ responded — not just acted — in difficult moments: when he was insulted, when he was physically harmed, when someone was rude to him, when a companion made a mistake.

Time and again, the pattern is patience, restraint, and choosing the response that brings the most benefit rather than the most immediate satisfaction. This pattern is itself a curriculum in Adab that later units in this course will draw on repeatedly.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'Adab and Iman — How Character Reflects Faith',
    summary: 'The direct link the Prophet ﷺ drew between faith and how a person treats others.',
    content: [
      {
        heading: '"He is not a believer..."',
        body: `The Prophet ﷺ used a distinctive teaching pattern to link Adab directly to faith, saying things like: "He is not a believer whose neighbor is not safe from his harm," and "None of you truly believes until he loves for his brother what he loves for himself."

Notice the strength of this language — not "it is better if" or "it is recommended that," but a statement about the completeness of one's belief itself. This is a deliberate teaching device: it stops a person from separating "how I pray" from "how I treat people" as if they were two different report cards.`,
      },
      {
        heading: 'Faith is not only private',
        body: `It can be tempting to think of faith as something private, between a person and Allah, measured by worship performed alone — prayer, fasting, dhikr. The hadith above corrects this: faith is also measured in public, in how a person is experienced by others.

A neighbor who does not feel safe from you, a guest you fail to honor, a family member you speak to harshly — these are not separate from your faith. They are data points in it.`,
      },
      {
        heading: 'Adab as evidence, not decoration',
        body: `This unit's overall theme is that Adab is not a decorative layer placed on top of "real" Islam — it is evidence of it. A person can have correct beliefs and perform every ritual precisely, and still fall short here if their conduct toward others is harsh, dishonest, or careless.

This is a sobering standard, but also a hopeful one: it means that the patience shown with a difficult child, the gentle response to an unfair comment, the honesty in a business deal — these ordinary moments are themselves substantial acts of faith, not small side notes to it.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: 'Adab of Intention (Niyyah) in Everyday Actions',
    summary: 'How the same outward action can be worship or waste, depending on intention.',
    content: [
      {
        heading: '"Actions are by intentions"',
        body: `The Prophet ﷺ said: "Actions are but by intentions, and every person will only have what they intended." This hadith is often introduced at the very start of hadith collections because it applies to everything that follows — including every topic of Adab in this course.

The same outward act of Adab — greeting someone warmly, helping a neighbor, speaking gently — can be an act of worship rewarded by Allah, or an empty social habit with no reward at all, depending entirely on the intention behind it.`,
      },
      {
        heading: 'Turning ordinary Adab into worship',
        body: `This principle is liberating rather than burdensome: it means a person does not need to wait for a formal act of worship to earn reward. Renewing the intention before ordinary moments of Adab — greeting family in the morning, being patient in traffic, speaking kindly to a difficult coworker — can transform routine conduct into something intentionally offered to Allah.

Many scholars have noted that a person of average worship but excellent, sincere Adab may be raised in rank above a person of much worship but poor character, precisely because of how intention and consistency multiply the value of small, repeated acts.`,
      },
      {
        heading: 'Guarding against showing off',
        body: `Because Adab is often visible to others — a public greeting, a visible act of generosity — there is a specific risk of doing it to be seen or praised rather than sincerely for Allah. This does not mean Adab should be hidden or performed reluctantly; it means the heart should be checked so that the reason for good conduct is sincerity, not image.

A simple practical habit some scholars recommend: before an act of good conduct, briefly renew the intention silently — "I am doing this for Allah's sake" — without needing to announce it to anyone else.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 2 — ADAB TOWARD ALLAH (full content)
  // ─────────────────────────────────────────────────────────
  'allah-1': {
    id: 'allah-1',
    unit: 'unit-2',
    title: 'Adab of Dua (Supplication)',
    summary: 'The manners of asking Allah — timing, humility, and sincerity in dua.',
    content: [
      {
        heading: 'Dua is worship itself, not just a request',
        body: `The Prophet ﷺ said: "Dua is worship." This single statement reframes what supplication actually is. It is easy to think of dua as a transaction — asking for something and waiting to see if it arrives — but Islam frames dua as an act of worship in its own right, regardless of the outcome. The very act of turning to Allah, admitting need, and voicing hope is itself something Allah loves from His servant.

This is why the Prophet ﷺ also warned against a person who "feels too proud to ask of Allah." Some people are comfortable asking other people for help but feel awkward or unnecessary asking Allah for small things — a good day, patience with a child, help finding parking. This hesitation misunderstands dua entirely. Nothing is too small, and no matter of the world is too insignificant to bring before Allah.`,
      },
      {
        heading: 'Adab before making dua',
        body: `Several manners are recommended before beginning a supplication, drawn from how the Prophet ﷺ and his companions approached Allah:

Purification, where practical — being in a state of wudu adds to the completeness of the moment, though dua is valid without it too. Facing the qiblah when possible, as a physical orientation that mirrors the spiritual one. Raising the hands, a gesture the Prophet ﷺ used often, as if to say the servant is empty-handed and lifting them toward the only One who can fill them.

Perhaps most overlooked is beginning with praise of Allah and sending salawat upon the Prophet ﷺ before asking for anything. A companion once heard a man rush straight into asking Allah for something without any praise beforehand, and the Prophet ﷺ told him to slow down — praise Allah, send blessings on the Prophet ﷺ, and only then ask. This order matters: it is the manner of someone entering the presence of a King, not casually shouting a request through the door.`,
      },
      {
        heading: 'Adab during the dua itself',
        body: `Certainty is a central manner in dua. The Prophet ﷺ instructed: "When you ask Allah, ask with certainty of being answered, and know that Allah does not answer a supplication that comes from a heedless, inattentive heart." A dua made half-heartedly, while the mind is elsewhere, lacks the very quality that makes dua powerful — sincere, present-hearted asking.

There is also an etiquette to persistence rather than impatience. The Prophet ﷺ said a person's dua continues to be answered so long as they do not become hasty and say, "I supplicated and supplicated, and I do not see it being answered," at which point they may stop asking altogether out of frustration. The correct manner is the opposite: to keep asking, without a self-imposed deadline on Allah.

Certain times and states carry particular weight for dua being accepted: the last third of the night, the time between the adhan and iqamah, the moment just before breaking a fast, the day of Jumu'ah, and while prostrating in prayer. A person seeking to have their dua answered would do well to concentrate their asking around these times rather than treating all moments as equal.`,
      },
      {
        heading: 'Adab after making dua',
        body: `Once a dua has been made, the manner of the heart afterward matters as much as the manner beforehand. Scholars explain that every dua is answered in one of three ways: it is granted as asked, it is exchanged for the removal of an equivalent harm, or it is stored up as a reward for the Day of Judgment. None of these three outcomes is a "no" in the sense of being wasted — this understanding is itself part of the Adab of dua, because it protects the heart from despair or resentment when an answer does not look the way it was expected to.

This is why patience and good expectation of Allah (husn al-zann) are described as inseparable from dua itself. A person who supplicates and then spends the following days anxious, doubting, or assuming Allah has ignored them has weakened the very act of worship they just performed. The complete Adab of dua closes the loop: ask sincerely, then trust the One asked.`,
      },
      {
        heading: 'Barriers that weaken dua',
        body: `The scholars have also identified matters that are known to weaken or block the acceptance of dua, and awareness of these is itself part of good Adab in supplication. Consuming unlawful (haram) earnings or food is mentioned specifically — the Prophet ﷺ described a man who travels far, disheveled and dusty, raising his hands to the sky calling out to his Lord, "yet his food is haram, his drink is haram, his clothing is haram, and he has been nourished with haram, so how can his dua be answered?"

Supplicating for something sinful, or asking Allah to sever family ties, are also mentioned as duas that will not be granted, regardless of how sincerely or persistently they are made — because they contradict the very purpose dua is meant to serve. Good Adab in dua, then, is not only about posture and timing; it extends backward into how a person lives, earns, and treats their family in the time between one dua and the next.`,
      },
    ],
  },

  'allah-2': {
    id: 'allah-2',
    unit: 'unit-2',
    title: 'Adab of Dhikr (Remembrance)',
    summary: 'How to remember Allah throughout the day with presence and sincerity.',
    content: [
      {
        heading: 'What dhikr is and why it matters',
        body: `Dhikr literally means "remembrance," and in practice it refers to any phrase, statement, or mental act that brings Allah to mind — saying SubhanAllah, Alhamdulillah, Allahu Akbar, La ilaha illallah, seeking forgiveness, or simply reflecting on Allah's creation and favor. The Qur'an describes remembrance of Allah as what brings tranquility to hearts, and the Prophet ﷺ described the one who remembers his Lord compared to the one who doesn't as the difference between the living and the dead.

Unlike Salah, dhikr has no fixed times, no minimum conditions, and no upper limit — it can be done standing, sitting, lying down, walking, working, or driving. This flexibility is itself a mercy: it means a person is never actually cut off from worship, no matter what they are doing with their hands or where their body happens to be.`,
      },
      {
        heading: 'Presence of heart, not just movement of tongue',
        body: `The single most important Adab of dhikr is that it engages the heart, not only the tongue. It is entirely possible to say "SubhanAllah" a hundred times while thinking about something else entirely, and while this still carries some reward, it falls far short of what dhikr is meant to be. The scholars describe the ideal dhikr as one where the meaning of the phrase is actually present in the mind as it is spoken — saying "Alhamdulillah" while genuinely calling to mind something to be grateful for, not simply producing the sound out of habit.

This is why some of the early generations were cautious about turning adhkar into fast, mechanical repetition — counting beads or repetitions quickly just to "finish" a set number. The number matters far less than the quality of attention behind it. A person who says a phrase of dhikr once, slowly, with real presence, has arguably done more than someone who rushes through a hundred repetitions absent-mindedly.`,
      },
      {
        heading: 'Times and occasions the Prophet ﷺ specified',
        body: `While dhikr has no fixed schedule, the Prophet ﷺ taught specific supplications and remembrances for specific moments of the day, and observing these is part of good Adab. There are morning adhkar and evening adhkar, recited around Fajr and around Asr/Maghrib respectively, that ask for protection through the coming hours. There is dhikr before sleeping, dhikr upon waking, dhikr upon entering and leaving the home, dhikr upon entering and leaving the masjid, and dhikr before and after eating.

These are not arbitrary rituals — they mark the transitions of daily life with an awareness of Allah, so that a person's day becomes threaded through with remembrance at its natural seams (waking, sleeping, entering, leaving, eating) rather than remembrance being a separate, occasional activity squeezed in when convenient.`,
      },
      {
        heading: 'Consistency over quantity',
        body: `The Prophet ﷺ said that the most beloved of deeds to Allah are those done consistently, even if small. This principle applies directly to dhikr: a short, simple dhikr repeated daily without fail is described as more valuable in the sight of Allah than an elaborate, lengthy dhikr practice done once and then abandoned.

This is a deliberately encouraging teaching for anyone who feels they cannot manage long sessions of remembrance. The Adab here is honesty about capacity — choosing a small, sustainable habit of dhikr and sticking to it, rather than committing to an ambitious routine out of enthusiasm only to drop it within a week. Aisha (may Allah be pleased with her) reported that the Prophet's ﷺ practice was to do righteous deeds consistently, even if that meant doing less of them, precisely because of this principle.`,
      },
      {
        heading: 'The virtue of gatherings of dhikr',
        body: `Dhikr also has a communal dimension. The Prophet ﷺ described angels who travel the earth specifically searching for gatherings of dhikr, and when they find one, they call out to each other to come and surround it, covering the people in it with their wings until the space between them and the lowest heaven is filled. He then described Allah asking the angels what His servants were saying, even though Allah already knows, simply to hear the angels praise the gathering — and Allah then declares that He has forgiven the people in it, even someone who happened to be sitting there for another reason entirely and not for the dhikr itself.

The Adab drawn from this is that seeking out gatherings where Allah is remembered — a study circle, a group reciting Qur'an, people discussing Allah's names and attributes — carries a value beyond what any individual in the gathering may realize, and is worth actively seeking rather than treating as optional or unnecessary once a person already does some dhikr alone.`,
      },
    ],
  },

  'allah-3': {
    id: 'allah-3',
    unit: 'unit-2',
    title: 'Adab of Gratitude (Shukr)',
    summary: 'Recognizing and expressing thankfulness for Allah\'s blessings.',
    content: [
      {
        heading: 'Shukr is heart, tongue, and limbs together',
        body: `Gratitude (shukr) in Islam is not reduced to saying "Alhamdulillah" after something good happens, though that is part of it. The scholars describe complete shukr as operating on three levels at once: the heart recognizing that the blessing came from Allah and no one else, the tongue verbally acknowledging and praising Allah for it, and the limbs actually using the blessing in a way that pleases Allah rather than in disobedience to Him.

A person who has been blessed with wealth and says "Alhamdulillah" but then spends that wealth entirely on things that harm themselves or others has fulfilled only the tongue's part of gratitude, while neglecting the far more demanding part — using the blessing itself as an act of thanks. True shukr for eyesight includes not using one's eyes to look at what is forbidden; true shukr for wealth includes giving in charity from it.`,
      },
      {
        heading: 'Gratitude increases the blessing',
        body: `Allah tells us in the Qur'an that if His servants are grateful, He will increase them, and if they are ungrateful, His punishment is severe. This is not merely a moral encouragement — it describes an actual spiritual mechanism: gratitude is presented as the means by which blessings multiply and remain, while ingratitude is what causes blessings to diminish or be taken away entirely.

This reframes gratitude from being simply a polite response to good fortune into being an active practice with real consequences. A grateful heart tends to notice more of what it already has, tends to use resources more wisely, and — Islamically speaking — is met with more from Allah in return. Ingratitude, by contrast, tends to breed a restless dissatisfaction that notices only what is missing, regardless of how much a person already possesses.`,
      },
      {
        heading: 'Gratitude in hardship, not only in ease',
        body: `It is relatively easy to feel grateful when life is going well. The deeper test of Adab toward Allah is maintaining gratitude — or at least avoiding complaint and despair — during hardship. The Prophet ﷺ described the affair of the believer as entirely good: if something pleasant happens, they are grateful, and that is good for them; if something difficult happens, they are patient, and that too is good for them. No one else has this described for them except the believer.

This does not mean pretending hardship doesn't hurt, or suppressing normal grief. It means recognizing that even in loss, a believer retains blessings that are easy to overlook — health that remains, family that remains, faith that remains, countless blessings from a single limb still working to the very air being breathed. The Prophet ﷺ advised looking at those who have been given less than you in worldly matters, rather than only at those who have more, specifically as a corrective for the ingratitude that comparison upward tends to produce.`,
      },
      {
        heading: 'Practical ways to build a habit of shukr',
        body: `Gratitude, like any Adab, is strengthened through deliberate practice rather than left to spontaneous feeling. A few concrete habits the scholars and the Sunnah point toward: naming specific blessings rather than only saying "Alhamdulillah" in general — actually identifying, even mentally, what is being thanked for. Making the prostration of gratitude (sujud al-shukr) upon receiving especially good news, a Sunnah act the Prophet ﷺ practiced. Saying "Alhamdulillahi 'ala kulli haal" (all praise is due to Allah in every condition) even during difficulty, training the tongue to default toward gratitude rather than complaint.

A further practice is regularly looking downward in worldly comparisons — at those with less health, less wealth, or less ease — specifically to recalibrate one's sense of what has already been given, since it is very easy for the mind to normalize blessings until they stop being noticed at all.`,
      },
      {
        heading: 'The danger of ingratitude (kufr al-ni\'mah)',
        body: `The opposite of shukr is not merely neglect — it is described using the same root word as disbelief (kufr), specifically kufr al-ni'mah, ingratitude toward a blessing. This is a strong term, and it is used deliberately: covering up or denying where a blessing came from is treated as a serious spiritual failing, not a minor lapse in manners.

A practical form of this is attributing one's success entirely to personal skill, hard work, or luck, with no acknowledgment of Allah's role at all — a mindset Qarun exhibited in the Qur'an when he said his wealth was given to him only because of knowledge he possessed, immediately before his downfall. The Adab of gratitude requires the opposite posture: crediting effort where it genuinely played a role, while never losing sight of the One who granted the ability, opportunity, and outcome in the first place.`,
      },
    ],
  },

  'allah-4': {
    id: 'allah-4',
    unit: 'unit-2',
    title: 'Adab of Humility and Submission',
    summary: 'Standing before Allah, and before others, without arrogance.',
    content: [
      {
        heading: 'Recognizing one\'s true size before Allah',
        body: `Humility before Allah (khudu' and tawadu') begins with an honest recognition of scale: the vastness of Allah's power, knowledge, and creation set against the smallness of a single human being's control over anything at all. A person did not choose to be born, does not control the beating of their own heart, cannot guarantee their next breath, and possesses knowledge that is, in the Qur'an's own description, like a drop compared to the ocean of Allah's knowledge.

This recognition is not meant to produce despair or a sense of worthlessness — a human being is honored by Allah and given a special status in creation. Rather, it is meant to produce a grounded humility that prevents the kind of arrogance that forgets where every ability, blessing, and outcome ultimately comes from.`,
      },
      {
        heading: 'Humility expressed physically in worship',
        body: `Islam does not leave humility as an abstract inner attitude alone — it is built directly into the physical postures of worship. The most explicit example is sujud (prostration), where the face — the part of the body most associated with dignity and pride — is placed on the ground, lower than every other part of the body. The Prophet ﷺ described the servant as being closest to their Lord while in this exact position.

This is a deliberate physical enactment of humility: a person cannot easily maintain arrogance in their heart while physically placing their forehead on the ground multiple times a day, if the posture is performed with real presence rather than as a mechanical motion. The repetition of this physical humbling, day after day, is itself part of how Salah trains the character over time.`,
      },
      {
        heading: 'Not relying on deeds, but on Allah\'s mercy',
        body: `A subtle but important form of humility concerns how a person views their own good deeds. The Prophet ﷺ was asked whether his own actions alone would earn him Paradise, and he answered no — not even him — except that Allah envelops him in mercy. This is a striking statement: even the best of creation did not consider his worship sufficient on its own merit, but relied ultimately on Allah's mercy.

This protects against a subtle form of arrogance that can creep into a person who prays regularly, fasts, gives charity, and does other good — a quiet sense of having "earned" Paradise or of being owed something by Allah. True humility holds both truths together: work diligently at good deeds, while never assuming those deeds alone guarantee anything, and remaining dependent on Allah's mercy rather than one's own record.`,
      },
      {
        heading: 'Guarding against pride after good deeds (\'ujb)',
        body: `Islamic scholarship specifically names a spiritual disease called 'ujb — self-admiration or pride in one's own good deeds — and treats it as something that can quietly destroy the very good deed it follows. A person may pray a long night prayer, or give a large amount in charity, and then privately feel impressed with themselves for it, perhaps looking down slightly on others who don't do the same.

The Adab that guards against this is remembering that the ability to do the good deed in the first place was itself a gift from Allah, not something self-generated. A person did not create their own willpower, their own health that allowed them to fast, or their own wealth that allowed them to give charity — all of it traces back to Allah's provision. Seen this way, there is very little room left for feeling superior over a deed that was, at every step, enabled by someone else's gift.`,
      },
      {
        heading: 'Submission to Allah\'s decree (qadar) with contentment',
        body: `The final dimension of humility toward Allah is accepting His decree — the outcomes of life that are outside of human control — without resentment or a sense of injustice. This does not mean passivity in the face of things a person can actually change; Islam expects effort, planning, and striving. It means that once effort has genuinely been made and an outcome still falls short of what was hoped for, the response is contentment (rida) rather than bitterness toward Allah.

The Prophet ﷺ described being amazed at the believer's situation precisely because of this — whatever Allah decrees for them turns out to be good for them, a perspective only available to someone who has genuinely submitted rather than merely tolerated their circumstances. This submission is itself an act of profound humility: acknowledging that Allah's wisdom in what He allows and what He withholds exceeds what a limited human perspective can fully evaluate in the moment.`,
      },
    ],
  },

  'allah-5': {
    id: 'allah-5',
    unit: 'unit-2',
    title: 'Adab of Repentance (Tawbah)',
    summary: 'How to return to Allah sincerely after a sin or shortcoming.',
    content: [
      {
        heading: 'Tawbah is a return, not merely regret',
        body: `The Arabic word tawbah comes from a root meaning "to return." Repentance in Islam is not simply feeling bad about a mistake — it is the act of actually turning back toward Allah after having turned away through sin. Allah describes Himself repeatedly in the Qur'an as At-Tawwab, the One who accepts repentance again and again, and states plainly that He loves those who repent.

This framing matters because it means sin, while serious, is never presented as a permanent disqualification from Allah's mercy. The relationship between a servant and Allah is designed with return built into it — the expectation is not that a person will never sin, but that when they do, the path back is always open and is, in fact, something Allah welcomes rather than merely tolerates.`,
      },
      {
        heading: 'The conditions of a sincere tawbah',
        body: `Scholars outline several conditions for a repentance to be considered complete and sincere, rather than a passing feeling of guilt. First, stopping the sin itself — a person cannot claim to be repenting from something they are still actively doing. Second, genuine regret over having committed it, a real sense in the heart that the act was wrong, not just embarrassment at having been caught or inconvenienced by its consequences.

Third, a firm resolve not to return to it, even if that resolve is later tested. Fourth, if the sin involved wronging another person — their wealth, their reputation, their rights — restoring what was taken or seeking their forgiveness, since Allah's forgiveness for a wrong done to a person is often described as tied to that person's own forgiveness or restitution being sought first.`,
      },
      {
        heading: 'Never despairing of Allah\'s mercy',
        body: `One of the gravest errors a person can make regarding tawbah is to conclude that a particular sin is too great, too repeated, or too shameful to be forgiven. Allah addresses this directly, telling His servants who have wronged themselves excessively not to despair of His mercy, affirming that He forgives all sins for whoever turns back to Him.

This teaching exists precisely because despair itself becomes a barrier to repentance — a person who believes forgiveness is impossible for them has little motivation to even attempt to return, and may instead continue further into sin on the assumption that it no longer matters. The correct Adab here is the opposite instinct: the greater the sin feels, the more urgently a person should turn to Allah, rather than the more reason they have to give up.`,
      },
      {
        heading: 'Renewing tawbah constantly, even without a major sin',
        body: `Tawbah is not reserved only for dramatic falls into major sin. The Prophet ﷺ, despite being protected from sin, is reported to have sought Allah's forgiveness seventy to a hundred times in a single day. This detail is instructive: if the best of creation maintained this constant habit of seeking forgiveness, it signals that tawbah is meant to be a regular, ongoing practice for everyone else — covering the small shortcomings, missed opportunities for good, moments of heedlessness, and imperfections in worship that accumulate even in an outwardly righteous life.

This reframes istighfar (seeking forgiveness) from being an emergency response reserved for serious wrongdoing into being a normal, daily habit — something said upon waking, after prayer, before sleeping, and throughout ordinary moments of the day.`,
      },
      {
        heading: 'The signs that a repentance has been accepted',
        body: `While only Allah knows with certainty whether a particular tawbah has been accepted, the scholars point to visible signs that tend to accompany a sincere one. A person's character genuinely improves rather than remaining the same. They actively avoid the circumstances, company, or situations that led them into the sin in the first place, rather than assuming willpower alone will be sufficient the next time those circumstances arise. Their heart becomes more attentive to Allah, often more so than before the sin occurred at all.

This last point captures something the early scholars observed: a sin sincerely repented from can, paradoxically, leave a person closer to Allah than they were before it happened — not because the sin was good, but because the humility, the fear of Allah, and the intensity of turning back that followed it produced a spiritual state that complacent obedience alone had not.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 3 — ADAB OF WORSHIP (full content, expanded)
  //
  // Qur'anic Arabic in this unit was checked against primary tafsir
  // sources (Ibn Kathir, Qurtubi, Tabari via quran.com and quran.
  // ksu.edu.sa) before writing. English renderings under each verse
  // are an original paraphrase of the meaning by the author of this
  // course, not copied from any single named published translation
  // (Sahih International, Yusuf Ali, etc.) — worded independently to
  // avoid reproducing a specific copyrighted translation, while
  // staying faithful to the accepted tafsir of each ayah. Hadith
  // Arabic follows the well-known wording in the collections cited;
  // scholarly review is still recommended before publishing, as
  // noted in this file's header.
  // ─────────────────────────────────────────────────────────
  'worship-1': {
    id: 'worship-1',
    unit: 'unit-3',
    title: 'Adab of Wudu and Purification',
    summary: 'The manners and etiquettes surrounding ritual purification.',
    content: [
      {
        heading: 'Purification as more than physical cleanliness',
        body: `Wudu is often described in Fiqh terms — the parts to wash, the order, what invalidates it — but its Adab dimension is just as important: wudu is meant to be a moment of spiritual preparation, not merely a physical checklist before Salah begins. The Prophet ﷺ tied purification directly to faith itself, saying "purification is half of faith," a striking statement that elevates something as ordinary as washing before prayer into a foundational act of the religion.

Approaching wudu with this awareness changes how it is performed. Rather than rushing through the motions while thinking about the day ahead, the Adab of wudu asks for presence — recognizing that this small ritual is itself preparing not just the body but the heart to stand before Allah.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الطُّهُورُ شَطْرُ الْإِيمَانِ',
            english: '"Purification is half of faith." — a saying that places something as ordinary as wudu at the very foundation of religious practice.',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The command of wudu in the Qur\'an',
        body: `Wudu is not merely a Sunnah practice built up by scholarly custom — it is commanded directly in the Qur'an, in the verse most often referred to as Ayat al-Wudu, the "verse of ablution." Allah addresses the believers directly, spelling out exactly which parts are washed and wiped, and in what order, before standing for prayer.

Reading this verse with attention is itself an act of Adab: it is a reminder that the specific limbs washed, the specific order followed, and the specific occasion (standing for Salah) are not incidental customs but a direct instruction from Allah to His believing servants.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ',
            english: 'O you who believe, when you rise to pray, wash your faces and your hands up to the elbows, and wipe over your heads, and (wash) your feet up to the ankles.',
            source: 'Surah al-Ma\'idah, 5:6',
          },
        ],
      },
      {
        heading: 'The manner of performing wudu',
        body: `Wudu begins with intention and with saying "Bismillah," and proceeds through its washings in a specific order — a structure the Prophet ﷺ was careful to maintain and teach precisely. Beyond the mechanics, the Sunnah also teaches moderation even in something as replenishable as water. The Prophet ﷺ passed by a companion, Sa'd, who was using a generous amount of water for wudu, and asked him what this extravagance was. Sa'd asked, "Is there extravagance even in wudu?" and the Prophet ﷺ replied yes, even if he were at a flowing river.

This is a remarkable teaching: the concern is not scarcity of water in that moment, but the character trait of moderation itself, cultivated even where resources appear unlimited. Adab, again, is shown to be about the manner of doing something correctly, not merely the fact of doing it.`,
      },
      {
        heading: 'Sins falling away with the water',
        body: `The Prophet ﷺ described a specific spiritual effect that accompanies wudu performed properly: as a person washes their face, their sins exit from their face with the water, or with the last drop of water; as they wash their hands, their sins exit from their hands; and so on, until they emerge from the wudu entirely cleansed of sin. This teaching gives wudu a weight far beyond hygiene — it is described as an actual means of spiritual purification running parallel to the physical one.

This is part of why the Adab of wudu includes not treating it as a mundane, mechanical habit performed the same way every single time without a moment's thought. A person who is aware of this hadith while performing wudu is likely to slow down slightly, to feel the water and the intention behind each washing, rather than simply going through the motions on autopilot.`,
      },
      {
        heading: 'Adab of the toilet and istinja before wudu',
        body: `Since purification often follows using the toilet, Islam attaches specific etiquette to that setting as well, extending Adab into one of the most private and easily neglected moments of daily life. The Sunnah includes entering with the left foot and saying a specific dua seeking refuge from harmful and impure beings, and exiting with the right foot along with a dua of gratitude for relief and wellbeing.

The Prophet ﷺ also taught not to face the qiblah or turn one's back fully to it while relieving oneself, out of respect for the direction of prayer, and emphasized thorough cleanliness (istinja) as a serious matter — he described two people being punished in their graves, one of them specifically for not being careful about cleanliness after using the toilet. This detail shows that Adab is not reserved only for visible, dignified moments of worship; it extends into the most mundane and hidden corners of daily life as well.`,
      },
      {
        heading: 'Maintaining wudu and its lasting virtue',
        body: `Beyond the moment of performing wudu itself, the Sunnah encourages maintaining a state of purity throughout the day where practical, rather than treating wudu as something renewed only at the last minute before Salah. The Prophet ﷺ described the believers on the Day of Judgment as being recognizable by radiant marks on their faces, hands, and feet — the very limbs washed in wudu — a mark of distinction earned through this small, repeated act of worship performed consistently throughout a lifetime.

The Adab drawn from this is to see wudu not as an inconvenient obligation squeezed in just before Salah, but as a habit worth maintaining throughout the day, and one that carries meaning well beyond the five daily prayers it technically enables.`,
      },
      {
        heading: 'Common shortcomings in the Adab of wudu',
        body: `A few common shortcomings are worth naming directly, since awareness of them is itself part of correcting them. Rushing through the washing so quickly that water does not properly reach every required part is one — the Prophet ﷺ once saw a man praying whose heel had been missed by the water and told him to repeat his wudu, warning of a specific punishment for heels left dry in wudu. Another is performing wudu purely as a mechanical habit with no attention at all to the intention or the hadith of sins falling away, reducing an act with real spiritual weight to an empty physical routine.

A third, more social shortcoming is being wasteful or careless with water in shared spaces — leaving taps running, splashing others, or taking far longer than necessary in a shared washroom before prayer, which is itself a small failure of consideration for others even within an act of individual worship.`,
      },
    ],
  },

  'worship-2': {
    id: 'worship-2',
    unit: 'unit-3',
    title: 'Adab of Salah',
    summary: 'Proper conduct before, during, and after the five daily prayers.',
    content: [
      {
        heading: 'The command to establish prayer for Allah\'s remembrance',
        body: `Salah is commanded throughout the Qur'an in many places, but one especially direct instruction ties the purpose of prayer explicitly to remembrance of Allah — not to ritual for its own sake. Allah's words to Musa (peace be upon him) frame prayer's very purpose in the simplest possible terms.

Holding this purpose in mind before entering Salah is itself an act of Adab: it reframes the five daily prayers not as a box to check, but as the appointed means by which a person keeps Allah present in their awareness throughout the day.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
            english: 'And establish prayer for My remembrance.',
            source: 'Surah Ta-Ha, 20:14',
          },
        ],
      },
      {
        heading: 'Preparing the heart before Salah begins',
        body: `The Adab of Salah begins before the first takbir is even said. Approaching prayer calmly rather than rushing is a specific Sunnah teaching — the Prophet ﷺ instructed that when the iqamah is called, people should walk to the prayer with calm dignity (sakinah), not hurrying, and should join whatever portion of the prayer they catch rather than running to catch the beginning. Whatever is missed can be completed afterward; what matters is entering the prayer in a settled state, not out of breath and distracted.

Dressing with care also matters — the Qur'an instructs taking one's adornment at every masjid, meaning presenting oneself with a degree of care and dignity for prayer, not the most careless appearance available. Both of these teachings point to the same underlying Adab: Salah deserves a person's settled, prepared best, not whatever is left over after everything else has been rushed through.`,
      },
      {
        heading: 'Khushu\' and stillness during the prayer',
        body: `Khushu' — humble concentration and presence of heart — is described in the Qur'an as a defining quality of the successful believers, specifically in the context of their prayer. Practically, this includes fixing one's gaze on the place of prostration rather than letting the eyes wander, maintaining stillness in the limbs rather than fidgeting, adjusting clothing, or looking around, and moving through the positions of Salah at an unhurried, complete pace rather than rushing.

The Prophet ﷺ gave a severe warning regarding rushing through Salah's movements, using an unusually strong comparison to make the point unmistakable.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَسْوَأُ النَّاسِ سَرِقَةً الَّذِي يَسْرِقُ مِنْ صَلَاتِهِ',
            english: '"The worst of people in theft is the one who steals from his own prayer." When asked how a person could steal from their own prayer, the Prophet ﷺ explained: by not completing its bowing and prostration properly.',
            source: 'Musnad Ahmad',
          },
        ],
      },
      {
        heading: 'Congregational Adab',
        body: `When praying in congregation, additional etiquette applies. Rows should be straightened and gaps closed before the prayer begins — the Prophet ﷺ was known to physically check and align the shoulders and feet of the row before starting, and warned that Allah would cause disunity among the hearts of those who left gaps in the rows. Followers are also instructed not to precede the imam in any movement — not bowing, prostrating, or rising before he does — since the imam is appointed precisely to be followed, not raced against.

These congregational manners reflect a broader Adab principle: worship performed together carries a social dimension of order and unity that individual worship does not, and neglecting these details, however minor they may seem, is treated as a real lapse in how the prayer is properly performed together.`,
      },
      {
        heading: 'Salah as a restraint from wrongdoing',
        body: `The Qur'an does not present Salah as an isolated ritual disconnected from daily conduct — it explicitly ties genuine prayer to a restraining effect on a person's behavior outside of it. This is a useful measure of a person's own Salah: prayer that leaves no trace at all on how a person behaves toward others in the hours between one prayer and the next has not yet achieved what Salah is meant to achieve.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',
            english: 'Indeed, prayer restrains from immorality and wrongdoing.',
            source: 'Surah al-\'Ankabut, 29:45',
          },
        ],
      },
      {
        heading: 'Adab after the prayer concludes',
        body: `The end of Salah is not a signal to immediately rush off to the next task. The Sunnah includes a series of adhkar recited after the obligatory prayers — seeking forgiveness, affirming Allah's oneness and greatness, and specific phrases of praise repeated a set number of times — before rising to leave. The Prophet ﷺ would remain seated briefly in this remembrance rather than standing up the instant the final salam was completed.

This closing period of dhikr functions as a kind of gentle transition, allowing the state of presence built during the prayer to extend a little longer rather than being switched off abruptly the moment the prayer technically ends. It reflects the same underlying Adab theme found throughout worship: the manner of moving out of an act of worship matters, not only the manner of entering it.`,
      },
      {
        heading: 'Handling distraction and whispers during prayer',
        body: `It is common, even for very devoted worshippers, to experience wandering thoughts or a sense of restlessness during Salah — described in the Sunnah as whispers from Shaytan specifically intended to spoil the quality of prayer. The Prophet ﷺ taught a practical response to a companion who complained that Shaytan was interfering with his prayer and recitation: to seek refuge in Allah from Shaytan and to spit lightly to the left three times (without actual saliva, simply a light exhale-and-turn gesture), which the companion later reported resolved the issue entirely.

The Adab here is twofold: first, recognizing that such distraction is a normal and known experience, not a sign of a uniquely weak or insincere worshipper; and second, having an active, taught response to it rather than simply giving up on concentration or assuming nothing can be done. Salah's quality is treated as something worth actively defending during the prayer itself, not just prepared for beforehand.`,
      },
    ],
  },

  'worship-3': {
    id: 'worship-3',
    unit: 'unit-3',
    title: 'Adab of the Masjid',
    summary: 'How to enter, behave in, and leave the mosque respectfully.',
    content: [
      {
        heading: 'Entering the house of Allah',
        body: `The masjid holds a distinct status in Islam — it is described as the most beloved of places to Allah, in contrast with marketplaces, described as the most disliked. This contrast is itself instructive: the masjid is meant to be approached with an awareness that it is qualitatively different from any other building a person enters during the day.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَحَبُّ الْبِلَادِ إِلَى اللَّهِ مَسَاجِدُهَا، وَأَبْغَضُ الْبِلَادِ إِلَى اللَّهِ أَسْوَاقُهَا',
            english: '"The most beloved of places to Allah are the mosques, and the most disliked of places to Allah are the marketplaces."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Who truly maintains the mosques of Allah',
        body: `The Qur'an describes those who "maintain" or "populate" the mosques of Allah — through attendance, upkeep, and genuine devotion — as being defined by their belief and worship, not merely by physical presence or by claims of ownership over a place of worship. This verse was revealed in a context contrasting sincere believers with those who claimed status through the mosque without matching devotion.

The Adab drawn from this is that simply having a mosque nearby, or occasionally visiting one, does not itself fulfill what this verse describes — genuine maintaining of the masjid's spirit is measured by consistent belief and worship, not proximity or occasional attendance.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ',
            english: 'The mosques of Allah are truly maintained only by those who believe in Allah and the Last Day, establish prayer, and give zakat.',
            source: 'Surah at-Tawbah, 9:18',
          },
        ],
      },
      {
        heading: 'Tahiyyatul Masjid — greeting the mosque before sitting',
        body: `The Prophet ﷺ instructed that when anyone enters the masjid, they should not sit down until they have prayed two rak'ahs, a practice known as Tahiyyatul Masjid, the "greeting of the mosque." This applies even if the person has already prayed elsewhere and is simply passing through, and even if it is a time when other prayers might be discouraged, in which case shorter alternatives are recommended rather than skipping the greeting altogether.

The Adab embedded in this practice is that a person does not simply occupy the space of the masjid the way they might sit down in any ordinary room — entry into this particular space calls for an immediate, small act of worship first, as a kind of respectful acknowledgment before settling in.`,
      },
      {
        heading: 'Manners while inside the masjid',
        body: `Several specific etiquettes govern behavior once inside. Voices should be lowered — the masjid is not the place for loud conversation, business negotiation, or public announcements unrelated to worship; the Prophet ﷺ specifically discouraged buying, selling, and advertising lost items inside the mosque, redirecting such matters outside. Walking in front of someone who is actively praying is also forbidden — the Prophet ﷺ said that if a person passing in front of someone praying knew the magnitude of that sin, they would prefer to wait even a very long time rather than pass in front of them.

Cleanliness of the space itself is also part of this Adab — the masjid is a shared space maintained through the courtesy of everyone who uses it, and matters as simple as removing shoes carefully, not stepping over seated worshippers to reach a gap in a row, and not leaving mess behind are all treated as part of respecting a house of Allah rather than incidental housekeeping.`,
      },
      {
        heading: 'Respect toward fellow worshippers',
        body: `Beyond formal prohibitions, the Adab of the masjid includes a general spirit of consideration toward everyone else sharing the space. This includes not stepping over people already seated to reach a spot further along a row, not disturbing someone deep in dhikr, recitation, or prayer with unnecessary conversation, and not treating the masjid as a place to display irritation or impatience with others.

The Prophet ﷺ also taught bringing a level of physical presentability to the masjid — clean clothing, attention to removing offensive odors (such as after eating garlic or onions raw), out of consideration for those who will be standing shoulder to shoulder in prayer. Respect for fellow worshippers, in other words, extends even into small physical courtesies most people would not immediately associate with "worship" at all.`,
      },
      {
        heading: 'The special honor of masjid attendance',
        body: `Beyond individual etiquette, the Sunnah attaches genuine spiritual weight to the act of walking to and attending the masjid, especially in congregation. The Prophet ﷺ described a person's steps toward the masjid as themselves being counted — one step raising them a degree and one step erasing a sin — for every single step taken, regardless of distance. This transforms something as ordinary as a short walk into an act with real, accumulating value.

The Adab this encourages is to not treat the walk to the masjid as a neutral inconvenience to be minimized, but as an opportunity worth valuing in itself — including, for those able, choosing to walk a slightly longer route or arrive earlier rather than always seeking the fastest, most minimal path to fulfilling the prayer obligation.`,
      },
      {
        heading: 'Leaving the masjid with the same care as entering it',
        body: `Just as entry into the masjid carries specific Adab, so does departure. The Sunnah teaches leaving with the left foot, along with a dua asking Allah for His grace and bounty — a small but deliberate mirror of the entry dua, marking the transition back out into the world in the same intentional way the entry marked the transition in.

There is also a broader Adab of not rushing to leave the instant a prayer or gathering ends, particularly after congregational Salah, where lingering briefly for the after-prayer adhkar is encouraged before departing. Taken together, the Adab of the masjid frames the entire visit — from the first step in to the last step out — as a deliberate, bookended act of worship, rather than a neutral errand that simply happens to include praying somewhere in the middle.`,
      },
    ],
  },

  'worship-4': {
    id: 'worship-4',
    unit: 'unit-3',
    title: 'Adab of Handling and Reciting the Qur\'an',
    summary: 'Respect for the physical mushaf and the manners of recitation.',
    content: [
      {
        heading: 'Physical respect for the mushaf',
        body: `The Qur'an holds a unique status as the literal speech of Allah, and this status is reflected in specific etiquettes for how the physical copy (mushaf) is treated. It should not be placed on the floor, should not be placed lower than other books are stacked, and is generally recommended to be handled in a state of purity (wudu), following the guidance that only the purified should touch it.

These practices are not superstition or excessive formality — they are a physical enactment of the same principle found throughout this unit: the outward manner of engaging with something reflects, and reinforces, the inward reverence held for it. A person who is careless with the mushaf physically will likely find that carelessness reflected in how attentively they engage with its meaning as well.`,
      },
      {
        heading: 'The command of measured recitation (tartil)',
        body: `Allah instructs the Prophet ﷺ directly regarding how the Qur'an should be recited — not quickly or carelessly, but in tartil, a measured, deliberate rhythm that allows every letter to be pronounced clearly. Ibn Kathir explains this instruction as recitation "at ease," since this manner assists both the reciter and the listener in understanding and reflecting on the meaning.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
            english: 'And recite the Qur\'an in a slow, measured, well-articulated manner.',
            source: 'Surah al-Muzzammil, 73:4',
          },
        ],
      },
      {
        heading: 'Etiquette of recitation',
        body: `Before beginning to recite, the Sunnah teaches seeking refuge in Allah from Shaytan ("A'udhu billahi minash-shaytanir-rajim"), following the Qur'anic instruction to do so before reciting. Recitation itself is meant to be unhurried, with attention to correct pronunciation (tajweed) — not rushed through as if reciting were a race to complete a certain number of pages, but read in the tartil manner just described.

Beyond correct pronunciation, the deeper Adab of recitation is engagement with meaning — pausing to reflect on verses, particularly ones describing Allah's mercy, His punishment, or a call to action, rather than allowing the tongue to move through familiar words while the mind is entirely elsewhere. The companions were known to sometimes spend an entire night on a single verse, repeating it slowly while reflecting deeply on its meaning, rather than treating recitation purely as a quantity-based habit.`,
      },
      {
        heading: 'The Adab of listening when the Qur\'an is recited',
        body: `Adab surrounding the Qur'an is not only for the reciter — it extends to whoever is present while it is being recited. Allah instructs directly that when the Qur'an is recited, listeners should give it their full attention and remain silent, with mercy promised as the fruit of this attentiveness. Many commentators note this applies both within Salah, when listening to an imam's recitation, and in gatherings outside of it.

This means that continuing a separate conversation, scrolling on a phone, or otherwise treating a live Qur'an recitation as background noise runs directly against an explicit instruction, not merely an informal preference.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ',
            english: 'And when the Qur\'an is recited, listen attentively to it and remain silent, so that you may receive mercy.',
            source: 'Surah al-A\'raf, 7:204',
          },
        ],
      },
      {
        heading: 'The virtue of learning and teaching the Qur\'an',
        body: `The Prophet ﷺ placed a distinct honor on those engaged with the Qur'an on both ends — as learners and as teachers — describing this as the single best thing a person could be occupied with among their peers.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
            english: '"The best among you is the one who learns the Qur\'an and teaches it."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Appropriate settings and postures for recitation',
        body: `While the Qur'an can technically be recited from memory in most circumstances, certain settings are considered inappropriate for reciting or even carrying the physical mushaf — such as impure places like a bathroom. Facing the qiblah while reciting is recommended where practical, though not obligatory, as an additional physical gesture of respect layered on top of the recitation itself.

Sitting with a dignified posture — rather than, for example, reciting while lying carelessly or in a state of extreme distraction — is also part of the recommended Adab, echoing the same principle already seen with wudu and Salah: the physical circumstances surrounding an act of worship are not incidental to it, but are treated as part of honoring the act properly.`,
      },
      {
        heading: 'Not abandoning the Qur\'an once learned',
        body: `A distinct warning is given regarding the Qur'an specifically: the Prophet ﷺ compared the one who has memorized portions of the Qur'an to someone holding a tied-up camel — if they keep hold of it and tend to it, it stays with them, but if they let it go, it escapes and is lost. This is a direct warning against learning or memorizing Qur'an and then neglecting regular review, allowing what was gained to fade away through simple inattention.

The Adab drawn from this is that engagement with the Qur'an is meant to be an ongoing, maintained relationship rather than a project completed once and set aside — regular recitation, even of what has already been learned, is treated as necessary upkeep, not optional repetition of something already "finished."`,
      },
    ],
  },

  'worship-5': {
    id: 'worship-5',
    unit: 'unit-3',
    title: 'Adab of Fasting',
    summary: 'The inner and outer manners that complete the fast beyond hunger and thirst.',
    content: [
      {
        heading: 'The prescription of fasting and its purpose',
        body: `Fasting is commanded directly in the Qur'an, addressed to those who believe, and its stated purpose is given in the very same verse: not hunger for its own sake, but the cultivation of taqwa — God-consciousness. This framing matters for Adab: it means the entire point of fasting is missed if a person completes the physical act (no food, no drink) without any corresponding growth in awareness of Allah and restraint in conduct.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ',
            english: 'O you who believe, fasting has been prescribed for you as it was prescribed for those before you, so that you may attain taqwa (God-consciousness).',
            source: 'Surah al-Baqarah, 2:183',
          },
        ],
      },
      {
        heading: 'Fasting as a uniquely hidden act of worship',
        body: `Fasting occupies a distinctive place among acts of worship because it is, by nature, invisible — a person could eat or drink in complete privacy and no one would know their fast had been broken. Allah describes fasting in a hadith qudsi as belonging to Him specifically, and states that He alone will reward it, precisely because of this hidden quality: every other act of worship carries some outward, visible dimension, while fasting is verified by nothing but a person's own sincerity before Allah.

This gives fasting a unique Adab dimension: since no one is checking, the entire integrity of the fast rests on the intention and honesty of the person observing it. A fast is, in this sense, one of the purest possible tests of sincerity in worship — there is no social credit to be gained by faking it and no way for anyone else to catch a private lapse.`,
      },
      {
        heading: 'The etiquette and blessing of suhoor',
        body: `The Prophet ﷺ specifically encouraged eating suhoor (the pre-dawn meal), saying there is blessing in it, and encouraged delaying it close to the start of Fajr rather than eating it early in the night and going back to sleep. The Qur'an itself marks the boundary of this pre-dawn eating window with a vivid image: eating and drinking is permitted until the first visible thread of dawn light can be distinguished from the darkness of night.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَكُلُوا وَاشْرَبُوا حَتَّىٰ يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ',
            english: 'And eat and drink until the white thread of dawn becomes distinct from the black thread of night.',
            source: 'Surah al-Baqarah, 2:187',
          },
        ],
      },
      {
        heading: 'Guarding the fast beyond food and drink',
        body: `Perhaps the most important Adab of fasting is the recognition that abstaining from food and drink is only the outward shell of the act — the deeper substance concerns guarding one's speech and behavior throughout the day. The Prophet ﷺ warned in stark terms that Allah has no need of the fast of someone who does not also give up false speech and the actions that go with it.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ',
            english: '"Whoever does not give up false speech and acting upon it, Allah has no need of him giving up his food and his drink."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'The etiquette of breaking the fast (Iftar)',
        body: `The Sunnah teaches hastening to break the fast as soon as sunset is confirmed, rather than delaying unnecessarily out of excessive caution or asceticism — the Prophet ﷺ said the people will remain upon good so long as they hasten in breaking their fast. This is paired with a specific dua recommended at the moment of breaking the fast, and the recommendation to break with dates and water where available, following the Prophet's ﷺ own practice.

There is also a strong emphasis on feeding others at iftar — the Prophet ﷺ said whoever feeds a fasting person to break their fast receives a reward equal to that of the fasting person, without any reduction in the fasting person's own reward. This turns iftar into a naturally communal and generous moment, rather than simply an individual meal marking the end of a day's abstinence.`,
      },
      {
        heading: 'Patience, irritability, and the fasting person\'s response to conflict',
        body: `A distinctly practical piece of Adab concerns how a fasting person is instructed to respond if provoked, insulted, or drawn into an argument during the day. Rather than escalating, the Sunnah teaches a fasting person to simply say aloud, "I am fasting," as both a reminder to themselves and a clear signal to the other party, rather than exchanging insult for insult or raising their voice in response.

This single small instruction captures the entire spirit of this topic: the fast is not simply a private matter of the stomach — it is meant to visibly shape how a person carries themselves through friction and provocation over the course of an entire day, precisely at the moments patience is hardest to maintain.`,
      },
      {
        heading: 'The heightened manners of Ramadan specifically',
        body: `While fasting can technically be observed at other times of the year, Ramadan carries its own intensified Adab, since it is described as the month in which the Prophet ﷺ was at his most generous — more generous, the companions said, than a fast-blowing wind — particularly during the nights he spent reviewing the Qur'an with the angel Jibril. Increased charity, increased Qur'an recitation, and increased care for family and community are all part of the elevated standard of conduct associated specifically with this month.

Some also observe i'tikaf — a period of seclusion in the masjid, particularly in the last ten nights, dedicated entirely to worship and reflection, a practice the Prophet ﷺ maintained every year of his life in Madinah. Even for those who do not perform i'tikaf, the broader Adab of Ramadan asks for a heightened, more deliberate version of every manner already covered in this unit — more attentive Salah, more careful speech, more consistent Qur'an engagement — treating the month as a concentrated training period for character that is meant to carry forward well beyond its final night.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 4 — ADAB TOWARD THE PROPHET ﷺ (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Qurtubi, Ibn Kathir via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'prophet-1': {
    id: 'prophet-1',
    unit: 'unit-4',
    title: 'Sending Salawat Upon the Prophet ﷺ',
    summary: 'The virtue, occasions, and manners of sending blessings upon him ﷺ.',
    content: [
      {
        heading: 'A command given by Allah Himself',
        body: `Sending salawat (blessings) upon the Prophet ﷺ is not a custom that developed among later generations of Muslims out of affection alone — it is a direct command from Allah, who tells the believers that He and His angels already do this, and instructs the believers to join in.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا',
            english: 'Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, invoke blessings upon him and greet him with a worthy greeting of peace.',
            source: 'Surah al-Ahzab, 33:56',
          },
        ],
      },
      {
        heading: 'What sending salawat actually means',
        body: `The scholars explain that "salah" (blessing) carries a different meaning depending on who performs it. When Allah sends salah upon the Prophet ﷺ, it refers to His praise and mercy shown toward him in the highest gathering of angels. When the angels send salah, it refers to their supplication and seeking of forgiveness on his behalf. When believers are commanded to send salah, it refers to their supplication asking Allah to grant him honor, mercy, and peace.

Understanding this distinction matters for Adab: a believer saying "Allahumma salli ala Muhammad" is not merely repeating a formula, but actively asking Allah for something specific on behalf of the Prophet ﷺ — joining, in their own small way, a form of honor that Allah and His angels are already extending.`,
      },
      {
        heading: 'The taught wording — Salat al-Ibrahimiyyah',
        body: `When this verse was revealed, a companion asked the Prophet ﷺ how exactly the believers should send salah upon him, since the greeting of peace (salam) was already familiar to them. The Prophet ﷺ taught a specific wording in response — the same wording recited in the tashahhud of every prayer.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
            english: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim; indeed You are Praiseworthy, Glorious.',
            source: 'Sahih al-Bukhari (via the occasion of revelation of 33:56)',
          },
        ],
      },
      {
        heading: 'A reward multiplied tenfold',
        body: `Beyond the Qur'anic command itself, the Prophet ﷺ described a direct, personal benefit that returns to whoever sends salawat upon him — not a vague spiritual reward, but something specific and immediate.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ صَلَّى عَلَيَّ وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا',
            english: '"Whoever sends blessings upon me once, Allah will send blessings upon him tenfold because of it."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The miser who withholds salawat',
        body: `Given how simple and immediately rewarding this act is, the Prophet ﷺ used an unusually pointed word to describe someone who hears his name mentioned and does not take the moment to send salawat.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ',
            english: '"The miser is the one in whose presence I am mentioned, yet he does not send blessings upon me."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Occasions when salawat is especially recommended',
        body: `While salawat can be said at any time, certain moments are singled out in the Sunnah as carrying particular virtue: on the day and night of Jumu'ah (Friday), since the Prophet ﷺ specifically encouraged increasing salawat on this day; after hearing the adhan; before making dua, as a means of that dua being more readily accepted; when entering and leaving the masjid; and, as already covered, whenever his name is mentioned or heard.

The Adab here is treating salawat not as a rare, special-occasion act reserved for religious gatherings, but as something woven naturally into these small, frequent moments that already occur throughout an ordinary day and week.`,
      },
      {
        heading: 'Nearness to the Prophet ﷺ on the Day of Judgment',
        body: `The Prophet ﷺ connected the practice of sending salawat to a person's closeness to him in the Hereafter, describing the people closest to him on the Day of Judgment as those who sent the most blessings upon him in this life. This transforms salawat from a purely present-focused act of worship into something with a stated, personal stake in the life to come — a direct, describable relationship between a habit built now and a nearness hoped for later.`,
      },
    ],
  },

  'prophet-2': {
    id: 'prophet-2',
    unit: 'unit-4',
    title: 'Adab of Loving and Following the Sunnah',
    summary: 'What it means to love the Prophet ﷺ through action, not just feeling.',
    content: [
      {
        heading: 'Love proven through following, not merely felt',
        body: `The Qur'an gives an unusually direct test for a claim that is otherwise easy to make without any real substance behind it: loving Allah. Rather than accepting the claim on its own, Allah instructs the Prophet ﷺ to respond with a specific condition — genuine love for Allah is demonstrated by following him.`,
        verses: [
          {
            type: 'quran',
            arabic: 'قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ ۗ وَاللَّهُ غَفُورٌ رَّحِيمٌ',
            english: 'Say, "If you truly love Allah, then follow me; Allah will love you and forgive you your sins." And Allah is Forgiving, Merciful.',
            source: 'Surah Aal \'Imran, 3:31',
          },
        ],
      },
      {
        heading: 'A commentary worth sitting with',
        body: `Commenting on this verse, one early scholar offered a chain that is worth reading slowly: the sign of loving Allah is loving the Qur'an; the sign of loving the Qur'an is loving the Prophet ﷺ; the sign of loving the Prophet ﷺ is loving his Sunnah — and each of these, in turn, is measured by action, not sentiment alone.

This chain is a useful diagnostic tool for Adab: a person who claims deep love for Allah but shows no real interest in the Qur'an, or claims love for the Prophet ﷺ but shows no real interest in how he actually lived, has a claim unsupported by the very evidence the Qur'an itself asks for.`,
      },
      {
        heading: 'The best example, meant to be studied and applied',
        body: `The Qur'an describes the Prophet ﷺ as the excellent model for anyone whose hope is genuinely fixed on Allah and the Last Day — not a model reserved for scholars or the exceptionally devout, but one held up for "whoever" holds that hope.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا',
            english: 'There has certainly been for you in the Messenger of Allah an excellent example for whoever hopes in Allah and the Last Day and remembers Allah often.',
            source: 'Surah al-Ahzab, 33:21',
          },
        ],
      },
      {
        heading: 'Following the Sunnah as a whole life, not a set of rituals',
        body: `A common narrowing occurs when "following the Sunnah" is reduced only to specific ritual acts — a particular style of dress, a particular way of eating, or specific supererogatory prayers — while the Prophet's ﷺ patience, honesty, mercy toward the weak, and gentleness in disagreement are treated as separate from "the Sunnah" itself. This is a mistaken narrowing. The seerah shows a man whose Sunnah touched every dimension of daily conduct, not only its most visibly religious moments.

Genuine Adab in following the Sunnah asks a person to look at the full range of what has been preserved of the Prophet's ﷺ life — his conduct in the marketplace, his treatment of his family, his response to insult, his mercy toward children and animals — and to see all of it as part of the same following that the ritual acts belong to, not a separate, lesser category.`,
      },
      {
        heading: 'The danger of a claim without substance',
        body: `Several scholars have observed that this verse in Aal 'Imran was revealed, in part, in response to certain groups who claimed a special love for or closeness to Allah without any accompanying obedience — an assumed spiritual status not backed by conduct. The verse corrects this directly: the claim alone proves nothing; only the following does.

This remains directly relevant Adab today. A person can hold the Prophet ﷺ in the highest verbal esteem, defend his honor passionately in conversation, and yet show little actual interest in adjusting their own conduct to match what he taught. The Qur'an's test cuts through exactly this gap — sincerity is measured by the following, not by the intensity of the feeling alone.`,
      },
      {
        heading: 'Following without extremism',
        body: `Genuine love for the Sunnah is not the same as inventing extra devotion beyond what was taught, however well-intentioned. The Prophet ﷺ corrected several companions who, out of what they thought was heightened devotion, resolved to fast every day without break, pray the entire night without sleep, or avoid marriage altogether — telling them plainly that he fasted and also broke his fast, prayed and also slept, and married, and that whoever turns away from his example in this way does not truly belong to his way.

The Adab here is a balance that can be easy to lose in either direction: neither treating the Sunnah as an optional inconvenience to be minimized, nor treating personal, invented extremes of worship as a superior substitute for the moderate, sustainable pattern the Prophet ﷺ actually modeled and explicitly endorsed.`,
      },
      {
        heading: 'Loving the Sunnah in small, unremarkable matters too',
        body: `Genuine love for the Prophet's ﷺ example tends to show itself most clearly not in grand religious moments but in small, easily overlooked details of daily life he is reported to have observed: eating and drinking with the right hand, saying "Bismillah" before a meal, entering a room right-foot-first, smiling readily, and greeting people warmly.

None of these carry major legal weight on their own, but the Adab of loving the Sunnah treats them as worth caring about anyway — not because neglecting them is sinful, but because a person who loves someone naturally wants to resemble them, even in the small, unremarkable habits that make up most of an ordinary day.`,
      },
    ],
  },

  'prophet-3': {
    id: 'prophet-3',
    unit: 'unit-4',
    title: 'Adab When His ﷺ Name is Mentioned',
    summary: 'The etiquette of hearing or saying the name of the Prophet ﷺ.',
    content: [
      {
        heading: 'Sending salawat at the moment his name is heard',
        body: `As covered in this unit's first topic, hearing the Prophet's ﷺ name mentioned is itself treated as a small but real trigger for action — a moment calling for salawat, not passive listening. The Prophet ﷺ used the strong word "miser" for someone who lets this moment pass without responding to it, which is a useful reminder of how seriously this small Adab is treated in the Sunnah, even though it costs almost nothing to observe.`,
      },
      {
        heading: 'Saying it every time, not only the first time',
        body: `A common shortcut is to send salawat (or write "ﷺ") the first time the Prophet's ﷺ name appears in a conversation, a lecture, or a piece of writing, and then to drop it for every subsequent mention in the same sitting or document. While understandable as a habit, scholars have noted that the fuller Adab is to renew this response with each mention, since each individual mention of his name is its own occasion calling for the same response, not a single occasion satisfied once and then closed.

This is a small discipline, easy to treat as a formality, but it reflects the same underlying principle running through this entire unit: consistency in small, repeated acts of honor rather than a single visible gesture performed once and then relaxed.`,
      },
      {
        heading: 'Guarding against excessive exaltation',
        body: `Alongside the instruction to honor the Prophet ﷺ deeply, there is an equally important corrective boundary the Prophet ﷺ set for his own community: warning against the kind of exaltation that crosses into treating a created human being as though he shared in Allah's own divine status, as had happened to earlier prophets among their followers. He instructed that he should simply be described as Allah's servant and His messenger — both parts of that description held together, neither one dropped in favor of the other.

This matters directly for the Adab of this topic: honoring the Prophet ﷺ correctly does not mean inventing forms of veneration beyond what he sanctioned for himself, and genuine love for him is best expressed in the ways he himself taught — salawat, following his example, defending his honor with sound knowledge — rather than through innovated practices that he explicitly cautioned his community against.`,
      },
      {
        heading: 'Defending his honor with knowledge, not only emotion',
        body: `When the Prophet's ﷺ name, character, or teachings are mischaracterized or mocked — a situation many Muslims will encounter at some point, whether online or in conversation — the Adab response is not simply emotional reaction, but a defense grounded in accurate knowledge of the seerah and his actual recorded conduct. Responding with anger alone, without the substance of what is actually known about his character and teachings, often fails to actually correct the misunderstanding and can reflect poorly on the very character being defended.

The most effective and Adab-consistent response tends to combine composure with substance: correcting inaccurate claims where possible, referring to reliable sources, and — in line with everything covered elsewhere in this unit — allowing one's own conduct to reflect the character being defended, since a calm, well-informed, good-charactered response often does more to honor him than an angry, poorly-substantiated one.`,
      },
      {
        heading: 'Teaching children and new Muslims this Adab early',
        body: `Because this is a habit built through repetition rather than a single lesson, it is commonly taught early — to children growing up in Muslim households and to new Muslims alike — as one of the first small etiquettes to internalize: responding to his name with salawat becomes, over time, an automatic reflex rather than a consciously remembered rule.

This is a useful model for how much of Adab generally is meant to work: not as a rule consulted in the moment, but as a trained reflex built through consistent, early, repeated practice, until the correct response simply becomes what a person's tongue and heart do without needing to be reminded.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 5 — ADAB WITHIN THE FAMILY (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Qurtubi,
  // Ibn Kathir, Baghawi via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'family-1': {
    id: 'family-1',
    unit: 'unit-5',
    title: 'Adab Toward Parents (Birr al-Walidayn)',
    summary: 'The immense weight Islam places on kindness to one\'s parents.',
    content: [
      {
        heading: 'Kindness to parents placed beside worship of Allah',
        body: `Few commands in the Qur'an are positioned as closely to the command to worship Allah alone as the command to be good to one's parents. Allah does not simply mention birr al-walidayn (kindness to parents) as one item in a longer list — He places it immediately after tawhid itself, as if to signal that this particular relationship carries a weight unlike any other human relationship.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا',
            english: 'Your Lord has decreed that you worship none but Him, and that you be good to your parents. If one or both of them reach old age with you, do not say "uff" to them, nor scold them, but speak to them with generous, honorable words.',
            source: 'Surah al-Isra, 17:23',
          },
        ],
      },
      {
        heading: 'The posture of humility Allah instructs',
        body: `The very next verse continues this instruction with a striking image: lowering the "wing of humility" toward one's parents, out of mercy, and asking Allah to show them mercy just as they showed mercy in raising a helpless child. This phrase — lowering a wing — evokes a bird gently covering its young, redirected here toward how an adult child should treat aging parents: gently, protectively, without impatience.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
            english: 'And lower to them the wing of humility out of mercy, and say, "My Lord, have mercy upon them as they raised me when I was small."',
            source: 'Surah al-Isra, 17:24',
          },
        ],
      },
      {
        heading: 'The severity of even the smallest sign of impatience',
        body: `What stands out in the verse above is how minor the forbidden word actually is. "Uff" is not an insult, a curse, or a raised voice — it is closer to an exasperated sigh, the small sound a person makes when mildly annoyed. The Qur'an singles out even this smallest possible expression of impatience and forbids it explicitly.

The Adab drawn from this is demanding precisely because of how ordinary the forbidden behavior is: it is not simply "don't be cruel to your parents," which most people would already agree with — it is "don't even sigh with irritation at them," a bar set so high that it rules out even the involuntary, low-level frustration many people feel toward anyone, let alone toward the two people owed the most consideration.`,
      },
      {
        heading: 'The mother\'s elevated status',
        body: `Among the many hadith addressing parents, one exchange stands out for how directly it establishes a hierarchy of who deserves the most excellent treatment. A man asked the Prophet ﷺ who was most deserving of his good companionship, and the Prophet ﷺ answered his mother — three times in a row — before finally naming his father on the fourth question.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أُمُّكَ. قَالَ: ثُمَّ مَنْ؟ قَالَ: أَبُوكَ',
            english: '"Who among people most deserves my excellent companionship?" He said: "Your mother." He asked: "Then who?" He said: "Your mother." He asked: "Then who?" He said: "Your mother." He asked: "Then who?" He said: "Your father."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Why the mother is named three times',
        body: `Scholars commenting on this hadith connect the threefold repetition of "your mother" to the layered, largely invisible sacrifice involved in pregnancy, childbirth, and nursing — described elsewhere in the Qur'an as "weakness upon weakness," borne specifically by the mother, before the father's role even begins in the same way. This does not diminish the father's right, which the hadith still affirms clearly at the end — but it explains why the mother's claim is emphasized with such deliberate repetition rather than simply being mentioned once alongside the father.

The Adab this produces is a specific kind of attentiveness toward one's mother that goes beyond generic "be kind to your parents" — an active awareness of a debt that, by its very nature, was carried silently and mostly out of sight.`,
      },
      {
        heading: 'Kindness that continues after their passing',
        body: `Birr al-walidayn does not end the moment a parent dies. The Prophet ﷺ was asked by a man whether there remained any way to continue being good to his parents after both had passed away, and he answered that there was: praying for them, seeking forgiveness for them, fulfilling promises they had made, honoring their close friends, and maintaining ties with relatives who are only connected through them.

This extends the Adab of this topic well beyond a person's own lifetime with their parents — it becomes an ongoing responsibility carried forward through supplication and through how the wider network of people connected to one's parents continues to be treated, long after the parents themselves are gone.`,
      },
      {
        heading: 'When obedience to parents has limits',
        body: `Birr al-walidayn is one of the strongest obligations in Islam, but it is not unconditional in every respect. If a parent instructs a child to disobey Allah — to abandon prayer, to commit a clear sin, or to associate partners with Allah — the child is not obligated to obey in that specific matter. Even here, though, the Qur'an is precise about how this refusal should be carried out: with continued good companionship in worldly matters, not with harshness or estrangement, since the boundary concerns obedience in sin specifically, not the relationship as a whole.

The Adab here requires real discernment — recognizing that a limit on obedience is not the same as a license for disrespect, and that even a parent whose specific instruction must be declined is still owed kindness, patience, and good treatment in every other respect.`,
      },
    ],
  },

  'family-2': {
    id: 'family-2',
    unit: 'unit-5',
    title: 'Adab Between Spouses',
    summary: 'Mutual kindness, patience, and respect within marriage.',
    content: [
      {
        heading: 'Marriage as tranquility, love, and mercy',
        body: `The Qur'an describes marriage not primarily in terms of obligation or contract, but through three specific gifts Allah places within it: sakinah (tranquility), mawaddah (love), and rahmah (mercy). The verse frames the very existence of this bond between two people as one of Allah's signs, worthy of reflection.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
            english: 'And among His signs is that He created for you spouses from among yourselves, so that you may find tranquility in them, and He placed between you love and mercy.',
            source: 'Surah ar-Rum, 30:21',
          },
        ],
      },
      {
        heading: 'The best of you is best to his family',
        body: `The Prophet ﷺ gave a specific, personal measure for what good character within marriage looks like, and — notably — offered himself as the standard by which this claim could be checked, rather than leaving it as an abstract ideal.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي',
            english: '"The best of you is the one who is best to his family, and I am the best of you to my family."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Living together with kindness (ma\'ruf)',
        body: `Alongside the verse describing marriage's emotional foundation, the Qur'an also gives a direct behavioral instruction to husbands regarding how to conduct the relationship day to day: living together with ma'ruf — kindness, fairness, and what is recognized as good conduct — even in circumstances of disagreement or when affection has cooled. The same surah goes on to caution that even if a husband dislikes something about his wife, Allah may have placed much good in what he dislikes, discouraging hasty or reactive decisions made in a moment of frustration.

The Adab drawn from this is that the standard for treatment within marriage is not contingent on feelings running high in the moment — kindness and fair conduct are the baseline expected regardless of whether affection currently feels strong or has temporarily dimmed.`,
      },
      {
        heading: 'Adab in disagreement and correction',
        body: `Marriage is not presented in Islam as a relationship free of friction, but real Adab is shown in how disagreement is handled. The Sunnah models addressing concerns directly and privately rather than through public complaint or third parties where avoidable, choosing calm words over harsh ones, and — even when correction is genuinely needed — beginning wherever possible from patience and clear communication rather than anger.

The Prophet ﷺ was never reported to have struck any of his wives, and was instead described by Aisha as never having hit a servant, a woman, or anything with his hand except in the cause of Allah — a description offered specifically in the context of his household conduct, and one that sets a clear tone for what Adab within a difficult moment of marriage is meant to look like.`,
      },
      {
        heading: 'Mutual rights, not one-sided obligation',
        body: `A common misunderstanding treats the Adab of marriage as flowing in only one direction — obligations placed on the wife toward the husband. The Qur'an corrects this directly, describing the relationship as one of reciprocal rights: wives have rights similar to the rights husbands have over them, even while noting that men bear a degree of additional responsibility as maintainers of the household in the traditional structure the Qur'an describes.

The Adab here is recognizing marriage as a two-way relationship of mutual kindness and mutual right, not a one-directional demand — a corrective worth stating plainly, since a lopsided understanding of "Islamic marriage Adab" that emphasizes only a wife's obligations while neglecting a husband's is a distortion of what the sources actually describe.`,
      },
      {
        heading: 'Small, everyday gestures of affection',
        body: `Much of the Adab between spouses shown in the seerah is found in small, ordinary gestures rather than grand romantic statements: the Prophet ﷺ would race with Aisha, drink from the same spot on a cup she had drunk from, call her by an affectionate nickname, and speak warmly of her even after her passing. These are not minor, disposable details — they reflect a consistent pattern of a spouse being treated with warmth in the small, repeated moments of ordinary life, not only during significant occasions.

The Adab encouraged here is to not reserve kindness and affection for special days or major events, but to let it show up in the same small, everyday ways — a kind word, a shared moment, a bit of playfulness — that make up the actual texture of married life.`,
      },
      {
        heading: 'Patience through hardship within the marriage',
        body: `Not every marriage moves smoothly, and the Qur'an anticipates this directly, instructing patience even where something about the relationship is difficult, on the grounds that good may be hidden within what currently feels difficult. This is not an instruction to remain silent about serious harm — Islam provides clear paths for addressing genuine mistreatment — but it does set a general disposition of patience as the starting posture for the ordinary frictions and disappointments that occur in any long relationship, rather than treating every difficulty as grounds for immediate escalation.`,
      },
    ],
  },

  'family-3': {
    id: 'family-3',
    unit: 'unit-5',
    title: 'Adab Toward Children',
    summary: 'Gentleness, fairness, and guidance in raising children.',
    content: [
      {
        heading: 'A responsibility described in the language of protection',
        body: `The Qur'an frames a parent's duty toward their children using the same urgency as protecting oneself from real danger — instructing believers to guard both themselves and their families from a fire whose fuel is described as people and stones. This is a serious framing: raising children well is not presented as a soft, optional kindness, but as an active duty of protection with real consequences attached to neglecting it.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ',
            english: 'O you who believe, protect yourselves and your families from a Fire whose fuel is people and stones.',
            source: 'Surah at-Tahrim, 66:6',
          },
        ],
      },
      {
        heading: 'Mercy toward children as a marker of faith',
        body: `The Prophet ﷺ was once seen kissing his grandson, and a man watching remarked that he had ten children and had never kissed any of them. The Prophet's ﷺ response was direct and unflinching about what that lack of affection actually indicated.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ لَا يَرْحَمُ لَا يُرْحَمُ',
            english: '"Whoever does not show mercy will not be shown mercy."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Justice between children',
        body: `A companion, Nu'man ibn Bashir, once asked the Prophet ﷺ to witness a gift he had given to one of his sons. The Prophet ﷺ asked whether he had given the same to all his other children, and upon learning he had not, refused to witness the gift, instructing him to fear Allah and be just between his children instead.

This hadith is often cited specifically because favoritism between children — whether in gifts, attention, praise, or affection — is a common and easily rationalized failure, and the Prophet's ﷺ direct refusal to endorse even a single unequal gift shows how seriously this particular form of injustice within the family is treated, however small the gift or however good the parent's other intentions might be.`,
      },
      {
        heading: 'Teaching through gentleness rather than harshness',
        body: `The Adab of raising and correcting children in Islam favors patient instruction over harsh punishment as the default approach. The well-known guidance regarding teaching children to pray — instructing them at seven, and only resorting to a light disciplinary measure at ten if prayer is still being neglected — illustrates a staged, patient approach rather than an immediate resort to severity. Even the disciplinary measure permitted at the later stage is qualified elsewhere in the Sunnah as never being harsh, never striking the face, and never leaving a mark, with the underlying goal always being correction, not the discharge of a parent's frustration.

The broader Adab principle is that a child's heart is meant to be won toward good behavior through patient, repeated teaching wherever possible, with more severe measures reserved as a last resort — carefully bounded — rather than a habitual response to ordinary childhood mistakes.`,
      },
      {
        heading: 'Speaking to children with dignity',
        body: `The Prophet ﷺ is reported to have addressed children directly and by name, given them serious answers to their questions, and included them in adult gatherings and conversations rather than dismissing their presence as unimportant. A companion, Anas ibn Malik, served the Prophet ﷺ from a young age and reported that he was never once scolded by him for anything he did or failed to do, despite the ordinary mistakes any child would make in service.

This models a form of Adab toward children that is easy to overlook: speaking to them with the same basic dignity extended to adults, rather than a tone of routine dismissal, sarcasm, or irritation — the same standard of "kareem" (generous, honorable) speech commanded toward parents in this unit's first topic applies, in its own way, downward toward children as well.`,
      },
      {
        heading: 'Balancing love with structure',
        body: `Genuine Adab toward children does not equate kindness with an absence of boundaries. The Prophet ﷺ combined deep affection — playing with children, allowing his grandsons to climb on him during prostration and prolonging the prostration rather than disturbing them — with clear moral and religious instruction, correcting a young companion's table manners directly ("say Bismillah, eat with your right hand, and eat from what is nearest to you") rather than assuming a child would simply absorb good habits without guidance.

The Adab modeled here holds warmth and structure together rather than treating them as opposites: a child is shown affection generously, while still being actively taught, corrected, and held to expectations appropriate to their age.`,
      },
    ],
  },

  'family-4': {
    id: 'family-4',
    unit: 'unit-5',
    title: 'Adab Toward Siblings and Relatives',
    summary: 'Maintaining family ties (silat al-rahim) even when it is difficult.',
    content: [
      {
        heading: 'Family ties invoked alongside the name of Allah',
        body: `The Qur'an opens Surah an-Nisa with an instruction that places family ties (al-arham) in an unusually elevated position — mentioned in the same breath as fearing Allah Himself, in a verse discussing how people invoke sacred things when making requests of one another.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ',
            english: 'And be mindful of Allah, in whose name you make requests of one another, and of family ties.',
            source: 'Surah an-Nisa, 4:1',
          },
        ],
      },
      {
        heading: 'Provision and lifespan tied to maintaining relatives',
        body: `The Prophet ﷺ offered a specific, practical incentive for maintaining ties with relatives — not framed in abstract spiritual terms alone, but tied to two things people naturally care about in ordinary life: their provision and the length of their days.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَيُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ',
            english: '"Whoever loves that his provision be expanded and his lifespan extended, let him maintain the ties of his kinship."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'A severe warning against cutting ties',
        body: `The Qur'an and Sunnah do not merely encourage maintaining family ties as a nice option — cutting them is treated as a serious matter with a correspondingly severe warning attached, one of the strongest stated consequences for any single social failing found in the sources.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَا يَدْخُلُ الْجَنَّةَ قَاطِعٌ',
            english: '"One who severs the ties of kinship will not enter Paradise."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Maintaining ties even when they are not returned',
        body: `A particularly demanding form of this Adab concerns relatives who do not reciprocate — family members who ignore, mistreat, or cut off contact first. The Prophet ﷺ was asked about a man with relatives who treated him badly no matter how well he treated them in return, and rather than excusing him from the effort, the Prophet ﷺ told him that if his description was accurate, it was as if he were feeding them hot ashes, and that he would continue to have support from Allah against them so long as he remained upon that state.

This reframes silat al-rahim as something closer to an unconditional standard than a reciprocal courtesy — the connection is meant to be maintained by at least one side regardless of whether the other side responds in kind, which is precisely what makes it a real test of Adab rather than simply good manners extended only when convenient or returned.`,
      },
      {
        heading: 'Siblings specifically — rivalry, favoritism, and reconciliation',
        body: `Sibling relationships receive specific attention in the Qur'an through the story of Yusuf (peace be upon him) and his brothers, whose jealousy led them to a grave wrong against him — and whose story concludes not with lasting vengeance but with Yusuf's remarkable statement of forgiveness once he held the power to punish them. This narrative sits within the Qur'an as a model of how sibling wrongs, even severe ones, can be resolved through mercy rather than sustained resentment.

The Adab drawn from this extends into more ordinary sibling dynamics as well: guarding against favoritism (as covered in the previous topic), addressing jealousy and rivalry directly rather than letting it fester, and treating forgiveness and reconciliation as the aspirational standard even after real hurt has occurred between siblings.`,
      },
      {
        heading: 'Extending Adab to the wider family network',
        body: `Silat al-rahim is not limited to parents, siblings, and children — it extends outward to aunts, uncles, cousins, and the broader network of relatives, including, as covered in the parents' topic, relatives connected only through a deceased parent's friendships. The Prophet ﷺ specifically praised maintaining ties with the friends of one's deceased father as a form of birr that continues a parent's legacy of connection.

The practical Adab here includes simple, low-cost habits many people neglect without any real justification: regular calls or visits to extended family, remembering important occasions, and making an effort to attend family gatherings even when it would be more convenient not to — treating the wider family network as a genuine ongoing responsibility rather than a courtesy reserved for special occasions like weddings and funerals.`,
      },
    ],
  },

  'family-5': {
    id: 'family-5',
    unit: 'unit-5',
    title: 'Adab of the Household',
    summary: 'Privacy, shared space, and courtesy within the home.',
    content: [
      {
        heading: 'Privacy taught even within one\'s own family',
        body: `It is a common assumption that etiquette around entering rooms and seeking permission applies mainly to guests or strangers, not to one's own household. The Qur'an corrects this directly, instructing that even children within the same home — and by extension, this principle is understood to apply more broadly within a household — should seek permission before entering a parent's private space at three specific times of day associated with undress or rest: before the dawn prayer, at midday, and after the night prayer.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لِيَسْتَأْذِنكُمُ الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ وَالَّذِينَ لَمْ يَبْلُغُوا الْحُلُمَ مِنكُمْ ثَلَاثَ مَرَّاتٍ',
            english: 'O you who believe, let those whom your right hands possess and those who have not yet reached puberty among you ask your permission on three occasions.',
            source: 'Surah an-Nur, 24:58',
          },
        ],
      },
      {
        heading: 'Why household privacy is specified so precisely',
        body: `The three times named in the verse above are not arbitrary — they correspond to moments when a person is most likely to be in a state of undress or rest within their own home: before Fajr, during the midday rest, and after Isha at night. The Qur'an's attention to this level of domestic detail is itself instructive: Adab is not reserved for how a household presents itself to outsiders, but extends into the ordinary, private rhythms of life shared only among family members, well out of public view.

This is a useful corrective for households where privacy is treated as something only owed to visitors, with family members assumed to have no need for a knock, a warning, or a moment's notice before someone enters their space.`,
      },
      {
        heading: 'The Prophet\'s ﷺ own conduct inside his home',
        body: `Aisha (may Allah be pleased with her) was once asked what the Prophet ﷺ did inside his own house, and her answer described someone actively engaged in ordinary domestic tasks: mending his own sandals, patching his own clothing, and doing the kind of household work any person might do for themselves — rather than a man who considered such tasks beneath him or reserved exclusively for others in the household.

This detail matters directly for the Adab of the household, since it corrects an assumption sometimes carried into family life — that domestic labor is owed entirely by one member of the household to everyone else. The Prophet's ﷺ own example shows a willing, active participation in the shared, unglamorous work of running a home.`,
      },
      {
        heading: 'Courtesy in shared spaces and daily rhythms',
        body: `Beyond formal permission-seeking, the Adab of the household includes a general spirit of consideration in shared living: not monopolizing shared spaces or resources without regard for others, lowering one's voice during hours others are resting, cleaning up after oneself rather than assuming someone else will, and being mindful of noise, mess, and disruption in a space multiple people depend on for rest and peace.

None of these are formally legislated in great detail, but they follow directly from the same underlying Adab principle running through this entire unit: a household functions as a small community with its own set of mutual rights, and inconsiderate behavior toward the people one lives closest to is not made acceptable simply because it happens at home rather than in public.`,
      },
      {
        heading: 'The home as a place of remembrance, not only rest',
        body: `The Prophet ﷺ taught a specific distinction between homes in which Allah is remembered and homes in which He is not, comparing the difference to that between the living and the dead — the same striking comparison used elsewhere in this course for an individual's personal dhikr, now applied to an entire household's atmosphere.

The Adab this encourages is treating the home itself as a space that carries a spiritual character shaped by what regularly happens within it — recitation of Qur'an, dua, dhikr, and gatherings around good conversation — rather than a purely neutral container for rest, entertainment, and daily logistics with no religious character of its own.`,
      },
      {
        heading: 'Resolving household friction without exposing the family',
        body: `Every household experiences friction — disagreements between siblings, tension between a parent and child, or a difficult day that spills into short tempers. The Adab expected in these ordinary moments favors addressing conflict directly and privately within the family wherever possible, rather than airing household disputes publicly, on social media, or to a wide circle of friends in a way that embarrasses family members or exposes private matters unnecessarily.

This does not mean serious harm should be hidden or unaddressed — genuine abuse or danger calls for outside help without hesitation. But for the ordinary friction of shared living, the Adab of discretion protects the dignity of everyone involved, and reflects the same spirit of covering others' faults (satr) that appears throughout Islamic teaching on how believers are expected to treat one another more broadly.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 6 — ADAB OF SPEECH (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Qurtubi, Baghawi via quran.com and quran.ksu.edu.sa); hadith
  // checked against sunnah.com and dorar.net before writing. English
  // renderings are an original paraphrase of the meaning, not copied
  // from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'speech-1': {
    id: 'speech-1',
    unit: 'unit-6',
    title: 'Adab of Truthfulness',
    summary: 'Why truthful speech is a foundation of Islamic character.',
    content: [
      {
        heading: 'The command to speak a firm, correct word',
        body: `The Qur'an pairs the command to fear Allah with a specific instruction about speech itself — not simply "don't lie," but the positive instruction to speak sadidan, a word carrying the sense of straight, correct, and hitting its mark precisely, the way a well-aimed arrow does. The verse then ties the outcome directly to the quality of a person's speech: good deeds being set right and sins being forgiven follow from getting this right.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا',
            english: 'O you who believe, be mindful of Allah and speak words that are straight and correct.',
            source: 'Surah al-Ahzab, 33:70',
          },
        ],
      },
      {
        heading: 'Truthfulness as a path with a clear destination',
        body: `The Prophet ﷺ described truthfulness not as an isolated virtue but as the first step on a path with a known destination, and contrasted it directly with the opposite path that lying leads down.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ',
            english: '"Hold fast to truthfulness, for truthfulness leads to righteousness, and righteousness leads to Paradise."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The matching warning about lying',
        body: `The same hadith continues with an equally direct warning running in the opposite direction: lying leads to wickedness, and wickedness leads to the Fire — and the hadith concludes with a sobering observation, that a person may keep speaking truthfully and pursuing truthfulness until they are recorded with Allah as siddiq (a truthful person of the highest rank), while a person may keep lying and pursuing lies until they are recorded as a liar.

The Adab drawn from this pairing is that speech is not a neutral, low-stakes habit — the hadith frames truthfulness and lying as cumulative character-forming paths, not isolated incidents judged one at a time, meaning small, repeated compromises in either direction gradually shape which category a person is ultimately recorded in.`,
      },
      {
        heading: 'Truthfulness even when it costs something',
        body: `The real test of this Adab arrives specifically in situations where truthfulness carries a cost — admitting a mistake at work, correcting a false impression that happens to be flattering, or giving an honest but unwelcome answer when a comfortable lie would be easier and more socially convenient. The Qur'an's instruction to "be with the truthful" (9:119) is understood by scholars not as a passive association, but as an active commitment to remain truthful even when truthfulness is difficult, since it is precisely in costly moments that truthfulness as a character trait is actually tested.

A habit of telling small, "harmless" lies for convenience or to avoid minor discomfort erodes exactly the muscle that costly truthfulness later depends on — which is why the Adab of truthfulness is best built through consistency in small matters, not treated as a standard reserved only for major, high-stakes moments.`,
      },
      {
        heading: 'The narrow exceptions, and why they remain narrow',
        body: `Islamic scholarship recognizes a small number of specific, narrow exceptions where a departure from strict truthfulness is permitted — reconciling between two people in conflict, in the context of a marriage between spouses, and in matters of war strategy against an enemy. These exceptions are worth naming precisely because of how narrow and specific they are: they exist to serve a clearly defined good (peace, marital harmony, legitimate strategy), not as a general license for convenient dishonesty whenever a person judges it beneficial.

The Adab here is resisting the temptation to stretch these narrow exceptions to justify unrelated dishonesty — using "keeping the peace" to excuse an unrelated lie, for instance, misapplies a specific, bounded allowance to a situation it was never meant to cover.`,
      },
      {
        heading: 'Truthfulness in small daily transactions',
        body: `Beyond major statements, truthfulness extends into ordinary daily dealings that are easy to overlook: accurately describing a product being sold, not exaggerating one's own effort or accomplishments to appear more impressive, keeping promises made casually in conversation, and being honest in small matters like arrival times or excuses given for lateness.

The Prophet ﷺ specifically warned against a merchant who swears falsely to make a sale seem more attractive, describing this as erasing blessing from the transaction even if it increases the sale. This extends the Adab of truthfulness into the ordinary economic and social transactions of daily life, not reserving it only for solemn or formal statements.`,
      },
    ],
  },

  'speech-2': {
    id: 'speech-2',
    unit: 'unit-6',
    title: 'Avoiding Backbiting and Slander',
    summary: 'The seriousness of ghibah and namimah, and how to avoid them.',
    content: [
      {
        heading: 'An image chosen to provoke real disgust',
        body: `To describe the seriousness of backbiting (ghibah), the Qur'an does not simply call it wrong — it selects one of the most viscerally repulsive images available: eating the flesh of one's own dead brother. The comparison is deliberate and precise, drawn out point by point in the tafsir literature: just as the person being eaten cannot feel it, and just as consuming a corpse is naturally disgusting even before any ruling forbids it, backbiting harms someone who is not present to know or defend themselves, and should provoke the same instinctive revulsion.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلَا يَغْتَب بَّعْضُكُم بَعْضًا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًا فَكَرِهْتُمُوهُ',
            english: 'And do not backbite one another. Would any of you like to eat the flesh of his dead brother? You would despise that.',
            source: 'Surah al-Hujurat, 49:12',
          },
        ],
      },
      {
        heading: 'What backbiting actually is — a precise definition',
        body: `The Prophet ﷺ was asked directly what ghibah means, and rather than leaving it vague, he gave a precise, testable definition, followed by an important clarification when a companion pushed back.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَتَدْرُونَ مَا الْغِيبَةُ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ',
            english: '"Do you know what ghibah is?" They said, "Allah and His Messenger know best." He said, "It is mentioning your brother in a way he would dislike."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Why this definition matters — even true statements count',
        body: `A companion then asked what should be called if the statement mentioned about the person is actually true, expecting perhaps that truth would be a defense. The Prophet ﷺ answered that if what was said is true, that is exactly ghibah — and if it is false, it becomes buhtan (slander), an even graver sin. This single clarification closes off the most common excuse people give for backbiting: "but it's true."

The Adab drawn from this is significant: truthfulness, which is praised throughout the previous topic, is not itself a defense against ghibah. What makes speech about an absent person permissible or impermissible is not primarily whether it is accurate, but whether it concerns something the person would dislike having said about them behind their back, without a legitimate reason for it being said.`,
      },
      {
        heading: 'Namimah — carrying tales between people',
        body: `Distinct from ghibah, namimah refers to carrying words from one person to another with the intent of causing discord — repeating "so-and-so said this about you" in a way designed to stir conflict, whether or not the report is accurate. The Prophet ﷺ used unusually severe language for this specific behavior.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَا يَدْخُلُ الْجَنَّةَ قَتَّاتٌ',
            english: '"A talebearer (one who spreads namimah to cause discord) will not enter Paradise."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The permitted exceptions to speaking about someone\'s absence',
        body: `A small number of situations permit mentioning something about an absent person that would otherwise count as ghibah, because a legitimate, greater purpose is being served: seeking help to correct a wrong (reporting genuine oppression to someone able to help), warning others of real danger (such as warning a potential business partner about a known scammer), seeking a religious ruling by describing a real situation, publicly identifying an open sinner already known for a specific wrongdoing, and formally critiquing narrators in the science of hadith authentication.

The Adab here requires honest self-examination about intention: these exceptions exist to serve genuine protective or corrective purposes, not to provide convenient cover for conversations that are, in substance, simply enjoyable gossip dressed up as "warning" or "advice."`,
      },
      {
        heading: 'What to do when backbiting happens around you',
        body: `The Adab of this topic extends beyond simply not initiating backbiting — it includes how a person responds when present while someone else does it. The Prophet ﷺ described defending an absent Muslim's honor when they are being backbitten in one's presence as something Allah will use to protect that person from the Fire, framing active intervention, or at minimum quietly declining to participate or leaving the conversation, as itself a praiseworthy act of Adab, not merely a neutral bystander position.

Simply staying silent while backbiting continues, without any internal discomfort or attempt to redirect the conversation, falls short of the fuller standard modeled in the Sunnah — silence in this specific context is not automatically the safe, neutral choice it is in many other situations covered elsewhere in this unit.`,
      },
    ],
  },

  'speech-3': {
    id: 'speech-3',
    unit: 'unit-6',
    title: 'Adab of Gentle and Kind Speech',
    summary: 'Choosing words that soften hearts rather than harden them.',
    content: [
      {
        heading: 'A general command to speak well to people',
        body: `Before any specific etiquette of speech is detailed elsewhere in the Qur'an, a broad, general instruction is given early in Surah al-Baqarah, addressed to the Children of Israel but understood by scholars as a universal principle: speak good to people, as a general standard covering all of one's interactions, not only special or difficult ones.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَقُولُوا لِلنَّاسِ حُسْنًا',
            english: 'And speak good to people.',
            source: 'Surah al-Baqarah, 2:83',
          },
        ],
      },
      {
        heading: 'The standard extended even to hostile listeners',
        body: `A stronger version of this same principle appears in the instruction Allah gives Musa and Harun (peace be upon them) before they approach Fir'awn — one of the most hostile and tyrannical listeners imaginable — and the instruction is still to speak to him gently, not harshly, despite his open enmity toward Allah.`,
        verses: [
          {
            type: 'quran',
            arabic: 'فَقُولَا لَهُ قَوْلًا لَّيِّنًا لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَىٰ',
            english: 'So speak to him gently, so that perhaps he may take heed or fear (Allah).',
            source: 'Surah Ta-Ha, 20:44',
          },
        ],
      },
      {
        heading: 'What this instruction teaches about tone versus content',
        body: `This is a demanding standard: even when confronting one of the worst tyrants in history with a message he would find deeply unwelcome, the instruction concerns tone specifically, not softening the message itself. Musa and Harun were still commanded to deliver the full truth of the message — Fir'awn's wrongdoing was not minimized — but the manner of delivery was gentle rather than harsh.

This distinction matters directly for Adab: gentle speech does not mean avoiding difficult truths or diluting a necessary message. It means separating the substance of what needs to be said from the tone used to say it, since even the most confrontational content can be delivered in a manner more likely to be received rather than immediately rejected out of wounded pride or defensive anger.`,
      },
      {
        heading: 'A good word counted as charity',
        body: `The Prophet ﷺ elevated ordinary kind speech to the status of an act of charity — meaning a person does not need wealth to give charity through their speech; a good word, freely available to everyone regardless of financial means, already qualifies.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
            english: '"A good word is charity."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Choosing the best of what can be said',
        body: `Allah instructs the Prophet ﷺ to tell His servants to say "that which is best" specifically in situations where disagreement or provocation might tempt a harsher response, warning that Shaytan seeks to create discord between people by exploiting exactly these moments. This instruction assumes there is often more than one true or defensible thing that could be said in a given moment, and directs a person toward the best available option, not merely the first or most emotionally satisfying one.

The Adab this builds is a habit of a brief pause before speaking in tense moments — not to suppress honest disagreement, but to choose, among the range of true things that could be said, the version least likely to inflame the situation unnecessarily.`,
      },
      {
        heading: 'Gentleness as something added, not subtracted',
        body: `The Prophet ﷺ taught that gentleness (rifq) does not appear in anything without adorning it, and is not withdrawn from anything without leaving it flawed — describing gentleness in speech and conduct as something that actively improves an interaction, not a soft compromise that weakens it. This corrects a common misconception that firmness and gentleness are opposites, where choosing gentleness is assumed to mean sacrificing clarity or standards.

The Adab drawn from this is that gentle speech is treated in the Sunnah as the more effective and more excellent approach in nearly every situation, not merely the kinder one — meaning a person choosing harsh speech over gentle speech, believing harshness to be more direct or more effective, is very often mistaken about which approach actually accomplishes more.`,
      },
    ],
  },

  'speech-4': {
    id: 'speech-4',
    unit: 'unit-6',
    title: 'Adab of Silence and Listening',
    summary: 'When silence is better than speech, and how to truly listen.',
    content: [
      {
        heading: 'A single standard for good speech and its alternative',
        body: `The Prophet ﷺ gave one of the most concise and frequently repeated standards in all of Islamic Adab, combining the standard for speech with an equally valid default alternative to it.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
            english: '"Whoever believes in Allah and the Last Day should speak good, or remain silent."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Silence as an equal, not a lesser, option',
        body: `A subtle but important point in this hadith is its structure: it does not say "speak good, and if you cannot, apologize for staying quiet" — it presents silence as a fully legitimate and equally valid response whenever good speech is not available in the moment. This corrects a social pressure many people feel to always have something to say, to fill silence in a conversation, or to offer an opinion on every topic raised in their presence.

The Adab here treats silence not as an awkward gap to be avoided, but as one of two complete, dignified options available at every moment of speech — chosen deliberately when nothing genuinely good is ready to be said, rather than filling the space with whatever comes to mind first.`,
      },
      {
        heading: 'The tongue as the key to what fills the Fire',
        body: `When a companion, Mu'adh ibn Jabal, asked the Prophet ﷺ whether people would be held accountable for what they say, the Prophet ﷺ grabbed his own tongue and gave a striking answer about just how central the tongue is to a person's ultimate fate.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'وَهَلْ يَكُبُّ النَّاسَ فِي النَّارِ عَلَى وُجُوهِهِمْ إِلَّا حَصَائِدُ أَلْسِنَتِهِمْ',
            english: '"And what throws people into the Fire on their faces except the harvests of their own tongues?"',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'The Adab of genuinely listening',
        body: `Listening is treated in the Sunnah as an active discipline, not a passive default that happens automatically while another person speaks. Genuine listening includes not interrupting before someone has finished a thought, not visibly preparing one's own response while the other person is still speaking, giving reasonable attention rather than a distracted half-presence, and resisting the urge to redirect every conversation back toward one's own experiences or opinions.

The Prophet ﷺ modeled attentive listening even in ordinary conversation — companions described him as giving his full attention to whoever was speaking to him, turning his whole body toward them rather than a passing glance. This models listening as itself a form of honoring the person speaking, not merely waiting for one's own turn to talk.`,
      },
      {
        heading: 'Guarding the tongue as the gateway to guarding everything else',
        body: `A well-known account describes the different parts of the body pleading with the tongue each morning, asking it to fear Allah on their behalf, since if the tongue stays upright, the rest of the body stays upright with it, and if it goes astray, the rest of the body goes astray with it. Whether taken literally or as an illustrative teaching, the point is unambiguous: much of a person's wrongdoing in other areas — backbiting leading to broken relationships, lying leading to further deception, arguments escalating into worse conflict — begins with, and is carried by, the tongue specifically.

The Adab drawn from this is treating the discipline of speech as foundational to the discipline of everything else, rather than a separate, isolated category of good conduct — a person genuinely working to guard their tongue is, in practice, already doing much of the work needed to guard the rest of their character as well.`,
      },
    ],
  },

  'speech-5': {
    id: 'speech-5',
    unit: 'unit-6',
    title: 'Adab of Apologizing and Forgiving',
    summary: 'How to admit fault and how to let go of a wrong done to you.',
    content: [
      {
        heading: 'The instruction to pardon, tied to one\'s own hoped-for forgiveness',
        body: `This verse was revealed regarding Abu Bakr specifically, after he swore he would stop financially supporting a relative who had spoken ill of his daughter Aisha during a serious accusation against her — Allah instructed him to forgive and overlook instead, with a question that reframes forgiveness as something a person should want to extend precisely because of how much they themselves hope to receive it from Allah.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلْيَعْفُوا وَلْيَصْفَحُوا ۗ أَلَا تُحِبُّونَ أَن يَغْفِرَ اللَّهُ لَكُمْ',
            english: 'Let them pardon and overlook. Do you not wish that Allah would forgive you?',
            source: 'Surah an-Nur, 24:22',
          },
        ],
      },
      {
        heading: 'Forgiveness as a reward Allah Himself guarantees',
        body: `Rather than treating forgiveness as a costly sacrifice with no return, the Qur'an and Sunnah frame it as something that draws its own reward directly from Allah, distinct from any acknowledgment or repayment the wrongdoer themselves might ever offer. The Prophet ﷺ added a further, almost counterintuitive observation about what forgiveness actually does to a person's standing, rather than diminishing it.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا',
            english: '"Allah does not increase a servant who forgives except in honor."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The Adab of a genuine apology',
        body: `A genuine apology, modeled in the Sunnah and by the early scholars, includes several elements often missing from a hurried or defensive one: clearly naming the specific wrong rather than a vague "I'm sorry if you were offended," expressing real regret rather than irritation at having to apologize at all, making amends or restitution where practically possible, and a sincere intention not to repeat the same wrong.

The Prophet ﷺ modeled owning mistakes directly rather than deflecting them — on the rare occasions he made a decision later corrected by revelation or by a companion's better judgment, he adjusted course without defensiveness. The Adab here is that a complete apology is measured by these substantive elements, not by how quickly or smoothly the words "I'm sorry" are produced.`,
      },
      {
        heading: 'Not being the one who initiates reconciliation is itself blameworthy',
        body: `The Prophet ﷺ set a specific time limit on estrangement between believers over a personal dispute, warning against a Muslim boycotting another Muslim for more than three days, with the one who takes the first step to offer greeting and reconciliation described as the better of the two, regardless of who was originally in the wrong.

This is a demanding standard because it does not wait for an admission of fault before requiring movement toward reconciliation — a person genuinely wronged is still encouraged to be the one who extends the first greeting after a cooling-off period, rather than treating the wronged party's silence as justified indefinitely. The Adab modeled here values restored relationship highly enough to ask the aggrieved party, not only the wrongdoer, to take initiative.`,
      },
      {
        heading: 'Whose forgiveness is not automatically Allah\'s to grant',
        body: `An important boundary within this topic concerns wrongs done to other people specifically — financial harm, damaged reputation, physical harm, or any violation of another person's specific rights. Islamic teaching is clear that Allah's forgiveness for sins against Him is distinct from a wronged person's forgiveness for what was done to them; seeking Allah's forgiveness alone does not settle accounts that are owed to another human being.

The Adab this requires is genuine effort to seek forgiveness from, or make amends directly with, whoever was actually wronged — not substituting private repentance to Allah for the harder, more accountable step of returning to the person harmed, admitting the wrong, and seeking their forgiveness as well.`,
      },
      {
        heading: 'Forgiving without waiting to be asked',
        body: `While seeking forgiveness from a wronged person is the wrongdoer's responsibility, the Adab of forgiving does not require waiting passively for that request to arrive. The Prophet ﷺ described a man about whom he was told that he would enter Paradise, and a companion who investigated found nothing unusual in his worship — only that he held no resentment toward any Muslim and forgave people in his heart before sleeping each night, without necessarily having been asked.

This models a form of forgiveness that is proactive rather than conditional — released internally as a nightly habit regardless of whether an apology has been offered, protecting the forgiver's own heart from carrying accumulated resentment, rather than making one's own peace of mind dependent on another person's willingness to apologize first.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 7 — ADAB OF DAILY LIFE (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Ibn Kathir, Qurtubi, Baghawi via quran.com and quran.ksu.edu.sa)
  // before writing. English renderings are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // ─────────────────────────────────────────────────────────
  'daily-1': {
    id: 'daily-1',
    unit: 'unit-7',
    title: 'Adab of Greeting (Salam)',
    summary: 'The etiquette and virtue of giving and returning salam.',
    content: [
      {
        heading: 'Greeting before entering, even one\'s own household',
        body: `The Qur'an ties entering someone's home directly to the act of greeting — the two are presented together as a single instruction, not two separate matters of etiquette. Before stepping into a space that belongs to someone else, a Muslim is instructed to seek permission and offer salam in the same breath.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ حَتَّىٰ تَسْتَأْنِسُوا وَتُسَلِّمُوا عَلَىٰ أَهْلِهَا',
            english: 'O you who believe, do not enter houses other than your own until you have asked permission and greeted their occupants with peace.',
            source: 'Surah an-Nur, 24:27',
          },
        ],
      },
      {
        heading: 'Responding with equal or greater warmth',
        body: `The Qur'an also sets the standard for how a greeting should be returned — not simply acknowledged, but matched or exceeded in warmth. This applies whether the greeting comes as a short "as-salamu alaykum" or a fuller one including mercy and blessings, with the fuller response earning additional reward according to the Sunnah.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا',
            english: 'And when you are greeted with a greeting, respond with one better than it, or at least return it in kind.',
            source: 'Surah an-Nisa, 4:86',
          },
        ],
      },
      {
        heading: 'Spreading salam as a means to genuine love',
        body: `The Prophet ﷺ connected something as small as a greeting to something as large as the bond of faith between believers, describing a clear chain: no one enters Paradise without faith, and no one has complete faith without loving one another — and then offering a simple, practical starting point for building that love.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَفْشُوا السَّلَامَ بَيْنَكُمْ',
            english: '"Spread the greeting of peace amongst yourselves." — given as the practical starting point for building the mutual love faith requires.',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Who initiates the greeting',
        body: `The Sunnah gives specific guidance on who should offer salam first in various situations: the one riding should greet the one walking, the one walking should greet the one sitting, and a smaller group should greet a larger one. Rather than rigid hierarchy, scholars explain the wisdom here as removing hesitation and awkwardness about who "should" speak first — the guidance simply assigns the first move so that greeting happens promptly rather than being delayed by uncertainty or false modesty on either side.

The broader Adab encouraged is initiating salam generously and often, rather than waiting to be greeted first as a matter of pride or status — the Prophet ﷺ was known to greet people first, including children, and described the one who initiates the greeting as being nearest to Allah.`,
      },
      {
        heading: 'Greeting as a mark of full Islamic character',
        body: `When asked which quality of Islam was best, the Prophet ﷺ paired feeding people with a practice that costs nothing at all: offering salam to everyone, whether they are known to the greeter or complete strangers. This pairing is worth noticing — one act (feeding) requires real material resources, while the other (greeting) requires only a moment's willingness to acknowledge another person's presence with warmth, yet both are named together as marks of excellent Islam.

This reframes the small habit of saying salam as something with real weight, not merely a polite formality — a free, constant, and repeatable act of good character available to absolutely everyone, regardless of wealth or circumstance.`,
      },
    ],
  },

  'daily-2': {
    id: 'daily-2',
    unit: 'unit-7',
    title: 'Adab of Eating and Drinking',
    summary: 'The Sunnah manners of a meal, from before the first bite to after.',
    content: [
      {
        heading: 'The taught manner of beginning a meal',
        body: `The Prophet ﷺ gave direct, practical instruction to a young companion, Umar ibn Abi Salamah, whose hand was moving carelessly around the shared dish as a child: to say Bismillah, eat with the right hand, and eat from what is directly in front of him rather than reaching across the dish.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ',
            english: '"Say the name of Allah, eat with your right hand, and eat from what is nearest to you."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The instruction against overfilling the stomach',
        body: `Beyond how a meal begins, the Sunnah addresses how much is eaten at all. The Prophet ﷺ described the stomach as one of the worst things a person could fill to capacity, and offered a specific, practical guideline for moderation rather than leaving it as a vague ideal.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ',
            english: '"A human being fills no vessel worse than the stomach." He then advised dividing it into thirds: for food, drink, and breath.',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Eating and drinking without excess',
        body: `The Qur'an itself pairs the permission to eat and drink freely with an explicit boundary against excess, making clear that the concern is not enjoyment of food itself — which is permitted and even encouraged — but the specific habit of consuming beyond what is reasonable or healthy.

The Adab here connects directly to the previous point: moderation in eating is not simply about physical health, though that benefit is real, but is treated as a matter of character and self-discipline, with excess specifically named as something Allah does not love.`,
      },
      {
        heading: 'Adab of drinking specifically',
        body: `Separate etiquette applies to drinking. The Prophet ﷺ discouraged drinking directly from the mouth of a container or waterskin, out of hygiene and caution regarding what might be inside, and taught drinking in stages — pausing to breathe outside the cup rather than in a single continuous gulp, and removing the vessel from the mouth to breathe rather than breathing directly into it.

He also praised drinking while sitting as the general norm, though drinking while standing has been reported from him on specific occasions (such as at the well of Zamzam), which scholars reconcile as showing standing is permissible without being the preferred default.`,
      },
      {
        heading: 'Gratitude and courtesy after the meal',
        body: `A meal's Adab does not end with the last bite. The Sunnah includes a specific dua of gratitude after eating, thanking Allah for having fed and given drink without any effort or power of the eater's own. Beyond the dua, courtesy toward whoever prepared or served the meal — a simple word of thanks, avoiding complaint about the food, and the Prophet's ﷺ own practice of never criticizing food he was served, either eating it or leaving it without comment — rounds out the full manner of a meal from its first Bismillah to its last word of thanks.`,
      },
    ],
  },

  'daily-3': {
    id: 'daily-3',
    unit: 'unit-7',
    title: 'Adab of Dress and Appearance',
    summary: 'Modesty, cleanliness, and intention in how a Muslim dresses.',
    content: [
      {
        heading: 'Adornment commanded, not merely permitted',
        body: `Far from treating dress as a spiritually neutral matter, the Qur'an directly instructs believers to take their adornment — meaning presentable, decent clothing — specifically in the context of worship, pairing this instruction with a caution against excess in the same breath.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا بَنِي آدَمَ خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
            english: 'O children of Adam, take your adornment at every place and time of worship, and eat and drink, but do not be excessive — indeed, He does not love those who are excessive.',
            source: 'Surah al-A\'raf, 7:31',
          },
        ],
      },
      {
        heading: 'The line between adornment and arrogance',
        body: `While presentable dress is encouraged, the Sunnah draws a firm line against dressing — or walking — in a manner intended to display arrogance and superiority over others. The Prophet ﷺ specifically warned against dragging one's garment along the ground out of pride, a gesture associated in his time with displaying wealth and status over others through clothing.

The Adab principle at work is that the same act (fine clothing) can be either praiseworthy or blameworthy depending entirely on the intention behind it — worn out of self-respect and presentability, it is encouraged; worn specifically to look down on others, it becomes something the Prophet ﷺ warned would earn Allah's refusal to even look at such a person with favor on the Day of Judgment.`,
      },
      {
        heading: 'Modesty as the underlying purpose of clothing',
        body: `The Qur'an describes clothing's most basic purpose before any discussion of style or fashion: covering what should be covered, described as a sign of Allah's provision for humanity going back to the very first guidance given after Adam and Hawwa's mistake in the Garden. This foundational purpose — covering awrah, private areas of the body — remains the baseline requirement beneath every other consideration of style, comfort, or fashion that follows.

The Adab drawn from this is that questions of fashion and personal style, while permitted within limits, are secondary to this more basic purpose, and should never be pursued in a way that undermines it.`,
      },
      {
        heading: 'Cleanliness and care in appearance',
        body: `Beyond the question of what is covered, the Sunnah encourages active care in personal appearance and cleanliness: combing the hair, trimming what needs trimming, using pleasant fragrance, and generally not appearing disheveled or unkempt without good reason. A companion once came to the Prophet ﷺ with wild, uncombed hair, and he was sent back with an instruction to fix his appearance before returning, with the Prophet ﷺ remarking that this was better than coming looking as though his head resembled that of a devil.

This shows that the Adab of appearance is not only about avoiding immodesty or arrogance on one end, but also avoiding unnecessary carelessness on the other — a balanced middle ground of clean, presentable, modest dress and grooming is the standard being modeled.`,
      },
      {
        heading: 'Distinctiveness without imitation for its own sake',
        body: `A further piece of Adab concerns not deliberately imitating the specific dress associated with another group purely to blend in or take on their identity, a principle scholars derive from the Prophet's ﷺ general teaching that whoever imitates a people is counted among them. This is a nuanced area, since ordinary clothing that carries no specific religious or identity marker (a business suit, a t-shirt, a winter coat) is not the concern — the caution applies specifically to dress that functions as a recognized marker of another religion or belief system, worn with an intention of blending into or adopting that identity.

The Adab here calls for a self-aware relationship with clothing: comfortable adaptation to modern, practical dress is not itself a problem, but deliberately adopting the specific religious symbols or dress of another faith is a different matter entirely.`,
      },
    ],
  },

  'daily-4': {
    id: 'daily-4',
    unit: 'unit-7',
    title: 'Adab of Sleeping and Waking',
    summary: 'The Sunnah routines that bookend the day.',
    content: [
      {
        heading: 'Sleep described as a small death',
        body: `The Prophet ﷺ taught a specific dua before sleeping that frames the act itself in striking terms — not as a neutral biological necessity, but as something closely related to death, with waking each morning treated as a fresh gift not to be taken for granted.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
            english: '"In Your name, O Allah, I die and I live." — recited before sleep, framing sleep itself as a kind of small death from which waking is not guaranteed.',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Gratitude upon waking',
        body: `Given the framing above, waking each morning is met with a specific dua of gratitude — praising Allah for having brought a person back to life after that small death of sleep, and acknowledging that the final return (resurrection) is to Him alone.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
            english: '"All praise is due to Allah, who gave us life after having caused us to die, and to Him is the resurrection."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Practical preparations before sleep',
        body: `Beyond the dua itself, the Sunnah includes several practical preparations before sleeping: performing wudu, dusting off the bed before lying down (a practical habit from a time of open, less protected sleeping areas, still carrying value today), sleeping on the right side, and reciting the last verses of Surah al-Baqarah, Ayat al-Kursi, and the final three short surahs of the Qur'an as protection through the night.

These practices frame the transition into sleep as its own small ritual rather than a purely physical shutdown — a final act of remembrance and protection bookending the day, mirroring the morning and evening adhkar covered earlier in this course.`,
      },
      {
        heading: 'Not sleeping through the entire night without balance',
        body: `While sleep is necessary and its neglect is not praised, the Sunnah also encourages waking for at least a portion of the night for prayer and reflection (qiyam al-layl or tahajjud) where a person is able, rather than treating sleep as something to be maximized to its fullest extent every single night without exception. The Prophet ﷺ himself maintained a consistent pattern of waking during the later part of the night for extra prayer.

The Adab balance here mirrors the same principle found in the earlier topic on following the Sunnah without extremism: neither depriving the body of needed rest in pursuit of excessive worship, nor treating unlimited sleep as an unquestioned default with no room at all for the quiet hours of the night.`,
      },
      {
        heading: 'How the day is greeted upon rising',
        body: `Beyond the specific waking dua, the manner in which a person begins their day — the tone, the pace, the first actions taken — is treated as setting something of a spiritual keynote for the hours that follow. Rushing directly into phone notifications, arguments, or complaints immediately upon waking, before any moment of gratitude or remembrance, is a modern pattern worth being conscious of, given how deliberately the Sunnah structures the very first moments of a person's day around gratitude rather than immediate distraction.`,
      },
    ],
  },

  'daily-5': {
    id: 'daily-5',
    unit: 'unit-7',
    title: 'Adab of Sneezing and Yawning',
    summary: 'Small, specific etiquettes the Prophet ﷺ taught for these moments.',
    content: [
      {
        heading: 'A small exchange with a specific script',
        body: `Few bodily reflexes come with as detailed a scripted social exchange in the Sunnah as sneezing. The Prophet ﷺ taught a specific sequence: the one who sneezes says "Alhamdulillah," and whoever hears it is obligated to respond with a specific dua asking Allah's mercy on the sneezer — who then responds in turn with a further dua for the one who responded.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِذَا عَطَسَ أَحَدُكُمْ فَلْيَقُلِ: الْحَمْدُ لِلَّهِ، وَلْيَقُلْ لَهُ أَخُوهُ أَوْ صَاحِبُهُ: يَرْحَمُكَ اللَّهُ، فَإِذَا قَالَ لَهُ: يَرْحَمُكَ اللَّهُ، فَلْيَقُلْ: يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ',
            english: '"When one of you sneezes, let him say \'Alhamdulillah,\' and let his brother or companion say to him, \'May Allah have mercy on you.\' If he says that, let the sneezer reply, \'May Allah guide you and set your affairs right.\'"',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Why the response is treated as an obligation',
        body: `Unlike many of the etiquettes covered in this course, responding to a sneeze with "yarhamuk Allah" is treated by many scholars as an actual obligation (fard kifayah) upon those who hear it and hear the sneezer say Alhamdulillah — not merely a nice thing to do if one feels like it. This is a rare example of a piece of everyday social Adab carrying this level of legal weight, underlining how seriously even small, constant, physical moments of daily life are treated in this tradition.

If the sneezer does not say Alhamdulillah, the obligation to respond with mercy does not apply — the two halves of this exchange are linked, with the sneezer's own act of gratitude being what triggers the surrounding community's response.`,
      },
      {
        heading: 'Covering the sneeze',
        body: `Alongside the verbal exchange, the Prophet ﷺ is reported to have covered his mouth with his hand or his garment when sneezing, and lowered his voice as much as possible while doing so. This detail, easy to overlook next to the more famous verbal exchange, shows that the Adab of sneezing was never only about the words exchanged afterward — the physical courtesy of containing the sneeze itself, for the comfort and health of those nearby, was part of the same package of manners.`,
      },
      {
        heading: 'Yawning treated very differently from sneezing',
        body: `In sharp contrast to the encouraged, almost celebrated exchange around sneezing, the Prophet ﷺ treated yawning with something closer to caution and mild discouragement.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'التَّثَاؤُبُ مِنَ الشَّيْطَانِ',
            english: '"Yawning is from Shaytan." He instructed that when one feels the urge to yawn, one should resist it as much as possible, and if it cannot be helped, to cover the mouth.',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The contrast between the two, and what it teaches',
        body: `Scholars have noted the deliberate contrast the Sunnah draws between these two bodily reflexes: sneezing is associated with lightness and alertness of the body, and is met with gratitude and mutual blessing; yawning is associated with heaviness, laziness, and a slackening of the body, and is met with resistance and a degree of embarrassment (hence covering the mouth) rather than celebration.

The Adab drawn from this small contrast reflects a broader theme running through this entire unit: Islam does not treat the body's involuntary moments as beneath religious attention. Even something as unremarkable as a yawn is placed into a framework of meaning, encouraged in one direction (alertness, gratitude) and gently discouraged in the other (lethargy, indulgence).`,
      },
    ],
  },

  'daily-6': {
    id: 'daily-6',
    unit: 'unit-7',
    title: 'Adab of Laughter and Humor',
    summary: 'Where the line sits between wholesome humor and harmful joking.',
    content: [
      {
        heading: 'The Prophet ﷺ joked, but never lied',
        body: `Far from being a solemn or humorless figure, the Prophet ﷺ is reported to have joked with his companions regularly, smiled often, and enjoyed lighthearted moments within his household and community. He set one clear boundary on this humor himself, in his own words.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِنِّي لَأَمْزَحُ وَلَا أَقُولُ إِلَّا حَقًّا',
            english: '"Indeed, I joke, but I say nothing except the truth."',
            source: 'Al-Mu\'jam al-Kabir, al-Tabarani',
          },
        ],
      },
      {
        heading: 'Real examples of the Prophet\'s ﷺ humor',
        body: `The seerah preserves several specific instances of his lighthearted humor: telling an elderly woman that no old women would enter Paradise (referring to the fact that all its inhabitants are recreated youthful, not excluding her), teasing a companion about wanting to give him a camel and then a baby camel (technically the offspring of any camel), and playfully racing with Aisha on more than one occasion, including allowing her to win a rematch after he had won the first race.

These examples matter because they establish that humor itself was never the problem in the Prophet's ﷺ example — his jokes were consistently gentle, true, and free of any real sting, teaching by demonstration what wholesome humor actually looks like rather than merely prohibiting its opposite in the abstract.`,
      },
      {
        heading: 'The line: never at the cost of truth or another\'s dignity',
        body: `The boundary the Prophet ﷺ himself named — joking without ever saying anything untrue — rules out a very common category of modern humor: jokes built on exaggeration presented as fact, fabricated stories told for comedic effect and passed off as real, or pranks that rely on genuinely deceiving someone rather than harmless, transparent playfulness.

A second boundary, drawn from his broader teaching on protecting others' dignity, rules out humor that mocks, humiliates, or targets a specific person's genuine insecurities for laughs — the difference between humor that is shared warmly with someone and humor that is inflicted upon them at their expense.`,
      },
      {
        heading: 'A caution against excessive laughter',
        body: `Alongside the permission and modeling of wholesome humor, a specific caution exists against excessive laughter as a general life pattern, tied to its effect on the heart's spiritual sensitivity.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَا تُكْثِرُوا الضَّحِكَ فَإِنَّ كَثْرَةَ الضَّحِكِ تُمِيتُ الْقَلْبَ',
            english: '"Do not laugh excessively, for excessive laughter deadens the heart."',
            source: 'Sunan Ibn Majah',
          },
        ],
      },
      {
        heading: 'Balance, not suppression',
        body: `Taken together, the Adab of laughter and humor in Islam is not a call toward permanent solemnity or the suppression of joy — the Prophet's ﷺ own frequent smiling and joking rules that reading out entirely. Rather, it asks for the same kind of moderation found throughout this unit: humor that is honest, that respects the dignity of everyone involved, and that occupies its proper place within a life still oriented toward remembrance of Allah, rather than becoming a constant, heart-numbing habit that crowds out the more serious moments a balanced life also requires.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 8 — ADAB TOWARD OTHERS (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Ibn Kathir, Qurtubi, Baghawi via quran.com and quran.ksu.edu.sa)
  // before writing. English renderings are an original paraphrase
  // of the meaning, not copied from a single named published
  // translation.
  // ─────────────────────────────────────────────────────────
  'others-1': {
    id: 'others-1',
    unit: 'unit-8',
    title: 'Adab Toward Neighbors',
    summary: 'The rights of neighbors and why Islam takes them so seriously.',
    content: [
      {
        heading: 'Neighbors named beside parents and the poor',
        body: `The Qur'an lists neighbors among a set of people owed excellent treatment, in the same verse that opens with the command to worship Allah alone and to be good to parents — placing the neighbor's right within the same continuous instruction rather than as a lesser, separate concern.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا ... وَالْجَارِ ذِي الْقُرْبَىٰ وَالْجَارِ الْجُنُبِ',
            english: 'Worship Allah and associate nothing with Him, and be good to parents ... and to the neighbor who is a relative and the neighbor who is a stranger.',
            source: 'Surah an-Nisa, 4:36',
          },
        ],
      },
      {
        heading: 'Gabriel\'s repeated advice about the neighbor',
        body: `The Prophet ﷺ described the angel Jibril advising him about the rights of the neighbor so repeatedly and so insistently that he began to wonder whether a neighbor might eventually be given a legal share of inheritance — a right otherwise reserved strictly for family.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ',
            english: '"Jibril kept advising me about the neighbor until I thought he would make him an heir."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Honoring the neighbor tied to the completeness of faith',
        body: `As with several other topics in this course, the Prophet ﷺ used the language of faith's completeness specifically in connection with how a neighbor is treated, rather than framing it as a separate matter of social etiquette disconnected from religious standing.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ',
            english: '"Whoever believes in Allah and the Last Day should honor his neighbor."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Not sleeping full while a neighbor goes hungry',
        body: `The Prophet ﷺ described a specific, uncomfortable standard regarding a neighbor's basic needs: a person is not considered a true believer if they eat their fill while their neighbor beside them goes hungry, knowing about it. This standard is demanding precisely because it requires active awareness of a neighbor's situation, not simply refraining from actively harming them.

The Adab drawn from this extends the definition of "neighborly rights" well beyond avoiding disturbance or conflict — it includes a positive responsibility to notice and respond to genuine need next door, treating a neighbor's hunger as something that should disturb a believer's own comfort.`,
      },
      {
        heading: 'Levels of neighborly right',
        body: `Scholars note that not every neighbor carries an identical weight of right — a neighbor who is also a relative carries a combined right (of kinship and of neighborliness), a Muslim neighbor with no family tie carries the right of neighborliness and of shared faith, and a non-Muslim neighbor still carries the right of neighborliness alone, which remains a real and serious obligation in its own right, not nothing at all.

This layered understanding prevents two opposite errors: assuming only family-like neighbors deserve real consideration, or assuming the specific added weight given to a believing, related neighbor makes other neighbors' rights meaningless by comparison.`,
      },
      {
        heading: 'Everyday neighborly courtesy',
        body: `Beyond the serious matters of hunger and general welfare, the Sunnah encourages simple, constant courtesies: greeting neighbors warmly, sharing food where possible even in small amounts, tolerating minor and ordinary annoyances (noise, parking, small disputes) with patience rather than escalation, and checking in on a neighbor who has been unwell or going through a difficult time.

The Prophet ﷺ specifically advised a companion who complained about a difficult neighbor to be patient and to increase his own good treatment further still, rather than escalating in response — a piece of Adab that asks for restraint precisely in the relationship most people find easiest to let ordinary irritation take over, given how close and constant proximity to a difficult neighbor actually is.`,
      },
    ],
  },

  'others-2': {
    id: 'others-2',
    unit: 'unit-8',
    title: 'Adab Toward Friends',
    summary: 'What Islam expects of true, beneficial friendship.',
    content: [
      {
        heading: 'A friend\'s influence on one\'s own religion',
        body: `The Prophet ﷺ described friendship not as a neutral social convenience but as something that actively shapes a person's character and religious direction, specific enough that he gave direct instruction on how to choose close companions.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الْمَرْءُ عَلَى دِينِ خَلِيلِهِ فَلْيَنْظُرْ أَحَدُكُمْ مَنْ يُخَالِلُ',
            english: '"A person follows the religion (way of life) of his close friend, so let each of you look carefully at whom he takes as a close companion."',
            source: 'Jami\' at-Tirmidhi and Sunan Abi Dawud',
          },
        ],
      },
      {
        heading: 'The musk-carrier and the bellows-blower',
        body: `To make this influence vivid, the Prophet ﷺ used a memorable comparison between a good companion and a harmful one, drawn from two very different smells a person might come away carrying after spending time with someone.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَثَلُ الْجَلِيسِ الصَّالِحِ وَالسَّوْءِ كَحَامِلِ الْمِسْكِ وَنَافِخِ الْكِيرِ',
            english: '"The example of a good companion and a bad one is like a carrier of musk and a blower of a blacksmith\'s bellows: from the first you will either buy some, be given some, or at least catch a pleasant scent; from the second, you will either have your clothes burned or catch an unpleasant smell."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'What genuine friendship asks of a person',
        body: `Beyond the question of who to befriend, the Adab of friendship covers how a friend is treated once chosen: honesty even when it is uncomfortable, keeping confidences shared in trust, offering sincere advice (nasihah) rather than only flattering agreement, and showing up during hardship, not only during ease when friendship costs nothing.

The Prophet ﷺ described religion itself, at its core, as sincere advice (nasihah) — offered to Allah, His Book, His Messenger, the leaders of the Muslims, and to ordinary Muslims generally — placing honest, well-intentioned advice between friends within this same broader religious principle, rather than treating flattering silence as the more polite or caring option.`,
      },
      {
        heading: 'Loving for the sake of Allah',
        body: `Islamic teaching describes a distinct category of friendship — loving someone purely for Allah's sake, based on their character and faith rather than worldly benefit, family connection, or shared interest alone. This kind of friendship is given a specific promised honor: those who loved one another for Allah's sake are described as being seated on pulpits of light, envied by the prophets and martyrs, on the Day of Judgment.

The Adab this encourages is examining the actual basis of one's closest friendships honestly — whether they exist purely for convenience, shared entertainment, or worldly benefit, or whether at least some of them are grounded in a shared commitment to good character and faith that would remain valuable even without any worldly benefit attached.`,
      },
      {
        heading: 'Ending a harmful friendship with Adab',
        body: `Just as choosing good friends is emphasized, so is recognizing when a friendship has become a genuine source of harm — pulling a person toward sin, encouraging bad habits, or consistently undermining their character and faith. Islam does not require tolerating this indefinitely for the sake of loyalty alone.

The Adab of stepping back from such a friendship, where necessary, is distinguishing this from cruelty or sudden cold rejection — gradually creating distance, being honest about the reason if asked, and avoiding public humiliation or gossip about the person even while reducing closeness, reflects the same standard of good character expected in every other relationship covered in this course, even one that is ending.`,
      },
    ],
  },

  'others-3': {
    id: 'others-3',
    unit: 'unit-8',
    title: 'Adab Toward Teachers and Scholars',
    summary: 'Respect for those who carry and transmit knowledge.',
    content: [
      {
        heading: 'Those given knowledge are raised in rank',
        body: `The Qur'an directly ties possessing knowledge to an elevated status before Allah, mentioned specifically in the context of showing courtesy and making room for others in a gathering — connecting good manners in a learning setting directly to the honor given to those who carry knowledge.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ',
            english: 'Allah will raise those who believe among you, and those given knowledge, by degrees.',
            source: 'Surah al-Mujadilah, 58:11',
          },
        ],
      },
      {
        heading: 'The scholars as inheritors of the prophets',
        body: `The Prophet ﷺ described scholars — those who genuinely carry and transmit sound religious knowledge — as the inheritors of the prophets, since prophets themselves left behind no worldly wealth to inherit, only knowledge. Whoever takes up this knowledge has taken a substantial share of that prophetic inheritance.

This framing elevates the Adab owed to a genuine teacher of religious knowledge well beyond ordinary professional courtesy — the relationship carries something of the same reverence due to the prophetic tradition itself, since the teacher is functioning as a link in the chain that carries that tradition forward.`,
      },
      {
        heading: 'Adab in the physical presence of a teacher',
        body: `Classical scholarship on seeking knowledge places heavy emphasis on physical and behavioral etiquette in a teacher's presence: sitting attentively rather than lounging carelessly, not interrupting mid-explanation, asking questions at appropriate moments rather than derailing a lesson, and not walking ahead of a teacher or beginning to speak over them in a gathering.

While some of these specific customs reflect the particular culture of classical learning circles rather than fixed religious obligation, the underlying Adab principle they express remains directly relevant today: attentiveness and basic courtesy toward whoever is taking the time to teach, whether in a masjid class, an online lecture, or a formal school setting.`,
      },
    ],
  },

  'others-4': {
    id: 'others-4',
    unit: 'unit-8',
    title: 'Adab Toward Elders and the Young',
    summary: 'Honoring age and showing mercy to youth.',
    content: [
      {
        heading: 'A single standard covering both directions',
        body: `The Prophet ﷺ gave a compact but comprehensive standard covering two very different relationships in a single statement — mercy toward the young, and honor toward the old — treating both as inseparable markers of belonging fully to his community.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا',
            english: '"He is not one of us who does not show mercy to our young and does not honor our elders."',
            source: 'Jami\' at-Tirmidhi and Sunan Abi Dawud',
          },
        ],
      },
      {
        heading: 'Practical honor toward elders',
        body: `Honoring elders in the Sunnah takes concrete, practical forms: giving them priority in speaking, serving, or being served first (the Prophet ﷺ specifically instructed giving a drink first to the eldest present in one well-known incident), standing to greet an elder respectfully in many cultural contexts consistent with this principle, being patient with slower movement or repeated stories, and generally deferring to their experience rather than dismissing it as outdated.

This Adab pushes against a modern tendency, in some settings, to treat age primarily as a technological or cultural gap to be tolerated rather than a form of accumulated experience genuinely worth honoring.`,
      },
      {
        heading: 'Mercy toward the young, not merely tolerance',
        body: `The Adab toward children and younger people asks for something more active than simply not harming them — genuine mercy, patience with immaturity, and gentleness with their mistakes, echoing the fuller treatment already given to children specifically within the family unit earlier in this course. Applied more broadly here, this includes younger relatives, students, junior colleagues, and any young person a person interacts with outside their own household.

The Prophet ﷺ modeled this repeatedly with children who were not his own — greeting them, joking with them, and responding with patience rather than irritation to the ordinary disruptions and mistakes of youth.`,
      },
      {
        heading: 'When age and correctness conflict',
        body: `A more difficult piece of Adab arises when an elder is factually or morally wrong about something, or a younger person happens to be correct in a disagreement. Honoring age does not mean uncritical agreement regardless of substance — the Sunnah records younger companions respectfully correcting older ones, and even correcting the Prophet's ﷺ own companions on points of knowledge, without this being treated as disrespect.

The Adab balance here is disagreeing, where necessary, with continued courtesy and respect in tone and manner, rather than either suppressing a needed correction purely out of deference to age, or delivering a correct point with a harshness that itself becomes a failure of respect toward an elder.`,
      },
      {
        heading: 'Bridging generations rather than dismissing either',
        body: `Much modern friction between generations stems from each side assuming the worst of the other — elders assuming the young are careless or disrespectful by nature, and the young assuming elders are simply out of touch. The Adab modeled in the Sunnah cuts against both assumptions: elders are owed honor for their experience and status, while the young are owed mercy, patience, and genuine investment in their growth, and neither group is written off wholesale on account of their age alone.`,
      },
    ],
  },

  'others-5': {
    id: 'others-5',
    unit: 'unit-8',
    title: 'Adab of Seeking Permission',
    summary: 'Knocking, announcing yourself, and respecting others\' space.',
    content: [
      {
        heading: 'A specific, bounded number of attempts',
        body: `The Sunnah does not leave seeking permission to enter someone's home as an indefinite, open-ended process — the Prophet ﷺ gave a specific limit to how many times a person should seek entry before respectfully withdrawing.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'الِاسْتِئْذَانُ ثَلَاثٌ، فَإِنْ أُذِنَ لَكَ وَإِلَّا فَارْجِعْ',
            english: '"Seeking permission is three times; if you are given permission, enter, and if not, then go back."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Why a limit is itself part of the Adab',
        body: `A person once explained to the Prophet ﷺ that Abu Musa al-Ash'ari had sought permission to enter, been unanswered, and left after three attempts — and when questioned about it, Abu Musa produced a witness confirming this was the Prophet's ﷺ own teaching. The lesson embedded in this specific limit is that persistence past a reasonable point becomes its own violation of the household's space and comfort, regardless of good intention.

The Adab here corrects an instinct that might treat "trying harder" as automatically more polite or more considerate — beyond a bounded number of attempts, continuing to seek entry becomes pressure rather than courtesy, and a gracious withdrawal is the more respectful choice.`,
      },
      {
        heading: 'Not standing directly facing the door',
        body: `Beyond the number of attempts, the Sunnah teaches a specific physical positioning while waiting at someone's door: standing to the side rather than directly facing it, since the door may open unexpectedly on a household member in a state of undress or otherwise unprepared for a visitor's direct view inside. This small physical detail reflects the same broader principle of household privacy already covered in this course's family unit — a visitor's consideration for a household's privacy begins before the door is even answered.`,
      },
      {
        heading: 'Announcing oneself clearly, not through games or tricks',
        body: `When asked who is at the door, identifying oneself clearly by name — rather than a vague, unhelpful "it's me" — is the taught Sunnah response, since an unclear answer forces the household to open the door blind or engage in an unnecessary guessing exchange. A companion once answered "it's me" when the Prophet ﷺ asked who was there, and he responded with visible displeasure at the unhelpful vagueness of the answer.

This small correction reflects a consistent theme in this unit: Adab toward others is often expressed through small, practical clarity and consideration — not making a simple interaction needlessly more effortful for the other party through vagueness, games, or unnecessary suspense.`,
      },
      {
        heading: 'Seeking permission extends beyond physical doors',
        body: `While the clearest examples of this Adab concern physically entering a home, the underlying principle extends naturally into other modern contexts: entering someone's private digital space (reading messages left open on a shared device, browsing through someone's phone), entering a closed office or room at work, or joining a private conversation already in progress. The specific mechanics differ, but the same underlying respect for a boundary that is not automatically open to anyone applies across all of them.`,
      },
    ],
  },

  'others-6': {
    id: 'others-6',
    unit: 'unit-8',
    title: 'Adab of Hosting Guests',
    summary: 'The Islamic tradition of hospitality and honoring a guest.',
    content: [
      {
        heading: 'Ibrahim\'s honored guests',
        body: `The Qur'an preserves the story of Ibrahim (peace be upon him) receiving unexpected visitors — later revealed to be angels — and describes them specifically as "honored guests," a description the tafsir literature ties directly to how Ibrahim himself treated them: serving them personally, without delay, and without waiting to be asked.`,
        verses: [
          {
            type: 'quran',
            arabic: 'هَلْ أَتَاكَ حَدِيثُ ضَيْفِ إِبْرَاهِيمَ الْمُكْرَمِينَ',
            english: 'Has the story reached you of the honored guests of Ibrahim?',
            source: 'Surah adh-Dhariyat, 51:24',
          },
        ],
      },
      {
        heading: 'Honoring guests as a marker of faith',
        body: `As with several other relationships in this unit, the Prophet ﷺ connected the treatment of a guest directly to the completeness of a person's faith — the same phrase used earlier for neighbors is applied here to guests, showing that hospitality is treated as a religious matter, not merely a cultural nicety.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ',
            english: '"Whoever believes in Allah and the Last Day should honor his guest."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'A specific, bounded duration for hospitality',
        body: `The Prophet ﷺ did not leave the obligation of hospitality open-ended and undefined — he specified a particular window of especially generous treatment, followed by a longer general courtesy, and clarified where the strict obligation actually ends. The specific wording distinguishes a guest's first day and night — treated with special generosity — from three days of hospitality more broadly, after which continued generosity is no longer an obligation but a voluntary act of charity.

The Adab in this precise structure protects both sides: it commits a host to genuine, generous hospitality rather than a token gesture, while also protecting a host from indefinite, unbounded obligation to a guest who overstays.`,
      },
      {
        heading: 'Hospitality without burdening oneself unreasonably',
        body: `While generosity is emphasized, the Sunnah does not ask a host to bankrupt themselves or create hardship for their own household in order to impress a guest. The Prophet ﷺ himself hosted with whatever was reasonably available, sometimes simple food, and the emphasis throughout is on warmth, attentiveness, and generosity relative to one's actual means — not lavish display exceeding what is sensible.

The Adab balance here mirrors a theme found elsewhere in this course: sincerity and warmth in the gesture matter more than the scale of what is offered, and hospitality that creates real hardship for a host's own family in pursuit of appearances misses the spirit of what is actually being encouraged.`,
      },
      {
        heading: 'Adab from the guest\'s side as well',
        body: `Hospitality is not a one-directional obligation resting only on the host. A guest carries their own Adab: not overstaying beyond what is reasonable or what has been offered, not imposing unreasonable demands on a host's time or resources, expressing genuine gratitude, and being mindful of a host's own schedule, privacy, and household rhythm rather than assuming unlimited access simply because an invitation was extended.

A guest who is inconsiderate of these boundaries places a host in the difficult position of either enduring real inconvenience or having to awkwardly raise a limit that good manners should have anticipated without needing to be stated.`,
      },
    ],
  },

  'others-7': {
    id: 'others-7',
    unit: 'unit-8',
    title: 'Adab Toward Non-Muslims',
    summary: 'Justice, kindness, and good conduct across religious difference.',
    content: [
      {
        heading: 'Kindness and justice are not restricted by religious difference',
        body: `The Qur'an directly corrects any assumption that kindness toward non-Muslims is somehow prohibited or discouraged as a matter of religious loyalty, specifically addressing those who have shown no hostility and pose no threat.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ وَلَمْ يُخْرِجُوكُم مِّن دِيَارِكُمْ أَن تَبَرُّوهُمْ وَتُقْسِطُوا إِلَيْهِمْ ۚ إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ',
            english: 'Allah does not forbid you from being good and just toward those who have not fought you over religion nor driven you from your homes — indeed, Allah loves those who act justly.',
            source: 'Surah al-Mumtahanah, 60:8',
          },
        ],
      },
      {
        heading: 'Justice as a non-negotiable standard toward everyone',
        body: `The verse above specifically emphasizes both bir (kindness/goodness) and qist (justice/fairness) toward non-hostile non-Muslims — not merely tolerance, but active good conduct and equitable treatment. This is a direct answer to any impulse to treat basic fairness as something owed only within one's own religious community, with lesser standards applied outside it.

The Adab drawn from this is that a Muslim's honesty in business, fairness in judgment, and basic kindness in everyday interaction are not meant to fluctuate based on the other party's religion — the standard of justice commanded throughout the Qur'an is presented as a general human standard, not a conditional one.`,
      },
      {
        heading: 'Respect for a human being, regardless of faith',
        body: `The Prophet ﷺ once stood up as a funeral procession passed by, and when told the deceased was Jewish rather than Muslim, he responded with a short but pointed question rather than sitting back down.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'أَلَيْسَتْ نَفْسًا؟',
            english: '"Was it not a soul?" — his response upon being told the funeral passing by belonged to a non-Muslim, having already stood out of respect.',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Good neighborliness and social conduct across religious lines',
        body: `The Prophet ﷺ maintained ongoing social and even close personal relationships with non-Muslims throughout his life — trading with them, having non-Muslim neighbors, and, according to authentic reports, accepting an invitation to eat at the home of a Jewish neighbor. These are not incidental details; they demonstrate that ordinary neighborliness, business dealing, and ordinary social courtesy toward non-Muslims were part of his lived example, not merely a legal permission granted reluctantly.

The Adab drawn from this is that everyday interactions — greeting a non-Muslim neighbor, doing business fairly with a non-Muslim colleague, accepting reasonable hospitality — sit comfortably within the Prophetic example, rather than representing some kind of compromise or exception to be minimized.`,
      },
      {
        heading: 'Disagreement in belief without disrespect in conduct',
        body: `None of the above erases genuine theological disagreement — Islam maintains clear and firm positions on matters of belief, and this unit's Adab does not ask for those convictions to be softened or hidden out of politeness. What it does ask is that disagreement in belief be kept separate from conduct: a Muslim can hold firm theological conviction while still extending everyday kindness, fair dealing, and basic human respect and dignity to someone who does not share it.

This distinction — firm in conviction, generous in conduct — captures the overall Adab of this final topic and, in many ways, the spirit of this entire unit: the standard of good character this course has covered throughout is not reserved only for those who share one's own faith, family, or community, but is meant to be a consistent character trait extended broadly, even where genuine and serious differences remain.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 9 — ADAB OF KNOWLEDGE (full content, expanded)
  //
  // Note: this unit's first topic focuses specifically on the
  // student's Adab within an active learning relationship
  // (choosing a teacher, asking questions, receiving correction) —
  // distinct from Unit 8's "Adab Toward Teachers and Scholars,"
  // which covered the general honor owed to those who carry
  // knowledge as a category of person, not the mechanics of the
  // learning relationship itself.
  //
  // Qur'anic Arabic checked against primary tafsir sources (Tabari,
  // Ibn Kathir via quran.com and quran.ksu.edu.sa) before writing.
  // English renderings are an original paraphrase of the meaning,
  // not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'knowledge-1': {
    id: 'knowledge-1',
    unit: 'unit-9',
    title: 'Adab of the Student Toward the Teacher',
    summary: 'How the earliest scholars treated those who taught them.',
    content: [
      {
        heading: 'Choosing a teacher with real care',
        body: `The early scholars treated the choice of who to learn from as a serious decision, not an incidental one — since a teacher shapes not only what a student knows, but how they think, reason, and approach knowledge itself. Malik ibn Anas, one of the great early jurists, is reported to have said he would not take knowledge from four types of people, among them someone not known for religious steadfastness in visible matters, and someone who, though truthful in speech generally, would narrate anything at all without care for accuracy.

The Adab drawn from this is that seeking knowledge is not merely about content transfer — the character and reliability of the source matters, and a student is right to be thoughtful, not indiscriminate, about whose teaching they commit real time and trust to.`,
      },
      {
        heading: 'Patience with a teacher\'s method, even when demanding',
        body: `Learning frequently involves correction, repetition, and a teacher's own particular style — which may, at times, feel slow, strict, or simply different from what a student expected or preferred. The Adab of studenthood asks for patience with this process rather than treating every difficulty in the learning relationship as a sign something is wrong.

The story of Musa (peace be upon him) and al-Khidr in the Qur'an, though describing a unique prophetic encounter rather than an ordinary teacher-student relationship, still carries a broadly applicable lesson: Musa struggled to withhold judgment and questions during al-Khidr's unconventional actions, illustrating in an exaggerated form how difficult patience during unfamiliar teaching can be, and how easily impatience can end a valuable learning relationship prematurely.`,
      },
      {
        heading: 'Asking questions with sincerity, not performance',
        body: `Questions are a normal and encouraged part of learning, but the early scholars distinguished between a question asked out of genuine need to understand and a question asked to test, impress, or put a teacher in a difficult position. The Prophet ﷺ was once approached with a series of unusually persistent and provocative questions from a Bedouin, and while he answered patiently, the broader Sunnah pattern favors questions rooted in real need over questions meant to perform cleverness or catch someone out.

The Adab here is a kind of self-check before raising a hand or sending a message: is this question serving genuine understanding, or serving something else — a desire to be seen as sharp, or to challenge a teacher publicly rather than privately where a concern would be more appropriately raised?`,
      },
      {
        heading: 'Not abandoning a teacher over minor matters',
        body: `The relationship between a sincere student and a good teacher was historically treated as something worth real investment and loyalty, not casually discarded the moment a disagreement or a difficult correction occurred. Students in the classical tradition often remained with a single teacher for years, precisely because depth of understanding tends to come from sustained study with someone who genuinely knows a student's strengths and weaknesses, not from constantly switching sources at the first sign of friction.

This is not a call to tolerate a genuinely unqualified or harmful teacher — that discernment matters, as covered in the first section of this topic — but a caution against a more modern pattern of abandoning a good teacher over minor, ordinary friction that any long learning relationship will naturally include.`,
      },
      {
        heading: 'Gratitude that outlasts the lessons themselves',
        body: `The early scholars are recorded making dua for their teachers long after their studies had ended, and speaking of them with visible respect and gratitude even after having gone on to considerable achievement of their own. Ash-Shafi'i, one of the great jurists, is reported to have said he would turn the pages of his books quietly so as not to disturb Malik, his own teacher, out of the sheer weight of respect he held for him — a small but telling detail about how seriously gratitude toward a teacher was maintained.

The Adab here is treating a teacher's investment as a debt of gratitude that does not expire once a course, a class, or a formal period of study ends — continued respect, dua, and acknowledgment remain appropriate long afterward.`,
      },
      {
        heading: 'Humility even after surpassing a teacher',
        body: `It is entirely possible, and even expected in a healthy tradition of learning, for a student to eventually surpass their teacher in knowledge, skill, or scholarly output. The Adab of studenthood asks that this natural progression not become an occasion for looking down on the very teacher who provided the foundation that made the growth possible in the first place.

Many of the greatest scholars in Islamic history spoke of their own teachers with continued humility and acknowledgment even after becoming more widely known or respected themselves — recognizing that surpassing a teacher in visible achievement does not erase the genuine debt owed for having been given a starting point at all.`,
      },
    ],
  },

  'knowledge-2': {
    id: 'knowledge-2',
    unit: 'unit-9',
    title: 'Adab of Seeking Knowledge',
    summary: 'Sincerity, patience, and humility in the pursuit of ilm.',
    content: [
      {
        heading: 'A prayer for more, not a claim of enough',
        body: `Even the Prophet ﷺ, given the Qur'an itself directly from Allah, was taught to ask for continued increase in knowledge rather than treating what he already possessed as sufficient — a striking model for anyone tempted to feel they have learned "enough" at any stage.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
            english: 'And say, "My Lord, increase me in knowledge."',
            source: 'Surah Ta-Ha, 20:114',
          },
        ],
      },
      {
        heading: 'Every path toward knowledge is a path toward Paradise',
        body: `The Prophet ﷺ tied the pursuit of religious knowledge directly to one of the greatest rewards a person could seek, framing the effort itself — not only the outcome — as something Allah responds to.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
            english: '"Whoever takes a path seeking knowledge, Allah makes easy for him a path to Paradise because of it."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Sincerity of intention behind seeking knowledge',
        body: `Just as covered elsewhere in this course regarding Adab and intention generally, the pursuit of knowledge carries a specific and serious warning about the intention behind it. The Prophet ﷺ warned that whoever seeks knowledge that should be sought for Allah's sake, but pursues it instead to gain worldly advantage — status, income, or the admiration of others — will not even catch the scent of Paradise on the Day of Judgment, a severe warning given the ordinary expectation that religious learning is a path toward reward, not away from it.

This does not mean a person cannot earn a livelihood through teaching or scholarship — that is entirely permitted — but the underlying, driving motivation matters enormously, and a person seeking knowledge is asked to regularly examine why they are actually doing so.`,
      },
      {
        heading: 'Acting upon knowledge, not merely collecting it',
        body: `Islamic tradition treats knowledge that is learned but never acted upon as carrying real spiritual danger rather than being a harmless, neutral accumulation. Several early scholars described a person's knowledge as either an argument for them or against them on the Day of Judgment, depending specifically on whether it was acted upon — a scholar who taught good conduct while failing to live it themselves was viewed with particular concern, precisely because their knowledge should have produced better conduct and did not.

The Adab here asks each piece of knowledge gained to be met with a practical follow-up question: what does this now require me to actually do differently, not simply what have I now learned to say or explain to others.`,
      },
      {
        heading: 'Humility despite growing knowledge',
        body: `A common and well-documented danger for those who gain real knowledge is a subtle pride that can creep in — a sense of superiority over those who know less, or impatience with beginners' questions that once would not have seemed elementary at all. The early scholars consistently warned against this, some describing true knowledge as something that increases humility precisely because deeper study reveals how much remains unknown, rather than producing a false sense of having mastered a subject completely.

The Adab modeled by the greatest scholars in Islamic history includes a visible humility proportional to, not inversely related to, the depth of their actual learning — those who knew the most were frequently recorded as being among the most careful to avoid claiming certainty they did not have.`,
      },
      {
        heading: 'Knowledge sought without an artificial finish line',
        body: `The pursuit of knowledge in Islam is not framed as a project with a natural completion point after which a person may set it aside entirely — the same principle covered in this course's topic on the Qur'an, warning against neglecting it once memorized, applies more broadly to religious learning as a whole. The tradition of seeking knowledge "from the cradle to the grave," widely attributed to early scholarly counsel even where its precise chain is debated, captures a genuine and consistently modeled attitude: learning is treated as a lifelong posture, not a stage of life to be completed and moved past.`,
      },
    ],
  },

  'knowledge-3': {
    id: 'knowledge-3',
    unit: 'unit-9',
    title: 'Adab of Teaching Others',
    summary: 'Responsibility and gentleness in passing knowledge on.',
    content: [
      {
        heading: 'The serious warning against concealing knowledge',
        body: `Having genuine knowledge creates a corresponding responsibility to share it when asked and needed — the Prophet ﷺ described a severe consequence specifically for someone who is asked about something they know and deliberately withholds it.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ سُئِلَ عَنْ عِلْمٍ فَكَتَمَهُ أُلْجِمَ يَوْمَ الْقِيَامَةِ بِلِجَامٍ مِنْ نَارٍ',
            english: '"Whoever is asked about knowledge and conceals it will be bridled on the Day of Judgment with a bridle of fire."',
            source: 'Sunan Abi Dawud and Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Making things easy, not driving people away',
        body: `The Prophet ﷺ gave direct instruction on the manner of teaching and conveying religion, prioritizing accessibility and encouragement over severity, specifically to new Muslims and companions sent to teach in various regions.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'يَسِّرُوا وَلَا تُعَسِّرُوا، وَبَشِّرُوا وَلَا تُنَفِّرُوا',
            english: '"Make things easy and do not make them difficult, give glad tidings and do not drive people away."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Teaching according to the listener\'s capacity',
        body: `A teacher genuinely serving their audience — rather than simply displaying their own knowledge — pays close attention to who they are actually teaching: a beginner needs different material, pacing, and vocabulary than someone advanced, and a lesson pitched entirely over a learner's head serves the teacher's ego more than the student's actual growth. Ibn Mas'ud, a senior companion, cautioned against speaking to people at a level beyond their understanding specifically because it risks causing confusion or even doubt that a more gradual approach would have avoided entirely.

The Adab of good teaching, then, includes real attentiveness to the specific audience in front of a teacher, rather than delivering the same fixed content and pace regardless of who is actually listening and what they are actually able to absorb at that stage.`,
      },
      {
        heading: 'Patience with repeated and basic questions',
        body: `Teachers, especially those who have taught the same material many times, can find repeated or seemingly basic questions tiresome — but the Adab of teaching asks for the same patience toward a struggling student that a good teacher once hoped for from their own teachers. A question a teacher has answered a hundred times is often being asked, genuinely, for the first time by the person in front of them, and treating it with irritation communicates more about the teacher's own impatience than about anything actually wrong with the question.`,
      },
      {
        heading: 'Teaching by example, not only by instruction',
        body: `The Prophet's ﷺ own method of teaching relied heavily on demonstration and lived example alongside verbal instruction — companions learned to pray, perform wudu, and conduct themselves largely by watching him directly, not solely from verbal description. A teacher whose own conduct visibly contradicts what they teach undermines the lesson far more seriously than any gap in their verbal explanation could, since students absorb as much from what a teacher visibly does as from what they explicitly say.

This connects directly back to this unit's second topic: a teacher's knowledge is meant to be acted upon, and this becomes doubly important precisely because a teacher's own conduct functions as part of the curriculum, whether intended or not.`,
      },
      {
        heading: 'Correcting mistakes with dignity intact',
        body: `When a student or listener makes an error, the manner of correction matters as much as the correction's accuracy. The Prophet ﷺ corrected mistakes — including serious ones, such as a Bedouin who urinated inside the masjid — without public humiliation, addressing the matter calmly and instructing companions not to react harshly in the moment, preserving the person's dignity while still ensuring the correction was made clearly.

The Adab modeled here is separating the correction of an error from an attack on the person who made it — a distinction easy to state and genuinely difficult to maintain consistently, especially when a mistake is embarrassing, public, or repeated.`,
      },
    ],
  },

  'knowledge-4': {
    id: 'knowledge-4',
    unit: 'unit-9',
    title: 'Adab of Disagreement and Debate',
    summary: 'How to differ with someone without losing good character.',
    content: [
      {
        heading: 'Even calling to truth requires manner, not only content',
        body: `The Qur'an does not treat the correctness of a message as sufficient on its own — it explicitly instructs a specific manner for conveying truth and engaging disagreement, pairing content with method as inseparable parts of the same instruction.`,
        verses: [
          {
            type: 'quran',
            arabic: 'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ',
            english: 'Call to the way of your Lord with wisdom and good instruction, and argue with them in the manner that is best.',
            source: 'Surah an-Nahl, 16:125',
          },
        ],
      },
      {
        heading: 'The difference between seeking truth and seeking to win',
        body: `A crucial distinction runs beneath every disagreement: is the goal to arrive at truth together, or to defeat the other person and be seen winning the exchange? These two goals often look identical on the surface — both involve making arguments and responding to counterpoints — but they produce very different conduct. A person seeking truth is willing to be persuaded and updates their position when shown to be wrong; a person seeking only to win treats losing an argument as a personal defeat to be avoided regardless of the actual merits.

The Adab of disagreement asks a person to regularly check which of these two postures they are actually operating from, since the second one — arguing to win rather than to find truth — tends to produce exactly the harsh, uncharitable conduct this topic seeks to correct.`,
      },
      {
        heading: 'Respecting legitimate difference in understanding',
        body: `A well-known incident from the seerah illustrates how the earliest generation handled a genuine difference in understanding a single instruction. The Prophet ﷺ told a group heading to Banu Qurayza not to pray Asr until they arrived there. Some understood this literally and delayed their prayer until after sunset upon arrival, even though this meant praying past its normal time; others understood the instruction as urging speed rather than a literal command to delay prayer regardless of circumstance, and prayed Asr on time before arriving. When this was reported to the Prophet ﷺ, he did not blame or correct either group.

This incident is frequently cited as a foundational model for legitimate scholarly disagreement (ikhtilaf) — both groups reasoned sincerely from the same instruction and reached different, defensible conclusions, and the correct response was not to declare one group simply wrong, but to recognize the legitimacy of both sincere interpretations.`,
      },
      {
        heading: 'Disagreeing with the position, not attacking the person',
        body: `The Adab of debate distinguishes sharply between challenging an argument and attacking the character, intelligence, or sincerity of the person making it. A response that says "this reasoning has a problem, specifically here" engages with substance; a response that says "only a foolish or dishonest person would think this" abandons the actual disagreement in favor of a personal attack that settles nothing and typically escalates rather than resolves the underlying dispute.

This distinction becomes especially important in disagreements between sincere Muslims over matters where legitimate scholarly difference exists — treating a differing position, arrived at through honest reasoning, as equivalent to sin or bad faith is itself a failure of Adab, regardless of which position ultimately turns out to be correct.`,
      },
      {
        heading: 'Knowing when to disengage',
        body: `Not every disagreement needs to be pursued to a resolution, and the Adab of debate includes recognizing when continuing an exchange has stopped serving any constructive purpose — when a person has become entirely unwilling to consider another view, when the exchange has shifted from ideas to insults, or when an audience watching a public exchange stands to be more harmed than helped by its continuation. Withdrawing from an unproductive argument is not a concession of being wrong; it is itself a piece of Adab, protecting both participants from a deteriorating exchange that truth-seeking conversation has already stopped being.`,
      },
      {
        heading: 'Humility about being correctable oneself',
        body: `The final piece of Adab in disagreement is holding one's own position with enough humility to recognize that a person the same age, background, or level of knowledge as an opponent could just as easily be the mistaken one in any given exchange — a companion once quoted an early scholar (widely attributed to al-Shafi'i) saying that his own opinion was correct with the possibility of being wrong, and another's opinion was wrong with the possibility of being correct.

This posture — confident enough to hold a considered position, humble enough to know it could be mistaken — captures the overall spirit of Adab this entire unit has built toward: knowledge pursued sincerely, taught generously, and defended without ever treating disagreement as an excuse to abandon good character.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 10 — ADAB IN SOCIETY (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Ibn
  // Kathir, Qurtubi via quran.com and quran.ksu.edu.sa) before
  // writing. English renderings are an original paraphrase of the
  // meaning, not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'society-1': {
    id: 'society-1',
    unit: 'unit-10',
    title: 'Adab of the Marketplace and Business',
    summary: 'Honesty and fairness in trade and dealings with others.',
    content: [
      {
        heading: 'A direct warning against cheating measures',
        body: `An entire short surah opens with a pointed warning aimed specifically at commercial dishonesty — those who demand full measure when receiving from others, but shortchange when giving in return. According to the tafsir, this surah was revealed in response to a genuine, documented business practice in Madinah at the time, and its revelation is credited with directly correcting that community's trading habits.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَيْلٌ لِّلْمُطَفِّفِينَ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ وَإِذَا كَالُوهُمْ أَوْ وَزَنُوهُمْ يُخْسِرُونَ',
            english: 'Woe to those who give short measure — who, when they receive a measure from others, take it in full, but when they measure or weigh for others, they give less than due.',
            source: 'Surah al-Mutaffifin, 83:1-3',
          },
        ],
      },
      {
        heading: 'The truthful merchant\'s rare company',
        body: `Against this backdrop of warning, the Prophet ﷺ offered an equally striking promise for the opposite conduct — placing an honest merchant in the company of some of the most honored categories of people in the afterlife.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'التَّاجِرُ الصَّدُوقُ الْأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ',
            english: '"The truthful, trustworthy merchant will be with the prophets, the truthful, and the martyrs."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'Whoever deceives is not one of us',
        body: `The Prophet ﷺ once passed his hand through a pile of grain being sold and found dampness hidden beneath a dry top layer — the seller having concealed lower-quality, wet grain under a more presentable surface. His response was direct and severe in its wording.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ غَشَّنَا فَلَيْسَ مِنَّا',
            english: '"Whoever deceives us is not one of us." — said after uncovering wet grain hidden beneath a dry top layer in a pile being sold.',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Disclosure of defects, not silent omission',
        body: `Building on the incident above, Islamic commercial ethics places a specific obligation on a seller to disclose known defects in what is being sold, rather than relying on a buyer's failure to notice or ask the right question. Silence about a known flaw — a car's hidden mechanical issue, a garment's defect, a property's undisclosed problem — is treated as a form of deception even without an explicit spoken lie, since the transaction proceeds on an unfair informational footing the buyer never consented to.

The Adab here goes beyond the strict legal minimum of avoiding outright false statements — it asks a seller to proactively volunteer information a reasonable buyer would want to know before agreeing to a price, treating fair dealing as a matter of conscience rather than merely the avoidance of provable lies.`,
      },
      {
        heading: 'Ease and generosity in the give and take of trade',
        body: `Beyond honesty, the Sunnah encourages a spirit of generosity and flexibility in ordinary business dealings — the Prophet ﷺ expressed particular love for a person who is easygoing when buying, selling, and collecting a debt, rather than someone who extracts every possible advantage in every transaction regardless of the other party's circumstances.

This Adab does not require abandoning fair prices or reasonable business sense, but it does discourage a habitually hard-nosed, maximally extractive approach to every single transaction — leaving room for generosity, patience with a struggling debtor, and flexibility where it costs little but means much to the other side.`,
      },
      {
        heading: 'Fair treatment of employees and workers',
        body: `Business Adab extends to how those working for a person are treated, not only how customers and trading partners are dealt with. The Prophet ﷺ instructed giving a worker their wages before their sweat has dried — a vivid way of demanding prompt payment rather than delay — and described exploiting a hired worker's labor without paying them fairly as placing a person among those Allah Himself will be an opponent against on the Day of Judgment, a category reserved for especially serious wrongs.

The Adab drawn from this places fair, prompt treatment of employees and workers within the same broader framework of commercial honesty covered throughout this topic — a business can be scrupulously honest with customers while still failing this standard badly with the people actually doing the work behind it.`,
      },
    ],
  },

  'society-2': {
    id: 'society-2',
    unit: 'unit-10',
    title: 'Adab in Public Spaces',
    summary: 'Consideration for others while sharing common spaces.',
    content: [
      {
        heading: 'Giving the pathway its rights',
        body: `When companions expressed a natural desire to sit together in public pathways for conversation, the Prophet ﷺ did not forbid it outright, but attached specific conditions — naming particular rights owed to the shared space and to those passing through it.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'إِنْ أَبَيْتُمْ إِلَّا الْمَجْلِسَ فَأَعْطُوا الطَّرِيقَ حَقَّهَا: غَضُّ الْبَصَرِ، وَكَفُّ الْأَذَى، وَرَدُّ السَّلَامِ، وَالْأَمْرُ بِالْمَعْرُوفِ وَالنَّهْيُ عَنِ الْمُنْكَرِ',
            english: '"If you insist on sitting there, then give the pathway its rights: lowering the gaze, refraining from causing harm, returning greetings, and enjoining good and forbidding wrong."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Removing harm from a shared path as an act of faith',
        body: `The Prophet ﷺ described faith as having many branches, ranging from the greatest (the declaration of faith) to something that might seem, on the surface, minor and unrelated to belief at all: removing something harmful from a public path. Placing this small act within the same structure of "branches of faith" as core beliefs is a deliberate statement about how seriously Islam treats the shared physical spaces people move through every day.

The Adab drawn from this is noticing and acting on small opportunities to improve a shared space — moving a hazard, cleaning up a mess one did not personally cause, holding a door — treating these small interventions as genuinely connected to faith rather than unrelated background courtesy.`,
      },
      {
        heading: 'Consideration in shared and crowded settings',
        body: `Beyond the specific hadith on pathways, the broader Adab of public spaces includes ordinary considerations easy to overlook in the moment: not blocking walkways or exits unnecessarily, keeping voices at a reasonable volume in shared quiet spaces like waiting rooms or public transport, queueing fairly rather than pushing ahead, and being mindful of shared resources like parking, seating, or public restrooms.

None of these carry a specific named hadith individually, but they follow directly from the underlying principle already established: public space is genuinely shared, and inconsiderate behavior within it is not made acceptable simply because no single person is being directly, obviously harmed.`,
      },
      {
        heading: 'Lowering the gaze as a specific public Adab',
        body: `Among the rights of the pathway named in the hadith above, lowering the gaze deserves particular attention as a distinctly public-space Adab — a discipline exercised specifically in the presence of others one has no relationship with, rather than a private matter. This applies broadly across interactions with unrelated members of the opposite sex in public settings, and reflects a modesty expected to operate automatically in shared space, not only when a person happens to feel like exercising it.`,
      },
      {
        heading: 'Adab of enjoining good in public without harshness',
        body: `The pathway hadith names "enjoining good and forbidding wrong" as one of the rights owed to shared space — but the manner of doing so matters as much as the substance, echoing the correction-with-dignity principle covered elsewhere in this course. Publicly shaming a stranger over a minor lapse, lecturing loudly in front of onlookers, or using a genuine wrong as an opportunity to display one's own righteousness rather than to actually help tends to backfire, hardening resistance rather than encouraging change.

The Adab here favors quiet, private correction where practical, a gentle tone, and genuine concern for the other person's benefit over the correcting party's own sense of having done their duty publicly and visibly.`,
      },
      {
        heading: 'Public conduct as a reflection of private character',
        body: `A specific temptation in public, anonymous spaces — among strangers unlikely to ever be seen again — is to relax standards of conduct that would otherwise be maintained around family or community. The Adab of public spaces resists treating anonymity as license: littering, rudeness to service staff, aggressive driving, or disrespect toward strangers because "no one who matters is watching" reflects the same character a person carries everywhere, whether or not anyone present happens to recognize them.`,
      },
    ],
  },

  'society-3': {
    id: 'society-3',
    unit: 'unit-10',
    title: 'Adab of Time and Punctuality',
    summary: 'Respecting others\' time as an act of Adab.',
    content: [
      {
        heading: 'An entire surah sworn by time itself',
        body: `Allah swears by time itself at the opening of a short surah, and immediately follows with a stark declaration about the default condition of humanity with respect to it — a rare rhetorical structure that gives this particular resource unusual weight among everything else the Qur'an could have chosen to swear by.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
            english: 'By time — indeed, mankind is in loss, except for those who believe, do righteous deeds, and advise one another to truth and advise one another to patience.',
            source: 'Surah al-\'Asr, 103:1-3',
          },
        ],
      },
      {
        heading: 'Two blessings most people take for granted',
        body: `The Prophet ﷺ named a specific pairing of blessings that most people, in his description, are deceived about — meaning they do not appreciate their true value until they are gone.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ',
            english: '"Two blessings many people are deceived about: health and free time."',
            source: 'Sahih al-Bukhari',
          },
        ],
      },
      {
        heading: 'Being asked about time specifically on the Day of Judgment',
        body: `Among a short list of specific things a person will be asked about on the Day of Judgment, time is named directly and separately from other blessings — a person will be asked about their life generally and how it was spent, and their youth specifically and how it was used, treating time as its own distinct category of accountability rather than folding it into a general question about deeds.

This detail reinforces the Adab drawn from the previous two points: time is not simply a neutral background resource within which good or bad deeds happen to occur — it is itself something a person will be specifically asked to account for, separately from the deeds themselves.`,
      },
      {
        heading: 'Punctuality as respect for another person\'s time',
        body: `While the sources above address time in broad, spiritual terms, the same underlying principle translates directly into an everyday social Adab: arriving on time for appointments, meetings, and commitments made to other people. Habitual lateness quietly communicates that one's own time is more valuable than the time of whoever is left waiting — a message rarely intended consciously, but a real and accurate reading of the pattern's practical effect regardless of the intention behind it.

The Adab here asks for the same seriousness about commitments of time that this course has already covered regarding commitments of speech and promises generally — a scheduled time is a kind of promise, and habitually breaking it carries the same character weight as habitually breaking other promises would.`,
      },
      {
        heading: 'Communicating delays honestly and promptly',
        body: `Since delays sometimes happen despite genuine effort, the Adab of time management includes communicating a delay as soon as it becomes apparent, rather than allowing someone to wait in uncertainty, wondering whether to keep waiting or assume they have been forgotten. A brief, honest message sent the moment a delay becomes likely costs very little and respects the other person's ability to plan their own time around accurate information, rather than silence followed by a late arrival with no acknowledgment of the inconvenience caused.`,
      },
      {
        heading: 'Guarding time from being wasted, not only from being late',
        body: `Beyond punctuality toward others, the Adab of time includes guarding one's own time from being wasted on activities that offer neither genuine rest nor genuine benefit — an easy trap in an era of endless, low-value digital distraction. This does not call for constant, joyless productivity; rest, leisure, and genuine relaxation have their own legitimate place. It calls instead for periodic honest reflection on whether time is actually being spent on things a person would be comfortable being asked about — echoing the specific accountability for time named earlier in this topic.`,
      },
    ],
  },

  'society-4': {
    id: 'society-4',
    unit: 'unit-10',
    title: 'Adab of Traveling',
    summary: 'The manners and supplications the Prophet ﷺ taught for travel.',
    content: [
      {
        heading: 'A specific dua for setting out',
        body: `The Prophet ﷺ taught a comprehensive dua for beginning a journey, asking Allah for the things that actually matter most during travel — not simply safety in the narrowest sense, but righteousness, ease, and protection from the specific difficulties travel introduces.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى',
            english: '"O Allah, we ask You on this journey of ours for righteousness, God-consciousness, and deeds that please You."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Travel described as a portion of punishment',
        body: `Despite its benefits and the specific dua taught for it, the Prophet ﷺ described travel with a strikingly negative comparison — not to discourage travel altogether, but to correct any tendency to linger unnecessarily once its purpose has been fulfilled.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'السَّفَرُ قِطْعَةٌ مِنَ الْعَذَابِ، يَمْنَعُ أَحَدَكُمْ نَوْمَهُ وَطَعَامَهُ وَشَرَابَهُ، فَإِذَا قَضَى أَحَدُكُمْ نَهْمَتَهُ مِنْ سَفَرِهِ فَلْيُعَجِّلْ إِلَى أَهْلِهِ',
            english: '"Travel is a portion of punishment — it deprives one of sleep, food, and drink. So when one of you has accomplished the purpose of his journey, he should hasten back to his family."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Why hastening back is itself part of the Adab',
        body: `This hadith is often misread as simply a comment on travel's physical discomfort, but the instruction embedded within it is the more important part: once a journey's purpose is fulfilled, a person should return promptly rather than extending their absence unnecessarily. Family and responsibilities left behind are treated as a legitimate claim on a traveler's time that outweighs lingering for reasons beyond the trip's actual purpose.

The Adab here is a useful corrective for modern travel patterns that sometimes extend trips well past their original purpose out of simple preference for being away, without weighing what — and who — is waiting at home.`,
      },
      {
        heading: 'Appointing someone in charge of a traveling group',
        body: `The Prophet ﷺ instructed that when three or more people set out on a journey together, one among them should be appointed as leader for the trip — a small piece of practical organizational Adab that prevents the confusion, indecision, or conflict that can arise from a group with no clear point of coordination for shared decisions like route, timing, or lodging.

This models a broader principle: even temporary, informal groupings benefit from a clear structure for decision-making, and appointing this structure in advance, rather than improvising it under the pressure of an actual disagreement mid-journey, reflects foresight rather than unnecessary formality.`,
      },
      {
        heading: 'Maintaining worship and remembrance while traveling',
        body: `Travel comes with specific accommodations in worship — shortening and combining prayers, for instance — but these accommodations are not an invitation to neglect worship and remembrance altogether simply because normal routines are disrupted. The Sunnah includes specific dua for mounting a vehicle or beginning to move, for arriving somewhere new, and general encouragement to maintain dhikr throughout a journey rather than treating travel time as a spiritual pause.

The Adab here recognizes that travel disrupts routine precisely in ways that can make consistent worship harder, and asks for deliberate effort to maintain it specifically because of that disruption, not despite it.`,
      },
      {
        heading: 'Courtesy toward fellow travelers and hosts',
        body: `Beyond formal worship, ordinary travel Adab includes patience with the inevitable friction of shared transport and unfamiliar environments — delays, cramped seating, unfamiliar food, and the various small frustrations travel introduces — along with courtesy toward those encountered along the way: fellow passengers, hosts, and local residents in an unfamiliar place. A traveler is, in a sense, a guest of the wider world during their journey, and the Adab of hosting covered earlier in this course applies in reverse here — gratitude, adaptability, and good conduct as the one being hosted by an unfamiliar place and its people.`,
      },
    ],
  },

  'society-5': {
    id: 'society-5',
    unit: 'unit-10',
    title: 'Adab Toward Animals and the Environment',
    summary: 'Mercy toward creation as part of Islamic character.',
    content: [
      {
        heading: 'Animals described as communities like our own',
        body: `The Qur'an describes every creature on land and every bird in flight as belonging to communities comparable to human ones — a description that elevates animal life well beyond mere resource or background scenery, framing the animal world as possessing its own organized existence worthy of consideration.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَمَا مِن دَابَّةٍ فِي الْأَرْضِ وَلَا طَائِرٍ يَطِيرُ بِجَنَاحَيْهِ إِلَّا أُمَمٌ أَمْثَالُكُم',
            english: 'There is no creature that moves on the earth, nor any bird that flies with its two wings, except that they are communities like yourselves.',
            source: 'Surah al-An\'am, 6:38',
          },
        ],
      },
      {
        heading: 'Punished for cruelty to a cat',
        body: `The Prophet ﷺ described a specific account of a woman who was punished in the Hereafter for cruelty toward an animal in her care — a striking example precisely because the wrong involved was neither murder, theft, nor any offense against another human being, but purely a failure of basic mercy toward a creature entirely dependent on her.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'عُذِّبَتِ امْرَأَةٌ فِي هِرَّةٍ سَجَنَتْهَا حَتَّى مَاتَتْ، فَدَخَلَتْ فِيهَا النَّارَ، لَا هِيَ أَطْعَمَتْهَا وَسَقَتْهَا إِذْ حَبَسَتْهَا، وَلَا هِيَ تَرَكَتْهَا تَأْكُلُ مِنْ خَشَاشِ الْأَرْضِ',
            english: '"A woman was punished because of a cat which she imprisoned until it died, and so she entered the Fire because of it — she neither fed nor watered it while she confined it, nor did she release it to eat from the insects of the earth."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Forgiven for kindness to a thirsty dog',
        body: `In direct contrast, the Prophet ﷺ related the account of a man forgiven entirely for his sins because of a single act of mercy toward an animal — a thirsty dog he encountered while traveling, which he went out of his way, at real personal effort, to give water to drink.

Placed side by side, these two hadith form a matched pair the Sunnah clearly intends to be read together: cruelty toward even a small, seemingly insignificant animal carries real weight against a person, and mercy toward one carries real weight in their favor — reward and consequence are shown to hinge on precisely this kind of small, easily dismissed interaction most people would not think to consider religiously significant at all.`,
      },
      {
        heading: 'Kindness even in slaughter',
        body: `Islamic guidance on the treatment of animals extends even into the specific context where an animal's life is being lawfully taken for food — the Prophet ﷺ instructed sharpening the blade well and putting the animal at ease before slaughter, and explicitly forbade sharpening a blade in front of an animal about to be slaughtered, or slaughtering one animal within sight of another. Excellence and mercy (ihsan) are commanded even in this specific act, precisely because it is exactly the kind of moment where mercy might otherwise be assumed irrelevant.

The Adab drawn from this is a consistent thread running through every example in this topic: mercy toward animals is not reserved for moments of obvious tenderness like a beloved pet, but is expected to extend even into the most utilitarian and easily overlooked interactions with the animal world.`,
      },
      {
        heading: 'Planting as an ongoing charity',
        body: `Care for the environment more broadly is encouraged through a specific teaching that ties planting directly to ongoing reward, regardless of who ultimately benefits from what is planted.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ',
            english: '"There is no Muslim who plants a tree or sows a seed, and then a bird, a person, or an animal eats from it, except that it is counted as charity for him."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Everyday environmental Adab',
        body: `Beyond the specific reward attached to planting, the same principle of moderation covered earlier in this course regarding water use during wudu extends naturally to environmental conduct more broadly: avoiding unnecessary waste of resources, not littering shared natural spaces, and treating the created world generally as something held in trust rather than something to be carelessly depleted or degraded simply because a person personally bears no immediate visible cost for doing so.

Taken together, this unit's final topic completes a consistent picture: the same character — honesty, consideration, mercy, and restraint — that this course has asked to be extended toward parents, neighbors, guests, and strangers is asked, in this closing topic, to extend outward even to creatures with no voice to demand it and to a natural world with no ability to hold anyone directly accountable for how it is treated.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 11 — ADAB OF LIFE'S DIFFICULT MOMENTS (full content, expanded)
  //
  // Qur'anic Arabic checked against primary tafsir sources (Qurtubi
  // via quran.com and quran.ksu.edu.sa) before writing. English
  // renderings are an original paraphrase of the meaning, not
  // copied from a single named published translation. This unit
  // touches grief and loss directly — recommend particular care in
  // scholarly and pastoral review before publishing, given how
  // personally these topics may land for individual readers.
  // ─────────────────────────────────────────────────────────
  'difficult-1': {
    id: 'difficult-1',
    unit: 'unit-11',
    title: 'Adab of Anger',
    summary: 'What the Prophet ﷺ taught about controlling and channeling anger.',
    content: [
      {
        heading: 'Real strength redefined',
        body: `The Prophet ﷺ redefined a word his listeners would have naturally associated with physical dominance, redirecting it toward something far harder to master than any opponent in a wrestling match.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ',
            english: '"The strong one is not the one who overcomes people through wrestling; the strong one is the one who controls himself when angry."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'A repeated request, a single answer',
        body: `A man once came to the Prophet ﷺ asking for advice, and after receiving the same short answer, asked again multiple times, perhaps expecting additional or different guidance each time. The Prophet ﷺ gave him the identical response every time: "Do not become angry" (la taghdab). The repetition itself is instructive — rather than offering a long list of separate pieces of advice, the Prophet ﷺ treated anger management as significant enough on its own to serve as a complete answer to a broad request for guidance on living well.

The Adab drawn from this is recognizing anger not as one minor character flaw among many equally weighted issues, but as a central hinge — much of a person's other conduct, kindness, and judgment tends to hold up or collapse specifically at the moments anger is present.`,
      },
      {
        heading: 'Restraining anger commended alongside charity',
        body: `The Qur'an places controlling anger in direct company with generosity in giving and forgiveness of others, as part of a single description of righteous, Allah-loved conduct.`,
        verses: [
          {
            type: 'quran',
            arabic: 'الَّذِينَ يُنفِقُونَ فِي السَّرَّاءِ وَالضَّرَّاءِ وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
            english: 'Those who spend in ease and hardship, who restrain their anger, and who pardon people.',
            source: 'Surah Aal \'Imran, 3:134',
          },
        ],
      },
      {
        heading: 'Practical steps taught for the moment itself',
        body: `Beyond the general instruction not to be angry, the Prophet ﷺ gave specific, physical, practical steps for a person already in the grip of anger — recognizing that a person cannot simply will their way out of an emotion already in motion. He taught that anger comes from Shaytan, and instructed seeking refuge in Allah from him, and separately taught a physical de-escalation sequence: if angry while standing, sit down; if the anger persists while sitting, lie down.

He also taught that performing wudu can help extinguish anger, drawing a connection between the physical coolness of water and the metaphorical "heat" of anger described throughout Islamic teaching. These are not abstract ideals but concrete, actionable steps meant to be used in the actual moment anger arises, not only reflected upon afterward.`,
      },
      {
        heading: 'The danger of words and actions taken in anger',
        body: `Islamic scholarship treats decisions, promises, and pronouncements made while in a state of intense anger with particular caution, recognizing that judgment is genuinely impaired in this state — certain legal rulings specifically account for reduced accountability or validity for statements made under extreme, overwhelming anger, precisely because the tradition recognizes how distorting this emotional state can be to normal reasoning.

The Adab drawn from this is a practical rule of thumb: postponing significant decisions, serious conversations, and irreversible words until anger has genuinely passed, rather than treating whatever surfaces in the heat of the moment as an honest and reliable reflection of one's actual, considered judgment.`,
      },
      {
        heading: 'Anger that is not itself the problem',
        body: `Not all anger is treated as blameworthy — the Prophet ﷺ himself is recorded becoming visibly angry on specific occasions, particularly when a clear violation of Allah's limits occurred in his presence, such as witnessing dishonesty or cruelty. The Adab of anger, then, is not a blanket demand for permanent emotional flatness regardless of what is witnessed, but a call for anger to be reserved for genuine wrongs rather than personal slights, and even then, channeled through controlled, purposeful response rather than uncontrolled reaction.

This distinction matters: a person who feels nothing at genuine injustice has a different problem than a person who explodes at minor personal inconvenience, and the Adab covered in this topic is aimed squarely at the second pattern, not at eliminating righteous concern over real wrongdoing.`,
      },
    ],
  },

  'difficult-2': {
    id: 'difficult-2',
    unit: 'unit-11',
    title: 'Adab of Visiting the Sick',
    summary: 'How to comfort and support someone who is unwell.',
    content: [
      {
        heading: 'A right owed, not merely a kindness offered',
        body: `The Prophet ﷺ listed visiting the sick among a specific set of rights one Muslim holds over another — placed in the same category as returning a greeting, accepting an invitation, and attending a funeral, rather than framed as an optional nicety extended only when personally convenient.

The Adab drawn from framing this as a right rather than a favor is significant: a right implies the other person is owed this visit, shifting the responsibility from "it would be nice if I found time" to "this person has a genuine claim on my attention," particularly during a period when they are least able to attend to their usual obligations and connections themselves.`,
      },
      {
        heading: 'A visit described as walking through the fruits of Paradise',
        body: `The Prophet ﷺ used a vivid, unusual image to describe the spiritual state of someone visiting a sick person — not simply performing a good deed, but existing, for the duration of the visit, in a state compared to being surrounded by the fruits of Paradise itself.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ عَادَ مَرِيضًا لَمْ يَزَلْ فِي خُرْفَةِ الْجَنَّةِ حَتَّى يَرْجِعَ',
            english: '"Whoever visits a sick person remains in the khurfah (harvest/fruits) of Paradise until he returns." — the visit itself, not only its outcome, treated as an immersive spiritual state.',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Keeping the visit brief and considerate',
        body: `The Adab of visiting the sick includes a genuine awareness of the visited person's limited energy, comfort, and privacy — a good visit is not measured by its length, and a well-intentioned but overly long stay can leave a person more exhausted than comforted. The Sunnah encourages brevity, sensitivity to the person's actual state (are they in pain, do they want company or quiet, are they able to talk), and asking rather than assuming what would actually help in that moment.

This Adab also extends to timing and numbers — visiting during reasonable hours, and being mindful that too many visitors at once can overwhelm someone who is unwell, however well-meaning each individual visitor's intentions may be.`,
      },
      {
        heading: 'What to say, and what to avoid saying',
        body: `The manner of speech during a sick visit matters considerably. The Sunnah favors words of comfort, dua for healing, and gentle reassurance over unsolicited medical opinions, alarming stories about others with similar conditions, or blunt predictions about outcomes that are not the visitor's place to offer. The Prophet ﷺ would ask a sick person how they were feeling, offer specific dua for their healing, and reassure them — a model of presence and comfort rather than diagnosis or unsolicited advice.

The Adab here recognizes that a sick visit is primarily an act of emotional and spiritual support, not an opportunity to demonstrate medical knowledge or process the visitor's own anxieties about illness out loud in front of the person suffering from it.`,
      },
      {
        heading: 'Visiting regardless of the outcome expected',
        body: `Islamic teaching does not restrict the obligation or virtue of visiting the sick to cases where recovery is likely — visiting someone with a terminal or serious long-term condition carries the same, if not greater, weight of Adab, since this is precisely when isolation is most likely to set in and when presence matters most. The Prophet ﷺ visited companions in their final illness, offering comfort and presence without false promises about outcomes beyond human knowledge.

The Adab drawn from this is resisting a natural but unhelpful instinct to avoid visiting someone whose prognosis is difficult, out of discomfort with not knowing what to say — presence itself, even largely silent, carries real value distinct from having the right words prepared in advance.`,
      },
      {
        heading: 'A special angelic reward tied to sincerity',
        body: `The Prophet ﷺ described a specific promise attached to visiting a sick person purely for Allah's sake — an angel calling out that the visitor is good, that their walk to make the visit was good, and that a place has been prepared for them in Paradise. The qualifier "for Allah's sake" is significant: it ties this specific reward to sincerity of intention, echoing this course's earlier coverage of intention in everyday Adab — the same visit performed purely out of social obligation, without any thought of Allah at all, remains a kind act, but this particular promised reward is tied specifically to the sincerity behind it.`,
      },
    ],
  },

  'difficult-3': {
    id: 'difficult-3',
    unit: 'unit-11',
    title: 'Adab of Death, Grief, and Condolences',
    summary: 'How Islam guides a community through loss.',
    content: [
      {
        heading: 'A phrase for the moment loss strikes',
        body: `The Qur'an provides believers with a specific, immediate response to calamity — not a demand to feel nothing, but a phrase of submission and perspective to be spoken at the very moment loss is felt.`,
        verses: [
          {
            type: 'quran',
            arabic: 'الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
            english: 'Those who, when calamity strikes them, say, "Indeed we belong to Allah, and indeed to Him we will return."',
            source: 'Surah al-Baqarah, 2:156',
          },
        ],
      },
      {
        heading: 'This phrase follows a promise of real testing',
        body: `The verse above does not appear in isolation — it follows directly after Allah's explicit statement that believers will genuinely be tested through fear, hunger, and loss of wealth, life, and produce. This context matters: the phrase "inna lillahi wa inna ilayhi raji'un" is not presented as a way to pretend loss does not hurt, but as the correct response precisely because loss is real, painful, and expected as part of a genuine test — grief itself is not what the phrase corrects; it addresses despair or a loss of perspective about to whom a person, and everything they love, ultimately belongs.

The Prophet ﷺ himself wept openly at the death of his own son, Ibrahim, while also affirming that the heart grieves and the eye weeps without this contradicting acceptance of Allah's decree — showing that this Adab does not ask for suppressed emotion, only for grief held within the frame this verse provides.`,
      },
      {
        heading: 'What is discouraged in expressing grief',
        body: `While grief itself is fully permitted and even modeled by the Prophet ﷺ, specific expressions of grief inherited from pre-Islamic custom were explicitly corrected.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'لَيْسَ مِنَّا مَنْ لَطَمَ الْخُدُودَ وَشَقَّ الْجُيُوبَ وَدَعَا بِدَعْوَى الْجَاهِلِيَّةِ',
            english: '"He is not one of us who strikes his cheeks, tears his garments, and calls out with the calls of pre-Islamic ignorance (Jahiliyyah)."',
            source: 'Sahih al-Bukhari and Sahih Muslim',
          },
        ],
      },
      {
        heading: 'The reward of offering condolences',
        body: `Beyond the mourner's own Adab, the Sunnah encourages the surrounding community to actively offer condolences (ta'ziyah), attaching a specific, substantial reward to this act of presence and comfort.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ عَزَّى مُصَابًا فَلَهُ مِثْلُ أَجْرِهِ',
            english: '"Whoever consoles someone afflicted by loss receives a reward equal to theirs."',
            source: 'Jami\' at-Tirmidhi',
          },
        ],
      },
      {
        heading: 'What to say, and what to avoid, in condolence',
        body: `Good condolences favor simple, sincere presence over elaborate speeches, philosophical explanations for why the loss happened, or comparisons to other people's losses. The Prophet's ﷺ own condolence to his daughter, upon losing her young child, offered comfort grounded in reminding her that everything belongs to Allah and returns to Him, paired with patience and hope for reward — brief, sincere, and focused on the mourner's actual state rather than an extended discourse.

The Adab here also includes practical, tangible support alongside words — the Prophet ﷺ specifically instructed preparing food for the household of someone who had died, recognizing that grief-stricken households are often least able to attend to ordinary daily needs like cooking, and that practical help can matter as much as verbal comfort.`,
      },
      {
        heading: 'Continuing support beyond the initial days',
        body: `A common pattern sees an outpouring of support and condolence in the immediate days following a death, followed by a rapid return to normal life for everyone except the grieving family, who are often left to face the ongoing reality of loss largely alone once the initial visits end. The Adab of supporting the bereaved extends beyond this initial period — checking in weeks and months later, remembering significant dates, and continuing ordinary kindness long after the visible, expected period of mourning has passed, reflects a more complete standard of care than presence limited only to the most visible, socially expected window immediately following a loss.`,
      },
    ],
  },

  'difficult-4': {
    id: 'difficult-4',
    unit: 'unit-11',
    title: 'Adab of Patience (Sabr) in Trials',
    summary: 'Carrying hardship with dignity and trust in Allah.',
    content: [
      {
        heading: 'A promise of testing, paired with glad tidings',
        body: `Rather than presenting trials as an unexpected departure from normal faith, the Qur'an states directly and in advance that testing through fear, hunger, and loss is something believers will genuinely face — and pairs this promise immediately with glad tidings for those who respond with patience.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ',
            english: 'And We will surely test you with something of fear and hunger, and a loss of wealth, lives, and fruits — but give glad tidings to those who are patient.',
            source: 'Surah al-Baqarah, 2:155',
          },
        ],
      },
      {
        heading: 'Sabr as active endurance, not passive resignation',
        body: `Sabr is often translated simply as "patience," but the concept covers more ground than the English word suggests — it includes patience in obedience (continuing good deeds even when difficult or unrewarding), patience in avoiding sin (resisting temptation even when resistance is exhausting), and patience in the face of what Allah decrees (accepting hardship without descending into despair or bitterness). This is active endurance with continued effort and good conduct, not passive resignation or simply giving up and waiting for hardship to pass on its own.

The Adab drawn from this broader definition is recognizing sabr as required throughout ordinary life, not reserved only for dramatic crises — the daily patience of maintaining good habits, resisting minor temptations, and enduring small frustrations is built from the same underlying quality this topic addresses in its more visible, larger-scale form.`,
      },
      {
        heading: 'Trials as a sign of Allah\'s intended good, not punishment',
        body: `A common instinct during hardship is to interpret suffering as evidence of Allah's displeasure or abandonment. Islamic teaching offers a different framework: the Prophet ﷺ described affliction as something Allah sends specifically to those He intends good for, treating hardship as potentially a sign of attention and refinement rather than punishment or neglect.

This reframing does not deny that some hardship follows directly from sin and its consequences — that connection exists too — but it corrects an assumption that all suffering must indicate divine anger. A person going through genuine hardship while maintaining their faith and good conduct is not necessarily doing something wrong; they may be undergoing precisely the kind of test this course's earlier topics on gratitude and trust in Allah were built to prepare a believer for.`,
      },
      {
        heading: 'Patience without denying real pain',
        body: `Islamic Adab in trials does not ask a person to pretend hardship does not hurt, to suppress genuine grief, or to perform a cheerful exterior that does not match their actual inner state. As already covered in the previous topic on grief, the Prophet ﷺ himself wept at loss while affirming acceptance of Allah's decree in the same breath — showing that sabr operates alongside real emotion, not as its replacement or denial.

The Adab here distinguishes between the honest expression of pain (fully permitted, and modeled by the Prophet ﷺ himself) and specific behaviors that cross into complaint against Allah's decree, despair of His mercy, or destructive responses to hardship — the line sits at how pain is processed and expressed, not at whether it is felt or acknowledged at all.`,
      },
      {
        heading: 'Turning to Allah through the hardship itself',
        body: `Rather than treating prayer and remembrance as something to resume once a trial has passed, the Sunnah models turning toward Allah specifically through the hardship, using it as the very occasion for increased dua, prayer, and reliance rather than waiting for calmer circumstances to return to normal worship. The Prophet ﷺ would turn to prayer specifically during moments of distress, treating worship as an active response to hardship rather than something hardship interrupts.

The Adab here reframes trials as an opportunity for a particular kind of closeness to Allah that ease does not typically produce — a person's most sincere, urgent dua often comes precisely during the hardest moments, and this Adab asks that this natural instinct be embraced and directed productively rather than viewed only as an unwelcome disruption to be endured until it passes.`,
      },
      {
        heading: 'Supporting others through their trials, not only enduring one\'s own',
        body: `The Adab of patience is not purely an individual, private matter — this unit's earlier topics on visiting the sick and offering condolences are themselves extensions of the same broader Adab of trials, applied to supporting others rather than enduring one's own hardship. A community that practices sabr well is one where individuals do not carry difficulty entirely alone, and where the visible patience of one person undergoing hardship is met with the active, practical support of those around them.

Taken together, this closing topic — and this entire unit — asks for a consistent posture across every difficult moment life presents: honest emotion, active trust in Allah, practical effort rather than passive resignation, and genuine presence and support extended toward others facing the same difficult moments this unit has covered.`,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // UNIT 12 — ADAB IN THE MODERN WORLD (full content, expanded)
  //
  // This closing unit deliberately does not invent new principles —
  // it applies Adab already established throughout this course
  // (truthfulness, backbiting, permission-seeking, gentle speech,
  // covering others' faults) to digital contexts the earlier,
  // timeless topics did not need to name explicitly. Qur'anic
  // Arabic checked against primary tafsir sources (Ibn Kathir,
  // Tabari via quran.com and quran.ksu.edu.sa) before writing.
  // English renderings are an original paraphrase of the meaning,
  // not copied from a single named published translation.
  // ─────────────────────────────────────────────────────────
  'modern-1': {
    id: 'modern-1',
    unit: 'unit-12',
    title: 'Adab of Social Media and Online Conduct',
    summary: 'Applying timeless Adab to a very new kind of public space.',
    content: [
      {
        heading: 'A verse revealed for one messenger, relevant to every share button',
        body: `The Qur'an's instruction to verify news before acting on it was revealed regarding a single, specific misunderstanding involving one messenger and one report — yet the principle it establishes applies with obvious, direct force to an environment built entirely around instantly forwarding claims whose accuracy has not been checked.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا أَن تُصِيبُوا قَوْمًا بِجَهَالَةٍ فَتُصْبِحُوا عَلَىٰ مَا فَعَلْتُمْ نَادِمِينَ',
            english: 'O you who believe, if an untrustworthy source brings you news, verify it, lest you harm people out of ignorance and become regretful for what you have done.',
            source: 'Surah al-Hujurat, 49:6',
          },
        ],
      },
      {
        heading: 'Sharing as its own act of speech',
        body: `A common but mistaken instinct treats resharing, reposting, or forwarding as a lesser act than originally writing a claim — as though passing along someone else's words removes personal responsibility for their content or accuracy. Islamic Adab does not support this distinction: everything covered in this course's earlier unit on truthful, careful speech applies equally to amplifying someone else's words as it does to composing one's own, since the practical effect on anyone harmed by a false or exaggerated claim is identical either way.

The Adab drawn from this is applying the same pause before resharing that this course has already asked for before speaking — is this verified, is it necessary to pass along, and would its subject be treated fairly by how it is being framed and amplified.`,
      },
      {
        heading: 'Backbiting and exposure do not disappear online',
        body: `The same warning against ghibah covered earlier in this course — discussing someone's faults in their absence in a way they would dislike — applies with full force to group chats, comment sections, and posts about someone not present to respond, regardless of how normalized this behavior has become in digital spaces. If anything, the reach and permanence of online speech make careless words about others potentially more damaging than an equivalent private conversation, since digital speech can be screenshotted, searched, and resurface indefinitely long after it was said.

The Adab here asks for the same restraint online that this course has asked for throughout — not a different, looser standard simply because a screen sits between the speaker and the person being discussed.`,
      },
      {
        heading: 'Public correction, private shaming, and their online equivalents',
        body: `This course's earlier coverage of correcting mistakes with dignity intact, and of enjoining good without harshness, translates directly into a caution against public online callouts and pile-ons as a default response to someone's error. A person's genuine mistake, magnified before a large audience and stripped of context, tends to produce humiliation rather than correction — the same failure mode already identified elsewhere in this course, now amplified by an audience of potentially unlimited size and permanence.

Where a concern genuinely needs to be raised publicly — a matter of real public interest rather than a private lapse — the Adab of manner covered throughout this course still applies: substance over personal attack, accuracy over exaggeration, and a goal of correction rather than humiliation.`,
      },
      {
        heading: 'Anonymity and the illusion of no accountability',
        body: `Online spaces offer a degree of anonymity and distance from consequence that ordinary face-to-face interaction does not, and this creates a specific temptation to say things — harsh, dishonest, or cruel — that a person would never say while looking someone in the eye. This course's earlier unit on public conduct already addressed the temptation to relax standards among strangers unlikely to be seen again; online anonymity is simply a more extreme version of the same temptation, and the same principle applies: character is not actually different behind a screen name, whatever comfortable distance the format might seem to offer.`,
      },
      {
        heading: 'Guarding time and attention, not only words',
        body: `Beyond what is said online, the Adab of time covered earlier in this course applies directly to how much of it disappears into passive, low-value scrolling — time that will still be asked about, per the earlier teaching on accountability for how life is spent, regardless of the specific form the distraction took. This is not a call to abandon social media or digital connection, which carry real benefits including some covered elsewhere in this very course, but a call to the same periodic honest reflection on time spent, applied to the specific and unusually absorbing platforms that did not exist when the underlying Adab principle was first taught.`,
      },
    ],
  },

  'modern-2': {
    id: 'modern-2',
    unit: 'unit-12',
    title: 'Adab of Communication',
    summary: 'Manners for calls, messages, and digital correspondence.',
    content: [
      {
        heading: 'Every word recorded, spoken or typed',
        body: `The Qur'an describes every utterance a person makes as being recorded by an attendant angel, a description that predates any digital archive but applies to one just as naturally — a text message, once sent, exists in a way not entirely unlike this description: recorded, retrievable, and no longer fully within the sender's control the instant it leaves their hand.`,
        verses: [
          {
            type: 'quran',
            arabic: 'مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ',
            english: 'He does not utter a single word except that a watcher is ready beside him, recording it.',
            source: 'Surah Qaf, 50:18',
          },
        ],
      },
      {
        heading: 'The lost tone of voice, and the need for extra clarity',
        body: `Written communication strips away tone of voice, facial expression, and the small pauses and inflections that carry much of a spoken message's actual meaning — a joke can read as an insult, a brief reply can read as coldness, and a neutral question can read as an accusation, all purely due to the absence of these cues. The Adab of written communication asks for compensating deliberateness: choosing words more carefully than a spoken equivalent might require, since there is less room for tone to soften or clarify what the words alone convey, and being slower to assume the worst interpretation of a message that could plausibly be read multiple ways.`,
      },
      {
        heading: 'Considerate timing, even without a physical doorstep',
        body: `This course's earlier coverage of seeking permission before entering someone's physical space has a natural digital equivalent: a phone call, an urgent message, or a notification at an inconsiderate hour functions as a kind of uninvited entry into someone's attention and time, even without a literal door being knocked on. Being mindful of likely sleeping hours, respecting a stated "do not disturb" boundary, and considering whether something genuinely requires an immediate response versus something that can comfortably wait extends the same underlying courtesy already covered in this course into a context the earlier Adab did not need to name explicitly.`,
      },
      {
        heading: 'Patience with response times, good assumptions about silence',
        body: `A common modern friction point is the anxiety or offense taken at a delayed reply — assuming ignoring, rejection, or anger behind a simple gap in response time that may have nothing to do with the recipient's feelings at all. This course's earlier teaching on maintaining good assumptions (husn al-zann) about others applies directly here: a delayed response has many mundane explanations far more likely than personal slight, and assuming the worst interpretation without evidence is precisely the kind of suspicion this course's unit on speech and character already cautioned against.`,
      },
      {
        heading: 'Group chats and the amplification of ordinary speech habits',
        body: `Group conversations carry their own specific Adab, since words said in this setting are witnessed by everyone present at once rather than one listener at a time — gossip shared in a group chat reaches every member simultaneously, and a moment of unkindness toward someone (present or absent) is witnessed by the entire group rather than a single confidant. This makes the ordinary Adab of speech covered throughout this course somewhat higher-stakes in a group setting, not because different rules apply, but because the same rules now govern a larger, simultaneous audience.

Forwarding a private conversation or screenshot into a group without the original sender's knowledge or consent raises the same concern covered in this course's topic on trust between friends — a private confidence shared in good faith is not the recipient's to redistribute simply because doing so is now technically effortless.`,
      },
      {
        heading: 'Sincerity and warmth in written correspondence',
        body: `Just as this course's early topics encouraged renewing sincere intention behind ordinary spoken acts of Adab, the same applies to written communication — a text message checking on someone, a written condolence, or a simple good-morning greeting sent to a family member can carry the same sincerity and reward as their spoken equivalents, provided the same genuine intention is behind them. The medium does not diminish the Adab; a warm, honest, timely message is a real act of care, not a lesser substitute for one, and this course's closing unit asks that written communication be approached with the same seriousness of intention as every other form of Adab already covered.`,
      },
    ],
  },

  'modern-3': {
    id: 'modern-3',
    unit: 'unit-12',
    title: 'Adab of Privacy',
    summary: 'Respecting others\' privacy and guarding your own with wisdom.',
    content: [
      {
        heading: 'A direct prohibition against spying',
        body: `In the same verse that forbids backbiting through its memorable image of eating a dead brother's flesh, the Qur'an also names a closely related but distinct wrong: actively seeking out information about others that they have not chosen to share.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَلَا تَجَسَّسُوا',
            english: 'And do not spy on one another.',
            source: 'Surah al-Hujurat, 49:12',
          },
        ],
      },
      {
        heading: 'From physical spying to its digital equivalents',
        body: `The prohibition above was revealed regarding physical spying — seeking out others' private conduct or secrets through deliberate investigation — but the underlying principle translates directly into digital contexts the verse's original audience never encountered: reading someone's messages without their knowledge, checking a partner's or family member's phone without permission, or tracking someone's online activity out of suspicion rather than a genuine, disclosed need.

The Adab here does not distinguish between the method of intrusion — a keyhole and a phone left unlocked on a table serve the same function, and the wrong lies in the act of uninvited investigation into what someone has not chosen to reveal, regardless of which specific tool made that investigation possible.`,
      },
      {
        heading: 'Covering others\' faults as Allah covers our own',
        body: `Beyond simply not seeking out others' private information, the Sunnah encourages actively protecting information about someone's faults that has become known, rather than exposing or publicizing it — with a direct, reciprocal promise attached to this specific act of discretion.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'مَنْ سَتَرَ مُسْلِمًا سَتَرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ',
            english: '"Whoever covers the faults of a Muslim, Allah will cover his faults in this world and the next."',
            source: 'Sahih Muslim',
          },
        ],
      },
      {
        heading: 'Sharing others\' information, images, and moments without consent',
        body: `A specific modern application of this principle concerns posting photos, sharing personal stories, or forwarding private details about someone else without their knowledge or agreement — a family photo including someone who would rather not be tagged, a private struggle shared publicly for sympathy or engagement without the subject's consent, or a child's image posted widely without considering that the child cannot yet consent to their own digital footprint at all.

The Adab here asks for a habit of asking rather than assuming: would this specific person want this specific detail, image, or story shared in this specific way, with this specific audience — a question easy to skip in the moment of posting, but directly connected to the same respect for others' private information covered throughout this topic.`,
      },
      {
        heading: 'Guarding one\'s own privacy with wisdom',
        body: `Adab regarding privacy runs in both directions — alongside respecting others' privacy, there is wisdom in what a person chooses to reveal about their own life, especially in public or semi-public digital spaces. Not everything true needs to be shared, not every private matter benefits from public disclosure, and oversharing personal struggles, family conflicts, or private worship can sometimes do more harm than the momentary connection or sympathy it generates, particularly for matters that are ongoing rather than fully resolved.

This is not a call to secrecy or dishonesty about one's life, but a call to the same thoughtful discretion this unit asks to be extended toward others — applied reflectively to oneself, considering not only what could be shared, but what genuinely should be, and to whom.`,
      },
      {
        heading: 'A closing thought for the end of this course',
        body: `This final topic, and this final unit, brings the course back to where it began: Adab is not a separate category of religious knowledge reserved for grand or unusual moments, but the manner in which every ordinary act — speaking, sharing, scrolling, typing — is carried out. The specific platforms and technologies covered in this closing unit did not exist when the underlying principles were first taught, and will likely be replaced by newer ones before long, but the character those principles ask for — honesty, restraint, mercy, discretion, and sincerity — does not expire with the medium. Carrying that same character forward into whatever new spaces and habits come next is, in the end, the entire task this course has been describing from its very first topic onward.`,
      },
    ],
  },
};