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

let clearBool = false;

//function that takes input array and gets values to use for operate function
let readInputs = (inputs) => {
    let a = [];
    let b = [];
    let operator = [];
    for (let input of inputs) {
        if (input === ' ' && operator.length > 0 && b.length > 0) {
            a = [operate(a.join(''), operator.join(''), b.join(''))];
            b = [];
            operator = [];
            continue;
        }else if (Number.isInteger(Number(input)) && operator.length === 0)
            a.push(input)
        else if (Number.isInteger(Number(input)) && operator.length > 0)
            b.push(input)
        else if (input !== ' ' && operator.length === 0)
            operator.push(input);
    }
    //if (a.length )
    let answer = operate(a.join(''), operator.join(''), b.join(''));
    return String(answer).split(''); 
}

//this bool will be used to ignore the input of 2 math symbols in a row
let ignoreInputBool = false;
//this bool will be used to only allow the '=' button when the values are ready
let readyBool = false;

//function that puts inputs into input array and updates display
let updateDisplay = (e) => {
    let buttonValue = e.target.textContent;
    //when the 'clear' button is pressed, the inputs array is cleared
    if (buttonValue === 'clear')
        inputs = [];
        //when the '=' button is pressed, runs the readInputs function
    else if (buttonValue === '=' && readyBool) {
        inputs = readInputs(inputs) 
        readyBool = false;
        ignoreInputBool = false;
        clearBool = true;
    }
        //if input is a number, add it to the inputs array
    else if (Number(buttonValue) || buttonValue === '0') {
        //if clearBool is set to true, clear the inputs array first
        if (clearBool) 
            inputs = [];
            clearBool = false;
        if (ignoreInputBool) 
            readyBool = true;
        inputs.push(buttonValue);
        ignoreInputBool = false;
    //if input is a math symbol, add it the inputs array, with spaces on both sides
    }else if (!ignoreInputBool) {
        //if the inputs array is empty, add 0 to the array first
        if (inputs.length === 0) 
            inputs.push(0);
        clearBool = false;
        inputs.push(' ');
        inputs.push(buttonValue);
        inputs.push(' ');
        //set ignoreInputBool to true so we ignore mutiple math symbols in a row
        ignoreInputBool = true;
    }

    display.textContent = inputs.join('');
};

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', updateDisplay);
}



