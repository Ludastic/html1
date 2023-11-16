function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

const carousel = document.querySelector('.carousel');
const films = document.querySelectorAll('.film-entry');
const width = films[0].getBoundingClientRect().width;

let i = 0;
const carouselInter = setInterval(() => {
    if (i < films.length) {
        carousel.scrollLeft += width;
        i++;
    } else {
        carousel.scrollLeft = 0;
        i = 0;
    }
}, 2000);