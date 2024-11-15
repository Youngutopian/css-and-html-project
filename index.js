// let weather = "rainy"
// if(weather == "rainy"){
//   console.log("Grab your umbrella")
// }else {
//   console.log("wear your sunglasses")
// }

// function sayMyName(name){
//   console.log(name)
// }
// sayMyName("Bill Clinton")

// function greeting(name){
//   // greet = 'hi ' + name +",nice to meet you!"
//   // console.log(greet)
//   greet = `hi ${name},Nice to meet you`
//   console.log(greet)

// }
// greeting("Ali Kumbi")

// function sayMyName2(name){
//   greeting = `hi ${name},nice to see you today!`
//   console.log(greeting)
// }
// sayMyName2("Kevin Amadi")


// function sum( a,b){
//   // return
//   return a + b

// }
// num1 = sum(1,2)
// console.log(num1)

// function calculateFoodTotal (food,tip){
//   tipPercentage = tip /100
//   tipAmount = food * tipPercentage
//   total = sum(food,tio)
//   return total

// }

//console.log(calculateFoodTotal(100,20))


//const para = document.querySelector('.error')

// const paras = document.querySelectorAll('p');
// paras.array.forEach( paras=> {
//   console.log(paras)
  
// });

// const para = document.querySelector('p')
// para.innerText = 'Ninjas are awesome!'
// const paras = document.querySelectorAll("p");
// paras.forEach(paras =>{
//   paras.innerText += "new text"
// })
// function myFunction(p1,p2){
//   return p1 * p2
// }
// myFunction(4,5)

// let myFunction =(4,3);
// function myFunction(a,b){
//   return a * b
// }

const person = {
  firstname: "John",
  lastname: "Maina",
  age: 80,
  eyecolor: "Blue"
}
console.log(person["age"])

let age = person.lastname
console.log(age)


// create an object
const person3 = {};
person3.firstname = "Clinton";
person3.lastname = "Moreka";
person3.age = 22;
person3.eyecolor = "black"
console.log(person3)
person.nationality = "Chinese"
console.log(person)
delete person.age
console.log(person)

let fullSentence = person.firstname + " is " + person.age + " years old."
console.log(fullSentence)


const person4 = {
  firstname: "John",
  lastname :"Maina",
  id:39933716,
  fullName: function(){
    return (this.firstname + " " + this.lastname).toUpperCase();

  }
};
names  = person4.fullName();
console.log(names)