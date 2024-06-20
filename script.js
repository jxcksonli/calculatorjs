let firstNumber;
let operatorC;
let secondNumber;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b == 0){
        return "Undefined";
    };
    return (a / b).toFixed(4);
}

function operate(a, operator, b){
        switch(operator){
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "*":
                return multiply(a, b);
            case "/":
                return divide(a, b);
        }
}


function updateValue(num){
    const output = document.querySelector(".output");
    if (output.textContent.includes('.')){
        let rightValues = countDecimal(output.textContent);
        if (parseFloat(output.textContent) >= 0){
        output.textContent = parseFloat(output.textContent) + parseFloat(num) * 0.1 / 10**rightValues} 
        else {
            output.textContent = parseFloat(output.textContent) - parseFloat(num) * 0.1 / 10**rightValues
        };
    } else if (parseFloat(output.textContent) >= 0){
    output.textContent = parseFloat(output.textContent) * 10 + parseFloat(num);
    } else {
        output.textContent = parseFloat(output.textContent) * 10 - parseFloat(num);
    }
}

function changeValue(num){
    const output = document.querySelector(".output");
    output.textContent = num;
}

function countDecimal(num){
    const decimalIndex = num.indexOf('.');
    return num.length - decimalIndex -1;
}

function resetValue(){
    const output = document.querySelector(".output");
    output.textContent = 0;
}

function changeSign(){
    const output = document.querySelector(".output");
    output.textContent = multiply(output.textContent, -1);
}

function percentagise(){
    const output = document.querySelector(".output");
    output.textContent = divide(parseFloat(output.textContent), 100);
}

function addDot(){
    const output = document.querySelector(".output");
    output.textContent = parseFloat(output.textContent)+".";
}

function addOperator(operator){
    const output = document.querySelector(".output");
    output.textContent = String(output.textContent) + String(operator);
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    updateValue(number.textContent);
});
});

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
addDot()});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
resetValue()});

const sign = document.querySelector(".sign");
sign.addEventListener("click", () => {
changeSign()});

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
percentagise()});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  // Add a click listener
  operator.addEventListener("click", () => {
    const output = document.querySelector(".output");
    operatorC = operator.textContent
    firstNumber = parseFloat(output.textContent);

    addOperator(operator.textContent);
    resetValue();
});
});

const equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
    const output = document.querySelector(".output");
    secondNumber =  parseFloat(output.textContent);
    output.textContent = operate(firstNumber, operatorC.trim(), secondNumber);
    });
