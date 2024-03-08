import { test, expect } from '@playwright/test';

test('download book', async ({ page }) => {
  await page.goto('http://localhost:3000/books/18d794d7-56e4-4390-9fb9-3cb5cf0d56e1'); // Replace with your book details URL

  const downloadButton = await page.locator('button >> text= "Download Book"');
  await downloadButton.click();

  // Wait for the toast notification element to appear
  const toastNotification = await page.waitForSelector('.toast-notification'); // Replace with your toast notification selector

  // Assert the toast notification content
  const toastText = await toastNotification.textContent();
  expect(toastText).toContain('Book downloaded successfully!');
});
