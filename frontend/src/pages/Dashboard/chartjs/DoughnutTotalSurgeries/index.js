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

export function DoughnutTotalSurgeriesChart() {
  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: [10],
      backgroundColor: ['#AC3483'],
      borderWidth: 0,
    }],
  };

  const options = {
    responsive: true,

  };

  return (
    <Doughnut height={100} width={100} data={data} options={options} />
  );
}
