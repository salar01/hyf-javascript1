var a = 553;
var b = "Hello";
var c = true;
var d = ["Hello", 6];

console.log('The value of my variable a is: ' + a);
console.log('The value of my variable b is: ' + b);
console.log('The value of my variable c is: ' + c);
console.log('The value of my variable c is: ' + d);

console.log("I think the type of my variable a is: " + typeof a);
console.log("I think the type of my variable b is: " + typeof b);
console.log("I think the type of my variable c is: " + typeof c);
console.log("I think the type of my variable d is: " + typeof d);

if (typeof a == typeof b) {
    console.log("SAME TYPE");
} else {
    console.log("NOT SAME TYPE");
}

