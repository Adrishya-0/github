const person ={
    name: "babu vaiya",
    address:"ktm"
};

person.age =22
person.name="suraj vaiya"

console.log(Object.keys(person))  //objects ko keys herna milxa
console.log(Object.values(person)) //objects ko values herna milxa

Object.freeze(person)  //it will prevent modification 
person.age=25  //it will not save because it is freezed
console.log(person)

//condition
const isRaining= true
    if(isRaining)
    {
        console.log("carry ubrella")
    }

const isWorking =  false
if(isWorking){
    console.log("count as a PD")
}
else{
    console.log("Absent")
}


const temp = 30
if(temp>30){
    console.log("it is hot outside")
}
else if(temp>=20 && temp<30){
      console.log("it is normal outside")
}
else{
    console.log("it is cold outside")
}

//ternary operator 
const isLiveStreaming= false;

const result = isLiveStreaming ? "yes, live streaming" : "no, not live stream"
console.log(result)


//short circuit evaluation

const resultcircuit = isLiveStreaming && "yes, live" || "no live"
console.log(resultcircuit)

let isLoggedIn = true

const name=isLoggedIn && "Authenticated"
console.log(name)

//Nullish coolescing operator-only works for null or undefined
//syntax  variable?? "comment"

let age = 20
// if(age==null || age==undefined){
//     age = "no age"
// }

let showResult = age?? "No age"
console.log(showResult)



//object and their properties

const clothes={
    name: "denim",
    size:"XL"
}
console.log(Object.keys(clothes))  //to see the keys
console.log(Object.values(clothes)) //to see the values

// add object to an array

clothes.company="china"
clothes.price=500
console.log(clothes)

//replace keys or values in array
clothes.company="india"
clothes.price=20
console.log(clothes)

//freeze the object
Object.freeze(clothes)
clothes.name="apolo"
console.log(clothes)  //nothing changes

//condition 

const isNepali=false
if(isNepali){
    console.log("buy from nepal")
}else{
    console.log("buy from india")
}

//signup (ternary)
const isSuperAdmin=true
const checkadmin = isSuperAdmin ? "welocome to the dashboard" : "wrong information"

//short circuit
const storeresult= isSuperAdmin && " hello Admin Welcome to the DASHBOARD" || "Don't show the dashboard"

console.log(storeresult)


let isloggedOut= true
const displaylogout = isloggedOut && "Please login or register"
console.log(displaylogout)


//Nullish coelescing operator useful for null or undefined

let blankage = null
let setmessage = blankage ?? "no age"
console.log(setmessage)

//