import {
  createElement,
  removeElements,
  addElement,
  concatAndAddEl,
} from "../exportFunc.js";

const select = document.querySelector("select");
const ifAndSelect = document.querySelector("#if-select");
const switchAndSelect = document.querySelector("#switch-select");

select.addEventListener("change", switchWether);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    ifAndSelect.textContent = "즐거운 좋은 날씨 입니다.";
  } else if (choice === "rainy") {
    ifAndSelect.textContent = "It's rainiing...";
  } else if (choice === "snowing") {
    ifAndSelect.textContent = "눈이 와요.";
  } else if (choice === "overcast") {
    ifAndSelect.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    ifAndSelect.textContent = "";
  }
}
function switchWether() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      switchAndSelect.textContent = "switch 햇살";
      break;
    case "rainy":
      switchAndSelect.textContent = "비가와요";
      break;
    case "snowing":
      switchAndSelect.textContent = "switch 눈이와쇼";
      break;
    default:
      switchAndSelect.textContent = "뭔 날씨지";
  }
}
// setTheme.style.fontSize = "25px";
// setTheme.style.padding = "10px";
// style.cssText 하면 기존 설정을 초기화 해서 밀어 넣음
// theme.addEventListener("change", function () {
//   theme.value === "white"
//     ? (setTheme.style.cssText = `color: red; background-color: green; font-size: 25px;padding:10px`)
//     : (setTheme.style.cssText = `color: yellow; background-color: black;font-size: 25px;padding:10px`);
// });
const setTheme = document.querySelector("#changeTheme");

const theme = document.querySelector("#theme");

function update(bgColor, textColor) {
  setTheme.style.backgroundColor = bgColor;
  setTheme.style.color = textColor;
  setTheme.style.fontSize = "25px";
  setTheme.style.padding = "10px";
}

theme.addEventListener("change", function () {
  theme.value === "white" ? update("red", "yellow") : update("#777", "#fefefe");
});
