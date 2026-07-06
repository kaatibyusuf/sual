# Sual | سُؤَال

Your companion for the Islamic sciences. Sual is a web application for asking, learning, and testing knowledge across the classical Islamic disciplines: Fiqh, Seerah, Arabiyyah, Usul al-Fiqh, Sarf, Nahw, and Tafseer. It is built for serious students of knowledge and is free at its core, with a paid community layer for those who want structured classes and scholar access.

Live at [app.usesual.com](https://app.usesual.com). The marketing site lives separately at [usesual.com](https://www.usesual.com), where the blog publishes long-form writing across Stories, Fiqh, and Hadeeth.

## What the app does

The home screen greets a signed-in user with the Hijri date, a live countdown to the next prayer, and their learning stats, then opens into the app through a grid of quick actions and a persistent sidebar.

Disciplines organizes over 700 sourced questions and answers across the seven sciences, each discipline levelled from Beginner through Intermediate to Advanced, with every answer grounded in its evidences.

Quiz tests the user against the knowledge base at their level and records history, averages, and progression, which feed the Dashboard and the user's level.

Hifdh Simulator is the app's most distinctive feature: a muraja'ah companion for guarding memorization. It currently carries three collections. The Qur'an from Surah An-Naml to An-Nas in Tanzil-verified Uthmani text, the complete Arba'in of Imam An-Nawawi, and all 430 hadith of Umdatul-Ahkam parsed from the OpenITI corpus. Nine drill types probe memorization from different directions: single and triple word gaps, continuations, endings, backward recall, identification, collection sequence in both directions, and segment reconstruction. A Leitner spaced-repetition system schedules each item at growing intervals as it strengthens, a scope slider restricts review to what the user has actually memorized, and a color-coded map shows the state of their hifdh at a glance. Normal and Hard modes change distractor difficulty, session length, and which drills join the rotation. Text datasets load lazily so the rest of the app never carries their weight.

Flashcards covers key terms and concepts for review. **Duas** collects essential supplications. **Prayer Times** computes timings from the user's location, and **Calendar** keeps the Hijri dates. **Stories** carries narratives from the seerah and the lives of the righteous. **Tajweed** introduces the rules of recitation.

Spaces is the paid community at ₦2,500 per month, handled through Paystack. Members get threaded discussions across six categories with scholar answers, a weekly highlighted scholar response, and two structured Telegram-based classes: an Arabiyyah programme running from Duruus al-Lughah through Alfiyyah Ibn Malik, and a Hadeeth programme running from the Arba'in through Sahih al-Bukhari, each levelled with curricula, outcomes, and time commitments. The community page shows live countdowns to the weekly class sessions and a pulsing indicator during the class hour.

Authentication runs on Supabase with email confirmation, password visibility toggles, and confirm-password matching at signup. The whole app ships in light and dark themes.

## Tech stack

React with Vite, plain CSS with a shared design system of navy, pastel blue, and Amiri for Arabic text, React Router for navigation, and Supabase for authentication, the community tables, quiz history, and user levels. Payments go through Paystack. Deployment is on Vercel, which redeploys on every push to master.

Client-side state that belongs to a single device, hifdh progress, memorization scope, difficulty preference, and Spaces last-visit tracking, lives in localStorage.

## Project structure

```
src/
├── pages/          One component per route: Home, Disciplines, Discipline,
│                   Quiz, Flashcards, Stories, Duas, Calendar, Tajweed,
│                   Profile, Dashboard, Spaces, PrayerTimes, Hifdh, Auth
├── components/     Shared pieces: Sidebar, QuickActions, Badges
├── data/           Content: the knowledge bases per level, and the hifdh
│                   datasets (hifdh_quran.js, hifdh_nawawi.js,
│                   hifdh_umdah.js) assembled lazily by
│                   hifdh_collections.js
└── lib/            Utilities: supabase client, hijri conversion,
                    prayer time calculation
```

Each page owns a matching CSS file. The hifdh datasets are deliberately kept out of the main bundle through dynamic imports.

## Running locally

```bash
npm install
npm run dev
```

The app expects a Supabase project. Create a `.env` file with:

```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Supabase tables in use: `profiles` (badge ids), `quiz_history`, `user_levels`, `subscriptions`, `spaces_posts`, and `spaces_replies` (with an `is_scholar_answer` flag). Row-level security restricts reads and writes appropriately; published community content is member-gated by subscription status.

## Text sources and integrity

The religious texts in this app are treated with more care than ordinary content, and none of the large corpora were typed by hand.

The Qur'an text is the Tanzil project's verified Uthmani text, obtained through the risan/quran-json dataset and assembled by script. Umdatul-Ahkam was parsed programmatically from the OpenITI corpus digitization of the Shamela edition edited by Mahmud al-Arna'ut, with the editor's vocabulary glosses excluded so students drill the matn itself, and three misprinted hadith numbers in the source edition corrected against the book's sequence. The Arba'in An-Nawawiyyah matns and all Q&A content were authored for the app and reviewed against printed sources.

Extending the Qur'an collection is a one-line change to the fetch range in the generation script; hifdh progress is keyed to mushaf surah numbers and hadith numbers, so extensions never disturb anyone's saved progress.

If you find an error in any text, correction is welcomed and treated as urgent.

## Related repositories

The static marketing site (landing pages, disciplines overview, and the blog with its build-blog.js index generator) is maintained separately and deploys to usesual.com.

## Author

Built by Abdulsamad Yusuf (Kaatib Yusuf) under the Himaayah umbrella, for the students of Islamic knowledge. Free forever at its core.

بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم