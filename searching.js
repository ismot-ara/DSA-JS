


// 2 given sorted array
// sum these arrays
var arr1 = [5,10,15,20, 25];
var arr2 = [15, 20, 25, 30, 35];

function sumArray(arr1, arr2){
    var arr3  = arr1.concat(arr2);;
    arr3.sort(function(arr1, arr2){return arr1 - arr2}); 
    return arr3;
}
console.log(sumArray(arr1, arr2));

