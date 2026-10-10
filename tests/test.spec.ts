

import {expect} from '@playwright/test';
import {test} from './Fixture';

test('LoginTest1', async ({ page, context, Login }) => {

await expect(page.getByRole('heading', { name: 'Playwright Practice Lab' })).toContainText('Playwright Practice Lab');
await page.getByRole('link', { name: 'Assessments', exact: true }).first().click();

await expect(page.getByText('Practice Sandboxes', { exact: true })).toBeVisible();

const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Launch App', exact: true }).first().click()
]);

await newPage.setViewportSize({ width: 1920, height: 1080 });
await newPage.waitForLoadState('domcontentloaded');
await newPage.waitForURL('/sandbox/banking');
await expect(newPage.getByText('APEX BANK')).toBeVisible();
await expect(newPage.getByText('APEX BANK')).toHaveText('APEX BANK');

await newPage.getByPlaceholder('Enter username').fill('apex_user');
await newPage.getByPlaceholder('Enter password').fill('Password123!');
await newPage.getByRole('button', { name: 'LOGIN' }).click();

await newPage.waitForURL('/sandbox/banking');
await expect(newPage.getByText('Welcome back, Apex User')).toBeVisible();

await newPage.getByRole('button', { name: 'Funds Transfer' }).click();

await newPage.getByRole('button', { name: 'Add New' }).click();
await expect(newPage.getByText('Add New Beneficiary')).toHaveText('Add New Beneficiary');
await newPage.getByPlaceholder('e.g. John Doe').fill('Harey Krishnaaaa');
await newPage.getByPlaceholder('e.g. 1234567890').fill('127890');
await newPage.getByText('Recipient Bank', { exact: true }).locator('..').getByRole('combobox').selectOption('Wells Fargo');

await newPage.getByRole('button', { name: 'Save Beneficiary' }).click();


}
);



test('LoginTest2', async({page, context, Login})=>{
//await page.getByRole('button', { name: 'Assessments', exact: true}).click();

//await page.getByText('Assessments', { exact: true }).click();
await page.getByRole('navigation').getByRole('link', { name: 'Assessments', exact: true }).click();
//await page.getByLabel('Assessments', { exact: true }).click();
//await page.getByPlaceholder('Assessments').click();
//await page.getByRole('link', {name: 'Assessments', exact: true}).click();
//await page.getByRole('link', { name: 'Launch App', exact: true }).first().click();

const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.getByRole('link', { name: 'Launch App', exact: true }).first().click()

]);
await newPage.setViewportSize({ width: 1920, height: 1080 });
await newPage.waitForLoadState('domcontentloaded');
await newPage.waitForURL('/sandbox/banking');
await expect(newPage.getByText('APEX BANK')).toBeVisible();
await expect(newPage.getByText('APEX BANK')).toHaveText('APEX BANK');
await newPage.getByPlaceholder('Enter username').fill('apex_user');
await newPage.getByPlaceholder('Enter password').fill('Password123!');
await newPage.getByRole('button', { name: 'LOGIN' }).click();
await expect(newPage.getByText('Welcome back, Apex User')).toBeVisible();

});
