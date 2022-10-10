import { test, expect } from '@playwright/test';
import { MainPage} from '../page/main.page';
import { HeaderPage} from '../page/header.page';
import { RegistrationPage} from '../page/registration.page';
import { randomEmail, randomName } from '../helper/script';

test.describe('Registration page testing', () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await expect(page).toHaveURL('https://www.redmine.org/');

    const headerPage=new HeaderPage(page)
    await expect(await headerPage.getWikiLink()).toBeVisible();
  });

test('ID 1 - Registering a new user with a required field', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  await headerPage.clickRegistrationLink();
  await expect(page).toHaveURL(/.*register/);

  const registrationPage = new RegistrationPage(page)
  await registrationPage.setUserNameInput(randomName);
  await registrationPage.setPasswordInput('2181681A');
  await registrationPage.setConfirmPasswordInput('2181681A');
  await registrationPage.setFirstNameInput('UserName');
  await registrationPage.setLastNameInput('UserLastName');
  await registrationPage.setEmailInput(randomEmail);
  await registrationPage.clickApplyButton();
  await expect(page).toHaveURL(/.*login/);
  await expect(await registrationPage.getFlashNoticeConfirmEmail()).toBeVisible();
});
test.afterEach(async ({ page }, testInfo) => {
  await testInfo.attach("Flash notice", {
    body: await page.screenshot(),
    contentType: "image/png",
  });
  });
});