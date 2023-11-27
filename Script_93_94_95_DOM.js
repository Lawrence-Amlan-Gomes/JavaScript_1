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
printB(`<div id ="container">
        <div id ="animate" ></div>
        </div>
        <button id="btn1">Start</button>
        <style>
        #container {
            width: 400px;
            height: 400px;
            position: relative;
            background: green;
            border: 2px solid black;
          }
          #btn1{
            margin-top: 10px;
            padding: 10px;
            fontsize: 10px;
            border: 2px solid black;
            width: 20%;
            margin-left: 40%;
          }
          #animate {
            text-align: center;
            color: white;
            width: 50px;
            height: 50px;
            position: absolute;
            background: purple;
            border: 2px solid black;
          }</style>`)

document.getElementById("btn1").addEventListener("click",myMove);
function  myMove() {
    const object1 = document.getElementById("animate");
    const btn1 = document.getElementById("btn1");
    let pos1 = 0;
    let direction = "down";
    let interval1 = setInterval(ani1,.1);
    function ani1() {
        if(direction == "down"){
            if ( pos1 < 348){
                pos1 += 1;
                object1.style.top = pos1 + "px";
                object1.style.left = pos1 + 'px';
            }
            else{
                direction = "up";
            }
        }
        if(direction == "up"){
            if ( pos1 > 0){
                pos1 -= 1;
                object1.style.top = pos1 + "px";
                object1.style.left = pos1 + 'px';
            }
            else{
                direction = "down";
                clearInterval(interval1);
            }
        }
    }
}