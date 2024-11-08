const texts = ["Frontend Developer", "Android Developer", "Game Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0; // Ulang dari teks pertama
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("dynamicText").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(() => {
      setTimeout(type, 500); // jeda sebelum memulai kata berikutnya
    }, 2000);
  } else {
    setTimeout(type, 150);
  }
}

type();
