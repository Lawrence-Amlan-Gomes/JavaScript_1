function print(n) {
    console.log(n);
};
// the elements of an array can any kind of data type
// We can't use named index in array
const arr1 = [1,2,3,4,5];
print(arr1);
arr1[5] = 6;
print(arr1);
print(arr1[2]);
print(typeof(arr1));
print(arr1.length);
print(arr1[arr1.length-1]);
//#############################
print("#############################################")
for ( i=0; i<arr1.length; i++){
    print(arr1[i])
}
print("#############################################")
const arr2 = [ "one", "two", "three"]
arr2.push("four")
function arrFucn(value){
    print(value)
}
arr2.forEach(arrFucn)
print(Array.isArray(arr2));