<script lang="ts">
	import { onMount } from 'svelte';

	const themeKey = 'svelteKitTemplateTheme';

	enum Theme {
		Light = 'Light',
		Dark = 'Dark'
	}

	let darkModeEnabled = false;

	$: currentTheme = darkModeEnabled ? Theme.Dark : Theme.Light;

	// TODO: still gotta work out the flashing
	onMount(() => {
		const currentTheme = localStorage.getItem(themeKey);
		darkModeEnabled = !!currentTheme && currentTheme === Theme.Dark;
		setTheme(darkModeEnabled);
	});

	const toggleDarkMode = () => {
		darkModeEnabled = !darkModeEnabled;
		setTheme(darkModeEnabled);
	};

	const setTheme = (darkModeEnabled: boolean) => {
		if (darkModeEnabled) {
			localStorage.setItem(themeKey, Theme.Dark);
			document.documentElement.classList.add('dark');
		} else {
			localStorage.setItem(themeKey, Theme.Light);
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<div class="flex space-x-2 justify-center">
	<button
		on:click={toggleDarkMode}
		type="button"
		class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
		>{currentTheme}</button
	>
</div>
