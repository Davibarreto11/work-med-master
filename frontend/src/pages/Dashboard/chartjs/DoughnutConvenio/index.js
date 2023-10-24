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

export function DoughnutConvenio() {
  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: [10],
      backgroundColor: ['#308ECC'],
      borderWidth: 0,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Doughnut height={120} width={120} data={data} options={options} />
  );
}
