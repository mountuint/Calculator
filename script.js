function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return addNumbers(firstNumber, secondNumber);
    case "-":
      return subtractNumbers(firstNumber, secondNumber);
    case "*":
      return multiplyNumbers(firstNumber, secondNumber);
    case "/":
      if (secondNumber === 0) {
        return "Nice try hehe";
      }
      return divideNumbers(firstNumber, secondNumber);
  }
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;

const displayBox = document.querySelector(".displayBox");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (Number.isFinite(Number(value)) || value === ".") {
      if (resultDisplayed) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        displayBox.textContent = "";
        resultDisplayed = false;
      }

      if (operator === "") {
        if (value === "." && firstNumber.includes(".")) return;

        if (value === "." && firstNumber === "") {
          firstNumber = "0.";
        } else {
          firstNumber += value;
        }

        displayBox.textContent = firstNumber;
      } else {
        if (value === "." && secondNumber.includes(".")) return;

        if (value === "." && secondNumber === "") {
          secondNumber = "0.";
        } else {
          secondNumber += value;
        }

        displayBox.textContent = firstNumber + operator + secondNumber;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (firstNumber === "") return;

      if (operator === "") {
        operator = value;
        resultDisplayed = false;
        
        displayBox.textContent = firstNumber + operator;
      } else if (secondNumber !== "") {
        let result = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );

        if (result === "Nice try hehe") {
          displayBox.textContent = result;

          firstNumber = "";
          secondNumber = "";
          operator = "";
          resultDisplayed = true;

          return;
        }

        if (typeof result === "number") {
          result = Math.round(result * 1000) / 1000;
        }

        firstNumber = String(result);

        secondNumber = "";
        operator = value;

        displayBox.textContent = firstNumber + operator;
      } else {
        operator = value;
        displayBox.textContent = firstNumber + operator;
      }
    } else if (value === "=") {
      if (operator !== "" && secondNumber !== "") {
        let result = operate(
          operator,
          Number(firstNumber),
          Number(secondNumber),
        );

        if (result === "Nice try hehe") {
          displayBox.textContent = result;

          firstNumber = "";
          secondNumber = "";
          operator = "";
          resultDisplayed = true;

          return;
        }

        if (typeof result === "number") {
          result = Math.round(result * 1000) / 1000;
        }

        firstNumber = String(result);

        displayBox.textContent = firstNumber;
        resultDisplayed = true;

        secondNumber = "";
        operator = "";
      }
    } else if (value === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      displayBox.textContent = "";
      resultDisplayed = false;
    }
  });
});
