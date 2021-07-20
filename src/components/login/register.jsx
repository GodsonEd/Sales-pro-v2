import React from "react";
import './style.css';
import { Link } from 'react-router-dom';


export class Register extends React.Component {
    constructor(props) {
        super(props);
    }
//make sure to replace the src below
    render() {
        return ( 
        <div className="base-container"ref={this.props.containerRef}>
            
            <div className="content">
                <h1 className="title">Register</h1>
                <Link to="/login" className="switch-tab">Click here to Login instead</Link>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <button type="button" className="btn">Register</button>
                </div>
            </div>
            
        </div>
    );
    }
}
export default Register