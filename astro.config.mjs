import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://urban-exploration-chronicles.example.com',
  integrations: [tailwind()],
  output: 'static',
});