// src/data/zakaat.js
//
// Everything Zakaat — the obligation of zakat, nisab and rates, what
// wealth is zakatable, the eight recipient categories, Zakat al-Fitr,
// and common modern questions. Static content, same convention as
// womensFiqh.js / qiwaamah.js: reviewed once via PR, not admin-
// managed or AI-generated at runtime — this touches real financial
// obligations people will act on directly.
//
// STATUS: draft — pending scholar sign-off before this is presented
// to users as final. Nisab values and rates below reflect commonly
// cited figures (2.5% on cash/gold/silver being the most widely
// known) but MUST be verified against current gold/silver spot
// prices and your school of thought's specific positions before
// publishing — nisab in local currency changes with the market and
// cannot be hardcoded as a fixed number long-term.

export const ZAKAAT_CONTENT = {
  fundamentals: {
    title: 'Zakat — The Fundamentals',
    arabic_title: 'أَسَاسِيَّاتُ الزَّكَاة',
    quick_fact: 'One of the five pillars. Obligatory, not optional charity',
    definition:
      'Zakat is the obligatory portion of wealth a Muslim gives annually once their wealth reaches a minimum threshold (nisab) and has been held for a full lunar year (hawl). It is one of the five pillars of Islam, alongside the testimony of faith, prayer, fasting, and Hajj — not a voluntary donation, but a defined, calculable duty. The word itself carries the meaning of both "purification" and "growth": zakat purifies the remaining wealth and, in the Islamic worldview, is understood to bring blessing rather than loss.',
    scope:
      'Zakat is owed by every Muslim — man or woman, young or old (a guardian pays on behalf of a minor\'s zakatable wealth, according to the majority view) — who is free and whose wealth reaches the nisab threshold and remains at or above it for a full lunar year. It does not apply to wealth used for basic living needs (a primary home, a car used for transport, household items, tools of one\'s trade) — only to wealth that is growing, held, or available for growth: cash, gold, silver, trade goods, and specific categories like livestock and agricultural produce, each with their own rules.',
    rulings:
      'Zakat becomes obligatory the moment wealth reaches nisab and a lunar year passes while it remains at or above that threshold. If wealth drops below nisab at any point during the year, in the standard view the year restarts once it reaches nisab again. A Muslim who denies the obligation of zakat outright, understanding what it is, is considered to have stepped outside the fold of Islam according to the consensus of the scholars — this is how seriously zakat is treated as a defining pillar, not merely a virtuous act. A Muslim who acknowledges the obligation but is negligent in paying it is a sinner deserving of the threat of a serious punishment mentioned in the Qur\'an and Sunnah, but does not leave Islam by that negligence alone.',
    cases: [
      {
        title: 'Wealth that fluctuates above and below nisab during the year',
        scenario:
          'A person\'s savings rise above nisab in Muharram, drop below it in Rajab due to a large expense, then rise above nisab again in Ramadan.',
        ruling:
          'In the majority view, the lunar year restarts from the point wealth reaches nisab again — the earlier months where wealth was below nisab don\'t count toward the hawl. Some scholars hold a more lenient view where only the wealth present at year-end matters, provided nisab was reached at the start of the year; this is a genuine point of difference worth asking a knowledgeable person about for your specific situation.',
      },
      {
        title: 'A minor who inherits zakatable wealth',
        scenario:
          'A child inherits a sum of money that reaches nisab and is held in their name.',
        ruling:
          'According to the majority of scholars (Maliki, Shafi\'i, and Hanbali positions), zakat is still due on a minor\'s wealth, and their guardian is responsible for calculating and paying it on the child\'s behalf. The Hanafi position differs, generally exempting a minor\'s wealth from zakat until they reach maturity — again, worth confirming which view your practice follows.',
      },
    ],
    faq: [
      {
        question: 'Is zakat the same as general charity (sadaqah)?',
        answer:
          'No. Zakat is a specific, obligatory amount owed once conditions are met — it has defined recipients, rates, and timing. Sadaqah is any voluntary act of giving, with no minimum, no fixed rate, and no restriction on who can benefit from it. Zakat is a pillar; sadaqah is encouraged generosity beyond that pillar.',
      },
      {
        question: 'What happens if I never paid zakat I owed in past years?',
        answer:
          'The obligation doesn\'t disappear with time — scholars hold that missed zakat from past years remains owed and should be calculated and paid as soon as one realizes the shortfall, alongside sincere repentance for the delay.',
      },
    ],
  },

  nisab_rates: {
    title: 'Nisab & Rates',
    arabic_title: 'النِّصَاب وَالمِقْدَار',
    quick_fact: '2.5% on cash, gold, and silver — different rates elsewhere',
    definition:
      'Nisab is the minimum amount of wealth a person must possess before zakat becomes obligatory on it. Below nisab, no zakat is owed, no matter how long the wealth is held. The rate — how much of that wealth is actually paid — differs depending on the category of wealth.',
    scope:
      'The classical nisab for gold is 87.48 grams (roughly 20 mithqal / dinars); for silver, 612.36 grams (roughly 200 dirhams). For cash and bank savings, the nisab is generally calculated using the lower of the gold or silver value in local currency — using silver\'s nisab tends to result in a lower threshold, meaning more people become liable, which many contemporary scholars consider more cautious and closer to benefiting the poor; others use gold\'s nisab as the standard. Because gold and silver prices constantly change, the cash-equivalent nisab in your local currency must be recalculated regularly against current market prices — it cannot be a fixed number held constant year over year.',
    rulings:
      'Cash, bank savings, gold, and silver: 2.5% (1/40th) of the total value, once nisab is reached and held for a lunar year. Trade goods and business inventory: 2.5% of the total market value of stock-in-trade at year-end, calculated the same way as cash. Livestock (sheep, goats, cattle, camels) follow a separate, detailed scale based on the number of animals owned, not a flat percentage — this is a specialized area worth consulting a scholar or a dedicated livestock-zakat guide for, given how specific the thresholds are. Agricultural produce follows its own rate: 10% of the harvest if the land was watered naturally (rain, rivers) without irrigation cost, or 5% if it required paid irrigation — reflecting the greater cost and effort involved in the latter.',
    cases: [
      {
        title: 'Someone whose savings are just above the cash nisab',
        scenario:
          'A person has held ₦850,000 in savings for over a lunar year, and the current cash-equivalent nisab (based on silver) works out to roughly ₦800,000.',
        ruling:
          'Since their savings exceed nisab and have been held for a full lunar year, zakat is due on the full ₦850,000 (not just the portion above nisab) — once nisab is reached, zakat applies to the entire zakatable amount, at 2.5%. In this example, that would be ₦21,250.',
      },
      {
        title: 'Combining gold, cash, and business stock to check nisab',
        scenario:
          'A woman owns gold jewelry, has cash savings, and runs a small trading business — none of which individually reaches nisab on its own.',
        ruling:
          'Scholars generally combine all zakatable wealth categories (cash, gold, silver, trade goods) together when checking whether nisab is reached, rather than assessing each category in isolation. If the combined total reaches nisab and is held for a lunar year, zakat is due on the combined zakatable total.',
      },
    ],
    faq: [
      {
        question: 'Why does the cash nisab keep changing?',
        answer:
          'Because it\'s derived from the value of gold or silver, and those prices fluctuate with the market. The nisab in grams of gold/silver is fixed by the Sunnah, but its value in your local currency has to be recalculated against current prices each time you assess your zakat.',
      },
      {
        question: 'Should I use gold nisab or silver nisab?',
        answer:
          'Scholars differ. Silver\'s nisab is significantly lower in value than gold\'s, meaning using silver makes more people liable for zakat sooner — many scholars view this as the more cautious approach, benefiting the poor more broadly. Others hold gold\'s nisab as the standard reference. This is worth confirming with whoever you follow for religious guidance.',
      },
    ],
  },

  zakatable_wealth: {
    title: 'What Wealth Is Zakatable',
    arabic_title: 'الأَمْوَالُ الزَّكَوِيَّة',
    quick_fact: 'Growing wealth, not everything you own',
    definition:
      'Not everything a person owns is subject to zakat — only wealth that is considered "growing" or held for growth: cash, precious metals, trade goods, investments, and specific categories like livestock and produce. Personal-use items — the home you live in, your car, your furniture, your clothing, tools of your trade — are excluded entirely, regardless of their value.',
    scope:
      'This topic covers the major categories relevant to most people today: cash and bank savings (fully zakatable), gold and silver (with a genuine scholarly difference on jewelry worn for personal use — some hold it exempt as a personal item, others hold all gold and silver zakatable regardless of use), shares and stock investments (zakatable based on either the underlying company assets or market value, depending on whether shares are held for trading or long-term investment — a nuanced area), cryptocurrency (treated by most contemporary scholars as zakatable wealth similar to cash or trade goods, given it functions as a store of value and medium of exchange, though this is a genuinely new area still being actively discussed), rental property (the property itself is not zakatable, but the rental income received is, once it reaches nisab combined with other cash holdings), and debts (money owed to you that you expect to be repaid is generally zakatable; money you owe others can often be deducted from your zakatable assets before calculating what you owe).',
    rulings:
      'The general fiqh principle is that zakat applies to wealth that grows or is capable of growing — either through trade, investment, breeding (in the case of livestock), or agriculture. Wealth held purely for personal consumption or use is excluded. Business inventory is valued at its current market/selling value, not its original purchase cost. For jewelry specifically, the position that all gold and silver is zakatable regardless of personal use is held by a significant number of scholars and is often considered the more cautious position to follow, though the view that jewelry in regular personal use is exempt is also a recognized, followed position — this is genuinely one of the most commonly asked and most debated modern questions in zakat, and following a specific, considered position (rather than avoiding the question) is encouraged.',
    cases: [
      {
        title: 'Gold jewelry worn regularly',
        scenario:
          'A woman owns gold jewelry worth well above nisab that she wears regularly, not as an investment or for trade.',
        ruling:
          'This is a genuine point of scholarly difference. Some hold this jewelry exempt from zakat since it is for personal use, not growth or trade. Others hold all gold and silver zakatable regardless of use, based on general hadith about zakat on gold and silver without exception. Following either considered position is valid; consistently applying whichever position you follow is what matters most.',
      },
      {
        title: 'Cryptocurrency held long-term',
        scenario:
          'A person holds cryptocurrency they intend to keep for several years, similar to a long-term investment rather than active trading.',
        ruling:
          'Most contemporary scholars treat cryptocurrency as zakatable, similar to cash or a tradeable asset, given it functions as a store of value even if not officially recognized as currency everywhere. Its market value at the time zakat is calculated (not its purchase price) is what\'s used for the 2.5% calculation, once combined with other zakatable wealth reaches nisab and has been held a lunar year.',
      },
      {
        title: 'Money owed to you that you\'re unsure will be repaid',
        scenario:
          'A person lent money to a friend two years ago and is uncertain whether it will ever be repaid.',
        ruling:
          'Scholars generally distinguish between a "strong" debt (owed by someone reliable, likely to be repaid) — zakatable, either annually or once received — and a "weak" or doubtful debt (owed by someone unable or unlikely to repay) — many scholars hold zakat is only due on this once it\'s actually received, not while it remains outstanding and doubtful.',
      },
    ],
    faq: [
      {
        question: 'Do I pay zakat on the house I live in?',
        answer:
          'No. Your primary residence is a personal-use asset, entirely excluded from zakat, regardless of its value.',
      },
      {
        question: 'What about a property I rent out to tenants?',
        answer:
          'The property itself is not zakatable (it\'s a productive asset generating income, not wealth held for growth in itself), but the rental income you collect is zakatable once it, combined with your other cash holdings, reaches nisab and is held for a lunar year.',
      },
      {
        question: 'Do I pay zakat on my retirement/pension savings?',
        answer:
          'This depends heavily on the structure of the scheme — whether you have present access to the funds affects the ruling significantly. Funds you can freely access are generally zakatable; funds locked away with no access until a future date are a more debated area. This is worth asking a knowledgeable person about your specific scheme.',
      },
    ],
  },

  recipients: {
    title: 'Who Receives Zakat',
    arabic_title: 'مَصَارِفُ الزَّكَاة',
    quick_fact: 'Eight categories, named directly in the Qur\'an',
    definition:
      'Zakat is not given to whomever a person wishes — Allah names exactly eight categories of recipients directly in the Qur\'an (Surah At-Tawbah, 9:60), leaving no room for a ninth category to be added by personal preference. This list reflects a deliberate balance of who benefits from the Muslim community\'s collective wealth.',
    scope:
      'The eight categories are: (1) the poor (al-fuqara) — those with little to no means; (2) the needy (al-masakin) — those in hardship, distinguished by some scholars as being in a slightly less severe state than the poor, though the two categories overlap significantly in practice; (3) zakat administrators (al-amilina alayha) — those appointed to collect and distribute zakat, paid from zakat funds for that work; (4) those whose hearts are to be reconciled (al-mu\'allafati qulubuhum) — including new Muslims who may benefit from support during a vulnerable transition, or those whose goodwill toward Islam is being encouraged; (5) freeing captives (fir-riqab) — historically slaves seeking to purchase their freedom, and in a modern context sometimes extended by some scholars to freeing those wrongfully imprisoned or held captive; (6) those in debt (al-gharimin) — people burdened by debt they cannot repay from their own means, particularly debt taken on for a legitimate need; (7) in the cause of Allah (fi sabilillah) — often understood as supporting those striving in Allah\'s cause, with some scholars extending this in modern times to include support for Islamic education, da\'wah efforts, and similar causes, though this extension is debated; (8) the stranded traveler (ibn as-sabil) — someone who has means at home but is cut off from it while traveling, needing help to complete their journey or return home.',
    rulings:
      'Zakat must go to one or more of these eight categories — it cannot be redirected to a cause outside this list, however worthy that cause might seem, since the categories were fixed directly by Allah rather than left to human discretion. A person is not obligated to distribute their zakat across all eight categories — giving the full amount to recipients within just one or two categories is valid. Zakat generally cannot be given to one\'s own direct dependents (spouse, children, parents one is already obligated to support) since that support is already a separate, existing obligation — but it can typically be given to other relatives (siblings, cousins, extended family) who qualify under one of the eight categories, and doing so is often encouraged since it combines the reward of zakat with maintaining family ties.',
    cases: [
      {
        title: 'Giving zakat to a poor relative',
        scenario:
          'A woman wants to give her zakat to her brother, who is going through genuine financial hardship.',
        ruling:
          'This is generally permitted and often encouraged, as long as the brother is not someone she is already directly, independently obligated to support (like a spouse or dependent child). Giving zakat to qualifying relatives outside one\'s direct dependents combines fulfilling the obligation with strengthening family ties, which is seen as a double benefit.',
      },
      {
        title: 'Using zakat to fund a mosque building project',
        scenario:
          'A community wants to use collected zakat funds to help construct a new mosque.',
        ruling:
          'This is a genuinely debated question. The majority view holds that zakat is restricted to the eight named categories and construction of a mosque doesn\'t clearly fall within any of them (it\'s not direct support to a person in need), so other funds — waqf, general donations, sadaqah — should be used for such projects instead. Some scholars extend "in the cause of Allah" to include this; it\'s worth knowing this is a minority, debated position rather than settled consensus.',
      },
    ],
    faq: [
      {
        question: 'Can I give my entire zakat to just one person?',
        answer:
          'Yes — there\'s no requirement to spread zakat across all eight categories or across multiple recipients. Giving the full amount to one qualifying individual or organization is valid.',
      },
      {
        question: 'Can I give zakat to a non-Muslim?',
        answer:
          'The majority view restricts zakat specifically to Muslims within the eight categories, with the exception of "those whose hearts are to be reconciled," which can include non-Muslims in specific circumstances. General charity (sadaqah) to non-Muslims in need remains encouraged and unrestricted — it\'s specifically the zakat obligation that has this restriction.',
      },
    ],
  },

  zakat_al_fitr: {
    title: 'Zakat al-Fitr',
    arabic_title: 'زَكَاةُ الفِطْر',
    quick_fact: 'Due before Eid prayer — not the same as wealth zakat',
    definition:
      'Zakat al-Fitr is a separate, distinct obligation from the wealth-based zakat covered elsewhere in this section. It is a fixed amount of food (or its cash equivalent, depending on scholarly view) given at the end of Ramadan, before the Eid al-Fitr prayer, intended to purify the fasting person from any shortcomings during their fast and to ensure the poor can also enjoy the day of Eid.',
    scope:
      'Zakat al-Fitr is owed by every Muslim who has more than what\'s needed for their own and their dependents\' basic needs on the day and night of Eid — this is a much lower bar than the nisab required for wealth zakat, meaning far more people are obligated to pay it than are obligated to pay wealth zakat. A head of household typically pays on behalf of themselves and every dependent (spouse, children, and others they financially support).',
    rulings:
      'The traditional amount is one sa\' (roughly 2.5–3 kg, though exact conversions vary by scholarly calculation) of a staple food common to the region — historically dates, barley, or wheat, and in many places today rice or another local staple. A significant number of contemporary scholars, particularly in the Hanafi tradition, permit paying the cash equivalent instead of physical food, considering it often more practical and more directly beneficial to the recipient; other scholars hold that the physical food itself should be given, following the literal practice described in the hadith. Zakat al-Fitr must be paid before the Eid prayer — paying it after the prayer, without a valid excuse, downgrades it from Zakat al-Fitr to ordinary charity in the view of many scholars, since its specific purpose (ensuring the poor have what they need on the day of Eid) is tied to that timing. It is permissible, and common practice, to pay it a day or two before Eid to allow time for distribution.',
    cases: [
      {
        title: 'A family with several children',
        scenario:
          'A father has a wife and four children, all financially dependent on him.',
        ruling:
          'He is responsible for paying Zakat al-Fitr on behalf of himself and each of his five dependents — six portions total, whether given as food or its cash equivalent, according to the position he follows.',
      },
      {
        title: 'Paying Zakat al-Fitr after Eid prayer',
        scenario:
          'Someone forgets and only remembers to pay their Zakat al-Fitr the afternoon after the Eid prayer has already taken place.',
        ruling:
          'According to the majority view, this is still obligatory to pay — it doesn\'t simply disappear — but it is now counted as general charity (sadaqah) rather than Zakat al-Fitr specifically, since the window tied to its particular purpose has passed. It should still be paid as soon as possible, alongside sincere intention to plan earlier the following year.',
      },
    ],
    faq: [
      {
        question: 'Is Zakat al-Fitr the same as regular zakat?',
        answer:
          'No — they are entirely separate obligations. Wealth zakat (2.5% on qualifying wealth above nisab, held a full lunar year) is a completely different obligation from Zakat al-Fitr (a small fixed amount per person, tied specifically to the end of Ramadan, with a much lower threshold for who must pay it).',
      },
      {
        question: 'Can I pay Zakat al-Fitr in cash instead of food?',
        answer:
          'This is a genuine scholarly difference. Many contemporary scholars, particularly following the Hanafi position, permit cash as often more practical and beneficial. Others hold that the physical food staple should be given, following the literal wording of the hadith describing the practice. Either position is followed by different communities — worth confirming which your local scholar or community follows.',
      },
    ],
  },

  common_questions: {
    title: 'Common Mistakes & Modern Questions',
    arabic_title: 'أَخْطَاءٌ شَائِعَة وَمَسَائِلُ مُعَاصِرَة',
    quick_fact: 'Where most of the real confusion actually lives',
    definition:
      'Zakat calculation raises genuinely practical questions that don\'t always have a single settled answer, especially as modern financial life (salaries, investment accounts, digital assets) looks quite different from the classical examples used to teach zakat centuries ago. This topic gathers the questions that come up most often, addressed directly rather than glossed over.',
    scope:
      'This covers salary and income timing, advance payment of zakat, wealth that fluctuates throughout the year, business partnerships, zakat on money saved specifically for an upcoming expense (like Hajj or a wedding), and a few other frequently confused areas.',
    rulings:
      'A recurring theme across these modern questions: zakat is calculated on wealth held and accumulated, not on income as it\'s earned. A salary is not itself directly zakatable the moment it\'s received — what matters is what remains of it, combined with other savings, once a full lunar year has passed and that combined total is checked against nisab. This single point resolves a large share of the confusion people have about "do I pay zakat on my paycheck."',
    cases: [
      {
        title: 'Zakat on a salary',
        scenario:
          'Someone wonders whether they owe zakat every time they receive their monthly salary.',
        ruling:
          'No — zakat isn\'t owed on income the moment it\'s earned. What matters is the wealth that remains and accumulates over a lunar year. Many people find it simplest to pick one fixed date each year (often in Ramadan, for the spiritual significance) and calculate zakat on whatever savings and zakatable wealth they hold on that date, rather than trying to track a separate year-long clock for each individual deposit.',
      },
      {
        title: 'Paying zakat in advance',
        scenario:
          'A person wants to pay their zakat early, before their lunar year is technically complete, perhaps to give during Ramadan for the extra reward.',
        ruling:
          'This is permitted by the majority of scholars — zakat can be paid in advance of when it\'s technically due, similar to paying a debt before its due date. If, by the time the year actually completes, the calculated amount owed turns out to be different from what was paid in advance, the difference is adjusted (either topped up or, in some views, counted toward the following year).',
      },
      {
        title: 'Money saved specifically for Hajj or a wedding',
        scenario:
          'A person has been saving money for several years specifically earmarked for performing Hajj, and wonders if this savings is exempt since it\'s "already spoken for."',
        ruling:
          'The majority view holds that this savings remains fully zakatable as long as it is still in the person\'s possession and reaches nisab, regardless of what it\'s intended for — intending to spend money in the future doesn\'t remove the zakat obligation on wealth currently held. Only once the money is actually spent does it leave the zakat calculation.',
      },
      {
        title: 'Business partnership zakat',
        scenario:
          'Two people jointly own a business and aren\'t sure whether zakat is calculated on the business as a whole or on each partner\'s individual share.',
        ruling:
          'Zakat is calculated proportionally based on each partner\'s ownership share of the business\'s zakatable assets — each partner is individually responsible for the zakat on their own portion, though in practice, many partnerships calculate the total zakat owed by the business and divide payment according to ownership percentage for simplicity.',
      },
    ],
    faq: [
      {
        question: 'Do I subtract my monthly bills and expenses before calculating zakat?',
        answer:
          'No — zakat is calculated on wealth held at the point of assessment, not on income minus expenses. Ongoing living expenses aren\'t deducted from the calculation; only genuine debts owed by you (not routine monthly costs) are generally deductible, according to many scholars.',
      },
      {
        question: 'What if I genuinely can\'t afford to pay all the zakat I calculate I owe?',
        answer:
          'The obligation doesn\'t disappear due to difficulty, but it also doesn\'t need to bankrupt you — pay what you\'re able to and continue paying the remainder as you\'re able, with the sincere intention to fulfill the full amount, rather than avoiding the calculation altogether out of worry.',
      },
      {
        question: 'Is there one central place I must give my zakat, or can I give it directly to people I know?',
        answer:
          'Zakat can be given directly to qualifying individuals you know personally, or through an organization/mosque that distributes it on your behalf — both are valid, and personal knowledge of genuine need in your own community is often considered a real strength of giving directly.',
      },
    ],
  },
}