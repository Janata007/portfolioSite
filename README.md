# Jana Markovikj Portfolio Site

Portfolio site built with React 19, React Router and Copilot.

## Tech Stack

- React 19
- React Router v7
- Tailwind/PostCSS tooling
- Framer Motion (`motion`)
- React Icons

## Project Scripts

- `npm start` — runs development server 
- `npm run build` — creates optimized production build
- `npm run serve` — serves production build from `build/`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Open the app in your browser

## Production Build

Create a production build:

```bash
npm run build
```

Serve the built output locally:

```bash
npm run serve
```

## Routes

- `/` — Home
- `/works` — Works / portfolio gallery
- `/comic` — Comic page (image-based scroll reader)

## Project Structure

```text
src/
  App.jsx                  # Route definitions
  index.jsx                # React entry point
  index.css                # Global styles
  components/              # Shared UI (Layout, header/footer/sidebar, etc.)
  pages/                   # Route pages (home, Works, ComicPage)
  PropahUtils/             # Shared constants/config

public/
  images/                  # Site image assets used by pages/components
  comicPages/              # Ordered comic images rendered in ComicPage
```

## Notes

- Build output is generated in the `build/` folder and is ready for static hosting.
