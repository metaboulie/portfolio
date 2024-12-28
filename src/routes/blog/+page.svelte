<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	export let data: PageData;
</script>

<div class="py-12 relative overflow-hidden">
	<h1 class="mb-16 text-6xl font-black tracking-tighter skew-x-12 transform hover:skew-x-0 transition-transform duration-500 bg-gradient-to-r from-emerald-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">Blog</h1>
	
	<div class="grid gap-12 md:grid-cols-2 relative">
		{#each data.posts as post, i}
			<article
				class="group relative backdrop-blur-sm bg-zinc-900/30 p-8 transition-all duration-500
					   hover:scale-105 hover:rotate-1 hover:z-10
					   border-2 border-transparent hover:border-emerald-500/50
					   before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/10 before:to-purple-500/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
					   transform translate-y-0 hover:-translate-y-2"
				style="clip-path: polygon(0 0, 100% 0, 98% 98%, 2% 100%);"
			>
				<div class="relative z-10">
					<time class="inline-block px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-900/30 rounded-full transform -rotate-2"
						>{new Date(post.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</time
					>
					<h2 class="mt-6 text-3xl font-bold tracking-tight group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-purple-500 transition-all duration-300">
						<a href="{base}/blog/{post.slug}" class="relative inline-block">
							<span class="relative z-10">{post.title}</span>
							<span class="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
						</a>
					</h2>
					<p class="mt-4 text-zinc-400 font-light leading-relaxed transform group-hover:translate-x-2 transition-transform duration-300">{post.description}</p>
					
					<div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-purple-500/20 rounded-full blur-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	@keyframes glitch {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 2px);
		}
		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}
		80% {
			transform: translate(2px, -2px);
		}
		100% {
			transform: translate(0);
		}
	}
	
	h1:hover {
		animation: glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
	}
</style>
