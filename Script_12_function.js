function print(n) {
    console.log(n)
}
function sleep(name = "An ideal person", time = 8){
    print(name + " sleeps " + time + " hours in a day")
    return undefined // JavaScript return undefined as defalut
}
sleep("Amlan",8);
sleep("Rahim", 10);
sleep();

function mySum(a=0,b=0){
    return a + b
}
print(mySum());
print(mySum(5,4));
