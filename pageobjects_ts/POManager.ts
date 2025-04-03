import {Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { FillDetailsPage } from "./FillDetailsPage";
import { OrdersHistoryPage } from "./OrdersHistoryPage";

export class POManager {
  page: Page;
  loginPage:LoginPage;
  dashboardPage:DashboardPage;
  cartPage:CartPage;
  fillDetailsPage:FillDetailsPage;
  ordersHistoryPage;

  constructor(page:Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.fillDetailsPage = new FillDetailsPage(this.page);
    this.ordersHistoryPage = new OrdersHistoryPage(this.page);
  }

  getLoginpage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getDetailsPage() {
    return this.fillDetailsPage;
  }

  getOrdersHistoryPage() {
    return this.ordersHistoryPage;
  }
}

module.exports = { POManager };
