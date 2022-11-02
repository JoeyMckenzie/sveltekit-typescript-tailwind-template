import { writable } from 'svelte/store';

export const showMobileMenu = writable(false);

export const toggleMobileMenu = () => showMobileMenu.update((isOpen) => (isOpen = !isOpen));
