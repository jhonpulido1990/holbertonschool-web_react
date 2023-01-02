interface Student {
    firstName: string;
    lastName: string;
    location: string;
    age: number;
}

const student1: Student = {
    firstName: 'Diahan',
    lastName: 'Hudgson',
    location: 'Bogotá',
    age: 32,
}

const student2: Student = {
    firstName: 'Sebastian',
    lastName: 'Moreno',
    location: 'Bogotá',
    age: 22,
}

const studentsList: Array<Student> = [student1, student2];

//Render a table with vanilla JS
const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cellHead1: HTMLTableCellElement = rowHead.insertCell(0);
const cellHead2: HTMLTableCellElement = rowHead.insertCell(1);

cellHead1.innerHTML = 'firstName';
cellHead2.innerHTML = 'location';

table.append(thead);

studentsList.forEach((students) => {
    const rows: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = rows.insertCell(0);
    const cell2: HTMLTableCellElement = rows.insertCell(1);

    cell1.innerHTML = students.firstName;
    cell2.innerHTML = students.location;
  });

table.append(tbody);
body.append(table);
