import React, { Component } from 'react';

//Components
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import Main from './Components/Main';
import RegistrationForm from './Components/RegistrationForm';
import AuthForm from './Components/AuthForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <LeftNav />
          <div className="main col s9">
            <Header />
            <Main>{/* <AddInput />
          <MainContent /> */}</Main>
          <RegistrationForm />
          <AuthForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
