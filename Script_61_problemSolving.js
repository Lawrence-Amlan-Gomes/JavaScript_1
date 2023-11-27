function print(n) {
    console.log(n);
}

////////////////// 1 ////////////////////////////////
const waterPara = `We know water is an essential and finite resource that sustains life on Earth. 
    Covering about 71% of the planet's surface, water exists in various forms, including oceans, 
    rivers, lakes, and underground aquifers. It plays a critical role in supporting ecosystems, 
    agriculture, and human survival. Access to clean and safe drinking water is a fundamental human right,
    yet millions of people worldwide still lack reliable access to this basic necessity. 
    The increasing demand for water, coupled with factors like population growth and climate change, 
    has led to water scarcity issues in various regions. Pollution from industrial discharges, 
    agricultural runoff, and improper waste disposal further exacerbate the challenges surrounding 
    water quality. Sustainable water management practices, conservation efforts, and technological 
    innovations are crucial for ensuring equitable access to clean water and safeguarding the health 
    of both ecosystems and communities. Global cooperation and responsible stewardship of this precious 
    resource are imperative to address the complex and interconnected issues related to water.`

const waterMatch =  waterPara.match(/water/gi);
const waterNum = waterMatch ?  waterMatch.length : 0 ;
print(waterNum)
let waterFirstPosition =  waterPara.search(/water/i);
waterFirstPosition = waterFirstPosition >= 0 ? waterFirstPosition : "Not found";
print(waterFirstPosition)

print("#########################")
////////////////// 2 ////////////////////////////////
function  linearSearch(arr, vlu) {
    for (let i in arr){
        if (arr[i]==vlu){
            return i
        }
    }
    return "Not Found"
}
print(linearSearch([1,2,3,4,5],6))
print(linearSearch([1,2,3,4,5],3))

print("#########################")
////////////////// 3 ////////////////////////////////
function largeLen(arr) {
    let value = arr[0]
    let idx = 0
    for (let i in arr){
        if(arr[i].length > value.length){
            value = arr[i]
            idx = i
        }
    }
    return `The largest strign is ${value} and it's index is ${idx}`
}
print(largeLen(["Amlan","Lawrence","christopher","Dion"]))
print(largeLen([]))

print("#########################")
////////////////// 4 ////////////////////////////////

const arr1 = [1,false,2,null,'3',undefined,'4',NaN,'amlan','','7']
print(arr1.filter(Boolean))
print("#########################")
////////////////// 5 ////////////////////////////////
