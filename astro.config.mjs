import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// In GitHub Actions or production builds, base is '/Cybertruck-Website/'. In local dev, base is '/'
const isProd =
  process.env.GITHUB_ACTIONS === 'true' ||
  process.env.CI === 'true' ||
  process.env.NODE_ENV === 'production' ||
  process.argv.some((arg) => arg.includes('build'));

// https://astro.build/config
export default defineConfig({
  site: 'https://vishwas-poojary.github.io',
  base: isProd ? '/Cybertruck-Website/' : '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis'],
    },
  },
});
