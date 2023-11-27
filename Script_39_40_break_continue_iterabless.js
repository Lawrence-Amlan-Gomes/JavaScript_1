function print(n) {
    console.log(n);
}
function conBreak(a=5){
    for (let i=1; i<Infinity; i++){
        if (i>a*2){
            break;
        }
        if (i==a){
            continue;
        }
        print(i)
    }
}
conBreak(3)
