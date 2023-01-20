import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      showMe: false,
    }
  }

  onClickButton = () => {
    this.setState({...this.state, showMe:true})
  }

  onChange = (e) =>{
    const tempState = this.state;

    tempState[e.target.name] = e.target.value
    this.setState(tempState)

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <button type="submit" onClick={() =>this.onClickButton()}>Click Me</button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload {this.props.Name} {this.props.number}.
          </p>
          <div className="row">
            <div className="col md-6">
              <input type="text" onChange={(e) => this.onChange(e)} id="firstName" name="firstName" placeholder='Enter your first name' />
              <input type="text" onChange={(e) => this.onChange(e)} id="lastName" name="lastName" placeholder='Enter your last name' />
              <button type="submit" >Submit</button>
            </div>
          </div>
          {this.state.showMe && <Header firstName={this.state.firstName} lastName={this.state.lastName}/>}
        </header>
      </div>
    );
  }
}
export default App;
