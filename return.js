// function name(firstName, lastName, gender){
//     if (gender === 'male'){
//         var output = 'Mr,' + firstName + ' ' + lastName;
//         return output;
//     }else if (gender === 'female'){
//         var output = 'Ms,' + firstName + ' ' + lastName;
//         return output;
//     }
// }

var fullName = name('Md', 'sif', 'male');
console.log(fullName);

function name(firstName, lastName, gender){
    var output; 

    if (gender === 'male'){
        output = 'Mr,' + firstName + ' ' + lastName;
    
    }
    else if (gender === 'female'){
        output = 'Ms,' + firstName + ' ' + lastName;
    }

    return output;

}

var fullName = name('Md', 'sif', 'male');
console.log(fullName);

function example () {
    return {
        name: 'Md sif',
        skill: ['java', 'javascript'],
        print: function(){
            console.log(this,name, this.skill);
        }
    }
}

var obj = example();
obj.print();