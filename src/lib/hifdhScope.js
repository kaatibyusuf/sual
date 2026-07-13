// src/lib/hifdhScope.js
//
// A user's declared memorization scope per collection, now a SET of
// individually memorized item keys rather than a single "up to here"
// boundary — needed because real memorization order often isn't
// contiguous from the start of a collection (Juz Amma first, then
// working backward or jumping around, is extremely common).
//
// null (no rows at all for this user/collection) means unrestricted
// — the full collection is shown — same meaning as before this
// existed. An empty, explicitly-set set means "declared nothing yet,
// only review what I check off," which is a real, different state
// from "haven't engaged with this at all."

import { supabase } from './supabase.js'

export async function getScopeSet(user, collectionId) {
  if (!user) return null
  try {
    const { data, error } = await supabase
      .from('hifdh_scope_items')
      .select('item_key')
      .eq('user_id', user.id)
      .eq('collection_id', collectionId)
    if (error) throw error
    if (!data || data.length === 0) return null
    return new Set(data.map(r => r.item_key))
  } catch (err) {
    console.error('Failed to load hifdh scope items:', err)
    return null
  }
}

// Replaces the entire set for this collection with exactly the given
// item keys. Simpler and safer than diffing add/remove — the caller
// always has the full intended set in hand already (it's just local
// state), so a clear-then-insert avoids any drift between client and
// server state.
export async function setScopeSet(user, collectionId, itemKeys) {
  if (!user) return
  try {
    const { error: delError } = await supabase
      .from('hifdh_scope_items')
      .delete()
      .eq('user_id', user.id)
      .eq('collection_id', collectionId)
    if (delError) throw delError

    if (itemKeys.length === 0) return // empty set — nothing to insert, deletion above is enough

    const rows = itemKeys.map(item_key => ({ user_id: user.id, collection_id: collectionId, item_key }))
    const { error: insError } = await supabase.from('hifdh_scope_items').insert(rows)
    if (insError) throw insError
  } catch (err) {
    console.error('Failed to save hifdh scope items:', err)
  }
}

// Back to fully unrestricted — removes every row for this collection.
export async function clearScopeSet(user, collectionId) {
  if (!user) return
  const { error } = await supabase
    .from('hifdh_scope_items')
    .delete()
    .eq('user_id', user.id)
    .eq('collection_id', collectionId)
  if (error) console.error('Failed to clear hifdh scope items:', error)
}