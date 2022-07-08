"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello TypeScript";
let age = 30;
let ids = [1, 2, 3, 4, 5];
ids.push(10);
let arr = [1, true, "Hello"];
// Tuple
let person = [10, "Baby", false];
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Alice"],
];
// Union
let figure = "America";
figure = 1999;
// ENums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// Objects
const user = {
    id: 1,
    name: "Wong",
};
// Type Assertion
let cid = 1;
// let cusomterId = <nubmer>cid
let cusomterId = cid;
// Functions
function addNum(x, y) {
    return "result: " + x + y;
}
console.log("result", addNum(10, 20)); // -> 1020
const user1 = {
    id: 1,
    name: "Flynn Cao",
};
const user2 = {
    id: 1,
    name: "Eric Cao",
    age: 25,
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, "Brad New");
const mike = new Person(2, "Mike Jordan");
console.log(brad, mike); // -> Person {id:1, name: "Brad New" }    {id: 2, name: "Mike Jordan"}
console.log("brad.id", brad.id); // -> brad.id 1
console.log("brad.id", brad.id); // -> brad.id 1
console.log("brad.register()", brad.register());
// Sub classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // construct the ancestor object
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log("emp", emp);
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array(true).concat(items);
}
let numArr = [1, 2, 3];
let strArr = ["Java", "C", "C++"];
console.log(getArray(numArr));
