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
  // UNIT 3 - YOUTH AND THE YEARS BEFORE PROPHETHOOD (full content,
  // expanded)
  //
  // Historical details (the Khadijah caravan and marriage sequence,
  // the Ka'bah rebuilding and Black Stone dispute) checked against
  // multiple current classical and contemporary Seerah references
  // before writing. Genuine points of scholarly variation (Khadijah's
  // exact age, the historicity of specific narrative details from the
  // Syria journey) are flagged honestly rather than presented as
  // settled fact.
  // -----------------------------------------------------------
  'youth-1': {
    id: 'youth-1',
    unit: 'unit-3',
    title: 'Trade, Character, and the Title Al-Amin',
    summary: 'How his \ufdfa honesty in trade earned him a lasting reputation.',
    content: [
      {
        heading: 'Building on a childhood already spent close to trade',
        body: `This course's second unit already noted that the young Muhammad \ufdfa grew up within Abu Talib's household close to his uncle's own trading activities, including at least one journey toward Syria while still a boy. As he grew into early adulthood, this same trade, already established in this course's first unit as one of Quraysh's major sources of wealth and standing, became the setting in which his own character became genuinely well known across Makkah.`,
      },
      {
        heading: 'Two titles earned through repeated, consistent conduct',
        body: `Through his own dealings, the young Muhammad \ufdfa earned two specific titles among the people of Makkah: as-Sadiq, the truthful, and al-Amin, the trustworthy. These were not honorary titles granted once. They reflected a consistent, repeated pattern of honest dealing, observed directly and over time by the same trading community this course's first unit already described as placing real value on reliability within its commercial life.`,
      },
      {
        heading: 'Why this specific reputation mattered so much in this specific setting',
        body: `In a trade economy built substantially on trust, since a merchant sending goods on a distant caravan journey depended entirely on that goods being handled honestly far from any direct oversight, a reputation like al-Amin carried genuine practical value, not merely social approval. A trader known reliably as trustworthy was a trader people across Makkah, and beyond it, actively sought out to handle their own affairs.`,
      },
      {
        heading: 'A reputation about to be tested on a much larger scale',
        body: `This exact reputation is what drew the attention of one of Makkah's most successful merchants, a woman who had already built and managed a trading operation larger than that of many of Makkah's other merchants combined, and who was, at this point, in need of someone reliable to lead an important caravan on her behalf. This unit's next topic turns directly to her, and to what this specific opportunity would eventually lead to.`,
      },
      {
        heading: 'Character established well before revelation began',
        body: `It is worth stating plainly what this topic's account actually shows: the honesty, reliability, and good judgment for which the Prophet \ufdfa became known were already fully established among his own people years before he received any revelation at all. This matters directly for how this course's fourth unit will later present the very first moments of that revelation, since the character revelation would eventually call people to trust was not a new persona adopted afterward, but a reputation his own community had already tested and confirmed for years.`,
      },
    ],
  },

  'youth-2': {
    id: 'youth-2',
    unit: 'unit-3',
    title: 'The Blessed Marriage to Khadijah',
    summary: 'His \ufdfa marriage to Khadijah and her role in his life.',
    content: [
      {
        heading: 'Khadijah bint Khuwaylid, a merchant in her own right',
        body: `Khadijah bint Khuwaylid was a member of Quraysh in her own right, twice widowed, and a genuinely successful merchant, known among the people of Makkah as at-Tahirah, the pure one. Rather than traveling with her own caravans, she employed trusted agents to conduct trade on her behalf, and by the time this unit's account begins, her own trading operation was reported to rival that of several of Makkah's other merchants put together.`,
      },
      {
        heading: 'A caravan entrusted to Muhammad \ufdfa specifically',
        body: `Having heard of the reputation already established directly in this unit's previous topic, Khadijah engaged the twenty-five-year-old Muhammad \ufdfa to lead an important trading caravan to Syria on her behalf, reportedly offering him a notably generous share of the resulting profit, and sending her own servant Maysarah along to assist him and to report back on his conduct.`,
      },
      {
        heading: 'A journey that exceeded every expectation',
        body: `The journey proved considerably more profitable than Khadijah had anticipated, and Maysarah's own report upon returning described conduct that impressed her deeply: consistent honesty in every transaction, and a manner of dealing entirely different from what she had experienced with previous agents. Early biographical sources also record several specific incidents from this same journey, including an encounter with a monk who reportedly recognized signs he associated with prophethood, though, consistent with this course's treatment of similarly specific narrative details elsewhere, these particular incidents are presented here as recorded tradition rather than independently verifiable historical fact in the same way the journey's basic outcome can be established.`,
      },
      {
        heading: 'A proposal initiated by Khadijah herself',
        body: `Impressed by both Maysarah's account and her own direct impression of his character, Khadijah made the decision to propose marriage, an arrangement she initiated herself rather than waiting to be approached, sending her close friend Nafisah bint Munabbih to discreetly raise the matter with Muhammad \ufdfa directly. Tradition also records that Khadijah discussed these same reports with her cousin Waraqah ibn Nawfal, a figure already familiar with the earlier scriptures, whose own name and role reappear directly in this course's next unit, once revelation itself actually begins.`,
      },
      {
        heading: 'A marriage of real partnership, and its lasting significance',
        body: `The Prophet \ufdfa was twenty-five at the time of this marriage. Khadijah's own age is traditionally given as around forty, though it is worth noting honestly that a smaller number of sources record a somewhat younger age for her, without full agreement across the tradition on this specific point. What is consistently and firmly attested, regardless of this detail, is that he took no other wife while Khadijah lived, and that she would become, once revelation began, the very first person to believe in his message, a role this course's fifth unit examines directly.`,
      },
    ],
  },

  'youth-3': {
    id: 'youth-3',
    unit: 'unit-3',
    title: 'Rebuilding the Ka\u2019bah and the Dispute Resolved',
    summary: 'How his \ufdfa wisdom resolved a dispute among Quraysh\u2019s clans.',
    content: [
      {
        heading: 'Damage requiring genuine reconstruction',
        body: `Some years into his marriage, when the Prophet \ufdfa was around thirty-five years old, roughly five years before revelation began, the Ka'bah suffered real structural damage, variously attributed to flooding and fire, severe enough that Quraysh's various clans undertook a genuine rebuilding of the structure together, each clan collecting stones and contributing labor toward the shared project. The Prophet \ufdfa himself is recorded as taking part directly in this work, carrying stones alongside the rest of Quraysh.`,
      },
      {
        heading: 'A dispute serious enough to threaten real violence',
        body: `Once construction reached the point of restoring the Black Stone to its place, a serious dispute broke out among Quraysh's clans, each wanting the honor of setting the stone in place for themselves. Tension escalated to the point that one clan, Banu Abd ad-Dar, reportedly pledged themselves to fight to the death over the matter, an oath tradition records them sealing by dipping their hands into a shared bowl of blood, a detail vivid enough that this specific group became remembered afterward as "the blood-lickers." The standoff continued for four or five days before any resolution was found.`,
      },
      {
        heading: 'An elder\u2019s proposal, and who walked through the gate',
        body: `Abu Umayyah ibn al-Mughirah, among the oldest men of Quraysh present, proposed a specific solution: whoever next entered the sanctuary through its gate would be asked to arbitrate the dispute, and Quraysh agreed. The next person through that gate was the Prophet \ufdfa himself, already known across Makkah by the title established directly in this unit's first topic, and tradition records the assembled clans responding with visible relief at seeing him specifically walk through.`,
      },
      {
        heading: 'A solution giving every clan equal honor',
        body: `Rather than choosing one clan to receive the honor of placing the stone, the Prophet \ufdfa proposed a different approach entirely: he had the Black Stone placed at the center of a cloak, then asked a representative from each of the disputing clans to take hold of one corner of that same cloak, and together they lifted the stone to its required height. Once positioned there, the Prophet \ufdfa himself placed the stone into its final resting place with his own hands, giving every clan genuine, equal participation in the honor they had nearly gone to war over.`,
      },
      {
        heading: 'Wisdom already recognized years before revelation',
        body: `This entire episode occurred, by the tradition's own reckoning, roughly five years before the Prophet \ufdfa received his first revelation, meaning his own people had already witnessed, tested, and relied upon his judgment in a genuinely high-stakes civic dispute well before any claim to prophethood existed at all. This unit's remaining topic turns to what was happening in his own life during these same years, a growing pattern of retreat and reflection that would eventually lead directly to the moment this course's next unit examines in full.`,
      },
    ],
  },

  'youth-4': {
    id: 'youth-4',
    unit: 'unit-3',
    title: 'Retreat to the Cave of Hira',
    summary: 'His \ufdfa growing habit of solitary reflection in the years before revelation.',
    content: [
      {
        heading: 'A growing habit of withdrawal from Makkah\u2019s ordinary life',
        body: `In the years following the Ka'bah's reconstruction already covered in this unit's previous topic, as the Prophet \ufdfa approached the age of forty, he developed an increasingly consistent habit of withdrawing from Makkah's ordinary daily life to spend extended periods alone in reflection, a practice biographical tradition records growing steadily more frequent as this period continued.`,
      },
      {
        heading: 'The specific place this habit centered on',
        body: `This retreat centered on a small cave on Jabal al-Nur, the Mountain of Light, a modest hill near Makkah, where the Prophet \ufdfa would remain, by several accounts, for a number of consecutive nights at a stretch, taking a limited supply of provisions with him, reportedly prepared and supplied by Khadijah, before returning briefly to Makkah to resupply and then withdrawing again.`,
      },
      {
        heading: 'What this retreat was actually a response to',
        body: `This growing habit did not emerge from nowhere. This course's first unit already established the specific religious and social conditions of Jahiliyyah he had grown up surrounded by: idol worship layered over a site tradition held was originally built for pure monotheism, alongside genuine documented social evils this course's opening unit named directly. Biographical tradition consistently presents this period of retreat as a response to real, growing discomfort with these same conditions, a discomfort that had not yet resolved into any clear answer or direction.`,
      },
      {
        heading: 'A search without yet knowing what would be found',
        body: `It is worth being precise about what this period actually was, and was not. The Prophet \ufdfa was not, during these years, anticipating a specific future revelation in any detailed sense, nor did he yet possess the message this course's fourth unit will examine directly. This was a period of genuine, searching reflection on the state of his people and the questions their condition raised, carried out with no guarantee of where, if anywhere, that reflection would lead.`,
      },
      {
        heading: 'The moment this entire unit has been building toward',
        body: `This course's next unit picks up directly from exactly this setting: a specific night, during exactly this kind of retreat, in this same cave, when the searching reflection this topic has described was interrupted by something entirely unexpected. Everything covered across this unit, his established reputation for honesty, his marriage to a woman who would become his first supporter, the wisdom his own people had already relied upon, and this growing habit of solitary reflection, forms the immediate, real context for the event this course's fourth unit now turns to directly.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 4 - THE BEGINNING OF REVELATION (full content, expanded)
  //
  // Qur'anic Arabic (Surah al-Alaq, Surah al-Muddaththir) checked
  // against primary sources before writing. The hadith recording
  // Khadijah's reassurance and the account of Waraqah ibn Nawfal are
  // drawn from the well-established narration opening Sahih
  // al-Bukhari's own chapter on the beginning of revelation. A note
  // on this unit's third topic specifically: some classical
  // narrations of the pause in revelation include a detail about
  // real emotional distress expressed in a way involving mountain
  // heights. This unit describes the genuine distress of this
  // period and its resolution without repeating that specific
  // detail, since it is not necessary to convey the historical and
  // spiritual point and this category of content warrants real
  // caution regardless of its source. English renderings of
  // Qur'anic verses are an original paraphrase of the meaning, not
  // copied from a single named published translation.
  // -----------------------------------------------------------
  'wahy-1': {
    id: 'wahy-1',
    unit: 'unit-4',
    title: 'The First Revelation: Iqra',
    summary: 'The events of the first revelation in the cave of Hira.',
    content: [
      {
        heading: 'A night unlike any other during these same retreats',
        body: `This course's third unit already described the Prophet's \ufdfa growing habit of solitary retreat to the cave of Hira as he approached the age of forty. During one such retreat, in the month of Ramadan, this same familiar pattern was interrupted by something entirely different from anything he had experienced there before.`,
      },
      {
        heading: 'A command met with a genuine, honest reply',
        body: `A being he had never encountered appeared to him and instructed him directly: iqra, read. The Prophet \ufdfa replied honestly that he was not a reader, a plain statement of fact rather than a refusal, since he had never learned to read. The being took hold of him and held him firmly before releasing him and repeating the same instruction, and this exchange occurred a third time before anything further was said.`,
      },
      {
        heading: 'The actual words then given to him',
        body: `Following this third exchange, the being, later identified as the angel Jibril, recited the words that would become the Qur'an's own first revealed verses.`,
        verses: [
          {
            type: 'quran',
            arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ \u2022 خَلَقَ الْإِنْسَانَ مِنْ عَلَقٍ \u2022 اقْرَأْ وَرَبُّكَ الْأَكْرَمُ \u2022 الَّذِي عَلَّمَ بِالْقَلَمِ \u2022 عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ',
            english: 'Read in the name of your Lord who created, created man from a clinging clot. Read, and your Lord is the Most Generous, who taught by the pen, taught man what he did not know.',
            source: 'Surah al-Alaq, 96:1-5',
          },
        ],
      },
      {
        heading: 'A meaning worth noticing directly',
        body: `The very first word revealed to a man who could not read was itself a command to read, and the passage as a whole ties learning and knowledge directly back to Allah as their actual source, teaching by the pen and teaching what a person did not already know. This connects directly to material this course's first unit already established regarding the genuinely high value Arabian culture placed on eloquent language, now met with a revelation whose own opening words placed knowledge itself within a specifically divine, rather than purely human, frame.`,
      },
      {
        heading: 'Returning home, shaken by what had just occurred',
        body: `The Prophet \ufdfa returned from the cave in a state of genuine physical and emotional distress, trembling, and went directly to Khadijah asking to be wrapped and covered. This was, by every account, an overwhelming and entirely unprecedented experience, and his own reaction, real fear rather than immediate calm certainty, is recorded plainly and without any attempt to soften it. This unit's next topic turns directly to how Khadijah, and soon after her cousin Waraqah, responded to him in this exact state.`,
      },
    ],
  },

  'wahy-2': {
    id: 'wahy-2',
    unit: 'unit-4',
    title: 'Khadijah\u2019s Response and Waraqah\u2019s Confirmation',
    summary: 'How those closest to him \ufdfa responded to this first experience.',
    content: [
      {
        heading: 'Immediate, unwavering reassurance',
        body: `Khadijah did not hesitate or express doubt upon hearing what had happened. Her response is recorded directly within the same well established narration this unit's first topic already drew from.`,
        verses: [
          {
            type: 'hadith',
            arabic: 'كَلَّا وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا إِنَّكَ لَتَصِلُ الرَّحِمَ وَتَحْمِلُ الْكَلَّ وَتَكْسِبُ الْمَعْدُومَ وَتَقْرِي الضَّيْفَ وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ',
            english: 'Never! By Allah, He will never disgrace you. You maintain ties of kinship, help carry the burdens of the weak, provide for those who have nothing, honor your guests, and assist those struck by genuine hardship.',
            source: 'Sahih al-Bukhari, from the narration of Aisha',
          },
        ],
      },
      {
        heading: 'Why her specific reasoning matters, not only her comfort',
        body: `Khadijah's response was not simply emotional reassurance offered in the moment. She reasoned directly from his own established character, already covered in real detail across this course's third unit: a man who had spent years genuinely honoring kinship, supporting the weak, and dealing honestly with others was not, in her direct judgment, the kind of person Allah would abandon to something harmful. This reasoning connects directly back to this course's opening claim in its very first topic, that his \ufdfa entire life would eventually function as an example precisely because it was already, at this exact moment, a life whose character could be reasoned from with genuine confidence.`,
      },
      {
        heading: 'Seeking a second, independent confirmation',
        body: `Khadijah then took the Prophet \ufdfa directly to her cousin Waraqah ibn Nawfal, already introduced in this course's previous unit as a hanif familiar with the earlier scriptures. The Prophet \ufdfa described exactly what he had experienced, and Waraqah responded with immediate recognition, identifying the being who had appeared as the same Namus, the trusted one, who had come to Musa before him.`,
      },
      {
        heading: 'A warning offered alongside genuine support',
        body: `Waraqah did not offer only reassurance. He told the Prophet \ufdfa directly that he wished he were young enough, and would live long enough, to see the day his own people would drive him out, a specific and unsettling prediction. When the Prophet \ufdfa asked directly whether this would truly happen, Waraqah answered plainly that it would, since no one before had brought what he now carried without facing real hostility in return, though he added that he would support him with everything he had if he lived to see that day. Waraqah died not long afterward, before the persecution he had predicted actually began.`,
      },
      {
        heading: 'Two independent forms of confirmation, arriving together',
        body: `Within this same short span of time, the Prophet \ufdfa received two genuinely different kinds of confirmation: Khadijah's, reasoned directly from years of firsthand, lived experience of his character, and Waraqah's, reasoned from independent knowledge of the earlier scriptures and their own description of how a true prophet's message is generally received. Khadijah, already introduced in this course's third unit as the first person to hear of this experience at all, is remembered directly and specifically as the first person in history to believe in his message.`,
      },
    ],
  },

  'wahy-3': {
    id: 'wahy-3',
    unit: 'unit-4',
    title: 'The Pause in Revelation and Its Resumption',
    summary: 'The period of silence following the first revelation, and what followed it.',
    content: [
      {
        heading: 'An unexpected silence, after such an overwhelming beginning',
        body: `Following this first experience, revelation did not continue immediately. A genuine period of silence followed, one that classical sources describe with real variation in its exact length, though it is generally remembered as lasting a considerable stretch of time before anything further came.`,
      },
      {
        heading: 'A period of real, honest distress',
        body: `This silence caused the Prophet \ufdfa genuine sadness and uncertainty. Having just experienced something this overwhelming, its sudden absence afterward left him in real emotional difficulty, a difficulty the biographical tradition records plainly rather than minimizing. This course has no interest in smoothing over the genuine human weight of this period, since presenting only the confident, settled version of this story would misrepresent exactly the kind of honest, lived experience this course's opening unit already promised to treat carefully.`,
      },
      {
        heading: 'What actually brought this period to an end',
        body: `This period of distress was resolved when Jibril appeared to him once again, directly reaffirming that he was indeed a genuine messenger of Allah, a reassurance the tradition records as settling his heart and easing the real anxiety this silence had caused him.`,
      },
      {
        heading: 'What came next, and a genuine point of scholarly discussion',
        body: `Following this reassurance, revelation resumed. The majority of scholars hold that the opening verses of Surah al-Muddaththir were the next words revealed, directly assigning him his actual task as a messenger.`,
        verses: [
          {
            type: 'quran',
            arabic: 'يَا أَيُّهَا الْمُدَّثِّرُ \u2022 قُمْ فَأَنذِرْ',
            english: 'O you who are wrapped in your cloak, arise and warn.',
            source: 'Surah al-Muddaththir, 74:1-2',
          },
        ],
      },
      {
        heading: 'Why this specific command matters as a genuine turning point',
        body: `A smaller number of early scholars held that a different surah followed this pause instead, and this course names this variation honestly rather than presenting the majority view as beyond any discussion. What matters most for this unit's purpose is the shift this command represents regardless of exactly which words carried it: al-Alaq's opening verses, covered in this unit's first topic, described a personal experience happening to him. This new command, arise and warn, assigned him an active, outward task for the first time, addressed not to him alone but toward the people around him. This course's next unit turns directly to how that task actually began.`,
      },
    ],
  },

  'wahy-4': {
    id: 'wahy-4',
    unit: 'unit-4',
    title: 'The Nature and Purpose of Prophethood',
    summary: 'What being sent as a Messenger actually meant for the years ahead.',
    content: [
      {
        heading: 'A mission continuing something already begun, not starting something new',
        body: `Islamic belief holds that the Prophet Muhammad \ufdfa was not introducing an entirely new religion, but rather restoring and completing the same essential message every earlier prophet had carried: the worship of Allah alone. This connects directly back to this course's second unit, which already traced his own lineage to Ismail, son of Ibrahim, and to this course's first unit, which already described the Ka'bah's own original construction as a monotheistic house of worship before idol worship later overtook it.`,
      },
      {
        heading: 'What this specific continuity meant in practice',
        body: `Understood this way, his mission was not a rupture with everything that came before it, but a restoration of something Makkah's own sacred site, and the wider religious landscape this course's first unit already described, had drifted away from over many generations. The specific evils and idol worship already named directly in this course's opening unit were exactly what this restored message would now confront directly, beginning quietly and privately, as this course's next unit examines.`,
      },
      {
        heading: 'Why the weight of this task explains his own initial reaction',
        body: `Returning to this unit's own opening topic, the Prophet's \ufdfa genuine fear and trembling immediately following the first revelation, and the real distress covered in this unit's previous topic during the silence that followed it, are worth holding onto directly rather than treating as embarrassing details to minimize. Being entrusted with a message meant to reach and correct an entire religious and social order was a task of enormous weight, and a fully human response to encountering that weight for the first time is precisely what the tradition records, honestly, rather than presenting a version of events stripped of any real difficulty.`,
      },
      {
        heading: 'A private task, for now, about to become a public one',
        body: `Despite the outward command already covered in this unit's previous topic, arise and warn, this course's next unit shows that the actual, practical work of dawah began quietly and privately, among a small number of people closest to him, rather than as an immediate public proclamation to all of Makkah. This deliberate pacing matters directly for understanding the years that follow, since it shows a mission unfolding in careful, considered stages rather than announced all at once.`,
      },
      {
        heading: 'Closing this unit and opening the account of his \ufdfa actual mission',
        body: `This unit has covered the first revelation itself, the immediate response of Khadijah and Waraqah, the genuine distress of the silence that followed, and what being entrusted with prophethood actually meant. This course's fifth unit now turns to the actual beginning of that mission in practice: who first believed, and how this small, private community of early Muslims began to take shape within Makkah's own hostile religious landscape.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 5 - SECRET DAWAH (full content, expanded)
  //
  // The specific converts named in this unit (the four categories
  // of first believers, the five men Abu Bakr personally brought,
  // Dar al-Arqam's role) were checked against multiple current
  // classical and contemporary Seerah references before writing.
  // -----------------------------------------------------------
  'secret-1': {
    id: 'secret-1',
    unit: 'unit-5',
    title: 'The First to Believe',
    summary: 'Khadijah, Abu Bakr, Ali, and Zayd among the earliest believers.',
    content: [
      {
        heading: 'A woman, a youth, a freedman, and a friend',
        body: `This course's fourth unit already established Khadijah directly as the first person in history to believe in the Prophet's \ufdfa message. Tradition presents the very earliest community of believers through a specific, commonly repeated framework: the first woman to believe, the first youth, the first freed slave, and the first free adult man outside the immediate household, four distinct categories, each represented by a specific individual close to the Prophet \ufdfa himself.`,
      },
      {
        heading: 'Ali ibn Abi Talib, the first among the young',
        body: `Ali ibn Abi Talib, son of Abu Talib and therefore the Prophet's \ufdfa own first cousin, was still a boy, traditionally described as around ten years old, at this time. Given Abu Talib's own household had grown large and financially stretched, already covered in this course's second unit as never having been among the wealthier of Abdul Muttalib's sons, the Prophet \ufdfa had taken Ali into his own household some time before this, meaning Ali was raised in close daily proximity to him well before revelation ever began, and believed without hesitation once it did.`,
      },
      {
        heading: 'Zayd ibn Harithah, the first among the freed',
        body: `Zayd ibn Harithah had originally come into Khadijah's household, who later gave him to the Prophet \ufdfa directly. The Prophet \ufdfa subsequently freed him and treated him as an adopted son in every practical sense, and Zayd, already bound to him by this close relationship, believed early and remained one of his most trusted companions for the rest of his life.`,
      },
      {
        heading: 'Abu Bakr, the first among free men outside the household',
        body: `Abu Bakr as-Siddiq was a respected and well-connected Makkan merchant, already a close personal friend of the Prophet \ufdfa before revelation began, and the first adult man outside his immediate household to believe. This specific detail matters directly for this unit's remaining topics, since Abu Bakr's own wide network of trusted relationships across Makkah is precisely what allowed the earliest community to grow beyond this first small circle at all.`,
      },
      {
        heading: 'Why this specific framework is worth remembering',
        body: `Presenting these four individuals together, rather than simply as an unordered list of early names, makes a specific point worth carrying into this unit's remaining topics: from its very first moments, before any public proclamation had even occurred, this new community already crossed the lines of age, social status, and gender that structured so much of the Makkan society this course's first unit already described in detail. This pattern, a message reaching across exactly these lines, becomes even more pronounced as this unit's account continues.`,
      },
    ],
  },

  'secret-2': {
    id: 'secret-2',
    unit: 'unit-5',
    title: 'Three Years of Private Calling',
    summary: 'Why the earliest dawah was conducted privately rather than openly.',
    content: [
      {
        heading: 'A deliberate, sustained choice, not simple hesitation',
        body: `Following these first believers, dawah continued privately and individually for a sustained period, traditionally given as approximately three years, before any public, open proclamation of the message occurred at all. This was not the Prophet \ufdfa hesitating or delaying out of uncertainty. It reflects a deliberate approach to how a small, entirely new community could actually survive its own earliest and most vulnerable period.`,
      },
      {
        heading: 'What private dawah actually looked like in practice',
        body: `During this period, the Prophet \ufdfa approached specific individuals directly and quietly, generally those already connected to him or to other early believers through existing bonds of trust, rather than addressing Makkah's population as a whole. This is precisely the setting in which Abu Bakr's own personal network, already introduced in this unit's previous topic, became so significant, since private, trust-based invitation depends entirely on exactly the kind of close, credible relationships he already possessed across Makkah.`,
      },
      {
        heading: 'Why premature exposure would have posed a genuine risk',
        body: `This course's first unit already established Quraysh's considerable investment, religious and economic alike, in Makkah's existing order, including the very idol worship this new message directly opposed. A public challenge to this order, announced before the community calling for it had any real size or cohesion, risked drawing the full weight of Quraysh's opposition down onto a group with no capacity yet to withstand it. Private growth allowed the message to reach genuinely receptive people first, before that inevitable confrontation, examined directly in this course's sixth unit, actually arrived.`,
      },
      {
        heading: 'A period of real, if modest, growth',
        body: `Despite its private nature, this was not a period of stagnation. This unit's next topic turns directly to just how far this private network actually reached during these same three years, extending well beyond the four individuals already covered in this unit's first topic into a genuinely broader, more socially varied group of early believers.`,
      },
      {
        heading: 'Setting up the transition this course examines directly next',
        body: `This entire three-year period existed specifically to prepare for what would eventually follow: a direct command to proclaim the message openly, examined in full in this course's sixth unit. Understanding why this private phase came first, and lasted as long as it did, is what makes that later transition to public proclamation genuinely make sense as a considered shift in strategy, rather than an arbitrary change in approach.`,
      },
    ],
  },

  'secret-3': {
    id: 'secret-3',
    unit: 'unit-5',
    title: 'The Household of Islam\u2019s Earliest Converts',
    summary: 'Who joined the earliest community, and from what backgrounds.',
    content: [
      {
        heading: 'Abu Bakr\u2019s own considerable role in this growth',
        body: `Abu Bakr, already introduced in this unit's first topic, proved to be an especially active and effective caller to this new faith from his very first day as a believer. Well regarded across Makkah, personally trusted, and already surrounded by a wide circle of relationships built through years of honest business dealing, he was positioned to reach people few others in the earliest community could have approached with the same immediate credibility.`,
      },
      {
        heading: 'Five specific men brought to belief through his own efforts',
        body: `Through Abu Bakr's direct, personal efforts, five specific men came to believe during this same period: Uthman ibn Affan, Zubayr ibn al-Awwam, Abdur Rahman ibn Awf, Sa'd ibn Abi Waqqas, and Talha ibn Ubaydullah. Together with the four individuals already covered in this unit's first topic, these men are frequently remembered together as being among the earliest forerunners of the entire Muslim community, several of them going on to hold real significance in the years this course examines later.`,
      },
      {
        heading: 'A message that reached well beyond Makkah\u2019s established elite',
        body: `Alongside these relatively well-connected converts, the earliest community also included Bilal ibn Rabah, an Abyssinian man held in slavery in Makkah, whose belief placed him in a considerably more vulnerable position than converts with real tribal standing and protection behind them, a vulnerability this course's sixth unit examines directly once persecution actually began. His presence within this same early community, alongside men like Uthman and Zubayr from Quraysh's own established families, confirms directly what this unit's first topic already suggested: this message reached across genuinely different levels of Makkah's social order from its very earliest days.`,
      },
      {
        heading: 'A genuinely wide cross-section, even while still private',
        body: `Beyond these specific individuals, biographical tradition records dozens of further early converts during this same three-year period, drawn from a real range of backgrounds, established Quraysh families and people with no significant standing at all, older figures and younger ones, men and women alike. This range matters directly for understanding the specific, varied character of persecution this course's next unit examines, since the actual danger different early believers faced would come to depend heavily on exactly this same variation in social standing and tribal protection.`,
      },
      {
        heading: 'A community already meaningfully larger than four people',
        body: `By the end of the period this unit covers, the private, quietly growing community this topic has described was genuinely larger and more socially varied than its first four believers alone might suggest, even though it remained, throughout this entire period, still unknown to Makkah's wider population and its leadership. This unit's closing topic turns directly to where and how this same community actually gathered and practiced together during these same private years.`,
      },
    ],
  },

  'secret-4': {
    id: 'secret-4',
    unit: 'unit-5',
    title: 'Building a Community in Secret',
    summary: 'How the earliest Muslims practiced and supported one another quietly.',
    content: [
      {
        heading: 'A specific house at the center of this early community',
        body: `The house of al-Arqam ibn Abi al-Arqam, himself a young early convert from the clan of Makhzum, became the primary gathering place for the Prophet \ufdfa and the earliest Muslims during this same period. This specific house is remembered directly in Islamic tradition by name, precisely because of how central it became to the community's earliest life together.`,
      },
      {
        heading: 'Why this specific house, of all the possible choices',
        body: `Al-Arqam's youth and his specific position within Makhzum, a clan not otherwise directly associated with the new message, meant this particular house drew considerably less attention than a more prominent or already-suspected location might have. This connects directly back to this unit's second topic, and the broader concern already established there for protecting a small, genuinely vulnerable community from premature exposure to Quraysh's opposition.`,
      },
      {
        heading: 'What actually happened inside this house',
        body: `Within this same house, the Prophet \ufdfa personally met with new and interested individuals, taught the Qur'an directly, and led the small community in prayer together. This was genuine, structured communal practice, not merely private, isolated belief held individually by scattered converts, even though it remained entirely hidden from Makkah's wider population throughout this same period.`,
      },
      {
        heading: 'A community built on real mutual support, not belief alone',
        body: `Beyond worship and teaching, this early community also provided its members with real, practical mutual support, a genuinely necessary provision given that several of its members, Bilal already named directly in this unit's previous topic among them, held little independent social protection of their own. This mutual support among a small, quietly growing group of believers is itself part of what allowed this community to survive its own most vulnerable early years intact.`,
      },
      {
        heading: 'Closing this unit and opening the account of public dawah',
        body: `This unit has now covered the very first believers across four distinct categories, the deliberate reasoning behind approximately three years of private calling, the genuinely wide range of people this same private message reached, and the specific house where this early community actually gathered and practiced together. This course's sixth unit turns directly to what happened once this same private phase came to its own deliberate end: a direct command to proclaim the message openly, and Quraysh's own response once they could no longer overlook it.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 6 - PUBLIC DAWAH AND EARLY PERSECUTION (full content,
  // expanded)
  //
  // Qur'anic Arabic checked against primary sources. Historical
  // accounts (the Safa mountain event, Abu Lahab's response, Utbah's
  // negotiation attempt, the persecution of Bilal and the family of
  // Yasir) checked against multiple current classical and
  // contemporary Seerah references, including the underlying
  // narrations in Sahih al-Bukhari. This unit's third topic covers
  // real historical accounts of violence against early converts,
  // presented factually and with the gravity these events warrant,
  // without dwelling on graphic detail beyond what conveys their
  // actual historical significance.
  // -----------------------------------------------------------
  'public-1': {
    id: 'public-1',
    unit: 'unit-6',
    title: 'The Command to Proclaim Openly',
    summary: 'The revelation instructing him \ufdfa to call publicly.',
    content: [
      {
        heading: 'The command ending three years of private calling',
        body: `This course's fifth unit already described approximately three years of private, individual dawah. This period ended with a direct instruction.`,
        verses: [
          {
            type: 'quran',
            arabic: 'فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ',
            english: 'So proclaim openly what you have been commanded, and turn away from those who associate partners with Allah.',
            source: 'Surah al-Hijr, 15:94',
          },
        ],
      },
      {
        heading: 'A second, more specific command',
        body: `A further, more specific instruction directed him to begin this public phase with those closest to him by blood.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ',
            english: 'And warn your closest kindred.',
            source: 'Surah ash-Shu\u2019ara, 26:214',
          },
        ],
      },
      {
        heading: 'Gathering Quraysh on Mount Safa',
        body: `Following this second command, the Prophet \ufdfa ascended Mount Safa and raised the traditional Makkan alarm cry used to warn of approaching danger, drawing the clans of Quraysh together to hear him. Once assembled, he asked them directly: if he told them an armed force was advancing from behind that same mountain, would they believe him. They answered without hesitation that they would, since they had never known him to lie, a direct, public confirmation of the exact reputation this course's third unit already established in detail, now tested openly before the entire assembled tribe.`,
      },
      {
        heading: 'The warning itself, and a hostile reply from within his own family',
        body: `Having secured this open acknowledgment of his own honesty, the Prophet \ufdfa told them plainly that he was a warner sent to them ahead of a severe punishment. His own uncle, Abu Lahab, responded immediately and harshly, telling him he had perished and asking whether this was truly the reason he had gathered them all together.`,
      },
      {
        heading: 'A direct response naming Abu Lahab specifically',
        body: `A short surah was revealed in direct response to this exact moment, opening by turning Abu Lahab's own words back upon him.`,
        verses: [
          {
            type: 'quran',
            arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
            english: 'May the hands of Abu Lahab be ruined, and ruined is he.',
            source: 'Surah al-Masad, 111:1',
          },
        ],
      },
      {
        heading: 'Why this specific moment matters as a genuine turning point',
        body: `This single event on Mount Safa marks the actual transition this unit's opening topic describes: private calling, covered fully in this course's fifth unit, had now given way to open, public proclamation, delivered directly to Quraysh's own assembled leadership rather than to individuals approached quietly. This course's next topic turns to how that same leadership actually responded once this message could no longer be overlooked or contained.`,
      },
    ],
  },

  'public-2': {
    id: 'public-2',
    unit: 'unit-6',
    title: 'Quraysh\u2019s Response and Escalating Hostility',
    summary: 'How Quraysh\u2019s leadership responded once the message became public.',
    content: [
      {
        heading: 'From dismissal to genuine alarm',
        body: `Quraysh's initial reaction to open proclamation included mockery and specific accusations, that the Prophet \ufdfa was a poet, a sorcerer, or simply affected by madness. As the message continued to spread and its direct challenge to Makkah's existing religious order, already established in detail across this course's first unit, became impossible to dismiss, this mockery gradually gave way to genuine alarm among Quraysh's leadership.`,
      },
      {
        heading: 'Utbah ibn Rabi\u2019ah\u2019s attempt at negotiation',
        body: `Quraysh's council eventually sent Utbah ibn Rabi'ah, a respected elder, to negotiate directly. Utbah offered him, in succession, sufficient wealth to become the richest man in Makkah, recognition as the tribe's own chief, marriage to any woman he wished, and even an offer to seek a cure if his condition was believed to be some form of affliction, all in exchange for abandoning his message. The Prophet \ufdfa responded not by arguing point by point, but by reciting a portion of the Qur'an directly to him.`,
      },
      {
        heading: 'A negotiator shaken by what he actually heard',
        body: `Utbah returned to Quraysh visibly affected, reportedly telling them directly that he had heard words unlike any poetry, sorcery, or spellcraft he had ever encountered, and advising them to leave the Prophet \ufdfa alone. Quraysh responded by mocking Utbah in turn, accusing him of having been affected by the very words he was warning them about, a telling sign of how seriously his own account had unsettled them despite their public dismissal of it.`,
      },
      {
        heading: 'A final offer of religious compromise, and its direct rejection',
        body: `Having failed to reach the Prophet \ufdfa through wealth, status, or negotiation, Quraysh proposed a specific religious compromise: that each side worship the other's god for a set period, alternating between them. This proposal was rejected directly and completely.`,
        verses: [
          {
            type: 'quran',
            arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
            english: 'To you your religion, and to me my religion.',
            source: 'Surah al-Kafirun, 109:6',
          },
        ],
      },
      {
        heading: 'Why wealth, status, and compromise all genuinely failed',
        body: `Each of these approaches assumed the Prophet's \ufdfa message could be redirected or negotiated away like an ordinary tribal dispute over honor or resources. This course's first unit already established just how central the Ka'bah's existing religious system was to Quraysh's own standing and wealth, and this course's fourth unit already established the message's own actual nature: a restoration of monotheism rather than a personal grievance or ambition. Neither wealth nor status could genuinely address a message never actually built around either, which is precisely why Quraysh's leadership, having exhausted these approaches, turned toward the direct persecution this unit's next topic examines.`,
      },
    ],
  },

  'public-3': {
    id: 'public-3',
    unit: 'unit-6',
    title: 'The Torture of the Weak and Enslaved',
    summary: 'The specific persecution faced by those with no tribal protection.',
    content: [
      {
        heading: 'Protection that varied sharply by social standing',
        body: `This course's fifth unit already noted that early believers came from genuinely different levels of Makkah's social order, and this variation now became directly, and often brutally, consequential. Believers with real tribal standing behind them, including the Prophet \ufdfa himself under Abu Talib's continued protection, faced hostility and pressure, but generally not the direct physical violence inflicted on those with no such protection at all.`,
      },
      {
        heading: 'Violence reaching even a protected believer',
        body: `Even relative protection did not guarantee complete safety. Abu Bakr, already introduced in this course's fifth unit as a respected and well-connected merchant, was violently beaten by members of Quraysh, including reportedly by Utbah ibn Rabi'ah himself, after speaking publicly in defense of the message, an assault severe enough that his own family initially believed he would not survive it. Upon regaining consciousness, his first recorded concern was not for his own condition, but for the Prophet's \ufdfa safety.`,
      },
      {
        heading: 'Bilal\u2019s specific ordeal',
        body: `Bilal ibn Rabah, already introduced directly in this course's fifth unit, held no tribal protection at all as an enslaved man, and his owner, Umayyah ibn Khalaf, subjected him to sustained, severe punishment specifically intended to force him to renounce his faith. Bilal endured this treatment while repeating a single word, Ahad, One, affirming Allah's oneness even under this pressure. He was eventually purchased and freed by Abu Bakr, who arranged the transaction specifically to end this suffering.`,
      },
      {
        heading: 'The family of Yasir',
        body: `Ammar ibn Yasir and his parents, Yasir and Sumayyah, faced sustained persecution at the hands of members of Banu Makhzum, exposed deliberately to Makkah's harsh midday heat in an effort to break their faith. The Prophet \ufdfa passed by them during this ordeal and offered direct words of comfort, telling the family of Yasir to remain steadfast, since Paradise had been promised to them. Sumayyah did not survive this persecution, remembered directly in Islamic tradition as the first martyr in Islam's history, and Yasir himself also died as a direct result of this same treatment.`,
      },
      {
        heading: 'Why this specific chapter is recorded, and remembered, so directly',
        body: `This course has no interest in presenting only a comfortable, sanitized account of this period. These specific individuals, Bilal held down under real physical torment, Abu Bakr beaten near death for speaking in defense of his faith, and Sumayyah losing her life rather than renouncing it, represent a genuine cost this earliest community actually paid, not an abstract historical footnote. This unit's closing topic turns directly to how this same community, facing exactly this cost, continued regardless.`,
      },
    ],
  },

  'public-4': {
    id: 'public-4',
    unit: 'unit-6',
    title: 'Steadfastness Under Pressure',
    summary: 'How the earliest Muslims endured this period of open hostility.',
    content: [
      {
        heading: 'Comfort offered directly, in the middle of real suffering',
        body: `The words already covered in this unit's previous topic, offered directly to the family of Yasir in the midst of their own ordeal, reflect a pattern this course will see repeated across its later units as well: real, present comfort and reassurance offered specifically within active hardship, rather than only reflected upon afterward once the difficulty had passed.`,
      },
      {
        heading: 'A community held together by more than doctrine alone',
        body: `This course's fifth unit already described the earliest community's practice of genuine mutual support at Dar al-Arqam, and that same mutual support became directly essential during this period of open persecution. Believers with greater protection, Abu Bakr's purchase and manumission of Bilal already covered directly in this unit's previous topic being one clear example, used what standing and resources they had specifically to shield those with none.`,
      },
      {
        heading: 'A hope oriented beyond immediate relief',
        body: `The specific promise offered to the family of Yasir, Paradise rather than an immediate end to their suffering, reflects the same underlying framework this course's fourth unit already established regarding the actual nature and purpose of his \ufdfa mission: a message concerned with something considerably larger than short-term comfort or safety. This did not make the persecution itself any less real or painful, but it gave those enduring it a genuine reason to continue doing so.`,
      },
      {
        heading: 'Why this pressure did not end the movement it targeted',
        body: `Despite mockery, negotiation, and direct physical violence, Quraysh's efforts across this entire unit failed to end the message or dissolve the community gathering around it. If anything, the specific courage shown by figures like Bilal, Sumayyah, and Abu Bakr, already covered directly in this unit's third topic, became part of the account itself, remembered and repeated within the very community Quraysh had hoped this pressure would break entirely.`,
      },
      {
        heading: 'Closing this unit and turning to what came next',
        body: `This unit has covered the transition from private to public dawah, Quraysh's escalating response once negotiation and mockery both failed, the specific, severe persecution faced by believers with no tribal protection, and the steadfastness with which the earliest community endured this entire period. This course's seventh unit turns directly to the specific responses this same persecution produced: a migration to a foreign land, an economic boycott aimed at the Prophet's \ufdfa own clan, and a year of loss that would test this community's endurance further still.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 7 - TRIALS AND TURNING POINTS (full content, expanded)
  //
  // Historical accounts (the Abyssinian migrations, Ja'far's speech
  // before Negus, the boycott of Banu Hashim, the Year of Sorrow,
  // the journey to Ta'if) checked against multiple current classical
  // and contemporary Seerah references before writing. A genuine
  // point of scholarly caution regarding the specific narration of
  // the boycott document's fate is named honestly rather than
  // presented as beyond question. The Ta'if supplication is
  // described by its substance rather than quoted verbatim, since
  // its exact wording was not independently verified to the same
  // standard this course applies to quoted Qur'an and hadith text.
  // -----------------------------------------------------------
  'trial-1': {
    id: 'trial-1',
    unit: 'unit-7',
    title: 'The Migration to Abyssinia',
    summary: 'Why a group of Muslims migrated to the Christian kingdom of Abyssinia.',
    content: [
      {
        heading: 'A response to the persecution already covered directly',
        body: `Given the severity of the persecution already covered across this course's sixth unit, the Prophet \ufdfa advised a group of believers to seek genuine safety outside Makkah entirely, in the Christian kingdom of Abyssinia, ruled at the time by a king remembered across Islamic tradition specifically for his justice.`,
      },
      {
        heading: 'Two separate migrations',
        body: `An initial group, eleven men and four women, led by Uthman ibn Maz'un, made this journey around 615 CE. Word later reached this group, incorrectly, that persecution in Makkah had ended, and while some returned to confirm this, they found conditions unchanged. A second, considerably larger migration followed, numbering roughly eighty-three men along with their wives and children, led this time by Ja'far ibn Abi Talib, the Prophet's \ufdfa own cousin and the brother of Ali, already introduced directly in this course's fifth unit.`,
      },
      {
        heading: 'Quraysh\u2019s attempt to reach them even there',
        body: `Once Quraysh learned that these migrants had found genuine safety and freedom to worship under Negus's protection, they sent two capable representatives, Amr ibn al-As and Abdullah ibn Abi Rabi'ah, carrying substantial gifts for both the king and his bishops, specifically to secure the migrants' return to Makkah.`,
      },
      {
        heading: 'Ja\u2019far\u2019s direct account before the king himself',
        body: `Negus refused to decide the matter without hearing directly from the Muslims themselves, and Ja'far spoke on their behalf, describing plainly the ignorance and cruelty of their life before this message reached them, and the transformation this same message had brought about in how they treated one another. When Negus asked specifically what this new faith taught regarding Jesus, Ja'far recited from Surah Maryam, the chapter already named for Jesus's own mother, describing his birth in terms of genuine reverence. Negus and his assembled bishops were visibly moved, tradition recording that they wept as they listened.`,
      },
      {
        heading: 'A ruling that protected the migrants and rejected Quraysh\u2019s gifts',
        body: `Negus ruled directly in the migrants' favor, refusing to hand them over, and returned Quraysh's gifts rather than accepting them. This event mattered well beyond the safety it secured for this specific group. It demonstrated directly that this message could be recognized and respected even by a genuinely just ruler entirely outside Makkah's own hostile environment, a precedent this course's remaining units will show becoming increasingly significant as the years ahead continued to unfold.`,
      },
    ],
  },

  'trial-2': {
    id: 'trial-2',
    unit: 'unit-7',
    title: 'The Boycott of Banu Hashim',
    summary: 'Quraysh\u2019s attempt to isolate the Prophet\u2019s \ufdfa own clan entirely.',
    content: [
      {
        heading: 'A collective punishment aimed at an entire clan',
        body: `Having failed to stop the message through ridicule, negotiation, direct persecution, and now the failed attempt to reclaim the Abyssinian migrants already covered in this unit's previous topic, Quraysh's leadership turned to a considerably broader measure: a formal, written boycott against the Prophet's \ufdfa own clan, Banu Hashim, and its closely allied clan, Banu al-Muttalib, with the specific exception of Abu Lahab, who sided openly with the boycott instead.`,
      },
      {
        heading: 'What the boycott actually required',
        body: `This document, reportedly hung within the Ka'bah itself, prohibited the rest of Quraysh from any trade, marriage, or ordinary social interaction with these two clans, applying equally to their believing and non-believing members alike, until the Prophet \ufdfa was handed over for punishment. Abu Talib, still refusing to abandon his nephew despite not himself accepting the message, led both clans into a confined mountain pass outside Makkah known as Shi'b Abi Talib, where they remained for approximately three years under conditions of real hunger and deprivation.`,
      },
      {
        heading: 'How this severe measure eventually ended',
        body: `The boycott's end is attributed to two converging developments. A small number of sympathetic Quraysh figures, troubled by the visible suffering of their own kinsmen, worked actively to have the boycott lifted. Tradition also records, more dramatically, that the document itself was discovered to have been consumed by termites, leaving only the words bismika Allahumma, in Your name, O Allah, intact, with Abu Talib reportedly staking the boycott's continuation directly on whether this claim proved true when the document was actually examined.`,
      },
      {
        heading: 'An honest note on this second account specifically',
        body: `This specific detail regarding the termites is widely transmitted across the biographical tradition, yet it is worth noting directly that some later scholars have questioned the strength of the specific chains through which certain versions of this account are transmitted. Regardless of exactly how the boycott's end unfolded in every specific detail, its basic outcome is not in question: the boycott was lifted, and Banu Hashim and Banu al-Muttalib returned to ordinary life in Makkah after roughly three years of severe hardship.`,
      },
      {
        heading: 'A trial whose full cost was not yet finished',
        body: `The boycott's end did not mark the end of this period's genuine difficulty. This unit's next topic turns directly to what followed almost immediately afterward: the loss, within a single year, of the two people who had done more than anyone else to sustain and protect the Prophet \ufdfa through everything this course has covered so far.`,
      },
    ],
  },

  'trial-3': {
    id: 'trial-3',
    unit: 'unit-7',
    title: 'The Year of Sorrow: Khadijah and Abu Talib',
    summary: 'The deaths of his \ufdfa wife and uncle within the same year.',
    content: [
      {
        heading: 'Losing Khadijah',
        body: `Not long after the boycott covered in this unit's previous topic finally ended, Khadijah, the Prophet's \ufdfa wife of some twenty-five years, already established across this course's third and fourth units as his first believer and one of his earliest and most steadfast sources of personal support, passed away.`,
      },
      {
        heading: 'Losing Abu Talib soon after',
        body: `Within this same year, Abu Talib also died. This course's second unit already covered his taking on the young Muhammad's \ufdfa care after Abdul Muttalib's death, and this course's sixth and seventh units have now covered, in direct succession, his continued refusal to abandon his nephew even under the boycott's severe pressure. His death removed the single most significant source of the Prophet's \ufdfa social and tribal protection within Makkah.`,
      },
      {
        heading: 'Why tradition remembers this specific year by name',
        body: `Islamic tradition remembers this year directly as Aam al-Huzn, the Year of Sorrow, a name reflecting the genuine, compounded weight of losing both his closest personal companion and his lifelong protector within so short a span of time. This course has no interest in passing over this period quickly simply because it lacks the dramatic external conflict of the persecution already covered in this course's sixth unit. The loss itself is the point this topic asks to be taken seriously.`,
      },
      {
        heading: 'A practical, and genuinely dangerous, consequence',
        body: `Abu Talib's death carried a specific practical consequence beyond personal grief: leadership of Banu Hashim passed to Abu Lahab, already established directly in this course's sixth unit as hostile to the message from its very first public proclamation. Unlike Abu Talib, Abu Lahab did not extend the clan's traditional protection to his own nephew, leaving the Prophet \ufdfa considerably more exposed to Quraysh's hostility than at any previous point this course has covered.`,
      },
      {
        heading: 'Where this left him, and what he did next',
        body: `Having lost both his closest personal support and his tribal protection within the same year, the Prophet \ufdfa faced a genuinely difficult question: where, if anywhere, support might still be found. This unit's closing topic turns directly to his own answer to that question, a journey to a nearby town that would prove, by his own later account, to be among the most painful experiences of his entire life.`,
      },
    ],
  },

  'trial-4': {
    id: 'trial-4',
    unit: 'unit-7',
    title: 'The Journey to Ta\u2019if',
    summary: 'His \ufdfa difficult journey seeking support outside Makkah.',
    content: [
      {
        heading: 'Seeking a new source of support',
        body: `Following the losses already covered directly in this unit's previous topic, the Prophet \ufdfa traveled on foot, accompanied only by Zayd ibn Harithah, already introduced in this course's fifth unit, to the nearby town of Ta'if, hoping the tribe of Thaqif settled there might accept his message and offer him the protection Makkah itself could no longer reliably provide.`,
      },
      {
        heading: 'A rejection delivered with real hostility',
        body: `Thaqif's leading men not only rejected his message outright, but responded with open mockery, and then incited a mob, including servants and younger residents of the town, to drive him out by force. He was pelted with stones severely enough that his feet bled, and Zayd, attempting to shield him from this same assault, was badly injured himself.`,
      },
      {
        heading: 'Brief, unexpected kindness from an unlikely source',
        body: `Having been driven from the town, the Prophet \ufdfa and Zayd took shelter in a nearby orchard belonging to Utbah and Shaybah, two brothers who, despite their own open opposition to his message, felt genuine pity upon seeing his condition from a distance. The two sent their Christian servant, Addas, with a plate of grapes. The Prophet \ufdfa said bismillah, in the name of Allah, before eating, a small habit that visibly surprised Addas, leading to a brief conversation in which Addas learned enough to respond with real, visible reverence toward him.`,
      },
      {
        heading: 'A moment of real distress, and its resolution',
        body: `Tradition preserves a supplication offered by the Prophet \ufdfa during this same episode, one whose exact wording this course does not reproduce directly, but whose substance is widely and consistently recorded: a genuine expression of his own weakness and distress in this specific moment, paired with complete submission to Allah regardless of the outcome, and a clear statement that Allah's own pleasure with him mattered more than any hardship people themselves could inflict.`,
      },
      {
        heading: 'An offer declined, and a hope stated instead',
        body: `Tradition also records that the angel Jibril appeared to him during this same journey, accompanied by the angel responsible for the mountains, who offered, with Allah's permission, to crush Ta'if between the two mountains surrounding it if the Prophet \ufdfa wished. He declined this offer, expressing hope instead that even if this specific generation of Thaqif never accepted the message, their own descendants might yet come to worship Allah alone. He himself later described this specific day as more painful than any other hardship he faced, including the Battle of Uhud examined directly in this course's tenth unit.`,
      },
      {
        heading: 'Closing this unit and turning toward what came next',
        body: `This unit has covered a genuine refuge found abroad in Abyssinia, a severe collective punishment endured for years within Makkah itself, the loss of his two closest sources of support within a single year, and a painful, physically violent rejection at Ta'if immediately afterward. This course's eighth unit turns directly to what followed this same low point: a remarkable night journey, a series of pledges made by visitors from Yathrib, and the migration that would finally give this community the genuine home Makkah itself had, by this point, thoroughly failed to provide.`,
      },
    ],
  },

  // -----------------------------------------------------------
  // UNIT 8 - ISRA, MI'RAJ, AND THE PATH TO MADINAH (full content,
  // expanded)
  //
  // Qur'anic Arabic (Surah al-Isra 17:1, Surah at-Tawbah 9:40)
  // checked against primary sources before writing. Historical
  // accounts (the ascension narrative, the Pledges of Aqabah, the
  // Dar an-Nadwah plot, the migration itself) checked against
  // multiple current classical and contemporary Seerah references.
  // -----------------------------------------------------------
  'hijrah-1': {
    id: 'hijrah-1',
    unit: 'unit-8',
    title: 'The Night Journey and Ascension',
    summary: 'The Isra and Mi\u2019raj, and what each event established.',
    content: [
      {
        heading: 'A single night, following the hardship already covered directly',
        body: `Following the losses and rejection already covered across this course's seventh unit, the Prophet \ufdfa experienced a single night journey combining two distinct events: al-Isra, a physical journey from Makkah to Jerusalem, and al-Mi'raj, an ascension from Jerusalem through the heavens. The Qur'an itself opens a surah with direct reference to the first of these two events.`,
        verses: [
          {
            type: 'quran',
            arabic: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا',
            english: 'Exalted is He who took His servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him some of Our signs.',
            source: 'Surah al-Isra, 17:1',
          },
        ],
      },
      {
        heading: 'Leading every earlier prophet in prayer',
        body: `Riding a mount named al-Buraq, the Prophet \ufdfa traveled to Jerusalem's Masjid al-Aqsa, where tradition records him leading every previous prophet in prayer together, a detail carrying real symbolic weight directly connected to this course's fourth unit: the same continuity between his own mission and every prophet who preceded him, now made physically visible in a single shared act of worship.`,
      },
      {
        heading: 'The ascension itself',
        body: `From Jerusalem, the Prophet \ufdfa ascended through the heavens, meeting a specific prophet at each level according to tradition, Adam, then Isa and Yahya together, then Yusuf, Idris, Harun, Musa, and finally Ibrahim at the highest level, before reaching Sidrat al-Muntaha, a boundary tradition describes as the furthest point of creation itself.`,
      },
      {
        heading: 'A gift negotiated down through Musa\u2019s own advice',
        body: `At this furthest point, prayer was made obligatory upon him and his community, initially fifty times daily. Passing Musa again on his return, the Prophet \ufdfa was advised directly that this number would prove too difficult for his community to sustain, and was encouraged to request a reduction. This exchange repeated several times, each request reducing the number further, until five daily prayers remained, while the reward for observing them was retained at the level of fifty, a detail tradition treats as a specific act of mercy rather than a simple discount.`,
      },
      {
        heading: 'Belief without hesitation, and belief withheld entirely',
        body: `Returning to Makkah the same night, the Prophet \ufdfa recounted this entire journey publicly, and Quraysh responded with open disbelief, treating the claim as plainly impossible. Abu Bakr, already introduced across this course's fifth and sixth units, believed the account immediately and without qualification upon hearing it, a response tradition credits directly with confirming the title as-Siddiq, the one who affirms truth without hesitation, already closely associated with him. This same contrast, instant trust from one companion against outright dismissal from Quraysh's wider leadership, sets the stage directly for this unit's remaining topics, where trust extended by people entirely outside Makkah would prove decisive.`,
      },
    ],
  },

  'hijrah-2': {
    id: 'hijrah-2',
    unit: 'unit-8',
    title: 'The Pledges of Aqabah',
    summary: 'The agreements made with the people of Yathrib before the migration.',
    content: [
      {
        heading: 'A first, modest agreement',
        body: `During the pilgrimage season the following year, twelve men from Yathrib met the Prophet \ufdfa privately at a place called Aqabah and pledged specific personal conduct: to associate no partners with Allah, to avoid theft and adultery, to refrain from killing their own children, to avoid slander, and to obey him in what was right. This first pledge asked for individual conduct alone, with no promise of protection or defense attached to it.`,
      },
      {
        heading: 'Mus\u2019ab ibn Umayr\u2019s mission to Yathrib',
        body: `Following this first pledge, the Prophet \ufdfa sent Mus'ab ibn Umayr back to Yathrib with these same twelve men, specifically to teach the Qur'an and the fundamentals of the message to those already interested. Mus'ab's efforts proved remarkably successful, leading directly to the conversion of Sa'd ibn Mu'adh and Usayd ibn Hudayr, two leading figures among Yathrib's Aws tribe whose acceptance carried real, immediate influence across their own community.`,
      },
      {
        heading: 'A second, considerably larger pledge',
        body: `The following pilgrimage season, seventy-three men and two women from Yathrib met the Prophet \ufdfa again at the same location, this time offering something categorically different from the first pledge: active protection, promising to defend him exactly as they would defend their own families, even at real cost to themselves.`,
      },
      {
        heading: 'Why this second pledge changed everything',
        body: `This shift from personal conduct to active, promised defense transformed the entire situation this course has followed since its fifth unit. Yathrib was no longer simply a place where individuals happened to accept the message. It was now a community that had made a genuine, collective commitment to protect the Prophet \ufdfa and his followers, precisely the kind of security Makkah itself, especially following Abu Talib's death already covered in this course's seventh unit, could no longer reliably offer.`,
      },
      {
        heading: 'What this pledge actually made possible',
        body: `With this second pledge secured, the Prophet \ufdfa began permitting believers to migrate to Yathrib directly, and this unit's remaining topics turn to exactly how that migration actually unfolded, both for the wider community and, eventually, for the Prophet \ufdfa himself.`,
      },
    ],
  },

  'hijrah-3': {
    id: 'hijrah-3',
    unit: 'unit-8',
    title: 'Preparing for Migration',
    summary: 'How the migration to Madinah was planned and carried out.',
    content: [
      {
        heading: 'A quiet exodus, largely unnoticed at first',
        body: `Following the second pledge already covered in this unit's previous topic, believers began leaving Makkah for Yathrib gradually, in small groups, over the following weeks and months, deliberately avoiding the kind of open, visible departure that might draw immediate resistance. Within a relatively short span of time, the great majority of Makkah's Muslim community had relocated, leaving primarily the Prophet \ufdfa himself, Abu Bakr, and Ali still remaining behind.`,
      },
      {
        heading: 'Quraysh recognizing the genuine danger this represented',
        body: `Once Quraysh's leadership grasped what this migration actually meant, a community loyal to the Prophet \ufdfa establishing itself in a genuinely secure location, with real protectors committed to defending it, they understood this as a serious, direct threat rather than simply a matter of individuals leaving the city. A special council convened at Dar an-Nadwah, Quraysh's own meeting house, specifically to decide how to prevent this threat from fully materializing.`,
      },
      {
        heading: 'A plan built specifically to defeat tribal justice itself',
        body: `Various proposals were raised and rejected, exile and permanent imprisonment among them, before a specific proposal, associated directly with Abu Jahl, was adopted: a single young man selected from every clan in Quraysh would strike the Prophet \ufdfa together, at the same moment, so that responsibility for his death would be shared equally across every clan at once. This was a deliberate exploitation of the same tribal structure this course's first unit already described in detail, since Banu Hashim could never realistically seek justice against every clan in Makkah simultaneously.`,
      },
      {
        heading: 'A plot revealed before it could be carried out',
        body: `The Qur'an itself later referenced this exact plan directly.`,
        verses: [
          {
            type: 'quran',
            arabic: 'وَإِذْ يَمْكُرُ بِكَ الَّذِينَ كَفَرُوا لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ وَيَمْكُرُونَ وَيَمْكُرُ اللَّهُ وَاللَّهُ خَيْرُ الْمَاكِرِينَ',
            english: 'And remember when those who disbelieved plotted against you, to restrain you, kill you, or expel you. They planned, and Allah planned, and Allah is the best of planners.',
            source: 'Surah al-Anfal, 8:30',
          },
        ],
      },
      {
        heading: 'What this revelation actually set in motion',
        body: `Informed of this exact plan in advance, the Prophet \ufdfa now had both a genuine reason and a genuine destination: the plot already covered directly in this topic, and the community already committed to protecting him through the second pledge covered in this unit's previous topic. This unit's closing topic turns directly to how he actually responded to this specific, immediate danger.`,
      },
    ],
  },

  'hijrah-4': {
    id: 'hijrah-4',
    unit: 'unit-8',
    title: 'The Hijrah Itself',
    summary: 'The journey from Makkah to Madinah and its significance.',
    content: [
      {
        heading: 'A decoy left behind',
        body: `On the night the assassins already covered in this unit's previous topic gathered outside his house, the Prophet \ufdfa arranged for Ali to sleep in his own bed, wrapped in his cloak, while he himself slipped away undetected, accompanied only by Abu Bakr, whom he had already informed directly of Allah's permission to migrate.`,
      },
      {
        heading: 'Three days hidden nearby, rather than fleeing immediately',
        body: `Rather than heading directly and immediately toward Yathrib, an obvious route Quraysh would search first, the two men hid for three days in a cave on Mount Thawr, south of Makkah, allowing the initial, most urgent search to pass before continuing. Quraysh search parties reportedly came close enough to the cave's entrance that Abu Bakr expressed real, immediate fear for their safety.`,
      },
      {
        heading: 'A direct Qur\u2019anic reference to exactly this moment',
        body: `The Prophet's \ufdfa own response to Abu Bakr's fear is preserved directly within the Qur'an itself.`,
        verses: [
          {
            type: 'quran',
            arabic: 'إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
            english: 'When the two of them were in the cave, and he said to his companion, do not grieve; indeed Allah is with us.',
            source: 'Surah at-Tawbah, 9:40',
          },
        ],
      },
      {
        heading: 'A longer, less expected route',
        body: `Once the immediate search had eased, the two set out toward Yathrib guided by Abdullah ibn Urayqit, a skilled guide familiar with the region who was not himself yet a Muslim, deliberately taking a longer, less conventional path along the coast rather than the more direct northern route Quraysh would most likely expect and pursue.`,
      },
      {
        heading: 'Arrival, and a name that would follow this same city ever after',
        body: `The journey brought them first to Quba, on the outskirts of Yathrib, where the Prophet \ufdfa paused for several days and oversaw the construction of a mosque there before completing the final stage of the journey into the city itself. Yathrib would become known from this point onward as Madinat an-Nabi, the city of the Prophet, or simply al-Madinah, the very name this course will use throughout its remaining units.`,
      },
      {
        heading: 'Closing this unit and opening a genuinely new chapter',
        body: `This unit has covered a single extraordinary night journey and ascension, the two pledges that transformed Yathrib from a distant possibility into a genuine, secured destination, the specific plot that finally made departure urgent, and the careful, deliberate journey that brought the Prophet \ufdfa safely to this new city. This course's ninth unit turns directly to what came next: building an actual community, with its own mosque, its own bonds of brotherhood, and its own formal, written agreement governing how its residents, Muslim and non-Muslim alike, would live together.`,
      },
    ],
  },

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