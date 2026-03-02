# 0x00_sec — Static Landing Page

## Overview
A static landing page for a cybersecurity education platform, built with React + Vite. Advertises upcoming modules and links to a Stripe subscription checkout.

## Architecture
- **Turborepo** monorepo (single app)
- **apps/web** — React 18 + Vite static site (port 5173)
- No backend, no database, no auth

## Commands
- `npm run dev` — Start Vite dev server
- `npm run build` — Build static `dist/` output
- `npm run format` — Format with Prettier

## Key Files
- `apps/web/src/app/App.tsx` — Landing page component (hero, modules, Stripe CTA, footer)
- `apps/web/src/app/main.tsx` — React entry point
- `apps/web/src/app/styles/global.css` — Dark cyber theme variables and global styles

## Stripe
- The subscribe button links to `https://buy.stripe.com/PLACEHOLDER`
- Replace with a real Stripe Payment Link before deploying
