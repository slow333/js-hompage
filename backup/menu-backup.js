window.addEventListener("load", function () {
   let allElements = document.getElementsByTagName("*");
   Array.prototype.forEach.call(allElements, function (el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
               el.outerHTML = this.responseText;
            }
         };
         xhttp.open("GET", includePath, true);
         xhttp.send();
      }
   });
});
const btns = document.querySelectorAll(".subnavbtn");
const subAs = document.querySelectorAll(".subnav-content a");
btns.forEach(btn => {
   btn.addEventListener("click", (e) => {
      let target = e.target;
      let eNextSibling = target.nextSibling.nextSibling;
      let btnNextSibling = target.nextSibling.nextSibling;
      // console.log(eNextSibling.textContent);
      if (eNextSibling.style.display === "block") {
         eNextSibling.style.display = "none";
         document.querySelector("article").style.marginTop = '0';
         return;
      }

      btns.forEach(btn => {
         btnNextSibling.style.display = "none";
         btn.style.backgroundColor = "#333";
      });
      if (target.textContent === btn.textContent) {
         eNextSibling.style.display = "block";
         document.querySelector("article").style.marginTop = '48px';
         target.style.backgroundColor = 'red';
      }
   })
});

subAs.forEach(suba => {
   suba.addEventListener("click", (e) => {
      subAs.forEach(sub => {
         sub.style.backgroundColor = "red";
      });
      if (e.target.textContent === suba.textContent) {
         e.target.style.backgroundColor = "darkred";
         console.log(e.target.parentElement)
         e.target.parentElement.style.backgroundColor = "red";
      }
   })
});
//
//
// setTimeout(function () {
//    const btns = document.querySelectorAll(".subnavbtn");
//    const mainAs = document.querySelectorAll(".navbar .mainnav");
//    const subAs = document.querySelectorAll(".subnav-content a");
//    btns.forEach(btn => {
//       btn.addEventListener("click", (e) => {
//          // e.preventDefault();
//          let target = e.target;
//          let eNextSibling = target.nextSibling.nextSibling;
//          let btnNextSibling = target.nextSibling.nextSibling;
//          // console.log(eNextSibling.textContent);
//          if (eNextSibling.style.display === "block") {
//             eNextSibling.style.display = "none";
//             document.querySelector("article").style.marginTop = '0';
//             return;
//          }
//
//          btns.forEach(btn => {
//             btnNextSibling.style.display = "none";
//             btn.style.backgroundColor = "#333";
//          });
//          if (target.textContent === btn.textContent) {
//             eNextSibling.style.display = "block";
//             document.querySelector("article").style.marginTop = '36px';
//             target.style.backgroundColor = 'red';
//          }
//       })
//    });
//
//    subAs.forEach(suba => {
//       suba.addEventListener("click", (e) => {
//          subAs.forEach(sub => {
//             sub.style.backgroundColor = "red";
//          });
//          if (e.target.textContent === suba.textContent) {
//             e.target.style.backgroundColor = "darkred";
//             e.target.parentNode.style.display = "block";
//          }
//       })
//    });
//    mainAs.forEach(mainA => {
//       if (window.location.href === mainA.href) {
//          mainA.style.backgroundColor = "darkred";
//       }
//    });
// }, 500)
