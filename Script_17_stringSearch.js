function print(n) {
    console.log(n)
}

let s1 = "I love JavaScript"
print(s1.indexOf("love"))
print(s1.indexOf("J"))
print(s1.indexOf("j"))
print(s1.indexOf("a"))
print(s1.lastIndexOf("a"))
print(s1.search("love"))
print(s1.includes("love"))
print(s1.includes("Love"))
print(s1.startsWith("I"))
print(s1.endsWith("pt"))