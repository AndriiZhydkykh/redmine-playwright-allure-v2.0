import {Page } from '@playwright/test';
import {ParentPage} from '../page/page';

const chooseStatus =('#operators_status_id');
const applyButton= ('[class="icon icon-checked"]')
const firstClosedIssueInList=('(//*[@class="status"][text()="Closed"])[1]')


export class IssuePage extends ParentPage{

  constructor(page: Page) {
   super(page)
  }
  
  async chooseClosedStatusInSelect(value:any) {
    await super.click(chooseStatus);
    await super.select(chooseStatus,value)
  }
  async clickApplyButton() {
    await super.click(applyButton);
  }
  
  async getFirstClosedIssueInList() {
    return super.getElement(firstClosedIssueInList);
   }
}