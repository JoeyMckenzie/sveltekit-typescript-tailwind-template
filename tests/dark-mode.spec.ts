import { expect, test } from '@playwright/test';

test('navbar contains theme toggle button', async ({ page }) => {
	// arrange
	await page.goto('/');

	// act
	const expectedElement = await page.locator('data-testid=theme-toggle');

	// assert
	expect(expectedElement).not.toBeUndefined();
	expect(await expectedElement.innerText()).toBe('Light');
});

test('toggling the navbar changes the text', async ({ page }) => {
	// arrange
	await page.goto('/');

	// act
	const expectedElement = await page.locator('data-testid=theme-toggle');
	await expectedElement.click();

	// assert
	expect(expectedElement).not.toBeUndefined();
	expect(await expectedElement.innerText()).toBe('Dark');
});
