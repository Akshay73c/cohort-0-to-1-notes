"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Taro", age: 20 }, { name: "akshay", age: 24 });
console.log(age);
