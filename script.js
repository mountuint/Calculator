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

let firstNumber = 0
let secondNumber = 0
let operator = "operator";

function operate(operator, number1, number2) {
    if(operator === "+") {
        return addNumbers(number1, number2);
    } else if (operator === "-") {
        return subtractNumbers(number1, number2)
    } else if (operator === "*") {
        return multiplyNumbers(number1, number2)
    } else if (operator === "/") {
        return divideNumbers(number1, number2)
    }
}

