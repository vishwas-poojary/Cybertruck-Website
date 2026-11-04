import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Configure site and base for local and GitHub Pages deployment
  site: 'https://vishwas-poojary.github.io',
  base: '/Cybertruck-Website',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['gsap', 'lenis']
    }
  }
});

