function print(n) {
    console.log(n);
}
print((3).toString())
print((3).toString(2)) // decimal to binary
print(5 & 1)
print((0b11111).toString(10))// binary to decimal
print("############################################")
// RegExp // In RegExp, Here is a lot more thing to memmorise than understanding
// patterns/modifier
let s1 = "I love JavaScript";
print(s1.search("Java")) // it will return index
print(s1.search("java"))
print(s1.search(/java/i))
print(s1.replace(/java/i,"JAVA"))
