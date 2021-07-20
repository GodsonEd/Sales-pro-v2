import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button } from '../Button';
import '../Button.css';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Sales Pro <i className="fas fa-dollar-sign"></i> </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )})}    
                </ul>
                <Button><Link to='/register'>Register</Link></Button>
            </nav>
        )
    }
}

export default Navbar 