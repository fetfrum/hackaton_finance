import React from 'react';
import './style.css';

const MainContent = () => {
  return (
    <div className="MainContent col s12">
      <table className="striped">
        <thead>
          <tr>
            <th>Статья расходов</th>
            <th>Дата</th>
            <th className="right-align">Всего, грн. за ед-цу</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td className="right-align">{10}грн.</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td className="right-align">{10}грн.</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td className="right-align">{10}грн.</td>
          </tr>
        </tbody>
      </table>
      <div className="Sum">Итого: {100}грн.</div>
    </div>
  );
};

export default MainContent;
