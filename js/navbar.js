const requestUrl = "/pages/navbar.html";
let req = new XMLHttpRequest();

req.open("GET", requestUrl);
req.responseType = "text/plain";
req.send();

req.onload = function () {
   let text = req.response;
   document.querySelector("#menuNavBar").outerHTML = text;
   setCurrentPageNav();
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
         if (eNextSibling.style.display === "block") {
            eNextSibling.style.display = "none";
            article.style.marginTop = '90px';
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
            eNextSibling.style.display = "block";
            article.style.marginTop = '120px';
            target.style.backgroundColor = 'red';
         }
      })
   });

   subAs.forEach(suba => {
      if (window.location.href === suba.href) {
         suba.style.backgroundColor = "darkred";
         suba.parentNode.style.display = "block";
         suba.parentNode.parentNode.style.backgroundColor = "red";
         article.style.marginTop = '120px';
      } else {
         suba.style.backgroundColor = "red";
      }
   })

   mainAs.forEach(mainA => {
      if (window.location.href === mainA.href) {
         mainA.style.backgroundColor = "red";
         article.style.marginTop = '90px';
      }
   });
}

