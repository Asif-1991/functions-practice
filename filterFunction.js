var arr = [5, 9, 8, 5, 4, 2, 1];

// var newArr = [];

// for (var i=0; i<arr.length; i++){
//     if(arr[i]%2 == 1){
//         newArr.push(arr[i]);
//     }
// }

// console.log('New Array = ' + newArr);
  
//=======================================
// var newArr = arr.filter(function(value){
//     return value % 2 == 1;
// })

// console.log('New Array = ' + newArr);

//=======================================
function myFilter(arr, callback){
    var newArr = [];

  for(var i=0; i<arr.length; i++){
    if (callback(arr[i])) {
        newArr.push(arr[i]);
    }
  }  
  return newArr;

}

var myArr = myFilter(arr, function(element){
    return element % 2 == 0;
})

console.log('My Array Filtered Data = ' + myArr);


                                                                                                       


