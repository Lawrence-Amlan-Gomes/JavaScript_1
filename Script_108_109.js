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
// Cookie //
printB(`<div>
        <input type="button"
        value="set name cookie"
        onclick="setCookie('name','Amlan',2)"/>
        </div>`)
printB(`<div>
        <input type="button"
        value="set username cookie"
        onclick="setCookie('username','Lawrence',2)"/>
        </div>`)
printB(`<div>
        <input type="button"
        value="get name cookie"
        onclick="getCookie('name')"/>
        </div>`)
printB(`<div>
        <input type="button"
        value="get username cookie"
        onclick="getCookie('username')"/>
        </div>`)

function setCookie(cname,cvalue,expday){

    const d = new Date();
    d.setTime(d.getTime() + expday * 24 * 60 * 60 * 1000);
    let expires = "expires" + d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
}
function getCookie(cname) {
    let carr = document.cookie.split("; ");
    const obj1 = {};
    for ( let i of carr){
        let temstr = "";
        let temstr2 = "";
        let idxdiv = i.indexOf("=");
        for ( let j = 0; j<idxdiv; j++ ){
            temstr += i[j]
        }
        for ( let j = idxdiv+1; j<i.length; j++ ){
            temstr2 += i[j]
        }
        obj1[temstr] = temstr2;
    }
    printC(obj1[cname]);
}