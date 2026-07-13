// src/lib/hifdhScope.js
//
// A user's declared memorization scope per collection — "I've
// memorized up to item number N" — stored in hifdh_scope. No row for
// a given user/collection means unrestricted (the full collection is
// shown), which is the same as today's behavior; the restriction only
// applies once someone actually sets a scope via the slider.

import { supabase } from './supabase.js'

export async function getScope(user, collectionId) {
  if (!user) return null
  try {
    const { data, error } = await supabase
      .from('hifdh_scope')
      .select('scope')
      .eq('user_id', user.id)
      .eq('collection_id', collectionId)
      .maybeSingle()
    if (error) throw error
    return data ? data.scope : null
  } catch (err) {
    console.error('Failed to load hifdh scope:', err)
    return null
  }
}

export async function setScope(user, collectionId, scopeValue) {
  if (!user) return
  const { error } = await supabase
    .from('hifdh_scope')
    .upsert({
      user_id: user.id,
      collection_id: collectionId,
      scope: scopeValue,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,collection_id' })
  if (error) console.error('Failed to save hifdh scope:', error)
}

// null scopeValue means "no restriction" — remove the row entirely
// rather than storing a sentinel, so getScope's null-check stays the
// single source of truth for "unrestricted."
export async function clearScope(user, collectionId) {
  if (!user) return
  const { error } = await supabase
    .from('hifdh_scope')
    .delete()
    .eq('user_id', user.id)
    .eq('collection_id', collectionId)
  if (error) console.error('Failed to clear hifdh scope:', error)
}