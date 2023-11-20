import React from 'react';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export function WeatherChart() {
  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: [1],
      backgroundColor: ['#27AE60'],
      // borderColor: 'black',
      borderWidth: 0,
    }],
  };

  const options = {
    // borderSkipped: 'middle',
    // borderRadius: 6,
    // inflateAmount: -4,
    responsive: true,
    maintainAspectRatio: false,
  };



  return (
    <Doughnut height={100} width={80} data={data} options={options} />
  );
}
