# Normal Sneakers — Interactive 3D Product Experience

An interactive sneaker product experience built with **Three.js, GLSL shaders, and Motion One**, exploring how real-time 3D graphics, custom visual effects, and scroll-driven animation can enhance digital product storytelling.

**[Live Demo](https://normal-sneakers.vercel.app)** · **[GitHub Repository](https://github.com/fisk0/normal-sneakers)**

## Overview

Normal Sneakers is a creative frontend development project that combines 3D rendering, shader programming, and motion design in a browser-based product experience.

The project began as part of a SuperHi Three.js workshop and was extended through additional customization, shader work, and production debugging.

It explores the intersection of **creative technology, interactive design, and frontend engineering**, with a focus on creating expressive, responsive digital product experiences.

## Features

- **Real-time 3D rendering:** Displays a sneaker model in the browser using Three.js.
- **Custom GLSL shader:** Uses a noise-based shader to introduce procedural visual effects.
- **Scroll-driven animation:** Integrates Motion One to connect animation behavior to page scrolling.
- **Post-processing:** Uses Three.js EffectComposer to apply visual effects to the rendered scene.
- **Loading experience:** Includes a loader with progress tracking during asset initialization.
- **Production deployment:** Built with Vite and deployed on Vercel.

## Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Application logic and interactions |
| Three.js | Real-time 3D rendering |
| GLSL | Custom noise shader and visual effects |
| Motion One | Scroll-driven animations |
| EffectComposer | Post-processing pipeline |
| HTML & CSS | Page structure, layout, and styling |
| Vite | Development server and build tooling |
| Vercel | Hosting and deployment |

## Engineering Notes

### Debugging the production loading experience

One of the technical challenges encountered during development was a loading-progress issue that appeared in the production deployment.

The loader relied on progress information from network requests. However, some compressed responses returned by Vercel reported:

```javascript
xhr.total === 0
```

This meant the expected total download size was unavailable, breaking percentage-based progress calculations.

Investigating this issue required understanding the difference between development and production environments and how network response metadata can affect application behavior.

The loading logic was adjusted to handle responses without a reported total size, improving the reliability of the deployed experience.

### Custom shader exploration

The project incorporates a custom GLSL noise shader to explore procedural visual effects.

This work provided an opportunity to experiment with shader-driven rendering and the relationship between visual design and graphics programming.

## Run Locally

**1. Clone the repository**

```bash
git clone https://github.com/fisk0/normal-sneakers.git
```

**2. Navigate into the project**

```bash
cd normal-sneakers
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal (typically `http://localhost:5173`).

## Project Context

This project was developed as part of a **SuperHi Three.js workshop**, with additional customization, shader exploration, and debugging.

It forms part of my ongoing practice at the intersection of creative coding, interactive product experiences, and software engineering.

My broader interests include frontend development, design engineering, real-time graphics, and building digital products that combine technical functionality with thoughtful interaction design.

---

**Created by [Fisayo Ekeng](https://github.com/fisk0)**

