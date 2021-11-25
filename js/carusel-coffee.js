(function() {
    const slides = [
        '<div><img src="img/classico.png" alt="classico"></div>',
        '<div><img src="img/intenso.png" alt="intenso"></div>',
        '<div><img src="img/mocha.png" alt="mocha"></div>',
        '<div><img src="img/decaf.png" alt="decaf"></div>',
        '<div><img src="img/espreso.png" alt="espresso"></div>'
    ]
    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesCoffee = document.querySelector('.carusel-coffee .slides-coffee');
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + 4);
        if (currentSlides.length < 4) {
            currentSlides.push(slides.slice(0, 4 - currentSlides.length));
        }

        slidesCoffee.innerHTML = currentSlides;

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

    renderSlides();
    document.querySelector('.carusel-coffee .prev').addEventListener('click', prevSlide);
    document.querySelector('.carusel-coffee .next').addEventListener('click', nextSlide);


    window.addEventListener('resize', renderSlides);
})();