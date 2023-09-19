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
let a = +prompt('first number','0');
let operator = prompt('operation?','+');
let b = +prompt('second number','0');

operate(a,b,operator);
