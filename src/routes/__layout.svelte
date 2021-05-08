<script>
	import '../app.postcss';
</script>

<svelte:head>
	<title>The Flag 🏳️ Train 🚅</title>
</svelte:head>
<div class="flex flex-col h-screen">
	<header>
		<h1><a href=".">The Flag Train</a></h1>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to
		build Svelte apps.
	</footer>
</div>

<style style lang="postcss">
	header {
		@apply flex;
	}

	main {
		@apply flex;
		@apply justify-center;
		@apply items-center;
		@apply flex-grow;
		@apply px-4;
		@apply md:px-0;
	}

	h1 {
		@apply text-red-600;
		@apply uppercase;
		@apply text-4xl;
		@apply font-thin;
		@apply mt-8 mb-8 mx-auto;
		@apply max-w-xs;
	}

	footer {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
		@apply text-sm;
		@apply pb-4;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
			@apply text-6xl;
		}

		footer {
			@apply max-w-none;
		}
	}
</style>
