import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {

    let slider = createElement('<div></div>');
    slider.className = 'slider';

    let sliderThumb = createElement('<div></div>');
    sliderThumb.className = 'slider__thumb';
    sliderThumb.style.left='50%';

    let sliderValue = createElement('<span class="slider__value">2</span>');
    sliderValue.className = 'slider__value';
    
    sliderThumb.appendChild(sliderValue);

    let sliderProgress = createElement('<div></div>');
    sliderProgress.className = 'slider__progress';
    sliderProgress.style.width = '50%';

    let sliderSteps = createElement('<div></div>');
    sliderSteps.className = 'slider__steps';

    let stepsElem = '';
    for (let i = 0; i < steps; i++) {
      if (value === i) {
        stepsElem = stepsElem + '<span class="slider__step-active"></span>';
      } else {
        stepsElem = stepsElem + '<span></span>';
      }
    }
    
    slider.appendChild(sliderThumb);
    slider.appendChild(sliderProgress);
    sliderSteps.innerHTML = stepsElem;
    slider.appendChild(sliderSteps);

    this.elem = slider;

    slider.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;

      let leftRelative = left / this.elem.offsetWidth;

      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let slValElem = slider.querySelector('.slider__value');
      slValElem.textContent = value;
      let custEv = new CustomEvent('slider-change', { 
        detail: value,
        bubbles: true 
      })
      event.target.dispatchEvent(custEv);
    })

  }
}
