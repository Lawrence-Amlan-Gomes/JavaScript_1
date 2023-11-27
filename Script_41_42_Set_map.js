function print(n) {
    console.log(n);
}

const set1 = new Set([1,2,3])
print(set1)
set1.add(4)
print(set1)
set1.delete(2)
print(set1)
print("############################")
set1.forEach((vlu)=>{print(vlu)})
print("############################")
for ( let i of set1.entries()){
    print(i[0])
}
print("############################")
const number1 = new Map([["one",1],["two",2]])
number1.set("three",3)
print(number1)
print(number1.get("one"))
print(number1.has("two"))
print("############################")
for ( let i of number1.entries()){
    print(`${i[0]} : ${i[1]}`)
}
print("############################")
number1.forEach((vlu,key)=>{
    print(`${key} : ${vlu}`)
})