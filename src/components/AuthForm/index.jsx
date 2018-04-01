import React, { Component } from 'react';
import styles from './styles.css';

class AuthForm extends Component {
  state = {  
    email: '',
    password: '',
  };

  handleInputChange = evt => { 
    const value = evt.target.value;
    const type = evt.target.type;

    this.setState({ [type]: value });
  };

  handleSignInUser = evt => {
    const { email, password } = this.state;
    evt.preventDefault();
    this.props.onSignIn(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="RegistrationForm">
       <p className="Heading">Вход</p>
       <label htmlFor="Email" className="Label">
        Email
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="stanislav.bereza@gmail.com"
          required
          autoFocus
        />
        </label>
        <label htmlFor="Password" className="Label">
         Password
         <input
          className={styles.input}
          type="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder=""
          required
         />
         </label>
          <button className="waves-effect orange darken-1 btn" onClick={this.handleCreateUser}>
            Sign In
          </button>
      </form>
    );
  }
}

export default AuthForm;