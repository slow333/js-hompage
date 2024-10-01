let separator = ": &nbsp;";

let newEl;
// 하나의 node를 원하는 tag로 생성함
function createNode(el) {
 newEl = document.createElement(`${el}`);
}
// 새로운 node를 만들어서 값을 넣어줌, 이후 article에 추가
function createElement(value, el = "div") {
  createNode(el);
  newEl.classList.add("addedElement");
  newEl.innerHTML = `${value}, `;
  document.querySelector("article").appendChild(newEl);
}

// array나 여러 개를 넣어 주면 새로운 element를 생성해서 값을 넣어줌
function addElements(...theArgs) {
  for (const arg of theArgs) createElement(arg, "span");
  createNode("div");
  newEl.innerHTML = "=======================================";
  document.querySelector("article").appendChild(newEl);
}

function removeElements() {
  document.querySelectorAll(".addedElement").forEach((el) => {
    el.remove();
  });
}

function concatAndAddEl() {
  let args = Array.prototype.slice.call(arguments, 0); // 첫번째 부터 입력 값을 가지고 옮
  let text = args.join(separator);
  createElement(text);
}

function setCurrentPage() {
  const currentLocation = window.location.href;
  const allATag = document.querySelectorAll("a");
  allATag.forEach((a) => {
    if (currentLocation === a.href) {
      a.classList.add("subCurrentPage");
      const pppEl = a.parentElement.parentElement.parentElement;
      pppEl.firstElementChild.classList.add("currentPage");
    }
  });
}
setTimeout(function () {
  setCurrentPage();
}, 500);

export { createElement, removeElements, addElements, concatAndAddEl };
