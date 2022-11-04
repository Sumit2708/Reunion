import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../Images/logo.jpg";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navbar"> 
          <div className="logo">
            <img src={logo} alt='Logo' height={50} />
            <p>Esatery</p>
          </div>
          <ul>
            <li><Link to='/' style={{textDecoration:'none',color:"rgb(88, 82, 212)"}}>Home</Link></li>
            <li><Link to='/Favourite_property' style={{textDecoration:'none',color:"rgb(88, 82, 212)"}}>Favourites</Link></li>
            <li><Link to='/Selling_details' style={{textDecoration:'none',color:"rgb(88, 82, 212)"}}>Sell</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
