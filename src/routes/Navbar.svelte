<script lang="ts">
	import { showMobileMenu } from '$lib/stores/mobile-menu.store';
	import MobileMenu from './MobileMenu.svelte';
	import MobileMenuButton from './MobileMenuButton.svelte';
	import NavbarItems from './NavbarItems.svelte';
	import ProfileNotifications from './ProfileNotifications.svelte';
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<NavbarItems />
			<ProfileNotifications />
			<MobileMenuButton />
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if $showMobileMenu}
		<MobileMenu />
	{/if}
</nav>
