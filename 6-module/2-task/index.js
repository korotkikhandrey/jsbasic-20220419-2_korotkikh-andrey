import createElement from '../../assets/lib/create-element.js'

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.constructHtml();
  }

  constructHtml() {
    
    let pr = parseFloat(this.product.price).toFixed(2);
    let htmlDiv = `<div class="card">
                      <div class="card__top">
                          <img src="../../assets/images/products/${this.product.image}" class="card__image" alt="product">
                          <span class="card__price">€${pr}</span>
                      </div>
                      <div class="card__body">
                                <div class="card__title">${this.product.name}</div>
                                <button type="button" class="card__button">
                                  <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
                                </button>
                            </div>
                   </div>`;              
    this.elem = createElement(htmlDiv);

    let btn = this.elem.querySelector('.card__button');
    if (btn !== null) {
      
      let customEvent = new CustomEvent("product-add", { 
        detail: this.product.id, 
        bubbles: true 
      });

      btn.addEventListener('click', (event) => {
        event.target.dispatchEvent(customEvent);
      })
    }
  }
}

