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
let a;
let operator;
let b;

// operate(a,b,operator);
