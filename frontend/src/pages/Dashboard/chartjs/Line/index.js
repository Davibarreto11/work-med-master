import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export let totalExpenses3Months

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export function LineChart() {
  const [monthActually, setMonthActually] = useState({})
  const [lastMonth, setLastMonth] = useState({})
  const [lastTwoMonth, setLastTwoMonth] = useState({})
  const [monthActuallyDay, setMonthActuallyDay] = useState({})
  const [lastMonthDay, setLastMonthDay] = useState({})
  const [lastTwoMonthDay, setLastTwoMonthDay] = useState({})

  useEffect(() => {
    async function loadMedic() {
      const [monthActuallyDay, lastMonthDay, lastTwoMonthDay] = await Promise.all([
        api.get('/graficquerys/patientsformonth'),
        api.get('/graficquerys/patientslastmonth'),
        api.get('/graficquerys/patientstwomonth'),
      ]);

      setMonthActuallyDay(monthActuallyDay.data);
      setLastMonthDay(lastMonthDay.data);
      setLastTwoMonthDay(lastTwoMonthDay.data);
    }

    loadMedic();
  }, []);

  useEffect(() => {
    async function loadMedic() {
      const [monthActually, lastMonth, lastTwoMonth] = await Promise.all([
        api.get('/graficquerys/expensesformonth'),
        api.get('/graficquerys/expenseslastmonth'),
        api.get('/graficquerys/expensestwomonth'),
      ]);

      setMonthActually(monthActually.data);
      setLastMonth(lastMonth.data);
      setLastTwoMonth(lastTwoMonth.data);
    }

    loadMedic();
  }, []);

  const data = {
    labels: [`Mês ${lastTwoMonthDay.rows?.[0]?.mes ? lastTwoMonthDay.rows?.[0]?.mes : 0 }`, `Mês ${lastMonthDay.rows?.[0]?.mes ? lastMonthDay.rows?.[0]?.mes : 0 }`, `Mês ${monthActuallyDay.rows?.[0]?.mes ? monthActuallyDay.rows?.[0]?.mes :  0 }`],
    datasets: [{
      label: 'Gastos por Mês',
      data: [lastTwoMonth, lastMonth, monthActually],
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

  totalExpenses3Months = lastTwoMonth + lastMonth + monthActually

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
