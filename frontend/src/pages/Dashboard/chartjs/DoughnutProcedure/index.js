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

export function DoughnutProcedureChart() {
  const data = {
    labels: ['Urologicas', 'Cardíacas', 'Ortopédica', 'Plásticas', 'Oftalmológicas', 'Neurológicas'],
    datasets: [{
      label: 'Quantidade de cirurgia',
      data: [10, 12, 11, 7, 5, 3],
      backgroundColor: ['#227093', '#854BBE', '#7F8C8D', '#C0392B', '#27AE60', '#16A085'],
      borderWidth: 0,
    }],
  };

  const options = {
    // borderSkipped: 'middle',
    // borderRadius: 6,
    // inflateAmount: -4,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <Doughnut height={190} width={150} data={data} options={options} />
  );
}
