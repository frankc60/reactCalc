import React from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';

import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      display1: "-",
      display2: " ",
    };
  }

  clickHandler(e) {
    const val = e.target.value;
    // alert("clicked " + val)
    switch (val) {
      case "=":
        // alert("equals")
        let answer="n/a"
        try {
          answer = eval(this.state.display2);
        } catch (er) {
          answer = "error"
        }
        this.setState({
          display1: answer,
        })
        break;
      case "C": // clear 
        this.setState({
          display1: "-",
          display2: ""
        })
        
        break;
      default:
        this.setState({
          display2: this.state.display2 + val
        });
        break;
    }

    
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="box">
            <Display value={this.state.display1} />
          </div>
        <div className="box2">
          <Display value={this.state.display2} />
        </div>
          <div>
            <Keypad value="1" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="2" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="3" clickHandler={this.clickHandler.bind(this)}/>  
          </div>
          <div>
            <Keypad value="*" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="/" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="C" clickHandler={this.clickHandler.bind(this)}/>  
          </div>
          <div>
            <Keypad value="+" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="-" clickHandler={this.clickHandler.bind(this)}/>
            <Keypad value="=" clickHandler={this.clickHandler.bind(this)}/>  
          </div>
      </div>
    );
  }
}

export default App;
