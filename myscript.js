// A function that holds an object "calculator". The calculator object contains different operators as functions.
// The calculator object is instantiated by returning it at the end of the function. 
// Notice the parens at the end of the squiggly operations() squiggly bracket. 
// This automatically adds the () so that it can be called such as: operations.add(a, b) rather than operations().add(a,b)
const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number-button');
const operatorBtns = document.querySelectorAll('.operator-button');
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
            alert("lol nerd")
            operations.clear()
            display.innerText = 'nerd ass'
        } else {
        return (a/b);
        }
    }
    calculator.clear = function() {
        display.innerText = ''
        result;
        firstArg = ''
        secondArg = ''
        const resetDecimal = document.querySelector('.operator-decimal').addEventListener('click', operations.decimal, {once: true});
    }
    calculator.decimal = function() {
        display.innerText += '.';
        firstArg += '.'
    }

    return calculator;
}(); 

const operate = function() {
    if (typeof(firstArg) === 'string' && typeof(secondArg) === 'string' && result === undefined) {
        operations.clear()
    } else if(typeof(firstArg) === 'string' && typeof(secondArg) === 'string' && result !== undefined) {
        operations.clear()
    } else {
        result = storedOperator(Number(firstArg), Number(secondArg));
        if(typeof result === 'number') {
        if(Number(result.toFixed(3)) < Number(result.toFixed(8))) {
            display.innerText = result.toFixed(5);
        secondArg = 0;
        firstArg = result;
        return result;
        } else if(Number(result.toFixed(2)) < Number(result.toFixed(8))) {
            display.innerText = result.toFixed(3);
        secondArg = 0;
        firstArg = result;
        return result;
        } else {
        display.innerText = result.toFixed(1);
        secondArg = 0;
        firstArg = result;
        return result;
        }
    }
}
}

for (const number of numberBtns) {
    number.addEventListener('click', function(e) {
        if (display.innerText === '0' || display.innerText === "nerd ass") {
            operations.clear();
            display.innerText += number.innerText
            return firstArg += number.innerText
        }
        if (result === firstArg && secondArg === 0) {
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

for (const btn of operatorBtns) {
    btn.addEventListener('click', function(e) {
        if (typeof(firstArg) === 'string' && typeof(secondArg) === 'number') {
            operate();
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += btn.dataset.sign;
        storedOperator = operations[btn.dataset.operator]
        const resetDecimal = document.querySelector('.operator-decimal').addEventListener('click', operations.decimal, {once: true});
        } else {
        secondArg = Number(firstArg)
        firstArg = 0;
        display.innerText += btn.dataset.sign;
        storedOperator = operations[btn.dataset.operator]
        const resetDecimal = document.querySelector('.operator-decimal').addEventListener('click', operations.decimal, {once: true});
        }
    })
}
const equalsButton = document.querySelector('.operator-equals').addEventListener('click', operate);
const clearButton = document.querySelector('.operator-clear').addEventListener('click', operations.clear)
const decimalButton = document.querySelector('.operator-decimal').addEventListener('click', operations.decimal, {once: true});



