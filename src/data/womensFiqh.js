// src/data/womensFiqh.js
//
// Static content for the Women's Fiqh feature. Deliberately NOT
// admin-managed or AI-generated — this content directly governs
// worship validity (prayer, fasting, tawaf), so it ships as
// reviewed, versioned code rather than something editable at
// runtime. Any change to this file should go through the same
// scholar review as the rest of Sual's fiqh content, via normal
// PR review — not a publish toggle.
//
// max_duration_days feeds the tracker's ruling logic directly
// (see WomensFiqh.jsx) — treat it as load-bearing, not decorative.
//
// Positions given follow the Maliki madhhab by default, consistent
// with the rest of Sual's fiqh content. Where another position is
// widely known to differ, it's noted briefly rather than argued.
//
// STATUS: draft — pending scholar sign-off before this is presented
// to users as final. Do not treat figures/rulings below as confirmed
// until reviewed.

export const WOMENS_FIQH_CONTENT = {
  hayd: {
    title: 'Hayd',
    arabic_title: 'الحَيْض',
    quick_fact: 'Up to 15 days · Maliki view',
    max_duration_days: 15,
    definition:
      'Hayd is the natural blood that flows from a healthy woman\'s womb at intervals, not caused by illness or injury. It is a normal part of a woman\'s physical constitution and is treated in the Shari\'ah as a state with its own specific rulings, not an illness.',
    duration:
      'The Maliki madhhab does not set a fixed minimum — even a brief flow of blood, however short, is treated as hayd if it has the characteristics of menstrual blood. The maximum is generally held to be 15 days; blood continuing beyond that is examined further (see Istihadah). A woman\'s own established pattern, if she has one, is also taken into account.',
    signs:
      'Hayd blood is typically dark red to black, thick, and has a distinct odor, as opposed to the thin, pale blood sometimes seen in istihadah. Purity is confirmed either by "al-qassah al-bayda" (a white discharge some women experience at the end of their cycle) or, where that is not present, by complete dryness (jufoof) — no further staining when checked.',
    rulings:
      'During hayd, a woman does not pray and does not make up the missed prayers afterward. She does not fast during hayd, but she does make up the missed fasting days afterward. Tawaf around the Ka\'bah is not valid during hayd. Intercourse is prohibited during hayd. Scholars differ on whether she may touch or recite from the mus-haf during hayd — many permit recitation from memory and touching a Quran app or translation, while touching the physical Arabic mus-haf directly is more cautiously restricted; consult a scholar for your specific situation. When hayd ends, ghusl (the full ritual bath) is obligatory before prayer resumes.',
    cases: [
      {
        title: 'Bleeding stops, then resumes within a few days',
        scenario:
          'A woman\'s bleeding stops on day 4, she thinks she is pure, but bleeding resumes on day 6, still within the normal range of her cycle.',
        ruling:
          'If the gap between the two episodes is short and both fall within the maximum duration of hayd, the whole period — including the gap — is generally treated as one continuous hayd. She does not resume prayer during the gap unless clear purity (qassah bayda or jufoof) was confirmed.',
      },
      {
        title: 'First-time bleeder, unsure what to expect',
        scenario:
          'A girl experiences her first period and does not yet know her pattern or how long it typically lasts.',
        ruling:
          'She treats the bleeding as hayd from when it starts. If it continues past the maximum (15 days), from that point she is treated as experiencing istihadah, and begins praying and fasting again with wudu for each prayer.',
      },
      {
        title: 'Light spotting before the expected date',
        scenario:
          'A woman notices light brownish spotting a few days before her period is due.',
        ruling:
          'If the discharge has the characteristics of hayd blood (color, thickness), it is treated as the start of hayd. If it is unclear or very faint and doesn\'t match her usual pattern, she should continue praying until clearer signs appear — this is a case worth confirming with a knowledgeable person if in doubt.',
      },
    ],
    faq: [
      {
        question: 'Can I recite Qur\'an during hayd?',
        answer:
          'Scholars differ. Many Maliki scholars permit recitation from memory (without touching the physical mus-haf) during hayd, particularly for a student of knowledge or someone concerned about forgetting what she has memorized. Touching and reading directly from the Arabic mus-haf is more commonly restricted. Ask a scholar about your specific situation if unsure.',
      },
      {
        question: 'Do I make up prayers missed during hayd?',
        answer:
          'No. Missed prayers during hayd are not made up — this is a specific mercy in the Shari\'ah, unlike missed fasts, which are made up after Ramadan.',
      },
      {
        question: 'What if my period is unusually short or long compared to before?',
        answer:
          'Some natural variation is normal. If bleeding stays within the maximum duration recognized by your madhhab and has the usual characteristics, it is still hayd, even if shorter or longer than your typical cycle.',
      },
    ],
  },

  nifas: {
    title: 'Nifas',
    arabic_title: 'النِّفَاس',
    quick_fact: 'Up to 60 days · Maliki view',
    max_duration_days: 60,
    definition:
      'Nifas is the bleeding a woman experiences following childbirth. It carries the same category of rulings as hayd — prayer and fasting are suspended, resuming once the bleeding stops or the maximum duration is reached, whichever comes first.',
    duration:
      'There is no minimum — nifas may last only a very short time, or not occur at all for some women. The commonly cited maximum in the Maliki madhhab is 60 days. If bleeding continues beyond that, it is treated as istihadah from that point onward, and she resumes prayer and fasting.',
    signs:
      'Nifas blood generally resembles hayd blood in color and thickness. Some women experience a brief pause in bleeding shortly after delivery before nifas properly begins — this is treated as part of the same nifas period rather than a separate purity, unless it is prolonged and clearly a full return to purity.',
    rulings:
      'The same rulings as hayd apply during nifas: no prayer, no fasting (fasts are made up later), no tawaf, no intercourse, and ghusl is required once nifas ends before prayer resumes. If bleeding stops well before day 60, she performs ghusl and resumes worship immediately — she is not required to wait out the full 60 days.',
    cases: [
      {
        title: 'Bleeding stops within the first week',
        scenario:
          'A woman gives birth and her bleeding stops completely after 8 days.',
        ruling:
          'She performs ghusl once bleeding has clearly stopped (confirmed by dryness) and resumes prayer and fasting immediately — she does not need to wait for a fixed number of days.',
      },
      {
        title: 'Bleeding continues past 60 days',
        scenario:
          'A woman is still bleeding on day 65 after delivery.',
        ruling:
          'From day 61 onward, the bleeding is treated as istihadah rather than nifas. She performs ghusl, resumes prayer with wudu for each prayer, and resumes fasting.',
      },
      {
        title: 'Miscarriage',
        scenario:
          'A woman experiences a miscarriage at a stage where the fetus had already taken a recognizable human form.',
        ruling:
          'Bleeding following a miscarriage at this stage is generally treated as nifas, with the same rulings as postpartum bleeding. If the miscarriage occurs very early, before any recognizable form, scholars differ on how the bleeding is classified — this is a case worth asking a scholar about directly given how much it varies by specific circumstance.',
      },
    ],
    faq: [
      {
        question: 'Do I fast during nifas?',
        answer:
          'No, the same as hayd — fasting is not performed during nifas, and missed fasts are made up afterward, typically before the next Ramadan.',
      },
      {
        question: 'What if I don\'t bleed at all after delivery?',
        answer:
          'Some women experience little to no postpartum bleeding. If so, there is no nifas period to observe, and she resumes her normal worship as soon as she is otherwise able.',
      },
    ],
  },

  istihadah: {
    title: 'Istihadah',
    arabic_title: 'الاسْتِحَاضَة',
    quick_fact: 'Treated as pure · wudu per prayer',
    max_duration_days: null,
    definition:
      'Istihadah is bleeding that does not fit the pattern of hayd or nifas — either because it continues beyond the maximum duration of one of those, or because it does not match a woman\'s established habit or the recognized characteristics of menstrual blood. A woman experiencing istihadah is, for the purposes of worship, treated as pure (tahirah), not as menstruating.',
    duration:
      'Istihadah has no maximum duration of its own — it continues for as long as the underlying bleeding continues beyond what qualifies as hayd or nifas. There is no minimum either; a single day beyond the maximum of hayd or nifas is enough to reclassify the bleeding as istihadah from that point.',
    signs:
      'Scholars use a few methods to help a woman identify whether she is experiencing hayd/nifas or istihadah: her established habit (if she has a known, regular cycle length, bleeding beyond that is treated as istihadah), tamyeez (distinguishing by color and consistency — genuine hayd blood is typically darker and thicker than istihadah blood, which tends to be thinner and lighter), and, absent either of these, a default duration (the maximum of hayd or nifas as applicable).',
    rulings:
      'Once bleeding is classified as istihadah, a woman prays and fasts normally. Most scholars hold that she should perform wudu before each prayer, since istihadah is treated similarly to a minor, continuous impurity (like a constant minor discharge), rather than requiring ghusl before every prayer. She may fast, perform tawaf, and her spouse may have intercourse with her, according to the majority view — though some scholars encourage extra caution given the ongoing bleeding. A pad or similar barrier is used to prevent the bleeding from soiling clothing or the prayer space, and this does not affect the validity of her prayer.',
    cases: [
      {
        title: 'Bleeding continues past the maximum of hayd',
        scenario:
          'A woman\'s bleeding continues to day 20 of her cycle, past the 15-day Maliki maximum for hayd.',
        ruling:
          'From day 16 onward, she is in istihadah. She performs ghusl (marking the end of the hayd portion), then prays and fasts normally from that point, performing wudu before each prayer.',
      },
      {
        title: 'Irregular bleeding with no clear pattern',
        scenario:
          'A woman experiences bleeding on and off across a month, with no clear regular cycle and blood that doesn\'t clearly match her past hayd in color or thickness.',
        ruling:
          'If she has an established habit from before, she follows that habit for what counts as hayd and treats the rest as istihadah. If she has no established habit and cannot distinguish by color/consistency, she follows the default maximum duration (commonly 15 days) as hayd, and everything beyond that as istihadah.',
      },
      {
        title: 'A first-time bleeder with continuous bleeding',
        scenario:
          'A young woman\'s first period does not stop and continues well past what would typically be expected.',
        ruling:
          'She treats the first 15 days (the default maximum) as hayd, and anything beyond that as istihadah, until a clear personal pattern becomes established over subsequent cycles.',
      },
    ],
    faq: [
      {
        question: 'Do I need ghusl before every prayer during istihadah?',
        answer:
          'No — the majority view is that wudu before each prayer is sufficient during istihadah, not a full ghusl. One ghusl is performed at the point the bleeding is reclassified from hayd/nifas into istihadah, marking the transition.',
      },
      {
        question: 'Can my spouse and I have intercourse during istihadah?',
        answer:
          'According to the majority view, yes — istihadah does not carry the same prohibition as hayd or nifas, since the woman is considered ritually pure. Some scholars still encourage caution; this is worth discussing directly if it applies to your situation.',
      },
      {
        question: 'How do I know if it\'s istihadah and not just a longer hayd?',
        answer:
          'The main markers are: it has passed the maximum duration recognized for hayd/nifas, it doesn\'t match your established personal pattern, or the blood itself looks and feels different from your normal hayd (thinner, lighter in color). If genuinely unsure, treating the situation cautiously and asking a scholar directly is always better than guessing.',
      },
    ],
  },
}