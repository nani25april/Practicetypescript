

import { test as base } from '@playwright/test';

type CustomFixtures = {
    Login: void;
};

export const test = base.extend<CustomFixtures>({
    Login: async ({ page }, use) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://playwrightpad.in/');
        await page.getByText('Log In').click();

        await page.waitForURL('https://playwrightpad.in/login');

        await page.getByRole('textbox', { name: 'Email Address' }).fill('ram.krishna92@gmail.com');
        await page.getByLabel('Password', { exact: true }).fill('650655066');
        await page.getByRole('button', { name: 'Let\'s Go!' }).click();

        await use();
    },
});