import React from 'react'
import { Card } from 'semantic-ui-react'

const InputFields = (props) => {
  return(
    <Card.Content>
      <h4>Cooper Test calculator</h4>
      
      <select id="gender" onChange={props.inputChangeHandler}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select><br/>

      <label>Age: </label>
        <input id="age" onChange={props.inputChangeHandler}></input><br/>

      <label>Distance: </label>
        <input id="distance" onChange={props.inputChangeHandler}></input>
      
    </Card.Content>
  )
}

export default InputFields;