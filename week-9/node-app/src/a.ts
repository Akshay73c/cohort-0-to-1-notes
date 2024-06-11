const x : number = 1
console.log(x)

// string, number, any
// `any` is also a type. 

function greet(firstName : string) {
    console.log("Hello" + firstName);
// we can give type any also to firstName but should explicitely tell that type is any - firstname : any
}

function sum(a: number, b: number): number {
    return a + b;
}

function isLegal1(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

greet("akshay")
console.log(sum(1, 2))
let y = isLegal1(19)

// function runAfter1S(fn: () => void) {
//     setTimeout(fn, 1000);
// }
// runAfter1S(function() {
//     console.log("Hi there")
// })

//Interfaces
interface User {
    firstName: string,
    lastName: string,
    age :number,
    email?: string //optional 
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false
    }
}

function gree1(user: User) {
    console.log("Hi there" + user.firstName)
}

isLegal({
    firstName: "Akshay",
    lastName: "Chavan",
    age : 19
})


// implementing interfaces
interface Person {
    name: string,
    age: number,
    greet(phrase: string) : void
}

class Employee implements Person{
    name: string;
    age: number;
    
    constructor (n: string, a: number) {
        this.name = n,
        this.age = a
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}

// Enums
// type KeyInput = "up" | "down" | "left" | "right"
 
enum Direction {
    Up,     //0
    Down,   //1
    Left,   //2
    Right   //3
}

// enum Direction {
//     Up = "up",      //0
//     Down = "down",  //1
//     Left = "left",  //2
//     Right = "right" //3
// }

// enum Direction {
    //This will start the numbering from 1
//     Up = 1, //0
//     Down,   //1
//     Left,   //2
//     Right   //3
// }

function doSomethingGame(keyPressed: Direction) {
    // do something
    if (keyPressed = Direction.Up) {
        // xyz
    }
}

doSomethingGame(Direction.Up);
console.log("Enums__________________________________________");
console.log(Direction.Down)

//Generics
// type Input = string | number

// function firstEl(arr: Input[]) {
//     return arr[0]
// }

function identity<T>(arg: T) {
    return arg
}

const value = identity<String>("myString")
const value2 = identity<number>(1)

console.log(value.toUpperCase())

//que
function firstEl<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstEl <string>(["akshay", "chavan"]))
console.log(firstEl ([1, 2]))