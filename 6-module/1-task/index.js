
export default class UserTable {
  constructor(rows) {
    this.elem = this.createTable(rows);
  }

  createTable(rows) {
    const table = document.createElement("table");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
        </tr>
      </thead>
      <tbody></tbody>`;

    this.addUserRows(table, rows);

    return table;
  }

  addUserRows(table, rows) {
    let userRows = rows.map((user) => {
      const userRow = document.createElement("tr");

      userRow.append(this.createCellWithText(user.name));
      userRow.append(this.createCellWithText(user.age));
      userRow.append(this.createCellWithText(user.salary));
      userRow.append(this.createCellWithText(user.city));
      userRow.append(this.createCellWithCloseBtn());

      return userRow;
    });

    const tbody = table.querySelector("tbody");
    userRows.forEach((row) => tbody.append(row));
  }

  createCellWithText(innerText) {
    const cell = document.createElement("td");
    cell.innerText = innerText;

    return cell;
  }

  createCellWithCloseBtn() {
    const td = document.createElement("td");
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.addEventListener("click", (event) =>
      event.target.closest("tr").remove()
    );

    td.append(closeButton);

    return td;
  }
}

const rows = [{name: 'asd', age: 12}];
const table = new UserTable(rows);