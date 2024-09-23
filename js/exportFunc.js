let separator = ": &nbsp;";

function createElement(value, el = "div") {
  const inEl = document.createElement(`${el}`);
  inEl.classList.add("addedElement");
  inEl.innerHTML = `${value} `;
  document.querySelector("article").appendChild(inEl);
}

function removeElements() {
  document.querySelectorAll(".addedElement").forEach((el) => {
    el.remove();
  });
}
// array나 여러 개를 넣어 주면 다됨
function addElement(...theArgs) {
  for (const arg of theArgs) {
    // const span = document.createElement("span");
    // span.innerText = ` ${arg} `;
    // document.querySelector("article").appendChild(span);
    createElement(arg, "span");
    createElement("", "div");
  }
}

function concatAndAddEl() {
  let args = Array.prototype.slice.call(arguments, 0); // 첫번째 부터 입력 값을 가지고 옮
  let text = args.join(separator);
  createElement(text);
}

export { createElement, removeElements, addElement, concatAndAddEl };
