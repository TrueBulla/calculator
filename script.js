//------Query Selectors
const numbers = document.querySelectorAll(".number");
const screen = document.querySelector(".content-calc_body-screen p");
const operators = document.querySelectorAll(".function");
const add = document.querySelector(".sum-button");
const subtract = document.querySelector(".subtract-button");
const divide = document.querySelector(".divide-button");
const multiply = document.querySelector(".multiply-button");
const clear = document.querySelector(".clear-button");
const equal = document.querySelector(".equal-button");

//-----Function Declarations
let firstNum;
let secondNum;
let operation;
let total = 0;
let displayNumber = "";

//-----Event Listeners
numbers.forEach((number) => {
  number.addEventListener("click", () => addNumbers(number));
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => addOperators(operator));
});
//event listener to reset all the variables that are used during calculation back to their default values when the clear button is pressed
clear.addEventListener("click", () => clearScreen());
//event listener to do the final operation of the series of operations when the equal button is pressed
equal.addEventListener("click", () => {
  //call the operate function
  operate();
  //clears the displayNumber variable so we can start a new calculation without clearing
  displayNumber = "";
  //the text of the calc screen becomes the total
  screen.textContent = total;
});

function addNumbers(number) {
  //when a number is pressed, add that number to the displayNumber variable
  displayNumber += number.textContent;
  //if no operation has been chosen yet, assign the display number to the firstNum variable
  if (!operation) {
    firstNum = parseInt(displayNumber);
  } else {
    //if an operation has been chosen, assign the display number to the secondNum variable
    secondNum = parseInt(displayNumber);
  }
  //display the displayNumber on the calc screen
  screen.textContent = displayNumber;
}
//this function selects the operator to be used for each calculation
function addOperators(operator) {
  //resets the display number to it's default value so we can add another number to it
  displayNumber = "";
  //if both numbers have been chosen, operate on them with the chosen operator
  if (firstNum && secondNum) {
    operate();
    //the total from that operation becomes the firstNum so it can be reused in a string of calculations
    firstNum = total;
    //the total is displayed on the calculator screen
    screen.textContent = total;
  }
  //adds an operator for the next calculation by grabbing the data-value of that operator
  operation = operator.dataset.value;
}
//function to clear the calc screen of all text and revert the variable back to default
function clearScreen() {
  firstNum = undefined;
  secondNum = undefined;
  operation = undefined;
  displayNumber = "";
  screen.textContent = "";
}
//-----MATH FUNCTIONS------
function sumOperator(a, b) {
  return a + b;
}
function subtractOperator(a, b) {
  return a - b;
}

function multiplyOperator(a, b) {
  return a * b;
}
function divideOperator(a, b) {
  return a / b;
}

//function to operate on the selected numbers
function operate() {
  //switch statement that takes the data-value from the chosen operator and executes one of the above functions based on that value
  switch (operation) {
    case "add":
      total = sumOperator(firstNum, secondNum);
      console.log(firstNum, secondNum, operation, total);
      break;
    case "subtract":
      total = subtractOperator(firstNum, secondNum);
      console.log(firstNum, secondNum, operation, total);
      break;
    case "multiply":
      total = multiplyOperator(firstNum, secondNum);
      console.log(firstNum, secondNum, operation, total);
      break;
    case "divide":
      total = divideOperator(firstNum, secondNum);
      console.log(firstNum, secondNum, operation, total);
      break;
    default:
      console.log("Oops");
  }
  return total;
}
