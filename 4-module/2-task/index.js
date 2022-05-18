function makeDiagonalRed(table) {
  let size = table.rows.length;
    
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i == j) {
          table.rows[i].cells[j].style.backgroundColor = 'red'; 
        }
      }
    }
}
