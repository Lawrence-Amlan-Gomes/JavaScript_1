function print(n) {
    console.log(n);
}

const person1 = {
    fName : "Lawrence",
    lName : "Amlan Gomes",
    age : 22  
}

print(person1.fName)
print(person1["lName"])
person1.university = "BRACU"
person1.hobby = "BodyBuilding"
delete person1.age;
for ( let i in person1){
    print(`${i} : ${person1[i]}`)
}

print("####################")

function printObInBrow(obj){
    let text1 = ""
    for ( let i in obj){
        text1 += `${i} : ${obj[i]} <br>`
    }
    return text1
}
document.getElementById("p1").innerHTML = printObInBrow(person1);

const person1vlu = Object.values(person1);
for ( let i of person1vlu){
    print(i)
}
print("###########################")
print(JSON.stringify(person1))//// object to json