//f -> it is a reusable block of code written to overcome repetation and more

// type of f --> regular, named, arrow, anonymous

// Regular -> 

function add(){
console.log(1+1);
}
add() //function envocation 



function sum(a,b){               //parameter eg(a,b) -> placeholder that accepts data inside the function 
    console.log(a+b)
}
sum(3,4)       // argument-> data that passes data for parameter and written inside the function 



//regular function 

function add(category_id,Location_id){
    console.log(category_id+Location_id)    
}
add(2,3)

// named function

// let namedfun = function(a,b,c){
//     console.log(a+b+ " " + "raaj")
// }
// namedfun(2,3)


// named arrow function 

let namedfun = (a,b,c) => {
    console.log(a+b+ " " + "raaj")
}
namedfun(2,3)

//anynomous : when we need to pass the function as an argument

const callBack = (fn) =>{
    return isFinite
}

(()=>{
    console.log("anynomous")
})()
//square 
let prod_Price = (quan,price)=>{
   return quan*quan
}
const square_product = prod_Price(2)
console.log(square_product)

//one liner

const power = (a)=>a*a
 const getpow= power(4)
 console.log(getpow)

 //usercricle

 const usercircle= ["admin","superadmin","user"]
 console.log(usercircle[0])

 //
const leavetype=["sick_leave","casual_leave"]

for(let i=0;i<leavetype.length;i++){
    console.log(leavetype[i])

}
//using while

let i=0;
while(i<leavetype.length){
    console.log(leavetype[i])
    i++;
}

// for for string and array uptimized

for(leaveprint of leavetype){
    console.log(leaveprint)
}

//for
const employee ={
    name: "sagar",
    age: 21
}

for( let key in employee){
    console.log(key,employee[key])
}
//hoisting  var - undefined, hoisting: variable or function moves to top
// console.log(checkhoisting)
// var checkhoisting = "saroj nepali"

//hoisting  let - error
// console.log(checkhoisting)
// let checkhoisting = "saroj nepali"

add()
function add(){
    console.log(1+1)
}


// let - not hoisted
// add()
// let add=()=>
//     console.log(1+1)

// var add = function (){
//     console.log(1+1)
// }