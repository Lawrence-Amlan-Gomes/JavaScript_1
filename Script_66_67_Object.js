function print(n) {
    console.log(n);
}
let text1 = ""
function  printBrow(text) {
    text1 += text + "<br>"
}

///// JavaScript Accessors //////
const person1 = {
    fName : "Lawrence",
    lName : "Amlan Gomes",
    age : 22, 
    id : 23341031, 
    get page(){
        return this.age
    }
}
printBrow(person1.page);
printBrow(person1.id);

///// JavaScript Constractor //////
function Person(name, age) {
    this.name = name;
    this.age = age
}
const amlan  = new Person("Amlan",22)
const lawrence = new Person("Lawrence",23)
printBrow(amlan.name)
printBrow("")
printBrow(lawrence.age)
amlan.hobby = "BodyBuilding";
printBrow(amlan.hobby)





















document.getElementById("p1").innerHTML = text1