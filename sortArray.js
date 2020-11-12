// var arr = [56, 12, 6, 65, 45, 85, 25, 98];

// arr.sort(function (a, b){
//     return a-b;
// });

// console.log(arr);

var people = [ 
    {name: 'sif', age: 23},
    {name: 'fish', age: 32},
    {name: 'fishy', age: 42},
    {name: 'if', age: 52},
    {name: 'si', age: 63}
]

// people.sort(function (a, b){
//     return b.age - a.age;
// });

people.sort(function (a, b){
    if(a.name > b.name){
        return 1;
    }else if (a.name < b.name){
        return -1;
    }else{
        return 0;
    }
});

console.log(people);



