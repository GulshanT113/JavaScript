a = 10
b = 15
console.log(a+b)

function add(a, b){
    c = a+b
    return c
}

function minimize(a, b){
    d = a-b
    console.log(d)
}

function multiple(a, b){
    m = a*b
    return m
}

function divide(a, b){
    d = a/b
    return d
}

function addon(a, b, c, d){
    sum = a+b+c+d
    return sum
}

var val = add(5, 84)
minimize(a, b)
val2 = multiple(65, 54)
val3 = divide(14, 2)
val4 = addon(26, 25, 54, 56)

console.log(val)
console.log(val2)
console.log(val3)
console.log(val4)

// sir wala yha se suru hai.


var mul1 = 2
var mul2 = 10



function multiply(num1, num2) {
    var ans = num1*num2
    let mul3 = 78
    return ans
}

// console.log(mul3);

var invoke1 = multiply(mul1, mul2)
var invoke2 = multiply(3, 20)

console.log(invoke1);
console.log(invoke2);

{
    var hello = 10
    let hey = 90
    console.log(hey);
}

// var vs let vs const

// The scope of a var variable is functional scope.	
// The scope of a let variable is block scope.	
// The scope of a const variable is block scope.

var i // declaration
var i = 10 // dec with ini
i = 30

let b = 90
b = 800
// let b = 700

const c = 00
// c = 90
// const c = 800


// var can be declared without initialization.	
// let can be declared without initialization.	
// const cannot be declared without initialization.

// var can be updated and re-declared into the scope.	
// let can be updated but cannot be re-declared into the scope.	
// const cannot be updated or re-declared into the scope.