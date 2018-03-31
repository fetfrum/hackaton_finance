import React from 'react';
import calImg from '../../icons/icon-14.svg';
import plusBtn from '../../icons/icon-16.svg';
import './style.css';

const AddInput = props => {
  return (
    <div className="row AddInput">
      <img className="AddInput__Btn" src={plusBtn} alt="plusBtn" />
      <input
        className="AddInput__input"
        type="text"
        placeholder="Добавить расходы"
      />
      <img className="AddInput__calIco" src={calImg} alt="cal" />
    </div>
  );
};

export default AddInput;
