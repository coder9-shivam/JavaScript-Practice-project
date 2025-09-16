const data = [
  {
      id: 1,
      title: 'iPhone 9',
      price: 549,
      inStock: true,
      category: 'smartphones',
  },
  {
      id: 2,
      title: 'iPhone X',
      price: 899,
      inStock: true,
      category: 'smartphones',
  },
  {

      id: 3,
      title: 'Samsung Universe 9',
      price: 1249,
      inStock: true,
      category: 'smartphones',
  },
  {
      id: 4,
      title: 'Huawei P30',
      price: 499,
      inStock: false,
      category: 'smartphones',
  },
  {
      id: 5,
      title: 'OPPOF19',
      price: 280,
      inStock: false,
      category: 'smartphones',
  },
  {
      id: 6,
      title: 'MacBook Pro',
      price: 1749,
      inStock: true,
      category: 'laptops',
  },
  {
      id: 7,
      title: 'Samsung Galaxy Book',
      price: 1499,
      inStock: false,
      category: 'laptops'
  },
  {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      price: 1499,
      inStock: false,
      category: 'laptops',
  },
  {
      id: 9,
      title: 'HP Pavilion 15-DK1056WM',
      price: 1099,
      inStock: true,
      category: 'laptops',
  },
  {

      id: 10,
      title: 'Infinix INBOOK',
      price: 1099,
      inStock: true,
      category: 'laptops',
  }
];

const createTable = productData => {
  const tableEl = document.createElement('table');
  const tableHead = document.createElement('thead')
  const tableBody = document.createElement('tbody')

  const headers = Object.keys(productData[0]);
  tableHead.appendChild(createHeaderRow(headers));

  productData.forEach(rowData => {
    tableBody.appendChild(createProductRow(rowData));
  });

  tableEl.appendChild(tableHead);
  tableEl.appendChild(tableBody);

  return tableEl;
};

const createHeaderRow = columnNames => {
  const tr = document.createElement('tr');
  columnNames.forEach(columnNames => {
    const th = document.createElement('th');
    th.textContent = columnNames[0].toUpperCase()  + columnNames.slice(1);

    const searchUp = document.createElement('span');
    searchUp.textContent = '🔼';
    const searchDown = document.createElement('span');
    searchDown.textContent = '🔽';

    searchUp.addEventListener('click', () => {
      sortDataBy(columnNames, 'ASC');
    });

    searchDown.addEventListener('click', () => {
      sortDataBy(columnNames, 'DESC');
    });

    th.appendChild(searchDown);
    th.appendChild(searchUp);
    tr.appendChild(th);
  });

  return tr;
};

const createProductRow = product => {
  const tr = document.createElement('tr');
  Object.values(product).forEach(value => {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
};

const sortDataBy = (columnName, direction) => {
  const sortData = [...data].sort((a, b) => {
    if (a[columnName] > b[columnName]) return direction === 'ASC' ? -1 : 1;
    if (a[columnName] < b[columnName]) return direction === 'ASC' ? 1 : -1;
  });

  renderTable(sortData);
};

const renderTable = productData => {
  const sortableTableEl = document.getElementById('sortableTable');
  sortableTableEl.innerHTML = '';
  sortableTableEl.appendChild(createTable(productData));
};

renderTable(data);