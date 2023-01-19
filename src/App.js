import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  onClickButton = () => {
    this.setState({ firstName: "Aman", lastName: "Chaudhary" })
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
          <Header firstName={this.state.firstName} lastName={this.state.lastName}/>
        </header>
      </div>
    );
  }
}
export default App;
