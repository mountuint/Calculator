function addNumbers(number1, number2) {
  return number1 + number2;
}

function subtractNumbers(number1, number2) {
  return number1 - number2;
}

function multiplyNumbers(number1, number2) {
  return number1 * number2;
}

function divideNumbers(number1, number2) {
  return number1 / number2;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = 0;

function operate(operator, number1, number2) {
  if (operator === "+") {
    return addNumbers(number1, number2);
  } else if (operator === "-") {
    return subtractNumbers(number1, number2);
  } else if (operator === "*") {
    return multiplyNumbers(number1, number2);
  } else if (operator === "/") {
    return divideNumbers(number1, number2);
  }
}

const btn = document.querySelectorAll(".button");
let displayBox = document.querySelector(".displayBox");

for (let i = 0; i < btn.length; i++) {
  if (Number.isFinite(Number(btn[i].textContent))) {
    btn[i].addEventListener("click", () => {
      displayBox.innerText += btn[i].innerText;
    });
  } else if (
    btn[i].textContent === "+" ||
    btn[i].textContent === "-" ||
    btn[i].textContent === "*" ||
    btn[i].textContent === "/"
  ) {
    btn[i].addEventListener("click", () => {
      firstNumber = displayBox.innerText;
      console.log(firstNumber);
      displayBox.innerText += btn[i].innerText;
      operator = btn[i].innerText;
      let operatorArray = displayBox.innerText.match(/[+\-*/]/g);
      if (operatorArray.length >= 2) {
        let indexOfOperator = 0;
        for (let i = 0; i < operatorArray.length; i++) {
          console.log(displayBox.innerText);
          console.log(operatorArray[i]);
          indexOfOperator = displayBox.innerText.indexOf(operatorArray[i]);
          console.log(indexOfOperator);
        }
        firstNumber = displayBox.innerText.substring(0, indexOfOperator);
        alert(firstNumber);

        secondNumber = displayBox.innerText.substring(
          indexOfOperator + 1,
          displayBox.innerText.length - 1,
        );
        
        alert(secondNumber);
        
        let displayBoxValue = operate(operator, firstNumber, secondNumber);
        console.log(displayBoxValue);
        displayBox.innerText = displayBoxValue + operator;
        alert(displayBox.innerText);
      }
    });
  } else if (btn[i].textContent === "=") {
    btn[i].addEventListener("click", () => {
      let indexOfOperator = displayBox.innerText.indexOf(operator);
      let firstNumber = Number(
        displayBox.innerText.substring(0, indexOfOperator),
      );
      
      let secondNumber = Number(
        displayBox.innerText.substring(
          indexOfOperator + 1,
          displayBox.innerText.length,
        ),
      );
      console.log(firstNumber, typeof firstNumber);
      console.log(secondNumber, typeof secondNumber);
      displayBox.innerText = operate(operator, firstNumber, secondNumber);
    });
  } else if (btn[i].textContent === "clear") {
    btn[i].addEventListener("click", () => {
      firstNumber = 0;
      secondNumber = 0;
      displayBox.innerText = "";
    });
  }
}
