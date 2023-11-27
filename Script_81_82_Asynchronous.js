let text1 = "";
function  printB(text) {
    text1 += text + "<br>"
}

function printC(n) {
    console.log(n);
}  
// If will give a function to another function's parameter it is called function callback
function double(n,triple = (n)=>n){// here triple is callback tunction
    return triple(n*2);
}
function triple(n,double = (n)=>n) {// here double is callback function
    return double(n*3);
}
printB(triple(3,double));
printB(double(5,triple));
printB("---------------------------------------------------------");
printB("line1");
setTimeout(() => {
    printB("line2");
    printB("---------------------------------------------------------");
    document.getElementById("p1").innerHTML = text1; 
}, 1000);
printB("line3");

let text2 = 1;
setInterval(() => {
    text2 += 1;
    document.getElementById("p2").innerHTML = text2;
}, 100);













document.getElementById("p1").innerHTML = text1;