import { Page } from '@playwright/test';
import { ParentPage } from './page';
const lSourceCodeGithubLink = ('[class="external"][href*="github"]');
const gitHubCodeButton = (' #code-tab');

export class DownloadPage extends ParentPage{
  constructor(page: Page) {
    super(page)
  }

  async clickLatestSourceCodeGithubLink() {
    await super.click(lSourceCodeGithubLink);
  }
  async getGitHubCodeButton() {
   return super.getElement(gitHubCodeButton);
  }

}