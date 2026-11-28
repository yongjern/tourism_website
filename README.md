# Warisan Pahang

A bilingual heritage-tourism guide for Pahang, Malaysia, built with Next.js and designed for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## AI travel guide

The floating travel guide works immediately with curated site data. To enable broader AI answers, configure any OpenAI-compatible chat endpoint on the server:

```text
AI_CHAT_API_URL=https://provider.example/v1/chat/completions
AI_CHAT_API_KEY=replace-with-a-server-secret
AI_CHAT_MODEL=replace-with-a-model-id
```

The API key is used only by the server route. Chat history remains in the current browser session and is not persisted by this application.

For local development, copy `.env.example` to `.env.local`, replace the three placeholder values, and restart the development server. Keep `.env.local` private; it is excluded by `.gitignore`.

For Vercel, open the project dashboard, then go to **Settings → Environment Variables**. Add `AI_CHAT_API_URL`, `AI_CHAT_API_KEY`, and `AI_CHAT_MODEL` for the required environments, save them, and redeploy the project. Use the complete chat-completions endpoint rather than only the provider's base URL.

## Deploy

Import this folder into Vercel. Environment variables are optional unless broader AI answers are enabled. No external database is required.

## Data notes

Destination information is curated in `src/data/destinations.ts`. Prices and opening hours are indicative and should be confirmed with each operator before travel. Map links use OpenStreetMap. Landmark photos are stored in `public/media` as optimized WebP files. The footer links to `/origin-data` for original photo sources and credits. The Bukit Residen detail view also shows the former Pahang Club building. Destinations without a verified local photo still use remote editorial backgrounds.
