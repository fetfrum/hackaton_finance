import React, { Component } from 'react';
import './style.css';

class LeftNav extends Component {
  
  state = {
    isVisiblePeriod: false,
    isVisibleConsume: false,
  };

  _handleTogglePeriod = () => {
    this.setState(prevState => ({
      isVisiblePeriod: !prevState.isVisiblePeriod,
    }));
  };

  _handleToggleConsume = () => {
    this.setState(prevState => ({
      isVisibleConsume: !prevState.isVisibleConsume,
    }));
  };

  render() {
    const сonsumes = [
      'Здоровье',
      'Еда',
      'Гигиена',
      'Жилье',
      'Одежда',
      'Спорт',
      'Отдых',
      'Связь',
      'Транспорт',
      'Питомцы',
      'Подарки',
    ];
    return (
      <div className="LeftNav col s3">
        <ul className="menu-items">
          <li className="menu-item" onClick={this._handleToggleConsume}>
            Расходы
          </li>
          <div>
            {this.state.isVisibleConsume && (
              <ul>
                {сonsumes.map((сonsume, idx) => (
                  <li className="period-item" key={сonsume[idx]}>
                    {сonsume}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <li className="menu-item" onClick={this._handleTogglePeriod}>
            Период
          </li>
          <div>
            {this.state.isVisiblePeriod && (
              <ul>
                <li className="period-item">День</li>
                <li className="period-item">Неделя</li>
                <li className="period-item">Месяц</li>
              </ul>
            )}
          </div>
          <li className="menu-item">Статистика</li>
        </ul>
        <button className="btn orange darken-1 addBudjet">
          Создать бюджет
        </button>
        <div className="main-content" />
      </div>
    );
  }
}

export default LeftNav;
