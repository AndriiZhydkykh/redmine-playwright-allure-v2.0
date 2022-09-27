import { Page } from '@playwright/test';
import { ParentPage } from './page';

const userNameInput = ('#user_login');
const passwordInput = ('#user_password');
const confirmPasswordInput = ('#user_password_confirmation');
const firstNameInput = ('#user_firstname');
const lastNameInput = ('#user_lastname');
const emailInput = ('#user_mail');
const applyButton = ('[type="submit"]');

export class RegistrationPage extends ParentPage {
  constructor(page: Page) {
    super(page);
  }

  async setUserNameInput(value:any) {
    await super.type(userNameInput,value);
  }
  async setPasswordInput(value:any) {
    await super.type(passwordInput,value);
  }
  async setConfirmPasswordInput(value:any) {
    await super.type(confirmPasswordInput,value);
  }
  async setFirstNameInput(value:any) {
    await super.type(firstNameInput,value);
  }
  async setLastNameInput(value:any) {
    await super.type(lastNameInput,value);
  } 
  async setEmailInput(value:any) {
    await super.type(emailInput,value);
  }
  async clickApplyButton() {
    await super.click(applyButton);
  }

}