# Sual (سُؤَال)

Sual is a free Islamic knowledge platform: a structured curriculum across seven Islamic
disciplines, a Qur'an and hadith memorization simulator, a paid community layer (Spaces),
and a wide set of supporting tools built around them. It runs at
[app.usesual.com](https://app.usesual.com), is also published to the Google Play Store as
a Trusted Web Activity (package `com.usesual.app`), and is the first product under
Himaayah, a long-term multi-sector organization spanning education, healthcare,
technology, and philanthropy.

Free at its core, by design, indefinitely.

## Stack and architecture

- **Frontend:** React + Vite, deployed to Vercel
- **Backend:** Supabase (Postgres with Row Level Security, Auth, Edge Functions, Storage)
- **Payments:** Paystack, initialized and confirmed entirely server-side, never trusted
  from the client at any step
- **Transactional email:** Resend, driven through a Supabase Edge Function broadcast
  system
- **Push notifications:** Web Push, configured via VAPID keys
- **Android packaging:** Bubblewrap (Trusted Web Activity), currently targeting Android
  16 (API level 36) per Google Play's current requirement
- **Marketing site:** a separate static site at usesual.com, nine HTML pages sharing one
  design system and a brand guidelines PDF, independent of the main app's build

### Design system

Brand colors are locked to Navy (`#094570`) and Sky Blue (`#85CCFF`). Dark mode is
applied via a `[data-theme="dark"]` attribute on `<html>`, not a separately maintained
dark theme. Arabic typography goes through dedicated `.arabic` / `.arabic-lg` classes
that are not meant to be overridden per-component, so any UI work involving Arabic text
should reuse these rather than reintroduce font handling locally.

### Edge functions (Supabase)

- `initialize-payment`: starts a Paystack transaction for Spaces, Book Quiz, or the
  Tajweed Course. Amount and reference are both derived server-side from a whitelisted
  plan name the client sends; the client never sets or influences the amount charged.
- `paystack-webhook`: receives Paystack's `charge.success` callback, verifies the
  `x-paystack-signature` header (HMAC-SHA512 against the raw request body) before doing
  anything else, and writes subscription activation using the service role key, which
  bypasses RLS by design.
- `hifdh-voice-check`: transcribes a spoken recitation via `gpt-4o-mini-transcribe` and
  checks it against the expected passage text, word-overlap based. Rate-limited per user
  per day via `HIFDH_VOICE_DAILY_CAP`.
- `exam-portal`: grades weekly/structured tests.
- `send-broadcast` / `send-list-broadcast`: the email broadcast system, via Resend.

### Key database tables

Beyond the obvious (`profiles`, `admins`), the tables most relevant to how access control
actually works:

- `subscriptions`: Spaces subscription status (`status`, `plan`, `expires_at`). Read-only
  for the owning user; all writes go through the Paystack webhook.
- `spaces_posts`, `spaces_replies`: community content, gated by actual subscription
  status via an `is_paid_member()` check, not just policy naming. `is_scholar_answer`
  (replies) and `is_admin_reply` (majlis) are not set through any client-facing insert
  path.
- `majlis_posts`, `majlis_replies`: moderator-authored discussion threads; only replies
  are member-writable, by design, not by omission.
- `user_levels`: a user's current curriculum level. Read-only for the owning user; writes
  go through `request_level_up()`, a Postgres function that checks `quiz_history`
  per-discipline before allowing an upgrade.
- `quiz_history`: `user_id`, `discipline`, `score`, `total`, `percentage`, `taken_at`.
  This is what level-up validation and quiz-count tracking both read from.
- `hifdh_progress`: per-item Leitner box state for the Hifdh Simulator, migrated from an
  earlier localStorage-only implementation.
- `hifdh_voice_checks`: used only to enforce the daily voice-check cap.
- `track_purchases`, `book_quiz_subscriptions`, `tajweed_subscriptions`: read-only for
  regular users, correctly, from the start; no write policy has ever existed for these.
- `referral_free_access`, `coin_transactions`: back the referral and rewards system.
- `circle_memberships`: membership records for Spaces circles.

## Core features

### Knowledge Base (LMS)

Structured content and quizzes across seven disciplines: Fiqh, Seerah, Arabiyyah, Usul
al-Fiqh, Sarf, Nahw, and Tafseer, organized into Beginner, Intermediate, and Advanced
levels. Quiz distractors use length-aware selection, so wrong options read as genuinely
plausible rather than obviously wrong by their length or phrasing alone.

Progressing to Intermediate or Advanced requires a real quiz-performance threshold, 70%
average to leave Beginner, 75% to leave Intermediate, checked per-discipline against
`quiz_history`, server-side, before the level change is written.

### Hifdh Simulator

A dedicated memorization review tool, separate from LMS quizzes, currently covering:

- The Qur'an, Surah An-Naml through An-Nas
- The complete 42 Hadith of Imam an-Nawawi
- Umdatul-Ahkam (the Hifdh Simulator's own memorization dataset for this collection,
  distinct from the separate LMS knowledge-base dataset of the same underlying source
  text described below)

Review sessions draw from nine distinct drill types: single word gap, triple word gap,
continuation, endings, backward recall, identification, collection sequence (forward and
reverse), and segment reconstruction. Segment reconstruction and collection sequence
share one "tap pieces into the correct order" interaction; the rest are either multiple
choice or typed recall.

Per-item progress uses a Leitner-style spaced repetition scheduler in Supabase. Users set
their memorization scope non-contiguously, tapping any combination of surahs (via a Juz
picker) or individual hadith, rather than being limited to a single contiguous range.
Hadith collections with a natural chapter grouping (Umdatul-Ahkam) present that scope
picker grouped by chapter, with a whole-chapter toggle, rather than as one flat list of
hundreds of items.

Recitation can be typed or spoken. Spoken answers are transcribed server-side and
compared against the expected text with Arabic-aware normalization: diacritics are
stripped and equivalent letter forms are folded together, including alef wasla (ٱ,
U+0671), the character Tanzil's Uthmani Qur'an text uses for the definite article and
hamzat-wasl forms. This normalization is duplicated deliberately in both the client
(typed-answer comparison) and the edge function (voice comparison), and both copies are
meant to be kept identical. Voice checking is intentionally not offered for the backward
recall drill, since the current grading method is word-overlap based, not order-
sensitive, and order is the entire point of that specific drill; offering voice there
would silently accept answers recited in the wrong direction.

Wrong answers show a word-level diff (via an LCS alignment) against the correct passage,
rather than just restating it undifferentiated. A session ending with any misses offers
a "review missed items" round using a different question type than what was missed; this
practice round does not touch the spaced-repetition schedule, since scoring it the same
way as a real due-review would risk double-counting a single lapse.

### Spaces

A paid community layer: circles, majlis, an accountability-partner system, and a general
post/reply feed with scholar-answer flagging. Plans are monthly, annual, or lifetime.
Both read and write access to Spaces content are gated in Postgres against actual,
current subscription status, not left to client-side checks alone; the client-visible
`isPaid` flag used for UI purposes is explicitly not treated as a security boundary
anywhere in the codebase.

### Other products and tools

- **Book Quiz** and **Tajweed Course**, separate paid subscriptions with their own
  Paystack plans and pricing
- **Stories of the Prophets**, covering 25 prophets
- **Islamic Calendar**
- Qur'an reading, Duas, Flashcards, Exam Prep, Leaderboard, a Kids section, and an
  onboarding flow (Journey)
- A referral system with dedicated free-access grants, separate from paid subscriptions
- A coins/rewards system tied to activity and referrals
- Web push notifications

## Content sourcing and integrity

Qur'an text is sourced from Tanzil's verified Uthmani script. Hadith content used in the
Hifdh Simulator and the LMS is sourced from established hadith databases and cross-
checked against named collections, restricted to Bukhari and Muslim specifically for the
Hifdh Simulator's core content, rather than generated from unaided recall at any point.
Content correctness is treated as a first-class bug category, not a cosmetic one; a
mistake in religious source text is a different order of problem than a UI bug.

The LMS's separate Umdatul-Ahkam knowledge-base dataset (used for quiz content, distinct
from the Hifdh Simulator's own memorization dataset of the same underlying book) is a
known work in progress, not a finished dataset. See Known issues below.

## Security posture

RLS policies are audited periodically rather than assumed correct by default. Real gaps
found and fixed so far, kept here for context on what "secure" actually means in this
codebase, not as a changelog:

- `subscriptions` was previously writable by its own owner to any value, meaning a user
  could have granted themselves an active paid subscription with no real payment. Fixed
  by removing all client write access; only the signature-verified Paystack webhook,
  running with the service role key, can write to this table now.
- `spaces_posts` / `spaces_replies` previously had no real subscription check on either
  read or write, despite policy naming implying one. Fixed with a shared
  `is_paid_member()` check applied to both.
- `user_levels` previously allowed a client to set any level directly, with no check of
  the stated quiz-performance requirement. Fixed by routing all writes through
  `request_level_up()`.
- An earlier, separate bug allowed Spaces subscriptions to be activated via a client-
  controlled URL parameter; this predates and is unrelated to the RLS-level fixes above,
  and was fixed independently.
- Paystack plan-vs-amount spoofing was specifically investigated (given the concern that
  a client-influenced reference string could claim a cheaper plan than what was actually
  paid) and found not to be exploitable, since `initialize-payment` derives amount and
  reference together, server-side, from the same validated plan value, in the same
  request.
- Stored XSS in Spaces content rendering was checked across every render path (posts,
  replies, majlis, circles, accountability chat) and confirmed clean; all user content
  goes through plain JSX interpolation, never raw HTML injection.

Known, deliberately deferred, low-severity items: webhook signature comparison is not
constant-time, and there is no idempotency key on webhook processing, meaning a Paystack
retry could in principle double-send a welcome email or double-increment a renewal
counter. Neither is a path to unauthorized access; both are data-accuracy nits, not
security holes.

## Known issues currently open

These are not resolved. Listed here plainly so they don't get assumed fixed by omission:

- **Streak / quiz-count tracking**: a user has reported their study streak reducing on
  its own and their quiz-taken count not updating. This has not yet been diagnosed. A
  previously fixed, unrelated bug involved a `taken_at` vs `created_at` column mismatch
  silently breaking quiz tracking; whether this new report is a recurrence, a regression
  in a different write path, or something else entirely has not been established, and
  should not be assumed without actually reviewing the relevant code.
- **Android app icon**: the app icon and splash screen were recently redesigned with a
  transparent-background source asset (confirmed via direct alpha-channel inspection of
  the delivered file, not just a visual check). The maskable variant with proper
  safe-zone padding, required so the icon isn't clipped by adaptive-icon cropping on
  various Android launchers, is still pending from design.
- **Umdatul-Ahkam LMS dataset**: currently 96 of roughly 500 entries populated. Every
  entry is sourced from real hadith databases and cross-checked to Bukhari or Muslim
  specifically, never drafted from memory, but every entry is still flagged
  `verified: false` pending an actual check against a print edition, and the hadith
  numbering in several chapters is known not to match the real book's order yet.

## Development notes

- The Supabase project is managed via the Supabase CLI.
- The Android build (Bubblewrap) lives in a separate project directory from the web app.
  Web app changes go live on the next Vercel deploy and generally require no Android
  rebuild at all, since the Trusted Web Activity just loads the live site. A rebuild is
  only needed when the PWA manifest, icons, or `twa-manifest.json` itself changes, or for
  a routine Play Store version bump.
- `targetSdkVersion` and `compileSdkVersion` in `android/app/build.gradle` are two
  separate settings. Bubblewrap's own template has historically lagged behind Google's
  annual target-API requirement, sometimes updating one setting before the other, so this
  is worth checking directly after any `bubblewrap update` rather than assumed current.
- Google Play version codes, once uploaded successfully, can never be reused, even for a
  draft or inactive release; keep `appVersionCode` moving forward only.