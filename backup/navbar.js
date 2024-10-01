const btns = document.querySelectorAll(".subnavbtn");
const subAs = document.querySelectorAll(".subnav-content a");
btns.forEach(btn => {
   btn.addEventListener("click", (e) => {
      let target = e.target;
      let eNextSibling = target.nextSibling.nextSibling;
      let btnNextSibling = target.nextSibling.nextSibling;
      console.log(eNextSibling.textContent);
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
      // e.preventDefault();
      subAs.forEach(sub => {
         sub.style.backgroundColor = "red";
      });
      if (e.target.textContent === suba.textContent) {
         e.target.style.backgroundColor = "darkred";
      }
   })
});

