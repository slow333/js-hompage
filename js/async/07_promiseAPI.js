// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

// function setAlarm() {
//   window.setTimeout(() => {
//     output.textContent = "Wake up!";
//   }, 1000);
// }

// button.addEventListener("click", setAlarm);

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0 ) {
      throw new Error("시간은 음수 안되요.");
    }
    window.setTimeout(() => {
      resolve(`Wake up! ${person}`);
    }, delay*1000);
  });
};

button.addEventListener("click", async() => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `알람 설정이 안되요 : ${error}`
  }
});