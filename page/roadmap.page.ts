import { Page } from '@playwright/test';
import { ParentPage } from './page';

const defectCheckbox=('[name*="tracker"] >> nth=0');
const featureCheckbox=('input[value="2"]');
const subProjectCheckbox=('#with_subprojects[type="checkbox"]');
const applyButton=('[class="button-small"]');

export class RoadmapPage extends ParentPage {
  constructor(page: Page) {
    super(page)
  }

  async clickDefectCheckbox(){
    await super.click(defectCheckbox);
  }
  async clickFeatureCheckbox(){
    await super.click(featureCheckbox);
  }
  async clickSubProjectCheckbox(){
    await super.click(subProjectCheckbox);
  }
  async clickApplyButton(){
    await super.click(applyButton);
    
  }
  
  
}