// TODO: these are completely arbitrary e2e tests, please write better tests than this!

import { expect, test } from '@playwright/test';

test('home page has "Dashboard" title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1:has-text("Dashboard")')).toBe('Dashboard');
});

test('home page has "Home" in page content', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1:has-text("Home")')).toBe('Home');
});

test('about page has "About" in page content', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1:has-text("About")')).toBe('About');
});
