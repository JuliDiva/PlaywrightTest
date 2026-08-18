import { test, expect } from '@playwright/test';

test.describe('tests of the main page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  test('test', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  });

  test.only('test checks names of the header navigation', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
      'Playwright',
    );
    await expect(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
    await expect(page.getByRole('link', { name: 'API' })).toContainText('API');
    await expect(page.getByLabel('Main', { exact: true })).toContainText('MCP');
  });

  test('test checks attribute href elements', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toContainText(
      'Playwright',
    );
    await expect(page.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/intro');
    await expect(page.getByRole('link', { name: 'API' })).toHaveAttribute(
      'href',
      '/docs/api/class-playwright',
    );
  });

  test('test select dark mode', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});
