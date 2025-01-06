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

	const codeLines = [
		{ text: 'while alive {', classes: ['text-purple-400', 'text-zinc-500', 'text-red-400'] },
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

<section class="relative -mt-24 flex min-h-screen items-center justify-center overflow-hidden">
	<div class="relative z-10 max-w-4xl text-center">
		<div class="mb-6 flex justify-center">
			<img
				src="{base}/avatar.png"
				alt="métaboulie's avatar"
				class="h-32 w-32 rounded-full border-2 border-zinc-800"
				width="128"
				height="128"
			/>
		</div>
		<div
			class="mb-1 transition-all duration-500"
		>
			<pre
				class="inline-block rounded-lg border border-zinc-800 bg-zinc-900/50 p-12 text-left font-mono"><code
					class="text-lg"
					>{#each codeLines as line}<span
							class="{line.classes.join(' ')}"
							class:opacity-100={codeVisible}
							>{line.text}
</span>{/each}</code
				></pre>
		</div>
		<p
			class="mx-auto max-w-2xl text-zinc-400 transition-all delay-200 duration-500"
		>
			CEO of bluest and metaphysical computing.
		</p>
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
