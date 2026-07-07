# Sual Email System — Documentation

### Broadcasts, triggered emails, and how to use them

This document covers the email infrastructure built for Sual: how it's wired, what each piece does, how to send a broadcast (to app users or to an external list), and the gotchas we hit while building it, so the next person doesn't repeat them.

---

## Architecture

Resend handles actual delivery. Supabase Edge Functions are the backend that calls Resend -- no separate server needed, since the app already runs on Supabase.

Two Resend API keys are in use, deliberately kept separate:
- The original key powering the existing signup confirmation and welcome email, set up earlier and left untouched by this work.
- `BROADCAST_RESEND_KEY` -- a second, dedicated key used only by the broadcast and reminder functions below. Keeping it separate means either key can be revoked independently without affecting the other feature.

One more secret exists purely for access control:
- `BROADCAST_SECRET` -- a random string we invented ourselves (not from Resend or Supabase). Every broadcast/reminder function checks that incoming requests include this exact value before doing anything, so only someone who knows it can trigger a send.

`SUPABASE_SERVICE_ROLE_KEY` is **not** manually set -- Supabase auto-injects it (and `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_DB_URL`) into every Edge Function automatically. Secret names starting with `SUPABASE_` are reserved and Supabase will refuse to let you set them yourself.

---

## The four Edge Functions

All live under `supabase/functions/`, one folder per function, each with its own `index.ts`.

### `send-email`
Generic single-recipient sender. Takes `{ to, subject, html }` and calls Resend. Used internally by the welcome-email flow. Rarely called directly.

### `send-broadcast`
Sends one email to **every registered Sual user**. Pulls the full user list from Supabase's admin API (`auth.admin.listUsers`), then sends via Resend using the bcc pattern -- one email, all recipients hidden from each other -- batched to respect Resend's recipient cap.

Trigger with a POST request containing `{ secret, subject, html }`.

### `send-list-broadcast`
Sends one email to a list of addresses you supply directly -- for people who aren't Sual users yet (e.g. an exported Google Docs waitlist). Same batching and sending logic as `send-broadcast`, but takes `{ secret, subject, html, emails: [...] }` instead of pulling from Supabase. Automatically filters out blank lines and anything that doesn't look like a valid email address.

### `hifdh-reminder`
Finds every user with hifdh items due for review (`hifdh_progress` table, `due_at` in the past) and emails each one individually, nudging them back to the Hifdh Simulator. Designed to run daily via a scheduled job (`pg_cron`), not triggered manually. This is also the template for any future automatic email -- copy its shape, swap the query for whatever condition matters (inactive a week, subscription expiring, etc.).

---

## Critical: the Resend batch limit

Resend caps recipients at 50 per request, and this cap applies to `to` + `bcc` combined, not `bcc` alone. Since our functions always put one address in `to` (the visible sender-facing address) and the rest in `bcc`, the real safe batch size is:

```
BATCH_SIZE = 49
```

Getting this wrong doesn't fail loudly and stop everything -- it fails per-batch, so you'll see partial results like `{"sent": 14, "failed": 50}` in the response, which is exactly what pointed us to the bug. Always check `sent` against `totalUsers`/`totalValid` in the response, not just the HTTP status.

---

## Sending a broadcast to all app users

1. Write or edit an HTML email file (see the two templates already in the repo: `sual-launch-email.html`, `sual-launch-email-2.html`, both self-contained, inline-styled, matching the brand -- navy header, white body, blue pill CTA, سُؤَال wordmark).
2. Open `send-broadcast.js` (project root). Edit the top three lines: `SECRET` (your `BROADCAST_SECRET`), `SUBJECT`, `HTML_PATH`.
3. Run:
   ```
   node send-broadcast.js
   ```
4. Check the response: `{"totalUsers": N, "sent": N, "failed": 0}` means it fully went out.

## Sending to an external list (not yet in Supabase)

1. Export the list as plain text (Google Docs: File -> Download -> Plain Text) and save it as `emails.txt` at the project root -- one email per line, or comma-separated, doesn't matter, the script cleans it up.
2. Open `send-list-broadcast.js`. Edit `SECRET`, `SUBJECT`, `HTML_PATH`, and `EMAILS_PATH`.
3. Run:
   ```
   node send-list-broadcast.js
   ```
4. Check the response the same way: `totalProvided` (raw lines found) vs `totalValid` (after filtering junk) vs `sent`/`failed`.

`emails.txt` must never be committed to git. It's real people's addresses. It's listed in `.gitignore`; keep it that way, and treat any future exported list file the same way.

---

## Deploying or changing a function

Any code edit to a function requires redeploying it before the change takes effect:

```
supabase functions deploy <function-name> --no-verify-jwt
```

The `--no-verify-jwt` flag is required for these functions since they're triggered by our own scripts with a custom secret, not by logged-in app users with a Supabase auth token.

Secrets are set once and persist across deploys:
```
supabase secrets set SECRET_NAME=value
supabase secrets list      # confirms names only, never values
```

---

## Setting up the daily hifdh reminder (not yet turned on)

`hifdh-reminder` is deployed and tested but **not yet scheduled**. To turn it on:

1. In the Supabase SQL Editor, enable the `pg_cron` and `pg_net` extensions if not already on (Database -> Extensions).
2. Run the scheduling SQL (see `hifdh_reminder_cron.sql`), which calls the function once a day via `pg_cron`.
3. Test the function manually with curl/Postman a few times first -- since this reaches real students automatically once scheduled -- before trusting the cron job.

---

## Lessons learned (so the next round goes faster)

- PowerShell's `ConvertTo-Json` mangles HTML containing Arabic/Unicode text and can silently produce invalid JSON that only fails deep inside the request body (we hit this at "position 587" -- right where the Arabic wordmark sits). Use Node with `JSON.stringify` instead for anything with non-ASCII content -- it handles Unicode correctly and natively. This is why `send-broadcast.js` and `send-list-broadcast.js` are Node scripts rather than PowerShell one-liners.
- Match secret names exactly between Supabase and function code. A function reading `Deno.env.get('RESEND_API_KEY')` when the secret was actually set as `BROADCAST_RESEND_KEY` fails with a confusing downstream error (an "invalid API key" from Resend, or occasionally a raw 500), not a clear "secret not found."
- Never assume `SUPABASE_SERVICE_ROLE_KEY` needs to be set manually -- it's auto-injected and Supabase will actively reject you trying to set anything prefixed `SUPABASE_`.
- API keys pasted into a chat, terminal screenshot, or any shared channel should be treated as compromised and rotated immediately, even if the command that used them failed. We went through this rotation more than once during this build.
- Windows/OneDrive Desktop redirection -- file paths like `C:\Users\<name>\Desktop\...` may not exist if OneDrive has redirected Desktop to `C:\Users\<name>\OneDrive\Desktop\...`. When a file "isn't found" despite being saved, check for this before assuming a typo.

---

This document covers the email/broadcast system only. See the main project README for the app as a whole.