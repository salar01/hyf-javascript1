// 1
function sumFunction (a, b, c) {
    return sum; a + b + c
}

console.log(sumFunction(1, 2, 3));

// 2

function colorCar(color) {
    console.log("a " + red + " car");

}
 colorCar("red");

// 3

var person = { name: "Marlena", age: 30, eyeColor: "green" };
function displayObject(person) {
    for (var property in person) {
        console.log(property + " :" + person[property]);
    }
}

// 4 

function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " car");


    } else {
        console.log("a " + color + " motorbike");
    }
   
}
vehicleType("red", 1);
vehicleType("blue", 2);

// 5

3 === 3 ? console.log("yes") : console.log("no");

// 6

function vehicle(color, code, age) {
    if (age > 5) {
        console.log("a ", "blue", " used car");
    } else { 
        console.log("a ", "white", " unused car");
    }   
}
vehicle("blue", 1, 5);

// 7

var VehiclesList = ["scooter", "truck", "caravan", "motorbike"];

// 8

console.log(vehiclesList[2]);

// 9
function vehicle(color, code, age) {
    if (age > 5) {
        console.log("a ", "blue" + " used car");
    } else if (age < 2) {
        console.log("a ", + "white" + " new " + VehiclesList[2]);

    } else {
        console.log("a " + "white" + " unused car");
    }
}
vehicle("green", 3, 1);

// 10
const vehicles = ['car', 'motorcycle', 'caravan', 'boat'];

function createAdvertisement(vehicles) {
    let advertisement = "At amazing Joe's garage, we sell";
    let vehicleList   = vehicles[0] + 's',

    for (let i = 1; i < vehicles.length; i++) {
        if (i === vehicles.length - 1) {
            vehicleList += ' and' + vehicles[i] + 's';
        } else {
            vehiclesList += ', ' + vehicles[i] + 's';
        }
    }
    
    return advertisement + vehicleList;
}

// 11

vehicles.push("scooter");

const vehicles = ['car', 'motorcycle', 'caravan', 'boat'];
function createAdvertisement(vehicles) {
    let advertisement = "At amazing Joe's garage, we sell";
    let vehicleList = vehicles[0] + 's',

    for (let i = 1; i < vehicles.length; i++) {
        if (i === vehicles.length - 1) {
            vehicleList += ' and' + vehicles[i] + 's';
        } else {
            vehiclesList += ', ' + vehicles[i] + 's';
        }
    }

    return advertisement + vehicleList;
}



// 12

let emptyObject = {};

// 13

let teachers = {
    module1: 'philip',
    module2: ['Unmesh', 'Bonan'],
    module3: ['Mauro', 'Daan'],
};

// 14 

teachers.languages = ['HTML-CSS', 'git', 'Javascript'];

// 15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

x == y
// false
x === y
// false
z === y
// true
z == x
// false

// 16

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o1.foo = "sib";
console.log(o1);
console.log(o2);
console.log(o3);
console.log('when i change o1, o2 and o3 does not changing. Because they are not related to each other');

o2.foo(seb);
console.log('if i change o2, o3 will change because  they are related to each other');

// 17

let bar = 42;
typeof typeof bar;

console.log(typeof typeof bar);
"string"

console.log(The return of typeof typeof [any operand] is always a string);





























