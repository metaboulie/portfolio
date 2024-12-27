import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			highlight: {
				highlighter(code, lang = 'text') {
					if (lang === 'math') {
						return `<div class="math-block">${code}</div>`;
					}
					return `<pre class="language-${lang}"><code>${code}</code></pre>`;
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
	}
};

export default config;
