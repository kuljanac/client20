import React from 'react';
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, PieController, Legend, Tooltip } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Legend, Tooltip);

const PieChart = ({ data }) => {
  const theme = useTheme();
  const colorTokens = tokens(theme.palette.mode);

  const colors = [
    colorTokens.primary[200],
    colorTokens.primary[800],
    colorTokens.yellowAccent[500],
    colorTokens.yellowAccent[300],
    colorTokens.white[200]
    // add more colors if needed
  ];

  const labels = data.map(item => item.naziv);
  const dataValues = data.map(item => item.count);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Hits',
        data: dataValues,
        backgroundColor: colors,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          font: {
            size: 18,  
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            return context[0].label;
          },
          label: (context) => {
            return 'Count: ' + context.parsed;
          }
        }
      },
    },
  };

  return (
  <Box sx={{ width: '100%', height: '65vh' }}>

    <Pie data={chartData} options={chartOptions} />

</Box>
  );
};

export default PieChart;
