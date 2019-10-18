import React, { Component } from 'react';
import { BMICalculator } from '../Modules/BMICalculator';

class DisplayBMIResult extends Component {
  calculate(){
    var weight= this.props.weight;
    var height= this.props.height;
    var method= this.props.method;

      return BMICalculator(weight, height, method);
  }
  render(){
    return(
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayBMIResult