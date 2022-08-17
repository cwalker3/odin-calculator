//functions for simple calculations
const add = (a, b) => Number(a) + Number(b);

const subtract = (a, b) => a - b;

const mulitply = (a, b) => a * b;

const divide = (a, b) => a / b;

//function that takes 2 numbers and an operator and calls one of the above functions
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
let display = document.querySelector('.display');

//function that takes input array and gets values to use for operate function
let readInputs = (inputs) => {
    if ((!(Number(inputs[0]))) && a.length === 0) {
        display.textContent = 'ERROR';
        return;
    }
    let a = [];
    let b = [];
    let operator = [];
    for (let input of inputs) {
        if (input === ' ' && operator.length > 0 && b.length > 0) {
            a = [operate(a.join(''), operator.join(''), b.join(''))];
            b = [];
            operator = [];
            continue;
        }else if (Number(input) && operator.length === 0)
            a.push(input)
        else if (Number(input) && operator.length > 0)
            b.push(input)
        else if ((!Number(input)) && operator.length === 0 && input !== ' ')
            operator.push(input);
    }
        let answer = operate(a.join(''), operator.join(''), b.join(''));
        return String(answer).split('');
        

}

//function that puts inputs into input array and updates display
let updateDisplay = (e) => {
    let buttonValue = e.target.textContent;
    if (buttonValue === 'clear' || display.textContent === 'ERROR') {
        inputs = [];
    } else if (buttonValue === '=')
        inputs = readInputs(inputs);
    else if (Number(buttonValue) || buttonValue === '0') 
        inputs.push(buttonValue);
    else {
        inputs.push(' ');
        inputs.push(buttonValue);
        inputs.push(' ')
    }
    display.textContent = inputs.join('');
};

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', updateDisplay);
}



