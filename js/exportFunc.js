function createEl(value, el = "div") {
  let newEl = document.createElement(`${el}`);
  newEl.classList.add("addedElement");
  newEl.innerHTML = `${value} : `;

  const section = document.createElement("section");
  document.querySelector("article").appendChild(section);
  section.appendChild(newEl);
}

// array나 여러 개를 넣어 주면 새로운 element를 생성해서 값을 넣어줌
function addElements(...theArgs) {
  for (const arg of theArgs) {
    let newEl = document.createElement("span");
    newEl.innerHTML = `${arg} : `;

    const section = document.createElement("section");
    document.querySelector("article").appendChild(section);
    section.appendChild(newEl);
  }
}

function removeElements() {
  document.querySelectorAll(".addedElement").forEach((el) => {
    el.remove();
  });
}

function concatAndAddEl() {
  let args = Array.prototype.slice.call(arguments, 0); // 첫번째 부터 입력 값을 가지고 옮
  let text = args.join(": &nbsp;");
  createEl(text);
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

export { removeElements, addElements, concatAndAddEl };
