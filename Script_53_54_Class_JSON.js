function print(n) {
    console.log(n);
}
////////////// Class /////////////////
class Car{
    constructor(name="Lambo",year="2030"){
        this.name = name
        this.year = year
    }
    race(){
        print(`${this.name} is on the field.`)
    }
}
function printCar(car) {
    print(`${car.name} of ${car.year}`)
}
const car1 = new Car();
car1.race()
printCar(car1)
const car2 = new Car("Lambo2","2032");
printCar(car2)

///////////////// JSON //////////////////////// Java Script Object Notation

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text); // jSON to object
JSON.stringify(obj) // object to JSON