// Kurogane Core Data Definitions
const baseUrl = import.meta.env.BASE_URL || '/Kurogane/';
export const resolveAsset = (path) => {
  const base = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  const clean = path.startsWith('/') ? path.slice(1) : (path.startsWith('./') ? path.slice(2) : path);
  return base + clean;
};

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
    image: resolveAsset('assets/chassis_tsubaki.png'),
    thumb: resolveAsset('assets/thumb_tsubaki.png'),
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
    image: resolveAsset('assets/chassis_ironmask.png'),
    thumb: resolveAsset('assets/thumb_ironmask.png'),
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
    image: resolveAsset('assets/chassis_shiro.png'),
    thumb: resolveAsset('assets/thumb_shiro.png'),
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
    id: 'raijin-x',
    name: 'RAIJIN-X ARC CAUTER',
    damage: 65,
    description: 'Overcharges shields until they crack from the inside.'
  },
  {
    id: 'orochi-rail',
    name: 'OROCHI HEAVY RAILGUN',
    damage: 96,
    description: 'Hyper-velocity solid tungsten slug. Penetrates armor and whatever is behind it.'
  },
  {
    id: 'kuro-edge',
    name: 'KURO-EDGE HIGH-FREQUENCY KATANA',
    damage: 74,
    description: 'Vibrates at molecular frequency to slice through composite chassis plating.'
  },
  {
    id: 'hail-flare',
    name: 'HAIL-FLARE INCENDIARY ROCKET POD',
    damage: 81,
    description: 'Fires high-density thermite cluster rockets to suppress and melt extraction zones.'
  }
];

export const telemetryItems = [
  { label: 'EXTRACTION ZONE DENSITY', value: '47%', sub: 'ELEVATED THREAT LEVEL' },
  { label: 'FRAME BOND FAILURE RATE', value: '0.04%', sub: 'WITHIN SPEC' },
  { label: 'CORRUPTED MEMORY BLOCKS', value: '182 TB', sub: 'LOGGED THIS CYCLE' },
  { label: 'SIGNAL LATENCY TO RELAY', value: '11ms', sub: 'OPTIMAL CARRIER LOCK' }
];

export const specificationProtocols = [
  { title: 'DIRECT LINK', desc: 'Neural lace bond. Sub-millisecond reaction times with zero motor latency.' },
  { title: 'COLD-IRON HULL', desc: 'Non-conductive exterior plating invisible to standard magnetic resonance.' },
  { title: 'EXTRACTION LOCK', desc: 'Once inside the ash, you do not leave until your core is retrieved or crushed.' },
  { title: 'TOTAL SALVAGE', desc: 'Every frame downed is open to claim by whoever reaches the chassis first.' }
];
