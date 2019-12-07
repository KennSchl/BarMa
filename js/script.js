"use strict";

let sheetId = "1FHVRKe8HKRFN7eI7FJ64jMjGL2TxNuWqVbIL4L5RlWo";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);


fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendChart(json.feed.entry);
  });

function appendChart(data) {
  console.log(data);

  // prepare data
  let transaktionerOld = [];
  let transaktionerNew= [];
  let months = [];

  for (let object of data) {
    transaktionerOld.push(object.gsx$transaktionerOld.$t);
    transaktionerNew.push(object.gsx$transaktionerNew.$t);
    months.push(object.gsx$months.$t);
  }

  console.log(transaktionerOld);
  console.log(transaktionerNew);
  console.log(months);

  // generate chart
  let chart = document.getElementById('chart');
  let myDoughnutChart = new Chart(chart, {
    type: 'line',
    data: {
      datasets: [{
        data: transaktionerOld,
        label: 'Transaktioner 2018',
        fill: false,
        borderColor: "#9cdbd4",
        borderDash: [5, 5],
        backgroundColor: "#9cdbd4",
        pointBackgroundColor: "#9cdbd4",
        pointBorderColor: "#9cdbd4",
        pointHoverBackgroundColor: "#9cdbd4",
        pointHoverBorderColor: "#9cdbd4",
      },
      {label: 'Transaktioner 2019',
          data: transaktionerNew,
          fill: false,
          borderColor: "#55bae7",
          backgroundColor: "#55bae7",
          pointBackgroundColor: "#e755ba",
          pointBorderColor: "#e755ba",
          pointHoverBackgroundColor: "#e755ba",
          pointHoverBorderColor: "#e755ba",
          type: 'line' }],
      labels: months
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 400000
          }
        }]
      }
    }
  });
}
