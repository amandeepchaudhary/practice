import logo from './logo.svg';
import './App.css';
import React from 'react';

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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{this.state.firstName}</span>
            <span>{this.state.lastName}</span>
          </a>
        </header>
      </div>
    );
  }
}
export default App;
