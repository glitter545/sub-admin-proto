const people = [
  {
    name: "Ali Bin Ahmad",
    address: "123 Jalan ABC, Taman XYZ, 12345 Kuala Lumpur",
    phone: "012-3456789",
    email: "ali@example.com",
    picture: "./pictures/ali.png",
    database: 5
  },
  {
    name: "Ahmad Bin Ismail",
    address: "789 Jalan GHI, Taman RST, 54321 Shah Alam",
    phone: "017-1234567",
    email: "ahmad@example.com",
    picture: "./pictures/ali.png",
    database: 2
  },
  {
    name: "Khairul Azman",
    address: "246 Jalan STU, Taman VWX, 77777 Shah Alam",
    phone: "016-9871234",
    email: "khairul@example.com",
    picture: "./pictures/ali.png",
    database: 4
  },
  {
    name: "Siti Binti Kamal",
    address: "456 Jalan DEF, Taman UVW, 67890 Petaling Jaya",
    phone: "011-9876543",
    email: "siti@example.com",
    picture: "./pictures/ali.png",
    database: 3
  },
  {
    name: "Nurul Huda",
    address: "101 Lorong MNO, Taman PQR, 88888 Subang Jaya",
    phone: "019-5554443",
    email: "nurul@example.com",
    picture: "./pictures/ali.png",
    database: 6
  }
  // ... (other people data)
];

const allNames = people.map(pro => pro.name);
const searchInput = document.getElementById('searchInput');
new Awesomplete(searchInput, { list: allNames });

searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value;
  updateProList(searchTerm);
});

const proList = document.getElementById('proList');
const totalDatabaseCountSpan = document.getElementById('totalDatabaseCount');

function updateProList(searchTerm) {
  proList.innerHTML = '';
  
  const filteredPros = people.filter(pro => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return pro.name.toLowerCase().includes(lowercaseSearchTerm);
  });

  filteredPros.forEach(pro => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><a href="${pro.picture}" target="_blank"><img src="${pro.picture}" alt="${pro.name}'s Picture" width="50"></a></td>
      <td>${pro.name}</td>
      <td>${pro.address}</td>
      <td>${pro.phone}</td>
      <td>${pro.email}</td>
      <td>${pro.database}</td>
    `;
  
    // Apply vertical alignment style to center the content
    row.querySelectorAll('td').forEach(cell => {
      cell.style.verticalAlign = 'middle';
    });
  
    proList.appendChild(row);
  });

  totalDatabaseCountSpan.textContent = people.length;
}

updateProList('');

proList.addEventListener('click', event => {
  if (event.target.classList.contains('view-button')) {
    const row = event.target.closest('tr');
    const name = row.querySelector('td:nth-child(2)').textContent;
    const person = people.find(person => person.name === name);

    if (person && person.link) {
      window.location.href = person.link;
    }
  }
});
