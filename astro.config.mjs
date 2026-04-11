// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ADVAD1D.github.io',
  // @ts-ignore: process.env is valid in Node during build time
  ...(process.env.GITHUB_ACTIONS ? { base: '/advad-leaderboard-front' } : {}),
});
