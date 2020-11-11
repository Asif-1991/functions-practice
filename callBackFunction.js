// function hello(name){
//     print(name);
//     print('something else');
// }

// function print(args){
//     console.log(args);
// }


// hello('Twinkle cats');


//====================================================

// function hello(name, print){
//     print(name);
// }

// hello('Md sif', print)

// function print(args){
//     console.log(args);
// }


// hello('Md struggle', function(name){
//     console.log('Hello '+name);
// });
                                                                           
// hello ('Md struggle', function(name){                                                  
//     console.log('Hi, How are you ' + name + '?');
// });

// hello ('Twinkle cats', function(name){                                                  
//     console.log('Length of ' + name + ' is = ' +  name.length );
// });

//=================================================================

// var me = {
//     name: 'struggle',
//     age: '17',
//     email: 'riad1991khan@gmail.com'
// }

// function printMySelf(person, callback){
//     console.log('Person: '+ person.name + ' ('+ person.age + ') ');
//     if (person.age >= 18){
//         callback(person.email);
//     }else{
//         console.log('You are ineligible for this programme....')
//     }

// }

// printMySelf(me, function(email){
//  console.log('Email sent to ' + email);
// });

//========================================================

function print (data, callback1, callback2){
    console.log('Original Date: ' + data);
    console.log( 'Length: '+ data.length);
    callback1(data);
    callback2(data);
}

print('Twinkle cats is Awesome Channel for Beginners', function(data){
    var data = data.toUpperCase();
    console.log('uppercase: ' + data);

}, function(data){
    var data = data.toLowerCase();
    console.log('lowercase: '+ data);
    console.log('Length: ' + data.length);
});


