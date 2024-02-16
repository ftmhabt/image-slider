import './style.css';

const right = document.querySelector('.right');
const left = document.querySelector('.left');
const images = Array.from(document.querySelectorAll('img'));

right.addEventListener('click', () => {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');
            const next = (i + 1) % images.length;
            images[next].classList.add('show');
            break; // Exit the loop after finding the first 'show' image
        }
    }
});

left.addEventListener('click', () => {
    for (let i = 0; i <images.length; i++) {
        let next;
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');
            next = i===0?images.length-1: (i - 1) ;
            images[next].classList.add('show');
            break; // Exit the loop after finding the first 'show' image
        }
    }
});