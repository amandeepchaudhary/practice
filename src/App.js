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
      lis: [],  /*ARRAY*/
    }
  }
  
  onClickButton = () => {
    this.setState({...this.state, showMe:true})
    // console.log(this.state.lis.length)=0 ans
  }
  
  onClickPush = () => {
    const lis = this.state.lis;
    const id = lis.length + 1;
    const object = {userId: id, userName: 'user'+id};
    lis.push(object);
    this.setState({...this.state, lis:lis});
  }

  onChange = (e) =>{
    const tempState = this.state;

    tempState[e.target.name] = e.target.value
    this.setState(tempState)

  }

  // a way to render elements by loop 
  renderList= () => {
    const arrayEle =[];
    for(var i=0;i <= this.state.lis.length -1; i++){
      const item = this.state.lis[i];
      arrayEle.push(<div key={`div_${i}`}> <span>Id:{item.userId},</span> <span>Name:{item.userName}</span></div>);
    }
    return arrayEle;
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
            </div>
          </div>
          <div className="row">
            <div className="col md-6">
              <button className='btn btn-primary mb-2' type="button" onClick={(e)=>this.onClickPush(e)}>
                Add User
              </button>
            </div>
            <div className="col md-6">
              {/* {this.state.lis && this.state.lis.map((item,index)=>{
                return <div key={`div_${index}`}> <span>Id:{item.userId},</span> <span>Name:{item.userName}</span></div>
              })}This is a way to add userid and userName by mapping */}
              {this.renderList()}
            </div>
          </div>
          {this.state.showMe && <Header firstName={this.state.firstName} lastName={this.state.lastName}/>}
        </header>
      </div>
    );
  }
}
export default App;
