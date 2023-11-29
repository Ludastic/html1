const slider = document.querySelector('.scrolling-carousel');
const card = document.querySelector('.card');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.onclick = () => {
    slider.scrollLeft -= card.clientWidth + 16;
}

right.onclick = () => {
    console.log(card.clientWidth)
    slider.scrollLeft += card.clientWidth + 16;
}