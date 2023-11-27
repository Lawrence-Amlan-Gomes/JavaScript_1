// let
function print(n) {
    console.log(n)
}

let y = 10;
let x = 6;
{
    let y = 16; 
    // let can't be changed later
    // let can't access able outside from the block
    print(y) // It will give y = 16
}
print(y) // It will give y = 10
x = 8;
print(x) // It will give x = 8
