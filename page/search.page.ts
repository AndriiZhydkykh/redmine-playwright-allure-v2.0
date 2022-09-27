import { Page } from '@playwright/test';
import { ParentPage } from './page';

const taskCheckbox = ('#issues');
const wikiPageCheckbox= ('#wiki_pages');
const applyButton= ('[name="commit"]');

export class SearchPage extends ParentPage{
  constructor(page: Page) {
    super(page)  
  }

  async checkTaskCheckbox() {
    await super.check(taskCheckbox);
  }
  async checkWikiPageCheckbox() {
    await super.click(wikiPageCheckbox);
  }
  async clickApplyButton() {
    await super.click(applyButton);
    
  } 
}