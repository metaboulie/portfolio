<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<!-- Hero Section -->
<section class="relative -mt-24 flex min-h-screen items-center justify-center overflow-hidden">
	<div class="relative z-10 max-w-4xl text-center">
		<h1
			class="mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-6xl font-bold text-transparent transition-all duration-500"
			class:translate-y-0={mounted}
			class:-translate-y-8={!mounted}
		>
			Code is the silence of thought made visible
		</h1>
		<p
			class="mx-auto max-w-2xl text-lg text-zinc-400 transition-all delay-200 duration-500"
			class:translate-y-0={mounted}
			class:-translate-y-8={!mounted}
		>
			Exploring the intersections of AI, philosophy, and music through code and creativity.
		</p>
	</div>
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900"
		/>
	</div>
</section>

<!-- Links Section -->
<section class="py-24">
	<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
		{#each [{ title: 'Music', icon: '🎵', href: 'https://bandcamp.com/yourusername' }, { title: 'Movies', icon: '🎬', href: 'https://letterboxd.com/yourusername' }, { title: 'Gaming', icon: '🎮', href: 'https://steamcommunity.com/id/yourusername' }, { title: 'Social', icon: '💭', href: 'https://bsky.app/profile/yourusername' }] as { title, icon, href }}
			<a
				{href}
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col items-center rounded-lg border border-zinc-800 p-6 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5"
			>
				<span class="mb-3 text-3xl">{icon}</span>
				<span class="text-sm font-medium text-zinc-400 group-hover:text-emerald-400">{title}</span>
			</a>
		{/each}
	</div>
</section>

<!-- Blog Preview Section -->
<section class="py-24">
	<h2 class="mb-12 text-3xl font-bold">Latest Thoughts</h2>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each Array(3) as _, i}
			<article
				class="group rounded-lg border border-zinc-800 p-6 transition-all hover:border-emerald-500/50"
			>
				<time class="text-sm text-zinc-500">December {27 + i}, 2023</time>
				<h3 class="mt-4 text-xl font-semibold group-hover:text-emerald-400">
					<a href="/blog/post-{i + 1}">Example Blog Post {i + 1}</a>
				</h3>
				<p class="mt-2 text-zinc-400">
					This is a placeholder for your blog post excerpt. Replace this with actual content from
					your markdown files.
				</p>
			</article>
		{/each}
	</div>
	<div class="mt-12 text-center">
		<a
			href="/blog"
			class="inline-block rounded-lg border border-emerald-500 px-6 py-2 text-emerald-400 transition-all hover:bg-emerald-500 hover:text-zinc-900"
		>
			View All Posts
		</a>
	</div>
</section>

<style>
	section {
		@apply border-b border-zinc-800;
	}
	section:last-child {
		@apply border-b-0;
	}
</style>
