# HammadDevx Portfolio

A modern developer portfolio built for HammadDevx. The site showcases AI SaaS work, Web3 security projects, MQL5 trading systems, product engineering services, GitHub activity, testimonials, and a responsive dual-theme UI.

## Stack

- React 19
- CRACO
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
fullstack-ai-saas-portfolio/
├─ frontend/
│  ├─ public/
│  ├─ src/
│  ├─ package.json
│  └─ README.md
├─ package.json
└─ README.md
```

## Features

- Modern hero section with responsive layout and live product badge
- Light and dark mode support
- Services, project showcase, GitHub activity, testimonials, process, and CTA sections
- Responsive layout optimized for phones, tablets, and desktop screens
- Custom SVG favicon

## Getting Started

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open `http://localhost:3000`

## Build

Create a production build from the `frontend` directory:

```bash
npm run build
```

## Notes

- The active app in this repository is the frontend portfolio under `frontend/`.
- The favicon is defined in `frontend/public/favicon.svg`.
- Main portfolio content is driven from `frontend/src/mock.js`.
