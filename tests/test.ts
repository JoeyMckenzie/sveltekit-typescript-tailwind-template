import { expect, test } from '@playwright/test';

test('home page has "Dashboard" title', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1:has-text("Dashboard")')).toBe('Dashboard');
});
