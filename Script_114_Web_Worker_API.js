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

printB(`<button onclick="alert('Hello')">Hello</button><br>
        <button onclick="startWorker()">Start Worker</button><br>
        <button onclick="stopWorker()">Stop Worker</button><br>`)

let worker1;
function startWorker(){
    printB('');
    if (typeof Worker !== undefined){
        printB("Worker API exist in this browser");
        if (typeof worker1 == "undefined"){
            worker1 = new Worker("Script_114_worker1.js");
        } 
        worker1.onmessage = function(event) {
            printB(event.data);
        }        
    }else{
        printB("Worker API doesn't exist in this browser");
    }
}
function stopWorker(){
    if (typeof Worker !== undefined){
        worker1.terminate();
        worker1 = undefined;
    }else{
        printB("Worker API doesn't exist in this browser");
    }
}
