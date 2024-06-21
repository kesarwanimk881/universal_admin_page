  const list2 = document.querySelectorAll(".myChart-2"); 
const mbtt2=["Scaller Chart For Sale", "Pageviews"]

for (let index = 0; index < list2.length; index++) {
    const element = list2[index];
    multipleBarChart(element, mbtt2[index]);
    
}


function multipleBarChart(ctx, titleText){
  new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['', '', '', '', ''],
        datasets: [
          {
            label: 'Dataset 1',
            data: [2000, 4000, 1600, 15500, 20500],
            backgroundColor: "LightSteelBlue",
          },
          
          
          
          {
            label: 'Dataset 5',
            data: [4000, 5678, 5678, 10000, 18000],
            backgroundColor: "LightSteelBlue",
          }
        ]
      },
      options: {
        // responsive: false,
        plugins: {
          title: {
            display: true,
            text: titleText,
            font: {
              size: 18, // Adjust the size as needed
              weight: 'bold' // Set the font weight to bold
            }
          },
          legend: {
            display: false // Disable the legend
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false ,// Remove the horizontal grid lines
              drawBorder: false 
            },
            min: 0, // Set the minimum value for y-axis
            max: 40000, // Set the maximum value for y-axis
            ticks: {
              // callback: function(value, index, values) {
              //   // Display only the first and last tick values
              //   if (value === 0 || value === 50000) {
              //     return value.toLocaleString();
              //   }
              //   return '';
              // },
              autoSkip: false // Disable automatic skipping
            }
          }
        }
      }
    });
}


// Example data (you can replace this with your own data)
let products = [
  { name: "Product A", quantity: 10, status: "In Stock", price: 29.99 },
  { name: "Product B", quantity: 5, status: "In Stock", price: 49.99 },
  { name: "Product C", quantity: 15, status: "Out of Stock", price: 19.99 },
  { name: "Product D", quantity: 7, status: "In Stock", price: 79.99 },
  { name: "Product E", quantity: 2, status: "In Stock", price: 99.99 },
  { name: "Product F", quantity: 0, status: "Out of Stock", price: 149.99 },
  { name: "Product G", quantity: 12, status: "In Stock", price: 39.99 },
  { name: "Product H", quantity: 3, status: "In Stock", price: 69.99 }
];




 // Function to create a table row
 function createTableRow(name, quantity, status, price) {
  // Create a new table row
  let row = document.createElement("tr");

  // Create table data cells and add them to the row
  let nameCell = document.createElement("td");
  nameCell.textContent = name;
  row.appendChild(nameCell);

  let quantityCell = document.createElement("td");
  quantityCell.textContent = quantity;
  row.appendChild(quantityCell);

  let statusCell = document.createElement("td");
  statusCell.textContent = status;
  row.appendChild(statusCell);

  let priceCell = document.createElement("td");
  priceCell.textContent = price.toFixed(2); // assuming price is a number
  row.appendChild(priceCell);

  // Append the row to the table body
  let tableBody = document.getElementById("tableBody1");
  tableBody.appendChild(row);
}


// Loop through the products and create table rows
products.forEach(function(product) {
  createTableRow(product.name, product.quantity, product.status, product.price);

});






// JSON data for employees
const employees = [
  {
    "name": "John Doe",
    "photo": "./images/profile.jfif",
    "designation": "Senior Software Engineer",
    "level": "1",
    "experience": "8 years"
  },
  {
    "name": "Jane Smith",
    "photo": "./images/profile.jfif",
    "designation": "Product Manager",
    "level": "4",
    "experience": "10 years"
  },
  {
    "name": "Michael Johnson",
    "photo": "./images/profile.jfif",
    "designation": "Data Scientist",
    "level": "2",
    "experience": "6 years"
  },
  {
    "name": "Emily Davis",
    "photo": "./images/profile.jfif",
    "designation": "UX/UI Designer",
    "level": "1",
    "experience": "5 years"
  },
  {
    "name": "Robert Brown",
    "photo": "./images/profile.jfif",
    "designation": "Marketing Specialist",
    "level": "5",
    "experience": "3 years"
  },
  {
    "name": "Sarah Wilson",
    "photo": "./images/profile.jfif",
    "designation": "Human Resources Manager",
    "level": "2",
    "experience": "7 years"
  },
  {
    "name": "Daniel Lee",
    "photo": "./images/profile.jfif",
    "designation": "Financial Analyst",
    "level": "3",
    "experience": "4 years"
  }
];

// Function to create rows based on employee data
function createRows() {
  const tableBody = document.getElementById('tableBody2');

  employees.forEach(employee => {
    const row = document.createElement('tr');

    // Name and Photo cell combined
    const namePhotoCell = document.createElement('td');
    const photoImg = document.createElement('img');
    photoImg.src = employee.photo;
    photoImg.alt = employee.name;
    photoImg.classList.add('employee-photo'); // Optional: Add a class for styling purposes
    const namePhotoHtml = `<img src="${employee.photo}" alt="${employee.name}" class="employee-photo"><span>${employee.name}</span>`;
    namePhotoCell.innerHTML = namePhotoHtml;
    row.appendChild(namePhotoCell);

    // Designation cell
    const designationCell = document.createElement('td');
    designationCell.textContent = employee.designation;
    row.appendChild(designationCell);

    // Level cell
    const levelCell = document.createElement('td');
    // levelCell.textContent = employee.level;
    let color= (employee.level<=2)?"red":"green";
     levelCell.innerHTML = `<input 
     style=" width: 50px;  accent-color: ${color} ;"
     type="range" id="vol" name="vol" value=${employee.level} min="0" max="5">`;
    row.appendChild(levelCell);

    // Experience cell
    const experienceCell = document.createElement('td');
    experienceCell.textContent = employee.experience;
    row.appendChild(experienceCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Call the function to create initial rows
createRows();