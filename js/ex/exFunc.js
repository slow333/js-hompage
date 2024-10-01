import {createElement, removeElements} from "/js/exportFunc.js";

const removeButton = document.querySelector("#removeBtn");
let myButton = document.querySelector("#funcBtn");

myButton.onclick = function () {
   createElement("by click event !!");
};

removeButton.onclick = function () {
   removeElements();
};

const container = document.getElementById("exContainer");
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
container.appendChild(panel);

const msg = document.createElement("p");
msg.textContent = "메세지 박스 입니다.";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "구성 요소 닫기";
panel.appendChild(closeBtn);

closeBtn.onclick = removeChild;

function removeAllChild() {
   panel.parentElement.removeChild(panel);
}

function removeChild() {
   panel.firstChild.remove();
   // msg.remove();
}

const createElBtn = document.createElement("button");
createElBtn.textContent = "box create";
createElBtn.setAttribute("style", "margin-top: 1rem;");
panel.appendChild(createElBtn);
createElBtn.onclick = displayMsgBox;

const deleteElBtn = document.createElement("button");
deleteElBtn.textContent = "box delete";
deleteElBtn.style.marginTop = "1rem";
panel.appendChild(deleteElBtn);

deleteElBtn.onclick = deleteMsgBox;

let msgInput = document.createElement("input");
msgInput.placeholder = "mesasge";
let colorInput = document.createElement("input");
colorInput.placeholder = "color";

let selectElement = document.createElement("select");
let option = document.createElement("option")
option.value = ""
option.textContent = "select type"

let option1 = document.createElement("option")
option1.value = "danger"
option1.textContent = "Danger"

let option2 = document.createElement("option")
option2.value = "normal"
option2.textContent = "Normal"

container.appendChild(msgInput);
container.appendChild(colorInput);
container.appendChild(selectElement);
selectElement.appendChild(option);
selectElement.appendChild(option1);
selectElement.appendChild(option2);

function displayMsgBox() {
   const panel = document.createElement("div");
   panel.textContent = msgInput.value ? msgInput.value : "메세지 없어요";
   panel.style.color = colorInput.value ? colorInput.value : "black";
   panel.id = "msgBox"
   selectElement.onchange = function () {
      switch (selectElement.value) {
         case "danger":
            panel.style.backgroundColor = "red";
            break;
         case "normal":
            panel.style.backgroundColor = "blue";
            break;
         default:
            panel.style.backgroundColor = "green";
      }
   }
   container.appendChild(panel);
}

function deleteMsgBox() {
  document.querySelectorAll("#msgBox").forEach(box => {
      box.remove();
  });
}