import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(), // Integration für TailwindCSS
  ],
  site: 'https://kalamatelier.com', // Deine Website-URL
  output: 'static', // Statisches Rendering
});
