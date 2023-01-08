let table = document.body.firstElementChild;

let rowTable = document.querySelectorAll("tr");

for (let i = 0; i < rowTable.length; i++) {
  let row = rowTable[i];
  let cells = row.querySelectorAll("td");

  for (let j = 0; j < cells.length; j++) {
    let cell = cells[j];
    if (i == j) {
      cell.style.backgroundColor = "red";
    }
  }
}
