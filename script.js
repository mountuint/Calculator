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
      //console.log(displayBox.innerText);
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
      //console.log(displayBox.innerText);
      let operatorArray = displayBox.innerText.match(/[+\-*/]/g);
      //console.log(operatorArray)
      if (operatorArray.length >= 2) {
        //console.log("it worked");
        //alert(displayBox.innerText)
        let indexOfOperator = 0;
        for (let i = 0; i < operatorArray.length; i++) {
          console.log(displayBox.innerText);
          console.log(operatorArray[i]);
          indexOfOperator = displayBox.innerText.indexOf(operatorArray[i]);
          console.log(indexOfOperator);
        }
        //console.log(indexOfOperator)
        /*let firstNumber = Number(
          displayBox.innerText.substring(0, indexOfOperator),
        );*/
        firstNumber = displayBox.innerText.substring(0, indexOfOperator);
        alert(firstNumber);
        //alert(indexOfOperator)
        //alert(displayBox.innerText.length)
        secondNumber = displayBox.innerText.substring(
          indexOfOperator + 1,
          displayBox.innerText.length - 1,
        );
        /*let secondNumber = Number(
          displayBox.innerText.substring(
            indexOfOperator + 1,
            displayBox.innerText.length - 1,
          ),
        );*/
        alert(secondNumber);
        //alert(displayBox.innerText);
        //displayBox.innerText = operate(operator, firstNumber, secondNumber);
        //let displayBoxValue = displayBox.innerText
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
      //alert(firstNumber);
      //let indexOfOperator = displayBox.innerText.indexOf(operator);
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
