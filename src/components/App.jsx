import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import withAuth from '../hoc/withAuth';

// Страницы
import AuthPage from '../pages/AuthPage';
import BudgetPage from '../pages/BudgetPage';
import LogoutPage from '../pages/LogoutPage';

class App extends Component {
  componentWillMount() {
    this.props.onCreateAuthObserver();
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
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
      </div>
    );
  }
}

export default withAuth(App);
