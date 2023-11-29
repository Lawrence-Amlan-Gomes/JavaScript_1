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
printB(`<button onclick="getData()">Fetch</button><br>
        <button onclick="getData2()">Fetch2</button><br>`)

function getData(){
    // fetch returns a promise
    // fetch is an asynchronous process
    fetch('http://127.0.0.1:5500/Script_115_fetch.txt')
        .then(res => res.text()) // it also returns a promise
        .then(data => {
            printB(data);
        })
}
async function getData2(){
    // fetch returns a promise
    // fetch is an asynchronous process
    const res = await fetch('http://127.0.0.1:5500/Script_115_fetch.txt');
    const data = await res.text();
    printB(data);
}