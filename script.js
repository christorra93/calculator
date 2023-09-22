function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case '+':
            num1 = add(a,b);
            result.textContent = (num1.toString().includes('.'))?num1.toFixed(2):num1;
            break;
        case '-':
            num1 = substract(a,b);
            result.textContent = (num1.toString().includes('.'))?num1.toFixed(2):num1;
            break;
        case '*':
            num1 = multiply(a,b);
            result.textContent = (num1.toString().includes('.'))?num1.toFixed(2):num1;
            break;
        case '/':
            num1 = divide(a,b);
            result.textContent = (num1.toString().includes('.'))?num1.toFixed(2):num1;
            break;
    }
}

function btnClick(e){
    switch(e.target.textContent){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(newNum){
                result.textContent = '';
                newNum = false;
            }
            result.textContent += e.target.textContent;
            break;
        case '+':
        case '*':
        case '/':
        case '-':
            if(!num1){
                num1 = +result.textContent;
                operator = e.target.textContent;
                newNum = true;
            } else{
                num2 = +result.textContent;
                newNum = true;
                operate(num1,num2,operator);
                operator = e.target.textContent;
            }
            break;
        case '=':
            if (operator) {
                if(num2){
                    operate(num1,num2,operator);
                }else{
                    num2 = +result.textContent;
                    newNum = true;
                    operate(num1,num2,operator);
                }
            }
            break;
        case 'Clear':
            result.textContent = '';
            num1 = 0;
            num2 = 0;
            operator = null;
            break;
    }
}
let num1;
let num2;
let operator;
let newNum = false;

// operate(a,b,operator);

const result = document.querySelector('#result');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click',btnClick);
