export const kuroganeSections = [
  { id: '01', code: '01', title: 'DEPLOYMENT', fullTag: '01 // DEPLOYMENT' },
  { id: '02', code: '02', title: 'MANIFEST', fullTag: '02 // MANIFEST' },
  { id: '03', code: '03', title: 'FRAMES', fullTag: '03 // FRAMES' },
  { id: '04', code: '04', title: 'ARSENAL', fullTag: '04 // ARSENAL' },
  { id: '05', code: '05', title: 'TELEMETRY', fullTag: '05 // TELEMETRY' },
  { id: '06', code: '06', title: 'ACCESS', fullTag: '06 // ACCESS' },
];

export const chassisData = [
  {
    id: 'tsubaki',
    name: 'TSUBAKI',
    kanji: '椿',
    class: 'DUELIST',
    image: '/assets/chassis_tsubaki.png',
    thumb: '/assets/thumb_tsubaki.png',
    speed: 8,
    armor: 3,
    range: 4,
    description: 'High-mobility kinetic assault frame specialized in close-quarters edge combat and quick repositioning.'
  },
  {
    id: 'ironmask',
    name: 'IRONMASK',
    kanji: '鉄面',
    class: 'BULLWARK',
    image: '/assets/chassis_ironmask.png',
    thumb: '/assets/thumb_ironmask.png',
    speed: 2,
    armor: 10,
    range: 3,
    description: 'Reinforced ceramic fortress chassis engineered to withstand heavy breaching ordnance and hold extraction choke points.'
  },
  {
    id: 'shiro',
    name: 'SHIRO',
    kanji: '白',
    class: 'GHOST',
    image: '/assets/chassis_shiro.png',
    thumb: '/assets/thumb_shiro.png',
    speed: 7,
    armor: 4,
    range: 9,
    description: 'Stealth reconnaissance platform with thermal masking and long-distance electromagnetic marksman capabilities.'
  }
];

export const weaponsData = [
  {
    id: 'tsuki-9',
    name: 'TSUKI-9 MONOBLADE',
    damage: 42,
    description: 'Single-edge cold steel. Leaves no heat signature.'
  },
  {
    id: 'kama-3',
    name: 'KAMA-3 BREACH CANNON',
    damage: 88,
    description: 'Two shots in the magazine. Both of them final.'
  },
  {
    id: 'oribe',
    name: 'ORIBE SCATTERGUN',
    damage: 81,
    description: "Close work. Built for halls you can't clean."
  },
  {
    id: 'henma',
    name: 'HENMA MARKSMAN',
    damage: 74,
    description: 'Foldable, accurate out to 1.1k.'
  }
];

export const telemetryStats = [
  { label: 'TOTAL DUELS', value: '240,118', change: '+12.4%', positive: true },
  { label: 'AVG DUEL LENGTH', value: '1:48', change: '-5.1%', positive: false },
  { label: 'EXTRACTION RATE', value: '38.2%', change: '+7.5%', positive: true },
  { label: 'FRAMES LOST', value: '1.2M', change: '+15.0%', positive: true },
];

export const manifestoPillars = [
  {
    number: '01',
    title: 'PERMANENT LOSS',
    description: 'Lose the duel and your frame is gone for good. Its parts stay in the world for someone else to pull out of the ash.'
  },
  {
    number: '02',
    title: 'BONDED PILOTS',
    description: 'Scars, reflexes and licenses carry between machines. The hardware does not — you do.'
  },
  {
    number: '03',
    title: 'A MAP THAT MOVES',
    description: 'Volcanic ash shifts extraction routes and opens new ones. Nobody keeps a shortcut for long.'
  },
  {
    number: '04',
    NO: '04',
    title: 'NO TWO FRAMES',
    description: 'Eighteen chassis, each with its own silhouette, weight class and failure state.'
  }
];
