import { test, expect } from '@playwright/test'

test('T01: Verify User Login', async ({ page }) => {
    // Navigate to website
    await page.goto('https://www.saucedemo.com/');

    // Login in with user credentials
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    // Click Login button
    await page.click('#login-button');

    // Confirm Inventory dashboard
    await expect(page).toHaveURL(/.*inventory/);
});
