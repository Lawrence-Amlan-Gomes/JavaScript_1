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
// API // Application Program Interface //
printB(`<input type="number" id="id1" max="300" min="100" required/>
        <button onclick="validation()">OK</button>`)

function validation(){
    const inputObj = document.getElementById("id1");
    if (!inputObj.checkValidity()){
        alert(inputObj.validationMessage);
    }
}
printB("---------------------------------------------------------");
//////////////////////////////////////////////////
printB(`<a href="one.html">Page one</a>`)
function back(){
    window.history.back();
}
function backTo(n){
    window.history.go(n);
}
function Forward(){
    window.history.forward();
}
function getHistory(){
    alert(window.history.length);
}