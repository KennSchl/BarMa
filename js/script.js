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
        text: "Implementeringen af BarMa Academy"
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
