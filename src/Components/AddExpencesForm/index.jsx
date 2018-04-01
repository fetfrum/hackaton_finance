import React, { Component } from 'react';
//import classnames from 'classnames';
import ExpencesItems from '../ExpencesItems';
import styles from './styles.css';

class AddExpencesForm extends Component {
  state = {
    name: '',  
    summ: '',
    comment: '',
  };

  handleInputChange = evt => { 
    const value = evt.target.value;
    const type = evt.target.type;

    this.setState({ [type]: value });
  };

  handleCreateUser = evt => {
    const { name, summ, comment } = this.state;
    evt.preventDefault();
    this.props.onCreateUser(name, summ, comment);
  };

  render() {
    const { name, summ, comment } = this.state;

    return (
      <form className="AddExpencesForm">
       <p className="Heading">Новые расходы</p>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Название"
          required
          autoFocus
        />
        <input
          className={styles.input}
          type="text"
          value={summ}
          onChange={this.handleInputChange}
          placeholder="Сумма"
          required
          autoFocus
        />
        {/* <div className="Icons"> */}
          <ExpencesItems />
        {/* </div> */}
         <input
          className="datepicker"
          type="text"
          // value={date}
          onChange={this.handleInputChange}
          placeholder="Дата"
          required
         />
         <input
          className={styles.input}
          type="text"
          value={comment}
          onChange={this.handleInputChange}
          placeholder="Комментарий"
          required
         />
          <button className="waves-effect orange darken-1 btn" onClick={this.handleCreateUser}>
            Сохранить
          </button>
      </form>
    );
  }
}

export default AddExpencesForm;