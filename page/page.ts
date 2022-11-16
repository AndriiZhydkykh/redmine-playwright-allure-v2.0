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
    await (await this.getElement(element)).click();

  }
  async fillInputAndEnter(element:any,value:any) {
    await (await this.getElement(element)).fill(value);
    await this.page.keyboard.press('Enter');
  }
  async type(element:any,value:any) {
    await (await this.getElement(element)).type(value);

  }
  async select(element:any,value:any) {
    await (await this.getElement(element)).selectOption(value);
  }
  async check(element:any) {
    await (await this.getElement(element)).check();
  }

}