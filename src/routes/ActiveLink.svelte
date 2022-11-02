<script lang="ts">
	import { page } from '$app/stores';
	export let href = '';
	export let baseClass = '';
	export let defaultClass = '';
	export let activeClass = '';

	$: linkClass = $page.url.pathname.endsWith(href)
		? `${baseClass} ${activeClass}`
		: `${baseClass} ${defaultClass}`;
</script>

<a {href} class={linkClass}>
	<slot />
</a>
