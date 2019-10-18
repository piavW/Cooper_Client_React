import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';

import App from '../App';
import BMIInputFields from '../Components/BMIInputFields'

describe('<App />', () => {
  it('renders header', () => {
    const component = shallow(<BMIInputFields />);
    const header = <h1>BMI Converter</h1>;
    expect(component.contains(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<BMIInputFields />);
    const weightLabel = <label>Weight (kg)</label>;
    const heightLabel = <label>Height (cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const onChangeValue = stub();
    const component = shallow(<BMIInputFields onChangeValue={onChangeValue} />);
    const weightLabel = <label>Weight (lbs)</label>;
    const heightLabel = <label>Height (inches)</label>;
    component.find("#method").prop('onChange')({target: {value:'imperial'}});
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })
})


describe('<BMIInputFields />', () => {
  it('has two methods to choose from', () => {
    const component = mount(<BMIInputFields />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  }
)})