import { supabase } from './supabase.js'

const VAPID_PUBLIC_KEY = 'BGTqvQVFD82cAF_BvCjZEPzxgcQJPsYJ16zgHfJ9dJargnzGHn0tlTJ__lYoTMX39_7Z5ini1k9qa03C_PhWmok'

// Converts the base64url VAPID key into the raw byte array the
// PushManager API expects.
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)))
}

export function isPushSupported() {
  return typeof window !== 'undefined'
    && 'serviceWorker' in navigator
    && 'PushManager' in window
    && 'Notification' in window
}

export async function getPushPermissionState() {
  if (!isPushSupported()) return 'unsupported'
  return Notification.permission // 'granted' | 'denied' | 'default'
}

// Requests permission (if not already decided) and subscribes this
// browser/device to push, saving the subscription against the
// signed-in user. A person can have multiple subscriptions (phone +
// laptop, for instance) — each is its own row, keyed by the unique
// endpoint URL the browser assigns.
export async function subscribeToPush(user) {
  if (!isPushSupported() || !user) return { ok: false, error: 'Push is not supported in this browser.' }

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') {
    return { ok: false, error: 'Notification permission was not granted.' }
  }

  try {
    const registration = await navigator.serviceWorker.ready
    let subscription = await registration.pushManager.getSubscription()
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })
    }

    const json = subscription.toJSON()
    const { error } = await supabase.from('push_subscriptions').upsert({
      user_id: user.id,
      endpoint: json.endpoint,
      keys_p256dh: json.keys.p256dh,
      keys_auth: json.keys.auth,
    }, { onConflict: 'endpoint' })

    if (error) throw error
    return { ok: true }
  } catch (err) {
    console.error('Push subscription failed:', err)
    return { ok: false, error: err.message }
  }
}

export async function unsubscribeFromPush(user) {
  if (!isPushSupported()) return
  try {
    const registration = await navigator.serviceWorker.ready
    const subscription = await registration.pushManager.getSubscription()
    if (subscription) {
      const endpoint = subscription.endpoint
      await subscription.unsubscribe()
      if (user) {
        await supabase.from('push_subscriptions').delete().eq('endpoint', endpoint)
      }
    }
  } catch (err) {
    console.error('Push unsubscribe failed:', err)
  }
}