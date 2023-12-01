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
printB(`<h1>AJAX is a developer's dream</h1><br>
        <button onclick="loadData()">Change this content</button>`)

function loadData(){
    // creats a new request 
    const xhr = new XMLHttpRequest();
    // what to do when response arrives
    xhr.onload = function(){
        printB(xhr.responseText);
    }
    // prepare request // Methods = get, post, put, patch, delete 
    xhr.open("GET","./Script_115_fetch.txt");

    // request send
    xhr.send();
}