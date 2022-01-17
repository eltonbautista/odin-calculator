// A function that holds an object "calculator". The calculator object contains different operators as functions.
// The calculator object is instantiated by returning it at the end of the function. 
// Notice the parens at the end of the squiggly operations() squiggly bracket. 
// This automatically adds the () so that it can be called such as: operations.add(a, b) rather than operations().add(a,b)
const display = document.querySelector('#display');
const btnContainer = document.querySelector('#button-container');
display.innerText = '';
//const ans = 0;
let result = [0];
let firstArg = '';
let secondArg;

const operations = function() {
    const calculator = {}
    
    calculator.add = function(a, b) {
        return a + b 
    };
    calculator.subtract = function(a, b) {
        return a - b;
    }
    calculator.multiply = function(a, b) {
        if (a === 0) {
            return 1*b
        }; 
        return (a*b);
    }
    calculator.divide = function(a, b) {
        return (a/b);
    }

    return calculator;
}(); 

const numbers = function() {
    const numberButtons = {}

    numberButtons.one = function() {
        display.innerText += 1;
        return firstArg += 1;
    }
    numberButtons.two = function() {
         display.innerText += 2;
         return firstArg += 2
    }
    numberButtons.three = function() {
        display.innerText += 3;
        return firstArg += 3
    }
    numberButtons.four = function() {
        display.innerText += 4;
        return firstArg += 4
    }
    numberButtons.five = function() {
        display.innerText += 5;
        return firstArg +=5
    }
    numberButtons.six = function() {
        display.innerText += 6;
        return firstArg += 6
    }
    numberButtons.seven = function() {
        display.innerText += 7;
        return firstArg +=7
    }
    numberButtons.eight = function() {
        display.innerText += 8;
        return firstArg+= 8
    }
    numberButtons.nine = function() {
        display.innerText += 9;
        return firstArg+= 9
    }

    numberButtons.arrayArguments = function() {
        return result.push(parseInt(display.innerText))
    }
    return numberButtons;
}();

const operationPusher = function() {
    const push = {}

    push.addPush = function() {
        secondArg = Number(firstArg)
        firstArg = ''
        display.innerText = '';
        return (operations.add(0, result[0]));
    }
    push.subtractPush = function() {
        secondArg = Number(firstArg)
        firstArg = ''
        display.innerText = ''
        return result.push(operations.subtract(0, result[0]));
    }
    push.multiplyPush = function() {
        secondArg = Number(firstArg)
        firstArg = ''
        display.innerText += 'x'
        return result.push(operations.multiply(0, result[0]));
    }
    push.dividePush = function() {
        secondArg = Number(firstArg)
        firstArg = ''
        display.innerText += '÷'
        return result.push(operations.divide(0, result[0]));
    }; 
    return push;
}();


const oneButton = document.querySelector('.number-one').addEventListener('click', numbers.one);
const twoButton = document.querySelector('.number-two').addEventListener('click', numbers.two);
const threeButton = document.querySelector('.number-three').addEventListener('click', numbers.three);
const fourButton = document.querySelector('.number-four').addEventListener('click', numbers.four);
const fiveButton = document.querySelector('.number-five').addEventListener('click', numbers.five);
const sixButton = document.querySelector('.number-six').addEventListener('click', numbers.six);
const sevenButton = document.querySelector('.number-seven').addEventListener('click', numbers.seven);
const eightButton = document.querySelector('.number-eight').addEventListener('click', numbers.eight);
const nineButton = document.querySelector('.number-nine').addEventListener('click', numbers.nine);

//const argOneButton = document.querySelector('.equals').addEventListener('click', numbers.argumentOne);
const addButton = document.querySelector('.operator-add').addEventListener('click', operationPusher.addPush);
const subtractButton = document.querySelector('.operator-subtract').addEventListener('click', operationPusher.subtractPush);
const multiplyButton = document.querySelector('.operator-multiply').addEventListener('click', operationPusher.multiplyPush)
const divideButton = document.querySelector('.operator-divide').addEventListener('click', operationPusher.dividePush);




//const equalButton = document.querySelector('.equals').addEventListener('click', equals);
/*document.addEventListener('click', ({ target }) => {
    if (target.matches('button')) {
      display.innerText = ''
    }
  }, {once: true});*/