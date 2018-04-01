import React, { Component } from 'react';
import AddExpencesForm from '../AddExpencesForm';
import calImg from '../../icons/icon-14.svg';
import plusBtn from '../../icons/icon-16.svg';
import './style.css';

class AddInput extends Component {
  state = {
    isVisibleAddExpForm: false
  } 

  _handleToggleAddExpForm = () => {
    this.setState(prevState => ({
      isVisibleAddExpForm: true,
    }));
  };

  render() {
    return (
      <div className="row AddInput">
        <img className="AddInput__Btn" src={plusBtn} onClick={this._handleToggleAddExpForm} alt="plusBtn" />
        {this.state.isVisibleAddExpForm && <AddExpencesForm />}
        <div>Добавить расходы</div>
        {/* <input
        className="AddInput__input"
        type="text"
        placeholder="Добавить расходы"
      /> */}
        <img className="AddInput__calIco" src={calImg} alt="cal" />
      </div>
    );
  }
};

export default AddInput;
