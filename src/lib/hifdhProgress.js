// src/lib/hifdhProgress.js
//
// Wraps the pure Leitner logic in spacedRepetition.js with a
// Supabase-backed store, so hifdh progress follows the account
// rather than the device. localStorage stays as a live mirror:
// every save writes to both, and reads fall back to it if Supabase
// is unreachable, so the app keeps working offline.
//
// First-sync migration: if an account has local progress but no
// rows yet in hifdh_progress for a given collection, that local
// progress is pushed up once rather than the account silently
// starting the collection over at zero.

import { supabase } from './supabase.js'
import { storageKey, loadProgress as loadLocal, saveProgress as saveLocal } from './spacedRepetition.js'

const LOCAL_PREFIX = 'sual-hifdh'

export async function getHifdhProgress(user, collectionId) {
  const localKey = storageKey(LOCAL_PREFIX, collectionId)
  const local = loadLocal(localKey)

  if (!user) return local // signed out / no account to sync to

  try {
    const { data, error } = await supabase
      .from('hifdh_progress')
      .select('item_key, box, due')
      .eq('user_id', user.id)
      .eq('collection_id', collectionId)

    if (error) throw error

    if ((!data || data.length === 0) && Object.keys(local).length > 0) {
      await pushProgress(user, collectionId, local)
      return local
    }

    const remote = {}
    ;(data || []).forEach(row => {
      remote[row.item_key] = { box: row.box, due: row.due }
    })
    return remote
  } catch (err) {
    console.error('Hifdh progress sync failed, falling back to local copy:', err)
    return local
  }
}

export async function saveHifdhProgress(user, collectionId, progress) {
  // Always mirror locally first — this must never fail silently,
  // since it's the offline fallback.
  saveLocal(storageKey(LOCAL_PREFIX, collectionId), progress)
  if (!user) return
  await pushProgress(user, collectionId, progress)
}

async function pushProgress(user, collectionId, progress) {
  const rows = Object.entries(progress).map(([item_key, entry]) => ({
    user_id: user.id,
    collection_id: collectionId,
    item_key,
    box: entry.box,
    due: entry.due,
  }))
  if (rows.length === 0) return
  const { error } = await supabase
    .from('hifdh_progress')
    .upsert(rows, { onConflict: 'user_id,collection_id,item_key' })
  if (error) console.error('Failed to sync hifdh progress to Supabase:', error)
}

// Used by Journey to summarize across every collection at once
// without each page needing to know the sync details.
export async function getAllHifdhProgress(user) {
  if (!user) return {}
  try {
    const { data, error } = await supabase
      .from('hifdh_progress')
      .select('collection_id, item_key, box, due')
      .eq('user_id', user.id)
    if (error) throw error
    const byCollection = {}
    ;(data || []).forEach(row => {
      if (!byCollection[row.collection_id]) byCollection[row.collection_id] = {}
      byCollection[row.collection_id][row.item_key] = { box: row.box, due: row.due }
    })
    return byCollection
  } catch (err) {
    console.error('Failed to load hifdh progress for Journey:', err)
    return {}
  }
}