import React from 'react';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export function LineChart() {
  const data = {
    labels: ['Agosto', 'Setembro', 'Novembro'],
    datasets: [{
      label: 'Gastos por Mês',
      data: [12000, 30000, 8000],
      backgroundColor: (context) => {
        const { ctx } = context.chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 290);
        gradient.addColorStop(0, 'rgba(22, 160, 133, 1)');
        gradient.addColorStop(1, 'rgba(22, 160, 133, 0)');
        return gradient;
      },
      borderColor: 'rgba(22, 160, 133, 1)',
      pointBackgroundColor: 'rgba(22, 160, 133, 1)',
      pointBorderColor: '#fff',
      pointRadius: 5,
      pointHoverRadius: 7,
      borderWidth: 3,
      // backgroundColor: gradient,
      fill: true,
      tension: 0.4,
      // borderDashOffset: ,

    }],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'none',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        stepSize: 100,
        grid: {
          color: 'rgba(255,255,255,0.1)', // Define a cor branca para as linhas de grade do eixo y
        },
        ticks: {
          crossAlign: 'near',
          maxTicksLimit: 7,
          color: '#16A085',
        },
        border: {
          dash: [5, 5],
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
    <Line height={220} width={350} data={data} options={options} />
  );
}
