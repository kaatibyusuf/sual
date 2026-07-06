// src/data/hifdh_collections.js
// Registry of Hifdh Simulator collections. Add new collections here
// and the simulator picks them up automatically — no engine changes needed.
//
// `key` is the STABLE progress identifier: mushaf surah number for
// Qur'an, hadith number for the hadith collections. Extending a
// collection never disturbs saved progress.

import { NAWAWI_HADITH, NAWAWI_TOTAL } from './hifdh_nawawi.js'
import { QURAN_ITEMS } from './hifdh_quran.js'
import { UMDAH_HADITH } from './hifdh_umdah.js'

export const COLLECTIONS = [
  {
    id: 'quran-starter',
    title: 'Qur\'an',
    arabicTitle: 'القُرْآن',
    subtitle: 'An-Naml to An-Nas',
    icon: '📖',
    itemNoun: 'surah',
    itemNounPlural: 'surahs',
    collectionName: 'the mushaf',
    total: 57,
    items: QURAN_ITEMS.map(s => ({
      key: 'q' + s.surah,
      num: s.num,
      label: s.label,
      meta: s.meta,
      arabic: s.arabic,
    })),
  },
  {
    id: 'nawawi',
    title: 'Arba\'in An-Nawawi',
    arabicTitle: 'الأَرْبَعُون',
    subtitle: 'The Forty Hadith of Imam An-Nawawi',
    icon: '📜',
    itemNoun: 'hadith',
    itemNounPlural: 'hadith',
    collectionName: 'the Arba\'in',
    total: NAWAWI_TOTAL,
    items: NAWAWI_HADITH.map(h => ({
      key: 'h' + h.num,
      num: h.num,
      label: `Hadith ${h.num}`,
      meta: `${h.narrator} · ${h.source}`,
      arabic: h.arabic,
    })),
  },
  {
    id: 'umdah',
    title: 'Umdatul-Ahkam',
    arabicTitle: 'عُمْدَةُ الأَحْكَام',
    subtitle: 'All 430 legal hadith agreed upon by Bukhari & Muslim',
    icon: '⚖️',
    itemNoun: 'hadith',
    itemNounPlural: 'hadith',
    collectionName: 'Umdatul-Ahkam',
    total: 430,
    items: UMDAH_HADITH.map(h => ({
      key: 'u' + h.num,
      num: h.num,
      label: `Hadith ${h.num}`,
      meta: h.meta,
      arabic: h.arabic,
    })),
  },
]