# SaveSweep

**Savings on autopilot.** We sweep the deals. You keep the cash.

SaveSweep automatically finds the best local coupons and cash-back deals every week — so you never miss savings. A SaaS application that scrapes the internet for local and national deals on food — groceries, restaurants, lunch specials, coupons, and cash-back offers.

**Website:** [savesweep.com](https://savesweep.com)

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React
- **CI/CD:** GitHub Actions → GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start local dev server            |
| `npm run build`   | Type-check and build for prod     |
| `npm run lint`    | Run ESLint                        |
| `npm run preview` | Preview production build locally  |

## Deployment

Deployment is automated via GitHub Actions:

- **CI** (`ci.yml`) — Runs lint, type-check, and build on every PR and push to `main`.
- **Deploy** (`deploy.yml`) — When a PR is merged into `main`, the app is automatically built and deployed to GitHub Pages.

## Project Structure

```
src/
├── components/    # Shared UI components (Navbar, Footer, DealCard)
├── data/          # Static deal and region data
├── pages/         # Route-level page components
├── App.tsx        # Root component with routing
├── main.tsx       # Entry point
└── index.css      # Tailwind CSS imports and theme
```
