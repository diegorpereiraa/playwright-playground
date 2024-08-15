import test, { expect } from '@playwright/test';

test.beforeEach('Validate Playground Home', async ({ page }) => {
  await page.goto('');
});

test.describe('Playground Regression', () => {
  test('Validate Playground Home', async ({ page }) => {
    test.step('Validate Home Link', async () => {
      await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    });

    test.step('Validate Login Link', async () => {
      await expect(page.getByRole('link', { name: 'HOME' })).toBeVisible();
    });
    test.step('Validate Form Link', async () => {
      await expect(page.getByRole('link', { name: 'FORM' })).toBeVisible();
    });
    test.step('Validate Table Link', async () => {
      await expect(page.getByRole('link', { name: 'TABLE' })).toBeVisible();
    });
    test.step('Validate About Link', async () => {
      await expect(page.getByRole('link', { name: 'SOBRE' })).toBeVisible();
    });
  });

});
