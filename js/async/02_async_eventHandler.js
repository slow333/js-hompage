const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", function() {
  log.textContent = "";
  
  const xhr = new XMLHttpRequest();
  
  xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",);
  
  xhr.send();

  xhr.onloadend = function () {
    log.textContent = `${log.textContent} Finished with status ${xhr.status}`;
  }

  log.textContent = `${log.textContent} Started XHR request \n`;
});

document.querySelector("#reload").addEventListener("click", function() {
  log.textContent = "";
  document.location.reload();
})