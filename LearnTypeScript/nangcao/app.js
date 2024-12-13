/// Array
var numbers = [1, 2, 3];
var strings = ['one', 'two', 'three'];
console.log("numbers: " + numbers);
console.log("strings: " + strings);
/// tuple
var person = ['Son', 25, true];
console.log("person: " + person);
/// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("Color: " + c);
/// Any
var randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log("Any: " + randomValue);
/// Union
var id;
id = 101;
// id = "Son"
console.log("Union: " + id);
