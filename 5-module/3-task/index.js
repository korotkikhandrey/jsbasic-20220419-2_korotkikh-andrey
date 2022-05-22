function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let list = carousel.querySelector('.carousel__inner');
  let slides = carousel.querySelectorAll('.carousel__slide');
  let btnArrowRight = carousel.querySelectorAll('.carousel__arrow_right');
  let btnArrowLeft = carousel.querySelectorAll('.carousel__arrow_left');

  let width = slides[0].offsetWidth; // ширина картинки

  let position = 0; // положение ленты прокрутки

  let size = slides.length;
  let slideCounter = 1;
  btnArrowLeft[0].style.display = 'none';
  btnArrowLeft[0].onclick = function() {
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
    // сдвиг вправо
    position -= width;
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position, -width * (slides.length - 1));
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
}
