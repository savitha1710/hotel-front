import React, { Component } from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight } from "react-icons/fa";


const handleLogout = () => {
  console.log("Logout button clicked!");
  window.localStorage.clear();  // Force remove all data from localStorage
  console.log("Token after logout:", localStorage.getItem("token"));
  window.location.href = "/login";  // Redirect to login
};


export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="Reach Resort" />
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
       <li><Link to="/booking">Book a Room</Link></li> 
       <button onClick={handleLogout}>Logout</button>
          </ul>
        </div>
      </nav>
    );
  }
}





