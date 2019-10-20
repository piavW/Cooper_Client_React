import React, { Component } from 'react';
import CooperCalculator from '../Modules/CooperCalculator';
import { saveData } from '../Modules/PerformanceData';

class DisplayCooperResult extends Component {

  calculate() {
    return CooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  async saveCooperData() {
    const result = this.calculate();
    const distanceData = this.props.distance;
    try {
      await saveData(result, distanceData);
      this.props.entryHandler();
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;
    
    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveButton = (
        <>
          <button id="save-result" onClick={this.saveCooperData.bind(this)}>Save entry</button>
        </>
      )
    } else if (this.props.authenticated === true && this.props.entrySaved === true) {
      saveButton = (
        <>
          <p>Your entry was saved</p>
        </>
      )
    }

    if (this.props.age !== '' && this.props.distance !== '') {
      results = (
        <div>
          <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p> 
          <p>Result: {this.calculate()}</p>
          {saveButton}
        </div>
      )
    }
    return (
      <div>
        {results}
      </div>
    )
  }
}
export default DisplayCooperResult 