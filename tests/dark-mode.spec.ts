import { expect, test } from '@playwright/test';

test('navbar contains theme toggle button', async ({ page }) => {
	// arrange
	await page.goto('/');

	// act
	const themeToggleButton = await page.locator('data-testid=theme-toggle');

	// assert
	expect(themeToggleButton).not.toBeUndefined();
	expect(await themeToggleButton.innerText()).toBe('Light');
});

test('toggling the navbar changes the text', async ({ page }) => {
	// arrange
	await page.goto('/');

	// act
	const themeToggleButton = await page.locator('data-testid=theme-toggle');
	await themeToggleButton.click();

	// assert
	expect(themeToggleButton).not.toBeUndefined();
	expect(await themeToggleButton.innerText()).toBe('Dark');
});
