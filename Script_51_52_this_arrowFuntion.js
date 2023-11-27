function print(n) {
    console.log(n);
}

// this Keyword ////
const person1 = {
    firstName : "Lawrence",
    lastName : "Amlan Gomes",
    FullName : function() {
        return `My name is ${this.firstName} ${this.lastName}`
    },
    getFullName : function(){
        return this.FullName()
    }
}
const person2 = {
    firstName : "Java",
    lastName : "Script",
    FullName : function() {
        return `My name is ${this.firstName} ${this.lastName}`
    },
    getFullName : function(){
        return this.FullName()
    }
}
print(person1.FullName());
print(person1.getFullName());
print(person1.getFullName.call(person2)); /// Explicit this 
print("########################")
print(this) // It will print window //
print("######################")

///////// arrow function //////////

const jv1 = () =>  "JavaScript 1";
print(jv1())
const jv2 = () => {
    print(this)
    return "JavaScript 2"
}
print(jv2())
const jv3 = (a="0") => {
    print("JavaScript 3 "+a)
}
jv3(2)
