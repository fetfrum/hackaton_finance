import React from 'react';
import wallet from '../../icons/icons-10.svg';
import { Link } from 'react-router-dom';
import './style.css';

const Header = props => {
  return (
    <div className="Header blue darken-3">
      <Link className="logOut-link" to="/logout">
        LogOut
      </Link>
      <div className="vallign wrapper right blue darken-3 right-align">
        <img className="wallet" src={wallet} alt="wallet" />
        <span className="blue darken-3 valign-wrapper white-text">
          {100}грн./
        </span>
        <span className="blue darken-3 valign-wrapper white-text">
          {1500}грн.
        </span>
      </div>
    </div>
  );
};

export default Header;
