// src/data/womensHealthAwareness.js
//
// General health-awareness content: PMOS (the condition formerly
// known as PCOS), endometriosis, uterine fibroids, ovarian cysts,
// iron deficiency anemia from heavy menstrual bleeding, and cervical
// screening.
//
// Deliberately kept in its own file, separate from womensFiqh.js.
// That file's own header states its content needs "the same scholar
// review as the rest of Sual's fiqh content" -- but none of this
// content is a fiqh question at all. These topics have no bearing on
// hayd, nifas, or istihadah rulings; there is no prayer or fasting
// question attached to any of them. Routing this into the same file
// risked it being swept into a fiqh-scholar review, which is not the
// right reviewer for gynecological accuracy. This file needs review
// by a qualified health professional before publication, not an
// Islamic scholar. Keep that distinction when this is eventually
// reviewed.
//
// This is deliberately NOT a symptom checker. There is no "cases"
// array of symptom-scenario-to-conclusion pairs anywhere in this
// file, on purpose, matching womensFiqh.js's own structural pattern
// for that array but withholding it here specifically. Every section
// below describes patterns in the aggregate ("commonly reported
// symptoms include...") rather than evaluating an individual reader's
// own situation ("if you have X and Y, you may have..."). Every FAQ
// entry that could be read as inviting self-diagnosis instead
// redirects to a doctor. This is a deliberate, structural choice, not
// an oversight: generating diagnostic-style output about a real
// disease from a reader's own reported symptoms is not something this
// content should ever do, regardless of how it's framed.
//
// PMOS naming note: the condition long known as PCOS (Polycystic
// Ovary Syndrome) was formally renamed Polyendocrine Metabolic
// Ovarian Syndrome (PMOS) via a global consensus process published in
// The Lancet (Teede et al., May 2026), backed by more than 50 patient
// and professional organisations including the Endocrine Society and
// ASRM. The entry below leads with the current name and keeps "PCOS"
// alongside it prominently, since public recognition of the new name
// will lag behind the rename for some time and most readers will
// still be searching for "PCOS" specifically.
//
// Cervical screening note: specific recommended screening intervals
// below reflect current US guidance (ACOG/USPSTF/ACS, updated January
// 2026) as a general reference point, not a universal standard --
// exact intervals and starting ages vary somewhat by country and
// health system, so the entry points readers toward their own local
// guidance and provider rather than presenting one country's exact
// numbers as globally correct.
//
// STATUS: draft, pending clinical review before this is presented to
// users as final. Do not treat anything below as confirmed, medically
// reviewed, or ready for publication until that review is complete.

export const WOMENS_HEALTH_AWARENESS_CONTENT = {
  pmos: {
    title: 'PMOS (formerly PCOS)',
    arabic_title: 'تكيّس المبايض',
    quick_fact: 'A common hormonal condition, not a diagnosis you can make yourself',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'Polyendocrine Metabolic Ovarian Syndrome (PMOS) is the current name for the condition long known as PCOS, Polycystic Ovary Syndrome. The name changed in 2026 following a large global consensus process, specifically because "PCOS" gave the misleading impression that the condition is mainly about ovarian cysts, when it is better understood as a broader hormonal and metabolic condition that also affects the ovaries. It is one of the most common hormonal conditions affecting women of reproductive age, estimated to affect roughly one in eight to one in ten women worldwide, and a large proportion of those affected are not yet diagnosed.',
      },
      {
        key: 'common-patterns',
        title: 'Commonly Reported Patterns',
        icon: 'droplet',
        body:
          'Patterns commonly reported in connection with this condition include irregular, infrequent, or unpredictable menstrual cycles; signs linked to higher androgen levels, such as acne, excess facial or body hair, or hair thinning on the scalp; and, for some, difficulty conceiving. It is also commonly linked to insulin resistance and a higher long-term likelihood of type 2 diabetes, which is part of why the newer name specifically highlights its metabolic dimension rather than only its reproductive one. None of these patterns on their own confirms this specific condition, since each one can also have other, unrelated causes.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'This condition is widely under-diagnosed, in part because irregular cycles and mild acne are often dismissed as unremarkable on their own. Recognizing that these patterns can, together, point toward something worth asking a doctor about is genuinely useful, particularly because earlier diagnosis is generally linked to better long-term management of both the reproductive and metabolic sides of the condition.',
      },
    ],
    faq: [
      {
        question: 'If I have irregular periods and some acne, does that mean I have this?',
        answer:
          'Not on its own. Both irregular cycles and acne are common and have many possible causes unrelated to this condition. Actually diagnosing it involves a doctor considering a combination of specific factors together, generally including blood tests and sometimes an ultrasound, not a checklist of symptoms alone. If these patterns are recurring or affecting your life, it is worth raising with a doctor, but that conversation, not this page, is how an actual diagnosis is reached.',
      },
      {
        question: "What's actually different about the name PMOS versus PCOS, is one of them wrong?",
        answer:
          'PCOS was not exactly wrong, but it was widely seen as misleading, since many people with the condition do not actually have ovarian cysts, and the name gave an outsized focus to that one feature over its broader hormonal and metabolic effects. PMOS is the current, formally adopted name following a large 2026 global consensus process. You may still see "PCOS" used for some time, since public awareness of a name change like this takes a while to catch up.',
      },
      {
        question: 'Should I see a doctor if I recognize some of these patterns in myself?',
        answer:
          'Yes, that is the right next step, rather than trying to reach a conclusion from this page alone. A doctor can ask about your specific history, run the appropriate tests, and consider other possible explanations for what you are experiencing alongside this one.',
      },
      {
        question: 'Is this condition something I was just born with, or can it develop later?',
        answer:
          'It typically becomes apparent during the reproductive years, often first noticed around puberty or in the years shortly after, though the exact timing and how noticeable it is varies a great deal from person to person. Family history appears to play a real role for many people, but a doctor is better placed than a general description like this one to discuss your own specific likelihood or timeline.',
      },
    ],
  },

  endometriosis: {
    title: 'Endometriosis',
    arabic_title: 'الانتباذ البِطاني الرَّحِمي',
    quick_fact: 'Tissue like the uterine lining growing elsewhere in the body',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'Endometriosis is a condition in which tissue similar to the lining of the uterus grows outside it, most often on the ovaries, the pelvis, or the tissue lining the pelvic cavity, though it can occur elsewhere in the body too. This tissue responds to the hormonal changes of the menstrual cycle in a similar way to the uterine lining itself, which is part of what leads to the inflammation, scarring, and pain many people with the condition experience. It affects an estimated 5 to 10 percent of women of reproductive age worldwide.',
      },
      {
        key: 'common-patterns',
        title: 'Commonly Reported Patterns',
        icon: 'droplet',
        body:
          'Patterns commonly reported include pelvic pain and cramping, often but not only around menstruation; pain during intercourse; pain with bowel movements or urination, particularly around a period; heavy periods or bleeding between periods; and, for some, difficulty conceiving. Some people with endometriosis have no noticeable symptoms at all and only learn they have it during an evaluation for another reason, including fertility investigations.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'Endometriosis is frequently diagnosed years after symptoms first start, in part because period pain is often assumed to be an ordinary, unavoidable part of menstruation rather than a sign worth investigating. A useful general guideline from gynecologists is that a period should be no more than a minor inconvenience: pain severe enough to regularly disrupt school, work, or daily activities is not simply something to push through, and is worth a real conversation with a doctor.',
      },
    ],
    faq: [
      {
        question: 'Does painful cramping every month automatically mean I have endometriosis?',
        answer:
          'No. Some cramping during menstruation is common and does not, on its own, indicate endometriosis. What is more specifically worth flagging to a doctor is pain severe enough to interfere with your normal activities, pain that has been getting worse over time, or pain alongside other patterns described above. Diagnosis typically involves a doctor\'s evaluation and sometimes imaging or a minor surgical procedure, not a symptom checklist.',
      },
      {
        question: 'Can endometriosis affect my ability to have children?',
        answer:
          'It can, for some people, though many people with endometriosis conceive without difficulty. If you have a diagnosis or a strong suspicion of endometriosis and are thinking about fertility, that is a specific, worthwhile conversation to have directly with a doctor familiar with your situation, rather than something this page can meaningfully answer for you individually.',
      },
      {
        question: "I've always just been told period pain is normal, how do I know if mine is worth mentioning?",
        answer:
          'If your pain regularly stops you from going to school or work, from your usual activities, or from things you would otherwise want to do, that is worth mentioning to a doctor, regardless of how long you have been told to expect it. Pain that has changed or worsened over time is also worth flagging. A doctor is genuinely better placed than a general description like this one to tell you whether what you are experiencing warrants further investigation.',
      },
      {
        question: 'How is endometriosis actually confirmed, since I\'ve heard it can only really be diagnosed through surgery?',
        answer:
          'A doctor will usually start with your history and a physical exam, and may use imaging such as an ultrasound to look for signs consistent with endometriosis. A definitive diagnosis has traditionally required a minor surgical procedure called laparoscopy to directly view and sometimes sample the tissue, though doctors increasingly diagnose and begin treating based on symptoms and imaging alone in many cases, reserving surgery for when it is genuinely needed rather than as an automatic first step. Exactly which path is right depends on your specific situation and is a conversation to have directly with a doctor.',
      },
    ],
  },

  fibroids: {
    title: 'Uterine Fibroids',
    arabic_title: 'الأورام الليفية الرَّحِمية',
    quick_fact: 'Common, usually non-cancerous growths in or on the uterus',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'Uterine fibroids, also called leiomyomas, are growths made of muscle and fibrous tissue that develop in or on the uterus. They are extremely common and are not cancerous. Estimates suggest a large majority of women will have at least one fibroid at some point, though many never notice any symptoms and never need treatment. Fibroids vary a great deal in size, number, and location, which is a large part of why symptoms, where they occur at all, vary so much from person to person.',
      },
      {
        key: 'common-patterns',
        title: 'Commonly Reported Patterns',
        icon: 'droplet',
        body:
          'Where fibroids do cause symptoms, commonly reported patterns include heavy or prolonged menstrual bleeding, sometimes leading to anemia; bleeding between periods; a feeling of pelvic pressure or fullness; more frequent urination, from pressure on the bladder; and, for some, pain during intercourse or difficulty with fertility. Many fibroids cause no symptoms at all and are only found incidentally during an unrelated exam or scan.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'Because fibroids are so common and often silent, many people are unaware they have any until symptoms appear or a scan reveals them. Heavy bleeding in particular is easy to normalize, especially for someone who has never experienced a lighter period to compare it against, but ongoing heavy bleeding can lead to real, treatable anemia over time and is worth mentioning to a doctor rather than simply managing around it indefinitely.',
      },
    ],
    faq: [
      {
        question: 'If I have heavy periods, does that mean I have fibroids?',
        answer:
          'Not necessarily, heavy periods have several possible causes, and fibroids are only one of them. What matters is raising it with a doctor if your periods are heavy enough to regularly soak through protection faster than expected, cause you to avoid normal activities, or leave you feeling unusually tired or lightheaded, which can be a sign of anemia. A doctor can examine you and, if needed, arrange imaging to check for fibroids or other causes.',
      },
      {
        question: 'Do fibroids always need to be treated?',
        answer:
          'No. Many fibroids cause no symptoms and require no treatment at all beyond routine monitoring. Whether treatment is needed depends on symptoms, size, location, and personal factors like whether you are hoping to conceive, all of which a doctor is far better placed to weigh than a general description like this one.',
      },
      {
        question: 'Are fibroids the same thing as endometriosis?',
        answer:
          'No, though they can share some symptoms, like pelvic pain and heavy bleeding, and someone can have both at once. Fibroids are growths of muscle and fibrous tissue in or on the uterus itself. Endometriosis is uterine-lining-like tissue growing outside the uterus entirely. They are distinct conditions with different underlying causes, and telling them apart generally requires a doctor\'s evaluation rather than symptoms alone.',
      },
      {
        question: 'Can fibroids affect pregnancy or fertility?',
        answer:
          'For some people, yes, particularly depending on a fibroid\'s size and specific location, but many people with fibroids conceive and carry pregnancies without any complications at all. If you have known fibroids and are thinking about pregnancy, or are pregnant and have been told you have fibroids, that is a specific conversation worth having directly with your doctor, since the details of your own situation matter far more here than a general statement can capture.',
      },
    ],
  },

  ovarian_cysts: {
    title: 'Ovarian Cysts',
    arabic_title: 'أكياس المبيض',
    quick_fact: 'Very common, usually harmless, and often resolve on their own',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'An ovarian cyst is a fluid-filled sac that forms on or inside an ovary. They are extremely common and, in the large majority of cases, are entirely harmless. Most are what doctors call functional cysts, meaning they form as a normal, expected part of the menstrual cycle itself, for example when the small sac that releases an egg each month does not fully release its fluid afterward. These functional cysts generally shrink and disappear on their own within a few weeks to a few months, often without ever causing any noticeable symptoms at all. A smaller number of cysts are not related to the ordinary menstrual cycle at all and are called pathological cysts. These are less common, are usually still benign, but are more likely to need a doctor\'s active monitoring or treatment. It is worth knowing directly that having "cysts" show up on an ultrasound is not the same thing as PMOS, the condition covered separately above. PMOS involves a broader pattern of hormonal and metabolic features together with a particular ovarian appearance on ultrasound, whereas an isolated ovarian cyst found on its own, especially a functional one, is an entirely different and generally far less significant finding.',
      },
      {
        key: 'common-patterns',
        title: 'Commonly Reported Patterns',
        icon: 'droplet',
        body:
          'Most ovarian cysts cause no symptoms whatsoever and are only discovered incidentally, during a routine pelvic exam or an ultrasound done for an unrelated reason. Where a cyst does cause symptoms, commonly reported patterns include mild pelvic discomfort or a feeling of pressure or fullness on one side, bloating, or, less commonly, a change in the usual menstrual pattern. Sudden, severe pelvic pain, particularly if it comes on sharply, is a different and more urgent situation, since it can occasionally signal a cyst that has ruptured or twisted the ovary, and this specific kind of pain is worth seeking medical attention for promptly rather than waiting to see if it passes.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'Because most cysts are silent and resolve on their own, many people are never even aware they had one. The main practical value in knowing about them is context: finding out you have a cyst on a routine scan is common and, on its own, rarely a cause for alarm, and mild, one-sided pelvic discomfort around ovulation time is a genuinely common, usually harmless sensation some people notice. What is worth taking seriously is sudden, severe, or worsening pain, which is a different situation from the ordinary, mild discomfort a functional cyst might occasionally cause.',
      },
    ],
    faq: [
      {
        question: 'My doctor found a cyst on my ultrasound, does that mean something is wrong?',
        answer:
          'Not necessarily, and often not at all. The large majority of ovarian cysts found this way are functional, harmless, and expected to resolve on their own, which is why a doctor\'s typical first step is simply to monitor it with a follow-up scan rather than treat it immediately. Your doctor is the right person to tell you which category your specific cyst likely falls into and whether any follow-up is needed.',
      },
      {
        question: 'Does having an ovarian cyst mean I have PMOS?',
        answer:
          'No, these are different things, even though both involve the ovaries and even though the older name for PMOS, PCOS, contains the word "cyst." PMOS is a broader hormonal and metabolic condition involving a specific combination of features, not simply the presence of a cyst. A single ovarian cyst, especially a functional one, is a distinct and generally much less significant finding on its own.',
      },
      {
        question: 'When should I actually worry about a cyst rather than just waiting for a follow-up scan?',
        answer:
          'Sudden, severe pelvic pain, especially if it comes on sharply or is accompanied by fever, vomiting, or feeling faint, is worth urgent medical attention rather than waiting, since it can occasionally indicate a cyst that has ruptured or caused the ovary to twist. Milder, gradual, or intermittent discomfort is far more commonly the ordinary, harmless kind and can usually be discussed at a regular appointment.',
      },
    ],
  },

  anemia_from_bleeding: {
    title: 'Anemia From Heavy Periods',
    arabic_title: 'فقر الدم الناتج عن غزارة الطمث',
    quick_fact: 'A common, treatable, and frequently overlooked consequence of heavy bleeding',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'Iron deficiency anemia happens when the body does not have enough iron to make sufficient healthy red blood cells, which are what carry oxygen around the body. Menstrual blood contains iron, so someone with consistently heavy periods can lose more iron each cycle than their diet replaces, gradually depleting the body\'s iron stores over months or years. This connection is described in medical literature as being frequently normalized, both by women themselves and, at times, by healthcare providers, meaning genuinely heavy bleeding and its real physical consequences are often assumed to just be an ordinary part of having periods rather than something worth investigating.',
      },
      {
        key: 'common-patterns',
        title: 'Commonly Reported Patterns',
        icon: 'droplet',
        body:
          'Commonly reported patterns include ongoing tiredness or fatigue that does not improve with rest, weakness, shortness of breath with activity that did not previously cause it, difficulty concentrating, lightheadedness, and headaches. Because these symptoms build up gradually, many people adjust to feeling this way without realizing it is not how they are supposed to feel. Practical signs that a period may be heavy enough to cause this include needing to change protection roughly every hour or more often for several consecutive hours, needing to change protection overnight, or regularly passing clots roughly the size of a coin or larger.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'Iron deficiency anemia is genuinely common among women with heavy periods and is very treatable once identified, typically through dietary changes, iron supplements, or addressing whatever is causing the heavy bleeding in the first place, which can include fibroids, endometriosis, or other causes. The main barrier is usually not treatment, it is recognition, since fatigue and heavy periods are both so often written off as simply part of life rather than connected to each other or flagged to a doctor.',
      },
    ],
    faq: [
      {
        question: 'How do I know if my periods count as "heavy" rather than just normal for me?',
        answer:
          'There is real variation in what is normal between different people, but specific signs worth paying attention to include soaking through a pad or tampon in an hour or less for several hours in a row, needing to change protection during the night, passing clots larger than roughly a coin, or bleeding that regularly lasts more than about a week. If any of these describe your periods, it is worth mentioning to a doctor rather than assuming it is simply how your body works.',
      },
      {
        question: 'Can I just take iron supplements on my own without seeing a doctor first?',
        answer:
          'It is better to see a doctor first if possible. A doctor can confirm you are actually iron deficient, rather than assuming, since other conditions can cause similar tiredness and are not helped by iron. They can also check for and address whatever is causing heavy bleeding in the first place, since supplementing iron without addressing the underlying cause means the same depletion is likely to keep happening.',
      },
      {
        question: 'Is feeling tired all the time definitely because of anemia?',
        answer:
          'Not necessarily, ongoing fatigue has many possible causes, and anemia is only one of them. What is genuinely worth doing is mentioning both the fatigue and your period pattern together to a doctor, since that combination specifically is what points toward checking for anemia, rather than either symptom alone.',
      },
    ],
  },

  cervical_screening: {
    title: 'Cervical Screening',
    arabic_title: 'فحص عنق الرحم',
    quick_fact: 'Routine screening that catches problems years before they become serious',
    sections: [
      {
        key: 'what-it-is',
        title: 'What It Is',
        icon: 'book',
        body:
          'Cervical screening checks the cervix, the lower part of the uterus that connects to the vagina, for early changes that could develop into cervical cancer if left unaddressed, well before any symptoms would appear. It usually involves a Pap test, which looks at cervical cells directly, a test for high-risk HPV (human papillomavirus), the virus responsible for nearly all cervical cancer, or both together. Cervical cancer typically develops very slowly, often over ten to fifteen years, from initial HPV infection to an actual cancer, which is exactly why routine screening at sensible intervals is so effective: it catches changes at an early, highly treatable stage, long before they become a serious problem.',
      },
      {
        key: 'common-patterns',
        title: 'General Guidance on Timing',
        icon: 'calendar',
        body:
          'Recommended starting ages and intervals vary somewhat between countries and health systems, so this is general orientation rather than a fixed worldwide rule, follow your own doctor\'s or local health system\'s specific guidance. As one widely used reference point, current United States guidelines (updated January 2026) recommend cervical cytology every three years for average-risk women aged 21 to 29, and, for ages 30 to 65, either primary HPV testing every five years, combined Pap-and-HPV co-testing every five years, or Pap testing alone every three years if HPV testing is not available. Routine screening can generally stop around age 65 for those with an adequate history of prior normal results. Screening this infrequently, once every three to five years for most people, is a genuinely new development compared to older advice recommending annual tests, reflecting more than a decade of evidence that cervical cancer\'s slow development makes less frequent testing just as safe while reducing unnecessary procedures.',
      },
      {
        key: 'why-it-matters',
        title: "Why It's Worth Knowing About",
        icon: 'question',
        body:
          'Cervical cancer is one of the most preventable cancers specifically because routine screening is so effective at catching changes early, yet screening rates remain lower than they could be, in part because people are unaware how infrequently testing is actually needed today, or assume, incorrectly, that no symptoms means no need to be screened. Screening is specifically for people without symptoms; it is not something to wait for a problem before doing.',
      },
    ],
    faq: [
      {
        question: 'I have no symptoms at all, do I still need to be screened?',
        answer:
          'Yes, this is exactly the point of screening. Cervical cancer and the changes that precede it typically cause no symptoms at all in their early, most treatable stages. Screening exists specifically to catch these changes before any symptoms would ever appear, so having no symptoms is not a reason to skip it.',
      },
      {
        question: "I've heard I only need this test every few years now, is that actually safe, or should I still go annually to be careful?",
        answer:
          'Moving from annual testing to every three or five years, depending on age and test type, reflects updated evidence, not reduced caution. Cervical cancer develops slowly enough that these longer intervals catch it just as effectively while avoiding unnecessary procedures and worry from over-testing. Follow the specific interval your own doctor recommends for your age and history, since some situations, such as a previous abnormal result, do call for more frequent follow-up.',
      },
      {
        question: 'Does getting the HPV vaccine mean I no longer need cervical screening?',
        answer:
          'No. The vaccine protects against the HPV types most commonly linked to cervical cancer, but it does not cover every cancer-causing type, and it offers no protection against an HPV infection someone may already have been exposed to before vaccination. Vaccinated individuals are still advised to follow the same screening schedule as everyone else.',
      },
    ],
  },
};