// src/data/hifdh_collections.js
// Registry of Hifdh Simulator collections. Add new collections here
// (e.g. full Juz Amma, Umdatul-Ahkam) and the simulator picks them up
// automatically — no engine changes needed.

import { NAWAWI_HADITH, NAWAWI_TOTAL } from './hifdh_nawawi.js'
import { QURAN_ITEMS } from './hifdh_quran.js'

export const COLLECTIONS = [
  {
    id: 'quran-starter',
    title: 'Qur\'an',
    arabicTitle: 'القُرْآن',
    subtitle: 'The last ten surahs — Al-Fil to An-Nas',
    icon: '📖',
    itemNoun: 'surah',
    itemNounPlural: 'surahs',
    collectionName: 'the mushaf',
    total: 10,
    items: QURAN_ITEMS.map(s => ({
      num: s.num,
      label: s.label,
      meta: s.meta,
      arabic: s.arabic,
    })),
  },
  {
    id: 'nawawi',
    title: 'Hadeeth',
    arabicTitle: 'الحَدِيث',
    subtitle: 'Al-Arba\'oon An-Nawawiyyah',
    icon: '📜',
    itemNoun: 'hadith',
    itemNounPlural: 'hadith',
    collectionName: 'the Arba\'in',
    total: NAWAWI_TOTAL,
    items: NAWAWI_HADITH.map(h => ({
      num: h.num,
      label: `Hadith ${h.num}`,
      meta: `${h.narrator} · ${h.source}`,
      arabic: h.arabic,
    })),
  },
]