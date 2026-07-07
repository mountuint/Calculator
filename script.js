function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function extractNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplyNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divideNumbers(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return addNumbers(firstNumber, secondNumber);
  } else if (operator === "-") {
    return extractNumbers(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiplyNumbers(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divideNumbers(firstNumber, secondNumber);
  }
}

const btn = document.querySelectorAll("button");
const displayBox = document.querySelector(".displayBox");

for (let i = 0; i < btn.length; i++) {
  if (Number.isFinite(Number(btn[i].textContent))) {
    btn[i].addEventListener("click", () => {
      displayBox.textContent += btn[i].textContent;
    });
  } else if (
    btn[i].textContent === "+" ||
    btn[i].textContent === "-" ||
    btn[i].textContent === "/" ||
    btn[i].textContent === "*"
  ) {
    btn[i].addEventListener("click", () => {
      displayBox.textContent += btn[i].textContent;
    })
  } else if(btn[i].textContent === "=") {
    btn[i].addEventListener("click", () => {
      
    })
  }
}
