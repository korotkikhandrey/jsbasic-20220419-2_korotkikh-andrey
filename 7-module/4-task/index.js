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
    
    slider.addEventListener('click', (event) => {
      event.preventDefault();
     
      let x = event.clientX;

      let left = x - slider.getBoundingClientRect().left;

      let leftRelative = left / slider.offsetWidth;

      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      let slValElem = slider.querySelector('.slider__value');
      slValElem.textContent = value;

      let stepWidth = slider.offsetWidth/segments;
      sliderThumb.style.left = (value * stepWidth * 100/slider.offsetWidth) + '%';
      sliderProgress.style.width = valuePercents + '%';
      this.elem.classList.add('slider_dragging');
      
      let custEv = new CustomEvent('slider-change', { 
        detail: value,
        bubbles: true 
      })

      event.target.dispatchEvent(custEv);
    })

    sliderThumb.onpointerdown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      sliderThumb.style.position = 'absolute';
      sliderThumb.style.zIndex = 9999;

      function onPointerMove(event) {
        event.preventDefault();
        let x = event.clientX;
        let leftThumb = x - slider.getBoundingClientRect().left;

        let leftRelative = leftThumb / slider.offsetWidth;

        let segments = steps - 1;
        let approximateValue = leftRelative * segments;

        let value = Math.round(approximateValue);
        
        let valuePercents = value / segments * 100;

        let slValElem = slider.querySelector('.slider__value');
        if (value > segments) {
          value = segments;
        } 

        if (value < 0) {
          value = 0;
        }
        
        slValElem.textContent = value;

        let stepWidth = slider.offsetWidth/segments;

        if (sliderThumb.style.left !== '100%' && sliderThumb.style.left !== '0%') {
          sliderThumb.style.left = (value * stepWidth * 100/slider.offsetWidth) + '%';
          sliderProgress.style.width = valuePercents + '%';
          slider.classList.add('slider_dragging');
          let custEv = new CustomEvent('slider-change', { 
            detail: value,
            bubbles: true 
          })
      
          event.target.dispatchEvent(custEv);
        }
        

        //let persent = value * stepWidth * 100/slider.offsetWidth;
        //sliderProgress.style.width = persent + '%';
        
        //let x = event.pageX;
        
        //let thumbPosition = x - (slider.offsetWidth) - (sliderThumb.offsetWidth/2);
        //sliderThumb.style.left = x - (slider.offsetWidth) - (sliderThumb.offsetWidth/2) + 'px';
        // курсор вышел из слайдера => оставить бегунок в его границах.
        /*if (thumbPosition < 0) {
          thumbPosition = 0;
        }
        let rightEdge = slider.getBoundingClientRect().left + slider.offsetWidth;
        if (thumbPosition > rightEdge) {
          thumbPosition = rightEdge;
        }

        sliderThumb.style.left = thumbPosition + 'px';*/
        
        
        
      }

      document.addEventListener('pointermove', onPointerMove);

      sliderThumb.onpointerup = function(event) {
        document.removeEventListener('pointermove', onPointerMove);
        sliderThumb.onpointerup = null;
        slider.classList.remove('slider_dragging');
      }

      document.onpointerup = function(event) {
        document.removeEventListener('pointermove', onPointerMove);
        sliderThumb.onpointerup = null;
        slider.classList.remove('slider_dragging');
      }
    };

    this.elem = slider;

  }
}
