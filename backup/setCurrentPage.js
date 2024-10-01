setTimeout(function () {
  const currentLocation = window.location.href;
  const allATag = document.querySelectorAll("a");
  allATag.forEach((a) => {
    if (currentLocation === a.href) {
      a.classList.add("currentPage");
      const pppEl = a.parentElement.parentElement.parentElement;
      pppEl.firstElementChild.classList.add("currentPage");
    }
  });
}, 1000);
