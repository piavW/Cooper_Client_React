import React from 'react';

const LogInForm = (props) => {
  return (
    <form>
        <div>
            <label> Email</label>
            <input id="email" onChange={props.inputChangeHandler}></input>
        </div>
        <div>
          <label>Password</label>
          <input id="password" onChange={props.inputChangeHandler}></input>
        </div>
        <button id="submit" onClick={(e) => props.loginHandler(e)}>Submit </button>
    </form>
  )
}
export default LogInForm;