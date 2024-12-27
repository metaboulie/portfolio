<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="py-12">
	<header class="mb-16 text-center">
		<time class="text-sm text-zinc-500">{data.meta?.date || 'Undated'}</time>
		<h1 class="mt-4 text-4xl font-bold">{data.meta?.title || 'Untitled Post'}</h1>
	</header>

	<div
		class="prose prose-invert mx-auto max-w-3xl prose-headings:font-semibold prose-a:text-emerald-400"
	>
		<svelte:component this={data.content} />
	</div>

	<div class="mt-16 text-center">
		<a
			href="/blog"
			class="inline-block rounded-lg border border-emerald-500 px-6 py-2 text-emerald-400 transition-all hover:bg-emerald-500 hover:text-zinc-900"
		>
			← Back to Blog
		</a>
	</div>
</article>
