// JUPEB Islamic Religious Studies (IRS) syllabus, structured by
// course module. Source: JUPEB IRS Syllabus (syllabus.ng), four
// modules (ISS001–ISS004) spanning two semesters. Corrected several
// clear OCR misreads from the source scan (see commit/session notes)
// rather than propagate them — Qudsi, Ruwāt, Sahih al-Bukhari, 'Umar
// ibn Abdul Aziz, Harun ar-Rashid.
//
// ISS003 (Qur'anic Studies) is deliberately left without topic
// detail — that page of the source document wasn't available. Do
// not invent its content; add it once the real page is provided.
//
// JUPEB is direct-entry-to-200-level depth (university foundation
// coursework), meaningfully more advanced than JAMB UTME's secondary-
// leaving-level Islamic Studies — this matters for how AI generation
// should be prompted for this board.

export const JUPEB_IRS_SYLLABUS = [
  {
    courseCode: 'ISS001', semester: 1, title: 'History of Islam',
    creditLoad: 3,
    detail: `Topics:
i. An appraisal of the Jahiliyyah period and the significance of the Islamic reforms.
ii. The biography of Muhammad ﷺ.
iii. Life and achievements of the Khulafa Rashidun (the Rightly Guided Caliphs).
iv. An overview of the Umayyad and Abbasid dynasties.
v. Life and achievements of 'Umar ibn Abdul Aziz.
vi. Life and achievements of Harun ar-Rashid.
vii. Impact of the spread of Islam to West Africa.
viii. The Hausa-Fulani Jihad.
ix. The Kanem-Bornu Empire.
x. Muslim-Non-Muslim relations.`,
  },
  {
  courseCode: 'ISS002', semester: 2, title: 'Tawhid & Ibadat',
  creditLoad: 3,
  detail: `Topics:
i. Definition and types of Tawhid (Tawhid ar-Rububiyyah, Tawhid al-Uluhiyyah, and Tawhid al-Asma' was-Sifat).
ii. Types and implications of Shirk.
iii. An analysis of the names and attributes of the Qur'an.
iv. Comparison of the features of the primary and secondary sources of Shari'ah.
v. Nature and implications of engaging in different forms of Shirk.
vi. The Islamic concept of Ibadah.
vii. Forms and purposes of Taharah.
viii. The observance, types, and values of Salah.
ix. The regulations governing Zakat and Sadaqah and the values of both.
x. The regulations governing Sawm.
xi. Types of fasts and the significance of fasting.
xii. The conditions, rites, and significance of Hajj and 'Umrah.
xiii. The Islamic marriage and divorce, and comparison with marriage and divorce practices in other cultures.`,
},
{
  courseCode: 'ISS003', semester: 1, title: 'Qur\'anic Studies',
  creditLoad: 3,
  detail: `Topics:
i. Analysis of the names and attributes of the Qur'an.
ii. Authenticity of the Qur'an as a Divine Book.
iii. Arrangement and means of preserving the Qur'anic text.
iv. The emergence of ar-Rasm al-'Uthmani.
v. The distinction between the Makki and Madani suwar.
vi. Asbab an-Nuzul and an-Nasikh wal-Mansukh.
vii. Ethics of interpreting the Qur'an.
viii. A study of the text, translation, and interpretation of Juz 'Amma.`,
},
  {
    courseCode: 'ISS002', semester: 2, title: 'Tawhid & Ibadat',
    creditLoad: 3,
    detail: `Topics:
i. Analysis of the names and attributes of the Qur'an.
ii. Authenticity of the Qur'an as a Divine Book.
iii. Arrangement and means of preserving the Qur'anic text.
iv. The emergence of ar-Rasm al-'Uthmani.
v. The distinction between the Makki and Madani suwar.
vi. Asbab an-Nuzul and an-Nasikh wal-Mansukh.
vii. Ethics of interpreting the Qur'an.
viii. A study of the text, translation, and interpretation of Juz 'Amma.`,
  },
  {
    courseCode: 'ISS004', semester: 2, title: 'Introduction to the Study of Hadith',
    creditLoad: 3,
    detail: `Topics:
i. Definition and values of Hadith.
ii. The relationship between Hadith and Sunnah.
iii. Types of Hadith (Nabawi and Qudsi).
iv. Basic form of the Hadith (Isnad and Matn).
v. Determining the authenticity of Hadith.
vi. The Ruwat (narrators) and the Muhaddithin.
vii. The Six Standard Works and biographies of their compilers.
viii. The Mu'jam of at-Tabarani and the Jami' of Ibn al-Athir.
ix. Textual analysis of an-Nawawi's collection.
x. A critical appraisal of Sahih al-Bukhari.`,
  },
]