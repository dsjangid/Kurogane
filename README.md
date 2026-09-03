# KUROGANE 黑鉄 — Tactical Extraction Mech Combat

An exact replication of the **Kurogane** desktop gaming landing page, built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Left Sticky Rail Navigation**: Tracks scroll section progression from `01` to `06` with Japanese Kanji `黑鉄` and active HUD box.
- **Top System Status Bar**: Displays current sector code (`01 // DEPLOYMENT`, `02 // MANIFEST`, etc.) and pulsating `SERVERS ONLINE · BUILD 0.8.4.4` status.
- **Section 01 // DEPLOYMENT (Hero)**:
  - Big typographic title `KUROGANE`.
  - Tactical extraction parameters (`GENRE: TACTICAL EXTRACTION`, `SQUAD: 5 v 5`, `PLATFORMS: PC / PS5 / XSX`, `DEPLOY: 11:24:28`).
  - Live Feed monitor card with Ashfall Sector 07 character visual, scanlines, and red corner brackets.
  - Quick chassis dock selector (`TSUBAKI`, `IRONMASK`, `SHIRO`).
- **Section 02 // MANIFEST (Light Editorial Canvas)**:
  - High-contrast color palette flip to `#eae8e3`.
  - Editorial Bushidō code typography.
  - 4 Numbered manifesto cards (`01 Permanent Loss`, `02 Bonded Pilots`, `03 A Map That Moves`, `04 No Two Frames`).
  - Full-length straw hat Ronin character plate illustration.
- **Section 03 // FRAMES (Chassis Selection)**:
  - 3-column chassis cards (`TSUBAKI`, `IRONMASK`, `SHIRO`).
  - Animated 10-segment HUD stat bars for Speed, Armor, and Range.
- **Section 04 // ARSENAL (Weapon Loadout)**:
  - Forged blades weapon rack visual with laser sighting overlay.
  - Interactive weapon damage index (`TSUKI-9`, `KAMA-3`, `ORIBE`, `HENMA`) with damage metrics.
- **Section 05 // TELEMETRY (Live Field Data)**:
  - Dynamic SVG spline curve with crimson gradient glow.
  - Real-time closed beta stats (`240,118 Duels`, `1:48 Avg Length`, `38.2% Extraction`, `1.2M Frames Lost`).
- **Section 06 // ACCESS (CTA & Torii Gate Arena)**:
  - Misty Torii gate arena card with dueling samurai mechs.
  - `DEPLOY NOW` and `WATCH THE TRAILER` action triggers.
- **Footer**:
  - Studio information, 3-column navigation (`GAME`, `HELP`, `STUDIO`), and huge background watermark `KUROGANE`.

## Running the Project

```bash
cd /Users/meydivyansh/kurogane
npm run dev
```

Server is available at: [http://localhost:5173](http://localhost:5173)
