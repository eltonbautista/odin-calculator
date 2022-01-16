// A function that holds an object "calculator". The calculator object contains different operators as functions.
// The calculator object is instantiated by returning it at the end of the function. 
// Notice the parens at the end of the squiggly operations() squiggly bracket. 
// This automatically adds the () so that it can be called such as: operations.add(a, b) rather than operations().add(a,b)
const display = document.querySelector('#display');
display.innerText = '';
//const ans = 0;
let result = []
const operations = function() {
    const calculator = {}
    
    calculator.add = function(a, b) {
        return a + b 
    };
    calculator.subtract = function(a, b) {
        return a - b;
    }
    calculator.multiply = function(a, b) {
        return (a*b);
    }
    calculator.divide = function(a, b) {
        return (a/b);
    }

    return calculator;
}(); 

const numbers = function() {
    const numberButtons = {}

    numberButtons.arguments = []

    numberButtons.one = function() {
        display.innerText += 1;
        //return parseInt(display.innerText);
    }
    numberButtons.two = function() {
         display.innerText += 2;
         //return parseInt(display.innerText);
    }
    numberButtons.arrayArguments = function() {
        return result.push(parseInt(display.innerText))
    }
    return numberButtons;
}();


const operationPusher = function() {
    const push = {}

    push.addPush = function() {
        display.innerText += '+'
        return result.push(operations.add(1, 2));
    }
    push.subtractPush = function() {
        display.innerText += '-'
        return result.push(operations.subtract());
    }
    push.multiplyPush = function() {
        display.innerText += 'x'
        return result.push(operations.multiply());
    }
    push.dividePush = function() {
        display.innerText += '÷'
        return result.push(operations.divide());
    }
    return push;
}();


// Work on putting display.innerText value inside an integer.
const oneButton = document.querySelector('.number-one').addEventListener('click', numbers.one);
const twoButton = document.querySelector('.number-two').addEventListener('click', numbers.two);
//const argOneButton = document.querySelector('.equals').addEventListener('click', numbers.argumentOne);
const addButton = document.querySelector('.operator-add').addEventListener('click', operationPusher.addPush);
const subtractButton = document.querySelector('.operator-subtract').addEventListener('click', operationPusher.subtractPush);

/*document.addEventListener('click', ({ target }) => {
    if (target.matches('button')) {
      display.innerText = ''
    }
  }, {once: true});*/