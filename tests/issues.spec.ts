
import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { IssuePage} from '../page/issues.page';

const firstClosedIssueInList=('(//*[@class="status"][text()="Closed"])[1]')
const wikiLink = ('#header [class="wiki selected"]');

test.describe('Issues page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(page).toHaveURL('https://www.redmine.org/');
    await expect(page.locator(wikiLink)).toBeVisible();
  });

test('ID 5 - Open the list of all closed issues on the issues page', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickIssuesLink();
  await expect(page).toHaveURL(/.*issues/);

  const issuePage = new IssuePage(page);
  await issuePage.chooseClosedStatusInSelect('c');
  await issuePage.clickApplyButton();
  await expect(page.locator(firstClosedIssueInList)).toBeVisible();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("The list of closed issues", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});