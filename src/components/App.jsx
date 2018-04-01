import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import withAuth from '../hoc/withAuth';

// Страницы
import AuthPage from '../pages/AuthPage';
import BudgetPage from '../pages/BudgetPage';
import LogoutPage from '../pages/LogoutPage';

//Components
import Header from './Header';
import LeftNav from './LeftNav';
import Main from './Main';
// import RegistrationForm from './RegistrationForm';
// import AuthForm from './AuthForm';
// import AddExpencesForm from './AddExpencesForm';
// import CreateBudget from './CreateBudget';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.onCreateAuthObserver();
  }

  render() {
    const { isAuthenticated } = this.props;
   
    return (
      <div>
        <div className="container">
          <div className="row">
            <LeftNav />
            <div className="main col s9">
              <Header />
              <Main>
                <Switch>
                  <Route exact path="/" component={AuthPage} />
                  <PrivateRoute
                    path="/logout"
                    component={LogoutPage}
                    isAuthenticated={isAuthenticated}
                    redirectTo="/"
                  />
                  <PrivateRoute
                    exact
                    path="/budget"
                    component={BudgetPage}
                    isAuthenticated={isAuthenticated}
                    redirectTo="/"
                  />
                </Switch>
              </Main>
              {/* <RegistrationForm /> */}
              {/* <AuthForm /> */}
              {/* <AddExpencesForm /> */}
              {/* <CreateBudget /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(App);
