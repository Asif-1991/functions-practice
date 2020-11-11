// A Function can be stored in a Variable
function sayName (name){
    return 'Hello,' + name;
}

var hello = sayName;
// var fun = sayName('sif');
// console.log(hello);
// console.log(fun);

//console.log(hello ('sif'));

var anotherHello = hello;
console.log(anotherHello ('sif'));




// A Function can be stored in an Array

var arr = [1,2,3];
arr.push(sayName)
console.log(arr);


// A Function can be stored as a object Field or Property

var person = {
    name: 'sif',
    sayName: 'hello',
    print: function(){
        console.log('hi');
    }
}

console.log(person);

person


// We can create function as needed

var sum = 10 + (function (){return 90})();
sum;


// We can create function as an argument

function wow (name, fun){
    return fun (name);
}
var result = wow ('sif', sayName)
console.log(result);


// We can return function from another function

function base (b){
    return function(n){
        var result = 1;

        for (var i=0; i<b; i++){
            result *= n;
        }
        return result;
    }
}

// var power = base(3);
// var result = power(7);

var result = base(3)(5);
result;