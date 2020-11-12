var arr = [5, 9, 8, 5, 4, 2, 3];

// var sum = 0;

// for(var i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log('Sum is = ' + sum);

var result = arr.reduce(function(a,b){
    return a+b;
})
console.log('Result is  = ' + result)
