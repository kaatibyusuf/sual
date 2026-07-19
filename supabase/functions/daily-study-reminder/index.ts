// supabase/functions/daily-study-reminder/index.ts
//
// Sends one daily push notification to every subscribed user,
// reminding them to take today's quiz, review Hifdh, or otherwise
// study. Triggered by an external cron (cron-job.org, same pattern
// as daily-tafseer-generator), not on a schedule inside this function
// itself.
//
// Push delivery doesn't require the recipient to be online at send
// time — the push service (FCM for Chrome/Android, APNs via web push
// for iOS 16.4+) queues it and delivers whenever the device next has
// connectivity, so "no data right now" doesn't mean the notification
// is lost.
//
// iOS note: push only reaches iPhone users who have actually added
// Sual to their Home Screen (Apple platform restriction, not
// something this code can change) — the AddToHomeScreen banner
// existing and working is a real prerequisite for this feature
// reaching that audience at all.
//
// Deploy:  supabase functions deploy daily-study-reminder --no-verify-jwt
// Secrets: supabase secrets set VAPID_PUBLIC_KEY=...
//          supabase secrets set VAPID_PRIVATE_KEY=...
//          supabase secrets set VAPID_SUBJECT=mailto:hello@usesual.com

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import webpush from 'https://esm.sh/web-push@3.6.7'

const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

webpush.setVapidDetails(
  Deno.env.get('VAPID_SUBJECT') ?? 'mailto:hello@usesual.com',
  Deno.env.get('VAPID_PUBLIC_KEY')!,
  Deno.env.get('VAPID_PRIVATE_KEY')!
)

const MESSAGES = [
  { title: 'Sual', body: "Today's quiz is waiting — a few minutes now keeps the streak alive." },
  { title: 'Sual', body: 'Your Hifdh review is due. A small review today saves a bigger one later.' },
  { title: 'Sual', body: "Today's tafseer verse is up. A minute of reflection before you start your day." },
]

serve(async (req) => {
  try {
    const { data: subs, error } = await supabaseAdmin
      .from('push_subscriptions')
      .select('*')

    if (error) throw error
    if (!subs || subs.length === 0) {
      return new Response(JSON.stringify({ ok: true, sent: 0, message: 'No subscriptions yet.' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
    let sent = 0
    let removed = 0

    for (const sub of subs) {
      const pushSubscription = {
        endpoint: sub.endpoint,
        keys: { p256dh: sub.keys_p256dh, auth: sub.keys_auth },
      }
      try {
        await webpush.sendNotification(pushSubscription, JSON.stringify({ ...message, url: '/' }))
        sent++
      } catch (err: any) {
        // 404/410 means the browser has invalidated this subscription
        // (uninstalled, cleared data, etc.) — clean it up rather than
        // retry it forever on every future run.
        if (err?.statusCode === 404 || err?.statusCode === 410) {
          await supabaseAdmin.from('push_subscriptions').delete().eq('id', sub.id)
          removed++
        } else {
          console.error('Push send failed for subscription', sub.id, err?.message || err)
        }
      }
    }

    return new Response(JSON.stringify({ ok: true, sent, removed, total: subs.length }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('daily-study-reminder failed:', err)
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})