(function() {
    const slides = [ 
    '<div><img src="img/lavazza.png" alt="lavazza"></div>',
    '<div><img src="img/folgers.png" alt="folgers"></div>',
    '<div><img src="img/frontier.png" alt="organic-coffee"></div>',
    '<div><img src="img/meliha.png" alt="meliha"></div>',
    '<div><img src="img/roasters.png" alt="rosasrers"></div>',
    '<div><img src="img/monarch.png" alt="monarch"></div>',
    '<div><img src="img/costa.png" alt="costa"></div>'
    ]

let currentSlideIdx = 0;
function renderSlides() {
    const slidesBrand = document.querySelector('.brand-carusel .slides-brand');
    slidesBrand.innerHTML = slides[currentSlideIdx];
}
function nextSlide() {
    currentSlideIdx++;
    if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
    renderSlides();
}

function prevSlide() {
    currentSlideIdx--;
    if (currentSlideIdx < 0) currentSlideIdx = slides.length - 1;
    renderSlides();
}
// setInterval(nextSlide, 3000);
document.querySelector('.carousel .prev').addEventListener('click', prevSlide);
document.querySelector('.carousel .next').addEventListener('click', nextSlide);

renderSlides();

window.addEventListener('resize', renderSlides);
})();