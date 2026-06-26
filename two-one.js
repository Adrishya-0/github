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

