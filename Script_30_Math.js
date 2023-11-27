function print(n) {
    console.log(n);
}

print(Math.PI)
print(Math.E)
print(Math.LN10)
print(Math.SQRT2)
print(Math.LOG2E)
print(Math.round(4.4))
print(Math.round(4.6))
print(Math.ceil(2.2))
print(Math.floor(2.2))
print(Math.trunc(7.2))// It gives the previous full value of point
print(Math.sign(5))
print(Math.sign(0))
print(Math.sign(-5))
print(Math.pow(2,3))
print(Math.sqrt(4))
print(Math.max(1,2,3,4,5))
print(Math.min(1,2,3,4,5))

function getRandomNumber(minNum, maxNum){
    return Math.floor(Math.random()*(maxNum-minNum+1))+minNum
}
print(getRandomNumber(1,6))
