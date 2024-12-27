<!-- Root layout with dark theme and typography -->
<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-zinc-900 text-zinc-100">
	<header class="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
		<nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<a href="/" class="text-xl font-bold">Your Name</a>
			<div class="flex gap-6">
				<a href="/" class="hover:text-emerald-400">Home</a>
				<a href="/blog" class="hover:text-emerald-400">Blog</a>
				<a
					href="https://github.com/yourusername"
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
			<p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		@apply bg-zinc-900;
	}
</style>
