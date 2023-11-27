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
printB(`<div id="div3">
        <p>amlan</p>
        <p id="para2">lawrence</p>
        </div>`);

const div3 = document.getElementById("div3");
printB(`way1: ${div3.innerHTML}`);
printB(`way2: ${div3.children[0].innerHTML}`);
printB(`way2: ${div3.children[1].innerHTML}`);
printB(`--------------------------------------------------------`)
const para3 = document.createElement("p");
const text3 = document.createTextNode("Gomes");
div3.appendChild(para3.appendChild(text3));
printB(div3.innerHTML);
printB(`--------------------------------------------------------`)