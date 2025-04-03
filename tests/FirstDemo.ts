let msg:string ="Hi I'm anish kumar pandey";
console.log(msg);
let num:number=30;
console.log(num);
let isActive: boolean= true;
console.log(isActive);
 let numArray:number[]=[1,2,3,4,5];
 console.log(numArray);
 console.log(numArray.length);
 let stringArray :string[]=["apple","mango"];
 console.log(stringArray.length);
 let anyData:any="typscript";
 console.log(anyData);


 //------------------
 //function in typescript
  function add(a:number,b:number,c:number):number{
    return a+b-c;
  }
  console.log(add(3,5,7));

  //object creationn
   let user:{name:string,gender:string,age:number}={
    name:"Aman",
    gender:"male",
    age:35
   }
   console.log(user.name+" "+ user.gender+" "+ user.age);