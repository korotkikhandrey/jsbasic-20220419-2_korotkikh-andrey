import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    let categoriesHtml = `<div class="ribbon">`;
    categoriesHtml = categoriesHtml + `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
                                        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
                                      </button>`;
    categoriesHtml = categoriesHtml + `<nav class="ribbon__inner">`;
    //categoriesHtml = categoriesHtml + `<a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>`;

    categoriesHtml = categoriesHtml + categories.map(category => {
        return `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;         
    }).join('');
    categoriesHtml = categoriesHtml + `</nav>`;
    categoriesHtml = categoriesHtml + 
    `<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;

    categoriesHtml = categoriesHtml + `</div>`;
    

    this.elem = createElement(categoriesHtml);

    let btnArrowRight = this.elem.querySelectorAll('.ribbon__arrow_right')[0];
    let btnArrowLeft = this.elem.querySelectorAll('.ribbon__arrow_left')[0];


    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    btnArrowLeft.onclick = function() {

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      
      console.log("LEFT scrollWidth : " + scrollWidth + "  " + "clientWidth : " + clientWidth);
      console.log("LEFT scrollRight : " + scrollRight + " scrollLeft: " + scrollLeft);
      ribbonInner.scrollBy(-350, 0);
      
    };

    ribbonInner.addEventListener('scroll' , () => {
      console.log('SCROLL START');
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        btnArrowLeft.classList.remove('ribbon__arrow_visible');
      } else  {
        btnArrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollRight  < 1) {
        btnArrowRight.classList.remove('ribbon__arrow_visible');
      } else  {
        btnArrowRight.classList.add('ribbon__arrow_visible');
      }
      console.log('SCROLL END');
    });

    btnArrowRight.onclick = function() {

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      console.log("RIGHT scrollWidth : " + scrollWidth + "  " + "clientWidth : " + clientWidth);
      console.log("RIGHT scrollRight : " + scrollRight + " scrollLeft: " + scrollLeft);

      ribbonInner.scrollBy(350, 0);
    };

    let ribbonItems = this.elem.querySelectorAll('.ribbon__item');

    for (let ribbonItem of ribbonItems) {
      ribbonItem.addEventListener('click', (event) => {
        event.preventDefault();
        let previousSelectedItem = this.elem.querySelector('.ribbon__item_active');
        if (previousSelectedItem !== null) {
          previousSelectedItem.classList.remove('ribbon__item_active');
        }
        ribbonItem.classList.add('ribbon__item_active');
        let customEvent = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
          detail: ribbonItem.dataset.id, // уникальный идентификатора категории из её объекта
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
        event.target.dispatchEvent(customEvent);
      });
    }

  }
}