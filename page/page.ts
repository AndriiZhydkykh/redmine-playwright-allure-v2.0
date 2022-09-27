import { Page } from '@playwright/test';

export class ParentPage{
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async getElement(element:string) {
    return this.page.locator(element);
}
  async click(element:string) {
    await this.page.locator(element).click();

  }
  async fillInputAndEnter(element:any,value:any) {
    await this.page.locator(element).fill(value);
    await this.page.keyboard.press('Enter');
  }
  async type(element:any,value:any) {
    await this.page.locator(element).type(value);

  }
  async select(element:any,value:any) {
    await this.page.locator(element).selectOption(value);
  }
  async check(element:any) {
    await this.page.locator(element).check();
  }

}