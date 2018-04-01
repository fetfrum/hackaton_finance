import React, { Component } from 'react';

//Components
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import Main from './Components/Main';
import RegistrationForm from './components/RegistrationForm';
import AuthForm from './components/AuthForm';
import AddExpencesForm from './components/AddExpencesForm';
import CreateBudget from './components/CreateBudget';
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
          <AddExpencesForm />
          <CreateBudget />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
