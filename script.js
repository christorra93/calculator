function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function divi(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case '+':
            console.log(add(a,b));
            break;
        case '-':
            console.log(sub(a,b));
            break;
        case '*':
            console.log(mult(a,b));
            break;
        case '/':
            console.log(divi(a,b));
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
            result.textContent += e.target.textContent;
            break;
    }
}
let a;
let b;
let operator;

// operate(a,b,operator);

const result = document.querySelector('#result');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click',btnClick);
