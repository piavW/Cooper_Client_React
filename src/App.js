import React, { Component} from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LogInForm from './Components/LogInForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import BMIInputFields from './Components/BMIInputFields';
import BarGraph from './Components/BarGraphOfCooperResult';
import { Card, Container ,Header,Icon,Button,} from 'semantic-ui-react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email:'',
      password:'',
      message:'',
      entrySaved: false
   }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

 render() {
  let renderLogin;
  let user;
  let performanceDataIndex;

  if (this.state.authenticated === true) {
    user = JSON.parse(sessionStorage.getItem('credentials')).uid;
    renderLogin = (
      <p>Hi {user}</p>
    )
    performanceDataIndex = (
      <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
    )
    if (this.state.renderIndex === true) {
      performanceDataIndex = (
        <>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={this.indexUpdated.bind(this)}
            />
            <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
        </>
      )
    } else {
      performanceDataIndex = (
        <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
      )
    }
  } else {
    if (this.state.renderLoginForm === true) {
      renderLogin = (
        <>
          <LogInForm 
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
          </>
      )
    } else {
      renderLogin = (
        <>
          <button  id="login" onClick={() => this.setState({ renderLoginForm: true })}> <Button inverted color='black'>Login </Button> </button>
          <p>{this.state.message}</p>
        </>
      )
    }
  }

    return (
       <>
      {/* //   <Menu > Cooper Test and BMI calculator</Menu> */}
      <Header as='h' icon textAlign='center'>
      <Icon name='calculator' circular />
      <Header.Content>Cooper Test and BMI calculator</Header.Content>
    </Header>
  
    <div class="ui centered card" icon textAlign='center'> 
          <div>
            {renderLogin}
          </div>
    </div>
      
    <div class="ui centered cards"  textAlign='center'>
         <Card color='black'>
          <InputFields 
            inputChangeHandler={this.onChange.bind(this)}
          />

          <DisplayCooperResult
            distance={this.state.distance}
            gender={this.state.gender}
            age={this.state.age}
            authenticated={this.state.authenticated}
            entrySaved={this.state.entrySaved}
            entryHandler={this.entryHandler.bind(this)}
          />
            {performanceDataIndex}
        </Card>
        <Card color='black'>
          <div>
            <BMIInputFields />
          </div>
          </Card>
       </div>
          
          <Container>
          <div>
            <BarGraph/>
          </div>
        </Container>
      </>
    );

  }
  
}
export default App;