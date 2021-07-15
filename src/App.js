import logo from './logo.svg';
import '../src/components/login/style.css';
import React from 'react';
import { Login } from "./components/login/login";
import { Register } from "./components/login/register";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    }
  }

  changeState() {
    const { isLoginActive } = this.state;
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }))
  }

  render() {
    const { isLoginActive } = this.state; 
    const current = isLoginActive ? "Register" : "Login";
    return (
      <div className="App">
        <div className="container">
          <Side current = {current} containerRef={ref => this.Side = ref} onClick = {this.changeState.bind(this)}/>
          {isLoginActive && <Login containerRef = {(ref) => this.current=(ref)}/> }
          {!isLoginActive && <Register containerRef = {(ref) => this.current=(ref)}/>}
        </div>
        
      </div>
    )
  }
}

const Side = props => {
  return <div className="side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">
        Click here to {props.current} instead.
      </div>  
    </div> 
  </div>
}

export default App;
