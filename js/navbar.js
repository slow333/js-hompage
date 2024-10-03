const requestUrl = "/pages/navbar.html";
const footerUrl = "/pages/footer.html";

let req = new XMLHttpRequest();

req.open("GET", requestUrl);
req.responseType = "text";
req.send();

req.onload = function () { // async event handler
   let text = req.response;
   document.querySelector("#menuNavBar").outerHTML = text;
   setCurrentPageNav();
}

let footerReq = new XMLHttpRequest();

footerReq.open("GET", footerUrl);
footerReq.responseType = "text";
footerReq.send();
footerReq.onload = function () {
   let text = footerReq.response;
   document.querySelector("footer").outerHTML = text;
}

function setCurrentPageNav() {
   const btns = document.querySelectorAll(".subnavbtn");
   const mainAs = document.querySelectorAll(".navbar .mainnav");
   const subAs = document.querySelectorAll(".subnav-content a");
   const article = document.querySelector("article");

   btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
         let target = e.target;
         let eNextSibling = target.nextSibling.nextSibling;
         let btnNextSibling = target.nextSibling.nextSibling;
         // console.log(eNextSibling.textContent);
         if (eNextSibling.style.display === "flex") {
            eNextSibling.style.display = "none";
            article.style.marginTop = '62px';
            return;
         }

         btns.forEach(btn => {
            btnNextSibling.style.display = "none";
            btn.style.backgroundColor = "#333";
         });
         mainAs.forEach(mainA => {
            mainA.style.backgroundColor = "#333";
         })
         if (target.textContent === btn.textContent) {
            eNextSibling.style.display = "flex";
            eNextSibling.style.justifyContent = "center";
            article.style.marginTop = '92px';
            target.style.backgroundColor = 'orangered';
         }
      })
   });

   subAs.forEach(suba => {
      if (window.location.href === suba.href) {
         suba.style.backgroundColor = "darkred";
         suba.parentNode.style.display = "flex";
         suba.parentNode.style.justifyContent = "center";
         suba.parentNode.parentNode.style.backgroundColor = "orangered";
         article.style.marginTop = '92px';
      } else {
         suba.style.backgroundColor = "orangered";
      }
   })

   mainAs.forEach(mainA => {
      if (window.location.href === mainA.href) {
         mainA.style.backgroundColor = "red";
         article.style.marginTop = '60px';
      }
   });
}

