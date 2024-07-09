interface User {
  name: string;
  password: string;
  age: number;
  email: string;
}
// // Pick - lets us create a new type by selecting or 'picking' a set of props from an existing type/interface.

type UpdateUser = Pick<User, "name" | "age" | "password">;

// Partial - makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

type UpdateuserOptional = Partial<UpdateUser>;

// function updateUser(user: UpdateuserOptional) {
//   // hit the db and do stuff
// }
// updateUser({})

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const a = [1, 2, 3]
// a[2] = 4
// why doesnt this give error? even tho we're using const and still changing value?
// bcoz we CAN change the internal values, We're not chaing the reference `a`. a is still the same
// we cannot do this for string or number.

// ReadOnly - how do we enforce that the internal values also dont change -> readonly
// When to use? - When you have a configuration object that should not be altered after initialization,
// making it Readonly ensures its properties cannot be changed.
// like a api key or something

type Useram = {
  readonly name: string;
  readonly age: number;
};
// or we can do like this also
const user: Readonly<Useram> = {
  name: "akshay",
  age: 24,
};
// user.age = 12

// const config: Readonly<Config> = {
//   endpoint: "https://api.example.com",
//   apiKey: "abcdef123456",
// };

// Record and map
// Record let’s you give a cleaner type to objects
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

// Ugly way
// type Usero = {
//   id: string;
//   username: string;
// };
// type Users = {
//   [key: string]: User;
// };

// using record
type Users = Record<string, number>;
const users: Users = {
  "ras@10": 21,
  "ras@11": 23,
};

// Exclude
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Eventype = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<Eventype, "scroll">; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click"); // OK
