//SIDEBAR TOGGLE

var sidebaropen = false;
var sidebar = document.getElementById("side-bar");

function openSidebar() {
    if(sidebaropen) {
        sidebar.classList.add("sidebar-responsive")
        sidebaropen = true;
    }
}

function Closesidebar() {
    if(sidebaropen) {
        sidebar.classList.remove("sidebar-responsive")
        sidebaropen = false;
    }
}

// Year dropdown

const startingYear = 2022;

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Create a dropdown with the starting year and previous years up to the current year
  const dropdown = document.getElementById('yearDropdown');

  for (let year = currentYear; year >= startingYear; year--) {
    const yearOption = document.createElement('option');
    yearOption.text = year;
    yearOption.value = year;
    dropdown.add(yearOption);
  }

//   charttttttttttttttttttttttttttttttt

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Girls',
      backgroundColor: '#F5C400', 
      data: [10, 25, 100, 55, 25, 85, 50]
    }, {
      label: 'Boys',
      backgroundColor: '#102A71', 
      data: [20, 35, 90, 65, 30, 95, 70]
    }]
  };

  const options = {
    indexAxis: 'x', 
    scales: {
      y: {
        ticks: {
          // Callback function to format y-axis ticks as percentages
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: 'Dual Bar Chart'
    //   }
    },
  };

  const ctx = document.getElementById('barChart').getContext('2d');

  // Create the chart
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });


//..............Calendar...........

const monthYearElement = document.getElementById('monthYear');
const dateElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();
    const currentYer = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

