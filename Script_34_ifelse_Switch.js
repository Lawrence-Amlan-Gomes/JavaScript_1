function print(n) {
    console.log(n);
}

print("###################################")
function dividedBy2and3(number){
    let result = ""
    if (number%2==0 && number%3==0) {
        result = "Divisible by both 2 and 3"
    }
    else if (number%2==0) {
        result = "Divisible by only 2"
    }
    else if (number%3==0) {
        result = "Divisible by only 3"
    }
    else{
        result = "Not divisible by 2 or 3"
    }
    return result
}
print(dividedBy2and3(6))
print(dividedBy2and3(10))
print(dividedBy2and3(9))
print(dividedBy2and3(7))

print("###################################")

function today(){
    let day;
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case  6:
          day = "Saturday";
      }
      print("Today is "+day)
}
today();
print("###################################")
function onOffButton(num){
    let x = num;
    switch (x) {
        case 0:
          text = "Off";
          break;
        case 1:
          text = "On";
          break;
        default:
          text = "No value found";
    }
    print(text)
}
onOffButton(0)
print("###################################")