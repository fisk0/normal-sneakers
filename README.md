A 3D product site built with Three.js, GLSL shaders, and Motion One — created in a SuperHi workshop and extended with custom shader work.

🔗 Live site: normal-sneakers.vercel.app

<img width="1512" height="982" alt="Screenshot 2026-07-24 at 4 20 21 pm" src="https://github.com/user-attachments/assets/1f344a36-da81-463d-8d85-50bd327d9df5" />

Features
Real-time 3D sneaker model rendered with Three.js
Custom GLSL noise shader for visual effects
Post-processing via EffectComposer
Scroll-driven animations with Motion One
Loader with progress tracking 

Tech Stack
Tool      | Purpose
 Three.js | 3D rendering |
| GLSL    | Custom noise shader 
| Motion One | Scroll animations 
| Vite    | Build tooling 
| Vercel  | Deployment


## Run Locally

```bash
git clone https://github.com/fisk0/normal-sneakers.git
cd normal-sneakers
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Notes

Built as part of a SuperHi Three.js workshop, with additional debugging and customization — including resolving a production-only loader bug where Vercel's compressed responses return `xhr.total = 0`, breaking percentage-based load progress.

---

Made by [Fisko](https://github.com/fisk0) — creative technologist working across WebGL, TouchDesigner, and live visuals.
