function print(n) {
    console.log(n)
}

let n1 = 10;
print(n1)
let s1 = n1.toString();
print(s1)
print(n1.toExponential(2))

let n2 = 56;
print(n2.toFixed(3))

let n3 = 6.735;
print(n3.toPrecision(2))
print(n3.toPrecision(6))

print(Number(true))
print(Number(false))
print(Number("  150    "))
print(Number(" 1  5 "))

print(parseInt("10.333"))

print(parseFloat("10 days"))

print(-1/0);