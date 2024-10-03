import { addElements } from "/js/exportFunc.js";

// let timeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve("Success !!");
//   }, 2000)
// })

function timeoutPromise(message, interval) {
  return new Promise((resolve, reject) => {
    if (message === "" || typeof message !== "string") {
      reject("메세지가 없거나 스트링이 아니에요");
    } else if (interval <= 0 || typeof interval !== "number") {
      reject("인터벌은 0보다 커야해요. 숫자를 넣으세요.");
    } else {
      setTimeout(function () {
        resolve(message);
      }, interval*1000);
    }
  });
}

timeoutPromise("Hello custom promise", 2).then((message) => {
  addElements(message);
}).catch((e) => {
  console.log("문제 발생 : " + e);
});
timeoutPromise("", 2).then((message) => {
  addElements(message);
}).catch((e) => {
  console.log("문제 발생 : " + e.message);
});