import React from 'react';
import './style.css';

const LeftNav = () => {
  return (
    <div className="LeftNav col s3">
      <span><div class="container">
          <div class="sidebar">
            <ul>
              <li><a href="#">Расходи</a></li>
              <li><a href="#">Сегодня</a></li>
            </ul>
              <button class="but">
                <ul>
                  <li><a href="#">Статистика</a></li>
                </ul>
              </button>
            
          </div>
        <div class="main-content">
      </div>
    </div></span>
  </div>
  );
};

export default LeftNav;
