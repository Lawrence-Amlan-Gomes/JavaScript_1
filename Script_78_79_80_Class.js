let text1 = "";
function  printB(text) {
    text1 += text + "<br>"
}
function printC(n) {
    console.log(n);
}  

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    coding(){
        return `${this.name} is coding JavaScript`;
    }
    details(){
        return `${this.name} is ${this.age} years old`;
    }
    static show(){
        return 'I need no object creation for calling.'
    }
}
class SubPerson extends Person{
    constructor (name,age,hobby){
        super(name,age);
        this.hobby = hobby;
    }
    personhobby(){
        return `${this.name}'s hobby is ${this.hobby}`
    }
}
const p1 = new Person("Amlan",22)
printB(p1.details());
printB(p1.coding());
const p2 = new SubPerson("Lawrence",23,"bodybuilding")
printB(p2.details());
printB(p2.personhobby());
printB(SubPerson.show());



























document.getElementById("p1").innerHTML = text1;