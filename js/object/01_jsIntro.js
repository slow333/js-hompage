import {addElement, createElement} from "../exportFunc.js";

const person = {
   name: ["Bob", "Smith"],
   age: 32,
   gender: "male",
   interests: ["music", "skiing"],
   bio: function () {
      createElement(
         this.name[0] + " " +  this.name[1] + " is " +
         this.age + " years old. He likes " + this.interests[0] + " and " +
         this.interests[1] + ".", );
   },
   greeting: function () {
      createElement("Hi! I'm " + this.name[0] + ".");
   },
};

createElement(person.name);
createElement(person["name"]);
createElement(person.name[0]);
createElement(person.age);
person.bio();
person.greeting();

person["name"]["first"] = "Limp"
createElement(person.name.first);
person["eyes"] = "hazel";
createElement(person.eyes);