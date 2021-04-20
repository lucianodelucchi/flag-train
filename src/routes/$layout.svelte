<svelte:head>
	<title>The Flag 🏳️ Train 🚅</title>
</svelte:head>

<script>
	import '../app.postcss';
</script>

<main>
	<h1><a href=".">The Flag Train</a></h1>

	<slot></slot>

	<p>Visit <a class="text-blue-600 underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	h1 {
		@apply text-red-600;
		@apply uppercase;
		@apply text-4xl;
		@apply font-thin;
		@apply mt-8 mb-8 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
			@apply text-6xl;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
