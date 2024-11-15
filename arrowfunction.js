// arrow function with explicit return

// const sumArrow =(a,b) => {
//   return a + b 
// }

// // arrow function with implicit return,remove curly braces
// const sum2 = (a,b) => a + b
// console.log(sum2(10,50))

// const div = (a,b) => a / b

// console.log(div(100,50))


// const mut = (a,b) => a *b
// console.log(mut(30,30))


// const sub = (a,b) => a -b
// console.log(sub(100,50))

// const expo = (a,b) => a ** b
// console.log(expo(2,6))

// const sub2 = (a,b) => a**b
// console.log(sub2(5,4))
// the index gives you  the location of a value within an array.it is simlar to a street number
// const groceries =["banana","apple","orange","cherry","pear"]
//console.log(groceries)
//console.log(groceries[3])

// groceries.push("tomatoes")

// console.log(groceries)

// console.log(groceries.slice(0,6))

// console.log(groceries.slice(2,5))

// array methods(slice),push,indexof,length)
// console.log(groceries.indexOf("orange"))
// console.log(groceries.length)

// object
// const person ={
//   name: 'Leonardo',
//   shirt:'white'

// }

// // console.log(person.name)
// // console.log(person.shirt)


// // bracket notation
// // console.log(person["name"])
// // console.log(person["shirt"])

// // assign object
// // person.phone = "0742023759"
// // console.log(person.phone)
// // console.log(person)

// // person2
// // const person2  = {
// //   name: "Qazi",
// //   shirt:"black"


// // console.log(person2["name"])
// // console.log(person2['shirt'])

// const introducer =(name,shirt) => {
//   const intro = {
//     name: name,
//     shirt:shirt,
//     assets : 100000,
//     liability: 50000,
//     networth: function () {
//       return this.assets - this.liability
//     }
//   }

//  const person = `hi,my name is ${intro.name} and the color of my shirt is ${intro.shirt} and my net worth is $${intro.networth()} USD`


//  return person

// }
// console.log(introducer("Bill Clinton","Black"))
//console.log(introducer("Leonardo","white"))

// for loops
const groceries =["banana","apple","orange","cherry","pear"]
// for (let i = 0;i<groceries.length; i++){
//   console.log(groceries)
// }

// for(const fruit of groceries) {
//   console.log(fruit)

// }

const numbers = [1,2,3,4,5,6]

let result = []

for(const number of numbers){
  console.log(number**2)
  result.push(number *2)
}
console.log(result)


