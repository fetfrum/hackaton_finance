import React, { Component } from 'react';
import styles from './styles.css';

class CreateBudget extends Component {
  state = {  
    summ: '',
    period: '',
  };

  handleInputChange = evt => { 
    const value = evt.target.value;
    const type = evt.target.type;

    this.setState({ [type]: value });
  };

  handleSignInUser = evt => {
    const { summ, period } = this.state;
    evt.preventDefault();
    this.props.onSignIn(summ, period);
  };

  render() {
    const { summ, period } = this.state;

    return (
      <form className="CreateBudget">
       <p className="Heading">Создать бюджет</p>
        <input
          className={styles.input}
          type="text"
          value={summ}
          onChange={this.handleInputChange}
          placeholder="Сумма"
          required
          autoFocus
        />
        <div className="input-field col s12">
         <select>
            <option value="" disabled selected>Период</option>
            <option value="Day">Day</option>
            <option value="Week">Week</option>
            <option value="Month">Month</option>
         </select>
        </div> 
          <button className="waves-effect orange darken-1 btn" onClick={this.handleCreateUser}>
            Сохранить
          </button>
      </form>
    );
  }
}

export default CreateBudget;