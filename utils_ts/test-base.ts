//fixture base data set in javascript 
import {test as baseTest} from '@playwright/test';

interface TestDataForOrder{
  userName: string;
  password: string;
  productName: string;
};

export const customTest= baseTest.extend<{testDataForOrder:TestDataForOrder}>(
{
    testDataForOrder:{
        userName: "pandeyanish2001@gmail.com",
        password: "Pandey@123",
        productName: "ZARA COAT 3"
      }
})