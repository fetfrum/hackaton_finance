import React, { Component } from 'react';
import AddExpencesForm from '../AddExpencesForm';
import calImg from '../../icons/icon-14.svg';
import plusBtn from '../../icons/icon-16.svg';
import './style.css';

class AddInput extends Component {
  state = {
    isVisibleAddExpForm: false
  } 

  _handleOpenAddExpForm = () => {
    this.setState(prevState => ({
      isVisibleAddExpForm: true,
    }));
  };

  _handleCloseAddExpForm = () => {
    this.setState(prevState => ({
      isVisibleAddExpForm: false,
    }));
  };

  render() {
    return (
      <div className="AddInput">
        <img className="AddInput__Btn" src={plusBtn} onClick={this._handleOpenAddExpForm} alt="plusBtn" />
        {this.state.isVisibleAddExpForm && <AddExpencesForm close={this._handleCloseAddExpForm} />}
        <div className="AddInput__name">Добавить расходы</div>
        {/* <input
        className="AddInput__input"
        type="text"
        placeholder="Добавить расходы"
      /> */}
        {/* <img className="AddInput__calIco" src={calImg} alt="cal" /> */}
      </div>
    );
  }
};

export default AddInput;
