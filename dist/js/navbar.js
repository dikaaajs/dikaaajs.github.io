const nav = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".sections");

function setActiveNav() {
  nav.forEach((i) => i.classList.remove("active"));

  const currentY = window.scrollY;
  const positionAbout = sections[1].offsetTop - 80;
  const positionSkills = sections[2].offsetTop - 80;
  const positionRepo = sections[3].offsetTop - 80;
  const positionContact = sections[4].offsetTop - 80;

  // Home
  if (currentY < positionAbout) {
    nav[0].classList.add("active");

    // About
  } else if (currentY > positionAbout && currentY < positionSkills) {
    nav[1].classList.add("active");

    // skills
  } else if (currentY > positionSkills && currentY < positionRepo) {
    nav[2].classList.add("active");

    // Repository
  } else if (currentY > positionRepo && currentY < positionContact) {
    nav[3].classList.add("active");

    // Contact
  } else if (currentY > positionRepo) {
    nav[4].classList.add("active");
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
