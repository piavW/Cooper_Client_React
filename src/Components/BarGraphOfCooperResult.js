import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Input 1', 'Input 2', 'Input 3', 'Input 4', 'Input 5', 'Input 6', 'Input 7'],
  datasets: [
    {
      label: 'result and distance',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [distanceData, 11, 20, 81, 56, 55, 40] //We want to retrieve the saved this.props.distance here.
    }
  ]
};
class BarGraph extends Component {
  render() {
    return (
      <div>
        <h3>Your Cooper Test results and distance </h3>
        <Bar id="bar-graph"
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
export default BarGraph;