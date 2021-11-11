import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'area'
},
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},

series: [{
  data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
  color: '#FF0000'
},
{
  data: [9.9, 1.5, 16.4, 19.2, 14.0, 16.0, 15.6, 18.5, 26.4, 14.1, 95.6, 54.4],
  color: 'green'
}
]
}



export default class HighCharts extends React.Component {
    render() {
      return (
        <div
  
        >
          <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
        </div>
      );
    }
  }
