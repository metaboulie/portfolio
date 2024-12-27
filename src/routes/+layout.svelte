<!-- Root layout with dark theme and typography -->
<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
</script>

<div class="min-h-screen bg-zinc-900 text-zinc-100">
	<header class="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
		<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<a href="{base}/" class="flex items-center gap-3">
				<img
					src="{base}/avatar.png"
					alt="Eugene's avatar"
					class="h-8 w-8 rounded-full border border-zinc-800"
					width="32"
					height="32"
				/>
				<span class="text-xl font-bold">Eugene</span>
			</a>
			<div class="flex gap-6">
				<a href="{base}/" class="hover:text-emerald-400">Home</a>
				<a href="{base}/blog" class="hover:text-emerald-400">Blog</a>
				<a
					href="https://github.com/metaboulie"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-emerald-400"
				>
					GitHub
				</a>
				<a href="mailto:your@email.com" class="hover:text-emerald-400">Contact</a>
			</div>
		</nav>
	</header>

	<main class="mx-auto max-w-7xl px-4 pt-24">
		<slot />
	</main>

	<footer class="mt-32 border-t border-zinc-800 py-8">
		<div class="mx-auto max-w-7xl px-4 text-center text-sm text-zinc-400">
			<p>© {new Date().getFullYear()} Eugene. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		@apply bg-zinc-900;
	}
</style>
