import { Page } from '@playwright/test';
import { ParentPage} from '../page/page';

const registrationLink = ('#top-menu [href*="register"]');
const searchInput = ('[id="q"]');
const downloadLink = ('#header [class="download"]');
const roadMapLink = ('#header [class="roadmap"]');
const issuesLink = ('#header [class="issues"]')

export class HeaderPage extends ParentPage {
  constructor(page: Page) {
  super(page)
  }

  async clickRegistrationLink() {
    await super.click(registrationLink)
    
  }
  async fillSearchInput(value:string) {
    await this.fillInputAndEnter(searchInput,value);
  }
  async clickDownloadLink() {
    await super.click(downloadLink)

  }
  async clickRoadMapLink() {
    await super.click(roadMapLink)
    
  }
  async clickIssuesLink() {
    await super.click(issuesLink)
    
  }
}