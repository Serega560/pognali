import React from 'react';
import './level.module.scss'

function Level() {
  return (
    <div className="level">
      <div className="level__wrapper">
        <div className="level__container">
          <div className="level__progress">
            <svg>
              <circle cx="29" cy="29" r="29"></circle>
              <circle cx="29" cy="29" r="29"></circle>
            </svg>
            <div className="level__number">
              <b>80</b>
              <span>level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Level;