import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'rgb(161 161 170)',
						'[class~="lead"]': {
							color: 'rgb(161 161 170)'
						},
						a: {
							color: 'rgb(74 222 128)',
							'text-decoration': 'none'
						},
						strong: {
							color: 'rgb(244 244 245)'
						},
						'ol > li::marker': {
							color: 'rgb(161 161 170)'
						},
						'ul > li::marker': {
							color: 'rgb(161 161 170)'
						},
						hr: {
							borderColor: 'rgb(39 39 42)'
						},
						blockquote: {
							color: 'rgb(161 161 170)',
							borderLeftColor: 'rgb(39 39 42)'
						},
						h1: {
							color: 'rgb(244 244 245)'
						},
						h2: {
							color: 'rgb(244 244 245)'
						},
						h3: {
							color: 'rgb(244 244 245)'
						},
						h4: {
							color: 'rgb(244 244 245)'
						},
						'figure figcaption': {
							color: 'rgb(161 161 170)'
						},
						code: {
							color: 'rgb(244 244 245)'
						},
						'a code': {
							color: 'rgb(74 222 128)'
						},
						pre: {
							color: 'rgb(39 39 42)',
							backgroundColor: 'rgb(24 24 27)'
						},
						thead: {
							color: 'rgb(244 244 245)',
							borderBottomColor: 'rgb(63 63 70)'
						},
						'tbody tr': {
							borderBottomColor: 'rgb(39 39 42)'
						}
					}
				}
			}
		}
	},
	plugins: [typography]
} satisfies Config;
