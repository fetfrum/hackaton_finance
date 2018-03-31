import React from 'react';

//Components

import './style.css';

const Main = props => {
  return (
    <div className="Main col s12">
      <div>{props.children}</div>
    </div>
  );
};

export default Main;
