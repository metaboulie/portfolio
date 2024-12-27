<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let mounted = false;
	let codeVisible = false;

	onMount(() => {
		mounted = true;
		setTimeout(() => {
			codeVisible = true;
		}, 500);
	});

	const links = [
		{ title: 'Music', icon: '🎵', href: 'https://rateyourmusic.com/~rowanBlake' },
		{ title: 'Movies', icon: '🎬', href: 'https://letterboxd.com/nycide/' },
		{ title: 'Gaming', icon: '🎮', href: 'https://steamcommunity.com/id/metaboulie/' },
		{ title: 'Social', icon: '💭', href: 'https://bsky.app/profile/metaboulie.bsky.social' }
	];

	const codeLines = [
		{ text: 'while (alive) {', classes: ['text-purple-400', 'text-zinc-500', 'text-red-400'] },
		{
			text: '    music (nightclub syndrome)',
			classes: ['typing-1', 'text-gray-400']
		},
		{
			text: '    read (corrupted literature)',
			classes: ['typing-2', 'text-emerald-400']
		},
		{
			text: '    dream (of blue, the absent afterglow)',
			classes: ['typing-3', 'text-blue-300']
		},
		{ text: '}', classes: ['text-zinc-500'] },
		{ text: 'end', classes: ['text-purple-400'] }
	];
</script>

<!-- Hero Section -->
<section class="relative -mt-24 flex min-h-screen items-center justify-center overflow-hidden">
	<div class="relative z-10 max-w-4xl text-center">
		<div class="mb-8 flex justify-center">
			<img
				src="{base}/avatar.png"
				alt="métaboulie's avatar"
				class="h-32 w-32 rounded-full border-2 border-zinc-800"
				width="128"
				height="128"
			/>
		</div>
		<div
			class="mb-6 transition-all duration-500"
			class:translate-y-0={mounted}
			class:-translate-y-8={!mounted}
		>
			<pre
				class="inline-block rounded-lg border border-zinc-800 bg-zinc-900/50 p-12 text-left font-mono"><code
					class="text-lg"
					>{#each codeLines as line}<span
							class="{line.classes.join(' ')} {line.classes.includes('typing-1') ||
							line.classes.includes('typing-2') ||
							line.classes.includes('typing-3')
								? 'opacity-0'
								: ''}"
							class:opacity-100={codeVisible}
							>{line.text}
</span>{/each}</code
				></pre>
		</div>
		<p
			class="mx-auto max-w-2xl text-lg text-zinc-400 transition-all delay-200 duration-500"
			class:translate-y-0={mounted}
			class:-translate-y-8={!mounted}
		>
			Decoding the dark undercurrents of thought—AI, philosophy, and music as fractured reflections.
		</p>
	</div>
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900"
		></div>
	</div>
</section>

<!-- Links Section -->
<section class="py-24">
	<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
		{#each links as { title, icon, href }}
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
					<a href="{base}/blog/post-{i + 1}">Example Blog Post {i + 1}</a>
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
			href="{base}/blog"
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

	.typing-1 {
		animation: fadeIn 0.5s ease-out 0.8s forwards;
	}
	.typing-2 {
		animation: fadeIn 0.5s ease-out 1.2s forwards;
	}
	.typing-3 {
		animation: fadeIn 0.5s ease-out 1.6s forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
