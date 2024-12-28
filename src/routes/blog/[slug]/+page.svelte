<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	export let data: PageData;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Syncopate:wght@400;700&family=Major+Mono+Display&family=Michroma&family=Zen+Dots&display=swap">
</svelte:head>

<article class="py-12 relative">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-blue-900/20 to-transparent pointer-events-none"></div>
	
	<header class="mb-24 relative">
		<div class="max-w-4xl mx-auto text-center transform hover:scale-105 transition-transform duration-500">
			<time class="inline-block px-6 py-3 text-xs font-syncopate text-blue-300 bg-blue-950/40 rounded-full transform -rotate-1 tracking-[0.3em] uppercase [word-spacing:0.4em] leading-loose"
				>{data.meta?.date || 'Undated'}</time
			>
			<h1 class="mt-6 text-8xl tracking-tight text-blue-100 transform hover:-skew-x-2 transition-all duration-300 font-unifraktur leading-[0.8] [word-spacing:0.15em]"
				>{data.meta?.title || 'Untitled Post'}</h1>
		</div>
		
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
		<div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
	</header>

	<div class="relative">
		<div
			class="prose prose-invert prose-lg mx-auto max-w-3xl
				   prose-headings:tracking-tight prose-headings:text-blue-100
				   
				   prose-h1:text-4xl prose-h1:font-syncopate prose-h1:leading-[0.85] prose-h1:tracking-tighter prose-h1:font-thin prose-h1:[word-spacing:0.2em]
				   
				   prose-h2:text-3xl prose-h2:font-major prose-h2:mt-16 prose-h2:mb-6 prose-h2:tracking-tight prose-h2:font-thin prose-h2:leading-[0.9] prose-h2:[word-spacing:0.15em]
				   
				   prose-h3:text-2xl prose-h3:font-zendots prose-h3:text-blue-200 prose-h3:tracking-tight prose-h3:uppercase prose-h3:font-thin prose-h3:leading-[0.95] prose-h3:[word-spacing:0.1em]
				   
				   prose-h4:text-xl prose-h4:font-michroma prose-h4:text-blue-300 prose-h4:tracking-tight prose-h4:font-thin prose-h4:leading-[1] prose-h4:[word-spacing:0.1em]
				   
				   prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:tracking-tight prose-p:font-michroma prose-p:font-light prose-p:[word-spacing:0.1em] prose-p:text-sm
				   
				   prose-a:text-blue-300 prose-a:no-underline prose-a:border-b prose-a:border-blue-400/30 hover:prose-a:border-blue-300
				   
				   prose-code:font-mono prose-code:text-blue-200 prose-code:bg-blue-950/50 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
				   
				   prose-pre:bg-blue-950/30 prose-pre:border prose-pre:border-blue-900/50 prose-pre:shadow-lg
				   
				   prose-img:rounded-lg prose-img:shadow-xl prose-img:shadow-blue-900/20 prose-img:transform prose-img:transition-transform hover:prose-img:scale-[1.02]
				   
				   prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-950/20 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-blue-200 prose-blockquote:font-michroma prose-blockquote:[word-spacing:0.1em] prose-blockquote:text-sm"
		>
			<svelte:component this={data.content} />
		</div>
	</div>

	<div class="mt-24 text-center relative">
		<a
			href="{base}/blog"
			class="inline-block px-12 py-4 font-syncopate text-xs tracking-[0.25em] uppercase [word-spacing:0.4em] leading-loose
				   bg-blue-950/40 text-blue-300
				   rounded-lg transform hover:-translate-y-1 hover:scale-105
				   transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10
				   border border-blue-400/10"
		>
			← Back to Blog
		</a>
	</div>
</article>

<style>
	:global(.font-unifraktur) {
		font-family: 'UnifrakturMaguntia', cursive;
	}
	
	:global(.font-syncopate) {
		font-family: 'Syncopate', sans-serif;
	}
	
	:global(.font-major) {
		font-family: 'Major Mono Display', monospace;
	}
	
	:global(.font-michroma) {
		font-family: 'Michroma', sans-serif;
	}
	
	:global(.font-zendots) {
		font-family: 'Zen Dots', cursive;
	}
	
	article {
		perspective: 1000px;
	}
	
	header {
		transform-style: preserve-3d;
	}
	
	:global(.prose pre) {
		backdrop-filter: blur(12px);
	}
	
	:global(.prose pre code) {
		background: transparent;
		color: #a3d5ff;
		font-size: 0.95em;
		line-height: 1.7;
	}
	
	:global(.prose p) {
		transition: all 0.3s ease;
	}
	
	:global(.prose p:hover) {
		transform: translateX(8px);
		color: rgb(191 219 254);
	}
	
	:global(.prose h2) {
		position: relative;
		letter-spacing: -0.02em;
	}
	
	:global(.prose h2::after) {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		width: 2rem;
		height: 1px;
		background: linear-gradient(to right, rgb(96 165 250 / 0.3), transparent);
	}
	
	:global(.prose h3) {
		position: relative;
		padding-left: 1rem;
		letter-spacing: -0.01em;
	}
	
	:global(.prose h3::before) {
		content: '';
		position: absolute;
		left: 0;
		top: 0.25em;
		bottom: 0.25em;
		width: 1px;
		background: rgb(96 165 250 / 0.3);
	}
</style>
