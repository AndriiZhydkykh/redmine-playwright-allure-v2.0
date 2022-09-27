import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { SearchPage} from '../page/search.page';

const wikiLink = ('#header [class="wiki selected"]');
const firstTaskSearchResult= ('(//*[@class="highlight token-0"][text()="Defect"])[1]');


test.describe('Search testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(page).toHaveURL('https://www.redmine.org/');
    await expect(page.locator(wikiLink)).toBeVisible();
  });

test('ID 2 - Find tasks for any defect using search', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.fillSearchInput('Defect');
  await expect(page).toHaveURL(/.*search/);
  
  const searchPage = new  SearchPage(page)
  await searchPage.checkTaskCheckbox()
  await searchPage.checkWikiPageCheckbox()
  await searchPage.clickApplyButton()
  await expect(page.locator(firstTaskSearchResult)).toBeVisible();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("The list of defect task", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});