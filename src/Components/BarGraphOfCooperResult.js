import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { getData } from '../Modules/PerformanceData';

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
    })
  }

  render() {
    let barGraphData
    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      barGraphData = (
        this.state.performanceData.map(item => {
          return `${item.data.distance}`
        })
      )
    }

    const barData = {
      labels: ['Input 1', 'Input 2', 'Input 3', 'Input 4', 'Input 5', 'Input 6', 'Input 7'],
      datasets: [{
          label: 'distance in meters',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: barGraphData
        }]
    };

    return (
      <>
      <div>
        <Bar id="bar-graph"
          data={barData} 
          width={50} 
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    </>
    );
  }
}

export default BarGraph;