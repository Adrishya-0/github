// js is dynamic

var a=1;
a="abishek";


//but we can make it static by using typescript

// var a:number =1;
// a="Abishek"

console.log(a)


//VARIABLE-VAR-CONST-LET-OBJECT-ARRAY-HOISTING

var cup= "coffee";
let cap= "cap-2";
//var,let - reassigning is possible  // const-reassigning is not possible

var bike = "pulsar";
bike="ulcer"

let product="mic"
pruduct="car"

// const books="english"             ---wrong
// books = "math"



// var: global and function scope   let-block level scope     const- block 


// if(true){            //gives error in let 
//     let name="john doe"       

/////  console.log(name)      //can be accessable only inside here
   
// }
//  console.log(name)


if(true){            //gives error in let,const
    let name="john doe"       

 console.log(name)      //can be accessable only inside here
   
}
 
if(true){            //doesn't give error
    var name="john doe";
}
console.log(name)

const age = 21
const agemonth="21j"    //string

const isNepali = true       //it is either true or false

//boolean, string, integer are premitive
//array objects are non premitive

const name2="raj";
console.log(name2+" " +"nepal");



let friends=["raj","bob","mahen",17]
console.log(friends[0])

let khoyo={
    company_name: "your_company",
    address:"Nepal"
};
{
    company_name:"my_company",
    address="India"
}

console.log(khoyo.address)

