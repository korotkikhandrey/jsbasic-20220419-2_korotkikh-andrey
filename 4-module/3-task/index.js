function highlight(table) {
  let size = table.rows.length;
  let thTag = table.querySelector('thead');
  let allThTds = thTag.querySelectorAll('td');

  let statusColNr = 0, genderColNr = 0, ageColNr = 0;
  for (let i = 0; i < allThTds.length; i++) {
    if (allThTds[i].textContent === 'Status') {
      statusColNr = i;
    }
    if (allThTds[i].textContent === 'Gender') {
      genderColNr = i;
    }
    if (allThTds[i].textContent === 'Age') {
      ageColNr = i;
    }
  }

  for (let i = 1; i < size; i++) {
    
    let currentRow = table.rows[i];

    let statusCol = currentRow.cells[statusColNr];

    if(statusCol.getAttribute('data-available')) {
      currentRow.classList.add('available');
    } else {
      currentRow.classList.add('unavailable');
    }

    if(!statusCol.hasAttribute('data-available')) {
      currentRow.setAttribute('hidden', 'true');
    }

    let genderCol = currentRow.cells[genderColNr];
    if(genderCol.textContent === 'm') {
      currentRow.classList.add('male');
    } else if (genderCol.textContent === 'f') {
      currentRow.classList.add('female');
    }

    let ageCol = currentRow.cells[ageColNr];
    if(isFinite(ageCol.textContent) && !isNaN(parseFloat(ageCol.textContent)) && parseFloat(ageCol.textContent) < 18) {
      currentRow.style="text-decoration: line-through"
    } 
  }
}
