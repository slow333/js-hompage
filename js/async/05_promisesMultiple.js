function fetchAndDecode(url, type) {
  return fetch(url)
    .then((response) => {
      if (type === "blob") {
        return response.blob();
      } else if (type === "text") {
        return response.text();
      }
    })
    .catch((e) => {
      console.log("뭔가 문제가 있어요. " + e.message);
    })
    .finally(() => {
      console.log(`${url}에 대해 fetch를 수행하여 끝남.`)
    })
}

let headerImg = fetchAndDecode("/images/header.png", "blob");
let mainImg = fetchAndDecode("/images/main.jpg", "blob");
let description = fetchAndDecode("/images/description.txt", "text");

Promise.all([headerImg, mainImg, description]).then((values) => {
  console.log(values);
  let imgHeader = document.createElement("img");
  imgHeader.style.width = "100%";
  imgHeader.style.height = "50px";
  let imgMain = document.createElement("img");
  imgMain.style.width = "30%";
  let para = document.createElement("p");

  let headerImgUrl = URL.createObjectURL(values[0]);
  let mainImgUrl = URL.createObjectURL(values[1]);
  let descriptionText = values[2];

  imgHeader.src = headerImgUrl;
  imgMain.src = mainImgUrl;
  para.textContent = descriptionText;

  const article = document.querySelector("article");
  const section = document.createElement("section");

  article.appendChild(section);
  section.appendChild(imgHeader);
  section.appendChild(imgMain);
  section.appendChild(para);
});
