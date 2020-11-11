// function outer(){

//     var a = 10;
//     function inner(){
//         a;
//         console.log('I am inner function');
//     }
//     inner();
//     console.log(' I am outer function');
// }


// outer();

function add (a, b){

    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function times(){
        return a*b;
    }
    function div(){
        return a/b;
    }
    return sum() + sub() + times() + div();
}

var result = add (10, 10);
console.log(result);