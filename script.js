let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let resultCalculated = false;

const calculatorScreen = document.querySelector(".calculator-screen");

const numbers = document.querySelectorAll(".number");

const inputNumber = (number) => {
    if (resultCalculated) {
        currentNumber = number;
        resultCalculated = false;
    } else {
        if (currentNumber === '0') {
            currentNumber = number;
        } else {
            currentNumber += number;
        }
    }
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const equalSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result.toString();
    calculationOperator = '';
    resultCalculated = true;
};

equalSign.addEventListener("click", (event) => {
    calculate();
    updateScreen(currentNumber);
});

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

clearBtn.addEventListener("click", (event) => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
