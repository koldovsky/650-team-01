(function () {
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
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + 6);
        if (currentSlides.length < 6) {
            currentSlides.push(slides.slice(0, 6 - currentSlides.length));
        }

        slidesBrand.innerHTML = currentSlides;
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
    document.querySelector('.brand-carusel .prev').addEventListener('click', prevSlide);
    document.querySelector('.brand-carusel .next').addEventListener('click', nextSlide);



    window.addEventListener('resize', renderSlides);
})();