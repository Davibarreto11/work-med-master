import React from 'react';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export function BarChart() {
  const data = {
    labels: ['Agosto', 'Setembro', 'Outubro'],
    datasets: [{
      label: '',
      data: [10, 12, 11],
      backgroundColor: ['#AC3483'],
      // borderColor: 'black',
      borderWidth: 0,
    }],
  };

  const options = {
    borderSkipped: 'middle',
    borderRadius: 6,
    inflateAmount: -4,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'none',
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255,255,255,0.2)', // Define a cor branca para as linhas de grade do eixo y
        },
        ticks: {
          crossAlign: 'near',
          maxTicksLimit: 7,
          color: '#AC3483',
        },
        border: {
          dash: [5, 4],
        },
      },
      x: {
        grid: {
          color: 'rgba(255,255,255,0)', // Define a cor branca para as linhas de grade do eixo y
        },
      },
    },
  };

  return (
    <Bar height={200} width={350} data={data} options={options} />
  );
}
