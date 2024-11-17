/*
  ===== Step 1: =====
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1947
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 18 years old."

*/

//===== Your code goes here =================

const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);




const values = require("./follow");
let errored = false;

console.log("\n---------------------------------\n\n")

if (values.testGroup === "a") {
  if (values.birthYear !== 1947) {
    console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
    errored = true;
  }

  if (values.thisYear !== 1965) {
    console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
    errored = true;
  }

  if (values.firstName !== "Carlos") {
    console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
    errored = true;
  }

  if (values.lastName !== "Stevenson") {
    console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
    errored = true;
  }

  if (values.greeting !== "Hello! My name is Carlos Stevenson and I am 18 years old.") {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

if (values.testGroup === "b") {
  if (values.birthYear !== 1947) {
    console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
    errored = true;
  }

  if (values.thisYear !== 1965) {
    console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
    errored = true;
  }

  if (values.firstName !== "Carlos") {
    console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
    errored = true;
  }

  if (values.lastName !== "Stevenson") {
    console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
    errored = true;
  }

  if (values.age !== 18) {
    console.error(`age is incorrect, it's currently: "${values.age}"`);
    errored = true;
  }

  if (values.fullName !== "Carlos Stevenson") {
    console.error(`fullName is incorrect, it's currently: "${values.fullName}"`);
    errored = true;
  }

  if (values.greeting !== "Hello! My name is Carlos Stevenson and I am 18 years old.") {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

if (!errored && values.testGroup === "a") {
  console.log("Congrats! Move onto the next step!");
} else if (errored && values.testGroup === "a") {
  console.log("Try again")
}

if (!errored && values.testGroup === "b") {
  console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
  console.log("Try again")
}

console.log("\n---------------------------------\n\n")