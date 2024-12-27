<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	export let data: PageData;
</script>

<div class="py-12">
	<h1 class="mb-12 text-4xl font-bold">Blog</h1>
	<div class="grid gap-8 md:grid-cols-2">
		{#each data.posts as post}
			<article
				class="group rounded-lg border border-zinc-800 p-6 transition-all hover:border-emerald-500/50"
			>
				<time class="text-sm text-zinc-500"
					>{new Date(post.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}</time
				>
				<h2 class="mt-4 text-2xl font-semibold group-hover:text-emerald-400">
					<a href="{base}/blog/{post.slug}">{post.title}</a>
				</h2>
				<p class="mt-2 text-zinc-400">{post.description}</p>
			</article>
		{/each}
	</div>
</div>
