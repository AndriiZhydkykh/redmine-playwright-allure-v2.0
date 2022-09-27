import {Page } from '@playwright/test';
import {ParentPage} from '../page/page';

export class MainPage extends ParentPage{

  constructor(page: Page) {
    super(page)
  }

  async open() {
    await this.page.goto('https://www.redmine.org/'); }
} 