let firstNumber = "";
let secondNumber = "";
let operator = "";
let outcome = 0;

const btn = document.querySelectorAll("button");
const displayBox = document.querySelector(".displayBox");

function operate(operator, firstNumber, secondNumber) {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  }
}




// for (let i = 0; i < btn.length; i++) {
//   if (Number.isFinite(Number(btn[i].textContent))) {
//     btn[i].addEventListener("click", () => {
//       displayBox.textContent += btn[i].textContent;
//       if (operator !== "") {
//         secondNumber += btn[i].textContent;
//         console.log("this is the secondNumber: " + secondNumber);
//       } else if (operator == "") {
//         firstNumber += btn[i].textContent;
//         console.log("this is the firstNumber: " + firstNumber);
//       }
//     });
//   } else if (
//     btn[i].textContent === "+" ||
//     btn[i].textContent === "-" ||
//     btn[i].textContent === "/" ||
//     btn[i].textContent === "*"
//   ) {
//     btn[i].addEventListener("click", () => {
//       displayBox.textContent += btn[i].textContent;
//       operator = btn[i].textContent;
//       console.log(operator);
//       console.log(displayBox.textContent);

//       if (secondNumber !== "") {
//         outcome = operate(operator, Number(firstNumber), Number(secondNumber));
//         displayBox.textContent = operate(
//           operator,
//           Number(firstNumber),
//           Number(secondNumber),
//         );
//         //alert(outcome);
//         firstNumber = outcome;
//         alert(firstNumber);
//         secondNumber = "";
//         console.log("value of the second number " + secondNumber);
//       }
//     });
//   } else if (btn[i].textContent === "=") {
//     btn[i].addEventListener("click", () => {
//       outcome = operate(operator, Number(firstNumber), Number(secondNumber));
//       displayBox.textContent = operate(
//         operator,
//         Number(firstNumber),
//         Number(secondNumber),
//       );
//       alert(outcome);
//       firstNumber = outcome;
//       secondNumber = "";
//       //console.log(firstNumber)
//     });
//   } else if (btn[i].textContent === ".") {
//     btn[i].addEventListener("click", () => {
//       displayBox.textContent += btn[i].textContent;
//       if (operator !== "") {
//         secondNumber += btn[i].textContent;
//         console.log("this is the secondNumber: " + secondNumber);
//       } else if (operator == "") {
//         firstNumber += btn[i].textContent;
//         console.log("this is the firstNumber: " + firstNumber);
//       }
//     });
//   } else if (btn[i].textContent === "clear") {
//     btn[i].addEventListener("click", () => {
//       displayBox.textContent = "";
//       firstNumber = "";
//       secondNumber = "";
//       operator = "";
//     });
//   }
// }
