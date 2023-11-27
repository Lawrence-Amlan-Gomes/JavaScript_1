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
// BOM = Browser Object Model //
printB(`window height is ${window.innerHeight}`);
printB(`window width is ${window.innerWidth}`);
printB(`<button onclick="openWindow()">Open</button>
<button onclick="closeWindow()">Close</button>`)
let openW;
function openWindow() {
    openW = window.open(`https://www.google.com`);
}
function closeWindow(){
    openW.close();
}
printB("---------------------------------------------------------");
printB(` <a href="https://www.w3schools.com/js/js_window_location.asp" target="_blank">w3schools</a>`)
printB("---------------------------------------------------------");
printB(`<button onclick="clickAlert()">Alet</button>
        <button onclick="clickConfirm()">Confirm</button>
        <button onclick="clickPrompt()">Prompt</button>`);

function clickAlert(a="Are you alert") {
    window.alert(a);
}
function clickConfirm() {
    if(window.confirm("Are you sure?")){
        clickAlert("You are confirmed");
    }else{
        clickAlert("You are not confirmed");
    }
}
function clickPrompt(){
    const propmtValue = window.prompt("Enter your name","Please write your name");
    if ( propmtValue === null || propmtValue === "" || propmtValue === "Please write your name"){
        clickAlert("You didn't write your name");
    }else{
        clickAlert(`Welcome ${propmtValue}`);
    }
    
}