function print(n) {
    console.log(n);
}

/////// Debuging ///////////////////
// giving break points in inspect source  js line //
class Car{
    constructor(name="Lambo",year="2030"){
        this.name = name
        this.year = year
    }
    race(){
        debugger; // declaring break point
        print(`${this.name} is on the field.`)
    }
}
function printCar(car) {
    debugger; // declaring break point 
    print(`${car.name} of ${car.year}`)
}
const car1 = new Car();
car1.race()
printCar(car1)
const car2 = new Car("Lambo2","2032");
printCar(car2)

//////// Style guidelines for programing ////// 

// always use camalCase //