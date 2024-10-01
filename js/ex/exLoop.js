const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH / 6;
canvas.height = HEIGHT / 6;

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

btn.addEventListener("click", draw);

const dogs = ["Limp", "Bizkit", "Rebecca", "Purguson", "Mim", "Moris"];
const dogPara = document.querySelector(".dog");

let myDogName = "My dog names are ";

for (let i = 0; i < dogs.length; i++) {
  if (i === dogs.length - 1) myDogName += "and " + dogs[i] + ".";
  else myDogName += dogs[i] + ", ";
}
dogPara.textContent = myDogName;

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

const contactContainer = document.querySelector("#contactContainer");
const searchInput = document.getElementById("search");
const btnSearch = document.querySelector(".btnSearch");

btnSearch.addEventListener("click", function () {
  let searchName = searchInput.value;
  searchInput.value = "";
  searchInput.focus();
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].toLowerCase().indexOf(searchName.toLowerCase()) !== -1) {
      contactContainer.textContent = contacts[i];
      break;
    } else {
      contactContainer.textContent = "No name";
    }
  }
});
