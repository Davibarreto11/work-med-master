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
  const [doctors, setDoctors] = useState([]);
  const [patitents, setPatients] = useState([]);

  useEffect(() => {
    api.get('doctors')
      .then((response) => { setDoctors(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api.get('patients')
      .then((response) => { setPatients(response.data); })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    labels: '',
    datasets: [{
      label: '',
      data: patitents.map((patients) => patients.doctor_id),
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
      id={doctors.map((doctor) => doctor.id === patitents.map((patient) => patient.id))}
      height={120}
      width={120}
      data={data}
      options={options}
    />
  );
}
