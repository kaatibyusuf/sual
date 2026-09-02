// src/data/seerahClass.js
//
// Seerah Class -- a chronological course on the life of the Prophet
// Muhammad ﷺ. Deliberately named and structured separately from the
// existing Seerah discipline already present in this app's Q&A-style
// Disciplines feature (see this course's own migrations and payment
// product name, 'seerahclass', distinct from anything used there) --
// nothing here touches that existing feature.
//
// STATUS: Unit 1 has full lesson content. All other units currently
// have title + summary only (placeholder content) -- to be filled in
// unit-by-unit, same pattern as Adab Class, Tawheed Class, and
// Tajweed Class.
//
// Original content, not reproduced from any existing source. Key
// dates, names, and events checked against standard classical and
// contemporary Seerah references before writing. Recommend scholarly
// review before publishing.

export const SEERAHCLASS_UNITS = [
  {
    id: 'unit-1',
    title: 'Arabia Before Islam',
    topics: ['found-1', 'found-2', 'found-3', 'found-4', 'found-5'],
  },
  {
    id: 'unit-2',
    title: 'Lineage, Birth, and Childhood',
    topics: ['early-1', 'early-2', 'early-3', 'early-4', 'early-5'],
  },
  {
    id: 'unit-3',
    title: 'Youth and the Years Before Prophethood',
    topics: ['youth-1', 'youth-2', 'youth-3', 'youth-4'],
  },
  {
    id: 'unit-4',
    title: 'The Beginning of Revelation',
    topics: ['wahy-1', 'wahy-2', 'wahy-3', 'wahy-4'],
  },
  {
    id: 'unit-5',
    title: 'Secret Dawah',
    topics: ['secret-1', 'secret-2', 'secret-3', 'secret-4'],
  },
  {
    id: 'unit-6',
    title: 'Public Dawah and Early Persecution',
    topics: ['public-1', 'public-2', 'public-3', 'public-4'],
  },
  {
    id: 'unit-7',
    title: 'Trials and Turning Points',
    topics: ['trial-1', 'trial-2', 'trial-3', 'trial-4'],
  },
  {
    id: 'unit-8',
    title: "Isra, Mi'raj, and the Path to Madinah",
    topics: ['hijrah-1', 'hijrah-2', 'hijrah-3', 'hijrah-4'],
  },
  {
    id: 'unit-9',
    title: 'Establishing the Madinan Community',
    topics: ['madinah-1', 'madinah-2', 'madinah-3', 'madinah-4'],
  },
  {
    id: 'unit-10',
    title: 'The Major Battles',
    topics: ['battle-1', 'battle-2', 'battle-3', 'battle-4'],
  },
  {
    id: 'unit-11',
    title: 'Treaties and Expanding Dawah',
    topics: ['treaty-1', 'treaty-2', 'treaty-3', 'treaty-4'],
  },
  {
    id: 'unit-12',
    title: 'The Conquest of Makkah and Consolidation',
    topics: ['fath-1', 'fath-2', 'fath-3', 'fath-4'],
  },
  {
    id: 'unit-13',
    title: 'The Final Years',
    topics: ['final-1', 'final-2', 'final-3', 'final-4'],
  },
  {
    id: 'unit-14',
    title: 'Character and Legacy',
    topics: ['legacy-1', 'legacy-2', 'legacy-3', 'legacy-4'],
  },
];

export const SEERAHCLASS_TOPIC_ORDER = SEERAHCLASS_UNITS.flatMap((u) => u.topics);

export const SEERAHCLASS_TOPICS = {
  // -----------------------------------------------------------
  // UNIT 1 - ARABIA BEFORE ISLAM (full content)
  //
  // Qur'anic Arabic checked against primary tafsir before writing.
  // Historical details (Quraysh's offices, the Ka'bah's idols,
  // conditions of Jahiliyyah) checked against standard classical and
  // contemporary Seerah references. English renderings of Qur'anic
  // verses are an original paraphrase of the meaning, not copied
  // from a single named published translation.
  // -----------------------------------------------------------
  'found-1': {
    id: 'found-1',
    unit: 'unit-1',
    title: 'Why Studying the Seerah Matters',
    summary: 'What this course sets out to do, and why the Prophet\u2019s ﷺ life is studied in such careful detail.',
    content: [
      {
        heading: 'A life presented as a living example, not only a history',
        body: `Seerah means biography, and in Islamic scholarship it refers specifically to the study of the Prophet Muhammad's ﷺ life, from before his birth through to his death. This course studies that life chronologically, in real historical detail, but it approaches this detail with a purpose beyond ordinary historical interest. The Qur'an itself describes the Prophet's ﷺ life as something for believers to actively follow, not merely to admire or remember.`,
      },
      {
        heading: 'The verse this entire course takes as its foundation',
        body: `A single verse states this purpose directly, and this course returns to it repeatedly across its fourteen units.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا',
            english: 'There has certainly been for you in the Messenger of Allah an excellent example, for whoever hopes for Allah and the Last Day and remembers Allah often.',
            source: 'Surah al-Ahzab, 33:21',
          },
        ],
      },
      {
        heading: 'What uswatun hasanah actually asks of a reader',
        body: `The phrase uswatun hasanah, an excellent example, is the specific term this verse uses, and its significance lies in what it implies about how his ﷺ life should actually be studied. An excellent example is not primarily a subject to admire from a distance. It is a pattern meant to be genuinely followed, in worship, in family life, in leadership, and in ordinary daily conduct alike. This course studies the specific events of his ﷺ life with this purpose held clearly in view throughout, not as a separate application added afterward.`,
      },
      {
        heading: 'Why the specific historical detail still matters',
        body: `Precisely because this life is meant to function as a genuine, followable example, getting its actual details right matters considerably. A pattern loosely remembered or partially confused with legend cannot be reliably followed the way a carefully documented one can. This is why classical scholarship developed rigorous methods for verifying reports about the Prophet's ﷺ life and words, methods this course draws on directly rather than presenting popular retellings without any underlying verification.`,
      },
      {
        heading: 'How this course will proceed',
        body: `This course follows the Prophet's ﷺ life in the order it actually happened, from the conditions of Arabia before his birth, through his early life, the beginning of revelation, the years of both secret and public dawah in Makkah, the migration to Madinah, the major battles and treaties that followed, the conquest of Makkah, and his final years, before closing with a direct look at his ﷺ character and what his life continues to offer readers today. This first unit begins where any accurate account of his life must begin: the specific world he was born into, since understanding what Arabia actually looked like before Islam is what makes everything that follows genuinely comprehensible.`,
      },
    ],
  },

  'found-2': {
    id: 'found-2',
    unit: 'unit-1',
    title: 'The Arabian Peninsula: Geography and Way of Life',
    summary: 'The physical landscape and way of life that shaped Arabia before Islam.',
    content: [
      {
        heading: 'A landscape of desert, oasis, and trade route',
        body: `The Arabian Peninsula is overwhelmingly arid, dominated by desert terrain with only scattered oases and a handful of more fertile regions, mainly in the south. This geography shaped the way of life of most of its inhabitants directly: many Arabian tribes were Bedouin, nomadic herders moving between grazing land and water sources according to season, while others settled permanently around oases and along trade routes, building the more fixed, town-based communities that included Makkah itself.`,
      },
      {
        heading: 'Makkah\u2019s specific place along these trade routes',
        body: `Makkah sat along a significant trade route connecting Yemen in the south to Syria in the north, a position that gave the city real commercial importance despite its own harsh, largely infertile surroundings. Caravans moved goods along this route seasonally, and Makkah's position, combined with the religious significance of the Ka'bah already present there, made it both an economic and a spiritual center within the wider peninsula, a combination this unit's remaining topics examine directly.`,
      },
      {
        heading: 'Tribal identity as the basic structure of Arabian society',
        body: `Arabian society before Islam was organized primarily around tribal and clan identity rather than around any centralized state or single ruling authority. A person's tribe determined their protection, their social standing, and often their entire circle of loyalty and obligation. This tribal structure produced genuine strengths, including strong bonds of mutual support within a tribe, alongside genuine weaknesses this course's fifth topic will examine directly, including prolonged blood feuds between rival tribes that could persist for generations.`,
      },
      {
        heading: 'Poetry as Arabia\u2019s primary cultural achievement',
        body: `Pre-Islamic Arabia placed extraordinarily high value on eloquent spoken and composed Arabic, and poetry specifically functioned as the primary vehicle for recording history, settling disputes over honor, and establishing a tribe's reputation. Skilled poets held real social standing, and annual gatherings, most famously at Ukaz, brought poets together in open competition, with the most highly regarded poems reportedly displayed at the Ka'bah itself. This deep cultural investment in language matters directly for understanding how the Qur'an's own eloquence was received once revelation began, examined in this course's fourth unit.`,
      },
      {
        heading: 'Why this specific setting matters for everything that follows',
        body: `Understanding this physical and social landscape, arid terrain organized around trade and oasis settlement, tribal identity as the basic unit of belonging, and language as the peninsula's highest cultural achievement, is what makes the rest of this course genuinely comprehensible rather than a list of disconnected events. The specific shape of Quraysh's power in Makkah, examined directly in this unit's remaining topics, and the specific shape of the opposition the Prophet ﷺ later faced, examined across this course's fifth and sixth units, both grow directly out of this same tribal, trade-centered world.`,
      },
    ],
  },

  'found-3': {
    id: 'found-3',
    unit: 'unit-1',
    title: 'Makkah and the Ka\u2019bah Before Islam',
    summary: 'The Ka\u2019bah\u2019s religious significance and its condition in the centuries before the Prophet\u2019s ﷺ birth.',
    content: [
      {
        heading: 'A structure already sacred long before Quraysh',
        body: `Islamic tradition holds that the Ka'bah was originally built by the Prophets Ibrahim and Ismail as a house of pure monotheistic worship, its sanctity already established many centuries before the Prophet Muhammad's ﷺ own birth. By the time this course's account begins, however, that original monotheistic purpose had been overtaken by widespread idol worship, even as the Ka'bah's status as Arabia's central sacred site remained fully intact.`,
      },
      {
        heading: 'Hubal and the hundreds of idols housed within it',
        body: `By the Prophet's ﷺ own lifetime, the Ka'bah housed approximately three hundred and sixty idols, with Hubal, a large idol reportedly made of red stone with an arm restored in gold, honored as the chief deity among them. Hubal was consulted through a practice of divination using arrows, and pilgrims from across Arabia traveled to Makkah specifically to visit and make offerings to these idols, a practice this course's fifth topic examines directly as part of the broader religious condition of the period.`,
      },
      {
        heading: 'The annual pilgrimage as both worship and commerce',
        body: `Arabian tribes made annual pilgrimages to the Ka'bah that combined religious ritual with significant trade and social gathering, echoing the same combination of sacred and commercial purpose already noted in this unit's previous topic regarding Makkah's trade-route position. This pilgrimage tradition itself, though its specific rites had drifted considerably from what Islamic tradition holds Ibrahim originally established, preserved a genuine memory of the Ka'bah's older, monotheistic significance, a memory this course's fourth unit will show being directly restored rather than newly invented once revelation began.`,
      },
      {
        heading: 'Makkah\u2019s standing across the wider peninsula',
        body: `Because of the Ka'bah's presence, Makkah held a level of religious and social prestige across Arabia considerably greater than its own modest size or agricultural resources would otherwise suggest. Tribes across the peninsula recognized Makkah's sanctity, and a general custom of truce during the sacred pilgrimage months offered a degree of safety for travel and trade that the peninsula's ordinary tribal conflicts, already noted in this unit's previous topic, did not otherwise reliably provide.`,
      },
      {
        heading: 'Setting up this unit\u2019s remaining topics',
        body: `This specific combination, a religiously significant site now filled with idol worship, positioned along significant trade routes, and surrounded by a social order built on tribal loyalty, is precisely the world into which the Prophet Muhammad ﷺ was born. This unit's next topic turns directly to the specific tribe entrusted with the Ka'bah's custodianship, Quraysh, before this unit's closing topic examines the broader religious and social conditions of the period in fuller detail.`,
      },
    ],
  },

  'found-4': {
    id: 'found-4',
    unit: 'unit-1',
    title: 'Quraysh: Custodians of the Sacred House',
    summary: 'The tribe entrusted with the Ka\u2019bah, and the specific offices that structured its authority.',
    content: [
      {
        heading: 'Quraysh\u2019s position as the Ka\u2019bah\u2019s recognized custodians',
        body: `Quraysh was the tribe holding recognized custodianship over the Ka'bah and, by extension, considerable prestige and influence across Makkah and the wider peninsula. This custodianship was not simply assumed. It was organized into specific, named offices, distributed among Quraysh's various clans, each carrying real responsibility connected to the Ka'bah and the pilgrims who visited it.`,
      },
      {
        heading: 'The specific offices tradition records',
        body: `Classical accounts describe several distinct offices tied to Makkah's leadership: hijabah, holding the Ka'bah's key and responsibility for its physical upkeep; siqayah, providing water for pilgrims; rifadah, providing food for pilgrims unable to provide for themselves; liwa, carrying the tribe's banner during any military expedition; and nadwah, overseeing the council house where Quraysh's leading men gathered to deliberate on the tribe's important affairs. These offices are widely credited to Qusayy ibn Kilab, an ancestor of the Prophet ﷺ himself, who is remembered as having consolidated Quraysh's control over Makkah and organized the tribe's affairs along these specific lines.`,
      },
      {
        heading: 'Why these offices structured Makkah\u2019s entire social order',
        body: `These offices were not honorary titles alone. They distributed genuine social and economic responsibility, and by extension genuine standing, among Quraysh's various clans, meaning a clan's prestige within Makkah depended considerably on which of these specific offices it held. This structure matters directly for understanding the specific social position the Prophet ﷺ himself was born into, examined in this course's second unit, since his own clan, Banu Hashim, held real standing within this system without holding every one of its most lucrative offices.`,
      },
      {
        heading: 'Trade as Quraysh\u2019s other major source of standing',
        body: `Beyond its religious custodianship, Quraysh built considerable wealth and influence through organized trade, most famously the seasonal caravan journeys the Qur'an itself later references directly, traveling south toward Yemen in winter and north toward Syria in summer. This combination, religious custodianship of Arabia's most sacred site alongside genuine commercial success, gave Quraysh a level of standing across the peninsula that later shaped how seriously, and how anxiously, the tribe's leadership responded once the Prophet's ﷺ message began challenging the religious system this same standing depended upon.`,
      },
      {
        heading: 'A tribe whose standing would soon be tested directly',
        body: `Everything covered in this topic, the specific offices, the trade wealth, and the genuine prestige Quraysh held across Arabia, forms the backdrop against which this course's fifth and sixth units examine Quraysh's specific, sustained resistance to the Prophet's ﷺ message once it became public. That resistance becomes considerably easier to understand once Quraysh's actual position within Makkah, established directly in this topic, is genuinely understood first.`,
      },
    ],
  },

  'found-5': {
    id: 'found-5',
    unit: 'unit-1',
    title: 'Religious and Social Conditions of Jahiliyyah',
    summary: 'The broader religious and social conditions of the period immediately before Islam.',
    content: [
      {
        heading: 'Jahiliyyah as a specific, named description',
        body: `Islamic tradition refers to the period before the Prophet's ﷺ mission as al-Jahiliyyah, an age of ignorance, a term describing not a lack of knowledge in every sense, since Arabia's poetry and trade networks show real sophistication, but specifically a lack of revealed guidance and the resulting religious and moral conditions that followed from its absence.`,
      },
      {
        heading: 'A genuinely diverse religious landscape, not idol worship alone',
        body: `While idol worship, already covered directly in this unit's third topic, was the dominant religious practice across most of Arabia, the peninsula was not religiously uniform. Jewish tribes had long been established in Yathrib, the city later renamed Madinah, and Christian communities existed in regions including Najran in the south. A smaller number of individuals, known as hanifs, are recorded as having rejected idol worship independently, seeking a purer monotheism connected to the legacy of Ibrahim without yet having received a new revelation of their own.`,
      },
      {
        heading: 'Documented social practices this course names directly',
        body: `Several specific social practices of this period are recorded and named directly in Islamic sources as genuine evils the coming revelation would confront. The burying alive of infant daughters, driven by a combination of economic anxiety and a view of daughters as a source of social shame, is referenced directly in the Qur'an itself. Slavery was a normal, unquestioned feature of the social order. Usury, exploitative lending, was widespread and largely unregulated. Excessive alcohol consumption and gambling were common and socially accepted practices among many tribes.`,
      },
      {
        heading: 'Genuine strengths worth naming alongside these evils',
        body: `Alongside these documented evils, Arabian tribal culture also held genuine strengths that Islamic tradition records the Prophet ﷺ affirming and building upon rather than discarding entirely: hospitality toward guests and travelers was a deeply held value, courage and loyalty in defense of one's tribe were highly honored, and generosity, particularly toward the poor within one's own community, carried real social prestige. This course's later units, particularly its treatment of the Prophet's ﷺ own character, will show these existing values refined and redirected rather than simply replaced outright.`,
      },
      {
        heading: 'Closing this unit and opening the account of his ﷺ own life',
        body: `This unit has established the specific world the Prophet Muhammad ﷺ was born into: an arid, trade-connected peninsula organized around tribal identity, a Makkah whose sacred status had drifted into idol worship while retaining real religious prestige, a Quraysh whose custodianship of the Ka'bah structured the city's entire social order, and a broader Jahiliyyah combining genuine social evils with genuine inherited strengths. This course's next unit turns directly to his ﷺ own birth and early life within this exact setting, beginning with the specific lineage Islamic tradition traces him through.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 2 - LINEAGE, BIRTH, AND CHILDHOOD (full content, expanded)
  //
  // Qur'anic Arabic (Surah al-Fil) checked against primary sources
  // before writing. Historical details (the Abraha narrative,
  // Halimah and the Banu Sa'd wet-nursing custom, the sequence of
  // childhood losses, the journey to Syria) checked against standard
  // classical and contemporary Seerah references. Genuine points of
  // scholarly caution (lineage beyond 'Adnan, the historicity of
  // specific narrative details) are flagged honestly rather than
  // presented as settled fact. English rendering of the Qur'anic
  // verse is an original paraphrase of the meaning, not copied from
  // a single named published translation.
  // -----------------------------------------------------------
  'early-1': {
    id: 'early-1',
    unit: 'unit-2',
    title: 'The Prophet\u2019s \ufdfa Noble Lineage',
    summary: 'His \ufdfa ancestry, traced back through Quraysh to Ibrahim.',
    content: [
      {
        heading: 'Why lineage carried real weight in this specific society',
        body: `This course's first unit already established that Arabian society organized itself around tribal and clan identity, and that Quraysh specifically held recognized custodianship over the Ka'bah through a structure of offices distributed among its various clans. A person's specific lineage within this system was not a minor biographical detail. It determined standing, obligation, and belonging in ways this course's opening unit already described directly, which is exactly why classical scholarship traced the Prophet's \ufdfa own ancestry with such careful, specific attention.`,
      },
      {
        heading: 'His \ufdfa direct line through Quraysh',
        body: `The Prophet \ufdfa was Muhammad, son of Abdullah, son of Abdul Muttalib, son of Hashim, son of Abd Manaf, continuing back through the specific line of Quraysh's own ancestor, Fihr, from whom the entire tribe took its name. His own immediate clan, Banu Hashim, was the same clan this course's first unit already identified as holding real standing within Makkah's social order, connected directly to the specific offices of siqayah and rifadah already covered there.`,
      },
      {
        heading: 'A point where scholarly certainty is genuinely strong',
        body: `Moving further back from Fihr, this same line is traced with real historical confidence to 'Adnan, a widely agreed reference point in Arabian genealogical tradition. Classical scholars across the tradition treat the lineage from the Prophet \ufdfa back to 'Adnan as reliably established, and this stretch of the genealogy is rarely a point of genuine dispute among historians of the period.`,
      },
      {
        heading: 'A point worth naming with honest caution',
        body: `Beyond 'Adnan, tradition extends the line further still, connecting it to Ismail, son of the Prophet Ibrahim, and from there to Ibrahim himself. This extension is widely held and repeated across Islamic tradition, but it is worth stating plainly that the specific chain of names connecting 'Adnan back to Ismail carries less historical certainty than the stretch from 'Adnan to the Prophet \ufdfa himself, a distinction classical genealogists themselves generally acknowledged rather than concealed.`,
      },
      {
        heading: 'Why this matters beyond genealogy alone',
        body: `This lineage connects directly to material this course's opening unit already established regarding the Ka'bah's own history: Islamic tradition holds that Ibrahim and Ismail together built the Ka'bah as a house of monotheistic worship, centuries before idol worship overtook it. The Prophet \ufdfa tracing his own ancestry to this same Ismail is not incidental to this course's larger account. It connects the specific person whose life this course studies directly back to the same monotheistic legacy his own mission would eventually restore.`,
      },
    ],
  },

  'early-2': {
    id: 'early-2',
    unit: 'unit-2',
    title: 'The Year of the Elephant and His Birth',
    summary: 'The events surrounding the year of his \ufdfa birth.',
    content: [
      {
        heading: 'Abraha\u2019s cathedral and its desecration',
        body: `Abraha, the Abyssinian governor ruling Yemen on behalf of the Christian kingdom of Aksum, built an elaborate cathedral in Sana'a and declared his intention to divert the Arabs' pilgrimage away from the Ka'bah toward this new structure instead. According to the traditional account, someone entered and defiled the cathedral in response, and Abraha, in fury, resolved to march on Makkah and destroy the Ka'bah itself.`,
      },
      {
        heading: 'Abdul Muttalib\u2019s exchange with Abraha',
        body: `As Abraha's army, which included a number of war elephants, approached Makkah, it first seized camels belonging to Abdul Muttalib, the Prophet's \ufdfa own grandfather and Makkah's leading figure at the time. Abdul Muttalib went to Abraha directly to request their return. When Abraha, reportedly surprised, asked why Abdul Muttalib was not instead pleading for the Ka'bah itself, Abdul Muttalib is recorded as answering that he was simply the owner of the camels, and that the House had its own Owner who would defend it.`,
      },
      {
        heading: 'What the Qur\u2019an itself records happening next',
        body: `Abraha's army advanced toward Makkah, and what followed is recorded directly in the Qur'an's own surah devoted to this exact event.`,
        verses: [
          {
            type: 'quran',
            arabic: '\u0623َلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ',
            english: 'Have you not considered how your Lord dealt with the companions of the elephant?',
            source: 'Surah al-Fil, 105:1',
          },
        ],
      },
      {
        heading: 'A destruction no human army achieved',
        body: `The remainder of this short surah describes flocks of birds sent against Abraha's army, pelting it with stones, leaving the army, in the surah's own description, like devoured straw. Abraha's expedition was destroyed before it ever reached the Ka'bah, an outcome the tradition consistently presents as beyond any explanation available to Abraha's own considerable military force.`,
      },
      {
        heading: 'The same year as his \ufdfa own birth',
        body: `This event gave its name to an entire year across the Arabian Peninsula, remembered as Aam al-Fil, the Year of the Elephant, roughly corresponding to 570 CE, and used as a reference point for dating other events before the Hijri calendar was later adopted. Islamic tradition holds that the Prophet Muhammad \ufdfa was born within this same year, in the month of Rabi al-Awwal, a small number of months after Abraha's destruction, his own father Abdullah already having died before this birth occurred, a loss this unit's fourth topic returns to directly.`,
      },
    ],
  },

  'early-3': {
    id: 'early-3',
    unit: 'unit-2',
    title: 'Infancy and the Years with Halimah',
    summary: 'His \ufdfa early years in the care of his wet-nurse among the Banu Sa\u2019d.',
    content: [
      {
        heading: 'A Makkan custom of sending infants to the desert',
        body: `Makkah's noble families commonly sent newborn infants to be nursed and raised temporarily among Bedouin tribes in the surrounding desert, valued both for the desert's considered healthier air compared to Makkah's own more crowded conditions, and for the more pure form of Arabic spoken among Bedouin tribes, away from any foreign influence Makkah's own trade connections might otherwise introduce.`,
      },
      {
        heading: 'Halimah\u2019s initial reluctance, and what changed her mind',
        body: `Halimah bint Abi Dhu'ayb, of the Banu Sa'd tribe, was among several women who traveled to Makkah that year seeking infants to nurse in exchange for support from the child's family. Being an orphan already, his own father having died before his birth, the infant Muhammad \ufdfa offered no expectation of the kind of generous compensation a wealthier family might provide, and Halimah is recorded as having initially passed him over for this reason, only accepting him once no other infant remained available to her.`,
      },
      {
        heading: 'A household whose circumstances improved considerably',
        body: `Tradition consistently records that Halimah's own household experienced a marked and sudden improvement in its circumstances once she took the infant Muhammad \ufdfa into her care, an improvement she and her family attributed directly to this same decision. This detail is repeated across multiple early biographical sources and is generally treated within the tradition as one of several early signs marking this specific child as unlike others, well before any revelation had yet occurred.`,
      },
      {
        heading: 'A well known tradition from this period, presented with care',
        body: `Early biographical sources record a specific incident from this period known as shaqq as-sadr, the splitting of the chest, describing an experience reported to have occurred while the young Muhammad \ufdfa was among Halimah's family. Given the nature of this specific report, this course presents it as a tradition recorded within early Seerah literature rather than as independently verifiable historical fact in the same way the broader chronology of this period can be established, consistent with this course's general approach of naming its own level of certainty honestly rather than presenting every tradition as equally settled.`,
      },
      {
        heading: 'Returning to his mother, and what came next',
        body: `By most accounts, the young Muhammad \ufdfa remained with Halimah and the Banu Sa'd for several years, generally described as around four to five, before being returned to his mother Aminah in Makkah. This unit's next topic turns directly to what followed: a sequence of losses that would leave him, by the age of eight, entirely without either parent or the grandfather who had first taken on his care.`,
      },
    ],
  },

  'early-4': {
    id: 'early-4',
    unit: 'unit-2',
    title: 'Early Losses: Mother, Grandfather, and Guardian',
    summary: 'The successive losses that marked his \ufdfa early childhood.',
    content: [
      {
        heading: 'Orphaned before birth',
        body: `This unit's second topic already noted directly that the Prophet's \ufdfa father, Abdullah, died in Yathrib while returning from a trading journey, before his son's birth had even occurred. Aminah, his mother, was left a widow while still pregnant, meaning the Prophet \ufdfa never once met his own father, a fact recorded consistently and without dispute across the entire biographical tradition.`,
      },
      {
        heading: 'A journey to his father\u2019s grave, and a mother\u2019s death',
        body: `Once returned from Halimah's care, the young Muhammad \ufdfa lived with his mother Aminah in Makkah for a further period, until, at around six years of age, she took him with her on a journey to Yathrib specifically to visit his father Abdullah's grave. On the return journey, at a place called al-Abwa, Aminah fell ill and died, leaving the six-year-old Muhammad \ufdfa an orphan in the fullest sense, without father or mother.`,
      },
      {
        heading: 'His grandfather\u2019s care, and a second loss soon after',
        body: `Abdul Muttalib, already introduced in this unit's second topic through his exchange with Abraha, took on his grandson's care directly following Aminah's death, reportedly showing him particular affection among his own many grandchildren. This arrangement lasted only briefly. Abdul Muttalib himself died when the Prophet \ufdfa was approximately eight years old, meaning three of the people most responsible for his early care, father, mother, and grandfather, were all lost to him before he had reached this age.`,
      },
      {
        heading: 'Why this specific sequence is treated as significant',
        body: `This exact sequence, orphaned before birth, motherless at six, and without his grandfather's care by eight, is recorded consistently and specifically across the biographical tradition, sufficiently so that later scholars often connect it directly to the Prophet's \ufdfa own documented tenderness later in life toward orphans specifically, a theme this course's closing unit will return to directly when examining his \ufdfa character in family life.`,
      },
      {
        heading: 'Passing to a final guardian',
        body: `Following Abdul Muttalib's death, guardianship passed to Abu Talib, one of Abdul Muttalib's own sons and the Prophet's \ufdfa paternal uncle. This unit's closing topic turns directly to this final, and by far longest, arrangement of his \ufdfa childhood, one that would continue in some form for decades to come.`,
      },
    ],
  },

  'early-5': {
    id: 'early-5',
    unit: 'unit-2',
    title: 'Childhood Under the Care of Abu Talib',
    summary: 'His \ufdfa upbringing under his uncle\u2019s guardianship.',
    content: [
      {
        heading: 'A guardian who was not the wealthiest of his uncles',
        body: `Abu Talib was not among the more prosperous of Abdul Muttalib's sons, yet he took on his young nephew's full care and upbringing without hesitation once his own father's death made this responsibility his. Biographical tradition consistently describes Abu Talib's affection for his nephew as genuine and considerable, treating him, by several accounts, with a warmth matching or exceeding that shown to his own children.`,
      },
      {
        heading: 'A childhood spent close to his uncle\u2019s own work',
        body: `Raised within Abu Talib's household, the young Muhammad \ufdfa grew up close to his uncle's own trading activities, the same seasonal caravan trade this course's first unit already identified as one of Quraysh's major sources of wealth and standing. This early, direct exposure to trade would shape the specific reputation this course's next unit examines in detail, once he began engaging in this same trade directly as a young man.`,
      },
      {
        heading: 'A journey to Syria, and a notable encounter along the way',
        body: `While still a boy, reportedly around the age of twelve, the Prophet \ufdfa accompanied Abu Talib on a trading journey toward Syria. Tradition records that along this route, a Christian monk named Bahira, recognizing signs he associated with a coming prophet, approached the caravan and spoke with Abu Talib directly, reportedly advising him to return his young nephew to Makkah rather than continuing further, out of concern for his safety among certain peoples along the route who might otherwise recognize and react to these same signs. This account appears across early biographical sources, though, as with several specific narrative details from this period, later scholars have examined its precise chain of transmission with real care rather than treating every version of it as equally certain.`,
      },
      {
        heading: 'A childhood that closes as this course\u2019s next unit opens',
        body: `By the time this unit's account closes, the Prophet \ufdfa had already lost both parents and his grandfather, been raised for a time among the Banu Sa'd in the desert, and settled into Abu Talib's household and its trading life in Makkah. This course's next unit picks up directly from here, following him through his own early adulthood: the reputation for honesty that would earn him the title al-Amin, his marriage to Khadijah, and the years of quiet reflection that preceded the beginning of revelation.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 3 - YOUTH AND THE YEARS BEFORE PROPHETHOOD (placeholders)
  // -----------------------------------------------------------
  'youth-1': { id: 'youth-1', unit: 'unit-3', title: 'Trade, Character, and the Title Al-Amin', summary: 'How his ﷺ honesty in trade earned him a lasting reputation.' },
  'youth-2': { id: 'youth-2', unit: 'unit-3', title: 'The Blessed Marriage to Khadijah', summary: 'His ﷺ marriage to Khadijah and her role in his life.' },
  'youth-3': { id: 'youth-3', unit: 'unit-3', title: 'Rebuilding the Ka\u2019bah and the Dispute Resolved', summary: 'How his ﷺ wisdom resolved a dispute among Quraysh\u2019s clans.' },
  'youth-4': { id: 'youth-4', unit: 'unit-3', title: 'Retreat to the Cave of Hira', summary: 'His ﷺ growing habit of solitary reflection in the years before revelation.' },

  // -----------------------------------------------------------
  // UNIT 4 - THE BEGINNING OF REVELATION (placeholders)
  // -----------------------------------------------------------
  'wahy-1': { id: 'wahy-1', unit: 'unit-4', title: 'The First Revelation: Iqra', summary: 'The events of the first revelation in the cave of Hira.' },
  'wahy-2': { id: 'wahy-2', unit: 'unit-4', title: 'Khadijah\u2019s Response and Waraqah\u2019s Confirmation', summary: 'How those closest to him ﷺ responded to this first experience.' },
  'wahy-3': { id: 'wahy-3', unit: 'unit-4', title: 'The Pause in Revelation and Its Resumption', summary: 'The period of silence following the first revelation, and what followed it.' },
  'wahy-4': { id: 'wahy-4', unit: 'unit-4', title: 'The Nature and Purpose of Prophethood', summary: 'What being sent as a Messenger actually meant for the years ahead.' },

  // -----------------------------------------------------------
  // UNIT 5 - SECRET DAWAH (placeholders)
  // -----------------------------------------------------------
  'secret-1': { id: 'secret-1', unit: 'unit-5', title: 'The First to Believe', summary: 'Khadijah, Abu Bakr, Ali, and Zayd among the earliest believers.' },
  'secret-2': { id: 'secret-2', unit: 'unit-5', title: 'Three Years of Private Calling', summary: 'Why the earliest dawah was conducted privately rather than openly.' },
  'secret-3': { id: 'secret-3', unit: 'unit-5', title: 'The Household of Islam\u2019s Earliest Converts', summary: 'Who joined the earliest community, and from what backgrounds.' },
  'secret-4': { id: 'secret-4', unit: 'unit-5', title: 'Building a Community in Secret', summary: 'How the earliest Muslims practiced and supported one another quietly.' },

  // -----------------------------------------------------------
  // UNIT 6 - PUBLIC DAWAH AND EARLY PERSECUTION (placeholders)
  // -----------------------------------------------------------
  'public-1': { id: 'public-1', unit: 'unit-6', title: 'The Command to Proclaim Openly', summary: 'The revelation instructing him ﷺ to call publicly.' },
  'public-2': { id: 'public-2', unit: 'unit-6', title: 'Quraysh\u2019s Response and Escalating Hostility', summary: 'How Quraysh\u2019s leadership responded once the message became public.' },
  'public-3': { id: 'public-3', unit: 'unit-6', title: 'The Torture of the Weak and Enslaved', summary: 'The specific persecution faced by those with no tribal protection.' },
  'public-4': { id: 'public-4', unit: 'unit-6', title: 'Steadfastness Under Pressure', summary: 'How the earliest Muslims endured this period of open hostility.' },

  // -----------------------------------------------------------
  // UNIT 7 - TRIALS AND TURNING POINTS (placeholders)
  // -----------------------------------------------------------
  'trial-1': { id: 'trial-1', unit: 'unit-7', title: 'The Migration to Abyssinia', summary: 'Why a group of Muslims migrated to the Christian kingdom of Abyssinia.' },
  'trial-2': { id: 'trial-2', unit: 'unit-7', title: 'The Boycott of Banu Hashim', summary: 'Quraysh\u2019s attempt to isolate the Prophet\u2019s ﷺ own clan entirely.' },
  'trial-3': { id: 'trial-3', unit: 'unit-7', title: 'The Year of Sorrow: Khadijah and Abu Talib', summary: 'The deaths of his ﷺ wife and uncle within the same year.' },
  'trial-4': { id: 'trial-4', unit: 'unit-7', title: 'The Journey to Ta\u2019if', summary: 'His ﷺ difficult journey seeking support outside Makkah.' },

  // -----------------------------------------------------------
  // UNIT 8 - ISRA, MI'RAJ, AND THE PATH TO MADINAH (placeholders)
  // -----------------------------------------------------------
  'hijrah-1': { id: 'hijrah-1', unit: 'unit-8', title: 'The Night Journey and Ascension', summary: 'The Isra and Mi\u2019raj, and what each event established.' },
  'hijrah-2': { id: 'hijrah-2', unit: 'unit-8', title: 'The Pledges of Aqabah', summary: 'The agreements made with the people of Yathrib before the migration.' },
  'hijrah-3': { id: 'hijrah-3', unit: 'unit-8', title: 'Preparing for Migration', summary: 'How the migration to Madinah was planned and carried out.' },
  'hijrah-4': { id: 'hijrah-4', unit: 'unit-8', title: 'The Hijrah Itself', summary: 'The journey from Makkah to Madinah and its significance.' },

  // -----------------------------------------------------------
  // UNIT 9 - ESTABLISHING THE MADINAN COMMUNITY (placeholders)
  // -----------------------------------------------------------
  'madinah-1': { id: 'madinah-1', unit: 'unit-9', title: 'Arrival and the Building of the Mosque', summary: 'His ﷺ arrival in Madinah and the first mosque built there.' },
  'madinah-2': { id: 'madinah-2', unit: 'unit-9', title: 'The Bond of Brotherhood', summary: 'How Makkan and Madinan Muslims were paired as brothers.' },
  'madinah-3': { id: 'madinah-3', unit: 'unit-9', title: 'The Constitution of Madinah', summary: 'The agreement establishing the rights and duties of Madinah\u2019s residents.' },
  'madinah-4': { id: 'madinah-4', unit: 'unit-9', title: 'Relations with the Jewish Tribes of Madinah', summary: 'The Prophet\u2019s ﷺ dealings with Madinah\u2019s established Jewish tribes.' },

  // -----------------------------------------------------------
  // UNIT 10 - THE MAJOR BATTLES (placeholders)
  // -----------------------------------------------------------
  'battle-1': { id: 'battle-1', unit: 'unit-10', title: 'The Battle of Badr', summary: 'The first major battle between the Muslims and Quraysh.' },
  'battle-2': { id: 'battle-2', unit: 'unit-10', title: 'The Battle of Uhud', summary: 'The battle that followed Quraysh\u2019s defeat at Badr.' },
  'battle-3': { id: 'battle-3', unit: 'unit-10', title: 'The Battle of the Trench', summary: 'The defense of Madinah against a combined confederation of tribes.' },
  'battle-4': { id: 'battle-4', unit: 'unit-10', title: 'Lessons Across the Three Battles', summary: 'What these three battles, taken together, actually teach.' },

  // -----------------------------------------------------------
  // UNIT 11 - TREATIES AND EXPANDING DAWAH (placeholders)
  // -----------------------------------------------------------
  'treaty-1': { id: 'treaty-1', unit: 'unit-11', title: 'The Treaty of Hudaybiyyah', summary: 'The treaty that appeared unfavorable but proved strategically decisive.' },
  'treaty-2': { id: 'treaty-2', unit: 'unit-11', title: 'Letters to the Kings and Rulers', summary: 'His ﷺ formal invitations sent to surrounding rulers.' },
  'treaty-3': { id: 'treaty-3', unit: 'unit-11', title: 'The Battle of Khaybar', summary: 'The campaign against the fortified Jewish settlement of Khaybar.' },
  'treaty-4': { id: 'treaty-4', unit: 'unit-11', title: 'The Expedition to Mu\u2019tah', summary: 'The first major engagement between Muslims and Byzantine forces.' },

  // -----------------------------------------------------------
  // UNIT 12 - THE CONQUEST OF MAKKAH AND CONSOLIDATION (placeholders)
  // -----------------------------------------------------------
  'fath-1': { id: 'fath-1', unit: 'unit-12', title: 'The Conquest of Makkah', summary: 'The largely peaceful return to the city that had once expelled him ﷺ.' },
  'fath-2': { id: 'fath-2', unit: 'unit-12', title: 'The Battle of Hunayn and Ta\u2019if', summary: 'The battle fought immediately after Makkah\u2019s conquest.' },
  'fath-3': { id: 'fath-3', unit: 'unit-12', title: 'The Year of Delegations', summary: 'Tribes from across Arabia sending delegations to accept Islam.' },
  'fath-4': { id: 'fath-4', unit: 'unit-12', title: 'The Expedition to Tabuk', summary: 'The Prophet\u2019s ﷺ final military expedition.' },

  // -----------------------------------------------------------
  // UNIT 13 - THE FINAL YEARS (placeholders)
  // -----------------------------------------------------------
  'final-1': { id: 'final-1', unit: 'unit-13', title: 'The Farewell Hajj', summary: 'His ﷺ only Hajj, performed in the final year of his life.' },
  'final-2': { id: 'final-2', unit: 'unit-13', title: 'The Farewell Sermon', summary: 'The principles he ﷺ set out in his final major address.' },
  'final-3': { id: 'final-3', unit: 'unit-13', title: 'His ﷺ Final Illness', summary: 'The days leading up to his ﷺ death.' },
  'final-4': { id: 'final-4', unit: 'unit-13', title: 'The Death of the Prophet ﷺ', summary: 'His ﷺ passing and its impact on the early community.' },

  // -----------------------------------------------------------
  // UNIT 14 - CHARACTER AND LEGACY (placeholders)
  // -----------------------------------------------------------
  'legacy-1': { id: 'legacy-1', unit: 'unit-14', title: 'His ﷺ Character in Worship', summary: 'What his ﷺ personal worship actually looked like.' },
  'legacy-2': { id: 'legacy-2', unit: 'unit-14', title: 'His ﷺ Character in Family Life', summary: 'His ﷺ conduct as a husband, father, and grandfather.' },
  'legacy-3': { id: 'legacy-3', unit: 'unit-14', title: 'His ﷺ Character in Leadership and Justice', summary: 'How he ﷺ led, judged, and treated those under his authority.' },
  'legacy-4': { id: 'legacy-4', unit: 'unit-14', title: 'Why the Seerah Still Matters Today', summary: 'Closing reflections on studying this life as a living example.' },
};