<script lang="ts">
	import ActiveLink from './ActiveLink.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let links = [
		{
			href: '/',
			title: 'Dashboard'
		},
		{
			href: '/about',
			title: 'About'
		}
	];
</script>

<div class="flex items-center">
	<div class="flex-shrink-0">
		<img
			class="h-8 w-8"
			src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
			alt="Your Company"
		/>
	</div>
	<div class="hidden md:block">
		<div class="ml-10 flex items-baseline space-x-4">
			{#each links as { href, title }}
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<ActiveLink
					{href}
					baseClass="px-3 py-2 rounded-md text-sm font-medium"
					activeClass="bg-gray-200 text-gray-900 dark:text-gray-300 dark:bg-gray-900 dark:text-white"
					defaultClass="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-900"
				>
					{title}
				</ActiveLink>
			{/each}
			<ThemeToggle />
		</div>
	</div>
</div>
