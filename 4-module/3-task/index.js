function highlight(table) {
  let rows = table.querySelectorAll("tbody tr");

  for (let row of rows) {
    let statusCell = row.cells[3];

    switch (statusCell.dataset.available) {
      case "true":
        row.classList.add("available");
        break;
      case "false":
        row.classList.add("unavailable");
        break;
      default:
        row.setAttribute("hidden", "true");
        break;
    }

    let genderCell = row.cells[2].textContent;
    if (genderCell === "m") {
      row.classList.add("male");
    } else if (genderCell === "f") {
      row.classList.add("female");
    }

    let ageCell = Number(row.cells[1].textContent);
    if (ageCell < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
