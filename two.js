const names =["sagar","saroj","akash"]  // reassignment is possible in array -even with const
names[2]="saroj haina sabin ho"
console.log(names)


const days=["sunday", "monday", "tuesday"]
days[3]="wednesday"
console.log(days[1])
console.log(days)


// to put data at the end - push

days.push("thursday")
console.log(days)

//to remove data from the end - pop
days.pop()
console.log(days)

// unshift- similar to push but inserts data at first
days.unshift("saturday")
console.log(days)

//shift-similar to pop but removes first item of array
days.shift()
console.log(days)

//method: kehi kura.name()  -- method EG: days.shift() is a method
//function: kehikura()   - eg: shift()
// property: similar to method but there is no ()  eg: days.lenght

console.log(days.length)

//slice, splice, split


//slice-used to create a copy of a portion of the array, it doesn't modify the original array 
const numbers=[1,2,3,4,5,6]
//slice syntax=(startindex, endIndex): start index is inclusive endIndex is exclusive 
const newsliceArray = numbers.slice(1,4)
console.log(newsliceArray)
console.log(numbers)

//splice--> used to change the content of an array by removing or replacing it. it modifies original array also
//syntax---> splice(startIndex, deleteCount, items )
let newSplice = numbers.splice(2,1,10,11)
console.log(newSplice)  // kun number hatayo tyo dekhauxa
console.log(numbers)

//split - used in a string
let text= "I am a Forward Soft"
const splittedText= text.split(" ")      //dillemeter -> k ko basis ma split garne tyo kura eg: here space is dillemeter
console.log(splittedText)