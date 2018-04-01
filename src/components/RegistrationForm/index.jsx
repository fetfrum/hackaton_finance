import React, { Component } from 'react';
//import classnames from 'classnames';
import styles from './styles.css';

class RegistrationForm extends Component {
  state = {
    name: '',  
    email: '',
    password: '',
  };

  handleInputChange = evt => { 
    const value = evt.target.value;
    const type = evt.target.type;

    this.setState({ [type]: value });
  };

  handleCreateUser = evt => {
    const { name, email, password } = this.state;
    evt.preventDefault();
    this.props.onCreateUser(name, email, password);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form className="RegistrationForm">
       <p className="Heading">Регистрация</p>
       <label htmlFor="Name" className="Label">
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Stanislav"
          required
          autoFocus
        />
       </label>
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
            Sign Up
          </button>
      </form>
    );
  }
}

export default RegistrationForm;