const {LoginPage} =require('./LoginPage');
const{DashboardPage}= require('./DashboardPage');
const {CartPage} = require('./CartPage');
const{FillDetailsPage} = require('./FillDetailsPage');
const{OrdersHistoryPage}=require('./OrdersHistoryPage');


class POManager{
    constructor(page){
        this.page=page;
         this.loginPage =new LoginPage(this.page);
         this.dashboardPage = new DashboardPage(this.page);
         this.cartPage = new CartPage(this.page);
         this.fillDetailsPage = new FillDetailsPage(this.page);
         this.ordersHistoryPage = new OrdersHistoryPage(this.page);
    }

    getLoginpage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getDetailsPage(){
        return this.fillDetailsPage;
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage;
    }

}

module.exports={POManager};