import {createElement} from "../exportFunc.js";

function Person(first, last, age, gender, interest) {
   this.name = {
      'first': first,
      'last' : last,
   }
   this.age = age;
   this.gender = gender;
   this.interest = interest;

   // this.toString = () => {
   //    return "My name is " + this.first + ", " + this.last + "and hobby is " + this.interest;
   // }
}
let person1 = new Person("Linking", "Park", 43, ["music", "rock"]);

// createElement(person1.toString());
// createElement(person1.valueOf());
// console.log(Person.prototype);
// console.log(String.prototype);
// console.log(Date.prototype);
// console.log(Array.prototype);

const myString = "This is my string.";
const arr1= myString.split(" ");
arr1.forEach(element => {
   createElement(element, "span");
});
console.log(myString.indexOf(" is"));
console.log(myString.__proto__);

let person2 = Object.create(person1);
console.log(person2.__proto__);

console.log(person1.constructor);
console.log(person2.constructor);

let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
   "playing drums",
   "mountain climbing",
]);

console.log(person3.interest)
console.log(person1.constructor.name)
console.log(person1.constructor.prototype.constructor.name)

Person.prototype.farewell = function () {
   // console.log(this.name);
   createElement(`${this.name.first}님 잘가요.`);
}
person1.farewell();
