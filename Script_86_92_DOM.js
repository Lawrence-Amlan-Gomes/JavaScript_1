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
// DOM // 
printB ("DOM : Document Object Model");
printB("POEM : Preperties Objects Events Methods");
printB(typeof document);
printB("---------------------------------------------------------")
printB(`<a  target="_blank" href="https://www.w3schools.com/js/js_htmldom_document.asp">dom1</a>`)
printB(`<a  target="_blank" href="https://www.w3schools.com/js/js_htmldom_elements.asp">dom2</a>`)
printB(`<form name="myForm" onsubmit="return validateForm()" method="post">
        Name: <input type="text" name="fname" required>
        <input type="submit" value="Submit">
        </form>`)
function validateForm(){
    const form = document.forms['myForm'];
    const value = form["fname"].value;
    if ( value === ''){
        alert("You must write your name");
        return false
    }
}
printB("---------------------------------------------------------")
printB2("<p id='jscss1'>Give me style</p>")
const jscss1 = document.getElementById("jscss1");
jscss1.style.color = "white";
jscss1.style.backgroundColor = "green";
jscss1.style.textAlign = "center";
jscss1.style.width = "50%";
jscss1.style.marginLeft = "20%";
jscss1.style.marginRight = "20%";
jscss1.style.padding = "10px";
jscss1.style.borderRadius = "10px";


