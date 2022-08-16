//functions for simple calculations
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const mulitply = (a, b) => a * b;

const divide = (a, b) => a / b;

//function that takes 2 numbers and an operator and calls one of the above function
const operate = (a, operator, b) => {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return mulitply(a, b);
        case '/':
            return divide(a, b);
    }
};
//array to store inputs
let inputs = [];
//variable to store display text
let displayText = document.querySelector('.display');

//variables to use in the operate function
let a;
let b;
let operator;

//function that takes input array and gets values to use for operate function
let  pairInputs = (inputs) => {
    
}

//function that puts inputs into input array and updates display
let updateDisplay = (e) => {
    let buttonValue = e.target.textContent;
    if (buttonValue === '=')
        pairInputs(inputs);
    else if (buttonValue === 'clear')
        inputs = [];
    else if (Number(buttonValue) || buttonValue === '0') 
        inputs.push(buttonValue);
    else {
        inputs.push(' ');
        inputs.push(buttonValue);
        inputs.push(' ')
    }
    displayText.textContent = inputs.join('');
};

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', updateDisplay);
}



