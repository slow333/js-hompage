import {
  createElement,
  removeElements,
  addElement,
  concatAndAddEl,
} from "./exportFunc.js";

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
const myData = "Limp, Bizkit, Rebbeca, Purguson, Daejeon, Linkin park";

let myArray = myData.split(",");
let myNewString = myArray.join(",");
createElement("=====================");
concatAndAddEl(shopping[2], sequence[sequence.length - 1]);
addElement(random[1], random[0], random[2]);

createElement("by create el 새로 만든 것");

document.querySelector("#clearDiv").addEventListener("click", () => {
  removeElements();
});
createElement("=====================");
addElement(myArray);
addElement(myNewString);

myArray.push("push data");
createElement("=====================");
addElement(myArray);
myArray.pop();
addElement(myArray);
