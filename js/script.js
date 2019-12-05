var ctx = document.getElementById("outputCanvas").getContext('2d');

axios.get('https://api.myjson.com/bins/1di5xc')
  .then(function (response) {
  console.log(response);
  var colouring = [];
  var data = [];
  var dopingData = [];
  var notDopingData = [];

  /*var description = document.getElementById("description");
  description.innerText = response.data.description;*/

  for (var i = 0; i < response.data.length; i++) {
    if (response.data[i]["Doping"] === "") {
      notDopingData.push({x: parseFloat(response.data[i]['Time'].replace(':','.')), y: response.data[i]['Place'], id: i});
    } else {
      dopingData.push({x: parseFloat(response.data[i]['Time'].replace(':','.')), y: response.data[i]['Place'], id: i});
    }
  }
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      label: 'Line Dataset',
      datasets: [{
          data: notDopingData,
          label: '2018',
          backgroundColor: 'rgba(255, 0, 0, 1)',
        },
        {
          data: dopingData,
          label: '2019',
          backgroundColor: 'rgba(0, 0, 255, 1)'
        }]
    },
    options: {
      title: {
        display: true,
        text: "Implementeringen af BarMa Academi"
      },
      legend: {
        display: true,
      },

      showLines: false,
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Gennemsnitlig transaktion',
            fontSize: 16
          },
          ticks: {
            beginAtZero:true,
            fontSize: 14
          }
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Tid',
            fontSize: 16
          },
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero:false,
            fontSize: 14,
          }
        }]
      }
    }
  });


})
  .catch(function (error) {
  console.log(error);
});
axios.get('https://api.myjson.com/bins/1di5xc')
  .then(function (response) {
  console.log(response);
  var colouring = [];
  var data = [];
  var dopingData = [];
  var notDopingData = [];

var ctx = document.getElementById("outputCanvas2").getContext('2d');
  /*var description = document.getElementById("description");
  description.innerText = response.data.description;*/

  for (var i = 0; i < response.data.length; i++) {
    if (response.data[i]["Doping"] === "") {
      notDopingData.push({x: parseFloat(response.data[i]['Time'].replace(':','.')), y: response.data[i]['Place'], id: i});
    } else {
      dopingData.push({x: parseFloat(response.data[i]['Time'].replace(':','.')), y: response.data[i]['Place'], id: i});
    }
  }
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      label: 'Line Dataset',
      datasets: [{
          data: notDopingData,
          label: '2018',
          backgroundColor: 'rgba(255, 0, 0, 1)',
        },
        {
          data: dopingData,
          label: '2019',
          backgroundColor: 'rgba(0, 0, 255, 1)'
        }]
    },
    options: {
      title: {
        display: true,
        text: "Implementeringen af BarMa Academi"
      },
      legend: {
        display: true,
      },

      showLines: false,
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Gennemsnitlig transaktion',
            fontSize: 16
          },
          ticks: {
            beginAtZero:true,
            fontSize: 14
          }
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Tid',
            fontSize: 16
          },
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero:false,
            fontSize: 14,
          }
        }]
      }
    }
  });

})
  .catch(function (error) {
  console.log(error);
});

// hide all pages
function hideAllGraphs() {
  let graphs = document.querySelectorAll(".graphs");
  for (let graph of graphs) {
    graph.style.display = "none";
  }
}

// show page or tab
function showGraph(graphId) {
  hideAllGraphs();
  document.querySelector(`#${graphId}`).style.display = "block";
  setActiveTab(graphId);
}

// set default page
function setDefaultGraph() {
  let graph = "personale";
  if (location.hash) {
    graph = location.hash.slice(1);
  }
  showGraph(graph);
}
// sets active tabbar/ menu item
function setActiveTab(graphId) {
  let graphs = document.querySelectorAll(".tabbar a");
  for (let graph of graphs) {
    if (`#${graphId}` === graph.getAttribute("href")) {
      graph.classList.add("active");
    } else {
      graph.classList.remove("active");
    }

  }
}

setDefaultGraph();

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
};
