function print(n) {
    console.log(n);
}
const arr1 = [1,2,3,4,5]
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const name1 = "Lawrence"
// for
for (let i = 0; i<arr1.length; i++ ){
    print(arr1[i])
}
print("#################################")
// for in // not for strings and arrays
for (let i in person){
    print(`${i} : ${person[i]}`)
}
print("#################################")
// for each
function printArr(vlu, idx, arr) {
    print(`The value of index ${idx} is ${vlu}`)
}
arr1.forEach(printArr);
print("#################################")
// for of // not for objects
for ( let i of arr1){
    print(i)
}
print("#################################")
// for of
for ( let i of name1){
    print(i)
}
print("#################################")
// while 
let i = 0
while (i<arr1.length) {
    print(arr1[i])
    i++
}
print("#################################")