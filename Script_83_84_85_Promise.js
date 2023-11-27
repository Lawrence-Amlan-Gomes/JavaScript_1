let text1 = "";
function  printB(text) {
    text1 += text + "<br>"
    document.getElementById("p1").innerHTML = text1;
}
let text2 = "";
function  printB2(text) {
    text2 += text + "<br>"
    document.getElementById("p2").innerHTML = text2;
}

function printC(n) {
    console.log(n);
} 
// callback hell //
let paymentSuccess = true;
let marks = 90;
function enroll(callback) {
    printB("Course is enrolling");
    if (paymentSuccess){
        callback();
    }else{
        printB("Finish your payment first");
    }
}
function progress(callback) {
    printB("Course is in progress");
    if (marks >= 80){
        callback();
    }else{
        printB("You don't have enough marks to get the certificate");
    }
}
function getCertificate(callback) {
    printB("Congrats! you passed the course");

}
enroll(()=>progress(getCertificate));
printB("---------------------------------------------------------");
// promise //
function enroll2() {
    printB("Course is enrolling");
    const promise = new Promise(function(resolve, reject) {
        if (paymentSuccess){
            resolve();
        }else{
            reject("Finish your payment first");
        }
    })
    return promise;
}
function progress2() {
    printB("Course is in progress");
    const promise = new Promise(function(resolve, reject) {
        if (marks >= 80){
            resolve();
        }else{
            reject("You don't have enough marks to get the certificate");
        }
    })
    return promise;
}
function getCertificate2() {
    const promise = new Promise(function(resolve) {
        resolve("Congrats! you passed the course");
    })
    return promise;
}
enroll2()
    .then(progress2)
    .then(getCertificate2)
    .then(function(vlu){
        printB(vlu);
        printB("---------------------------------------------------------");
    })
    .catch(function(err){
        printB(err);
        printB("---------------------------------------------------------");
    })
//
///// async - await ///
function enroll3() {
    printB2("Course is enrolling");
    const promise = new Promise(function(resolve, reject) {
        if (paymentSuccess){
            resolve();
        }else{
            reject("Finish your payment first");
        }
    })
    return promise;
}
function progress3() {
    printB2("Course is in progress");
    const promise = new Promise(function(resolve, reject) {
        if (marks >= 80){
            resolve();
        }else{
            reject("You don't have enough marks to get the certificate");
        }
    })
    return promise;
}
function getCertificate3() {
    const promise = Promise.resolve("Congrats! you passed the course"); // short form of resolve
    return promise;
}
async function course(){
    try{
        await enroll3();
        await progress3();
        const congrats = await getCertificate3(); 
        printB2(congrats);
    }catch(err){
        printB2(err);
    }
}
course();
//




























