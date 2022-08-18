// basic math functions
//     1) 'add()' is a valid function
function add (a,b){
    return a + b ;
}
console.log (add());
//     2) 'subtract()' is a valid function
function subtract(a,b){
    return a - b ;
}
//     3) 'multiply()' is a valid function
function multiply (a,b){
    return a * b;
}
//     4) 'divide()' is a valid function
function divide (a,b){
    return a / b;
}
//     5) add(a, b) adds two numbers and returns the result
//     6) subtract(a, b) subtracts b from a and returns the result
//     7) multiply(a, b) multiplies two numbers and returns the result
//     8) divide(a, b) divides a by b and returns the result
//     9) increment(n) increments n and returns the result
function increment(n){
    return ++n
}
//     10) decrement(n) decrements n and returns the result
function decrement(n){
    return --n
}
//   makeInt(n)
//     11) parses n as an integer and returns the parsed integer 
//      Converts input to int
//     12) assumes base 10
//     13) returns NaN as appropriate
function makeInt(n){
    let a = parseInt(n, 10);
    return a;
}
//   preserveDecimal(n)
//     14) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
//     15) returns NaN as appropriate

function preserveDecimal(n){
    let a = parseFloat(n);
    return a;
}