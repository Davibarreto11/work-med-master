import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export function DoughnutChart({ chartData }) {
  return (
    <Doughnut data={chartData} />
  );
}
