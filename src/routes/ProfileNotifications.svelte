<script lang="ts">
	import ProfileDropdown from './ProfileDropdown.svelte';

	let showMobileMenu = false;

	const toggleMobileMenu = () => (showMobileMenu = !showMobileMenu);
</script>

<div class="hidden md:block">
	<div class="ml-4 flex items-center md:ml-6">
		<button
			on:click={toggleMobileMenu}
			type="button"
			class="rounded-full dark:bg-gray-800 p-1 text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
		>
			<span class="sr-only">View notifications</span>
			<!-- Heroicon name: outline/bell -->
			<svg
				class="h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
				/>
			</svg>
		</button>

		<ProfileDropdown />
	</div>
</div>
