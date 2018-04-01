import React, { Component } from 'react';
//import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ExpencesItems from '../ExpencesItems';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.css';

class AddExpencesForm extends Component {
  // state = {
  //   name: '',  
  //   summ: '',
  //   date: '',
  //   comment: '',
  // };
state = {
  startDate: moment()
};
handleChange = this.handleChange.bind(this);

handleChange(date) {
  this.setState({
    startDate: date
  });
}

_handleShutAddExpForm = () => {
  this.setState({
    isVisibleAddExpForm: false
  });
};
  // handleInputChange = evt => { 
  //   const value = evt.target.value;
  //   const type = evt.target.type;
  //   this.setState({ [type]: value });
  // };

  render() {    
    //const { name, summ, date, comment } = this.state;
    const { isVisibleAddExpForm } = this.state;
    return (
      <form className="AddExpencesForm">
       <p className="Heading">Новые расходы</p>
        <input
          // className={styles.input}
          type="text"
          // value={name}
          // onChange={this.handleInputChange}
          placeholder="Название"
          required
          autoFocus
        />
        <input
          // className={styles.input}
          type="text"
          // value={summ}
          // onChange={this.handleInputChange}
          placeholder="Сумма"
          required
          autoFocus
        />
          <ExpencesItems />
          <div className="date">
          <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="DD/MM/YYYY"
        />
          </div>
        
         {/* <input
          // className="datepicker"
          type="text"
          // value={date}
          // onChange={this.handleInputChange}
          placeholder="Дата"
          required
         /> */}
         <input
          // className={styles.input}
          type="text"
          // value={comment}
          // onChange={this.handleInputChange}
          placeholder="Комментарий"
          required
         />
         <div className="buttons">
          <button className="waves-effect orange darken-1 btn" onClick={this.handleCreateUser}>
            Сохранить
          </button>
          <button className="waves-effect orange darken-1 btn" onClick={this._handleShutAddExpForm}>
            Отмена
          </button>
         </div>
      </form>
    );
  }
}

export default AddExpencesForm;