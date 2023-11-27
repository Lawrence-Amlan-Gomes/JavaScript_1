let text1 = "";
function  printB(text) {
    text1 += text + "<br>"
}
function printC(n) {
    console.log(n);
}   

////////////// function calling ////////////
const person = {
    fullName : function (age=20, hobby="signing") {
        return `${this.fName} ${this.lName} is ${age} years old and his hobby is ${hobby}`;
    }
}
const person1 = {
    fName : "Amlan",
    lName : "Gomes"
}
printB(person.fullName.call(person1, 22, "bodybuilding"));

printB("---------------------------------------------------------")
////////////// function Apply method ////////////
printB(person.fullName.apply(person1, [23, "coding"]));
printB("---------------------------------------------------------")
printB(Math.max(1,3,2))
printB(Math.max.apply(null,[1,3,4,2]))
printB("---------------------------------------------------------")
////////////// function Closures ////////////
function declearCounter1() {
    let counter1 = 0;
    return function(){
        return counter1 += 1;
    }
}
const add1counter1 = declearCounter1();
add1counter1();
add1counter1();
printB(add1counter1());



















document.getElementById("p1").innerHTML = text1;