// var global scope
{ var testVar = "test variable" }
console.log(testVar);

// var function scope
function dummyFunc(){
    var testVarInFunc = "iurii";
}
console.log(testVarInFunc);

// block scope
{ let testLet = "test let" }
console.log(testLet)


// let hoisting
console.log(testLet1)
let testLet1 = "test let"

// var hoisting
console.log(testVar1);
var testVar1 = "test variable"


for (var i = 0; i < 3; ++i) {
    console.log(i)
}
console.log(i);

for (let i = 0; i < 3; ++i) {
    console.log(i)
}
console.log(i);