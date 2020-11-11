// var arr = [ 4, 5, 6, 7];

// arr.forEach(function(a){
//     console.log(a);
// });

var arr = [ 4, 5, 6, 7];

function cbf(a){
    console.log(a);
};

arr.forEach(cbf);


function caller(){
    return function(name){
        return 'Caller Calling you' + name;
    }
}

// var x = caller();
// var y = x(' MD sif');
// y;

// var z = x('Do you have twinkle cat?');
// z;

var a = caller () (' twinkle cat?');
a;






