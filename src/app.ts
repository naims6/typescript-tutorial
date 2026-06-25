console.log("Hello TypeScript!");

// 1. Primitive data type
// string, number, boolean

let name: string = "Naim";
let age: number = 21;
let isActive: boolean = true;

// 2. Array
let numbers: number[] = [1, 3, 54, 41];

numbers.push(50); // only numbers

// 3. Object &

// 5. type vs interface
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

type Admin2 = User & { licence: string };

interface User2 {
  name: string;
  age: number;
  isActive: boolean;
}

let user: User2 = {
  name: "Naim",
  age: 21,
  isActive: true,
};

interface Admin extends User2 {
  licence: string;
}

const admin: Admin2 = {
  name: "admin",
  age: 52,
  isActive: true,
  licence: "no:265456544",
};

// 4. function

function greet(name: string, age?: number): string {
  return "Hello " + name;
}

const result = greet("Naim Sorker");
console.log(result);

// generics

function generics<T, S>(value: T, value2: S): T {
  return value;
}

const result2 = generics(true, 25)