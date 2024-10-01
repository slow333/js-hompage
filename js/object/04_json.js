import {addElements, concatAndAddEl} from "../exportFunc.js";

let requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();

request.open("GET", requestUrl);
request.responseType = "json"
request.send();
request.onload = function () {
   let superHeroes = request.response;
   showHeroes(superHeroes);
};

function showHeroes(superHeroes) {
   const heroIntro = document.querySelector("#heroIntro");
   heroIntro.innerHTML = `Hometown : ${superHeroes.homeTown} // Formed : ${superHeroes.formed}`;
   const heroSquad = document.querySelector("#heroSquad");

   for (let i = 0; i < superHeroes.members.length; i++) {
      const nameEl = document.createElement("div")
      const idEl = document.createElement("div");
      const ageEl = document.createElement("div");
      const powersEl = document.createElement("div");
      const containerEl = document.createElement("div");

      let member = superHeroes.members[i];

      nameEl.innerHTML = `${member.name}`;
      nameEl.classList.add("heroName")
      idEl.innerHTML = `Secret identity : ${member.secretIdentity}`;
      ageEl.innerHTML = `Age : ${member.age}`;
      powersEl.innerHTML = "SuperPowers";
      for (let j = 0; j < member.powers.length; j++) {
         const li = document.createElement("li");
         li.innerHTML = `${member.powers[j]}`;
         powersEl.appendChild(li);
      }
      heroSquad.appendChild(containerEl);

      containerEl.appendChild(nameEl);
      containerEl.appendChild(idEl);
      containerEl.appendChild(ageEl);
      containerEl.appendChild(powersEl);
   }
}
// request.onreadystatechange = function () {
//    if (this.readyState === 4 && this.status === 200) {
//       heroData = this.responseText;
//    }
// };
// let superHeroes = {
//    "squadName": "Super hero squad",
//    "homeTown": "Metro City",
//    "formed": 2016,
//    "secretBase": "Super tower",
//    "active": true,
//    "mem": {"name": "Jonas"},
//    "members": [{
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//    }, {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
//    }, {
//       "name": "Eternal Flame",
//       "age": 1000000,
//       "secretIdentity": "Unknown",
//       "powers": ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel"]
//    }]
// }

