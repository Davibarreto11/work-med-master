import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export let surgerysTotal

export function BarChart() {
  const [monthActually, setMonthActually] = useState({})
  const [lastMonth, setLastMonth] = useState({})
  const [lastTwoMonth, setLastTwoMonth] = useState({})

  useEffect(() => {
    async function loadMedic() {
      const [monthActually, lastMonth, lastTwoMonth] = await Promise.all([
        api.get('/graficquerys/patientsformonth'),
        api.get('/graficquerys/patientslastmonth'),
        api.get('/graficquerys/patientstwomonth'),
      ]);

      setMonthActually(monthActually.data);
      setLastMonth(lastMonth.data);
      setLastTwoMonth(lastTwoMonth.data);
    }

    loadMedic();
  }, []);


  const data = {
    labels: [ `Mês ${lastTwoMonth.rows?.[0]?.mes ? lastTwoMonth.rows?.[0]?.mes : 0 }`, `Mês ${lastMonth.rows?.[0]?.mes ? lastMonth.rows?.[0]?.mes : 0 }`, `Mês ${ monthActually?.rows?.[0]?.mes ? monthActually?.rows?.[0]?.mes : 0 }`],
    datasets: [{
      label: '',
      data: [lastTwoMonth.count, lastMonth.count, monthActually.count],
      backgroundColor: ['#AC3483'],
      // borderColor: 'black',
      borderWidth: 0,
    }],
  };

  surgerysTotal = lastTwoMonth.count + lastMonth.count + monthActually.count

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
