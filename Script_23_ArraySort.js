function print(n) {
    console.log(n);
};

const arr1 = ["Mango","Orange", "Banana", "Apple"]
print(arr1)
arr1.sort()
print(arr1)
arr1.reverse()
print(arr1)

/// Compare function
function compare (a,b){
    return a-b;
}

const arr2 = [ 3, 5, 1, 6, 4, 2]
arr2.sort(function (a,b){
    return a-b;
});
print(arr2)
arr2.sort(function (a,b){
    return b-a;
});
print(arr2)