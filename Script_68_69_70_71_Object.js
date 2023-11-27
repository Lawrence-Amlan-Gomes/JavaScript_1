let text1 = ""
function  printB(text) {
    text1 += text + "<br>"
}
function printC(n) {
    console.log(n);
}
function Person(name, age) {
    this.name = name;
    this.age = age
}
/////////// Object Prototype //////////////

const amlan  = new Person("Amlan",22)
const lawrence = new Person("Lawrence",23)
printB(amlan.name)
printB(lawrence.age)
amlan.hobby = "BodyBuilding";
printB(amlan.hobby)
printB(lawrence.hobby)
Person.prototype.contry = "Bangladesh";
printB(amlan.contry);
printB(lawrence.contry);

/////////// Object Set //////////////
printB("---------------------------------------------------------")
const set1 = new Set([1,2,3])
set1.add(4)
printC(set1)
for ( let i of set1){
    printB(i)
}
/////////// Object Map //////////////
/// Key of Map can be any kind of data type //
// But in object ket can only be string ///
printB("---------------------------------------------------------")
const map1 = new Map();
map1.set("one",1)
map1.set("two",2)
map1.set("three",3)
printC(map1)
for ( let i of map1){
    printB(`${i[0]} => ${i[1]}`)
}
printB(map1.get("one"))















document.getElementById("p1").innerHTML = text1