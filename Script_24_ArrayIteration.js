function print(n) {
    console.log(n);
}

arr1 = [1,2,3,4,5,6]
print("###################################")
function myFunction(value, index) {
    print(`value of index ${index} is ${value}`)
}
arr1.forEach(myFunction);

print("#########################################")
function myMap(value) {
    return value*2
}
print(arr1.map(myMap))

print("###########################################")
function myFilter(value) {
    return value < 5
}
print(arr1.filter(myFilter))

print("###########################################")
function myreduce(total, value) {
    return total + value
}

print(arr1.reduce(myreduce, 0))

print("###########################################")
function myreduceRight(total, value) {
    return total + value
}

print(arr1.reduceRight(myreduceRight, 0))

print("###########################################")
function myevery(value) {
    return value < 5
}
print(arr1.every(myevery))

print("########################################")
print(arr1.indexOf(2))

print("########################################")
print(arr1.includes(3))

print("###########################################")
function myfind(value) {
    return value < 5
}
print(arr1.find(myfind))

print("###########################################")
function myfindIndex(value) {
    return value == 5
}
print(arr1.findIndex(myfindIndex))

print("###########################################")

print(Array.from("ABCDEFGH"))


