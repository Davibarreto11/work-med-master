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

export function DoughnutDoctorChart(id) {
  // const [doctorsId, setDoctorsId] = useState([])
  const [doctors, setDoctors] = useState([]);
  // const [patitents, setPatients] = useState([]);

  useEffect(() => {
    api.patch(`/graficquerys/doctor/${1}`)
      .then(response => setDoctors(response.data))
  }, [])

  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: [doctors.count],
      backgroundColor: ['#FF7723'],
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
    <Doughnut
      width={120}
      data={data}
      options={options}
    />
  );
}
