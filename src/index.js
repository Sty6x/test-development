import './style.css'
import Chart from 'chart.js/auto';
const main = document.querySelector('main')
const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'myChart');
main.append(canvas)

const ctx = document.getElementById('myChart').getContext('2d');
const dataList = [{ temp: 38, date: 'wednesday' }, { temp: 45, date: 'tuesday' }, { temp: 23, date: 'thursday' },
{ temp: 23, date: 'saturday' }, { temp: 23, date: 'friday' }, { temp: 38, date: 'wednesday' }, { temp: 45, date: 'tuesday' }, { temp: 23, date: 'thursday' },
{ temp: 23, date: 'saturday' }, { temp: 23, date: 'friday' }]



function outputData(dataList, what) {
  const arb = []
  if (what === 'temp') {
    for (let i = 0; i < dataList.length; i++) {
      arb.push(dataList[i].temp)
    }
    return arb
  } else if (what === 'date') {

    for (let i = 0; i < dataList.length; i++) {
      arb.push(dataList[i].date)
    }
    return arb
  }
}
const hourlyDate = outputData(dataList, 'date');
const hourlyTemps = outputData(dataList, 'temp');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: hourlyDate,
    datasets: [{
      label: 'Hourly Temperature',
      data: hourlyTemps,
      borderRadius: 10,
      borderWidth: 9,
      // barThickness: 10,
      backgroundColor: [
        'rgba(255, 99, 132, )',
        'rgba(54, 162, 235, )',
        'rgba(255, 206, 86, )',
        'rgba(75, 192, 192, )',
        'rgba(153, 102, 255,)',
        'rgba(255, 159, 64, )'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }]
  },
  options: {

    layout: {
      padding: 200
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
