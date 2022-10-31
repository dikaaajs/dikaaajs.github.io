const parent = document.querySelector(".container-slideshow");
const card = document.querySelectorAll(".card-repo");
const containerCard = document.querySelector(".container-card");
const prevButton = document.querySelector(".circle-btn-left");
const nextButton = document.querySelector(".circle-btn-right");
const tmp = window.outerWidth * (85 / 100);

// screen sm
let widthCard = (window.outerWidth * 85) / 100;
let slideWidth = (window.outerWidth * 85) / 100 + 20;
let maxSlide = card.length;

// screen md
if (window.outerWidth >= 748 && window.outerWidth < 1024) {
  widthCard = tmp * (45 / 100);
  slideWidth = widthCard * 2 + 40;
  maxSlide = card.length / 2;

  // lg
} else if (window.outerWidth >= 1024) {
  widthCard = tmp * (30 / 100);
  slideWidth = widthCard * 3 + 60;
  maxSlide = card.length / 3;

  // xl
} else if (window.outerWidth >= 1280) {
  parent.style.width = `${window.outerWidth}px`;
}

let state = {
  totalCard: card.length,
  widthCard: widthCard,
  slideWidth: slideWidth,
  position: 0,
  maxSlide: maxSlide,
};

function refresh() {
  if (state.position !== 0) {
    prevButton.classList.remove("hilang");
  } else {
    prevButton.classList.add("hilang");
  }

  if (state.position == state.maxSlide - 1) {
    nextButton.classList.add("hilang");
  } else {
    nextButton.classList.remove("hilang");
  }
}

function handleClickNext(e) {
  state.position++;
  const x = state.position * state.slideWidth;
  containerCard.style.transform = `translate3d(-${x}px,0px,0px)`;
  refresh();
}

function handleClickPrev(e) {
  state.position--;
  const x = state.position * state.slideWidth;
  containerCard.style.transform = `translate3d(-${x}px,0px,0px)`;
  refresh();
}
