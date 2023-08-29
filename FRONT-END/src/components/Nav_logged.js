import {Link} from "react-router-dom";
import React from "react";
import "./Nav_logged.css";
import { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';



class Navbar extends Component {
  
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
          
  render() {
      return (
        <header>
        <nav className="navbar">

          <Link to='/' style={{textDecoration:'none'}}><h1 className="app_title">StartHub</h1></Link>
          <div className="menu_items" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

            <ul id="items" className={this.state.clicked ? "nav_elements active" : "nav_elements"}>

                <Link to='/' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-house-user"></i>Home</li></Link>
                <Link to='/about' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-circle-info"></i>About</li></Link>
                <Link to='/chatbox' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" class="fa fa-comments" aria-hidden="true"></i>Chat</li></Link>
                <Link to='/contact' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-address-book"></i>Contact</li></Link>
                <Link to='/profile'><li className="nav_items"><i class="fa-solid fa-user"></i></li></Link>
                <button className="logout">Logout</button>
              
              </ul>
        </nav>
        </header>
    );
  }
}
         
export default Navbar;