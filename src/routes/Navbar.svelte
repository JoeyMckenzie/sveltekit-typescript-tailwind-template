<script lang="ts">
	import MobileMenu from './MobileMenu.svelte';
	import MobileMenuButton from './MobileMenuButton.svelte';
	import NavbarItems from './NavbarItems.svelte';
	import ProfileNotifications from './ProfileNotifications.svelte';

	let showMobileMenu = false;

	// TODO: add handler to toggle mobile menu state
	const onMenuToggled = () => (showMobileMenu = !showMobileMenu);
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<NavbarItems />
			<ProfileNotifications />
			<MobileMenuButton on:toggled={onMenuToggled} />
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if showMobileMenu}
		<MobileMenu on:toggled={onMenuToggled} />
	{/if}
</nav>
