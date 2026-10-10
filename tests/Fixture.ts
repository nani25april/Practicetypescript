

import { test as base } from '@playwright/test';

type CustomFixtures = {
    Login: void;
};

export const test = base.extend<CustomFixtures>({
    Login: async ({ page }, use) => {
        const loginEmail = process.env.LOGIN_EMAIL;
        const loginPassword = process.env.LOGIN_PASSWORD;

        if (!loginEmail || !loginPassword) {
            throw new Error('Set LOGIN_EMAIL and LOGIN_PASSWORD environment variables before running the login tests.');
        }

        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/');
        await page.getByText('Log In').click();

        await page.waitForURL('**/login');

        await page.getByRole('textbox', { name: 'Email Address' }).fill(loginEmail);
        await page.getByLabel('Password', { exact: true }).fill(loginPassword);
        await page.getByRole('button', { name: 'Let\'s Go!' }).click();

        await use();
    },
});