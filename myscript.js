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
let firstArg = '';
let secondArg = '';

const operations = function() {
    const calculator = {}

    calculator.add = function(a, b) {
        return a + b 
    };
    calculator.subtract = function(b, a) {
        return a - b;
    }
    calculator.multiply = function(a, b) {
        return (a*b);
    }
    calculator.divide = function(b, a) {
        if (b === 0) {
            return alert("lol nerd")
        } else {
        return (a/b);
        }
    }
    calculator.clear = function() {
        display.innerText = ''
        result;
        firstArg = ''
        secondArg = ''
    }
    calculator.decimal = function() {
        display.innerText += '.';
        firstArg += '.'
    }

    return calculator;
}(); 


const operationPusher = function() {
    const push = {}

    push.addPush = function() {
        if (typeof(firstArg) === 'string' && typeof(secondArg) === 'number') {
            operate();
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '+';
        storedOperator = operations.add
        } else {
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '+';
        storedOperator = operations.add
        }
    }
    push.subtractPush = function() {
        if (typeof(firstArg) === 'string' && typeof(secondArg) === 'number') {
            operate();
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '-';
        storedOperator = operations.subtract
        } else {
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '-';
        storedOperator = operations.subtract
        }
    }
    push.multiplyPush = function() {
        if (typeof(firstArg) === 'string' && typeof(secondArg) === 'number') {
            operate();
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += 'x';
        storedOperator = operations.multiply
        } else {
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += 'x';
        storedOperator = operations.multiply
        }
    }
    push.dividePush = function() {
        if (typeof(firstArg) === 'string' && typeof(secondArg) === 'number') {
            operate();
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '÷';
        storedOperator = operations.divide
        } else {
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += '÷'
        storedOperator = operations.divide
        }
    }; 
    return push;
}();

const operate = function() {
    if (typeof(firstArg) === 'string' && typeof(secondArg) === 'string') {
        alert('hit clear nerd')
    } else {
    result = storedOperator(Number(firstArg), Number(secondArg))
    display.innerText = Math.round(result);
    secondArg = 0;
    firstArg = result;
    return result;
    }
}


for (const number of numberBtns) {
    number.addEventListener('click', function(e) {
        if (display.innerText === '0') {
            operations.clear();
            display.innerText += number.innerText
            return firstArg += number.innerText
        }
        if (typeof(result) === 'number' && secondArg === 0 && typeof(firstArg === 'string')) {
            display.innerText += number.innerText;
            //firstArg += number.innerText;
        } else {
        display.innerText += number.innerText
        return firstArg += number.innerText
        }
    })
}

//const argOneButton = document.querySelector('.operator-equals').addEventListener('click', argumentOne);
const addButton = document.querySelector('.operator-add').addEventListener('click', operationPusher.addPush);
const subtractButton = document.querySelector('.operator-subtract').addEventListener('click', operationPusher.subtractPush);
const multiplyButton = document.querySelector('.operator-multiply').addEventListener('click', operationPusher.multiplyPush)
const divideButton = document.querySelector('.operator-divide').addEventListener('click', operationPusher.dividePush);
const equalsButton = document.querySelector('.operator-equals').addEventListener('click', operate);
const clearButton = document.querySelector('.operator-clear').addEventListener('click', operations.clear)
const decimalButton = document.querySelector('.operator-decimal').addEventListener('click', operations.decimal)
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

