(function() {
    const slides = [
        '<figure><img class="machines-box-img" alt="SMIK Coffee Machine" src="img/smik-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">SMIK Coffee Machine</a></p><p class="machines-box-price">199,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="La Spezia Coffee Machine" src="img/la-spezia-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">La Spezia Coffee Machine </a></p><p class="machines-box-price">499,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="FROST Coffee Machine" src="img/frost-coffe-machine.png"><figcaption><div><p><a href="" class="machines-box-name">FROST Coffee Machine</a></p><p class="machines-box-price">199,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="SMIK 2 Coffee Machine " src="img/smik2-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">SMIK 2 Coffee Machine</a></p><p class="machines-box-price">299,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>',
        '<figure><img class="machines-box-img" alt="ORGANIC Coffee Machine" src="img/organic-coffee-machine.png"><figcaption><div><p><a href="" class="machines-box-name">ORGANIC Coffee Machine</a></p><p class="machines-box-price">299,00USD</p><p><a class="machines-box-cart">Add to Cart</a></p></div></figcaption></figure>'
    ]
    let currentSlideIdx = 0;

    function renderSlides() {
        const slidesCoffee = document.querySelector('.carusel .slides');
        let currentSlides = slides.slice(currentSlideIdx, currentSlideIdx + 4);
        if (currentSlides.length < 4) {
            currentSlides.push(...slides.slice(0, 4 - currentSlides.length));
        }

        slidesCoffee.innerHTML = currentSlides.join("");

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
    document.querySelector('.carusel .prev').addEventListener('click', prevSlide);
    document.querySelector('.carusel .next').addEventListener('click', nextSlide);


    window.addEventListener('resize', renderSlides);
})();