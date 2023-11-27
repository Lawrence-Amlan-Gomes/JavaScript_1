function print(n) {
    console.log(n);
}
//// Erroe //////
try{
    addlert("hello")
}catch(err){
    print(err.name)
    print(err.message)
}
print("###########################")
let x = 5;
try{
    if(x <= 5) throw { name:"lowError", message: "too low"}
    if(x > 5) throw { name:"HighError", message: "too high"}
}catch(err){
    print(err.name)
    print(err.message)
}
finally{
    print("try catch done")
}
print("#############################")

///// Scope ////////////

let a = 1;
var b = "b"
{
    let a = 2; 
    print(a)
    print(b)
}
function printa() {
    let a = 3
    print(a)
    print(b)
}
print(a)
print(window.b)
printa()
print("########################")

//// Hoisting /////
c = 10; /// assign
print(c)
var c; /// declare

print("#######################")
"use strict"; // it will turn of the forgiving mode of JavaScript
x = 5;