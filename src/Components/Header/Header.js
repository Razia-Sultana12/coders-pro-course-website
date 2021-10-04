import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf} from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const element = <FontAwesomeIcon icon={faLeaf} />
    return (
        <div className="background d-flex justify-content-between">
          <div className="justify-content-between">
          <h1>{element} CodersPro</h1>
          </div>
          <div className="justify-content-between">
          <Link to="/home" className="linkStyle">Home</Link>
          <Link to="/services" className="linkStyle">Services</Link>
          <Link to="/about" className="linkStyle">About Us</Link>
          <button className="btn btn-success">Sign In</button>
          </div>
          
          
           
        </div>
        
    );
};

export default Header;