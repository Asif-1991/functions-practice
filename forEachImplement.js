var arr = [4, 5, 6, 7, 9];

// arr.forEach(function (element, index, arr){
//     console.log('Element is ' + element, 'Index = ' + index, 'arr = '+ arr);
// });

function loop(arr, callback){
    for (var i=0; i<arr.length; i++){
        callback(arr[i], i);
    }
}

loop(arr, function(element, i){
    console.log('Element is ' + element, 'Index of ' + i);
});