import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {

    this.container = document.querySelector('.container');
    if (this.container == null) {
      this.container = createElement(`<div></div>`);
      this.container.className = 'container';
    }
    
    this.modalHtml = `<!--Корневой элемент Modal-->
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
  
    </div>`;
    
    this.modal = createElement(this.modalHtml);

    this.modalInner = createElement(`<div class="modal__inner"></div>`);

    let modalHeaderHtml = `<div class="modal__header"></div>`;
    this.modalHeader = createElement(modalHeaderHtml);

    let crossBtn = createElement(`<button type="button" class="modal__close">
                                    <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
                                  </button>`)
                        
    this.modalHeader.appendChild(crossBtn);
    
    crossBtn.addEventListener('click', (event) => {
      event.preventDefault();
      let childModal = this.container.querySelector('.modal');
      if (childModal != null) {
        this.container.removeChild(childModal);
      }
      document.body.classList.remove('is-modal-open');
      document.body.removeAttribute('class');
      document.removeEventListener('keydown', this.keydownEvent);
    });

    this.modalInner.appendChild(this.modalHeader);
    let modalBody = createElement(`<div>`);
    modalBody.className = 'modal__body';
    this.modalInner.appendChild(modalBody);
    this.modal.appendChild(this.modalInner);

    this.container.appendChild(this.modal);
    document.body.append(this.container);
    
    this.keydownEvent = (event) => this.escapeEvent(event);  
    document.addEventListener('keydown', this.keydownEvent);
  }

  setTitle(titleValue) {
    let modalTitleHtml = `<h3 class="modal__title">
                            ${titleValue}
                          </h3>`;
    
    let modalTitle = createElement(modalTitleHtml);
    this.modalHeader.appendChild(modalTitle);
  }

  setBody(bodyValue) {
      let modalBody = this.container.querySelector('.modal__body');
      modalBody.innerHTML = '';
      modalBody.append(bodyValue);
  }

  escapeEvent(event) {
    if (event?.code === 'Escape') {
        event.preventDefault();
        this.close();
    }
  }

  open() {
    document.body.classList.add('is-modal-open');
  }

  close() {
    let childModal = this.container.querySelector('.modal');
    if (childModal != null) {
      this.container.removeChild(childModal);
    }
    document.body.classList.remove('is-modal-open');
    document.body.removeAttribute('class');
    document.removeEventListener('keydown', this.keydownEvent);
  }
}