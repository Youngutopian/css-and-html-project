// const computerChoiceDisplay = document.getElementById('Computer-ice')
// const userChoiceDisplay = document.getElementById('user-choice')
// const resultDisplay = document.getElementById('result');
// const possibleChoices = document.querySelectorAll('button');
// let userChoice

// possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener('click',() =>{
//   userchoice = e.target.id
//   userChoiceDisplay.innerHTML = userChoice
//   generateComputerChoice()
// }))

// function generateComputerChoice(){
//   const randomNumber = math.floor(math.random() *3) 
//}

// asychronouss
// console.log(" l ")
// console.log(" eat ")


// setTimeout(()=>{
//   console.log(" ice cream ")
// },4000)

// console.log(" with a ")
// console.log(" spoon ")


// function one (call_two) {
// console.log("step 1 complete.please call step 2")
// };
// call_two();


// function two () {

//   console.log("step 2")

// }

// one(two);
let  stocks = {
  fruits:['strawberry','grapes','banana','apple'],
  liquid: ['water','ice'],
  holder: ['cone','cup','stick'],
  toppings:['chocolate','peanuts'],
};


let order = (fruit_name,call_production) => {
 setTimeout(() =>{
  console.log(`${stocks.fruits[fruit_name]} was selected`)

 },2000)
  call_production()
};

let production = () =>{
  setTimeout(() => {
    console.log("production has started")
  });
};

order(0,production);