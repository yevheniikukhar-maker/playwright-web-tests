import { expect, test } from '@playwright/test';

test('client work page is reachable from the services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await expect(page).toHaveURL('https://www.epam.com/');

  const servicesMenu = page.locator('header').locator('a.top-navigation__item-link.js-op', {
    hasText: 'Services',
  });
  await servicesMenu.click();

  const clientWorkLink = page.getByRole('link', {
    name: 'Explore Our Client Work',
    exact: true,
  });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page).toHaveURL('https://www.epam.com/services/client-work');
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
