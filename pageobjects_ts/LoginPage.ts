import { Page,Locator} from "@playwright/test";
export class LoginPage {
  page:Page;
  signInBtn:Locator;
  userName
  password
  constructor(page:Page) {
    this.page = page;
    this.signInBtn = page.locator("#login");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client/');
  }

  async validLogin(userName:string, password:string) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signInBtn.click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };
