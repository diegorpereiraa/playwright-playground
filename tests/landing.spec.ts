import { test, expect } from '@playwright/test';

test.describe('Playground Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('Validate Playground Home Links', async ({ page }) => {
    await test.step('Validate Home Link', async () => {
      await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    });

    await test.step('Validate Login Link', async () => {
      await expect(page.getByRole('link', { name: 'LOGIN' })).toBeVisible();
    });

    await test.step('Validate Form Link', async () => {
      await expect(page.getByRole('link', { name: 'FORM' })).toBeVisible();
    });

    await test.step('Validate Table Link', async () => {
      await expect(page.getByRole('link', { name: 'TABLE' })).toBeVisible();
    });

    await test.step('Validate About Link', async () => {
      await expect(page.getByRole('link', { name: 'SOBRE' })).toBeVisible();
    });
  });
});
