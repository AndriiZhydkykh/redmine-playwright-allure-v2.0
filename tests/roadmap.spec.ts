
import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { RoadmapPage} from '../page/roadmap.page';

const wikiLink = ('#header [class="wiki selected"]');
const firstPathResultInList=('(//*[@class="subject"]/a[contains(text(), "Patch")])[1]');

test.describe('Roadmap page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(page).toHaveURL('https://www.redmine.org/');
    await expect(page.locator(wikiLink)).toBeVisible();
  });

test('ID 4 - Open the path task list on the roadmap page', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickRoadMapLink();
  await expect(page).toHaveURL(/.*roadmap/);

  const roadmapPage = new RoadmapPage(page);
  await roadmapPage.clickDefectCheckbox();
  await roadmapPage.clickFeatureCheckbox();
  await roadmapPage.clickSubProjectCheckbox()
  await roadmapPage.clickApplyButton();
  await expect(page.locator(firstPathResultInList)).toBeVisible()
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("The path task list", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });

});