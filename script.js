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