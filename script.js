let firstNumber;
let operator;
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
    return (a / b).toFixed(10);
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
        output.textContent = parseFloat(output.textContent) + parseFloat(num) * 0.1 / 10**rightValues;
    } else {
    output.textContent = parseFloat(output.textContent) * 10 + parseFloat(num);
    }
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
    output.textContent = parseFloat(-output.textContent);
}

function percentagise(){
    const output = document.querySelector(".output");
    output.textContent = divide(parseFloat(output.textContent), 100);
}

function addDot(){
    const output = document.querySelector(".output");
    output.textContent = parseFloat(output.textContent)+".";
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  // Add a click listener
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

