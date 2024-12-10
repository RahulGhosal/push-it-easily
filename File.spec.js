import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://d3pv22lioo8876.cloudfront.net/tiptop/');
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test name');
  await page.getByLabel('Name *').press('Tab');
  await page.getByLabel('Password *').fill('Test');
  await page.getByLabel('Readonly input').click();
  await page.getByLabel('Select Color White Violet').selectOption('violet');
  await page.getByLabel('Select Color White Violet').selectOption('indigo');
  await page.getByLabel('Select Color White Violet').selectOption('blue');
  await page.getByLabel('Select Color White Violet').selectOption('green');
  await page.getByLabel('Select Color White Violet').selectOption('yellow');
  await page.getByLabel('Select Color White Violet').selectOption('orange');
  await page.getByLabel('Select Color White Violet').selectOption('red');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Received!').click();
});