/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {

    this.elem = document.createElement('TABLE');
    
    this.elem.innerHTML = `<thead><td>Имя</td><td>Возраст</td><td>Зарплата</td><td>Город</td></thead>` + 
    rows.map(row => {
      return `<tr><td>${row.name}</td><td>${row.age}</td><td>${row.salary}</td><td>${row.city}</td><td><button class="remove-button">[x]</button></td></tr>`;
    }).join('');

    let rmvBtns = this.elem.querySelectorAll('.remove-button');

    for(let btn of rmvBtns) {
      btn.addEventListener('click', (event) => {
        let parentTr = event.target.closest('tr');
        parentTr.parentNode.removeChild(parentTr);
      });
    }

  }
}


