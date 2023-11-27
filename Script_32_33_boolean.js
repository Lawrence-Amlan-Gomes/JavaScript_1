function print(n) {
    console.log(n);
}
print(10<9);
print(5>4);
print(1==2);
print(3!=4);
print("#############################")
print(Boolean(0));
print(Boolean(""));
print(Boolean(undefined));
print(Boolean(null));
print(Boolean(NaN));
print(Boolean(false));
print("#############################")
print(4<5 && 10>8)
print(8>10 || 10>8)
print(!(5 == 5))
print("#############################")
function adultChacking(age) {
    return (age>=18) ? "You are adult" : "You are not adult" 
}
print(adultChacking(22))
print(adultChacking(17))
print("#############################")