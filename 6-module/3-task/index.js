import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
   
    let slidesHtml = `<div class="carousel">`;
    slidesHtml = slidesHtml + `<div class="carousel__arrow carousel__arrow_right">
                        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                      </div>
                      <div class="carousel__arrow carousel__arrow_left">
                        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
                      </div>`;
    slidesHtml = slidesHtml + `<div class="carousel__inner">`;
    slidesHtml = slidesHtml + slides.map(slide => {
      return `<div class="carousel__slide" data-id="${slide.id}">
                <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
                <div class="carousel__caption">
                  <span class="carousel__price">€${parseFloat(slide.price).toFixed(2)}</span>
                  <div class="carousel__title">${slide.name}</div>
                  <button type="button" class="carousel__button">
                    <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                  </button>
                </div>
              </div>`;         
    }).join('');
    slidesHtml = slidesHtml + `</div>`;
    slidesHtml = slidesHtml + `</div>`;
         
    this.elem = createElement(slidesHtml);

    let list = this.elem.querySelector('.carousel__inner');
    let slidesObjects = this.elem.querySelectorAll('.carousel__slide');
    let btnArrowRight = this.elem.querySelectorAll('.carousel__arrow_right');
    let btnArrowLeft = this.elem.querySelectorAll('.carousel__arrow_left');

     // ширина картинки

    let position = 0; // положение ленты прокрутки

    let size = slidesObjects.length;
    let slideCounter = 1;
    btnArrowLeft[0].style.display = 'none';
    btnArrowLeft[0].onclick = function() {

      let width = slidesObjects[0].offsetWidth;
      // сдвиг влево
      position += width;
      position = Math.min(position, 0)
      list.style.transform = 'translateX(' + position + 'px)';
      slideCounter--;
      if (slideCounter < size ) {
        btnArrowRight[0].style.display = '';
        if (slideCounter === 1) {
          this.style.display = 'none';
        } else {
          this.style.display = '';
        }
      } 
    };

    btnArrowRight[0].onclick = function() {
      let width = slidesObjects[0].offsetWidth;
      // сдвиг вправо
      position -= width;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (slidesObjects.length - 1));
      list.style.transform = 'translateX(' + position + 'px)';
      slideCounter++;
      if (slideCounter > 1 ) {
        btnArrowLeft[0].style.display = '';
        if (slideCounter === size) {
          this.style.display = 'none';
        } else {
          this.style.display = '';
        }
      } 
    };

    let slidesDivs = this.elem.querySelectorAll('.carousel__slide');
    for (let slideDiv of slidesDivs) {
        let btn = slideDiv.querySelector('.carousel__button');
        let customEvent = new CustomEvent("product-add", { 
          detail: slideDiv.dataset.id, 
          bubbles: true 
        });
  
        btn.addEventListener('click', (event) => {
          event.target.dispatchEvent(customEvent);
        })
    }
  }
}
