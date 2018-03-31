import React, { Component } from 'react';

//Components
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import Main from './Components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <LeftNav />
        <div className="main">
          <Header />
          <Main>{/* <AddInput />
          <MainContent /> */}</Main>
        </div>
      </div>
    );
  }
}

export default App;
