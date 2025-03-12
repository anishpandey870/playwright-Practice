//fixture base data set in javascript 
const base= require('@playwright/test');

exports.customtest =base.test.extend(
{
    testDataForOrder:{
        userName: "pandeyanish2001@gmail.com",
        password: "Pandey@123",
        productName: "ZARA COAT 3"
      }
})