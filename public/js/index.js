const hamburger = document.getElementById('hamburger')
const pop = document.querySelector('.popout')
const a = 22;

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    pop.classList.toggle('display-none')
})
