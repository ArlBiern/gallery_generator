document.addEventListener("DOMContentLoaded", function () {
  // Technology backgrounds
  let techBackgrounds = [
    'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 )',
    'url(https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
    'url(https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/46168/space-telescope-mirror-segments-james-webb-cosmos-46168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/459718/pexels-photo-459718.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  ];

  // Fruits backgrounds
  let fruitsBackgrounds = [
    'url(https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/87818/background-berries-berry-blackberries-87818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  ];

  // Joy backgrounds
  let joyBackgrounds = [
    'url(https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/160739/smilies-bank-sit-rest-160739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/36463/person-human-guitar-players.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/724825/pexels-photo-724825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  ];

  // Mountain backgrounds
  let mountainBackgrounds = [
    'url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/163550/landscape-scenic-going-to-the-sun-road-rocky-mountains-163550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/551876/pexels-photo-551876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    'url(https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
  ];
  // SLIDER

  class Slider {
    constructor(elementsSelector, options) {
      const defaultOptions = {
        pauseTime: 4000,
        generateDots: true,
        generatePrevNext: true,
        backgroundsSet: fruitsBackgrounds,
        nextText: '>',
        prevText: '<'
      };

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
        let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length);
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
      nav.appendChild(this.prev);
      nav.appendChild(this.next);
      this.slider.appendChild(nav);
    }

    // Create dots for direct navigation
    createDots() {
      const ulDots = document.createElement('ul');
      ulDots.classList.add('slider-dots');

      for (let i = 0; i < this.slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('slider-dots-element');

        const btn = document.createElement('button');
        btn.classList.add('slider-dots-button');
        btn.type = 'button';
        btn.innerText = i + 1;

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
      });

      this.slides[index].classList.add('slider-slide-active');

      if (this.options.createDots === true) {
        this.dots.forEach((dot) => dot.classList.remove('slider-dots-element-active'));
        this.dots[index].classList.add('slider-dots-element-active');
      }

      this.currentSlide = index;

      if (typeof this.options.pauseTime === "number" && this.options.pauseTime !== 0) {
        clearInterval(this.time);
        this.time = setTimeout(() => this.slideNext(), this.options.pauseTime);
      }
    }

    // Chenge slides with prev/next buttons
    slidePrev() {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
      }
      this.changeSlide(this.currentSlide);
    }

    slideNext() {
      this.currentSlide++;
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
      };

      this.options = Object.assign({}, defaultOptions, options);
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
        let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length);
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

  // ============================================

  // === TAB GALLERY ===

  class TabGallery {
    constructor(elementSelector, options) {
      const defaultOptions = {
        backgroundsSet: techBackgrounds
      };

      this.options = Object.assign({}, defaultOptions, options);
      this.tabGallerySelector = elementSelector;
      this.tabGallery = null;
      this.elements = null;
      this.activeElement = null;

      this.generateTabGallery();
      this.tabZoom();

      window.addEventListener('resize', () => this.setMarkerPosition());
    }

    // Generating main container with its elements
    generateTabGallery() {
      this.tabGallery = document.querySelector(this.tabGallerySelector);
      this.tabGallery.classList.add('tab-gallery');

      const tabGalleryContainer = document.createElement('div');
      tabGalleryContainer.classList.add('tab-gallery-cnt');

      const tabGalleryMin = document.createElement('div');
      tabGalleryMin.classList.add('tab-gallery-min');

      const tabGalleryMarker = document.createElement('div');
      tabGalleryMarker.classList.add('tab-gallery-marker');

      const marker = document.createElement('div');
      marker.classList.add('marker');
      tabGalleryMarker.appendChild(marker);

      this.elements = this.tabGallery.children;
      const elementsWidth = 90 / this.elements.length;

      while (this.elements.length) {
        this.elements[0].classList.add('gallery-element');
        this.elements[0].style.width = `${elementsWidth}%`;

        this.elements[0].style.background = this.options.backgroundsSet[0];
        this.options.backgroundsSet.splice(0, 1);
        this.elements[0].style.backgroundSize = 'cover';
        this.elements[0].style.backgroundPosition = 'center';

        tabGalleryMin.appendChild(this.elements[0]);
      }

      const tabGalleryZoom = document.createElement('div');
      tabGalleryZoom.classList.add('gallery-element-zoom');

      const zoomTitle = document.createElement('h2');
      zoomTitle.classList.add('zoom-title');

      const zoomText = document.createElement('p');
      zoomText.classList.add('zoom-text');

      tabGalleryZoom.appendChild(zoomTitle);
      tabGalleryZoom.appendChild(zoomText);

      tabGalleryContainer.appendChild(tabGalleryMin);
      tabGalleryContainer.appendChild(tabGalleryMarker);
      tabGalleryContainer.appendChild(tabGalleryZoom);

      this.tabGallery.appendChild(tabGalleryContainer);
    }

    // Setting marker position
    setMarkerPosition() {
      const element = document.querySelector('.gallery-element-active');
      let center = element.offsetLeft + (element.offsetWidth / 2);
      const marker = document.querySelector('.marker');
      marker.style.left = center - 5 + 'px';
    }

    // Formating zoom container content
    tabZoom() {
      const elements = document.querySelectorAll('.gallery-element');

      function deleteStyles() {
        [...elements].forEach(element => {
          element.classList.remove('gallery-element-active');
        });
      }

      [...elements].forEach(element => {
        const self = this;

        element.addEventListener('click', function() {
          deleteStyles();
          element.classList.add('gallery-element-active');

          const galleryElementZoom = document.querySelector('.gallery-element-zoom');
          const title = galleryElementZoom.firstElementChild;
          title.innerText = this.querySelector('.element-title').innerText;

          const text = galleryElementZoom.lastElementChild;
          text.innerText = this.querySelector('.element-text').innerText;

          galleryElementZoom.style.backgroundImage = this.style.backgroundImage;

          self.setMarkerPosition();
        });
      });
      elements[0].click();
    }
  }

  const tabGallerySample = new TabGallery('#tabGallery1');


  // ============================================

  // === 3D GALLERY ===

  class Gallery3D {
    constructor(elementSelector, options) {
      const defaultOptions = {
        backgroundsSet: mountainBackgrounds
      };

      this.options = Object.assign({}, defaultOptions, options);
      this.gallerySelector = elementSelector;
      this.gallery3d = null;
      this.gallery3dElements = null;
      this.rotateAngle = null;

      this.generate3dGallery();
      this.buttonAction();
      this.showDetails();
      this.setTransformValue();

      window.addEventListener('resize', () => this.setTransformValue());
    }

    // Generating HTML structure
    generate3dGallery() {
      this.gallery3d = document.querySelector(this.gallerySelector);
      this.gallery3d.classList.add('gallery-3d');

      const galleryCnt = document.createElement('div');
      galleryCnt.classList.add('gallery-3d-cnt');

      // Creating section with images
      const galleryImages = document.createElement('div');
      galleryImages.classList.add('gallery-3d-images');

      const prevButton = document.createElement('button');
      prevButton.classList.add('gallery-3d-previous');
      prevButton.innerText = '<';

      const nextButton = document.createElement('button');
      nextButton.classList.add('gallery-3d-next');
      nextButton.innerText = '>';

      this.gallery3dElements = document.createElement('div');
      this.gallery3dElements.classList.add('gallery-3d-elements');

      const elements = this.gallery3d.children;
      const elementsCount = elements.length;
      this.rotateAngle = 360 / elementsCount;

      const width = (elementsCount > 4) ? (250 / elementsCount) : 65;
      const height = (elementsCount > 4) ? (200 / elementsCount) : 65;

      for (let i = 0; i < elementsCount; i++) {
        elements[0].classList.add('gallery-3d-element');
        elements[0].dataset.angle = '';
        elements[0].dataset.count = `${i + 1}`;
        elements[0].style.transform = `rotateY(${this.rotateAngle * i}deg) translateZ(400px)`;

        // Random background addition
        let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length);
        elements[0].style.background = this.options.backgroundsSet[randNumber];
        this.options.backgroundsSet.splice(randNumber, 1);

        // In case you do not want to set backgrounds in randowm way:
        //this.slides[0].style.background = this.options.backgroundsSet[0];
        //this.options.backgroundsSet.splice(0, 1);

        elements[0].style.backgroundSize = 'cover';
        elements[0].style.backgroundPosition = 'center';
        elements[0].style.width = `${width}%`;
        elements[0].style.height = `${height}`;

        this.gallery3dElements.appendChild(elements[0]);
      }
      this.gallery3dElements.firstElementChild.classList.add('active');
      this.gallery3dElements.firstElementChild.dataset.angle = '0';


      galleryImages.appendChild(prevButton);
      galleryImages.appendChild(this.gallery3dElements);
      galleryImages.appendChild(nextButton);

      //Creating section with description/details
      const galleryDetails = document.createElement('div');
      galleryDetails.classList.add('gallery-3d-element-details');

      const gallery3dTitle = document.createElement('h2');
      gallery3dTitle.classList.add('gallery-3d-title');

      const gallery3dText = document.createElement('p');
      gallery3dText.classList.add('gallery-3d-text');

      galleryDetails.appendChild(gallery3dTitle);
      galleryDetails.appendChild(gallery3dText);

      //Final integration
      galleryCnt.appendChild(galleryImages);
      galleryCnt.appendChild(galleryDetails);

      this.gallery3d.appendChild(galleryCnt);
    }

    // Checking elements position
    checkActive() {
      let activeElement = this.gallery3dElements.querySelector('.active');
      let nextElement;
      let previousElement;

      if (activeElement.dataset.count === "1") {
        previousElement = this.gallery3dElements.lastElementChild;
      } else {
        previousElement = activeElement.previousElementSibling;
      }

      if (activeElement.dataset.count === `${activeElement.parentElement.children.length}`) {
        nextElement = this.gallery3dElements.firstElementChild;
      } else {
        nextElement = activeElement.nextElementSibling;
      }

      return [previousElement, activeElement, nextElement];
    }

    // Add event listeners to buttons
    buttonAction() {
      const next = document.querySelector('.gallery-3d-next');
      const previous = document.querySelector('.gallery-3d-previous');

      next.addEventListener('click', () => {
        let [previous, active, next] = this.checkActive();

        next.dataset.angle = `${parseInt(active.dataset.angle) - this.rotateAngle}`;
        previous.dataset.angle = `${parseInt(active.dataset.angle) + this.rotateAngle}`;

        this.gallery3dElements.style.transform = `rotateY(${next.dataset.angle}deg)`;
        active.classList.remove('active');
        next.classList.add('active');
        this.showDetails();
      });

      previous.addEventListener('click', () => {
        let [previous, active, next] = this.checkActive();

        next.dataset.angle = `${parseInt(active.dataset.angle) - this.rotateAngle}`;
        previous.dataset.angle = `${parseInt(active.dataset.angle) + this.rotateAngle}`;

        this.gallery3dElements.style.transform = `rotateY(${previous.dataset.angle}deg)`;
        active.classList.remove('active');
        previous.classList.add('active');
        this.showDetails();
      });
    }

    //Adding description section
    showDetails() {
      const title = this.gallery3d.querySelector('.gallery-3d-title');
      const text = this.gallery3d.querySelector('.gallery-3d-text');
      const activeElement = this.gallery3d.querySelector('.active');

      title.innerText = activeElement.firstElementChild.innerText;
      text.innerText = activeElement.lastElementChild.innerText;
    }

    //changing styles according to gallery items
    setTransformValue() {
      const elementCntStyle = getComputedStyle(this.gallery3dElements);
      const width = parseInt(elementCntStyle.width.slice(0, -2));
      const elements = this.gallery3dElements.children;

      for (let i = 0; i < elements.length; i++) {
        elements[i].style.transform = `rotateY(${this.rotateAngle * i}deg) translateZ(${width * 0.4}px)`;
      }
    }
  }

  const gallery3d = new Gallery3D('#gallery3D');
});
