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
printB(`<button onclick="getLocation()">Get Location</button><br>`)

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }else{
        alert("Geolocation is not available in your browser");
    }
}
function showPosition(position){
    printB(`Latitude: ${position.coords.latitue} + Longitude: ${position.coords.langitude}`);
}
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        printB("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        printB("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        printB("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        printB("An unknown error occurred.");
        break;
    }
  }