// src/data/womensFiqh.js
//
// Static content for the Women's Fiqh feature. Deliberately NOT
// admin-managed or AI-generated as a live feature. This content
// directly governs worship validity (prayer, fasting, tawaf), so it
// ships as reviewed, versioned code rather than something editable
// at runtime. Any change to this file should go through the same
// scholar review as the rest of Sual's fiqh content, via normal PR
// review, not a publish toggle.
//
// max_duration_days feeds the tracker's ruling logic directly (see
// WomensFiqh.jsx). Treat it as load-bearing, not decorative.
//
// Positions given follow the Maliki madhhab by default, consistent
// with the rest of Sual's fiqh content. Where another madhhab is
// widely known to differ, it is noted briefly for context rather
// than argued or adopted. Sual's ruling remains the Maliki one
// unless a user's own local scholar tells them otherwise.
//
// ============================================================
// FOURTH EXPANSION PASS, FOR SCHOLAR REVIEW BEFORE PUBLICATION
// ============================================================
//
// This file has now had four expansion passes. Passes one through
// three added real depth, and this fourth pass adds still more
// case coverage, longer definitions, and additional FAQ entries, at
// the founder's explicit direction and with a scholar review of the
// whole file planned as the next step before anything here is shown
// to users as final. That plan is the reason this pass was done at
// all. Without a scholar review actually scheduled, the better move
// would have been to stop expanding and hand specific gaps to a
// scholar directly, since this remains AI-drafted, unsupervised
// prose reasoning about a fiqh chapter with genuine, live khilaf
// (iddah/quroo', timing questions near the maximum durations,
// cesarean-nifas, mutahayyirah, the menopausal transition), the
// kind of material where a wrong confident sentence is worse than a
// missing one, because a woman may act on it directly: skip or
// perform a prayer, fast or not fast, delay tawaf, resume marital
// relations.
//
// IMPORTANT FOR THE REVIEWER: this pass does NOT add specific
// citations (hadith collection and number, or page/chapter numbers
// in Mukhtasar Khalil, al-Risala, or their shuruh). Those citations
// were not fabricated, on purpose, because verifying an exact
// citation against the physical texts is not something this pass
// can do reliably, and an invented citation is worse than an absent
// one in a domain like this. The specific points that will need a
// citation sourced and added during scholar review are already known
// and are being tracked separately, not marked inline in this file.
//
// Depth in this pass, as in prior passes, has been concentrated in
// places reasonably well attested across standard Maliki manuals
// and their common shuruh, and cross-madhhab context is kept
// clearly labeled as context, not adopted ruling. Nothing below
// should be read as more reliable than a careful synthesis that
// still needs a Maliki-trained scholar's line-by-line sign-off,
// including the new case studies and FAQ entries added in this
// pass, which have not been checked any more thoroughly than the
// material from earlier passes.
//
// STATUS: draft, pending scholar sign-off before this is presented
// to users as final. Do NOT treat figures, rulings, or new cases
// below as confirmed until that review is complete.

export const WOMENS_FIQH_GLOSSARY = [
  {
    term: 'Hayd',
    arabic: 'حَيْض',
    definition:
      'Ordinary menstruation: the natural, recurring blood that flows from a healthy woman\'s womb, not caused by illness, injury, or childbirth, and treated in the Shari\'ah as a distinct legal state with its own rulings around prayer, fasting, and marital relations. See the hayd entry for full detail, including duration, signs, and the classification categories used to work out ambiguous cases.',
  },
  {
    term: 'Nifas',
    arabic: 'نِفَاس',
    definition:
      'Post-childbirth bleeding, understood classically as blood that had been held back during pregnancy and is released around delivery. It carries the same broad category of rulings as hayd (suspension of prayer, deferral of fasting) but is a one-off event tied to a specific birth rather than a recurring monthly cycle. See the nifas entry for full detail.',
  },
  {
    term: 'Istihadah',
    arabic: 'اسْتِحَاضَة',
    definition:
      'Non-menstrual, ongoing or abnormal bleeding that does not fit the pattern of hayd or nifas, and that is treated for worship purposes as a state of ritual purity rather than impurity, meaning a woman experiencing it continues to pray and fast, typically renewing wudu before each obligatory prayer. See the istihadah entry for full detail, including its classification subtypes.',
  },
  {
    term: 'Tuhr',
    arabic: 'طُهْر',
    definition:
      'A state or period of ritual purity, meaning free of hayd or nifas bleeding, during which the full range of normal worship (prayer, fasting, tawaf, marital relations) is unrestricted by these particular rulings.',
  },
  {
    term: 'Aadah',
    arabic: 'عَادَة',
    definition:
      'A woman\'s established, recurring pattern for her own hayd: its typical duration, its typical timing within her cycle, or both, built up from observation of her own past cycles over time and used as the first reference point when classifying new bleeding.',
  },
  {
    term: 'Tamyeez',
    arabic: 'تَمْيِيز',
    definition:
      'Distinguishing hayd blood from istihadah blood by the blood\'s own physical characteristics (color, thickness, odor) rather than by reference to a known habit, used especially when a woman does not yet have, or has lost, a reliable established pattern.',
  },
  {
    term: 'Mu\'tadah',
    arabic: 'مُعْتَادَة',
    definition:
      'A woman with a known, established hayd pattern, who is referred to her own habit first when classifying ambiguous bleeding, rather than to tamyeez or to a default maximum duration.',
  },
  {
    term: 'Mumayyizah',
    arabic: 'مُمَيِّزَة',
    definition:
      'A woman without a settled habit, whether because her cycle is naturally irregular or because she has not yet built up enough history, who can nonetheless reliably distinguish hayd-type blood from istihadah-type blood by its physical characteristics.',
  },
  {
    term: 'Mutahayyirah',
    arabic: 'مُتَحَيِّرَة',
    definition:
      'A woman who has lost track of her own habit and has no reliable tamyeez either, an advanced and individualized case discussed at length in the classical books and covered here under istihadah\'s classification_subtypes, generally requiring a scholar\'s direct involvement rather than self-diagnosis.',
  },
  {
    term: 'Jufoof',
    arabic: 'جُفُوف',
    definition:
      'Complete dryness, one of the two recognized signs (alongside qassah bayda) that hayd or nifas has ended, typically confirmed with a piece of cloth or cotton (kursuf) that shows no staining or discharge of any kind when checked.',
  },
  {
    term: 'Qassah bayda',
    arabic: 'القَصَّة البَيْضَاء',
    definition:
      'A white, non-staining discharge some women experience at the end of hayd or nifas, confirming purity even before complete dryness might otherwise be reached, and generally treated as the clearer of the two recognized end signs where it is present.',
  },
  {
    term: 'Kursuf',
    arabic: 'كُرْسُف',
    definition:
      'A piece of cotton or similar absorbent cloth used, historically and still practically today, to check for jufoof or qassah bayda at the point a woman suspects her hayd or nifas may have ended.',
  },
  {
    term: 'Ghusl',
    arabic: 'غُسْل',
    definition:
      'The full ritual bath required to lift the state of hayd, nifas, or janabah before prayer, fasting-adjacent worship, and other purity-conditioned acts resume, performed with a specific intention appropriate to whichever state is being lifted.',
  },
  {
    term: 'Iddah',
    arabic: 'عِدَّة',
    definition:
      'The waiting period a divorced or widowed woman observes before remarrying. For a still-menstruating divorcee this is counted in menstrual cycles (quroo\'), while for a pregnant woman it is tied to the completion of pregnancy, and for a woman past menstruation it is counted in months.',
  },
  {
    term: 'Quroo\'',
    arabic: 'قُرُوء',
    definition:
      'The units a menstruating woman\'s iddah is counted in, a famous point of classical juristic dispute over whether the term refers to the bleeding (hayd) itself or to the period of purity (tuhr) between two instances of bleeding.',
  },
  {
    term: 'Sinn al-ya\'s',
    arabic: 'سِنّ اليَأْس',
    definition:
      'The age of despair of further menstruation, the classical term for the menopausal transition, discussed in the fiqh books as its own area of particular difficulty because a long-reliable habit may stop being a reliable guide during this window.',
  },
];

export const WOMENS_FIQH_CONTENT = {
  hayd: {
    title: 'Hayd',
    arabic_title: 'الحَيْض',
    quick_fact: 'Up to 15 days, Maliki view',
    max_duration_days: 15,
    definition:
      'Hayd is the natural blood that flows from a healthy woman\'s womb at intervals, not caused by illness, injury, or childbirth. It is a normal part of a woman\'s physical constitution and is treated in the Shari\'ah as a state with its own specific rulings, not as an illness or a deficiency. Classical texts describe it as blood that is "jibilliyyah", constitutional, meaning part of how a woman is naturally made, and this framing matters because it is part of why the rulings around it are presented as accommodations built into worship rather than as an exception grudgingly granted. The Maliki jurists generally locate the ruling\'s core purpose (hikmah) in removing hardship: five daily prayers plus fasting would be an extraordinary, recurring burden to fulfil and then make up every single month across a woman\'s entire reproductive life, so the Shari\'ah instead suspends the obligation of prayer itself during hayd, with no makeup required afterward, while only deferring, not waiving, the obligation of fasting, since fasting recurs only once a year and a bounded annual makeup is a manageable burden in a way that a recurring monthly makeup of prayer would not be.',
    duration:
      'The Maliki madhhab does not set a fixed minimum duration for hayd. Even a brief flow of blood, however short (in principle a single moment of true hayd-type blood, though in practice this is rare and hard for a woman to confidently identify as such in isolation), is treated as hayd if it has the characteristics of menstrual blood. This "no minimum" position is itself a distinguishing feature of the Maliki school. The Shafi\'i and Hanbali schools set a minimum of roughly one day and night, and the Hanafi school sets a minimum of three days. A woman who has grown up being told that a period has to be at least three days, often from a Hanafi-influenced environment or community, may be genuinely surprised that the Maliki position does not require this, and this difference is worth naming explicitly in the product rather than leaving her to reconcile two different things she has heard on her own. The maximum is generally held to be 15 days, with blood continuing beyond that examined further under Istihadah. A woman\'s own established pattern, her aadah, if she has one, is also taken into account, and in day-to-day practice does much of the real work, since most women are not reasoning from first principles each cycle, they are comparing this cycle to their own known pattern built up over years. Some Maliki texts note a typical range of one to fifteen days as most common in practice, without this changing the underlying legal rule that there is no fixed minimum.',
    signs:
      'Hayd blood is typically dark red to black, thick, and has a distinct odor, as opposed to the thin, pale blood sometimes seen in istihadah. Purity is confirmed either by al-qassah al-bayda (a white, non-staining discharge some women experience at the end of their cycle) or, where that is not present, which is common and is itself a normal variation rather than a sign anything is wrong, by complete dryness, jufoof: a piece of cotton or similar material, kursuf, inserted and checked shows no staining at all, not even a yellow or cloudy discharge. Scholars differ on how strictly a faint yellow or cloudy tinge is treated at the tail end of a period. The more cautious position treats it as still part of hayd unless clear dryness is reached, since a woman is asked to wait for a clear sign rather than assume purity from an ambiguous one. This connects to a well-known report from the Companion women who would send pieces of cloth with cotton to Aisha, may Allah be pleased with her, to ask about the yellowish discharge at the end of their cycles, and she would tell them not to be hasty until they saw the white discharge.',
    classification_categories:
      'Maliki fiqh generally sorts women into a few practical categories for working out hayd rulings in ambiguous situations. The mu\'tadah is a woman with an established, known pattern, referred to her own habit first. The mumayyizah is a woman without a settled pattern yet, or whose bleeding is irregular, but who can reliably distinguish stronger hayd-type blood from weaker blood by look and feel, referred instead to tamyeez, the characteristics of the blood itself. A woman who is neither falls back on the default maximum duration as a cautious estimate until a pattern or clear distinguishing signs emerge. Most women, most of the time, are simply mu\'tadah, and this category distinction rarely needs to be reasoned through consciously; it mostly matters in the harder, ambiguous cases covered below. A secondary distinction some texts add is that a mu\'tadah\'s habit can itself be in duration only, in timing only, or in both. A woman might reliably start on roughly the same day of her cycle, her timing, but vary in how many days it lasts, her duration, and scholars differ slightly on which piece of the habit takes priority when only one of the two is consistent.',
    related_rulings:
      'A few adjoining rulings often come up alongside hayd itself and are worth knowing even though they are not, strictly, part of what counts as hayd. Talaq and divorce: a husband is discouraged, in the stronger view the divorce itself is valid but sinful or disliked, talaq al-bid\'ah, from pronouncing divorce while his wife is in hayd, one of the reasons being that hayd cannot count toward her iddah, which would unfairly lengthen the process for her. Iddah: for a divorced woman whose iddah is counted in menstrual cycles rather than by a fixed number of months, each hayd she experiences marks the end of one of the three quroo\' her iddah requires. The exact technical meaning of quroo\', whether it refers to the period of bleeding or the period of purity following it, is itself a famous point of classical juristic difference, including within Maliki secondary opinions, and is worth flagging rather than resolving with false confidence here. Ghusl mechanics: the ghusl performed after hayd is the same general ghusl as janabah in its steps, but performed with the specific intention of lifting hayd. Some traditions additionally mention using something scented, like a piece of musk-scented cotton, to cleanse the area as a completion of purification, presented as recommended, mustahabb, rather than a condition for validity. I\'tikaf: a woman observing i\'tikaf, ritual seclusion in the mosque, most commonly in the last ten nights of Ramadan, whose hayd begins must leave the mosque immediately, since the mosque-presence i\'tikaf requires is not compatible with hayd. Whether and how she resumes or completes the i\'tikaf afterward is a point scholars discuss in more detail and is worth asking about directly given how meaningful the last ten nights are to many women\'s Ramadan. Hajj and Umrah: a woman in ihram whose hayd begins continues with all the rites of Hajj except tawaf, circling the Ka\'bah, which she performs once pure. She is not required to delay entering ihram or cancel her Hajj because of hayd, and, a specific and often relieving detail, a menstruating woman is generally exempted from tawaf al-wada\', the parting or farewell tawaf performed just before leaving Makkah, unlike tawaf al-ifadah, the core tawaf of Hajj itself, which cannot be skipped and must be delayed until she is pure.',
    cases: [
      {
        title: 'Bleeding stops, then resumes within a few days',
        scenario:
          'A woman\'s bleeding stops on day 4, she thinks she is pure, but bleeding resumes on day 6, still within the normal range of her cycle.',
        ruling:
          'If the gap between the two episodes is short and both fall within the maximum duration of hayd, the whole period, including the gap, is generally treated as one continuous hayd. She does not resume prayer during the gap unless clear purity, qassah bayda or jufoof, was confirmed. This is sometimes called a tuhr mutakhallil, an interrupting purity, and Maliki scholars differ on exactly how short a gap can be while still being absorbed into one continuous hayd versus being treated as a genuine break. The safer default for someone without a known pattern of interruption is to treat any bleeding-free gap that isn\'t confirmed by clear dryness as still ambiguous, not automatically as purity.',
      },
      {
        title: 'First-time bleeder, unsure what to expect',
        scenario:
          'A girl experiences her first period and does not yet know her pattern or how long it typically lasts.',
        ruling:
          'She treats the bleeding as hayd from when it starts. If it continues past the maximum, 15 days, from that point she is treated as experiencing istihadah, and begins praying and fasting again with wudu for each prayer. Her first one or two cycles are what establish her aadah going forward. There is no fixed number of cycles required before a pattern is considered established, but consistency across two or three cycles is generally treated as enough to rely on. This first cycle also marks the point at which the general obligations of adulthood, taklif, begin for her in fiqh terms if she has not already reached puberty by another sign, such as age or the appearance of pubic hair. This is worth mentioning gently, since it can be a lot to take in for a girl at the same time she is dealing with the physical experience itself.',
      },
      {
        title: 'Light spotting before the expected date',
        scenario:
          'A woman notices light brownish spotting a few days before her period is due.',
        ruling:
          'If the discharge has the characteristics of hayd blood, color and thickness, it is treated as the start of hayd. If it is unclear or very faint and doesn\'t match her usual pattern, she should continue praying until clearer signs appear, and this is a case worth confirming with a knowledgeable person if in doubt. A single day of ambiguous spotting followed by a return to nothing at all before the real period starts a few days later is sometimes treated as unrelated to hayd rather than its beginning, particularly if this doesn\'t match her established pattern, but this genuinely varies by scholar and by how consistently it recurs for her.',
      },
      {
        title: 'Hormonal contraception changes the usual pattern',
        scenario:
          'A woman starts a hormonal birth control method, pill, IUD, or implant, and her bleeding becomes lighter, shorter, or irregular compared to before.',
        ruling:
          'The underlying rules do not change because the cause of the bleeding is hormonal rather than natural in an unmedicated sense. Genuine menstrual-type bleeding while on contraception is still evaluated as hayd using the same signs, color and thickness, and the same maximum duration. What often changes in practice is her aadah: if the new pattern is consistent over a few cycles, that becomes her new reference point going forward rather than her pre-medication pattern. Breakthrough spotting that doesn\'t match hayd characteristics is more often treated as not hayd at all, closer to istihadah-type bleeding, a case where checking with a knowledgeable person about her specific method and pattern is genuinely useful rather than a formality.',
      },
      {
        title: 'Bleeding triggered by an IUD or other device, not a natural cycle',
        scenario:
          'A woman with a copper IUD notices more frequent or heavier bleeding that doesn\'t follow a clear monthly rhythm.',
        ruling:
          'The test is not whether the bleeding is caused by the device, it is whether the blood has the characteristics of hayd and fits a pattern consistent with hayd. If it does, it is treated as hayd, or, if excessively frequent or prolonged, potentially istihadah. Device-caused spotting that is clearly different in color and consistency from her known hayd, and that does not settle into a recognizable monthly pattern, leans toward being treated as istihadah-type bleeding rather than repeated hayd. A woman in this situation benefits from tracking her bleeding for a cycle or two so a scholar can help her classify it accurately rather than guessing month to month.',
      },
      {
        title: 'Delayed period due to travel, illness, or stress',
        scenario:
          'A woman\'s period is significantly delayed compared to her usual pattern because of travel, illness, or a stressful period in her life, and she is unsure whether spotting that eventually appears is the real period or something else.',
        ruling:
          'Delay itself does not change the classification once bleeding starts. She still applies the same signs, color and thickness, and, once a pattern re-establishes, her usual duration. In the interim, while nothing has appeared yet, she continues praying and fasting as normal. A delayed period is not treated as hayd in advance.',
      },
      {
        title: 'A woman forgets or loses track of her exact habit',
        scenario:
          'A woman who has always had a regular pattern realizes, when asked, that she can no longer say with confidence exactly how many days her hayd usually lasts or which day it usually starts.',
        ruling:
          'This is a real, named situation in the classical books. A woman whose memory of her habit has become unreliable is treated cautiously: she is generally directed toward the mumayyizah approach if she can distinguish reliably, and if not, toward the default maximum duration, until a fresh, clearly remembered pattern re-establishes itself over the next several cycles. This is not a sign of religious negligence on her part. Memory of exact cycle details is genuinely hard to keep precise without deliberate tracking, which is part of the practical value of keeping a record rather than relying on memory alone.',
      },
      {
        title: 'A prayer or fast performed just before hayd started, unknowingly',
        scenario:
          'A woman begins praying Dhuhr, or starts her fast at dawn, and hayd begins partway through, during the prayer, or during the day of fasting.',
        ruling:
          'If hayd begins during a prayer, the prayer is invalidated at that point, and there is no sin in this since it was outside her control. She simply stops. If hayd begins during a day of voluntary or obligatory fasting, the fast for that day is broken from the point bleeding starts, and if it was an obligatory fast that day is made up later, exactly as with any other day of hayd during the month. There is no additional penalty for having started the day fasting without knowing hayd would begin.',
      },
      {
        title: 'Hayd beginning while in i\'tikaf during the last ten nights of Ramadan',
        scenario:
          'A woman observing i\'tikaf in the mosque during the last ten nights notices her period has started.',
        ruling:
          'She leaves the mosque immediately once hayd is confirmed, since her continued physical presence in the mosque is no longer valid. This is not treated as abandoning i\'tikaf by choice or as a failure on her part, it is simply outside her control, similar to how illness or another genuine excuse is handled elsewhere in fiqh. Scholars differ on the details of resuming or making up the remaining days of i\'tikaf once she is pure again within the same Ramadan, and on whether time already spent counts toward a vow of i\'tikaf if she had made one. This is worth asking about directly, ideally before Ramadan begins if this is a known recurring concern for her, rather than working it out in the moment.',
      },
      {
        title: 'Hayd beginning during Hajj or Umrah, before tawaf al-ifadah',
        scenario:
          'A woman in ihram for Hajj finds that her period has started before she has performed tawaf al-ifadah, and her travel group is scheduled to leave soon.',
        ruling:
          'She continues with the rites of Hajj that do not require purity, standing at Arafah, spending the night at Muzdalifah, the stoning at Mina, and so on, as normal. Tawaf al-ifadah itself must wait until she is pure. It cannot be skipped or substituted, which is why this can create real scheduling pressure for group travel. Discussing timing and contingency options with her group leader or a scholar accompanying the group as early as possible, ideally before the trip if her period is expected to fall during the Hajj days, is genuinely practical advice here, not just a fiqh footnote. Tawaf al-wada\', farewell tawaf, by contrast, is generally waived for a menstruating woman, so hayd at the very end of the trip is far less disruptive than hayd occurring before tawaf al-ifadah.',
      },
      {
        title: 'Umrah booked with a short layover, hayd begins mid-trip with no time margin',
        scenario:
          'A woman traveling for a short Umrah trip, a few days rather than a full Hajj season, experiences hayd on day two of a four-day trip, with a return flight already booked and little flexibility to extend her stay.',
        ruling:
          'The same underlying rule applies as with Hajj: tawaf al-ifadah equivalent rites for Umrah, specifically the tawaf itself, cannot be performed while she is menstruating, and there is no shortcut around this. If her hayd is not expected to end before her flight, her realistic options generally discussed are staying in ihram and remaining in a state where she has not yet completed the Umrah, meaning she would need to return later to complete it, or, in some contemporary treatments, exploring whether a valid extension or rebooking is possible. This is a genuinely practical, high-stakes scheduling problem rather than a purely theoretical one, and travel groups and scholars who regularly accompany Umrah trips generally have a standard practical answer for it. A woman in this situation benefits far more from asking her group\'s accompanying scholar directly and as early as possible than from trying to resolve it from a general description, since the right next step depends on specifics like her exact flight flexibility and group arrangements.',
      },
    ],
    faq: [
      {
        question: 'Can I recite Qur\'an during hayd, and does it matter whether I am reciting from memory or from a physical mus-haf?',
        answer:
          'Scholars differ on this question, and the difference is genuinely significant rather than a minor technicality. Many Maliki scholars permit recitation from memory, without touching the physical mus-haf, during hayd, particularly for a student of knowledge or someone concerned about forgetting what she has memorized through a lapse in regular review. Touching and reading directly from the Arabic mus-haf is more commonly restricted during hayd. Some scholars extend permission to touching the mus-haf via a barrier, such as a cloth or glove, or through a phone or tablet screen, where the ruling of what counts as touching is understood differently than touching physical paper directly. This last point, about phone and tablet screens, is a genuinely contemporary question without a long classical history behind it, and different scholars and fatwa bodies have reached different conclusions, so it is worth asking a scholar about your specific situation if this comes up regularly, especially if you are a teacher or student who relies on daily recitation.',
      },
      {
        question: 'Do I make up prayers missed during hayd, the way I make up missed fasts?',
        answer:
          'No. Missed prayers during hayd are not made up, a specific mercy in the Shari\'ah, unlike missed fasts, which are made up after Ramadan. The classical reasoning given for this distinction is frequency and hardship: prayer recurs five times daily, and making up weeks of missed prayers every single month across a woman\'s reproductive life would be a severe, recurring burden, whereas missed fast days are a bounded, once-a-year makeup that most women can reasonably complete before the next Ramadan.',
      },
      {
        question: 'What if my period is unusually short or long compared to before, does that automatically mean something has gone wrong or that I should be worried?',
        answer:
          'Some natural variation is normal, and a single unusual cycle is not automatically a sign of a medical problem or an incorrect fiqh classification. If bleeding stays within the maximum duration recognized by your madhhab and has the usual characteristics, it is still hayd, even if shorter or longer than your typical cycle. A single unusual cycle does not overturn an established pattern. It takes a repeated change across a few cycles before most scholars would treat it as a new baseline, and, separately from the fiqh question, a persistent or significant change in your cycle over time is generally worth mentioning to a doctor as part of ordinary health monitoring, independent of anything to do with worship.',
      },
      {
        question: 'Does a small amount of daily discharge outside of my period count as hayd?',
        answer:
          'Generally no. Normal, non-menstrual vaginal discharge does not carry hayd rulings and does not stop prayer or fasting. It is treated more like ordinary minor discharge, similar in category to other minor bodily occurrences that do not rise to the level of requiring a break from worship. If you\'re unsure whether something is spotting or hayd versus ordinary discharge, the color and thickness test, tamyeez, described above is the usual starting point, and a scholar or knowledgeable person can help you apply it to your specific situation if it remains unclear after considering it yourself.',
      },
      {
        question: 'Can I take medication to delay my period, for example to fast all of Ramadan without interruption or to perform Hajj without the scheduling complications hayd can create?',
        answer:
          'Most contemporary Maliki-leaning scholars permit this in principle, provided it does not carry a real health risk. That medical risk assessment belongs to a doctor, not to fiqh, and should be made with a doctor\'s input before deciding to use such medication for religious scheduling reasons. If the medication doesn\'t fully stop bleeding and some spotting still occurs, that spotting is evaluated the same way as any other bleeding rather than being ignored just because medication was involved, meaning the same tamyeez and habit-based tools described throughout this section still apply to it.',
      },
      {
        question: 'I was taught a period has to be at least 3 days, is that wrong, and should I follow what Sual says instead of what I was taught?',
        answer:
          'It is a real, respected position, just not the Maliki one. The Hanafi school sets a minimum of roughly three days, which is likely where that expectation came from. Sual follows the Maliki view, which has no fixed minimum. Neither view is the correct one in an absolute sense, both are legitimate positions within recognized schools of Islamic law arrived at through careful scholarly reasoning. If you follow a Hanafi teacher for this chapter specifically, it is entirely reasonable to follow their guidance instead of Sual\'s default, and there is no need to see this as a contradiction that must be resolved in favor of one school over the other.',
      },
      {
        question: 'Does the color of the blood alone decide everything, or does timing and habit matter too?',
        answer:
          'Both matter, in a rough priority order. An established habit, aadah, is generally checked first. The blood\'s characteristics, tamyeez, come next. The default maximum duration is the fallback when neither is available. Most women never consciously walk through this order, it mainly matters when something doesn\'t fit the usual pattern, such as bleeding that continues longer than expected or that looks different from what she is used to.',
      },
      {
        question: 'If my period starts while I\'m fasting for Hajj or Umrah days or during i\'tikaf, have I done anything wrong, or does it affect the reward of the worship I was already engaged in?',
        answer:
          'No. Hayd beginning is outside a woman\'s control, and none of the rulings here treat it as a failure, an interruption caused by negligence, or something requiring extra expiation beyond the normal makeup of missed fasts. The adjustments described, leaving i\'tikaf, delaying tawaf al-ifadah, exist precisely because this is an expected, accounted-for part of worship logistics, not an exception being grudgingly made. A woman in this situation has not lost the reward of the worship she had genuinely intended and begun; the interruption itself is treated as excused.',
      },
      {
        question: 'Is there a difference between how the app tracks my cycle and the actual fiqh ruling, or is the tracker itself making the ruling for me?',
        answer:
          'The tracker is a tool to help you apply the ruling to your own recorded pattern, it is not itself a substitute for scholarly guidance in genuinely ambiguous or unusual situations. It uses the maximum duration and the general framework described in this section to estimate where you likely stand, but it cannot see or evaluate the actual characteristics of your bleeding the way tamyeez requires, and it cannot account for every edge case covered in the cases section above. If your situation is straightforward and matches your known habit, the tracker should line up with what you would work out yourself using this section. If your situation is unusual, irregular, or medically complicated, treat the tracker as a starting estimate and follow up with a knowledgeable person rather than relying on it as a final answer.',
      },
    ],
  },

  nifas: {
    title: 'Nifas',
    arabic_title: 'النِّفَاس',
    quick_fact: 'Up to 60 days, Maliki view',
    max_duration_days: 60,
    definition:
      'Nifas is the bleeding a woman experiences following childbirth, understood as blood that had been held back during pregnancy and is released around delivery. It carries the same category of rulings as hayd: prayer and fasting are suspended, resuming once the bleeding stops or the maximum duration is reached, whichever comes first. Nifas is tied to the birth itself, not to pregnancy in general. Bleeding or spotting during pregnancy before labor is a separate question, addressed in its own case below. Unlike hayd, nifas is a one-off event tied to a specific delivery rather than a recurring cycle, so there is no ongoing habit to refer to across a woman\'s life in the same continuous sense that hayd has, though, as noted below, her own history across multiple pregnancies can still be a useful reference point in ambiguous cases, particularly for a woman who has given birth several times and has noticed a consistent pattern of her own nifas being shorter than the full maximum.',
    duration:
      'There is no minimum. Nifas may last only a very short time, or not occur at all for some women, in which case she is simply treated as pure from the point of delivery once any immediately associated bleeding has stopped. The commonly cited maximum in the Maliki madhhab is 60 days, though it is worth knowing that this is a point of real difference across schools and even within Maliki secondary opinions. The Hanafi maximum is 40 days, the Shafi\'i and Hanbali schools generally hold 60 days as well, and some Maliki texts mention outlying secondary opinions closer to 40 or 70 days. A woman moving between communities that follow different local custom on this point may reasonably encounter different answers from different teachers, and this is not a sign that either is being careless, it reflects a genuine classical difference that has persisted across centuries of scholarship. If bleeding continues beyond 60 days, it is treated as istihadah from that point onward, and she resumes prayer and fasting.',
    signs:
      'Nifas blood generally resembles hayd blood in color and thickness, though in the days immediately after delivery it is commonly heavier and may include clots. This heaviness on its own is not a separate category, it is still nifas. Some women experience a brief pause in bleeding shortly after delivery before nifas properly begins. This is treated as part of the same nifas period rather than a separate purity, unless it is prolonged and clearly a full return to purity, in which case any later bleeding within the 60-day window would need to be evaluated on its own rather than assumed to be a continuation. Toward the end of nifas, bleeding commonly tapers into a lighter brownish discharge before stopping entirely. The same jufoof or qassah bayda tests used for hayd are used here to confirm the actual end point, rather than guessing from a calendar date alone, since two women can have very different actual nifas lengths even with similar deliveries.',
    related_rulings:
      'A few adjoining points are worth knowing. Postnatal fasting exemptions are broader than nifas itself. Even after nifas has ended, a woman who is breastfeeding or still recovering may separately be excused from fasting under the general allowances for illness or nursing, with fidyah discussed by some scholars as an additional or alternative obligation to the fast itself, particularly for the breastfeeding case, a genuinely debated area worth asking about directly given how much it affects a woman with several children close in age and how significant the cumulative fidyah or makeup obligation can become across multiple pregnancies. Iddah after divorce during or shortly after pregnancy is calculated differently from the menstrual-cycle-based iddah. A pregnant or recently delivered woman\'s iddah is generally tied to the completion of pregnancy, ending at delivery, rather than to menstrual cycles, which is a different and, in this respect, simpler calculation. The ghusl performed once nifas ends follows the same general steps as the ghusl for hayd and janabah, with the intention specified for nifas. The aqeeqah, the recommended sacrifice performed for a newborn, generally on the seventh day, and the naming of the child are separate matters entirely unaffected by nifas. A mother in nifas is not restricted from attending or being involved in either, since neither requires ritual purity of her.',
    cases: [
      {
        title: 'Bleeding stops within the first week',
        scenario:
          'A woman gives birth and her bleeding stops completely after 8 days.',
        ruling:
          'She performs ghusl once bleeding has clearly stopped and resumes prayer and fasting immediately. She does not need to wait for a fixed number of days, and there is no discouraged or invalid category for resuming too early once purity is genuinely confirmed through jufoof or qassah bayda.',
      },
      {
        title: 'Bleeding continues past 60 days',
        scenario:
          'A woman is still bleeding on day 65 after delivery.',
        ruling:
          'From day 61 onward, the bleeding is treated as istihadah rather than nifas. She performs ghusl, resumes prayer with wudu for each prayer, and resumes fasting. If she has previous nifas experiences with a consistent shorter duration, some scholars would refer her to that pattern rather than the full 60-day maximum, a more specialized question worth raising directly rather than assuming applies to her situation without confirmation.',
      },
      {
        title: 'Miscarriage',
        scenario:
          'A woman experiences a miscarriage at a stage where the fetus had already taken a recognizable human form.',
        ruling:
          'Bleeding following a miscarriage at this stage is generally treated as nifas. If the miscarriage occurs very early, before any recognizable form, scholars differ on how the bleeding is classified. Some treat it as nifas regardless, others as hayd or istihadah depending on its characteristics, a case worth asking a scholar about directly given how much it varies by specific circumstance, and also an emotionally difficult one. There is no need to resolve the fiqh question alone or immediately, and taking time to grieve before working through the details of worship resumption is not itself a religious failing.',
      },
      {
        title: 'Bleeding or spotting during pregnancy, before labor',
        scenario:
          'A woman experiences spotting or bleeding partway through her pregnancy, well before delivery.',
        ruling:
          'This is not nifas, and, per the majority Maliki position, most pregnant women do not experience hayd either, since ongoing pregnancy is generally understood to suspend the menstrual cycle. In practice this means bleeding during pregnancy is most often treated cautiously as istihadah-type bleeding not requiring a break from worship, though this is exactly the kind of situation that should be raised with both a doctor and a knowledgeable scholar rather than decided from general principles alone, since bleeding during pregnancy can also be a medically significant warning sign independent of anything to do with fiqh.',
      },
      {
        title: 'Cesarean delivery with minimal vaginal bleeding',
        scenario:
          'A woman delivers by cesarean section and experiences little or no vaginal bleeding afterward, though there may be normal post-surgical discharge.',
        ruling:
          'Nifas rulings are tied to the presence of nifas-type bleeding, not to the mode of delivery. If there is genuinely little to no bleeding, there may be little or no nifas period to observe in practical terms. This is a case with real difference of opinion in contemporary fatwas regarding cesarean specifically. It is reasonable to ask this question directly given how common cesarean delivery is.',
      },
      {
        title: 'Twins or a multiple birth, with bleeding after each delivery',
        scenario:
          'A woman delivers twins with some time between the first and second birth, and experiences bleeding associated with each.',
        ruling:
          'Nifas is generally counted from the final, completed delivery rather than restarted separately for each birth within the same overall delivery event. The bleeding across the whole process is treated as one nifas period, with the 60-day maximum counted from the point of full delivery. Worth confirming directly with a scholar familiar with contemporary obstetric detail rather than assuming, given how much less commonly this scenario is discussed in the classical texts relative to single births.',
      },
      {
        title: 'A stillbirth after full-term pregnancy',
        scenario:
          'A woman delivers a stillborn baby after carrying a full-term or near-full-term pregnancy.',
        ruling:
          'The bleeding following a stillbirth at this stage is treated as nifas in the same way as any other delivery, since nifas is tied to childbirth as a physical event, not to the outcome for the baby. This is an especially difficult circumstance emotionally, and while the fiqh classification itself is fairly settled, working through the practical side with someone trusted and gentle rather than purely through a reference text is worth encouraging here more than in most other cases in this section.',
      },
      {
        title: 'An extended hospital stay with medically induced bleeding management, such as medication given to control postpartum hemorrhage',
        scenario:
          'A woman experiences a postpartum hemorrhage and receives medical treatment, including medication intended to help her uterus contract and reduce bleeding, resulting in a bleeding pattern that is heavier or more irregular than a typical nifas, and that continues under close medical monitoring for an extended period.',
        ruling:
          'The underlying fiqh classification is not changed by the fact that the bleeding is being medically managed or that its pattern has been altered by treatment. It is still evaluated as nifas up to the 60-day maximum using the same general signs, and as istihadah beyond that point if bleeding continues. What changes practically is that a woman recovering from a serious complication like postpartum hemorrhage is very likely also covered by the general fasting exemptions for illness, separate from and in addition to nifas itself, and her recovery timeline should be guided primarily by her medical team. This is a case where the fiqh question is genuinely secondary to her physical recovery and safety, and a scholar asked about it would likely say the same, that her doctor\'s guidance on physical recovery should not be delayed or complicated by an attempt to resolve the fiqh question first.',
      },
      {
        title: 'A woman who does not know her exact delivery date or time, for example due to a home birth without medical documentation, and needs to count her 60 days from an uncertain starting point',
        scenario:
          'A woman gave birth at home without a clear, documented record of the exact date, and is now unsure exactly which day her nifas count should start from when trying to determine whether she has reached the 60-day maximum.',
        ruling:
          'The starting point for counting nifas is the actual moment of delivery, not a paperwork record of it, so a woman without documentation is not in a fundamentally different fiqh position than one with documentation, she simply has a harder practical task of recalling the date as best she can. She should use her best good-faith recollection, anchored to whatever memory markers she has, such as the day of the week, a nearby holiday, or another memorable event, and count from there. If she genuinely cannot narrow it down at all, erring toward an earlier estimated date, meaning treating herself as further along in the 60-day window rather than less far along, is generally the more cautious approach with respect to not missing obligatory prayers or fasts she should have resumed, though this is worth confirming with a scholar given how much it depends on her specific level of uncertainty.',
      },
    ],
    faq: [
      {
        question: 'Do I fast during nifas, or is it the same as hayd in this respect?',
        answer:
          'No, the same as hayd, fasting is not performed during nifas, and missed fasts are made up afterward, typically before the next Ramadan where reasonably possible. If breastfeeding or ongoing recovery makes fasting difficult even after nifas ends, that is a separate, additional allowance worth discussing with someone knowledgeable rather than something to work out alone, particularly because the fidyah versus makeup question for breastfeeding mothers is itself genuinely debated among scholars.',
      },
      {
        question: 'What if I don\'t bleed at all after delivery, does that mean something is medically wrong, or is it a normal fiqh scenario?',
        answer:
          'Some women experience little to no postpartum bleeding, and on its own this is not treated as a sign of a fiqh problem. If so, there is no nifas period to observe, and she resumes her normal worship as soon as she is otherwise able, allowing for ordinary post-birth recovery, which is a medical matter rather than a fiqh one. If a woman is concerned about the medical side of unusually light postpartum bleeding, that concern should be raised with her doctor, separately from the worship question.',
      },
      {
        question: 'Does having a shorter or longer nifas with a previous child affect how I should count this one?',
        answer:
          'Only loosely, and mainly in ambiguous edge cases near the 60-day maximum. Each nifas is fundamentally evaluated on its own bleeding and its own signs of purity rather than assumed in advance from a previous pregnancy\'s pattern. A previous pattern is a helpful reference point, not a rule that overrides what is actually happening this time, so a woman whose bleeding this time is genuinely different from last time should follow what she is actually experiencing now rather than her memory of before.',
      },
      {
        question: 'Can my spouse and I resume intercourse before 40 days if bleeding has clearly stopped, given how commonly a 40-day postpartum period is discussed culturally?',
        answer:
          'From a purely fiqh standpoint, yes, once nifas has clearly ended and ghusl has been performed, the prohibition tied to nifas is lifted, regardless of whether a culturally common 40-day postpartum period has passed. Physical recovery from childbirth is a separate, medical consideration, worth checking with a healthcare provider on timing independent of the fiqh question, since a fiqh permission to resume relations is not the same thing as a medical clearance to do so, and both should genuinely be considered together rather than treating the fiqh answer alone as sufficient.',
      },
      {
        question: 'Why is the Maliki nifas maximum, 60 days, so much longer than the hayd maximum, 15 days?',
        answer:
          'The underlying cause and typical volume of postpartum bleeding is simply different from a normal cycle, and the classical scholars set the maximum based on observed cases of genuinely prolonged postpartum bleeding rather than deriving it mechanically from the hayd figure. It is a maximum, not an expectation. The large majority of women reach dryness well before 60 days, often within one to two weeks, and a woman whose nifas is much shorter than 60 days should not feel that something is unusual or wrong about her own experience.',
      },
      {
        question: 'Does nifas affect my ability to attend my baby\'s aqeeqah or naming, or hold or care for my baby in general?',
        answer:
          'No, neither the aqeeqah nor the naming of the child requires ritual purity from the mother, so nifas does not restrict her attendance or involvement in either, and there is no restriction on holding, feeding, or caring for her baby while in nifas. It only affects her own prayer, fasting, tawaf, and intercourse, as with hayd, and does not create any barrier between mother and child.',
      },
      {
        question: 'If my nifas ends earlier than 40 or 60 days but I still have significant physical recovery ahead of me, does resuming prayer and fasting mean I also have to resume all my normal physical activity right away?',
        answer:
          'No, these are two separate questions and resolving the fiqh question does not resolve the medical one. Once nifas has ended by its actual signs, jufoof or qassah bayda, the specific worship obligations tied to nifas resume, meaning prayer and, once she is otherwise able, fasting. This does not mean she is medically required or expected to resume full physical activity, exercise, or her normal workload at the same moment. Physical recovery timelines are set by her body and her medical team, not by the fiqh ruling on nifas, and a new mother should feel free to continue resting and recovering physically even while resuming her prayers.',
      },
    ],
  },

  istihadah: {
    title: 'Istihadah',
    arabic_title: 'الاسْتِحَاضَة',
    quick_fact: 'Treated as pure, wudu per prayer',
    max_duration_days: null,
    definition:
      'Istihadah is bleeding that does not fit the pattern of hayd or nifas, either because it continues beyond the maximum duration of one of those, or because it does not match a woman\'s established habit or the recognized characteristics of menstrual blood. Classically it is understood as blood from a vein near the womb, sometimes described as "al-adhal" in older descriptions, rather than blood from the womb itself, which is part of why it is not given the same rulings as hayd even though, to the woman experiencing it, it can look and feel very similar and be just as disruptive to daily life. A woman experiencing istihadah is, for the purposes of worship, treated as pure, tahirah, not as menstruating, one of the more counterintuitive rulings in this chapter for many women encountering it for the first time, since it means continuing to pray and fast while still visibly bleeding, which can feel strange or even uncomfortable the first time a woman applies it to herself. The origin case most commonly cited in the classical books is the report of a female Companion who came to the Prophet, peace be upon him, describing continuous bleeding and was instructed to identify her hayd by her prior habit and then treat the rest as istihadah, praying and performing wudu for each prayer. This incident, narrated across a few slightly different versions regarding exactly who she was, is effectively the founding text for this entire section of fiqh.',
    duration:
      'Istihadah has no maximum duration of its own. It continues for as long as the underlying bleeding continues beyond what qualifies as hayd or nifas. There is no minimum either. A single day beyond the maximum of hayd or nifas is enough to reclassify the bleeding as istihadah from that point, and it can, in principle, continue for months or longer in cases of underlying medical conditions, which is exactly why this is also a case where a doctor\'s involvement matters alongside the fiqh, since prolonged abnormal bleeding is a health question first and a worship-logistics question second, and the two should be pursued together rather than treating the fiqh answer as a reason to delay medical attention.',
    signs:
      'Scholars use a few methods to help a woman identify whether she is experiencing hayd or nifas versus istihadah, applied in a rough order of priority: her established habit; tamyeez, distinguishing by color and consistency, genuine hayd blood is typically darker and thicker than istihadah blood, which tends to be thinner and lighter, closer to the color of blood from a minor wound; and, absent either of these, a default duration, the maximum of hayd or nifas as applicable, used as a cautious estimate. These three categories map onto the mu\'tadah, mumayyizah, and default cases described under Hayd above. Istihadah is really the fallback state that applies once none of the positive indicators for hayd or nifas are present, meaning it is in some sense a residual category defined by the absence of hayd or nifas characteristics rather than by a positive characteristic of its own, though the color and thickness description above does give it its own recognizable profile in practice for many women.',
    classification_subtypes:
      'It is worth knowing, mainly for cases that don\'t resolve cleanly, that classical Maliki fiqh discusses a further category sometimes called al-mutahayyirah, a woman who has lost track of her habit entirely and has no reliable tamyeez either, and needs a more involved individualized approach, sometimes combining calendar estimation with extra precautionary ghusl and wudu practice beyond the minimum otherwise required. A related, narrower case some texts distinguish is the woman whose habit is known but whose blood no longer shows any distinguishing tamyeez at all, constant, uniform bleeding with no change in color or thickness over an extended period. Here the known habit generally takes priority over an attempt at tamyeez that has nothing to distinguish, since tamyeez as a method depends on there being an actual difference to detect. Another edge worth naming: a woman approaching or entering the menopausal years commonly experiences increasingly irregular bleeding that is genuinely hard to classify, some of it real hayd on an increasingly unreliable pattern, some of it more likely istihadah, and the classical books discuss this transitional stage, sinn al-ya\'s, the age of despair of further menstruation, as its own area of difficulty, since a habit that has served reliably for twenty years can stop being a reliable guide in this window. These are genuinely advanced cases and are flagged here mainly so they are not confused with the far more common, simpler situations above. A woman who suspects she may be in one of them should work through it directly with a scholar rather than trying to self-diagnose from a general description.',
    related_rulings:
      'Because istihadah is a state of ritual purity rather than impurity, a few knock-on points follow. A woman in istihadah may lead other women in prayer, may enter the mosque freely, may perform tawaf, and, as noted below, may fast and be approached by her spouse according to the majority view. Practically, most scholars recommend she take reasonable precautionary steps, a pad or similar barrier, and in some descriptions tightening or binding the area to reduce leakage, not because these are conditions for her prayer to be valid, but because minimizing the impurity that reaches her body and clothing is good general practice around prayer, not anything specific to istihadah\'s validity.',
    rulings:
      'Once bleeding is classified as istihadah, a woman prays and fasts normally. Most scholars hold that she should perform wudu before each fard prayer, since istihadah is treated similarly to a minor, continuous impurity, rather than requiring ghusl before every prayer. The majority Maliki position does not require a fresh ghusl each time, only at the point of transition out of hayd or nifas into istihadah. She may fast, perform tawaf, and her spouse may have intercourse with her, according to the majority view, though some scholars encourage extra caution given the ongoing bleeding, particularly around intercourse, and this is a reasonable thing for a couple to discuss and decide on together rather than treating either position as obviously correct. A pad or similar barrier is used to prevent the bleeding from soiling clothing or the prayer space, and this does not affect the validity of her prayer. If blood still reaches clothing or the prayer area despite reasonable precautions, this is generally treated leniently rather than invalidating the prayer, since demanding a standard of cleanliness a woman cannot actually achieve would not be reasonable, and the Shari\'ah\'s general principle of not placing an unbearable burden on a person applies directly here.',
    cases: [
      {
        title: 'Bleeding continues past the maximum of hayd',
        scenario:
          'A woman\'s bleeding continues to day 20 of her cycle, past the 15-day Maliki maximum for hayd.',
        ruling:
          'From day 16 onward, she is in istihadah. She performs ghusl, then prays and fasts normally from that point, performing wudu before each prayer. Any fasts missed during the genuine hayd portion, up to day 15, are made up later. Fasts from day 16 onward are valid and do not need repeating.',
      },
      {
        title: 'Irregular bleeding with no clear pattern',
        scenario:
          'A woman experiences bleeding on and off across a month, with no clear regular cycle and blood that doesn\'t clearly match her past hayd in color or thickness.',
        ruling:
          'If she has an established habit from before, she follows that habit for what counts as hayd and treats the rest as istihadah. If she has no established habit and cannot distinguish by color or consistency, she follows the default maximum duration as hayd, and everything beyond that as istihadah, for that cycle, reassessing again each time bleeding restarts unless and until a new pattern becomes clear.',
      },
      {
        title: 'A first-time bleeder with continuous bleeding',
        scenario:
          'A young woman\'s first period does not stop and continues well past what would typically be expected.',
        ruling:
          'She treats the first 15 days as hayd, and anything beyond that as istihadah, until a clear personal pattern becomes established over subsequent cycles. Because this can be an unsettling first experience, it is worth a trusted adult or scholar walking her through it directly rather than leaving her to work it out from general descriptions alone, especially given how disorienting continuous bleeding can feel for a young woman with no prior experience to compare it against.',
      },
      {
        title: 'Spotting between periods that never reaches hayd characteristics',
        scenario:
          'A woman occasionally notices light, brownish spotting a few days after her period has fully ended and been confirmed pure, unrelated to her next expected cycle.',
        ruling:
          'If this spotting is thin and light and clearly does not match her hayd blood, and it is happening outside the window where she would expect her next period, it is generally treated as istihadah-type bleeding, or sometimes as not requiring any special ruling at all, rather than as a new hayd episode. She continues praying and fasting through it, performing wudu as needed.',
      },
      {
        title: 'A known medical condition causing chronic abnormal bleeding',
        scenario:
          'A woman has a diagnosed condition causing frequent or prolonged bleeding well outside a normal cyclical pattern.',
        ruling:
          'This is a central, classic case of istihadah rather than an unusual edge case. She works out her hayd and purity boundaries using whichever of habit, tamyeez, or default duration best fits her situation, and treats everything else as istihadah, praying, fasting, and otherwise living normally rather than treating the condition as an ongoing barrier to worship. Because chronic conditions like this often benefit from a standing, agreed-upon approach rather than re-deriving the ruling every cycle, it is worth working out a clear plan once with a knowledgeable person and then simply following it consistently going forward.',
      },
      {
        title: 'The exact wudu-per-prayer requirement, and what breaks it',
        scenario:
          'A woman in istihadah performs wudu before Dhuhr, then Asr\'s time comes in. Does she need a fresh wudu even if nothing else has broken it besides the ongoing bleeding itself?',
        ruling:
          'Yes, the majority Maliki-aligned view treats the continuous minor impurity of istihadah as something that, on its own, requires a fresh wudu for each fard prayer, not only when an ordinary separate nullifier occurs. Practically, this means she performs wudu just before each prayer\'s time. If an ordinary nullifier also occurs after she has made wudu for a given prayer but before she prays it, that of course also requires a fresh wudu, exactly as it would for anyone else.',
      },
      {
        title: 'Sunnah and voluntary prayers alongside the obligatory ones',
        scenario:
          'A woman in istihadah wants to know whether her single wudu before Dhuhr covers the sunnah prayers around it too, or whether extra voluntary prayers require yet another fresh wudu.',
        ruling:
          'The more established Maliki-aligned view is that one wudu performed with the intention of prayer covers the fard and any voluntary or sunnah prayers prayed within that same prayer\'s time, rather than requiring a completely separate fresh wudu for every individual voluntary prayer. This is a genuinely detailed point where practice can vary by teacher, so a woman who prays extensively beyond the obligatory five may want to ask specifically how her own teacher applies this rather than assuming.',
      },
      {
        title: 'Irregular bleeding in the years approaching menopause',
        scenario:
          'A woman in her late 40s or early 50s, whose cycles have always been regular, starts experiencing increasingly unpredictable bleeding, sometimes heavier, sometimes very light, at inconsistent intervals.',
        ruling:
          'This transitional period is a genuinely harder case than a younger woman\'s irregular bleeding, precisely because a long-standing habit may no longer be a reliable guide and the bleeding itself may not show clean tamyeez either. Scholars generally still work through the same tools, habit first if it still seems to hold, then tamyeez, then default duration as a fallback, but this is one of the areas where individualized guidance genuinely matters more than a general description can provide. A woman in this stage of life is encouraged to raise her specific, ongoing pattern with a scholar directly rather than trying to apply the general rules alone month to month.',
      },
      {
        title: 'Spotting after menopause has clearly been reached',
        scenario:
          'A woman who has gone a long stretch, commonly discussed as roughly a year or more, without any bleeding, consistent with having reached menopause, then notices unexpected spotting.',
        ruling:
          'Once menopause is clearly established, bleeding is generally not treated as hayd, since the physiological basis for hayd, an active reproductive cycle, is no longer presumed to be present at that stage. Such bleeding is more likely to be treated as istihadah-type or, depending on presentation, flagged as something requiring medical attention rather than fiqh classification at all. Postmenopausal bleeding is also a recognized medical red flag independent of fiqh, so this is a case where seeing a doctor promptly matters at least as much as, if not more than, working out the worship question. The two should be pursued together, not one instead of the other, and a woman in this situation should not delay a medical visit while trying to first resolve the fiqh classification.',
      },
      {
        title: 'A woman using a hormonal IUD who stops bleeding almost entirely for months at a time, then experiences an isolated bleeding episode',
        scenario:
          'A woman with a hormonal IUD has had little to no bleeding for several months, a known and common effect of that method, and then experiences a single, isolated episode of bleeding that does not clearly match what her hayd used to look like before the IUD was placed.',
        ruling:
          'Because her baseline has genuinely changed due to the device, her pre-IUD habit is not automatically the right reference point for this new, altered baseline. An isolated bleeding episode after months of little to no bleeding is generally evaluated on its own characteristics, tamyeez, since a single episode is not yet enough to establish a new aadah on its own. If the blood matches hayd characteristics and continues for a plausible hayd-length duration, it can reasonably be treated as hayd. If it is brief, light, or doesn\'t match those characteristics, it leans toward being treated as istihadah-type spotting instead. A woman in this situation, given how common hormonal IUDs are and how genuinely confusing their bleeding patterns can be, benefits from raising her specific pattern with a scholar rather than guessing, particularly the first time an isolated episode like this occurs after a long quiet stretch.',
      },
      {
        title: 'A woman who is unsure, in the moment, whether what she is seeing is the start of hayd or a one-off instance of istihadah-type spotting, and wants to know whether she should stop praying immediately or wait and see',
        scenario:
          'A woman notices what might be the beginning of bleeding partway through her day, and is unsure in the moment whether to treat it immediately as the start of hayd, meaning stopping prayer right away, or to wait briefly to see whether it matches her habit or shows clear hayd characteristics before deciding.',
        ruling:
          'The general principle is that a woman does not need to treat ambiguous, uncertain spotting as definite hayd the instant it appears if it does not yet clearly match her habit or show clear hayd characteristics. Genuine hayd blood, once it appears, is usually not difficult to recognize as different from ordinary spotting for a woman familiar with her own pattern, but the first appearance of anything can understandably cause hesitation. If in real doubt, continuing to pray while paying close attention to how the bleeding develops over the next short period is a reasonable approach, rather than immediately assuming the more disruptive classification on the basis of ambiguous initial signs. If it becomes clearly hayd shortly after, she simply stops at that point, and nothing about the brief period of uncertainty beforehand is treated as a problem. This is a genuinely common real-world moment of hesitation that the classical texts address through the broader tamyeez and habit framework rather than through a specific rule for "the first few minutes of uncertainty," so a woman who finds this happens to her repeatedly may want to ask a scholar for a more concrete personal guideline suited to her own typical pattern.',
      },
    ],
    faq: [
      {
        question: 'Do I need ghusl before every prayer during istihadah, the same way I might assume given how much blood is involved?',
        answer:
          'No, the majority Maliki view is that wudu before each prayer is sufficient during istihadah, not a full ghusl. One ghusl is performed at the point the bleeding is reclassified from hayd or nifas into istihadah, marking the transition. After that, wudu before each fard prayer is what is required, not a repeated ghusl, even though the amount of bleeding involved can sometimes make a woman feel like more should be required.',
      },
      {
        question: 'Can my spouse and I have intercourse during istihadah, given that there is still visible bleeding?',
        answer:
          'According to the majority view, yes, istihadah does not carry the same prohibition as hayd or nifas, since the woman is considered ritually pure. Some scholars still encourage caution, this is worth discussing directly if it applies to your situation, and reasonable couples can land on either position without either being in the wrong, since this is a matter of differing scholarly caution rather than a clear prohibition on one side.',
      },
      {
        question: 'How do I know if it\'s istihadah and not just a longer hayd, especially in the early days when I genuinely can\'t tell yet?',
        answer:
          'The main markers are that it has passed the maximum duration recognized for hayd or nifas, it doesn\'t match your established personal pattern, or the blood itself looks and feels different from your normal hayd. If genuinely unsure, treating the situation cautiously and asking a scholar directly is always better than guessing, and there is no harm or sin in having prayed or fasted during a period that later turns out to have actually been hayd if you made a reasonable, good-faith assessment at the time based on the information available to you.',
      },
      {
        question: 'Should I see a doctor about istihadah, or is this purely a fiqh question that Sual can fully answer on its own?',
        answer:
          'Both matter, and they don\'t replace each other. The fiqh side tells you how to structure your worship around the bleeding, it doesn\'t diagnose or treat the underlying cause. Prolonged, heavy, or unusual bleeding, and especially any bleeding after menopause has been reached, is worth raising with a doctor regardless of what the fiqh classification turns out to be, since istihadah as a fiqh category simply describes bleeding that doesn\'t fit hayd or nifas, it does not mean the bleeding is medically insignificant.',
      },
      {
        question: 'If I\'m not sure whether I\'m a mu\'tadah or mumayyizah, does it actually matter which one I use, or will I end up in roughly the same place either way?',
        answer:
          'For most women it resolves itself. If you have a known regular pattern, use it. If the blood clearly changes character partway through, use that change as your marker. Only fall back to the default 15-day estimate if neither is available. If it isn\'t obvious which applies to you, that itself is a sign to ask rather than to guess, since the two approaches can genuinely lead to different practical conclusions in some cases rather than always converging on the same answer.',
      },
      {
        question: 'Can I lead other women in prayer, or attend the mosque freely, while in istihadah?',
        answer:
          'Yes, since she is treated as ritually pure, none of the mosque-entry or leading-prayer restrictions that apply during hayd apply during istihadah, and there is no additional condition or precaution required of her beyond the wudu-per-prayer requirement and reasonable use of a barrier to prevent soiling the prayer space.',
      },
      {
        question: 'What if I genuinely can\'t tell whether what I\'m experiencing is hayd or istihadah, even after reading all of this?',
        answer:
          'That is a completely normal place to end up, especially with irregular or medically complicated bleeding. This chapter of fiqh is one of the more genuinely intricate ones, and the classical scholars themselves wrote entire lengthy discussions on the harder edge cases. The right move at that point is to describe your specific pattern to a scholar directly rather than keep re-deriving it from general rules alone, and there is no expectation that a woman should be able to resolve every ambiguous case herself from a written description.',
      },
      {
        question: 'Does being classified as istihadah for fiqh purposes mean my bleeding is not "real" or is somehow less significant than hayd or nifas?',
        answer:
          'No, this is a common and understandable misreading of the term, but it is not what the classification means. Istihadah describes bleeding that does not fit the specific legal categories of hayd or nifas for worship purposes, it says nothing about whether the bleeding is medically minor or serious. In fact, istihadah as a category includes some of the more medically significant bleeding patterns discussed in this whole section, chronic conditions, prolonged bleeding, postmenopausal bleeding, precisely because these are the patterns that fall outside the tidy boundaries of an ordinary monthly cycle. The fiqh classification and the medical significance of the bleeding are simply two separate questions, and a woman should not read "istihadah" as a fiqh term to mean her bleeding is being dismissed as unimportant.',
      },
    ],
  },
};