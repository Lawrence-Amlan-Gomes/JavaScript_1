let text1 = "";
function  printB(text) {
    text1 += text + "<br>"
}
function printC(n) {
    console.log(n);
}   
//////////////////////////////////////////
function abMul(a=0,b=0){   // this diclearation method works in hoisting  
    return a*b;
}
printB(abMul(2,4)); // function invoking or calling
printB("---------------------------------------------------------");
//////////////////////////////////////////
const f1 = function (a=0,b=0){ // this diclearation method doesn't work in hoisting  
    return a*b
}
printB(f1()); // function invoking or calling
printB("---------------------------------------------------------");
//////////////////////////////////////////
(function (){  
    printB("I am a self invoking of self calling function");
})(); // self invoking or self calling function
printB("---------------------------------------------------------")
// "function invokation has a relation with this keyword but fucntion calling don't






























document.getElementById("p1").innerHTML = text1;