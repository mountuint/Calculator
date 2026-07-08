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

let firstNumber = "";
let secondNumber = "";
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
      if (operator !== "") {
        secondNumber += btn[i].textContent;
        console.log("this is the secondNumber: " + secondNumber);
      } else if (operator == "") {
        firstNumber += btn[i].textContent;
        console.log("this is the firstNumber: " + firstNumber);
      }
    });
  } else if (
    btn[i].textContent === "+" ||
    btn[i].textContent === "-" ||
    btn[i].textContent === "/" ||
    btn[i].textContent === "*"
  ) {
    btn[i].addEventListener("click", () => {
      displayBox.textContent += btn[i].textContent;
      operator = btn[i].textContent;
      console.log(operator);
    });
  } else if (btn[i].textContent === "=") {
    btn[i].addEventListener("click", () => {
      displayBox.textContent = operate(
        operator,
        Number(firstNumber),
        Number(secondNumber),
      );
    });
  } else if (btn[i].textContent === ".") {
    btn[i].addEventListener("click", () => {
      displayBox.textContent += btn[i].textContent
      if (operator !== "") {
        secondNumber += btn[i].textContent;
        console.log("this is the secondNumber: " + secondNumber);
      } else if (operator == "") {
        firstNumber += btn[i].textContent;
        console.log("this is the firstNumber: " + firstNumber);
      }
    });
  } else if (btn[i].textContent === "clear") {
    btn[i].addEventListener("click", () => {
      displayBox.textContent = "";
      firstNumber = "";
      secondNumber = "";
      operator = "";
    });
  }
}
