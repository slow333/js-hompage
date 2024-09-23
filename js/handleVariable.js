import {
  createElement,
  removeElements,
  addElement,
  concatAndAddEl,
} from "./exportFunc.js";
// const document.body = document.querySelector("#output");
const addEl = document.querySelector("#addElement");
const removeEl = document.querySelector("#removeElement");

let dog = { name: "Limp", breed: "Dalmatian" };

// function createElement(value) {
//   const inEl = document.createElement("div");
//   inEl.classList.add("addedElement");
//   inEl.innerText = `${value} ${count}`;
//   document.body.appendChild(inEl);
// }
// function removeElements() {
//   document.querySelectorAll(".addedElement").forEach((el) => {
//     el.remove();
//     count = 0;
//   });
// }

// function addElement(...theArgs) {
//   for (const arg of theArgs) {
//     const span = document.createElement("span");
//     span.innerText = ` ${arg} `;
//     document.body.appendChild(span);
//   }
// }

// function concatAndAddEl() {
//   let args = Array.prototype.slice.call(arguments, 0); // 첫번째 부터 입력 값을 가지고 옮
//   let text = args.join(separator);
//   const element = document.createElement("div");
//   element.classList.add("addedElement");
//   element.innerHTML = text;
//   document.body.appendChild(element);
// }
addEl.addEventListener("click", () => {
  createElement("on click event and count up");
});

removeEl.addEventListener("click", removeElements);

window.onload = () => {
  createElement(`${dog.name} : ${dog.breed}`);
};

let browserType = "mozilla";
let strLength = browserType.length; // 전체 길이
let firstChar = browserType[0]; // 첫번째 것
let lastChar = browserType[browserType.length - 1]; // 마지막 문자
let indexOfText = browserType.indexOf("i");
let sliceText = browserType.slice(0, 3); // 0, 1, 2
let sliceText2 = browserType.slice(3); //3번째 부터 끝까지

concatAndAddEl(strLength, firstChar, lastChar, "없음");
concatAndAddEl(indexOfText, sliceText, sliceText2);

let radData = "My NaMe Is Lebbeca Pugerson";
let toLowerCase = radData.toLowerCase();
let toUpperCase = radData.toUpperCase();
let replaceChars = radData.replace("Lebbeca", "Limp");

concatAndAddEl(toLowerCase, toUpperCase, replaceChars);
