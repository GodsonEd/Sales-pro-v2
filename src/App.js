import logo from './logo.svg';
import './App.css';
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
    if(isLoginActive) {
      this.Side.classList.remove("right");
      this.Side.classList.add("left");
    } else {
      this.Side.classList.remove("left");
      this.Side.classList.add("right");
    }
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }))
  }

  render() {
    const { isLoginActive } = this.state; 
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="container">
          {isLoginActive && <Login containerRef = {(ref) => this.current=(ref)}/> }
          {!isLoginActive && <Register containerRef = {(ref) => this.current=(ref)}/>}
        </div>
        <Side current = {current} containerRef={ref => this.Side = ref} onClick = {this.changeState.bind(this)}/>
      </div>
    )
  }
}

const Side = props => {
  return <div className="side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">
        {props.current}  
      </div>  
    </div> 
  </div>
}
export default App;
