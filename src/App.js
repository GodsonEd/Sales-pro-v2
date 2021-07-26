import '../src/components/login/style.css';
import './App.css';
import React from 'react';
import { Login } from "./components/login/Login";
import { Register } from "./components/login/Register";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


//make color of website change with customer


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: false,
    }
  }

  changeState() {
    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive }))
  }

  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
                <Route exact path="/">
                  <Home></Home>  
                </Route>       
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/register">
                  <Register></Register>
                </Route>
            </Switch> 
        </BrowserRouter>
      </div>
    )
  }
}

const Side = props => {
  return <div className="side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text" style={{cursor: "pointer"}}>
        <a href={props.current == "Login" ? "/login" : "/register"}>
          Click here to {props.current} instead.
        </a>
        
      </div>  
    </div> 
  </div>
}

export default App;
