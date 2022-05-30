
/*
Напишите функцию hideSelf, которая сделает так, чтобы кнопка с классом hide-self-button скрывала себя по нажатию. Чтобы скрыть кнопку, добавьте ей атрибут hidden.

function hideSelf() {
  // ваш код...
}

hideSelf();
Сама кнопка:

<button class="hide-self-button">Нажмите, чтобы спрятать</button>
В файле index.html вы можете найти пример использования функции.

Подсказка об использовании hidden атрибута
hidden - стандартный атрибут, поэтому он представлен в виде свойства в DOM-елементе: button.hidden. Подробнее можно прочитать здесь

Атрибут и DOM-свойство «hidden» указывает на то, видим ли мы элемент или нет.

Мы можем использовать его в HTML или назначать при помощи JavaScript, как в примере ниже:

<div>Оба тега DIV внизу невидимы</div>

<div hidden>С атрибутом "hidden"</div>

<div id="elem">С назначенным JavaScript свойством "hidden"</div>

<script>
  elem.hidden = true;
</script>
Технически, hidden работает так же, как style="display:none". Но его применение проще.

Мигающий элемент:

<div id="elem">Мигающий элемент</div>

<script>
  setInterval(() => elem.hidden = !elem.hidden, 1000);
</script>
*/
function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
    btn.addEventListener('click', () => {
      btn.hidden = true;
    })
}
