class UserDirectory {
  constructor(options) {
    const { apiUrl, userMapperFn, displaySelector, filterSelector, storageKey = 'usersData' } = options;

    this.apiUrl = apiUrl;
    this.userMapperFn = userMapperFn;
    this.storageKey = storageKey;
    this.displayEl = document.querySelector(displaySelector);
    this.filterEl = document.querySelector(filterSelector);

    this.initialse();
  }

  initialse() {
    this.loadData()
      .then(users => {
        console.log(users);
        this.populateDisplay(users);
        this.createHeader();
      });
    this.filterEl.addEventListener('keyup', () => {
      this.filterUsers(this.filterEl.value);
    });
  }

  loadData() {
    const storedUserData = JSON.parse(localStorage.getItem(this.storageKey));

    if (storedUserData) {
      return new Promise((resolve, reject) => resolve(storedUserData))
        .then(users => {
          this.users = users;
          return users;
        });
    }

    return fetch(this.apiUrl)
      .then(response => response.json())
      .then(results => this.userMapperFn(results))
      .then(users => {
        this.users = users;
        localStorage.setItem(this.storageKey, JSON.stringify(users));
        return users;
      });
  }

  populateDisplay(users) {
    Array.from(this.displayEl.children).forEach(row => row.remove());
    users.forEach(user => {
      const tr = document.createElement('tr');
      Object.entries(user)
        .forEach(([key, value]) => {
          const td = document.createElement('td');
          if (key === 'photo') {
            const img = document.createElement('img');
            img.src = value;
            td.appendChild(img);
          } else {
            td.textContent = value;
          }

          tr.appendChild(td);
        });

      this.displayEl.appendChild(tr);
    });
  }

  createHeader() {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    Object.keys(this.users[0])
      .forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1);
        tr.appendChild(th);
      });
    thead.appendChild(tr);
    this.displayEl.insertAdjacentElement('beforebegin', thead);
  }

  filterUsers(searchTerm) {
    const filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    this.populateDisplay(filteredUsers);
  }
}

const userDirectory = new UserDirectory({
  apiUrl: 'https://dummyjson.com/users',
  userMapperFn: (userData) => {
    return userData.users.map((
      { firstName, lastName, birthDate, image, phone, email }
    ) => ({
        name: `${firstName} ${lastName}`,
        birthDate,
        phone,
        email,
        photo: image,
    }))
  },
  displaySelector: '#userTable tbody',
  filterSelector: '#filterUsers'
});