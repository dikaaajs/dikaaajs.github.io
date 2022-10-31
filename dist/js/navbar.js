const nav = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".sections");

function setActiveNav() {
  nav.forEach((i) => i.classList.remove("active"));

  const currentY = window.scrollY;
  const positionAbout = sections[1].offsetTop - 10;
  const positionRepo = sections[2].offsetTop - 10;
  const positionContact = sections[3].offsetTop - 10;

  // Home
  if (currentY < positionAbout) {
    nav[0].classList.add("active");

    // About
  } else if (currentY < positionRepo) {
    nav[1].classList.add("active");

    // Repository
  } else if (currentY < positionContact) {
    nav[2].classList.add("active");

    // Contact
  } else if (currentY > positionContact) {
    nav[3].classList.add("active");
  }

  setDiv();
}

function setDiv() {
  let arr = Array.prototype.slice.call(nav);
  const index = arr.findIndex((i) => {
    return i.classList.contains("active");
  });

  const x = index * 100;
  document.querySelector(".nav-div").style.transform = `translateX(${x}%)`;
}

setActiveNav();
window.addEventListener("scroll", setActiveNav);
