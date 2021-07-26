import './style.css';
import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome to <span className="salesprotext">Sales Pro</span><span className="copy">&copy;</span></h1>
        <p className="description">Here is some placeholder text about Act First and Sales Pro&copy;</p>
      </div>
    )
  }
}

export default Home
