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
// Storage // Lacal Storage and session Storage //
// Local Storage will store data forever //
// Session storage will store data till the browser is open //
printB(` <button onclick="setLocalStorage('username1','Amlan')">Set Local Storage Username1</button><br>
        <button onclick="getLocalStorage('username1')">Get Local Storage Username1</button><br>
        <button onclick="removeLocalStorage('username1')">Remove Local Storage Username1</button><br>
        <button onclick="setLocalStorage('username2','Lawrence')">Set Local Storage Username2</button><br>
        <button onclick="getLocalStorage('username2')">Get Local Storage Username2</button><br>
        <button onclick="removeLocalStorage('username2')">Remove Local Storage Username2</button><br>
        <button onclick="clearLocalStorage()">Clear Local Storage</button><br>`)

function setLocalStorage(uName, vlu){
    localStorage.setItem(uName,vlu);
}
function getLocalStorage(uName){
    alert(localStorage.getItem(uName));
}
function removeLocalStorage(uName){
    localStorage.removeItem(uName);
}
function clearLocalStorage(){
    localStorage.clear();
}