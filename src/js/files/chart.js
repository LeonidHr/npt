import { Chart } from "chart.js";

const labels = [
  '1/18',
  '3/18',
  '5/18',
  '7/18',
  '9/18',
  '11/18',
  '1/19',
  '3/19',
  '5/19',
  '7/19',
  '9/19',
  '11/19',
  '1/20',
  '3/20',
  '5/20',
  '7/20',
  '9/20',
  '11/20',
  '1/21',
  '3/21',
  '5/21',
  '7/21',
  '9/21',
  '11/21',
  '1/22',
  '3/22',
  '5/22',
  '7/22',
  '9/22',
  '11/22',
];

const data = {
  labels: labels,
  datasets: [{
    label: '',
    backgroundColor: 'transparent',
    borderColor: '#2DFFD9',
    pointBorderColor: '#2DFFD9',
    data: [100, 150, 171, 190, 179, 196, 240, 290, 280, 301, 310, 324, 315, 340, 323, 380, 440, 423, 460, 560, 550, 570, 610, 604, 640, 690, 740, 733, 756, 765, 780],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

if (document.getElementById('myChart')) {
  const myChart = new Chart(
    document.getElementById('myChart').getContext('2d'),
    config
  );
}

