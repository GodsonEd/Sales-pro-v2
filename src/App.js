import '../src/components/login/style.css';
import './App.css';
import React from 'react';
import { Login } from "./components/login/login";
import { Register } from "./components/login/register";
import { Header } from "./components/header";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    }
  }

  changeState() {
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }))
  }

  render() {
    const { isLoginActive } = this.state; 
    const current = isLoginActive ? "Register" : "Login";
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          {isLoginActive &&  <h1 className="title">Login</h1>}
          {!isLoginActive &&  <h1 className="title">Register</h1>}

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
