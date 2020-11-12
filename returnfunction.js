// function host(){
//     console.log('I am Host Function');
//     return function(){
//         console.log('I am Child');
//     }
// }

// var a = host();
// console.log(a());

//====================================================

// function host(){
//     console.log('I am Host Function');

// function child(){
//         console.log('I am Child');
//     }
//     return child;
// }

// var a = host();
// a();


//==================================

// function greeting (msg){

//     return function(name){
//         console.log(msg + ' ' + name);
//     }
// }

function greeting(msg){
    function ret (name){
         console.log(msg + ' ' + name);
    }
    return ret;
}
var good = greeting('Good Morning');
var hello = greeting('Hello');

hello('Twinkle');
good('Twinkle cats');