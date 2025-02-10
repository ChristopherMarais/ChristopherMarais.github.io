// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The full URL where your site will be hosted.
  // This helps Astro generate absolute URLs when needed.
  site: 'https://gcmarais.com',
  
  // The base path of your deployed site.
  // For a custom domain (or a user site), this should be '/'
  base: '/',
  
  // Tell Astro to output static files.
  // GitHub Pages requires your site to be built as static assets.
  output: 'static',

  // Add any additional configuration or integrations as needed.
});
