import React from 'react';
import './style.css';

const Header = (prop100, prop1500) => {
  return (
    <div className="Header blue darken-3">
      
    	<div className="row">
    		<div className="col s6"></div>
    	<div className="col s6">
        	<div className="vallign wrapper right blue darken-3 right-align">
        		<i className="h-icon material-icons blue darken-3 white-text">tv</i>
        		<span className="blue darken-3 valign-wrapper white-text">{100 +" грн"}</span>
        		<span className="blue darken-3 valign-wrapper white-text">{"/"+ 1500 +" грн"}</span>
        	</div>
      		</div>
  		</div>
    </div>
  );
};

export default Header;
