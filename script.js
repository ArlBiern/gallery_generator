document.addEventListener("DOMContentLoaded", function() {

  // SLIDER

  // Technology backgrounds
  const techBackgrounds = [
    'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/745708/pexels-photo-745708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/50711/board-electronics-computer-data-processing-50711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  ]

  // Fruits backgrounds
  const fruitsBackgrounds = [
    'url(https://images.pexels.com/photos/8066/fruits-market-colors.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/87818/background-berries-berry-blackberries-87818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/953215/pexels-photo-953215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1652312/pexels-photo-1652312.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
  ]

  // Joy backgrounds
  const joyBackgrounds = [
    'url(https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/724825/pexels-photo-724825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
  ]

  // Slider class

  class Slider {
    constructor(elementsSelector, options) {
      const defaultOptions = {
        pauseTime: 4000,
        generateDots: true,
        generatePrevNext: true,
        backgroundsSet: fruitsBackgrounds,
        nextText: '>',
        prevText: '<'
      }

      this.options = Object.assign({}, defaultOptions, options);
      this.sliderSelector = elementsSelector;
      this.slider = null;
      this.slides = null;

      this.currentSlide = 0;
      this.time = null;
      this.prev = null;
      this.next = null;
      this.dots = [];

      this.generateSlider();
      this.changeSlide(this.currentSlide);
    }

    // Main function generating the whole structure of slaids
    generateSlider() {
      //getting the element that we want convert into slider
      this.slider = document.querySelector(this.sliderSelector);
      this.slider.classList.add('slider');

      //generate slides container
      const slidesContainer = document.createElement('div');
      slidesContainer.classList.add('slider-slides-cnt');

      //getting slaids content
      this.slides = this.slider.children;

      while (this.slides.length) {
        this.slides[0].classList.add('slider-slide');

        // Random background addition
        let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length)
        this.slides[0].style.background = this.options.backgroundsSet[randNumber];
        this.options.backgroundsSet.splice(randNumber, 1);

        // In case you do not want to set backgrounds in randowm way:
        //this.slides[0].style.background = this.options.backgroundsSet[0];
        //this.options.backgroundsSet.splice(0, 1);

        this.slides[0].style.backgroundSize = 'cover';
        this.slides[0].style.backgroundPosition = 'center';
        slidesContainer.appendChild(this.slides[0]);
      }

      this.slides = slidesContainer.querySelectorAll('.slider-slide');

      this.slider.appendChild(slidesContainer);

      if (this.options.generatePrevNext) this.createPrevNext();
      if (this.options.generateDots) this.createDots();
    }

    // Create Previous and Next buttons
    createPrevNext() {
      this.prev = document.createElement('button');
      this.prev.type = 'button';
      this.prev.innerHTML = `<p>${this.options.prevText}</p>`;
      this.prev.classList.add('slider-button');
      this.prev.classList.add('slider-button-prev');
      this.prev.addEventListener('click', () => this.slidePrev());

      this.next = document.createElement('button');
      this.next.type = 'button';
      this.next.innerHTML = `<p>${this.options.nextText}</p>`;
      this.next.classList.add('slider-button');
      this.next.classList.add('slider-button-next');
      this.next.addEventListener('click', () => this.slideNext());

      const nav = document.createElement('div');
      nav.classList.add('slider-nav');
      nav.setAttribute('aria-label', 'Slider prev next');
      nav.appendChild(this.prev);
      nav.appendChild(this.next);
      this.slider.appendChild(nav);
    }

    // Create dots for direct navigation
    createDots() {
      const ulDots = document.createElement('ul');
      ulDots.classList.add('slider-dots');
      ulDots.setAttribute('aria-label', 'Slider pagination');

      for (let i = 0; i < this.slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slider-dots-element');

        const btn = document.createElement('button');
        btn.classList.add('slider-dots-button');
        btn.type = 'button';
        btn.innerText = i + 1;
        btn.setAttribute('aria-label', 'Set slide ' + (i + 1));

        btn.addEventListener('click', () => this.changeSlide(i));

        li.appendChild(btn);

        ulDots.appendChild(li);

        this.dots.push(li);
      }

      this.slider.appendChild(ulDots);
    }

    // Change slides main mechanism function
    changeSlide(index) {
      [...this.slides].forEach((slide) => {
        slide.classList.remove('slider-slide-active');
        slide.setAttribute('aria-hidden', true);
      });

      this.slides[index].classList.add('slider-slide-active');
      this.slides[index].setAttribute('aria-hidden', false);


      this.dots.forEach((dot) => dot.classList.remove('slider-dots-element-active'));
      this.dots[index].classList.add('slider-dots-element-active');

      this.currentSlide = index;

      if (typeof this.options.pauseTime === "number" && this.options.pauseTime !== 0) {
        clearInterval(this.time);
        this.time = setTimeout(() => this.slideNext(), this.options.pauseTime);
      }
    }

    // Chenge slides with prev/next buttons
    slidePrev() {
      this.currentSlide--
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
      }
      this.changeSlide(this.currentSlide);
    }

    slideNext() {
      this.currentSlide++
      if (this.currentSlide > this.slides.length - 1) {
        this.currentSlide = 0;
      }
      this.changeSlide(this.currentSlide);
    }
  }

  const sliderSample = new Slider('#slider1');

  // ============================================

  // === ACCORDION ===

  class Accordion {
    constructor(elementsSelector, options) {
      const defaultOptions = {
        backgroundsSet: joyBackgrounds
      }

      this.options = Object.assign({}, defaultOptions, options)
      this.accordionSelector = elementsSelector;
      this.accordion = null;
      this.elements = null;

      this.generateAccordion();
    }

    // Generating an Accordion
    generateAccordion() {
      this.accordion = document.querySelector(this.accordionSelector);
      this.accordion.classList.add('accordion');

      const accordionContainer = document.createElement('div');
      accordionContainer.classList.add('accordion-cnt');

      this.elements = this.accordion.children;

      while (this.elements.length) {
        this.elements[0].classList.add('accordion-element');

        // Random background addition
        let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length)
        this.elements[0].style.background = this.options.backgroundsSet[randNumber];
        this.options.backgroundsSet.splice(randNumber, 1);

        // In case you do not want to set backgrounds in randowm way:
        //this.slides[0].style.background = this.options.backgroundsSet[0];
        //this.options.backgroundsSet.splice(0, 1);

        this.elements[0].style.backgroundSize = 'cover';
        this.elements[0].style.backgroundPosition = 'center';

        accordionContainer.appendChild(this.elements[0]);
      }

      this.accordion.appendChild(accordionContainer);
    }
  }

  const accordionSample = new Accordion('#accordion1');
});

