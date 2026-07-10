// ternary operator: it is used for true false condition either or condition if else condition
const isRaining= false
let rainCondition = isRaining ? "Take umbrella" : "Don't take umbrella"
console.log(rainCondition)


//short circuit 
const isLoggedIn=true
let checkLoggedIn = isLoggedIn && "Authenticated" || "Please Log In"
console.log(checkLoggedIn)


//nullish operator: null xa vane ?? paxi ko print, otherwise j value xa tei print

let age = null
let result = age ??  "no age"
console.log(result)
