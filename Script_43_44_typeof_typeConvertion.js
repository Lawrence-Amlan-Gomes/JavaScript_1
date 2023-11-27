function print(n) {
    console.log(n);
}
let s1 = "JavaScript"
print(typeof s1)
print(typeof NaN)
print('################################')
function isArr(myArr) {
    print(myArr.constructor === Array) 
  }
isArr([1,3,5])
// data type of null in object but undifined is undifined
print(null == undefined)
print(null === undefined)
print('################################')
function stringToNumber(str1){
    print(Number(str1))
}
stringToNumber("10")
stringToNumber("JavaScript")
stringToNumber(" ")
print('################################')
function numberToString(num1){
    print(String(num1))
}
numberToString(10)