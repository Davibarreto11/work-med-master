import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS, BarElement, CategoryScale, LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import api from '../../../../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
);

export function DoughnutMedicHistoric() {
  const [medicHistoric, setMedicHistoric] = useState({});

  useEffect(() => {
    api.get('graficquerys/medichistory')
      .then((response) => { setMedicHistoric(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: [medicHistoric.totalCount],
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
