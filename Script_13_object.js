function print(n) {
    console.log(n)
}

const car1 = {
    name : "Lamborghini",
    model : "Huracan",
    weight : 1000,
    color : "Black",
    owner : "Lawrence",
    owncar : function(){
        print("The owner of this " + this.name + " is " + this.owner)
    }

}

print(car1.model)
print(car1["weight"])
car1.owncar()