import React from 'react';
import './style.css';

const LeftNav = () => {
  return (
    <div className="LeftNav col s3">
      <ul className="menu-items">
        <li className="menu-item">Расходы</li>
        <li className="menu-item">Период</li>
        <li className="menu-item">Статистика</li>
      </ul>
      <button className="btn orange darken-1 addBudjet">Создать бюджет</button>
      <div className="main-content" />
    </div>
  );
};

export default LeftNav;
