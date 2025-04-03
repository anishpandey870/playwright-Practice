const productPrices =[120,45,30,200,75,50,90,20,10,150];
const discountedPrices = productPrices.map(p => p*0.9);
console.log(discountedPrices);

 /*function disCountP(price){
 return price*0.9;
 }
 let dprice= productPrices.map(disCountP)
 console.log(dprice); */

 const affordableProducts = discountedPrices.filter(p=>p<50)
 console.log(affordableProducts);

 const totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);
console.log("Total Cost of Affordable Products:", totalCost);