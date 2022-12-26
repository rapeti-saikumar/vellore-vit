function init() {
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");

  hamburger.addEventListener("click", function () {
    sidebarContainer.classList.add("show-sidebar");
  });

  sidebarCloseButton.addEventListener("click", function () {
    sidebarContainer.classList.remove("show-sidebar");
  });
}

function navRealatedCode() {
  const navbarContainer = document.querySelector(".nav-container");

  window.addEventListener("scroll", function () {
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollNumber >= targetNumber) {
      navbarContainer.classList.add("sticky-nav");
    } else {
      navbarContainer.classList.remove("sticky-nav");
    }
  });
}

init();
navRealatedCode();
