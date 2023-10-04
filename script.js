// jonasshmedtmann/complete-javascript-course

/*
let feature = 'Amazing'
console.log(feature)

let firstName = 'Jonas'
let lastName = ' Shmedtmann'
console.log(firstName+lastName + ' is '+ feature)

let firstJob = 'programmer'
let currentJob = 'teacher'

console.log(firstName + ' was ' + firstJob + 
' before becoming a '+ currentJob)
*/

/************************Data Types********************************/
// Number: Floating Point number - used for decimal and integers let age = 23
// String: Sequence of character - used for text  let firstName = 'jonas'
// Boolean: Logical type that can only be true or false - used for taking decisions let adult = true
// Undefined: Value taken by a variabel that is not yet defined ('empty value') let children
// Null: Also means 'empty value'
// Symbol: Value that is unique and cannot be changed [Not useful for now]
// BigInt: Larger integers than the Number type can hold
// dynamicTyping: Change the type of the variable let x = 23 ...  x = 's'

/*
let javascriptIsFun = true
console.log(javascriptIsFun+ ' and its type is '+typeof(javascriptIsFun))

console.log(typeof(true))
console.log(typeof('jonas'))
console.log(typeof(23))

javascriptIsFun = 'Fun'  // dynamic typing.

console.log(javascriptIsFun+ ' and its type is '+typeof(javascriptIsFun))

let year
console.log(year)
console.log(typeof(year))

year = 1403
console.log(year)
console.log(typeof(year))

console.log(typeof(null))  // bug: typeof(null) is object!
*/

/*
let age = 30
age = 31;

const birthYear = 1991
// birthYear = 1990   Error

// const job   Error

var job  = 'programmer'
job = 'teacher'
console.log(job)

firstName = 'Schmedtmann'  // Exists, but should never be declared like this.
console.log(firstName)
*/

/******************************Operators***************************/

/*
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)
console.log(ageJonas * 2, ageJonas / 10, 2**3)
// 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
const fullName = firstName +" "+ lastName
console.log(fullName)

let x = 10 + 5
console.log('x is now :'+x)

x += 10    // x = x + 10
console.log('x is now :'+x)
x -= 10    // x = x - 10
console.log('x is now :'+x)

x *= 10    // x = x * 10
console.log('x is now :'+x)

x /= 10    // x = x / 10
console.log('x is now :'+x)

x++  // x = x + 1
console.log('x is now :'+x)

x--  // x = x - 1
console.log('x is now :'+x)

console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)
console.log(ageJonas <= 18)
const isAdult = ageSarah >= 18
console.log(isAdult)
*/

/******************Operator precedence*****************************/


let x, y
x = y = 25 - 10 - 5
console.log(x, y)


/******************Coding challenge 1*****************************/
/*
// const massMark = 78
// const heightMark = 1.69
// const heightJohn = 1.95
// const massJohn = 92

const massMark = 95
const heightMark = 1.88
const heightJohn = 1.76
const massJohn = 85


const BMIMark = massMark / heightMark ** 2
console.log("BMI of Mark is :",BMIMark)

const BMIJohn = massJohn / heightJohn ** 2
console.log("BMI of John is :",BMIJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(markHigherBMI)
*/

/*****************Strings and Template literals******************/
/*
const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm "+ firstName + ', a ' + (year-birthYear) + ' years old ' +job
console.log(jonas)

//Template Literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`
console.log(jonasNew)

console.log(`String
multiple
lines.`)
*/

/**************************Decision Making************************/
/*
const age = 15

if (age >= 18) {
  console.log("Sarah can start driving😊");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearLeft} years`);
}


let century
const birthYear = 2012
if (birthYear <= 2000){
    century = 20
}else{
    century = 21
}
console.log(century)
*/
/******************Coding challenge 2*****************************/
/*
const massMark = 78
const heightMark = 1.69
const heightJohn = 1.95
const massJohn = 92

// const massMark = 95
// const heightMark = 1.88
// const heightJohn = 1.76
// const massJohn = 85


const BMIMark = massMark / heightMark ** 2
console.log("BMI of Mark is :",BMIMark)

const BMIJohn = massJohn / heightJohn ** 2
console.log("BMI of John is :",BMIJohn)


if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/

/********************Type Conversion and Coersion***************/
/*
// Type Conversion
const inputYear = '1991'
console.log(inputYear + 1)
console.log(Number(inputYear)+ 19)  // Number(inputYear)++ -> does not work

console.log(Number('jonas'))  // gives NaN
console.log(typeof(NaN))

console.log(String(23))

// Type Coersion
console.log('Iam '+ 23 + ' years old')

console.log('23' - '10' - '3')  // String got converted to numbers

console.log('23' > '18')  // String got converted to numbers

let n = '1' + 1
n = n - 1
console.log(n)
*/
/***********************Truthy and Falsy***********************/
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100

if (money){
  console.log(`Don't spend it all😉`)
}else{
  console.log(`You should get a job`)
}

let height = 0
if (height != NaN){
  console.log(`YAY! Height is defined`)
}else{
  console.log(`Height is UNDEFINED`)
}
*/
/**********************Equality operator == Vs ===**************/
/*
const age = 18
if (age === 18) console.log(`You just became an adult`)
// === donot perform type coersion, strictly equal. (type same, value same --> true)
// == perform type coersion, losely equal.  (type (dont care), value same --> value)
// '18' == 18 --> True
//  18 == 18 --> True
// '18' === 18 --> False
// 18 === 18 --> True
// !== strict version
// != loose version

const number = Number(prompt(`What's your number ?`))
console.log(`${typeof number}`)

if (number === 23) {
  console.log("Cool! 23 is an amazing number.")
}else if (number === 7){
  console.log('7 is also cool number')
} 
else {
  console.log("number is not 7 or 23")
}
*/

/**************************Boolean Logic***********************/
/*
const hasDriversLicense = true // A
const hasGoodVision = true  // B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive){
  console.log('Sarah is able to drive!')
}else{
  console.log('Someone else should drive...')
}

const isTired = true // C

console.log(hasDriversLicense && hasGoodVision && isTired)

console.log(hasDriversLicense || hasGoodVision || isTired)


if (hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!')
}else{
  console.log('Someone else should drive...')
}
*/

/***************************Coding Challenge 3*******************/
/*
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas){
  console.log('Dolphins win the trophy🏆')
}
else if (scoreDolphins < scoreKoalas){
  console.log('Koalas win the trophy🏆')
}
else if (scoreDolphins === scoreKoalas){
  console.log('Both win the trophy')
}

//Bonus - 1
const scoreDolphins = (97 + 112 + 81) / 3
const scoreKoalas = (109 + 95 + 86) / 3
console.log(scoreDolphins, scoreKoalas)

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log('Dolphins win the trophy🏆')
}
else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
  console.log('Koalas win the trophy🏆')
}
else if (scoreDolphins === scoreKoalas && 
  scoreDolphins >= 100 && scoreKoalas >= 100){
  console.log('Both win the trophy')
}
else{
  console.log('No one wins the trophy☹️')
}
*/

/*************************Switch Statment***********************/
/*
const day = 'monday'

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory vidoes");
    break;
  case "wednesday":
  case "thursday":
    console.log("Writing code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}
*/

/****************Ternary Operator************************/
/*
const age = 23
// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water 💦')


const drink = age >= 18 ? 'wine🍷' : 'water 💦'
console.log(`I like ${drink}`)
*/

/***************************Coding Challenge 4*******************/

// const bill = 430
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

// console.log(`The bill was ${bill}, the tip was ${tip}, and \
// the total value ${bill + tip}`)