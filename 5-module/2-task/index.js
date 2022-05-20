/*

  Напишите функцию toggleText, которая сделает так, чтобы при первом нажатии на кнопку с классом toggle-text-button текст <div id="text">Текст</div> исчезал, а при повторном нажатии появлялся. Чтобы скрыть текст, добавьте ему атрибут hidden и наоборот.

function toggleText() {
  // ваш код...
}

toggleText();
Вёрстка для задачи:

<button class="toggle-text-button">Нажмите, чтобы спрятать/показать текст</button>
<div id="text">Текст</div>
В файле index.html вы можете найти пример использования функции.
*/

function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let txt = document.getElementById('text');
  btn.addEventListener('click', () => {
    txt.toggleAttribute('hidden');
  })
}
