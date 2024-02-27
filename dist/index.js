"use strict";
console.log('hello thieves');
let age = 3;
console.log(age);
age = 27;
let firstName = 'christian';
let isAdmin = true;
let lastName = 'Sachs';
lastName = 3;
let students = ['Sabita', 'Jay', 'Tez'];
let dog = [1, 'pitbull'];
dog.push('dylan');
console.log(dog);
const small = 1;
const medium = 2;
const large = 3;
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
console.log(Sizes);
var Instructions;
(function (Instructions) {
    Instructions["Lead"] = "Christian";
})(Instructions || (Instructions = {}));
function calculateTax(income) {
    let bonus = 2000;
    return income * bonus;
}
const calculateTax2 = (income) => {
    let bonus = 2000;
    return income * bonus;
};
let employee = {
    id: 0,
    name: 'dylan',
    location: 'ATL',
    isAdmin: false
};
