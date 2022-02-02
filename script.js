const carte = document.querySelector('.card')
const img = document.querySelector('.card-img-top');
const titre5 = document.querySelector('.card-title');
const txt = document.querySelector('.card-text');
const card_btn = document.querySelectorAll('.btn_card');
const btn_play = document.querySelector('.btn_play');
const btn_reverse = document.querySelector('.btn_reverse');

const TL1 = new TimelineMax({paused: true});

TL1
.from(carte,1,{opacity:0, x: -100})
.from(img,1,{scale:0})
.from(titre5, 0.6,{opacity:0, x:-100}, '-=0.4')
.from(txt, 0.6,{opacity:0, y: 100}, '-=0.4')
.staggerFrom(card_btn, 0.5, {scale: 0})

btn_play.addEventListener('click', () => {
    TL1.play();
})

btn_reverse.addEventListener('click', () => {
    TL1.reverse();
})