// A function that holds an object "calculator". The calculator object contains different operators as functions.
// The calculator object is instantiated by returning it at the end of the function. 
// Notice the parens at the end of the squiggly operations() squiggly bracket. 
// This automatically adds the () so that it can be called such as: operations.add(a, b) rather than operations().add(a,b)
const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number-button');
const operatorBtns = document.querySelectorAll('.math-operator');
display.innerText = '';
let storedOperator;
let result;
let firstArg = 0;
let secondArg = 0;

const operations = function() {
    const calculator = {}
    
    calculator.add = function(a, b) {
        return a + b 
    };
    calculator.subtract = function(a, b) {
        return a - b;
    }
    calculator.multiply = function(a, b) {
        if (b === 0) {
            return 1*b
        }; 
        return (a*b);
    }
    calculator.divide = function(a, b) {
        return (a/b);
    }

    return calculator;
}(); 


const operationPusher = function() {
    const push = {}

    push.addPush = function() {
        result = operations.add(Number(firstArg), Number(secondArg));
        secondArg = firstArg
        firstArg = 0;
        display.innerText += '+';
        storedOperator = operations.add;
        return result;
    }
    push.subtractPush = function() {
        result = operations.subtract(Number(firstArg), Number(secondArg));
        secondArg = firstArg
        firstArg = 0;
        display.innerText += '-';
        storedOperator = operations.subtract;
        return result;
    }
    push.multiplyPush = function() {
        result = operations.multiply(Number(firstArg), Number(secondArg));
        secondArg = firstArg
        firstArg = 0;
        display.innerText += 'x';
        storedOperator = operations.multiply;
        return result;
    }
    push.dividePush = function() {
        result = operations.divide(Number(firstArg), Number(secondArg));
        secondArg = firstArg
        firstArg = 0;
        display.innerText += '÷';
        storedOperator = operations.divide;
        return result;
    }; 
    return push;
}();

const operate = function() {
    display.innerText = ''
    result = storedOperator(Number(secondArg), Number(firstArg))
    display.innerText = result;
    secondArg = 0;
    firstArg = result;
    return result;
    //return secondArg = result;
}


for (const number of numberBtns) {
    number.addEventListener('click', function(e) {
        display.innerText += number.innerText
        return firstArg += number.innerText
    })
}

//const argOneButton = document.querySelector('.operator-equals').addEventListener('click', argumentOne);
const addButton = document.querySelector('.operator-add').addEventListener('click', operationPusher.addPush);
const subtractButton = document.querySelector('.operator-subtract').addEventListener('click', operationPusher.subtractPush);
const multiplyButton = document.querySelector('.operator-multiply').addEventListener('click', operationPusher.multiplyPush)
const divideButton = document.querySelector('.operator-divide').addEventListener('click', operationPusher.dividePush);
const equalsButton = document.querySelector('.operator-equals').addEventListener('click', operate);
/*
const oneButton = document.querySelector('.number-one').addEventListener('click', numbers.one);
const twoButton = document.querySelector('.number-two').addEventListener('click', numbers.two);
const threeButton = document.querySelector('.number-three').addEventListener('click', numbers.three);
const fourButton = document.querySelector('.number-four').addEventListener('click', numbers.four);
const fiveButton = document.querySelector('.number-five').addEventListener('click', numbers.five);
const sixButton = document.querySelector('.number-six').addEventListener('click', numbers.six);
const sevenButton = document.querySelector('.number-seven').addEventListener('click', numbers.seven);
const eightButton = document.querySelector('.number-eight').addEventListener('click', numbers.eight);
const nineButton = document.querySelector('.number-nine').addEventListener('click', numbers.nine);
arrayArguments = function() {
        return result.push(parseInt(display.innerText))
    }


for (const operator of operatorBtns) {
    operator.addEventListener('click', function(e) {
        return operations.innerText()
    })
}*/

