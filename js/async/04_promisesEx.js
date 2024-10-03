let promise = fetch("/images/flower.png");
// let promise = fetch("https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg");

let promise2 = promise.then(res => res.blob());

let promise3 =promise2.then((myBlob) => {
   let objectURL = URL.createObjectURL(myBlob);
   let image = document.createElement("img");
   image.style.width = "30%";
   image.src = objectURL;
   document.querySelector("article").appendChild(image);
});

let errorCase = promise3.catch((e) => {
   console.log("뭔가 문제가 있어요"+ e.message,);
});