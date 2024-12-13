import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://d3pv22lioo8876.cloudfront.net/tiptop/');
  await page.getByText('Verify that the text input element with xpath .//input[@name=\'my-disabled\'] is').click();
  
  
  await page.getByLabel('Select Color White Violet').selectOption('violet');
  await page.getByText('Select Color White Violet').click();
  await page.getByLabel('Select Color White Violet').selectOption('indigo');
  await page.getByText('Select Color White Violet').click();
  await page.getByLabel('Select Color White Violet').selectOption('blue');
  await page.getByLabel('Select Color White Violet').selectOption('yellow');
  await page.getByText('Select Color White Violet').click();
  await page.getByLabel('Select Color White Violet').selectOption('orange');
  await page.getByLabel('Select Color White Violet').selectOption('red');
  await page.getByLabel('Name *').click();
  await page.getByLabel('Name *').fill('Test');
  await page.locator('div').nth(3).click();
  await page.getByLabel('Readonly input').click();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('Test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Received!').click();
});