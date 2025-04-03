
import { expect,Locator,Page} from "@playwright/test";

export class FillDetailsPage {
   page:Page;
   cardLocator:Locator;
   cvvLocator:Locator;
   dateLocator:Locator;
   cardHolderName
   EmailId
   coupanLocator
   selectCountry
   dropCountry 
   clickPlaceOrder
   orderConfirmationText
   orderId

  constructor(page:Page) {
    this.page = page;
    this.cardLocator = page.locator("input[value*='4542 9931 9292']");
    this.cvvLocator = page.locator("input[class='input txt']").first();
    this.dateLocator = page.locator(".input.ddl");
    this.cardHolderName = page.locator("input[class='input txt']").nth(1);
    this.EmailId = page.locator(".user__name [type='text']").first();
    this.coupanLocator = page.locator(".field.small").locator("input").nth(1);
    this.selectCountry = page.locator("[placeholder*='Select Country']");
    this.dropCountry = page.locator(".ta-results.list-group.ng-star-inserted");
    this.clickPlaceOrder = page.locator(".action__submit");
    this.orderConfirmationText =page.locator(".hero-primary");
    this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
  }

  async provideDetails(countryCode:string,countryName) {

    await this.selectCountry.pressSequentially(countryCode);
    const dropdown = this.dropCountry;
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === countryName) {
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }
    const cardNumber = await this.cardLocator;
    await cardNumber.clear();
    await cardNumber.fill("5276534765276");
    await this.cvvLocator.fill("666");
    const dateDropDown = this.dateLocator;
    await dateDropDown.first().selectOption("03");
    await dateDropDown.nth(1).selectOption("11");
    await this.cardHolderName.fill("Anish kumar");
    //.field.small input
    await this.coupanLocator.fill("rahulsetty");
  
  }

  async verifyEmailId(userName:string){
  expect(this.EmailId).toHaveText(
    userName
  );
  }

  async submitDetails() {
    await this.clickPlaceOrder.click();
    await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
    return await this.orderId.textContent();
  }
}

module.exports = { FillDetailsPage };
