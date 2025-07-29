import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://jade-meerkat-7fac5b.netlify.app/",
  integrations: [preact()]
});