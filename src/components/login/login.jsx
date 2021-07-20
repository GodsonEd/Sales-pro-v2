import React from "react";
import './style.css';
import { Link } from 'react-router-dom';


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="content">
                <h1 className="title">Login</h1>
                <Link to="/register" className="switch-tab">Click here to Register instead</Link>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        </div>
        );
    }
}
export default Login