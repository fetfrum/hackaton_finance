import React, { Component } from 'react';

//Components
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import Main from './Components/Main';
import AddInput from './Components/AddInput';
import MainContent from './Components/MainContent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftNav />
          <div className="main col s9">
            <Header />
            <Main>
              <AddInput />
              <MainContent />
            </Main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
