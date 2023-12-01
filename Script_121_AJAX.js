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
printB(`<div>
        <button id="get" onclick="getData()">Get Data</button><br>
        <button id="send" onclick="sendData()">Send Data</button>
        </div>`)


function sendGet(method, url, data){
    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if ( this.status >= 400){
                reject("There was an error")
            }else{
                resolve(JSON.parse(xhr.responseText));
            }
        }
        xhr.onerror = function(){
            reject("There was an error");
        }
    // prepare request // Methods = get, post, put, patch, delete 
        xhr.open(method, url, data);

    // request send
        xhr.send();
    })
    return promise
}
function getData(){
    sendGet("GET",'https://jsonplaceholder.typicode.com/todos/1').then((responseData)=>{
        printC(responseData);
        printC(responseData.userId);
    }).catch((err)=>{
        printC(err)
    })
}
function sendData(){
    sendGet("GET",'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })).then((responseData)=>{
        printC(responseData);
        }).catch((err)=>{
            printC(err)
        })
}