// Basic Types

let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello TypeScript";
let age: number = 30;

let ids: number[] = [1, 2, 3, 4, 5];
ids.push(10);
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [10, "Baby", false];
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Alice"],
];

// Union
let figure: string | number = "America";
figure = 1999;

// ENums
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Wong",
};

// Type Assertion
let cid: any = 1;
// let cusomterId = <nubmer>cid
let cusomterId = cid as number;

// Functions
function addNum(x: number, y: number): string {
  return "result: " + x + y;
}
console.log("result", addNum(10, 20)); // -> 1020

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "Flynn Cao",
};
const user2: UserInterface = {
  id: 1,
  name: "Eric Cao",
  age: 25,
};
type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // construct the ancestor object
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log("emp", emp);
console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["Java", "C", "C++"]);
