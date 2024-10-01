import {createElement} from "../exportFunc.js";

function Person(first, last, age, gender, interests) {
   this.name = { first, last, };
   this.age = age;
   this.gender = gender;
   this.interests = interests; }

Person.prototype.greeting = function () {
   createElement("Hi! I'm " + this.name.first + ".");
};
function Teacher(first, last, age, gender, interests, subject) {
   Person.call(this, first, last, age, gender, interests);

   this.subject = subject;
}

const person1 = new Person("Linking", "Park", 43, 'male',["music", "rock"]);

person1.greeting();

function Brick() {
   this.width = 10;
   this.height = 20;
}
function BlueGlassBrick() {
   Brick.call(this);

   this.opacity = 0.5;
   this.color = "red";
   this.fontWeight = "bold";
}
const newEl = document.createElement("div");
const blueGlasssBrick = new BlueGlassBrick();
newEl.style.width = blueGlasssBrick.width;
newEl.style.height = blueGlasssBrick.height;
newEl.style.color = blueGlasssBrick.color;
newEl.style.opacity = blueGlasssBrick.opacity;
newEl.style.fontWeight = blueGlasssBrick.fontWeight;
newEl.textContent = "Brick을 상속한 BlueGlassBrick을 통해 element를 정의";
document.querySelector("#exContainer").appendChild(newEl);