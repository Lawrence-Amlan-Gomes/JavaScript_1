function print(n) {
    console.log(n);
}
function getRandomNumber(minNum, maxNum){
    return Math.floor(Math.random()*(maxNum-minNum+1))+minNum
}
print(getRandomNumber(1,6))
