import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './remark-reading-time.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: vercel(),
	markdown: {
		remarkPlugins: [remarkReadingTime],
		shikiConfig: {
      theme: 'one-dark-pro',
    }
	}
});
