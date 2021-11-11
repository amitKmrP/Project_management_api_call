import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
const state = {

  datasets: [
    {
      label: 'Project Stats',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
        }
  ]
}

export default class ProgressPieChart extends React.Component {
  render() {
    return (
      <div

      >
        <Doughnut
      thickness={10}
      size={10}
          data={state}
          options={{
            title: {
              display: true,
              text: 'Project Stats',
              fontSize: 20

            },
            legend: {
              display: true,
              position: 'right'


            }
          }}
        />

        {/* <CircularProgress value={40} color="green.400" r='1px'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress> */}

      </div>
    );
  }
}