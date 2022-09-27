import { Page } from '@playwright/test';
import { ParentPage } from './page';
const lSourceCodeGithubLink = ('[class="external"][href*="github"]');

export class DownloadPage extends ParentPage{
  constructor(page: Page) {
    super(page)
  }

  async clickLatestSourceCodeGithubLink() {
    await super.click(lSourceCodeGithubLink);
    
  }
}